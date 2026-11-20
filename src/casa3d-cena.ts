// Cena 3D (Three.js). Carregada só quando a maquete é aberta.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PISO, PISO_VARANDA, PAREDES, BLOCO, JANELAS, PORTA_VIDRO, GUARDA_CORPO, MOVEIS, COMODOS_PLANTA, mx, mz, m } from './planta';

export type Fantasma = { id: string; x: number; z: number; l: number; p: number; a: number };
export type Cena = {
  focar: (id: string | null) => void; paredes: (altas: boolean) => void; fantasmas: (f: Fantasma[]) => void;
  projetar: (x: number, y: number, z: number) => { x: number; y: number; ok: boolean } | null; onMudou: (fn: () => void) => void; destruir: () => void;
};

const ALTA = 2.6, BAIXA = 1.15, ESP = 0.12;
const CENTRO = new THREE.Vector3(mx(189), 0, mz(183));

export function criarCena(el: HTMLElement): Cena {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  el.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  const controls = new OrbitControls(cam, renderer.domElement);
  controls.enableDamping = true; controls.maxPolarAngle = 1.42; controls.minDistance = 2.5; controls.maxDistance = 22; controls.screenSpacePanning = true;

  scene.add(new THREE.HemisphereLight(0xffffff, 0xcfc8bb, 2.3));
  const sol = new THREE.DirectionalLight(0xfff4e6, 2.2);
  sol.position.set(-4, 10, 12); sol.castShadow = true; sol.shadow.mapSize.set(1024, 1024);
  Object.assign(sol.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 30 }); sol.shadow.bias = -0.0005;
  sol.target.position.copy(CENTRO); scene.add(sol, sol.target);

  const mat = (cor: string, extra: Partial<THREE.MeshStandardMaterialParameters> = {}) => new THREE.MeshStandardMaterial({ color: cor, roughness: 0.75, ...extra });
  const box = (w: number, h: number, d: number, material: THREE.Material, x: number, y: number, z: number) => {
    const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material); me.position.set(x, y, z); me.castShadow = true; me.receiveShadow = true; scene.add(me); return me;
  };
  const forma = (pts: [number, number][]) => { const s = new THREE.Shape(); pts.forEach(([x, y], i) => i ? s.lineTo(mx(x), mz(y)) : s.moveTo(mx(x), mz(y))); return s; };
  const piso = (pts: [number, number][], cor: string) => {
    const g = new THREE.ShapeGeometry(forma(pts)); g.rotateX(Math.PI / 2);
    const me = new THREE.Mesh(g, mat(cor, { side: THREE.DoubleSide, roughness: 0.55 })); me.receiveShadow = true; scene.add(me);
  };
  piso(PISO, '#ebe6dd'); piso(PISO_VARANDA, '#d8d3ca');
  // rejunte do porcelanato
  const grade = new THREE.Group();
  const linha = new THREE.LineBasicMaterial({ color: '#d6cfc3' });
  for (let x = 50; x <= 328; x += 24) grade.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(mx(x), 0.002, 0), new THREE.Vector3(mx(x), 0.002, mz(346))]), linha));
  for (let y = 20; y <= 346; y += 24) grade.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0.002, mz(y)), new THREE.Vector3(mx(328), 0.002, mz(y))]), linha));
  scene.add(grade);

  // paredes
  const paredeMat = mat('#fbfaf7', { roughness: 0.9 }), topoMat = mat('#9f9a92');
  const paredes: THREE.Mesh[] = [];
  const segmento = (a: [number, number], b: [number, number], h: number, base = 0, material: THREE.Material = paredeMat) => {
    const x1 = mx(a[0]), z1 = mz(a[1]), x2 = mx(b[0]), z2 = mz(b[1]);
    const len = Math.hypot(x2 - x1, z2 - z1) + ESP;
    const me = new THREE.Mesh(new THREE.BoxGeometry(len, h, ESP), material);
    me.position.set((x1 + x2) / 2, base + h / 2, (z1 + z2) / 2); me.rotation.y = -Math.atan2(z2 - z1, x2 - x1);
    me.castShadow = true; me.receiveShadow = true; scene.add(me); return me;
  };
  const polilinha = (pts: [number, number][]) => { for (let i = 1; i < pts.length; i++) paredes.push(segmento(pts[i - 1], pts[i], ALTA)); };
  PAREDES.forEach(polilinha);
  const [bx, by, bw, bh] = BLOCO; paredes.push(box(m(bw), ALTA, m(bh), paredeMat, mx(bx + bw / 2), ALTA / 2, mz(by + bh / 2)));
  const vidro = mat('#a9cde3', { transparent: true, opacity: 0.35, roughness: 0.1, metalness: 0.1 });
  const sobreJanela: THREE.Mesh[] = [];
  JANELAS.forEach(([a, b]) => { segmento(a, b, 1.0); segmento(a, b, 1.1, 1.0, vidro); sobreJanela.push(segmento(a, b, ALTA - 2.1, 2.1)); });
  segmento(PORTA_VIDRO[0], PORTA_VIDRO[1], 2.1, 0, mat('#a9cde3', { transparent: true, opacity: 0.18, roughness: 0.1 })); sobreJanela.push(segmento(PORTA_VIDRO[0], PORTA_VIDRO[1], ALTA - 2.1, 2.1));
  segmento(GUARDA_CORPO[0], GUARDA_CORPO[1], 1.05, 0, mat('#f1efe9', { transparent: true, opacity: 0.4 }));

  // móveis
  const aereos: THREE.Object3D[] = [];
  MOVEIS.forEach(f => {
    const w = m(f.w), d = m(f.d), x = mx(f.x) + w / 2, z = mz(f.y) + d / 2, y0 = f.base || 0;
    let o: THREE.Object3D;
    if (f.forma === 'cil') {
      const g = new THREE.CylinderGeometry(0.5, 0.5, f.h, 28); g.scale(w, 1, d);
      const me = new THREE.Mesh(g, mat(f.cor)); me.position.set(x, y0 + f.h / 2, z); me.castShadow = me.receiveShadow = true; scene.add(me); o = me;
    } else if (f.forma === 'planta') {
      const gr = new THREE.Group();
      const vaso = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.32, w * 0.24, 0.3, 16), mat('#2b2b2b')); vaso.position.y = 0.15;
      const folhas = new THREE.Mesh(new THREE.ConeGeometry(w * 0.55, f.h - 0.3, 7), mat(f.cor)); folhas.position.y = 0.3 + (f.h - 0.3) / 2;
      [vaso, folhas].forEach(p => { p.castShadow = true; gr.add(p); }); gr.position.set(x, 0, z); scene.add(gr); o = gr;
    } else if (f.forma === 'vidro') {
      o = box(w, f.h, d, mat(f.cor, { transparent: true, opacity: 0.35, roughness: 0.1 }), x, y0 + f.h / 2, z);
      if (f.nome === 'Mesa de vidro') { box(0.04, f.h, 0.04, mat('#c0c3c7', { metalness: 0.6 }), x - w / 2 + 0.05, f.h / 2, z - d / 2 + 0.05); box(0.04, f.h, 0.04, mat('#c0c3c7', { metalness: 0.6 }), x + w / 2 - 0.05, f.h / 2, z + d / 2 - 0.05); }
    } else o = box(w, f.h, d, mat(f.cor, f.forma === 'espelho' ? { metalness: 0.5, roughness: 0.15 } : {}), x, y0 + f.h / 2, z);
    if (f.aereo || (f.base || 0) + f.h > BAIXA + 0.1) aereos.push(o);
  });
  // tampo de granito escuro nas bancadas
  box(m(116), 0.03, m(20), mat('#1d1e21', { roughness: 0.3 }), mx(110), 0.915, mz(32));

  // fantasmas (itens que vocês querem comprar, com medidas)
  const grupoF = new THREE.Group(); scene.add(grupoF);
  const fantMat = new THREE.MeshStandardMaterial({ color: '#e0962e', transparent: true, opacity: 0.38 });
  const borda = new THREE.LineBasicMaterial({ color: '#c47a12' });

  let altas = false, onMudou: () => void = () => {};
  const aplicarParedes = () => {
    paredes.forEach(p => { const g = p.geometry as THREE.BoxGeometry; const h = altas ? ALTA : BAIXA; p.scale.y = h / g.parameters.height; p.position.y = h / 2; });
    sobreJanela.forEach(p => p.visible = altas); aereos.forEach(o => o.visible = altas);
  };
  aplicarParedes();

  let alvo: { t: THREE.Vector3; p: THREE.Vector3 } | null = null;
  
  const resize = () => { const w = el.clientWidth, h = el.clientHeight; renderer.setSize(w, h, false); cam.aspect = w / Math.max(1, h); cam.updateProjectionMatrix(); };
  const ro = new ResizeObserver(resize); ro.observe(el); resize();
  const inicio = () => { const k = Math.max(1, 0.95 / cam.aspect); return { t: CENTRO.clone(), p: new THREE.Vector3(CENTRO.x + 0.6 * k, 10 * k, CENTRO.z + 7.6 * k) }; };
  const i0 = inicio(); cam.position.copy(i0.p); controls.target.copy(i0.t);
  let raf = 0, vivo = true;
  const loop = () => {
    if (!vivo) return;
    if (alvo) { controls.target.lerp(alvo.t, 0.12); cam.position.lerp(alvo.p, 0.12); if (cam.position.distanceTo(alvo.p) < 0.02) alvo = null; }
    controls.update(); renderer.render(scene, cam); onMudou(); raf = requestAnimationFrame(loop);
  };
  loop();

  return {
    focar(id) {
      const r = COMODOS_PLANTA.find(c => c.id === id);
      if (!r) { alvo = inicio(); return; }
      const t = new THREE.Vector3(mx(r.x + r.w / 2), 0, mz(r.y + r.h / 2)); const tam = Math.max(m(r.w), m(r.h));
      alvo = { t, p: t.clone().add(new THREE.Vector3(tam * 0.5, 2.4 + tam * 1.15, 1.6 + tam * 1.1)) };
    },
    paredes(a) { altas = a; aplicarParedes(); },
    fantasmas(lista) {
      grupoF.clear();
      lista.forEach(f => {
        const g = new THREE.BoxGeometry(f.l, f.a, f.p); const me = new THREE.Mesh(g, fantMat); me.position.set(f.x, f.a / 2 + 0.005, f.z);
        const e = new THREE.LineSegments(new THREE.EdgesGeometry(g), borda); e.position.copy(me.position); grupoF.add(me, e);
      });
    },
    projetar(x, y, z) {
      const v = new THREE.Vector3(x, y, z).project(cam);
      return { x: (v.x + 1) / 2 * el.clientWidth, y: (1 - v.y) / 2 * el.clientHeight, ok: v.z < 1 };
    },
    onMudou(fn) { onMudou = fn; },
    destruir() { vivo = false; cancelAnimationFrame(raf); ro.disconnect(); controls.dispose(); renderer.dispose(); scene.traverse(o => { const me = o as THREE.Mesh; me.geometry?.dispose(); }); renderer.domElement.remove(); },
  };
}
