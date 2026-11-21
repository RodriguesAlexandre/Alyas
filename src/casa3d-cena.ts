// Cena 3D detalhada (Three.js). Carregada só quando a maquete é aberta.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { PISO, PISO_VARANDA, PAREDES, BLOCO, JANELAS, PORTA_VIDRO, GUARDA_CORPO, MOVEIS, COMODOS_PLANTA, mx, mz, m, type Movel } from './planta';

export type Fantasma = { id: string; x: number; z: number; l: number; p: number; a: number };
export type Cena = {
  focar: (id: string | null) => void; selecionar: (id: string | null) => void; topo: (id: string) => { x: number; y: number; z: number } | null;
  onToque: (fn: (t: { movel?: string; x: number; y: number }) => void) => void; modo: (planta: boolean) => void;
  paredes: (altas: boolean) => void; fantasmas: (f: Fantasma[]) => void;
  projetar: (x: number, y: number, z: number) => { x: number; y: number; ok: boolean } | null; onMudou: (fn: () => void) => void; destruir: () => void;
};

const ALTA = 2.5, BAIXA = 1.0, CORTE = 0.9, ESP = 0.13;
const CENTRO = new THREE.Vector3(mx(189), 0, mz(183));
type G = THREE.Group;

// ---------- texturas desenhadas em canvas ----------
function tela(w: number, h: number, pintar: (c: CanvasRenderingContext2D) => void, rep = 1) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h; pintar(cv.getContext('2d')!);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (rep !== 1) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep); }
  return t;
}
const ruido = (c: CanvasRenderingContext2D, w: number, h: number, base: string, var_: number, n = 9000) => {
  c.fillStyle = base; c.fillRect(0, 0, w, h);
  for (let i = 0; i < n; i++) { const v = (Math.random() - .5) * var_; c.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`; c.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
};
const texPorcelanato = () => tela(512, 512, c => {
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    const tom = 228 + Math.floor(Math.random() * 8); c.fillStyle = `rgb(${tom + 8},${tom + 3},${tom - 8})`; c.fillRect(i * 256, j * 256, 256, 256);
    for (let k = 0; k < 2500; k++) { c.fillStyle = `rgba(${Math.random() > .5 ? '255,255,255' : '150,130,100'},.06)`; c.fillRect(i * 256 + Math.random() * 256, j * 256 + Math.random() * 256, 3, 3); }
  }
  c.fillStyle = '#cfc6b6'; for (let k = 0; k <= 2; k++) { c.fillRect(k * 256 - 2, 0, 4, 512); c.fillRect(0, k * 256 - 2, 512, 4); }
});
const texTecido = (base: string, v = .14) => tela(256, 256, c => ruido(c, 256, 256, base, v, 6000), 3);
const texTapete = (base: string, borda: string) => tela(256, 256, c => { ruido(c, 256, 256, base, .2, 14000); c.strokeStyle = borda; c.lineWidth = 10; c.strokeRect(12, 12, 232, 232); });
const texTapeteQuarto = () => tela(256, 512, c => {
  ruido(c, 256, 512, '#2b3550', .25, 12000); c.strokeStyle = '#c9a86a'; c.lineWidth = 6; c.strokeRect(14, 14, 228, 484);
  c.fillStyle = '#c9a86a88'; for (let y = 60; y < 480; y += 70) { c.beginPath(); c.ellipse(128, y, 50, 22, 0, 0, 7); c.fill(); }
});
const texAzulejo = () => tela(256, 256, c => { c.fillStyle = '#f7f7f5'; c.fillRect(0, 0, 256, 256); c.fillStyle = '#d9d9d6'; for (let k = 0; k <= 4; k++) { c.fillRect(k * 64 - 1, 0, 2, 256); c.fillRect(0, k * 128 - 1, 256, 2); } });
const texHexagonal = () => tela(256, 256, c => {
  c.fillStyle = '#e6e2df'; c.fillRect(0, 0, 256, 256); const r = 22;
  for (let y = 0; y < 300; y += r * 1.5) for (let x = 0; x < 300; x += r * 1.732) {
    const ox = (Math.round(y / (r * 1.5)) % 2) * r * .866; c.beginPath();
    for (let k = 0; k < 6; k++) { const a = Math.PI / 3 * k + Math.PI / 6; c.lineTo(x + ox + r * Math.cos(a), y + r * Math.sin(a)); }
    c.closePath(); const t = 205 + Math.floor(Math.random() * 40); c.fillStyle = `rgb(${t},${t - 3},${t - 2})`; c.fill(); c.strokeStyle = '#f5f3f0'; c.lineWidth = 2; c.stroke();
  }
});
const texQuadroSala = () => tela(256, 360, c => {
  c.fillStyle = '#121216'; c.fillRect(0, 0, 256, 360); c.fillStyle = '#9b2b33'; c.beginPath(); c.arc(128, 105, 78, 0, 7); c.fill();
  c.fillStyle = '#121216'; c.beginPath(); c.arc(128, 105, 58, 0, 7); c.fill(); c.fillStyle = '#d8d4cf'; c.beginPath(); c.ellipse(128, 110, 28, 36, 0, 0, 7); c.fill();
  c.fillStyle = '#2d4f6d'; c.fillRect(70, 150, 116, 200); c.fillStyle = '#e8e4dc'; for (let y = 170; y < 330; y += 18) c.fillRect(98, y, 60, 6); c.fillStyle = '#3c8b3a'; c.fillRect(122, 250, 12, 12);
});
const texQuadroQuarto = () => tela(256, 340, c => {
  const cores = ['#d94b3d', '#f2b632', '#3a7bd5', '#43a047', '#8e44ad', '#f06292'];
  c.fillStyle = '#e8d8b8'; c.fillRect(0, 0, 256, 340); for (let i = 0; i < 60; i++) { c.fillStyle = cores[i % 6]; c.beginPath(); c.arc(Math.random() * 256, Math.random() * 340, 6 + Math.random() * 20, 0, 7); c.fill(); }
  c.fillStyle = '#c69c6d'; c.beginPath(); c.ellipse(128, 200, 50, 100, 0, 0, 7); c.fill(); c.fillStyle = '#8a5a3a'; c.beginPath(); c.arc(128, 95, 55, 0, 7); c.fill();
});
const texQuadroAmarelo = () => tela(200, 260, c => {
  c.fillStyle = '#f5d33b'; c.fillRect(0, 0, 200, 260); const cs = ['#e84a5f', '#2a9d8f', '#f4a261', '#6c63ff', '#ffffff'];
  for (let i = 0; i < 5; i++) { c.fillStyle = cs[i]; c.beginPath(); c.moveTo(100, 90); c.arc(100, 90, 70, Math.PI + i * .63, Math.PI + (i + 1) * .63); c.fill(); }
  c.fillStyle = '#f472b6'; c.beginPath(); c.arc(140, 140, 28, 0, 7); c.fill(); c.fillStyle = '#1f2937'; c.fillRect(20, 200, 160, 40);
});
const texQuadroBranco = () => tela(256, 160, c => {
  c.fillStyle = '#fbfbfb'; c.fillRect(0, 0, 256, 160); c.font = 'bold 26px sans-serif'; c.fillStyle = '#222'; c.fillText('Bim', 120, 34); c.fillStyle = '#d23'; c.fillText('Flow', 168, 34);
  c.strokeStyle = '#333'; c.lineWidth = 2; for (let y = 50; y < 150; y += 14) { c.beginPath(); c.moveTo(16, y); c.lineTo(16 + 50 + Math.random() * 50, y); c.stroke(); }
  c.strokeStyle = '#d23'; c.beginPath(); c.arc(180, 80, 18, 0, 7); c.stroke();
});
const texTela = (cor: string) => tela(64, 32, c => { const g = c.createLinearGradient(0, 0, 64, 32); g.addColorStop(0, cor); g.addColorStop(1, '#05060a'); c.fillStyle = g; c.fillRect(0, 0, 64, 32); });

export function criarCena(el: HTMLElement): Cena {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.shadowMap.autoUpdate = false;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.localClippingEnabled = true; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  el.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.55;
  const persp = new THREE.PerspectiveCamera(32, 1, 0.1, 120);
  const orto = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
  let cam: THREE.Camera = persp;
  const ctl3d = new OrbitControls(persp, renderer.domElement);
  ctl3d.enableDamping = true; ctl3d.maxPolarAngle = 1.35; ctl3d.minDistance = 2.5; ctl3d.maxDistance = 30; ctl3d.screenSpacePanning = true;
  const ctl2d = new OrbitControls(orto, renderer.domElement);
  ctl2d.enableRotate = false; ctl2d.enableDamping = true; ctl2d.screenSpacePanning = true; ctl2d.minZoom = 0.6; ctl2d.maxZoom = 6; ctl2d.enabled = false;
  ctl2d.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN }; ctl2d.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN };
  let controls = ctl3d;

  scene.add(new THREE.HemisphereLight(0xffffff, 0xd9d0c0, 1.25));
  const sol = new THREE.DirectionalLight(0xfff2e0, 2.3);
  sol.position.set(CENTRO.x - 5, 12, CENTRO.z + 7); sol.castShadow = true; sol.shadow.mapSize.set(2048, 2048);
  Object.assign(sol.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 35 }); sol.shadow.bias = -0.0004; sol.shadow.normalBias = 0.02; sol.shadow.radius = 3;
  sol.target.position.copy(CENTRO); scene.add(sol, sol.target);

  // ---------- materiais ----------
  const M = (cor: string, o: Partial<THREE.MeshStandardMaterialParameters> = {}) => new THREE.MeshStandardMaterial({ color: cor, roughness: 0.7, ...o });
  const branco = M('#f6f5f1', { roughness: .45 }), brancoFosco = M('#f3f1ec', { roughness: .85 }), preto = M('#232428', { roughness: .4 }), pretoFosco = M('#2a2b2f', { roughness: .8 });
  const inox = M('#c7cace', { metalness: .8, roughness: .28 }), cromo = M('#d9dcdf', { metalness: 1, roughness: .12 }), granito = M('#18191c', { roughness: .18, metalness: .1 });
  const vidro = new THREE.MeshPhysicalMaterial({ color: '#cfe6ee', transparent: true, opacity: .28, roughness: .03, metalness: 0, clearcoat: 1, depthWrite: false });
  const vidroEscuro = M('#0f1114', { roughness: .08, metalness: .3 }), espelho = M('#e7eef2', { metalness: 1, roughness: .04 });
  const caramelo = M('#a9774f', { roughness: .95, map: texTecido('#a9774f') }), carameloEsc = M('#956643', { roughness: .95, map: texTecido('#956643') });
  const azul = M('#2f4a69', { roughness: .6 }), madeira = M('#9b6c45', { roughness: .6 }), verde = M('#3f7d34', { roughness: .7 }), verdeClaro = M('#5f9c40', { roughness: .7 });
  const vaso = M('#2c2c2c', { roughness: .6 }), ceramica = M('#fbfbf9', { roughness: .15 }), alu = M('#b8bcc0', { metalness: .7, roughness: .35 });

  const sombra = (o: THREE.Object3D) => o.traverse(c => { if ((c as THREE.Mesh).isMesh) { c.castShadow = true; c.receiveShadow = true; } });
  const rb = (w: number, h: number, d: number, mat: THREE.Material, r = 0.015) => new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2.1, h / 2.1, d / 2.1)), mat);
  const bx = (w: number, h: number, d: number, mat: THREE.Material) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  const cil = (rt: number, rb_: number, h: number, mat: THREE.Material, seg = 24) => new THREE.Mesh(new THREE.CylinderGeometry(rt, rb_, h, seg), mat);
  const esf = (r: number, mat: THREE.Material, s = 14) => new THREE.Mesh(new THREE.SphereGeometry(r, s, Math.round(s * .75)), mat);
  const em = <T extends THREE.Object3D>(g: G, o: T, x = 0, y = 0, z = 0) => { o.position.set(x, y, z); g.add(o); return o; };
  const plano = (w: number, h: number, mat: THREE.Material) => new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  const deitado = (o: THREE.Mesh, eixo: 'x' | 'z') => { if (eixo === 'x') o.rotation.z = Math.PI / 2; else o.rotation.x = Math.PI / 2; return o; };
  const puxador = (g: G, x: number, y: number, z: number, vertical = true, l = .12) => em(g, vertical ? cil(.006, .006, l, alu, 8) : deitado(cil(.006, .006, l, alu, 8), 'x'), x, y, z);
  const portas = (g: G, w: number, h: number, d: number, n: number, y0 = 0, alt = true) => {
    for (let i = 1; i < n; i++) em(g, bx(.004, h - .04, .004, pretoFosco), -w / 2 + i * w / n, y0 + h / 2, d / 2 + .001);
    for (let i = 0; i < n; i++) puxador(g, -w / 2 + (i + (i % 2 ? .12 : .88)) * w / n, y0 + (alt ? h - .12 : h / 2), d / 2 + .015, true, .1);
  };
  function planta(w: number, h: number, n: number, semVaso = false) {
    const g = new THREE.Group(); if (!semVaso) em(g, cil(w * .32, w * .25, .26, vaso, 18), 0, .13, 0);
    const y0 = semVaso ? 0 : .26;
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2 + Math.random() * .4, alt = (h - y0) * (.6 + Math.random() * .4);
      const haste = em(g, cil(.006, .006, alt, verde, 5), Math.cos(a) * .05, y0 + alt / 2, Math.sin(a) * .05); haste.rotation.set(Math.sin(a) * .35, 0, -Math.cos(a) * .35);
      for (let k = 1; k <= 3; k++) { const f = em(g, esf(.05, k % 2 ? verde : verdeClaro, 8), Math.cos(a) * (.05 + k * alt * .1), y0 + alt * (.35 + k * .2), Math.sin(a) * (.05 + k * alt * .1)); f.scale.set(1.4, .35, .8); f.rotation.y = -a; }
    }
    return g;
  }
  function cortina(w: number, h: number, cor: string) {
    const g = new THREE.Group(); const mat = M(cor, { roughness: 1, side: THREE.DoubleSide }); const n = Math.max(3, Math.round(w / .08));
    for (let i = 0; i < n; i++) { const c = em(g, cil(.045, .05, h - .1, mat, 8), -w / 2 + (i + .5) * w / n, (h - .1) / 2 + .05, (i % 2) * .03); c.scale.z = .6; }
    em(g, deitado(cil(.012, .012, w + .3, alu, 8), 'x'), 0, h, 0); return g;
  }
  function guardaRoupa(w: number, d: number, h: number, comEspelho: boolean) {
    const g = new THREE.Group(); em(g, rb(w, h, d, brancoFosco, .01), 0, h / 2, 0);
    em(g, bx(w - .02, .006, .006, M('#d0cdc6')), 0, h - .45, d / 2 + .003); em(g, bx(w - .02, .005, .02, alu), 0, h - .43, d / 2 + .01);
    for (let i = 0; i < 2; i++) {
      const x = -w / 2 + (i + .5) * w / 2, mat = comEspelho && i === 1 ? espelho : branco;
      em(g, bx(w / 2 - .03, h - .55, .015, mat), x, (h - .5) / 2 + .02, d / 2 + .008 + i * .02);
      em(g, bx(.02, h - .55, .02, alu), x - w / 4 + .02, (h - .5) / 2 + .02, d / 2 + .012 + i * .02); em(g, bx(.02, h - .55, .02, alu), x + w / 4 - .02, (h - .5) / 2 + .02, d / 2 + .012 + i * .02);
    }
    [-1, 1].forEach(s => puxador(g, s * w * .3, h - .3, d / 2 + .02, false, .14)); return g;
  }

  // ---------- construtores (frente para +z, largura em x, profundidade em z) ----------
  const B: Record<string, (w: number, d: number, h: number, f: Movel) => G> = {
    geladeira(w, d, h) {
      const g = new THREE.Group(); em(g, rb(w, h, d, inox, .03), 0, h / 2, 0);
      em(g, bx(w - .02, .006, .006, pretoFosco), 0, 1.22, d / 2 + .002);
      em(g, rb(.025, .5, .03, alu, .01), -w / 2 + .07, 1.5, d / 2 + .02); em(g, rb(.025, .5, .03, alu, .01), -w / 2 + .07, .95, d / 2 + .02);
      em(g, rb(.16, .12, .02, M('#9aa3ab', { roughness: .3 }), .01), w / 2 - .16, 1.45, d / 2 + .006);
      const ims = ['#3b82f6', '#f59e0b', '#7c3aed', '#ef4444', '#111827', '#16a34a', '#e5e7eb'];
      ims.forEach((c, i) => em(g, bx(.07 + (i % 3) * .02, .05 + (i % 2) * .03, .004, M(c)), w * .05 + (i % 3) * .1 - .08, 1.32 + Math.floor(i / 3) * .1, d / 2 + .004));
      const af = new THREE.Group(); em(af, cil(.13, .15, .3, preto, 28), 0, .15, 0); em(af, rb(.05, .04, .12, preto, .01), 0, .2, .17); em(g, af, 0, h, 0); return g;
    },
    'armario-cozinha'(w, d, h) {
      const g = new THREE.Group(); em(g, rb(w, h - .04, d - .03, branco, .01), 0, (h - .04) / 2, -.015);
      em(g, bx(w + .005, .04, d + .01, M('#f4f2ee', { roughness: .3 })), 0, h - .02, 0); portas(g, w, h - .1, d - .03, Math.max(1, Math.round(w / .42)), .06);
      em(g, bx(w, .06, .02, pretoFosco), 0, .03, d / 2 - .04);
      if (w > 1) { const p = new THREE.Group(); em(p, rb(.3, .02, .22, M('#a4744a'), .01), 0, .01, 0); em(p, rb(.12, .08, .12, M('#e9e3d6'), .02), -.05, .06, 0); em(p, cil(.04, .04, .1, M('#ddd'), 14), .08, .07, 0); em(g, p, -w * .25, h, 0); }
      return g;
    },
    fogao(w, d, h) {
      const g = new THREE.Group(); em(g, rb(w, h - .03, d, inox, .015), 0, (h - .03) / 2, 0); em(g, bx(w - .01, .02, d - .01, vidroEscuro), 0, h - .02, 0);
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => { em(g, cil(.055, .06, .025, pretoFosco), a * w / 4.2, h, b * d / 5); em(g, cil(.03, .03, .03, M('#555')), a * w / 4.2, h + .01, b * d / 5); });
      em(g, bx(w - .1, .4, .01, vidroEscuro), 0, .42, d / 2 + .005); puxador(g, 0, .7, d / 2 + .03, false, w - .12);
      for (let i = 0; i < 5; i++) em(g, deitado(cil(.015, .015, .02, preto, 12), 'z'), -w / 2 + .08 + i * (w - .16) / 4, h - .09, d / 2 + .012);
      em(g, bx(w, .08, d, pretoFosco), 0, .04, 0);
      const coifa = new THREE.Group(); em(coifa, rb(w + .1, .1, .45, inox, .02), 0, 0, 0); em(coifa, bx(.2, .025, .01, preto), w * .25, -.02, .23); em(g, coifa, 0, 1.6, -d / 2 + .2);
      return g;
    },
    microondas(w, d, h) { const g = new THREE.Group(); em(g, rb(w, h, d, preto, .015), 0, h / 2, 0); em(g, bx(w * .68, h * .75, .005, vidroEscuro), -w * .12, h / 2, d / 2 + .003); em(g, bx(w * .18, h * .7, .004, M('#333')), w * .36, h / 2, d / 2 + .003); return g; },
    maquina(w, d, h) {
      const g = new THREE.Group(); em(g, rb(w, h, d, branco, .05), 0, h / 2, 0);
      em(g, cil(w * .38, w * .38, .02, M('#9aa3ab', { roughness: .2, transparent: true, opacity: .85 }), 32), 0, h + .005, .02);
      em(g, rb(w - .04, .12, .08, M('#e9e9e6'), .02), 0, h + .06, -d / 2 + .05); em(g, bx(w * .3, .04, .005, M('#4aa3c7')), 0, h + .07, -d / 2 + .092);
      em(g, cil(.03, .03, .55, M('#8bc34a'), 10), w / 2 + .05, .27, d * .3); return g;
    },
    tanque(w, d, h) {
      const g = new THREE.Group(); em(g, rb(w * .5, h - .2, d * .5, branco, .02), 0, (h - .2) / 2, -d * .2);
      em(g, rb(w, .2, d, ceramica, .04), 0, h - .1, 0); em(g, bx(w - .08, .02, d - .1, M('#d8dadb', { roughness: .3 })), 0, h - .01, .02);
      const t = new THREE.Group(); em(t, cil(.012, .012, .22, cromo, 10), 0, .11, 0); em(t, deitado(cil(.01, .01, .12, cromo, 10), 'z'), 0, .22, .06); em(g, t, 0, h, -d / 2 + .04);
      const pinc = new THREE.Group(); [0, .05, .1].forEach((x, i) => em(pinc, cil(.008, .008, .16, M(['#c58b4c', '#7c5a3a', '#d8b98b'][i]), 6), x, .08, 0)); em(g, pinc, -w * .3, h, -d / 2 + .05);
      return g;
    },
    'varal-teto'(w, d) {
      const g = new THREE.Group(); for (let i = 0; i < 6; i++) em(g, deitado(cil(.008, .008, w, branco, 8), 'x'), 0, 0, -d / 2 + i * d / 5);
      [-1, 1].forEach(s => em(g, bx(.02, .02, d, branco), s * w / 2, 0, 0));
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => em(g, cil(.002, .002, .3, M('#ddd'), 4), a * w / 2, .15, b * d / 2));
      const panos: [string, number, number, number][] = [['#e24b75', .4, .55, -.8], ['#1f5f45', .3, .6, -.4], ['#1d2c54', .25, .3, 0], ['#6b6b6b', .3, .35, .4], ['#151515', .3, .45, .8]];
      panos.forEach(([c, pw, ph, z]) => { const p = em(g, plano(pw, ph, M(c, { side: THREE.DoubleSide, roughness: 1 })), 0, -ph / 2, z * d / 2.2); p.rotation.y = Math.PI / 2; });
      return g;
    },
    balcao(w, d) {
      const g = new THREE.Group(); const base = d - .12, zc = -d / 2 + base / 2;
      em(g, rb(w - .02, .86, base, branco, .01), 0, .43, zc);
      const pg = new THREE.Group(); portas(pg, w - .02, .78, base, 4, .06); pg.rotation.y = Math.PI; pg.position.z = zc; g.add(pg);
      em(g, bx(w - .02, .06, .02, pretoFosco), 0, .03, -d / 2 + .03);
      em(g, bx(w, .035, base + .04, granito), 0, .9, zc);
      em(g, bx(w, .52, .1, M('#ece9e3', { roughness: .8 })), 0, 1.16, d / 2 - .11); em(g, bx(w, .035, .34, granito), 0, 1.44, d / 2 - .02);
      const lumi = new THREE.Group(); em(lumi, cil(.07, .08, .12, preto, 16), 0, .06, 0); em(lumi, deitado(cil(.008, .008, .32, preto, 6), 'z'), 0, .25, .04); em(lumi, cil(.04, .07, .1, preto, 14), 0, .36, .18); em(g, lumi, -w * .1, 1.44, d / 2 + .05);
      const liq = new THREE.Group(); em(liq, rb(.16, .14, .16, preto, .03), 0, .07, 0); em(liq, cil(.07, .06, .22, M('#cfd6db', { transparent: true, opacity: .5 }), 16), 0, .25, 0); em(g, liq, -w * .3, 1.44, d / 2 + .05);
      const garrafa = new THREE.Group(); em(garrafa, cil(.04, .04, .22, M('#3b6b2f', { roughness: .1 }), 14), 0, .11, 0); em(garrafa, cil(.012, .025, .1, M('#3b6b2f', { roughness: .1 }), 10), 0, .27, 0); em(g, garrafa, w * .35, 1.44, d / 2 + .05);
      em(g, rb(.4, .01, .25, M('#a7774b', { roughness: .9 }), .004), w * .38, 1.44, d / 2 + .1);
      return g;
    },
    'pia-cozinha'(w, d) {
      const g = new THREE.Group(); em(g, bx(w * .8, .015, d * .9, inox), 0, .002, 0); em(g, bx(w * .7, .01, d * .75, M('#8f9499', { metalness: .8, roughness: .3 })), 0, .009, 0);
      em(g, cil(.015, .018, .28, cromo, 12), w * .3, .14, -d * .3); const arco = em(g, new THREE.Mesh(new THREE.TorusGeometry(.07, .011, 8, 16, Math.PI), cromo), w * .3, .28, -d * .3 + .07); arco.rotation.y = Math.PI / 2;
      return g;
    },
    escorredor(w, d) {
      const g = new THREE.Group(); em(g, rb(w, .02, d, cromo, .005), 0, .01, 0);
      [-1, 1].forEach(sx => [-1, 1].forEach(sz => em(g, cil(.004, .004, .14, cromo, 6), sx * (w / 2 - .01), .08, sz * (d / 2 - .01))));
      for (let i = 0; i < 6; i++) em(g, deitado(cil(.003, .003, d, cromo, 4), 'z'), -w / 2 + .03 + i * (w - .06) / 5, .15, 0);
      [0, 1, 2, 3].forEach(i => { const pr = em(g, cil(.1, .1, .012, i % 2 ? M('#f6f6f4', { roughness: .2 }) : M('#1f3b73', { roughness: .3 }), 22), -w / 2 + .1 + i * .07, .12, 0); pr.rotation.z = Math.PI / 2 - .15; });
      [0, 1, 2].forEach(i => em(g, cil(.03, .025, .1, M('#cfd8dc', { transparent: true, opacity: .6, roughness: .1 }), 12), w * .3, .07, -d / 3 + i * d / 3));
      em(g, cil(.05, .045, .08, M('#c13b3b'), 16), w * .18, .06, d * .25); em(g, rb(.14, .07, .1, M('#d26aa6'), .02), 0, .2, 0);
      return g;
    },
    filtro(w, d, h) { const g = new THREE.Group(); em(g, cil(w / 2.4, w / 2, h * .55, M('#8a5236', { roughness: .9 }), 20), 0, h * .275, 0); em(g, cil(w / 2.4, w / 2.4, h * .45, M('#6b6f73', { transparent: true, opacity: .7, roughness: .2 }), 20), 0, h * .775, 0); em(g, deitado(cil(.01, .01, .05, M('#c98'), 6), 'z'), 0, h * .15, w / 2); return g; },
    'mesa-jantar'(w, d, h) {
      const g = new THREE.Group(); em(g, rb(w, .02, d, vidro, .01), 0, h, 0); em(g, bx(w * .3, .005, d * .5, M('#e6a243')), 0, h + .013, 0);
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => em(g, cil(.015, .015, h, cromo, 10), a * (w / 2 - .06), h / 2, b * (d / 2 - .06)));
      em(g, cil(.04, .03, .12, M('#3a2a20'), 12), -w * .2, h + .07, d * .2); [0, 1, 2].forEach(i => em(g, cil(.002, .002, .25, M('#d9b48a'), 4), -w * .2 + (i - 1) * .015, h + .2, d * .2));
      em(g, cil(.035, .035, .2, M('#f472b6'), 14), w * .2, h + .1, -d * .25); em(g, rb(.22, .1, .16, M('#f8c74a'), .01), w * .1, h + .06, d * .3);
      return g;
    },
    cadeiras(w, d) {
      const g = new THREE.Group(); em(g, rb(w, .05, d, preto, .02), 0, .46, 0); em(g, rb(w, .4, .03, preto, .015), 0, .7, -d / 2 + .02);
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => em(g, cil(.009, .009, .44, cromo, 8), a * (w / 2 - .03), .22, b * (d / 2 - .03)));
      [-1, 1].forEach(a => em(g, cil(.009, .009, .44, cromo, 8), a * (w / 2 - .03), .7, -d / 2 + .02)); return g;
    },
    espada(w, d, h) {
      const g = new THREE.Group(); em(g, cil(w * .35, w * .28, .28, vaso, 18), 0, .14, 0); em(g, cil(w * .33, w * .33, .01, M('#3d2a1d')), 0, .27, 0);
      for (let i = 0; i < 11; i++) { const a = i / 11 * Math.PI * 2, f = em(g, bx(.045, h - .3 - Math.random() * .3, .008, i % 2 ? verde : M('#5a8a3a')), Math.cos(a) * .04, .28 + (h - .3) / 2, Math.sin(a) * .04); f.rotation.set((Math.random() - .5) * .25, a, (Math.random() - .5) * .25); }
      return g;
    },
    zamioculca(w, d, h) { return planta(w, h, 7); },
    sofa(w, d, h, f) {
      const g = new THREE.Group(); const X = (x: number) => m(x - f.x) - w / 2, Z = (y: number) => m(y - f.y) - d / 2;
      const peca = (x1: number, y1: number, x2: number, y2: number, mat: THREE.Material, y0: number, hh: number, r = .05) => em(g, rb(m(x2 - x1), hh, m(y2 - y1), mat, r), (X(x1) + X(x2)) / 2, y0 + hh / 2, (Z(y1) + Z(y2)) / 2);
      peca(52, 178, 90, 294, carameloEsc, 0, .2, .03); peca(90, 178, 126, 214, carameloEsc, 0, .2, .03);
      for (let y = 186; y < 288; y += 25.5) peca(60.3, y + .3, 89.7, Math.min(y + 25.5, 288) - .3, caramelo, .2, .2, .07);
      [[90, 186, 105, 214], [105, 186, 120, 214]].forEach(([a, b, c2, d2]) => peca(a + .3, b + .3, c2 - .3, d2 - .3, caramelo, .2, .2, .07));
      for (let y = 180; y < 294; y += 28.5) peca(52, y + .2, 60, Math.min(y + 28.5, 294) - .2, carameloEsc, .2, .42, .05);
      [[60, 178, 82, 186], [82, 178, 104, 186], [104, 178, 126, 186]].forEach(([a, b, c2, d2]) => peca(a + .2, b, c2 - .2, d2, carameloEsc, .2, .42, .05));
      peca(60, 288, 90, 294, carameloEsc, .2, .22, .04); peca(120, 186, 126, 214, carameloEsc, .2, .22, .04);
      const alm = (x: number, y: number, c: string, rot: number) => { const a = em(g, rb(.36, .34, .1, M(c, { roughness: .95 }), .05), X(x), .55, Z(y)); a.rotation.set(-.25, rot, 0); };
      alm(63, 196, '#ece6d6', Math.PI / 2); alm(63, 280, '#7d9a6a', Math.PI / 2); alm(112, 190, '#ece6d6', 0);
      const manta = em(g, rb(.55, .04, .45, M('#8d96a3', { roughness: 1, map: texTecido('#8d96a3', .2) }), .02), X(74), .44, Z(250)); manta.rotation.y = .5;
      const mochila = new THREE.Group(); em(mochila, rb(.32, .38, .16, M('#ece4d6', { roughness: 1 }), .06), 0, .19, 0); em(mochila, rb(.24, .03, .17, M('#222'), .01), 0, .38, 0); em(g, mochila, X(98), .4, Z(196));
      em(g, rb(.16, .02, .05, M('#111'), .01), X(72), .41, Z(266)).rotation.y = .3;
      return g;
    },
    'tapete-sala'(w, d) { const g = new THREE.Group(); em(g, rb(w, .015, d, M('#1c1c1e', { map: texTapete('#1c1c1e', '#2c2c30'), roughness: 1 }), .005), 0, .008, 0); return g; },
    'mesa-centro'(w, d, h) {
      const g = new THREE.Group(); const t = em(g, cil(.5, .5, .035, preto, 40), 0, h - .02, 0); t.scale.set(w, 1, d);
      [0, 2.1, 4.2].forEach(a => { const p = em(g, cil(.014, .01, h, preto, 8), Math.cos(a) * w * .32, h / 2, Math.sin(a) * d * .32); p.rotation.set(Math.sin(a) * .15, 0, -Math.cos(a) * .15); });
      em(g, cil(.06, .05, .08, M('#c26b3a')), w * .15, h + .04, 0); em(g, rb(.18, .02, .24, M('#2c4a6e'), .005), -w * .15, h + .01, .02); return g;
    },
    estante(w, d, h) {
      const g = new THREE.Group(); em(g, bx(w, h, .03, azul), 0, h / 2, -d / 2 + .015);
      em(g, rb(w, .5, d, azul, .01), 0, .25, 0); [-1, 1].forEach(s => { em(g, bx(w / 2 - .02, .003, .003, M('#1d3047')), s * w / 4, .25, d / 2 + .002); puxador(g, s * w / 4, .36, d / 2 + .015, false, .24); });
      em(g, bx(w * .3, .16, d - .05, M('#22384f')), -w * .32, .4, .02); em(g, rb(.2, .1, .14, M('#ece9e3'), .01), -w * .36, .37, .04); em(g, bx(.18, .12, .2, M('#c9a37a')), -w * .22, .37, .03);
      em(g, rb(w, .3, d - .04, azul, .01), 0, h - .15, -.02); [-.33, .33].forEach(x => em(g, bx(.02, .26, d - .06, M('#294260')), x * w, h - .15, -.02));
      const cores = ['#e8e1d0', '#b33', '#222', '#d9b26a', '#e9e9e9', '#2b2b2b', '#c2185b', '#f0eadb', '#333', '#7a5230'];
      for (let i = 0; i < 18; i++) em(g, bx(.022 + Math.random() * .02, .2 + Math.random() * .05, .16, M(cores[i % cores.length], { roughness: .8 })), -w / 2 + .05 + i * .028, h - .27 + .11, -.03);
      em(g, planta(.18, .55, 5, true), 0, h - .28, -.02); em(g, rb(.16, .14, .16, M('#3b87c9'), .07), w * .38, h - .22, -.02);
      em(g, rb(w * .58, w * .58 * .58, .03, preto, .006), -w * .08, 1.33, -d / 2 + .05); em(g, plano(w * .56, w * .56 * .56, M('#000', { map: texTela('#1d2a3a'), roughness: .2 })), -w * .08, 1.33, -d / 2 + .066);
      em(g, cil(.003, .003, .5, preto, 4), -w * .12, .85, -d / 2 + .05);
      const q = em(g, bx(.45, .6, .02, M('#5a3a22')), w * .3, .82, -d / 2 + .06); q.rotation.x = -.06; em(g, plano(.41, .56, M('#fff', { map: texQuadroAmarelo() })), w * .3, .82, -d / 2 + .072).rotation.x = -.06;
      const mala = new THREE.Group(); em(mala, rb(.34, .15, .22, M('#5b3a20', { roughness: .5 }), .02), 0, .075, 0); em(mala, bx(.35, .015, .225, M('#2a1a10')), 0, .1, 0); [-1, 1].forEach(s => em(mala, bx(.02, .03, .01, M('#c9a34e', { metalness: .8 })), s * .1, .12, .115)); em(g, mala, w * .28, .5, .02);
      em(g, bx(.11, .14, .015, M('#1a1a1a')), -w * .02, .57, -.06); em(g, plano(.09, .12, M('#c9b9a0')), -w * .02, .57, -.052);
      const papai = new THREE.Group(); em(papai, cil(.04, .06, .14, M('#b22')), 0, .07, 0); em(papai, esf(.035, M('#f1d0b5')), 0, .17, 0); em(papai, esf(.03, M('#fff')), 0, .15, .02); em(papai, new THREE.Mesh(new THREE.ConeGeometry(.04, .07, 12), M('#b22')), 0, .22, 0); em(g, papai, w * .1, .5, .03);
      em(g, rb(.08, .06, .08, M('#c9a77a'), .01), -w * .12, .53, .06);
      const capacete = em(g, esf(.1, M('#3b9ad9', { roughness: .3 }), 16), w * .38, h - .25, -.02); capacete.scale.y = .7;
      return g;
    },
    'cortina-sala'(w, d, h) { const g = cortina(w, h, '#4a3428'); const amarra = em(g, new THREE.Mesh(new THREE.TorusGeometry(.12, .03, 8, 16), M('#4a3428', { roughness: 1 })), 0, 1.0, .02); amarra.rotation.x = Math.PI / 2; return g; },
    'quadro-sala'(w, d, h) { const g = new THREE.Group(); em(g, bx(w, h, .03, M('#111')), 0, h / 2, 0); em(g, plano(w - .02, h - .02, M('#fff', { map: texQuadroSala() })), 0, h / 2, .016); return g; },
    box(w, d, h) {
      const g = new THREE.Group(); em(g, bx(w, h, .01, vidro), 0, h / 2, d / 2); em(g, bx(.01, h, d, vidro), -w / 2 + .01, h / 2, 0);
      em(g, bx(w, .03, .04, alu), 0, h, d / 2); em(g, bx(w, .02, .03, alu), 0, .01, d / 2); em(g, bx(.03, h, .03, alu), w / 2 - .02, h / 2, d / 2);
      { const ch = em(g, cil(.08, .08, .03, M('#f2f2f0', { roughness: .3 }), 24), -w / 2 + .14, 2.0, 0); ch.rotation.z = -.5; em(g, deitado(cil(.012, .012, .12, cromo, 8), 'x'), -w / 2 + .06, 2.05, 0); em(g, rb(.06, .12, .04, cromo, .01), -w / 2 + .03, 1.2, .15); }
      const banq = new THREE.Group(); em(banq, rb(.28, .03, .22, M('#3fa7b5'), .01), 0, .3, 0); [-1, 1].forEach(s => em(banq, bx(.02, .3, .2, M('#2a2a2a')), s * .12, .15, 0)); em(g, banq, w * .3, 0, -d * .05);
      const prat = new THREE.Group(); em(prat, rb(.25, .02, .1, M('#fff'), .005), 0, 0, 0); em(prat, cil(.025, .025, .18, M('#f1e3c4'), 10), -.06, .09, 0); em(prat, cil(.02, .02, .15, M('#7a5aa8'), 10), .05, .08, 0); em(g, prat, w / 2 - .14, 1.2, -d / 2 + .06);
      em(g, rb(w * .8, .01, .3, M('#6f7378', { roughness: 1 }), .004), 0, .005, d / 2 + .2);
      em(g, bx(w + .1, h + .5, .01, M('#fff', { map: texAzulejo(), roughness: .25 })), 0, (h + .5) / 2, -d / 2 + .005);
      return g;
    },
    vaso(w, d) {
      const g = new THREE.Group(); const b = em(g, cil(.17, .13, .38, ceramica, 24), 0, .19, .04); b.scale.z = 1.3;
      const t = em(g, cil(.19, .19, .03, ceramica, 24), 0, .4, .04); t.scale.z = 1.25; em(g, rb(w * .9, .36, .17, ceramica, .03), 0, .58, -d / 2 + .1);
      em(g, cil(.03, .03, .01, cromo, 12), 0, .765, -d / 2 + .1); [-1, 1].forEach(s => em(g, cil(.03, .035, .05, M('#e9dcc6'), 12), s * w * .25, .79, -d / 2 + .1));
      const pp = em(g, deitado(cil(.055, .055, .1, M('#fff', { roughness: 1 }), 16), 'x'), w / 2 + .03, .6, -d / 2 + .1); pp.castShadow = true;
      em(g, cil(.1, .09, .3, M('#f4f4f2'), 16), w / 2 + .1, .15, .05); return g;
    },
    'pia-banheiro'(w, d, h) {
      const g = new THREE.Group(); em(g, rb(w, h - .12, d - .06, branco, .01), 0, (h - .12) / 2, -.03);
      [.22, .5].forEach(y => { em(g, bx(w - .02, .003, .003, M('#ccc')), 0, y + .14, d / 2 - .055); em(g, rb(.14, .02, .02, madeira, .008), 0, y, d / 2 - .045); });
      em(g, rb(w * .95, .14, d - .02, ceramica, .06), 0, h - .07, 0); em(g, bx(w * .6, .01, d * .55, M('#e5e8ea', { roughness: .1 })), 0, h - .005, .03);
      em(g, cil(.012, .012, .14, cromo, 10), 0, h + .07, -d / 2 + .05); em(g, deitado(cil(.009, .009, .08, cromo, 8), 'z'), 0, h + .14, -d / 2 + .09);
      em(g, rb(w * .9, .55, .1, espelho, .01), 0, 1.6, -d / 2 + .02); em(g, rb(.18, .07, .06, M('#fff'), .02), 0, 1.2, -d / 2 + .02);
      em(g, cil(.03, .035, .16, preto, 12), w * .3, h + .08, -d * .2); em(g, rb(.1, .02, .07, M('#2a2a2a'), .01), -w * .3, h + .01, d * .1);
      em(g, bx(w + .2, 1.3, .01, M('#fff', { map: texAzulejo(), roughness: .25 })), 0, .65, -d / 2 - .01);
      return g;
    },
    'mesa-pc'(w, d, h) {
      const g = new THREE.Group(); em(g, rb(w, .03, d, preto, .008), 0, h, 0); [-1, 1].forEach(s => { em(g, bx(.05, h, .05, preto), s * (w / 2 - .08), h / 2, -d / 2 + .1); em(g, bx(.06, .03, d - .1, preto), s * (w / 2 - .08), .015, 0); });
      em(g, rb(w * .78, .006, .32, M('#5a1f1f', { roughness: .9 }), .003), 0, h + .018, .05);
      // LG UltraGear 34" curvo (21:9, ~80 × 36 cm, curvatura 1500R)
      { const r = 1.5, ang = .54, zs = -d / 2 + .12;
        const tela_ = new THREE.Mesh(new THREE.CylinderGeometry(r, r, .345, 32, 1, true, Math.PI - ang / 2, ang), M('#000', { map: texTela('#2b4a77'), side: THREE.DoubleSide, roughness: .25 }));
        const moldura = new THREE.Mesh(new THREE.CylinderGeometry(r + .02, r + .02, .37, 32, 1, true, Math.PI - (ang + .015) / 2, ang + .015), M('#151517', { side: THREE.DoubleSide, roughness: .5 }));
        [tela_, moldura].forEach(o => em(g, o, 0, h + .43, zs + r));
        em(g, rb(.16, .03, .02, M('#c8102e'), .01), 0, h + .245, zs - .025); }
      em(g, bx(.06, .2, .04, preto), 0, h + .12, -d / 2 + .08); em(g, bx(.25, .01, .18, preto), 0, h + .02, -d / 2 + .1); em(g, rb(.12, .03, .04, preto, .01), 0, h + .65, -d / 2 + .1);
      const nb = new THREE.Group(); em(nb, rb(.38, .02, .26, M('#3a3d42'), .01), 0, .01, 0); const tl = em(nb, rb(.38, .25, .012, M('#3a3d42'), .006), 0, .13, -.13); tl.rotation.x = -.25; em(nb, plano(.34, .21, M('#000', { map: texTela('#1f2937') })), 0, .13, -.123).rotation.x = -.25;
      em(nb, bx(.3, .01, .2, M('#e65a2f')), 0, -.02, .02); em(g, nb, -w * .32, h + .1, -d / 2 + .25);
      em(g, rb(.44, .02, .14, M('#151515'), .006), 0, h + .03, .14); em(g, rb(.06, .03, .1, M('#151515'), .02), .32, h + .03, .14);
      const fone = em(g, new THREE.Mesh(new THREE.TorusGeometry(.09, .015, 8, 16, Math.PI), preto), w * .38, h + .25, -d / 2 + .1); fone.rotation.y = Math.PI / 2;
      const mic = new THREE.Group(); em(mic, cil(.008, .008, .5, preto, 6), 0, .25, 0).rotation.z = .5; em(mic, cil(.03, .03, .12, preto, 12), -.14, .45, 0).rotation.z = 1.2; em(mic, cil(.07, .07, .01, M('#111', { transparent: true, opacity: .7 }), 20), -.05, .45, .08).rotation.x = Math.PI / 2; em(g, mic, w * .44, h, -d / 2 + .06);
      const anel = new THREE.Group(); em(anel, cil(.008, .008, 1.3, preto, 6), 0, .65, 0); em(anel, new THREE.Mesh(new THREE.TorusGeometry(.12, .015, 8, 24), M('#fff', { emissive: '#fff', emissiveIntensity: .4 })), 0, 1.35, 0); em(g, anel, -w * .45, 0, -d / 2 - .1);
      const cabos = M('#111', { roughness: .9 }); [-.2, 0, .15].forEach(x => em(g, cil(.004, .004, h, cabos, 4), x, h / 2, -d / 2 + .02));
      return g;
    },
    'cadeira-pc'() {
      const g = new THREE.Group(); const cinza = M('#cfd0cd', { roughness: .8 }), bc = M('#f2f2f0', { roughness: .4 });
      for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2, p = em(g, bx(.32, .03, .04, bc), Math.cos(a) * .16, .07, Math.sin(a) * .16); p.rotation.y = -a; em(g, esf(.03, bc, 10), Math.cos(a) * .3, .03, Math.sin(a) * .3); }
      em(g, cil(.025, .025, .35, cromo, 10), 0, .25, 0); em(g, rb(.5, .08, .48, cinza, .04), 0, .48, 0);
      const enc = em(g, rb(.46, .6, .06, cinza, .05), 0, .85, -.24); enc.rotation.x = -.12; em(g, rb(.48, .62, .02, bc, .02), 0, .85, -.28).rotation.x = -.12;
      em(g, rb(.3, .12, .06, bc, .04), 0, 1.22, -.29); em(g, rb(.36, .14, .05, M('#e3e3df'), .04), 0, .72, -.2);
      [-1, 1].forEach(s => { em(g, rb(.05, .03, .26, M('#9a9a96'), .015), s * .27, .68, -.02); em(g, bx(.03, .18, .03, bc), s * .27, .58, -.1); }); return g;
    },
    puff(w) { const g = new THREE.Group(); const p = em(g, esf(w / 2, M('#1d1e22', { roughness: .5 }), 24), 0, .2, 0); p.scale.set(1, .5, 1); return g; },
    'quadro-branco'(w, d, h) { const g = new THREE.Group(); em(g, bx(w, h, .02, alu), 0, h / 2, 0); em(g, plano(w - .03, h - .03, M('#fff', { map: texQuadroBranco(), roughness: .2 })), 0, h / 2, .011); const banco = new THREE.Group(); em(banco, cil(.17, .17, .03, preto, 20), 0, .45, 0); [0, 2.1, 4.2].forEach(a => em(banco, cil(.01, .01, .45, cromo, 6), Math.cos(a) * .13, .22, Math.sin(a) * .13)); em(banco, rb(.14, .03, .05, M('#2a6fd1'), .01), 0, .48, 0); em(g, banco, 0, -.6, .35); const sacola = new THREE.Group(); em(sacola, rb(.35, .45, .2, M('#f3f3f3', { roughness: 1 }), .03), 0, .22, 0); em(sacola, rb(.3, .4, .18, M('#2e2e8a', { roughness: 1 }), .03), .3, .2, .05); em(g, sacola, -w * .3, -.6, .25); return g; },
    'guarda-roupa-escritorio'(w, d, h) { return guardaRoupa(w, d, h, false); },
    'guarda-roupa-casal'(w, d, h) { return guardaRoupa(w, d, h, true); },
    cama(w, d) {
      const g = new THREE.Group(); const lencol = M('#26262b', { roughness: .55, map: texTecido('#26262b', .08) });
      em(g, rb(w, .3, d, M('#1f1f22', { roughness: .9 }), .02), 0, .15, 0); em(g, rb(w - .04, .2, d - .04, M('#e8e6e1'), .05), 0, .4, 0);
      em(g, rb(w + .06, .1, d * .78, lencol, .05), 0, .48, d * .11); em(g, rb(w + .07, .32, .02, lencol, .01), 0, .32, d / 2 + .01); [-1, 1].forEach(s => em(g, rb(.02, .32, d * .78, lencol, .01), s * (w / 2 + .03), .32, d * .11));
      em(g, bx(w + .08, .006, .006, M('#bbb')), 0, .18, d / 2 + .025);
      [-1, 1].forEach(s => { const p = em(g, rb(w * .44, .14, .32, M('#33333a', { roughness: .5 }), .07), s * w * .24, .55, -d / 2 + .22); p.rotation.x = -.35; });
      const bicho = (x: number, z: number, c: string, r: number) => { em(g, esf(r, M(c, { roughness: 1 })), x, .58 + r * .8, z); em(g, esf(r * .65, M(c, { roughness: 1 })), x, .58 + r * 2.2, z - .02); };
      bicho(-.35, -d / 2 + .5, '#f2efe8', .09); bicho(-.12, -d / 2 + .5, '#f2efe8', .09); bicho(.2, -d / 2 + .5, '#5b3a26', .11); bicho(.1, .1, '#d6a65a', .07);
      const roupa = em(g, rb(.5, .06, .4, M('#c2185b', { roughness: 1 }), .03), .3, .56, .05); roupa.rotation.y = .4;
      const roupa2 = em(g, rb(.45, .06, .35, M('#9aa0aa', { roughness: 1 }), .03), .25, .56, .4); roupa2.rotation.y = -.3;
      const toalha = em(g, rb(.4, .05, .28, M('#22396b', { roughness: 1 }), .02), -.35, .55, .45); toalha.rotation.y = .1;
      return g;
    },
    'tapete-quarto'(w, d) { const g = new THREE.Group(); em(g, rb(w, .012, d, M('#2b3550', { map: texTapeteQuarto(), roughness: 1 }), .004), 0, .006, 0); const tenis = new THREE.Group(); [-1, 1].forEach(s => em(tenis, rb(.1, .08, .28, M('#f5f5f2'), .03), s * .07, .04, 0)); em(g, tenis, 0, .012, 0); return g; },
    criado(w, d, h) {
      const g = new THREE.Group(); em(g, rb(w, .3, d, branco, .01), 0, h - .15, 0); em(g, bx(w - .04, .22, .01, M('#e2ddd0')), 0, h - .15, d / 2 - .03);
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => { const p = em(g, cil(.012, .008, h - .3, madeira, 8), a * (w / 2 - .03), (h - .3) / 2, b * (d / 2 - .03)); p.rotation.set(b * .1, 0, -a * .1); });
      em(g, cil(.06, .09, .22, M('#4a2f22', { roughness: .4 }), 16), 0, h + .11, 0); em(g, cil(.09, .12, .16, M('#f2ead8', { emissive: '#ffdca0', emissiveIntensity: .35 }), 20), 0, h + .3, 0);
      return g;
    },
    'quadro-quarto'(w, d, h) { const g = new THREE.Group(); em(g, bx(w, h, .03, M('#1a1a1a')), 0, h / 2, 0); em(g, plano(w - .02, h - .02, M('#fff', { map: texQuadroQuarto() })), 0, h / 2, .016); return g; },
    'varal-chao'(w, d, h) {
      const g = new THREE.Group(); const bc = M('#f4f4f2', { roughness: .4 });
      [-1, 1].forEach(s => { const a = em(g, cil(.01, .01, 1.15, bc, 8), s * (w / 2 - .02), .5, -d * .2); a.rotation.x = .45; const b = em(g, cil(.01, .01, 1.15, bc, 8), s * (w / 2 - .02), .5, d * .2); b.rotation.x = -.45; });
      for (let i = 0; i < 7; i++) em(g, deitado(cil(.006, .006, w, bc, 6), 'x'), 0, h, -d / 2 + i * d / 6);
      ['#151515', '#1f2c4f', '#6b1f2a', '#151515', '#e9e2d5'].forEach((c, i) => em(g, plano(.34, .5, M(c, { side: THREE.DoubleSide, roughness: 1 })), -w / 2 + .2 + i * (w - .3) / 5, h - .25, -d / 2 + (i % 3) * d / 3 + .05));
      return g;
    },
    bike(w) {
      const g = new THREE.Group(); g.scale.setScalar(w / 1.72); const qd = M('#22313f', { roughness: .4 }), pneu = M('#151515', { roughness: .9 });
      [-1, 1].forEach(s => { em(g, new THREE.Mesh(new THREE.TorusGeometry(.34, .03, 8, 28), pneu), s * .5, .36, 0); for (let k = 0; k < 8; k++) { const r = em(g, cil(.002, .002, .66, M('#aaa'), 3), s * .5, .36, 0); r.rotation.z = k * Math.PI / 8; } });
      const tubo = (x1: number, y1: number, x2: number, y2: number) => { const l = Math.hypot(x2 - x1, y2 - y1), t = em(g, cil(.018, .018, l, qd, 8), (x1 + x2) / 2, (y1 + y2) / 2, 0); t.rotation.z = Math.atan2(x1 - x2, y2 - y1); };
      tubo(-.5, .36, -.05, .4); tubo(-.05, .4, .35, .75); tubo(-.05, .4, -.12, .82); tubo(-.12, .82, .35, .75); tubo(.35, .75, .5, .36); tubo(-.5, .36, -.12, .82);
      em(g, rb(.2, .04, .08, preto, .02), -.14, .86, 0); em(g, deitado(cil(.012, .012, .55, preto, 8), 'z'), .38, .86, 0); return g;
    },
  };

  // ---------- piso, paredes e aberturas ----------
  const alvos: THREE.Object3D[] = [], porId = new Map<string, THREE.Mesh[]>();
  const forma = (pts: [number, number][]) => { const s = new THREE.Shape(); pts.forEach(([x, y], i) => i ? s.lineTo(mx(x), mz(y)) : s.moveTo(mx(x), mz(y))); return s; };
  const tex = texPorcelanato(); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(1 / 1.2, 1 / 1.2);
  const piso = (pts: [number, number][], mat: THREE.Material) => {
    const g = new THREE.ShapeGeometry(forma(pts)); g.rotateX(Math.PI / 2);
    const me = new THREE.Mesh(g, mat); me.receiveShadow = true; me.userData.piso = true; me.position.y = .001; scene.add(me); alvos.push(me);
  };
  piso(PISO, M('#fff', { map: tex, roughness: .35, side: THREE.DoubleSide }));
  const texV = texPorcelanato(); texV.wrapS = texV.wrapT = THREE.RepeatWrapping; texV.repeat.set(1 / 0.9, 1 / 0.9); piso(PISO_VARANDA, M('#e9e2d6', { map: texV, roughness: .6, side: THREE.DoubleSide }));
  const contorno: [number, number][] = [[46, 16], [202, 16], [202, 106], [332, 106], [332, 350], [46, 350]];
  const laje = new THREE.Mesh(new THREE.ExtrudeGeometry(forma(contorno), { depth: .18, bevelEnabled: false }).rotateX(Math.PI / 2), M('#f1efe9', { roughness: .9 }));
  laje.receiveShadow = true; scene.add(laje);
  const chao = new THREE.Mesh(new THREE.CircleGeometry(14, 48).rotateX(-Math.PI / 2), new THREE.ShadowMaterial({ opacity: .12 })); chao.position.set(CENTRO.x, -.18, CENTRO.z); chao.receiveShadow = true; scene.add(chao);

  const paredeMat = M('#fbfaf7', { roughness: .92 }), topoMat = M('#6e6c68', { roughness: .9 }), rodapeMat = M('#ffffff', { roughness: .4 });
  type Parede = { corpo: THREE.Mesh; topo: THREE.Mesh; base: number; frente: boolean; comTopo: boolean };
  const segmento = (a: [number, number], b: [number, number], h: number, base = 0, material: THREE.Material = paredeMat, comTopo = true): Parede => {
    const x1 = mx(a[0]), z1 = mz(a[1]), x2 = mx(b[0]), z2 = mz(b[1]);
    const len = Math.hypot(x2 - x1, z2 - z1) + ESP, ang = -Math.atan2(z2 - z1, x2 - x1);
    const corpo = new THREE.Mesh(new THREE.BoxGeometry(len, 1, ESP), material); corpo.rotation.y = ang; corpo.position.set((x1 + x2) / 2, 0, (z1 + z2) / 2);
    corpo.castShadow = corpo.receiveShadow = true; scene.add(corpo);
    const topo = new THREE.Mesh(new THREE.BoxGeometry(len + .002, .012, ESP + .002), topoMat); topo.rotation.y = ang; topo.position.copy(corpo.position); topo.visible = comTopo; scene.add(topo);
    const p: Parede = { corpo, topo, base, frente: a[1] >= 340 && b[1] >= 340, comTopo }; ajustar(p, h); return p;
  };
  const ajustar = (p: Parede, h: number) => { p.corpo.scale.y = h; p.corpo.position.y = p.base + h / 2; p.topo.position.y = p.base + h + .006; };
  const cheias: Parede[] = [];
  PAREDES.forEach(pts => { for (let i = 1; i < pts.length; i++) {
    cheias.push(segmento(pts[i - 1], pts[i], ALTA));
    const r = segmento(pts[i - 1], pts[i], .07, 0, rodapeMat, false); r.corpo.scale.z = 1.18;
  } });
  { const [bx0, by0, bw0, bh0] = BLOCO; const p = segmento([bx0 + bw0 / 2, by0], [bx0 + bw0 / 2, by0 + bh0], ALTA); p.corpo.geometry = new THREE.BoxGeometry(m(bh0) + ESP, 1, m(bw0)); p.topo.geometry = new THREE.BoxGeometry(m(bh0) + ESP, .012, m(bw0)); cheias.push(p); }
  const sobre: Parede[] = [], vidros: THREE.Mesh[] = [];
  const caixilho = M('#e9eaea', { metalness: .4, roughness: .35 }); const vidroJ = vidro.clone(); const cortaveis: THREE.Material[] = [vidroJ, caixilho];
  JANELAS.forEach(([a, b]) => {
    const pe = segmento(a, b, 1.0); pe.frente = false; sobre.push(segmento(a, b, ALTA - 2.1, 2.1));
    const v = segmento(a, b, 1.1, 1.0, vidroJ, false); v.corpo.scale.z = .25;
    [1.0, 2.07].forEach(y => { const c = segmento(a, b, .03, y, caixilho, false); c.corpo.scale.z = .5; });
    const meio: [number, number] = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; const vert = a[0] === b[0];
    segmento(vert ? [meio[0], meio[1] - .4] : [meio[0] - .4, meio[1]], vert ? [meio[0], meio[1] + .4] : [meio[0] + .4, meio[1]], 1.07, 1.0, caixilho, false);
  });
  { const v = segmento(PORTA_VIDRO[0], PORTA_VIDRO[1], 2.1, 0, vidroJ, false); v.corpo.scale.z = .25; sobre.push(segmento(PORTA_VIDRO[0], PORTA_VIDRO[1], ALTA - 2.1, 2.1));
    segmento(PORTA_VIDRO[0], PORTA_VIDRO[1], .04, 2.07, caixilho, false);
    const meio = (PORTA_VIDRO[0][0] + PORTA_VIDRO[1][0]) / 2; segmento([meio, 302.5], [meio, 305.5], 2.1, 0, caixilho, false); }
  { const [a, b] = GUARDA_CORPO; const n = Math.round((b[0] - a[0]) / 3.2); const gc = M('#f2f0ea', { roughness: .5 });
    for (let i = 0; i <= n; i++) { const bar = cil(.01, .01, 1.05, gc, 6); bar.position.set(mx(a[0] + i * (b[0] - a[0]) / n), .525, mz(a[1]) - .02); bar.castShadow = true; scene.add(bar); }
    segmento(a, b, .05, 1.05, gc, false); const tela_ = segmento(a, b, 1.3, 1.1, M('#ffffff', { transparent: true, opacity: .1, side: THREE.DoubleSide }), false); tela_.corpo.scale.z = .1; sobre.push(tela_);
    [[50, 304], [50, 346]].forEach(() => {}); }
  // revestimento hexagonal da cozinha (atrás do fogão)
  { const t = texHexagonal(); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 1); const r = plano(1.9, .62, M('#fff', { map: t, roughness: .4 })); r.position.set(mx(110), 1.22, mz(20) + ESP / 2 + .005); scene.add(r); }
  const folha = (hx: number, hz: number, larg: number, ang: number, cor = '#f7f6f2') => {
    const g = new THREE.Group(); const mf = M(cor, { roughness: .5 }); cortaveis.push(mf); em(g, rb(larg, 2.1, .035, mf, .005), larg / 2, 1.05, 0);
    em(g, deitado(cil(.012, .012, .12, cromo, 8), 'x'), larg - .08, 1.0, .03); em(g, deitado(cil(.012, .012, .12, cromo, 8), 'x'), larg - .08, 1.0, -.03);
    g.position.set(hx, 0, hz); g.rotation.y = ang; sombra(g); scene.add(g); return g;
  };
  const portasAbertas = [folha(mx(50), mz(160), .85, 1.2, '#efe9df'), folha(mx(216), mz(199), .55, 2.0), folha(mx(221), mz(230), .7, 1.0), folha(mx(200), mz(232), .7, -1.1)];
  const extras: THREE.Object3D[] = [];
  const cortQuarto = cortina(1.8, 2.3, '#a8a9ab'); cortQuarto.traverse(c => { const me = c as THREE.Mesh; if (me.isMesh) cortaveis.push(me.material as THREE.Material); }); cortQuarto.position.set(mx(270), 0, mz(342)); extras.push(cortQuarto);
  const cortEsc = cortina(1.4, 2.3, '#f3f1ec'); cortEsc.traverse(c => { const me = c as THREE.Mesh; if (me.isMesh) cortaveis.push(me.material as THREE.Material); }); cortEsc.position.set(mx(278), 0, mz(114)); extras.push(cortEsc);
  { const g = new THREE.Group(); const t = rb(.8, .02, .22, M('#2e2a26'), .01); t.position.y = .42; t.rotation.z = 1.2; g.add(t); [-1, 1].forEach(s => { const r = esf(.03, M('#d6a23a'), 8); r.position.set(-.05 + s * .02, .06 + (s + 1) * .32, .08); g.add(r); }); g.position.set(mx(322), 0, mz(160)); extras.push(g); }
  { const g = new THREE.Group(); const c = cil(.17, .14, .25, M('#ef8a9c'), 18); c.position.y = .125; c.scale.x = 1.6; g.add(c); const cesto = cil(.1, .1, .1, M('#7a1f3d'), 16); cesto.position.set(.12, .2, 0); g.add(cesto); g.position.set(mx(150), 0, mz(208)); extras.push(g); }
  for (let i = 0; i < 6; i++) { const pl = planta(.14, .32 + (i % 3) * .08, 4); pl.position.set(mx(56 + i * 8), 0, mz(342.5)); extras.push(pl); }
  { const g = new THREE.Group(); const mop = cil(.012, .012, 1.2, M('#d64a6a'), 6); mop.position.y = .6; mop.rotation.z = .15; g.add(mop); const cab = cil(.12, .14, .05, M('#c9c9c9', { roughness: 1 }), 14); cab.position.y = .03; g.add(cab); g.position.set(mx(178), 0, mz(310)); extras.push(g); }
  { const g = new THREE.Group(); const fr = cil(.06, .08, .22, M('#78c850', { transparent: true, opacity: .8 }), 14); fr.position.y = .11; g.add(fr); g.position.set(mx(178), 0, mz(322)); extras.push(g); }
  { const g = new THREE.Group(); const prat = bx(.25, .02, .1, M('#fff')); prat.position.set(0, 1.35, 0); g.add(prat); const fr = cil(.03, .03, .16, M('#8d6ad1'), 10); fr.position.set(.05, 1.44, 0); g.add(fr); const chave = cil(.003, .003, .2, M('#2a7a3a'), 4); chave.position.set(-.05, 1.2, 0); g.add(chave); g.position.set(mx(51) + .07, 0, mz(120)); g.rotation.y = Math.PI / 2; extras.push(g); }
  { const g = new THREE.Group(); const lu = plano(1.2, .9, M('#fff', { transparent: true, opacity: 0 })); g.add(lu); extras.push(g); }
  extras.forEach(e => { sombra(e); scene.add(e); });

  // ---------- móveis detalhados ----------
  const ROT: Record<string, number> = { '+z': 0, '-z': Math.PI, '+x': Math.PI / 2, '-x': -Math.PI / 2 };
  MOVEIS.forEach(f => {
    const lat = f.face === '+x' || f.face === '-x';
    const w = m(lat ? f.d : f.w), d = m(lat ? f.w : f.d);
    const g = (B[f.id] || ((w2: number, d2: number, h2: number) => { const gg = new THREE.Group(); em(gg, rb(w2, h2, d2, branco), 0, h2 / 2, 0); return gg; }))(w, d, f.h, f);
    g.rotation.y = ROT[f.face || '+z']; g.position.set(mx(f.x) + m(f.w) / 2, f.base || 0, mz(f.y) + m(f.d) / 2);
    sombra(g); if (f.id.startsWith('tapete')) g.traverse(c => { c.castShadow = false; });
    g.traverse(c => { const me = c as THREE.Mesh; if (!me.isMesh) return; me.userData.movel = f.id; me.material = (me.material as THREE.Material).clone(); porId.set(f.id, [...(porId.get(f.id) || []), me]); });
    scene.add(g); alvos.push(g);
  });
  porId.get('cortina-sala')?.forEach(me => cortaveis.push(me.material as THREE.Material));
  // luzes quentes dos abajures e da sala

  const grupoF = new THREE.Group(); scene.add(grupoF);
  const fantMat = new THREE.MeshStandardMaterial({ color: '#e0962e', transparent: true, opacity: 0.38 });
  const borda = new THREE.LineBasicMaterial({ color: '#c47a12' });

  const corte = new THREE.Plane(new THREE.Vector3(0, -1, 0), BAIXA + .02);
  let altas = true, planta2d = false, onMudou: () => void = () => {};
  const aplicarParedes = () => {
    const h = planta2d ? ALTA : altas ? ALTA : BAIXA;
    cheias.forEach(p => ajustar(p, !planta2d && altas && p.frente ? CORTE : h));
    sobre.forEach(p => { p.corpo.visible = h === ALTA && !planta2d; p.topo.visible = p.comTopo && p.corpo.visible; });
    const planos = !planta2d && !altas ? [corte] : [];
    cortaveis.forEach(mt => { mt.clippingPlanes = planos; mt.needsUpdate = true; });
    portasAbertas.forEach(p => p.visible = !planta2d); [cortQuarto, cortEsc].forEach(c => c.visible = !planta2d);
  };

  let alvo: { t: THREE.Vector3; p: THREE.Vector3 } | null = null;
  let onToque: (t: { movel?: string; x: number; y: number }) => void = () => {};
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2(); let ini: { x: number; y: number; t: number } | null = null;
  const cvs = renderer.domElement;
  cvs.addEventListener('pointerdown', e => { ini = { x: e.clientX, y: e.clientY, t: Date.now() }; });
  cvs.addEventListener('pointerup', e => {
    if (!ini || Math.hypot(e.clientX - ini.x, e.clientY - ini.y) > 8 || Date.now() - ini.t > 600) { ini = null; return; }
    ini = null; const r = cvs.getBoundingClientRect();
    ptr.set((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); ray.setFromCamera(ptr, cam);
    const visivel = (o: THREE.Object3D | null) => { while (o) { if (!o.visible) return false; o = o.parent; } return true; };
    const hit = ray.intersectObjects([...alvos, ...cheias.map(p => p.corpo)], true).find(h => visivel(h.object) && !(h.object as THREE.Mesh & { material: THREE.Material }).material.transparent);
    if (!hit || !(hit.object.userData.movel || hit.object.userData.piso)) return;
    onToque({ movel: hit.object.userData.movel, x: hit.point.x * 40 + 50, y: hit.point.z * 40 + 20 });
  });
  let selecionado: string | null = null;

  const resize = () => {
    const w = el.clientWidth, h = el.clientHeight; renderer.setSize(w, h, false); persp.aspect = w / Math.max(1, h); persp.updateProjectionMatrix();
    const a = w / Math.max(1, h), vh = Math.max(8.9, 7.6 / a) / 2; Object.assign(orto, { left: -vh * a, right: vh * a, top: vh, bottom: -vh }); orto.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize); ro.observe(el); resize();
  const inicio = () => { const k = Math.max(1, 1.12 / persp.aspect); return { t: CENTRO.clone().add(new THREE.Vector3(0, 0, .2)), p: new THREE.Vector3(CENTRO.x - 0.3 * k, 11.5 * k, CENTRO.z + 7.2 * k) }; };
  const i0 = inicio(); persp.position.copy(i0.p); ctl3d.target.copy(i0.t);
  orto.position.set(CENTRO.x, 20, CENTRO.z); orto.up.set(0, 0, -1); orto.lookAt(CENTRO); ctl2d.target.copy(CENTRO);
  aplicarParedes(); renderer.shadowMap.needsUpdate = true;
  let raf = 0, vivo = true, sujo = 2;
  const pedir = () => { sujo = 2; };
  ctl3d.addEventListener('change', pedir); ctl2d.addEventListener('change', pedir); new ResizeObserver(pedir).observe(el);
  const loop = () => {
    if (!vivo) return;
    if (alvo) sujo = 2;
    if (alvo && !planta2d) { ctl3d.target.lerp(alvo.t, 0.12); persp.position.lerp(alvo.p, 0.12); if (persp.position.distanceTo(alvo.p) < 0.02) alvo = null; }
    if (alvo && planta2d) { ctl2d.target.lerp(alvo.t, .15); orto.position.lerp(new THREE.Vector3(alvo.t.x, 20, alvo.t.z), .15); orto.zoom += (alvo.p.y - orto.zoom) * .15; orto.updateProjectionMatrix(); if (Math.abs(orto.zoom - alvo.p.y) < .01) alvo = null; }
    if (controls.update()) sujo = 2;
    if (sujo > 0) { sujo--; renderer.render(scene, cam); onMudou(); }
    raf = requestAnimationFrame(loop);
  };
  loop();

  return {
    focar(id) {
      const r = COMODOS_PLANTA.find(c => c.id === id);
      if (planta2d) { const t = r ? new THREE.Vector3(mx(r.x + r.w / 2), 0, mz(r.y + r.h / 2)) : CENTRO.clone(); alvo = { t, p: new THREE.Vector3(0, r ? Math.min(3.2, 7 / Math.max(m(r.w), m(r.h), 1.6)) : 1, 0) }; return; }
      if (!r) { alvo = inicio(); return; }
      const t = new THREE.Vector3(mx(r.x + r.w / 2), 0, mz(r.y + r.h / 2)); const tam = Math.max(m(r.w), m(r.h), 1.8);
      const k = Math.max(1, 0.9 / persp.aspect); alvo = { t, p: t.clone().add(new THREE.Vector3(tam * 0.3 * k, (3.2 + tam * 1.7) * k, (2.2 + tam * 1.4) * k)) };
    },
    selecionar(id) {
      if (selecionado) porId.get(selecionado)?.forEach(me => (me.material as THREE.MeshStandardMaterial).emissive?.setHex(0x000000));
      selecionado = id; if (id) porId.get(id)?.forEach(me => (me.material as THREE.MeshStandardMaterial).emissive?.setHex(0x6a3a00)); pedir();
    },
    topo(id) {
      const ms = porId.get(id); if (!ms?.length) return null;
      const b = new THREE.Box3(); ms.forEach(me => b.expandByObject(me)); const c = b.getCenter(new THREE.Vector3());
      return { x: c.x, y: Math.min(b.max.y, 2.3), z: c.z };
    },
    onToque(fn) { onToque = fn; },
    modo(p) {
      planta2d = p; alvo = null; cam = p ? orto : persp; controls = p ? ctl2d : ctl3d; ctl2d.enabled = p; ctl3d.enabled = !p;
      sol.castShadow = !p; aplicarParedes(); renderer.shadowMap.needsUpdate = true; pedir();
    },
    paredes(a) { altas = a; aplicarParedes(); renderer.shadowMap.needsUpdate = true; pedir(); },
    fantasmas(lista) {
      grupoF.clear();
      lista.forEach(f => {
        const g = new THREE.BoxGeometry(f.l, f.a, f.p); const me = new THREE.Mesh(g, fantMat); me.position.set(f.x, f.a / 2 + 0.005, f.z);
        const e = new THREE.LineSegments(new THREE.EdgesGeometry(g), borda); e.position.copy(me.position); grupoF.add(me, e);
      });
      pedir();
    },
    projetar(x, y, z) {
      const v = new THREE.Vector3(x, y, z).project(cam);
      return { x: (v.x + 1) / 2 * el.clientWidth, y: (1 - v.y) / 2 * el.clientHeight, ok: v.z < 1 };
    },
    onMudou(fn) { onMudou = fn; pedir(); },
    destruir() { vivo = false; cancelAnimationFrame(raf); ro.disconnect(); ctl3d.dispose(); ctl2d.dispose(); pmrem.dispose(); renderer.dispose(); scene.traverse(o => { const me = o as THREE.Mesh; me.geometry?.dispose(); }); renderer.domElement.remove(); },
  };
}
