import{n,t,a,i,s,l,c,u,d,r,o,f}from"./main-0t590yma.js";var Fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},On={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var ja=2;var Qa=2;var to="srgb";class Tn{addEventListener(e,h){if(this._listeners===void 0)this._listeners={};let p=this._listeners;if(p[e]===void 0)p[e]=[];if(p[e].indexOf(h)===-1)p[e].push(h)}hasEventListener(e,h){if(this._listeners===void 0)return!1;let p=this._listeners;return p[e]!==void 0&&p[e].indexOf(h)!==-1}removeEventListener(e,h){if(this._listeners===void 0)return;let m=this._listeners[e];if(m!==void 0){let g=m.indexOf(h);if(g!==-1)m.splice(g,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let p=this._listeners[e.type];if(p!==void 0){e.target=this;let m=p.slice(0);for(let g=0,_=m.length;g<_;g++)m[g].call(this,e);e.target=null}}}var Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=1234567,ii=Math.PI/180,wi=180/Math.PI;function Bn(){let e=Math.random()*4294967295|0,h=Math.random()*4294967295|0,p=Math.random()*4294967295|0,m=Math.random()*4294967295|0;return(Pe[e&255]+Pe[e>>8&255]+Pe[e>>16&255]+Pe[e>>24&255]+"-"+Pe[h&255]+Pe[h>>8&255]+"-"+Pe[h>>16&15|64]+Pe[h>>24&255]+"-"+Pe[p&63|128]+Pe[p>>8&255]+"-"+Pe[p>>16&255]+Pe[p>>24&255]+Pe[m&255]+Pe[m>>8&255]+Pe[m>>16&255]+Pe[m>>24&255]).toLowerCase()}function Ee(e,h,p){return Math.max(h,Math.min(p,e))}function dr(e,h){return(e%h+h)%h}function el(e,h,p,m,g){return m+(e-h)*(g-m)/(p-h)}function nl(e,h,p){if(e!==h)return(p-e)/(h-e);else return 0}function Mi(e,h,p){return(1-p)*e+p*h}function il(e,h,p,m){return Mi(e,h,1-Math.exp(-p*m))}function sl(e,h=1){return h-Math.abs(dr(e,h*2)-h)}function rl(e,h,p){if(e<=h)return 0;if(e>=p)return 1;return e=(e-h)/(p-h),e*e*(3-2*e)}function al(e,h,p){if(e<=h)return 0;if(e>=p)return 1;return e=(e-h)/(p-h),e*e*e*(e*(e*6-15)+10)}function ol(e,h){return e+Math.floor(Math.random()*(h-e+1))}function ll(e,h){return e+Math.random()*(h-e)}function cl(e){return e*(0.5-Math.random())}function hl(e){if(e!==void 0)$r=e;let h=$r+=1831565813;return h=Math.imul(h^h>>>15,h|1),h^=h+Math.imul(h^h>>>7,h|61),((h^h>>>14)>>>0)/4294967296}function ul(e){return e*ii}function dl(e){return e*wi}function fl(e){return(e&e-1)===0&&e!==0}function pl(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function ml(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function gl(e,h,p,m,g){let{cos:_,sin:x}=Math,v=_(p/2),y=x(p/2),M=_((h+m)/2),b=x((h+m)/2),S=_((h-m)/2),E=x((h-m)/2),A=_((m-h)/2),R=x((m-h)/2);switch(g){case"XYX":e.set(v*b,y*S,y*E,v*M);break;case"YZY":e.set(y*E,v*b,y*S,v*M);break;case"ZXZ":e.set(y*S,y*E,v*b,v*M);break;case"XZX":e.set(v*b,y*R,y*A,v*M);break;case"YXY":e.set(y*A,v*b,y*R,v*M);break;case"ZYZ":e.set(y*R,y*A,v*b,v*M);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+g)}}function ti(e,h){switch(h.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function De(e,h){switch(h.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("Invalid component type.")}}var eo={DEG2RAD:ii,RAD2DEG:wi,generateUUID:Bn,clamp:Ee,euclideanModulo:dr,mapLinear:el,inverseLerp:nl,lerp:Mi,damp:il,pingpong:sl,smoothstep:rl,smootherstep:al,randInt:ol,randFloat:ll,randFloatSpread:cl,seededRandom:hl,degToRad:ul,radToDeg:dl,isPowerOfTwo:fl,ceilPowerOfTwo:pl,floorPowerOfTwo:ml,setQuaternionFromProperEuler:gl,normalize:De,denormalize:ti};class bt{constructor(e=0,h=0){bt.prototype.isVector2=!0,this.x=e,this.y=h}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,h){return this.x=e,this.y=h,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,h){switch(e){case 0:this.x=h;break;case 1:this.y=h;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,h){return this.x=e.x+h.x,this.y=e.y+h.y,this}addScaledVector(e,h){return this.x+=e.x*h,this.y+=e.y*h,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,h){return this.x=e.x-h.x,this.y=e.y-h.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let h=this.x,p=this.y,m=e.elements;return this.x=m[0]*h+m[3]*p+m[6],this.y=m[1]*h+m[4]*p+m[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,h){return this.x=Math.max(e.x,Math.min(h.x,this.x)),this.y=Math.max(e.y,Math.min(h.y,this.y)),this}clampScalar(e,h){return this.x=Math.max(e,Math.min(h,this.x)),this.y=Math.max(e,Math.min(h,this.y)),this}clampLength(e,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(e,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let h=Math.sqrt(this.lengthSq()*e.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(e)/h;return Math.acos(Ee(p,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let h=this.x-e.x,p=this.y-e.y;return h*h+p*p}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,h){return this.x+=(e.x-this.x)*h,this.y+=(e.y-this.y)*h,this}lerpVectors(e,h,p){return this.x=e.x+(h.x-e.x)*p,this.y=e.y+(h.y-e.y)*p,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,h=0){return this.x=e[h],this.y=e[h+1],this}toArray(e=[],h=0){return e[h]=this.x,e[h+1]=this.y,e}fromBufferAttribute(e,h){return this.x=e.getX(h),this.y=e.getY(h),this}rotateAround(e,h){let p=Math.cos(h),m=Math.sin(h),g=this.x-e.x,_=this.y-e.y;return this.x=g*p-_*m+e.x,this.y=g*m+_*p+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(e,h,p,m,g,_,x,v,y){if(Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,h,p,m,g,_,x,v,y)}set(e,h,p,m,g,_,x,v,y){let M=this.elements;return M[0]=e,M[1]=m,M[2]=x,M[3]=h,M[4]=g,M[5]=v,M[6]=p,M[7]=_,M[8]=y,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let h=this.elements,p=e.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],this}extractBasis(e,h,p){return e.setFromMatrix3Column(this,0),h.setFromMatrix3Column(this,1),p.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let h=e.elements;return this.set(h[0],h[4],h[8],h[1],h[5],h[9],h[2],h[6],h[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,h){let p=e.elements,m=h.elements,g=this.elements,_=p[0],x=p[3],v=p[6],y=p[1],M=p[4],b=p[7],S=p[2],E=p[5],A=p[8],R=m[0],P=m[3],T=m[6],w=m[1],O=m[4],D=m[7],N=m[2],Q=m[5],B=m[8];return g[0]=_*R+x*w+v*N,g[3]=_*P+x*O+v*Q,g[6]=_*T+x*D+v*B,g[1]=y*R+M*w+b*N,g[4]=y*P+M*O+b*Q,g[7]=y*T+M*D+b*B,g[2]=S*R+E*w+A*N,g[5]=S*P+E*O+A*Q,g[8]=S*T+E*D+A*B,this}multiplyScalar(e){let h=this.elements;return h[0]*=e,h[3]*=e,h[6]*=e,h[1]*=e,h[4]*=e,h[7]*=e,h[2]*=e,h[5]*=e,h[8]*=e,this}determinant(){let e=this.elements,h=e[0],p=e[1],m=e[2],g=e[3],_=e[4],x=e[5],v=e[6],y=e[7],M=e[8];return h*_*M-h*x*y-p*g*M+p*x*v+m*g*y-m*_*v}invert(){let e=this.elements,h=e[0],p=e[1],m=e[2],g=e[3],_=e[4],x=e[5],v=e[6],y=e[7],M=e[8],b=M*_-x*y,S=x*v-M*g,E=y*g-_*v,A=h*b+p*S+m*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=b*R,e[1]=(m*y-M*p)*R,e[2]=(x*p-m*_)*R,e[3]=S*R,e[4]=(M*h-m*v)*R,e[5]=(m*g-x*h)*R,e[6]=E*R,e[7]=(p*v-y*h)*R,e[8]=(_*h-p*g)*R,this}transpose(){let e,h=this.elements;return e=h[1],h[1]=h[3],h[3]=e,e=h[2],h[2]=h[6],h[6]=e,e=h[5],h[5]=h[7],h[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let h=this.elements;return e[0]=h[0],e[1]=h[3],e[2]=h[6],e[3]=h[1],e[4]=h[4],e[5]=h[7],e[6]=h[2],e[7]=h[5],e[8]=h[8],this}setUvTransform(e,h,p,m,g,_,x){let v=Math.cos(g),y=Math.sin(g);return this.set(p*v,p*y,-p*(v*_+y*x)+_+e,-m*y,m*v,-m*(-y*_+v*x)+x+h,0,0,1),this}scale(e,h){return this.premultiply(Cs.makeScale(e,h)),this}rotate(e){return this.premultiply(Cs.makeRotation(-e)),this}translate(e,h){return this.premultiply(Cs.makeTranslation(e,h)),this}makeTranslation(e,h){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,h,0,0,1);return this}makeRotation(e){let h=Math.cos(e),p=Math.sin(e);return this.set(h,-p,0,p,h,0,0,0,1),this}makeScale(e,h){return this.set(e,0,0,0,h,0,0,0,1),this}equals(e){let h=this.elements,p=e.elements;for(let m=0;m<9;m++)if(h[m]!==p[m])return!1;return!0}fromArray(e,h=0){for(let p=0;p<9;p++)this.elements[p]=e[p+h];return this}toArray(e=[],h=0){let p=this.elements;return e[h]=p[0],e[h+1]=p[1],e[h+2]=p[2],e[h+3]=p[3],e[h+4]=p[4],e[h+5]=p[5],e[h+6]=p[6],e[h+7]=p[7],e[h+8]=p[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var Cs=new Yt;function no(e){for(let h=e.length-1;h>=0;--h)if(e[h]>=65535)return!0;return!1}function fs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function _l(){let e=fs("canvas");return e.style.display="block",e}var Kr={};function vi(e){if(e in Kr)return;Kr[e]=!0,console.warn(e)}function xl(e,h,p){return new Promise(function(m,g){function _(){switch(e.clientWaitSync(h,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:g();break;case e.TIMEOUT_EXPIRED:setTimeout(_,p);break;default:m()}}setTimeout(_,p)})}function vl(e){let h=e.elements;h[2]=0.5*h[2]+0.5*h[3],h[6]=0.5*h[6]+0.5*h[7],h[10]=0.5*h[10]+0.5*h[11],h[14]=0.5*h[14]+0.5*h[15]}function yl(e){let h=e.elements;if(h[11]===-1)h[10]=-h[10]-1,h[14]=-h[14];else h[10]=-h[10],h[14]=-h[14]+1}var te={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(e,h,p){if(this.enabled===!1||h===p||!h||!p)return e;if(this.spaces[h].transfer==="srgb")e.r=fn(e.r),e.g=fn(e.g),e.b=fn(e.b);if(this.spaces[h].primaries!==this.spaces[p].primaries)e.applyMatrix3(this.spaces[h].toXYZ),e.applyMatrix3(this.spaces[p].fromXYZ);if(this.spaces[p].transfer==="srgb")e.r=si(e.r),e.g=si(e.g),e.b=si(e.b);return e},fromWorkingColorSpace:function(e,h){return this.convert(e,this.workingColorSpace,h)},toWorkingColorSpace:function(e,h){return this.convert(e,h,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){if(e==="")return"linear";return this.spaces[e].transfer},getLuminanceCoefficients:function(e,h=this.workingColorSpace){return e.fromArray(this.spaces[h].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,h,p){return e.copy(this.spaces[h].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function fn(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function si(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var jr=[0.64,0.33,0.3,0.6,0.15,0.06],Qr=[0.2126,0.7152,0.0722],ta=[0.3127,0.329],ea=new Yt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),na=new Yt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);te.define({["srgb-linear"]:{primaries:jr,whitePoint:ta,transfer:"linear",toXYZ:ea,fromXYZ:na,luminanceCoefficients:Qr,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:jr,whitePoint:ta,transfer:"srgb",toXYZ:ea,fromXYZ:na,luminanceCoefficients:Qr,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}});var Hn;class io{static getDataURL(e){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let h;if(e instanceof HTMLCanvasElement)h=e;else{if(Hn===void 0)Hn=fs("canvas");Hn.width=e.width,Hn.height=e.height;let p=Hn.getContext("2d");if(e instanceof ImageData)p.putImageData(e,0,0);else p.drawImage(e,0,0,e.width,e.height);h=Hn}if(h.width>2048||h.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),h.toDataURL("image/jpeg",0.6);else return h.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let h=fs("canvas");h.width=e.width,h.height=e.height;let p=h.getContext("2d");p.drawImage(e,0,0,e.width,e.height);let m=p.getImageData(0,0,e.width,e.height),g=m.data;for(let _=0;_<g.length;_++)g[_]=fn(g[_]/255)*255;return p.putImageData(m,0,0),h}else if(e.data){let h=e.data.slice(0);for(let p=0;p<h.length;p++)if(h instanceof Uint8Array||h instanceof Uint8ClampedArray)h[p]=Math.floor(fn(h[p]/255)*255);else h[p]=fn(h[p]);return{data:h,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Ml=0;class fr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let h=e===void 0||typeof e==="string";if(!h&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let p={uuid:this.uuid,url:""},m=this.data;if(m!==null){let g;if(Array.isArray(m)){g=[];for(let _=0,x=m.length;_<x;_++)if(m[_].isDataTexture)g.push(Ps(m[_].image));else g.push(Ps(m[_]))}else g=Ps(m);p.url=g}if(!h)e.images[this.uuid]=p;return p}}function Ps(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return io.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var Sl=0;class Fe extends Tn{constructor(e=Fe.DEFAULT_IMAGE,h=Fe.DEFAULT_MAPPING,p=1001,m=1001,g=1006,_=1008,x=1023,v=1009,y=Fe.DEFAULT_ANISOTROPY,M=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=Bn(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=h,this.channel=0,this.wrapS=p,this.wrapT=m,this.magFilter=g,this.minFilter=_,this.anisotropy=y,this.format=x,this.internalFormat=null,this.type=v,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=M,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let h=e===void 0||typeof e==="string";if(!h&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let p={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)p.userData=this.userData;if(!h)e.textures[this.uuid]=p;return p}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=300;Fe.DEFAULT_ANISOTROPY=1;class xe{constructor(e=0,h=0,p=0,m=1){xe.prototype.isVector4=!0,this.x=e,this.y=h,this.z=p,this.w=m}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,h,p,m){return this.x=e,this.y=h,this.z=p,this.w=m,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,h){switch(e){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;case 3:this.w=h;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,h){return this.x=e.x+h.x,this.y=e.y+h.y,this.z=e.z+h.z,this.w=e.w+h.w,this}addScaledVector(e,h){return this.x+=e.x*h,this.y+=e.y*h,this.z+=e.z*h,this.w+=e.w*h,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,h){return this.x=e.x-h.x,this.y=e.y-h.y,this.z=e.z-h.z,this.w=e.w-h.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let h=this.x,p=this.y,m=this.z,g=this.w,_=e.elements;return this.x=_[0]*h+_[4]*p+_[8]*m+_[12]*g,this.y=_[1]*h+_[5]*p+_[9]*m+_[13]*g,this.z=_[2]*h+_[6]*p+_[10]*m+_[14]*g,this.w=_[3]*h+_[7]*p+_[11]*m+_[15]*g,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let h=Math.sqrt(1-e.w*e.w);if(h<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/h,this.y=e.y/h,this.z=e.z/h;return this}setAxisAngleFromRotationMatrix(e){let h,p,m,g,_=0.01,x=0.1,v=e.elements,y=v[0],M=v[4],b=v[8],S=v[1],E=v[5],A=v[9],R=v[2],P=v[6],T=v[10];if(Math.abs(M-S)<0.01&&Math.abs(b-R)<0.01&&Math.abs(A-P)<0.01){if(Math.abs(M+S)<0.1&&Math.abs(b+R)<0.1&&Math.abs(A+P)<0.1&&Math.abs(y+E+T-3)<0.1)return this.set(1,0,0,0),this;h=Math.PI;let O=(y+1)/2,D=(E+1)/2,N=(T+1)/2,Q=(M+S)/4,B=(b+R)/4,z=(A+P)/4;if(O>D&&O>N)if(O<0.01)p=0,m=0.707106781,g=0.707106781;else p=Math.sqrt(O),m=Q/p,g=B/p;else if(D>N)if(D<0.01)p=0.707106781,m=0,g=0.707106781;else m=Math.sqrt(D),p=Q/m,g=z/m;else if(N<0.01)p=0.707106781,m=0.707106781,g=0;else g=Math.sqrt(N),p=B/g,m=z/g;return this.set(p,m,g,h),this}let w=Math.sqrt((P-A)*(P-A)+(b-R)*(b-R)+(S-M)*(S-M));if(Math.abs(w)<0.001)w=1;return this.x=(P-A)/w,this.y=(b-R)/w,this.z=(S-M)/w,this.w=Math.acos((y+E+T-1)/2),this}setFromMatrixPosition(e){let h=e.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this.w=h[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,h){return this.x=Math.max(e.x,Math.min(h.x,this.x)),this.y=Math.max(e.y,Math.min(h.y,this.y)),this.z=Math.max(e.z,Math.min(h.z,this.z)),this.w=Math.max(e.w,Math.min(h.w,this.w)),this}clampScalar(e,h){return this.x=Math.max(e,Math.min(h,this.x)),this.y=Math.max(e,Math.min(h,this.y)),this.z=Math.max(e,Math.min(h,this.z)),this.w=Math.max(e,Math.min(h,this.w)),this}clampLength(e,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(e,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,h){return this.x+=(e.x-this.x)*h,this.y+=(e.y-this.y)*h,this.z+=(e.z-this.z)*h,this.w+=(e.w-this.w)*h,this}lerpVectors(e,h,p){return this.x=e.x+(h.x-e.x)*p,this.y=e.y+(h.y-e.y)*p,this.z=e.z+(h.z-e.z)*p,this.w=e.w+(h.w-e.w)*p,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,h=0){return this.x=e[h],this.y=e[h+1],this.z=e[h+2],this.w=e[h+3],this}toArray(e=[],h=0){return e[h]=this.x,e[h+1]=this.y,e[h+2]=this.z,e[h+3]=this.w,e}fromBufferAttribute(e,h){return this.x=e.getX(h),this.y=e.getY(h),this.z=e.getZ(h),this.w=e.getW(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class so extends Tn{constructor(e=1,h=1,p={}){super();this.isRenderTarget=!0,this.width=e,this.height=h,this.depth=1,this.scissor=new xe(0,0,e,h),this.scissorTest=!1,this.viewport=new xe(0,0,e,h);let m={width:e,height:h,depth:1};p=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},p);let g=new Fe(m,p.mapping,p.wrapS,p.wrapT,p.magFilter,p.minFilter,p.format,p.type,p.anisotropy,p.colorSpace);g.flipY=!1,g.generateMipmaps=p.generateMipmaps,g.internalFormat=p.internalFormat,this.textures=[];let _=p.count;for(let x=0;x<_;x++)this.textures[x]=g.clone(),this.textures[x].isRenderTargetTexture=!0;this.depthBuffer=p.depthBuffer,this.stencilBuffer=p.stencilBuffer,this.resolveDepthBuffer=p.resolveDepthBuffer,this.resolveStencilBuffer=p.resolveStencilBuffer,this.depthTexture=p.depthTexture,this.samples=p.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,h,p=1){if(this.width!==e||this.height!==h||this.depth!==p){this.width=e,this.height=h,this.depth=p;for(let m=0,g=this.textures.length;m<g;m++)this.textures[m].image.width=e,this.textures[m].image.height=h,this.textures[m].image.depth=p;this.dispose()}this.viewport.set(0,0,e,h),this.scissor.set(0,0,e,h)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let p=0,m=e.textures.length;p<m;p++)this.textures[p]=e.textures[p].clone(),this.textures[p].isRenderTargetTexture=!0;let h=Object.assign({},e.texture.image);if(this.texture.source=new fr(h),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null)this.depthTexture=e.depthTexture.clone();return this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends so{constructor(e=1,h=1,p={}){super(e,h,p);this.isWebGLRenderTarget=!0}}class pr extends Fe{constructor(e=null,h=1,p=1,m=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ro extends Fe{constructor(e=null,h=1,p=1,m=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,h=0,p=0,m=1){this.isQuaternion=!0,this._x=e,this._y=h,this._z=p,this._w=m}static slerpFlat(e,h,p,m,g,_,x){let v=p[m+0],y=p[m+1],M=p[m+2],b=p[m+3],S=g[_+0],E=g[_+1],A=g[_+2],R=g[_+3];if(x===0){e[h+0]=v,e[h+1]=y,e[h+2]=M,e[h+3]=b;return}if(x===1){e[h+0]=S,e[h+1]=E,e[h+2]=A,e[h+3]=R;return}if(b!==R||v!==S||y!==E||M!==A){let P=1-x,T=v*S+y*E+M*A+b*R,w=T>=0?1:-1,O=1-T*T;if(O>Number.EPSILON){let N=Math.sqrt(O),Q=Math.atan2(N,T*w);P=Math.sin(P*Q)/N,x=Math.sin(x*Q)/N}let D=x*w;if(v=v*P+S*D,y=y*P+E*D,M=M*P+A*D,b=b*P+R*D,P===1-x){let N=1/Math.sqrt(v*v+y*y+M*M+b*b);v*=N,y*=N,M*=N,b*=N}}e[h]=v,e[h+1]=y,e[h+2]=M,e[h+3]=b}static multiplyQuaternionsFlat(e,h,p,m,g,_){let x=p[m],v=p[m+1],y=p[m+2],M=p[m+3],b=g[_],S=g[_+1],E=g[_+2],A=g[_+3];return e[h]=x*A+M*b+v*E-y*S,e[h+1]=v*A+M*S+y*b-x*E,e[h+2]=y*A+M*E+x*S-v*b,e[h+3]=M*A-x*b-v*S-y*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,h,p,m){return this._x=e,this._y=h,this._z=p,this._w=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,h=!0){let{_x:p,_y:m,_z:g,_order:_}=e,{cos:x,sin:v}=Math,y=x(p/2),M=x(m/2),b=x(g/2),S=v(p/2),E=v(m/2),A=v(g/2);switch(_){case"XYZ":this._x=S*M*b+y*E*A,this._y=y*E*b-S*M*A,this._z=y*M*A+S*E*b,this._w=y*M*b-S*E*A;break;case"YXZ":this._x=S*M*b+y*E*A,this._y=y*E*b-S*M*A,this._z=y*M*A-S*E*b,this._w=y*M*b+S*E*A;break;case"ZXY":this._x=S*M*b-y*E*A,this._y=y*E*b+S*M*A,this._z=y*M*A+S*E*b,this._w=y*M*b-S*E*A;break;case"ZYX":this._x=S*M*b-y*E*A,this._y=y*E*b+S*M*A,this._z=y*M*A-S*E*b,this._w=y*M*b+S*E*A;break;case"YZX":this._x=S*M*b+y*E*A,this._y=y*E*b+S*M*A,this._z=y*M*A-S*E*b,this._w=y*M*b-S*E*A;break;case"XZY":this._x=S*M*b-y*E*A,this._y=y*E*b-S*M*A,this._z=y*M*A+S*E*b,this._w=y*M*b+S*E*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+_)}if(h===!0)this._onChangeCallback();return this}setFromAxisAngle(e,h){let p=h/2,m=Math.sin(p);return this._x=e.x*m,this._y=e.y*m,this._z=e.z*m,this._w=Math.cos(p),this._onChangeCallback(),this}setFromRotationMatrix(e){let h=e.elements,p=h[0],m=h[4],g=h[8],_=h[1],x=h[5],v=h[9],y=h[2],M=h[6],b=h[10],S=p+x+b;if(S>0){let E=0.5/Math.sqrt(S+1);this._w=0.25/E,this._x=(M-v)*E,this._y=(g-y)*E,this._z=(_-m)*E}else if(p>x&&p>b){let E=2*Math.sqrt(1+p-x-b);this._w=(M-v)/E,this._x=0.25*E,this._y=(m+_)/E,this._z=(g+y)/E}else if(x>b){let E=2*Math.sqrt(1+x-p-b);this._w=(g-y)/E,this._x=(m+_)/E,this._y=0.25*E,this._z=(v+M)/E}else{let E=2*Math.sqrt(1+b-p-x);this._w=(_-m)/E,this._x=(g+y)/E,this._y=(v+M)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,h){let p=e.dot(h)+1;if(p<Number.EPSILON)if(p=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=p;else this._x=0,this._y=-e.z,this._z=e.y,this._w=p;else this._x=e.y*h.z-e.z*h.y,this._y=e.z*h.x-e.x*h.z,this._z=e.x*h.y-e.y*h.x,this._w=p;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,h){let p=this.angleTo(e);if(p===0)return this;let m=Math.min(1,h/p);return this.slerp(e,m),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,h){let{_x:p,_y:m,_z:g,_w:_}=e,{_x:x,_y:v,_z:y,_w:M}=h;return this._x=p*M+_*x+m*y-g*v,this._y=m*M+_*v+g*x-p*y,this._z=g*M+_*y+p*v-m*x,this._w=_*M-p*x-m*v-g*y,this._onChangeCallback(),this}slerp(e,h){if(h===0)return this;if(h===1)return this.copy(e);let p=this._x,m=this._y,g=this._z,_=this._w,x=_*e._w+p*e._x+m*e._y+g*e._z;if(x<0)this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,x=-x;else this.copy(e);if(x>=1)return this._w=_,this._x=p,this._y=m,this._z=g,this;let v=1-x*x;if(v<=Number.EPSILON){let E=1-h;return this._w=E*_+h*this._w,this._x=E*p+h*this._x,this._y=E*m+h*this._y,this._z=E*g+h*this._z,this.normalize(),this}let y=Math.sqrt(v),M=Math.atan2(y,x),b=Math.sin((1-h)*M)/y,S=Math.sin(h*M)/y;return this._w=_*b+this._w*S,this._x=p*b+this._x*S,this._y=m*b+this._y*S,this._z=g*b+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,h,p){return this.copy(e).slerp(h,p)}random(){let e=2*Math.PI*Math.random(),h=2*Math.PI*Math.random(),p=Math.random(),m=Math.sqrt(1-p),g=Math.sqrt(p);return this.set(m*Math.sin(e),m*Math.cos(e),g*Math.sin(h),g*Math.cos(h))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,h=0){return this._x=e[h],this._y=e[h+1],this._z=e[h+2],this._w=e[h+3],this._onChangeCallback(),this}toArray(e=[],h=0){return e[h]=this._x,e[h+1]=this._y,e[h+2]=this._z,e[h+3]=this._w,e}fromBufferAttribute(e,h){return this._x=e.getX(h),this._y=e.getY(h),this._z=e.getZ(h),this._w=e.getW(h),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,h=0,p=0){H.prototype.isVector3=!0,this.x=e,this.y=h,this.z=p}set(e,h,p){if(p===void 0)p=this.z;return this.x=e,this.y=h,this.z=p,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,h){switch(e){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,h){return this.x=e.x+h.x,this.y=e.y+h.y,this.z=e.z+h.z,this}addScaledVector(e,h){return this.x+=e.x*h,this.y+=e.y*h,this.z+=e.z*h,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,h){return this.x=e.x-h.x,this.y=e.y-h.y,this.z=e.z-h.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,h){return this.x=e.x*h.x,this.y=e.y*h.y,this.z=e.z*h.z,this}applyEuler(e){return this.applyQuaternion(ia.setFromEuler(e))}applyAxisAngle(e,h){return this.applyQuaternion(ia.setFromAxisAngle(e,h))}applyMatrix3(e){let h=this.x,p=this.y,m=this.z,g=e.elements;return this.x=g[0]*h+g[3]*p+g[6]*m,this.y=g[1]*h+g[4]*p+g[7]*m,this.z=g[2]*h+g[5]*p+g[8]*m,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let h=this.x,p=this.y,m=this.z,g=e.elements,_=1/(g[3]*h+g[7]*p+g[11]*m+g[15]);return this.x=(g[0]*h+g[4]*p+g[8]*m+g[12])*_,this.y=(g[1]*h+g[5]*p+g[9]*m+g[13])*_,this.z=(g[2]*h+g[6]*p+g[10]*m+g[14])*_,this}applyQuaternion(e){let h=this.x,p=this.y,m=this.z,{x:g,y:_,z:x,w:v}=e,y=2*(_*m-x*p),M=2*(x*h-g*m),b=2*(g*p-_*h);return this.x=h+v*y+_*b-x*M,this.y=p+v*M+x*y-g*b,this.z=m+v*b+g*M-_*y,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let h=this.x,p=this.y,m=this.z,g=e.elements;return this.x=g[0]*h+g[4]*p+g[8]*m,this.y=g[1]*h+g[5]*p+g[9]*m,this.z=g[2]*h+g[6]*p+g[10]*m,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,h){return this.x=Math.max(e.x,Math.min(h.x,this.x)),this.y=Math.max(e.y,Math.min(h.y,this.y)),this.z=Math.max(e.z,Math.min(h.z,this.z)),this}clampScalar(e,h){return this.x=Math.max(e,Math.min(h,this.x)),this.y=Math.max(e,Math.min(h,this.y)),this.z=Math.max(e,Math.min(h,this.z)),this}clampLength(e,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(e,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,h){return this.x+=(e.x-this.x)*h,this.y+=(e.y-this.y)*h,this.z+=(e.z-this.z)*h,this}lerpVectors(e,h,p){return this.x=e.x+(h.x-e.x)*p,this.y=e.y+(h.y-e.y)*p,this.z=e.z+(h.z-e.z)*p,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,h){let{x:p,y:m,z:g}=e,{x:_,y:x,z:v}=h;return this.x=m*v-g*x,this.y=g*_-p*v,this.z=p*x-m*_,this}projectOnVector(e){let h=e.lengthSq();if(h===0)return this.set(0,0,0);let p=e.dot(this)/h;return this.copy(e).multiplyScalar(p)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let h=Math.sqrt(this.lengthSq()*e.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(e)/h;return Math.acos(Ee(p,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let h=this.x-e.x,p=this.y-e.y,m=this.z-e.z;return h*h+p*p+m*m}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,h,p){let m=Math.sin(h)*e;return this.x=m*Math.sin(p),this.y=Math.cos(h)*e,this.z=m*Math.cos(p),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,h,p){return this.x=e*Math.sin(h),this.y=p,this.z=e*Math.cos(h),this}setFromMatrixPosition(e){let h=e.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this}setFromMatrixScale(e){let h=this.setFromMatrixColumn(e,0).length(),p=this.setFromMatrixColumn(e,1).length(),m=this.setFromMatrixColumn(e,2).length();return this.x=h,this.y=p,this.z=m,this}setFromMatrixColumn(e,h){return this.fromArray(e.elements,h*4)}setFromMatrix3Column(e,h){return this.fromArray(e.elements,h*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,h=0){return this.x=e[h],this.y=e[h+1],this.z=e[h+2],this}toArray(e=[],h=0){return e[h]=this.x,e[h+1]=this.y,e[h+2]=this.z,e}fromBufferAttribute(e,h){return this.x=e.getX(h),this.y=e.getY(h),this.z=e.getZ(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,h=Math.random()*2-1,p=Math.sqrt(1-h*h);return this.x=p*Math.cos(e),this.y=h,this.z=p*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Is=new H,ia=new nn;class ai{constructor(e=new H(1/0,1/0,1/0),h=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=h}set(e,h){return this.min.copy(e),this.max.copy(h),this}setFromArray(e){this.makeEmpty();for(let h=0,p=e.length;h<p;h+=3)this.expandByPoint(qe.fromArray(e,h));return this}setFromBufferAttribute(e){this.makeEmpty();for(let h=0,p=e.count;h<p;h++)this.expandByPoint(qe.fromBufferAttribute(e,h));return this}setFromPoints(e){this.makeEmpty();for(let h=0,p=e.length;h<p;h++)this.expandByPoint(e[h]);return this}setFromCenterAndSize(e,h){let p=qe.copy(h).multiplyScalar(0.5);return this.min.copy(e).sub(p),this.max.copy(e).add(p),this}setFromObject(e,h=!1){return this.makeEmpty(),this.expandByObject(e,h)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,h=!1){e.updateWorldMatrix(!1,!1);let p=e.geometry;if(p!==void 0){let g=p.getAttribute("position");if(h===!0&&g!==void 0&&e.isInstancedMesh!==!0)for(let _=0,x=g.count;_<x;_++){if(e.isMesh===!0)e.getVertexPosition(_,qe);else qe.fromBufferAttribute(g,_);qe.applyMatrix4(e.matrixWorld),this.expandByPoint(qe)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Oi.copy(e.boundingBox)}else{if(p.boundingBox===null)p.computeBoundingBox();Oi.copy(p.boundingBox)}Oi.applyMatrix4(e.matrixWorld),this.union(Oi)}}let m=e.children;for(let g=0,_=m.length;g<_;g++)this.expandByObject(m[g],h);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,h){return h.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qe),qe.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let h,p;if(e.normal.x>0)h=e.normal.x*this.min.x,p=e.normal.x*this.max.x;else h=e.normal.x*this.max.x,p=e.normal.x*this.min.x;if(e.normal.y>0)h+=e.normal.y*this.min.y,p+=e.normal.y*this.max.y;else h+=e.normal.y*this.max.y,p+=e.normal.y*this.min.y;if(e.normal.z>0)h+=e.normal.z*this.min.z,p+=e.normal.z*this.max.z;else h+=e.normal.z*this.max.z,p+=e.normal.z*this.min.z;return h<=-e.constant&&p>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pi),Bi.subVectors(this.max,pi),Gn.subVectors(e.a,pi),Wn.subVectors(e.b,pi),Vn.subVectors(e.c,pi),xn.subVectors(Wn,Gn),vn.subVectors(Vn,Wn),An.subVectors(Gn,Vn);let h=[0,-xn.z,xn.y,0,-vn.z,vn.y,0,-An.z,An.y,xn.z,0,-xn.x,vn.z,0,-vn.x,An.z,0,-An.x,-xn.y,xn.x,0,-vn.y,vn.x,0,-An.y,An.x,0];if(!Ds(h,Gn,Wn,Vn,Bi))return!1;if(h=[1,0,0,0,1,0,0,0,1],!Ds(h,Gn,Wn,Vn,Bi))return!1;return zi.crossVectors(xn,vn),h=[zi.x,zi.y,zi.z],Ds(h,Gn,Wn,Vn,Bi)}clampPoint(e,h){return h.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qe).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(qe).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}var on=[new H,new H,new H,new H,new H,new H,new H,new H],qe=new H,Oi=new ai,Gn=new H,Wn=new H,Vn=new H,xn=new H,vn=new H,An=new H,pi=new H,Bi=new H,zi=new H,Rn=new H;function Ds(e,h,p,m,g){for(let _=0,x=e.length-3;_<=x;_+=3){Rn.fromArray(e,_);let v=g.x*Math.abs(Rn.x)+g.y*Math.abs(Rn.y)+g.z*Math.abs(Rn.z),y=h.dot(Rn),M=p.dot(Rn),b=m.dot(Rn);if(Math.max(-Math.max(y,M,b),Math.min(y,M,b))>v)return!1}return!0}var bl=new ai,mi=new H,Ls=new H;class Pi{constructor(e=new H,h=-1){this.isSphere=!0,this.center=e,this.radius=h}set(e,h){return this.center.copy(e),this.radius=h,this}setFromPoints(e,h){let p=this.center;if(h!==void 0)p.copy(h);else bl.setFromPoints(e).getCenter(p);let m=0;for(let g=0,_=e.length;g<_;g++)m=Math.max(m,p.distanceToSquared(e[g]));return this.radius=Math.sqrt(m),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let h=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=h*h}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,h){let p=this.center.distanceToSquared(e);if(h.copy(e),p>this.radius*this.radius)h.sub(this.center).normalize(),h.multiplyScalar(this.radius).add(this.center);return h}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mi.subVectors(e,this.center);let h=mi.lengthSq();if(h>this.radius*this.radius){let p=Math.sqrt(h),m=(p-this.radius)*0.5;this.center.addScaledVector(mi,m/p),this.radius+=m}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mi.copy(e.center).add(Ls)),this.expandByPoint(mi.copy(e.center).sub(Ls));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}var ln=new H,Us=new H,ki=new H,yn=new H,Ns=new H,Hi=new H,Fs=new H;class Ii{constructor(e=new H,h=new H(0,0,-1)){this.origin=e,this.direction=h}set(e,h){return this.origin.copy(e),this.direction.copy(h),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,h){return h.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,h){h.subVectors(e,this.origin);let p=h.dot(this.direction);if(p<0)return h.copy(this.origin);return h.copy(this.origin).addScaledVector(this.direction,p)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let h=ln.subVectors(e,this.origin).dot(this.direction);if(h<0)return this.origin.distanceToSquared(e);return ln.copy(this.origin).addScaledVector(this.direction,h),ln.distanceToSquared(e)}distanceSqToSegment(e,h,p,m){Us.copy(e).add(h).multiplyScalar(0.5),ki.copy(h).sub(e).normalize(),yn.copy(this.origin).sub(Us);let g=e.distanceTo(h)*0.5,_=-this.direction.dot(ki),x=yn.dot(this.direction),v=-yn.dot(ki),y=yn.lengthSq(),M=Math.abs(1-_*_),b,S,E,A;if(M>0)if(b=_*v-x,S=_*x-v,A=g*M,b>=0)if(S>=-A)if(S<=A){let R=1/M;b*=R,S*=R,E=b*(b+_*S+2*x)+S*(_*b+S+2*v)+y}else S=g,b=Math.max(0,-(_*S+x)),E=-b*b+S*(S+2*v)+y;else S=-g,b=Math.max(0,-(_*S+x)),E=-b*b+S*(S+2*v)+y;else if(S<=-A)b=Math.max(0,-(-_*g+x)),S=b>0?-g:Math.min(Math.max(-g,-v),g),E=-b*b+S*(S+2*v)+y;else if(S<=A)b=0,S=Math.min(Math.max(-g,-v),g),E=S*(S+2*v)+y;else b=Math.max(0,-(_*g+x)),S=b>0?g:Math.min(Math.max(-g,-v),g),E=-b*b+S*(S+2*v)+y;else S=_>0?-g:g,b=Math.max(0,-(_*S+x)),E=-b*b+S*(S+2*v)+y;if(p)p.copy(this.origin).addScaledVector(this.direction,b);if(m)m.copy(Us).addScaledVector(ki,S);return E}intersectSphere(e,h){ln.subVectors(e.center,this.origin);let p=ln.dot(this.direction),m=ln.dot(ln)-p*p,g=e.radius*e.radius;if(m>g)return null;let _=Math.sqrt(g-m),x=p-_,v=p+_;if(v<0)return null;if(x<0)return this.at(v,h);return this.at(x,h)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let h=e.normal.dot(this.direction);if(h===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let p=-(this.origin.dot(e.normal)+e.constant)/h;return p>=0?p:null}intersectPlane(e,h){let p=this.distanceToPlane(e);if(p===null)return null;return this.at(p,h)}intersectsPlane(e){let h=e.distanceToPoint(this.origin);if(h===0)return!0;if(e.normal.dot(this.direction)*h<0)return!0;return!1}intersectBox(e,h){let p,m,g,_,x,v,y=1/this.direction.x,M=1/this.direction.y,b=1/this.direction.z,S=this.origin;if(y>=0)p=(e.min.x-S.x)*y,m=(e.max.x-S.x)*y;else p=(e.max.x-S.x)*y,m=(e.min.x-S.x)*y;if(M>=0)g=(e.min.y-S.y)*M,_=(e.max.y-S.y)*M;else g=(e.max.y-S.y)*M,_=(e.min.y-S.y)*M;if(p>_||g>m)return null;if(g>p||isNaN(p))p=g;if(_<m||isNaN(m))m=_;if(b>=0)x=(e.min.z-S.z)*b,v=(e.max.z-S.z)*b;else x=(e.max.z-S.z)*b,v=(e.min.z-S.z)*b;if(p>v||x>m)return null;if(x>p||p!==p)p=x;if(v<m||m!==m)m=v;if(m<0)return null;return this.at(p>=0?p:m,h)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,h,p,m,g){Ns.subVectors(h,e),Hi.subVectors(p,e),Fs.crossVectors(Ns,Hi);let _=this.direction.dot(Fs),x;if(_>0){if(m)return null;x=1}else if(_<0)x=-1,_=-_;else return null;yn.subVectors(this.origin,e);let v=x*this.direction.dot(Hi.crossVectors(yn,Hi));if(v<0)return null;let y=x*this.direction.dot(Ns.cross(yn));if(y<0)return null;if(v+y>_)return null;let M=-x*yn.dot(Fs);if(M<0)return null;return this.at(M/_,g)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(e,h,p,m,g,_,x,v,y,M,b,S,E,A,R,P){if(fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,h,p,m,g,_,x,v,y,M,b,S,E,A,R,P)}set(e,h,p,m,g,_,x,v,y,M,b,S,E,A,R,P){let T=this.elements;return T[0]=e,T[4]=h,T[8]=p,T[12]=m,T[1]=g,T[5]=_,T[9]=x,T[13]=v,T[2]=y,T[6]=M,T[10]=b,T[14]=S,T[3]=E,T[7]=A,T[11]=R,T[15]=P,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(e){let h=this.elements,p=e.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],h[9]=p[9],h[10]=p[10],h[11]=p[11],h[12]=p[12],h[13]=p[13],h[14]=p[14],h[15]=p[15],this}copyPosition(e){let h=this.elements,p=e.elements;return h[12]=p[12],h[13]=p[13],h[14]=p[14],this}setFromMatrix3(e){let h=e.elements;return this.set(h[0],h[3],h[6],0,h[1],h[4],h[7],0,h[2],h[5],h[8],0,0,0,0,1),this}extractBasis(e,h,p){return e.setFromMatrixColumn(this,0),h.setFromMatrixColumn(this,1),p.setFromMatrixColumn(this,2),this}makeBasis(e,h,p){return this.set(e.x,h.x,p.x,0,e.y,h.y,p.y,0,e.z,h.z,p.z,0,0,0,0,1),this}extractRotation(e){let h=this.elements,p=e.elements,m=1/Xn.setFromMatrixColumn(e,0).length(),g=1/Xn.setFromMatrixColumn(e,1).length(),_=1/Xn.setFromMatrixColumn(e,2).length();return h[0]=p[0]*m,h[1]=p[1]*m,h[2]=p[2]*m,h[3]=0,h[4]=p[4]*g,h[5]=p[5]*g,h[6]=p[6]*g,h[7]=0,h[8]=p[8]*_,h[9]=p[9]*_,h[10]=p[10]*_,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromEuler(e){let h=this.elements,{x:p,y:m,z:g}=e,_=Math.cos(p),x=Math.sin(p),v=Math.cos(m),y=Math.sin(m),M=Math.cos(g),b=Math.sin(g);if(e.order==="XYZ"){let S=_*M,E=_*b,A=x*M,R=x*b;h[0]=v*M,h[4]=-v*b,h[8]=y,h[1]=E+A*y,h[5]=S-R*y,h[9]=-x*v,h[2]=R-S*y,h[6]=A+E*y,h[10]=_*v}else if(e.order==="YXZ"){let S=v*M,E=v*b,A=y*M,R=y*b;h[0]=S+R*x,h[4]=A*x-E,h[8]=_*y,h[1]=_*b,h[5]=_*M,h[9]=-x,h[2]=E*x-A,h[6]=R+S*x,h[10]=_*v}else if(e.order==="ZXY"){let S=v*M,E=v*b,A=y*M,R=y*b;h[0]=S-R*x,h[4]=-_*b,h[8]=A+E*x,h[1]=E+A*x,h[5]=_*M,h[9]=R-S*x,h[2]=-_*y,h[6]=x,h[10]=_*v}else if(e.order==="ZYX"){let S=_*M,E=_*b,A=x*M,R=x*b;h[0]=v*M,h[4]=A*y-E,h[8]=S*y+R,h[1]=v*b,h[5]=R*y+S,h[9]=E*y-A,h[2]=-y,h[6]=x*v,h[10]=_*v}else if(e.order==="YZX"){let S=_*v,E=_*y,A=x*v,R=x*y;h[0]=v*M,h[4]=R-S*b,h[8]=A*b+E,h[1]=b,h[5]=_*M,h[9]=-x*M,h[2]=-y*M,h[6]=E*b+A,h[10]=S-R*b}else if(e.order==="XZY"){let S=_*v,E=_*y,A=x*v,R=x*y;h[0]=v*M,h[4]=-b,h[8]=y*M,h[1]=S*b+R,h[5]=_*M,h[9]=E*b-A,h[2]=A*b-E,h[6]=x*M,h[10]=R*b+S}return h[3]=0,h[7]=0,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromQuaternion(e){return this.compose(El,e,Tl)}lookAt(e,h,p){let m=this.elements;if(ke.subVectors(e,h),ke.lengthSq()===0)ke.z=1;if(ke.normalize(),Mn.crossVectors(p,ke),Mn.lengthSq()===0){if(Math.abs(p.z)===1)ke.x+=0.0001;else ke.z+=0.0001;ke.normalize(),Mn.crossVectors(p,ke)}return Mn.normalize(),Gi.crossVectors(ke,Mn),m[0]=Mn.x,m[4]=Gi.x,m[8]=ke.x,m[1]=Mn.y,m[5]=Gi.y,m[9]=ke.y,m[2]=Mn.z,m[6]=Gi.z,m[10]=ke.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,h){let p=e.elements,m=h.elements,g=this.elements,_=p[0],x=p[4],v=p[8],y=p[12],M=p[1],b=p[5],S=p[9],E=p[13],A=p[2],R=p[6],P=p[10],T=p[14],w=p[3],O=p[7],D=p[11],N=p[15],Q=m[0],B=m[4],z=m[8],j=m[12],L=m[1],U=m[5],k=m[9],K=m[13],nt=m[2],tt=m[6],ht=m[10],st=m[14],dt=m[3],et=m[7],vt=m[11],Et=m[15];return g[0]=_*Q+x*L+v*nt+y*dt,g[4]=_*B+x*U+v*tt+y*et,g[8]=_*z+x*k+v*ht+y*vt,g[12]=_*j+x*K+v*st+y*Et,g[1]=M*Q+b*L+S*nt+E*dt,g[5]=M*B+b*U+S*tt+E*et,g[9]=M*z+b*k+S*ht+E*vt,g[13]=M*j+b*K+S*st+E*Et,g[2]=A*Q+R*L+P*nt+T*dt,g[6]=A*B+R*U+P*tt+T*et,g[10]=A*z+R*k+P*ht+T*vt,g[14]=A*j+R*K+P*st+T*Et,g[3]=w*Q+O*L+D*nt+N*dt,g[7]=w*B+O*U+D*tt+N*et,g[11]=w*z+O*k+D*ht+N*vt,g[15]=w*j+O*K+D*st+N*Et,this}multiplyScalar(e){let h=this.elements;return h[0]*=e,h[4]*=e,h[8]*=e,h[12]*=e,h[1]*=e,h[5]*=e,h[9]*=e,h[13]*=e,h[2]*=e,h[6]*=e,h[10]*=e,h[14]*=e,h[3]*=e,h[7]*=e,h[11]*=e,h[15]*=e,this}determinant(){let e=this.elements,h=e[0],p=e[4],m=e[8],g=e[12],_=e[1],x=e[5],v=e[9],y=e[13],M=e[2],b=e[6],S=e[10],E=e[14],A=e[3],R=e[7],P=e[11],T=e[15];return A*(+g*v*b-m*y*b-g*x*S+p*y*S+m*x*E-p*v*E)+R*(+h*v*E-h*y*S+g*_*S-m*_*E+m*y*M-g*v*M)+P*(+h*y*b-h*x*E-g*_*b+p*_*E+g*x*M-p*y*M)+T*(-m*x*M-h*v*b+h*x*S+m*_*b-p*_*S+p*v*M)}transpose(){let e=this.elements,h;return h=e[1],e[1]=e[4],e[4]=h,h=e[2],e[2]=e[8],e[8]=h,h=e[6],e[6]=e[9],e[9]=h,h=e[3],e[3]=e[12],e[12]=h,h=e[7],e[7]=e[13],e[13]=h,h=e[11],e[11]=e[14],e[14]=h,this}setPosition(e,h,p){let m=this.elements;if(e.isVector3)m[12]=e.x,m[13]=e.y,m[14]=e.z;else m[12]=e,m[13]=h,m[14]=p;return this}invert(){let e=this.elements,h=e[0],p=e[1],m=e[2],g=e[3],_=e[4],x=e[5],v=e[6],y=e[7],M=e[8],b=e[9],S=e[10],E=e[11],A=e[12],R=e[13],P=e[14],T=e[15],w=b*P*y-R*S*y+R*v*E-x*P*E-b*v*T+x*S*T,O=A*S*y-M*P*y-A*v*E+_*P*E+M*v*T-_*S*T,D=M*R*y-A*b*y+A*x*E-_*R*E-M*x*T+_*b*T,N=A*b*v-M*R*v-A*x*S+_*R*S+M*x*P-_*b*P,Q=h*w+p*O+m*D+g*N;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/Q;return e[0]=w*B,e[1]=(R*S*g-b*P*g-R*m*E+p*P*E+b*m*T-p*S*T)*B,e[2]=(x*P*g-R*v*g+R*m*y-p*P*y-x*m*T+p*v*T)*B,e[3]=(b*v*g-x*S*g-b*m*y+p*S*y+x*m*E-p*v*E)*B,e[4]=O*B,e[5]=(M*P*g-A*S*g+A*m*E-h*P*E-M*m*T+h*S*T)*B,e[6]=(A*v*g-_*P*g-A*m*y+h*P*y+_*m*T-h*v*T)*B,e[7]=(_*S*g-M*v*g+M*m*y-h*S*y-_*m*E+h*v*E)*B,e[8]=D*B,e[9]=(A*b*g-M*R*g-A*p*E+h*R*E+M*p*T-h*b*T)*B,e[10]=(_*R*g-A*x*g+A*p*y-h*R*y-_*p*T+h*x*T)*B,e[11]=(M*x*g-_*b*g-M*p*y+h*b*y+_*p*E-h*x*E)*B,e[12]=N*B,e[13]=(M*R*m-A*b*m+A*p*S-h*R*S-M*p*P+h*b*P)*B,e[14]=(A*x*m-_*R*m-A*p*v+h*R*v+_*p*P-h*x*P)*B,e[15]=(_*b*m-M*x*m+M*p*v-h*b*v-_*p*S+h*x*S)*B,this}scale(e){let h=this.elements,{x:p,y:m,z:g}=e;return h[0]*=p,h[4]*=m,h[8]*=g,h[1]*=p,h[5]*=m,h[9]*=g,h[2]*=p,h[6]*=m,h[10]*=g,h[3]*=p,h[7]*=m,h[11]*=g,this}getMaxScaleOnAxis(){let e=this.elements,h=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],p=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],m=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(h,p,m))}makeTranslation(e,h,p){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,h,0,0,1,p,0,0,0,1);return this}makeRotationX(e){let h=Math.cos(e),p=Math.sin(e);return this.set(1,0,0,0,0,h,-p,0,0,p,h,0,0,0,0,1),this}makeRotationY(e){let h=Math.cos(e),p=Math.sin(e);return this.set(h,0,p,0,0,1,0,0,-p,0,h,0,0,0,0,1),this}makeRotationZ(e){let h=Math.cos(e),p=Math.sin(e);return this.set(h,-p,0,0,p,h,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,h){let p=Math.cos(h),m=Math.sin(h),g=1-p,{x:_,y:x,z:v}=e,y=g*_,M=g*x;return this.set(y*_+p,y*x-m*v,y*v+m*x,0,y*x+m*v,M*x+p,M*v-m*_,0,y*v-m*x,M*v+m*_,g*v*v+p,0,0,0,0,1),this}makeScale(e,h,p){return this.set(e,0,0,0,0,h,0,0,0,0,p,0,0,0,0,1),this}makeShear(e,h,p,m,g,_){return this.set(1,p,g,0,e,1,_,0,h,m,1,0,0,0,0,1),this}compose(e,h,p){let m=this.elements,{_x:g,_y:_,_z:x,_w:v}=h,y=g+g,M=_+_,b=x+x,S=g*y,E=g*M,A=g*b,R=_*M,P=_*b,T=x*b,w=v*y,O=v*M,D=v*b,{x:N,y:Q,z:B}=p;return m[0]=(1-(R+T))*N,m[1]=(E+D)*N,m[2]=(A-O)*N,m[3]=0,m[4]=(E-D)*Q,m[5]=(1-(S+T))*Q,m[6]=(P+w)*Q,m[7]=0,m[8]=(A+O)*B,m[9]=(P-w)*B,m[10]=(1-(S+R))*B,m[11]=0,m[12]=e.x,m[13]=e.y,m[14]=e.z,m[15]=1,this}decompose(e,h,p){let m=this.elements,g=Xn.set(m[0],m[1],m[2]).length(),_=Xn.set(m[4],m[5],m[6]).length(),x=Xn.set(m[8],m[9],m[10]).length();if(this.determinant()<0)g=-g;e.x=m[12],e.y=m[13],e.z=m[14],Ye.copy(this);let y=1/g,M=1/_,b=1/x;return Ye.elements[0]*=y,Ye.elements[1]*=y,Ye.elements[2]*=y,Ye.elements[4]*=M,Ye.elements[5]*=M,Ye.elements[6]*=M,Ye.elements[8]*=b,Ye.elements[9]*=b,Ye.elements[10]*=b,h.setFromRotationMatrix(Ye),p.x=g,p.y=_,p.z=x,this}makePerspective(e,h,p,m,g,_,x=2000){let v=this.elements,y=2*g/(h-e),M=2*g/(p-m),b=(h+e)/(h-e),S=(p+m)/(p-m),E,A;if(x===2000)E=-(_+g)/(_-g),A=-2*_*g/(_-g);else if(x===2001)E=-_/(_-g),A=-_*g/(_-g);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+x);return v[0]=y,v[4]=0,v[8]=b,v[12]=0,v[1]=0,v[5]=M,v[9]=S,v[13]=0,v[2]=0,v[6]=0,v[10]=E,v[14]=A,v[3]=0,v[7]=0,v[11]=-1,v[15]=0,this}makeOrthographic(e,h,p,m,g,_,x=2000){let v=this.elements,y=1/(h-e),M=1/(p-m),b=1/(_-g),S=(h+e)*y,E=(p+m)*M,A,R;if(x===2000)A=(_+g)*b,R=-2*b;else if(x===2001)A=g*b,R=-1*b;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+x);return v[0]=2*y,v[4]=0,v[8]=0,v[12]=-S,v[1]=0,v[5]=2*M,v[9]=0,v[13]=-E,v[2]=0,v[6]=0,v[10]=R,v[14]=-A,v[3]=0,v[7]=0,v[11]=0,v[15]=1,this}equals(e){let h=this.elements,p=e.elements;for(let m=0;m<16;m++)if(h[m]!==p[m])return!1;return!0}fromArray(e,h=0){for(let p=0;p<16;p++)this.elements[p]=e[p+h];return this}toArray(e=[],h=0){let p=this.elements;return e[h]=p[0],e[h+1]=p[1],e[h+2]=p[2],e[h+3]=p[3],e[h+4]=p[4],e[h+5]=p[5],e[h+6]=p[6],e[h+7]=p[7],e[h+8]=p[8],e[h+9]=p[9],e[h+10]=p[10],e[h+11]=p[11],e[h+12]=p[12],e[h+13]=p[13],e[h+14]=p[14],e[h+15]=p[15],e}}var Xn=new H,Ye=new fe,El=new H(0,0,0),Tl=new H(1,1,1),Mn=new H,Gi=new H,ke=new H,sa=new fe,ra=new nn;class en{constructor(e=0,h=0,p=0,m=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=h,this._z=p,this._order=m}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,h,p,m=this._order){return this._x=e,this._y=h,this._z=p,this._order=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,h=this._order,p=!0){let m=e.elements,g=m[0],_=m[4],x=m[8],v=m[1],y=m[5],M=m[9],b=m[2],S=m[6],E=m[10];switch(h){case"XYZ":if(this._y=Math.asin(Ee(x,-1,1)),Math.abs(x)<0.9999999)this._x=Math.atan2(-M,E),this._z=Math.atan2(-_,g);else this._x=Math.atan2(S,y),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Ee(M,-1,1)),Math.abs(M)<0.9999999)this._y=Math.atan2(x,E),this._z=Math.atan2(v,y);else this._y=Math.atan2(-b,g),this._z=0;break;case"ZXY":if(this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<0.9999999)this._y=Math.atan2(-b,E),this._z=Math.atan2(-_,y);else this._y=0,this._z=Math.atan2(v,g);break;case"ZYX":if(this._y=Math.asin(-Ee(b,-1,1)),Math.abs(b)<0.9999999)this._x=Math.atan2(S,E),this._z=Math.atan2(v,g);else this._x=0,this._z=Math.atan2(-_,y);break;case"YZX":if(this._z=Math.asin(Ee(v,-1,1)),Math.abs(v)<0.9999999)this._x=Math.atan2(-M,y),this._y=Math.atan2(-b,g);else this._x=0,this._y=Math.atan2(x,E);break;case"XZY":if(this._z=Math.asin(-Ee(_,-1,1)),Math.abs(_)<0.9999999)this._x=Math.atan2(S,y),this._y=Math.atan2(x,g);else this._x=Math.atan2(-M,E),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+h)}if(this._order=h,p===!0)this._onChangeCallback();return this}setFromQuaternion(e,h,p){return sa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sa,h,p)}setFromVector3(e,h=this._order){return this.set(e.x,e.y,e.z,h)}reorder(e){return ra.setFromEuler(this),this.setFromQuaternion(ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],h=0){return e[h]=this._x,e[h+1]=this._y,e[h+2]=this._z,e[h+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class mr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var wl=0,aa=new H,qn=new nn,cn=new fe,Wi=new H,gi=new H,Al=new H,Rl=new nn,oa=new H(1,0,0),la=new H(0,1,0),ca=new H(0,0,1),ha={type:"added"},Cl={type:"removed"},Yn={type:"childadded",child:null},Os={type:"childremoved",child:null};class we extends Tn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();let e=new H,h=new en,p=new nn,m=new H(1,1,1);function g(){p.setFromEuler(h,!1)}function _(){h.setFromQuaternion(p,void 0,!1)}h._onChange(g),p._onChange(_),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:h},quaternion:{configurable:!0,enumerable:!0,value:p},scale:{configurable:!0,enumerable:!0,value:m},modelViewMatrix:{value:new fe},normalMatrix:{value:new Yt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,h){this.quaternion.setFromAxisAngle(e,h)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,h){return qn.setFromAxisAngle(e,h),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,h){return qn.setFromAxisAngle(e,h),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(oa,e)}rotateY(e){return this.rotateOnAxis(la,e)}rotateZ(e){return this.rotateOnAxis(ca,e)}translateOnAxis(e,h){return aa.copy(e).applyQuaternion(this.quaternion),this.position.add(aa.multiplyScalar(h)),this}translateX(e){return this.translateOnAxis(oa,e)}translateY(e){return this.translateOnAxis(la,e)}translateZ(e){return this.translateOnAxis(ca,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,h,p){if(e.isVector3)Wi.copy(e);else Wi.set(e,h,p);let m=this.parent;if(this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)cn.lookAt(gi,Wi,this.up);else cn.lookAt(Wi,gi,this.up);if(this.quaternion.setFromRotationMatrix(cn),m)cn.extractRotation(m.matrixWorld),qn.setFromRotationMatrix(cn),this.quaternion.premultiply(qn.invert())}add(e){if(arguments.length>1){for(let h=0;h<arguments.length;h++)this.add(arguments[h]);return this}if(e===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ha),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let p=0;p<arguments.length;p++)this.remove(arguments[p]);return this}let h=this.children.indexOf(e);if(h!==-1)e.parent=null,this.children.splice(h,1),e.dispatchEvent(Cl),Os.child=e,this.dispatchEvent(Os),Os.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld);return e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ha),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,h){if(this[e]===h)return this;for(let p=0,m=this.children.length;p<m;p++){let _=this.children[p].getObjectByProperty(e,h);if(_!==void 0)return _}return}getObjectsByProperty(e,h,p=[]){if(this[e]===h)p.push(this);let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].getObjectsByProperty(e,h,p);return p}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,Al),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,Rl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let h=this.matrixWorld.elements;return e.set(h[8],h[9],h[10]).normalize()}raycast(){}traverse(e){e(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverseVisible(e)}traverseAncestors(e){let h=this.parent;if(h!==null)e(h),h.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].updateMatrixWorld(e)}updateWorldMatrix(e,h){let p=this.parent;if(e===!0&&p!==null)p.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(h===!0){let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].updateWorldMatrix(!1,!0)}}toJSON(e){let h=e===void 0||typeof e==="string",p={};if(h)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},p.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let m={};if(m.uuid=this.uuid,m.type=this.type,this.name!=="")m.name=this.name;if(this.castShadow===!0)m.castShadow=!0;if(this.receiveShadow===!0)m.receiveShadow=!0;if(this.visible===!1)m.visible=!1;if(this.frustumCulled===!1)m.frustumCulled=!1;if(this.renderOrder!==0)m.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)m.userData=this.userData;if(m.layers=this.layers.mask,m.matrix=this.matrix.toArray(),m.up=this.up.toArray(),this.matrixAutoUpdate===!1)m.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(m.type="InstancedMesh",m.count=this.count,m.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)m.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(m.type="BatchedMesh",m.perObjectFrustumCulled=this.perObjectFrustumCulled,m.sortObjects=this.sortObjects,m.drawRanges=this._drawRanges,m.reservedRanges=this._reservedRanges,m.visibility=this._visibility,m.active=this._active,m.bounds=this._bounds.map((x)=>({boxInitialized:x.boxInitialized,boxMin:x.box.min.toArray(),boxMax:x.box.max.toArray(),sphereInitialized:x.sphereInitialized,sphereRadius:x.sphere.radius,sphereCenter:x.sphere.center.toArray()})),m.maxInstanceCount=this._maxInstanceCount,m.maxVertexCount=this._maxVertexCount,m.maxIndexCount=this._maxIndexCount,m.geometryInitialized=this._geometryInitialized,m.geometryCount=this._geometryCount,m.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null)m.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)m.boundingSphere={center:m.boundingSphere.center.toArray(),radius:m.boundingSphere.radius};if(this.boundingBox!==null)m.boundingBox={min:m.boundingBox.min.toArray(),max:m.boundingBox.max.toArray()}}function g(x,v){if(x[v.uuid]===void 0)x[v.uuid]=v.toJSON(e);return v.uuid}if(this.isScene){if(this.background){if(this.background.isColor)m.background=this.background.toJSON();else if(this.background.isTexture)m.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)m.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){m.geometry=g(e.geometries,this.geometry);let x=this.geometry.parameters;if(x!==void 0&&x.shapes!==void 0){let v=x.shapes;if(Array.isArray(v))for(let y=0,M=v.length;y<M;y++){let b=v[y];g(e.shapes,b)}else g(e.shapes,v)}}if(this.isSkinnedMesh){if(m.bindMode=this.bindMode,m.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)g(e.skeletons,this.skeleton),m.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let x=[];for(let v=0,y=this.material.length;v<y;v++)x.push(g(e.materials,this.material[v]));m.material=x}else m.material=g(e.materials,this.material);if(this.children.length>0){m.children=[];for(let x=0;x<this.children.length;x++)m.children.push(this.children[x].toJSON(e).object)}if(this.animations.length>0){m.animations=[];for(let x=0;x<this.animations.length;x++){let v=this.animations[x];m.animations.push(g(e.animations,v))}}if(h){let x=_(e.geometries),v=_(e.materials),y=_(e.textures),M=_(e.images),b=_(e.shapes),S=_(e.skeletons),E=_(e.animations),A=_(e.nodes);if(x.length>0)p.geometries=x;if(v.length>0)p.materials=v;if(y.length>0)p.textures=y;if(M.length>0)p.images=M;if(b.length>0)p.shapes=b;if(S.length>0)p.skeletons=S;if(E.length>0)p.animations=E;if(A.length>0)p.nodes=A}return p.object=m,p;function _(x){let v=[];for(let y in x){let M=x[y];delete M.metadata,v.push(M)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,h=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),h===!0)for(let p=0;p<e.children.length;p++){let m=e.children[p];this.add(m.clone())}return this}}we.DEFAULT_UP=new H(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=new H,hn=new H,Bs=new H,un=new H,Zn=new H,Jn=new H,ua=new H,zs=new H,ks=new H,Hs=new H,Gs=new xe,Ws=new xe,Vs=new xe;class Ve{constructor(e=new H,h=new H,p=new H){this.a=e,this.b=h,this.c=p}static getNormal(e,h,p,m){m.subVectors(p,h),Ze.subVectors(e,h),m.cross(Ze);let g=m.lengthSq();if(g>0)return m.multiplyScalar(1/Math.sqrt(g));return m.set(0,0,0)}static getBarycoord(e,h,p,m,g){Ze.subVectors(m,h),hn.subVectors(p,h),Bs.subVectors(e,h);let _=Ze.dot(Ze),x=Ze.dot(hn),v=Ze.dot(Bs),y=hn.dot(hn),M=hn.dot(Bs),b=_*y-x*x;if(b===0)return g.set(0,0,0),null;let S=1/b,E=(y*v-x*M)*S,A=(_*M-x*v)*S;return g.set(1-E-A,A,E)}static containsPoint(e,h,p,m){if(this.getBarycoord(e,h,p,m,un)===null)return!1;return un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,h,p,m,g,_,x,v){if(this.getBarycoord(e,h,p,m,un)===null){if(v.x=0,v.y=0,"z"in v)v.z=0;if("w"in v)v.w=0;return null}return v.setScalar(0),v.addScaledVector(g,un.x),v.addScaledVector(_,un.y),v.addScaledVector(x,un.z),v}static getInterpolatedAttribute(e,h,p,m,g,_){return Gs.setScalar(0),Ws.setScalar(0),Vs.setScalar(0),Gs.fromBufferAttribute(e,h),Ws.fromBufferAttribute(e,p),Vs.fromBufferAttribute(e,m),_.setScalar(0),_.addScaledVector(Gs,g.x),_.addScaledVector(Ws,g.y),_.addScaledVector(Vs,g.z),_}static isFrontFacing(e,h,p,m){return Ze.subVectors(p,h),hn.subVectors(e,h),Ze.cross(hn).dot(m)<0?!0:!1}set(e,h,p){return this.a.copy(e),this.b.copy(h),this.c.copy(p),this}setFromPointsAndIndices(e,h,p,m){return this.a.copy(e[h]),this.b.copy(e[p]),this.c.copy(e[m]),this}setFromAttributeAndIndices(e,h,p,m){return this.a.fromBufferAttribute(e,h),this.b.fromBufferAttribute(e,p),this.c.fromBufferAttribute(e,m),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ze.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ze.cross(hn).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Ve.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,h){return Ve.getBarycoord(e,this.a,this.b,this.c,h)}getInterpolation(e,h,p,m,g){return Ve.getInterpolation(e,this.a,this.b,this.c,h,p,m,g)}containsPoint(e){return Ve.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ve.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,h){let p=this.a,m=this.b,g=this.c,_,x;Zn.subVectors(m,p),Jn.subVectors(g,p),zs.subVectors(e,p);let v=Zn.dot(zs),y=Jn.dot(zs);if(v<=0&&y<=0)return h.copy(p);ks.subVectors(e,m);let M=Zn.dot(ks),b=Jn.dot(ks);if(M>=0&&b<=M)return h.copy(m);let S=v*b-M*y;if(S<=0&&v>=0&&M<=0)return _=v/(v-M),h.copy(p).addScaledVector(Zn,_);Hs.subVectors(e,g);let E=Zn.dot(Hs),A=Jn.dot(Hs);if(A>=0&&E<=A)return h.copy(g);let R=E*y-v*A;if(R<=0&&y>=0&&A<=0)return x=y/(y-A),h.copy(p).addScaledVector(Jn,x);let P=M*A-E*b;if(P<=0&&b-M>=0&&E-A>=0)return ua.subVectors(g,m),x=(b-M)/(b-M+(E-A)),h.copy(m).addScaledVector(ua,x);let T=1/(P+R+S);return _=R*T,x=S*T,h.copy(p).addScaledVector(Zn,_).addScaledVector(Jn,x)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}var ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Vi={h:0,s:0,l:0};function Xs(e,h,p){if(p<0)p+=1;if(p>1)p-=1;if(p<0.16666666666666666)return e+(h-e)*6*p;if(p<0.5)return h;if(p<0.6666666666666666)return e+(h-e)*6*(0.6666666666666666-p);return e}class Qt{constructor(e,h,p){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,h,p)}set(e,h,p){if(h===void 0&&p===void 0){let m=e;if(m&&m.isColor)this.copy(m);else if(typeof m==="number")this.setHex(m);else if(typeof m==="string")this.setStyle(m)}else this.setRGB(e,h,p);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,h="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,te.toWorkingColorSpace(this,h),this}setRGB(e,h,p,m=te.workingColorSpace){return this.r=e,this.g=h,this.b=p,te.toWorkingColorSpace(this,m),this}setHSL(e,h,p,m=te.workingColorSpace){if(e=dr(e,1),h=Ee(h,0,1),p=Ee(p,0,1),h===0)this.r=this.g=this.b=p;else{let g=p<=0.5?p*(1+h):p+h-p*h,_=2*p-g;this.r=Xs(_,g,e+0.3333333333333333),this.g=Xs(_,g,e),this.b=Xs(_,g,e-0.3333333333333333)}return te.toWorkingColorSpace(this,m),this}setStyle(e,h="srgb"){function p(g){if(g===void 0)return;if(parseFloat(g)<1)console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let m;if(m=/^(\w+)\(([^\)]*)\)/.exec(e)){let g,_=m[1],x=m[2];switch(_){case"rgb":case"rgba":if(g=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(x))return p(g[4]),this.setRGB(Math.min(255,parseInt(g[1],10))/255,Math.min(255,parseInt(g[2],10))/255,Math.min(255,parseInt(g[3],10))/255,h);if(g=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(x))return p(g[4]),this.setRGB(Math.min(100,parseInt(g[1],10))/100,Math.min(100,parseInt(g[2],10))/100,Math.min(100,parseInt(g[3],10))/100,h);break;case"hsl":case"hsla":if(g=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(x))return p(g[4]),this.setHSL(parseFloat(g[1])/360,parseFloat(g[2])/100,parseFloat(g[3])/100,h);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(m=/^\#([A-Fa-f\d]+)$/.exec(e)){let g=m[1],_=g.length;if(_===3)return this.setRGB(parseInt(g.charAt(0),16)/15,parseInt(g.charAt(1),16)/15,parseInt(g.charAt(2),16)/15,h);else if(_===6)return this.setHex(parseInt(g,16),h);else console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,h);return this}setColorName(e,h="srgb"){let p=ao[e.toLowerCase()];if(p!==void 0)this.setHex(p,h);else console.warn("THREE.Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return te.fromWorkingColorSpace(Ie.copy(this),e),Math.round(Ee(Ie.r*255,0,255))*65536+Math.round(Ee(Ie.g*255,0,255))*256+Math.round(Ee(Ie.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,h=te.workingColorSpace){te.fromWorkingColorSpace(Ie.copy(this),h);let{r:p,g:m,b:g}=Ie,_=Math.max(p,m,g),x=Math.min(p,m,g),v,y,M=(x+_)/2;if(x===_)v=0,y=0;else{let b=_-x;switch(y=M<=0.5?b/(_+x):b/(2-_-x),_){case p:v=(m-g)/b+(m<g?6:0);break;case m:v=(g-p)/b+2;break;case g:v=(p-m)/b+4;break}v/=6}return e.h=v,e.s=y,e.l=M,e}getRGB(e,h=te.workingColorSpace){return te.fromWorkingColorSpace(Ie.copy(this),h),e.r=Ie.r,e.g=Ie.g,e.b=Ie.b,e}getStyle(e="srgb"){te.fromWorkingColorSpace(Ie.copy(this),e);let{r:h,g:p,b:m}=Ie;if(e!=="srgb")return`color(${e} ${h.toFixed(3)} ${p.toFixed(3)} ${m.toFixed(3)})`;return`rgb(${Math.round(h*255)},${Math.round(p*255)},${Math.round(m*255)})`}offsetHSL(e,h,p){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+h,Sn.l+p)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,h){return this.r=e.r+h.r,this.g=e.g+h.g,this.b=e.b+h.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,h){return this.r+=(e.r-this.r)*h,this.g+=(e.g-this.g)*h,this.b+=(e.b-this.b)*h,this}lerpColors(e,h,p){return this.r=e.r+(h.r-e.r)*p,this.g=e.g+(h.g-e.g)*p,this.b=e.b+(h.b-e.b)*p,this}lerpHSL(e,h){this.getHSL(Sn),e.getHSL(Vi);let p=Mi(Sn.h,Vi.h,h),m=Mi(Sn.s,Vi.s,h),g=Mi(Sn.l,Vi.l,h);return this.setHSL(p,m,g),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let h=this.r,p=this.g,m=this.b,g=e.elements;return this.r=g[0]*h+g[3]*p+g[6]*m,this.g=g[1]*h+g[4]*p+g[7]*m,this.b=g[2]*h+g[5]*p+g[8]*m,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,h=0){return this.r=e[h],this.g=e[h+1],this.b=e[h+2],this}toArray(e=[],h=0){return e[h]=this.r,e[h+1]=this.g,e[h+2]=this.b,e}fromBufferAttribute(e,h){return this.r=e.getX(h),this.g=e.getY(h),this.b=e.getZ(h),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ie=new Qt;Qt.NAMES=ao;var Pl=0;class zn extends Tn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=Bn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let h in e){let p=e[h];if(p===void 0){console.warn(`THREE.Material: parameter '${h}' has value of undefined.`);continue}let m=this[h];if(m===void 0){console.warn(`THREE.Material: '${h}' is not a property of THREE.${this.type}.`);continue}if(m&&m.isColor)m.set(p);else if(m&&m.isVector3&&(p&&p.isVector3))m.copy(p);else this[h]=p}}toJSON(e){let h=e===void 0||typeof e==="string";if(h)e={textures:{},images:{}};let p={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(p.uuid=this.uuid,p.type=this.type,this.name!=="")p.name=this.name;if(this.color&&this.color.isColor)p.color=this.color.getHex();if(this.roughness!==void 0)p.roughness=this.roughness;if(this.metalness!==void 0)p.metalness=this.metalness;if(this.sheen!==void 0)p.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)p.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)p.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)p.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)p.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)p.specular=this.specular.getHex();if(this.specularIntensity!==void 0)p.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)p.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)p.shininess=this.shininess;if(this.clearcoat!==void 0)p.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)p.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)p.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)p.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)p.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,p.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)p.dispersion=this.dispersion;if(this.iridescence!==void 0)p.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)p.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)p.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)p.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)p.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)p.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)p.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)p.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)p.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)p.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)p.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)p.lightMap=this.lightMap.toJSON(e).uuid,p.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)p.aoMap=this.aoMap.toJSON(e).uuid,p.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)p.bumpMap=this.bumpMap.toJSON(e).uuid,p.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)p.normalMap=this.normalMap.toJSON(e).uuid,p.normalMapType=this.normalMapType,p.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)p.displacementMap=this.displacementMap.toJSON(e).uuid,p.displacementScale=this.displacementScale,p.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)p.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)p.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)p.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)p.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)p.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)p.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(p.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)p.combine=this.combine}if(this.envMapRotation!==void 0)p.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)p.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)p.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)p.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)p.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)p.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)p.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)p.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)p.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)p.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)p.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)p.size=this.size;if(this.shadowSide!==null)p.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)p.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)p.blending=this.blending;if(this.side!==0)p.side=this.side;if(this.vertexColors===!0)p.vertexColors=!0;if(this.opacity<1)p.opacity=this.opacity;if(this.transparent===!0)p.transparent=!0;if(this.blendSrc!==204)p.blendSrc=this.blendSrc;if(this.blendDst!==205)p.blendDst=this.blendDst;if(this.blendEquation!==100)p.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)p.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)p.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)p.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)p.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)p.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)p.depthFunc=this.depthFunc;if(this.depthTest===!1)p.depthTest=this.depthTest;if(this.depthWrite===!1)p.depthWrite=this.depthWrite;if(this.colorWrite===!1)p.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)p.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)p.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)p.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)p.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)p.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)p.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)p.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)p.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)p.rotation=this.rotation;if(this.polygonOffset===!0)p.polygonOffset=!0;if(this.polygonOffsetFactor!==0)p.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)p.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)p.linewidth=this.linewidth;if(this.dashSize!==void 0)p.dashSize=this.dashSize;if(this.gapSize!==void 0)p.gapSize=this.gapSize;if(this.scale!==void 0)p.scale=this.scale;if(this.dithering===!0)p.dithering=!0;if(this.alphaTest>0)p.alphaTest=this.alphaTest;if(this.alphaHash===!0)p.alphaHash=!0;if(this.alphaToCoverage===!0)p.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)p.premultipliedAlpha=!0;if(this.forceSinglePass===!0)p.forceSinglePass=!0;if(this.wireframe===!0)p.wireframe=!0;if(this.wireframeLinewidth>1)p.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")p.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")p.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)p.flatShading=!0;if(this.visible===!1)p.visible=!1;if(this.toneMapped===!1)p.toneMapped=!1;if(this.fog===!1)p.fog=!1;if(Object.keys(this.userData).length>0)p.userData=this.userData;function m(g){let _=[];for(let x in g){let v=g[x];delete v.metadata,_.push(v)}return _}if(h){let g=m(e.textures),_=m(e.images);if(g.length>0)p.textures=g;if(_.length>0)p.images=_}return p}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let h=e.clippingPlanes,p=null;if(h!==null){let m=h.length;p=Array(m);for(let g=0;g!==m;++g)p[g]=h[g].clone()}return this.clippingPlanes=p,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gr extends zn{static get type(){return"MeshBasicMaterial"}constructor(e){super();this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var ve=new H,Xi=new bt;class Je{constructor(e,h,p=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=h,this.count=e!==void 0?e.length/h:0,this.normalized=p,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,h){this.updateRanges.push({start:e,count:h})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,h,p){e*=this.itemSize,p*=h.itemSize;for(let m=0,g=this.itemSize;m<g;m++)this.array[e+m]=h.array[p+m];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let h=0,p=this.count;h<p;h++)Xi.fromBufferAttribute(this,h),Xi.applyMatrix3(e),this.setXY(h,Xi.x,Xi.y);else if(this.itemSize===3)for(let h=0,p=this.count;h<p;h++)ve.fromBufferAttribute(this,h),ve.applyMatrix3(e),this.setXYZ(h,ve.x,ve.y,ve.z);return this}applyMatrix4(e){for(let h=0,p=this.count;h<p;h++)ve.fromBufferAttribute(this,h),ve.applyMatrix4(e),this.setXYZ(h,ve.x,ve.y,ve.z);return this}applyNormalMatrix(e){for(let h=0,p=this.count;h<p;h++)ve.fromBufferAttribute(this,h),ve.applyNormalMatrix(e),this.setXYZ(h,ve.x,ve.y,ve.z);return this}transformDirection(e){for(let h=0,p=this.count;h<p;h++)ve.fromBufferAttribute(this,h),ve.transformDirection(e),this.setXYZ(h,ve.x,ve.y,ve.z);return this}set(e,h=0){return this.array.set(e,h),this}getComponent(e,h){let p=this.array[e*this.itemSize+h];if(this.normalized)p=ti(p,this.array);return p}setComponent(e,h,p){if(this.normalized)p=De(p,this.array);return this.array[e*this.itemSize+h]=p,this}getX(e){let h=this.array[e*this.itemSize];if(this.normalized)h=ti(h,this.array);return h}setX(e,h){if(this.normalized)h=De(h,this.array);return this.array[e*this.itemSize]=h,this}getY(e){let h=this.array[e*this.itemSize+1];if(this.normalized)h=ti(h,this.array);return h}setY(e,h){if(this.normalized)h=De(h,this.array);return this.array[e*this.itemSize+1]=h,this}getZ(e){let h=this.array[e*this.itemSize+2];if(this.normalized)h=ti(h,this.array);return h}setZ(e,h){if(this.normalized)h=De(h,this.array);return this.array[e*this.itemSize+2]=h,this}getW(e){let h=this.array[e*this.itemSize+3];if(this.normalized)h=ti(h,this.array);return h}setW(e,h){if(this.normalized)h=De(h,this.array);return this.array[e*this.itemSize+3]=h,this}setXY(e,h,p){if(e*=this.itemSize,this.normalized)h=De(h,this.array),p=De(p,this.array);return this.array[e+0]=h,this.array[e+1]=p,this}setXYZ(e,h,p,m){if(e*=this.itemSize,this.normalized)h=De(h,this.array),p=De(p,this.array),m=De(m,this.array);return this.array[e+0]=h,this.array[e+1]=p,this.array[e+2]=m,this}setXYZW(e,h,p,m,g){if(e*=this.itemSize,this.normalized)h=De(h,this.array),p=De(p,this.array),m=De(m,this.array),g=De(g,this.array);return this.array[e+0]=h,this.array[e+1]=p,this.array[e+2]=m,this.array[e+3]=g,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")e.name=this.name;if(this.usage!==35044)e.usage=this.usage;return e}}class _r extends Je{constructor(e,h,p){super(new Uint16Array(e),h,p)}}class xr extends Je{constructor(e,h,p){super(new Uint32Array(e),h,p)}}class Ce extends Je{constructor(e,h,p){super(new Float32Array(e),h,p)}}var Il=0,We=new fe,qs=new we,$n=new H,He=new ai,_i=new ai,be=new H;class Oe extends Tn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((no(e))?xr:_r)(e,1);else this.index=e;return this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,h){return this.attributes[e]=h,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,h,p=0){this.groups.push({start:e,count:h,materialIndex:p})}clearGroups(){this.groups=[]}setDrawRange(e,h){this.drawRange.start=e,this.drawRange.count=h}applyMatrix4(e){let h=this.attributes.position;if(h!==void 0)h.applyMatrix4(e),h.needsUpdate=!0;let p=this.attributes.normal;if(p!==void 0){let g=new Yt().getNormalMatrix(e);p.applyNormalMatrix(g),p.needsUpdate=!0}let m=this.attributes.tangent;if(m!==void 0)m.transformDirection(e),m.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(e){return We.makeRotationFromQuaternion(e),this.applyMatrix4(We),this}rotateX(e){return We.makeRotationX(e),this.applyMatrix4(We),this}rotateY(e){return We.makeRotationY(e),this.applyMatrix4(We),this}rotateZ(e){return We.makeRotationZ(e),this.applyMatrix4(We),this}translate(e,h,p){return We.makeTranslation(e,h,p),this.applyMatrix4(We),this}scale(e,h,p){return We.makeScale(e,h,p),this.applyMatrix4(We),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){let h=this.getAttribute("position");if(h===void 0){let p=[];for(let m=0,g=e.length;m<g;m++){let _=e[m];p.push(_.x,_.y,_.z||0)}this.setAttribute("position",new Ce(p,3))}else{for(let p=0,m=h.count;p<m;p++){let g=e[p];h.setXYZ(p,g.x,g.y,g.z||0)}if(e.length>h.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");h.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new ai;let e=this.attributes.position,h=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),h)for(let p=0,m=h.length;p<m;p++){let g=h[p];if(He.setFromBufferAttribute(g),this.morphTargetsRelative)be.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(be);else this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Pi;let e=this.attributes.position,h=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let p=this.boundingSphere.center;if(He.setFromBufferAttribute(e),h)for(let g=0,_=h.length;g<_;g++){let x=h[g];if(_i.setFromBufferAttribute(x),this.morphTargetsRelative)be.addVectors(He.min,_i.min),He.expandByPoint(be),be.addVectors(He.max,_i.max),He.expandByPoint(be);else He.expandByPoint(_i.min),He.expandByPoint(_i.max)}He.getCenter(p);let m=0;for(let g=0,_=e.count;g<_;g++)be.fromBufferAttribute(e,g),m=Math.max(m,p.distanceToSquared(be));if(h)for(let g=0,_=h.length;g<_;g++){let x=h[g],v=this.morphTargetsRelative;for(let y=0,M=x.count;y<M;y++){if(be.fromBufferAttribute(x,y),v)$n.fromBufferAttribute(e,y),be.add($n);m=Math.max(m,p.distanceToSquared(be))}}if(this.boundingSphere.radius=Math.sqrt(m),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,h=this.attributes;if(e===null||h.position===void 0||h.normal===void 0||h.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:p,normal:m,uv:g}=h;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Je(new Float32Array(4*p.count),4));let _=this.getAttribute("tangent"),x=[],v=[];for(let z=0;z<p.count;z++)x[z]=new H,v[z]=new H;let y=new H,M=new H,b=new H,S=new bt,E=new bt,A=new bt,R=new H,P=new H;function T(z,j,L){y.fromBufferAttribute(p,z),M.fromBufferAttribute(p,j),b.fromBufferAttribute(p,L),S.fromBufferAttribute(g,z),E.fromBufferAttribute(g,j),A.fromBufferAttribute(g,L),M.sub(y),b.sub(y),E.sub(S),A.sub(S);let U=1/(E.x*A.y-A.x*E.y);if(!isFinite(U))return;R.copy(M).multiplyScalar(A.y).addScaledVector(b,-E.y).multiplyScalar(U),P.copy(b).multiplyScalar(E.x).addScaledVector(M,-A.x).multiplyScalar(U),x[z].add(R),x[j].add(R),x[L].add(R),v[z].add(P),v[j].add(P),v[L].add(P)}let w=this.groups;if(w.length===0)w=[{start:0,count:e.count}];for(let z=0,j=w.length;z<j;++z){let L=w[z],{start:U,count:k}=L;for(let K=U,nt=U+k;K<nt;K+=3)T(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let O=new H,D=new H,N=new H,Q=new H;function B(z){N.fromBufferAttribute(m,z),Q.copy(N);let j=x[z];O.copy(j),O.sub(N.multiplyScalar(N.dot(j))).normalize(),D.crossVectors(Q,j);let U=D.dot(v[z])<0?-1:1;_.setXYZW(z,O.x,O.y,O.z,U)}for(let z=0,j=w.length;z<j;++z){let L=w[z],{start:U,count:k}=L;for(let K=U,nt=U+k;K<nt;K+=3)B(e.getX(K+0)),B(e.getX(K+1)),B(e.getX(K+2))}}computeVertexNormals(){let e=this.index,h=this.getAttribute("position");if(h!==void 0){let p=this.getAttribute("normal");if(p===void 0)p=new Je(new Float32Array(h.count*3),3),this.setAttribute("normal",p);else for(let S=0,E=p.count;S<E;S++)p.setXYZ(S,0,0,0);let m=new H,g=new H,_=new H,x=new H,v=new H,y=new H,M=new H,b=new H;if(e)for(let S=0,E=e.count;S<E;S+=3){let A=e.getX(S+0),R=e.getX(S+1),P=e.getX(S+2);m.fromBufferAttribute(h,A),g.fromBufferAttribute(h,R),_.fromBufferAttribute(h,P),M.subVectors(_,g),b.subVectors(m,g),M.cross(b),x.fromBufferAttribute(p,A),v.fromBufferAttribute(p,R),y.fromBufferAttribute(p,P),x.add(M),v.add(M),y.add(M),p.setXYZ(A,x.x,x.y,x.z),p.setXYZ(R,v.x,v.y,v.z),p.setXYZ(P,y.x,y.y,y.z)}else for(let S=0,E=h.count;S<E;S+=3)m.fromBufferAttribute(h,S+0),g.fromBufferAttribute(h,S+1),_.fromBufferAttribute(h,S+2),M.subVectors(_,g),b.subVectors(m,g),M.cross(b),p.setXYZ(S+0,M.x,M.y,M.z),p.setXYZ(S+1,M.x,M.y,M.z),p.setXYZ(S+2,M.x,M.y,M.z);this.normalizeNormals(),p.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let h=0,p=e.count;h<p;h++)be.fromBufferAttribute(e,h),be.normalize(),e.setXYZ(h,be.x,be.y,be.z)}toNonIndexed(){function e(x,v){let{array:y,itemSize:M,normalized:b}=x,S=new y.constructor(v.length*M),E=0,A=0;for(let R=0,P=v.length;R<P;R++){if(x.isInterleavedBufferAttribute)E=v[R]*x.data.stride+x.offset;else E=v[R]*M;for(let T=0;T<M;T++)S[A++]=y[E++]}return new Je(S,M,b)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let h=new Oe,p=this.index.array,m=this.attributes;for(let x in m){let v=m[x],y=e(v,p);h.setAttribute(x,y)}let g=this.morphAttributes;for(let x in g){let v=[],y=g[x];for(let M=0,b=y.length;M<b;M++){let S=y[M],E=e(S,p);v.push(E)}h.morphAttributes[x]=v}h.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;for(let x=0,v=_.length;x<v;x++){let y=_[x];h.addGroup(y.start,y.count,y.materialIndex)}return h}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!=="")e.name=this.name;if(Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0){let v=this.parameters;for(let y in v)if(v[y]!==void 0)e[y]=v[y];return e}e.data={attributes:{}};let h=this.index;if(h!==null)e.data.index={type:h.array.constructor.name,array:Array.prototype.slice.call(h.array)};let p=this.attributes;for(let v in p){let y=p[v];e.data.attributes[v]=y.toJSON(e.data)}let m={},g=!1;for(let v in this.morphAttributes){let y=this.morphAttributes[v],M=[];for(let b=0,S=y.length;b<S;b++){let E=y[b];M.push(E.toJSON(e.data))}if(M.length>0)m[v]=M,g=!0}if(g)e.data.morphAttributes=m,e.data.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;if(_.length>0)e.data.groups=JSON.parse(JSON.stringify(_));let x=this.boundingSphere;if(x!==null)e.data.boundingSphere={center:x.center.toArray(),radius:x.radius};return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let h={};this.name=e.name;let p=e.index;if(p!==null)this.setIndex(p.clone(h));let m=e.attributes;for(let y in m){let M=m[y];this.setAttribute(y,M.clone(h))}let g=e.morphAttributes;for(let y in g){let M=[],b=g[y];for(let S=0,E=b.length;S<E;S++)M.push(b[S].clone(h));this.morphAttributes[y]=M}this.morphTargetsRelative=e.morphTargetsRelative;let _=e.groups;for(let y=0,M=_.length;y<M;y++){let b=_[y];this.addGroup(b.start,b.count,b.materialIndex)}let x=e.boundingBox;if(x!==null)this.boundingBox=x.clone();let v=e.boundingSphere;if(v!==null)this.boundingSphere=v.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var da=new fe,Cn=new Ii,qi=new Pi,fa=new H,Yi=new H,Zi=new H,Ji=new H,Ys=new H,$i=new H,pa=new H,Ki=new H;class Te extends we{constructor(e=new Oe,h=new gr){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=h,this.updateMorphTargets()}copy(e,h){if(super.copy(e,h),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let x=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[x]=g}}}}getVertexPosition(e,h){let p=this.geometry,m=p.attributes.position,g=p.morphAttributes.position,_=p.morphTargetsRelative;h.fromBufferAttribute(m,e);let x=this.morphTargetInfluences;if(g&&x){$i.set(0,0,0);for(let v=0,y=g.length;v<y;v++){let M=x[v],b=g[v];if(M===0)continue;if(Ys.fromBufferAttribute(b,e),_)$i.addScaledVector(Ys,M);else $i.addScaledVector(Ys.sub(h),M)}h.add($i)}return h}raycast(e,h){let p=this.geometry,m=this.material,g=this.matrixWorld;if(m===void 0)return;if(p.boundingSphere===null)p.computeBoundingSphere();if(qi.copy(p.boundingSphere),qi.applyMatrix4(g),Cn.copy(e.ray).recast(e.near),qi.containsPoint(Cn.origin)===!1){if(Cn.intersectSphere(qi,fa)===null)return;if(Cn.origin.distanceToSquared(fa)>(e.far-e.near)**2)return}if(da.copy(g).invert(),Cn.copy(e.ray).applyMatrix4(da),p.boundingBox!==null){if(Cn.intersectsBox(p.boundingBox)===!1)return}this._computeIntersections(e,h,Cn)}_computeIntersections(e,h,p){let m,g=this.geometry,_=this.material,x=g.index,v=g.attributes.position,y=g.attributes.uv,M=g.attributes.uv1,b=g.attributes.normal,{groups:S,drawRange:E}=g;if(x!==null)if(Array.isArray(_))for(let A=0,R=S.length;A<R;A++){let P=S[A],T=_[P.materialIndex],w=Math.max(P.start,E.start),O=Math.min(x.count,Math.min(P.start+P.count,E.start+E.count));for(let D=w,N=O;D<N;D+=3){let Q=x.getX(D),B=x.getX(D+1),z=x.getX(D+2);if(m=ji(this,T,e,p,y,M,b,Q,B,z),m)m.faceIndex=Math.floor(D/3),m.face.materialIndex=P.materialIndex,h.push(m)}}else{let A=Math.max(0,E.start),R=Math.min(x.count,E.start+E.count);for(let P=A,T=R;P<T;P+=3){let w=x.getX(P),O=x.getX(P+1),D=x.getX(P+2);if(m=ji(this,_,e,p,y,M,b,w,O,D),m)m.faceIndex=Math.floor(P/3),h.push(m)}}else if(v!==void 0)if(Array.isArray(_))for(let A=0,R=S.length;A<R;A++){let P=S[A],T=_[P.materialIndex],w=Math.max(P.start,E.start),O=Math.min(v.count,Math.min(P.start+P.count,E.start+E.count));for(let D=w,N=O;D<N;D+=3){let Q=D,B=D+1,z=D+2;if(m=ji(this,T,e,p,y,M,b,Q,B,z),m)m.faceIndex=Math.floor(D/3),m.face.materialIndex=P.materialIndex,h.push(m)}}else{let A=Math.max(0,E.start),R=Math.min(v.count,E.start+E.count);for(let P=A,T=R;P<T;P+=3){let w=P,O=P+1,D=P+2;if(m=ji(this,_,e,p,y,M,b,w,O,D),m)m.faceIndex=Math.floor(P/3),h.push(m)}}}}function Dl(e,h,p,m,g,_,x,v){let y;if(h.side===1)y=m.intersectTriangle(x,_,g,!0,v);else y=m.intersectTriangle(g,_,x,h.side===0,v);if(y===null)return null;Ki.copy(v),Ki.applyMatrix4(e.matrixWorld);let M=p.ray.origin.distanceTo(Ki);if(M<p.near||M>p.far)return null;return{distance:M,point:Ki.clone(),object:e}}function ji(e,h,p,m,g,_,x,v,y,M){e.getVertexPosition(v,Yi),e.getVertexPosition(y,Zi),e.getVertexPosition(M,Ji);let b=Dl(e,h,p,m,Yi,Zi,Ji,pa);if(b){let S=new H;if(Ve.getBarycoord(pa,Yi,Zi,Ji,S),g)b.uv=Ve.getInterpolatedAttribute(g,v,y,M,S,new bt);if(_)b.uv1=Ve.getInterpolatedAttribute(_,v,y,M,S,new bt);if(x){if(b.normal=Ve.getInterpolatedAttribute(x,v,y,M,S,new H),b.normal.dot(m.direction)>0)b.normal.multiplyScalar(-1)}let E={a:v,b:y,c:M,normal:new H,materialIndex:0};Ve.getNormal(Yi,Zi,Ji,E.normal),b.face=E,b.barycoord=S}return b}class mn extends Oe{constructor(e=1,h=1,p=1,m=1,g=1,_=1){super();this.type="BoxGeometry",this.parameters={width:e,height:h,depth:p,widthSegments:m,heightSegments:g,depthSegments:_};let x=this;m=Math.floor(m),g=Math.floor(g),_=Math.floor(_);let v=[],y=[],M=[],b=[],S=0,E=0;A("z","y","x",-1,-1,p,h,e,_,g,0),A("z","y","x",1,-1,p,h,-e,_,g,1),A("x","z","y",1,1,e,p,h,m,_,2),A("x","z","y",1,-1,e,p,-h,m,_,3),A("x","y","z",1,-1,e,h,p,m,g,4),A("x","y","z",-1,-1,e,h,-p,m,g,5),this.setIndex(v),this.setAttribute("position",new Ce(y,3)),this.setAttribute("normal",new Ce(M,3)),this.setAttribute("uv",new Ce(b,2));function A(R,P,T,w,O,D,N,Q,B,z,j){let L=D/B,U=N/z,k=D/2,K=N/2,nt=Q/2,tt=B+1,ht=z+1,st=0,dt=0,et=new H;for(let vt=0;vt<ht;vt++){let Et=vt*U-K;for(let zt=0;zt<tt;zt++){let it=zt*L-k;et[R]=it*w,et[P]=Et*O,et[T]=nt,y.push(et.x,et.y,et.z),et[R]=0,et[P]=0,et[T]=Q>0?1:-1,M.push(et.x,et.y,et.z),b.push(zt/B),b.push(1-vt/z),st+=1}}for(let vt=0;vt<z;vt++)for(let Et=0;Et<B;Et++){let zt=S+Et+tt*vt,it=S+Et+tt*(vt+1),q=S+(Et+1)+tt*(vt+1),at=S+(Et+1)+tt*vt;v.push(zt,it,at),v.push(it,q,at),dt+=6}x.addGroup(E,dt,j),E+=dt,S+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ri(e){let h={};for(let p in e){h[p]={};for(let m in e[p]){let g=e[p][m];if(g&&(g.isColor||g.isMatrix3||g.isMatrix4||g.isVector2||g.isVector3||g.isVector4||g.isTexture||g.isQuaternion))if(g.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),h[p][m]=null;else h[p][m]=g.clone();else if(Array.isArray(g))h[p][m]=g.slice();else h[p][m]=g}}return h}function Le(e){let h={};for(let p=0;p<e.length;p++){let m=ri(e[p]);for(let g in m)h[g]=m[g]}return h}function Ll(e){let h=[];for(let p=0;p<e.length;p++)h.push(e[p].clone());return h}function oo(e){let h=e.getRenderTarget();if(h===null)return e.outputColorSpace;if(h.isXRRenderTarget===!0)return h.texture.colorSpace;return te.workingColorSpace}var Ul={clone:ri,merge:Le},Nl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends zn{static get type(){return"ShaderMaterial"}constructor(e){super();if(this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nl,this.fragmentShader=Fl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ri(e.uniforms),this.uniformsGroups=Ll(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let h=super.toJSON(e);h.glslVersion=this.glslVersion,h.uniforms={};for(let m in this.uniforms){let _=this.uniforms[m].value;if(_&&_.isTexture)h.uniforms[m]={type:"t",value:_.toJSON(e).uuid};else if(_&&_.isColor)h.uniforms[m]={type:"c",value:_.getHex()};else if(_&&_.isVector2)h.uniforms[m]={type:"v2",value:_.toArray()};else if(_&&_.isVector3)h.uniforms[m]={type:"v3",value:_.toArray()};else if(_&&_.isVector4)h.uniforms[m]={type:"v4",value:_.toArray()};else if(_&&_.isMatrix3)h.uniforms[m]={type:"m3",value:_.toArray()};else if(_&&_.isMatrix4)h.uniforms[m]={type:"m4",value:_.toArray()};else h.uniforms[m]={value:_}}if(Object.keys(this.defines).length>0)h.defines=this.defines;h.vertexShader=this.vertexShader,h.fragmentShader=this.fragmentShader,h.lights=this.lights,h.clipping=this.clipping;let p={};for(let m in this.extensions)if(this.extensions[m]===!0)p[m]=!0;if(Object.keys(p).length>0)h.extensions=p;return h}}class vr extends we{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=2000}copy(e,h){return super.copy(e,h),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,h){super.updateWorldMatrix(e,h),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var bn=new H,ma=new bt,ga=new bt;class Ne extends vr{constructor(e=50,h=1,p=0.1,m=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=p,this.far=m,this.focus=10,this.aspect=h,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,h){return super.copy(e,h),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let h=0.5*this.getFilmHeight()/e;this.fov=wi*2*Math.atan(h),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ii*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return wi*2*Math.atan(Math.tan(ii*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,h,p){bn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),h.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),p.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,h){return this.getViewBounds(e,ma,ga),h.subVectors(ga,ma)}setViewOffset(e,h,p,m,g,_){if(this.aspect=e/h,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,h=e*Math.tan(ii*0.5*this.fov)/this.zoom,p=2*h,m=this.aspect*p,g=-0.5*m,_=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:v,fullHeight:y}=_;g+=_.offsetX*m/v,h-=_.offsetY*p/y,m*=_.width/v,p*=_.height/y}let x=this.filmOffset;if(x!==0)g+=e*x/this.getFilmWidth();this.projectionMatrix.makePerspective(g,g+m,h,h-p,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let h=super.toJSON(e);if(h.object.fov=this.fov,h.object.zoom=this.zoom,h.object.near=this.near,h.object.far=this.far,h.object.focus=this.focus,h.object.aspect=this.aspect,this.view!==null)h.object.view=Object.assign({},this.view);return h.object.filmGauge=this.filmGauge,h.object.filmOffset=this.filmOffset,h}}var Kn=-90,jn=1;class lo extends we{constructor(e,h,p){super();this.type="CubeCamera",this.renderTarget=p,this.coordinateSystem=null,this.activeMipmapLevel=0;let m=new Ne(Kn,jn,e,h);m.layers=this.layers,this.add(m);let g=new Ne(Kn,jn,e,h);g.layers=this.layers,this.add(g);let _=new Ne(Kn,jn,e,h);_.layers=this.layers,this.add(_);let x=new Ne(Kn,jn,e,h);x.layers=this.layers,this.add(x);let v=new Ne(Kn,jn,e,h);v.layers=this.layers,this.add(v);let y=new Ne(Kn,jn,e,h);y.layers=this.layers,this.add(y)}updateCoordinateSystem(){let e=this.coordinateSystem,h=this.children.concat(),[p,m,g,_,x,v]=h;for(let y of h)this.remove(y);if(e===2000)p.up.set(0,1,0),p.lookAt(1,0,0),m.up.set(0,1,0),m.lookAt(-1,0,0),g.up.set(0,0,-1),g.lookAt(0,1,0),_.up.set(0,0,1),_.lookAt(0,-1,0),x.up.set(0,1,0),x.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===2001)p.up.set(0,-1,0),p.lookAt(-1,0,0),m.up.set(0,-1,0),m.lookAt(1,0,0),g.up.set(0,0,1),g.lookAt(0,1,0),_.up.set(0,0,-1),_.lookAt(0,-1,0),x.up.set(0,-1,0),x.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let y of h)this.add(y),y.updateMatrixWorld()}update(e,h){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:p,activeMipmapLevel:m}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[g,_,x,v,y,M]=this.children,b=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;let R=p.texture.generateMipmaps;p.texture.generateMipmaps=!1,e.setRenderTarget(p,0,m),e.render(h,g),e.setRenderTarget(p,1,m),e.render(h,_),e.setRenderTarget(p,2,m),e.render(h,x),e.setRenderTarget(p,3,m),e.render(h,v),e.setRenderTarget(p,4,m),e.render(h,y),p.texture.generateMipmaps=R,e.setRenderTarget(p,5,m),e.render(h,M),e.setRenderTarget(b,S,E),e.xr.enabled=A,p.texture.needsPMREMUpdate=!0}}class yr extends Fe{constructor(e,h,p,m,g,_,x,v,y,M){e=e!==void 0?e:[],h=h!==void 0?h:301;super(e,h,p,m,g,_,x,v,y,M);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class co extends En{constructor(e=1,h={}){super(e,e,h);this.isWebGLCubeRenderTarget=!0;let p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];this.texture=new yr(m,h.mapping,h.wrapS,h.wrapT,h.magFilter,h.minFilter,h.format,h.type,h.anisotropy,h.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=h.generateMipmaps!==void 0?h.generateMipmaps:!1,this.texture.minFilter=h.minFilter!==void 0?h.minFilter:1006}fromEquirectangularTexture(e,h){this.texture.type=h.type,this.texture.colorSpace=h.colorSpace,this.texture.generateMipmaps=h.generateMipmaps,this.texture.minFilter=h.minFilter,this.texture.magFilter=h.magFilter;let p={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},m=new mn(5,5,5),g=new pn({name:"CubemapFromEquirect",uniforms:ri(p.uniforms),vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,side:1,blending:0});g.uniforms.tEquirect.value=h;let _=new Te(m,g),x=h.minFilter;if(h.minFilter===1008)h.minFilter=1006;return new lo(1,10,this).update(e,_),h.minFilter=x,_.geometry.dispose(),_.material.dispose(),this}clear(e,h,p,m){let g=e.getRenderTarget();for(let _=0;_<6;_++)e.setRenderTarget(this,_),e.clear(h,p,m);e.setRenderTarget(g)}}var Zs=new H,Ol=new H,Bl=new Yt;class Qe{constructor(e=new H(1,0,0),h=0){this.isPlane=!0,this.normal=e,this.constant=h}set(e,h){return this.normal.copy(e),this.constant=h,this}setComponents(e,h,p,m){return this.normal.set(e,h,p),this.constant=m,this}setFromNormalAndCoplanarPoint(e,h){return this.normal.copy(e),this.constant=-h.dot(this.normal),this}setFromCoplanarPoints(e,h,p){let m=Zs.subVectors(p,h).cross(Ol.subVectors(e,h)).normalize();return this.setFromNormalAndCoplanarPoint(m,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,h){return h.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,h){let p=e.delta(Zs),m=this.normal.dot(p);if(m===0){if(this.distanceToPoint(e.start)===0)return h.copy(e.start);return null}let g=-(e.start.dot(this.normal)+this.constant)/m;if(g<0||g>1)return null;return h.copy(e.start).addScaledVector(p,g)}intersectsLine(e){let h=this.distanceToPoint(e.start),p=this.distanceToPoint(e.end);return h<0&&p>0||p<0&&h>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,h){let p=h||Bl.getNormalMatrix(e),m=this.coplanarPoint(Zs).applyMatrix4(e),g=this.normal.applyMatrix3(p).normalize();return this.constant=-m.dot(g),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Pn=new Pi,Qi=new H;class gs{constructor(e=new Qe,h=new Qe,p=new Qe,m=new Qe,g=new Qe,_=new Qe){this.planes=[e,h,p,m,g,_]}set(e,h,p,m,g,_){let x=this.planes;return x[0].copy(e),x[1].copy(h),x[2].copy(p),x[3].copy(m),x[4].copy(g),x[5].copy(_),this}copy(e){let h=this.planes;for(let p=0;p<6;p++)h[p].copy(e.planes[p]);return this}setFromProjectionMatrix(e,h=2000){let p=this.planes,m=e.elements,g=m[0],_=m[1],x=m[2],v=m[3],y=m[4],M=m[5],b=m[6],S=m[7],E=m[8],A=m[9],R=m[10],P=m[11],T=m[12],w=m[13],O=m[14],D=m[15];if(p[0].setComponents(v-g,S-y,P-E,D-T).normalize(),p[1].setComponents(v+g,S+y,P+E,D+T).normalize(),p[2].setComponents(v+_,S+M,P+A,D+w).normalize(),p[3].setComponents(v-_,S-M,P-A,D-w).normalize(),p[4].setComponents(v-x,S-b,P-R,D-O).normalize(),h===2000)p[5].setComponents(v+x,S+b,P+R,D+O).normalize();else if(h===2001)p[5].setComponents(x,b,R,O).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+h);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let h=e.geometry;if(h.boundingSphere===null)h.computeBoundingSphere();Pn.copy(h.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=0.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){let h=this.planes,p=e.center,m=-e.radius;for(let g=0;g<6;g++)if(h[g].distanceToPoint(p)<m)return!1;return!0}intersectsBox(e){let h=this.planes;for(let p=0;p<6;p++){let m=h[p];if(Qi.x=m.normal.x>0?e.max.x:e.min.x,Qi.y=m.normal.y>0?e.max.y:e.min.y,Qi.z=m.normal.z>0?e.max.z:e.min.z,m.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(e){let h=this.planes;for(let p=0;p<6;p++)if(h[p].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ho(){let e=null,h=!1,p=null,m=null;function g(_,x){p(_,x),m=e.requestAnimationFrame(g)}return{start:function(){if(h===!0)return;if(p===null)return;m=e.requestAnimationFrame(g),h=!0},stop:function(){e.cancelAnimationFrame(m),h=!1},setAnimationLoop:function(_){p=_},setContext:function(_){e=_}}}function zl(e){let h=new WeakMap;function p(v,y){let{array:M,usage:b}=v,S=M.byteLength,E=e.createBuffer();e.bindBuffer(y,E),e.bufferData(y,M,b),v.onUploadCallback();let A;if(M instanceof Float32Array)A=e.FLOAT;else if(M instanceof Uint16Array)if(v.isFloat16BufferAttribute)A=e.HALF_FLOAT;else A=e.UNSIGNED_SHORT;else if(M instanceof Int16Array)A=e.SHORT;else if(M instanceof Uint32Array)A=e.UNSIGNED_INT;else if(M instanceof Int32Array)A=e.INT;else if(M instanceof Int8Array)A=e.BYTE;else if(M instanceof Uint8Array)A=e.UNSIGNED_BYTE;else if(M instanceof Uint8ClampedArray)A=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+M);return{buffer:E,type:A,bytesPerElement:M.BYTES_PER_ELEMENT,version:v.version,size:S}}function m(v,y,M){let{array:b,updateRanges:S}=y;if(e.bindBuffer(M,v),S.length===0)e.bufferSubData(M,0,b);else{S.sort((A,R)=>A.start-R.start);let E=0;for(let A=1;A<S.length;A++){let R=S[E],P=S[A];if(P.start<=R.start+R.count+1)R.count=Math.max(R.count,P.start+P.count-R.start);else++E,S[E]=P}S.length=E+1;for(let A=0,R=S.length;A<R;A++){let P=S[A];e.bufferSubData(M,P.start*b.BYTES_PER_ELEMENT,b,P.start,P.count)}y.clearUpdateRanges()}y.onUploadCallback()}function g(v){if(v.isInterleavedBufferAttribute)v=v.data;return h.get(v)}function _(v){if(v.isInterleavedBufferAttribute)v=v.data;let y=h.get(v);if(y)e.deleteBuffer(y.buffer),h.delete(v)}function x(v,y){if(v.isInterleavedBufferAttribute)v=v.data;if(v.isGLBufferAttribute){let b=h.get(v);if(!b||b.version<v.version)h.set(v,{buffer:v.buffer,type:v.type,bytesPerElement:v.elementSize,version:v.version});return}let M=h.get(v);if(M===void 0)h.set(v,p(v,y));else if(M.version<v.version){if(M.size!==v.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");m(M.buffer,v,y),M.version=v.version}}return{get:g,remove:_,update:x}}class _s extends Oe{constructor(e=1,h=1,p=1,m=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:h,widthSegments:p,heightSegments:m};let g=e/2,_=h/2,x=Math.floor(p),v=Math.floor(m),y=x+1,M=v+1,b=e/x,S=h/v,E=[],A=[],R=[],P=[];for(let T=0;T<M;T++){let w=T*S-_;for(let O=0;O<y;O++){let D=O*b-g;A.push(D,-w,0),R.push(0,0,1),P.push(O/x),P.push(1-T/v)}}for(let T=0;T<v;T++)for(let w=0;w<x;w++){let O=w+y*T,D=w+y*(T+1),N=w+1+y*(T+1),Q=w+1+y*T;E.push(O,D,Q),E.push(D,N,Q)}this.setIndex(E),this.setAttribute("position",new Ce(A,3)),this.setAttribute("normal",new Ce(R,3)),this.setAttribute("uv",new Ce(P,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}var kl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ql=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$l=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ql=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ec=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ac=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gc="gl_FragColor = linearToOutputTexel( gl_FragColor );",_c=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ec=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ac=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ic=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`;var kc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vc=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xc=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$c=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,th=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ih=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ch=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ph=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_h=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Eh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Th=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ah=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ch=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ph=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ih=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$h=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,su=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ru=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,au=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ou=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,du=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_u=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:kl,alphahash_pars_fragment:Hl,alphamap_fragment:Gl,alphamap_pars_fragment:Wl,alphatest_fragment:Vl,alphatest_pars_fragment:Xl,aomap_fragment:ql,aomap_pars_fragment:Yl,batching_pars_vertex:Zl,batching_vertex:Jl,begin_vertex:$l,beginnormal_vertex:Kl,bsdfs:jl,iridescence_fragment:Ql,bumpmap_pars_fragment:tc,clipping_planes_fragment:ec,clipping_planes_pars_fragment:nc,clipping_planes_pars_vertex:ic,clipping_planes_vertex:sc,color_fragment:rc,color_pars_fragment:ac,color_pars_vertex:oc,color_vertex:lc,common:cc,cube_uv_reflection_fragment:hc,defaultnormal_vertex:uc,displacementmap_pars_vertex:dc,displacementmap_vertex:fc,emissivemap_fragment:pc,emissivemap_pars_fragment:mc,colorspace_fragment:gc,colorspace_pars_fragment:_c,envmap_fragment:xc,envmap_common_pars_fragment:vc,envmap_pars_fragment:yc,envmap_pars_vertex:Mc,envmap_physical_pars_fragment:Dc,envmap_vertex:Sc,fog_vertex:bc,fog_pars_vertex:Ec,fog_fragment:Tc,fog_pars_fragment:wc,gradientmap_pars_fragment:Ac,lightmap_pars_fragment:Rc,lights_lambert_fragment:Cc,lights_lambert_pars_fragment:Pc,lights_pars_begin:Ic,lights_toon_fragment:Lc,lights_toon_pars_fragment:Uc,lights_phong_fragment:Nc,lights_phong_pars_fragment:Fc,lights_physical_fragment:Oc,lights_physical_pars_fragment:Bc,lights_fragment_begin:zc,lights_fragment_maps:kc,lights_fragment_end:Hc,logdepthbuf_fragment:Gc,logdepthbuf_pars_fragment:Wc,logdepthbuf_pars_vertex:Vc,logdepthbuf_vertex:Xc,map_fragment:qc,map_pars_fragment:Yc,map_particle_fragment:Zc,map_particle_pars_fragment:Jc,metalnessmap_fragment:$c,metalnessmap_pars_fragment:Kc,morphinstance_vertex:jc,morphcolor_vertex:Qc,morphnormal_vertex:th,morphtarget_pars_vertex:eh,morphtarget_vertex:nh,normal_fragment_begin:ih,normal_fragment_maps:sh,normal_pars_fragment:rh,normal_pars_vertex:ah,normal_vertex:oh,normalmap_pars_fragment:lh,clearcoat_normal_fragment_begin:ch,clearcoat_normal_fragment_maps:hh,clearcoat_pars_fragment:uh,iridescence_pars_fragment:dh,opaque_fragment:fh,packing:ph,premultiplied_alpha_fragment:mh,project_vertex:gh,dithering_fragment:_h,dithering_pars_fragment:xh,roughnessmap_fragment:vh,roughnessmap_pars_fragment:yh,shadowmap_pars_fragment:Mh,shadowmap_pars_vertex:Sh,shadowmap_vertex:bh,shadowmask_pars_fragment:Eh,skinbase_vertex:Th,skinning_pars_vertex:wh,skinning_vertex:Ah,skinnormal_vertex:Rh,specularmap_fragment:Ch,specularmap_pars_fragment:Ph,tonemapping_fragment:Ih,tonemapping_pars_fragment:Dh,transmission_fragment:Lh,transmission_pars_fragment:Uh,uv_pars_fragment:Nh,uv_pars_vertex:Fh,uv_vertex:Oh,worldpos_vertex:Bh,background_vert:zh,background_frag:kh,backgroundCube_vert:Hh,backgroundCube_frag:Gh,cube_vert:Wh,cube_frag:Vh,depth_vert:Xh,depth_frag:qh,distanceRGBA_vert:Yh,distanceRGBA_frag:Zh,equirect_vert:Jh,equirect_frag:$h,linedashed_vert:Kh,linedashed_frag:jh,meshbasic_vert:Qh,meshbasic_frag:tu,meshlambert_vert:eu,meshlambert_frag:nu,meshmatcap_vert:iu,meshmatcap_frag:su,meshnormal_vert:ru,meshnormal_frag:au,meshphong_vert:ou,meshphong_frag:lu,meshphysical_vert:cu,meshphysical_frag:hu,meshtoon_vert:uu,meshtoon_frag:du,points_vert:fu,points_frag:pu,shadow_vert:mu,shadow_frag:gu,sprite_vert:_u,sprite_frag:xu},xt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new bt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},tn={basic:{uniforms:Le([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Le([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Le([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Le([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Le([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Le([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Le([xt.points,xt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Le([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Le([xt.common,xt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Le([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Le([xt.sprite,xt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Le([xt.common,xt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Le([xt.lights,xt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};tn.physical={uniforms:Le([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var ts={r:0,b:0,g:0},In=new en,vu=new fe;function yu(e,h,p,m,g,_,x){let v=new Qt(0),y=_===!0?0:1,M,b,S=null,E=0,A=null;function R(O){let D=O.isScene===!0?O.background:null;if(D&&D.isTexture)D=(O.backgroundBlurriness>0?p:h).get(D);return D}function P(O){let D=!1,N=R(O);if(N===null)w(v,y);else if(N&&N.isColor)w(N,1),D=!0;let Q=e.xr.getEnvironmentBlendMode();if(Q==="additive")m.buffers.color.setClear(0,0,0,1,x);else if(Q==="alpha-blend")m.buffers.color.setClear(0,0,0,0,x);if(e.autoClear||D)m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function T(O,D){let N=R(D);if(N&&(N.isCubeTexture||N.mapping===306)){if(b===void 0)b=new Te(new mn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ri(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),b.geometry.deleteAttribute("normal"),b.geometry.deleteAttribute("uv"),b.onBeforeRender=function(Q,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),g.update(b);if(In.copy(D.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1)In.y*=-1,In.z*=-1;if(b.material.uniforms.envMap.value=N,b.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,b.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,b.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,b.material.uniforms.backgroundRotation.value.setFromMatrix4(vu.makeRotationFromEuler(In)),b.material.toneMapped=te.getTransfer(N.colorSpace)!=="srgb",S!==N||E!==N.version||A!==e.toneMapping)b.material.needsUpdate=!0,S=N,E=N.version,A=e.toneMapping;b.layers.enableAll(),O.unshift(b,b.geometry,b.material,0,0,null)}else if(N&&N.isTexture){if(M===void 0)M=new Te(new _s(2,2),new pn({name:"BackgroundMaterial",uniforms:ri(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),M.geometry.deleteAttribute("normal"),Object.defineProperty(M.material,"map",{get:function(){return this.uniforms.t2D.value}}),g.update(M);if(M.material.uniforms.t2D.value=N,M.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,M.material.toneMapped=te.getTransfer(N.colorSpace)!=="srgb",N.matrixAutoUpdate===!0)N.updateMatrix();if(M.material.uniforms.uvTransform.value.copy(N.matrix),S!==N||E!==N.version||A!==e.toneMapping)M.material.needsUpdate=!0,S=N,E=N.version,A=e.toneMapping;M.layers.enableAll(),O.unshift(M,M.geometry,M.material,0,0,null)}}function w(O,D){O.getRGB(ts,oo(e)),m.buffers.color.setClear(ts.r,ts.g,ts.b,D,x)}return{getClearColor:function(){return v},setClearColor:function(O,D=1){v.set(O),y=D,w(v,y)},getClearAlpha:function(){return y},setClearAlpha:function(O){y=O,w(v,y)},render:P,addToRenderList:T}}function Mu(e,h){let p=e.getParameter(e.MAX_VERTEX_ATTRIBS),m={},g=E(null),_=g,x=!1;function v(U,k,K,nt,tt){let ht=!1,st=S(nt,K,k);if(_!==st)_=st,M(_.object);if(ht=A(U,nt,K,tt),ht)R(U,nt,K,tt);if(tt!==null)h.update(tt,e.ELEMENT_ARRAY_BUFFER);if(ht||x){if(x=!1,N(U,k,K,nt),tt!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,h.get(tt).buffer)}}function y(){return e.createVertexArray()}function M(U){return e.bindVertexArray(U)}function b(U){return e.deleteVertexArray(U)}function S(U,k,K){let nt=K.wireframe===!0,tt=m[U.id];if(tt===void 0)tt={},m[U.id]=tt;let ht=tt[k.id];if(ht===void 0)ht={},tt[k.id]=ht;let st=ht[nt];if(st===void 0)st=E(y()),ht[nt]=st;return st}function E(U){let k=[],K=[],nt=[];for(let tt=0;tt<p;tt++)k[tt]=0,K[tt]=0,nt[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:nt,object:U,attributes:{},index:null}}function A(U,k,K,nt){let tt=_.attributes,ht=k.attributes,st=0,dt=K.getAttributes();for(let et in dt)if(dt[et].location>=0){let Et=tt[et],zt=ht[et];if(zt===void 0){if(et==="instanceMatrix"&&U.instanceMatrix)zt=U.instanceMatrix;if(et==="instanceColor"&&U.instanceColor)zt=U.instanceColor}if(Et===void 0)return!0;if(Et.attribute!==zt)return!0;if(zt&&Et.data!==zt.data)return!0;st++}if(_.attributesNum!==st)return!0;if(_.index!==nt)return!0;return!1}function R(U,k,K,nt){let tt={},ht=k.attributes,st=0,dt=K.getAttributes();for(let et in dt)if(dt[et].location>=0){let Et=ht[et];if(Et===void 0){if(et==="instanceMatrix"&&U.instanceMatrix)Et=U.instanceMatrix;if(et==="instanceColor"&&U.instanceColor)Et=U.instanceColor}let zt={};if(zt.attribute=Et,Et&&Et.data)zt.data=Et.data;tt[et]=zt,st++}_.attributes=tt,_.attributesNum=st,_.index=nt}function P(){let U=_.newAttributes;for(let k=0,K=U.length;k<K;k++)U[k]=0}function T(U){w(U,0)}function w(U,k){let K=_.newAttributes,nt=_.enabledAttributes,tt=_.attributeDivisors;if(K[U]=1,nt[U]===0)e.enableVertexAttribArray(U),nt[U]=1;if(tt[U]!==k)e.vertexAttribDivisor(U,k),tt[U]=k}function O(){let U=_.newAttributes,k=_.enabledAttributes;for(let K=0,nt=k.length;K<nt;K++)if(k[K]!==U[K])e.disableVertexAttribArray(K),k[K]=0}function D(U,k,K,nt,tt,ht,st){if(st===!0)e.vertexAttribIPointer(U,k,K,tt,ht);else e.vertexAttribPointer(U,k,K,nt,tt,ht)}function N(U,k,K,nt){P();let tt=nt.attributes,ht=K.getAttributes(),st=k.defaultAttributeValues;for(let dt in ht){let et=ht[dt];if(et.location>=0){let vt=tt[dt];if(vt===void 0){if(dt==="instanceMatrix"&&U.instanceMatrix)vt=U.instanceMatrix;if(dt==="instanceColor"&&U.instanceColor)vt=U.instanceColor}if(vt!==void 0){let Et=vt.normalized,zt=vt.itemSize,it=h.get(vt);if(it===void 0)continue;let{buffer:q,type:at,bytesPerElement:_t}=it,wt=at===e.INT||at===e.UNSIGNED_INT||vt.gpuType===1013;if(vt.isInterleavedBufferAttribute){let gt=vt.data,It=gt.stride,kt=vt.offset;if(gt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<et.locationSize;Bt++)w(et.location+Bt,gt.meshPerAttribute);if(U.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0)nt._maxInstanceCount=gt.meshPerAttribute*gt.count}else for(let Bt=0;Bt<et.locationSize;Bt++)T(et.location+Bt);e.bindBuffer(e.ARRAY_BUFFER,q);for(let Bt=0;Bt<et.locationSize;Bt++)D(et.location+Bt,zt/et.locationSize,at,Et,It*_t,(kt+zt/et.locationSize*Bt)*_t,wt)}else{if(vt.isInstancedBufferAttribute){for(let gt=0;gt<et.locationSize;gt++)w(et.location+gt,vt.meshPerAttribute);if(U.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0)nt._maxInstanceCount=vt.meshPerAttribute*vt.count}else for(let gt=0;gt<et.locationSize;gt++)T(et.location+gt);e.bindBuffer(e.ARRAY_BUFFER,q);for(let gt=0;gt<et.locationSize;gt++)D(et.location+gt,zt/et.locationSize,at,Et,zt*_t,zt/et.locationSize*gt*_t,wt)}}else if(st!==void 0){let Et=st[dt];if(Et!==void 0)switch(Et.length){case 2:e.vertexAttrib2fv(et.location,Et);break;case 3:e.vertexAttrib3fv(et.location,Et);break;case 4:e.vertexAttrib4fv(et.location,Et);break;default:e.vertexAttrib1fv(et.location,Et)}}}}O()}function Q(){j();for(let U in m){let k=m[U];for(let K in k){let nt=k[K];for(let tt in nt)b(nt[tt].object),delete nt[tt];delete k[K]}delete m[U]}}function B(U){if(m[U.id]===void 0)return;let k=m[U.id];for(let K in k){let nt=k[K];for(let tt in nt)b(nt[tt].object),delete nt[tt];delete k[K]}delete m[U.id]}function z(U){for(let k in m){let K=m[k];if(K[U.id]===void 0)continue;let nt=K[U.id];for(let tt in nt)b(nt[tt].object),delete nt[tt];delete K[U.id]}}function j(){if(L(),x=!0,_===g)return;_=g,M(_.object)}function L(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:v,reset:j,resetDefaultState:L,dispose:Q,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:P,enableAttribute:T,disableUnusedAttributes:O}}function Su(e,h,p){let m;function g(M){m=M}function _(M,b){e.drawArrays(m,M,b),p.update(b,m,1)}function x(M,b,S){if(S===0)return;e.drawArraysInstanced(m,M,b,S),p.update(b,m,S)}function v(M,b,S){if(S===0)return;h.get("WEBGL_multi_draw").multiDrawArraysWEBGL(m,M,0,b,0,S);let A=0;for(let R=0;R<S;R++)A+=b[R];p.update(A,m,1)}function y(M,b,S,E){if(S===0)return;let A=h.get("WEBGL_multi_draw");if(A===null)for(let R=0;R<M.length;R++)x(M[R],b[R],E[R]);else{A.multiDrawArraysInstancedWEBGL(m,M,0,b,0,E,0,S);let R=0;for(let P=0;P<S;P++)R+=b[P]*E[P];p.update(R,m,1)}}this.setMode=g,this.render=_,this.renderInstances=x,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function bu(e,h,p,m){let g;function _(){if(g!==void 0)return g;if(h.has("EXT_texture_filter_anisotropic")===!0){let z=h.get("EXT_texture_filter_anisotropic");g=e.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function x(z){if(z!==1023&&m.convert(z)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function v(z){let j=z===1016&&(h.has("EXT_color_buffer_half_float")||h.has("EXT_color_buffer_float"));if(z!==1009&&m.convert(z)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==1015&&!j)return!1;return!0}function y(z){if(z==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";z="mediump"}if(z==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let M=p.precision!==void 0?p.precision:"highp",b=y(M);if(b!==M)console.warn("THREE.WebGLRenderer:",M,"not supported, using",b,"instead."),M=b;let S=p.logarithmicDepthBuffer===!0,E=p.reverseDepthBuffer===!0&&h.has("EXT_clip_control"),A=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),R=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=e.getParameter(e.MAX_TEXTURE_SIZE),T=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),w=e.getParameter(e.MAX_VERTEX_ATTRIBS),O=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),D=e.getParameter(e.MAX_VARYING_VECTORS),N=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),Q=R>0,B=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:_,getMaxPrecision:y,textureFormatReadable:x,textureTypeReadable:v,precision:M,logarithmicDepthBuffer:S,reverseDepthBuffer:E,maxTextures:A,maxVertexTextures:R,maxTextureSize:P,maxCubemapSize:T,maxAttributes:w,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:N,vertexTextures:Q,maxSamples:B}}function Eu(e){let h=this,p=null,m=0,g=!1,_=!1,x=new Qe,v=new Yt,y={value:null,needsUpdate:!1};this.uniform=y,this.numPlanes=0,this.numIntersection=0,this.init=function(S,E){let A=S.length!==0||E||m!==0||g;return g=E,m=S.length,A},this.beginShadows=function(){_=!0,b(null)},this.endShadows=function(){_=!1},this.setGlobalState=function(S,E){p=b(S,E,0)},this.setState=function(S,E,A){let{clippingPlanes:R,clipIntersection:P,clipShadows:T}=S,w=e.get(S);if(!g||R===null||R.length===0||_&&!T)if(_)b(null);else M();else{let O=_?0:m,D=O*4,N=w.clippingState||null;y.value=N,N=b(R,E,D,A);for(let Q=0;Q!==D;++Q)N[Q]=p[Q];w.clippingState=N,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=O}};function M(){if(y.value!==p)y.value=p,y.needsUpdate=m>0;h.numPlanes=m,h.numIntersection=0}function b(S,E,A,R){let P=S!==null?S.length:0,T=null;if(P!==0){if(T=y.value,R!==!0||T===null){let w=A+P*4,O=E.matrixWorldInverse;if(v.getNormalMatrix(O),T===null||T.length<w)T=new Float32Array(w);for(let D=0,N=A;D!==P;++D,N+=4)x.copy(S[D]).applyMatrix4(O,v),x.normal.toArray(T,N),T[N+3]=x.constant}y.value=T,y.needsUpdate=!0}return h.numPlanes=P,h.numIntersection=0,T}}function Tu(e){let h=new WeakMap;function p(x,v){if(v===303)x.mapping=301;else if(v===304)x.mapping=302;return x}function m(x){if(x&&x.isTexture){let v=x.mapping;if(v===303||v===304)if(h.has(x)){let y=h.get(x).texture;return p(y,x.mapping)}else{let y=x.image;if(y&&y.height>0){let M=new co(y.height);return M.fromEquirectangularTexture(e,x),h.set(x,M),x.addEventListener("dispose",g),p(M.texture,x.mapping)}else return null}}return x}function g(x){let v=x.target;v.removeEventListener("dispose",g);let y=h.get(v);if(y!==void 0)h.delete(v),y.dispose()}function _(){h=new WeakMap}return{get:m,dispose:_}}class Mr extends vr{constructor(e=-1,h=1,p=1,m=-1,g=0.1,_=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=h,this.top=p,this.bottom=m,this.near=g,this.far=_,this.updateProjectionMatrix()}copy(e,h){return super.copy(e,h),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,h,p,m,g,_){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),h=(this.top-this.bottom)/(2*this.zoom),p=(this.right+this.left)/2,m=(this.top+this.bottom)/2,g=p-e,_=p+e,x=m+h,v=m-h;if(this.view!==null&&this.view.enabled){let y=(this.right-this.left)/this.view.fullWidth/this.zoom,M=(this.top-this.bottom)/this.view.fullHeight/this.zoom;g+=y*this.view.offsetX,_=g+y*this.view.width,x-=M*this.view.offsetY,v=x-M*this.view.height}this.projectionMatrix.makeOrthographic(g,_,x,v,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let h=super.toJSON(e);if(h.object.zoom=this.zoom,h.object.left=this.left,h.object.right=this.right,h.object.top=this.top,h.object.bottom=this.bottom,h.object.near=this.near,h.object.far=this.far,this.view!==null)h.object.view=Object.assign({},this.view);return h}}var ei=4,_a=[0.125,0.215,0.35,0.446,0.526,0.582],Un=20,Js=new Mr,xa=new Qt,$s=null,Ks=0,js=0,Qs=!1,Ln=(1+Math.sqrt(5))/2,Qn=1/Ln,va=[new H(-Ln,Qn,0),new H(Ln,Qn,0),new H(-Qn,0,Ln),new H(Qn,0,Ln),new H(0,Ln,-Qn),new H(0,Ln,Qn),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class or{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,h=0,p=0.1,m=100){$s=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let g=this._allocateTargets();if(g.depthBuffer=!0,this._sceneToCubeUV(e,p,m,g),h>0)this._blur(g,0,0,h);return this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,h=null){return this._fromTexture(e,h)}fromCubemap(e,h=null){return this._fromTexture(e,h)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Sa(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s,Ks,js),this._renderer.xr.enabled=Qs,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,h){if(e.mapping===301||e.mapping===302)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);$s=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let p=h||this._allocateTargets();return this._textureToCubeUV(e,p),this._applyPMREM(p),this._cleanup(p),p}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),h=4*this._cubeSize,p={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},m=ya(e,h,p);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==h){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=ya(e,h,p);let{_lodMax:g}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wu(g)),this._blurMaterial=Au(g,e,h)}return m}_compileMaterial(e){let h=new Te(this._lodPlanes[0],e);this._renderer.compile(h,Js)}_sceneToCubeUV(e,h,p,m){let x=new Ne(90,1,h,p),v=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],M=this._renderer,{autoClear:b,toneMapping:S}=M;M.getClearColor(xa),M.toneMapping=0,M.autoClear=!1;let E=new gr({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),A=new Te(new mn,E),R=!1,P=e.background;if(P){if(P.isColor)E.color.copy(P),e.background=null,R=!0}else E.color.copy(xa),R=!0;for(let T=0;T<6;T++){let w=T%3;if(w===0)x.up.set(0,v[T],0),x.lookAt(y[T],0,0);else if(w===1)x.up.set(0,0,v[T]),x.lookAt(0,y[T],0);else x.up.set(0,v[T],0),x.lookAt(0,0,y[T]);let O=this._cubeSize;if(es(m,w*O,T>2?O:0,O,O),M.setRenderTarget(m),R)M.render(A,x);M.render(e,x)}A.geometry.dispose(),A.material.dispose(),M.toneMapping=S,M.autoClear=b,e.background=P}_textureToCubeUV(e,h){let p=this._renderer,m=e.mapping===301||e.mapping===302;if(m){if(this._cubemapMaterial===null)this._cubemapMaterial=Sa();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Ma();let g=m?this._cubemapMaterial:this._equirectMaterial,_=new Te(this._lodPlanes[0],g),x=g.uniforms;x.envMap.value=e;let v=this._cubeSize;es(h,0,0,3*v,2*v),p.setRenderTarget(h),p.render(_,Js)}_applyPMREM(e){let h=this._renderer,p=h.autoClear;h.autoClear=!1;let m=this._lodPlanes.length;for(let g=1;g<m;g++){let _=Math.sqrt(this._sigmas[g]*this._sigmas[g]-this._sigmas[g-1]*this._sigmas[g-1]),x=va[(m-g-1)%va.length];this._blur(e,g-1,g,_,x)}h.autoClear=p}_blur(e,h,p,m,g){let _=this._pingPongRenderTarget;this._halfBlur(e,_,h,p,m,"latitudinal",g),this._halfBlur(_,e,p,p,m,"longitudinal",g)}_halfBlur(e,h,p,m,g,_,x){let v=this._renderer,y=this._blurMaterial;if(_!=="latitudinal"&&_!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let M=3,b=new Te(this._lodPlanes[m],y),S=y.uniforms,E=this._sizeLods[p]-1,A=isFinite(g)?Math.PI/(2*E):2*Math.PI/(2*Un-1),R=g/A,P=isFinite(g)?1+Math.floor(M*R):Un;if(P>Un)console.warn(`sigmaRadians, ${g}, is too large and will clip, as it requested ${P} samples when the maximum is set to ${Un}`);let T=[],w=0;for(let B=0;B<Un;++B){let z=B/R,j=Math.exp(-z*z/2);if(T.push(j),B===0)w+=j;else if(B<P)w+=2*j}for(let B=0;B<T.length;B++)T[B]=T[B]/w;if(S.envMap.value=e.texture,S.samples.value=P,S.weights.value=T,S.latitudinal.value=_==="latitudinal",x)S.poleAxis.value=x;let{_lodMax:O}=this;S.dTheta.value=A,S.mipInt.value=O-p;let D=this._sizeLods[m],N=3*D*(m>O-ei?m-O+ei:0),Q=4*(this._cubeSize-D);es(h,N,Q,3*D,2*D),v.setRenderTarget(h),v.render(b,Js)}}function wu(e){let h=[],p=[],m=[],g=e,_=e-ei+1+_a.length;for(let x=0;x<_;x++){let v=Math.pow(2,g);p.push(v);let y=1/v;if(x>e-ei)y=_a[x-e+ei-1];else if(x===0)y=0;m.push(y);let M=1/(v-2),b=-M,S=1+M,E=[b,b,S,b,S,S,b,b,S,S,b,S],A=6,R=6,P=3,T=2,w=1,O=new Float32Array(P*R*A),D=new Float32Array(T*R*A),N=new Float32Array(w*R*A);for(let B=0;B<A;B++){let z=B%3*2/3-1,j=B>2?0:-1,L=[z,j,0,z+0.6666666666666666,j,0,z+0.6666666666666666,j+1,0,z,j,0,z+0.6666666666666666,j+1,0,z,j+1,0];O.set(L,P*R*B),D.set(E,T*R*B);let U=[B,B,B,B,B,B];N.set(U,w*R*B)}let Q=new Oe;if(Q.setAttribute("position",new Je(O,P)),Q.setAttribute("uv",new Je(D,T)),Q.setAttribute("faceIndex",new Je(N,w)),h.push(Q),g>ei)g--}return{lodPlanes:h,sizeLods:p,sigmas:m}}function ya(e,h,p){let m=new En(e,h,p);return m.texture.mapping=306,m.texture.name="PMREM.cubeUv",m.scissorTest=!0,m}function es(e,h,p,m,g){e.viewport.set(h,p,m,g),e.scissor.set(h,p,m,g)}function Au(e,h,p){let m=new Float32Array(Un),g=new H(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/h,CUBEUV_TEXEL_HEIGHT:1/p,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:m},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:g}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ma(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sa(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ru(e){let h=new WeakMap,p=null;function m(v){if(v&&v.isTexture){let y=v.mapping,M=y===303||y===304,b=y===301||y===302;if(M||b){let S=h.get(v),E=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==E){if(p===null)p=new or(e);return S=M?p.fromEquirectangular(v,S):p.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,h.set(v,S),S.texture}else if(S!==void 0)return S.texture;else{let A=v.image;if(M&&A&&A.height>0||b&&A&&g(A)){if(p===null)p=new or(e);return S=M?p.fromEquirectangular(v):p.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,h.set(v,S),v.addEventListener("dispose",_),S.texture}else return null}}}return v}function g(v){let y=0,M=6;for(let b=0;b<M;b++)if(v[b]!==void 0)y++;return y===M}function _(v){let y=v.target;y.removeEventListener("dispose",_);let M=h.get(y);if(M!==void 0)h.delete(y),M.dispose()}function x(){if(h=new WeakMap,p!==null)p.dispose(),p=null}return{get:m,dispose:x}}function Cu(e){let h={};function p(m){if(h[m]!==void 0)return h[m];let g;switch(m){case"WEBGL_depth_texture":g=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":g=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":g=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":g=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:g=e.getExtension(m)}return h[m]=g,g}return{has:function(m){return p(m)!==null},init:function(){p("EXT_color_buffer_float"),p("WEBGL_clip_cull_distance"),p("OES_texture_float_linear"),p("EXT_color_buffer_half_float"),p("WEBGL_multisampled_render_to_texture"),p("WEBGL_render_shared_exponent")},get:function(m){let g=p(m);if(g===null)vi("THREE.WebGLRenderer: "+m+" extension not supported.");return g}}}function Pu(e,h,p,m){let g={},_=new WeakMap;function x(S){let E=S.target;if(E.index!==null)h.remove(E.index);for(let R in E.attributes)h.remove(E.attributes[R]);for(let R in E.morphAttributes){let P=E.morphAttributes[R];for(let T=0,w=P.length;T<w;T++)h.remove(P[T])}E.removeEventListener("dispose",x),delete g[E.id];let A=_.get(E);if(A)h.remove(A),_.delete(E);if(m.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0)delete E._maxInstanceCount;p.memory.geometries--}function v(S,E){if(g[E.id]===!0)return E;return E.addEventListener("dispose",x),g[E.id]=!0,p.memory.geometries++,E}function y(S){let E=S.attributes;for(let R in E)h.update(E[R],e.ARRAY_BUFFER);let A=S.morphAttributes;for(let R in A){let P=A[R];for(let T=0,w=P.length;T<w;T++)h.update(P[T],e.ARRAY_BUFFER)}}function M(S){let E=[],A=S.index,R=S.attributes.position,P=0;if(A!==null){let O=A.array;P=A.version;for(let D=0,N=O.length;D<N;D+=3){let Q=O[D+0],B=O[D+1],z=O[D+2];E.push(Q,B,B,z,z,Q)}}else if(R!==void 0){let O=R.array;P=R.version;for(let D=0,N=O.length/3-1;D<N;D+=3){let Q=D+0,B=D+1,z=D+2;E.push(Q,B,B,z,z,Q)}}else return;let T=new((no(E))?xr:_r)(E,1);T.version=P;let w=_.get(S);if(w)h.remove(w);_.set(S,T)}function b(S){let E=_.get(S);if(E){let A=S.index;if(A!==null){if(E.version<A.version)M(S)}}else M(S);return _.get(S)}return{get:v,update:y,getWireframeAttribute:b}}function Iu(e,h,p){let m;function g(E){m=E}let _,x;function v(E){_=E.type,x=E.bytesPerElement}function y(E,A){e.drawElements(m,A,_,E*x),p.update(A,m,1)}function M(E,A,R){if(R===0)return;e.drawElementsInstanced(m,A,_,E*x,R),p.update(A,m,R)}function b(E,A,R){if(R===0)return;h.get("WEBGL_multi_draw").multiDrawElementsWEBGL(m,A,0,_,E,0,R);let T=0;for(let w=0;w<R;w++)T+=A[w];p.update(T,m,1)}function S(E,A,R,P){if(R===0)return;let T=h.get("WEBGL_multi_draw");if(T===null)for(let w=0;w<E.length;w++)M(E[w]/x,A[w],P[w]);else{T.multiDrawElementsInstancedWEBGL(m,A,0,_,E,0,P,0,R);let w=0;for(let O=0;O<R;O++)w+=A[O]*P[O];p.update(w,m,1)}}this.setMode=g,this.setIndex=v,this.render=y,this.renderInstances=M,this.renderMultiDraw=b,this.renderMultiDrawInstances=S}function Du(e){let h={geometries:0,textures:0},p={frame:0,calls:0,triangles:0,points:0,lines:0};function m(_,x,v){switch(p.calls++,x){case e.TRIANGLES:p.triangles+=v*(_/3);break;case e.LINES:p.lines+=v*(_/2);break;case e.LINE_STRIP:p.lines+=v*(_-1);break;case e.LINE_LOOP:p.lines+=v*_;break;case e.POINTS:p.points+=v*_;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",x);break}}function g(){p.calls=0,p.triangles=0,p.points=0,p.lines=0}return{memory:h,render:p,programs:null,autoReset:!0,reset:g,update:m}}function Lu(e,h,p){let m=new WeakMap,g=new xe;function _(x,v,y){let M=x.morphTargetInfluences,b=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,S=b!==void 0?b.length:0,E=m.get(v);if(E===void 0||E.count!==S){let L=function(){z.dispose(),m.delete(v),v.removeEventListener("dispose",L)};if(E!==void 0)E.texture.dispose();let A=v.morphAttributes.position!==void 0,R=v.morphAttributes.normal!==void 0,P=v.morphAttributes.color!==void 0,T=v.morphAttributes.position||[],w=v.morphAttributes.normal||[],O=v.morphAttributes.color||[],D=0;if(A===!0)D=1;if(R===!0)D=2;if(P===!0)D=3;let N=v.attributes.position.count*D,Q=1;if(N>h.maxTextureSize)Q=Math.ceil(N/h.maxTextureSize),N=h.maxTextureSize;let B=new Float32Array(N*Q*4*S),z=new pr(B,N,Q,S);z.type=1015,z.needsUpdate=!0;let j=D*4;for(let U=0;U<S;U++){let k=T[U],K=w[U],nt=O[U],tt=N*Q*4*U;for(let ht=0;ht<k.count;ht++){let st=ht*j;if(A===!0)g.fromBufferAttribute(k,ht),B[tt+st+0]=g.x,B[tt+st+1]=g.y,B[tt+st+2]=g.z,B[tt+st+3]=0;if(R===!0)g.fromBufferAttribute(K,ht),B[tt+st+4]=g.x,B[tt+st+5]=g.y,B[tt+st+6]=g.z,B[tt+st+7]=0;if(P===!0)g.fromBufferAttribute(nt,ht),B[tt+st+8]=g.x,B[tt+st+9]=g.y,B[tt+st+10]=g.z,B[tt+st+11]=nt.itemSize===4?g.w:1}}E={count:S,texture:z,size:new bt(N,Q)},m.set(v,E),v.addEventListener("dispose",L)}if(x.isInstancedMesh===!0&&x.morphTexture!==null)y.getUniforms().setValue(e,"morphTexture",x.morphTexture,p);else{let A=0;for(let P=0;P<M.length;P++)A+=M[P];let R=v.morphTargetsRelative?1:1-A;y.getUniforms().setValue(e,"morphTargetBaseInfluence",R),y.getUniforms().setValue(e,"morphTargetInfluences",M)}y.getUniforms().setValue(e,"morphTargetsTexture",E.texture,p),y.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:_}}function Uu(e,h,p,m){let g=new WeakMap;function _(y){let M=m.render.frame,b=y.geometry,S=h.get(y,b);if(g.get(S)!==M)h.update(S),g.set(S,M);if(y.isInstancedMesh){if(y.hasEventListener("dispose",v)===!1)y.addEventListener("dispose",v);if(g.get(y)!==M){if(p.update(y.instanceMatrix,e.ARRAY_BUFFER),y.instanceColor!==null)p.update(y.instanceColor,e.ARRAY_BUFFER);g.set(y,M)}}if(y.isSkinnedMesh){let E=y.skeleton;if(g.get(E)!==M)E.update(),g.set(E,M)}return S}function x(){g=new WeakMap}function v(y){let M=y.target;if(M.removeEventListener("dispose",v),p.remove(M.instanceMatrix),M.instanceColor!==null)p.remove(M.instanceColor)}return{update:_,dispose:x}}class br extends Fe{constructor(e,h,p,m,g,_,x,v,y,M=1026){if(M!==1026&&M!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(p===void 0&&M===1026)p=1014;if(p===void 0&&M===1027)p=1020;super(null,m,g,_,x,v,M,p,y);this.isDepthTexture=!0,this.image={width:e,height:h},this.magFilter=x!==void 0?x:1003,this.minFilter=v!==void 0?v:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let h=super.toJSON(e);if(this.compareFunction!==null)h.compareFunction=this.compareFunction;return h}}var uo=new Fe,ba=new br(1,1),fo=new pr,po=new ro,mo=new yr,Ea=[],Ta=[],wa=new Float32Array(16),Aa=new Float32Array(9),Ra=new Float32Array(4);function oi(e,h,p){let m=e[0];if(m<=0||m>0)return e;let g=h*p,_=Ea[g];if(_===void 0)_=new Float32Array(g),Ea[g]=_;if(h!==0){m.toArray(_,0);for(let x=1,v=0;x!==h;++x)v+=p,e[x].toArray(_,v)}return _}function ye(e,h){if(e.length!==h.length)return!1;for(let p=0,m=e.length;p<m;p++)if(e[p]!==h[p])return!1;return!0}function Me(e,h){for(let p=0,m=h.length;p<m;p++)e[p]=h[p]}function xs(e,h){let p=Ta[h];if(p===void 0)p=new Int32Array(h),Ta[h]=p;for(let m=0;m!==h;++m)p[m]=e.allocateTextureUnit();return p}function Nu(e,h){let p=this.cache;if(p[0]===h)return;e.uniform1f(this.addr,h),p[0]=h}function Fu(e,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)e.uniform2f(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(ye(p,h))return;e.uniform2fv(this.addr,h),Me(p,h)}}function Ou(e,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)e.uniform3f(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else if(h.r!==void 0){if(p[0]!==h.r||p[1]!==h.g||p[2]!==h.b)e.uniform3f(this.addr,h.r,h.g,h.b),p[0]=h.r,p[1]=h.g,p[2]=h.b}else{if(ye(p,h))return;e.uniform3fv(this.addr,h),Me(p,h)}}function Bu(e,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)e.uniform4f(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(ye(p,h))return;e.uniform4fv(this.addr,h),Me(p,h)}}function zu(e,h){let p=this.cache,m=h.elements;if(m===void 0){if(ye(p,h))return;e.uniformMatrix2fv(this.addr,!1,h),Me(p,h)}else{if(ye(p,m))return;Ra.set(m),e.uniformMatrix2fv(this.addr,!1,Ra),Me(p,m)}}function ku(e,h){let p=this.cache,m=h.elements;if(m===void 0){if(ye(p,h))return;e.uniformMatrix3fv(this.addr,!1,h),Me(p,h)}else{if(ye(p,m))return;Aa.set(m),e.uniformMatrix3fv(this.addr,!1,Aa),Me(p,m)}}function Hu(e,h){let p=this.cache,m=h.elements;if(m===void 0){if(ye(p,h))return;e.uniformMatrix4fv(this.addr,!1,h),Me(p,h)}else{if(ye(p,m))return;wa.set(m),e.uniformMatrix4fv(this.addr,!1,wa),Me(p,m)}}function Gu(e,h){let p=this.cache;if(p[0]===h)return;e.uniform1i(this.addr,h),p[0]=h}function Wu(e,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)e.uniform2i(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(ye(p,h))return;e.uniform2iv(this.addr,h),Me(p,h)}}function Vu(e,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)e.uniform3i(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(ye(p,h))return;e.uniform3iv(this.addr,h),Me(p,h)}}function Xu(e,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)e.uniform4i(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(ye(p,h))return;e.uniform4iv(this.addr,h),Me(p,h)}}function qu(e,h){let p=this.cache;if(p[0]===h)return;e.uniform1ui(this.addr,h),p[0]=h}function Yu(e,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)e.uniform2ui(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(ye(p,h))return;e.uniform2uiv(this.addr,h),Me(p,h)}}function Zu(e,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)e.uniform3ui(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(ye(p,h))return;e.uniform3uiv(this.addr,h),Me(p,h)}}function Ju(e,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)e.uniform4ui(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(ye(p,h))return;e.uniform4uiv(this.addr,h),Me(p,h)}}function $u(e,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)e.uniform1i(this.addr,g),m[0]=g;let _;if(this.type===e.SAMPLER_2D_SHADOW)ba.compareFunction=515,_=ba;else _=uo;p.setTexture2D(h||_,g)}function Ku(e,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)e.uniform1i(this.addr,g),m[0]=g;p.setTexture3D(h||po,g)}function ju(e,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)e.uniform1i(this.addr,g),m[0]=g;p.setTextureCube(h||mo,g)}function Qu(e,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)e.uniform1i(this.addr,g),m[0]=g;p.setTexture2DArray(h||fo,g)}function td(e){switch(e){case 5126:return Nu;case 35664:return Fu;case 35665:return Ou;case 35666:return Bu;case 35674:return zu;case 35675:return ku;case 35676:return Hu;case 5124:case 35670:return Gu;case 35667:case 35671:return Wu;case 35668:case 35672:return Vu;case 35669:case 35673:return Xu;case 5125:return qu;case 36294:return Yu;case 36295:return Zu;case 36296:return Ju;case 35678:case 36198:case 36298:case 36306:case 35682:return $u;case 35679:case 36299:case 36307:return Ku;case 35680:case 36300:case 36308:case 36293:return ju;case 36289:case 36303:case 36311:case 36292:return Qu}}function ed(e,h){e.uniform1fv(this.addr,h)}function nd(e,h){let p=oi(h,this.size,2);e.uniform2fv(this.addr,p)}function id(e,h){let p=oi(h,this.size,3);e.uniform3fv(this.addr,p)}function sd(e,h){let p=oi(h,this.size,4);e.uniform4fv(this.addr,p)}function rd(e,h){let p=oi(h,this.size,4);e.uniformMatrix2fv(this.addr,!1,p)}function ad(e,h){let p=oi(h,this.size,9);e.uniformMatrix3fv(this.addr,!1,p)}function od(e,h){let p=oi(h,this.size,16);e.uniformMatrix4fv(this.addr,!1,p)}function ld(e,h){e.uniform1iv(this.addr,h)}function cd(e,h){e.uniform2iv(this.addr,h)}function hd(e,h){e.uniform3iv(this.addr,h)}function ud(e,h){e.uniform4iv(this.addr,h)}function dd(e,h){e.uniform1uiv(this.addr,h)}function fd(e,h){e.uniform2uiv(this.addr,h)}function pd(e,h){e.uniform3uiv(this.addr,h)}function md(e,h){e.uniform4uiv(this.addr,h)}function gd(e,h,p){let m=this.cache,g=h.length,_=xs(p,g);if(!ye(m,_))e.uniform1iv(this.addr,_),Me(m,_);for(let x=0;x!==g;++x)p.setTexture2D(h[x]||uo,_[x])}function _d(e,h,p){let m=this.cache,g=h.length,_=xs(p,g);if(!ye(m,_))e.uniform1iv(this.addr,_),Me(m,_);for(let x=0;x!==g;++x)p.setTexture3D(h[x]||po,_[x])}function xd(e,h,p){let m=this.cache,g=h.length,_=xs(p,g);if(!ye(m,_))e.uniform1iv(this.addr,_),Me(m,_);for(let x=0;x!==g;++x)p.setTextureCube(h[x]||mo,_[x])}function vd(e,h,p){let m=this.cache,g=h.length,_=xs(p,g);if(!ye(m,_))e.uniform1iv(this.addr,_),Me(m,_);for(let x=0;x!==g;++x)p.setTexture2DArray(h[x]||fo,_[x])}function yd(e){switch(e){case 5126:return ed;case 35664:return nd;case 35665:return id;case 35666:return sd;case 35674:return rd;case 35675:return ad;case 35676:return od;case 5124:case 35670:return ld;case 35667:case 35671:return cd;case 35668:case 35672:return hd;case 35669:case 35673:return ud;case 5125:return dd;case 36294:return fd;case 36295:return pd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return _d;case 35680:case 36300:case 36308:case 36293:return xd;case 36289:case 36303:case 36311:case 36292:return vd}}class go{constructor(e,h,p){this.id=e,this.addr=p,this.cache=[],this.type=h.type,this.setValue=td(h.type)}}class _o{constructor(e,h,p){this.id=e,this.addr=p,this.cache=[],this.type=h.type,this.size=h.size,this.setValue=yd(h.type)}}class xo{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,h,p){let m=this.seq;for(let g=0,_=m.length;g!==_;++g){let x=m[g];x.setValue(e,h[x.id],p)}}}var tr=/(\w+)(\])?(\[|\.)?/g;function Ca(e,h){e.seq.push(h),e.map[h.id]=h}function Md(e,h,p){let m=e.name,g=m.length;tr.lastIndex=0;while(!0){let _=tr.exec(m),x=tr.lastIndex,v=_[1],y=_[2]==="]",M=_[3];if(y)v=v|0;if(M===void 0||M==="["&&x+2===g){Ca(p,M===void 0?new go(v,e,h):new _o(v,e,h));break}else{let S=p.map[v];if(S===void 0)S=new xo(v),Ca(p,S);p=S}}}class Si{constructor(e,h){this.seq=[],this.map={};let p=e.getProgramParameter(h,e.ACTIVE_UNIFORMS);for(let m=0;m<p;++m){let g=e.getActiveUniform(h,m),_=e.getUniformLocation(h,g.name);Md(g,_,this)}}setValue(e,h,p,m){let g=this.map[h];if(g!==void 0)g.setValue(e,p,m)}setOptional(e,h,p){let m=h[p];if(m!==void 0)this.setValue(e,p,m)}static upload(e,h,p,m){for(let g=0,_=h.length;g!==_;++g){let x=h[g],v=p[x.id];if(v.needsUpdate!==!1)x.setValue(e,v.value,m)}}static seqWithValue(e,h){let p=[];for(let m=0,g=e.length;m!==g;++m){let _=e[m];if(_.id in h)p.push(_)}return p}}function Pa(e,h,p){let m=e.createShader(h);return e.shaderSource(m,p),e.compileShader(m),m}var Sd=37297,bd=0;function Ed(e,h){let p=e.split(`
`),m=[],g=Math.max(h-6,0),_=Math.min(h+6,p.length);for(let x=g;x<_;x++){let v=x+1;m.push(`${v===h?">":" "} ${v}: ${p[x]}`)}return m.join(`
`)}var Ia=new Yt;function Td(e){te._getMatrix(Ia,te.workingColorSpace,e);let h=`mat3( ${Ia.elements.map((p)=>p.toFixed(4))} )`;switch(te.getTransfer(e)){case"linear":return[h,"LinearTransferOETF"];case"srgb":return[h,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[h,"LinearTransferOETF"]}}function Da(e,h,p){let m=e.getShaderParameter(h,e.COMPILE_STATUS),g=e.getShaderInfoLog(h).trim();if(m&&g==="")return"";let _=/ERROR: 0:(\d+)/.exec(g);if(_){let x=parseInt(_[1]);return p.toUpperCase()+`

`+g+`

`+Ed(e.getShaderSource(h),x)}else return g}function wd(e,h){let p=Td(h);return[`vec4 ${e}( vec4 value ) {`,`	return ${p[1]}( vec4( value.rgb * ${p[0]}, value.a ) );`,"}"].join(`
`)}function Ad(e,h){let p;switch(h){case 1:p="Linear";break;case 2:p="Reinhard";break;case 3:p="Cineon";break;case 4:p="ACESFilmic";break;case 6:p="AgX";break;case 7:p="Neutral";break;case 5:p="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",h),p="Linear"}return"vec3 "+e+"( vec3 color ) { return "+p+"ToneMapping( color ); }"}var ns=new H;function Rd(){te.getLuminanceCoefficients(ns);let e=ns.x.toFixed(4),h=ns.y.toFixed(4),p=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${h}, ${p} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Cd(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yi).join(`
`)}function Pd(e){let h=[];for(let p in e){let m=e[p];if(m===!1)continue;h.push("#define "+p+" "+m)}return h.join(`
`)}function Id(e,h){let p={},m=e.getProgramParameter(h,e.ACTIVE_ATTRIBUTES);for(let g=0;g<m;g++){let _=e.getActiveAttrib(h,g),x=_.name,v=1;if(_.type===e.FLOAT_MAT2)v=2;if(_.type===e.FLOAT_MAT3)v=3;if(_.type===e.FLOAT_MAT4)v=4;p[x]={type:_.type,location:e.getAttribLocation(h,x),locationSize:v}}return p}function yi(e){return e!==""}function La(e,h){let p=h.numSpotLightShadows+h.numSpotLightMaps-h.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,h.numDirLights).replace(/NUM_SPOT_LIGHTS/g,h.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,h.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,p).replace(/NUM_RECT_AREA_LIGHTS/g,h.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,h.numPointLights).replace(/NUM_HEMI_LIGHTS/g,h.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,h.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,h.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,h.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,h.numPointLightShadows)}function Ua(e,h){return e.replace(/NUM_CLIPPING_PLANES/g,h.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,h.numClippingPlanes-h.numClipIntersection)}var Dd=/^[ \t]*#include +<([\w\d./]+)>/gm;function lr(e){return e.replace(Dd,Ud)}var Ld=new Map;function Ud(e,h){let p=Jt[h];if(p===void 0){let m=Ld.get(h);if(m!==void 0)p=Jt[m],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',h,m);else throw Error("Can not resolve #include <"+h+">")}return lr(p)}var Nd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(e){return e.replace(Nd,Fd)}function Fd(e,h,p,m){let g="";for(let _=parseInt(h);_<parseInt(p);_++)g+=m.replace(/\[\s*i\s*\]/g,"[ "+_+" ]").replace(/UNROLLED_LOOP_INDEX/g,_);return g}function Fa(e){let h=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")h+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")h+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")h+=`
#define LOW_PRECISION`;return h}function Od(e){let h="SHADOWMAP_TYPE_BASIC";if(e.shadowMapType===1)h="SHADOWMAP_TYPE_PCF";else if(e.shadowMapType===2)h="SHADOWMAP_TYPE_PCF_SOFT";else if(e.shadowMapType===3)h="SHADOWMAP_TYPE_VSM";return h}function Bd(e){let h="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:h="ENVMAP_TYPE_CUBE";break;case 306:h="ENVMAP_TYPE_CUBE_UV";break}return h}function zd(e){let h="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case 302:h="ENVMAP_MODE_REFRACTION";break}return h}function kd(e){let h="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:h="ENVMAP_BLENDING_MULTIPLY";break;case 1:h="ENVMAP_BLENDING_MIX";break;case 2:h="ENVMAP_BLENDING_ADD";break}return h}function Hd(e){let h=e.envMapCubeUVHeight;if(h===null)return null;let p=Math.log2(h)-2,m=1/h;return{texelWidth:1/(3*Math.max(Math.pow(2,p),112)),texelHeight:m,maxMip:p}}function Gd(e,h,p,m){let g=e.getContext(),{defines:_,vertexShader:x,fragmentShader:v}=p,y=Od(p),M=Bd(p),b=zd(p),S=kd(p),E=Hd(p),A=Cd(p),R=Pd(_),P=g.createProgram(),T,w,O=p.glslVersion?"#version "+p.glslVersion+`
`:"";if(p.isRawShaderMaterial){if(T=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,R].filter(yi).join(`
`),T.length>0)T+=`
`;if(w=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,R].filter(yi).join(`
`),w.length>0)w+=`
`}else T=[Fa(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,R,p.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",p.batching?"#define USE_BATCHING":"",p.batchingColor?"#define USE_BATCHING_COLOR":"",p.instancing?"#define USE_INSTANCING":"",p.instancingColor?"#define USE_INSTANCING_COLOR":"",p.instancingMorph?"#define USE_INSTANCING_MORPH":"",p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.map?"#define USE_MAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+b:"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.displacementMap?"#define USE_DISPLACEMENTMAP":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.mapUv?"#define MAP_UV "+p.mapUv:"",p.alphaMapUv?"#define ALPHAMAP_UV "+p.alphaMapUv:"",p.lightMapUv?"#define LIGHTMAP_UV "+p.lightMapUv:"",p.aoMapUv?"#define AOMAP_UV "+p.aoMapUv:"",p.emissiveMapUv?"#define EMISSIVEMAP_UV "+p.emissiveMapUv:"",p.bumpMapUv?"#define BUMPMAP_UV "+p.bumpMapUv:"",p.normalMapUv?"#define NORMALMAP_UV "+p.normalMapUv:"",p.displacementMapUv?"#define DISPLACEMENTMAP_UV "+p.displacementMapUv:"",p.metalnessMapUv?"#define METALNESSMAP_UV "+p.metalnessMapUv:"",p.roughnessMapUv?"#define ROUGHNESSMAP_UV "+p.roughnessMapUv:"",p.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+p.anisotropyMapUv:"",p.clearcoatMapUv?"#define CLEARCOATMAP_UV "+p.clearcoatMapUv:"",p.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+p.clearcoatNormalMapUv:"",p.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+p.clearcoatRoughnessMapUv:"",p.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+p.iridescenceMapUv:"",p.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+p.iridescenceThicknessMapUv:"",p.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+p.sheenColorMapUv:"",p.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+p.sheenRoughnessMapUv:"",p.specularMapUv?"#define SPECULARMAP_UV "+p.specularMapUv:"",p.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+p.specularColorMapUv:"",p.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+p.specularIntensityMapUv:"",p.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+p.transmissionMapUv:"",p.thicknessMapUv?"#define THICKNESSMAP_UV "+p.thicknessMapUv:"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.flatShading?"#define FLAT_SHADED":"",p.skinning?"#define USE_SKINNING":"",p.morphTargets?"#define USE_MORPHTARGETS":"",p.morphNormals&&p.flatShading===!1?"#define USE_MORPHNORMALS":"",p.morphColors?"#define USE_MORPHCOLORS":"",p.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+p.morphTextureStride:"",p.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+p.morphTargetsCount:"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+y:"",p.sizeAttenuation?"#define USE_SIZEATTENUATION":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),w=[Fa(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,R,p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",p.map?"#define USE_MAP":"",p.matcap?"#define USE_MATCAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+M:"",p.envMap?"#define "+b:"",p.envMap?"#define "+S:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoat?"#define USE_CLEARCOAT":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.dispersion?"#define USE_DISPERSION":"",p.iridescence?"#define USE_IRIDESCENCE":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaTest?"#define USE_ALPHATEST":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.sheen?"#define USE_SHEEN":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors||p.instancingColor||p.batchingColor?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.gradientMap?"#define USE_GRADIENTMAP":"",p.flatShading?"#define FLAT_SHADED":"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+y:"",p.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",p.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",p.toneMapping!==0?"#define TONE_MAPPING":"",p.toneMapping!==0?Jt.tonemapping_pars_fragment:"",p.toneMapping!==0?Ad("toneMapping",p.toneMapping):"",p.dithering?"#define DITHERING":"",p.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,wd("linearToOutputTexel",p.outputColorSpace),Rd(),p.useDepthPacking?"#define DEPTH_PACKING "+p.depthPacking:"",`
`].filter(yi).join(`
`);if(x=lr(x),x=La(x,p),x=Ua(x,p),v=lr(v),v=La(v,p),v=Ua(v,p),x=Na(x),v=Na(v),p.isRawShaderMaterial!==!0)O=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,w=["#define varying in",p.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",p.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w;let D=O+T+x,N=O+w+v,Q=Pa(g,g.VERTEX_SHADER,D),B=Pa(g,g.FRAGMENT_SHADER,N);if(g.attachShader(P,Q),g.attachShader(P,B),p.index0AttributeName!==void 0)g.bindAttribLocation(P,0,p.index0AttributeName);else if(p.morphTargets===!0)g.bindAttribLocation(P,0,"position");g.linkProgram(P);function z(k){if(e.debug.checkShaderErrors){let K=g.getProgramInfoLog(P).trim(),nt=g.getShaderInfoLog(Q).trim(),tt=g.getShaderInfoLog(B).trim(),ht=!0,st=!0;if(g.getProgramParameter(P,g.LINK_STATUS)===!1)if(ht=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(g,P,Q,B);else{let dt=Da(g,Q,"vertex"),et=Da(g,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+g.getError()+" - VALIDATE_STATUS "+g.getProgramParameter(P,g.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+dt+`
`+et)}else if(K!=="")console.warn("THREE.WebGLProgram: Program Info Log:",K);else if(nt===""||tt==="")st=!1;if(st)k.diagnostics={runnable:ht,programLog:K,vertexShader:{log:nt,prefix:T},fragmentShader:{log:tt,prefix:w}}}g.deleteShader(Q),g.deleteShader(B),j=new Si(g,P),L=Id(g,P)}let j;this.getUniforms=function(){if(j===void 0)z(this);return j};let L;this.getAttributes=function(){if(L===void 0)z(this);return L};let U=p.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(U===!1)U=g.getProgramParameter(P,Sd);return U},this.destroy=function(){m.releaseStatesOfProgram(this),g.deleteProgram(P),this.program=void 0},this.type=p.shaderType,this.name=p.shaderName,this.id=bd++,this.cacheKey=h,this.usedTimes=1,this.program=P,this.vertexShader=Q,this.fragmentShader=B,this}var Wd=0;class vo{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let{vertexShader:h,fragmentShader:p}=e,m=this._getShaderStage(h),g=this._getShaderStage(p),_=this._getShaderCacheForMaterial(e);if(_.has(m)===!1)_.add(m),m.usedTimes++;if(_.has(g)===!1)_.add(g),g.usedTimes++;return this}remove(e){let h=this.materialCache.get(e);for(let p of h)if(p.usedTimes--,p.usedTimes===0)this.shaderCache.delete(p.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let h=this.materialCache,p=h.get(e);if(p===void 0)p=new Set,h.set(e,p);return p}_getShaderStage(e){let h=this.shaderCache,p=h.get(e);if(p===void 0)p=new yo(e),h.set(e,p);return p}}class yo{constructor(e){this.id=Wd++,this.code=e,this.usedTimes=0}}function Vd(e,h,p,m,g,_,x){let v=new mr,y=new vo,M=new Set,b=[],{logarithmicDepthBuffer:S,vertexTextures:E,precision:A}=g,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(L){if(M.add(L),L===0)return"uv";return`uv${L}`}function T(L,U,k,K,nt){let tt=K.fog,ht=nt.geometry,st=L.isMeshStandardMaterial?K.environment:null,dt=(L.isMeshStandardMaterial?p:h).get(L.envMap||st),et=!!dt&&dt.mapping===306?dt.image.height:null,vt=R[L.type];if(L.precision!==null){if(A=g.getMaxPrecision(L.precision),A!==L.precision)console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",A,"instead.")}let Et=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,zt=Et!==void 0?Et.length:0,it=0;if(ht.morphAttributes.position!==void 0)it=1;if(ht.morphAttributes.normal!==void 0)it=2;if(ht.morphAttributes.color!==void 0)it=3;let q,at,_t,wt;if(vt){let ne=tn[vt];q=ne.vertexShader,at=ne.fragmentShader}else q=L.vertexShader,at=L.fragmentShader,y.update(L),_t=y.getVertexShaderID(L),wt=y.getFragmentShaderID(L);let gt=e.getRenderTarget(),It=e.state.buffers.depth.getReversed(),kt=nt.isInstancedMesh===!0,Bt=nt.isBatchedMesh===!0,$t=!!L.map,ce=!!L.matcap,X=!!dt,Ae=!!L.aoMap,re=!!L.lightMap,ae=!!L.bumpMap,Pt=!!L.normalMap,ge=!!L.displacementMap,Ft=!!L.emissiveMap,Wt=!!L.metalnessMap,F=!!L.roughnessMap,C=L.anisotropy>0,Y=L.clearcoat>0,ct=L.dispersion>0,ut=L.iridescence>0,rt=L.sheen>0,Ot=L.transmission>0,yt=C&&!!L.anisotropyMap,Rt=Y&&!!L.clearcoatMap,Vt=Y&&!!L.clearcoatNormalMap,pt=Y&&!!L.clearcoatRoughnessMap,At=ut&&!!L.iridescenceMap,jt=ut&&!!L.iridescenceThicknessMap,Ht=rt&&!!L.sheenColorMap,Ct=rt&&!!L.sheenRoughnessMap,Xt=!!L.specularMap,Kt=!!L.specularColorMap,pe=!!L.specularIntensityMap,G=Ot&&!!L.transmissionMap,ft=Ot&&!!L.thicknessMap,ot=!!L.gradientMap,lt=!!L.alphaMap,Tt=L.alphaTest>0,Mt=!!L.alphaHash,Zt=!!L.extensions,_e=0;if(L.toneMapped){if(gt===null||gt.isXRRenderTarget===!0)_e=e.toneMapping}let Re={shaderID:vt,shaderType:L.type,shaderName:L.name,vertexShader:q,fragmentShader:at,defines:L.defines,customVertexShaderID:_t,customFragmentShaderID:wt,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:A,batching:Bt,batchingColor:Bt&&nt._colorsTexture!==null,instancing:kt,instancingColor:kt&&nt.instanceColor!==null,instancingMorph:kt&&nt.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:gt===null?e.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:"srgb-linear",alphaToCoverage:!!L.alphaToCoverage,map:$t,matcap:ce,envMap:X,envMapMode:X&&dt.mapping,envMapCubeUVHeight:et,aoMap:Ae,lightMap:re,bumpMap:ae,normalMap:Pt,displacementMap:E&&ge,emissiveMap:Ft,normalMapObjectSpace:Pt&&L.normalMapType===1,normalMapTangentSpace:Pt&&L.normalMapType===0,metalnessMap:Wt,roughnessMap:F,anisotropy:C,anisotropyMap:yt,clearcoat:Y,clearcoatMap:Rt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:pt,dispersion:ct,iridescence:ut,iridescenceMap:At,iridescenceThicknessMap:jt,sheen:rt,sheenColorMap:Ht,sheenRoughnessMap:Ct,specularMap:Xt,specularColorMap:Kt,specularIntensityMap:pe,transmission:Ot,transmissionMap:G,thicknessMap:ft,gradientMap:ot,opaque:L.transparent===!1&&L.blending===1&&L.alphaToCoverage===!1,alphaMap:lt,alphaTest:Tt,alphaHash:Mt,combine:L.combine,mapUv:$t&&P(L.map.channel),aoMapUv:Ae&&P(L.aoMap.channel),lightMapUv:re&&P(L.lightMap.channel),bumpMapUv:ae&&P(L.bumpMap.channel),normalMapUv:Pt&&P(L.normalMap.channel),displacementMapUv:ge&&P(L.displacementMap.channel),emissiveMapUv:Ft&&P(L.emissiveMap.channel),metalnessMapUv:Wt&&P(L.metalnessMap.channel),roughnessMapUv:F&&P(L.roughnessMap.channel),anisotropyMapUv:yt&&P(L.anisotropyMap.channel),clearcoatMapUv:Rt&&P(L.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&P(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&P(L.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&P(L.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&P(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&P(L.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&P(L.sheenRoughnessMap.channel),specularMapUv:Xt&&P(L.specularMap.channel),specularColorMapUv:Kt&&P(L.specularColorMap.channel),specularIntensityMapUv:pe&&P(L.specularIntensityMap.channel),transmissionMapUv:G&&P(L.transmissionMap.channel),thicknessMapUv:ft&&P(L.thicknessMap.channel),alphaMapUv:lt&&P(L.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Pt||C),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ht.attributes.uv&&($t||lt),fog:!!tt,useFog:L.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:It,skinning:nt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:it,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:x.numPlanes,numClipIntersection:x.numIntersection,dithering:L.dithering,shadowMapEnabled:e.shadowMap.enabled&&k.length>0,shadowMapType:e.shadowMap.type,toneMapping:_e,decodeVideoTexture:$t&&L.map.isVideoTexture===!0&&te.getTransfer(L.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Ft&&L.emissiveMap.isVideoTexture===!0&&te.getTransfer(L.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===2,flipSided:L.side===1,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Zt&&L.extensions.clipCullDistance===!0&&m.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&L.extensions.multiDraw===!0||Bt)&&m.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:m.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Re.vertexUv1s=M.has(1),Re.vertexUv2s=M.has(2),Re.vertexUv3s=M.has(3),M.clear(),Re}function w(L){let U=[];if(L.shaderID)U.push(L.shaderID);else U.push(L.customVertexShaderID),U.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let k in L.defines)U.push(k),U.push(L.defines[k]);if(L.isRawShaderMaterial===!1)O(U,L),D(U,L),U.push(e.outputColorSpace);return U.push(L.customProgramCacheKey),U.join()}function O(L,U){L.push(U.precision),L.push(U.outputColorSpace),L.push(U.envMapMode),L.push(U.envMapCubeUVHeight),L.push(U.mapUv),L.push(U.alphaMapUv),L.push(U.lightMapUv),L.push(U.aoMapUv),L.push(U.bumpMapUv),L.push(U.normalMapUv),L.push(U.displacementMapUv),L.push(U.emissiveMapUv),L.push(U.metalnessMapUv),L.push(U.roughnessMapUv),L.push(U.anisotropyMapUv),L.push(U.clearcoatMapUv),L.push(U.clearcoatNormalMapUv),L.push(U.clearcoatRoughnessMapUv),L.push(U.iridescenceMapUv),L.push(U.iridescenceThicknessMapUv),L.push(U.sheenColorMapUv),L.push(U.sheenRoughnessMapUv),L.push(U.specularMapUv),L.push(U.specularColorMapUv),L.push(U.specularIntensityMapUv),L.push(U.transmissionMapUv),L.push(U.thicknessMapUv),L.push(U.combine),L.push(U.fogExp2),L.push(U.sizeAttenuation),L.push(U.morphTargetsCount),L.push(U.morphAttributeCount),L.push(U.numDirLights),L.push(U.numPointLights),L.push(U.numSpotLights),L.push(U.numSpotLightMaps),L.push(U.numHemiLights),L.push(U.numRectAreaLights),L.push(U.numDirLightShadows),L.push(U.numPointLightShadows),L.push(U.numSpotLightShadows),L.push(U.numSpotLightShadowsWithMaps),L.push(U.numLightProbes),L.push(U.shadowMapType),L.push(U.toneMapping),L.push(U.numClippingPlanes),L.push(U.numClipIntersection),L.push(U.depthPacking)}function D(L,U){if(v.disableAll(),U.supportsVertexTextures)v.enable(0);if(U.instancing)v.enable(1);if(U.instancingColor)v.enable(2);if(U.instancingMorph)v.enable(3);if(U.matcap)v.enable(4);if(U.envMap)v.enable(5);if(U.normalMapObjectSpace)v.enable(6);if(U.normalMapTangentSpace)v.enable(7);if(U.clearcoat)v.enable(8);if(U.iridescence)v.enable(9);if(U.alphaTest)v.enable(10);if(U.vertexColors)v.enable(11);if(U.vertexAlphas)v.enable(12);if(U.vertexUv1s)v.enable(13);if(U.vertexUv2s)v.enable(14);if(U.vertexUv3s)v.enable(15);if(U.vertexTangents)v.enable(16);if(U.anisotropy)v.enable(17);if(U.alphaHash)v.enable(18);if(U.batching)v.enable(19);if(U.dispersion)v.enable(20);if(U.batchingColor)v.enable(21);if(L.push(v.mask),v.disableAll(),U.fog)v.enable(0);if(U.useFog)v.enable(1);if(U.flatShading)v.enable(2);if(U.logarithmicDepthBuffer)v.enable(3);if(U.reverseDepthBuffer)v.enable(4);if(U.skinning)v.enable(5);if(U.morphTargets)v.enable(6);if(U.morphNormals)v.enable(7);if(U.morphColors)v.enable(8);if(U.premultipliedAlpha)v.enable(9);if(U.shadowMapEnabled)v.enable(10);if(U.doubleSided)v.enable(11);if(U.flipSided)v.enable(12);if(U.useDepthPacking)v.enable(13);if(U.dithering)v.enable(14);if(U.transmission)v.enable(15);if(U.sheen)v.enable(16);if(U.opaque)v.enable(17);if(U.pointsUvs)v.enable(18);if(U.decodeVideoTexture)v.enable(19);if(U.decodeVideoTextureEmissive)v.enable(20);if(U.alphaToCoverage)v.enable(21);L.push(v.mask)}function N(L){let U=R[L.type],k;if(U){let K=tn[U];k=Ul.clone(K.uniforms)}else k=L.uniforms;return k}function Q(L,U){let k;for(let K=0,nt=b.length;K<nt;K++){let tt=b[K];if(tt.cacheKey===U){k=tt,++k.usedTimes;break}}if(k===void 0)k=new Gd(e,U,L,_),b.push(k);return k}function B(L){if(--L.usedTimes===0){let U=b.indexOf(L);b[U]=b[b.length-1],b.pop(),L.destroy()}}function z(L){y.remove(L)}function j(){y.dispose()}return{getParameters:T,getProgramCacheKey:w,getUniforms:N,acquireProgram:Q,releaseProgram:B,releaseShaderCache:z,programs:b,dispose:j}}function Xd(){let e=new WeakMap;function h(x){return e.has(x)}function p(x){let v=e.get(x);if(v===void 0)v={},e.set(x,v);return v}function m(x){e.delete(x)}function g(x,v,y){e.get(x)[v]=y}function _(){e=new WeakMap}return{has:h,get:p,remove:m,update:g,dispose:_}}function qd(e,h){if(e.groupOrder!==h.groupOrder)return e.groupOrder-h.groupOrder;else if(e.renderOrder!==h.renderOrder)return e.renderOrder-h.renderOrder;else if(e.material.id!==h.material.id)return e.material.id-h.material.id;else if(e.z!==h.z)return e.z-h.z;else return e.id-h.id}function Oa(e,h){if(e.groupOrder!==h.groupOrder)return e.groupOrder-h.groupOrder;else if(e.renderOrder!==h.renderOrder)return e.renderOrder-h.renderOrder;else if(e.z!==h.z)return h.z-e.z;else return e.id-h.id}function Ba(){let e=[],h=0,p=[],m=[],g=[];function _(){h=0,p.length=0,m.length=0,g.length=0}function x(S,E,A,R,P,T){let w=e[h];if(w===void 0)w={id:S.id,object:S,geometry:E,material:A,groupOrder:R,renderOrder:S.renderOrder,z:P,group:T},e[h]=w;else w.id=S.id,w.object=S,w.geometry=E,w.material=A,w.groupOrder=R,w.renderOrder=S.renderOrder,w.z=P,w.group=T;return h++,w}function v(S,E,A,R,P,T){let w=x(S,E,A,R,P,T);if(A.transmission>0)m.push(w);else if(A.transparent===!0)g.push(w);else p.push(w)}function y(S,E,A,R,P,T){let w=x(S,E,A,R,P,T);if(A.transmission>0)m.unshift(w);else if(A.transparent===!0)g.unshift(w);else p.unshift(w)}function M(S,E){if(p.length>1)p.sort(S||qd);if(m.length>1)m.sort(E||Oa);if(g.length>1)g.sort(E||Oa)}function b(){for(let S=h,E=e.length;S<E;S++){let A=e[S];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:p,transmissive:m,transparent:g,init:_,push:v,unshift:y,finish:b,sort:M}}function Yd(){let e=new WeakMap;function h(m,g){let _=e.get(m),x;if(_===void 0)x=new Ba,e.set(m,[x]);else if(g>=_.length)x=new Ba,_.push(x);else x=_[g];return x}function p(){e=new WeakMap}return{get:h,dispose:p}}function Zd(){let e={};return{get:function(h){if(e[h.id]!==void 0)return e[h.id];let p;switch(h.type){case"DirectionalLight":p={direction:new H,color:new Qt};break;case"SpotLight":p={position:new H,direction:new H,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":p={position:new H,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":p={direction:new H,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":p={color:new Qt,position:new H,halfWidth:new H,halfHeight:new H};break}return e[h.id]=p,p}}}function Jd(){let e={};return{get:function(h){if(e[h.id]!==void 0)return e[h.id];let p;switch(h.type){case"DirectionalLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1000};break}return e[h.id]=p,p}}}var $d=0;function Kd(e,h){return(h.castShadow?2:0)-(e.castShadow?2:0)+(h.map?1:0)-(e.map?1:0)}function jd(e){let h=new Zd,p=Jd(),m={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let M=0;M<9;M++)m.probe.push(new H);let g=new H,_=new fe,x=new fe;function v(M){let b=0,S=0,E=0;for(let L=0;L<9;L++)m.probe[L].set(0,0,0);let A=0,R=0,P=0,T=0,w=0,O=0,D=0,N=0,Q=0,B=0,z=0;M.sort(Kd);for(let L=0,U=M.length;L<U;L++){let k=M[L],{color:K,intensity:nt,distance:tt}=k,ht=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)b+=K.r*nt,S+=K.g*nt,E+=K.b*nt;else if(k.isLightProbe){for(let st=0;st<9;st++)m.probe[st].addScaledVector(k.sh.coefficients[st],nt);z++}else if(k.isDirectionalLight){let st=h.get(k);if(st.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let dt=k.shadow,et=p.get(k);et.shadowIntensity=dt.intensity,et.shadowBias=dt.bias,et.shadowNormalBias=dt.normalBias,et.shadowRadius=dt.radius,et.shadowMapSize=dt.mapSize,m.directionalShadow[A]=et,m.directionalShadowMap[A]=ht,m.directionalShadowMatrix[A]=k.shadow.matrix,O++}m.directional[A]=st,A++}else if(k.isSpotLight){let st=h.get(k);st.position.setFromMatrixPosition(k.matrixWorld),st.color.copy(K).multiplyScalar(nt),st.distance=tt,st.coneCos=Math.cos(k.angle),st.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),st.decay=k.decay,m.spot[P]=st;let dt=k.shadow;if(k.map){if(m.spotLightMap[Q]=k.map,Q++,dt.updateMatrices(k),k.castShadow)B++}if(m.spotLightMatrix[P]=dt.matrix,k.castShadow){let et=p.get(k);et.shadowIntensity=dt.intensity,et.shadowBias=dt.bias,et.shadowNormalBias=dt.normalBias,et.shadowRadius=dt.radius,et.shadowMapSize=dt.mapSize,m.spotShadow[P]=et,m.spotShadowMap[P]=ht,N++}P++}else if(k.isRectAreaLight){let st=h.get(k);st.color.copy(K).multiplyScalar(nt),st.halfWidth.set(k.width*0.5,0,0),st.halfHeight.set(0,k.height*0.5,0),m.rectArea[T]=st,T++}else if(k.isPointLight){let st=h.get(k);if(st.color.copy(k.color).multiplyScalar(k.intensity),st.distance=k.distance,st.decay=k.decay,k.castShadow){let dt=k.shadow,et=p.get(k);et.shadowIntensity=dt.intensity,et.shadowBias=dt.bias,et.shadowNormalBias=dt.normalBias,et.shadowRadius=dt.radius,et.shadowMapSize=dt.mapSize,et.shadowCameraNear=dt.camera.near,et.shadowCameraFar=dt.camera.far,m.pointShadow[R]=et,m.pointShadowMap[R]=ht,m.pointShadowMatrix[R]=k.shadow.matrix,D++}m.point[R]=st,R++}else if(k.isHemisphereLight){let st=h.get(k);st.skyColor.copy(k.color).multiplyScalar(nt),st.groundColor.copy(k.groundColor).multiplyScalar(nt),m.hemi[w]=st,w++}}if(T>0)if(e.has("OES_texture_float_linear")===!0)m.rectAreaLTC1=xt.LTC_FLOAT_1,m.rectAreaLTC2=xt.LTC_FLOAT_2;else m.rectAreaLTC1=xt.LTC_HALF_1,m.rectAreaLTC2=xt.LTC_HALF_2;m.ambient[0]=b,m.ambient[1]=S,m.ambient[2]=E;let j=m.hash;if(j.directionalLength!==A||j.pointLength!==R||j.spotLength!==P||j.rectAreaLength!==T||j.hemiLength!==w||j.numDirectionalShadows!==O||j.numPointShadows!==D||j.numSpotShadows!==N||j.numSpotMaps!==Q||j.numLightProbes!==z)m.directional.length=A,m.spot.length=P,m.rectArea.length=T,m.point.length=R,m.hemi.length=w,m.directionalShadow.length=O,m.directionalShadowMap.length=O,m.pointShadow.length=D,m.pointShadowMap.length=D,m.spotShadow.length=N,m.spotShadowMap.length=N,m.directionalShadowMatrix.length=O,m.pointShadowMatrix.length=D,m.spotLightMatrix.length=N+Q-B,m.spotLightMap.length=Q,m.numSpotLightShadowsWithMaps=B,m.numLightProbes=z,j.directionalLength=A,j.pointLength=R,j.spotLength=P,j.rectAreaLength=T,j.hemiLength=w,j.numDirectionalShadows=O,j.numPointShadows=D,j.numSpotShadows=N,j.numSpotMaps=Q,j.numLightProbes=z,m.version=$d++}function y(M,b){let S=0,E=0,A=0,R=0,P=0,T=b.matrixWorldInverse;for(let w=0,O=M.length;w<O;w++){let D=M[w];if(D.isDirectionalLight){let N=m.directional[S];N.direction.setFromMatrixPosition(D.matrixWorld),g.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(g),N.direction.transformDirection(T),S++}else if(D.isSpotLight){let N=m.spot[A];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(T),N.direction.setFromMatrixPosition(D.matrixWorld),g.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(g),N.direction.transformDirection(T),A++}else if(D.isRectAreaLight){let N=m.rectArea[R];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(T),x.identity(),_.copy(D.matrixWorld),_.premultiply(T),x.extractRotation(_),N.halfWidth.set(D.width*0.5,0,0),N.halfHeight.set(0,D.height*0.5,0),N.halfWidth.applyMatrix4(x),N.halfHeight.applyMatrix4(x),R++}else if(D.isPointLight){let N=m.point[E];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(T),E++}else if(D.isHemisphereLight){let N=m.hemi[P];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(T),P++}}}return{setup:v,setupView:y,state:m}}function za(e){let h=new jd(e),p=[],m=[];function g(b){M.camera=b,p.length=0,m.length=0}function _(b){p.push(b)}function x(b){m.push(b)}function v(){h.setup(p)}function y(b){h.setupView(p,b)}let M={lightsArray:p,shadowsArray:m,camera:null,lights:h,transmissionRenderTarget:{}};return{init:g,state:M,setupLights:v,setupLightsView:y,pushLight:_,pushShadow:x}}function Qd(e){let h=new WeakMap;function p(g,_=0){let x=h.get(g),v;if(x===void 0)v=new za(e),h.set(g,[v]);else if(_>=x.length)v=new za(e),x.push(v);else v=x[_];return v}function m(){h=new WeakMap}return{get:p,dispose:m}}class Mo extends zn{static get type(){return"MeshDepthMaterial"}constructor(e){super();this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class So extends zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super();this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}var tf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ef=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nf(e,h,p){let m=new gs,g=new bt,_=new bt,x=new xe,v=new Mo({depthPacking:3201}),y=new So,M={},b=p.maxTextureSize,S={[0]:1,[1]:0,[2]:2},E=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:tf,fragmentShader:ef}),A=E.clone();A.defines.HORIZONTAL_PASS=1;let R=new Oe;R.setAttribute("position",new Je(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let P=new Te(R,E),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let w=this.type;this.render=function(B,z,j){if(T.enabled===!1)return;if(T.autoUpdate===!1&&T.needsUpdate===!1)return;if(B.length===0)return;let L=e.getRenderTarget(),U=e.getActiveCubeFace(),k=e.getActiveMipmapLevel(),K=e.state;K.setBlending(0),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let nt=w!==3&&this.type===3,tt=w===3&&this.type!==3;for(let ht=0,st=B.length;ht<st;ht++){let dt=B[ht],et=dt.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;g.copy(et.mapSize);let vt=et.getFrameExtents();if(g.multiply(vt),_.copy(et.mapSize),g.x>b||g.y>b){if(g.x>b)_.x=Math.floor(b/vt.x),g.x=_.x*vt.x,et.mapSize.x=_.x;if(g.y>b)_.y=Math.floor(b/vt.y),g.y=_.y*vt.y,et.mapSize.y=_.y}if(et.map===null||nt===!0||tt===!0){let zt=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(et.map!==null)et.map.dispose();et.map=new En(g.x,g.y,zt),et.map.texture.name=dt.name+".shadowMap",et.camera.updateProjectionMatrix()}e.setRenderTarget(et.map),e.clear();let Et=et.getViewportCount();for(let zt=0;zt<Et;zt++){let it=et.getViewport(zt);x.set(_.x*it.x,_.y*it.y,_.x*it.z,_.y*it.w),K.viewport(x),et.updateMatrices(dt,zt),m=et.getFrustum(),N(z,j,et.camera,dt,this.type)}if(et.isPointLightShadow!==!0&&this.type===3)O(et,j);et.needsUpdate=!1}w=this.type,T.needsUpdate=!1,e.setRenderTarget(L,U,k)};function O(B,z){let j=h.update(P);if(E.defines.VSM_SAMPLES!==B.blurSamples)E.defines.VSM_SAMPLES=B.blurSamples,A.defines.VSM_SAMPLES=B.blurSamples,E.needsUpdate=!0,A.needsUpdate=!0;if(B.mapPass===null)B.mapPass=new En(g.x,g.y);E.uniforms.shadow_pass.value=B.map.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,e.setRenderTarget(B.mapPass),e.clear(),e.renderBufferDirect(z,null,j,E,P,null),A.uniforms.shadow_pass.value=B.mapPass.texture,A.uniforms.resolution.value=B.mapSize,A.uniforms.radius.value=B.radius,e.setRenderTarget(B.map),e.clear(),e.renderBufferDirect(z,null,j,A,P,null)}function D(B,z,j,L){let U=null,k=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)U=k;else if(U=j.isPointLight===!0?y:v,e.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){let K=U.uuid,nt=z.uuid,tt=M[K];if(tt===void 0)tt={},M[K]=tt;let ht=tt[nt];if(ht===void 0)ht=U.clone(),tt[nt]=ht,z.addEventListener("dispose",Q);U=ht}if(U.visible=z.visible,U.wireframe=z.wireframe,L===3)U.side=z.shadowSide!==null?z.shadowSide:z.side;else U.side=z.shadowSide!==null?z.shadowSide:S[z.side];if(U.alphaMap=z.alphaMap,U.alphaTest=z.alphaTest,U.map=z.map,U.clipShadows=z.clipShadows,U.clippingPlanes=z.clippingPlanes,U.clipIntersection=z.clipIntersection,U.displacementMap=z.displacementMap,U.displacementScale=z.displacementScale,U.displacementBias=z.displacementBias,U.wireframeLinewidth=z.wireframeLinewidth,U.linewidth=z.linewidth,j.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let K=e.properties.get(U);K.light=j}return U}function N(B,z,j,L,U){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)){if((B.castShadow||B.receiveShadow&&U===3)&&(!B.frustumCulled||m.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);let nt=h.update(B),tt=B.material;if(Array.isArray(tt)){let ht=nt.groups;for(let st=0,dt=ht.length;st<dt;st++){let et=ht[st],vt=tt[et.materialIndex];if(vt&&vt.visible){let Et=D(B,vt,L,U);B.onBeforeShadow(e,B,z,j,nt,Et,et),e.renderBufferDirect(j,null,nt,Et,B,et),B.onAfterShadow(e,B,z,j,nt,Et,et)}}}else if(tt.visible){let ht=D(B,tt,L,U);B.onBeforeShadow(e,B,z,j,nt,ht,null),e.renderBufferDirect(j,null,nt,ht,B,null),B.onAfterShadow(e,B,z,j,nt,ht,null)}}}let K=B.children;for(let nt=0,tt=K.length;nt<tt;nt++)N(K[nt],z,j,L,U)}function Q(B){B.target.removeEventListener("dispose",Q);for(let j in M){let L=M[j],U=B.target.uuid;if(U in L)L[U].dispose(),delete L[U]}}}var sf={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function rf(e,h){function p(){let G=!1,ft=new xe,ot=null,lt=new xe(0,0,0,0);return{setMask:function(Tt){if(ot!==Tt&&!G)e.colorMask(Tt,Tt,Tt,Tt),ot=Tt},setLocked:function(Tt){G=Tt},setClear:function(Tt,Mt,Zt,_e,Re){if(Re===!0)Tt*=_e,Mt*=_e,Zt*=_e;if(ft.set(Tt,Mt,Zt,_e),lt.equals(ft)===!1)e.clearColor(Tt,Mt,Zt,_e),lt.copy(ft)},reset:function(){G=!1,ot=null,lt.set(-1,0,0,0)}}}function m(){let G=!1,ft=!1,ot=null,lt=null,Tt=null;return{setReversed:function(Mt){if(ft!==Mt){let Zt=h.get("EXT_clip_control");if(ft)Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT);else Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);let _e=Tt;Tt=null,this.setClear(_e)}ft=Mt},getReversed:function(){return ft},setTest:function(Mt){if(Mt)gt(e.DEPTH_TEST);else It(e.DEPTH_TEST)},setMask:function(Mt){if(ot!==Mt&&!G)e.depthMask(Mt),ot=Mt},setFunc:function(Mt){if(ft)Mt=sf[Mt];if(lt!==Mt){switch(Mt){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}lt=Mt}},setLocked:function(Mt){G=Mt},setClear:function(Mt){if(Tt!==Mt){if(ft)Mt=1-Mt;e.clearDepth(Mt),Tt=Mt}},reset:function(){G=!1,ot=null,lt=null,Tt=null,ft=!1}}}function g(){let G=!1,ft=null,ot=null,lt=null,Tt=null,Mt=null,Zt=null,_e=null,Re=null;return{setTest:function(ne){if(!G)if(ne)gt(e.STENCIL_TEST);else It(e.STENCIL_TEST)},setMask:function(ne){if(ft!==ne&&!G)e.stencilMask(ne),ft=ne},setFunc:function(ne,rn,Ke){if(ot!==ne||lt!==rn||Tt!==Ke)e.stencilFunc(ne,rn,Ke),ot=ne,lt=rn,Tt=Ke},setOp:function(ne,rn,Ke){if(Mt!==ne||Zt!==rn||_e!==Ke)e.stencilOp(ne,rn,Ke),Mt=ne,Zt=rn,_e=Ke},setLocked:function(ne){G=ne},setClear:function(ne){if(Re!==ne)e.clearStencil(ne),Re=ne},reset:function(){G=!1,ft=null,ot=null,lt=null,Tt=null,Mt=null,Zt=null,_e=null,Re=null}}}let _=new p,x=new m,v=new g,y=new WeakMap,M=new WeakMap,b={},S={},E=new WeakMap,A=[],R=null,P=!1,T=null,w=null,O=null,D=null,N=null,Q=null,B=null,z=new Qt(0,0,0),j=0,L=!1,U=null,k=null,K=null,nt=null,tt=null,ht=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,dt=0,et=e.getParameter(e.VERSION);if(et.indexOf("WebGL")!==-1)dt=parseFloat(/^WebGL (\d)/.exec(et)[1]),st=dt>=1;else if(et.indexOf("OpenGL ES")!==-1)dt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),st=dt>=2;let vt=null,Et={},zt=e.getParameter(e.SCISSOR_BOX),it=e.getParameter(e.VIEWPORT),q=new xe().fromArray(zt),at=new xe().fromArray(it);function _t(G,ft,ot,lt){let Tt=new Uint8Array(4),Mt=e.createTexture();e.bindTexture(G,Mt),e.texParameteri(G,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(G,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Zt=0;Zt<ot;Zt++)if(G===e.TEXTURE_3D||G===e.TEXTURE_2D_ARRAY)e.texImage3D(ft,0,e.RGBA,1,1,lt,0,e.RGBA,e.UNSIGNED_BYTE,Tt);else e.texImage2D(ft+Zt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Tt);return Mt}let wt={};wt[e.TEXTURE_2D]=_t(e.TEXTURE_2D,e.TEXTURE_2D,1),wt[e.TEXTURE_CUBE_MAP]=_t(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[e.TEXTURE_2D_ARRAY]=_t(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),wt[e.TEXTURE_3D]=_t(e.TEXTURE_3D,e.TEXTURE_3D,1,1),_.setClear(0,0,0,1),x.setClear(1),v.setClear(0),gt(e.DEPTH_TEST),x.setFunc(3),ae(!1),Pt(1),gt(e.CULL_FACE),Ae(0);function gt(G){if(b[G]!==!0)e.enable(G),b[G]=!0}function It(G){if(b[G]!==!1)e.disable(G),b[G]=!1}function kt(G,ft){if(S[G]!==ft){if(e.bindFramebuffer(G,ft),S[G]=ft,G===e.DRAW_FRAMEBUFFER)S[e.FRAMEBUFFER]=ft;if(G===e.FRAMEBUFFER)S[e.DRAW_FRAMEBUFFER]=ft;return!0}return!1}function Bt(G,ft){let ot=A,lt=!1;if(G){if(ot=E.get(ft),ot===void 0)ot=[],E.set(ft,ot);let Tt=G.textures;if(ot.length!==Tt.length||ot[0]!==e.COLOR_ATTACHMENT0){for(let Mt=0,Zt=Tt.length;Mt<Zt;Mt++)ot[Mt]=e.COLOR_ATTACHMENT0+Mt;ot.length=Tt.length,lt=!0}}else if(ot[0]!==e.BACK)ot[0]=e.BACK,lt=!0;if(lt)e.drawBuffers(ot)}function $t(G){if(R!==G)return e.useProgram(G),R=G,!0;return!1}let ce={[100]:e.FUNC_ADD,[101]:e.FUNC_SUBTRACT,[102]:e.FUNC_REVERSE_SUBTRACT};ce[103]=e.MIN,ce[104]=e.MAX;let X={[200]:e.ZERO,[201]:e.ONE,[202]:e.SRC_COLOR,[204]:e.SRC_ALPHA,[210]:e.SRC_ALPHA_SATURATE,[208]:e.DST_COLOR,[206]:e.DST_ALPHA,[203]:e.ONE_MINUS_SRC_COLOR,[205]:e.ONE_MINUS_SRC_ALPHA,[209]:e.ONE_MINUS_DST_COLOR,[207]:e.ONE_MINUS_DST_ALPHA,[211]:e.CONSTANT_COLOR,[212]:e.ONE_MINUS_CONSTANT_COLOR,[213]:e.CONSTANT_ALPHA,[214]:e.ONE_MINUS_CONSTANT_ALPHA};function Ae(G,ft,ot,lt,Tt,Mt,Zt,_e,Re,ne){if(G===0){if(P===!0)It(e.BLEND),P=!1;return}if(P===!1)gt(e.BLEND),P=!0;if(G!==5){if(G!==T||ne!==L){if(w!==100||N!==100)e.blendEquation(e.FUNC_ADD),w=100,N=100;if(ne)switch(G){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}O=null,D=null,Q=null,B=null,z.set(0,0,0),j=0,T=G,L=ne}return}if(Tt=Tt||ft,Mt=Mt||ot,Zt=Zt||lt,ft!==w||Tt!==N)e.blendEquationSeparate(ce[ft],ce[Tt]),w=ft,N=Tt;if(ot!==O||lt!==D||Mt!==Q||Zt!==B)e.blendFuncSeparate(X[ot],X[lt],X[Mt],X[Zt]),O=ot,D=lt,Q=Mt,B=Zt;if(_e.equals(z)===!1||Re!==j)e.blendColor(_e.r,_e.g,_e.b,Re),z.copy(_e),j=Re;T=G,L=!1}function re(G,ft){G.side===2?It(e.CULL_FACE):gt(e.CULL_FACE);let ot=G.side===1;if(ft)ot=!ot;ae(ot),G.blending===1&&G.transparent===!1?Ae(0):Ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),x.setFunc(G.depthFunc),x.setTest(G.depthTest),x.setMask(G.depthWrite),_.setMask(G.colorWrite);let lt=G.stencilWrite;if(v.setTest(lt),lt)v.setMask(G.stencilWriteMask),v.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),v.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass);Ft(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?gt(e.SAMPLE_ALPHA_TO_COVERAGE):It(e.SAMPLE_ALPHA_TO_COVERAGE)}function ae(G){if(U!==G){if(G)e.frontFace(e.CW);else e.frontFace(e.CCW);U=G}}function Pt(G){if(G!==0){if(gt(e.CULL_FACE),G!==k)if(G===1)e.cullFace(e.BACK);else if(G===2)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else It(e.CULL_FACE);k=G}function ge(G){if(G!==K){if(st)e.lineWidth(G);K=G}}function Ft(G,ft,ot){if(G){if(gt(e.POLYGON_OFFSET_FILL),nt!==ft||tt!==ot)e.polygonOffset(ft,ot),nt=ft,tt=ot}else It(e.POLYGON_OFFSET_FILL)}function Wt(G){if(G)gt(e.SCISSOR_TEST);else It(e.SCISSOR_TEST)}function F(G){if(G===void 0)G=e.TEXTURE0+ht-1;if(vt!==G)e.activeTexture(G),vt=G}function C(G,ft,ot){if(ot===void 0)if(vt===null)ot=e.TEXTURE0+ht-1;else ot=vt;let lt=Et[ot];if(lt===void 0)lt={type:void 0,texture:void 0},Et[ot]=lt;if(lt.type!==G||lt.texture!==ft){if(vt!==ot)e.activeTexture(ot),vt=ot;e.bindTexture(G,ft||wt[G]),lt.type=G,lt.texture=ft}}function Y(){let G=Et[vt];if(G!==void 0&&G.type!==void 0)e.bindTexture(G.type,null),G.type=void 0,G.texture=void 0}function ct(){try{e.compressedTexImage2D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{e.compressedTexImage3D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{e.texSubImage2D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{e.texSubImage3D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{e.texStorage2D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{e.texStorage3D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{e.texImage2D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{e.texImage3D.apply(e,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ht(G){if(q.equals(G)===!1)e.scissor(G.x,G.y,G.z,G.w),q.copy(G)}function Ct(G){if(at.equals(G)===!1)e.viewport(G.x,G.y,G.z,G.w),at.copy(G)}function Xt(G,ft){let ot=M.get(ft);if(ot===void 0)ot=new WeakMap,M.set(ft,ot);let lt=ot.get(G);if(lt===void 0)lt=e.getUniformBlockIndex(ft,G.name),ot.set(G,lt)}function Kt(G,ft){let lt=M.get(ft).get(G);if(y.get(ft)!==lt)e.uniformBlockBinding(ft,lt,G.__bindingPointIndex),y.set(ft,lt)}function pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),x.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),b={},vt=null,Et={},S={},E=new WeakMap,A=[],R=null,P=!1,T=null,w=null,O=null,D=null,N=null,Q=null,B=null,z=new Qt(0,0,0),j=0,L=!1,U=null,k=null,K=null,nt=null,tt=null,q.set(0,0,e.canvas.width,e.canvas.height),at.set(0,0,e.canvas.width,e.canvas.height),_.reset(),x.reset(),v.reset()}return{buffers:{color:_,depth:x,stencil:v},enable:gt,disable:It,bindFramebuffer:kt,drawBuffers:Bt,useProgram:$t,setBlending:Ae,setMaterial:re,setFlipSided:ae,setCullFace:Pt,setLineWidth:ge,setPolygonOffset:Ft,setScissorTest:Wt,activeTexture:F,bindTexture:C,unbindTexture:Y,compressedTexImage2D:ct,compressedTexImage3D:ut,texImage2D:At,texImage3D:jt,updateUBOMapping:Xt,uniformBlockBinding:Kt,texStorage2D:Vt,texStorage3D:pt,texSubImage2D:rt,texSubImage3D:Ot,compressedTexSubImage2D:yt,compressedTexSubImage3D:Rt,scissor:Ht,viewport:Ct,reset:pe}}function ka(e,h,p,m){let g=af(m);switch(p){case 1021:return e*h;case 1024:return e*h;case 1025:return e*h*2;case 1028:return e*h/g.components*g.byteLength;case 1029:return e*h/g.components*g.byteLength;case 1030:return e*h*2/g.components*g.byteLength;case 1031:return e*h*2/g.components*g.byteLength;case 1022:return e*h*3/g.components*g.byteLength;case 1023:return e*h*4/g.components*g.byteLength;case 1033:return e*h*4/g.components*g.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((h+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((h+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(h,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(h,8)/2;case 36196:case 37492:return Math.floor((e+3)/4)*Math.floor((h+3)/4)*8;case 37496:return Math.floor((e+3)/4)*Math.floor((h+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((h+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((h+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((h+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((h+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((h+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((h+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((h+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((h+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((h+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((h+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((h+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((h+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((h+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((h+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(h/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(h/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(h/4)*16}throw Error(`Unable to determine texture byte length for ${p} format.`)}function af(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function of(e,h,p,m,g,_,x){let v=h.has("WEBGL_multisampled_render_to_texture")?h.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new bt,b=new WeakMap,S,E=new WeakMap,A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(F){}function R(F,C){return A?new OffscreenCanvas(F,C):fs("canvas")}function P(F,C,Y){let ct=1,ut=Wt(F);if(ut.width>Y||ut.height>Y)ct=Y/Math.max(ut.width,ut.height);if(ct<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let rt=Math.floor(ct*ut.width),Ot=Math.floor(ct*ut.height);if(S===void 0)S=R(rt,Ot);let yt=C?R(rt,Ot):S;return yt.width=rt,yt.height=Ot,yt.getContext("2d").drawImage(F,0,0,rt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+rt+"x"+Ot+")."),yt}else{if("data"in F)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+").");return F}return F}function T(F){return F.generateMipmaps}function w(F){e.generateMipmap(F)}function O(F){if(F.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(F.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function D(F,C,Y,ct,ut=!1){if(F!==null){if(e[F]!==void 0)return e[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let rt=C;if(C===e.RED){if(Y===e.FLOAT)rt=e.R32F;if(Y===e.HALF_FLOAT)rt=e.R16F;if(Y===e.UNSIGNED_BYTE)rt=e.R8}if(C===e.RED_INTEGER){if(Y===e.UNSIGNED_BYTE)rt=e.R8UI;if(Y===e.UNSIGNED_SHORT)rt=e.R16UI;if(Y===e.UNSIGNED_INT)rt=e.R32UI;if(Y===e.BYTE)rt=e.R8I;if(Y===e.SHORT)rt=e.R16I;if(Y===e.INT)rt=e.R32I}if(C===e.RG){if(Y===e.FLOAT)rt=e.RG32F;if(Y===e.HALF_FLOAT)rt=e.RG16F;if(Y===e.UNSIGNED_BYTE)rt=e.RG8}if(C===e.RG_INTEGER){if(Y===e.UNSIGNED_BYTE)rt=e.RG8UI;if(Y===e.UNSIGNED_SHORT)rt=e.RG16UI;if(Y===e.UNSIGNED_INT)rt=e.RG32UI;if(Y===e.BYTE)rt=e.RG8I;if(Y===e.SHORT)rt=e.RG16I;if(Y===e.INT)rt=e.RG32I}if(C===e.RGB_INTEGER){if(Y===e.UNSIGNED_BYTE)rt=e.RGB8UI;if(Y===e.UNSIGNED_SHORT)rt=e.RGB16UI;if(Y===e.UNSIGNED_INT)rt=e.RGB32UI;if(Y===e.BYTE)rt=e.RGB8I;if(Y===e.SHORT)rt=e.RGB16I;if(Y===e.INT)rt=e.RGB32I}if(C===e.RGBA_INTEGER){if(Y===e.UNSIGNED_BYTE)rt=e.RGBA8UI;if(Y===e.UNSIGNED_SHORT)rt=e.RGBA16UI;if(Y===e.UNSIGNED_INT)rt=e.RGBA32UI;if(Y===e.BYTE)rt=e.RGBA8I;if(Y===e.SHORT)rt=e.RGBA16I;if(Y===e.INT)rt=e.RGBA32I}if(C===e.RGB){if(Y===e.UNSIGNED_INT_5_9_9_9_REV)rt=e.RGB9_E5}if(C===e.RGBA){let Ot=ut?"linear":te.getTransfer(ct);if(Y===e.FLOAT)rt=e.RGBA32F;if(Y===e.HALF_FLOAT)rt=e.RGBA16F;if(Y===e.UNSIGNED_BYTE)rt=Ot==="srgb"?e.SRGB8_ALPHA8:e.RGBA8;if(Y===e.UNSIGNED_SHORT_4_4_4_4)rt=e.RGBA4;if(Y===e.UNSIGNED_SHORT_5_5_5_1)rt=e.RGB5_A1}if(rt===e.R16F||rt===e.R32F||rt===e.RG16F||rt===e.RG32F||rt===e.RGBA16F||rt===e.RGBA32F)h.get("EXT_color_buffer_float");return rt}function N(F,C){let Y;if(F){if(C===null||C===1014||C===1020)Y=e.DEPTH24_STENCIL8;else if(C===1015)Y=e.DEPTH32F_STENCIL8;else if(C===1012)Y=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(C===null||C===1014||C===1020)Y=e.DEPTH_COMPONENT24;else if(C===1015)Y=e.DEPTH_COMPONENT32F;else if(C===1012)Y=e.DEPTH_COMPONENT16;return Y}function Q(F,C){if(T(F)===!0||F.isFramebufferTexture&&F.minFilter!==1003&&F.minFilter!==1006)return Math.log2(Math.max(C.width,C.height))+1;else if(F.mipmaps!==void 0&&F.mipmaps.length>0)return F.mipmaps.length;else if(F.isCompressedTexture&&Array.isArray(F.image))return C.mipmaps.length;else return 1}function B(F){let C=F.target;if(C.removeEventListener("dispose",B),j(C),C.isVideoTexture)b.delete(C)}function z(F){let C=F.target;C.removeEventListener("dispose",z),U(C)}function j(F){let C=m.get(F);if(C.__webglInit===void 0)return;let Y=F.source,ct=E.get(Y);if(ct){let ut=ct[C.__cacheKey];if(ut.usedTimes--,ut.usedTimes===0)L(F);if(Object.keys(ct).length===0)E.delete(Y)}m.remove(F)}function L(F){let C=m.get(F);e.deleteTexture(C.__webglTexture);let Y=F.source,ct=E.get(Y);delete ct[C.__cacheKey],x.memory.textures--}function U(F){let C=m.get(F);if(F.depthTexture)F.depthTexture.dispose(),m.remove(F.depthTexture);if(F.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(C.__webglFramebuffer[ct]))for(let ut=0;ut<C.__webglFramebuffer[ct].length;ut++)e.deleteFramebuffer(C.__webglFramebuffer[ct][ut]);else e.deleteFramebuffer(C.__webglFramebuffer[ct]);if(C.__webglDepthbuffer)e.deleteRenderbuffer(C.__webglDepthbuffer[ct])}else{if(Array.isArray(C.__webglFramebuffer))for(let ct=0;ct<C.__webglFramebuffer.length;ct++)e.deleteFramebuffer(C.__webglFramebuffer[ct]);else e.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer)e.deleteRenderbuffer(C.__webglDepthbuffer);if(C.__webglMultisampledFramebuffer)e.deleteFramebuffer(C.__webglMultisampledFramebuffer);if(C.__webglColorRenderbuffer){for(let ct=0;ct<C.__webglColorRenderbuffer.length;ct++)if(C.__webglColorRenderbuffer[ct])e.deleteRenderbuffer(C.__webglColorRenderbuffer[ct])}if(C.__webglDepthRenderbuffer)e.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let Y=F.textures;for(let ct=0,ut=Y.length;ct<ut;ct++){let rt=m.get(Y[ct]);if(rt.__webglTexture)e.deleteTexture(rt.__webglTexture),x.memory.textures--;m.remove(Y[ct])}m.remove(F)}let k=0;function K(){k=0}function nt(){let F=k;if(F>=g.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+g.maxTextures);return k+=1,F}function tt(F){let C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function ht(F,C){let Y=m.get(F);if(F.isVideoTexture)ge(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){let ct=F.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(Y,F,C);return}}p.bindTexture(e.TEXTURE_2D,Y.__webglTexture,e.TEXTURE0+C)}function st(F,C){let Y=m.get(F);if(F.version>0&&Y.__version!==F.version){at(Y,F,C);return}p.bindTexture(e.TEXTURE_2D_ARRAY,Y.__webglTexture,e.TEXTURE0+C)}function dt(F,C){let Y=m.get(F);if(F.version>0&&Y.__version!==F.version){at(Y,F,C);return}p.bindTexture(e.TEXTURE_3D,Y.__webglTexture,e.TEXTURE0+C)}function et(F,C){let Y=m.get(F);if(F.version>0&&Y.__version!==F.version){_t(Y,F,C);return}p.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture,e.TEXTURE0+C)}let vt={[1000]:e.REPEAT,[1001]:e.CLAMP_TO_EDGE,[1002]:e.MIRRORED_REPEAT},Et={[1003]:e.NEAREST,[1004]:e.NEAREST_MIPMAP_NEAREST,[1005]:e.NEAREST_MIPMAP_LINEAR,[1006]:e.LINEAR,[1007]:e.LINEAR_MIPMAP_NEAREST,[1008]:e.LINEAR_MIPMAP_LINEAR},zt={[512]:e.NEVER,[519]:e.ALWAYS,[513]:e.LESS,[515]:e.LEQUAL,[514]:e.EQUAL,[518]:e.GEQUAL,[516]:e.GREATER,[517]:e.NOTEQUAL};function it(F,C){if(C.type===1015&&h.has("OES_texture_float_linear")===!1&&(C.magFilter===1006||C.magFilter===1007||C.magFilter===1005||C.magFilter===1008||C.minFilter===1006||C.minFilter===1007||C.minFilter===1005||C.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(F,e.TEXTURE_WRAP_S,vt[C.wrapS]),e.texParameteri(F,e.TEXTURE_WRAP_T,vt[C.wrapT]),F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY)e.texParameteri(F,e.TEXTURE_WRAP_R,vt[C.wrapR]);if(e.texParameteri(F,e.TEXTURE_MAG_FILTER,Et[C.magFilter]),e.texParameteri(F,e.TEXTURE_MIN_FILTER,Et[C.minFilter]),C.compareFunction)e.texParameteri(F,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(F,e.TEXTURE_COMPARE_FUNC,zt[C.compareFunction]);if(h.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===1003)return;if(C.minFilter!==1005&&C.minFilter!==1008)return;if(C.type===1015&&h.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||m.get(C).__currentAnisotropy){let Y=h.get("EXT_texture_filter_anisotropic");e.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,g.getMaxAnisotropy())),m.get(C).__currentAnisotropy=C.anisotropy}}}function q(F,C){let Y=!1;if(F.__webglInit===void 0)F.__webglInit=!0,C.addEventListener("dispose",B);let ct=C.source,ut=E.get(ct);if(ut===void 0)ut={},E.set(ct,ut);let rt=tt(C);if(rt!==F.__cacheKey){if(ut[rt]===void 0)ut[rt]={texture:e.createTexture(),usedTimes:0},x.memory.textures++,Y=!0;ut[rt].usedTimes++;let Ot=ut[F.__cacheKey];if(Ot!==void 0){if(ut[F.__cacheKey].usedTimes--,Ot.usedTimes===0)L(C)}F.__cacheKey=rt,F.__webglTexture=ut[rt].texture}return Y}function at(F,C,Y){let ct=e.TEXTURE_2D;if(C.isDataArrayTexture||C.isCompressedArrayTexture)ct=e.TEXTURE_2D_ARRAY;if(C.isData3DTexture)ct=e.TEXTURE_3D;let ut=q(F,C),rt=C.source;p.bindTexture(ct,F.__webglTexture,e.TEXTURE0+Y);let Ot=m.get(rt);if(rt.version!==Ot.__version||ut===!0){p.activeTexture(e.TEXTURE0+Y);let yt=te.getPrimaries(te.workingColorSpace),Rt=C.colorSpace===""?null:te.getPrimaries(C.colorSpace),Vt=C.colorSpace===""||yt===Rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,C.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let pt=P(C.image,!1,g.maxTextureSize);pt=Ft(C,pt);let At=_.convert(C.format,C.colorSpace),jt=_.convert(C.type),Ht=D(C.internalFormat,At,jt,C.colorSpace,C.isVideoTexture);it(ct,C);let Ct,Xt=C.mipmaps,Kt=C.isVideoTexture!==!0,pe=Ot.__version===void 0||ut===!0,G=rt.dataReady,ft=Q(C,pt);if(C.isDepthTexture){if(Ht=N(C.format===1027,C.type),pe)if(Kt)p.texStorage2D(e.TEXTURE_2D,1,Ht,pt.width,pt.height);else p.texImage2D(e.TEXTURE_2D,0,Ht,pt.width,pt.height,0,At,jt,null)}else if(C.isDataTexture)if(Xt.length>0){if(Kt&&pe)p.texStorage2D(e.TEXTURE_2D,ft,Ht,Xt[0].width,Xt[0].height);for(let ot=0,lt=Xt.length;ot<lt;ot++)if(Ct=Xt[ot],Kt){if(G)p.texSubImage2D(e.TEXTURE_2D,ot,0,0,Ct.width,Ct.height,At,jt,Ct.data)}else p.texImage2D(e.TEXTURE_2D,ot,Ht,Ct.width,Ct.height,0,At,jt,Ct.data);C.generateMipmaps=!1}else if(Kt){if(pe)p.texStorage2D(e.TEXTURE_2D,ft,Ht,pt.width,pt.height);if(G)p.texSubImage2D(e.TEXTURE_2D,0,0,0,pt.width,pt.height,At,jt,pt.data)}else p.texImage2D(e.TEXTURE_2D,0,Ht,pt.width,pt.height,0,At,jt,pt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){if(Kt&&pe)p.texStorage3D(e.TEXTURE_2D_ARRAY,ft,Ht,Xt[0].width,Xt[0].height,pt.depth);for(let ot=0,lt=Xt.length;ot<lt;ot++)if(Ct=Xt[ot],C.format!==1023)if(At!==null)if(Kt){if(G)if(C.layerUpdates.size>0){let Tt=ka(Ct.width,Ct.height,C.format,C.type);for(let Mt of C.layerUpdates){let Zt=Ct.data.subarray(Mt*Tt/Ct.data.BYTES_PER_ELEMENT,(Mt+1)*Tt/Ct.data.BYTES_PER_ELEMENT);p.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ot,0,0,Mt,Ct.width,Ct.height,1,At,Zt)}C.clearLayerUpdates()}else p.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ot,0,0,0,Ct.width,Ct.height,pt.depth,At,Ct.data)}else p.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ot,Ht,Ct.width,Ct.height,pt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Kt){if(G)p.texSubImage3D(e.TEXTURE_2D_ARRAY,ot,0,0,0,Ct.width,Ct.height,pt.depth,At,jt,Ct.data)}else p.texImage3D(e.TEXTURE_2D_ARRAY,ot,Ht,Ct.width,Ct.height,pt.depth,0,At,jt,Ct.data)}else{if(Kt&&pe)p.texStorage2D(e.TEXTURE_2D,ft,Ht,Xt[0].width,Xt[0].height);for(let ot=0,lt=Xt.length;ot<lt;ot++)if(Ct=Xt[ot],C.format!==1023)if(At!==null)if(Kt){if(G)p.compressedTexSubImage2D(e.TEXTURE_2D,ot,0,0,Ct.width,Ct.height,At,Ct.data)}else p.compressedTexImage2D(e.TEXTURE_2D,ot,Ht,Ct.width,Ct.height,0,Ct.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Kt){if(G)p.texSubImage2D(e.TEXTURE_2D,ot,0,0,Ct.width,Ct.height,At,jt,Ct.data)}else p.texImage2D(e.TEXTURE_2D,ot,Ht,Ct.width,Ct.height,0,At,jt,Ct.data)}else if(C.isDataArrayTexture)if(Kt){if(pe)p.texStorage3D(e.TEXTURE_2D_ARRAY,ft,Ht,pt.width,pt.height,pt.depth);if(G)if(C.layerUpdates.size>0){let ot=ka(pt.width,pt.height,C.format,C.type);for(let lt of C.layerUpdates){let Tt=pt.data.subarray(lt*ot/pt.data.BYTES_PER_ELEMENT,(lt+1)*ot/pt.data.BYTES_PER_ELEMENT);p.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,lt,pt.width,pt.height,1,At,jt,Tt)}C.clearLayerUpdates()}else p.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,At,jt,pt.data)}else p.texImage3D(e.TEXTURE_2D_ARRAY,0,Ht,pt.width,pt.height,pt.depth,0,At,jt,pt.data);else if(C.isData3DTexture)if(Kt){if(pe)p.texStorage3D(e.TEXTURE_3D,ft,Ht,pt.width,pt.height,pt.depth);if(G)p.texSubImage3D(e.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,At,jt,pt.data)}else p.texImage3D(e.TEXTURE_3D,0,Ht,pt.width,pt.height,pt.depth,0,At,jt,pt.data);else if(C.isFramebufferTexture){if(pe)if(Kt)p.texStorage2D(e.TEXTURE_2D,ft,Ht,pt.width,pt.height);else{let ot=pt.width,lt=pt.height;for(let Tt=0;Tt<ft;Tt++)p.texImage2D(e.TEXTURE_2D,Tt,Ht,ot,lt,0,At,jt,null),ot>>=1,lt>>=1}}else if(Xt.length>0){if(Kt&&pe){let ot=Wt(Xt[0]);p.texStorage2D(e.TEXTURE_2D,ft,Ht,ot.width,ot.height)}for(let ot=0,lt=Xt.length;ot<lt;ot++)if(Ct=Xt[ot],Kt){if(G)p.texSubImage2D(e.TEXTURE_2D,ot,0,0,At,jt,Ct)}else p.texImage2D(e.TEXTURE_2D,ot,Ht,At,jt,Ct);C.generateMipmaps=!1}else if(Kt){if(pe){let ot=Wt(pt);p.texStorage2D(e.TEXTURE_2D,ft,Ht,ot.width,ot.height)}if(G)p.texSubImage2D(e.TEXTURE_2D,0,0,0,At,jt,pt)}else p.texImage2D(e.TEXTURE_2D,0,Ht,At,jt,pt);if(T(C))w(ct);if(Ot.__version=rt.version,C.onUpdate)C.onUpdate(C)}F.__version=C.version}function _t(F,C,Y){if(C.image.length!==6)return;let ct=q(F,C),ut=C.source;p.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+Y);let rt=m.get(ut);if(ut.version!==rt.__version||ct===!0){p.activeTexture(e.TEXTURE0+Y);let Ot=te.getPrimaries(te.workingColorSpace),yt=C.colorSpace===""?null:te.getPrimaries(C.colorSpace),Rt=C.colorSpace===""||Ot===yt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,C.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Vt=C.isCompressedTexture||C.image[0].isCompressedTexture,pt=C.image[0]&&C.image[0].isDataTexture,At=[];for(let lt=0;lt<6;lt++){if(!Vt&&!pt)At[lt]=P(C.image[lt],!0,g.maxCubemapSize);else At[lt]=pt?C.image[lt].image:C.image[lt];At[lt]=Ft(C,At[lt])}let jt=At[0],Ht=_.convert(C.format,C.colorSpace),Ct=_.convert(C.type),Xt=D(C.internalFormat,Ht,Ct,C.colorSpace),Kt=C.isVideoTexture!==!0,pe=rt.__version===void 0||ct===!0,G=ut.dataReady,ft=Q(C,jt);it(e.TEXTURE_CUBE_MAP,C);let ot;if(Vt){if(Kt&&pe)p.texStorage2D(e.TEXTURE_CUBE_MAP,ft,Xt,jt.width,jt.height);for(let lt=0;lt<6;lt++){ot=At[lt].mipmaps;for(let Tt=0;Tt<ot.length;Tt++){let Mt=ot[Tt];if(C.format!==1023)if(Ht!==null)if(Kt){if(G)p.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,0,0,Mt.width,Mt.height,Ht,Mt.data)}else p.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,Xt,Mt.width,Mt.height,0,Mt.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Kt){if(G)p.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,0,0,Mt.width,Mt.height,Ht,Ct,Mt.data)}else p.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,Xt,Mt.width,Mt.height,0,Ht,Ct,Mt.data)}}}else{if(ot=C.mipmaps,Kt&&pe){if(ot.length>0)ft++;let lt=Wt(At[0]);p.texStorage2D(e.TEXTURE_CUBE_MAP,ft,Xt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(pt){if(Kt){if(G)p.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,At[lt].width,At[lt].height,Ht,Ct,At[lt].data)}else p.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Xt,At[lt].width,At[lt].height,0,Ht,Ct,At[lt].data);for(let Tt=0;Tt<ot.length;Tt++){let Zt=ot[Tt].image[lt].image;if(Kt){if(G)p.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,0,0,Zt.width,Zt.height,Ht,Ct,Zt.data)}else p.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,Xt,Zt.width,Zt.height,0,Ht,Ct,Zt.data)}}else{if(Kt){if(G)p.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ht,Ct,At[lt])}else p.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Xt,Ht,Ct,At[lt]);for(let Tt=0;Tt<ot.length;Tt++){let Mt=ot[Tt];if(Kt){if(G)p.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,0,0,Ht,Ct,Mt.image[lt])}else p.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,Xt,Ht,Ct,Mt.image[lt])}}}if(T(C))w(e.TEXTURE_CUBE_MAP);if(rt.__version=ut.version,C.onUpdate)C.onUpdate(C)}F.__version=C.version}function wt(F,C,Y,ct,ut,rt){let Ot=_.convert(Y.format,Y.colorSpace),yt=_.convert(Y.type),Rt=D(Y.internalFormat,Ot,yt,Y.colorSpace),Vt=m.get(C),pt=m.get(Y);if(pt.__renderTarget=C,!Vt.__hasExternalTextures){let At=Math.max(1,C.width>>rt),jt=Math.max(1,C.height>>rt);if(ut===e.TEXTURE_3D||ut===e.TEXTURE_2D_ARRAY)p.texImage3D(ut,rt,Rt,At,jt,C.depth,0,Ot,yt,null);else p.texImage2D(ut,rt,Rt,At,jt,0,Ot,yt,null)}if(p.bindFramebuffer(e.FRAMEBUFFER,F),Pt(C))v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ct,ut,pt.__webglTexture,0,ae(C));else if(ut===e.TEXTURE_2D||ut>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,ct,ut,pt.__webglTexture,rt);p.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(F,C,Y){if(e.bindRenderbuffer(e.RENDERBUFFER,F),C.depthBuffer){let ct=C.depthTexture,ut=ct&&ct.isDepthTexture?ct.type:null,rt=N(C.stencilBuffer,ut),Ot=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,yt=ae(C);if(Pt(C))v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,yt,rt,C.width,C.height);else if(Y)e.renderbufferStorageMultisample(e.RENDERBUFFER,yt,rt,C.width,C.height);else e.renderbufferStorage(e.RENDERBUFFER,rt,C.width,C.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Ot,e.RENDERBUFFER,F)}else{let ct=C.textures;for(let ut=0;ut<ct.length;ut++){let rt=ct[ut],Ot=_.convert(rt.format,rt.colorSpace),yt=_.convert(rt.type),Rt=D(rt.internalFormat,Ot,yt,rt.colorSpace),Vt=ae(C);if(Y&&Pt(C)===!1)e.renderbufferStorageMultisample(e.RENDERBUFFER,Vt,Rt,C.width,C.height);else if(Pt(C))v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Vt,Rt,C.width,C.height);else e.renderbufferStorage(e.RENDERBUFFER,Rt,C.width,C.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function It(F,C){if(C&&C.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(p.bindFramebuffer(e.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ct=m.get(C.depthTexture);if(ct.__renderTarget=C,!ct.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0;ht(C.depthTexture,0);let ut=ct.__webglTexture,rt=ae(C);if(C.depthTexture.format===1026)if(Pt(C))v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ut,0,rt);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ut,0);else if(C.depthTexture.format===1027)if(Pt(C))v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ut,0,rt);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ut,0);else throw Error("Unknown depthTexture format")}function kt(F){let C=m.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){let ct=F.depthTexture;if(C.__depthDisposeCallback)C.__depthDisposeCallback();if(ct){let ut=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ct.removeEventListener("dispose",ut)};ct.addEventListener("dispose",ut),C.__depthDisposeCallback=ut}C.__boundDepthTexture=ct}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(Y)throw Error("target.depthTexture not supported in Cube render targets");It(C.__webglFramebuffer,F)}else if(Y){C.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(p.bindFramebuffer(e.FRAMEBUFFER,C.__webglFramebuffer[ct]),C.__webglDepthbuffer[ct]===void 0)C.__webglDepthbuffer[ct]=e.createRenderbuffer(),gt(C.__webglDepthbuffer[ct],F,!1);else{let ut=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=C.__webglDepthbuffer[ct];e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,ut,e.RENDERBUFFER,rt)}}else if(p.bindFramebuffer(e.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=e.createRenderbuffer(),gt(C.__webglDepthbuffer,F,!1);else{let ct=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=C.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,ct,e.RENDERBUFFER,ut)}p.bindFramebuffer(e.FRAMEBUFFER,null)}function Bt(F,C,Y){let ct=m.get(F);if(C!==void 0)wt(ct.__webglFramebuffer,F,F.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(Y!==void 0)kt(F)}function $t(F){let C=F.texture,Y=m.get(F),ct=m.get(C);F.addEventListener("dispose",z);let ut=F.textures,rt=F.isWebGLCubeRenderTarget===!0,Ot=ut.length>1;if(!Ot){if(ct.__webglTexture===void 0)ct.__webglTexture=e.createTexture();ct.__version=C.version,x.memory.textures++}if(rt){Y.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer[yt]=[];for(let Rt=0;Rt<C.mipmaps.length;Rt++)Y.__webglFramebuffer[yt][Rt]=e.createFramebuffer()}else Y.__webglFramebuffer[yt]=e.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer=[];for(let yt=0;yt<C.mipmaps.length;yt++)Y.__webglFramebuffer[yt]=e.createFramebuffer()}else Y.__webglFramebuffer=e.createFramebuffer();if(Ot)for(let yt=0,Rt=ut.length;yt<Rt;yt++){let Vt=m.get(ut[yt]);if(Vt.__webglTexture===void 0)Vt.__webglTexture=e.createTexture(),x.memory.textures++}if(F.samples>0&&Pt(F)===!1){Y.__webglMultisampledFramebuffer=e.createFramebuffer(),Y.__webglColorRenderbuffer=[],p.bindFramebuffer(e.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let yt=0;yt<ut.length;yt++){let Rt=ut[yt];Y.__webglColorRenderbuffer[yt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,Y.__webglColorRenderbuffer[yt]);let Vt=_.convert(Rt.format,Rt.colorSpace),pt=_.convert(Rt.type),At=D(Rt.internalFormat,Vt,pt,Rt.colorSpace,F.isXRRenderTarget===!0),jt=ae(F);e.renderbufferStorageMultisample(e.RENDERBUFFER,jt,At,F.width,F.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.RENDERBUFFER,Y.__webglColorRenderbuffer[yt])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),F.depthBuffer)Y.__webglDepthRenderbuffer=e.createRenderbuffer(),gt(Y.__webglDepthRenderbuffer,F,!0);p.bindFramebuffer(e.FRAMEBUFFER,null)}}if(rt){p.bindTexture(e.TEXTURE_CUBE_MAP,ct.__webglTexture),it(e.TEXTURE_CUBE_MAP,C);for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Rt=0;Rt<C.mipmaps.length;Rt++)wt(Y.__webglFramebuffer[yt][Rt],F,C,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt);else wt(Y.__webglFramebuffer[yt],F,C,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);if(T(C))w(e.TEXTURE_CUBE_MAP);p.unbindTexture()}else if(Ot){for(let yt=0,Rt=ut.length;yt<Rt;yt++){let Vt=ut[yt],pt=m.get(Vt);if(p.bindTexture(e.TEXTURE_2D,pt.__webglTexture),it(e.TEXTURE_2D,Vt),wt(Y.__webglFramebuffer,F,Vt,e.COLOR_ATTACHMENT0+yt,e.TEXTURE_2D,0),T(Vt))w(e.TEXTURE_2D)}p.unbindTexture()}else{let yt=e.TEXTURE_2D;if(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)yt=F.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(p.bindTexture(yt,ct.__webglTexture),it(yt,C),C.mipmaps&&C.mipmaps.length>0)for(let Rt=0;Rt<C.mipmaps.length;Rt++)wt(Y.__webglFramebuffer[Rt],F,C,e.COLOR_ATTACHMENT0,yt,Rt);else wt(Y.__webglFramebuffer,F,C,e.COLOR_ATTACHMENT0,yt,0);if(T(C))w(yt);p.unbindTexture()}if(F.depthBuffer)kt(F)}function ce(F){let C=F.textures;for(let Y=0,ct=C.length;Y<ct;Y++){let ut=C[Y];if(T(ut)){let rt=O(F),Ot=m.get(ut).__webglTexture;p.bindTexture(rt,Ot),w(rt),p.unbindTexture()}}}let X=[],Ae=[];function re(F){if(F.samples>0){if(Pt(F)===!1){let{textures:C,width:Y,height:ct}=F,ut=e.COLOR_BUFFER_BIT,rt=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ot=m.get(F),yt=C.length>1;if(yt)for(let Rt=0;Rt<C.length;Rt++)p.bindFramebuffer(e.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,null),p.bindFramebuffer(e.FRAMEBUFFER,Ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,null,0);p.bindFramebuffer(e.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),p.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Rt=0;Rt<C.length;Rt++){if(F.resolveDepthBuffer){if(F.depthBuffer)ut|=e.DEPTH_BUFFER_BIT;if(F.stencilBuffer&&F.resolveStencilBuffer)ut|=e.STENCIL_BUFFER_BIT}if(yt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ot.__webglColorRenderbuffer[Rt]);let Vt=m.get(C[Rt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Vt,0)}if(e.blitFramebuffer(0,0,Y,ct,0,0,Y,ct,ut,e.NEAREST),y===!0){if(X.length=0,Ae.length=0,X.push(e.COLOR_ATTACHMENT0+Rt),F.depthBuffer&&F.resolveDepthBuffer===!1)X.push(rt),Ae.push(rt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,X)}}if(p.bindFramebuffer(e.READ_FRAMEBUFFER,null),p.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),yt)for(let Rt=0;Rt<C.length;Rt++){p.bindFramebuffer(e.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,Ot.__webglColorRenderbuffer[Rt]);let Vt=m.get(C[Rt]).__webglTexture;p.bindFramebuffer(e.FRAMEBUFFER,Ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,Vt,0)}p.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&y){let C=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[C])}}}function ae(F){return Math.min(g.maxSamples,F.samples)}function Pt(F){let C=m.get(F);return F.samples>0&&h.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ge(F){let C=x.render.frame;if(b.get(F)!==C)b.set(F,C),F.update()}function Ft(F,C){let{colorSpace:Y,format:ct,type:ut}=F;if(F.isCompressedTexture===!0||F.isVideoTexture===!0)return C;if(Y!=="srgb-linear"&&Y!=="")if(te.getTransfer(Y)==="srgb"){if(ct!==1023||ut!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",Y);return C}function Wt(F){if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement)M.width=F.naturalWidth||F.width,M.height=F.naturalHeight||F.height;else if(typeof VideoFrame<"u"&&F instanceof VideoFrame)M.width=F.displayWidth,M.height=F.displayHeight;else M.width=F.width,M.height=F.height;return M}this.allocateTextureUnit=nt,this.resetTextureUnits=K,this.setTexture2D=ht,this.setTexture2DArray=st,this.setTexture3D=dt,this.setTextureCube=et,this.rebindTextures=Bt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Pt}function lf(e,h){function p(m,g=""){let _,x=te.getTransfer(g);if(m===1009)return e.UNSIGNED_BYTE;if(m===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(m===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(m===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(m===1010)return e.BYTE;if(m===1011)return e.SHORT;if(m===1012)return e.UNSIGNED_SHORT;if(m===1013)return e.INT;if(m===1014)return e.UNSIGNED_INT;if(m===1015)return e.FLOAT;if(m===1016)return e.HALF_FLOAT;if(m===1021)return e.ALPHA;if(m===1022)return e.RGB;if(m===1023)return e.RGBA;if(m===1024)return e.LUMINANCE;if(m===1025)return e.LUMINANCE_ALPHA;if(m===1026)return e.DEPTH_COMPONENT;if(m===1027)return e.DEPTH_STENCIL;if(m===1028)return e.RED;if(m===1029)return e.RED_INTEGER;if(m===1030)return e.RG;if(m===1031)return e.RG_INTEGER;if(m===1033)return e.RGBA_INTEGER;if(m===33776||m===33777||m===33778||m===33779)if(x==="srgb")if(_=h.get("WEBGL_compressed_texture_s3tc_srgb"),_!==null){if(m===33776)return _.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(_=h.get("WEBGL_compressed_texture_s3tc"),_!==null){if(m===33776)return _.COMPRESSED_RGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(m===35840||m===35841||m===35842||m===35843)if(_=h.get("WEBGL_compressed_texture_pvrtc"),_!==null){if(m===35840)return _.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(m===35841)return _.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(m===35842)return _.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(m===35843)return _.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(m===36196||m===37492||m===37496)if(_=h.get("WEBGL_compressed_texture_etc"),_!==null){if(m===36196||m===37492)return x==="srgb"?_.COMPRESSED_SRGB8_ETC2:_.COMPRESSED_RGB8_ETC2;if(m===37496)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:_.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(m===37808||m===37809||m===37810||m===37811||m===37812||m===37813||m===37814||m===37815||m===37816||m===37817||m===37818||m===37819||m===37820||m===37821)if(_=h.get("WEBGL_compressed_texture_astc"),_!==null){if(m===37808)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:_.COMPRESSED_RGBA_ASTC_4x4_KHR;if(m===37809)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:_.COMPRESSED_RGBA_ASTC_5x4_KHR;if(m===37810)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:_.COMPRESSED_RGBA_ASTC_5x5_KHR;if(m===37811)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:_.COMPRESSED_RGBA_ASTC_6x5_KHR;if(m===37812)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:_.COMPRESSED_RGBA_ASTC_6x6_KHR;if(m===37813)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:_.COMPRESSED_RGBA_ASTC_8x5_KHR;if(m===37814)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:_.COMPRESSED_RGBA_ASTC_8x6_KHR;if(m===37815)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:_.COMPRESSED_RGBA_ASTC_8x8_KHR;if(m===37816)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:_.COMPRESSED_RGBA_ASTC_10x5_KHR;if(m===37817)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:_.COMPRESSED_RGBA_ASTC_10x6_KHR;if(m===37818)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:_.COMPRESSED_RGBA_ASTC_10x8_KHR;if(m===37819)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:_.COMPRESSED_RGBA_ASTC_10x10_KHR;if(m===37820)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:_.COMPRESSED_RGBA_ASTC_12x10_KHR;if(m===37821)return x==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:_.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(m===36492||m===36494||m===36495)if(_=h.get("EXT_texture_compression_bptc"),_!==null){if(m===36492)return x==="srgb"?_.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:_.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(m===36494)return _.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(m===36495)return _.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(m===36283||m===36284||m===36285||m===36286)if(_=h.get("EXT_texture_compression_rgtc"),_!==null){if(m===36492)return _.COMPRESSED_RED_RGTC1_EXT;if(m===36284)return _.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(m===36285)return _.COMPRESSED_RED_GREEN_RGTC2_EXT;if(m===36286)return _.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(m===1020)return e.UNSIGNED_INT_24_8;return e[m]!==void 0?e[m]:null}return{convert:p}}class bo extends Ne{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}}class dn extends we{constructor(){super();this.isGroup=!0,this.type="Group"}}var cf={type:"move"};class ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let h=this._hand;if(h)for(let p of e.hand.values())this._getHandJoint(h,p)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,h,p){let m=null,g=null,_=null,x=this._targetRay,v=this._grip,y=this._hand;if(e&&h.session.visibilityState!=="visible-blurred"){if(y&&e.hand){_=!0;for(let R of e.hand.values()){let P=h.getJointPose(R,p),T=this._getHandJoint(y,R);if(P!==null)T.matrix.fromArray(P.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.matrixWorldNeedsUpdate=!0,T.jointRadius=P.radius;T.visible=P!==null}let M=y.joints["index-finger-tip"],b=y.joints["thumb-tip"],S=M.position.distanceTo(b.position),E=0.02,A=0.005;if(y.inputState.pinching&&S>E+A)y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!y.inputState.pinching&&S<=E-A)y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(v!==null&&e.gripSpace){if(g=h.getPose(e.gripSpace,p),g!==null){if(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,g.linearVelocity)v.hasLinearVelocity=!0,v.linearVelocity.copy(g.linearVelocity);else v.hasLinearVelocity=!1;if(g.angularVelocity)v.hasAngularVelocity=!0,v.angularVelocity.copy(g.angularVelocity);else v.hasAngularVelocity=!1}}if(x!==null){if(m=h.getPose(e.targetRaySpace,p),m===null&&g!==null)m=g;if(m!==null){if(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,m.linearVelocity)x.hasLinearVelocity=!0,x.linearVelocity.copy(m.linearVelocity);else x.hasLinearVelocity=!1;if(m.angularVelocity)x.hasAngularVelocity=!0,x.angularVelocity.copy(m.angularVelocity);else x.hasAngularVelocity=!1;this.dispatchEvent(cf)}}}if(x!==null)x.visible=m!==null;if(v!==null)v.visible=g!==null;if(y!==null)y.visible=_!==null;return this}_getHandJoint(e,h){if(e.joints[h.jointName]===void 0){let p=new dn;p.matrixAutoUpdate=!1,p.visible=!1,e.joints[h.jointName]=p,e.add(p)}return e.joints[h.jointName]}}var hf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Eo{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,h,p){if(this.texture===null){let m=new Fe,g=e.properties.get(m);if(g.__webglTexture=h.texture,h.depthNear!=p.depthNear||h.depthFar!=p.depthFar)this.depthNear=h.depthNear,this.depthFar=h.depthFar;this.texture=m}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let h=e.cameras[0].viewport,p=new pn({vertexShader:hf,fragmentShader:uf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:h.z},depthHeight:{value:h.w}}});this.mesh=new Te(new _s(20,20),p)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class To extends Tn{constructor(e,h){super();let p=this,m=null,g=1,_=null,x="local-floor",v=1,y=null,M=null,b=null,S=null,E=null,A=null,R=new Eo,P=h.getContextAttributes(),T=null,w=null,O=[],D=[],N=new bt,Q=null,B=new Ne;B.viewport=new xe;let z=new Ne;z.viewport=new xe;let j=[B,z],L=new bo,U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let at=O[q];if(at===void 0)at=new ds,O[q]=at;return at.getTargetRaySpace()},this.getControllerGrip=function(q){let at=O[q];if(at===void 0)at=new ds,O[q]=at;return at.getGripSpace()},this.getHand=function(q){let at=O[q];if(at===void 0)at=new ds,O[q]=at;return at.getHandSpace()};function K(q){let at=D.indexOf(q.inputSource);if(at===-1)return;let _t=O[at];if(_t!==void 0)_t.update(q.inputSource,q.frame,y||_),_t.dispatchEvent({type:q.type,data:q.inputSource})}function nt(){m.removeEventListener("select",K),m.removeEventListener("selectstart",K),m.removeEventListener("selectend",K),m.removeEventListener("squeeze",K),m.removeEventListener("squeezestart",K),m.removeEventListener("squeezeend",K),m.removeEventListener("end",nt),m.removeEventListener("inputsourceschange",tt);for(let q=0;q<O.length;q++){let at=D[q];if(at===null)continue;D[q]=null,O[q].disconnect(at)}U=null,k=null,R.reset(),e.setRenderTarget(T),E=null,S=null,b=null,m=null,w=null,it.stop(),p.isPresenting=!1,e.setPixelRatio(Q),e.setSize(N.width,N.height,!1),p.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){if(g=q,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){if(x=q,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return y||_},this.setReferenceSpace=function(q){y=q},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return b},this.getFrame=function(){return A},this.getSession=function(){return m},this.setSession=async function(q){if(m=q,m!==null){if(T=e.getRenderTarget(),m.addEventListener("select",K),m.addEventListener("selectstart",K),m.addEventListener("selectend",K),m.addEventListener("squeeze",K),m.addEventListener("squeezestart",K),m.addEventListener("squeezeend",K),m.addEventListener("end",nt),m.addEventListener("inputsourceschange",tt),P.xrCompatible!==!0)await h.makeXRCompatible();if(Q=e.getPixelRatio(),e.getSize(N),m.renderState.layers===void 0){let at={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:g};E=new XRWebGLLayer(m,h,at),m.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new En(E.framebufferWidth,E.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil})}else{let at=null,_t=null,wt=null;if(P.depth)wt=P.stencil?h.DEPTH24_STENCIL8:h.DEPTH_COMPONENT24,at=P.stencil?1027:1026,_t=P.stencil?1020:1014;let gt={colorFormat:h.RGBA8,depthFormat:wt,scaleFactor:g};b=new XRWebGLBinding(m,h),S=b.createProjectionLayer(gt),m.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),w=new En(S.textureWidth,S.textureHeight,{format:1023,type:1009,depthTexture:new br(S.textureWidth,S.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(v),y=null,_=await m.requestReferenceSpace(x),it.setContext(m),it.start(),p.isPresenting=!0,p.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(m!==null)return m.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function tt(q){for(let at=0;at<q.removed.length;at++){let _t=q.removed[at],wt=D.indexOf(_t);if(wt>=0)D[wt]=null,O[wt].disconnect(_t)}for(let at=0;at<q.added.length;at++){let _t=q.added[at],wt=D.indexOf(_t);if(wt===-1){for(let It=0;It<O.length;It++)if(It>=D.length){D.push(_t),wt=It;break}else if(D[It]===null){D[It]=_t,wt=It;break}if(wt===-1)break}let gt=O[wt];if(gt)gt.connect(_t)}}let ht=new H,st=new H;function dt(q,at,_t){ht.setFromMatrixPosition(at.matrixWorld),st.setFromMatrixPosition(_t.matrixWorld);let wt=ht.distanceTo(st),gt=at.projectionMatrix.elements,It=_t.projectionMatrix.elements,kt=gt[14]/(gt[10]-1),Bt=gt[14]/(gt[10]+1),$t=(gt[9]+1)/gt[5],ce=(gt[9]-1)/gt[5],X=(gt[8]-1)/gt[0],Ae=(It[8]+1)/It[0],re=kt*X,ae=kt*Ae,Pt=wt/(-X+Ae),ge=Pt*-X;if(at.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ge),q.translateZ(Pt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),gt[10]===-1)q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let Ft=kt+Pt,Wt=Bt+Pt,F=re-ge,C=ae+(wt-ge),Y=$t*Bt/Wt*Ft,ct=ce*Bt/Wt*Ft;q.projectionMatrix.makePerspective(F,C,Y,ct,Ft,Wt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,at){if(at===null)q.matrixWorld.copy(q.matrix);else q.matrixWorld.multiplyMatrices(at.matrixWorld,q.matrix);q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(m===null)return;let{near:at,far:_t}=q;if(R.texture!==null){if(R.depthNear>0)at=R.depthNear;if(R.depthFar>0)_t=R.depthFar}if(L.near=z.near=B.near=at,L.far=z.far=B.far=_t,U!==L.near||k!==L.far)m.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,k=L.far;B.layers.mask=q.layers.mask|2,z.layers.mask=q.layers.mask|4,L.layers.mask=B.layers.mask|z.layers.mask;let wt=q.parent,gt=L.cameras;et(L,wt);for(let It=0;It<gt.length;It++)et(gt[It],wt);if(gt.length===2)dt(L,B,z);else L.projectionMatrix.copy(B.projectionMatrix);vt(q,L,wt)};function vt(q,at,_t){if(_t===null)q.matrix.copy(at.matrixWorld);else q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(at.matrixWorld);if(q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse),q.isPerspectiveCamera)q.fov=wi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1}this.getCamera=function(){return L},this.getFoveation=function(){if(S===null&&E===null)return;return v},this.setFoveation=function(q){if(v=q,S!==null)S.fixedFoveation=q;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=q},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(L)};let Et=null;function zt(q,at){if(M=at.getViewerPose(y||_),A=at,M!==null){let _t=M.views;if(E!==null)e.setRenderTargetFramebuffer(w,E.framebuffer),e.setRenderTarget(w);let wt=!1;if(_t.length!==L.cameras.length)L.cameras.length=0,wt=!0;for(let It=0;It<_t.length;It++){let kt=_t[It],Bt=null;if(E!==null)Bt=E.getViewport(kt);else{let ce=b.getViewSubImage(S,kt);if(Bt=ce.viewport,It===0)e.setRenderTargetTextures(w,ce.colorTexture,S.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(w)}let $t=j[It];if($t===void 0)$t=new Ne,$t.layers.enable(It),$t.viewport=new xe,j[It]=$t;if($t.matrix.fromArray(kt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(kt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),It===0)L.matrix.copy($t.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);if(wt===!0)L.cameras.push($t)}let gt=m.enabledFeatures;if(gt&&gt.includes("depth-sensing")){let It=b.getDepthInformation(_t[0]);if(It&&It.isValid&&It.texture)R.init(e,It,m.renderState)}}for(let _t=0;_t<O.length;_t++){let wt=D[_t],gt=O[_t];if(wt!==null&&gt!==void 0)gt.update(wt,at,y||_)}if(Et)Et(q,at);if(at.detectedPlanes)p.dispatchEvent({type:"planesdetected",data:at});A=null}let it=new ho;it.setAnimationLoop(zt),this.setAnimationLoop=function(q){Et=q},this.dispose=function(){}}}var Dn=new en,df=new fe;function ff(e,h){function p(T,w){if(T.matrixAutoUpdate===!0)T.updateMatrix();w.value.copy(T.matrix)}function m(T,w){if(w.color.getRGB(T.fogColor.value,oo(e)),w.isFog)T.fogNear.value=w.near,T.fogFar.value=w.far;else if(w.isFogExp2)T.fogDensity.value=w.density}function g(T,w,O,D,N){if(w.isMeshBasicMaterial)_(T,w);else if(w.isMeshLambertMaterial)_(T,w);else if(w.isMeshToonMaterial)_(T,w),S(T,w);else if(w.isMeshPhongMaterial)_(T,w),b(T,w);else if(w.isMeshStandardMaterial){if(_(T,w),E(T,w),w.isMeshPhysicalMaterial)A(T,w,N)}else if(w.isMeshMatcapMaterial)_(T,w),R(T,w);else if(w.isMeshDepthMaterial)_(T,w);else if(w.isMeshDistanceMaterial)_(T,w),P(T,w);else if(w.isMeshNormalMaterial)_(T,w);else if(w.isLineBasicMaterial){if(x(T,w),w.isLineDashedMaterial)v(T,w)}else if(w.isPointsMaterial)y(T,w,O,D);else if(w.isSpriteMaterial)M(T,w);else if(w.isShadowMaterial)T.color.value.copy(w.color),T.opacity.value=w.opacity;else if(w.isShaderMaterial)w.uniformsNeedUpdate=!1}function _(T,w){if(T.opacity.value=w.opacity,w.color)T.diffuse.value.copy(w.color);if(w.emissive)T.emissive.value.copy(w.emissive).multiplyScalar(w.emissiveIntensity);if(w.map)T.map.value=w.map,p(w.map,T.mapTransform);if(w.alphaMap)T.alphaMap.value=w.alphaMap,p(w.alphaMap,T.alphaMapTransform);if(w.bumpMap){if(T.bumpMap.value=w.bumpMap,p(w.bumpMap,T.bumpMapTransform),T.bumpScale.value=w.bumpScale,w.side===1)T.bumpScale.value*=-1}if(w.normalMap){if(T.normalMap.value=w.normalMap,p(w.normalMap,T.normalMapTransform),T.normalScale.value.copy(w.normalScale),w.side===1)T.normalScale.value.negate()}if(w.displacementMap)T.displacementMap.value=w.displacementMap,p(w.displacementMap,T.displacementMapTransform),T.displacementScale.value=w.displacementScale,T.displacementBias.value=w.displacementBias;if(w.emissiveMap)T.emissiveMap.value=w.emissiveMap,p(w.emissiveMap,T.emissiveMapTransform);if(w.specularMap)T.specularMap.value=w.specularMap,p(w.specularMap,T.specularMapTransform);if(w.alphaTest>0)T.alphaTest.value=w.alphaTest;let O=h.get(w),{envMap:D,envMapRotation:N}=O;if(D){if(T.envMap.value=D,Dn.copy(N),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1)Dn.y*=-1,Dn.z*=-1;T.envMapRotation.value.setFromMatrix4(df.makeRotationFromEuler(Dn)),T.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=w.reflectivity,T.ior.value=w.ior,T.refractionRatio.value=w.refractionRatio}if(w.lightMap)T.lightMap.value=w.lightMap,T.lightMapIntensity.value=w.lightMapIntensity,p(w.lightMap,T.lightMapTransform);if(w.aoMap)T.aoMap.value=w.aoMap,T.aoMapIntensity.value=w.aoMapIntensity,p(w.aoMap,T.aoMapTransform)}function x(T,w){if(T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,w.map)T.map.value=w.map,p(w.map,T.mapTransform)}function v(T,w){T.dashSize.value=w.dashSize,T.totalSize.value=w.dashSize+w.gapSize,T.scale.value=w.scale}function y(T,w,O,D){if(T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,T.size.value=w.size*O,T.scale.value=D*0.5,w.map)T.map.value=w.map,p(w.map,T.uvTransform);if(w.alphaMap)T.alphaMap.value=w.alphaMap,p(w.alphaMap,T.alphaMapTransform);if(w.alphaTest>0)T.alphaTest.value=w.alphaTest}function M(T,w){if(T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,T.rotation.value=w.rotation,w.map)T.map.value=w.map,p(w.map,T.mapTransform);if(w.alphaMap)T.alphaMap.value=w.alphaMap,p(w.alphaMap,T.alphaMapTransform);if(w.alphaTest>0)T.alphaTest.value=w.alphaTest}function b(T,w){T.specular.value.copy(w.specular),T.shininess.value=Math.max(w.shininess,0.0001)}function S(T,w){if(w.gradientMap)T.gradientMap.value=w.gradientMap}function E(T,w){if(T.metalness.value=w.metalness,w.metalnessMap)T.metalnessMap.value=w.metalnessMap,p(w.metalnessMap,T.metalnessMapTransform);if(T.roughness.value=w.roughness,w.roughnessMap)T.roughnessMap.value=w.roughnessMap,p(w.roughnessMap,T.roughnessMapTransform);if(w.envMap)T.envMapIntensity.value=w.envMapIntensity}function A(T,w,O){if(T.ior.value=w.ior,w.sheen>0){if(T.sheenColor.value.copy(w.sheenColor).multiplyScalar(w.sheen),T.sheenRoughness.value=w.sheenRoughness,w.sheenColorMap)T.sheenColorMap.value=w.sheenColorMap,p(w.sheenColorMap,T.sheenColorMapTransform);if(w.sheenRoughnessMap)T.sheenRoughnessMap.value=w.sheenRoughnessMap,p(w.sheenRoughnessMap,T.sheenRoughnessMapTransform)}if(w.clearcoat>0){if(T.clearcoat.value=w.clearcoat,T.clearcoatRoughness.value=w.clearcoatRoughness,w.clearcoatMap)T.clearcoatMap.value=w.clearcoatMap,p(w.clearcoatMap,T.clearcoatMapTransform);if(w.clearcoatRoughnessMap)T.clearcoatRoughnessMap.value=w.clearcoatRoughnessMap,p(w.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform);if(w.clearcoatNormalMap){if(T.clearcoatNormalMap.value=w.clearcoatNormalMap,p(w.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(w.clearcoatNormalScale),w.side===1)T.clearcoatNormalScale.value.negate()}}if(w.dispersion>0)T.dispersion.value=w.dispersion;if(w.iridescence>0){if(T.iridescence.value=w.iridescence,T.iridescenceIOR.value=w.iridescenceIOR,T.iridescenceThicknessMinimum.value=w.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=w.iridescenceThicknessRange[1],w.iridescenceMap)T.iridescenceMap.value=w.iridescenceMap,p(w.iridescenceMap,T.iridescenceMapTransform);if(w.iridescenceThicknessMap)T.iridescenceThicknessMap.value=w.iridescenceThicknessMap,p(w.iridescenceThicknessMap,T.iridescenceThicknessMapTransform)}if(w.transmission>0){if(T.transmission.value=w.transmission,T.transmissionSamplerMap.value=O.texture,T.transmissionSamplerSize.value.set(O.width,O.height),w.transmissionMap)T.transmissionMap.value=w.transmissionMap,p(w.transmissionMap,T.transmissionMapTransform);if(T.thickness.value=w.thickness,w.thicknessMap)T.thicknessMap.value=w.thicknessMap,p(w.thicknessMap,T.thicknessMapTransform);T.attenuationDistance.value=w.attenuationDistance,T.attenuationColor.value.copy(w.attenuationColor)}if(w.anisotropy>0){if(T.anisotropyVector.value.set(w.anisotropy*Math.cos(w.anisotropyRotation),w.anisotropy*Math.sin(w.anisotropyRotation)),w.anisotropyMap)T.anisotropyMap.value=w.anisotropyMap,p(w.anisotropyMap,T.anisotropyMapTransform)}if(T.specularIntensity.value=w.specularIntensity,T.specularColor.value.copy(w.specularColor),w.specularColorMap)T.specularColorMap.value=w.specularColorMap,p(w.specularColorMap,T.specularColorMapTransform);if(w.specularIntensityMap)T.specularIntensityMap.value=w.specularIntensityMap,p(w.specularIntensityMap,T.specularIntensityMapTransform)}function R(T,w){if(w.matcap)T.matcap.value=w.matcap}function P(T,w){let O=h.get(w).light;T.referencePosition.value.setFromMatrixPosition(O.matrixWorld),T.nearDistance.value=O.shadow.camera.near,T.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:m,refreshMaterialUniforms:g}}function pf(e,h,p,m){let g={},_={},x=[],v=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function y(O,D){let N=D.program;m.uniformBlockBinding(O,N)}function M(O,D){let N=g[O.id];if(N===void 0)R(O),N=b(O),g[O.id]=N,O.addEventListener("dispose",T);let Q=D.program;m.updateUBOMapping(O,Q);let B=h.render.frame;if(_[O.id]!==B)E(O),_[O.id]=B}function b(O){let D=S();O.__bindingPointIndex=D;let N=e.createBuffer(),{__size:Q,usage:B}=O;return e.bindBuffer(e.UNIFORM_BUFFER,N),e.bufferData(e.UNIFORM_BUFFER,Q,B),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,D,N),N}function S(){for(let O=0;O<v;O++)if(x.indexOf(O)===-1)return x.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(O){let D=g[O.id],{uniforms:N,__cache:Q}=O;e.bindBuffer(e.UNIFORM_BUFFER,D);for(let B=0,z=N.length;B<z;B++){let j=Array.isArray(N[B])?N[B]:[N[B]];for(let L=0,U=j.length;L<U;L++){let k=j[L];if(A(k,B,L,Q)===!0){let K=k.__offset,nt=Array.isArray(k.value)?k.value:[k.value],tt=0;for(let ht=0;ht<nt.length;ht++){let st=nt[ht],dt=P(st);if(typeof st==="number"||typeof st==="boolean")k.__data[0]=st,e.bufferSubData(e.UNIFORM_BUFFER,K+tt,k.__data);else if(st.isMatrix3)k.__data[0]=st.elements[0],k.__data[1]=st.elements[1],k.__data[2]=st.elements[2],k.__data[3]=0,k.__data[4]=st.elements[3],k.__data[5]=st.elements[4],k.__data[6]=st.elements[5],k.__data[7]=0,k.__data[8]=st.elements[6],k.__data[9]=st.elements[7],k.__data[10]=st.elements[8],k.__data[11]=0;else st.toArray(k.__data,tt),tt+=dt.storage/Float32Array.BYTES_PER_ELEMENT}e.bufferSubData(e.UNIFORM_BUFFER,K,k.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function A(O,D,N,Q){let B=O.value,z=D+"_"+N;if(Q[z]===void 0){if(typeof B==="number"||typeof B==="boolean")Q[z]=B;else Q[z]=B.clone();return!0}else{let j=Q[z];if(typeof B==="number"||typeof B==="boolean"){if(j!==B)return Q[z]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function R(O){let D=O.uniforms,N=0,Q=16;for(let z=0,j=D.length;z<j;z++){let L=Array.isArray(D[z])?D[z]:[D[z]];for(let U=0,k=L.length;U<k;U++){let K=L[U],nt=Array.isArray(K.value)?K.value:[K.value];for(let tt=0,ht=nt.length;tt<ht;tt++){let st=nt[tt],dt=P(st),et=N%Q,vt=et%dt.boundary,Et=et+vt;if(N+=vt,Et!==0&&Q-Et<dt.storage)N+=Q-Et;K.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=dt.storage}}}let B=N%Q;if(B>0)N+=Q-B;return O.__size=N,O.__cache={},this}function P(O){let D={boundary:0,storage:0};if(typeof O==="number"||typeof O==="boolean")D.boundary=4,D.storage=4;else if(O.isVector2)D.boundary=8,D.storage=8;else if(O.isVector3||O.isColor)D.boundary=16,D.storage=12;else if(O.isVector4)D.boundary=16,D.storage=16;else if(O.isMatrix3)D.boundary=48,D.storage=48;else if(O.isMatrix4)D.boundary=64,D.storage=64;else if(O.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O);return D}function T(O){let D=O.target;D.removeEventListener("dispose",T);let N=x.indexOf(D.__bindingPointIndex);x.splice(N,1),e.deleteBuffer(g[D.id]),delete g[D.id],delete _[D.id]}function w(){for(let O in g)e.deleteBuffer(g[O]);x=[],g={},_={}}return{bind:y,update:M,dispose:w}}class Er{constructor(e={}){let{canvas:h=_l(),context:p=null,depth:m=!0,stencil:g=!1,alpha:_=!1,antialias:x=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:y=!1,powerPreference:M="default",failIfMajorPerformanceCaveat:b=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let E;if(p!==null){if(typeof WebGLRenderingContext<"u"&&p instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=p.getContextAttributes().alpha}else E=_;let A=new Uint32Array(4),R=new Int32Array(4),P=null,T=null,w=[],O=[];this.domElement=h,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let D=this,N=!1,Q=0,B=0,z=null,j=-1,L=null,U=new xe,k=new xe,K=null,nt=new Qt(0),tt=0,{width:ht,height:st}=h,dt=1,et=null,vt=null,Et=new xe(0,0,ht,st),zt=new xe(0,0,ht,st),it=!1,q=new gs,at=!1,_t=!1,wt=new fe,gt=new fe,It=new H,kt=new xe,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ce(){return z===null?dt:1}let X=p;function Ae(I,V){return h.getContext(I,V)}try{let I={alpha:!0,depth:m,stencil:g,antialias:x,premultipliedAlpha:v,preserveDrawingBuffer:y,powerPreference:M,failIfMajorPerformanceCaveat:b};if("setAttribute"in h)h.setAttribute("data-engine","three.js r170");if(h.addEventListener("webglcontextlost",ot,!1),h.addEventListener("webglcontextrestored",lt,!1),h.addEventListener("webglcontextcreationerror",Tt,!1),X===null){if(X=Ae("webgl2",I),X===null)if(Ae("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let re,ae,Pt,ge,Ft,Wt,F,C,Y,ct,ut,rt,Ot,yt,Rt,Vt,pt,At,jt,Ht,Ct,Xt,Kt,pe;function G(){if(re=new Cu(X),re.init(),Xt=new lf(X,re),ae=new bu(X,re,e,Xt),Pt=new rf(X,re),ae.reverseDepthBuffer&&S)Pt.buffers.depth.setReversed(!0);ge=new Du(X),Ft=new Xd,Wt=new of(X,re,Pt,Ft,ae,Xt,ge),F=new Tu(D),C=new Ru(D),Y=new zl(X),Kt=new Mu(X,Y),ct=new Pu(X,Y,ge,Kt),ut=new Uu(X,ct,Y,ge),jt=new Lu(X,ae,Wt),Vt=new Eu(Ft),rt=new Vd(D,F,C,re,ae,Kt,Vt),Ot=new ff(D,Ft),yt=new Yd,Rt=new Qd(re),At=new yu(D,F,C,Pt,ut,E,v),pt=new nf(D,ut,ae),pe=new pf(X,ge,ae,Pt),Ht=new Su(X,re,ge),Ct=new Iu(X,re,ge),ge.programs=rt.programs,D.capabilities=ae,D.extensions=re,D.properties=Ft,D.renderLists=yt,D.shadowMap=pt,D.state=Pt,D.info=ge}G();let ft=new To(D,X);this.xr=ft,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let I=re.get("WEBGL_lose_context");if(I)I.loseContext()},this.forceContextRestore=function(){let I=re.get("WEBGL_lose_context");if(I)I.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(I){if(I===void 0)return;dt=I,this.setSize(ht,st,!1)},this.getSize=function(I){return I.set(ht,st)},this.setSize=function(I,V,Z=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(ht=I,st=V,h.width=Math.floor(I*dt),h.height=Math.floor(V*dt),Z===!0)h.style.width=I+"px",h.style.height=V+"px";this.setViewport(0,0,I,V)},this.getDrawingBufferSize=function(I){return I.set(ht*dt,st*dt).floor()},this.setDrawingBufferSize=function(I,V,Z){ht=I,st=V,dt=Z,h.width=Math.floor(I*Z),h.height=Math.floor(V*Z),this.setViewport(0,0,I,V)},this.getCurrentViewport=function(I){return I.copy(U)},this.getViewport=function(I){return I.copy(Et)},this.setViewport=function(I,V,Z,J){if(I.isVector4)Et.set(I.x,I.y,I.z,I.w);else Et.set(I,V,Z,J);Pt.viewport(U.copy(Et).multiplyScalar(dt).round())},this.getScissor=function(I){return I.copy(zt)},this.setScissor=function(I,V,Z,J){if(I.isVector4)zt.set(I.x,I.y,I.z,I.w);else zt.set(I,V,Z,J);Pt.scissor(k.copy(zt).multiplyScalar(dt).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(I){Pt.setScissorTest(it=I)},this.setOpaqueSort=function(I){et=I},this.setTransparentSort=function(I){vt=I},this.getClearColor=function(I){return I.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(I=!0,V=!0,Z=!0){let J=0;if(I){let W=!1;if(z!==null){let mt=z.texture.format;W=mt===1033||mt===1031||mt===1029}if(W){let mt=z.texture.type,St=mt===1009||mt===1014||mt===1012||mt===1020||mt===1017||mt===1018,Dt=At.getClearColor(),Lt=At.getClearAlpha(),{r:Gt,g:qt,b:Ut}=Dt;if(St)A[0]=Gt,A[1]=qt,A[2]=Ut,A[3]=Lt,X.clearBufferuiv(X.COLOR,0,A);else R[0]=Gt,R[1]=qt,R[2]=Ut,R[3]=Lt,X.clearBufferiv(X.COLOR,0,R)}else J|=X.COLOR_BUFFER_BIT}if(V)J|=X.DEPTH_BUFFER_BIT;if(Z)J|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);X.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){h.removeEventListener("webglcontextlost",ot,!1),h.removeEventListener("webglcontextrestored",lt,!1),h.removeEventListener("webglcontextcreationerror",Tt,!1),yt.dispose(),Rt.dispose(),Ft.dispose(),F.dispose(),C.dispose(),ut.dispose(),Kt.dispose(),pe.dispose(),rt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ke),ft.removeEventListener("sessionend",Wr),wn.stop()};function ot(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let I=ge.autoReset,V=pt.enabled,Z=pt.autoUpdate,J=pt.needsUpdate,W=pt.type;G(),ge.autoReset=I,pt.enabled=V,pt.autoUpdate=Z,pt.needsUpdate=J,pt.type=W}function Tt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Mt(I){let V=I.target;V.removeEventListener("dispose",Mt),Zt(V)}function Zt(I){_e(I),Ft.remove(I)}function _e(I){let V=Ft.get(I).programs;if(V!==void 0){if(V.forEach(function(Z){rt.releaseProgram(Z)}),I.isShaderMaterial)rt.releaseShaderCache(I)}}this.renderBufferDirect=function(I,V,Z,J,W,mt){if(V===null)V=Bt;let St=W.isMesh&&W.matrixWorld.determinant()<0,Dt=jo(I,V,Z,J,W);Pt.setMaterial(J,St);let Lt=Z.index,Gt=1;if(J.wireframe===!0){if(Lt=ct.getWireframeAttribute(Z),Lt===void 0)return;Gt=2}let qt=Z.drawRange,Ut=Z.attributes.position,ee=qt.start*Gt,he=(qt.start+qt.count)*Gt;if(mt!==null)ee=Math.max(ee,mt.start*Gt),he=Math.min(he,(mt.start+mt.count)*Gt);if(Lt!==null)ee=Math.max(ee,0),he=Math.min(he,Lt.count);else if(Ut!==void 0&&Ut!==null)ee=Math.max(ee,0),he=Math.min(he,Ut.count);let ue=he-ee;if(ue<0||ue===1/0)return;Kt.setup(W,J,Dt,Z,Lt);let Ue,ie=Ht;if(Lt!==null)Ue=Y.get(Lt),ie=Ct,ie.setIndex(Ue);if(W.isMesh)if(J.wireframe===!0)Pt.setLineWidth(J.wireframeLinewidth*ce()),ie.setMode(X.LINES);else ie.setMode(X.TRIANGLES);else if(W.isLine){let Nt=J.linewidth;if(Nt===void 0)Nt=1;if(Pt.setLineWidth(Nt*ce()),W.isLineSegments)ie.setMode(X.LINES);else if(W.isLineLoop)ie.setMode(X.LINE_LOOP);else ie.setMode(X.LINE_STRIP)}else if(W.isPoints)ie.setMode(X.POINTS);else if(W.isSprite)ie.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ie.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(!re.get("WEBGL_multi_draw")){let{_multiDrawStarts:Nt,_multiDrawCounts:an,_multiDrawCount:se}=W,Xe=Lt?Y.get(Lt).bytesPerElement:1,kn=Ft.get(J).currentProgram.getUniforms();for(let ze=0;ze<se;ze++)kn.setValue(X,"_gl_DrawID",ze),ie.render(Nt[ze]/Xe,an[ze])}else ie.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ie.renderInstances(ee,ue,W.count);else if(Z.isInstancedBufferGeometry){let Nt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,an=Math.min(Z.instanceCount,Nt);ie.renderInstances(ee,ue,an)}else ie.render(ee,ue)};function Re(I,V,Z){if(I.transparent===!0&&I.side===2&&I.forceSinglePass===!1)I.side=1,I.needsUpdate=!0,Fi(I,V,Z),I.side=0,I.needsUpdate=!0,Fi(I,V,Z),I.side=2;else Fi(I,V,Z)}this.compile=function(I,V,Z=null){if(Z===null)Z=I;if(T=Rt.get(Z),T.init(V),O.push(T),Z.traverseVisible(function(W){if(W.isLight&&W.layers.test(V.layers)){if(T.pushLight(W),W.castShadow)T.pushShadow(W)}}),I!==Z)I.traverseVisible(function(W){if(W.isLight&&W.layers.test(V.layers)){if(T.pushLight(W),W.castShadow)T.pushShadow(W)}});T.setupLights();let J=new Set;return I.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let mt=W.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){let Dt=mt[St];Re(Dt,Z,W),J.add(Dt)}else Re(mt,Z,W),J.add(mt)}),O.pop(),T=null,J},this.compileAsync=function(I,V,Z=null){let J=this.compile(I,V,Z);return new Promise((W)=>{function mt(){if(J.forEach(function(St){if(Ft.get(St).currentProgram.isReady())J.delete(St)}),J.size===0){W(I);return}setTimeout(mt,10)}if(re.get("KHR_parallel_shader_compile")!==null)mt();else setTimeout(mt,10)})};let ne=null;function rn(I){if(ne)ne(I)}function Ke(){wn.stop()}function Wr(){wn.start()}let wn=new ho;if(wn.setAnimationLoop(rn),typeof self<"u")wn.setContext(self);this.setAnimationLoop=function(I){ne=I,ft.setAnimationLoop(I),I===null?wn.stop():wn.start()},ft.addEventListener("sessionstart",Ke),ft.addEventListener("sessionend",Wr),this.render=function(I,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(I.matrixWorldAutoUpdate===!0)I.updateMatrixWorld();if(V.parent===null&&V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(ft.enabled===!0&&ft.isPresenting===!0){if(ft.cameraAutoUpdate===!0)ft.updateCamera(V);V=ft.getCamera()}if(I.isScene===!0)I.onBeforeRender(D,I,V,z);if(T=Rt.get(I,O.length),T.init(V),O.push(T),gt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(gt),_t=this.localClippingEnabled,at=Vt.init(this.clippingPlanes,_t),P=yt.get(I,w.length),P.init(),w.push(P),ft.enabled===!0&&ft.isPresenting===!0){let mt=D.xr.getDepthSensingMesh();if(mt!==null)Rs(mt,V,-1/0,D.sortObjects)}if(Rs(I,V,0,D.sortObjects),P.finish(),D.sortObjects===!0)P.sort(et,vt);if($t=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,$t)At.addToRenderList(P,I);if(this.info.render.frame++,at===!0)Vt.beginShadows();let Z=T.state.shadowsArray;if(pt.render(Z,I,V),at===!0)Vt.endShadows();if(this.info.autoReset===!0)this.info.reset();let J=P.opaque,W=P.transmissive;if(T.setupLights(),V.isArrayCamera){let mt=V.cameras;if(W.length>0)for(let St=0,Dt=mt.length;St<Dt;St++){let Lt=mt[St];Xr(J,W,I,Lt)}if($t)At.render(I);for(let St=0,Dt=mt.length;St<Dt;St++){let Lt=mt[St];Vr(P,I,Lt,Lt.viewport)}}else{if(W.length>0)Xr(J,W,I,V);if($t)At.render(I);Vr(P,I,V)}if(z!==null)Wt.updateMultisampleRenderTarget(z),Wt.updateRenderTargetMipmap(z);if(I.isScene===!0)I.onAfterRender(D,I,V);if(Kt.resetDefaultState(),j=-1,L=null,O.pop(),O.length>0){if(T=O[O.length-1],at===!0)Vt.setGlobalState(D.clippingPlanes,T.state.camera)}else T=null;if(w.pop(),w.length>0)P=w[w.length-1];else P=null};function Rs(I,V,Z,J){if(I.visible===!1)return;if(I.layers.test(V.layers)){if(I.isGroup)Z=I.renderOrder;else if(I.isLOD){if(I.autoUpdate===!0)I.update(V)}else if(I.isLight){if(T.pushLight(I),I.castShadow)T.pushShadow(I)}else if(I.isSprite){if(!I.frustumCulled||q.intersectsSprite(I)){if(J)kt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(gt);let St=ut.update(I),Dt=I.material;if(Dt.visible)P.push(I,St,Dt,Z,kt.z,null)}}else if(I.isMesh||I.isLine||I.isPoints){if(!I.frustumCulled||q.intersectsObject(I)){let St=ut.update(I),Dt=I.material;if(J){if(I.boundingSphere!==void 0){if(I.boundingSphere===null)I.computeBoundingSphere();kt.copy(I.boundingSphere.center)}else{if(St.boundingSphere===null)St.computeBoundingSphere();kt.copy(St.boundingSphere.center)}kt.applyMatrix4(I.matrixWorld).applyMatrix4(gt)}if(Array.isArray(Dt)){let Lt=St.groups;for(let Gt=0,qt=Lt.length;Gt<qt;Gt++){let Ut=Lt[Gt],ee=Dt[Ut.materialIndex];if(ee&&ee.visible)P.push(I,St,ee,Z,kt.z,Ut)}}else if(Dt.visible)P.push(I,St,Dt,Z,kt.z,null)}}}let mt=I.children;for(let St=0,Dt=mt.length;St<Dt;St++)Rs(mt[St],V,Z,J)}function Vr(I,V,Z,J){let{opaque:W,transmissive:mt,transparent:St}=I;if(T.setupLightsView(Z),at===!0)Vt.setGlobalState(D.clippingPlanes,Z);if(J)Pt.viewport(U.copy(J));if(W.length>0)Ni(W,V,Z);if(mt.length>0)Ni(mt,V,Z);if(St.length>0)Ni(St,V,Z);Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Xr(I,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0)T.state.transmissionRenderTarget[J.id]=new En(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:g,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace});let mt=T.state.transmissionRenderTarget[J.id],St=J.viewport||U;mt.setSize(St.z,St.w);let Dt=D.getRenderTarget();if(D.setRenderTarget(mt),D.getClearColor(nt),tt=D.getClearAlpha(),tt<1)D.setClearColor(16777215,0.5);if(D.clear(),$t)At.render(Z);let Lt=D.toneMapping;D.toneMapping=0;let Gt=J.viewport;if(J.viewport!==void 0)J.viewport=void 0;if(T.setupLightsView(J),at===!0)Vt.setGlobalState(D.clippingPlanes,J);if(Ni(I,Z,J),Wt.updateMultisampleRenderTarget(mt),Wt.updateRenderTargetMipmap(mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ut=0,ee=V.length;Ut<ee;Ut++){let he=V[Ut],{object:ue,geometry:Ue,material:ie,group:Nt}=he;if(ie.side===2&&ue.layers.test(J.layers)){let an=ie.side;ie.side=1,ie.needsUpdate=!0,qr(ue,Z,J,Ue,ie,Nt),ie.side=an,ie.needsUpdate=!0,qt=!0}}if(qt===!0)Wt.updateMultisampleRenderTarget(mt),Wt.updateRenderTargetMipmap(mt)}if(D.setRenderTarget(Dt),D.setClearColor(nt,tt),Gt!==void 0)J.viewport=Gt;D.toneMapping=Lt}function Ni(I,V,Z){let J=V.isScene===!0?V.overrideMaterial:null;for(let W=0,mt=I.length;W<mt;W++){let St=I[W],{object:Dt,geometry:Lt}=St,Gt=J===null?St.material:J,qt=St.group;if(Dt.layers.test(Z.layers))qr(Dt,V,Z,Lt,Gt,qt)}}function qr(I,V,Z,J,W,mt){if(I.onBeforeRender(D,V,Z,J,W,mt),I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),W.onBeforeRender(D,V,Z,J,I,mt),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1)W.side=1,W.needsUpdate=!0,D.renderBufferDirect(Z,V,J,W,I,mt),W.side=0,W.needsUpdate=!0,D.renderBufferDirect(Z,V,J,W,I,mt),W.side=2;else D.renderBufferDirect(Z,V,J,W,I,mt);I.onAfterRender(D,V,Z,J,W,mt)}function Fi(I,V,Z){if(V.isScene!==!0)V=Bt;let J=Ft.get(I),W=T.state.lights,mt=T.state.shadowsArray,St=W.state.version,Dt=rt.getParameters(I,W.state,mt,V,Z),Lt=rt.getProgramCacheKey(Dt),Gt=J.programs;if(J.environment=I.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(I.isMeshStandardMaterial?C:F).get(I.envMap||J.environment),J.envMapRotation=J.environment!==null&&I.envMap===null?V.environmentRotation:I.envMapRotation,Gt===void 0)I.addEventListener("dispose",Mt),Gt=new Map,J.programs=Gt;let qt=Gt.get(Lt);if(qt!==void 0){if(J.currentProgram===qt&&J.lightsStateVersion===St)return Zr(I,Dt),qt}else Dt.uniforms=rt.getUniforms(I),I.onBeforeCompile(Dt,D),qt=rt.acquireProgram(Dt,Lt),Gt.set(Lt,qt),J.uniforms=Dt.uniforms;let Ut=J.uniforms;if(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)Ut.clippingPlanes=Vt.uniform;if(Zr(I,Dt),J.needsLights=tl(I),J.lightsStateVersion=St,J.needsLights)Ut.ambientLightColor.value=W.state.ambient,Ut.lightProbe.value=W.state.probe,Ut.directionalLights.value=W.state.directional,Ut.directionalLightShadows.value=W.state.directionalShadow,Ut.spotLights.value=W.state.spot,Ut.spotLightShadows.value=W.state.spotShadow,Ut.rectAreaLights.value=W.state.rectArea,Ut.ltc_1.value=W.state.rectAreaLTC1,Ut.ltc_2.value=W.state.rectAreaLTC2,Ut.pointLights.value=W.state.point,Ut.pointLightShadows.value=W.state.pointShadow,Ut.hemisphereLights.value=W.state.hemi,Ut.directionalShadowMap.value=W.state.directionalShadowMap,Ut.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ut.spotShadowMap.value=W.state.spotShadowMap,Ut.spotLightMatrix.value=W.state.spotLightMatrix,Ut.spotLightMap.value=W.state.spotLightMap,Ut.pointShadowMap.value=W.state.pointShadowMap,Ut.pointShadowMatrix.value=W.state.pointShadowMatrix;return J.currentProgram=qt,J.uniformsList=null,qt}function Yr(I){if(I.uniformsList===null){let V=I.currentProgram.getUniforms();I.uniformsList=Si.seqWithValue(V.seq,I.uniforms)}return I.uniformsList}function Zr(I,V){let Z=Ft.get(I);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function jo(I,V,Z,J,W){if(V.isScene!==!0)V=Bt;Wt.resetTextureUnits();let mt=V.fog,St=J.isMeshStandardMaterial?V.environment:null,Dt=z===null?D.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:"srgb-linear",Lt=(J.isMeshStandardMaterial?C:F).get(J.envMap||St),Gt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ut=!!Z.morphAttributes.position,ee=!!Z.morphAttributes.normal,he=!!Z.morphAttributes.color,ue=0;if(J.toneMapped){if(z===null||z.isXRRenderTarget===!0)ue=D.toneMapping}let Ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ie=Ue!==void 0?Ue.length:0,Nt=Ft.get(J),an=T.state.lights;if(at===!0){if(_t===!0||I!==L){let Ge=I===L&&J.id===j;Vt.setState(J,I,Ge)}}let se=!1;if(J.version===Nt.__version){if(Nt.needsLights&&Nt.lightsStateVersion!==an.state.version)se=!0;else if(Nt.outputColorSpace!==Dt)se=!0;else if(W.isBatchedMesh&&Nt.batching===!1)se=!0;else if(!W.isBatchedMesh&&Nt.batching===!0)se=!0;else if(W.isBatchedMesh&&Nt.batchingColor===!0&&W.colorTexture===null)se=!0;else if(W.isBatchedMesh&&Nt.batchingColor===!1&&W.colorTexture!==null)se=!0;else if(W.isInstancedMesh&&Nt.instancing===!1)se=!0;else if(!W.isInstancedMesh&&Nt.instancing===!0)se=!0;else if(W.isSkinnedMesh&&Nt.skinning===!1)se=!0;else if(!W.isSkinnedMesh&&Nt.skinning===!0)se=!0;else if(W.isInstancedMesh&&Nt.instancingColor===!0&&W.instanceColor===null)se=!0;else if(W.isInstancedMesh&&Nt.instancingColor===!1&&W.instanceColor!==null)se=!0;else if(W.isInstancedMesh&&Nt.instancingMorph===!0&&W.morphTexture===null)se=!0;else if(W.isInstancedMesh&&Nt.instancingMorph===!1&&W.morphTexture!==null)se=!0;else if(Nt.envMap!==Lt)se=!0;else if(J.fog===!0&&Nt.fog!==mt)se=!0;else if(Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Vt.numPlanes||Nt.numIntersection!==Vt.numIntersection))se=!0;else if(Nt.vertexAlphas!==Gt)se=!0;else if(Nt.vertexTangents!==qt)se=!0;else if(Nt.morphTargets!==Ut)se=!0;else if(Nt.morphNormals!==ee)se=!0;else if(Nt.morphColors!==he)se=!0;else if(Nt.toneMapping!==ue)se=!0;else if(Nt.morphTargetsCount!==ie)se=!0}else se=!0,Nt.__version=J.version;let Xe=Nt.currentProgram;if(se===!0)Xe=Fi(J,V,W);let kn=!1,ze=!1,di=!1,de=Xe.getUniforms(),je=Nt.uniforms;if(Pt.useProgram(Xe.program))kn=!0,ze=!0,di=!0;if(J.id!==j)j=J.id,ze=!0;if(kn||L!==I){if(Pt.buffers.depth.getReversed())wt.copy(I.projectionMatrix),vl(wt),yl(wt),de.setValue(X,"projectionMatrix",wt);else de.setValue(X,"projectionMatrix",I.projectionMatrix);de.setValue(X,"viewMatrix",I.matrixWorldInverse);let gn=de.map.cameraPosition;if(gn!==void 0)gn.setValue(X,It.setFromMatrixPosition(I.matrixWorld));if(ae.logarithmicDepthBuffer)de.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2));if(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)de.setValue(X,"isOrthographic",I.isOrthographicCamera===!0);if(L!==I)L=I,ze=!0,di=!0}if(W.isSkinnedMesh){de.setOptional(X,W,"bindMatrix"),de.setOptional(X,W,"bindMatrixInverse");let Ge=W.skeleton;if(Ge){if(Ge.boneTexture===null)Ge.computeBoneTexture();de.setValue(X,"boneTexture",Ge.boneTexture,Wt)}}if(W.isBatchedMesh){if(de.setOptional(X,W,"batchingTexture"),de.setValue(X,"batchingTexture",W._matricesTexture,Wt),de.setOptional(X,W,"batchingIdTexture"),de.setValue(X,"batchingIdTexture",W._indirectTexture,Wt),de.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null)de.setValue(X,"batchingColorTexture",W._colorsTexture,Wt)}let fi=Z.morphAttributes;if(fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)jt.update(W,Z,Xe);if(ze||Nt.receiveShadow!==W.receiveShadow)Nt.receiveShadow=W.receiveShadow,de.setValue(X,"receiveShadow",W.receiveShadow);if(J.isMeshGouraudMaterial&&J.envMap!==null)je.envMap.value=Lt,je.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1;if(J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null)je.envMapIntensity.value=V.environmentIntensity;if(ze){if(de.setValue(X,"toneMappingExposure",D.toneMappingExposure),Nt.needsLights)Qo(je,di);if(mt&&J.fog===!0)Ot.refreshFogUniforms(je,mt);Ot.refreshMaterialUniforms(je,J,dt,st,T.state.transmissionRenderTarget[I.id]),Si.upload(X,Yr(Nt),je,Wt)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0)Si.upload(X,Yr(Nt),je,Wt),J.uniformsNeedUpdate=!1;if(J.isSpriteMaterial)de.setValue(X,"center",W.center);if(de.setValue(X,"modelViewMatrix",W.modelViewMatrix),de.setValue(X,"normalMatrix",W.normalMatrix),de.setValue(X,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Ge=J.uniformsGroups;for(let gn=0,_n=Ge.length;gn<_n;gn++){let Jr=Ge[gn];pe.update(Jr,Xe),pe.bind(Jr,Xe)}}return Xe}function Qo(I,V){I.ambientLightColor.needsUpdate=V,I.lightProbe.needsUpdate=V,I.directionalLights.needsUpdate=V,I.directionalLightShadows.needsUpdate=V,I.pointLights.needsUpdate=V,I.pointLightShadows.needsUpdate=V,I.spotLights.needsUpdate=V,I.spotLightShadows.needsUpdate=V,I.rectAreaLights.needsUpdate=V,I.hemisphereLights.needsUpdate=V}function tl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}if(this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(I,V,Z){Ft.get(I.texture).__webglTexture=V,Ft.get(I.depthTexture).__webglTexture=Z;let J=Ft.get(I);if(J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,!J.__autoAllocateDepthBuffer){if(re.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(I,V){let Z=Ft.get(I);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(I,V=0,Z=0){z=I,Q=V,B=Z;let J=!0,W=null,mt=!1,St=!1;if(I){let Lt=Ft.get(I);if(Lt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(X.FRAMEBUFFER,null),J=!1;else if(Lt.__webglFramebuffer===void 0)Wt.setupRenderTarget(I);else if(Lt.__hasExternalTextures)Wt.rebindTextures(I,Ft.get(I.texture).__webglTexture,Ft.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ut=I.depthTexture;if(Lt.__boundDepthTexture!==Ut){if(Ut!==null&&Ft.has(Ut)&&(I.width!==Ut.image.width||I.height!==Ut.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(I)}}let Gt=I.texture;if(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)St=!0;let qt=Ft.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget){if(Array.isArray(qt[V]))W=qt[V][Z];else W=qt[V];mt=!0}else if(I.samples>0&&Wt.useMultisampledRTT(I)===!1)W=Ft.get(I).__webglMultisampledFramebuffer;else if(Array.isArray(qt))W=qt[Z];else W=qt;U.copy(I.viewport),k.copy(I.scissor),K=I.scissorTest}else U.copy(Et).multiplyScalar(dt).floor(),k.copy(zt).multiplyScalar(dt).floor(),K=it;if(Pt.bindFramebuffer(X.FRAMEBUFFER,W)&&J)Pt.drawBuffers(I,W);if(Pt.viewport(U),Pt.scissor(k),Pt.setScissorTest(K),mt){let Lt=Ft.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,Lt.__webglTexture,Z)}else if(St){let Lt=Ft.get(I.texture),Gt=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Lt.__webglTexture,Z||0,Gt)}j=-1},this.readRenderTargetPixels=function(I,V,Z,J,W,mt,St){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ft.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&St!==void 0)Dt=Dt[St];if(Dt){Pt.bindFramebuffer(X.FRAMEBUFFER,Dt);try{let Lt=I.texture,{format:Gt,type:qt}=Lt;if(!ae.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(V>=0&&V<=I.width-J&&(Z>=0&&Z<=I.height-W))X.readPixels(V,Z,J,W,Xt.convert(Gt),Xt.convert(qt),mt)}finally{let Lt=z!==null?Ft.get(z).__webglFramebuffer:null;Pt.bindFramebuffer(X.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(I,V,Z,J,W,mt,St){if(!(I&&I.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ft.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&St!==void 0)Dt=Dt[St];if(Dt){let Lt=I.texture,{format:Gt,type:qt}=Lt;if(!ae.textureFormatReadable(Gt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(qt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=I.width-J&&(Z>=0&&Z<=I.height-W)){Pt.bindFramebuffer(X.FRAMEBUFFER,Dt);let Ut=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ut),X.bufferData(X.PIXEL_PACK_BUFFER,mt.byteLength,X.STREAM_READ),X.readPixels(V,Z,J,W,Xt.convert(Gt),Xt.convert(qt),0);let ee=z!==null?Ft.get(z).__webglFramebuffer:null;Pt.bindFramebuffer(X.FRAMEBUFFER,ee);let he=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await xl(X,he,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ut),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,mt),X.deleteBuffer(Ut),X.deleteSync(he),mt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,V=null,Z=0){if(I.isTexture!==!0)vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,I=arguments[1];let J=Math.pow(2,-Z),W=Math.floor(I.image.width*J),mt=Math.floor(I.image.height*J),St=V!==null?V.x:0,Dt=V!==null?V.y:0;Wt.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,St,Dt,W,mt),Pt.unbindTexture()},this.copyTextureToTexture=function(I,V,Z=null,J=null,W=0){if(I.isTexture!==!0)vi("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1],V=arguments[2],W=arguments[3]||0,Z=null;let mt,St,Dt,Lt,Gt,qt,Ut,ee,he,ue=I.isCompressedTexture?I.mipmaps[W]:I.image;if(Z!==null)mt=Z.max.x-Z.min.x,St=Z.max.y-Z.min.y,Dt=Z.isBox3?Z.max.z-Z.min.z:1,Lt=Z.min.x,Gt=Z.min.y,qt=Z.isBox3?Z.min.z:0;else mt=ue.width,St=ue.height,Dt=ue.depth||1,Lt=0,Gt=0,qt=0;if(J!==null)Ut=J.x,ee=J.y,he=J.z;else Ut=0,ee=0,he=0;let Ue=Xt.convert(V.format),ie=Xt.convert(V.type),Nt;if(V.isData3DTexture)Wt.setTexture3D(V,0),Nt=X.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)Wt.setTexture2DArray(V,0),Nt=X.TEXTURE_2D_ARRAY;else Wt.setTexture2D(V,0),Nt=X.TEXTURE_2D;X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,V.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,V.unpackAlignment);let an=X.getParameter(X.UNPACK_ROW_LENGTH),se=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Xe=X.getParameter(X.UNPACK_SKIP_PIXELS),kn=X.getParameter(X.UNPACK_SKIP_ROWS),ze=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,ue.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ue.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Lt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Gt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,qt);let di=I.isDataArrayTexture||I.isData3DTexture,de=V.isDataArrayTexture||V.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let je=Ft.get(I),fi=Ft.get(V),Ge=Ft.get(je.__renderTarget),gn=Ft.get(fi.__renderTarget);Pt.bindFramebuffer(X.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Pt.bindFramebuffer(X.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let _n=0;_n<Dt;_n++){if(di)X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ft.get(I).__webglTexture,W,qt+_n);if(I.isDepthTexture){if(de)X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ft.get(V).__webglTexture,W,he+_n);X.blitFramebuffer(Lt,Gt,mt,St,Ut,ee,mt,St,X.DEPTH_BUFFER_BIT,X.NEAREST)}else if(de)X.copyTexSubImage3D(Nt,W,Ut,ee,he+_n,Lt,Gt,mt,St);else X.copyTexSubImage2D(Nt,W,Ut,ee,he+_n,Lt,Gt,mt,St)}Pt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(de)if(I.isDataTexture||I.isData3DTexture)X.texSubImage3D(Nt,W,Ut,ee,he,mt,St,Dt,Ue,ie,ue.data);else if(V.isCompressedArrayTexture)X.compressedTexSubImage3D(Nt,W,Ut,ee,he,mt,St,Dt,Ue,ue.data);else X.texSubImage3D(Nt,W,Ut,ee,he,mt,St,Dt,Ue,ie,ue);else if(I.isDataTexture)X.texSubImage2D(X.TEXTURE_2D,W,Ut,ee,mt,St,Ue,ie,ue.data);else if(I.isCompressedTexture)X.compressedTexSubImage2D(X.TEXTURE_2D,W,Ut,ee,ue.width,ue.height,Ue,ue.data);else X.texSubImage2D(X.TEXTURE_2D,W,Ut,ee,mt,St,Ue,ie,ue);if(X.pixelStorei(X.UNPACK_ROW_LENGTH,an),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,se),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Xe),X.pixelStorei(X.UNPACK_SKIP_ROWS,kn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ze),W===0&&V.generateMipmaps)X.generateMipmap(Nt);Pt.unbindTexture()},this.copyTextureToTexture3D=function(I,V,Z=null,J=null,W=0){if(I.isTexture!==!0)vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,I=arguments[2],V=arguments[3],W=arguments[4]||0;return vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,V,Z,J,W)},this.initRenderTarget=function(I){if(Ft.get(I).__webglFramebuffer===void 0)Wt.setupRenderTarget(I)},this.initTexture=function(I){if(I.isCubeTexture)Wt.setTextureCube(I,0);else if(I.isData3DTexture)Wt.setTexture3D(I,0);else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Wt.setTexture2DArray(I,0);else Wt.setTexture2D(I,0);Pt.unbindTexture()},this.resetState=function(){Q=0,B=0,z=null,Pt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let h=this.getContext();h.drawingBufferColorspace=te._getDrawingBufferColorSpace(e),h.unpackColorSpace=te._getUnpackColorSpace()}}class Tr extends we{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,h){if(super.copy(e,h),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let h=super.toJSON(e);if(this.fog!==null)h.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)h.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)h.object.backgroundIntensity=this.backgroundIntensity;if(h.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)h.object.environmentIntensity=this.environmentIntensity;return h.object.environmentRotation=this.environmentRotation.toArray(),h}}class Di extends zn{static get type(){return"LineBasicMaterial"}constructor(e){super();this.isLineBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var ps=new H,ms=new H,Ha=new fe,xi=new Ii,is=new Pi,er=new H,Ga=new H;class Li extends we{constructor(e=new Oe,h=new Di){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=h,this.updateMorphTargets()}copy(e,h){return super.copy(e,h),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let h=e.attributes.position,p=[0];for(let m=1,g=h.count;m<g;m++)ps.fromBufferAttribute(h,m-1),ms.fromBufferAttribute(h,m),p[m]=p[m-1],p[m]+=ps.distanceTo(ms);e.setAttribute("lineDistance",new Ce(p,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,h){let p=this.geometry,m=this.matrixWorld,g=e.params.Line.threshold,_=p.drawRange;if(p.boundingSphere===null)p.computeBoundingSphere();if(is.copy(p.boundingSphere),is.applyMatrix4(m),is.radius+=g,e.ray.intersectsSphere(is)===!1)return;Ha.copy(m).invert(),xi.copy(e.ray).applyMatrix4(Ha);let x=g/((this.scale.x+this.scale.y+this.scale.z)/3),v=x*x,y=this.isLineSegments?2:1,M=p.index,S=p.attributes.position;if(M!==null){let E=Math.max(0,_.start),A=Math.min(M.count,_.start+_.count);for(let R=E,P=A-1;R<P;R+=y){let T=M.getX(R),w=M.getX(R+1),O=ss(this,e,xi,v,T,w);if(O)h.push(O)}if(this.isLineLoop){let R=M.getX(A-1),P=M.getX(E),T=ss(this,e,xi,v,R,P);if(T)h.push(T)}}else{let E=Math.max(0,_.start),A=Math.min(S.count,_.start+_.count);for(let R=E,P=A-1;R<P;R+=y){let T=ss(this,e,xi,v,R,R+1);if(T)h.push(T)}if(this.isLineLoop){let R=ss(this,e,xi,v,A-1,E);if(R)h.push(R)}}}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let x=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[x]=g}}}}}function ss(e,h,p,m,g,_){let x=e.geometry.attributes.position;if(ps.fromBufferAttribute(x,g),ms.fromBufferAttribute(x,_),p.distanceSqToSegment(ps,ms,er,Ga)>m)return;er.applyMatrix4(e.matrixWorld);let y=h.ray.origin.distanceTo(er);if(y<h.near||y>h.far)return;return{distance:y,point:Ga.clone().applyMatrix4(e.matrixWorld),index:g,face:null,faceIndex:null,barycoord:null,object:e}}var Wa=new H,Va=new H;class wr extends Li{constructor(e,h){super(e,h);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let h=e.attributes.position,p=[];for(let m=0,g=h.count;m<g;m+=2)Wa.fromBufferAttribute(h,m),Va.fromBufferAttribute(h,m+1),p[m]=m===0?0:p[m-1],p[m+1]=p[m]+Wa.distanceTo(Va);e.setAttribute("lineDistance",new Ce(p,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $e{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,h){let p=this.getUtoTmapping(e);return this.getPoint(p,h)}getPoints(e=5){let h=[];for(let p=0;p<=e;p++)h.push(this.getPoint(p/e));return h}getSpacedPoints(e=5){let h=[];for(let p=0;p<=e;p++)h.push(this.getPointAt(p/e));return h}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let h=[],p,m=this.getPoint(0),g=0;h.push(0);for(let _=1;_<=e;_++)p=this.getPoint(_/e),g+=p.distanceTo(m),h.push(g),m=p;return this.cacheArcLengths=h,h}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,h){let p=this.getLengths(),m=0,g=p.length,_;if(h)_=h;else _=e*p[g-1];let x=0,v=g-1,y;while(x<=v)if(m=Math.floor(x+(v-x)/2),y=p[m]-_,y<0)x=m+1;else if(y>0)v=m-1;else{v=m;break}if(m=v,p[m]===_)return m/(g-1);let M=p[m],S=p[m+1]-M,E=(_-M)/S;return(m+E)/(g-1)}getTangent(e,h){let m=e-0.0001,g=e+0.0001;if(m<0)m=0;if(g>1)g=1;let _=this.getPoint(m),x=this.getPoint(g),v=h||(_.isVector2?new bt:new H);return v.copy(x).sub(_).normalize(),v}getTangentAt(e,h){let p=this.getUtoTmapping(e);return this.getTangent(p,h)}computeFrenetFrames(e,h){let p=new H,m=[],g=[],_=[],x=new H,v=new fe;for(let E=0;E<=e;E++){let A=E/e;m[E]=this.getTangentAt(A,new H)}g[0]=new H,_[0]=new H;let y=Number.MAX_VALUE,M=Math.abs(m[0].x),b=Math.abs(m[0].y),S=Math.abs(m[0].z);if(M<=y)y=M,p.set(1,0,0);if(b<=y)y=b,p.set(0,1,0);if(S<=y)p.set(0,0,1);x.crossVectors(m[0],p).normalize(),g[0].crossVectors(m[0],x),_[0].crossVectors(m[0],g[0]);for(let E=1;E<=e;E++){if(g[E]=g[E-1].clone(),_[E]=_[E-1].clone(),x.crossVectors(m[E-1],m[E]),x.length()>Number.EPSILON){x.normalize();let A=Math.acos(Ee(m[E-1].dot(m[E]),-1,1));g[E].applyMatrix4(v.makeRotationAxis(x,A))}_[E].crossVectors(m[E],g[E])}if(h===!0){let E=Math.acos(Ee(g[0].dot(g[e]),-1,1));if(E/=e,m[0].dot(x.crossVectors(g[0],g[e]))>0)E=-E;for(let A=1;A<=e;A++)g[A].applyMatrix4(v.makeRotationAxis(m[A],E*A)),_[A].crossVectors(m[A],g[A])}return{tangents:m,normals:g,binormals:_}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vs extends $e{constructor(e=0,h=0,p=1,m=1,g=0,_=Math.PI*2,x=!1,v=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=h,this.xRadius=p,this.yRadius=m,this.aStartAngle=g,this.aEndAngle=_,this.aClockwise=x,this.aRotation=v}getPoint(e,h=new bt){let p=h,m=Math.PI*2,g=this.aEndAngle-this.aStartAngle,_=Math.abs(g)<Number.EPSILON;while(g<0)g+=m;while(g>m)g-=m;if(g<Number.EPSILON)if(_)g=0;else g=m;if(this.aClockwise===!0&&!_)if(g===m)g=-m;else g=g-m;let x=this.aStartAngle+e*g,v=this.aX+this.xRadius*Math.cos(x),y=this.aY+this.yRadius*Math.sin(x);if(this.aRotation!==0){let M=Math.cos(this.aRotation),b=Math.sin(this.aRotation),S=v-this.aX,E=y-this.aY;v=S*M-E*b+this.aX,y=S*b+E*M+this.aY}return p.set(v,y)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wo extends vs{constructor(e,h,p,m,g,_){super(e,h,p,p,m,g,_);this.isArcCurve=!0,this.type="ArcCurve"}}function Ar(){let e=0,h=0,p=0,m=0;function g(_,x,v,y){e=_,h=v,p=-3*_+3*x-2*v-y,m=2*_-2*x+v+y}return{initCatmullRom:function(_,x,v,y,M){g(x,v,M*(v-_),M*(y-x))},initNonuniformCatmullRom:function(_,x,v,y,M,b,S){let E=(x-_)/M-(v-_)/(M+b)+(v-x)/b,A=(v-x)/b-(y-x)/(b+S)+(y-v)/S;E*=b,A*=b,g(x,v,E,A)},calc:function(_){let x=_*_,v=x*_;return e+h*_+p*x+m*v}}}var rs=new H,nr=new Ar,ir=new Ar,sr=new Ar;class Ao extends $e{constructor(e=[],h=!1,p="centripetal",m=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=h,this.curveType=p,this.tension=m}getPoint(e,h=new H){let p=h,m=this.points,g=m.length,_=(g-(this.closed?0:1))*e,x=Math.floor(_),v=_-x;if(this.closed)x+=x>0?0:(Math.floor(Math.abs(x)/g)+1)*g;else if(v===0&&x===g-1)x=g-2,v=1;let y,M;if(this.closed||x>0)y=m[(x-1)%g];else rs.subVectors(m[0],m[1]).add(m[0]),y=rs;let b=m[x%g],S=m[(x+1)%g];if(this.closed||x+2<g)M=m[(x+2)%g];else rs.subVectors(m[g-1],m[g-2]).add(m[g-1]),M=rs;if(this.curveType==="centripetal"||this.curveType==="chordal"){let E=this.curveType==="chordal"?0.5:0.25,A=Math.pow(y.distanceToSquared(b),E),R=Math.pow(b.distanceToSquared(S),E),P=Math.pow(S.distanceToSquared(M),E);if(R<0.0001)R=1;if(A<0.0001)A=R;if(P<0.0001)P=R;nr.initNonuniformCatmullRom(y.x,b.x,S.x,M.x,A,R,P),ir.initNonuniformCatmullRom(y.y,b.y,S.y,M.y,A,R,P),sr.initNonuniformCatmullRom(y.z,b.z,S.z,M.z,A,R,P)}else if(this.curveType==="catmullrom")nr.initCatmullRom(y.x,b.x,S.x,M.x,this.tension),ir.initCatmullRom(y.y,b.y,S.y,M.y,this.tension),sr.initCatmullRom(y.z,b.z,S.z,M.z,this.tension);return p.set(nr.calc(v),ir.calc(v),sr.calc(v)),p}copy(e){super.copy(e),this.points=[];for(let h=0,p=e.points.length;h<p;h++){let m=e.points[h];this.points.push(m.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];e.points.push(m.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let h=0,p=e.points.length;h<p;h++){let m=e.points[h];this.points.push(new H().fromArray(m))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xa(e,h,p,m,g){let _=(m-h)*0.5,x=(g-p)*0.5,v=e*e,y=e*v;return(2*p-2*m+_+x)*y+(-3*p+3*m-2*_-x)*v+_*e+p}function mf(e,h){let p=1-e;return p*p*h}function gf(e,h){return 2*(1-e)*e*h}function _f(e,h){return e*e*h}function bi(e,h,p,m){return mf(e,h)+gf(e,p)+_f(e,m)}function xf(e,h){let p=1-e;return p*p*p*h}function vf(e,h){let p=1-e;return 3*p*p*e*h}function yf(e,h){return 3*(1-e)*e*e*h}function Mf(e,h){return e*e*e*h}function Ei(e,h,p,m,g){return xf(e,h)+vf(e,p)+yf(e,m)+Mf(e,g)}class Rr extends $e{constructor(e=new bt,h=new bt,p=new bt,m=new bt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=h,this.v2=p,this.v3=m}getPoint(e,h=new bt){let p=h,m=this.v0,g=this.v1,_=this.v2,x=this.v3;return p.set(Ei(e,m.x,g.x,_.x,x.x),Ei(e,m.y,g.y,_.y,x.y)),p}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ro extends $e{constructor(e=new H,h=new H,p=new H,m=new H){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=h,this.v2=p,this.v3=m}getPoint(e,h=new H){let p=h,m=this.v0,g=this.v1,_=this.v2,x=this.v3;return p.set(Ei(e,m.x,g.x,_.x,x.x),Ei(e,m.y,g.y,_.y,x.y),Ei(e,m.z,g.z,_.z,x.z)),p}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cr extends $e{constructor(e=new bt,h=new bt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=h}getPoint(e,h=new bt){let p=h;if(e===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(e).add(this.v1);return p}getPointAt(e,h){return this.getPoint(e,h)}getTangent(e,h=new bt){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,h){return this.getTangent(e,h)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Co extends $e{constructor(e=new H,h=new H){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=h}getPoint(e,h=new H){let p=h;if(e===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(e).add(this.v1);return p}getPointAt(e,h){return this.getPoint(e,h)}getTangent(e,h=new H){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,h){return this.getTangent(e,h)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pr extends $e{constructor(e=new bt,h=new bt,p=new bt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=h,this.v2=p}getPoint(e,h=new bt){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(bi(e,m.x,g.x,_.x),bi(e,m.y,g.y,_.y)),p}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Po extends $e{constructor(e=new H,h=new H,p=new H){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=h,this.v2=p}getPoint(e,h=new H){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(bi(e,m.x,g.x,_.x),bi(e,m.y,g.y,_.y),bi(e,m.z,g.z,_.z)),p}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ir extends $e{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,h=new bt){let p=h,m=this.points,g=(m.length-1)*e,_=Math.floor(g),x=g-_,v=m[_===0?_:_-1],y=m[_],M=m[_>m.length-2?m.length-1:_+1],b=m[_>m.length-3?m.length-1:_+2];return p.set(Xa(x,v.x,y.x,M.x,b.x),Xa(x,v.y,y.y,M.y,b.y)),p}copy(e){super.copy(e),this.points=[];for(let h=0,p=e.points.length;h<p;h++){let m=e.points[h];this.points.push(m.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];e.points.push(m.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let h=0,p=e.points.length;h<p;h++){let m=e.points[h];this.points.push(new bt().fromArray(m))}return this}}var qa=Object.freeze({__proto__:null,ArcCurve:wo,CatmullRomCurve3:Ao,CubicBezierCurve:Rr,CubicBezierCurve3:Ro,EllipseCurve:vs,LineCurve:Cr,LineCurve3:Co,QuadraticBezierCurve:Pr,QuadraticBezierCurve3:Po,SplineCurve:Ir});class Io extends $e{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),h=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(h)){let p=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qa[p](h,e))}return this}getPoint(e,h){let p=e*this.getLength(),m=this.getCurveLengths(),g=0;while(g<m.length){if(m[g]>=p){let _=m[g]-p,x=this.curves[g],v=x.getLength(),y=v===0?0:1-_/v;return x.getPointAt(y,h)}g++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],h=0;for(let p=0,m=this.curves.length;p<m;p++)h+=this.curves[p].getLength(),e.push(h);return this.cacheLengths=e,e}getSpacedPoints(e=40){let h=[];for(let p=0;p<=e;p++)h.push(this.getPoint(p/e));if(this.autoClose)h.push(h[0]);return h}getPoints(e=12){let h=[],p;for(let m=0,g=this.curves;m<g.length;m++){let _=g[m],x=_.isEllipseCurve?e*2:_.isLineCurve||_.isLineCurve3?1:_.isSplineCurve?e*_.points.length:e,v=_.getPoints(x);for(let y=0;y<v.length;y++){let M=v[y];if(p&&p.equals(M))continue;h.push(M),p=M}}if(this.autoClose&&h.length>1&&!h[h.length-1].equals(h[0]))h.push(h[0]);return h}copy(e){super.copy(e),this.curves=[];for(let h=0,p=e.curves.length;h<p;h++){let m=e.curves[h];this.curves.push(m.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let h=0,p=this.curves.length;h<p;h++){let m=this.curves[h];e.curves.push(m.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let h=0,p=e.curves.length;h<p;h++){let m=e.curves[h];this.curves.push(new qa[m.type]().fromJSON(m))}return this}}class cr extends Io{constructor(e){super();if(this.type="Path",this.currentPoint=new bt,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let h=1,p=e.length;h<p;h++)this.lineTo(e[h].x,e[h].y);return this}moveTo(e,h){return this.currentPoint.set(e,h),this}lineTo(e,h){let p=new Cr(this.currentPoint.clone(),new bt(e,h));return this.curves.push(p),this.currentPoint.set(e,h),this}quadraticCurveTo(e,h,p,m){let g=new Pr(this.currentPoint.clone(),new bt(e,h),new bt(p,m));return this.curves.push(g),this.currentPoint.set(p,m),this}bezierCurveTo(e,h,p,m,g,_){let x=new Rr(this.currentPoint.clone(),new bt(e,h),new bt(p,m),new bt(g,_));return this.curves.push(x),this.currentPoint.set(g,_),this}splineThru(e){let h=[this.currentPoint.clone()].concat(e),p=new Ir(h);return this.curves.push(p),this.currentPoint.copy(e[e.length-1]),this}arc(e,h,p,m,g,_){let x=this.currentPoint.x,v=this.currentPoint.y;return this.absarc(e+x,h+v,p,m,g,_),this}absarc(e,h,p,m,g,_){return this.absellipse(e,h,p,p,m,g,_),this}ellipse(e,h,p,m,g,_,x,v){let y=this.currentPoint.x,M=this.currentPoint.y;return this.absellipse(e+y,h+M,p,m,g,_,x,v),this}absellipse(e,h,p,m,g,_,x,v){let y=new vs(e,h,p,m,g,_,x,v);if(this.curves.length>0){let b=y.getPoint(0);if(!b.equals(this.currentPoint))this.lineTo(b.x,b.y)}this.curves.push(y);let M=y.getPoint(1);return this.currentPoint.copy(M),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class li extends Oe{constructor(e=1,h=1,p=1,m=32,g=1,_=!1,x=0,v=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:h,height:p,radialSegments:m,heightSegments:g,openEnded:_,thetaStart:x,thetaLength:v};let y=this;m=Math.floor(m),g=Math.floor(g);let M=[],b=[],S=[],E=[],A=0,R=[],P=p/2,T=0;if(w(),_===!1){if(e>0)O(!0);if(h>0)O(!1)}this.setIndex(M),this.setAttribute("position",new Ce(b,3)),this.setAttribute("normal",new Ce(S,3)),this.setAttribute("uv",new Ce(E,2));function w(){let D=new H,N=new H,Q=0,B=(h-e)/p;for(let z=0;z<=g;z++){let j=[],L=z/g,U=L*(h-e)+e;for(let k=0;k<=m;k++){let K=k/m,nt=K*v+x,tt=Math.sin(nt),ht=Math.cos(nt);N.x=U*tt,N.y=-L*p+P,N.z=U*ht,b.push(N.x,N.y,N.z),D.set(tt,B,ht).normalize(),S.push(D.x,D.y,D.z),E.push(K,1-L),j.push(A++)}R.push(j)}for(let z=0;z<m;z++)for(let j=0;j<g;j++){let L=R[j][z],U=R[j+1][z],k=R[j+1][z+1],K=R[j][z+1];if(e>0||j!==0)M.push(L,U,K),Q+=3;if(h>0||j!==g-1)M.push(U,k,K),Q+=3}y.addGroup(T,Q,0),T+=Q}function O(D){let N=A,Q=new bt,B=new H,z=0,j=D===!0?e:h,L=D===!0?1:-1;for(let k=1;k<=m;k++)b.push(0,P*L,0),S.push(0,L,0),E.push(0.5,0.5),A++;let U=A;for(let k=0;k<=m;k++){let nt=k/m*v+x,tt=Math.cos(nt),ht=Math.sin(nt);B.x=j*ht,B.y=P*L,B.z=j*tt,b.push(B.x,B.y,B.z),S.push(0,L,0),Q.x=tt*0.5+0.5,Q.y=ht*0.5*L+0.5,E.push(Q.x,Q.y),A++}for(let k=0;k<m;k++){let K=N+k,nt=U+k;if(D===!0)M.push(nt,nt+1,K);else M.push(nt+1,nt,K);z+=3}y.addGroup(T,z,D===!0?1:2),T+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ys extends li{constructor(e=1,h=1,p=32,m=1,g=!1,_=0,x=Math.PI*2){super(0,e,h,p,m,g,_,x);this.type="ConeGeometry",this.parameters={radius:e,height:h,radialSegments:p,heightSegments:m,openEnded:g,thetaStart:_,thetaLength:x}}static fromJSON(e){return new ys(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}var as=new H,os=new H,rr=new H,ls=new Ve;class Dr extends Oe{constructor(e=null,h=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:h},e!==null){let m=Math.pow(10,4),g=Math.cos(ii*h),_=e.getIndex(),x=e.getAttribute("position"),v=_?_.count:x.count,y=[0,0,0],M=["a","b","c"],b=[,,,],S={},E=[];for(let A=0;A<v;A+=3){if(_)y[0]=_.getX(A),y[1]=_.getX(A+1),y[2]=_.getX(A+2);else y[0]=A,y[1]=A+1,y[2]=A+2;let{a:R,b:P,c:T}=ls;if(R.fromBufferAttribute(x,y[0]),P.fromBufferAttribute(x,y[1]),T.fromBufferAttribute(x,y[2]),ls.getNormal(rr),b[0]=`${Math.round(R.x*m)},${Math.round(R.y*m)},${Math.round(R.z*m)}`,b[1]=`${Math.round(P.x*m)},${Math.round(P.y*m)},${Math.round(P.z*m)}`,b[2]=`${Math.round(T.x*m)},${Math.round(T.y*m)},${Math.round(T.z*m)}`,b[0]===b[1]||b[1]===b[2]||b[2]===b[0])continue;for(let w=0;w<3;w++){let O=(w+1)%3,D=b[w],N=b[O],Q=ls[M[w]],B=ls[M[O]],z=`${D}_${N}`,j=`${N}_${D}`;if(j in S&&S[j]){if(rr.dot(S[j].normal)<=g)E.push(Q.x,Q.y,Q.z),E.push(B.x,B.y,B.z);S[j]=null}else if(!(z in S))S[z]={index0:y[w],index1:y[O],normal:rr.clone()}}}for(let A in S)if(S[A]){let{index0:R,index1:P}=S[A];as.fromBufferAttribute(x,R),os.fromBufferAttribute(x,P),E.push(as.x,as.y,as.z),E.push(os.x,os.y,os.z)}this.setAttribute("position",new Ce(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ms extends cr{constructor(e){super(e);this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let h=[];for(let p=0,m=this.holes.length;p<m;p++)h[p]=this.holes[p].getPoints(e);return h}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let h=0,p=e.holes.length;h<p;h++){let m=e.holes[h];this.holes.push(m.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let h=0,p=this.holes.length;h<p;h++){let m=this.holes[h];e.holes.push(m.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let h=0,p=e.holes.length;h<p;h++){let m=e.holes[h];this.holes.push(new cr().fromJSON(m))}return this}}var Sf={triangulate:function(e,h,p=2){let m=h&&h.length,g=m?h[0]*p:e.length,_=Do(e,0,g,p,!0),x=[];if(!_||_.next===_.prev)return x;let v,y,M,b,S,E,A;if(m)_=Af(e,h,_,p);if(e.length>80*p){v=M=e[0],y=b=e[1];for(let R=p;R<g;R+=p){if(S=e[R],E=e[R+1],S<v)v=S;if(E<y)y=E;if(S>M)M=S;if(E>b)b=E}A=Math.max(M-v,b-y),A=A!==0?32767/A:0}return Ai(_,x,p,v,y,A,0),x}};function Do(e,h,p,m,g){let _,x;if(g===Bf(e,h,p,m)>0)for(_=h;_<p;_+=m)x=Ya(_,e[_],e[_+1],x);else for(_=p-m;_>=h;_-=m)x=Ya(_,e[_],e[_+1],x);if(x&&Ss(x,x.next))Ci(x),x=x.next;return x}function Nn(e,h){if(!e)return e;if(!h)h=e;let p=e,m;do if(m=!1,!p.steiner&&(Ss(p,p.next)||me(p.prev,p,p.next)===0)){if(Ci(p),p=h=p.prev,p===p.next)break;m=!0}else p=p.next;while(m||p!==h);return h}function Ai(e,h,p,m,g,_,x){if(!e)return;if(!x&&_)Df(e,m,g,_);let v=e,y,M;while(e.prev!==e.next){if(y=e.prev,M=e.next,_?Ef(e,m,g,_):bf(e)){h.push(y.i/p|0),h.push(e.i/p|0),h.push(M.i/p|0),Ci(e),e=M.next,v=M.next;continue}if(e=M,e===v){if(!x)Ai(Nn(e),h,p,m,g,_,1);else if(x===1)e=Tf(Nn(e),h,p),Ai(e,h,p,m,g,_,2);else if(x===2)wf(e,h,p,m,g,_);break}}}function bf(e){let h=e.prev,p=e,m=e.next;if(me(h,p,m)>=0)return!1;let g=h.x,_=p.x,x=m.x,v=h.y,y=p.y,M=m.y,b=g<_?g<x?g:x:_<x?_:x,S=v<y?v<M?v:M:y<M?y:M,E=g>_?g>x?g:x:_>x?_:x,A=v>y?v>M?v:M:y>M?y:M,R=m.next;while(R!==h){if(R.x>=b&&R.x<=E&&R.y>=S&&R.y<=A&&ni(g,v,_,y,x,M,R.x,R.y)&&me(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function Ef(e,h,p,m){let g=e.prev,_=e,x=e.next;if(me(g,_,x)>=0)return!1;let v=g.x,y=_.x,M=x.x,b=g.y,S=_.y,E=x.y,A=v<y?v<M?v:M:y<M?y:M,R=b<S?b<E?b:E:S<E?S:E,P=v>y?v>M?v:M:y>M?y:M,T=b>S?b>E?b:E:S>E?S:E,w=hr(A,R,h,p,m),O=hr(P,T,h,p,m),{prevZ:D,nextZ:N}=e;while(D&&D.z>=w&&N&&N.z<=O){if(D.x>=A&&D.x<=P&&D.y>=R&&D.y<=T&&D!==g&&D!==x&&ni(v,b,y,S,M,E,D.x,D.y)&&me(D.prev,D,D.next)>=0)return!1;if(D=D.prevZ,N.x>=A&&N.x<=P&&N.y>=R&&N.y<=T&&N!==g&&N!==x&&ni(v,b,y,S,M,E,N.x,N.y)&&me(N.prev,N,N.next)>=0)return!1;N=N.nextZ}while(D&&D.z>=w){if(D.x>=A&&D.x<=P&&D.y>=R&&D.y<=T&&D!==g&&D!==x&&ni(v,b,y,S,M,E,D.x,D.y)&&me(D.prev,D,D.next)>=0)return!1;D=D.prevZ}while(N&&N.z<=O){if(N.x>=A&&N.x<=P&&N.y>=R&&N.y<=T&&N!==g&&N!==x&&ni(v,b,y,S,M,E,N.x,N.y)&&me(N.prev,N,N.next)>=0)return!1;N=N.nextZ}return!0}function Tf(e,h,p){let m=e;do{let g=m.prev,_=m.next.next;if(!Ss(g,_)&&Lo(g,m,m.next,_)&&Ri(g,_)&&Ri(_,g))h.push(g.i/p|0),h.push(m.i/p|0),h.push(_.i/p|0),Ci(m),Ci(m.next),m=e=_;m=m.next}while(m!==e);return Nn(m)}function wf(e,h,p,m,g,_){let x=e;do{let v=x.next.next;while(v!==x.prev){if(x.i!==v.i&&Nf(x,v)){let y=Uo(x,v);x=Nn(x,x.next),y=Nn(y,y.next),Ai(x,h,p,m,g,_,0),Ai(y,h,p,m,g,_,0);return}v=v.next}x=x.next}while(x!==e)}function Af(e,h,p,m){let g=[],_,x,v,y,M;for(_=0,x=h.length;_<x;_++){if(v=h[_]*m,y=_<x-1?h[_+1]*m:e.length,M=Do(e,v,y,m,!1),M===M.next)M.steiner=!0;g.push(Uf(M))}g.sort(Rf);for(_=0;_<g.length;_++)p=Cf(g[_],p);return p}function Rf(e,h){return e.x-h.x}function Cf(e,h){let p=Pf(e,h);if(!p)return h;let m=Uo(p,e);return Nn(m,m.next),Nn(p,p.next)}function Pf(e,h){let p=h,m=-1/0,g,{x:_,y:x}=e;do{if(x<=p.y&&x>=p.next.y&&p.next.y!==p.y){let E=p.x+(x-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(E<=_&&E>m){if(m=E,g=p.x<p.next.x?p:p.next,E===_)return g}}p=p.next}while(p!==h);if(!g)return null;let v=g,y=g.x,M=g.y,b=1/0,S;p=g;do{if(_>=p.x&&p.x>=y&&_!==p.x&&ni(x<M?_:m,x,y,M,x<M?m:_,x,p.x,p.y)){if(S=Math.abs(x-p.y)/(_-p.x),Ri(p,e)&&(S<b||S===b&&(p.x>g.x||p.x===g.x&&If(g,p))))g=p,b=S}p=p.next}while(p!==v);return g}function If(e,h){return me(e.prev,e,h.prev)<0&&me(h.next,e,e.next)<0}function Df(e,h,p,m){let g=e;do{if(g.z===0)g.z=hr(g.x,g.y,h,p,m);g.prevZ=g.prev,g.nextZ=g.next,g=g.next}while(g!==e);g.prevZ.nextZ=null,g.prevZ=null,Lf(g)}function Lf(e){let h,p,m,g,_,x,v,y,M=1;do{p=e,e=null,_=null,x=0;while(p){x++,m=p,v=0;for(h=0;h<M;h++)if(v++,m=m.nextZ,!m)break;y=M;while(v>0||y>0&&m){if(v!==0&&(y===0||!m||p.z<=m.z))g=p,p=p.nextZ,v--;else g=m,m=m.nextZ,y--;if(_)_.nextZ=g;else e=g;g.prevZ=_,_=g}p=m}_.nextZ=null,M*=2}while(x>1);return e}function hr(e,h,p,m,g){return e=(e-p)*g|0,h=(h-m)*g|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,h=(h|h<<8)&16711935,h=(h|h<<4)&252645135,h=(h|h<<2)&858993459,h=(h|h<<1)&1431655765,e|h<<1}function Uf(e){let h=e,p=e;do{if(h.x<p.x||h.x===p.x&&h.y<p.y)p=h;h=h.next}while(h!==e);return p}function ni(e,h,p,m,g,_,x,v){return(g-x)*(h-v)>=(e-x)*(_-v)&&(e-x)*(m-v)>=(p-x)*(h-v)&&(p-x)*(_-v)>=(g-x)*(m-v)}function Nf(e,h){return e.next.i!==h.i&&e.prev.i!==h.i&&!Ff(e,h)&&(Ri(e,h)&&Ri(h,e)&&Of(e,h)&&(me(e.prev,e,h.prev)||me(e,h.prev,h))||Ss(e,h)&&me(e.prev,e,e.next)>0&&me(h.prev,h,h.next)>0)}function me(e,h,p){return(h.y-e.y)*(p.x-h.x)-(h.x-e.x)*(p.y-h.y)}function Ss(e,h){return e.x===h.x&&e.y===h.y}function Lo(e,h,p,m){let g=hs(me(e,h,p)),_=hs(me(e,h,m)),x=hs(me(p,m,e)),v=hs(me(p,m,h));if(g!==_&&x!==v)return!0;if(g===0&&cs(e,p,h))return!0;if(_===0&&cs(e,m,h))return!0;if(x===0&&cs(p,e,m))return!0;if(v===0&&cs(p,h,m))return!0;return!1}function cs(e,h,p){return h.x<=Math.max(e.x,p.x)&&h.x>=Math.min(e.x,p.x)&&h.y<=Math.max(e.y,p.y)&&h.y>=Math.min(e.y,p.y)}function hs(e){return e>0?1:e<0?-1:0}function Ff(e,h){let p=e;do{if(p.i!==e.i&&p.next.i!==e.i&&p.i!==h.i&&p.next.i!==h.i&&Lo(p,p.next,e,h))return!0;p=p.next}while(p!==e);return!1}function Ri(e,h){return me(e.prev,e,e.next)<0?me(e,h,e.next)>=0&&me(e,e.prev,h)>=0:me(e,h,e.prev)<0||me(e,e.next,h)<0}function Of(e,h){let p=e,m=!1,g=(e.x+h.x)/2,_=(e.y+h.y)/2;do{if(p.y>_!==p.next.y>_&&p.next.y!==p.y&&g<(p.next.x-p.x)*(_-p.y)/(p.next.y-p.y)+p.x)m=!m;p=p.next}while(p!==e);return m}function Uo(e,h){let p=new ur(e.i,e.x,e.y),m=new ur(h.i,h.x,h.y),g=e.next,_=h.prev;return e.next=h,h.prev=e,p.next=g,g.prev=p,m.next=p,p.prev=m,_.next=m,m.prev=_,m}function Ya(e,h,p,m){let g=new ur(e,h,p);if(!m)g.prev=g,g.next=g;else g.next=m.next,g.prev=m,m.next.prev=g,m.next=g;return g}function Ci(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function ur(e,h,p){this.i=e,this.x=h,this.y=p,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bf(e,h,p,m){let g=0;for(let _=h,x=p-m;_<p;_+=m)g+=(e[x]-e[_])*(e[_+1]+e[x+1]),x=_;return g}class Ti{static area(e){let h=e.length,p=0;for(let m=h-1,g=0;g<h;m=g++)p+=e[m].x*e[g].y-e[g].x*e[m].y;return p*0.5}static isClockWise(e){return Ti.area(e)<0}static triangulateShape(e,h){let p=[],m=[],g=[];Za(e),Ja(p,e);let _=e.length;h.forEach(Za);for(let v=0;v<h.length;v++)m.push(_),_+=h[v].length,Ja(p,h[v]);let x=Sf.triangulate(p,m);for(let v=0;v<x.length;v+=3)g.push(x.slice(v,v+3));return g}}function Za(e){let h=e.length;if(h>2&&e[h-1].equals(e[0]))e.pop()}function Ja(e,h){for(let p=0;p<h.length;p++)e.push(h[p].x),e.push(h[p].y)}class bs extends Oe{constructor(e=new Ms([new bt(0,0.5),new bt(-0.5,-0.5),new bt(0.5,-0.5)]),h=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:h};let p=[],m=[],g=[],_=[],x=0,v=0;if(Array.isArray(e)===!1)y(e);else for(let M=0;M<e.length;M++)y(e[M]),this.addGroup(x,v,M),x+=v,v=0;this.setIndex(p),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(_,2));function y(M){let b=m.length/3,S=M.extractPoints(h),{shape:E,holes:A}=S;if(Ti.isClockWise(E)===!1)E=E.reverse();for(let P=0,T=A.length;P<T;P++){let w=A[P];if(Ti.isClockWise(w)===!0)A[P]=w.reverse()}let R=Ti.triangulateShape(E,A);for(let P=0,T=A.length;P<T;P++){let w=A[P];E=E.concat(w)}for(let P=0,T=E.length;P<T;P++){let w=E[P];m.push(w.x,w.y,0),g.push(0,0,1),_.push(w.x,w.y)}for(let P=0,T=R.length;P<T;P++){let w=R[P],O=w[0]+b,D=w[1]+b,N=w[2]+b;p.push(O,D,N),v+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),h=this.parameters.shapes;return zf(h,e)}static fromJSON(e,h){let p=[];for(let m=0,g=e.shapes.length;m<g;m++){let _=h[e.shapes[m]];p.push(_)}return new bs(p,e.curveSegments)}}function zf(e,h){if(h.shapes=[],Array.isArray(e))for(let p=0,m=e.length;p<m;p++){let g=e[p];h.shapes.push(g.uuid)}else h.shapes.push(e.uuid);return h}class Es extends zn{static get type(){return"MeshStandardMaterial"}constructor(e){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function us(e,h,p){if(!e||!p&&e.constructor===h)return e;if(typeof h.BYTES_PER_ELEMENT==="number")return new h(e);return Array.prototype.slice.call(e)}function kf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}class Ui{constructor(e,h,p,m){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=m!==void 0?m:new h.constructor(p),this.sampleValues=h,this.valueSize=p,this.settings=null,this.DefaultSettings_={}}evaluate(e){let h=this.parameterPositions,p=this._cachedIndex,m=h[p],g=h[p-1];n:{t:{let _;e:{i:if(!(e<m)){for(let x=p+2;;){if(m===void 0){if(e<g)break i;return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}if(p===x)break;if(g=m,m=h[++p],e<m)break t}_=h.length;break e}if(!(e>=g)){let x=h[1];if(e<x)p=2,g=x;for(let v=p-2;;){if(g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(p===v)break;if(m=g,g=h[--p-1],e>=g)break t}_=p,p=0;break e}break n}while(p<_){let x=p+_>>>1;if(e<h[x])_=x;else p=x+1}if(m=h[p],g=h[p-1],g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(m===void 0)return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}this._cachedIndex=p,this.intervalChanged_(p,g,m)}return this.interpolate_(p,g,e,m)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let h=this.resultBuffer,p=this.sampleValues,m=this.valueSize,g=e*m;for(let _=0;_!==m;++_)h[_]=p[g+_];return h}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class No extends Ui{constructor(e,h,p,m){super(e,h,p,m);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,h,p){let m=this.parameterPositions,g=e-2,_=e+1,x=m[g],v=m[_];if(x===void 0)switch(this.getSettings_().endingStart){case 2401:g=e,x=2*h-p;break;case 2402:g=m.length-2,x=h+m[g]-m[g+1];break;default:g=e,x=p}if(v===void 0)switch(this.getSettings_().endingEnd){case 2401:_=e,v=2*p-h;break;case 2402:_=1,v=p+m[1]-m[0];break;default:_=e-1,v=h}let y=(p-h)*0.5,M=this.valueSize;this._weightPrev=y/(h-x),this._weightNext=y/(v-p),this._offsetPrev=g*M,this._offsetNext=_*M}interpolate_(e,h,p,m){let g=this.resultBuffer,_=this.sampleValues,x=this.valueSize,v=e*x,y=v-x,M=this._offsetPrev,b=this._offsetNext,S=this._weightPrev,E=this._weightNext,A=(p-h)/(m-h),R=A*A,P=R*A,T=-S*P+2*S*R-S*A,w=(1+S)*P+(-1.5-2*S)*R+(-0.5+S)*A+1,O=(-1-E)*P+(1.5+E)*R+0.5*A,D=E*P-E*R;for(let N=0;N!==x;++N)g[N]=T*_[M+N]+w*_[y+N]+O*_[v+N]+D*_[b+N];return g}}class Fo extends Ui{constructor(e,h,p,m){super(e,h,p,m)}interpolate_(e,h,p,m){let g=this.resultBuffer,_=this.sampleValues,x=this.valueSize,v=e*x,y=v-x,M=(p-h)/(m-h),b=1-M;for(let S=0;S!==x;++S)g[S]=_[y+S]*b+_[v+S]*M;return g}}class Oo extends Ui{constructor(e,h,p,m){super(e,h,p,m)}interpolate_(e){return this.copySampleValue_(e-1)}}class sn{constructor(e,h,p,m){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(h===void 0||h.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=us(h,this.TimeBufferType),this.values=us(p,this.ValueBufferType),this.setInterpolation(m||this.DefaultInterpolation)}static toJSON(e){let h=e.constructor,p;if(h.toJSON!==this.toJSON)p=h.toJSON(e);else{p={name:e.name,times:us(e.times,Array),values:us(e.values,Array)};let m=e.getInterpolation();if(m!==e.DefaultInterpolation)p.interpolation=m}return p.type=e.ValueTypeName,p}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new No(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let h;switch(e){case 2300:h=this.InterpolantFactoryMethodDiscrete;break;case 2301:h=this.InterpolantFactoryMethodLinear;break;case 2302:h=this.InterpolantFactoryMethodSmooth;break}if(h===void 0){let p="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(p);return console.warn("THREE.KeyframeTrack:",p),this}return this.createInterpolant=h,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]+=e}return this}scale(e){if(e!==1){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]*=e}return this}trim(e,h){let p=this.times,m=p.length,g=0,_=m-1;while(g!==m&&p[g]<e)++g;while(_!==-1&&p[_]>h)--_;if(++_,g!==0||_!==m){if(g>=_)_=Math.max(_,1),g=_-1;let x=this.getValueSize();this.times=p.slice(g,_),this.values=this.values.slice(g*x,_*x)}return this}validate(){let e=!0,h=this.getValueSize();if(h-Math.floor(h)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1;let p=this.times,m=this.values,g=p.length;if(g===0)console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1;let _=null;for(let x=0;x!==g;x++){let v=p[x];if(typeof v==="number"&&isNaN(v)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,x,v),e=!1;break}if(_!==null&&_>v){console.error("THREE.KeyframeTrack: Out of order keys.",this,x,v,_),e=!1;break}_=v}if(m!==void 0){if(kf(m))for(let x=0,v=m.length;x!==v;++x){let y=m[x];if(isNaN(y)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,x,y),e=!1;break}}}return e}optimize(){let e=this.times.slice(),h=this.values.slice(),p=this.getValueSize(),m=this.getInterpolation()===2302,g=e.length-1,_=1;for(let x=1;x<g;++x){let v=!1,y=e[x],M=e[x+1];if(y!==M&&(x!==1||y!==e[0]))if(!m){let b=x*p,S=b-p,E=b+p;for(let A=0;A!==p;++A){let R=h[b+A];if(R!==h[S+A]||R!==h[E+A]){v=!0;break}}}else v=!0;if(v){if(x!==_){e[_]=e[x];let b=x*p,S=_*p;for(let E=0;E!==p;++E)h[S+E]=h[b+E]}++_}}if(g>0){e[_]=e[g];for(let x=g*p,v=_*p,y=0;y!==p;++y)h[v+y]=h[x+y];++_}if(_!==e.length)this.times=e.slice(0,_),this.values=h.slice(0,_*p);else this.times=e,this.values=h;return this}clone(){let e=this.times.slice(),h=this.values.slice(),m=new this.constructor(this.name,e,h);return m.createInterpolant=this.createInterpolant,m}}sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=2301;class ci extends sn{constructor(e,h,p){super(e,h,p)}}ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=2300;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;class Bo extends sn{}Bo.prototype.ValueTypeName="color";class zo extends sn{}zo.prototype.ValueTypeName="number";class ko extends Ui{constructor(e,h,p,m){super(e,h,p,m)}interpolate_(e,h,p,m){let g=this.resultBuffer,_=this.sampleValues,x=this.valueSize,v=(p-h)/(m-h),y=e*x;for(let M=y+x;y!==M;y+=4)nn.slerpFlat(g,0,_,y-x,_,y,v);return g}}class Lr extends sn{InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}}Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class hi extends sn{constructor(e,h,p){super(e,h,p)}}hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=2300;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends sn{}Ho.prototype.ValueTypeName="vector";class Go{constructor(e,h,p){let m=this,g=!1,_=0,x=0,v=void 0,y=[];this.onStart=void 0,this.onLoad=e,this.onProgress=h,this.onError=p,this.itemStart=function(M){if(x++,g===!1){if(m.onStart!==void 0)m.onStart(M,_,x)}g=!0},this.itemEnd=function(M){if(_++,m.onProgress!==void 0)m.onProgress(M,_,x);if(_===x){if(g=!1,m.onLoad!==void 0)m.onLoad()}},this.itemError=function(M){if(m.onError!==void 0)m.onError(M)},this.resolveURL=function(M){if(v)return v(M);return M},this.setURLModifier=function(M){return v=M,this},this.addHandler=function(M,b){return y.push(M,b),this},this.removeHandler=function(M){let b=y.indexOf(M);if(b!==-1)y.splice(b,2);return this},this.getHandler=function(M){for(let b=0,S=y.length;b<S;b+=2){let E=y[b],A=y[b+1];if(E.global)E.lastIndex=0;if(E.test(M))return A}return null}}}var Hf=new Go;class Wo{constructor(e){this.manager=e!==void 0?e:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,h){let p=this;return new Promise(function(m,g){p.load(e,m,h,g)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ur extends we{constructor(e,h=1){super();this.isLight=!0,this.type="Light",this.color=new Qt(e),this.intensity=h}dispose(){}copy(e,h){return super.copy(e,h),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let h=super.toJSON(e);if(h.object.color=this.color.getHex(),h.object.intensity=this.intensity,this.groundColor!==void 0)h.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)h.object.distance=this.distance;if(this.angle!==void 0)h.object.angle=this.angle;if(this.decay!==void 0)h.object.decay=this.decay;if(this.penumbra!==void 0)h.object.penumbra=this.penumbra;if(this.shadow!==void 0)h.object.shadow=this.shadow.toJSON();if(this.target!==void 0)h.object.target=this.target.uuid;return h}}class Nr extends Ur{constructor(e,h,p){super(e,p);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(h)}copy(e,h){return super.copy(e,h),this.groundColor.copy(e.groundColor),this}}var ar=new fe,$a=new H,Ka=new H;class Vo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let h=this.camera,p=this.matrix;$a.setFromMatrixPosition(e.matrixWorld),h.position.copy($a),Ka.setFromMatrixPosition(e.target.matrixWorld),h.lookAt(Ka),h.updateMatrixWorld(),ar.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ar),p.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),p.multiply(ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};if(this.intensity!==1)e.intensity=this.intensity;if(this.bias!==0)e.bias=this.bias;if(this.normalBias!==0)e.normalBias=this.normalBias;if(this.radius!==1)e.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)e.mapSize=this.mapSize.toArray();return e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xo extends Vo{constructor(){super(new Mr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Fr extends Ur{constructor(e,h){super(e,h);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Xo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}var Or="\\[\\]\\.:\\/",Gf=new RegExp("["+Or+"]","g"),Br="[^"+Or+"]",Wf="[^"+Or.replace("\\.","")+"]",Vf=/((?:WC+[\/:])*)/.source.replace("WC",Br),Xf=/(WCOD+)?/.source.replace("WCOD",Wf),qf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Br),Yf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Br),Zf=new RegExp("^"+Vf+Xf+qf+Yf+"$"),Jf=["material","materials","bones","map"];class qo{constructor(e,h,p){let m=p||oe.parseTrackName(h);this._targetGroup=e,this._bindings=e.subscribe_(h,m)}getValue(e,h){this.bind();let p=this._targetGroup.nCachedObjects_,m=this._bindings[p];if(m!==void 0)m.getValue(e,h)}setValue(e,h){let p=this._bindings;for(let m=this._targetGroup.nCachedObjects_,g=p.length;m!==g;++m)p[m].setValue(e,h)}bind(){let e=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=e.length;h!==p;++h)e[h].bind()}unbind(){let e=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=e.length;h!==p;++h)e[h].unbind()}}class oe{constructor(e,h,p){this.path=h,this.parsedPath=p||oe.parseTrackName(h),this.node=oe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,h,p){if(!(e&&e.isAnimationObjectGroup))return new oe(e,h,p);else return new oe.Composite(e,h,p)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gf,"")}static parseTrackName(e){let h=Zf.exec(e);if(h===null)throw Error("PropertyBinding: Cannot parse trackName: "+e);let p={nodeName:h[2],objectName:h[3],objectIndex:h[4],propertyName:h[5],propertyIndex:h[6]},m=p.nodeName&&p.nodeName.lastIndexOf(".");if(m!==void 0&&m!==-1){let g=p.nodeName.substring(m+1);if(Jf.indexOf(g)!==-1)p.nodeName=p.nodeName.substring(0,m),p.objectName=g}if(p.propertyName===null||p.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return p}static findNode(e,h){if(h===void 0||h===""||h==="."||h===-1||h===e.name||h===e.uuid)return e;if(e.skeleton){let p=e.skeleton.getBoneByName(h);if(p!==void 0)return p}if(e.children){let p=function(g){for(let _=0;_<g.length;_++){let x=g[_];if(x.name===h||x.uuid===h)return x;let v=p(x.children);if(v)return v}return null},m=p(e.children);if(m)return m}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,h){e[h]=this.targetObject[this.propertyName]}_getValue_array(e,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)e[h++]=p[m]}_getValue_arrayElement(e,h){e[h]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,h){this.resolvedProperty.toArray(e,h)}_setValue_direct(e,h){this.targetObject[this.propertyName]=e[h]}_setValue_direct_setNeedsUpdate(e,h){this.targetObject[this.propertyName]=e[h],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,h){this.targetObject[this.propertyName]=e[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=e[h++]}_setValue_array_setNeedsUpdate(e,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=e[h++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=e[h++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,h){this.resolvedProperty[this.propertyIndex]=e[h]}_setValue_arrayElement_setNeedsUpdate(e,h){this.resolvedProperty[this.propertyIndex]=e[h],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,h){this.resolvedProperty[this.propertyIndex]=e[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,h){this.resolvedProperty.fromArray(e,h)}_setValue_fromArray_setNeedsUpdate(e,h){this.resolvedProperty.fromArray(e,h),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,h){this.resolvedProperty.fromArray(e,h),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,h){this.bind(),this.getValue(e,h)}_setValue_unbound(e,h){this.bind(),this.setValue(e,h)}bind(){let e=this.node,h=this.parsedPath,{objectName:p,propertyName:m,propertyIndex:g}=h;if(!e)e=oe.findNode(this.rootNode,h.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(p){let y=h.objectIndex;switch(p){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let M=0;M<e.length;M++)if(e[M].name===y){y=M;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[p]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[p]}if(y!==void 0){if(e[y]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[y]}}let _=e[m];if(_===void 0){let y=h.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+y+"."+m+" but it wasn't found.",e);return}let x=this.Versioning.None;if(this.targetObject=e,e.needsUpdate!==void 0)x=this.Versioning.NeedsUpdate;else if(e.matrixWorldNeedsUpdate!==void 0)x=this.Versioning.MatrixWorldNeedsUpdate;let v=this.BindingType.Direct;if(g!==void 0){if(m==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[g]!==void 0)g=e.morphTargetDictionary[g]}v=this.BindingType.ArrayElement,this.resolvedProperty=_,this.propertyIndex=g}else if(_.fromArray!==void 0&&_.toArray!==void 0)v=this.BindingType.HasFromToArray,this.resolvedProperty=_;else if(Array.isArray(_))v=this.BindingType.EntireArray,this.resolvedProperty=_;else this.propertyName=m;this.getValue=this.GetterByBindingType[v],this.setValue=this.SetterByBindingTypeAndVersioning[v][x]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=qo;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hp=new Float32Array(1);class Ts{constructor(e=1,h=0,p=0){return this.radius=e,this.phi=h,this.theta=p,this}set(e,h,p){return this.radius=e,this.phi=h,this.theta=p,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,h,p){if(this.radius=Math.sqrt(e*e+h*h+p*p),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(e,p),this.phi=Math.acos(Ee(h/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class zr extends Tn{constructor(e,h=null){super();this.object=e,this.domElement=h,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="170";var Yo={type:"change"},Hr={type:"start"},Jo={type:"end"},ws=new Ii,Zo=new Qe,Kf=Math.cos(70*eo.DEG2RAD),Se=new H,Be=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kr=0.000001;class Gr extends zr{constructor(e,h=null){super(e,h);if(this.state=le.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:On.ROTATE,TWO:On.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new nn,this._lastTargetPosition=new H,this._quat=new nn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ts,this._sphericalDelta=new Ts,this._scale=1,this._panOffset=new H,this._rotateStart=new bt,this._rotateEnd=new bt,this._rotateDelta=new bt,this._panStart=new bt,this._panEnd=new bt,this._panDelta=new bt,this._dollyStart=new bt,this._dollyEnd=new bt,this._dollyDelta=new bt,this._dollyDirection=new H,this._mouse=new bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qf.bind(this),this._onPointerDown=jf.bind(this),this._onPointerUp=tp.bind(this),this._onContextMenu=op.bind(this),this._onMouseWheel=ip.bind(this),this._onKeyDown=sp.bind(this),this._onTouchStart=rp.bind(this),this._onTouchMove=ap.bind(this),this._onMouseDown=ep.bind(this),this._onMouseMove=np.bind(this),this._interceptControlDown=lp.bind(this),this._interceptControlUp=cp.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yo),this.update(),this.state=le.NONE}update(e=null){let h=this.object.position;if(Se.copy(h).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===le.NONE)this._rotateLeft(this._getAutoRotationAngle(e));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let p=this.minAzimuthAngle,m=this.maxAzimuthAngle;if(isFinite(p)&&isFinite(m)){if(p<-Math.PI)p+=Be;else if(p>Math.PI)p-=Be;if(m<-Math.PI)m+=Be;else if(m>Math.PI)m-=Be;if(p<=m)this._spherical.theta=Math.max(p,Math.min(m,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(p+m)/2?Math.max(p,this._spherical.theta):Math.min(m,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let g=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let _=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),g=_!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),h.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let _=null;if(this.object.isPerspectiveCamera){let x=Se.length();_=this._clampDistance(x*this._scale);let v=x-_;this.object.position.addScaledVector(this._dollyDirection,v),this.object.updateMatrixWorld(),g=!!v}else if(this.object.isOrthographicCamera){let x=new H(this._mouse.x,this._mouse.y,0);x.unproject(this.object);let v=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),g=v!==this.object.zoom;let y=new H(this._mouse.x,this._mouse.y,0);y.unproject(this.object),this.object.position.sub(y).add(x),this.object.updateMatrixWorld(),_=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(_!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(_).add(this.object.position);else if(ws.origin.copy(this.object.position),ws.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ws.direction))<Kf)this.object.lookAt(this.target);else Zo.setFromNormalAndCoplanarPoint(this.object.up,this.target),ws.intersectPlane(Zo,this.target)}else if(this.object.isOrthographicCamera){let _=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),_!==this.object.zoom)this.object.updateProjectionMatrix(),g=!0}if(this._scale=1,this._performCursorZoom=!1,g||this._lastPosition.distanceToSquared(this.object.position)>kr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kr||this._lastTargetPosition.distanceToSquared(this.target)>kr)return this.dispatchEvent(Yo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(e){if(e!==null)return Be/60*this.autoRotateSpeed*e;else return Be/60/60*this.autoRotateSpeed}_getZoomScale(e){let h=Math.abs(e*0.01);return Math.pow(0.95,this.zoomSpeed*h)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,h){Se.setFromMatrixColumn(h,0),Se.multiplyScalar(-e),this._panOffset.add(Se)}_panUp(e,h){if(this.screenSpacePanning===!0)Se.setFromMatrixColumn(h,1);else Se.setFromMatrixColumn(h,0),Se.crossVectors(this.object.up,Se);Se.multiplyScalar(e),this._panOffset.add(Se)}_pan(e,h){let p=this.domElement;if(this.object.isPerspectiveCamera){let m=this.object.position;Se.copy(m).sub(this.target);let g=Se.length();g*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*g/p.clientHeight,this.object.matrix),this._panUp(2*h*g/p.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/p.clientWidth,this.object.matrix),this._panUp(h*(this.object.top-this.object.bottom)/this.object.zoom/p.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(e){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=e;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(e){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=e;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(e,h){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let p=this.domElement.getBoundingClientRect(),m=e-p.left,g=h-p.top,{width:_,height:x}=p;this._mouse.x=m/_*2-1,this._mouse.y=-(g/x)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/h.clientHeight),this._rotateUp(Be*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){if(this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){if(this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0)this._dollyIn(this._getZoomScale(e.deltaY));else if(e.deltaY>0)this._dollyOut(this._getZoomScale(e.deltaY));this.update()}_handleKeyDown(e){let h=!1;switch(e.code){case this.keys.UP:if(e.ctrlKey||e.metaKey||e.shiftKey)this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,this.keyPanSpeed);h=!0;break;case this.keys.BOTTOM:if(e.ctrlKey||e.metaKey||e.shiftKey)this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,-this.keyPanSpeed);h=!0;break;case this.keys.LEFT:if(e.ctrlKey||e.metaKey||e.shiftKey)this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight);else this._pan(this.keyPanSpeed,0);h=!0;break;case this.keys.RIGHT:if(e.ctrlKey||e.metaKey||e.shiftKey)this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight);else this._pan(-this.keyPanSpeed,0);h=!0;break}if(h)e.preventDefault(),this.update()}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let h=this._getSecondPointerPosition(e),p=0.5*(e.pageX+h.x),m=0.5*(e.pageY+h.y);this._rotateStart.set(p,m)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let h=this._getSecondPointerPosition(e),p=0.5*(e.pageX+h.x),m=0.5*(e.pageY+h.y);this._panStart.set(p,m)}}_handleTouchStartDolly(e){let h=this._getSecondPointerPosition(e),p=e.pageX-h.x,m=e.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyStart.set(0,g)}_handleTouchStartDollyPan(e){if(this.enableZoom)this._handleTouchStartDolly(e);if(this.enablePan)this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){if(this.enableZoom)this._handleTouchStartDolly(e);if(this.enableRotate)this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let p=this._getSecondPointerPosition(e),m=0.5*(e.pageX+p.x),g=0.5*(e.pageY+p.y);this._rotateEnd.set(m,g)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/h.clientHeight),this._rotateUp(Be*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let h=this._getSecondPointerPosition(e),p=0.5*(e.pageX+h.x),m=0.5*(e.pageY+h.y);this._panEnd.set(p,m)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let h=this._getSecondPointerPosition(e),p=e.pageX-h.x,m=e.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyEnd.set(0,g),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let _=(e.pageX+h.x)*0.5,x=(e.pageY+h.y)*0.5;this._updateZoomParameters(_,x)}_handleTouchMoveDollyPan(e){if(this.enableZoom)this._handleTouchMoveDolly(e);if(this.enablePan)this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){if(this.enableZoom)this._handleTouchMoveDolly(e);if(this.enableRotate)this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==e.pointerId){this._pointers.splice(h,1);return}}_isTrackingPointer(e){for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==e.pointerId)return!0;return!1}_trackPointer(e){let h=this._pointerPositions[e.pointerId];if(h===void 0)h=new bt,this._pointerPositions[e.pointerId]=h;h.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let h=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[h]}_customWheelEvent(e){let h=e.deltaMode,p={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(h){case 1:p.deltaY*=16;break;case 2:p.deltaY*=100;break}if(e.ctrlKey&&!this._controlActive)p.deltaY*=10;return p}}function jf(e){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(e))return;if(this._addPointer(e),e.pointerType==="touch")this._onTouchStart(e);else this._onMouseDown(e)}function Qf(e){if(this.enabled===!1)return;if(e.pointerType==="touch")this._onTouchMove(e);else this._onMouseMove(e)}function tp(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jo),this.state=le.NONE;break;case 1:let h=this._pointers[0],p=this._pointerPositions[h];this._onTouchStart({pointerId:h,pageX:p.x,pageY:p.y});break}}function ep(e){let h;switch(e.button){case 0:h=this.mouseButtons.LEFT;break;case 1:h=this.mouseButtons.MIDDLE;break;case 2:h=this.mouseButtons.RIGHT;break;default:h=-1}switch(h){case Fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=le.DOLLY;break;case Fn.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=le.ROTATE}break;case Fn.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=le.PAN}break;default:this.state=le.NONE}if(this.state!==le.NONE)this.dispatchEvent(Hr)}function np(e){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function ip(e){if(this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE)return;e.preventDefault(),this.dispatchEvent(Hr),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Jo)}function sp(e){if(this.enabled===!1||this.enablePan===!1)return;this._handleKeyDown(e)}function rp(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case On.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=le.TOUCH_ROTATE;break;case On.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case On.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=le.TOUCH_DOLLY_PAN;break;case On.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}if(this.state!==le.NONE)this.dispatchEvent(Hr)}function ap(e){switch(this._trackPointer(e),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=le.NONE}}function op(e){if(this.enabled===!1)return;e.preventDefault()}function lp(e){if(e.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function cp(e){if(e.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var ui=2.6,$o=1.15,Ko=0.12,As=new H(t(189),0,a(183));function mp(e){let h=new Er({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(devicePixelRatio,2)),h.shadowMap.enabled=!0,h.shadowMap.type=ja,h.outputColorSpace=to,e.appendChild(h.domElement);let p=new Tr,m=new Ne(40,1,0.1,100),g=new Gr(m,h.domElement);g.enableDamping=!0,g.maxPolarAngle=1.42,g.minDistance=2.5,g.maxDistance=22,g.screenSpacePanning=!0,p.add(new Nr(16777215,13617339,2.3));let _=new Fr(16774374,2.2);_.position.set(-4,10,12),_.castShadow=!0,_.shadow.mapSize.set(1024,1024),Object.assign(_.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:30}),_.shadow.bias=-0.0005,_.target.position.copy(As),p.add(_,_.target);let x=(it,q={})=>new Es({color:it,roughness:0.75,...q}),v=(it,q,at,_t,wt,gt,It)=>{let kt=new Te(new mn(it,q,at),_t);return kt.position.set(wt,gt,It),kt.castShadow=!0,kt.receiveShadow=!0,p.add(kt),kt},y=(it)=>{let q=new Ms;return it.forEach(([at,_t],wt)=>wt?q.lineTo(t(at),a(_t)):q.moveTo(t(at),a(_t))),q},M=(it,q)=>{let at=new bs(y(it));at.rotateX(Math.PI/2);let _t=new Te(at,x(q,{side:Qa,roughness:0.55}));_t.receiveShadow=!0,p.add(_t)};M(s,"#ebe6dd"),M(l,"#d8d3ca");let b=new dn,S=new Di({color:"#d6cfc3"});for(let it=50;it<=328;it+=24)b.add(new Li(new Oe().setFromPoints([new H(t(it),0.002,0),new H(t(it),0.002,a(346))]),S));for(let it=20;it<=346;it+=24)b.add(new Li(new Oe().setFromPoints([new H(0,0.002,a(it)),new H(t(328),0.002,a(it))]),S));p.add(b);let E=x("#fbfaf7",{roughness:0.9}),A=x("#9f9a92"),R=[],P=(it,q,at,_t=0,wt=E)=>{let gt=t(it[0]),It=a(it[1]),kt=t(q[0]),Bt=a(q[1]),$t=Math.hypot(kt-gt,Bt-It)+Ko,ce=new Te(new mn($t,at,Ko),wt);return ce.position.set((gt+kt)/2,_t+at/2,(It+Bt)/2),ce.rotation.y=-Math.atan2(Bt-It,kt-gt),ce.castShadow=!0,ce.receiveShadow=!0,p.add(ce),ce},T=(it)=>{for(let q=1;q<it.length;q++)R.push(P(it[q-1],it[q],ui))};c.forEach(T);let[w,O,D,N]=u;R.push(v(n(D),ui,n(N),E,t(w+D/2),ui/2,a(O+N/2)));let Q=x("#a9cde3",{transparent:!0,opacity:0.35,roughness:0.1,metalness:0.1}),B=[];d.forEach(([it,q])=>{P(it,q,1),P(it,q,1.1,1,Q),B.push(P(it,q,ui-2.1,2.1))}),P(r[0],r[1],2.1,0,x("#a9cde3",{transparent:!0,opacity:0.18,roughness:0.1})),B.push(P(r[0],r[1],ui-2.1,2.1)),P(o[0],o[1],1.05,0,x("#f1efe9",{transparent:!0,opacity:0.4}));let z=[];f.forEach((it)=>{let q=n(it.w),at=n(it.d),_t=t(it.x)+q/2,wt=a(it.y)+at/2,gt=it.base||0,It;if(it.forma==="cil"){let kt=new li(0.5,0.5,it.h,28);kt.scale(q,1,at);let Bt=new Te(kt,x(it.cor));Bt.position.set(_t,gt+it.h/2,wt),Bt.castShadow=Bt.receiveShadow=!0,p.add(Bt),It=Bt}else if(it.forma==="planta"){let kt=new dn,Bt=new Te(new li(q*0.32,q*0.24,0.3,16),x("#2b2b2b"));Bt.position.y=0.15;let $t=new Te(new ys(q*0.55,it.h-0.3,7),x(it.cor));$t.position.y=0.3+(it.h-0.3)/2,[Bt,$t].forEach((ce)=>{ce.castShadow=!0,kt.add(ce)}),kt.position.set(_t,0,wt),p.add(kt),It=kt}else if(it.forma==="vidro"){if(It=v(q,it.h,at,x(it.cor,{transparent:!0,opacity:0.35,roughness:0.1}),_t,gt+it.h/2,wt),it.nome==="Mesa de vidro")v(0.04,it.h,0.04,x("#c0c3c7",{metalness:0.6}),_t-q/2+0.05,it.h/2,wt-at/2+0.05),v(0.04,it.h,0.04,x("#c0c3c7",{metalness:0.6}),_t+q/2-0.05,it.h/2,wt+at/2-0.05)}else It=v(q,it.h,at,x(it.cor,it.forma==="espelho"?{metalness:0.5,roughness:0.15}:{}),_t,gt+it.h/2,wt);if(it.aereo||(it.base||0)+it.h>$o+0.1)z.push(It)}),v(n(116),0.03,n(20),x("#1d1e21",{roughness:0.3}),t(110),0.915,a(32));let j=new dn;p.add(j);let L=new Es({color:"#e0962e",transparent:!0,opacity:0.38}),U=new Di({color:"#c47a12"}),k=!1,K=()=>{},nt=()=>{R.forEach((it)=>{let q=it.geometry,at=k?ui:$o;it.scale.y=at/q.parameters.height,it.position.y=at/2}),B.forEach((it)=>it.visible=k),z.forEach((it)=>it.visible=k)};nt();let tt=null,ht=()=>{let{clientWidth:it,clientHeight:q}=e;h.setSize(it,q,!1),m.aspect=it/Math.max(1,q),m.updateProjectionMatrix()},st=new ResizeObserver(ht);st.observe(e),ht();let dt=()=>{let it=Math.max(1,0.95/m.aspect);return{t:As.clone(),p:new H(As.x+0.6*it,10*it,As.z+7.6*it)}},et=dt();m.position.copy(et.p),g.target.copy(et.t);let vt=0,Et=!0,zt=()=>{if(!Et)return;if(tt){if(g.target.lerp(tt.t,0.12),m.position.lerp(tt.p,0.12),m.position.distanceTo(tt.p)<0.02)tt=null}g.update(),h.render(p,m),K(),vt=requestAnimationFrame(zt)};return zt(),{focar(it){let q=i.find((wt)=>wt.id===it);if(!q){tt=dt();return}let at=new H(t(q.x+q.w/2),0,a(q.y+q.h/2)),_t=Math.max(n(q.w),n(q.h));tt={t:at,p:at.clone().add(new H(_t*0.5,2.4+_t*1.15,1.6+_t*1.1))}},paredes(it){k=it,nt()},fantasmas(it){j.clear(),it.forEach((q)=>{let at=new mn(q.l,q.a,q.p),_t=new Te(at,L);_t.position.set(q.x,q.a/2+0.005,q.z);let wt=new wr(new Dr(at),U);wt.position.copy(_t.position),j.add(_t,wt)})},projetar(it,q,at){let _t=new H(it,q,at).project(m);return{x:(_t.x+1)/2*e.clientWidth,y:(1-_t.y)/2*e.clientHeight,ok:_t.z<1}},onMudou(it){K=it},destruir(){Et=!1,cancelAnimationFrame(vt),st.disconnect(),g.dispose(),h.dispose(),p.traverse((it)=>{it.geometry?.dispose()}),h.domElement.remove()}}}export{mp as criarCena};
