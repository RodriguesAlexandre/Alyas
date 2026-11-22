import{n,e,t,i,s,l,c,u,d,o,f,r}from"./main-7d0wyw3k.js";var hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Po=2;var Io=1,Cn=2;var Do=4;var ts=1000;var Gr="srgb";class Hn{addEventListener(a,h){if(this._listeners===void 0)this._listeners={};let p=this._listeners;if(p[a]===void 0)p[a]=[];if(p[a].indexOf(h)===-1)p[a].push(h)}hasEventListener(a,h){if(this._listeners===void 0)return!1;let p=this._listeners;return p[a]!==void 0&&p[a].indexOf(h)!==-1}removeEventListener(a,h){if(this._listeners===void 0)return;let m=this._listeners[a];if(m!==void 0){let g=m.indexOf(h);if(g!==-1)m.splice(g,1)}}dispatchEvent(a){if(this._listeners===void 0)return;let p=this._listeners[a.type];if(p!==void 0){a.target=this;let m=p.slice(0);for(let g=0,_=m.length;g<_;g++)m[g].call(this,a);a.target=null}}}var Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=1234567,Si=Math.PI/180,Ji=180/Math.PI;function ei(){let a=Math.random()*4294967295|0,h=Math.random()*4294967295|0,p=Math.random()*4294967295|0,m=Math.random()*4294967295|0;return(Fe[a&255]+Fe[a>>8&255]+Fe[a>>16&255]+Fe[a>>24&255]+"-"+Fe[h&255]+Fe[h>>8&255]+"-"+Fe[h>>16&15|64]+Fe[h>>24&255]+"-"+Fe[p&63|128]+Fe[p>>8&255]+"-"+Fe[p>>16&255]+Fe[p>>24&255]+Fe[m&255]+Fe[m>>8&255]+Fe[m>>16&255]+Fe[m>>24&255]).toLowerCase()}function Pe(a,h,p){return Math.max(h,Math.min(p,a))}function Wr(a,h){return(a%h+h)%h}function Il(a,h,p,m,g){return m+(a-h)*(g-m)/(p-h)}function Dl(a,h,p){if(a!==h)return(p-a)/(h-a);else return 0}function Xi(a,h,p){return(1-p)*a+p*h}function Ll(a,h,p,m){return Xi(a,h,1-Math.exp(-p*m))}function Ul(a,h=1){return h-Math.abs(Wr(a,h*2)-h)}function Nl(a,h,p){if(a<=h)return 0;if(a>=p)return 1;return a=(a-h)/(p-h),a*a*(3-2*a)}function Fl(a,h,p){if(a<=h)return 0;if(a>=p)return 1;return a=(a-h)/(p-h),a*a*a*(a*(a*6-15)+10)}function Ol(a,h){return a+Math.floor(Math.random()*(h-a+1))}function Bl(a,h){return a+Math.random()*(h-a)}function zl(a){return a*(0.5-Math.random())}function Hl(a){if(a!==void 0)Ta=a;let h=Ta+=1831565813;return h=Math.imul(h^h>>>15,h|1),h^=h+Math.imul(h^h>>>7,h|61),((h^h>>>14)>>>0)/4294967296}function kl(a){return a*Si}function Gl(a){return a*Ji}function Wl(a){return(a&a-1)===0&&a!==0}function Vl(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Xl(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ql(a,h,p,m,g){let{cos:_,sin:y}=Math,x=_(p/2),M=y(p/2),S=_((h+m)/2),E=y((h+m)/2),v=_((h-m)/2),b=y((h-m)/2),A=_((m-h)/2),P=y((m-h)/2);switch(g){case"XYX":a.set(x*E,M*v,M*b,x*S);break;case"YZY":a.set(M*b,x*E,M*v,x*S);break;case"ZXZ":a.set(M*v,M*b,x*E,x*S);break;case"XZX":a.set(x*E,M*P,M*A,x*S);break;case"YXY":a.set(M*A,x*E,M*P,x*S);break;case"ZYZ":a.set(M*P,M*A,x*E,x*S);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+g)}}function yi(a,h){switch(h.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw Error("Invalid component type.")}}function ze(a,h){switch(h.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw Error("Invalid component type.")}}var Lo={DEG2RAD:Si,RAD2DEG:Ji,generateUUID:ei,clamp:Pe,euclideanModulo:Wr,mapLinear:Il,inverseLerp:Dl,lerp:Xi,damp:Ll,pingpong:Ul,smoothstep:Nl,smootherstep:Fl,randInt:Ol,randFloat:Bl,randFloatSpread:zl,seededRandom:Hl,degToRad:kl,radToDeg:Gl,isPowerOfTwo:Wl,ceilPowerOfTwo:Vl,floorPowerOfTwo:Xl,setQuaternionFromProperEuler:ql,normalize:ze,denormalize:yi};class Et{constructor(a=0,h=0){Et.prototype.isVector2=!0,this.x=a,this.y=h}get width(){return this.x}set width(a){this.x=a}get height(){return this.y}set height(a){this.y=a}set(a,h){return this.x=a,this.y=h,this}setScalar(a){return this.x=a,this.y=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y)}copy(a){return this.x=a.x,this.y=a.y,this}add(a){return this.x+=a.x,this.y+=a.y,this}addScalar(a){return this.x+=a,this.y+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this}subScalar(a){return this.x-=a,this.y-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this}multiply(a){return this.x*=a.x,this.y*=a.y,this}multiplyScalar(a){return this.x*=a,this.y*=a,this}divide(a){return this.x/=a.x,this.y/=a.y,this}divideScalar(a){return this.multiplyScalar(1/a)}applyMatrix3(a){let h=this.x,p=this.y,m=a.elements;return this.x=m[0]*h+m[3]*p+m[6],this.y=m[1]*h+m[4]*p+m[7],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(a){return this.x*a.x+this.y*a.y}cross(a){return this.x*a.y-this.y*a.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(a){let h=Math.sqrt(this.lengthSq()*a.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(a)/h;return Math.acos(Pe(p,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){let h=this.x-a.x,p=this.y-a.y;return h*h+p*p}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this}equals(a){return a.x===this.x&&a.y===this.y}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this}rotateAround(a,h){let p=Math.cos(h),m=Math.sin(h),g=this.x-a.x,_=this.y-a.y;return this.x=g*p-_*m+a.x,this.y=g*m+_*p+a.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(a,h,p,m,g,_,y,x,M){if(le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],a!==void 0)this.set(a,h,p,m,g,_,y,x,M)}set(a,h,p,m,g,_,y,x,M){let S=this.elements;return S[0]=a,S[1]=m,S[2]=y,S[3]=h,S[4]=g,S[5]=x,S[6]=p,S[7]=_,S[8]=M,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(a){let h=this.elements,p=a.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],this}extractBasis(a,h,p){return a.setFromMatrix3Column(this,0),h.setFromMatrix3Column(this,1),p.setFromMatrix3Column(this,2),this}setFromMatrix4(a){let h=a.elements;return this.set(h[0],h[4],h[8],h[1],h[5],h[9],h[2],h[6],h[10]),this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,h){let p=a.elements,m=h.elements,g=this.elements,_=p[0],y=p[3],x=p[6],M=p[1],S=p[4],E=p[7],v=p[2],b=p[5],A=p[8],P=m[0],I=m[3],T=m[6],w=m[1],W=m[4],F=m[7],k=m[2],rt=m[5],X=m[8];return g[0]=_*P+y*w+x*k,g[3]=_*I+y*W+x*rt,g[6]=_*T+y*F+x*X,g[1]=M*P+S*w+E*k,g[4]=M*I+S*W+E*rt,g[7]=M*T+S*F+E*X,g[2]=v*P+b*w+A*k,g[5]=v*I+b*W+A*rt,g[8]=v*T+b*F+A*X,this}multiplyScalar(a){let h=this.elements;return h[0]*=a,h[3]*=a,h[6]*=a,h[1]*=a,h[4]*=a,h[7]*=a,h[2]*=a,h[5]*=a,h[8]*=a,this}determinant(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8];return h*_*S-h*y*M-p*g*S+p*y*x+m*g*M-m*_*x}invert(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8],E=S*_-y*M,v=y*x-S*g,b=M*g-_*x,A=h*E+p*v+m*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let P=1/A;return a[0]=E*P,a[1]=(m*M-S*p)*P,a[2]=(y*p-m*_)*P,a[3]=v*P,a[4]=(S*h-m*x)*P,a[5]=(m*g-y*h)*P,a[6]=b*P,a[7]=(p*x-M*h)*P,a[8]=(_*h-p*g)*P,this}transpose(){let a,h=this.elements;return a=h[1],h[1]=h[3],h[3]=a,a=h[2],h[2]=h[6],h[6]=a,a=h[5],h[5]=h[7],h[7]=a,this}getNormalMatrix(a){return this.setFromMatrix4(a).invert().transpose()}transposeIntoArray(a){let h=this.elements;return a[0]=h[0],a[1]=h[3],a[2]=h[6],a[3]=h[1],a[4]=h[4],a[5]=h[7],a[6]=h[2],a[7]=h[5],a[8]=h[8],this}setUvTransform(a,h,p,m,g,_,y){let x=Math.cos(g),M=Math.sin(g);return this.set(p*x,p*M,-p*(x*_+M*y)+_+a,-m*M,m*x,-m*(-M*_+x*y)+y+h,0,0,1),this}scale(a,h){return this.premultiply(ir.makeScale(a,h)),this}rotate(a){return this.premultiply(ir.makeRotation(-a)),this}translate(a,h){return this.premultiply(ir.makeTranslation(a,h)),this}makeTranslation(a,h){if(a.isVector2)this.set(1,0,a.x,0,1,a.y,0,0,1);else this.set(1,0,a,0,1,h,0,0,1);return this}makeRotation(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,-p,0,p,h,0,0,0,1),this}makeScale(a,h){return this.set(a,0,0,0,h,0,0,0,1),this}equals(a){let h=this.elements,p=a.elements;for(let m=0;m<9;m++)if(h[m]!==p[m])return!1;return!0}fromArray(a,h=0){for(let p=0;p<9;p++)this.elements[p]=a[p+h];return this}toArray(a=[],h=0){let p=this.elements;return a[h]=p[0],a[h+1]=p[1],a[h+2]=p[2],a[h+3]=p[3],a[h+4]=p[4],a[h+5]=p[5],a[h+6]=p[6],a[h+7]=p[7],a[h+8]=p[8],a}clone(){return new this.constructor().fromArray(this.elements)}}var ir=new le;function Uo(a){for(let h=a.length-1;h>=0;--h)if(a[h]>=65535)return!0;return!1}function Bs(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Yl(){let a=Bs("canvas");return a.style.display="block",a}var wa={};function Wi(a){if(a in wa)return;wa[a]=!0,console.warn(a)}function Zl(a,h,p){return new Promise(function(m,g){function _(){switch(a.clientWaitSync(h,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:g();break;case a.TIMEOUT_EXPIRED:setTimeout(_,p);break;default:m()}}setTimeout(_,p)})}function Jl(a){let h=a.elements;h[2]=0.5*h[2]+0.5*h[3],h[6]=0.5*h[6]+0.5*h[7],h[10]=0.5*h[10]+0.5*h[11],h[14]=0.5*h[14]+0.5*h[15]}function $l(a){let h=a.elements;if(h[11]===-1)h[10]=-h[10]-1,h[14]=-h[14];else h[10]=-h[10],h[14]=-h[14]+1}var pe={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(a,h,p){if(this.enabled===!1||h===p||!h||!p)return a;if(this.spaces[h].transfer==="srgb")a.r=An(a.r),a.g=An(a.g),a.b=An(a.b);if(this.spaces[h].primaries!==this.spaces[p].primaries)a.applyMatrix3(this.spaces[h].toXYZ),a.applyMatrix3(this.spaces[p].fromXYZ);if(this.spaces[p].transfer==="srgb")a.r=Ei(a.r),a.g=Ei(a.g),a.b=Ei(a.b);return a},fromWorkingColorSpace:function(a,h){return this.convert(a,this.workingColorSpace,h)},toWorkingColorSpace:function(a,h){return this.convert(a,h,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){if(a==="")return"linear";return this.spaces[a].transfer},getLuminanceCoefficients:function(a,h=this.workingColorSpace){return a.fromArray(this.spaces[h].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,h,p){return a.copy(this.spaces[h].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function An(a){return a<0.04045?a*0.0773993808:Math.pow(a*0.9478672986+0.0521327014,2.4)}function Ei(a){return a<0.0031308?a*12.92:1.055*Math.pow(a,0.41666)-0.055}var Aa=[0.64,0.33,0.3,0.6,0.15,0.06],Ra=[0.2126,0.7152,0.0722],Ca=[0.3127,0.329],Pa=new le().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Ia=new le().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);pe.define({["srgb-linear"]:{primaries:Aa,whitePoint:Ca,transfer:"linear",toXYZ:Pa,fromXYZ:Ia,luminanceCoefficients:Ra,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Aa,whitePoint:Ca,transfer:"srgb",toXYZ:Pa,fromXYZ:Ia,luminanceCoefficients:Ra,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}});var ai;class No{static getDataURL(a){if(/^data:/i.test(a.src))return a.src;if(typeof HTMLCanvasElement>"u")return a.src;let h;if(a instanceof HTMLCanvasElement)h=a;else{if(ai===void 0)ai=Bs("canvas");ai.width=a.width,ai.height=a.height;let p=ai.getContext("2d");if(a instanceof ImageData)p.putImageData(a,0,0);else p.drawImage(a,0,0,a.width,a.height);h=ai}if(h.width>2048||h.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",a),h.toDataURL("image/jpeg",0.6);else return h.toDataURL("image/png")}static sRGBToLinear(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap){let h=Bs("canvas");h.width=a.width,h.height=a.height;let p=h.getContext("2d");p.drawImage(a,0,0,a.width,a.height);let m=p.getImageData(0,0,a.width,a.height),g=m.data;for(let _=0;_<g.length;_++)g[_]=An(g[_]/255)*255;return p.putImageData(m,0,0),h}else if(a.data){let h=a.data.slice(0);for(let p=0;p<h.length;p++)if(h instanceof Uint8Array||h instanceof Uint8ClampedArray)h[p]=Math.floor(An(h[p]/255)*255);else h[p]=An(h[p]);return{data:h,width:a.width,height:a.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),a}}var Kl=0;class Vr{constructor(a=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ei(),this.data=a,this.dataReady=!0,this.version=0}set needsUpdate(a){if(a===!0)this.version++}toJSON(a){let h=a===void 0||typeof a==="string";if(!h&&a.images[this.uuid]!==void 0)return a.images[this.uuid];let p={uuid:this.uuid,url:""},m=this.data;if(m!==null){let g;if(Array.isArray(m)){g=[];for(let _=0,y=m.length;_<y;_++)if(m[_].isDataTexture)g.push(sr(m[_].image));else g.push(sr(m[_]))}else g=sr(m);p.url=g}if(!h)a.images[this.uuid]=p;return p}}function sr(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap)return No.getDataURL(a);else if(a.data)return{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var jl=0;class Ge extends Hn{constructor(a=Ge.DEFAULT_IMAGE,h=Ge.DEFAULT_MAPPING,p=1001,m=1001,g=1006,_=1008,y=1023,x=1009,M=Ge.DEFAULT_ANISOTROPY,S=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=ei(),this.name="",this.source=new Vr(a),this.mipmaps=[],this.mapping=h,this.channel=0,this.wrapS=p,this.wrapT=m,this.magFilter=g,this.minFilter=_,this.anisotropy=M,this.format=y,this.internalFormat=null,this.type=x,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(a=null){this.source.data=a}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(a){return this.name=a.name,this.source=a.source,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.channel=a.channel,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.internalFormat=a.internalFormat,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.center.copy(a.center),this.rotation=a.rotation,this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrix.copy(a.matrix),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.colorSpace=a.colorSpace,this.userData=JSON.parse(JSON.stringify(a.userData)),this.needsUpdate=!0,this}toJSON(a){let h=a===void 0||typeof a==="string";if(!h&&a.textures[this.uuid]!==void 0)return a.textures[this.uuid];let p={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(a).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)p.userData=this.userData;if(!h)a.textures[this.uuid]=p;return p}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(a){if(this.mapping!==300)return a;if(a.applyMatrix3(this.matrix),a.x<0||a.x>1)switch(this.wrapS){case 1000:a.x=a.x-Math.floor(a.x);break;case 1001:a.x=a.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(a.x)%2)===1)a.x=Math.ceil(a.x)-a.x;else a.x=a.x-Math.floor(a.x);break}if(a.y<0||a.y>1)switch(this.wrapT){case 1000:a.y=a.y-Math.floor(a.y);break;case 1001:a.y=a.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(a.y)%2)===1)a.y=Math.ceil(a.y)-a.y;else a.y=a.y-Math.floor(a.y);break}if(this.flipY)a.y=1-a.y;return a}set needsUpdate(a){if(a===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(a){if(a===!0)this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=300;Ge.DEFAULT_ANISOTROPY=1;class ye{constructor(a=0,h=0,p=0,m=1){ye.prototype.isVector4=!0,this.x=a,this.y=h,this.z=p,this.w=m}get width(){return this.z}set width(a){this.z=a}get height(){return this.w}set height(a){this.w=a}set(a,h,p,m){return this.x=a,this.y=h,this.z=p,this.w=m,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this.w=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setW(a){return this.w=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;case 3:this.w=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w!==void 0?a.w:1,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this.z=a.z+h.z,this.w=a.w+h.w,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this.z+=a.z*h,this.w+=a.w*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this.z=a.z-h.z,this.w=a.w-h.w,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this.w*=a.w,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this.w*=a,this}applyMatrix4(a){let h=this.x,p=this.y,m=this.z,g=this.w,_=a.elements;return this.x=_[0]*h+_[4]*p+_[8]*m+_[12]*g,this.y=_[1]*h+_[5]*p+_[9]*m+_[13]*g,this.z=_[2]*h+_[6]*p+_[10]*m+_[14]*g,this.w=_[3]*h+_[7]*p+_[11]*m+_[15]*g,this}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this.w/=a.w,this}divideScalar(a){return this.multiplyScalar(1/a)}setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);let h=Math.sqrt(1-a.w*a.w);if(h<0.0001)this.x=1,this.y=0,this.z=0;else this.x=a.x/h,this.y=a.y/h,this.z=a.z/h;return this}setAxisAngleFromRotationMatrix(a){let h,p,m,g,_=0.01,y=0.1,x=a.elements,M=x[0],S=x[4],E=x[8],v=x[1],b=x[5],A=x[9],P=x[2],I=x[6],T=x[10];if(Math.abs(S-v)<0.01&&Math.abs(E-P)<0.01&&Math.abs(A-I)<0.01){if(Math.abs(S+v)<0.1&&Math.abs(E+P)<0.1&&Math.abs(A+I)<0.1&&Math.abs(M+b+T-3)<0.1)return this.set(1,0,0,0),this;h=Math.PI;let W=(M+1)/2,F=(b+1)/2,k=(T+1)/2,rt=(S+v)/4,X=(E+P)/4,Y=(A+I)/4;if(W>F&&W>k)if(W<0.01)p=0,m=0.707106781,g=0.707106781;else p=Math.sqrt(W),m=rt/p,g=X/p;else if(F>k)if(F<0.01)p=0.707106781,m=0,g=0.707106781;else m=Math.sqrt(F),p=rt/m,g=Y/m;else if(k<0.01)p=0.707106781,m=0.707106781,g=0;else g=Math.sqrt(k),p=X/g,m=Y/g;return this.set(p,m,g,h),this}let w=Math.sqrt((I-A)*(I-A)+(E-P)*(E-P)+(v-S)*(v-S));if(Math.abs(w)<0.001)w=1;return this.x=(I-A)/w,this.y=(E-P)/w,this.z=(v-S)/w,this.w=Math.acos((M+b+T-1)/2),this}setFromMatrixPosition(a){let h=a.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this.w=h[15],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this.z=Math.max(a.z,Math.min(h.z,this.z)),this.w=Math.max(a.w,Math.min(h.w,this.w)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this.z=Math.max(a,Math.min(h,this.z)),this.w=Math.max(a,Math.min(h,this.w)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this.z+=(a.z-this.z)*h,this.w+=(a.w-this.w)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this.z=a.z+(h.z-a.z)*p,this.w=a.w+(h.w-a.w)*p,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this.z=a[h+2],this.w=a[h+3],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a[h+2]=this.z,a[h+3]=this.w,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this.z=a.getZ(h),this.w=a.getW(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fo extends Hn{constructor(a=1,h=1,p={}){super();this.isRenderTarget=!0,this.width=a,this.height=h,this.depth=1,this.scissor=new ye(0,0,a,h),this.scissorTest=!1,this.viewport=new ye(0,0,a,h);let m={width:a,height:h,depth:1};p=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},p);let g=new Ge(m,p.mapping,p.wrapS,p.wrapT,p.magFilter,p.minFilter,p.format,p.type,p.anisotropy,p.colorSpace);g.flipY=!1,g.generateMipmaps=p.generateMipmaps,g.internalFormat=p.internalFormat,this.textures=[];let _=p.count;for(let y=0;y<_;y++)this.textures[y]=g.clone(),this.textures[y].isRenderTargetTexture=!0;this.depthBuffer=p.depthBuffer,this.stencilBuffer=p.stencilBuffer,this.resolveDepthBuffer=p.resolveDepthBuffer,this.resolveStencilBuffer=p.resolveStencilBuffer,this.depthTexture=p.depthTexture,this.samples=p.samples}get texture(){return this.textures[0]}set texture(a){this.textures[0]=a}setSize(a,h,p=1){if(this.width!==a||this.height!==h||this.depth!==p){this.width=a,this.height=h,this.depth=p;for(let m=0,g=this.textures.length;m<g;m++)this.textures[m].image.width=a,this.textures[m].image.height=h,this.textures[m].image.depth=p;this.dispose()}this.viewport.set(0,0,a,h),this.scissor.set(0,0,a,h)}clone(){return new this.constructor().copy(this)}copy(a){this.width=a.width,this.height=a.height,this.depth=a.depth,this.scissor.copy(a.scissor),this.scissorTest=a.scissorTest,this.viewport.copy(a.viewport),this.textures.length=0;for(let p=0,m=a.textures.length;p<m;p++)this.textures[p]=a.textures[p].clone(),this.textures[p].isRenderTargetTexture=!0;let h=Object.assign({},a.texture.image);if(this.texture.source=new Vr(h),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,a.depthTexture!==null)this.depthTexture=a.depthTexture.clone();return this.samples=a.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Fo{constructor(a=1,h=1,p={}){super(a,h,p);this.isWebGLRenderTarget=!0}}class Xr extends Ge{constructor(a=null,h=1,p=1,m=1){super(null);this.isDataArrayTexture=!0,this.image={data:a,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(a){this.layerUpdates.add(a)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oo extends Ge{constructor(a=null,h=1,p=1,m=1){super(null);this.isData3DTexture=!0,this.image={data:a,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(a=0,h=0,p=0,m=1){this.isQuaternion=!0,this._x=a,this._y=h,this._z=p,this._w=m}static slerpFlat(a,h,p,m,g,_,y){let x=p[m+0],M=p[m+1],S=p[m+2],E=p[m+3],v=g[_+0],b=g[_+1],A=g[_+2],P=g[_+3];if(y===0){a[h+0]=x,a[h+1]=M,a[h+2]=S,a[h+3]=E;return}if(y===1){a[h+0]=v,a[h+1]=b,a[h+2]=A,a[h+3]=P;return}if(E!==P||x!==v||M!==b||S!==A){let I=1-y,T=x*v+M*b+S*A+E*P,w=T>=0?1:-1,W=1-T*T;if(W>Number.EPSILON){let k=Math.sqrt(W),rt=Math.atan2(k,T*w);I=Math.sin(I*rt)/k,y=Math.sin(y*rt)/k}let F=y*w;if(x=x*I+v*F,M=M*I+b*F,S=S*I+A*F,E=E*I+P*F,I===1-y){let k=1/Math.sqrt(x*x+M*M+S*S+E*E);x*=k,M*=k,S*=k,E*=k}}a[h]=x,a[h+1]=M,a[h+2]=S,a[h+3]=E}static multiplyQuaternionsFlat(a,h,p,m,g,_){let y=p[m],x=p[m+1],M=p[m+2],S=p[m+3],E=g[_],v=g[_+1],b=g[_+2],A=g[_+3];return a[h]=y*A+S*E+x*b-M*v,a[h+1]=x*A+S*v+M*E-y*b,a[h+2]=M*A+S*b+y*v-x*E,a[h+3]=S*A-y*E-x*v-M*b,a}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get w(){return this._w}set w(a){this._w=a,this._onChangeCallback()}set(a,h,p,m){return this._x=a,this._y=h,this._z=p,this._w=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this._onChangeCallback(),this}setFromEuler(a,h=!0){let{_x:p,_y:m,_z:g,_order:_}=a,{cos:y,sin:x}=Math,M=y(p/2),S=y(m/2),E=y(g/2),v=x(p/2),b=x(m/2),A=x(g/2);switch(_){case"XYZ":this._x=v*S*E+M*b*A,this._y=M*b*E-v*S*A,this._z=M*S*A+v*b*E,this._w=M*S*E-v*b*A;break;case"YXZ":this._x=v*S*E+M*b*A,this._y=M*b*E-v*S*A,this._z=M*S*A-v*b*E,this._w=M*S*E+v*b*A;break;case"ZXY":this._x=v*S*E-M*b*A,this._y=M*b*E+v*S*A,this._z=M*S*A+v*b*E,this._w=M*S*E-v*b*A;break;case"ZYX":this._x=v*S*E-M*b*A,this._y=M*b*E+v*S*A,this._z=M*S*A-v*b*E,this._w=M*S*E+v*b*A;break;case"YZX":this._x=v*S*E+M*b*A,this._y=M*b*E+v*S*A,this._z=M*S*A-v*b*E,this._w=M*S*E-v*b*A;break;case"XZY":this._x=v*S*E-M*b*A,this._y=M*b*E-v*S*A,this._z=M*S*A+v*b*E,this._w=M*S*E+v*b*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+_)}if(h===!0)this._onChangeCallback();return this}setFromAxisAngle(a,h){let p=h/2,m=Math.sin(p);return this._x=a.x*m,this._y=a.y*m,this._z=a.z*m,this._w=Math.cos(p),this._onChangeCallback(),this}setFromRotationMatrix(a){let h=a.elements,p=h[0],m=h[4],g=h[8],_=h[1],y=h[5],x=h[9],M=h[2],S=h[6],E=h[10],v=p+y+E;if(v>0){let b=0.5/Math.sqrt(v+1);this._w=0.25/b,this._x=(S-x)*b,this._y=(g-M)*b,this._z=(_-m)*b}else if(p>y&&p>E){let b=2*Math.sqrt(1+p-y-E);this._w=(S-x)/b,this._x=0.25*b,this._y=(m+_)/b,this._z=(g+M)/b}else if(y>E){let b=2*Math.sqrt(1+y-p-E);this._w=(g-M)/b,this._x=(m+_)/b,this._y=0.25*b,this._z=(x+S)/b}else{let b=2*Math.sqrt(1+E-p-y);this._w=(_-m)/b,this._x=(g+M)/b,this._y=(x+S)/b,this._z=0.25*b}return this._onChangeCallback(),this}setFromUnitVectors(a,h){let p=a.dot(h)+1;if(p<Number.EPSILON)if(p=0,Math.abs(a.x)>Math.abs(a.z))this._x=-a.y,this._y=a.x,this._z=0,this._w=p;else this._x=0,this._y=-a.z,this._z=a.y,this._w=p;else this._x=a.y*h.z-a.z*h.y,this._y=a.z*h.x-a.x*h.z,this._z=a.x*h.y-a.y*h.x,this._w=p;return this.normalize()}angleTo(a){return 2*Math.acos(Math.abs(Pe(this.dot(a),-1,1)))}rotateTowards(a,h){let p=this.angleTo(a);if(p===0)return this;let m=Math.min(1,h/p);return this.slerp(a,m),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let a=this.length();if(a===0)this._x=0,this._y=0,this._z=0,this._w=1;else a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a;return this._onChangeCallback(),this}multiply(a){return this.multiplyQuaternions(this,a)}premultiply(a){return this.multiplyQuaternions(a,this)}multiplyQuaternions(a,h){let{_x:p,_y:m,_z:g,_w:_}=a,{_x:y,_y:x,_z:M,_w:S}=h;return this._x=p*S+_*y+m*M-g*x,this._y=m*S+_*x+g*y-p*M,this._z=g*S+_*M+p*x-m*y,this._w=_*S-p*y-m*x-g*M,this._onChangeCallback(),this}slerp(a,h){if(h===0)return this;if(h===1)return this.copy(a);let p=this._x,m=this._y,g=this._z,_=this._w,y=_*a._w+p*a._x+m*a._y+g*a._z;if(y<0)this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,y=-y;else this.copy(a);if(y>=1)return this._w=_,this._x=p,this._y=m,this._z=g,this;let x=1-y*y;if(x<=Number.EPSILON){let b=1-h;return this._w=b*_+h*this._w,this._x=b*p+h*this._x,this._y=b*m+h*this._y,this._z=b*g+h*this._z,this.normalize(),this}let M=Math.sqrt(x),S=Math.atan2(M,y),E=Math.sin((1-h)*S)/M,v=Math.sin(h*S)/M;return this._w=_*E+this._w*v,this._x=p*E+this._x*v,this._y=m*E+this._y*v,this._z=g*E+this._z*v,this._onChangeCallback(),this}slerpQuaternions(a,h,p){return this.copy(a).slerp(h,p)}random(){let a=2*Math.PI*Math.random(),h=2*Math.PI*Math.random(),p=Math.random(),m=Math.sqrt(1-p),g=Math.sqrt(p);return this.set(m*Math.sin(a),m*Math.cos(a),g*Math.sin(h),g*Math.cos(h))}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w}fromArray(a,h=0){return this._x=a[h],this._y=a[h+1],this._z=a[h+2],this._w=a[h+3],this._onChangeCallback(),this}toArray(a=[],h=0){return a[h]=this._x,a[h+1]=this._y,a[h+2]=this._z,a[h+3]=this._w,a}fromBufferAttribute(a,h){return this._x=a.getX(h),this._y=a.getY(h),this._z=a.getZ(h),this._w=a.getW(h),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(a=0,h=0,p=0){q.prototype.isVector3=!0,this.x=a,this.y=h,this.z=p}set(a,h,p){if(p===void 0)p=this.z;return this.x=a,this.y=h,this.z=p,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this.z=a.z+h.z,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this.z+=a.z*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this.z=a.z-h.z,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this}multiplyVectors(a,h){return this.x=a.x*h.x,this.y=a.y*h.y,this.z=a.z*h.z,this}applyEuler(a){return this.applyQuaternion(Da.setFromEuler(a))}applyAxisAngle(a,h){return this.applyQuaternion(Da.setFromAxisAngle(a,h))}applyMatrix3(a){let h=this.x,p=this.y,m=this.z,g=a.elements;return this.x=g[0]*h+g[3]*p+g[6]*m,this.y=g[1]*h+g[4]*p+g[7]*m,this.z=g[2]*h+g[5]*p+g[8]*m,this}applyNormalMatrix(a){return this.applyMatrix3(a).normalize()}applyMatrix4(a){let h=this.x,p=this.y,m=this.z,g=a.elements,_=1/(g[3]*h+g[7]*p+g[11]*m+g[15]);return this.x=(g[0]*h+g[4]*p+g[8]*m+g[12])*_,this.y=(g[1]*h+g[5]*p+g[9]*m+g[13])*_,this.z=(g[2]*h+g[6]*p+g[10]*m+g[14])*_,this}applyQuaternion(a){let h=this.x,p=this.y,m=this.z,{x:g,y:_,z:y,w:x}=a,M=2*(_*m-y*p),S=2*(y*h-g*m),E=2*(g*p-_*h);return this.x=h+x*M+_*E-y*S,this.y=p+x*S+y*M-g*E,this.z=m+x*E+g*S-_*M,this}project(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)}unproject(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)}transformDirection(a){let h=this.x,p=this.y,m=this.z,g=a.elements;return this.x=g[0]*h+g[4]*p+g[8]*m,this.y=g[1]*h+g[5]*p+g[9]*m,this.z=g[2]*h+g[6]*p+g[10]*m,this.normalize()}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this}divideScalar(a){return this.multiplyScalar(1/a)}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this.z=Math.max(a.z,Math.min(h.z,this.z)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this.z=Math.max(a,Math.min(h,this.z)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this.z+=(a.z-this.z)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this.z=a.z+(h.z-a.z)*p,this}cross(a){return this.crossVectors(this,a)}crossVectors(a,h){let{x:p,y:m,z:g}=a,{x:_,y,z:x}=h;return this.x=m*x-g*y,this.y=g*_-p*x,this.z=p*y-m*_,this}projectOnVector(a){let h=a.lengthSq();if(h===0)return this.set(0,0,0);let p=a.dot(this)/h;return this.copy(a).multiplyScalar(p)}projectOnPlane(a){return rr.copy(this).projectOnVector(a),this.sub(rr)}reflect(a){return this.sub(rr.copy(a).multiplyScalar(2*this.dot(a)))}angleTo(a){let h=Math.sqrt(this.lengthSq()*a.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(a)/h;return Math.acos(Pe(p,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){let h=this.x-a.x,p=this.y-a.y,m=this.z-a.z;return h*h+p*p+m*m}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)}setFromSpherical(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)}setFromSphericalCoords(a,h,p){let m=Math.sin(h)*a;return this.x=m*Math.sin(p),this.y=Math.cos(h)*a,this.z=m*Math.cos(p),this}setFromCylindrical(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)}setFromCylindricalCoords(a,h,p){return this.x=a*Math.sin(h),this.y=p,this.z=a*Math.cos(h),this}setFromMatrixPosition(a){let h=a.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this}setFromMatrixScale(a){let h=this.setFromMatrixColumn(a,0).length(),p=this.setFromMatrixColumn(a,1).length(),m=this.setFromMatrixColumn(a,2).length();return this.x=h,this.y=p,this.z=m,this}setFromMatrixColumn(a,h){return this.fromArray(a.elements,h*4)}setFromMatrix3Column(a,h){return this.fromArray(a.elements,h*3)}setFromEuler(a){return this.x=a._x,this.y=a._y,this.z=a._z,this}setFromColor(a){return this.x=a.r,this.y=a.g,this.z=a.b,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this.z=a[h+2],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a[h+2]=this.z,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this.z=a.getZ(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let a=Math.random()*Math.PI*2,h=Math.random()*2-1,p=Math.sqrt(1-h*h);return this.x=p*Math.cos(a),this.y=h,this.z=p*Math.sin(a),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var rr=new q,Da=new yn;class kn{constructor(a=new q(1/0,1/0,1/0),h=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=a,this.max=h}set(a,h){return this.min.copy(a),this.max.copy(h),this}setFromArray(a){this.makeEmpty();for(let h=0,p=a.length;h<p;h+=3)this.expandByPoint(an.fromArray(a,h));return this}setFromBufferAttribute(a){this.makeEmpty();for(let h=0,p=a.count;h<p;h++)this.expandByPoint(an.fromBufferAttribute(a,h));return this}setFromPoints(a){this.makeEmpty();for(let h=0,p=a.length;h<p;h++)this.expandByPoint(a[h]);return this}setFromCenterAndSize(a,h){let p=an.copy(h).multiplyScalar(0.5);return this.min.copy(a).sub(p),this.max.copy(a).add(p),this}setFromObject(a,h=!1){return this.makeEmpty(),this.expandByObject(a,h)}clone(){return new this.constructor().copy(this)}copy(a){return this.min.copy(a.min),this.max.copy(a.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(a){return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(a){return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)}expandByPoint(a){return this.min.min(a),this.max.max(a),this}expandByVector(a){return this.min.sub(a),this.max.add(a),this}expandByScalar(a){return this.min.addScalar(-a),this.max.addScalar(a),this}expandByObject(a,h=!1){a.updateWorldMatrix(!1,!1);let p=a.geometry;if(p!==void 0){let g=p.getAttribute("position");if(h===!0&&g!==void 0&&a.isInstancedMesh!==!0)for(let _=0,y=g.count;_<y;_++){if(a.isMesh===!0)a.getVertexPosition(_,an);else an.fromBufferAttribute(g,_);an.applyMatrix4(a.matrixWorld),this.expandByPoint(an)}else{if(a.boundingBox!==void 0){if(a.boundingBox===null)a.computeBoundingBox();ls.copy(a.boundingBox)}else{if(p.boundingBox===null)p.computeBoundingBox();ls.copy(p.boundingBox)}ls.applyMatrix4(a.matrixWorld),this.union(ls)}}let m=a.children;for(let g=0,_=m.length;g<_;g++)this.expandByObject(m[g],h);return this}containsPoint(a){return a.x>=this.min.x&&a.x<=this.max.x&&a.y>=this.min.y&&a.y<=this.max.y&&a.z>=this.min.z&&a.z<=this.max.z}containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z}getParameter(a,h){return h.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(a){return a.max.x>=this.min.x&&a.min.x<=this.max.x&&a.max.y>=this.min.y&&a.min.y<=this.max.y&&a.max.z>=this.min.z&&a.min.z<=this.max.z}intersectsSphere(a){return this.clampPoint(a.center,an),an.distanceToSquared(a.center)<=a.radius*a.radius}intersectsPlane(a){let h,p;if(a.normal.x>0)h=a.normal.x*this.min.x,p=a.normal.x*this.max.x;else h=a.normal.x*this.max.x,p=a.normal.x*this.min.x;if(a.normal.y>0)h+=a.normal.y*this.min.y,p+=a.normal.y*this.max.y;else h+=a.normal.y*this.max.y,p+=a.normal.y*this.min.y;if(a.normal.z>0)h+=a.normal.z*this.min.z,p+=a.normal.z*this.max.z;else h+=a.normal.z*this.max.z,p+=a.normal.z*this.min.z;return h<=-a.constant&&p>=-a.constant}intersectsTriangle(a){if(this.isEmpty())return!1;this.getCenter(Oi),cs.subVectors(this.max,Oi),oi.subVectors(a.a,Oi),li.subVectors(a.b,Oi),ci.subVectors(a.c,Oi),Dn.subVectors(li,oi),Ln.subVectors(ci,li),qn.subVectors(oi,ci);let h=[0,-Dn.z,Dn.y,0,-Ln.z,Ln.y,0,-qn.z,qn.y,Dn.z,0,-Dn.x,Ln.z,0,-Ln.x,qn.z,0,-qn.x,-Dn.y,Dn.x,0,-Ln.y,Ln.x,0,-qn.y,qn.x,0];if(!ar(h,oi,li,ci,cs))return!1;if(h=[1,0,0,0,1,0,0,0,1],!ar(h,oi,li,ci,cs))return!1;return hs.crossVectors(Dn,Ln),h=[hs.x,hs.y,hs.z],ar(h,oi,li,ci,cs)}clampPoint(a,h){return h.copy(a).clamp(this.min,this.max)}distanceToPoint(a){return this.clampPoint(a,an).distanceTo(a)}getBoundingSphere(a){if(this.isEmpty())a.makeEmpty();else this.getCenter(a.center),a.radius=this.getSize(an).length()*0.5;return a}intersect(a){if(this.min.max(a.min),this.max.min(a.max),this.isEmpty())this.makeEmpty();return this}union(a){return this.min.min(a.min),this.max.max(a.max),this}applyMatrix4(a){if(this.isEmpty())return this;return Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a),this.setFromPoints(Sn),this}translate(a){return this.min.add(a),this.max.add(a),this}equals(a){return a.min.equals(this.min)&&a.max.equals(this.max)}}var Sn=[new q,new q,new q,new q,new q,new q,new q,new q],an=new q,ls=new kn,oi=new q,li=new q,ci=new q,Dn=new q,Ln=new q,qn=new q,Oi=new q,cs=new q,hs=new q,Yn=new q;function ar(a,h,p,m,g){for(let _=0,y=a.length-3;_<=y;_+=3){Yn.fromArray(a,_);let x=g.x*Math.abs(Yn.x)+g.y*Math.abs(Yn.y)+g.z*Math.abs(Yn.z),M=h.dot(Yn),S=p.dot(Yn),E=m.dot(Yn);if(Math.max(-Math.max(M,S,E),Math.min(M,S,E))>x)return!1}return!0}var Ql=new kn,Bi=new q,or=new q;class es{constructor(a=new q,h=-1){this.isSphere=!0,this.center=a,this.radius=h}set(a,h){return this.center.copy(a),this.radius=h,this}setFromPoints(a,h){let p=this.center;if(h!==void 0)p.copy(h);else Ql.setFromPoints(a).getCenter(p);let m=0;for(let g=0,_=a.length;g<_;g++)m=Math.max(m,p.distanceToSquared(a[g]));return this.radius=Math.sqrt(m),this}copy(a){return this.center.copy(a.center),this.radius=a.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(a){return a.distanceTo(this.center)-this.radius}intersectsSphere(a){let h=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=h*h}intersectsBox(a){return a.intersectsSphere(this)}intersectsPlane(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius}clampPoint(a,h){let p=this.center.distanceToSquared(a);if(h.copy(a),p>this.radius*this.radius)h.sub(this.center).normalize(),h.multiplyScalar(this.radius).add(this.center);return h}getBoundingBox(a){if(this.isEmpty())return a.makeEmpty(),a;return a.set(this.center,this.center),a.expandByScalar(this.radius),a}applyMatrix4(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this}translate(a){return this.center.add(a),this}expandByPoint(a){if(this.isEmpty())return this.center.copy(a),this.radius=0,this;Bi.subVectors(a,this.center);let h=Bi.lengthSq();if(h>this.radius*this.radius){let p=Math.sqrt(h),m=(p-this.radius)*0.5;this.center.addScaledVector(Bi,m/p),this.radius+=m}return this}union(a){if(a.isEmpty())return this;if(this.isEmpty())return this.copy(a),this;if(this.center.equals(a.center)===!0)this.radius=Math.max(this.radius,a.radius);else or.subVectors(a.center,this.center).setLength(a.radius),this.expandByPoint(Bi.copy(a.center).add(or)),this.expandByPoint(Bi.copy(a.center).sub(or));return this}equals(a){return a.center.equals(this.center)&&a.radius===this.radius}clone(){return new this.constructor().copy(this)}}var En=new q,lr=new q,us=new q,Un=new q,cr=new q,ds=new q,hr=new q;class Ti{constructor(a=new q,h=new q(0,0,-1)){this.origin=a,this.direction=h}set(a,h){return this.origin.copy(a),this.direction.copy(h),this}copy(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this}at(a,h){return h.copy(this.origin).addScaledVector(this.direction,a)}lookAt(a){return this.direction.copy(a).sub(this.origin).normalize(),this}recast(a){return this.origin.copy(this.at(a,En)),this}closestPointToPoint(a,h){h.subVectors(a,this.origin);let p=h.dot(this.direction);if(p<0)return h.copy(this.origin);return h.copy(this.origin).addScaledVector(this.direction,p)}distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a))}distanceSqToPoint(a){let h=En.subVectors(a,this.origin).dot(this.direction);if(h<0)return this.origin.distanceToSquared(a);return En.copy(this.origin).addScaledVector(this.direction,h),En.distanceToSquared(a)}distanceSqToSegment(a,h,p,m){lr.copy(a).add(h).multiplyScalar(0.5),us.copy(h).sub(a).normalize(),Un.copy(this.origin).sub(lr);let g=a.distanceTo(h)*0.5,_=-this.direction.dot(us),y=Un.dot(this.direction),x=-Un.dot(us),M=Un.lengthSq(),S=Math.abs(1-_*_),E,v,b,A;if(S>0)if(E=_*x-y,v=_*y-x,A=g*S,E>=0)if(v>=-A)if(v<=A){let P=1/S;E*=P,v*=P,b=E*(E+_*v+2*y)+v*(_*E+v+2*x)+M}else v=g,E=Math.max(0,-(_*v+y)),b=-E*E+v*(v+2*x)+M;else v=-g,E=Math.max(0,-(_*v+y)),b=-E*E+v*(v+2*x)+M;else if(v<=-A)E=Math.max(0,-(-_*g+y)),v=E>0?-g:Math.min(Math.max(-g,-x),g),b=-E*E+v*(v+2*x)+M;else if(v<=A)E=0,v=Math.min(Math.max(-g,-x),g),b=v*(v+2*x)+M;else E=Math.max(0,-(_*g+y)),v=E>0?g:Math.min(Math.max(-g,-x),g),b=-E*E+v*(v+2*x)+M;else v=_>0?-g:g,E=Math.max(0,-(_*v+y)),b=-E*E+v*(v+2*x)+M;if(p)p.copy(this.origin).addScaledVector(this.direction,E);if(m)m.copy(lr).addScaledVector(us,v);return b}intersectSphere(a,h){En.subVectors(a.center,this.origin);let p=En.dot(this.direction),m=En.dot(En)-p*p,g=a.radius*a.radius;if(m>g)return null;let _=Math.sqrt(g-m),y=p-_,x=p+_;if(x<0)return null;if(y<0)return this.at(x,h);return this.at(y,h)}intersectsSphere(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius}distanceToPlane(a){let h=a.normal.dot(this.direction);if(h===0){if(a.distanceToPoint(this.origin)===0)return 0;return null}let p=-(this.origin.dot(a.normal)+a.constant)/h;return p>=0?p:null}intersectPlane(a,h){let p=this.distanceToPlane(a);if(p===null)return null;return this.at(p,h)}intersectsPlane(a){let h=a.distanceToPoint(this.origin);if(h===0)return!0;if(a.normal.dot(this.direction)*h<0)return!0;return!1}intersectBox(a,h){let p,m,g,_,y,x,M=1/this.direction.x,S=1/this.direction.y,E=1/this.direction.z,v=this.origin;if(M>=0)p=(a.min.x-v.x)*M,m=(a.max.x-v.x)*M;else p=(a.max.x-v.x)*M,m=(a.min.x-v.x)*M;if(S>=0)g=(a.min.y-v.y)*S,_=(a.max.y-v.y)*S;else g=(a.max.y-v.y)*S,_=(a.min.y-v.y)*S;if(p>_||g>m)return null;if(g>p||isNaN(p))p=g;if(_<m||isNaN(m))m=_;if(E>=0)y=(a.min.z-v.z)*E,x=(a.max.z-v.z)*E;else y=(a.max.z-v.z)*E,x=(a.min.z-v.z)*E;if(p>x||y>m)return null;if(y>p||p!==p)p=y;if(x<m||m!==m)m=x;if(m<0)return null;return this.at(p>=0?p:m,h)}intersectsBox(a){return this.intersectBox(a,En)!==null}intersectTriangle(a,h,p,m,g){cr.subVectors(h,a),ds.subVectors(p,a),hr.crossVectors(cr,ds);let _=this.direction.dot(hr),y;if(_>0){if(m)return null;y=1}else if(_<0)y=-1,_=-_;else return null;Un.subVectors(this.origin,a);let x=y*this.direction.dot(ds.crossVectors(Un,ds));if(x<0)return null;let M=y*this.direction.dot(cr.cross(Un));if(M<0)return null;if(x+M>_)return null;let S=-y*Un.dot(hr);if(S<0)return null;return this.at(S/_,g)}applyMatrix4(a){return this.origin.applyMatrix4(a),this.direction.transformDirection(a),this}equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(a,h,p,m,g,_,y,x,M,S,E,v,b,A,P,I){if(Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],a!==void 0)this.set(a,h,p,m,g,_,y,x,M,S,E,v,b,A,P,I)}set(a,h,p,m,g,_,y,x,M,S,E,v,b,A,P,I){let T=this.elements;return T[0]=a,T[4]=h,T[8]=p,T[12]=m,T[1]=g,T[5]=_,T[9]=y,T[13]=x,T[2]=M,T[6]=S,T[10]=E,T[14]=v,T[3]=b,T[7]=A,T[11]=P,T[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(a){let h=this.elements,p=a.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],h[9]=p[9],h[10]=p[10],h[11]=p[11],h[12]=p[12],h[13]=p[13],h[14]=p[14],h[15]=p[15],this}copyPosition(a){let h=this.elements,p=a.elements;return h[12]=p[12],h[13]=p[13],h[14]=p[14],this}setFromMatrix3(a){let h=a.elements;return this.set(h[0],h[3],h[6],0,h[1],h[4],h[7],0,h[2],h[5],h[8],0,0,0,0,1),this}extractBasis(a,h,p){return a.setFromMatrixColumn(this,0),h.setFromMatrixColumn(this,1),p.setFromMatrixColumn(this,2),this}makeBasis(a,h,p){return this.set(a.x,h.x,p.x,0,a.y,h.y,p.y,0,a.z,h.z,p.z,0,0,0,0,1),this}extractRotation(a){let h=this.elements,p=a.elements,m=1/hi.setFromMatrixColumn(a,0).length(),g=1/hi.setFromMatrixColumn(a,1).length(),_=1/hi.setFromMatrixColumn(a,2).length();return h[0]=p[0]*m,h[1]=p[1]*m,h[2]=p[2]*m,h[3]=0,h[4]=p[4]*g,h[5]=p[5]*g,h[6]=p[6]*g,h[7]=0,h[8]=p[8]*_,h[9]=p[9]*_,h[10]=p[10]*_,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromEuler(a){let h=this.elements,{x:p,y:m,z:g}=a,_=Math.cos(p),y=Math.sin(p),x=Math.cos(m),M=Math.sin(m),S=Math.cos(g),E=Math.sin(g);if(a.order==="XYZ"){let v=_*S,b=_*E,A=y*S,P=y*E;h[0]=x*S,h[4]=-x*E,h[8]=M,h[1]=b+A*M,h[5]=v-P*M,h[9]=-y*x,h[2]=P-v*M,h[6]=A+b*M,h[10]=_*x}else if(a.order==="YXZ"){let v=x*S,b=x*E,A=M*S,P=M*E;h[0]=v+P*y,h[4]=A*y-b,h[8]=_*M,h[1]=_*E,h[5]=_*S,h[9]=-y,h[2]=b*y-A,h[6]=P+v*y,h[10]=_*x}else if(a.order==="ZXY"){let v=x*S,b=x*E,A=M*S,P=M*E;h[0]=v-P*y,h[4]=-_*E,h[8]=A+b*y,h[1]=b+A*y,h[5]=_*S,h[9]=P-v*y,h[2]=-_*M,h[6]=y,h[10]=_*x}else if(a.order==="ZYX"){let v=_*S,b=_*E,A=y*S,P=y*E;h[0]=x*S,h[4]=A*M-b,h[8]=v*M+P,h[1]=x*E,h[5]=P*M+v,h[9]=b*M-A,h[2]=-M,h[6]=y*x,h[10]=_*x}else if(a.order==="YZX"){let v=_*x,b=_*M,A=y*x,P=y*M;h[0]=x*S,h[4]=P-v*E,h[8]=A*E+b,h[1]=E,h[5]=_*S,h[9]=-y*S,h[2]=-M*S,h[6]=b*E+A,h[10]=v-P*E}else if(a.order==="XZY"){let v=_*x,b=_*M,A=y*x,P=y*M;h[0]=x*S,h[4]=-E,h[8]=M*S,h[1]=v*E+P,h[5]=_*S,h[9]=b*E-A,h[2]=A*E-b,h[6]=y*S,h[10]=P*E+v}return h[3]=0,h[7]=0,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromQuaternion(a){return this.compose(tc,a,ec)}lookAt(a,h,p){let m=this.elements;if(Je.subVectors(a,h),Je.lengthSq()===0)Je.z=1;if(Je.normalize(),Nn.crossVectors(p,Je),Nn.lengthSq()===0){if(Math.abs(p.z)===1)Je.x+=0.0001;else Je.z+=0.0001;Je.normalize(),Nn.crossVectors(p,Je)}return Nn.normalize(),fs.crossVectors(Je,Nn),m[0]=Nn.x,m[4]=fs.x,m[8]=Je.x,m[1]=Nn.y,m[5]=fs.y,m[9]=Je.y,m[2]=Nn.z,m[6]=fs.z,m[10]=Je.z,this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,h){let p=a.elements,m=h.elements,g=this.elements,_=p[0],y=p[4],x=p[8],M=p[12],S=p[1],E=p[5],v=p[9],b=p[13],A=p[2],P=p[6],I=p[10],T=p[14],w=p[3],W=p[7],F=p[11],k=p[15],rt=m[0],X=m[4],Y=m[8],lt=m[12],O=m[1],B=m[5],Q=m[9],at=m[13],ot=m[2],ct=m[6],dt=m[10],K=m[14],st=m[3],Z=m[7],Rt=m[11],U=m[15];return g[0]=_*rt+y*O+x*ot+M*st,g[4]=_*X+y*B+x*ct+M*Z,g[8]=_*Y+y*Q+x*dt+M*Rt,g[12]=_*lt+y*at+x*K+M*U,g[1]=S*rt+E*O+v*ot+b*st,g[5]=S*X+E*B+v*ct+b*Z,g[9]=S*Y+E*Q+v*dt+b*Rt,g[13]=S*lt+E*at+v*K+b*U,g[2]=A*rt+P*O+I*ot+T*st,g[6]=A*X+P*B+I*ct+T*Z,g[10]=A*Y+P*Q+I*dt+T*Rt,g[14]=A*lt+P*at+I*K+T*U,g[3]=w*rt+W*O+F*ot+k*st,g[7]=w*X+W*B+F*ct+k*Z,g[11]=w*Y+W*Q+F*dt+k*Rt,g[15]=w*lt+W*at+F*K+k*U,this}multiplyScalar(a){let h=this.elements;return h[0]*=a,h[4]*=a,h[8]*=a,h[12]*=a,h[1]*=a,h[5]*=a,h[9]*=a,h[13]*=a,h[2]*=a,h[6]*=a,h[10]*=a,h[14]*=a,h[3]*=a,h[7]*=a,h[11]*=a,h[15]*=a,this}determinant(){let a=this.elements,h=a[0],p=a[4],m=a[8],g=a[12],_=a[1],y=a[5],x=a[9],M=a[13],S=a[2],E=a[6],v=a[10],b=a[14],A=a[3],P=a[7],I=a[11],T=a[15];return A*(+g*x*E-m*M*E-g*y*v+p*M*v+m*y*b-p*x*b)+P*(+h*x*b-h*M*v+g*_*v-m*_*b+m*M*S-g*x*S)+I*(+h*M*E-h*y*b-g*_*E+p*_*b+g*y*S-p*M*S)+T*(-m*y*S-h*x*E+h*y*v+m*_*E-p*_*v+p*x*S)}transpose(){let a=this.elements,h;return h=a[1],a[1]=a[4],a[4]=h,h=a[2],a[2]=a[8],a[8]=h,h=a[6],a[6]=a[9],a[9]=h,h=a[3],a[3]=a[12],a[12]=h,h=a[7],a[7]=a[13],a[13]=h,h=a[11],a[11]=a[14],a[14]=h,this}setPosition(a,h,p){let m=this.elements;if(a.isVector3)m[12]=a.x,m[13]=a.y,m[14]=a.z;else m[12]=a,m[13]=h,m[14]=p;return this}invert(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8],E=a[9],v=a[10],b=a[11],A=a[12],P=a[13],I=a[14],T=a[15],w=E*I*M-P*v*M+P*x*b-y*I*b-E*x*T+y*v*T,W=A*v*M-S*I*M-A*x*b+_*I*b+S*x*T-_*v*T,F=S*P*M-A*E*M+A*y*b-_*P*b-S*y*T+_*E*T,k=A*E*x-S*P*x-A*y*v+_*P*v+S*y*I-_*E*I,rt=h*w+p*W+m*F+g*k;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/rt;return a[0]=w*X,a[1]=(P*v*g-E*I*g-P*m*b+p*I*b+E*m*T-p*v*T)*X,a[2]=(y*I*g-P*x*g+P*m*M-p*I*M-y*m*T+p*x*T)*X,a[3]=(E*x*g-y*v*g-E*m*M+p*v*M+y*m*b-p*x*b)*X,a[4]=W*X,a[5]=(S*I*g-A*v*g+A*m*b-h*I*b-S*m*T+h*v*T)*X,a[6]=(A*x*g-_*I*g-A*m*M+h*I*M+_*m*T-h*x*T)*X,a[7]=(_*v*g-S*x*g+S*m*M-h*v*M-_*m*b+h*x*b)*X,a[8]=F*X,a[9]=(A*E*g-S*P*g-A*p*b+h*P*b+S*p*T-h*E*T)*X,a[10]=(_*P*g-A*y*g+A*p*M-h*P*M-_*p*T+h*y*T)*X,a[11]=(S*y*g-_*E*g-S*p*M+h*E*M+_*p*b-h*y*b)*X,a[12]=k*X,a[13]=(S*P*m-A*E*m+A*p*v-h*P*v-S*p*I+h*E*I)*X,a[14]=(A*y*m-_*P*m-A*p*x+h*P*x+_*p*I-h*y*I)*X,a[15]=(_*E*m-S*y*m+S*p*x-h*E*x-_*p*v+h*y*v)*X,this}scale(a){let h=this.elements,{x:p,y:m,z:g}=a;return h[0]*=p,h[4]*=m,h[8]*=g,h[1]*=p,h[5]*=m,h[9]*=g,h[2]*=p,h[6]*=m,h[10]*=g,h[3]*=p,h[7]*=m,h[11]*=g,this}getMaxScaleOnAxis(){let a=this.elements,h=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],p=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],m=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(h,p,m))}makeTranslation(a,h,p){if(a.isVector3)this.set(1,0,0,a.x,0,1,0,a.y,0,0,1,a.z,0,0,0,1);else this.set(1,0,0,a,0,1,0,h,0,0,1,p,0,0,0,1);return this}makeRotationX(a){let h=Math.cos(a),p=Math.sin(a);return this.set(1,0,0,0,0,h,-p,0,0,p,h,0,0,0,0,1),this}makeRotationY(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,0,p,0,0,1,0,0,-p,0,h,0,0,0,0,1),this}makeRotationZ(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,-p,0,0,p,h,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(a,h){let p=Math.cos(h),m=Math.sin(h),g=1-p,{x:_,y,z:x}=a,M=g*_,S=g*y;return this.set(M*_+p,M*y-m*x,M*x+m*y,0,M*y+m*x,S*y+p,S*x-m*_,0,M*x-m*y,S*x+m*_,g*x*x+p,0,0,0,0,1),this}makeScale(a,h,p){return this.set(a,0,0,0,0,h,0,0,0,0,p,0,0,0,0,1),this}makeShear(a,h,p,m,g,_){return this.set(1,p,g,0,a,1,_,0,h,m,1,0,0,0,0,1),this}compose(a,h,p){let m=this.elements,{_x:g,_y:_,_z:y,_w:x}=h,M=g+g,S=_+_,E=y+y,v=g*M,b=g*S,A=g*E,P=_*S,I=_*E,T=y*E,w=x*M,W=x*S,F=x*E,{x:k,y:rt,z:X}=p;return m[0]=(1-(P+T))*k,m[1]=(b+F)*k,m[2]=(A-W)*k,m[3]=0,m[4]=(b-F)*rt,m[5]=(1-(v+T))*rt,m[6]=(I+w)*rt,m[7]=0,m[8]=(A+W)*X,m[9]=(I-w)*X,m[10]=(1-(v+P))*X,m[11]=0,m[12]=a.x,m[13]=a.y,m[14]=a.z,m[15]=1,this}decompose(a,h,p){let m=this.elements,g=hi.set(m[0],m[1],m[2]).length(),_=hi.set(m[4],m[5],m[6]).length(),y=hi.set(m[8],m[9],m[10]).length();if(this.determinant()<0)g=-g;a.x=m[12],a.y=m[13],a.z=m[14],on.copy(this);let M=1/g,S=1/_,E=1/y;return on.elements[0]*=M,on.elements[1]*=M,on.elements[2]*=M,on.elements[4]*=S,on.elements[5]*=S,on.elements[6]*=S,on.elements[8]*=E,on.elements[9]*=E,on.elements[10]*=E,h.setFromRotationMatrix(on),p.x=g,p.y=_,p.z=y,this}makePerspective(a,h,p,m,g,_,y=2000){let x=this.elements,M=2*g/(h-a),S=2*g/(p-m),E=(h+a)/(h-a),v=(p+m)/(p-m),b,A;if(y===2000)b=-(_+g)/(_-g),A=-2*_*g/(_-g);else if(y===2001)b=-_/(_-g),A=-_*g/(_-g);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+y);return x[0]=M,x[4]=0,x[8]=E,x[12]=0,x[1]=0,x[5]=S,x[9]=v,x[13]=0,x[2]=0,x[6]=0,x[10]=b,x[14]=A,x[3]=0,x[7]=0,x[11]=-1,x[15]=0,this}makeOrthographic(a,h,p,m,g,_,y=2000){let x=this.elements,M=1/(h-a),S=1/(p-m),E=1/(_-g),v=(h+a)*M,b=(p+m)*S,A,P;if(y===2000)A=(_+g)*E,P=-2*E;else if(y===2001)A=g*E,P=-1*E;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+y);return x[0]=2*M,x[4]=0,x[8]=0,x[12]=-v,x[1]=0,x[5]=2*S,x[9]=0,x[13]=-b,x[2]=0,x[6]=0,x[10]=P,x[14]=-A,x[3]=0,x[7]=0,x[11]=0,x[15]=1,this}equals(a){let h=this.elements,p=a.elements;for(let m=0;m<16;m++)if(h[m]!==p[m])return!1;return!0}fromArray(a,h=0){for(let p=0;p<16;p++)this.elements[p]=a[p+h];return this}toArray(a=[],h=0){let p=this.elements;return a[h]=p[0],a[h+1]=p[1],a[h+2]=p[2],a[h+3]=p[3],a[h+4]=p[4],a[h+5]=p[5],a[h+6]=p[6],a[h+7]=p[7],a[h+8]=p[8],a[h+9]=p[9],a[h+10]=p[10],a[h+11]=p[11],a[h+12]=p[12],a[h+13]=p[13],a[h+14]=p[14],a[h+15]=p[15],a}}var hi=new q,on=new Se,tc=new q(0,0,0),ec=new q(1,1,1),Nn=new q,fs=new q,Je=new q,La=new Se,Ua=new yn;class _n{constructor(a=0,h=0,p=0,m=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=a,this._y=h,this._z=p,this._order=m}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get order(){return this._order}set order(a){this._order=a,this._onChangeCallback()}set(a,h,p,m=this._order){return this._x=a,this._y=h,this._z=p,this._order=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this._onChangeCallback(),this}setFromRotationMatrix(a,h=this._order,p=!0){let m=a.elements,g=m[0],_=m[4],y=m[8],x=m[1],M=m[5],S=m[9],E=m[2],v=m[6],b=m[10];switch(h){case"XYZ":if(this._y=Math.asin(Pe(y,-1,1)),Math.abs(y)<0.9999999)this._x=Math.atan2(-S,b),this._z=Math.atan2(-_,g);else this._x=Math.atan2(v,M),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Pe(S,-1,1)),Math.abs(S)<0.9999999)this._y=Math.atan2(y,b),this._z=Math.atan2(x,M);else this._y=Math.atan2(-E,g),this._z=0;break;case"ZXY":if(this._x=Math.asin(Pe(v,-1,1)),Math.abs(v)<0.9999999)this._y=Math.atan2(-E,b),this._z=Math.atan2(-_,M);else this._y=0,this._z=Math.atan2(x,g);break;case"ZYX":if(this._y=Math.asin(-Pe(E,-1,1)),Math.abs(E)<0.9999999)this._x=Math.atan2(v,b),this._z=Math.atan2(x,g);else this._x=0,this._z=Math.atan2(-_,M);break;case"YZX":if(this._z=Math.asin(Pe(x,-1,1)),Math.abs(x)<0.9999999)this._x=Math.atan2(-S,M),this._y=Math.atan2(-E,g);else this._x=0,this._y=Math.atan2(y,b);break;case"XZY":if(this._z=Math.asin(-Pe(_,-1,1)),Math.abs(_)<0.9999999)this._x=Math.atan2(v,M),this._y=Math.atan2(y,g);else this._x=Math.atan2(-S,b),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+h)}if(this._order=h,p===!0)this._onChangeCallback();return this}setFromQuaternion(a,h,p){return La.makeRotationFromQuaternion(a),this.setFromRotationMatrix(La,h,p)}setFromVector3(a,h=this._order){return this.set(a.x,a.y,a.z,h)}reorder(a){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,a)}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order}fromArray(a){if(this._x=a[0],this._y=a[1],this._z=a[2],a[3]!==void 0)this._order=a[3];return this._onChangeCallback(),this}toArray(a=[],h=0){return a[h]=this._x,a[h+1]=this._y,a[h+2]=this._z,a[h+3]=this._order,a}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class ks{constructor(){this.mask=1}set(a){this.mask=(1<<a|0)>>>0}enable(a){this.mask|=1<<a|0}enableAll(){this.mask=-1}toggle(a){this.mask^=1<<a|0}disable(a){this.mask&=~(1<<a|0)}disableAll(){this.mask=0}test(a){return(this.mask&a.mask)!==0}isEnabled(a){return(this.mask&(1<<a|0))!==0}}var nc=0,Na=new q,ui=new yn,bn=new Se,ps=new q,zi=new q,ic=new q,sc=new yn,Fa=new q(1,0,0),Oa=new q(0,1,0),Ba=new q(0,0,1),za={type:"added"},rc={type:"removed"},di={type:"childadded",child:null},ur={type:"childremoved",child:null};class Ne extends Hn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();let a=new q,h=new _n,p=new yn,m=new q(1,1,1);function g(){p.setFromEuler(h,!1)}function _(){h.setFromQuaternion(p,void 0,!1)}h._onChange(g),p._onChange(_),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:h},quaternion:{configurable:!0,enumerable:!0,value:p},scale:{configurable:!0,enumerable:!0,value:m},modelViewMatrix:{value:new Se},normalMatrix:{value:new le}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(a){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(a),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(a){return this.quaternion.premultiply(a),this}setRotationFromAxisAngle(a,h){this.quaternion.setFromAxisAngle(a,h)}setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0)}setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a)}setRotationFromQuaternion(a){this.quaternion.copy(a)}rotateOnAxis(a,h){return ui.setFromAxisAngle(a,h),this.quaternion.multiply(ui),this}rotateOnWorldAxis(a,h){return ui.setFromAxisAngle(a,h),this.quaternion.premultiply(ui),this}rotateX(a){return this.rotateOnAxis(Fa,a)}rotateY(a){return this.rotateOnAxis(Oa,a)}rotateZ(a){return this.rotateOnAxis(Ba,a)}translateOnAxis(a,h){return Na.copy(a).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(h)),this}translateX(a){return this.translateOnAxis(Fa,a)}translateY(a){return this.translateOnAxis(Oa,a)}translateZ(a){return this.translateOnAxis(Ba,a)}localToWorld(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(this.matrixWorld)}worldToLocal(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(a,h,p){if(a.isVector3)ps.copy(a);else ps.set(a,h,p);let m=this.parent;if(this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)bn.lookAt(zi,ps,this.up);else bn.lookAt(ps,zi,this.up);if(this.quaternion.setFromRotationMatrix(bn),m)bn.extractRotation(m.matrixWorld),ui.setFromRotationMatrix(bn),this.quaternion.premultiply(ui.invert())}add(a){if(arguments.length>1){for(let h=0;h<arguments.length;h++)this.add(arguments[h]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;if(a&&a.isObject3D)a.removeFromParent(),a.parent=this,this.children.push(a),a.dispatchEvent(za),di.child=a,this.dispatchEvent(di),di.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this}remove(a){if(arguments.length>1){for(let p=0;p<arguments.length;p++)this.remove(arguments[p]);return this}let h=this.children.indexOf(a);if(h!==-1)a.parent=null,this.children.splice(h,1),a.dispatchEvent(rc),ur.child=a,this.dispatchEvent(ur),ur.child=null;return this}removeFromParent(){let a=this.parent;if(a!==null)a.remove(this);return this}clear(){return this.remove(...this.children)}attach(a){if(this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),a.parent!==null)a.parent.updateWorldMatrix(!0,!1),bn.multiply(a.parent.matrixWorld);return a.applyMatrix4(bn),a.removeFromParent(),a.parent=this,this.children.push(a),a.updateWorldMatrix(!1,!0),a.dispatchEvent(za),di.child=a,this.dispatchEvent(di),di.child=null,this}getObjectById(a){return this.getObjectByProperty("id",a)}getObjectByName(a){return this.getObjectByProperty("name",a)}getObjectByProperty(a,h){if(this[a]===h)return this;for(let p=0,m=this.children.length;p<m;p++){let _=this.children[p].getObjectByProperty(a,h);if(_!==void 0)return _}return}getObjectsByProperty(a,h,p=[]){if(this[a]===h)p.push(this);let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].getObjectsByProperty(a,h,p);return p}getWorldPosition(a){return this.updateWorldMatrix(!0,!1),a.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,a,ic),a}getWorldScale(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,sc,a),a}getWorldDirection(a){this.updateWorldMatrix(!0,!1);let h=this.matrixWorld.elements;return a.set(h[8],h[9],h[10]).normalize()}raycast(){}traverse(a){a(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverse(a)}traverseVisible(a){if(this.visible===!1)return;a(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverseVisible(a)}traverseAncestors(a){let h=this.parent;if(h!==null)a(h),h.traverseAncestors(a)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(a){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||a){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,a=!0}let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].updateMatrixWorld(a)}updateWorldMatrix(a,h){let p=this.parent;if(a===!0&&p!==null)p.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(h===!0){let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].updateWorldMatrix(!1,!0)}}toJSON(a){let h=a===void 0||typeof a==="string",p={};if(h)a={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},p.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let m={};if(m.uuid=this.uuid,m.type=this.type,this.name!=="")m.name=this.name;if(this.castShadow===!0)m.castShadow=!0;if(this.receiveShadow===!0)m.receiveShadow=!0;if(this.visible===!1)m.visible=!1;if(this.frustumCulled===!1)m.frustumCulled=!1;if(this.renderOrder!==0)m.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)m.userData=this.userData;if(m.layers=this.layers.mask,m.matrix=this.matrix.toArray(),m.up=this.up.toArray(),this.matrixAutoUpdate===!1)m.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(m.type="InstancedMesh",m.count=this.count,m.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)m.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(m.type="BatchedMesh",m.perObjectFrustumCulled=this.perObjectFrustumCulled,m.sortObjects=this.sortObjects,m.drawRanges=this._drawRanges,m.reservedRanges=this._reservedRanges,m.visibility=this._visibility,m.active=this._active,m.bounds=this._bounds.map((y)=>({boxInitialized:y.boxInitialized,boxMin:y.box.min.toArray(),boxMax:y.box.max.toArray(),sphereInitialized:y.sphereInitialized,sphereRadius:y.sphere.radius,sphereCenter:y.sphere.center.toArray()})),m.maxInstanceCount=this._maxInstanceCount,m.maxVertexCount=this._maxVertexCount,m.maxIndexCount=this._maxIndexCount,m.geometryInitialized=this._geometryInitialized,m.geometryCount=this._geometryCount,m.matricesTexture=this._matricesTexture.toJSON(a),this._colorsTexture!==null)m.colorsTexture=this._colorsTexture.toJSON(a);if(this.boundingSphere!==null)m.boundingSphere={center:m.boundingSphere.center.toArray(),radius:m.boundingSphere.radius};if(this.boundingBox!==null)m.boundingBox={min:m.boundingBox.min.toArray(),max:m.boundingBox.max.toArray()}}function g(y,x){if(y[x.uuid]===void 0)y[x.uuid]=x.toJSON(a);return x.uuid}if(this.isScene){if(this.background){if(this.background.isColor)m.background=this.background.toJSON();else if(this.background.isTexture)m.background=this.background.toJSON(a).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)m.environment=this.environment.toJSON(a).uuid}else if(this.isMesh||this.isLine||this.isPoints){m.geometry=g(a.geometries,this.geometry);let y=this.geometry.parameters;if(y!==void 0&&y.shapes!==void 0){let x=y.shapes;if(Array.isArray(x))for(let M=0,S=x.length;M<S;M++){let E=x[M];g(a.shapes,E)}else g(a.shapes,x)}}if(this.isSkinnedMesh){if(m.bindMode=this.bindMode,m.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)g(a.skeletons,this.skeleton),m.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let y=[];for(let x=0,M=this.material.length;x<M;x++)y.push(g(a.materials,this.material[x]));m.material=y}else m.material=g(a.materials,this.material);if(this.children.length>0){m.children=[];for(let y=0;y<this.children.length;y++)m.children.push(this.children[y].toJSON(a).object)}if(this.animations.length>0){m.animations=[];for(let y=0;y<this.animations.length;y++){let x=this.animations[y];m.animations.push(g(a.animations,x))}}if(h){let y=_(a.geometries),x=_(a.materials),M=_(a.textures),S=_(a.images),E=_(a.shapes),v=_(a.skeletons),b=_(a.animations),A=_(a.nodes);if(y.length>0)p.geometries=y;if(x.length>0)p.materials=x;if(M.length>0)p.textures=M;if(S.length>0)p.images=S;if(E.length>0)p.shapes=E;if(v.length>0)p.skeletons=v;if(b.length>0)p.animations=b;if(A.length>0)p.nodes=A}return p.object=m,p;function _(y){let x=[];for(let M in y){let S=y[M];delete S.metadata,x.push(S)}return x}}clone(a){return new this.constructor().copy(this,a)}copy(a,h=!0){if(this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.rotation.order=a.rotation.order,this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldAutoUpdate=a.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.layers.mask=a.layers.mask,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.animations=a.animations.slice(),this.userData=JSON.parse(JSON.stringify(a.userData)),h===!0)for(let p=0;p<a.children.length;p++){let m=a.children[p];this.add(m.clone())}return this}}Ne.DEFAULT_UP=new q(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new q,Tn=new q,dr=new q,wn=new q,fi=new q,pi=new q,Ha=new q,fr=new q,pr=new q,mr=new q,gr=new ye,_r=new ye,xr=new ye;class en{constructor(a=new q,h=new q,p=new q){this.a=a,this.b=h,this.c=p}static getNormal(a,h,p,m){m.subVectors(p,h),ln.subVectors(a,h),m.cross(ln);let g=m.lengthSq();if(g>0)return m.multiplyScalar(1/Math.sqrt(g));return m.set(0,0,0)}static getBarycoord(a,h,p,m,g){ln.subVectors(m,h),Tn.subVectors(p,h),dr.subVectors(a,h);let _=ln.dot(ln),y=ln.dot(Tn),x=ln.dot(dr),M=Tn.dot(Tn),S=Tn.dot(dr),E=_*M-y*y;if(E===0)return g.set(0,0,0),null;let v=1/E,b=(M*x-y*S)*v,A=(_*S-y*x)*v;return g.set(1-b-A,A,b)}static containsPoint(a,h,p,m){if(this.getBarycoord(a,h,p,m,wn)===null)return!1;return wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(a,h,p,m,g,_,y,x){if(this.getBarycoord(a,h,p,m,wn)===null){if(x.x=0,x.y=0,"z"in x)x.z=0;if("w"in x)x.w=0;return null}return x.setScalar(0),x.addScaledVector(g,wn.x),x.addScaledVector(_,wn.y),x.addScaledVector(y,wn.z),x}static getInterpolatedAttribute(a,h,p,m,g,_){return gr.setScalar(0),_r.setScalar(0),xr.setScalar(0),gr.fromBufferAttribute(a,h),_r.fromBufferAttribute(a,p),xr.fromBufferAttribute(a,m),_.setScalar(0),_.addScaledVector(gr,g.x),_.addScaledVector(_r,g.y),_.addScaledVector(xr,g.z),_}static isFrontFacing(a,h,p,m){return ln.subVectors(p,h),Tn.subVectors(a,h),ln.cross(Tn).dot(m)<0?!0:!1}set(a,h,p){return this.a.copy(a),this.b.copy(h),this.c.copy(p),this}setFromPointsAndIndices(a,h,p,m){return this.a.copy(a[h]),this.b.copy(a[p]),this.c.copy(a[m]),this}setFromAttributeAndIndices(a,h,p,m){return this.a.fromBufferAttribute(a,h),this.b.fromBufferAttribute(a,p),this.c.fromBufferAttribute(a,m),this}clone(){return new this.constructor().copy(this)}copy(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this}getArea(){return ln.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),ln.cross(Tn).length()*0.5}getMidpoint(a){return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(a){return en.getNormal(this.a,this.b,this.c,a)}getPlane(a){return a.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(a,h){return en.getBarycoord(a,this.a,this.b,this.c,h)}getInterpolation(a,h,p,m,g){return en.getInterpolation(a,this.a,this.b,this.c,h,p,m,g)}containsPoint(a){return en.containsPoint(a,this.a,this.b,this.c)}isFrontFacing(a){return en.isFrontFacing(this.a,this.b,this.c,a)}intersectsBox(a){return a.intersectsTriangle(this)}closestPointToPoint(a,h){let p=this.a,m=this.b,g=this.c,_,y;fi.subVectors(m,p),pi.subVectors(g,p),fr.subVectors(a,p);let x=fi.dot(fr),M=pi.dot(fr);if(x<=0&&M<=0)return h.copy(p);pr.subVectors(a,m);let S=fi.dot(pr),E=pi.dot(pr);if(S>=0&&E<=S)return h.copy(m);let v=x*E-S*M;if(v<=0&&x>=0&&S<=0)return _=x/(x-S),h.copy(p).addScaledVector(fi,_);mr.subVectors(a,g);let b=fi.dot(mr),A=pi.dot(mr);if(A>=0&&b<=A)return h.copy(g);let P=b*M-x*A;if(P<=0&&M>=0&&A<=0)return y=M/(M-A),h.copy(p).addScaledVector(pi,y);let I=S*A-b*E;if(I<=0&&E-S>=0&&b-A>=0)return Ha.subVectors(g,m),y=(E-S)/(E-S+(b-A)),h.copy(m).addScaledVector(Ha,y);let T=1/(I+P+v);return _=P*T,y=v*T,h.copy(p).addScaledVector(fi,_).addScaledVector(pi,y)}equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}}var Bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function yr(a,h,p){if(p<0)p+=1;if(p>1)p-=1;if(p<0.16666666666666666)return a+(h-a)*6*p;if(p<0.5)return h;if(p<0.6666666666666666)return a+(h-a)*6*(0.6666666666666666-p);return a}class ue{constructor(a,h,p){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(a,h,p)}set(a,h,p){if(h===void 0&&p===void 0){let m=a;if(m&&m.isColor)this.copy(m);else if(typeof m==="number")this.setHex(m);else if(typeof m==="string")this.setStyle(m)}else this.setRGB(a,h,p);return this}setScalar(a){return this.r=a,this.g=a,this.b=a,this}setHex(a,h="srgb"){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(a&255)/255,pe.toWorkingColorSpace(this,h),this}setRGB(a,h,p,m=pe.workingColorSpace){return this.r=a,this.g=h,this.b=p,pe.toWorkingColorSpace(this,m),this}setHSL(a,h,p,m=pe.workingColorSpace){if(a=Wr(a,1),h=Pe(h,0,1),p=Pe(p,0,1),h===0)this.r=this.g=this.b=p;else{let g=p<=0.5?p*(1+h):p+h-p*h,_=2*p-g;this.r=yr(_,g,a+0.3333333333333333),this.g=yr(_,g,a),this.b=yr(_,g,a-0.3333333333333333)}return pe.toWorkingColorSpace(this,m),this}setStyle(a,h="srgb"){function p(g){if(g===void 0)return;if(parseFloat(g)<1)console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}let m;if(m=/^(\w+)\(([^\)]*)\)/.exec(a)){let g,_=m[1],y=m[2];switch(_){case"rgb":case"rgba":if(g=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setRGB(Math.min(255,parseInt(g[1],10))/255,Math.min(255,parseInt(g[2],10))/255,Math.min(255,parseInt(g[3],10))/255,h);if(g=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setRGB(Math.min(100,parseInt(g[1],10))/100,Math.min(100,parseInt(g[2],10))/100,Math.min(100,parseInt(g[3],10))/100,h);break;case"hsl":case"hsla":if(g=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setHSL(parseFloat(g[1])/360,parseFloat(g[2])/100,parseFloat(g[3])/100,h);break;default:console.warn("THREE.Color: Unknown color model "+a)}}else if(m=/^\#([A-Fa-f\d]+)$/.exec(a)){let g=m[1],_=g.length;if(_===3)return this.setRGB(parseInt(g.charAt(0),16)/15,parseInt(g.charAt(1),16)/15,parseInt(g.charAt(2),16)/15,h);else if(_===6)return this.setHex(parseInt(g,16),h);else console.warn("THREE.Color: Invalid hex color "+a)}else if(a&&a.length>0)return this.setColorName(a,h);return this}setColorName(a,h="srgb"){let p=Bo[a.toLowerCase()];if(p!==void 0)this.setHex(p,h);else console.warn("THREE.Color: Unknown color "+a);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(a){return this.r=a.r,this.g=a.g,this.b=a.b,this}copySRGBToLinear(a){return this.r=An(a.r),this.g=An(a.g),this.b=An(a.b),this}copyLinearToSRGB(a){return this.r=Ei(a.r),this.g=Ei(a.g),this.b=Ei(a.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(a="srgb"){return pe.fromWorkingColorSpace(Oe.copy(this),a),Math.round(Pe(Oe.r*255,0,255))*65536+Math.round(Pe(Oe.g*255,0,255))*256+Math.round(Pe(Oe.b*255,0,255))}getHexString(a="srgb"){return("000000"+this.getHex(a).toString(16)).slice(-6)}getHSL(a,h=pe.workingColorSpace){pe.fromWorkingColorSpace(Oe.copy(this),h);let{r:p,g:m,b:g}=Oe,_=Math.max(p,m,g),y=Math.min(p,m,g),x,M,S=(y+_)/2;if(y===_)x=0,M=0;else{let E=_-y;switch(M=S<=0.5?E/(_+y):E/(2-_-y),_){case p:x=(m-g)/E+(m<g?6:0);break;case m:x=(g-p)/E+2;break;case g:x=(p-m)/E+4;break}x/=6}return a.h=x,a.s=M,a.l=S,a}getRGB(a,h=pe.workingColorSpace){return pe.fromWorkingColorSpace(Oe.copy(this),h),a.r=Oe.r,a.g=Oe.g,a.b=Oe.b,a}getStyle(a="srgb"){pe.fromWorkingColorSpace(Oe.copy(this),a);let{r:h,g:p,b:m}=Oe;if(a!=="srgb")return`color(${a} ${h.toFixed(3)} ${p.toFixed(3)} ${m.toFixed(3)})`;return`rgb(${Math.round(h*255)},${Math.round(p*255)},${Math.round(m*255)})`}offsetHSL(a,h,p){return this.getHSL(Fn),this.setHSL(Fn.h+a,Fn.s+h,Fn.l+p)}add(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this}addColors(a,h){return this.r=a.r+h.r,this.g=a.g+h.g,this.b=a.b+h.b,this}addScalar(a){return this.r+=a,this.g+=a,this.b+=a,this}sub(a){return this.r=Math.max(0,this.r-a.r),this.g=Math.max(0,this.g-a.g),this.b=Math.max(0,this.b-a.b),this}multiply(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this}multiplyScalar(a){return this.r*=a,this.g*=a,this.b*=a,this}lerp(a,h){return this.r+=(a.r-this.r)*h,this.g+=(a.g-this.g)*h,this.b+=(a.b-this.b)*h,this}lerpColors(a,h,p){return this.r=a.r+(h.r-a.r)*p,this.g=a.g+(h.g-a.g)*p,this.b=a.b+(h.b-a.b)*p,this}lerpHSL(a,h){this.getHSL(Fn),a.getHSL(ms);let p=Xi(Fn.h,ms.h,h),m=Xi(Fn.s,ms.s,h),g=Xi(Fn.l,ms.l,h);return this.setHSL(p,m,g),this}setFromVector3(a){return this.r=a.x,this.g=a.y,this.b=a.z,this}applyMatrix3(a){let h=this.r,p=this.g,m=this.b,g=a.elements;return this.r=g[0]*h+g[3]*p+g[6]*m,this.g=g[1]*h+g[4]*p+g[7]*m,this.b=g[2]*h+g[5]*p+g[8]*m,this}equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b}fromArray(a,h=0){return this.r=a[h],this.g=a[h+1],this.b=a[h+2],this}toArray(a=[],h=0){return a[h]=this.r,a[h+1]=this.g,a[h+2]=this.b,a}fromBufferAttribute(a,h){return this.r=a.getX(h),this.g=a.getY(h),this.b=a.getZ(h),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Oe=new ue;ue.NAMES=Bo;var ac=0;class Gn extends Hn{static get type(){return"Material"}get type(){return this.constructor.type}set type(a){}constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=ei(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(a){if(this._alphaTest>0!==a>0)this.version++;this._alphaTest=a}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(a){if(a===void 0)return;for(let h in a){let p=a[h];if(p===void 0){console.warn(`THREE.Material: parameter '${h}' has value of undefined.`);continue}let m=this[h];if(m===void 0){console.warn(`THREE.Material: '${h}' is not a property of THREE.${this.type}.`);continue}if(m&&m.isColor)m.set(p);else if(m&&m.isVector3&&(p&&p.isVector3))m.copy(p);else this[h]=p}}toJSON(a){let h=a===void 0||typeof a==="string";if(h)a={textures:{},images:{}};let p={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(p.uuid=this.uuid,p.type=this.type,this.name!=="")p.name=this.name;if(this.color&&this.color.isColor)p.color=this.color.getHex();if(this.roughness!==void 0)p.roughness=this.roughness;if(this.metalness!==void 0)p.metalness=this.metalness;if(this.sheen!==void 0)p.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)p.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)p.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)p.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)p.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)p.specular=this.specular.getHex();if(this.specularIntensity!==void 0)p.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)p.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)p.shininess=this.shininess;if(this.clearcoat!==void 0)p.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)p.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)p.clearcoatMap=this.clearcoatMap.toJSON(a).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)p.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(a).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)p.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,p.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)p.dispersion=this.dispersion;if(this.iridescence!==void 0)p.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)p.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)p.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)p.iridescenceMap=this.iridescenceMap.toJSON(a).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)p.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(a).uuid;if(this.anisotropy!==void 0)p.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)p.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)p.anisotropyMap=this.anisotropyMap.toJSON(a).uuid;if(this.map&&this.map.isTexture)p.map=this.map.toJSON(a).uuid;if(this.matcap&&this.matcap.isTexture)p.matcap=this.matcap.toJSON(a).uuid;if(this.alphaMap&&this.alphaMap.isTexture)p.alphaMap=this.alphaMap.toJSON(a).uuid;if(this.lightMap&&this.lightMap.isTexture)p.lightMap=this.lightMap.toJSON(a).uuid,p.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)p.aoMap=this.aoMap.toJSON(a).uuid,p.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)p.bumpMap=this.bumpMap.toJSON(a).uuid,p.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)p.normalMap=this.normalMap.toJSON(a).uuid,p.normalMapType=this.normalMapType,p.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)p.displacementMap=this.displacementMap.toJSON(a).uuid,p.displacementScale=this.displacementScale,p.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)p.roughnessMap=this.roughnessMap.toJSON(a).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)p.metalnessMap=this.metalnessMap.toJSON(a).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)p.emissiveMap=this.emissiveMap.toJSON(a).uuid;if(this.specularMap&&this.specularMap.isTexture)p.specularMap=this.specularMap.toJSON(a).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)p.specularIntensityMap=this.specularIntensityMap.toJSON(a).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)p.specularColorMap=this.specularColorMap.toJSON(a).uuid;if(this.envMap&&this.envMap.isTexture){if(p.envMap=this.envMap.toJSON(a).uuid,this.combine!==void 0)p.combine=this.combine}if(this.envMapRotation!==void 0)p.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)p.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)p.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)p.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)p.gradientMap=this.gradientMap.toJSON(a).uuid;if(this.transmission!==void 0)p.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)p.transmissionMap=this.transmissionMap.toJSON(a).uuid;if(this.thickness!==void 0)p.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)p.thicknessMap=this.thicknessMap.toJSON(a).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)p.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)p.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)p.size=this.size;if(this.shadowSide!==null)p.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)p.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)p.blending=this.blending;if(this.side!==0)p.side=this.side;if(this.vertexColors===!0)p.vertexColors=!0;if(this.opacity<1)p.opacity=this.opacity;if(this.transparent===!0)p.transparent=!0;if(this.blendSrc!==204)p.blendSrc=this.blendSrc;if(this.blendDst!==205)p.blendDst=this.blendDst;if(this.blendEquation!==100)p.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)p.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)p.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)p.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)p.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)p.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)p.depthFunc=this.depthFunc;if(this.depthTest===!1)p.depthTest=this.depthTest;if(this.depthWrite===!1)p.depthWrite=this.depthWrite;if(this.colorWrite===!1)p.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)p.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)p.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)p.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)p.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)p.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)p.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)p.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)p.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)p.rotation=this.rotation;if(this.polygonOffset===!0)p.polygonOffset=!0;if(this.polygonOffsetFactor!==0)p.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)p.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)p.linewidth=this.linewidth;if(this.dashSize!==void 0)p.dashSize=this.dashSize;if(this.gapSize!==void 0)p.gapSize=this.gapSize;if(this.scale!==void 0)p.scale=this.scale;if(this.dithering===!0)p.dithering=!0;if(this.alphaTest>0)p.alphaTest=this.alphaTest;if(this.alphaHash===!0)p.alphaHash=!0;if(this.alphaToCoverage===!0)p.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)p.premultipliedAlpha=!0;if(this.forceSinglePass===!0)p.forceSinglePass=!0;if(this.wireframe===!0)p.wireframe=!0;if(this.wireframeLinewidth>1)p.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")p.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")p.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)p.flatShading=!0;if(this.visible===!1)p.visible=!1;if(this.toneMapped===!1)p.toneMapped=!1;if(this.fog===!1)p.fog=!1;if(Object.keys(this.userData).length>0)p.userData=this.userData;function m(g){let _=[];for(let y in g){let x=g[y];delete x.metadata,_.push(x)}return _}if(h){let g=m(a.textures),_=m(a.images);if(g.length>0)p.textures=g;if(_.length>0)p.images=_}return p}clone(){return new this.constructor().copy(this)}copy(a){this.name=a.name,this.blending=a.blending,this.side=a.side,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.blendColor.copy(a.blendColor),this.blendAlpha=a.blendAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.stencilWriteMask=a.stencilWriteMask,this.stencilFunc=a.stencilFunc,this.stencilRef=a.stencilRef,this.stencilFuncMask=a.stencilFuncMask,this.stencilFail=a.stencilFail,this.stencilZFail=a.stencilZFail,this.stencilZPass=a.stencilZPass,this.stencilWrite=a.stencilWrite;let h=a.clippingPlanes,p=null;if(h!==null){let m=h.length;p=Array(m);for(let g=0;g!==m;++g)p[g]=h[g].clone()}return this.clippingPlanes=p,this.clipIntersection=a.clipIntersection,this.clipShadows=a.clipShadows,this.shadowSide=a.shadowSide,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.alphaHash=a.alphaHash,this.alphaToCoverage=a.alphaToCoverage,this.premultipliedAlpha=a.premultipliedAlpha,this.forceSinglePass=a.forceSinglePass,this.visible=a.visible,this.toneMapped=a.toneMapped,this.userData=JSON.parse(JSON.stringify(a.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(a){if(a===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ns extends Gn{static get type(){return"MeshBasicMaterial"}constructor(a){super();this.isMeshBasicMaterial=!0,this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.fog=a.fog,this}}var Ce=new q,gs=new Et;class cn{constructor(a,h,p=!1){if(Array.isArray(a))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=a,this.itemSize=h,this.count=a!==void 0?a.length/h:0,this.normalized=p,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(a){if(a===!0)this.version++}setUsage(a){return this.usage=a,this}addUpdateRange(a,h){this.updateRanges.push({start:a,count:h})}clearUpdateRanges(){this.updateRanges.length=0}copy(a){return this.name=a.name,this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.count=a.count,this.normalized=a.normalized,this.usage=a.usage,this.gpuType=a.gpuType,this}copyAt(a,h,p){a*=this.itemSize,p*=h.itemSize;for(let m=0,g=this.itemSize;m<g;m++)this.array[a+m]=h.array[p+m];return this}copyArray(a){return this.array.set(a),this}applyMatrix3(a){if(this.itemSize===2)for(let h=0,p=this.count;h<p;h++)gs.fromBufferAttribute(this,h),gs.applyMatrix3(a),this.setXY(h,gs.x,gs.y);else if(this.itemSize===3)for(let h=0,p=this.count;h<p;h++)Ce.fromBufferAttribute(this,h),Ce.applyMatrix3(a),this.setXYZ(h,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(a){for(let h=0,p=this.count;h<p;h++)Ce.fromBufferAttribute(this,h),Ce.applyMatrix4(a),this.setXYZ(h,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(a){for(let h=0,p=this.count;h<p;h++)Ce.fromBufferAttribute(this,h),Ce.applyNormalMatrix(a),this.setXYZ(h,Ce.x,Ce.y,Ce.z);return this}transformDirection(a){for(let h=0,p=this.count;h<p;h++)Ce.fromBufferAttribute(this,h),Ce.transformDirection(a),this.setXYZ(h,Ce.x,Ce.y,Ce.z);return this}set(a,h=0){return this.array.set(a,h),this}getComponent(a,h){let p=this.array[a*this.itemSize+h];if(this.normalized)p=yi(p,this.array);return p}setComponent(a,h,p){if(this.normalized)p=ze(p,this.array);return this.array[a*this.itemSize+h]=p,this}getX(a){let h=this.array[a*this.itemSize];if(this.normalized)h=yi(h,this.array);return h}setX(a,h){if(this.normalized)h=ze(h,this.array);return this.array[a*this.itemSize]=h,this}getY(a){let h=this.array[a*this.itemSize+1];if(this.normalized)h=yi(h,this.array);return h}setY(a,h){if(this.normalized)h=ze(h,this.array);return this.array[a*this.itemSize+1]=h,this}getZ(a){let h=this.array[a*this.itemSize+2];if(this.normalized)h=yi(h,this.array);return h}setZ(a,h){if(this.normalized)h=ze(h,this.array);return this.array[a*this.itemSize+2]=h,this}getW(a){let h=this.array[a*this.itemSize+3];if(this.normalized)h=yi(h,this.array);return h}setW(a,h){if(this.normalized)h=ze(h,this.array);return this.array[a*this.itemSize+3]=h,this}setXY(a,h,p){if(a*=this.itemSize,this.normalized)h=ze(h,this.array),p=ze(p,this.array);return this.array[a+0]=h,this.array[a+1]=p,this}setXYZ(a,h,p,m){if(a*=this.itemSize,this.normalized)h=ze(h,this.array),p=ze(p,this.array),m=ze(m,this.array);return this.array[a+0]=h,this.array[a+1]=p,this.array[a+2]=m,this}setXYZW(a,h,p,m,g){if(a*=this.itemSize,this.normalized)h=ze(h,this.array),p=ze(p,this.array),m=ze(m,this.array),g=ze(g,this.array);return this.array[a+0]=h,this.array[a+1]=p,this.array[a+2]=m,this.array[a+3]=g,this}onUpload(a){return this.onUploadCallback=a,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let a={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")a.name=this.name;if(this.usage!==35044)a.usage=this.usage;return a}}class qr extends cn{constructor(a,h,p){super(new Uint16Array(a),h,p)}}class Yr extends cn{constructor(a,h,p){super(new Uint32Array(a),h,p)}}class ve extends cn{constructor(a,h,p){super(new Float32Array(a),h,p)}}var oc=0,Qe=new Se,vr=new Ne,mi=new q,$e=new kn,Hi=new kn,Ue=new q;class We extends Hn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(a){if(Array.isArray(a))this.index=new((Uo(a))?Yr:qr)(a,1);else this.index=a;return this}setIndirect(a){return this.indirect=a,this}getIndirect(){return this.indirect}getAttribute(a){return this.attributes[a]}setAttribute(a,h){return this.attributes[a]=h,this}deleteAttribute(a){return delete this.attributes[a],this}hasAttribute(a){return this.attributes[a]!==void 0}addGroup(a,h,p=0){this.groups.push({start:a,count:h,materialIndex:p})}clearGroups(){this.groups=[]}setDrawRange(a,h){this.drawRange.start=a,this.drawRange.count=h}applyMatrix4(a){let h=this.attributes.position;if(h!==void 0)h.applyMatrix4(a),h.needsUpdate=!0;let p=this.attributes.normal;if(p!==void 0){let g=new le().getNormalMatrix(a);p.applyNormalMatrix(g),p.needsUpdate=!0}let m=this.attributes.tangent;if(m!==void 0)m.transformDirection(a),m.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(a){return Qe.makeRotationFromQuaternion(a),this.applyMatrix4(Qe),this}rotateX(a){return Qe.makeRotationX(a),this.applyMatrix4(Qe),this}rotateY(a){return Qe.makeRotationY(a),this.applyMatrix4(Qe),this}rotateZ(a){return Qe.makeRotationZ(a),this.applyMatrix4(Qe),this}translate(a,h,p){return Qe.makeTranslation(a,h,p),this.applyMatrix4(Qe),this}scale(a,h,p){return Qe.makeScale(a,h,p),this.applyMatrix4(Qe),this}lookAt(a){return vr.lookAt(a),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(a){let h=this.getAttribute("position");if(h===void 0){let p=[];for(let m=0,g=a.length;m<g;m++){let _=a[m];p.push(_.x,_.y,_.z||0)}this.setAttribute("position",new ve(p,3))}else{for(let p=0,m=h.count;p<m;p++){let g=a[p];h.setXYZ(p,g.x,g.y,g.z||0)}if(a.length>h.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");h.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new kn;let a=this.attributes.position,h=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(a!==void 0){if(this.boundingBox.setFromBufferAttribute(a),h)for(let p=0,m=h.length;p<m;p++){let g=h[p];if($e.setFromBufferAttribute(g),this.morphTargetsRelative)Ue.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ue);else this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new es;let a=this.attributes.position,h=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(a){let p=this.boundingSphere.center;if($e.setFromBufferAttribute(a),h)for(let g=0,_=h.length;g<_;g++){let y=h[g];if(Hi.setFromBufferAttribute(y),this.morphTargetsRelative)Ue.addVectors($e.min,Hi.min),$e.expandByPoint(Ue),Ue.addVectors($e.max,Hi.max),$e.expandByPoint(Ue);else $e.expandByPoint(Hi.min),$e.expandByPoint(Hi.max)}$e.getCenter(p);let m=0;for(let g=0,_=a.count;g<_;g++)Ue.fromBufferAttribute(a,g),m=Math.max(m,p.distanceToSquared(Ue));if(h)for(let g=0,_=h.length;g<_;g++){let y=h[g],x=this.morphTargetsRelative;for(let M=0,S=y.count;M<S;M++){if(Ue.fromBufferAttribute(y,M),x)mi.fromBufferAttribute(a,M),Ue.add(mi);m=Math.max(m,p.distanceToSquared(Ue))}}if(this.boundingSphere.radius=Math.sqrt(m),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let a=this.index,h=this.attributes;if(a===null||h.position===void 0||h.normal===void 0||h.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:p,normal:m,uv:g}=h;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new cn(new Float32Array(4*p.count),4));let _=this.getAttribute("tangent"),y=[],x=[];for(let Y=0;Y<p.count;Y++)y[Y]=new q,x[Y]=new q;let M=new q,S=new q,E=new q,v=new Et,b=new Et,A=new Et,P=new q,I=new q;function T(Y,lt,O){M.fromBufferAttribute(p,Y),S.fromBufferAttribute(p,lt),E.fromBufferAttribute(p,O),v.fromBufferAttribute(g,Y),b.fromBufferAttribute(g,lt),A.fromBufferAttribute(g,O),S.sub(M),E.sub(M),b.sub(v),A.sub(v);let B=1/(b.x*A.y-A.x*b.y);if(!isFinite(B))return;P.copy(S).multiplyScalar(A.y).addScaledVector(E,-b.y).multiplyScalar(B),I.copy(E).multiplyScalar(b.x).addScaledVector(S,-A.x).multiplyScalar(B),y[Y].add(P),y[lt].add(P),y[O].add(P),x[Y].add(I),x[lt].add(I),x[O].add(I)}let w=this.groups;if(w.length===0)w=[{start:0,count:a.count}];for(let Y=0,lt=w.length;Y<lt;++Y){let O=w[Y],{start:B,count:Q}=O;for(let at=B,ot=B+Q;at<ot;at+=3)T(a.getX(at+0),a.getX(at+1),a.getX(at+2))}let W=new q,F=new q,k=new q,rt=new q;function X(Y){k.fromBufferAttribute(m,Y),rt.copy(k);let lt=y[Y];W.copy(lt),W.sub(k.multiplyScalar(k.dot(lt))).normalize(),F.crossVectors(rt,lt);let B=F.dot(x[Y])<0?-1:1;_.setXYZW(Y,W.x,W.y,W.z,B)}for(let Y=0,lt=w.length;Y<lt;++Y){let O=w[Y],{start:B,count:Q}=O;for(let at=B,ot=B+Q;at<ot;at+=3)X(a.getX(at+0)),X(a.getX(at+1)),X(a.getX(at+2))}}computeVertexNormals(){let a=this.index,h=this.getAttribute("position");if(h!==void 0){let p=this.getAttribute("normal");if(p===void 0)p=new cn(new Float32Array(h.count*3),3),this.setAttribute("normal",p);else for(let v=0,b=p.count;v<b;v++)p.setXYZ(v,0,0,0);let m=new q,g=new q,_=new q,y=new q,x=new q,M=new q,S=new q,E=new q;if(a)for(let v=0,b=a.count;v<b;v+=3){let A=a.getX(v+0),P=a.getX(v+1),I=a.getX(v+2);m.fromBufferAttribute(h,A),g.fromBufferAttribute(h,P),_.fromBufferAttribute(h,I),S.subVectors(_,g),E.subVectors(m,g),S.cross(E),y.fromBufferAttribute(p,A),x.fromBufferAttribute(p,P),M.fromBufferAttribute(p,I),y.add(S),x.add(S),M.add(S),p.setXYZ(A,y.x,y.y,y.z),p.setXYZ(P,x.x,x.y,x.z),p.setXYZ(I,M.x,M.y,M.z)}else for(let v=0,b=h.count;v<b;v+=3)m.fromBufferAttribute(h,v+0),g.fromBufferAttribute(h,v+1),_.fromBufferAttribute(h,v+2),S.subVectors(_,g),E.subVectors(m,g),S.cross(E),p.setXYZ(v+0,S.x,S.y,S.z),p.setXYZ(v+1,S.x,S.y,S.z),p.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),p.needsUpdate=!0}}normalizeNormals(){let a=this.attributes.normal;for(let h=0,p=a.count;h<p;h++)Ue.fromBufferAttribute(a,h),Ue.normalize(),a.setXYZ(h,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function a(y,x){let{array:M,itemSize:S,normalized:E}=y,v=new M.constructor(x.length*S),b=0,A=0;for(let P=0,I=x.length;P<I;P++){if(y.isInterleavedBufferAttribute)b=x[P]*y.data.stride+y.offset;else b=x[P]*S;for(let T=0;T<S;T++)v[A++]=M[b++]}return new cn(v,S,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let h=new We,p=this.index.array,m=this.attributes;for(let y in m){let x=m[y],M=a(x,p);h.setAttribute(y,M)}let g=this.morphAttributes;for(let y in g){let x=[],M=g[y];for(let S=0,E=M.length;S<E;S++){let v=M[S],b=a(v,p);x.push(b)}h.morphAttributes[y]=x}h.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;for(let y=0,x=_.length;y<x;y++){let M=_[y];h.addGroup(M.start,M.count,M.materialIndex)}return h}toJSON(){let a={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(a.uuid=this.uuid,a.type=this.type,this.name!=="")a.name=this.name;if(Object.keys(this.userData).length>0)a.userData=this.userData;if(this.parameters!==void 0){let x=this.parameters;for(let M in x)if(x[M]!==void 0)a[M]=x[M];return a}a.data={attributes:{}};let h=this.index;if(h!==null)a.data.index={type:h.array.constructor.name,array:Array.prototype.slice.call(h.array)};let p=this.attributes;for(let x in p){let M=p[x];a.data.attributes[x]=M.toJSON(a.data)}let m={},g=!1;for(let x in this.morphAttributes){let M=this.morphAttributes[x],S=[];for(let E=0,v=M.length;E<v;E++){let b=M[E];S.push(b.toJSON(a.data))}if(S.length>0)m[x]=S,g=!0}if(g)a.data.morphAttributes=m,a.data.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;if(_.length>0)a.data.groups=JSON.parse(JSON.stringify(_));let y=this.boundingSphere;if(y!==null)a.data.boundingSphere={center:y.center.toArray(),radius:y.radius};return a}clone(){return new this.constructor().copy(this)}copy(a){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let h={};this.name=a.name;let p=a.index;if(p!==null)this.setIndex(p.clone(h));let m=a.attributes;for(let M in m){let S=m[M];this.setAttribute(M,S.clone(h))}let g=a.morphAttributes;for(let M in g){let S=[],E=g[M];for(let v=0,b=E.length;v<b;v++)S.push(E[v].clone(h));this.morphAttributes[M]=S}this.morphTargetsRelative=a.morphTargetsRelative;let _=a.groups;for(let M=0,S=_.length;M<S;M++){let E=_[M];this.addGroup(E.start,E.count,E.materialIndex)}let y=a.boundingBox;if(y!==null)this.boundingBox=y.clone();let x=a.boundingSphere;if(x!==null)this.boundingSphere=x.clone();return this.drawRange.start=a.drawRange.start,this.drawRange.count=a.drawRange.count,this.userData=a.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ka=new Se,Zn=new Ti,_s=new es,Ga=new q,xs=new q,ys=new q,vs=new q,Mr=new q,Ms=new q,Wa=new q,Ss=new q;class ie extends Ne{constructor(a=new We,h=new ns){super();this.isMesh=!0,this.type="Mesh",this.geometry=a,this.material=h,this.updateMorphTargets()}copy(a,h){if(super.copy(a,h),a.morphTargetInfluences!==void 0)this.morphTargetInfluences=a.morphTargetInfluences.slice();if(a.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary);return this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let y=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[y]=g}}}}getVertexPosition(a,h){let p=this.geometry,m=p.attributes.position,g=p.morphAttributes.position,_=p.morphTargetsRelative;h.fromBufferAttribute(m,a);let y=this.morphTargetInfluences;if(g&&y){Ms.set(0,0,0);for(let x=0,M=g.length;x<M;x++){let S=y[x],E=g[x];if(S===0)continue;if(Mr.fromBufferAttribute(E,a),_)Ms.addScaledVector(Mr,S);else Ms.addScaledVector(Mr.sub(h),S)}h.add(Ms)}return h}raycast(a,h){let p=this.geometry,m=this.material,g=this.matrixWorld;if(m===void 0)return;if(p.boundingSphere===null)p.computeBoundingSphere();if(_s.copy(p.boundingSphere),_s.applyMatrix4(g),Zn.copy(a.ray).recast(a.near),_s.containsPoint(Zn.origin)===!1){if(Zn.intersectSphere(_s,Ga)===null)return;if(Zn.origin.distanceToSquared(Ga)>(a.far-a.near)**2)return}if(ka.copy(g).invert(),Zn.copy(a.ray).applyMatrix4(ka),p.boundingBox!==null){if(Zn.intersectsBox(p.boundingBox)===!1)return}this._computeIntersections(a,h,Zn)}_computeIntersections(a,h,p){let m,g=this.geometry,_=this.material,y=g.index,x=g.attributes.position,M=g.attributes.uv,S=g.attributes.uv1,E=g.attributes.normal,{groups:v,drawRange:b}=g;if(y!==null)if(Array.isArray(_))for(let A=0,P=v.length;A<P;A++){let I=v[A],T=_[I.materialIndex],w=Math.max(I.start,b.start),W=Math.min(y.count,Math.min(I.start+I.count,b.start+b.count));for(let F=w,k=W;F<k;F+=3){let rt=y.getX(F),X=y.getX(F+1),Y=y.getX(F+2);if(m=Es(this,T,a,p,M,S,E,rt,X,Y),m)m.faceIndex=Math.floor(F/3),m.face.materialIndex=I.materialIndex,h.push(m)}}else{let A=Math.max(0,b.start),P=Math.min(y.count,b.start+b.count);for(let I=A,T=P;I<T;I+=3){let w=y.getX(I),W=y.getX(I+1),F=y.getX(I+2);if(m=Es(this,_,a,p,M,S,E,w,W,F),m)m.faceIndex=Math.floor(I/3),h.push(m)}}else if(x!==void 0)if(Array.isArray(_))for(let A=0,P=v.length;A<P;A++){let I=v[A],T=_[I.materialIndex],w=Math.max(I.start,b.start),W=Math.min(x.count,Math.min(I.start+I.count,b.start+b.count));for(let F=w,k=W;F<k;F+=3){let rt=F,X=F+1,Y=F+2;if(m=Es(this,T,a,p,M,S,E,rt,X,Y),m)m.faceIndex=Math.floor(F/3),m.face.materialIndex=I.materialIndex,h.push(m)}}else{let A=Math.max(0,b.start),P=Math.min(x.count,b.start+b.count);for(let I=A,T=P;I<T;I+=3){let w=I,W=I+1,F=I+2;if(m=Es(this,_,a,p,M,S,E,w,W,F),m)m.faceIndex=Math.floor(I/3),h.push(m)}}}}function lc(a,h,p,m,g,_,y,x){let M;if(h.side===1)M=m.intersectTriangle(y,_,g,!0,x);else M=m.intersectTriangle(g,_,y,h.side===0,x);if(M===null)return null;Ss.copy(x),Ss.applyMatrix4(a.matrixWorld);let S=p.ray.origin.distanceTo(Ss);if(S<p.near||S>p.far)return null;return{distance:S,point:Ss.clone(),object:a}}function Es(a,h,p,m,g,_,y,x,M,S){a.getVertexPosition(x,xs),a.getVertexPosition(M,ys),a.getVertexPosition(S,vs);let E=lc(a,h,p,m,xs,ys,vs,Wa);if(E){let v=new q;if(en.getBarycoord(Wa,xs,ys,vs,v),g)E.uv=en.getInterpolatedAttribute(g,x,M,S,v,new Et);if(_)E.uv1=en.getInterpolatedAttribute(_,x,M,S,v,new Et);if(y){if(E.normal=en.getInterpolatedAttribute(y,x,M,S,v,new q),E.normal.dot(m.direction)>0)E.normal.multiplyScalar(-1)}let b={a:x,b:M,c:S,normal:new q,materialIndex:0};en.getNormal(xs,ys,vs,b.normal),E.face=b,E.barycoord=v}return E}class Be extends We{constructor(a=1,h=1,p=1,m=1,g=1,_=1){super();this.type="BoxGeometry",this.parameters={width:a,height:h,depth:p,widthSegments:m,heightSegments:g,depthSegments:_};let y=this;m=Math.floor(m),g=Math.floor(g),_=Math.floor(_);let x=[],M=[],S=[],E=[],v=0,b=0;A("z","y","x",-1,-1,p,h,a,_,g,0),A("z","y","x",1,-1,p,h,-a,_,g,1),A("x","z","y",1,1,a,p,h,m,_,2),A("x","z","y",1,-1,a,p,-h,m,_,3),A("x","y","z",1,-1,a,h,p,m,g,4),A("x","y","z",-1,-1,a,h,-p,m,g,5),this.setIndex(x),this.setAttribute("position",new ve(M,3)),this.setAttribute("normal",new ve(S,3)),this.setAttribute("uv",new ve(E,2));function A(P,I,T,w,W,F,k,rt,X,Y,lt){let O=F/X,B=k/Y,Q=F/2,at=k/2,ot=rt/2,ct=X+1,dt=Y+1,K=0,st=0,Z=new q;for(let Rt=0;Rt<dt;Rt++){let U=Rt*B-at;for(let Vt=0;Vt<ct;Vt++){let $t=Vt*O-Q;Z[P]=$t*w,Z[I]=U*W,Z[T]=ot,M.push(Z.x,Z.y,Z.z),Z[P]=0,Z[I]=0,Z[T]=rt>0?1:-1,S.push(Z.x,Z.y,Z.z),E.push(Vt/X),E.push(1-Rt/Y),K+=1}}for(let Rt=0;Rt<Y;Rt++)for(let U=0;U<X;U++){let Vt=v+U+ct*Rt,$t=v+U+ct*(Rt+1),ut=v+(U+1)+ct*(Rt+1),bt=v+(U+1)+ct*Rt;x.push(Vt,$t,bt),x.push($t,ut,bt),st+=6}y.addGroup(b,st,lt),b+=st,v+=K}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new Be(a.width,a.height,a.depth,a.widthSegments,a.heightSegments,a.depthSegments)}}function bi(a){let h={};for(let p in a){h[p]={};for(let m in a[p]){let g=a[p][m];if(g&&(g.isColor||g.isMatrix3||g.isMatrix4||g.isVector2||g.isVector3||g.isVector4||g.isTexture||g.isQuaternion))if(g.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),h[p][m]=null;else h[p][m]=g.clone();else if(Array.isArray(g))h[p][m]=g.slice();else h[p][m]=g}}return h}function He(a){let h={};for(let p=0;p<a.length;p++){let m=bi(a[p]);for(let g in m)h[g]=m[g]}return h}function cc(a){let h=[];for(let p=0;p<a.length;p++)h.push(a[p].clone());return h}function zo(a){let h=a.getRenderTarget();if(h===null)return a.outputColorSpace;if(h.isXRRenderTarget===!0)return h.texture.colorSpace;return pe.workingColorSpace}var hc={clone:bi,merge:He},uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Gn{static get type(){return"ShaderMaterial"}constructor(a){super();if(this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uc,this.fragmentShader=dc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,a!==void 0)this.setValues(a)}copy(a){return super.copy(a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=bi(a.uniforms),this.uniformsGroups=cc(a.uniformsGroups),this.defines=Object.assign({},a.defines),this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.fog=a.fog,this.lights=a.lights,this.clipping=a.clipping,this.extensions=Object.assign({},a.extensions),this.glslVersion=a.glslVersion,this}toJSON(a){let h=super.toJSON(a);h.glslVersion=this.glslVersion,h.uniforms={};for(let m in this.uniforms){let _=this.uniforms[m].value;if(_&&_.isTexture)h.uniforms[m]={type:"t",value:_.toJSON(a).uuid};else if(_&&_.isColor)h.uniforms[m]={type:"c",value:_.getHex()};else if(_&&_.isVector2)h.uniforms[m]={type:"v2",value:_.toArray()};else if(_&&_.isVector3)h.uniforms[m]={type:"v3",value:_.toArray()};else if(_&&_.isVector4)h.uniforms[m]={type:"v4",value:_.toArray()};else if(_&&_.isMatrix3)h.uniforms[m]={type:"m3",value:_.toArray()};else if(_&&_.isMatrix4)h.uniforms[m]={type:"m4",value:_.toArray()};else h.uniforms[m]={value:_}}if(Object.keys(this.defines).length>0)h.defines=this.defines;h.vertexShader=this.vertexShader,h.fragmentShader=this.fragmentShader,h.lights=this.lights,h.clipping=this.clipping;let p={};for(let m in this.extensions)if(this.extensions[m]===!0)p[m]=!0;if(Object.keys(p).length>0)h.extensions=p;return h}}class Zr extends Ne{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=2000}copy(a,h){return super.copy(a,h),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this.projectionMatrixInverse.copy(a.projectionMatrixInverse),this.coordinateSystem=a.coordinateSystem,this}getWorldDirection(a){return super.getWorldDirection(a).negate()}updateMatrixWorld(a){super.updateMatrixWorld(a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(a,h){super.updateWorldMatrix(a,h),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var On=new q,Va=new Et,Xa=new Et;class ke extends Zr{constructor(a=50,h=1,p=0.1,m=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=a,this.zoom=1,this.near=p,this.far=m,this.focus=10,this.aspect=h,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(a,h){return super.copy(a,h),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=a.view===null?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this}setFocalLength(a){let h=0.5*this.getFilmHeight()/a;this.fov=Ji*2*Math.atan(h),this.updateProjectionMatrix()}getFocalLength(){let a=Math.tan(Si*0.5*this.fov);return 0.5*this.getFilmHeight()/a}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Si*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(a,h,p){On.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),h.set(On.x,On.y).multiplyScalar(-a/On.z),On.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),p.set(On.x,On.y).multiplyScalar(-a/On.z)}getViewSize(a,h){return this.getViewBounds(a,Va,Xa),h.subVectors(Xa,Va)}setViewOffset(a,h,p,m,g,_){if(this.aspect=a/h,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let a=this.near,h=a*Math.tan(Si*0.5*this.fov)/this.zoom,p=2*h,m=this.aspect*p,g=-0.5*m,_=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:x,fullHeight:M}=_;g+=_.offsetX*m/x,h-=_.offsetY*p/M,m*=_.width/x,p*=_.height/M}let y=this.filmOffset;if(y!==0)g+=a*y/this.getFilmWidth();this.projectionMatrix.makePerspective(g,g+m,h,h-p,a,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){let h=super.toJSON(a);if(h.object.fov=this.fov,h.object.zoom=this.zoom,h.object.near=this.near,h.object.far=this.far,h.object.focus=this.focus,h.object.aspect=this.aspect,this.view!==null)h.object.view=Object.assign({},this.view);return h.object.filmGauge=this.filmGauge,h.object.filmOffset=this.filmOffset,h}}var gi=-90,_i=1;class Ho extends Ne{constructor(a,h,p){super();this.type="CubeCamera",this.renderTarget=p,this.coordinateSystem=null,this.activeMipmapLevel=0;let m=new ke(gi,_i,a,h);m.layers=this.layers,this.add(m);let g=new ke(gi,_i,a,h);g.layers=this.layers,this.add(g);let _=new ke(gi,_i,a,h);_.layers=this.layers,this.add(_);let y=new ke(gi,_i,a,h);y.layers=this.layers,this.add(y);let x=new ke(gi,_i,a,h);x.layers=this.layers,this.add(x);let M=new ke(gi,_i,a,h);M.layers=this.layers,this.add(M)}updateCoordinateSystem(){let a=this.coordinateSystem,h=this.children.concat(),[p,m,g,_,y,x]=h;for(let M of h)this.remove(M);if(a===2000)p.up.set(0,1,0),p.lookAt(1,0,0),m.up.set(0,1,0),m.lookAt(-1,0,0),g.up.set(0,0,-1),g.lookAt(0,1,0),_.up.set(0,0,1),_.lookAt(0,-1,0),y.up.set(0,1,0),y.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(a===2001)p.up.set(0,-1,0),p.lookAt(-1,0,0),m.up.set(0,-1,0),m.lookAt(1,0,0),g.up.set(0,0,1),g.lookAt(0,1,0),_.up.set(0,0,-1),_.lookAt(0,-1,0),y.up.set(0,-1,0),y.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(let M of h)this.add(M),M.updateMatrixWorld()}update(a,h){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:p,activeMipmapLevel:m}=this;if(this.coordinateSystem!==a.coordinateSystem)this.coordinateSystem=a.coordinateSystem,this.updateCoordinateSystem();let[g,_,y,x,M,S]=this.children,E=a.getRenderTarget(),v=a.getActiveCubeFace(),b=a.getActiveMipmapLevel(),A=a.xr.enabled;a.xr.enabled=!1;let P=p.texture.generateMipmaps;p.texture.generateMipmaps=!1,a.setRenderTarget(p,0,m),a.render(h,g),a.setRenderTarget(p,1,m),a.render(h,_),a.setRenderTarget(p,2,m),a.render(h,y),a.setRenderTarget(p,3,m),a.render(h,x),a.setRenderTarget(p,4,m),a.render(h,M),p.texture.generateMipmaps=P,a.setRenderTarget(p,5,m),a.render(h,S),a.setRenderTarget(E,v,b),a.xr.enabled=A,p.texture.needsPMREMUpdate=!0}}class Jr extends Ge{constructor(a,h,p,m,g,_,y,x,M,S){a=a!==void 0?a:[],h=h!==void 0?h:301;super(a,h,p,m,g,_,y,x,M,S);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(a){this.image=a}}class ko extends zn{constructor(a=1,h={}){super(a,a,h);this.isWebGLCubeRenderTarget=!0;let p={width:a,height:a,depth:1},m=[p,p,p,p,p,p];this.texture=new Jr(m,h.mapping,h.wrapS,h.wrapT,h.magFilter,h.minFilter,h.format,h.type,h.anisotropy,h.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=h.generateMipmaps!==void 0?h.generateMipmaps:!1,this.texture.minFilter=h.minFilter!==void 0?h.minFilter:1006}fromEquirectangularTexture(a,h){this.texture.type=h.type,this.texture.colorSpace=h.colorSpace,this.texture.generateMipmaps=h.generateMipmaps,this.texture.minFilter=h.minFilter,this.texture.magFilter=h.magFilter;let p={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},m=new Be(5,5,5),g=new Rn({name:"CubemapFromEquirect",uniforms:bi(p.uniforms),vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,side:1,blending:0});g.uniforms.tEquirect.value=h;let _=new ie(m,g),y=h.minFilter;if(h.minFilter===1008)h.minFilter=1006;return new Ho(1,10,this).update(a,_),h.minFilter=y,_.geometry.dispose(),_.material.dispose(),this}clear(a,h,p,m){let g=a.getRenderTarget();for(let _=0;_<6;_++)a.setRenderTarget(this,_),a.clear(h,p,m);a.setRenderTarget(g)}}var Sr=new q,fc=new q,pc=new le;class tn{constructor(a=new q(1,0,0),h=0){this.isPlane=!0,this.normal=a,this.constant=h}set(a,h){return this.normal.copy(a),this.constant=h,this}setComponents(a,h,p,m){return this.normal.set(a,h,p),this.constant=m,this}setFromNormalAndCoplanarPoint(a,h){return this.normal.copy(a),this.constant=-h.dot(this.normal),this}setFromCoplanarPoints(a,h,p){let m=Sr.subVectors(p,h).cross(fc.subVectors(a,h)).normalize();return this.setFromNormalAndCoplanarPoint(m,a),this}copy(a){return this.normal.copy(a.normal),this.constant=a.constant,this}normalize(){let a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(a){return this.normal.dot(a)+this.constant}distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius}projectPoint(a,h){return h.copy(a).addScaledVector(this.normal,-this.distanceToPoint(a))}intersectLine(a,h){let p=a.delta(Sr),m=this.normal.dot(p);if(m===0){if(this.distanceToPoint(a.start)===0)return h.copy(a.start);return null}let g=-(a.start.dot(this.normal)+this.constant)/m;if(g<0||g>1)return null;return h.copy(a.start).addScaledVector(p,g)}intersectsLine(a){let h=this.distanceToPoint(a.start),p=this.distanceToPoint(a.end);return h<0&&p>0||p<0&&h>0}intersectsBox(a){return a.intersectsPlane(this)}intersectsSphere(a){return a.intersectsPlane(this)}coplanarPoint(a){return a.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(a,h){let p=h||pc.getNormalMatrix(a),m=this.coplanarPoint(Sr).applyMatrix4(a),g=this.normal.applyMatrix3(p).normalize();return this.constant=-m.dot(g),this}translate(a){return this.constant-=a.dot(this.normal),this}equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Jn=new es,bs=new q;class Gs{constructor(a=new tn,h=new tn,p=new tn,m=new tn,g=new tn,_=new tn){this.planes=[a,h,p,m,g,_]}set(a,h,p,m,g,_){let y=this.planes;return y[0].copy(a),y[1].copy(h),y[2].copy(p),y[3].copy(m),y[4].copy(g),y[5].copy(_),this}copy(a){let h=this.planes;for(let p=0;p<6;p++)h[p].copy(a.planes[p]);return this}setFromProjectionMatrix(a,h=2000){let p=this.planes,m=a.elements,g=m[0],_=m[1],y=m[2],x=m[3],M=m[4],S=m[5],E=m[6],v=m[7],b=m[8],A=m[9],P=m[10],I=m[11],T=m[12],w=m[13],W=m[14],F=m[15];if(p[0].setComponents(x-g,v-M,I-b,F-T).normalize(),p[1].setComponents(x+g,v+M,I+b,F+T).normalize(),p[2].setComponents(x+_,v+S,I+A,F+w).normalize(),p[3].setComponents(x-_,v-S,I-A,F-w).normalize(),p[4].setComponents(x-y,v-E,I-P,F-W).normalize(),h===2000)p[5].setComponents(x+y,v+E,I+P,F+W).normalize();else if(h===2001)p[5].setComponents(y,E,P,W).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+h);return this}intersectsObject(a){if(a.boundingSphere!==void 0){if(a.boundingSphere===null)a.computeBoundingSphere();Jn.copy(a.boundingSphere).applyMatrix4(a.matrixWorld)}else{let h=a.geometry;if(h.boundingSphere===null)h.computeBoundingSphere();Jn.copy(h.boundingSphere).applyMatrix4(a.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(a){return Jn.center.set(0,0,0),Jn.radius=0.7071067811865476,Jn.applyMatrix4(a.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(a){let h=this.planes,p=a.center,m=-a.radius;for(let g=0;g<6;g++)if(h[g].distanceToPoint(p)<m)return!1;return!0}intersectsBox(a){let h=this.planes;for(let p=0;p<6;p++){let m=h[p];if(bs.x=m.normal.x>0?a.max.x:a.min.x,bs.y=m.normal.y>0?a.max.y:a.min.y,bs.z=m.normal.z>0?a.max.z:a.min.z,m.distanceToPoint(bs)<0)return!1}return!0}containsPoint(a){let h=this.planes;for(let p=0;p<6;p++)if(h[p].distanceToPoint(a)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Go(){let a=null,h=!1,p=null,m=null;function g(_,y){p(_,y),m=a.requestAnimationFrame(g)}return{start:function(){if(h===!0)return;if(p===null)return;m=a.requestAnimationFrame(g),h=!0},stop:function(){a.cancelAnimationFrame(m),h=!1},setAnimationLoop:function(_){p=_},setContext:function(_){a=_}}}function mc(a){let h=new WeakMap;function p(x,M){let{array:S,usage:E}=x,v=S.byteLength,b=a.createBuffer();a.bindBuffer(M,b),a.bufferData(M,S,E),x.onUploadCallback();let A;if(S instanceof Float32Array)A=a.FLOAT;else if(S instanceof Uint16Array)if(x.isFloat16BufferAttribute)A=a.HALF_FLOAT;else A=a.UNSIGNED_SHORT;else if(S instanceof Int16Array)A=a.SHORT;else if(S instanceof Uint32Array)A=a.UNSIGNED_INT;else if(S instanceof Int32Array)A=a.INT;else if(S instanceof Int8Array)A=a.BYTE;else if(S instanceof Uint8Array)A=a.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)A=a.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:b,type:A,bytesPerElement:S.BYTES_PER_ELEMENT,version:x.version,size:v}}function m(x,M,S){let{array:E,updateRanges:v}=M;if(a.bindBuffer(S,x),v.length===0)a.bufferSubData(S,0,E);else{v.sort((A,P)=>A.start-P.start);let b=0;for(let A=1;A<v.length;A++){let P=v[b],I=v[A];if(I.start<=P.start+P.count+1)P.count=Math.max(P.count,I.start+I.count-P.start);else++b,v[b]=I}v.length=b+1;for(let A=0,P=v.length;A<P;A++){let I=v[A];a.bufferSubData(S,I.start*E.BYTES_PER_ELEMENT,E,I.start,I.count)}M.clearUpdateRanges()}M.onUploadCallback()}function g(x){if(x.isInterleavedBufferAttribute)x=x.data;return h.get(x)}function _(x){if(x.isInterleavedBufferAttribute)x=x.data;let M=h.get(x);if(M)a.deleteBuffer(M.buffer),h.delete(x)}function y(x,M){if(x.isInterleavedBufferAttribute)x=x.data;if(x.isGLBufferAttribute){let E=h.get(x);if(!E||E.version<x.version)h.set(x,{buffer:x.buffer,type:x.type,bytesPerElement:x.elementSize,version:x.version});return}let S=h.get(x);if(S===void 0)h.set(x,p(x,M));else if(S.version<x.version){if(S.size!==x.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");m(S.buffer,x,M),S.version=x.version}}return{get:g,remove:_,update:y}}class wi extends We{constructor(a=1,h=1,p=1,m=1){super();this.type="PlaneGeometry",this.parameters={width:a,height:h,widthSegments:p,heightSegments:m};let g=a/2,_=h/2,y=Math.floor(p),x=Math.floor(m),M=y+1,S=x+1,E=a/y,v=h/x,b=[],A=[],P=[],I=[];for(let T=0;T<S;T++){let w=T*v-_;for(let W=0;W<M;W++){let F=W*E-g;A.push(F,-w,0),P.push(0,0,1),I.push(W/y),I.push(1-T/x)}}for(let T=0;T<x;T++)for(let w=0;w<y;w++){let W=w+M*T,F=w+M*(T+1),k=w+1+M*(T+1),rt=w+1+M*T;b.push(W,F,rt),b.push(F,k,rt)}this.setIndex(b),this.setAttribute("position",new ve(A,3)),this.setAttribute("normal",new ve(P,3)),this.setAttribute("uv",new ve(I,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new wi(a.width,a.height,a.widthSegments,a.heightSegments)}}var gc=`#ifdef USE_ALPHAHASH
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
}`,he={alphahash_fragment:gc,alphahash_pars_fragment:_c,alphamap_fragment:xc,alphamap_pars_fragment:yc,alphatest_fragment:vc,alphatest_pars_fragment:Mc,aomap_fragment:Sc,aomap_pars_fragment:Ec,batching_pars_vertex:bc,batching_vertex:Tc,begin_vertex:wc,beginnormal_vertex:Ac,bsdfs:Rc,iridescence_fragment:Cc,bumpmap_pars_fragment:Pc,clipping_planes_fragment:Ic,clipping_planes_pars_fragment:Dc,clipping_planes_pars_vertex:Lc,clipping_planes_vertex:Uc,color_fragment:Nc,color_pars_fragment:Fc,color_pars_vertex:Oc,color_vertex:Bc,common:zc,cube_uv_reflection_fragment:Hc,defaultnormal_vertex:kc,displacementmap_pars_vertex:Gc,displacementmap_vertex:Wc,emissivemap_fragment:Vc,emissivemap_pars_fragment:Xc,colorspace_fragment:qc,colorspace_pars_fragment:Yc,envmap_fragment:Zc,envmap_common_pars_fragment:Jc,envmap_pars_fragment:$c,envmap_pars_vertex:Kc,envmap_physical_pars_fragment:lh,envmap_vertex:jc,fog_vertex:Qc,fog_pars_vertex:th,fog_fragment:eh,fog_pars_fragment:nh,gradientmap_pars_fragment:ih,lightmap_pars_fragment:sh,lights_lambert_fragment:rh,lights_lambert_pars_fragment:ah,lights_pars_begin:oh,lights_toon_fragment:ch,lights_toon_pars_fragment:hh,lights_phong_fragment:uh,lights_phong_pars_fragment:dh,lights_physical_fragment:fh,lights_physical_pars_fragment:ph,lights_fragment_begin:mh,lights_fragment_maps:gh,lights_fragment_end:_h,logdepthbuf_fragment:xh,logdepthbuf_pars_fragment:yh,logdepthbuf_pars_vertex:vh,logdepthbuf_vertex:Mh,map_fragment:Sh,map_pars_fragment:Eh,map_particle_fragment:bh,map_particle_pars_fragment:Th,metalnessmap_fragment:wh,metalnessmap_pars_fragment:Ah,morphinstance_vertex:Rh,morphcolor_vertex:Ch,morphnormal_vertex:Ph,morphtarget_pars_vertex:Ih,morphtarget_vertex:Dh,normal_fragment_begin:Lh,normal_fragment_maps:Uh,normal_pars_fragment:Nh,normal_pars_vertex:Fh,normal_vertex:Oh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:zh,clearcoat_normal_fragment_maps:Hh,clearcoat_pars_fragment:kh,iridescence_pars_fragment:Gh,opaque_fragment:Wh,packing:Vh,premultiplied_alpha_fragment:Xh,project_vertex:qh,dithering_fragment:Yh,dithering_pars_fragment:Zh,roughnessmap_fragment:Jh,roughnessmap_pars_fragment:$h,shadowmap_pars_fragment:Kh,shadowmap_pars_vertex:jh,shadowmap_vertex:Qh,shadowmask_pars_fragment:tu,skinbase_vertex:eu,skinning_pars_vertex:nu,skinning_vertex:iu,skinnormal_vertex:su,specularmap_fragment:ru,specularmap_pars_fragment:au,tonemapping_fragment:ou,tonemapping_pars_fragment:lu,transmission_fragment:cu,transmission_pars_fragment:hu,uv_pars_fragment:uu,uv_pars_vertex:du,uv_vertex:fu,worldpos_vertex:pu,background_vert:mu,background_frag:gu,backgroundCube_vert:_u,backgroundCube_frag:xu,cube_vert:yu,cube_frag:vu,depth_vert:Mu,depth_frag:Su,distanceRGBA_vert:Eu,distanceRGBA_frag:bu,equirect_vert:Tu,equirect_frag:wu,linedashed_vert:Au,linedashed_frag:Ru,meshbasic_vert:Cu,meshbasic_frag:Pu,meshlambert_vert:Iu,meshlambert_frag:Du,meshmatcap_vert:Lu,meshmatcap_frag:Uu,meshnormal_vert:Nu,meshnormal_frag:Fu,meshphong_vert:Ou,meshphong_frag:Bu,meshphysical_vert:zu,meshphysical_frag:Hu,meshtoon_vert:ku,meshtoon_frag:Gu,points_vert:Wu,points_frag:Vu,shadow_vert:Xu,shadow_frag:qu,sprite_vert:Yu,sprite_frag:Zu},Lt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Et(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},gn={basic:{uniforms:He([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:He([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:He([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:He([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:He([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:He([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:He([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:He([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:He([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:He([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:He([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:He([Lt.common,Lt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:He([Lt.lights,Lt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};gn.physical={uniforms:He([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var Ts={r:0,b:0,g:0},$n=new _n,Ju=new Se;function $u(a,h,p,m,g,_,y){let x=new ue(0),M=_===!0?0:1,S,E,v=null,b=0,A=null;function P(W){let F=W.isScene===!0?W.background:null;if(F&&F.isTexture)F=(W.backgroundBlurriness>0?p:h).get(F);return F}function I(W){let F=!1,k=P(W);if(k===null)w(x,M);else if(k&&k.isColor)w(k,1),F=!0;let rt=a.xr.getEnvironmentBlendMode();if(rt==="additive")m.buffers.color.setClear(0,0,0,1,y);else if(rt==="alpha-blend")m.buffers.color.setClear(0,0,0,0,y);if(a.autoClear||F)m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil)}function T(W,F){let k=P(F);if(k&&(k.isCubeTexture||k.mapping===306)){if(E===void 0)E=new ie(new Be(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:bi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(rt,X,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),g.update(E);if($n.copy(F.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1)$n.y*=-1,$n.z*=-1;if(E.material.uniforms.envMap.value=k,E.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(Ju.makeRotationFromEuler($n)),E.material.toneMapped=pe.getTransfer(k.colorSpace)!=="srgb",v!==k||b!==k.version||A!==a.toneMapping)E.material.needsUpdate=!0,v=k,b=k.version,A=a.toneMapping;E.layers.enableAll(),W.unshift(E,E.geometry,E.material,0,0,null)}else if(k&&k.isTexture){if(S===void 0)S=new ie(new wi(2,2),new Rn({name:"BackgroundMaterial",uniforms:bi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),Object.defineProperty(S.material,"map",{get:function(){return this.uniforms.t2D.value}}),g.update(S);if(S.material.uniforms.t2D.value=k,S.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,S.material.toneMapped=pe.getTransfer(k.colorSpace)!=="srgb",k.matrixAutoUpdate===!0)k.updateMatrix();if(S.material.uniforms.uvTransform.value.copy(k.matrix),v!==k||b!==k.version||A!==a.toneMapping)S.material.needsUpdate=!0,v=k,b=k.version,A=a.toneMapping;S.layers.enableAll(),W.unshift(S,S.geometry,S.material,0,0,null)}}function w(W,F){W.getRGB(Ts,zo(a)),m.buffers.color.setClear(Ts.r,Ts.g,Ts.b,F,y)}return{getClearColor:function(){return x},setClearColor:function(W,F=1){x.set(W),M=F,w(x,M)},getClearAlpha:function(){return M},setClearAlpha:function(W){M=W,w(x,M)},render:I,addToRenderList:T}}function Ku(a,h){let p=a.getParameter(a.MAX_VERTEX_ATTRIBS),m={},g=b(null),_=g,y=!1;function x(B,Q,at,ot,ct){let dt=!1,K=v(ot,at,Q);if(_!==K)_=K,S(_.object);if(dt=A(B,ot,at,ct),dt)P(B,ot,at,ct);if(ct!==null)h.update(ct,a.ELEMENT_ARRAY_BUFFER);if(dt||y){if(y=!1,k(B,Q,at,ot),ct!==null)a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.get(ct).buffer)}}function M(){return a.createVertexArray()}function S(B){return a.bindVertexArray(B)}function E(B){return a.deleteVertexArray(B)}function v(B,Q,at){let ot=at.wireframe===!0,ct=m[B.id];if(ct===void 0)ct={},m[B.id]=ct;let dt=ct[Q.id];if(dt===void 0)dt={},ct[Q.id]=dt;let K=dt[ot];if(K===void 0)K=b(M()),dt[ot]=K;return K}function b(B){let Q=[],at=[],ot=[];for(let ct=0;ct<p;ct++)Q[ct]=0,at[ct]=0,ot[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:at,attributeDivisors:ot,object:B,attributes:{},index:null}}function A(B,Q,at,ot){let ct=_.attributes,dt=Q.attributes,K=0,st=at.getAttributes();for(let Z in st)if(st[Z].location>=0){let U=ct[Z],Vt=dt[Z];if(Vt===void 0){if(Z==="instanceMatrix"&&B.instanceMatrix)Vt=B.instanceMatrix;if(Z==="instanceColor"&&B.instanceColor)Vt=B.instanceColor}if(U===void 0)return!0;if(U.attribute!==Vt)return!0;if(Vt&&U.data!==Vt.data)return!0;K++}if(_.attributesNum!==K)return!0;if(_.index!==ot)return!0;return!1}function P(B,Q,at,ot){let ct={},dt=Q.attributes,K=0,st=at.getAttributes();for(let Z in st)if(st[Z].location>=0){let U=dt[Z];if(U===void 0){if(Z==="instanceMatrix"&&B.instanceMatrix)U=B.instanceMatrix;if(Z==="instanceColor"&&B.instanceColor)U=B.instanceColor}let Vt={};if(Vt.attribute=U,U&&U.data)Vt.data=U.data;ct[Z]=Vt,K++}_.attributes=ct,_.attributesNum=K,_.index=ot}function I(){let B=_.newAttributes;for(let Q=0,at=B.length;Q<at;Q++)B[Q]=0}function T(B){w(B,0)}function w(B,Q){let at=_.newAttributes,ot=_.enabledAttributes,ct=_.attributeDivisors;if(at[B]=1,ot[B]===0)a.enableVertexAttribArray(B),ot[B]=1;if(ct[B]!==Q)a.vertexAttribDivisor(B,Q),ct[B]=Q}function W(){let B=_.newAttributes,Q=_.enabledAttributes;for(let at=0,ot=Q.length;at<ot;at++)if(Q[at]!==B[at])a.disableVertexAttribArray(at),Q[at]=0}function F(B,Q,at,ot,ct,dt,K){if(K===!0)a.vertexAttribIPointer(B,Q,at,ct,dt);else a.vertexAttribPointer(B,Q,at,ot,ct,dt)}function k(B,Q,at,ot){I();let ct=ot.attributes,dt=at.getAttributes(),K=Q.defaultAttributeValues;for(let st in dt){let Z=dt[st];if(Z.location>=0){let Rt=ct[st];if(Rt===void 0){if(st==="instanceMatrix"&&B.instanceMatrix)Rt=B.instanceMatrix;if(st==="instanceColor"&&B.instanceColor)Rt=B.instanceColor}if(Rt!==void 0){let U=Rt.normalized,Vt=Rt.itemSize,$t=h.get(Rt);if($t===void 0)continue;let{buffer:ut,type:bt,bytesPerElement:qt}=$t,kt=bt===a.INT||bt===a.UNSIGNED_INT||Rt.gpuType===1013;if(Rt.isInterleavedBufferAttribute){let Ct=Rt.data,jt=Ct.stride,ae=Rt.offset;if(Ct.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Z.locationSize;Kt++)w(Z.location+Kt,Ct.meshPerAttribute);if(B.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0)ot._maxInstanceCount=Ct.meshPerAttribute*Ct.count}else for(let Kt=0;Kt<Z.locationSize;Kt++)T(Z.location+Kt);a.bindBuffer(a.ARRAY_BUFFER,ut);for(let Kt=0;Kt<Z.locationSize;Kt++)F(Z.location+Kt,Vt/Z.locationSize,bt,U,jt*qt,(ae+Vt/Z.locationSize*Kt)*qt,kt)}else{if(Rt.isInstancedBufferAttribute){for(let Ct=0;Ct<Z.locationSize;Ct++)w(Z.location+Ct,Rt.meshPerAttribute);if(B.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0)ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count}else for(let Ct=0;Ct<Z.locationSize;Ct++)T(Z.location+Ct);a.bindBuffer(a.ARRAY_BUFFER,ut);for(let Ct=0;Ct<Z.locationSize;Ct++)F(Z.location+Ct,Vt/Z.locationSize,bt,U,Vt*qt,Vt/Z.locationSize*Ct*qt,kt)}}else if(K!==void 0){let U=K[st];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(Z.location,U);break;case 3:a.vertexAttrib3fv(Z.location,U);break;case 4:a.vertexAttrib4fv(Z.location,U);break;default:a.vertexAttrib1fv(Z.location,U)}}}}W()}function rt(){lt();for(let B in m){let Q=m[B];for(let at in Q){let ot=Q[at];for(let ct in ot)E(ot[ct].object),delete ot[ct];delete Q[at]}delete m[B]}}function X(B){if(m[B.id]===void 0)return;let Q=m[B.id];for(let at in Q){let ot=Q[at];for(let ct in ot)E(ot[ct].object),delete ot[ct];delete Q[at]}delete m[B.id]}function Y(B){for(let Q in m){let at=m[Q];if(at[B.id]===void 0)continue;let ot=at[B.id];for(let ct in ot)E(ot[ct].object),delete ot[ct];delete at[B.id]}}function lt(){if(O(),y=!0,_===g)return;_=g,S(_.object)}function O(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:x,reset:lt,resetDefaultState:O,dispose:rt,releaseStatesOfGeometry:X,releaseStatesOfProgram:Y,initAttributes:I,enableAttribute:T,disableUnusedAttributes:W}}function ju(a,h,p){let m;function g(S){m=S}function _(S,E){a.drawArrays(m,S,E),p.update(E,m,1)}function y(S,E,v){if(v===0)return;a.drawArraysInstanced(m,S,E,v),p.update(E,m,v)}function x(S,E,v){if(v===0)return;h.get("WEBGL_multi_draw").multiDrawArraysWEBGL(m,S,0,E,0,v);let A=0;for(let P=0;P<v;P++)A+=E[P];p.update(A,m,1)}function M(S,E,v,b){if(v===0)return;let A=h.get("WEBGL_multi_draw");if(A===null)for(let P=0;P<S.length;P++)y(S[P],E[P],b[P]);else{A.multiDrawArraysInstancedWEBGL(m,S,0,E,0,b,0,v);let P=0;for(let I=0;I<v;I++)P+=E[I]*b[I];p.update(P,m,1)}}this.setMode=g,this.render=_,this.renderInstances=y,this.renderMultiDraw=x,this.renderMultiDrawInstances=M}function Qu(a,h,p,m){let g;function _(){if(g!==void 0)return g;if(h.has("EXT_texture_filter_anisotropic")===!0){let Y=h.get("EXT_texture_filter_anisotropic");g=a.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function y(Y){if(Y!==1023&&m.convert(Y)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function x(Y){let lt=Y===1016&&(h.has("EXT_color_buffer_half_float")||h.has("EXT_color_buffer_float"));if(Y!==1009&&m.convert(Y)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&Y!==1015&&!lt)return!1;return!0}function M(Y){if(Y==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";Y="mediump"}if(Y==="mediump"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let S=p.precision!==void 0?p.precision:"highp",E=M(S);if(E!==S)console.warn("THREE.WebGLRenderer:",S,"not supported, using",E,"instead."),S=E;let v=p.logarithmicDepthBuffer===!0,b=p.reverseDepthBuffer===!0&&h.has("EXT_clip_control"),A=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),P=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=a.getParameter(a.MAX_TEXTURE_SIZE),T=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),w=a.getParameter(a.MAX_VERTEX_ATTRIBS),W=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),F=a.getParameter(a.MAX_VARYING_VECTORS),k=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),rt=P>0,X=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:_,getMaxPrecision:M,textureFormatReadable:y,textureTypeReadable:x,precision:S,logarithmicDepthBuffer:v,reverseDepthBuffer:b,maxTextures:A,maxVertexTextures:P,maxTextureSize:I,maxCubemapSize:T,maxAttributes:w,maxVertexUniforms:W,maxVaryings:F,maxFragmentUniforms:k,vertexTextures:rt,maxSamples:X}}function td(a){let h=this,p=null,m=0,g=!1,_=!1,y=new tn,x=new le,M={value:null,needsUpdate:!1};this.uniform=M,this.numPlanes=0,this.numIntersection=0,this.init=function(v,b){let A=v.length!==0||b||m!==0||g;return g=b,m=v.length,A},this.beginShadows=function(){_=!0,E(null)},this.endShadows=function(){_=!1},this.setGlobalState=function(v,b){p=E(v,b,0)},this.setState=function(v,b,A){let{clippingPlanes:P,clipIntersection:I,clipShadows:T}=v,w=a.get(v);if(!g||P===null||P.length===0||_&&!T)if(_)E(null);else S();else{let W=_?0:m,F=W*4,k=w.clippingState||null;M.value=k,k=E(P,b,F,A);for(let rt=0;rt!==F;++rt)k[rt]=p[rt];w.clippingState=k,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=W}};function S(){if(M.value!==p)M.value=p,M.needsUpdate=m>0;h.numPlanes=m,h.numIntersection=0}function E(v,b,A,P){let I=v!==null?v.length:0,T=null;if(I!==0){if(T=M.value,P!==!0||T===null){let w=A+I*4,W=b.matrixWorldInverse;if(x.getNormalMatrix(W),T===null||T.length<w)T=new Float32Array(w);for(let F=0,k=A;F!==I;++F,k+=4)y.copy(v[F]).applyMatrix4(W,x),y.normal.toArray(T,k),T[k+3]=y.constant}M.value=T,M.needsUpdate=!0}return h.numPlanes=I,h.numIntersection=0,T}}function ed(a){let h=new WeakMap;function p(y,x){if(x===303)y.mapping=301;else if(x===304)y.mapping=302;return y}function m(y){if(y&&y.isTexture){let x=y.mapping;if(x===303||x===304)if(h.has(y)){let M=h.get(y).texture;return p(M,y.mapping)}else{let M=y.image;if(M&&M.height>0){let S=new ko(M.height);return S.fromEquirectangularTexture(a,y),h.set(y,S),y.addEventListener("dispose",g),p(S.texture,y.mapping)}else return null}}return y}function g(y){let x=y.target;x.removeEventListener("dispose",g);let M=h.get(x);if(M!==void 0)h.delete(x),M.dispose()}function _(){h=new WeakMap}return{get:m,dispose:_}}class is extends Zr{constructor(a=-1,h=1,p=1,m=-1,g=0.1,_=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=a,this.right=h,this.top=p,this.bottom=m,this.near=g,this.far=_,this.updateProjectionMatrix()}copy(a,h){return super.copy(a,h),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this.view=a.view===null?null:Object.assign({},a.view),this}setViewOffset(a,h,p,m,g,_){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let a=(this.right-this.left)/(2*this.zoom),h=(this.top-this.bottom)/(2*this.zoom),p=(this.right+this.left)/2,m=(this.top+this.bottom)/2,g=p-a,_=p+a,y=m+h,x=m-h;if(this.view!==null&&this.view.enabled){let M=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;g+=M*this.view.offsetX,_=g+M*this.view.width,y-=S*this.view.offsetY,x=y-S*this.view.height}this.projectionMatrix.makeOrthographic(g,_,y,x,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){let h=super.toJSON(a);if(h.object.zoom=this.zoom,h.object.left=this.left,h.object.right=this.right,h.object.top=this.top,h.object.bottom=this.bottom,h.object.near=this.near,h.object.far=this.far,this.view!==null)h.object.view=Object.assign({},this.view);return h}}var vi=4,qa=[0.125,0.215,0.35,0.446,0.526,0.582],Qn=20,Er=new is,Ya=new ue,br=null,Tr=0,wr=0,Ar=!1,jn=(1+Math.sqrt(5))/2,xi=1/jn,Za=[new q(-jn,xi,0),new q(jn,xi,0),new q(-xi,0,jn),new q(xi,0,jn),new q(0,jn,-xi),new q(0,jn,xi),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class $i{constructor(a){this._renderer=a,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(a,h=0,p=0.1,m=100){br=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let g=this._allocateTargets();if(g.depthBuffer=!0,this._sceneToCubeUV(a,p,m,g),h>0)this._blur(g,0,0,h);return this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(a,h=null){return this._fromTexture(a,h)}fromCubemap(a,h=null){return this._fromTexture(a,h)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(a){this._lodMax=Math.floor(Math.log2(a)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let a=0;a<this._lodPlanes.length;a++)this._lodPlanes[a].dispose()}_cleanup(a){this._renderer.setRenderTarget(br,Tr,wr),this._renderer.xr.enabled=Ar,a.scissorTest=!1,ws(a,0,0,a.width,a.height)}_fromTexture(a,h){if(a.mapping===301||a.mapping===302)this._setSize(a.image.length===0?16:a.image[0].width||a.image[0].image.width);else this._setSize(a.image.width/4);br=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let p=h||this._allocateTargets();return this._textureToCubeUV(a,p),this._applyPMREM(p),this._cleanup(p),p}_allocateTargets(){let a=3*Math.max(this._cubeSize,112),h=4*this._cubeSize,p={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},m=Ja(a,h,p);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==a||this._pingPongRenderTarget.height!==h){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Ja(a,h,p);let{_lodMax:g}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nd(g)),this._blurMaterial=id(g,a,h)}return m}_compileMaterial(a){let h=new ie(this._lodPlanes[0],a);this._renderer.compile(h,Er)}_sceneToCubeUV(a,h,p,m){let y=new ke(90,1,h,p),x=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],S=this._renderer,{autoClear:E,toneMapping:v}=S;S.getClearColor(Ya),S.toneMapping=0,S.autoClear=!1;let b=new ns({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),A=new ie(new Be,b),P=!1,I=a.background;if(I){if(I.isColor)b.color.copy(I),a.background=null,P=!0}else b.color.copy(Ya),P=!0;for(let T=0;T<6;T++){let w=T%3;if(w===0)y.up.set(0,x[T],0),y.lookAt(M[T],0,0);else if(w===1)y.up.set(0,0,x[T]),y.lookAt(0,M[T],0);else y.up.set(0,x[T],0),y.lookAt(0,0,M[T]);let W=this._cubeSize;if(ws(m,w*W,T>2?W:0,W,W),S.setRenderTarget(m),P)S.render(A,y);S.render(a,y)}A.geometry.dispose(),A.material.dispose(),S.toneMapping=v,S.autoClear=E,a.background=I}_textureToCubeUV(a,h){let p=this._renderer,m=a.mapping===301||a.mapping===302;if(m){if(this._cubemapMaterial===null)this._cubemapMaterial=Ka();this._cubemapMaterial.uniforms.flipEnvMap.value=a.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=$a();let g=m?this._cubemapMaterial:this._equirectMaterial,_=new ie(this._lodPlanes[0],g),y=g.uniforms;y.envMap.value=a;let x=this._cubeSize;ws(h,0,0,3*x,2*x),p.setRenderTarget(h),p.render(_,Er)}_applyPMREM(a){let h=this._renderer,p=h.autoClear;h.autoClear=!1;let m=this._lodPlanes.length;for(let g=1;g<m;g++){let _=Math.sqrt(this._sigmas[g]*this._sigmas[g]-this._sigmas[g-1]*this._sigmas[g-1]),y=Za[(m-g-1)%Za.length];this._blur(a,g-1,g,_,y)}h.autoClear=p}_blur(a,h,p,m,g){let _=this._pingPongRenderTarget;this._halfBlur(a,_,h,p,m,"latitudinal",g),this._halfBlur(_,a,p,p,m,"longitudinal",g)}_halfBlur(a,h,p,m,g,_,y){let x=this._renderer,M=this._blurMaterial;if(_!=="latitudinal"&&_!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let S=3,E=new ie(this._lodPlanes[m],M),v=M.uniforms,b=this._sizeLods[p]-1,A=isFinite(g)?Math.PI/(2*b):2*Math.PI/(2*Qn-1),P=g/A,I=isFinite(g)?1+Math.floor(S*P):Qn;if(I>Qn)console.warn(`sigmaRadians, ${g}, is too large and will clip, as it requested ${I} samples when the maximum is set to ${Qn}`);let T=[],w=0;for(let X=0;X<Qn;++X){let Y=X/P,lt=Math.exp(-Y*Y/2);if(T.push(lt),X===0)w+=lt;else if(X<I)w+=2*lt}for(let X=0;X<T.length;X++)T[X]=T[X]/w;if(v.envMap.value=a.texture,v.samples.value=I,v.weights.value=T,v.latitudinal.value=_==="latitudinal",y)v.poleAxis.value=y;let{_lodMax:W}=this;v.dTheta.value=A,v.mipInt.value=W-p;let F=this._sizeLods[m],k=3*F*(m>W-vi?m-W+vi:0),rt=4*(this._cubeSize-F);ws(h,k,rt,3*F,2*F),x.setRenderTarget(h),x.render(E,Er)}}function nd(a){let h=[],p=[],m=[],g=a,_=a-vi+1+qa.length;for(let y=0;y<_;y++){let x=Math.pow(2,g);p.push(x);let M=1/x;if(y>a-vi)M=qa[y-a+vi-1];else if(y===0)M=0;m.push(M);let S=1/(x-2),E=-S,v=1+S,b=[E,E,v,E,v,v,E,E,v,v,E,v],A=6,P=6,I=3,T=2,w=1,W=new Float32Array(I*P*A),F=new Float32Array(T*P*A),k=new Float32Array(w*P*A);for(let X=0;X<A;X++){let Y=X%3*2/3-1,lt=X>2?0:-1,O=[Y,lt,0,Y+0.6666666666666666,lt,0,Y+0.6666666666666666,lt+1,0,Y,lt,0,Y+0.6666666666666666,lt+1,0,Y,lt+1,0];W.set(O,I*P*X),F.set(b,T*P*X);let B=[X,X,X,X,X,X];k.set(B,w*P*X)}let rt=new We;if(rt.setAttribute("position",new cn(W,I)),rt.setAttribute("uv",new cn(F,T)),rt.setAttribute("faceIndex",new cn(k,w)),h.push(rt),g>vi)g--}return{lodPlanes:h,sizeLods:p,sigmas:m}}function Ja(a,h,p){let m=new zn(a,h,p);return m.texture.mapping=306,m.texture.name="PMREM.cubeUv",m.scissorTest=!0,m}function ws(a,h,p,m,g){a.viewport.set(h,p,m,g),a.scissor.set(h,p,m,g)}function id(a,h,p){let m=new Float32Array(Qn),g=new q(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/h,CUBEUV_TEXEL_HEIGHT:1/p,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:m},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:g}},vertexShader:$r(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $a(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ka(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

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
	`}function sd(a){let h=new WeakMap,p=null;function m(x){if(x&&x.isTexture){let M=x.mapping,S=M===303||M===304,E=M===301||M===302;if(S||E){let v=h.get(x),b=v!==void 0?v.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==b){if(p===null)p=new $i(a);return v=S?p.fromEquirectangular(x,v):p.fromCubemap(x,v),v.texture.pmremVersion=x.pmremVersion,h.set(x,v),v.texture}else if(v!==void 0)return v.texture;else{let A=x.image;if(S&&A&&A.height>0||E&&A&&g(A)){if(p===null)p=new $i(a);return v=S?p.fromEquirectangular(x):p.fromCubemap(x),v.texture.pmremVersion=x.pmremVersion,h.set(x,v),x.addEventListener("dispose",_),v.texture}else return null}}}return x}function g(x){let M=0,S=6;for(let E=0;E<S;E++)if(x[E]!==void 0)M++;return M===S}function _(x){let M=x.target;M.removeEventListener("dispose",_);let S=h.get(M);if(S!==void 0)h.delete(M),S.dispose()}function y(){if(h=new WeakMap,p!==null)p.dispose(),p=null}return{get:m,dispose:y}}function rd(a){let h={};function p(m){if(h[m]!==void 0)return h[m];let g;switch(m){case"WEBGL_depth_texture":g=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":g=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":g=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":g=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:g=a.getExtension(m)}return h[m]=g,g}return{has:function(m){return p(m)!==null},init:function(){p("EXT_color_buffer_float"),p("WEBGL_clip_cull_distance"),p("OES_texture_float_linear"),p("EXT_color_buffer_half_float"),p("WEBGL_multisampled_render_to_texture"),p("WEBGL_render_shared_exponent")},get:function(m){let g=p(m);if(g===null)Wi("THREE.WebGLRenderer: "+m+" extension not supported.");return g}}}function ad(a,h,p,m){let g={},_=new WeakMap;function y(v){let b=v.target;if(b.index!==null)h.remove(b.index);for(let P in b.attributes)h.remove(b.attributes[P]);for(let P in b.morphAttributes){let I=b.morphAttributes[P];for(let T=0,w=I.length;T<w;T++)h.remove(I[T])}b.removeEventListener("dispose",y),delete g[b.id];let A=_.get(b);if(A)h.remove(A),_.delete(b);if(m.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0)delete b._maxInstanceCount;p.memory.geometries--}function x(v,b){if(g[b.id]===!0)return b;return b.addEventListener("dispose",y),g[b.id]=!0,p.memory.geometries++,b}function M(v){let b=v.attributes;for(let P in b)h.update(b[P],a.ARRAY_BUFFER);let A=v.morphAttributes;for(let P in A){let I=A[P];for(let T=0,w=I.length;T<w;T++)h.update(I[T],a.ARRAY_BUFFER)}}function S(v){let b=[],A=v.index,P=v.attributes.position,I=0;if(A!==null){let W=A.array;I=A.version;for(let F=0,k=W.length;F<k;F+=3){let rt=W[F+0],X=W[F+1],Y=W[F+2];b.push(rt,X,X,Y,Y,rt)}}else if(P!==void 0){let W=P.array;I=P.version;for(let F=0,k=W.length/3-1;F<k;F+=3){let rt=F+0,X=F+1,Y=F+2;b.push(rt,X,X,Y,Y,rt)}}else return;let T=new((Uo(b))?Yr:qr)(b,1);T.version=I;let w=_.get(v);if(w)h.remove(w);_.set(v,T)}function E(v){let b=_.get(v);if(b){let A=v.index;if(A!==null){if(b.version<A.version)S(v)}}else S(v);return _.get(v)}return{get:x,update:M,getWireframeAttribute:E}}function od(a,h,p){let m;function g(b){m=b}let _,y;function x(b){_=b.type,y=b.bytesPerElement}function M(b,A){a.drawElements(m,A,_,b*y),p.update(A,m,1)}function S(b,A,P){if(P===0)return;a.drawElementsInstanced(m,A,_,b*y,P),p.update(A,m,P)}function E(b,A,P){if(P===0)return;h.get("WEBGL_multi_draw").multiDrawElementsWEBGL(m,A,0,_,b,0,P);let T=0;for(let w=0;w<P;w++)T+=A[w];p.update(T,m,1)}function v(b,A,P,I){if(P===0)return;let T=h.get("WEBGL_multi_draw");if(T===null)for(let w=0;w<b.length;w++)S(b[w]/y,A[w],I[w]);else{T.multiDrawElementsInstancedWEBGL(m,A,0,_,b,0,I,0,P);let w=0;for(let W=0;W<P;W++)w+=A[W]*I[W];p.update(w,m,1)}}this.setMode=g,this.setIndex=x,this.render=M,this.renderInstances=S,this.renderMultiDraw=E,this.renderMultiDrawInstances=v}function ld(a){let h={geometries:0,textures:0},p={frame:0,calls:0,triangles:0,points:0,lines:0};function m(_,y,x){switch(p.calls++,y){case a.TRIANGLES:p.triangles+=x*(_/3);break;case a.LINES:p.lines+=x*(_/2);break;case a.LINE_STRIP:p.lines+=x*(_-1);break;case a.LINE_LOOP:p.lines+=x*_;break;case a.POINTS:p.points+=x*_;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",y);break}}function g(){p.calls=0,p.triangles=0,p.points=0,p.lines=0}return{memory:h,render:p,programs:null,autoReset:!0,reset:g,update:m}}function cd(a,h,p){let m=new WeakMap,g=new ye;function _(y,x,M){let S=y.morphTargetInfluences,E=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,v=E!==void 0?E.length:0,b=m.get(x);if(b===void 0||b.count!==v){let O=function(){Y.dispose(),m.delete(x),x.removeEventListener("dispose",O)};if(b!==void 0)b.texture.dispose();let A=x.morphAttributes.position!==void 0,P=x.morphAttributes.normal!==void 0,I=x.morphAttributes.color!==void 0,T=x.morphAttributes.position||[],w=x.morphAttributes.normal||[],W=x.morphAttributes.color||[],F=0;if(A===!0)F=1;if(P===!0)F=2;if(I===!0)F=3;let k=x.attributes.position.count*F,rt=1;if(k>h.maxTextureSize)rt=Math.ceil(k/h.maxTextureSize),k=h.maxTextureSize;let X=new Float32Array(k*rt*4*v),Y=new Xr(X,k,rt,v);Y.type=1015,Y.needsUpdate=!0;let lt=F*4;for(let B=0;B<v;B++){let Q=T[B],at=w[B],ot=W[B],ct=k*rt*4*B;for(let dt=0;dt<Q.count;dt++){let K=dt*lt;if(A===!0)g.fromBufferAttribute(Q,dt),X[ct+K+0]=g.x,X[ct+K+1]=g.y,X[ct+K+2]=g.z,X[ct+K+3]=0;if(P===!0)g.fromBufferAttribute(at,dt),X[ct+K+4]=g.x,X[ct+K+5]=g.y,X[ct+K+6]=g.z,X[ct+K+7]=0;if(I===!0)g.fromBufferAttribute(ot,dt),X[ct+K+8]=g.x,X[ct+K+9]=g.y,X[ct+K+10]=g.z,X[ct+K+11]=ot.itemSize===4?g.w:1}}b={count:v,texture:Y,size:new Et(k,rt)},m.set(x,b),x.addEventListener("dispose",O)}if(y.isInstancedMesh===!0&&y.morphTexture!==null)M.getUniforms().setValue(a,"morphTexture",y.morphTexture,p);else{let A=0;for(let I=0;I<S.length;I++)A+=S[I];let P=x.morphTargetsRelative?1:1-A;M.getUniforms().setValue(a,"morphTargetBaseInfluence",P),M.getUniforms().setValue(a,"morphTargetInfluences",S)}M.getUniforms().setValue(a,"morphTargetsTexture",b.texture,p),M.getUniforms().setValue(a,"morphTargetsTextureSize",b.size)}return{update:_}}function hd(a,h,p,m){let g=new WeakMap;function _(M){let S=m.render.frame,E=M.geometry,v=h.get(M,E);if(g.get(v)!==S)h.update(v),g.set(v,S);if(M.isInstancedMesh){if(M.hasEventListener("dispose",x)===!1)M.addEventListener("dispose",x);if(g.get(M)!==S){if(p.update(M.instanceMatrix,a.ARRAY_BUFFER),M.instanceColor!==null)p.update(M.instanceColor,a.ARRAY_BUFFER);g.set(M,S)}}if(M.isSkinnedMesh){let b=M.skeleton;if(g.get(b)!==S)b.update(),g.set(b,S)}return v}function y(){g=new WeakMap}function x(M){let S=M.target;if(S.removeEventListener("dispose",x),p.remove(S.instanceMatrix),S.instanceColor!==null)p.remove(S.instanceColor)}return{update:_,dispose:y}}class Kr extends Ge{constructor(a,h,p,m,g,_,y,x,M,S=1026){if(S!==1026&&S!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(p===void 0&&S===1026)p=1014;if(p===void 0&&S===1027)p=1020;super(null,m,g,_,y,x,S,p,M);this.isDepthTexture=!0,this.image={width:a,height:h},this.magFilter=y!==void 0?y:1003,this.minFilter=x!==void 0?x:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(a){return super.copy(a),this.compareFunction=a.compareFunction,this}toJSON(a){let h=super.toJSON(a);if(this.compareFunction!==null)h.compareFunction=this.compareFunction;return h}}var Wo=new Ge,ja=new Kr(1,1),Vo=new Xr,Xo=new Oo,qo=new Jr,Qa=[],to=[],eo=new Float32Array(16),no=new Float32Array(9),io=new Float32Array(4);function Ai(a,h,p){let m=a[0];if(m<=0||m>0)return a;let g=h*p,_=Qa[g];if(_===void 0)_=new Float32Array(g),Qa[g]=_;if(h!==0){m.toArray(_,0);for(let y=1,x=0;y!==h;++y)x+=p,a[y].toArray(_,x)}return _}function Ie(a,h){if(a.length!==h.length)return!1;for(let p=0,m=a.length;p<m;p++)if(a[p]!==h[p])return!1;return!0}function De(a,h){for(let p=0,m=h.length;p<m;p++)a[p]=h[p]}function Ws(a,h){let p=to[h];if(p===void 0)p=new Int32Array(h),to[h]=p;for(let m=0;m!==h;++m)p[m]=a.allocateTextureUnit();return p}function ud(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1f(this.addr,h),p[0]=h}function dd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2f(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ie(p,h))return;a.uniform2fv(this.addr,h),De(p,h)}}function fd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3f(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else if(h.r!==void 0){if(p[0]!==h.r||p[1]!==h.g||p[2]!==h.b)a.uniform3f(this.addr,h.r,h.g,h.b),p[0]=h.r,p[1]=h.g,p[2]=h.b}else{if(Ie(p,h))return;a.uniform3fv(this.addr,h),De(p,h)}}function pd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4f(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ie(p,h))return;a.uniform4fv(this.addr,h),De(p,h)}}function md(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ie(p,h))return;a.uniformMatrix2fv(this.addr,!1,h),De(p,h)}else{if(Ie(p,m))return;io.set(m),a.uniformMatrix2fv(this.addr,!1,io),De(p,m)}}function gd(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ie(p,h))return;a.uniformMatrix3fv(this.addr,!1,h),De(p,h)}else{if(Ie(p,m))return;no.set(m),a.uniformMatrix3fv(this.addr,!1,no),De(p,m)}}function _d(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ie(p,h))return;a.uniformMatrix4fv(this.addr,!1,h),De(p,h)}else{if(Ie(p,m))return;eo.set(m),a.uniformMatrix4fv(this.addr,!1,eo),De(p,m)}}function xd(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1i(this.addr,h),p[0]=h}function yd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2i(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ie(p,h))return;a.uniform2iv(this.addr,h),De(p,h)}}function vd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3i(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(Ie(p,h))return;a.uniform3iv(this.addr,h),De(p,h)}}function Md(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4i(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ie(p,h))return;a.uniform4iv(this.addr,h),De(p,h)}}function Sd(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1ui(this.addr,h),p[0]=h}function Ed(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2ui(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ie(p,h))return;a.uniform2uiv(this.addr,h),De(p,h)}}function bd(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3ui(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(Ie(p,h))return;a.uniform3uiv(this.addr,h),De(p,h)}}function Td(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4ui(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ie(p,h))return;a.uniform4uiv(this.addr,h),De(p,h)}}function wd(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;let _;if(this.type===a.SAMPLER_2D_SHADOW)ja.compareFunction=515,_=ja;else _=Wo;p.setTexture2D(h||_,g)}function Ad(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTexture3D(h||Xo,g)}function Rd(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTextureCube(h||qo,g)}function Cd(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTexture2DArray(h||Vo,g)}function Pd(a){switch(a){case 5126:return ud;case 35664:return dd;case 35665:return fd;case 35666:return pd;case 35674:return md;case 35675:return gd;case 35676:return _d;case 5124:case 35670:return xd;case 35667:case 35671:return yd;case 35668:case 35672:return vd;case 35669:case 35673:return Md;case 5125:return Sd;case 36294:return Ed;case 36295:return bd;case 36296:return Td;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Ad;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Cd}}function Id(a,h){a.uniform1fv(this.addr,h)}function Dd(a,h){let p=Ai(h,this.size,2);a.uniform2fv(this.addr,p)}function Ld(a,h){let p=Ai(h,this.size,3);a.uniform3fv(this.addr,p)}function Ud(a,h){let p=Ai(h,this.size,4);a.uniform4fv(this.addr,p)}function Nd(a,h){let p=Ai(h,this.size,4);a.uniformMatrix2fv(this.addr,!1,p)}function Fd(a,h){let p=Ai(h,this.size,9);a.uniformMatrix3fv(this.addr,!1,p)}function Od(a,h){let p=Ai(h,this.size,16);a.uniformMatrix4fv(this.addr,!1,p)}function Bd(a,h){a.uniform1iv(this.addr,h)}function zd(a,h){a.uniform2iv(this.addr,h)}function Hd(a,h){a.uniform3iv(this.addr,h)}function kd(a,h){a.uniform4iv(this.addr,h)}function Gd(a,h){a.uniform1uiv(this.addr,h)}function Wd(a,h){a.uniform2uiv(this.addr,h)}function Vd(a,h){a.uniform3uiv(this.addr,h)}function Xd(a,h){a.uniform4uiv(this.addr,h)}function qd(a,h,p){let m=this.cache,g=h.length,_=Ws(p,g);if(!Ie(m,_))a.uniform1iv(this.addr,_),De(m,_);for(let y=0;y!==g;++y)p.setTexture2D(h[y]||Wo,_[y])}function Yd(a,h,p){let m=this.cache,g=h.length,_=Ws(p,g);if(!Ie(m,_))a.uniform1iv(this.addr,_),De(m,_);for(let y=0;y!==g;++y)p.setTexture3D(h[y]||Xo,_[y])}function Zd(a,h,p){let m=this.cache,g=h.length,_=Ws(p,g);if(!Ie(m,_))a.uniform1iv(this.addr,_),De(m,_);for(let y=0;y!==g;++y)p.setTextureCube(h[y]||qo,_[y])}function Jd(a,h,p){let m=this.cache,g=h.length,_=Ws(p,g);if(!Ie(m,_))a.uniform1iv(this.addr,_),De(m,_);for(let y=0;y!==g;++y)p.setTexture2DArray(h[y]||Vo,_[y])}function $d(a){switch(a){case 5126:return Id;case 35664:return Dd;case 35665:return Ld;case 35666:return Ud;case 35674:return Nd;case 35675:return Fd;case 35676:return Od;case 5124:case 35670:return Bd;case 35667:case 35671:return zd;case 35668:case 35672:return Hd;case 35669:case 35673:return kd;case 5125:return Gd;case 36294:return Wd;case 36295:return Vd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return qd;case 35679:case 36299:case 36307:return Yd;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Jd}}class Yo{constructor(a,h,p){this.id=a,this.addr=p,this.cache=[],this.type=h.type,this.setValue=Pd(h.type)}}class Zo{constructor(a,h,p){this.id=a,this.addr=p,this.cache=[],this.type=h.type,this.size=h.size,this.setValue=$d(h.type)}}class Jo{constructor(a){this.id=a,this.seq=[],this.map={}}setValue(a,h,p){let m=this.seq;for(let g=0,_=m.length;g!==_;++g){let y=m[g];y.setValue(a,h[y.id],p)}}}var Rr=/(\w+)(\])?(\[|\.)?/g;function so(a,h){a.seq.push(h),a.map[h.id]=h}function Kd(a,h,p){let m=a.name,g=m.length;Rr.lastIndex=0;while(!0){let _=Rr.exec(m),y=Rr.lastIndex,x=_[1],M=_[2]==="]",S=_[3];if(M)x=x|0;if(S===void 0||S==="["&&y+2===g){so(p,S===void 0?new Yo(x,a,h):new Zo(x,a,h));break}else{let v=p.map[x];if(v===void 0)v=new Jo(x),so(p,v);p=v}}}class qi{constructor(a,h){this.seq=[],this.map={};let p=a.getProgramParameter(h,a.ACTIVE_UNIFORMS);for(let m=0;m<p;++m){let g=a.getActiveUniform(h,m),_=a.getUniformLocation(h,g.name);Kd(g,_,this)}}setValue(a,h,p,m){let g=this.map[h];if(g!==void 0)g.setValue(a,p,m)}setOptional(a,h,p){let m=h[p];if(m!==void 0)this.setValue(a,p,m)}static upload(a,h,p,m){for(let g=0,_=h.length;g!==_;++g){let y=h[g],x=p[y.id];if(x.needsUpdate!==!1)y.setValue(a,x.value,m)}}static seqWithValue(a,h){let p=[];for(let m=0,g=a.length;m!==g;++m){let _=a[m];if(_.id in h)p.push(_)}return p}}function ro(a,h,p){let m=a.createShader(h);return a.shaderSource(m,p),a.compileShader(m),m}var jd=37297,Qd=0;function tf(a,h){let p=a.split(`
`),m=[],g=Math.max(h-6,0),_=Math.min(h+6,p.length);for(let y=g;y<_;y++){let x=y+1;m.push(`${x===h?">":" "} ${x}: ${p[y]}`)}return m.join(`
`)}var ao=new le;function ef(a){pe._getMatrix(ao,pe.workingColorSpace,a);let h=`mat3( ${ao.elements.map((p)=>p.toFixed(4))} )`;switch(pe.getTransfer(a)){case"linear":return[h,"LinearTransferOETF"];case"srgb":return[h,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[h,"LinearTransferOETF"]}}function oo(a,h,p){let m=a.getShaderParameter(h,a.COMPILE_STATUS),g=a.getShaderInfoLog(h).trim();if(m&&g==="")return"";let _=/ERROR: 0:(\d+)/.exec(g);if(_){let y=parseInt(_[1]);return p.toUpperCase()+`

`+g+`

`+tf(a.getShaderSource(h),y)}else return g}function nf(a,h){let p=ef(h);return[`vec4 ${a}( vec4 value ) {`,`	return ${p[1]}( vec4( value.rgb * ${p[0]}, value.a ) );`,"}"].join(`
`)}function sf(a,h){let p;switch(h){case 1:p="Linear";break;case 2:p="Reinhard";break;case 3:p="Cineon";break;case 4:p="ACESFilmic";break;case 6:p="AgX";break;case 7:p="Neutral";break;case 5:p="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",h),p="Linear"}return"vec3 "+a+"( vec3 color ) { return "+p+"ToneMapping( color ); }"}var As=new q;function rf(){pe.getLuminanceCoefficients(As);let a=As.x.toFixed(4),h=As.y.toFixed(4),p=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${h}, ${p} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function af(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function of(a){let h=[];for(let p in a){let m=a[p];if(m===!1)continue;h.push("#define "+p+" "+m)}return h.join(`
`)}function lf(a,h){let p={},m=a.getProgramParameter(h,a.ACTIVE_ATTRIBUTES);for(let g=0;g<m;g++){let _=a.getActiveAttrib(h,g),y=_.name,x=1;if(_.type===a.FLOAT_MAT2)x=2;if(_.type===a.FLOAT_MAT3)x=3;if(_.type===a.FLOAT_MAT4)x=4;p[y]={type:_.type,location:a.getAttribLocation(h,y),locationSize:x}}return p}function Vi(a){return a!==""}function lo(a,h){let p=h.numSpotLightShadows+h.numSpotLightMaps-h.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,h.numDirLights).replace(/NUM_SPOT_LIGHTS/g,h.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,h.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,p).replace(/NUM_RECT_AREA_LIGHTS/g,h.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,h.numPointLights).replace(/NUM_HEMI_LIGHTS/g,h.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,h.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,h.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,h.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,h.numPointLightShadows)}function co(a,h){return a.replace(/NUM_CLIPPING_PLANES/g,h.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,h.numClippingPlanes-h.numClipIntersection)}var cf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fr(a){return a.replace(cf,uf)}var hf=new Map;function uf(a,h){let p=he[h];if(p===void 0){let m=hf.get(h);if(m!==void 0)p=he[m],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',h,m);else throw Error("Can not resolve #include <"+h+">")}return Fr(p)}var df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(a){return a.replace(df,ff)}function ff(a,h,p,m){let g="";for(let _=parseInt(h);_<parseInt(p);_++)g+=m.replace(/\[\s*i\s*\]/g,"[ "+_+" ]").replace(/UNROLLED_LOOP_INDEX/g,_);return g}function uo(a){let h=`precision ${a.precision} float;
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
#define LOW_PRECISION`;return h}function pf(a){let h="SHADOWMAP_TYPE_BASIC";if(a.shadowMapType===1)h="SHADOWMAP_TYPE_PCF";else if(a.shadowMapType===2)h="SHADOWMAP_TYPE_PCF_SOFT";else if(a.shadowMapType===3)h="SHADOWMAP_TYPE_VSM";return h}function mf(a){let h="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:h="ENVMAP_TYPE_CUBE";break;case 306:h="ENVMAP_TYPE_CUBE_UV";break}return h}function gf(a){let h="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:h="ENVMAP_MODE_REFRACTION";break}return h}function _f(a){let h="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:h="ENVMAP_BLENDING_MULTIPLY";break;case 1:h="ENVMAP_BLENDING_MIX";break;case 2:h="ENVMAP_BLENDING_ADD";break}return h}function xf(a){let h=a.envMapCubeUVHeight;if(h===null)return null;let p=Math.log2(h)-2,m=1/h;return{texelWidth:1/(3*Math.max(Math.pow(2,p),112)),texelHeight:m,maxMip:p}}function yf(a,h,p,m){let g=a.getContext(),{defines:_,vertexShader:y,fragmentShader:x}=p,M=pf(p),S=mf(p),E=gf(p),v=_f(p),b=xf(p),A=af(p),P=of(_),I=g.createProgram(),T,w,W=p.glslVersion?"#version "+p.glslVersion+`
`:"";if(p.isRawShaderMaterial){if(T=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,P].filter(Vi).join(`
`),T.length>0)T+=`
`;if(w=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,P].filter(Vi).join(`
`),w.length>0)w+=`
`}else T=[uo(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,P,p.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",p.batching?"#define USE_BATCHING":"",p.batchingColor?"#define USE_BATCHING_COLOR":"",p.instancing?"#define USE_INSTANCING":"",p.instancingColor?"#define USE_INSTANCING_COLOR":"",p.instancingMorph?"#define USE_INSTANCING_MORPH":"",p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.map?"#define USE_MAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+E:"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.displacementMap?"#define USE_DISPLACEMENTMAP":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.mapUv?"#define MAP_UV "+p.mapUv:"",p.alphaMapUv?"#define ALPHAMAP_UV "+p.alphaMapUv:"",p.lightMapUv?"#define LIGHTMAP_UV "+p.lightMapUv:"",p.aoMapUv?"#define AOMAP_UV "+p.aoMapUv:"",p.emissiveMapUv?"#define EMISSIVEMAP_UV "+p.emissiveMapUv:"",p.bumpMapUv?"#define BUMPMAP_UV "+p.bumpMapUv:"",p.normalMapUv?"#define NORMALMAP_UV "+p.normalMapUv:"",p.displacementMapUv?"#define DISPLACEMENTMAP_UV "+p.displacementMapUv:"",p.metalnessMapUv?"#define METALNESSMAP_UV "+p.metalnessMapUv:"",p.roughnessMapUv?"#define ROUGHNESSMAP_UV "+p.roughnessMapUv:"",p.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+p.anisotropyMapUv:"",p.clearcoatMapUv?"#define CLEARCOATMAP_UV "+p.clearcoatMapUv:"",p.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+p.clearcoatNormalMapUv:"",p.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+p.clearcoatRoughnessMapUv:"",p.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+p.iridescenceMapUv:"",p.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+p.iridescenceThicknessMapUv:"",p.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+p.sheenColorMapUv:"",p.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+p.sheenRoughnessMapUv:"",p.specularMapUv?"#define SPECULARMAP_UV "+p.specularMapUv:"",p.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+p.specularColorMapUv:"",p.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+p.specularIntensityMapUv:"",p.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+p.transmissionMapUv:"",p.thicknessMapUv?"#define THICKNESSMAP_UV "+p.thicknessMapUv:"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.flatShading?"#define FLAT_SHADED":"",p.skinning?"#define USE_SKINNING":"",p.morphTargets?"#define USE_MORPHTARGETS":"",p.morphNormals&&p.flatShading===!1?"#define USE_MORPHNORMALS":"",p.morphColors?"#define USE_MORPHCOLORS":"",p.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+p.morphTextureStride:"",p.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+p.morphTargetsCount:"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+M:"",p.sizeAttenuation?"#define USE_SIZEATTENUATION":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),w=[uo(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,P,p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",p.map?"#define USE_MAP":"",p.matcap?"#define USE_MATCAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+S:"",p.envMap?"#define "+E:"",p.envMap?"#define "+v:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoat?"#define USE_CLEARCOAT":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.dispersion?"#define USE_DISPERSION":"",p.iridescence?"#define USE_IRIDESCENCE":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaTest?"#define USE_ALPHATEST":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.sheen?"#define USE_SHEEN":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors||p.instancingColor||p.batchingColor?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.gradientMap?"#define USE_GRADIENTMAP":"",p.flatShading?"#define FLAT_SHADED":"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+M:"",p.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",p.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",p.toneMapping!==0?"#define TONE_MAPPING":"",p.toneMapping!==0?he.tonemapping_pars_fragment:"",p.toneMapping!==0?sf("toneMapping",p.toneMapping):"",p.dithering?"#define DITHERING":"",p.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,nf("linearToOutputTexel",p.outputColorSpace),rf(),p.useDepthPacking?"#define DEPTH_PACKING "+p.depthPacking:"",`
`].filter(Vi).join(`
`);if(y=Fr(y),y=lo(y,p),y=co(y,p),x=Fr(x),x=lo(x,p),x=co(x,p),y=ho(y),x=ho(x),p.isRawShaderMaterial!==!0)W=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,w=["#define varying in",p.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",p.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w;let F=W+T+y,k=W+w+x,rt=ro(g,g.VERTEX_SHADER,F),X=ro(g,g.FRAGMENT_SHADER,k);if(g.attachShader(I,rt),g.attachShader(I,X),p.index0AttributeName!==void 0)g.bindAttribLocation(I,0,p.index0AttributeName);else if(p.morphTargets===!0)g.bindAttribLocation(I,0,"position");g.linkProgram(I);function Y(Q){if(a.debug.checkShaderErrors){let at=g.getProgramInfoLog(I).trim(),ot=g.getShaderInfoLog(rt).trim(),ct=g.getShaderInfoLog(X).trim(),dt=!0,K=!0;if(g.getProgramParameter(I,g.LINK_STATUS)===!1)if(dt=!1,typeof a.debug.onShaderError==="function")a.debug.onShaderError(g,I,rt,X);else{let st=oo(g,rt,"vertex"),Z=oo(g,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+g.getError()+" - VALIDATE_STATUS "+g.getProgramParameter(I,g.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+at+`
`+st+`
`+Z)}else if(at!=="")console.warn("THREE.WebGLProgram: Program Info Log:",at);else if(ot===""||ct==="")K=!1;if(K)Q.diagnostics={runnable:dt,programLog:at,vertexShader:{log:ot,prefix:T},fragmentShader:{log:ct,prefix:w}}}g.deleteShader(rt),g.deleteShader(X),lt=new qi(g,I),O=lf(g,I)}let lt;this.getUniforms=function(){if(lt===void 0)Y(this);return lt};let O;this.getAttributes=function(){if(O===void 0)Y(this);return O};let B=p.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(B===!1)B=g.getProgramParameter(I,jd);return B},this.destroy=function(){m.releaseStatesOfProgram(this),g.deleteProgram(I),this.program=void 0},this.type=p.shaderType,this.name=p.shaderName,this.id=Qd++,this.cacheKey=h,this.usedTimes=1,this.program=I,this.vertexShader=rt,this.fragmentShader=X,this}var vf=0;class $o{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(a){let{vertexShader:h,fragmentShader:p}=a,m=this._getShaderStage(h),g=this._getShaderStage(p),_=this._getShaderCacheForMaterial(a);if(_.has(m)===!1)_.add(m),m.usedTimes++;if(_.has(g)===!1)_.add(g),g.usedTimes++;return this}remove(a){let h=this.materialCache.get(a);for(let p of h)if(p.usedTimes--,p.usedTimes===0)this.shaderCache.delete(p.code);return this.materialCache.delete(a),this}getVertexShaderID(a){return this._getShaderStage(a.vertexShader).id}getFragmentShaderID(a){return this._getShaderStage(a.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(a){let h=this.materialCache,p=h.get(a);if(p===void 0)p=new Set,h.set(a,p);return p}_getShaderStage(a){let h=this.shaderCache,p=h.get(a);if(p===void 0)p=new Ko(a),h.set(a,p);return p}}class Ko{constructor(a){this.id=vf++,this.code=a,this.usedTimes=0}}function Mf(a,h,p,m,g,_,y){let x=new ks,M=new $o,S=new Set,E=[],{logarithmicDepthBuffer:v,vertexTextures:b,precision:A}=g,P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function I(O){if(S.add(O),O===0)return"uv";return`uv${O}`}function T(O,B,Q,at,ot){let ct=at.fog,dt=ot.geometry,K=O.isMeshStandardMaterial?at.environment:null,st=(O.isMeshStandardMaterial?p:h).get(O.envMap||K),Z=!!st&&st.mapping===306?st.image.height:null,Rt=P[O.type];if(O.precision!==null){if(A=g.getMaxPrecision(O.precision),A!==O.precision)console.warn("THREE.WebGLProgram.getParameters:",O.precision,"not supported, using",A,"instead.")}let U=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Vt=U!==void 0?U.length:0,$t=0;if(dt.morphAttributes.position!==void 0)$t=1;if(dt.morphAttributes.normal!==void 0)$t=2;if(dt.morphAttributes.color!==void 0)$t=3;let ut,bt,qt,kt;if(Rt){let fe=gn[Rt];ut=fe.vertexShader,bt=fe.fragmentShader}else ut=O.vertexShader,bt=O.fragmentShader,M.update(O),qt=M.getVertexShaderID(O),kt=M.getFragmentShaderID(O);let Ct=a.getRenderTarget(),jt=a.state.buffers.depth.getReversed(),ae=ot.isInstancedMesh===!0,Kt=ot.isBatchedMesh===!0,_t=!!O.map,Tt=!!O.matcap,V=!!st,zt=!!O.aoMap,wt=!!O.lightMap,Gt=!!O.bumpMap,St=!!O.normalMap,Qt=!!O.displacementMap,Bt=!!O.emissiveMap,Wt=!!O.metalnessMap,G=!!O.roughnessMap,L=O.anisotropy>0,it=O.clearcoat>0,pt=O.dispersion>0,yt=O.iridescence>0,ht=O.sheen>0,Zt=O.transmission>0,Pt=L&&!!O.anisotropyMap,Nt=it&&!!O.clearcoatMap,ee=it&&!!O.clearcoatNormalMap,Mt=it&&!!O.clearcoatRoughnessMap,Ft=yt&&!!O.iridescenceMap,oe=yt&&!!O.iridescenceThicknessMap,te=ht&&!!O.sheenColorMap,Ht=ht&&!!O.sheenRoughnessMap,se=!!O.specularMap,ce=!!O.specularColorMap,Ee=!!O.specularIntensityMap,et=Zt&&!!O.transmissionMap,vt=Zt&&!!O.thicknessMap,ft=!!O.gradientMap,mt=!!O.alphaMap,At=O.alphaTest>0,Ut=!!O.alphaHash,re=!!O.extensions,be=0;if(O.toneMapped){if(Ct===null||Ct.isXRRenderTarget===!0)be=a.toneMapping}let Te={shaderID:Rt,shaderType:O.type,shaderName:O.name,vertexShader:ut,fragmentShader:bt,defines:O.defines,customVertexShaderID:qt,customFragmentShaderID:kt,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:A,batching:Kt,batchingColor:Kt&&ot._colorsTexture!==null,instancing:ae,instancingColor:ae&&ot.instanceColor!==null,instancingMorph:ae&&ot.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:Ct===null?a.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:"srgb-linear",alphaToCoverage:!!O.alphaToCoverage,map:_t,matcap:Tt,envMap:V,envMapMode:V&&st.mapping,envMapCubeUVHeight:Z,aoMap:zt,lightMap:wt,bumpMap:Gt,normalMap:St,displacementMap:b&&Qt,emissiveMap:Bt,normalMapObjectSpace:St&&O.normalMapType===1,normalMapTangentSpace:St&&O.normalMapType===0,metalnessMap:Wt,roughnessMap:G,anisotropy:L,anisotropyMap:Pt,clearcoat:it,clearcoatMap:Nt,clearcoatNormalMap:ee,clearcoatRoughnessMap:Mt,dispersion:pt,iridescence:yt,iridescenceMap:Ft,iridescenceThicknessMap:oe,sheen:ht,sheenColorMap:te,sheenRoughnessMap:Ht,specularMap:se,specularColorMap:ce,specularIntensityMap:Ee,transmission:Zt,transmissionMap:et,thicknessMap:vt,gradientMap:ft,opaque:O.transparent===!1&&O.blending===1&&O.alphaToCoverage===!1,alphaMap:mt,alphaTest:At,alphaHash:Ut,combine:O.combine,mapUv:_t&&I(O.map.channel),aoMapUv:zt&&I(O.aoMap.channel),lightMapUv:wt&&I(O.lightMap.channel),bumpMapUv:Gt&&I(O.bumpMap.channel),normalMapUv:St&&I(O.normalMap.channel),displacementMapUv:Qt&&I(O.displacementMap.channel),emissiveMapUv:Bt&&I(O.emissiveMap.channel),metalnessMapUv:Wt&&I(O.metalnessMap.channel),roughnessMapUv:G&&I(O.roughnessMap.channel),anisotropyMapUv:Pt&&I(O.anisotropyMap.channel),clearcoatMapUv:Nt&&I(O.clearcoatMap.channel),clearcoatNormalMapUv:ee&&I(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&I(O.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&I(O.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&I(O.iridescenceThicknessMap.channel),sheenColorMapUv:te&&I(O.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&I(O.sheenRoughnessMap.channel),specularMapUv:se&&I(O.specularMap.channel),specularColorMapUv:ce&&I(O.specularColorMap.channel),specularIntensityMapUv:Ee&&I(O.specularIntensityMap.channel),transmissionMapUv:et&&I(O.transmissionMap.channel),thicknessMapUv:vt&&I(O.thicknessMap.channel),alphaMapUv:mt&&I(O.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(St||L),vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!dt.attributes.uv&&(_t||mt),fog:!!ct,useFog:O.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:O.flatShading===!0,sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:jt,skinning:ot.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:$t,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:y.numPlanes,numClipIntersection:y.numIntersection,dithering:O.dithering,shadowMapEnabled:a.shadowMap.enabled&&Q.length>0,shadowMapType:a.shadowMap.type,toneMapping:be,decodeVideoTexture:_t&&O.map.isVideoTexture===!0&&pe.getTransfer(O.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Bt&&O.emissiveMap.isVideoTexture===!0&&pe.getTransfer(O.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===2,flipSided:O.side===1,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:re&&O.extensions.clipCullDistance===!0&&m.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&O.extensions.multiDraw===!0||Kt)&&m.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:m.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return Te.vertexUv1s=S.has(1),Te.vertexUv2s=S.has(2),Te.vertexUv3s=S.has(3),S.clear(),Te}function w(O){let B=[];if(O.shaderID)B.push(O.shaderID);else B.push(O.customVertexShaderID),B.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let Q in O.defines)B.push(Q),B.push(O.defines[Q]);if(O.isRawShaderMaterial===!1)W(B,O),F(B,O),B.push(a.outputColorSpace);return B.push(O.customProgramCacheKey),B.join()}function W(O,B){O.push(B.precision),O.push(B.outputColorSpace),O.push(B.envMapMode),O.push(B.envMapCubeUVHeight),O.push(B.mapUv),O.push(B.alphaMapUv),O.push(B.lightMapUv),O.push(B.aoMapUv),O.push(B.bumpMapUv),O.push(B.normalMapUv),O.push(B.displacementMapUv),O.push(B.emissiveMapUv),O.push(B.metalnessMapUv),O.push(B.roughnessMapUv),O.push(B.anisotropyMapUv),O.push(B.clearcoatMapUv),O.push(B.clearcoatNormalMapUv),O.push(B.clearcoatRoughnessMapUv),O.push(B.iridescenceMapUv),O.push(B.iridescenceThicknessMapUv),O.push(B.sheenColorMapUv),O.push(B.sheenRoughnessMapUv),O.push(B.specularMapUv),O.push(B.specularColorMapUv),O.push(B.specularIntensityMapUv),O.push(B.transmissionMapUv),O.push(B.thicknessMapUv),O.push(B.combine),O.push(B.fogExp2),O.push(B.sizeAttenuation),O.push(B.morphTargetsCount),O.push(B.morphAttributeCount),O.push(B.numDirLights),O.push(B.numPointLights),O.push(B.numSpotLights),O.push(B.numSpotLightMaps),O.push(B.numHemiLights),O.push(B.numRectAreaLights),O.push(B.numDirLightShadows),O.push(B.numPointLightShadows),O.push(B.numSpotLightShadows),O.push(B.numSpotLightShadowsWithMaps),O.push(B.numLightProbes),O.push(B.shadowMapType),O.push(B.toneMapping),O.push(B.numClippingPlanes),O.push(B.numClipIntersection),O.push(B.depthPacking)}function F(O,B){if(x.disableAll(),B.supportsVertexTextures)x.enable(0);if(B.instancing)x.enable(1);if(B.instancingColor)x.enable(2);if(B.instancingMorph)x.enable(3);if(B.matcap)x.enable(4);if(B.envMap)x.enable(5);if(B.normalMapObjectSpace)x.enable(6);if(B.normalMapTangentSpace)x.enable(7);if(B.clearcoat)x.enable(8);if(B.iridescence)x.enable(9);if(B.alphaTest)x.enable(10);if(B.vertexColors)x.enable(11);if(B.vertexAlphas)x.enable(12);if(B.vertexUv1s)x.enable(13);if(B.vertexUv2s)x.enable(14);if(B.vertexUv3s)x.enable(15);if(B.vertexTangents)x.enable(16);if(B.anisotropy)x.enable(17);if(B.alphaHash)x.enable(18);if(B.batching)x.enable(19);if(B.dispersion)x.enable(20);if(B.batchingColor)x.enable(21);if(O.push(x.mask),x.disableAll(),B.fog)x.enable(0);if(B.useFog)x.enable(1);if(B.flatShading)x.enable(2);if(B.logarithmicDepthBuffer)x.enable(3);if(B.reverseDepthBuffer)x.enable(4);if(B.skinning)x.enable(5);if(B.morphTargets)x.enable(6);if(B.morphNormals)x.enable(7);if(B.morphColors)x.enable(8);if(B.premultipliedAlpha)x.enable(9);if(B.shadowMapEnabled)x.enable(10);if(B.doubleSided)x.enable(11);if(B.flipSided)x.enable(12);if(B.useDepthPacking)x.enable(13);if(B.dithering)x.enable(14);if(B.transmission)x.enable(15);if(B.sheen)x.enable(16);if(B.opaque)x.enable(17);if(B.pointsUvs)x.enable(18);if(B.decodeVideoTexture)x.enable(19);if(B.decodeVideoTextureEmissive)x.enable(20);if(B.alphaToCoverage)x.enable(21);O.push(x.mask)}function k(O){let B=P[O.type],Q;if(B){let at=gn[B];Q=hc.clone(at.uniforms)}else Q=O.uniforms;return Q}function rt(O,B){let Q;for(let at=0,ot=E.length;at<ot;at++){let ct=E[at];if(ct.cacheKey===B){Q=ct,++Q.usedTimes;break}}if(Q===void 0)Q=new yf(a,B,O,_),E.push(Q);return Q}function X(O){if(--O.usedTimes===0){let B=E.indexOf(O);E[B]=E[E.length-1],E.pop(),O.destroy()}}function Y(O){M.remove(O)}function lt(){M.dispose()}return{getParameters:T,getProgramCacheKey:w,getUniforms:k,acquireProgram:rt,releaseProgram:X,releaseShaderCache:Y,programs:E,dispose:lt}}function Sf(){let a=new WeakMap;function h(y){return a.has(y)}function p(y){let x=a.get(y);if(x===void 0)x={},a.set(y,x);return x}function m(y){a.delete(y)}function g(y,x,M){a.get(y)[x]=M}function _(){a=new WeakMap}return{has:h,get:p,remove:m,update:g,dispose:_}}function Ef(a,h){if(a.groupOrder!==h.groupOrder)return a.groupOrder-h.groupOrder;else if(a.renderOrder!==h.renderOrder)return a.renderOrder-h.renderOrder;else if(a.material.id!==h.material.id)return a.material.id-h.material.id;else if(a.z!==h.z)return a.z-h.z;else return a.id-h.id}function fo(a,h){if(a.groupOrder!==h.groupOrder)return a.groupOrder-h.groupOrder;else if(a.renderOrder!==h.renderOrder)return a.renderOrder-h.renderOrder;else if(a.z!==h.z)return h.z-a.z;else return a.id-h.id}function po(){let a=[],h=0,p=[],m=[],g=[];function _(){h=0,p.length=0,m.length=0,g.length=0}function y(v,b,A,P,I,T){let w=a[h];if(w===void 0)w={id:v.id,object:v,geometry:b,material:A,groupOrder:P,renderOrder:v.renderOrder,z:I,group:T},a[h]=w;else w.id=v.id,w.object=v,w.geometry=b,w.material=A,w.groupOrder=P,w.renderOrder=v.renderOrder,w.z=I,w.group=T;return h++,w}function x(v,b,A,P,I,T){let w=y(v,b,A,P,I,T);if(A.transmission>0)m.push(w);else if(A.transparent===!0)g.push(w);else p.push(w)}function M(v,b,A,P,I,T){let w=y(v,b,A,P,I,T);if(A.transmission>0)m.unshift(w);else if(A.transparent===!0)g.unshift(w);else p.unshift(w)}function S(v,b){if(p.length>1)p.sort(v||Ef);if(m.length>1)m.sort(b||fo);if(g.length>1)g.sort(b||fo)}function E(){for(let v=h,b=a.length;v<b;v++){let A=a[v];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:p,transmissive:m,transparent:g,init:_,push:x,unshift:M,finish:E,sort:S}}function bf(){let a=new WeakMap;function h(m,g){let _=a.get(m),y;if(_===void 0)y=new po,a.set(m,[y]);else if(g>=_.length)y=new po,_.push(y);else y=_[g];return y}function p(){a=new WeakMap}return{get:h,dispose:p}}function Tf(){let a={};return{get:function(h){if(a[h.id]!==void 0)return a[h.id];let p;switch(h.type){case"DirectionalLight":p={direction:new q,color:new ue};break;case"SpotLight":p={position:new q,direction:new q,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":p={position:new q,color:new ue,distance:0,decay:0};break;case"HemisphereLight":p={direction:new q,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":p={color:new ue,position:new q,halfWidth:new q,halfHeight:new q};break}return a[h.id]=p,p}}}function wf(){let a={};return{get:function(h){if(a[h.id]!==void 0)return a[h.id];let p;switch(h.type){case"DirectionalLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1000};break}return a[h.id]=p,p}}}var Af=0;function Rf(a,h){return(h.castShadow?2:0)-(a.castShadow?2:0)+(h.map?1:0)-(a.map?1:0)}function Cf(a){let h=new Tf,p=wf(),m={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let S=0;S<9;S++)m.probe.push(new q);let g=new q,_=new Se,y=new Se;function x(S){let E=0,v=0,b=0;for(let O=0;O<9;O++)m.probe[O].set(0,0,0);let A=0,P=0,I=0,T=0,w=0,W=0,F=0,k=0,rt=0,X=0,Y=0;S.sort(Rf);for(let O=0,B=S.length;O<B;O++){let Q=S[O],{color:at,intensity:ot,distance:ct}=Q,dt=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)E+=at.r*ot,v+=at.g*ot,b+=at.b*ot;else if(Q.isLightProbe){for(let K=0;K<9;K++)m.probe[K].addScaledVector(Q.sh.coefficients[K],ot);Y++}else if(Q.isDirectionalLight){let K=h.get(Q);if(K.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){let st=Q.shadow,Z=p.get(Q);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,m.directionalShadow[A]=Z,m.directionalShadowMap[A]=dt,m.directionalShadowMatrix[A]=Q.shadow.matrix,W++}m.directional[A]=K,A++}else if(Q.isSpotLight){let K=h.get(Q);K.position.setFromMatrixPosition(Q.matrixWorld),K.color.copy(at).multiplyScalar(ot),K.distance=ct,K.coneCos=Math.cos(Q.angle),K.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),K.decay=Q.decay,m.spot[I]=K;let st=Q.shadow;if(Q.map){if(m.spotLightMap[rt]=Q.map,rt++,st.updateMatrices(Q),Q.castShadow)X++}if(m.spotLightMatrix[I]=st.matrix,Q.castShadow){let Z=p.get(Q);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,m.spotShadow[I]=Z,m.spotShadowMap[I]=dt,k++}I++}else if(Q.isRectAreaLight){let K=h.get(Q);K.color.copy(at).multiplyScalar(ot),K.halfWidth.set(Q.width*0.5,0,0),K.halfHeight.set(0,Q.height*0.5,0),m.rectArea[T]=K,T++}else if(Q.isPointLight){let K=h.get(Q);if(K.color.copy(Q.color).multiplyScalar(Q.intensity),K.distance=Q.distance,K.decay=Q.decay,Q.castShadow){let st=Q.shadow,Z=p.get(Q);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,Z.shadowCameraNear=st.camera.near,Z.shadowCameraFar=st.camera.far,m.pointShadow[P]=Z,m.pointShadowMap[P]=dt,m.pointShadowMatrix[P]=Q.shadow.matrix,F++}m.point[P]=K,P++}else if(Q.isHemisphereLight){let K=h.get(Q);K.skyColor.copy(Q.color).multiplyScalar(ot),K.groundColor.copy(Q.groundColor).multiplyScalar(ot),m.hemi[w]=K,w++}}if(T>0)if(a.has("OES_texture_float_linear")===!0)m.rectAreaLTC1=Lt.LTC_FLOAT_1,m.rectAreaLTC2=Lt.LTC_FLOAT_2;else m.rectAreaLTC1=Lt.LTC_HALF_1,m.rectAreaLTC2=Lt.LTC_HALF_2;m.ambient[0]=E,m.ambient[1]=v,m.ambient[2]=b;let lt=m.hash;if(lt.directionalLength!==A||lt.pointLength!==P||lt.spotLength!==I||lt.rectAreaLength!==T||lt.hemiLength!==w||lt.numDirectionalShadows!==W||lt.numPointShadows!==F||lt.numSpotShadows!==k||lt.numSpotMaps!==rt||lt.numLightProbes!==Y)m.directional.length=A,m.spot.length=I,m.rectArea.length=T,m.point.length=P,m.hemi.length=w,m.directionalShadow.length=W,m.directionalShadowMap.length=W,m.pointShadow.length=F,m.pointShadowMap.length=F,m.spotShadow.length=k,m.spotShadowMap.length=k,m.directionalShadowMatrix.length=W,m.pointShadowMatrix.length=F,m.spotLightMatrix.length=k+rt-X,m.spotLightMap.length=rt,m.numSpotLightShadowsWithMaps=X,m.numLightProbes=Y,lt.directionalLength=A,lt.pointLength=P,lt.spotLength=I,lt.rectAreaLength=T,lt.hemiLength=w,lt.numDirectionalShadows=W,lt.numPointShadows=F,lt.numSpotShadows=k,lt.numSpotMaps=rt,lt.numLightProbes=Y,m.version=Af++}function M(S,E){let v=0,b=0,A=0,P=0,I=0,T=E.matrixWorldInverse;for(let w=0,W=S.length;w<W;w++){let F=S[w];if(F.isDirectionalLight){let k=m.directional[v];k.direction.setFromMatrixPosition(F.matrixWorld),g.setFromMatrixPosition(F.target.matrixWorld),k.direction.sub(g),k.direction.transformDirection(T),v++}else if(F.isSpotLight){let k=m.spot[A];k.position.setFromMatrixPosition(F.matrixWorld),k.position.applyMatrix4(T),k.direction.setFromMatrixPosition(F.matrixWorld),g.setFromMatrixPosition(F.target.matrixWorld),k.direction.sub(g),k.direction.transformDirection(T),A++}else if(F.isRectAreaLight){let k=m.rectArea[P];k.position.setFromMatrixPosition(F.matrixWorld),k.position.applyMatrix4(T),y.identity(),_.copy(F.matrixWorld),_.premultiply(T),y.extractRotation(_),k.halfWidth.set(F.width*0.5,0,0),k.halfHeight.set(0,F.height*0.5,0),k.halfWidth.applyMatrix4(y),k.halfHeight.applyMatrix4(y),P++}else if(F.isPointLight){let k=m.point[b];k.position.setFromMatrixPosition(F.matrixWorld),k.position.applyMatrix4(T),b++}else if(F.isHemisphereLight){let k=m.hemi[I];k.direction.setFromMatrixPosition(F.matrixWorld),k.direction.transformDirection(T),I++}}}return{setup:x,setupView:M,state:m}}function mo(a){let h=new Cf(a),p=[],m=[];function g(E){S.camera=E,p.length=0,m.length=0}function _(E){p.push(E)}function y(E){m.push(E)}function x(){h.setup(p)}function M(E){h.setupView(p,E)}let S={lightsArray:p,shadowsArray:m,camera:null,lights:h,transmissionRenderTarget:{}};return{init:g,state:S,setupLights:x,setupLightsView:M,pushLight:_,pushShadow:y}}function Pf(a){let h=new WeakMap;function p(g,_=0){let y=h.get(g),x;if(y===void 0)x=new mo(a),h.set(g,[x]);else if(_>=y.length)x=new mo(a),y.push(x);else x=y[_];return x}function m(){h=new WeakMap}return{get:p,dispose:m}}class jo extends Gn{static get type(){return"MeshDepthMaterial"}constructor(a){super();this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(a)}copy(a){return super.copy(a),this.depthPacking=a.depthPacking,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this}}class Qo extends Gn{static get type(){return"MeshDistanceMaterial"}constructor(a){super();this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(a)}copy(a){return super.copy(a),this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this}}var If=`void main() {
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
}`;function Lf(a,h,p){let m=new Gs,g=new Et,_=new Et,y=new ye,x=new jo({depthPacking:3201}),M=new Qo,S={},E=p.maxTextureSize,v={[0]:1,[1]:0,[2]:2},b=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:If,fragmentShader:Df}),A=b.clone();A.defines.HORIZONTAL_PASS=1;let P=new We;P.setAttribute("position",new cn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new ie(P,b),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let w=this.type;this.render=function(X,Y,lt){if(T.enabled===!1)return;if(T.autoUpdate===!1&&T.needsUpdate===!1)return;if(X.length===0)return;let O=a.getRenderTarget(),B=a.getActiveCubeFace(),Q=a.getActiveMipmapLevel(),at=a.state;at.setBlending(0),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);let ot=w!==3&&this.type===3,ct=w===3&&this.type!==3;for(let dt=0,K=X.length;dt<K;dt++){let st=X[dt],Z=st.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;g.copy(Z.mapSize);let Rt=Z.getFrameExtents();if(g.multiply(Rt),_.copy(Z.mapSize),g.x>E||g.y>E){if(g.x>E)_.x=Math.floor(E/Rt.x),g.x=_.x*Rt.x,Z.mapSize.x=_.x;if(g.y>E)_.y=Math.floor(E/Rt.y),g.y=_.y*Rt.y,Z.mapSize.y=_.y}if(Z.map===null||ot===!0||ct===!0){let Vt=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(Z.map!==null)Z.map.dispose();Z.map=new zn(g.x,g.y,Vt),Z.map.texture.name=st.name+".shadowMap",Z.camera.updateProjectionMatrix()}a.setRenderTarget(Z.map),a.clear();let U=Z.getViewportCount();for(let Vt=0;Vt<U;Vt++){let $t=Z.getViewport(Vt);y.set(_.x*$t.x,_.y*$t.y,_.x*$t.z,_.y*$t.w),at.viewport(y),Z.updateMatrices(st,Vt),m=Z.getFrustum(),k(Y,lt,Z.camera,st,this.type)}if(Z.isPointLightShadow!==!0&&this.type===3)W(Z,lt);Z.needsUpdate=!1}w=this.type,T.needsUpdate=!1,a.setRenderTarget(O,B,Q)};function W(X,Y){let lt=h.update(I);if(b.defines.VSM_SAMPLES!==X.blurSamples)b.defines.VSM_SAMPLES=X.blurSamples,A.defines.VSM_SAMPLES=X.blurSamples,b.needsUpdate=!0,A.needsUpdate=!0;if(X.mapPass===null)X.mapPass=new zn(g.x,g.y);b.uniforms.shadow_pass.value=X.map.texture,b.uniforms.resolution.value=X.mapSize,b.uniforms.radius.value=X.radius,a.setRenderTarget(X.mapPass),a.clear(),a.renderBufferDirect(Y,null,lt,b,I,null),A.uniforms.shadow_pass.value=X.mapPass.texture,A.uniforms.resolution.value=X.mapSize,A.uniforms.radius.value=X.radius,a.setRenderTarget(X.map),a.clear(),a.renderBufferDirect(Y,null,lt,A,I,null)}function F(X,Y,lt,O){let B=null,Q=lt.isPointLight===!0?X.customDistanceMaterial:X.customDepthMaterial;if(Q!==void 0)B=Q;else if(B=lt.isPointLight===!0?M:x,a.localClippingEnabled&&Y.clipShadows===!0&&Array.isArray(Y.clippingPlanes)&&Y.clippingPlanes.length!==0||Y.displacementMap&&Y.displacementScale!==0||Y.alphaMap&&Y.alphaTest>0||Y.map&&Y.alphaTest>0){let at=B.uuid,ot=Y.uuid,ct=S[at];if(ct===void 0)ct={},S[at]=ct;let dt=ct[ot];if(dt===void 0)dt=B.clone(),ct[ot]=dt,Y.addEventListener("dispose",rt);B=dt}if(B.visible=Y.visible,B.wireframe=Y.wireframe,O===3)B.side=Y.shadowSide!==null?Y.shadowSide:Y.side;else B.side=Y.shadowSide!==null?Y.shadowSide:v[Y.side];if(B.alphaMap=Y.alphaMap,B.alphaTest=Y.alphaTest,B.map=Y.map,B.clipShadows=Y.clipShadows,B.clippingPlanes=Y.clippingPlanes,B.clipIntersection=Y.clipIntersection,B.displacementMap=Y.displacementMap,B.displacementScale=Y.displacementScale,B.displacementBias=Y.displacementBias,B.wireframeLinewidth=Y.wireframeLinewidth,B.linewidth=Y.linewidth,lt.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let at=a.properties.get(B);at.light=lt}return B}function k(X,Y,lt,O,B){if(X.visible===!1)return;if(X.layers.test(Y.layers)&&(X.isMesh||X.isLine||X.isPoints)){if((X.castShadow||X.receiveShadow&&B===3)&&(!X.frustumCulled||m.intersectsObject(X))){X.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,X.matrixWorld);let ot=h.update(X),ct=X.material;if(Array.isArray(ct)){let dt=ot.groups;for(let K=0,st=dt.length;K<st;K++){let Z=dt[K],Rt=ct[Z.materialIndex];if(Rt&&Rt.visible){let U=F(X,Rt,O,B);X.onBeforeShadow(a,X,Y,lt,ot,U,Z),a.renderBufferDirect(lt,null,ot,U,X,Z),X.onAfterShadow(a,X,Y,lt,ot,U,Z)}}}else if(ct.visible){let dt=F(X,ct,O,B);X.onBeforeShadow(a,X,Y,lt,ot,dt,null),a.renderBufferDirect(lt,null,ot,dt,X,null),X.onAfterShadow(a,X,Y,lt,ot,dt,null)}}}let at=X.children;for(let ot=0,ct=at.length;ot<ct;ot++)k(at[ot],Y,lt,O,B)}function rt(X){X.target.removeEventListener("dispose",rt);for(let lt in S){let O=S[lt],B=X.target.uuid;if(B in O)O[B].dispose(),delete O[B]}}}var Uf={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function Nf(a,h){function p(){let et=!1,vt=new ye,ft=null,mt=new ye(0,0,0,0);return{setMask:function(At){if(ft!==At&&!et)a.colorMask(At,At,At,At),ft=At},setLocked:function(At){et=At},setClear:function(At,Ut,re,be,Te){if(Te===!0)At*=be,Ut*=be,re*=be;if(vt.set(At,Ut,re,be),mt.equals(vt)===!1)a.clearColor(At,Ut,re,be),mt.copy(vt)},reset:function(){et=!1,ft=null,mt.set(-1,0,0,0)}}}function m(){let et=!1,vt=!1,ft=null,mt=null,At=null;return{setReversed:function(Ut){if(vt!==Ut){let re=h.get("EXT_clip_control");if(vt)re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT);else re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);let be=At;At=null,this.setClear(be)}vt=Ut},getReversed:function(){return vt},setTest:function(Ut){if(Ut)Ct(a.DEPTH_TEST);else jt(a.DEPTH_TEST)},setMask:function(Ut){if(ft!==Ut&&!et)a.depthMask(Ut),ft=Ut},setFunc:function(Ut){if(vt)Ut=Uf[Ut];if(mt!==Ut){switch(Ut){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}mt=Ut}},setLocked:function(Ut){et=Ut},setClear:function(Ut){if(At!==Ut){if(vt)Ut=1-Ut;a.clearDepth(Ut),At=Ut}},reset:function(){et=!1,ft=null,mt=null,At=null,vt=!1}}}function g(){let et=!1,vt=null,ft=null,mt=null,At=null,Ut=null,re=null,be=null,Te=null;return{setTest:function(fe){if(!et)if(fe)Ct(a.STENCIL_TEST);else jt(a.STENCIL_TEST)},setMask:function(fe){if(vt!==fe&&!et)a.stencilMask(fe),vt=fe},setFunc:function(fe,qe,Ye){if(ft!==fe||mt!==qe||At!==Ye)a.stencilFunc(fe,qe,Ye),ft=fe,mt=qe,At=Ye},setOp:function(fe,qe,Ye){if(Ut!==fe||re!==qe||be!==Ye)a.stencilOp(fe,qe,Ye),Ut=fe,re=qe,be=Ye},setLocked:function(fe){et=fe},setClear:function(fe){if(Te!==fe)a.clearStencil(fe),Te=fe},reset:function(){et=!1,vt=null,ft=null,mt=null,At=null,Ut=null,re=null,be=null,Te=null}}}let _=new p,y=new m,x=new g,M=new WeakMap,S=new WeakMap,E={},v={},b=new WeakMap,A=[],P=null,I=!1,T=null,w=null,W=null,F=null,k=null,rt=null,X=null,Y=new ue(0,0,0),lt=0,O=!1,B=null,Q=null,at=null,ot=null,ct=null,dt=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,st=0,Z=a.getParameter(a.VERSION);if(Z.indexOf("WebGL")!==-1)st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=st>=1;else if(Z.indexOf("OpenGL ES")!==-1)st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=st>=2;let Rt=null,U={},Vt=a.getParameter(a.SCISSOR_BOX),$t=a.getParameter(a.VIEWPORT),ut=new ye().fromArray(Vt),bt=new ye().fromArray($t);function qt(et,vt,ft,mt){let At=new Uint8Array(4),Ut=a.createTexture();a.bindTexture(et,Ut),a.texParameteri(et,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(et,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let re=0;re<ft;re++)if(et===a.TEXTURE_3D||et===a.TEXTURE_2D_ARRAY)a.texImage3D(vt,0,a.RGBA,1,1,mt,0,a.RGBA,a.UNSIGNED_BYTE,At);else a.texImage2D(vt+re,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,At);return Ut}let kt={};kt[a.TEXTURE_2D]=qt(a.TEXTURE_2D,a.TEXTURE_2D,1),kt[a.TEXTURE_CUBE_MAP]=qt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[a.TEXTURE_2D_ARRAY]=qt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),kt[a.TEXTURE_3D]=qt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),_.setClear(0,0,0,1),y.setClear(1),x.setClear(0),Ct(a.DEPTH_TEST),y.setFunc(3),Gt(!1),St(1),Ct(a.CULL_FACE),zt(0);function Ct(et){if(E[et]!==!0)a.enable(et),E[et]=!0}function jt(et){if(E[et]!==!1)a.disable(et),E[et]=!1}function ae(et,vt){if(v[et]!==vt){if(a.bindFramebuffer(et,vt),v[et]=vt,et===a.DRAW_FRAMEBUFFER)v[a.FRAMEBUFFER]=vt;if(et===a.FRAMEBUFFER)v[a.DRAW_FRAMEBUFFER]=vt;return!0}return!1}function Kt(et,vt){let ft=A,mt=!1;if(et){if(ft=b.get(vt),ft===void 0)ft=[],b.set(vt,ft);let At=et.textures;if(ft.length!==At.length||ft[0]!==a.COLOR_ATTACHMENT0){for(let Ut=0,re=At.length;Ut<re;Ut++)ft[Ut]=a.COLOR_ATTACHMENT0+Ut;ft.length=At.length,mt=!0}}else if(ft[0]!==a.BACK)ft[0]=a.BACK,mt=!0;if(mt)a.drawBuffers(ft)}function _t(et){if(P!==et)return a.useProgram(et),P=et,!0;return!1}let Tt={[100]:a.FUNC_ADD,[101]:a.FUNC_SUBTRACT,[102]:a.FUNC_REVERSE_SUBTRACT};Tt[103]=a.MIN,Tt[104]=a.MAX;let V={[200]:a.ZERO,[201]:a.ONE,[202]:a.SRC_COLOR,[204]:a.SRC_ALPHA,[210]:a.SRC_ALPHA_SATURATE,[208]:a.DST_COLOR,[206]:a.DST_ALPHA,[203]:a.ONE_MINUS_SRC_COLOR,[205]:a.ONE_MINUS_SRC_ALPHA,[209]:a.ONE_MINUS_DST_COLOR,[207]:a.ONE_MINUS_DST_ALPHA,[211]:a.CONSTANT_COLOR,[212]:a.ONE_MINUS_CONSTANT_COLOR,[213]:a.CONSTANT_ALPHA,[214]:a.ONE_MINUS_CONSTANT_ALPHA};function zt(et,vt,ft,mt,At,Ut,re,be,Te,fe){if(et===0){if(I===!0)jt(a.BLEND),I=!1;return}if(I===!1)Ct(a.BLEND),I=!0;if(et!==5){if(et!==T||fe!==O){if(w!==100||k!==100)a.blendEquation(a.FUNC_ADD),w=100,k=100;if(fe)switch(et){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}W=null,F=null,rt=null,X=null,Y.set(0,0,0),lt=0,T=et,O=fe}return}if(At=At||vt,Ut=Ut||ft,re=re||mt,vt!==w||At!==k)a.blendEquationSeparate(Tt[vt],Tt[At]),w=vt,k=At;if(ft!==W||mt!==F||Ut!==rt||re!==X)a.blendFuncSeparate(V[ft],V[mt],V[Ut],V[re]),W=ft,F=mt,rt=Ut,X=re;if(be.equals(Y)===!1||Te!==lt)a.blendColor(be.r,be.g,be.b,Te),Y.copy(be),lt=Te;T=et,O=!1}function wt(et,vt){et.side===2?jt(a.CULL_FACE):Ct(a.CULL_FACE);let ft=et.side===1;if(vt)ft=!ft;Gt(ft),et.blending===1&&et.transparent===!1?zt(0):zt(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),y.setFunc(et.depthFunc),y.setTest(et.depthTest),y.setMask(et.depthWrite),_.setMask(et.colorWrite);let mt=et.stencilWrite;if(x.setTest(mt),mt)x.setMask(et.stencilWriteMask),x.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),x.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass);Bt(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?Ct(a.SAMPLE_ALPHA_TO_COVERAGE):jt(a.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(et){if(B!==et){if(et)a.frontFace(a.CW);else a.frontFace(a.CCW);B=et}}function St(et){if(et!==0){if(Ct(a.CULL_FACE),et!==Q)if(et===1)a.cullFace(a.BACK);else if(et===2)a.cullFace(a.FRONT);else a.cullFace(a.FRONT_AND_BACK)}else jt(a.CULL_FACE);Q=et}function Qt(et){if(et!==at){if(K)a.lineWidth(et);at=et}}function Bt(et,vt,ft){if(et){if(Ct(a.POLYGON_OFFSET_FILL),ot!==vt||ct!==ft)a.polygonOffset(vt,ft),ot=vt,ct=ft}else jt(a.POLYGON_OFFSET_FILL)}function Wt(et){if(et)Ct(a.SCISSOR_TEST);else jt(a.SCISSOR_TEST)}function G(et){if(et===void 0)et=a.TEXTURE0+dt-1;if(Rt!==et)a.activeTexture(et),Rt=et}function L(et,vt,ft){if(ft===void 0)if(Rt===null)ft=a.TEXTURE0+dt-1;else ft=Rt;let mt=U[ft];if(mt===void 0)mt={type:void 0,texture:void 0},U[ft]=mt;if(mt.type!==et||mt.texture!==vt){if(Rt!==ft)a.activeTexture(ft),Rt=ft;a.bindTexture(et,vt||kt[et]),mt.type=et,mt.texture=vt}}function it(){let et=U[Rt];if(et!==void 0&&et.type!==void 0)a.bindTexture(et.type,null),et.type=void 0,et.texture=void 0}function pt(){try{a.compressedTexImage2D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function yt(){try{a.compressedTexImage3D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function ht(){try{a.texSubImage2D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Zt(){try{a.texSubImage3D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Pt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Nt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function ee(){try{a.texStorage2D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Mt(){try{a.texStorage3D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ft(){try{a.texImage2D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function oe(){try{a.texImage3D.apply(a,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function te(et){if(ut.equals(et)===!1)a.scissor(et.x,et.y,et.z,et.w),ut.copy(et)}function Ht(et){if(bt.equals(et)===!1)a.viewport(et.x,et.y,et.z,et.w),bt.copy(et)}function se(et,vt){let ft=S.get(vt);if(ft===void 0)ft=new WeakMap,S.set(vt,ft);let mt=ft.get(et);if(mt===void 0)mt=a.getUniformBlockIndex(vt,et.name),ft.set(et,mt)}function ce(et,vt){let mt=S.get(vt).get(et);if(M.get(vt)!==mt)a.uniformBlockBinding(vt,mt,et.__bindingPointIndex),M.set(vt,mt)}function Ee(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),y.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),E={},Rt=null,U={},v={},b=new WeakMap,A=[],P=null,I=!1,T=null,w=null,W=null,F=null,k=null,rt=null,X=null,Y=new ue(0,0,0),lt=0,O=!1,B=null,Q=null,at=null,ot=null,ct=null,ut.set(0,0,a.canvas.width,a.canvas.height),bt.set(0,0,a.canvas.width,a.canvas.height),_.reset(),y.reset(),x.reset()}return{buffers:{color:_,depth:y,stencil:x},enable:Ct,disable:jt,bindFramebuffer:ae,drawBuffers:Kt,useProgram:_t,setBlending:zt,setMaterial:wt,setFlipSided:Gt,setCullFace:St,setLineWidth:Qt,setPolygonOffset:Bt,setScissorTest:Wt,activeTexture:G,bindTexture:L,unbindTexture:it,compressedTexImage2D:pt,compressedTexImage3D:yt,texImage2D:Ft,texImage3D:oe,updateUBOMapping:se,uniformBlockBinding:ce,texStorage2D:ee,texStorage3D:Mt,texSubImage2D:ht,texSubImage3D:Zt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Nt,scissor:te,viewport:Ht,reset:Ee}}function go(a,h,p,m){let g=Ff(m);switch(p){case 1021:return a*h;case 1024:return a*h;case 1025:return a*h*2;case 1028:return a*h/g.components*g.byteLength;case 1029:return a*h/g.components*g.byteLength;case 1030:return a*h*2/g.components*g.byteLength;case 1031:return a*h*2/g.components*g.byteLength;case 1022:return a*h*3/g.components*g.byteLength;case 1023:return a*h*4/g.components*g.byteLength;case 1033:return a*h*4/g.components*g.byteLength;case 33776:case 33777:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*8;case 33778:case 33779:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 35841:case 35843:return Math.max(a,16)*Math.max(h,8)/4;case 35840:case 35842:return Math.max(a,8)*Math.max(h,8)/2;case 36196:case 37492:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*8;case 37496:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 37808:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 37809:return Math.floor((a+4)/5)*Math.floor((h+3)/4)*16;case 37810:return Math.floor((a+4)/5)*Math.floor((h+4)/5)*16;case 37811:return Math.floor((a+5)/6)*Math.floor((h+4)/5)*16;case 37812:return Math.floor((a+5)/6)*Math.floor((h+5)/6)*16;case 37813:return Math.floor((a+7)/8)*Math.floor((h+4)/5)*16;case 37814:return Math.floor((a+7)/8)*Math.floor((h+5)/6)*16;case 37815:return Math.floor((a+7)/8)*Math.floor((h+7)/8)*16;case 37816:return Math.floor((a+9)/10)*Math.floor((h+4)/5)*16;case 37817:return Math.floor((a+9)/10)*Math.floor((h+5)/6)*16;case 37818:return Math.floor((a+9)/10)*Math.floor((h+7)/8)*16;case 37819:return Math.floor((a+9)/10)*Math.floor((h+9)/10)*16;case 37820:return Math.floor((a+11)/12)*Math.floor((h+9)/10)*16;case 37821:return Math.floor((a+11)/12)*Math.floor((h+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(a/4)*Math.ceil(h/4)*16;case 36283:case 36284:return Math.ceil(a/4)*Math.ceil(h/4)*8;case 36285:case 36286:return Math.ceil(a/4)*Math.ceil(h/4)*16}throw Error(`Unable to determine texture byte length for ${p} format.`)}function Ff(a){switch(a){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${a}.`)}function Of(a,h,p,m,g,_,y){let x=h.has("WEBGL_multisampled_render_to_texture")?h.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new Et,E=new WeakMap,v,b=new WeakMap,A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(G){}function P(G,L){return A?new OffscreenCanvas(G,L):Bs("canvas")}function I(G,L,it){let pt=1,yt=Wt(G);if(yt.width>it||yt.height>it)pt=it/Math.max(yt.width,yt.height);if(pt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let ht=Math.floor(pt*yt.width),Zt=Math.floor(pt*yt.height);if(v===void 0)v=P(ht,Zt);let Pt=L?P(ht,Zt):v;return Pt.width=ht,Pt.height=Zt,Pt.getContext("2d").drawImage(G,0,0,ht,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+Zt+")."),Pt}else{if("data"in G)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+").");return G}return G}function T(G){return G.generateMipmaps}function w(G){a.generateMipmap(G)}function W(G){if(G.isWebGLCubeRenderTarget)return a.TEXTURE_CUBE_MAP;if(G.isWebGL3DRenderTarget)return a.TEXTURE_3D;if(G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture)return a.TEXTURE_2D_ARRAY;return a.TEXTURE_2D}function F(G,L,it,pt,yt=!1){if(G!==null){if(a[G]!==void 0)return a[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let ht=L;if(L===a.RED){if(it===a.FLOAT)ht=a.R32F;if(it===a.HALF_FLOAT)ht=a.R16F;if(it===a.UNSIGNED_BYTE)ht=a.R8}if(L===a.RED_INTEGER){if(it===a.UNSIGNED_BYTE)ht=a.R8UI;if(it===a.UNSIGNED_SHORT)ht=a.R16UI;if(it===a.UNSIGNED_INT)ht=a.R32UI;if(it===a.BYTE)ht=a.R8I;if(it===a.SHORT)ht=a.R16I;if(it===a.INT)ht=a.R32I}if(L===a.RG){if(it===a.FLOAT)ht=a.RG32F;if(it===a.HALF_FLOAT)ht=a.RG16F;if(it===a.UNSIGNED_BYTE)ht=a.RG8}if(L===a.RG_INTEGER){if(it===a.UNSIGNED_BYTE)ht=a.RG8UI;if(it===a.UNSIGNED_SHORT)ht=a.RG16UI;if(it===a.UNSIGNED_INT)ht=a.RG32UI;if(it===a.BYTE)ht=a.RG8I;if(it===a.SHORT)ht=a.RG16I;if(it===a.INT)ht=a.RG32I}if(L===a.RGB_INTEGER){if(it===a.UNSIGNED_BYTE)ht=a.RGB8UI;if(it===a.UNSIGNED_SHORT)ht=a.RGB16UI;if(it===a.UNSIGNED_INT)ht=a.RGB32UI;if(it===a.BYTE)ht=a.RGB8I;if(it===a.SHORT)ht=a.RGB16I;if(it===a.INT)ht=a.RGB32I}if(L===a.RGBA_INTEGER){if(it===a.UNSIGNED_BYTE)ht=a.RGBA8UI;if(it===a.UNSIGNED_SHORT)ht=a.RGBA16UI;if(it===a.UNSIGNED_INT)ht=a.RGBA32UI;if(it===a.BYTE)ht=a.RGBA8I;if(it===a.SHORT)ht=a.RGBA16I;if(it===a.INT)ht=a.RGBA32I}if(L===a.RGB){if(it===a.UNSIGNED_INT_5_9_9_9_REV)ht=a.RGB9_E5}if(L===a.RGBA){let Zt=yt?"linear":pe.getTransfer(pt);if(it===a.FLOAT)ht=a.RGBA32F;if(it===a.HALF_FLOAT)ht=a.RGBA16F;if(it===a.UNSIGNED_BYTE)ht=Zt==="srgb"?a.SRGB8_ALPHA8:a.RGBA8;if(it===a.UNSIGNED_SHORT_4_4_4_4)ht=a.RGBA4;if(it===a.UNSIGNED_SHORT_5_5_5_1)ht=a.RGB5_A1}if(ht===a.R16F||ht===a.R32F||ht===a.RG16F||ht===a.RG32F||ht===a.RGBA16F||ht===a.RGBA32F)h.get("EXT_color_buffer_float");return ht}function k(G,L){let it;if(G){if(L===null||L===1014||L===1020)it=a.DEPTH24_STENCIL8;else if(L===1015)it=a.DEPTH32F_STENCIL8;else if(L===1012)it=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(L===null||L===1014||L===1020)it=a.DEPTH_COMPONENT24;else if(L===1015)it=a.DEPTH_COMPONENT32F;else if(L===1012)it=a.DEPTH_COMPONENT16;return it}function rt(G,L){if(T(G)===!0||G.isFramebufferTexture&&G.minFilter!==1003&&G.minFilter!==1006)return Math.log2(Math.max(L.width,L.height))+1;else if(G.mipmaps!==void 0&&G.mipmaps.length>0)return G.mipmaps.length;else if(G.isCompressedTexture&&Array.isArray(G.image))return L.mipmaps.length;else return 1}function X(G){let L=G.target;if(L.removeEventListener("dispose",X),lt(L),L.isVideoTexture)E.delete(L)}function Y(G){let L=G.target;L.removeEventListener("dispose",Y),B(L)}function lt(G){let L=m.get(G);if(L.__webglInit===void 0)return;let it=G.source,pt=b.get(it);if(pt){let yt=pt[L.__cacheKey];if(yt.usedTimes--,yt.usedTimes===0)O(G);if(Object.keys(pt).length===0)b.delete(it)}m.remove(G)}function O(G){let L=m.get(G);a.deleteTexture(L.__webglTexture);let it=G.source,pt=b.get(it);delete pt[L.__cacheKey],y.memory.textures--}function B(G){let L=m.get(G);if(G.depthTexture)G.depthTexture.dispose(),m.remove(G.depthTexture);if(G.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(L.__webglFramebuffer[pt]))for(let yt=0;yt<L.__webglFramebuffer[pt].length;yt++)a.deleteFramebuffer(L.__webglFramebuffer[pt][yt]);else a.deleteFramebuffer(L.__webglFramebuffer[pt]);if(L.__webglDepthbuffer)a.deleteRenderbuffer(L.__webglDepthbuffer[pt])}else{if(Array.isArray(L.__webglFramebuffer))for(let pt=0;pt<L.__webglFramebuffer.length;pt++)a.deleteFramebuffer(L.__webglFramebuffer[pt]);else a.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer)a.deleteRenderbuffer(L.__webglDepthbuffer);if(L.__webglMultisampledFramebuffer)a.deleteFramebuffer(L.__webglMultisampledFramebuffer);if(L.__webglColorRenderbuffer){for(let pt=0;pt<L.__webglColorRenderbuffer.length;pt++)if(L.__webglColorRenderbuffer[pt])a.deleteRenderbuffer(L.__webglColorRenderbuffer[pt])}if(L.__webglDepthRenderbuffer)a.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let it=G.textures;for(let pt=0,yt=it.length;pt<yt;pt++){let ht=m.get(it[pt]);if(ht.__webglTexture)a.deleteTexture(ht.__webglTexture),y.memory.textures--;m.remove(it[pt])}m.remove(G)}let Q=0;function at(){Q=0}function ot(){let G=Q;if(G>=g.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+g.maxTextures);return Q+=1,G}function ct(G){let L=[];return L.push(G.wrapS),L.push(G.wrapT),L.push(G.wrapR||0),L.push(G.magFilter),L.push(G.minFilter),L.push(G.anisotropy),L.push(G.internalFormat),L.push(G.format),L.push(G.type),L.push(G.generateMipmaps),L.push(G.premultiplyAlpha),L.push(G.flipY),L.push(G.unpackAlignment),L.push(G.colorSpace),L.join()}function dt(G,L){let it=m.get(G);if(G.isVideoTexture)Qt(G);if(G.isRenderTargetTexture===!1&&G.version>0&&it.__version!==G.version){let pt=G.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(it,G,L);return}}p.bindTexture(a.TEXTURE_2D,it.__webglTexture,a.TEXTURE0+L)}function K(G,L){let it=m.get(G);if(G.version>0&&it.__version!==G.version){bt(it,G,L);return}p.bindTexture(a.TEXTURE_2D_ARRAY,it.__webglTexture,a.TEXTURE0+L)}function st(G,L){let it=m.get(G);if(G.version>0&&it.__version!==G.version){bt(it,G,L);return}p.bindTexture(a.TEXTURE_3D,it.__webglTexture,a.TEXTURE0+L)}function Z(G,L){let it=m.get(G);if(G.version>0&&it.__version!==G.version){qt(it,G,L);return}p.bindTexture(a.TEXTURE_CUBE_MAP,it.__webglTexture,a.TEXTURE0+L)}let Rt={[1000]:a.REPEAT,[1001]:a.CLAMP_TO_EDGE,[1002]:a.MIRRORED_REPEAT},U={[1003]:a.NEAREST,[1004]:a.NEAREST_MIPMAP_NEAREST,[1005]:a.NEAREST_MIPMAP_LINEAR,[1006]:a.LINEAR,[1007]:a.LINEAR_MIPMAP_NEAREST,[1008]:a.LINEAR_MIPMAP_LINEAR},Vt={[512]:a.NEVER,[519]:a.ALWAYS,[513]:a.LESS,[515]:a.LEQUAL,[514]:a.EQUAL,[518]:a.GEQUAL,[516]:a.GREATER,[517]:a.NOTEQUAL};function $t(G,L){if(L.type===1015&&h.has("OES_texture_float_linear")===!1&&(L.magFilter===1006||L.magFilter===1007||L.magFilter===1005||L.magFilter===1008||L.minFilter===1006||L.minFilter===1007||L.minFilter===1005||L.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(a.texParameteri(G,a.TEXTURE_WRAP_S,Rt[L.wrapS]),a.texParameteri(G,a.TEXTURE_WRAP_T,Rt[L.wrapT]),G===a.TEXTURE_3D||G===a.TEXTURE_2D_ARRAY)a.texParameteri(G,a.TEXTURE_WRAP_R,Rt[L.wrapR]);if(a.texParameteri(G,a.TEXTURE_MAG_FILTER,U[L.magFilter]),a.texParameteri(G,a.TEXTURE_MIN_FILTER,U[L.minFilter]),L.compareFunction)a.texParameteri(G,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(G,a.TEXTURE_COMPARE_FUNC,Vt[L.compareFunction]);if(h.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===1003)return;if(L.minFilter!==1005&&L.minFilter!==1008)return;if(L.type===1015&&h.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||m.get(L).__currentAnisotropy){let it=h.get("EXT_texture_filter_anisotropic");a.texParameterf(G,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,g.getMaxAnisotropy())),m.get(L).__currentAnisotropy=L.anisotropy}}}function ut(G,L){let it=!1;if(G.__webglInit===void 0)G.__webglInit=!0,L.addEventListener("dispose",X);let pt=L.source,yt=b.get(pt);if(yt===void 0)yt={},b.set(pt,yt);let ht=ct(L);if(ht!==G.__cacheKey){if(yt[ht]===void 0)yt[ht]={texture:a.createTexture(),usedTimes:0},y.memory.textures++,it=!0;yt[ht].usedTimes++;let Zt=yt[G.__cacheKey];if(Zt!==void 0){if(yt[G.__cacheKey].usedTimes--,Zt.usedTimes===0)O(L)}G.__cacheKey=ht,G.__webglTexture=yt[ht].texture}return it}function bt(G,L,it){let pt=a.TEXTURE_2D;if(L.isDataArrayTexture||L.isCompressedArrayTexture)pt=a.TEXTURE_2D_ARRAY;if(L.isData3DTexture)pt=a.TEXTURE_3D;let yt=ut(G,L),ht=L.source;p.bindTexture(pt,G.__webglTexture,a.TEXTURE0+it);let Zt=m.get(ht);if(ht.version!==Zt.__version||yt===!0){p.activeTexture(a.TEXTURE0+it);let Pt=pe.getPrimaries(pe.workingColorSpace),Nt=L.colorSpace===""?null:pe.getPrimaries(L.colorSpace),ee=L.colorSpace===""||Pt===Nt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,L.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,L.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Mt=I(L.image,!1,g.maxTextureSize);Mt=Bt(L,Mt);let Ft=_.convert(L.format,L.colorSpace),oe=_.convert(L.type),te=F(L.internalFormat,Ft,oe,L.colorSpace,L.isVideoTexture);$t(pt,L);let Ht,se=L.mipmaps,ce=L.isVideoTexture!==!0,Ee=Zt.__version===void 0||yt===!0,et=ht.dataReady,vt=rt(L,Mt);if(L.isDepthTexture){if(te=k(L.format===1027,L.type),Ee)if(ce)p.texStorage2D(a.TEXTURE_2D,1,te,Mt.width,Mt.height);else p.texImage2D(a.TEXTURE_2D,0,te,Mt.width,Mt.height,0,Ft,oe,null)}else if(L.isDataTexture)if(se.length>0){if(ce&&Ee)p.texStorage2D(a.TEXTURE_2D,vt,te,se[0].width,se[0].height);for(let ft=0,mt=se.length;ft<mt;ft++)if(Ht=se[ft],ce){if(et)p.texSubImage2D(a.TEXTURE_2D,ft,0,0,Ht.width,Ht.height,Ft,oe,Ht.data)}else p.texImage2D(a.TEXTURE_2D,ft,te,Ht.width,Ht.height,0,Ft,oe,Ht.data);L.generateMipmaps=!1}else if(ce){if(Ee)p.texStorage2D(a.TEXTURE_2D,vt,te,Mt.width,Mt.height);if(et)p.texSubImage2D(a.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Ft,oe,Mt.data)}else p.texImage2D(a.TEXTURE_2D,0,te,Mt.width,Mt.height,0,Ft,oe,Mt.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){if(ce&&Ee)p.texStorage3D(a.TEXTURE_2D_ARRAY,vt,te,se[0].width,se[0].height,Mt.depth);for(let ft=0,mt=se.length;ft<mt;ft++)if(Ht=se[ft],L.format!==1023)if(Ft!==null)if(ce){if(et)if(L.layerUpdates.size>0){let At=go(Ht.width,Ht.height,L.format,L.type);for(let Ut of L.layerUpdates){let re=Ht.data.subarray(Ut*At/Ht.data.BYTES_PER_ELEMENT,(Ut+1)*At/Ht.data.BYTES_PER_ELEMENT);p.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ft,0,0,Ut,Ht.width,Ht.height,1,Ft,re)}L.clearLayerUpdates()}else p.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ft,0,0,0,Ht.width,Ht.height,Mt.depth,Ft,Ht.data)}else p.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ft,te,Ht.width,Ht.height,Mt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ce){if(et)p.texSubImage3D(a.TEXTURE_2D_ARRAY,ft,0,0,0,Ht.width,Ht.height,Mt.depth,Ft,oe,Ht.data)}else p.texImage3D(a.TEXTURE_2D_ARRAY,ft,te,Ht.width,Ht.height,Mt.depth,0,Ft,oe,Ht.data)}else{if(ce&&Ee)p.texStorage2D(a.TEXTURE_2D,vt,te,se[0].width,se[0].height);for(let ft=0,mt=se.length;ft<mt;ft++)if(Ht=se[ft],L.format!==1023)if(Ft!==null)if(ce){if(et)p.compressedTexSubImage2D(a.TEXTURE_2D,ft,0,0,Ht.width,Ht.height,Ft,Ht.data)}else p.compressedTexImage2D(a.TEXTURE_2D,ft,te,Ht.width,Ht.height,0,Ht.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ce){if(et)p.texSubImage2D(a.TEXTURE_2D,ft,0,0,Ht.width,Ht.height,Ft,oe,Ht.data)}else p.texImage2D(a.TEXTURE_2D,ft,te,Ht.width,Ht.height,0,Ft,oe,Ht.data)}else if(L.isDataArrayTexture)if(ce){if(Ee)p.texStorage3D(a.TEXTURE_2D_ARRAY,vt,te,Mt.width,Mt.height,Mt.depth);if(et)if(L.layerUpdates.size>0){let ft=go(Mt.width,Mt.height,L.format,L.type);for(let mt of L.layerUpdates){let At=Mt.data.subarray(mt*ft/Mt.data.BYTES_PER_ELEMENT,(mt+1)*ft/Mt.data.BYTES_PER_ELEMENT);p.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,mt,Mt.width,Mt.height,1,Ft,oe,At)}L.clearLayerUpdates()}else p.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ft,oe,Mt.data)}else p.texImage3D(a.TEXTURE_2D_ARRAY,0,te,Mt.width,Mt.height,Mt.depth,0,Ft,oe,Mt.data);else if(L.isData3DTexture)if(ce){if(Ee)p.texStorage3D(a.TEXTURE_3D,vt,te,Mt.width,Mt.height,Mt.depth);if(et)p.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ft,oe,Mt.data)}else p.texImage3D(a.TEXTURE_3D,0,te,Mt.width,Mt.height,Mt.depth,0,Ft,oe,Mt.data);else if(L.isFramebufferTexture){if(Ee)if(ce)p.texStorage2D(a.TEXTURE_2D,vt,te,Mt.width,Mt.height);else{let ft=Mt.width,mt=Mt.height;for(let At=0;At<vt;At++)p.texImage2D(a.TEXTURE_2D,At,te,ft,mt,0,Ft,oe,null),ft>>=1,mt>>=1}}else if(se.length>0){if(ce&&Ee){let ft=Wt(se[0]);p.texStorage2D(a.TEXTURE_2D,vt,te,ft.width,ft.height)}for(let ft=0,mt=se.length;ft<mt;ft++)if(Ht=se[ft],ce){if(et)p.texSubImage2D(a.TEXTURE_2D,ft,0,0,Ft,oe,Ht)}else p.texImage2D(a.TEXTURE_2D,ft,te,Ft,oe,Ht);L.generateMipmaps=!1}else if(ce){if(Ee){let ft=Wt(Mt);p.texStorage2D(a.TEXTURE_2D,vt,te,ft.width,ft.height)}if(et)p.texSubImage2D(a.TEXTURE_2D,0,0,0,Ft,oe,Mt)}else p.texImage2D(a.TEXTURE_2D,0,te,Ft,oe,Mt);if(T(L))w(pt);if(Zt.__version=ht.version,L.onUpdate)L.onUpdate(L)}G.__version=L.version}function qt(G,L,it){if(L.image.length!==6)return;let pt=ut(G,L),yt=L.source;p.bindTexture(a.TEXTURE_CUBE_MAP,G.__webglTexture,a.TEXTURE0+it);let ht=m.get(yt);if(yt.version!==ht.__version||pt===!0){p.activeTexture(a.TEXTURE0+it);let Zt=pe.getPrimaries(pe.workingColorSpace),Pt=L.colorSpace===""?null:pe.getPrimaries(L.colorSpace),Nt=L.colorSpace===""||Zt===Pt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,L.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,L.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let ee=L.isCompressedTexture||L.image[0].isCompressedTexture,Mt=L.image[0]&&L.image[0].isDataTexture,Ft=[];for(let mt=0;mt<6;mt++){if(!ee&&!Mt)Ft[mt]=I(L.image[mt],!0,g.maxCubemapSize);else Ft[mt]=Mt?L.image[mt].image:L.image[mt];Ft[mt]=Bt(L,Ft[mt])}let oe=Ft[0],te=_.convert(L.format,L.colorSpace),Ht=_.convert(L.type),se=F(L.internalFormat,te,Ht,L.colorSpace),ce=L.isVideoTexture!==!0,Ee=ht.__version===void 0||pt===!0,et=yt.dataReady,vt=rt(L,oe);$t(a.TEXTURE_CUBE_MAP,L);let ft;if(ee){if(ce&&Ee)p.texStorage2D(a.TEXTURE_CUBE_MAP,vt,se,oe.width,oe.height);for(let mt=0;mt<6;mt++){ft=Ft[mt].mipmaps;for(let At=0;At<ft.length;At++){let Ut=ft[At];if(L.format!==1023)if(te!==null)if(ce){if(et)p.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,0,0,Ut.width,Ut.height,te,Ut.data)}else p.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,se,Ut.width,Ut.height,0,Ut.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(ce){if(et)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,0,0,Ut.width,Ut.height,te,Ht,Ut.data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,se,Ut.width,Ut.height,0,te,Ht,Ut.data)}}}else{if(ft=L.mipmaps,ce&&Ee){if(ft.length>0)vt++;let mt=Wt(Ft[0]);p.texStorage2D(a.TEXTURE_CUBE_MAP,vt,se,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Mt){if(ce){if(et)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ft[mt].width,Ft[mt].height,te,Ht,Ft[mt].data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,se,Ft[mt].width,Ft[mt].height,0,te,Ht,Ft[mt].data);for(let At=0;At<ft.length;At++){let re=ft[At].image[mt].image;if(ce){if(et)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,0,0,re.width,re.height,te,Ht,re.data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,se,re.width,re.height,0,te,Ht,re.data)}}else{if(ce){if(et)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,te,Ht,Ft[mt])}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,se,te,Ht,Ft[mt]);for(let At=0;At<ft.length;At++){let Ut=ft[At];if(ce){if(et)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,0,0,te,Ht,Ut.image[mt])}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,se,te,Ht,Ut.image[mt])}}}if(T(L))w(a.TEXTURE_CUBE_MAP);if(ht.__version=yt.version,L.onUpdate)L.onUpdate(L)}G.__version=L.version}function kt(G,L,it,pt,yt,ht){let Zt=_.convert(it.format,it.colorSpace),Pt=_.convert(it.type),Nt=F(it.internalFormat,Zt,Pt,it.colorSpace),ee=m.get(L),Mt=m.get(it);if(Mt.__renderTarget=L,!ee.__hasExternalTextures){let Ft=Math.max(1,L.width>>ht),oe=Math.max(1,L.height>>ht);if(yt===a.TEXTURE_3D||yt===a.TEXTURE_2D_ARRAY)p.texImage3D(yt,ht,Nt,Ft,oe,L.depth,0,Zt,Pt,null);else p.texImage2D(yt,ht,Nt,Ft,oe,0,Zt,Pt,null)}if(p.bindFramebuffer(a.FRAMEBUFFER,G),St(L))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pt,yt,Mt.__webglTexture,0,Gt(L));else if(yt===a.TEXTURE_2D||yt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)a.framebufferTexture2D(a.FRAMEBUFFER,pt,yt,Mt.__webglTexture,ht);p.bindFramebuffer(a.FRAMEBUFFER,null)}function Ct(G,L,it){if(a.bindRenderbuffer(a.RENDERBUFFER,G),L.depthBuffer){let pt=L.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ht=k(L.stencilBuffer,yt),Zt=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pt=Gt(L);if(St(L))x.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Pt,ht,L.width,L.height);else if(it)a.renderbufferStorageMultisample(a.RENDERBUFFER,Pt,ht,L.width,L.height);else a.renderbufferStorage(a.RENDERBUFFER,ht,L.width,L.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,Zt,a.RENDERBUFFER,G)}else{let pt=L.textures;for(let yt=0;yt<pt.length;yt++){let ht=pt[yt],Zt=_.convert(ht.format,ht.colorSpace),Pt=_.convert(ht.type),Nt=F(ht.internalFormat,Zt,Pt,ht.colorSpace),ee=Gt(L);if(it&&St(L)===!1)a.renderbufferStorageMultisample(a.RENDERBUFFER,ee,Nt,L.width,L.height);else if(St(L))x.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ee,Nt,L.width,L.height);else a.renderbufferStorage(a.RENDERBUFFER,Nt,L.width,L.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function jt(G,L){if(L&&L.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(p.bindFramebuffer(a.FRAMEBUFFER,G),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let pt=m.get(L.depthTexture);if(pt.__renderTarget=L,!pt.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0;dt(L.depthTexture,0);let yt=pt.__webglTexture,ht=Gt(L);if(L.depthTexture.format===1026)if(St(L))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,yt,0,ht);else a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,yt,0);else if(L.depthTexture.format===1027)if(St(L))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,yt,0,ht);else a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,yt,0);else throw Error("Unknown depthTexture format")}function ae(G){let L=m.get(G),it=G.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==G.depthTexture){let pt=G.depthTexture;if(L.__depthDisposeCallback)L.__depthDisposeCallback();if(pt){let yt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),L.__depthDisposeCallback=yt}L.__boundDepthTexture=pt}if(G.depthTexture&&!L.__autoAllocateDepthBuffer){if(it)throw Error("target.depthTexture not supported in Cube render targets");jt(L.__webglFramebuffer,G)}else if(it){L.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(p.bindFramebuffer(a.FRAMEBUFFER,L.__webglFramebuffer[pt]),L.__webglDepthbuffer[pt]===void 0)L.__webglDepthbuffer[pt]=a.createRenderbuffer(),Ct(L.__webglDepthbuffer[pt],G,!1);else{let yt=G.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ht=L.__webglDepthbuffer[pt];a.bindRenderbuffer(a.RENDERBUFFER,ht),a.framebufferRenderbuffer(a.FRAMEBUFFER,yt,a.RENDERBUFFER,ht)}}else if(p.bindFramebuffer(a.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=a.createRenderbuffer(),Ct(L.__webglDepthbuffer,G,!1);else{let pt=G.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,yt=L.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,yt),a.framebufferRenderbuffer(a.FRAMEBUFFER,pt,a.RENDERBUFFER,yt)}p.bindFramebuffer(a.FRAMEBUFFER,null)}function Kt(G,L,it){let pt=m.get(G);if(L!==void 0)kt(pt.__webglFramebuffer,G,G.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0);if(it!==void 0)ae(G)}function _t(G){let L=G.texture,it=m.get(G),pt=m.get(L);G.addEventListener("dispose",Y);let yt=G.textures,ht=G.isWebGLCubeRenderTarget===!0,Zt=yt.length>1;if(!Zt){if(pt.__webglTexture===void 0)pt.__webglTexture=a.createTexture();pt.__version=L.version,y.memory.textures++}if(ht){it.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(L.mipmaps&&L.mipmaps.length>0){it.__webglFramebuffer[Pt]=[];for(let Nt=0;Nt<L.mipmaps.length;Nt++)it.__webglFramebuffer[Pt][Nt]=a.createFramebuffer()}else it.__webglFramebuffer[Pt]=a.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){it.__webglFramebuffer=[];for(let Pt=0;Pt<L.mipmaps.length;Pt++)it.__webglFramebuffer[Pt]=a.createFramebuffer()}else it.__webglFramebuffer=a.createFramebuffer();if(Zt)for(let Pt=0,Nt=yt.length;Pt<Nt;Pt++){let ee=m.get(yt[Pt]);if(ee.__webglTexture===void 0)ee.__webglTexture=a.createTexture(),y.memory.textures++}if(G.samples>0&&St(G)===!1){it.__webglMultisampledFramebuffer=a.createFramebuffer(),it.__webglColorRenderbuffer=[],p.bindFramebuffer(a.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Pt=0;Pt<yt.length;Pt++){let Nt=yt[Pt];it.__webglColorRenderbuffer[Pt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,it.__webglColorRenderbuffer[Pt]);let ee=_.convert(Nt.format,Nt.colorSpace),Mt=_.convert(Nt.type),Ft=F(Nt.internalFormat,ee,Mt,Nt.colorSpace,G.isXRRenderTarget===!0),oe=Gt(G);a.renderbufferStorageMultisample(a.RENDERBUFFER,oe,Ft,G.width,G.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pt,a.RENDERBUFFER,it.__webglColorRenderbuffer[Pt])}if(a.bindRenderbuffer(a.RENDERBUFFER,null),G.depthBuffer)it.__webglDepthRenderbuffer=a.createRenderbuffer(),Ct(it.__webglDepthRenderbuffer,G,!0);p.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ht){p.bindTexture(a.TEXTURE_CUBE_MAP,pt.__webglTexture),$t(a.TEXTURE_CUBE_MAP,L);for(let Pt=0;Pt<6;Pt++)if(L.mipmaps&&L.mipmaps.length>0)for(let Nt=0;Nt<L.mipmaps.length;Nt++)kt(it.__webglFramebuffer[Pt][Nt],G,L,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Nt);else kt(it.__webglFramebuffer[Pt],G,L,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);if(T(L))w(a.TEXTURE_CUBE_MAP);p.unbindTexture()}else if(Zt){for(let Pt=0,Nt=yt.length;Pt<Nt;Pt++){let ee=yt[Pt],Mt=m.get(ee);if(p.bindTexture(a.TEXTURE_2D,Mt.__webglTexture),$t(a.TEXTURE_2D,ee),kt(it.__webglFramebuffer,G,ee,a.COLOR_ATTACHMENT0+Pt,a.TEXTURE_2D,0),T(ee))w(a.TEXTURE_2D)}p.unbindTexture()}else{let Pt=a.TEXTURE_2D;if(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)Pt=G.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY;if(p.bindTexture(Pt,pt.__webglTexture),$t(Pt,L),L.mipmaps&&L.mipmaps.length>0)for(let Nt=0;Nt<L.mipmaps.length;Nt++)kt(it.__webglFramebuffer[Nt],G,L,a.COLOR_ATTACHMENT0,Pt,Nt);else kt(it.__webglFramebuffer,G,L,a.COLOR_ATTACHMENT0,Pt,0);if(T(L))w(Pt);p.unbindTexture()}if(G.depthBuffer)ae(G)}function Tt(G){let L=G.textures;for(let it=0,pt=L.length;it<pt;it++){let yt=L[it];if(T(yt)){let ht=W(G),Zt=m.get(yt).__webglTexture;p.bindTexture(ht,Zt),w(ht),p.unbindTexture()}}}let V=[],zt=[];function wt(G){if(G.samples>0){if(St(G)===!1){let{textures:L,width:it,height:pt}=G,yt=a.COLOR_BUFFER_BIT,ht=G.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Zt=m.get(G),Pt=L.length>1;if(Pt)for(let Nt=0;Nt<L.length;Nt++)p.bindFramebuffer(a.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Nt,a.RENDERBUFFER,null),p.bindFramebuffer(a.FRAMEBUFFER,Zt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Nt,a.TEXTURE_2D,null,0);p.bindFramebuffer(a.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),p.bindFramebuffer(a.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Nt=0;Nt<L.length;Nt++){if(G.resolveDepthBuffer){if(G.depthBuffer)yt|=a.DEPTH_BUFFER_BIT;if(G.stencilBuffer&&G.resolveStencilBuffer)yt|=a.STENCIL_BUFFER_BIT}if(Pt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Zt.__webglColorRenderbuffer[Nt]);let ee=m.get(L[Nt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ee,0)}if(a.blitFramebuffer(0,0,it,pt,0,0,it,pt,yt,a.NEAREST),M===!0){if(V.length=0,zt.length=0,V.push(a.COLOR_ATTACHMENT0+Nt),G.depthBuffer&&G.resolveDepthBuffer===!1)V.push(ht),zt.push(ht),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,zt);a.invalidateFramebuffer(a.READ_FRAMEBUFFER,V)}}if(p.bindFramebuffer(a.READ_FRAMEBUFFER,null),p.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Pt)for(let Nt=0;Nt<L.length;Nt++){p.bindFramebuffer(a.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Nt,a.RENDERBUFFER,Zt.__webglColorRenderbuffer[Nt]);let ee=m.get(L[Nt]).__webglTexture;p.bindFramebuffer(a.FRAMEBUFFER,Zt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Nt,a.TEXTURE_2D,ee,0)}p.bindFramebuffer(a.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&M){let L=G.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[L])}}}function Gt(G){return Math.min(g.maxSamples,G.samples)}function St(G){let L=m.get(G);return G.samples>0&&h.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Qt(G){let L=y.render.frame;if(E.get(G)!==L)E.set(G,L),G.update()}function Bt(G,L){let{colorSpace:it,format:pt,type:yt}=G;if(G.isCompressedTexture===!0||G.isVideoTexture===!0)return L;if(it!=="srgb-linear"&&it!=="")if(pe.getTransfer(it)==="srgb"){if(pt!==1023||yt!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",it);return L}function Wt(G){if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement)S.width=G.naturalWidth||G.width,S.height=G.naturalHeight||G.height;else if(typeof VideoFrame<"u"&&G instanceof VideoFrame)S.width=G.displayWidth,S.height=G.displayHeight;else S.width=G.width,S.height=G.height;return S}this.allocateTextureUnit=ot,this.resetTextureUnits=at,this.setTexture2D=dt,this.setTexture2DArray=K,this.setTexture3D=st,this.setTextureCube=Z,this.rebindTextures=Kt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=St}function Bf(a,h){function p(m,g=""){let _,y=pe.getTransfer(g);if(m===1009)return a.UNSIGNED_BYTE;if(m===1017)return a.UNSIGNED_SHORT_4_4_4_4;if(m===1018)return a.UNSIGNED_SHORT_5_5_5_1;if(m===35902)return a.UNSIGNED_INT_5_9_9_9_REV;if(m===1010)return a.BYTE;if(m===1011)return a.SHORT;if(m===1012)return a.UNSIGNED_SHORT;if(m===1013)return a.INT;if(m===1014)return a.UNSIGNED_INT;if(m===1015)return a.FLOAT;if(m===1016)return a.HALF_FLOAT;if(m===1021)return a.ALPHA;if(m===1022)return a.RGB;if(m===1023)return a.RGBA;if(m===1024)return a.LUMINANCE;if(m===1025)return a.LUMINANCE_ALPHA;if(m===1026)return a.DEPTH_COMPONENT;if(m===1027)return a.DEPTH_STENCIL;if(m===1028)return a.RED;if(m===1029)return a.RED_INTEGER;if(m===1030)return a.RG;if(m===1031)return a.RG_INTEGER;if(m===1033)return a.RGBA_INTEGER;if(m===33776||m===33777||m===33778||m===33779)if(y==="srgb")if(_=h.get("WEBGL_compressed_texture_s3tc_srgb"),_!==null){if(m===33776)return _.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(_=h.get("WEBGL_compressed_texture_s3tc"),_!==null){if(m===33776)return _.COMPRESSED_RGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(m===35840||m===35841||m===35842||m===35843)if(_=h.get("WEBGL_compressed_texture_pvrtc"),_!==null){if(m===35840)return _.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(m===35841)return _.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(m===35842)return _.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(m===35843)return _.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(m===36196||m===37492||m===37496)if(_=h.get("WEBGL_compressed_texture_etc"),_!==null){if(m===36196||m===37492)return y==="srgb"?_.COMPRESSED_SRGB8_ETC2:_.COMPRESSED_RGB8_ETC2;if(m===37496)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:_.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(m===37808||m===37809||m===37810||m===37811||m===37812||m===37813||m===37814||m===37815||m===37816||m===37817||m===37818||m===37819||m===37820||m===37821)if(_=h.get("WEBGL_compressed_texture_astc"),_!==null){if(m===37808)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:_.COMPRESSED_RGBA_ASTC_4x4_KHR;if(m===37809)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:_.COMPRESSED_RGBA_ASTC_5x4_KHR;if(m===37810)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:_.COMPRESSED_RGBA_ASTC_5x5_KHR;if(m===37811)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:_.COMPRESSED_RGBA_ASTC_6x5_KHR;if(m===37812)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:_.COMPRESSED_RGBA_ASTC_6x6_KHR;if(m===37813)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:_.COMPRESSED_RGBA_ASTC_8x5_KHR;if(m===37814)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:_.COMPRESSED_RGBA_ASTC_8x6_KHR;if(m===37815)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:_.COMPRESSED_RGBA_ASTC_8x8_KHR;if(m===37816)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:_.COMPRESSED_RGBA_ASTC_10x5_KHR;if(m===37817)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:_.COMPRESSED_RGBA_ASTC_10x6_KHR;if(m===37818)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:_.COMPRESSED_RGBA_ASTC_10x8_KHR;if(m===37819)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:_.COMPRESSED_RGBA_ASTC_10x10_KHR;if(m===37820)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:_.COMPRESSED_RGBA_ASTC_12x10_KHR;if(m===37821)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:_.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(m===36492||m===36494||m===36495)if(_=h.get("EXT_texture_compression_bptc"),_!==null){if(m===36492)return y==="srgb"?_.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:_.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(m===36494)return _.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(m===36495)return _.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(m===36283||m===36284||m===36285||m===36286)if(_=h.get("EXT_texture_compression_rgtc"),_!==null){if(m===36492)return _.COMPRESSED_RED_RGTC1_EXT;if(m===36284)return _.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(m===36285)return _.COMPRESSED_RED_GREEN_RGTC2_EXT;if(m===36286)return _.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(m===1020)return a.UNSIGNED_INT_24_8;return a[m]!==void 0?a[m]:null}return{convert:p}}class tl extends ke{constructor(a=[]){super();this.isArrayCamera=!0,this.cameras=a}}class Ot extends Ne{constructor(){super();this.isGroup=!0,this.type="Group"}}var zf={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q;return this._grip}dispatchEvent(a){if(this._targetRay!==null)this._targetRay.dispatchEvent(a);if(this._grip!==null)this._grip.dispatchEvent(a);if(this._hand!==null)this._hand.dispatchEvent(a);return this}connect(a){if(a&&a.hand){let h=this._hand;if(h)for(let p of a.hand.values())this._getHandJoint(h,p)}return this.dispatchEvent({type:"connected",data:a}),this}disconnect(a){if(this.dispatchEvent({type:"disconnected",data:a}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(a,h,p){let m=null,g=null,_=null,y=this._targetRay,x=this._grip,M=this._hand;if(a&&h.session.visibilityState!=="visible-blurred"){if(M&&a.hand){_=!0;for(let P of a.hand.values()){let I=h.getJointPose(P,p),T=this._getHandJoint(M,P);if(I!==null)T.matrix.fromArray(I.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.matrixWorldNeedsUpdate=!0,T.jointRadius=I.radius;T.visible=I!==null}let S=M.joints["index-finger-tip"],E=M.joints["thumb-tip"],v=S.position.distanceTo(E.position),b=0.02,A=0.005;if(M.inputState.pinching&&v>b+A)M.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:a.handedness,target:this});else if(!M.inputState.pinching&&v<=b-A)M.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:a.handedness,target:this})}else if(x!==null&&a.gripSpace){if(g=h.getPose(a.gripSpace,p),g!==null){if(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,g.linearVelocity)x.hasLinearVelocity=!0,x.linearVelocity.copy(g.linearVelocity);else x.hasLinearVelocity=!1;if(g.angularVelocity)x.hasAngularVelocity=!0,x.angularVelocity.copy(g.angularVelocity);else x.hasAngularVelocity=!1}}if(y!==null){if(m=h.getPose(a.targetRaySpace,p),m===null&&g!==null)m=g;if(m!==null){if(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,m.linearVelocity)y.hasLinearVelocity=!0,y.linearVelocity.copy(m.linearVelocity);else y.hasLinearVelocity=!1;if(m.angularVelocity)y.hasAngularVelocity=!0,y.angularVelocity.copy(m.angularVelocity);else y.hasAngularVelocity=!1;this.dispatchEvent(zf)}}}if(y!==null)y.visible=m!==null;if(x!==null)x.visible=g!==null;if(M!==null)M.visible=_!==null;return this}_getHandJoint(a,h){if(a.joints[h.jointName]===void 0){let p=new Ot;p.matrixAutoUpdate=!1,p.visible=!1,a.joints[h.jointName]=p,a.add(p)}return a.joints[h.jointName]}}var Hf=`
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

}`;class el{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(a,h,p){if(this.texture===null){let m=new Ge,g=a.properties.get(m);if(g.__webglTexture=h.texture,h.depthNear!=p.depthNear||h.depthFar!=p.depthFar)this.depthNear=h.depthNear,this.depthFar=h.depthFar;this.texture=m}}getMesh(a){if(this.texture!==null){if(this.mesh===null){let h=a.cameras[0].viewport,p=new Rn({vertexShader:Hf,fragmentShader:kf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:h.z},depthHeight:{value:h.w}}});this.mesh=new ie(new wi(20,20),p)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nl extends Hn{constructor(a,h){super();let p=this,m=null,g=1,_=null,y="local-floor",x=1,M=null,S=null,E=null,v=null,b=null,A=null,P=new el,I=h.getContextAttributes(),T=null,w=null,W=[],F=[],k=new Et,rt=null,X=new ke;X.viewport=new ye;let Y=new ke;Y.viewport=new ye;let lt=[X,Y],O=new tl,B=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let bt=W[ut];if(bt===void 0)bt=new Os,W[ut]=bt;return bt.getTargetRaySpace()},this.getControllerGrip=function(ut){let bt=W[ut];if(bt===void 0)bt=new Os,W[ut]=bt;return bt.getGripSpace()},this.getHand=function(ut){let bt=W[ut];if(bt===void 0)bt=new Os,W[ut]=bt;return bt.getHandSpace()};function at(ut){let bt=F.indexOf(ut.inputSource);if(bt===-1)return;let qt=W[bt];if(qt!==void 0)qt.update(ut.inputSource,ut.frame,M||_),qt.dispatchEvent({type:ut.type,data:ut.inputSource})}function ot(){m.removeEventListener("select",at),m.removeEventListener("selectstart",at),m.removeEventListener("selectend",at),m.removeEventListener("squeeze",at),m.removeEventListener("squeezestart",at),m.removeEventListener("squeezeend",at),m.removeEventListener("end",ot),m.removeEventListener("inputsourceschange",ct);for(let ut=0;ut<W.length;ut++){let bt=F[ut];if(bt===null)continue;F[ut]=null,W[ut].disconnect(bt)}B=null,Q=null,P.reset(),a.setRenderTarget(T),b=null,v=null,E=null,m=null,w=null,$t.stop(),p.isPresenting=!1,a.setPixelRatio(rt),a.setSize(k.width,k.height,!1),p.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){if(g=ut,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){if(y=ut,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return M||_},this.setReferenceSpace=function(ut){M=ut},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return E},this.getFrame=function(){return A},this.getSession=function(){return m},this.setSession=async function(ut){if(m=ut,m!==null){if(T=a.getRenderTarget(),m.addEventListener("select",at),m.addEventListener("selectstart",at),m.addEventListener("selectend",at),m.addEventListener("squeeze",at),m.addEventListener("squeezestart",at),m.addEventListener("squeezeend",at),m.addEventListener("end",ot),m.addEventListener("inputsourceschange",ct),I.xrCompatible!==!0)await h.makeXRCompatible();if(rt=a.getPixelRatio(),a.getSize(k),m.renderState.layers===void 0){let bt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:g};b=new XRWebGLLayer(m,h,bt),m.updateRenderState({baseLayer:b}),a.setPixelRatio(1),a.setSize(b.framebufferWidth,b.framebufferHeight,!1),w=new zn(b.framebufferWidth,b.framebufferHeight,{format:1023,type:1009,colorSpace:a.outputColorSpace,stencilBuffer:I.stencil})}else{let bt=null,qt=null,kt=null;if(I.depth)kt=I.stencil?h.DEPTH24_STENCIL8:h.DEPTH_COMPONENT24,bt=I.stencil?1027:1026,qt=I.stencil?1020:1014;let Ct={colorFormat:h.RGBA8,depthFormat:kt,scaleFactor:g};E=new XRWebGLBinding(m,h),v=E.createProjectionLayer(Ct),m.updateRenderState({layers:[v]}),a.setPixelRatio(1),a.setSize(v.textureWidth,v.textureHeight,!1),w=new zn(v.textureWidth,v.textureHeight,{format:1023,type:1009,depthTexture:new Kr(v.textureWidth,v.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:I.stencil,colorSpace:a.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(x),M=null,_=await m.requestReferenceSpace(y),$t.setContext(m),$t.start(),p.isPresenting=!0,p.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(m!==null)return m.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function ct(ut){for(let bt=0;bt<ut.removed.length;bt++){let qt=ut.removed[bt],kt=F.indexOf(qt);if(kt>=0)F[kt]=null,W[kt].disconnect(qt)}for(let bt=0;bt<ut.added.length;bt++){let qt=ut.added[bt],kt=F.indexOf(qt);if(kt===-1){for(let jt=0;jt<W.length;jt++)if(jt>=F.length){F.push(qt),kt=jt;break}else if(F[jt]===null){F[jt]=qt,kt=jt;break}if(kt===-1)break}let Ct=W[kt];if(Ct)Ct.connect(qt)}}let dt=new q,K=new q;function st(ut,bt,qt){dt.setFromMatrixPosition(bt.matrixWorld),K.setFromMatrixPosition(qt.matrixWorld);let kt=dt.distanceTo(K),Ct=bt.projectionMatrix.elements,jt=qt.projectionMatrix.elements,ae=Ct[14]/(Ct[10]-1),Kt=Ct[14]/(Ct[10]+1),_t=(Ct[9]+1)/Ct[5],Tt=(Ct[9]-1)/Ct[5],V=(Ct[8]-1)/Ct[0],zt=(jt[8]+1)/jt[0],wt=ae*V,Gt=ae*zt,St=kt/(-V+zt),Qt=St*-V;if(bt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(Qt),ut.translateZ(St),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),Ct[10]===-1)ut.projectionMatrix.copy(bt.projectionMatrix),ut.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let Bt=ae+St,Wt=Kt+St,G=wt-Qt,L=Gt+(kt-Qt),it=_t*Kt/Wt*Bt,pt=Tt*Kt/Wt*Bt;ut.projectionMatrix.makePerspective(G,L,it,pt,Bt,Wt),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function Z(ut,bt){if(bt===null)ut.matrixWorld.copy(ut.matrix);else ut.matrixWorld.multiplyMatrices(bt.matrixWorld,ut.matrix);ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(m===null)return;let{near:bt,far:qt}=ut;if(P.texture!==null){if(P.depthNear>0)bt=P.depthNear;if(P.depthFar>0)qt=P.depthFar}if(O.near=Y.near=X.near=bt,O.far=Y.far=X.far=qt,B!==O.near||Q!==O.far)m.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,Q=O.far;X.layers.mask=ut.layers.mask|2,Y.layers.mask=ut.layers.mask|4,O.layers.mask=X.layers.mask|Y.layers.mask;let kt=ut.parent,Ct=O.cameras;Z(O,kt);for(let jt=0;jt<Ct.length;jt++)Z(Ct[jt],kt);if(Ct.length===2)st(O,X,Y);else O.projectionMatrix.copy(X.projectionMatrix);Rt(ut,O,kt)};function Rt(ut,bt,qt){if(qt===null)ut.matrix.copy(bt.matrixWorld);else ut.matrix.copy(qt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(bt.matrixWorld);if(ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(bt.projectionMatrix),ut.projectionMatrixInverse.copy(bt.projectionMatrixInverse),ut.isPerspectiveCamera)ut.fov=Ji*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1}this.getCamera=function(){return O},this.getFoveation=function(){if(v===null&&b===null)return;return x},this.setFoveation=function(ut){if(x=ut,v!==null)v.fixedFoveation=ut;if(b!==null&&b.fixedFoveation!==void 0)b.fixedFoveation=ut},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(O)};let U=null;function Vt(ut,bt){if(S=bt.getViewerPose(M||_),A=bt,S!==null){let qt=S.views;if(b!==null)a.setRenderTargetFramebuffer(w,b.framebuffer),a.setRenderTarget(w);let kt=!1;if(qt.length!==O.cameras.length)O.cameras.length=0,kt=!0;for(let jt=0;jt<qt.length;jt++){let ae=qt[jt],Kt=null;if(b!==null)Kt=b.getViewport(ae);else{let Tt=E.getViewSubImage(v,ae);if(Kt=Tt.viewport,jt===0)a.setRenderTargetTextures(w,Tt.colorTexture,v.ignoreDepthValues?void 0:Tt.depthStencilTexture),a.setRenderTarget(w)}let _t=lt[jt];if(_t===void 0)_t=new ke,_t.layers.enable(jt),_t.viewport=new ye,lt[jt]=_t;if(_t.matrix.fromArray(ae.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(ae.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),jt===0)O.matrix.copy(_t.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);if(kt===!0)O.cameras.push(_t)}let Ct=m.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let jt=E.getDepthInformation(qt[0]);if(jt&&jt.isValid&&jt.texture)P.init(a,jt,m.renderState)}}for(let qt=0;qt<W.length;qt++){let kt=F[qt],Ct=W[qt];if(kt!==null&&Ct!==void 0)Ct.update(kt,bt,M||_)}if(U)U(ut,bt);if(bt.detectedPlanes)p.dispatchEvent({type:"planesdetected",data:bt});A=null}let $t=new Go;$t.setAnimationLoop(Vt),this.setAnimationLoop=function(ut){U=ut},this.dispose=function(){}}}var Kn=new _n,Gf=new Se;function Wf(a,h){function p(T,w){if(T.matrixAutoUpdate===!0)T.updateMatrix();w.value.copy(T.matrix)}function m(T,w){if(w.color.getRGB(T.fogColor.value,zo(a)),w.isFog)T.fogNear.value=w.near,T.fogFar.value=w.far;else if(w.isFogExp2)T.fogDensity.value=w.density}function g(T,w,W,F,k){if(w.isMeshBasicMaterial)_(T,w);else if(w.isMeshLambertMaterial)_(T,w);else if(w.isMeshToonMaterial)_(T,w),v(T,w);else if(w.isMeshPhongMaterial)_(T,w),E(T,w);else if(w.isMeshStandardMaterial){if(_(T,w),b(T,w),w.isMeshPhysicalMaterial)A(T,w,k)}else if(w.isMeshMatcapMaterial)_(T,w),P(T,w);else if(w.isMeshDepthMaterial)_(T,w);else if(w.isMeshDistanceMaterial)_(T,w),I(T,w);else if(w.isMeshNormalMaterial)_(T,w);else if(w.isLineBasicMaterial){if(y(T,w),w.isLineDashedMaterial)x(T,w)}else if(w.isPointsMaterial)M(T,w,W,F);else if(w.isSpriteMaterial)S(T,w);else if(w.isShadowMaterial)T.color.value.copy(w.color),T.opacity.value=w.opacity;else if(w.isShaderMaterial)w.uniformsNeedUpdate=!1}function _(T,w){if(T.opacity.value=w.opacity,w.color)T.diffuse.value.copy(w.color);if(w.emissive)T.emissive.value.copy(w.emissive).multiplyScalar(w.emissiveIntensity);if(w.map)T.map.value=w.map,p(w.map,T.mapTransform);if(w.alphaMap)T.alphaMap.value=w.alphaMap,p(w.alphaMap,T.alphaMapTransform);if(w.bumpMap){if(T.bumpMap.value=w.bumpMap,p(w.bumpMap,T.bumpMapTransform),T.bumpScale.value=w.bumpScale,w.side===1)T.bumpScale.value*=-1}if(w.normalMap){if(T.normalMap.value=w.normalMap,p(w.normalMap,T.normalMapTransform),T.normalScale.value.copy(w.normalScale),w.side===1)T.normalScale.value.negate()}if(w.displacementMap)T.displacementMap.value=w.displacementMap,p(w.displacementMap,T.displacementMapTransform),T.displacementScale.value=w.displacementScale,T.displacementBias.value=w.displacementBias;if(w.emissiveMap)T.emissiveMap.value=w.emissiveMap,p(w.emissiveMap,T.emissiveMapTransform);if(w.specularMap)T.specularMap.value=w.specularMap,p(w.specularMap,T.specularMapTransform);if(w.alphaTest>0)T.alphaTest.value=w.alphaTest;let W=h.get(w),{envMap:F,envMapRotation:k}=W;if(F){if(T.envMap.value=F,Kn.copy(k),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1)Kn.y*=-1,Kn.z*=-1;T.envMapRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(Kn)),T.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=w.reflectivity,T.ior.value=w.ior,T.refractionRatio.value=w.refractionRatio}if(w.lightMap)T.lightMap.value=w.lightMap,T.lightMapIntensity.value=w.lightMapIntensity,p(w.lightMap,T.lightMapTransform);if(w.aoMap)T.aoMap.value=w.aoMap,T.aoMapIntensity.value=w.aoMapIntensity,p(w.aoMap,T.aoMapTransform)}function y(T,w){if(T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,w.map)T.map.value=w.map,p(w.map,T.mapTransform)}function x(T,w){T.dashSize.value=w.dashSize,T.totalSize.value=w.dashSize+w.gapSize,T.scale.value=w.scale}function M(T,w,W,F){if(T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,T.size.value=w.size*W,T.scale.value=F*0.5,w.map)T.map.value=w.map,p(w.map,T.uvTransform);if(w.alphaMap)T.alphaMap.value=w.alphaMap,p(w.alphaMap,T.alphaMapTransform);if(w.alphaTest>0)T.alphaTest.value=w.alphaTest}function S(T,w){if(T.diffuse.value.copy(w.color),T.opacity.value=w.opacity,T.rotation.value=w.rotation,w.map)T.map.value=w.map,p(w.map,T.mapTransform);if(w.alphaMap)T.alphaMap.value=w.alphaMap,p(w.alphaMap,T.alphaMapTransform);if(w.alphaTest>0)T.alphaTest.value=w.alphaTest}function E(T,w){T.specular.value.copy(w.specular),T.shininess.value=Math.max(w.shininess,0.0001)}function v(T,w){if(w.gradientMap)T.gradientMap.value=w.gradientMap}function b(T,w){if(T.metalness.value=w.metalness,w.metalnessMap)T.metalnessMap.value=w.metalnessMap,p(w.metalnessMap,T.metalnessMapTransform);if(T.roughness.value=w.roughness,w.roughnessMap)T.roughnessMap.value=w.roughnessMap,p(w.roughnessMap,T.roughnessMapTransform);if(w.envMap)T.envMapIntensity.value=w.envMapIntensity}function A(T,w,W){if(T.ior.value=w.ior,w.sheen>0){if(T.sheenColor.value.copy(w.sheenColor).multiplyScalar(w.sheen),T.sheenRoughness.value=w.sheenRoughness,w.sheenColorMap)T.sheenColorMap.value=w.sheenColorMap,p(w.sheenColorMap,T.sheenColorMapTransform);if(w.sheenRoughnessMap)T.sheenRoughnessMap.value=w.sheenRoughnessMap,p(w.sheenRoughnessMap,T.sheenRoughnessMapTransform)}if(w.clearcoat>0){if(T.clearcoat.value=w.clearcoat,T.clearcoatRoughness.value=w.clearcoatRoughness,w.clearcoatMap)T.clearcoatMap.value=w.clearcoatMap,p(w.clearcoatMap,T.clearcoatMapTransform);if(w.clearcoatRoughnessMap)T.clearcoatRoughnessMap.value=w.clearcoatRoughnessMap,p(w.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform);if(w.clearcoatNormalMap){if(T.clearcoatNormalMap.value=w.clearcoatNormalMap,p(w.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(w.clearcoatNormalScale),w.side===1)T.clearcoatNormalScale.value.negate()}}if(w.dispersion>0)T.dispersion.value=w.dispersion;if(w.iridescence>0){if(T.iridescence.value=w.iridescence,T.iridescenceIOR.value=w.iridescenceIOR,T.iridescenceThicknessMinimum.value=w.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=w.iridescenceThicknessRange[1],w.iridescenceMap)T.iridescenceMap.value=w.iridescenceMap,p(w.iridescenceMap,T.iridescenceMapTransform);if(w.iridescenceThicknessMap)T.iridescenceThicknessMap.value=w.iridescenceThicknessMap,p(w.iridescenceThicknessMap,T.iridescenceThicknessMapTransform)}if(w.transmission>0){if(T.transmission.value=w.transmission,T.transmissionSamplerMap.value=W.texture,T.transmissionSamplerSize.value.set(W.width,W.height),w.transmissionMap)T.transmissionMap.value=w.transmissionMap,p(w.transmissionMap,T.transmissionMapTransform);if(T.thickness.value=w.thickness,w.thicknessMap)T.thicknessMap.value=w.thicknessMap,p(w.thicknessMap,T.thicknessMapTransform);T.attenuationDistance.value=w.attenuationDistance,T.attenuationColor.value.copy(w.attenuationColor)}if(w.anisotropy>0){if(T.anisotropyVector.value.set(w.anisotropy*Math.cos(w.anisotropyRotation),w.anisotropy*Math.sin(w.anisotropyRotation)),w.anisotropyMap)T.anisotropyMap.value=w.anisotropyMap,p(w.anisotropyMap,T.anisotropyMapTransform)}if(T.specularIntensity.value=w.specularIntensity,T.specularColor.value.copy(w.specularColor),w.specularColorMap)T.specularColorMap.value=w.specularColorMap,p(w.specularColorMap,T.specularColorMapTransform);if(w.specularIntensityMap)T.specularIntensityMap.value=w.specularIntensityMap,p(w.specularIntensityMap,T.specularIntensityMapTransform)}function P(T,w){if(w.matcap)T.matcap.value=w.matcap}function I(T,w){let W=h.get(w).light;T.referencePosition.value.setFromMatrixPosition(W.matrixWorld),T.nearDistance.value=W.shadow.camera.near,T.farDistance.value=W.shadow.camera.far}return{refreshFogUniforms:m,refreshMaterialUniforms:g}}function Vf(a,h,p,m){let g={},_={},y=[],x=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function M(W,F){let k=F.program;m.uniformBlockBinding(W,k)}function S(W,F){let k=g[W.id];if(k===void 0)P(W),k=E(W),g[W.id]=k,W.addEventListener("dispose",T);let rt=F.program;m.updateUBOMapping(W,rt);let X=h.render.frame;if(_[W.id]!==X)b(W),_[W.id]=X}function E(W){let F=v();W.__bindingPointIndex=F;let k=a.createBuffer(),{__size:rt,usage:X}=W;return a.bindBuffer(a.UNIFORM_BUFFER,k),a.bufferData(a.UNIFORM_BUFFER,rt,X),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,F,k),k}function v(){for(let W=0;W<x;W++)if(y.indexOf(W)===-1)return y.push(W),W;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(W){let F=g[W.id],{uniforms:k,__cache:rt}=W;a.bindBuffer(a.UNIFORM_BUFFER,F);for(let X=0,Y=k.length;X<Y;X++){let lt=Array.isArray(k[X])?k[X]:[k[X]];for(let O=0,B=lt.length;O<B;O++){let Q=lt[O];if(A(Q,X,O,rt)===!0){let at=Q.__offset,ot=Array.isArray(Q.value)?Q.value:[Q.value],ct=0;for(let dt=0;dt<ot.length;dt++){let K=ot[dt],st=I(K);if(typeof K==="number"||typeof K==="boolean")Q.__data[0]=K,a.bufferSubData(a.UNIFORM_BUFFER,at+ct,Q.__data);else if(K.isMatrix3)Q.__data[0]=K.elements[0],Q.__data[1]=K.elements[1],Q.__data[2]=K.elements[2],Q.__data[3]=0,Q.__data[4]=K.elements[3],Q.__data[5]=K.elements[4],Q.__data[6]=K.elements[5],Q.__data[7]=0,Q.__data[8]=K.elements[6],Q.__data[9]=K.elements[7],Q.__data[10]=K.elements[8],Q.__data[11]=0;else K.toArray(Q.__data,ct),ct+=st.storage/Float32Array.BYTES_PER_ELEMENT}a.bufferSubData(a.UNIFORM_BUFFER,at,Q.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function A(W,F,k,rt){let X=W.value,Y=F+"_"+k;if(rt[Y]===void 0){if(typeof X==="number"||typeof X==="boolean")rt[Y]=X;else rt[Y]=X.clone();return!0}else{let lt=rt[Y];if(typeof X==="number"||typeof X==="boolean"){if(lt!==X)return rt[Y]=X,!0}else if(lt.equals(X)===!1)return lt.copy(X),!0}return!1}function P(W){let F=W.uniforms,k=0,rt=16;for(let Y=0,lt=F.length;Y<lt;Y++){let O=Array.isArray(F[Y])?F[Y]:[F[Y]];for(let B=0,Q=O.length;B<Q;B++){let at=O[B],ot=Array.isArray(at.value)?at.value:[at.value];for(let ct=0,dt=ot.length;ct<dt;ct++){let K=ot[ct],st=I(K),Z=k%rt,Rt=Z%st.boundary,U=Z+Rt;if(k+=Rt,U!==0&&rt-U<st.storage)k+=rt-U;at.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=k,k+=st.storage}}}let X=k%rt;if(X>0)k+=rt-X;return W.__size=k,W.__cache={},this}function I(W){let F={boundary:0,storage:0};if(typeof W==="number"||typeof W==="boolean")F.boundary=4,F.storage=4;else if(W.isVector2)F.boundary=8,F.storage=8;else if(W.isVector3||W.isColor)F.boundary=16,F.storage=12;else if(W.isVector4)F.boundary=16,F.storage=16;else if(W.isMatrix3)F.boundary=48,F.storage=48;else if(W.isMatrix4)F.boundary=64,F.storage=64;else if(W.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",W);return F}function T(W){let F=W.target;F.removeEventListener("dispose",T);let k=y.indexOf(F.__bindingPointIndex);y.splice(k,1),a.deleteBuffer(g[F.id]),delete g[F.id],delete _[F.id]}function w(){for(let W in g)a.deleteBuffer(g[W]);y=[],g={},_={}}return{bind:M,update:S,dispose:w}}class jr{constructor(a={}){let{canvas:h=Yl(),context:p=null,depth:m=!0,stencil:g=!1,alpha:_=!1,antialias:y=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:M=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:E=!1,reverseDepthBuffer:v=!1}=a;this.isWebGLRenderer=!0;let b;if(p!==null){if(typeof WebGLRenderingContext<"u"&&p instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=p.getContextAttributes().alpha}else b=_;let A=new Uint32Array(4),P=new Int32Array(4),I=null,T=null,w=[],W=[];this.domElement=h,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let F=this,k=!1,rt=0,X=0,Y=null,lt=-1,O=null,B=new ye,Q=new ye,at=null,ot=new ue(0),ct=0,{width:dt,height:K}=h,st=1,Z=null,Rt=null,U=new ye(0,0,dt,K),Vt=new ye(0,0,dt,K),$t=!1,ut=new Gs,bt=!1,qt=!1,kt=new Se,Ct=new Se,jt=new q,ae=new ye,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function Tt(){return Y===null?st:1}let V=p;function zt(R,H){return h.getContext(R,H)}try{let R={alpha:!0,depth:m,stencil:g,antialias:y,premultipliedAlpha:x,preserveDrawingBuffer:M,powerPreference:S,failIfMajorPerformanceCaveat:E};if("setAttribute"in h)h.setAttribute("data-engine","three.js r170");if(h.addEventListener("webglcontextlost",ft,!1),h.addEventListener("webglcontextrestored",mt,!1),h.addEventListener("webglcontextcreationerror",At,!1),V===null){if(V=zt("webgl2",R),V===null)if(zt("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let wt,Gt,St,Qt,Bt,Wt,G,L,it,pt,yt,ht,Zt,Pt,Nt,ee,Mt,Ft,oe,te,Ht,se,ce,Ee;function et(){if(wt=new rd(V),wt.init(),se=new Bf(V,wt),Gt=new Qu(V,wt,a,se),St=new Nf(V,wt),Gt.reverseDepthBuffer&&v)St.buffers.depth.setReversed(!0);Qt=new ld(V),Bt=new Sf,Wt=new Of(V,wt,St,Bt,Gt,se,Qt),G=new ed(F),L=new sd(F),it=new mc(V),ce=new Ku(V,it),pt=new ad(V,it,Qt,ce),yt=new hd(V,pt,it,Qt),oe=new cd(V,Gt,Wt),ee=new td(Bt),ht=new Mf(F,G,L,wt,Gt,ce,ee),Zt=new Wf(F,Bt),Pt=new bf,Nt=new Pf(wt),Ft=new $u(F,G,L,St,yt,b,x),Mt=new Lf(F,yt,Gt),Ee=new Vf(V,Qt,Gt,St),te=new ju(V,wt,Qt),Ht=new od(V,wt,Qt),Qt.programs=ht.programs,F.capabilities=Gt,F.extensions=wt,F.properties=Bt,F.renderLists=Pt,F.shadowMap=Mt,F.state=St,F.info=Qt}et();let vt=new nl(F,V);this.xr=vt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=wt.get("WEBGL_lose_context");if(R)R.loseContext()},this.forceContextRestore=function(){let R=wt.get("WEBGL_lose_context");if(R)R.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(R){if(R===void 0)return;st=R,this.setSize(dt,K,!1)},this.getSize=function(R){return R.set(dt,K)},this.setSize=function(R,H,J=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(dt=R,K=H,h.width=Math.floor(R*st),h.height=Math.floor(H*st),J===!0)h.style.width=R+"px",h.style.height=H+"px";this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(dt*st,K*st).floor()},this.setDrawingBufferSize=function(R,H,J){dt=R,K=H,st=J,h.width=Math.floor(R*J),h.height=Math.floor(H*J),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,H,J,nt){if(R.isVector4)U.set(R.x,R.y,R.z,R.w);else U.set(R,H,J,nt);St.viewport(B.copy(U).multiplyScalar(st).round())},this.getScissor=function(R){return R.copy(Vt)},this.setScissor=function(R,H,J,nt){if(R.isVector4)Vt.set(R.x,R.y,R.z,R.w);else Vt.set(R,H,J,nt);St.scissor(Q.copy(Vt).multiplyScalar(st).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(R){St.setScissorTest($t=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){Rt=R},this.getClearColor=function(R){return R.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(R=!0,H=!0,J=!0){let nt=0;if(R){let j=!1;if(Y!==null){let gt=Y.texture.format;j=gt===1033||gt===1031||gt===1029}if(j){let gt=Y.texture.type,xt=gt===1009||gt===1014||gt===1012||gt===1020||gt===1017||gt===1018,It=Ft.getClearColor(),Dt=Ft.getClearAlpha(),{r:Yt,g:ne,b:Xt}=It;if(xt)A[0]=Yt,A[1]=ne,A[2]=Xt,A[3]=Dt,V.clearBufferuiv(V.COLOR,0,A);else P[0]=Yt,P[1]=ne,P[2]=Xt,P[3]=Dt,V.clearBufferiv(V.COLOR,0,P)}else nt|=V.COLOR_BUFFER_BIT}if(H)nt|=V.DEPTH_BUFFER_BIT;if(J)nt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);V.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){h.removeEventListener("webglcontextlost",ft,!1),h.removeEventListener("webglcontextrestored",mt,!1),h.removeEventListener("webglcontextcreationerror",At,!1),Pt.dispose(),Nt.dispose(),Bt.dispose(),G.dispose(),L.dispose(),yt.dispose(),ce.dispose(),Ee.dispose(),ht.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Ye),vt.removeEventListener("sessionend",Di),fn.stop()};function ft(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let R=Qt.autoReset,H=Mt.enabled,J=Mt.autoUpdate,nt=Mt.needsUpdate,j=Mt.type;et(),Qt.autoReset=R,Mt.enabled=H,Mt.autoUpdate=J,Mt.needsUpdate=nt,Mt.type=j}function At(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ut(R){let H=R.target;H.removeEventListener("dispose",Ut),re(H)}function re(R){be(R),Bt.remove(R)}function be(R){let H=Bt.get(R).programs;if(H!==void 0){if(H.forEach(function(J){ht.releaseProgram(J)}),R.isShaderMaterial)ht.releaseShaderCache(R)}}this.renderBufferDirect=function(R,H,J,nt,j,gt){if(H===null)H=Kt;let xt=j.isMesh&&j.matrixWorld.determinant()<0,It=N(R,H,J,nt,j);St.setMaterial(nt,xt);let Dt=J.index,Yt=1;if(nt.wireframe===!0){if(Dt=pt.getWireframeAttribute(J),Dt===void 0)return;Yt=2}let ne=J.drawRange,Xt=J.attributes.position,de=ne.start*Yt,_e=(ne.start+ne.count)*Yt;if(gt!==null)de=Math.max(de,gt.start*Yt),_e=Math.min(_e,(gt.start+gt.count)*Yt);if(Dt!==null)de=Math.max(de,0),_e=Math.min(_e,Dt.count);else if(Xt!==void 0&&Xt!==null)de=Math.max(de,0),_e=Math.min(_e,Xt.count);let we=_e-de;if(we<0||we===1/0)return;ce.setup(j,nt,It,J,Dt);let Ve,me=te;if(Dt!==null)Ve=it.get(Dt),me=Ht,me.setIndex(Ve);if(j.isMesh)if(nt.wireframe===!0)St.setLineWidth(nt.wireframeLinewidth*Tt()),me.setMode(V.LINES);else me.setMode(V.TRIANGLES);else if(j.isLine){let Jt=nt.linewidth;if(Jt===void 0)Jt=1;if(St.setLineWidth(Jt*Tt()),j.isLineSegments)me.setMode(V.LINES);else if(j.isLineLoop)me.setMode(V.LINE_LOOP);else me.setMode(V.LINE_STRIP)}else if(j.isPoints)me.setMode(V.POINTS);else if(j.isSprite)me.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)me.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(!wt.get("WEBGL_multi_draw")){let{_multiDrawStarts:Jt,_multiDrawCounts:Mn,_multiDrawCount:ge}=j,rn=Dt?it.get(Dt).bytesPerElement:1,ri=Bt.get(nt).currentProgram.getUniforms();for(let Ze=0;Ze<ge;Ze++)ri.setValue(V,"_gl_DrawID",Ze),me.render(Jt[Ze]/rn,Mn[Ze])}else me.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)me.renderInstances(de,we,j.count);else if(J.isInstancedBufferGeometry){let Jt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Mn=Math.min(J.instanceCount,Jt);me.renderInstances(de,we,Mn)}else me.render(de,we)};function Te(R,H,J){if(R.transparent===!0&&R.side===2&&R.forceSinglePass===!1)R.side=1,R.needsUpdate=!0,Xn(R,H,J),R.side=0,R.needsUpdate=!0,Xn(R,H,J),R.side=2;else Xn(R,H,J)}this.compile=function(R,H,J=null){if(J===null)J=R;if(T=Nt.get(J),T.init(H),W.push(T),J.traverseVisible(function(j){if(j.isLight&&j.layers.test(H.layers)){if(T.pushLight(j),j.castShadow)T.pushShadow(j)}}),R!==J)R.traverseVisible(function(j){if(j.isLight&&j.layers.test(H.layers)){if(T.pushLight(j),j.castShadow)T.pushShadow(j)}});T.setupLights();let nt=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let gt=j.material;if(gt)if(Array.isArray(gt))for(let xt=0;xt<gt.length;xt++){let It=gt[xt];Te(It,J,j),nt.add(It)}else Te(gt,J,j),nt.add(gt)}),W.pop(),T=null,nt},this.compileAsync=function(R,H,J=null){let nt=this.compile(R,H,J);return new Promise((j)=>{function gt(){if(nt.forEach(function(xt){if(Bt.get(xt).currentProgram.isReady())nt.delete(xt)}),nt.size===0){j(R);return}setTimeout(gt,10)}if(wt.get("KHR_parallel_shader_compile")!==null)gt();else setTimeout(gt,10)})};let fe=null;function qe(R){if(fe)fe(R)}function Ye(){fn.stop()}function Di(){fn.start()}let fn=new Go;if(fn.setAnimationLoop(qe),typeof self<"u")fn.setContext(self);this.setAnimationLoop=function(R){fe=R,vt.setAnimationLoop(R),R===null?fn.stop():fn.start()},vt.addEventListener("sessionstart",Ye),vt.addEventListener("sessionend",Di),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(R.matrixWorldAutoUpdate===!0)R.updateMatrixWorld();if(H.parent===null&&H.matrixWorldAutoUpdate===!0)H.updateMatrixWorld();if(vt.enabled===!0&&vt.isPresenting===!0){if(vt.cameraAutoUpdate===!0)vt.updateCamera(H);H=vt.getCamera()}if(R.isScene===!0)R.onBeforeRender(F,R,H,Y);if(T=Nt.get(R,W.length),T.init(H),W.push(T),Ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ut.setFromProjectionMatrix(Ct),qt=this.localClippingEnabled,bt=ee.init(this.clippingPlanes,qt),I=Pt.get(R,w.length),I.init(),w.push(I),vt.enabled===!0&&vt.isPresenting===!0){let gt=F.xr.getDepthSensingMesh();if(gt!==null)si(gt,H,-1/0,F.sortObjects)}if(si(R,H,0,F.sortObjects),I.finish(),F.sortObjects===!0)I.sort(Z,Rt);if(_t=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,_t)Ft.addToRenderList(I,R);if(this.info.render.frame++,bt===!0)ee.beginShadows();let J=T.state.shadowsArray;if(Mt.render(J,R,H),bt===!0)ee.endShadows();if(this.info.autoReset===!0)this.info.reset();let nt=I.opaque,j=I.transmissive;if(T.setupLights(),H.isArrayCamera){let gt=H.cameras;if(j.length>0)for(let xt=0,It=gt.length;xt<It;xt++){let Dt=gt[xt];Ui(nt,j,R,Dt)}if(_t)Ft.render(R);for(let xt=0,It=gt.length;xt<It;xt++){let Dt=gt[xt];Li(I,R,Dt,Dt.viewport)}}else{if(j.length>0)Ui(nt,j,R,H);if(_t)Ft.render(R);Li(I,R,H)}if(Y!==null)Wt.updateMultisampleRenderTarget(Y),Wt.updateRenderTargetMipmap(Y);if(R.isScene===!0)R.onAfterRender(F,R,H);if(ce.resetDefaultState(),lt=-1,O=null,W.pop(),W.length>0){if(T=W[W.length-1],bt===!0)ee.setGlobalState(F.clippingPlanes,T.state.camera)}else T=null;if(w.pop(),w.length>0)I=w[w.length-1];else I=null};function si(R,H,J,nt){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD){if(R.autoUpdate===!0)R.update(H)}else if(R.isLight){if(T.pushLight(R),R.castShadow)T.pushShadow(R)}else if(R.isSprite){if(!R.frustumCulled||ut.intersectsSprite(R)){if(nt)ae.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);let xt=yt.update(R),It=R.material;if(It.visible)I.push(R,xt,It,J,ae.z,null)}}else if(R.isMesh||R.isLine||R.isPoints){if(!R.frustumCulled||ut.intersectsObject(R)){let xt=yt.update(R),It=R.material;if(nt){if(R.boundingSphere!==void 0){if(R.boundingSphere===null)R.computeBoundingSphere();ae.copy(R.boundingSphere.center)}else{if(xt.boundingSphere===null)xt.computeBoundingSphere();ae.copy(xt.boundingSphere.center)}ae.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)}if(Array.isArray(It)){let Dt=xt.groups;for(let Yt=0,ne=Dt.length;Yt<ne;Yt++){let Xt=Dt[Yt],de=It[Xt.materialIndex];if(de&&de.visible)I.push(R,xt,de,J,ae.z,Xt)}}else if(It.visible)I.push(R,xt,It,J,ae.z,null)}}}let gt=R.children;for(let xt=0,It=gt.length;xt<It;xt++)si(gt[xt],H,J,nt)}function Li(R,H,J,nt){let{opaque:j,transmissive:gt,transparent:xt}=R;if(T.setupLightsView(J),bt===!0)ee.setGlobalState(F.clippingPlanes,J);if(nt)St.viewport(B.copy(nt));if(j.length>0)pn(j,H,J);if(gt.length>0)pn(gt,H,J);if(xt.length>0)pn(xt,H,J);St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ui(R,H,J,nt){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[nt.id]===void 0)T.state.transmissionRenderTarget[nt.id]=new zn(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:g,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace});let gt=T.state.transmissionRenderTarget[nt.id],xt=nt.viewport||B;gt.setSize(xt.z,xt.w);let It=F.getRenderTarget();if(F.setRenderTarget(gt),F.getClearColor(ot),ct=F.getClearAlpha(),ct<1)F.setClearColor(16777215,0.5);if(F.clear(),_t)Ft.render(J);let Dt=F.toneMapping;F.toneMapping=0;let Yt=nt.viewport;if(nt.viewport!==void 0)nt.viewport=void 0;if(T.setupLightsView(nt),bt===!0)ee.setGlobalState(F.clippingPlanes,nt);if(pn(R,J,nt),Wt.updateMultisampleRenderTarget(gt),Wt.updateRenderTargetMipmap(gt),wt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Xt=0,de=H.length;Xt<de;Xt++){let _e=H[Xt],{object:we,geometry:Ve,material:me,group:Jt}=_e;if(me.side===2&&we.layers.test(nt.layers)){let Mn=me.side;me.side=1,me.needsUpdate=!0,sn(we,J,nt,Ve,me,Jt),me.side=Mn,me.needsUpdate=!0,ne=!0}}if(ne===!0)Wt.updateMultisampleRenderTarget(gt),Wt.updateRenderTargetMipmap(gt)}if(F.setRenderTarget(It),F.setClearColor(ot,ct),Yt!==void 0)nt.viewport=Yt;F.toneMapping=Dt}function pn(R,H,J){let nt=H.isScene===!0?H.overrideMaterial:null;for(let j=0,gt=R.length;j<gt;j++){let xt=R[j],{object:It,geometry:Dt}=xt,Yt=nt===null?xt.material:nt,ne=xt.group;if(It.layers.test(J.layers))sn(It,H,J,Dt,Yt,ne)}}function sn(R,H,J,nt,j,gt){if(R.onBeforeRender(F,H,J,nt,j,gt),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(F,H,J,nt,R,gt),j.transparent===!0&&j.side===2&&j.forceSinglePass===!1)j.side=1,j.needsUpdate=!0,F.renderBufferDirect(J,H,nt,j,R,gt),j.side=0,j.needsUpdate=!0,F.renderBufferDirect(J,H,nt,j,R,gt),j.side=2;else F.renderBufferDirect(J,H,nt,j,R,gt);R.onAfterRender(F,H,J,nt,j,gt)}function Xn(R,H,J){if(H.isScene!==!0)H=Kt;let nt=Bt.get(R),j=T.state.lights,gt=T.state.shadowsArray,xt=j.state.version,It=ht.getParameters(R,j.state,gt,H,J),Dt=ht.getProgramCacheKey(It),Yt=nt.programs;if(nt.environment=R.isMeshStandardMaterial?H.environment:null,nt.fog=H.fog,nt.envMap=(R.isMeshStandardMaterial?L:G).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Yt===void 0)R.addEventListener("dispose",Ut),Yt=new Map,nt.programs=Yt;let ne=Yt.get(Dt);if(ne!==void 0){if(nt.currentProgram===ne&&nt.lightsStateVersion===xt)return D(R,It),ne}else It.uniforms=ht.getUniforms(R),R.onBeforeCompile(It,F),ne=ht.acquireProgram(It,Dt),Yt.set(Dt,ne),nt.uniforms=It.uniforms;let Xt=nt.uniforms;if(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)Xt.clippingPlanes=ee.uniform;if(D(R,It),nt.needsLights=tt(R),nt.lightsStateVersion=xt,nt.needsLights)Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix;return nt.currentProgram=ne,nt.uniformsList=null,ne}function C(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=qi.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function D(R,H){let J=Bt.get(R);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function N(R,H,J,nt,j){if(H.isScene!==!0)H=Kt;Wt.resetTextureUnits();let gt=H.fog,xt=nt.isMeshStandardMaterial?H.environment:null,It=Y===null?F.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:"srgb-linear",Dt=(nt.isMeshStandardMaterial?L:G).get(nt.envMap||xt),Yt=nt.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ne=!!J.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Xt=!!J.morphAttributes.position,de=!!J.morphAttributes.normal,_e=!!J.morphAttributes.color,we=0;if(nt.toneMapped){if(Y===null||Y.isXRRenderTarget===!0)we=F.toneMapping}let Ve=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,me=Ve!==void 0?Ve.length:0,Jt=Bt.get(nt),Mn=T.state.lights;if(bt===!0){if(qt===!0||R!==O){let je=R===O&&nt.id===lt;ee.setState(nt,R,je)}}let ge=!1;if(nt.version===Jt.__version){if(Jt.needsLights&&Jt.lightsStateVersion!==Mn.state.version)ge=!0;else if(Jt.outputColorSpace!==It)ge=!0;else if(j.isBatchedMesh&&Jt.batching===!1)ge=!0;else if(!j.isBatchedMesh&&Jt.batching===!0)ge=!0;else if(j.isBatchedMesh&&Jt.batchingColor===!0&&j.colorTexture===null)ge=!0;else if(j.isBatchedMesh&&Jt.batchingColor===!1&&j.colorTexture!==null)ge=!0;else if(j.isInstancedMesh&&Jt.instancing===!1)ge=!0;else if(!j.isInstancedMesh&&Jt.instancing===!0)ge=!0;else if(j.isSkinnedMesh&&Jt.skinning===!1)ge=!0;else if(!j.isSkinnedMesh&&Jt.skinning===!0)ge=!0;else if(j.isInstancedMesh&&Jt.instancingColor===!0&&j.instanceColor===null)ge=!0;else if(j.isInstancedMesh&&Jt.instancingColor===!1&&j.instanceColor!==null)ge=!0;else if(j.isInstancedMesh&&Jt.instancingMorph===!0&&j.morphTexture===null)ge=!0;else if(j.isInstancedMesh&&Jt.instancingMorph===!1&&j.morphTexture!==null)ge=!0;else if(Jt.envMap!==Dt)ge=!0;else if(nt.fog===!0&&Jt.fog!==gt)ge=!0;else if(Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==ee.numPlanes||Jt.numIntersection!==ee.numIntersection))ge=!0;else if(Jt.vertexAlphas!==Yt)ge=!0;else if(Jt.vertexTangents!==ne)ge=!0;else if(Jt.morphTargets!==Xt)ge=!0;else if(Jt.morphNormals!==de)ge=!0;else if(Jt.morphColors!==_e)ge=!0;else if(Jt.toneMapping!==we)ge=!0;else if(Jt.morphTargetsCount!==me)ge=!0}else ge=!0,Jt.__version=nt.version;let rn=Jt.currentProgram;if(ge===!0)rn=Xn(nt,H,j);let ri=!1,Ze=!1,Ni=!1,Ae=rn.getUniforms(),mn=Jt.uniforms;if(St.useProgram(rn.program))ri=!0,Ze=!0,Ni=!0;if(nt.id!==lt)lt=nt.id,Ze=!0;if(ri||O!==R){if(St.buffers.depth.getReversed())kt.copy(R.projectionMatrix),Jl(kt),$l(kt),Ae.setValue(V,"projectionMatrix",kt);else Ae.setValue(V,"projectionMatrix",R.projectionMatrix);Ae.setValue(V,"viewMatrix",R.matrixWorldInverse);let Pn=Ae.map.cameraPosition;if(Pn!==void 0)Pn.setValue(V,jt.setFromMatrixPosition(R.matrixWorld));if(Gt.logarithmicDepthBuffer)Ae.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2));if(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)Ae.setValue(V,"isOrthographic",R.isOrthographicCamera===!0);if(O!==R)O=R,Ze=!0,Ni=!0}if(j.isSkinnedMesh){Ae.setOptional(V,j,"bindMatrix"),Ae.setOptional(V,j,"bindMatrixInverse");let je=j.skeleton;if(je){if(je.boneTexture===null)je.computeBoneTexture();Ae.setValue(V,"boneTexture",je.boneTexture,Wt)}}if(j.isBatchedMesh){if(Ae.setOptional(V,j,"batchingTexture"),Ae.setValue(V,"batchingTexture",j._matricesTexture,Wt),Ae.setOptional(V,j,"batchingIdTexture"),Ae.setValue(V,"batchingIdTexture",j._indirectTexture,Wt),Ae.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null)Ae.setValue(V,"batchingColorTexture",j._colorsTexture,Wt)}let Fi=J.morphAttributes;if(Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)oe.update(j,J,rn);if(Ze||Jt.receiveShadow!==j.receiveShadow)Jt.receiveShadow=j.receiveShadow,Ae.setValue(V,"receiveShadow",j.receiveShadow);if(nt.isMeshGouraudMaterial&&nt.envMap!==null)mn.envMap.value=Dt,mn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1;if(nt.isMeshStandardMaterial&&nt.envMap===null&&H.environment!==null)mn.envMapIntensity.value=H.environmentIntensity;if(Ze){if(Ae.setValue(V,"toneMappingExposure",F.toneMappingExposure),Jt.needsLights)z(mn,Ni);if(gt&&nt.fog===!0)Zt.refreshFogUniforms(mn,gt);Zt.refreshMaterialUniforms(mn,nt,st,K,T.state.transmissionRenderTarget[R.id]),qi.upload(V,C(Jt),mn,Wt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0)qi.upload(V,C(Jt),mn,Wt),nt.uniformsNeedUpdate=!1;if(nt.isSpriteMaterial)Ae.setValue(V,"center",j.center);if(Ae.setValue(V,"modelViewMatrix",j.modelViewMatrix),Ae.setValue(V,"normalMatrix",j.normalMatrix),Ae.setValue(V,"modelMatrix",j.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let je=nt.uniformsGroups;for(let Pn=0,In=je.length;Pn<In;Pn++){let ba=je[Pn];Ee.update(ba,rn),Ee.bind(ba,rn)}}return rn}function z(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function tt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}if(this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,H,J){Bt.get(R.texture).__webglTexture=H,Bt.get(R.depthTexture).__webglTexture=J;let nt=Bt.get(R);if(nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=J===void 0,!nt.__autoAllocateDepthBuffer){if(wt.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(R,H){let J=Bt.get(R);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,J=0){Y=R,rt=H,X=J;let nt=!0,j=null,gt=!1,xt=!1;if(R){let Dt=Bt.get(R);if(Dt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(V.FRAMEBUFFER,null),nt=!1;else if(Dt.__webglFramebuffer===void 0)Wt.setupRenderTarget(R);else if(Dt.__hasExternalTextures)Wt.rebindTextures(R,Bt.get(R.texture).__webglTexture,Bt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Xt=R.depthTexture;if(Dt.__boundDepthTexture!==Xt){if(Xt!==null&&Bt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(R)}}let Yt=R.texture;if(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)xt=!0;let ne=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget){if(Array.isArray(ne[H]))j=ne[H][J];else j=ne[H];gt=!0}else if(R.samples>0&&Wt.useMultisampledRTT(R)===!1)j=Bt.get(R).__webglMultisampledFramebuffer;else if(Array.isArray(ne))j=ne[J];else j=ne;B.copy(R.viewport),Q.copy(R.scissor),at=R.scissorTest}else B.copy(U).multiplyScalar(st).floor(),Q.copy(Vt).multiplyScalar(st).floor(),at=$t;if(St.bindFramebuffer(V.FRAMEBUFFER,j)&&nt)St.drawBuffers(R,j);if(St.viewport(B),St.scissor(Q),St.setScissorTest(at),gt){let Dt=Bt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,J)}else if(xt){let Dt=Bt.get(R.texture),Yt=H||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Dt.__webglTexture,J||0,Yt)}lt=-1},this.readRenderTargetPixels=function(R,H,J,nt,j,gt,xt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xt!==void 0)It=It[xt];if(It){St.bindFramebuffer(V.FRAMEBUFFER,It);try{let Dt=R.texture,{format:Yt,type:ne}=Dt;if(!Gt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(H>=0&&H<=R.width-nt&&(J>=0&&J<=R.height-j))V.readPixels(H,J,nt,j,se.convert(Yt),se.convert(ne),gt)}finally{let Dt=Y!==null?Bt.get(Y).__webglFramebuffer:null;St.bindFramebuffer(V.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(R,H,J,nt,j,gt,xt){if(!(R&&R.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xt!==void 0)It=It[xt];if(It){let Dt=R.texture,{format:Yt,type:ne}=Dt;if(!Gt.textureFormatReadable(Yt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(ne))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-nt&&(J>=0&&J<=R.height-j)){St.bindFramebuffer(V.FRAMEBUFFER,It);let Xt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Xt),V.bufferData(V.PIXEL_PACK_BUFFER,gt.byteLength,V.STREAM_READ),V.readPixels(H,J,nt,j,se.convert(Yt),se.convert(ne),0);let de=Y!==null?Bt.get(Y).__webglFramebuffer:null;St.bindFramebuffer(V.FRAMEBUFFER,de);let _e=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Zl(V,_e,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Xt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,gt),V.deleteBuffer(Xt),V.deleteSync(_e),gt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,H=null,J=0){if(R.isTexture!==!0)Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1];let nt=Math.pow(2,-J),j=Math.floor(R.image.width*nt),gt=Math.floor(R.image.height*nt),xt=H!==null?H.x:0,It=H!==null?H.y:0;Wt.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,xt,It,j,gt),St.unbindTexture()},this.copyTextureToTexture=function(R,H,J=null,nt=null,j=0){if(R.isTexture!==!0)Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,R=arguments[1],H=arguments[2],j=arguments[3]||0,J=null;let gt,xt,It,Dt,Yt,ne,Xt,de,_e,we=R.isCompressedTexture?R.mipmaps[j]:R.image;if(J!==null)gt=J.max.x-J.min.x,xt=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Dt=J.min.x,Yt=J.min.y,ne=J.isBox3?J.min.z:0;else gt=we.width,xt=we.height,It=we.depth||1,Dt=0,Yt=0,ne=0;if(nt!==null)Xt=nt.x,de=nt.y,_e=nt.z;else Xt=0,de=0,_e=0;let Ve=se.convert(H.format),me=se.convert(H.type),Jt;if(H.isData3DTexture)Wt.setTexture3D(H,0),Jt=V.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Wt.setTexture2DArray(H,0),Jt=V.TEXTURE_2D_ARRAY;else Wt.setTexture2D(H,0),Jt=V.TEXTURE_2D;V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);let Mn=V.getParameter(V.UNPACK_ROW_LENGTH),ge=V.getParameter(V.UNPACK_IMAGE_HEIGHT),rn=V.getParameter(V.UNPACK_SKIP_PIXELS),ri=V.getParameter(V.UNPACK_SKIP_ROWS),Ze=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,we.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,we.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Dt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Yt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ne);let Ni=R.isDataArrayTexture||R.isData3DTexture,Ae=H.isDataArrayTexture||H.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let mn=Bt.get(R),Fi=Bt.get(H),je=Bt.get(mn.__renderTarget),Pn=Bt.get(Fi.__renderTarget);St.bindFramebuffer(V.READ_FRAMEBUFFER,je.__webglFramebuffer),St.bindFramebuffer(V.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let In=0;In<It;In++){if(Ni)V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Bt.get(R).__webglTexture,j,ne+In);if(R.isDepthTexture){if(Ae)V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Bt.get(H).__webglTexture,j,_e+In);V.blitFramebuffer(Dt,Yt,gt,xt,Xt,de,gt,xt,V.DEPTH_BUFFER_BIT,V.NEAREST)}else if(Ae)V.copyTexSubImage3D(Jt,j,Xt,de,_e+In,Dt,Yt,gt,xt);else V.copyTexSubImage2D(Jt,j,Xt,de,_e+In,Dt,Yt,gt,xt)}St.bindFramebuffer(V.READ_FRAMEBUFFER,null),St.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Ae)if(R.isDataTexture||R.isData3DTexture)V.texSubImage3D(Jt,j,Xt,de,_e,gt,xt,It,Ve,me,we.data);else if(H.isCompressedArrayTexture)V.compressedTexSubImage3D(Jt,j,Xt,de,_e,gt,xt,It,Ve,we.data);else V.texSubImage3D(Jt,j,Xt,de,_e,gt,xt,It,Ve,me,we);else if(R.isDataTexture)V.texSubImage2D(V.TEXTURE_2D,j,Xt,de,gt,xt,Ve,me,we.data);else if(R.isCompressedTexture)V.compressedTexSubImage2D(V.TEXTURE_2D,j,Xt,de,we.width,we.height,Ve,we.data);else V.texSubImage2D(V.TEXTURE_2D,j,Xt,de,gt,xt,Ve,me,we);if(V.pixelStorei(V.UNPACK_ROW_LENGTH,Mn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ge),V.pixelStorei(V.UNPACK_SKIP_PIXELS,rn),V.pixelStorei(V.UNPACK_SKIP_ROWS,ri),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze),j===0&&H.generateMipmaps)V.generateMipmap(Jt);St.unbindTexture()},this.copyTextureToTexture3D=function(R,H,J=null,nt=null,j=0){if(R.isTexture!==!0)Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,nt=arguments[1]||null,R=arguments[2],H=arguments[3],j=arguments[4]||0;return Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,H,J,nt,j)},this.initRenderTarget=function(R){if(Bt.get(R).__webglFramebuffer===void 0)Wt.setupRenderTarget(R)},this.initTexture=function(R){if(R.isCubeTexture)Wt.setTextureCube(R,0);else if(R.isData3DTexture)Wt.setTexture3D(R,0);else if(R.isDataArrayTexture||R.isCompressedArrayTexture)Wt.setTexture2DArray(R,0);else Wt.setTexture2D(R,0);St.unbindTexture()},this.resetState=function(){rt=0,X=0,Y=null,St.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a;let h=this.getContext();h.drawingBufferColorspace=pe._getDrawingBufferColorSpace(a),h.unpackColorSpace=pe._getUnpackColorSpace()}}class ss extends Ne{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(a,h){if(super.copy(a,h),a.background!==null)this.background=a.background.clone();if(a.environment!==null)this.environment=a.environment.clone();if(a.fog!==null)this.fog=a.fog.clone();if(this.backgroundBlurriness=a.backgroundBlurriness,this.backgroundIntensity=a.backgroundIntensity,this.backgroundRotation.copy(a.backgroundRotation),this.environmentIntensity=a.environmentIntensity,this.environmentRotation.copy(a.environmentRotation),a.overrideMaterial!==null)this.overrideMaterial=a.overrideMaterial.clone();return this.matrixAutoUpdate=a.matrixAutoUpdate,this}toJSON(a){let h=super.toJSON(a);if(this.fog!==null)h.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)h.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)h.object.backgroundIntensity=this.backgroundIntensity;if(h.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)h.object.environmentIntensity=this.environmentIntensity;return h.object.environmentRotation=this.environmentRotation.toArray(),h}}class Vs extends Gn{static get type(){return"LineBasicMaterial"}constructor(a){super();this.isLineBasicMaterial=!0,this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.linewidth=a.linewidth,this.linecap=a.linecap,this.linejoin=a.linejoin,this.fog=a.fog,this}}var zs=new q,Hs=new q,_o=new Se,ki=new Ti,Rs=new es,Cr=new q,xo=new q;class il extends Ne{constructor(a=new We,h=new Vs){super();this.isLine=!0,this.type="Line",this.geometry=a,this.material=h,this.updateMorphTargets()}copy(a,h){return super.copy(a,h),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}computeLineDistances(){let a=this.geometry;if(a.index===null){let h=a.attributes.position,p=[0];for(let m=1,g=h.count;m<g;m++)zs.fromBufferAttribute(h,m-1),Hs.fromBufferAttribute(h,m),p[m]=p[m-1],p[m]+=zs.distanceTo(Hs);a.setAttribute("lineDistance",new ve(p,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(a,h){let p=this.geometry,m=this.matrixWorld,g=a.params.Line.threshold,_=p.drawRange;if(p.boundingSphere===null)p.computeBoundingSphere();if(Rs.copy(p.boundingSphere),Rs.applyMatrix4(m),Rs.radius+=g,a.ray.intersectsSphere(Rs)===!1)return;_o.copy(m).invert(),ki.copy(a.ray).applyMatrix4(_o);let y=g/((this.scale.x+this.scale.y+this.scale.z)/3),x=y*y,M=this.isLineSegments?2:1,S=p.index,v=p.attributes.position;if(S!==null){let b=Math.max(0,_.start),A=Math.min(S.count,_.start+_.count);for(let P=b,I=A-1;P<I;P+=M){let T=S.getX(P),w=S.getX(P+1),W=Cs(this,a,ki,x,T,w);if(W)h.push(W)}if(this.isLineLoop){let P=S.getX(A-1),I=S.getX(b),T=Cs(this,a,ki,x,P,I);if(T)h.push(T)}}else{let b=Math.max(0,_.start),A=Math.min(v.count,_.start+_.count);for(let P=b,I=A-1;P<I;P+=M){let T=Cs(this,a,ki,x,P,P+1);if(T)h.push(T)}if(this.isLineLoop){let P=Cs(this,a,ki,x,A-1,b);if(P)h.push(P)}}}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let y=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[y]=g}}}}}function Cs(a,h,p,m,g,_){let y=a.geometry.attributes.position;if(zs.fromBufferAttribute(y,g),Hs.fromBufferAttribute(y,_),p.distanceSqToSegment(zs,Hs,Cr,xo)>m)return;Cr.applyMatrix4(a.matrixWorld);let M=h.ray.origin.distanceTo(Cr);if(M<h.near||M>h.far)return;return{distance:M,point:xo.clone().applyMatrix4(a.matrixWorld),index:g,face:null,faceIndex:null,barycoord:null,object:a}}var yo=new q,vo=new q;class Qr extends il{constructor(a,h){super(a,h);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let a=this.geometry;if(a.index===null){let h=a.attributes.position,p=[];for(let m=0,g=h.count;m<g;m+=2)yo.fromBufferAttribute(h,m),vo.fromBufferAttribute(h,m+1),p[m]=m===0?0:p[m-1],p[m+1]=p[m]+yo.distanceTo(vo);a.setAttribute("lineDistance",new ve(p,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ta extends Ge{constructor(a,h,p,m,g,_,y,x,M){super(a,h,p,m,g,_,y,x,M);this.isCanvasTexture=!0,this.needsUpdate=!0}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(a,h){let p=this.getUtoTmapping(a);return this.getPoint(p,h)}getPoints(a=5){let h=[];for(let p=0;p<=a;p++)h.push(this.getPoint(p/a));return h}getSpacedPoints(a=5){let h=[];for(let p=0;p<=a;p++)h.push(this.getPointAt(p/a));return h}getLength(){let a=this.getLengths();return a[a.length-1]}getLengths(a=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let h=[],p,m=this.getPoint(0),g=0;h.push(0);for(let _=1;_<=a;_++)p=this.getPoint(_/a),g+=p.distanceTo(m),h.push(g),m=p;return this.cacheArcLengths=h,h}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(a,h){let p=this.getLengths(),m=0,g=p.length,_;if(h)_=h;else _=a*p[g-1];let y=0,x=g-1,M;while(y<=x)if(m=Math.floor(y+(x-y)/2),M=p[m]-_,M<0)y=m+1;else if(M>0)x=m-1;else{x=m;break}if(m=x,p[m]===_)return m/(g-1);let S=p[m],v=p[m+1]-S,b=(_-S)/v;return(m+b)/(g-1)}getTangent(a,h){let m=a-0.0001,g=a+0.0001;if(m<0)m=0;if(g>1)g=1;let _=this.getPoint(m),y=this.getPoint(g),x=h||(_.isVector2?new Et:new q);return x.copy(y).sub(_).normalize(),x}getTangentAt(a,h){let p=this.getUtoTmapping(a);return this.getTangent(p,h)}computeFrenetFrames(a,h){let p=new q,m=[],g=[],_=[],y=new q,x=new Se;for(let b=0;b<=a;b++){let A=b/a;m[b]=this.getTangentAt(A,new q)}g[0]=new q,_[0]=new q;let M=Number.MAX_VALUE,S=Math.abs(m[0].x),E=Math.abs(m[0].y),v=Math.abs(m[0].z);if(S<=M)M=S,p.set(1,0,0);if(E<=M)M=E,p.set(0,1,0);if(v<=M)p.set(0,0,1);y.crossVectors(m[0],p).normalize(),g[0].crossVectors(m[0],y),_[0].crossVectors(m[0],g[0]);for(let b=1;b<=a;b++){if(g[b]=g[b-1].clone(),_[b]=_[b-1].clone(),y.crossVectors(m[b-1],m[b]),y.length()>Number.EPSILON){y.normalize();let A=Math.acos(Pe(m[b-1].dot(m[b]),-1,1));g[b].applyMatrix4(x.makeRotationAxis(y,A))}_[b].crossVectors(m[b],g[b])}if(h===!0){let b=Math.acos(Pe(g[0].dot(g[a]),-1,1));if(b/=a,m[0].dot(y.crossVectors(g[0],g[a]))>0)b=-b;for(let A=1;A<=a;A++)g[A].applyMatrix4(x.makeRotationAxis(m[A],b*A)),_[A].crossVectors(m[A],g[A])}return{tangents:m,normals:g,binormals:_}}clone(){return new this.constructor().copy(this)}copy(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}toJSON(){let a={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return a.arcLengthDivisions=this.arcLengthDivisions,a.type=this.type,a}fromJSON(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}}class Xs extends un{constructor(a=0,h=0,p=1,m=1,g=0,_=Math.PI*2,y=!1,x=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=a,this.aY=h,this.xRadius=p,this.yRadius=m,this.aStartAngle=g,this.aEndAngle=_,this.aClockwise=y,this.aRotation=x}getPoint(a,h=new Et){let p=h,m=Math.PI*2,g=this.aEndAngle-this.aStartAngle,_=Math.abs(g)<Number.EPSILON;while(g<0)g+=m;while(g>m)g-=m;if(g<Number.EPSILON)if(_)g=0;else g=m;if(this.aClockwise===!0&&!_)if(g===m)g=-m;else g=g-m;let y=this.aStartAngle+a*g,x=this.aX+this.xRadius*Math.cos(y),M=this.aY+this.yRadius*Math.sin(y);if(this.aRotation!==0){let S=Math.cos(this.aRotation),E=Math.sin(this.aRotation),v=x-this.aX,b=M-this.aY;x=v*S-b*E+this.aX,M=v*E+b*S+this.aY}return p.set(x,M)}copy(a){return super.copy(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}toJSON(){let a=super.toJSON();return a.aX=this.aX,a.aY=this.aY,a.xRadius=this.xRadius,a.yRadius=this.yRadius,a.aStartAngle=this.aStartAngle,a.aEndAngle=this.aEndAngle,a.aClockwise=this.aClockwise,a.aRotation=this.aRotation,a}fromJSON(a){return super.fromJSON(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}}class sl extends Xs{constructor(a,h,p,m,g,_){super(a,h,p,p,m,g,_);this.isArcCurve=!0,this.type="ArcCurve"}}function ea(){let a=0,h=0,p=0,m=0;function g(_,y,x,M){a=_,h=x,p=-3*_+3*y-2*x-M,m=2*_-2*y+x+M}return{initCatmullRom:function(_,y,x,M,S){g(y,x,S*(x-_),S*(M-y))},initNonuniformCatmullRom:function(_,y,x,M,S,E,v){let b=(y-_)/S-(x-_)/(S+E)+(x-y)/E,A=(x-y)/E-(M-y)/(E+v)+(M-x)/v;b*=E,A*=E,g(y,x,b,A)},calc:function(_){let y=_*_,x=y*_;return a+h*_+p*y+m*x}}}var Ps=new q,Pr=new ea,Ir=new ea,Dr=new ea;class rl extends un{constructor(a=[],h=!1,p="centripetal",m=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=a,this.closed=h,this.curveType=p,this.tension=m}getPoint(a,h=new q){let p=h,m=this.points,g=m.length,_=(g-(this.closed?0:1))*a,y=Math.floor(_),x=_-y;if(this.closed)y+=y>0?0:(Math.floor(Math.abs(y)/g)+1)*g;else if(x===0&&y===g-1)y=g-2,x=1;let M,S;if(this.closed||y>0)M=m[(y-1)%g];else Ps.subVectors(m[0],m[1]).add(m[0]),M=Ps;let E=m[y%g],v=m[(y+1)%g];if(this.closed||y+2<g)S=m[(y+2)%g];else Ps.subVectors(m[g-1],m[g-2]).add(m[g-1]),S=Ps;if(this.curveType==="centripetal"||this.curveType==="chordal"){let b=this.curveType==="chordal"?0.5:0.25,A=Math.pow(M.distanceToSquared(E),b),P=Math.pow(E.distanceToSquared(v),b),I=Math.pow(v.distanceToSquared(S),b);if(P<0.0001)P=1;if(A<0.0001)A=P;if(I<0.0001)I=P;Pr.initNonuniformCatmullRom(M.x,E.x,v.x,S.x,A,P,I),Ir.initNonuniformCatmullRom(M.y,E.y,v.y,S.y,A,P,I),Dr.initNonuniformCatmullRom(M.z,E.z,v.z,S.z,A,P,I)}else if(this.curveType==="catmullrom")Pr.initCatmullRom(M.x,E.x,v.x,S.x,this.tension),Ir.initCatmullRom(M.y,E.y,v.y,S.y,this.tension),Dr.initCatmullRom(M.z,E.z,v.z,S.z,this.tension);return p.set(Pr.calc(x),Ir.calc(x),Dr.calc(x)),p}copy(a){super.copy(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(m.clone())}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}toJSON(){let a=super.toJSON();a.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];a.points.push(m.toArray())}return a.closed=this.closed,a.curveType=this.curveType,a.tension=this.tension,a}fromJSON(a){super.fromJSON(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(new q().fromArray(m))}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}}function Mo(a,h,p,m,g){let _=(m-h)*0.5,y=(g-p)*0.5,x=a*a,M=a*x;return(2*p-2*m+_+y)*M+(-3*p+3*m-2*_-y)*x+_*a+p}function Xf(a,h){let p=1-a;return p*p*h}function qf(a,h){return 2*(1-a)*a*h}function Yf(a,h){return a*a*h}function Yi(a,h,p,m){return Xf(a,h)+qf(a,p)+Yf(a,m)}function Zf(a,h){let p=1-a;return p*p*p*h}function Jf(a,h){let p=1-a;return 3*p*p*a*h}function $f(a,h){return 3*(1-a)*a*a*h}function Kf(a,h){return a*a*a*h}function Zi(a,h,p,m,g){return Zf(a,h)+Jf(a,p)+$f(a,m)+Kf(a,g)}class na extends un{constructor(a=new Et,h=new Et,p=new Et,m=new Et){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=a,this.v1=h,this.v2=p,this.v3=m}getPoint(a,h=new Et){let p=h,m=this.v0,g=this.v1,_=this.v2,y=this.v3;return p.set(Zi(a,m.x,g.x,_.x,y.x),Zi(a,m.y,g.y,_.y,y.y)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class al extends un{constructor(a=new q,h=new q,p=new q,m=new q){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=a,this.v1=h,this.v2=p,this.v3=m}getPoint(a,h=new q){let p=h,m=this.v0,g=this.v1,_=this.v2,y=this.v3;return p.set(Zi(a,m.x,g.x,_.x,y.x),Zi(a,m.y,g.y,_.y,y.y),Zi(a,m.z,g.z,_.z,y.z)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class ia extends un{constructor(a=new Et,h=new Et){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=a,this.v2=h}getPoint(a,h=new Et){let p=h;if(a===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(a).add(this.v1);return p}getPointAt(a,h){return this.getPoint(a,h)}getTangent(a,h=new Et){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,h){return this.getTangent(a,h)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class ol extends un{constructor(a=new q,h=new q){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=a,this.v2=h}getPoint(a,h=new q){let p=h;if(a===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(a).add(this.v1);return p}getPointAt(a,h){return this.getPoint(a,h)}getTangent(a,h=new q){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,h){return this.getTangent(a,h)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class sa extends un{constructor(a=new Et,h=new Et,p=new Et){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=a,this.v1=h,this.v2=p}getPoint(a,h=new Et){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(Yi(a,m.x,g.x,_.x),Yi(a,m.y,g.y,_.y)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class ll extends un{constructor(a=new q,h=new q,p=new q){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=a,this.v1=h,this.v2=p}getPoint(a,h=new q){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(Yi(a,m.x,g.x,_.x),Yi(a,m.y,g.y,_.y),Yi(a,m.z,g.z,_.z)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class ra extends un{constructor(a=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=a}getPoint(a,h=new Et){let p=h,m=this.points,g=(m.length-1)*a,_=Math.floor(g),y=g-_,x=m[_===0?_:_-1],M=m[_],S=m[_>m.length-2?m.length-1:_+1],E=m[_>m.length-3?m.length-1:_+2];return p.set(Mo(y,x.x,M.x,S.x,E.x),Mo(y,x.y,M.y,S.y,E.y)),p}copy(a){super.copy(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(m.clone())}return this}toJSON(){let a=super.toJSON();a.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];a.points.push(m.toArray())}return a}fromJSON(a){super.fromJSON(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(new Et().fromArray(m))}return this}}var Or=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:na,CubicBezierCurve3:al,EllipseCurve:Xs,LineCurve:ia,LineCurve3:ol,QuadraticBezierCurve:sa,QuadraticBezierCurve3:ll,SplineCurve:ra});class cl extends un{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(a){this.curves.push(a)}closePath(){let a=this.curves[0].getPoint(0),h=this.curves[this.curves.length-1].getPoint(1);if(!a.equals(h)){let p=a.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Or[p](h,a))}return this}getPoint(a,h){let p=a*this.getLength(),m=this.getCurveLengths(),g=0;while(g<m.length){if(m[g]>=p){let _=m[g]-p,y=this.curves[g],x=y.getLength(),M=x===0?0:1-_/x;return y.getPointAt(M,h)}g++}return null}getLength(){let a=this.getCurveLengths();return a[a.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let a=[],h=0;for(let p=0,m=this.curves.length;p<m;p++)h+=this.curves[p].getLength(),a.push(h);return this.cacheLengths=a,a}getSpacedPoints(a=40){let h=[];for(let p=0;p<=a;p++)h.push(this.getPoint(p/a));if(this.autoClose)h.push(h[0]);return h}getPoints(a=12){let h=[],p;for(let m=0,g=this.curves;m<g.length;m++){let _=g[m],y=_.isEllipseCurve?a*2:_.isLineCurve||_.isLineCurve3?1:_.isSplineCurve?a*_.points.length:a,x=_.getPoints(y);for(let M=0;M<x.length;M++){let S=x[M];if(p&&p.equals(S))continue;h.push(S),p=S}}if(this.autoClose&&h.length>1&&!h[h.length-1].equals(h[0]))h.push(h[0]);return h}copy(a){super.copy(a),this.curves=[];for(let h=0,p=a.curves.length;h<p;h++){let m=a.curves[h];this.curves.push(m.clone())}return this.autoClose=a.autoClose,this}toJSON(){let a=super.toJSON();a.autoClose=this.autoClose,a.curves=[];for(let h=0,p=this.curves.length;h<p;h++){let m=this.curves[h];a.curves.push(m.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.autoClose=a.autoClose,this.curves=[];for(let h=0,p=a.curves.length;h<p;h++){let m=a.curves[h];this.curves.push(new Or[m.type]().fromJSON(m))}return this}}class Br extends cl{constructor(a){super();if(this.type="Path",this.currentPoint=new Et,a)this.setFromPoints(a)}setFromPoints(a){this.moveTo(a[0].x,a[0].y);for(let h=1,p=a.length;h<p;h++)this.lineTo(a[h].x,a[h].y);return this}moveTo(a,h){return this.currentPoint.set(a,h),this}lineTo(a,h){let p=new ia(this.currentPoint.clone(),new Et(a,h));return this.curves.push(p),this.currentPoint.set(a,h),this}quadraticCurveTo(a,h,p,m){let g=new sa(this.currentPoint.clone(),new Et(a,h),new Et(p,m));return this.curves.push(g),this.currentPoint.set(p,m),this}bezierCurveTo(a,h,p,m,g,_){let y=new na(this.currentPoint.clone(),new Et(a,h),new Et(p,m),new Et(g,_));return this.curves.push(y),this.currentPoint.set(g,_),this}splineThru(a){let h=[this.currentPoint.clone()].concat(a),p=new ra(h);return this.curves.push(p),this.currentPoint.copy(a[a.length-1]),this}arc(a,h,p,m,g,_){let y=this.currentPoint.x,x=this.currentPoint.y;return this.absarc(a+y,h+x,p,m,g,_),this}absarc(a,h,p,m,g,_){return this.absellipse(a,h,p,p,m,g,_),this}ellipse(a,h,p,m,g,_,y,x){let M=this.currentPoint.x,S=this.currentPoint.y;return this.absellipse(a+M,h+S,p,m,g,_,y,x),this}absellipse(a,h,p,m,g,_,y,x){let M=new Xs(a,h,p,m,g,_,y,x);if(this.curves.length>0){let E=M.getPoint(0);if(!E.equals(this.currentPoint))this.lineTo(E.x,E.y)}this.curves.push(M);let S=M.getPoint(1);return this.currentPoint.copy(S),this}copy(a){return super.copy(a),this.currentPoint.copy(a.currentPoint),this}toJSON(){let a=super.toJSON();return a.currentPoint=this.currentPoint.toArray(),a}fromJSON(a){return super.fromJSON(a),this.currentPoint.fromArray(a.currentPoint),this}}class qs extends We{constructor(a=1,h=32,p=0,m=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:a,segments:h,thetaStart:p,thetaLength:m},h=Math.max(3,h);let g=[],_=[],y=[],x=[],M=new q,S=new Et;_.push(0,0,0),y.push(0,0,1),x.push(0.5,0.5);for(let E=0,v=3;E<=h;E++,v+=3){let b=p+E/h*m;M.x=a*Math.cos(b),M.y=a*Math.sin(b),_.push(M.x,M.y,M.z),y.push(0,0,1),S.x=(_[v]/a+1)/2,S.y=(_[v+1]/a+1)/2,x.push(S.x,S.y)}for(let E=1;E<=h;E++)g.push(E,E+1,0);this.setIndex(g),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(x,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new qs(a.radius,a.segments,a.thetaStart,a.thetaLength)}}class ni extends We{constructor(a=1,h=1,p=1,m=32,g=1,_=!1,y=0,x=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:a,radiusBottom:h,height:p,radialSegments:m,heightSegments:g,openEnded:_,thetaStart:y,thetaLength:x};let M=this;m=Math.floor(m),g=Math.floor(g);let S=[],E=[],v=[],b=[],A=0,P=[],I=p/2,T=0;if(w(),_===!1){if(a>0)W(!0);if(h>0)W(!1)}this.setIndex(S),this.setAttribute("position",new ve(E,3)),this.setAttribute("normal",new ve(v,3)),this.setAttribute("uv",new ve(b,2));function w(){let F=new q,k=new q,rt=0,X=(h-a)/p;for(let Y=0;Y<=g;Y++){let lt=[],O=Y/g,B=O*(h-a)+a;for(let Q=0;Q<=m;Q++){let at=Q/m,ot=at*x+y,ct=Math.sin(ot),dt=Math.cos(ot);k.x=B*ct,k.y=-O*p+I,k.z=B*dt,E.push(k.x,k.y,k.z),F.set(ct,X,dt).normalize(),v.push(F.x,F.y,F.z),b.push(at,1-O),lt.push(A++)}P.push(lt)}for(let Y=0;Y<m;Y++)for(let lt=0;lt<g;lt++){let O=P[lt][Y],B=P[lt+1][Y],Q=P[lt+1][Y+1],at=P[lt][Y+1];if(a>0||lt!==0)S.push(O,B,at),rt+=3;if(h>0||lt!==g-1)S.push(B,Q,at),rt+=3}M.addGroup(T,rt,0),T+=rt}function W(F){let k=A,rt=new Et,X=new q,Y=0,lt=F===!0?a:h,O=F===!0?1:-1;for(let Q=1;Q<=m;Q++)E.push(0,I*O,0),v.push(0,O,0),b.push(0.5,0.5),A++;let B=A;for(let Q=0;Q<=m;Q++){let ot=Q/m*x+y,ct=Math.cos(ot),dt=Math.sin(ot);X.x=lt*dt,X.y=I*O,X.z=lt*ct,E.push(X.x,X.y,X.z),v.push(0,O,0),rt.x=ct*0.5+0.5,rt.y=dt*0.5*O+0.5,b.push(rt.x,rt.y),A++}for(let Q=0;Q<m;Q++){let at=k+Q,ot=B+Q;if(F===!0)S.push(ot,ot+1,at);else S.push(ot+1,ot,at);Y+=3}M.addGroup(T,Y,F===!0?1:2),T+=Y}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new ni(a.radiusTop,a.radiusBottom,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength)}}class Ys extends ni{constructor(a=1,h=1,p=32,m=1,g=!1,_=0,y=Math.PI*2){super(0,a,h,p,m,g,_,y);this.type="ConeGeometry",this.parameters={radius:a,height:h,radialSegments:p,heightSegments:m,openEnded:g,thetaStart:_,thetaLength:y}}static fromJSON(a){return new Ys(a.radius,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength)}}var Is=new q,Ds=new q,Lr=new q,Ls=new en;class aa extends We{constructor(a=null,h=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:a,thresholdAngle:h},a!==null){let m=Math.pow(10,4),g=Math.cos(Si*h),_=a.getIndex(),y=a.getAttribute("position"),x=_?_.count:y.count,M=[0,0,0],S=["a","b","c"],E=[,,,],v={},b=[];for(let A=0;A<x;A+=3){if(_)M[0]=_.getX(A),M[1]=_.getX(A+1),M[2]=_.getX(A+2);else M[0]=A,M[1]=A+1,M[2]=A+2;let{a:P,b:I,c:T}=Ls;if(P.fromBufferAttribute(y,M[0]),I.fromBufferAttribute(y,M[1]),T.fromBufferAttribute(y,M[2]),Ls.getNormal(Lr),E[0]=`${Math.round(P.x*m)},${Math.round(P.y*m)},${Math.round(P.z*m)}`,E[1]=`${Math.round(I.x*m)},${Math.round(I.y*m)},${Math.round(I.z*m)}`,E[2]=`${Math.round(T.x*m)},${Math.round(T.y*m)},${Math.round(T.z*m)}`,E[0]===E[1]||E[1]===E[2]||E[2]===E[0])continue;for(let w=0;w<3;w++){let W=(w+1)%3,F=E[w],k=E[W],rt=Ls[S[w]],X=Ls[S[W]],Y=`${F}_${k}`,lt=`${k}_${F}`;if(lt in v&&v[lt]){if(Lr.dot(v[lt].normal)<=g)b.push(rt.x,rt.y,rt.z),b.push(X.x,X.y,X.z);v[lt]=null}else if(!(Y in v))v[Y]={index0:M[w],index1:M[W],normal:Lr.clone()}}}for(let A in v)if(v[A]){let{index0:P,index1:I}=v[A];Is.fromBufferAttribute(y,P),Ds.fromBufferAttribute(y,I),b.push(Is.x,Is.y,Is.z),b.push(Ds.x,Ds.y,Ds.z)}this.setAttribute("position",new ve(b,3))}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}}class rs extends Br{constructor(a){super(a);this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(a){let h=[];for(let p=0,m=this.holes.length;p<m;p++)h[p]=this.holes[p].getPoints(a);return h}extractPoints(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}}copy(a){super.copy(a),this.holes=[];for(let h=0,p=a.holes.length;h<p;h++){let m=a.holes[h];this.holes.push(m.clone())}return this}toJSON(){let a=super.toJSON();a.uuid=this.uuid,a.holes=[];for(let h=0,p=this.holes.length;h<p;h++){let m=this.holes[h];a.holes.push(m.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.uuid=a.uuid,this.holes=[];for(let h=0,p=a.holes.length;h<p;h++){let m=a.holes[h];this.holes.push(new Br().fromJSON(m))}return this}}var jf={triangulate:function(a,h,p=2){let m=h&&h.length,g=m?h[0]*p:a.length,_=hl(a,0,g,p,!0),y=[];if(!_||_.next===_.prev)return y;let x,M,S,E,v,b,A;if(m)_=ip(a,h,_,p);if(a.length>80*p){x=S=a[0],M=E=a[1];for(let P=p;P<g;P+=p){if(v=a[P],b=a[P+1],v<x)x=v;if(b<M)M=b;if(v>S)S=v;if(b>E)E=b}A=Math.max(S-x,E-M),A=A!==0?32767/A:0}return Ki(_,y,p,x,M,A,0),y}};function hl(a,h,p,m,g){let _,y;if(g===pp(a,h,p,m)>0)for(_=h;_<p;_+=m)y=So(_,a[_],a[_+1],y);else for(_=p-m;_>=h;_-=m)y=So(_,a[_],a[_+1],y);if(y&&Zs(y,y.next))Qi(y),y=y.next;return y}function ti(a,h){if(!a)return a;if(!h)h=a;let p=a,m;do if(m=!1,!p.steiner&&(Zs(p,p.next)||Re(p.prev,p,p.next)===0)){if(Qi(p),p=h=p.prev,p===p.next)break;m=!0}else p=p.next;while(m||p!==h);return h}function Ki(a,h,p,m,g,_,y){if(!a)return;if(!y&&_)lp(a,m,g,_);let x=a,M,S;while(a.prev!==a.next){if(M=a.prev,S=a.next,_?tp(a,m,g,_):Qf(a)){h.push(M.i/p|0),h.push(a.i/p|0),h.push(S.i/p|0),Qi(a),a=S.next,x=S.next;continue}if(a=S,a===x){if(!y)Ki(ti(a),h,p,m,g,_,1);else if(y===1)a=ep(ti(a),h,p),Ki(a,h,p,m,g,_,2);else if(y===2)np(a,h,p,m,g,_);break}}}function Qf(a){let h=a.prev,p=a,m=a.next;if(Re(h,p,m)>=0)return!1;let g=h.x,_=p.x,y=m.x,x=h.y,M=p.y,S=m.y,E=g<_?g<y?g:y:_<y?_:y,v=x<M?x<S?x:S:M<S?M:S,b=g>_?g>y?g:y:_>y?_:y,A=x>M?x>S?x:S:M>S?M:S,P=m.next;while(P!==h){if(P.x>=E&&P.x<=b&&P.y>=v&&P.y<=A&&Mi(g,x,_,M,y,S,P.x,P.y)&&Re(P.prev,P,P.next)>=0)return!1;P=P.next}return!0}function tp(a,h,p,m){let g=a.prev,_=a,y=a.next;if(Re(g,_,y)>=0)return!1;let x=g.x,M=_.x,S=y.x,E=g.y,v=_.y,b=y.y,A=x<M?x<S?x:S:M<S?M:S,P=E<v?E<b?E:b:v<b?v:b,I=x>M?x>S?x:S:M>S?M:S,T=E>v?E>b?E:b:v>b?v:b,w=zr(A,P,h,p,m),W=zr(I,T,h,p,m),{prevZ:F,nextZ:k}=a;while(F&&F.z>=w&&k&&k.z<=W){if(F.x>=A&&F.x<=I&&F.y>=P&&F.y<=T&&F!==g&&F!==y&&Mi(x,E,M,v,S,b,F.x,F.y)&&Re(F.prev,F,F.next)>=0)return!1;if(F=F.prevZ,k.x>=A&&k.x<=I&&k.y>=P&&k.y<=T&&k!==g&&k!==y&&Mi(x,E,M,v,S,b,k.x,k.y)&&Re(k.prev,k,k.next)>=0)return!1;k=k.nextZ}while(F&&F.z>=w){if(F.x>=A&&F.x<=I&&F.y>=P&&F.y<=T&&F!==g&&F!==y&&Mi(x,E,M,v,S,b,F.x,F.y)&&Re(F.prev,F,F.next)>=0)return!1;F=F.prevZ}while(k&&k.z<=W){if(k.x>=A&&k.x<=I&&k.y>=P&&k.y<=T&&k!==g&&k!==y&&Mi(x,E,M,v,S,b,k.x,k.y)&&Re(k.prev,k,k.next)>=0)return!1;k=k.nextZ}return!0}function ep(a,h,p){let m=a;do{let g=m.prev,_=m.next.next;if(!Zs(g,_)&&ul(g,m,m.next,_)&&ji(g,_)&&ji(_,g))h.push(g.i/p|0),h.push(m.i/p|0),h.push(_.i/p|0),Qi(m),Qi(m.next),m=a=_;m=m.next}while(m!==a);return ti(m)}function np(a,h,p,m,g,_){let y=a;do{let x=y.next.next;while(x!==y.prev){if(y.i!==x.i&&up(y,x)){let M=dl(y,x);y=ti(y,y.next),M=ti(M,M.next),Ki(y,h,p,m,g,_,0),Ki(M,h,p,m,g,_,0);return}x=x.next}y=y.next}while(y!==a)}function ip(a,h,p,m){let g=[],_,y,x,M,S;for(_=0,y=h.length;_<y;_++){if(x=h[_]*m,M=_<y-1?h[_+1]*m:a.length,S=hl(a,x,M,m,!1),S===S.next)S.steiner=!0;g.push(hp(S))}g.sort(sp);for(_=0;_<g.length;_++)p=rp(g[_],p);return p}function sp(a,h){return a.x-h.x}function rp(a,h){let p=ap(a,h);if(!p)return h;let m=dl(p,a);return ti(m,m.next),ti(p,p.next)}function ap(a,h){let p=h,m=-1/0,g,{x:_,y}=a;do{if(y<=p.y&&y>=p.next.y&&p.next.y!==p.y){let b=p.x+(y-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(b<=_&&b>m){if(m=b,g=p.x<p.next.x?p:p.next,b===_)return g}}p=p.next}while(p!==h);if(!g)return null;let x=g,M=g.x,S=g.y,E=1/0,v;p=g;do{if(_>=p.x&&p.x>=M&&_!==p.x&&Mi(y<S?_:m,y,M,S,y<S?m:_,y,p.x,p.y)){if(v=Math.abs(y-p.y)/(_-p.x),ji(p,a)&&(v<E||v===E&&(p.x>g.x||p.x===g.x&&op(g,p))))g=p,E=v}p=p.next}while(p!==x);return g}function op(a,h){return Re(a.prev,a,h.prev)<0&&Re(h.next,a,a.next)<0}function lp(a,h,p,m){let g=a;do{if(g.z===0)g.z=zr(g.x,g.y,h,p,m);g.prevZ=g.prev,g.nextZ=g.next,g=g.next}while(g!==a);g.prevZ.nextZ=null,g.prevZ=null,cp(g)}function cp(a){let h,p,m,g,_,y,x,M,S=1;do{p=a,a=null,_=null,y=0;while(p){y++,m=p,x=0;for(h=0;h<S;h++)if(x++,m=m.nextZ,!m)break;M=S;while(x>0||M>0&&m){if(x!==0&&(M===0||!m||p.z<=m.z))g=p,p=p.nextZ,x--;else g=m,m=m.nextZ,M--;if(_)_.nextZ=g;else a=g;g.prevZ=_,_=g}p=m}_.nextZ=null,S*=2}while(y>1);return a}function zr(a,h,p,m,g){return a=(a-p)*g|0,h=(h-m)*g|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,h=(h|h<<8)&16711935,h=(h|h<<4)&252645135,h=(h|h<<2)&858993459,h=(h|h<<1)&1431655765,a|h<<1}function hp(a){let h=a,p=a;do{if(h.x<p.x||h.x===p.x&&h.y<p.y)p=h;h=h.next}while(h!==a);return p}function Mi(a,h,p,m,g,_,y,x){return(g-y)*(h-x)>=(a-y)*(_-x)&&(a-y)*(m-x)>=(p-y)*(h-x)&&(p-y)*(_-x)>=(g-y)*(m-x)}function up(a,h){return a.next.i!==h.i&&a.prev.i!==h.i&&!dp(a,h)&&(ji(a,h)&&ji(h,a)&&fp(a,h)&&(Re(a.prev,a,h.prev)||Re(a,h.prev,h))||Zs(a,h)&&Re(a.prev,a,a.next)>0&&Re(h.prev,h,h.next)>0)}function Re(a,h,p){return(h.y-a.y)*(p.x-h.x)-(h.x-a.x)*(p.y-h.y)}function Zs(a,h){return a.x===h.x&&a.y===h.y}function ul(a,h,p,m){let g=Ns(Re(a,h,p)),_=Ns(Re(a,h,m)),y=Ns(Re(p,m,a)),x=Ns(Re(p,m,h));if(g!==_&&y!==x)return!0;if(g===0&&Us(a,p,h))return!0;if(_===0&&Us(a,m,h))return!0;if(y===0&&Us(p,a,m))return!0;if(x===0&&Us(p,h,m))return!0;return!1}function Us(a,h,p){return h.x<=Math.max(a.x,p.x)&&h.x>=Math.min(a.x,p.x)&&h.y<=Math.max(a.y,p.y)&&h.y>=Math.min(a.y,p.y)}function Ns(a){return a>0?1:a<0?-1:0}function dp(a,h){let p=a;do{if(p.i!==a.i&&p.next.i!==a.i&&p.i!==h.i&&p.next.i!==h.i&&ul(p,p.next,a,h))return!0;p=p.next}while(p!==a);return!1}function ji(a,h){return Re(a.prev,a,a.next)<0?Re(a,h,a.next)>=0&&Re(a,a.prev,h)>=0:Re(a,h,a.prev)<0||Re(a,a.next,h)<0}function fp(a,h){let p=a,m=!1,g=(a.x+h.x)/2,_=(a.y+h.y)/2;do{if(p.y>_!==p.next.y>_&&p.next.y!==p.y&&g<(p.next.x-p.x)*(_-p.y)/(p.next.y-p.y)+p.x)m=!m;p=p.next}while(p!==a);return m}function dl(a,h){let p=new Hr(a.i,a.x,a.y),m=new Hr(h.i,h.x,h.y),g=a.next,_=h.prev;return a.next=h,h.prev=a,p.next=g,g.prev=p,m.next=p,p.prev=m,_.next=m,m.prev=_,m}function So(a,h,p,m){let g=new Hr(a,h,p);if(!m)g.prev=g,g.next=g;else g.next=m.next,g.prev=m,m.next.prev=g,m.next=g;return g}function Qi(a){if(a.next.prev=a.prev,a.prev.next=a.next,a.prevZ)a.prevZ.nextZ=a.nextZ;if(a.nextZ)a.nextZ.prevZ=a.prevZ}function Hr(a,h,p){this.i=a,this.x=h,this.y=p,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pp(a,h,p,m){let g=0;for(let _=h,y=p-m;_<p;_+=m)g+=(a[y]-a[_])*(a[_+1]+a[y+1]),y=_;return g}class Bn{static area(a){let h=a.length,p=0;for(let m=h-1,g=0;g<h;m=g++)p+=a[m].x*a[g].y-a[g].x*a[m].y;return p*0.5}static isClockWise(a){return Bn.area(a)<0}static triangulateShape(a,h){let p=[],m=[],g=[];Eo(a),bo(p,a);let _=a.length;h.forEach(Eo);for(let x=0;x<h.length;x++)m.push(_),_+=h[x].length,bo(p,h[x]);let y=jf.triangulate(p,m);for(let x=0;x<y.length;x+=3)g.push(y.slice(x,x+3));return g}}function Eo(a){let h=a.length;if(h>2&&a[h-1].equals(a[0]))a.pop()}function bo(a,h){for(let p=0;p<h.length;p++)a.push(h[p].x),a.push(h[p].y)}class Js extends We{constructor(a=new rs([new Et(0.5,0.5),new Et(-0.5,0.5),new Et(-0.5,-0.5),new Et(0.5,-0.5)]),h={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:a,options:h},a=Array.isArray(a)?a:[a];let p=this,m=[],g=[];for(let y=0,x=a.length;y<x;y++){let M=a[y];_(M)}this.setAttribute("position",new ve(m,3)),this.setAttribute("uv",new ve(g,2)),this.computeVertexNormals();function _(y){let x=[],M=h.curveSegments!==void 0?h.curveSegments:12,S=h.steps!==void 0?h.steps:1,E=h.depth!==void 0?h.depth:1,v=h.bevelEnabled!==void 0?h.bevelEnabled:!0,b=h.bevelThickness!==void 0?h.bevelThickness:0.2,A=h.bevelSize!==void 0?h.bevelSize:b-0.1,P=h.bevelOffset!==void 0?h.bevelOffset:0,I=h.bevelSegments!==void 0?h.bevelSegments:3,T=h.extrudePath,w=h.UVGenerator!==void 0?h.UVGenerator:mp,W,F=!1,k,rt,X,Y;if(T)W=T.getSpacedPoints(S),F=!0,v=!1,k=T.computeFrenetFrames(S,!1),rt=new q,X=new q,Y=new q;if(!v)I=0,b=0,A=0,P=0;let lt=y.extractPoints(M),{shape:O,holes:B}=lt;if(!Bn.isClockWise(O)){O=O.reverse();for(let _t=0,Tt=B.length;_t<Tt;_t++){let V=B[_t];if(Bn.isClockWise(V))B[_t]=V.reverse()}}let at=Bn.triangulateShape(O,B),ot=O;for(let _t=0,Tt=B.length;_t<Tt;_t++){let V=B[_t];O=O.concat(V)}function ct(_t,Tt,V){if(!Tt)console.error("THREE.ExtrudeGeometry: vec does not exist");return _t.clone().addScaledVector(Tt,V)}let dt=O.length,K=at.length;function st(_t,Tt,V){let zt,wt,Gt,St=_t.x-Tt.x,Qt=_t.y-Tt.y,Bt=V.x-_t.x,Wt=V.y-_t.y,G=St*St+Qt*Qt,L=St*Wt-Qt*Bt;if(Math.abs(L)>Number.EPSILON){let it=Math.sqrt(G),pt=Math.sqrt(Bt*Bt+Wt*Wt),yt=Tt.x-Qt/it,ht=Tt.y+St/it,Zt=V.x-Wt/pt,Pt=V.y+Bt/pt,Nt=((Zt-yt)*Wt-(Pt-ht)*Bt)/(St*Wt-Qt*Bt);zt=yt+St*Nt-_t.x,wt=ht+Qt*Nt-_t.y;let ee=zt*zt+wt*wt;if(ee<=2)return new Et(zt,wt);else Gt=Math.sqrt(ee/2)}else{let it=!1;if(St>Number.EPSILON){if(Bt>Number.EPSILON)it=!0}else if(St<-Number.EPSILON){if(Bt<-Number.EPSILON)it=!0}else if(Math.sign(Qt)===Math.sign(Wt))it=!0;if(it)zt=-Qt,wt=St,Gt=Math.sqrt(G);else zt=St,wt=Qt,Gt=Math.sqrt(G/2)}return new Et(zt/Gt,wt/Gt)}let Z=[];for(let _t=0,Tt=ot.length,V=Tt-1,zt=_t+1;_t<Tt;_t++,V++,zt++){if(V===Tt)V=0;if(zt===Tt)zt=0;Z[_t]=st(ot[_t],ot[V],ot[zt])}let Rt=[],U,Vt=Z.concat();for(let _t=0,Tt=B.length;_t<Tt;_t++){let V=B[_t];U=[];for(let zt=0,wt=V.length,Gt=wt-1,St=zt+1;zt<wt;zt++,Gt++,St++){if(Gt===wt)Gt=0;if(St===wt)St=0;U[zt]=st(V[zt],V[Gt],V[St])}Rt.push(U),Vt=Vt.concat(U)}for(let _t=0;_t<I;_t++){let Tt=_t/I,V=b*Math.cos(Tt*Math.PI/2),zt=A*Math.sin(Tt*Math.PI/2)+P;for(let wt=0,Gt=ot.length;wt<Gt;wt++){let St=ct(ot[wt],Z[wt],zt);kt(St.x,St.y,-V)}for(let wt=0,Gt=B.length;wt<Gt;wt++){let St=B[wt];U=Rt[wt];for(let Qt=0,Bt=St.length;Qt<Bt;Qt++){let Wt=ct(St[Qt],U[Qt],zt);kt(Wt.x,Wt.y,-V)}}}let $t=A+P;for(let _t=0;_t<dt;_t++){let Tt=v?ct(O[_t],Vt[_t],$t):O[_t];if(!F)kt(Tt.x,Tt.y,0);else X.copy(k.normals[0]).multiplyScalar(Tt.x),rt.copy(k.binormals[0]).multiplyScalar(Tt.y),Y.copy(W[0]).add(X).add(rt),kt(Y.x,Y.y,Y.z)}for(let _t=1;_t<=S;_t++)for(let Tt=0;Tt<dt;Tt++){let V=v?ct(O[Tt],Vt[Tt],$t):O[Tt];if(!F)kt(V.x,V.y,E/S*_t);else X.copy(k.normals[_t]).multiplyScalar(V.x),rt.copy(k.binormals[_t]).multiplyScalar(V.y),Y.copy(W[_t]).add(X).add(rt),kt(Y.x,Y.y,Y.z)}for(let _t=I-1;_t>=0;_t--){let Tt=_t/I,V=b*Math.cos(Tt*Math.PI/2),zt=A*Math.sin(Tt*Math.PI/2)+P;for(let wt=0,Gt=ot.length;wt<Gt;wt++){let St=ct(ot[wt],Z[wt],zt);kt(St.x,St.y,E+V)}for(let wt=0,Gt=B.length;wt<Gt;wt++){let St=B[wt];U=Rt[wt];for(let Qt=0,Bt=St.length;Qt<Bt;Qt++){let Wt=ct(St[Qt],U[Qt],zt);if(!F)kt(Wt.x,Wt.y,E+V);else kt(Wt.x,Wt.y+W[S-1].y,W[S-1].x+V)}}}ut(),bt();function ut(){let _t=m.length/3;if(v){let Tt=0,V=dt*Tt;for(let zt=0;zt<K;zt++){let wt=at[zt];Ct(wt[2]+V,wt[1]+V,wt[0]+V)}Tt=S+I*2,V=dt*Tt;for(let zt=0;zt<K;zt++){let wt=at[zt];Ct(wt[0]+V,wt[1]+V,wt[2]+V)}}else{for(let Tt=0;Tt<K;Tt++){let V=at[Tt];Ct(V[2],V[1],V[0])}for(let Tt=0;Tt<K;Tt++){let V=at[Tt];Ct(V[0]+dt*S,V[1]+dt*S,V[2]+dt*S)}}p.addGroup(_t,m.length/3-_t,0)}function bt(){let _t=m.length/3,Tt=0;qt(ot,Tt),Tt+=ot.length;for(let V=0,zt=B.length;V<zt;V++){let wt=B[V];qt(wt,Tt),Tt+=wt.length}p.addGroup(_t,m.length/3-_t,1)}function qt(_t,Tt){let V=_t.length;while(--V>=0){let zt=V,wt=V-1;if(wt<0)wt=_t.length-1;for(let Gt=0,St=S+I*2;Gt<St;Gt++){let Qt=dt*Gt,Bt=dt*(Gt+1),Wt=Tt+zt+Qt,G=Tt+wt+Qt,L=Tt+wt+Bt,it=Tt+zt+Bt;jt(Wt,G,L,it)}}}function kt(_t,Tt,V){x.push(_t),x.push(Tt),x.push(V)}function Ct(_t,Tt,V){ae(_t),ae(Tt),ae(V);let zt=m.length/3,wt=w.generateTopUV(p,m,zt-3,zt-2,zt-1);Kt(wt[0]),Kt(wt[1]),Kt(wt[2])}function jt(_t,Tt,V,zt){ae(_t),ae(Tt),ae(zt),ae(Tt),ae(V),ae(zt);let wt=m.length/3,Gt=w.generateSideWallUV(p,m,wt-6,wt-3,wt-2,wt-1);Kt(Gt[0]),Kt(Gt[1]),Kt(Gt[3]),Kt(Gt[1]),Kt(Gt[2]),Kt(Gt[3])}function ae(_t){m.push(x[_t*3+0]),m.push(x[_t*3+1]),m.push(x[_t*3+2])}function Kt(_t){g.push(_t.x),g.push(_t.y)}}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}toJSON(){let a=super.toJSON(),h=this.parameters.shapes,p=this.parameters.options;return gp(h,p,a)}static fromJSON(a,h){let p=[];for(let g=0,_=a.shapes.length;g<_;g++){let y=h[a.shapes[g]];p.push(y)}let m=a.options.extrudePath;if(m!==void 0)a.options.extrudePath=new Or[m.type]().fromJSON(m);return new Js(p,a.options)}}var mp={generateTopUV:function(a,h,p,m,g){let _=h[p*3],y=h[p*3+1],x=h[m*3],M=h[m*3+1],S=h[g*3],E=h[g*3+1];return[new Et(_,y),new Et(x,M),new Et(S,E)]},generateSideWallUV:function(a,h,p,m,g,_){let y=h[p*3],x=h[p*3+1],M=h[p*3+2],S=h[m*3],E=h[m*3+1],v=h[m*3+2],b=h[g*3],A=h[g*3+1],P=h[g*3+2],I=h[_*3],T=h[_*3+1],w=h[_*3+2];if(Math.abs(x-E)<Math.abs(y-S))return[new Et(y,1-M),new Et(S,1-v),new Et(b,1-P),new Et(I,1-w)];else return[new Et(x,1-M),new Et(E,1-v),new Et(A,1-P),new Et(T,1-w)]}};function gp(a,h,p){if(p.shapes=[],Array.isArray(a))for(let m=0,g=a.length;m<g;m++){let _=a[m];p.shapes.push(_.uuid)}else p.shapes.push(a.uuid);if(p.options=Object.assign({},h),h.extrudePath!==void 0)p.options.extrudePath=h.extrudePath.toJSON();return p}class $s extends We{constructor(a=new rs([new Et(0,0.5),new Et(-0.5,-0.5),new Et(0.5,-0.5)]),h=12){super();this.type="ShapeGeometry",this.parameters={shapes:a,curveSegments:h};let p=[],m=[],g=[],_=[],y=0,x=0;if(Array.isArray(a)===!1)M(a);else for(let S=0;S<a.length;S++)M(a[S]),this.addGroup(y,x,S),y+=x,x=0;this.setIndex(p),this.setAttribute("position",new ve(m,3)),this.setAttribute("normal",new ve(g,3)),this.setAttribute("uv",new ve(_,2));function M(S){let E=m.length/3,v=S.extractPoints(h),{shape:b,holes:A}=v;if(Bn.isClockWise(b)===!1)b=b.reverse();for(let I=0,T=A.length;I<T;I++){let w=A[I];if(Bn.isClockWise(w)===!0)A[I]=w.reverse()}let P=Bn.triangulateShape(b,A);for(let I=0,T=A.length;I<T;I++){let w=A[I];b=b.concat(w)}for(let I=0,T=b.length;I<T;I++){let w=b[I];m.push(w.x,w.y,0),g.push(0,0,1),_.push(w.x,w.y)}for(let I=0,T=P.length;I<T;I++){let w=P[I],W=w[0]+E,F=w[1]+E,k=w[2]+E;p.push(W,F,k),x+=3}}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}toJSON(){let a=super.toJSON(),h=this.parameters.shapes;return _p(h,a)}static fromJSON(a,h){let p=[];for(let m=0,g=a.shapes.length;m<g;m++){let _=h[a.shapes[m]];p.push(_)}return new $s(p,a.curveSegments)}}function _p(a,h){if(h.shapes=[],Array.isArray(a))for(let p=0,m=a.length;p<m;p++){let g=a[p];h.shapes.push(g.uuid)}else h.shapes.push(a.uuid);return h}class Ks extends We{constructor(a=1,h=32,p=16,m=0,g=Math.PI*2,_=0,y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:a,widthSegments:h,heightSegments:p,phiStart:m,phiLength:g,thetaStart:_,thetaLength:y},h=Math.max(3,Math.floor(h)),p=Math.max(2,Math.floor(p));let x=Math.min(_+y,Math.PI),M=0,S=[],E=new q,v=new q,b=[],A=[],P=[],I=[];for(let T=0;T<=p;T++){let w=[],W=T/p,F=0;if(T===0&&_===0)F=0.5/h;else if(T===p&&x===Math.PI)F=-0.5/h;for(let k=0;k<=h;k++){let rt=k/h;E.x=-a*Math.cos(m+rt*g)*Math.sin(_+W*y),E.y=a*Math.cos(_+W*y),E.z=a*Math.sin(m+rt*g)*Math.sin(_+W*y),A.push(E.x,E.y,E.z),v.copy(E).normalize(),P.push(v.x,v.y,v.z),I.push(rt+F,1-W),w.push(M++)}S.push(w)}for(let T=0;T<p;T++)for(let w=0;w<h;w++){let W=S[T][w+1],F=S[T][w],k=S[T+1][w],rt=S[T+1][w+1];if(T!==0||_>0)b.push(W,F,rt);if(T!==p-1||x<Math.PI)b.push(F,k,rt)}this.setIndex(b),this.setAttribute("position",new ve(A,3)),this.setAttribute("normal",new ve(P,3)),this.setAttribute("uv",new ve(I,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new Ks(a.radius,a.widthSegments,a.heightSegments,a.phiStart,a.phiLength,a.thetaStart,a.thetaLength)}}class Wn extends We{constructor(a=1,h=0.4,p=12,m=48,g=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:a,tube:h,radialSegments:p,tubularSegments:m,arc:g},p=Math.floor(p),m=Math.floor(m);let _=[],y=[],x=[],M=[],S=new q,E=new q,v=new q;for(let b=0;b<=p;b++)for(let A=0;A<=m;A++){let P=A/m*g,I=b/p*Math.PI*2;E.x=(a+h*Math.cos(I))*Math.cos(P),E.y=(a+h*Math.cos(I))*Math.sin(P),E.z=h*Math.sin(I),y.push(E.x,E.y,E.z),S.x=a*Math.cos(P),S.y=a*Math.sin(P),v.subVectors(E,S).normalize(),x.push(v.x,v.y,v.z),M.push(A/m),M.push(b/p)}for(let b=1;b<=p;b++)for(let A=1;A<=m;A++){let P=(m+1)*b+A-1,I=(m+1)*(b-1)+A-1,T=(m+1)*(b-1)+A,w=(m+1)*b+A;_.push(P,I,w),_.push(I,T,w)}this.setIndex(_),this.setAttribute("position",new ve(y,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(M,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new Wn(a.radius,a.tube,a.radialSegments,a.tubularSegments,a.arc)}}class oa extends Gn{static get type(){return"ShadowMaterial"}constructor(a){super();this.isShadowMaterial=!0,this.color=new ue(0),this.transparent=!0,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.fog=a.fog,this}}class Vn extends Gn{static get type(){return"MeshStandardMaterial"}constructor(a){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.defines={STANDARD:""},this.color.copy(a.color),this.roughness=a.roughness,this.metalness=a.metalness,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.roughnessMap=a.roughnessMap,this.metalnessMap=a.metalnessMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.envMapIntensity=a.envMapIntensity,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}class la extends Vn{static get type(){return"MeshPhysicalMaterial"}constructor(a){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(h){this.ior=(1+0.4*h)/(1-0.4*h)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(a)}get anisotropy(){return this._anisotropy}set anisotropy(a){if(this._anisotropy>0!==a>0)this.version++;this._anisotropy=a}get clearcoat(){return this._clearcoat}set clearcoat(a){if(this._clearcoat>0!==a>0)this.version++;this._clearcoat=a}get iridescence(){return this._iridescence}set iridescence(a){if(this._iridescence>0!==a>0)this.version++;this._iridescence=a}get dispersion(){return this._dispersion}set dispersion(a){if(this._dispersion>0!==a>0)this.version++;this._dispersion=a}get sheen(){return this._sheen}set sheen(a){if(this._sheen>0!==a>0)this.version++;this._sheen=a}get transmission(){return this._transmission}set transmission(a){if(this._transmission>0!==a>0)this.version++;this._transmission=a}copy(a){return super.copy(a),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=a.anisotropy,this.anisotropyRotation=a.anisotropyRotation,this.anisotropyMap=a.anisotropyMap,this.clearcoat=a.clearcoat,this.clearcoatMap=a.clearcoatMap,this.clearcoatRoughness=a.clearcoatRoughness,this.clearcoatRoughnessMap=a.clearcoatRoughnessMap,this.clearcoatNormalMap=a.clearcoatNormalMap,this.clearcoatNormalScale.copy(a.clearcoatNormalScale),this.dispersion=a.dispersion,this.ior=a.ior,this.iridescence=a.iridescence,this.iridescenceMap=a.iridescenceMap,this.iridescenceIOR=a.iridescenceIOR,this.iridescenceThicknessRange=[...a.iridescenceThicknessRange],this.iridescenceThicknessMap=a.iridescenceThicknessMap,this.sheen=a.sheen,this.sheenColor.copy(a.sheenColor),this.sheenColorMap=a.sheenColorMap,this.sheenRoughness=a.sheenRoughness,this.sheenRoughnessMap=a.sheenRoughnessMap,this.transmission=a.transmission,this.transmissionMap=a.transmissionMap,this.thickness=a.thickness,this.thicknessMap=a.thicknessMap,this.attenuationDistance=a.attenuationDistance,this.attenuationColor.copy(a.attenuationColor),this.specularIntensity=a.specularIntensity,this.specularIntensityMap=a.specularIntensityMap,this.specularColor.copy(a.specularColor),this.specularColorMap=a.specularColorMap,this}}function Fs(a,h,p){if(!a||!p&&a.constructor===h)return a;if(typeof h.BYTES_PER_ELEMENT==="number")return new h(a);return Array.prototype.slice.call(a)}function xp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}class as{constructor(a,h,p,m){this.parameterPositions=a,this._cachedIndex=0,this.resultBuffer=m!==void 0?m:new h.constructor(p),this.sampleValues=h,this.valueSize=p,this.settings=null,this.DefaultSettings_={}}evaluate(a){let h=this.parameterPositions,p=this._cachedIndex,m=h[p],g=h[p-1];n:{t:{let _;e:{i:if(!(a<m)){for(let y=p+2;;){if(m===void 0){if(a<g)break i;return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}if(p===y)break;if(g=m,m=h[++p],a<m)break t}_=h.length;break e}if(!(a>=g)){let y=h[1];if(a<y)p=2,g=y;for(let x=p-2;;){if(g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(p===x)break;if(m=g,g=h[--p-1],a>=g)break t}_=p,p=0;break e}break n}while(p<_){let y=p+_>>>1;if(a<h[y])_=y;else p=y+1}if(m=h[p],g=h[p-1],g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(m===void 0)return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}this._cachedIndex=p,this.intervalChanged_(p,g,m)}return this.interpolate_(p,g,a,m)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(a){let h=this.resultBuffer,p=this.sampleValues,m=this.valueSize,g=a*m;for(let _=0;_!==m;++_)h[_]=p[g+_];return h}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class fl extends as{constructor(a,h,p,m){super(a,h,p,m);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(a,h,p){let m=this.parameterPositions,g=a-2,_=a+1,y=m[g],x=m[_];if(y===void 0)switch(this.getSettings_().endingStart){case 2401:g=a,y=2*h-p;break;case 2402:g=m.length-2,y=h+m[g]-m[g+1];break;default:g=a,y=p}if(x===void 0)switch(this.getSettings_().endingEnd){case 2401:_=a,x=2*p-h;break;case 2402:_=1,x=p+m[1]-m[0];break;default:_=a-1,x=h}let M=(p-h)*0.5,S=this.valueSize;this._weightPrev=M/(h-y),this._weightNext=M/(x-p),this._offsetPrev=g*S,this._offsetNext=_*S}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=a*y,M=x-y,S=this._offsetPrev,E=this._offsetNext,v=this._weightPrev,b=this._weightNext,A=(p-h)/(m-h),P=A*A,I=P*A,T=-v*I+2*v*P-v*A,w=(1+v)*I+(-1.5-2*v)*P+(-0.5+v)*A+1,W=(-1-b)*I+(1.5+b)*P+0.5*A,F=b*I-b*P;for(let k=0;k!==y;++k)g[k]=T*_[S+k]+w*_[M+k]+W*_[x+k]+F*_[E+k];return g}}class pl extends as{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=a*y,M=x-y,S=(p-h)/(m-h),E=1-S;for(let v=0;v!==y;++v)g[v]=_[M+v]*E+_[x+v]*S;return g}}class ml extends as{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a){return this.copySampleValue_(a-1)}}class vn{constructor(a,h,p,m){if(a===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(h===void 0||h.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a,this.times=Fs(h,this.TimeBufferType),this.values=Fs(p,this.ValueBufferType),this.setInterpolation(m||this.DefaultInterpolation)}static toJSON(a){let h=a.constructor,p;if(h.toJSON!==this.toJSON)p=h.toJSON(a);else{p={name:a.name,times:Fs(a.times,Array),values:Fs(a.values,Array)};let m=a.getInterpolation();if(m!==a.DefaultInterpolation)p.interpolation=m}return p.type=a.ValueTypeName,p}InterpolantFactoryMethodDiscrete(a){return new ml(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodLinear(a){return new pl(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodSmooth(a){return new fl(this.times,this.values,this.getValueSize(),a)}setInterpolation(a){let h;switch(a){case 2300:h=this.InterpolantFactoryMethodDiscrete;break;case 2301:h=this.InterpolantFactoryMethodLinear;break;case 2302:h=this.InterpolantFactoryMethodSmooth;break}if(h===void 0){let p="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(p);return console.warn("THREE.KeyframeTrack:",p),this}return this.createInterpolant=h,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(a){if(a!==0){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]+=a}return this}scale(a){if(a!==1){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]*=a}return this}trim(a,h){let p=this.times,m=p.length,g=0,_=m-1;while(g!==m&&p[g]<a)++g;while(_!==-1&&p[_]>h)--_;if(++_,g!==0||_!==m){if(g>=_)_=Math.max(_,1),g=_-1;let y=this.getValueSize();this.times=p.slice(g,_),this.values=this.values.slice(g*y,_*y)}return this}validate(){let a=!0,h=this.getValueSize();if(h-Math.floor(h)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1;let p=this.times,m=this.values,g=p.length;if(g===0)console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1;let _=null;for(let y=0;y!==g;y++){let x=p[y];if(typeof x==="number"&&isNaN(x)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,y,x),a=!1;break}if(_!==null&&_>x){console.error("THREE.KeyframeTrack: Out of order keys.",this,y,x,_),a=!1;break}_=x}if(m!==void 0){if(xp(m))for(let y=0,x=m.length;y!==x;++y){let M=m[y];if(isNaN(M)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,y,M),a=!1;break}}}return a}optimize(){let a=this.times.slice(),h=this.values.slice(),p=this.getValueSize(),m=this.getInterpolation()===2302,g=a.length-1,_=1;for(let y=1;y<g;++y){let x=!1,M=a[y],S=a[y+1];if(M!==S&&(y!==1||M!==a[0]))if(!m){let E=y*p,v=E-p,b=E+p;for(let A=0;A!==p;++A){let P=h[E+A];if(P!==h[v+A]||P!==h[b+A]){x=!0;break}}}else x=!0;if(x){if(y!==_){a[_]=a[y];let E=y*p,v=_*p;for(let b=0;b!==p;++b)h[v+b]=h[E+b]}++_}}if(g>0){a[_]=a[g];for(let y=g*p,x=_*p,M=0;M!==p;++M)h[x+M]=h[y+M];++_}if(_!==a.length)this.times=a.slice(0,_),this.values=h.slice(0,_*p);else this.times=a,this.values=h;return this}clone(){let a=this.times.slice(),h=this.values.slice(),m=new this.constructor(this.name,a,h);return m.createInterpolant=this.createInterpolant,m}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=2301;class Ri extends vn{constructor(a,h,p){super(a,h,p)}}Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=2300;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;class gl extends vn{}gl.prototype.ValueTypeName="color";class _l extends vn{}_l.prototype.ValueTypeName="number";class xl extends as{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=(p-h)/(m-h),M=a*y;for(let S=M+y;M!==S;M+=4)yn.slerpFlat(g,0,_,M-y,_,M,x);return g}}class ca extends vn{InterpolantFactoryMethodLinear(a){return new xl(this.times,this.values,this.getValueSize(),a)}}ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;class Ci extends vn{constructor(a,h,p){super(a,h,p)}}Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=2300;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class yl extends vn{}yl.prototype.ValueTypeName="vector";class vl{constructor(a,h,p){let m=this,g=!1,_=0,y=0,x=void 0,M=[];this.onStart=void 0,this.onLoad=a,this.onProgress=h,this.onError=p,this.itemStart=function(S){if(y++,g===!1){if(m.onStart!==void 0)m.onStart(S,_,y)}g=!0},this.itemEnd=function(S){if(_++,m.onProgress!==void 0)m.onProgress(S,_,y);if(_===y){if(g=!1,m.onLoad!==void 0)m.onLoad()}},this.itemError=function(S){if(m.onError!==void 0)m.onError(S)},this.resolveURL=function(S){if(x)return x(S);return S},this.setURLModifier=function(S){return x=S,this},this.addHandler=function(S,E){return M.push(S,E),this},this.removeHandler=function(S){let E=M.indexOf(S);if(E!==-1)M.splice(E,2);return this},this.getHandler=function(S){for(let E=0,v=M.length;E<v;E+=2){let b=M[E],A=M[E+1];if(b.global)b.lastIndex=0;if(b.test(S))return A}return null}}}var yp=new vl;class Ml{constructor(a){this.manager=a!==void 0?a:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(a,h){let p=this;return new Promise(function(m,g){p.load(a,m,h,g)})}parse(){}setCrossOrigin(a){return this.crossOrigin=a,this}setWithCredentials(a){return this.withCredentials=a,this}setPath(a){return this.path=a,this}setResourcePath(a){return this.resourcePath=a,this}setRequestHeader(a){return this.requestHeader=a,this}}Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";class js extends Ne{constructor(a,h=1){super();this.isLight=!0,this.type="Light",this.color=new ue(a),this.intensity=h}dispose(){}copy(a,h){return super.copy(a,h),this.color.copy(a.color),this.intensity=a.intensity,this}toJSON(a){let h=super.toJSON(a);if(h.object.color=this.color.getHex(),h.object.intensity=this.intensity,this.groundColor!==void 0)h.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)h.object.distance=this.distance;if(this.angle!==void 0)h.object.angle=this.angle;if(this.decay!==void 0)h.object.decay=this.decay;if(this.penumbra!==void 0)h.object.penumbra=this.penumbra;if(this.shadow!==void 0)h.object.shadow=this.shadow.toJSON();if(this.target!==void 0)h.object.target=this.target.uuid;return h}}class ha extends js{constructor(a,h,p){super(a,p);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(h)}copy(a,h){return super.copy(a,h),this.groundColor.copy(a.groundColor),this}}var Ur=new Se,To=new q,wo=new q;class ua{constructor(a){this.camera=a,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(a){let h=this.camera,p=this.matrix;To.setFromMatrixPosition(a.matrixWorld),h.position.copy(To),wo.setFromMatrixPosition(a.target.matrixWorld),h.lookAt(wo),h.updateMatrixWorld(),Ur.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),p.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),p.multiply(Ur)}getViewport(a){return this._viewports[a]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(a){return this.camera=a.camera.clone(),this.intensity=a.intensity,this.bias=a.bias,this.radius=a.radius,this.mapSize.copy(a.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let a={};if(this.intensity!==1)a.intensity=this.intensity;if(this.bias!==0)a.bias=this.bias;if(this.normalBias!==0)a.normalBias=this.normalBias;if(this.radius!==1)a.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)a.mapSize=this.mapSize.toArray();return a.camera=this.camera.toJSON(!1).object,delete a.camera.matrix,a}}var Ao=new Se,Gi=new q,Nr=new q;class Sl extends ua{constructor(){super(new ke(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(a,h=0){let p=this.camera,m=this.matrix,g=a.distance||p.far;if(g!==p.far)p.far=g,p.updateProjectionMatrix();Gi.setFromMatrixPosition(a.matrixWorld),p.position.copy(Gi),Nr.copy(p.position),Nr.add(this._cubeDirections[h]),p.up.copy(this._cubeUps[h]),p.lookAt(Nr),p.updateMatrixWorld(),m.makeTranslation(-Gi.x,-Gi.y,-Gi.z),Ao.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao)}}class da extends js{constructor(a,h,p=0,m=2){super(a,h);this.isPointLight=!0,this.type="PointLight",this.distance=p,this.decay=m,this.shadow=new Sl}get power(){return this.intensity*4*Math.PI}set power(a){this.intensity=a/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(a,h){return super.copy(a,h),this.distance=a.distance,this.decay=a.decay,this.shadow=a.shadow.clone(),this}}class El extends ua{constructor(){super(new is(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class fa extends js{constructor(a,h){super(a,h);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new El}dispose(){this.shadow.dispose()}copy(a){return super.copy(a),this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}var pa="\\[\\]\\.:\\/",vp=new RegExp("["+pa+"]","g"),ma="[^"+pa+"]",Mp="[^"+pa.replace("\\.","")+"]",Sp=/((?:WC+[\/:])*)/.source.replace("WC",ma),Ep=/(WCOD+)?/.source.replace("WCOD",Mp),bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ma),Tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ma),wp=new RegExp("^"+Sp+Ep+bp+Tp+"$"),Ap=["material","materials","bones","map"];class bl{constructor(a,h,p){let m=p||xe.parseTrackName(h);this._targetGroup=a,this._bindings=a.subscribe_(h,m)}getValue(a,h){this.bind();let p=this._targetGroup.nCachedObjects_,m=this._bindings[p];if(m!==void 0)m.getValue(a,h)}setValue(a,h){let p=this._bindings;for(let m=this._targetGroup.nCachedObjects_,g=p.length;m!==g;++m)p[m].setValue(a,h)}bind(){let a=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=a.length;h!==p;++h)a[h].bind()}unbind(){let a=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=a.length;h!==p;++h)a[h].unbind()}}class xe{constructor(a,h,p){this.path=h,this.parsedPath=p||xe.parseTrackName(h),this.node=xe.findNode(a,this.parsedPath.nodeName),this.rootNode=a,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(a,h,p){if(!(a&&a.isAnimationObjectGroup))return new xe(a,h,p);else return new xe.Composite(a,h,p)}static sanitizeNodeName(a){return a.replace(/\s/g,"_").replace(vp,"")}static parseTrackName(a){let h=wp.exec(a);if(h===null)throw Error("PropertyBinding: Cannot parse trackName: "+a);let p={nodeName:h[2],objectName:h[3],objectIndex:h[4],propertyName:h[5],propertyIndex:h[6]},m=p.nodeName&&p.nodeName.lastIndexOf(".");if(m!==void 0&&m!==-1){let g=p.nodeName.substring(m+1);if(Ap.indexOf(g)!==-1)p.nodeName=p.nodeName.substring(0,m),p.objectName=g}if(p.propertyName===null||p.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return p}static findNode(a,h){if(h===void 0||h===""||h==="."||h===-1||h===a.name||h===a.uuid)return a;if(a.skeleton){let p=a.skeleton.getBoneByName(h);if(p!==void 0)return p}if(a.children){let p=function(g){for(let _=0;_<g.length;_++){let y=g[_];if(y.name===h||y.uuid===h)return y;let x=p(y.children);if(x)return x}return null},m=p(a.children);if(m)return m}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(a,h){a[h]=this.targetObject[this.propertyName]}_getValue_array(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)a[h++]=p[m]}_getValue_arrayElement(a,h){a[h]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(a,h){this.resolvedProperty.toArray(a,h)}_setValue_direct(a,h){this.targetObject[this.propertyName]=a[h]}_setValue_direct_setNeedsUpdate(a,h){this.targetObject[this.propertyName]=a[h],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(a,h){this.targetObject[this.propertyName]=a[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++]}_setValue_array_setNeedsUpdate(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(a,h){this.resolvedProperty[this.propertyIndex]=a[h]}_setValue_arrayElement_setNeedsUpdate(a,h){this.resolvedProperty[this.propertyIndex]=a[h],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(a,h){this.resolvedProperty[this.propertyIndex]=a[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(a,h){this.resolvedProperty.fromArray(a,h)}_setValue_fromArray_setNeedsUpdate(a,h){this.resolvedProperty.fromArray(a,h),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(a,h){this.resolvedProperty.fromArray(a,h),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(a,h){this.bind(),this.getValue(a,h)}_setValue_unbound(a,h){this.bind(),this.setValue(a,h)}bind(){let a=this.node,h=this.parsedPath,{objectName:p,propertyName:m,propertyIndex:g}=h;if(!a)a=xe.findNode(this.rootNode,h.nodeName),this.node=a;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!a){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(p){let M=h.objectIndex;switch(p){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(let S=0;S<a.length;S++)if(a[S].name===M){M=S;break}break;case"map":if("map"in a){a=a.map;break}if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}a=a.material.map;break;default:if(a[p]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[p]}if(M!==void 0){if(a[M]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[M]}}let _=a[m];if(_===void 0){let M=h.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+M+"."+m+" but it wasn't found.",a);return}let y=this.Versioning.None;if(this.targetObject=a,a.needsUpdate!==void 0)y=this.Versioning.NeedsUpdate;else if(a.matrixWorldNeedsUpdate!==void 0)y=this.Versioning.MatrixWorldNeedsUpdate;let x=this.BindingType.Direct;if(g!==void 0){if(m==="morphTargetInfluences"){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(a.morphTargetDictionary[g]!==void 0)g=a.morphTargetDictionary[g]}x=this.BindingType.ArrayElement,this.resolvedProperty=_,this.propertyIndex=g}else if(_.fromArray!==void 0&&_.toArray!==void 0)x=this.BindingType.HasFromToArray,this.resolvedProperty=_;else if(Array.isArray(_))x=this.BindingType.EntireArray,this.resolvedProperty=_;else this.propertyName=m;this.getValue=this.GetterByBindingType[x],this.setValue=this.SetterByBindingTypeAndVersioning[x][y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xe.Composite=bl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $p=new Float32Array(1);var Ro=new Se;class ga{constructor(a,h,p=0,m=1/0){this.ray=new Ti(a,h),this.near=p,this.far=m,this.camera=null,this.layers=new ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(a,h){this.ray.set(a,h)}setFromCamera(a,h){if(h.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(h.matrixWorld),this.ray.direction.set(a.x,a.y,0.5).unproject(h).sub(this.ray.origin).normalize(),this.camera=h;else if(h.isOrthographicCamera)this.ray.origin.set(a.x,a.y,(h.near+h.far)/(h.near-h.far)).unproject(h),this.ray.direction.set(0,0,-1).transformDirection(h.matrixWorld),this.camera=h;else console.error("THREE.Raycaster: Unsupported camera type: "+h.type)}setFromXRController(a){return Ro.identity().extractRotation(a.matrixWorld),this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ro),this}intersectObject(a,h=!0,p=[]){return kr(a,this,p,h),p.sort(Co),p}intersectObjects(a,h=!0,p=[]){for(let m=0,g=a.length;m<g;m++)kr(a[m],this,p,h);return p.sort(Co),p}}function Co(a,h){return a.distance-h.distance}function kr(a,h,p,m){let g=!0;if(a.layers.test(h.layers)){if(a.raycast(h,p)===!1)g=!1}if(g===!0&&m===!0){let _=a.children;for(let y=0,x=_.length;y<x;y++)kr(_[y],h,p,!0)}}class Qs{constructor(a=1,h=0,p=0){return this.radius=a,this.phi=h,this.theta=p,this}set(a,h,p){return this.radius=a,this.phi=h,this.theta=p,this}copy(a){return this.radius=a.radius,this.phi=a.phi,this.theta=a.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z)}setFromCartesianCoords(a,h,p){if(this.radius=Math.sqrt(a*a+h*h+p*p),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(a,p),this.phi=Math.acos(Pe(h/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class _a extends Hn{constructor(a,h=null){super();this.object=a,this.domElement=h,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="170";var Tl={type:"change"},ya={type:"start"},Al={type:"end"},tr=new Ti,wl=new tn,Cp=Math.cos(70*Lo.DEG2RAD),Le=new q,Xe=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xa=0.000001;class er extends _a{constructor(a,h=null){super(a,h);if(this.state=Me.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hn.ROTATE,MIDDLE:hn.DOLLY,RIGHT:hn.PAN},this.touches={ONE:xn.ROTATE,TWO:xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new yn,this._lastTargetPosition=new q,this._quat=new yn().setFromUnitVectors(a.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qs,this._sphericalDelta=new Qs,this._scale=1,this._panOffset=new q,this._rotateStart=new Et,this._rotateEnd=new Et,this._rotateDelta=new Et,this._panStart=new Et,this._panEnd=new Et,this._panDelta=new Et,this._dollyStart=new Et,this._dollyEnd=new Et,this._dollyDelta=new Et,this._dollyDirection=new q,this._mouse=new Et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ip.bind(this),this._onPointerDown=Pp.bind(this),this._onPointerUp=Dp.bind(this),this._onContextMenu=zp.bind(this),this._onMouseWheel=Np.bind(this),this._onKeyDown=Fp.bind(this),this._onTouchStart=Op.bind(this),this._onTouchMove=Bp.bind(this),this._onMouseDown=Lp.bind(this),this._onMouseMove=Up.bind(this),this._interceptControlDown=Hp.bind(this),this._interceptControlUp=kp.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(a){a.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=a}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tl),this.update(),this.state=Me.NONE}update(a=null){let h=this.object.position;if(Le.copy(h).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===Me.NONE)this._rotateLeft(this._getAutoRotationAngle(a));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let p=this.minAzimuthAngle,m=this.maxAzimuthAngle;if(isFinite(p)&&isFinite(m)){if(p<-Math.PI)p+=Xe;else if(p>Math.PI)p-=Xe;if(m<-Math.PI)m+=Xe;else if(m>Math.PI)m-=Xe;if(p<=m)this._spherical.theta=Math.max(p,Math.min(m,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(p+m)/2?Math.max(p,this._spherical.theta):Math.min(m,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let g=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let _=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),g=_!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),h.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let _=null;if(this.object.isPerspectiveCamera){let y=Le.length();_=this._clampDistance(y*this._scale);let x=y-_;this.object.position.addScaledVector(this._dollyDirection,x),this.object.updateMatrixWorld(),g=!!x}else if(this.object.isOrthographicCamera){let y=new q(this._mouse.x,this._mouse.y,0);y.unproject(this.object);let x=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),g=x!==this.object.zoom;let M=new q(this._mouse.x,this._mouse.y,0);M.unproject(this.object),this.object.position.sub(M).add(y),this.object.updateMatrixWorld(),_=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(_!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(_).add(this.object.position);else if(tr.origin.copy(this.object.position),tr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tr.direction))<Cp)this.object.lookAt(this.target);else wl.setFromNormalAndCoplanarPoint(this.object.up,this.target),tr.intersectPlane(wl,this.target)}else if(this.object.isOrthographicCamera){let _=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),_!==this.object.zoom)this.object.updateProjectionMatrix(),g=!0}if(this._scale=1,this._performCursorZoom=!1,g||this._lastPosition.distanceToSquared(this.object.position)>xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xa||this._lastTargetPosition.distanceToSquared(this.target)>xa)return this.dispatchEvent(Tl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(a){if(a!==null)return Xe/60*this.autoRotateSpeed*a;else return Xe/60/60*this.autoRotateSpeed}_getZoomScale(a){let h=Math.abs(a*0.01);return Math.pow(0.95,this.zoomSpeed*h)}_rotateLeft(a){this._sphericalDelta.theta-=a}_rotateUp(a){this._sphericalDelta.phi-=a}_panLeft(a,h){Le.setFromMatrixColumn(h,0),Le.multiplyScalar(-a),this._panOffset.add(Le)}_panUp(a,h){if(this.screenSpacePanning===!0)Le.setFromMatrixColumn(h,1);else Le.setFromMatrixColumn(h,0),Le.crossVectors(this.object.up,Le);Le.multiplyScalar(a),this._panOffset.add(Le)}_pan(a,h){let p=this.domElement;if(this.object.isPerspectiveCamera){let m=this.object.position;Le.copy(m).sub(this.target);let g=Le.length();g*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*a*g/p.clientHeight,this.object.matrix),this._panUp(2*h*g/p.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(a*(this.object.right-this.object.left)/this.object.zoom/p.clientWidth,this.object.matrix),this._panUp(h*(this.object.top-this.object.bottom)/this.object.zoom/p.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(a){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=a;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(a){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=a;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(a,h){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let p=this.domElement.getBoundingClientRect(),m=a-p.left,g=h-p.top,{width:_,height:y}=p;this._mouse.x=m/_*2-1,this._mouse.y=-(g/y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(a){return Math.max(this.minDistance,Math.min(this.maxDistance,a))}_handleMouseDownRotate(a){this._rotateStart.set(a.clientX,a.clientY)}_handleMouseDownDolly(a){this._updateZoomParameters(a.clientX,a.clientX),this._dollyStart.set(a.clientX,a.clientY)}_handleMouseDownPan(a){this._panStart.set(a.clientX,a.clientY)}_handleMouseMoveRotate(a){this._rotateEnd.set(a.clientX,a.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/h.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(a){if(this._dollyEnd.set(a.clientX,a.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(a){this._panEnd.set(a.clientX,a.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(a){if(this._updateZoomParameters(a.clientX,a.clientY),a.deltaY<0)this._dollyIn(this._getZoomScale(a.deltaY));else if(a.deltaY>0)this._dollyOut(this._getZoomScale(a.deltaY));this.update()}_handleKeyDown(a){let h=!1;switch(a.code){case this.keys.UP:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateUp(Xe*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,this.keyPanSpeed);h=!0;break;case this.keys.BOTTOM:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateUp(-Xe*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,-this.keyPanSpeed);h=!0;break;case this.keys.LEFT:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateLeft(Xe*this.rotateSpeed/this.domElement.clientHeight);else this._pan(this.keyPanSpeed,0);h=!0;break;case this.keys.RIGHT:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateLeft(-Xe*this.rotateSpeed/this.domElement.clientHeight);else this._pan(-this.keyPanSpeed,0);h=!0;break}if(h)a.preventDefault(),this.update()}_handleTouchStartRotate(a){if(this._pointers.length===1)this._rotateStart.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._rotateStart.set(p,m)}}_handleTouchStartPan(a){if(this._pointers.length===1)this._panStart.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._panStart.set(p,m)}}_handleTouchStartDolly(a){let h=this._getSecondPointerPosition(a),p=a.pageX-h.x,m=a.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyStart.set(0,g)}_handleTouchStartDollyPan(a){if(this.enableZoom)this._handleTouchStartDolly(a);if(this.enablePan)this._handleTouchStartPan(a)}_handleTouchStartDollyRotate(a){if(this.enableZoom)this._handleTouchStartDolly(a);if(this.enableRotate)this._handleTouchStartRotate(a)}_handleTouchMoveRotate(a){if(this._pointers.length==1)this._rotateEnd.set(a.pageX,a.pageY);else{let p=this._getSecondPointerPosition(a),m=0.5*(a.pageX+p.x),g=0.5*(a.pageY+p.y);this._rotateEnd.set(m,g)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/h.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(a){if(this._pointers.length===1)this._panEnd.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._panEnd.set(p,m)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(a){let h=this._getSecondPointerPosition(a),p=a.pageX-h.x,m=a.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyEnd.set(0,g),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let _=(a.pageX+h.x)*0.5,y=(a.pageY+h.y)*0.5;this._updateZoomParameters(_,y)}_handleTouchMoveDollyPan(a){if(this.enableZoom)this._handleTouchMoveDolly(a);if(this.enablePan)this._handleTouchMovePan(a)}_handleTouchMoveDollyRotate(a){if(this.enableZoom)this._handleTouchMoveDolly(a);if(this.enableRotate)this._handleTouchMoveRotate(a)}_addPointer(a){this._pointers.push(a.pointerId)}_removePointer(a){delete this._pointerPositions[a.pointerId];for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==a.pointerId){this._pointers.splice(h,1);return}}_isTrackingPointer(a){for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==a.pointerId)return!0;return!1}_trackPointer(a){let h=this._pointerPositions[a.pointerId];if(h===void 0)h=new Et,this._pointerPositions[a.pointerId]=h;h.set(a.pageX,a.pageY)}_getSecondPointerPosition(a){let h=a.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[h]}_customWheelEvent(a){let h=a.deltaMode,p={clientX:a.clientX,clientY:a.clientY,deltaY:a.deltaY};switch(h){case 1:p.deltaY*=16;break;case 2:p.deltaY*=100;break}if(a.ctrlKey&&!this._controlActive)p.deltaY*=10;return p}}function Pp(a){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(a))return;if(this._addPointer(a),a.pointerType==="touch")this._onTouchStart(a);else this._onMouseDown(a)}function Ip(a){if(this.enabled===!1)return;if(a.pointerType==="touch")this._onTouchMove(a);else this._onMouseMove(a)}function Dp(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Al),this.state=Me.NONE;break;case 1:let h=this._pointers[0],p=this._pointerPositions[h];this._onTouchStart({pointerId:h,pageX:p.x,pageY:p.y});break}}function Lp(a){let h;switch(a.button){case 0:h=this.mouseButtons.LEFT;break;case 1:h=this.mouseButtons.MIDDLE;break;case 2:h=this.mouseButtons.RIGHT;break;default:h=-1}switch(h){case hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=Me.DOLLY;break;case hn.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Me.ROTATE}break;case hn.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Me.PAN}break;default:this.state=Me.NONE}if(this.state!==Me.NONE)this.dispatchEvent(ya)}function Up(a){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function Np(a){if(this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE)return;a.preventDefault(),this.dispatchEvent(ya),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Al)}function Fp(a){if(this.enabled===!1||this.enablePan===!1)return;this._handleKeyDown(a)}function Op(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case xn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=Me.TOUCH_ROTATE;break;case xn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case xn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=Me.TOUCH_DOLLY_PAN;break;case xn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}if(this.state!==Me.NONE)this.dispatchEvent(ya)}function Bp(a){switch(this._trackPointer(a),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=Me.NONE}}function zp(a){if(this.enabled===!1)return;a.preventDefault()}function Hp(a){if(a.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function kp(a){if(a.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var os=new q;function nn(a,h,p,m,g,_){let y=2*Math.PI*g/4,x=Math.max(_-2*g,0),M=Math.PI/4;os.copy(h),os[m]=0,os.normalize();let S=0.5*y/(y+x),E=1-os.angleTo(a)/M;if(Math.sign(os[p])===1)return E*S;else return x/(y+x)+S+S*(1-E)}class va extends Be{constructor(a=1,h=1,p=1,m=2,g=0.1){m=m*2+1,g=Math.min(a/2,h/2,p/2,g);super(1,1,1,m,m,m);if(m===1)return;let _=this.toNonIndexed();this.index=null,this.attributes.position=_.attributes.position,this.attributes.normal=_.attributes.normal,this.attributes.uv=_.attributes.uv;let y=new q,x=new q,M=new q(a,h,p).divideScalar(2).subScalar(g),S=this.attributes.position.array,E=this.attributes.normal.array,v=this.attributes.uv.array,b=S.length/6,A=new q,P=0.5/m;for(let I=0,T=0;I<S.length;I+=3,T+=2)switch(y.fromArray(S,I),x.copy(y),x.x-=Math.sign(x.x)*P,x.y-=Math.sign(x.y)*P,x.z-=Math.sign(x.z)*P,x.normalize(),S[I+0]=M.x*Math.sign(y.x)+x.x*g,S[I+1]=M.y*Math.sign(y.y)+x.y*g,S[I+2]=M.z*Math.sign(y.z)+x.z*g,E[I+0]=x.x,E[I+1]=x.y,E[I+2]=x.z,Math.floor(I/b)){case 0:A.set(1,0,0),v[T+0]=nn(A,x,"z","y",g,p),v[T+1]=1-nn(A,x,"y","z",g,h);break;case 1:A.set(-1,0,0),v[T+0]=1-nn(A,x,"z","y",g,p),v[T+1]=1-nn(A,x,"y","z",g,h);break;case 2:A.set(0,1,0),v[T+0]=1-nn(A,x,"x","z",g,a),v[T+1]=nn(A,x,"z","x",g,p);break;case 3:A.set(0,-1,0),v[T+0]=1-nn(A,x,"x","z",g,a),v[T+1]=1-nn(A,x,"z","x",g,p);break;case 4:A.set(0,0,1),v[T+0]=1-nn(A,x,"x","y",g,a),v[T+1]=1-nn(A,x,"y","x",g,h);break;case 5:A.set(0,0,-1),v[T+0]=nn(A,x,"x","y",g,a),v[T+1]=1-nn(A,x,"y","x",g,h);break}}}class Ma extends ss{constructor(){super();let a=new Be;a.deleteAttribute("uv");let h=new Vn({side:Io}),p=new Vn,m=new da(16777215,900,28,2);m.position.set(0.418,16.199,0.3),this.add(m);let g=new ie(a,h);g.position.set(-0.757,13.219,0.717),g.scale.set(31.713,28.305,28.591),this.add(g);let _=new ie(a,p);_.position.set(-10.906,2.009,1.846),_.rotation.set(0,-0.195,0),_.scale.set(2.328,7.905,4.651),this.add(_);let y=new ie(a,p);y.position.set(-5.607,-0.754,-0.758),y.rotation.set(0,0.994,0),y.scale.set(1.97,1.534,3.955),this.add(y);let x=new ie(a,p);x.position.set(6.167,0.857,7.803),x.rotation.set(0,0.561,0),x.scale.set(3.927,6.285,3.687),this.add(x);let M=new ie(a,p);M.position.set(-2.017,0.018,6.124),M.rotation.set(0,0.333,0),M.scale.set(2.002,4.566,2.064),this.add(M);let S=new ie(a,p);S.position.set(2.291,-0.756,-2.621),S.rotation.set(0,-0.286,0),S.scale.set(1.546,1.552,1.496),this.add(S);let E=new ie(a,p);E.position.set(-2.193,-0.369,-5.547),E.rotation.set(0,0.516,0),E.scale.set(3.875,3.487,2.986),this.add(E);let v=new ie(a,Pi(50));v.position.set(-16.116,14.37,8.208),v.scale.set(0.1,2.428,2.739),this.add(v);let b=new ie(a,Pi(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(0.1,2.425,2.751),this.add(b);let A=new ie(a,Pi(17));A.position.set(14.904,12.198,-1.832),A.scale.set(0.15,4.265,6.331),this.add(A);let P=new ie(a,Pi(43));P.position.set(-0.462,8.89,14.52),P.scale.set(4.38,5.441,0.088),this.add(P);let I=new ie(a,Pi(20));I.position.set(3.235,11.486,-12.541),I.scale.set(2.5,2,0.1),this.add(I);let T=new ie(a,Pi(100));T.position.set(0,20,0),T.scale.set(1,0.1,1),this.add(T)}dispose(){let a=new Set;this.traverse((h)=>{if(h.isMesh)a.add(h.geometry),a.add(h.material)});for(let h of a)h.dispose()}}function Pi(a){let h=new ns;return h.color.setScalar(a),h}var ii=2.5,Rl=1,Gp=0.9,Ii=0.13,Ke=new q(e(189),0,t(183));function dn(a,h,p,m=1){let g=document.createElement("canvas");g.width=a,g.height=h,p(g.getContext("2d"));let _=new ta(g);if(_.colorSpace=Gr,_.anisotropy=4,m!==1)_.wrapS=_.wrapT=ts,_.repeat.set(m,m);return _}var Ea=(a,h,p,m,g,_=9000)=>{a.fillStyle=m,a.fillRect(0,0,h,p);for(let y=0;y<_;y++){let x=(Math.random()-0.5)*g;a.fillStyle=x>0?`rgba(255,255,255,${x})`:`rgba(0,0,0,${-x})`,a.fillRect(Math.random()*h,Math.random()*p,2,2)}},Cl=()=>dn(512,512,(a)=>{for(let h=0;h<2;h++)for(let p=0;p<2;p++){let m=228+Math.floor(Math.random()*8);a.fillStyle=`rgb(${m+8},${m+3},${m-8})`,a.fillRect(h*256,p*256,256,256);for(let g=0;g<2500;g++)a.fillStyle=`rgba(${Math.random()>0.5?"255,255,255":"150,130,100"},.06)`,a.fillRect(h*256+Math.random()*256,p*256+Math.random()*256,3,3)}a.fillStyle="#cfc6b6";for(let h=0;h<=2;h++)a.fillRect(h*256-2,0,4,512),a.fillRect(0,h*256-2,512,4)}),nr=(a,h=0.14)=>dn(256,256,(p)=>Ea(p,256,256,a,h,6000),3),Wp=(a,h)=>dn(256,256,(p)=>{Ea(p,256,256,a,0.2,14000),p.strokeStyle=h,p.lineWidth=10,p.strokeRect(12,12,232,232)}),Vp=()=>dn(256,512,(a)=>{Ea(a,256,512,"#2b3550",0.25,12000),a.strokeStyle="#c9a86a",a.lineWidth=6,a.strokeRect(14,14,228,484),a.fillStyle="#c9a86a88";for(let h=60;h<480;h+=70)a.beginPath(),a.ellipse(128,h,50,22,0,0,7),a.fill()}),Pl=()=>dn(256,256,(a)=>{a.fillStyle="#f7f7f5",a.fillRect(0,0,256,256),a.fillStyle="#d9d9d6";for(let h=0;h<=4;h++)a.fillRect(h*64-1,0,2,256),a.fillRect(0,h*128-1,256,2)}),Xp=()=>dn(256,256,(a)=>{a.fillStyle="#e6e2df",a.fillRect(0,0,256,256);let h=22;for(let p=0;p<300;p+=h*1.5)for(let m=0;m<300;m+=h*1.732){let g=Math.round(p/(h*1.5))%2*h*0.866;a.beginPath();for(let y=0;y<6;y++){let x=Math.PI/3*y+Math.PI/6;a.lineTo(m+g+h*Math.cos(x),p+h*Math.sin(x))}a.closePath();let _=205+Math.floor(Math.random()*40);a.fillStyle=`rgb(${_},${_-3},${_-2})`,a.fill(),a.strokeStyle="#f5f3f0",a.lineWidth=2,a.stroke()}}),qp=()=>dn(256,360,(a)=>{a.fillStyle="#121216",a.fillRect(0,0,256,360),a.fillStyle="#9b2b33",a.beginPath(),a.arc(128,105,78,0,7),a.fill(),a.fillStyle="#121216",a.beginPath(),a.arc(128,105,58,0,7),a.fill(),a.fillStyle="#d8d4cf",a.beginPath(),a.ellipse(128,110,28,36,0,0,7),a.fill(),a.fillStyle="#2d4f6d",a.fillRect(70,150,116,200),a.fillStyle="#e8e4dc";for(let h=170;h<330;h+=18)a.fillRect(98,h,60,6);a.fillStyle="#3c8b3a",a.fillRect(122,250,12,12)}),Yp=()=>dn(256,340,(a)=>{let h=["#d94b3d","#f2b632","#3a7bd5","#43a047","#8e44ad","#f06292"];a.fillStyle="#e8d8b8",a.fillRect(0,0,256,340);for(let p=0;p<60;p++)a.fillStyle=h[p%6],a.beginPath(),a.arc(Math.random()*256,Math.random()*340,6+Math.random()*20,0,7),a.fill();a.fillStyle="#c69c6d",a.beginPath(),a.ellipse(128,200,50,100,0,0,7),a.fill(),a.fillStyle="#8a5a3a",a.beginPath(),a.arc(128,95,55,0,7),a.fill()}),Zp=()=>dn(200,260,(a)=>{a.fillStyle="#f5d33b",a.fillRect(0,0,200,260);let h=["#e84a5f","#2a9d8f","#f4a261","#6c63ff","#ffffff"];for(let p=0;p<5;p++)a.fillStyle=h[p],a.beginPath(),a.moveTo(100,90),a.arc(100,90,70,Math.PI+p*0.63,Math.PI+(p+1)*0.63),a.fill();a.fillStyle="#f472b6",a.beginPath(),a.arc(140,140,28,0,7),a.fill(),a.fillStyle="#1f2937",a.fillRect(20,200,160,40)}),Jp=()=>dn(256,160,(a)=>{a.fillStyle="#fbfbfb",a.fillRect(0,0,256,160),a.font="bold 26px sans-serif",a.fillStyle="#222",a.fillText("Bim",120,34),a.fillStyle="#d23",a.fillText("Flow",168,34),a.strokeStyle="#333",a.lineWidth=2;for(let h=50;h<150;h+=14)a.beginPath(),a.moveTo(16,h),a.lineTo(66+Math.random()*50,h),a.stroke();a.strokeStyle="#d23",a.beginPath(),a.arc(180,80,18,0,7),a.stroke()}),Sa=(a)=>dn(64,32,(h)=>{let p=h.createLinearGradient(0,0,64,32);p.addColorStop(0,a),p.addColorStop(1,"#05060a"),h.fillStyle=p,h.fillRect(0,0,64,32)});function om(a){let h=new jr({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(devicePixelRatio,1.75)),h.shadowMap.enabled=!0,h.shadowMap.type=Po,h.shadowMap.autoUpdate=!1,h.outputColorSpace=Gr,h.localClippingEnabled=!0,h.toneMapping=Do,h.toneMappingExposure=1.05,a.appendChild(h.domElement);let p=new ss,m=new $i(h);p.environment=m.fromScene(new Ma,0.04).texture,p.environmentIntensity=0.55;let g=new ke(32,1,0.1,120),_=new is(-5,5,5,-5,0.1,100),y=g,x=new er(g,h.domElement);x.enableDamping=!0,x.maxPolarAngle=1.35,x.minDistance=2.5,x.maxDistance=30,x.screenSpacePanning=!0;let M=new er(_,h.domElement);M.enableRotate=!1,M.enableDamping=!0,M.screenSpacePanning=!0,M.minZoom=0.6,M.maxZoom=6,M.enabled=!1,M.mouseButtons={LEFT:hn.PAN,MIDDLE:hn.DOLLY,RIGHT:hn.PAN},M.touches={ONE:xn.PAN,TWO:xn.DOLLY_PAN};let S=x;p.add(new ha(16777215,14274752,1.25));let E=new fa(16773856,2.3);E.position.set(Ke.x-5,12,Ke.z+7),E.castShadow=!0,E.shadow.mapSize.set(2048,2048),Object.assign(E.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:35}),E.shadow.bias=-0.0004,E.shadow.normalBias=0.02,E.shadow.radius=3,E.target.position.copy(Ke),p.add(E,E.target);let v=(C,D={})=>new Vn({color:C,roughness:0.7,...D}),b=v("#f6f5f1",{roughness:0.45}),A=v("#f3f1ec",{roughness:0.85}),P=v("#232428",{roughness:0.4}),I=v("#2a2b2f",{roughness:0.8}),T=v("#c7cace",{metalness:0.8,roughness:0.28}),w=v("#d9dcdf",{metalness:1,roughness:0.12}),W=v("#18191c",{roughness:0.18,metalness:0.1}),F=new la({color:"#cfe6ee",transparent:!0,opacity:0.28,roughness:0.03,metalness:0,clearcoat:1,depthWrite:!1}),k=v("#0f1114",{roughness:0.08,metalness:0.3}),rt=v("#e7eef2",{metalness:1,roughness:0.04}),X=v("#a9774f",{roughness:0.95,map:nr("#a9774f")}),Y=v("#956643",{roughness:0.95,map:nr("#956643")}),lt=v("#2f4a69",{roughness:0.6}),O=v("#9b6c45",{roughness:0.6}),B=v("#3f7d34",{roughness:0.7}),Q=v("#5f9c40",{roughness:0.7}),at=v("#2c2c2c",{roughness:0.6}),ot=v("#fbfbf9",{roughness:0.15}),ct=v("#b8bcc0",{metalness:0.7,roughness:0.35}),dt=(C)=>C.traverse((D)=>{if(D.isMesh)D.castShadow=!0,D.receiveShadow=!0}),K=(C,D,N,z,tt=0.015)=>new ie(new va(C,D,N,2,Math.min(tt,C/2.1,D/2.1,N/2.1)),z),st=(C,D,N,z)=>new ie(new Be(C,D,N),z),Z=(C,D,N,z,tt=24)=>new ie(new ni(C,D,N,tt),z),Rt=(C,D,N=14)=>new ie(new Ks(C,N,Math.round(N*0.75)),D),U=(C,D,N=0,z=0,tt=0)=>(D.position.set(N,z,tt),C.add(D),D),Vt=(C,D,N)=>new ie(new wi(C,D),N),$t=(C,D)=>{if(D==="x")C.rotation.z=Math.PI/2;else C.rotation.x=Math.PI/2;return C},ut=(C,D,N,z,tt=!0,R=0.12)=>U(C,tt?Z(0.006,0.006,R,ct,8):$t(Z(0.006,0.006,R,ct,8),"x"),D,N,z),bt=(C,D,N,z,tt,R=0,H=!0)=>{for(let J=1;J<tt;J++)U(C,st(0.004,N-0.04,0.004,I),-D/2+J*D/tt,R+N/2,z/2+0.001);for(let J=0;J<tt;J++)ut(C,-D/2+(J+(J%2?0.12:0.88))*D/tt,R+(H?N-0.12:N/2),z/2+0.015,!0,0.1)};function qt(C,D,N,z=!1){let tt=new Ot;if(!z)U(tt,Z(C*0.32,C*0.25,0.26,at,18),0,0.13,0);let R=z?0:0.26;for(let H=0;H<N;H++){let J=H/N*Math.PI*2+Math.random()*0.4,nt=(D-R)*(0.6+Math.random()*0.4);U(tt,Z(0.006,0.006,nt,B,5),Math.cos(J)*0.05,R+nt/2,Math.sin(J)*0.05).rotation.set(Math.sin(J)*0.35,0,-Math.cos(J)*0.35);for(let gt=1;gt<=3;gt++){let xt=U(tt,Rt(0.05,gt%2?B:Q,8),Math.cos(J)*(0.05+gt*nt*0.1),R+nt*(0.35+gt*0.2),Math.sin(J)*(0.05+gt*nt*0.1));xt.scale.set(1.4,0.35,0.8),xt.rotation.y=-J}}return tt}function kt(C,D,N){let z=new Ot,tt=v(N,{roughness:1,side:Cn}),R=Math.max(3,Math.round(C/0.08));for(let H=0;H<R;H++){let J=U(z,Z(0.045,0.05,D-0.1,tt,8),-C/2+(H+0.5)*C/R,(D-0.1)/2+0.05,H%2*0.03);J.scale.z=0.6}return U(z,$t(Z(0.012,0.012,C+0.3,ct,8),"x"),0,D,0),z}function Ct(C,D,N,z){let tt=new Ot;U(tt,K(C,N,D,A,0.01),0,N/2,0),U(tt,st(C-0.02,0.006,0.006,v("#d0cdc6")),0,N-0.45,D/2+0.003),U(tt,st(C-0.02,0.005,0.02,ct),0,N-0.43,D/2+0.01);for(let R=0;R<2;R++){let H=-C/2+(R+0.5)*C/2,J=z&&R===1?rt:b;U(tt,st(C/2-0.03,N-0.55,0.015,J),H,(N-0.5)/2+0.02,D/2+0.008+R*0.02),U(tt,st(0.02,N-0.55,0.02,ct),H-C/4+0.02,(N-0.5)/2+0.02,D/2+0.012+R*0.02),U(tt,st(0.02,N-0.55,0.02,ct),H+C/4-0.02,(N-0.5)/2+0.02,D/2+0.012+R*0.02)}return[-1,1].forEach((R)=>ut(tt,R*C*0.3,N-0.3,D/2+0.02,!1,0.14)),tt}let jt={geladeira(C,D,N){let z=new Ot;U(z,K(C,N,D,T,0.03),0,N/2,0),U(z,st(C-0.02,0.006,0.006,I),0,1.22,D/2+0.002),U(z,K(0.025,0.5,0.03,ct,0.01),-C/2+0.07,1.5,D/2+0.02),U(z,K(0.025,0.5,0.03,ct,0.01),-C/2+0.07,0.95,D/2+0.02),U(z,K(0.16,0.12,0.02,v("#9aa3ab",{roughness:0.3}),0.01),C/2-0.16,1.45,D/2+0.006),["#3b82f6","#f59e0b","#7c3aed","#ef4444","#111827","#16a34a","#e5e7eb"].forEach((H,J)=>U(z,st(0.07+J%3*0.02,0.05+J%2*0.03,0.004,v(H)),C*0.05+J%3*0.1-0.08,1.32+Math.floor(J/3)*0.1,D/2+0.004));let R=new Ot;return U(R,Z(0.13,0.15,0.3,P,28),0,0.15,0),U(R,K(0.05,0.04,0.12,P,0.01),0,0.2,0.17),U(z,R,0,N,0),z},"armario-cozinha"(C,D,N){let z=new Ot;if(U(z,K(C,N-0.04,D-0.03,b,0.01),0,(N-0.04)/2,-0.015),U(z,st(C+0.005,0.04,D+0.01,v("#f4f2ee",{roughness:0.3})),0,N-0.02,0),bt(z,C,N-0.1,D-0.03,Math.max(1,Math.round(C/0.42)),0.06),U(z,st(C,0.06,0.02,I),0,0.03,D/2-0.04),C>1){let tt=new Ot;U(tt,K(0.3,0.02,0.22,v("#a4744a"),0.01),0,0.01,0),U(tt,K(0.12,0.08,0.12,v("#e9e3d6"),0.02),-0.05,0.06,0),U(tt,Z(0.04,0.04,0.1,v("#ddd"),14),0.08,0.07,0),U(z,tt,-C*0.25,N,0)}return z},fogao(C,D,N){let z=new Ot;U(z,K(C,N-0.03,D,T,0.015),0,(N-0.03)/2,0),U(z,st(C-0.01,0.02,D-0.01,k),0,N-0.02,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([R,H])=>{U(z,Z(0.055,0.06,0.025,I),R*C/4.2,N,H*D/5),U(z,Z(0.03,0.03,0.03,v("#555")),R*C/4.2,N+0.01,H*D/5)}),U(z,st(C-0.1,0.4,0.01,k),0,0.42,D/2+0.005),ut(z,0,0.7,D/2+0.03,!1,C-0.12);for(let R=0;R<5;R++)U(z,$t(Z(0.015,0.015,0.02,P,12),"z"),-C/2+0.08+R*(C-0.16)/4,N-0.09,D/2+0.012);U(z,st(C,0.08,D,I),0,0.04,0);let tt=new Ot;return U(tt,K(C+0.1,0.1,0.45,T,0.02),0,0,0),U(tt,st(0.2,0.025,0.01,P),C*0.25,-0.02,0.23),U(z,tt,0,1.6,-D/2+0.2),z},microondas(C,D,N){let z=new Ot,tt=v("#f6f5f1",{roughness:0.45});return U(z,st(C+0.08,0.025,D+0.06,tt),0,-0.0125,-0.01),U(z,st(C+0.08,0.025,D+0.06,tt),0,N+0.1,-0.01),[-1,1].forEach((R)=>U(z,st(0.025,N+0.12,D+0.06,tt),R*(C/2+0.03),N/2+0.045,-0.01)),U(z,K(C,N,D,P,0.015),0,N/2,0),U(z,st(C*0.68,N*0.75,0.005,k),-C*0.12,N/2,D/2+0.003),U(z,st(C*0.18,N*0.7,0.004,v("#333")),C*0.36,N/2,D/2+0.003),z},maquina(C,D,N){let z=new Ot;return U(z,K(C,N,D,b,0.05),0,N/2,0),U(z,Z(C*0.38,C*0.38,0.02,v("#9aa3ab",{roughness:0.2,transparent:!0,opacity:0.85}),32),0,N+0.005,0.02),U(z,K(C-0.04,0.12,0.08,v("#e9e9e6"),0.02),0,N+0.06,-D/2+0.05),U(z,st(C*0.3,0.04,0.005,v("#4aa3c7")),0,N+0.07,-D/2+0.092),U(z,Z(0.03,0.03,0.55,v("#8bc34a"),10),C/2+0.05,0.27,D*0.3),z},tanque(C,D,N){let z=new Ot;U(z,K(C*0.5,N-0.2,D*0.5,b,0.02),0,(N-0.2)/2,-D*0.2),U(z,K(C,0.2,D,ot,0.04),0,N-0.1,0),U(z,st(C-0.08,0.02,D-0.1,v("#d8dadb",{roughness:0.3})),0,N-0.01,0.02);let tt=new Ot;U(tt,Z(0.012,0.012,0.22,w,10),0,0.11,0),U(tt,$t(Z(0.01,0.01,0.12,w,10),"z"),0,0.22,0.06),U(z,tt,0,N,-D/2+0.04);let R=new Ot;return[0,0.05,0.1].forEach((H,J)=>U(R,Z(0.008,0.008,0.16,v(["#c58b4c","#7c5a3a","#d8b98b"][J]),6),H,0.08,0)),U(z,R,-C*0.3,N,-D/2+0.05),z},"varal-teto"(C,D){let N=new Ot;for(let tt=0;tt<6;tt++)U(N,$t(Z(0.008,0.008,C,b,8),"x"),0,0,-D/2+tt*D/5);return[-1,1].forEach((tt)=>U(N,st(0.02,0.02,D,b),tt*C/2,0,0)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([tt,R])=>U(N,Z(0.002,0.002,0.3,v("#ddd"),4),tt*C/2,0.15,R*D/2)),[["#e24b75",0.4,0.55,-0.8],["#1f5f45",0.3,0.6,-0.4],["#1d2c54",0.25,0.3,0],["#6b6b6b",0.3,0.35,0.4],["#151515",0.3,0.45,0.8]].forEach(([tt,R,H,J])=>{let nt=U(N,Vt(R,H,v(tt,{side:Cn,roughness:1})),0,-H/2,J*D/2.2);nt.rotation.y=Math.PI/2}),N},balcao(C,D){let N=new Ot,z=D-0.12,tt=-D/2+z/2;U(N,K(C-0.02,0.86,z,b,0.01),0,0.43,tt);let R=new Ot;bt(R,C-0.02,0.78,z,4,0.06),R.rotation.y=Math.PI,R.position.z=tt,N.add(R),U(N,st(C-0.02,0.06,0.02,I),0,0.03,-D/2+0.03),U(N,st(C,0.035,z+0.04,W),0,0.9,tt),U(N,st(C,0.52,0.1,v("#ece9e3",{roughness:0.8})),0,1.16,D/2-0.11),U(N,st(C,0.035,0.34,W),0,1.44,D/2-0.02);let H=new Ot;U(H,Z(0.07,0.08,0.12,P,16),0,0.06,0),U(H,$t(Z(0.008,0.008,0.32,P,6),"z"),0,0.25,0.04),U(H,Z(0.04,0.07,0.1,P,14),0,0.36,0.18),U(N,H,-C*0.1,1.44,D/2+0.05);let J=new Ot;U(J,K(0.16,0.14,0.16,P,0.03),0,0.07,0),U(J,Z(0.07,0.06,0.22,v("#cfd6db",{transparent:!0,opacity:0.5}),16),0,0.25,0),U(N,J,-C*0.3,1.44,D/2+0.05);let nt=new Ot;return U(nt,Z(0.04,0.04,0.22,v("#3b6b2f",{roughness:0.1}),14),0,0.11,0),U(nt,Z(0.012,0.025,0.1,v("#3b6b2f",{roughness:0.1}),10),0,0.27,0),U(N,nt,C*0.35,1.44,D/2+0.05),U(N,K(0.4,0.01,0.25,v("#a7774b",{roughness:0.9}),0.004),C*0.38,1.44,D/2+0.1),N},"pia-cozinha"(C,D){let N=new Ot;U(N,st(C*0.8,0.015,D*0.9,T),0,0.002,0),U(N,st(C*0.7,0.01,D*0.75,v("#8f9499",{metalness:0.8,roughness:0.3})),0,0.009,0),U(N,Z(0.015,0.018,0.28,w,12),C*0.3,0.14,-D*0.3);let z=U(N,new ie(new Wn(0.07,0.011,8,16,Math.PI),w),C*0.3,0.28,-D*0.3+0.07);return z.rotation.y=Math.PI/2,N},escorredor(C,D){let N=new Ot;U(N,K(C,0.02,D,w,0.005),0,0.01,0),[-1,1].forEach((z)=>[-1,1].forEach((tt)=>U(N,Z(0.004,0.004,0.14,w,6),z*(C/2-0.01),0.08,tt*(D/2-0.01))));for(let z=0;z<6;z++)U(N,$t(Z(0.003,0.003,D,w,4),"z"),-C/2+0.03+z*(C-0.06)/5,0.15,0);return[0,1,2,3].forEach((z)=>{let tt=U(N,Z(0.1,0.1,0.012,z%2?v("#f6f6f4",{roughness:0.2}):v("#1f3b73",{roughness:0.3}),22),-C/2+0.1+z*0.07,0.12,0);tt.rotation.z=Math.PI/2-0.15}),[0,1,2].forEach((z)=>U(N,Z(0.03,0.025,0.1,v("#cfd8dc",{transparent:!0,opacity:0.6,roughness:0.1}),12),C*0.3,0.07,-D/3+z*D/3)),U(N,Z(0.05,0.045,0.08,v("#c13b3b"),16),C*0.18,0.06,D*0.25),U(N,K(0.14,0.07,0.1,v("#d26aa6"),0.02),0,0.2,0),N},filtro(C,D,N){let z=new Ot;return U(z,Z(C/2.4,C/2,N*0.55,v("#8a5236",{roughness:0.9}),20),0,N*0.275,0),U(z,Z(C/2.4,C/2.4,N*0.45,v("#6b6f73",{transparent:!0,opacity:0.7,roughness:0.2}),20),0,N*0.775,0),U(z,$t(Z(0.01,0.01,0.05,v("#c98"),6),"z"),0,N*0.15,C/2),z},"mesa-jantar"(C,D,N){let z=new Ot;return U(z,K(C,0.02,D,F,0.01),0,N,0),U(z,st(C*0.3,0.005,D*0.5,v("#e6a243")),0,N+0.013,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([tt,R])=>U(z,Z(0.015,0.015,N,w,10),tt*(C/2-0.06),N/2,R*(D/2-0.06))),U(z,Z(0.04,0.03,0.12,v("#3a2a20"),12),-C*0.2,N+0.07,D*0.2),[0,1,2].forEach((tt)=>U(z,Z(0.002,0.002,0.25,v("#d9b48a"),4),-C*0.2+(tt-1)*0.015,N+0.2,D*0.2)),U(z,Z(0.035,0.035,0.2,v("#f472b6"),14),C*0.2,N+0.1,-D*0.25),U(z,K(0.22,0.1,0.16,v("#f8c74a"),0.01),C*0.1,N+0.06,D*0.3),z},cadeiras(C,D){let N=new Ot;return U(N,K(C,0.05,D,P,0.02),0,0.46,0),U(N,K(C,0.4,0.03,P,0.015),0,0.7,-D/2+0.02),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([z,tt])=>U(N,Z(0.009,0.009,0.44,w,8),z*(C/2-0.03),0.22,tt*(D/2-0.03))),[-1,1].forEach((z)=>U(N,Z(0.009,0.009,0.44,w,8),z*(C/2-0.03),0.7,-D/2+0.02)),N},espada(C,D,N){let z=new Ot;U(z,Z(C*0.35,C*0.28,0.28,at,18),0,0.14,0),U(z,Z(C*0.33,C*0.33,0.01,v("#3d2a1d")),0,0.27,0);for(let tt=0;tt<11;tt++){let R=tt/11*Math.PI*2;U(z,st(0.045,N-0.3-Math.random()*0.3,0.008,tt%2?B:v("#5a8a3a")),Math.cos(R)*0.04,0.28+(N-0.3)/2,Math.sin(R)*0.04).rotation.set((Math.random()-0.5)*0.25,R,(Math.random()-0.5)*0.25)}return z},zamioculca(C,D,N){return qt(C,N,7)},sofa(C,D,N,z){let tt=new Ot,R=(xt)=>n(xt-z.x)-C/2,H=(xt)=>n(xt-z.y)-D/2,J=(xt,It,Dt,Yt,ne,Xt,de,_e=0.05)=>U(tt,K(n(Dt-xt),de,n(Yt-It),ne,_e),(R(xt)+R(Dt))/2,Xt+de/2,(H(It)+H(Yt))/2);J(52,178,90,294,Y,0,0.2,0.03),J(90,178,126,214,Y,0,0.2,0.03);for(let xt=186;xt<288;xt+=25.5)J(60.3,xt+0.3,89.7,Math.min(xt+25.5,288)-0.3,X,0.2,0.2,0.07);[[90,186,105,214],[105,186,120,214]].forEach(([xt,It,Dt,Yt])=>J(xt+0.3,It+0.3,Dt-0.3,Yt-0.3,X,0.2,0.2,0.07));for(let xt=180;xt<294;xt+=28.5)J(52,xt+0.2,60,Math.min(xt+28.5,294)-0.2,Y,0.2,0.42,0.05);[[60,178,82,186],[82,178,104,186],[104,178,126,186]].forEach(([xt,It,Dt,Yt])=>J(xt+0.2,It,Dt-0.2,Yt,Y,0.2,0.42,0.05)),J(60,288,90,294,Y,0.2,0.22,0.04),J(120,186,126,214,Y,0.2,0.22,0.04);let nt=(xt,It,Dt,Yt)=>{U(tt,K(0.36,0.34,0.1,v(Dt,{roughness:0.95}),0.05),R(xt),0.55,H(It)).rotation.set(-0.25,Yt,0)};nt(63,196,"#ece6d6",Math.PI/2),nt(63,280,"#7d9a6a",Math.PI/2),nt(112,190,"#ece6d6",0);let j=U(tt,K(0.55,0.04,0.45,v("#8d96a3",{roughness:1,map:nr("#8d96a3",0.2)}),0.02),R(74),0.44,H(250));j.rotation.y=0.5;let gt=new Ot;return U(gt,K(0.32,0.38,0.16,v("#ece4d6",{roughness:1}),0.06),0,0.19,0),U(gt,K(0.24,0.03,0.17,v("#222"),0.01),0,0.38,0),U(tt,gt,R(98),0.4,H(196)),U(tt,K(0.16,0.02,0.05,v("#111"),0.01),R(72),0.41,H(266)).rotation.y=0.3,tt},"tapete-sala"(C,D){let N=new Ot;return U(N,K(C,0.015,D,v("#1c1c1e",{map:Wp("#1c1c1e","#2c2c30"),roughness:1}),0.005),0,0.008,0),N},"mesa-centro"(C,D,N){let z=new Ot;return U(z,Z(0.5,0.5,0.035,P,40),0,N-0.02,0).scale.set(C,1,D),[0,2.1,4.2].forEach((R)=>{U(z,Z(0.014,0.01,N,P,8),Math.cos(R)*C*0.32,N/2,Math.sin(R)*D*0.32).rotation.set(Math.sin(R)*0.15,0,-Math.cos(R)*0.15)}),U(z,Z(0.06,0.05,0.08,v("#c26b3a")),C*0.15,N+0.04,0),U(z,K(0.18,0.02,0.24,v("#2c4a6e"),0.005),-C*0.15,N+0.01,0.02),z},estante(C,D,N){let z=new Ot;U(z,st(C,N,0.03,lt),0,N/2,-D/2+0.015),U(z,K(C,0.5,D,lt,0.01),0,0.25,0),[-1,1].forEach((j)=>{U(z,st(C/2-0.02,0.003,0.003,v("#1d3047")),j*C/4,0.25,D/2+0.002),ut(z,j*C/4,0.36,D/2+0.015,!1,0.24)}),U(z,st(C*0.3,0.16,D-0.05,v("#22384f")),-C*0.32,0.4,0.02),U(z,K(0.2,0.1,0.14,v("#ece9e3"),0.01),-C*0.36,0.37,0.04),U(z,st(0.18,0.12,0.2,v("#c9a37a")),-C*0.22,0.37,0.03),U(z,K(C,0.3,D-0.04,lt,0.01),0,N-0.15,-0.02),[-0.33,0.33].forEach((j)=>U(z,st(0.02,0.26,D-0.06,v("#294260")),j*C,N-0.15,-0.02));let tt=["#e8e1d0","#b33","#222","#d9b26a","#e9e9e9","#2b2b2b","#c2185b","#f0eadb","#333","#7a5230"];for(let j=0;j<18;j++)U(z,st(0.022+Math.random()*0.02,0.2+Math.random()*0.05,0.16,v(tt[j%tt.length],{roughness:0.8})),-C/2+0.05+j*0.028,N-0.27+0.11,-0.03);U(z,qt(0.18,0.55,5,!0),0,N-0.28,-0.02),U(z,K(0.16,0.14,0.16,v("#3b87c9"),0.07),C*0.38,N-0.22,-0.02),U(z,K(C*0.58,C*0.58*0.58,0.03,P,0.006),-C*0.08,1.33,-D/2+0.05),U(z,Vt(C*0.56,C*0.56*0.56,v("#000",{map:Sa("#1d2a3a"),roughness:0.2})),-C*0.08,1.33,-D/2+0.066),U(z,Z(0.003,0.003,0.5,P,4),-C*0.12,0.85,-D/2+0.05);let R=U(z,st(0.45,0.6,0.02,v("#5a3a22")),C*0.3,0.82,-D/2+0.06);R.rotation.x=-0.06,U(z,Vt(0.41,0.56,v("#fff",{map:Zp()})),C*0.3,0.82,-D/2+0.072).rotation.x=-0.06;let H=new Ot;U(H,K(0.34,0.15,0.22,v("#5b3a20",{roughness:0.5}),0.02),0,0.075,0),U(H,st(0.35,0.015,0.225,v("#2a1a10")),0,0.1,0),[-1,1].forEach((j)=>U(H,st(0.02,0.03,0.01,v("#c9a34e",{metalness:0.8})),j*0.1,0.12,0.115)),U(z,H,C*0.28,0.5,0.02),U(z,st(0.11,0.14,0.015,v("#1a1a1a")),-C*0.02,0.57,-0.06),U(z,Vt(0.09,0.12,v("#c9b9a0")),-C*0.02,0.57,-0.052);let J=new Ot;U(J,Z(0.04,0.06,0.14,v("#b22")),0,0.07,0),U(J,Rt(0.035,v("#f1d0b5")),0,0.17,0),U(J,Rt(0.03,v("#fff")),0,0.15,0.02),U(J,new ie(new Ys(0.04,0.07,12),v("#b22")),0,0.22,0),U(z,J,C*0.1,0.5,0.03),U(z,K(0.08,0.06,0.08,v("#c9a77a"),0.01),-C*0.12,0.53,0.06);let nt=U(z,Rt(0.1,v("#3b9ad9",{roughness:0.3}),16),C*0.38,N-0.25,-0.02);return nt.scale.y=0.7,z},"cortina-sala"(C,D,N){let z=kt(C,N,"#4a3428"),tt=U(z,new ie(new Wn(0.12,0.03,8,16),v("#4a3428",{roughness:1})),0,1,0.02);return tt.rotation.x=Math.PI/2,z},"quadro-sala"(C,D,N){let z=new Ot;return U(z,st(C,N,0.03,v("#111")),0,N/2,0),U(z,Vt(C-0.02,N-0.02,v("#fff",{map:qp()})),0,N/2,0.016),z},box(C,D,N){let z=new Ot;U(z,st(C,N,0.01,F),0,N/2,D/2),U(z,st(0.01,N,D,F),-C/2+0.01,N/2,0),U(z,st(C,0.03,0.04,ct),0,N,D/2),U(z,st(C,0.02,0.03,ct),0,0.01,D/2),U(z,st(0.03,N,0.03,ct),C/2-0.02,N/2,D/2);{let H=U(z,Z(0.08,0.08,0.03,v("#f2f2f0",{roughness:0.3}),24),-C/2+0.14,2,0);H.rotation.z=-0.5,U(z,$t(Z(0.012,0.012,0.12,w,8),"x"),-C/2+0.06,2.05,0),U(z,K(0.06,0.12,0.04,w,0.01),-C/2+0.03,1.2,0.15)}let tt=new Ot;U(tt,K(0.28,0.03,0.22,v("#3fa7b5"),0.01),0,0.3,0),[-1,1].forEach((H)=>U(tt,st(0.02,0.3,0.2,v("#2a2a2a")),H*0.12,0.15,0)),U(z,tt,C*0.3,0,-D*0.05);let R=new Ot;return U(R,K(0.25,0.02,0.1,v("#fff"),0.005),0,0,0),U(R,Z(0.025,0.025,0.18,v("#f1e3c4"),10),-0.06,0.09,0),U(R,Z(0.02,0.02,0.15,v("#7a5aa8"),10),0.05,0.08,0),U(z,R,C/2-0.14,1.2,-D/2+0.06),U(z,K(C*0.8,0.01,0.3,v("#6f7378",{roughness:1}),0.004),0,0.005,D/2+0.2),U(z,st(C+0.1,N+0.5,0.01,v("#fff",{map:Pl(),roughness:0.25})),0,(N+0.5)/2,-D/2+0.005),z},vaso(C,D){let N=new Ot,z=U(N,Z(0.17,0.13,0.38,ot,24),0,0.19,0.04);z.scale.z=1.3;let tt=U(N,Z(0.19,0.19,0.03,ot,24),0,0.4,0.04);tt.scale.z=1.25,U(N,K(C*0.9,0.36,0.17,ot,0.03),0,0.58,-D/2+0.1),U(N,Z(0.03,0.03,0.01,w,12),0,0.765,-D/2+0.1),[-1,1].forEach((H)=>U(N,Z(0.03,0.035,0.05,v("#e9dcc6"),12),H*C*0.25,0.79,-D/2+0.1));let R=U(N,$t(Z(0.055,0.055,0.1,v("#fff",{roughness:1}),16),"x"),C/2+0.03,0.6,-D/2+0.1);return R.castShadow=!0,U(N,Z(0.1,0.09,0.3,v("#f4f4f2"),16),C/2+0.1,0.15,0.05),N},"pia-banheiro"(C,D,N){let z=new Ot;return U(z,K(C,N-0.12,D-0.06,b,0.01),0,(N-0.12)/2,-0.03),[0.22,0.5].forEach((tt)=>{U(z,st(C-0.02,0.003,0.003,v("#ccc")),0,tt+0.14,D/2-0.055),U(z,K(0.14,0.02,0.02,O,0.008),0,tt,D/2-0.045)}),U(z,K(C*0.95,0.14,D-0.02,ot,0.06),0,N-0.07,0),U(z,st(C*0.6,0.01,D*0.55,v("#e5e8ea",{roughness:0.1})),0,N-0.005,0.03),U(z,Z(0.012,0.012,0.14,w,10),0,N+0.07,-D/2+0.05),U(z,$t(Z(0.009,0.009,0.08,w,8),"z"),0,N+0.14,-D/2+0.09),U(z,K(C*0.9,0.55,0.1,rt,0.01),0,1.6,-D/2+0.02),U(z,K(0.18,0.07,0.06,v("#fff"),0.02),0,1.2,-D/2+0.02),U(z,Z(0.03,0.035,0.16,P,12),C*0.3,N+0.08,-D*0.2),U(z,K(0.1,0.02,0.07,v("#2a2a2a"),0.01),-C*0.3,N+0.01,D*0.1),U(z,st(C+0.2,1.3,0.01,v("#fff",{map:Pl(),roughness:0.25})),0,0.65,-D/2-0.01),z},"mesa-pc"(C,D,N){let z=new Ot;U(z,K(C,0.03,D,P,0.008),0,N,0),[-1,1].forEach((gt)=>{U(z,st(0.05,N,0.05,P),gt*(C/2-0.08),N/2,-D/2+0.1),U(z,st(0.06,0.03,D-0.1,P),gt*(C/2-0.08),0.015,0)}),U(z,K(C*0.78,0.006,0.32,v("#5a1f1f",{roughness:0.9}),0.003),0,N+0.018,0.05);{let It=-D/2+0.12,Dt=new ie(new ni(1.5,1.5,0.345,32,1,!0,Math.PI-0.27,0.54),v("#000",{map:Sa("#2b4a77"),side:Cn,roughness:0.25})),Yt=new ie(new ni(1.52,1.52,0.37,32,1,!0,Math.PI-0.2775,0.555),v("#151517",{side:Cn,roughness:0.5}));[Dt,Yt].forEach((ne)=>U(z,ne,0,N+0.43,It+1.5)),U(z,K(0.16,0.03,0.02,v("#c8102e"),0.01),0,N+0.245,It-0.025)}U(z,st(0.06,0.2,0.04,P),0,N+0.12,-D/2+0.08),U(z,st(0.25,0.01,0.18,P),0,N+0.02,-D/2+0.1),U(z,K(0.12,0.03,0.04,P,0.01),0,N+0.65,-D/2+0.1);let tt=new Ot;U(tt,K(0.38,0.02,0.26,v("#3a3d42"),0.01),0,0.01,0);let R=U(tt,K(0.38,0.25,0.012,v("#3a3d42"),0.006),0,0.13,-0.13);R.rotation.x=-0.25,U(tt,Vt(0.34,0.21,v("#000",{map:Sa("#1f2937")})),0,0.13,-0.123).rotation.x=-0.25,U(tt,st(0.3,0.01,0.2,v("#e65a2f")),0,-0.02,0.02),U(z,tt,-C*0.32,N+0.1,-D/2+0.25),U(z,K(0.44,0.02,0.14,v("#151515"),0.006),0,N+0.03,0.14),U(z,K(0.06,0.03,0.1,v("#151515"),0.02),0.32,N+0.03,0.14);let H=U(z,new ie(new Wn(0.09,0.015,8,16,Math.PI),P),C*0.38,N+0.25,-D/2+0.1);H.rotation.y=Math.PI/2;let J=new Ot;U(J,Z(0.008,0.008,0.5,P,6),0,0.25,0).rotation.z=0.5,U(J,Z(0.03,0.03,0.12,P,12),-0.14,0.45,0).rotation.z=1.2,U(J,Z(0.07,0.07,0.01,v("#111",{transparent:!0,opacity:0.7}),20),-0.05,0.45,0.08).rotation.x=Math.PI/2,U(z,J,C*0.44,N,-D/2+0.06);let nt=new Ot;U(nt,Z(0.008,0.008,1.3,P,6),0,0.65,0),U(nt,new ie(new Wn(0.12,0.015,8,24),v("#fff",{emissive:"#fff",emissiveIntensity:0.4})),0,1.35,0),U(z,nt,-C*0.45,0,-D/2-0.1);let j=v("#111",{roughness:0.9});return[-0.2,0,0.15].forEach((gt)=>U(z,Z(0.004,0.004,N,j,4),gt,N/2,-D/2+0.02)),z},"cadeira-pc"(){let C=new Ot,D=v("#cfd0cd",{roughness:0.8}),N=v("#f2f2f0",{roughness:0.4});for(let tt=0;tt<5;tt++){let R=tt/5*Math.PI*2,H=U(C,st(0.32,0.03,0.04,N),Math.cos(R)*0.16,0.07,Math.sin(R)*0.16);H.rotation.y=-R,U(C,Rt(0.03,N,10),Math.cos(R)*0.3,0.03,Math.sin(R)*0.3)}U(C,Z(0.025,0.025,0.35,w,10),0,0.25,0),U(C,K(0.5,0.08,0.48,D,0.04),0,0.48,0);let z=U(C,K(0.46,0.6,0.06,D,0.05),0,0.85,-0.24);return z.rotation.x=-0.12,U(C,K(0.48,0.62,0.02,N,0.02),0,0.85,-0.28).rotation.x=-0.12,U(C,K(0.3,0.12,0.06,N,0.04),0,1.22,-0.29),U(C,K(0.36,0.14,0.05,v("#e3e3df"),0.04),0,0.72,-0.2),[-1,1].forEach((tt)=>{U(C,K(0.05,0.03,0.26,v("#9a9a96"),0.015),tt*0.27,0.68,-0.02),U(C,st(0.03,0.18,0.03,N),tt*0.27,0.58,-0.1)}),C},puff(C){let D=new Ot;return U(D,Rt(C/2,v("#1d1e22",{roughness:0.5}),24),0,0.2,0).scale.set(1,0.5,1),D},"quadro-branco"(C,D,N){let z=new Ot;U(z,st(C,N,0.02,ct),0,N/2,0),U(z,Vt(C-0.03,N-0.03,v("#fff",{map:Jp(),roughness:0.2})),0,N/2,0.011);let tt=new Ot;U(tt,Z(0.17,0.17,0.03,P,20),0,0.45,0),[0,2.1,4.2].forEach((H)=>U(tt,Z(0.01,0.01,0.45,w,6),Math.cos(H)*0.13,0.22,Math.sin(H)*0.13)),U(tt,K(0.14,0.03,0.05,v("#2a6fd1"),0.01),0,0.48,0),U(z,tt,0,-0.6,0.35);let R=new Ot;return U(R,K(0.35,0.45,0.2,v("#f3f3f3",{roughness:1}),0.03),0,0.22,0),U(R,K(0.3,0.4,0.18,v("#2e2e8a",{roughness:1}),0.03),0.3,0.2,0.05),U(z,R,-C*0.3,-0.6,0.25),z},"guarda-roupa-escritorio"(C,D,N){return Ct(C,D,N,!1)},"guarda-roupa-casal"(C,D,N){return Ct(C,D,N,!0)},cama(C,D){let N=new Ot,z=v("#26262b",{roughness:0.55,map:nr("#26262b",0.08)});U(N,K(C,0.3,D,v("#1f1f22",{roughness:0.9}),0.02),0,0.15,0),U(N,K(C-0.04,0.2,D-0.04,v("#e8e6e1"),0.05),0,0.4,0),U(N,K(C+0.06,0.1,D*0.78,z,0.05),0,0.48,D*0.11),U(N,K(C+0.07,0.32,0.02,z,0.01),0,0.32,D/2+0.01),[-1,1].forEach((nt)=>U(N,K(0.02,0.32,D*0.78,z,0.01),nt*(C/2+0.03),0.32,D*0.11)),U(N,st(C+0.08,0.006,0.006,v("#bbb")),0,0.18,D/2+0.025),[-1,1].forEach((nt)=>{let j=U(N,K(C*0.44,0.14,0.32,v("#33333a",{roughness:0.5}),0.07),nt*C*0.24,0.55,-D/2+0.22);j.rotation.x=-0.35});let tt=(nt,j,gt,xt)=>{U(N,Rt(xt,v(gt,{roughness:1})),nt,0.58+xt*0.8,j),U(N,Rt(xt*0.65,v(gt,{roughness:1})),nt,0.58+xt*2.2,j-0.02)};tt(-0.35,-D/2+0.5,"#f2efe8",0.09),tt(-0.12,-D/2+0.5,"#f2efe8",0.09),tt(0.2,-D/2+0.5,"#5b3a26",0.11),tt(0.1,0.1,"#d6a65a",0.07);let R=U(N,K(0.5,0.06,0.4,v("#c2185b",{roughness:1}),0.03),0.3,0.56,0.05);R.rotation.y=0.4;let H=U(N,K(0.45,0.06,0.35,v("#9aa0aa",{roughness:1}),0.03),0.25,0.56,0.4);H.rotation.y=-0.3;let J=U(N,K(0.4,0.05,0.28,v("#22396b",{roughness:1}),0.02),-0.35,0.55,0.45);return J.rotation.y=0.1,N},"tapete-quarto"(C,D){let N=new Ot;U(N,K(C,0.012,D,v("#2b3550",{map:Vp(),roughness:1}),0.004),0,0.006,0);let z=new Ot;return[-1,1].forEach((tt)=>U(z,K(0.1,0.08,0.28,v("#f5f5f2"),0.03),tt*0.07,0.04,0)),U(N,z,0,0.012,0),N},criado(C,D,N){let z=new Ot;return U(z,K(C,0.3,D,b,0.01),0,N-0.15,0),U(z,st(C-0.04,0.22,0.01,v("#e2ddd0")),0,N-0.15,D/2-0.03),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([tt,R])=>{U(z,Z(0.012,0.008,N-0.3,O,8),tt*(C/2-0.03),(N-0.3)/2,R*(D/2-0.03)).rotation.set(R*0.1,0,-tt*0.1)}),U(z,Z(0.06,0.09,0.22,v("#4a2f22",{roughness:0.4}),16),0,N+0.11,0),U(z,Z(0.09,0.12,0.16,v("#f2ead8",{emissive:"#ffdca0",emissiveIntensity:0.35}),20),0,N+0.3,0),z},"quadro-quarto"(C,D,N){let z=new Ot;return U(z,st(C,N,0.03,v("#1a1a1a")),0,N/2,0),U(z,Vt(C-0.02,N-0.02,v("#fff",{map:Yp()})),0,N/2,0.016),z},"varal-chao"(C,D,N){let z=new Ot,tt=v("#f4f4f2",{roughness:0.4});[-1,1].forEach((R)=>{let H=U(z,Z(0.01,0.01,1.15,tt,8),R*(C/2-0.02),0.5,-D*0.2);H.rotation.x=0.45;let J=U(z,Z(0.01,0.01,1.15,tt,8),R*(C/2-0.02),0.5,D*0.2);J.rotation.x=-0.45});for(let R=0;R<7;R++)U(z,$t(Z(0.006,0.006,C,tt,6),"x"),0,N,-D/2+R*D/6);return["#151515","#1f2c4f","#6b1f2a","#151515","#e9e2d5"].forEach((R,H)=>U(z,Vt(0.34,0.5,v(R,{side:Cn,roughness:1})),-C/2+0.2+H*(C-0.3)/5,N-0.25,-D/2+H%3*D/3+0.05)),z},bike(C){let D=new Ot;D.scale.setScalar(C/1.72);let N=v("#22313f",{roughness:0.4}),z=v("#151515",{roughness:0.9});[-1,1].forEach((R)=>{U(D,new ie(new Wn(0.34,0.03,8,28),z),R*0.5,0.36,0);for(let H=0;H<8;H++){let J=U(D,Z(0.002,0.002,0.66,v("#aaa"),3),R*0.5,0.36,0);J.rotation.z=H*Math.PI/8}});let tt=(R,H,J,nt)=>{let j=Math.hypot(J-R,nt-H),gt=U(D,Z(0.018,0.018,j,N,8),(R+J)/2,(H+nt)/2,0);gt.rotation.z=Math.atan2(R-J,nt-H)};return tt(-0.5,0.36,-0.05,0.4),tt(-0.05,0.4,0.35,0.75),tt(-0.05,0.4,-0.12,0.82),tt(-0.12,0.82,0.35,0.75),tt(0.35,0.75,0.5,0.36),tt(-0.5,0.36,-0.12,0.82),U(D,K(0.2,0.04,0.08,P,0.02),-0.14,0.86,0),U(D,$t(Z(0.012,0.012,0.55,P,8),"z"),0.38,0.86,0),D}},ae=[],Kt=new Map,_t=(C)=>{let D=new rs;return C.forEach(([N,z],tt)=>tt?D.lineTo(e(N),t(z)):D.moveTo(e(N),t(z))),D},Tt=Cl();Tt.wrapS=Tt.wrapT=ts,Tt.repeat.set(0.8333333333333334,0.8333333333333334);let V=(C,D)=>{let N=new $s(_t(C));N.rotateX(Math.PI/2);let z=new ie(N,D);z.receiveShadow=!0,z.userData.piso=!0,z.position.y=0.001,p.add(z),ae.push(z)};V(s,v("#fff",{map:Tt,roughness:0.35,side:Cn}));let zt=Cl();zt.wrapS=zt.wrapT=ts,zt.repeat.set(1.1111111111111112,1.1111111111111112),V(l,v("#e9e2d6",{map:zt,roughness:0.6,side:Cn}));let Gt=new ie(new Js(_t([[46,16],[202,16],[202,106],[332,106],[332,350],[46,350]]),{depth:0.18,bevelEnabled:!1}).rotateX(Math.PI/2),v("#f1efe9",{roughness:0.9}));Gt.receiveShadow=!0,p.add(Gt);let St=new ie(new qs(14,48).rotateX(-Math.PI/2),new oa({opacity:0.12}));St.position.set(Ke.x,-0.18,Ke.z),St.receiveShadow=!0,p.add(St);let Qt=v("#fbfaf7",{roughness:0.92}),Bt=v("#6e6c68",{roughness:0.9}),Wt=v("#ffffff",{roughness:0.4}),G=(C,D,N,z=0,tt=Qt,R=!0)=>{let H=e(C[0]),J=t(C[1]),nt=e(D[0]),j=t(D[1]),gt=Math.hypot(nt-H,j-J)+Ii,xt=-Math.atan2(j-J,nt-H),It=new ie(new Be(gt,1,Ii),tt);It.rotation.y=xt,It.position.set((H+nt)/2,0,(J+j)/2),It.castShadow=It.receiveShadow=!0,p.add(It);let Dt=new ie(new Be(gt+0.002,0.012,Ii+0.002),Bt);Dt.rotation.y=xt,Dt.position.copy(It.position),Dt.visible=R,p.add(Dt);let Yt={corpo:It,topo:Dt,base:z,frente:C[1]>=340&&D[1]>=340,comTopo:R};return L(Yt,N),Yt},L=(C,D)=>{C.corpo.scale.y=D,C.corpo.position.y=C.base+D/2,C.topo.position.y=C.base+D+0.006},it=[];c.forEach((C)=>{for(let D=1;D<C.length;D++){it.push(G(C[D-1],C[D],ii));let N=G(C[D-1],C[D],0.07,0,Wt,!1);N.corpo.scale.z=1.18}});{let[C,D,N,z]=u,tt=G([C+N/2,D],[C+N/2,D+z],ii);tt.corpo.geometry=new Be(n(z)+Ii,1,n(N)),tt.topo.geometry=new Be(n(z)+Ii,0.012,n(N)),it.push(tt)}let pt=[],yt=[],ht=v("#e9eaea",{metalness:0.4,roughness:0.35}),Zt=F.clone(),Pt=[Zt,ht];d.forEach(([C,D])=>{let N=G(C,D,1);N.frente=!1,pt.push(G(C,D,ii-2.1,2.1));let z=G(C,D,1.1,1,Zt,!1);z.corpo.scale.z=0.25,[1,2.07].forEach((H)=>{let J=G(C,D,0.03,H,ht,!1);J.corpo.scale.z=0.5});let tt=[(C[0]+D[0])/2,(C[1]+D[1])/2],R=C[0]===D[0];G(R?[tt[0],tt[1]-0.4]:[tt[0]-0.4,tt[1]],R?[tt[0],tt[1]+0.4]:[tt[0]+0.4,tt[1]],1.07,1,ht,!1)});{let C=G(o[0],o[1],2.1,0,Zt,!1);C.corpo.scale.z=0.25,pt.push(G(o[0],o[1],ii-2.1,2.1)),G(o[0],o[1],0.04,2.07,ht,!1);let D=(o[0][0]+o[1][0])/2;G([D,302.5],[D,305.5],2.1,0,ht,!1)}{let[C,D]=f,N=Math.round((D[0]-C[0])/3.2),z=v("#f2f0ea",{roughness:0.5});for(let R=0;R<=N;R++){let H=Z(0.01,0.01,1.05,z,6);H.position.set(e(C[0]+R*(D[0]-C[0])/N),0.525,t(C[1])-0.02),H.castShadow=!0,p.add(H)}G(C,D,0.05,1.05,z,!1);let tt=G(C,D,1.3,1.1,v("#ffffff",{transparent:!0,opacity:0.1,side:Cn}),!1);tt.corpo.scale.z=0.1,pt.push(tt),[[50,304],[50,346]].forEach(()=>{})}{let C=Xp();C.wrapS=C.wrapT=ts,C.repeat.set(3,1);let D=Vt(1.9,0.62,v("#fff",{map:C,roughness:0.4}));D.position.set(e(110),1.22,t(20)+Ii/2+0.005),p.add(D)}let Nt=(C,D,N,z,tt="#f7f6f2")=>{let R=new Ot,H=v(tt,{roughness:0.5});return Pt.push(H),U(R,K(N,2.1,0.035,H,0.005),N/2,1.05,0),U(R,$t(Z(0.012,0.012,0.12,w,8),"x"),N-0.08,1,0.03),U(R,$t(Z(0.012,0.012,0.12,w,8),"x"),N-0.08,1,-0.03),R.position.set(C,0,D),R.rotation.y=z,dt(R),p.add(R),R},ee=[Nt(e(50),t(160),0.85,1.2,"#efe9df"),Nt(e(216),t(199),0.55,2),Nt(e(221),t(230),0.7,1),Nt(e(200),t(232),0.7,-1.1)],Mt=[],Ft=kt(1.8,2.3,"#a8a9ab");Ft.traverse((C)=>{let D=C;if(D.isMesh)Pt.push(D.material)}),Ft.position.set(e(270),0,t(342)),Mt.push(Ft);let oe=kt(1.4,2.3,"#f3f1ec");oe.traverse((C)=>{let D=C;if(D.isMesh)Pt.push(D.material)}),oe.position.set(e(278),0,t(114)),Mt.push(oe);{let C=new Ot,D=K(0.8,0.02,0.22,v("#2e2a26"),0.01);D.position.y=0.42,D.rotation.z=1.2,C.add(D),[-1,1].forEach((N)=>{let z=Rt(0.03,v("#d6a23a"),8);z.position.set(-0.05+N*0.02,0.06+(N+1)*0.32,0.08),C.add(z)}),C.position.set(e(322),0,t(160)),Mt.push(C)}{let C=new Ot,D=Z(0.17,0.14,0.25,v("#ef8a9c"),18);D.position.y=0.125,D.scale.x=1.6,C.add(D);let N=Z(0.1,0.1,0.1,v("#7a1f3d"),16);N.position.set(0.12,0.2,0),C.add(N),C.position.set(e(150),0,t(208)),Mt.push(C)}for(let C=0;C<6;C++){let D=qt(0.14,0.32+C%3*0.08,4);D.position.set(e(56+C*8),0,t(342.5)),Mt.push(D)}{let C=new Ot,D=Z(0.012,0.012,1.2,v("#d64a6a"),6);D.position.y=0.6,D.rotation.z=0.15,C.add(D);let N=Z(0.12,0.14,0.05,v("#c9c9c9",{roughness:1}),14);N.position.y=0.03,C.add(N),C.position.set(e(178),0,t(310)),Mt.push(C)}{let C=new Ot,D=Z(0.06,0.08,0.22,v("#78c850",{transparent:!0,opacity:0.8}),14);D.position.y=0.11,C.add(D),C.position.set(e(178),0,t(322)),Mt.push(C)}{let C=new Ot,D=st(0.25,0.02,0.1,v("#fff"));D.position.set(0,1.35,0),C.add(D);let N=Z(0.03,0.03,0.16,v("#8d6ad1"),10);N.position.set(0.05,1.44,0),C.add(N);let z=Z(0.003,0.003,0.2,v("#2a7a3a"),4);z.position.set(-0.05,1.2,0),C.add(z),C.position.set(e(51)+0.07,0,t(120)),C.rotation.y=Math.PI/2,Mt.push(C)}{let C=new Ot,D=Vt(1.2,0.9,v("#fff",{transparent:!0,opacity:0}));C.add(D),Mt.push(C)}Mt.forEach((C)=>{dt(C),p.add(C)});let te={"+z":0,"-z":Math.PI,"+x":Math.PI/2,"-x":-Math.PI/2};r.forEach((C)=>{let D=C.face==="+x"||C.face==="-x",N=n(D?C.d:C.w),z=n(D?C.w:C.d),tt=(jt[C.id]||((R,H,J)=>{let nt=new Ot;return U(nt,K(R,J,H,b),0,J/2,0),nt}))(N,z,C.h,C);if(tt.rotation.y=te[C.face||"+z"],tt.position.set(e(C.x)+n(C.w)/2,C.base||0,t(C.y)+n(C.d)/2),dt(tt),C.id.startsWith("tapete"))tt.traverse((R)=>{R.castShadow=!1});tt.traverse((R)=>{let H=R;if(!H.isMesh)return;H.userData.movel=C.id,H.material=H.material.clone(),Kt.set(C.id,[...Kt.get(C.id)||[],H])}),p.add(tt),ae.push(tt)}),Kt.get("cortina-sala")?.forEach((C)=>Pt.push(C.material));let Ht=new Ot;p.add(Ht);let se=new Vn({color:"#e0962e",transparent:!0,opacity:0.38}),ce=new Vs({color:"#c47a12"}),Ee=new tn(new q(0,-1,0),Rl+0.02),et=!0,vt=!1,ft=()=>{},mt=()=>{let C=vt?ii:et?ii:Rl;it.forEach((N)=>L(N,!vt&&et&&N.frente?Gp:C)),pt.forEach((N)=>{N.corpo.visible=C===ii&&!vt,N.topo.visible=N.comTopo&&N.corpo.visible});let D=!vt&&!et?[Ee]:[];Pt.forEach((N)=>{N.clippingPlanes=D,N.needsUpdate=!0}),ee.forEach((N)=>N.visible=!vt),[Ft,oe].forEach((N)=>N.visible=!vt)},At=null,Ut=()=>{},re=new ga,be=new Et,Te=null,fe=h.domElement;fe.addEventListener("pointerdown",(C)=>{Te={x:C.clientX,y:C.clientY,t:Date.now()}}),fe.addEventListener("pointerup",(C)=>{if(!Te||Math.hypot(C.clientX-Te.x,C.clientY-Te.y)>8||Date.now()-Te.t>600){Te=null;return}Te=null;let D=fe.getBoundingClientRect();be.set((C.clientX-D.left)/D.width*2-1,-((C.clientY-D.top)/D.height)*2+1),re.setFromCamera(be,y);let N=(tt)=>{while(tt){if(!tt.visible)return!1;tt=tt.parent}return!0},z=re.intersectObjects([...ae,...it.map((tt)=>tt.corpo)],!0).find((tt)=>N(tt.object)&&!tt.object.material.transparent);if(!z||!(z.object.userData.movel||z.object.userData.piso))return;Ut({movel:z.object.userData.movel,x:z.point.x*40+50,y:z.point.z*40+20})});let qe=null,Ye=()=>{let{clientWidth:C,clientHeight:D}=a;h.setSize(C,D,!1),g.aspect=C/Math.max(1,D),g.updateProjectionMatrix();let N=C/Math.max(1,D),z=Math.max(8.9,7.6/N)/2;Object.assign(_,{left:-z*N,right:z*N,top:z,bottom:-z}),_.updateProjectionMatrix()},Di=new ResizeObserver(Ye);Di.observe(a),Ye();let fn=()=>{let C=Math.max(1,1.12/g.aspect);return{t:Ke.clone().add(new q(0,0,0.2)),p:new q(Ke.x-0.3*C,11.5*C,Ke.z+7.2*C)}},si=fn();g.position.copy(si.p),x.target.copy(si.t),_.position.set(Ke.x,20,Ke.z),_.up.set(0,0,-1),_.lookAt(Ke),M.target.copy(Ke),mt(),h.shadowMap.needsUpdate=!0;let Li=0,Ui=!0,pn=2,sn=()=>{pn=2};x.addEventListener("change",sn),M.addEventListener("change",sn),new ResizeObserver(sn).observe(a);let Xn=()=>{if(!Ui)return;if(At)pn=2;if(At&&!vt){if(x.target.lerp(At.t,0.12),g.position.lerp(At.p,0.12),g.position.distanceTo(At.p)<0.02)At=null}if(At&&vt){if(M.target.lerp(At.t,0.15),_.position.lerp(new q(At.t.x,20,At.t.z),0.15),_.zoom+=(At.p.y-_.zoom)*0.15,_.updateProjectionMatrix(),Math.abs(_.zoom-At.p.y)<0.01)At=null}if(S.update())pn=2;if(pn>0)pn--,h.render(p,y),ft();Li=requestAnimationFrame(Xn)};return Xn(),{focar(C){let D=i.find((R)=>R.id===C);if(vt){At={t:D?new q(e(D.x+D.w/2),0,t(D.y+D.h/2)):Ke.clone(),p:new q(0,D?Math.min(3.2,7/Math.max(n(D.w),n(D.h),1.6)):1,0)};return}if(!D){At=fn();return}let N=new q(e(D.x+D.w/2),0,t(D.y+D.h/2)),z=Math.max(n(D.w),n(D.h),1.8),tt=Math.max(1,0.9/g.aspect);At={t:N,p:N.clone().add(new q(z*0.3*tt,(3.2+z*1.7)*tt,(2.2+z*1.4)*tt))}},selecionar(C){if(qe)Kt.get(qe)?.forEach((D)=>D.material.emissive?.setHex(0));if(qe=C,C)Kt.get(C)?.forEach((D)=>D.material.emissive?.setHex(6961664));sn()},topo(C){let D=Kt.get(C);if(!D?.length)return null;let N=new kn;D.forEach((tt)=>N.expandByObject(tt));let z=N.getCenter(new q);return{x:z.x,y:Math.min(N.max.y,2.3),z:z.z}},onToque(C){Ut=C},modo(C){vt=C,At=null,y=C?_:g,S=C?M:x,M.enabled=C,x.enabled=!C,E.castShadow=!C,mt(),h.shadowMap.needsUpdate=!0,sn()},paredes(C){et=C,mt(),h.shadowMap.needsUpdate=!0,sn()},fantasmas(C){Ht.clear(),C.forEach((D)=>{let N=new Be(D.l,D.a,D.p),z=new ie(N,se);z.position.set(D.x,D.a/2+0.005,D.z);let tt=new Qr(new aa(N),ce);tt.position.copy(z.position),Ht.add(z,tt)}),sn()},projetar(C,D,N){let z=new q(C,D,N).project(y);return{x:(z.x+1)/2*a.clientWidth,y:(1-z.y)/2*a.clientHeight,ok:z.z<1}},onMudou(C){ft=C,sn()},destruir(){Ui=!1,cancelAnimationFrame(Li),Di.disconnect(),x.dispose(),M.dispose(),m.dispose(),h.dispose(),p.traverse((C)=>{C.geometry?.dispose()}),h.domElement.remove()}}}export{om as criarCena};
