import{n,e,t,i,s,l,c,u,d,o,f,r}from"./main-pvfmcxh6.js";var xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var $o=2;var Ko=1,wn=2;var jo=4;var fs=1000;var oa="srgb";class Jn{addEventListener(a,h){if(this._listeners===void 0)this._listeners={};let p=this._listeners;if(p[a]===void 0)p[a]=[];if(p[a].indexOf(h)===-1)p[a].push(h)}hasEventListener(a,h){if(this._listeners===void 0)return!1;let p=this._listeners;return p[a]!==void 0&&p[a].indexOf(h)!==-1}removeEventListener(a,h){if(this._listeners===void 0)return;let m=this._listeners[a];if(m!==void 0){let g=m.indexOf(h);if(g!==-1)m.splice(g,1)}}dispatchEvent(a){if(this._listeners===void 0)return;let p=this._listeners[a.type];if(p!==void 0){a.target=this;let m=p.slice(0);for(let g=0,_=m.length;g<_;g++)m[g].call(this,a);a.target=null}}}var Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=1234567,Fi=Math.PI/180,ls=180/Math.PI;function di(){let a=Math.random()*4294967295|0,h=Math.random()*4294967295|0,p=Math.random()*4294967295|0,m=Math.random()*4294967295|0;return(Ve[a&255]+Ve[a>>8&255]+Ve[a>>16&255]+Ve[a>>24&255]+"-"+Ve[h&255]+Ve[h>>8&255]+"-"+Ve[h>>16&15|64]+Ve[h>>24&255]+"-"+Ve[p&63|128]+Ve[p>>8&255]+"-"+Ve[p>>16&255]+Ve[p>>24&255]+Ve[m&255]+Ve[m>>8&255]+Ve[m>>16&255]+Ve[m>>24&255]).toLowerCase()}function Ue(a,h,p){return Math.max(h,Math.min(p,a))}function la(a,h){return(a%h+h)%h}function Ql(a,h,p,m,g){return m+(a-h)*(g-m)/(p-h)}function tc(a,h,p){if(a!==h)return(p-a)/(h-a);else return 0}function ss(a,h,p){return(1-p)*a+p*h}function ec(a,h,p,m){return ss(a,h,1-Math.exp(-p*m))}function nc(a,h=1){return h-Math.abs(la(a,h*2)-h)}function ic(a,h,p){if(a<=h)return 0;if(a>=p)return 1;return a=(a-h)/(p-h),a*a*(3-2*a)}function sc(a,h,p){if(a<=h)return 0;if(a>=p)return 1;return a=(a-h)/(p-h),a*a*a*(a*(a*6-15)+10)}function rc(a,h){return a+Math.floor(Math.random()*(h-a+1))}function ac(a,h){return a+Math.random()*(h-a)}function oc(a){return a*(0.5-Math.random())}function lc(a){if(a!==void 0)Wa=a;let h=Wa+=1831565813;return h=Math.imul(h^h>>>15,h|1),h^=h+Math.imul(h^h>>>7,h|61),((h^h>>>14)>>>0)/4294967296}function cc(a){return a*Fi}function hc(a){return a*ls}function uc(a){return(a&a-1)===0&&a!==0}function dc(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function fc(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function pc(a,h,p,m,g){let{cos:_,sin:y}=Math,x=_(p/2),M=y(p/2),S=_((h+m)/2),b=y((h+m)/2),v=_((h-m)/2),w=y((h-m)/2),C=_((m-h)/2),I=y((m-h)/2);switch(g){case"XYX":a.set(x*b,M*v,M*w,x*S);break;case"YZY":a.set(M*w,x*b,M*v,x*S);break;case"ZXZ":a.set(M*v,M*w,x*b,x*S);break;case"XZX":a.set(x*b,M*I,M*C,x*S);break;case"YXY":a.set(M*C,x*b,M*I,x*S);break;case"ZYZ":a.set(M*I,M*C,x*b,x*S);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+g)}}function Li(a,h){switch(h.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw Error("Invalid component type.")}}function Ze(a,h){switch(h.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw Error("Invalid component type.")}}var Qo={DEG2RAD:Fi,RAD2DEG:ls,generateUUID:di,clamp:Ue,euclideanModulo:la,mapLinear:Ql,inverseLerp:tc,lerp:ss,damp:ec,pingpong:nc,smoothstep:ic,smootherstep:sc,randInt:rc,randFloat:ac,randFloatSpread:oc,seededRandom:lc,degToRad:cc,radToDeg:hc,isPowerOfTwo:uc,ceilPowerOfTwo:dc,floorPowerOfTwo:fc,setQuaternionFromProperEuler:pc,normalize:Ze,denormalize:Li};class St{constructor(a=0,h=0){St.prototype.isVector2=!0,this.x=a,this.y=h}get width(){return this.x}set width(a){this.x=a}get height(){return this.y}set height(a){this.y=a}set(a,h){return this.x=a,this.y=h,this}setScalar(a){return this.x=a,this.y=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y)}copy(a){return this.x=a.x,this.y=a.y,this}add(a){return this.x+=a.x,this.y+=a.y,this}addScalar(a){return this.x+=a,this.y+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this}subScalar(a){return this.x-=a,this.y-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this}multiply(a){return this.x*=a.x,this.y*=a.y,this}multiplyScalar(a){return this.x*=a,this.y*=a,this}divide(a){return this.x/=a.x,this.y/=a.y,this}divideScalar(a){return this.multiplyScalar(1/a)}applyMatrix3(a){let h=this.x,p=this.y,m=a.elements;return this.x=m[0]*h+m[3]*p+m[6],this.y=m[1]*h+m[4]*p+m[7],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(a){return this.x*a.x+this.y*a.y}cross(a){return this.x*a.y-this.y*a.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(a){let h=Math.sqrt(this.lengthSq()*a.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(a)/h;return Math.acos(Ue(p,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){let h=this.x-a.x,p=this.y-a.y;return h*h+p*p}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this}equals(a){return a.x===this.x&&a.y===this.y}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this}rotateAround(a,h){let p=Math.cos(h),m=Math.sin(h),g=this.x-a.x,_=this.y-a.y;return this.x=g*p-_*m+a.x,this.y=g*m+_*p+a.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(a,h,p,m,g,_,y,x,M){if(ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],a!==void 0)this.set(a,h,p,m,g,_,y,x,M)}set(a,h,p,m,g,_,y,x,M){let S=this.elements;return S[0]=a,S[1]=m,S[2]=y,S[3]=h,S[4]=g,S[5]=x,S[6]=p,S[7]=_,S[8]=M,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(a){let h=this.elements,p=a.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],this}extractBasis(a,h,p){return a.setFromMatrix3Column(this,0),h.setFromMatrix3Column(this,1),p.setFromMatrix3Column(this,2),this}setFromMatrix4(a){let h=a.elements;return this.set(h[0],h[4],h[8],h[1],h[5],h[9],h[2],h[6],h[10]),this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,h){let p=a.elements,m=h.elements,g=this.elements,_=p[0],y=p[3],x=p[6],M=p[1],S=p[4],b=p[7],v=p[2],w=p[5],C=p[8],I=m[0],D=m[3],A=m[6],R=m[1],W=m[4],F=m[7],H=m[2],it=m[5],q=m[8];return g[0]=_*I+y*R+x*H,g[3]=_*D+y*W+x*it,g[6]=_*A+y*F+x*q,g[1]=M*I+S*R+b*H,g[4]=M*D+S*W+b*it,g[7]=M*A+S*F+b*q,g[2]=v*I+w*R+C*H,g[5]=v*D+w*W+C*it,g[8]=v*A+w*F+C*q,this}multiplyScalar(a){let h=this.elements;return h[0]*=a,h[3]*=a,h[6]*=a,h[1]*=a,h[4]*=a,h[7]*=a,h[2]*=a,h[5]*=a,h[8]*=a,this}determinant(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8];return h*_*S-h*y*M-p*g*S+p*y*x+m*g*M-m*_*x}invert(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8],b=S*_-y*M,v=y*x-S*g,w=M*g-_*x,C=h*b+p*v+m*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/C;return a[0]=b*I,a[1]=(m*M-S*p)*I,a[2]=(y*p-m*_)*I,a[3]=v*I,a[4]=(S*h-m*x)*I,a[5]=(m*g-y*h)*I,a[6]=w*I,a[7]=(p*x-M*h)*I,a[8]=(_*h-p*g)*I,this}transpose(){let a,h=this.elements;return a=h[1],h[1]=h[3],h[3]=a,a=h[2],h[2]=h[6],h[6]=a,a=h[5],h[5]=h[7],h[7]=a,this}getNormalMatrix(a){return this.setFromMatrix4(a).invert().transpose()}transposeIntoArray(a){let h=this.elements;return a[0]=h[0],a[1]=h[3],a[2]=h[6],a[3]=h[1],a[4]=h[4],a[5]=h[7],a[6]=h[2],a[7]=h[5],a[8]=h[8],this}setUvTransform(a,h,p,m,g,_,y){let x=Math.cos(g),M=Math.sin(g);return this.set(p*x,p*M,-p*(x*_+M*y)+_+a,-m*M,m*x,-m*(-M*_+x*y)+y+h,0,0,1),this}scale(a,h){return this.premultiply(Mr.makeScale(a,h)),this}rotate(a){return this.premultiply(Mr.makeRotation(-a)),this}translate(a,h){return this.premultiply(Mr.makeTranslation(a,h)),this}makeTranslation(a,h){if(a.isVector2)this.set(1,0,a.x,0,1,a.y,0,0,1);else this.set(1,0,a,0,1,h,0,0,1);return this}makeRotation(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,-p,0,p,h,0,0,0,1),this}makeScale(a,h){return this.set(a,0,0,0,h,0,0,0,1),this}equals(a){let h=this.elements,p=a.elements;for(let m=0;m<9;m++)if(h[m]!==p[m])return!1;return!0}fromArray(a,h=0){for(let p=0;p<9;p++)this.elements[p]=a[p+h];return this}toArray(a=[],h=0){let p=this.elements;return a[h]=p[0],a[h+1]=p[1],a[h+2]=p[2],a[h+3]=p[3],a[h+4]=p[4],a[h+5]=p[5],a[h+6]=p[6],a[h+7]=p[7],a[h+8]=p[8],a}clone(){return new this.constructor().fromArray(this.elements)}}var Mr=new ce;function tl(a){for(let h=a.length-1;h>=0;--h)if(a[h]>=65535)return!0;return!1}function ir(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function mc(){let a=ir("canvas");return a.style.display="block",a}var Va={};function ns(a){if(a in Va)return;Va[a]=!0,console.warn(a)}function gc(a,h,p){return new Promise(function(m,g){function _(){switch(a.clientWaitSync(h,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:g();break;case a.TIMEOUT_EXPIRED:setTimeout(_,p);break;default:m()}}setTimeout(_,p)})}function _c(a){let h=a.elements;h[2]=0.5*h[2]+0.5*h[3],h[6]=0.5*h[6]+0.5*h[7],h[10]=0.5*h[10]+0.5*h[11],h[14]=0.5*h[14]+0.5*h[15]}function xc(a){let h=a.elements;if(h[11]===-1)h[10]=-h[10]-1,h[14]=-h[14];else h[10]=-h[10],h[14]=-h[14]+1}var _e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(a,h,p){if(this.enabled===!1||h===p||!h||!p)return a;if(this.spaces[h].transfer==="srgb")a.r=Un(a.r),a.g=Un(a.g),a.b=Un(a.b);if(this.spaces[h].primaries!==this.spaces[p].primaries)a.applyMatrix3(this.spaces[h].toXYZ),a.applyMatrix3(this.spaces[p].fromXYZ);if(this.spaces[p].transfer==="srgb")a.r=Oi(a.r),a.g=Oi(a.g),a.b=Oi(a.b);return a},fromWorkingColorSpace:function(a,h){return this.convert(a,this.workingColorSpace,h)},toWorkingColorSpace:function(a,h){return this.convert(a,h,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){if(a==="")return"linear";return this.spaces[a].transfer},getLuminanceCoefficients:function(a,h=this.workingColorSpace){return a.fromArray(this.spaces[h].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,h,p){return a.copy(this.spaces[h].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function Un(a){return a<0.04045?a*0.0773993808:Math.pow(a*0.9478672986+0.0521327014,2.4)}function Oi(a){return a<0.0031308?a*12.92:1.055*Math.pow(a,0.41666)-0.055}var Xa=[0.64,0.33,0.3,0.6,0.15,0.06],qa=[0.2126,0.7152,0.0722],Ya=[0.3127,0.329],Za=new ce().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Ja=new ce().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);_e.define({["srgb-linear"]:{primaries:Xa,whitePoint:Ya,transfer:"linear",toXYZ:Za,fromXYZ:Ja,luminanceCoefficients:qa,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Xa,whitePoint:Ya,transfer:"srgb",toXYZ:Za,fromXYZ:Ja,luminanceCoefficients:qa,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}});var yi;class el{static getDataURL(a){if(/^data:/i.test(a.src))return a.src;if(typeof HTMLCanvasElement>"u")return a.src;let h;if(a instanceof HTMLCanvasElement)h=a;else{if(yi===void 0)yi=ir("canvas");yi.width=a.width,yi.height=a.height;let p=yi.getContext("2d");if(a instanceof ImageData)p.putImageData(a,0,0);else p.drawImage(a,0,0,a.width,a.height);h=yi}if(h.width>2048||h.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",a),h.toDataURL("image/jpeg",0.6);else return h.toDataURL("image/png")}static sRGBToLinear(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap){let h=ir("canvas");h.width=a.width,h.height=a.height;let p=h.getContext("2d");p.drawImage(a,0,0,a.width,a.height);let m=p.getImageData(0,0,a.width,a.height),g=m.data;for(let _=0;_<g.length;_++)g[_]=Un(g[_]/255)*255;return p.putImageData(m,0,0),h}else if(a.data){let h=a.data.slice(0);for(let p=0;p<h.length;p++)if(h instanceof Uint8Array||h instanceof Uint8ClampedArray)h[p]=Math.floor(Un(h[p]/255)*255);else h[p]=Un(h[p]);return{data:h,width:a.width,height:a.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),a}}var yc=0;class ca{constructor(a=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=di(),this.data=a,this.dataReady=!0,this.version=0}set needsUpdate(a){if(a===!0)this.version++}toJSON(a){let h=a===void 0||typeof a==="string";if(!h&&a.images[this.uuid]!==void 0)return a.images[this.uuid];let p={uuid:this.uuid,url:""},m=this.data;if(m!==null){let g;if(Array.isArray(m)){g=[];for(let _=0,y=m.length;_<y;_++)if(m[_].isDataTexture)g.push(Sr(m[_].image));else g.push(Sr(m[_]))}else g=Sr(m);p.url=g}if(!h)a.images[this.uuid]=p;return p}}function Sr(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap)return el.getDataURL(a);else if(a.data)return{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var vc=0;class qe extends Jn{constructor(a=qe.DEFAULT_IMAGE,h=qe.DEFAULT_MAPPING,p=1001,m=1001,g=1006,_=1008,y=1023,x=1009,M=qe.DEFAULT_ANISOTROPY,S=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=di(),this.name="",this.source=new ca(a),this.mipmaps=[],this.mapping=h,this.channel=0,this.wrapS=p,this.wrapT=m,this.magFilter=g,this.minFilter=_,this.anisotropy=M,this.format=y,this.internalFormat=null,this.type=x,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(a=null){this.source.data=a}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(a){return this.name=a.name,this.source=a.source,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.channel=a.channel,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.internalFormat=a.internalFormat,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.center.copy(a.center),this.rotation=a.rotation,this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrix.copy(a.matrix),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.colorSpace=a.colorSpace,this.userData=JSON.parse(JSON.stringify(a.userData)),this.needsUpdate=!0,this}toJSON(a){let h=a===void 0||typeof a==="string";if(!h&&a.textures[this.uuid]!==void 0)return a.textures[this.uuid];let p={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(a).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)p.userData=this.userData;if(!h)a.textures[this.uuid]=p;return p}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(a){if(this.mapping!==300)return a;if(a.applyMatrix3(this.matrix),a.x<0||a.x>1)switch(this.wrapS){case 1000:a.x=a.x-Math.floor(a.x);break;case 1001:a.x=a.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(a.x)%2)===1)a.x=Math.ceil(a.x)-a.x;else a.x=a.x-Math.floor(a.x);break}if(a.y<0||a.y>1)switch(this.wrapT){case 1000:a.y=a.y-Math.floor(a.y);break;case 1001:a.y=a.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(a.y)%2)===1)a.y=Math.ceil(a.y)-a.y;else a.y=a.y-Math.floor(a.y);break}if(this.flipY)a.y=1-a.y;return a}set needsUpdate(a){if(a===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(a){if(a===!0)this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=300;qe.DEFAULT_ANISOTROPY=1;class be{constructor(a=0,h=0,p=0,m=1){be.prototype.isVector4=!0,this.x=a,this.y=h,this.z=p,this.w=m}get width(){return this.z}set width(a){this.z=a}get height(){return this.w}set height(a){this.w=a}set(a,h,p,m){return this.x=a,this.y=h,this.z=p,this.w=m,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this.w=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setW(a){return this.w=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;case 3:this.w=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w!==void 0?a.w:1,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this.z=a.z+h.z,this.w=a.w+h.w,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this.z+=a.z*h,this.w+=a.w*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this.z=a.z-h.z,this.w=a.w-h.w,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this.w*=a.w,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this.w*=a,this}applyMatrix4(a){let h=this.x,p=this.y,m=this.z,g=this.w,_=a.elements;return this.x=_[0]*h+_[4]*p+_[8]*m+_[12]*g,this.y=_[1]*h+_[5]*p+_[9]*m+_[13]*g,this.z=_[2]*h+_[6]*p+_[10]*m+_[14]*g,this.w=_[3]*h+_[7]*p+_[11]*m+_[15]*g,this}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this.w/=a.w,this}divideScalar(a){return this.multiplyScalar(1/a)}setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);let h=Math.sqrt(1-a.w*a.w);if(h<0.0001)this.x=1,this.y=0,this.z=0;else this.x=a.x/h,this.y=a.y/h,this.z=a.z/h;return this}setAxisAngleFromRotationMatrix(a){let h,p,m,g,_=0.01,y=0.1,x=a.elements,M=x[0],S=x[4],b=x[8],v=x[1],w=x[5],C=x[9],I=x[2],D=x[6],A=x[10];if(Math.abs(S-v)<0.01&&Math.abs(b-I)<0.01&&Math.abs(C-D)<0.01){if(Math.abs(S+v)<0.1&&Math.abs(b+I)<0.1&&Math.abs(C+D)<0.1&&Math.abs(M+w+A-3)<0.1)return this.set(1,0,0,0),this;h=Math.PI;let W=(M+1)/2,F=(w+1)/2,H=(A+1)/2,it=(S+v)/4,q=(b+I)/4,Y=(C+D)/4;if(W>F&&W>H)if(W<0.01)p=0,m=0.707106781,g=0.707106781;else p=Math.sqrt(W),m=it/p,g=q/p;else if(F>H)if(F<0.01)p=0.707106781,m=0,g=0.707106781;else m=Math.sqrt(F),p=it/m,g=Y/m;else if(H<0.01)p=0.707106781,m=0.707106781,g=0;else g=Math.sqrt(H),p=q/g,m=Y/g;return this.set(p,m,g,h),this}let R=Math.sqrt((D-C)*(D-C)+(b-I)*(b-I)+(v-S)*(v-S));if(Math.abs(R)<0.001)R=1;return this.x=(D-C)/R,this.y=(b-I)/R,this.z=(v-S)/R,this.w=Math.acos((M+w+A-1)/2),this}setFromMatrixPosition(a){let h=a.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this.w=h[15],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this.z=Math.max(a.z,Math.min(h.z,this.z)),this.w=Math.max(a.w,Math.min(h.w,this.w)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this.z=Math.max(a,Math.min(h,this.z)),this.w=Math.max(a,Math.min(h,this.w)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this.z+=(a.z-this.z)*h,this.w+=(a.w-this.w)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this.z=a.z+(h.z-a.z)*p,this.w=a.w+(h.w-a.w)*p,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this.z=a[h+2],this.w=a[h+3],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a[h+2]=this.z,a[h+3]=this.w,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this.z=a.getZ(h),this.w=a.getW(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nl extends Jn{constructor(a=1,h=1,p={}){super();this.isRenderTarget=!0,this.width=a,this.height=h,this.depth=1,this.scissor=new be(0,0,a,h),this.scissorTest=!1,this.viewport=new be(0,0,a,h);let m={width:a,height:h,depth:1};p=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},p);let g=new qe(m,p.mapping,p.wrapS,p.wrapT,p.magFilter,p.minFilter,p.format,p.type,p.anisotropy,p.colorSpace);g.flipY=!1,g.generateMipmaps=p.generateMipmaps,g.internalFormat=p.internalFormat,this.textures=[];let _=p.count;for(let y=0;y<_;y++)this.textures[y]=g.clone(),this.textures[y].isRenderTargetTexture=!0;this.depthBuffer=p.depthBuffer,this.stencilBuffer=p.stencilBuffer,this.resolveDepthBuffer=p.resolveDepthBuffer,this.resolveStencilBuffer=p.resolveStencilBuffer,this.depthTexture=p.depthTexture,this.samples=p.samples}get texture(){return this.textures[0]}set texture(a){this.textures[0]=a}setSize(a,h,p=1){if(this.width!==a||this.height!==h||this.depth!==p){this.width=a,this.height=h,this.depth=p;for(let m=0,g=this.textures.length;m<g;m++)this.textures[m].image.width=a,this.textures[m].image.height=h,this.textures[m].image.depth=p;this.dispose()}this.viewport.set(0,0,a,h),this.scissor.set(0,0,a,h)}clone(){return new this.constructor().copy(this)}copy(a){this.width=a.width,this.height=a.height,this.depth=a.depth,this.scissor.copy(a.scissor),this.scissorTest=a.scissorTest,this.viewport.copy(a.viewport),this.textures.length=0;for(let p=0,m=a.textures.length;p<m;p++)this.textures[p]=a.textures[p].clone(),this.textures[p].isRenderTargetTexture=!0;let h=Object.assign({},a.texture.image);if(this.texture.source=new ca(h),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,a.depthTexture!==null)this.depthTexture=a.depthTexture.clone();return this.samples=a.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends nl{constructor(a=1,h=1,p={}){super(a,h,p);this.isWebGLRenderTarget=!0}}class ha extends qe{constructor(a=null,h=1,p=1,m=1){super(null);this.isDataArrayTexture=!0,this.image={data:a,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(a){this.layerUpdates.add(a)}clearLayerUpdates(){this.layerUpdates.clear()}}class il extends qe{constructor(a=null,h=1,p=1,m=1){super(null);this.isData3DTexture=!0,this.image={data:a,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(a=0,h=0,p=0,m=1){this.isQuaternion=!0,this._x=a,this._y=h,this._z=p,this._w=m}static slerpFlat(a,h,p,m,g,_,y){let x=p[m+0],M=p[m+1],S=p[m+2],b=p[m+3],v=g[_+0],w=g[_+1],C=g[_+2],I=g[_+3];if(y===0){a[h+0]=x,a[h+1]=M,a[h+2]=S,a[h+3]=b;return}if(y===1){a[h+0]=v,a[h+1]=w,a[h+2]=C,a[h+3]=I;return}if(b!==I||x!==v||M!==w||S!==C){let D=1-y,A=x*v+M*w+S*C+b*I,R=A>=0?1:-1,W=1-A*A;if(W>Number.EPSILON){let H=Math.sqrt(W),it=Math.atan2(H,A*R);D=Math.sin(D*it)/H,y=Math.sin(y*it)/H}let F=y*R;if(x=x*D+v*F,M=M*D+w*F,S=S*D+C*F,b=b*D+I*F,D===1-y){let H=1/Math.sqrt(x*x+M*M+S*S+b*b);x*=H,M*=H,S*=H,b*=H}}a[h]=x,a[h+1]=M,a[h+2]=S,a[h+3]=b}static multiplyQuaternionsFlat(a,h,p,m,g,_){let y=p[m],x=p[m+1],M=p[m+2],S=p[m+3],b=g[_],v=g[_+1],w=g[_+2],C=g[_+3];return a[h]=y*C+S*b+x*w-M*v,a[h+1]=x*C+S*v+M*b-y*w,a[h+2]=M*C+S*w+y*v-x*b,a[h+3]=S*C-y*b-x*v-M*w,a}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get w(){return this._w}set w(a){this._w=a,this._onChangeCallback()}set(a,h,p,m){return this._x=a,this._y=h,this._z=p,this._w=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this._onChangeCallback(),this}setFromEuler(a,h=!0){let{_x:p,_y:m,_z:g,_order:_}=a,{cos:y,sin:x}=Math,M=y(p/2),S=y(m/2),b=y(g/2),v=x(p/2),w=x(m/2),C=x(g/2);switch(_){case"XYZ":this._x=v*S*b+M*w*C,this._y=M*w*b-v*S*C,this._z=M*S*C+v*w*b,this._w=M*S*b-v*w*C;break;case"YXZ":this._x=v*S*b+M*w*C,this._y=M*w*b-v*S*C,this._z=M*S*C-v*w*b,this._w=M*S*b+v*w*C;break;case"ZXY":this._x=v*S*b-M*w*C,this._y=M*w*b+v*S*C,this._z=M*S*C+v*w*b,this._w=M*S*b-v*w*C;break;case"ZYX":this._x=v*S*b-M*w*C,this._y=M*w*b+v*S*C,this._z=M*S*C-v*w*b,this._w=M*S*b+v*w*C;break;case"YZX":this._x=v*S*b+M*w*C,this._y=M*w*b+v*S*C,this._z=M*S*C-v*w*b,this._w=M*S*b-v*w*C;break;case"XZY":this._x=v*S*b-M*w*C,this._y=M*w*b-v*S*C,this._z=M*S*C+v*w*b,this._w=M*S*b+v*w*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+_)}if(h===!0)this._onChangeCallback();return this}setFromAxisAngle(a,h){let p=h/2,m=Math.sin(p);return this._x=a.x*m,this._y=a.y*m,this._z=a.z*m,this._w=Math.cos(p),this._onChangeCallback(),this}setFromRotationMatrix(a){let h=a.elements,p=h[0],m=h[4],g=h[8],_=h[1],y=h[5],x=h[9],M=h[2],S=h[6],b=h[10],v=p+y+b;if(v>0){let w=0.5/Math.sqrt(v+1);this._w=0.25/w,this._x=(S-x)*w,this._y=(g-M)*w,this._z=(_-m)*w}else if(p>y&&p>b){let w=2*Math.sqrt(1+p-y-b);this._w=(S-x)/w,this._x=0.25*w,this._y=(m+_)/w,this._z=(g+M)/w}else if(y>b){let w=2*Math.sqrt(1+y-p-b);this._w=(g-M)/w,this._x=(m+_)/w,this._y=0.25*w,this._z=(x+S)/w}else{let w=2*Math.sqrt(1+b-p-y);this._w=(_-m)/w,this._x=(g+M)/w,this._y=(x+S)/w,this._z=0.25*w}return this._onChangeCallback(),this}setFromUnitVectors(a,h){let p=a.dot(h)+1;if(p<Number.EPSILON)if(p=0,Math.abs(a.x)>Math.abs(a.z))this._x=-a.y,this._y=a.x,this._z=0,this._w=p;else this._x=0,this._y=-a.z,this._z=a.y,this._w=p;else this._x=a.y*h.z-a.z*h.y,this._y=a.z*h.x-a.x*h.z,this._z=a.x*h.y-a.y*h.x,this._w=p;return this.normalize()}angleTo(a){return 2*Math.acos(Math.abs(Ue(this.dot(a),-1,1)))}rotateTowards(a,h){let p=this.angleTo(a);if(p===0)return this;let m=Math.min(1,h/p);return this.slerp(a,m),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let a=this.length();if(a===0)this._x=0,this._y=0,this._z=0,this._w=1;else a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a;return this._onChangeCallback(),this}multiply(a){return this.multiplyQuaternions(this,a)}premultiply(a){return this.multiplyQuaternions(a,this)}multiplyQuaternions(a,h){let{_x:p,_y:m,_z:g,_w:_}=a,{_x:y,_y:x,_z:M,_w:S}=h;return this._x=p*S+_*y+m*M-g*x,this._y=m*S+_*x+g*y-p*M,this._z=g*S+_*M+p*x-m*y,this._w=_*S-p*y-m*x-g*M,this._onChangeCallback(),this}slerp(a,h){if(h===0)return this;if(h===1)return this.copy(a);let p=this._x,m=this._y,g=this._z,_=this._w,y=_*a._w+p*a._x+m*a._y+g*a._z;if(y<0)this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,y=-y;else this.copy(a);if(y>=1)return this._w=_,this._x=p,this._y=m,this._z=g,this;let x=1-y*y;if(x<=Number.EPSILON){let w=1-h;return this._w=w*_+h*this._w,this._x=w*p+h*this._x,this._y=w*m+h*this._y,this._z=w*g+h*this._z,this.normalize(),this}let M=Math.sqrt(x),S=Math.atan2(M,y),b=Math.sin((1-h)*S)/M,v=Math.sin(h*S)/M;return this._w=_*b+this._w*v,this._x=p*b+this._x*v,this._y=m*b+this._y*v,this._z=g*b+this._z*v,this._onChangeCallback(),this}slerpQuaternions(a,h,p){return this.copy(a).slerp(h,p)}random(){let a=2*Math.PI*Math.random(),h=2*Math.PI*Math.random(),p=Math.random(),m=Math.sqrt(1-p),g=Math.sqrt(p);return this.set(m*Math.sin(a),m*Math.cos(a),g*Math.sin(h),g*Math.cos(h))}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w}fromArray(a,h=0){return this._x=a[h],this._y=a[h+1],this._z=a[h+2],this._w=a[h+3],this._onChangeCallback(),this}toArray(a=[],h=0){return a[h]=this._x,a[h+1]=this._y,a[h+2]=this._z,a[h+3]=this._w,a}fromBufferAttribute(a,h){return this._x=a.getX(h),this._y=a.getY(h),this._z=a.getZ(h),this._w=a.getW(h),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(a=0,h=0,p=0){X.prototype.isVector3=!0,this.x=a,this.y=h,this.z=p}set(a,h,p){if(p===void 0)p=this.z;return this.x=a,this.y=h,this.z=p,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this.z=a.z+h.z,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this.z+=a.z*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this.z=a.z-h.z,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this}multiplyVectors(a,h){return this.x=a.x*h.x,this.y=a.y*h.y,this.z=a.z*h.z,this}applyEuler(a){return this.applyQuaternion($a.setFromEuler(a))}applyAxisAngle(a,h){return this.applyQuaternion($a.setFromAxisAngle(a,h))}applyMatrix3(a){let h=this.x,p=this.y,m=this.z,g=a.elements;return this.x=g[0]*h+g[3]*p+g[6]*m,this.y=g[1]*h+g[4]*p+g[7]*m,this.z=g[2]*h+g[5]*p+g[8]*m,this}applyNormalMatrix(a){return this.applyMatrix3(a).normalize()}applyMatrix4(a){let h=this.x,p=this.y,m=this.z,g=a.elements,_=1/(g[3]*h+g[7]*p+g[11]*m+g[15]);return this.x=(g[0]*h+g[4]*p+g[8]*m+g[12])*_,this.y=(g[1]*h+g[5]*p+g[9]*m+g[13])*_,this.z=(g[2]*h+g[6]*p+g[10]*m+g[14])*_,this}applyQuaternion(a){let h=this.x,p=this.y,m=this.z,{x:g,y:_,z:y,w:x}=a,M=2*(_*m-y*p),S=2*(y*h-g*m),b=2*(g*p-_*h);return this.x=h+x*M+_*b-y*S,this.y=p+x*S+y*M-g*b,this.z=m+x*b+g*S-_*M,this}project(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)}unproject(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)}transformDirection(a){let h=this.x,p=this.y,m=this.z,g=a.elements;return this.x=g[0]*h+g[4]*p+g[8]*m,this.y=g[1]*h+g[5]*p+g[9]*m,this.z=g[2]*h+g[6]*p+g[10]*m,this.normalize()}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this}divideScalar(a){return this.multiplyScalar(1/a)}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this.z=Math.max(a.z,Math.min(h.z,this.z)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this.z=Math.max(a,Math.min(h,this.z)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this.z+=(a.z-this.z)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this.z=a.z+(h.z-a.z)*p,this}cross(a){return this.crossVectors(this,a)}crossVectors(a,h){let{x:p,y:m,z:g}=a,{x:_,y,z:x}=h;return this.x=m*x-g*y,this.y=g*_-p*x,this.z=p*y-m*_,this}projectOnVector(a){let h=a.lengthSq();if(h===0)return this.set(0,0,0);let p=a.dot(this)/h;return this.copy(a).multiplyScalar(p)}projectOnPlane(a){return Er.copy(this).projectOnVector(a),this.sub(Er)}reflect(a){return this.sub(Er.copy(a).multiplyScalar(2*this.dot(a)))}angleTo(a){let h=Math.sqrt(this.lengthSq()*a.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(a)/h;return Math.acos(Ue(p,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){let h=this.x-a.x,p=this.y-a.y,m=this.z-a.z;return h*h+p*p+m*m}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)}setFromSpherical(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)}setFromSphericalCoords(a,h,p){let m=Math.sin(h)*a;return this.x=m*Math.sin(p),this.y=Math.cos(h)*a,this.z=m*Math.cos(p),this}setFromCylindrical(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)}setFromCylindricalCoords(a,h,p){return this.x=a*Math.sin(h),this.y=p,this.z=a*Math.cos(h),this}setFromMatrixPosition(a){let h=a.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this}setFromMatrixScale(a){let h=this.setFromMatrixColumn(a,0).length(),p=this.setFromMatrixColumn(a,1).length(),m=this.setFromMatrixColumn(a,2).length();return this.x=h,this.y=p,this.z=m,this}setFromMatrixColumn(a,h){return this.fromArray(a.elements,h*4)}setFromMatrix3Column(a,h){return this.fromArray(a.elements,h*3)}setFromEuler(a){return this.x=a._x,this.y=a._y,this.z=a._z,this}setFromColor(a){return this.x=a.r,this.y=a.g,this.z=a.b,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this.z=a[h+2],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a[h+2]=this.z,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this.z=a.getZ(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let a=Math.random()*Math.PI*2,h=Math.random()*2-1,p=Math.sqrt(1-h*h);return this.x=p*Math.cos(a),this.y=h,this.z=p*Math.sin(a),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Er=new X,$a=new un;class An{constructor(a=new X(1/0,1/0,1/0),h=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=a,this.max=h}set(a,h){return this.min.copy(a),this.max.copy(h),this}setFromArray(a){this.makeEmpty();for(let h=0,p=a.length;h<p;h+=3)this.expandByPoint(mn.fromArray(a,h));return this}setFromBufferAttribute(a){this.makeEmpty();for(let h=0,p=a.count;h<p;h++)this.expandByPoint(mn.fromBufferAttribute(a,h));return this}setFromPoints(a){this.makeEmpty();for(let h=0,p=a.length;h<p;h++)this.expandByPoint(a[h]);return this}setFromCenterAndSize(a,h){let p=mn.copy(h).multiplyScalar(0.5);return this.min.copy(a).sub(p),this.max.copy(a).add(p),this}setFromObject(a,h=!1){return this.makeEmpty(),this.expandByObject(a,h)}clone(){return new this.constructor().copy(this)}copy(a){return this.min.copy(a.min),this.max.copy(a.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(a){return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(a){return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)}expandByPoint(a){return this.min.min(a),this.max.max(a),this}expandByVector(a){return this.min.sub(a),this.max.add(a),this}expandByScalar(a){return this.min.addScalar(-a),this.max.addScalar(a),this}expandByObject(a,h=!1){a.updateWorldMatrix(!1,!1);let p=a.geometry;if(p!==void 0){let g=p.getAttribute("position");if(h===!0&&g!==void 0&&a.isInstancedMesh!==!0)for(let _=0,y=g.count;_<y;_++){if(a.isMesh===!0)a.getVertexPosition(_,mn);else mn.fromBufferAttribute(g,_);mn.applyMatrix4(a.matrixWorld),this.expandByPoint(mn)}else{if(a.boundingBox!==void 0){if(a.boundingBox===null)a.computeBoundingBox();ws.copy(a.boundingBox)}else{if(p.boundingBox===null)p.computeBoundingBox();ws.copy(p.boundingBox)}ws.applyMatrix4(a.matrixWorld),this.union(ws)}}let m=a.children;for(let g=0,_=m.length;g<_;g++)this.expandByObject(m[g],h);return this}containsPoint(a){return a.x>=this.min.x&&a.x<=this.max.x&&a.y>=this.min.y&&a.y<=this.max.y&&a.z>=this.min.z&&a.z<=this.max.z}containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z}getParameter(a,h){return h.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(a){return a.max.x>=this.min.x&&a.min.x<=this.max.x&&a.max.y>=this.min.y&&a.min.y<=this.max.y&&a.max.z>=this.min.z&&a.min.z<=this.max.z}intersectsSphere(a){return this.clampPoint(a.center,mn),mn.distanceToSquared(a.center)<=a.radius*a.radius}intersectsPlane(a){let h,p;if(a.normal.x>0)h=a.normal.x*this.min.x,p=a.normal.x*this.max.x;else h=a.normal.x*this.max.x,p=a.normal.x*this.min.x;if(a.normal.y>0)h+=a.normal.y*this.min.y,p+=a.normal.y*this.max.y;else h+=a.normal.y*this.max.y,p+=a.normal.y*this.min.y;if(a.normal.z>0)h+=a.normal.z*this.min.z,p+=a.normal.z*this.max.z;else h+=a.normal.z*this.max.z,p+=a.normal.z*this.min.z;return h<=-a.constant&&p>=-a.constant}intersectsTriangle(a){if(this.isEmpty())return!1;this.getCenter(Zi),As.subVectors(this.max,Zi),vi.subVectors(a.a,Zi),Mi.subVectors(a.b,Zi),Si.subVectors(a.c,Zi),kn.subVectors(Mi,vi),Gn.subVectors(Si,Mi),ii.subVectors(vi,Si);let h=[0,-kn.z,kn.y,0,-Gn.z,Gn.y,0,-ii.z,ii.y,kn.z,0,-kn.x,Gn.z,0,-Gn.x,ii.z,0,-ii.x,-kn.y,kn.x,0,-Gn.y,Gn.x,0,-ii.y,ii.x,0];if(!br(h,vi,Mi,Si,As))return!1;if(h=[1,0,0,0,1,0,0,0,1],!br(h,vi,Mi,Si,As))return!1;return Rs.crossVectors(kn,Gn),h=[Rs.x,Rs.y,Rs.z],br(h,vi,Mi,Si,As)}clampPoint(a,h){return h.copy(a).clamp(this.min,this.max)}distanceToPoint(a){return this.clampPoint(a,mn).distanceTo(a)}getBoundingSphere(a){if(this.isEmpty())a.makeEmpty();else this.getCenter(a.center),a.radius=this.getSize(mn).length()*0.5;return a}intersect(a){if(this.min.max(a.min),this.max.min(a.max),this.isEmpty())this.makeEmpty();return this}union(a){return this.min.min(a.min),this.max.max(a.max),this}applyMatrix4(a){if(this.isEmpty())return this;return Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a),this.setFromPoints(Cn),this}translate(a){return this.min.add(a),this.max.add(a),this}equals(a){return a.min.equals(this.min)&&a.max.equals(this.max)}}var Cn=[new X,new X,new X,new X,new X,new X,new X,new X],mn=new X,ws=new An,vi=new X,Mi=new X,Si=new X,kn=new X,Gn=new X,ii=new X,Zi=new X,As=new X,Rs=new X,si=new X;function br(a,h,p,m,g){for(let _=0,y=a.length-3;_<=y;_+=3){si.fromArray(a,_);let x=g.x*Math.abs(si.x)+g.y*Math.abs(si.y)+g.z*Math.abs(si.z),M=h.dot(si),S=p.dot(si),b=m.dot(si);if(Math.max(-Math.max(M,S,b),Math.min(M,S,b))>x)return!1}return!0}var Mc=new An,Ji=new X,Tr=new X;class fi{constructor(a=new X,h=-1){this.isSphere=!0,this.center=a,this.radius=h}set(a,h){return this.center.copy(a),this.radius=h,this}setFromPoints(a,h){let p=this.center;if(h!==void 0)p.copy(h);else Mc.setFromPoints(a).getCenter(p);let m=0;for(let g=0,_=a.length;g<_;g++)m=Math.max(m,p.distanceToSquared(a[g]));return this.radius=Math.sqrt(m),this}copy(a){return this.center.copy(a.center),this.radius=a.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(a){return a.distanceTo(this.center)-this.radius}intersectsSphere(a){let h=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=h*h}intersectsBox(a){return a.intersectsSphere(this)}intersectsPlane(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius}clampPoint(a,h){let p=this.center.distanceToSquared(a);if(h.copy(a),p>this.radius*this.radius)h.sub(this.center).normalize(),h.multiplyScalar(this.radius).add(this.center);return h}getBoundingBox(a){if(this.isEmpty())return a.makeEmpty(),a;return a.set(this.center,this.center),a.expandByScalar(this.radius),a}applyMatrix4(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this}translate(a){return this.center.add(a),this}expandByPoint(a){if(this.isEmpty())return this.center.copy(a),this.radius=0,this;Ji.subVectors(a,this.center);let h=Ji.lengthSq();if(h>this.radius*this.radius){let p=Math.sqrt(h),m=(p-this.radius)*0.5;this.center.addScaledVector(Ji,m/p),this.radius+=m}return this}union(a){if(a.isEmpty())return this;if(this.isEmpty())return this.copy(a),this;if(this.center.equals(a.center)===!0)this.radius=Math.max(this.radius,a.radius);else Tr.subVectors(a.center,this.center).setLength(a.radius),this.expandByPoint(Ji.copy(a.center).add(Tr)),this.expandByPoint(Ji.copy(a.center).sub(Tr));return this}equals(a){return a.center.equals(this.center)&&a.radius===this.radius}clone(){return new this.constructor().copy(this)}}var Pn=new X,wr=new X,Cs=new X,Wn=new X,Ar=new X,Ps=new X,Rr=new X;class zi{constructor(a=new X,h=new X(0,0,-1)){this.origin=a,this.direction=h}set(a,h){return this.origin.copy(a),this.direction.copy(h),this}copy(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this}at(a,h){return h.copy(this.origin).addScaledVector(this.direction,a)}lookAt(a){return this.direction.copy(a).sub(this.origin).normalize(),this}recast(a){return this.origin.copy(this.at(a,Pn)),this}closestPointToPoint(a,h){h.subVectors(a,this.origin);let p=h.dot(this.direction);if(p<0)return h.copy(this.origin);return h.copy(this.origin).addScaledVector(this.direction,p)}distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a))}distanceSqToPoint(a){let h=Pn.subVectors(a,this.origin).dot(this.direction);if(h<0)return this.origin.distanceToSquared(a);return Pn.copy(this.origin).addScaledVector(this.direction,h),Pn.distanceToSquared(a)}distanceSqToSegment(a,h,p,m){wr.copy(a).add(h).multiplyScalar(0.5),Cs.copy(h).sub(a).normalize(),Wn.copy(this.origin).sub(wr);let g=a.distanceTo(h)*0.5,_=-this.direction.dot(Cs),y=Wn.dot(this.direction),x=-Wn.dot(Cs),M=Wn.lengthSq(),S=Math.abs(1-_*_),b,v,w,C;if(S>0)if(b=_*x-y,v=_*y-x,C=g*S,b>=0)if(v>=-C)if(v<=C){let I=1/S;b*=I,v*=I,w=b*(b+_*v+2*y)+v*(_*b+v+2*x)+M}else v=g,b=Math.max(0,-(_*v+y)),w=-b*b+v*(v+2*x)+M;else v=-g,b=Math.max(0,-(_*v+y)),w=-b*b+v*(v+2*x)+M;else if(v<=-C)b=Math.max(0,-(-_*g+y)),v=b>0?-g:Math.min(Math.max(-g,-x),g),w=-b*b+v*(v+2*x)+M;else if(v<=C)b=0,v=Math.min(Math.max(-g,-x),g),w=v*(v+2*x)+M;else b=Math.max(0,-(_*g+y)),v=b>0?g:Math.min(Math.max(-g,-x),g),w=-b*b+v*(v+2*x)+M;else v=_>0?-g:g,b=Math.max(0,-(_*v+y)),w=-b*b+v*(v+2*x)+M;if(p)p.copy(this.origin).addScaledVector(this.direction,b);if(m)m.copy(wr).addScaledVector(Cs,v);return w}intersectSphere(a,h){Pn.subVectors(a.center,this.origin);let p=Pn.dot(this.direction),m=Pn.dot(Pn)-p*p,g=a.radius*a.radius;if(m>g)return null;let _=Math.sqrt(g-m),y=p-_,x=p+_;if(x<0)return null;if(y<0)return this.at(x,h);return this.at(y,h)}intersectsSphere(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius}distanceToPlane(a){let h=a.normal.dot(this.direction);if(h===0){if(a.distanceToPoint(this.origin)===0)return 0;return null}let p=-(this.origin.dot(a.normal)+a.constant)/h;return p>=0?p:null}intersectPlane(a,h){let p=this.distanceToPlane(a);if(p===null)return null;return this.at(p,h)}intersectsPlane(a){let h=a.distanceToPoint(this.origin);if(h===0)return!0;if(a.normal.dot(this.direction)*h<0)return!0;return!1}intersectBox(a,h){let p,m,g,_,y,x,M=1/this.direction.x,S=1/this.direction.y,b=1/this.direction.z,v=this.origin;if(M>=0)p=(a.min.x-v.x)*M,m=(a.max.x-v.x)*M;else p=(a.max.x-v.x)*M,m=(a.min.x-v.x)*M;if(S>=0)g=(a.min.y-v.y)*S,_=(a.max.y-v.y)*S;else g=(a.max.y-v.y)*S,_=(a.min.y-v.y)*S;if(p>_||g>m)return null;if(g>p||isNaN(p))p=g;if(_<m||isNaN(m))m=_;if(b>=0)y=(a.min.z-v.z)*b,x=(a.max.z-v.z)*b;else y=(a.max.z-v.z)*b,x=(a.min.z-v.z)*b;if(p>x||y>m)return null;if(y>p||p!==p)p=y;if(x<m||m!==m)m=x;if(m<0)return null;return this.at(p>=0?p:m,h)}intersectsBox(a){return this.intersectBox(a,Pn)!==null}intersectTriangle(a,h,p,m,g){Ar.subVectors(h,a),Ps.subVectors(p,a),Rr.crossVectors(Ar,Ps);let _=this.direction.dot(Rr),y;if(_>0){if(m)return null;y=1}else if(_<0)y=-1,_=-_;else return null;Wn.subVectors(this.origin,a);let x=y*this.direction.dot(Ps.crossVectors(Wn,Ps));if(x<0)return null;let M=y*this.direction.dot(Ar.cross(Wn));if(M<0)return null;if(x+M>_)return null;let S=-y*Wn.dot(Rr);if(S<0)return null;return this.at(S/_,g)}applyMatrix4(a){return this.origin.applyMatrix4(a),this.direction.transformDirection(a),this}equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(a,h,p,m,g,_,y,x,M,S,b,v,w,C,I,D){if(ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],a!==void 0)this.set(a,h,p,m,g,_,y,x,M,S,b,v,w,C,I,D)}set(a,h,p,m,g,_,y,x,M,S,b,v,w,C,I,D){let A=this.elements;return A[0]=a,A[4]=h,A[8]=p,A[12]=m,A[1]=g,A[5]=_,A[9]=y,A[13]=x,A[2]=M,A[6]=S,A[10]=b,A[14]=v,A[3]=w,A[7]=C,A[11]=I,A[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(a){let h=this.elements,p=a.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],h[9]=p[9],h[10]=p[10],h[11]=p[11],h[12]=p[12],h[13]=p[13],h[14]=p[14],h[15]=p[15],this}copyPosition(a){let h=this.elements,p=a.elements;return h[12]=p[12],h[13]=p[13],h[14]=p[14],this}setFromMatrix3(a){let h=a.elements;return this.set(h[0],h[3],h[6],0,h[1],h[4],h[7],0,h[2],h[5],h[8],0,0,0,0,1),this}extractBasis(a,h,p){return a.setFromMatrixColumn(this,0),h.setFromMatrixColumn(this,1),p.setFromMatrixColumn(this,2),this}makeBasis(a,h,p){return this.set(a.x,h.x,p.x,0,a.y,h.y,p.y,0,a.z,h.z,p.z,0,0,0,0,1),this}extractRotation(a){let h=this.elements,p=a.elements,m=1/Ei.setFromMatrixColumn(a,0).length(),g=1/Ei.setFromMatrixColumn(a,1).length(),_=1/Ei.setFromMatrixColumn(a,2).length();return h[0]=p[0]*m,h[1]=p[1]*m,h[2]=p[2]*m,h[3]=0,h[4]=p[4]*g,h[5]=p[5]*g,h[6]=p[6]*g,h[7]=0,h[8]=p[8]*_,h[9]=p[9]*_,h[10]=p[10]*_,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromEuler(a){let h=this.elements,{x:p,y:m,z:g}=a,_=Math.cos(p),y=Math.sin(p),x=Math.cos(m),M=Math.sin(m),S=Math.cos(g),b=Math.sin(g);if(a.order==="XYZ"){let v=_*S,w=_*b,C=y*S,I=y*b;h[0]=x*S,h[4]=-x*b,h[8]=M,h[1]=w+C*M,h[5]=v-I*M,h[9]=-y*x,h[2]=I-v*M,h[6]=C+w*M,h[10]=_*x}else if(a.order==="YXZ"){let v=x*S,w=x*b,C=M*S,I=M*b;h[0]=v+I*y,h[4]=C*y-w,h[8]=_*M,h[1]=_*b,h[5]=_*S,h[9]=-y,h[2]=w*y-C,h[6]=I+v*y,h[10]=_*x}else if(a.order==="ZXY"){let v=x*S,w=x*b,C=M*S,I=M*b;h[0]=v-I*y,h[4]=-_*b,h[8]=C+w*y,h[1]=w+C*y,h[5]=_*S,h[9]=I-v*y,h[2]=-_*M,h[6]=y,h[10]=_*x}else if(a.order==="ZYX"){let v=_*S,w=_*b,C=y*S,I=y*b;h[0]=x*S,h[4]=C*M-w,h[8]=v*M+I,h[1]=x*b,h[5]=I*M+v,h[9]=w*M-C,h[2]=-M,h[6]=y*x,h[10]=_*x}else if(a.order==="YZX"){let v=_*x,w=_*M,C=y*x,I=y*M;h[0]=x*S,h[4]=I-v*b,h[8]=C*b+w,h[1]=b,h[5]=_*S,h[9]=-y*S,h[2]=-M*S,h[6]=w*b+C,h[10]=v-I*b}else if(a.order==="XZY"){let v=_*x,w=_*M,C=y*x,I=y*M;h[0]=x*S,h[4]=-b,h[8]=M*S,h[1]=v*b+I,h[5]=_*S,h[9]=w*b-C,h[2]=C*b-w,h[6]=y*S,h[10]=I*b+v}return h[3]=0,h[7]=0,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromQuaternion(a){return this.compose(Sc,a,Ec)}lookAt(a,h,p){let m=this.elements;if(en.subVectors(a,h),en.lengthSq()===0)en.z=1;if(en.normalize(),Vn.crossVectors(p,en),Vn.lengthSq()===0){if(Math.abs(p.z)===1)en.x+=0.0001;else en.z+=0.0001;en.normalize(),Vn.crossVectors(p,en)}return Vn.normalize(),Is.crossVectors(en,Vn),m[0]=Vn.x,m[4]=Is.x,m[8]=en.x,m[1]=Vn.y,m[5]=Is.y,m[9]=en.y,m[2]=Vn.z,m[6]=Is.z,m[10]=en.z,this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,h){let p=a.elements,m=h.elements,g=this.elements,_=p[0],y=p[4],x=p[8],M=p[12],S=p[1],b=p[5],v=p[9],w=p[13],C=p[2],I=p[6],D=p[10],A=p[14],R=p[3],W=p[7],F=p[11],H=p[15],it=m[0],q=m[4],Y=m[8],lt=m[12],B=m[1],z=m[5],Q=m[9],st=m[13],ot=m[2],ct=m[6],pt=m[10],J=m[14],et=m[3],Z=m[7],At=m[11],U=m[15];return g[0]=_*it+y*B+x*ot+M*et,g[4]=_*q+y*z+x*ct+M*Z,g[8]=_*Y+y*Q+x*pt+M*At,g[12]=_*lt+y*st+x*J+M*U,g[1]=S*it+b*B+v*ot+w*et,g[5]=S*q+b*z+v*ct+w*Z,g[9]=S*Y+b*Q+v*pt+w*At,g[13]=S*lt+b*st+v*J+w*U,g[2]=C*it+I*B+D*ot+A*et,g[6]=C*q+I*z+D*ct+A*Z,g[10]=C*Y+I*Q+D*pt+A*At,g[14]=C*lt+I*st+D*J+A*U,g[3]=R*it+W*B+F*ot+H*et,g[7]=R*q+W*z+F*ct+H*Z,g[11]=R*Y+W*Q+F*pt+H*At,g[15]=R*lt+W*st+F*J+H*U,this}multiplyScalar(a){let h=this.elements;return h[0]*=a,h[4]*=a,h[8]*=a,h[12]*=a,h[1]*=a,h[5]*=a,h[9]*=a,h[13]*=a,h[2]*=a,h[6]*=a,h[10]*=a,h[14]*=a,h[3]*=a,h[7]*=a,h[11]*=a,h[15]*=a,this}determinant(){let a=this.elements,h=a[0],p=a[4],m=a[8],g=a[12],_=a[1],y=a[5],x=a[9],M=a[13],S=a[2],b=a[6],v=a[10],w=a[14],C=a[3],I=a[7],D=a[11],A=a[15];return C*(+g*x*b-m*M*b-g*y*v+p*M*v+m*y*w-p*x*w)+I*(+h*x*w-h*M*v+g*_*v-m*_*w+m*M*S-g*x*S)+D*(+h*M*b-h*y*w-g*_*b+p*_*w+g*y*S-p*M*S)+A*(-m*y*S-h*x*b+h*y*v+m*_*b-p*_*v+p*x*S)}transpose(){let a=this.elements,h;return h=a[1],a[1]=a[4],a[4]=h,h=a[2],a[2]=a[8],a[8]=h,h=a[6],a[6]=a[9],a[9]=h,h=a[3],a[3]=a[12],a[12]=h,h=a[7],a[7]=a[13],a[13]=h,h=a[11],a[11]=a[14],a[14]=h,this}setPosition(a,h,p){let m=this.elements;if(a.isVector3)m[12]=a.x,m[13]=a.y,m[14]=a.z;else m[12]=a,m[13]=h,m[14]=p;return this}invert(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8],b=a[9],v=a[10],w=a[11],C=a[12],I=a[13],D=a[14],A=a[15],R=b*D*M-I*v*M+I*x*w-y*D*w-b*x*A+y*v*A,W=C*v*M-S*D*M-C*x*w+_*D*w+S*x*A-_*v*A,F=S*I*M-C*b*M+C*y*w-_*I*w-S*y*A+_*b*A,H=C*b*x-S*I*x-C*y*v+_*I*v+S*y*D-_*b*D,it=h*R+p*W+m*F+g*H;if(it===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/it;return a[0]=R*q,a[1]=(I*v*g-b*D*g-I*m*w+p*D*w+b*m*A-p*v*A)*q,a[2]=(y*D*g-I*x*g+I*m*M-p*D*M-y*m*A+p*x*A)*q,a[3]=(b*x*g-y*v*g-b*m*M+p*v*M+y*m*w-p*x*w)*q,a[4]=W*q,a[5]=(S*D*g-C*v*g+C*m*w-h*D*w-S*m*A+h*v*A)*q,a[6]=(C*x*g-_*D*g-C*m*M+h*D*M+_*m*A-h*x*A)*q,a[7]=(_*v*g-S*x*g+S*m*M-h*v*M-_*m*w+h*x*w)*q,a[8]=F*q,a[9]=(C*b*g-S*I*g-C*p*w+h*I*w+S*p*A-h*b*A)*q,a[10]=(_*I*g-C*y*g+C*p*M-h*I*M-_*p*A+h*y*A)*q,a[11]=(S*y*g-_*b*g-S*p*M+h*b*M+_*p*w-h*y*w)*q,a[12]=H*q,a[13]=(S*I*m-C*b*m+C*p*v-h*I*v-S*p*D+h*b*D)*q,a[14]=(C*y*m-_*I*m-C*p*x+h*I*x+_*p*D-h*y*D)*q,a[15]=(_*b*m-S*y*m+S*p*x-h*b*x-_*p*v+h*y*v)*q,this}scale(a){let h=this.elements,{x:p,y:m,z:g}=a;return h[0]*=p,h[4]*=m,h[8]*=g,h[1]*=p,h[5]*=m,h[9]*=g,h[2]*=p,h[6]*=m,h[10]*=g,h[3]*=p,h[7]*=m,h[11]*=g,this}getMaxScaleOnAxis(){let a=this.elements,h=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],p=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],m=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(h,p,m))}makeTranslation(a,h,p){if(a.isVector3)this.set(1,0,0,a.x,0,1,0,a.y,0,0,1,a.z,0,0,0,1);else this.set(1,0,0,a,0,1,0,h,0,0,1,p,0,0,0,1);return this}makeRotationX(a){let h=Math.cos(a),p=Math.sin(a);return this.set(1,0,0,0,0,h,-p,0,0,p,h,0,0,0,0,1),this}makeRotationY(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,0,p,0,0,1,0,0,-p,0,h,0,0,0,0,1),this}makeRotationZ(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,-p,0,0,p,h,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(a,h){let p=Math.cos(h),m=Math.sin(h),g=1-p,{x:_,y,z:x}=a,M=g*_,S=g*y;return this.set(M*_+p,M*y-m*x,M*x+m*y,0,M*y+m*x,S*y+p,S*x-m*_,0,M*x-m*y,S*x+m*_,g*x*x+p,0,0,0,0,1),this}makeScale(a,h,p){return this.set(a,0,0,0,0,h,0,0,0,0,p,0,0,0,0,1),this}makeShear(a,h,p,m,g,_){return this.set(1,p,g,0,a,1,_,0,h,m,1,0,0,0,0,1),this}compose(a,h,p){let m=this.elements,{_x:g,_y:_,_z:y,_w:x}=h,M=g+g,S=_+_,b=y+y,v=g*M,w=g*S,C=g*b,I=_*S,D=_*b,A=y*b,R=x*M,W=x*S,F=x*b,{x:H,y:it,z:q}=p;return m[0]=(1-(I+A))*H,m[1]=(w+F)*H,m[2]=(C-W)*H,m[3]=0,m[4]=(w-F)*it,m[5]=(1-(v+A))*it,m[6]=(D+R)*it,m[7]=0,m[8]=(C+W)*q,m[9]=(D-R)*q,m[10]=(1-(v+I))*q,m[11]=0,m[12]=a.x,m[13]=a.y,m[14]=a.z,m[15]=1,this}decompose(a,h,p){let m=this.elements,g=Ei.set(m[0],m[1],m[2]).length(),_=Ei.set(m[4],m[5],m[6]).length(),y=Ei.set(m[8],m[9],m[10]).length();if(this.determinant()<0)g=-g;a.x=m[12],a.y=m[13],a.z=m[14],gn.copy(this);let M=1/g,S=1/_,b=1/y;return gn.elements[0]*=M,gn.elements[1]*=M,gn.elements[2]*=M,gn.elements[4]*=S,gn.elements[5]*=S,gn.elements[6]*=S,gn.elements[8]*=b,gn.elements[9]*=b,gn.elements[10]*=b,h.setFromRotationMatrix(gn),p.x=g,p.y=_,p.z=y,this}makePerspective(a,h,p,m,g,_,y=2000){let x=this.elements,M=2*g/(h-a),S=2*g/(p-m),b=(h+a)/(h-a),v=(p+m)/(p-m),w,C;if(y===2000)w=-(_+g)/(_-g),C=-2*_*g/(_-g);else if(y===2001)w=-_/(_-g),C=-_*g/(_-g);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+y);return x[0]=M,x[4]=0,x[8]=b,x[12]=0,x[1]=0,x[5]=S,x[9]=v,x[13]=0,x[2]=0,x[6]=0,x[10]=w,x[14]=C,x[3]=0,x[7]=0,x[11]=-1,x[15]=0,this}makeOrthographic(a,h,p,m,g,_,y=2000){let x=this.elements,M=1/(h-a),S=1/(p-m),b=1/(_-g),v=(h+a)*M,w=(p+m)*S,C,I;if(y===2000)C=(_+g)*b,I=-2*b;else if(y===2001)C=g*b,I=-1*b;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+y);return x[0]=2*M,x[4]=0,x[8]=0,x[12]=-v,x[1]=0,x[5]=2*S,x[9]=0,x[13]=-w,x[2]=0,x[6]=0,x[10]=I,x[14]=-C,x[3]=0,x[7]=0,x[11]=0,x[15]=1,this}equals(a){let h=this.elements,p=a.elements;for(let m=0;m<16;m++)if(h[m]!==p[m])return!1;return!0}fromArray(a,h=0){for(let p=0;p<16;p++)this.elements[p]=a[p+h];return this}toArray(a=[],h=0){let p=this.elements;return a[h]=p[0],a[h+1]=p[1],a[h+2]=p[2],a[h+3]=p[3],a[h+4]=p[4],a[h+5]=p[5],a[h+6]=p[6],a[h+7]=p[7],a[h+8]=p[8],a[h+9]=p[9],a[h+10]=p[10],a[h+11]=p[11],a[h+12]=p[12],a[h+13]=p[13],a[h+14]=p[14],a[h+15]=p[15],a}}var Ei=new X,gn=new ye,Sc=new X(0,0,0),Ec=new X(1,1,1),Vn=new X,Is=new X,en=new X,Ka=new ye,ja=new un;class bn{constructor(a=0,h=0,p=0,m=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=a,this._y=h,this._z=p,this._order=m}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get order(){return this._order}set order(a){this._order=a,this._onChangeCallback()}set(a,h,p,m=this._order){return this._x=a,this._y=h,this._z=p,this._order=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this._onChangeCallback(),this}setFromRotationMatrix(a,h=this._order,p=!0){let m=a.elements,g=m[0],_=m[4],y=m[8],x=m[1],M=m[5],S=m[9],b=m[2],v=m[6],w=m[10];switch(h){case"XYZ":if(this._y=Math.asin(Ue(y,-1,1)),Math.abs(y)<0.9999999)this._x=Math.atan2(-S,w),this._z=Math.atan2(-_,g);else this._x=Math.atan2(v,M),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Ue(S,-1,1)),Math.abs(S)<0.9999999)this._y=Math.atan2(y,w),this._z=Math.atan2(x,M);else this._y=Math.atan2(-b,g),this._z=0;break;case"ZXY":if(this._x=Math.asin(Ue(v,-1,1)),Math.abs(v)<0.9999999)this._y=Math.atan2(-b,w),this._z=Math.atan2(-_,M);else this._y=0,this._z=Math.atan2(x,g);break;case"ZYX":if(this._y=Math.asin(-Ue(b,-1,1)),Math.abs(b)<0.9999999)this._x=Math.atan2(v,w),this._z=Math.atan2(x,g);else this._x=0,this._z=Math.atan2(-_,M);break;case"YZX":if(this._z=Math.asin(Ue(x,-1,1)),Math.abs(x)<0.9999999)this._x=Math.atan2(-S,M),this._y=Math.atan2(-b,g);else this._x=0,this._y=Math.atan2(y,w);break;case"XZY":if(this._z=Math.asin(-Ue(_,-1,1)),Math.abs(_)<0.9999999)this._x=Math.atan2(v,M),this._y=Math.atan2(y,g);else this._x=Math.atan2(-S,w),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+h)}if(this._order=h,p===!0)this._onChangeCallback();return this}setFromQuaternion(a,h,p){return Ka.makeRotationFromQuaternion(a),this.setFromRotationMatrix(Ka,h,p)}setFromVector3(a,h=this._order){return this.set(a.x,a.y,a.z,h)}reorder(a){return ja.setFromEuler(this),this.setFromQuaternion(ja,a)}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order}fromArray(a){if(this._x=a[0],this._y=a[1],this._z=a[2],a[3]!==void 0)this._order=a[3];return this._onChangeCallback(),this}toArray(a=[],h=0){return a[h]=this._x,a[h+1]=this._y,a[h+2]=this._z,a[h+3]=this._order,a}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class ar{constructor(){this.mask=1}set(a){this.mask=(1<<a|0)>>>0}enable(a){this.mask|=1<<a|0}enableAll(){this.mask=-1}toggle(a){this.mask^=1<<a|0}disable(a){this.mask&=~(1<<a|0)}disableAll(){this.mask=0}test(a){return(this.mask&a.mask)!==0}isEnabled(a){return(this.mask&(1<<a|0))!==0}}var bc=0,Qa=new X,bi=new un,In=new ye,Ds=new X,$i=new X,Tc=new X,wc=new un,to=new X(1,0,0),eo=new X(0,1,0),no=new X(0,0,1),io={type:"added"},Ac={type:"removed"},Ti={type:"childadded",child:null},Cr={type:"childremoved",child:null};class ze extends Jn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();let a=new X,h=new bn,p=new un,m=new X(1,1,1);function g(){p.setFromEuler(h,!1)}function _(){h.setFromQuaternion(p,void 0,!1)}h._onChange(g),p._onChange(_),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:h},quaternion:{configurable:!0,enumerable:!0,value:p},scale:{configurable:!0,enumerable:!0,value:m},modelViewMatrix:{value:new ye},normalMatrix:{value:new ce}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(a){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(a),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(a){return this.quaternion.premultiply(a),this}setRotationFromAxisAngle(a,h){this.quaternion.setFromAxisAngle(a,h)}setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0)}setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a)}setRotationFromQuaternion(a){this.quaternion.copy(a)}rotateOnAxis(a,h){return bi.setFromAxisAngle(a,h),this.quaternion.multiply(bi),this}rotateOnWorldAxis(a,h){return bi.setFromAxisAngle(a,h),this.quaternion.premultiply(bi),this}rotateX(a){return this.rotateOnAxis(to,a)}rotateY(a){return this.rotateOnAxis(eo,a)}rotateZ(a){return this.rotateOnAxis(no,a)}translateOnAxis(a,h){return Qa.copy(a).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(h)),this}translateX(a){return this.translateOnAxis(to,a)}translateY(a){return this.translateOnAxis(eo,a)}translateZ(a){return this.translateOnAxis(no,a)}localToWorld(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(this.matrixWorld)}worldToLocal(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(a,h,p){if(a.isVector3)Ds.copy(a);else Ds.set(a,h,p);let m=this.parent;if(this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)In.lookAt($i,Ds,this.up);else In.lookAt(Ds,$i,this.up);if(this.quaternion.setFromRotationMatrix(In),m)In.extractRotation(m.matrixWorld),bi.setFromRotationMatrix(In),this.quaternion.premultiply(bi.invert())}add(a){if(arguments.length>1){for(let h=0;h<arguments.length;h++)this.add(arguments[h]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;if(a&&a.isObject3D)a.removeFromParent(),a.parent=this,this.children.push(a),a.dispatchEvent(io),Ti.child=a,this.dispatchEvent(Ti),Ti.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this}remove(a){if(arguments.length>1){for(let p=0;p<arguments.length;p++)this.remove(arguments[p]);return this}let h=this.children.indexOf(a);if(h!==-1)a.parent=null,this.children.splice(h,1),a.dispatchEvent(Ac),Cr.child=a,this.dispatchEvent(Cr),Cr.child=null;return this}removeFromParent(){let a=this.parent;if(a!==null)a.remove(this);return this}clear(){return this.remove(...this.children)}attach(a){if(this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),a.parent!==null)a.parent.updateWorldMatrix(!0,!1),In.multiply(a.parent.matrixWorld);return a.applyMatrix4(In),a.removeFromParent(),a.parent=this,this.children.push(a),a.updateWorldMatrix(!1,!0),a.dispatchEvent(io),Ti.child=a,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(a){return this.getObjectByProperty("id",a)}getObjectByName(a){return this.getObjectByProperty("name",a)}getObjectByProperty(a,h){if(this[a]===h)return this;for(let p=0,m=this.children.length;p<m;p++){let _=this.children[p].getObjectByProperty(a,h);if(_!==void 0)return _}return}getObjectsByProperty(a,h,p=[]){if(this[a]===h)p.push(this);let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].getObjectsByProperty(a,h,p);return p}getWorldPosition(a){return this.updateWorldMatrix(!0,!1),a.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,a,Tc),a}getWorldScale(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,wc,a),a}getWorldDirection(a){this.updateWorldMatrix(!0,!1);let h=this.matrixWorld.elements;return a.set(h[8],h[9],h[10]).normalize()}raycast(){}traverse(a){a(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverse(a)}traverseVisible(a){if(this.visible===!1)return;a(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverseVisible(a)}traverseAncestors(a){let h=this.parent;if(h!==null)a(h),h.traverseAncestors(a)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(a){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||a){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,a=!0}let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].updateMatrixWorld(a)}updateWorldMatrix(a,h){let p=this.parent;if(a===!0&&p!==null)p.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(h===!0){let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].updateWorldMatrix(!1,!0)}}toJSON(a){let h=a===void 0||typeof a==="string",p={};if(h)a={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},p.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let m={};if(m.uuid=this.uuid,m.type=this.type,this.name!=="")m.name=this.name;if(this.castShadow===!0)m.castShadow=!0;if(this.receiveShadow===!0)m.receiveShadow=!0;if(this.visible===!1)m.visible=!1;if(this.frustumCulled===!1)m.frustumCulled=!1;if(this.renderOrder!==0)m.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)m.userData=this.userData;if(m.layers=this.layers.mask,m.matrix=this.matrix.toArray(),m.up=this.up.toArray(),this.matrixAutoUpdate===!1)m.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(m.type="InstancedMesh",m.count=this.count,m.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)m.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(m.type="BatchedMesh",m.perObjectFrustumCulled=this.perObjectFrustumCulled,m.sortObjects=this.sortObjects,m.drawRanges=this._drawRanges,m.reservedRanges=this._reservedRanges,m.visibility=this._visibility,m.active=this._active,m.bounds=this._bounds.map((y)=>({boxInitialized:y.boxInitialized,boxMin:y.box.min.toArray(),boxMax:y.box.max.toArray(),sphereInitialized:y.sphereInitialized,sphereRadius:y.sphere.radius,sphereCenter:y.sphere.center.toArray()})),m.maxInstanceCount=this._maxInstanceCount,m.maxVertexCount=this._maxVertexCount,m.maxIndexCount=this._maxIndexCount,m.geometryInitialized=this._geometryInitialized,m.geometryCount=this._geometryCount,m.matricesTexture=this._matricesTexture.toJSON(a),this._colorsTexture!==null)m.colorsTexture=this._colorsTexture.toJSON(a);if(this.boundingSphere!==null)m.boundingSphere={center:m.boundingSphere.center.toArray(),radius:m.boundingSphere.radius};if(this.boundingBox!==null)m.boundingBox={min:m.boundingBox.min.toArray(),max:m.boundingBox.max.toArray()}}function g(y,x){if(y[x.uuid]===void 0)y[x.uuid]=x.toJSON(a);return x.uuid}if(this.isScene){if(this.background){if(this.background.isColor)m.background=this.background.toJSON();else if(this.background.isTexture)m.background=this.background.toJSON(a).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)m.environment=this.environment.toJSON(a).uuid}else if(this.isMesh||this.isLine||this.isPoints){m.geometry=g(a.geometries,this.geometry);let y=this.geometry.parameters;if(y!==void 0&&y.shapes!==void 0){let x=y.shapes;if(Array.isArray(x))for(let M=0,S=x.length;M<S;M++){let b=x[M];g(a.shapes,b)}else g(a.shapes,x)}}if(this.isSkinnedMesh){if(m.bindMode=this.bindMode,m.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)g(a.skeletons,this.skeleton),m.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let y=[];for(let x=0,M=this.material.length;x<M;x++)y.push(g(a.materials,this.material[x]));m.material=y}else m.material=g(a.materials,this.material);if(this.children.length>0){m.children=[];for(let y=0;y<this.children.length;y++)m.children.push(this.children[y].toJSON(a).object)}if(this.animations.length>0){m.animations=[];for(let y=0;y<this.animations.length;y++){let x=this.animations[y];m.animations.push(g(a.animations,x))}}if(h){let y=_(a.geometries),x=_(a.materials),M=_(a.textures),S=_(a.images),b=_(a.shapes),v=_(a.skeletons),w=_(a.animations),C=_(a.nodes);if(y.length>0)p.geometries=y;if(x.length>0)p.materials=x;if(M.length>0)p.textures=M;if(S.length>0)p.images=S;if(b.length>0)p.shapes=b;if(v.length>0)p.skeletons=v;if(w.length>0)p.animations=w;if(C.length>0)p.nodes=C}return p.object=m,p;function _(y){let x=[];for(let M in y){let S=y[M];delete S.metadata,x.push(S)}return x}}clone(a){return new this.constructor().copy(this,a)}copy(a,h=!0){if(this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.rotation.order=a.rotation.order,this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldAutoUpdate=a.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.layers.mask=a.layers.mask,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.animations=a.animations.slice(),this.userData=JSON.parse(JSON.stringify(a.userData)),h===!0)for(let p=0;p<a.children.length;p++){let m=a.children[p];this.add(m.clone())}return this}}ze.DEFAULT_UP=new X(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new X,Dn=new X,Pr=new X,Ln=new X,wi=new X,Ai=new X,so=new X,Ir=new X,Dr=new X,Lr=new X,Ur=new be,Nr=new be,Fr=new be;class cn{constructor(a=new X,h=new X,p=new X){this.a=a,this.b=h,this.c=p}static getNormal(a,h,p,m){m.subVectors(p,h),_n.subVectors(a,h),m.cross(_n);let g=m.lengthSq();if(g>0)return m.multiplyScalar(1/Math.sqrt(g));return m.set(0,0,0)}static getBarycoord(a,h,p,m,g){_n.subVectors(m,h),Dn.subVectors(p,h),Pr.subVectors(a,h);let _=_n.dot(_n),y=_n.dot(Dn),x=_n.dot(Pr),M=Dn.dot(Dn),S=Dn.dot(Pr),b=_*M-y*y;if(b===0)return g.set(0,0,0),null;let v=1/b,w=(M*x-y*S)*v,C=(_*S-y*x)*v;return g.set(1-w-C,C,w)}static containsPoint(a,h,p,m){if(this.getBarycoord(a,h,p,m,Ln)===null)return!1;return Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(a,h,p,m,g,_,y,x){if(this.getBarycoord(a,h,p,m,Ln)===null){if(x.x=0,x.y=0,"z"in x)x.z=0;if("w"in x)x.w=0;return null}return x.setScalar(0),x.addScaledVector(g,Ln.x),x.addScaledVector(_,Ln.y),x.addScaledVector(y,Ln.z),x}static getInterpolatedAttribute(a,h,p,m,g,_){return Ur.setScalar(0),Nr.setScalar(0),Fr.setScalar(0),Ur.fromBufferAttribute(a,h),Nr.fromBufferAttribute(a,p),Fr.fromBufferAttribute(a,m),_.setScalar(0),_.addScaledVector(Ur,g.x),_.addScaledVector(Nr,g.y),_.addScaledVector(Fr,g.z),_}static isFrontFacing(a,h,p,m){return _n.subVectors(p,h),Dn.subVectors(a,h),_n.cross(Dn).dot(m)<0?!0:!1}set(a,h,p){return this.a.copy(a),this.b.copy(h),this.c.copy(p),this}setFromPointsAndIndices(a,h,p,m){return this.a.copy(a[h]),this.b.copy(a[p]),this.c.copy(a[m]),this}setFromAttributeAndIndices(a,h,p,m){return this.a.fromBufferAttribute(a,h),this.b.fromBufferAttribute(a,p),this.c.fromBufferAttribute(a,m),this}clone(){return new this.constructor().copy(this)}copy(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this}getArea(){return _n.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),_n.cross(Dn).length()*0.5}getMidpoint(a){return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(a){return cn.getNormal(this.a,this.b,this.c,a)}getPlane(a){return a.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(a,h){return cn.getBarycoord(a,this.a,this.b,this.c,h)}getInterpolation(a,h,p,m,g){return cn.getInterpolation(a,this.a,this.b,this.c,h,p,m,g)}containsPoint(a){return cn.containsPoint(a,this.a,this.b,this.c)}isFrontFacing(a){return cn.isFrontFacing(this.a,this.b,this.c,a)}intersectsBox(a){return a.intersectsTriangle(this)}closestPointToPoint(a,h){let p=this.a,m=this.b,g=this.c,_,y;wi.subVectors(m,p),Ai.subVectors(g,p),Ir.subVectors(a,p);let x=wi.dot(Ir),M=Ai.dot(Ir);if(x<=0&&M<=0)return h.copy(p);Dr.subVectors(a,m);let S=wi.dot(Dr),b=Ai.dot(Dr);if(S>=0&&b<=S)return h.copy(m);let v=x*b-S*M;if(v<=0&&x>=0&&S<=0)return _=x/(x-S),h.copy(p).addScaledVector(wi,_);Lr.subVectors(a,g);let w=wi.dot(Lr),C=Ai.dot(Lr);if(C>=0&&w<=C)return h.copy(g);let I=w*M-x*C;if(I<=0&&M>=0&&C<=0)return y=M/(M-C),h.copy(p).addScaledVector(Ai,y);let D=S*C-w*b;if(D<=0&&b-S>=0&&w-C>=0)return so.subVectors(g,m),y=(b-S)/(b-S+(w-C)),h.copy(m).addScaledVector(so,y);let A=1/(D+I+v);return _=I*A,y=v*A,h.copy(p).addScaledVector(wi,_).addScaledVector(Ai,y)}equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}}var sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Or(a,h,p){if(p<0)p+=1;if(p>1)p-=1;if(p<0.16666666666666666)return a+(h-a)*6*p;if(p<0.5)return h;if(p<0.6666666666666666)return a+(h-a)*6*(0.6666666666666666-p);return a}class he{constructor(a,h,p){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(a,h,p)}set(a,h,p){if(h===void 0&&p===void 0){let m=a;if(m&&m.isColor)this.copy(m);else if(typeof m==="number")this.setHex(m);else if(typeof m==="string")this.setStyle(m)}else this.setRGB(a,h,p);return this}setScalar(a){return this.r=a,this.g=a,this.b=a,this}setHex(a,h="srgb"){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(a&255)/255,_e.toWorkingColorSpace(this,h),this}setRGB(a,h,p,m=_e.workingColorSpace){return this.r=a,this.g=h,this.b=p,_e.toWorkingColorSpace(this,m),this}setHSL(a,h,p,m=_e.workingColorSpace){if(a=la(a,1),h=Ue(h,0,1),p=Ue(p,0,1),h===0)this.r=this.g=this.b=p;else{let g=p<=0.5?p*(1+h):p+h-p*h,_=2*p-g;this.r=Or(_,g,a+0.3333333333333333),this.g=Or(_,g,a),this.b=Or(_,g,a-0.3333333333333333)}return _e.toWorkingColorSpace(this,m),this}setStyle(a,h="srgb"){function p(g){if(g===void 0)return;if(parseFloat(g)<1)console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}let m;if(m=/^(\w+)\(([^\)]*)\)/.exec(a)){let g,_=m[1],y=m[2];switch(_){case"rgb":case"rgba":if(g=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setRGB(Math.min(255,parseInt(g[1],10))/255,Math.min(255,parseInt(g[2],10))/255,Math.min(255,parseInt(g[3],10))/255,h);if(g=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setRGB(Math.min(100,parseInt(g[1],10))/100,Math.min(100,parseInt(g[2],10))/100,Math.min(100,parseInt(g[3],10))/100,h);break;case"hsl":case"hsla":if(g=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setHSL(parseFloat(g[1])/360,parseFloat(g[2])/100,parseFloat(g[3])/100,h);break;default:console.warn("THREE.Color: Unknown color model "+a)}}else if(m=/^\#([A-Fa-f\d]+)$/.exec(a)){let g=m[1],_=g.length;if(_===3)return this.setRGB(parseInt(g.charAt(0),16)/15,parseInt(g.charAt(1),16)/15,parseInt(g.charAt(2),16)/15,h);else if(_===6)return this.setHex(parseInt(g,16),h);else console.warn("THREE.Color: Invalid hex color "+a)}else if(a&&a.length>0)return this.setColorName(a,h);return this}setColorName(a,h="srgb"){let p=sl[a.toLowerCase()];if(p!==void 0)this.setHex(p,h);else console.warn("THREE.Color: Unknown color "+a);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(a){return this.r=a.r,this.g=a.g,this.b=a.b,this}copySRGBToLinear(a){return this.r=Un(a.r),this.g=Un(a.g),this.b=Un(a.b),this}copyLinearToSRGB(a){return this.r=Oi(a.r),this.g=Oi(a.g),this.b=Oi(a.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(a="srgb"){return _e.fromWorkingColorSpace(Xe.copy(this),a),Math.round(Ue(Xe.r*255,0,255))*65536+Math.round(Ue(Xe.g*255,0,255))*256+Math.round(Ue(Xe.b*255,0,255))}getHexString(a="srgb"){return("000000"+this.getHex(a).toString(16)).slice(-6)}getHSL(a,h=_e.workingColorSpace){_e.fromWorkingColorSpace(Xe.copy(this),h);let{r:p,g:m,b:g}=Xe,_=Math.max(p,m,g),y=Math.min(p,m,g),x,M,S=(y+_)/2;if(y===_)x=0,M=0;else{let b=_-y;switch(M=S<=0.5?b/(_+y):b/(2-_-y),_){case p:x=(m-g)/b+(m<g?6:0);break;case m:x=(g-p)/b+2;break;case g:x=(p-m)/b+4;break}x/=6}return a.h=x,a.s=M,a.l=S,a}getRGB(a,h=_e.workingColorSpace){return _e.fromWorkingColorSpace(Xe.copy(this),h),a.r=Xe.r,a.g=Xe.g,a.b=Xe.b,a}getStyle(a="srgb"){_e.fromWorkingColorSpace(Xe.copy(this),a);let{r:h,g:p,b:m}=Xe;if(a!=="srgb")return`color(${a} ${h.toFixed(3)} ${p.toFixed(3)} ${m.toFixed(3)})`;return`rgb(${Math.round(h*255)},${Math.round(p*255)},${Math.round(m*255)})`}offsetHSL(a,h,p){return this.getHSL(Xn),this.setHSL(Xn.h+a,Xn.s+h,Xn.l+p)}add(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this}addColors(a,h){return this.r=a.r+h.r,this.g=a.g+h.g,this.b=a.b+h.b,this}addScalar(a){return this.r+=a,this.g+=a,this.b+=a,this}sub(a){return this.r=Math.max(0,this.r-a.r),this.g=Math.max(0,this.g-a.g),this.b=Math.max(0,this.b-a.b),this}multiply(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this}multiplyScalar(a){return this.r*=a,this.g*=a,this.b*=a,this}lerp(a,h){return this.r+=(a.r-this.r)*h,this.g+=(a.g-this.g)*h,this.b+=(a.b-this.b)*h,this}lerpColors(a,h,p){return this.r=a.r+(h.r-a.r)*p,this.g=a.g+(h.g-a.g)*p,this.b=a.b+(h.b-a.b)*p,this}lerpHSL(a,h){this.getHSL(Xn),a.getHSL(Ls);let p=ss(Xn.h,Ls.h,h),m=ss(Xn.s,Ls.s,h),g=ss(Xn.l,Ls.l,h);return this.setHSL(p,m,g),this}setFromVector3(a){return this.r=a.x,this.g=a.y,this.b=a.z,this}applyMatrix3(a){let h=this.r,p=this.g,m=this.b,g=a.elements;return this.r=g[0]*h+g[3]*p+g[6]*m,this.g=g[1]*h+g[4]*p+g[7]*m,this.b=g[2]*h+g[5]*p+g[8]*m,this}equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b}fromArray(a,h=0){return this.r=a[h],this.g=a[h+1],this.b=a[h+2],this}toArray(a=[],h=0){return a[h]=this.r,a[h+1]=this.g,a[h+2]=this.b,a}fromBufferAttribute(a,h){return this.r=a.getX(h),this.g=a.getY(h),this.b=a.getZ(h),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Xe=new he;he.NAMES=sl;var Rc=0;class $n extends Jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(a){}constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=di(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(a){if(this._alphaTest>0!==a>0)this.version++;this._alphaTest=a}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(a){if(a===void 0)return;for(let h in a){let p=a[h];if(p===void 0){console.warn(`THREE.Material: parameter '${h}' has value of undefined.`);continue}let m=this[h];if(m===void 0){console.warn(`THREE.Material: '${h}' is not a property of THREE.${this.type}.`);continue}if(m&&m.isColor)m.set(p);else if(m&&m.isVector3&&(p&&p.isVector3))m.copy(p);else this[h]=p}}toJSON(a){let h=a===void 0||typeof a==="string";if(h)a={textures:{},images:{}};let p={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(p.uuid=this.uuid,p.type=this.type,this.name!=="")p.name=this.name;if(this.color&&this.color.isColor)p.color=this.color.getHex();if(this.roughness!==void 0)p.roughness=this.roughness;if(this.metalness!==void 0)p.metalness=this.metalness;if(this.sheen!==void 0)p.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)p.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)p.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)p.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)p.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)p.specular=this.specular.getHex();if(this.specularIntensity!==void 0)p.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)p.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)p.shininess=this.shininess;if(this.clearcoat!==void 0)p.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)p.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)p.clearcoatMap=this.clearcoatMap.toJSON(a).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)p.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(a).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)p.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,p.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)p.dispersion=this.dispersion;if(this.iridescence!==void 0)p.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)p.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)p.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)p.iridescenceMap=this.iridescenceMap.toJSON(a).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)p.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(a).uuid;if(this.anisotropy!==void 0)p.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)p.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)p.anisotropyMap=this.anisotropyMap.toJSON(a).uuid;if(this.map&&this.map.isTexture)p.map=this.map.toJSON(a).uuid;if(this.matcap&&this.matcap.isTexture)p.matcap=this.matcap.toJSON(a).uuid;if(this.alphaMap&&this.alphaMap.isTexture)p.alphaMap=this.alphaMap.toJSON(a).uuid;if(this.lightMap&&this.lightMap.isTexture)p.lightMap=this.lightMap.toJSON(a).uuid,p.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)p.aoMap=this.aoMap.toJSON(a).uuid,p.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)p.bumpMap=this.bumpMap.toJSON(a).uuid,p.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)p.normalMap=this.normalMap.toJSON(a).uuid,p.normalMapType=this.normalMapType,p.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)p.displacementMap=this.displacementMap.toJSON(a).uuid,p.displacementScale=this.displacementScale,p.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)p.roughnessMap=this.roughnessMap.toJSON(a).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)p.metalnessMap=this.metalnessMap.toJSON(a).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)p.emissiveMap=this.emissiveMap.toJSON(a).uuid;if(this.specularMap&&this.specularMap.isTexture)p.specularMap=this.specularMap.toJSON(a).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)p.specularIntensityMap=this.specularIntensityMap.toJSON(a).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)p.specularColorMap=this.specularColorMap.toJSON(a).uuid;if(this.envMap&&this.envMap.isTexture){if(p.envMap=this.envMap.toJSON(a).uuid,this.combine!==void 0)p.combine=this.combine}if(this.envMapRotation!==void 0)p.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)p.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)p.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)p.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)p.gradientMap=this.gradientMap.toJSON(a).uuid;if(this.transmission!==void 0)p.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)p.transmissionMap=this.transmissionMap.toJSON(a).uuid;if(this.thickness!==void 0)p.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)p.thicknessMap=this.thicknessMap.toJSON(a).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)p.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)p.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)p.size=this.size;if(this.shadowSide!==null)p.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)p.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)p.blending=this.blending;if(this.side!==0)p.side=this.side;if(this.vertexColors===!0)p.vertexColors=!0;if(this.opacity<1)p.opacity=this.opacity;if(this.transparent===!0)p.transparent=!0;if(this.blendSrc!==204)p.blendSrc=this.blendSrc;if(this.blendDst!==205)p.blendDst=this.blendDst;if(this.blendEquation!==100)p.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)p.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)p.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)p.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)p.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)p.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)p.depthFunc=this.depthFunc;if(this.depthTest===!1)p.depthTest=this.depthTest;if(this.depthWrite===!1)p.depthWrite=this.depthWrite;if(this.colorWrite===!1)p.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)p.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)p.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)p.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)p.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)p.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)p.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)p.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)p.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)p.rotation=this.rotation;if(this.polygonOffset===!0)p.polygonOffset=!0;if(this.polygonOffsetFactor!==0)p.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)p.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)p.linewidth=this.linewidth;if(this.dashSize!==void 0)p.dashSize=this.dashSize;if(this.gapSize!==void 0)p.gapSize=this.gapSize;if(this.scale!==void 0)p.scale=this.scale;if(this.dithering===!0)p.dithering=!0;if(this.alphaTest>0)p.alphaTest=this.alphaTest;if(this.alphaHash===!0)p.alphaHash=!0;if(this.alphaToCoverage===!0)p.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)p.premultipliedAlpha=!0;if(this.forceSinglePass===!0)p.forceSinglePass=!0;if(this.wireframe===!0)p.wireframe=!0;if(this.wireframeLinewidth>1)p.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")p.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")p.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)p.flatShading=!0;if(this.visible===!1)p.visible=!1;if(this.toneMapped===!1)p.toneMapped=!1;if(this.fog===!1)p.fog=!1;if(Object.keys(this.userData).length>0)p.userData=this.userData;function m(g){let _=[];for(let y in g){let x=g[y];delete x.metadata,_.push(x)}return _}if(h){let g=m(a.textures),_=m(a.images);if(g.length>0)p.textures=g;if(_.length>0)p.images=_}return p}clone(){return new this.constructor().copy(this)}copy(a){this.name=a.name,this.blending=a.blending,this.side=a.side,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.blendColor.copy(a.blendColor),this.blendAlpha=a.blendAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.stencilWriteMask=a.stencilWriteMask,this.stencilFunc=a.stencilFunc,this.stencilRef=a.stencilRef,this.stencilFuncMask=a.stencilFuncMask,this.stencilFail=a.stencilFail,this.stencilZFail=a.stencilZFail,this.stencilZPass=a.stencilZPass,this.stencilWrite=a.stencilWrite;let h=a.clippingPlanes,p=null;if(h!==null){let m=h.length;p=Array(m);for(let g=0;g!==m;++g)p[g]=h[g].clone()}return this.clippingPlanes=p,this.clipIntersection=a.clipIntersection,this.clipShadows=a.clipShadows,this.shadowSide=a.shadowSide,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.alphaHash=a.alphaHash,this.alphaToCoverage=a.alphaToCoverage,this.premultipliedAlpha=a.premultipliedAlpha,this.forceSinglePass=a.forceSinglePass,this.visible=a.visible,this.toneMapped=a.toneMapped,this.userData=JSON.parse(JSON.stringify(a.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(a){if(a===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ps extends $n{static get type(){return"MeshBasicMaterial"}constructor(a){super();this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.fog=a.fog,this}}var Le=new X,Us=new St;class hn{constructor(a,h,p=!1){if(Array.isArray(a))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=a,this.itemSize=h,this.count=a!==void 0?a.length/h:0,this.normalized=p,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(a){if(a===!0)this.version++}setUsage(a){return this.usage=a,this}addUpdateRange(a,h){this.updateRanges.push({start:a,count:h})}clearUpdateRanges(){this.updateRanges.length=0}copy(a){return this.name=a.name,this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.count=a.count,this.normalized=a.normalized,this.usage=a.usage,this.gpuType=a.gpuType,this}copyAt(a,h,p){a*=this.itemSize,p*=h.itemSize;for(let m=0,g=this.itemSize;m<g;m++)this.array[a+m]=h.array[p+m];return this}copyArray(a){return this.array.set(a),this}applyMatrix3(a){if(this.itemSize===2)for(let h=0,p=this.count;h<p;h++)Us.fromBufferAttribute(this,h),Us.applyMatrix3(a),this.setXY(h,Us.x,Us.y);else if(this.itemSize===3)for(let h=0,p=this.count;h<p;h++)Le.fromBufferAttribute(this,h),Le.applyMatrix3(a),this.setXYZ(h,Le.x,Le.y,Le.z);return this}applyMatrix4(a){for(let h=0,p=this.count;h<p;h++)Le.fromBufferAttribute(this,h),Le.applyMatrix4(a),this.setXYZ(h,Le.x,Le.y,Le.z);return this}applyNormalMatrix(a){for(let h=0,p=this.count;h<p;h++)Le.fromBufferAttribute(this,h),Le.applyNormalMatrix(a),this.setXYZ(h,Le.x,Le.y,Le.z);return this}transformDirection(a){for(let h=0,p=this.count;h<p;h++)Le.fromBufferAttribute(this,h),Le.transformDirection(a),this.setXYZ(h,Le.x,Le.y,Le.z);return this}set(a,h=0){return this.array.set(a,h),this}getComponent(a,h){let p=this.array[a*this.itemSize+h];if(this.normalized)p=Li(p,this.array);return p}setComponent(a,h,p){if(this.normalized)p=Ze(p,this.array);return this.array[a*this.itemSize+h]=p,this}getX(a){let h=this.array[a*this.itemSize];if(this.normalized)h=Li(h,this.array);return h}setX(a,h){if(this.normalized)h=Ze(h,this.array);return this.array[a*this.itemSize]=h,this}getY(a){let h=this.array[a*this.itemSize+1];if(this.normalized)h=Li(h,this.array);return h}setY(a,h){if(this.normalized)h=Ze(h,this.array);return this.array[a*this.itemSize+1]=h,this}getZ(a){let h=this.array[a*this.itemSize+2];if(this.normalized)h=Li(h,this.array);return h}setZ(a,h){if(this.normalized)h=Ze(h,this.array);return this.array[a*this.itemSize+2]=h,this}getW(a){let h=this.array[a*this.itemSize+3];if(this.normalized)h=Li(h,this.array);return h}setW(a,h){if(this.normalized)h=Ze(h,this.array);return this.array[a*this.itemSize+3]=h,this}setXY(a,h,p){if(a*=this.itemSize,this.normalized)h=Ze(h,this.array),p=Ze(p,this.array);return this.array[a+0]=h,this.array[a+1]=p,this}setXYZ(a,h,p,m){if(a*=this.itemSize,this.normalized)h=Ze(h,this.array),p=Ze(p,this.array),m=Ze(m,this.array);return this.array[a+0]=h,this.array[a+1]=p,this.array[a+2]=m,this}setXYZW(a,h,p,m,g){if(a*=this.itemSize,this.normalized)h=Ze(h,this.array),p=Ze(p,this.array),m=Ze(m,this.array),g=Ze(g,this.array);return this.array[a+0]=h,this.array[a+1]=p,this.array[a+2]=m,this.array[a+3]=g,this}onUpload(a){return this.onUploadCallback=a,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let a={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")a.name=this.name;if(this.usage!==35044)a.usage=this.usage;return a}}class ua extends hn{constructor(a,h,p){super(new Uint16Array(a),h,p)}}class da extends hn{constructor(a,h,p){super(new Uint32Array(a),h,p)}}class Me extends hn{constructor(a,h,p){super(new Float32Array(a),h,p)}}var Cc=0,on=new ye,Br=new ze,Ri=new X,nn=new An,Ki=new An,Be=new X;class Ge extends Jn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(a){if(Array.isArray(a))this.index=new((tl(a))?da:ua)(a,1);else this.index=a;return this}setIndirect(a){return this.indirect=a,this}getIndirect(){return this.indirect}getAttribute(a){return this.attributes[a]}setAttribute(a,h){return this.attributes[a]=h,this}deleteAttribute(a){return delete this.attributes[a],this}hasAttribute(a){return this.attributes[a]!==void 0}addGroup(a,h,p=0){this.groups.push({start:a,count:h,materialIndex:p})}clearGroups(){this.groups=[]}setDrawRange(a,h){this.drawRange.start=a,this.drawRange.count=h}applyMatrix4(a){let h=this.attributes.position;if(h!==void 0)h.applyMatrix4(a),h.needsUpdate=!0;let p=this.attributes.normal;if(p!==void 0){let g=new ce().getNormalMatrix(a);p.applyNormalMatrix(g),p.needsUpdate=!0}let m=this.attributes.tangent;if(m!==void 0)m.transformDirection(a),m.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(a){return on.makeRotationFromQuaternion(a),this.applyMatrix4(on),this}rotateX(a){return on.makeRotationX(a),this.applyMatrix4(on),this}rotateY(a){return on.makeRotationY(a),this.applyMatrix4(on),this}rotateZ(a){return on.makeRotationZ(a),this.applyMatrix4(on),this}translate(a,h,p){return on.makeTranslation(a,h,p),this.applyMatrix4(on),this}scale(a,h,p){return on.makeScale(a,h,p),this.applyMatrix4(on),this}lookAt(a){return Br.lookAt(a),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(a){let h=this.getAttribute("position");if(h===void 0){let p=[];for(let m=0,g=a.length;m<g;m++){let _=a[m];p.push(_.x,_.y,_.z||0)}this.setAttribute("position",new Me(p,3))}else{for(let p=0,m=h.count;p<m;p++){let g=a[p];h.setXYZ(p,g.x,g.y,g.z||0)}if(a.length>h.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");h.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new An;let a=this.attributes.position,h=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(a!==void 0){if(this.boundingBox.setFromBufferAttribute(a),h)for(let p=0,m=h.length;p<m;p++){let g=h[p];if(nn.setFromBufferAttribute(g),this.morphTargetsRelative)Be.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Be);else this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new fi;let a=this.attributes.position,h=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(a){let p=this.boundingSphere.center;if(nn.setFromBufferAttribute(a),h)for(let g=0,_=h.length;g<_;g++){let y=h[g];if(Ki.setFromBufferAttribute(y),this.morphTargetsRelative)Be.addVectors(nn.min,Ki.min),nn.expandByPoint(Be),Be.addVectors(nn.max,Ki.max),nn.expandByPoint(Be);else nn.expandByPoint(Ki.min),nn.expandByPoint(Ki.max)}nn.getCenter(p);let m=0;for(let g=0,_=a.count;g<_;g++)Be.fromBufferAttribute(a,g),m=Math.max(m,p.distanceToSquared(Be));if(h)for(let g=0,_=h.length;g<_;g++){let y=h[g],x=this.morphTargetsRelative;for(let M=0,S=y.count;M<S;M++){if(Be.fromBufferAttribute(y,M),x)Ri.fromBufferAttribute(a,M),Be.add(Ri);m=Math.max(m,p.distanceToSquared(Be))}}if(this.boundingSphere.radius=Math.sqrt(m),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let a=this.index,h=this.attributes;if(a===null||h.position===void 0||h.normal===void 0||h.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:p,normal:m,uv:g}=h;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new hn(new Float32Array(4*p.count),4));let _=this.getAttribute("tangent"),y=[],x=[];for(let Y=0;Y<p.count;Y++)y[Y]=new X,x[Y]=new X;let M=new X,S=new X,b=new X,v=new St,w=new St,C=new St,I=new X,D=new X;function A(Y,lt,B){M.fromBufferAttribute(p,Y),S.fromBufferAttribute(p,lt),b.fromBufferAttribute(p,B),v.fromBufferAttribute(g,Y),w.fromBufferAttribute(g,lt),C.fromBufferAttribute(g,B),S.sub(M),b.sub(M),w.sub(v),C.sub(v);let z=1/(w.x*C.y-C.x*w.y);if(!isFinite(z))return;I.copy(S).multiplyScalar(C.y).addScaledVector(b,-w.y).multiplyScalar(z),D.copy(b).multiplyScalar(w.x).addScaledVector(S,-C.x).multiplyScalar(z),y[Y].add(I),y[lt].add(I),y[B].add(I),x[Y].add(D),x[lt].add(D),x[B].add(D)}let R=this.groups;if(R.length===0)R=[{start:0,count:a.count}];for(let Y=0,lt=R.length;Y<lt;++Y){let B=R[Y],{start:z,count:Q}=B;for(let st=z,ot=z+Q;st<ot;st+=3)A(a.getX(st+0),a.getX(st+1),a.getX(st+2))}let W=new X,F=new X,H=new X,it=new X;function q(Y){H.fromBufferAttribute(m,Y),it.copy(H);let lt=y[Y];W.copy(lt),W.sub(H.multiplyScalar(H.dot(lt))).normalize(),F.crossVectors(it,lt);let z=F.dot(x[Y])<0?-1:1;_.setXYZW(Y,W.x,W.y,W.z,z)}for(let Y=0,lt=R.length;Y<lt;++Y){let B=R[Y],{start:z,count:Q}=B;for(let st=z,ot=z+Q;st<ot;st+=3)q(a.getX(st+0)),q(a.getX(st+1)),q(a.getX(st+2))}}computeVertexNormals(){let a=this.index,h=this.getAttribute("position");if(h!==void 0){let p=this.getAttribute("normal");if(p===void 0)p=new hn(new Float32Array(h.count*3),3),this.setAttribute("normal",p);else for(let v=0,w=p.count;v<w;v++)p.setXYZ(v,0,0,0);let m=new X,g=new X,_=new X,y=new X,x=new X,M=new X,S=new X,b=new X;if(a)for(let v=0,w=a.count;v<w;v+=3){let C=a.getX(v+0),I=a.getX(v+1),D=a.getX(v+2);m.fromBufferAttribute(h,C),g.fromBufferAttribute(h,I),_.fromBufferAttribute(h,D),S.subVectors(_,g),b.subVectors(m,g),S.cross(b),y.fromBufferAttribute(p,C),x.fromBufferAttribute(p,I),M.fromBufferAttribute(p,D),y.add(S),x.add(S),M.add(S),p.setXYZ(C,y.x,y.y,y.z),p.setXYZ(I,x.x,x.y,x.z),p.setXYZ(D,M.x,M.y,M.z)}else for(let v=0,w=h.count;v<w;v+=3)m.fromBufferAttribute(h,v+0),g.fromBufferAttribute(h,v+1),_.fromBufferAttribute(h,v+2),S.subVectors(_,g),b.subVectors(m,g),S.cross(b),p.setXYZ(v+0,S.x,S.y,S.z),p.setXYZ(v+1,S.x,S.y,S.z),p.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),p.needsUpdate=!0}}normalizeNormals(){let a=this.attributes.normal;for(let h=0,p=a.count;h<p;h++)Be.fromBufferAttribute(a,h),Be.normalize(),a.setXYZ(h,Be.x,Be.y,Be.z)}toNonIndexed(){function a(y,x){let{array:M,itemSize:S,normalized:b}=y,v=new M.constructor(x.length*S),w=0,C=0;for(let I=0,D=x.length;I<D;I++){if(y.isInterleavedBufferAttribute)w=x[I]*y.data.stride+y.offset;else w=x[I]*S;for(let A=0;A<S;A++)v[C++]=M[w++]}return new hn(v,S,b)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let h=new Ge,p=this.index.array,m=this.attributes;for(let y in m){let x=m[y],M=a(x,p);h.setAttribute(y,M)}let g=this.morphAttributes;for(let y in g){let x=[],M=g[y];for(let S=0,b=M.length;S<b;S++){let v=M[S],w=a(v,p);x.push(w)}h.morphAttributes[y]=x}h.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;for(let y=0,x=_.length;y<x;y++){let M=_[y];h.addGroup(M.start,M.count,M.materialIndex)}return h}toJSON(){let a={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(a.uuid=this.uuid,a.type=this.type,this.name!=="")a.name=this.name;if(Object.keys(this.userData).length>0)a.userData=this.userData;if(this.parameters!==void 0){let x=this.parameters;for(let M in x)if(x[M]!==void 0)a[M]=x[M];return a}a.data={attributes:{}};let h=this.index;if(h!==null)a.data.index={type:h.array.constructor.name,array:Array.prototype.slice.call(h.array)};let p=this.attributes;for(let x in p){let M=p[x];a.data.attributes[x]=M.toJSON(a.data)}let m={},g=!1;for(let x in this.morphAttributes){let M=this.morphAttributes[x],S=[];for(let b=0,v=M.length;b<v;b++){let w=M[b];S.push(w.toJSON(a.data))}if(S.length>0)m[x]=S,g=!0}if(g)a.data.morphAttributes=m,a.data.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;if(_.length>0)a.data.groups=JSON.parse(JSON.stringify(_));let y=this.boundingSphere;if(y!==null)a.data.boundingSphere={center:y.center.toArray(),radius:y.radius};return a}clone(){return new this.constructor().copy(this)}copy(a){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let h={};this.name=a.name;let p=a.index;if(p!==null)this.setIndex(p.clone(h));let m=a.attributes;for(let M in m){let S=m[M];this.setAttribute(M,S.clone(h))}let g=a.morphAttributes;for(let M in g){let S=[],b=g[M];for(let v=0,w=b.length;v<w;v++)S.push(b[v].clone(h));this.morphAttributes[M]=S}this.morphTargetsRelative=a.morphTargetsRelative;let _=a.groups;for(let M=0,S=_.length;M<S;M++){let b=_[M];this.addGroup(b.start,b.count,b.materialIndex)}let y=a.boundingBox;if(y!==null)this.boundingBox=y.clone();let x=a.boundingSphere;if(x!==null)this.boundingSphere=x.clone();return this.drawRange.start=a.drawRange.start,this.drawRange.count=a.drawRange.count,this.userData=a.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ro=new ye,ri=new zi,Ns=new fi,ao=new X,Fs=new X,Os=new X,Bs=new X,zr=new X,zs=new X,oo=new X,Hs=new X;class Qt extends ze{constructor(a=new Ge,h=new ps){super();this.isMesh=!0,this.type="Mesh",this.geometry=a,this.material=h,this.updateMorphTargets()}copy(a,h){if(super.copy(a,h),a.morphTargetInfluences!==void 0)this.morphTargetInfluences=a.morphTargetInfluences.slice();if(a.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary);return this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let y=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[y]=g}}}}getVertexPosition(a,h){let p=this.geometry,m=p.attributes.position,g=p.morphAttributes.position,_=p.morphTargetsRelative;h.fromBufferAttribute(m,a);let y=this.morphTargetInfluences;if(g&&y){zs.set(0,0,0);for(let x=0,M=g.length;x<M;x++){let S=y[x],b=g[x];if(S===0)continue;if(zr.fromBufferAttribute(b,a),_)zs.addScaledVector(zr,S);else zs.addScaledVector(zr.sub(h),S)}h.add(zs)}return h}raycast(a,h){let p=this.geometry,m=this.material,g=this.matrixWorld;if(m===void 0)return;if(p.boundingSphere===null)p.computeBoundingSphere();if(Ns.copy(p.boundingSphere),Ns.applyMatrix4(g),ri.copy(a.ray).recast(a.near),Ns.containsPoint(ri.origin)===!1){if(ri.intersectSphere(Ns,ao)===null)return;if(ri.origin.distanceToSquared(ao)>(a.far-a.near)**2)return}if(ro.copy(g).invert(),ri.copy(a.ray).applyMatrix4(ro),p.boundingBox!==null){if(ri.intersectsBox(p.boundingBox)===!1)return}this._computeIntersections(a,h,ri)}_computeIntersections(a,h,p){let m,g=this.geometry,_=this.material,y=g.index,x=g.attributes.position,M=g.attributes.uv,S=g.attributes.uv1,b=g.attributes.normal,{groups:v,drawRange:w}=g;if(y!==null)if(Array.isArray(_))for(let C=0,I=v.length;C<I;C++){let D=v[C],A=_[D.materialIndex],R=Math.max(D.start,w.start),W=Math.min(y.count,Math.min(D.start+D.count,w.start+w.count));for(let F=R,H=W;F<H;F+=3){let it=y.getX(F),q=y.getX(F+1),Y=y.getX(F+2);if(m=ks(this,A,a,p,M,S,b,it,q,Y),m)m.faceIndex=Math.floor(F/3),m.face.materialIndex=D.materialIndex,h.push(m)}}else{let C=Math.max(0,w.start),I=Math.min(y.count,w.start+w.count);for(let D=C,A=I;D<A;D+=3){let R=y.getX(D),W=y.getX(D+1),F=y.getX(D+2);if(m=ks(this,_,a,p,M,S,b,R,W,F),m)m.faceIndex=Math.floor(D/3),h.push(m)}}else if(x!==void 0)if(Array.isArray(_))for(let C=0,I=v.length;C<I;C++){let D=v[C],A=_[D.materialIndex],R=Math.max(D.start,w.start),W=Math.min(x.count,Math.min(D.start+D.count,w.start+w.count));for(let F=R,H=W;F<H;F+=3){let it=F,q=F+1,Y=F+2;if(m=ks(this,A,a,p,M,S,b,it,q,Y),m)m.faceIndex=Math.floor(F/3),m.face.materialIndex=D.materialIndex,h.push(m)}}else{let C=Math.max(0,w.start),I=Math.min(x.count,w.start+w.count);for(let D=C,A=I;D<A;D+=3){let R=D,W=D+1,F=D+2;if(m=ks(this,_,a,p,M,S,b,R,W,F),m)m.faceIndex=Math.floor(D/3),h.push(m)}}}}function Pc(a,h,p,m,g,_,y,x){let M;if(h.side===1)M=m.intersectTriangle(y,_,g,!0,x);else M=m.intersectTriangle(g,_,y,h.side===0,x);if(M===null)return null;Hs.copy(x),Hs.applyMatrix4(a.matrixWorld);let S=p.ray.origin.distanceTo(Hs);if(S<p.near||S>p.far)return null;return{distance:S,point:Hs.clone(),object:a}}function ks(a,h,p,m,g,_,y,x,M,S){a.getVertexPosition(x,Fs),a.getVertexPosition(M,Os),a.getVertexPosition(S,Bs);let b=Pc(a,h,p,m,Fs,Os,Bs,oo);if(b){let v=new X;if(cn.getBarycoord(oo,Fs,Os,Bs,v),g)b.uv=cn.getInterpolatedAttribute(g,x,M,S,v,new St);if(_)b.uv1=cn.getInterpolatedAttribute(_,x,M,S,v,new St);if(y){if(b.normal=cn.getInterpolatedAttribute(y,x,M,S,v,new X),b.normal.dot(m.direction)>0)b.normal.multiplyScalar(-1)}let w={a:x,b:M,c:S,normal:new X,materialIndex:0};cn.getNormal(Fs,Os,Bs,w.normal),b.face=w,b.barycoord=v}return b}class We extends Ge{constructor(a=1,h=1,p=1,m=1,g=1,_=1){super();this.type="BoxGeometry",this.parameters={width:a,height:h,depth:p,widthSegments:m,heightSegments:g,depthSegments:_};let y=this;m=Math.floor(m),g=Math.floor(g),_=Math.floor(_);let x=[],M=[],S=[],b=[],v=0,w=0;C("z","y","x",-1,-1,p,h,a,_,g,0),C("z","y","x",1,-1,p,h,-a,_,g,1),C("x","z","y",1,1,a,p,h,m,_,2),C("x","z","y",1,-1,a,p,-h,m,_,3),C("x","y","z",1,-1,a,h,p,m,g,4),C("x","y","z",-1,-1,a,h,-p,m,g,5),this.setIndex(x),this.setAttribute("position",new Me(M,3)),this.setAttribute("normal",new Me(S,3)),this.setAttribute("uv",new Me(b,2));function C(I,D,A,R,W,F,H,it,q,Y,lt){let B=F/q,z=H/Y,Q=F/2,st=H/2,ot=it/2,ct=q+1,pt=Y+1,J=0,et=0,Z=new X;for(let At=0;At<pt;At++){let U=At*z-st;for(let Xt=0;Xt<ct;Xt++){let Jt=Xt*B-Q;Z[I]=Jt*R,Z[D]=U*W,Z[A]=ot,M.push(Z.x,Z.y,Z.z),Z[I]=0,Z[D]=0,Z[A]=it>0?1:-1,S.push(Z.x,Z.y,Z.z),b.push(Xt/q),b.push(1-At/Y),J+=1}}for(let At=0;At<Y;At++)for(let U=0;U<q;U++){let Xt=v+U+ct*At,Jt=v+U+ct*(At+1),dt=v+(U+1)+ct*(At+1),bt=v+(U+1)+ct*At;x.push(Xt,Jt,bt),x.push(Jt,dt,bt),et+=6}y.addGroup(w,et,lt),w+=et,v+=J}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new We(a.width,a.height,a.depth,a.widthSegments,a.heightSegments,a.depthSegments)}}function Bi(a){let h={};for(let p in a){h[p]={};for(let m in a[p]){let g=a[p][m];if(g&&(g.isColor||g.isMatrix3||g.isMatrix4||g.isVector2||g.isVector3||g.isVector4||g.isTexture||g.isQuaternion))if(g.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),h[p][m]=null;else h[p][m]=g.clone();else if(Array.isArray(g))h[p][m]=g.slice();else h[p][m]=g}}return h}function Je(a){let h={};for(let p=0;p<a.length;p++){let m=Bi(a[p]);for(let g in m)h[g]=m[g]}return h}function Ic(a){let h=[];for(let p=0;p<a.length;p++)h.push(a[p].clone());return h}function rl(a){let h=a.getRenderTarget();if(h===null)return a.outputColorSpace;if(h.isXRRenderTarget===!0)return h.texture.colorSpace;return _e.workingColorSpace}var Dc={clone:Bi,merge:Je},Lc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends $n{static get type(){return"ShaderMaterial"}constructor(a){super();if(this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lc,this.fragmentShader=Uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,a!==void 0)this.setValues(a)}copy(a){return super.copy(a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=Bi(a.uniforms),this.uniformsGroups=Ic(a.uniformsGroups),this.defines=Object.assign({},a.defines),this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.fog=a.fog,this.lights=a.lights,this.clipping=a.clipping,this.extensions=Object.assign({},a.extensions),this.glslVersion=a.glslVersion,this}toJSON(a){let h=super.toJSON(a);h.glslVersion=this.glslVersion,h.uniforms={};for(let m in this.uniforms){let _=this.uniforms[m].value;if(_&&_.isTexture)h.uniforms[m]={type:"t",value:_.toJSON(a).uuid};else if(_&&_.isColor)h.uniforms[m]={type:"c",value:_.getHex()};else if(_&&_.isVector2)h.uniforms[m]={type:"v2",value:_.toArray()};else if(_&&_.isVector3)h.uniforms[m]={type:"v3",value:_.toArray()};else if(_&&_.isVector4)h.uniforms[m]={type:"v4",value:_.toArray()};else if(_&&_.isMatrix3)h.uniforms[m]={type:"m3",value:_.toArray()};else if(_&&_.isMatrix4)h.uniforms[m]={type:"m4",value:_.toArray()};else h.uniforms[m]={value:_}}if(Object.keys(this.defines).length>0)h.defines=this.defines;h.vertexShader=this.vertexShader,h.fragmentShader=this.fragmentShader,h.lights=this.lights,h.clipping=this.clipping;let p={};for(let m in this.extensions)if(this.extensions[m]===!0)p[m]=!0;if(Object.keys(p).length>0)h.extensions=p;return h}}class fa extends ze{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=2000}copy(a,h){return super.copy(a,h),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this.projectionMatrixInverse.copy(a.projectionMatrixInverse),this.coordinateSystem=a.coordinateSystem,this}getWorldDirection(a){return super.getWorldDirection(a).negate()}updateMatrixWorld(a){super.updateMatrixWorld(a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(a,h){super.updateWorldMatrix(a,h),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var qn=new X,lo=new St,co=new St;class $e extends fa{constructor(a=50,h=1,p=0.1,m=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=a,this.zoom=1,this.near=p,this.far=m,this.focus=10,this.aspect=h,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(a,h){return super.copy(a,h),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=a.view===null?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this}setFocalLength(a){let h=0.5*this.getFilmHeight()/a;this.fov=ls*2*Math.atan(h),this.updateProjectionMatrix()}getFocalLength(){let a=Math.tan(Fi*0.5*this.fov);return 0.5*this.getFilmHeight()/a}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Fi*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(a,h,p){qn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),h.set(qn.x,qn.y).multiplyScalar(-a/qn.z),qn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),p.set(qn.x,qn.y).multiplyScalar(-a/qn.z)}getViewSize(a,h){return this.getViewBounds(a,lo,co),h.subVectors(co,lo)}setViewOffset(a,h,p,m,g,_){if(this.aspect=a/h,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let a=this.near,h=a*Math.tan(Fi*0.5*this.fov)/this.zoom,p=2*h,m=this.aspect*p,g=-0.5*m,_=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:x,fullHeight:M}=_;g+=_.offsetX*m/x,h-=_.offsetY*p/M,m*=_.width/x,p*=_.height/M}let y=this.filmOffset;if(y!==0)g+=a*y/this.getFilmWidth();this.projectionMatrix.makePerspective(g,g+m,h,h-p,a,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){let h=super.toJSON(a);if(h.object.fov=this.fov,h.object.zoom=this.zoom,h.object.near=this.near,h.object.far=this.far,h.object.focus=this.focus,h.object.aspect=this.aspect,this.view!==null)h.object.view=Object.assign({},this.view);return h.object.filmGauge=this.filmGauge,h.object.filmOffset=this.filmOffset,h}}var Ci=-90,Pi=1;class al extends ze{constructor(a,h,p){super();this.type="CubeCamera",this.renderTarget=p,this.coordinateSystem=null,this.activeMipmapLevel=0;let m=new $e(Ci,Pi,a,h);m.layers=this.layers,this.add(m);let g=new $e(Ci,Pi,a,h);g.layers=this.layers,this.add(g);let _=new $e(Ci,Pi,a,h);_.layers=this.layers,this.add(_);let y=new $e(Ci,Pi,a,h);y.layers=this.layers,this.add(y);let x=new $e(Ci,Pi,a,h);x.layers=this.layers,this.add(x);let M=new $e(Ci,Pi,a,h);M.layers=this.layers,this.add(M)}updateCoordinateSystem(){let a=this.coordinateSystem,h=this.children.concat(),[p,m,g,_,y,x]=h;for(let M of h)this.remove(M);if(a===2000)p.up.set(0,1,0),p.lookAt(1,0,0),m.up.set(0,1,0),m.lookAt(-1,0,0),g.up.set(0,0,-1),g.lookAt(0,1,0),_.up.set(0,0,1),_.lookAt(0,-1,0),y.up.set(0,1,0),y.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(a===2001)p.up.set(0,-1,0),p.lookAt(-1,0,0),m.up.set(0,-1,0),m.lookAt(1,0,0),g.up.set(0,0,1),g.lookAt(0,1,0),_.up.set(0,0,-1),_.lookAt(0,-1,0),y.up.set(0,-1,0),y.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(let M of h)this.add(M),M.updateMatrixWorld()}update(a,h){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:p,activeMipmapLevel:m}=this;if(this.coordinateSystem!==a.coordinateSystem)this.coordinateSystem=a.coordinateSystem,this.updateCoordinateSystem();let[g,_,y,x,M,S]=this.children,b=a.getRenderTarget(),v=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),C=a.xr.enabled;a.xr.enabled=!1;let I=p.texture.generateMipmaps;p.texture.generateMipmaps=!1,a.setRenderTarget(p,0,m),a.render(h,g),a.setRenderTarget(p,1,m),a.render(h,_),a.setRenderTarget(p,2,m),a.render(h,y),a.setRenderTarget(p,3,m),a.render(h,x),a.setRenderTarget(p,4,m),a.render(h,M),p.texture.generateMipmaps=I,a.setRenderTarget(p,5,m),a.render(h,S),a.setRenderTarget(b,v,w),a.xr.enabled=C,p.texture.needsPMREMUpdate=!0}}class pa extends qe{constructor(a,h,p,m,g,_,y,x,M,S){a=a!==void 0?a:[],h=h!==void 0?h:301;super(a,h,p,m,g,_,y,x,M,S);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(a){this.image=a}}class ol extends Zn{constructor(a=1,h={}){super(a,a,h);this.isWebGLCubeRenderTarget=!0;let p={width:a,height:a,depth:1},m=[p,p,p,p,p,p];this.texture=new pa(m,h.mapping,h.wrapS,h.wrapT,h.magFilter,h.minFilter,h.format,h.type,h.anisotropy,h.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=h.generateMipmaps!==void 0?h.generateMipmaps:!1,this.texture.minFilter=h.minFilter!==void 0?h.minFilter:1006}fromEquirectangularTexture(a,h){this.texture.type=h.type,this.texture.colorSpace=h.colorSpace,this.texture.generateMipmaps=h.generateMipmaps,this.texture.minFilter=h.minFilter,this.texture.magFilter=h.magFilter;let p={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},m=new We(5,5,5),g=new Nn({name:"CubemapFromEquirect",uniforms:Bi(p.uniforms),vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,side:1,blending:0});g.uniforms.tEquirect.value=h;let _=new Qt(m,g),y=h.minFilter;if(h.minFilter===1008)h.minFilter=1006;return new al(1,10,this).update(a,_),h.minFilter=y,_.geometry.dispose(),_.material.dispose(),this}clear(a,h,p,m){let g=a.getRenderTarget();for(let _=0;_<6;_++)a.setRenderTarget(this,_),a.clear(h,p,m);a.setRenderTarget(g)}}var Hr=new X,Nc=new X,Fc=new ce;class ln{constructor(a=new X(1,0,0),h=0){this.isPlane=!0,this.normal=a,this.constant=h}set(a,h){return this.normal.copy(a),this.constant=h,this}setComponents(a,h,p,m){return this.normal.set(a,h,p),this.constant=m,this}setFromNormalAndCoplanarPoint(a,h){return this.normal.copy(a),this.constant=-h.dot(this.normal),this}setFromCoplanarPoints(a,h,p){let m=Hr.subVectors(p,h).cross(Nc.subVectors(a,h)).normalize();return this.setFromNormalAndCoplanarPoint(m,a),this}copy(a){return this.normal.copy(a.normal),this.constant=a.constant,this}normalize(){let a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(a){return this.normal.dot(a)+this.constant}distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius}projectPoint(a,h){return h.copy(a).addScaledVector(this.normal,-this.distanceToPoint(a))}intersectLine(a,h){let p=a.delta(Hr),m=this.normal.dot(p);if(m===0){if(this.distanceToPoint(a.start)===0)return h.copy(a.start);return null}let g=-(a.start.dot(this.normal)+this.constant)/m;if(g<0||g>1)return null;return h.copy(a.start).addScaledVector(p,g)}intersectsLine(a){let h=this.distanceToPoint(a.start),p=this.distanceToPoint(a.end);return h<0&&p>0||p<0&&h>0}intersectsBox(a){return a.intersectsPlane(this)}intersectsSphere(a){return a.intersectsPlane(this)}coplanarPoint(a){return a.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(a,h){let p=h||Fc.getNormalMatrix(a),m=this.coplanarPoint(Hr).applyMatrix4(a),g=this.normal.applyMatrix3(p).normalize();return this.constant=-m.dot(g),this}translate(a){return this.constant-=a.dot(this.normal),this}equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant}clone(){return new this.constructor().copy(this)}}var ai=new fi,Gs=new X;class or{constructor(a=new ln,h=new ln,p=new ln,m=new ln,g=new ln,_=new ln){this.planes=[a,h,p,m,g,_]}set(a,h,p,m,g,_){let y=this.planes;return y[0].copy(a),y[1].copy(h),y[2].copy(p),y[3].copy(m),y[4].copy(g),y[5].copy(_),this}copy(a){let h=this.planes;for(let p=0;p<6;p++)h[p].copy(a.planes[p]);return this}setFromProjectionMatrix(a,h=2000){let p=this.planes,m=a.elements,g=m[0],_=m[1],y=m[2],x=m[3],M=m[4],S=m[5],b=m[6],v=m[7],w=m[8],C=m[9],I=m[10],D=m[11],A=m[12],R=m[13],W=m[14],F=m[15];if(p[0].setComponents(x-g,v-M,D-w,F-A).normalize(),p[1].setComponents(x+g,v+M,D+w,F+A).normalize(),p[2].setComponents(x+_,v+S,D+C,F+R).normalize(),p[3].setComponents(x-_,v-S,D-C,F-R).normalize(),p[4].setComponents(x-y,v-b,D-I,F-W).normalize(),h===2000)p[5].setComponents(x+y,v+b,D+I,F+W).normalize();else if(h===2001)p[5].setComponents(y,b,I,W).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+h);return this}intersectsObject(a){if(a.boundingSphere!==void 0){if(a.boundingSphere===null)a.computeBoundingSphere();ai.copy(a.boundingSphere).applyMatrix4(a.matrixWorld)}else{let h=a.geometry;if(h.boundingSphere===null)h.computeBoundingSphere();ai.copy(h.boundingSphere).applyMatrix4(a.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(a){return ai.center.set(0,0,0),ai.radius=0.7071067811865476,ai.applyMatrix4(a.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(a){let h=this.planes,p=a.center,m=-a.radius;for(let g=0;g<6;g++)if(h[g].distanceToPoint(p)<m)return!1;return!0}intersectsBox(a){let h=this.planes;for(let p=0;p<6;p++){let m=h[p];if(Gs.x=m.normal.x>0?a.max.x:a.min.x,Gs.y=m.normal.y>0?a.max.y:a.min.y,Gs.z=m.normal.z>0?a.max.z:a.min.z,m.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(a){let h=this.planes;for(let p=0;p<6;p++)if(h[p].distanceToPoint(a)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ll(){let a=null,h=!1,p=null,m=null;function g(_,y){p(_,y),m=a.requestAnimationFrame(g)}return{start:function(){if(h===!0)return;if(p===null)return;m=a.requestAnimationFrame(g),h=!0},stop:function(){a.cancelAnimationFrame(m),h=!1},setAnimationLoop:function(_){p=_},setContext:function(_){a=_}}}function Oc(a){let h=new WeakMap;function p(x,M){let{array:S,usage:b}=x,v=S.byteLength,w=a.createBuffer();a.bindBuffer(M,w),a.bufferData(M,S,b),x.onUploadCallback();let C;if(S instanceof Float32Array)C=a.FLOAT;else if(S instanceof Uint16Array)if(x.isFloat16BufferAttribute)C=a.HALF_FLOAT;else C=a.UNSIGNED_SHORT;else if(S instanceof Int16Array)C=a.SHORT;else if(S instanceof Uint32Array)C=a.UNSIGNED_INT;else if(S instanceof Int32Array)C=a.INT;else if(S instanceof Int8Array)C=a.BYTE;else if(S instanceof Uint8Array)C=a.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)C=a.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:w,type:C,bytesPerElement:S.BYTES_PER_ELEMENT,version:x.version,size:v}}function m(x,M,S){let{array:b,updateRanges:v}=M;if(a.bindBuffer(S,x),v.length===0)a.bufferSubData(S,0,b);else{v.sort((C,I)=>C.start-I.start);let w=0;for(let C=1;C<v.length;C++){let I=v[w],D=v[C];if(D.start<=I.start+I.count+1)I.count=Math.max(I.count,D.start+D.count-I.start);else++w,v[w]=D}v.length=w+1;for(let C=0,I=v.length;C<I;C++){let D=v[C];a.bufferSubData(S,D.start*b.BYTES_PER_ELEMENT,b,D.start,D.count)}M.clearUpdateRanges()}M.onUploadCallback()}function g(x){if(x.isInterleavedBufferAttribute)x=x.data;return h.get(x)}function _(x){if(x.isInterleavedBufferAttribute)x=x.data;let M=h.get(x);if(M)a.deleteBuffer(M.buffer),h.delete(x)}function y(x,M){if(x.isInterleavedBufferAttribute)x=x.data;if(x.isGLBufferAttribute){let b=h.get(x);if(!b||b.version<x.version)h.set(x,{buffer:x.buffer,type:x.type,bytesPerElement:x.elementSize,version:x.version});return}let S=h.get(x);if(S===void 0)h.set(x,p(x,M));else if(S.version<x.version){if(S.size!==x.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");m(S.buffer,x,M),S.version=x.version}}return{get:g,remove:_,update:y}}class Kn extends Ge{constructor(a=1,h=1,p=1,m=1){super();this.type="PlaneGeometry",this.parameters={width:a,height:h,widthSegments:p,heightSegments:m};let g=a/2,_=h/2,y=Math.floor(p),x=Math.floor(m),M=y+1,S=x+1,b=a/y,v=h/x,w=[],C=[],I=[],D=[];for(let A=0;A<S;A++){let R=A*v-_;for(let W=0;W<M;W++){let F=W*b-g;C.push(F,-R,0),I.push(0,0,1),D.push(W/y),D.push(1-A/x)}}for(let A=0;A<x;A++)for(let R=0;R<y;R++){let W=R+M*A,F=R+M*(A+1),H=R+1+M*(A+1),it=R+1+M*A;w.push(W,F,it),w.push(F,H,it)}this.setIndex(w),this.setAttribute("position",new Me(C,3)),this.setAttribute("normal",new Me(I,3)),this.setAttribute("uv",new Me(D,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new Kn(a.width,a.height,a.widthSegments,a.heightSegments)}}var Bc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zc=`#ifdef USE_ALPHAHASH
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
#endif`,Hc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vc=`#ifdef USE_AOMAP
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
#endif`,Xc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qc=`#ifdef USE_BATCHING
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
#endif`,Yc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$c=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kc=`#ifdef USE_IRIDESCENCE
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
#endif`,jc=`#ifdef USE_BUMPMAP
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
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oh=`#define PI 3.141592653589793
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
} // validated`,lh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ch=`vec3 transformedNormal = objectNormal;
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
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",mh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,yh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Th=`#ifdef USE_GRADIENTMAP
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
}`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ch=`uniform bool receiveShadow;
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
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Ih=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nh=`PhysicalMaterial material;
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
#endif`,Fh=`struct PhysicalMaterial {
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
}`,Oh=`
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
#endif`;var Bh=`#if defined( RE_IndirectDiffuse )
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yh=`#if defined( USE_POINTS_UV )
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
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$h=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qh=`#ifdef USE_MORPHTARGETS
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
#endif`,tu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,au=`#ifdef USE_NORMALMAP
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
#endif`,ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,du=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Su=`float getShadowMask() {
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
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bu=`#ifdef USE_SKINNING
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
#endif`,Tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wu=`#ifdef USE_SKINNING
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
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iu=`#ifdef USE_TRANSMISSION
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
#endif`,Du=`#ifdef USE_TRANSMISSION
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
#endif`,Lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bu=`uniform sampler2D t2D;
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
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`#include <common>
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
}`,Vu=`#if DEPTH_PACKING == 3200
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
}`,Xu=`#define DISTANCE
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
}`,qu=`#define DISTANCE
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
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`uniform float scale;
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
}`,$u=`uniform vec3 diffuse;
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
}`,Ku=`#include <common>
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
}`,ju=`uniform vec3 diffuse;
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
}`,Qu=`#define LAMBERT
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
}`,td=`#define LAMBERT
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
}`,ed=`#define MATCAP
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
}`,nd=`#define MATCAP
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
}`,id=`#define NORMAL
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
}`,sd=`#define NORMAL
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
}`,rd=`#define PHONG
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
}`,ad=`#define PHONG
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
}`,od=`#define STANDARD
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
}`,ld=`#define STANDARD
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
}`,cd=`#define TOON
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
}`,hd=`#define TOON
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
}`,ud=`uniform float size;
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
}`,dd=`uniform vec3 diffuse;
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
}`,fd=`#include <common>
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
}`,pd=`uniform vec3 color;
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
}`,md=`uniform float rotation;
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
}`,gd=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Bc,alphahash_pars_fragment:zc,alphamap_fragment:Hc,alphamap_pars_fragment:kc,alphatest_fragment:Gc,alphatest_pars_fragment:Wc,aomap_fragment:Vc,aomap_pars_fragment:Xc,batching_pars_vertex:qc,batching_vertex:Yc,begin_vertex:Zc,beginnormal_vertex:Jc,bsdfs:$c,iridescence_fragment:Kc,bumpmap_pars_fragment:jc,clipping_planes_fragment:Qc,clipping_planes_pars_fragment:th,clipping_planes_pars_vertex:eh,clipping_planes_vertex:nh,color_fragment:ih,color_pars_fragment:sh,color_pars_vertex:rh,color_vertex:ah,common:oh,cube_uv_reflection_fragment:lh,defaultnormal_vertex:ch,displacementmap_pars_vertex:hh,displacementmap_vertex:uh,emissivemap_fragment:dh,emissivemap_pars_fragment:fh,colorspace_fragment:ph,colorspace_pars_fragment:mh,envmap_fragment:gh,envmap_common_pars_fragment:_h,envmap_pars_fragment:xh,envmap_pars_vertex:yh,envmap_physical_pars_fragment:Ph,envmap_vertex:vh,fog_vertex:Mh,fog_pars_vertex:Sh,fog_fragment:Eh,fog_pars_fragment:bh,gradientmap_pars_fragment:Th,lightmap_pars_fragment:wh,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:Rh,lights_pars_begin:Ch,lights_toon_fragment:Ih,lights_toon_pars_fragment:Dh,lights_phong_fragment:Lh,lights_phong_pars_fragment:Uh,lights_physical_fragment:Nh,lights_physical_pars_fragment:Fh,lights_fragment_begin:Oh,lights_fragment_maps:Bh,lights_fragment_end:zh,logdepthbuf_fragment:Hh,logdepthbuf_pars_fragment:kh,logdepthbuf_pars_vertex:Gh,logdepthbuf_vertex:Wh,map_fragment:Vh,map_pars_fragment:Xh,map_particle_fragment:qh,map_particle_pars_fragment:Yh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Jh,morphinstance_vertex:$h,morphcolor_vertex:Kh,morphnormal_vertex:jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:tu,normal_fragment_begin:eu,normal_fragment_maps:nu,normal_pars_fragment:iu,normal_pars_vertex:su,normal_vertex:ru,normalmap_pars_fragment:au,clearcoat_normal_fragment_begin:ou,clearcoat_normal_fragment_maps:lu,clearcoat_pars_fragment:cu,iridescence_pars_fragment:hu,opaque_fragment:uu,packing:du,premultiplied_alpha_fragment:fu,project_vertex:pu,dithering_fragment:mu,dithering_pars_fragment:gu,roughnessmap_fragment:_u,roughnessmap_pars_fragment:xu,shadowmap_pars_fragment:yu,shadowmap_pars_vertex:vu,shadowmap_vertex:Mu,shadowmask_pars_fragment:Su,skinbase_vertex:Eu,skinning_pars_vertex:bu,skinning_vertex:Tu,skinnormal_vertex:wu,specularmap_fragment:Au,specularmap_pars_fragment:Ru,tonemapping_fragment:Cu,tonemapping_pars_fragment:Pu,transmission_fragment:Iu,transmission_pars_fragment:Du,uv_pars_fragment:Lu,uv_pars_vertex:Uu,uv_vertex:Nu,worldpos_vertex:Fu,background_vert:Ou,background_frag:Bu,backgroundCube_vert:zu,backgroundCube_frag:Hu,cube_vert:ku,cube_frag:Gu,depth_vert:Wu,depth_frag:Vu,distanceRGBA_vert:Xu,distanceRGBA_frag:qu,equirect_vert:Yu,equirect_frag:Zu,linedashed_vert:Ju,linedashed_frag:$u,meshbasic_vert:Ku,meshbasic_frag:ju,meshlambert_vert:Qu,meshlambert_frag:td,meshmatcap_vert:ed,meshmatcap_frag:nd,meshnormal_vert:id,meshnormal_frag:sd,meshphong_vert:rd,meshphong_frag:ad,meshphysical_vert:od,meshphysical_frag:ld,meshtoon_vert:cd,meshtoon_frag:hd,points_vert:ud,points_frag:dd,shadow_vert:fd,shadow_frag:pd,sprite_vert:md,sprite_frag:gd},It={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new St(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},En={basic:{uniforms:Je([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Je([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new he(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Je([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Je([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Je([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new he(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Je([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Je([It.points,It.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Je([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Je([It.common,It.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Je([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Je([It.sprite,It.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Je([It.common,It.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Je([It.lights,It.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};En.physical={uniforms:Je([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Ws={r:0,b:0,g:0},oi=new bn,_d=new ye;function xd(a,h,p,m,g,_,y){let x=new he(0),M=_===!0?0:1,S,b,v=null,w=0,C=null;function I(W){let F=W.isScene===!0?W.background:null;if(F&&F.isTexture)F=(W.backgroundBlurriness>0?p:h).get(F);return F}function D(W){let F=!1,H=I(W);if(H===null)R(x,M);else if(H&&H.isColor)R(H,1),F=!0;let it=a.xr.getEnvironmentBlendMode();if(it==="additive")m.buffers.color.setClear(0,0,0,1,y);else if(it==="alpha-blend")m.buffers.color.setClear(0,0,0,0,y);if(a.autoClear||F)m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil)}function A(W,F){let H=I(F);if(H&&(H.isCubeTexture||H.mapping===306)){if(b===void 0)b=new Qt(new We(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Bi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),b.geometry.deleteAttribute("normal"),b.geometry.deleteAttribute("uv"),b.onBeforeRender=function(it,q,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),g.update(b);if(oi.copy(F.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1)oi.y*=-1,oi.z*=-1;if(b.material.uniforms.envMap.value=H,b.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,b.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,b.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,b.material.uniforms.backgroundRotation.value.setFromMatrix4(_d.makeRotationFromEuler(oi)),b.material.toneMapped=_e.getTransfer(H.colorSpace)!=="srgb",v!==H||w!==H.version||C!==a.toneMapping)b.material.needsUpdate=!0,v=H,w=H.version,C=a.toneMapping;b.layers.enableAll(),W.unshift(b,b.geometry,b.material,0,0,null)}else if(H&&H.isTexture){if(S===void 0)S=new Qt(new Kn(2,2),new Nn({name:"BackgroundMaterial",uniforms:Bi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),Object.defineProperty(S.material,"map",{get:function(){return this.uniforms.t2D.value}}),g.update(S);if(S.material.uniforms.t2D.value=H,S.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,S.material.toneMapped=_e.getTransfer(H.colorSpace)!=="srgb",H.matrixAutoUpdate===!0)H.updateMatrix();if(S.material.uniforms.uvTransform.value.copy(H.matrix),v!==H||w!==H.version||C!==a.toneMapping)S.material.needsUpdate=!0,v=H,w=H.version,C=a.toneMapping;S.layers.enableAll(),W.unshift(S,S.geometry,S.material,0,0,null)}}function R(W,F){W.getRGB(Ws,rl(a)),m.buffers.color.setClear(Ws.r,Ws.g,Ws.b,F,y)}return{getClearColor:function(){return x},setClearColor:function(W,F=1){x.set(W),M=F,R(x,M)},getClearAlpha:function(){return M},setClearAlpha:function(W){M=W,R(x,M)},render:D,addToRenderList:A}}function yd(a,h){let p=a.getParameter(a.MAX_VERTEX_ATTRIBS),m={},g=w(null),_=g,y=!1;function x(z,Q,st,ot,ct){let pt=!1,J=v(ot,st,Q);if(_!==J)_=J,S(_.object);if(pt=C(z,ot,st,ct),pt)I(z,ot,st,ct);if(ct!==null)h.update(ct,a.ELEMENT_ARRAY_BUFFER);if(pt||y){if(y=!1,H(z,Q,st,ot),ct!==null)a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.get(ct).buffer)}}function M(){return a.createVertexArray()}function S(z){return a.bindVertexArray(z)}function b(z){return a.deleteVertexArray(z)}function v(z,Q,st){let ot=st.wireframe===!0,ct=m[z.id];if(ct===void 0)ct={},m[z.id]=ct;let pt=ct[Q.id];if(pt===void 0)pt={},ct[Q.id]=pt;let J=pt[ot];if(J===void 0)J=w(M()),pt[ot]=J;return J}function w(z){let Q=[],st=[],ot=[];for(let ct=0;ct<p;ct++)Q[ct]=0,st[ct]=0,ot[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:st,attributeDivisors:ot,object:z,attributes:{},index:null}}function C(z,Q,st,ot){let ct=_.attributes,pt=Q.attributes,J=0,et=st.getAttributes();for(let Z in et)if(et[Z].location>=0){let U=ct[Z],Xt=pt[Z];if(Xt===void 0){if(Z==="instanceMatrix"&&z.instanceMatrix)Xt=z.instanceMatrix;if(Z==="instanceColor"&&z.instanceColor)Xt=z.instanceColor}if(U===void 0)return!0;if(U.attribute!==Xt)return!0;if(Xt&&U.data!==Xt.data)return!0;J++}if(_.attributesNum!==J)return!0;if(_.index!==ot)return!0;return!1}function I(z,Q,st,ot){let ct={},pt=Q.attributes,J=0,et=st.getAttributes();for(let Z in et)if(et[Z].location>=0){let U=pt[Z];if(U===void 0){if(Z==="instanceMatrix"&&z.instanceMatrix)U=z.instanceMatrix;if(Z==="instanceColor"&&z.instanceColor)U=z.instanceColor}let Xt={};if(Xt.attribute=U,U&&U.data)Xt.data=U.data;ct[Z]=Xt,J++}_.attributes=ct,_.attributesNum=J,_.index=ot}function D(){let z=_.newAttributes;for(let Q=0,st=z.length;Q<st;Q++)z[Q]=0}function A(z){R(z,0)}function R(z,Q){let st=_.newAttributes,ot=_.enabledAttributes,ct=_.attributeDivisors;if(st[z]=1,ot[z]===0)a.enableVertexAttribArray(z),ot[z]=1;if(ct[z]!==Q)a.vertexAttribDivisor(z,Q),ct[z]=Q}function W(){let z=_.newAttributes,Q=_.enabledAttributes;for(let st=0,ot=Q.length;st<ot;st++)if(Q[st]!==z[st])a.disableVertexAttribArray(st),Q[st]=0}function F(z,Q,st,ot,ct,pt,J){if(J===!0)a.vertexAttribIPointer(z,Q,st,ct,pt);else a.vertexAttribPointer(z,Q,st,ot,ct,pt)}function H(z,Q,st,ot){D();let ct=ot.attributes,pt=st.getAttributes(),J=Q.defaultAttributeValues;for(let et in pt){let Z=pt[et];if(Z.location>=0){let At=ct[et];if(At===void 0){if(et==="instanceMatrix"&&z.instanceMatrix)At=z.instanceMatrix;if(et==="instanceColor"&&z.instanceColor)At=z.instanceColor}if(At!==void 0){let U=At.normalized,Xt=At.itemSize,Jt=h.get(At);if(Jt===void 0)continue;let{buffer:dt,type:bt,bytesPerElement:qt}=Jt,Ht=bt===a.INT||bt===a.UNSIGNED_INT||At.gpuType===1013;if(At.isInterleavedBufferAttribute){let Rt=At.data,te=Rt.stride,ae=At.offset;if(Rt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Z.locationSize;Kt++)R(Z.location+Kt,Rt.meshPerAttribute);if(z.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0)ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count}else for(let Kt=0;Kt<Z.locationSize;Kt++)A(Z.location+Kt);a.bindBuffer(a.ARRAY_BUFFER,dt);for(let Kt=0;Kt<Z.locationSize;Kt++)F(Z.location+Kt,Xt/Z.locationSize,bt,U,te*qt,(ae+Xt/Z.locationSize*Kt)*qt,Ht)}else{if(At.isInstancedBufferAttribute){for(let Rt=0;Rt<Z.locationSize;Rt++)R(Z.location+Rt,At.meshPerAttribute);if(z.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0)ot._maxInstanceCount=At.meshPerAttribute*At.count}else for(let Rt=0;Rt<Z.locationSize;Rt++)A(Z.location+Rt);a.bindBuffer(a.ARRAY_BUFFER,dt);for(let Rt=0;Rt<Z.locationSize;Rt++)F(Z.location+Rt,Xt/Z.locationSize,bt,U,Xt*qt,Xt/Z.locationSize*Rt*qt,Ht)}}else if(J!==void 0){let U=J[et];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(Z.location,U);break;case 3:a.vertexAttrib3fv(Z.location,U);break;case 4:a.vertexAttrib4fv(Z.location,U);break;default:a.vertexAttrib1fv(Z.location,U)}}}}W()}function it(){lt();for(let z in m){let Q=m[z];for(let st in Q){let ot=Q[st];for(let ct in ot)b(ot[ct].object),delete ot[ct];delete Q[st]}delete m[z]}}function q(z){if(m[z.id]===void 0)return;let Q=m[z.id];for(let st in Q){let ot=Q[st];for(let ct in ot)b(ot[ct].object),delete ot[ct];delete Q[st]}delete m[z.id]}function Y(z){for(let Q in m){let st=m[Q];if(st[z.id]===void 0)continue;let ot=st[z.id];for(let ct in ot)b(ot[ct].object),delete ot[ct];delete st[z.id]}}function lt(){if(B(),y=!0,_===g)return;_=g,S(_.object)}function B(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:x,reset:lt,resetDefaultState:B,dispose:it,releaseStatesOfGeometry:q,releaseStatesOfProgram:Y,initAttributes:D,enableAttribute:A,disableUnusedAttributes:W}}function vd(a,h,p){let m;function g(S){m=S}function _(S,b){a.drawArrays(m,S,b),p.update(b,m,1)}function y(S,b,v){if(v===0)return;a.drawArraysInstanced(m,S,b,v),p.update(b,m,v)}function x(S,b,v){if(v===0)return;h.get("WEBGL_multi_draw").multiDrawArraysWEBGL(m,S,0,b,0,v);let C=0;for(let I=0;I<v;I++)C+=b[I];p.update(C,m,1)}function M(S,b,v,w){if(v===0)return;let C=h.get("WEBGL_multi_draw");if(C===null)for(let I=0;I<S.length;I++)y(S[I],b[I],w[I]);else{C.multiDrawArraysInstancedWEBGL(m,S,0,b,0,w,0,v);let I=0;for(let D=0;D<v;D++)I+=b[D]*w[D];p.update(I,m,1)}}this.setMode=g,this.render=_,this.renderInstances=y,this.renderMultiDraw=x,this.renderMultiDrawInstances=M}function Md(a,h,p,m){let g;function _(){if(g!==void 0)return g;if(h.has("EXT_texture_filter_anisotropic")===!0){let Y=h.get("EXT_texture_filter_anisotropic");g=a.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function y(Y){if(Y!==1023&&m.convert(Y)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function x(Y){let lt=Y===1016&&(h.has("EXT_color_buffer_half_float")||h.has("EXT_color_buffer_float"));if(Y!==1009&&m.convert(Y)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&Y!==1015&&!lt)return!1;return!0}function M(Y){if(Y==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";Y="mediump"}if(Y==="mediump"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let S=p.precision!==void 0?p.precision:"highp",b=M(S);if(b!==S)console.warn("THREE.WebGLRenderer:",S,"not supported, using",b,"instead."),S=b;let v=p.logarithmicDepthBuffer===!0,w=p.reverseDepthBuffer===!0&&h.has("EXT_clip_control"),C=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),I=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=a.getParameter(a.MAX_TEXTURE_SIZE),A=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),R=a.getParameter(a.MAX_VERTEX_ATTRIBS),W=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),F=a.getParameter(a.MAX_VARYING_VECTORS),H=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),it=I>0,q=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:_,getMaxPrecision:M,textureFormatReadable:y,textureTypeReadable:x,precision:S,logarithmicDepthBuffer:v,reverseDepthBuffer:w,maxTextures:C,maxVertexTextures:I,maxTextureSize:D,maxCubemapSize:A,maxAttributes:R,maxVertexUniforms:W,maxVaryings:F,maxFragmentUniforms:H,vertexTextures:it,maxSamples:q}}function Sd(a){let h=this,p=null,m=0,g=!1,_=!1,y=new ln,x=new ce,M={value:null,needsUpdate:!1};this.uniform=M,this.numPlanes=0,this.numIntersection=0,this.init=function(v,w){let C=v.length!==0||w||m!==0||g;return g=w,m=v.length,C},this.beginShadows=function(){_=!0,b(null)},this.endShadows=function(){_=!1},this.setGlobalState=function(v,w){p=b(v,w,0)},this.setState=function(v,w,C){let{clippingPlanes:I,clipIntersection:D,clipShadows:A}=v,R=a.get(v);if(!g||I===null||I.length===0||_&&!A)if(_)b(null);else S();else{let W=_?0:m,F=W*4,H=R.clippingState||null;M.value=H,H=b(I,w,F,C);for(let it=0;it!==F;++it)H[it]=p[it];R.clippingState=H,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=W}};function S(){if(M.value!==p)M.value=p,M.needsUpdate=m>0;h.numPlanes=m,h.numIntersection=0}function b(v,w,C,I){let D=v!==null?v.length:0,A=null;if(D!==0){if(A=M.value,I!==!0||A===null){let R=C+D*4,W=w.matrixWorldInverse;if(x.getNormalMatrix(W),A===null||A.length<R)A=new Float32Array(R);for(let F=0,H=C;F!==D;++F,H+=4)y.copy(v[F]).applyMatrix4(W,x),y.normal.toArray(A,H),A[H+3]=y.constant}M.value=A,M.needsUpdate=!0}return h.numPlanes=D,h.numIntersection=0,A}}function Ed(a){let h=new WeakMap;function p(y,x){if(x===303)y.mapping=301;else if(x===304)y.mapping=302;return y}function m(y){if(y&&y.isTexture){let x=y.mapping;if(x===303||x===304)if(h.has(y)){let M=h.get(y).texture;return p(M,y.mapping)}else{let M=y.image;if(M&&M.height>0){let S=new ol(M.height);return S.fromEquirectangularTexture(a,y),h.set(y,S),y.addEventListener("dispose",g),p(S.texture,y.mapping)}else return null}}return y}function g(y){let x=y.target;x.removeEventListener("dispose",g);let M=h.get(x);if(M!==void 0)h.delete(x),M.dispose()}function _(){h=new WeakMap}return{get:m,dispose:_}}class ms extends fa{constructor(a=-1,h=1,p=1,m=-1,g=0.1,_=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=a,this.right=h,this.top=p,this.bottom=m,this.near=g,this.far=_,this.updateProjectionMatrix()}copy(a,h){return super.copy(a,h),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this.view=a.view===null?null:Object.assign({},a.view),this}setViewOffset(a,h,p,m,g,_){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let a=(this.right-this.left)/(2*this.zoom),h=(this.top-this.bottom)/(2*this.zoom),p=(this.right+this.left)/2,m=(this.top+this.bottom)/2,g=p-a,_=p+a,y=m+h,x=m-h;if(this.view!==null&&this.view.enabled){let M=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;g+=M*this.view.offsetX,_=g+M*this.view.width,y-=S*this.view.offsetY,x=y-S*this.view.height}this.projectionMatrix.makeOrthographic(g,_,y,x,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){let h=super.toJSON(a);if(h.object.zoom=this.zoom,h.object.left=this.left,h.object.right=this.right,h.object.top=this.top,h.object.bottom=this.bottom,h.object.near=this.near,h.object.far=this.far,this.view!==null)h.object.view=Object.assign({},this.view);return h}}var Ui=4,ho=[0.125,0.215,0.35,0.446,0.526,0.582],hi=20,kr=new ms,uo=new he,Gr=null,Wr=0,Vr=0,Xr=!1,ci=(1+Math.sqrt(5))/2,Ii=1/ci,fo=[new X(-ci,Ii,0),new X(ci,Ii,0),new X(-Ii,0,ci),new X(Ii,0,ci),new X(0,ci,-Ii),new X(0,ci,Ii),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class cs{constructor(a){this._renderer=a,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(a,h=0,p=0.1,m=100){Gr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let g=this._allocateTargets();if(g.depthBuffer=!0,this._sceneToCubeUV(a,p,m,g),h>0)this._blur(g,0,0,h);return this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(a,h=null){return this._fromTexture(a,h)}fromCubemap(a,h=null){return this._fromTexture(a,h)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(a){this._lodMax=Math.floor(Math.log2(a)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let a=0;a<this._lodPlanes.length;a++)this._lodPlanes[a].dispose()}_cleanup(a){this._renderer.setRenderTarget(Gr,Wr,Vr),this._renderer.xr.enabled=Xr,a.scissorTest=!1,Vs(a,0,0,a.width,a.height)}_fromTexture(a,h){if(a.mapping===301||a.mapping===302)this._setSize(a.image.length===0?16:a.image[0].width||a.image[0].image.width);else this._setSize(a.image.width/4);Gr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let p=h||this._allocateTargets();return this._textureToCubeUV(a,p),this._applyPMREM(p),this._cleanup(p),p}_allocateTargets(){let a=3*Math.max(this._cubeSize,112),h=4*this._cubeSize,p={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},m=po(a,h,p);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==a||this._pingPongRenderTarget.height!==h){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=po(a,h,p);let{_lodMax:g}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bd(g)),this._blurMaterial=Td(g,a,h)}return m}_compileMaterial(a){let h=new Qt(this._lodPlanes[0],a);this._renderer.compile(h,kr)}_sceneToCubeUV(a,h,p,m){let y=new $e(90,1,h,p),x=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],S=this._renderer,{autoClear:b,toneMapping:v}=S;S.getClearColor(uo),S.toneMapping=0,S.autoClear=!1;let w=new ps({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),C=new Qt(new We,w),I=!1,D=a.background;if(D){if(D.isColor)w.color.copy(D),a.background=null,I=!0}else w.color.copy(uo),I=!0;for(let A=0;A<6;A++){let R=A%3;if(R===0)y.up.set(0,x[A],0),y.lookAt(M[A],0,0);else if(R===1)y.up.set(0,0,x[A]),y.lookAt(0,M[A],0);else y.up.set(0,x[A],0),y.lookAt(0,0,M[A]);let W=this._cubeSize;if(Vs(m,R*W,A>2?W:0,W,W),S.setRenderTarget(m),I)S.render(C,y);S.render(a,y)}C.geometry.dispose(),C.material.dispose(),S.toneMapping=v,S.autoClear=b,a.background=D}_textureToCubeUV(a,h){let p=this._renderer,m=a.mapping===301||a.mapping===302;if(m){if(this._cubemapMaterial===null)this._cubemapMaterial=go();this._cubemapMaterial.uniforms.flipEnvMap.value=a.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=mo();let g=m?this._cubemapMaterial:this._equirectMaterial,_=new Qt(this._lodPlanes[0],g),y=g.uniforms;y.envMap.value=a;let x=this._cubeSize;Vs(h,0,0,3*x,2*x),p.setRenderTarget(h),p.render(_,kr)}_applyPMREM(a){let h=this._renderer,p=h.autoClear;h.autoClear=!1;let m=this._lodPlanes.length;for(let g=1;g<m;g++){let _=Math.sqrt(this._sigmas[g]*this._sigmas[g]-this._sigmas[g-1]*this._sigmas[g-1]),y=fo[(m-g-1)%fo.length];this._blur(a,g-1,g,_,y)}h.autoClear=p}_blur(a,h,p,m,g){let _=this._pingPongRenderTarget;this._halfBlur(a,_,h,p,m,"latitudinal",g),this._halfBlur(_,a,p,p,m,"longitudinal",g)}_halfBlur(a,h,p,m,g,_,y){let x=this._renderer,M=this._blurMaterial;if(_!=="latitudinal"&&_!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let S=3,b=new Qt(this._lodPlanes[m],M),v=M.uniforms,w=this._sizeLods[p]-1,C=isFinite(g)?Math.PI/(2*w):2*Math.PI/(2*hi-1),I=g/C,D=isFinite(g)?1+Math.floor(S*I):hi;if(D>hi)console.warn(`sigmaRadians, ${g}, is too large and will clip, as it requested ${D} samples when the maximum is set to ${hi}`);let A=[],R=0;for(let q=0;q<hi;++q){let Y=q/I,lt=Math.exp(-Y*Y/2);if(A.push(lt),q===0)R+=lt;else if(q<D)R+=2*lt}for(let q=0;q<A.length;q++)A[q]=A[q]/R;if(v.envMap.value=a.texture,v.samples.value=D,v.weights.value=A,v.latitudinal.value=_==="latitudinal",y)v.poleAxis.value=y;let{_lodMax:W}=this;v.dTheta.value=C,v.mipInt.value=W-p;let F=this._sizeLods[m],H=3*F*(m>W-Ui?m-W+Ui:0),it=4*(this._cubeSize-F);Vs(h,H,it,3*F,2*F),x.setRenderTarget(h),x.render(b,kr)}}function bd(a){let h=[],p=[],m=[],g=a,_=a-Ui+1+ho.length;for(let y=0;y<_;y++){let x=Math.pow(2,g);p.push(x);let M=1/x;if(y>a-Ui)M=ho[y-a+Ui-1];else if(y===0)M=0;m.push(M);let S=1/(x-2),b=-S,v=1+S,w=[b,b,v,b,v,v,b,b,v,v,b,v],C=6,I=6,D=3,A=2,R=1,W=new Float32Array(D*I*C),F=new Float32Array(A*I*C),H=new Float32Array(R*I*C);for(let q=0;q<C;q++){let Y=q%3*2/3-1,lt=q>2?0:-1,B=[Y,lt,0,Y+0.6666666666666666,lt,0,Y+0.6666666666666666,lt+1,0,Y,lt,0,Y+0.6666666666666666,lt+1,0,Y,lt+1,0];W.set(B,D*I*q),F.set(w,A*I*q);let z=[q,q,q,q,q,q];H.set(z,R*I*q)}let it=new Ge;if(it.setAttribute("position",new hn(W,D)),it.setAttribute("uv",new hn(F,A)),it.setAttribute("faceIndex",new hn(H,R)),h.push(it),g>Ui)g--}return{lodPlanes:h,sizeLods:p,sigmas:m}}function po(a,h,p){let m=new Zn(a,h,p);return m.texture.mapping=306,m.texture.name="PMREM.cubeUv",m.scissorTest=!0,m}function Vs(a,h,p,m,g){a.viewport.set(h,p,m,g),a.scissor.set(h,p,m,g)}function Td(a,h,p){let m=new Float32Array(hi),g=new X(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/h,CUBEUV_TEXEL_HEIGHT:1/p,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:m},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:g}},vertexShader:ma(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function mo(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function go(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function wd(a){let h=new WeakMap,p=null;function m(x){if(x&&x.isTexture){let M=x.mapping,S=M===303||M===304,b=M===301||M===302;if(S||b){let v=h.get(x),w=v!==void 0?v.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==w){if(p===null)p=new cs(a);return v=S?p.fromEquirectangular(x,v):p.fromCubemap(x,v),v.texture.pmremVersion=x.pmremVersion,h.set(x,v),v.texture}else if(v!==void 0)return v.texture;else{let C=x.image;if(S&&C&&C.height>0||b&&C&&g(C)){if(p===null)p=new cs(a);return v=S?p.fromEquirectangular(x):p.fromCubemap(x),v.texture.pmremVersion=x.pmremVersion,h.set(x,v),x.addEventListener("dispose",_),v.texture}else return null}}}return x}function g(x){let M=0,S=6;for(let b=0;b<S;b++)if(x[b]!==void 0)M++;return M===S}function _(x){let M=x.target;M.removeEventListener("dispose",_);let S=h.get(M);if(S!==void 0)h.delete(M),S.dispose()}function y(){if(h=new WeakMap,p!==null)p.dispose(),p=null}return{get:m,dispose:y}}function Ad(a){let h={};function p(m){if(h[m]!==void 0)return h[m];let g;switch(m){case"WEBGL_depth_texture":g=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":g=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":g=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":g=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:g=a.getExtension(m)}return h[m]=g,g}return{has:function(m){return p(m)!==null},init:function(){p("EXT_color_buffer_float"),p("WEBGL_clip_cull_distance"),p("OES_texture_float_linear"),p("EXT_color_buffer_half_float"),p("WEBGL_multisampled_render_to_texture"),p("WEBGL_render_shared_exponent")},get:function(m){let g=p(m);if(g===null)ns("THREE.WebGLRenderer: "+m+" extension not supported.");return g}}}function Rd(a,h,p,m){let g={},_=new WeakMap;function y(v){let w=v.target;if(w.index!==null)h.remove(w.index);for(let I in w.attributes)h.remove(w.attributes[I]);for(let I in w.morphAttributes){let D=w.morphAttributes[I];for(let A=0,R=D.length;A<R;A++)h.remove(D[A])}w.removeEventListener("dispose",y),delete g[w.id];let C=_.get(w);if(C)h.remove(C),_.delete(w);if(m.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0)delete w._maxInstanceCount;p.memory.geometries--}function x(v,w){if(g[w.id]===!0)return w;return w.addEventListener("dispose",y),g[w.id]=!0,p.memory.geometries++,w}function M(v){let w=v.attributes;for(let I in w)h.update(w[I],a.ARRAY_BUFFER);let C=v.morphAttributes;for(let I in C){let D=C[I];for(let A=0,R=D.length;A<R;A++)h.update(D[A],a.ARRAY_BUFFER)}}function S(v){let w=[],C=v.index,I=v.attributes.position,D=0;if(C!==null){let W=C.array;D=C.version;for(let F=0,H=W.length;F<H;F+=3){let it=W[F+0],q=W[F+1],Y=W[F+2];w.push(it,q,q,Y,Y,it)}}else if(I!==void 0){let W=I.array;D=I.version;for(let F=0,H=W.length/3-1;F<H;F+=3){let it=F+0,q=F+1,Y=F+2;w.push(it,q,q,Y,Y,it)}}else return;let A=new((tl(w))?da:ua)(w,1);A.version=D;let R=_.get(v);if(R)h.remove(R);_.set(v,A)}function b(v){let w=_.get(v);if(w){let C=v.index;if(C!==null){if(w.version<C.version)S(v)}}else S(v);return _.get(v)}return{get:x,update:M,getWireframeAttribute:b}}function Cd(a,h,p){let m;function g(w){m=w}let _,y;function x(w){_=w.type,y=w.bytesPerElement}function M(w,C){a.drawElements(m,C,_,w*y),p.update(C,m,1)}function S(w,C,I){if(I===0)return;a.drawElementsInstanced(m,C,_,w*y,I),p.update(C,m,I)}function b(w,C,I){if(I===0)return;h.get("WEBGL_multi_draw").multiDrawElementsWEBGL(m,C,0,_,w,0,I);let A=0;for(let R=0;R<I;R++)A+=C[R];p.update(A,m,1)}function v(w,C,I,D){if(I===0)return;let A=h.get("WEBGL_multi_draw");if(A===null)for(let R=0;R<w.length;R++)S(w[R]/y,C[R],D[R]);else{A.multiDrawElementsInstancedWEBGL(m,C,0,_,w,0,D,0,I);let R=0;for(let W=0;W<I;W++)R+=C[W]*D[W];p.update(R,m,1)}}this.setMode=g,this.setIndex=x,this.render=M,this.renderInstances=S,this.renderMultiDraw=b,this.renderMultiDrawInstances=v}function Pd(a){let h={geometries:0,textures:0},p={frame:0,calls:0,triangles:0,points:0,lines:0};function m(_,y,x){switch(p.calls++,y){case a.TRIANGLES:p.triangles+=x*(_/3);break;case a.LINES:p.lines+=x*(_/2);break;case a.LINE_STRIP:p.lines+=x*(_-1);break;case a.LINE_LOOP:p.lines+=x*_;break;case a.POINTS:p.points+=x*_;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",y);break}}function g(){p.calls=0,p.triangles=0,p.points=0,p.lines=0}return{memory:h,render:p,programs:null,autoReset:!0,reset:g,update:m}}function Id(a,h,p){let m=new WeakMap,g=new be;function _(y,x,M){let S=y.morphTargetInfluences,b=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,v=b!==void 0?b.length:0,w=m.get(x);if(w===void 0||w.count!==v){let B=function(){Y.dispose(),m.delete(x),x.removeEventListener("dispose",B)};if(w!==void 0)w.texture.dispose();let C=x.morphAttributes.position!==void 0,I=x.morphAttributes.normal!==void 0,D=x.morphAttributes.color!==void 0,A=x.morphAttributes.position||[],R=x.morphAttributes.normal||[],W=x.morphAttributes.color||[],F=0;if(C===!0)F=1;if(I===!0)F=2;if(D===!0)F=3;let H=x.attributes.position.count*F,it=1;if(H>h.maxTextureSize)it=Math.ceil(H/h.maxTextureSize),H=h.maxTextureSize;let q=new Float32Array(H*it*4*v),Y=new ha(q,H,it,v);Y.type=1015,Y.needsUpdate=!0;let lt=F*4;for(let z=0;z<v;z++){let Q=A[z],st=R[z],ot=W[z],ct=H*it*4*z;for(let pt=0;pt<Q.count;pt++){let J=pt*lt;if(C===!0)g.fromBufferAttribute(Q,pt),q[ct+J+0]=g.x,q[ct+J+1]=g.y,q[ct+J+2]=g.z,q[ct+J+3]=0;if(I===!0)g.fromBufferAttribute(st,pt),q[ct+J+4]=g.x,q[ct+J+5]=g.y,q[ct+J+6]=g.z,q[ct+J+7]=0;if(D===!0)g.fromBufferAttribute(ot,pt),q[ct+J+8]=g.x,q[ct+J+9]=g.y,q[ct+J+10]=g.z,q[ct+J+11]=ot.itemSize===4?g.w:1}}w={count:v,texture:Y,size:new St(H,it)},m.set(x,w),x.addEventListener("dispose",B)}if(y.isInstancedMesh===!0&&y.morphTexture!==null)M.getUniforms().setValue(a,"morphTexture",y.morphTexture,p);else{let C=0;for(let D=0;D<S.length;D++)C+=S[D];let I=x.morphTargetsRelative?1:1-C;M.getUniforms().setValue(a,"morphTargetBaseInfluence",I),M.getUniforms().setValue(a,"morphTargetInfluences",S)}M.getUniforms().setValue(a,"morphTargetsTexture",w.texture,p),M.getUniforms().setValue(a,"morphTargetsTextureSize",w.size)}return{update:_}}function Dd(a,h,p,m){let g=new WeakMap;function _(M){let S=m.render.frame,b=M.geometry,v=h.get(M,b);if(g.get(v)!==S)h.update(v),g.set(v,S);if(M.isInstancedMesh){if(M.hasEventListener("dispose",x)===!1)M.addEventListener("dispose",x);if(g.get(M)!==S){if(p.update(M.instanceMatrix,a.ARRAY_BUFFER),M.instanceColor!==null)p.update(M.instanceColor,a.ARRAY_BUFFER);g.set(M,S)}}if(M.isSkinnedMesh){let w=M.skeleton;if(g.get(w)!==S)w.update(),g.set(w,S)}return v}function y(){g=new WeakMap}function x(M){let S=M.target;if(S.removeEventListener("dispose",x),p.remove(S.instanceMatrix),S.instanceColor!==null)p.remove(S.instanceColor)}return{update:_,dispose:y}}class ga extends qe{constructor(a,h,p,m,g,_,y,x,M,S=1026){if(S!==1026&&S!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(p===void 0&&S===1026)p=1014;if(p===void 0&&S===1027)p=1020;super(null,m,g,_,y,x,S,p,M);this.isDepthTexture=!0,this.image={width:a,height:h},this.magFilter=y!==void 0?y:1003,this.minFilter=x!==void 0?x:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(a){return super.copy(a),this.compareFunction=a.compareFunction,this}toJSON(a){let h=super.toJSON(a);if(this.compareFunction!==null)h.compareFunction=this.compareFunction;return h}}var cl=new qe,_o=new ga(1,1),hl=new ha,ul=new il,dl=new pa,xo=[],yo=[],vo=new Float32Array(16),Mo=new Float32Array(9),So=new Float32Array(4);function Hi(a,h,p){let m=a[0];if(m<=0||m>0)return a;let g=h*p,_=xo[g];if(_===void 0)_=new Float32Array(g),xo[g]=_;if(h!==0){m.toArray(_,0);for(let y=1,x=0;y!==h;++y)x+=p,a[y].toArray(_,x)}return _}function Ne(a,h){if(a.length!==h.length)return!1;for(let p=0,m=a.length;p<m;p++)if(a[p]!==h[p])return!1;return!0}function Fe(a,h){for(let p=0,m=h.length;p<m;p++)a[p]=h[p]}function lr(a,h){let p=yo[h];if(p===void 0)p=new Int32Array(h),yo[h]=p;for(let m=0;m!==h;++m)p[m]=a.allocateTextureUnit();return p}function Ld(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1f(this.addr,h),p[0]=h}function Ud(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2f(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ne(p,h))return;a.uniform2fv(this.addr,h),Fe(p,h)}}function Nd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3f(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else if(h.r!==void 0){if(p[0]!==h.r||p[1]!==h.g||p[2]!==h.b)a.uniform3f(this.addr,h.r,h.g,h.b),p[0]=h.r,p[1]=h.g,p[2]=h.b}else{if(Ne(p,h))return;a.uniform3fv(this.addr,h),Fe(p,h)}}function Fd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4f(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ne(p,h))return;a.uniform4fv(this.addr,h),Fe(p,h)}}function Od(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ne(p,h))return;a.uniformMatrix2fv(this.addr,!1,h),Fe(p,h)}else{if(Ne(p,m))return;So.set(m),a.uniformMatrix2fv(this.addr,!1,So),Fe(p,m)}}function Bd(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ne(p,h))return;a.uniformMatrix3fv(this.addr,!1,h),Fe(p,h)}else{if(Ne(p,m))return;Mo.set(m),a.uniformMatrix3fv(this.addr,!1,Mo),Fe(p,m)}}function zd(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ne(p,h))return;a.uniformMatrix4fv(this.addr,!1,h),Fe(p,h)}else{if(Ne(p,m))return;vo.set(m),a.uniformMatrix4fv(this.addr,!1,vo),Fe(p,m)}}function Hd(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1i(this.addr,h),p[0]=h}function kd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2i(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ne(p,h))return;a.uniform2iv(this.addr,h),Fe(p,h)}}function Gd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3i(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(Ne(p,h))return;a.uniform3iv(this.addr,h),Fe(p,h)}}function Wd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4i(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ne(p,h))return;a.uniform4iv(this.addr,h),Fe(p,h)}}function Vd(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1ui(this.addr,h),p[0]=h}function Xd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2ui(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ne(p,h))return;a.uniform2uiv(this.addr,h),Fe(p,h)}}function qd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3ui(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(Ne(p,h))return;a.uniform3uiv(this.addr,h),Fe(p,h)}}function Yd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4ui(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ne(p,h))return;a.uniform4uiv(this.addr,h),Fe(p,h)}}function Zd(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;let _;if(this.type===a.SAMPLER_2D_SHADOW)_o.compareFunction=515,_=_o;else _=cl;p.setTexture2D(h||_,g)}function Jd(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTexture3D(h||ul,g)}function $d(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTextureCube(h||dl,g)}function Kd(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTexture2DArray(h||hl,g)}function jd(a){switch(a){case 5126:return Ld;case 35664:return Ud;case 35665:return Nd;case 35666:return Fd;case 35674:return Od;case 35675:return Bd;case 35676:return zd;case 5124:case 35670:return Hd;case 35667:case 35671:return kd;case 35668:case 35672:return Gd;case 35669:case 35673:return Wd;case 5125:return Vd;case 36294:return Xd;case 36295:return qd;case 36296:return Yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return $d;case 36289:case 36303:case 36311:case 36292:return Kd}}function Qd(a,h){a.uniform1fv(this.addr,h)}function tf(a,h){let p=Hi(h,this.size,2);a.uniform2fv(this.addr,p)}function ef(a,h){let p=Hi(h,this.size,3);a.uniform3fv(this.addr,p)}function nf(a,h){let p=Hi(h,this.size,4);a.uniform4fv(this.addr,p)}function sf(a,h){let p=Hi(h,this.size,4);a.uniformMatrix2fv(this.addr,!1,p)}function rf(a,h){let p=Hi(h,this.size,9);a.uniformMatrix3fv(this.addr,!1,p)}function af(a,h){let p=Hi(h,this.size,16);a.uniformMatrix4fv(this.addr,!1,p)}function of(a,h){a.uniform1iv(this.addr,h)}function lf(a,h){a.uniform2iv(this.addr,h)}function cf(a,h){a.uniform3iv(this.addr,h)}function hf(a,h){a.uniform4iv(this.addr,h)}function uf(a,h){a.uniform1uiv(this.addr,h)}function df(a,h){a.uniform2uiv(this.addr,h)}function ff(a,h){a.uniform3uiv(this.addr,h)}function pf(a,h){a.uniform4uiv(this.addr,h)}function mf(a,h,p){let m=this.cache,g=h.length,_=lr(p,g);if(!Ne(m,_))a.uniform1iv(this.addr,_),Fe(m,_);for(let y=0;y!==g;++y)p.setTexture2D(h[y]||cl,_[y])}function gf(a,h,p){let m=this.cache,g=h.length,_=lr(p,g);if(!Ne(m,_))a.uniform1iv(this.addr,_),Fe(m,_);for(let y=0;y!==g;++y)p.setTexture3D(h[y]||ul,_[y])}function _f(a,h,p){let m=this.cache,g=h.length,_=lr(p,g);if(!Ne(m,_))a.uniform1iv(this.addr,_),Fe(m,_);for(let y=0;y!==g;++y)p.setTextureCube(h[y]||dl,_[y])}function xf(a,h,p){let m=this.cache,g=h.length,_=lr(p,g);if(!Ne(m,_))a.uniform1iv(this.addr,_),Fe(m,_);for(let y=0;y!==g;++y)p.setTexture2DArray(h[y]||hl,_[y])}function yf(a){switch(a){case 5126:return Qd;case 35664:return tf;case 35665:return ef;case 35666:return nf;case 35674:return sf;case 35675:return rf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return uf;case 36294:return df;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return xf}}class fl{constructor(a,h,p){this.id=a,this.addr=p,this.cache=[],this.type=h.type,this.setValue=jd(h.type)}}class pl{constructor(a,h,p){this.id=a,this.addr=p,this.cache=[],this.type=h.type,this.size=h.size,this.setValue=yf(h.type)}}class ml{constructor(a){this.id=a,this.seq=[],this.map={}}setValue(a,h,p){let m=this.seq;for(let g=0,_=m.length;g!==_;++g){let y=m[g];y.setValue(a,h[y.id],p)}}}var qr=/(\w+)(\])?(\[|\.)?/g;function Eo(a,h){a.seq.push(h),a.map[h.id]=h}function vf(a,h,p){let m=a.name,g=m.length;qr.lastIndex=0;while(!0){let _=qr.exec(m),y=qr.lastIndex,x=_[1],M=_[2]==="]",S=_[3];if(M)x=x|0;if(S===void 0||S==="["&&y+2===g){Eo(p,S===void 0?new fl(x,a,h):new pl(x,a,h));break}else{let v=p.map[x];if(v===void 0)v=new ml(x),Eo(p,v);p=v}}}class rs{constructor(a,h){this.seq=[],this.map={};let p=a.getProgramParameter(h,a.ACTIVE_UNIFORMS);for(let m=0;m<p;++m){let g=a.getActiveUniform(h,m),_=a.getUniformLocation(h,g.name);vf(g,_,this)}}setValue(a,h,p,m){let g=this.map[h];if(g!==void 0)g.setValue(a,p,m)}setOptional(a,h,p){let m=h[p];if(m!==void 0)this.setValue(a,p,m)}static upload(a,h,p,m){for(let g=0,_=h.length;g!==_;++g){let y=h[g],x=p[y.id];if(x.needsUpdate!==!1)y.setValue(a,x.value,m)}}static seqWithValue(a,h){let p=[];for(let m=0,g=a.length;m!==g;++m){let _=a[m];if(_.id in h)p.push(_)}return p}}function bo(a,h,p){let m=a.createShader(h);return a.shaderSource(m,p),a.compileShader(m),m}var Mf=37297,Sf=0;function Ef(a,h){let p=a.split(`
`),m=[],g=Math.max(h-6,0),_=Math.min(h+6,p.length);for(let y=g;y<_;y++){let x=y+1;m.push(`${x===h?">":" "} ${x}: ${p[y]}`)}return m.join(`
`)}var To=new ce;function bf(a){_e._getMatrix(To,_e.workingColorSpace,a);let h=`mat3( ${To.elements.map((p)=>p.toFixed(4))} )`;switch(_e.getTransfer(a)){case"linear":return[h,"LinearTransferOETF"];case"srgb":return[h,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[h,"LinearTransferOETF"]}}function wo(a,h,p){let m=a.getShaderParameter(h,a.COMPILE_STATUS),g=a.getShaderInfoLog(h).trim();if(m&&g==="")return"";let _=/ERROR: 0:(\d+)/.exec(g);if(_){let y=parseInt(_[1]);return p.toUpperCase()+`

`+g+`

`+Ef(a.getShaderSource(h),y)}else return g}function Tf(a,h){let p=bf(h);return[`vec4 ${a}( vec4 value ) {`,`	return ${p[1]}( vec4( value.rgb * ${p[0]}, value.a ) );`,"}"].join(`
`)}function wf(a,h){let p;switch(h){case 1:p="Linear";break;case 2:p="Reinhard";break;case 3:p="Cineon";break;case 4:p="ACESFilmic";break;case 6:p="AgX";break;case 7:p="Neutral";break;case 5:p="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",h),p="Linear"}return"vec3 "+a+"( vec3 color ) { return "+p+"ToneMapping( color ); }"}var Xs=new X;function Af(){_e.getLuminanceCoefficients(Xs);let a=Xs.x.toFixed(4),h=Xs.y.toFixed(4),p=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${h}, ${p} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Rf(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function Cf(a){let h=[];for(let p in a){let m=a[p];if(m===!1)continue;h.push("#define "+p+" "+m)}return h.join(`
`)}function Pf(a,h){let p={},m=a.getProgramParameter(h,a.ACTIVE_ATTRIBUTES);for(let g=0;g<m;g++){let _=a.getActiveAttrib(h,g),y=_.name,x=1;if(_.type===a.FLOAT_MAT2)x=2;if(_.type===a.FLOAT_MAT3)x=3;if(_.type===a.FLOAT_MAT4)x=4;p[y]={type:_.type,location:a.getAttribLocation(h,y),locationSize:x}}return p}function is(a){return a!==""}function Ao(a,h){let p=h.numSpotLightShadows+h.numSpotLightMaps-h.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,h.numDirLights).replace(/NUM_SPOT_LIGHTS/g,h.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,h.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,p).replace(/NUM_RECT_AREA_LIGHTS/g,h.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,h.numPointLights).replace(/NUM_HEMI_LIGHTS/g,h.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,h.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,h.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,h.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,h.numPointLightShadows)}function Ro(a,h){return a.replace(/NUM_CLIPPING_PLANES/g,h.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,h.numClippingPlanes-h.numClipIntersection)}var If=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(a){return a.replace(If,Lf)}var Df=new Map;function Lf(a,h){let p=fe[h];if(p===void 0){let m=Df.get(h);if(m!==void 0)p=fe[m],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',h,m);else throw Error("Can not resolve #include <"+h+">")}return ta(p)}var Uf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(a){return a.replace(Uf,Nf)}function Nf(a,h,p,m){let g="";for(let _=parseInt(h);_<parseInt(p);_++)g+=m.replace(/\[\s*i\s*\]/g,"[ "+_+" ]").replace(/UNROLLED_LOOP_INDEX/g,_);return g}function Po(a){let h=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;if(a.precision==="highp")h+=`
#define HIGH_PRECISION`;else if(a.precision==="mediump")h+=`
#define MEDIUM_PRECISION`;else if(a.precision==="lowp")h+=`
#define LOW_PRECISION`;return h}function Ff(a){let h="SHADOWMAP_TYPE_BASIC";if(a.shadowMapType===1)h="SHADOWMAP_TYPE_PCF";else if(a.shadowMapType===2)h="SHADOWMAP_TYPE_PCF_SOFT";else if(a.shadowMapType===3)h="SHADOWMAP_TYPE_VSM";return h}function Of(a){let h="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:h="ENVMAP_TYPE_CUBE";break;case 306:h="ENVMAP_TYPE_CUBE_UV";break}return h}function Bf(a){let h="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:h="ENVMAP_MODE_REFRACTION";break}return h}function zf(a){let h="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:h="ENVMAP_BLENDING_MULTIPLY";break;case 1:h="ENVMAP_BLENDING_MIX";break;case 2:h="ENVMAP_BLENDING_ADD";break}return h}function Hf(a){let h=a.envMapCubeUVHeight;if(h===null)return null;let p=Math.log2(h)-2,m=1/h;return{texelWidth:1/(3*Math.max(Math.pow(2,p),112)),texelHeight:m,maxMip:p}}function kf(a,h,p,m){let g=a.getContext(),{defines:_,vertexShader:y,fragmentShader:x}=p,M=Ff(p),S=Of(p),b=Bf(p),v=zf(p),w=Hf(p),C=Rf(p),I=Cf(_),D=g.createProgram(),A,R,W=p.glslVersion?"#version "+p.glslVersion+`
`:"";if(p.isRawShaderMaterial){if(A=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,I].filter(is).join(`
`),A.length>0)A+=`
`;if(R=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,I].filter(is).join(`
`),R.length>0)R+=`
`}else A=[Po(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,I,p.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",p.batching?"#define USE_BATCHING":"",p.batchingColor?"#define USE_BATCHING_COLOR":"",p.instancing?"#define USE_INSTANCING":"",p.instancingColor?"#define USE_INSTANCING_COLOR":"",p.instancingMorph?"#define USE_INSTANCING_MORPH":"",p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.map?"#define USE_MAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+b:"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.displacementMap?"#define USE_DISPLACEMENTMAP":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.mapUv?"#define MAP_UV "+p.mapUv:"",p.alphaMapUv?"#define ALPHAMAP_UV "+p.alphaMapUv:"",p.lightMapUv?"#define LIGHTMAP_UV "+p.lightMapUv:"",p.aoMapUv?"#define AOMAP_UV "+p.aoMapUv:"",p.emissiveMapUv?"#define EMISSIVEMAP_UV "+p.emissiveMapUv:"",p.bumpMapUv?"#define BUMPMAP_UV "+p.bumpMapUv:"",p.normalMapUv?"#define NORMALMAP_UV "+p.normalMapUv:"",p.displacementMapUv?"#define DISPLACEMENTMAP_UV "+p.displacementMapUv:"",p.metalnessMapUv?"#define METALNESSMAP_UV "+p.metalnessMapUv:"",p.roughnessMapUv?"#define ROUGHNESSMAP_UV "+p.roughnessMapUv:"",p.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+p.anisotropyMapUv:"",p.clearcoatMapUv?"#define CLEARCOATMAP_UV "+p.clearcoatMapUv:"",p.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+p.clearcoatNormalMapUv:"",p.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+p.clearcoatRoughnessMapUv:"",p.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+p.iridescenceMapUv:"",p.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+p.iridescenceThicknessMapUv:"",p.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+p.sheenColorMapUv:"",p.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+p.sheenRoughnessMapUv:"",p.specularMapUv?"#define SPECULARMAP_UV "+p.specularMapUv:"",p.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+p.specularColorMapUv:"",p.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+p.specularIntensityMapUv:"",p.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+p.transmissionMapUv:"",p.thicknessMapUv?"#define THICKNESSMAP_UV "+p.thicknessMapUv:"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.flatShading?"#define FLAT_SHADED":"",p.skinning?"#define USE_SKINNING":"",p.morphTargets?"#define USE_MORPHTARGETS":"",p.morphNormals&&p.flatShading===!1?"#define USE_MORPHNORMALS":"",p.morphColors?"#define USE_MORPHCOLORS":"",p.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+p.morphTextureStride:"",p.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+p.morphTargetsCount:"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+M:"",p.sizeAttenuation?"#define USE_SIZEATTENUATION":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),R=[Po(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,I,p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",p.map?"#define USE_MAP":"",p.matcap?"#define USE_MATCAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+S:"",p.envMap?"#define "+b:"",p.envMap?"#define "+v:"",w?"#define CUBEUV_TEXEL_WIDTH "+w.texelWidth:"",w?"#define CUBEUV_TEXEL_HEIGHT "+w.texelHeight:"",w?"#define CUBEUV_MAX_MIP "+w.maxMip+".0":"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoat?"#define USE_CLEARCOAT":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.dispersion?"#define USE_DISPERSION":"",p.iridescence?"#define USE_IRIDESCENCE":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaTest?"#define USE_ALPHATEST":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.sheen?"#define USE_SHEEN":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors||p.instancingColor||p.batchingColor?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.gradientMap?"#define USE_GRADIENTMAP":"",p.flatShading?"#define FLAT_SHADED":"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+M:"",p.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",p.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",p.toneMapping!==0?"#define TONE_MAPPING":"",p.toneMapping!==0?fe.tonemapping_pars_fragment:"",p.toneMapping!==0?wf("toneMapping",p.toneMapping):"",p.dithering?"#define DITHERING":"",p.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Tf("linearToOutputTexel",p.outputColorSpace),Af(),p.useDepthPacking?"#define DEPTH_PACKING "+p.depthPacking:"",`
`].filter(is).join(`
`);if(y=ta(y),y=Ao(y,p),y=Ro(y,p),x=ta(x),x=Ao(x,p),x=Ro(x,p),y=Co(y),x=Co(x),p.isRawShaderMaterial!==!0)W=`#version 300 es
`,A=[C,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,R=["#define varying in",p.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",p.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R;let F=W+A+y,H=W+R+x,it=bo(g,g.VERTEX_SHADER,F),q=bo(g,g.FRAGMENT_SHADER,H);if(g.attachShader(D,it),g.attachShader(D,q),p.index0AttributeName!==void 0)g.bindAttribLocation(D,0,p.index0AttributeName);else if(p.morphTargets===!0)g.bindAttribLocation(D,0,"position");g.linkProgram(D);function Y(Q){if(a.debug.checkShaderErrors){let st=g.getProgramInfoLog(D).trim(),ot=g.getShaderInfoLog(it).trim(),ct=g.getShaderInfoLog(q).trim(),pt=!0,J=!0;if(g.getProgramParameter(D,g.LINK_STATUS)===!1)if(pt=!1,typeof a.debug.onShaderError==="function")a.debug.onShaderError(g,D,it,q);else{let et=wo(g,it,"vertex"),Z=wo(g,q,"fragment");console.error("THREE.WebGLProgram: Shader Error "+g.getError()+" - VALIDATE_STATUS "+g.getProgramParameter(D,g.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+st+`
`+et+`
`+Z)}else if(st!=="")console.warn("THREE.WebGLProgram: Program Info Log:",st);else if(ot===""||ct==="")J=!1;if(J)Q.diagnostics={runnable:pt,programLog:st,vertexShader:{log:ot,prefix:A},fragmentShader:{log:ct,prefix:R}}}g.deleteShader(it),g.deleteShader(q),lt=new rs(g,D),B=Pf(g,D)}let lt;this.getUniforms=function(){if(lt===void 0)Y(this);return lt};let B;this.getAttributes=function(){if(B===void 0)Y(this);return B};let z=p.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(z===!1)z=g.getProgramParameter(D,Mf);return z},this.destroy=function(){m.releaseStatesOfProgram(this),g.deleteProgram(D),this.program=void 0},this.type=p.shaderType,this.name=p.shaderName,this.id=Sf++,this.cacheKey=h,this.usedTimes=1,this.program=D,this.vertexShader=it,this.fragmentShader=q,this}var Gf=0;class gl{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(a){let{vertexShader:h,fragmentShader:p}=a,m=this._getShaderStage(h),g=this._getShaderStage(p),_=this._getShaderCacheForMaterial(a);if(_.has(m)===!1)_.add(m),m.usedTimes++;if(_.has(g)===!1)_.add(g),g.usedTimes++;return this}remove(a){let h=this.materialCache.get(a);for(let p of h)if(p.usedTimes--,p.usedTimes===0)this.shaderCache.delete(p.code);return this.materialCache.delete(a),this}getVertexShaderID(a){return this._getShaderStage(a.vertexShader).id}getFragmentShaderID(a){return this._getShaderStage(a.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(a){let h=this.materialCache,p=h.get(a);if(p===void 0)p=new Set,h.set(a,p);return p}_getShaderStage(a){let h=this.shaderCache,p=h.get(a);if(p===void 0)p=new _l(a),h.set(a,p);return p}}class _l{constructor(a){this.id=Gf++,this.code=a,this.usedTimes=0}}function Wf(a,h,p,m,g,_,y){let x=new ar,M=new gl,S=new Set,b=[],{logarithmicDepthBuffer:v,vertexTextures:w,precision:C}=g,I={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(B){if(S.add(B),B===0)return"uv";return`uv${B}`}function A(B,z,Q,st,ot){let ct=st.fog,pt=ot.geometry,J=B.isMeshStandardMaterial?st.environment:null,et=(B.isMeshStandardMaterial?p:h).get(B.envMap||J),Z=!!et&&et.mapping===306?et.image.height:null,At=I[B.type];if(B.precision!==null){if(C=g.getMaxPrecision(B.precision),C!==B.precision)console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",C,"instead.")}let U=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Xt=U!==void 0?U.length:0,Jt=0;if(pt.morphAttributes.position!==void 0)Jt=1;if(pt.morphAttributes.normal!==void 0)Jt=2;if(pt.morphAttributes.color!==void 0)Jt=3;let dt,bt,qt,Ht;if(At){let re=En[At];dt=re.vertexShader,bt=re.fragmentShader}else dt=B.vertexShader,bt=B.fragmentShader,M.update(B),qt=M.getVertexShaderID(B),Ht=M.getFragmentShaderID(B);let Rt=a.getRenderTarget(),te=a.state.buffers.depth.getReversed(),ae=ot.isInstancedMesh===!0,Kt=ot.isBatchedMesh===!0,_t=!!B.map,Tt=!!B.matcap,V=!!et,zt=!!B.aoMap,wt=!!B.lightMap,kt=!!B.bumpMap,vt=!!B.normalMap,ee=!!B.displacementMap,Bt=!!B.emissiveMap,Gt=!!B.metalnessMap,k=!!B.roughnessMap,N=B.anisotropy>0,nt=B.clearcoat>0,mt=B.dispersion>0,xt=B.iridescence>0,ht=B.sheen>0,Zt=B.transmission>0,Ct=N&&!!B.anisotropyMap,Nt=nt&&!!B.clearcoatMap,ie=nt&&!!B.clearcoatNormalMap,Mt=nt&&!!B.clearcoatRoughnessMap,Ot=xt&&!!B.iridescenceMap,oe=xt&&!!B.iridescenceThicknessMap,ne=ht&&!!B.sheenColorMap,Pt=ht&&!!B.sheenRoughnessMap,se=!!B.specularMap,de=!!B.specularColorMap,xe=!!B.specularIntensityMap,j=Zt&&!!B.transmissionMap,Et=Zt&&!!B.thicknessMap,ft=!!B.gradientMap,gt=!!B.alphaMap,Lt=B.alphaTest>0,Ft=!!B.alphaHash,le=!!B.extensions,we=0;if(B.toneMapped){if(Rt===null||Rt.isXRRenderTarget===!0)we=a.toneMapping}let Pe={shaderID:At,shaderType:B.type,shaderName:B.name,vertexShader:dt,fragmentShader:bt,defines:B.defines,customVertexShaderID:qt,customFragmentShaderID:Ht,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:C,batching:Kt,batchingColor:Kt&&ot._colorsTexture!==null,instancing:ae,instancingColor:ae&&ot.instanceColor!==null,instancingMorph:ae&&ot.morphTexture!==null,supportsVertexTextures:w,outputColorSpace:Rt===null?a.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:"srgb-linear",alphaToCoverage:!!B.alphaToCoverage,map:_t,matcap:Tt,envMap:V,envMapMode:V&&et.mapping,envMapCubeUVHeight:Z,aoMap:zt,lightMap:wt,bumpMap:kt,normalMap:vt,displacementMap:w&&ee,emissiveMap:Bt,normalMapObjectSpace:vt&&B.normalMapType===1,normalMapTangentSpace:vt&&B.normalMapType===0,metalnessMap:Gt,roughnessMap:k,anisotropy:N,anisotropyMap:Ct,clearcoat:nt,clearcoatMap:Nt,clearcoatNormalMap:ie,clearcoatRoughnessMap:Mt,dispersion:mt,iridescence:xt,iridescenceMap:Ot,iridescenceThicknessMap:oe,sheen:ht,sheenColorMap:ne,sheenRoughnessMap:Pt,specularMap:se,specularColorMap:de,specularIntensityMap:xe,transmission:Zt,transmissionMap:j,thicknessMap:Et,gradientMap:ft,opaque:B.transparent===!1&&B.blending===1&&B.alphaToCoverage===!1,alphaMap:gt,alphaTest:Lt,alphaHash:Ft,combine:B.combine,mapUv:_t&&D(B.map.channel),aoMapUv:zt&&D(B.aoMap.channel),lightMapUv:wt&&D(B.lightMap.channel),bumpMapUv:kt&&D(B.bumpMap.channel),normalMapUv:vt&&D(B.normalMap.channel),displacementMapUv:ee&&D(B.displacementMap.channel),emissiveMapUv:Bt&&D(B.emissiveMap.channel),metalnessMapUv:Gt&&D(B.metalnessMap.channel),roughnessMapUv:k&&D(B.roughnessMap.channel),anisotropyMapUv:Ct&&D(B.anisotropyMap.channel),clearcoatMapUv:Nt&&D(B.clearcoatMap.channel),clearcoatNormalMapUv:ie&&D(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&D(B.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&D(B.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&D(B.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&D(B.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&D(B.sheenRoughnessMap.channel),specularMapUv:se&&D(B.specularMap.channel),specularColorMapUv:de&&D(B.specularColorMap.channel),specularIntensityMapUv:xe&&D(B.specularIntensityMap.channel),transmissionMapUv:j&&D(B.transmissionMap.channel),thicknessMapUv:Et&&D(B.thicknessMap.channel),alphaMapUv:gt&&D(B.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(vt||N),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!pt.attributes.uv&&(_t||gt),fog:!!ct,useFog:B.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:B.flatShading===!0,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:te,skinning:ot.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:Jt,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numClippingPlanes:y.numPlanes,numClipIntersection:y.numIntersection,dithering:B.dithering,shadowMapEnabled:a.shadowMap.enabled&&Q.length>0,shadowMapType:a.shadowMap.type,toneMapping:we,decodeVideoTexture:_t&&B.map.isVideoTexture===!0&&_e.getTransfer(B.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Bt&&B.emissiveMap.isVideoTexture===!0&&_e.getTransfer(B.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===2,flipSided:B.side===1,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:le&&B.extensions.clipCullDistance===!0&&m.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&B.extensions.multiDraw===!0||Kt)&&m.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:m.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return Pe.vertexUv1s=S.has(1),Pe.vertexUv2s=S.has(2),Pe.vertexUv3s=S.has(3),S.clear(),Pe}function R(B){let z=[];if(B.shaderID)z.push(B.shaderID);else z.push(B.customVertexShaderID),z.push(B.customFragmentShaderID);if(B.defines!==void 0)for(let Q in B.defines)z.push(Q),z.push(B.defines[Q]);if(B.isRawShaderMaterial===!1)W(z,B),F(z,B),z.push(a.outputColorSpace);return z.push(B.customProgramCacheKey),z.join()}function W(B,z){B.push(z.precision),B.push(z.outputColorSpace),B.push(z.envMapMode),B.push(z.envMapCubeUVHeight),B.push(z.mapUv),B.push(z.alphaMapUv),B.push(z.lightMapUv),B.push(z.aoMapUv),B.push(z.bumpMapUv),B.push(z.normalMapUv),B.push(z.displacementMapUv),B.push(z.emissiveMapUv),B.push(z.metalnessMapUv),B.push(z.roughnessMapUv),B.push(z.anisotropyMapUv),B.push(z.clearcoatMapUv),B.push(z.clearcoatNormalMapUv),B.push(z.clearcoatRoughnessMapUv),B.push(z.iridescenceMapUv),B.push(z.iridescenceThicknessMapUv),B.push(z.sheenColorMapUv),B.push(z.sheenRoughnessMapUv),B.push(z.specularMapUv),B.push(z.specularColorMapUv),B.push(z.specularIntensityMapUv),B.push(z.transmissionMapUv),B.push(z.thicknessMapUv),B.push(z.combine),B.push(z.fogExp2),B.push(z.sizeAttenuation),B.push(z.morphTargetsCount),B.push(z.morphAttributeCount),B.push(z.numDirLights),B.push(z.numPointLights),B.push(z.numSpotLights),B.push(z.numSpotLightMaps),B.push(z.numHemiLights),B.push(z.numRectAreaLights),B.push(z.numDirLightShadows),B.push(z.numPointLightShadows),B.push(z.numSpotLightShadows),B.push(z.numSpotLightShadowsWithMaps),B.push(z.numLightProbes),B.push(z.shadowMapType),B.push(z.toneMapping),B.push(z.numClippingPlanes),B.push(z.numClipIntersection),B.push(z.depthPacking)}function F(B,z){if(x.disableAll(),z.supportsVertexTextures)x.enable(0);if(z.instancing)x.enable(1);if(z.instancingColor)x.enable(2);if(z.instancingMorph)x.enable(3);if(z.matcap)x.enable(4);if(z.envMap)x.enable(5);if(z.normalMapObjectSpace)x.enable(6);if(z.normalMapTangentSpace)x.enable(7);if(z.clearcoat)x.enable(8);if(z.iridescence)x.enable(9);if(z.alphaTest)x.enable(10);if(z.vertexColors)x.enable(11);if(z.vertexAlphas)x.enable(12);if(z.vertexUv1s)x.enable(13);if(z.vertexUv2s)x.enable(14);if(z.vertexUv3s)x.enable(15);if(z.vertexTangents)x.enable(16);if(z.anisotropy)x.enable(17);if(z.alphaHash)x.enable(18);if(z.batching)x.enable(19);if(z.dispersion)x.enable(20);if(z.batchingColor)x.enable(21);if(B.push(x.mask),x.disableAll(),z.fog)x.enable(0);if(z.useFog)x.enable(1);if(z.flatShading)x.enable(2);if(z.logarithmicDepthBuffer)x.enable(3);if(z.reverseDepthBuffer)x.enable(4);if(z.skinning)x.enable(5);if(z.morphTargets)x.enable(6);if(z.morphNormals)x.enable(7);if(z.morphColors)x.enable(8);if(z.premultipliedAlpha)x.enable(9);if(z.shadowMapEnabled)x.enable(10);if(z.doubleSided)x.enable(11);if(z.flipSided)x.enable(12);if(z.useDepthPacking)x.enable(13);if(z.dithering)x.enable(14);if(z.transmission)x.enable(15);if(z.sheen)x.enable(16);if(z.opaque)x.enable(17);if(z.pointsUvs)x.enable(18);if(z.decodeVideoTexture)x.enable(19);if(z.decodeVideoTextureEmissive)x.enable(20);if(z.alphaToCoverage)x.enable(21);B.push(x.mask)}function H(B){let z=I[B.type],Q;if(z){let st=En[z];Q=Dc.clone(st.uniforms)}else Q=B.uniforms;return Q}function it(B,z){let Q;for(let st=0,ot=b.length;st<ot;st++){let ct=b[st];if(ct.cacheKey===z){Q=ct,++Q.usedTimes;break}}if(Q===void 0)Q=new kf(a,z,B,_),b.push(Q);return Q}function q(B){if(--B.usedTimes===0){let z=b.indexOf(B);b[z]=b[b.length-1],b.pop(),B.destroy()}}function Y(B){M.remove(B)}function lt(){M.dispose()}return{getParameters:A,getProgramCacheKey:R,getUniforms:H,acquireProgram:it,releaseProgram:q,releaseShaderCache:Y,programs:b,dispose:lt}}function Vf(){let a=new WeakMap;function h(y){return a.has(y)}function p(y){let x=a.get(y);if(x===void 0)x={},a.set(y,x);return x}function m(y){a.delete(y)}function g(y,x,M){a.get(y)[x]=M}function _(){a=new WeakMap}return{has:h,get:p,remove:m,update:g,dispose:_}}function Xf(a,h){if(a.groupOrder!==h.groupOrder)return a.groupOrder-h.groupOrder;else if(a.renderOrder!==h.renderOrder)return a.renderOrder-h.renderOrder;else if(a.material.id!==h.material.id)return a.material.id-h.material.id;else if(a.z!==h.z)return a.z-h.z;else return a.id-h.id}function Io(a,h){if(a.groupOrder!==h.groupOrder)return a.groupOrder-h.groupOrder;else if(a.renderOrder!==h.renderOrder)return a.renderOrder-h.renderOrder;else if(a.z!==h.z)return h.z-a.z;else return a.id-h.id}function Do(){let a=[],h=0,p=[],m=[],g=[];function _(){h=0,p.length=0,m.length=0,g.length=0}function y(v,w,C,I,D,A){let R=a[h];if(R===void 0)R={id:v.id,object:v,geometry:w,material:C,groupOrder:I,renderOrder:v.renderOrder,z:D,group:A},a[h]=R;else R.id=v.id,R.object=v,R.geometry=w,R.material=C,R.groupOrder=I,R.renderOrder=v.renderOrder,R.z=D,R.group=A;return h++,R}function x(v,w,C,I,D,A){let R=y(v,w,C,I,D,A);if(C.transmission>0)m.push(R);else if(C.transparent===!0)g.push(R);else p.push(R)}function M(v,w,C,I,D,A){let R=y(v,w,C,I,D,A);if(C.transmission>0)m.unshift(R);else if(C.transparent===!0)g.unshift(R);else p.unshift(R)}function S(v,w){if(p.length>1)p.sort(v||Xf);if(m.length>1)m.sort(w||Io);if(g.length>1)g.sort(w||Io)}function b(){for(let v=h,w=a.length;v<w;v++){let C=a[v];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:p,transmissive:m,transparent:g,init:_,push:x,unshift:M,finish:b,sort:S}}function qf(){let a=new WeakMap;function h(m,g){let _=a.get(m),y;if(_===void 0)y=new Do,a.set(m,[y]);else if(g>=_.length)y=new Do,_.push(y);else y=_[g];return y}function p(){a=new WeakMap}return{get:h,dispose:p}}function Yf(){let a={};return{get:function(h){if(a[h.id]!==void 0)return a[h.id];let p;switch(h.type){case"DirectionalLight":p={direction:new X,color:new he};break;case"SpotLight":p={position:new X,direction:new X,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":p={position:new X,color:new he,distance:0,decay:0};break;case"HemisphereLight":p={direction:new X,skyColor:new he,groundColor:new he};break;case"RectAreaLight":p={color:new he,position:new X,halfWidth:new X,halfHeight:new X};break}return a[h.id]=p,p}}}function Zf(){let a={};return{get:function(h){if(a[h.id]!==void 0)return a[h.id];let p;switch(h.type){case"DirectionalLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1000};break}return a[h.id]=p,p}}}var Jf=0;function $f(a,h){return(h.castShadow?2:0)-(a.castShadow?2:0)+(h.map?1:0)-(a.map?1:0)}function Kf(a){let h=new Yf,p=Zf(),m={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let S=0;S<9;S++)m.probe.push(new X);let g=new X,_=new ye,y=new ye;function x(S){let b=0,v=0,w=0;for(let B=0;B<9;B++)m.probe[B].set(0,0,0);let C=0,I=0,D=0,A=0,R=0,W=0,F=0,H=0,it=0,q=0,Y=0;S.sort($f);for(let B=0,z=S.length;B<z;B++){let Q=S[B],{color:st,intensity:ot,distance:ct}=Q,pt=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)b+=st.r*ot,v+=st.g*ot,w+=st.b*ot;else if(Q.isLightProbe){for(let J=0;J<9;J++)m.probe[J].addScaledVector(Q.sh.coefficients[J],ot);Y++}else if(Q.isDirectionalLight){let J=h.get(Q);if(J.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){let et=Q.shadow,Z=p.get(Q);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,m.directionalShadow[C]=Z,m.directionalShadowMap[C]=pt,m.directionalShadowMatrix[C]=Q.shadow.matrix,W++}m.directional[C]=J,C++}else if(Q.isSpotLight){let J=h.get(Q);J.position.setFromMatrixPosition(Q.matrixWorld),J.color.copy(st).multiplyScalar(ot),J.distance=ct,J.coneCos=Math.cos(Q.angle),J.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),J.decay=Q.decay,m.spot[D]=J;let et=Q.shadow;if(Q.map){if(m.spotLightMap[it]=Q.map,it++,et.updateMatrices(Q),Q.castShadow)q++}if(m.spotLightMatrix[D]=et.matrix,Q.castShadow){let Z=p.get(Q);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,m.spotShadow[D]=Z,m.spotShadowMap[D]=pt,H++}D++}else if(Q.isRectAreaLight){let J=h.get(Q);J.color.copy(st).multiplyScalar(ot),J.halfWidth.set(Q.width*0.5,0,0),J.halfHeight.set(0,Q.height*0.5,0),m.rectArea[A]=J,A++}else if(Q.isPointLight){let J=h.get(Q);if(J.color.copy(Q.color).multiplyScalar(Q.intensity),J.distance=Q.distance,J.decay=Q.decay,Q.castShadow){let et=Q.shadow,Z=p.get(Q);Z.shadowIntensity=et.intensity,Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,Z.shadowCameraNear=et.camera.near,Z.shadowCameraFar=et.camera.far,m.pointShadow[I]=Z,m.pointShadowMap[I]=pt,m.pointShadowMatrix[I]=Q.shadow.matrix,F++}m.point[I]=J,I++}else if(Q.isHemisphereLight){let J=h.get(Q);J.skyColor.copy(Q.color).multiplyScalar(ot),J.groundColor.copy(Q.groundColor).multiplyScalar(ot),m.hemi[R]=J,R++}}if(A>0)if(a.has("OES_texture_float_linear")===!0)m.rectAreaLTC1=It.LTC_FLOAT_1,m.rectAreaLTC2=It.LTC_FLOAT_2;else m.rectAreaLTC1=It.LTC_HALF_1,m.rectAreaLTC2=It.LTC_HALF_2;m.ambient[0]=b,m.ambient[1]=v,m.ambient[2]=w;let lt=m.hash;if(lt.directionalLength!==C||lt.pointLength!==I||lt.spotLength!==D||lt.rectAreaLength!==A||lt.hemiLength!==R||lt.numDirectionalShadows!==W||lt.numPointShadows!==F||lt.numSpotShadows!==H||lt.numSpotMaps!==it||lt.numLightProbes!==Y)m.directional.length=C,m.spot.length=D,m.rectArea.length=A,m.point.length=I,m.hemi.length=R,m.directionalShadow.length=W,m.directionalShadowMap.length=W,m.pointShadow.length=F,m.pointShadowMap.length=F,m.spotShadow.length=H,m.spotShadowMap.length=H,m.directionalShadowMatrix.length=W,m.pointShadowMatrix.length=F,m.spotLightMatrix.length=H+it-q,m.spotLightMap.length=it,m.numSpotLightShadowsWithMaps=q,m.numLightProbes=Y,lt.directionalLength=C,lt.pointLength=I,lt.spotLength=D,lt.rectAreaLength=A,lt.hemiLength=R,lt.numDirectionalShadows=W,lt.numPointShadows=F,lt.numSpotShadows=H,lt.numSpotMaps=it,lt.numLightProbes=Y,m.version=Jf++}function M(S,b){let v=0,w=0,C=0,I=0,D=0,A=b.matrixWorldInverse;for(let R=0,W=S.length;R<W;R++){let F=S[R];if(F.isDirectionalLight){let H=m.directional[v];H.direction.setFromMatrixPosition(F.matrixWorld),g.setFromMatrixPosition(F.target.matrixWorld),H.direction.sub(g),H.direction.transformDirection(A),v++}else if(F.isSpotLight){let H=m.spot[C];H.position.setFromMatrixPosition(F.matrixWorld),H.position.applyMatrix4(A),H.direction.setFromMatrixPosition(F.matrixWorld),g.setFromMatrixPosition(F.target.matrixWorld),H.direction.sub(g),H.direction.transformDirection(A),C++}else if(F.isRectAreaLight){let H=m.rectArea[I];H.position.setFromMatrixPosition(F.matrixWorld),H.position.applyMatrix4(A),y.identity(),_.copy(F.matrixWorld),_.premultiply(A),y.extractRotation(_),H.halfWidth.set(F.width*0.5,0,0),H.halfHeight.set(0,F.height*0.5,0),H.halfWidth.applyMatrix4(y),H.halfHeight.applyMatrix4(y),I++}else if(F.isPointLight){let H=m.point[w];H.position.setFromMatrixPosition(F.matrixWorld),H.position.applyMatrix4(A),w++}else if(F.isHemisphereLight){let H=m.hemi[D];H.direction.setFromMatrixPosition(F.matrixWorld),H.direction.transformDirection(A),D++}}}return{setup:x,setupView:M,state:m}}function Lo(a){let h=new Kf(a),p=[],m=[];function g(b){S.camera=b,p.length=0,m.length=0}function _(b){p.push(b)}function y(b){m.push(b)}function x(){h.setup(p)}function M(b){h.setupView(p,b)}let S={lightsArray:p,shadowsArray:m,camera:null,lights:h,transmissionRenderTarget:{}};return{init:g,state:S,setupLights:x,setupLightsView:M,pushLight:_,pushShadow:y}}function jf(a){let h=new WeakMap;function p(g,_=0){let y=h.get(g),x;if(y===void 0)x=new Lo(a),h.set(g,[x]);else if(_>=y.length)x=new Lo(a),y.push(x);else x=y[_];return x}function m(){h=new WeakMap}return{get:p,dispose:m}}class xl extends $n{static get type(){return"MeshDepthMaterial"}constructor(a){super();this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(a)}copy(a){return super.copy(a),this.depthPacking=a.depthPacking,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this}}class yl extends $n{static get type(){return"MeshDistanceMaterial"}constructor(a){super();this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(a)}copy(a){return super.copy(a),this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this}}var Qf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tp=`uniform sampler2D shadow_pass;
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
}`;function ep(a,h,p){let m=new or,g=new St,_=new St,y=new be,x=new xl({depthPacking:3201}),M=new yl,S={},b=p.maxTextureSize,v={[0]:1,[1]:0,[2]:2},w=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Qf,fragmentShader:tp}),C=w.clone();C.defines.HORIZONTAL_PASS=1;let I=new Ge;I.setAttribute("position",new hn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let D=new Qt(I,w),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let R=this.type;this.render=function(q,Y,lt){if(A.enabled===!1)return;if(A.autoUpdate===!1&&A.needsUpdate===!1)return;if(q.length===0)return;let B=a.getRenderTarget(),z=a.getActiveCubeFace(),Q=a.getActiveMipmapLevel(),st=a.state;st.setBlending(0),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let ot=R!==3&&this.type===3,ct=R===3&&this.type!==3;for(let pt=0,J=q.length;pt<J;pt++){let et=q[pt],Z=et.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;g.copy(Z.mapSize);let At=Z.getFrameExtents();if(g.multiply(At),_.copy(Z.mapSize),g.x>b||g.y>b){if(g.x>b)_.x=Math.floor(b/At.x),g.x=_.x*At.x,Z.mapSize.x=_.x;if(g.y>b)_.y=Math.floor(b/At.y),g.y=_.y*At.y,Z.mapSize.y=_.y}if(Z.map===null||ot===!0||ct===!0){let Xt=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(Z.map!==null)Z.map.dispose();Z.map=new Zn(g.x,g.y,Xt),Z.map.texture.name=et.name+".shadowMap",Z.camera.updateProjectionMatrix()}a.setRenderTarget(Z.map),a.clear();let U=Z.getViewportCount();for(let Xt=0;Xt<U;Xt++){let Jt=Z.getViewport(Xt);y.set(_.x*Jt.x,_.y*Jt.y,_.x*Jt.z,_.y*Jt.w),st.viewport(y),Z.updateMatrices(et,Xt),m=Z.getFrustum(),H(Y,lt,Z.camera,et,this.type)}if(Z.isPointLightShadow!==!0&&this.type===3)W(Z,lt);Z.needsUpdate=!1}R=this.type,A.needsUpdate=!1,a.setRenderTarget(B,z,Q)};function W(q,Y){let lt=h.update(D);if(w.defines.VSM_SAMPLES!==q.blurSamples)w.defines.VSM_SAMPLES=q.blurSamples,C.defines.VSM_SAMPLES=q.blurSamples,w.needsUpdate=!0,C.needsUpdate=!0;if(q.mapPass===null)q.mapPass=new Zn(g.x,g.y);w.uniforms.shadow_pass.value=q.map.texture,w.uniforms.resolution.value=q.mapSize,w.uniforms.radius.value=q.radius,a.setRenderTarget(q.mapPass),a.clear(),a.renderBufferDirect(Y,null,lt,w,D,null),C.uniforms.shadow_pass.value=q.mapPass.texture,C.uniforms.resolution.value=q.mapSize,C.uniforms.radius.value=q.radius,a.setRenderTarget(q.map),a.clear(),a.renderBufferDirect(Y,null,lt,C,D,null)}function F(q,Y,lt,B){let z=null,Q=lt.isPointLight===!0?q.customDistanceMaterial:q.customDepthMaterial;if(Q!==void 0)z=Q;else if(z=lt.isPointLight===!0?M:x,a.localClippingEnabled&&Y.clipShadows===!0&&Array.isArray(Y.clippingPlanes)&&Y.clippingPlanes.length!==0||Y.displacementMap&&Y.displacementScale!==0||Y.alphaMap&&Y.alphaTest>0||Y.map&&Y.alphaTest>0){let st=z.uuid,ot=Y.uuid,ct=S[st];if(ct===void 0)ct={},S[st]=ct;let pt=ct[ot];if(pt===void 0)pt=z.clone(),ct[ot]=pt,Y.addEventListener("dispose",it);z=pt}if(z.visible=Y.visible,z.wireframe=Y.wireframe,B===3)z.side=Y.shadowSide!==null?Y.shadowSide:Y.side;else z.side=Y.shadowSide!==null?Y.shadowSide:v[Y.side];if(z.alphaMap=Y.alphaMap,z.alphaTest=Y.alphaTest,z.map=Y.map,z.clipShadows=Y.clipShadows,z.clippingPlanes=Y.clippingPlanes,z.clipIntersection=Y.clipIntersection,z.displacementMap=Y.displacementMap,z.displacementScale=Y.displacementScale,z.displacementBias=Y.displacementBias,z.wireframeLinewidth=Y.wireframeLinewidth,z.linewidth=Y.linewidth,lt.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let st=a.properties.get(z);st.light=lt}return z}function H(q,Y,lt,B,z){if(q.visible===!1)return;if(q.layers.test(Y.layers)&&(q.isMesh||q.isLine||q.isPoints)){if((q.castShadow||q.receiveShadow&&z===3)&&(!q.frustumCulled||m.intersectsObject(q))){q.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,q.matrixWorld);let ot=h.update(q),ct=q.material;if(Array.isArray(ct)){let pt=ot.groups;for(let J=0,et=pt.length;J<et;J++){let Z=pt[J],At=ct[Z.materialIndex];if(At&&At.visible){let U=F(q,At,B,z);q.onBeforeShadow(a,q,Y,lt,ot,U,Z),a.renderBufferDirect(lt,null,ot,U,q,Z),q.onAfterShadow(a,q,Y,lt,ot,U,Z)}}}else if(ct.visible){let pt=F(q,ct,B,z);q.onBeforeShadow(a,q,Y,lt,ot,pt,null),a.renderBufferDirect(lt,null,ot,pt,q,null),q.onAfterShadow(a,q,Y,lt,ot,pt,null)}}}let st=q.children;for(let ot=0,ct=st.length;ot<ct;ot++)H(st[ot],Y,lt,B,z)}function it(q){q.target.removeEventListener("dispose",it);for(let lt in S){let B=S[lt],z=q.target.uuid;if(z in B)B[z].dispose(),delete B[z]}}}var np={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function ip(a,h){function p(){let j=!1,Et=new be,ft=null,gt=new be(0,0,0,0);return{setMask:function(Lt){if(ft!==Lt&&!j)a.colorMask(Lt,Lt,Lt,Lt),ft=Lt},setLocked:function(Lt){j=Lt},setClear:function(Lt,Ft,le,we,Pe){if(Pe===!0)Lt*=we,Ft*=we,le*=we;if(Et.set(Lt,Ft,le,we),gt.equals(Et)===!1)a.clearColor(Lt,Ft,le,we),gt.copy(Et)},reset:function(){j=!1,ft=null,gt.set(-1,0,0,0)}}}function m(){let j=!1,Et=!1,ft=null,gt=null,Lt=null;return{setReversed:function(Ft){if(Et!==Ft){let le=h.get("EXT_clip_control");if(Et)le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT);else le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);let we=Lt;Lt=null,this.setClear(we)}Et=Ft},getReversed:function(){return Et},setTest:function(Ft){if(Ft)Rt(a.DEPTH_TEST);else te(a.DEPTH_TEST)},setMask:function(Ft){if(ft!==Ft&&!j)a.depthMask(Ft),ft=Ft},setFunc:function(Ft){if(Et)Ft=np[Ft];if(gt!==Ft){switch(Ft){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}gt=Ft}},setLocked:function(Ft){j=Ft},setClear:function(Ft){if(Lt!==Ft){if(Et)Ft=1-Ft;a.clearDepth(Ft),Lt=Ft}},reset:function(){j=!1,ft=null,gt=null,Lt=null,Et=!1}}}function g(){let j=!1,Et=null,ft=null,gt=null,Lt=null,Ft=null,le=null,we=null,Pe=null;return{setTest:function(re){if(!j)if(re)Rt(a.STENCIL_TEST);else te(a.STENCIL_TEST)},setMask:function(re){if(Et!==re&&!j)a.stencilMask(re),Et=re},setFunc:function(re,sn,Ke){if(ft!==re||gt!==sn||Lt!==Ke)a.stencilFunc(re,sn,Ke),ft=re,gt=sn,Lt=Ke},setOp:function(re,sn,Ke){if(Ft!==re||le!==sn||we!==Ke)a.stencilOp(re,sn,Ke),Ft=re,le=sn,we=Ke},setLocked:function(re){j=re},setClear:function(re){if(Pe!==re)a.clearStencil(re),Pe=re},reset:function(){j=!1,Et=null,ft=null,gt=null,Lt=null,Ft=null,le=null,we=null,Pe=null}}}let _=new p,y=new m,x=new g,M=new WeakMap,S=new WeakMap,b={},v={},w=new WeakMap,C=[],I=null,D=!1,A=null,R=null,W=null,F=null,H=null,it=null,q=null,Y=new he(0,0,0),lt=0,B=!1,z=null,Q=null,st=null,ot=null,ct=null,pt=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,et=0,Z=a.getParameter(a.VERSION);if(Z.indexOf("WebGL")!==-1)et=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=et>=1;else if(Z.indexOf("OpenGL ES")!==-1)et=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=et>=2;let At=null,U={},Xt=a.getParameter(a.SCISSOR_BOX),Jt=a.getParameter(a.VIEWPORT),dt=new be().fromArray(Xt),bt=new be().fromArray(Jt);function qt(j,Et,ft,gt){let Lt=new Uint8Array(4),Ft=a.createTexture();a.bindTexture(j,Ft),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let le=0;le<ft;le++)if(j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY)a.texImage3D(Et,0,a.RGBA,1,1,gt,0,a.RGBA,a.UNSIGNED_BYTE,Lt);else a.texImage2D(Et+le,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Lt);return Ft}let Ht={};Ht[a.TEXTURE_2D]=qt(a.TEXTURE_2D,a.TEXTURE_2D,1),Ht[a.TEXTURE_CUBE_MAP]=qt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ht[a.TEXTURE_2D_ARRAY]=qt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Ht[a.TEXTURE_3D]=qt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),_.setClear(0,0,0,1),y.setClear(1),x.setClear(0),Rt(a.DEPTH_TEST),y.setFunc(3),kt(!1),vt(1),Rt(a.CULL_FACE),zt(0);function Rt(j){if(b[j]!==!0)a.enable(j),b[j]=!0}function te(j){if(b[j]!==!1)a.disable(j),b[j]=!1}function ae(j,Et){if(v[j]!==Et){if(a.bindFramebuffer(j,Et),v[j]=Et,j===a.DRAW_FRAMEBUFFER)v[a.FRAMEBUFFER]=Et;if(j===a.FRAMEBUFFER)v[a.DRAW_FRAMEBUFFER]=Et;return!0}return!1}function Kt(j,Et){let ft=C,gt=!1;if(j){if(ft=w.get(Et),ft===void 0)ft=[],w.set(Et,ft);let Lt=j.textures;if(ft.length!==Lt.length||ft[0]!==a.COLOR_ATTACHMENT0){for(let Ft=0,le=Lt.length;Ft<le;Ft++)ft[Ft]=a.COLOR_ATTACHMENT0+Ft;ft.length=Lt.length,gt=!0}}else if(ft[0]!==a.BACK)ft[0]=a.BACK,gt=!0;if(gt)a.drawBuffers(ft)}function _t(j){if(I!==j)return a.useProgram(j),I=j,!0;return!1}let Tt={[100]:a.FUNC_ADD,[101]:a.FUNC_SUBTRACT,[102]:a.FUNC_REVERSE_SUBTRACT};Tt[103]=a.MIN,Tt[104]=a.MAX;let V={[200]:a.ZERO,[201]:a.ONE,[202]:a.SRC_COLOR,[204]:a.SRC_ALPHA,[210]:a.SRC_ALPHA_SATURATE,[208]:a.DST_COLOR,[206]:a.DST_ALPHA,[203]:a.ONE_MINUS_SRC_COLOR,[205]:a.ONE_MINUS_SRC_ALPHA,[209]:a.ONE_MINUS_DST_COLOR,[207]:a.ONE_MINUS_DST_ALPHA,[211]:a.CONSTANT_COLOR,[212]:a.ONE_MINUS_CONSTANT_COLOR,[213]:a.CONSTANT_ALPHA,[214]:a.ONE_MINUS_CONSTANT_ALPHA};function zt(j,Et,ft,gt,Lt,Ft,le,we,Pe,re){if(j===0){if(D===!0)te(a.BLEND),D=!1;return}if(D===!1)Rt(a.BLEND),D=!0;if(j!==5){if(j!==A||re!==B){if(R!==100||H!==100)a.blendEquation(a.FUNC_ADD),R=100,H=100;if(re)switch(j){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}W=null,F=null,it=null,q=null,Y.set(0,0,0),lt=0,A=j,B=re}return}if(Lt=Lt||Et,Ft=Ft||ft,le=le||gt,Et!==R||Lt!==H)a.blendEquationSeparate(Tt[Et],Tt[Lt]),R=Et,H=Lt;if(ft!==W||gt!==F||Ft!==it||le!==q)a.blendFuncSeparate(V[ft],V[gt],V[Ft],V[le]),W=ft,F=gt,it=Ft,q=le;if(we.equals(Y)===!1||Pe!==lt)a.blendColor(we.r,we.g,we.b,Pe),Y.copy(we),lt=Pe;A=j,B=!1}function wt(j,Et){j.side===2?te(a.CULL_FACE):Rt(a.CULL_FACE);let ft=j.side===1;if(Et)ft=!ft;kt(ft),j.blending===1&&j.transparent===!1?zt(0):zt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),y.setFunc(j.depthFunc),y.setTest(j.depthTest),y.setMask(j.depthWrite),_.setMask(j.colorWrite);let gt=j.stencilWrite;if(x.setTest(gt),gt)x.setMask(j.stencilWriteMask),x.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),x.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass);Bt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Rt(a.SAMPLE_ALPHA_TO_COVERAGE):te(a.SAMPLE_ALPHA_TO_COVERAGE)}function kt(j){if(z!==j){if(j)a.frontFace(a.CW);else a.frontFace(a.CCW);z=j}}function vt(j){if(j!==0){if(Rt(a.CULL_FACE),j!==Q)if(j===1)a.cullFace(a.BACK);else if(j===2)a.cullFace(a.FRONT);else a.cullFace(a.FRONT_AND_BACK)}else te(a.CULL_FACE);Q=j}function ee(j){if(j!==st){if(J)a.lineWidth(j);st=j}}function Bt(j,Et,ft){if(j){if(Rt(a.POLYGON_OFFSET_FILL),ot!==Et||ct!==ft)a.polygonOffset(Et,ft),ot=Et,ct=ft}else te(a.POLYGON_OFFSET_FILL)}function Gt(j){if(j)Rt(a.SCISSOR_TEST);else te(a.SCISSOR_TEST)}function k(j){if(j===void 0)j=a.TEXTURE0+pt-1;if(At!==j)a.activeTexture(j),At=j}function N(j,Et,ft){if(ft===void 0)if(At===null)ft=a.TEXTURE0+pt-1;else ft=At;let gt=U[ft];if(gt===void 0)gt={type:void 0,texture:void 0},U[ft]=gt;if(gt.type!==j||gt.texture!==Et){if(At!==ft)a.activeTexture(ft),At=ft;a.bindTexture(j,Et||Ht[j]),gt.type=j,gt.texture=Et}}function nt(){let j=U[At];if(j!==void 0&&j.type!==void 0)a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0}function mt(){try{a.compressedTexImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xt(){try{a.compressedTexImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ht(){try{a.texSubImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Zt(){try{a.texSubImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ct(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Nt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ie(){try{a.texStorage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Mt(){try{a.texStorage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ot(){try{a.texImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function oe(){try{a.texImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ne(j){if(dt.equals(j)===!1)a.scissor(j.x,j.y,j.z,j.w),dt.copy(j)}function Pt(j){if(bt.equals(j)===!1)a.viewport(j.x,j.y,j.z,j.w),bt.copy(j)}function se(j,Et){let ft=S.get(Et);if(ft===void 0)ft=new WeakMap,S.set(Et,ft);let gt=ft.get(j);if(gt===void 0)gt=a.getUniformBlockIndex(Et,j.name),ft.set(j,gt)}function de(j,Et){let gt=S.get(Et).get(j);if(M.get(Et)!==gt)a.uniformBlockBinding(Et,gt,j.__bindingPointIndex),M.set(Et,gt)}function xe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),y.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),b={},At=null,U={},v={},w=new WeakMap,C=[],I=null,D=!1,A=null,R=null,W=null,F=null,H=null,it=null,q=null,Y=new he(0,0,0),lt=0,B=!1,z=null,Q=null,st=null,ot=null,ct=null,dt.set(0,0,a.canvas.width,a.canvas.height),bt.set(0,0,a.canvas.width,a.canvas.height),_.reset(),y.reset(),x.reset()}return{buffers:{color:_,depth:y,stencil:x},enable:Rt,disable:te,bindFramebuffer:ae,drawBuffers:Kt,useProgram:_t,setBlending:zt,setMaterial:wt,setFlipSided:kt,setCullFace:vt,setLineWidth:ee,setPolygonOffset:Bt,setScissorTest:Gt,activeTexture:k,bindTexture:N,unbindTexture:nt,compressedTexImage2D:mt,compressedTexImage3D:xt,texImage2D:Ot,texImage3D:oe,updateUBOMapping:se,uniformBlockBinding:de,texStorage2D:ie,texStorage3D:Mt,texSubImage2D:ht,texSubImage3D:Zt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Nt,scissor:ne,viewport:Pt,reset:xe}}function Uo(a,h,p,m){let g=sp(m);switch(p){case 1021:return a*h;case 1024:return a*h;case 1025:return a*h*2;case 1028:return a*h/g.components*g.byteLength;case 1029:return a*h/g.components*g.byteLength;case 1030:return a*h*2/g.components*g.byteLength;case 1031:return a*h*2/g.components*g.byteLength;case 1022:return a*h*3/g.components*g.byteLength;case 1023:return a*h*4/g.components*g.byteLength;case 1033:return a*h*4/g.components*g.byteLength;case 33776:case 33777:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*8;case 33778:case 33779:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 35841:case 35843:return Math.max(a,16)*Math.max(h,8)/4;case 35840:case 35842:return Math.max(a,8)*Math.max(h,8)/2;case 36196:case 37492:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*8;case 37496:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 37808:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 37809:return Math.floor((a+4)/5)*Math.floor((h+3)/4)*16;case 37810:return Math.floor((a+4)/5)*Math.floor((h+4)/5)*16;case 37811:return Math.floor((a+5)/6)*Math.floor((h+4)/5)*16;case 37812:return Math.floor((a+5)/6)*Math.floor((h+5)/6)*16;case 37813:return Math.floor((a+7)/8)*Math.floor((h+4)/5)*16;case 37814:return Math.floor((a+7)/8)*Math.floor((h+5)/6)*16;case 37815:return Math.floor((a+7)/8)*Math.floor((h+7)/8)*16;case 37816:return Math.floor((a+9)/10)*Math.floor((h+4)/5)*16;case 37817:return Math.floor((a+9)/10)*Math.floor((h+5)/6)*16;case 37818:return Math.floor((a+9)/10)*Math.floor((h+7)/8)*16;case 37819:return Math.floor((a+9)/10)*Math.floor((h+9)/10)*16;case 37820:return Math.floor((a+11)/12)*Math.floor((h+9)/10)*16;case 37821:return Math.floor((a+11)/12)*Math.floor((h+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(a/4)*Math.ceil(h/4)*16;case 36283:case 36284:return Math.ceil(a/4)*Math.ceil(h/4)*8;case 36285:case 36286:return Math.ceil(a/4)*Math.ceil(h/4)*16}throw Error(`Unable to determine texture byte length for ${p} format.`)}function sp(a){switch(a){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${a}.`)}function rp(a,h,p,m,g,_,y){let x=h.has("WEBGL_multisampled_render_to_texture")?h.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new St,b=new WeakMap,v,w=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(k){}function I(k,N){return C?new OffscreenCanvas(k,N):ir("canvas")}function D(k,N,nt){let mt=1,xt=Gt(k);if(xt.width>nt||xt.height>nt)mt=nt/Math.max(xt.width,xt.height);if(mt<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let ht=Math.floor(mt*xt.width),Zt=Math.floor(mt*xt.height);if(v===void 0)v=I(ht,Zt);let Ct=N?I(ht,Zt):v;return Ct.width=ht,Ct.height=Zt,Ct.getContext("2d").drawImage(k,0,0,ht,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ht+"x"+Zt+")."),Ct}else{if("data"in k)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+").");return k}return k}function A(k){return k.generateMipmaps}function R(k){a.generateMipmap(k)}function W(k){if(k.isWebGLCubeRenderTarget)return a.TEXTURE_CUBE_MAP;if(k.isWebGL3DRenderTarget)return a.TEXTURE_3D;if(k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture)return a.TEXTURE_2D_ARRAY;return a.TEXTURE_2D}function F(k,N,nt,mt,xt=!1){if(k!==null){if(a[k]!==void 0)return a[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ht=N;if(N===a.RED){if(nt===a.FLOAT)ht=a.R32F;if(nt===a.HALF_FLOAT)ht=a.R16F;if(nt===a.UNSIGNED_BYTE)ht=a.R8}if(N===a.RED_INTEGER){if(nt===a.UNSIGNED_BYTE)ht=a.R8UI;if(nt===a.UNSIGNED_SHORT)ht=a.R16UI;if(nt===a.UNSIGNED_INT)ht=a.R32UI;if(nt===a.BYTE)ht=a.R8I;if(nt===a.SHORT)ht=a.R16I;if(nt===a.INT)ht=a.R32I}if(N===a.RG){if(nt===a.FLOAT)ht=a.RG32F;if(nt===a.HALF_FLOAT)ht=a.RG16F;if(nt===a.UNSIGNED_BYTE)ht=a.RG8}if(N===a.RG_INTEGER){if(nt===a.UNSIGNED_BYTE)ht=a.RG8UI;if(nt===a.UNSIGNED_SHORT)ht=a.RG16UI;if(nt===a.UNSIGNED_INT)ht=a.RG32UI;if(nt===a.BYTE)ht=a.RG8I;if(nt===a.SHORT)ht=a.RG16I;if(nt===a.INT)ht=a.RG32I}if(N===a.RGB_INTEGER){if(nt===a.UNSIGNED_BYTE)ht=a.RGB8UI;if(nt===a.UNSIGNED_SHORT)ht=a.RGB16UI;if(nt===a.UNSIGNED_INT)ht=a.RGB32UI;if(nt===a.BYTE)ht=a.RGB8I;if(nt===a.SHORT)ht=a.RGB16I;if(nt===a.INT)ht=a.RGB32I}if(N===a.RGBA_INTEGER){if(nt===a.UNSIGNED_BYTE)ht=a.RGBA8UI;if(nt===a.UNSIGNED_SHORT)ht=a.RGBA16UI;if(nt===a.UNSIGNED_INT)ht=a.RGBA32UI;if(nt===a.BYTE)ht=a.RGBA8I;if(nt===a.SHORT)ht=a.RGBA16I;if(nt===a.INT)ht=a.RGBA32I}if(N===a.RGB){if(nt===a.UNSIGNED_INT_5_9_9_9_REV)ht=a.RGB9_E5}if(N===a.RGBA){let Zt=xt?"linear":_e.getTransfer(mt);if(nt===a.FLOAT)ht=a.RGBA32F;if(nt===a.HALF_FLOAT)ht=a.RGBA16F;if(nt===a.UNSIGNED_BYTE)ht=Zt==="srgb"?a.SRGB8_ALPHA8:a.RGBA8;if(nt===a.UNSIGNED_SHORT_4_4_4_4)ht=a.RGBA4;if(nt===a.UNSIGNED_SHORT_5_5_5_1)ht=a.RGB5_A1}if(ht===a.R16F||ht===a.R32F||ht===a.RG16F||ht===a.RG32F||ht===a.RGBA16F||ht===a.RGBA32F)h.get("EXT_color_buffer_float");return ht}function H(k,N){let nt;if(k){if(N===null||N===1014||N===1020)nt=a.DEPTH24_STENCIL8;else if(N===1015)nt=a.DEPTH32F_STENCIL8;else if(N===1012)nt=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(N===null||N===1014||N===1020)nt=a.DEPTH_COMPONENT24;else if(N===1015)nt=a.DEPTH_COMPONENT32F;else if(N===1012)nt=a.DEPTH_COMPONENT16;return nt}function it(k,N){if(A(k)===!0||k.isFramebufferTexture&&k.minFilter!==1003&&k.minFilter!==1006)return Math.log2(Math.max(N.width,N.height))+1;else if(k.mipmaps!==void 0&&k.mipmaps.length>0)return k.mipmaps.length;else if(k.isCompressedTexture&&Array.isArray(k.image))return N.mipmaps.length;else return 1}function q(k){let N=k.target;if(N.removeEventListener("dispose",q),lt(N),N.isVideoTexture)b.delete(N)}function Y(k){let N=k.target;N.removeEventListener("dispose",Y),z(N)}function lt(k){let N=m.get(k);if(N.__webglInit===void 0)return;let nt=k.source,mt=w.get(nt);if(mt){let xt=mt[N.__cacheKey];if(xt.usedTimes--,xt.usedTimes===0)B(k);if(Object.keys(mt).length===0)w.delete(nt)}m.remove(k)}function B(k){let N=m.get(k);a.deleteTexture(N.__webglTexture);let nt=k.source,mt=w.get(nt);delete mt[N.__cacheKey],y.memory.textures--}function z(k){let N=m.get(k);if(k.depthTexture)k.depthTexture.dispose(),m.remove(k.depthTexture);if(k.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(N.__webglFramebuffer[mt]))for(let xt=0;xt<N.__webglFramebuffer[mt].length;xt++)a.deleteFramebuffer(N.__webglFramebuffer[mt][xt]);else a.deleteFramebuffer(N.__webglFramebuffer[mt]);if(N.__webglDepthbuffer)a.deleteRenderbuffer(N.__webglDepthbuffer[mt])}else{if(Array.isArray(N.__webglFramebuffer))for(let mt=0;mt<N.__webglFramebuffer.length;mt++)a.deleteFramebuffer(N.__webglFramebuffer[mt]);else a.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer)a.deleteRenderbuffer(N.__webglDepthbuffer);if(N.__webglMultisampledFramebuffer)a.deleteFramebuffer(N.__webglMultisampledFramebuffer);if(N.__webglColorRenderbuffer){for(let mt=0;mt<N.__webglColorRenderbuffer.length;mt++)if(N.__webglColorRenderbuffer[mt])a.deleteRenderbuffer(N.__webglColorRenderbuffer[mt])}if(N.__webglDepthRenderbuffer)a.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let nt=k.textures;for(let mt=0,xt=nt.length;mt<xt;mt++){let ht=m.get(nt[mt]);if(ht.__webglTexture)a.deleteTexture(ht.__webglTexture),y.memory.textures--;m.remove(nt[mt])}m.remove(k)}let Q=0;function st(){Q=0}function ot(){let k=Q;if(k>=g.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+g.maxTextures);return Q+=1,k}function ct(k){let N=[];return N.push(k.wrapS),N.push(k.wrapT),N.push(k.wrapR||0),N.push(k.magFilter),N.push(k.minFilter),N.push(k.anisotropy),N.push(k.internalFormat),N.push(k.format),N.push(k.type),N.push(k.generateMipmaps),N.push(k.premultiplyAlpha),N.push(k.flipY),N.push(k.unpackAlignment),N.push(k.colorSpace),N.join()}function pt(k,N){let nt=m.get(k);if(k.isVideoTexture)ee(k);if(k.isRenderTargetTexture===!1&&k.version>0&&nt.__version!==k.version){let mt=k.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(nt,k,N);return}}p.bindTexture(a.TEXTURE_2D,nt.__webglTexture,a.TEXTURE0+N)}function J(k,N){let nt=m.get(k);if(k.version>0&&nt.__version!==k.version){bt(nt,k,N);return}p.bindTexture(a.TEXTURE_2D_ARRAY,nt.__webglTexture,a.TEXTURE0+N)}function et(k,N){let nt=m.get(k);if(k.version>0&&nt.__version!==k.version){bt(nt,k,N);return}p.bindTexture(a.TEXTURE_3D,nt.__webglTexture,a.TEXTURE0+N)}function Z(k,N){let nt=m.get(k);if(k.version>0&&nt.__version!==k.version){qt(nt,k,N);return}p.bindTexture(a.TEXTURE_CUBE_MAP,nt.__webglTexture,a.TEXTURE0+N)}let At={[1000]:a.REPEAT,[1001]:a.CLAMP_TO_EDGE,[1002]:a.MIRRORED_REPEAT},U={[1003]:a.NEAREST,[1004]:a.NEAREST_MIPMAP_NEAREST,[1005]:a.NEAREST_MIPMAP_LINEAR,[1006]:a.LINEAR,[1007]:a.LINEAR_MIPMAP_NEAREST,[1008]:a.LINEAR_MIPMAP_LINEAR},Xt={[512]:a.NEVER,[519]:a.ALWAYS,[513]:a.LESS,[515]:a.LEQUAL,[514]:a.EQUAL,[518]:a.GEQUAL,[516]:a.GREATER,[517]:a.NOTEQUAL};function Jt(k,N){if(N.type===1015&&h.has("OES_texture_float_linear")===!1&&(N.magFilter===1006||N.magFilter===1007||N.magFilter===1005||N.magFilter===1008||N.minFilter===1006||N.minFilter===1007||N.minFilter===1005||N.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(a.texParameteri(k,a.TEXTURE_WRAP_S,At[N.wrapS]),a.texParameteri(k,a.TEXTURE_WRAP_T,At[N.wrapT]),k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)a.texParameteri(k,a.TEXTURE_WRAP_R,At[N.wrapR]);if(a.texParameteri(k,a.TEXTURE_MAG_FILTER,U[N.magFilter]),a.texParameteri(k,a.TEXTURE_MIN_FILTER,U[N.minFilter]),N.compareFunction)a.texParameteri(k,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(k,a.TEXTURE_COMPARE_FUNC,Xt[N.compareFunction]);if(h.has("EXT_texture_filter_anisotropic")===!0){if(N.magFilter===1003)return;if(N.minFilter!==1005&&N.minFilter!==1008)return;if(N.type===1015&&h.has("OES_texture_float_linear")===!1)return;if(N.anisotropy>1||m.get(N).__currentAnisotropy){let nt=h.get("EXT_texture_filter_anisotropic");a.texParameterf(k,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,g.getMaxAnisotropy())),m.get(N).__currentAnisotropy=N.anisotropy}}}function dt(k,N){let nt=!1;if(k.__webglInit===void 0)k.__webglInit=!0,N.addEventListener("dispose",q);let mt=N.source,xt=w.get(mt);if(xt===void 0)xt={},w.set(mt,xt);let ht=ct(N);if(ht!==k.__cacheKey){if(xt[ht]===void 0)xt[ht]={texture:a.createTexture(),usedTimes:0},y.memory.textures++,nt=!0;xt[ht].usedTimes++;let Zt=xt[k.__cacheKey];if(Zt!==void 0){if(xt[k.__cacheKey].usedTimes--,Zt.usedTimes===0)B(N)}k.__cacheKey=ht,k.__webglTexture=xt[ht].texture}return nt}function bt(k,N,nt){let mt=a.TEXTURE_2D;if(N.isDataArrayTexture||N.isCompressedArrayTexture)mt=a.TEXTURE_2D_ARRAY;if(N.isData3DTexture)mt=a.TEXTURE_3D;let xt=dt(k,N),ht=N.source;p.bindTexture(mt,k.__webglTexture,a.TEXTURE0+nt);let Zt=m.get(ht);if(ht.version!==Zt.__version||xt===!0){p.activeTexture(a.TEXTURE0+nt);let Ct=_e.getPrimaries(_e.workingColorSpace),Nt=N.colorSpace===""?null:_e.getPrimaries(N.colorSpace),ie=N.colorSpace===""||Ct===Nt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,N.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,N.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Mt=D(N.image,!1,g.maxTextureSize);Mt=Bt(N,Mt);let Ot=_.convert(N.format,N.colorSpace),oe=_.convert(N.type),ne=F(N.internalFormat,Ot,oe,N.colorSpace,N.isVideoTexture);Jt(mt,N);let Pt,se=N.mipmaps,de=N.isVideoTexture!==!0,xe=Zt.__version===void 0||xt===!0,j=ht.dataReady,Et=it(N,Mt);if(N.isDepthTexture){if(ne=H(N.format===1027,N.type),xe)if(de)p.texStorage2D(a.TEXTURE_2D,1,ne,Mt.width,Mt.height);else p.texImage2D(a.TEXTURE_2D,0,ne,Mt.width,Mt.height,0,Ot,oe,null)}else if(N.isDataTexture)if(se.length>0){if(de&&xe)p.texStorage2D(a.TEXTURE_2D,Et,ne,se[0].width,se[0].height);for(let ft=0,gt=se.length;ft<gt;ft++)if(Pt=se[ft],de){if(j)p.texSubImage2D(a.TEXTURE_2D,ft,0,0,Pt.width,Pt.height,Ot,oe,Pt.data)}else p.texImage2D(a.TEXTURE_2D,ft,ne,Pt.width,Pt.height,0,Ot,oe,Pt.data);N.generateMipmaps=!1}else if(de){if(xe)p.texStorage2D(a.TEXTURE_2D,Et,ne,Mt.width,Mt.height);if(j)p.texSubImage2D(a.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Ot,oe,Mt.data)}else p.texImage2D(a.TEXTURE_2D,0,ne,Mt.width,Mt.height,0,Ot,oe,Mt.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){if(de&&xe)p.texStorage3D(a.TEXTURE_2D_ARRAY,Et,ne,se[0].width,se[0].height,Mt.depth);for(let ft=0,gt=se.length;ft<gt;ft++)if(Pt=se[ft],N.format!==1023)if(Ot!==null)if(de){if(j)if(N.layerUpdates.size>0){let Lt=Uo(Pt.width,Pt.height,N.format,N.type);for(let Ft of N.layerUpdates){let le=Pt.data.subarray(Ft*Lt/Pt.data.BYTES_PER_ELEMENT,(Ft+1)*Lt/Pt.data.BYTES_PER_ELEMENT);p.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ft,0,0,Ft,Pt.width,Pt.height,1,Ot,le)}N.clearLayerUpdates()}else p.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ft,0,0,0,Pt.width,Pt.height,Mt.depth,Ot,Pt.data)}else p.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ft,ne,Pt.width,Pt.height,Mt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(de){if(j)p.texSubImage3D(a.TEXTURE_2D_ARRAY,ft,0,0,0,Pt.width,Pt.height,Mt.depth,Ot,oe,Pt.data)}else p.texImage3D(a.TEXTURE_2D_ARRAY,ft,ne,Pt.width,Pt.height,Mt.depth,0,Ot,oe,Pt.data)}else{if(de&&xe)p.texStorage2D(a.TEXTURE_2D,Et,ne,se[0].width,se[0].height);for(let ft=0,gt=se.length;ft<gt;ft++)if(Pt=se[ft],N.format!==1023)if(Ot!==null)if(de){if(j)p.compressedTexSubImage2D(a.TEXTURE_2D,ft,0,0,Pt.width,Pt.height,Ot,Pt.data)}else p.compressedTexImage2D(a.TEXTURE_2D,ft,ne,Pt.width,Pt.height,0,Pt.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(de){if(j)p.texSubImage2D(a.TEXTURE_2D,ft,0,0,Pt.width,Pt.height,Ot,oe,Pt.data)}else p.texImage2D(a.TEXTURE_2D,ft,ne,Pt.width,Pt.height,0,Ot,oe,Pt.data)}else if(N.isDataArrayTexture)if(de){if(xe)p.texStorage3D(a.TEXTURE_2D_ARRAY,Et,ne,Mt.width,Mt.height,Mt.depth);if(j)if(N.layerUpdates.size>0){let ft=Uo(Mt.width,Mt.height,N.format,N.type);for(let gt of N.layerUpdates){let Lt=Mt.data.subarray(gt*ft/Mt.data.BYTES_PER_ELEMENT,(gt+1)*ft/Mt.data.BYTES_PER_ELEMENT);p.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,Ot,oe,Lt)}N.clearLayerUpdates()}else p.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ot,oe,Mt.data)}else p.texImage3D(a.TEXTURE_2D_ARRAY,0,ne,Mt.width,Mt.height,Mt.depth,0,Ot,oe,Mt.data);else if(N.isData3DTexture)if(de){if(xe)p.texStorage3D(a.TEXTURE_3D,Et,ne,Mt.width,Mt.height,Mt.depth);if(j)p.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ot,oe,Mt.data)}else p.texImage3D(a.TEXTURE_3D,0,ne,Mt.width,Mt.height,Mt.depth,0,Ot,oe,Mt.data);else if(N.isFramebufferTexture){if(xe)if(de)p.texStorage2D(a.TEXTURE_2D,Et,ne,Mt.width,Mt.height);else{let ft=Mt.width,gt=Mt.height;for(let Lt=0;Lt<Et;Lt++)p.texImage2D(a.TEXTURE_2D,Lt,ne,ft,gt,0,Ot,oe,null),ft>>=1,gt>>=1}}else if(se.length>0){if(de&&xe){let ft=Gt(se[0]);p.texStorage2D(a.TEXTURE_2D,Et,ne,ft.width,ft.height)}for(let ft=0,gt=se.length;ft<gt;ft++)if(Pt=se[ft],de){if(j)p.texSubImage2D(a.TEXTURE_2D,ft,0,0,Ot,oe,Pt)}else p.texImage2D(a.TEXTURE_2D,ft,ne,Ot,oe,Pt);N.generateMipmaps=!1}else if(de){if(xe){let ft=Gt(Mt);p.texStorage2D(a.TEXTURE_2D,Et,ne,ft.width,ft.height)}if(j)p.texSubImage2D(a.TEXTURE_2D,0,0,0,Ot,oe,Mt)}else p.texImage2D(a.TEXTURE_2D,0,ne,Ot,oe,Mt);if(A(N))R(mt);if(Zt.__version=ht.version,N.onUpdate)N.onUpdate(N)}k.__version=N.version}function qt(k,N,nt){if(N.image.length!==6)return;let mt=dt(k,N),xt=N.source;p.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+nt);let ht=m.get(xt);if(xt.version!==ht.__version||mt===!0){p.activeTexture(a.TEXTURE0+nt);let Zt=_e.getPrimaries(_e.workingColorSpace),Ct=N.colorSpace===""?null:_e.getPrimaries(N.colorSpace),Nt=N.colorSpace===""||Zt===Ct?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,N.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,N.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let ie=N.isCompressedTexture||N.image[0].isCompressedTexture,Mt=N.image[0]&&N.image[0].isDataTexture,Ot=[];for(let gt=0;gt<6;gt++){if(!ie&&!Mt)Ot[gt]=D(N.image[gt],!0,g.maxCubemapSize);else Ot[gt]=Mt?N.image[gt].image:N.image[gt];Ot[gt]=Bt(N,Ot[gt])}let oe=Ot[0],ne=_.convert(N.format,N.colorSpace),Pt=_.convert(N.type),se=F(N.internalFormat,ne,Pt,N.colorSpace),de=N.isVideoTexture!==!0,xe=ht.__version===void 0||mt===!0,j=xt.dataReady,Et=it(N,oe);Jt(a.TEXTURE_CUBE_MAP,N);let ft;if(ie){if(de&&xe)p.texStorage2D(a.TEXTURE_CUBE_MAP,Et,se,oe.width,oe.height);for(let gt=0;gt<6;gt++){ft=Ot[gt].mipmaps;for(let Lt=0;Lt<ft.length;Lt++){let Ft=ft[Lt];if(N.format!==1023)if(ne!==null)if(de){if(j)p.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,0,0,Ft.width,Ft.height,ne,Ft.data)}else p.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,se,Ft.width,Ft.height,0,Ft.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(de){if(j)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,0,0,Ft.width,Ft.height,ne,Pt,Ft.data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,se,Ft.width,Ft.height,0,ne,Pt,Ft.data)}}}else{if(ft=N.mipmaps,de&&xe){if(ft.length>0)Et++;let gt=Gt(Ot[0]);p.texStorage2D(a.TEXTURE_CUBE_MAP,Et,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){if(de){if(j)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot[gt].width,Ot[gt].height,ne,Pt,Ot[gt].data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Ot[gt].width,Ot[gt].height,0,ne,Pt,Ot[gt].data);for(let Lt=0;Lt<ft.length;Lt++){let le=ft[Lt].image[gt].image;if(de){if(j)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,0,0,le.width,le.height,ne,Pt,le.data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,se,le.width,le.height,0,ne,Pt,le.data)}}else{if(de){if(j)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ne,Pt,Ot[gt])}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,ne,Pt,Ot[gt]);for(let Lt=0;Lt<ft.length;Lt++){let Ft=ft[Lt];if(de){if(j)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,0,0,ne,Pt,Ft.image[gt])}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,se,ne,Pt,Ft.image[gt])}}}if(A(N))R(a.TEXTURE_CUBE_MAP);if(ht.__version=xt.version,N.onUpdate)N.onUpdate(N)}k.__version=N.version}function Ht(k,N,nt,mt,xt,ht){let Zt=_.convert(nt.format,nt.colorSpace),Ct=_.convert(nt.type),Nt=F(nt.internalFormat,Zt,Ct,nt.colorSpace),ie=m.get(N),Mt=m.get(nt);if(Mt.__renderTarget=N,!ie.__hasExternalTextures){let Ot=Math.max(1,N.width>>ht),oe=Math.max(1,N.height>>ht);if(xt===a.TEXTURE_3D||xt===a.TEXTURE_2D_ARRAY)p.texImage3D(xt,ht,Nt,Ot,oe,N.depth,0,Zt,Ct,null);else p.texImage2D(xt,ht,Nt,Ot,oe,0,Zt,Ct,null)}if(p.bindFramebuffer(a.FRAMEBUFFER,k),vt(N))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,mt,xt,Mt.__webglTexture,0,kt(N));else if(xt===a.TEXTURE_2D||xt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)a.framebufferTexture2D(a.FRAMEBUFFER,mt,xt,Mt.__webglTexture,ht);p.bindFramebuffer(a.FRAMEBUFFER,null)}function Rt(k,N,nt){if(a.bindRenderbuffer(a.RENDERBUFFER,k),N.depthBuffer){let mt=N.depthTexture,xt=mt&&mt.isDepthTexture?mt.type:null,ht=H(N.stencilBuffer,xt),Zt=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ct=kt(N);if(vt(N))x.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ct,ht,N.width,N.height);else if(nt)a.renderbufferStorageMultisample(a.RENDERBUFFER,Ct,ht,N.width,N.height);else a.renderbufferStorage(a.RENDERBUFFER,ht,N.width,N.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,Zt,a.RENDERBUFFER,k)}else{let mt=N.textures;for(let xt=0;xt<mt.length;xt++){let ht=mt[xt],Zt=_.convert(ht.format,ht.colorSpace),Ct=_.convert(ht.type),Nt=F(ht.internalFormat,Zt,Ct,ht.colorSpace),ie=kt(N);if(nt&&vt(N)===!1)a.renderbufferStorageMultisample(a.RENDERBUFFER,ie,Nt,N.width,N.height);else if(vt(N))x.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ie,Nt,N.width,N.height);else a.renderbufferStorage(a.RENDERBUFFER,Nt,N.width,N.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function te(k,N){if(N&&N.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(p.bindFramebuffer(a.FRAMEBUFFER,k),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let mt=m.get(N.depthTexture);if(mt.__renderTarget=N,!mt.__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0;pt(N.depthTexture,0);let xt=mt.__webglTexture,ht=kt(N);if(N.depthTexture.format===1026)if(vt(N))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,xt,0,ht);else a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,xt,0);else if(N.depthTexture.format===1027)if(vt(N))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,xt,0,ht);else a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,xt,0);else throw Error("Unknown depthTexture format")}function ae(k){let N=m.get(k),nt=k.isWebGLCubeRenderTarget===!0;if(N.__boundDepthTexture!==k.depthTexture){let mt=k.depthTexture;if(N.__depthDisposeCallback)N.__depthDisposeCallback();if(mt){let xt=()=>{delete N.__boundDepthTexture,delete N.__depthDisposeCallback,mt.removeEventListener("dispose",xt)};mt.addEventListener("dispose",xt),N.__depthDisposeCallback=xt}N.__boundDepthTexture=mt}if(k.depthTexture&&!N.__autoAllocateDepthBuffer){if(nt)throw Error("target.depthTexture not supported in Cube render targets");te(N.__webglFramebuffer,k)}else if(nt){N.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(p.bindFramebuffer(a.FRAMEBUFFER,N.__webglFramebuffer[mt]),N.__webglDepthbuffer[mt]===void 0)N.__webglDepthbuffer[mt]=a.createRenderbuffer(),Rt(N.__webglDepthbuffer[mt],k,!1);else{let xt=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ht=N.__webglDepthbuffer[mt];a.bindRenderbuffer(a.RENDERBUFFER,ht),a.framebufferRenderbuffer(a.FRAMEBUFFER,xt,a.RENDERBUFFER,ht)}}else if(p.bindFramebuffer(a.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer===void 0)N.__webglDepthbuffer=a.createRenderbuffer(),Rt(N.__webglDepthbuffer,k,!1);else{let mt=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xt=N.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,xt),a.framebufferRenderbuffer(a.FRAMEBUFFER,mt,a.RENDERBUFFER,xt)}p.bindFramebuffer(a.FRAMEBUFFER,null)}function Kt(k,N,nt){let mt=m.get(k);if(N!==void 0)Ht(mt.__webglFramebuffer,k,k.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0);if(nt!==void 0)ae(k)}function _t(k){let N=k.texture,nt=m.get(k),mt=m.get(N);k.addEventListener("dispose",Y);let xt=k.textures,ht=k.isWebGLCubeRenderTarget===!0,Zt=xt.length>1;if(!Zt){if(mt.__webglTexture===void 0)mt.__webglTexture=a.createTexture();mt.__version=N.version,y.memory.textures++}if(ht){nt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(N.mipmaps&&N.mipmaps.length>0){nt.__webglFramebuffer[Ct]=[];for(let Nt=0;Nt<N.mipmaps.length;Nt++)nt.__webglFramebuffer[Ct][Nt]=a.createFramebuffer()}else nt.__webglFramebuffer[Ct]=a.createFramebuffer()}else{if(N.mipmaps&&N.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ct=0;Ct<N.mipmaps.length;Ct++)nt.__webglFramebuffer[Ct]=a.createFramebuffer()}else nt.__webglFramebuffer=a.createFramebuffer();if(Zt)for(let Ct=0,Nt=xt.length;Ct<Nt;Ct++){let ie=m.get(xt[Ct]);if(ie.__webglTexture===void 0)ie.__webglTexture=a.createTexture(),y.memory.textures++}if(k.samples>0&&vt(k)===!1){nt.__webglMultisampledFramebuffer=a.createFramebuffer(),nt.__webglColorRenderbuffer=[],p.bindFramebuffer(a.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){let Nt=xt[Ct];nt.__webglColorRenderbuffer[Ct]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct]);let ie=_.convert(Nt.format,Nt.colorSpace),Mt=_.convert(Nt.type),Ot=F(Nt.internalFormat,ie,Mt,Nt.colorSpace,k.isXRRenderTarget===!0),oe=kt(k);a.renderbufferStorageMultisample(a.RENDERBUFFER,oe,Ot,k.width,k.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ct,a.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct])}if(a.bindRenderbuffer(a.RENDERBUFFER,null),k.depthBuffer)nt.__webglDepthRenderbuffer=a.createRenderbuffer(),Rt(nt.__webglDepthRenderbuffer,k,!0);p.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ht){p.bindTexture(a.TEXTURE_CUBE_MAP,mt.__webglTexture),Jt(a.TEXTURE_CUBE_MAP,N);for(let Ct=0;Ct<6;Ct++)if(N.mipmaps&&N.mipmaps.length>0)for(let Nt=0;Nt<N.mipmaps.length;Nt++)Ht(nt.__webglFramebuffer[Ct][Nt],k,N,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Nt);else Ht(nt.__webglFramebuffer[Ct],k,N,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);if(A(N))R(a.TEXTURE_CUBE_MAP);p.unbindTexture()}else if(Zt){for(let Ct=0,Nt=xt.length;Ct<Nt;Ct++){let ie=xt[Ct],Mt=m.get(ie);if(p.bindTexture(a.TEXTURE_2D,Mt.__webglTexture),Jt(a.TEXTURE_2D,ie),Ht(nt.__webglFramebuffer,k,ie,a.COLOR_ATTACHMENT0+Ct,a.TEXTURE_2D,0),A(ie))R(a.TEXTURE_2D)}p.unbindTexture()}else{let Ct=a.TEXTURE_2D;if(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)Ct=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY;if(p.bindTexture(Ct,mt.__webglTexture),Jt(Ct,N),N.mipmaps&&N.mipmaps.length>0)for(let Nt=0;Nt<N.mipmaps.length;Nt++)Ht(nt.__webglFramebuffer[Nt],k,N,a.COLOR_ATTACHMENT0,Ct,Nt);else Ht(nt.__webglFramebuffer,k,N,a.COLOR_ATTACHMENT0,Ct,0);if(A(N))R(Ct);p.unbindTexture()}if(k.depthBuffer)ae(k)}function Tt(k){let N=k.textures;for(let nt=0,mt=N.length;nt<mt;nt++){let xt=N[nt];if(A(xt)){let ht=W(k),Zt=m.get(xt).__webglTexture;p.bindTexture(ht,Zt),R(ht),p.unbindTexture()}}}let V=[],zt=[];function wt(k){if(k.samples>0){if(vt(k)===!1){let{textures:N,width:nt,height:mt}=k,xt=a.COLOR_BUFFER_BIT,ht=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Zt=m.get(k),Ct=N.length>1;if(Ct)for(let Nt=0;Nt<N.length;Nt++)p.bindFramebuffer(a.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Nt,a.RENDERBUFFER,null),p.bindFramebuffer(a.FRAMEBUFFER,Zt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Nt,a.TEXTURE_2D,null,0);p.bindFramebuffer(a.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),p.bindFramebuffer(a.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Nt=0;Nt<N.length;Nt++){if(k.resolveDepthBuffer){if(k.depthBuffer)xt|=a.DEPTH_BUFFER_BIT;if(k.stencilBuffer&&k.resolveStencilBuffer)xt|=a.STENCIL_BUFFER_BIT}if(Ct){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Zt.__webglColorRenderbuffer[Nt]);let ie=m.get(N[Nt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ie,0)}if(a.blitFramebuffer(0,0,nt,mt,0,0,nt,mt,xt,a.NEAREST),M===!0){if(V.length=0,zt.length=0,V.push(a.COLOR_ATTACHMENT0+Nt),k.depthBuffer&&k.resolveDepthBuffer===!1)V.push(ht),zt.push(ht),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,zt);a.invalidateFramebuffer(a.READ_FRAMEBUFFER,V)}}if(p.bindFramebuffer(a.READ_FRAMEBUFFER,null),p.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ct)for(let Nt=0;Nt<N.length;Nt++){p.bindFramebuffer(a.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Nt,a.RENDERBUFFER,Zt.__webglColorRenderbuffer[Nt]);let ie=m.get(N[Nt]).__webglTexture;p.bindFramebuffer(a.FRAMEBUFFER,Zt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Nt,a.TEXTURE_2D,ie,0)}p.bindFramebuffer(a.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&M){let N=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[N])}}}function kt(k){return Math.min(g.maxSamples,k.samples)}function vt(k){let N=m.get(k);return k.samples>0&&h.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function ee(k){let N=y.render.frame;if(b.get(k)!==N)b.set(k,N),k.update()}function Bt(k,N){let{colorSpace:nt,format:mt,type:xt}=k;if(k.isCompressedTexture===!0||k.isVideoTexture===!0)return N;if(nt!=="srgb-linear"&&nt!=="")if(_e.getTransfer(nt)==="srgb"){if(mt!==1023||xt!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",nt);return N}function Gt(k){if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement)S.width=k.naturalWidth||k.width,S.height=k.naturalHeight||k.height;else if(typeof VideoFrame<"u"&&k instanceof VideoFrame)S.width=k.displayWidth,S.height=k.displayHeight;else S.width=k.width,S.height=k.height;return S}this.allocateTextureUnit=ot,this.resetTextureUnits=st,this.setTexture2D=pt,this.setTexture2DArray=J,this.setTexture3D=et,this.setTextureCube=Z,this.rebindTextures=Kt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=vt}function ap(a,h){function p(m,g=""){let _,y=_e.getTransfer(g);if(m===1009)return a.UNSIGNED_BYTE;if(m===1017)return a.UNSIGNED_SHORT_4_4_4_4;if(m===1018)return a.UNSIGNED_SHORT_5_5_5_1;if(m===35902)return a.UNSIGNED_INT_5_9_9_9_REV;if(m===1010)return a.BYTE;if(m===1011)return a.SHORT;if(m===1012)return a.UNSIGNED_SHORT;if(m===1013)return a.INT;if(m===1014)return a.UNSIGNED_INT;if(m===1015)return a.FLOAT;if(m===1016)return a.HALF_FLOAT;if(m===1021)return a.ALPHA;if(m===1022)return a.RGB;if(m===1023)return a.RGBA;if(m===1024)return a.LUMINANCE;if(m===1025)return a.LUMINANCE_ALPHA;if(m===1026)return a.DEPTH_COMPONENT;if(m===1027)return a.DEPTH_STENCIL;if(m===1028)return a.RED;if(m===1029)return a.RED_INTEGER;if(m===1030)return a.RG;if(m===1031)return a.RG_INTEGER;if(m===1033)return a.RGBA_INTEGER;if(m===33776||m===33777||m===33778||m===33779)if(y==="srgb")if(_=h.get("WEBGL_compressed_texture_s3tc_srgb"),_!==null){if(m===33776)return _.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(_=h.get("WEBGL_compressed_texture_s3tc"),_!==null){if(m===33776)return _.COMPRESSED_RGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(m===35840||m===35841||m===35842||m===35843)if(_=h.get("WEBGL_compressed_texture_pvrtc"),_!==null){if(m===35840)return _.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(m===35841)return _.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(m===35842)return _.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(m===35843)return _.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(m===36196||m===37492||m===37496)if(_=h.get("WEBGL_compressed_texture_etc"),_!==null){if(m===36196||m===37492)return y==="srgb"?_.COMPRESSED_SRGB8_ETC2:_.COMPRESSED_RGB8_ETC2;if(m===37496)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:_.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(m===37808||m===37809||m===37810||m===37811||m===37812||m===37813||m===37814||m===37815||m===37816||m===37817||m===37818||m===37819||m===37820||m===37821)if(_=h.get("WEBGL_compressed_texture_astc"),_!==null){if(m===37808)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:_.COMPRESSED_RGBA_ASTC_4x4_KHR;if(m===37809)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:_.COMPRESSED_RGBA_ASTC_5x4_KHR;if(m===37810)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:_.COMPRESSED_RGBA_ASTC_5x5_KHR;if(m===37811)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:_.COMPRESSED_RGBA_ASTC_6x5_KHR;if(m===37812)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:_.COMPRESSED_RGBA_ASTC_6x6_KHR;if(m===37813)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:_.COMPRESSED_RGBA_ASTC_8x5_KHR;if(m===37814)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:_.COMPRESSED_RGBA_ASTC_8x6_KHR;if(m===37815)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:_.COMPRESSED_RGBA_ASTC_8x8_KHR;if(m===37816)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:_.COMPRESSED_RGBA_ASTC_10x5_KHR;if(m===37817)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:_.COMPRESSED_RGBA_ASTC_10x6_KHR;if(m===37818)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:_.COMPRESSED_RGBA_ASTC_10x8_KHR;if(m===37819)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:_.COMPRESSED_RGBA_ASTC_10x10_KHR;if(m===37820)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:_.COMPRESSED_RGBA_ASTC_12x10_KHR;if(m===37821)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:_.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(m===36492||m===36494||m===36495)if(_=h.get("EXT_texture_compression_bptc"),_!==null){if(m===36492)return y==="srgb"?_.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:_.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(m===36494)return _.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(m===36495)return _.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(m===36283||m===36284||m===36285||m===36286)if(_=h.get("EXT_texture_compression_rgtc"),_!==null){if(m===36492)return _.COMPRESSED_RED_RGTC1_EXT;if(m===36284)return _.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(m===36285)return _.COMPRESSED_RED_GREEN_RGTC2_EXT;if(m===36286)return _.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(m===1020)return a.UNSIGNED_INT_24_8;return a[m]!==void 0?a[m]:null}return{convert:p}}class vl extends $e{constructor(a=[]){super();this.isArrayCamera=!0,this.cameras=a}}class Ut extends ze{constructor(){super();this.isGroup=!0,this.type="Group"}}var op={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X;return this._grip}dispatchEvent(a){if(this._targetRay!==null)this._targetRay.dispatchEvent(a);if(this._grip!==null)this._grip.dispatchEvent(a);if(this._hand!==null)this._hand.dispatchEvent(a);return this}connect(a){if(a&&a.hand){let h=this._hand;if(h)for(let p of a.hand.values())this._getHandJoint(h,p)}return this.dispatchEvent({type:"connected",data:a}),this}disconnect(a){if(this.dispatchEvent({type:"disconnected",data:a}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(a,h,p){let m=null,g=null,_=null,y=this._targetRay,x=this._grip,M=this._hand;if(a&&h.session.visibilityState!=="visible-blurred"){if(M&&a.hand){_=!0;for(let I of a.hand.values()){let D=h.getJointPose(I,p),A=this._getHandJoint(M,I);if(D!==null)A.matrix.fromArray(D.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=D.radius;A.visible=D!==null}let S=M.joints["index-finger-tip"],b=M.joints["thumb-tip"],v=S.position.distanceTo(b.position),w=0.02,C=0.005;if(M.inputState.pinching&&v>w+C)M.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:a.handedness,target:this});else if(!M.inputState.pinching&&v<=w-C)M.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:a.handedness,target:this})}else if(x!==null&&a.gripSpace){if(g=h.getPose(a.gripSpace,p),g!==null){if(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,g.linearVelocity)x.hasLinearVelocity=!0,x.linearVelocity.copy(g.linearVelocity);else x.hasLinearVelocity=!1;if(g.angularVelocity)x.hasAngularVelocity=!0,x.angularVelocity.copy(g.angularVelocity);else x.hasAngularVelocity=!1}}if(y!==null){if(m=h.getPose(a.targetRaySpace,p),m===null&&g!==null)m=g;if(m!==null){if(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,m.linearVelocity)y.hasLinearVelocity=!0,y.linearVelocity.copy(m.linearVelocity);else y.hasLinearVelocity=!1;if(m.angularVelocity)y.hasAngularVelocity=!0,y.angularVelocity.copy(m.angularVelocity);else y.hasAngularVelocity=!1;this.dispatchEvent(op)}}}if(y!==null)y.visible=m!==null;if(x!==null)x.visible=g!==null;if(M!==null)M.visible=_!==null;return this}_getHandJoint(a,h){if(a.joints[h.jointName]===void 0){let p=new Ut;p.matrixAutoUpdate=!1,p.visible=!1,a.joints[h.jointName]=p,a.add(p)}return a.joints[h.jointName]}}var lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cp=`
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

}`;class Ml{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(a,h,p){if(this.texture===null){let m=new qe,g=a.properties.get(m);if(g.__webglTexture=h.texture,h.depthNear!=p.depthNear||h.depthFar!=p.depthFar)this.depthNear=h.depthNear,this.depthFar=h.depthFar;this.texture=m}}getMesh(a){if(this.texture!==null){if(this.mesh===null){let h=a.cameras[0].viewport,p=new Nn({vertexShader:lp,fragmentShader:cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:h.z},depthHeight:{value:h.w}}});this.mesh=new Qt(new Kn(20,20),p)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sl extends Jn{constructor(a,h){super();let p=this,m=null,g=1,_=null,y="local-floor",x=1,M=null,S=null,b=null,v=null,w=null,C=null,I=new Ml,D=h.getContextAttributes(),A=null,R=null,W=[],F=[],H=new St,it=null,q=new $e;q.viewport=new be;let Y=new $e;Y.viewport=new be;let lt=[q,Y],B=new vl,z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let bt=W[dt];if(bt===void 0)bt=new nr,W[dt]=bt;return bt.getTargetRaySpace()},this.getControllerGrip=function(dt){let bt=W[dt];if(bt===void 0)bt=new nr,W[dt]=bt;return bt.getGripSpace()},this.getHand=function(dt){let bt=W[dt];if(bt===void 0)bt=new nr,W[dt]=bt;return bt.getHandSpace()};function st(dt){let bt=F.indexOf(dt.inputSource);if(bt===-1)return;let qt=W[bt];if(qt!==void 0)qt.update(dt.inputSource,dt.frame,M||_),qt.dispatchEvent({type:dt.type,data:dt.inputSource})}function ot(){m.removeEventListener("select",st),m.removeEventListener("selectstart",st),m.removeEventListener("selectend",st),m.removeEventListener("squeeze",st),m.removeEventListener("squeezestart",st),m.removeEventListener("squeezeend",st),m.removeEventListener("end",ot),m.removeEventListener("inputsourceschange",ct);for(let dt=0;dt<W.length;dt++){let bt=F[dt];if(bt===null)continue;F[dt]=null,W[dt].disconnect(bt)}z=null,Q=null,I.reset(),a.setRenderTarget(A),w=null,v=null,b=null,m=null,R=null,Jt.stop(),p.isPresenting=!1,a.setPixelRatio(it),a.setSize(H.width,H.height,!1),p.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){if(g=dt,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){if(y=dt,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return M||_},this.setReferenceSpace=function(dt){M=dt},this.getBaseLayer=function(){return v!==null?v:w},this.getBinding=function(){return b},this.getFrame=function(){return C},this.getSession=function(){return m},this.setSession=async function(dt){if(m=dt,m!==null){if(A=a.getRenderTarget(),m.addEventListener("select",st),m.addEventListener("selectstart",st),m.addEventListener("selectend",st),m.addEventListener("squeeze",st),m.addEventListener("squeezestart",st),m.addEventListener("squeezeend",st),m.addEventListener("end",ot),m.addEventListener("inputsourceschange",ct),D.xrCompatible!==!0)await h.makeXRCompatible();if(it=a.getPixelRatio(),a.getSize(H),m.renderState.layers===void 0){let bt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:g};w=new XRWebGLLayer(m,h,bt),m.updateRenderState({baseLayer:w}),a.setPixelRatio(1),a.setSize(w.framebufferWidth,w.framebufferHeight,!1),R=new Zn(w.framebufferWidth,w.framebufferHeight,{format:1023,type:1009,colorSpace:a.outputColorSpace,stencilBuffer:D.stencil})}else{let bt=null,qt=null,Ht=null;if(D.depth)Ht=D.stencil?h.DEPTH24_STENCIL8:h.DEPTH_COMPONENT24,bt=D.stencil?1027:1026,qt=D.stencil?1020:1014;let Rt={colorFormat:h.RGBA8,depthFormat:Ht,scaleFactor:g};b=new XRWebGLBinding(m,h),v=b.createProjectionLayer(Rt),m.updateRenderState({layers:[v]}),a.setPixelRatio(1),a.setSize(v.textureWidth,v.textureHeight,!1),R=new Zn(v.textureWidth,v.textureHeight,{format:1023,type:1009,depthTexture:new ga(v.textureWidth,v.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:D.stencil,colorSpace:a.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(x),M=null,_=await m.requestReferenceSpace(y),Jt.setContext(m),Jt.start(),p.isPresenting=!0,p.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(m!==null)return m.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function ct(dt){for(let bt=0;bt<dt.removed.length;bt++){let qt=dt.removed[bt],Ht=F.indexOf(qt);if(Ht>=0)F[Ht]=null,W[Ht].disconnect(qt)}for(let bt=0;bt<dt.added.length;bt++){let qt=dt.added[bt],Ht=F.indexOf(qt);if(Ht===-1){for(let te=0;te<W.length;te++)if(te>=F.length){F.push(qt),Ht=te;break}else if(F[te]===null){F[te]=qt,Ht=te;break}if(Ht===-1)break}let Rt=W[Ht];if(Rt)Rt.connect(qt)}}let pt=new X,J=new X;function et(dt,bt,qt){pt.setFromMatrixPosition(bt.matrixWorld),J.setFromMatrixPosition(qt.matrixWorld);let Ht=pt.distanceTo(J),Rt=bt.projectionMatrix.elements,te=qt.projectionMatrix.elements,ae=Rt[14]/(Rt[10]-1),Kt=Rt[14]/(Rt[10]+1),_t=(Rt[9]+1)/Rt[5],Tt=(Rt[9]-1)/Rt[5],V=(Rt[8]-1)/Rt[0],zt=(te[8]+1)/te[0],wt=ae*V,kt=ae*zt,vt=Ht/(-V+zt),ee=vt*-V;if(bt.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(ee),dt.translateZ(vt),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),Rt[10]===-1)dt.projectionMatrix.copy(bt.projectionMatrix),dt.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let Bt=ae+vt,Gt=Kt+vt,k=wt-ee,N=kt+(Ht-ee),nt=_t*Kt/Gt*Bt,mt=Tt*Kt/Gt*Bt;dt.projectionMatrix.makePerspective(k,N,nt,mt,Bt,Gt),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function Z(dt,bt){if(bt===null)dt.matrixWorld.copy(dt.matrix);else dt.matrixWorld.multiplyMatrices(bt.matrixWorld,dt.matrix);dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(m===null)return;let{near:bt,far:qt}=dt;if(I.texture!==null){if(I.depthNear>0)bt=I.depthNear;if(I.depthFar>0)qt=I.depthFar}if(B.near=Y.near=q.near=bt,B.far=Y.far=q.far=qt,z!==B.near||Q!==B.far)m.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,Q=B.far;q.layers.mask=dt.layers.mask|2,Y.layers.mask=dt.layers.mask|4,B.layers.mask=q.layers.mask|Y.layers.mask;let Ht=dt.parent,Rt=B.cameras;Z(B,Ht);for(let te=0;te<Rt.length;te++)Z(Rt[te],Ht);if(Rt.length===2)et(B,q,Y);else B.projectionMatrix.copy(q.projectionMatrix);At(dt,B,Ht)};function At(dt,bt,qt){if(qt===null)dt.matrix.copy(bt.matrixWorld);else dt.matrix.copy(qt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(bt.matrixWorld);if(dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(bt.projectionMatrix),dt.projectionMatrixInverse.copy(bt.projectionMatrixInverse),dt.isPerspectiveCamera)dt.fov=ls*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1}this.getCamera=function(){return B},this.getFoveation=function(){if(v===null&&w===null)return;return x},this.setFoveation=function(dt){if(x=dt,v!==null)v.fixedFoveation=dt;if(w!==null&&w.fixedFoveation!==void 0)w.fixedFoveation=dt},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(B)};let U=null;function Xt(dt,bt){if(S=bt.getViewerPose(M||_),C=bt,S!==null){let qt=S.views;if(w!==null)a.setRenderTargetFramebuffer(R,w.framebuffer),a.setRenderTarget(R);let Ht=!1;if(qt.length!==B.cameras.length)B.cameras.length=0,Ht=!0;for(let te=0;te<qt.length;te++){let ae=qt[te],Kt=null;if(w!==null)Kt=w.getViewport(ae);else{let Tt=b.getViewSubImage(v,ae);if(Kt=Tt.viewport,te===0)a.setRenderTargetTextures(R,Tt.colorTexture,v.ignoreDepthValues?void 0:Tt.depthStencilTexture),a.setRenderTarget(R)}let _t=lt[te];if(_t===void 0)_t=new $e,_t.layers.enable(te),_t.viewport=new be,lt[te]=_t;if(_t.matrix.fromArray(ae.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(ae.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),te===0)B.matrix.copy(_t.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);if(Ht===!0)B.cameras.push(_t)}let Rt=m.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let te=b.getDepthInformation(qt[0]);if(te&&te.isValid&&te.texture)I.init(a,te,m.renderState)}}for(let qt=0;qt<W.length;qt++){let Ht=F[qt],Rt=W[qt];if(Ht!==null&&Rt!==void 0)Rt.update(Ht,bt,M||_)}if(U)U(dt,bt);if(bt.detectedPlanes)p.dispatchEvent({type:"planesdetected",data:bt});C=null}let Jt=new ll;Jt.setAnimationLoop(Xt),this.setAnimationLoop=function(dt){U=dt},this.dispose=function(){}}}var li=new bn,hp=new ye;function up(a,h){function p(A,R){if(A.matrixAutoUpdate===!0)A.updateMatrix();R.value.copy(A.matrix)}function m(A,R){if(R.color.getRGB(A.fogColor.value,rl(a)),R.isFog)A.fogNear.value=R.near,A.fogFar.value=R.far;else if(R.isFogExp2)A.fogDensity.value=R.density}function g(A,R,W,F,H){if(R.isMeshBasicMaterial)_(A,R);else if(R.isMeshLambertMaterial)_(A,R);else if(R.isMeshToonMaterial)_(A,R),v(A,R);else if(R.isMeshPhongMaterial)_(A,R),b(A,R);else if(R.isMeshStandardMaterial){if(_(A,R),w(A,R),R.isMeshPhysicalMaterial)C(A,R,H)}else if(R.isMeshMatcapMaterial)_(A,R),I(A,R);else if(R.isMeshDepthMaterial)_(A,R);else if(R.isMeshDistanceMaterial)_(A,R),D(A,R);else if(R.isMeshNormalMaterial)_(A,R);else if(R.isLineBasicMaterial){if(y(A,R),R.isLineDashedMaterial)x(A,R)}else if(R.isPointsMaterial)M(A,R,W,F);else if(R.isSpriteMaterial)S(A,R);else if(R.isShadowMaterial)A.color.value.copy(R.color),A.opacity.value=R.opacity;else if(R.isShaderMaterial)R.uniformsNeedUpdate=!1}function _(A,R){if(A.opacity.value=R.opacity,R.color)A.diffuse.value.copy(R.color);if(R.emissive)A.emissive.value.copy(R.emissive).multiplyScalar(R.emissiveIntensity);if(R.map)A.map.value=R.map,p(R.map,A.mapTransform);if(R.alphaMap)A.alphaMap.value=R.alphaMap,p(R.alphaMap,A.alphaMapTransform);if(R.bumpMap){if(A.bumpMap.value=R.bumpMap,p(R.bumpMap,A.bumpMapTransform),A.bumpScale.value=R.bumpScale,R.side===1)A.bumpScale.value*=-1}if(R.normalMap){if(A.normalMap.value=R.normalMap,p(R.normalMap,A.normalMapTransform),A.normalScale.value.copy(R.normalScale),R.side===1)A.normalScale.value.negate()}if(R.displacementMap)A.displacementMap.value=R.displacementMap,p(R.displacementMap,A.displacementMapTransform),A.displacementScale.value=R.displacementScale,A.displacementBias.value=R.displacementBias;if(R.emissiveMap)A.emissiveMap.value=R.emissiveMap,p(R.emissiveMap,A.emissiveMapTransform);if(R.specularMap)A.specularMap.value=R.specularMap,p(R.specularMap,A.specularMapTransform);if(R.alphaTest>0)A.alphaTest.value=R.alphaTest;let W=h.get(R),{envMap:F,envMapRotation:H}=W;if(F){if(A.envMap.value=F,li.copy(H),li.x*=-1,li.y*=-1,li.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1)li.y*=-1,li.z*=-1;A.envMapRotation.value.setFromMatrix4(hp.makeRotationFromEuler(li)),A.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=R.reflectivity,A.ior.value=R.ior,A.refractionRatio.value=R.refractionRatio}if(R.lightMap)A.lightMap.value=R.lightMap,A.lightMapIntensity.value=R.lightMapIntensity,p(R.lightMap,A.lightMapTransform);if(R.aoMap)A.aoMap.value=R.aoMap,A.aoMapIntensity.value=R.aoMapIntensity,p(R.aoMap,A.aoMapTransform)}function y(A,R){if(A.diffuse.value.copy(R.color),A.opacity.value=R.opacity,R.map)A.map.value=R.map,p(R.map,A.mapTransform)}function x(A,R){A.dashSize.value=R.dashSize,A.totalSize.value=R.dashSize+R.gapSize,A.scale.value=R.scale}function M(A,R,W,F){if(A.diffuse.value.copy(R.color),A.opacity.value=R.opacity,A.size.value=R.size*W,A.scale.value=F*0.5,R.map)A.map.value=R.map,p(R.map,A.uvTransform);if(R.alphaMap)A.alphaMap.value=R.alphaMap,p(R.alphaMap,A.alphaMapTransform);if(R.alphaTest>0)A.alphaTest.value=R.alphaTest}function S(A,R){if(A.diffuse.value.copy(R.color),A.opacity.value=R.opacity,A.rotation.value=R.rotation,R.map)A.map.value=R.map,p(R.map,A.mapTransform);if(R.alphaMap)A.alphaMap.value=R.alphaMap,p(R.alphaMap,A.alphaMapTransform);if(R.alphaTest>0)A.alphaTest.value=R.alphaTest}function b(A,R){A.specular.value.copy(R.specular),A.shininess.value=Math.max(R.shininess,0.0001)}function v(A,R){if(R.gradientMap)A.gradientMap.value=R.gradientMap}function w(A,R){if(A.metalness.value=R.metalness,R.metalnessMap)A.metalnessMap.value=R.metalnessMap,p(R.metalnessMap,A.metalnessMapTransform);if(A.roughness.value=R.roughness,R.roughnessMap)A.roughnessMap.value=R.roughnessMap,p(R.roughnessMap,A.roughnessMapTransform);if(R.envMap)A.envMapIntensity.value=R.envMapIntensity}function C(A,R,W){if(A.ior.value=R.ior,R.sheen>0){if(A.sheenColor.value.copy(R.sheenColor).multiplyScalar(R.sheen),A.sheenRoughness.value=R.sheenRoughness,R.sheenColorMap)A.sheenColorMap.value=R.sheenColorMap,p(R.sheenColorMap,A.sheenColorMapTransform);if(R.sheenRoughnessMap)A.sheenRoughnessMap.value=R.sheenRoughnessMap,p(R.sheenRoughnessMap,A.sheenRoughnessMapTransform)}if(R.clearcoat>0){if(A.clearcoat.value=R.clearcoat,A.clearcoatRoughness.value=R.clearcoatRoughness,R.clearcoatMap)A.clearcoatMap.value=R.clearcoatMap,p(R.clearcoatMap,A.clearcoatMapTransform);if(R.clearcoatRoughnessMap)A.clearcoatRoughnessMap.value=R.clearcoatRoughnessMap,p(R.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform);if(R.clearcoatNormalMap){if(A.clearcoatNormalMap.value=R.clearcoatNormalMap,p(R.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(R.clearcoatNormalScale),R.side===1)A.clearcoatNormalScale.value.negate()}}if(R.dispersion>0)A.dispersion.value=R.dispersion;if(R.iridescence>0){if(A.iridescence.value=R.iridescence,A.iridescenceIOR.value=R.iridescenceIOR,A.iridescenceThicknessMinimum.value=R.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=R.iridescenceThicknessRange[1],R.iridescenceMap)A.iridescenceMap.value=R.iridescenceMap,p(R.iridescenceMap,A.iridescenceMapTransform);if(R.iridescenceThicknessMap)A.iridescenceThicknessMap.value=R.iridescenceThicknessMap,p(R.iridescenceThicknessMap,A.iridescenceThicknessMapTransform)}if(R.transmission>0){if(A.transmission.value=R.transmission,A.transmissionSamplerMap.value=W.texture,A.transmissionSamplerSize.value.set(W.width,W.height),R.transmissionMap)A.transmissionMap.value=R.transmissionMap,p(R.transmissionMap,A.transmissionMapTransform);if(A.thickness.value=R.thickness,R.thicknessMap)A.thicknessMap.value=R.thicknessMap,p(R.thicknessMap,A.thicknessMapTransform);A.attenuationDistance.value=R.attenuationDistance,A.attenuationColor.value.copy(R.attenuationColor)}if(R.anisotropy>0){if(A.anisotropyVector.value.set(R.anisotropy*Math.cos(R.anisotropyRotation),R.anisotropy*Math.sin(R.anisotropyRotation)),R.anisotropyMap)A.anisotropyMap.value=R.anisotropyMap,p(R.anisotropyMap,A.anisotropyMapTransform)}if(A.specularIntensity.value=R.specularIntensity,A.specularColor.value.copy(R.specularColor),R.specularColorMap)A.specularColorMap.value=R.specularColorMap,p(R.specularColorMap,A.specularColorMapTransform);if(R.specularIntensityMap)A.specularIntensityMap.value=R.specularIntensityMap,p(R.specularIntensityMap,A.specularIntensityMapTransform)}function I(A,R){if(R.matcap)A.matcap.value=R.matcap}function D(A,R){let W=h.get(R).light;A.referencePosition.value.setFromMatrixPosition(W.matrixWorld),A.nearDistance.value=W.shadow.camera.near,A.farDistance.value=W.shadow.camera.far}return{refreshFogUniforms:m,refreshMaterialUniforms:g}}function dp(a,h,p,m){let g={},_={},y=[],x=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function M(W,F){let H=F.program;m.uniformBlockBinding(W,H)}function S(W,F){let H=g[W.id];if(H===void 0)I(W),H=b(W),g[W.id]=H,W.addEventListener("dispose",A);let it=F.program;m.updateUBOMapping(W,it);let q=h.render.frame;if(_[W.id]!==q)w(W),_[W.id]=q}function b(W){let F=v();W.__bindingPointIndex=F;let H=a.createBuffer(),{__size:it,usage:q}=W;return a.bindBuffer(a.UNIFORM_BUFFER,H),a.bufferData(a.UNIFORM_BUFFER,it,q),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,F,H),H}function v(){for(let W=0;W<x;W++)if(y.indexOf(W)===-1)return y.push(W),W;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function w(W){let F=g[W.id],{uniforms:H,__cache:it}=W;a.bindBuffer(a.UNIFORM_BUFFER,F);for(let q=0,Y=H.length;q<Y;q++){let lt=Array.isArray(H[q])?H[q]:[H[q]];for(let B=0,z=lt.length;B<z;B++){let Q=lt[B];if(C(Q,q,B,it)===!0){let st=Q.__offset,ot=Array.isArray(Q.value)?Q.value:[Q.value],ct=0;for(let pt=0;pt<ot.length;pt++){let J=ot[pt],et=D(J);if(typeof J==="number"||typeof J==="boolean")Q.__data[0]=J,a.bufferSubData(a.UNIFORM_BUFFER,st+ct,Q.__data);else if(J.isMatrix3)Q.__data[0]=J.elements[0],Q.__data[1]=J.elements[1],Q.__data[2]=J.elements[2],Q.__data[3]=0,Q.__data[4]=J.elements[3],Q.__data[5]=J.elements[4],Q.__data[6]=J.elements[5],Q.__data[7]=0,Q.__data[8]=J.elements[6],Q.__data[9]=J.elements[7],Q.__data[10]=J.elements[8],Q.__data[11]=0;else J.toArray(Q.__data,ct),ct+=et.storage/Float32Array.BYTES_PER_ELEMENT}a.bufferSubData(a.UNIFORM_BUFFER,st,Q.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function C(W,F,H,it){let q=W.value,Y=F+"_"+H;if(it[Y]===void 0){if(typeof q==="number"||typeof q==="boolean")it[Y]=q;else it[Y]=q.clone();return!0}else{let lt=it[Y];if(typeof q==="number"||typeof q==="boolean"){if(lt!==q)return it[Y]=q,!0}else if(lt.equals(q)===!1)return lt.copy(q),!0}return!1}function I(W){let F=W.uniforms,H=0,it=16;for(let Y=0,lt=F.length;Y<lt;Y++){let B=Array.isArray(F[Y])?F[Y]:[F[Y]];for(let z=0,Q=B.length;z<Q;z++){let st=B[z],ot=Array.isArray(st.value)?st.value:[st.value];for(let ct=0,pt=ot.length;ct<pt;ct++){let J=ot[ct],et=D(J),Z=H%it,At=Z%et.boundary,U=Z+At;if(H+=At,U!==0&&it-U<et.storage)H+=it-U;st.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=H,H+=et.storage}}}let q=H%it;if(q>0)H+=it-q;return W.__size=H,W.__cache={},this}function D(W){let F={boundary:0,storage:0};if(typeof W==="number"||typeof W==="boolean")F.boundary=4,F.storage=4;else if(W.isVector2)F.boundary=8,F.storage=8;else if(W.isVector3||W.isColor)F.boundary=16,F.storage=12;else if(W.isVector4)F.boundary=16,F.storage=16;else if(W.isMatrix3)F.boundary=48,F.storage=48;else if(W.isMatrix4)F.boundary=64,F.storage=64;else if(W.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",W);return F}function A(W){let F=W.target;F.removeEventListener("dispose",A);let H=y.indexOf(F.__bindingPointIndex);y.splice(H,1),a.deleteBuffer(g[F.id]),delete g[F.id],delete _[F.id]}function R(){for(let W in g)a.deleteBuffer(g[W]);y=[],g={},_={}}return{bind:M,update:S,dispose:R}}class _a{constructor(a={}){let{canvas:h=mc(),context:p=null,depth:m=!0,stencil:g=!1,alpha:_=!1,antialias:y=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:M=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:b=!1,reverseDepthBuffer:v=!1}=a;this.isWebGLRenderer=!0;let w;if(p!==null){if(typeof WebGLRenderingContext<"u"&&p instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=p.getContextAttributes().alpha}else w=_;let C=new Uint32Array(4),I=new Int32Array(4),D=null,A=null,R=[],W=[];this.domElement=h,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let F=this,H=!1,it=0,q=0,Y=null,lt=-1,B=null,z=new be,Q=new be,st=null,ot=new he(0),ct=0,{width:pt,height:J}=h,et=1,Z=null,At=null,U=new be(0,0,pt,J),Xt=new be(0,0,pt,J),Jt=!1,dt=new or,bt=!1,qt=!1,Ht=new ye,Rt=new ye,te=new X,ae=new be,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function Tt(){return Y===null?et:1}let V=p;function zt(O,tt){return h.getContext(O,tt)}try{let O={alpha:!0,depth:m,stencil:g,antialias:y,premultipliedAlpha:x,preserveDrawingBuffer:M,powerPreference:S,failIfMajorPerformanceCaveat:b};if("setAttribute"in h)h.setAttribute("data-engine","three.js r170");if(h.addEventListener("webglcontextlost",ft,!1),h.addEventListener("webglcontextrestored",gt,!1),h.addEventListener("webglcontextcreationerror",Lt,!1),V===null){if(V=zt("webgl2",O),V===null)if(zt("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let wt,kt,vt,ee,Bt,Gt,k,N,nt,mt,xt,ht,Zt,Ct,Nt,ie,Mt,Ot,oe,ne,Pt,se,de,xe;function j(){if(wt=new Ad(V),wt.init(),se=new ap(V,wt),kt=new Md(V,wt,a,se),vt=new ip(V,wt),kt.reverseDepthBuffer&&v)vt.buffers.depth.setReversed(!0);ee=new Pd(V),Bt=new Vf,Gt=new rp(V,wt,vt,Bt,kt,se,ee),k=new Ed(F),N=new wd(F),nt=new Oc(V),de=new yd(V,nt),mt=new Rd(V,nt,ee,de),xt=new Dd(V,mt,nt,ee),oe=new Id(V,kt,Gt),ie=new Sd(Bt),ht=new Wf(F,k,N,wt,kt,de,ie),Zt=new up(F,Bt),Ct=new qf,Nt=new jf(wt),Ot=new xd(F,k,N,vt,xt,w,x),Mt=new ep(F,xt,kt),xe=new dp(V,ee,kt,vt),ne=new vd(V,wt,ee),Pt=new Cd(V,wt,ee),ee.programs=ht.programs,F.capabilities=kt,F.extensions=wt,F.properties=Bt,F.renderLists=Ct,F.shadowMap=Mt,F.state=vt,F.info=ee}j();let Et=new Sl(F,V);this.xr=Et,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let O=wt.get("WEBGL_lose_context");if(O)O.loseContext()},this.forceContextRestore=function(){let O=wt.get("WEBGL_lose_context");if(O)O.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(O){if(O===void 0)return;et=O,this.setSize(pt,J,!1)},this.getSize=function(O){return O.set(pt,J)},this.setSize=function(O,tt,rt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(pt=O,J=tt,h.width=Math.floor(O*et),h.height=Math.floor(tt*et),rt===!0)h.style.width=O+"px",h.style.height=tt+"px";this.setViewport(0,0,O,tt)},this.getDrawingBufferSize=function(O){return O.set(pt*et,J*et).floor()},this.setDrawingBufferSize=function(O,tt,rt){pt=O,J=tt,et=rt,h.width=Math.floor(O*rt),h.height=Math.floor(tt*rt),this.setViewport(0,0,O,tt)},this.getCurrentViewport=function(O){return O.copy(z)},this.getViewport=function(O){return O.copy(U)},this.setViewport=function(O,tt,rt,E){if(O.isVector4)U.set(O.x,O.y,O.z,O.w);else U.set(O,tt,rt,E);vt.viewport(z.copy(U).multiplyScalar(et).round())},this.getScissor=function(O){return O.copy(Xt)},this.setScissor=function(O,tt,rt,E){if(O.isVector4)Xt.set(O.x,O.y,O.z,O.w);else Xt.set(O,tt,rt,E);vt.scissor(Q.copy(Xt).multiplyScalar(et).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(O){vt.setScissorTest(Jt=O)},this.setOpaqueSort=function(O){Z=O},this.setTransparentSort=function(O){At=O},this.getClearColor=function(O){return O.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(O=!0,tt=!0,rt=!0){let E=0;if(O){let T=!1;if(Y!==null){let P=Y.texture.format;T=P===1033||P===1031||P===1029}if(T){let P=Y.texture.type,L=P===1009||P===1014||P===1012||P===1020||P===1017||P===1018,G=Ot.getClearColor(),K=Ot.getClearAlpha(),{r:at,g:ut,b:yt}=G;if(L)C[0]=at,C[1]=ut,C[2]=yt,C[3]=K,V.clearBufferuiv(V.COLOR,0,C);else I[0]=at,I[1]=ut,I[2]=yt,I[3]=K,V.clearBufferiv(V.COLOR,0,I)}else E|=V.COLOR_BUFFER_BIT}if(tt)E|=V.DEPTH_BUFFER_BIT;if(rt)E|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);V.clear(E)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){h.removeEventListener("webglcontextlost",ft,!1),h.removeEventListener("webglcontextrestored",gt,!1),h.removeEventListener("webglcontextcreationerror",Lt,!1),Ct.dispose(),Nt.dispose(),Bt.dispose(),k.dispose(),N.dispose(),xt.dispose(),de.dispose(),xe.dispose(),ht.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Ke),Et.removeEventListener("sessionend",Ie),vn.stop()};function ft(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let O=ee.autoReset,tt=Mt.enabled,rt=Mt.autoUpdate,E=Mt.needsUpdate,T=Mt.type;j(),ee.autoReset=O,Mt.enabled=tt,Mt.autoUpdate=rt,Mt.needsUpdate=E,Mt.type=T}function Lt(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Ft(O){let tt=O.target;tt.removeEventListener("dispose",Ft),le(tt)}function le(O){we(O),Bt.remove(O)}function we(O){let tt=Bt.get(O).programs;if(tt!==void 0){if(tt.forEach(function(rt){ht.releaseProgram(rt)}),O.isShaderMaterial)ht.releaseShaderCache(O)}}this.renderBufferDirect=function(O,tt,rt,E,T,P){if(tt===null)tt=Kt;let L=T.isMesh&&T.matrixWorld.determinant()<0,G=Es(O,tt,rt,E,T);vt.setMaterial(E,L);let K=rt.index,at=1;if(E.wireframe===!0){if(K=mt.getWireframeAttribute(rt),K===void 0)return;at=2}let ut=rt.drawRange,yt=rt.attributes.position,Wt=ut.start*at,$t=(ut.start+ut.count)*at;if(P!==null)Wt=Math.max(Wt,P.start*at),$t=Math.min($t,(P.start+P.count)*at);if(K!==null)Wt=Math.max(Wt,0),$t=Math.min($t,K.count);else if(yt!==void 0&&yt!==null)Wt=Math.max(Wt,0),$t=Math.min($t,yt.count);let Vt=$t-Wt;if(Vt<0||Vt===1/0)return;de.setup(T,E,G,rt,K);let pe,jt=ne;if(K!==null)pe=nt.get(K),jt=Pt,jt.setIndex(pe);if(T.isMesh)if(E.wireframe===!0)vt.setLineWidth(E.wireframeLinewidth*Tt()),jt.setMode(V.LINES);else jt.setMode(V.TRIANGLES);else if(T.isLine){let Dt=E.linewidth;if(Dt===void 0)Dt=1;if(vt.setLineWidth(Dt*Tt()),T.isLineSegments)jt.setMode(V.LINES);else if(T.isLineLoop)jt.setMode(V.LINE_LOOP);else jt.setMode(V.LINE_STRIP)}else if(T.isPoints)jt.setMode(V.POINTS);else if(T.isSprite)jt.setMode(V.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)jt.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(!wt.get("WEBGL_multi_draw")){let{_multiDrawStarts:Dt,_multiDrawCounts:He,_multiDrawCount:me}=T,ke=K?nt.get(K).bytesPerElement:1,rn=Bt.get(E).currentProgram.getUniforms();for(let De=0;De<me;De++)rn.setValue(V,"_gl_DrawID",De),jt.render(Dt[De]/ke,He[De])}else jt.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else if(T.isInstancedMesh)jt.renderInstances(Wt,Vt,T.count);else if(rt.isInstancedBufferGeometry){let Dt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,He=Math.min(rt.instanceCount,Dt);jt.renderInstances(Wt,Vt,He)}else jt.render(Wt,Vt)};function Pe(O,tt,rt){if(O.transparent===!0&&O.side===2&&O.forceSinglePass===!1)O.side=1,O.needsUpdate=!0,Qn(O,tt,rt),O.side=0,O.needsUpdate=!0,Qn(O,tt,rt),O.side=2;else Qn(O,tt,rt)}this.compile=function(O,tt,rt=null){if(rt===null)rt=O;if(A=Nt.get(rt),A.init(tt),W.push(A),rt.traverseVisible(function(T){if(T.isLight&&T.layers.test(tt.layers)){if(A.pushLight(T),T.castShadow)A.pushShadow(T)}}),O!==rt)O.traverseVisible(function(T){if(T.isLight&&T.layers.test(tt.layers)){if(A.pushLight(T),T.castShadow)A.pushShadow(T)}});A.setupLights();let E=new Set;return O.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;let P=T.material;if(P)if(Array.isArray(P))for(let L=0;L<P.length;L++){let G=P[L];Pe(G,rt,T),E.add(G)}else Pe(P,rt,T),E.add(P)}),W.pop(),A=null,E},this.compileAsync=function(O,tt,rt=null){let E=this.compile(O,tt,rt);return new Promise((T)=>{function P(){if(E.forEach(function(L){if(Bt.get(L).currentProgram.isReady())E.delete(L)}),E.size===0){T(O);return}setTimeout(P,10)}if(wt.get("KHR_parallel_shader_compile")!==null)P();else setTimeout(P,10)})};let re=null;function sn(O){if(re)re(O)}function Ke(){vn.stop()}function Ie(){vn.start()}let vn=new ll;if(vn.setAnimationLoop(sn),typeof self<"u")vn.setContext(self);this.setAnimationLoop=function(O){re=O,Et.setAnimationLoop(O),O===null?vn.stop():vn.start()},Et.addEventListener("sessionstart",Ke),Et.addEventListener("sessionend",Ie),this.render=function(O,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(O.matrixWorldAutoUpdate===!0)O.updateMatrixWorld();if(tt.parent===null&&tt.matrixWorldAutoUpdate===!0)tt.updateMatrixWorld();if(Et.enabled===!0&&Et.isPresenting===!0){if(Et.cameraAutoUpdate===!0)Et.updateCamera(tt);tt=Et.getCamera()}if(O.isScene===!0)O.onBeforeRender(F,O,tt,Y);if(A=Nt.get(O,W.length),A.init(tt),W.push(A),Rt.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),dt.setFromProjectionMatrix(Rt),qt=this.localClippingEnabled,bt=ie.init(this.clippingPlanes,qt),D=Ct.get(O,R.length),D.init(),R.push(D),Et.enabled===!0&&Et.isPresenting===!0){let P=F.xr.getDepthSensingMesh();if(P!==null)gi(P,tt,-1/0,F.sortObjects)}if(gi(O,tt,0,F.sortObjects),D.finish(),F.sortObjects===!0)D.sort(Z,At);if(_t=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,_t)Ot.addToRenderList(D,O);if(this.info.render.frame++,bt===!0)ie.beginShadows();let rt=A.state.shadowsArray;if(Mt.render(rt,O,tt),bt===!0)ie.endShadows();if(this.info.autoReset===!0)this.info.reset();let E=D.opaque,T=D.transmissive;if(A.setupLights(),tt.isArrayCamera){let P=tt.cameras;if(T.length>0)for(let L=0,G=P.length;L<G;L++){let K=P[L];Mn(E,T,O,K)}if(_t)Ot.render(O);for(let L=0,G=P.length;L<G;L++){let K=P[L];Xi(D,O,K,K.viewport)}}else{if(T.length>0)Mn(E,T,O,tt);if(_t)Ot.render(O);Xi(D,O,tt)}if(Y!==null)Gt.updateMultisampleRenderTarget(Y),Gt.updateRenderTargetMipmap(Y);if(O.isScene===!0)O.onAfterRender(F,O,tt);if(de.resetDefaultState(),lt=-1,B=null,W.pop(),W.length>0){if(A=W[W.length-1],bt===!0)ie.setGlobalState(F.clippingPlanes,A.state.camera)}else A=null;if(R.pop(),R.length>0)D=R[R.length-1];else D=null};function gi(O,tt,rt,E){if(O.visible===!1)return;if(O.layers.test(tt.layers)){if(O.isGroup)rt=O.renderOrder;else if(O.isLOD){if(O.autoUpdate===!0)O.update(tt)}else if(O.isLight){if(A.pushLight(O),O.castShadow)A.pushShadow(O)}else if(O.isSprite){if(!O.frustumCulled||dt.intersectsSprite(O)){if(E)ae.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Rt);let L=xt.update(O),G=O.material;if(G.visible)D.push(O,L,G,rt,ae.z,null)}}else if(O.isMesh||O.isLine||O.isPoints){if(!O.frustumCulled||dt.intersectsObject(O)){let L=xt.update(O),G=O.material;if(E){if(O.boundingSphere!==void 0){if(O.boundingSphere===null)O.computeBoundingSphere();ae.copy(O.boundingSphere.center)}else{if(L.boundingSphere===null)L.computeBoundingSphere();ae.copy(L.boundingSphere.center)}ae.applyMatrix4(O.matrixWorld).applyMatrix4(Rt)}if(Array.isArray(G)){let K=L.groups;for(let at=0,ut=K.length;at<ut;at++){let yt=K[at],Wt=G[yt.materialIndex];if(Wt&&Wt.visible)D.push(O,L,Wt,rt,ae.z,yt)}}else if(G.visible)D.push(O,L,G,rt,ae.z,null)}}}let P=O.children;for(let L=0,G=P.length;L<G;L++)gi(P[L],tt,rt,E)}function Xi(O,tt,rt,E){let{opaque:T,transmissive:P,transparent:L}=O;if(A.setupLightsView(rt),bt===!0)ie.setGlobalState(F.clippingPlanes,rt);if(E)vt.viewport(z.copy(E));if(T.length>0)On(T,tt,rt);if(P.length>0)On(P,tt,rt);if(L.length>0)On(L,tt,rt);vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Mn(O,tt,rt,E){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[E.id]===void 0)A.state.transmissionRenderTarget[E.id]=new Zn(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:g,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace});let P=A.state.transmissionRenderTarget[E.id],L=E.viewport||z;P.setSize(L.z,L.w);let G=F.getRenderTarget();if(F.setRenderTarget(P),F.getClearColor(ot),ct=F.getClearAlpha(),ct<1)F.setClearColor(16777215,0.5);if(F.clear(),_t)Ot.render(rt);let K=F.toneMapping;F.toneMapping=0;let at=E.viewport;if(E.viewport!==void 0)E.viewport=void 0;if(A.setupLightsView(E),bt===!0)ie.setGlobalState(F.clippingPlanes,E);if(On(O,rt,E),Gt.updateMultisampleRenderTarget(P),Gt.updateRenderTargetMipmap(P),wt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let yt=0,Wt=tt.length;yt<Wt;yt++){let $t=tt[yt],{object:Vt,geometry:pe,material:jt,group:Dt}=$t;if(jt.side===2&&Vt.layers.test(E.layers)){let He=jt.side;jt.side=1,jt.needsUpdate=!0,_i(Vt,rt,E,pe,jt,Dt),jt.side=He,jt.needsUpdate=!0,ut=!0}}if(ut===!0)Gt.updateMultisampleRenderTarget(P),Gt.updateRenderTargetMipmap(P)}if(F.setRenderTarget(G),F.setClearColor(ot,ct),at!==void 0)E.viewport=at;F.toneMapping=K}function On(O,tt,rt){let E=tt.isScene===!0?tt.overrideMaterial:null;for(let T=0,P=O.length;T<P;T++){let L=O[T],{object:G,geometry:K}=L,at=E===null?L.material:E,ut=L.group;if(G.layers.test(rt.layers))_i(G,tt,rt,K,at,ut)}}function _i(O,tt,rt,E,T,P){if(O.onBeforeRender(F,tt,rt,E,T,P),O.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),T.onBeforeRender(F,tt,rt,E,O,P),T.transparent===!0&&T.side===2&&T.forceSinglePass===!1)T.side=1,T.needsUpdate=!0,F.renderBufferDirect(rt,tt,E,T,O,P),T.side=0,T.needsUpdate=!0,F.renderBufferDirect(rt,tt,E,T,O,P),T.side=2;else F.renderBufferDirect(rt,tt,E,T,O,P);O.onAfterRender(F,tt,rt,E,T,P)}function Qn(O,tt,rt){if(tt.isScene!==!0)tt=Kt;let E=Bt.get(O),T=A.state.lights,P=A.state.shadowsArray,L=T.state.version,G=ht.getParameters(O,T.state,P,tt,rt),K=ht.getProgramCacheKey(G),at=E.programs;if(E.environment=O.isMeshStandardMaterial?tt.environment:null,E.fog=tt.fog,E.envMap=(O.isMeshStandardMaterial?N:k).get(O.envMap||E.environment),E.envMapRotation=E.environment!==null&&O.envMap===null?tt.environmentRotation:O.envMapRotation,at===void 0)O.addEventListener("dispose",Ft),at=new Map,E.programs=at;let ut=at.get(K);if(ut!==void 0){if(E.currentProgram===ut&&E.lightsStateVersion===L)return Yi(O,G),ut}else G.uniforms=ht.getUniforms(O),O.onBeforeCompile(G,F),ut=ht.acquireProgram(G,K),at.set(K,ut),E.uniforms=G.uniforms;let yt=E.uniforms;if(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)yt.clippingPlanes=ie.uniform;if(Yi(O,G),E.needsLights=Ts(O),E.lightsStateVersion=L,E.needsLights)yt.ambientLightColor.value=T.state.ambient,yt.lightProbe.value=T.state.probe,yt.directionalLights.value=T.state.directional,yt.directionalLightShadows.value=T.state.directionalShadow,yt.spotLights.value=T.state.spot,yt.spotLightShadows.value=T.state.spotShadow,yt.rectAreaLights.value=T.state.rectArea,yt.ltc_1.value=T.state.rectAreaLTC1,yt.ltc_2.value=T.state.rectAreaLTC2,yt.pointLights.value=T.state.point,yt.pointLightShadows.value=T.state.pointShadow,yt.hemisphereLights.value=T.state.hemi,yt.directionalShadowMap.value=T.state.directionalShadowMap,yt.directionalShadowMatrix.value=T.state.directionalShadowMatrix,yt.spotShadowMap.value=T.state.spotShadowMap,yt.spotLightMatrix.value=T.state.spotLightMatrix,yt.spotLightMap.value=T.state.spotLightMap,yt.pointShadowMap.value=T.state.pointShadowMap,yt.pointShadowMatrix.value=T.state.pointShadowMatrix;return E.currentProgram=ut,E.uniformsList=null,ut}function qi(O){if(O.uniformsList===null){let tt=O.currentProgram.getUniforms();O.uniformsList=rs.seqWithValue(tt.seq,O.uniforms)}return O.uniformsList}function Yi(O,tt){let rt=Bt.get(O);rt.outputColorSpace=tt.outputColorSpace,rt.batching=tt.batching,rt.batchingColor=tt.batchingColor,rt.instancing=tt.instancing,rt.instancingColor=tt.instancingColor,rt.instancingMorph=tt.instancingMorph,rt.skinning=tt.skinning,rt.morphTargets=tt.morphTargets,rt.morphNormals=tt.morphNormals,rt.morphColors=tt.morphColors,rt.morphTargetsCount=tt.morphTargetsCount,rt.numClippingPlanes=tt.numClippingPlanes,rt.numIntersection=tt.numClipIntersection,rt.vertexAlphas=tt.vertexAlphas,rt.vertexTangents=tt.vertexTangents,rt.toneMapping=tt.toneMapping}function Es(O,tt,rt,E,T){if(tt.isScene!==!0)tt=Kt;Gt.resetTextureUnits();let P=tt.fog,L=E.isMeshStandardMaterial?tt.environment:null,G=Y===null?F.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:"srgb-linear",K=(E.isMeshStandardMaterial?N:k).get(E.envMap||L),at=E.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ut=!!rt.attributes.tangent&&(!!E.normalMap||E.anisotropy>0),yt=!!rt.morphAttributes.position,Wt=!!rt.morphAttributes.normal,$t=!!rt.morphAttributes.color,Vt=0;if(E.toneMapped){if(Y===null||Y.isXRRenderTarget===!0)Vt=F.toneMapping}let pe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,jt=pe!==void 0?pe.length:0,Dt=Bt.get(E),He=A.state.lights;if(bt===!0){if(qt===!0||O!==B){let Ye=O===B&&E.id===lt;ie.setState(E,O,Ye)}}let me=!1;if(E.version===Dt.__version){if(Dt.needsLights&&Dt.lightsStateVersion!==He.state.version)me=!0;else if(Dt.outputColorSpace!==G)me=!0;else if(T.isBatchedMesh&&Dt.batching===!1)me=!0;else if(!T.isBatchedMesh&&Dt.batching===!0)me=!0;else if(T.isBatchedMesh&&Dt.batchingColor===!0&&T.colorTexture===null)me=!0;else if(T.isBatchedMesh&&Dt.batchingColor===!1&&T.colorTexture!==null)me=!0;else if(T.isInstancedMesh&&Dt.instancing===!1)me=!0;else if(!T.isInstancedMesh&&Dt.instancing===!0)me=!0;else if(T.isSkinnedMesh&&Dt.skinning===!1)me=!0;else if(!T.isSkinnedMesh&&Dt.skinning===!0)me=!0;else if(T.isInstancedMesh&&Dt.instancingColor===!0&&T.instanceColor===null)me=!0;else if(T.isInstancedMesh&&Dt.instancingColor===!1&&T.instanceColor!==null)me=!0;else if(T.isInstancedMesh&&Dt.instancingMorph===!0&&T.morphTexture===null)me=!0;else if(T.isInstancedMesh&&Dt.instancingMorph===!1&&T.morphTexture!==null)me=!0;else if(Dt.envMap!==K)me=!0;else if(E.fog===!0&&Dt.fog!==P)me=!0;else if(Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ie.numPlanes||Dt.numIntersection!==ie.numIntersection))me=!0;else if(Dt.vertexAlphas!==at)me=!0;else if(Dt.vertexTangents!==ut)me=!0;else if(Dt.morphTargets!==yt)me=!0;else if(Dt.morphNormals!==Wt)me=!0;else if(Dt.morphColors!==$t)me=!0;else if(Dt.toneMapping!==Vt)me=!0;else if(Dt.morphTargetsCount!==jt)me=!0}else me=!0,Dt.__version=E.version;let ke=Dt.currentProgram;if(me===!0)ke=Qn(E,tt,T);let rn=!1,De=!1,Sn=!1,Se=ke.getUniforms(),je=Dt.uniforms;if(vt.useProgram(ke.program))rn=!0,De=!0,Sn=!0;if(E.id!==lt)lt=E.id,De=!0;if(rn||B!==O){if(vt.buffers.depth.getReversed())Ht.copy(O.projectionMatrix),_c(Ht),xc(Ht),Se.setValue(V,"projectionMatrix",Ht);else Se.setValue(V,"projectionMatrix",O.projectionMatrix);Se.setValue(V,"viewMatrix",O.matrixWorldInverse);let Yt=Se.map.cameraPosition;if(Yt!==void 0)Yt.setValue(V,te.setFromMatrixPosition(O.matrixWorld));if(kt.logarithmicDepthBuffer)Se.setValue(V,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2));if(E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshLambertMaterial||E.isMeshBasicMaterial||E.isMeshStandardMaterial||E.isShaderMaterial)Se.setValue(V,"isOrthographic",O.isOrthographicCamera===!0);if(B!==O)B=O,De=!0,Sn=!0}if(T.isSkinnedMesh){Se.setOptional(V,T,"bindMatrix"),Se.setOptional(V,T,"bindMatrixInverse");let Ye=T.skeleton;if(Ye){if(Ye.boneTexture===null)Ye.computeBoneTexture();Se.setValue(V,"boneTexture",Ye.boneTexture,Gt)}}if(T.isBatchedMesh){if(Se.setOptional(V,T,"batchingTexture"),Se.setValue(V,"batchingTexture",T._matricesTexture,Gt),Se.setOptional(V,T,"batchingIdTexture"),Se.setValue(V,"batchingIdTexture",T._indirectTexture,Gt),Se.setOptional(V,T,"batchingColorTexture"),T._colorsTexture!==null)Se.setValue(V,"batchingColorTexture",T._colorsTexture,Gt)}let ti=rt.morphAttributes;if(ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)oe.update(T,rt,ke);if(De||Dt.receiveShadow!==T.receiveShadow)Dt.receiveShadow=T.receiveShadow,Se.setValue(V,"receiveShadow",T.receiveShadow);if(E.isMeshGouraudMaterial&&E.envMap!==null)je.envMap.value=K,je.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1;if(E.isMeshStandardMaterial&&E.envMap===null&&tt.environment!==null)je.envMapIntensity.value=tt.environmentIntensity;if(De){if(Se.setValue(V,"toneMappingExposure",F.toneMappingExposure),Dt.needsLights)bs(je,Sn);if(P&&E.fog===!0)Zt.refreshFogUniforms(je,P);Zt.refreshMaterialUniforms(je,E,et,J,A.state.transmissionRenderTarget[O.id]),rs.upload(V,qi(Dt),je,Gt)}if(E.isShaderMaterial&&E.uniformsNeedUpdate===!0)rs.upload(V,qi(Dt),je,Gt),E.uniformsNeedUpdate=!1;if(E.isSpriteMaterial)Se.setValue(V,"center",T.center);if(Se.setValue(V,"modelViewMatrix",T.modelViewMatrix),Se.setValue(V,"normalMatrix",T.normalMatrix),Se.setValue(V,"modelMatrix",T.matrixWorld),E.isShaderMaterial||E.isRawShaderMaterial){let Ye=E.uniformsGroups;for(let Yt=0,ge=Ye.length;Yt<ge;Yt++){let ve=Ye[Yt];xe.update(ve,ke),xe.bind(ve,ke)}}return ke}function bs(O,tt){O.ambientLightColor.needsUpdate=tt,O.lightProbe.needsUpdate=tt,O.directionalLights.needsUpdate=tt,O.directionalLightShadows.needsUpdate=tt,O.pointLights.needsUpdate=tt,O.pointLightShadows.needsUpdate=tt,O.spotLights.needsUpdate=tt,O.spotLightShadows.needsUpdate=tt,O.rectAreaLights.needsUpdate=tt,O.hemisphereLights.needsUpdate=tt}function Ts(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}if(this.getActiveCubeFace=function(){return it},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(O,tt,rt){Bt.get(O.texture).__webglTexture=tt,Bt.get(O.depthTexture).__webglTexture=rt;let E=Bt.get(O);if(E.__hasExternalTextures=!0,E.__autoAllocateDepthBuffer=rt===void 0,!E.__autoAllocateDepthBuffer){if(wt.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),E.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(O,tt){let rt=Bt.get(O);rt.__webglFramebuffer=tt,rt.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(O,tt=0,rt=0){Y=O,it=tt,q=rt;let E=!0,T=null,P=!1,L=!1;if(O){let K=Bt.get(O);if(K.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(V.FRAMEBUFFER,null),E=!1;else if(K.__webglFramebuffer===void 0)Gt.setupRenderTarget(O);else if(K.__hasExternalTextures)Gt.rebindTextures(O,Bt.get(O.texture).__webglTexture,Bt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let yt=O.depthTexture;if(K.__boundDepthTexture!==yt){if(yt!==null&&Bt.has(yt)&&(O.width!==yt.image.width||O.height!==yt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(O)}}let at=O.texture;if(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)L=!0;let ut=Bt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget){if(Array.isArray(ut[tt]))T=ut[tt][rt];else T=ut[tt];P=!0}else if(O.samples>0&&Gt.useMultisampledRTT(O)===!1)T=Bt.get(O).__webglMultisampledFramebuffer;else if(Array.isArray(ut))T=ut[rt];else T=ut;z.copy(O.viewport),Q.copy(O.scissor),st=O.scissorTest}else z.copy(U).multiplyScalar(et).floor(),Q.copy(Xt).multiplyScalar(et).floor(),st=Jt;if(vt.bindFramebuffer(V.FRAMEBUFFER,T)&&E)vt.drawBuffers(O,T);if(vt.viewport(z),vt.scissor(Q),vt.setScissorTest(st),P){let K=Bt.get(O.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+tt,K.__webglTexture,rt)}else if(L){let K=Bt.get(O.texture),at=tt||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,K.__webglTexture,rt||0,at)}lt=-1},this.readRenderTargetPixels=function(O,tt,rt,E,T,P,L){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let G=Bt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&L!==void 0)G=G[L];if(G){vt.bindFramebuffer(V.FRAMEBUFFER,G);try{let K=O.texture,{format:at,type:ut}=K;if(!kt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(tt>=0&&tt<=O.width-E&&(rt>=0&&rt<=O.height-T))V.readPixels(tt,rt,E,T,se.convert(at),se.convert(ut),P)}finally{let K=Y!==null?Bt.get(Y).__webglFramebuffer:null;vt.bindFramebuffer(V.FRAMEBUFFER,K)}}},this.readRenderTargetPixelsAsync=async function(O,tt,rt,E,T,P,L){if(!(O&&O.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let G=Bt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&L!==void 0)G=G[L];if(G){let K=O.texture,{format:at,type:ut}=K;if(!kt.textureFormatReadable(at))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(ut))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(tt>=0&&tt<=O.width-E&&(rt>=0&&rt<=O.height-T)){vt.bindFramebuffer(V.FRAMEBUFFER,G);let yt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.bufferData(V.PIXEL_PACK_BUFFER,P.byteLength,V.STREAM_READ),V.readPixels(tt,rt,E,T,se.convert(at),se.convert(ut),0);let Wt=Y!==null?Bt.get(Y).__webglFramebuffer:null;vt.bindFramebuffer(V.FRAMEBUFFER,Wt);let $t=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await gc(V,$t,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,P),V.deleteBuffer(yt),V.deleteSync($t),P}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,tt=null,rt=0){if(O.isTexture!==!0)ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),tt=arguments[0]||null,O=arguments[1];let E=Math.pow(2,-rt),T=Math.floor(O.image.width*E),P=Math.floor(O.image.height*E),L=tt!==null?tt.x:0,G=tt!==null?tt.y:0;Gt.setTexture2D(O,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,L,G,T,P),vt.unbindTexture()},this.copyTextureToTexture=function(O,tt,rt=null,E=null,T=0){if(O.isTexture!==!0)ns("WebGLRenderer: copyTextureToTexture function signature has changed."),E=arguments[0]||null,O=arguments[1],tt=arguments[2],T=arguments[3]||0,rt=null;let P,L,G,K,at,ut,yt,Wt,$t,Vt=O.isCompressedTexture?O.mipmaps[T]:O.image;if(rt!==null)P=rt.max.x-rt.min.x,L=rt.max.y-rt.min.y,G=rt.isBox3?rt.max.z-rt.min.z:1,K=rt.min.x,at=rt.min.y,ut=rt.isBox3?rt.min.z:0;else P=Vt.width,L=Vt.height,G=Vt.depth||1,K=0,at=0,ut=0;if(E!==null)yt=E.x,Wt=E.y,$t=E.z;else yt=0,Wt=0,$t=0;let pe=se.convert(tt.format),jt=se.convert(tt.type),Dt;if(tt.isData3DTexture)Gt.setTexture3D(tt,0),Dt=V.TEXTURE_3D;else if(tt.isDataArrayTexture||tt.isCompressedArrayTexture)Gt.setTexture2DArray(tt,0),Dt=V.TEXTURE_2D_ARRAY;else Gt.setTexture2D(tt,0),Dt=V.TEXTURE_2D;V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,tt.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,tt.unpackAlignment);let He=V.getParameter(V.UNPACK_ROW_LENGTH),me=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ke=V.getParameter(V.UNPACK_SKIP_PIXELS),rn=V.getParameter(V.UNPACK_SKIP_ROWS),De=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Vt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Vt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,K),V.pixelStorei(V.UNPACK_SKIP_ROWS,at),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ut);let Sn=O.isDataArrayTexture||O.isData3DTexture,Se=tt.isDataArrayTexture||tt.isData3DTexture;if(O.isRenderTargetTexture||O.isDepthTexture){let je=Bt.get(O),ti=Bt.get(tt),Ye=Bt.get(je.__renderTarget),Yt=Bt.get(ti.__renderTarget);vt.bindFramebuffer(V.READ_FRAMEBUFFER,Ye.__webglFramebuffer),vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let ge=0;ge<G;ge++){if(Sn)V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Bt.get(O).__webglTexture,T,ut+ge);if(O.isDepthTexture){if(Se)V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Bt.get(tt).__webglTexture,T,$t+ge);V.blitFramebuffer(K,at,P,L,yt,Wt,P,L,V.DEPTH_BUFFER_BIT,V.NEAREST)}else if(Se)V.copyTexSubImage3D(Dt,T,yt,Wt,$t+ge,K,at,P,L);else V.copyTexSubImage2D(Dt,T,yt,Wt,$t+ge,K,at,P,L)}vt.bindFramebuffer(V.READ_FRAMEBUFFER,null),vt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Se)if(O.isDataTexture||O.isData3DTexture)V.texSubImage3D(Dt,T,yt,Wt,$t,P,L,G,pe,jt,Vt.data);else if(tt.isCompressedArrayTexture)V.compressedTexSubImage3D(Dt,T,yt,Wt,$t,P,L,G,pe,Vt.data);else V.texSubImage3D(Dt,T,yt,Wt,$t,P,L,G,pe,jt,Vt);else if(O.isDataTexture)V.texSubImage2D(V.TEXTURE_2D,T,yt,Wt,P,L,pe,jt,Vt.data);else if(O.isCompressedTexture)V.compressedTexSubImage2D(V.TEXTURE_2D,T,yt,Wt,Vt.width,Vt.height,pe,Vt.data);else V.texSubImage2D(V.TEXTURE_2D,T,yt,Wt,P,L,pe,jt,Vt);if(V.pixelStorei(V.UNPACK_ROW_LENGTH,He),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,me),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ke),V.pixelStorei(V.UNPACK_SKIP_ROWS,rn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,De),T===0&&tt.generateMipmaps)V.generateMipmap(Dt);vt.unbindTexture()},this.copyTextureToTexture3D=function(O,tt,rt=null,E=null,T=0){if(O.isTexture!==!0)ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,E=arguments[1]||null,O=arguments[2],tt=arguments[3],T=arguments[4]||0;return ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(O,tt,rt,E,T)},this.initRenderTarget=function(O){if(Bt.get(O).__webglFramebuffer===void 0)Gt.setupRenderTarget(O)},this.initTexture=function(O){if(O.isCubeTexture)Gt.setTextureCube(O,0);else if(O.isData3DTexture)Gt.setTexture3D(O,0);else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Gt.setTexture2DArray(O,0);else Gt.setTexture2D(O,0);vt.unbindTexture()},this.resetState=function(){it=0,q=0,Y=null,vt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a;let h=this.getContext();h.drawingBufferColorspace=_e._getDrawingBufferColorSpace(a),h.unpackColorSpace=_e._getUnpackColorSpace()}}class cr{constructor(a,h=1,p=1000){this.isFog=!0,this.name="",this.color=new he(a),this.near=h,this.far=p}clone(){return new cr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gs extends ze{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(a,h){if(super.copy(a,h),a.background!==null)this.background=a.background.clone();if(a.environment!==null)this.environment=a.environment.clone();if(a.fog!==null)this.fog=a.fog.clone();if(this.backgroundBlurriness=a.backgroundBlurriness,this.backgroundIntensity=a.backgroundIntensity,this.backgroundRotation.copy(a.backgroundRotation),this.environmentIntensity=a.environmentIntensity,this.environmentRotation.copy(a.environmentRotation),a.overrideMaterial!==null)this.overrideMaterial=a.overrideMaterial.clone();return this.matrixAutoUpdate=a.matrixAutoUpdate,this}toJSON(a){let h=super.toJSON(a);if(this.fog!==null)h.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)h.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)h.object.backgroundIntensity=this.backgroundIntensity;if(h.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)h.object.environmentIntensity=this.environmentIntensity;return h.object.environmentRotation=this.environmentRotation.toArray(),h}}class El extends qe{constructor(a=null,h=1,p=1,m,g,_,y,x,M=1003,S=1003,b,v){super(null,_,y,x,M,S,m,g,b,v);this.isDataTexture=!0,this.image={data:a,width:h,height:p},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea extends hn{constructor(a,h,p,m=1){super(a,h,p);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=m}copy(a){return super.copy(a),this.meshPerAttribute=a.meshPerAttribute,this}toJSON(){let a=super.toJSON();return a.meshPerAttribute=this.meshPerAttribute,a.isInstancedBufferAttribute=!0,a}}var Di=new ye,No=new ye,qs=[],Fo=new An,fp=new ye,ji=new Qt,Qi=new fi;class _s extends Qt{constructor(a,h,p){super(a,h);this.isInstancedMesh=!0,this.instanceMatrix=new ea(new Float32Array(p*16),16),this.instanceColor=null,this.morphTexture=null,this.count=p,this.boundingBox=null,this.boundingSphere=null;for(let m=0;m<p;m++)this.setMatrixAt(m,fp)}computeBoundingBox(){let a=this.geometry,h=this.count;if(this.boundingBox===null)this.boundingBox=new An;if(a.boundingBox===null)a.computeBoundingBox();this.boundingBox.makeEmpty();for(let p=0;p<h;p++)this.getMatrixAt(p,Di),Fo.copy(a.boundingBox).applyMatrix4(Di),this.boundingBox.union(Fo)}computeBoundingSphere(){let a=this.geometry,h=this.count;if(this.boundingSphere===null)this.boundingSphere=new fi;if(a.boundingSphere===null)a.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let p=0;p<h;p++)this.getMatrixAt(p,Di),Qi.copy(a.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(Qi)}copy(a,h){if(super.copy(a,h),this.instanceMatrix.copy(a.instanceMatrix),a.morphTexture!==null)this.morphTexture=a.morphTexture.clone();if(a.instanceColor!==null)this.instanceColor=a.instanceColor.clone();if(this.count=a.count,a.boundingBox!==null)this.boundingBox=a.boundingBox.clone();if(a.boundingSphere!==null)this.boundingSphere=a.boundingSphere.clone();return this}getColorAt(a,h){h.fromArray(this.instanceColor.array,a*3)}getMatrixAt(a,h){h.fromArray(this.instanceMatrix.array,a*16)}getMorphAt(a,h){let p=h.morphTargetInfluences,m=this.morphTexture.source.data.data,g=p.length+1,_=a*g+1;for(let y=0;y<p.length;y++)p[y]=m[_+y]}raycast(a,h){let p=this.matrixWorld,m=this.count;if(ji.geometry=this.geometry,ji.material=this.material,ji.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Qi.copy(this.boundingSphere),Qi.applyMatrix4(p),a.ray.intersectsSphere(Qi)===!1)return;for(let g=0;g<m;g++){this.getMatrixAt(g,Di),No.multiplyMatrices(p,Di),ji.matrixWorld=No,ji.raycast(a,qs);for(let _=0,y=qs.length;_<y;_++){let x=qs[_];x.instanceId=g,x.object=this,h.push(x)}qs.length=0}}setColorAt(a,h){if(this.instanceColor===null)this.instanceColor=new ea(new Float32Array(this.instanceMatrix.count*3).fill(1),3);h.toArray(this.instanceColor.array,a*3)}setMatrixAt(a,h){h.toArray(this.instanceMatrix.array,a*16)}setMorphAt(a,h){let p=h.morphTargetInfluences,m=p.length+1;if(this.morphTexture===null)this.morphTexture=new El(new Float32Array(m*this.count),m,this.count,1028,1015);let g=this.morphTexture.source.data.data,_=0;for(let M=0;M<p.length;M++)_+=p[M];let y=this.geometry.morphTargetsRelative?1:1-_,x=m*a;g[x]=y,g.set(p,x+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class hr extends $n{static get type(){return"LineBasicMaterial"}constructor(a){super();this.isLineBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.linewidth=a.linewidth,this.linecap=a.linecap,this.linejoin=a.linejoin,this.fog=a.fog,this}}var sr=new X,rr=new X,Oo=new ye,ts=new zi,Ys=new fi,Yr=new X,Bo=new X;class bl extends ze{constructor(a=new Ge,h=new hr){super();this.isLine=!0,this.type="Line",this.geometry=a,this.material=h,this.updateMorphTargets()}copy(a,h){return super.copy(a,h),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}computeLineDistances(){let a=this.geometry;if(a.index===null){let h=a.attributes.position,p=[0];for(let m=1,g=h.count;m<g;m++)sr.fromBufferAttribute(h,m-1),rr.fromBufferAttribute(h,m),p[m]=p[m-1],p[m]+=sr.distanceTo(rr);a.setAttribute("lineDistance",new Me(p,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(a,h){let p=this.geometry,m=this.matrixWorld,g=a.params.Line.threshold,_=p.drawRange;if(p.boundingSphere===null)p.computeBoundingSphere();if(Ys.copy(p.boundingSphere),Ys.applyMatrix4(m),Ys.radius+=g,a.ray.intersectsSphere(Ys)===!1)return;Oo.copy(m).invert(),ts.copy(a.ray).applyMatrix4(Oo);let y=g/((this.scale.x+this.scale.y+this.scale.z)/3),x=y*y,M=this.isLineSegments?2:1,S=p.index,v=p.attributes.position;if(S!==null){let w=Math.max(0,_.start),C=Math.min(S.count,_.start+_.count);for(let I=w,D=C-1;I<D;I+=M){let A=S.getX(I),R=S.getX(I+1),W=Zs(this,a,ts,x,A,R);if(W)h.push(W)}if(this.isLineLoop){let I=S.getX(C-1),D=S.getX(w),A=Zs(this,a,ts,x,I,D);if(A)h.push(A)}}else{let w=Math.max(0,_.start),C=Math.min(v.count,_.start+_.count);for(let I=w,D=C-1;I<D;I+=M){let A=Zs(this,a,ts,x,I,I+1);if(A)h.push(A)}if(this.isLineLoop){let I=Zs(this,a,ts,x,C-1,w);if(I)h.push(I)}}}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let y=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[y]=g}}}}}function Zs(a,h,p,m,g,_){let y=a.geometry.attributes.position;if(sr.fromBufferAttribute(y,g),rr.fromBufferAttribute(y,_),p.distanceSqToSegment(sr,rr,Yr,Bo)>m)return;Yr.applyMatrix4(a.matrixWorld);let M=h.ray.origin.distanceTo(Yr);if(M<h.near||M>h.far)return;return{distance:M,point:Bo.clone().applyMatrix4(a.matrixWorld),index:g,face:null,faceIndex:null,barycoord:null,object:a}}var zo=new X,Ho=new X;class xa extends bl{constructor(a,h){super(a,h);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let a=this.geometry;if(a.index===null){let h=a.attributes.position,p=[];for(let m=0,g=h.count;m<g;m+=2)zo.fromBufferAttribute(h,m),Ho.fromBufferAttribute(h,m+1),p[m]=m===0?0:p[m-1],p[m+1]=p[m]+zo.distanceTo(Ho);a.setAttribute("lineDistance",new Me(p,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ya extends qe{constructor(a,h,p,m,g,_,y,x,M){super(a,h,p,m,g,_,y,x,M);this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(a,h){let p=this.getUtoTmapping(a);return this.getPoint(p,h)}getPoints(a=5){let h=[];for(let p=0;p<=a;p++)h.push(this.getPoint(p/a));return h}getSpacedPoints(a=5){let h=[];for(let p=0;p<=a;p++)h.push(this.getPointAt(p/a));return h}getLength(){let a=this.getLengths();return a[a.length-1]}getLengths(a=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let h=[],p,m=this.getPoint(0),g=0;h.push(0);for(let _=1;_<=a;_++)p=this.getPoint(_/a),g+=p.distanceTo(m),h.push(g),m=p;return this.cacheArcLengths=h,h}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(a,h){let p=this.getLengths(),m=0,g=p.length,_;if(h)_=h;else _=a*p[g-1];let y=0,x=g-1,M;while(y<=x)if(m=Math.floor(y+(x-y)/2),M=p[m]-_,M<0)y=m+1;else if(M>0)x=m-1;else{x=m;break}if(m=x,p[m]===_)return m/(g-1);let S=p[m],v=p[m+1]-S,w=(_-S)/v;return(m+w)/(g-1)}getTangent(a,h){let m=a-0.0001,g=a+0.0001;if(m<0)m=0;if(g>1)g=1;let _=this.getPoint(m),y=this.getPoint(g),x=h||(_.isVector2?new St:new X);return x.copy(y).sub(_).normalize(),x}getTangentAt(a,h){let p=this.getUtoTmapping(a);return this.getTangent(p,h)}computeFrenetFrames(a,h){let p=new X,m=[],g=[],_=[],y=new X,x=new ye;for(let w=0;w<=a;w++){let C=w/a;m[w]=this.getTangentAt(C,new X)}g[0]=new X,_[0]=new X;let M=Number.MAX_VALUE,S=Math.abs(m[0].x),b=Math.abs(m[0].y),v=Math.abs(m[0].z);if(S<=M)M=S,p.set(1,0,0);if(b<=M)M=b,p.set(0,1,0);if(v<=M)p.set(0,0,1);y.crossVectors(m[0],p).normalize(),g[0].crossVectors(m[0],y),_[0].crossVectors(m[0],g[0]);for(let w=1;w<=a;w++){if(g[w]=g[w-1].clone(),_[w]=_[w-1].clone(),y.crossVectors(m[w-1],m[w]),y.length()>Number.EPSILON){y.normalize();let C=Math.acos(Ue(m[w-1].dot(m[w]),-1,1));g[w].applyMatrix4(x.makeRotationAxis(y,C))}_[w].crossVectors(m[w],g[w])}if(h===!0){let w=Math.acos(Ue(g[0].dot(g[a]),-1,1));if(w/=a,m[0].dot(y.crossVectors(g[0],g[a]))>0)w=-w;for(let C=1;C<=a;C++)g[C].applyMatrix4(x.makeRotationAxis(m[C],w*C)),_[C].crossVectors(m[C],g[C])}return{tangents:m,normals:g,binormals:_}}clone(){return new this.constructor().copy(this)}copy(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}toJSON(){let a={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return a.arcLengthDivisions=this.arcLengthDivisions,a.type=this.type,a}fromJSON(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}}class ur extends yn{constructor(a=0,h=0,p=1,m=1,g=0,_=Math.PI*2,y=!1,x=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=a,this.aY=h,this.xRadius=p,this.yRadius=m,this.aStartAngle=g,this.aEndAngle=_,this.aClockwise=y,this.aRotation=x}getPoint(a,h=new St){let p=h,m=Math.PI*2,g=this.aEndAngle-this.aStartAngle,_=Math.abs(g)<Number.EPSILON;while(g<0)g+=m;while(g>m)g-=m;if(g<Number.EPSILON)if(_)g=0;else g=m;if(this.aClockwise===!0&&!_)if(g===m)g=-m;else g=g-m;let y=this.aStartAngle+a*g,x=this.aX+this.xRadius*Math.cos(y),M=this.aY+this.yRadius*Math.sin(y);if(this.aRotation!==0){let S=Math.cos(this.aRotation),b=Math.sin(this.aRotation),v=x-this.aX,w=M-this.aY;x=v*S-w*b+this.aX,M=v*b+w*S+this.aY}return p.set(x,M)}copy(a){return super.copy(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}toJSON(){let a=super.toJSON();return a.aX=this.aX,a.aY=this.aY,a.xRadius=this.xRadius,a.yRadius=this.yRadius,a.aStartAngle=this.aStartAngle,a.aEndAngle=this.aEndAngle,a.aClockwise=this.aClockwise,a.aRotation=this.aRotation,a}fromJSON(a){return super.fromJSON(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}}class Tl extends ur{constructor(a,h,p,m,g,_){super(a,h,p,p,m,g,_);this.isArcCurve=!0,this.type="ArcCurve"}}function va(){let a=0,h=0,p=0,m=0;function g(_,y,x,M){a=_,h=x,p=-3*_+3*y-2*x-M,m=2*_-2*y+x+M}return{initCatmullRom:function(_,y,x,M,S){g(y,x,S*(x-_),S*(M-y))},initNonuniformCatmullRom:function(_,y,x,M,S,b,v){let w=(y-_)/S-(x-_)/(S+b)+(x-y)/b,C=(x-y)/b-(M-y)/(b+v)+(M-x)/v;w*=b,C*=b,g(y,x,w,C)},calc:function(_){let y=_*_,x=y*_;return a+h*_+p*y+m*x}}}var Js=new X,Zr=new va,Jr=new va,$r=new va;class wl extends yn{constructor(a=[],h=!1,p="centripetal",m=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=a,this.closed=h,this.curveType=p,this.tension=m}getPoint(a,h=new X){let p=h,m=this.points,g=m.length,_=(g-(this.closed?0:1))*a,y=Math.floor(_),x=_-y;if(this.closed)y+=y>0?0:(Math.floor(Math.abs(y)/g)+1)*g;else if(x===0&&y===g-1)y=g-2,x=1;let M,S;if(this.closed||y>0)M=m[(y-1)%g];else Js.subVectors(m[0],m[1]).add(m[0]),M=Js;let b=m[y%g],v=m[(y+1)%g];if(this.closed||y+2<g)S=m[(y+2)%g];else Js.subVectors(m[g-1],m[g-2]).add(m[g-1]),S=Js;if(this.curveType==="centripetal"||this.curveType==="chordal"){let w=this.curveType==="chordal"?0.5:0.25,C=Math.pow(M.distanceToSquared(b),w),I=Math.pow(b.distanceToSquared(v),w),D=Math.pow(v.distanceToSquared(S),w);if(I<0.0001)I=1;if(C<0.0001)C=I;if(D<0.0001)D=I;Zr.initNonuniformCatmullRom(M.x,b.x,v.x,S.x,C,I,D),Jr.initNonuniformCatmullRom(M.y,b.y,v.y,S.y,C,I,D),$r.initNonuniformCatmullRom(M.z,b.z,v.z,S.z,C,I,D)}else if(this.curveType==="catmullrom")Zr.initCatmullRom(M.x,b.x,v.x,S.x,this.tension),Jr.initCatmullRom(M.y,b.y,v.y,S.y,this.tension),$r.initCatmullRom(M.z,b.z,v.z,S.z,this.tension);return p.set(Zr.calc(x),Jr.calc(x),$r.calc(x)),p}copy(a){super.copy(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(m.clone())}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}toJSON(){let a=super.toJSON();a.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];a.points.push(m.toArray())}return a.closed=this.closed,a.curveType=this.curveType,a.tension=this.tension,a}fromJSON(a){super.fromJSON(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(new X().fromArray(m))}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}}function ko(a,h,p,m,g){let _=(m-h)*0.5,y=(g-p)*0.5,x=a*a,M=a*x;return(2*p-2*m+_+y)*M+(-3*p+3*m-2*_-y)*x+_*a+p}function pp(a,h){let p=1-a;return p*p*h}function mp(a,h){return 2*(1-a)*a*h}function gp(a,h){return a*a*h}function as(a,h,p,m){return pp(a,h)+mp(a,p)+gp(a,m)}function _p(a,h){let p=1-a;return p*p*p*h}function xp(a,h){let p=1-a;return 3*p*p*a*h}function yp(a,h){return 3*(1-a)*a*a*h}function vp(a,h){return a*a*a*h}function os(a,h,p,m,g){return _p(a,h)+xp(a,p)+yp(a,m)+vp(a,g)}class Ma extends yn{constructor(a=new St,h=new St,p=new St,m=new St){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=a,this.v1=h,this.v2=p,this.v3=m}getPoint(a,h=new St){let p=h,m=this.v0,g=this.v1,_=this.v2,y=this.v3;return p.set(os(a,m.x,g.x,_.x,y.x),os(a,m.y,g.y,_.y,y.y)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class Al extends yn{constructor(a=new X,h=new X,p=new X,m=new X){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=a,this.v1=h,this.v2=p,this.v3=m}getPoint(a,h=new X){let p=h,m=this.v0,g=this.v1,_=this.v2,y=this.v3;return p.set(os(a,m.x,g.x,_.x,y.x),os(a,m.y,g.y,_.y,y.y),os(a,m.z,g.z,_.z,y.z)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class Sa extends yn{constructor(a=new St,h=new St){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=a,this.v2=h}getPoint(a,h=new St){let p=h;if(a===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(a).add(this.v1);return p}getPointAt(a,h){return this.getPoint(a,h)}getTangent(a,h=new St){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,h){return this.getTangent(a,h)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class Rl extends yn{constructor(a=new X,h=new X){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=a,this.v2=h}getPoint(a,h=new X){let p=h;if(a===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(a).add(this.v1);return p}getPointAt(a,h){return this.getPoint(a,h)}getTangent(a,h=new X){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,h){return this.getTangent(a,h)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class Ea extends yn{constructor(a=new St,h=new St,p=new St){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=a,this.v1=h,this.v2=p}getPoint(a,h=new St){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(as(a,m.x,g.x,_.x),as(a,m.y,g.y,_.y)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class Cl extends yn{constructor(a=new X,h=new X,p=new X){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=a,this.v1=h,this.v2=p}getPoint(a,h=new X){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(as(a,m.x,g.x,_.x),as(a,m.y,g.y,_.y),as(a,m.z,g.z,_.z)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class ba extends yn{constructor(a=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=a}getPoint(a,h=new St){let p=h,m=this.points,g=(m.length-1)*a,_=Math.floor(g),y=g-_,x=m[_===0?_:_-1],M=m[_],S=m[_>m.length-2?m.length-1:_+1],b=m[_>m.length-3?m.length-1:_+2];return p.set(ko(y,x.x,M.x,S.x,b.x),ko(y,x.y,M.y,S.y,b.y)),p}copy(a){super.copy(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(m.clone())}return this}toJSON(){let a=super.toJSON();a.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];a.points.push(m.toArray())}return a}fromJSON(a){super.fromJSON(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(new St().fromArray(m))}return this}}var na=Object.freeze({__proto__:null,ArcCurve:Tl,CatmullRomCurve3:wl,CubicBezierCurve:Ma,CubicBezierCurve3:Al,EllipseCurve:ur,LineCurve:Sa,LineCurve3:Rl,QuadraticBezierCurve:Ea,QuadraticBezierCurve3:Cl,SplineCurve:ba});class Pl extends yn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(a){this.curves.push(a)}closePath(){let a=this.curves[0].getPoint(0),h=this.curves[this.curves.length-1].getPoint(1);if(!a.equals(h)){let p=a.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new na[p](h,a))}return this}getPoint(a,h){let p=a*this.getLength(),m=this.getCurveLengths(),g=0;while(g<m.length){if(m[g]>=p){let _=m[g]-p,y=this.curves[g],x=y.getLength(),M=x===0?0:1-_/x;return y.getPointAt(M,h)}g++}return null}getLength(){let a=this.getCurveLengths();return a[a.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let a=[],h=0;for(let p=0,m=this.curves.length;p<m;p++)h+=this.curves[p].getLength(),a.push(h);return this.cacheLengths=a,a}getSpacedPoints(a=40){let h=[];for(let p=0;p<=a;p++)h.push(this.getPoint(p/a));if(this.autoClose)h.push(h[0]);return h}getPoints(a=12){let h=[],p;for(let m=0,g=this.curves;m<g.length;m++){let _=g[m],y=_.isEllipseCurve?a*2:_.isLineCurve||_.isLineCurve3?1:_.isSplineCurve?a*_.points.length:a,x=_.getPoints(y);for(let M=0;M<x.length;M++){let S=x[M];if(p&&p.equals(S))continue;h.push(S),p=S}}if(this.autoClose&&h.length>1&&!h[h.length-1].equals(h[0]))h.push(h[0]);return h}copy(a){super.copy(a),this.curves=[];for(let h=0,p=a.curves.length;h<p;h++){let m=a.curves[h];this.curves.push(m.clone())}return this.autoClose=a.autoClose,this}toJSON(){let a=super.toJSON();a.autoClose=this.autoClose,a.curves=[];for(let h=0,p=this.curves.length;h<p;h++){let m=this.curves[h];a.curves.push(m.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.autoClose=a.autoClose,this.curves=[];for(let h=0,p=a.curves.length;h<p;h++){let m=a.curves[h];this.curves.push(new na[m.type]().fromJSON(m))}return this}}class ia extends Pl{constructor(a){super();if(this.type="Path",this.currentPoint=new St,a)this.setFromPoints(a)}setFromPoints(a){this.moveTo(a[0].x,a[0].y);for(let h=1,p=a.length;h<p;h++)this.lineTo(a[h].x,a[h].y);return this}moveTo(a,h){return this.currentPoint.set(a,h),this}lineTo(a,h){let p=new Sa(this.currentPoint.clone(),new St(a,h));return this.curves.push(p),this.currentPoint.set(a,h),this}quadraticCurveTo(a,h,p,m){let g=new Ea(this.currentPoint.clone(),new St(a,h),new St(p,m));return this.curves.push(g),this.currentPoint.set(p,m),this}bezierCurveTo(a,h,p,m,g,_){let y=new Ma(this.currentPoint.clone(),new St(a,h),new St(p,m),new St(g,_));return this.curves.push(y),this.currentPoint.set(g,_),this}splineThru(a){let h=[this.currentPoint.clone()].concat(a),p=new ba(h);return this.curves.push(p),this.currentPoint.copy(a[a.length-1]),this}arc(a,h,p,m,g,_){let y=this.currentPoint.x,x=this.currentPoint.y;return this.absarc(a+y,h+x,p,m,g,_),this}absarc(a,h,p,m,g,_){return this.absellipse(a,h,p,p,m,g,_),this}ellipse(a,h,p,m,g,_,y,x){let M=this.currentPoint.x,S=this.currentPoint.y;return this.absellipse(a+M,h+S,p,m,g,_,y,x),this}absellipse(a,h,p,m,g,_,y,x){let M=new ur(a,h,p,m,g,_,y,x);if(this.curves.length>0){let b=M.getPoint(0);if(!b.equals(this.currentPoint))this.lineTo(b.x,b.y)}this.curves.push(M);let S=M.getPoint(1);return this.currentPoint.copy(S),this}copy(a){return super.copy(a),this.currentPoint.copy(a.currentPoint),this}toJSON(){let a=super.toJSON();return a.currentPoint=this.currentPoint.toArray(),a}fromJSON(a){return super.fromJSON(a),this.currentPoint.fromArray(a.currentPoint),this}}class xs extends Ge{constructor(a=1,h=32,p=0,m=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:a,segments:h,thetaStart:p,thetaLength:m},h=Math.max(3,h);let g=[],_=[],y=[],x=[],M=new X,S=new St;_.push(0,0,0),y.push(0,0,1),x.push(0.5,0.5);for(let b=0,v=3;b<=h;b++,v+=3){let w=p+b/h*m;M.x=a*Math.cos(w),M.y=a*Math.sin(w),_.push(M.x,M.y,M.z),y.push(0,0,1),S.x=(_[v]/a+1)/2,S.y=(_[v+1]/a+1)/2,x.push(S.x,S.y)}for(let b=1;b<=h;b++)g.push(b,b+1,0);this.setIndex(g),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(x,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new xs(a.radius,a.segments,a.thetaStart,a.thetaLength)}}class pi extends Ge{constructor(a=1,h=1,p=1,m=32,g=1,_=!1,y=0,x=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:a,radiusBottom:h,height:p,radialSegments:m,heightSegments:g,openEnded:_,thetaStart:y,thetaLength:x};let M=this;m=Math.floor(m),g=Math.floor(g);let S=[],b=[],v=[],w=[],C=0,I=[],D=p/2,A=0;if(R(),_===!1){if(a>0)W(!0);if(h>0)W(!1)}this.setIndex(S),this.setAttribute("position",new Me(b,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(w,2));function R(){let F=new X,H=new X,it=0,q=(h-a)/p;for(let Y=0;Y<=g;Y++){let lt=[],B=Y/g,z=B*(h-a)+a;for(let Q=0;Q<=m;Q++){let st=Q/m,ot=st*x+y,ct=Math.sin(ot),pt=Math.cos(ot);H.x=z*ct,H.y=-B*p+D,H.z=z*pt,b.push(H.x,H.y,H.z),F.set(ct,q,pt).normalize(),v.push(F.x,F.y,F.z),w.push(st,1-B),lt.push(C++)}I.push(lt)}for(let Y=0;Y<m;Y++)for(let lt=0;lt<g;lt++){let B=I[lt][Y],z=I[lt+1][Y],Q=I[lt+1][Y+1],st=I[lt][Y+1];if(a>0||lt!==0)S.push(B,z,st),it+=3;if(h>0||lt!==g-1)S.push(z,Q,st),it+=3}M.addGroup(A,it,0),A+=it}function W(F){let H=C,it=new St,q=new X,Y=0,lt=F===!0?a:h,B=F===!0?1:-1;for(let Q=1;Q<=m;Q++)b.push(0,D*B,0),v.push(0,B,0),w.push(0.5,0.5),C++;let z=C;for(let Q=0;Q<=m;Q++){let ot=Q/m*x+y,ct=Math.cos(ot),pt=Math.sin(ot);q.x=lt*pt,q.y=D*B,q.z=lt*ct,b.push(q.x,q.y,q.z),v.push(0,B,0),it.x=ct*0.5+0.5,it.y=pt*0.5*B+0.5,w.push(it.x,it.y),C++}for(let Q=0;Q<m;Q++){let st=H+Q,ot=z+Q;if(F===!0)S.push(ot,ot+1,st);else S.push(ot+1,ot,st);Y+=3}M.addGroup(A,Y,F===!0?1:2),A+=Y}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new pi(a.radiusTop,a.radiusBottom,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength)}}class dr extends pi{constructor(a=1,h=1,p=32,m=1,g=!1,_=0,y=Math.PI*2){super(0,a,h,p,m,g,_,y);this.type="ConeGeometry",this.parameters={radius:a,height:h,radialSegments:p,heightSegments:m,openEnded:g,thetaStart:_,thetaLength:y}}static fromJSON(a){return new dr(a.radius,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength)}}var $s=new X,Ks=new X,Kr=new X,js=new cn;class Ta extends Ge{constructor(a=null,h=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:a,thresholdAngle:h},a!==null){let m=Math.pow(10,4),g=Math.cos(Fi*h),_=a.getIndex(),y=a.getAttribute("position"),x=_?_.count:y.count,M=[0,0,0],S=["a","b","c"],b=[,,,],v={},w=[];for(let C=0;C<x;C+=3){if(_)M[0]=_.getX(C),M[1]=_.getX(C+1),M[2]=_.getX(C+2);else M[0]=C,M[1]=C+1,M[2]=C+2;let{a:I,b:D,c:A}=js;if(I.fromBufferAttribute(y,M[0]),D.fromBufferAttribute(y,M[1]),A.fromBufferAttribute(y,M[2]),js.getNormal(Kr),b[0]=`${Math.round(I.x*m)},${Math.round(I.y*m)},${Math.round(I.z*m)}`,b[1]=`${Math.round(D.x*m)},${Math.round(D.y*m)},${Math.round(D.z*m)}`,b[2]=`${Math.round(A.x*m)},${Math.round(A.y*m)},${Math.round(A.z*m)}`,b[0]===b[1]||b[1]===b[2]||b[2]===b[0])continue;for(let R=0;R<3;R++){let W=(R+1)%3,F=b[R],H=b[W],it=js[S[R]],q=js[S[W]],Y=`${F}_${H}`,lt=`${H}_${F}`;if(lt in v&&v[lt]){if(Kr.dot(v[lt].normal)<=g)w.push(it.x,it.y,it.z),w.push(q.x,q.y,q.z);v[lt]=null}else if(!(Y in v))v[Y]={index0:M[R],index1:M[W],normal:Kr.clone()}}}for(let C in v)if(v[C]){let{index0:I,index1:D}=v[C];$s.fromBufferAttribute(y,I),Ks.fromBufferAttribute(y,D),w.push($s.x,$s.y,$s.z),w.push(Ks.x,Ks.y,Ks.z)}this.setAttribute("position",new Me(w,3))}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}}class ys extends ia{constructor(a){super(a);this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(a){let h=[];for(let p=0,m=this.holes.length;p<m;p++)h[p]=this.holes[p].getPoints(a);return h}extractPoints(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}}copy(a){super.copy(a),this.holes=[];for(let h=0,p=a.holes.length;h<p;h++){let m=a.holes[h];this.holes.push(m.clone())}return this}toJSON(){let a=super.toJSON();a.uuid=this.uuid,a.holes=[];for(let h=0,p=this.holes.length;h<p;h++){let m=this.holes[h];a.holes.push(m.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.uuid=a.uuid,this.holes=[];for(let h=0,p=a.holes.length;h<p;h++){let m=a.holes[h];this.holes.push(new ia().fromJSON(m))}return this}}var Mp={triangulate:function(a,h,p=2){let m=h&&h.length,g=m?h[0]*p:a.length,_=Il(a,0,g,p,!0),y=[];if(!_||_.next===_.prev)return y;let x,M,S,b,v,w,C;if(m)_=wp(a,h,_,p);if(a.length>80*p){x=S=a[0],M=b=a[1];for(let I=p;I<g;I+=p){if(v=a[I],w=a[I+1],v<x)x=v;if(w<M)M=w;if(v>S)S=v;if(w>b)b=w}C=Math.max(S-x,b-M),C=C!==0?32767/C:0}return hs(_,y,p,x,M,C,0),y}};function Il(a,h,p,m,g){let _,y;if(g===Op(a,h,p,m)>0)for(_=h;_<p;_+=m)y=Go(_,a[_],a[_+1],y);else for(_=p-m;_>=h;_-=m)y=Go(_,a[_],a[_+1],y);if(y&&fr(y,y.next))ds(y),y=y.next;return y}function ui(a,h){if(!a)return a;if(!h)h=a;let p=a,m;do if(m=!1,!p.steiner&&(fr(p,p.next)||Ce(p.prev,p,p.next)===0)){if(ds(p),p=h=p.prev,p===p.next)break;m=!0}else p=p.next;while(m||p!==h);return h}function hs(a,h,p,m,g,_,y){if(!a)return;if(!y&&_)Ip(a,m,g,_);let x=a,M,S;while(a.prev!==a.next){if(M=a.prev,S=a.next,_?Ep(a,m,g,_):Sp(a)){h.push(M.i/p|0),h.push(a.i/p|0),h.push(S.i/p|0),ds(a),a=S.next,x=S.next;continue}if(a=S,a===x){if(!y)hs(ui(a),h,p,m,g,_,1);else if(y===1)a=bp(ui(a),h,p),hs(a,h,p,m,g,_,2);else if(y===2)Tp(a,h,p,m,g,_);break}}}function Sp(a){let h=a.prev,p=a,m=a.next;if(Ce(h,p,m)>=0)return!1;let g=h.x,_=p.x,y=m.x,x=h.y,M=p.y,S=m.y,b=g<_?g<y?g:y:_<y?_:y,v=x<M?x<S?x:S:M<S?M:S,w=g>_?g>y?g:y:_>y?_:y,C=x>M?x>S?x:S:M>S?M:S,I=m.next;while(I!==h){if(I.x>=b&&I.x<=w&&I.y>=v&&I.y<=C&&Ni(g,x,_,M,y,S,I.x,I.y)&&Ce(I.prev,I,I.next)>=0)return!1;I=I.next}return!0}function Ep(a,h,p,m){let g=a.prev,_=a,y=a.next;if(Ce(g,_,y)>=0)return!1;let x=g.x,M=_.x,S=y.x,b=g.y,v=_.y,w=y.y,C=x<M?x<S?x:S:M<S?M:S,I=b<v?b<w?b:w:v<w?v:w,D=x>M?x>S?x:S:M>S?M:S,A=b>v?b>w?b:w:v>w?v:w,R=sa(C,I,h,p,m),W=sa(D,A,h,p,m),{prevZ:F,nextZ:H}=a;while(F&&F.z>=R&&H&&H.z<=W){if(F.x>=C&&F.x<=D&&F.y>=I&&F.y<=A&&F!==g&&F!==y&&Ni(x,b,M,v,S,w,F.x,F.y)&&Ce(F.prev,F,F.next)>=0)return!1;if(F=F.prevZ,H.x>=C&&H.x<=D&&H.y>=I&&H.y<=A&&H!==g&&H!==y&&Ni(x,b,M,v,S,w,H.x,H.y)&&Ce(H.prev,H,H.next)>=0)return!1;H=H.nextZ}while(F&&F.z>=R){if(F.x>=C&&F.x<=D&&F.y>=I&&F.y<=A&&F!==g&&F!==y&&Ni(x,b,M,v,S,w,F.x,F.y)&&Ce(F.prev,F,F.next)>=0)return!1;F=F.prevZ}while(H&&H.z<=W){if(H.x>=C&&H.x<=D&&H.y>=I&&H.y<=A&&H!==g&&H!==y&&Ni(x,b,M,v,S,w,H.x,H.y)&&Ce(H.prev,H,H.next)>=0)return!1;H=H.nextZ}return!0}function bp(a,h,p){let m=a;do{let g=m.prev,_=m.next.next;if(!fr(g,_)&&Dl(g,m,m.next,_)&&us(g,_)&&us(_,g))h.push(g.i/p|0),h.push(m.i/p|0),h.push(_.i/p|0),ds(m),ds(m.next),m=a=_;m=m.next}while(m!==a);return ui(m)}function Tp(a,h,p,m,g,_){let y=a;do{let x=y.next.next;while(x!==y.prev){if(y.i!==x.i&&Up(y,x)){let M=Ll(y,x);y=ui(y,y.next),M=ui(M,M.next),hs(y,h,p,m,g,_,0),hs(M,h,p,m,g,_,0);return}x=x.next}y=y.next}while(y!==a)}function wp(a,h,p,m){let g=[],_,y,x,M,S;for(_=0,y=h.length;_<y;_++){if(x=h[_]*m,M=_<y-1?h[_+1]*m:a.length,S=Il(a,x,M,m,!1),S===S.next)S.steiner=!0;g.push(Lp(S))}g.sort(Ap);for(_=0;_<g.length;_++)p=Rp(g[_],p);return p}function Ap(a,h){return a.x-h.x}function Rp(a,h){let p=Cp(a,h);if(!p)return h;let m=Ll(p,a);return ui(m,m.next),ui(p,p.next)}function Cp(a,h){let p=h,m=-1/0,g,{x:_,y}=a;do{if(y<=p.y&&y>=p.next.y&&p.next.y!==p.y){let w=p.x+(y-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(w<=_&&w>m){if(m=w,g=p.x<p.next.x?p:p.next,w===_)return g}}p=p.next}while(p!==h);if(!g)return null;let x=g,M=g.x,S=g.y,b=1/0,v;p=g;do{if(_>=p.x&&p.x>=M&&_!==p.x&&Ni(y<S?_:m,y,M,S,y<S?m:_,y,p.x,p.y)){if(v=Math.abs(y-p.y)/(_-p.x),us(p,a)&&(v<b||v===b&&(p.x>g.x||p.x===g.x&&Pp(g,p))))g=p,b=v}p=p.next}while(p!==x);return g}function Pp(a,h){return Ce(a.prev,a,h.prev)<0&&Ce(h.next,a,a.next)<0}function Ip(a,h,p,m){let g=a;do{if(g.z===0)g.z=sa(g.x,g.y,h,p,m);g.prevZ=g.prev,g.nextZ=g.next,g=g.next}while(g!==a);g.prevZ.nextZ=null,g.prevZ=null,Dp(g)}function Dp(a){let h,p,m,g,_,y,x,M,S=1;do{p=a,a=null,_=null,y=0;while(p){y++,m=p,x=0;for(h=0;h<S;h++)if(x++,m=m.nextZ,!m)break;M=S;while(x>0||M>0&&m){if(x!==0&&(M===0||!m||p.z<=m.z))g=p,p=p.nextZ,x--;else g=m,m=m.nextZ,M--;if(_)_.nextZ=g;else a=g;g.prevZ=_,_=g}p=m}_.nextZ=null,S*=2}while(y>1);return a}function sa(a,h,p,m,g){return a=(a-p)*g|0,h=(h-m)*g|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,h=(h|h<<8)&16711935,h=(h|h<<4)&252645135,h=(h|h<<2)&858993459,h=(h|h<<1)&1431655765,a|h<<1}function Lp(a){let h=a,p=a;do{if(h.x<p.x||h.x===p.x&&h.y<p.y)p=h;h=h.next}while(h!==a);return p}function Ni(a,h,p,m,g,_,y,x){return(g-y)*(h-x)>=(a-y)*(_-x)&&(a-y)*(m-x)>=(p-y)*(h-x)&&(p-y)*(_-x)>=(g-y)*(m-x)}function Up(a,h){return a.next.i!==h.i&&a.prev.i!==h.i&&!Np(a,h)&&(us(a,h)&&us(h,a)&&Fp(a,h)&&(Ce(a.prev,a,h.prev)||Ce(a,h.prev,h))||fr(a,h)&&Ce(a.prev,a,a.next)>0&&Ce(h.prev,h,h.next)>0)}function Ce(a,h,p){return(h.y-a.y)*(p.x-h.x)-(h.x-a.x)*(p.y-h.y)}function fr(a,h){return a.x===h.x&&a.y===h.y}function Dl(a,h,p,m){let g=tr(Ce(a,h,p)),_=tr(Ce(a,h,m)),y=tr(Ce(p,m,a)),x=tr(Ce(p,m,h));if(g!==_&&y!==x)return!0;if(g===0&&Qs(a,p,h))return!0;if(_===0&&Qs(a,m,h))return!0;if(y===0&&Qs(p,a,m))return!0;if(x===0&&Qs(p,h,m))return!0;return!1}function Qs(a,h,p){return h.x<=Math.max(a.x,p.x)&&h.x>=Math.min(a.x,p.x)&&h.y<=Math.max(a.y,p.y)&&h.y>=Math.min(a.y,p.y)}function tr(a){return a>0?1:a<0?-1:0}function Np(a,h){let p=a;do{if(p.i!==a.i&&p.next.i!==a.i&&p.i!==h.i&&p.next.i!==h.i&&Dl(p,p.next,a,h))return!0;p=p.next}while(p!==a);return!1}function us(a,h){return Ce(a.prev,a,a.next)<0?Ce(a,h,a.next)>=0&&Ce(a,a.prev,h)>=0:Ce(a,h,a.prev)<0||Ce(a,a.next,h)<0}function Fp(a,h){let p=a,m=!1,g=(a.x+h.x)/2,_=(a.y+h.y)/2;do{if(p.y>_!==p.next.y>_&&p.next.y!==p.y&&g<(p.next.x-p.x)*(_-p.y)/(p.next.y-p.y)+p.x)m=!m;p=p.next}while(p!==a);return m}function Ll(a,h){let p=new ra(a.i,a.x,a.y),m=new ra(h.i,h.x,h.y),g=a.next,_=h.prev;return a.next=h,h.prev=a,p.next=g,g.prev=p,m.next=p,p.prev=m,_.next=m,m.prev=_,m}function Go(a,h,p,m){let g=new ra(a,h,p);if(!m)g.prev=g,g.next=g;else g.next=m.next,g.prev=m,m.next.prev=g,m.next=g;return g}function ds(a){if(a.next.prev=a.prev,a.prev.next=a.next,a.prevZ)a.prevZ.nextZ=a.nextZ;if(a.nextZ)a.nextZ.prevZ=a.prevZ}function ra(a,h,p){this.i=a,this.x=h,this.y=p,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Op(a,h,p,m){let g=0;for(let _=h,y=p-m;_<p;_+=m)g+=(a[y]-a[_])*(a[_+1]+a[y+1]),y=_;return g}class Yn{static area(a){let h=a.length,p=0;for(let m=h-1,g=0;g<h;m=g++)p+=a[m].x*a[g].y-a[g].x*a[m].y;return p*0.5}static isClockWise(a){return Yn.area(a)<0}static triangulateShape(a,h){let p=[],m=[],g=[];Wo(a),Vo(p,a);let _=a.length;h.forEach(Wo);for(let x=0;x<h.length;x++)m.push(_),_+=h[x].length,Vo(p,h[x]);let y=Mp.triangulate(p,m);for(let x=0;x<y.length;x+=3)g.push(y.slice(x,x+3));return g}}function Wo(a){let h=a.length;if(h>2&&a[h-1].equals(a[0]))a.pop()}function Vo(a,h){for(let p=0;p<h.length;p++)a.push(h[p].x),a.push(h[p].y)}class pr extends Ge{constructor(a=new ys([new St(0.5,0.5),new St(-0.5,0.5),new St(-0.5,-0.5),new St(0.5,-0.5)]),h={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:a,options:h},a=Array.isArray(a)?a:[a];let p=this,m=[],g=[];for(let y=0,x=a.length;y<x;y++){let M=a[y];_(M)}this.setAttribute("position",new Me(m,3)),this.setAttribute("uv",new Me(g,2)),this.computeVertexNormals();function _(y){let x=[],M=h.curveSegments!==void 0?h.curveSegments:12,S=h.steps!==void 0?h.steps:1,b=h.depth!==void 0?h.depth:1,v=h.bevelEnabled!==void 0?h.bevelEnabled:!0,w=h.bevelThickness!==void 0?h.bevelThickness:0.2,C=h.bevelSize!==void 0?h.bevelSize:w-0.1,I=h.bevelOffset!==void 0?h.bevelOffset:0,D=h.bevelSegments!==void 0?h.bevelSegments:3,A=h.extrudePath,R=h.UVGenerator!==void 0?h.UVGenerator:Bp,W,F=!1,H,it,q,Y;if(A)W=A.getSpacedPoints(S),F=!0,v=!1,H=A.computeFrenetFrames(S,!1),it=new X,q=new X,Y=new X;if(!v)D=0,w=0,C=0,I=0;let lt=y.extractPoints(M),{shape:B,holes:z}=lt;if(!Yn.isClockWise(B)){B=B.reverse();for(let _t=0,Tt=z.length;_t<Tt;_t++){let V=z[_t];if(Yn.isClockWise(V))z[_t]=V.reverse()}}let st=Yn.triangulateShape(B,z),ot=B;for(let _t=0,Tt=z.length;_t<Tt;_t++){let V=z[_t];B=B.concat(V)}function ct(_t,Tt,V){if(!Tt)console.error("THREE.ExtrudeGeometry: vec does not exist");return _t.clone().addScaledVector(Tt,V)}let pt=B.length,J=st.length;function et(_t,Tt,V){let zt,wt,kt,vt=_t.x-Tt.x,ee=_t.y-Tt.y,Bt=V.x-_t.x,Gt=V.y-_t.y,k=vt*vt+ee*ee,N=vt*Gt-ee*Bt;if(Math.abs(N)>Number.EPSILON){let nt=Math.sqrt(k),mt=Math.sqrt(Bt*Bt+Gt*Gt),xt=Tt.x-ee/nt,ht=Tt.y+vt/nt,Zt=V.x-Gt/mt,Ct=V.y+Bt/mt,Nt=((Zt-xt)*Gt-(Ct-ht)*Bt)/(vt*Gt-ee*Bt);zt=xt+vt*Nt-_t.x,wt=ht+ee*Nt-_t.y;let ie=zt*zt+wt*wt;if(ie<=2)return new St(zt,wt);else kt=Math.sqrt(ie/2)}else{let nt=!1;if(vt>Number.EPSILON){if(Bt>Number.EPSILON)nt=!0}else if(vt<-Number.EPSILON){if(Bt<-Number.EPSILON)nt=!0}else if(Math.sign(ee)===Math.sign(Gt))nt=!0;if(nt)zt=-ee,wt=vt,kt=Math.sqrt(k);else zt=vt,wt=ee,kt=Math.sqrt(k/2)}return new St(zt/kt,wt/kt)}let Z=[];for(let _t=0,Tt=ot.length,V=Tt-1,zt=_t+1;_t<Tt;_t++,V++,zt++){if(V===Tt)V=0;if(zt===Tt)zt=0;Z[_t]=et(ot[_t],ot[V],ot[zt])}let At=[],U,Xt=Z.concat();for(let _t=0,Tt=z.length;_t<Tt;_t++){let V=z[_t];U=[];for(let zt=0,wt=V.length,kt=wt-1,vt=zt+1;zt<wt;zt++,kt++,vt++){if(kt===wt)kt=0;if(vt===wt)vt=0;U[zt]=et(V[zt],V[kt],V[vt])}At.push(U),Xt=Xt.concat(U)}for(let _t=0;_t<D;_t++){let Tt=_t/D,V=w*Math.cos(Tt*Math.PI/2),zt=C*Math.sin(Tt*Math.PI/2)+I;for(let wt=0,kt=ot.length;wt<kt;wt++){let vt=ct(ot[wt],Z[wt],zt);Ht(vt.x,vt.y,-V)}for(let wt=0,kt=z.length;wt<kt;wt++){let vt=z[wt];U=At[wt];for(let ee=0,Bt=vt.length;ee<Bt;ee++){let Gt=ct(vt[ee],U[ee],zt);Ht(Gt.x,Gt.y,-V)}}}let Jt=C+I;for(let _t=0;_t<pt;_t++){let Tt=v?ct(B[_t],Xt[_t],Jt):B[_t];if(!F)Ht(Tt.x,Tt.y,0);else q.copy(H.normals[0]).multiplyScalar(Tt.x),it.copy(H.binormals[0]).multiplyScalar(Tt.y),Y.copy(W[0]).add(q).add(it),Ht(Y.x,Y.y,Y.z)}for(let _t=1;_t<=S;_t++)for(let Tt=0;Tt<pt;Tt++){let V=v?ct(B[Tt],Xt[Tt],Jt):B[Tt];if(!F)Ht(V.x,V.y,b/S*_t);else q.copy(H.normals[_t]).multiplyScalar(V.x),it.copy(H.binormals[_t]).multiplyScalar(V.y),Y.copy(W[_t]).add(q).add(it),Ht(Y.x,Y.y,Y.z)}for(let _t=D-1;_t>=0;_t--){let Tt=_t/D,V=w*Math.cos(Tt*Math.PI/2),zt=C*Math.sin(Tt*Math.PI/2)+I;for(let wt=0,kt=ot.length;wt<kt;wt++){let vt=ct(ot[wt],Z[wt],zt);Ht(vt.x,vt.y,b+V)}for(let wt=0,kt=z.length;wt<kt;wt++){let vt=z[wt];U=At[wt];for(let ee=0,Bt=vt.length;ee<Bt;ee++){let Gt=ct(vt[ee],U[ee],zt);if(!F)Ht(Gt.x,Gt.y,b+V);else Ht(Gt.x,Gt.y+W[S-1].y,W[S-1].x+V)}}}dt(),bt();function dt(){let _t=m.length/3;if(v){let Tt=0,V=pt*Tt;for(let zt=0;zt<J;zt++){let wt=st[zt];Rt(wt[2]+V,wt[1]+V,wt[0]+V)}Tt=S+D*2,V=pt*Tt;for(let zt=0;zt<J;zt++){let wt=st[zt];Rt(wt[0]+V,wt[1]+V,wt[2]+V)}}else{for(let Tt=0;Tt<J;Tt++){let V=st[Tt];Rt(V[2],V[1],V[0])}for(let Tt=0;Tt<J;Tt++){let V=st[Tt];Rt(V[0]+pt*S,V[1]+pt*S,V[2]+pt*S)}}p.addGroup(_t,m.length/3-_t,0)}function bt(){let _t=m.length/3,Tt=0;qt(ot,Tt),Tt+=ot.length;for(let V=0,zt=z.length;V<zt;V++){let wt=z[V];qt(wt,Tt),Tt+=wt.length}p.addGroup(_t,m.length/3-_t,1)}function qt(_t,Tt){let V=_t.length;while(--V>=0){let zt=V,wt=V-1;if(wt<0)wt=_t.length-1;for(let kt=0,vt=S+D*2;kt<vt;kt++){let ee=pt*kt,Bt=pt*(kt+1),Gt=Tt+zt+ee,k=Tt+wt+ee,N=Tt+wt+Bt,nt=Tt+zt+Bt;te(Gt,k,N,nt)}}}function Ht(_t,Tt,V){x.push(_t),x.push(Tt),x.push(V)}function Rt(_t,Tt,V){ae(_t),ae(Tt),ae(V);let zt=m.length/3,wt=R.generateTopUV(p,m,zt-3,zt-2,zt-1);Kt(wt[0]),Kt(wt[1]),Kt(wt[2])}function te(_t,Tt,V,zt){ae(_t),ae(Tt),ae(zt),ae(Tt),ae(V),ae(zt);let wt=m.length/3,kt=R.generateSideWallUV(p,m,wt-6,wt-3,wt-2,wt-1);Kt(kt[0]),Kt(kt[1]),Kt(kt[3]),Kt(kt[1]),Kt(kt[2]),Kt(kt[3])}function ae(_t){m.push(x[_t*3+0]),m.push(x[_t*3+1]),m.push(x[_t*3+2])}function Kt(_t){g.push(_t.x),g.push(_t.y)}}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}toJSON(){let a=super.toJSON(),h=this.parameters.shapes,p=this.parameters.options;return zp(h,p,a)}static fromJSON(a,h){let p=[];for(let g=0,_=a.shapes.length;g<_;g++){let y=h[a.shapes[g]];p.push(y)}let m=a.options.extrudePath;if(m!==void 0)a.options.extrudePath=new na[m.type]().fromJSON(m);return new pr(p,a.options)}}var Bp={generateTopUV:function(a,h,p,m,g){let _=h[p*3],y=h[p*3+1],x=h[m*3],M=h[m*3+1],S=h[g*3],b=h[g*3+1];return[new St(_,y),new St(x,M),new St(S,b)]},generateSideWallUV:function(a,h,p,m,g,_){let y=h[p*3],x=h[p*3+1],M=h[p*3+2],S=h[m*3],b=h[m*3+1],v=h[m*3+2],w=h[g*3],C=h[g*3+1],I=h[g*3+2],D=h[_*3],A=h[_*3+1],R=h[_*3+2];if(Math.abs(x-b)<Math.abs(y-S))return[new St(y,1-M),new St(S,1-v),new St(w,1-I),new St(D,1-R)];else return[new St(x,1-M),new St(b,1-v),new St(C,1-I),new St(A,1-R)]}};function zp(a,h,p){if(p.shapes=[],Array.isArray(a))for(let m=0,g=a.length;m<g;m++){let _=a[m];p.shapes.push(_.uuid)}else p.shapes.push(a.uuid);if(p.options=Object.assign({},h),h.extrudePath!==void 0)p.options.extrudePath=h.extrudePath.toJSON();return p}class mr extends Ge{constructor(a=new ys([new St(0,0.5),new St(-0.5,-0.5),new St(0.5,-0.5)]),h=12){super();this.type="ShapeGeometry",this.parameters={shapes:a,curveSegments:h};let p=[],m=[],g=[],_=[],y=0,x=0;if(Array.isArray(a)===!1)M(a);else for(let S=0;S<a.length;S++)M(a[S]),this.addGroup(y,x,S),y+=x,x=0;this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(_,2));function M(S){let b=m.length/3,v=S.extractPoints(h),{shape:w,holes:C}=v;if(Yn.isClockWise(w)===!1)w=w.reverse();for(let D=0,A=C.length;D<A;D++){let R=C[D];if(Yn.isClockWise(R)===!0)C[D]=R.reverse()}let I=Yn.triangulateShape(w,C);for(let D=0,A=C.length;D<A;D++){let R=C[D];w=w.concat(R)}for(let D=0,A=w.length;D<A;D++){let R=w[D];m.push(R.x,R.y,0),g.push(0,0,1),_.push(R.x,R.y)}for(let D=0,A=I.length;D<A;D++){let R=I[D],W=R[0]+b,F=R[1]+b,H=R[2]+b;p.push(W,F,H),x+=3}}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}toJSON(){let a=super.toJSON(),h=this.parameters.shapes;return Hp(h,a)}static fromJSON(a,h){let p=[];for(let m=0,g=a.shapes.length;m<g;m++){let _=h[a.shapes[m]];p.push(_)}return new mr(p,a.curveSegments)}}function Hp(a,h){if(h.shapes=[],Array.isArray(a))for(let p=0,m=a.length;p<m;p++){let g=a[p];h.shapes.push(g.uuid)}else h.shapes.push(a.uuid);return h}class vs extends Ge{constructor(a=1,h=32,p=16,m=0,g=Math.PI*2,_=0,y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:a,widthSegments:h,heightSegments:p,phiStart:m,phiLength:g,thetaStart:_,thetaLength:y},h=Math.max(3,Math.floor(h)),p=Math.max(2,Math.floor(p));let x=Math.min(_+y,Math.PI),M=0,S=[],b=new X,v=new X,w=[],C=[],I=[],D=[];for(let A=0;A<=p;A++){let R=[],W=A/p,F=0;if(A===0&&_===0)F=0.5/h;else if(A===p&&x===Math.PI)F=-0.5/h;for(let H=0;H<=h;H++){let it=H/h;b.x=-a*Math.cos(m+it*g)*Math.sin(_+W*y),b.y=a*Math.cos(_+W*y),b.z=a*Math.sin(m+it*g)*Math.sin(_+W*y),C.push(b.x,b.y,b.z),v.copy(b).normalize(),I.push(v.x,v.y,v.z),D.push(it+F,1-W),R.push(M++)}S.push(R)}for(let A=0;A<p;A++)for(let R=0;R<h;R++){let W=S[A][R+1],F=S[A][R],H=S[A+1][R],it=S[A+1][R+1];if(A!==0||_>0)w.push(W,F,it);if(A!==p-1||x<Math.PI)w.push(F,H,it)}this.setIndex(w),this.setAttribute("position",new Me(C,3)),this.setAttribute("normal",new Me(I,3)),this.setAttribute("uv",new Me(D,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new vs(a.radius,a.widthSegments,a.heightSegments,a.phiStart,a.phiLength,a.thetaStart,a.thetaLength)}}class jn extends Ge{constructor(a=1,h=0.4,p=12,m=48,g=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:a,tube:h,radialSegments:p,tubularSegments:m,arc:g},p=Math.floor(p),m=Math.floor(m);let _=[],y=[],x=[],M=[],S=new X,b=new X,v=new X;for(let w=0;w<=p;w++)for(let C=0;C<=m;C++){let I=C/m*g,D=w/p*Math.PI*2;b.x=(a+h*Math.cos(D))*Math.cos(I),b.y=(a+h*Math.cos(D))*Math.sin(I),b.z=h*Math.sin(D),y.push(b.x,b.y,b.z),S.x=a*Math.cos(I),S.y=a*Math.sin(I),v.subVectors(b,S).normalize(),x.push(v.x,v.y,v.z),M.push(C/m),M.push(w/p)}for(let w=1;w<=p;w++)for(let C=1;C<=m;C++){let I=(m+1)*w+C-1,D=(m+1)*(w-1)+C-1,A=(m+1)*(w-1)+C,R=(m+1)*w+C;_.push(I,D,R),_.push(D,A,R)}this.setIndex(_),this.setAttribute("position",new Me(y,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(M,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new jn(a.radius,a.tube,a.radialSegments,a.tubularSegments,a.arc)}}class wa extends $n{static get type(){return"ShadowMaterial"}constructor(a){super();this.isShadowMaterial=!0,this.color=new he(0),this.transparent=!0,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.fog=a.fog,this}}class Fn extends $n{static get type(){return"MeshStandardMaterial"}constructor(a){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.defines={STANDARD:""},this.color.copy(a.color),this.roughness=a.roughness,this.metalness=a.metalness,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.roughnessMap=a.roughnessMap,this.metalnessMap=a.metalnessMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.envMapIntensity=a.envMapIntensity,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}class Aa extends Fn{static get type(){return"MeshPhysicalMaterial"}constructor(a){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(h){this.ior=(1+0.4*h)/(1-0.4*h)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(a)}get anisotropy(){return this._anisotropy}set anisotropy(a){if(this._anisotropy>0!==a>0)this.version++;this._anisotropy=a}get clearcoat(){return this._clearcoat}set clearcoat(a){if(this._clearcoat>0!==a>0)this.version++;this._clearcoat=a}get iridescence(){return this._iridescence}set iridescence(a){if(this._iridescence>0!==a>0)this.version++;this._iridescence=a}get dispersion(){return this._dispersion}set dispersion(a){if(this._dispersion>0!==a>0)this.version++;this._dispersion=a}get sheen(){return this._sheen}set sheen(a){if(this._sheen>0!==a>0)this.version++;this._sheen=a}get transmission(){return this._transmission}set transmission(a){if(this._transmission>0!==a>0)this.version++;this._transmission=a}copy(a){return super.copy(a),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=a.anisotropy,this.anisotropyRotation=a.anisotropyRotation,this.anisotropyMap=a.anisotropyMap,this.clearcoat=a.clearcoat,this.clearcoatMap=a.clearcoatMap,this.clearcoatRoughness=a.clearcoatRoughness,this.clearcoatRoughnessMap=a.clearcoatRoughnessMap,this.clearcoatNormalMap=a.clearcoatNormalMap,this.clearcoatNormalScale.copy(a.clearcoatNormalScale),this.dispersion=a.dispersion,this.ior=a.ior,this.iridescence=a.iridescence,this.iridescenceMap=a.iridescenceMap,this.iridescenceIOR=a.iridescenceIOR,this.iridescenceThicknessRange=[...a.iridescenceThicknessRange],this.iridescenceThicknessMap=a.iridescenceThicknessMap,this.sheen=a.sheen,this.sheenColor.copy(a.sheenColor),this.sheenColorMap=a.sheenColorMap,this.sheenRoughness=a.sheenRoughness,this.sheenRoughnessMap=a.sheenRoughnessMap,this.transmission=a.transmission,this.transmissionMap=a.transmissionMap,this.thickness=a.thickness,this.thicknessMap=a.thicknessMap,this.attenuationDistance=a.attenuationDistance,this.attenuationColor.copy(a.attenuationColor),this.specularIntensity=a.specularIntensity,this.specularIntensityMap=a.specularIntensityMap,this.specularColor.copy(a.specularColor),this.specularColorMap=a.specularColorMap,this}}function er(a,h,p){if(!a||!p&&a.constructor===h)return a;if(typeof h.BYTES_PER_ELEMENT==="number")return new h(a);return Array.prototype.slice.call(a)}function kp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}class Ms{constructor(a,h,p,m){this.parameterPositions=a,this._cachedIndex=0,this.resultBuffer=m!==void 0?m:new h.constructor(p),this.sampleValues=h,this.valueSize=p,this.settings=null,this.DefaultSettings_={}}evaluate(a){let h=this.parameterPositions,p=this._cachedIndex,m=h[p],g=h[p-1];n:{t:{let _;e:{i:if(!(a<m)){for(let y=p+2;;){if(m===void 0){if(a<g)break i;return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}if(p===y)break;if(g=m,m=h[++p],a<m)break t}_=h.length;break e}if(!(a>=g)){let y=h[1];if(a<y)p=2,g=y;for(let x=p-2;;){if(g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(p===x)break;if(m=g,g=h[--p-1],a>=g)break t}_=p,p=0;break e}break n}while(p<_){let y=p+_>>>1;if(a<h[y])_=y;else p=y+1}if(m=h[p],g=h[p-1],g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(m===void 0)return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}this._cachedIndex=p,this.intervalChanged_(p,g,m)}return this.interpolate_(p,g,a,m)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(a){let h=this.resultBuffer,p=this.sampleValues,m=this.valueSize,g=a*m;for(let _=0;_!==m;++_)h[_]=p[g+_];return h}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Ul extends Ms{constructor(a,h,p,m){super(a,h,p,m);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(a,h,p){let m=this.parameterPositions,g=a-2,_=a+1,y=m[g],x=m[_];if(y===void 0)switch(this.getSettings_().endingStart){case 2401:g=a,y=2*h-p;break;case 2402:g=m.length-2,y=h+m[g]-m[g+1];break;default:g=a,y=p}if(x===void 0)switch(this.getSettings_().endingEnd){case 2401:_=a,x=2*p-h;break;case 2402:_=1,x=p+m[1]-m[0];break;default:_=a-1,x=h}let M=(p-h)*0.5,S=this.valueSize;this._weightPrev=M/(h-y),this._weightNext=M/(x-p),this._offsetPrev=g*S,this._offsetNext=_*S}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=a*y,M=x-y,S=this._offsetPrev,b=this._offsetNext,v=this._weightPrev,w=this._weightNext,C=(p-h)/(m-h),I=C*C,D=I*C,A=-v*D+2*v*I-v*C,R=(1+v)*D+(-1.5-2*v)*I+(-0.5+v)*C+1,W=(-1-w)*D+(1.5+w)*I+0.5*C,F=w*D-w*I;for(let H=0;H!==y;++H)g[H]=A*_[S+H]+R*_[M+H]+W*_[x+H]+F*_[b+H];return g}}class Nl extends Ms{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=a*y,M=x-y,S=(p-h)/(m-h),b=1-S;for(let v=0;v!==y;++v)g[v]=_[M+v]*b+_[x+v]*S;return g}}class Fl extends Ms{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a){return this.copySampleValue_(a-1)}}class Rn{constructor(a,h,p,m){if(a===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(h===void 0||h.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a,this.times=er(h,this.TimeBufferType),this.values=er(p,this.ValueBufferType),this.setInterpolation(m||this.DefaultInterpolation)}static toJSON(a){let h=a.constructor,p;if(h.toJSON!==this.toJSON)p=h.toJSON(a);else{p={name:a.name,times:er(a.times,Array),values:er(a.values,Array)};let m=a.getInterpolation();if(m!==a.DefaultInterpolation)p.interpolation=m}return p.type=a.ValueTypeName,p}InterpolantFactoryMethodDiscrete(a){return new Fl(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodLinear(a){return new Nl(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodSmooth(a){return new Ul(this.times,this.values,this.getValueSize(),a)}setInterpolation(a){let h;switch(a){case 2300:h=this.InterpolantFactoryMethodDiscrete;break;case 2301:h=this.InterpolantFactoryMethodLinear;break;case 2302:h=this.InterpolantFactoryMethodSmooth;break}if(h===void 0){let p="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(p);return console.warn("THREE.KeyframeTrack:",p),this}return this.createInterpolant=h,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(a){if(a!==0){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]+=a}return this}scale(a){if(a!==1){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]*=a}return this}trim(a,h){let p=this.times,m=p.length,g=0,_=m-1;while(g!==m&&p[g]<a)++g;while(_!==-1&&p[_]>h)--_;if(++_,g!==0||_!==m){if(g>=_)_=Math.max(_,1),g=_-1;let y=this.getValueSize();this.times=p.slice(g,_),this.values=this.values.slice(g*y,_*y)}return this}validate(){let a=!0,h=this.getValueSize();if(h-Math.floor(h)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1;let p=this.times,m=this.values,g=p.length;if(g===0)console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1;let _=null;for(let y=0;y!==g;y++){let x=p[y];if(typeof x==="number"&&isNaN(x)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,y,x),a=!1;break}if(_!==null&&_>x){console.error("THREE.KeyframeTrack: Out of order keys.",this,y,x,_),a=!1;break}_=x}if(m!==void 0){if(kp(m))for(let y=0,x=m.length;y!==x;++y){let M=m[y];if(isNaN(M)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,y,M),a=!1;break}}}return a}optimize(){let a=this.times.slice(),h=this.values.slice(),p=this.getValueSize(),m=this.getInterpolation()===2302,g=a.length-1,_=1;for(let y=1;y<g;++y){let x=!1,M=a[y],S=a[y+1];if(M!==S&&(y!==1||M!==a[0]))if(!m){let b=y*p,v=b-p,w=b+p;for(let C=0;C!==p;++C){let I=h[b+C];if(I!==h[v+C]||I!==h[w+C]){x=!0;break}}}else x=!0;if(x){if(y!==_){a[_]=a[y];let b=y*p,v=_*p;for(let w=0;w!==p;++w)h[v+w]=h[b+w]}++_}}if(g>0){a[_]=a[g];for(let y=g*p,x=_*p,M=0;M!==p;++M)h[x+M]=h[y+M];++_}if(_!==a.length)this.times=a.slice(0,_),this.values=h.slice(0,_*p);else this.times=a,this.values=h;return this}clone(){let a=this.times.slice(),h=this.values.slice(),m=new this.constructor(this.name,a,h);return m.createInterpolant=this.createInterpolant,m}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=2301;class ki extends Rn{constructor(a,h,p){super(a,h,p)}}ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=2300;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Ol extends Rn{}Ol.prototype.ValueTypeName="color";class Bl extends Rn{}Bl.prototype.ValueTypeName="number";class zl extends Ms{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=(p-h)/(m-h),M=a*y;for(let S=M+y;M!==S;M+=4)un.slerpFlat(g,0,_,M-y,_,M,x);return g}}class Ra extends Rn{InterpolantFactoryMethodLinear(a){return new zl(this.times,this.values,this.getValueSize(),a)}}Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends Rn{constructor(a,h,p){super(a,h,p)}}Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=2300;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Hl extends Rn{}Hl.prototype.ValueTypeName="vector";class kl{constructor(a,h,p){let m=this,g=!1,_=0,y=0,x=void 0,M=[];this.onStart=void 0,this.onLoad=a,this.onProgress=h,this.onError=p,this.itemStart=function(S){if(y++,g===!1){if(m.onStart!==void 0)m.onStart(S,_,y)}g=!0},this.itemEnd=function(S){if(_++,m.onProgress!==void 0)m.onProgress(S,_,y);if(_===y){if(g=!1,m.onLoad!==void 0)m.onLoad()}},this.itemError=function(S){if(m.onError!==void 0)m.onError(S)},this.resolveURL=function(S){if(x)return x(S);return S},this.setURLModifier=function(S){return x=S,this},this.addHandler=function(S,b){return M.push(S,b),this},this.removeHandler=function(S){let b=M.indexOf(S);if(b!==-1)M.splice(b,2);return this},this.getHandler=function(S){for(let b=0,v=M.length;b<v;b+=2){let w=M[b],C=M[b+1];if(w.global)w.lastIndex=0;if(w.test(S))return C}return null}}}var Gp=new kl;class Gl{constructor(a){this.manager=a!==void 0?a:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(a,h){let p=this;return new Promise(function(m,g){p.load(a,m,h,g)})}parse(){}setCrossOrigin(a){return this.crossOrigin=a,this}setWithCredentials(a){return this.withCredentials=a,this}setPath(a){return this.path=a,this}setResourcePath(a){return this.resourcePath=a,this}setRequestHeader(a){return this.requestHeader=a,this}}Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";class gr extends ze{constructor(a,h=1){super();this.isLight=!0,this.type="Light",this.color=new he(a),this.intensity=h}dispose(){}copy(a,h){return super.copy(a,h),this.color.copy(a.color),this.intensity=a.intensity,this}toJSON(a){let h=super.toJSON(a);if(h.object.color=this.color.getHex(),h.object.intensity=this.intensity,this.groundColor!==void 0)h.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)h.object.distance=this.distance;if(this.angle!==void 0)h.object.angle=this.angle;if(this.decay!==void 0)h.object.decay=this.decay;if(this.penumbra!==void 0)h.object.penumbra=this.penumbra;if(this.shadow!==void 0)h.object.shadow=this.shadow.toJSON();if(this.target!==void 0)h.object.target=this.target.uuid;return h}}class Ca extends gr{constructor(a,h,p){super(a,p);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(h)}copy(a,h){return super.copy(a,h),this.groundColor.copy(a.groundColor),this}}var jr=new ye,Xo=new X,qo=new X;class Pa{constructor(a){this.camera=a,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(a){let h=this.camera,p=this.matrix;Xo.setFromMatrixPosition(a.matrixWorld),h.position.copy(Xo),qo.setFromMatrixPosition(a.target.matrixWorld),h.lookAt(qo),h.updateMatrixWorld(),jr.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),p.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),p.multiply(jr)}getViewport(a){return this._viewports[a]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(a){return this.camera=a.camera.clone(),this.intensity=a.intensity,this.bias=a.bias,this.radius=a.radius,this.mapSize.copy(a.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let a={};if(this.intensity!==1)a.intensity=this.intensity;if(this.bias!==0)a.bias=this.bias;if(this.normalBias!==0)a.normalBias=this.normalBias;if(this.radius!==1)a.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)a.mapSize=this.mapSize.toArray();return a.camera=this.camera.toJSON(!1).object,delete a.camera.matrix,a}}var Yo=new ye,es=new X,Qr=new X;class Wl extends Pa{constructor(){super(new $e(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(a,h=0){let p=this.camera,m=this.matrix,g=a.distance||p.far;if(g!==p.far)p.far=g,p.updateProjectionMatrix();es.setFromMatrixPosition(a.matrixWorld),p.position.copy(es),Qr.copy(p.position),Qr.add(this._cubeDirections[h]),p.up.copy(this._cubeUps[h]),p.lookAt(Qr),p.updateMatrixWorld(),m.makeTranslation(-es.x,-es.y,-es.z),Yo.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo)}}class Ia extends gr{constructor(a,h,p=0,m=2){super(a,h);this.isPointLight=!0,this.type="PointLight",this.distance=p,this.decay=m,this.shadow=new Wl}get power(){return this.intensity*4*Math.PI}set power(a){this.intensity=a/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(a,h){return super.copy(a,h),this.distance=a.distance,this.decay=a.decay,this.shadow=a.shadow.clone(),this}}class Vl extends Pa{constructor(){super(new ms(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Da extends gr{constructor(a,h){super(a,h);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(a){return super.copy(a),this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}var La="\\[\\]\\.:\\/",Wp=new RegExp("["+La+"]","g"),Ua="[^"+La+"]",Vp="[^"+La.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",Ua),qp=/(WCOD+)?/.source.replace("WCOD",Vp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ua),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ua),Jp=new RegExp("^"+Xp+qp+Yp+Zp+"$"),$p=["material","materials","bones","map"];class Xl{constructor(a,h,p){let m=p||Ee.parseTrackName(h);this._targetGroup=a,this._bindings=a.subscribe_(h,m)}getValue(a,h){this.bind();let p=this._targetGroup.nCachedObjects_,m=this._bindings[p];if(m!==void 0)m.getValue(a,h)}setValue(a,h){let p=this._bindings;for(let m=this._targetGroup.nCachedObjects_,g=p.length;m!==g;++m)p[m].setValue(a,h)}bind(){let a=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=a.length;h!==p;++h)a[h].bind()}unbind(){let a=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=a.length;h!==p;++h)a[h].unbind()}}class Ee{constructor(a,h,p){this.path=h,this.parsedPath=p||Ee.parseTrackName(h),this.node=Ee.findNode(a,this.parsedPath.nodeName),this.rootNode=a,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(a,h,p){if(!(a&&a.isAnimationObjectGroup))return new Ee(a,h,p);else return new Ee.Composite(a,h,p)}static sanitizeNodeName(a){return a.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(a){let h=Jp.exec(a);if(h===null)throw Error("PropertyBinding: Cannot parse trackName: "+a);let p={nodeName:h[2],objectName:h[3],objectIndex:h[4],propertyName:h[5],propertyIndex:h[6]},m=p.nodeName&&p.nodeName.lastIndexOf(".");if(m!==void 0&&m!==-1){let g=p.nodeName.substring(m+1);if($p.indexOf(g)!==-1)p.nodeName=p.nodeName.substring(0,m),p.objectName=g}if(p.propertyName===null||p.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return p}static findNode(a,h){if(h===void 0||h===""||h==="."||h===-1||h===a.name||h===a.uuid)return a;if(a.skeleton){let p=a.skeleton.getBoneByName(h);if(p!==void 0)return p}if(a.children){let p=function(g){for(let _=0;_<g.length;_++){let y=g[_];if(y.name===h||y.uuid===h)return y;let x=p(y.children);if(x)return x}return null},m=p(a.children);if(m)return m}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(a,h){a[h]=this.targetObject[this.propertyName]}_getValue_array(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)a[h++]=p[m]}_getValue_arrayElement(a,h){a[h]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(a,h){this.resolvedProperty.toArray(a,h)}_setValue_direct(a,h){this.targetObject[this.propertyName]=a[h]}_setValue_direct_setNeedsUpdate(a,h){this.targetObject[this.propertyName]=a[h],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(a,h){this.targetObject[this.propertyName]=a[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++]}_setValue_array_setNeedsUpdate(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(a,h){this.resolvedProperty[this.propertyIndex]=a[h]}_setValue_arrayElement_setNeedsUpdate(a,h){this.resolvedProperty[this.propertyIndex]=a[h],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(a,h){this.resolvedProperty[this.propertyIndex]=a[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(a,h){this.resolvedProperty.fromArray(a,h)}_setValue_fromArray_setNeedsUpdate(a,h){this.resolvedProperty.fromArray(a,h),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(a,h){this.resolvedProperty.fromArray(a,h),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(a,h){this.bind(),this.getValue(a,h)}_setValue_unbound(a,h){this.bind(),this.setValue(a,h)}bind(){let a=this.node,h=this.parsedPath,{objectName:p,propertyName:m,propertyIndex:g}=h;if(!a)a=Ee.findNode(this.rootNode,h.nodeName),this.node=a;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!a){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(p){let M=h.objectIndex;switch(p){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(let S=0;S<a.length;S++)if(a[S].name===M){M=S;break}break;case"map":if("map"in a){a=a.map;break}if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}a=a.material.map;break;default:if(a[p]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[p]}if(M!==void 0){if(a[M]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[M]}}let _=a[m];if(_===void 0){let M=h.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+M+"."+m+" but it wasn't found.",a);return}let y=this.Versioning.None;if(this.targetObject=a,a.needsUpdate!==void 0)y=this.Versioning.NeedsUpdate;else if(a.matrixWorldNeedsUpdate!==void 0)y=this.Versioning.MatrixWorldNeedsUpdate;let x=this.BindingType.Direct;if(g!==void 0){if(m==="morphTargetInfluences"){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(a.morphTargetDictionary[g]!==void 0)g=a.morphTargetDictionary[g]}x=this.BindingType.ArrayElement,this.resolvedProperty=_,this.propertyIndex=g}else if(_.fromArray!==void 0&&_.toArray!==void 0)x=this.BindingType.HasFromToArray,this.resolvedProperty=_;else if(Array.isArray(_))x=this.BindingType.EntireArray,this.resolvedProperty=_;else this.propertyName=m;this.getValue=this.GetterByBindingType[x],this.setValue=this.SetterByBindingTypeAndVersioning[x][y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ee.Composite=Xl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ym=new Float32Array(1);var Zo=new ye;class Na{constructor(a,h,p=0,m=1/0){this.ray=new zi(a,h),this.near=p,this.far=m,this.camera=null,this.layers=new ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(a,h){this.ray.set(a,h)}setFromCamera(a,h){if(h.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(h.matrixWorld),this.ray.direction.set(a.x,a.y,0.5).unproject(h).sub(this.ray.origin).normalize(),this.camera=h;else if(h.isOrthographicCamera)this.ray.origin.set(a.x,a.y,(h.near+h.far)/(h.near-h.far)).unproject(h),this.ray.direction.set(0,0,-1).transformDirection(h.matrixWorld),this.camera=h;else console.error("THREE.Raycaster: Unsupported camera type: "+h.type)}setFromXRController(a){return Zo.identity().extractRotation(a.matrixWorld),this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zo),this}intersectObject(a,h=!0,p=[]){return aa(a,this,p,h),p.sort(Jo),p}intersectObjects(a,h=!0,p=[]){for(let m=0,g=a.length;m<g;m++)aa(a[m],this,p,h);return p.sort(Jo),p}}function Jo(a,h){return a.distance-h.distance}function aa(a,h,p,m){let g=!0;if(a.layers.test(h.layers)){if(a.raycast(h,p)===!1)g=!1}if(g===!0&&m===!0){let _=a.children;for(let y=0,x=_.length;y<x;y++)aa(_[y],h,p,!0)}}class _r{constructor(a=1,h=0,p=0){return this.radius=a,this.phi=h,this.theta=p,this}set(a,h,p){return this.radius=a,this.phi=h,this.theta=p,this}copy(a){return this.radius=a.radius,this.phi=a.phi,this.theta=a.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z)}setFromCartesianCoords(a,h,p){if(this.radius=Math.sqrt(a*a+h*h+p*p),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(a,p),this.phi=Math.acos(Ue(h/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class Fa extends Jn{constructor(a,h=null){super();this.object=a,this.domElement=h,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="170";var ql={type:"change"},Ba={type:"start"},Zl={type:"end"},xr=new zi,Yl=new ln,jp=Math.cos(70*Qo.DEG2RAD),Oe=new X,Qe=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oa=0.000001;class yr extends Fa{constructor(a,h=null){super(a,h);if(this.state=Te.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xn.ROTATE,MIDDLE:xn.DOLLY,RIGHT:xn.PAN},this.touches={ONE:Tn.ROTATE,TWO:Tn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new un,this._lastTargetPosition=new X,this._quat=new un().setFromUnitVectors(a.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _r,this._sphericalDelta=new _r,this._scale=1,this._panOffset=new X,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new X,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tm.bind(this),this._onPointerDown=Qp.bind(this),this._onPointerUp=em.bind(this),this._onContextMenu=lm.bind(this),this._onMouseWheel=sm.bind(this),this._onKeyDown=rm.bind(this),this._onTouchStart=am.bind(this),this._onTouchMove=om.bind(this),this._onMouseDown=nm.bind(this),this._onMouseMove=im.bind(this),this._interceptControlDown=cm.bind(this),this._interceptControlUp=hm.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(a){a.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=a}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ql),this.update(),this.state=Te.NONE}update(a=null){let h=this.object.position;if(Oe.copy(h).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===Te.NONE)this._rotateLeft(this._getAutoRotationAngle(a));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let p=this.minAzimuthAngle,m=this.maxAzimuthAngle;if(isFinite(p)&&isFinite(m)){if(p<-Math.PI)p+=Qe;else if(p>Math.PI)p-=Qe;if(m<-Math.PI)m+=Qe;else if(m>Math.PI)m-=Qe;if(p<=m)this._spherical.theta=Math.max(p,Math.min(m,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(p+m)/2?Math.max(p,this._spherical.theta):Math.min(m,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let g=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let _=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),g=_!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),h.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let _=null;if(this.object.isPerspectiveCamera){let y=Oe.length();_=this._clampDistance(y*this._scale);let x=y-_;this.object.position.addScaledVector(this._dollyDirection,x),this.object.updateMatrixWorld(),g=!!x}else if(this.object.isOrthographicCamera){let y=new X(this._mouse.x,this._mouse.y,0);y.unproject(this.object);let x=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),g=x!==this.object.zoom;let M=new X(this._mouse.x,this._mouse.y,0);M.unproject(this.object),this.object.position.sub(M).add(y),this.object.updateMatrixWorld(),_=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(_!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(_).add(this.object.position);else if(xr.origin.copy(this.object.position),xr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xr.direction))<jp)this.object.lookAt(this.target);else Yl.setFromNormalAndCoplanarPoint(this.object.up,this.target),xr.intersectPlane(Yl,this.target)}else if(this.object.isOrthographicCamera){let _=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),_!==this.object.zoom)this.object.updateProjectionMatrix(),g=!0}if(this._scale=1,this._performCursorZoom=!1,g||this._lastPosition.distanceToSquared(this.object.position)>Oa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oa||this._lastTargetPosition.distanceToSquared(this.target)>Oa)return this.dispatchEvent(ql),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(a){if(a!==null)return Qe/60*this.autoRotateSpeed*a;else return Qe/60/60*this.autoRotateSpeed}_getZoomScale(a){let h=Math.abs(a*0.01);return Math.pow(0.95,this.zoomSpeed*h)}_rotateLeft(a){this._sphericalDelta.theta-=a}_rotateUp(a){this._sphericalDelta.phi-=a}_panLeft(a,h){Oe.setFromMatrixColumn(h,0),Oe.multiplyScalar(-a),this._panOffset.add(Oe)}_panUp(a,h){if(this.screenSpacePanning===!0)Oe.setFromMatrixColumn(h,1);else Oe.setFromMatrixColumn(h,0),Oe.crossVectors(this.object.up,Oe);Oe.multiplyScalar(a),this._panOffset.add(Oe)}_pan(a,h){let p=this.domElement;if(this.object.isPerspectiveCamera){let m=this.object.position;Oe.copy(m).sub(this.target);let g=Oe.length();g*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*a*g/p.clientHeight,this.object.matrix),this._panUp(2*h*g/p.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(a*(this.object.right-this.object.left)/this.object.zoom/p.clientWidth,this.object.matrix),this._panUp(h*(this.object.top-this.object.bottom)/this.object.zoom/p.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(a){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=a;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(a){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=a;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(a,h){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let p=this.domElement.getBoundingClientRect(),m=a-p.left,g=h-p.top,{width:_,height:y}=p;this._mouse.x=m/_*2-1,this._mouse.y=-(g/y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(a){return Math.max(this.minDistance,Math.min(this.maxDistance,a))}_handleMouseDownRotate(a){this._rotateStart.set(a.clientX,a.clientY)}_handleMouseDownDolly(a){this._updateZoomParameters(a.clientX,a.clientX),this._dollyStart.set(a.clientX,a.clientY)}_handleMouseDownPan(a){this._panStart.set(a.clientX,a.clientY)}_handleMouseMoveRotate(a){this._rotateEnd.set(a.clientX,a.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/h.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(a){if(this._dollyEnd.set(a.clientX,a.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(a){this._panEnd.set(a.clientX,a.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(a){if(this._updateZoomParameters(a.clientX,a.clientY),a.deltaY<0)this._dollyIn(this._getZoomScale(a.deltaY));else if(a.deltaY>0)this._dollyOut(this._getZoomScale(a.deltaY));this.update()}_handleKeyDown(a){let h=!1;switch(a.code){case this.keys.UP:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateUp(Qe*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,this.keyPanSpeed);h=!0;break;case this.keys.BOTTOM:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateUp(-Qe*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,-this.keyPanSpeed);h=!0;break;case this.keys.LEFT:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateLeft(Qe*this.rotateSpeed/this.domElement.clientHeight);else this._pan(this.keyPanSpeed,0);h=!0;break;case this.keys.RIGHT:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateLeft(-Qe*this.rotateSpeed/this.domElement.clientHeight);else this._pan(-this.keyPanSpeed,0);h=!0;break}if(h)a.preventDefault(),this.update()}_handleTouchStartRotate(a){if(this._pointers.length===1)this._rotateStart.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._rotateStart.set(p,m)}}_handleTouchStartPan(a){if(this._pointers.length===1)this._panStart.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._panStart.set(p,m)}}_handleTouchStartDolly(a){let h=this._getSecondPointerPosition(a),p=a.pageX-h.x,m=a.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyStart.set(0,g)}_handleTouchStartDollyPan(a){if(this.enableZoom)this._handleTouchStartDolly(a);if(this.enablePan)this._handleTouchStartPan(a)}_handleTouchStartDollyRotate(a){if(this.enableZoom)this._handleTouchStartDolly(a);if(this.enableRotate)this._handleTouchStartRotate(a)}_handleTouchMoveRotate(a){if(this._pointers.length==1)this._rotateEnd.set(a.pageX,a.pageY);else{let p=this._getSecondPointerPosition(a),m=0.5*(a.pageX+p.x),g=0.5*(a.pageY+p.y);this._rotateEnd.set(m,g)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/h.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(a){if(this._pointers.length===1)this._panEnd.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._panEnd.set(p,m)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(a){let h=this._getSecondPointerPosition(a),p=a.pageX-h.x,m=a.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyEnd.set(0,g),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let _=(a.pageX+h.x)*0.5,y=(a.pageY+h.y)*0.5;this._updateZoomParameters(_,y)}_handleTouchMoveDollyPan(a){if(this.enableZoom)this._handleTouchMoveDolly(a);if(this.enablePan)this._handleTouchMovePan(a)}_handleTouchMoveDollyRotate(a){if(this.enableZoom)this._handleTouchMoveDolly(a);if(this.enableRotate)this._handleTouchMoveRotate(a)}_addPointer(a){this._pointers.push(a.pointerId)}_removePointer(a){delete this._pointerPositions[a.pointerId];for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==a.pointerId){this._pointers.splice(h,1);return}}_isTrackingPointer(a){for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==a.pointerId)return!0;return!1}_trackPointer(a){let h=this._pointerPositions[a.pointerId];if(h===void 0)h=new St,this._pointerPositions[a.pointerId]=h;h.set(a.pageX,a.pageY)}_getSecondPointerPosition(a){let h=a.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[h]}_customWheelEvent(a){let h=a.deltaMode,p={clientX:a.clientX,clientY:a.clientY,deltaY:a.deltaY};switch(h){case 1:p.deltaY*=16;break;case 2:p.deltaY*=100;break}if(a.ctrlKey&&!this._controlActive)p.deltaY*=10;return p}}function Qp(a){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(a))return;if(this._addPointer(a),a.pointerType==="touch")this._onTouchStart(a);else this._onMouseDown(a)}function tm(a){if(this.enabled===!1)return;if(a.pointerType==="touch")this._onTouchMove(a);else this._onMouseMove(a)}function em(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zl),this.state=Te.NONE;break;case 1:let h=this._pointers[0],p=this._pointerPositions[h];this._onTouchStart({pointerId:h,pageX:p.x,pageY:p.y});break}}function nm(a){let h;switch(a.button){case 0:h=this.mouseButtons.LEFT;break;case 1:h=this.mouseButtons.MIDDLE;break;case 2:h=this.mouseButtons.RIGHT;break;default:h=-1}switch(h){case xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=Te.DOLLY;break;case xn.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Te.ROTATE}break;case xn.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Te.PAN}break;default:this.state=Te.NONE}if(this.state!==Te.NONE)this.dispatchEvent(Ba)}function im(a){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function sm(a){if(this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE)return;a.preventDefault(),this.dispatchEvent(Ba),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Zl)}function rm(a){if(this.enabled===!1||this.enablePan===!1)return;this._handleKeyDown(a)}function am(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Tn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=Te.TOUCH_ROTATE;break;case Tn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case Tn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=Te.TOUCH_DOLLY_PAN;break;case Tn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}if(this.state!==Te.NONE)this.dispatchEvent(Ba)}function om(a){switch(this._trackPointer(a),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=Te.NONE}}function lm(a){if(this.enabled===!1)return;a.preventDefault()}function cm(a){if(a.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function hm(a){if(a.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var Ss=new X;function dn(a,h,p,m,g,_){let y=2*Math.PI*g/4,x=Math.max(_-2*g,0),M=Math.PI/4;Ss.copy(h),Ss[m]=0,Ss.normalize();let S=0.5*y/(y+x),b=1-Ss.angleTo(a)/M;if(Math.sign(Ss[p])===1)return b*S;else return x/(y+x)+S+S*(1-b)}class za extends We{constructor(a=1,h=1,p=1,m=2,g=0.1){m=m*2+1,g=Math.min(a/2,h/2,p/2,g);super(1,1,1,m,m,m);if(m===1)return;let _=this.toNonIndexed();this.index=null,this.attributes.position=_.attributes.position,this.attributes.normal=_.attributes.normal,this.attributes.uv=_.attributes.uv;let y=new X,x=new X,M=new X(a,h,p).divideScalar(2).subScalar(g),S=this.attributes.position.array,b=this.attributes.normal.array,v=this.attributes.uv.array,w=S.length/6,C=new X,I=0.5/m;for(let D=0,A=0;D<S.length;D+=3,A+=2)switch(y.fromArray(S,D),x.copy(y),x.x-=Math.sign(x.x)*I,x.y-=Math.sign(x.y)*I,x.z-=Math.sign(x.z)*I,x.normalize(),S[D+0]=M.x*Math.sign(y.x)+x.x*g,S[D+1]=M.y*Math.sign(y.y)+x.y*g,S[D+2]=M.z*Math.sign(y.z)+x.z*g,b[D+0]=x.x,b[D+1]=x.y,b[D+2]=x.z,Math.floor(D/w)){case 0:C.set(1,0,0),v[A+0]=dn(C,x,"z","y",g,p),v[A+1]=1-dn(C,x,"y","z",g,h);break;case 1:C.set(-1,0,0),v[A+0]=1-dn(C,x,"z","y",g,p),v[A+1]=1-dn(C,x,"y","z",g,h);break;case 2:C.set(0,1,0),v[A+0]=1-dn(C,x,"x","z",g,a),v[A+1]=dn(C,x,"z","x",g,p);break;case 3:C.set(0,-1,0),v[A+0]=1-dn(C,x,"x","z",g,a),v[A+1]=1-dn(C,x,"z","x",g,p);break;case 4:C.set(0,0,1),v[A+0]=1-dn(C,x,"x","y",g,a),v[A+1]=1-dn(C,x,"y","x",g,h);break;case 5:C.set(0,0,-1),v[A+0]=dn(C,x,"x","y",g,a),v[A+1]=1-dn(C,x,"y","x",g,h);break}}}class Ha extends gs{constructor(){super();let a=new We;a.deleteAttribute("uv");let h=new Fn({side:Ko}),p=new Fn,m=new Ia(16777215,900,28,2);m.position.set(0.418,16.199,0.3),this.add(m);let g=new Qt(a,h);g.position.set(-0.757,13.219,0.717),g.scale.set(31.713,28.305,28.591),this.add(g);let _=new Qt(a,p);_.position.set(-10.906,2.009,1.846),_.rotation.set(0,-0.195,0),_.scale.set(2.328,7.905,4.651),this.add(_);let y=new Qt(a,p);y.position.set(-5.607,-0.754,-0.758),y.rotation.set(0,0.994,0),y.scale.set(1.97,1.534,3.955),this.add(y);let x=new Qt(a,p);x.position.set(6.167,0.857,7.803),x.rotation.set(0,0.561,0),x.scale.set(3.927,6.285,3.687),this.add(x);let M=new Qt(a,p);M.position.set(-2.017,0.018,6.124),M.rotation.set(0,0.333,0),M.scale.set(2.002,4.566,2.064),this.add(M);let S=new Qt(a,p);S.position.set(2.291,-0.756,-2.621),S.rotation.set(0,-0.286,0),S.scale.set(1.546,1.552,1.496),this.add(S);let b=new Qt(a,p);b.position.set(-2.193,-0.369,-5.547),b.rotation.set(0,0.516,0),b.scale.set(3.875,3.487,2.986),this.add(b);let v=new Qt(a,Wi(50));v.position.set(-16.116,14.37,8.208),v.scale.set(0.1,2.428,2.739),this.add(v);let w=new Qt(a,Wi(50));w.position.set(-16.109,18.021,-8.207),w.scale.set(0.1,2.425,2.751),this.add(w);let C=new Qt(a,Wi(17));C.position.set(14.904,12.198,-1.832),C.scale.set(0.15,4.265,6.331),this.add(C);let I=new Qt(a,Wi(43));I.position.set(-0.462,8.89,14.52),I.scale.set(4.38,5.441,0.088),this.add(I);let D=new Qt(a,Wi(20));D.position.set(3.235,11.486,-12.541),D.scale.set(2.5,2,0.1),this.add(D);let A=new Qt(a,Wi(100));A.position.set(0,20,0),A.scale.set(1,0.1,1),this.add(A)}dispose(){let a=new Set;this.traverse((h)=>{if(h.isMesh)a.add(h.geometry),a.add(h.material)});for(let h of a)h.dispose()}}function Wi(a){let h=new ps;return h.color.setScalar(a),h}var mi=2.5,Jl=1,um=0.9,Vi=0.13,ue=new X(e(189),0,t(183));function fn(a,h,p,m=1){let g=document.createElement("canvas");g.width=a,g.height=h,p(g.getContext("2d"));let _=new ya(g);if(_.colorSpace=oa,_.anisotropy=4,m!==1)_.wrapS=_.wrapT=fs,_.repeat.set(m,m);return _}var Ga=(a,h,p,m,g,_=9000)=>{a.fillStyle=m,a.fillRect(0,0,h,p);for(let y=0;y<_;y++){let x=(Math.random()-0.5)*g;a.fillStyle=x>0?`rgba(255,255,255,${x})`:`rgba(0,0,0,${-x})`,a.fillRect(Math.random()*h,Math.random()*p,2,2)}},$l=()=>fn(512,512,(a)=>{for(let h=0;h<2;h++)for(let p=0;p<2;p++){let m=228+Math.floor(Math.random()*8);a.fillStyle=`rgb(${m+8},${m+3},${m-8})`,a.fillRect(h*256,p*256,256,256);for(let g=0;g<2500;g++)a.fillStyle=`rgba(${Math.random()>0.5?"255,255,255":"150,130,100"},.06)`,a.fillRect(h*256+Math.random()*256,p*256+Math.random()*256,3,3)}a.fillStyle="#cfc6b6";for(let h=0;h<=2;h++)a.fillRect(h*256-2,0,4,512),a.fillRect(0,h*256-2,512,4)}),vr=(a,h=0.14)=>fn(256,256,(p)=>Ga(p,256,256,a,h,6000),3),dm=(a,h)=>fn(256,256,(p)=>{Ga(p,256,256,a,0.2,14000),p.strokeStyle=h,p.lineWidth=10,p.strokeRect(12,12,232,232)}),fm=()=>fn(256,512,(a)=>{Ga(a,256,512,"#2b3550",0.25,12000),a.strokeStyle="#c9a86a",a.lineWidth=6,a.strokeRect(14,14,228,484),a.fillStyle="#c9a86a88";for(let h=60;h<480;h+=70)a.beginPath(),a.ellipse(128,h,50,22,0,0,7),a.fill()}),Kl=()=>fn(256,256,(a)=>{a.fillStyle="#f7f7f5",a.fillRect(0,0,256,256),a.fillStyle="#d9d9d6";for(let h=0;h<=4;h++)a.fillRect(h*64-1,0,2,256),a.fillRect(0,h*128-1,256,2)}),pm=()=>fn(256,256,(a)=>{a.fillStyle="#e6e2df",a.fillRect(0,0,256,256);let h=22;for(let p=0;p<300;p+=h*1.5)for(let m=0;m<300;m+=h*1.732){let g=Math.round(p/(h*1.5))%2*h*0.866;a.beginPath();for(let y=0;y<6;y++){let x=Math.PI/3*y+Math.PI/6;a.lineTo(m+g+h*Math.cos(x),p+h*Math.sin(x))}a.closePath();let _=205+Math.floor(Math.random()*40);a.fillStyle=`rgb(${_},${_-3},${_-2})`,a.fill(),a.strokeStyle="#f5f3f0",a.lineWidth=2,a.stroke()}}),mm=()=>fn(256,360,(a)=>{a.fillStyle="#121216",a.fillRect(0,0,256,360),a.fillStyle="#9b2b33",a.beginPath(),a.arc(128,105,78,0,7),a.fill(),a.fillStyle="#121216",a.beginPath(),a.arc(128,105,58,0,7),a.fill(),a.fillStyle="#d8d4cf",a.beginPath(),a.ellipse(128,110,28,36,0,0,7),a.fill(),a.fillStyle="#2d4f6d",a.fillRect(70,150,116,200),a.fillStyle="#e8e4dc";for(let h=170;h<330;h+=18)a.fillRect(98,h,60,6);a.fillStyle="#3c8b3a",a.fillRect(122,250,12,12)}),gm=()=>fn(256,340,(a)=>{let h=["#d94b3d","#f2b632","#3a7bd5","#43a047","#8e44ad","#f06292"];a.fillStyle="#e8d8b8",a.fillRect(0,0,256,340);for(let p=0;p<60;p++)a.fillStyle=h[p%6],a.beginPath(),a.arc(Math.random()*256,Math.random()*340,6+Math.random()*20,0,7),a.fill();a.fillStyle="#c69c6d",a.beginPath(),a.ellipse(128,200,50,100,0,0,7),a.fill(),a.fillStyle="#8a5a3a",a.beginPath(),a.arc(128,95,55,0,7),a.fill()}),_m=()=>fn(200,260,(a)=>{a.fillStyle="#f5d33b",a.fillRect(0,0,200,260);let h=["#e84a5f","#2a9d8f","#f4a261","#6c63ff","#ffffff"];for(let p=0;p<5;p++)a.fillStyle=h[p],a.beginPath(),a.moveTo(100,90),a.arc(100,90,70,Math.PI+p*0.63,Math.PI+(p+1)*0.63),a.fill();a.fillStyle="#f472b6",a.beginPath(),a.arc(140,140,28,0,7),a.fill(),a.fillStyle="#1f2937",a.fillRect(20,200,160,40)}),xm=()=>fn(256,160,(a)=>{a.fillStyle="#fbfbfb",a.fillRect(0,0,256,160),a.font="bold 26px sans-serif",a.fillStyle="#222",a.fillText("Bim",120,34),a.fillStyle="#d23",a.fillText("Flow",168,34),a.strokeStyle="#333",a.lineWidth=2;for(let h=50;h<150;h+=14)a.beginPath(),a.moveTo(16,h),a.lineTo(66+Math.random()*50,h),a.stroke();a.strokeStyle="#d23",a.beginPath(),a.arc(180,80,18,0,7),a.stroke()}),ka=(a)=>fn(64,32,(h)=>{let p=h.createLinearGradient(0,0,64,32);p.addColorStop(0,a),p.addColorStop(1,"#05060a"),h.fillStyle=p,h.fillRect(0,0,64,32)});function Pm(a){let h=new _a({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(devicePixelRatio,1.75)),h.shadowMap.enabled=!0,h.shadowMap.type=$o,h.shadowMap.autoUpdate=!1,h.outputColorSpace=oa,h.localClippingEnabled=!0,h.toneMapping=jo,h.toneMappingExposure=1.05,a.appendChild(h.domElement);let p=new gs,m=new cs(h);p.environment=m.fromScene(new Ha,0.04).texture,p.environmentIntensity=0.55;let g=new $e(32,1,0.1,2500),_=new ms(-5,5,5,-5,0.1,100),y=g,x=new yr(g,h.domElement);x.enableDamping=!0,x.maxPolarAngle=1.35,x.minDistance=2.5,x.maxDistance=30,x.screenSpacePanning=!0;let M=new yr(_,h.domElement);M.enableRotate=!1,M.enableDamping=!0,M.screenSpacePanning=!0,M.minZoom=0.6,M.maxZoom=6,M.enabled=!1,M.mouseButtons={LEFT:xn.PAN,MIDDLE:xn.DOLLY,RIGHT:xn.PAN},M.touches={ONE:Tn.PAN,TWO:Tn.DOLLY_PAN};let S=x;p.add(new Ca(16777215,14274752,1.25));let b=new Da(16773856,2.3);b.position.set(ue.x-5,12,ue.z+7),b.castShadow=!0,b.shadow.mapSize.set(2048,2048),Object.assign(b.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:35}),b.shadow.bias=-0.0004,b.shadow.normalBias=0.02,b.shadow.radius=3,b.target.position.copy(ue),p.add(b,b.target);let v=(E,T={})=>new Fn({color:E,roughness:0.7,...T}),w=v("#f6f5f1",{roughness:0.45}),C=v("#f3f1ec",{roughness:0.85}),I=v("#232428",{roughness:0.4}),D=v("#2a2b2f",{roughness:0.8}),A=v("#c7cace",{metalness:0.8,roughness:0.28}),R=v("#d9dcdf",{metalness:1,roughness:0.12}),W=v("#18191c",{roughness:0.18,metalness:0.1}),F=new Aa({color:"#cfe6ee",transparent:!0,opacity:0.28,roughness:0.03,metalness:0,clearcoat:1,depthWrite:!1}),H=v("#0f1114",{roughness:0.08,metalness:0.3}),it=v("#e7eef2",{metalness:1,roughness:0.04}),q=v("#a9774f",{roughness:0.95,map:vr("#a9774f")}),Y=v("#956643",{roughness:0.95,map:vr("#956643")}),lt=v("#2f4a69",{roughness:0.6}),B=v("#9b6c45",{roughness:0.6}),z=v("#3f7d34",{roughness:0.7}),Q=v("#5f9c40",{roughness:0.7}),st=v("#2c2c2c",{roughness:0.6}),ot=v("#fbfbf9",{roughness:0.15}),ct=v("#b8bcc0",{metalness:0.7,roughness:0.35}),pt=(E)=>E.traverse((T)=>{if(T.isMesh)T.castShadow=!0,T.receiveShadow=!0}),J=(E,T,P,L,G=0.015)=>new Qt(new za(E,T,P,2,Math.min(G,E/2.1,T/2.1,P/2.1)),L),et=(E,T,P,L)=>new Qt(new We(E,T,P),L),Z=(E,T,P,L,G=24)=>new Qt(new pi(E,T,P,G),L),At=(E,T,P=14)=>new Qt(new vs(E,P,Math.round(P*0.75)),T),U=(E,T,P=0,L=0,G=0)=>(T.position.set(P,L,G),E.add(T),T),Xt=(E,T,P)=>new Qt(new Kn(E,T),P),Jt=(E,T)=>{if(T==="x")E.rotation.z=Math.PI/2;else E.rotation.x=Math.PI/2;return E},dt=(E,T,P,L,G=!0,K=0.12)=>U(E,G?Z(0.006,0.006,K,ct,8):Jt(Z(0.006,0.006,K,ct,8),"x"),T,P,L),bt=(E,T,P,L,G,K=0,at=!0)=>{for(let ut=1;ut<G;ut++)U(E,et(0.004,P-0.04,0.004,D),-T/2+ut*T/G,K+P/2,L/2+0.001);for(let ut=0;ut<G;ut++)dt(E,-T/2+(ut+(ut%2?0.12:0.88))*T/G,K+(at?P-0.12:P/2),L/2+0.015,!0,0.1)};function qt(E,T,P,L=!1){let G=new Ut;if(!L)U(G,Z(E*0.32,E*0.25,0.26,st,18),0,0.13,0);let K=L?0:0.26;for(let at=0;at<P;at++){let ut=at/P*Math.PI*2+Math.random()*0.4,yt=(T-K)*(0.6+Math.random()*0.4);U(G,Z(0.006,0.006,yt,z,5),Math.cos(ut)*0.05,K+yt/2,Math.sin(ut)*0.05).rotation.set(Math.sin(ut)*0.35,0,-Math.cos(ut)*0.35);for(let $t=1;$t<=3;$t++){let Vt=U(G,At(0.05,$t%2?z:Q,8),Math.cos(ut)*(0.05+$t*yt*0.1),K+yt*(0.35+$t*0.2),Math.sin(ut)*(0.05+$t*yt*0.1));Vt.scale.set(1.4,0.35,0.8),Vt.rotation.y=-ut}}return G}function Ht(E,T,P){let L=new Ut,G=v(P,{roughness:1,side:wn}),K=Math.max(3,Math.round(E/0.08));for(let at=0;at<K;at++){let ut=U(L,Z(0.045,0.05,T-0.1,G,8),-E/2+(at+0.5)*E/K,(T-0.1)/2+0.05,at%2*0.03);ut.scale.z=0.6}return U(L,Jt(Z(0.012,0.012,E+0.3,ct,8),"x"),0,T,0),L}function Rt(E,T,P,L){let G=new Ut;U(G,J(E,P,T,C,0.01),0,P/2,0),U(G,et(E-0.02,0.006,0.006,v("#d0cdc6")),0,P-0.45,T/2+0.003),U(G,et(E-0.02,0.005,0.02,ct),0,P-0.43,T/2+0.01);for(let K=0;K<2;K++){let at=-E/2+(K+0.5)*E/2,ut=L&&K===1?it:w;U(G,et(E/2-0.03,P-0.55,0.015,ut),at,(P-0.5)/2+0.02,T/2+0.008+K*0.02),U(G,et(0.02,P-0.55,0.02,ct),at-E/4+0.02,(P-0.5)/2+0.02,T/2+0.012+K*0.02),U(G,et(0.02,P-0.55,0.02,ct),at+E/4-0.02,(P-0.5)/2+0.02,T/2+0.012+K*0.02)}return[-1,1].forEach((K)=>dt(G,K*E*0.3,P-0.3,T/2+0.02,!1,0.14)),G}let te={geladeira(E,T,P){let L=new Ut;U(L,J(E,P,T,A,0.03),0,P/2,0),U(L,et(E-0.02,0.006,0.006,D),0,1.22,T/2+0.002),U(L,J(0.025,0.5,0.03,ct,0.01),-E/2+0.07,1.5,T/2+0.02),U(L,J(0.025,0.5,0.03,ct,0.01),-E/2+0.07,0.95,T/2+0.02),U(L,J(0.16,0.12,0.02,v("#9aa3ab",{roughness:0.3}),0.01),E/2-0.16,1.45,T/2+0.006),["#3b82f6","#f59e0b","#7c3aed","#ef4444","#111827","#16a34a","#e5e7eb"].forEach((at,ut)=>U(L,et(0.07+ut%3*0.02,0.05+ut%2*0.03,0.004,v(at)),E*0.05+ut%3*0.1-0.08,1.32+Math.floor(ut/3)*0.1,T/2+0.004));let K=new Ut;return U(K,Z(0.13,0.15,0.3,I,28),0,0.15,0),U(K,J(0.05,0.04,0.12,I,0.01),0,0.2,0.17),U(L,K,0,P,0),L},"armario-cozinha"(E,T,P){let L=new Ut;if(U(L,J(E,P-0.04,T-0.03,w,0.01),0,(P-0.04)/2,-0.015),U(L,et(E+0.005,0.04,T+0.01,v("#f4f2ee",{roughness:0.3})),0,P-0.02,0),bt(L,E,P-0.1,T-0.03,Math.max(1,Math.round(E/0.42)),0.06),U(L,et(E,0.06,0.02,D),0,0.03,T/2-0.04),E>1){let G=new Ut;U(G,J(0.3,0.02,0.22,v("#a4744a"),0.01),0,0.01,0),U(G,J(0.12,0.08,0.12,v("#e9e3d6"),0.02),-0.05,0.06,0),U(G,Z(0.04,0.04,0.1,v("#ddd"),14),0.08,0.07,0),U(L,G,-E*0.25,P,0)}return L},fogao(E,T,P){let L=new Ut;U(L,J(E,P-0.03,T,A,0.015),0,(P-0.03)/2,0),U(L,et(E-0.01,0.02,T-0.01,H),0,P-0.02,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([K,at])=>{U(L,Z(0.055,0.06,0.025,D),K*E/4.2,P,at*T/5),U(L,Z(0.03,0.03,0.03,v("#555")),K*E/4.2,P+0.01,at*T/5)}),U(L,et(E-0.1,0.4,0.01,H),0,0.42,T/2+0.005),dt(L,0,0.7,T/2+0.03,!1,E-0.12);for(let K=0;K<5;K++)U(L,Jt(Z(0.015,0.015,0.02,I,12),"z"),-E/2+0.08+K*(E-0.16)/4,P-0.09,T/2+0.012);U(L,et(E,0.08,T,D),0,0.04,0);let G=new Ut;return U(G,J(E+0.1,0.1,0.45,A,0.02),0,0,0),U(G,et(0.2,0.025,0.01,I),E*0.25,-0.02,0.23),U(L,G,0,1.6,-T/2+0.2),L},microondas(E,T,P){let L=new Ut,G=v("#f6f5f1",{roughness:0.45});return U(L,et(E+0.08,0.025,T+0.06,G),0,-0.0125,-0.01),U(L,et(E+0.08,0.025,T+0.06,G),0,P+0.1,-0.01),[-1,1].forEach((K)=>U(L,et(0.025,P+0.12,T+0.06,G),K*(E/2+0.03),P/2+0.045,-0.01)),U(L,J(E,P,T,I,0.015),0,P/2,0),U(L,et(E*0.68,P*0.75,0.005,H),-E*0.12,P/2,T/2+0.003),U(L,et(E*0.18,P*0.7,0.004,v("#333")),E*0.36,P/2,T/2+0.003),L},maquina(E,T,P){let L=new Ut;return U(L,J(E,P,T,w,0.05),0,P/2,0),U(L,Z(E*0.38,E*0.38,0.02,v("#9aa3ab",{roughness:0.2,transparent:!0,opacity:0.85}),32),0,P+0.005,0.02),U(L,J(E-0.04,0.12,0.08,v("#e9e9e6"),0.02),0,P+0.06,-T/2+0.05),U(L,et(E*0.3,0.04,0.005,v("#4aa3c7")),0,P+0.07,-T/2+0.092),U(L,Z(0.03,0.03,0.55,v("#8bc34a"),10),E/2+0.05,0.27,T*0.3),L},tanque(E,T,P){let L=new Ut;U(L,J(E*0.5,P-0.2,T*0.5,w,0.02),0,(P-0.2)/2,-T*0.2),U(L,J(E,0.2,T,ot,0.04),0,P-0.1,0),U(L,et(E-0.08,0.02,T-0.1,v("#d8dadb",{roughness:0.3})),0,P-0.01,0.02);let G=new Ut;U(G,Z(0.012,0.012,0.22,R,10),0,0.11,0),U(G,Jt(Z(0.01,0.01,0.12,R,10),"z"),0,0.22,0.06),U(L,G,0,P,-T/2+0.04);let K=new Ut;return[0,0.05,0.1].forEach((at,ut)=>U(K,Z(0.008,0.008,0.16,v(["#c58b4c","#7c5a3a","#d8b98b"][ut]),6),at,0.08,0)),U(L,K,-E*0.3,P,-T/2+0.05),L},"varal-teto"(E,T){let P=new Ut;for(let G=0;G<6;G++)U(P,Jt(Z(0.008,0.008,E,w,8),"x"),0,0,-T/2+G*T/5);return[-1,1].forEach((G)=>U(P,et(0.02,0.02,T,w),G*E/2,0,0)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([G,K])=>U(P,Z(0.002,0.002,0.3,v("#ddd"),4),G*E/2,0.15,K*T/2)),[["#e24b75",0.4,0.55,-0.8],["#1f5f45",0.3,0.6,-0.4],["#1d2c54",0.25,0.3,0],["#6b6b6b",0.3,0.35,0.4],["#151515",0.3,0.45,0.8]].forEach(([G,K,at,ut])=>{let yt=U(P,Xt(K,at,v(G,{side:wn,roughness:1})),0,-at/2,ut*T/2.2);yt.rotation.y=Math.PI/2}),P},balcao(E,T){let P=new Ut,L=T-0.12,G=-T/2+L/2;U(P,J(E-0.02,0.86,L,w,0.01),0,0.43,G);let K=new Ut;bt(K,E-0.02,0.78,L,4,0.06),K.rotation.y=Math.PI,K.position.z=G,P.add(K),U(P,et(E-0.02,0.06,0.02,D),0,0.03,-T/2+0.03),U(P,et(E,0.035,L+0.04,W),0,0.9,G),U(P,et(E,0.52,0.1,v("#ece9e3",{roughness:0.8})),0,1.16,T/2-0.11),U(P,et(E,0.035,0.34,W),0,1.44,T/2-0.02);let at=new Ut;U(at,Z(0.07,0.08,0.12,I,16),0,0.06,0),U(at,Jt(Z(0.008,0.008,0.32,I,6),"z"),0,0.25,0.04),U(at,Z(0.04,0.07,0.1,I,14),0,0.36,0.18),U(P,at,-E*0.1,1.44,T/2+0.05);let ut=new Ut;U(ut,J(0.16,0.14,0.16,I,0.03),0,0.07,0),U(ut,Z(0.07,0.06,0.22,v("#cfd6db",{transparent:!0,opacity:0.5}),16),0,0.25,0),U(P,ut,-E*0.3,1.44,T/2+0.05);let yt=new Ut;return U(yt,Z(0.04,0.04,0.22,v("#3b6b2f",{roughness:0.1}),14),0,0.11,0),U(yt,Z(0.012,0.025,0.1,v("#3b6b2f",{roughness:0.1}),10),0,0.27,0),U(P,yt,E*0.35,1.44,T/2+0.05),U(P,J(0.4,0.01,0.25,v("#a7774b",{roughness:0.9}),0.004),E*0.38,1.44,T/2+0.1),P},"pia-cozinha"(E,T){let P=new Ut;U(P,et(E*0.8,0.015,T*0.9,A),0,0.002,0),U(P,et(E*0.7,0.01,T*0.75,v("#8f9499",{metalness:0.8,roughness:0.3})),0,0.009,0),U(P,Z(0.015,0.018,0.28,R,12),E*0.3,0.14,-T*0.3);let L=U(P,new Qt(new jn(0.07,0.011,8,16,Math.PI),R),E*0.3,0.28,-T*0.3+0.07);return L.rotation.y=Math.PI/2,P},escorredor(E,T){let P=new Ut;U(P,J(E,0.02,T,R,0.005),0,0.01,0),[-1,1].forEach((L)=>[-1,1].forEach((G)=>U(P,Z(0.004,0.004,0.14,R,6),L*(E/2-0.01),0.08,G*(T/2-0.01))));for(let L=0;L<6;L++)U(P,Jt(Z(0.003,0.003,T,R,4),"z"),-E/2+0.03+L*(E-0.06)/5,0.15,0);return[0,1,2,3].forEach((L)=>{let G=U(P,Z(0.1,0.1,0.012,L%2?v("#f6f6f4",{roughness:0.2}):v("#1f3b73",{roughness:0.3}),22),-E/2+0.1+L*0.07,0.12,0);G.rotation.z=Math.PI/2-0.15}),[0,1,2].forEach((L)=>U(P,Z(0.03,0.025,0.1,v("#cfd8dc",{transparent:!0,opacity:0.6,roughness:0.1}),12),E*0.3,0.07,-T/3+L*T/3)),U(P,Z(0.05,0.045,0.08,v("#c13b3b"),16),E*0.18,0.06,T*0.25),U(P,J(0.14,0.07,0.1,v("#d26aa6"),0.02),0,0.2,0),P},filtro(E,T,P){let L=new Ut;return U(L,Z(E/2.4,E/2,P*0.55,v("#8a5236",{roughness:0.9}),20),0,P*0.275,0),U(L,Z(E/2.4,E/2.4,P*0.45,v("#6b6f73",{transparent:!0,opacity:0.7,roughness:0.2}),20),0,P*0.775,0),U(L,Jt(Z(0.01,0.01,0.05,v("#c98"),6),"z"),0,P*0.15,E/2),L},"mesa-jantar"(E,T,P){let L=new Ut;return U(L,J(E,0.02,T,F,0.01),0,P,0),U(L,et(E*0.3,0.005,T*0.5,v("#e6a243")),0,P+0.013,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([G,K])=>U(L,Z(0.015,0.015,P,R,10),G*(E/2-0.06),P/2,K*(T/2-0.06))),U(L,Z(0.04,0.03,0.12,v("#3a2a20"),12),-E*0.2,P+0.07,T*0.2),[0,1,2].forEach((G)=>U(L,Z(0.002,0.002,0.25,v("#d9b48a"),4),-E*0.2+(G-1)*0.015,P+0.2,T*0.2)),U(L,Z(0.035,0.035,0.2,v("#f472b6"),14),E*0.2,P+0.1,-T*0.25),U(L,J(0.22,0.1,0.16,v("#f8c74a"),0.01),E*0.1,P+0.06,T*0.3),L},cadeiras(E,T){let P=new Ut;return U(P,J(E,0.05,T,I,0.02),0,0.46,0),U(P,J(E,0.4,0.03,I,0.015),0,0.7,-T/2+0.02),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([L,G])=>U(P,Z(0.009,0.009,0.44,R,8),L*(E/2-0.03),0.22,G*(T/2-0.03))),[-1,1].forEach((L)=>U(P,Z(0.009,0.009,0.44,R,8),L*(E/2-0.03),0.7,-T/2+0.02)),P},espada(E,T,P){let L=new Ut;U(L,Z(E*0.35,E*0.28,0.28,st,18),0,0.14,0),U(L,Z(E*0.33,E*0.33,0.01,v("#3d2a1d")),0,0.27,0);for(let G=0;G<11;G++){let K=G/11*Math.PI*2;U(L,et(0.045,P-0.3-Math.random()*0.3,0.008,G%2?z:v("#5a8a3a")),Math.cos(K)*0.04,0.28+(P-0.3)/2,Math.sin(K)*0.04).rotation.set((Math.random()-0.5)*0.25,K,(Math.random()-0.5)*0.25)}return L},zamioculca(E,T,P){return qt(E,P,7)},sofa(E,T,P,L){let G=new Ut,K=(Vt)=>n(Vt-L.x)-E/2,at=(Vt)=>n(Vt-L.y)-T/2,ut=(Vt,pe,jt,Dt,He,me,ke,rn=0.05)=>U(G,J(n(jt-Vt),ke,n(Dt-pe),He,rn),(K(Vt)+K(jt))/2,me+ke/2,(at(pe)+at(Dt))/2);ut(52,178,90,294,Y,0,0.2,0.03),ut(90,178,126,214,Y,0,0.2,0.03);for(let Vt=186;Vt<288;Vt+=25.5)ut(60.3,Vt+0.3,89.7,Math.min(Vt+25.5,288)-0.3,q,0.2,0.2,0.07);[[90,186,105,214],[105,186,120,214]].forEach(([Vt,pe,jt,Dt])=>ut(Vt+0.3,pe+0.3,jt-0.3,Dt-0.3,q,0.2,0.2,0.07));for(let Vt=180;Vt<294;Vt+=28.5)ut(52,Vt+0.2,60,Math.min(Vt+28.5,294)-0.2,Y,0.2,0.42,0.05);[[60,178,82,186],[82,178,104,186],[104,178,126,186]].forEach(([Vt,pe,jt,Dt])=>ut(Vt+0.2,pe,jt-0.2,Dt,Y,0.2,0.42,0.05)),ut(60,288,90,294,Y,0.2,0.22,0.04),ut(120,186,126,214,Y,0.2,0.22,0.04);let yt=(Vt,pe,jt,Dt)=>{U(G,J(0.36,0.34,0.1,v(jt,{roughness:0.95}),0.05),K(Vt),0.55,at(pe)).rotation.set(-0.25,Dt,0)};yt(63,196,"#ece6d6",Math.PI/2),yt(63,280,"#7d9a6a",Math.PI/2),yt(112,190,"#ece6d6",0);let Wt=U(G,J(0.55,0.04,0.45,v("#8d96a3",{roughness:1,map:vr("#8d96a3",0.2)}),0.02),K(74),0.44,at(250));Wt.rotation.y=0.5;let $t=new Ut;return U($t,J(0.32,0.38,0.16,v("#ece4d6",{roughness:1}),0.06),0,0.19,0),U($t,J(0.24,0.03,0.17,v("#222"),0.01),0,0.38,0),U(G,$t,K(98),0.4,at(196)),U(G,J(0.16,0.02,0.05,v("#111"),0.01),K(72),0.41,at(266)).rotation.y=0.3,G},"tapete-sala"(E,T){let P=new Ut;return U(P,J(E,0.015,T,v("#1c1c1e",{map:dm("#1c1c1e","#2c2c30"),roughness:1}),0.005),0,0.008,0),P},"mesa-centro"(E,T,P){let L=new Ut;return U(L,Z(0.5,0.5,0.035,I,40),0,P-0.02,0).scale.set(E,1,T),[0,2.1,4.2].forEach((K)=>{U(L,Z(0.014,0.01,P,I,8),Math.cos(K)*E*0.32,P/2,Math.sin(K)*T*0.32).rotation.set(Math.sin(K)*0.15,0,-Math.cos(K)*0.15)}),U(L,Z(0.06,0.05,0.08,v("#c26b3a")),E*0.15,P+0.04,0),U(L,J(0.18,0.02,0.24,v("#2c4a6e"),0.005),-E*0.15,P+0.01,0.02),L},estante(E,T,P){let L=new Ut;U(L,et(E,P,0.03,lt),0,P/2,-T/2+0.015),U(L,J(E,0.5,T,lt,0.01),0,0.25,0),[-1,1].forEach((Wt)=>{U(L,et(E/2-0.02,0.003,0.003,v("#1d3047")),Wt*E/4,0.25,T/2+0.002),dt(L,Wt*E/4,0.36,T/2+0.015,!1,0.24)}),U(L,et(E*0.3,0.16,T-0.05,v("#22384f")),-E*0.32,0.4,0.02),U(L,J(0.2,0.1,0.14,v("#ece9e3"),0.01),-E*0.36,0.37,0.04),U(L,et(0.18,0.12,0.2,v("#c9a37a")),-E*0.22,0.37,0.03),U(L,J(E,0.3,T-0.04,lt,0.01),0,P-0.15,-0.02),[-0.33,0.33].forEach((Wt)=>U(L,et(0.02,0.26,T-0.06,v("#294260")),Wt*E,P-0.15,-0.02));let G=["#e8e1d0","#b33","#222","#d9b26a","#e9e9e9","#2b2b2b","#c2185b","#f0eadb","#333","#7a5230"];for(let Wt=0;Wt<18;Wt++)U(L,et(0.022+Math.random()*0.02,0.2+Math.random()*0.05,0.16,v(G[Wt%G.length],{roughness:0.8})),-E/2+0.05+Wt*0.028,P-0.27+0.11,-0.03);U(L,qt(0.18,0.55,5,!0),0,P-0.28,-0.02),U(L,J(0.16,0.14,0.16,v("#3b87c9"),0.07),E*0.38,P-0.22,-0.02),U(L,J(E*0.58,E*0.58*0.58,0.03,I,0.006),-E*0.08,1.33,-T/2+0.05),U(L,Xt(E*0.56,E*0.56*0.56,v("#000",{map:ka("#1d2a3a"),roughness:0.2})),-E*0.08,1.33,-T/2+0.066),U(L,Z(0.003,0.003,0.5,I,4),-E*0.12,0.85,-T/2+0.05);let K=U(L,et(0.45,0.6,0.02,v("#5a3a22")),E*0.3,0.82,-T/2+0.06);K.rotation.x=-0.06,U(L,Xt(0.41,0.56,v("#fff",{map:_m()})),E*0.3,0.82,-T/2+0.072).rotation.x=-0.06;let at=new Ut;U(at,J(0.34,0.15,0.22,v("#5b3a20",{roughness:0.5}),0.02),0,0.075,0),U(at,et(0.35,0.015,0.225,v("#2a1a10")),0,0.1,0),[-1,1].forEach((Wt)=>U(at,et(0.02,0.03,0.01,v("#c9a34e",{metalness:0.8})),Wt*0.1,0.12,0.115)),U(L,at,E*0.28,0.5,0.02),U(L,et(0.11,0.14,0.015,v("#1a1a1a")),-E*0.02,0.57,-0.06),U(L,Xt(0.09,0.12,v("#c9b9a0")),-E*0.02,0.57,-0.052);let ut=new Ut;U(ut,Z(0.04,0.06,0.14,v("#b22")),0,0.07,0),U(ut,At(0.035,v("#f1d0b5")),0,0.17,0),U(ut,At(0.03,v("#fff")),0,0.15,0.02),U(ut,new Qt(new dr(0.04,0.07,12),v("#b22")),0,0.22,0),U(L,ut,E*0.1,0.5,0.03),U(L,J(0.08,0.06,0.08,v("#c9a77a"),0.01),-E*0.12,0.53,0.06);let yt=U(L,At(0.1,v("#3b9ad9",{roughness:0.3}),16),E*0.38,P-0.25,-0.02);return yt.scale.y=0.7,L},"cortina-sala"(E,T,P){let L=Ht(E,P,"#4a3428"),G=U(L,new Qt(new jn(0.12,0.03,8,16),v("#4a3428",{roughness:1})),0,1,0.02);return G.rotation.x=Math.PI/2,L},"quadro-sala"(E,T,P){let L=new Ut;return U(L,et(E,P,0.03,v("#111")),0,P/2,0),U(L,Xt(E-0.02,P-0.02,v("#fff",{map:mm()})),0,P/2,0.016),L},box(E,T,P){let L=new Ut;U(L,et(E,P,0.01,F),0,P/2,T/2),U(L,et(0.01,P,T,F),-E/2+0.01,P/2,0),U(L,et(E,0.03,0.04,ct),0,P,T/2),U(L,et(E,0.02,0.03,ct),0,0.01,T/2),U(L,et(0.03,P,0.03,ct),E/2-0.02,P/2,T/2);{let at=U(L,Z(0.08,0.08,0.03,v("#f2f2f0",{roughness:0.3}),24),-E/2+0.14,2,0);at.rotation.z=-0.5,U(L,Jt(Z(0.012,0.012,0.12,R,8),"x"),-E/2+0.06,2.05,0),U(L,J(0.06,0.12,0.04,R,0.01),-E/2+0.03,1.2,0.15)}let G=new Ut;U(G,J(0.28,0.03,0.22,v("#3fa7b5"),0.01),0,0.3,0),[-1,1].forEach((at)=>U(G,et(0.02,0.3,0.2,v("#2a2a2a")),at*0.12,0.15,0)),U(L,G,E*0.3,0,-T*0.05);let K=new Ut;return U(K,J(0.25,0.02,0.1,v("#fff"),0.005),0,0,0),U(K,Z(0.025,0.025,0.18,v("#f1e3c4"),10),-0.06,0.09,0),U(K,Z(0.02,0.02,0.15,v("#7a5aa8"),10),0.05,0.08,0),U(L,K,E/2-0.14,1.2,-T/2+0.06),U(L,J(E*0.8,0.01,0.3,v("#6f7378",{roughness:1}),0.004),0,0.005,T/2+0.2),U(L,et(E+0.1,P+0.5,0.01,v("#fff",{map:Kl(),roughness:0.25})),0,(P+0.5)/2,-T/2+0.005),L},vaso(E,T){let P=new Ut,L=U(P,Z(0.17,0.13,0.38,ot,24),0,0.19,0.04);L.scale.z=1.3;let G=U(P,Z(0.19,0.19,0.03,ot,24),0,0.4,0.04);G.scale.z=1.25,U(P,J(E*0.9,0.36,0.17,ot,0.03),0,0.58,-T/2+0.1),U(P,Z(0.03,0.03,0.01,R,12),0,0.765,-T/2+0.1),[-1,1].forEach((at)=>U(P,Z(0.03,0.035,0.05,v("#e9dcc6"),12),at*E*0.25,0.79,-T/2+0.1));let K=U(P,Jt(Z(0.055,0.055,0.1,v("#fff",{roughness:1}),16),"x"),E/2+0.03,0.6,-T/2+0.1);return K.castShadow=!0,U(P,Z(0.1,0.09,0.3,v("#f4f4f2"),16),E/2+0.1,0.15,0.05),P},"pia-banheiro"(E,T,P){let L=new Ut;return U(L,J(E,P-0.12,T-0.06,w,0.01),0,(P-0.12)/2,-0.03),[0.22,0.5].forEach((G)=>{U(L,et(E-0.02,0.003,0.003,v("#ccc")),0,G+0.14,T/2-0.055),U(L,J(0.14,0.02,0.02,B,0.008),0,G,T/2-0.045)}),U(L,J(E*0.95,0.14,T-0.02,ot,0.06),0,P-0.07,0),U(L,et(E*0.6,0.01,T*0.55,v("#e5e8ea",{roughness:0.1})),0,P-0.005,0.03),U(L,Z(0.012,0.012,0.14,R,10),0,P+0.07,-T/2+0.05),U(L,Jt(Z(0.009,0.009,0.08,R,8),"z"),0,P+0.14,-T/2+0.09),U(L,J(E*0.9,0.55,0.1,it,0.01),0,1.6,-T/2+0.02),U(L,J(0.18,0.07,0.06,v("#fff"),0.02),0,1.2,-T/2+0.02),U(L,Z(0.03,0.035,0.16,I,12),E*0.3,P+0.08,-T*0.2),U(L,J(0.1,0.02,0.07,v("#2a2a2a"),0.01),-E*0.3,P+0.01,T*0.1),U(L,et(E+0.2,1.3,0.01,v("#fff",{map:Kl(),roughness:0.25})),0,0.65,-T/2-0.01),L},"mesa-pc"(E,T,P){let L=new Ut;U(L,J(E,0.03,T,I,0.008),0,P,0),[-1,1].forEach(($t)=>{U(L,et(0.05,P,0.05,I),$t*(E/2-0.08),P/2,-T/2+0.1),U(L,et(0.06,0.03,T-0.1,I),$t*(E/2-0.08),0.015,0)}),U(L,J(E*0.78,0.006,0.32,v("#5a1f1f",{roughness:0.9}),0.003),0,P+0.018,0.05);{let pe=-T/2+0.12,jt=new Qt(new pi(1.5,1.5,0.345,32,1,!0,Math.PI-0.27,0.54),v("#000",{map:ka("#2b4a77"),side:wn,roughness:0.25})),Dt=new Qt(new pi(1.52,1.52,0.37,32,1,!0,Math.PI-0.2775,0.555),v("#151517",{side:wn,roughness:0.5}));[jt,Dt].forEach((He)=>U(L,He,0,P+0.43,pe+1.5)),U(L,J(0.16,0.03,0.02,v("#c8102e"),0.01),0,P+0.245,pe-0.025)}U(L,et(0.06,0.2,0.04,I),0,P+0.12,-T/2+0.08),U(L,et(0.25,0.01,0.18,I),0,P+0.02,-T/2+0.1),U(L,J(0.12,0.03,0.04,I,0.01),0,P+0.65,-T/2+0.1);let G=new Ut;U(G,J(0.38,0.02,0.26,v("#3a3d42"),0.01),0,0.01,0);let K=U(G,J(0.38,0.25,0.012,v("#3a3d42"),0.006),0,0.13,-0.13);K.rotation.x=-0.25,U(G,Xt(0.34,0.21,v("#000",{map:ka("#1f2937")})),0,0.13,-0.123).rotation.x=-0.25,U(G,et(0.3,0.01,0.2,v("#e65a2f")),0,-0.02,0.02),U(L,G,-E*0.32,P+0.1,-T/2+0.25),U(L,J(0.44,0.02,0.14,v("#151515"),0.006),0,P+0.03,0.14),U(L,J(0.06,0.03,0.1,v("#151515"),0.02),0.32,P+0.03,0.14);let at=U(L,new Qt(new jn(0.09,0.015,8,16,Math.PI),I),E*0.38,P+0.25,-T/2+0.1);at.rotation.y=Math.PI/2;let ut=new Ut;U(ut,Z(0.008,0.008,0.5,I,6),0,0.25,0).rotation.z=0.5,U(ut,Z(0.03,0.03,0.12,I,12),-0.14,0.45,0).rotation.z=1.2,U(ut,Z(0.07,0.07,0.01,v("#111",{transparent:!0,opacity:0.7}),20),-0.05,0.45,0.08).rotation.x=Math.PI/2,U(L,ut,E*0.44,P,-T/2+0.06);let yt=new Ut;U(yt,Z(0.008,0.008,1.3,I,6),0,0.65,0),U(yt,new Qt(new jn(0.12,0.015,8,24),v("#fff",{emissive:"#fff",emissiveIntensity:0.4})),0,1.35,0),U(L,yt,-E*0.45,0,-T/2-0.1);let Wt=v("#111",{roughness:0.9});return[-0.2,0,0.15].forEach(($t)=>U(L,Z(0.004,0.004,P,Wt,4),$t,P/2,-T/2+0.02)),L},"cadeira-pc"(){let E=new Ut,T=v("#cfd0cd",{roughness:0.8}),P=v("#f2f2f0",{roughness:0.4});for(let G=0;G<5;G++){let K=G/5*Math.PI*2,at=U(E,et(0.32,0.03,0.04,P),Math.cos(K)*0.16,0.07,Math.sin(K)*0.16);at.rotation.y=-K,U(E,At(0.03,P,10),Math.cos(K)*0.3,0.03,Math.sin(K)*0.3)}U(E,Z(0.025,0.025,0.35,R,10),0,0.25,0),U(E,J(0.5,0.08,0.48,T,0.04),0,0.48,0);let L=U(E,J(0.46,0.6,0.06,T,0.05),0,0.85,-0.24);return L.rotation.x=-0.12,U(E,J(0.48,0.62,0.02,P,0.02),0,0.85,-0.28).rotation.x=-0.12,U(E,J(0.3,0.12,0.06,P,0.04),0,1.22,-0.29),U(E,J(0.36,0.14,0.05,v("#e3e3df"),0.04),0,0.72,-0.2),[-1,1].forEach((G)=>{U(E,J(0.05,0.03,0.26,v("#9a9a96"),0.015),G*0.27,0.68,-0.02),U(E,et(0.03,0.18,0.03,P),G*0.27,0.58,-0.1)}),E},puff(E){let T=new Ut;return U(T,At(E/2,v("#1d1e22",{roughness:0.5}),24),0,0.2,0).scale.set(1,0.5,1),T},"quadro-branco"(E,T,P){let L=new Ut;U(L,et(E,P,0.02,ct),0,P/2,0),U(L,Xt(E-0.03,P-0.03,v("#fff",{map:xm(),roughness:0.2})),0,P/2,0.011);let G=new Ut;U(G,Z(0.17,0.17,0.03,I,20),0,0.45,0),[0,2.1,4.2].forEach((at)=>U(G,Z(0.01,0.01,0.45,R,6),Math.cos(at)*0.13,0.22,Math.sin(at)*0.13)),U(G,J(0.14,0.03,0.05,v("#2a6fd1"),0.01),0,0.48,0),U(L,G,0,-0.6,0.35);let K=new Ut;return U(K,J(0.35,0.45,0.2,v("#f3f3f3",{roughness:1}),0.03),0,0.22,0),U(K,J(0.3,0.4,0.18,v("#2e2e8a",{roughness:1}),0.03),0.3,0.2,0.05),U(L,K,-E*0.3,-0.6,0.25),L},"guarda-roupa-escritorio"(E,T,P){return Rt(E,T,P,!1)},"guarda-roupa-casal"(E,T,P){return Rt(E,T,P,!0)},cama(E,T){let P=new Ut,L=v("#26262b",{roughness:0.55,map:vr("#26262b",0.08)});U(P,J(E,0.3,T,v("#1f1f22",{roughness:0.9}),0.02),0,0.15,0),U(P,J(E-0.04,0.2,T-0.04,v("#e8e6e1"),0.05),0,0.4,0),U(P,J(E+0.06,0.1,T*0.78,L,0.05),0,0.48,T*0.11),U(P,J(E+0.07,0.32,0.02,L,0.01),0,0.32,T/2+0.01),[-1,1].forEach((yt)=>U(P,J(0.02,0.32,T*0.78,L,0.01),yt*(E/2+0.03),0.32,T*0.11)),U(P,et(E+0.08,0.006,0.006,v("#bbb")),0,0.18,T/2+0.025),[-1,1].forEach((yt)=>{let Wt=U(P,J(E*0.44,0.14,0.32,v("#33333a",{roughness:0.5}),0.07),yt*E*0.24,0.55,-T/2+0.22);Wt.rotation.x=-0.35});let G=(yt,Wt,$t,Vt)=>{U(P,At(Vt,v($t,{roughness:1})),yt,0.58+Vt*0.8,Wt),U(P,At(Vt*0.65,v($t,{roughness:1})),yt,0.58+Vt*2.2,Wt-0.02)};G(-0.35,-T/2+0.5,"#f2efe8",0.09),G(-0.12,-T/2+0.5,"#f2efe8",0.09),G(0.2,-T/2+0.5,"#5b3a26",0.11),G(0.1,0.1,"#d6a65a",0.07);let K=U(P,J(0.5,0.06,0.4,v("#c2185b",{roughness:1}),0.03),0.3,0.56,0.05);K.rotation.y=0.4;let at=U(P,J(0.45,0.06,0.35,v("#9aa0aa",{roughness:1}),0.03),0.25,0.56,0.4);at.rotation.y=-0.3;let ut=U(P,J(0.4,0.05,0.28,v("#22396b",{roughness:1}),0.02),-0.35,0.55,0.45);return ut.rotation.y=0.1,P},"tapete-quarto"(E,T){let P=new Ut;U(P,J(E,0.012,T,v("#2b3550",{map:fm(),roughness:1}),0.004),0,0.006,0);let L=new Ut;return[-1,1].forEach((G)=>U(L,J(0.1,0.08,0.28,v("#f5f5f2"),0.03),G*0.07,0.04,0)),U(P,L,0,0.012,0),P},criado(E,T,P){let L=new Ut;return U(L,J(E,0.3,T,w,0.01),0,P-0.15,0),U(L,et(E-0.04,0.22,0.01,v("#e2ddd0")),0,P-0.15,T/2-0.03),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([G,K])=>{U(L,Z(0.012,0.008,P-0.3,B,8),G*(E/2-0.03),(P-0.3)/2,K*(T/2-0.03)).rotation.set(K*0.1,0,-G*0.1)}),U(L,Z(0.06,0.09,0.22,v("#4a2f22",{roughness:0.4}),16),0,P+0.11,0),U(L,Z(0.09,0.12,0.16,v("#f2ead8",{emissive:"#ffdca0",emissiveIntensity:0.35}),20),0,P+0.3,0),L},"quadro-quarto"(E,T,P){let L=new Ut;return U(L,et(E,P,0.03,v("#1a1a1a")),0,P/2,0),U(L,Xt(E-0.02,P-0.02,v("#fff",{map:gm()})),0,P/2,0.016),L},"varal-chao"(E,T,P){let L=new Ut,G=v("#f4f4f2",{roughness:0.4});[-1,1].forEach((K)=>{let at=U(L,Z(0.01,0.01,1.15,G,8),K*(E/2-0.02),0.5,-T*0.2);at.rotation.x=0.45;let ut=U(L,Z(0.01,0.01,1.15,G,8),K*(E/2-0.02),0.5,T*0.2);ut.rotation.x=-0.45});for(let K=0;K<7;K++)U(L,Jt(Z(0.006,0.006,E,G,6),"x"),0,P,-T/2+K*T/6);return["#151515","#1f2c4f","#6b1f2a","#151515","#e9e2d5"].forEach((K,at)=>U(L,Xt(0.34,0.5,v(K,{side:wn,roughness:1})),-E/2+0.2+at*(E-0.3)/5,P-0.25,-T/2+at%3*T/3+0.05)),L},bike(E){let T=new Ut;T.scale.setScalar(E/1.72);let P=v("#22313f",{roughness:0.4}),L=v("#151515",{roughness:0.9});[-1,1].forEach((K)=>{U(T,new Qt(new jn(0.34,0.03,8,28),L),K*0.5,0.36,0);for(let at=0;at<8;at++){let ut=U(T,Z(0.002,0.002,0.66,v("#aaa"),3),K*0.5,0.36,0);ut.rotation.z=at*Math.PI/8}});let G=(K,at,ut,yt)=>{let Wt=Math.hypot(ut-K,yt-at),$t=U(T,Z(0.018,0.018,Wt,P,8),(K+ut)/2,(at+yt)/2,0);$t.rotation.z=Math.atan2(K-ut,yt-at)};return G(-0.5,0.36,-0.05,0.4),G(-0.05,0.4,0.35,0.75),G(-0.05,0.4,-0.12,0.82),G(-0.12,0.82,0.35,0.75),G(0.35,0.75,0.5,0.36),G(-0.5,0.36,-0.12,0.82),U(T,J(0.2,0.04,0.08,I,0.02),-0.14,0.86,0),U(T,Jt(Z(0.012,0.012,0.55,I,8),"z"),0.38,0.86,0),T}},ae=[],Kt=new Map,_t=(E)=>{let T=new ys;return E.forEach(([P,L],G)=>G?T.lineTo(e(P),t(L)):T.moveTo(e(P),t(L))),T},Tt=$l();Tt.wrapS=Tt.wrapT=fs,Tt.repeat.set(0.8333333333333334,0.8333333333333334);let V=(E,T)=>{let P=new mr(_t(E));P.rotateX(Math.PI/2);let L=new Qt(P,T);L.receiveShadow=!0,L.userData.piso=!0,L.position.y=0.001,p.add(L),ae.push(L)};V(s,v("#fff",{map:Tt,roughness:0.35,side:wn}));let zt=$l();zt.wrapS=zt.wrapT=fs,zt.repeat.set(1.1111111111111112,1.1111111111111112),V(l,v("#e9e2d6",{map:zt,roughness:0.6,side:wn}));let kt=new Qt(new pr(_t([[46,16],[202,16],[202,106],[332,106],[332,350],[46,350]]),{depth:0.18,bevelEnabled:!1}).rotateX(Math.PI/2),v("#f1efe9",{roughness:0.9}));kt.receiveShadow=!0,p.add(kt);let vt=new Qt(new xs(14,48).rotateX(-Math.PI/2),new wa({opacity:0.12}));vt.position.set(ue.x,-0.18,ue.z),vt.receiveShadow=!0,p.add(vt);let ee=v("#fbfaf7",{roughness:0.92}),Bt=v("#6e6c68",{roughness:0.9}),Gt=v("#ffffff",{roughness:0.4}),k=(E,T,P,L=0,G=ee,K=!0)=>{let at=e(E[0]),ut=t(E[1]),yt=e(T[0]),Wt=t(T[1]),$t=Math.hypot(yt-at,Wt-ut)+Vi,Vt=-Math.atan2(Wt-ut,yt-at),pe=new Qt(new We($t,1,Vi),G);pe.rotation.y=Vt,pe.position.set((at+yt)/2,0,(ut+Wt)/2),pe.castShadow=pe.receiveShadow=!0,p.add(pe);let jt=new Qt(new We($t+0.002,0.012,Vi+0.002),Bt);jt.rotation.y=Vt,jt.position.copy(pe.position),jt.visible=K,p.add(jt);let Dt={corpo:pe,topo:jt,base:L,frente:E[1]>=340&&T[1]>=340,comTopo:K};return N(Dt,P),Dt},N=(E,T)=>{E.corpo.scale.y=T,E.corpo.position.y=E.base+T/2,E.topo.position.y=E.base+T+0.006},nt=[];c.forEach((E)=>{for(let T=1;T<E.length;T++){nt.push(k(E[T-1],E[T],mi));let P=k(E[T-1],E[T],0.07,0,Gt,!1);P.corpo.scale.z=1.18}});{let[E,T,P,L]=u,G=k([E+P/2,T],[E+P/2,T+L],mi);G.corpo.geometry=new We(n(L)+Vi,1,n(P)),G.topo.geometry=new We(n(L)+Vi,0.012,n(P)),nt.push(G)}let mt=[],xt=[],ht=v("#e9eaea",{metalness:0.4,roughness:0.35}),Zt=F.clone(),Ct=[Zt,ht];d.forEach(([E,T])=>{let P=k(E,T,1);P.frente=!1,mt.push(k(E,T,mi-2.1,2.1));let L=k(E,T,1.1,1,Zt,!1);L.corpo.scale.z=0.25,[1,2.07].forEach((at)=>{let ut=k(E,T,0.03,at,ht,!1);ut.corpo.scale.z=0.5});let G=[(E[0]+T[0])/2,(E[1]+T[1])/2],K=E[0]===T[0];k(K?[G[0],G[1]-0.4]:[G[0]-0.4,G[1]],K?[G[0],G[1]+0.4]:[G[0]+0.4,G[1]],1.07,1,ht,!1)});{let E=k(o[0],o[1],2.1,0,Zt,!1);E.corpo.scale.z=0.25,mt.push(k(o[0],o[1],mi-2.1,2.1)),k(o[0],o[1],0.04,2.07,ht,!1);let T=(o[0][0]+o[1][0])/2;k([T,302.5],[T,305.5],2.1,0,ht,!1)}{let[E,T]=f,P=Math.round((T[0]-E[0])/3.2),L=v("#f2f0ea",{roughness:0.5});for(let K=0;K<=P;K++){let at=Z(0.01,0.01,1.05,L,6);at.position.set(e(E[0]+K*(T[0]-E[0])/P),0.525,t(E[1])-0.02),at.castShadow=!0,p.add(at)}k(E,T,0.05,1.05,L,!1);let G=k(E,T,1.3,1.1,v("#ffffff",{transparent:!0,opacity:0.1,side:wn}),!1);G.corpo.scale.z=0.1,mt.push(G),[[50,304],[50,346]].forEach(()=>{})}{let E=pm();E.wrapS=E.wrapT=fs,E.repeat.set(3,1);let T=Xt(1.9,0.62,v("#fff",{map:E,roughness:0.4}));T.position.set(e(110),1.22,t(20)+Vi/2+0.005),p.add(T)}let Nt=(E,T,P,L,G="#f7f6f2")=>{let K=new Ut,at=v(G,{roughness:0.5});return Ct.push(at),U(K,J(P,2.1,0.035,at,0.005),P/2,1.05,0),U(K,Jt(Z(0.012,0.012,0.12,R,8),"x"),P-0.08,1,0.03),U(K,Jt(Z(0.012,0.012,0.12,R,8),"x"),P-0.08,1,-0.03),K.position.set(E,0,T),K.rotation.y=L,pt(K),p.add(K),K},ie=[Nt(e(50),t(160),0.85,1.2,"#efe9df"),Nt(e(216),t(199),0.55,2),Nt(e(221),t(230),0.7,1),Nt(e(200),t(232),0.7,-1.1)],Mt=[],Ot=Ht(1.8,2.3,"#a8a9ab");Ot.traverse((E)=>{let T=E;if(T.isMesh)Ct.push(T.material)}),Ot.position.set(e(270),0,t(342)),Mt.push(Ot);let oe=Ht(1.4,2.3,"#f3f1ec");oe.traverse((E)=>{let T=E;if(T.isMesh)Ct.push(T.material)}),oe.position.set(e(278),0,t(114)),Mt.push(oe);{let E=new Ut,T=J(0.8,0.02,0.22,v("#2e2a26"),0.01);T.position.y=0.42,T.rotation.z=1.2,E.add(T),[-1,1].forEach((P)=>{let L=At(0.03,v("#d6a23a"),8);L.position.set(-0.05+P*0.02,0.06+(P+1)*0.32,0.08),E.add(L)}),E.position.set(e(322),0,t(160)),Mt.push(E)}{let E=new Ut,T=Z(0.17,0.14,0.25,v("#ef8a9c"),18);T.position.y=0.125,T.scale.x=1.6,E.add(T);let P=Z(0.1,0.1,0.1,v("#7a1f3d"),16);P.position.set(0.12,0.2,0),E.add(P),E.position.set(e(150),0,t(208)),Mt.push(E)}for(let E=0;E<6;E++){let T=qt(0.14,0.32+E%3*0.08,4);T.position.set(e(56+E*8),0,t(342.5)),Mt.push(T)}{let E=new Ut,T=Z(0.012,0.012,1.2,v("#d64a6a"),6);T.position.y=0.6,T.rotation.z=0.15,E.add(T);let P=Z(0.12,0.14,0.05,v("#c9c9c9",{roughness:1}),14);P.position.y=0.03,E.add(P),E.position.set(e(178),0,t(310)),Mt.push(E)}{let E=new Ut,T=Z(0.06,0.08,0.22,v("#78c850",{transparent:!0,opacity:0.8}),14);T.position.y=0.11,E.add(T),E.position.set(e(178),0,t(322)),Mt.push(E)}{let E=new Ut,T=et(0.25,0.02,0.1,v("#fff"));T.position.set(0,1.35,0),E.add(T);let P=Z(0.03,0.03,0.16,v("#8d6ad1"),10);P.position.set(0.05,1.44,0),E.add(P);let L=Z(0.003,0.003,0.2,v("#2a7a3a"),4);L.position.set(-0.05,1.2,0),E.add(L),E.position.set(e(51)+0.07,0,t(120)),E.rotation.y=Math.PI/2,Mt.push(E)}{let E=new Ut,T=Xt(1.2,0.9,v("#fff",{transparent:!0,opacity:0}));E.add(T),Mt.push(E)}Mt.forEach((E)=>{pt(E),p.add(E)});let ne={"+z":0,"-z":Math.PI,"+x":Math.PI/2,"-x":-Math.PI/2};r.forEach((E)=>{let T=E.face==="+x"||E.face==="-x",P=n(T?E.d:E.w),L=n(T?E.w:E.d),G=(te[E.id]||((K,at,ut)=>{let yt=new Ut;return U(yt,J(K,ut,at,w),0,ut/2,0),yt}))(P,L,E.h,E);if(G.rotation.y=ne[E.face||"+z"],G.position.set(e(E.x)+n(E.w)/2,E.base||0,t(E.y)+n(E.d)/2),pt(G),E.id.startsWith("tapete"))G.traverse((K)=>{K.castShadow=!1});G.traverse((K)=>{let at=K;if(!at.isMesh)return;at.userData.movel=E.id,at.material=at.material.clone(),Kt.set(E.id,[...Kt.get(E.id)||[],at])}),p.add(G),ae.push(G)}),Kt.get("cortina-sala")?.forEach((E)=>Ct.push(E.material));let Pt=new Ut;Pt.visible=!1,p.add(Pt);let se=!1,de=fn(4,256,(E)=>{let T=E.createLinearGradient(0,0,0,256);T.addColorStop(0,"#5f97d6"),T.addColorStop(0.55,"#a9c9ec"),T.addColorStop(1,"#e9eef0"),E.fillStyle=T,E.fillRect(0,0,4,256)}),xe=2.8,j=-xe*4-0.18;function Et(){if(se)return;se=!0;let E=(()=>{let Yt=7;return()=>(Yt=Yt*16807%2147483647)/2147483647})(),T=new Qt(new xs(1400,64).rotateX(-Math.PI/2),v("#8a9a6a",{roughness:1}));T.position.y=j-0.05,Pt.add(T);let P=new Qt(new Kn(26,34).rotateX(-Math.PI/2),v("#c9b9a3",{roughness:1}));P.position.set(ue.x+3,j,ue.z+24),P.receiveShadow=!0,Pt.add(P);for(let Yt=0;Yt<9;Yt++){let ge=new Qt(new Kn(0.08,4.6).rotateX(-Math.PI/2),v("#e7c84b"));ge.position.set(ue.x-6+Yt*2.6,j+0.01,ue.z+15),Pt.add(ge)}let L=["#d8d8d8","#f2f2f2","#9aa1a8","#b3262b","#2b2f36","#c9ccd0"];for(let Yt=0;Yt<14;Yt++){let ge=J(1.8,1.3,4.2,v(L[Yt%6],{metalness:0.4,roughness:0.35}),0.35);ge.position.set(ue.x-6+Yt%7*2.6+(Yt>6?0:0),j+0.65,ue.z+15+(Yt>6?9:0)),ge.castShadow=!0,Pt.add(ge)}let G=v("#eeeeea",{roughness:0.9}),K=v("#c4c6c4",{roughness:0.9}),at=(Yt,ge,ve,Ae,Bn,zn=0,an=!0)=>{let Re=new Ut,Hn=Bn*xe;U(Re,et(ve,Hn,Ae,G),0,Hn/2,0),U(Re,et(ve+0.1,xe*1.3,Ae+0.1,K),0,xe*0.65,0),U(Re,et(ve*0.3,2.2,Ae*0.5,K),0,Hn+1.1,0);for(let tn=0;tn<Bn;tn++)for(let pn=0;pn<Math.floor(ve/3.2);pn++){let ei=-ve/2+1.6+pn*3.2,ni=tn*xe+1.5;if(U(Re,et(1.2,1.1,0.05,v("#55606b",{roughness:0.2,metalness:0.3})),ei,ni,Ae/2+0.02),U(Re,et(1.2,1.1,0.05,v("#55606b",{roughness:0.2,metalness:0.3})),ei,ni,-Ae/2-0.02),an&&pn%2===0&&tn>0)U(Re,et(2.4,0.08,1,G),ei,tn*xe,Ae/2+0.5),U(Re,et(2.4,1,0.04,v("#f4f4f2",{transparent:!0,opacity:0.55})),ei,tn*xe+0.5,Ae/2+1)}return Re.position.set(Yt,j,ge),Re.rotation.y=zn,Re.traverse((tn)=>{if(tn.isMesh)tn.castShadow=!0,tn.receiveShadow=!0}),Pt.add(Re),Re},ut=et(e(332)-e(46)+0.2,-j,t(350)-t(16)+0.2,G);ut.position.set((e(46)+e(332))/2,j/2-0.09,(t(16)+t(350))/2),ut.receiveShadow=!0,Pt.add(ut);for(let Yt=0;Yt<4;Yt++){let ge=et(e(332)-e(46)+0.25,0.12,0.05,K);ge.position.set((e(46)+e(332))/2,j+(Yt+1)*xe,t(350)+0.12),Pt.add(ge)}at(ue.x-21,ue.z+32,24,11,5,Math.PI/2),at(ue.x-22,ue.z+8,20,11,5,Math.PI/2),at(ue.x+26,ue.z-6,20,11,5,-Math.PI/2),at(ue.x-4,ue.z-26,22,11,5,Math.PI);let yt=et(70,2.2,0.2,v("#d9d6cf"));yt.position.set(ue.x,j+1.1,ue.z+44),Pt.add(yt);let Wt=v("#4f7d36",{roughness:1}),$t=v("#6b9a43",{roughness:1}),Vt=v("#6d4c35"),pe=(Yt,ge,ve=1)=>{let Ae=new Ut;U(Ae,Z(0.15*ve,0.2*ve,2.5*ve,Vt,6),0,1.25*ve,0),U(Ae,At(1.6*ve,E()>0.5?Wt:$t,8),0,3.2*ve,0),Ae.position.set(Yt,j,ge),Pt.add(Ae)};for(let Yt=0;Yt<26;Yt++)pe(ue.x-34+Yt*2.8,ue.z+47+E()*3,0.8+E()*0.6);for(let Yt=0;Yt<10;Yt++)pe(ue.x-30+E()*10,ue.z-30+E()*60,0.9+E()*0.5);let jt=new We(1,1,1),Dt=700,He=300,me=new _s(jt,v("#f1ece2",{roughness:1}),Dt),ke=new _s(jt,v("#b4593a",{roughness:1}),Dt),rn=new _s(jt,v("#e3e2de",{roughness:0.9}),He),De=new ye,Sn=new un,Se=new X,je=new X,ti=new he;for(let Yt=0;Yt<Dt;Yt++){let ge=(E()-0.5)*Math.PI*1.7+(E()>0.25?0:Math.PI),ve=60+E()*340,Ae=ue.x+Math.sin(ge)*ve,Bn=ue.z+Math.cos(ge)*ve,zn=5+E()*5,an=5+E()*6,Re=3+Math.floor(E()*3)*2.8,Hn=E()*Math.PI;Sn.setFromAxisAngle(new X(0,1,0),Hn),De.compose(Se.set(Ae,j-6+ve*0.02+Re/2,Bn),Sn,je.set(zn,Re,an)),me.setMatrixAt(Yt,De),De.compose(Se.set(Ae,j-6+ve*0.02+Re+0.25,Bn),Sn,je.set(zn+0.6,0.5,an+0.6)),ke.setMatrixAt(Yt,De)}for(let Yt=0;Yt<He;Yt++){let ge=(E()-0.5)*Math.PI*0.9,ve=300+E()*900,Ae=ue.x+Math.sin(ge)*ve,Bn=ue.z+Math.cos(ge)*ve,zn=12+E()*14,an=12+E()*(ve>700?55:30);De.compose(Se.set(Ae,j-8+an/2+ve*0.01,Bn),Sn.identity(),je.set(zn,an,zn*(0.7+E()*0.6))),rn.setMatrixAt(Yt,De);let Re=0.82+E()*0.15;rn.setColorAt(Yt,ti.setRGB(Re,Re*(0.97+E()*0.04),Re*0.96))}[me,ke,rn].forEach((Yt)=>{if(Yt.instanceMatrix.needsUpdate=!0,Yt.instanceColor)Yt.instanceColor.needsUpdate=!0;Pt.add(Yt)});for(let Yt=0;Yt<16;Yt++){let ge=(E()-0.5)*Math.PI*1.6,ve=140+E()*250,Ae=new Qt(new vs(30+E()*40,12,8),v(E()>0.5?"#5f7f45":"#6f8c4f",{roughness:1}));Ae.scale.y=0.25,Ae.position.set(ue.x+Math.sin(ge)*ve,j-6,ue.z+Math.cos(ge)*ve),Pt.add(Ae)}let Ye=(Yt,ge,ve,Ae)=>{let an=new Ge,Re=[],Hn=[];for(let pn=0;pn<=160;pn++){let ei=-1300+pn*2600/160,ni=pn/160,jl=ge*(0.55+0.25*Math.sin(ni*9+Ae)+0.12*Math.sin(ni*23+Ae*2)+0.08*Math.sin(ni*57))*(1-Math.pow(Math.abs(ni-0.5)*1.6,3));if(Re.push(ei,j-20,0,ei,j+Math.max(10,jl),-12),pn<160){let xi=pn*2;Hn.push(xi,xi+2,xi+1,xi+1,xi+2,xi+3)}}an.setAttribute("position",new Me(Re,3)),an.setIndex(Hn),an.computeVertexNormals();let tn=new Qt(an,new Fn({color:ve,roughness:1,side:wn}));tn.position.set(ue.x,0,ue.z+Yt),Pt.add(tn)};Ye(1700,330,"#7189a6",0.3),Ye(1350,170,"#82977a",1.7)}let ft=!1,gt=()=>{let E=ft&&!re;Pt.visible=E,vt.visible=!E,p.background=E?de:null,p.fog=E?new cr("#dfe7ee",260,2300):null,x.maxPolarAngle=E?1.56:1.35,x.maxDistance=E?60:30,h.shadowMap.needsUpdate=!0},Lt=new Ut;p.add(Lt);let Ft=new Fn({color:"#e0962e",transparent:!0,opacity:0.38}),le=new hr({color:"#c47a12"}),we=new ln(new X(0,-1,0),Jl+0.02),Pe=!0,re=!1,sn=()=>{},Ke=()=>{let E=re?mi:Pe?mi:Jl;nt.forEach((P)=>N(P,!re&&Pe&&P.frente?um:E)),mt.forEach((P)=>{P.corpo.visible=E===mi&&!re,P.topo.visible=P.comTopo&&P.corpo.visible});let T=!re&&!Pe?[we]:[];Ct.forEach((P)=>{P.clippingPlanes=T,P.needsUpdate=!0}),ie.forEach((P)=>P.visible=!re),[Ot,oe].forEach((P)=>P.visible=!re)},Ie=null,vn=()=>{},gi=new Na,Xi=new St,Mn=null,On=h.domElement;On.addEventListener("pointerdown",(E)=>{Mn={x:E.clientX,y:E.clientY,t:Date.now()}}),On.addEventListener("pointerup",(E)=>{if(!Mn||Math.hypot(E.clientX-Mn.x,E.clientY-Mn.y)>8||Date.now()-Mn.t>600){Mn=null;return}Mn=null;let T=On.getBoundingClientRect();Xi.set((E.clientX-T.left)/T.width*2-1,-((E.clientY-T.top)/T.height)*2+1),gi.setFromCamera(Xi,y);let P=(G)=>{while(G){if(!G.visible)return!1;G=G.parent}return!0},L=gi.intersectObjects([...ae,...nt.map((G)=>G.corpo)],!0).find((G)=>P(G.object)&&!G.object.material.transparent);if(!L||!(L.object.userData.movel||L.object.userData.piso))return;vn({movel:L.object.userData.movel,x:L.point.x*40+50,y:L.point.z*40+20})});let _i=null,Qn=()=>{let{clientWidth:E,clientHeight:T}=a;h.setSize(E,T,!1),g.aspect=E/Math.max(1,T),g.updateProjectionMatrix();let P=E/Math.max(1,T),L=Math.max(8.9,7.6/P)/2;Object.assign(_,{left:-L*P,right:L*P,top:L,bottom:-L}),_.updateProjectionMatrix()},qi=new ResizeObserver(Qn);qi.observe(a),Qn();let Yi=()=>{let E=Math.max(1,1.12/g.aspect);return{t:ue.clone().add(new X(0,0,0.2)),p:new X(ue.x-0.3*E,11.5*E,ue.z+7.2*E)}},Es=Yi();g.position.copy(Es.p),x.target.copy(Es.t),_.position.set(ue.x,20,ue.z),_.up.set(0,0,-1),_.lookAt(ue),M.target.copy(ue),Ke(),h.shadowMap.needsUpdate=!0;let bs=0,Ts=!0,O=2,tt=()=>{O=2};x.addEventListener("change",tt),M.addEventListener("change",tt),new ResizeObserver(tt).observe(a);let rt=()=>{if(!Ts)return;if(Ie)O=2;if(Ie&&!re){if(x.target.lerp(Ie.t,0.12),g.position.lerp(Ie.p,0.12),g.position.distanceTo(Ie.p)<0.02)Ie=null}if(Ie&&re){if(M.target.lerp(Ie.t,0.15),_.position.lerp(new X(Ie.t.x,20,Ie.t.z),0.15),_.zoom+=(Ie.p.y-_.zoom)*0.15,_.updateProjectionMatrix(),Math.abs(_.zoom-Ie.p.y)<0.01)Ie=null}if(S.update())O=2;if(O>0)O--,h.render(p,y),sn();bs=requestAnimationFrame(rt)};return rt(),{focar(E){let T=i.find((K)=>K.id===E);if(re){Ie={t:T?new X(e(T.x+T.w/2),0,t(T.y+T.h/2)):ue.clone(),p:new X(0,T?Math.min(3.2,7/Math.max(n(T.w),n(T.h),1.6)):1,0)};return}if(!T){Ie=Yi();return}let P=new X(e(T.x+T.w/2),0,t(T.y+T.h/2)),L=Math.max(n(T.w),n(T.h),1.8),G=Math.max(1,0.9/g.aspect);Ie={t:P,p:P.clone().add(new X(L*0.3*G,(3.2+L*1.7)*G,(2.2+L*1.4)*G))}},selecionar(E){if(_i)Kt.get(_i)?.forEach((T)=>T.material.emissive?.setHex(0));if(_i=E,E)Kt.get(E)?.forEach((T)=>T.material.emissive?.setHex(6961664));tt()},topo(E){let T=Kt.get(E);if(!T?.length)return null;let P=new An;T.forEach((G)=>P.expandByObject(G));let L=P.getCenter(new X);return{x:L.x,y:Math.min(P.max.y,2.3),z:L.z}},onToque(E){vn=E},modo(E){re=E,Ie=null,y=E?_:g,S=E?M:x,M.enabled=E,x.enabled=!E,b.castShadow=!E,Ke(),gt(),h.shadowMap.needsUpdate=!0,tt()},paredes(E){Pe=E,Ke(),h.shadowMap.needsUpdate=!0,tt()},paisagem(E){if(ft=E,E)Et();gt(),tt()},vistaVaranda(){if(re)return;if(!ft)ft=!0,Et(),gt();let E=new X(e(110),1.6,t(316));Ie={t:E.clone().add(new X(0.3,0.45,4)),p:E}},fantasmas(E){Lt.clear(),E.forEach((T)=>{let P=new We(T.l,T.a,T.p),L=new Qt(P,Ft);L.position.set(T.x,T.a/2+0.005,T.z);let G=new xa(new Ta(P),le);G.position.copy(L.position),Lt.add(L,G)}),tt()},projetar(E,T,P){let L=new X(E,T,P).project(y);return{x:(L.x+1)/2*a.clientWidth,y:(1-L.y)/2*a.clientHeight,ok:L.z<1}},onMudou(E){sn=E,tt()},destruir(){Ts=!1,cancelAnimationFrame(bs),qi.disconnect(),x.dispose(),M.dispose(),m.dispose(),h.dispose(),p.traverse((E)=>{E.geometry?.dispose()}),h.domElement.remove()}}}export{Pm as criarCena};
