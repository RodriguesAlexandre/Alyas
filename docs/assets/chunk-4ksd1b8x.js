import{n,e,t,i,s,l,c,u,d,o,f,r}from"./main-3008v6r2.js";var dn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Po=2;var Io=1,ii=2;var Do=4;var Qi=1000;var Gr="srgb";class Wn{addEventListener(a,h){if(this._listeners===void 0)this._listeners={};let p=this._listeners;if(p[a]===void 0)p[a]=[];if(p[a].indexOf(h)===-1)p[a].push(h)}hasEventListener(a,h){if(this._listeners===void 0)return!1;let p=this._listeners;return p[a]!==void 0&&p[a].indexOf(h)!==-1}removeEventListener(a,h){if(this._listeners===void 0)return;let m=this._listeners[a];if(m!==void 0){let g=m.indexOf(h);if(g!==-1)m.splice(g,1)}}dispatchEvent(a){if(this._listeners===void 0)return;let p=this._listeners[a.type];if(p!==void 0){a.target=this;let m=p.slice(0);for(let g=0,_=m.length;g<_;g++)m[g].call(this,a);a.target=null}}}var ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=1234567,Si=Math.PI/180,Zi=180/Math.PI;function si(){let a=Math.random()*4294967295|0,h=Math.random()*4294967295|0,p=Math.random()*4294967295|0,m=Math.random()*4294967295|0;return(ze[a&255]+ze[a>>8&255]+ze[a>>16&255]+ze[a>>24&255]+"-"+ze[h&255]+ze[h>>8&255]+"-"+ze[h>>16&15|64]+ze[h>>24&255]+"-"+ze[p&63|128]+ze[p>>8&255]+"-"+ze[p>>16&255]+ze[p>>24&255]+ze[m&255]+ze[m>>8&255]+ze[m>>16&255]+ze[m>>24&255]).toLowerCase()}function Le(a,h,p){return Math.max(h,Math.min(p,a))}function Wr(a,h){return(a%h+h)%h}function Il(a,h,p,m,g){return m+(a-h)*(g-m)/(p-h)}function Dl(a,h,p){if(a!==h)return(p-a)/(h-a);else return 0}function Vi(a,h,p){return(1-p)*a+p*h}function Ll(a,h,p,m){return Vi(a,h,1-Math.exp(-p*m))}function Ul(a,h=1){return h-Math.abs(Wr(a,h*2)-h)}function Nl(a,h,p){if(a<=h)return 0;if(a>=p)return 1;return a=(a-h)/(p-h),a*a*(3-2*a)}function Fl(a,h,p){if(a<=h)return 0;if(a>=p)return 1;return a=(a-h)/(p-h),a*a*a*(a*(a*6-15)+10)}function Ol(a,h){return a+Math.floor(Math.random()*(h-a+1))}function Bl(a,h){return a+Math.random()*(h-a)}function zl(a){return a*(0.5-Math.random())}function Hl(a){if(a!==void 0)Ta=a;let h=Ta+=1831565813;return h=Math.imul(h^h>>>15,h|1),h^=h+Math.imul(h^h>>>7,h|61),((h^h>>>14)>>>0)/4294967296}function kl(a){return a*Si}function Gl(a){return a*Zi}function Wl(a){return(a&a-1)===0&&a!==0}function Vl(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Xl(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ql(a,h,p,m,g){let{cos:_,sin:y}=Math,x=_(p/2),M=y(p/2),S=_((h+m)/2),E=y((h+m)/2),v=_((h-m)/2),b=y((h-m)/2),A=_((m-h)/2),C=y((m-h)/2);switch(g){case"XYX":a.set(x*E,M*v,M*b,x*S);break;case"YZY":a.set(M*b,x*E,M*v,x*S);break;case"ZXZ":a.set(M*v,M*b,x*E,x*S);break;case"XZX":a.set(x*E,M*C,M*A,x*S);break;case"YXY":a.set(M*A,x*E,M*C,x*S);break;case"ZYZ":a.set(M*C,M*A,x*E,x*S);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+g)}}function yi(a,h){switch(h.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw Error("Invalid component type.")}}function Ge(a,h){switch(h.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw Error("Invalid component type.")}}var Lo={DEG2RAD:Si,RAD2DEG:Zi,generateUUID:si,clamp:Le,euclideanModulo:Wr,mapLinear:Il,inverseLerp:Dl,lerp:Vi,damp:Ll,pingpong:Ul,smoothstep:Nl,smootherstep:Fl,randInt:Ol,randFloat:Bl,randFloatSpread:zl,seededRandom:Hl,degToRad:kl,radToDeg:Gl,isPowerOfTwo:Wl,ceilPowerOfTwo:Vl,floorPowerOfTwo:Xl,setQuaternionFromProperEuler:ql,normalize:Ge,denormalize:yi};class St{constructor(a=0,h=0){St.prototype.isVector2=!0,this.x=a,this.y=h}get width(){return this.x}set width(a){this.x=a}get height(){return this.y}set height(a){this.y=a}set(a,h){return this.x=a,this.y=h,this}setScalar(a){return this.x=a,this.y=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y)}copy(a){return this.x=a.x,this.y=a.y,this}add(a){return this.x+=a.x,this.y+=a.y,this}addScalar(a){return this.x+=a,this.y+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this}subScalar(a){return this.x-=a,this.y-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this}multiply(a){return this.x*=a.x,this.y*=a.y,this}multiplyScalar(a){return this.x*=a,this.y*=a,this}divide(a){return this.x/=a.x,this.y/=a.y,this}divideScalar(a){return this.multiplyScalar(1/a)}applyMatrix3(a){let h=this.x,p=this.y,m=a.elements;return this.x=m[0]*h+m[3]*p+m[6],this.y=m[1]*h+m[4]*p+m[7],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(a){return this.x*a.x+this.y*a.y}cross(a){return this.x*a.y-this.y*a.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(a){let h=Math.sqrt(this.lengthSq()*a.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(a)/h;return Math.acos(Le(p,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){let h=this.x-a.x,p=this.y-a.y;return h*h+p*p}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this}equals(a){return a.x===this.x&&a.y===this.y}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this}rotateAround(a,h){let p=Math.cos(h),m=Math.sin(h),g=this.x-a.x,_=this.y-a.y;return this.x=g*p-_*m+a.x,this.y=g*m+_*p+a.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(a,h,p,m,g,_,y,x,M){if(de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],a!==void 0)this.set(a,h,p,m,g,_,y,x,M)}set(a,h,p,m,g,_,y,x,M){let S=this.elements;return S[0]=a,S[1]=m,S[2]=y,S[3]=h,S[4]=g,S[5]=x,S[6]=p,S[7]=_,S[8]=M,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(a){let h=this.elements,p=a.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],this}extractBasis(a,h,p){return a.setFromMatrix3Column(this,0),h.setFromMatrix3Column(this,1),p.setFromMatrix3Column(this,2),this}setFromMatrix4(a){let h=a.elements;return this.set(h[0],h[4],h[8],h[1],h[5],h[9],h[2],h[6],h[10]),this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,h){let p=a.elements,m=h.elements,g=this.elements,_=p[0],y=p[3],x=p[6],M=p[1],S=p[4],E=p[7],v=p[2],b=p[5],A=p[8],C=m[0],P=m[3],T=m[6],w=m[1],G=m[4],N=m[7],H=m[2],rt=m[5],V=m[8];return g[0]=_*C+y*w+x*H,g[3]=_*P+y*G+x*rt,g[6]=_*T+y*N+x*V,g[1]=M*C+S*w+E*H,g[4]=M*P+S*G+E*rt,g[7]=M*T+S*N+E*V,g[2]=v*C+b*w+A*H,g[5]=v*P+b*G+A*rt,g[8]=v*T+b*N+A*V,this}multiplyScalar(a){let h=this.elements;return h[0]*=a,h[3]*=a,h[6]*=a,h[1]*=a,h[4]*=a,h[7]*=a,h[2]*=a,h[5]*=a,h[8]*=a,this}determinant(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8];return h*_*S-h*y*M-p*g*S+p*y*x+m*g*M-m*_*x}invert(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8],E=S*_-y*M,v=y*x-S*g,b=M*g-_*x,A=h*E+p*v+m*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/A;return a[0]=E*C,a[1]=(m*M-S*p)*C,a[2]=(y*p-m*_)*C,a[3]=v*C,a[4]=(S*h-m*x)*C,a[5]=(m*g-y*h)*C,a[6]=b*C,a[7]=(p*x-M*h)*C,a[8]=(_*h-p*g)*C,this}transpose(){let a,h=this.elements;return a=h[1],h[1]=h[3],h[3]=a,a=h[2],h[2]=h[6],h[6]=a,a=h[5],h[5]=h[7],h[7]=a,this}getNormalMatrix(a){return this.setFromMatrix4(a).invert().transpose()}transposeIntoArray(a){let h=this.elements;return a[0]=h[0],a[1]=h[3],a[2]=h[6],a[3]=h[1],a[4]=h[4],a[5]=h[7],a[6]=h[2],a[7]=h[5],a[8]=h[8],this}setUvTransform(a,h,p,m,g,_,y){let x=Math.cos(g),M=Math.sin(g);return this.set(p*x,p*M,-p*(x*_+M*y)+_+a,-m*M,m*x,-m*(-M*_+x*y)+y+h,0,0,1),this}scale(a,h){return this.premultiply(ir.makeScale(a,h)),this}rotate(a){return this.premultiply(ir.makeRotation(-a)),this}translate(a,h){return this.premultiply(ir.makeTranslation(a,h)),this}makeTranslation(a,h){if(a.isVector2)this.set(1,0,a.x,0,1,a.y,0,0,1);else this.set(1,0,a,0,1,h,0,0,1);return this}makeRotation(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,-p,0,p,h,0,0,0,1),this}makeScale(a,h){return this.set(a,0,0,0,h,0,0,0,1),this}equals(a){let h=this.elements,p=a.elements;for(let m=0;m<9;m++)if(h[m]!==p[m])return!1;return!0}fromArray(a,h=0){for(let p=0;p<9;p++)this.elements[p]=a[p+h];return this}toArray(a=[],h=0){let p=this.elements;return a[h]=p[0],a[h+1]=p[1],a[h+2]=p[2],a[h+3]=p[3],a[h+4]=p[4],a[h+5]=p[5],a[h+6]=p[6],a[h+7]=p[7],a[h+8]=p[8],a}clone(){return new this.constructor().fromArray(this.elements)}}var ir=new de;function Uo(a){for(let h=a.length-1;h>=0;--h)if(a[h]>=65535)return!0;return!1}function Bs(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Yl(){let a=Bs("canvas");return a.style.display="block",a}var wa={};function Gi(a){if(a in wa)return;wa[a]=!0,console.warn(a)}function Zl(a,h,p){return new Promise(function(m,g){function _(){switch(a.clientWaitSync(h,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:g();break;case a.TIMEOUT_EXPIRED:setTimeout(_,p);break;default:m()}}setTimeout(_,p)})}function Jl(a){let h=a.elements;h[2]=0.5*h[2]+0.5*h[3],h[6]=0.5*h[6]+0.5*h[7],h[10]=0.5*h[10]+0.5*h[11],h[14]=0.5*h[14]+0.5*h[15]}function $l(a){let h=a.elements;if(h[11]===-1)h[10]=-h[10]-1,h[14]=-h[14];else h[10]=-h[10],h[14]=-h[14]+1}var ge={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(a,h,p){if(this.enabled===!1||h===p||!h||!p)return a;if(this.spaces[h].transfer==="srgb")a.r=Pn(a.r),a.g=Pn(a.g),a.b=Pn(a.b);if(this.spaces[h].primaries!==this.spaces[p].primaries)a.applyMatrix3(this.spaces[h].toXYZ),a.applyMatrix3(this.spaces[p].fromXYZ);if(this.spaces[p].transfer==="srgb")a.r=Ei(a.r),a.g=Ei(a.g),a.b=Ei(a.b);return a},fromWorkingColorSpace:function(a,h){return this.convert(a,this.workingColorSpace,h)},toWorkingColorSpace:function(a,h){return this.convert(a,h,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){if(a==="")return"linear";return this.spaces[a].transfer},getLuminanceCoefficients:function(a,h=this.workingColorSpace){return a.fromArray(this.spaces[h].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,h,p){return a.copy(this.spaces[h].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function Pn(a){return a<0.04045?a*0.0773993808:Math.pow(a*0.9478672986+0.0521327014,2.4)}function Ei(a){return a<0.0031308?a*12.92:1.055*Math.pow(a,0.41666)-0.055}var Aa=[0.64,0.33,0.3,0.6,0.15,0.06],Ra=[0.2126,0.7152,0.0722],Ca=[0.3127,0.329],Pa=new de().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Ia=new de().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);ge.define({["srgb-linear"]:{primaries:Aa,whitePoint:Ca,transfer:"linear",toXYZ:Pa,fromXYZ:Ia,luminanceCoefficients:Ra,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Aa,whitePoint:Ca,transfer:"srgb",toXYZ:Pa,fromXYZ:Ia,luminanceCoefficients:Ra,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}});var ai;class No{static getDataURL(a){if(/^data:/i.test(a.src))return a.src;if(typeof HTMLCanvasElement>"u")return a.src;let h;if(a instanceof HTMLCanvasElement)h=a;else{if(ai===void 0)ai=Bs("canvas");ai.width=a.width,ai.height=a.height;let p=ai.getContext("2d");if(a instanceof ImageData)p.putImageData(a,0,0);else p.drawImage(a,0,0,a.width,a.height);h=ai}if(h.width>2048||h.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",a),h.toDataURL("image/jpeg",0.6);else return h.toDataURL("image/png")}static sRGBToLinear(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap){let h=Bs("canvas");h.width=a.width,h.height=a.height;let p=h.getContext("2d");p.drawImage(a,0,0,a.width,a.height);let m=p.getImageData(0,0,a.width,a.height),g=m.data;for(let _=0;_<g.length;_++)g[_]=Pn(g[_]/255)*255;return p.putImageData(m,0,0),h}else if(a.data){let h=a.data.slice(0);for(let p=0;p<h.length;p++)if(h instanceof Uint8Array||h instanceof Uint8ClampedArray)h[p]=Math.floor(Pn(h[p]/255)*255);else h[p]=Pn(h[p]);return{data:h,width:a.width,height:a.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),a}}var Kl=0;class Vr{constructor(a=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=si(),this.data=a,this.dataReady=!0,this.version=0}set needsUpdate(a){if(a===!0)this.version++}toJSON(a){let h=a===void 0||typeof a==="string";if(!h&&a.images[this.uuid]!==void 0)return a.images[this.uuid];let p={uuid:this.uuid,url:""},m=this.data;if(m!==null){let g;if(Array.isArray(m)){g=[];for(let _=0,y=m.length;_<y;_++)if(m[_].isDataTexture)g.push(sr(m[_].image));else g.push(sr(m[_]))}else g=sr(m);p.url=g}if(!h)a.images[this.uuid]=p;return p}}function sr(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap)return No.getDataURL(a);else if(a.data)return{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var jl=0;class Xe extends Wn{constructor(a=Xe.DEFAULT_IMAGE,h=Xe.DEFAULT_MAPPING,p=1001,m=1001,g=1006,_=1008,y=1023,x=1009,M=Xe.DEFAULT_ANISOTROPY,S=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=si(),this.name="",this.source=new Vr(a),this.mipmaps=[],this.mapping=h,this.channel=0,this.wrapS=p,this.wrapT=m,this.magFilter=g,this.minFilter=_,this.anisotropy=M,this.format=y,this.internalFormat=null,this.type=x,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(a=null){this.source.data=a}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(a){return this.name=a.name,this.source=a.source,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.channel=a.channel,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.internalFormat=a.internalFormat,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.center.copy(a.center),this.rotation=a.rotation,this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrix.copy(a.matrix),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.colorSpace=a.colorSpace,this.userData=JSON.parse(JSON.stringify(a.userData)),this.needsUpdate=!0,this}toJSON(a){let h=a===void 0||typeof a==="string";if(!h&&a.textures[this.uuid]!==void 0)return a.textures[this.uuid];let p={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(a).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)p.userData=this.userData;if(!h)a.textures[this.uuid]=p;return p}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(a){if(this.mapping!==300)return a;if(a.applyMatrix3(this.matrix),a.x<0||a.x>1)switch(this.wrapS){case 1000:a.x=a.x-Math.floor(a.x);break;case 1001:a.x=a.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(a.x)%2)===1)a.x=Math.ceil(a.x)-a.x;else a.x=a.x-Math.floor(a.x);break}if(a.y<0||a.y>1)switch(this.wrapT){case 1000:a.y=a.y-Math.floor(a.y);break;case 1001:a.y=a.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(a.y)%2)===1)a.y=Math.ceil(a.y)-a.y;else a.y=a.y-Math.floor(a.y);break}if(this.flipY)a.y=1-a.y;return a}set needsUpdate(a){if(a===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(a){if(a===!0)this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=300;Xe.DEFAULT_ANISOTROPY=1;class Me{constructor(a=0,h=0,p=0,m=1){Me.prototype.isVector4=!0,this.x=a,this.y=h,this.z=p,this.w=m}get width(){return this.z}set width(a){this.z=a}get height(){return this.w}set height(a){this.w=a}set(a,h,p,m){return this.x=a,this.y=h,this.z=p,this.w=m,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this.w=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setW(a){return this.w=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;case 3:this.w=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w!==void 0?a.w:1,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this.z=a.z+h.z,this.w=a.w+h.w,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this.z+=a.z*h,this.w+=a.w*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this.z=a.z-h.z,this.w=a.w-h.w,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this.w*=a.w,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this.w*=a,this}applyMatrix4(a){let h=this.x,p=this.y,m=this.z,g=this.w,_=a.elements;return this.x=_[0]*h+_[4]*p+_[8]*m+_[12]*g,this.y=_[1]*h+_[5]*p+_[9]*m+_[13]*g,this.z=_[2]*h+_[6]*p+_[10]*m+_[14]*g,this.w=_[3]*h+_[7]*p+_[11]*m+_[15]*g,this}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this.w/=a.w,this}divideScalar(a){return this.multiplyScalar(1/a)}setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);let h=Math.sqrt(1-a.w*a.w);if(h<0.0001)this.x=1,this.y=0,this.z=0;else this.x=a.x/h,this.y=a.y/h,this.z=a.z/h;return this}setAxisAngleFromRotationMatrix(a){let h,p,m,g,_=0.01,y=0.1,x=a.elements,M=x[0],S=x[4],E=x[8],v=x[1],b=x[5],A=x[9],C=x[2],P=x[6],T=x[10];if(Math.abs(S-v)<0.01&&Math.abs(E-C)<0.01&&Math.abs(A-P)<0.01){if(Math.abs(S+v)<0.1&&Math.abs(E+C)<0.1&&Math.abs(A+P)<0.1&&Math.abs(M+b+T-3)<0.1)return this.set(1,0,0,0),this;h=Math.PI;let G=(M+1)/2,N=(b+1)/2,H=(T+1)/2,rt=(S+v)/4,V=(E+C)/4,q=(A+P)/4;if(G>N&&G>H)if(G<0.01)p=0,m=0.707106781,g=0.707106781;else p=Math.sqrt(G),m=rt/p,g=V/p;else if(N>H)if(N<0.01)p=0.707106781,m=0,g=0.707106781;else m=Math.sqrt(N),p=rt/m,g=q/m;else if(H<0.01)p=0.707106781,m=0.707106781,g=0;else g=Math.sqrt(H),p=V/g,m=q/g;return this.set(p,m,g,h),this}let w=Math.sqrt((P-A)*(P-A)+(E-C)*(E-C)+(v-S)*(v-S));if(Math.abs(w)<0.001)w=1;return this.x=(P-A)/w,this.y=(E-C)/w,this.z=(v-S)/w,this.w=Math.acos((M+b+T-1)/2),this}setFromMatrixPosition(a){let h=a.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this.w=h[15],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this.z=Math.max(a.z,Math.min(h.z,this.z)),this.w=Math.max(a.w,Math.min(h.w,this.w)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this.z=Math.max(a,Math.min(h,this.z)),this.w=Math.max(a,Math.min(h,this.w)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this.z+=(a.z-this.z)*h,this.w+=(a.w-this.w)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this.z=a.z+(h.z-a.z)*p,this.w=a.w+(h.w-a.w)*p,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this.z=a[h+2],this.w=a[h+3],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a[h+2]=this.z,a[h+3]=this.w,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this.z=a.getZ(h),this.w=a.getW(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fo extends Wn{constructor(a=1,h=1,p={}){super();this.isRenderTarget=!0,this.width=a,this.height=h,this.depth=1,this.scissor=new Me(0,0,a,h),this.scissorTest=!1,this.viewport=new Me(0,0,a,h);let m={width:a,height:h,depth:1};p=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},p);let g=new Xe(m,p.mapping,p.wrapS,p.wrapT,p.magFilter,p.minFilter,p.format,p.type,p.anisotropy,p.colorSpace);g.flipY=!1,g.generateMipmaps=p.generateMipmaps,g.internalFormat=p.internalFormat,this.textures=[];let _=p.count;for(let y=0;y<_;y++)this.textures[y]=g.clone(),this.textures[y].isRenderTargetTexture=!0;this.depthBuffer=p.depthBuffer,this.stencilBuffer=p.stencilBuffer,this.resolveDepthBuffer=p.resolveDepthBuffer,this.resolveStencilBuffer=p.resolveStencilBuffer,this.depthTexture=p.depthTexture,this.samples=p.samples}get texture(){return this.textures[0]}set texture(a){this.textures[0]=a}setSize(a,h,p=1){if(this.width!==a||this.height!==h||this.depth!==p){this.width=a,this.height=h,this.depth=p;for(let m=0,g=this.textures.length;m<g;m++)this.textures[m].image.width=a,this.textures[m].image.height=h,this.textures[m].image.depth=p;this.dispose()}this.viewport.set(0,0,a,h),this.scissor.set(0,0,a,h)}clone(){return new this.constructor().copy(this)}copy(a){this.width=a.width,this.height=a.height,this.depth=a.depth,this.scissor.copy(a.scissor),this.scissorTest=a.scissorTest,this.viewport.copy(a.viewport),this.textures.length=0;for(let p=0,m=a.textures.length;p<m;p++)this.textures[p]=a.textures[p].clone(),this.textures[p].isRenderTargetTexture=!0;let h=Object.assign({},a.texture.image);if(this.texture.source=new Vr(h),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,a.depthTexture!==null)this.depthTexture=a.depthTexture.clone();return this.samples=a.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Fo{constructor(a=1,h=1,p={}){super(a,h,p);this.isWebGLRenderTarget=!0}}class Xr extends Xe{constructor(a=null,h=1,p=1,m=1){super(null);this.isDataArrayTexture=!0,this.image={data:a,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(a){this.layerUpdates.add(a)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oo extends Xe{constructor(a=null,h=1,p=1,m=1){super(null);this.isData3DTexture=!0,this.image={data:a,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(a=0,h=0,p=0,m=1){this.isQuaternion=!0,this._x=a,this._y=h,this._z=p,this._w=m}static slerpFlat(a,h,p,m,g,_,y){let x=p[m+0],M=p[m+1],S=p[m+2],E=p[m+3],v=g[_+0],b=g[_+1],A=g[_+2],C=g[_+3];if(y===0){a[h+0]=x,a[h+1]=M,a[h+2]=S,a[h+3]=E;return}if(y===1){a[h+0]=v,a[h+1]=b,a[h+2]=A,a[h+3]=C;return}if(E!==C||x!==v||M!==b||S!==A){let P=1-y,T=x*v+M*b+S*A+E*C,w=T>=0?1:-1,G=1-T*T;if(G>Number.EPSILON){let H=Math.sqrt(G),rt=Math.atan2(H,T*w);P=Math.sin(P*rt)/H,y=Math.sin(y*rt)/H}let N=y*w;if(x=x*P+v*N,M=M*P+b*N,S=S*P+A*N,E=E*P+C*N,P===1-y){let H=1/Math.sqrt(x*x+M*M+S*S+E*E);x*=H,M*=H,S*=H,E*=H}}a[h]=x,a[h+1]=M,a[h+2]=S,a[h+3]=E}static multiplyQuaternionsFlat(a,h,p,m,g,_){let y=p[m],x=p[m+1],M=p[m+2],S=p[m+3],E=g[_],v=g[_+1],b=g[_+2],A=g[_+3];return a[h]=y*A+S*E+x*b-M*v,a[h+1]=x*A+S*v+M*E-y*b,a[h+2]=M*A+S*b+y*v-x*E,a[h+3]=S*A-y*E-x*v-M*b,a}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get w(){return this._w}set w(a){this._w=a,this._onChangeCallback()}set(a,h,p,m){return this._x=a,this._y=h,this._z=p,this._w=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this._onChangeCallback(),this}setFromEuler(a,h=!0){let{_x:p,_y:m,_z:g,_order:_}=a,{cos:y,sin:x}=Math,M=y(p/2),S=y(m/2),E=y(g/2),v=x(p/2),b=x(m/2),A=x(g/2);switch(_){case"XYZ":this._x=v*S*E+M*b*A,this._y=M*b*E-v*S*A,this._z=M*S*A+v*b*E,this._w=M*S*E-v*b*A;break;case"YXZ":this._x=v*S*E+M*b*A,this._y=M*b*E-v*S*A,this._z=M*S*A-v*b*E,this._w=M*S*E+v*b*A;break;case"ZXY":this._x=v*S*E-M*b*A,this._y=M*b*E+v*S*A,this._z=M*S*A+v*b*E,this._w=M*S*E-v*b*A;break;case"ZYX":this._x=v*S*E-M*b*A,this._y=M*b*E+v*S*A,this._z=M*S*A-v*b*E,this._w=M*S*E+v*b*A;break;case"YZX":this._x=v*S*E+M*b*A,this._y=M*b*E+v*S*A,this._z=M*S*A-v*b*E,this._w=M*S*E-v*b*A;break;case"XZY":this._x=v*S*E-M*b*A,this._y=M*b*E-v*S*A,this._z=M*S*A+v*b*E,this._w=M*S*E+v*b*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+_)}if(h===!0)this._onChangeCallback();return this}setFromAxisAngle(a,h){let p=h/2,m=Math.sin(p);return this._x=a.x*m,this._y=a.y*m,this._z=a.z*m,this._w=Math.cos(p),this._onChangeCallback(),this}setFromRotationMatrix(a){let h=a.elements,p=h[0],m=h[4],g=h[8],_=h[1],y=h[5],x=h[9],M=h[2],S=h[6],E=h[10],v=p+y+E;if(v>0){let b=0.5/Math.sqrt(v+1);this._w=0.25/b,this._x=(S-x)*b,this._y=(g-M)*b,this._z=(_-m)*b}else if(p>y&&p>E){let b=2*Math.sqrt(1+p-y-E);this._w=(S-x)/b,this._x=0.25*b,this._y=(m+_)/b,this._z=(g+M)/b}else if(y>E){let b=2*Math.sqrt(1+y-p-E);this._w=(g-M)/b,this._x=(m+_)/b,this._y=0.25*b,this._z=(x+S)/b}else{let b=2*Math.sqrt(1+E-p-y);this._w=(_-m)/b,this._x=(g+M)/b,this._y=(x+S)/b,this._z=0.25*b}return this._onChangeCallback(),this}setFromUnitVectors(a,h){let p=a.dot(h)+1;if(p<Number.EPSILON)if(p=0,Math.abs(a.x)>Math.abs(a.z))this._x=-a.y,this._y=a.x,this._z=0,this._w=p;else this._x=0,this._y=-a.z,this._z=a.y,this._w=p;else this._x=a.y*h.z-a.z*h.y,this._y=a.z*h.x-a.x*h.z,this._z=a.x*h.y-a.y*h.x,this._w=p;return this.normalize()}angleTo(a){return 2*Math.acos(Math.abs(Le(this.dot(a),-1,1)))}rotateTowards(a,h){let p=this.angleTo(a);if(p===0)return this;let m=Math.min(1,h/p);return this.slerp(a,m),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let a=this.length();if(a===0)this._x=0,this._y=0,this._z=0,this._w=1;else a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a;return this._onChangeCallback(),this}multiply(a){return this.multiplyQuaternions(this,a)}premultiply(a){return this.multiplyQuaternions(a,this)}multiplyQuaternions(a,h){let{_x:p,_y:m,_z:g,_w:_}=a,{_x:y,_y:x,_z:M,_w:S}=h;return this._x=p*S+_*y+m*M-g*x,this._y=m*S+_*x+g*y-p*M,this._z=g*S+_*M+p*x-m*y,this._w=_*S-p*y-m*x-g*M,this._onChangeCallback(),this}slerp(a,h){if(h===0)return this;if(h===1)return this.copy(a);let p=this._x,m=this._y,g=this._z,_=this._w,y=_*a._w+p*a._x+m*a._y+g*a._z;if(y<0)this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,y=-y;else this.copy(a);if(y>=1)return this._w=_,this._x=p,this._y=m,this._z=g,this;let x=1-y*y;if(x<=Number.EPSILON){let b=1-h;return this._w=b*_+h*this._w,this._x=b*p+h*this._x,this._y=b*m+h*this._y,this._z=b*g+h*this._z,this.normalize(),this}let M=Math.sqrt(x),S=Math.atan2(M,y),E=Math.sin((1-h)*S)/M,v=Math.sin(h*S)/M;return this._w=_*E+this._w*v,this._x=p*E+this._x*v,this._y=m*E+this._y*v,this._z=g*E+this._z*v,this._onChangeCallback(),this}slerpQuaternions(a,h,p){return this.copy(a).slerp(h,p)}random(){let a=2*Math.PI*Math.random(),h=2*Math.PI*Math.random(),p=Math.random(),m=Math.sqrt(1-p),g=Math.sqrt(p);return this.set(m*Math.sin(a),m*Math.cos(a),g*Math.sin(h),g*Math.cos(h))}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w}fromArray(a,h=0){return this._x=a[h],this._y=a[h+1],this._z=a[h+2],this._w=a[h+3],this._onChangeCallback(),this}toArray(a=[],h=0){return a[h]=this._x,a[h+1]=this._y,a[h+2]=this._z,a[h+3]=this._w,a}fromBufferAttribute(a,h){return this._x=a.getX(h),this._y=a.getY(h),this._z=a.getZ(h),this._w=a.getW(h),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(a=0,h=0,p=0){X.prototype.isVector3=!0,this.x=a,this.y=h,this.z=p}set(a,h,p){if(p===void 0)p=this.z;return this.x=a,this.y=h,this.z=p,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this.z=a.z+h.z,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this.z+=a.z*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this.z=a.z-h.z,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this}multiplyVectors(a,h){return this.x=a.x*h.x,this.y=a.y*h.y,this.z=a.z*h.z,this}applyEuler(a){return this.applyQuaternion(Da.setFromEuler(a))}applyAxisAngle(a,h){return this.applyQuaternion(Da.setFromAxisAngle(a,h))}applyMatrix3(a){let h=this.x,p=this.y,m=this.z,g=a.elements;return this.x=g[0]*h+g[3]*p+g[6]*m,this.y=g[1]*h+g[4]*p+g[7]*m,this.z=g[2]*h+g[5]*p+g[8]*m,this}applyNormalMatrix(a){return this.applyMatrix3(a).normalize()}applyMatrix4(a){let h=this.x,p=this.y,m=this.z,g=a.elements,_=1/(g[3]*h+g[7]*p+g[11]*m+g[15]);return this.x=(g[0]*h+g[4]*p+g[8]*m+g[12])*_,this.y=(g[1]*h+g[5]*p+g[9]*m+g[13])*_,this.z=(g[2]*h+g[6]*p+g[10]*m+g[14])*_,this}applyQuaternion(a){let h=this.x,p=this.y,m=this.z,{x:g,y:_,z:y,w:x}=a,M=2*(_*m-y*p),S=2*(y*h-g*m),E=2*(g*p-_*h);return this.x=h+x*M+_*E-y*S,this.y=p+x*S+y*M-g*E,this.z=m+x*E+g*S-_*M,this}project(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)}unproject(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)}transformDirection(a){let h=this.x,p=this.y,m=this.z,g=a.elements;return this.x=g[0]*h+g[4]*p+g[8]*m,this.y=g[1]*h+g[5]*p+g[9]*m,this.z=g[2]*h+g[6]*p+g[10]*m,this.normalize()}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this}divideScalar(a){return this.multiplyScalar(1/a)}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this.z=Math.max(a.z,Math.min(h.z,this.z)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this.z=Math.max(a,Math.min(h,this.z)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this.z+=(a.z-this.z)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this.z=a.z+(h.z-a.z)*p,this}cross(a){return this.crossVectors(this,a)}crossVectors(a,h){let{x:p,y:m,z:g}=a,{x:_,y,z:x}=h;return this.x=m*x-g*y,this.y=g*_-p*x,this.z=p*y-m*_,this}projectOnVector(a){let h=a.lengthSq();if(h===0)return this.set(0,0,0);let p=a.dot(this)/h;return this.copy(a).multiplyScalar(p)}projectOnPlane(a){return rr.copy(this).projectOnVector(a),this.sub(rr)}reflect(a){return this.sub(rr.copy(a).multiplyScalar(2*this.dot(a)))}angleTo(a){let h=Math.sqrt(this.lengthSq()*a.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(a)/h;return Math.acos(Le(p,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){let h=this.x-a.x,p=this.y-a.y,m=this.z-a.z;return h*h+p*p+m*m}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)}setFromSpherical(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)}setFromSphericalCoords(a,h,p){let m=Math.sin(h)*a;return this.x=m*Math.sin(p),this.y=Math.cos(h)*a,this.z=m*Math.cos(p),this}setFromCylindrical(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)}setFromCylindricalCoords(a,h,p){return this.x=a*Math.sin(h),this.y=p,this.z=a*Math.cos(h),this}setFromMatrixPosition(a){let h=a.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this}setFromMatrixScale(a){let h=this.setFromMatrixColumn(a,0).length(),p=this.setFromMatrixColumn(a,1).length(),m=this.setFromMatrixColumn(a,2).length();return this.x=h,this.y=p,this.z=m,this}setFromMatrixColumn(a,h){return this.fromArray(a.elements,h*4)}setFromMatrix3Column(a,h){return this.fromArray(a.elements,h*3)}setFromEuler(a){return this.x=a._x,this.y=a._y,this.z=a._z,this}setFromColor(a){return this.x=a.r,this.y=a.g,this.z=a.b,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this.z=a[h+2],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a[h+2]=this.z,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this.z=a.getZ(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let a=Math.random()*Math.PI*2,h=Math.random()*2-1,p=Math.sqrt(1-h*h);return this.x=p*Math.cos(a),this.y=h,this.z=p*Math.sin(a),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var rr=new X,Da=new Mn;class Vn{constructor(a=new X(1/0,1/0,1/0),h=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=a,this.max=h}set(a,h){return this.min.copy(a),this.max.copy(h),this}setFromArray(a){this.makeEmpty();for(let h=0,p=a.length;h<p;h+=3)this.expandByPoint(ln.fromArray(a,h));return this}setFromBufferAttribute(a){this.makeEmpty();for(let h=0,p=a.count;h<p;h++)this.expandByPoint(ln.fromBufferAttribute(a,h));return this}setFromPoints(a){this.makeEmpty();for(let h=0,p=a.length;h<p;h++)this.expandByPoint(a[h]);return this}setFromCenterAndSize(a,h){let p=ln.copy(h).multiplyScalar(0.5);return this.min.copy(a).sub(p),this.max.copy(a).add(p),this}setFromObject(a,h=!1){return this.makeEmpty(),this.expandByObject(a,h)}clone(){return new this.constructor().copy(this)}copy(a){return this.min.copy(a.min),this.max.copy(a.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(a){return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(a){return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)}expandByPoint(a){return this.min.min(a),this.max.max(a),this}expandByVector(a){return this.min.sub(a),this.max.add(a),this}expandByScalar(a){return this.min.addScalar(-a),this.max.addScalar(a),this}expandByObject(a,h=!1){a.updateWorldMatrix(!1,!1);let p=a.geometry;if(p!==void 0){let g=p.getAttribute("position");if(h===!0&&g!==void 0&&a.isInstancedMesh!==!0)for(let _=0,y=g.count;_<y;_++){if(a.isMesh===!0)a.getVertexPosition(_,ln);else ln.fromBufferAttribute(g,_);ln.applyMatrix4(a.matrixWorld),this.expandByPoint(ln)}else{if(a.boundingBox!==void 0){if(a.boundingBox===null)a.computeBoundingBox();ls.copy(a.boundingBox)}else{if(p.boundingBox===null)p.computeBoundingBox();ls.copy(p.boundingBox)}ls.applyMatrix4(a.matrixWorld),this.union(ls)}}let m=a.children;for(let g=0,_=m.length;g<_;g++)this.expandByObject(m[g],h);return this}containsPoint(a){return a.x>=this.min.x&&a.x<=this.max.x&&a.y>=this.min.y&&a.y<=this.max.y&&a.z>=this.min.z&&a.z<=this.max.z}containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z}getParameter(a,h){return h.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(a){return a.max.x>=this.min.x&&a.min.x<=this.max.x&&a.max.y>=this.min.y&&a.min.y<=this.max.y&&a.max.z>=this.min.z&&a.min.z<=this.max.z}intersectsSphere(a){return this.clampPoint(a.center,ln),ln.distanceToSquared(a.center)<=a.radius*a.radius}intersectsPlane(a){let h,p;if(a.normal.x>0)h=a.normal.x*this.min.x,p=a.normal.x*this.max.x;else h=a.normal.x*this.max.x,p=a.normal.x*this.min.x;if(a.normal.y>0)h+=a.normal.y*this.min.y,p+=a.normal.y*this.max.y;else h+=a.normal.y*this.max.y,p+=a.normal.y*this.min.y;if(a.normal.z>0)h+=a.normal.z*this.min.z,p+=a.normal.z*this.max.z;else h+=a.normal.z*this.max.z,p+=a.normal.z*this.min.z;return h<=-a.constant&&p>=-a.constant}intersectsTriangle(a){if(this.isEmpty())return!1;this.getCenter(Fi),cs.subVectors(this.max,Fi),oi.subVectors(a.a,Fi),li.subVectors(a.b,Fi),ci.subVectors(a.c,Fi),Nn.subVectors(li,oi),Fn.subVectors(ci,li),Zn.subVectors(oi,ci);let h=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Zn.y,Zn.x,0];if(!ar(h,oi,li,ci,cs))return!1;if(h=[1,0,0,0,1,0,0,0,1],!ar(h,oi,li,ci,cs))return!1;return hs.crossVectors(Nn,Fn),h=[hs.x,hs.y,hs.z],ar(h,oi,li,ci,cs)}clampPoint(a,h){return h.copy(a).clamp(this.min,this.max)}distanceToPoint(a){return this.clampPoint(a,ln).distanceTo(a)}getBoundingSphere(a){if(this.isEmpty())a.makeEmpty();else this.getCenter(a.center),a.radius=this.getSize(ln).length()*0.5;return a}intersect(a){if(this.min.max(a.min),this.max.min(a.max),this.isEmpty())this.makeEmpty();return this}union(a){return this.min.min(a.min),this.max.max(a.max),this}applyMatrix4(a){if(this.isEmpty())return this;return Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a),this.setFromPoints(Tn),this}translate(a){return this.min.add(a),this.max.add(a),this}equals(a){return a.min.equals(this.min)&&a.max.equals(this.max)}}var Tn=[new X,new X,new X,new X,new X,new X,new X,new X],ln=new X,ls=new Vn,oi=new X,li=new X,ci=new X,Nn=new X,Fn=new X,Zn=new X,Fi=new X,cs=new X,hs=new X,Jn=new X;function ar(a,h,p,m,g){for(let _=0,y=a.length-3;_<=y;_+=3){Jn.fromArray(a,_);let x=g.x*Math.abs(Jn.x)+g.y*Math.abs(Jn.y)+g.z*Math.abs(Jn.z),M=h.dot(Jn),S=p.dot(Jn),E=m.dot(Jn);if(Math.max(-Math.max(M,S,E),Math.min(M,S,E))>x)return!1}return!0}var Ql=new Vn,Oi=new X,or=new X;class ts{constructor(a=new X,h=-1){this.isSphere=!0,this.center=a,this.radius=h}set(a,h){return this.center.copy(a),this.radius=h,this}setFromPoints(a,h){let p=this.center;if(h!==void 0)p.copy(h);else Ql.setFromPoints(a).getCenter(p);let m=0;for(let g=0,_=a.length;g<_;g++)m=Math.max(m,p.distanceToSquared(a[g]));return this.radius=Math.sqrt(m),this}copy(a){return this.center.copy(a.center),this.radius=a.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(a){return a.distanceTo(this.center)-this.radius}intersectsSphere(a){let h=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=h*h}intersectsBox(a){return a.intersectsSphere(this)}intersectsPlane(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius}clampPoint(a,h){let p=this.center.distanceToSquared(a);if(h.copy(a),p>this.radius*this.radius)h.sub(this.center).normalize(),h.multiplyScalar(this.radius).add(this.center);return h}getBoundingBox(a){if(this.isEmpty())return a.makeEmpty(),a;return a.set(this.center,this.center),a.expandByScalar(this.radius),a}applyMatrix4(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this}translate(a){return this.center.add(a),this}expandByPoint(a){if(this.isEmpty())return this.center.copy(a),this.radius=0,this;Oi.subVectors(a,this.center);let h=Oi.lengthSq();if(h>this.radius*this.radius){let p=Math.sqrt(h),m=(p-this.radius)*0.5;this.center.addScaledVector(Oi,m/p),this.radius+=m}return this}union(a){if(a.isEmpty())return this;if(this.isEmpty())return this.copy(a),this;if(this.center.equals(a.center)===!0)this.radius=Math.max(this.radius,a.radius);else or.subVectors(a.center,this.center).setLength(a.radius),this.expandByPoint(Oi.copy(a.center).add(or)),this.expandByPoint(Oi.copy(a.center).sub(or));return this}equals(a){return a.center.equals(this.center)&&a.radius===this.radius}clone(){return new this.constructor().copy(this)}}var wn=new X,lr=new X,us=new X,On=new X,cr=new X,ds=new X,hr=new X;class Ti{constructor(a=new X,h=new X(0,0,-1)){this.origin=a,this.direction=h}set(a,h){return this.origin.copy(a),this.direction.copy(h),this}copy(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this}at(a,h){return h.copy(this.origin).addScaledVector(this.direction,a)}lookAt(a){return this.direction.copy(a).sub(this.origin).normalize(),this}recast(a){return this.origin.copy(this.at(a,wn)),this}closestPointToPoint(a,h){h.subVectors(a,this.origin);let p=h.dot(this.direction);if(p<0)return h.copy(this.origin);return h.copy(this.origin).addScaledVector(this.direction,p)}distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a))}distanceSqToPoint(a){let h=wn.subVectors(a,this.origin).dot(this.direction);if(h<0)return this.origin.distanceToSquared(a);return wn.copy(this.origin).addScaledVector(this.direction,h),wn.distanceToSquared(a)}distanceSqToSegment(a,h,p,m){lr.copy(a).add(h).multiplyScalar(0.5),us.copy(h).sub(a).normalize(),On.copy(this.origin).sub(lr);let g=a.distanceTo(h)*0.5,_=-this.direction.dot(us),y=On.dot(this.direction),x=-On.dot(us),M=On.lengthSq(),S=Math.abs(1-_*_),E,v,b,A;if(S>0)if(E=_*x-y,v=_*y-x,A=g*S,E>=0)if(v>=-A)if(v<=A){let C=1/S;E*=C,v*=C,b=E*(E+_*v+2*y)+v*(_*E+v+2*x)+M}else v=g,E=Math.max(0,-(_*v+y)),b=-E*E+v*(v+2*x)+M;else v=-g,E=Math.max(0,-(_*v+y)),b=-E*E+v*(v+2*x)+M;else if(v<=-A)E=Math.max(0,-(-_*g+y)),v=E>0?-g:Math.min(Math.max(-g,-x),g),b=-E*E+v*(v+2*x)+M;else if(v<=A)E=0,v=Math.min(Math.max(-g,-x),g),b=v*(v+2*x)+M;else E=Math.max(0,-(_*g+y)),v=E>0?g:Math.min(Math.max(-g,-x),g),b=-E*E+v*(v+2*x)+M;else v=_>0?-g:g,E=Math.max(0,-(_*v+y)),b=-E*E+v*(v+2*x)+M;if(p)p.copy(this.origin).addScaledVector(this.direction,E);if(m)m.copy(lr).addScaledVector(us,v);return b}intersectSphere(a,h){wn.subVectors(a.center,this.origin);let p=wn.dot(this.direction),m=wn.dot(wn)-p*p,g=a.radius*a.radius;if(m>g)return null;let _=Math.sqrt(g-m),y=p-_,x=p+_;if(x<0)return null;if(y<0)return this.at(x,h);return this.at(y,h)}intersectsSphere(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius}distanceToPlane(a){let h=a.normal.dot(this.direction);if(h===0){if(a.distanceToPoint(this.origin)===0)return 0;return null}let p=-(this.origin.dot(a.normal)+a.constant)/h;return p>=0?p:null}intersectPlane(a,h){let p=this.distanceToPlane(a);if(p===null)return null;return this.at(p,h)}intersectsPlane(a){let h=a.distanceToPoint(this.origin);if(h===0)return!0;if(a.normal.dot(this.direction)*h<0)return!0;return!1}intersectBox(a,h){let p,m,g,_,y,x,M=1/this.direction.x,S=1/this.direction.y,E=1/this.direction.z,v=this.origin;if(M>=0)p=(a.min.x-v.x)*M,m=(a.max.x-v.x)*M;else p=(a.max.x-v.x)*M,m=(a.min.x-v.x)*M;if(S>=0)g=(a.min.y-v.y)*S,_=(a.max.y-v.y)*S;else g=(a.max.y-v.y)*S,_=(a.min.y-v.y)*S;if(p>_||g>m)return null;if(g>p||isNaN(p))p=g;if(_<m||isNaN(m))m=_;if(E>=0)y=(a.min.z-v.z)*E,x=(a.max.z-v.z)*E;else y=(a.max.z-v.z)*E,x=(a.min.z-v.z)*E;if(p>x||y>m)return null;if(y>p||p!==p)p=y;if(x<m||m!==m)m=x;if(m<0)return null;return this.at(p>=0?p:m,h)}intersectsBox(a){return this.intersectBox(a,wn)!==null}intersectTriangle(a,h,p,m,g){cr.subVectors(h,a),ds.subVectors(p,a),hr.crossVectors(cr,ds);let _=this.direction.dot(hr),y;if(_>0){if(m)return null;y=1}else if(_<0)y=-1,_=-_;else return null;On.subVectors(this.origin,a);let x=y*this.direction.dot(ds.crossVectors(On,ds));if(x<0)return null;let M=y*this.direction.dot(cr.cross(On));if(M<0)return null;if(x+M>_)return null;let S=-y*On.dot(hr);if(S<0)return null;return this.at(S/_,g)}applyMatrix4(a){return this.origin.applyMatrix4(a),this.direction.transformDirection(a),this}equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(a,h,p,m,g,_,y,x,M,S,E,v,b,A,C,P){if(Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],a!==void 0)this.set(a,h,p,m,g,_,y,x,M,S,E,v,b,A,C,P)}set(a,h,p,m,g,_,y,x,M,S,E,v,b,A,C,P){let T=this.elements;return T[0]=a,T[4]=h,T[8]=p,T[12]=m,T[1]=g,T[5]=_,T[9]=y,T[13]=x,T[2]=M,T[6]=S,T[10]=E,T[14]=v,T[3]=b,T[7]=A,T[11]=C,T[15]=P,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(a){let h=this.elements,p=a.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],h[9]=p[9],h[10]=p[10],h[11]=p[11],h[12]=p[12],h[13]=p[13],h[14]=p[14],h[15]=p[15],this}copyPosition(a){let h=this.elements,p=a.elements;return h[12]=p[12],h[13]=p[13],h[14]=p[14],this}setFromMatrix3(a){let h=a.elements;return this.set(h[0],h[3],h[6],0,h[1],h[4],h[7],0,h[2],h[5],h[8],0,0,0,0,1),this}extractBasis(a,h,p){return a.setFromMatrixColumn(this,0),h.setFromMatrixColumn(this,1),p.setFromMatrixColumn(this,2),this}makeBasis(a,h,p){return this.set(a.x,h.x,p.x,0,a.y,h.y,p.y,0,a.z,h.z,p.z,0,0,0,0,1),this}extractRotation(a){let h=this.elements,p=a.elements,m=1/hi.setFromMatrixColumn(a,0).length(),g=1/hi.setFromMatrixColumn(a,1).length(),_=1/hi.setFromMatrixColumn(a,2).length();return h[0]=p[0]*m,h[1]=p[1]*m,h[2]=p[2]*m,h[3]=0,h[4]=p[4]*g,h[5]=p[5]*g,h[6]=p[6]*g,h[7]=0,h[8]=p[8]*_,h[9]=p[9]*_,h[10]=p[10]*_,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromEuler(a){let h=this.elements,{x:p,y:m,z:g}=a,_=Math.cos(p),y=Math.sin(p),x=Math.cos(m),M=Math.sin(m),S=Math.cos(g),E=Math.sin(g);if(a.order==="XYZ"){let v=_*S,b=_*E,A=y*S,C=y*E;h[0]=x*S,h[4]=-x*E,h[8]=M,h[1]=b+A*M,h[5]=v-C*M,h[9]=-y*x,h[2]=C-v*M,h[6]=A+b*M,h[10]=_*x}else if(a.order==="YXZ"){let v=x*S,b=x*E,A=M*S,C=M*E;h[0]=v+C*y,h[4]=A*y-b,h[8]=_*M,h[1]=_*E,h[5]=_*S,h[9]=-y,h[2]=b*y-A,h[6]=C+v*y,h[10]=_*x}else if(a.order==="ZXY"){let v=x*S,b=x*E,A=M*S,C=M*E;h[0]=v-C*y,h[4]=-_*E,h[8]=A+b*y,h[1]=b+A*y,h[5]=_*S,h[9]=C-v*y,h[2]=-_*M,h[6]=y,h[10]=_*x}else if(a.order==="ZYX"){let v=_*S,b=_*E,A=y*S,C=y*E;h[0]=x*S,h[4]=A*M-b,h[8]=v*M+C,h[1]=x*E,h[5]=C*M+v,h[9]=b*M-A,h[2]=-M,h[6]=y*x,h[10]=_*x}else if(a.order==="YZX"){let v=_*x,b=_*M,A=y*x,C=y*M;h[0]=x*S,h[4]=C-v*E,h[8]=A*E+b,h[1]=E,h[5]=_*S,h[9]=-y*S,h[2]=-M*S,h[6]=b*E+A,h[10]=v-C*E}else if(a.order==="XZY"){let v=_*x,b=_*M,A=y*x,C=y*M;h[0]=x*S,h[4]=-E,h[8]=M*S,h[1]=v*E+C,h[5]=_*S,h[9]=b*E-A,h[2]=A*E-b,h[6]=y*S,h[10]=C*E+v}return h[3]=0,h[7]=0,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromQuaternion(a){return this.compose(tc,a,ec)}lookAt(a,h,p){let m=this.elements;if(Ke.subVectors(a,h),Ke.lengthSq()===0)Ke.z=1;if(Ke.normalize(),Bn.crossVectors(p,Ke),Bn.lengthSq()===0){if(Math.abs(p.z)===1)Ke.x+=0.0001;else Ke.z+=0.0001;Ke.normalize(),Bn.crossVectors(p,Ke)}return Bn.normalize(),fs.crossVectors(Ke,Bn),m[0]=Bn.x,m[4]=fs.x,m[8]=Ke.x,m[1]=Bn.y,m[5]=fs.y,m[9]=Ke.y,m[2]=Bn.z,m[6]=fs.z,m[10]=Ke.z,this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,h){let p=a.elements,m=h.elements,g=this.elements,_=p[0],y=p[4],x=p[8],M=p[12],S=p[1],E=p[5],v=p[9],b=p[13],A=p[2],C=p[6],P=p[10],T=p[14],w=p[3],G=p[7],N=p[11],H=p[15],rt=m[0],V=m[4],q=m[8],ct=m[12],O=m[1],B=m[5],j=m[9],at=m[13],ot=m[2],ht=m[6],ft=m[10],Z=m[14],st=m[3],Y=m[7],Ct=m[11],U=m[15];return g[0]=_*rt+y*O+x*ot+M*st,g[4]=_*V+y*B+x*ht+M*Y,g[8]=_*q+y*j+x*ft+M*Ct,g[12]=_*ct+y*at+x*Z+M*U,g[1]=S*rt+E*O+v*ot+b*st,g[5]=S*V+E*B+v*ht+b*Y,g[9]=S*q+E*j+v*ft+b*Ct,g[13]=S*ct+E*at+v*Z+b*U,g[2]=A*rt+C*O+P*ot+T*st,g[6]=A*V+C*B+P*ht+T*Y,g[10]=A*q+C*j+P*ft+T*Ct,g[14]=A*ct+C*at+P*Z+T*U,g[3]=w*rt+G*O+N*ot+H*st,g[7]=w*V+G*B+N*ht+H*Y,g[11]=w*q+G*j+N*ft+H*Ct,g[15]=w*ct+G*at+N*Z+H*U,this}multiplyScalar(a){let h=this.elements;return h[0]*=a,h[4]*=a,h[8]*=a,h[12]*=a,h[1]*=a,h[5]*=a,h[9]*=a,h[13]*=a,h[2]*=a,h[6]*=a,h[10]*=a,h[14]*=a,h[3]*=a,h[7]*=a,h[11]*=a,h[15]*=a,this}determinant(){let a=this.elements,h=a[0],p=a[4],m=a[8],g=a[12],_=a[1],y=a[5],x=a[9],M=a[13],S=a[2],E=a[6],v=a[10],b=a[14],A=a[3],C=a[7],P=a[11],T=a[15];return A*(+g*x*E-m*M*E-g*y*v+p*M*v+m*y*b-p*x*b)+C*(+h*x*b-h*M*v+g*_*v-m*_*b+m*M*S-g*x*S)+P*(+h*M*E-h*y*b-g*_*E+p*_*b+g*y*S-p*M*S)+T*(-m*y*S-h*x*E+h*y*v+m*_*E-p*_*v+p*x*S)}transpose(){let a=this.elements,h;return h=a[1],a[1]=a[4],a[4]=h,h=a[2],a[2]=a[8],a[8]=h,h=a[6],a[6]=a[9],a[9]=h,h=a[3],a[3]=a[12],a[12]=h,h=a[7],a[7]=a[13],a[13]=h,h=a[11],a[11]=a[14],a[14]=h,this}setPosition(a,h,p){let m=this.elements;if(a.isVector3)m[12]=a.x,m[13]=a.y,m[14]=a.z;else m[12]=a,m[13]=h,m[14]=p;return this}invert(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8],E=a[9],v=a[10],b=a[11],A=a[12],C=a[13],P=a[14],T=a[15],w=E*P*M-C*v*M+C*x*b-y*P*b-E*x*T+y*v*T,G=A*v*M-S*P*M-A*x*b+_*P*b+S*x*T-_*v*T,N=S*C*M-A*E*M+A*y*b-_*C*b-S*y*T+_*E*T,H=A*E*x-S*C*x-A*y*v+_*C*v+S*y*P-_*E*P,rt=h*w+p*G+m*N+g*H;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/rt;return a[0]=w*V,a[1]=(C*v*g-E*P*g-C*m*b+p*P*b+E*m*T-p*v*T)*V,a[2]=(y*P*g-C*x*g+C*m*M-p*P*M-y*m*T+p*x*T)*V,a[3]=(E*x*g-y*v*g-E*m*M+p*v*M+y*m*b-p*x*b)*V,a[4]=G*V,a[5]=(S*P*g-A*v*g+A*m*b-h*P*b-S*m*T+h*v*T)*V,a[6]=(A*x*g-_*P*g-A*m*M+h*P*M+_*m*T-h*x*T)*V,a[7]=(_*v*g-S*x*g+S*m*M-h*v*M-_*m*b+h*x*b)*V,a[8]=N*V,a[9]=(A*E*g-S*C*g-A*p*b+h*C*b+S*p*T-h*E*T)*V,a[10]=(_*C*g-A*y*g+A*p*M-h*C*M-_*p*T+h*y*T)*V,a[11]=(S*y*g-_*E*g-S*p*M+h*E*M+_*p*b-h*y*b)*V,a[12]=H*V,a[13]=(S*C*m-A*E*m+A*p*v-h*C*v-S*p*P+h*E*P)*V,a[14]=(A*y*m-_*C*m-A*p*x+h*C*x+_*p*P-h*y*P)*V,a[15]=(_*E*m-S*y*m+S*p*x-h*E*x-_*p*v+h*y*v)*V,this}scale(a){let h=this.elements,{x:p,y:m,z:g}=a;return h[0]*=p,h[4]*=m,h[8]*=g,h[1]*=p,h[5]*=m,h[9]*=g,h[2]*=p,h[6]*=m,h[10]*=g,h[3]*=p,h[7]*=m,h[11]*=g,this}getMaxScaleOnAxis(){let a=this.elements,h=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],p=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],m=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(h,p,m))}makeTranslation(a,h,p){if(a.isVector3)this.set(1,0,0,a.x,0,1,0,a.y,0,0,1,a.z,0,0,0,1);else this.set(1,0,0,a,0,1,0,h,0,0,1,p,0,0,0,1);return this}makeRotationX(a){let h=Math.cos(a),p=Math.sin(a);return this.set(1,0,0,0,0,h,-p,0,0,p,h,0,0,0,0,1),this}makeRotationY(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,0,p,0,0,1,0,0,-p,0,h,0,0,0,0,1),this}makeRotationZ(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,-p,0,0,p,h,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(a,h){let p=Math.cos(h),m=Math.sin(h),g=1-p,{x:_,y,z:x}=a,M=g*_,S=g*y;return this.set(M*_+p,M*y-m*x,M*x+m*y,0,M*y+m*x,S*y+p,S*x-m*_,0,M*x-m*y,S*x+m*_,g*x*x+p,0,0,0,0,1),this}makeScale(a,h,p){return this.set(a,0,0,0,0,h,0,0,0,0,p,0,0,0,0,1),this}makeShear(a,h,p,m,g,_){return this.set(1,p,g,0,a,1,_,0,h,m,1,0,0,0,0,1),this}compose(a,h,p){let m=this.elements,{_x:g,_y:_,_z:y,_w:x}=h,M=g+g,S=_+_,E=y+y,v=g*M,b=g*S,A=g*E,C=_*S,P=_*E,T=y*E,w=x*M,G=x*S,N=x*E,{x:H,y:rt,z:V}=p;return m[0]=(1-(C+T))*H,m[1]=(b+N)*H,m[2]=(A-G)*H,m[3]=0,m[4]=(b-N)*rt,m[5]=(1-(v+T))*rt,m[6]=(P+w)*rt,m[7]=0,m[8]=(A+G)*V,m[9]=(P-w)*V,m[10]=(1-(v+C))*V,m[11]=0,m[12]=a.x,m[13]=a.y,m[14]=a.z,m[15]=1,this}decompose(a,h,p){let m=this.elements,g=hi.set(m[0],m[1],m[2]).length(),_=hi.set(m[4],m[5],m[6]).length(),y=hi.set(m[8],m[9],m[10]).length();if(this.determinant()<0)g=-g;a.x=m[12],a.y=m[13],a.z=m[14],cn.copy(this);let M=1/g,S=1/_,E=1/y;return cn.elements[0]*=M,cn.elements[1]*=M,cn.elements[2]*=M,cn.elements[4]*=S,cn.elements[5]*=S,cn.elements[6]*=S,cn.elements[8]*=E,cn.elements[9]*=E,cn.elements[10]*=E,h.setFromRotationMatrix(cn),p.x=g,p.y=_,p.z=y,this}makePerspective(a,h,p,m,g,_,y=2000){let x=this.elements,M=2*g/(h-a),S=2*g/(p-m),E=(h+a)/(h-a),v=(p+m)/(p-m),b,A;if(y===2000)b=-(_+g)/(_-g),A=-2*_*g/(_-g);else if(y===2001)b=-_/(_-g),A=-_*g/(_-g);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+y);return x[0]=M,x[4]=0,x[8]=E,x[12]=0,x[1]=0,x[5]=S,x[9]=v,x[13]=0,x[2]=0,x[6]=0,x[10]=b,x[14]=A,x[3]=0,x[7]=0,x[11]=-1,x[15]=0,this}makeOrthographic(a,h,p,m,g,_,y=2000){let x=this.elements,M=1/(h-a),S=1/(p-m),E=1/(_-g),v=(h+a)*M,b=(p+m)*S,A,C;if(y===2000)A=(_+g)*E,C=-2*E;else if(y===2001)A=g*E,C=-1*E;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+y);return x[0]=2*M,x[4]=0,x[8]=0,x[12]=-v,x[1]=0,x[5]=2*S,x[9]=0,x[13]=-b,x[2]=0,x[6]=0,x[10]=C,x[14]=-A,x[3]=0,x[7]=0,x[11]=0,x[15]=1,this}equals(a){let h=this.elements,p=a.elements;for(let m=0;m<16;m++)if(h[m]!==p[m])return!1;return!0}fromArray(a,h=0){for(let p=0;p<16;p++)this.elements[p]=a[p+h];return this}toArray(a=[],h=0){let p=this.elements;return a[h]=p[0],a[h+1]=p[1],a[h+2]=p[2],a[h+3]=p[3],a[h+4]=p[4],a[h+5]=p[5],a[h+6]=p[6],a[h+7]=p[7],a[h+8]=p[8],a[h+9]=p[9],a[h+10]=p[10],a[h+11]=p[11],a[h+12]=p[12],a[h+13]=p[13],a[h+14]=p[14],a[h+15]=p[15],a}}var hi=new X,cn=new Ae,tc=new X(0,0,0),ec=new X(1,1,1),Bn=new X,fs=new X,Ke=new X,La=new Ae,Ua=new Mn;class yn{constructor(a=0,h=0,p=0,m=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=a,this._y=h,this._z=p,this._order=m}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get order(){return this._order}set order(a){this._order=a,this._onChangeCallback()}set(a,h,p,m=this._order){return this._x=a,this._y=h,this._z=p,this._order=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this._onChangeCallback(),this}setFromRotationMatrix(a,h=this._order,p=!0){let m=a.elements,g=m[0],_=m[4],y=m[8],x=m[1],M=m[5],S=m[9],E=m[2],v=m[6],b=m[10];switch(h){case"XYZ":if(this._y=Math.asin(Le(y,-1,1)),Math.abs(y)<0.9999999)this._x=Math.atan2(-S,b),this._z=Math.atan2(-_,g);else this._x=Math.atan2(v,M),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Le(S,-1,1)),Math.abs(S)<0.9999999)this._y=Math.atan2(y,b),this._z=Math.atan2(x,M);else this._y=Math.atan2(-E,g),this._z=0;break;case"ZXY":if(this._x=Math.asin(Le(v,-1,1)),Math.abs(v)<0.9999999)this._y=Math.atan2(-E,b),this._z=Math.atan2(-_,M);else this._y=0,this._z=Math.atan2(x,g);break;case"ZYX":if(this._y=Math.asin(-Le(E,-1,1)),Math.abs(E)<0.9999999)this._x=Math.atan2(v,b),this._z=Math.atan2(x,g);else this._x=0,this._z=Math.atan2(-_,M);break;case"YZX":if(this._z=Math.asin(Le(x,-1,1)),Math.abs(x)<0.9999999)this._x=Math.atan2(-S,M),this._y=Math.atan2(-E,g);else this._x=0,this._y=Math.atan2(y,b);break;case"XZY":if(this._z=Math.asin(-Le(_,-1,1)),Math.abs(_)<0.9999999)this._x=Math.atan2(v,M),this._y=Math.atan2(y,g);else this._x=Math.atan2(-S,b),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+h)}if(this._order=h,p===!0)this._onChangeCallback();return this}setFromQuaternion(a,h,p){return La.makeRotationFromQuaternion(a),this.setFromRotationMatrix(La,h,p)}setFromVector3(a,h=this._order){return this.set(a.x,a.y,a.z,h)}reorder(a){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,a)}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order}fromArray(a){if(this._x=a[0],this._y=a[1],this._z=a[2],a[3]!==void 0)this._order=a[3];return this._onChangeCallback(),this}toArray(a=[],h=0){return a[h]=this._x,a[h+1]=this._y,a[h+2]=this._z,a[h+3]=this._order,a}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class ks{constructor(){this.mask=1}set(a){this.mask=(1<<a|0)>>>0}enable(a){this.mask|=1<<a|0}enableAll(){this.mask=-1}toggle(a){this.mask^=1<<a|0}disable(a){this.mask&=~(1<<a|0)}disableAll(){this.mask=0}test(a){return(this.mask&a.mask)!==0}isEnabled(a){return(this.mask&(1<<a|0))!==0}}var nc=0,Na=new X,ui=new Mn,An=new Ae,ps=new X,Bi=new X,ic=new X,sc=new Mn,Fa=new X(1,0,0),Oa=new X(0,1,0),Ba=new X(0,0,1),za={type:"added"},rc={type:"removed"},di={type:"childadded",child:null},ur={type:"childremoved",child:null};class Be extends Wn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();let a=new X,h=new yn,p=new Mn,m=new X(1,1,1);function g(){p.setFromEuler(h,!1)}function _(){h.setFromQuaternion(p,void 0,!1)}h._onChange(g),p._onChange(_),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:h},quaternion:{configurable:!0,enumerable:!0,value:p},scale:{configurable:!0,enumerable:!0,value:m},modelViewMatrix:{value:new Ae},normalMatrix:{value:new de}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(a){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(a),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(a){return this.quaternion.premultiply(a),this}setRotationFromAxisAngle(a,h){this.quaternion.setFromAxisAngle(a,h)}setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0)}setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a)}setRotationFromQuaternion(a){this.quaternion.copy(a)}rotateOnAxis(a,h){return ui.setFromAxisAngle(a,h),this.quaternion.multiply(ui),this}rotateOnWorldAxis(a,h){return ui.setFromAxisAngle(a,h),this.quaternion.premultiply(ui),this}rotateX(a){return this.rotateOnAxis(Fa,a)}rotateY(a){return this.rotateOnAxis(Oa,a)}rotateZ(a){return this.rotateOnAxis(Ba,a)}translateOnAxis(a,h){return Na.copy(a).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(h)),this}translateX(a){return this.translateOnAxis(Fa,a)}translateY(a){return this.translateOnAxis(Oa,a)}translateZ(a){return this.translateOnAxis(Ba,a)}localToWorld(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(this.matrixWorld)}worldToLocal(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(a,h,p){if(a.isVector3)ps.copy(a);else ps.set(a,h,p);let m=this.parent;if(this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)An.lookAt(Bi,ps,this.up);else An.lookAt(ps,Bi,this.up);if(this.quaternion.setFromRotationMatrix(An),m)An.extractRotation(m.matrixWorld),ui.setFromRotationMatrix(An),this.quaternion.premultiply(ui.invert())}add(a){if(arguments.length>1){for(let h=0;h<arguments.length;h++)this.add(arguments[h]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;if(a&&a.isObject3D)a.removeFromParent(),a.parent=this,this.children.push(a),a.dispatchEvent(za),di.child=a,this.dispatchEvent(di),di.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this}remove(a){if(arguments.length>1){for(let p=0;p<arguments.length;p++)this.remove(arguments[p]);return this}let h=this.children.indexOf(a);if(h!==-1)a.parent=null,this.children.splice(h,1),a.dispatchEvent(rc),ur.child=a,this.dispatchEvent(ur),ur.child=null;return this}removeFromParent(){let a=this.parent;if(a!==null)a.remove(this);return this}clear(){return this.remove(...this.children)}attach(a){if(this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),a.parent!==null)a.parent.updateWorldMatrix(!0,!1),An.multiply(a.parent.matrixWorld);return a.applyMatrix4(An),a.removeFromParent(),a.parent=this,this.children.push(a),a.updateWorldMatrix(!1,!0),a.dispatchEvent(za),di.child=a,this.dispatchEvent(di),di.child=null,this}getObjectById(a){return this.getObjectByProperty("id",a)}getObjectByName(a){return this.getObjectByProperty("name",a)}getObjectByProperty(a,h){if(this[a]===h)return this;for(let p=0,m=this.children.length;p<m;p++){let _=this.children[p].getObjectByProperty(a,h);if(_!==void 0)return _}return}getObjectsByProperty(a,h,p=[]){if(this[a]===h)p.push(this);let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].getObjectsByProperty(a,h,p);return p}getWorldPosition(a){return this.updateWorldMatrix(!0,!1),a.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,a,ic),a}getWorldScale(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,sc,a),a}getWorldDirection(a){this.updateWorldMatrix(!0,!1);let h=this.matrixWorld.elements;return a.set(h[8],h[9],h[10]).normalize()}raycast(){}traverse(a){a(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverse(a)}traverseVisible(a){if(this.visible===!1)return;a(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverseVisible(a)}traverseAncestors(a){let h=this.parent;if(h!==null)a(h),h.traverseAncestors(a)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(a){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||a){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,a=!0}let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].updateMatrixWorld(a)}updateWorldMatrix(a,h){let p=this.parent;if(a===!0&&p!==null)p.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(h===!0){let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].updateWorldMatrix(!1,!0)}}toJSON(a){let h=a===void 0||typeof a==="string",p={};if(h)a={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},p.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let m={};if(m.uuid=this.uuid,m.type=this.type,this.name!=="")m.name=this.name;if(this.castShadow===!0)m.castShadow=!0;if(this.receiveShadow===!0)m.receiveShadow=!0;if(this.visible===!1)m.visible=!1;if(this.frustumCulled===!1)m.frustumCulled=!1;if(this.renderOrder!==0)m.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)m.userData=this.userData;if(m.layers=this.layers.mask,m.matrix=this.matrix.toArray(),m.up=this.up.toArray(),this.matrixAutoUpdate===!1)m.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(m.type="InstancedMesh",m.count=this.count,m.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)m.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(m.type="BatchedMesh",m.perObjectFrustumCulled=this.perObjectFrustumCulled,m.sortObjects=this.sortObjects,m.drawRanges=this._drawRanges,m.reservedRanges=this._reservedRanges,m.visibility=this._visibility,m.active=this._active,m.bounds=this._bounds.map((y)=>({boxInitialized:y.boxInitialized,boxMin:y.box.min.toArray(),boxMax:y.box.max.toArray(),sphereInitialized:y.sphereInitialized,sphereRadius:y.sphere.radius,sphereCenter:y.sphere.center.toArray()})),m.maxInstanceCount=this._maxInstanceCount,m.maxVertexCount=this._maxVertexCount,m.maxIndexCount=this._maxIndexCount,m.geometryInitialized=this._geometryInitialized,m.geometryCount=this._geometryCount,m.matricesTexture=this._matricesTexture.toJSON(a),this._colorsTexture!==null)m.colorsTexture=this._colorsTexture.toJSON(a);if(this.boundingSphere!==null)m.boundingSphere={center:m.boundingSphere.center.toArray(),radius:m.boundingSphere.radius};if(this.boundingBox!==null)m.boundingBox={min:m.boundingBox.min.toArray(),max:m.boundingBox.max.toArray()}}function g(y,x){if(y[x.uuid]===void 0)y[x.uuid]=x.toJSON(a);return x.uuid}if(this.isScene){if(this.background){if(this.background.isColor)m.background=this.background.toJSON();else if(this.background.isTexture)m.background=this.background.toJSON(a).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)m.environment=this.environment.toJSON(a).uuid}else if(this.isMesh||this.isLine||this.isPoints){m.geometry=g(a.geometries,this.geometry);let y=this.geometry.parameters;if(y!==void 0&&y.shapes!==void 0){let x=y.shapes;if(Array.isArray(x))for(let M=0,S=x.length;M<S;M++){let E=x[M];g(a.shapes,E)}else g(a.shapes,x)}}if(this.isSkinnedMesh){if(m.bindMode=this.bindMode,m.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)g(a.skeletons,this.skeleton),m.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let y=[];for(let x=0,M=this.material.length;x<M;x++)y.push(g(a.materials,this.material[x]));m.material=y}else m.material=g(a.materials,this.material);if(this.children.length>0){m.children=[];for(let y=0;y<this.children.length;y++)m.children.push(this.children[y].toJSON(a).object)}if(this.animations.length>0){m.animations=[];for(let y=0;y<this.animations.length;y++){let x=this.animations[y];m.animations.push(g(a.animations,x))}}if(h){let y=_(a.geometries),x=_(a.materials),M=_(a.textures),S=_(a.images),E=_(a.shapes),v=_(a.skeletons),b=_(a.animations),A=_(a.nodes);if(y.length>0)p.geometries=y;if(x.length>0)p.materials=x;if(M.length>0)p.textures=M;if(S.length>0)p.images=S;if(E.length>0)p.shapes=E;if(v.length>0)p.skeletons=v;if(b.length>0)p.animations=b;if(A.length>0)p.nodes=A}return p.object=m,p;function _(y){let x=[];for(let M in y){let S=y[M];delete S.metadata,x.push(S)}return x}}clone(a){return new this.constructor().copy(this,a)}copy(a,h=!0){if(this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.rotation.order=a.rotation.order,this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldAutoUpdate=a.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.layers.mask=a.layers.mask,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.animations=a.animations.slice(),this.userData=JSON.parse(JSON.stringify(a.userData)),h===!0)for(let p=0;p<a.children.length;p++){let m=a.children[p];this.add(m.clone())}return this}}Be.DEFAULT_UP=new X(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new X,Rn=new X,dr=new X,Cn=new X,fi=new X,pi=new X,Ha=new X,fr=new X,pr=new X,mr=new X,gr=new Me,_r=new Me,xr=new Me;class sn{constructor(a=new X,h=new X,p=new X){this.a=a,this.b=h,this.c=p}static getNormal(a,h,p,m){m.subVectors(p,h),hn.subVectors(a,h),m.cross(hn);let g=m.lengthSq();if(g>0)return m.multiplyScalar(1/Math.sqrt(g));return m.set(0,0,0)}static getBarycoord(a,h,p,m,g){hn.subVectors(m,h),Rn.subVectors(p,h),dr.subVectors(a,h);let _=hn.dot(hn),y=hn.dot(Rn),x=hn.dot(dr),M=Rn.dot(Rn),S=Rn.dot(dr),E=_*M-y*y;if(E===0)return g.set(0,0,0),null;let v=1/E,b=(M*x-y*S)*v,A=(_*S-y*x)*v;return g.set(1-b-A,A,b)}static containsPoint(a,h,p,m){if(this.getBarycoord(a,h,p,m,Cn)===null)return!1;return Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(a,h,p,m,g,_,y,x){if(this.getBarycoord(a,h,p,m,Cn)===null){if(x.x=0,x.y=0,"z"in x)x.z=0;if("w"in x)x.w=0;return null}return x.setScalar(0),x.addScaledVector(g,Cn.x),x.addScaledVector(_,Cn.y),x.addScaledVector(y,Cn.z),x}static getInterpolatedAttribute(a,h,p,m,g,_){return gr.setScalar(0),_r.setScalar(0),xr.setScalar(0),gr.fromBufferAttribute(a,h),_r.fromBufferAttribute(a,p),xr.fromBufferAttribute(a,m),_.setScalar(0),_.addScaledVector(gr,g.x),_.addScaledVector(_r,g.y),_.addScaledVector(xr,g.z),_}static isFrontFacing(a,h,p,m){return hn.subVectors(p,h),Rn.subVectors(a,h),hn.cross(Rn).dot(m)<0?!0:!1}set(a,h,p){return this.a.copy(a),this.b.copy(h),this.c.copy(p),this}setFromPointsAndIndices(a,h,p,m){return this.a.copy(a[h]),this.b.copy(a[p]),this.c.copy(a[m]),this}setFromAttributeAndIndices(a,h,p,m){return this.a.fromBufferAttribute(a,h),this.b.fromBufferAttribute(a,p),this.c.fromBufferAttribute(a,m),this}clone(){return new this.constructor().copy(this)}copy(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this}getArea(){return hn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),hn.cross(Rn).length()*0.5}getMidpoint(a){return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(a){return sn.getNormal(this.a,this.b,this.c,a)}getPlane(a){return a.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(a,h){return sn.getBarycoord(a,this.a,this.b,this.c,h)}getInterpolation(a,h,p,m,g){return sn.getInterpolation(a,this.a,this.b,this.c,h,p,m,g)}containsPoint(a){return sn.containsPoint(a,this.a,this.b,this.c)}isFrontFacing(a){return sn.isFrontFacing(this.a,this.b,this.c,a)}intersectsBox(a){return a.intersectsTriangle(this)}closestPointToPoint(a,h){let p=this.a,m=this.b,g=this.c,_,y;fi.subVectors(m,p),pi.subVectors(g,p),fr.subVectors(a,p);let x=fi.dot(fr),M=pi.dot(fr);if(x<=0&&M<=0)return h.copy(p);pr.subVectors(a,m);let S=fi.dot(pr),E=pi.dot(pr);if(S>=0&&E<=S)return h.copy(m);let v=x*E-S*M;if(v<=0&&x>=0&&S<=0)return _=x/(x-S),h.copy(p).addScaledVector(fi,_);mr.subVectors(a,g);let b=fi.dot(mr),A=pi.dot(mr);if(A>=0&&b<=A)return h.copy(g);let C=b*M-x*A;if(C<=0&&M>=0&&A<=0)return y=M/(M-A),h.copy(p).addScaledVector(pi,y);let P=S*A-b*E;if(P<=0&&E-S>=0&&b-A>=0)return Ha.subVectors(g,m),y=(E-S)/(E-S+(b-A)),h.copy(m).addScaledVector(Ha,y);let T=1/(P+C+v);return _=C*T,y=v*T,h.copy(p).addScaledVector(fi,_).addScaledVector(pi,y)}equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}}var Bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function yr(a,h,p){if(p<0)p+=1;if(p>1)p-=1;if(p<0.16666666666666666)return a+(h-a)*6*p;if(p<0.5)return h;if(p<0.6666666666666666)return a+(h-a)*6*(0.6666666666666666-p);return a}class pe{constructor(a,h,p){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(a,h,p)}set(a,h,p){if(h===void 0&&p===void 0){let m=a;if(m&&m.isColor)this.copy(m);else if(typeof m==="number")this.setHex(m);else if(typeof m==="string")this.setStyle(m)}else this.setRGB(a,h,p);return this}setScalar(a){return this.r=a,this.g=a,this.b=a,this}setHex(a,h="srgb"){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(a&255)/255,ge.toWorkingColorSpace(this,h),this}setRGB(a,h,p,m=ge.workingColorSpace){return this.r=a,this.g=h,this.b=p,ge.toWorkingColorSpace(this,m),this}setHSL(a,h,p,m=ge.workingColorSpace){if(a=Wr(a,1),h=Le(h,0,1),p=Le(p,0,1),h===0)this.r=this.g=this.b=p;else{let g=p<=0.5?p*(1+h):p+h-p*h,_=2*p-g;this.r=yr(_,g,a+0.3333333333333333),this.g=yr(_,g,a),this.b=yr(_,g,a-0.3333333333333333)}return ge.toWorkingColorSpace(this,m),this}setStyle(a,h="srgb"){function p(g){if(g===void 0)return;if(parseFloat(g)<1)console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}let m;if(m=/^(\w+)\(([^\)]*)\)/.exec(a)){let g,_=m[1],y=m[2];switch(_){case"rgb":case"rgba":if(g=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setRGB(Math.min(255,parseInt(g[1],10))/255,Math.min(255,parseInt(g[2],10))/255,Math.min(255,parseInt(g[3],10))/255,h);if(g=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setRGB(Math.min(100,parseInt(g[1],10))/100,Math.min(100,parseInt(g[2],10))/100,Math.min(100,parseInt(g[3],10))/100,h);break;case"hsl":case"hsla":if(g=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setHSL(parseFloat(g[1])/360,parseFloat(g[2])/100,parseFloat(g[3])/100,h);break;default:console.warn("THREE.Color: Unknown color model "+a)}}else if(m=/^\#([A-Fa-f\d]+)$/.exec(a)){let g=m[1],_=g.length;if(_===3)return this.setRGB(parseInt(g.charAt(0),16)/15,parseInt(g.charAt(1),16)/15,parseInt(g.charAt(2),16)/15,h);else if(_===6)return this.setHex(parseInt(g,16),h);else console.warn("THREE.Color: Invalid hex color "+a)}else if(a&&a.length>0)return this.setColorName(a,h);return this}setColorName(a,h="srgb"){let p=Bo[a.toLowerCase()];if(p!==void 0)this.setHex(p,h);else console.warn("THREE.Color: Unknown color "+a);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(a){return this.r=a.r,this.g=a.g,this.b=a.b,this}copySRGBToLinear(a){return this.r=Pn(a.r),this.g=Pn(a.g),this.b=Pn(a.b),this}copyLinearToSRGB(a){return this.r=Ei(a.r),this.g=Ei(a.g),this.b=Ei(a.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(a="srgb"){return ge.fromWorkingColorSpace(He.copy(this),a),Math.round(Le(He.r*255,0,255))*65536+Math.round(Le(He.g*255,0,255))*256+Math.round(Le(He.b*255,0,255))}getHexString(a="srgb"){return("000000"+this.getHex(a).toString(16)).slice(-6)}getHSL(a,h=ge.workingColorSpace){ge.fromWorkingColorSpace(He.copy(this),h);let{r:p,g:m,b:g}=He,_=Math.max(p,m,g),y=Math.min(p,m,g),x,M,S=(y+_)/2;if(y===_)x=0,M=0;else{let E=_-y;switch(M=S<=0.5?E/(_+y):E/(2-_-y),_){case p:x=(m-g)/E+(m<g?6:0);break;case m:x=(g-p)/E+2;break;case g:x=(p-m)/E+4;break}x/=6}return a.h=x,a.s=M,a.l=S,a}getRGB(a,h=ge.workingColorSpace){return ge.fromWorkingColorSpace(He.copy(this),h),a.r=He.r,a.g=He.g,a.b=He.b,a}getStyle(a="srgb"){ge.fromWorkingColorSpace(He.copy(this),a);let{r:h,g:p,b:m}=He;if(a!=="srgb")return`color(${a} ${h.toFixed(3)} ${p.toFixed(3)} ${m.toFixed(3)})`;return`rgb(${Math.round(h*255)},${Math.round(p*255)},${Math.round(m*255)})`}offsetHSL(a,h,p){return this.getHSL(zn),this.setHSL(zn.h+a,zn.s+h,zn.l+p)}add(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this}addColors(a,h){return this.r=a.r+h.r,this.g=a.g+h.g,this.b=a.b+h.b,this}addScalar(a){return this.r+=a,this.g+=a,this.b+=a,this}sub(a){return this.r=Math.max(0,this.r-a.r),this.g=Math.max(0,this.g-a.g),this.b=Math.max(0,this.b-a.b),this}multiply(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this}multiplyScalar(a){return this.r*=a,this.g*=a,this.b*=a,this}lerp(a,h){return this.r+=(a.r-this.r)*h,this.g+=(a.g-this.g)*h,this.b+=(a.b-this.b)*h,this}lerpColors(a,h,p){return this.r=a.r+(h.r-a.r)*p,this.g=a.g+(h.g-a.g)*p,this.b=a.b+(h.b-a.b)*p,this}lerpHSL(a,h){this.getHSL(zn),a.getHSL(ms);let p=Vi(zn.h,ms.h,h),m=Vi(zn.s,ms.s,h),g=Vi(zn.l,ms.l,h);return this.setHSL(p,m,g),this}setFromVector3(a){return this.r=a.x,this.g=a.y,this.b=a.z,this}applyMatrix3(a){let h=this.r,p=this.g,m=this.b,g=a.elements;return this.r=g[0]*h+g[3]*p+g[6]*m,this.g=g[1]*h+g[4]*p+g[7]*m,this.b=g[2]*h+g[5]*p+g[8]*m,this}equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b}fromArray(a,h=0){return this.r=a[h],this.g=a[h+1],this.b=a[h+2],this}toArray(a=[],h=0){return a[h]=this.r,a[h+1]=this.g,a[h+2]=this.b,a}fromBufferAttribute(a,h){return this.r=a.getX(h),this.g=a.getY(h),this.b=a.getZ(h),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var He=new pe;pe.NAMES=Bo;var ac=0;class Xn extends Wn{static get type(){return"Material"}get type(){return this.constructor.type}set type(a){}constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=si(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(a){if(this._alphaTest>0!==a>0)this.version++;this._alphaTest=a}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(a){if(a===void 0)return;for(let h in a){let p=a[h];if(p===void 0){console.warn(`THREE.Material: parameter '${h}' has value of undefined.`);continue}let m=this[h];if(m===void 0){console.warn(`THREE.Material: '${h}' is not a property of THREE.${this.type}.`);continue}if(m&&m.isColor)m.set(p);else if(m&&m.isVector3&&(p&&p.isVector3))m.copy(p);else this[h]=p}}toJSON(a){let h=a===void 0||typeof a==="string";if(h)a={textures:{},images:{}};let p={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(p.uuid=this.uuid,p.type=this.type,this.name!=="")p.name=this.name;if(this.color&&this.color.isColor)p.color=this.color.getHex();if(this.roughness!==void 0)p.roughness=this.roughness;if(this.metalness!==void 0)p.metalness=this.metalness;if(this.sheen!==void 0)p.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)p.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)p.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)p.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)p.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)p.specular=this.specular.getHex();if(this.specularIntensity!==void 0)p.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)p.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)p.shininess=this.shininess;if(this.clearcoat!==void 0)p.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)p.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)p.clearcoatMap=this.clearcoatMap.toJSON(a).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)p.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(a).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)p.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,p.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)p.dispersion=this.dispersion;if(this.iridescence!==void 0)p.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)p.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)p.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)p.iridescenceMap=this.iridescenceMap.toJSON(a).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)p.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(a).uuid;if(this.anisotropy!==void 0)p.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)p.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)p.anisotropyMap=this.anisotropyMap.toJSON(a).uuid;if(this.map&&this.map.isTexture)p.map=this.map.toJSON(a).uuid;if(this.matcap&&this.matcap.isTexture)p.matcap=this.matcap.toJSON(a).uuid;if(this.alphaMap&&this.alphaMap.isTexture)p.alphaMap=this.alphaMap.toJSON(a).uuid;if(this.lightMap&&this.lightMap.isTexture)p.lightMap=this.lightMap.toJSON(a).uuid,p.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)p.aoMap=this.aoMap.toJSON(a).uuid,p.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)p.bumpMap=this.bumpMap.toJSON(a).uuid,p.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)p.normalMap=this.normalMap.toJSON(a).uuid,p.normalMapType=this.normalMapType,p.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)p.displacementMap=this.displacementMap.toJSON(a).uuid,p.displacementScale=this.displacementScale,p.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)p.roughnessMap=this.roughnessMap.toJSON(a).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)p.metalnessMap=this.metalnessMap.toJSON(a).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)p.emissiveMap=this.emissiveMap.toJSON(a).uuid;if(this.specularMap&&this.specularMap.isTexture)p.specularMap=this.specularMap.toJSON(a).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)p.specularIntensityMap=this.specularIntensityMap.toJSON(a).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)p.specularColorMap=this.specularColorMap.toJSON(a).uuid;if(this.envMap&&this.envMap.isTexture){if(p.envMap=this.envMap.toJSON(a).uuid,this.combine!==void 0)p.combine=this.combine}if(this.envMapRotation!==void 0)p.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)p.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)p.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)p.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)p.gradientMap=this.gradientMap.toJSON(a).uuid;if(this.transmission!==void 0)p.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)p.transmissionMap=this.transmissionMap.toJSON(a).uuid;if(this.thickness!==void 0)p.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)p.thicknessMap=this.thicknessMap.toJSON(a).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)p.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)p.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)p.size=this.size;if(this.shadowSide!==null)p.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)p.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)p.blending=this.blending;if(this.side!==0)p.side=this.side;if(this.vertexColors===!0)p.vertexColors=!0;if(this.opacity<1)p.opacity=this.opacity;if(this.transparent===!0)p.transparent=!0;if(this.blendSrc!==204)p.blendSrc=this.blendSrc;if(this.blendDst!==205)p.blendDst=this.blendDst;if(this.blendEquation!==100)p.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)p.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)p.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)p.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)p.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)p.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)p.depthFunc=this.depthFunc;if(this.depthTest===!1)p.depthTest=this.depthTest;if(this.depthWrite===!1)p.depthWrite=this.depthWrite;if(this.colorWrite===!1)p.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)p.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)p.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)p.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)p.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)p.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)p.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)p.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)p.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)p.rotation=this.rotation;if(this.polygonOffset===!0)p.polygonOffset=!0;if(this.polygonOffsetFactor!==0)p.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)p.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)p.linewidth=this.linewidth;if(this.dashSize!==void 0)p.dashSize=this.dashSize;if(this.gapSize!==void 0)p.gapSize=this.gapSize;if(this.scale!==void 0)p.scale=this.scale;if(this.dithering===!0)p.dithering=!0;if(this.alphaTest>0)p.alphaTest=this.alphaTest;if(this.alphaHash===!0)p.alphaHash=!0;if(this.alphaToCoverage===!0)p.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)p.premultipliedAlpha=!0;if(this.forceSinglePass===!0)p.forceSinglePass=!0;if(this.wireframe===!0)p.wireframe=!0;if(this.wireframeLinewidth>1)p.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")p.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")p.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)p.flatShading=!0;if(this.visible===!1)p.visible=!1;if(this.toneMapped===!1)p.toneMapped=!1;if(this.fog===!1)p.fog=!1;if(Object.keys(this.userData).length>0)p.userData=this.userData;function m(g){let _=[];for(let y in g){let x=g[y];delete x.metadata,_.push(x)}return _}if(h){let g=m(a.textures),_=m(a.images);if(g.length>0)p.textures=g;if(_.length>0)p.images=_}return p}clone(){return new this.constructor().copy(this)}copy(a){this.name=a.name,this.blending=a.blending,this.side=a.side,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.blendColor.copy(a.blendColor),this.blendAlpha=a.blendAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.stencilWriteMask=a.stencilWriteMask,this.stencilFunc=a.stencilFunc,this.stencilRef=a.stencilRef,this.stencilFuncMask=a.stencilFuncMask,this.stencilFail=a.stencilFail,this.stencilZFail=a.stencilZFail,this.stencilZPass=a.stencilZPass,this.stencilWrite=a.stencilWrite;let h=a.clippingPlanes,p=null;if(h!==null){let m=h.length;p=Array(m);for(let g=0;g!==m;++g)p[g]=h[g].clone()}return this.clippingPlanes=p,this.clipIntersection=a.clipIntersection,this.clipShadows=a.clipShadows,this.shadowSide=a.shadowSide,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.alphaHash=a.alphaHash,this.alphaToCoverage=a.alphaToCoverage,this.premultipliedAlpha=a.premultipliedAlpha,this.forceSinglePass=a.forceSinglePass,this.visible=a.visible,this.toneMapped=a.toneMapped,this.userData=JSON.parse(JSON.stringify(a.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(a){if(a===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class es extends Xn{static get type(){return"MeshBasicMaterial"}constructor(a){super();this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.fog=a.fog,this}}var De=new X,gs=new St;class un{constructor(a,h,p=!1){if(Array.isArray(a))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=a,this.itemSize=h,this.count=a!==void 0?a.length/h:0,this.normalized=p,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(a){if(a===!0)this.version++}setUsage(a){return this.usage=a,this}addUpdateRange(a,h){this.updateRanges.push({start:a,count:h})}clearUpdateRanges(){this.updateRanges.length=0}copy(a){return this.name=a.name,this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.count=a.count,this.normalized=a.normalized,this.usage=a.usage,this.gpuType=a.gpuType,this}copyAt(a,h,p){a*=this.itemSize,p*=h.itemSize;for(let m=0,g=this.itemSize;m<g;m++)this.array[a+m]=h.array[p+m];return this}copyArray(a){return this.array.set(a),this}applyMatrix3(a){if(this.itemSize===2)for(let h=0,p=this.count;h<p;h++)gs.fromBufferAttribute(this,h),gs.applyMatrix3(a),this.setXY(h,gs.x,gs.y);else if(this.itemSize===3)for(let h=0,p=this.count;h<p;h++)De.fromBufferAttribute(this,h),De.applyMatrix3(a),this.setXYZ(h,De.x,De.y,De.z);return this}applyMatrix4(a){for(let h=0,p=this.count;h<p;h++)De.fromBufferAttribute(this,h),De.applyMatrix4(a),this.setXYZ(h,De.x,De.y,De.z);return this}applyNormalMatrix(a){for(let h=0,p=this.count;h<p;h++)De.fromBufferAttribute(this,h),De.applyNormalMatrix(a),this.setXYZ(h,De.x,De.y,De.z);return this}transformDirection(a){for(let h=0,p=this.count;h<p;h++)De.fromBufferAttribute(this,h),De.transformDirection(a),this.setXYZ(h,De.x,De.y,De.z);return this}set(a,h=0){return this.array.set(a,h),this}getComponent(a,h){let p=this.array[a*this.itemSize+h];if(this.normalized)p=yi(p,this.array);return p}setComponent(a,h,p){if(this.normalized)p=Ge(p,this.array);return this.array[a*this.itemSize+h]=p,this}getX(a){let h=this.array[a*this.itemSize];if(this.normalized)h=yi(h,this.array);return h}setX(a,h){if(this.normalized)h=Ge(h,this.array);return this.array[a*this.itemSize]=h,this}getY(a){let h=this.array[a*this.itemSize+1];if(this.normalized)h=yi(h,this.array);return h}setY(a,h){if(this.normalized)h=Ge(h,this.array);return this.array[a*this.itemSize+1]=h,this}getZ(a){let h=this.array[a*this.itemSize+2];if(this.normalized)h=yi(h,this.array);return h}setZ(a,h){if(this.normalized)h=Ge(h,this.array);return this.array[a*this.itemSize+2]=h,this}getW(a){let h=this.array[a*this.itemSize+3];if(this.normalized)h=yi(h,this.array);return h}setW(a,h){if(this.normalized)h=Ge(h,this.array);return this.array[a*this.itemSize+3]=h,this}setXY(a,h,p){if(a*=this.itemSize,this.normalized)h=Ge(h,this.array),p=Ge(p,this.array);return this.array[a+0]=h,this.array[a+1]=p,this}setXYZ(a,h,p,m){if(a*=this.itemSize,this.normalized)h=Ge(h,this.array),p=Ge(p,this.array),m=Ge(m,this.array);return this.array[a+0]=h,this.array[a+1]=p,this.array[a+2]=m,this}setXYZW(a,h,p,m,g){if(a*=this.itemSize,this.normalized)h=Ge(h,this.array),p=Ge(p,this.array),m=Ge(m,this.array),g=Ge(g,this.array);return this.array[a+0]=h,this.array[a+1]=p,this.array[a+2]=m,this.array[a+3]=g,this}onUpload(a){return this.onUploadCallback=a,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let a={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")a.name=this.name;if(this.usage!==35044)a.usage=this.usage;return a}}class qr extends un{constructor(a,h,p){super(new Uint16Array(a),h,p)}}class Yr extends un{constructor(a,h,p){super(new Uint32Array(a),h,p)}}class Se extends un{constructor(a,h,p){super(new Float32Array(a),h,p)}}var oc=0,nn=new Ae,vr=new Be,mi=new X,je=new Vn,zi=new Vn,Oe=new X;class qe extends Wn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(a){if(Array.isArray(a))this.index=new((Uo(a))?Yr:qr)(a,1);else this.index=a;return this}setIndirect(a){return this.indirect=a,this}getIndirect(){return this.indirect}getAttribute(a){return this.attributes[a]}setAttribute(a,h){return this.attributes[a]=h,this}deleteAttribute(a){return delete this.attributes[a],this}hasAttribute(a){return this.attributes[a]!==void 0}addGroup(a,h,p=0){this.groups.push({start:a,count:h,materialIndex:p})}clearGroups(){this.groups=[]}setDrawRange(a,h){this.drawRange.start=a,this.drawRange.count=h}applyMatrix4(a){let h=this.attributes.position;if(h!==void 0)h.applyMatrix4(a),h.needsUpdate=!0;let p=this.attributes.normal;if(p!==void 0){let g=new de().getNormalMatrix(a);p.applyNormalMatrix(g),p.needsUpdate=!0}let m=this.attributes.tangent;if(m!==void 0)m.transformDirection(a),m.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(a){return nn.makeRotationFromQuaternion(a),this.applyMatrix4(nn),this}rotateX(a){return nn.makeRotationX(a),this.applyMatrix4(nn),this}rotateY(a){return nn.makeRotationY(a),this.applyMatrix4(nn),this}rotateZ(a){return nn.makeRotationZ(a),this.applyMatrix4(nn),this}translate(a,h,p){return nn.makeTranslation(a,h,p),this.applyMatrix4(nn),this}scale(a,h,p){return nn.makeScale(a,h,p),this.applyMatrix4(nn),this}lookAt(a){return vr.lookAt(a),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(a){let h=this.getAttribute("position");if(h===void 0){let p=[];for(let m=0,g=a.length;m<g;m++){let _=a[m];p.push(_.x,_.y,_.z||0)}this.setAttribute("position",new Se(p,3))}else{for(let p=0,m=h.count;p<m;p++){let g=a[p];h.setXYZ(p,g.x,g.y,g.z||0)}if(a.length>h.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");h.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Vn;let a=this.attributes.position,h=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(a!==void 0){if(this.boundingBox.setFromBufferAttribute(a),h)for(let p=0,m=h.length;p<m;p++){let g=h[p];if(je.setFromBufferAttribute(g),this.morphTargetsRelative)Oe.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Oe);else this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ts;let a=this.attributes.position,h=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(a){let p=this.boundingSphere.center;if(je.setFromBufferAttribute(a),h)for(let g=0,_=h.length;g<_;g++){let y=h[g];if(zi.setFromBufferAttribute(y),this.morphTargetsRelative)Oe.addVectors(je.min,zi.min),je.expandByPoint(Oe),Oe.addVectors(je.max,zi.max),je.expandByPoint(Oe);else je.expandByPoint(zi.min),je.expandByPoint(zi.max)}je.getCenter(p);let m=0;for(let g=0,_=a.count;g<_;g++)Oe.fromBufferAttribute(a,g),m=Math.max(m,p.distanceToSquared(Oe));if(h)for(let g=0,_=h.length;g<_;g++){let y=h[g],x=this.morphTargetsRelative;for(let M=0,S=y.count;M<S;M++){if(Oe.fromBufferAttribute(y,M),x)mi.fromBufferAttribute(a,M),Oe.add(mi);m=Math.max(m,p.distanceToSquared(Oe))}}if(this.boundingSphere.radius=Math.sqrt(m),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let a=this.index,h=this.attributes;if(a===null||h.position===void 0||h.normal===void 0||h.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:p,normal:m,uv:g}=h;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new un(new Float32Array(4*p.count),4));let _=this.getAttribute("tangent"),y=[],x=[];for(let q=0;q<p.count;q++)y[q]=new X,x[q]=new X;let M=new X,S=new X,E=new X,v=new St,b=new St,A=new St,C=new X,P=new X;function T(q,ct,O){M.fromBufferAttribute(p,q),S.fromBufferAttribute(p,ct),E.fromBufferAttribute(p,O),v.fromBufferAttribute(g,q),b.fromBufferAttribute(g,ct),A.fromBufferAttribute(g,O),S.sub(M),E.sub(M),b.sub(v),A.sub(v);let B=1/(b.x*A.y-A.x*b.y);if(!isFinite(B))return;C.copy(S).multiplyScalar(A.y).addScaledVector(E,-b.y).multiplyScalar(B),P.copy(E).multiplyScalar(b.x).addScaledVector(S,-A.x).multiplyScalar(B),y[q].add(C),y[ct].add(C),y[O].add(C),x[q].add(P),x[ct].add(P),x[O].add(P)}let w=this.groups;if(w.length===0)w=[{start:0,count:a.count}];for(let q=0,ct=w.length;q<ct;++q){let O=w[q],{start:B,count:j}=O;for(let at=B,ot=B+j;at<ot;at+=3)T(a.getX(at+0),a.getX(at+1),a.getX(at+2))}let G=new X,N=new X,H=new X,rt=new X;function V(q){H.fromBufferAttribute(m,q),rt.copy(H);let ct=y[q];G.copy(ct),G.sub(H.multiplyScalar(H.dot(ct))).normalize(),N.crossVectors(rt,ct);let B=N.dot(x[q])<0?-1:1;_.setXYZW(q,G.x,G.y,G.z,B)}for(let q=0,ct=w.length;q<ct;++q){let O=w[q],{start:B,count:j}=O;for(let at=B,ot=B+j;at<ot;at+=3)V(a.getX(at+0)),V(a.getX(at+1)),V(a.getX(at+2))}}computeVertexNormals(){let a=this.index,h=this.getAttribute("position");if(h!==void 0){let p=this.getAttribute("normal");if(p===void 0)p=new un(new Float32Array(h.count*3),3),this.setAttribute("normal",p);else for(let v=0,b=p.count;v<b;v++)p.setXYZ(v,0,0,0);let m=new X,g=new X,_=new X,y=new X,x=new X,M=new X,S=new X,E=new X;if(a)for(let v=0,b=a.count;v<b;v+=3){let A=a.getX(v+0),C=a.getX(v+1),P=a.getX(v+2);m.fromBufferAttribute(h,A),g.fromBufferAttribute(h,C),_.fromBufferAttribute(h,P),S.subVectors(_,g),E.subVectors(m,g),S.cross(E),y.fromBufferAttribute(p,A),x.fromBufferAttribute(p,C),M.fromBufferAttribute(p,P),y.add(S),x.add(S),M.add(S),p.setXYZ(A,y.x,y.y,y.z),p.setXYZ(C,x.x,x.y,x.z),p.setXYZ(P,M.x,M.y,M.z)}else for(let v=0,b=h.count;v<b;v+=3)m.fromBufferAttribute(h,v+0),g.fromBufferAttribute(h,v+1),_.fromBufferAttribute(h,v+2),S.subVectors(_,g),E.subVectors(m,g),S.cross(E),p.setXYZ(v+0,S.x,S.y,S.z),p.setXYZ(v+1,S.x,S.y,S.z),p.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),p.needsUpdate=!0}}normalizeNormals(){let a=this.attributes.normal;for(let h=0,p=a.count;h<p;h++)Oe.fromBufferAttribute(a,h),Oe.normalize(),a.setXYZ(h,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function a(y,x){let{array:M,itemSize:S,normalized:E}=y,v=new M.constructor(x.length*S),b=0,A=0;for(let C=0,P=x.length;C<P;C++){if(y.isInterleavedBufferAttribute)b=x[C]*y.data.stride+y.offset;else b=x[C]*S;for(let T=0;T<S;T++)v[A++]=M[b++]}return new un(v,S,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let h=new qe,p=this.index.array,m=this.attributes;for(let y in m){let x=m[y],M=a(x,p);h.setAttribute(y,M)}let g=this.morphAttributes;for(let y in g){let x=[],M=g[y];for(let S=0,E=M.length;S<E;S++){let v=M[S],b=a(v,p);x.push(b)}h.morphAttributes[y]=x}h.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;for(let y=0,x=_.length;y<x;y++){let M=_[y];h.addGroup(M.start,M.count,M.materialIndex)}return h}toJSON(){let a={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(a.uuid=this.uuid,a.type=this.type,this.name!=="")a.name=this.name;if(Object.keys(this.userData).length>0)a.userData=this.userData;if(this.parameters!==void 0){let x=this.parameters;for(let M in x)if(x[M]!==void 0)a[M]=x[M];return a}a.data={attributes:{}};let h=this.index;if(h!==null)a.data.index={type:h.array.constructor.name,array:Array.prototype.slice.call(h.array)};let p=this.attributes;for(let x in p){let M=p[x];a.data.attributes[x]=M.toJSON(a.data)}let m={},g=!1;for(let x in this.morphAttributes){let M=this.morphAttributes[x],S=[];for(let E=0,v=M.length;E<v;E++){let b=M[E];S.push(b.toJSON(a.data))}if(S.length>0)m[x]=S,g=!0}if(g)a.data.morphAttributes=m,a.data.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;if(_.length>0)a.data.groups=JSON.parse(JSON.stringify(_));let y=this.boundingSphere;if(y!==null)a.data.boundingSphere={center:y.center.toArray(),radius:y.radius};return a}clone(){return new this.constructor().copy(this)}copy(a){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let h={};this.name=a.name;let p=a.index;if(p!==null)this.setIndex(p.clone(h));let m=a.attributes;for(let M in m){let S=m[M];this.setAttribute(M,S.clone(h))}let g=a.morphAttributes;for(let M in g){let S=[],E=g[M];for(let v=0,b=E.length;v<b;v++)S.push(E[v].clone(h));this.morphAttributes[M]=S}this.morphTargetsRelative=a.morphTargetsRelative;let _=a.groups;for(let M=0,S=_.length;M<S;M++){let E=_[M];this.addGroup(E.start,E.count,E.materialIndex)}let y=a.boundingBox;if(y!==null)this.boundingBox=y.clone();let x=a.boundingSphere;if(x!==null)this.boundingSphere=x.clone();return this.drawRange.start=a.drawRange.start,this.drawRange.count=a.drawRange.count,this.userData=a.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ka=new Ae,$n=new Ti,_s=new ts,Ga=new X,xs=new X,ys=new X,vs=new X,Mr=new X,Ms=new X,Wa=new X,Ss=new X;class he extends Be{constructor(a=new qe,h=new es){super();this.isMesh=!0,this.type="Mesh",this.geometry=a,this.material=h,this.updateMorphTargets()}copy(a,h){if(super.copy(a,h),a.morphTargetInfluences!==void 0)this.morphTargetInfluences=a.morphTargetInfluences.slice();if(a.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary);return this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let y=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[y]=g}}}}getVertexPosition(a,h){let p=this.geometry,m=p.attributes.position,g=p.morphAttributes.position,_=p.morphTargetsRelative;h.fromBufferAttribute(m,a);let y=this.morphTargetInfluences;if(g&&y){Ms.set(0,0,0);for(let x=0,M=g.length;x<M;x++){let S=y[x],E=g[x];if(S===0)continue;if(Mr.fromBufferAttribute(E,a),_)Ms.addScaledVector(Mr,S);else Ms.addScaledVector(Mr.sub(h),S)}h.add(Ms)}return h}raycast(a,h){let p=this.geometry,m=this.material,g=this.matrixWorld;if(m===void 0)return;if(p.boundingSphere===null)p.computeBoundingSphere();if(_s.copy(p.boundingSphere),_s.applyMatrix4(g),$n.copy(a.ray).recast(a.near),_s.containsPoint($n.origin)===!1){if($n.intersectSphere(_s,Ga)===null)return;if($n.origin.distanceToSquared(Ga)>(a.far-a.near)**2)return}if(ka.copy(g).invert(),$n.copy(a.ray).applyMatrix4(ka),p.boundingBox!==null){if($n.intersectsBox(p.boundingBox)===!1)return}this._computeIntersections(a,h,$n)}_computeIntersections(a,h,p){let m,g=this.geometry,_=this.material,y=g.index,x=g.attributes.position,M=g.attributes.uv,S=g.attributes.uv1,E=g.attributes.normal,{groups:v,drawRange:b}=g;if(y!==null)if(Array.isArray(_))for(let A=0,C=v.length;A<C;A++){let P=v[A],T=_[P.materialIndex],w=Math.max(P.start,b.start),G=Math.min(y.count,Math.min(P.start+P.count,b.start+b.count));for(let N=w,H=G;N<H;N+=3){let rt=y.getX(N),V=y.getX(N+1),q=y.getX(N+2);if(m=Es(this,T,a,p,M,S,E,rt,V,q),m)m.faceIndex=Math.floor(N/3),m.face.materialIndex=P.materialIndex,h.push(m)}}else{let A=Math.max(0,b.start),C=Math.min(y.count,b.start+b.count);for(let P=A,T=C;P<T;P+=3){let w=y.getX(P),G=y.getX(P+1),N=y.getX(P+2);if(m=Es(this,_,a,p,M,S,E,w,G,N),m)m.faceIndex=Math.floor(P/3),h.push(m)}}else if(x!==void 0)if(Array.isArray(_))for(let A=0,C=v.length;A<C;A++){let P=v[A],T=_[P.materialIndex],w=Math.max(P.start,b.start),G=Math.min(x.count,Math.min(P.start+P.count,b.start+b.count));for(let N=w,H=G;N<H;N+=3){let rt=N,V=N+1,q=N+2;if(m=Es(this,T,a,p,M,S,E,rt,V,q),m)m.faceIndex=Math.floor(N/3),m.face.materialIndex=P.materialIndex,h.push(m)}}else{let A=Math.max(0,b.start),C=Math.min(x.count,b.start+b.count);for(let P=A,T=C;P<T;P+=3){let w=P,G=P+1,N=P+2;if(m=Es(this,_,a,p,M,S,E,w,G,N),m)m.faceIndex=Math.floor(P/3),h.push(m)}}}}function lc(a,h,p,m,g,_,y,x){let M;if(h.side===1)M=m.intersectTriangle(y,_,g,!0,x);else M=m.intersectTriangle(g,_,y,h.side===0,x);if(M===null)return null;Ss.copy(x),Ss.applyMatrix4(a.matrixWorld);let S=p.ray.origin.distanceTo(Ss);if(S<p.near||S>p.far)return null;return{distance:S,point:Ss.clone(),object:a}}function Es(a,h,p,m,g,_,y,x,M,S){a.getVertexPosition(x,xs),a.getVertexPosition(M,ys),a.getVertexPosition(S,vs);let E=lc(a,h,p,m,xs,ys,vs,Wa);if(E){let v=new X;if(sn.getBarycoord(Wa,xs,ys,vs,v),g)E.uv=sn.getInterpolatedAttribute(g,x,M,S,v,new St);if(_)E.uv1=sn.getInterpolatedAttribute(_,x,M,S,v,new St);if(y){if(E.normal=sn.getInterpolatedAttribute(y,x,M,S,v,new X),E.normal.dot(m.direction)>0)E.normal.multiplyScalar(-1)}let b={a:x,b:M,c:S,normal:new X,materialIndex:0};sn.getNormal(xs,ys,vs,b.normal),E.face=b,E.barycoord=v}return E}class ke extends qe{constructor(a=1,h=1,p=1,m=1,g=1,_=1){super();this.type="BoxGeometry",this.parameters={width:a,height:h,depth:p,widthSegments:m,heightSegments:g,depthSegments:_};let y=this;m=Math.floor(m),g=Math.floor(g),_=Math.floor(_);let x=[],M=[],S=[],E=[],v=0,b=0;A("z","y","x",-1,-1,p,h,a,_,g,0),A("z","y","x",1,-1,p,h,-a,_,g,1),A("x","z","y",1,1,a,p,h,m,_,2),A("x","z","y",1,-1,a,p,-h,m,_,3),A("x","y","z",1,-1,a,h,p,m,g,4),A("x","y","z",-1,-1,a,h,-p,m,g,5),this.setIndex(x),this.setAttribute("position",new Se(M,3)),this.setAttribute("normal",new Se(S,3)),this.setAttribute("uv",new Se(E,2));function A(C,P,T,w,G,N,H,rt,V,q,ct){let O=N/V,B=H/q,j=N/2,at=H/2,ot=rt/2,ht=V+1,ft=q+1,Z=0,st=0,Y=new X;for(let Ct=0;Ct<ft;Ct++){let U=Ct*B-at;for(let Wt=0;Wt<ht;Wt++){let jt=Wt*O-j;Y[C]=jt*w,Y[P]=U*G,Y[T]=ot,M.push(Y.x,Y.y,Y.z),Y[C]=0,Y[P]=0,Y[T]=rt>0?1:-1,S.push(Y.x,Y.y,Y.z),E.push(Wt/V),E.push(1-Ct/q),Z+=1}}for(let Ct=0;Ct<q;Ct++)for(let U=0;U<V;U++){let Wt=v+U+ht*Ct,jt=v+U+ht*(Ct+1),dt=v+(U+1)+ht*(Ct+1),Et=v+(U+1)+ht*Ct;x.push(Wt,jt,Et),x.push(jt,dt,Et),st+=6}y.addGroup(b,st,ct),b+=st,v+=Z}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new ke(a.width,a.height,a.depth,a.widthSegments,a.heightSegments,a.depthSegments)}}function bi(a){let h={};for(let p in a){h[p]={};for(let m in a[p]){let g=a[p][m];if(g&&(g.isColor||g.isMatrix3||g.isMatrix4||g.isVector2||g.isVector3||g.isVector4||g.isTexture||g.isQuaternion))if(g.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),h[p][m]=null;else h[p][m]=g.clone();else if(Array.isArray(g))h[p][m]=g.slice();else h[p][m]=g}}return h}function We(a){let h={};for(let p=0;p<a.length;p++){let m=bi(a[p]);for(let g in m)h[g]=m[g]}return h}function cc(a){let h=[];for(let p=0;p<a.length;p++)h.push(a[p].clone());return h}function zo(a){let h=a.getRenderTarget();if(h===null)return a.outputColorSpace;if(h.isXRRenderTarget===!0)return h.texture.colorSpace;return ge.workingColorSpace}var hc={clone:bi,merge:We},uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Xn{static get type(){return"ShaderMaterial"}constructor(a){super();if(this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uc,this.fragmentShader=dc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,a!==void 0)this.setValues(a)}copy(a){return super.copy(a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=bi(a.uniforms),this.uniformsGroups=cc(a.uniformsGroups),this.defines=Object.assign({},a.defines),this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.fog=a.fog,this.lights=a.lights,this.clipping=a.clipping,this.extensions=Object.assign({},a.extensions),this.glslVersion=a.glslVersion,this}toJSON(a){let h=super.toJSON(a);h.glslVersion=this.glslVersion,h.uniforms={};for(let m in this.uniforms){let _=this.uniforms[m].value;if(_&&_.isTexture)h.uniforms[m]={type:"t",value:_.toJSON(a).uuid};else if(_&&_.isColor)h.uniforms[m]={type:"c",value:_.getHex()};else if(_&&_.isVector2)h.uniforms[m]={type:"v2",value:_.toArray()};else if(_&&_.isVector3)h.uniforms[m]={type:"v3",value:_.toArray()};else if(_&&_.isVector4)h.uniforms[m]={type:"v4",value:_.toArray()};else if(_&&_.isMatrix3)h.uniforms[m]={type:"m3",value:_.toArray()};else if(_&&_.isMatrix4)h.uniforms[m]={type:"m4",value:_.toArray()};else h.uniforms[m]={value:_}}if(Object.keys(this.defines).length>0)h.defines=this.defines;h.vertexShader=this.vertexShader,h.fragmentShader=this.fragmentShader,h.lights=this.lights,h.clipping=this.clipping;let p={};for(let m in this.extensions)if(this.extensions[m]===!0)p[m]=!0;if(Object.keys(p).length>0)h.extensions=p;return h}}class Zr extends Be{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=2000}copy(a,h){return super.copy(a,h),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this.projectionMatrixInverse.copy(a.projectionMatrixInverse),this.coordinateSystem=a.coordinateSystem,this}getWorldDirection(a){return super.getWorldDirection(a).negate()}updateMatrixWorld(a){super.updateMatrixWorld(a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(a,h){super.updateWorldMatrix(a,h),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var Hn=new X,Va=new St,Xa=new St;class Ve extends Zr{constructor(a=50,h=1,p=0.1,m=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=a,this.zoom=1,this.near=p,this.far=m,this.focus=10,this.aspect=h,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(a,h){return super.copy(a,h),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=a.view===null?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this}setFocalLength(a){let h=0.5*this.getFilmHeight()/a;this.fov=Zi*2*Math.atan(h),this.updateProjectionMatrix()}getFocalLength(){let a=Math.tan(Si*0.5*this.fov);return 0.5*this.getFilmHeight()/a}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Si*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(a,h,p){Hn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),h.set(Hn.x,Hn.y).multiplyScalar(-a/Hn.z),Hn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),p.set(Hn.x,Hn.y).multiplyScalar(-a/Hn.z)}getViewSize(a,h){return this.getViewBounds(a,Va,Xa),h.subVectors(Xa,Va)}setViewOffset(a,h,p,m,g,_){if(this.aspect=a/h,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let a=this.near,h=a*Math.tan(Si*0.5*this.fov)/this.zoom,p=2*h,m=this.aspect*p,g=-0.5*m,_=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:x,fullHeight:M}=_;g+=_.offsetX*m/x,h-=_.offsetY*p/M,m*=_.width/x,p*=_.height/M}let y=this.filmOffset;if(y!==0)g+=a*y/this.getFilmWidth();this.projectionMatrix.makePerspective(g,g+m,h,h-p,a,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){let h=super.toJSON(a);if(h.object.fov=this.fov,h.object.zoom=this.zoom,h.object.near=this.near,h.object.far=this.far,h.object.focus=this.focus,h.object.aspect=this.aspect,this.view!==null)h.object.view=Object.assign({},this.view);return h.object.filmGauge=this.filmGauge,h.object.filmOffset=this.filmOffset,h}}var gi=-90,_i=1;class Ho extends Be{constructor(a,h,p){super();this.type="CubeCamera",this.renderTarget=p,this.coordinateSystem=null,this.activeMipmapLevel=0;let m=new Ve(gi,_i,a,h);m.layers=this.layers,this.add(m);let g=new Ve(gi,_i,a,h);g.layers=this.layers,this.add(g);let _=new Ve(gi,_i,a,h);_.layers=this.layers,this.add(_);let y=new Ve(gi,_i,a,h);y.layers=this.layers,this.add(y);let x=new Ve(gi,_i,a,h);x.layers=this.layers,this.add(x);let M=new Ve(gi,_i,a,h);M.layers=this.layers,this.add(M)}updateCoordinateSystem(){let a=this.coordinateSystem,h=this.children.concat(),[p,m,g,_,y,x]=h;for(let M of h)this.remove(M);if(a===2000)p.up.set(0,1,0),p.lookAt(1,0,0),m.up.set(0,1,0),m.lookAt(-1,0,0),g.up.set(0,0,-1),g.lookAt(0,1,0),_.up.set(0,0,1),_.lookAt(0,-1,0),y.up.set(0,1,0),y.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(a===2001)p.up.set(0,-1,0),p.lookAt(-1,0,0),m.up.set(0,-1,0),m.lookAt(1,0,0),g.up.set(0,0,1),g.lookAt(0,1,0),_.up.set(0,0,-1),_.lookAt(0,-1,0),y.up.set(0,-1,0),y.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(let M of h)this.add(M),M.updateMatrixWorld()}update(a,h){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:p,activeMipmapLevel:m}=this;if(this.coordinateSystem!==a.coordinateSystem)this.coordinateSystem=a.coordinateSystem,this.updateCoordinateSystem();let[g,_,y,x,M,S]=this.children,E=a.getRenderTarget(),v=a.getActiveCubeFace(),b=a.getActiveMipmapLevel(),A=a.xr.enabled;a.xr.enabled=!1;let C=p.texture.generateMipmaps;p.texture.generateMipmaps=!1,a.setRenderTarget(p,0,m),a.render(h,g),a.setRenderTarget(p,1,m),a.render(h,_),a.setRenderTarget(p,2,m),a.render(h,y),a.setRenderTarget(p,3,m),a.render(h,x),a.setRenderTarget(p,4,m),a.render(h,M),p.texture.generateMipmaps=C,a.setRenderTarget(p,5,m),a.render(h,S),a.setRenderTarget(E,v,b),a.xr.enabled=A,p.texture.needsPMREMUpdate=!0}}class Jr extends Xe{constructor(a,h,p,m,g,_,y,x,M,S){a=a!==void 0?a:[],h=h!==void 0?h:301;super(a,h,p,m,g,_,y,x,M,S);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(a){this.image=a}}class ko extends Gn{constructor(a=1,h={}){super(a,a,h);this.isWebGLCubeRenderTarget=!0;let p={width:a,height:a,depth:1},m=[p,p,p,p,p,p];this.texture=new Jr(m,h.mapping,h.wrapS,h.wrapT,h.magFilter,h.minFilter,h.format,h.type,h.anisotropy,h.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=h.generateMipmaps!==void 0?h.generateMipmaps:!1,this.texture.minFilter=h.minFilter!==void 0?h.minFilter:1006}fromEquirectangularTexture(a,h){this.texture.type=h.type,this.texture.colorSpace=h.colorSpace,this.texture.generateMipmaps=h.generateMipmaps,this.texture.minFilter=h.minFilter,this.texture.magFilter=h.magFilter;let p={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},m=new ke(5,5,5),g=new In({name:"CubemapFromEquirect",uniforms:bi(p.uniforms),vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,side:1,blending:0});g.uniforms.tEquirect.value=h;let _=new he(m,g),y=h.minFilter;if(h.minFilter===1008)h.minFilter=1006;return new Ho(1,10,this).update(a,_),h.minFilter=y,_.geometry.dispose(),_.material.dispose(),this}clear(a,h,p,m){let g=a.getRenderTarget();for(let _=0;_<6;_++)a.setRenderTarget(this,_),a.clear(h,p,m);a.setRenderTarget(g)}}var Sr=new X,fc=new X,pc=new de;class _n{constructor(a=new X(1,0,0),h=0){this.isPlane=!0,this.normal=a,this.constant=h}set(a,h){return this.normal.copy(a),this.constant=h,this}setComponents(a,h,p,m){return this.normal.set(a,h,p),this.constant=m,this}setFromNormalAndCoplanarPoint(a,h){return this.normal.copy(a),this.constant=-h.dot(this.normal),this}setFromCoplanarPoints(a,h,p){let m=Sr.subVectors(p,h).cross(fc.subVectors(a,h)).normalize();return this.setFromNormalAndCoplanarPoint(m,a),this}copy(a){return this.normal.copy(a.normal),this.constant=a.constant,this}normalize(){let a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(a){return this.normal.dot(a)+this.constant}distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius}projectPoint(a,h){return h.copy(a).addScaledVector(this.normal,-this.distanceToPoint(a))}intersectLine(a,h){let p=a.delta(Sr),m=this.normal.dot(p);if(m===0){if(this.distanceToPoint(a.start)===0)return h.copy(a.start);return null}let g=-(a.start.dot(this.normal)+this.constant)/m;if(g<0||g>1)return null;return h.copy(a.start).addScaledVector(p,g)}intersectsLine(a){let h=this.distanceToPoint(a.start),p=this.distanceToPoint(a.end);return h<0&&p>0||p<0&&h>0}intersectsBox(a){return a.intersectsPlane(this)}intersectsSphere(a){return a.intersectsPlane(this)}coplanarPoint(a){return a.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(a,h){let p=h||pc.getNormalMatrix(a),m=this.coplanarPoint(Sr).applyMatrix4(a),g=this.normal.applyMatrix3(p).normalize();return this.constant=-m.dot(g),this}translate(a){return this.constant-=a.dot(this.normal),this}equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Kn=new ts,bs=new X;class Gs{constructor(a=new _n,h=new _n,p=new _n,m=new _n,g=new _n,_=new _n){this.planes=[a,h,p,m,g,_]}set(a,h,p,m,g,_){let y=this.planes;return y[0].copy(a),y[1].copy(h),y[2].copy(p),y[3].copy(m),y[4].copy(g),y[5].copy(_),this}copy(a){let h=this.planes;for(let p=0;p<6;p++)h[p].copy(a.planes[p]);return this}setFromProjectionMatrix(a,h=2000){let p=this.planes,m=a.elements,g=m[0],_=m[1],y=m[2],x=m[3],M=m[4],S=m[5],E=m[6],v=m[7],b=m[8],A=m[9],C=m[10],P=m[11],T=m[12],w=m[13],G=m[14],N=m[15];if(p[0].setComponents(x-g,v-M,P-b,N-T).normalize(),p[1].setComponents(x+g,v+M,P+b,N+T).normalize(),p[2].setComponents(x+_,v+S,P+A,N+w).normalize(),p[3].setComponents(x-_,v-S,P-A,N-w).normalize(),p[4].setComponents(x-y,v-E,P-C,N-G).normalize(),h===2000)p[5].setComponents(x+y,v+E,P+C,N+G).normalize();else if(h===2001)p[5].setComponents(y,E,C,G).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+h);return this}intersectsObject(a){if(a.boundingSphere!==void 0){if(a.boundingSphere===null)a.computeBoundingSphere();Kn.copy(a.boundingSphere).applyMatrix4(a.matrixWorld)}else{let h=a.geometry;if(h.boundingSphere===null)h.computeBoundingSphere();Kn.copy(h.boundingSphere).applyMatrix4(a.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(a){return Kn.center.set(0,0,0),Kn.radius=0.7071067811865476,Kn.applyMatrix4(a.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(a){let h=this.planes,p=a.center,m=-a.radius;for(let g=0;g<6;g++)if(h[g].distanceToPoint(p)<m)return!1;return!0}intersectsBox(a){let h=this.planes;for(let p=0;p<6;p++){let m=h[p];if(bs.x=m.normal.x>0?a.max.x:a.min.x,bs.y=m.normal.y>0?a.max.y:a.min.y,bs.z=m.normal.z>0?a.max.z:a.min.z,m.distanceToPoint(bs)<0)return!1}return!0}containsPoint(a){let h=this.planes;for(let p=0;p<6;p++)if(h[p].distanceToPoint(a)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Go(){let a=null,h=!1,p=null,m=null;function g(_,y){p(_,y),m=a.requestAnimationFrame(g)}return{start:function(){if(h===!0)return;if(p===null)return;m=a.requestAnimationFrame(g),h=!0},stop:function(){a.cancelAnimationFrame(m),h=!1},setAnimationLoop:function(_){p=_},setContext:function(_){a=_}}}function mc(a){let h=new WeakMap;function p(x,M){let{array:S,usage:E}=x,v=S.byteLength,b=a.createBuffer();a.bindBuffer(M,b),a.bufferData(M,S,E),x.onUploadCallback();let A;if(S instanceof Float32Array)A=a.FLOAT;else if(S instanceof Uint16Array)if(x.isFloat16BufferAttribute)A=a.HALF_FLOAT;else A=a.UNSIGNED_SHORT;else if(S instanceof Int16Array)A=a.SHORT;else if(S instanceof Uint32Array)A=a.UNSIGNED_INT;else if(S instanceof Int32Array)A=a.INT;else if(S instanceof Int8Array)A=a.BYTE;else if(S instanceof Uint8Array)A=a.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)A=a.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:b,type:A,bytesPerElement:S.BYTES_PER_ELEMENT,version:x.version,size:v}}function m(x,M,S){let{array:E,updateRanges:v}=M;if(a.bindBuffer(S,x),v.length===0)a.bufferSubData(S,0,E);else{v.sort((A,C)=>A.start-C.start);let b=0;for(let A=1;A<v.length;A++){let C=v[b],P=v[A];if(P.start<=C.start+C.count+1)C.count=Math.max(C.count,P.start+P.count-C.start);else++b,v[b]=P}v.length=b+1;for(let A=0,C=v.length;A<C;A++){let P=v[A];a.bufferSubData(S,P.start*E.BYTES_PER_ELEMENT,E,P.start,P.count)}M.clearUpdateRanges()}M.onUploadCallback()}function g(x){if(x.isInterleavedBufferAttribute)x=x.data;return h.get(x)}function _(x){if(x.isInterleavedBufferAttribute)x=x.data;let M=h.get(x);if(M)a.deleteBuffer(M.buffer),h.delete(x)}function y(x,M){if(x.isInterleavedBufferAttribute)x=x.data;if(x.isGLBufferAttribute){let E=h.get(x);if(!E||E.version<x.version)h.set(x,{buffer:x.buffer,type:x.type,bytesPerElement:x.elementSize,version:x.version});return}let S=h.get(x);if(S===void 0)h.set(x,p(x,M));else if(S.version<x.version){if(S.size!==x.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");m(S.buffer,x,M),S.version=x.version}}return{get:g,remove:_,update:y}}class wi extends qe{constructor(a=1,h=1,p=1,m=1){super();this.type="PlaneGeometry",this.parameters={width:a,height:h,widthSegments:p,heightSegments:m};let g=a/2,_=h/2,y=Math.floor(p),x=Math.floor(m),M=y+1,S=x+1,E=a/y,v=h/x,b=[],A=[],C=[],P=[];for(let T=0;T<S;T++){let w=T*v-_;for(let G=0;G<M;G++){let N=G*E-g;A.push(N,-w,0),C.push(0,0,1),P.push(G/y),P.push(1-T/x)}}for(let T=0;T<x;T++)for(let w=0;w<y;w++){let G=w+M*T,N=w+M*(T+1),H=w+1+M*(T+1),rt=w+1+M*T;b.push(G,N,rt),b.push(N,H,rt)}this.setIndex(b),this.setAttribute("position",new Se(A,3)),this.setAttribute("normal",new Se(C,3)),this.setAttribute("uv",new Se(P,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new wi(a.width,a.height,a.widthSegments,a.heightSegments)}}var gc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_c=`#ifdef USE_ALPHAHASH
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
#endif`,xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sc=`#ifdef USE_AOMAP
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
#endif`,Ec=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bc=`#ifdef USE_BATCHING
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
#endif`,Tc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ac=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cc=`#ifdef USE_IRIDESCENCE
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
#endif`,Pc=`#ifdef USE_BUMPMAP
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
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zc=`#define PI 3.141592653589793
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
} // validated`,Hc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kc=`vec3 transformedNormal = objectNormal;
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
#endif`,Gc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zc=`#ifdef USE_ENVMAP
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
#endif`,Jc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$c=`#ifdef USE_ENVMAP
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
#endif`,Kc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jc=`#ifdef USE_ENVMAP
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
#endif`,Qc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ih=`#ifdef USE_GRADIENTMAP
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
}`,sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oh=`uniform bool receiveShadow;
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
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fh=`PhysicalMaterial material;
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
#endif`,ph=`struct PhysicalMaterial {
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
}`,mh=`
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
#endif`;var gh=`#if defined( RE_IndirectDiffuse )
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
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Th=`#if defined( USE_POINTS_UV )
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
#endif`,wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ah=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ch=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ph=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ih=`#ifdef USE_MORPHTARGETS
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
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
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
#endif`,zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$h=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tu=`float getShadowMask() {
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
}`,eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nu=`#ifdef USE_SKINNING
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
#endif`,iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,su=`#ifdef USE_SKINNING
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
#endif`,ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ou=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cu=`#ifdef USE_TRANSMISSION
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
#endif`,hu=`#ifdef USE_TRANSMISSION
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
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gu=`uniform sampler2D t2D;
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
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mu=`#include <common>
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
}`,Su=`#if DEPTH_PACKING == 3200
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
}`,Eu=`#define DISTANCE
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
}`,bu=`#define DISTANCE
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
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`uniform float scale;
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
}`,Ru=`uniform vec3 diffuse;
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
}`,Cu=`#include <common>
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
}`,Pu=`uniform vec3 diffuse;
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
}`,Iu=`#define LAMBERT
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
}`,Du=`#define LAMBERT
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
}`,Lu=`#define MATCAP
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
}`,Uu=`#define MATCAP
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
}`,Nu=`#define NORMAL
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
}`,Fu=`#define NORMAL
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
}`,Ou=`#define PHONG
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
}`,Bu=`#define PHONG
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
}`,zu=`#define STANDARD
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
}`,Hu=`#define STANDARD
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
}`,ku=`#define TOON
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
}`,Gu=`#define TOON
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
}`,Wu=`uniform float size;
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
}`,Vu=`uniform vec3 diffuse;
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
}`,Xu=`#include <common>
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
}`,qu=`uniform vec3 color;
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
}`,Yu=`uniform float rotation;
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
}`,Zu=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:gc,alphahash_pars_fragment:_c,alphamap_fragment:xc,alphamap_pars_fragment:yc,alphatest_fragment:vc,alphatest_pars_fragment:Mc,aomap_fragment:Sc,aomap_pars_fragment:Ec,batching_pars_vertex:bc,batching_vertex:Tc,begin_vertex:wc,beginnormal_vertex:Ac,bsdfs:Rc,iridescence_fragment:Cc,bumpmap_pars_fragment:Pc,clipping_planes_fragment:Ic,clipping_planes_pars_fragment:Dc,clipping_planes_pars_vertex:Lc,clipping_planes_vertex:Uc,color_fragment:Nc,color_pars_fragment:Fc,color_pars_vertex:Oc,color_vertex:Bc,common:zc,cube_uv_reflection_fragment:Hc,defaultnormal_vertex:kc,displacementmap_pars_vertex:Gc,displacementmap_vertex:Wc,emissivemap_fragment:Vc,emissivemap_pars_fragment:Xc,colorspace_fragment:qc,colorspace_pars_fragment:Yc,envmap_fragment:Zc,envmap_common_pars_fragment:Jc,envmap_pars_fragment:$c,envmap_pars_vertex:Kc,envmap_physical_pars_fragment:lh,envmap_vertex:jc,fog_vertex:Qc,fog_pars_vertex:th,fog_fragment:eh,fog_pars_fragment:nh,gradientmap_pars_fragment:ih,lightmap_pars_fragment:sh,lights_lambert_fragment:rh,lights_lambert_pars_fragment:ah,lights_pars_begin:oh,lights_toon_fragment:ch,lights_toon_pars_fragment:hh,lights_phong_fragment:uh,lights_phong_pars_fragment:dh,lights_physical_fragment:fh,lights_physical_pars_fragment:ph,lights_fragment_begin:mh,lights_fragment_maps:gh,lights_fragment_end:_h,logdepthbuf_fragment:xh,logdepthbuf_pars_fragment:yh,logdepthbuf_pars_vertex:vh,logdepthbuf_vertex:Mh,map_fragment:Sh,map_pars_fragment:Eh,map_particle_fragment:bh,map_particle_pars_fragment:Th,metalnessmap_fragment:wh,metalnessmap_pars_fragment:Ah,morphinstance_vertex:Rh,morphcolor_vertex:Ch,morphnormal_vertex:Ph,morphtarget_pars_vertex:Ih,morphtarget_vertex:Dh,normal_fragment_begin:Lh,normal_fragment_maps:Uh,normal_pars_fragment:Nh,normal_pars_vertex:Fh,normal_vertex:Oh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:zh,clearcoat_normal_fragment_maps:Hh,clearcoat_pars_fragment:kh,iridescence_pars_fragment:Gh,opaque_fragment:Wh,packing:Vh,premultiplied_alpha_fragment:Xh,project_vertex:qh,dithering_fragment:Yh,dithering_pars_fragment:Zh,roughnessmap_fragment:Jh,roughnessmap_pars_fragment:$h,shadowmap_pars_fragment:Kh,shadowmap_pars_vertex:jh,shadowmap_vertex:Qh,shadowmask_pars_fragment:tu,skinbase_vertex:eu,skinning_pars_vertex:nu,skinning_vertex:iu,skinnormal_vertex:su,specularmap_fragment:ru,specularmap_pars_fragment:au,tonemapping_fragment:ou,tonemapping_pars_fragment:lu,transmission_fragment:cu,transmission_pars_fragment:hu,uv_pars_fragment:uu,uv_pars_vertex:du,uv_vertex:fu,worldpos_vertex:pu,background_vert:mu,background_frag:gu,backgroundCube_vert:_u,backgroundCube_frag:xu,cube_vert:yu,cube_frag:vu,depth_vert:Mu,depth_frag:Su,distanceRGBA_vert:Eu,distanceRGBA_frag:bu,equirect_vert:Tu,equirect_frag:wu,linedashed_vert:Au,linedashed_frag:Ru,meshbasic_vert:Cu,meshbasic_frag:Pu,meshlambert_vert:Iu,meshlambert_frag:Du,meshmatcap_vert:Lu,meshmatcap_frag:Uu,meshnormal_vert:Nu,meshnormal_frag:Fu,meshphong_vert:Ou,meshphong_frag:Bu,meshphysical_vert:zu,meshphysical_frag:Hu,meshtoon_vert:ku,meshtoon_frag:Gu,points_vert:Wu,points_frag:Vu,shadow_vert:Xu,shadow_frag:qu,sprite_vert:Yu,sprite_frag:Zu},Ut={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new St(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},xn={basic:{uniforms:We([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:We([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new pe(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:We([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:We([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:We([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new pe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:We([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:We([Ut.points,Ut.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:We([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:We([Ut.common,Ut.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:We([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:We([Ut.sprite,Ut.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:We([Ut.common,Ut.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:We([Ut.lights,Ut.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};xn.physical={uniforms:We([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Ts={r:0,b:0,g:0},jn=new yn,Ju=new Ae;function $u(a,h,p,m,g,_,y){let x=new pe(0),M=_===!0?0:1,S,E,v=null,b=0,A=null;function C(G){let N=G.isScene===!0?G.background:null;if(N&&N.isTexture)N=(G.backgroundBlurriness>0?p:h).get(N);return N}function P(G){let N=!1,H=C(G);if(H===null)w(x,M);else if(H&&H.isColor)w(H,1),N=!0;let rt=a.xr.getEnvironmentBlendMode();if(rt==="additive")m.buffers.color.setClear(0,0,0,1,y);else if(rt==="alpha-blend")m.buffers.color.setClear(0,0,0,0,y);if(a.autoClear||N)m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil)}function T(G,N){let H=C(N);if(H&&(H.isCubeTexture||H.mapping===306)){if(E===void 0)E=new he(new ke(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:bi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(rt,V,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),g.update(E);if(jn.copy(N.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1)jn.y*=-1,jn.z*=-1;if(E.material.uniforms.envMap.value=H,E.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(Ju.makeRotationFromEuler(jn)),E.material.toneMapped=ge.getTransfer(H.colorSpace)!=="srgb",v!==H||b!==H.version||A!==a.toneMapping)E.material.needsUpdate=!0,v=H,b=H.version,A=a.toneMapping;E.layers.enableAll(),G.unshift(E,E.geometry,E.material,0,0,null)}else if(H&&H.isTexture){if(S===void 0)S=new he(new wi(2,2),new In({name:"BackgroundMaterial",uniforms:bi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),Object.defineProperty(S.material,"map",{get:function(){return this.uniforms.t2D.value}}),g.update(S);if(S.material.uniforms.t2D.value=H,S.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,S.material.toneMapped=ge.getTransfer(H.colorSpace)!=="srgb",H.matrixAutoUpdate===!0)H.updateMatrix();if(S.material.uniforms.uvTransform.value.copy(H.matrix),v!==H||b!==H.version||A!==a.toneMapping)S.material.needsUpdate=!0,v=H,b=H.version,A=a.toneMapping;S.layers.enableAll(),G.unshift(S,S.geometry,S.material,0,0,null)}}function w(G,N){G.getRGB(Ts,zo(a)),m.buffers.color.setClear(Ts.r,Ts.g,Ts.b,N,y)}return{getClearColor:function(){return x},setClearColor:function(G,N=1){x.set(G),M=N,w(x,M)},getClearAlpha:function(){return M},setClearAlpha:function(G){M=G,w(x,M)},render:P,addToRenderList:T}}function Ku(a,h){let p=a.getParameter(a.MAX_VERTEX_ATTRIBS),m={},g=b(null),_=g,y=!1;function x(B,j,at,ot,ht){let ft=!1,Z=v(ot,at,j);if(_!==Z)_=Z,S(_.object);if(ft=A(B,ot,at,ht),ft)C(B,ot,at,ht);if(ht!==null)h.update(ht,a.ELEMENT_ARRAY_BUFFER);if(ft||y){if(y=!1,H(B,j,at,ot),ht!==null)a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.get(ht).buffer)}}function M(){return a.createVertexArray()}function S(B){return a.bindVertexArray(B)}function E(B){return a.deleteVertexArray(B)}function v(B,j,at){let ot=at.wireframe===!0,ht=m[B.id];if(ht===void 0)ht={},m[B.id]=ht;let ft=ht[j.id];if(ft===void 0)ft={},ht[j.id]=ft;let Z=ft[ot];if(Z===void 0)Z=b(M()),ft[ot]=Z;return Z}function b(B){let j=[],at=[],ot=[];for(let ht=0;ht<p;ht++)j[ht]=0,at[ht]=0,ot[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:at,attributeDivisors:ot,object:B,attributes:{},index:null}}function A(B,j,at,ot){let ht=_.attributes,ft=j.attributes,Z=0,st=at.getAttributes();for(let Y in st)if(st[Y].location>=0){let U=ht[Y],Wt=ft[Y];if(Wt===void 0){if(Y==="instanceMatrix"&&B.instanceMatrix)Wt=B.instanceMatrix;if(Y==="instanceColor"&&B.instanceColor)Wt=B.instanceColor}if(U===void 0)return!0;if(U.attribute!==Wt)return!0;if(Wt&&U.data!==Wt.data)return!0;Z++}if(_.attributesNum!==Z)return!0;if(_.index!==ot)return!0;return!1}function C(B,j,at,ot){let ht={},ft=j.attributes,Z=0,st=at.getAttributes();for(let Y in st)if(st[Y].location>=0){let U=ft[Y];if(U===void 0){if(Y==="instanceMatrix"&&B.instanceMatrix)U=B.instanceMatrix;if(Y==="instanceColor"&&B.instanceColor)U=B.instanceColor}let Wt={};if(Wt.attribute=U,U&&U.data)Wt.data=U.data;ht[Y]=Wt,Z++}_.attributes=ht,_.attributesNum=Z,_.index=ot}function P(){let B=_.newAttributes;for(let j=0,at=B.length;j<at;j++)B[j]=0}function T(B){w(B,0)}function w(B,j){let at=_.newAttributes,ot=_.enabledAttributes,ht=_.attributeDivisors;if(at[B]=1,ot[B]===0)a.enableVertexAttribArray(B),ot[B]=1;if(ht[B]!==j)a.vertexAttribDivisor(B,j),ht[B]=j}function G(){let B=_.newAttributes,j=_.enabledAttributes;for(let at=0,ot=j.length;at<ot;at++)if(j[at]!==B[at])a.disableVertexAttribArray(at),j[at]=0}function N(B,j,at,ot,ht,ft,Z){if(Z===!0)a.vertexAttribIPointer(B,j,at,ht,ft);else a.vertexAttribPointer(B,j,at,ot,ht,ft)}function H(B,j,at,ot){P();let ht=ot.attributes,ft=at.getAttributes(),Z=j.defaultAttributeValues;for(let st in ft){let Y=ft[st];if(Y.location>=0){let Ct=ht[st];if(Ct===void 0){if(st==="instanceMatrix"&&B.instanceMatrix)Ct=B.instanceMatrix;if(st==="instanceColor"&&B.instanceColor)Ct=B.instanceColor}if(Ct!==void 0){let U=Ct.normalized,Wt=Ct.itemSize,jt=h.get(Ct);if(jt===void 0)continue;let{buffer:dt,type:Et,bytesPerElement:Yt}=jt,Gt=Et===a.INT||Et===a.UNSIGNED_INT||Ct.gpuType===1013;if(Ct.isInterleavedBufferAttribute){let Pt=Ct.data,te=Pt.stride,ce=Ct.offset;if(Pt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Y.locationSize;Qt++)w(Y.location+Qt,Pt.meshPerAttribute);if(B.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0)ot._maxInstanceCount=Pt.meshPerAttribute*Pt.count}else for(let Qt=0;Qt<Y.locationSize;Qt++)T(Y.location+Qt);a.bindBuffer(a.ARRAY_BUFFER,dt);for(let Qt=0;Qt<Y.locationSize;Qt++)N(Y.location+Qt,Wt/Y.locationSize,Et,U,te*Yt,(ce+Wt/Y.locationSize*Qt)*Yt,Gt)}else{if(Ct.isInstancedBufferAttribute){for(let Pt=0;Pt<Y.locationSize;Pt++)w(Y.location+Pt,Ct.meshPerAttribute);if(B.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0)ot._maxInstanceCount=Ct.meshPerAttribute*Ct.count}else for(let Pt=0;Pt<Y.locationSize;Pt++)T(Y.location+Pt);a.bindBuffer(a.ARRAY_BUFFER,dt);for(let Pt=0;Pt<Y.locationSize;Pt++)N(Y.location+Pt,Wt/Y.locationSize,Et,U,Wt*Yt,Wt/Y.locationSize*Pt*Yt,Gt)}}else if(Z!==void 0){let U=Z[st];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(Y.location,U);break;case 3:a.vertexAttrib3fv(Y.location,U);break;case 4:a.vertexAttrib4fv(Y.location,U);break;default:a.vertexAttrib1fv(Y.location,U)}}}}G()}function rt(){ct();for(let B in m){let j=m[B];for(let at in j){let ot=j[at];for(let ht in ot)E(ot[ht].object),delete ot[ht];delete j[at]}delete m[B]}}function V(B){if(m[B.id]===void 0)return;let j=m[B.id];for(let at in j){let ot=j[at];for(let ht in ot)E(ot[ht].object),delete ot[ht];delete j[at]}delete m[B.id]}function q(B){for(let j in m){let at=m[j];if(at[B.id]===void 0)continue;let ot=at[B.id];for(let ht in ot)E(ot[ht].object),delete ot[ht];delete at[B.id]}}function ct(){if(O(),y=!0,_===g)return;_=g,S(_.object)}function O(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:x,reset:ct,resetDefaultState:O,dispose:rt,releaseStatesOfGeometry:V,releaseStatesOfProgram:q,initAttributes:P,enableAttribute:T,disableUnusedAttributes:G}}function ju(a,h,p){let m;function g(S){m=S}function _(S,E){a.drawArrays(m,S,E),p.update(E,m,1)}function y(S,E,v){if(v===0)return;a.drawArraysInstanced(m,S,E,v),p.update(E,m,v)}function x(S,E,v){if(v===0)return;h.get("WEBGL_multi_draw").multiDrawArraysWEBGL(m,S,0,E,0,v);let A=0;for(let C=0;C<v;C++)A+=E[C];p.update(A,m,1)}function M(S,E,v,b){if(v===0)return;let A=h.get("WEBGL_multi_draw");if(A===null)for(let C=0;C<S.length;C++)y(S[C],E[C],b[C]);else{A.multiDrawArraysInstancedWEBGL(m,S,0,E,0,b,0,v);let C=0;for(let P=0;P<v;P++)C+=E[P]*b[P];p.update(C,m,1)}}this.setMode=g,this.render=_,this.renderInstances=y,this.renderMultiDraw=x,this.renderMultiDrawInstances=M}function Qu(a,h,p,m){let g;function _(){if(g!==void 0)return g;if(h.has("EXT_texture_filter_anisotropic")===!0){let q=h.get("EXT_texture_filter_anisotropic");g=a.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function y(q){if(q!==1023&&m.convert(q)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function x(q){let ct=q===1016&&(h.has("EXT_color_buffer_half_float")||h.has("EXT_color_buffer_float"));if(q!==1009&&m.convert(q)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&q!==1015&&!ct)return!1;return!0}function M(q){if(q==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";q="mediump"}if(q==="mediump"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let S=p.precision!==void 0?p.precision:"highp",E=M(S);if(E!==S)console.warn("THREE.WebGLRenderer:",S,"not supported, using",E,"instead."),S=E;let v=p.logarithmicDepthBuffer===!0,b=p.reverseDepthBuffer===!0&&h.has("EXT_clip_control"),A=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=a.getParameter(a.MAX_TEXTURE_SIZE),T=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),w=a.getParameter(a.MAX_VERTEX_ATTRIBS),G=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),N=a.getParameter(a.MAX_VARYING_VECTORS),H=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),rt=C>0,V=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:_,getMaxPrecision:M,textureFormatReadable:y,textureTypeReadable:x,precision:S,logarithmicDepthBuffer:v,reverseDepthBuffer:b,maxTextures:A,maxVertexTextures:C,maxTextureSize:P,maxCubemapSize:T,maxAttributes:w,maxVertexUniforms:G,maxVaryings:N,maxFragmentUniforms:H,vertexTextures:rt,maxSamples:V}}function td(a){let h=this,p=null,m=0,g=!1,_=!1,y=new _n,x=new de,M={value:null,needsUpdate:!1};this.uniform=M,this.numPlanes=0,this.numIntersection=0,this.init=function(v,b){let A=v.length!==0||b||m!==0||g;return g=b,m=v.length,A},this.beginShadows=function(){_=!0,E(null)},this.endShadows=function(){_=!1},this.setGlobalState=function(v,b){p=E(v,b,0)},this.setState=function(v,b,A){let{clippingPlanes:C,clipIntersection:P,clipShadows:T}=v,w=a.get(v);if(!g||C===null||C.length===0||_&&!T)if(_)E(null);else S();else{let G=_?0:m,N=G*4,H=w.clippingState||null;M.value=H,H=E(C,b,N,A);for(let rt=0;rt!==N;++rt)H[rt]=p[rt];w.clippingState=H,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=G}};function S(){if(M.value!==p)M.value=p,M.needsUpdate=m>0;h.numPlanes=m,h.numIntersection=0}function E(v,b,A,C){let P=v!==null?v.length:0,T=null;if(P!==0){if(T=M.value,C!==!0||T===null){let w=A+P*4,G=b.matrixWorldInverse;if(x.getNormalMatrix(G),T===null||T.length<w)T=new Float32Array(w);for(let N=0,H=A;N!==P;++N,H+=4)y.copy(v[N]).applyMatrix4(G,x),y.normal.toArray(T,H),T[H+3]=y.constant}M.value=T,M.needsUpdate=!0}return h.numPlanes=P,h.numIntersection=0,T}}function ed(a){let h=new WeakMap;function p(y,x){if(x===303)y.mapping=301;else if(x===304)y.mapping=302;return y}function m(y){if(y&&y.isTexture){let x=y.mapping;if(x===303||x===304)if(h.has(y)){let M=h.get(y).texture;return p(M,y.mapping)}else{let M=y.image;if(M&&M.height>0){let S=new ko(M.height);return S.fromEquirectangularTexture(a,y),h.set(y,S),y.addEventListener("dispose",g),p(S.texture,y.mapping)}else return null}}return y}function g(y){let x=y.target;x.removeEventListener("dispose",g);let M=h.get(x);if(M!==void 0)h.delete(x),M.dispose()}function _(){h=new WeakMap}return{get:m,dispose:_}}class ns extends Zr{constructor(a=-1,h=1,p=1,m=-1,g=0.1,_=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=a,this.right=h,this.top=p,this.bottom=m,this.near=g,this.far=_,this.updateProjectionMatrix()}copy(a,h){return super.copy(a,h),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this.view=a.view===null?null:Object.assign({},a.view),this}setViewOffset(a,h,p,m,g,_){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let a=(this.right-this.left)/(2*this.zoom),h=(this.top-this.bottom)/(2*this.zoom),p=(this.right+this.left)/2,m=(this.top+this.bottom)/2,g=p-a,_=p+a,y=m+h,x=m-h;if(this.view!==null&&this.view.enabled){let M=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;g+=M*this.view.offsetX,_=g+M*this.view.width,y-=S*this.view.offsetY,x=y-S*this.view.height}this.projectionMatrix.makeOrthographic(g,_,y,x,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){let h=super.toJSON(a);if(h.object.zoom=this.zoom,h.object.left=this.left,h.object.right=this.right,h.object.top=this.top,h.object.bottom=this.bottom,h.object.near=this.near,h.object.far=this.far,this.view!==null)h.object.view=Object.assign({},this.view);return h}}var vi=4,qa=[0.125,0.215,0.35,0.446,0.526,0.582],ei=20,Er=new ns,Ya=new pe,br=null,Tr=0,wr=0,Ar=!1,ti=(1+Math.sqrt(5))/2,xi=1/ti,Za=[new X(-ti,xi,0),new X(ti,xi,0),new X(-xi,0,ti),new X(xi,0,ti),new X(0,ti,-xi),new X(0,ti,xi),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Ji{constructor(a){this._renderer=a,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(a,h=0,p=0.1,m=100){br=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let g=this._allocateTargets();if(g.depthBuffer=!0,this._sceneToCubeUV(a,p,m,g),h>0)this._blur(g,0,0,h);return this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(a,h=null){return this._fromTexture(a,h)}fromCubemap(a,h=null){return this._fromTexture(a,h)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(a){this._lodMax=Math.floor(Math.log2(a)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let a=0;a<this._lodPlanes.length;a++)this._lodPlanes[a].dispose()}_cleanup(a){this._renderer.setRenderTarget(br,Tr,wr),this._renderer.xr.enabled=Ar,a.scissorTest=!1,ws(a,0,0,a.width,a.height)}_fromTexture(a,h){if(a.mapping===301||a.mapping===302)this._setSize(a.image.length===0?16:a.image[0].width||a.image[0].image.width);else this._setSize(a.image.width/4);br=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let p=h||this._allocateTargets();return this._textureToCubeUV(a,p),this._applyPMREM(p),this._cleanup(p),p}_allocateTargets(){let a=3*Math.max(this._cubeSize,112),h=4*this._cubeSize,p={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},m=Ja(a,h,p);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==a||this._pingPongRenderTarget.height!==h){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Ja(a,h,p);let{_lodMax:g}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nd(g)),this._blurMaterial=id(g,a,h)}return m}_compileMaterial(a){let h=new he(this._lodPlanes[0],a);this._renderer.compile(h,Er)}_sceneToCubeUV(a,h,p,m){let y=new Ve(90,1,h,p),x=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],S=this._renderer,{autoClear:E,toneMapping:v}=S;S.getClearColor(Ya),S.toneMapping=0,S.autoClear=!1;let b=new es({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),A=new he(new ke,b),C=!1,P=a.background;if(P){if(P.isColor)b.color.copy(P),a.background=null,C=!0}else b.color.copy(Ya),C=!0;for(let T=0;T<6;T++){let w=T%3;if(w===0)y.up.set(0,x[T],0),y.lookAt(M[T],0,0);else if(w===1)y.up.set(0,0,x[T]),y.lookAt(0,M[T],0);else y.up.set(0,x[T],0),y.lookAt(0,0,M[T]);let G=this._cubeSize;if(ws(m,w*G,T>2?G:0,G,G),S.setRenderTarget(m),C)S.render(A,y);S.render(a,y)}A.geometry.dispose(),A.material.dispose(),S.toneMapping=v,S.autoClear=E,a.background=P}_textureToCubeUV(a,h){let p=this._renderer,m=a.mapping===301||a.mapping===302;if(m){if(this._cubemapMaterial===null)this._cubemapMaterial=Ka();this._cubemapMaterial.uniforms.flipEnvMap.value=a.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=$a();let g=m?this._cubemapMaterial:this._equirectMaterial,_=new he(this._lodPlanes[0],g),y=g.uniforms;y.envMap.value=a;let x=this._cubeSize;ws(h,0,0,3*x,2*x),p.setRenderTarget(h),p.render(_,Er)}_applyPMREM(a){let h=this._renderer,p=h.autoClear;h.autoClear=!1;let m=this._lodPlanes.length;for(let g=1;g<m;g++){let _=Math.sqrt(this._sigmas[g]*this._sigmas[g]-this._sigmas[g-1]*this._sigmas[g-1]),y=Za[(m-g-1)%Za.length];this._blur(a,g-1,g,_,y)}h.autoClear=p}_blur(a,h,p,m,g){let _=this._pingPongRenderTarget;this._halfBlur(a,_,h,p,m,"latitudinal",g),this._halfBlur(_,a,p,p,m,"longitudinal",g)}_halfBlur(a,h,p,m,g,_,y){let x=this._renderer,M=this._blurMaterial;if(_!=="latitudinal"&&_!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let S=3,E=new he(this._lodPlanes[m],M),v=M.uniforms,b=this._sizeLods[p]-1,A=isFinite(g)?Math.PI/(2*b):2*Math.PI/(2*ei-1),C=g/A,P=isFinite(g)?1+Math.floor(S*C):ei;if(P>ei)console.warn(`sigmaRadians, ${g}, is too large and will clip, as it requested ${P} samples when the maximum is set to ${ei}`);let T=[],w=0;for(let V=0;V<ei;++V){let q=V/C,ct=Math.exp(-q*q/2);if(T.push(ct),V===0)w+=ct;else if(V<P)w+=2*ct}for(let V=0;V<T.length;V++)T[V]=T[V]/w;if(v.envMap.value=a.texture,v.samples.value=P,v.weights.value=T,v.latitudinal.value=_==="latitudinal",y)v.poleAxis.value=y;let{_lodMax:G}=this;v.dTheta.value=A,v.mipInt.value=G-p;let N=this._sizeLods[m],H=3*N*(m>G-vi?m-G+vi:0),rt=4*(this._cubeSize-N);ws(h,H,rt,3*N,2*N),x.setRenderTarget(h),x.render(E,Er)}}function nd(a){let h=[],p=[],m=[],g=a,_=a-vi+1+qa.length;for(let y=0;y<_;y++){let x=Math.pow(2,g);p.push(x);let M=1/x;if(y>a-vi)M=qa[y-a+vi-1];else if(y===0)M=0;m.push(M);let S=1/(x-2),E=-S,v=1+S,b=[E,E,v,E,v,v,E,E,v,v,E,v],A=6,C=6,P=3,T=2,w=1,G=new Float32Array(P*C*A),N=new Float32Array(T*C*A),H=new Float32Array(w*C*A);for(let V=0;V<A;V++){let q=V%3*2/3-1,ct=V>2?0:-1,O=[q,ct,0,q+0.6666666666666666,ct,0,q+0.6666666666666666,ct+1,0,q,ct,0,q+0.6666666666666666,ct+1,0,q,ct+1,0];G.set(O,P*C*V),N.set(b,T*C*V);let B=[V,V,V,V,V,V];H.set(B,w*C*V)}let rt=new qe;if(rt.setAttribute("position",new un(G,P)),rt.setAttribute("uv",new un(N,T)),rt.setAttribute("faceIndex",new un(H,w)),h.push(rt),g>vi)g--}return{lodPlanes:h,sizeLods:p,sigmas:m}}function Ja(a,h,p){let m=new Gn(a,h,p);return m.texture.mapping=306,m.texture.name="PMREM.cubeUv",m.scissorTest=!0,m}function ws(a,h,p,m,g){a.viewport.set(h,p,m,g),a.scissor.set(h,p,m,g)}function id(a,h,p){let m=new Float32Array(ei),g=new X(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/h,CUBEUV_TEXEL_HEIGHT:1/p,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:m},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:g}},vertexShader:$r(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $a(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ka(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $r(){return`

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
	`}function sd(a){let h=new WeakMap,p=null;function m(x){if(x&&x.isTexture){let M=x.mapping,S=M===303||M===304,E=M===301||M===302;if(S||E){let v=h.get(x),b=v!==void 0?v.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==b){if(p===null)p=new Ji(a);return v=S?p.fromEquirectangular(x,v):p.fromCubemap(x,v),v.texture.pmremVersion=x.pmremVersion,h.set(x,v),v.texture}else if(v!==void 0)return v.texture;else{let A=x.image;if(S&&A&&A.height>0||E&&A&&g(A)){if(p===null)p=new Ji(a);return v=S?p.fromEquirectangular(x):p.fromCubemap(x),v.texture.pmremVersion=x.pmremVersion,h.set(x,v),x.addEventListener("dispose",_),v.texture}else return null}}}return x}function g(x){let M=0,S=6;for(let E=0;E<S;E++)if(x[E]!==void 0)M++;return M===S}function _(x){let M=x.target;M.removeEventListener("dispose",_);let S=h.get(M);if(S!==void 0)h.delete(M),S.dispose()}function y(){if(h=new WeakMap,p!==null)p.dispose(),p=null}return{get:m,dispose:y}}function rd(a){let h={};function p(m){if(h[m]!==void 0)return h[m];let g;switch(m){case"WEBGL_depth_texture":g=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":g=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":g=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":g=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:g=a.getExtension(m)}return h[m]=g,g}return{has:function(m){return p(m)!==null},init:function(){p("EXT_color_buffer_float"),p("WEBGL_clip_cull_distance"),p("OES_texture_float_linear"),p("EXT_color_buffer_half_float"),p("WEBGL_multisampled_render_to_texture"),p("WEBGL_render_shared_exponent")},get:function(m){let g=p(m);if(g===null)Gi("THREE.WebGLRenderer: "+m+" extension not supported.");return g}}}function ad(a,h,p,m){let g={},_=new WeakMap;function y(v){let b=v.target;if(b.index!==null)h.remove(b.index);for(let C in b.attributes)h.remove(b.attributes[C]);for(let C in b.morphAttributes){let P=b.morphAttributes[C];for(let T=0,w=P.length;T<w;T++)h.remove(P[T])}b.removeEventListener("dispose",y),delete g[b.id];let A=_.get(b);if(A)h.remove(A),_.delete(b);if(m.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0)delete b._maxInstanceCount;p.memory.geometries--}function x(v,b){if(g[b.id]===!0)return b;return b.addEventListener("dispose",y),g[b.id]=!0,p.memory.geometries++,b}function M(v){let b=v.attributes;for(let C in b)h.update(b[C],a.ARRAY_BUFFER);let A=v.morphAttributes;for(let C in A){let P=A[C];for(let T=0,w=P.length;T<w;T++)h.update(P[T],a.ARRAY_BUFFER)}}function S(v){let b=[],A=v.index,C=v.attributes.position,P=0;if(A!==null){let G=A.array;P=A.version;for(let N=0,H=G.length;N<H;N+=3){let rt=G[N+0],V=G[N+1],q=G[N+2];b.push(rt,V,V,q,q,rt)}}else if(C!==void 0){let G=C.array;P=C.version;for(let N=0,H=G.length/3-1;N<H;N+=3){let rt=N+0,V=N+1,q=N+2;b.push(rt,V,V,q,q,rt)}}else return;let T=new((Uo(b))?Yr:qr)(b,1);T.version=P;let w=_.get(v);if(w)h.remove(w);_.set(v,T)}function E(v){let b=_.get(v);if(b){let A=v.index;if(A!==null){if(b.version<A.version)S(v)}}else S(v);return _.get(v)}return{get:x,update:M,getWireframeAttribute:E}}function od(a,h,p){let m;function g(b){m=b}let _,y;function x(b){_=b.type,y=b.bytesPerElement}function M(b,A){a.drawElements(m,A,_,b*y),p.update(A,m,1)}function S(b,A,C){if(C===0)return;a.drawElementsInstanced(m,A,_,b*y,C),p.update(A,m,C)}function E(b,A,C){if(C===0)return;h.get("WEBGL_multi_draw").multiDrawElementsWEBGL(m,A,0,_,b,0,C);let T=0;for(let w=0;w<C;w++)T+=A[w];p.update(T,m,1)}function v(b,A,C,P){if(C===0)return;let T=h.get("WEBGL_multi_draw");if(T===null)for(let w=0;w<b.length;w++)S(b[w]/y,A[w],P[w]);else{T.multiDrawElementsInstancedWEBGL(m,A,0,_,b,0,P,0,C);let w=0;for(let G=0;G<C;G++)w+=A[G]*P[G];p.update(w,m,1)}}this.setMode=g,this.setIndex=x,this.render=M,this.renderInstances=S,this.renderMultiDraw=E,this.renderMultiDrawInstances=v}function ld(a){let h={geometries:0,textures:0},p={frame:0,calls:0,triangles:0,points:0,lines:0};function m(_,y,x){switch(p.calls++,y){case a.TRIANGLES:p.triangles+=x*(_/3);break;case a.LINES:p.lines+=x*(_/2);break;case a.LINE_STRIP:p.lines+=x*(_-1);break;case a.LINE_LOOP:p.lines+=x*_;break;case a.POINTS:p.points+=x*_;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",y);break}}function g(){p.calls=0,p.triangles=0,p.points=0,p.lines=0}return{memory:h,render:p,programs:null,autoReset:!0,reset:g,update:m}}function cd(a,h,p){let m=new WeakMap,g=new Me;function _(y,x,M){let S=y.morphTargetInfluences,E=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,v=E!==void 0?E.length:0,b=m.get(x);if(b===void 0||b.count!==v){let O=function(){q.dispose(),m.delete(x),x.removeEventListener("dispose",O)};if(b!==void 0)b.texture.dispose();let A=x.morphAttributes.position!==void 0,C=x.morphAttributes.normal!==void 0,P=x.morphAttributes.color!==void 0,T=x.morphAttributes.position||[],w=x.morphAttributes.normal||[],G=x.morphAttributes.color||[],N=0;if(A===!0)N=1;if(C===!0)N=2;if(P===!0)N=3;let H=x.attributes.position.count*N,rt=1;if(H>h.maxTextureSize)rt=Math.ceil(H/h.maxTextureSize),H=h.maxTextureSize;let V=new Float32Array(H*rt*4*v),q=new Xr(V,H,rt,v);q.type=1015,q.needsUpdate=!0;let ct=N*4;for(let B=0;B<v;B++){let j=T[B],at=w[B],ot=G[B],ht=H*rt*4*B;for(let ft=0;ft<j.count;ft++){let Z=ft*ct;if(A===!0)g.fromBufferAttribute(j,ft),V[ht+Z+0]=g.x,V[ht+Z+1]=g.y,V[ht+Z+2]=g.z,V[ht+Z+3]=0;if(C===!0)g.fromBufferAttribute(at,ft),V[ht+Z+4]=g.x,V[ht+Z+5]=g.y,V[ht+Z+6]=g.z,V[ht+Z+7]=0;if(P===!0)g.fromBufferAttribute(ot,ft),V[ht+Z+8]=g.x,V[ht+Z+9]=g.y,V[ht+Z+10]=g.z,V[ht+Z+11]=ot.itemSize===4?g.w:1}}b={count:v,texture:q,size:new St(H,rt)},m.set(x,b),x.addEventListener("dispose",O)}if(y.isInstancedMesh===!0&&y.morphTexture!==null)M.getUniforms().setValue(a,"morphTexture",y.morphTexture,p);else{let A=0;for(let P=0;P<S.length;P++)A+=S[P];let C=x.morphTargetsRelative?1:1-A;M.getUniforms().setValue(a,"morphTargetBaseInfluence",C),M.getUniforms().setValue(a,"morphTargetInfluences",S)}M.getUniforms().setValue(a,"morphTargetsTexture",b.texture,p),M.getUniforms().setValue(a,"morphTargetsTextureSize",b.size)}return{update:_}}function hd(a,h,p,m){let g=new WeakMap;function _(M){let S=m.render.frame,E=M.geometry,v=h.get(M,E);if(g.get(v)!==S)h.update(v),g.set(v,S);if(M.isInstancedMesh){if(M.hasEventListener("dispose",x)===!1)M.addEventListener("dispose",x);if(g.get(M)!==S){if(p.update(M.instanceMatrix,a.ARRAY_BUFFER),M.instanceColor!==null)p.update(M.instanceColor,a.ARRAY_BUFFER);g.set(M,S)}}if(M.isSkinnedMesh){let b=M.skeleton;if(g.get(b)!==S)b.update(),g.set(b,S)}return v}function y(){g=new WeakMap}function x(M){let S=M.target;if(S.removeEventListener("dispose",x),p.remove(S.instanceMatrix),S.instanceColor!==null)p.remove(S.instanceColor)}return{update:_,dispose:y}}class Kr extends Xe{constructor(a,h,p,m,g,_,y,x,M,S=1026){if(S!==1026&&S!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(p===void 0&&S===1026)p=1014;if(p===void 0&&S===1027)p=1020;super(null,m,g,_,y,x,S,p,M);this.isDepthTexture=!0,this.image={width:a,height:h},this.magFilter=y!==void 0?y:1003,this.minFilter=x!==void 0?x:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(a){return super.copy(a),this.compareFunction=a.compareFunction,this}toJSON(a){let h=super.toJSON(a);if(this.compareFunction!==null)h.compareFunction=this.compareFunction;return h}}var Wo=new Xe,ja=new Kr(1,1),Vo=new Xr,Xo=new Oo,qo=new Jr,Qa=[],to=[],eo=new Float32Array(16),no=new Float32Array(9),io=new Float32Array(4);function Ai(a,h,p){let m=a[0];if(m<=0||m>0)return a;let g=h*p,_=Qa[g];if(_===void 0)_=new Float32Array(g),Qa[g]=_;if(h!==0){m.toArray(_,0);for(let y=1,x=0;y!==h;++y)x+=p,a[y].toArray(_,x)}return _}function Ue(a,h){if(a.length!==h.length)return!1;for(let p=0,m=a.length;p<m;p++)if(a[p]!==h[p])return!1;return!0}function Ne(a,h){for(let p=0,m=h.length;p<m;p++)a[p]=h[p]}function Ws(a,h){let p=to[h];if(p===void 0)p=new Int32Array(h),to[h]=p;for(let m=0;m!==h;++m)p[m]=a.allocateTextureUnit();return p}function ud(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1f(this.addr,h),p[0]=h}function dd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2f(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ue(p,h))return;a.uniform2fv(this.addr,h),Ne(p,h)}}function fd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3f(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else if(h.r!==void 0){if(p[0]!==h.r||p[1]!==h.g||p[2]!==h.b)a.uniform3f(this.addr,h.r,h.g,h.b),p[0]=h.r,p[1]=h.g,p[2]=h.b}else{if(Ue(p,h))return;a.uniform3fv(this.addr,h),Ne(p,h)}}function pd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4f(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ue(p,h))return;a.uniform4fv(this.addr,h),Ne(p,h)}}function md(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ue(p,h))return;a.uniformMatrix2fv(this.addr,!1,h),Ne(p,h)}else{if(Ue(p,m))return;io.set(m),a.uniformMatrix2fv(this.addr,!1,io),Ne(p,m)}}function gd(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ue(p,h))return;a.uniformMatrix3fv(this.addr,!1,h),Ne(p,h)}else{if(Ue(p,m))return;no.set(m),a.uniformMatrix3fv(this.addr,!1,no),Ne(p,m)}}function _d(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ue(p,h))return;a.uniformMatrix4fv(this.addr,!1,h),Ne(p,h)}else{if(Ue(p,m))return;eo.set(m),a.uniformMatrix4fv(this.addr,!1,eo),Ne(p,m)}}function xd(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1i(this.addr,h),p[0]=h}function yd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2i(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ue(p,h))return;a.uniform2iv(this.addr,h),Ne(p,h)}}function vd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3i(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(Ue(p,h))return;a.uniform3iv(this.addr,h),Ne(p,h)}}function Md(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4i(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ue(p,h))return;a.uniform4iv(this.addr,h),Ne(p,h)}}function Sd(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1ui(this.addr,h),p[0]=h}function Ed(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2ui(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ue(p,h))return;a.uniform2uiv(this.addr,h),Ne(p,h)}}function bd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3ui(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(Ue(p,h))return;a.uniform3uiv(this.addr,h),Ne(p,h)}}function Td(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4ui(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ue(p,h))return;a.uniform4uiv(this.addr,h),Ne(p,h)}}function wd(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;let _;if(this.type===a.SAMPLER_2D_SHADOW)ja.compareFunction=515,_=ja;else _=Wo;p.setTexture2D(h||_,g)}function Ad(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTexture3D(h||Xo,g)}function Rd(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTextureCube(h||qo,g)}function Cd(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTexture2DArray(h||Vo,g)}function Pd(a){switch(a){case 5126:return ud;case 35664:return dd;case 35665:return fd;case 35666:return pd;case 35674:return md;case 35675:return gd;case 35676:return _d;case 5124:case 35670:return xd;case 35667:case 35671:return yd;case 35668:case 35672:return vd;case 35669:case 35673:return Md;case 5125:return Sd;case 36294:return Ed;case 36295:return bd;case 36296:return Td;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Ad;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Cd}}function Id(a,h){a.uniform1fv(this.addr,h)}function Dd(a,h){let p=Ai(h,this.size,2);a.uniform2fv(this.addr,p)}function Ld(a,h){let p=Ai(h,this.size,3);a.uniform3fv(this.addr,p)}function Ud(a,h){let p=Ai(h,this.size,4);a.uniform4fv(this.addr,p)}function Nd(a,h){let p=Ai(h,this.size,4);a.uniformMatrix2fv(this.addr,!1,p)}function Fd(a,h){let p=Ai(h,this.size,9);a.uniformMatrix3fv(this.addr,!1,p)}function Od(a,h){let p=Ai(h,this.size,16);a.uniformMatrix4fv(this.addr,!1,p)}function Bd(a,h){a.uniform1iv(this.addr,h)}function zd(a,h){a.uniform2iv(this.addr,h)}function Hd(a,h){a.uniform3iv(this.addr,h)}function kd(a,h){a.uniform4iv(this.addr,h)}function Gd(a,h){a.uniform1uiv(this.addr,h)}function Wd(a,h){a.uniform2uiv(this.addr,h)}function Vd(a,h){a.uniform3uiv(this.addr,h)}function Xd(a,h){a.uniform4uiv(this.addr,h)}function qd(a,h,p){let m=this.cache,g=h.length,_=Ws(p,g);if(!Ue(m,_))a.uniform1iv(this.addr,_),Ne(m,_);for(let y=0;y!==g;++y)p.setTexture2D(h[y]||Wo,_[y])}function Yd(a,h,p){let m=this.cache,g=h.length,_=Ws(p,g);if(!Ue(m,_))a.uniform1iv(this.addr,_),Ne(m,_);for(let y=0;y!==g;++y)p.setTexture3D(h[y]||Xo,_[y])}function Zd(a,h,p){let m=this.cache,g=h.length,_=Ws(p,g);if(!Ue(m,_))a.uniform1iv(this.addr,_),Ne(m,_);for(let y=0;y!==g;++y)p.setTextureCube(h[y]||qo,_[y])}function Jd(a,h,p){let m=this.cache,g=h.length,_=Ws(p,g);if(!Ue(m,_))a.uniform1iv(this.addr,_),Ne(m,_);for(let y=0;y!==g;++y)p.setTexture2DArray(h[y]||Vo,_[y])}function $d(a){switch(a){case 5126:return Id;case 35664:return Dd;case 35665:return Ld;case 35666:return Ud;case 35674:return Nd;case 35675:return Fd;case 35676:return Od;case 5124:case 35670:return Bd;case 35667:case 35671:return zd;case 35668:case 35672:return Hd;case 35669:case 35673:return kd;case 5125:return Gd;case 36294:return Wd;case 36295:return Vd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return qd;case 35679:case 36299:case 36307:return Yd;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Jd}}class Yo{constructor(a,h,p){this.id=a,this.addr=p,this.cache=[],this.type=h.type,this.setValue=Pd(h.type)}}class Zo{constructor(a,h,p){this.id=a,this.addr=p,this.cache=[],this.type=h.type,this.size=h.size,this.setValue=$d(h.type)}}class Jo{constructor(a){this.id=a,this.seq=[],this.map={}}setValue(a,h,p){let m=this.seq;for(let g=0,_=m.length;g!==_;++g){let y=m[g];y.setValue(a,h[y.id],p)}}}var Rr=/(\w+)(\])?(\[|\.)?/g;function so(a,h){a.seq.push(h),a.map[h.id]=h}function Kd(a,h,p){let m=a.name,g=m.length;Rr.lastIndex=0;while(!0){let _=Rr.exec(m),y=Rr.lastIndex,x=_[1],M=_[2]==="]",S=_[3];if(M)x=x|0;if(S===void 0||S==="["&&y+2===g){so(p,S===void 0?new Yo(x,a,h):new Zo(x,a,h));break}else{let v=p.map[x];if(v===void 0)v=new Jo(x),so(p,v);p=v}}}class Xi{constructor(a,h){this.seq=[],this.map={};let p=a.getProgramParameter(h,a.ACTIVE_UNIFORMS);for(let m=0;m<p;++m){let g=a.getActiveUniform(h,m),_=a.getUniformLocation(h,g.name);Kd(g,_,this)}}setValue(a,h,p,m){let g=this.map[h];if(g!==void 0)g.setValue(a,p,m)}setOptional(a,h,p){let m=h[p];if(m!==void 0)this.setValue(a,p,m)}static upload(a,h,p,m){for(let g=0,_=h.length;g!==_;++g){let y=h[g],x=p[y.id];if(x.needsUpdate!==!1)y.setValue(a,x.value,m)}}static seqWithValue(a,h){let p=[];for(let m=0,g=a.length;m!==g;++m){let _=a[m];if(_.id in h)p.push(_)}return p}}function ro(a,h,p){let m=a.createShader(h);return a.shaderSource(m,p),a.compileShader(m),m}var jd=37297,Qd=0;function tf(a,h){let p=a.split(`
`),m=[],g=Math.max(h-6,0),_=Math.min(h+6,p.length);for(let y=g;y<_;y++){let x=y+1;m.push(`${x===h?">":" "} ${x}: ${p[y]}`)}return m.join(`
`)}var ao=new de;function ef(a){ge._getMatrix(ao,ge.workingColorSpace,a);let h=`mat3( ${ao.elements.map((p)=>p.toFixed(4))} )`;switch(ge.getTransfer(a)){case"linear":return[h,"LinearTransferOETF"];case"srgb":return[h,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[h,"LinearTransferOETF"]}}function oo(a,h,p){let m=a.getShaderParameter(h,a.COMPILE_STATUS),g=a.getShaderInfoLog(h).trim();if(m&&g==="")return"";let _=/ERROR: 0:(\d+)/.exec(g);if(_){let y=parseInt(_[1]);return p.toUpperCase()+`

`+g+`

`+tf(a.getShaderSource(h),y)}else return g}function nf(a,h){let p=ef(h);return[`vec4 ${a}( vec4 value ) {`,`	return ${p[1]}( vec4( value.rgb * ${p[0]}, value.a ) );`,"}"].join(`
`)}function sf(a,h){let p;switch(h){case 1:p="Linear";break;case 2:p="Reinhard";break;case 3:p="Cineon";break;case 4:p="ACESFilmic";break;case 6:p="AgX";break;case 7:p="Neutral";break;case 5:p="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",h),p="Linear"}return"vec3 "+a+"( vec3 color ) { return "+p+"ToneMapping( color ); }"}var As=new X;function rf(){ge.getLuminanceCoefficients(As);let a=As.x.toFixed(4),h=As.y.toFixed(4),p=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${h}, ${p} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function af(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function of(a){let h=[];for(let p in a){let m=a[p];if(m===!1)continue;h.push("#define "+p+" "+m)}return h.join(`
`)}function lf(a,h){let p={},m=a.getProgramParameter(h,a.ACTIVE_ATTRIBUTES);for(let g=0;g<m;g++){let _=a.getActiveAttrib(h,g),y=_.name,x=1;if(_.type===a.FLOAT_MAT2)x=2;if(_.type===a.FLOAT_MAT3)x=3;if(_.type===a.FLOAT_MAT4)x=4;p[y]={type:_.type,location:a.getAttribLocation(h,y),locationSize:x}}return p}function Wi(a){return a!==""}function lo(a,h){let p=h.numSpotLightShadows+h.numSpotLightMaps-h.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,h.numDirLights).replace(/NUM_SPOT_LIGHTS/g,h.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,h.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,p).replace(/NUM_RECT_AREA_LIGHTS/g,h.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,h.numPointLights).replace(/NUM_HEMI_LIGHTS/g,h.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,h.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,h.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,h.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,h.numPointLightShadows)}function co(a,h){return a.replace(/NUM_CLIPPING_PLANES/g,h.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,h.numClippingPlanes-h.numClipIntersection)}var cf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fr(a){return a.replace(cf,uf)}var hf=new Map;function uf(a,h){let p=fe[h];if(p===void 0){let m=hf.get(h);if(m!==void 0)p=fe[m],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',h,m);else throw Error("Can not resolve #include <"+h+">")}return Fr(p)}var df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(a){return a.replace(df,ff)}function ff(a,h,p,m){let g="";for(let _=parseInt(h);_<parseInt(p);_++)g+=m.replace(/\[\s*i\s*\]/g,"[ "+_+" ]").replace(/UNROLLED_LOOP_INDEX/g,_);return g}function uo(a){let h=`precision ${a.precision} float;
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
#define LOW_PRECISION`;return h}function pf(a){let h="SHADOWMAP_TYPE_BASIC";if(a.shadowMapType===1)h="SHADOWMAP_TYPE_PCF";else if(a.shadowMapType===2)h="SHADOWMAP_TYPE_PCF_SOFT";else if(a.shadowMapType===3)h="SHADOWMAP_TYPE_VSM";return h}function mf(a){let h="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:h="ENVMAP_TYPE_CUBE";break;case 306:h="ENVMAP_TYPE_CUBE_UV";break}return h}function gf(a){let h="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:h="ENVMAP_MODE_REFRACTION";break}return h}function _f(a){let h="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:h="ENVMAP_BLENDING_MULTIPLY";break;case 1:h="ENVMAP_BLENDING_MIX";break;case 2:h="ENVMAP_BLENDING_ADD";break}return h}function xf(a){let h=a.envMapCubeUVHeight;if(h===null)return null;let p=Math.log2(h)-2,m=1/h;return{texelWidth:1/(3*Math.max(Math.pow(2,p),112)),texelHeight:m,maxMip:p}}function yf(a,h,p,m){let g=a.getContext(),{defines:_,vertexShader:y,fragmentShader:x}=p,M=pf(p),S=mf(p),E=gf(p),v=_f(p),b=xf(p),A=af(p),C=of(_),P=g.createProgram(),T,w,G=p.glslVersion?"#version "+p.glslVersion+`
`:"";if(p.isRawShaderMaterial){if(T=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,C].filter(Wi).join(`
`),T.length>0)T+=`
`;if(w=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,C].filter(Wi).join(`
`),w.length>0)w+=`
`}else T=[uo(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,C,p.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",p.batching?"#define USE_BATCHING":"",p.batchingColor?"#define USE_BATCHING_COLOR":"",p.instancing?"#define USE_INSTANCING":"",p.instancingColor?"#define USE_INSTANCING_COLOR":"",p.instancingMorph?"#define USE_INSTANCING_MORPH":"",p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.map?"#define USE_MAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+E:"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.displacementMap?"#define USE_DISPLACEMENTMAP":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.mapUv?"#define MAP_UV "+p.mapUv:"",p.alphaMapUv?"#define ALPHAMAP_UV "+p.alphaMapUv:"",p.lightMapUv?"#define LIGHTMAP_UV "+p.lightMapUv:"",p.aoMapUv?"#define AOMAP_UV "+p.aoMapUv:"",p.emissiveMapUv?"#define EMISSIVEMAP_UV "+p.emissiveMapUv:"",p.bumpMapUv?"#define BUMPMAP_UV "+p.bumpMapUv:"",p.normalMapUv?"#define NORMALMAP_UV "+p.normalMapUv:"",p.displacementMapUv?"#define DISPLACEMENTMAP_UV "+p.displacementMapUv:"",p.metalnessMapUv?"#define METALNESSMAP_UV "+p.metalnessMapUv:"",p.roughnessMapUv?"#define ROUGHNESSMAP_UV "+p.roughnessMapUv:"",p.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+p.anisotropyMapUv:"",p.clearcoatMapUv?"#define CLEARCOATMAP_UV "+p.clearcoatMapUv:"",p.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+p.clearcoatNormalMapUv:"",p.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+p.clearcoatRoughnessMapUv:"",p.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+p.iridescenceMapUv:"",p.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+p.iridescenceThicknessMapUv:"",p.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+p.sheenColorMapUv:"",p.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+p.sheenRoughnessMapUv:"",p.specularMapUv?"#define SPECULARMAP_UV "+p.specularMapUv:"",p.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+p.specularColorMapUv:"",p.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+p.specularIntensityMapUv:"",p.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+p.transmissionMapUv:"",p.thicknessMapUv?"#define THICKNESSMAP_UV "+p.thicknessMapUv:"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.flatShading?"#define FLAT_SHADED":"",p.skinning?"#define USE_SKINNING":"",p.morphTargets?"#define USE_MORPHTARGETS":"",p.morphNormals&&p.flatShading===!1?"#define USE_MORPHNORMALS":"",p.morphColors?"#define USE_MORPHCOLORS":"",p.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+p.morphTextureStride:"",p.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+p.morphTargetsCount:"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+M:"",p.sizeAttenuation?"#define USE_SIZEATTENUATION":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),w=[uo(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,C,p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",p.map?"#define USE_MAP":"",p.matcap?"#define USE_MATCAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+S:"",p.envMap?"#define "+E:"",p.envMap?"#define "+v:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoat?"#define USE_CLEARCOAT":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.dispersion?"#define USE_DISPERSION":"",p.iridescence?"#define USE_IRIDESCENCE":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaTest?"#define USE_ALPHATEST":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.sheen?"#define USE_SHEEN":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors||p.instancingColor||p.batchingColor?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.gradientMap?"#define USE_GRADIENTMAP":"",p.flatShading?"#define FLAT_SHADED":"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+M:"",p.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",p.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",p.toneMapping!==0?"#define TONE_MAPPING":"",p.toneMapping!==0?fe.tonemapping_pars_fragment:"",p.toneMapping!==0?sf("toneMapping",p.toneMapping):"",p.dithering?"#define DITHERING":"",p.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,nf("linearToOutputTexel",p.outputColorSpace),rf(),p.useDepthPacking?"#define DEPTH_PACKING "+p.depthPacking:"",`
`].filter(Wi).join(`
`);if(y=Fr(y),y=lo(y,p),y=co(y,p),x=Fr(x),x=lo(x,p),x=co(x,p),y=ho(y),x=ho(x),p.isRawShaderMaterial!==!0)G=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,w=["#define varying in",p.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",p.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w;let N=G+T+y,H=G+w+x,rt=ro(g,g.VERTEX_SHADER,N),V=ro(g,g.FRAGMENT_SHADER,H);if(g.attachShader(P,rt),g.attachShader(P,V),p.index0AttributeName!==void 0)g.bindAttribLocation(P,0,p.index0AttributeName);else if(p.morphTargets===!0)g.bindAttribLocation(P,0,"position");g.linkProgram(P);function q(j){if(a.debug.checkShaderErrors){let at=g.getProgramInfoLog(P).trim(),ot=g.getShaderInfoLog(rt).trim(),ht=g.getShaderInfoLog(V).trim(),ft=!0,Z=!0;if(g.getProgramParameter(P,g.LINK_STATUS)===!1)if(ft=!1,typeof a.debug.onShaderError==="function")a.debug.onShaderError(g,P,rt,V);else{let st=oo(g,rt,"vertex"),Y=oo(g,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+g.getError()+" - VALIDATE_STATUS "+g.getProgramParameter(P,g.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+at+`
`+st+`
`+Y)}else if(at!=="")console.warn("THREE.WebGLProgram: Program Info Log:",at);else if(ot===""||ht==="")Z=!1;if(Z)j.diagnostics={runnable:ft,programLog:at,vertexShader:{log:ot,prefix:T},fragmentShader:{log:ht,prefix:w}}}g.deleteShader(rt),g.deleteShader(V),ct=new Xi(g,P),O=lf(g,P)}let ct;this.getUniforms=function(){if(ct===void 0)q(this);return ct};let O;this.getAttributes=function(){if(O===void 0)q(this);return O};let B=p.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(B===!1)B=g.getProgramParameter(P,jd);return B},this.destroy=function(){m.releaseStatesOfProgram(this),g.deleteProgram(P),this.program=void 0},this.type=p.shaderType,this.name=p.shaderName,this.id=Qd++,this.cacheKey=h,this.usedTimes=1,this.program=P,this.vertexShader=rt,this.fragmentShader=V,this}var vf=0;class $o{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(a){let{vertexShader:h,fragmentShader:p}=a,m=this._getShaderStage(h),g=this._getShaderStage(p),_=this._getShaderCacheForMaterial(a);if(_.has(m)===!1)_.add(m),m.usedTimes++;if(_.has(g)===!1)_.add(g),g.usedTimes++;return this}remove(a){let h=this.materialCache.get(a);for(let p of h)if(p.usedTimes--,p.usedTimes===0)this.shaderCache.delete(p.code);return this.materialCache.delete(a),this}getVertexShaderID(a){return this._getShaderStage(a.vertexShader).id}getFragmentShaderID(a){return this._getShaderStage(a.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(a){let h=this.materialCache,p=h.get(a);if(p===void 0)p=new Set,h.set(a,p);return p}_getShaderStage(a){let h=this.shaderCache,p=h.get(a);if(p===void 0)p=new Ko(a),h.set(a,p);return p}}class Ko{constructor(a){this.id=vf++,this.code=a,this.usedTimes=0}}function Mf(a,h,p,m,g,_,y){let x=new ks,M=new $o,S=new Set,E=[],{logarithmicDepthBuffer:v,vertexTextures:b,precision:A}=g,C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(O){if(S.add(O),O===0)return"uv";return`uv${O}`}function T(O,B,j,at,ot){let ht=at.fog,ft=ot.geometry,Z=O.isMeshStandardMaterial?at.environment:null,st=(O.isMeshStandardMaterial?p:h).get(O.envMap||Z),Y=!!st&&st.mapping===306?st.image.height:null,Ct=C[O.type];if(O.precision!==null){if(A=g.getMaxPrecision(O.precision),A!==O.precision)console.warn("THREE.WebGLProgram.getParameters:",O.precision,"not supported, using",A,"instead.")}let U=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Wt=U!==void 0?U.length:0,jt=0;if(ft.morphAttributes.position!==void 0)jt=1;if(ft.morphAttributes.normal!==void 0)jt=2;if(ft.morphAttributes.color!==void 0)jt=3;let dt,Et,Yt,Gt;if(Ct){let me=xn[Ct];dt=me.vertexShader,Et=me.fragmentShader}else dt=O.vertexShader,Et=O.fragmentShader,M.update(O),Yt=M.getVertexShaderID(O),Gt=M.getFragmentShaderID(O);let Pt=a.getRenderTarget(),te=a.state.buffers.depth.getReversed(),ce=ot.isInstancedMesh===!0,Qt=ot.isBatchedMesh===!0,xt=!!O.map,wt=!!O.matcap,W=!!st,Bt=!!O.aoMap,At=!!O.lightMap,Vt=!!O.bumpMap,Mt=!!O.normalMap,ie=!!O.displacementMap,Ot=!!O.emissiveMap,Xt=!!O.metalnessMap,k=!!O.roughnessMap,L=O.anisotropy>0,nt=O.clearcoat>0,mt=O.dispersion>0,gt=O.iridescence>0,ut=O.sheen>0,$t=O.transmission>0,Lt=L&&!!O.anisotropyMap,It=nt&&!!O.clearcoatMap,ee=nt&&!!O.clearcoatNormalMap,bt=nt&&!!O.clearcoatRoughnessMap,zt=gt&&!!O.iridescenceMap,ue=gt&&!!O.iridescenceThicknessMap,se=ut&&!!O.sheenColorMap,kt=ut&&!!O.sheenRoughnessMap,ae=!!O.specularMap,ne=!!O.specularColorMap,be=!!O.specularIntensityMap,Q=$t&&!!O.transmissionMap,yt=$t&&!!O.thicknessMap,pt=!!O.gradientMap,_t=!!O.alphaMap,Nt=O.alphaTest>0,Dt=!!O.alphaHash,oe=!!O.extensions,Te=0;if(O.toneMapped){if(Pt===null||Pt.isXRRenderTarget===!0)Te=a.toneMapping}let Ie={shaderID:Ct,shaderType:O.type,shaderName:O.name,vertexShader:dt,fragmentShader:Et,defines:O.defines,customVertexShaderID:Yt,customFragmentShaderID:Gt,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:A,batching:Qt,batchingColor:Qt&&ot._colorsTexture!==null,instancing:ce,instancingColor:ce&&ot.instanceColor!==null,instancingMorph:ce&&ot.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:Pt===null?a.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:"srgb-linear",alphaToCoverage:!!O.alphaToCoverage,map:xt,matcap:wt,envMap:W,envMapMode:W&&st.mapping,envMapCubeUVHeight:Y,aoMap:Bt,lightMap:At,bumpMap:Vt,normalMap:Mt,displacementMap:b&&ie,emissiveMap:Ot,normalMapObjectSpace:Mt&&O.normalMapType===1,normalMapTangentSpace:Mt&&O.normalMapType===0,metalnessMap:Xt,roughnessMap:k,anisotropy:L,anisotropyMap:Lt,clearcoat:nt,clearcoatMap:It,clearcoatNormalMap:ee,clearcoatRoughnessMap:bt,dispersion:mt,iridescence:gt,iridescenceMap:zt,iridescenceThicknessMap:ue,sheen:ut,sheenColorMap:se,sheenRoughnessMap:kt,specularMap:ae,specularColorMap:ne,specularIntensityMap:be,transmission:$t,transmissionMap:Q,thicknessMap:yt,gradientMap:pt,opaque:O.transparent===!1&&O.blending===1&&O.alphaToCoverage===!1,alphaMap:_t,alphaTest:Nt,alphaHash:Dt,combine:O.combine,mapUv:xt&&P(O.map.channel),aoMapUv:Bt&&P(O.aoMap.channel),lightMapUv:At&&P(O.lightMap.channel),bumpMapUv:Vt&&P(O.bumpMap.channel),normalMapUv:Mt&&P(O.normalMap.channel),displacementMapUv:ie&&P(O.displacementMap.channel),emissiveMapUv:Ot&&P(O.emissiveMap.channel),metalnessMapUv:Xt&&P(O.metalnessMap.channel),roughnessMapUv:k&&P(O.roughnessMap.channel),anisotropyMapUv:Lt&&P(O.anisotropyMap.channel),clearcoatMapUv:It&&P(O.clearcoatMap.channel),clearcoatNormalMapUv:ee&&P(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&P(O.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&P(O.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&P(O.iridescenceThicknessMap.channel),sheenColorMapUv:se&&P(O.sheenColorMap.channel),sheenRoughnessMapUv:kt&&P(O.sheenRoughnessMap.channel),specularMapUv:ae&&P(O.specularMap.channel),specularColorMapUv:ne&&P(O.specularColorMap.channel),specularIntensityMapUv:be&&P(O.specularIntensityMap.channel),transmissionMapUv:Q&&P(O.transmissionMap.channel),thicknessMapUv:yt&&P(O.thicknessMap.channel),alphaMapUv:_t&&P(O.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Mt||L),vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ft.attributes.uv&&(xt||_t),fog:!!ht,useFog:O.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:O.flatShading===!0,sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:te,skinning:ot.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:jt,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:y.numPlanes,numClipIntersection:y.numIntersection,dithering:O.dithering,shadowMapEnabled:a.shadowMap.enabled&&j.length>0,shadowMapType:a.shadowMap.type,toneMapping:Te,decodeVideoTexture:xt&&O.map.isVideoTexture===!0&&ge.getTransfer(O.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Ot&&O.emissiveMap.isVideoTexture===!0&&ge.getTransfer(O.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===2,flipSided:O.side===1,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:oe&&O.extensions.clipCullDistance===!0&&m.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&O.extensions.multiDraw===!0||Qt)&&m.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:m.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return Ie.vertexUv1s=S.has(1),Ie.vertexUv2s=S.has(2),Ie.vertexUv3s=S.has(3),S.clear(),Ie}function w(O){let B=[];if(O.shaderID)B.push(O.shaderID);else B.push(O.customVertexShaderID),B.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let j in O.defines)B.push(j),B.push(O.defines[j]);if(O.isRawShaderMaterial===!1)G(B,O),N(B,O),B.push(a.outputColorSpace);return B.push(O.customProgramCacheKey),B.join()}function G(O,B){O.push(B.precision),O.push(B.outputColorSpace),O.push(B.envMapMode),O.push(B.envMapCubeUVHeight),O.push(B.mapUv),O.push(B.alphaMapUv),O.push(B.lightMapUv),O.push(B.aoMapUv),O.push(B.bumpMapUv),O.push(B.normalMapUv),O.push(B.displacementMapUv),O.push(B.emissiveMapUv),O.push(B.metalnessMapUv),O.push(B.roughnessMapUv),O.push(B.anisotropyMapUv),O.push(B.clearcoatMapUv),O.push(B.clearcoatNormalMapUv),O.push(B.clearcoatRoughnessMapUv),O.push(B.iridescenceMapUv),O.push(B.iridescenceThicknessMapUv),O.push(B.sheenColorMapUv),O.push(B.sheenRoughnessMapUv),O.push(B.specularMapUv),O.push(B.specularColorMapUv),O.push(B.specularIntensityMapUv),O.push(B.transmissionMapUv),O.push(B.thicknessMapUv),O.push(B.combine),O.push(B.fogExp2),O.push(B.sizeAttenuation),O.push(B.morphTargetsCount),O.push(B.morphAttributeCount),O.push(B.numDirLights),O.push(B.numPointLights),O.push(B.numSpotLights),O.push(B.numSpotLightMaps),O.push(B.numHemiLights),O.push(B.numRectAreaLights),O.push(B.numDirLightShadows),O.push(B.numPointLightShadows),O.push(B.numSpotLightShadows),O.push(B.numSpotLightShadowsWithMaps),O.push(B.numLightProbes),O.push(B.shadowMapType),O.push(B.toneMapping),O.push(B.numClippingPlanes),O.push(B.numClipIntersection),O.push(B.depthPacking)}function N(O,B){if(x.disableAll(),B.supportsVertexTextures)x.enable(0);if(B.instancing)x.enable(1);if(B.instancingColor)x.enable(2);if(B.instancingMorph)x.enable(3);if(B.matcap)x.enable(4);if(B.envMap)x.enable(5);if(B.normalMapObjectSpace)x.enable(6);if(B.normalMapTangentSpace)x.enable(7);if(B.clearcoat)x.enable(8);if(B.iridescence)x.enable(9);if(B.alphaTest)x.enable(10);if(B.vertexColors)x.enable(11);if(B.vertexAlphas)x.enable(12);if(B.vertexUv1s)x.enable(13);if(B.vertexUv2s)x.enable(14);if(B.vertexUv3s)x.enable(15);if(B.vertexTangents)x.enable(16);if(B.anisotropy)x.enable(17);if(B.alphaHash)x.enable(18);if(B.batching)x.enable(19);if(B.dispersion)x.enable(20);if(B.batchingColor)x.enable(21);if(O.push(x.mask),x.disableAll(),B.fog)x.enable(0);if(B.useFog)x.enable(1);if(B.flatShading)x.enable(2);if(B.logarithmicDepthBuffer)x.enable(3);if(B.reverseDepthBuffer)x.enable(4);if(B.skinning)x.enable(5);if(B.morphTargets)x.enable(6);if(B.morphNormals)x.enable(7);if(B.morphColors)x.enable(8);if(B.premultipliedAlpha)x.enable(9);if(B.shadowMapEnabled)x.enable(10);if(B.doubleSided)x.enable(11);if(B.flipSided)x.enable(12);if(B.useDepthPacking)x.enable(13);if(B.dithering)x.enable(14);if(B.transmission)x.enable(15);if(B.sheen)x.enable(16);if(B.opaque)x.enable(17);if(B.pointsUvs)x.enable(18);if(B.decodeVideoTexture)x.enable(19);if(B.decodeVideoTextureEmissive)x.enable(20);if(B.alphaToCoverage)x.enable(21);O.push(x.mask)}function H(O){let B=C[O.type],j;if(B){let at=xn[B];j=hc.clone(at.uniforms)}else j=O.uniforms;return j}function rt(O,B){let j;for(let at=0,ot=E.length;at<ot;at++){let ht=E[at];if(ht.cacheKey===B){j=ht,++j.usedTimes;break}}if(j===void 0)j=new yf(a,B,O,_),E.push(j);return j}function V(O){if(--O.usedTimes===0){let B=E.indexOf(O);E[B]=E[E.length-1],E.pop(),O.destroy()}}function q(O){M.remove(O)}function ct(){M.dispose()}return{getParameters:T,getProgramCacheKey:w,getUniforms:H,acquireProgram:rt,releaseProgram:V,releaseShaderCache:q,programs:E,dispose:ct}}function Sf(){let a=new WeakMap;function h(y){return a.has(y)}function p(y){let x=a.get(y);if(x===void 0)x={},a.set(y,x);return x}function m(y){a.delete(y)}function g(y,x,M){a.get(y)[x]=M}function _(){a=new WeakMap}return{has:h,get:p,remove:m,update:g,dispose:_}}function Ef(a,h){if(a.groupOrder!==h.groupOrder)return a.groupOrder-h.groupOrder;else if(a.renderOrder!==h.renderOrder)return a.renderOrder-h.renderOrder;else if(a.material.id!==h.material.id)return a.material.id-h.material.id;else if(a.z!==h.z)return a.z-h.z;else return a.id-h.id}function fo(a,h){if(a.groupOrder!==h.groupOrder)return a.groupOrder-h.groupOrder;else if(a.renderOrder!==h.renderOrder)return a.renderOrder-h.renderOrder;else if(a.z!==h.z)return h.z-a.z;else return a.id-h.id}function po(){let a=[],h=0,p=[],m=[],g=[];function _(){h=0,p.length=0,m.length=0,g.length=0}function y(v,b,A,C,P,T){let w=a[h];if(w===void 0)w={id:v.id,object:v,geometry:b,material:A,groupOrder:C,renderOrder:v.renderOrder,z:P,group:T},a[h]=w;else w.id=v.id,w.object=v,w.geometry=b,w.material=A,w.groupOrder=C,w.renderOrder=v.renderOrder,w.z=P,w.group=T;return h++,w}function x(v,b,A,C,P,T){let w=y(v,b,A,C,P,T);if(A.transmission>0)m.push(w);else if(A.transparent===!0)g.push(w);else p.push(w)}function M(v,b,A,C,P,T){let w=y(v,b,A,C,P,T);if(A.transmission>0)m.unshift(w);else if(A.transparent===!0)g.unshift(w);else p.unshift(w)}function S(v,b){if(p.length>1)p.sort(v||Ef);if(m.length>1)m.sort(b||fo);if(g.length>1)g.sort(b||fo)}function E(){for(let v=h,b=a.length;v<b;v++){let A=a[v];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:p,transmissive:m,transparent:g,init:_,push:x,unshift:M,finish:E,sort:S}}function bf(){let a=new WeakMap;function h(m,g){let _=a.get(m),y;if(_===void 0)y=new po,a.set(m,[y]);else if(g>=_.length)y=new po,_.push(y);else y=_[g];return y}function p(){a=new WeakMap}return{get:h,dispose:p}}function Tf(){let a={};return{get:function(h){if(a[h.id]!==void 0)return a[h.id];let p;switch(h.type){case"DirectionalLight":p={direction:new X,color:new pe};break;case"SpotLight":p={position:new X,direction:new X,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":p={position:new X,color:new pe,distance:0,decay:0};break;case"HemisphereLight":p={direction:new X,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":p={color:new pe,position:new X,halfWidth:new X,halfHeight:new X};break}return a[h.id]=p,p}}}function wf(){let a={};return{get:function(h){if(a[h.id]!==void 0)return a[h.id];let p;switch(h.type){case"DirectionalLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1000};break}return a[h.id]=p,p}}}var Af=0;function Rf(a,h){return(h.castShadow?2:0)-(a.castShadow?2:0)+(h.map?1:0)-(a.map?1:0)}function Cf(a){let h=new Tf,p=wf(),m={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let S=0;S<9;S++)m.probe.push(new X);let g=new X,_=new Ae,y=new Ae;function x(S){let E=0,v=0,b=0;for(let O=0;O<9;O++)m.probe[O].set(0,0,0);let A=0,C=0,P=0,T=0,w=0,G=0,N=0,H=0,rt=0,V=0,q=0;S.sort(Rf);for(let O=0,B=S.length;O<B;O++){let j=S[O],{color:at,intensity:ot,distance:ht}=j,ft=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)E+=at.r*ot,v+=at.g*ot,b+=at.b*ot;else if(j.isLightProbe){for(let Z=0;Z<9;Z++)m.probe[Z].addScaledVector(j.sh.coefficients[Z],ot);q++}else if(j.isDirectionalLight){let Z=h.get(j);if(Z.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let st=j.shadow,Y=p.get(j);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,m.directionalShadow[A]=Y,m.directionalShadowMap[A]=ft,m.directionalShadowMatrix[A]=j.shadow.matrix,G++}m.directional[A]=Z,A++}else if(j.isSpotLight){let Z=h.get(j);Z.position.setFromMatrixPosition(j.matrixWorld),Z.color.copy(at).multiplyScalar(ot),Z.distance=ht,Z.coneCos=Math.cos(j.angle),Z.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),Z.decay=j.decay,m.spot[P]=Z;let st=j.shadow;if(j.map){if(m.spotLightMap[rt]=j.map,rt++,st.updateMatrices(j),j.castShadow)V++}if(m.spotLightMatrix[P]=st.matrix,j.castShadow){let Y=p.get(j);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,m.spotShadow[P]=Y,m.spotShadowMap[P]=ft,H++}P++}else if(j.isRectAreaLight){let Z=h.get(j);Z.color.copy(at).multiplyScalar(ot),Z.halfWidth.set(j.width*0.5,0,0),Z.halfHeight.set(0,j.height*0.5,0),m.rectArea[T]=Z,T++}else if(j.isPointLight){let Z=h.get(j);if(Z.color.copy(j.color).multiplyScalar(j.intensity),Z.distance=j.distance,Z.decay=j.decay,j.castShadow){let st=j.shadow,Y=p.get(j);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,Y.shadowCameraNear=st.camera.near,Y.shadowCameraFar=st.camera.far,m.pointShadow[C]=Y,m.pointShadowMap[C]=ft,m.pointShadowMatrix[C]=j.shadow.matrix,N++}m.point[C]=Z,C++}else if(j.isHemisphereLight){let Z=h.get(j);Z.skyColor.copy(j.color).multiplyScalar(ot),Z.groundColor.copy(j.groundColor).multiplyScalar(ot),m.hemi[w]=Z,w++}}if(T>0)if(a.has("OES_texture_float_linear")===!0)m.rectAreaLTC1=Ut.LTC_FLOAT_1,m.rectAreaLTC2=Ut.LTC_FLOAT_2;else m.rectAreaLTC1=Ut.LTC_HALF_1,m.rectAreaLTC2=Ut.LTC_HALF_2;m.ambient[0]=E,m.ambient[1]=v,m.ambient[2]=b;let ct=m.hash;if(ct.directionalLength!==A||ct.pointLength!==C||ct.spotLength!==P||ct.rectAreaLength!==T||ct.hemiLength!==w||ct.numDirectionalShadows!==G||ct.numPointShadows!==N||ct.numSpotShadows!==H||ct.numSpotMaps!==rt||ct.numLightProbes!==q)m.directional.length=A,m.spot.length=P,m.rectArea.length=T,m.point.length=C,m.hemi.length=w,m.directionalShadow.length=G,m.directionalShadowMap.length=G,m.pointShadow.length=N,m.pointShadowMap.length=N,m.spotShadow.length=H,m.spotShadowMap.length=H,m.directionalShadowMatrix.length=G,m.pointShadowMatrix.length=N,m.spotLightMatrix.length=H+rt-V,m.spotLightMap.length=rt,m.numSpotLightShadowsWithMaps=V,m.numLightProbes=q,ct.directionalLength=A,ct.pointLength=C,ct.spotLength=P,ct.rectAreaLength=T,ct.hemiLength=w,ct.numDirectionalShadows=G,ct.numPointShadows=N,ct.numSpotShadows=H,ct.numSpotMaps=rt,ct.numLightProbes=q,m.version=Af++}function M(S,E){let v=0,b=0,A=0,C=0,P=0,T=E.matrixWorldInverse;for(let w=0,G=S.length;w<G;w++){let N=S[w];if(N.isDirectionalLight){let H=m.directional[v];H.direction.setFromMatrixPosition(N.matrixWorld),g.setFromMatrixPosition(N.target.matrixWorld),H.direction.sub(g),H.direction.transformDirection(T),v++}else if(N.isSpotLight){let H=m.spot[A];H.position.setFromMatrixPosition(N.matrixWorld),H.position.applyMatrix4(T),H.direction.setFromMatrixPosition(N.matrixWorld),g.setFromMatrixPosition(N.target.matrixWorld),H.direction.sub(g),H.direction.transformDirection(T),A++}else if(N.isRectAreaLight){let H=m.rectArea[C];H.position.setFromMatrixPosition(N.matrixWorld),H.position.applyMatrix4(T),y.identity(),_.copy(N.matrixWorld),_.premultiply(T),y.extractRotation(_),H.halfWidth.set(N.width*0.5,0,0),H.halfHeight.set(0,N.height*0.5,0),H.halfWidth.applyMatrix4(y),H.halfHeight.applyMatrix4(y),C++}else if(N.isPointLight){let H=m.point[b];H.position.setFromMatrixPosition(N.matrixWorld),H.position.applyMatrix4(T),b++}else if(N.isHemisphereLight){let H=m.hemi[P];H.direction.setFromMatrixPosition(N.matrixWorld),H.direction.transformDirection(T),P++}}}return{setup:x,setupView:M,state:m}}function mo(a){let h=new Cf(a),p=[],m=[];function g(E){S.camera=E,p.length=0,m.length=0}function _(E){p.push(E)}function y(E){m.push(E)}function x(){h.setup(p)}function M(E){h.setupView(p,E)}let S={lightsArray:p,shadowsArray:m,camera:null,lights:h,transmissionRenderTarget:{}};return{init:g,state:S,setupLights:x,setupLightsView:M,pushLight:_,pushShadow:y}}function Pf(a){let h=new WeakMap;function p(g,_=0){let y=h.get(g),x;if(y===void 0)x=new mo(a),h.set(g,[x]);else if(_>=y.length)x=new mo(a),y.push(x);else x=y[_];return x}function m(){h=new WeakMap}return{get:p,dispose:m}}class jo extends Xn{static get type(){return"MeshDepthMaterial"}constructor(a){super();this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(a)}copy(a){return super.copy(a),this.depthPacking=a.depthPacking,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this}}class Qo extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(a){super();this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(a)}copy(a){return super.copy(a),this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this}}var If=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Df=`uniform sampler2D shadow_pass;
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
}`;function Lf(a,h,p){let m=new Gs,g=new St,_=new St,y=new Me,x=new jo({depthPacking:3201}),M=new Qo,S={},E=p.maxTextureSize,v={[0]:1,[1]:0,[2]:2},b=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:If,fragmentShader:Df}),A=b.clone();A.defines.HORIZONTAL_PASS=1;let C=new qe;C.setAttribute("position",new un(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let P=new he(C,b),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let w=this.type;this.render=function(V,q,ct){if(T.enabled===!1)return;if(T.autoUpdate===!1&&T.needsUpdate===!1)return;if(V.length===0)return;let O=a.getRenderTarget(),B=a.getActiveCubeFace(),j=a.getActiveMipmapLevel(),at=a.state;at.setBlending(0),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);let ot=w!==3&&this.type===3,ht=w===3&&this.type!==3;for(let ft=0,Z=V.length;ft<Z;ft++){let st=V[ft],Y=st.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;g.copy(Y.mapSize);let Ct=Y.getFrameExtents();if(g.multiply(Ct),_.copy(Y.mapSize),g.x>E||g.y>E){if(g.x>E)_.x=Math.floor(E/Ct.x),g.x=_.x*Ct.x,Y.mapSize.x=_.x;if(g.y>E)_.y=Math.floor(E/Ct.y),g.y=_.y*Ct.y,Y.mapSize.y=_.y}if(Y.map===null||ot===!0||ht===!0){let Wt=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(Y.map!==null)Y.map.dispose();Y.map=new Gn(g.x,g.y,Wt),Y.map.texture.name=st.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();let U=Y.getViewportCount();for(let Wt=0;Wt<U;Wt++){let jt=Y.getViewport(Wt);y.set(_.x*jt.x,_.y*jt.y,_.x*jt.z,_.y*jt.w),at.viewport(y),Y.updateMatrices(st,Wt),m=Y.getFrustum(),H(q,ct,Y.camera,st,this.type)}if(Y.isPointLightShadow!==!0&&this.type===3)G(Y,ct);Y.needsUpdate=!1}w=this.type,T.needsUpdate=!1,a.setRenderTarget(O,B,j)};function G(V,q){let ct=h.update(P);if(b.defines.VSM_SAMPLES!==V.blurSamples)b.defines.VSM_SAMPLES=V.blurSamples,A.defines.VSM_SAMPLES=V.blurSamples,b.needsUpdate=!0,A.needsUpdate=!0;if(V.mapPass===null)V.mapPass=new Gn(g.x,g.y);b.uniforms.shadow_pass.value=V.map.texture,b.uniforms.resolution.value=V.mapSize,b.uniforms.radius.value=V.radius,a.setRenderTarget(V.mapPass),a.clear(),a.renderBufferDirect(q,null,ct,b,P,null),A.uniforms.shadow_pass.value=V.mapPass.texture,A.uniforms.resolution.value=V.mapSize,A.uniforms.radius.value=V.radius,a.setRenderTarget(V.map),a.clear(),a.renderBufferDirect(q,null,ct,A,P,null)}function N(V,q,ct,O){let B=null,j=ct.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(j!==void 0)B=j;else if(B=ct.isPointLight===!0?M:x,a.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0){let at=B.uuid,ot=q.uuid,ht=S[at];if(ht===void 0)ht={},S[at]=ht;let ft=ht[ot];if(ft===void 0)ft=B.clone(),ht[ot]=ft,q.addEventListener("dispose",rt);B=ft}if(B.visible=q.visible,B.wireframe=q.wireframe,O===3)B.side=q.shadowSide!==null?q.shadowSide:q.side;else B.side=q.shadowSide!==null?q.shadowSide:v[q.side];if(B.alphaMap=q.alphaMap,B.alphaTest=q.alphaTest,B.map=q.map,B.clipShadows=q.clipShadows,B.clippingPlanes=q.clippingPlanes,B.clipIntersection=q.clipIntersection,B.displacementMap=q.displacementMap,B.displacementScale=q.displacementScale,B.displacementBias=q.displacementBias,B.wireframeLinewidth=q.wireframeLinewidth,B.linewidth=q.linewidth,ct.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let at=a.properties.get(B);at.light=ct}return B}function H(V,q,ct,O,B){if(V.visible===!1)return;if(V.layers.test(q.layers)&&(V.isMesh||V.isLine||V.isPoints)){if((V.castShadow||V.receiveShadow&&B===3)&&(!V.frustumCulled||m.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,V.matrixWorld);let ot=h.update(V),ht=V.material;if(Array.isArray(ht)){let ft=ot.groups;for(let Z=0,st=ft.length;Z<st;Z++){let Y=ft[Z],Ct=ht[Y.materialIndex];if(Ct&&Ct.visible){let U=N(V,Ct,O,B);V.onBeforeShadow(a,V,q,ct,ot,U,Y),a.renderBufferDirect(ct,null,ot,U,V,Y),V.onAfterShadow(a,V,q,ct,ot,U,Y)}}}else if(ht.visible){let ft=N(V,ht,O,B);V.onBeforeShadow(a,V,q,ct,ot,ft,null),a.renderBufferDirect(ct,null,ot,ft,V,null),V.onAfterShadow(a,V,q,ct,ot,ft,null)}}}let at=V.children;for(let ot=0,ht=at.length;ot<ht;ot++)H(at[ot],q,ct,O,B)}function rt(V){V.target.removeEventListener("dispose",rt);for(let ct in S){let O=S[ct],B=V.target.uuid;if(B in O)O[B].dispose(),delete O[B]}}}var Uf={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function Nf(a,h){function p(){let Q=!1,yt=new Me,pt=null,_t=new Me(0,0,0,0);return{setMask:function(Nt){if(pt!==Nt&&!Q)a.colorMask(Nt,Nt,Nt,Nt),pt=Nt},setLocked:function(Nt){Q=Nt},setClear:function(Nt,Dt,oe,Te,Ie){if(Ie===!0)Nt*=Te,Dt*=Te,oe*=Te;if(yt.set(Nt,Dt,oe,Te),_t.equals(yt)===!1)a.clearColor(Nt,Dt,oe,Te),_t.copy(yt)},reset:function(){Q=!1,pt=null,_t.set(-1,0,0,0)}}}function m(){let Q=!1,yt=!1,pt=null,_t=null,Nt=null;return{setReversed:function(Dt){if(yt!==Dt){let oe=h.get("EXT_clip_control");if(yt)oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT);else oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);let Te=Nt;Nt=null,this.setClear(Te)}yt=Dt},getReversed:function(){return yt},setTest:function(Dt){if(Dt)Pt(a.DEPTH_TEST);else te(a.DEPTH_TEST)},setMask:function(Dt){if(pt!==Dt&&!Q)a.depthMask(Dt),pt=Dt},setFunc:function(Dt){if(yt)Dt=Uf[Dt];if(_t!==Dt){switch(Dt){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}_t=Dt}},setLocked:function(Dt){Q=Dt},setClear:function(Dt){if(Nt!==Dt){if(yt)Dt=1-Dt;a.clearDepth(Dt),Nt=Dt}},reset:function(){Q=!1,pt=null,_t=null,Nt=null,yt=!1}}}function g(){let Q=!1,yt=null,pt=null,_t=null,Nt=null,Dt=null,oe=null,Te=null,Ie=null;return{setTest:function(me){if(!Q)if(me)Pt(a.STENCIL_TEST);else te(a.STENCIL_TEST)},setMask:function(me){if(yt!==me&&!Q)a.stencilMask(me),yt=me},setFunc:function(me,tn,Je){if(pt!==me||_t!==tn||Nt!==Je)a.stencilFunc(me,tn,Je),pt=me,_t=tn,Nt=Je},setOp:function(me,tn,Je){if(Dt!==me||oe!==tn||Te!==Je)a.stencilOp(me,tn,Je),Dt=me,oe=tn,Te=Je},setLocked:function(me){Q=me},setClear:function(me){if(Ie!==me)a.clearStencil(me),Ie=me},reset:function(){Q=!1,yt=null,pt=null,_t=null,Nt=null,Dt=null,oe=null,Te=null,Ie=null}}}let _=new p,y=new m,x=new g,M=new WeakMap,S=new WeakMap,E={},v={},b=new WeakMap,A=[],C=null,P=!1,T=null,w=null,G=null,N=null,H=null,rt=null,V=null,q=new pe(0,0,0),ct=0,O=!1,B=null,j=null,at=null,ot=null,ht=null,ft=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,st=0,Y=a.getParameter(a.VERSION);if(Y.indexOf("WebGL")!==-1)st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=st>=1;else if(Y.indexOf("OpenGL ES")!==-1)st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=st>=2;let Ct=null,U={},Wt=a.getParameter(a.SCISSOR_BOX),jt=a.getParameter(a.VIEWPORT),dt=new Me().fromArray(Wt),Et=new Me().fromArray(jt);function Yt(Q,yt,pt,_t){let Nt=new Uint8Array(4),Dt=a.createTexture();a.bindTexture(Q,Dt),a.texParameteri(Q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let oe=0;oe<pt;oe++)if(Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY)a.texImage3D(yt,0,a.RGBA,1,1,_t,0,a.RGBA,a.UNSIGNED_BYTE,Nt);else a.texImage2D(yt+oe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Nt);return Dt}let Gt={};Gt[a.TEXTURE_2D]=Yt(a.TEXTURE_2D,a.TEXTURE_2D,1),Gt[a.TEXTURE_CUBE_MAP]=Yt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[a.TEXTURE_2D_ARRAY]=Yt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Gt[a.TEXTURE_3D]=Yt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),_.setClear(0,0,0,1),y.setClear(1),x.setClear(0),Pt(a.DEPTH_TEST),y.setFunc(3),Vt(!1),Mt(1),Pt(a.CULL_FACE),Bt(0);function Pt(Q){if(E[Q]!==!0)a.enable(Q),E[Q]=!0}function te(Q){if(E[Q]!==!1)a.disable(Q),E[Q]=!1}function ce(Q,yt){if(v[Q]!==yt){if(a.bindFramebuffer(Q,yt),v[Q]=yt,Q===a.DRAW_FRAMEBUFFER)v[a.FRAMEBUFFER]=yt;if(Q===a.FRAMEBUFFER)v[a.DRAW_FRAMEBUFFER]=yt;return!0}return!1}function Qt(Q,yt){let pt=A,_t=!1;if(Q){if(pt=b.get(yt),pt===void 0)pt=[],b.set(yt,pt);let Nt=Q.textures;if(pt.length!==Nt.length||pt[0]!==a.COLOR_ATTACHMENT0){for(let Dt=0,oe=Nt.length;Dt<oe;Dt++)pt[Dt]=a.COLOR_ATTACHMENT0+Dt;pt.length=Nt.length,_t=!0}}else if(pt[0]!==a.BACK)pt[0]=a.BACK,_t=!0;if(_t)a.drawBuffers(pt)}function xt(Q){if(C!==Q)return a.useProgram(Q),C=Q,!0;return!1}let wt={[100]:a.FUNC_ADD,[101]:a.FUNC_SUBTRACT,[102]:a.FUNC_REVERSE_SUBTRACT};wt[103]=a.MIN,wt[104]=a.MAX;let W={[200]:a.ZERO,[201]:a.ONE,[202]:a.SRC_COLOR,[204]:a.SRC_ALPHA,[210]:a.SRC_ALPHA_SATURATE,[208]:a.DST_COLOR,[206]:a.DST_ALPHA,[203]:a.ONE_MINUS_SRC_COLOR,[205]:a.ONE_MINUS_SRC_ALPHA,[209]:a.ONE_MINUS_DST_COLOR,[207]:a.ONE_MINUS_DST_ALPHA,[211]:a.CONSTANT_COLOR,[212]:a.ONE_MINUS_CONSTANT_COLOR,[213]:a.CONSTANT_ALPHA,[214]:a.ONE_MINUS_CONSTANT_ALPHA};function Bt(Q,yt,pt,_t,Nt,Dt,oe,Te,Ie,me){if(Q===0){if(P===!0)te(a.BLEND),P=!1;return}if(P===!1)Pt(a.BLEND),P=!0;if(Q!==5){if(Q!==T||me!==O){if(w!==100||H!==100)a.blendEquation(a.FUNC_ADD),w=100,H=100;if(me)switch(Q){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}G=null,N=null,rt=null,V=null,q.set(0,0,0),ct=0,T=Q,O=me}return}if(Nt=Nt||yt,Dt=Dt||pt,oe=oe||_t,yt!==w||Nt!==H)a.blendEquationSeparate(wt[yt],wt[Nt]),w=yt,H=Nt;if(pt!==G||_t!==N||Dt!==rt||oe!==V)a.blendFuncSeparate(W[pt],W[_t],W[Dt],W[oe]),G=pt,N=_t,rt=Dt,V=oe;if(Te.equals(q)===!1||Ie!==ct)a.blendColor(Te.r,Te.g,Te.b,Ie),q.copy(Te),ct=Ie;T=Q,O=!1}function At(Q,yt){Q.side===2?te(a.CULL_FACE):Pt(a.CULL_FACE);let pt=Q.side===1;if(yt)pt=!pt;Vt(pt),Q.blending===1&&Q.transparent===!1?Bt(0):Bt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),y.setFunc(Q.depthFunc),y.setTest(Q.depthTest),y.setMask(Q.depthWrite),_.setMask(Q.colorWrite);let _t=Q.stencilWrite;if(x.setTest(_t),_t)x.setMask(Q.stencilWriteMask),x.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),x.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass);Ot(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?Pt(a.SAMPLE_ALPHA_TO_COVERAGE):te(a.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(Q){if(B!==Q){if(Q)a.frontFace(a.CW);else a.frontFace(a.CCW);B=Q}}function Mt(Q){if(Q!==0){if(Pt(a.CULL_FACE),Q!==j)if(Q===1)a.cullFace(a.BACK);else if(Q===2)a.cullFace(a.FRONT);else a.cullFace(a.FRONT_AND_BACK)}else te(a.CULL_FACE);j=Q}function ie(Q){if(Q!==at){if(Z)a.lineWidth(Q);at=Q}}function Ot(Q,yt,pt){if(Q){if(Pt(a.POLYGON_OFFSET_FILL),ot!==yt||ht!==pt)a.polygonOffset(yt,pt),ot=yt,ht=pt}else te(a.POLYGON_OFFSET_FILL)}function Xt(Q){if(Q)Pt(a.SCISSOR_TEST);else te(a.SCISSOR_TEST)}function k(Q){if(Q===void 0)Q=a.TEXTURE0+ft-1;if(Ct!==Q)a.activeTexture(Q),Ct=Q}function L(Q,yt,pt){if(pt===void 0)if(Ct===null)pt=a.TEXTURE0+ft-1;else pt=Ct;let _t=U[pt];if(_t===void 0)_t={type:void 0,texture:void 0},U[pt]=_t;if(_t.type!==Q||_t.texture!==yt){if(Ct!==pt)a.activeTexture(pt),Ct=pt;a.bindTexture(Q,yt||Gt[Q]),_t.type=Q,_t.texture=yt}}function nt(){let Q=U[Ct];if(Q!==void 0&&Q.type!==void 0)a.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0}function mt(){try{a.compressedTexImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function gt(){try{a.compressedTexImage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ut(){try{a.texSubImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function $t(){try{a.texSubImage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Lt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function It(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ee(){try{a.texStorage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function bt(){try{a.texStorage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function zt(){try{a.texImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ue(){try{a.texImage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function se(Q){if(dt.equals(Q)===!1)a.scissor(Q.x,Q.y,Q.z,Q.w),dt.copy(Q)}function kt(Q){if(Et.equals(Q)===!1)a.viewport(Q.x,Q.y,Q.z,Q.w),Et.copy(Q)}function ae(Q,yt){let pt=S.get(yt);if(pt===void 0)pt=new WeakMap,S.set(yt,pt);let _t=pt.get(Q);if(_t===void 0)_t=a.getUniformBlockIndex(yt,Q.name),pt.set(Q,_t)}function ne(Q,yt){let _t=S.get(yt).get(Q);if(M.get(yt)!==_t)a.uniformBlockBinding(yt,_t,Q.__bindingPointIndex),M.set(yt,_t)}function be(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),y.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),E={},Ct=null,U={},v={},b=new WeakMap,A=[],C=null,P=!1,T=null,w=null,G=null,N=null,H=null,rt=null,V=null,q=new pe(0,0,0),ct=0,O=!1,B=null,j=null,at=null,ot=null,ht=null,dt.set(0,0,a.canvas.width,a.canvas.height),Et.set(0,0,a.canvas.width,a.canvas.height),_.reset(),y.reset(),x.reset()}return{buffers:{color:_,depth:y,stencil:x},enable:Pt,disable:te,bindFramebuffer:ce,drawBuffers:Qt,useProgram:xt,setBlending:Bt,setMaterial:At,setFlipSided:Vt,setCullFace:Mt,setLineWidth:ie,setPolygonOffset:Ot,setScissorTest:Xt,activeTexture:k,bindTexture:L,unbindTexture:nt,compressedTexImage2D:mt,compressedTexImage3D:gt,texImage2D:zt,texImage3D:ue,updateUBOMapping:ae,uniformBlockBinding:ne,texStorage2D:ee,texStorage3D:bt,texSubImage2D:ut,texSubImage3D:$t,compressedTexSubImage2D:Lt,compressedTexSubImage3D:It,scissor:se,viewport:kt,reset:be}}function go(a,h,p,m){let g=Ff(m);switch(p){case 1021:return a*h;case 1024:return a*h;case 1025:return a*h*2;case 1028:return a*h/g.components*g.byteLength;case 1029:return a*h/g.components*g.byteLength;case 1030:return a*h*2/g.components*g.byteLength;case 1031:return a*h*2/g.components*g.byteLength;case 1022:return a*h*3/g.components*g.byteLength;case 1023:return a*h*4/g.components*g.byteLength;case 1033:return a*h*4/g.components*g.byteLength;case 33776:case 33777:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*8;case 33778:case 33779:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 35841:case 35843:return Math.max(a,16)*Math.max(h,8)/4;case 35840:case 35842:return Math.max(a,8)*Math.max(h,8)/2;case 36196:case 37492:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*8;case 37496:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 37808:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 37809:return Math.floor((a+4)/5)*Math.floor((h+3)/4)*16;case 37810:return Math.floor((a+4)/5)*Math.floor((h+4)/5)*16;case 37811:return Math.floor((a+5)/6)*Math.floor((h+4)/5)*16;case 37812:return Math.floor((a+5)/6)*Math.floor((h+5)/6)*16;case 37813:return Math.floor((a+7)/8)*Math.floor((h+4)/5)*16;case 37814:return Math.floor((a+7)/8)*Math.floor((h+5)/6)*16;case 37815:return Math.floor((a+7)/8)*Math.floor((h+7)/8)*16;case 37816:return Math.floor((a+9)/10)*Math.floor((h+4)/5)*16;case 37817:return Math.floor((a+9)/10)*Math.floor((h+5)/6)*16;case 37818:return Math.floor((a+9)/10)*Math.floor((h+7)/8)*16;case 37819:return Math.floor((a+9)/10)*Math.floor((h+9)/10)*16;case 37820:return Math.floor((a+11)/12)*Math.floor((h+9)/10)*16;case 37821:return Math.floor((a+11)/12)*Math.floor((h+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(a/4)*Math.ceil(h/4)*16;case 36283:case 36284:return Math.ceil(a/4)*Math.ceil(h/4)*8;case 36285:case 36286:return Math.ceil(a/4)*Math.ceil(h/4)*16}throw Error(`Unable to determine texture byte length for ${p} format.`)}function Ff(a){switch(a){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${a}.`)}function Of(a,h,p,m,g,_,y){let x=h.has("WEBGL_multisampled_render_to_texture")?h.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new St,E=new WeakMap,v,b=new WeakMap,A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(k){}function C(k,L){return A?new OffscreenCanvas(k,L):Bs("canvas")}function P(k,L,nt){let mt=1,gt=Xt(k);if(gt.width>nt||gt.height>nt)mt=nt/Math.max(gt.width,gt.height);if(mt<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let ut=Math.floor(mt*gt.width),$t=Math.floor(mt*gt.height);if(v===void 0)v=C(ut,$t);let Lt=L?C(ut,$t):v;return Lt.width=ut,Lt.height=$t,Lt.getContext("2d").drawImage(k,0,0,ut,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ut+"x"+$t+")."),Lt}else{if("data"in k)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+").");return k}return k}function T(k){return k.generateMipmaps}function w(k){a.generateMipmap(k)}function G(k){if(k.isWebGLCubeRenderTarget)return a.TEXTURE_CUBE_MAP;if(k.isWebGL3DRenderTarget)return a.TEXTURE_3D;if(k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture)return a.TEXTURE_2D_ARRAY;return a.TEXTURE_2D}function N(k,L,nt,mt,gt=!1){if(k!==null){if(a[k]!==void 0)return a[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ut=L;if(L===a.RED){if(nt===a.FLOAT)ut=a.R32F;if(nt===a.HALF_FLOAT)ut=a.R16F;if(nt===a.UNSIGNED_BYTE)ut=a.R8}if(L===a.RED_INTEGER){if(nt===a.UNSIGNED_BYTE)ut=a.R8UI;if(nt===a.UNSIGNED_SHORT)ut=a.R16UI;if(nt===a.UNSIGNED_INT)ut=a.R32UI;if(nt===a.BYTE)ut=a.R8I;if(nt===a.SHORT)ut=a.R16I;if(nt===a.INT)ut=a.R32I}if(L===a.RG){if(nt===a.FLOAT)ut=a.RG32F;if(nt===a.HALF_FLOAT)ut=a.RG16F;if(nt===a.UNSIGNED_BYTE)ut=a.RG8}if(L===a.RG_INTEGER){if(nt===a.UNSIGNED_BYTE)ut=a.RG8UI;if(nt===a.UNSIGNED_SHORT)ut=a.RG16UI;if(nt===a.UNSIGNED_INT)ut=a.RG32UI;if(nt===a.BYTE)ut=a.RG8I;if(nt===a.SHORT)ut=a.RG16I;if(nt===a.INT)ut=a.RG32I}if(L===a.RGB_INTEGER){if(nt===a.UNSIGNED_BYTE)ut=a.RGB8UI;if(nt===a.UNSIGNED_SHORT)ut=a.RGB16UI;if(nt===a.UNSIGNED_INT)ut=a.RGB32UI;if(nt===a.BYTE)ut=a.RGB8I;if(nt===a.SHORT)ut=a.RGB16I;if(nt===a.INT)ut=a.RGB32I}if(L===a.RGBA_INTEGER){if(nt===a.UNSIGNED_BYTE)ut=a.RGBA8UI;if(nt===a.UNSIGNED_SHORT)ut=a.RGBA16UI;if(nt===a.UNSIGNED_INT)ut=a.RGBA32UI;if(nt===a.BYTE)ut=a.RGBA8I;if(nt===a.SHORT)ut=a.RGBA16I;if(nt===a.INT)ut=a.RGBA32I}if(L===a.RGB){if(nt===a.UNSIGNED_INT_5_9_9_9_REV)ut=a.RGB9_E5}if(L===a.RGBA){let $t=gt?"linear":ge.getTransfer(mt);if(nt===a.FLOAT)ut=a.RGBA32F;if(nt===a.HALF_FLOAT)ut=a.RGBA16F;if(nt===a.UNSIGNED_BYTE)ut=$t==="srgb"?a.SRGB8_ALPHA8:a.RGBA8;if(nt===a.UNSIGNED_SHORT_4_4_4_4)ut=a.RGBA4;if(nt===a.UNSIGNED_SHORT_5_5_5_1)ut=a.RGB5_A1}if(ut===a.R16F||ut===a.R32F||ut===a.RG16F||ut===a.RG32F||ut===a.RGBA16F||ut===a.RGBA32F)h.get("EXT_color_buffer_float");return ut}function H(k,L){let nt;if(k){if(L===null||L===1014||L===1020)nt=a.DEPTH24_STENCIL8;else if(L===1015)nt=a.DEPTH32F_STENCIL8;else if(L===1012)nt=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(L===null||L===1014||L===1020)nt=a.DEPTH_COMPONENT24;else if(L===1015)nt=a.DEPTH_COMPONENT32F;else if(L===1012)nt=a.DEPTH_COMPONENT16;return nt}function rt(k,L){if(T(k)===!0||k.isFramebufferTexture&&k.minFilter!==1003&&k.minFilter!==1006)return Math.log2(Math.max(L.width,L.height))+1;else if(k.mipmaps!==void 0&&k.mipmaps.length>0)return k.mipmaps.length;else if(k.isCompressedTexture&&Array.isArray(k.image))return L.mipmaps.length;else return 1}function V(k){let L=k.target;if(L.removeEventListener("dispose",V),ct(L),L.isVideoTexture)E.delete(L)}function q(k){let L=k.target;L.removeEventListener("dispose",q),B(L)}function ct(k){let L=m.get(k);if(L.__webglInit===void 0)return;let nt=k.source,mt=b.get(nt);if(mt){let gt=mt[L.__cacheKey];if(gt.usedTimes--,gt.usedTimes===0)O(k);if(Object.keys(mt).length===0)b.delete(nt)}m.remove(k)}function O(k){let L=m.get(k);a.deleteTexture(L.__webglTexture);let nt=k.source,mt=b.get(nt);delete mt[L.__cacheKey],y.memory.textures--}function B(k){let L=m.get(k);if(k.depthTexture)k.depthTexture.dispose(),m.remove(k.depthTexture);if(k.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(L.__webglFramebuffer[mt]))for(let gt=0;gt<L.__webglFramebuffer[mt].length;gt++)a.deleteFramebuffer(L.__webglFramebuffer[mt][gt]);else a.deleteFramebuffer(L.__webglFramebuffer[mt]);if(L.__webglDepthbuffer)a.deleteRenderbuffer(L.__webglDepthbuffer[mt])}else{if(Array.isArray(L.__webglFramebuffer))for(let mt=0;mt<L.__webglFramebuffer.length;mt++)a.deleteFramebuffer(L.__webglFramebuffer[mt]);else a.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer)a.deleteRenderbuffer(L.__webglDepthbuffer);if(L.__webglMultisampledFramebuffer)a.deleteFramebuffer(L.__webglMultisampledFramebuffer);if(L.__webglColorRenderbuffer){for(let mt=0;mt<L.__webglColorRenderbuffer.length;mt++)if(L.__webglColorRenderbuffer[mt])a.deleteRenderbuffer(L.__webglColorRenderbuffer[mt])}if(L.__webglDepthRenderbuffer)a.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let nt=k.textures;for(let mt=0,gt=nt.length;mt<gt;mt++){let ut=m.get(nt[mt]);if(ut.__webglTexture)a.deleteTexture(ut.__webglTexture),y.memory.textures--;m.remove(nt[mt])}m.remove(k)}let j=0;function at(){j=0}function ot(){let k=j;if(k>=g.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+g.maxTextures);return j+=1,k}function ht(k){let L=[];return L.push(k.wrapS),L.push(k.wrapT),L.push(k.wrapR||0),L.push(k.magFilter),L.push(k.minFilter),L.push(k.anisotropy),L.push(k.internalFormat),L.push(k.format),L.push(k.type),L.push(k.generateMipmaps),L.push(k.premultiplyAlpha),L.push(k.flipY),L.push(k.unpackAlignment),L.push(k.colorSpace),L.join()}function ft(k,L){let nt=m.get(k);if(k.isVideoTexture)ie(k);if(k.isRenderTargetTexture===!1&&k.version>0&&nt.__version!==k.version){let mt=k.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(nt,k,L);return}}p.bindTexture(a.TEXTURE_2D,nt.__webglTexture,a.TEXTURE0+L)}function Z(k,L){let nt=m.get(k);if(k.version>0&&nt.__version!==k.version){Et(nt,k,L);return}p.bindTexture(a.TEXTURE_2D_ARRAY,nt.__webglTexture,a.TEXTURE0+L)}function st(k,L){let nt=m.get(k);if(k.version>0&&nt.__version!==k.version){Et(nt,k,L);return}p.bindTexture(a.TEXTURE_3D,nt.__webglTexture,a.TEXTURE0+L)}function Y(k,L){let nt=m.get(k);if(k.version>0&&nt.__version!==k.version){Yt(nt,k,L);return}p.bindTexture(a.TEXTURE_CUBE_MAP,nt.__webglTexture,a.TEXTURE0+L)}let Ct={[1000]:a.REPEAT,[1001]:a.CLAMP_TO_EDGE,[1002]:a.MIRRORED_REPEAT},U={[1003]:a.NEAREST,[1004]:a.NEAREST_MIPMAP_NEAREST,[1005]:a.NEAREST_MIPMAP_LINEAR,[1006]:a.LINEAR,[1007]:a.LINEAR_MIPMAP_NEAREST,[1008]:a.LINEAR_MIPMAP_LINEAR},Wt={[512]:a.NEVER,[519]:a.ALWAYS,[513]:a.LESS,[515]:a.LEQUAL,[514]:a.EQUAL,[518]:a.GEQUAL,[516]:a.GREATER,[517]:a.NOTEQUAL};function jt(k,L){if(L.type===1015&&h.has("OES_texture_float_linear")===!1&&(L.magFilter===1006||L.magFilter===1007||L.magFilter===1005||L.magFilter===1008||L.minFilter===1006||L.minFilter===1007||L.minFilter===1005||L.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(a.texParameteri(k,a.TEXTURE_WRAP_S,Ct[L.wrapS]),a.texParameteri(k,a.TEXTURE_WRAP_T,Ct[L.wrapT]),k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)a.texParameteri(k,a.TEXTURE_WRAP_R,Ct[L.wrapR]);if(a.texParameteri(k,a.TEXTURE_MAG_FILTER,U[L.magFilter]),a.texParameteri(k,a.TEXTURE_MIN_FILTER,U[L.minFilter]),L.compareFunction)a.texParameteri(k,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(k,a.TEXTURE_COMPARE_FUNC,Wt[L.compareFunction]);if(h.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===1003)return;if(L.minFilter!==1005&&L.minFilter!==1008)return;if(L.type===1015&&h.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||m.get(L).__currentAnisotropy){let nt=h.get("EXT_texture_filter_anisotropic");a.texParameterf(k,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,g.getMaxAnisotropy())),m.get(L).__currentAnisotropy=L.anisotropy}}}function dt(k,L){let nt=!1;if(k.__webglInit===void 0)k.__webglInit=!0,L.addEventListener("dispose",V);let mt=L.source,gt=b.get(mt);if(gt===void 0)gt={},b.set(mt,gt);let ut=ht(L);if(ut!==k.__cacheKey){if(gt[ut]===void 0)gt[ut]={texture:a.createTexture(),usedTimes:0},y.memory.textures++,nt=!0;gt[ut].usedTimes++;let $t=gt[k.__cacheKey];if($t!==void 0){if(gt[k.__cacheKey].usedTimes--,$t.usedTimes===0)O(L)}k.__cacheKey=ut,k.__webglTexture=gt[ut].texture}return nt}function Et(k,L,nt){let mt=a.TEXTURE_2D;if(L.isDataArrayTexture||L.isCompressedArrayTexture)mt=a.TEXTURE_2D_ARRAY;if(L.isData3DTexture)mt=a.TEXTURE_3D;let gt=dt(k,L),ut=L.source;p.bindTexture(mt,k.__webglTexture,a.TEXTURE0+nt);let $t=m.get(ut);if(ut.version!==$t.__version||gt===!0){p.activeTexture(a.TEXTURE0+nt);let Lt=ge.getPrimaries(ge.workingColorSpace),It=L.colorSpace===""?null:ge.getPrimaries(L.colorSpace),ee=L.colorSpace===""||Lt===It?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,L.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,L.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let bt=P(L.image,!1,g.maxTextureSize);bt=Ot(L,bt);let zt=_.convert(L.format,L.colorSpace),ue=_.convert(L.type),se=N(L.internalFormat,zt,ue,L.colorSpace,L.isVideoTexture);jt(mt,L);let kt,ae=L.mipmaps,ne=L.isVideoTexture!==!0,be=$t.__version===void 0||gt===!0,Q=ut.dataReady,yt=rt(L,bt);if(L.isDepthTexture){if(se=H(L.format===1027,L.type),be)if(ne)p.texStorage2D(a.TEXTURE_2D,1,se,bt.width,bt.height);else p.texImage2D(a.TEXTURE_2D,0,se,bt.width,bt.height,0,zt,ue,null)}else if(L.isDataTexture)if(ae.length>0){if(ne&&be)p.texStorage2D(a.TEXTURE_2D,yt,se,ae[0].width,ae[0].height);for(let pt=0,_t=ae.length;pt<_t;pt++)if(kt=ae[pt],ne){if(Q)p.texSubImage2D(a.TEXTURE_2D,pt,0,0,kt.width,kt.height,zt,ue,kt.data)}else p.texImage2D(a.TEXTURE_2D,pt,se,kt.width,kt.height,0,zt,ue,kt.data);L.generateMipmaps=!1}else if(ne){if(be)p.texStorage2D(a.TEXTURE_2D,yt,se,bt.width,bt.height);if(Q)p.texSubImage2D(a.TEXTURE_2D,0,0,0,bt.width,bt.height,zt,ue,bt.data)}else p.texImage2D(a.TEXTURE_2D,0,se,bt.width,bt.height,0,zt,ue,bt.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){if(ne&&be)p.texStorage3D(a.TEXTURE_2D_ARRAY,yt,se,ae[0].width,ae[0].height,bt.depth);for(let pt=0,_t=ae.length;pt<_t;pt++)if(kt=ae[pt],L.format!==1023)if(zt!==null)if(ne){if(Q)if(L.layerUpdates.size>0){let Nt=go(kt.width,kt.height,L.format,L.type);for(let Dt of L.layerUpdates){let oe=kt.data.subarray(Dt*Nt/kt.data.BYTES_PER_ELEMENT,(Dt+1)*Nt/kt.data.BYTES_PER_ELEMENT);p.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pt,0,0,Dt,kt.width,kt.height,1,zt,oe)}L.clearLayerUpdates()}else p.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pt,0,0,0,kt.width,kt.height,bt.depth,zt,kt.data)}else p.compressedTexImage3D(a.TEXTURE_2D_ARRAY,pt,se,kt.width,kt.height,bt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ne){if(Q)p.texSubImage3D(a.TEXTURE_2D_ARRAY,pt,0,0,0,kt.width,kt.height,bt.depth,zt,ue,kt.data)}else p.texImage3D(a.TEXTURE_2D_ARRAY,pt,se,kt.width,kt.height,bt.depth,0,zt,ue,kt.data)}else{if(ne&&be)p.texStorage2D(a.TEXTURE_2D,yt,se,ae[0].width,ae[0].height);for(let pt=0,_t=ae.length;pt<_t;pt++)if(kt=ae[pt],L.format!==1023)if(zt!==null)if(ne){if(Q)p.compressedTexSubImage2D(a.TEXTURE_2D,pt,0,0,kt.width,kt.height,zt,kt.data)}else p.compressedTexImage2D(a.TEXTURE_2D,pt,se,kt.width,kt.height,0,kt.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ne){if(Q)p.texSubImage2D(a.TEXTURE_2D,pt,0,0,kt.width,kt.height,zt,ue,kt.data)}else p.texImage2D(a.TEXTURE_2D,pt,se,kt.width,kt.height,0,zt,ue,kt.data)}else if(L.isDataArrayTexture)if(ne){if(be)p.texStorage3D(a.TEXTURE_2D_ARRAY,yt,se,bt.width,bt.height,bt.depth);if(Q)if(L.layerUpdates.size>0){let pt=go(bt.width,bt.height,L.format,L.type);for(let _t of L.layerUpdates){let Nt=bt.data.subarray(_t*pt/bt.data.BYTES_PER_ELEMENT,(_t+1)*pt/bt.data.BYTES_PER_ELEMENT);p.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,zt,ue,Nt)}L.clearLayerUpdates()}else p.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,zt,ue,bt.data)}else p.texImage3D(a.TEXTURE_2D_ARRAY,0,se,bt.width,bt.height,bt.depth,0,zt,ue,bt.data);else if(L.isData3DTexture)if(ne){if(be)p.texStorage3D(a.TEXTURE_3D,yt,se,bt.width,bt.height,bt.depth);if(Q)p.texSubImage3D(a.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,zt,ue,bt.data)}else p.texImage3D(a.TEXTURE_3D,0,se,bt.width,bt.height,bt.depth,0,zt,ue,bt.data);else if(L.isFramebufferTexture){if(be)if(ne)p.texStorage2D(a.TEXTURE_2D,yt,se,bt.width,bt.height);else{let pt=bt.width,_t=bt.height;for(let Nt=0;Nt<yt;Nt++)p.texImage2D(a.TEXTURE_2D,Nt,se,pt,_t,0,zt,ue,null),pt>>=1,_t>>=1}}else if(ae.length>0){if(ne&&be){let pt=Xt(ae[0]);p.texStorage2D(a.TEXTURE_2D,yt,se,pt.width,pt.height)}for(let pt=0,_t=ae.length;pt<_t;pt++)if(kt=ae[pt],ne){if(Q)p.texSubImage2D(a.TEXTURE_2D,pt,0,0,zt,ue,kt)}else p.texImage2D(a.TEXTURE_2D,pt,se,zt,ue,kt);L.generateMipmaps=!1}else if(ne){if(be){let pt=Xt(bt);p.texStorage2D(a.TEXTURE_2D,yt,se,pt.width,pt.height)}if(Q)p.texSubImage2D(a.TEXTURE_2D,0,0,0,zt,ue,bt)}else p.texImage2D(a.TEXTURE_2D,0,se,zt,ue,bt);if(T(L))w(mt);if($t.__version=ut.version,L.onUpdate)L.onUpdate(L)}k.__version=L.version}function Yt(k,L,nt){if(L.image.length!==6)return;let mt=dt(k,L),gt=L.source;p.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+nt);let ut=m.get(gt);if(gt.version!==ut.__version||mt===!0){p.activeTexture(a.TEXTURE0+nt);let $t=ge.getPrimaries(ge.workingColorSpace),Lt=L.colorSpace===""?null:ge.getPrimaries(L.colorSpace),It=L.colorSpace===""||$t===Lt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,L.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,L.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ee=L.isCompressedTexture||L.image[0].isCompressedTexture,bt=L.image[0]&&L.image[0].isDataTexture,zt=[];for(let _t=0;_t<6;_t++){if(!ee&&!bt)zt[_t]=P(L.image[_t],!0,g.maxCubemapSize);else zt[_t]=bt?L.image[_t].image:L.image[_t];zt[_t]=Ot(L,zt[_t])}let ue=zt[0],se=_.convert(L.format,L.colorSpace),kt=_.convert(L.type),ae=N(L.internalFormat,se,kt,L.colorSpace),ne=L.isVideoTexture!==!0,be=ut.__version===void 0||mt===!0,Q=gt.dataReady,yt=rt(L,ue);jt(a.TEXTURE_CUBE_MAP,L);let pt;if(ee){if(ne&&be)p.texStorage2D(a.TEXTURE_CUBE_MAP,yt,ae,ue.width,ue.height);for(let _t=0;_t<6;_t++){pt=zt[_t].mipmaps;for(let Nt=0;Nt<pt.length;Nt++){let Dt=pt[Nt];if(L.format!==1023)if(se!==null)if(ne){if(Q)p.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,0,0,Dt.width,Dt.height,se,Dt.data)}else p.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,ae,Dt.width,Dt.height,0,Dt.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(ne){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,0,0,Dt.width,Dt.height,se,kt,Dt.data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt,ae,Dt.width,Dt.height,0,se,kt,Dt.data)}}}else{if(pt=L.mipmaps,ne&&be){if(pt.length>0)yt++;let _t=Xt(zt[0]);p.texStorage2D(a.TEXTURE_CUBE_MAP,yt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){if(ne){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,zt[_t].width,zt[_t].height,se,kt,zt[_t].data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,zt[_t].width,zt[_t].height,0,se,kt,zt[_t].data);for(let Nt=0;Nt<pt.length;Nt++){let oe=pt[Nt].image[_t].image;if(ne){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,0,0,oe.width,oe.height,se,kt,oe.data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,ae,oe.width,oe.height,0,se,kt,oe.data)}}else{if(ne){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,se,kt,zt[_t])}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,se,kt,zt[_t]);for(let Nt=0;Nt<pt.length;Nt++){let Dt=pt[Nt];if(ne){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,0,0,se,kt,Dt.image[_t])}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Nt+1,ae,se,kt,Dt.image[_t])}}}if(T(L))w(a.TEXTURE_CUBE_MAP);if(ut.__version=gt.version,L.onUpdate)L.onUpdate(L)}k.__version=L.version}function Gt(k,L,nt,mt,gt,ut){let $t=_.convert(nt.format,nt.colorSpace),Lt=_.convert(nt.type),It=N(nt.internalFormat,$t,Lt,nt.colorSpace),ee=m.get(L),bt=m.get(nt);if(bt.__renderTarget=L,!ee.__hasExternalTextures){let zt=Math.max(1,L.width>>ut),ue=Math.max(1,L.height>>ut);if(gt===a.TEXTURE_3D||gt===a.TEXTURE_2D_ARRAY)p.texImage3D(gt,ut,It,zt,ue,L.depth,0,$t,Lt,null);else p.texImage2D(gt,ut,It,zt,ue,0,$t,Lt,null)}if(p.bindFramebuffer(a.FRAMEBUFFER,k),Mt(L))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,mt,gt,bt.__webglTexture,0,Vt(L));else if(gt===a.TEXTURE_2D||gt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)a.framebufferTexture2D(a.FRAMEBUFFER,mt,gt,bt.__webglTexture,ut);p.bindFramebuffer(a.FRAMEBUFFER,null)}function Pt(k,L,nt){if(a.bindRenderbuffer(a.RENDERBUFFER,k),L.depthBuffer){let mt=L.depthTexture,gt=mt&&mt.isDepthTexture?mt.type:null,ut=H(L.stencilBuffer,gt),$t=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Lt=Vt(L);if(Mt(L))x.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt,ut,L.width,L.height);else if(nt)a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt,ut,L.width,L.height);else a.renderbufferStorage(a.RENDERBUFFER,ut,L.width,L.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,$t,a.RENDERBUFFER,k)}else{let mt=L.textures;for(let gt=0;gt<mt.length;gt++){let ut=mt[gt],$t=_.convert(ut.format,ut.colorSpace),Lt=_.convert(ut.type),It=N(ut.internalFormat,$t,Lt,ut.colorSpace),ee=Vt(L);if(nt&&Mt(L)===!1)a.renderbufferStorageMultisample(a.RENDERBUFFER,ee,It,L.width,L.height);else if(Mt(L))x.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ee,It,L.width,L.height);else a.renderbufferStorage(a.RENDERBUFFER,It,L.width,L.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function te(k,L){if(L&&L.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(p.bindFramebuffer(a.FRAMEBUFFER,k),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let mt=m.get(L.depthTexture);if(mt.__renderTarget=L,!mt.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0;ft(L.depthTexture,0);let gt=mt.__webglTexture,ut=Vt(L);if(L.depthTexture.format===1026)if(Mt(L))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,gt,0,ut);else a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,gt,0);else if(L.depthTexture.format===1027)if(Mt(L))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,gt,0,ut);else a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,gt,0);else throw Error("Unknown depthTexture format")}function ce(k){let L=m.get(k),nt=k.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==k.depthTexture){let mt=k.depthTexture;if(L.__depthDisposeCallback)L.__depthDisposeCallback();if(mt){let gt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,mt.removeEventListener("dispose",gt)};mt.addEventListener("dispose",gt),L.__depthDisposeCallback=gt}L.__boundDepthTexture=mt}if(k.depthTexture&&!L.__autoAllocateDepthBuffer){if(nt)throw Error("target.depthTexture not supported in Cube render targets");te(L.__webglFramebuffer,k)}else if(nt){L.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(p.bindFramebuffer(a.FRAMEBUFFER,L.__webglFramebuffer[mt]),L.__webglDepthbuffer[mt]===void 0)L.__webglDepthbuffer[mt]=a.createRenderbuffer(),Pt(L.__webglDepthbuffer[mt],k,!1);else{let gt=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ut=L.__webglDepthbuffer[mt];a.bindRenderbuffer(a.RENDERBUFFER,ut),a.framebufferRenderbuffer(a.FRAMEBUFFER,gt,a.RENDERBUFFER,ut)}}else if(p.bindFramebuffer(a.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=a.createRenderbuffer(),Pt(L.__webglDepthbuffer,k,!1);else{let mt=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,gt=L.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,gt),a.framebufferRenderbuffer(a.FRAMEBUFFER,mt,a.RENDERBUFFER,gt)}p.bindFramebuffer(a.FRAMEBUFFER,null)}function Qt(k,L,nt){let mt=m.get(k);if(L!==void 0)Gt(mt.__webglFramebuffer,k,k.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0);if(nt!==void 0)ce(k)}function xt(k){let L=k.texture,nt=m.get(k),mt=m.get(L);k.addEventListener("dispose",q);let gt=k.textures,ut=k.isWebGLCubeRenderTarget===!0,$t=gt.length>1;if(!$t){if(mt.__webglTexture===void 0)mt.__webglTexture=a.createTexture();mt.__version=L.version,y.memory.textures++}if(ut){nt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(L.mipmaps&&L.mipmaps.length>0){nt.__webglFramebuffer[Lt]=[];for(let It=0;It<L.mipmaps.length;It++)nt.__webglFramebuffer[Lt][It]=a.createFramebuffer()}else nt.__webglFramebuffer[Lt]=a.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Lt=0;Lt<L.mipmaps.length;Lt++)nt.__webglFramebuffer[Lt]=a.createFramebuffer()}else nt.__webglFramebuffer=a.createFramebuffer();if($t)for(let Lt=0,It=gt.length;Lt<It;Lt++){let ee=m.get(gt[Lt]);if(ee.__webglTexture===void 0)ee.__webglTexture=a.createTexture(),y.memory.textures++}if(k.samples>0&&Mt(k)===!1){nt.__webglMultisampledFramebuffer=a.createFramebuffer(),nt.__webglColorRenderbuffer=[],p.bindFramebuffer(a.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<gt.length;Lt++){let It=gt[Lt];nt.__webglColorRenderbuffer[Lt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,nt.__webglColorRenderbuffer[Lt]);let ee=_.convert(It.format,It.colorSpace),bt=_.convert(It.type),zt=N(It.internalFormat,ee,bt,It.colorSpace,k.isXRRenderTarget===!0),ue=Vt(k);a.renderbufferStorageMultisample(a.RENDERBUFFER,ue,zt,k.width,k.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Lt,a.RENDERBUFFER,nt.__webglColorRenderbuffer[Lt])}if(a.bindRenderbuffer(a.RENDERBUFFER,null),k.depthBuffer)nt.__webglDepthRenderbuffer=a.createRenderbuffer(),Pt(nt.__webglDepthRenderbuffer,k,!0);p.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ut){p.bindTexture(a.TEXTURE_CUBE_MAP,mt.__webglTexture),jt(a.TEXTURE_CUBE_MAP,L);for(let Lt=0;Lt<6;Lt++)if(L.mipmaps&&L.mipmaps.length>0)for(let It=0;It<L.mipmaps.length;It++)Gt(nt.__webglFramebuffer[Lt][It],k,L,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,It);else Gt(nt.__webglFramebuffer[Lt],k,L,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);if(T(L))w(a.TEXTURE_CUBE_MAP);p.unbindTexture()}else if($t){for(let Lt=0,It=gt.length;Lt<It;Lt++){let ee=gt[Lt],bt=m.get(ee);if(p.bindTexture(a.TEXTURE_2D,bt.__webglTexture),jt(a.TEXTURE_2D,ee),Gt(nt.__webglFramebuffer,k,ee,a.COLOR_ATTACHMENT0+Lt,a.TEXTURE_2D,0),T(ee))w(a.TEXTURE_2D)}p.unbindTexture()}else{let Lt=a.TEXTURE_2D;if(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)Lt=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY;if(p.bindTexture(Lt,mt.__webglTexture),jt(Lt,L),L.mipmaps&&L.mipmaps.length>0)for(let It=0;It<L.mipmaps.length;It++)Gt(nt.__webglFramebuffer[It],k,L,a.COLOR_ATTACHMENT0,Lt,It);else Gt(nt.__webglFramebuffer,k,L,a.COLOR_ATTACHMENT0,Lt,0);if(T(L))w(Lt);p.unbindTexture()}if(k.depthBuffer)ce(k)}function wt(k){let L=k.textures;for(let nt=0,mt=L.length;nt<mt;nt++){let gt=L[nt];if(T(gt)){let ut=G(k),$t=m.get(gt).__webglTexture;p.bindTexture(ut,$t),w(ut),p.unbindTexture()}}}let W=[],Bt=[];function At(k){if(k.samples>0){if(Mt(k)===!1){let{textures:L,width:nt,height:mt}=k,gt=a.COLOR_BUFFER_BIT,ut=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,$t=m.get(k),Lt=L.length>1;if(Lt)for(let It=0;It<L.length;It++)p.bindFramebuffer(a.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+It,a.RENDERBUFFER,null),p.bindFramebuffer(a.FRAMEBUFFER,$t.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+It,a.TEXTURE_2D,null,0);p.bindFramebuffer(a.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer),p.bindFramebuffer(a.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let It=0;It<L.length;It++){if(k.resolveDepthBuffer){if(k.depthBuffer)gt|=a.DEPTH_BUFFER_BIT;if(k.stencilBuffer&&k.resolveStencilBuffer)gt|=a.STENCIL_BUFFER_BIT}if(Lt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,$t.__webglColorRenderbuffer[It]);let ee=m.get(L[It]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ee,0)}if(a.blitFramebuffer(0,0,nt,mt,0,0,nt,mt,gt,a.NEAREST),M===!0){if(W.length=0,Bt.length=0,W.push(a.COLOR_ATTACHMENT0+It),k.depthBuffer&&k.resolveDepthBuffer===!1)W.push(ut),Bt.push(ut),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Bt);a.invalidateFramebuffer(a.READ_FRAMEBUFFER,W)}}if(p.bindFramebuffer(a.READ_FRAMEBUFFER,null),p.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Lt)for(let It=0;It<L.length;It++){p.bindFramebuffer(a.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+It,a.RENDERBUFFER,$t.__webglColorRenderbuffer[It]);let ee=m.get(L[It]).__webglTexture;p.bindFramebuffer(a.FRAMEBUFFER,$t.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+It,a.TEXTURE_2D,ee,0)}p.bindFramebuffer(a.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&M){let L=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[L])}}}function Vt(k){return Math.min(g.maxSamples,k.samples)}function Mt(k){let L=m.get(k);return k.samples>0&&h.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function ie(k){let L=y.render.frame;if(E.get(k)!==L)E.set(k,L),k.update()}function Ot(k,L){let{colorSpace:nt,format:mt,type:gt}=k;if(k.isCompressedTexture===!0||k.isVideoTexture===!0)return L;if(nt!=="srgb-linear"&&nt!=="")if(ge.getTransfer(nt)==="srgb"){if(mt!==1023||gt!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",nt);return L}function Xt(k){if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement)S.width=k.naturalWidth||k.width,S.height=k.naturalHeight||k.height;else if(typeof VideoFrame<"u"&&k instanceof VideoFrame)S.width=k.displayWidth,S.height=k.displayHeight;else S.width=k.width,S.height=k.height;return S}this.allocateTextureUnit=ot,this.resetTextureUnits=at,this.setTexture2D=ft,this.setTexture2DArray=Z,this.setTexture3D=st,this.setTextureCube=Y,this.rebindTextures=Qt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=Mt}function Bf(a,h){function p(m,g=""){let _,y=ge.getTransfer(g);if(m===1009)return a.UNSIGNED_BYTE;if(m===1017)return a.UNSIGNED_SHORT_4_4_4_4;if(m===1018)return a.UNSIGNED_SHORT_5_5_5_1;if(m===35902)return a.UNSIGNED_INT_5_9_9_9_REV;if(m===1010)return a.BYTE;if(m===1011)return a.SHORT;if(m===1012)return a.UNSIGNED_SHORT;if(m===1013)return a.INT;if(m===1014)return a.UNSIGNED_INT;if(m===1015)return a.FLOAT;if(m===1016)return a.HALF_FLOAT;if(m===1021)return a.ALPHA;if(m===1022)return a.RGB;if(m===1023)return a.RGBA;if(m===1024)return a.LUMINANCE;if(m===1025)return a.LUMINANCE_ALPHA;if(m===1026)return a.DEPTH_COMPONENT;if(m===1027)return a.DEPTH_STENCIL;if(m===1028)return a.RED;if(m===1029)return a.RED_INTEGER;if(m===1030)return a.RG;if(m===1031)return a.RG_INTEGER;if(m===1033)return a.RGBA_INTEGER;if(m===33776||m===33777||m===33778||m===33779)if(y==="srgb")if(_=h.get("WEBGL_compressed_texture_s3tc_srgb"),_!==null){if(m===33776)return _.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(_=h.get("WEBGL_compressed_texture_s3tc"),_!==null){if(m===33776)return _.COMPRESSED_RGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(m===35840||m===35841||m===35842||m===35843)if(_=h.get("WEBGL_compressed_texture_pvrtc"),_!==null){if(m===35840)return _.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(m===35841)return _.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(m===35842)return _.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(m===35843)return _.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(m===36196||m===37492||m===37496)if(_=h.get("WEBGL_compressed_texture_etc"),_!==null){if(m===36196||m===37492)return y==="srgb"?_.COMPRESSED_SRGB8_ETC2:_.COMPRESSED_RGB8_ETC2;if(m===37496)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:_.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(m===37808||m===37809||m===37810||m===37811||m===37812||m===37813||m===37814||m===37815||m===37816||m===37817||m===37818||m===37819||m===37820||m===37821)if(_=h.get("WEBGL_compressed_texture_astc"),_!==null){if(m===37808)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:_.COMPRESSED_RGBA_ASTC_4x4_KHR;if(m===37809)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:_.COMPRESSED_RGBA_ASTC_5x4_KHR;if(m===37810)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:_.COMPRESSED_RGBA_ASTC_5x5_KHR;if(m===37811)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:_.COMPRESSED_RGBA_ASTC_6x5_KHR;if(m===37812)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:_.COMPRESSED_RGBA_ASTC_6x6_KHR;if(m===37813)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:_.COMPRESSED_RGBA_ASTC_8x5_KHR;if(m===37814)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:_.COMPRESSED_RGBA_ASTC_8x6_KHR;if(m===37815)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:_.COMPRESSED_RGBA_ASTC_8x8_KHR;if(m===37816)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:_.COMPRESSED_RGBA_ASTC_10x5_KHR;if(m===37817)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:_.COMPRESSED_RGBA_ASTC_10x6_KHR;if(m===37818)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:_.COMPRESSED_RGBA_ASTC_10x8_KHR;if(m===37819)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:_.COMPRESSED_RGBA_ASTC_10x10_KHR;if(m===37820)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:_.COMPRESSED_RGBA_ASTC_12x10_KHR;if(m===37821)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:_.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(m===36492||m===36494||m===36495)if(_=h.get("EXT_texture_compression_bptc"),_!==null){if(m===36492)return y==="srgb"?_.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:_.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(m===36494)return _.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(m===36495)return _.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(m===36283||m===36284||m===36285||m===36286)if(_=h.get("EXT_texture_compression_rgtc"),_!==null){if(m===36492)return _.COMPRESSED_RED_RGTC1_EXT;if(m===36284)return _.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(m===36285)return _.COMPRESSED_RED_GREEN_RGTC2_EXT;if(m===36286)return _.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(m===1020)return a.UNSIGNED_INT_24_8;return a[m]!==void 0?a[m]:null}return{convert:p}}class tl extends Ve{constructor(a=[]){super();this.isArrayCamera=!0,this.cameras=a}}class Ft extends Be{constructor(){super();this.isGroup=!0,this.type="Group"}}var zf={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X;return this._grip}dispatchEvent(a){if(this._targetRay!==null)this._targetRay.dispatchEvent(a);if(this._grip!==null)this._grip.dispatchEvent(a);if(this._hand!==null)this._hand.dispatchEvent(a);return this}connect(a){if(a&&a.hand){let h=this._hand;if(h)for(let p of a.hand.values())this._getHandJoint(h,p)}return this.dispatchEvent({type:"connected",data:a}),this}disconnect(a){if(this.dispatchEvent({type:"disconnected",data:a}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(a,h,p){let m=null,g=null,_=null,y=this._targetRay,x=this._grip,M=this._hand;if(a&&h.session.visibilityState!=="visible-blurred"){if(M&&a.hand){_=!0;for(let C of a.hand.values()){let P=h.getJointPose(C,p),T=this._getHandJoint(M,C);if(P!==null)T.matrix.fromArray(P.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.matrixWorldNeedsUpdate=!0,T.jointRadius=P.radius;T.visible=P!==null}let S=M.joints["index-finger-tip"],E=M.joints["thumb-tip"],v=S.position.distanceTo(E.position),b=0.02,A=0.005;if(M.inputState.pinching&&v>b+A)M.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:a.handedness,target:this});else if(!M.inputState.pinching&&v<=b-A)M.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:a.handedness,target:this})}else if(x!==null&&a.gripSpace){if(g=h.getPose(a.gripSpace,p),g!==null){if(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,g.linearVelocity)x.hasLinearVelocity=!0,x.linearVelocity.copy(g.linearVelocity);else x.hasLinearVelocity=!1;if(g.angularVelocity)x.hasAngularVelocity=!0,x.angularVelocity.copy(g.angularVelocity);else x.hasAngularVelocity=!1}}if(y!==null){if(m=h.getPose(a.targetRaySpace,p),m===null&&g!==null)m=g;if(m!==null){if(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,m.linearVelocity)y.hasLinearVelocity=!0,y.linearVelocity.copy(m.linearVelocity);else y.hasLinearVelocity=!1;if(m.angularVelocity)y.hasAngularVelocity=!0,y.angularVelocity.copy(m.angularVelocity);else y.hasAngularVelocity=!1;this.dispatchEvent(zf)}}}if(y!==null)y.visible=m!==null;if(x!==null)x.visible=g!==null;if(M!==null)M.visible=_!==null;return this}_getHandJoint(a,h){if(a.joints[h.jointName]===void 0){let p=new Ft;p.matrixAutoUpdate=!1,p.visible=!1,a.joints[h.jointName]=p,a.add(p)}return a.joints[h.jointName]}}var Hf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kf=`
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

}`;class el{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(a,h,p){if(this.texture===null){let m=new Xe,g=a.properties.get(m);if(g.__webglTexture=h.texture,h.depthNear!=p.depthNear||h.depthFar!=p.depthFar)this.depthNear=h.depthNear,this.depthFar=h.depthFar;this.texture=m}}getMesh(a){if(this.texture!==null){if(this.mesh===null){let h=a.cameras[0].viewport,p=new In({vertexShader:Hf,fragmentShader:kf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:h.z},depthHeight:{value:h.w}}});this.mesh=new he(new wi(20,20),p)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nl extends Wn{constructor(a,h){super();let p=this,m=null,g=1,_=null,y="local-floor",x=1,M=null,S=null,E=null,v=null,b=null,A=null,C=new el,P=h.getContextAttributes(),T=null,w=null,G=[],N=[],H=new St,rt=null,V=new Ve;V.viewport=new Me;let q=new Ve;q.viewport=new Me;let ct=[V,q],O=new tl,B=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let Et=G[dt];if(Et===void 0)Et=new Os,G[dt]=Et;return Et.getTargetRaySpace()},this.getControllerGrip=function(dt){let Et=G[dt];if(Et===void 0)Et=new Os,G[dt]=Et;return Et.getGripSpace()},this.getHand=function(dt){let Et=G[dt];if(Et===void 0)Et=new Os,G[dt]=Et;return Et.getHandSpace()};function at(dt){let Et=N.indexOf(dt.inputSource);if(Et===-1)return;let Yt=G[Et];if(Yt!==void 0)Yt.update(dt.inputSource,dt.frame,M||_),Yt.dispatchEvent({type:dt.type,data:dt.inputSource})}function ot(){m.removeEventListener("select",at),m.removeEventListener("selectstart",at),m.removeEventListener("selectend",at),m.removeEventListener("squeeze",at),m.removeEventListener("squeezestart",at),m.removeEventListener("squeezeend",at),m.removeEventListener("end",ot),m.removeEventListener("inputsourceschange",ht);for(let dt=0;dt<G.length;dt++){let Et=N[dt];if(Et===null)continue;N[dt]=null,G[dt].disconnect(Et)}B=null,j=null,C.reset(),a.setRenderTarget(T),b=null,v=null,E=null,m=null,w=null,jt.stop(),p.isPresenting=!1,a.setPixelRatio(rt),a.setSize(H.width,H.height,!1),p.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){if(g=dt,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){if(y=dt,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return M||_},this.setReferenceSpace=function(dt){M=dt},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return E},this.getFrame=function(){return A},this.getSession=function(){return m},this.setSession=async function(dt){if(m=dt,m!==null){if(T=a.getRenderTarget(),m.addEventListener("select",at),m.addEventListener("selectstart",at),m.addEventListener("selectend",at),m.addEventListener("squeeze",at),m.addEventListener("squeezestart",at),m.addEventListener("squeezeend",at),m.addEventListener("end",ot),m.addEventListener("inputsourceschange",ht),P.xrCompatible!==!0)await h.makeXRCompatible();if(rt=a.getPixelRatio(),a.getSize(H),m.renderState.layers===void 0){let Et={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:g};b=new XRWebGLLayer(m,h,Et),m.updateRenderState({baseLayer:b}),a.setPixelRatio(1),a.setSize(b.framebufferWidth,b.framebufferHeight,!1),w=new Gn(b.framebufferWidth,b.framebufferHeight,{format:1023,type:1009,colorSpace:a.outputColorSpace,stencilBuffer:P.stencil})}else{let Et=null,Yt=null,Gt=null;if(P.depth)Gt=P.stencil?h.DEPTH24_STENCIL8:h.DEPTH_COMPONENT24,Et=P.stencil?1027:1026,Yt=P.stencil?1020:1014;let Pt={colorFormat:h.RGBA8,depthFormat:Gt,scaleFactor:g};E=new XRWebGLBinding(m,h),v=E.createProjectionLayer(Pt),m.updateRenderState({layers:[v]}),a.setPixelRatio(1),a.setSize(v.textureWidth,v.textureHeight,!1),w=new Gn(v.textureWidth,v.textureHeight,{format:1023,type:1009,depthTexture:new Kr(v.textureWidth,v.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:P.stencil,colorSpace:a.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(x),M=null,_=await m.requestReferenceSpace(y),jt.setContext(m),jt.start(),p.isPresenting=!0,p.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(m!==null)return m.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ht(dt){for(let Et=0;Et<dt.removed.length;Et++){let Yt=dt.removed[Et],Gt=N.indexOf(Yt);if(Gt>=0)N[Gt]=null,G[Gt].disconnect(Yt)}for(let Et=0;Et<dt.added.length;Et++){let Yt=dt.added[Et],Gt=N.indexOf(Yt);if(Gt===-1){for(let te=0;te<G.length;te++)if(te>=N.length){N.push(Yt),Gt=te;break}else if(N[te]===null){N[te]=Yt,Gt=te;break}if(Gt===-1)break}let Pt=G[Gt];if(Pt)Pt.connect(Yt)}}let ft=new X,Z=new X;function st(dt,Et,Yt){ft.setFromMatrixPosition(Et.matrixWorld),Z.setFromMatrixPosition(Yt.matrixWorld);let Gt=ft.distanceTo(Z),Pt=Et.projectionMatrix.elements,te=Yt.projectionMatrix.elements,ce=Pt[14]/(Pt[10]-1),Qt=Pt[14]/(Pt[10]+1),xt=(Pt[9]+1)/Pt[5],wt=(Pt[9]-1)/Pt[5],W=(Pt[8]-1)/Pt[0],Bt=(te[8]+1)/te[0],At=ce*W,Vt=ce*Bt,Mt=Gt/(-W+Bt),ie=Mt*-W;if(Et.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(ie),dt.translateZ(Mt),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),Pt[10]===-1)dt.projectionMatrix.copy(Et.projectionMatrix),dt.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{let Ot=ce+Mt,Xt=Qt+Mt,k=At-ie,L=Vt+(Gt-ie),nt=xt*Qt/Xt*Ot,mt=wt*Qt/Xt*Ot;dt.projectionMatrix.makePerspective(k,L,nt,mt,Ot,Xt),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function Y(dt,Et){if(Et===null)dt.matrixWorld.copy(dt.matrix);else dt.matrixWorld.multiplyMatrices(Et.matrixWorld,dt.matrix);dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(m===null)return;let{near:Et,far:Yt}=dt;if(C.texture!==null){if(C.depthNear>0)Et=C.depthNear;if(C.depthFar>0)Yt=C.depthFar}if(O.near=q.near=V.near=Et,O.far=q.far=V.far=Yt,B!==O.near||j!==O.far)m.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,j=O.far;V.layers.mask=dt.layers.mask|2,q.layers.mask=dt.layers.mask|4,O.layers.mask=V.layers.mask|q.layers.mask;let Gt=dt.parent,Pt=O.cameras;Y(O,Gt);for(let te=0;te<Pt.length;te++)Y(Pt[te],Gt);if(Pt.length===2)st(O,V,q);else O.projectionMatrix.copy(V.projectionMatrix);Ct(dt,O,Gt)};function Ct(dt,Et,Yt){if(Yt===null)dt.matrix.copy(Et.matrixWorld);else dt.matrix.copy(Yt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(Et.matrixWorld);if(dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(Et.projectionMatrix),dt.projectionMatrixInverse.copy(Et.projectionMatrixInverse),dt.isPerspectiveCamera)dt.fov=Zi*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1}this.getCamera=function(){return O},this.getFoveation=function(){if(v===null&&b===null)return;return x},this.setFoveation=function(dt){if(x=dt,v!==null)v.fixedFoveation=dt;if(b!==null&&b.fixedFoveation!==void 0)b.fixedFoveation=dt},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(O)};let U=null;function Wt(dt,Et){if(S=Et.getViewerPose(M||_),A=Et,S!==null){let Yt=S.views;if(b!==null)a.setRenderTargetFramebuffer(w,b.framebuffer),a.setRenderTarget(w);let Gt=!1;if(Yt.length!==O.cameras.length)O.cameras.length=0,Gt=!0;for(let te=0;te<Yt.length;te++){let ce=Yt[te],Qt=null;if(b!==null)Qt=b.getViewport(ce);else{let wt=E.getViewSubImage(v,ce);if(Qt=wt.viewport,te===0)a.setRenderTargetTextures(w,wt.colorTexture,v.ignoreDepthValues?void 0:wt.depthStencilTexture),a.setRenderTarget(w)}let xt=ct[te];if(xt===void 0)xt=new Ve,xt.layers.enable(te),xt.viewport=new Me,ct[te]=xt;if(xt.matrix.fromArray(ce.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(ce.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),te===0)O.matrix.copy(xt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);if(Gt===!0)O.cameras.push(xt)}let Pt=m.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let te=E.getDepthInformation(Yt[0]);if(te&&te.isValid&&te.texture)C.init(a,te,m.renderState)}}for(let Yt=0;Yt<G.length;Yt++){let Gt=N[Yt],Pt=G[Yt];if(Gt!==null&&Pt!==void 0)Pt.update(Gt,Et,M||_)}if(U)U(dt,Et);if(Et.detectedPlanes)p.dispatchEvent({type:"planesdetected",data:Et});A=null}let jt=new Go;jt.setAnimationLoop(Wt),this.setAnimationLoop=function(dt){U=dt},this.dispose=function(){}}}var Qn=new yn,Gf=new Ae;function Wf(a,h){function p(T,w){if(T.matrixAutoUpdate===!0)T.updateMatrix();w.value.copy(T.matrix)}function m(T,w){if(w.color.getRGB(T.fogColor.value,zo(a)),w.isFog)T.fogNear.value=w.near,T.fogFar.value=w.far;else if(w.isFogExp2)T.fogDensity.value=w.density}function g(T,w,G,N,H){if(w.isMeshBasicMaterial)_(T,w);else if(w.isMeshLambertMaterial)_(T,w);else if(w.isMeshToonMaterial)_(T,w),v(T,w);else if(w.isMeshPhongMaterial)_(T,w),E(T,w);else if(w.isMeshStandardMaterial){if(_(T,w),b(T,w),w.isMeshPhysicalMaterial)A(T,w,H)}else if(w.isMeshMatcapMaterial)_(T,w),C(T,w);else if(w.isMeshDepthMaterial)_(T,w);else if(w.isMeshDistanceMaterial)_(T,w),P(T,w);else if(w.isMeshNormalMaterial)_(T,w);else if(w.isLineBasicMaterial){if(y(T,w),w.isLineDashedMaterial)x(T,w)}else if(w.isPointsMaterial)M(T,w,G,N);else if(w.isSpriteMaterial)S(T,w);else if(w.isShadowMaterial)T.color.value.copy(w.color),T.opacity.value=w.opacity;else if(w.isShaderMaterial)w.uniformsNeedUpdate=!1}function _(T,w){if(T.opacity.value=w.opacity,w.color)T.diffuse.value.copy(w.color);if(w.emissive)T.emissive.value.copy(w.emissive).multiplyScalar(w.emissiveIntensity);if(w.map)T.map.value=w.map,p(w.map,T.mapTransform);if(w.alphaMap)T.alphaMap.value=w.alphaMap,p(w.alphaMap,T.alphaMapTransform);if(w.bumpMap){if(T.bumpMap.value=w.bumpMap,p(w.bumpMap,T.bumpMapTransform),T.bumpScale.value=w.bumpScale,w.side===1)T.bumpScale.value*=-1}if(w.normalMap){if(T.normalMap.value=w.normalMap,p(w.normalMap,T.normalMapTransform),T.normalScale.value.copy(w.normalScale),w.side===1)T.normalScale.value.negate()}if(w.displacementMap)T.displacementMap.value=w.displacementMap,p(w.displacementMap,T.displacementMapTransform),T.displacementScale.value=w.displacementScale,T.displacementBias.value=w.displacementBias;if(w.emissiveMap)T.emissiveMap.value=w.emissiveMap,p(w.emissiveMap,T.emissiveMapTransform);if(w.specularMap)T.specularMap.value=w.specularMap,p(w.specularMap,T.specularMapTransform);if(w.alphaTest>0)T.alphaTest.value=w.alphaTest;let G=h.get(w),{envMap:N,envMapRotation:H}=G;if(N){if(T.envMap.value=N,Qn.copy(H),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1)Qn.y*=-1,Qn.z*=-1;T.envMapRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(Qn)),T.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=w.reflectivity,T.ior.value=w.ior,T.refractionRatio.value=w.refractionRatio}if(w.lightMap)T.lightMap.value=w.lightMap,T.lightMapIntensity.value=w.lightMapIntensity,p(w.lightMap,T.lightMapTransform);if(w.aoMap)T.aoMap.value=w.aoMap,T.aoMapIntensity.value=w.aoMapIntensity,p(w.aoMap,T.aoMapTransform)}function y(T,w){if(T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,w.map)T.map.value=w.map,p(w.map,T.mapTransform)}function x(T,w){T.dashSize.value=w.dashSize,T.totalSize.value=w.dashSize+w.gapSize,T.scale.value=w.scale}function M(T,w,G,N){if(T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,T.size.value=w.size*G,T.scale.value=N*0.5,w.map)T.map.value=w.map,p(w.map,T.uvTransform);if(w.alphaMap)T.alphaMap.value=w.alphaMap,p(w.alphaMap,T.alphaMapTransform);if(w.alphaTest>0)T.alphaTest.value=w.alphaTest}function S(T,w){if(T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,T.rotation.value=w.rotation,w.map)T.map.value=w.map,p(w.map,T.mapTransform);if(w.alphaMap)T.alphaMap.value=w.alphaMap,p(w.alphaMap,T.alphaMapTransform);if(w.alphaTest>0)T.alphaTest.value=w.alphaTest}function E(T,w){T.specular.value.copy(w.specular),T.shininess.value=Math.max(w.shininess,0.0001)}function v(T,w){if(w.gradientMap)T.gradientMap.value=w.gradientMap}function b(T,w){if(T.metalness.value=w.metalness,w.metalnessMap)T.metalnessMap.value=w.metalnessMap,p(w.metalnessMap,T.metalnessMapTransform);if(T.roughness.value=w.roughness,w.roughnessMap)T.roughnessMap.value=w.roughnessMap,p(w.roughnessMap,T.roughnessMapTransform);if(w.envMap)T.envMapIntensity.value=w.envMapIntensity}function A(T,w,G){if(T.ior.value=w.ior,w.sheen>0){if(T.sheenColor.value.copy(w.sheenColor).multiplyScalar(w.sheen),T.sheenRoughness.value=w.sheenRoughness,w.sheenColorMap)T.sheenColorMap.value=w.sheenColorMap,p(w.sheenColorMap,T.sheenColorMapTransform);if(w.sheenRoughnessMap)T.sheenRoughnessMap.value=w.sheenRoughnessMap,p(w.sheenRoughnessMap,T.sheenRoughnessMapTransform)}if(w.clearcoat>0){if(T.clearcoat.value=w.clearcoat,T.clearcoatRoughness.value=w.clearcoatRoughness,w.clearcoatMap)T.clearcoatMap.value=w.clearcoatMap,p(w.clearcoatMap,T.clearcoatMapTransform);if(w.clearcoatRoughnessMap)T.clearcoatRoughnessMap.value=w.clearcoatRoughnessMap,p(w.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform);if(w.clearcoatNormalMap){if(T.clearcoatNormalMap.value=w.clearcoatNormalMap,p(w.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(w.clearcoatNormalScale),w.side===1)T.clearcoatNormalScale.value.negate()}}if(w.dispersion>0)T.dispersion.value=w.dispersion;if(w.iridescence>0){if(T.iridescence.value=w.iridescence,T.iridescenceIOR.value=w.iridescenceIOR,T.iridescenceThicknessMinimum.value=w.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=w.iridescenceThicknessRange[1],w.iridescenceMap)T.iridescenceMap.value=w.iridescenceMap,p(w.iridescenceMap,T.iridescenceMapTransform);if(w.iridescenceThicknessMap)T.iridescenceThicknessMap.value=w.iridescenceThicknessMap,p(w.iridescenceThicknessMap,T.iridescenceThicknessMapTransform)}if(w.transmission>0){if(T.transmission.value=w.transmission,T.transmissionSamplerMap.value=G.texture,T.transmissionSamplerSize.value.set(G.width,G.height),w.transmissionMap)T.transmissionMap.value=w.transmissionMap,p(w.transmissionMap,T.transmissionMapTransform);if(T.thickness.value=w.thickness,w.thicknessMap)T.thicknessMap.value=w.thicknessMap,p(w.thicknessMap,T.thicknessMapTransform);T.attenuationDistance.value=w.attenuationDistance,T.attenuationColor.value.copy(w.attenuationColor)}if(w.anisotropy>0){if(T.anisotropyVector.value.set(w.anisotropy*Math.cos(w.anisotropyRotation),w.anisotropy*Math.sin(w.anisotropyRotation)),w.anisotropyMap)T.anisotropyMap.value=w.anisotropyMap,p(w.anisotropyMap,T.anisotropyMapTransform)}if(T.specularIntensity.value=w.specularIntensity,T.specularColor.value.copy(w.specularColor),w.specularColorMap)T.specularColorMap.value=w.specularColorMap,p(w.specularColorMap,T.specularColorMapTransform);if(w.specularIntensityMap)T.specularIntensityMap.value=w.specularIntensityMap,p(w.specularIntensityMap,T.specularIntensityMapTransform)}function C(T,w){if(w.matcap)T.matcap.value=w.matcap}function P(T,w){let G=h.get(w).light;T.referencePosition.value.setFromMatrixPosition(G.matrixWorld),T.nearDistance.value=G.shadow.camera.near,T.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:m,refreshMaterialUniforms:g}}function Vf(a,h,p,m){let g={},_={},y=[],x=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function M(G,N){let H=N.program;m.uniformBlockBinding(G,H)}function S(G,N){let H=g[G.id];if(H===void 0)C(G),H=E(G),g[G.id]=H,G.addEventListener("dispose",T);let rt=N.program;m.updateUBOMapping(G,rt);let V=h.render.frame;if(_[G.id]!==V)b(G),_[G.id]=V}function E(G){let N=v();G.__bindingPointIndex=N;let H=a.createBuffer(),{__size:rt,usage:V}=G;return a.bindBuffer(a.UNIFORM_BUFFER,H),a.bufferData(a.UNIFORM_BUFFER,rt,V),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,N,H),H}function v(){for(let G=0;G<x;G++)if(y.indexOf(G)===-1)return y.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(G){let N=g[G.id],{uniforms:H,__cache:rt}=G;a.bindBuffer(a.UNIFORM_BUFFER,N);for(let V=0,q=H.length;V<q;V++){let ct=Array.isArray(H[V])?H[V]:[H[V]];for(let O=0,B=ct.length;O<B;O++){let j=ct[O];if(A(j,V,O,rt)===!0){let at=j.__offset,ot=Array.isArray(j.value)?j.value:[j.value],ht=0;for(let ft=0;ft<ot.length;ft++){let Z=ot[ft],st=P(Z);if(typeof Z==="number"||typeof Z==="boolean")j.__data[0]=Z,a.bufferSubData(a.UNIFORM_BUFFER,at+ht,j.__data);else if(Z.isMatrix3)j.__data[0]=Z.elements[0],j.__data[1]=Z.elements[1],j.__data[2]=Z.elements[2],j.__data[3]=0,j.__data[4]=Z.elements[3],j.__data[5]=Z.elements[4],j.__data[6]=Z.elements[5],j.__data[7]=0,j.__data[8]=Z.elements[6],j.__data[9]=Z.elements[7],j.__data[10]=Z.elements[8],j.__data[11]=0;else Z.toArray(j.__data,ht),ht+=st.storage/Float32Array.BYTES_PER_ELEMENT}a.bufferSubData(a.UNIFORM_BUFFER,at,j.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function A(G,N,H,rt){let V=G.value,q=N+"_"+H;if(rt[q]===void 0){if(typeof V==="number"||typeof V==="boolean")rt[q]=V;else rt[q]=V.clone();return!0}else{let ct=rt[q];if(typeof V==="number"||typeof V==="boolean"){if(ct!==V)return rt[q]=V,!0}else if(ct.equals(V)===!1)return ct.copy(V),!0}return!1}function C(G){let N=G.uniforms,H=0,rt=16;for(let q=0,ct=N.length;q<ct;q++){let O=Array.isArray(N[q])?N[q]:[N[q]];for(let B=0,j=O.length;B<j;B++){let at=O[B],ot=Array.isArray(at.value)?at.value:[at.value];for(let ht=0,ft=ot.length;ht<ft;ht++){let Z=ot[ht],st=P(Z),Y=H%rt,Ct=Y%st.boundary,U=Y+Ct;if(H+=Ct,U!==0&&rt-U<st.storage)H+=rt-U;at.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=H,H+=st.storage}}}let V=H%rt;if(V>0)H+=rt-V;return G.__size=H,G.__cache={},this}function P(G){let N={boundary:0,storage:0};if(typeof G==="number"||typeof G==="boolean")N.boundary=4,N.storage=4;else if(G.isVector2)N.boundary=8,N.storage=8;else if(G.isVector3||G.isColor)N.boundary=16,N.storage=12;else if(G.isVector4)N.boundary=16,N.storage=16;else if(G.isMatrix3)N.boundary=48,N.storage=48;else if(G.isMatrix4)N.boundary=64,N.storage=64;else if(G.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G);return N}function T(G){let N=G.target;N.removeEventListener("dispose",T);let H=y.indexOf(N.__bindingPointIndex);y.splice(H,1),a.deleteBuffer(g[N.id]),delete g[N.id],delete _[N.id]}function w(){for(let G in g)a.deleteBuffer(g[G]);y=[],g={},_={}}return{bind:M,update:S,dispose:w}}class jr{constructor(a={}){let{canvas:h=Yl(),context:p=null,depth:m=!0,stencil:g=!1,alpha:_=!1,antialias:y=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:M=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:E=!1,reverseDepthBuffer:v=!1}=a;this.isWebGLRenderer=!0;let b;if(p!==null){if(typeof WebGLRenderingContext<"u"&&p instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=p.getContextAttributes().alpha}else b=_;let A=new Uint32Array(4),C=new Int32Array(4),P=null,T=null,w=[],G=[];this.domElement=h,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let N=this,H=!1,rt=0,V=0,q=null,ct=-1,O=null,B=new Me,j=new Me,at=null,ot=new pe(0),ht=0,{width:ft,height:Z}=h,st=1,Y=null,Ct=null,U=new Me(0,0,ft,Z),Wt=new Me(0,0,ft,Z),jt=!1,dt=new Gs,Et=!1,Yt=!1,Gt=new Ae,Pt=new Ae,te=new X,ce=new Me,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function wt(){return q===null?st:1}let W=p;function Bt(I,J){return h.getContext(I,J)}try{let I={alpha:!0,depth:m,stencil:g,antialias:y,premultipliedAlpha:x,preserveDrawingBuffer:M,powerPreference:S,failIfMajorPerformanceCaveat:E};if("setAttribute"in h)h.setAttribute("data-engine","three.js r170");if(h.addEventListener("webglcontextlost",pt,!1),h.addEventListener("webglcontextrestored",_t,!1),h.addEventListener("webglcontextcreationerror",Nt,!1),W===null){if(W=Bt("webgl2",I),W===null)if(Bt("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let At,Vt,Mt,ie,Ot,Xt,k,L,nt,mt,gt,ut,$t,Lt,It,ee,bt,zt,ue,se,kt,ae,ne,be;function Q(){if(At=new rd(W),At.init(),ae=new Bf(W,At),Vt=new Qu(W,At,a,ae),Mt=new Nf(W,At),Vt.reverseDepthBuffer&&v)Mt.buffers.depth.setReversed(!0);ie=new ld(W),Ot=new Sf,Xt=new Of(W,At,Mt,Ot,Vt,ae,ie),k=new ed(N),L=new sd(N),nt=new mc(W),ne=new Ku(W,nt),mt=new ad(W,nt,ie,ne),gt=new hd(W,mt,nt,ie),ue=new cd(W,Vt,Xt),ee=new td(Ot),ut=new Mf(N,k,L,At,Vt,ne,ee),$t=new Wf(N,Ot),Lt=new bf,It=new Pf(At),zt=new $u(N,k,L,Mt,gt,b,x),bt=new Lf(N,gt,Vt),be=new Vf(W,ie,Vt,Mt),se=new ju(W,At,ie),kt=new od(W,At,ie),ie.programs=ut.programs,N.capabilities=Vt,N.extensions=At,N.properties=Ot,N.renderLists=Lt,N.shadowMap=bt,N.state=Mt,N.info=ie}Q();let yt=new nl(N,W);this.xr=yt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let I=At.get("WEBGL_lose_context");if(I)I.loseContext()},this.forceContextRestore=function(){let I=At.get("WEBGL_lose_context");if(I)I.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(I){if(I===void 0)return;st=I,this.setSize(ft,Z,!1)},this.getSize=function(I){return I.set(ft,Z)},this.setSize=function(I,J,it=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(ft=I,Z=J,h.width=Math.floor(I*st),h.height=Math.floor(J*st),it===!0)h.style.width=I+"px",h.style.height=J+"px";this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(ft*st,Z*st).floor()},this.setDrawingBufferSize=function(I,J,it){ft=I,Z=J,st=it,h.width=Math.floor(I*it),h.height=Math.floor(J*it),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(B)},this.getViewport=function(I){return I.copy(U)},this.setViewport=function(I,J,it,et){if(I.isVector4)U.set(I.x,I.y,I.z,I.w);else U.set(I,J,it,et);Mt.viewport(B.copy(U).multiplyScalar(st).round())},this.getScissor=function(I){return I.copy(Wt)},this.setScissor=function(I,J,it,et){if(I.isVector4)Wt.set(I.x,I.y,I.z,I.w);else Wt.set(I,J,it,et);Mt.scissor(j.copy(Wt).multiplyScalar(st).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(I){Mt.setScissorTest(jt=I)},this.setOpaqueSort=function(I){Y=I},this.setTransparentSort=function(I){Ct=I},this.getClearColor=function(I){return I.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(I=!0,J=!0,it=!0){let et=0;if(I){let K=!1;if(q!==null){let vt=q.texture.format;K=vt===1033||vt===1031||vt===1029}if(K){let vt=q.texture.type,Rt=vt===1009||vt===1014||vt===1012||vt===1020||vt===1017||vt===1018,qt=zt.getClearColor(),Zt=zt.getClearAlpha(),{r:re,g:le,b:Jt}=qt;if(Rt)A[0]=re,A[1]=le,A[2]=Jt,A[3]=Zt,W.clearBufferuiv(W.COLOR,0,A);else C[0]=re,C[1]=le,C[2]=Jt,C[3]=Zt,W.clearBufferiv(W.COLOR,0,C)}else et|=W.COLOR_BUFFER_BIT}if(J)et|=W.DEPTH_BUFFER_BIT;if(it)et|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);W.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){h.removeEventListener("webglcontextlost",pt,!1),h.removeEventListener("webglcontextrestored",_t,!1),h.removeEventListener("webglcontextcreationerror",Nt,!1),Lt.dispose(),It.dispose(),Ot.dispose(),k.dispose(),L.dispose(),gt.dispose(),ne.dispose(),be.dispose(),ut.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Je),yt.removeEventListener("sessionend",Di),mn.stop()};function pt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let I=ie.autoReset,J=bt.enabled,it=bt.autoUpdate,et=bt.needsUpdate,K=bt.type;Q(),ie.autoReset=I,bt.enabled=J,bt.autoUpdate=it,bt.needsUpdate=et,bt.type=K}function Nt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Dt(I){let J=I.target;J.removeEventListener("dispose",Dt),oe(J)}function oe(I){Te(I),Ot.remove(I)}function Te(I){let J=Ot.get(I).programs;if(J!==void 0){if(J.forEach(function(it){ut.releaseProgram(it)}),I.isShaderMaterial)ut.releaseShaderCache(I)}}this.renderBufferDirect=function(I,J,it,et,K,vt){if(J===null)J=Qt;let Rt=K.isMesh&&K.matrixWorld.determinant()<0,qt=lt(I,J,it,et,K);Mt.setMaterial(et,Rt);let Zt=it.index,re=1;if(et.wireframe===!0){if(Zt=mt.getWireframeAttribute(it),Zt===void 0)return;re=2}let le=it.drawRange,Jt=it.attributes.position,_e=le.start*re,we=(le.start+le.count)*re;if(vt!==null)_e=Math.max(_e,vt.start*re),we=Math.min(we,(vt.start+vt.count)*re);if(Zt!==null)_e=Math.max(_e,0),we=Math.min(we,Zt.count);else if(Jt!==void 0&&Jt!==null)_e=Math.max(_e,0),we=Math.min(we,Jt.count);let Re=we-_e;if(Re<0||Re===1/0)return;ne.setup(K,et,qt,it,Zt);let Ye,xe=se;if(Zt!==null)Ye=nt.get(Zt),xe=kt,xe.setIndex(Ye);if(K.isMesh)if(et.wireframe===!0)Mt.setLineWidth(et.wireframeLinewidth*wt()),xe.setMode(W.LINES);else xe.setMode(W.TRIANGLES);else if(K.isLine){let Kt=et.linewidth;if(Kt===void 0)Kt=1;if(Mt.setLineWidth(Kt*wt()),K.isLineSegments)xe.setMode(W.LINES);else if(K.isLineLoop)xe.setMode(W.LINE_LOOP);else xe.setMode(W.LINE_STRIP)}else if(K.isPoints)xe.setMode(W.POINTS);else if(K.isSprite)xe.setMode(W.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)xe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(!At.get("WEBGL_multi_draw")){let{_multiDrawStarts:Kt,_multiDrawCounts:bn,_multiDrawCount:ye}=K,on=Zt?nt.get(Zt).bytesPerElement:1,ri=Ot.get(et).currentProgram.getUniforms();for(let $e=0;$e<ye;$e++)ri.setValue(W,"_gl_DrawID",$e),xe.render(Kt[$e]/on,bn[$e])}else xe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)xe.renderInstances(_e,Re,K.count);else if(it.isInstancedBufferGeometry){let Kt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,bn=Math.min(it.instanceCount,Kt);xe.renderInstances(_e,Re,bn)}else xe.render(_e,Re)};function Ie(I,J,it){if(I.transparent===!0&&I.side===2&&I.forceSinglePass===!1)I.side=1,I.needsUpdate=!0,F(I,J,it),I.side=0,I.needsUpdate=!0,F(I,J,it),I.side=2;else F(I,J,it)}this.compile=function(I,J,it=null){if(it===null)it=I;if(T=It.get(it),T.init(J),G.push(T),it.traverseVisible(function(K){if(K.isLight&&K.layers.test(J.layers)){if(T.pushLight(K),K.castShadow)T.pushShadow(K)}}),I!==it)I.traverseVisible(function(K){if(K.isLight&&K.layers.test(J.layers)){if(T.pushLight(K),K.castShadow)T.pushShadow(K)}});T.setupLights();let et=new Set;return I.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let vt=K.material;if(vt)if(Array.isArray(vt))for(let Rt=0;Rt<vt.length;Rt++){let qt=vt[Rt];Ie(qt,it,K),et.add(qt)}else Ie(vt,it,K),et.add(vt)}),G.pop(),T=null,et},this.compileAsync=function(I,J,it=null){let et=this.compile(I,J,it);return new Promise((K)=>{function vt(){if(et.forEach(function(Rt){if(Ot.get(Rt).currentProgram.isReady())et.delete(Rt)}),et.size===0){K(I);return}setTimeout(vt,10)}if(At.get("KHR_parallel_shader_compile")!==null)vt();else setTimeout(vt,10)})};let me=null;function tn(I){if(me)me(I)}function Je(){mn.stop()}function Di(){mn.start()}let mn=new Go;if(mn.setAnimationLoop(tn),typeof self<"u")mn.setContext(self);this.setAnimationLoop=function(I){me=I,yt.setAnimationLoop(I),I===null?mn.stop():mn.start()},yt.addEventListener("sessionstart",Je),yt.addEventListener("sessionend",Di),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(I.matrixWorldAutoUpdate===!0)I.updateMatrixWorld();if(J.parent===null&&J.matrixWorldAutoUpdate===!0)J.updateMatrixWorld();if(yt.enabled===!0&&yt.isPresenting===!0){if(yt.cameraAutoUpdate===!0)yt.updateCamera(J);J=yt.getCamera()}if(I.isScene===!0)I.onBeforeRender(N,I,J,q);if(T=It.get(I,G.length),T.init(J),G.push(T),Pt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),dt.setFromProjectionMatrix(Pt),Yt=this.localClippingEnabled,Et=ee.init(this.clippingPlanes,Yt),P=Lt.get(I,w.length),P.init(),w.push(P),yt.enabled===!0&&yt.isPresenting===!0){let vt=N.xr.getDepthSensingMesh();if(vt!==null)En(vt,J,-1/0,N.sortObjects)}if(En(I,J,0,N.sortObjects),P.finish(),N.sortObjects===!0)P.sort(Y,Ct);if(xt=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,xt)zt.addToRenderList(P,I);if(this.info.render.frame++,Et===!0)ee.beginShadows();let it=T.state.shadowsArray;if(bt.render(it,I,J),Et===!0)ee.endShadows();if(this.info.autoReset===!0)this.info.reset();let et=P.opaque,K=P.transmissive;if(T.setupLights(),J.isArrayCamera){let vt=J.cameras;if(K.length>0)for(let Rt=0,qt=vt.length;Rt<qt;Rt++){let Zt=vt[Rt];Li(et,K,I,Zt)}if(xt)zt.render(I);for(let Rt=0,qt=vt.length;Rt<qt;Rt++){let Zt=vt[Rt];an(P,I,Zt,Zt.viewport)}}else{if(K.length>0)Li(et,K,I,J);if(xt)zt.render(I);an(P,I,J)}if(q!==null)Xt.updateMultisampleRenderTarget(q),Xt.updateRenderTargetMipmap(q);if(I.isScene===!0)I.onAfterRender(N,I,J);if(ne.resetDefaultState(),ct=-1,O=null,G.pop(),G.length>0){if(T=G[G.length-1],Et===!0)ee.setGlobalState(N.clippingPlanes,T.state.camera)}else T=null;if(w.pop(),w.length>0)P=w[w.length-1];else P=null};function En(I,J,it,et){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)it=I.renderOrder;else if(I.isLOD){if(I.autoUpdate===!0)I.update(J)}else if(I.isLight){if(T.pushLight(I),I.castShadow)T.pushShadow(I)}else if(I.isSprite){if(!I.frustumCulled||dt.intersectsSprite(I)){if(et)ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Pt);let Rt=gt.update(I),qt=I.material;if(qt.visible)P.push(I,Rt,qt,it,ce.z,null)}}else if(I.isMesh||I.isLine||I.isPoints){if(!I.frustumCulled||dt.intersectsObject(I)){let Rt=gt.update(I),qt=I.material;if(et){if(I.boundingSphere!==void 0){if(I.boundingSphere===null)I.computeBoundingSphere();ce.copy(I.boundingSphere.center)}else{if(Rt.boundingSphere===null)Rt.computeBoundingSphere();ce.copy(Rt.boundingSphere.center)}ce.applyMatrix4(I.matrixWorld).applyMatrix4(Pt)}if(Array.isArray(qt)){let Zt=Rt.groups;for(let re=0,le=Zt.length;re<le;re++){let Jt=Zt[re],_e=qt[Jt.materialIndex];if(_e&&_e.visible)P.push(I,Rt,_e,it,ce.z,Jt)}}else if(qt.visible)P.push(I,Rt,qt,it,ce.z,null)}}}let vt=I.children;for(let Rt=0,qt=vt.length;Rt<qt;Rt++)En(vt[Rt],J,it,et)}function an(I,J,it,et){let{opaque:K,transmissive:vt,transparent:Rt}=I;if(T.setupLightsView(it),Et===!0)ee.setGlobalState(N.clippingPlanes,it);if(et)Mt.viewport(B.copy(et));if(K.length>0)R(K,J,it);if(vt.length>0)R(vt,J,it);if(Rt.length>0)R(Rt,J,it);Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Li(I,J,it,et){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[et.id]===void 0)T.state.transmissionRenderTarget[et.id]=new Gn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:g,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace});let vt=T.state.transmissionRenderTarget[et.id],Rt=et.viewport||B;vt.setSize(Rt.z,Rt.w);let qt=N.getRenderTarget();if(N.setRenderTarget(vt),N.getClearColor(ot),ht=N.getClearAlpha(),ht<1)N.setClearColor(16777215,0.5);if(N.clear(),xt)zt.render(it);let Zt=N.toneMapping;N.toneMapping=0;let re=et.viewport;if(et.viewport!==void 0)et.viewport=void 0;if(T.setupLightsView(et),Et===!0)ee.setGlobalState(N.clippingPlanes,et);if(R(I,it,et),Xt.updateMultisampleRenderTarget(vt),Xt.updateRenderTargetMipmap(vt),At.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Jt=0,_e=J.length;Jt<_e;Jt++){let we=J[Jt],{object:Re,geometry:Ye,material:xe,group:Kt}=we;if(xe.side===2&&Re.layers.test(et.layers)){let bn=xe.side;xe.side=1,xe.needsUpdate=!0,D(Re,it,et,Ye,xe,Kt),xe.side=bn,xe.needsUpdate=!0,le=!0}}if(le===!0)Xt.updateMultisampleRenderTarget(vt),Xt.updateRenderTargetMipmap(vt)}if(N.setRenderTarget(qt),N.setClearColor(ot,ht),re!==void 0)et.viewport=re;N.toneMapping=Zt}function R(I,J,it){let et=J.isScene===!0?J.overrideMaterial:null;for(let K=0,vt=I.length;K<vt;K++){let Rt=I[K],{object:qt,geometry:Zt}=Rt,re=et===null?Rt.material:et,le=Rt.group;if(qt.layers.test(it.layers))D(qt,J,it,Zt,re,le)}}function D(I,J,it,et,K,vt){if(I.onBeforeRender(N,J,it,et,K,vt),I.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(N,J,it,et,I,vt),K.transparent===!0&&K.side===2&&K.forceSinglePass===!1)K.side=1,K.needsUpdate=!0,N.renderBufferDirect(it,J,et,K,I,vt),K.side=0,K.needsUpdate=!0,N.renderBufferDirect(it,J,et,K,I,vt),K.side=2;else N.renderBufferDirect(it,J,et,K,I,vt);I.onAfterRender(N,J,it,et,K,vt)}function F(I,J,it){if(J.isScene!==!0)J=Qt;let et=Ot.get(I),K=T.state.lights,vt=T.state.shadowsArray,Rt=K.state.version,qt=ut.getParameters(I,K.state,vt,J,it),Zt=ut.getProgramCacheKey(qt),re=et.programs;if(et.environment=I.isMeshStandardMaterial?J.environment:null,et.fog=J.fog,et.envMap=(I.isMeshStandardMaterial?L:k).get(I.envMap||et.environment),et.envMapRotation=et.environment!==null&&I.envMap===null?J.environmentRotation:I.envMapRotation,re===void 0)I.addEventListener("dispose",Dt),re=new Map,et.programs=re;let le=re.get(Zt);if(le!==void 0){if(et.currentProgram===le&&et.lightsStateVersion===Rt)return tt(I,qt),le}else qt.uniforms=ut.getUniforms(I),I.onBeforeCompile(qt,N),le=ut.acquireProgram(qt,Zt),re.set(Zt,le),et.uniforms=qt.uniforms;let Jt=et.uniforms;if(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)Jt.clippingPlanes=ee.uniform;if(tt(I,qt),et.needsLights=Ht(I),et.lightsStateVersion=Rt,et.needsLights)Jt.ambientLightColor.value=K.state.ambient,Jt.lightProbe.value=K.state.probe,Jt.directionalLights.value=K.state.directional,Jt.directionalLightShadows.value=K.state.directionalShadow,Jt.spotLights.value=K.state.spot,Jt.spotLightShadows.value=K.state.spotShadow,Jt.rectAreaLights.value=K.state.rectArea,Jt.ltc_1.value=K.state.rectAreaLTC1,Jt.ltc_2.value=K.state.rectAreaLTC2,Jt.pointLights.value=K.state.point,Jt.pointLightShadows.value=K.state.pointShadow,Jt.hemisphereLights.value=K.state.hemi,Jt.directionalShadowMap.value=K.state.directionalShadowMap,Jt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Jt.spotShadowMap.value=K.state.spotShadowMap,Jt.spotLightMatrix.value=K.state.spotLightMatrix,Jt.spotLightMap.value=K.state.spotLightMap,Jt.pointShadowMap.value=K.state.pointShadowMap,Jt.pointShadowMatrix.value=K.state.pointShadowMatrix;return et.currentProgram=le,et.uniformsList=null,le}function z(I){if(I.uniformsList===null){let J=I.currentProgram.getUniforms();I.uniformsList=Xi.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function tt(I,J){let it=Ot.get(I);it.outputColorSpace=J.outputColorSpace,it.batching=J.batching,it.batchingColor=J.batchingColor,it.instancing=J.instancing,it.instancingColor=J.instancingColor,it.instancingMorph=J.instancingMorph,it.skinning=J.skinning,it.morphTargets=J.morphTargets,it.morphNormals=J.morphNormals,it.morphColors=J.morphColors,it.morphTargetsCount=J.morphTargetsCount,it.numClippingPlanes=J.numClippingPlanes,it.numIntersection=J.numClipIntersection,it.vertexAlphas=J.vertexAlphas,it.vertexTangents=J.vertexTangents,it.toneMapping=J.toneMapping}function lt(I,J,it,et,K){if(J.isScene!==!0)J=Qt;Xt.resetTextureUnits();let vt=J.fog,Rt=et.isMeshStandardMaterial?J.environment:null,qt=q===null?N.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:"srgb-linear",Zt=(et.isMeshStandardMaterial?L:k).get(et.envMap||Rt),re=et.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,le=!!it.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Jt=!!it.morphAttributes.position,_e=!!it.morphAttributes.normal,we=!!it.morphAttributes.color,Re=0;if(et.toneMapped){if(q===null||q.isXRRenderTarget===!0)Re=N.toneMapping}let Ye=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,xe=Ye!==void 0?Ye.length:0,Kt=Ot.get(et),bn=T.state.lights;if(Et===!0){if(Yt===!0||I!==O){let en=I===O&&et.id===ct;ee.setState(et,I,en)}}let ye=!1;if(et.version===Kt.__version){if(Kt.needsLights&&Kt.lightsStateVersion!==bn.state.version)ye=!0;else if(Kt.outputColorSpace!==qt)ye=!0;else if(K.isBatchedMesh&&Kt.batching===!1)ye=!0;else if(!K.isBatchedMesh&&Kt.batching===!0)ye=!0;else if(K.isBatchedMesh&&Kt.batchingColor===!0&&K.colorTexture===null)ye=!0;else if(K.isBatchedMesh&&Kt.batchingColor===!1&&K.colorTexture!==null)ye=!0;else if(K.isInstancedMesh&&Kt.instancing===!1)ye=!0;else if(!K.isInstancedMesh&&Kt.instancing===!0)ye=!0;else if(K.isSkinnedMesh&&Kt.skinning===!1)ye=!0;else if(!K.isSkinnedMesh&&Kt.skinning===!0)ye=!0;else if(K.isInstancedMesh&&Kt.instancingColor===!0&&K.instanceColor===null)ye=!0;else if(K.isInstancedMesh&&Kt.instancingColor===!1&&K.instanceColor!==null)ye=!0;else if(K.isInstancedMesh&&Kt.instancingMorph===!0&&K.morphTexture===null)ye=!0;else if(K.isInstancedMesh&&Kt.instancingMorph===!1&&K.morphTexture!==null)ye=!0;else if(Kt.envMap!==Zt)ye=!0;else if(et.fog===!0&&Kt.fog!==vt)ye=!0;else if(Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==ee.numPlanes||Kt.numIntersection!==ee.numIntersection))ye=!0;else if(Kt.vertexAlphas!==re)ye=!0;else if(Kt.vertexTangents!==le)ye=!0;else if(Kt.morphTargets!==Jt)ye=!0;else if(Kt.morphNormals!==_e)ye=!0;else if(Kt.morphColors!==we)ye=!0;else if(Kt.toneMapping!==Re)ye=!0;else if(Kt.morphTargetsCount!==xe)ye=!0}else ye=!0,Kt.__version=et.version;let on=Kt.currentProgram;if(ye===!0)on=F(et,J,K);let ri=!1,$e=!1,Ui=!1,Ce=on.getUniforms(),gn=Kt.uniforms;if(Mt.useProgram(on.program))ri=!0,$e=!0,Ui=!0;if(et.id!==ct)ct=et.id,$e=!0;if(ri||O!==I){if(Mt.buffers.depth.getReversed())Gt.copy(I.projectionMatrix),Jl(Gt),$l(Gt),Ce.setValue(W,"projectionMatrix",Gt);else Ce.setValue(W,"projectionMatrix",I.projectionMatrix);Ce.setValue(W,"viewMatrix",I.matrixWorldInverse);let Ln=Ce.map.cameraPosition;if(Ln!==void 0)Ln.setValue(W,te.setFromMatrixPosition(I.matrixWorld));if(Vt.logarithmicDepthBuffer)Ce.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2));if(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)Ce.setValue(W,"isOrthographic",I.isOrthographicCamera===!0);if(O!==I)O=I,$e=!0,Ui=!0}if(K.isSkinnedMesh){Ce.setOptional(W,K,"bindMatrix"),Ce.setOptional(W,K,"bindMatrixInverse");let en=K.skeleton;if(en){if(en.boneTexture===null)en.computeBoneTexture();Ce.setValue(W,"boneTexture",en.boneTexture,Xt)}}if(K.isBatchedMesh){if(Ce.setOptional(W,K,"batchingTexture"),Ce.setValue(W,"batchingTexture",K._matricesTexture,Xt),Ce.setOptional(W,K,"batchingIdTexture"),Ce.setValue(W,"batchingIdTexture",K._indirectTexture,Xt),Ce.setOptional(W,K,"batchingColorTexture"),K._colorsTexture!==null)Ce.setValue(W,"batchingColorTexture",K._colorsTexture,Xt)}let Ni=it.morphAttributes;if(Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)ue.update(K,it,on);if($e||Kt.receiveShadow!==K.receiveShadow)Kt.receiveShadow=K.receiveShadow,Ce.setValue(W,"receiveShadow",K.receiveShadow);if(et.isMeshGouraudMaterial&&et.envMap!==null)gn.envMap.value=Zt,gn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1;if(et.isMeshStandardMaterial&&et.envMap===null&&J.environment!==null)gn.envMapIntensity.value=J.environmentIntensity;if($e){if(Ce.setValue(W,"toneMappingExposure",N.toneMappingExposure),Kt.needsLights)Tt(gn,Ui);if(vt&&et.fog===!0)$t.refreshFogUniforms(gn,vt);$t.refreshMaterialUniforms(gn,et,st,Z,T.state.transmissionRenderTarget[I.id]),Xi.upload(W,z(Kt),gn,Xt)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0)Xi.upload(W,z(Kt),gn,Xt),et.uniformsNeedUpdate=!1;if(et.isSpriteMaterial)Ce.setValue(W,"center",K.center);if(Ce.setValue(W,"modelViewMatrix",K.modelViewMatrix),Ce.setValue(W,"normalMatrix",K.normalMatrix),Ce.setValue(W,"modelMatrix",K.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let en=et.uniformsGroups;for(let Ln=0,Un=en.length;Ln<Un;Ln++){let ba=en[Ln];be.update(ba,on),be.bind(ba,on)}}return on}function Tt(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function Ht(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}if(this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(I,J,it){Ot.get(I.texture).__webglTexture=J,Ot.get(I.depthTexture).__webglTexture=it;let et=Ot.get(I);if(et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=it===void 0,!et.__autoAllocateDepthBuffer){if(At.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(I,J){let it=Ot.get(I);it.__webglFramebuffer=J,it.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,it=0){q=I,rt=J,V=it;let et=!0,K=null,vt=!1,Rt=!1;if(I){let Zt=Ot.get(I);if(Zt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(W.FRAMEBUFFER,null),et=!1;else if(Zt.__webglFramebuffer===void 0)Xt.setupRenderTarget(I);else if(Zt.__hasExternalTextures)Xt.rebindTextures(I,Ot.get(I.texture).__webglTexture,Ot.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Jt=I.depthTexture;if(Zt.__boundDepthTexture!==Jt){if(Jt!==null&&Ot.has(Jt)&&(I.width!==Jt.image.width||I.height!==Jt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(I)}}let re=I.texture;if(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)Rt=!0;let le=Ot.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget){if(Array.isArray(le[J]))K=le[J][it];else K=le[J];vt=!0}else if(I.samples>0&&Xt.useMultisampledRTT(I)===!1)K=Ot.get(I).__webglMultisampledFramebuffer;else if(Array.isArray(le))K=le[it];else K=le;B.copy(I.viewport),j.copy(I.scissor),at=I.scissorTest}else B.copy(U).multiplyScalar(st).floor(),j.copy(Wt).multiplyScalar(st).floor(),at=jt;if(Mt.bindFramebuffer(W.FRAMEBUFFER,K)&&et)Mt.drawBuffers(I,K);if(Mt.viewport(B),Mt.scissor(j),Mt.setScissorTest(at),vt){let Zt=Ot.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+J,Zt.__webglTexture,it)}else if(Rt){let Zt=Ot.get(I.texture),re=J||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Zt.__webglTexture,it||0,re)}ct=-1},this.readRenderTargetPixels=function(I,J,it,et,K,vt,Rt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=Ot.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Rt!==void 0)qt=qt[Rt];if(qt){Mt.bindFramebuffer(W.FRAMEBUFFER,qt);try{let Zt=I.texture,{format:re,type:le}=Zt;if(!Vt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(J>=0&&J<=I.width-et&&(it>=0&&it<=I.height-K))W.readPixels(J,it,et,K,ae.convert(re),ae.convert(le),vt)}finally{let Zt=q!==null?Ot.get(q).__webglFramebuffer:null;Mt.bindFramebuffer(W.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(I,J,it,et,K,vt,Rt){if(!(I&&I.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=Ot.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Rt!==void 0)qt=qt[Rt];if(qt){let Zt=I.texture,{format:re,type:le}=Zt;if(!Vt.textureFormatReadable(re))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(le))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=I.width-et&&(it>=0&&it<=I.height-K)){Mt.bindFramebuffer(W.FRAMEBUFFER,qt);let Jt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Jt),W.bufferData(W.PIXEL_PACK_BUFFER,vt.byteLength,W.STREAM_READ),W.readPixels(J,it,et,K,ae.convert(re),ae.convert(le),0);let _e=q!==null?Ot.get(q).__webglFramebuffer:null;Mt.bindFramebuffer(W.FRAMEBUFFER,_e);let we=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Zl(W,we,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Jt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,vt),W.deleteBuffer(Jt),W.deleteSync(we),vt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,J=null,it=0){if(I.isTexture!==!0)Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1];let et=Math.pow(2,-it),K=Math.floor(I.image.width*et),vt=Math.floor(I.image.height*et),Rt=J!==null?J.x:0,qt=J!==null?J.y:0;Xt.setTexture2D(I,0),W.copyTexSubImage2D(W.TEXTURE_2D,it,0,0,Rt,qt,K,vt),Mt.unbindTexture()},this.copyTextureToTexture=function(I,J,it=null,et=null,K=0){if(I.isTexture!==!0)Gi("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,I=arguments[1],J=arguments[2],K=arguments[3]||0,it=null;let vt,Rt,qt,Zt,re,le,Jt,_e,we,Re=I.isCompressedTexture?I.mipmaps[K]:I.image;if(it!==null)vt=it.max.x-it.min.x,Rt=it.max.y-it.min.y,qt=it.isBox3?it.max.z-it.min.z:1,Zt=it.min.x,re=it.min.y,le=it.isBox3?it.min.z:0;else vt=Re.width,Rt=Re.height,qt=Re.depth||1,Zt=0,re=0,le=0;if(et!==null)Jt=et.x,_e=et.y,we=et.z;else Jt=0,_e=0,we=0;let Ye=ae.convert(J.format),xe=ae.convert(J.type),Kt;if(J.isData3DTexture)Xt.setTexture3D(J,0),Kt=W.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)Xt.setTexture2DArray(J,0),Kt=W.TEXTURE_2D_ARRAY;else Xt.setTexture2D(J,0),Kt=W.TEXTURE_2D;W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);let bn=W.getParameter(W.UNPACK_ROW_LENGTH),ye=W.getParameter(W.UNPACK_IMAGE_HEIGHT),on=W.getParameter(W.UNPACK_SKIP_PIXELS),ri=W.getParameter(W.UNPACK_SKIP_ROWS),$e=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Re.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Re.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Zt),W.pixelStorei(W.UNPACK_SKIP_ROWS,re),W.pixelStorei(W.UNPACK_SKIP_IMAGES,le);let Ui=I.isDataArrayTexture||I.isData3DTexture,Ce=J.isDataArrayTexture||J.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let gn=Ot.get(I),Ni=Ot.get(J),en=Ot.get(gn.__renderTarget),Ln=Ot.get(Ni.__renderTarget);Mt.bindFramebuffer(W.READ_FRAMEBUFFER,en.__webglFramebuffer),Mt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Un=0;Un<qt;Un++){if(Ui)W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ot.get(I).__webglTexture,K,le+Un);if(I.isDepthTexture){if(Ce)W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ot.get(J).__webglTexture,K,we+Un);W.blitFramebuffer(Zt,re,vt,Rt,Jt,_e,vt,Rt,W.DEPTH_BUFFER_BIT,W.NEAREST)}else if(Ce)W.copyTexSubImage3D(Kt,K,Jt,_e,we+Un,Zt,re,vt,Rt);else W.copyTexSubImage2D(Kt,K,Jt,_e,we+Un,Zt,re,vt,Rt)}Mt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Ce)if(I.isDataTexture||I.isData3DTexture)W.texSubImage3D(Kt,K,Jt,_e,we,vt,Rt,qt,Ye,xe,Re.data);else if(J.isCompressedArrayTexture)W.compressedTexSubImage3D(Kt,K,Jt,_e,we,vt,Rt,qt,Ye,Re.data);else W.texSubImage3D(Kt,K,Jt,_e,we,vt,Rt,qt,Ye,xe,Re);else if(I.isDataTexture)W.texSubImage2D(W.TEXTURE_2D,K,Jt,_e,vt,Rt,Ye,xe,Re.data);else if(I.isCompressedTexture)W.compressedTexSubImage2D(W.TEXTURE_2D,K,Jt,_e,Re.width,Re.height,Ye,Re.data);else W.texSubImage2D(W.TEXTURE_2D,K,Jt,_e,vt,Rt,Ye,xe,Re);if(W.pixelStorei(W.UNPACK_ROW_LENGTH,bn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ye),W.pixelStorei(W.UNPACK_SKIP_PIXELS,on),W.pixelStorei(W.UNPACK_SKIP_ROWS,ri),W.pixelStorei(W.UNPACK_SKIP_IMAGES,$e),K===0&&J.generateMipmaps)W.generateMipmap(Kt);Mt.unbindTexture()},this.copyTextureToTexture3D=function(I,J,it=null,et=null,K=0){if(I.isTexture!==!0)Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,et=arguments[1]||null,I=arguments[2],J=arguments[3],K=arguments[4]||0;return Gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,J,it,et,K)},this.initRenderTarget=function(I){if(Ot.get(I).__webglFramebuffer===void 0)Xt.setupRenderTarget(I)},this.initTexture=function(I){if(I.isCubeTexture)Xt.setTextureCube(I,0);else if(I.isData3DTexture)Xt.setTexture3D(I,0);else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Xt.setTexture2DArray(I,0);else Xt.setTexture2D(I,0);Mt.unbindTexture()},this.resetState=function(){rt=0,V=0,q=null,Mt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a;let h=this.getContext();h.drawingBufferColorspace=ge._getDrawingBufferColorSpace(a),h.unpackColorSpace=ge._getUnpackColorSpace()}}class is extends Be{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(a,h){if(super.copy(a,h),a.background!==null)this.background=a.background.clone();if(a.environment!==null)this.environment=a.environment.clone();if(a.fog!==null)this.fog=a.fog.clone();if(this.backgroundBlurriness=a.backgroundBlurriness,this.backgroundIntensity=a.backgroundIntensity,this.backgroundRotation.copy(a.backgroundRotation),this.environmentIntensity=a.environmentIntensity,this.environmentRotation.copy(a.environmentRotation),a.overrideMaterial!==null)this.overrideMaterial=a.overrideMaterial.clone();return this.matrixAutoUpdate=a.matrixAutoUpdate,this}toJSON(a){let h=super.toJSON(a);if(this.fog!==null)h.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)h.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)h.object.backgroundIntensity=this.backgroundIntensity;if(h.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)h.object.environmentIntensity=this.environmentIntensity;return h.object.environmentRotation=this.environmentRotation.toArray(),h}}class Vs extends Xn{static get type(){return"LineBasicMaterial"}constructor(a){super();this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.linewidth=a.linewidth,this.linecap=a.linecap,this.linejoin=a.linejoin,this.fog=a.fog,this}}var zs=new X,Hs=new X,_o=new Ae,Hi=new Ti,Rs=new ts,Cr=new X,xo=new X;class il extends Be{constructor(a=new qe,h=new Vs){super();this.isLine=!0,this.type="Line",this.geometry=a,this.material=h,this.updateMorphTargets()}copy(a,h){return super.copy(a,h),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}computeLineDistances(){let a=this.geometry;if(a.index===null){let h=a.attributes.position,p=[0];for(let m=1,g=h.count;m<g;m++)zs.fromBufferAttribute(h,m-1),Hs.fromBufferAttribute(h,m),p[m]=p[m-1],p[m]+=zs.distanceTo(Hs);a.setAttribute("lineDistance",new Se(p,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(a,h){let p=this.geometry,m=this.matrixWorld,g=a.params.Line.threshold,_=p.drawRange;if(p.boundingSphere===null)p.computeBoundingSphere();if(Rs.copy(p.boundingSphere),Rs.applyMatrix4(m),Rs.radius+=g,a.ray.intersectsSphere(Rs)===!1)return;_o.copy(m).invert(),Hi.copy(a.ray).applyMatrix4(_o);let y=g/((this.scale.x+this.scale.y+this.scale.z)/3),x=y*y,M=this.isLineSegments?2:1,S=p.index,v=p.attributes.position;if(S!==null){let b=Math.max(0,_.start),A=Math.min(S.count,_.start+_.count);for(let C=b,P=A-1;C<P;C+=M){let T=S.getX(C),w=S.getX(C+1),G=Cs(this,a,Hi,x,T,w);if(G)h.push(G)}if(this.isLineLoop){let C=S.getX(A-1),P=S.getX(b),T=Cs(this,a,Hi,x,C,P);if(T)h.push(T)}}else{let b=Math.max(0,_.start),A=Math.min(v.count,_.start+_.count);for(let C=b,P=A-1;C<P;C+=M){let T=Cs(this,a,Hi,x,C,C+1);if(T)h.push(T)}if(this.isLineLoop){let C=Cs(this,a,Hi,x,A-1,b);if(C)h.push(C)}}}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let y=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[y]=g}}}}}function Cs(a,h,p,m,g,_){let y=a.geometry.attributes.position;if(zs.fromBufferAttribute(y,g),Hs.fromBufferAttribute(y,_),p.distanceSqToSegment(zs,Hs,Cr,xo)>m)return;Cr.applyMatrix4(a.matrixWorld);let M=h.ray.origin.distanceTo(Cr);if(M<h.near||M>h.far)return;return{distance:M,point:xo.clone().applyMatrix4(a.matrixWorld),index:g,face:null,faceIndex:null,barycoord:null,object:a}}var yo=new X,vo=new X;class Qr extends il{constructor(a,h){super(a,h);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let a=this.geometry;if(a.index===null){let h=a.attributes.position,p=[];for(let m=0,g=h.count;m<g;m+=2)yo.fromBufferAttribute(h,m),vo.fromBufferAttribute(h,m+1),p[m]=m===0?0:p[m-1],p[m+1]=p[m]+yo.distanceTo(vo);a.setAttribute("lineDistance",new Se(p,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ta extends Xe{constructor(a,h,p,m,g,_,y,x,M){super(a,h,p,m,g,_,y,x,M);this.isCanvasTexture=!0,this.needsUpdate=!0}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(a,h){let p=this.getUtoTmapping(a);return this.getPoint(p,h)}getPoints(a=5){let h=[];for(let p=0;p<=a;p++)h.push(this.getPoint(p/a));return h}getSpacedPoints(a=5){let h=[];for(let p=0;p<=a;p++)h.push(this.getPointAt(p/a));return h}getLength(){let a=this.getLengths();return a[a.length-1]}getLengths(a=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let h=[],p,m=this.getPoint(0),g=0;h.push(0);for(let _=1;_<=a;_++)p=this.getPoint(_/a),g+=p.distanceTo(m),h.push(g),m=p;return this.cacheArcLengths=h,h}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(a,h){let p=this.getLengths(),m=0,g=p.length,_;if(h)_=h;else _=a*p[g-1];let y=0,x=g-1,M;while(y<=x)if(m=Math.floor(y+(x-y)/2),M=p[m]-_,M<0)y=m+1;else if(M>0)x=m-1;else{x=m;break}if(m=x,p[m]===_)return m/(g-1);let S=p[m],v=p[m+1]-S,b=(_-S)/v;return(m+b)/(g-1)}getTangent(a,h){let m=a-0.0001,g=a+0.0001;if(m<0)m=0;if(g>1)g=1;let _=this.getPoint(m),y=this.getPoint(g),x=h||(_.isVector2?new St:new X);return x.copy(y).sub(_).normalize(),x}getTangentAt(a,h){let p=this.getUtoTmapping(a);return this.getTangent(p,h)}computeFrenetFrames(a,h){let p=new X,m=[],g=[],_=[],y=new X,x=new Ae;for(let b=0;b<=a;b++){let A=b/a;m[b]=this.getTangentAt(A,new X)}g[0]=new X,_[0]=new X;let M=Number.MAX_VALUE,S=Math.abs(m[0].x),E=Math.abs(m[0].y),v=Math.abs(m[0].z);if(S<=M)M=S,p.set(1,0,0);if(E<=M)M=E,p.set(0,1,0);if(v<=M)p.set(0,0,1);y.crossVectors(m[0],p).normalize(),g[0].crossVectors(m[0],y),_[0].crossVectors(m[0],g[0]);for(let b=1;b<=a;b++){if(g[b]=g[b-1].clone(),_[b]=_[b-1].clone(),y.crossVectors(m[b-1],m[b]),y.length()>Number.EPSILON){y.normalize();let A=Math.acos(Le(m[b-1].dot(m[b]),-1,1));g[b].applyMatrix4(x.makeRotationAxis(y,A))}_[b].crossVectors(m[b],g[b])}if(h===!0){let b=Math.acos(Le(g[0].dot(g[a]),-1,1));if(b/=a,m[0].dot(y.crossVectors(g[0],g[a]))>0)b=-b;for(let A=1;A<=a;A++)g[A].applyMatrix4(x.makeRotationAxis(m[A],b*A)),_[A].crossVectors(m[A],g[A])}return{tangents:m,normals:g,binormals:_}}clone(){return new this.constructor().copy(this)}copy(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}toJSON(){let a={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return a.arcLengthDivisions=this.arcLengthDivisions,a.type=this.type,a}fromJSON(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}}class Xs extends fn{constructor(a=0,h=0,p=1,m=1,g=0,_=Math.PI*2,y=!1,x=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=a,this.aY=h,this.xRadius=p,this.yRadius=m,this.aStartAngle=g,this.aEndAngle=_,this.aClockwise=y,this.aRotation=x}getPoint(a,h=new St){let p=h,m=Math.PI*2,g=this.aEndAngle-this.aStartAngle,_=Math.abs(g)<Number.EPSILON;while(g<0)g+=m;while(g>m)g-=m;if(g<Number.EPSILON)if(_)g=0;else g=m;if(this.aClockwise===!0&&!_)if(g===m)g=-m;else g=g-m;let y=this.aStartAngle+a*g,x=this.aX+this.xRadius*Math.cos(y),M=this.aY+this.yRadius*Math.sin(y);if(this.aRotation!==0){let S=Math.cos(this.aRotation),E=Math.sin(this.aRotation),v=x-this.aX,b=M-this.aY;x=v*S-b*E+this.aX,M=v*E+b*S+this.aY}return p.set(x,M)}copy(a){return super.copy(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}toJSON(){let a=super.toJSON();return a.aX=this.aX,a.aY=this.aY,a.xRadius=this.xRadius,a.yRadius=this.yRadius,a.aStartAngle=this.aStartAngle,a.aEndAngle=this.aEndAngle,a.aClockwise=this.aClockwise,a.aRotation=this.aRotation,a}fromJSON(a){return super.fromJSON(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}}class sl extends Xs{constructor(a,h,p,m,g,_){super(a,h,p,p,m,g,_);this.isArcCurve=!0,this.type="ArcCurve"}}function ea(){let a=0,h=0,p=0,m=0;function g(_,y,x,M){a=_,h=x,p=-3*_+3*y-2*x-M,m=2*_-2*y+x+M}return{initCatmullRom:function(_,y,x,M,S){g(y,x,S*(x-_),S*(M-y))},initNonuniformCatmullRom:function(_,y,x,M,S,E,v){let b=(y-_)/S-(x-_)/(S+E)+(x-y)/E,A=(x-y)/E-(M-y)/(E+v)+(M-x)/v;b*=E,A*=E,g(y,x,b,A)},calc:function(_){let y=_*_,x=y*_;return a+h*_+p*y+m*x}}}var Ps=new X,Pr=new ea,Ir=new ea,Dr=new ea;class rl extends fn{constructor(a=[],h=!1,p="centripetal",m=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=a,this.closed=h,this.curveType=p,this.tension=m}getPoint(a,h=new X){let p=h,m=this.points,g=m.length,_=(g-(this.closed?0:1))*a,y=Math.floor(_),x=_-y;if(this.closed)y+=y>0?0:(Math.floor(Math.abs(y)/g)+1)*g;else if(x===0&&y===g-1)y=g-2,x=1;let M,S;if(this.closed||y>0)M=m[(y-1)%g];else Ps.subVectors(m[0],m[1]).add(m[0]),M=Ps;let E=m[y%g],v=m[(y+1)%g];if(this.closed||y+2<g)S=m[(y+2)%g];else Ps.subVectors(m[g-1],m[g-2]).add(m[g-1]),S=Ps;if(this.curveType==="centripetal"||this.curveType==="chordal"){let b=this.curveType==="chordal"?0.5:0.25,A=Math.pow(M.distanceToSquared(E),b),C=Math.pow(E.distanceToSquared(v),b),P=Math.pow(v.distanceToSquared(S),b);if(C<0.0001)C=1;if(A<0.0001)A=C;if(P<0.0001)P=C;Pr.initNonuniformCatmullRom(M.x,E.x,v.x,S.x,A,C,P),Ir.initNonuniformCatmullRom(M.y,E.y,v.y,S.y,A,C,P),Dr.initNonuniformCatmullRom(M.z,E.z,v.z,S.z,A,C,P)}else if(this.curveType==="catmullrom")Pr.initCatmullRom(M.x,E.x,v.x,S.x,this.tension),Ir.initCatmullRom(M.y,E.y,v.y,S.y,this.tension),Dr.initCatmullRom(M.z,E.z,v.z,S.z,this.tension);return p.set(Pr.calc(x),Ir.calc(x),Dr.calc(x)),p}copy(a){super.copy(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(m.clone())}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}toJSON(){let a=super.toJSON();a.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];a.points.push(m.toArray())}return a.closed=this.closed,a.curveType=this.curveType,a.tension=this.tension,a}fromJSON(a){super.fromJSON(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(new X().fromArray(m))}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}}function Mo(a,h,p,m,g){let _=(m-h)*0.5,y=(g-p)*0.5,x=a*a,M=a*x;return(2*p-2*m+_+y)*M+(-3*p+3*m-2*_-y)*x+_*a+p}function Xf(a,h){let p=1-a;return p*p*h}function qf(a,h){return 2*(1-a)*a*h}function Yf(a,h){return a*a*h}function qi(a,h,p,m){return Xf(a,h)+qf(a,p)+Yf(a,m)}function Zf(a,h){let p=1-a;return p*p*p*h}function Jf(a,h){let p=1-a;return 3*p*p*a*h}function $f(a,h){return 3*(1-a)*a*a*h}function Kf(a,h){return a*a*a*h}function Yi(a,h,p,m,g){return Zf(a,h)+Jf(a,p)+$f(a,m)+Kf(a,g)}class na extends fn{constructor(a=new St,h=new St,p=new St,m=new St){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=a,this.v1=h,this.v2=p,this.v3=m}getPoint(a,h=new St){let p=h,m=this.v0,g=this.v1,_=this.v2,y=this.v3;return p.set(Yi(a,m.x,g.x,_.x,y.x),Yi(a,m.y,g.y,_.y,y.y)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class al extends fn{constructor(a=new X,h=new X,p=new X,m=new X){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=a,this.v1=h,this.v2=p,this.v3=m}getPoint(a,h=new X){let p=h,m=this.v0,g=this.v1,_=this.v2,y=this.v3;return p.set(Yi(a,m.x,g.x,_.x,y.x),Yi(a,m.y,g.y,_.y,y.y),Yi(a,m.z,g.z,_.z,y.z)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class ia extends fn{constructor(a=new St,h=new St){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=a,this.v2=h}getPoint(a,h=new St){let p=h;if(a===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(a).add(this.v1);return p}getPointAt(a,h){return this.getPoint(a,h)}getTangent(a,h=new St){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,h){return this.getTangent(a,h)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class ol extends fn{constructor(a=new X,h=new X){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=a,this.v2=h}getPoint(a,h=new X){let p=h;if(a===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(a).add(this.v1);return p}getPointAt(a,h){return this.getPoint(a,h)}getTangent(a,h=new X){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,h){return this.getTangent(a,h)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class sa extends fn{constructor(a=new St,h=new St,p=new St){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=a,this.v1=h,this.v2=p}getPoint(a,h=new St){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(qi(a,m.x,g.x,_.x),qi(a,m.y,g.y,_.y)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class ll extends fn{constructor(a=new X,h=new X,p=new X){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=a,this.v1=h,this.v2=p}getPoint(a,h=new X){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(qi(a,m.x,g.x,_.x),qi(a,m.y,g.y,_.y),qi(a,m.z,g.z,_.z)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class ra extends fn{constructor(a=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=a}getPoint(a,h=new St){let p=h,m=this.points,g=(m.length-1)*a,_=Math.floor(g),y=g-_,x=m[_===0?_:_-1],M=m[_],S=m[_>m.length-2?m.length-1:_+1],E=m[_>m.length-3?m.length-1:_+2];return p.set(Mo(y,x.x,M.x,S.x,E.x),Mo(y,x.y,M.y,S.y,E.y)),p}copy(a){super.copy(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(m.clone())}return this}toJSON(){let a=super.toJSON();a.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];a.points.push(m.toArray())}return a}fromJSON(a){super.fromJSON(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(new St().fromArray(m))}return this}}var Or=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:na,CubicBezierCurve3:al,EllipseCurve:Xs,LineCurve:ia,LineCurve3:ol,QuadraticBezierCurve:sa,QuadraticBezierCurve3:ll,SplineCurve:ra});class cl extends fn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(a){this.curves.push(a)}closePath(){let a=this.curves[0].getPoint(0),h=this.curves[this.curves.length-1].getPoint(1);if(!a.equals(h)){let p=a.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Or[p](h,a))}return this}getPoint(a,h){let p=a*this.getLength(),m=this.getCurveLengths(),g=0;while(g<m.length){if(m[g]>=p){let _=m[g]-p,y=this.curves[g],x=y.getLength(),M=x===0?0:1-_/x;return y.getPointAt(M,h)}g++}return null}getLength(){let a=this.getCurveLengths();return a[a.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let a=[],h=0;for(let p=0,m=this.curves.length;p<m;p++)h+=this.curves[p].getLength(),a.push(h);return this.cacheLengths=a,a}getSpacedPoints(a=40){let h=[];for(let p=0;p<=a;p++)h.push(this.getPoint(p/a));if(this.autoClose)h.push(h[0]);return h}getPoints(a=12){let h=[],p;for(let m=0,g=this.curves;m<g.length;m++){let _=g[m],y=_.isEllipseCurve?a*2:_.isLineCurve||_.isLineCurve3?1:_.isSplineCurve?a*_.points.length:a,x=_.getPoints(y);for(let M=0;M<x.length;M++){let S=x[M];if(p&&p.equals(S))continue;h.push(S),p=S}}if(this.autoClose&&h.length>1&&!h[h.length-1].equals(h[0]))h.push(h[0]);return h}copy(a){super.copy(a),this.curves=[];for(let h=0,p=a.curves.length;h<p;h++){let m=a.curves[h];this.curves.push(m.clone())}return this.autoClose=a.autoClose,this}toJSON(){let a=super.toJSON();a.autoClose=this.autoClose,a.curves=[];for(let h=0,p=this.curves.length;h<p;h++){let m=this.curves[h];a.curves.push(m.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.autoClose=a.autoClose,this.curves=[];for(let h=0,p=a.curves.length;h<p;h++){let m=a.curves[h];this.curves.push(new Or[m.type]().fromJSON(m))}return this}}class Br extends cl{constructor(a){super();if(this.type="Path",this.currentPoint=new St,a)this.setFromPoints(a)}setFromPoints(a){this.moveTo(a[0].x,a[0].y);for(let h=1,p=a.length;h<p;h++)this.lineTo(a[h].x,a[h].y);return this}moveTo(a,h){return this.currentPoint.set(a,h),this}lineTo(a,h){let p=new ia(this.currentPoint.clone(),new St(a,h));return this.curves.push(p),this.currentPoint.set(a,h),this}quadraticCurveTo(a,h,p,m){let g=new sa(this.currentPoint.clone(),new St(a,h),new St(p,m));return this.curves.push(g),this.currentPoint.set(p,m),this}bezierCurveTo(a,h,p,m,g,_){let y=new na(this.currentPoint.clone(),new St(a,h),new St(p,m),new St(g,_));return this.curves.push(y),this.currentPoint.set(g,_),this}splineThru(a){let h=[this.currentPoint.clone()].concat(a),p=new ra(h);return this.curves.push(p),this.currentPoint.copy(a[a.length-1]),this}arc(a,h,p,m,g,_){let y=this.currentPoint.x,x=this.currentPoint.y;return this.absarc(a+y,h+x,p,m,g,_),this}absarc(a,h,p,m,g,_){return this.absellipse(a,h,p,p,m,g,_),this}ellipse(a,h,p,m,g,_,y,x){let M=this.currentPoint.x,S=this.currentPoint.y;return this.absellipse(a+M,h+S,p,m,g,_,y,x),this}absellipse(a,h,p,m,g,_,y,x){let M=new Xs(a,h,p,m,g,_,y,x);if(this.curves.length>0){let E=M.getPoint(0);if(!E.equals(this.currentPoint))this.lineTo(E.x,E.y)}this.curves.push(M);let S=M.getPoint(1);return this.currentPoint.copy(S),this}copy(a){return super.copy(a),this.currentPoint.copy(a.currentPoint),this}toJSON(){let a=super.toJSON();return a.currentPoint=this.currentPoint.toArray(),a}fromJSON(a){return super.fromJSON(a),this.currentPoint.fromArray(a.currentPoint),this}}class qs extends qe{constructor(a=1,h=32,p=0,m=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:a,segments:h,thetaStart:p,thetaLength:m},h=Math.max(3,h);let g=[],_=[],y=[],x=[],M=new X,S=new St;_.push(0,0,0),y.push(0,0,1),x.push(0.5,0.5);for(let E=0,v=3;E<=h;E++,v+=3){let b=p+E/h*m;M.x=a*Math.cos(b),M.y=a*Math.sin(b),_.push(M.x,M.y,M.z),y.push(0,0,1),S.x=(_[v]/a+1)/2,S.y=(_[v+1]/a+1)/2,x.push(S.x,S.y)}for(let E=1;E<=h;E++)g.push(E,E+1,0);this.setIndex(g),this.setAttribute("position",new Se(_,3)),this.setAttribute("normal",new Se(y,3)),this.setAttribute("uv",new Se(x,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new qs(a.radius,a.segments,a.thetaStart,a.thetaLength)}}class ss extends qe{constructor(a=1,h=1,p=1,m=32,g=1,_=!1,y=0,x=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:a,radiusBottom:h,height:p,radialSegments:m,heightSegments:g,openEnded:_,thetaStart:y,thetaLength:x};let M=this;m=Math.floor(m),g=Math.floor(g);let S=[],E=[],v=[],b=[],A=0,C=[],P=p/2,T=0;if(w(),_===!1){if(a>0)G(!0);if(h>0)G(!1)}this.setIndex(S),this.setAttribute("position",new Se(E,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(b,2));function w(){let N=new X,H=new X,rt=0,V=(h-a)/p;for(let q=0;q<=g;q++){let ct=[],O=q/g,B=O*(h-a)+a;for(let j=0;j<=m;j++){let at=j/m,ot=at*x+y,ht=Math.sin(ot),ft=Math.cos(ot);H.x=B*ht,H.y=-O*p+P,H.z=B*ft,E.push(H.x,H.y,H.z),N.set(ht,V,ft).normalize(),v.push(N.x,N.y,N.z),b.push(at,1-O),ct.push(A++)}C.push(ct)}for(let q=0;q<m;q++)for(let ct=0;ct<g;ct++){let O=C[ct][q],B=C[ct+1][q],j=C[ct+1][q+1],at=C[ct][q+1];if(a>0||ct!==0)S.push(O,B,at),rt+=3;if(h>0||ct!==g-1)S.push(B,j,at),rt+=3}M.addGroup(T,rt,0),T+=rt}function G(N){let H=A,rt=new St,V=new X,q=0,ct=N===!0?a:h,O=N===!0?1:-1;for(let j=1;j<=m;j++)E.push(0,P*O,0),v.push(0,O,0),b.push(0.5,0.5),A++;let B=A;for(let j=0;j<=m;j++){let ot=j/m*x+y,ht=Math.cos(ot),ft=Math.sin(ot);V.x=ct*ft,V.y=P*O,V.z=ct*ht,E.push(V.x,V.y,V.z),v.push(0,O,0),rt.x=ht*0.5+0.5,rt.y=ft*0.5*O+0.5,b.push(rt.x,rt.y),A++}for(let j=0;j<m;j++){let at=H+j,ot=B+j;if(N===!0)S.push(ot,ot+1,at);else S.push(ot+1,ot,at);q+=3}M.addGroup(T,q,N===!0?1:2),T+=q}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new ss(a.radiusTop,a.radiusBottom,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength)}}class Ys extends ss{constructor(a=1,h=1,p=32,m=1,g=!1,_=0,y=Math.PI*2){super(0,a,h,p,m,g,_,y);this.type="ConeGeometry",this.parameters={radius:a,height:h,radialSegments:p,heightSegments:m,openEnded:g,thetaStart:_,thetaLength:y}}static fromJSON(a){return new Ys(a.radius,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength)}}var Is=new X,Ds=new X,Lr=new X,Ls=new sn;class aa extends qe{constructor(a=null,h=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:a,thresholdAngle:h},a!==null){let m=Math.pow(10,4),g=Math.cos(Si*h),_=a.getIndex(),y=a.getAttribute("position"),x=_?_.count:y.count,M=[0,0,0],S=["a","b","c"],E=[,,,],v={},b=[];for(let A=0;A<x;A+=3){if(_)M[0]=_.getX(A),M[1]=_.getX(A+1),M[2]=_.getX(A+2);else M[0]=A,M[1]=A+1,M[2]=A+2;let{a:C,b:P,c:T}=Ls;if(C.fromBufferAttribute(y,M[0]),P.fromBufferAttribute(y,M[1]),T.fromBufferAttribute(y,M[2]),Ls.getNormal(Lr),E[0]=`${Math.round(C.x*m)},${Math.round(C.y*m)},${Math.round(C.z*m)}`,E[1]=`${Math.round(P.x*m)},${Math.round(P.y*m)},${Math.round(P.z*m)}`,E[2]=`${Math.round(T.x*m)},${Math.round(T.y*m)},${Math.round(T.z*m)}`,E[0]===E[1]||E[1]===E[2]||E[2]===E[0])continue;for(let w=0;w<3;w++){let G=(w+1)%3,N=E[w],H=E[G],rt=Ls[S[w]],V=Ls[S[G]],q=`${N}_${H}`,ct=`${H}_${N}`;if(ct in v&&v[ct]){if(Lr.dot(v[ct].normal)<=g)b.push(rt.x,rt.y,rt.z),b.push(V.x,V.y,V.z);v[ct]=null}else if(!(q in v))v[q]={index0:M[w],index1:M[G],normal:Lr.clone()}}}for(let A in v)if(v[A]){let{index0:C,index1:P}=v[A];Is.fromBufferAttribute(y,C),Ds.fromBufferAttribute(y,P),b.push(Is.x,Is.y,Is.z),b.push(Ds.x,Ds.y,Ds.z)}this.setAttribute("position",new Se(b,3))}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}}class rs extends Br{constructor(a){super(a);this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(a){let h=[];for(let p=0,m=this.holes.length;p<m;p++)h[p]=this.holes[p].getPoints(a);return h}extractPoints(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}}copy(a){super.copy(a),this.holes=[];for(let h=0,p=a.holes.length;h<p;h++){let m=a.holes[h];this.holes.push(m.clone())}return this}toJSON(){let a=super.toJSON();a.uuid=this.uuid,a.holes=[];for(let h=0,p=this.holes.length;h<p;h++){let m=this.holes[h];a.holes.push(m.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.uuid=a.uuid,this.holes=[];for(let h=0,p=a.holes.length;h<p;h++){let m=a.holes[h];this.holes.push(new Br().fromJSON(m))}return this}}var jf={triangulate:function(a,h,p=2){let m=h&&h.length,g=m?h[0]*p:a.length,_=hl(a,0,g,p,!0),y=[];if(!_||_.next===_.prev)return y;let x,M,S,E,v,b,A;if(m)_=ip(a,h,_,p);if(a.length>80*p){x=S=a[0],M=E=a[1];for(let C=p;C<g;C+=p){if(v=a[C],b=a[C+1],v<x)x=v;if(b<M)M=b;if(v>S)S=v;if(b>E)E=b}A=Math.max(S-x,E-M),A=A!==0?32767/A:0}return $i(_,y,p,x,M,A,0),y}};function hl(a,h,p,m,g){let _,y;if(g===pp(a,h,p,m)>0)for(_=h;_<p;_+=m)y=So(_,a[_],a[_+1],y);else for(_=p-m;_>=h;_-=m)y=So(_,a[_],a[_+1],y);if(y&&Zs(y,y.next))ji(y),y=y.next;return y}function ni(a,h){if(!a)return a;if(!h)h=a;let p=a,m;do if(m=!1,!p.steiner&&(Zs(p,p.next)||Pe(p.prev,p,p.next)===0)){if(ji(p),p=h=p.prev,p===p.next)break;m=!0}else p=p.next;while(m||p!==h);return h}function $i(a,h,p,m,g,_,y){if(!a)return;if(!y&&_)lp(a,m,g,_);let x=a,M,S;while(a.prev!==a.next){if(M=a.prev,S=a.next,_?tp(a,m,g,_):Qf(a)){h.push(M.i/p|0),h.push(a.i/p|0),h.push(S.i/p|0),ji(a),a=S.next,x=S.next;continue}if(a=S,a===x){if(!y)$i(ni(a),h,p,m,g,_,1);else if(y===1)a=ep(ni(a),h,p),$i(a,h,p,m,g,_,2);else if(y===2)np(a,h,p,m,g,_);break}}}function Qf(a){let h=a.prev,p=a,m=a.next;if(Pe(h,p,m)>=0)return!1;let g=h.x,_=p.x,y=m.x,x=h.y,M=p.y,S=m.y,E=g<_?g<y?g:y:_<y?_:y,v=x<M?x<S?x:S:M<S?M:S,b=g>_?g>y?g:y:_>y?_:y,A=x>M?x>S?x:S:M>S?M:S,C=m.next;while(C!==h){if(C.x>=E&&C.x<=b&&C.y>=v&&C.y<=A&&Mi(g,x,_,M,y,S,C.x,C.y)&&Pe(C.prev,C,C.next)>=0)return!1;C=C.next}return!0}function tp(a,h,p,m){let g=a.prev,_=a,y=a.next;if(Pe(g,_,y)>=0)return!1;let x=g.x,M=_.x,S=y.x,E=g.y,v=_.y,b=y.y,A=x<M?x<S?x:S:M<S?M:S,C=E<v?E<b?E:b:v<b?v:b,P=x>M?x>S?x:S:M>S?M:S,T=E>v?E>b?E:b:v>b?v:b,w=zr(A,C,h,p,m),G=zr(P,T,h,p,m),{prevZ:N,nextZ:H}=a;while(N&&N.z>=w&&H&&H.z<=G){if(N.x>=A&&N.x<=P&&N.y>=C&&N.y<=T&&N!==g&&N!==y&&Mi(x,E,M,v,S,b,N.x,N.y)&&Pe(N.prev,N,N.next)>=0)return!1;if(N=N.prevZ,H.x>=A&&H.x<=P&&H.y>=C&&H.y<=T&&H!==g&&H!==y&&Mi(x,E,M,v,S,b,H.x,H.y)&&Pe(H.prev,H,H.next)>=0)return!1;H=H.nextZ}while(N&&N.z>=w){if(N.x>=A&&N.x<=P&&N.y>=C&&N.y<=T&&N!==g&&N!==y&&Mi(x,E,M,v,S,b,N.x,N.y)&&Pe(N.prev,N,N.next)>=0)return!1;N=N.prevZ}while(H&&H.z<=G){if(H.x>=A&&H.x<=P&&H.y>=C&&H.y<=T&&H!==g&&H!==y&&Mi(x,E,M,v,S,b,H.x,H.y)&&Pe(H.prev,H,H.next)>=0)return!1;H=H.nextZ}return!0}function ep(a,h,p){let m=a;do{let g=m.prev,_=m.next.next;if(!Zs(g,_)&&ul(g,m,m.next,_)&&Ki(g,_)&&Ki(_,g))h.push(g.i/p|0),h.push(m.i/p|0),h.push(_.i/p|0),ji(m),ji(m.next),m=a=_;m=m.next}while(m!==a);return ni(m)}function np(a,h,p,m,g,_){let y=a;do{let x=y.next.next;while(x!==y.prev){if(y.i!==x.i&&up(y,x)){let M=dl(y,x);y=ni(y,y.next),M=ni(M,M.next),$i(y,h,p,m,g,_,0),$i(M,h,p,m,g,_,0);return}x=x.next}y=y.next}while(y!==a)}function ip(a,h,p,m){let g=[],_,y,x,M,S;for(_=0,y=h.length;_<y;_++){if(x=h[_]*m,M=_<y-1?h[_+1]*m:a.length,S=hl(a,x,M,m,!1),S===S.next)S.steiner=!0;g.push(hp(S))}g.sort(sp);for(_=0;_<g.length;_++)p=rp(g[_],p);return p}function sp(a,h){return a.x-h.x}function rp(a,h){let p=ap(a,h);if(!p)return h;let m=dl(p,a);return ni(m,m.next),ni(p,p.next)}function ap(a,h){let p=h,m=-1/0,g,{x:_,y}=a;do{if(y<=p.y&&y>=p.next.y&&p.next.y!==p.y){let b=p.x+(y-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(b<=_&&b>m){if(m=b,g=p.x<p.next.x?p:p.next,b===_)return g}}p=p.next}while(p!==h);if(!g)return null;let x=g,M=g.x,S=g.y,E=1/0,v;p=g;do{if(_>=p.x&&p.x>=M&&_!==p.x&&Mi(y<S?_:m,y,M,S,y<S?m:_,y,p.x,p.y)){if(v=Math.abs(y-p.y)/(_-p.x),Ki(p,a)&&(v<E||v===E&&(p.x>g.x||p.x===g.x&&op(g,p))))g=p,E=v}p=p.next}while(p!==x);return g}function op(a,h){return Pe(a.prev,a,h.prev)<0&&Pe(h.next,a,a.next)<0}function lp(a,h,p,m){let g=a;do{if(g.z===0)g.z=zr(g.x,g.y,h,p,m);g.prevZ=g.prev,g.nextZ=g.next,g=g.next}while(g!==a);g.prevZ.nextZ=null,g.prevZ=null,cp(g)}function cp(a){let h,p,m,g,_,y,x,M,S=1;do{p=a,a=null,_=null,y=0;while(p){y++,m=p,x=0;for(h=0;h<S;h++)if(x++,m=m.nextZ,!m)break;M=S;while(x>0||M>0&&m){if(x!==0&&(M===0||!m||p.z<=m.z))g=p,p=p.nextZ,x--;else g=m,m=m.nextZ,M--;if(_)_.nextZ=g;else a=g;g.prevZ=_,_=g}p=m}_.nextZ=null,S*=2}while(y>1);return a}function zr(a,h,p,m,g){return a=(a-p)*g|0,h=(h-m)*g|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,h=(h|h<<8)&16711935,h=(h|h<<4)&252645135,h=(h|h<<2)&858993459,h=(h|h<<1)&1431655765,a|h<<1}function hp(a){let h=a,p=a;do{if(h.x<p.x||h.x===p.x&&h.y<p.y)p=h;h=h.next}while(h!==a);return p}function Mi(a,h,p,m,g,_,y,x){return(g-y)*(h-x)>=(a-y)*(_-x)&&(a-y)*(m-x)>=(p-y)*(h-x)&&(p-y)*(_-x)>=(g-y)*(m-x)}function up(a,h){return a.next.i!==h.i&&a.prev.i!==h.i&&!dp(a,h)&&(Ki(a,h)&&Ki(h,a)&&fp(a,h)&&(Pe(a.prev,a,h.prev)||Pe(a,h.prev,h))||Zs(a,h)&&Pe(a.prev,a,a.next)>0&&Pe(h.prev,h,h.next)>0)}function Pe(a,h,p){return(h.y-a.y)*(p.x-h.x)-(h.x-a.x)*(p.y-h.y)}function Zs(a,h){return a.x===h.x&&a.y===h.y}function ul(a,h,p,m){let g=Ns(Pe(a,h,p)),_=Ns(Pe(a,h,m)),y=Ns(Pe(p,m,a)),x=Ns(Pe(p,m,h));if(g!==_&&y!==x)return!0;if(g===0&&Us(a,p,h))return!0;if(_===0&&Us(a,m,h))return!0;if(y===0&&Us(p,a,m))return!0;if(x===0&&Us(p,h,m))return!0;return!1}function Us(a,h,p){return h.x<=Math.max(a.x,p.x)&&h.x>=Math.min(a.x,p.x)&&h.y<=Math.max(a.y,p.y)&&h.y>=Math.min(a.y,p.y)}function Ns(a){return a>0?1:a<0?-1:0}function dp(a,h){let p=a;do{if(p.i!==a.i&&p.next.i!==a.i&&p.i!==h.i&&p.next.i!==h.i&&ul(p,p.next,a,h))return!0;p=p.next}while(p!==a);return!1}function Ki(a,h){return Pe(a.prev,a,a.next)<0?Pe(a,h,a.next)>=0&&Pe(a,a.prev,h)>=0:Pe(a,h,a.prev)<0||Pe(a,a.next,h)<0}function fp(a,h){let p=a,m=!1,g=(a.x+h.x)/2,_=(a.y+h.y)/2;do{if(p.y>_!==p.next.y>_&&p.next.y!==p.y&&g<(p.next.x-p.x)*(_-p.y)/(p.next.y-p.y)+p.x)m=!m;p=p.next}while(p!==a);return m}function dl(a,h){let p=new Hr(a.i,a.x,a.y),m=new Hr(h.i,h.x,h.y),g=a.next,_=h.prev;return a.next=h,h.prev=a,p.next=g,g.prev=p,m.next=p,p.prev=m,_.next=m,m.prev=_,m}function So(a,h,p,m){let g=new Hr(a,h,p);if(!m)g.prev=g,g.next=g;else g.next=m.next,g.prev=m,m.next.prev=g,m.next=g;return g}function ji(a){if(a.next.prev=a.prev,a.prev.next=a.next,a.prevZ)a.prevZ.nextZ=a.nextZ;if(a.nextZ)a.nextZ.prevZ=a.prevZ}function Hr(a,h,p){this.i=a,this.x=h,this.y=p,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pp(a,h,p,m){let g=0;for(let _=h,y=p-m;_<p;_+=m)g+=(a[y]-a[_])*(a[_+1]+a[y+1]),y=_;return g}class kn{static area(a){let h=a.length,p=0;for(let m=h-1,g=0;g<h;m=g++)p+=a[m].x*a[g].y-a[g].x*a[m].y;return p*0.5}static isClockWise(a){return kn.area(a)<0}static triangulateShape(a,h){let p=[],m=[],g=[];Eo(a),bo(p,a);let _=a.length;h.forEach(Eo);for(let x=0;x<h.length;x++)m.push(_),_+=h[x].length,bo(p,h[x]);let y=jf.triangulate(p,m);for(let x=0;x<y.length;x+=3)g.push(y.slice(x,x+3));return g}}function Eo(a){let h=a.length;if(h>2&&a[h-1].equals(a[0]))a.pop()}function bo(a,h){for(let p=0;p<h.length;p++)a.push(h[p].x),a.push(h[p].y)}class Js extends qe{constructor(a=new rs([new St(0.5,0.5),new St(-0.5,0.5),new St(-0.5,-0.5),new St(0.5,-0.5)]),h={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:a,options:h},a=Array.isArray(a)?a:[a];let p=this,m=[],g=[];for(let y=0,x=a.length;y<x;y++){let M=a[y];_(M)}this.setAttribute("position",new Se(m,3)),this.setAttribute("uv",new Se(g,2)),this.computeVertexNormals();function _(y){let x=[],M=h.curveSegments!==void 0?h.curveSegments:12,S=h.steps!==void 0?h.steps:1,E=h.depth!==void 0?h.depth:1,v=h.bevelEnabled!==void 0?h.bevelEnabled:!0,b=h.bevelThickness!==void 0?h.bevelThickness:0.2,A=h.bevelSize!==void 0?h.bevelSize:b-0.1,C=h.bevelOffset!==void 0?h.bevelOffset:0,P=h.bevelSegments!==void 0?h.bevelSegments:3,T=h.extrudePath,w=h.UVGenerator!==void 0?h.UVGenerator:mp,G,N=!1,H,rt,V,q;if(T)G=T.getSpacedPoints(S),N=!0,v=!1,H=T.computeFrenetFrames(S,!1),rt=new X,V=new X,q=new X;if(!v)P=0,b=0,A=0,C=0;let ct=y.extractPoints(M),{shape:O,holes:B}=ct;if(!kn.isClockWise(O)){O=O.reverse();for(let xt=0,wt=B.length;xt<wt;xt++){let W=B[xt];if(kn.isClockWise(W))B[xt]=W.reverse()}}let at=kn.triangulateShape(O,B),ot=O;for(let xt=0,wt=B.length;xt<wt;xt++){let W=B[xt];O=O.concat(W)}function ht(xt,wt,W){if(!wt)console.error("THREE.ExtrudeGeometry: vec does not exist");return xt.clone().addScaledVector(wt,W)}let ft=O.length,Z=at.length;function st(xt,wt,W){let Bt,At,Vt,Mt=xt.x-wt.x,ie=xt.y-wt.y,Ot=W.x-xt.x,Xt=W.y-xt.y,k=Mt*Mt+ie*ie,L=Mt*Xt-ie*Ot;if(Math.abs(L)>Number.EPSILON){let nt=Math.sqrt(k),mt=Math.sqrt(Ot*Ot+Xt*Xt),gt=wt.x-ie/nt,ut=wt.y+Mt/nt,$t=W.x-Xt/mt,Lt=W.y+Ot/mt,It=(($t-gt)*Xt-(Lt-ut)*Ot)/(Mt*Xt-ie*Ot);Bt=gt+Mt*It-xt.x,At=ut+ie*It-xt.y;let ee=Bt*Bt+At*At;if(ee<=2)return new St(Bt,At);else Vt=Math.sqrt(ee/2)}else{let nt=!1;if(Mt>Number.EPSILON){if(Ot>Number.EPSILON)nt=!0}else if(Mt<-Number.EPSILON){if(Ot<-Number.EPSILON)nt=!0}else if(Math.sign(ie)===Math.sign(Xt))nt=!0;if(nt)Bt=-ie,At=Mt,Vt=Math.sqrt(k);else Bt=Mt,At=ie,Vt=Math.sqrt(k/2)}return new St(Bt/Vt,At/Vt)}let Y=[];for(let xt=0,wt=ot.length,W=wt-1,Bt=xt+1;xt<wt;xt++,W++,Bt++){if(W===wt)W=0;if(Bt===wt)Bt=0;Y[xt]=st(ot[xt],ot[W],ot[Bt])}let Ct=[],U,Wt=Y.concat();for(let xt=0,wt=B.length;xt<wt;xt++){let W=B[xt];U=[];for(let Bt=0,At=W.length,Vt=At-1,Mt=Bt+1;Bt<At;Bt++,Vt++,Mt++){if(Vt===At)Vt=0;if(Mt===At)Mt=0;U[Bt]=st(W[Bt],W[Vt],W[Mt])}Ct.push(U),Wt=Wt.concat(U)}for(let xt=0;xt<P;xt++){let wt=xt/P,W=b*Math.cos(wt*Math.PI/2),Bt=A*Math.sin(wt*Math.PI/2)+C;for(let At=0,Vt=ot.length;At<Vt;At++){let Mt=ht(ot[At],Y[At],Bt);Gt(Mt.x,Mt.y,-W)}for(let At=0,Vt=B.length;At<Vt;At++){let Mt=B[At];U=Ct[At];for(let ie=0,Ot=Mt.length;ie<Ot;ie++){let Xt=ht(Mt[ie],U[ie],Bt);Gt(Xt.x,Xt.y,-W)}}}let jt=A+C;for(let xt=0;xt<ft;xt++){let wt=v?ht(O[xt],Wt[xt],jt):O[xt];if(!N)Gt(wt.x,wt.y,0);else V.copy(H.normals[0]).multiplyScalar(wt.x),rt.copy(H.binormals[0]).multiplyScalar(wt.y),q.copy(G[0]).add(V).add(rt),Gt(q.x,q.y,q.z)}for(let xt=1;xt<=S;xt++)for(let wt=0;wt<ft;wt++){let W=v?ht(O[wt],Wt[wt],jt):O[wt];if(!N)Gt(W.x,W.y,E/S*xt);else V.copy(H.normals[xt]).multiplyScalar(W.x),rt.copy(H.binormals[xt]).multiplyScalar(W.y),q.copy(G[xt]).add(V).add(rt),Gt(q.x,q.y,q.z)}for(let xt=P-1;xt>=0;xt--){let wt=xt/P,W=b*Math.cos(wt*Math.PI/2),Bt=A*Math.sin(wt*Math.PI/2)+C;for(let At=0,Vt=ot.length;At<Vt;At++){let Mt=ht(ot[At],Y[At],Bt);Gt(Mt.x,Mt.y,E+W)}for(let At=0,Vt=B.length;At<Vt;At++){let Mt=B[At];U=Ct[At];for(let ie=0,Ot=Mt.length;ie<Ot;ie++){let Xt=ht(Mt[ie],U[ie],Bt);if(!N)Gt(Xt.x,Xt.y,E+W);else Gt(Xt.x,Xt.y+G[S-1].y,G[S-1].x+W)}}}dt(),Et();function dt(){let xt=m.length/3;if(v){let wt=0,W=ft*wt;for(let Bt=0;Bt<Z;Bt++){let At=at[Bt];Pt(At[2]+W,At[1]+W,At[0]+W)}wt=S+P*2,W=ft*wt;for(let Bt=0;Bt<Z;Bt++){let At=at[Bt];Pt(At[0]+W,At[1]+W,At[2]+W)}}else{for(let wt=0;wt<Z;wt++){let W=at[wt];Pt(W[2],W[1],W[0])}for(let wt=0;wt<Z;wt++){let W=at[wt];Pt(W[0]+ft*S,W[1]+ft*S,W[2]+ft*S)}}p.addGroup(xt,m.length/3-xt,0)}function Et(){let xt=m.length/3,wt=0;Yt(ot,wt),wt+=ot.length;for(let W=0,Bt=B.length;W<Bt;W++){let At=B[W];Yt(At,wt),wt+=At.length}p.addGroup(xt,m.length/3-xt,1)}function Yt(xt,wt){let W=xt.length;while(--W>=0){let Bt=W,At=W-1;if(At<0)At=xt.length-1;for(let Vt=0,Mt=S+P*2;Vt<Mt;Vt++){let ie=ft*Vt,Ot=ft*(Vt+1),Xt=wt+Bt+ie,k=wt+At+ie,L=wt+At+Ot,nt=wt+Bt+Ot;te(Xt,k,L,nt)}}}function Gt(xt,wt,W){x.push(xt),x.push(wt),x.push(W)}function Pt(xt,wt,W){ce(xt),ce(wt),ce(W);let Bt=m.length/3,At=w.generateTopUV(p,m,Bt-3,Bt-2,Bt-1);Qt(At[0]),Qt(At[1]),Qt(At[2])}function te(xt,wt,W,Bt){ce(xt),ce(wt),ce(Bt),ce(wt),ce(W),ce(Bt);let At=m.length/3,Vt=w.generateSideWallUV(p,m,At-6,At-3,At-2,At-1);Qt(Vt[0]),Qt(Vt[1]),Qt(Vt[3]),Qt(Vt[1]),Qt(Vt[2]),Qt(Vt[3])}function ce(xt){m.push(x[xt*3+0]),m.push(x[xt*3+1]),m.push(x[xt*3+2])}function Qt(xt){g.push(xt.x),g.push(xt.y)}}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}toJSON(){let a=super.toJSON(),h=this.parameters.shapes,p=this.parameters.options;return gp(h,p,a)}static fromJSON(a,h){let p=[];for(let g=0,_=a.shapes.length;g<_;g++){let y=h[a.shapes[g]];p.push(y)}let m=a.options.extrudePath;if(m!==void 0)a.options.extrudePath=new Or[m.type]().fromJSON(m);return new Js(p,a.options)}}var mp={generateTopUV:function(a,h,p,m,g){let _=h[p*3],y=h[p*3+1],x=h[m*3],M=h[m*3+1],S=h[g*3],E=h[g*3+1];return[new St(_,y),new St(x,M),new St(S,E)]},generateSideWallUV:function(a,h,p,m,g,_){let y=h[p*3],x=h[p*3+1],M=h[p*3+2],S=h[m*3],E=h[m*3+1],v=h[m*3+2],b=h[g*3],A=h[g*3+1],C=h[g*3+2],P=h[_*3],T=h[_*3+1],w=h[_*3+2];if(Math.abs(x-E)<Math.abs(y-S))return[new St(y,1-M),new St(S,1-v),new St(b,1-C),new St(P,1-w)];else return[new St(x,1-M),new St(E,1-v),new St(A,1-C),new St(T,1-w)]}};function gp(a,h,p){if(p.shapes=[],Array.isArray(a))for(let m=0,g=a.length;m<g;m++){let _=a[m];p.shapes.push(_.uuid)}else p.shapes.push(a.uuid);if(p.options=Object.assign({},h),h.extrudePath!==void 0)p.options.extrudePath=h.extrudePath.toJSON();return p}class $s extends qe{constructor(a=new rs([new St(0,0.5),new St(-0.5,-0.5),new St(0.5,-0.5)]),h=12){super();this.type="ShapeGeometry",this.parameters={shapes:a,curveSegments:h};let p=[],m=[],g=[],_=[],y=0,x=0;if(Array.isArray(a)===!1)M(a);else for(let S=0;S<a.length;S++)M(a[S]),this.addGroup(y,x,S),y+=x,x=0;this.setIndex(p),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(g,3)),this.setAttribute("uv",new Se(_,2));function M(S){let E=m.length/3,v=S.extractPoints(h),{shape:b,holes:A}=v;if(kn.isClockWise(b)===!1)b=b.reverse();for(let P=0,T=A.length;P<T;P++){let w=A[P];if(kn.isClockWise(w)===!0)A[P]=w.reverse()}let C=kn.triangulateShape(b,A);for(let P=0,T=A.length;P<T;P++){let w=A[P];b=b.concat(w)}for(let P=0,T=b.length;P<T;P++){let w=b[P];m.push(w.x,w.y,0),g.push(0,0,1),_.push(w.x,w.y)}for(let P=0,T=C.length;P<T;P++){let w=C[P],G=w[0]+E,N=w[1]+E,H=w[2]+E;p.push(G,N,H),x+=3}}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}toJSON(){let a=super.toJSON(),h=this.parameters.shapes;return _p(h,a)}static fromJSON(a,h){let p=[];for(let m=0,g=a.shapes.length;m<g;m++){let _=h[a.shapes[m]];p.push(_)}return new $s(p,a.curveSegments)}}function _p(a,h){if(h.shapes=[],Array.isArray(a))for(let p=0,m=a.length;p<m;p++){let g=a[p];h.shapes.push(g.uuid)}else h.shapes.push(a.uuid);return h}class Ks extends qe{constructor(a=1,h=32,p=16,m=0,g=Math.PI*2,_=0,y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:a,widthSegments:h,heightSegments:p,phiStart:m,phiLength:g,thetaStart:_,thetaLength:y},h=Math.max(3,Math.floor(h)),p=Math.max(2,Math.floor(p));let x=Math.min(_+y,Math.PI),M=0,S=[],E=new X,v=new X,b=[],A=[],C=[],P=[];for(let T=0;T<=p;T++){let w=[],G=T/p,N=0;if(T===0&&_===0)N=0.5/h;else if(T===p&&x===Math.PI)N=-0.5/h;for(let H=0;H<=h;H++){let rt=H/h;E.x=-a*Math.cos(m+rt*g)*Math.sin(_+G*y),E.y=a*Math.cos(_+G*y),E.z=a*Math.sin(m+rt*g)*Math.sin(_+G*y),A.push(E.x,E.y,E.z),v.copy(E).normalize(),C.push(v.x,v.y,v.z),P.push(rt+N,1-G),w.push(M++)}S.push(w)}for(let T=0;T<p;T++)for(let w=0;w<h;w++){let G=S[T][w+1],N=S[T][w],H=S[T+1][w],rt=S[T+1][w+1];if(T!==0||_>0)b.push(G,N,rt);if(T!==p-1||x<Math.PI)b.push(N,H,rt)}this.setIndex(b),this.setAttribute("position",new Se(A,3)),this.setAttribute("normal",new Se(C,3)),this.setAttribute("uv",new Se(P,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new Ks(a.radius,a.widthSegments,a.heightSegments,a.phiStart,a.phiLength,a.thetaStart,a.thetaLength)}}class qn extends qe{constructor(a=1,h=0.4,p=12,m=48,g=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:a,tube:h,radialSegments:p,tubularSegments:m,arc:g},p=Math.floor(p),m=Math.floor(m);let _=[],y=[],x=[],M=[],S=new X,E=new X,v=new X;for(let b=0;b<=p;b++)for(let A=0;A<=m;A++){let C=A/m*g,P=b/p*Math.PI*2;E.x=(a+h*Math.cos(P))*Math.cos(C),E.y=(a+h*Math.cos(P))*Math.sin(C),E.z=h*Math.sin(P),y.push(E.x,E.y,E.z),S.x=a*Math.cos(C),S.y=a*Math.sin(C),v.subVectors(E,S).normalize(),x.push(v.x,v.y,v.z),M.push(A/m),M.push(b/p)}for(let b=1;b<=p;b++)for(let A=1;A<=m;A++){let C=(m+1)*b+A-1,P=(m+1)*(b-1)+A-1,T=(m+1)*(b-1)+A,w=(m+1)*b+A;_.push(C,P,w),_.push(P,T,w)}this.setIndex(_),this.setAttribute("position",new Se(y,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(M,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new qn(a.radius,a.tube,a.radialSegments,a.tubularSegments,a.arc)}}class oa extends Xn{static get type(){return"ShadowMaterial"}constructor(a){super();this.isShadowMaterial=!0,this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.fog=a.fog,this}}class Yn extends Xn{static get type(){return"MeshStandardMaterial"}constructor(a){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.defines={STANDARD:""},this.color.copy(a.color),this.roughness=a.roughness,this.metalness=a.metalness,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.roughnessMap=a.roughnessMap,this.metalnessMap=a.metalnessMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.envMapIntensity=a.envMapIntensity,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}class la extends Yn{static get type(){return"MeshPhysicalMaterial"}constructor(a){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(h){this.ior=(1+0.4*h)/(1-0.4*h)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(a)}get anisotropy(){return this._anisotropy}set anisotropy(a){if(this._anisotropy>0!==a>0)this.version++;this._anisotropy=a}get clearcoat(){return this._clearcoat}set clearcoat(a){if(this._clearcoat>0!==a>0)this.version++;this._clearcoat=a}get iridescence(){return this._iridescence}set iridescence(a){if(this._iridescence>0!==a>0)this.version++;this._iridescence=a}get dispersion(){return this._dispersion}set dispersion(a){if(this._dispersion>0!==a>0)this.version++;this._dispersion=a}get sheen(){return this._sheen}set sheen(a){if(this._sheen>0!==a>0)this.version++;this._sheen=a}get transmission(){return this._transmission}set transmission(a){if(this._transmission>0!==a>0)this.version++;this._transmission=a}copy(a){return super.copy(a),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=a.anisotropy,this.anisotropyRotation=a.anisotropyRotation,this.anisotropyMap=a.anisotropyMap,this.clearcoat=a.clearcoat,this.clearcoatMap=a.clearcoatMap,this.clearcoatRoughness=a.clearcoatRoughness,this.clearcoatRoughnessMap=a.clearcoatRoughnessMap,this.clearcoatNormalMap=a.clearcoatNormalMap,this.clearcoatNormalScale.copy(a.clearcoatNormalScale),this.dispersion=a.dispersion,this.ior=a.ior,this.iridescence=a.iridescence,this.iridescenceMap=a.iridescenceMap,this.iridescenceIOR=a.iridescenceIOR,this.iridescenceThicknessRange=[...a.iridescenceThicknessRange],this.iridescenceThicknessMap=a.iridescenceThicknessMap,this.sheen=a.sheen,this.sheenColor.copy(a.sheenColor),this.sheenColorMap=a.sheenColorMap,this.sheenRoughness=a.sheenRoughness,this.sheenRoughnessMap=a.sheenRoughnessMap,this.transmission=a.transmission,this.transmissionMap=a.transmissionMap,this.thickness=a.thickness,this.thicknessMap=a.thicknessMap,this.attenuationDistance=a.attenuationDistance,this.attenuationColor.copy(a.attenuationColor),this.specularIntensity=a.specularIntensity,this.specularIntensityMap=a.specularIntensityMap,this.specularColor.copy(a.specularColor),this.specularColorMap=a.specularColorMap,this}}function Fs(a,h,p){if(!a||!p&&a.constructor===h)return a;if(typeof h.BYTES_PER_ELEMENT==="number")return new h(a);return Array.prototype.slice.call(a)}function xp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}class as{constructor(a,h,p,m){this.parameterPositions=a,this._cachedIndex=0,this.resultBuffer=m!==void 0?m:new h.constructor(p),this.sampleValues=h,this.valueSize=p,this.settings=null,this.DefaultSettings_={}}evaluate(a){let h=this.parameterPositions,p=this._cachedIndex,m=h[p],g=h[p-1];n:{t:{let _;e:{i:if(!(a<m)){for(let y=p+2;;){if(m===void 0){if(a<g)break i;return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}if(p===y)break;if(g=m,m=h[++p],a<m)break t}_=h.length;break e}if(!(a>=g)){let y=h[1];if(a<y)p=2,g=y;for(let x=p-2;;){if(g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(p===x)break;if(m=g,g=h[--p-1],a>=g)break t}_=p,p=0;break e}break n}while(p<_){let y=p+_>>>1;if(a<h[y])_=y;else p=y+1}if(m=h[p],g=h[p-1],g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(m===void 0)return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}this._cachedIndex=p,this.intervalChanged_(p,g,m)}return this.interpolate_(p,g,a,m)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(a){let h=this.resultBuffer,p=this.sampleValues,m=this.valueSize,g=a*m;for(let _=0;_!==m;++_)h[_]=p[g+_];return h}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class fl extends as{constructor(a,h,p,m){super(a,h,p,m);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(a,h,p){let m=this.parameterPositions,g=a-2,_=a+1,y=m[g],x=m[_];if(y===void 0)switch(this.getSettings_().endingStart){case 2401:g=a,y=2*h-p;break;case 2402:g=m.length-2,y=h+m[g]-m[g+1];break;default:g=a,y=p}if(x===void 0)switch(this.getSettings_().endingEnd){case 2401:_=a,x=2*p-h;break;case 2402:_=1,x=p+m[1]-m[0];break;default:_=a-1,x=h}let M=(p-h)*0.5,S=this.valueSize;this._weightPrev=M/(h-y),this._weightNext=M/(x-p),this._offsetPrev=g*S,this._offsetNext=_*S}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=a*y,M=x-y,S=this._offsetPrev,E=this._offsetNext,v=this._weightPrev,b=this._weightNext,A=(p-h)/(m-h),C=A*A,P=C*A,T=-v*P+2*v*C-v*A,w=(1+v)*P+(-1.5-2*v)*C+(-0.5+v)*A+1,G=(-1-b)*P+(1.5+b)*C+0.5*A,N=b*P-b*C;for(let H=0;H!==y;++H)g[H]=T*_[S+H]+w*_[M+H]+G*_[x+H]+N*_[E+H];return g}}class pl extends as{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=a*y,M=x-y,S=(p-h)/(m-h),E=1-S;for(let v=0;v!==y;++v)g[v]=_[M+v]*E+_[x+v]*S;return g}}class ml extends as{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a){return this.copySampleValue_(a-1)}}class Sn{constructor(a,h,p,m){if(a===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(h===void 0||h.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a,this.times=Fs(h,this.TimeBufferType),this.values=Fs(p,this.ValueBufferType),this.setInterpolation(m||this.DefaultInterpolation)}static toJSON(a){let h=a.constructor,p;if(h.toJSON!==this.toJSON)p=h.toJSON(a);else{p={name:a.name,times:Fs(a.times,Array),values:Fs(a.values,Array)};let m=a.getInterpolation();if(m!==a.DefaultInterpolation)p.interpolation=m}return p.type=a.ValueTypeName,p}InterpolantFactoryMethodDiscrete(a){return new ml(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodLinear(a){return new pl(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodSmooth(a){return new fl(this.times,this.values,this.getValueSize(),a)}setInterpolation(a){let h;switch(a){case 2300:h=this.InterpolantFactoryMethodDiscrete;break;case 2301:h=this.InterpolantFactoryMethodLinear;break;case 2302:h=this.InterpolantFactoryMethodSmooth;break}if(h===void 0){let p="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(p);return console.warn("THREE.KeyframeTrack:",p),this}return this.createInterpolant=h,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(a){if(a!==0){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]+=a}return this}scale(a){if(a!==1){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]*=a}return this}trim(a,h){let p=this.times,m=p.length,g=0,_=m-1;while(g!==m&&p[g]<a)++g;while(_!==-1&&p[_]>h)--_;if(++_,g!==0||_!==m){if(g>=_)_=Math.max(_,1),g=_-1;let y=this.getValueSize();this.times=p.slice(g,_),this.values=this.values.slice(g*y,_*y)}return this}validate(){let a=!0,h=this.getValueSize();if(h-Math.floor(h)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1;let p=this.times,m=this.values,g=p.length;if(g===0)console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1;let _=null;for(let y=0;y!==g;y++){let x=p[y];if(typeof x==="number"&&isNaN(x)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,y,x),a=!1;break}if(_!==null&&_>x){console.error("THREE.KeyframeTrack: Out of order keys.",this,y,x,_),a=!1;break}_=x}if(m!==void 0){if(xp(m))for(let y=0,x=m.length;y!==x;++y){let M=m[y];if(isNaN(M)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,y,M),a=!1;break}}}return a}optimize(){let a=this.times.slice(),h=this.values.slice(),p=this.getValueSize(),m=this.getInterpolation()===2302,g=a.length-1,_=1;for(let y=1;y<g;++y){let x=!1,M=a[y],S=a[y+1];if(M!==S&&(y!==1||M!==a[0]))if(!m){let E=y*p,v=E-p,b=E+p;for(let A=0;A!==p;++A){let C=h[E+A];if(C!==h[v+A]||C!==h[b+A]){x=!0;break}}}else x=!0;if(x){if(y!==_){a[_]=a[y];let E=y*p,v=_*p;for(let b=0;b!==p;++b)h[v+b]=h[E+b]}++_}}if(g>0){a[_]=a[g];for(let y=g*p,x=_*p,M=0;M!==p;++M)h[x+M]=h[y+M];++_}if(_!==a.length)this.times=a.slice(0,_),this.values=h.slice(0,_*p);else this.times=a,this.values=h;return this}clone(){let a=this.times.slice(),h=this.values.slice(),m=new this.constructor(this.name,a,h);return m.createInterpolant=this.createInterpolant,m}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=2301;class Ri extends Sn{constructor(a,h,p){super(a,h,p)}}Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=2300;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;class gl extends Sn{}gl.prototype.ValueTypeName="color";class _l extends Sn{}_l.prototype.ValueTypeName="number";class xl extends as{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=(p-h)/(m-h),M=a*y;for(let S=M+y;M!==S;M+=4)Mn.slerpFlat(g,0,_,M-y,_,M,x);return g}}class ca extends Sn{InterpolantFactoryMethodLinear(a){return new xl(this.times,this.values,this.getValueSize(),a)}}ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;class Ci extends Sn{constructor(a,h,p){super(a,h,p)}}Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=2300;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class yl extends Sn{}yl.prototype.ValueTypeName="vector";class vl{constructor(a,h,p){let m=this,g=!1,_=0,y=0,x=void 0,M=[];this.onStart=void 0,this.onLoad=a,this.onProgress=h,this.onError=p,this.itemStart=function(S){if(y++,g===!1){if(m.onStart!==void 0)m.onStart(S,_,y)}g=!0},this.itemEnd=function(S){if(_++,m.onProgress!==void 0)m.onProgress(S,_,y);if(_===y){if(g=!1,m.onLoad!==void 0)m.onLoad()}},this.itemError=function(S){if(m.onError!==void 0)m.onError(S)},this.resolveURL=function(S){if(x)return x(S);return S},this.setURLModifier=function(S){return x=S,this},this.addHandler=function(S,E){return M.push(S,E),this},this.removeHandler=function(S){let E=M.indexOf(S);if(E!==-1)M.splice(E,2);return this},this.getHandler=function(S){for(let E=0,v=M.length;E<v;E+=2){let b=M[E],A=M[E+1];if(b.global)b.lastIndex=0;if(b.test(S))return A}return null}}}var yp=new vl;class Ml{constructor(a){this.manager=a!==void 0?a:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(a,h){let p=this;return new Promise(function(m,g){p.load(a,m,h,g)})}parse(){}setCrossOrigin(a){return this.crossOrigin=a,this}setWithCredentials(a){return this.withCredentials=a,this}setPath(a){return this.path=a,this}setResourcePath(a){return this.resourcePath=a,this}setRequestHeader(a){return this.requestHeader=a,this}}Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";class js extends Be{constructor(a,h=1){super();this.isLight=!0,this.type="Light",this.color=new pe(a),this.intensity=h}dispose(){}copy(a,h){return super.copy(a,h),this.color.copy(a.color),this.intensity=a.intensity,this}toJSON(a){let h=super.toJSON(a);if(h.object.color=this.color.getHex(),h.object.intensity=this.intensity,this.groundColor!==void 0)h.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)h.object.distance=this.distance;if(this.angle!==void 0)h.object.angle=this.angle;if(this.decay!==void 0)h.object.decay=this.decay;if(this.penumbra!==void 0)h.object.penumbra=this.penumbra;if(this.shadow!==void 0)h.object.shadow=this.shadow.toJSON();if(this.target!==void 0)h.object.target=this.target.uuid;return h}}class ha extends js{constructor(a,h,p){super(a,p);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(h)}copy(a,h){return super.copy(a,h),this.groundColor.copy(a.groundColor),this}}var Ur=new Ae,To=new X,wo=new X;class ua{constructor(a){this.camera=a,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(a){let h=this.camera,p=this.matrix;To.setFromMatrixPosition(a.matrixWorld),h.position.copy(To),wo.setFromMatrixPosition(a.target.matrixWorld),h.lookAt(wo),h.updateMatrixWorld(),Ur.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),p.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),p.multiply(Ur)}getViewport(a){return this._viewports[a]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(a){return this.camera=a.camera.clone(),this.intensity=a.intensity,this.bias=a.bias,this.radius=a.radius,this.mapSize.copy(a.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let a={};if(this.intensity!==1)a.intensity=this.intensity;if(this.bias!==0)a.bias=this.bias;if(this.normalBias!==0)a.normalBias=this.normalBias;if(this.radius!==1)a.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)a.mapSize=this.mapSize.toArray();return a.camera=this.camera.toJSON(!1).object,delete a.camera.matrix,a}}var Ao=new Ae,ki=new X,Nr=new X;class Sl extends ua{constructor(){super(new Ve(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(a,h=0){let p=this.camera,m=this.matrix,g=a.distance||p.far;if(g!==p.far)p.far=g,p.updateProjectionMatrix();ki.setFromMatrixPosition(a.matrixWorld),p.position.copy(ki),Nr.copy(p.position),Nr.add(this._cubeDirections[h]),p.up.copy(this._cubeUps[h]),p.lookAt(Nr),p.updateMatrixWorld(),m.makeTranslation(-ki.x,-ki.y,-ki.z),Ao.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao)}}class da extends js{constructor(a,h,p=0,m=2){super(a,h);this.isPointLight=!0,this.type="PointLight",this.distance=p,this.decay=m,this.shadow=new Sl}get power(){return this.intensity*4*Math.PI}set power(a){this.intensity=a/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(a,h){return super.copy(a,h),this.distance=a.distance,this.decay=a.decay,this.shadow=a.shadow.clone(),this}}class El extends ua{constructor(){super(new ns(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class fa extends js{constructor(a,h){super(a,h);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new El}dispose(){this.shadow.dispose()}copy(a){return super.copy(a),this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}var pa="\\[\\]\\.:\\/",vp=new RegExp("["+pa+"]","g"),ma="[^"+pa+"]",Mp="[^"+pa.replace("\\.","")+"]",Sp=/((?:WC+[\/:])*)/.source.replace("WC",ma),Ep=/(WCOD+)?/.source.replace("WCOD",Mp),bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ma),Tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ma),wp=new RegExp("^"+Sp+Ep+bp+Tp+"$"),Ap=["material","materials","bones","map"];class bl{constructor(a,h,p){let m=p||ve.parseTrackName(h);this._targetGroup=a,this._bindings=a.subscribe_(h,m)}getValue(a,h){this.bind();let p=this._targetGroup.nCachedObjects_,m=this._bindings[p];if(m!==void 0)m.getValue(a,h)}setValue(a,h){let p=this._bindings;for(let m=this._targetGroup.nCachedObjects_,g=p.length;m!==g;++m)p[m].setValue(a,h)}bind(){let a=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=a.length;h!==p;++h)a[h].bind()}unbind(){let a=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=a.length;h!==p;++h)a[h].unbind()}}class ve{constructor(a,h,p){this.path=h,this.parsedPath=p||ve.parseTrackName(h),this.node=ve.findNode(a,this.parsedPath.nodeName),this.rootNode=a,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(a,h,p){if(!(a&&a.isAnimationObjectGroup))return new ve(a,h,p);else return new ve.Composite(a,h,p)}static sanitizeNodeName(a){return a.replace(/\s/g,"_").replace(vp,"")}static parseTrackName(a){let h=wp.exec(a);if(h===null)throw Error("PropertyBinding: Cannot parse trackName: "+a);let p={nodeName:h[2],objectName:h[3],objectIndex:h[4],propertyName:h[5],propertyIndex:h[6]},m=p.nodeName&&p.nodeName.lastIndexOf(".");if(m!==void 0&&m!==-1){let g=p.nodeName.substring(m+1);if(Ap.indexOf(g)!==-1)p.nodeName=p.nodeName.substring(0,m),p.objectName=g}if(p.propertyName===null||p.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return p}static findNode(a,h){if(h===void 0||h===""||h==="."||h===-1||h===a.name||h===a.uuid)return a;if(a.skeleton){let p=a.skeleton.getBoneByName(h);if(p!==void 0)return p}if(a.children){let p=function(g){for(let _=0;_<g.length;_++){let y=g[_];if(y.name===h||y.uuid===h)return y;let x=p(y.children);if(x)return x}return null},m=p(a.children);if(m)return m}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(a,h){a[h]=this.targetObject[this.propertyName]}_getValue_array(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)a[h++]=p[m]}_getValue_arrayElement(a,h){a[h]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(a,h){this.resolvedProperty.toArray(a,h)}_setValue_direct(a,h){this.targetObject[this.propertyName]=a[h]}_setValue_direct_setNeedsUpdate(a,h){this.targetObject[this.propertyName]=a[h],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(a,h){this.targetObject[this.propertyName]=a[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++]}_setValue_array_setNeedsUpdate(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(a,h){this.resolvedProperty[this.propertyIndex]=a[h]}_setValue_arrayElement_setNeedsUpdate(a,h){this.resolvedProperty[this.propertyIndex]=a[h],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(a,h){this.resolvedProperty[this.propertyIndex]=a[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(a,h){this.resolvedProperty.fromArray(a,h)}_setValue_fromArray_setNeedsUpdate(a,h){this.resolvedProperty.fromArray(a,h),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(a,h){this.resolvedProperty.fromArray(a,h),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(a,h){this.bind(),this.getValue(a,h)}_setValue_unbound(a,h){this.bind(),this.setValue(a,h)}bind(){let a=this.node,h=this.parsedPath,{objectName:p,propertyName:m,propertyIndex:g}=h;if(!a)a=ve.findNode(this.rootNode,h.nodeName),this.node=a;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!a){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(p){let M=h.objectIndex;switch(p){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(let S=0;S<a.length;S++)if(a[S].name===M){M=S;break}break;case"map":if("map"in a){a=a.map;break}if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}a=a.material.map;break;default:if(a[p]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[p]}if(M!==void 0){if(a[M]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[M]}}let _=a[m];if(_===void 0){let M=h.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+M+"."+m+" but it wasn't found.",a);return}let y=this.Versioning.None;if(this.targetObject=a,a.needsUpdate!==void 0)y=this.Versioning.NeedsUpdate;else if(a.matrixWorldNeedsUpdate!==void 0)y=this.Versioning.MatrixWorldNeedsUpdate;let x=this.BindingType.Direct;if(g!==void 0){if(m==="morphTargetInfluences"){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(a.morphTargetDictionary[g]!==void 0)g=a.morphTargetDictionary[g]}x=this.BindingType.ArrayElement,this.resolvedProperty=_,this.propertyIndex=g}else if(_.fromArray!==void 0&&_.toArray!==void 0)x=this.BindingType.HasFromToArray,this.resolvedProperty=_;else if(Array.isArray(_))x=this.BindingType.EntireArray,this.resolvedProperty=_;else this.propertyName=m;this.getValue=this.GetterByBindingType[x],this.setValue=this.SetterByBindingTypeAndVersioning[x][y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ve.Composite=bl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $p=new Float32Array(1);var Ro=new Ae;class ga{constructor(a,h,p=0,m=1/0){this.ray=new Ti(a,h),this.near=p,this.far=m,this.camera=null,this.layers=new ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(a,h){this.ray.set(a,h)}setFromCamera(a,h){if(h.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(h.matrixWorld),this.ray.direction.set(a.x,a.y,0.5).unproject(h).sub(this.ray.origin).normalize(),this.camera=h;else if(h.isOrthographicCamera)this.ray.origin.set(a.x,a.y,(h.near+h.far)/(h.near-h.far)).unproject(h),this.ray.direction.set(0,0,-1).transformDirection(h.matrixWorld),this.camera=h;else console.error("THREE.Raycaster: Unsupported camera type: "+h.type)}setFromXRController(a){return Ro.identity().extractRotation(a.matrixWorld),this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ro),this}intersectObject(a,h=!0,p=[]){return kr(a,this,p,h),p.sort(Co),p}intersectObjects(a,h=!0,p=[]){for(let m=0,g=a.length;m<g;m++)kr(a[m],this,p,h);return p.sort(Co),p}}function Co(a,h){return a.distance-h.distance}function kr(a,h,p,m){let g=!0;if(a.layers.test(h.layers)){if(a.raycast(h,p)===!1)g=!1}if(g===!0&&m===!0){let _=a.children;for(let y=0,x=_.length;y<x;y++)kr(_[y],h,p,!0)}}class Qs{constructor(a=1,h=0,p=0){return this.radius=a,this.phi=h,this.theta=p,this}set(a,h,p){return this.radius=a,this.phi=h,this.theta=p,this}copy(a){return this.radius=a.radius,this.phi=a.phi,this.theta=a.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z)}setFromCartesianCoords(a,h,p){if(this.radius=Math.sqrt(a*a+h*h+p*p),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(a,p),this.phi=Math.acos(Le(h/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class _a extends Wn{constructor(a,h=null){super();this.object=a,this.domElement=h,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="170";var Tl={type:"change"},ya={type:"start"},Al={type:"end"},tr=new Ti,wl=new _n,Cp=Math.cos(70*Lo.DEG2RAD),Fe=new X,Ze=2*Math.PI,Ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xa=0.000001;class er extends _a{constructor(a,h=null){super(a,h);if(this.state=Ee.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dn.ROTATE,MIDDLE:dn.DOLLY,RIGHT:dn.PAN},this.touches={ONE:vn.ROTATE,TWO:vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Mn,this._lastTargetPosition=new X,this._quat=new Mn().setFromUnitVectors(a.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qs,this._sphericalDelta=new Qs,this._scale=1,this._panOffset=new X,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new X,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ip.bind(this),this._onPointerDown=Pp.bind(this),this._onPointerUp=Dp.bind(this),this._onContextMenu=zp.bind(this),this._onMouseWheel=Np.bind(this),this._onKeyDown=Fp.bind(this),this._onTouchStart=Op.bind(this),this._onTouchMove=Bp.bind(this),this._onMouseDown=Lp.bind(this),this._onMouseMove=Up.bind(this),this._interceptControlDown=Hp.bind(this),this._interceptControlUp=kp.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(a){a.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=a}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tl),this.update(),this.state=Ee.NONE}update(a=null){let h=this.object.position;if(Fe.copy(h).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===Ee.NONE)this._rotateLeft(this._getAutoRotationAngle(a));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let p=this.minAzimuthAngle,m=this.maxAzimuthAngle;if(isFinite(p)&&isFinite(m)){if(p<-Math.PI)p+=Ze;else if(p>Math.PI)p-=Ze;if(m<-Math.PI)m+=Ze;else if(m>Math.PI)m-=Ze;if(p<=m)this._spherical.theta=Math.max(p,Math.min(m,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(p+m)/2?Math.max(p,this._spherical.theta):Math.min(m,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let g=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let _=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),g=_!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),h.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let _=null;if(this.object.isPerspectiveCamera){let y=Fe.length();_=this._clampDistance(y*this._scale);let x=y-_;this.object.position.addScaledVector(this._dollyDirection,x),this.object.updateMatrixWorld(),g=!!x}else if(this.object.isOrthographicCamera){let y=new X(this._mouse.x,this._mouse.y,0);y.unproject(this.object);let x=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),g=x!==this.object.zoom;let M=new X(this._mouse.x,this._mouse.y,0);M.unproject(this.object),this.object.position.sub(M).add(y),this.object.updateMatrixWorld(),_=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(_!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(_).add(this.object.position);else if(tr.origin.copy(this.object.position),tr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tr.direction))<Cp)this.object.lookAt(this.target);else wl.setFromNormalAndCoplanarPoint(this.object.up,this.target),tr.intersectPlane(wl,this.target)}else if(this.object.isOrthographicCamera){let _=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),_!==this.object.zoom)this.object.updateProjectionMatrix(),g=!0}if(this._scale=1,this._performCursorZoom=!1,g||this._lastPosition.distanceToSquared(this.object.position)>xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xa||this._lastTargetPosition.distanceToSquared(this.target)>xa)return this.dispatchEvent(Tl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(a){if(a!==null)return Ze/60*this.autoRotateSpeed*a;else return Ze/60/60*this.autoRotateSpeed}_getZoomScale(a){let h=Math.abs(a*0.01);return Math.pow(0.95,this.zoomSpeed*h)}_rotateLeft(a){this._sphericalDelta.theta-=a}_rotateUp(a){this._sphericalDelta.phi-=a}_panLeft(a,h){Fe.setFromMatrixColumn(h,0),Fe.multiplyScalar(-a),this._panOffset.add(Fe)}_panUp(a,h){if(this.screenSpacePanning===!0)Fe.setFromMatrixColumn(h,1);else Fe.setFromMatrixColumn(h,0),Fe.crossVectors(this.object.up,Fe);Fe.multiplyScalar(a),this._panOffset.add(Fe)}_pan(a,h){let p=this.domElement;if(this.object.isPerspectiveCamera){let m=this.object.position;Fe.copy(m).sub(this.target);let g=Fe.length();g*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*a*g/p.clientHeight,this.object.matrix),this._panUp(2*h*g/p.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(a*(this.object.right-this.object.left)/this.object.zoom/p.clientWidth,this.object.matrix),this._panUp(h*(this.object.top-this.object.bottom)/this.object.zoom/p.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(a){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=a;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(a){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=a;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(a,h){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let p=this.domElement.getBoundingClientRect(),m=a-p.left,g=h-p.top,{width:_,height:y}=p;this._mouse.x=m/_*2-1,this._mouse.y=-(g/y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(a){return Math.max(this.minDistance,Math.min(this.maxDistance,a))}_handleMouseDownRotate(a){this._rotateStart.set(a.clientX,a.clientY)}_handleMouseDownDolly(a){this._updateZoomParameters(a.clientX,a.clientX),this._dollyStart.set(a.clientX,a.clientY)}_handleMouseDownPan(a){this._panStart.set(a.clientX,a.clientY)}_handleMouseMoveRotate(a){this._rotateEnd.set(a.clientX,a.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/h.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(a){if(this._dollyEnd.set(a.clientX,a.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(a){this._panEnd.set(a.clientX,a.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(a){if(this._updateZoomParameters(a.clientX,a.clientY),a.deltaY<0)this._dollyIn(this._getZoomScale(a.deltaY));else if(a.deltaY>0)this._dollyOut(this._getZoomScale(a.deltaY));this.update()}_handleKeyDown(a){let h=!1;switch(a.code){case this.keys.UP:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateUp(Ze*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,this.keyPanSpeed);h=!0;break;case this.keys.BOTTOM:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateUp(-Ze*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,-this.keyPanSpeed);h=!0;break;case this.keys.LEFT:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateLeft(Ze*this.rotateSpeed/this.domElement.clientHeight);else this._pan(this.keyPanSpeed,0);h=!0;break;case this.keys.RIGHT:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateLeft(-Ze*this.rotateSpeed/this.domElement.clientHeight);else this._pan(-this.keyPanSpeed,0);h=!0;break}if(h)a.preventDefault(),this.update()}_handleTouchStartRotate(a){if(this._pointers.length===1)this._rotateStart.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._rotateStart.set(p,m)}}_handleTouchStartPan(a){if(this._pointers.length===1)this._panStart.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._panStart.set(p,m)}}_handleTouchStartDolly(a){let h=this._getSecondPointerPosition(a),p=a.pageX-h.x,m=a.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyStart.set(0,g)}_handleTouchStartDollyPan(a){if(this.enableZoom)this._handleTouchStartDolly(a);if(this.enablePan)this._handleTouchStartPan(a)}_handleTouchStartDollyRotate(a){if(this.enableZoom)this._handleTouchStartDolly(a);if(this.enableRotate)this._handleTouchStartRotate(a)}_handleTouchMoveRotate(a){if(this._pointers.length==1)this._rotateEnd.set(a.pageX,a.pageY);else{let p=this._getSecondPointerPosition(a),m=0.5*(a.pageX+p.x),g=0.5*(a.pageY+p.y);this._rotateEnd.set(m,g)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/h.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(a){if(this._pointers.length===1)this._panEnd.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._panEnd.set(p,m)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(a){let h=this._getSecondPointerPosition(a),p=a.pageX-h.x,m=a.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyEnd.set(0,g),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let _=(a.pageX+h.x)*0.5,y=(a.pageY+h.y)*0.5;this._updateZoomParameters(_,y)}_handleTouchMoveDollyPan(a){if(this.enableZoom)this._handleTouchMoveDolly(a);if(this.enablePan)this._handleTouchMovePan(a)}_handleTouchMoveDollyRotate(a){if(this.enableZoom)this._handleTouchMoveDolly(a);if(this.enableRotate)this._handleTouchMoveRotate(a)}_addPointer(a){this._pointers.push(a.pointerId)}_removePointer(a){delete this._pointerPositions[a.pointerId];for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==a.pointerId){this._pointers.splice(h,1);return}}_isTrackingPointer(a){for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==a.pointerId)return!0;return!1}_trackPointer(a){let h=this._pointerPositions[a.pointerId];if(h===void 0)h=new St,this._pointerPositions[a.pointerId]=h;h.set(a.pageX,a.pageY)}_getSecondPointerPosition(a){let h=a.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[h]}_customWheelEvent(a){let h=a.deltaMode,p={clientX:a.clientX,clientY:a.clientY,deltaY:a.deltaY};switch(h){case 1:p.deltaY*=16;break;case 2:p.deltaY*=100;break}if(a.ctrlKey&&!this._controlActive)p.deltaY*=10;return p}}function Pp(a){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(a))return;if(this._addPointer(a),a.pointerType==="touch")this._onTouchStart(a);else this._onMouseDown(a)}function Ip(a){if(this.enabled===!1)return;if(a.pointerType==="touch")this._onTouchMove(a);else this._onMouseMove(a)}function Dp(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Al),this.state=Ee.NONE;break;case 1:let h=this._pointers[0],p=this._pointerPositions[h];this._onTouchStart({pointerId:h,pageX:p.x,pageY:p.y});break}}function Lp(a){let h;switch(a.button){case 0:h=this.mouseButtons.LEFT;break;case 1:h=this.mouseButtons.MIDDLE;break;case 2:h=this.mouseButtons.RIGHT;break;default:h=-1}switch(h){case dn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=Ee.DOLLY;break;case dn.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Ee.ROTATE}break;case dn.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Ee.PAN}break;default:this.state=Ee.NONE}if(this.state!==Ee.NONE)this.dispatchEvent(ya)}function Up(a){switch(this.state){case Ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case Ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case Ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function Np(a){if(this.enabled===!1||this.enableZoom===!1||this.state!==Ee.NONE)return;a.preventDefault(),this.dispatchEvent(ya),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Al)}function Fp(a){if(this.enabled===!1||this.enablePan===!1)return;this._handleKeyDown(a)}function Op(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=Ee.TOUCH_ROTATE;break;case vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=Ee.TOUCH_PAN;break;default:this.state=Ee.NONE}break;case 2:switch(this.touches.TWO){case vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=Ee.TOUCH_DOLLY_PAN;break;case vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=Ee.TOUCH_DOLLY_ROTATE;break;default:this.state=Ee.NONE}break;default:this.state=Ee.NONE}if(this.state!==Ee.NONE)this.dispatchEvent(ya)}function Bp(a){switch(this._trackPointer(a),this.state){case Ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case Ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case Ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case Ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=Ee.NONE}}function zp(a){if(this.enabled===!1)return;a.preventDefault()}function Hp(a){if(a.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function kp(a){if(a.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var os=new X;function rn(a,h,p,m,g,_){let y=2*Math.PI*g/4,x=Math.max(_-2*g,0),M=Math.PI/4;os.copy(h),os[m]=0,os.normalize();let S=0.5*y/(y+x),E=1-os.angleTo(a)/M;if(Math.sign(os[p])===1)return E*S;else return x/(y+x)+S+S*(1-E)}class va extends ke{constructor(a=1,h=1,p=1,m=2,g=0.1){m=m*2+1,g=Math.min(a/2,h/2,p/2,g);super(1,1,1,m,m,m);if(m===1)return;let _=this.toNonIndexed();this.index=null,this.attributes.position=_.attributes.position,this.attributes.normal=_.attributes.normal,this.attributes.uv=_.attributes.uv;let y=new X,x=new X,M=new X(a,h,p).divideScalar(2).subScalar(g),S=this.attributes.position.array,E=this.attributes.normal.array,v=this.attributes.uv.array,b=S.length/6,A=new X,C=0.5/m;for(let P=0,T=0;P<S.length;P+=3,T+=2)switch(y.fromArray(S,P),x.copy(y),x.x-=Math.sign(x.x)*C,x.y-=Math.sign(x.y)*C,x.z-=Math.sign(x.z)*C,x.normalize(),S[P+0]=M.x*Math.sign(y.x)+x.x*g,S[P+1]=M.y*Math.sign(y.y)+x.y*g,S[P+2]=M.z*Math.sign(y.z)+x.z*g,E[P+0]=x.x,E[P+1]=x.y,E[P+2]=x.z,Math.floor(P/b)){case 0:A.set(1,0,0),v[T+0]=rn(A,x,"z","y",g,p),v[T+1]=1-rn(A,x,"y","z",g,h);break;case 1:A.set(-1,0,0),v[T+0]=1-rn(A,x,"z","y",g,p),v[T+1]=1-rn(A,x,"y","z",g,h);break;case 2:A.set(0,1,0),v[T+0]=1-rn(A,x,"x","z",g,a),v[T+1]=rn(A,x,"z","x",g,p);break;case 3:A.set(0,-1,0),v[T+0]=1-rn(A,x,"x","z",g,a),v[T+1]=1-rn(A,x,"z","x",g,p);break;case 4:A.set(0,0,1),v[T+0]=1-rn(A,x,"x","y",g,a),v[T+1]=1-rn(A,x,"y","x",g,h);break;case 5:A.set(0,0,-1),v[T+0]=rn(A,x,"x","y",g,a),v[T+1]=1-rn(A,x,"y","x",g,h);break}}}class Ma extends is{constructor(){super();let a=new ke;a.deleteAttribute("uv");let h=new Yn({side:Io}),p=new Yn,m=new da(16777215,900,28,2);m.position.set(0.418,16.199,0.3),this.add(m);let g=new he(a,h);g.position.set(-0.757,13.219,0.717),g.scale.set(31.713,28.305,28.591),this.add(g);let _=new he(a,p);_.position.set(-10.906,2.009,1.846),_.rotation.set(0,-0.195,0),_.scale.set(2.328,7.905,4.651),this.add(_);let y=new he(a,p);y.position.set(-5.607,-0.754,-0.758),y.rotation.set(0,0.994,0),y.scale.set(1.97,1.534,3.955),this.add(y);let x=new he(a,p);x.position.set(6.167,0.857,7.803),x.rotation.set(0,0.561,0),x.scale.set(3.927,6.285,3.687),this.add(x);let M=new he(a,p);M.position.set(-2.017,0.018,6.124),M.rotation.set(0,0.333,0),M.scale.set(2.002,4.566,2.064),this.add(M);let S=new he(a,p);S.position.set(2.291,-0.756,-2.621),S.rotation.set(0,-0.286,0),S.scale.set(1.546,1.552,1.496),this.add(S);let E=new he(a,p);E.position.set(-2.193,-0.369,-5.547),E.rotation.set(0,0.516,0),E.scale.set(3.875,3.487,2.986),this.add(E);let v=new he(a,Pi(50));v.position.set(-16.116,14.37,8.208),v.scale.set(0.1,2.428,2.739),this.add(v);let b=new he(a,Pi(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(0.1,2.425,2.751),this.add(b);let A=new he(a,Pi(17));A.position.set(14.904,12.198,-1.832),A.scale.set(0.15,4.265,6.331),this.add(A);let C=new he(a,Pi(43));C.position.set(-0.462,8.89,14.52),C.scale.set(4.38,5.441,0.088),this.add(C);let P=new he(a,Pi(20));P.position.set(3.235,11.486,-12.541),P.scale.set(2.5,2,0.1),this.add(P);let T=new he(a,Pi(100));T.position.set(0,20,0),T.scale.set(1,0.1,1),this.add(T)}dispose(){let a=new Set;this.traverse((h)=>{if(h.isMesh)a.add(h.geometry),a.add(h.material)});for(let h of a)h.dispose()}}function Pi(a){let h=new es;return h.color.setScalar(a),h}var Dn=2.5,Rl=1,Gp=0.9,Ii=0.13,Qe=new X(e(189),0,t(183));function pn(a,h,p,m=1){let g=document.createElement("canvas");g.width=a,g.height=h,p(g.getContext("2d"));let _=new ta(g);if(_.colorSpace=Gr,_.anisotropy=4,m!==1)_.wrapS=_.wrapT=Qi,_.repeat.set(m,m);return _}var Ea=(a,h,p,m,g,_=9000)=>{a.fillStyle=m,a.fillRect(0,0,h,p);for(let y=0;y<_;y++){let x=(Math.random()-0.5)*g;a.fillStyle=x>0?`rgba(255,255,255,${x})`:`rgba(0,0,0,${-x})`,a.fillRect(Math.random()*h,Math.random()*p,2,2)}},Cl=()=>pn(512,512,(a)=>{for(let h=0;h<2;h++)for(let p=0;p<2;p++){let m=228+Math.floor(Math.random()*8);a.fillStyle=`rgb(${m+8},${m+3},${m-8})`,a.fillRect(h*256,p*256,256,256);for(let g=0;g<2500;g++)a.fillStyle=`rgba(${Math.random()>0.5?"255,255,255":"150,130,100"},.06)`,a.fillRect(h*256+Math.random()*256,p*256+Math.random()*256,3,3)}a.fillStyle="#cfc6b6";for(let h=0;h<=2;h++)a.fillRect(h*256-2,0,4,512),a.fillRect(0,h*256-2,512,4)}),nr=(a,h=0.14)=>pn(256,256,(p)=>Ea(p,256,256,a,h,6000),3),Wp=(a,h)=>pn(256,256,(p)=>{Ea(p,256,256,a,0.2,14000),p.strokeStyle=h,p.lineWidth=10,p.strokeRect(12,12,232,232)}),Vp=()=>pn(256,512,(a)=>{Ea(a,256,512,"#2b3550",0.25,12000),a.strokeStyle="#c9a86a",a.lineWidth=6,a.strokeRect(14,14,228,484),a.fillStyle="#c9a86a88";for(let h=60;h<480;h+=70)a.beginPath(),a.ellipse(128,h,50,22,0,0,7),a.fill()}),Pl=()=>pn(256,256,(a)=>{a.fillStyle="#f7f7f5",a.fillRect(0,0,256,256),a.fillStyle="#d9d9d6";for(let h=0;h<=4;h++)a.fillRect(h*64-1,0,2,256),a.fillRect(0,h*128-1,256,2)}),Xp=()=>pn(256,256,(a)=>{a.fillStyle="#e6e2df",a.fillRect(0,0,256,256);let h=22;for(let p=0;p<300;p+=h*1.5)for(let m=0;m<300;m+=h*1.732){let g=Math.round(p/(h*1.5))%2*h*0.866;a.beginPath();for(let y=0;y<6;y++){let x=Math.PI/3*y+Math.PI/6;a.lineTo(m+g+h*Math.cos(x),p+h*Math.sin(x))}a.closePath();let _=205+Math.floor(Math.random()*40);a.fillStyle=`rgb(${_},${_-3},${_-2})`,a.fill(),a.strokeStyle="#f5f3f0",a.lineWidth=2,a.stroke()}}),qp=()=>pn(256,360,(a)=>{a.fillStyle="#121216",a.fillRect(0,0,256,360),a.fillStyle="#9b2b33",a.beginPath(),a.arc(128,105,78,0,7),a.fill(),a.fillStyle="#121216",a.beginPath(),a.arc(128,105,58,0,7),a.fill(),a.fillStyle="#d8d4cf",a.beginPath(),a.ellipse(128,110,28,36,0,0,7),a.fill(),a.fillStyle="#2d4f6d",a.fillRect(70,150,116,200),a.fillStyle="#e8e4dc";for(let h=170;h<330;h+=18)a.fillRect(98,h,60,6);a.fillStyle="#3c8b3a",a.fillRect(122,250,12,12)}),Yp=()=>pn(256,340,(a)=>{let h=["#d94b3d","#f2b632","#3a7bd5","#43a047","#8e44ad","#f06292"];a.fillStyle="#e8d8b8",a.fillRect(0,0,256,340);for(let p=0;p<60;p++)a.fillStyle=h[p%6],a.beginPath(),a.arc(Math.random()*256,Math.random()*340,6+Math.random()*20,0,7),a.fill();a.fillStyle="#c69c6d",a.beginPath(),a.ellipse(128,200,50,100,0,0,7),a.fill(),a.fillStyle="#8a5a3a",a.beginPath(),a.arc(128,95,55,0,7),a.fill()}),Zp=()=>pn(200,260,(a)=>{a.fillStyle="#f5d33b",a.fillRect(0,0,200,260);let h=["#e84a5f","#2a9d8f","#f4a261","#6c63ff","#ffffff"];for(let p=0;p<5;p++)a.fillStyle=h[p],a.beginPath(),a.moveTo(100,90),a.arc(100,90,70,Math.PI+p*0.63,Math.PI+(p+1)*0.63),a.fill();a.fillStyle="#f472b6",a.beginPath(),a.arc(140,140,28,0,7),a.fill(),a.fillStyle="#1f2937",a.fillRect(20,200,160,40)}),Jp=()=>pn(256,160,(a)=>{a.fillStyle="#fbfbfb",a.fillRect(0,0,256,160),a.font="bold 26px sans-serif",a.fillStyle="#222",a.fillText("Bim",120,34),a.fillStyle="#d23",a.fillText("Flow",168,34),a.strokeStyle="#333",a.lineWidth=2;for(let h=50;h<150;h+=14)a.beginPath(),a.moveTo(16,h),a.lineTo(66+Math.random()*50,h),a.stroke();a.strokeStyle="#d23",a.beginPath(),a.arc(180,80,18,0,7),a.stroke()}),Sa=(a)=>pn(64,32,(h)=>{let p=h.createLinearGradient(0,0,64,32);p.addColorStop(0,a),p.addColorStop(1,"#05060a"),h.fillStyle=p,h.fillRect(0,0,64,32)});function om(a){let h=new jr({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(devicePixelRatio,1.75)),h.shadowMap.enabled=!0,h.shadowMap.type=Po,h.shadowMap.autoUpdate=!1,h.outputColorSpace=Gr,h.toneMapping=Do,h.toneMappingExposure=1.05,a.appendChild(h.domElement);let p=new is,m=new Ji(h);p.environment=m.fromScene(new Ma,0.04).texture,p.environmentIntensity=0.55;let g=new Ve(32,1,0.1,120),_=new ns(-5,5,5,-5,0.1,100),y=g,x=new er(g,h.domElement);x.enableDamping=!0,x.maxPolarAngle=1.35,x.minDistance=2.5,x.maxDistance=30,x.screenSpacePanning=!0;let M=new er(_,h.domElement);M.enableRotate=!1,M.enableDamping=!0,M.screenSpacePanning=!0,M.minZoom=0.6,M.maxZoom=6,M.enabled=!1,M.mouseButtons={LEFT:dn.PAN,MIDDLE:dn.DOLLY,RIGHT:dn.PAN},M.touches={ONE:vn.PAN,TWO:vn.DOLLY_PAN};let S=x;p.add(new ha(16777215,14274752,1.25));let E=new fa(16773856,2.3);E.position.set(Qe.x-5,12,Qe.z+7),E.castShadow=!0,E.shadow.mapSize.set(2048,2048),Object.assign(E.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:35}),E.shadow.bias=-0.0004,E.shadow.normalBias=0.02,E.shadow.radius=3,E.target.position.copy(Qe),p.add(E,E.target);let v=(R,D={})=>new Yn({color:R,roughness:0.7,...D}),b=v("#f6f5f1",{roughness:0.45}),A=v("#f3f1ec",{roughness:0.85}),C=v("#232428",{roughness:0.4}),P=v("#2a2b2f",{roughness:0.8}),T=v("#c7cace",{metalness:0.8,roughness:0.28}),w=v("#d9dcdf",{metalness:1,roughness:0.12}),G=v("#18191c",{roughness:0.18,metalness:0.1}),N=new la({color:"#cfe6ee",transparent:!0,opacity:0.28,roughness:0.03,metalness:0,clearcoat:1,depthWrite:!1}),H=v("#0f1114",{roughness:0.08,metalness:0.3}),rt=v("#e7eef2",{metalness:1,roughness:0.04}),V=v("#a9774f",{roughness:0.95,map:nr("#a9774f")}),q=v("#956643",{roughness:0.95,map:nr("#956643")}),ct=v("#2f4a69",{roughness:0.6}),O=v("#9b6c45",{roughness:0.6}),B=v("#3f7d34",{roughness:0.7}),j=v("#5f9c40",{roughness:0.7}),at=v("#2c2c2c",{roughness:0.6}),ot=v("#fbfbf9",{roughness:0.15}),ht=v("#b8bcc0",{metalness:0.7,roughness:0.35}),ft=(R)=>R.traverse((D)=>{if(D.isMesh)D.castShadow=!0,D.receiveShadow=!0}),Z=(R,D,F,z,tt=0.015)=>new he(new va(R,D,F,2,Math.min(tt,R/2.1,D/2.1,F/2.1)),z),st=(R,D,F,z)=>new he(new ke(R,D,F),z),Y=(R,D,F,z,tt=24)=>new he(new ss(R,D,F,tt),z),Ct=(R,D,F=14)=>new he(new Ks(R,F,Math.round(F*0.75)),D),U=(R,D,F=0,z=0,tt=0)=>(D.position.set(F,z,tt),R.add(D),D),Wt=(R,D,F)=>new he(new wi(R,D),F),jt=(R,D)=>{if(D==="x")R.rotation.z=Math.PI/2;else R.rotation.x=Math.PI/2;return R},dt=(R,D,F,z,tt=!0,lt=0.12)=>U(R,tt?Y(0.006,0.006,lt,ht,8):jt(Y(0.006,0.006,lt,ht,8),"x"),D,F,z),Et=(R,D,F,z,tt,lt=0,Tt=!0)=>{for(let Ht=1;Ht<tt;Ht++)U(R,st(0.004,F-0.04,0.004,P),-D/2+Ht*D/tt,lt+F/2,z/2+0.001);for(let Ht=0;Ht<tt;Ht++)dt(R,-D/2+(Ht+(Ht%2?0.12:0.88))*D/tt,lt+(Tt?F-0.12:F/2),z/2+0.015,!0,0.1)};function Yt(R,D,F,z=!1){let tt=new Ft;if(!z)U(tt,Y(R*0.32,R*0.25,0.26,at,18),0,0.13,0);let lt=z?0:0.26;for(let Tt=0;Tt<F;Tt++){let Ht=Tt/F*Math.PI*2+Math.random()*0.4,I=(D-lt)*(0.6+Math.random()*0.4);U(tt,Y(0.006,0.006,I,B,5),Math.cos(Ht)*0.05,lt+I/2,Math.sin(Ht)*0.05).rotation.set(Math.sin(Ht)*0.35,0,-Math.cos(Ht)*0.35);for(let it=1;it<=3;it++){let et=U(tt,Ct(0.05,it%2?B:j,8),Math.cos(Ht)*(0.05+it*I*0.1),lt+I*(0.35+it*0.2),Math.sin(Ht)*(0.05+it*I*0.1));et.scale.set(1.4,0.35,0.8),et.rotation.y=-Ht}}return tt}function Gt(R,D,F){let z=new Ft,tt=v(F,{roughness:1,side:ii}),lt=Math.max(3,Math.round(R/0.08));for(let Tt=0;Tt<lt;Tt++){let Ht=U(z,Y(0.045,0.05,D-0.1,tt,8),-R/2+(Tt+0.5)*R/lt,(D-0.1)/2+0.05,Tt%2*0.03);Ht.scale.z=0.6}return U(z,jt(Y(0.012,0.012,R+0.3,ht,8),"x"),0,D,0),z}function Pt(R,D,F,z){let tt=new Ft;U(tt,Z(R,F,D,A,0.01),0,F/2,0),U(tt,st(R-0.02,0.006,0.006,v("#d0cdc6")),0,F-0.45,D/2+0.003),U(tt,st(R-0.02,0.005,0.02,ht),0,F-0.43,D/2+0.01);for(let lt=0;lt<2;lt++){let Tt=-R/2+(lt+0.5)*R/2,Ht=z&&lt===1?rt:b;U(tt,st(R/2-0.03,F-0.55,0.015,Ht),Tt,(F-0.5)/2+0.02,D/2+0.008+lt*0.02),U(tt,st(0.02,F-0.55,0.02,ht),Tt-R/4+0.02,(F-0.5)/2+0.02,D/2+0.012+lt*0.02),U(tt,st(0.02,F-0.55,0.02,ht),Tt+R/4-0.02,(F-0.5)/2+0.02,D/2+0.012+lt*0.02)}return[-1,1].forEach((lt)=>dt(tt,lt*R*0.3,F-0.3,D/2+0.02,!1,0.14)),tt}let te={geladeira(R,D,F){let z=new Ft;U(z,Z(R,F,D,T,0.03),0,F/2,0),U(z,st(R-0.02,0.006,0.006,P),0,1.22,D/2+0.002),U(z,Z(0.025,0.5,0.03,ht,0.01),-R/2+0.07,1.5,D/2+0.02),U(z,Z(0.025,0.5,0.03,ht,0.01),-R/2+0.07,0.95,D/2+0.02),U(z,Z(0.16,0.12,0.02,v("#9aa3ab",{roughness:0.3}),0.01),R/2-0.16,1.45,D/2+0.006),["#3b82f6","#f59e0b","#7c3aed","#ef4444","#111827","#16a34a","#e5e7eb"].forEach((Tt,Ht)=>U(z,st(0.07+Ht%3*0.02,0.05+Ht%2*0.03,0.004,v(Tt)),R*0.05+Ht%3*0.1-0.08,1.32+Math.floor(Ht/3)*0.1,D/2+0.004));let lt=new Ft;return U(lt,Y(0.13,0.15,0.3,C,28),0,0.15,0),U(lt,Z(0.05,0.04,0.12,C,0.01),0,0.2,0.17),U(z,lt,0,F,0),z},"armario-cozinha"(R,D,F){let z=new Ft;if(U(z,Z(R,F-0.04,D-0.03,b,0.01),0,(F-0.04)/2,-0.015),U(z,st(R+0.005,0.04,D+0.01,v("#f4f2ee",{roughness:0.3})),0,F-0.02,0),Et(z,R,F-0.1,D-0.03,Math.max(1,Math.round(R/0.42)),0.06),U(z,st(R,0.06,0.02,P),0,0.03,D/2-0.04),R>1){let tt=new Ft;U(tt,Z(0.3,0.02,0.22,v("#a4744a"),0.01),0,0.01,0),U(tt,Z(0.12,0.08,0.12,v("#e9e3d6"),0.02),-0.05,0.06,0),U(tt,Y(0.04,0.04,0.1,v("#ddd"),14),0.08,0.07,0),U(z,tt,-R*0.25,F,0)}return z},fogao(R,D,F){let z=new Ft;U(z,Z(R,F-0.03,D,T,0.015),0,(F-0.03)/2,0),U(z,st(R-0.01,0.02,D-0.01,H),0,F-0.02,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([lt,Tt])=>{U(z,Y(0.055,0.06,0.025,P),lt*R/4.2,F,Tt*D/5),U(z,Y(0.03,0.03,0.03,v("#555")),lt*R/4.2,F+0.01,Tt*D/5)}),U(z,st(R-0.1,0.4,0.01,H),0,0.42,D/2+0.005),dt(z,0,0.7,D/2+0.03,!1,R-0.12);for(let lt=0;lt<5;lt++)U(z,jt(Y(0.015,0.015,0.02,C,12),"z"),-R/2+0.08+lt*(R-0.16)/4,F-0.09,D/2+0.012);U(z,st(R,0.08,D,P),0,0.04,0);let tt=new Ft;return U(tt,Z(R+0.1,0.1,0.45,T,0.02),0,0,0),U(tt,st(0.2,0.025,0.01,C),R*0.25,-0.02,0.23),U(z,tt,0,1.6,-D/2+0.2),z},microondas(R,D,F){let z=new Ft;return U(z,Z(R,F,D,C,0.015),0,F/2,0),U(z,st(R*0.68,F*0.75,0.005,H),-R*0.12,F/2,D/2+0.003),U(z,st(R*0.18,F*0.7,0.004,v("#333")),R*0.36,F/2,D/2+0.003),z},maquina(R,D,F){let z=new Ft;return U(z,Z(R,F,D,b,0.05),0,F/2,0),U(z,Y(R*0.38,R*0.38,0.02,v("#9aa3ab",{roughness:0.2,transparent:!0,opacity:0.85}),32),0,F+0.005,0.02),U(z,Z(R-0.04,0.12,0.08,v("#e9e9e6"),0.02),0,F+0.06,-D/2+0.05),U(z,st(R*0.3,0.04,0.005,v("#4aa3c7")),0,F+0.07,-D/2+0.092),U(z,Y(0.03,0.03,0.55,v("#8bc34a"),10),R/2+0.05,0.27,D*0.3),z},tanque(R,D,F){let z=new Ft;U(z,Z(R*0.5,F-0.2,D*0.5,b,0.02),0,(F-0.2)/2,-D*0.2),U(z,Z(R,0.2,D,ot,0.04),0,F-0.1,0),U(z,st(R-0.08,0.02,D-0.1,v("#d8dadb",{roughness:0.3})),0,F-0.01,0.02);let tt=new Ft;U(tt,Y(0.012,0.012,0.22,w,10),0,0.11,0),U(tt,jt(Y(0.01,0.01,0.12,w,10),"z"),0,0.22,0.06),U(z,tt,0,F,-D/2+0.04);let lt=new Ft;return[0,0.05,0.1].forEach((Tt,Ht)=>U(lt,Y(0.008,0.008,0.16,v(["#c58b4c","#7c5a3a","#d8b98b"][Ht]),6),Tt,0.08,0)),U(z,lt,-R*0.3,F,-D/2+0.05),z},"varal-teto"(R,D){let F=new Ft;for(let tt=0;tt<6;tt++)U(F,jt(Y(0.008,0.008,R,b,8),"x"),0,0,-D/2+tt*D/5);return[-1,1].forEach((tt)=>U(F,st(0.02,0.02,D,b),tt*R/2,0,0)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([tt,lt])=>U(F,Y(0.002,0.002,0.3,v("#ddd"),4),tt*R/2,0.15,lt*D/2)),[["#e24b75",0.4,0.55,-0.8],["#1f5f45",0.3,0.6,-0.4],["#1d2c54",0.25,0.3,0],["#6b6b6b",0.3,0.35,0.4],["#151515",0.3,0.45,0.8]].forEach(([tt,lt,Tt,Ht])=>{let I=U(F,Wt(lt,Tt,v(tt,{side:ii,roughness:1})),0,-Tt/2,Ht*D/2.2);I.rotation.y=Math.PI/2}),F},balcao(R,D,F){let z=new Ft;U(z,Z(R-0.04,F-0.04,D-0.12,b,0.01),0,(F-0.04)/2,-0.04),U(z,st(R,0.035,D+0.02,G),0,F-0.018,0),Et(z,R-0.04,F-0.14,D-0.12,4,0.06),U(z,st(R,0.4,0.04,v("#ece9e3",{roughness:0.8})),0,F+0.2,D/2-0.02),U(z,st(R,0.03,0.3,G),0,F+0.4,D/2+0.07);let tt=new Ft;U(tt,Y(0.07,0.08,0.12,C,16),0,0.06,0),U(tt,jt(Y(0.008,0.008,0.32,C,6),"z"),0,0.25,0.04),U(tt,Y(0.04,0.07,0.1,C,14),0,0.36,0.18),U(z,tt,-R*0.1,F+0.415,D/2+0.05);let lt=new Ft;U(lt,Z(0.16,0.14,0.16,C,0.03),0,0.07,0),U(lt,Y(0.07,0.06,0.22,v("#cfd6db",{transparent:!0,opacity:0.5}),16),0,0.25,0),U(z,lt,-R*0.3,F+0.415,D/2+0.05);let Tt=new Ft;return U(Tt,Y(0.04,0.04,0.22,v("#3b6b2f",{roughness:0.1}),14),0,0.11,0),U(Tt,Y(0.012,0.025,0.1,v("#3b6b2f",{roughness:0.1}),10),0,0.27,0),U(z,Tt,R*0.35,F+0.415,D/2+0.05),U(z,Z(0.4,0.01,0.25,v("#a7774b",{roughness:0.9}),0.004),R*0.38,F+0.42,D/2+0.1),z},"pia-cozinha"(R,D){let F=new Ft;U(F,st(R*0.8,0.015,D*0.9,T),0,0.002,0),U(F,st(R*0.7,0.01,D*0.75,v("#8f9499",{metalness:0.8,roughness:0.3})),0,0.009,0),U(F,Y(0.015,0.018,0.28,w,12),R*0.3,0.14,-D*0.3);let z=U(F,new he(new qn(0.07,0.011,8,16,Math.PI),w),R*0.3,0.28,-D*0.3+0.07);z.rotation.y=Math.PI/2;let tt=new Ft;return U(tt,Z(0.36,0.02,0.26,w,0.005),0,0.01,0),[0,1,2].forEach((lt)=>U(tt,Y(0.09,0.09,0.01,ot,20),-0.1+lt*0.1,0.1,0).rotation.x=Math.PI/2),U(tt,Y(0.035,0.035,0.2,v("#d94b8a"),12),0.1,0.12,0.05),U(F,tt,-R*0.2,0.02,-D*0.2),F},filtro(R,D,F){let z=new Ft;return U(z,Y(R/2.4,R/2,F*0.55,v("#8a5236",{roughness:0.9}),20),0,F*0.275,0),U(z,Y(R/2.4,R/2.4,F*0.45,v("#6b6f73",{transparent:!0,opacity:0.7,roughness:0.2}),20),0,F*0.775,0),U(z,jt(Y(0.01,0.01,0.05,v("#c98"),6),"z"),0,F*0.15,R/2),z},"mesa-jantar"(R,D,F){let z=new Ft;return U(z,Z(R,0.02,D,N,0.01),0,F,0),U(z,st(R*0.3,0.005,D*0.5,v("#e6a243")),0,F+0.013,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([tt,lt])=>U(z,Y(0.015,0.015,F,w,10),tt*(R/2-0.06),F/2,lt*(D/2-0.06))),U(z,Y(0.04,0.03,0.12,v("#3a2a20"),12),-R*0.2,F+0.07,D*0.2),[0,1,2].forEach((tt)=>U(z,Y(0.002,0.002,0.25,v("#d9b48a"),4),-R*0.2+(tt-1)*0.015,F+0.2,D*0.2)),U(z,Y(0.035,0.035,0.2,v("#f472b6"),14),R*0.2,F+0.1,-D*0.25),U(z,Z(0.22,0.1,0.16,v("#f8c74a"),0.01),R*0.1,F+0.06,D*0.3),z},cadeiras(R,D){let F=new Ft;return U(F,Z(R,0.05,D,C,0.02),0,0.46,0),U(F,Z(R,0.4,0.03,C,0.015),0,0.7,-D/2+0.02),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([z,tt])=>U(F,Y(0.009,0.009,0.44,w,8),z*(R/2-0.03),0.22,tt*(D/2-0.03))),[-1,1].forEach((z)=>U(F,Y(0.009,0.009,0.44,w,8),z*(R/2-0.03),0.7,-D/2+0.02)),F},espada(R,D,F){let z=new Ft;U(z,Y(R*0.35,R*0.28,0.28,at,18),0,0.14,0),U(z,Y(R*0.33,R*0.33,0.01,v("#3d2a1d")),0,0.27,0);for(let tt=0;tt<11;tt++){let lt=tt/11*Math.PI*2;U(z,st(0.045,F-0.3-Math.random()*0.3,0.008,tt%2?B:v("#5a8a3a")),Math.cos(lt)*0.04,0.28+(F-0.3)/2,Math.sin(lt)*0.04).rotation.set((Math.random()-0.5)*0.25,lt,(Math.random()-0.5)*0.25)}return z},zamioculca(R,D,F){return Yt(R,F,7)},sofa(R,D,F,z){let tt=new Ft,lt=(et)=>n(et-z.x)-R/2,Tt=(et)=>n(et-z.y)-D/2,Ht=(et,K,vt,Rt,qt,Zt,re,le=0.05)=>U(tt,Z(n(vt-et),re,n(Rt-K),qt,le),(lt(et)+lt(vt))/2,Zt+re/2,(Tt(K)+Tt(Rt))/2);Ht(52,220,76,300,q,0,0.2,0.03),Ht(76,220,120,244,q,0,0.2,0.03),[[59,227,76,247],[59,247,76,268],[59,268,76,294]].forEach(([et,K,vt,Rt])=>Ht(et+0.3,K+0.3,vt-0.3,Rt-0.3,V,0.2,0.2,0.07)),[[76,227,95,244],[95,227,114,244]].forEach(([et,K,vt,Rt])=>Ht(et+0.3,K+0.3,vt-0.3,Rt-0.3,V,0.2,0.2,0.07)),[[52,222,59,246],[52,246,59,270],[52,270,59,300]].forEach(([et,K,vt,Rt])=>Ht(et,K+0.2,vt,Rt-0.2,q,0.2,0.42,0.05)),[[59,220,82,227],[82,220,101,227],[101,220,120,227]].forEach(([et,K,vt,Rt])=>Ht(et+0.2,K,vt-0.2,Rt,q,0.2,0.42,0.05)),Ht(59,294,76,300,q,0.2,0.22,0.04),Ht(114,227,120,244,q,0.2,0.22,0.04);let I=(et,K,vt,Rt)=>{U(tt,Z(0.36,0.34,0.1,v(vt,{roughness:0.95}),0.05),lt(et),0.55,Tt(K)).rotation.set(-0.25,Rt,0)};I(62,236,"#ece6d6",Math.PI/2),I(62,284,"#7d9a6a",Math.PI/2),I(104,231,"#ece6d6",0);let J=U(tt,Z(0.55,0.04,0.45,v("#8d96a3",{roughness:1,map:nr("#8d96a3",0.2)}),0.02),lt(68),0.44,Tt(262));J.rotation.y=0.5;let it=new Ft;return U(it,Z(0.32,0.38,0.16,v("#ece4d6",{roughness:1}),0.06),0,0.19,0),U(it,Z(0.24,0.03,0.17,v("#222"),0.01),0,0.38,0),U(tt,it,lt(106),0.4,Tt(236)),U(tt,Z(0.16,0.02,0.05,v("#111"),0.01),lt(66),0.41,Tt(272)).rotation.y=0.3,tt},"tapete-sala"(R,D){let F=new Ft;return U(F,Z(R,0.015,D,v("#d9c6a4",{map:Wp("#d4c09d","#b9a27d"),roughness:1}),0.005),0,0.008,0),F},"mesa-centro"(R,D,F){let z=new Ft;return U(z,Y(0.5,0.5,0.035,C,40),0,F-0.02,0).scale.set(R,1,D),[0,2.1,4.2].forEach((lt)=>{U(z,Y(0.014,0.01,F,C,8),Math.cos(lt)*R*0.32,F/2,Math.sin(lt)*D*0.32).rotation.set(Math.sin(lt)*0.15,0,-Math.cos(lt)*0.15)}),U(z,Y(0.06,0.05,0.08,v("#c26b3a")),R*0.15,F+0.04,0),U(z,Z(0.18,0.02,0.24,v("#2c4a6e"),0.005),-R*0.15,F+0.01,0.02),z},estante(R,D,F){let z=new Ft;U(z,st(R,F,0.03,ct),0,F/2,-D/2+0.015),U(z,Z(R,0.5,D,ct,0.01),0,0.25,0),[-1,1].forEach((J)=>{U(z,st(R/2-0.02,0.003,0.003,v("#1d3047")),J*R/4,0.25,D/2+0.002),dt(z,J*R/4,0.36,D/2+0.015,!1,0.24)}),U(z,st(R*0.3,0.16,D-0.05,v("#22384f")),-R*0.32,0.4,0.02),U(z,Z(0.2,0.1,0.14,v("#ece9e3"),0.01),-R*0.36,0.37,0.04),U(z,st(0.18,0.12,0.2,v("#c9a37a")),-R*0.22,0.37,0.03),U(z,Z(R,0.3,D-0.04,ct,0.01),0,F-0.15,-0.02),[-0.33,0.33].forEach((J)=>U(z,st(0.02,0.26,D-0.06,v("#294260")),J*R,F-0.15,-0.02));let tt=["#e8e1d0","#b33","#222","#d9b26a","#e9e9e9","#2b2b2b","#c2185b","#f0eadb","#333","#7a5230"];for(let J=0;J<18;J++)U(z,st(0.022+Math.random()*0.02,0.2+Math.random()*0.05,0.16,v(tt[J%tt.length],{roughness:0.8})),-R/2+0.05+J*0.028,F-0.27+0.11,-0.03);U(z,Yt(0.18,0.55,5,!0),0,F-0.28,-0.02),U(z,Z(0.16,0.14,0.16,v("#3b87c9"),0.07),R*0.38,F-0.22,-0.02),U(z,Z(R*0.58,R*0.58*0.58,0.03,C,0.006),-R*0.08,1.33,-D/2+0.05),U(z,Wt(R*0.56,R*0.56*0.56,v("#000",{map:Sa("#1d2a3a"),roughness:0.2})),-R*0.08,1.33,-D/2+0.066),U(z,Y(0.003,0.003,0.5,C,4),-R*0.12,0.85,-D/2+0.05);let lt=U(z,st(0.45,0.6,0.02,v("#5a3a22")),R*0.3,0.82,-D/2+0.06);lt.rotation.x=-0.06,U(z,Wt(0.41,0.56,v("#fff",{map:Zp()})),R*0.3,0.82,-D/2+0.072).rotation.x=-0.06;let Tt=new Ft;U(Tt,Z(0.34,0.15,0.22,v("#5b3a20",{roughness:0.5}),0.02),0,0.075,0),U(Tt,st(0.35,0.015,0.225,v("#2a1a10")),0,0.1,0),[-1,1].forEach((J)=>U(Tt,st(0.02,0.03,0.01,v("#c9a34e",{metalness:0.8})),J*0.1,0.12,0.115)),U(z,Tt,R*0.28,0.5,0.02),U(z,st(0.11,0.14,0.015,v("#1a1a1a")),-R*0.02,0.57,-0.06),U(z,Wt(0.09,0.12,v("#c9b9a0")),-R*0.02,0.57,-0.052);let Ht=new Ft;U(Ht,Y(0.04,0.06,0.14,v("#b22")),0,0.07,0),U(Ht,Ct(0.035,v("#f1d0b5")),0,0.17,0),U(Ht,Ct(0.03,v("#fff")),0,0.15,0.02),U(Ht,new he(new Ys(0.04,0.07,12),v("#b22")),0,0.22,0),U(z,Ht,R*0.1,0.5,0.03),U(z,Z(0.08,0.06,0.08,v("#c9a77a"),0.01),-R*0.12,0.53,0.06),U(z,Yt(0.4,0.85,11),-R*0.36,0.5,0.02);let I=U(z,Ct(0.1,v("#3b9ad9",{roughness:0.3}),16),R*0.38,F-0.25,-0.02);return I.scale.y=0.7,z},"cortina-sala"(R,D,F){let z=Gt(R,F,"#4a3428"),tt=U(z,new he(new qn(0.12,0.03,8,16),v("#4a3428",{roughness:1})),0,1,0.02);return tt.rotation.x=Math.PI/2,z},"quadro-sala"(R,D,F){let z=new Ft;return U(z,st(R,F,0.03,v("#111")),0,F/2,0),U(z,Wt(R-0.02,F-0.02,v("#fff",{map:qp()})),0,F/2,0.016),z},box(R,D,F){let z=new Ft;U(z,st(R,F,0.01,N),0,F/2,D/2),U(z,st(0.01,F,D,N),-R/2+0.01,F/2,0),U(z,st(R,0.03,0.04,ht),0,F,D/2),U(z,st(R,0.02,0.03,ht),0,0.01,D/2),U(z,st(0.03,F,0.03,ht),R/2-0.02,F/2,D/2),U(z,Y(0.06,0.06,0.02,w,20),R*0.2,1.95,-D/2+0.12),U(z,Y(0.008,0.008,0.14,w,8),R*0.2,2.03,-D/2+0.1);let tt=new Ft;U(tt,Z(0.28,0.03,0.22,v("#3fa7b5"),0.01),0,0.3,0),[-1,1].forEach((Tt)=>U(tt,st(0.02,0.3,0.2,v("#2a2a2a")),Tt*0.12,0.15,0)),U(z,tt,R*0.3,0,-D*0.05);let lt=new Ft;return U(lt,Z(0.25,0.02,0.1,v("#fff"),0.005),0,0,0),U(lt,Y(0.025,0.025,0.18,v("#f1e3c4"),10),-0.06,0.09,0),U(lt,Y(0.02,0.02,0.15,v("#7a5aa8"),10),0.05,0.08,0),U(z,lt,R/2-0.14,1.2,-D/2+0.06),U(z,Z(R*0.8,0.01,0.3,v("#6f7378",{roughness:1}),0.004),0,0.005,D/2+0.2),U(z,st(R+0.1,F+0.5,0.01,v("#fff",{map:Pl(),roughness:0.25})),0,(F+0.5)/2,-D/2+0.005),z},vaso(R,D){let F=new Ft,z=U(F,Y(0.17,0.13,0.38,ot,24),0,0.19,0.04);z.scale.z=1.3;let tt=U(F,Y(0.19,0.19,0.03,ot,24),0,0.4,0.04);tt.scale.z=1.25,U(F,Z(R*0.9,0.36,0.17,ot,0.03),0,0.58,-D/2+0.1),U(F,Y(0.03,0.03,0.01,w,12),0,0.765,-D/2+0.1),[-1,1].forEach((Tt)=>U(F,Y(0.03,0.035,0.05,v("#e9dcc6"),12),Tt*R*0.25,0.79,-D/2+0.1));let lt=U(F,jt(Y(0.055,0.055,0.1,v("#fff",{roughness:1}),16),"x"),R/2+0.03,0.6,-D/2+0.1);return lt.castShadow=!0,U(F,Y(0.1,0.09,0.3,v("#f4f4f2"),16),R/2+0.1,0.15,0.05),F},"pia-banheiro"(R,D,F){let z=new Ft;return U(z,Z(R,F-0.12,D-0.06,b,0.01),0,(F-0.12)/2,-0.03),[0.22,0.5].forEach((tt)=>{U(z,st(R-0.02,0.003,0.003,v("#ccc")),0,tt+0.14,D/2-0.055),U(z,Z(0.14,0.02,0.02,O,0.008),0,tt,D/2-0.045)}),U(z,Z(R*0.95,0.14,D-0.02,ot,0.06),0,F-0.07,0),U(z,st(R*0.6,0.01,D*0.55,v("#e5e8ea",{roughness:0.1})),0,F-0.005,0.03),U(z,Y(0.012,0.012,0.14,w,10),0,F+0.07,-D/2+0.05),U(z,jt(Y(0.009,0.009,0.08,w,8),"z"),0,F+0.14,-D/2+0.09),U(z,Z(R*0.9,0.55,0.1,rt,0.01),0,1.6,-D/2+0.02),U(z,Z(0.18,0.07,0.06,v("#fff"),0.02),0,1.2,-D/2+0.02),U(z,Y(0.03,0.035,0.16,C,12),R*0.3,F+0.08,-D*0.2),U(z,Z(0.1,0.02,0.07,v("#2a2a2a"),0.01),-R*0.3,F+0.01,D*0.1),U(z,st(R+0.2,1.3,0.01,v("#fff",{map:Pl(),roughness:0.25})),0,0.65,-D/2-0.01),z},"mesa-pc"(R,D,F){let z=new Ft;U(z,Z(R,0.03,D,C,0.008),0,F,0),[-1,1].forEach((et)=>{U(z,st(0.05,F,0.05,C),et*(R/2-0.08),F/2,-D/2+0.1),U(z,st(0.06,0.03,D-0.1,C),et*(R/2-0.08),0.015,0)}),U(z,Z(R*0.78,0.006,0.32,v("#5a1f1f",{roughness:0.9}),0.003),0,F+0.018,0.05);let tt=U(z,Z(1,0.42,0.03,C,0.01),0,F+0.42,-D/2+0.1);tt.rotation.x=-0.05,U(z,Wt(0.97,0.39,v("#000",{map:Sa("#2b4a77")})),0,F+0.42,-D/2+0.117),U(z,st(0.06,0.2,0.04,C),0,F+0.12,-D/2+0.08),U(z,st(0.25,0.01,0.18,C),0,F+0.02,-D/2+0.1),U(z,Z(0.12,0.03,0.04,C,0.01),0,F+0.65,-D/2+0.1);let lt=new Ft;U(lt,Z(0.38,0.02,0.26,v("#3a3d42"),0.01),0,0.01,0);let Tt=U(lt,Z(0.38,0.25,0.012,v("#3a3d42"),0.006),0,0.13,-0.13);Tt.rotation.x=-0.25,U(lt,Wt(0.34,0.21,v("#000",{map:Sa("#1f2937")})),0,0.13,-0.123).rotation.x=-0.25,U(lt,st(0.3,0.01,0.2,v("#e65a2f")),0,-0.02,0.02),U(z,lt,-R*0.32,F+0.1,-D/2+0.25),U(z,Z(0.44,0.02,0.14,v("#151515"),0.006),0,F+0.03,0.14),U(z,Z(0.06,0.03,0.1,v("#151515"),0.02),0.32,F+0.03,0.14);let Ht=U(z,new he(new qn(0.09,0.015,8,16,Math.PI),C),R*0.38,F+0.25,-D/2+0.1);Ht.rotation.y=Math.PI/2;let I=new Ft;U(I,Y(0.008,0.008,0.5,C,6),0,0.25,0).rotation.z=0.5,U(I,Y(0.03,0.03,0.12,C,12),-0.14,0.45,0).rotation.z=1.2,U(I,Y(0.07,0.07,0.01,v("#111",{transparent:!0,opacity:0.7}),20),-0.05,0.45,0.08).rotation.x=Math.PI/2,U(z,I,R*0.44,F,-D/2+0.06);let J=new Ft;U(J,Y(0.008,0.008,1.3,C,6),0,0.65,0),U(J,new he(new qn(0.12,0.015,8,24),v("#fff",{emissive:"#fff",emissiveIntensity:0.4})),0,1.35,0),U(z,J,-R*0.45,0,-D/2-0.1);let it=v("#111",{roughness:0.9});return[-0.2,0,0.15].forEach((et)=>U(z,Y(0.004,0.004,F,it,4),et,F/2,-D/2+0.02)),z},"cadeira-pc"(){let R=new Ft,D=v("#cfd0cd",{roughness:0.8}),F=v("#f2f2f0",{roughness:0.4});for(let tt=0;tt<5;tt++){let lt=tt/5*Math.PI*2,Tt=U(R,st(0.32,0.03,0.04,F),Math.cos(lt)*0.16,0.07,Math.sin(lt)*0.16);Tt.rotation.y=-lt,U(R,Ct(0.03,F,10),Math.cos(lt)*0.3,0.03,Math.sin(lt)*0.3)}U(R,Y(0.025,0.025,0.35,w,10),0,0.25,0),U(R,Z(0.5,0.08,0.48,D,0.04),0,0.48,0);let z=U(R,Z(0.46,0.6,0.06,D,0.05),0,0.85,-0.24);return z.rotation.x=-0.12,U(R,Z(0.48,0.62,0.02,F,0.02),0,0.85,-0.28).rotation.x=-0.12,U(R,Z(0.3,0.12,0.06,F,0.04),0,1.22,-0.29),U(R,Z(0.36,0.14,0.05,v("#e3e3df"),0.04),0,0.72,-0.2),[-1,1].forEach((tt)=>{U(R,Z(0.05,0.03,0.26,v("#9a9a96"),0.015),tt*0.27,0.68,-0.02),U(R,st(0.03,0.18,0.03,F),tt*0.27,0.58,-0.1)}),R},puff(R){let D=new Ft;return U(D,Ct(R/2,v("#1d1e22",{roughness:0.5}),24),0,0.2,0).scale.set(1,0.5,1),D},"quadro-branco"(R,D,F){let z=new Ft;U(z,st(R,F,0.02,ht),0,F/2,0),U(z,Wt(R-0.03,F-0.03,v("#fff",{map:Jp(),roughness:0.2})),0,F/2,0.011);let tt=new Ft;U(tt,Y(0.17,0.17,0.03,C,20),0,0.45,0),[0,2.1,4.2].forEach((Tt)=>U(tt,Y(0.01,0.01,0.45,w,6),Math.cos(Tt)*0.13,0.22,Math.sin(Tt)*0.13)),U(tt,Z(0.14,0.03,0.05,v("#2a6fd1"),0.01),0,0.48,0),U(z,tt,0,-0.6,0.35);let lt=new Ft;return U(lt,Z(0.35,0.45,0.2,v("#f3f3f3",{roughness:1}),0.03),0,0.22,0),U(lt,Z(0.3,0.4,0.18,v("#2e2e8a",{roughness:1}),0.03),0.3,0.2,0.05),U(z,lt,-R*0.3,-0.6,0.25),z},"guarda-roupa-escritorio"(R,D,F){return Pt(R,D,F,!1)},"guarda-roupa-casal"(R,D,F){return Pt(R,D,F,!0)},cama(R,D){let F=new Ft,z=v("#26262b",{roughness:0.55,map:nr("#26262b",0.08)});U(F,Z(R,0.3,D,v("#1f1f22",{roughness:0.9}),0.02),0,0.15,0),U(F,Z(R-0.04,0.2,D-0.04,v("#e8e6e1"),0.05),0,0.4,0),U(F,Z(R+0.06,0.1,D*0.78,z,0.05),0,0.48,D*0.11),U(F,Z(R+0.07,0.32,0.02,z,0.01),0,0.32,D/2+0.01),[-1,1].forEach((I)=>U(F,Z(0.02,0.32,D*0.78,z,0.01),I*(R/2+0.03),0.32,D*0.11)),U(F,st(R+0.08,0.006,0.006,v("#bbb")),0,0.18,D/2+0.025),[-1,1].forEach((I)=>{let J=U(F,Z(R*0.44,0.14,0.32,v("#33333a",{roughness:0.5}),0.07),I*R*0.24,0.55,-D/2+0.22);J.rotation.x=-0.35});let tt=(I,J,it,et)=>{U(F,Ct(et,v(it,{roughness:1})),I,0.58+et*0.8,J),U(F,Ct(et*0.65,v(it,{roughness:1})),I,0.58+et*2.2,J-0.02)};tt(-0.35,-D/2+0.5,"#f2efe8",0.09),tt(-0.12,-D/2+0.5,"#f2efe8",0.09),tt(0.2,-D/2+0.5,"#5b3a26",0.11),tt(0.1,0.1,"#d6a65a",0.07);let lt=U(F,Z(0.5,0.06,0.4,v("#c2185b",{roughness:1}),0.03),0.3,0.56,0.05);lt.rotation.y=0.4;let Tt=U(F,Z(0.45,0.06,0.35,v("#9aa0aa",{roughness:1}),0.03),0.25,0.56,0.4);Tt.rotation.y=-0.3;let Ht=U(F,Z(0.4,0.05,0.28,v("#22396b",{roughness:1}),0.02),-0.35,0.55,0.45);return Ht.rotation.y=0.1,F},"tapete-quarto"(R,D){let F=new Ft;U(F,Z(R,0.012,D,v("#2b3550",{map:Vp(),roughness:1}),0.004),0,0.006,0);let z=new Ft;return[-1,1].forEach((tt)=>U(z,Z(0.1,0.08,0.28,v("#f5f5f2"),0.03),tt*0.07,0.04,0)),U(F,z,0,0.012,0),F},criado(R,D,F){let z=new Ft;return U(z,Z(R,0.3,D,b,0.01),0,F-0.15,0),U(z,st(R-0.04,0.22,0.01,v("#e2ddd0")),0,F-0.15,D/2-0.03),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([tt,lt])=>{U(z,Y(0.012,0.008,F-0.3,O,8),tt*(R/2-0.03),(F-0.3)/2,lt*(D/2-0.03)).rotation.set(lt*0.1,0,-tt*0.1)}),U(z,Y(0.06,0.09,0.22,v("#4a2f22",{roughness:0.4}),16),0,F+0.11,0),U(z,Y(0.09,0.12,0.16,v("#f2ead8",{emissive:"#ffdca0",emissiveIntensity:0.35}),20),0,F+0.3,0),z},"quadro-quarto"(R,D,F){let z=new Ft;return U(z,st(R,F,0.03,v("#1a1a1a")),0,F/2,0),U(z,Wt(R-0.02,F-0.02,v("#fff",{map:Yp()})),0,F/2,0.016),z},"varal-chao"(R,D,F){let z=new Ft,tt=v("#f4f4f2",{roughness:0.4});[-1,1].forEach((lt)=>{let Tt=U(z,Y(0.01,0.01,1.15,tt,8),lt*(R/2-0.02),0.5,-D*0.2);Tt.rotation.x=0.45;let Ht=U(z,Y(0.01,0.01,1.15,tt,8),lt*(R/2-0.02),0.5,D*0.2);Ht.rotation.x=-0.45});for(let lt=0;lt<7;lt++)U(z,jt(Y(0.006,0.006,R,tt,6),"x"),0,F,-D/2+lt*D/6);return["#151515","#1f2c4f","#6b1f2a","#151515","#e9e2d5"].forEach((lt,Tt)=>U(z,Wt(0.34,0.5,v(lt,{side:ii,roughness:1})),-R/2+0.2+Tt*(R-0.3)/5,F-0.25,-D/2+Tt%3*D/3+0.05)),z},bike(R){let D=new Ft;D.scale.setScalar(R/1.72);let F=v("#22313f",{roughness:0.4}),z=v("#151515",{roughness:0.9});[-1,1].forEach((lt)=>{U(D,new he(new qn(0.34,0.03,8,28),z),lt*0.5,0.36,0);for(let Tt=0;Tt<8;Tt++){let Ht=U(D,Y(0.002,0.002,0.66,v("#aaa"),3),lt*0.5,0.36,0);Ht.rotation.z=Tt*Math.PI/8}});let tt=(lt,Tt,Ht,I)=>{let J=Math.hypot(Ht-lt,I-Tt),it=U(D,Y(0.018,0.018,J,F,8),(lt+Ht)/2,(Tt+I)/2,0);it.rotation.z=Math.atan2(lt-Ht,I-Tt)};return tt(-0.5,0.36,-0.05,0.4),tt(-0.05,0.4,0.35,0.75),tt(-0.05,0.4,-0.12,0.82),tt(-0.12,0.82,0.35,0.75),tt(0.35,0.75,0.5,0.36),tt(-0.5,0.36,-0.12,0.82),U(D,Z(0.2,0.04,0.08,C,0.02),-0.14,0.86,0),U(D,jt(Y(0.012,0.012,0.55,C,8),"z"),0.38,0.86,0),D}},ce=[],Qt=new Map,xt=(R)=>{let D=new rs;return R.forEach(([F,z],tt)=>tt?D.lineTo(e(F),t(z)):D.moveTo(e(F),t(z))),D},wt=Cl();wt.wrapS=wt.wrapT=Qi,wt.repeat.set(0.8333333333333334,0.8333333333333334);let W=(R,D)=>{let F=new $s(xt(R));F.rotateX(Math.PI/2);let z=new he(F,D);z.receiveShadow=!0,z.userData.piso=!0,z.position.y=0.001,p.add(z),ce.push(z)};W(s,v("#fff",{map:wt,roughness:0.35,side:ii}));let Bt=Cl();Bt.wrapS=Bt.wrapT=Qi,Bt.repeat.set(1.1111111111111112,1.1111111111111112),W(l,v("#e9e2d6",{map:Bt,roughness:0.6,side:ii}));let Vt=new he(new Js(xt([[46,16],[202,16],[202,106],[332,106],[332,350],[46,350]]),{depth:0.18,bevelEnabled:!1}).rotateX(Math.PI/2),v("#f1efe9",{roughness:0.9}));Vt.receiveShadow=!0,p.add(Vt);let Mt=new he(new qs(14,48).rotateX(-Math.PI/2),new oa({opacity:0.12}));Mt.position.set(Qe.x,-0.18,Qe.z),Mt.receiveShadow=!0,p.add(Mt);let ie=v("#fbfaf7",{roughness:0.92}),Ot=v("#6e6c68",{roughness:0.9}),Xt=v("#ffffff",{roughness:0.4}),k=(R,D,F,z=0,tt=ie,lt=!0)=>{let Tt=e(R[0]),Ht=t(R[1]),I=e(D[0]),J=t(D[1]),it=Math.hypot(I-Tt,J-Ht)+Ii,et=-Math.atan2(J-Ht,I-Tt),K=new he(new ke(it,1,Ii),tt);K.rotation.y=et,K.position.set((Tt+I)/2,0,(Ht+J)/2),K.castShadow=K.receiveShadow=!0,p.add(K);let vt=new he(new ke(it+0.002,0.012,Ii+0.002),Ot);vt.rotation.y=et,vt.position.copy(K.position),vt.visible=lt,p.add(vt);let Rt={corpo:K,topo:vt,base:z,frente:R[1]>=340&&D[1]>=340};return L(Rt,F),Rt},L=(R,D)=>{R.corpo.scale.y=D,R.corpo.position.y=R.base+D/2,R.topo.position.y=R.base+D+0.006},nt=[];c.forEach((R)=>{for(let D=1;D<R.length;D++){nt.push(k(R[D-1],R[D],Dn));let F=k(R[D-1],R[D],0.07,0,Xt,!1);F.corpo.scale.z=1.18}});{let[R,D,F,z]=u,tt=k([R+F/2,D],[R+F/2,D+z],Dn);tt.corpo.geometry=new ke(n(z)+Ii,1,n(F)),tt.topo.geometry=new ke(n(z)+Ii,0.012,n(F)),nt.push(tt)}let mt=[],gt=[],ut=v("#e9eaea",{metalness:0.4,roughness:0.35});d.forEach(([R,D])=>{let F=k(R,D,1);F.frente=!1,mt.push(k(R,D,Dn-2.1,2.1));let z=k(R,D,1.1,1,N,!1);z.corpo.scale.z=0.25,gt.push(z.corpo),[1,2.07].forEach((Ht)=>{let I=k(R,D,0.03,Ht,ut,!1);I.corpo.scale.z=0.5,gt.push(I.corpo)});let tt=[(R[0]+D[0])/2,(R[1]+D[1])/2],lt=R[0]===D[0],Tt=k(lt?[tt[0],tt[1]-0.4]:[tt[0]-0.4,tt[1]],lt?[tt[0],tt[1]+0.4]:[tt[0]+0.4,tt[1]],1.07,1,ut,!1);gt.push(Tt.corpo)});{let R=k(o[0],o[1],2.1,0,N,!1);R.corpo.scale.z=0.25,gt.push(R.corpo),mt.push(k(o[0],o[1],Dn-2.1,2.1));let D=k(o[0],o[1],0.04,2.07,ut,!1);gt.push(D.corpo);let F=(o[0][0]+o[1][0])/2;gt.push(k([F,302.5],[F,305.5],2.1,0,ut,!1).corpo)}{let[R,D]=f,F=Math.round((D[0]-R[0])/3.2),z=v("#f2f0ea",{roughness:0.5});for(let lt=0;lt<=F;lt++){let Tt=Y(0.01,0.01,1.05,z,6);Tt.position.set(e(R[0]+lt*(D[0]-R[0])/F),0.525,t(R[1])-0.02),Tt.castShadow=!0,p.add(Tt)}k(R,D,0.05,1.05,z,!1);let tt=k(R,D,1.3,1.1,v("#ffffff",{transparent:!0,opacity:0.1,side:ii}),!1);tt.corpo.scale.z=0.1,mt.push(tt),[[50,304],[50,346]].forEach(()=>{})}{let R=Xp();R.wrapS=R.wrapT=Qi,R.repeat.set(3,1);let D=Wt(1.9,0.62,v("#fff",{map:R,roughness:0.4}));D.position.set(e(110),1.22,t(20)+Ii/2+0.005),p.add(D)}let $t=(R,D,F,z,tt="#f7f6f2")=>{let lt=new Ft;return U(lt,Z(F,2.1,0.035,v(tt,{roughness:0.5}),0.005),F/2,1.05,0),U(lt,jt(Y(0.012,0.012,0.12,w,8),"x"),F-0.08,1,0.03),U(lt,jt(Y(0.012,0.012,0.12,w,8),"x"),F-0.08,1,-0.03),lt.position.set(R,0,D),lt.rotation.y=z,ft(lt),p.add(lt),lt},Lt=[$t(e(50),t(184),0.8,-1.3),$t(e(190),t(199),0.55,1.9),$t(e(221),t(230),0.7,1),$t(e(200),t(232),0.7,-1.1)],It=[],ee=Gt(1.8,2.3,"#a8a9ab");ee.position.set(e(270),0,t(342)),It.push(ee);let bt=Gt(1.4,2.3,"#f3f1ec");bt.position.set(e(278),0,t(114)),It.push(bt);{let R=new Ft,D=Z(0.8,0.02,0.22,v("#2e2a26"),0.01);D.position.y=0.42,D.rotation.z=1.2,R.add(D),[-1,1].forEach((F)=>{let z=Ct(0.03,v("#d6a23a"),8);z.position.set(-0.05+F*0.02,0.06+(F+1)*0.32,0.08),R.add(z)}),R.position.set(e(322),0,t(160)),It.push(R)}{let R=new Ft,D=Y(0.17,0.14,0.25,v("#ef8a9c"),18);D.position.y=0.125,D.scale.x=1.6,R.add(D);let F=Y(0.1,0.1,0.1,v("#7a1f3d"),16);F.position.set(0.12,0.2,0),R.add(F),R.position.set(e(150),0,t(208)),It.push(R)}for(let R=0;R<6;R++){let D=Yt(0.14,0.32+R%3*0.08,4);D.position.set(e(56+R*8),0,t(342.5)),It.push(D)}{let R=new Ft,D=Y(0.012,0.012,1.2,v("#d64a6a"),6);D.position.y=0.6,D.rotation.z=0.15,R.add(D);let F=Y(0.12,0.14,0.05,v("#c9c9c9",{roughness:1}),14);F.position.y=0.03,R.add(F),R.position.set(e(178),0,t(310)),It.push(R)}{let R=new Ft,D=Y(0.06,0.08,0.22,v("#78c850",{transparent:!0,opacity:0.8}),14);D.position.y=0.11,R.add(D),R.position.set(e(178),0,t(322)),It.push(R)}{let R=new Ft,D=st(0.25,0.02,0.1,v("#fff"));D.position.set(0,1.35,0),R.add(D);let F=Y(0.03,0.03,0.16,v("#8d6ad1"),10);F.position.set(0.05,1.44,0),R.add(F);let z=Y(0.003,0.003,0.2,v("#2a7a3a"),4);z.position.set(-0.05,1.2,0),R.add(z),R.position.set(e(51)+0.07,0,t(230)),R.rotation.y=Math.PI/2,It.push(R)}{let R=new Ft,D=Wt(1.2,0.9,v("#fff",{transparent:!0,opacity:0}));R.add(D),It.push(R)}It.forEach((R)=>{ft(R),p.add(R)});let zt={"+z":0,"-z":Math.PI,"+x":Math.PI/2,"-x":-Math.PI/2};r.forEach((R)=>{let D=R.face==="+x"||R.face==="-x",F=n(D?R.d:R.w),z=n(D?R.w:R.d),tt=(te[R.id]||((lt,Tt,Ht)=>{let I=new Ft;return U(I,Z(lt,Ht,Tt,b),0,Ht/2,0),I}))(F,z,R.h,R);if(tt.rotation.y=zt[R.face||"+z"],tt.position.set(e(R.x)+n(R.w)/2,R.base||0,t(R.y)+n(R.d)/2),ft(tt),R.id.startsWith("tapete"))tt.traverse((lt)=>{lt.castShadow=!1});tt.traverse((lt)=>{let Tt=lt;if(!Tt.isMesh)return;Tt.userData.movel=R.id,Tt.material=Tt.material.clone(),Qt.set(R.id,[...Qt.get(R.id)||[],Tt])}),p.add(tt),ce.push(tt)});let ue=new Ft;p.add(ue);let se=new Yn({color:"#e0962e",transparent:!0,opacity:0.38}),kt=new Vs({color:"#c47a12"}),ae=!0,ne=!1,be=()=>{},Q=()=>{let R=ne?Dn:ae?Dn:Rl;nt.forEach((D)=>L(D,!ne&&ae&&D.frente?Gp:R)),mt.forEach((D)=>D.corpo.visible=R===Dn&&!ne),gt.forEach((D)=>D.visible=R===Dn||D.position.y<Rl),Lt.forEach((D)=>D.visible=!ne),[ee,bt].forEach((D)=>D.visible=R===Dn&&!ne)},yt=null,pt=()=>{},_t=new ga,Nt=new St,Dt=null,oe=h.domElement;oe.addEventListener("pointerdown",(R)=>{Dt={x:R.clientX,y:R.clientY,t:Date.now()}}),oe.addEventListener("pointerup",(R)=>{if(!Dt||Math.hypot(R.clientX-Dt.x,R.clientY-Dt.y)>8||Date.now()-Dt.t>600){Dt=null;return}Dt=null;let D=oe.getBoundingClientRect();Nt.set((R.clientX-D.left)/D.width*2-1,-((R.clientY-D.top)/D.height)*2+1),_t.setFromCamera(Nt,y);let F=(tt)=>{while(tt){if(!tt.visible)return!1;tt=tt.parent}return!0},z=_t.intersectObjects([...ce,...nt.map((tt)=>tt.corpo)],!0).find((tt)=>F(tt.object)&&!tt.object.material.transparent);if(!z||!(z.object.userData.movel||z.object.userData.piso))return;pt({movel:z.object.userData.movel,x:z.point.x*40+50,y:z.point.z*40+20})});let Te=null,Ie=()=>{let{clientWidth:R,clientHeight:D}=a;h.setSize(R,D,!1),g.aspect=R/Math.max(1,D),g.updateProjectionMatrix();let F=R/Math.max(1,D),z=Math.max(8.9,7.6/F)/2;Object.assign(_,{left:-z*F,right:z*F,top:z,bottom:-z}),_.updateProjectionMatrix()},me=new ResizeObserver(Ie);me.observe(a),Ie();let tn=()=>{let R=Math.max(1,1.12/g.aspect);return{t:Qe.clone().add(new X(0,0,0.2)),p:new X(Qe.x-0.3*R,11.5*R,Qe.z+7.2*R)}},Je=tn();g.position.copy(Je.p),x.target.copy(Je.t),_.position.set(Qe.x,20,Qe.z),_.up.set(0,0,-1),_.lookAt(Qe),M.target.copy(Qe),Q(),h.shadowMap.needsUpdate=!0;let Di=0,mn=!0,En=2,an=()=>{En=2};x.addEventListener("change",an),M.addEventListener("change",an),new ResizeObserver(an).observe(a);let Li=()=>{if(!mn)return;if(yt)En=2;if(yt&&!ne){if(x.target.lerp(yt.t,0.12),g.position.lerp(yt.p,0.12),g.position.distanceTo(yt.p)<0.02)yt=null}if(yt&&ne){if(M.target.lerp(yt.t,0.15),_.position.lerp(new X(yt.t.x,20,yt.t.z),0.15),_.zoom+=(yt.p.y-_.zoom)*0.15,_.updateProjectionMatrix(),Math.abs(_.zoom-yt.p.y)<0.01)yt=null}if(S.update())En=2;if(En>0)En--,h.render(p,y),be();Di=requestAnimationFrame(Li)};return Li(),{focar(R){let D=i.find((lt)=>lt.id===R);if(ne){yt={t:D?new X(e(D.x+D.w/2),0,t(D.y+D.h/2)):Qe.clone(),p:new X(0,D?Math.min(3.2,7/Math.max(n(D.w),n(D.h),1.6)):1,0)};return}if(!D){yt=tn();return}let F=new X(e(D.x+D.w/2),0,t(D.y+D.h/2)),z=Math.max(n(D.w),n(D.h),1.8),tt=Math.max(1,0.9/g.aspect);yt={t:F,p:F.clone().add(new X(z*0.3*tt,(3.2+z*1.7)*tt,(2.2+z*1.4)*tt))}},selecionar(R){if(Te)Qt.get(Te)?.forEach((D)=>D.material.emissive?.setHex(0));if(Te=R,R)Qt.get(R)?.forEach((D)=>D.material.emissive?.setHex(6961664));an()},topo(R){let D=Qt.get(R);if(!D?.length)return null;let F=new Vn;D.forEach((tt)=>F.expandByObject(tt));let z=F.getCenter(new X);return{x:z.x,y:Math.min(F.max.y,2.3),z:z.z}},onToque(R){pt=R},modo(R){ne=R,yt=null,y=R?_:g,S=R?M:x,M.enabled=R,x.enabled=!R,E.castShadow=!R,Q(),h.shadowMap.needsUpdate=!0,an()},paredes(R){ae=R,Q(),h.shadowMap.needsUpdate=!0,an()},fantasmas(R){ue.clear(),R.forEach((D)=>{let F=new ke(D.l,D.a,D.p),z=new he(F,se);z.position.set(D.x,D.a/2+0.005,D.z);let tt=new Qr(new aa(F),kt);tt.position.copy(z.position),ue.add(z,tt)}),an()},projetar(R,D,F){let z=new X(R,D,F).project(y);return{x:(z.x+1)/2*a.clientWidth,y:(1-z.y)/2*a.clientHeight,ok:z.z<1}},onMudou(R){be=R,an()},destruir(){mn=!1,cancelAnimationFrame(Di),me.disconnect(),x.dispose(),M.dispose(),m.dispose(),h.dispose(),p.traverse((R)=>{R.geometry?.dispose()}),h.domElement.remove()}}}export{om as criarCena};
