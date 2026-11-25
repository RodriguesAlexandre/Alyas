import{i,e,t,n,l,c,u,d,s,o,f,r}from"./main-t813fqm1.js";var Hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Yl=1,Ja=2;var Zl=1,Pn=2;var Jl=4;var Vs=1000;var $a="srgb";class yi{addEventListener(a,h){if(this._listeners===void 0)this._listeners={};let p=this._listeners;if(p[a]===void 0)p[a]=[];if(p[a].indexOf(h)===-1)p[a].push(h)}hasEventListener(a,h){if(this._listeners===void 0)return!1;let p=this._listeners;return p[a]!==void 0&&p[a].indexOf(h)!==-1}removeEventListener(a,h){if(this._listeners===void 0)return;let m=this._listeners[a];if(m!==void 0){let g=m.indexOf(h);if(g!==-1)m.splice(g,1)}}dispatchEvent(a){if(this._listeners===void 0)return;let p=this._listeners[a.type];if(p!==void 0){a.target=this;let m=p.slice(0);for(let g=0,_=m.length;g<_;g++)m[g].call(this,a);a.target=null}}}var an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ko=1234567,os=Math.PI/180,cs=180/Math.PI;function Fi(){let a=Math.random()*4294967295|0,h=Math.random()*4294967295|0,p=Math.random()*4294967295|0,m=Math.random()*4294967295|0;return(an[a&255]+an[a>>8&255]+an[a>>16&255]+an[a>>24&255]+"-"+an[h&255]+an[h>>8&255]+"-"+an[h>>16&15|64]+an[h>>24&255]+"-"+an[p&63|128]+an[p>>8&255]+"-"+an[p>>16&255]+an[p>>24&255]+an[m&255]+an[m>>8&255]+an[m>>16&255]+an[m>>24&255]).toLowerCase()}function Ye(a,h,p){return Math.max(h,Math.min(p,a))}function Ka(a,h){return(a%h+h)%h}function Qc(a,h,p,m,g){return m+(a-h)*(g-m)/(p-h)}function th(a,h,p){if(a!==h)return(p-a)/(h-a);else return 0}function Fs(a,h,p){return(1-p)*a+p*h}function eh(a,h,p,m){return Fs(a,h,1-Math.exp(-p*m))}function nh(a,h=1){return h-Math.abs(Ka(a,h*2)-h)}function ih(a,h,p){if(a<=h)return 0;if(a>=p)return 1;return a=(a-h)/(p-h),a*a*(3-2*a)}function sh(a,h,p){if(a<=h)return 0;if(a>=p)return 1;return a=(a-h)/(p-h),a*a*a*(a*(a*6-15)+10)}function rh(a,h){return a+Math.floor(Math.random()*(h-a+1))}function ah(a,h){return a+Math.random()*(h-a)}function oh(a){return a*(0.5-Math.random())}function lh(a){if(a!==void 0)ko=a;let h=ko+=1831565813;return h=Math.imul(h^h>>>15,h|1),h^=h+Math.imul(h^h>>>7,h|61),((h^h>>>14)>>>0)/4294967296}function ch(a){return a*os}function hh(a){return a*cs}function uh(a){return(a&a-1)===0&&a!==0}function dh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function fh(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ph(a,h,p,m,g){let{cos:_,sin:y}=Math,x=_(p/2),M=y(p/2),S=_((h+m)/2),b=y((h+m)/2),v=_((h-m)/2),T=y((h-m)/2),C=_((m-h)/2),I=y((m-h)/2);switch(g){case"XYX":a.set(x*b,M*v,M*T,x*S);break;case"YZY":a.set(M*T,x*b,M*v,x*S);break;case"ZXZ":a.set(M*v,M*T,x*b,x*S);break;case"XZX":a.set(x*b,M*I,M*C,x*S);break;case"YXY":a.set(M*C,x*b,M*I,x*S);break;case"ZYZ":a.set(M*I,M*C,x*b,x*S);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+g)}}function ss(a,h){switch(h.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw Error("Invalid component type.")}}function un(a,h){switch(h.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw Error("Invalid component type.")}}var $l={DEG2RAD:os,RAD2DEG:cs,generateUUID:Fi,clamp:Ye,euclideanModulo:Ka,mapLinear:Qc,inverseLerp:th,lerp:Fs,damp:eh,pingpong:nh,smoothstep:ih,smootherstep:sh,randInt:rh,randFloat:ah,randFloatSpread:oh,seededRandom:lh,degToRad:ch,radToDeg:hh,isPowerOfTwo:uh,ceilPowerOfTwo:dh,floorPowerOfTwo:fh,setQuaternionFromProperEuler:ph,normalize:un,denormalize:ss};class Et{constructor(a=0,h=0){Et.prototype.isVector2=!0,this.x=a,this.y=h}get width(){return this.x}set width(a){this.x=a}get height(){return this.y}set height(a){this.y=a}set(a,h){return this.x=a,this.y=h,this}setScalar(a){return this.x=a,this.y=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y)}copy(a){return this.x=a.x,this.y=a.y,this}add(a){return this.x+=a.x,this.y+=a.y,this}addScalar(a){return this.x+=a,this.y+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this}subScalar(a){return this.x-=a,this.y-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this}multiply(a){return this.x*=a.x,this.y*=a.y,this}multiplyScalar(a){return this.x*=a,this.y*=a,this}divide(a){return this.x/=a.x,this.y/=a.y,this}divideScalar(a){return this.multiplyScalar(1/a)}applyMatrix3(a){let h=this.x,p=this.y,m=a.elements;return this.x=m[0]*h+m[3]*p+m[6],this.y=m[1]*h+m[4]*p+m[7],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(a){return this.x*a.x+this.y*a.y}cross(a){return this.x*a.y-this.y*a.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(a){let h=Math.sqrt(this.lengthSq()*a.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(a)/h;return Math.acos(Ye(p,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){let h=this.x-a.x,p=this.y-a.y;return h*h+p*p}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this}equals(a){return a.x===this.x&&a.y===this.y}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this}rotateAround(a,h){let p=Math.cos(h),m=Math.sin(h),g=this.x-a.x,_=this.y-a.y;return this.x=g*p-_*m+a.x,this.y=g*m+_*p+a.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(a,h,p,m,g,_,y,x,M){if(_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],a!==void 0)this.set(a,h,p,m,g,_,y,x,M)}set(a,h,p,m,g,_,y,x,M){let S=this.elements;return S[0]=a,S[1]=m,S[2]=y,S[3]=h,S[4]=g,S[5]=x,S[6]=p,S[7]=_,S[8]=M,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(a){let h=this.elements,p=a.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],this}extractBasis(a,h,p){return a.setFromMatrix3Column(this,0),h.setFromMatrix3Column(this,1),p.setFromMatrix3Column(this,2),this}setFromMatrix4(a){let h=a.elements;return this.set(h[0],h[4],h[8],h[1],h[5],h[9],h[2],h[6],h[10]),this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,h){let p=a.elements,m=h.elements,g=this.elements,_=p[0],y=p[3],x=p[6],M=p[1],S=p[4],b=p[7],v=p[2],T=p[5],C=p[8],I=m[0],D=m[3],w=m[6],A=m[1],G=m[4],F=m[7],H=m[2],rt=m[5],q=m[8];return g[0]=_*I+y*A+x*H,g[3]=_*D+y*G+x*rt,g[6]=_*w+y*F+x*q,g[1]=M*I+S*A+b*H,g[4]=M*D+S*G+b*rt,g[7]=M*w+S*F+b*q,g[2]=v*I+T*A+C*H,g[5]=v*D+T*G+C*rt,g[8]=v*w+T*F+C*q,this}multiplyScalar(a){let h=this.elements;return h[0]*=a,h[3]*=a,h[6]*=a,h[1]*=a,h[4]*=a,h[7]*=a,h[2]*=a,h[5]*=a,h[8]*=a,this}determinant(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8];return h*_*S-h*y*M-p*g*S+p*y*x+m*g*M-m*_*x}invert(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8],b=S*_-y*M,v=y*x-S*g,T=M*g-_*x,C=h*b+p*v+m*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/C;return a[0]=b*I,a[1]=(m*M-S*p)*I,a[2]=(y*p-m*_)*I,a[3]=v*I,a[4]=(S*h-m*x)*I,a[5]=(m*g-y*h)*I,a[6]=T*I,a[7]=(p*x-M*h)*I,a[8]=(_*h-p*g)*I,this}transpose(){let a,h=this.elements;return a=h[1],h[1]=h[3],h[3]=a,a=h[2],h[2]=h[6],h[6]=a,a=h[5],h[5]=h[7],h[7]=a,this}getNormalMatrix(a){return this.setFromMatrix4(a).invert().transpose()}transposeIntoArray(a){let h=this.elements;return a[0]=h[0],a[1]=h[3],a[2]=h[6],a[3]=h[1],a[4]=h[4],a[5]=h[7],a[6]=h[2],a[7]=h[5],a[8]=h[8],this}setUvTransform(a,h,p,m,g,_,y){let x=Math.cos(g),M=Math.sin(g);return this.set(p*x,p*M,-p*(x*_+M*y)+_+a,-m*M,m*x,-m*(-M*_+x*y)+y+h,0,0,1),this}scale(a,h){return this.premultiply(ca.makeScale(a,h)),this}rotate(a){return this.premultiply(ca.makeRotation(-a)),this}translate(a,h){return this.premultiply(ca.makeTranslation(a,h)),this}makeTranslation(a,h){if(a.isVector2)this.set(1,0,a.x,0,1,a.y,0,0,1);else this.set(1,0,a,0,1,h,0,0,1);return this}makeRotation(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,-p,0,p,h,0,0,0,1),this}makeScale(a,h){return this.set(a,0,0,0,h,0,0,0,1),this}equals(a){let h=this.elements,p=a.elements;for(let m=0;m<9;m++)if(h[m]!==p[m])return!1;return!0}fromArray(a,h=0){for(let p=0;p<9;p++)this.elements[p]=a[p+h];return this}toArray(a=[],h=0){let p=this.elements;return a[h]=p[0],a[h+1]=p[1],a[h+2]=p[2],a[h+3]=p[3],a[h+4]=p[4],a[h+5]=p[5],a[h+6]=p[6],a[h+7]=p[7],a[h+8]=p[8],a}clone(){return new this.constructor().fromArray(this.elements)}}var ca=new _e;function Kl(a){for(let h=a.length-1;h>=0;--h)if(a[h]>=65535)return!0;return!1}function Br(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function mh(){let a=Br("canvas");return a.style.display="block",a}var Go={};function Us(a){if(a in Go)return;Go[a]=!0,console.warn(a)}function gh(a,h,p){return new Promise(function(m,g){function _(){switch(a.clientWaitSync(h,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:g();break;case a.TIMEOUT_EXPIRED:setTimeout(_,p);break;default:m()}}setTimeout(_,p)})}function _h(a){let h=a.elements;h[2]=0.5*h[2]+0.5*h[3],h[6]=0.5*h[6]+0.5*h[7],h[10]=0.5*h[10]+0.5*h[11],h[14]=0.5*h[14]+0.5*h[15]}function xh(a){let h=a.elements;if(h[11]===-1)h[10]=-h[10]-1,h[14]=-h[14];else h[10]=-h[10],h[14]=-h[14]+1}var Ae={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(a,h,p){if(this.enabled===!1||h===p||!h||!p)return a;if(this.spaces[h].transfer==="srgb")a.r=si(a.r),a.g=si(a.g),a.b=si(a.b);if(this.spaces[h].primaries!==this.spaces[p].primaries)a.applyMatrix3(this.spaces[h].toXYZ),a.applyMatrix3(this.spaces[p].fromXYZ);if(this.spaces[p].transfer==="srgb")a.r=ls(a.r),a.g=ls(a.g),a.b=ls(a.b);return a},fromWorkingColorSpace:function(a,h){return this.convert(a,this.workingColorSpace,h)},toWorkingColorSpace:function(a,h){return this.convert(a,h,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){if(a==="")return"linear";return this.spaces[a].transfer},getLuminanceCoefficients:function(a,h=this.workingColorSpace){return a.fromArray(this.spaces[h].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,h,p){return a.copy(this.spaces[h].toXYZ).multiply(this.spaces[p].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function si(a){return a<0.04045?a*0.0773993808:Math.pow(a*0.9478672986+0.0521327014,2.4)}function ls(a){return a<0.0031308?a*12.92:1.055*Math.pow(a,0.41666)-0.055}var Wo=[0.64,0.33,0.3,0.6,0.15,0.06],Vo=[0.2126,0.7152,0.0722],Xo=[0.3127,0.329],qo=new _e().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Yo=new _e().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);Ae.define({["srgb-linear"]:{primaries:Wo,whitePoint:Xo,transfer:"linear",toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:Vo,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Wo,whitePoint:Xo,transfer:"srgb",toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:Vo,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}});var Vi;class jl{static getDataURL(a){if(/^data:/i.test(a.src))return a.src;if(typeof HTMLCanvasElement>"u")return a.src;let h;if(a instanceof HTMLCanvasElement)h=a;else{if(Vi===void 0)Vi=Br("canvas");Vi.width=a.width,Vi.height=a.height;let p=Vi.getContext("2d");if(a instanceof ImageData)p.putImageData(a,0,0);else p.drawImage(a,0,0,a.width,a.height);h=Vi}if(h.width>2048||h.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",a),h.toDataURL("image/jpeg",0.6);else return h.toDataURL("image/png")}static sRGBToLinear(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap){let h=Br("canvas");h.width=a.width,h.height=a.height;let p=h.getContext("2d");p.drawImage(a,0,0,a.width,a.height);let m=p.getImageData(0,0,a.width,a.height),g=m.data;for(let _=0;_<g.length;_++)g[_]=si(g[_]/255)*255;return p.putImageData(m,0,0),h}else if(a.data){let h=a.data.slice(0);for(let p=0;p<h.length;p++)if(h instanceof Uint8Array||h instanceof Uint8ClampedArray)h[p]=Math.floor(si(h[p]/255)*255);else h[p]=si(h[p]);return{data:h,width:a.width,height:a.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),a}}var yh=0;class ja{constructor(a=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Fi(),this.data=a,this.dataReady=!0,this.version=0}set needsUpdate(a){if(a===!0)this.version++}toJSON(a){let h=a===void 0||typeof a==="string";if(!h&&a.images[this.uuid]!==void 0)return a.images[this.uuid];let p={uuid:this.uuid,url:""},m=this.data;if(m!==null){let g;if(Array.isArray(m)){g=[];for(let _=0,y=m.length;_<y;_++)if(m[_].isDataTexture)g.push(ha(m[_].image));else g.push(ha(m[_]))}else g=ha(m);p.url=g}if(!h)a.images[this.uuid]=p;return p}}function ha(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap)return jl.getDataURL(a);else if(a.data)return{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var vh=0;class cn extends yi{constructor(a=cn.DEFAULT_IMAGE,h=cn.DEFAULT_MAPPING,p=1001,m=1001,g=1006,_=1008,y=1023,x=1009,M=cn.DEFAULT_ANISOTROPY,S=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Fi(),this.name="",this.source=new ja(a),this.mipmaps=[],this.mapping=h,this.channel=0,this.wrapS=p,this.wrapT=m,this.magFilter=g,this.minFilter=_,this.anisotropy=M,this.format=y,this.internalFormat=null,this.type=x,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(a=null){this.source.data=a}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(a){return this.name=a.name,this.source=a.source,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.channel=a.channel,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.internalFormat=a.internalFormat,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.center.copy(a.center),this.rotation=a.rotation,this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrix.copy(a.matrix),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.colorSpace=a.colorSpace,this.userData=JSON.parse(JSON.stringify(a.userData)),this.needsUpdate=!0,this}toJSON(a){let h=a===void 0||typeof a==="string";if(!h&&a.textures[this.uuid]!==void 0)return a.textures[this.uuid];let p={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(a).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)p.userData=this.userData;if(!h)a.textures[this.uuid]=p;return p}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(a){if(this.mapping!==300)return a;if(a.applyMatrix3(this.matrix),a.x<0||a.x>1)switch(this.wrapS){case 1000:a.x=a.x-Math.floor(a.x);break;case 1001:a.x=a.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(a.x)%2)===1)a.x=Math.ceil(a.x)-a.x;else a.x=a.x-Math.floor(a.x);break}if(a.y<0||a.y>1)switch(this.wrapT){case 1000:a.y=a.y-Math.floor(a.y);break;case 1001:a.y=a.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(a.y)%2)===1)a.y=Math.ceil(a.y)-a.y;else a.y=a.y-Math.floor(a.y);break}if(this.flipY)a.y=1-a.y;return a}set needsUpdate(a){if(a===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(a){if(a===!0)this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=300;cn.DEFAULT_ANISOTROPY=1;class Ne{constructor(a=0,h=0,p=0,m=1){Ne.prototype.isVector4=!0,this.x=a,this.y=h,this.z=p,this.w=m}get width(){return this.z}set width(a){this.z=a}get height(){return this.w}set height(a){this.w=a}set(a,h,p,m){return this.x=a,this.y=h,this.z=p,this.w=m,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this.w=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setW(a){return this.w=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;case 3:this.w=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w!==void 0?a.w:1,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this.z=a.z+h.z,this.w=a.w+h.w,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this.z+=a.z*h,this.w+=a.w*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this.z=a.z-h.z,this.w=a.w-h.w,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this.w*=a.w,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this.w*=a,this}applyMatrix4(a){let h=this.x,p=this.y,m=this.z,g=this.w,_=a.elements;return this.x=_[0]*h+_[4]*p+_[8]*m+_[12]*g,this.y=_[1]*h+_[5]*p+_[9]*m+_[13]*g,this.z=_[2]*h+_[6]*p+_[10]*m+_[14]*g,this.w=_[3]*h+_[7]*p+_[11]*m+_[15]*g,this}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this.w/=a.w,this}divideScalar(a){return this.multiplyScalar(1/a)}setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);let h=Math.sqrt(1-a.w*a.w);if(h<0.0001)this.x=1,this.y=0,this.z=0;else this.x=a.x/h,this.y=a.y/h,this.z=a.z/h;return this}setAxisAngleFromRotationMatrix(a){let h,p,m,g,_=0.01,y=0.1,x=a.elements,M=x[0],S=x[4],b=x[8],v=x[1],T=x[5],C=x[9],I=x[2],D=x[6],w=x[10];if(Math.abs(S-v)<0.01&&Math.abs(b-I)<0.01&&Math.abs(C-D)<0.01){if(Math.abs(S+v)<0.1&&Math.abs(b+I)<0.1&&Math.abs(C+D)<0.1&&Math.abs(M+T+w-3)<0.1)return this.set(1,0,0,0),this;h=Math.PI;let G=(M+1)/2,F=(T+1)/2,H=(w+1)/2,rt=(S+v)/4,q=(b+I)/4,Y=(C+D)/4;if(G>F&&G>H)if(G<0.01)p=0,m=0.707106781,g=0.707106781;else p=Math.sqrt(G),m=rt/p,g=q/p;else if(F>H)if(F<0.01)p=0.707106781,m=0,g=0.707106781;else m=Math.sqrt(F),p=rt/m,g=Y/m;else if(H<0.01)p=0.707106781,m=0.707106781,g=0;else g=Math.sqrt(H),p=q/g,m=Y/g;return this.set(p,m,g,h),this}let A=Math.sqrt((D-C)*(D-C)+(b-I)*(b-I)+(v-S)*(v-S));if(Math.abs(A)<0.001)A=1;return this.x=(D-C)/A,this.y=(b-I)/A,this.z=(v-S)/A,this.w=Math.acos((M+T+w-1)/2),this}setFromMatrixPosition(a){let h=a.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this.w=h[15],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this.z=Math.max(a.z,Math.min(h.z,this.z)),this.w=Math.max(a.w,Math.min(h.w,this.w)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this.z=Math.max(a,Math.min(h,this.z)),this.w=Math.max(a,Math.min(h,this.w)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this.z+=(a.z-this.z)*h,this.w+=(a.w-this.w)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this.z=a.z+(h.z-a.z)*p,this.w=a.w+(h.w-a.w)*p,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this.z=a[h+2],this.w=a[h+3],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a[h+2]=this.z,a[h+3]=this.w,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this.z=a.getZ(h),this.w=a.getW(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ql extends yi{constructor(a=1,h=1,p={}){super();this.isRenderTarget=!0,this.width=a,this.height=h,this.depth=1,this.scissor=new Ne(0,0,a,h),this.scissorTest=!1,this.viewport=new Ne(0,0,a,h);let m={width:a,height:h,depth:1};p=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},p);let g=new cn(m,p.mapping,p.wrapS,p.wrapT,p.magFilter,p.minFilter,p.format,p.type,p.anisotropy,p.colorSpace);g.flipY=!1,g.generateMipmaps=p.generateMipmaps,g.internalFormat=p.internalFormat,this.textures=[];let _=p.count;for(let y=0;y<_;y++)this.textures[y]=g.clone(),this.textures[y].isRenderTargetTexture=!0;this.depthBuffer=p.depthBuffer,this.stencilBuffer=p.stencilBuffer,this.resolveDepthBuffer=p.resolveDepthBuffer,this.resolveStencilBuffer=p.resolveStencilBuffer,this.depthTexture=p.depthTexture,this.samples=p.samples}get texture(){return this.textures[0]}set texture(a){this.textures[0]=a}setSize(a,h,p=1){if(this.width!==a||this.height!==h||this.depth!==p){this.width=a,this.height=h,this.depth=p;for(let m=0,g=this.textures.length;m<g;m++)this.textures[m].image.width=a,this.textures[m].image.height=h,this.textures[m].image.depth=p;this.dispose()}this.viewport.set(0,0,a,h),this.scissor.set(0,0,a,h)}clone(){return new this.constructor().copy(this)}copy(a){this.width=a.width,this.height=a.height,this.depth=a.depth,this.scissor.copy(a.scissor),this.scissorTest=a.scissorTest,this.viewport.copy(a.viewport),this.textures.length=0;for(let p=0,m=a.textures.length;p<m;p++)this.textures[p]=a.textures[p].clone(),this.textures[p].isRenderTargetTexture=!0;let h=Object.assign({},a.texture.image);if(this.texture.source=new ja(h),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,a.depthTexture!==null)this.depthTexture=a.depthTexture.clone();return this.samples=a.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Ql{constructor(a=1,h=1,p={}){super(a,h,p);this.isWebGLRenderTarget=!0}}class Qa extends cn{constructor(a=null,h=1,p=1,m=1){super(null);this.isDataArrayTexture=!0,this.image={data:a,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(a){this.layerUpdates.add(a)}clearLayerUpdates(){this.layerUpdates.clear()}}class tc extends cn{constructor(a=null,h=1,p=1,m=1){super(null);this.isData3DTexture=!0,this.image={data:a,width:h,height:p,depth:m},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(a=0,h=0,p=0,m=1){this.isQuaternion=!0,this._x=a,this._y=h,this._z=p,this._w=m}static slerpFlat(a,h,p,m,g,_,y){let x=p[m+0],M=p[m+1],S=p[m+2],b=p[m+3],v=g[_+0],T=g[_+1],C=g[_+2],I=g[_+3];if(y===0){a[h+0]=x,a[h+1]=M,a[h+2]=S,a[h+3]=b;return}if(y===1){a[h+0]=v,a[h+1]=T,a[h+2]=C,a[h+3]=I;return}if(b!==I||x!==v||M!==T||S!==C){let D=1-y,w=x*v+M*T+S*C+b*I,A=w>=0?1:-1,G=1-w*w;if(G>Number.EPSILON){let H=Math.sqrt(G),rt=Math.atan2(H,w*A);D=Math.sin(D*rt)/H,y=Math.sin(y*rt)/H}let F=y*A;if(x=x*D+v*F,M=M*D+T*F,S=S*D+C*F,b=b*D+I*F,D===1-y){let H=1/Math.sqrt(x*x+M*M+S*S+b*b);x*=H,M*=H,S*=H,b*=H}}a[h]=x,a[h+1]=M,a[h+2]=S,a[h+3]=b}static multiplyQuaternionsFlat(a,h,p,m,g,_){let y=p[m],x=p[m+1],M=p[m+2],S=p[m+3],b=g[_],v=g[_+1],T=g[_+2],C=g[_+3];return a[h]=y*C+S*b+x*T-M*v,a[h+1]=x*C+S*v+M*b-y*T,a[h+2]=M*C+S*T+y*v-x*b,a[h+3]=S*C-y*b-x*v-M*T,a}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get w(){return this._w}set w(a){this._w=a,this._onChangeCallback()}set(a,h,p,m){return this._x=a,this._y=h,this._z=p,this._w=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this._onChangeCallback(),this}setFromEuler(a,h=!0){let{_x:p,_y:m,_z:g,_order:_}=a,{cos:y,sin:x}=Math,M=y(p/2),S=y(m/2),b=y(g/2),v=x(p/2),T=x(m/2),C=x(g/2);switch(_){case"XYZ":this._x=v*S*b+M*T*C,this._y=M*T*b-v*S*C,this._z=M*S*C+v*T*b,this._w=M*S*b-v*T*C;break;case"YXZ":this._x=v*S*b+M*T*C,this._y=M*T*b-v*S*C,this._z=M*S*C-v*T*b,this._w=M*S*b+v*T*C;break;case"ZXY":this._x=v*S*b-M*T*C,this._y=M*T*b+v*S*C,this._z=M*S*C+v*T*b,this._w=M*S*b-v*T*C;break;case"ZYX":this._x=v*S*b-M*T*C,this._y=M*T*b+v*S*C,this._z=M*S*C-v*T*b,this._w=M*S*b+v*T*C;break;case"YZX":this._x=v*S*b+M*T*C,this._y=M*T*b+v*S*C,this._z=M*S*C-v*T*b,this._w=M*S*b-v*T*C;break;case"XZY":this._x=v*S*b-M*T*C,this._y=M*T*b-v*S*C,this._z=M*S*C+v*T*b,this._w=M*S*b+v*T*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+_)}if(h===!0)this._onChangeCallback();return this}setFromAxisAngle(a,h){let p=h/2,m=Math.sin(p);return this._x=a.x*m,this._y=a.y*m,this._z=a.z*m,this._w=Math.cos(p),this._onChangeCallback(),this}setFromRotationMatrix(a){let h=a.elements,p=h[0],m=h[4],g=h[8],_=h[1],y=h[5],x=h[9],M=h[2],S=h[6],b=h[10],v=p+y+b;if(v>0){let T=0.5/Math.sqrt(v+1);this._w=0.25/T,this._x=(S-x)*T,this._y=(g-M)*T,this._z=(_-m)*T}else if(p>y&&p>b){let T=2*Math.sqrt(1+p-y-b);this._w=(S-x)/T,this._x=0.25*T,this._y=(m+_)/T,this._z=(g+M)/T}else if(y>b){let T=2*Math.sqrt(1+y-p-b);this._w=(g-M)/T,this._x=(m+_)/T,this._y=0.25*T,this._z=(x+S)/T}else{let T=2*Math.sqrt(1+b-p-y);this._w=(_-m)/T,this._x=(g+M)/T,this._y=(x+S)/T,this._z=0.25*T}return this._onChangeCallback(),this}setFromUnitVectors(a,h){let p=a.dot(h)+1;if(p<Number.EPSILON)if(p=0,Math.abs(a.x)>Math.abs(a.z))this._x=-a.y,this._y=a.x,this._z=0,this._w=p;else this._x=0,this._y=-a.z,this._z=a.y,this._w=p;else this._x=a.y*h.z-a.z*h.y,this._y=a.z*h.x-a.x*h.z,this._z=a.x*h.y-a.y*h.x,this._w=p;return this.normalize()}angleTo(a){return 2*Math.acos(Math.abs(Ye(this.dot(a),-1,1)))}rotateTowards(a,h){let p=this.angleTo(a);if(p===0)return this;let m=Math.min(1,h/p);return this.slerp(a,m),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let a=this.length();if(a===0)this._x=0,this._y=0,this._z=0,this._w=1;else a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a;return this._onChangeCallback(),this}multiply(a){return this.multiplyQuaternions(this,a)}premultiply(a){return this.multiplyQuaternions(a,this)}multiplyQuaternions(a,h){let{_x:p,_y:m,_z:g,_w:_}=a,{_x:y,_y:x,_z:M,_w:S}=h;return this._x=p*S+_*y+m*M-g*x,this._y=m*S+_*x+g*y-p*M,this._z=g*S+_*M+p*x-m*y,this._w=_*S-p*y-m*x-g*M,this._onChangeCallback(),this}slerp(a,h){if(h===0)return this;if(h===1)return this.copy(a);let p=this._x,m=this._y,g=this._z,_=this._w,y=_*a._w+p*a._x+m*a._y+g*a._z;if(y<0)this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,y=-y;else this.copy(a);if(y>=1)return this._w=_,this._x=p,this._y=m,this._z=g,this;let x=1-y*y;if(x<=Number.EPSILON){let T=1-h;return this._w=T*_+h*this._w,this._x=T*p+h*this._x,this._y=T*m+h*this._y,this._z=T*g+h*this._z,this.normalize(),this}let M=Math.sqrt(x),S=Math.atan2(M,y),b=Math.sin((1-h)*S)/M,v=Math.sin(h*S)/M;return this._w=_*b+this._w*v,this._x=p*b+this._x*v,this._y=m*b+this._y*v,this._z=g*b+this._z*v,this._onChangeCallback(),this}slerpQuaternions(a,h,p){return this.copy(a).slerp(h,p)}random(){let a=2*Math.PI*Math.random(),h=2*Math.PI*Math.random(),p=Math.random(),m=Math.sqrt(1-p),g=Math.sqrt(p);return this.set(m*Math.sin(a),m*Math.cos(a),g*Math.sin(h),g*Math.cos(h))}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w}fromArray(a,h=0){return this._x=a[h],this._y=a[h+1],this._z=a[h+2],this._w=a[h+3],this._onChangeCallback(),this}toArray(a=[],h=0){return a[h]=this._x,a[h+1]=this._y,a[h+2]=this._z,a[h+3]=this._w,a}fromBufferAttribute(a,h){return this._x=a.getX(h),this._y=a.getY(h),this._z=a.getZ(h),this._w=a.getW(h),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(a=0,h=0,p=0){X.prototype.isVector3=!0,this.x=a,this.y=h,this.z=p}set(a,h,p){if(p===void 0)p=this.z;return this.x=a,this.y=h,this.z=p,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setComponent(a,h){switch(a){case 0:this.x=h;break;case 1:this.y=h;break;case 2:this.z=h;break;default:throw Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this}addVectors(a,h){return this.x=a.x+h.x,this.y=a.y+h.y,this.z=a.z+h.z,this}addScaledVector(a,h){return this.x+=a.x*h,this.y+=a.y*h,this.z+=a.z*h,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this}subVectors(a,h){return this.x=a.x-h.x,this.y=a.y-h.y,this.z=a.z-h.z,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this}multiplyVectors(a,h){return this.x=a.x*h.x,this.y=a.y*h.y,this.z=a.z*h.z,this}applyEuler(a){return this.applyQuaternion(Zo.setFromEuler(a))}applyAxisAngle(a,h){return this.applyQuaternion(Zo.setFromAxisAngle(a,h))}applyMatrix3(a){let h=this.x,p=this.y,m=this.z,g=a.elements;return this.x=g[0]*h+g[3]*p+g[6]*m,this.y=g[1]*h+g[4]*p+g[7]*m,this.z=g[2]*h+g[5]*p+g[8]*m,this}applyNormalMatrix(a){return this.applyMatrix3(a).normalize()}applyMatrix4(a){let h=this.x,p=this.y,m=this.z,g=a.elements,_=1/(g[3]*h+g[7]*p+g[11]*m+g[15]);return this.x=(g[0]*h+g[4]*p+g[8]*m+g[12])*_,this.y=(g[1]*h+g[5]*p+g[9]*m+g[13])*_,this.z=(g[2]*h+g[6]*p+g[10]*m+g[14])*_,this}applyQuaternion(a){let h=this.x,p=this.y,m=this.z,{x:g,y:_,z:y,w:x}=a,M=2*(_*m-y*p),S=2*(y*h-g*m),b=2*(g*p-_*h);return this.x=h+x*M+_*b-y*S,this.y=p+x*S+y*M-g*b,this.z=m+x*b+g*S-_*M,this}project(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)}unproject(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)}transformDirection(a){let h=this.x,p=this.y,m=this.z,g=a.elements;return this.x=g[0]*h+g[4]*p+g[8]*m,this.y=g[1]*h+g[5]*p+g[9]*m,this.z=g[2]*h+g[6]*p+g[10]*m,this.normalize()}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this}divideScalar(a){return this.multiplyScalar(1/a)}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this}clamp(a,h){return this.x=Math.max(a.x,Math.min(h.x,this.x)),this.y=Math.max(a.y,Math.min(h.y,this.y)),this.z=Math.max(a.z,Math.min(h.z,this.z)),this}clampScalar(a,h){return this.x=Math.max(a,Math.min(h,this.x)),this.y=Math.max(a,Math.min(h,this.y)),this.z=Math.max(a,Math.min(h,this.z)),this}clampLength(a,h){let p=this.length();return this.divideScalar(p||1).multiplyScalar(Math.max(a,Math.min(h,p)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,h){return this.x+=(a.x-this.x)*h,this.y+=(a.y-this.y)*h,this.z+=(a.z-this.z)*h,this}lerpVectors(a,h,p){return this.x=a.x+(h.x-a.x)*p,this.y=a.y+(h.y-a.y)*p,this.z=a.z+(h.z-a.z)*p,this}cross(a){return this.crossVectors(this,a)}crossVectors(a,h){let{x:p,y:m,z:g}=a,{x:_,y,z:x}=h;return this.x=m*x-g*y,this.y=g*_-p*x,this.z=p*y-m*_,this}projectOnVector(a){let h=a.lengthSq();if(h===0)return this.set(0,0,0);let p=a.dot(this)/h;return this.copy(a).multiplyScalar(p)}projectOnPlane(a){return ua.copy(this).projectOnVector(a),this.sub(ua)}reflect(a){return this.sub(ua.copy(a).multiplyScalar(2*this.dot(a)))}angleTo(a){let h=Math.sqrt(this.lengthSq()*a.lengthSq());if(h===0)return Math.PI/2;let p=this.dot(a)/h;return Math.acos(Ye(p,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){let h=this.x-a.x,p=this.y-a.y,m=this.z-a.z;return h*h+p*p+m*m}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)}setFromSpherical(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)}setFromSphericalCoords(a,h,p){let m=Math.sin(h)*a;return this.x=m*Math.sin(p),this.y=Math.cos(h)*a,this.z=m*Math.cos(p),this}setFromCylindrical(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)}setFromCylindricalCoords(a,h,p){return this.x=a*Math.sin(h),this.y=p,this.z=a*Math.cos(h),this}setFromMatrixPosition(a){let h=a.elements;return this.x=h[12],this.y=h[13],this.z=h[14],this}setFromMatrixScale(a){let h=this.setFromMatrixColumn(a,0).length(),p=this.setFromMatrixColumn(a,1).length(),m=this.setFromMatrixColumn(a,2).length();return this.x=h,this.y=p,this.z=m,this}setFromMatrixColumn(a,h){return this.fromArray(a.elements,h*4)}setFromMatrix3Column(a,h){return this.fromArray(a.elements,h*3)}setFromEuler(a){return this.x=a._x,this.y=a._y,this.z=a._z,this}setFromColor(a){return this.x=a.r,this.y=a.g,this.z=a.b,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z}fromArray(a,h=0){return this.x=a[h],this.y=a[h+1],this.z=a[h+2],this}toArray(a=[],h=0){return a[h]=this.x,a[h+1]=this.y,a[h+2]=this.z,a}fromBufferAttribute(a,h){return this.x=a.getX(h),this.y=a.getY(h),this.z=a.getZ(h),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let a=Math.random()*Math.PI*2,h=Math.random()*2-1,p=Math.sqrt(1-h*h);return this.x=p*Math.cos(a),this.y=h,this.z=p*Math.sin(a),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ua=new X,Zo=new In;class Dn{constructor(a=new X(1/0,1/0,1/0),h=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=a,this.max=h}set(a,h){return this.min.copy(a),this.max.copy(h),this}setFromArray(a){this.makeEmpty();for(let h=0,p=a.length;h<p;h+=3)this.expandByPoint(On.fromArray(a,h));return this}setFromBufferAttribute(a){this.makeEmpty();for(let h=0,p=a.count;h<p;h++)this.expandByPoint(On.fromBufferAttribute(a,h));return this}setFromPoints(a){this.makeEmpty();for(let h=0,p=a.length;h<p;h++)this.expandByPoint(a[h]);return this}setFromCenterAndSize(a,h){let p=On.copy(h).multiplyScalar(0.5);return this.min.copy(a).sub(p),this.max.copy(a).add(p),this}setFromObject(a,h=!1){return this.makeEmpty(),this.expandByObject(a,h)}clone(){return new this.constructor().copy(this)}copy(a){return this.min.copy(a.min),this.max.copy(a.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(a){return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(a){return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)}expandByPoint(a){return this.min.min(a),this.max.max(a),this}expandByVector(a){return this.min.sub(a),this.max.add(a),this}expandByScalar(a){return this.min.addScalar(-a),this.max.addScalar(a),this}expandByObject(a,h=!1){a.updateWorldMatrix(!1,!1);let p=a.geometry;if(p!==void 0){let g=p.getAttribute("position");if(h===!0&&g!==void 0&&a.isInstancedMesh!==!0)for(let _=0,y=g.count;_<y;_++){if(a.isMesh===!0)a.getVertexPosition(_,On);else On.fromBufferAttribute(g,_);On.applyMatrix4(a.matrixWorld),this.expandByPoint(On)}else{if(a.boundingBox!==void 0){if(a.boundingBox===null)a.computeBoundingBox();or.copy(a.boundingBox)}else{if(p.boundingBox===null)p.computeBoundingBox();or.copy(p.boundingBox)}or.applyMatrix4(a.matrixWorld),this.union(or)}}let m=a.children;for(let g=0,_=m.length;g<_;g++)this.expandByObject(m[g],h);return this}containsPoint(a){return a.x>=this.min.x&&a.x<=this.max.x&&a.y>=this.min.y&&a.y<=this.max.y&&a.z>=this.min.z&&a.z<=this.max.z}containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z}getParameter(a,h){return h.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(a){return a.max.x>=this.min.x&&a.min.x<=this.max.x&&a.max.y>=this.min.y&&a.min.y<=this.max.y&&a.max.z>=this.min.z&&a.min.z<=this.max.z}intersectsSphere(a){return this.clampPoint(a.center,On),On.distanceToSquared(a.center)<=a.radius*a.radius}intersectsPlane(a){let h,p;if(a.normal.x>0)h=a.normal.x*this.min.x,p=a.normal.x*this.max.x;else h=a.normal.x*this.max.x,p=a.normal.x*this.min.x;if(a.normal.y>0)h+=a.normal.y*this.min.y,p+=a.normal.y*this.max.y;else h+=a.normal.y*this.max.y,p+=a.normal.y*this.min.y;if(a.normal.z>0)h+=a.normal.z*this.min.z,p+=a.normal.z*this.max.z;else h+=a.normal.z*this.max.z,p+=a.normal.z*this.min.z;return h<=-a.constant&&p>=-a.constant}intersectsTriangle(a){if(this.isEmpty())return!1;this.getCenter(ws),lr.subVectors(this.max,ws),Xi.subVectors(a.a,ws),qi.subVectors(a.b,ws),Yi.subVectors(a.c,ws),ui.subVectors(qi,Xi),di.subVectors(Yi,qi),Ai.subVectors(Xi,Yi);let h=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ai.z,Ai.y,ui.z,0,-ui.x,di.z,0,-di.x,Ai.z,0,-Ai.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ai.y,Ai.x,0];if(!da(h,Xi,qi,Yi,lr))return!1;if(h=[1,0,0,0,1,0,0,0,1],!da(h,Xi,qi,Yi,lr))return!1;return cr.crossVectors(ui,di),h=[cr.x,cr.y,cr.z],da(h,Xi,qi,Yi,lr)}clampPoint(a,h){return h.copy(a).clamp(this.min,this.max)}distanceToPoint(a){return this.clampPoint(a,On).distanceTo(a)}getBoundingSphere(a){if(this.isEmpty())a.makeEmpty();else this.getCenter(a.center),a.radius=this.getSize(On).length()*0.5;return a}intersect(a){if(this.min.max(a.min),this.max.min(a.max),this.isEmpty())this.makeEmpty();return this}union(a){return this.min.min(a.min),this.max.max(a.max),this}applyMatrix4(a){if(this.isEmpty())return this;return Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a),this.setFromPoints(Qn),this}translate(a){return this.min.add(a),this.max.add(a),this}equals(a){return a.min.equals(this.min)&&a.max.equals(this.max)}}var Qn=[new X,new X,new X,new X,new X,new X,new X,new X],On=new X,or=new Dn,Xi=new X,qi=new X,Yi=new X,ui=new X,di=new X,Ai=new X,ws=new X,lr=new X,cr=new X,Ri=new X;function da(a,h,p,m,g){for(let _=0,y=a.length-3;_<=y;_+=3){Ri.fromArray(a,_);let x=g.x*Math.abs(Ri.x)+g.y*Math.abs(Ri.y)+g.z*Math.abs(Ri.z),M=h.dot(Ri),S=p.dot(Ri),b=m.dot(Ri);if(Math.max(-Math.max(M,S,b),Math.min(M,S,b))>x)return!1}return!0}var Mh=new Dn,As=new X,fa=new X;class Oi{constructor(a=new X,h=-1){this.isSphere=!0,this.center=a,this.radius=h}set(a,h){return this.center.copy(a),this.radius=h,this}setFromPoints(a,h){let p=this.center;if(h!==void 0)p.copy(h);else Mh.setFromPoints(a).getCenter(p);let m=0;for(let g=0,_=a.length;g<_;g++)m=Math.max(m,p.distanceToSquared(a[g]));return this.radius=Math.sqrt(m),this}copy(a){return this.center.copy(a.center),this.radius=a.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(a){return a.distanceTo(this.center)-this.radius}intersectsSphere(a){let h=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=h*h}intersectsBox(a){return a.intersectsSphere(this)}intersectsPlane(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius}clampPoint(a,h){let p=this.center.distanceToSquared(a);if(h.copy(a),p>this.radius*this.radius)h.sub(this.center).normalize(),h.multiplyScalar(this.radius).add(this.center);return h}getBoundingBox(a){if(this.isEmpty())return a.makeEmpty(),a;return a.set(this.center,this.center),a.expandByScalar(this.radius),a}applyMatrix4(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this}translate(a){return this.center.add(a),this}expandByPoint(a){if(this.isEmpty())return this.center.copy(a),this.radius=0,this;As.subVectors(a,this.center);let h=As.lengthSq();if(h>this.radius*this.radius){let p=Math.sqrt(h),m=(p-this.radius)*0.5;this.center.addScaledVector(As,m/p),this.radius+=m}return this}union(a){if(a.isEmpty())return this;if(this.isEmpty())return this.copy(a),this;if(this.center.equals(a.center)===!0)this.radius=Math.max(this.radius,a.radius);else fa.subVectors(a.center,this.center).setLength(a.radius),this.expandByPoint(As.copy(a.center).add(fa)),this.expandByPoint(As.copy(a.center).sub(fa));return this}equals(a){return a.center.equals(this.center)&&a.radius===this.radius}clone(){return new this.constructor().copy(this)}}var ti=new X,pa=new X,hr=new X,fi=new X,ma=new X,ur=new X,ga=new X;class us{constructor(a=new X,h=new X(0,0,-1)){this.origin=a,this.direction=h}set(a,h){return this.origin.copy(a),this.direction.copy(h),this}copy(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this}at(a,h){return h.copy(this.origin).addScaledVector(this.direction,a)}lookAt(a){return this.direction.copy(a).sub(this.origin).normalize(),this}recast(a){return this.origin.copy(this.at(a,ti)),this}closestPointToPoint(a,h){h.subVectors(a,this.origin);let p=h.dot(this.direction);if(p<0)return h.copy(this.origin);return h.copy(this.origin).addScaledVector(this.direction,p)}distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a))}distanceSqToPoint(a){let h=ti.subVectors(a,this.origin).dot(this.direction);if(h<0)return this.origin.distanceToSquared(a);return ti.copy(this.origin).addScaledVector(this.direction,h),ti.distanceToSquared(a)}distanceSqToSegment(a,h,p,m){pa.copy(a).add(h).multiplyScalar(0.5),hr.copy(h).sub(a).normalize(),fi.copy(this.origin).sub(pa);let g=a.distanceTo(h)*0.5,_=-this.direction.dot(hr),y=fi.dot(this.direction),x=-fi.dot(hr),M=fi.lengthSq(),S=Math.abs(1-_*_),b,v,T,C;if(S>0)if(b=_*x-y,v=_*y-x,C=g*S,b>=0)if(v>=-C)if(v<=C){let I=1/S;b*=I,v*=I,T=b*(b+_*v+2*y)+v*(_*b+v+2*x)+M}else v=g,b=Math.max(0,-(_*v+y)),T=-b*b+v*(v+2*x)+M;else v=-g,b=Math.max(0,-(_*v+y)),T=-b*b+v*(v+2*x)+M;else if(v<=-C)b=Math.max(0,-(-_*g+y)),v=b>0?-g:Math.min(Math.max(-g,-x),g),T=-b*b+v*(v+2*x)+M;else if(v<=C)b=0,v=Math.min(Math.max(-g,-x),g),T=v*(v+2*x)+M;else b=Math.max(0,-(_*g+y)),v=b>0?g:Math.min(Math.max(-g,-x),g),T=-b*b+v*(v+2*x)+M;else v=_>0?-g:g,b=Math.max(0,-(_*v+y)),T=-b*b+v*(v+2*x)+M;if(p)p.copy(this.origin).addScaledVector(this.direction,b);if(m)m.copy(pa).addScaledVector(hr,v);return T}intersectSphere(a,h){ti.subVectors(a.center,this.origin);let p=ti.dot(this.direction),m=ti.dot(ti)-p*p,g=a.radius*a.radius;if(m>g)return null;let _=Math.sqrt(g-m),y=p-_,x=p+_;if(x<0)return null;if(y<0)return this.at(x,h);return this.at(y,h)}intersectsSphere(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius}distanceToPlane(a){let h=a.normal.dot(this.direction);if(h===0){if(a.distanceToPoint(this.origin)===0)return 0;return null}let p=-(this.origin.dot(a.normal)+a.constant)/h;return p>=0?p:null}intersectPlane(a,h){let p=this.distanceToPlane(a);if(p===null)return null;return this.at(p,h)}intersectsPlane(a){let h=a.distanceToPoint(this.origin);if(h===0)return!0;if(a.normal.dot(this.direction)*h<0)return!0;return!1}intersectBox(a,h){let p,m,g,_,y,x,M=1/this.direction.x,S=1/this.direction.y,b=1/this.direction.z,v=this.origin;if(M>=0)p=(a.min.x-v.x)*M,m=(a.max.x-v.x)*M;else p=(a.max.x-v.x)*M,m=(a.min.x-v.x)*M;if(S>=0)g=(a.min.y-v.y)*S,_=(a.max.y-v.y)*S;else g=(a.max.y-v.y)*S,_=(a.min.y-v.y)*S;if(p>_||g>m)return null;if(g>p||isNaN(p))p=g;if(_<m||isNaN(m))m=_;if(b>=0)y=(a.min.z-v.z)*b,x=(a.max.z-v.z)*b;else y=(a.max.z-v.z)*b,x=(a.min.z-v.z)*b;if(p>x||y>m)return null;if(y>p||p!==p)p=y;if(x<m||m!==m)m=x;if(m<0)return null;return this.at(p>=0?p:m,h)}intersectsBox(a){return this.intersectBox(a,ti)!==null}intersectTriangle(a,h,p,m,g){ma.subVectors(h,a),ur.subVectors(p,a),ga.crossVectors(ma,ur);let _=this.direction.dot(ga),y;if(_>0){if(m)return null;y=1}else if(_<0)y=-1,_=-_;else return null;fi.subVectors(this.origin,a);let x=y*this.direction.dot(ur.crossVectors(fi,ur));if(x<0)return null;let M=y*this.direction.dot(ma.cross(fi));if(M<0)return null;if(x+M>_)return null;let S=-y*fi.dot(ga);if(S<0)return null;return this.at(S/_,g)}applyMatrix4(a){return this.origin.applyMatrix4(a),this.direction.transformDirection(a),this}equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(a,h,p,m,g,_,y,x,M,S,b,v,T,C,I,D){if(Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],a!==void 0)this.set(a,h,p,m,g,_,y,x,M,S,b,v,T,C,I,D)}set(a,h,p,m,g,_,y,x,M,S,b,v,T,C,I,D){let w=this.elements;return w[0]=a,w[4]=h,w[8]=p,w[12]=m,w[1]=g,w[5]=_,w[9]=y,w[13]=x,w[2]=M,w[6]=S,w[10]=b,w[14]=v,w[3]=T,w[7]=C,w[11]=I,w[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(a){let h=this.elements,p=a.elements;return h[0]=p[0],h[1]=p[1],h[2]=p[2],h[3]=p[3],h[4]=p[4],h[5]=p[5],h[6]=p[6],h[7]=p[7],h[8]=p[8],h[9]=p[9],h[10]=p[10],h[11]=p[11],h[12]=p[12],h[13]=p[13],h[14]=p[14],h[15]=p[15],this}copyPosition(a){let h=this.elements,p=a.elements;return h[12]=p[12],h[13]=p[13],h[14]=p[14],this}setFromMatrix3(a){let h=a.elements;return this.set(h[0],h[3],h[6],0,h[1],h[4],h[7],0,h[2],h[5],h[8],0,0,0,0,1),this}extractBasis(a,h,p){return a.setFromMatrixColumn(this,0),h.setFromMatrixColumn(this,1),p.setFromMatrixColumn(this,2),this}makeBasis(a,h,p){return this.set(a.x,h.x,p.x,0,a.y,h.y,p.y,0,a.z,h.z,p.z,0,0,0,0,1),this}extractRotation(a){let h=this.elements,p=a.elements,m=1/Zi.setFromMatrixColumn(a,0).length(),g=1/Zi.setFromMatrixColumn(a,1).length(),_=1/Zi.setFromMatrixColumn(a,2).length();return h[0]=p[0]*m,h[1]=p[1]*m,h[2]=p[2]*m,h[3]=0,h[4]=p[4]*g,h[5]=p[5]*g,h[6]=p[6]*g,h[7]=0,h[8]=p[8]*_,h[9]=p[9]*_,h[10]=p[10]*_,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromEuler(a){let h=this.elements,{x:p,y:m,z:g}=a,_=Math.cos(p),y=Math.sin(p),x=Math.cos(m),M=Math.sin(m),S=Math.cos(g),b=Math.sin(g);if(a.order==="XYZ"){let v=_*S,T=_*b,C=y*S,I=y*b;h[0]=x*S,h[4]=-x*b,h[8]=M,h[1]=T+C*M,h[5]=v-I*M,h[9]=-y*x,h[2]=I-v*M,h[6]=C+T*M,h[10]=_*x}else if(a.order==="YXZ"){let v=x*S,T=x*b,C=M*S,I=M*b;h[0]=v+I*y,h[4]=C*y-T,h[8]=_*M,h[1]=_*b,h[5]=_*S,h[9]=-y,h[2]=T*y-C,h[6]=I+v*y,h[10]=_*x}else if(a.order==="ZXY"){let v=x*S,T=x*b,C=M*S,I=M*b;h[0]=v-I*y,h[4]=-_*b,h[8]=C+T*y,h[1]=T+C*y,h[5]=_*S,h[9]=I-v*y,h[2]=-_*M,h[6]=y,h[10]=_*x}else if(a.order==="ZYX"){let v=_*S,T=_*b,C=y*S,I=y*b;h[0]=x*S,h[4]=C*M-T,h[8]=v*M+I,h[1]=x*b,h[5]=I*M+v,h[9]=T*M-C,h[2]=-M,h[6]=y*x,h[10]=_*x}else if(a.order==="YZX"){let v=_*x,T=_*M,C=y*x,I=y*M;h[0]=x*S,h[4]=I-v*b,h[8]=C*b+T,h[1]=b,h[5]=_*S,h[9]=-y*S,h[2]=-M*S,h[6]=T*b+C,h[10]=v-I*b}else if(a.order==="XZY"){let v=_*x,T=_*M,C=y*x,I=y*M;h[0]=x*S,h[4]=-b,h[8]=M*S,h[1]=v*b+I,h[5]=_*S,h[9]=T*b-C,h[2]=C*b-T,h[6]=y*S,h[10]=I*b+v}return h[3]=0,h[7]=0,h[11]=0,h[12]=0,h[13]=0,h[14]=0,h[15]=1,this}makeRotationFromQuaternion(a){return this.compose(Sh,a,Eh)}lookAt(a,h,p){let m=this.elements;if(Mn.subVectors(a,h),Mn.lengthSq()===0)Mn.z=1;if(Mn.normalize(),pi.crossVectors(p,Mn),pi.lengthSq()===0){if(Math.abs(p.z)===1)Mn.x+=0.0001;else Mn.z+=0.0001;Mn.normalize(),pi.crossVectors(p,Mn)}return pi.normalize(),dr.crossVectors(Mn,pi),m[0]=pi.x,m[4]=dr.x,m[8]=Mn.x,m[1]=pi.y,m[5]=dr.y,m[9]=Mn.y,m[2]=pi.z,m[6]=dr.z,m[10]=Mn.z,this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,h){let p=a.elements,m=h.elements,g=this.elements,_=p[0],y=p[4],x=p[8],M=p[12],S=p[1],b=p[5],v=p[9],T=p[13],C=p[2],I=p[6],D=p[10],w=p[14],A=p[3],G=p[7],F=p[11],H=p[15],rt=m[0],q=m[4],Y=m[8],ut=m[12],B=m[1],z=m[5],j=m[9],at=m[13],ct=m[2],ht=m[6],_t=m[10],J=m[14],it=m[3],Z=m[7],Rt=m[11],L=m[15];return g[0]=_*rt+y*B+x*ct+M*it,g[4]=_*q+y*z+x*ht+M*Z,g[8]=_*Y+y*j+x*_t+M*Rt,g[12]=_*ut+y*at+x*J+M*L,g[1]=S*rt+b*B+v*ct+T*it,g[5]=S*q+b*z+v*ht+T*Z,g[9]=S*Y+b*j+v*_t+T*Rt,g[13]=S*ut+b*at+v*J+T*L,g[2]=C*rt+I*B+D*ct+w*it,g[6]=C*q+I*z+D*ht+w*Z,g[10]=C*Y+I*j+D*_t+w*Rt,g[14]=C*ut+I*at+D*J+w*L,g[3]=A*rt+G*B+F*ct+H*it,g[7]=A*q+G*z+F*ht+H*Z,g[11]=A*Y+G*j+F*_t+H*Rt,g[15]=A*ut+G*at+F*J+H*L,this}multiplyScalar(a){let h=this.elements;return h[0]*=a,h[4]*=a,h[8]*=a,h[12]*=a,h[1]*=a,h[5]*=a,h[9]*=a,h[13]*=a,h[2]*=a,h[6]*=a,h[10]*=a,h[14]*=a,h[3]*=a,h[7]*=a,h[11]*=a,h[15]*=a,this}determinant(){let a=this.elements,h=a[0],p=a[4],m=a[8],g=a[12],_=a[1],y=a[5],x=a[9],M=a[13],S=a[2],b=a[6],v=a[10],T=a[14],C=a[3],I=a[7],D=a[11],w=a[15];return C*(+g*x*b-m*M*b-g*y*v+p*M*v+m*y*T-p*x*T)+I*(+h*x*T-h*M*v+g*_*v-m*_*T+m*M*S-g*x*S)+D*(+h*M*b-h*y*T-g*_*b+p*_*T+g*y*S-p*M*S)+w*(-m*y*S-h*x*b+h*y*v+m*_*b-p*_*v+p*x*S)}transpose(){let a=this.elements,h;return h=a[1],a[1]=a[4],a[4]=h,h=a[2],a[2]=a[8],a[8]=h,h=a[6],a[6]=a[9],a[9]=h,h=a[3],a[3]=a[12],a[12]=h,h=a[7],a[7]=a[13],a[13]=h,h=a[11],a[11]=a[14],a[14]=h,this}setPosition(a,h,p){let m=this.elements;if(a.isVector3)m[12]=a.x,m[13]=a.y,m[14]=a.z;else m[12]=a,m[13]=h,m[14]=p;return this}invert(){let a=this.elements,h=a[0],p=a[1],m=a[2],g=a[3],_=a[4],y=a[5],x=a[6],M=a[7],S=a[8],b=a[9],v=a[10],T=a[11],C=a[12],I=a[13],D=a[14],w=a[15],A=b*D*M-I*v*M+I*x*T-y*D*T-b*x*w+y*v*w,G=C*v*M-S*D*M-C*x*T+_*D*T+S*x*w-_*v*w,F=S*I*M-C*b*M+C*y*T-_*I*T-S*y*w+_*b*w,H=C*b*x-S*I*x-C*y*v+_*I*v+S*y*D-_*b*D,rt=h*A+p*G+m*F+g*H;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/rt;return a[0]=A*q,a[1]=(I*v*g-b*D*g-I*m*T+p*D*T+b*m*w-p*v*w)*q,a[2]=(y*D*g-I*x*g+I*m*M-p*D*M-y*m*w+p*x*w)*q,a[3]=(b*x*g-y*v*g-b*m*M+p*v*M+y*m*T-p*x*T)*q,a[4]=G*q,a[5]=(S*D*g-C*v*g+C*m*T-h*D*T-S*m*w+h*v*w)*q,a[6]=(C*x*g-_*D*g-C*m*M+h*D*M+_*m*w-h*x*w)*q,a[7]=(_*v*g-S*x*g+S*m*M-h*v*M-_*m*T+h*x*T)*q,a[8]=F*q,a[9]=(C*b*g-S*I*g-C*p*T+h*I*T+S*p*w-h*b*w)*q,a[10]=(_*I*g-C*y*g+C*p*M-h*I*M-_*p*w+h*y*w)*q,a[11]=(S*y*g-_*b*g-S*p*M+h*b*M+_*p*T-h*y*T)*q,a[12]=H*q,a[13]=(S*I*m-C*b*m+C*p*v-h*I*v-S*p*D+h*b*D)*q,a[14]=(C*y*m-_*I*m-C*p*x+h*I*x+_*p*D-h*y*D)*q,a[15]=(_*b*m-S*y*m+S*p*x-h*b*x-_*p*v+h*y*v)*q,this}scale(a){let h=this.elements,{x:p,y:m,z:g}=a;return h[0]*=p,h[4]*=m,h[8]*=g,h[1]*=p,h[5]*=m,h[9]*=g,h[2]*=p,h[6]*=m,h[10]*=g,h[3]*=p,h[7]*=m,h[11]*=g,this}getMaxScaleOnAxis(){let a=this.elements,h=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],p=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],m=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(h,p,m))}makeTranslation(a,h,p){if(a.isVector3)this.set(1,0,0,a.x,0,1,0,a.y,0,0,1,a.z,0,0,0,1);else this.set(1,0,0,a,0,1,0,h,0,0,1,p,0,0,0,1);return this}makeRotationX(a){let h=Math.cos(a),p=Math.sin(a);return this.set(1,0,0,0,0,h,-p,0,0,p,h,0,0,0,0,1),this}makeRotationY(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,0,p,0,0,1,0,0,-p,0,h,0,0,0,0,1),this}makeRotationZ(a){let h=Math.cos(a),p=Math.sin(a);return this.set(h,-p,0,0,p,h,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(a,h){let p=Math.cos(h),m=Math.sin(h),g=1-p,{x:_,y,z:x}=a,M=g*_,S=g*y;return this.set(M*_+p,M*y-m*x,M*x+m*y,0,M*y+m*x,S*y+p,S*x-m*_,0,M*x-m*y,S*x+m*_,g*x*x+p,0,0,0,0,1),this}makeScale(a,h,p){return this.set(a,0,0,0,0,h,0,0,0,0,p,0,0,0,0,1),this}makeShear(a,h,p,m,g,_){return this.set(1,p,g,0,a,1,_,0,h,m,1,0,0,0,0,1),this}compose(a,h,p){let m=this.elements,{_x:g,_y:_,_z:y,_w:x}=h,M=g+g,S=_+_,b=y+y,v=g*M,T=g*S,C=g*b,I=_*S,D=_*b,w=y*b,A=x*M,G=x*S,F=x*b,{x:H,y:rt,z:q}=p;return m[0]=(1-(I+w))*H,m[1]=(T+F)*H,m[2]=(C-G)*H,m[3]=0,m[4]=(T-F)*rt,m[5]=(1-(v+w))*rt,m[6]=(D+A)*rt,m[7]=0,m[8]=(C+G)*q,m[9]=(D-A)*q,m[10]=(1-(v+I))*q,m[11]=0,m[12]=a.x,m[13]=a.y,m[14]=a.z,m[15]=1,this}decompose(a,h,p){let m=this.elements,g=Zi.set(m[0],m[1],m[2]).length(),_=Zi.set(m[4],m[5],m[6]).length(),y=Zi.set(m[8],m[9],m[10]).length();if(this.determinant()<0)g=-g;a.x=m[12],a.y=m[13],a.z=m[14],Bn.copy(this);let M=1/g,S=1/_,b=1/y;return Bn.elements[0]*=M,Bn.elements[1]*=M,Bn.elements[2]*=M,Bn.elements[4]*=S,Bn.elements[5]*=S,Bn.elements[6]*=S,Bn.elements[8]*=b,Bn.elements[9]*=b,Bn.elements[10]*=b,h.setFromRotationMatrix(Bn),p.x=g,p.y=_,p.z=y,this}makePerspective(a,h,p,m,g,_,y=2000){let x=this.elements,M=2*g/(h-a),S=2*g/(p-m),b=(h+a)/(h-a),v=(p+m)/(p-m),T,C;if(y===2000)T=-(_+g)/(_-g),C=-2*_*g/(_-g);else if(y===2001)T=-_/(_-g),C=-_*g/(_-g);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+y);return x[0]=M,x[4]=0,x[8]=b,x[12]=0,x[1]=0,x[5]=S,x[9]=v,x[13]=0,x[2]=0,x[6]=0,x[10]=T,x[14]=C,x[3]=0,x[7]=0,x[11]=-1,x[15]=0,this}makeOrthographic(a,h,p,m,g,_,y=2000){let x=this.elements,M=1/(h-a),S=1/(p-m),b=1/(_-g),v=(h+a)*M,T=(p+m)*S,C,I;if(y===2000)C=(_+g)*b,I=-2*b;else if(y===2001)C=g*b,I=-1*b;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+y);return x[0]=2*M,x[4]=0,x[8]=0,x[12]=-v,x[1]=0,x[5]=2*S,x[9]=0,x[13]=-T,x[2]=0,x[6]=0,x[10]=I,x[14]=-C,x[3]=0,x[7]=0,x[11]=0,x[15]=1,this}equals(a){let h=this.elements,p=a.elements;for(let m=0;m<16;m++)if(h[m]!==p[m])return!1;return!0}fromArray(a,h=0){for(let p=0;p<16;p++)this.elements[p]=a[p+h];return this}toArray(a=[],h=0){let p=this.elements;return a[h]=p[0],a[h+1]=p[1],a[h+2]=p[2],a[h+3]=p[3],a[h+4]=p[4],a[h+5]=p[5],a[h+6]=p[6],a[h+7]=p[7],a[h+8]=p[8],a[h+9]=p[9],a[h+10]=p[10],a[h+11]=p[11],a[h+12]=p[12],a[h+13]=p[13],a[h+14]=p[14],a[h+15]=p[15],a}}var Zi=new X,Bn=new Ce,Sh=new X(0,0,0),Eh=new X(1,1,1),pi=new X,dr=new X,Mn=new X,Jo=new Ce,$o=new In;class Xn{constructor(a=0,h=0,p=0,m=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=a,this._y=h,this._z=p,this._order=m}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get order(){return this._order}set order(a){this._order=a,this._onChangeCallback()}set(a,h,p,m=this._order){return this._x=a,this._y=h,this._z=p,this._order=m,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this._onChangeCallback(),this}setFromRotationMatrix(a,h=this._order,p=!0){let m=a.elements,g=m[0],_=m[4],y=m[8],x=m[1],M=m[5],S=m[9],b=m[2],v=m[6],T=m[10];switch(h){case"XYZ":if(this._y=Math.asin(Ye(y,-1,1)),Math.abs(y)<0.9999999)this._x=Math.atan2(-S,T),this._z=Math.atan2(-_,g);else this._x=Math.atan2(v,M),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Ye(S,-1,1)),Math.abs(S)<0.9999999)this._y=Math.atan2(y,T),this._z=Math.atan2(x,M);else this._y=Math.atan2(-b,g),this._z=0;break;case"ZXY":if(this._x=Math.asin(Ye(v,-1,1)),Math.abs(v)<0.9999999)this._y=Math.atan2(-b,T),this._z=Math.atan2(-_,M);else this._y=0,this._z=Math.atan2(x,g);break;case"ZYX":if(this._y=Math.asin(-Ye(b,-1,1)),Math.abs(b)<0.9999999)this._x=Math.atan2(v,T),this._z=Math.atan2(x,g);else this._x=0,this._z=Math.atan2(-_,M);break;case"YZX":if(this._z=Math.asin(Ye(x,-1,1)),Math.abs(x)<0.9999999)this._x=Math.atan2(-S,M),this._y=Math.atan2(-b,g);else this._x=0,this._y=Math.atan2(y,T);break;case"XZY":if(this._z=Math.asin(-Ye(_,-1,1)),Math.abs(_)<0.9999999)this._x=Math.atan2(v,M),this._y=Math.atan2(y,g);else this._x=Math.atan2(-S,T),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+h)}if(this._order=h,p===!0)this._onChangeCallback();return this}setFromQuaternion(a,h,p){return Jo.makeRotationFromQuaternion(a),this.setFromRotationMatrix(Jo,h,p)}setFromVector3(a,h=this._order){return this.set(a.x,a.y,a.z,h)}reorder(a){return $o.setFromEuler(this),this.setFromQuaternion($o,a)}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order}fromArray(a){if(this._x=a[0],this._y=a[1],this._z=a[2],a[3]!==void 0)this._order=a[3];return this._onChangeCallback(),this}toArray(a=[],h=0){return a[h]=this._x,a[h+1]=this._y,a[h+2]=this._z,a[h+3]=this._order,a}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class kr{constructor(){this.mask=1}set(a){this.mask=(1<<a|0)>>>0}enable(a){this.mask|=1<<a|0}enableAll(){this.mask=-1}toggle(a){this.mask^=1<<a|0}disable(a){this.mask&=~(1<<a|0)}disableAll(){this.mask=0}test(a){return(this.mask&a.mask)!==0}isEnabled(a){return(this.mask&(1<<a|0))!==0}}var bh=0,Ko=new X,Ji=new In,ei=new Ce,fr=new X,Rs=new X,Th=new X,wh=new In,jo=new X(1,0,0),Qo=new X(0,1,0),tl=new X(0,0,1),el={type:"added"},Ah={type:"removed"},$i={type:"childadded",child:null},_a={type:"childremoved",child:null};class qe extends yi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();let a=new X,h=new Xn,p=new In,m=new X(1,1,1);function g(){p.setFromEuler(h,!1)}function _(){h.setFromQuaternion(p,void 0,!1)}h._onChange(g),p._onChange(_),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:h},quaternion:{configurable:!0,enumerable:!0,value:p},scale:{configurable:!0,enumerable:!0,value:m},modelViewMatrix:{value:new Ce},normalMatrix:{value:new _e}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(a){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(a),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(a){return this.quaternion.premultiply(a),this}setRotationFromAxisAngle(a,h){this.quaternion.setFromAxisAngle(a,h)}setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0)}setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a)}setRotationFromQuaternion(a){this.quaternion.copy(a)}rotateOnAxis(a,h){return Ji.setFromAxisAngle(a,h),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(a,h){return Ji.setFromAxisAngle(a,h),this.quaternion.premultiply(Ji),this}rotateX(a){return this.rotateOnAxis(jo,a)}rotateY(a){return this.rotateOnAxis(Qo,a)}rotateZ(a){return this.rotateOnAxis(tl,a)}translateOnAxis(a,h){return Ko.copy(a).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(h)),this}translateX(a){return this.translateOnAxis(jo,a)}translateY(a){return this.translateOnAxis(Qo,a)}translateZ(a){return this.translateOnAxis(tl,a)}localToWorld(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(this.matrixWorld)}worldToLocal(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(a,h,p){if(a.isVector3)fr.copy(a);else fr.set(a,h,p);let m=this.parent;if(this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)ei.lookAt(Rs,fr,this.up);else ei.lookAt(fr,Rs,this.up);if(this.quaternion.setFromRotationMatrix(ei),m)ei.extractRotation(m.matrixWorld),Ji.setFromRotationMatrix(ei),this.quaternion.premultiply(Ji.invert())}add(a){if(arguments.length>1){for(let h=0;h<arguments.length;h++)this.add(arguments[h]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;if(a&&a.isObject3D)a.removeFromParent(),a.parent=this,this.children.push(a),a.dispatchEvent(el),$i.child=a,this.dispatchEvent($i),$i.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this}remove(a){if(arguments.length>1){for(let p=0;p<arguments.length;p++)this.remove(arguments[p]);return this}let h=this.children.indexOf(a);if(h!==-1)a.parent=null,this.children.splice(h,1),a.dispatchEvent(Ah),_a.child=a,this.dispatchEvent(_a),_a.child=null;return this}removeFromParent(){let a=this.parent;if(a!==null)a.remove(this);return this}clear(){return this.remove(...this.children)}attach(a){if(this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),a.parent!==null)a.parent.updateWorldMatrix(!0,!1),ei.multiply(a.parent.matrixWorld);return a.applyMatrix4(ei),a.removeFromParent(),a.parent=this,this.children.push(a),a.updateWorldMatrix(!1,!0),a.dispatchEvent(el),$i.child=a,this.dispatchEvent($i),$i.child=null,this}getObjectById(a){return this.getObjectByProperty("id",a)}getObjectByName(a){return this.getObjectByProperty("name",a)}getObjectByProperty(a,h){if(this[a]===h)return this;for(let p=0,m=this.children.length;p<m;p++){let _=this.children[p].getObjectByProperty(a,h);if(_!==void 0)return _}return}getObjectsByProperty(a,h,p=[]){if(this[a]===h)p.push(this);let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].getObjectsByProperty(a,h,p);return p}getWorldPosition(a){return this.updateWorldMatrix(!0,!1),a.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,a,Th),a}getWorldScale(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,wh,a),a}getWorldDirection(a){this.updateWorldMatrix(!0,!1);let h=this.matrixWorld.elements;return a.set(h[8],h[9],h[10]).normalize()}raycast(){}traverse(a){a(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverse(a)}traverseVisible(a){if(this.visible===!1)return;a(this);let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].traverseVisible(a)}traverseAncestors(a){let h=this.parent;if(h!==null)a(h),h.traverseAncestors(a)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(a){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||a){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,a=!0}let h=this.children;for(let p=0,m=h.length;p<m;p++)h[p].updateMatrixWorld(a)}updateWorldMatrix(a,h){let p=this.parent;if(a===!0&&p!==null)p.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(h===!0){let m=this.children;for(let g=0,_=m.length;g<_;g++)m[g].updateWorldMatrix(!1,!0)}}toJSON(a){let h=a===void 0||typeof a==="string",p={};if(h)a={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},p.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let m={};if(m.uuid=this.uuid,m.type=this.type,this.name!=="")m.name=this.name;if(this.castShadow===!0)m.castShadow=!0;if(this.receiveShadow===!0)m.receiveShadow=!0;if(this.visible===!1)m.visible=!1;if(this.frustumCulled===!1)m.frustumCulled=!1;if(this.renderOrder!==0)m.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)m.userData=this.userData;if(m.layers=this.layers.mask,m.matrix=this.matrix.toArray(),m.up=this.up.toArray(),this.matrixAutoUpdate===!1)m.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(m.type="InstancedMesh",m.count=this.count,m.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)m.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(m.type="BatchedMesh",m.perObjectFrustumCulled=this.perObjectFrustumCulled,m.sortObjects=this.sortObjects,m.drawRanges=this._drawRanges,m.reservedRanges=this._reservedRanges,m.visibility=this._visibility,m.active=this._active,m.bounds=this._bounds.map((y)=>({boxInitialized:y.boxInitialized,boxMin:y.box.min.toArray(),boxMax:y.box.max.toArray(),sphereInitialized:y.sphereInitialized,sphereRadius:y.sphere.radius,sphereCenter:y.sphere.center.toArray()})),m.maxInstanceCount=this._maxInstanceCount,m.maxVertexCount=this._maxVertexCount,m.maxIndexCount=this._maxIndexCount,m.geometryInitialized=this._geometryInitialized,m.geometryCount=this._geometryCount,m.matricesTexture=this._matricesTexture.toJSON(a),this._colorsTexture!==null)m.colorsTexture=this._colorsTexture.toJSON(a);if(this.boundingSphere!==null)m.boundingSphere={center:m.boundingSphere.center.toArray(),radius:m.boundingSphere.radius};if(this.boundingBox!==null)m.boundingBox={min:m.boundingBox.min.toArray(),max:m.boundingBox.max.toArray()}}function g(y,x){if(y[x.uuid]===void 0)y[x.uuid]=x.toJSON(a);return x.uuid}if(this.isScene){if(this.background){if(this.background.isColor)m.background=this.background.toJSON();else if(this.background.isTexture)m.background=this.background.toJSON(a).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)m.environment=this.environment.toJSON(a).uuid}else if(this.isMesh||this.isLine||this.isPoints){m.geometry=g(a.geometries,this.geometry);let y=this.geometry.parameters;if(y!==void 0&&y.shapes!==void 0){let x=y.shapes;if(Array.isArray(x))for(let M=0,S=x.length;M<S;M++){let b=x[M];g(a.shapes,b)}else g(a.shapes,x)}}if(this.isSkinnedMesh){if(m.bindMode=this.bindMode,m.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)g(a.skeletons,this.skeleton),m.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let y=[];for(let x=0,M=this.material.length;x<M;x++)y.push(g(a.materials,this.material[x]));m.material=y}else m.material=g(a.materials,this.material);if(this.children.length>0){m.children=[];for(let y=0;y<this.children.length;y++)m.children.push(this.children[y].toJSON(a).object)}if(this.animations.length>0){m.animations=[];for(let y=0;y<this.animations.length;y++){let x=this.animations[y];m.animations.push(g(a.animations,x))}}if(h){let y=_(a.geometries),x=_(a.materials),M=_(a.textures),S=_(a.images),b=_(a.shapes),v=_(a.skeletons),T=_(a.animations),C=_(a.nodes);if(y.length>0)p.geometries=y;if(x.length>0)p.materials=x;if(M.length>0)p.textures=M;if(S.length>0)p.images=S;if(b.length>0)p.shapes=b;if(v.length>0)p.skeletons=v;if(T.length>0)p.animations=T;if(C.length>0)p.nodes=C}return p.object=m,p;function _(y){let x=[];for(let M in y){let S=y[M];delete S.metadata,x.push(S)}return x}}clone(a){return new this.constructor().copy(this,a)}copy(a,h=!0){if(this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.rotation.order=a.rotation.order,this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldAutoUpdate=a.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.layers.mask=a.layers.mask,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.animations=a.animations.slice(),this.userData=JSON.parse(JSON.stringify(a.userData)),h===!0)for(let p=0;p<a.children.length;p++){let m=a.children[p];this.add(m.clone())}return this}}qe.DEFAULT_UP=new X(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new X,ni=new X,xa=new X,ii=new X,Ki=new X,ji=new X,nl=new X,ya=new X,va=new X,Ma=new X,Sa=new Ne,Ea=new Ne,ba=new Ne;class Rn{constructor(a=new X,h=new X,p=new X){this.a=a,this.b=h,this.c=p}static getNormal(a,h,p,m){m.subVectors(p,h),zn.subVectors(a,h),m.cross(zn);let g=m.lengthSq();if(g>0)return m.multiplyScalar(1/Math.sqrt(g));return m.set(0,0,0)}static getBarycoord(a,h,p,m,g){zn.subVectors(m,h),ni.subVectors(p,h),xa.subVectors(a,h);let _=zn.dot(zn),y=zn.dot(ni),x=zn.dot(xa),M=ni.dot(ni),S=ni.dot(xa),b=_*M-y*y;if(b===0)return g.set(0,0,0),null;let v=1/b,T=(M*x-y*S)*v,C=(_*S-y*x)*v;return g.set(1-T-C,C,T)}static containsPoint(a,h,p,m){if(this.getBarycoord(a,h,p,m,ii)===null)return!1;return ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(a,h,p,m,g,_,y,x){if(this.getBarycoord(a,h,p,m,ii)===null){if(x.x=0,x.y=0,"z"in x)x.z=0;if("w"in x)x.w=0;return null}return x.setScalar(0),x.addScaledVector(g,ii.x),x.addScaledVector(_,ii.y),x.addScaledVector(y,ii.z),x}static getInterpolatedAttribute(a,h,p,m,g,_){return Sa.setScalar(0),Ea.setScalar(0),ba.setScalar(0),Sa.fromBufferAttribute(a,h),Ea.fromBufferAttribute(a,p),ba.fromBufferAttribute(a,m),_.setScalar(0),_.addScaledVector(Sa,g.x),_.addScaledVector(Ea,g.y),_.addScaledVector(ba,g.z),_}static isFrontFacing(a,h,p,m){return zn.subVectors(p,h),ni.subVectors(a,h),zn.cross(ni).dot(m)<0?!0:!1}set(a,h,p){return this.a.copy(a),this.b.copy(h),this.c.copy(p),this}setFromPointsAndIndices(a,h,p,m){return this.a.copy(a[h]),this.b.copy(a[p]),this.c.copy(a[m]),this}setFromAttributeAndIndices(a,h,p,m){return this.a.fromBufferAttribute(a,h),this.b.fromBufferAttribute(a,p),this.c.fromBufferAttribute(a,m),this}clone(){return new this.constructor().copy(this)}copy(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this}getArea(){return zn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),zn.cross(ni).length()*0.5}getMidpoint(a){return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(a){return Rn.getNormal(this.a,this.b,this.c,a)}getPlane(a){return a.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(a,h){return Rn.getBarycoord(a,this.a,this.b,this.c,h)}getInterpolation(a,h,p,m,g){return Rn.getInterpolation(a,this.a,this.b,this.c,h,p,m,g)}containsPoint(a){return Rn.containsPoint(a,this.a,this.b,this.c)}isFrontFacing(a){return Rn.isFrontFacing(this.a,this.b,this.c,a)}intersectsBox(a){return a.intersectsTriangle(this)}closestPointToPoint(a,h){let p=this.a,m=this.b,g=this.c,_,y;Ki.subVectors(m,p),ji.subVectors(g,p),ya.subVectors(a,p);let x=Ki.dot(ya),M=ji.dot(ya);if(x<=0&&M<=0)return h.copy(p);va.subVectors(a,m);let S=Ki.dot(va),b=ji.dot(va);if(S>=0&&b<=S)return h.copy(m);let v=x*b-S*M;if(v<=0&&x>=0&&S<=0)return _=x/(x-S),h.copy(p).addScaledVector(Ki,_);Ma.subVectors(a,g);let T=Ki.dot(Ma),C=ji.dot(Ma);if(C>=0&&T<=C)return h.copy(g);let I=T*M-x*C;if(I<=0&&M>=0&&C<=0)return y=M/(M-C),h.copy(p).addScaledVector(ji,y);let D=S*C-T*b;if(D<=0&&b-S>=0&&T-C>=0)return nl.subVectors(g,m),y=(b-S)/(b-S+(T-C)),h.copy(m).addScaledVector(nl,y);let w=1/(D+I+v);return _=I*w,y=v*w,h.copy(p).addScaledVector(Ki,_).addScaledVector(ji,y)}equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}}var ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ta(a,h,p){if(p<0)p+=1;if(p>1)p-=1;if(p<0.16666666666666666)return a+(h-a)*6*p;if(p<0.5)return h;if(p<0.6666666666666666)return a+(h-a)*6*(0.6666666666666666-p);return a}class xe{constructor(a,h,p){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(a,h,p)}set(a,h,p){if(h===void 0&&p===void 0){let m=a;if(m&&m.isColor)this.copy(m);else if(typeof m==="number")this.setHex(m);else if(typeof m==="string")this.setStyle(m)}else this.setRGB(a,h,p);return this}setScalar(a){return this.r=a,this.g=a,this.b=a,this}setHex(a,h="srgb"){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(a&255)/255,Ae.toWorkingColorSpace(this,h),this}setRGB(a,h,p,m=Ae.workingColorSpace){return this.r=a,this.g=h,this.b=p,Ae.toWorkingColorSpace(this,m),this}setHSL(a,h,p,m=Ae.workingColorSpace){if(a=Ka(a,1),h=Ye(h,0,1),p=Ye(p,0,1),h===0)this.r=this.g=this.b=p;else{let g=p<=0.5?p*(1+h):p+h-p*h,_=2*p-g;this.r=Ta(_,g,a+0.3333333333333333),this.g=Ta(_,g,a),this.b=Ta(_,g,a-0.3333333333333333)}return Ae.toWorkingColorSpace(this,m),this}setStyle(a,h="srgb"){function p(g){if(g===void 0)return;if(parseFloat(g)<1)console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}let m;if(m=/^(\w+)\(([^\)]*)\)/.exec(a)){let g,_=m[1],y=m[2];switch(_){case"rgb":case"rgba":if(g=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setRGB(Math.min(255,parseInt(g[1],10))/255,Math.min(255,parseInt(g[2],10))/255,Math.min(255,parseInt(g[3],10))/255,h);if(g=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setRGB(Math.min(100,parseInt(g[1],10))/100,Math.min(100,parseInt(g[2],10))/100,Math.min(100,parseInt(g[3],10))/100,h);break;case"hsl":case"hsla":if(g=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(y))return p(g[4]),this.setHSL(parseFloat(g[1])/360,parseFloat(g[2])/100,parseFloat(g[3])/100,h);break;default:console.warn("THREE.Color: Unknown color model "+a)}}else if(m=/^\#([A-Fa-f\d]+)$/.exec(a)){let g=m[1],_=g.length;if(_===3)return this.setRGB(parseInt(g.charAt(0),16)/15,parseInt(g.charAt(1),16)/15,parseInt(g.charAt(2),16)/15,h);else if(_===6)return this.setHex(parseInt(g,16),h);else console.warn("THREE.Color: Invalid hex color "+a)}else if(a&&a.length>0)return this.setColorName(a,h);return this}setColorName(a,h="srgb"){let p=ec[a.toLowerCase()];if(p!==void 0)this.setHex(p,h);else console.warn("THREE.Color: Unknown color "+a);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(a){return this.r=a.r,this.g=a.g,this.b=a.b,this}copySRGBToLinear(a){return this.r=si(a.r),this.g=si(a.g),this.b=si(a.b),this}copyLinearToSRGB(a){return this.r=ls(a.r),this.g=ls(a.g),this.b=ls(a.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(a="srgb"){return Ae.fromWorkingColorSpace(on.copy(this),a),Math.round(Ye(on.r*255,0,255))*65536+Math.round(Ye(on.g*255,0,255))*256+Math.round(Ye(on.b*255,0,255))}getHexString(a="srgb"){return("000000"+this.getHex(a).toString(16)).slice(-6)}getHSL(a,h=Ae.workingColorSpace){Ae.fromWorkingColorSpace(on.copy(this),h);let{r:p,g:m,b:g}=on,_=Math.max(p,m,g),y=Math.min(p,m,g),x,M,S=(y+_)/2;if(y===_)x=0,M=0;else{let b=_-y;switch(M=S<=0.5?b/(_+y):b/(2-_-y),_){case p:x=(m-g)/b+(m<g?6:0);break;case m:x=(g-p)/b+2;break;case g:x=(p-m)/b+4;break}x/=6}return a.h=x,a.s=M,a.l=S,a}getRGB(a,h=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(on.copy(this),h),a.r=on.r,a.g=on.g,a.b=on.b,a}getStyle(a="srgb"){Ae.fromWorkingColorSpace(on.copy(this),a);let{r:h,g:p,b:m}=on;if(a!=="srgb")return`color(${a} ${h.toFixed(3)} ${p.toFixed(3)} ${m.toFixed(3)})`;return`rgb(${Math.round(h*255)},${Math.round(p*255)},${Math.round(m*255)})`}offsetHSL(a,h,p){return this.getHSL(mi),this.setHSL(mi.h+a,mi.s+h,mi.l+p)}add(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this}addColors(a,h){return this.r=a.r+h.r,this.g=a.g+h.g,this.b=a.b+h.b,this}addScalar(a){return this.r+=a,this.g+=a,this.b+=a,this}sub(a){return this.r=Math.max(0,this.r-a.r),this.g=Math.max(0,this.g-a.g),this.b=Math.max(0,this.b-a.b),this}multiply(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this}multiplyScalar(a){return this.r*=a,this.g*=a,this.b*=a,this}lerp(a,h){return this.r+=(a.r-this.r)*h,this.g+=(a.g-this.g)*h,this.b+=(a.b-this.b)*h,this}lerpColors(a,h,p){return this.r=a.r+(h.r-a.r)*p,this.g=a.g+(h.g-a.g)*p,this.b=a.b+(h.b-a.b)*p,this}lerpHSL(a,h){this.getHSL(mi),a.getHSL(pr);let p=Fs(mi.h,pr.h,h),m=Fs(mi.s,pr.s,h),g=Fs(mi.l,pr.l,h);return this.setHSL(p,m,g),this}setFromVector3(a){return this.r=a.x,this.g=a.y,this.b=a.z,this}applyMatrix3(a){let h=this.r,p=this.g,m=this.b,g=a.elements;return this.r=g[0]*h+g[3]*p+g[6]*m,this.g=g[1]*h+g[4]*p+g[7]*m,this.b=g[2]*h+g[5]*p+g[8]*m,this}equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b}fromArray(a,h=0){return this.r=a[h],this.g=a[h+1],this.b=a[h+2],this}toArray(a=[],h=0){return a[h]=this.r,a[h+1]=this.g,a[h+2]=this.b,a}fromBufferAttribute(a,h){return this.r=a.getX(h),this.g=a.getY(h),this.b=a.getZ(h),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var on=new xe;xe.NAMES=ec;var Rh=0;class vi extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(a){}constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Fi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(a){if(this._alphaTest>0!==a>0)this.version++;this._alphaTest=a}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(a){if(a===void 0)return;for(let h in a){let p=a[h];if(p===void 0){console.warn(`THREE.Material: parameter '${h}' has value of undefined.`);continue}let m=this[h];if(m===void 0){console.warn(`THREE.Material: '${h}' is not a property of THREE.${this.type}.`);continue}if(m&&m.isColor)m.set(p);else if(m&&m.isVector3&&(p&&p.isVector3))m.copy(p);else this[h]=p}}toJSON(a){let h=a===void 0||typeof a==="string";if(h)a={textures:{},images:{}};let p={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(p.uuid=this.uuid,p.type=this.type,this.name!=="")p.name=this.name;if(this.color&&this.color.isColor)p.color=this.color.getHex();if(this.roughness!==void 0)p.roughness=this.roughness;if(this.metalness!==void 0)p.metalness=this.metalness;if(this.sheen!==void 0)p.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)p.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)p.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)p.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)p.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)p.specular=this.specular.getHex();if(this.specularIntensity!==void 0)p.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)p.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)p.shininess=this.shininess;if(this.clearcoat!==void 0)p.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)p.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)p.clearcoatMap=this.clearcoatMap.toJSON(a).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)p.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(a).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)p.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,p.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)p.dispersion=this.dispersion;if(this.iridescence!==void 0)p.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)p.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)p.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)p.iridescenceMap=this.iridescenceMap.toJSON(a).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)p.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(a).uuid;if(this.anisotropy!==void 0)p.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)p.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)p.anisotropyMap=this.anisotropyMap.toJSON(a).uuid;if(this.map&&this.map.isTexture)p.map=this.map.toJSON(a).uuid;if(this.matcap&&this.matcap.isTexture)p.matcap=this.matcap.toJSON(a).uuid;if(this.alphaMap&&this.alphaMap.isTexture)p.alphaMap=this.alphaMap.toJSON(a).uuid;if(this.lightMap&&this.lightMap.isTexture)p.lightMap=this.lightMap.toJSON(a).uuid,p.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)p.aoMap=this.aoMap.toJSON(a).uuid,p.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)p.bumpMap=this.bumpMap.toJSON(a).uuid,p.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)p.normalMap=this.normalMap.toJSON(a).uuid,p.normalMapType=this.normalMapType,p.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)p.displacementMap=this.displacementMap.toJSON(a).uuid,p.displacementScale=this.displacementScale,p.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)p.roughnessMap=this.roughnessMap.toJSON(a).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)p.metalnessMap=this.metalnessMap.toJSON(a).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)p.emissiveMap=this.emissiveMap.toJSON(a).uuid;if(this.specularMap&&this.specularMap.isTexture)p.specularMap=this.specularMap.toJSON(a).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)p.specularIntensityMap=this.specularIntensityMap.toJSON(a).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)p.specularColorMap=this.specularColorMap.toJSON(a).uuid;if(this.envMap&&this.envMap.isTexture){if(p.envMap=this.envMap.toJSON(a).uuid,this.combine!==void 0)p.combine=this.combine}if(this.envMapRotation!==void 0)p.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)p.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)p.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)p.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)p.gradientMap=this.gradientMap.toJSON(a).uuid;if(this.transmission!==void 0)p.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)p.transmissionMap=this.transmissionMap.toJSON(a).uuid;if(this.thickness!==void 0)p.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)p.thicknessMap=this.thicknessMap.toJSON(a).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)p.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)p.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)p.size=this.size;if(this.shadowSide!==null)p.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)p.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)p.blending=this.blending;if(this.side!==0)p.side=this.side;if(this.vertexColors===!0)p.vertexColors=!0;if(this.opacity<1)p.opacity=this.opacity;if(this.transparent===!0)p.transparent=!0;if(this.blendSrc!==204)p.blendSrc=this.blendSrc;if(this.blendDst!==205)p.blendDst=this.blendDst;if(this.blendEquation!==100)p.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)p.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)p.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)p.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)p.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)p.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)p.depthFunc=this.depthFunc;if(this.depthTest===!1)p.depthTest=this.depthTest;if(this.depthWrite===!1)p.depthWrite=this.depthWrite;if(this.colorWrite===!1)p.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)p.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)p.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)p.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)p.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)p.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)p.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)p.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)p.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)p.rotation=this.rotation;if(this.polygonOffset===!0)p.polygonOffset=!0;if(this.polygonOffsetFactor!==0)p.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)p.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)p.linewidth=this.linewidth;if(this.dashSize!==void 0)p.dashSize=this.dashSize;if(this.gapSize!==void 0)p.gapSize=this.gapSize;if(this.scale!==void 0)p.scale=this.scale;if(this.dithering===!0)p.dithering=!0;if(this.alphaTest>0)p.alphaTest=this.alphaTest;if(this.alphaHash===!0)p.alphaHash=!0;if(this.alphaToCoverage===!0)p.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)p.premultipliedAlpha=!0;if(this.forceSinglePass===!0)p.forceSinglePass=!0;if(this.wireframe===!0)p.wireframe=!0;if(this.wireframeLinewidth>1)p.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")p.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")p.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)p.flatShading=!0;if(this.visible===!1)p.visible=!1;if(this.toneMapped===!1)p.toneMapped=!1;if(this.fog===!1)p.fog=!1;if(Object.keys(this.userData).length>0)p.userData=this.userData;function m(g){let _=[];for(let y in g){let x=g[y];delete x.metadata,_.push(x)}return _}if(h){let g=m(a.textures),_=m(a.images);if(g.length>0)p.textures=g;if(_.length>0)p.images=_}return p}clone(){return new this.constructor().copy(this)}copy(a){this.name=a.name,this.blending=a.blending,this.side=a.side,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.blendColor.copy(a.blendColor),this.blendAlpha=a.blendAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.stencilWriteMask=a.stencilWriteMask,this.stencilFunc=a.stencilFunc,this.stencilRef=a.stencilRef,this.stencilFuncMask=a.stencilFuncMask,this.stencilFail=a.stencilFail,this.stencilZFail=a.stencilZFail,this.stencilZPass=a.stencilZPass,this.stencilWrite=a.stencilWrite;let h=a.clippingPlanes,p=null;if(h!==null){let m=h.length;p=Array(m);for(let g=0;g!==m;++g)p[g]=h[g].clone()}return this.clippingPlanes=p,this.clipIntersection=a.clipIntersection,this.clipShadows=a.clipShadows,this.shadowSide=a.shadowSide,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.alphaHash=a.alphaHash,this.alphaToCoverage=a.alphaToCoverage,this.premultipliedAlpha=a.premultipliedAlpha,this.forceSinglePass=a.forceSinglePass,this.visible=a.visible,this.toneMapped=a.toneMapped,this.userData=JSON.parse(JSON.stringify(a.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(a){if(a===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bi extends vi{static get type(){return"MeshBasicMaterial"}constructor(a){super();this.isMeshBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.fog=a.fog,this}}var Xe=new X,mr=new Et;class Cn{constructor(a,h,p=!1){if(Array.isArray(a))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=a,this.itemSize=h,this.count=a!==void 0?a.length/h:0,this.normalized=p,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(a){if(a===!0)this.version++}setUsage(a){return this.usage=a,this}addUpdateRange(a,h){this.updateRanges.push({start:a,count:h})}clearUpdateRanges(){this.updateRanges.length=0}copy(a){return this.name=a.name,this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.count=a.count,this.normalized=a.normalized,this.usage=a.usage,this.gpuType=a.gpuType,this}copyAt(a,h,p){a*=this.itemSize,p*=h.itemSize;for(let m=0,g=this.itemSize;m<g;m++)this.array[a+m]=h.array[p+m];return this}copyArray(a){return this.array.set(a),this}applyMatrix3(a){if(this.itemSize===2)for(let h=0,p=this.count;h<p;h++)mr.fromBufferAttribute(this,h),mr.applyMatrix3(a),this.setXY(h,mr.x,mr.y);else if(this.itemSize===3)for(let h=0,p=this.count;h<p;h++)Xe.fromBufferAttribute(this,h),Xe.applyMatrix3(a),this.setXYZ(h,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(a){for(let h=0,p=this.count;h<p;h++)Xe.fromBufferAttribute(this,h),Xe.applyMatrix4(a),this.setXYZ(h,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(a){for(let h=0,p=this.count;h<p;h++)Xe.fromBufferAttribute(this,h),Xe.applyNormalMatrix(a),this.setXYZ(h,Xe.x,Xe.y,Xe.z);return this}transformDirection(a){for(let h=0,p=this.count;h<p;h++)Xe.fromBufferAttribute(this,h),Xe.transformDirection(a),this.setXYZ(h,Xe.x,Xe.y,Xe.z);return this}set(a,h=0){return this.array.set(a,h),this}getComponent(a,h){let p=this.array[a*this.itemSize+h];if(this.normalized)p=ss(p,this.array);return p}setComponent(a,h,p){if(this.normalized)p=un(p,this.array);return this.array[a*this.itemSize+h]=p,this}getX(a){let h=this.array[a*this.itemSize];if(this.normalized)h=ss(h,this.array);return h}setX(a,h){if(this.normalized)h=un(h,this.array);return this.array[a*this.itemSize]=h,this}getY(a){let h=this.array[a*this.itemSize+1];if(this.normalized)h=ss(h,this.array);return h}setY(a,h){if(this.normalized)h=un(h,this.array);return this.array[a*this.itemSize+1]=h,this}getZ(a){let h=this.array[a*this.itemSize+2];if(this.normalized)h=ss(h,this.array);return h}setZ(a,h){if(this.normalized)h=un(h,this.array);return this.array[a*this.itemSize+2]=h,this}getW(a){let h=this.array[a*this.itemSize+3];if(this.normalized)h=ss(h,this.array);return h}setW(a,h){if(this.normalized)h=un(h,this.array);return this.array[a*this.itemSize+3]=h,this}setXY(a,h,p){if(a*=this.itemSize,this.normalized)h=un(h,this.array),p=un(p,this.array);return this.array[a+0]=h,this.array[a+1]=p,this}setXYZ(a,h,p,m){if(a*=this.itemSize,this.normalized)h=un(h,this.array),p=un(p,this.array),m=un(m,this.array);return this.array[a+0]=h,this.array[a+1]=p,this.array[a+2]=m,this}setXYZW(a,h,p,m,g){if(a*=this.itemSize,this.normalized)h=un(h,this.array),p=un(p,this.array),m=un(m,this.array),g=un(g,this.array);return this.array[a+0]=h,this.array[a+1]=p,this.array[a+2]=m,this.array[a+3]=g,this}onUpload(a){return this.onUploadCallback=a,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let a={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")a.name=this.name;if(this.usage!==35044)a.usage=this.usage;return a}}class to extends Cn{constructor(a,h,p){super(new Uint16Array(a),h,p)}}class eo extends Cn{constructor(a,h,p){super(new Uint32Array(a),h,p)}}class Pe extends Cn{constructor(a,h,p){super(new Float32Array(a),h,p)}}var Ch=0,An=new Ce,wa=new qe,Qi=new X,Sn=new Dn,Cs=new Dn,je=new X;class Qe extends yi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(a){if(Array.isArray(a))this.index=new((Kl(a))?eo:to)(a,1);else this.index=a;return this}setIndirect(a){return this.indirect=a,this}getIndirect(){return this.indirect}getAttribute(a){return this.attributes[a]}setAttribute(a,h){return this.attributes[a]=h,this}deleteAttribute(a){return delete this.attributes[a],this}hasAttribute(a){return this.attributes[a]!==void 0}addGroup(a,h,p=0){this.groups.push({start:a,count:h,materialIndex:p})}clearGroups(){this.groups=[]}setDrawRange(a,h){this.drawRange.start=a,this.drawRange.count=h}applyMatrix4(a){let h=this.attributes.position;if(h!==void 0)h.applyMatrix4(a),h.needsUpdate=!0;let p=this.attributes.normal;if(p!==void 0){let g=new _e().getNormalMatrix(a);p.applyNormalMatrix(g),p.needsUpdate=!0}let m=this.attributes.tangent;if(m!==void 0)m.transformDirection(a),m.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(a){return An.makeRotationFromQuaternion(a),this.applyMatrix4(An),this}rotateX(a){return An.makeRotationX(a),this.applyMatrix4(An),this}rotateY(a){return An.makeRotationY(a),this.applyMatrix4(An),this}rotateZ(a){return An.makeRotationZ(a),this.applyMatrix4(An),this}translate(a,h,p){return An.makeTranslation(a,h,p),this.applyMatrix4(An),this}scale(a,h,p){return An.makeScale(a,h,p),this.applyMatrix4(An),this}lookAt(a){return wa.lookAt(a),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(a){let h=this.getAttribute("position");if(h===void 0){let p=[];for(let m=0,g=a.length;m<g;m++){let _=a[m];p.push(_.x,_.y,_.z||0)}this.setAttribute("position",new Pe(p,3))}else{for(let p=0,m=h.count;p<m;p++){let g=a[p];h.setXYZ(p,g.x,g.y,g.z||0)}if(a.length>h.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");h.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Dn;let a=this.attributes.position,h=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(a!==void 0){if(this.boundingBox.setFromBufferAttribute(a),h)for(let p=0,m=h.length;p<m;p++){let g=h[p];if(Sn.setFromBufferAttribute(g),this.morphTargetsRelative)je.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(je);else this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Oi;let a=this.attributes.position,h=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(a){let p=this.boundingSphere.center;if(Sn.setFromBufferAttribute(a),h)for(let g=0,_=h.length;g<_;g++){let y=h[g];if(Cs.setFromBufferAttribute(y),this.morphTargetsRelative)je.addVectors(Sn.min,Cs.min),Sn.expandByPoint(je),je.addVectors(Sn.max,Cs.max),Sn.expandByPoint(je);else Sn.expandByPoint(Cs.min),Sn.expandByPoint(Cs.max)}Sn.getCenter(p);let m=0;for(let g=0,_=a.count;g<_;g++)je.fromBufferAttribute(a,g),m=Math.max(m,p.distanceToSquared(je));if(h)for(let g=0,_=h.length;g<_;g++){let y=h[g],x=this.morphTargetsRelative;for(let M=0,S=y.count;M<S;M++){if(je.fromBufferAttribute(y,M),x)Qi.fromBufferAttribute(a,M),je.add(Qi);m=Math.max(m,p.distanceToSquared(je))}}if(this.boundingSphere.radius=Math.sqrt(m),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let a=this.index,h=this.attributes;if(a===null||h.position===void 0||h.normal===void 0||h.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:p,normal:m,uv:g}=h;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Cn(new Float32Array(4*p.count),4));let _=this.getAttribute("tangent"),y=[],x=[];for(let Y=0;Y<p.count;Y++)y[Y]=new X,x[Y]=new X;let M=new X,S=new X,b=new X,v=new Et,T=new Et,C=new Et,I=new X,D=new X;function w(Y,ut,B){M.fromBufferAttribute(p,Y),S.fromBufferAttribute(p,ut),b.fromBufferAttribute(p,B),v.fromBufferAttribute(g,Y),T.fromBufferAttribute(g,ut),C.fromBufferAttribute(g,B),S.sub(M),b.sub(M),T.sub(v),C.sub(v);let z=1/(T.x*C.y-C.x*T.y);if(!isFinite(z))return;I.copy(S).multiplyScalar(C.y).addScaledVector(b,-T.y).multiplyScalar(z),D.copy(b).multiplyScalar(T.x).addScaledVector(S,-C.x).multiplyScalar(z),y[Y].add(I),y[ut].add(I),y[B].add(I),x[Y].add(D),x[ut].add(D),x[B].add(D)}let A=this.groups;if(A.length===0)A=[{start:0,count:a.count}];for(let Y=0,ut=A.length;Y<ut;++Y){let B=A[Y],{start:z,count:j}=B;for(let at=z,ct=z+j;at<ct;at+=3)w(a.getX(at+0),a.getX(at+1),a.getX(at+2))}let G=new X,F=new X,H=new X,rt=new X;function q(Y){H.fromBufferAttribute(m,Y),rt.copy(H);let ut=y[Y];G.copy(ut),G.sub(H.multiplyScalar(H.dot(ut))).normalize(),F.crossVectors(rt,ut);let z=F.dot(x[Y])<0?-1:1;_.setXYZW(Y,G.x,G.y,G.z,z)}for(let Y=0,ut=A.length;Y<ut;++Y){let B=A[Y],{start:z,count:j}=B;for(let at=z,ct=z+j;at<ct;at+=3)q(a.getX(at+0)),q(a.getX(at+1)),q(a.getX(at+2))}}computeVertexNormals(){let a=this.index,h=this.getAttribute("position");if(h!==void 0){let p=this.getAttribute("normal");if(p===void 0)p=new Cn(new Float32Array(h.count*3),3),this.setAttribute("normal",p);else for(let v=0,T=p.count;v<T;v++)p.setXYZ(v,0,0,0);let m=new X,g=new X,_=new X,y=new X,x=new X,M=new X,S=new X,b=new X;if(a)for(let v=0,T=a.count;v<T;v+=3){let C=a.getX(v+0),I=a.getX(v+1),D=a.getX(v+2);m.fromBufferAttribute(h,C),g.fromBufferAttribute(h,I),_.fromBufferAttribute(h,D),S.subVectors(_,g),b.subVectors(m,g),S.cross(b),y.fromBufferAttribute(p,C),x.fromBufferAttribute(p,I),M.fromBufferAttribute(p,D),y.add(S),x.add(S),M.add(S),p.setXYZ(C,y.x,y.y,y.z),p.setXYZ(I,x.x,x.y,x.z),p.setXYZ(D,M.x,M.y,M.z)}else for(let v=0,T=h.count;v<T;v+=3)m.fromBufferAttribute(h,v+0),g.fromBufferAttribute(h,v+1),_.fromBufferAttribute(h,v+2),S.subVectors(_,g),b.subVectors(m,g),S.cross(b),p.setXYZ(v+0,S.x,S.y,S.z),p.setXYZ(v+1,S.x,S.y,S.z),p.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),p.needsUpdate=!0}}normalizeNormals(){let a=this.attributes.normal;for(let h=0,p=a.count;h<p;h++)je.fromBufferAttribute(a,h),je.normalize(),a.setXYZ(h,je.x,je.y,je.z)}toNonIndexed(){function a(y,x){let{array:M,itemSize:S,normalized:b}=y,v=new M.constructor(x.length*S),T=0,C=0;for(let I=0,D=x.length;I<D;I++){if(y.isInterleavedBufferAttribute)T=x[I]*y.data.stride+y.offset;else T=x[I]*S;for(let w=0;w<S;w++)v[C++]=M[T++]}return new Cn(v,S,b)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let h=new Qe,p=this.index.array,m=this.attributes;for(let y in m){let x=m[y],M=a(x,p);h.setAttribute(y,M)}let g=this.morphAttributes;for(let y in g){let x=[],M=g[y];for(let S=0,b=M.length;S<b;S++){let v=M[S],T=a(v,p);x.push(T)}h.morphAttributes[y]=x}h.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;for(let y=0,x=_.length;y<x;y++){let M=_[y];h.addGroup(M.start,M.count,M.materialIndex)}return h}toJSON(){let a={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(a.uuid=this.uuid,a.type=this.type,this.name!=="")a.name=this.name;if(Object.keys(this.userData).length>0)a.userData=this.userData;if(this.parameters!==void 0){let x=this.parameters;for(let M in x)if(x[M]!==void 0)a[M]=x[M];return a}a.data={attributes:{}};let h=this.index;if(h!==null)a.data.index={type:h.array.constructor.name,array:Array.prototype.slice.call(h.array)};let p=this.attributes;for(let x in p){let M=p[x];a.data.attributes[x]=M.toJSON(a.data)}let m={},g=!1;for(let x in this.morphAttributes){let M=this.morphAttributes[x],S=[];for(let b=0,v=M.length;b<v;b++){let T=M[b];S.push(T.toJSON(a.data))}if(S.length>0)m[x]=S,g=!0}if(g)a.data.morphAttributes=m,a.data.morphTargetsRelative=this.morphTargetsRelative;let _=this.groups;if(_.length>0)a.data.groups=JSON.parse(JSON.stringify(_));let y=this.boundingSphere;if(y!==null)a.data.boundingSphere={center:y.center.toArray(),radius:y.radius};return a}clone(){return new this.constructor().copy(this)}copy(a){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let h={};this.name=a.name;let p=a.index;if(p!==null)this.setIndex(p.clone(h));let m=a.attributes;for(let M in m){let S=m[M];this.setAttribute(M,S.clone(h))}let g=a.morphAttributes;for(let M in g){let S=[],b=g[M];for(let v=0,T=b.length;v<T;v++)S.push(b[v].clone(h));this.morphAttributes[M]=S}this.morphTargetsRelative=a.morphTargetsRelative;let _=a.groups;for(let M=0,S=_.length;M<S;M++){let b=_[M];this.addGroup(b.start,b.count,b.materialIndex)}let y=a.boundingBox;if(y!==null)this.boundingBox=y.clone();let x=a.boundingSphere;if(x!==null)this.boundingSphere=x.clone();return this.drawRange.start=a.drawRange.start,this.drawRange.count=a.drawRange.count,this.userData=a.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var il=new Ce,Ci=new us,gr=new Oi,sl=new X,_r=new X,xr=new X,yr=new X,Aa=new X,vr=new X,rl=new X,Mr=new X;class ne extends qe{constructor(a=new Qe,h=new Bi){super();this.isMesh=!0,this.type="Mesh",this.geometry=a,this.material=h,this.updateMorphTargets()}copy(a,h){if(super.copy(a,h),a.morphTargetInfluences!==void 0)this.morphTargetInfluences=a.morphTargetInfluences.slice();if(a.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary);return this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let y=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[y]=g}}}}getVertexPosition(a,h){let p=this.geometry,m=p.attributes.position,g=p.morphAttributes.position,_=p.morphTargetsRelative;h.fromBufferAttribute(m,a);let y=this.morphTargetInfluences;if(g&&y){vr.set(0,0,0);for(let x=0,M=g.length;x<M;x++){let S=y[x],b=g[x];if(S===0)continue;if(Aa.fromBufferAttribute(b,a),_)vr.addScaledVector(Aa,S);else vr.addScaledVector(Aa.sub(h),S)}h.add(vr)}return h}raycast(a,h){let p=this.geometry,m=this.material,g=this.matrixWorld;if(m===void 0)return;if(p.boundingSphere===null)p.computeBoundingSphere();if(gr.copy(p.boundingSphere),gr.applyMatrix4(g),Ci.copy(a.ray).recast(a.near),gr.containsPoint(Ci.origin)===!1){if(Ci.intersectSphere(gr,sl)===null)return;if(Ci.origin.distanceToSquared(sl)>(a.far-a.near)**2)return}if(il.copy(g).invert(),Ci.copy(a.ray).applyMatrix4(il),p.boundingBox!==null){if(Ci.intersectsBox(p.boundingBox)===!1)return}this._computeIntersections(a,h,Ci)}_computeIntersections(a,h,p){let m,g=this.geometry,_=this.material,y=g.index,x=g.attributes.position,M=g.attributes.uv,S=g.attributes.uv1,b=g.attributes.normal,{groups:v,drawRange:T}=g;if(y!==null)if(Array.isArray(_))for(let C=0,I=v.length;C<I;C++){let D=v[C],w=_[D.materialIndex],A=Math.max(D.start,T.start),G=Math.min(y.count,Math.min(D.start+D.count,T.start+T.count));for(let F=A,H=G;F<H;F+=3){let rt=y.getX(F),q=y.getX(F+1),Y=y.getX(F+2);if(m=Sr(this,w,a,p,M,S,b,rt,q,Y),m)m.faceIndex=Math.floor(F/3),m.face.materialIndex=D.materialIndex,h.push(m)}}else{let C=Math.max(0,T.start),I=Math.min(y.count,T.start+T.count);for(let D=C,w=I;D<w;D+=3){let A=y.getX(D),G=y.getX(D+1),F=y.getX(D+2);if(m=Sr(this,_,a,p,M,S,b,A,G,F),m)m.faceIndex=Math.floor(D/3),h.push(m)}}else if(x!==void 0)if(Array.isArray(_))for(let C=0,I=v.length;C<I;C++){let D=v[C],w=_[D.materialIndex],A=Math.max(D.start,T.start),G=Math.min(x.count,Math.min(D.start+D.count,T.start+T.count));for(let F=A,H=G;F<H;F+=3){let rt=F,q=F+1,Y=F+2;if(m=Sr(this,w,a,p,M,S,b,rt,q,Y),m)m.faceIndex=Math.floor(F/3),m.face.materialIndex=D.materialIndex,h.push(m)}}else{let C=Math.max(0,T.start),I=Math.min(x.count,T.start+T.count);for(let D=C,w=I;D<w;D+=3){let A=D,G=D+1,F=D+2;if(m=Sr(this,_,a,p,M,S,b,A,G,F),m)m.faceIndex=Math.floor(D/3),h.push(m)}}}}function Ph(a,h,p,m,g,_,y,x){let M;if(h.side===1)M=m.intersectTriangle(y,_,g,!0,x);else M=m.intersectTriangle(g,_,y,h.side===0,x);if(M===null)return null;Mr.copy(x),Mr.applyMatrix4(a.matrixWorld);let S=p.ray.origin.distanceTo(Mr);if(S<p.near||S>p.far)return null;return{distance:S,point:Mr.clone(),object:a}}function Sr(a,h,p,m,g,_,y,x,M,S){a.getVertexPosition(x,_r),a.getVertexPosition(M,xr),a.getVertexPosition(S,yr);let b=Ph(a,h,p,m,_r,xr,yr,rl);if(b){let v=new X;if(Rn.getBarycoord(rl,_r,xr,yr,v),g)b.uv=Rn.getInterpolatedAttribute(g,x,M,S,v,new Et);if(_)b.uv1=Rn.getInterpolatedAttribute(_,x,M,S,v,new Et);if(y){if(b.normal=Rn.getInterpolatedAttribute(y,x,M,S,v,new X),b.normal.dot(m.direction)>0)b.normal.multiplyScalar(-1)}let T={a:x,b:M,c:S,normal:new X,materialIndex:0};Rn.getNormal(_r,xr,yr,T.normal),b.face=T,b.barycoord=v}return b}class sn extends Qe{constructor(a=1,h=1,p=1,m=1,g=1,_=1){super();this.type="BoxGeometry",this.parameters={width:a,height:h,depth:p,widthSegments:m,heightSegments:g,depthSegments:_};let y=this;m=Math.floor(m),g=Math.floor(g),_=Math.floor(_);let x=[],M=[],S=[],b=[],v=0,T=0;C("z","y","x",-1,-1,p,h,a,_,g,0),C("z","y","x",1,-1,p,h,-a,_,g,1),C("x","z","y",1,1,a,p,h,m,_,2),C("x","z","y",1,-1,a,p,-h,m,_,3),C("x","y","z",1,-1,a,h,p,m,g,4),C("x","y","z",-1,-1,a,h,-p,m,g,5),this.setIndex(x),this.setAttribute("position",new Pe(M,3)),this.setAttribute("normal",new Pe(S,3)),this.setAttribute("uv",new Pe(b,2));function C(I,D,w,A,G,F,H,rt,q,Y,ut){let B=F/q,z=H/Y,j=F/2,at=H/2,ct=rt/2,ht=q+1,_t=Y+1,J=0,it=0,Z=new X;for(let Rt=0;Rt<_t;Rt++){let L=Rt*z-at;for(let qt=0;qt<ht;qt++){let ee=qt*B-j;Z[I]=ee*A,Z[D]=L*G,Z[w]=ct,M.push(Z.x,Z.y,Z.z),Z[I]=0,Z[D]=0,Z[w]=rt>0?1:-1,S.push(Z.x,Z.y,Z.z),b.push(qt/q),b.push(1-Rt/Y),J+=1}}for(let Rt=0;Rt<Y;Rt++)for(let L=0;L<q;L++){let qt=v+L+ht*Rt,ee=v+L+ht*(Rt+1),pt=v+(L+1)+ht*(Rt+1),wt=v+(L+1)+ht*Rt;x.push(qt,ee,wt),x.push(ee,pt,wt),it+=6}y.addGroup(T,it,ut),T+=it,v+=J}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new sn(a.width,a.height,a.depth,a.widthSegments,a.heightSegments,a.depthSegments)}}function hs(a){let h={};for(let p in a){h[p]={};for(let m in a[p]){let g=a[p][m];if(g&&(g.isColor||g.isMatrix3||g.isMatrix4||g.isVector2||g.isVector3||g.isVector4||g.isTexture||g.isQuaternion))if(g.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),h[p][m]=null;else h[p][m]=g.clone();else if(Array.isArray(g))h[p][m]=g.slice();else h[p][m]=g}}return h}function dn(a){let h={};for(let p=0;p<a.length;p++){let m=hs(a[p]);for(let g in m)h[g]=m[g]}return h}function Ih(a){let h=[];for(let p=0;p<a.length;p++)h.push(a[p].clone());return h}function nc(a){let h=a.getRenderTarget();if(h===null)return a.outputColorSpace;if(h.isXRRenderTarget===!0)return h.texture.colorSpace;return Ae.workingColorSpace}var Dh={clone:hs,merge:dn},Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends vi{static get type(){return"ShaderMaterial"}constructor(a){super();if(this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,a!==void 0)this.setValues(a)}copy(a){return super.copy(a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=hs(a.uniforms),this.uniformsGroups=Ih(a.uniformsGroups),this.defines=Object.assign({},a.defines),this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.fog=a.fog,this.lights=a.lights,this.clipping=a.clipping,this.extensions=Object.assign({},a.extensions),this.glslVersion=a.glslVersion,this}toJSON(a){let h=super.toJSON(a);h.glslVersion=this.glslVersion,h.uniforms={};for(let m in this.uniforms){let _=this.uniforms[m].value;if(_&&_.isTexture)h.uniforms[m]={type:"t",value:_.toJSON(a).uuid};else if(_&&_.isColor)h.uniforms[m]={type:"c",value:_.getHex()};else if(_&&_.isVector2)h.uniforms[m]={type:"v2",value:_.toArray()};else if(_&&_.isVector3)h.uniforms[m]={type:"v3",value:_.toArray()};else if(_&&_.isVector4)h.uniforms[m]={type:"v4",value:_.toArray()};else if(_&&_.isMatrix3)h.uniforms[m]={type:"m3",value:_.toArray()};else if(_&&_.isMatrix4)h.uniforms[m]={type:"m4",value:_.toArray()};else h.uniforms[m]={value:_}}if(Object.keys(this.defines).length>0)h.defines=this.defines;h.vertexShader=this.vertexShader,h.fragmentShader=this.fragmentShader,h.lights=this.lights,h.clipping=this.clipping;let p={};for(let m in this.extensions)if(this.extensions[m]===!0)p[m]=!0;if(Object.keys(p).length>0)h.extensions=p;return h}}class no extends qe{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=2000}copy(a,h){return super.copy(a,h),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this.projectionMatrixInverse.copy(a.projectionMatrixInverse),this.coordinateSystem=a.coordinateSystem,this}getWorldDirection(a){return super.getWorldDirection(a).negate()}updateMatrixWorld(a){super.updateMatrixWorld(a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(a,h){super.updateWorldMatrix(a,h),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var gi=new X,al=new Et,ol=new Et;class ln extends no{constructor(a=50,h=1,p=0.1,m=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=a,this.zoom=1,this.near=p,this.far=m,this.focus=10,this.aspect=h,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(a,h){return super.copy(a,h),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=a.view===null?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this}setFocalLength(a){let h=0.5*this.getFilmHeight()/a;this.fov=cs*2*Math.atan(h),this.updateProjectionMatrix()}getFocalLength(){let a=Math.tan(os*0.5*this.fov);return 0.5*this.getFilmHeight()/a}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(os*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(a,h,p){gi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),h.set(gi.x,gi.y).multiplyScalar(-a/gi.z),gi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),p.set(gi.x,gi.y).multiplyScalar(-a/gi.z)}getViewSize(a,h){return this.getViewBounds(a,al,ol),h.subVectors(ol,al)}setViewOffset(a,h,p,m,g,_){if(this.aspect=a/h,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let a=this.near,h=a*Math.tan(os*0.5*this.fov)/this.zoom,p=2*h,m=this.aspect*p,g=-0.5*m,_=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:x,fullHeight:M}=_;g+=_.offsetX*m/x,h-=_.offsetY*p/M,m*=_.width/x,p*=_.height/M}let y=this.filmOffset;if(y!==0)g+=a*y/this.getFilmWidth();this.projectionMatrix.makePerspective(g,g+m,h,h-p,a,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){let h=super.toJSON(a);if(h.object.fov=this.fov,h.object.zoom=this.zoom,h.object.near=this.near,h.object.far=this.far,h.object.focus=this.focus,h.object.aspect=this.aspect,this.view!==null)h.object.view=Object.assign({},this.view);return h.object.filmGauge=this.filmGauge,h.object.filmOffset=this.filmOffset,h}}var ts=-90,es=1;class ic extends qe{constructor(a,h,p){super();this.type="CubeCamera",this.renderTarget=p,this.coordinateSystem=null,this.activeMipmapLevel=0;let m=new ln(ts,es,a,h);m.layers=this.layers,this.add(m);let g=new ln(ts,es,a,h);g.layers=this.layers,this.add(g);let _=new ln(ts,es,a,h);_.layers=this.layers,this.add(_);let y=new ln(ts,es,a,h);y.layers=this.layers,this.add(y);let x=new ln(ts,es,a,h);x.layers=this.layers,this.add(x);let M=new ln(ts,es,a,h);M.layers=this.layers,this.add(M)}updateCoordinateSystem(){let a=this.coordinateSystem,h=this.children.concat(),[p,m,g,_,y,x]=h;for(let M of h)this.remove(M);if(a===2000)p.up.set(0,1,0),p.lookAt(1,0,0),m.up.set(0,1,0),m.lookAt(-1,0,0),g.up.set(0,0,-1),g.lookAt(0,1,0),_.up.set(0,0,1),_.lookAt(0,-1,0),y.up.set(0,1,0),y.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(a===2001)p.up.set(0,-1,0),p.lookAt(-1,0,0),m.up.set(0,-1,0),m.lookAt(1,0,0),g.up.set(0,0,1),g.lookAt(0,1,0),_.up.set(0,0,-1),_.lookAt(0,-1,0),y.up.set(0,-1,0),y.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(let M of h)this.add(M),M.updateMatrixWorld()}update(a,h){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:p,activeMipmapLevel:m}=this;if(this.coordinateSystem!==a.coordinateSystem)this.coordinateSystem=a.coordinateSystem,this.updateCoordinateSystem();let[g,_,y,x,M,S]=this.children,b=a.getRenderTarget(),v=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),C=a.xr.enabled;a.xr.enabled=!1;let I=p.texture.generateMipmaps;p.texture.generateMipmaps=!1,a.setRenderTarget(p,0,m),a.render(h,g),a.setRenderTarget(p,1,m),a.render(h,_),a.setRenderTarget(p,2,m),a.render(h,y),a.setRenderTarget(p,3,m),a.render(h,x),a.setRenderTarget(p,4,m),a.render(h,M),p.texture.generateMipmaps=I,a.setRenderTarget(p,5,m),a.render(h,S),a.setRenderTarget(b,v,T),a.xr.enabled=C,p.texture.needsPMREMUpdate=!0}}class io extends cn{constructor(a,h,p,m,g,_,y,x,M,S){a=a!==void 0?a:[],h=h!==void 0?h:301;super(a,h,p,m,g,_,y,x,M,S);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(a){this.image=a}}class sc extends xi{constructor(a=1,h={}){super(a,a,h);this.isWebGLCubeRenderTarget=!0;let p={width:a,height:a,depth:1},m=[p,p,p,p,p,p];this.texture=new io(m,h.mapping,h.wrapS,h.wrapT,h.magFilter,h.minFilter,h.format,h.type,h.anisotropy,h.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=h.generateMipmaps!==void 0?h.generateMipmaps:!1,this.texture.minFilter=h.minFilter!==void 0?h.minFilter:1006}fromEquirectangularTexture(a,h){this.texture.type=h.type,this.texture.colorSpace=h.colorSpace,this.texture.generateMipmaps=h.generateMipmaps,this.texture.minFilter=h.minFilter,this.texture.magFilter=h.magFilter;let p={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},m=new sn(5,5,5),g=new ri({name:"CubemapFromEquirect",uniforms:hs(p.uniforms),vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,side:1,blending:0});g.uniforms.tEquirect.value=h;let _=new ne(m,g),y=h.minFilter;if(h.minFilter===1008)h.minFilter=1006;return new ic(1,10,this).update(a,_),h.minFilter=y,_.geometry.dispose(),_.material.dispose(),this}clear(a,h,p,m){let g=a.getRenderTarget();for(let _=0;_<6;_++)a.setRenderTarget(this,_),a.clear(h,p,m);a.setRenderTarget(g)}}var Ra=new X,Nh=new X,Fh=new _e;class En{constructor(a=new X(1,0,0),h=0){this.isPlane=!0,this.normal=a,this.constant=h}set(a,h){return this.normal.copy(a),this.constant=h,this}setComponents(a,h,p,m){return this.normal.set(a,h,p),this.constant=m,this}setFromNormalAndCoplanarPoint(a,h){return this.normal.copy(a),this.constant=-h.dot(this.normal),this}setFromCoplanarPoints(a,h,p){let m=Ra.subVectors(p,h).cross(Nh.subVectors(a,h)).normalize();return this.setFromNormalAndCoplanarPoint(m,a),this}copy(a){return this.normal.copy(a.normal),this.constant=a.constant,this}normalize(){let a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(a){return this.normal.dot(a)+this.constant}distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius}projectPoint(a,h){return h.copy(a).addScaledVector(this.normal,-this.distanceToPoint(a))}intersectLine(a,h){let p=a.delta(Ra),m=this.normal.dot(p);if(m===0){if(this.distanceToPoint(a.start)===0)return h.copy(a.start);return null}let g=-(a.start.dot(this.normal)+this.constant)/m;if(g<0||g>1)return null;return h.copy(a.start).addScaledVector(p,g)}intersectsLine(a){let h=this.distanceToPoint(a.start),p=this.distanceToPoint(a.end);return h<0&&p>0||p<0&&h>0}intersectsBox(a){return a.intersectsPlane(this)}intersectsSphere(a){return a.intersectsPlane(this)}coplanarPoint(a){return a.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(a,h){let p=h||Fh.getNormalMatrix(a),m=this.coplanarPoint(Ra).applyMatrix4(a),g=this.normal.applyMatrix3(p).normalize();return this.constant=-m.dot(g),this}translate(a){return this.constant-=a.dot(this.normal),this}equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Pi=new Oi,Er=new X;class Gr{constructor(a=new En,h=new En,p=new En,m=new En,g=new En,_=new En){this.planes=[a,h,p,m,g,_]}set(a,h,p,m,g,_){let y=this.planes;return y[0].copy(a),y[1].copy(h),y[2].copy(p),y[3].copy(m),y[4].copy(g),y[5].copy(_),this}copy(a){let h=this.planes;for(let p=0;p<6;p++)h[p].copy(a.planes[p]);return this}setFromProjectionMatrix(a,h=2000){let p=this.planes,m=a.elements,g=m[0],_=m[1],y=m[2],x=m[3],M=m[4],S=m[5],b=m[6],v=m[7],T=m[8],C=m[9],I=m[10],D=m[11],w=m[12],A=m[13],G=m[14],F=m[15];if(p[0].setComponents(x-g,v-M,D-T,F-w).normalize(),p[1].setComponents(x+g,v+M,D+T,F+w).normalize(),p[2].setComponents(x+_,v+S,D+C,F+A).normalize(),p[3].setComponents(x-_,v-S,D-C,F-A).normalize(),p[4].setComponents(x-y,v-b,D-I,F-G).normalize(),h===2000)p[5].setComponents(x+y,v+b,D+I,F+G).normalize();else if(h===2001)p[5].setComponents(y,b,I,G).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+h);return this}intersectsObject(a){if(a.boundingSphere!==void 0){if(a.boundingSphere===null)a.computeBoundingSphere();Pi.copy(a.boundingSphere).applyMatrix4(a.matrixWorld)}else{let h=a.geometry;if(h.boundingSphere===null)h.computeBoundingSphere();Pi.copy(h.boundingSphere).applyMatrix4(a.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(a){return Pi.center.set(0,0,0),Pi.radius=0.7071067811865476,Pi.applyMatrix4(a.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(a){let h=this.planes,p=a.center,m=-a.radius;for(let g=0;g<6;g++)if(h[g].distanceToPoint(p)<m)return!1;return!0}intersectsBox(a){let h=this.planes;for(let p=0;p<6;p++){let m=h[p];if(Er.x=m.normal.x>0?a.max.x:a.min.x,Er.y=m.normal.y>0?a.max.y:a.min.y,Er.z=m.normal.z>0?a.max.z:a.min.z,m.distanceToPoint(Er)<0)return!1}return!0}containsPoint(a){let h=this.planes;for(let p=0;p<6;p++)if(h[p].distanceToPoint(a)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rc(){let a=null,h=!1,p=null,m=null;function g(_,y){p(_,y),m=a.requestAnimationFrame(g)}return{start:function(){if(h===!0)return;if(p===null)return;m=a.requestAnimationFrame(g),h=!0},stop:function(){a.cancelAnimationFrame(m),h=!1},setAnimationLoop:function(_){p=_},setContext:function(_){a=_}}}function Oh(a){let h=new WeakMap;function p(x,M){let{array:S,usage:b}=x,v=S.byteLength,T=a.createBuffer();a.bindBuffer(M,T),a.bufferData(M,S,b),x.onUploadCallback();let C;if(S instanceof Float32Array)C=a.FLOAT;else if(S instanceof Uint16Array)if(x.isFloat16BufferAttribute)C=a.HALF_FLOAT;else C=a.UNSIGNED_SHORT;else if(S instanceof Int16Array)C=a.SHORT;else if(S instanceof Uint32Array)C=a.UNSIGNED_INT;else if(S instanceof Int32Array)C=a.INT;else if(S instanceof Int8Array)C=a.BYTE;else if(S instanceof Uint8Array)C=a.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)C=a.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:T,type:C,bytesPerElement:S.BYTES_PER_ELEMENT,version:x.version,size:v}}function m(x,M,S){let{array:b,updateRanges:v}=M;if(a.bindBuffer(S,x),v.length===0)a.bufferSubData(S,0,b);else{v.sort((C,I)=>C.start-I.start);let T=0;for(let C=1;C<v.length;C++){let I=v[T],D=v[C];if(D.start<=I.start+I.count+1)I.count=Math.max(I.count,D.start+D.count-I.start);else++T,v[T]=D}v.length=T+1;for(let C=0,I=v.length;C<I;C++){let D=v[C];a.bufferSubData(S,D.start*b.BYTES_PER_ELEMENT,b,D.start,D.count)}M.clearUpdateRanges()}M.onUploadCallback()}function g(x){if(x.isInterleavedBufferAttribute)x=x.data;return h.get(x)}function _(x){if(x.isInterleavedBufferAttribute)x=x.data;let M=h.get(x);if(M)a.deleteBuffer(M.buffer),h.delete(x)}function y(x,M){if(x.isInterleavedBufferAttribute)x=x.data;if(x.isGLBufferAttribute){let b=h.get(x);if(!b||b.version<x.version)h.set(x,{buffer:x.buffer,type:x.type,bytesPerElement:x.elementSize,version:x.version});return}let S=h.get(x);if(S===void 0)h.set(x,p(x,M));else if(S.version<x.version){if(S.size!==x.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");m(S.buffer,x,M),S.version=x.version}}return{get:g,remove:_,update:y}}class Yn extends Qe{constructor(a=1,h=1,p=1,m=1){super();this.type="PlaneGeometry",this.parameters={width:a,height:h,widthSegments:p,heightSegments:m};let g=a/2,_=h/2,y=Math.floor(p),x=Math.floor(m),M=y+1,S=x+1,b=a/y,v=h/x,T=[],C=[],I=[],D=[];for(let w=0;w<S;w++){let A=w*v-_;for(let G=0;G<M;G++){let F=G*b-g;C.push(F,-A,0),I.push(0,0,1),D.push(G/y),D.push(1-w/x)}}for(let w=0;w<x;w++)for(let A=0;A<y;A++){let G=A+M*w,F=A+M*(w+1),H=A+1+M*(w+1),rt=A+1+M*w;T.push(G,F,rt),T.push(F,H,rt)}this.setIndex(T),this.setAttribute("position",new Pe(C,3)),this.setAttribute("normal",new Pe(I,3)),this.setAttribute("uv",new Pe(D,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new Yn(a.width,a.height,a.widthSegments,a.heightSegments)}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zh=`#ifdef USE_ALPHAHASH
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
#endif`,Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
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
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`#ifdef USE_BATCHING
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
#endif`,Yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,jh=`#ifdef USE_BUMPMAP
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ou=`#define PI 3.141592653589793
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
} // validated`,lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cu=`vec3 transformedNormal = objectNormal;
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
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",mu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
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
}`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cu=`uniform bool receiveShadow;
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
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
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
#endif`,Fu=`struct PhysicalMaterial {
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
}`,Ou=`
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
#endif`;var Bu=`#if defined( RE_IndirectDiffuse )
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ku=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yu=`#if defined( USE_POINTS_UV )
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
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ku=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qu=`#ifdef USE_MORPHTARGETS
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
#endif`,td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
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
#endif`,od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sd=`float getShadowMask() {
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
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
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
#endif`,Dd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`#include <common>
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
}`,Vd=`#if DEPTH_PACKING == 3200
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
}`,Xd=`#define DISTANCE
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
}`,qd=`#define DISTANCE
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`uniform float scale;
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
}`,$d=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,jd=`uniform vec3 diffuse;
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
}`,Qd=`#define LAMBERT
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
}`,tf=`#define LAMBERT
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
}`,ef=`#define MATCAP
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
}`,nf=`#define MATCAP
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
}`,sf=`#define NORMAL
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
}`,rf=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,of=`#define PHONG
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
}`,lf=`#define STANDARD
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
}`,cf=`#define STANDARD
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
}`,hf=`#define TOON
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
}`,uf=`#define TOON
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
}`,df=`uniform float size;
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,mf=`uniform vec3 color;
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
}`,gf=`uniform float rotation;
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
}`,_f=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:Bh,alphahash_pars_fragment:zh,alphamap_fragment:Hh,alphamap_pars_fragment:kh,alphatest_fragment:Gh,alphatest_pars_fragment:Wh,aomap_fragment:Vh,aomap_pars_fragment:Xh,batching_pars_vertex:qh,batching_vertex:Yh,begin_vertex:Zh,beginnormal_vertex:Jh,bsdfs:$h,iridescence_fragment:Kh,bumpmap_pars_fragment:jh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:tu,clipping_planes_pars_vertex:eu,clipping_planes_vertex:nu,color_fragment:iu,color_pars_fragment:su,color_pars_vertex:ru,color_vertex:au,common:ou,cube_uv_reflection_fragment:lu,defaultnormal_vertex:cu,displacementmap_pars_vertex:hu,displacementmap_vertex:uu,emissivemap_fragment:du,emissivemap_pars_fragment:fu,colorspace_fragment:pu,colorspace_pars_fragment:mu,envmap_fragment:gu,envmap_common_pars_fragment:_u,envmap_pars_fragment:xu,envmap_pars_vertex:yu,envmap_physical_pars_fragment:Pu,envmap_vertex:vu,fog_vertex:Mu,fog_pars_vertex:Su,fog_fragment:Eu,fog_pars_fragment:bu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:wu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:Ru,lights_pars_begin:Cu,lights_toon_fragment:Iu,lights_toon_pars_fragment:Du,lights_phong_fragment:Lu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Nu,lights_physical_pars_fragment:Fu,lights_fragment_begin:Ou,lights_fragment_maps:Bu,lights_fragment_end:zu,logdepthbuf_fragment:Hu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Wu,map_fragment:Vu,map_pars_fragment:Xu,map_particle_fragment:qu,map_particle_pars_fragment:Yu,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:Ju,morphinstance_vertex:$u,morphcolor_vertex:Ku,morphnormal_vertex:ju,morphtarget_pars_vertex:Qu,morphtarget_vertex:td,normal_fragment_begin:ed,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:sd,normal_vertex:rd,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:hd,opaque_fragment:ud,packing:dd,premultiplied_alpha_fragment:fd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:vd,shadowmap_vertex:Md,shadowmask_pars_fragment:Sd,skinbase_vertex:Ed,skinning_pars_vertex:bd,skinning_vertex:Td,skinnormal_vertex:wd,specularmap_fragment:Ad,specularmap_pars_fragment:Rd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Pd,transmission_fragment:Id,transmission_pars_fragment:Dd,uv_pars_fragment:Ld,uv_pars_vertex:Ud,uv_vertex:Nd,worldpos_vertex:Fd,background_vert:Od,background_frag:Bd,backgroundCube_vert:zd,backgroundCube_frag:Hd,cube_vert:kd,cube_frag:Gd,depth_vert:Wd,depth_frag:Vd,distanceRGBA_vert:Xd,distanceRGBA_frag:qd,equirect_vert:Yd,equirect_frag:Zd,linedashed_vert:Jd,linedashed_frag:$d,meshbasic_vert:Kd,meshbasic_frag:jd,meshlambert_vert:Qd,meshlambert_frag:tf,meshmatcap_vert:ef,meshmatcap_frag:nf,meshnormal_vert:sf,meshnormal_frag:rf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:hf,meshtoon_frag:uf,points_vert:df,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},Nt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Et(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Vn={basic:{uniforms:dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:dn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:dn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:dn([Nt.points,Nt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:dn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:dn([Nt.common,Nt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:dn([Nt.sprite,Nt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:dn([Nt.common,Nt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:dn([Nt.lights,Nt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Vn.physical={uniforms:dn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};var br={r:0,b:0,g:0},Ii=new Xn,xf=new Ce;function yf(a,h,p,m,g,_,y){let x=new xe(0),M=_===!0?0:1,S,b,v=null,T=0,C=null;function I(G){let F=G.isScene===!0?G.background:null;if(F&&F.isTexture)F=(G.backgroundBlurriness>0?p:h).get(F);return F}function D(G){let F=!1,H=I(G);if(H===null)A(x,M);else if(H&&H.isColor)A(H,1),F=!0;let rt=a.xr.getEnvironmentBlendMode();if(rt==="additive")m.buffers.color.setClear(0,0,0,1,y);else if(rt==="alpha-blend")m.buffers.color.setClear(0,0,0,0,y);if(a.autoClear||F)m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil)}function w(G,F){let H=I(F);if(H&&(H.isCubeTexture||H.mapping===306)){if(b===void 0)b=new ne(new sn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:hs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),b.geometry.deleteAttribute("normal"),b.geometry.deleteAttribute("uv"),b.onBeforeRender=function(rt,q,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),g.update(b);if(Ii.copy(F.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1)Ii.y*=-1,Ii.z*=-1;if(b.material.uniforms.envMap.value=H,b.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,b.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,b.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,b.material.uniforms.backgroundRotation.value.setFromMatrix4(xf.makeRotationFromEuler(Ii)),b.material.toneMapped=Ae.getTransfer(H.colorSpace)!=="srgb",v!==H||T!==H.version||C!==a.toneMapping)b.material.needsUpdate=!0,v=H,T=H.version,C=a.toneMapping;b.layers.enableAll(),G.unshift(b,b.geometry,b.material,0,0,null)}else if(H&&H.isTexture){if(S===void 0)S=new ne(new Yn(2,2),new ri({name:"BackgroundMaterial",uniforms:hs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),Object.defineProperty(S.material,"map",{get:function(){return this.uniforms.t2D.value}}),g.update(S);if(S.material.uniforms.t2D.value=H,S.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,S.material.toneMapped=Ae.getTransfer(H.colorSpace)!=="srgb",H.matrixAutoUpdate===!0)H.updateMatrix();if(S.material.uniforms.uvTransform.value.copy(H.matrix),v!==H||T!==H.version||C!==a.toneMapping)S.material.needsUpdate=!0,v=H,T=H.version,C=a.toneMapping;S.layers.enableAll(),G.unshift(S,S.geometry,S.material,0,0,null)}}function A(G,F){G.getRGB(br,nc(a)),m.buffers.color.setClear(br.r,br.g,br.b,F,y)}return{getClearColor:function(){return x},setClearColor:function(G,F=1){x.set(G),M=F,A(x,M)},getClearAlpha:function(){return M},setClearAlpha:function(G){M=G,A(x,M)},render:D,addToRenderList:w}}function vf(a,h){let p=a.getParameter(a.MAX_VERTEX_ATTRIBS),m={},g=T(null),_=g,y=!1;function x(z,j,at,ct,ht){let _t=!1,J=v(ct,at,j);if(_!==J)_=J,S(_.object);if(_t=C(z,ct,at,ht),_t)I(z,ct,at,ht);if(ht!==null)h.update(ht,a.ELEMENT_ARRAY_BUFFER);if(_t||y){if(y=!1,H(z,j,at,ct),ht!==null)a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.get(ht).buffer)}}function M(){return a.createVertexArray()}function S(z){return a.bindVertexArray(z)}function b(z){return a.deleteVertexArray(z)}function v(z,j,at){let ct=at.wireframe===!0,ht=m[z.id];if(ht===void 0)ht={},m[z.id]=ht;let _t=ht[j.id];if(_t===void 0)_t={},ht[j.id]=_t;let J=_t[ct];if(J===void 0)J=T(M()),_t[ct]=J;return J}function T(z){let j=[],at=[],ct=[];for(let ht=0;ht<p;ht++)j[ht]=0,at[ht]=0,ct[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:at,attributeDivisors:ct,object:z,attributes:{},index:null}}function C(z,j,at,ct){let ht=_.attributes,_t=j.attributes,J=0,it=at.getAttributes();for(let Z in it)if(it[Z].location>=0){let L=ht[Z],qt=_t[Z];if(qt===void 0){if(Z==="instanceMatrix"&&z.instanceMatrix)qt=z.instanceMatrix;if(Z==="instanceColor"&&z.instanceColor)qt=z.instanceColor}if(L===void 0)return!0;if(L.attribute!==qt)return!0;if(qt&&L.data!==qt.data)return!0;J++}if(_.attributesNum!==J)return!0;if(_.index!==ct)return!0;return!1}function I(z,j,at,ct){let ht={},_t=j.attributes,J=0,it=at.getAttributes();for(let Z in it)if(it[Z].location>=0){let L=_t[Z];if(L===void 0){if(Z==="instanceMatrix"&&z.instanceMatrix)L=z.instanceMatrix;if(Z==="instanceColor"&&z.instanceColor)L=z.instanceColor}let qt={};if(qt.attribute=L,L&&L.data)qt.data=L.data;ht[Z]=qt,J++}_.attributes=ht,_.attributesNum=J,_.index=ct}function D(){let z=_.newAttributes;for(let j=0,at=z.length;j<at;j++)z[j]=0}function w(z){A(z,0)}function A(z,j){let at=_.newAttributes,ct=_.enabledAttributes,ht=_.attributeDivisors;if(at[z]=1,ct[z]===0)a.enableVertexAttribArray(z),ct[z]=1;if(ht[z]!==j)a.vertexAttribDivisor(z,j),ht[z]=j}function G(){let z=_.newAttributes,j=_.enabledAttributes;for(let at=0,ct=j.length;at<ct;at++)if(j[at]!==z[at])a.disableVertexAttribArray(at),j[at]=0}function F(z,j,at,ct,ht,_t,J){if(J===!0)a.vertexAttribIPointer(z,j,at,ht,_t);else a.vertexAttribPointer(z,j,at,ct,ht,_t)}function H(z,j,at,ct){D();let ht=ct.attributes,_t=at.getAttributes(),J=j.defaultAttributeValues;for(let it in _t){let Z=_t[it];if(Z.location>=0){let Rt=ht[it];if(Rt===void 0){if(it==="instanceMatrix"&&z.instanceMatrix)Rt=z.instanceMatrix;if(it==="instanceColor"&&z.instanceColor)Rt=z.instanceColor}if(Rt!==void 0){let L=Rt.normalized,qt=Rt.itemSize,ee=h.get(Rt);if(ee===void 0)continue;let{buffer:pt,type:wt,bytesPerElement:$t}=ee,Wt=wt===a.INT||wt===a.UNSIGNED_INT||Rt.gpuType===1013;if(Rt.isInterleavedBufferAttribute){let It=Rt.data,se=It.stride,ye=Rt.offset;if(It.isInstancedInterleavedBuffer){for(let re=0;re<Z.locationSize;re++)A(Z.location+re,It.meshPerAttribute);if(z.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0)ct._maxInstanceCount=It.meshPerAttribute*It.count}else for(let re=0;re<Z.locationSize;re++)w(Z.location+re);a.bindBuffer(a.ARRAY_BUFFER,pt);for(let re=0;re<Z.locationSize;re++)F(Z.location+re,qt/Z.locationSize,wt,L,se*$t,(ye+qt/Z.locationSize*re)*$t,Wt)}else{if(Rt.isInstancedBufferAttribute){for(let It=0;It<Z.locationSize;It++)A(Z.location+It,Rt.meshPerAttribute);if(z.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0)ct._maxInstanceCount=Rt.meshPerAttribute*Rt.count}else for(let It=0;It<Z.locationSize;It++)w(Z.location+It);a.bindBuffer(a.ARRAY_BUFFER,pt);for(let It=0;It<Z.locationSize;It++)F(Z.location+It,qt/Z.locationSize,wt,L,qt*$t,qt/Z.locationSize*It*$t,Wt)}}else if(J!==void 0){let L=J[it];if(L!==void 0)switch(L.length){case 2:a.vertexAttrib2fv(Z.location,L);break;case 3:a.vertexAttrib3fv(Z.location,L);break;case 4:a.vertexAttrib4fv(Z.location,L);break;default:a.vertexAttrib1fv(Z.location,L)}}}}G()}function rt(){ut();for(let z in m){let j=m[z];for(let at in j){let ct=j[at];for(let ht in ct)b(ct[ht].object),delete ct[ht];delete j[at]}delete m[z]}}function q(z){if(m[z.id]===void 0)return;let j=m[z.id];for(let at in j){let ct=j[at];for(let ht in ct)b(ct[ht].object),delete ct[ht];delete j[at]}delete m[z.id]}function Y(z){for(let j in m){let at=m[j];if(at[z.id]===void 0)continue;let ct=at[z.id];for(let ht in ct)b(ct[ht].object),delete ct[ht];delete at[z.id]}}function ut(){if(B(),y=!0,_===g)return;_=g,S(_.object)}function B(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:x,reset:ut,resetDefaultState:B,dispose:rt,releaseStatesOfGeometry:q,releaseStatesOfProgram:Y,initAttributes:D,enableAttribute:w,disableUnusedAttributes:G}}function Mf(a,h,p){let m;function g(S){m=S}function _(S,b){a.drawArrays(m,S,b),p.update(b,m,1)}function y(S,b,v){if(v===0)return;a.drawArraysInstanced(m,S,b,v),p.update(b,m,v)}function x(S,b,v){if(v===0)return;h.get("WEBGL_multi_draw").multiDrawArraysWEBGL(m,S,0,b,0,v);let C=0;for(let I=0;I<v;I++)C+=b[I];p.update(C,m,1)}function M(S,b,v,T){if(v===0)return;let C=h.get("WEBGL_multi_draw");if(C===null)for(let I=0;I<S.length;I++)y(S[I],b[I],T[I]);else{C.multiDrawArraysInstancedWEBGL(m,S,0,b,0,T,0,v);let I=0;for(let D=0;D<v;D++)I+=b[D]*T[D];p.update(I,m,1)}}this.setMode=g,this.render=_,this.renderInstances=y,this.renderMultiDraw=x,this.renderMultiDrawInstances=M}function Sf(a,h,p,m){let g;function _(){if(g!==void 0)return g;if(h.has("EXT_texture_filter_anisotropic")===!0){let Y=h.get("EXT_texture_filter_anisotropic");g=a.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function y(Y){if(Y!==1023&&m.convert(Y)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function x(Y){let ut=Y===1016&&(h.has("EXT_color_buffer_half_float")||h.has("EXT_color_buffer_float"));if(Y!==1009&&m.convert(Y)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&Y!==1015&&!ut)return!1;return!0}function M(Y){if(Y==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";Y="mediump"}if(Y==="mediump"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let S=p.precision!==void 0?p.precision:"highp",b=M(S);if(b!==S)console.warn("THREE.WebGLRenderer:",S,"not supported, using",b,"instead."),S=b;let v=p.logarithmicDepthBuffer===!0,T=p.reverseDepthBuffer===!0&&h.has("EXT_clip_control"),C=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),I=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=a.getParameter(a.MAX_TEXTURE_SIZE),w=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),A=a.getParameter(a.MAX_VERTEX_ATTRIBS),G=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),F=a.getParameter(a.MAX_VARYING_VECTORS),H=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),rt=I>0,q=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:_,getMaxPrecision:M,textureFormatReadable:y,textureTypeReadable:x,precision:S,logarithmicDepthBuffer:v,reverseDepthBuffer:T,maxTextures:C,maxVertexTextures:I,maxTextureSize:D,maxCubemapSize:w,maxAttributes:A,maxVertexUniforms:G,maxVaryings:F,maxFragmentUniforms:H,vertexTextures:rt,maxSamples:q}}function Ef(a){let h=this,p=null,m=0,g=!1,_=!1,y=new En,x=new _e,M={value:null,needsUpdate:!1};this.uniform=M,this.numPlanes=0,this.numIntersection=0,this.init=function(v,T){let C=v.length!==0||T||m!==0||g;return g=T,m=v.length,C},this.beginShadows=function(){_=!0,b(null)},this.endShadows=function(){_=!1},this.setGlobalState=function(v,T){p=b(v,T,0)},this.setState=function(v,T,C){let{clippingPlanes:I,clipIntersection:D,clipShadows:w}=v,A=a.get(v);if(!g||I===null||I.length===0||_&&!w)if(_)b(null);else S();else{let G=_?0:m,F=G*4,H=A.clippingState||null;M.value=H,H=b(I,T,F,C);for(let rt=0;rt!==F;++rt)H[rt]=p[rt];A.clippingState=H,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=G}};function S(){if(M.value!==p)M.value=p,M.needsUpdate=m>0;h.numPlanes=m,h.numIntersection=0}function b(v,T,C,I){let D=v!==null?v.length:0,w=null;if(D!==0){if(w=M.value,I!==!0||w===null){let A=C+D*4,G=T.matrixWorldInverse;if(x.getNormalMatrix(G),w===null||w.length<A)w=new Float32Array(A);for(let F=0,H=C;F!==D;++F,H+=4)y.copy(v[F]).applyMatrix4(G,x),y.normal.toArray(w,H),w[H+3]=y.constant}M.value=w,M.needsUpdate=!0}return h.numPlanes=D,h.numIntersection=0,w}}function bf(a){let h=new WeakMap;function p(y,x){if(x===303)y.mapping=301;else if(x===304)y.mapping=302;return y}function m(y){if(y&&y.isTexture){let x=y.mapping;if(x===303||x===304)if(h.has(y)){let M=h.get(y).texture;return p(M,y.mapping)}else{let M=y.image;if(M&&M.height>0){let S=new sc(M.height);return S.fromEquirectangularTexture(a,y),h.set(y,S),y.addEventListener("dispose",g),p(S.texture,y.mapping)}else return null}}return y}function g(y){let x=y.target;x.removeEventListener("dispose",g);let M=h.get(x);if(M!==void 0)h.delete(x),M.dispose()}function _(){h=new WeakMap}return{get:m,dispose:_}}class Xs extends no{constructor(a=-1,h=1,p=1,m=-1,g=0.1,_=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=a,this.right=h,this.top=p,this.bottom=m,this.near=g,this.far=_,this.updateProjectionMatrix()}copy(a,h){return super.copy(a,h),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this.view=a.view===null?null:Object.assign({},a.view),this}setViewOffset(a,h,p,m,g,_){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=h,this.view.offsetX=p,this.view.offsetY=m,this.view.width=g,this.view.height=_,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let a=(this.right-this.left)/(2*this.zoom),h=(this.top-this.bottom)/(2*this.zoom),p=(this.right+this.left)/2,m=(this.top+this.bottom)/2,g=p-a,_=p+a,y=m+h,x=m-h;if(this.view!==null&&this.view.enabled){let M=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;g+=M*this.view.offsetX,_=g+M*this.view.width,y-=S*this.view.offsetY,x=y-S*this.view.height}this.projectionMatrix.makeOrthographic(g,_,y,x,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){let h=super.toJSON(a);if(h.object.zoom=this.zoom,h.object.left=this.left,h.object.right=this.right,h.object.top=this.top,h.object.bottom=this.bottom,h.object.near=this.near,h.object.far=this.far,this.view!==null)h.object.view=Object.assign({},this.view);return h}}var rs=4,ll=[0.125,0.215,0.35,0.446,0.526,0.582],Ui=20,Ca=new Xs,cl=new xe,Pa=null,Ia=0,Da=0,La=!1,Li=(1+Math.sqrt(5))/2,ns=1/Li,hl=[new X(-Li,ns,0),new X(Li,ns,0),new X(-ns,0,Li),new X(ns,0,Li),new X(0,Li,-ns),new X(0,Li,ns),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Hs{constructor(a){this._renderer=a,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(a,h=0,p=0.1,m=100){Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let g=this._allocateTargets();if(g.depthBuffer=!0,this._sceneToCubeUV(a,p,m,g),h>0)this._blur(g,0,0,h);return this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(a,h=null){return this._fromTexture(a,h)}fromCubemap(a,h=null){return this._fromTexture(a,h)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=dl(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(a){this._lodMax=Math.floor(Math.log2(a)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let a=0;a<this._lodPlanes.length;a++)this._lodPlanes[a].dispose()}_cleanup(a){this._renderer.setRenderTarget(Pa,Ia,Da),this._renderer.xr.enabled=La,a.scissorTest=!1,Tr(a,0,0,a.width,a.height)}_fromTexture(a,h){if(a.mapping===301||a.mapping===302)this._setSize(a.image.length===0?16:a.image[0].width||a.image[0].image.width);else this._setSize(a.image.width/4);Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let p=h||this._allocateTargets();return this._textureToCubeUV(a,p),this._applyPMREM(p),this._cleanup(p),p}_allocateTargets(){let a=3*Math.max(this._cubeSize,112),h=4*this._cubeSize,p={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},m=ul(a,h,p);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==a||this._pingPongRenderTarget.height!==h){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=ul(a,h,p);let{_lodMax:g}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(g)),this._blurMaterial=wf(g,a,h)}return m}_compileMaterial(a){let h=new ne(this._lodPlanes[0],a);this._renderer.compile(h,Ca)}_sceneToCubeUV(a,h,p,m){let y=new ln(90,1,h,p),x=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],S=this._renderer,{autoClear:b,toneMapping:v}=S;S.getClearColor(cl),S.toneMapping=0,S.autoClear=!1;let T=new Bi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),C=new ne(new sn,T),I=!1,D=a.background;if(D){if(D.isColor)T.color.copy(D),a.background=null,I=!0}else T.color.copy(cl),I=!0;for(let w=0;w<6;w++){let A=w%3;if(A===0)y.up.set(0,x[w],0),y.lookAt(M[w],0,0);else if(A===1)y.up.set(0,0,x[w]),y.lookAt(0,M[w],0);else y.up.set(0,x[w],0),y.lookAt(0,0,M[w]);let G=this._cubeSize;if(Tr(m,A*G,w>2?G:0,G,G),S.setRenderTarget(m),I)S.render(C,y);S.render(a,y)}C.geometry.dispose(),C.material.dispose(),S.toneMapping=v,S.autoClear=b,a.background=D}_textureToCubeUV(a,h){let p=this._renderer,m=a.mapping===301||a.mapping===302;if(m){if(this._cubemapMaterial===null)this._cubemapMaterial=fl();this._cubemapMaterial.uniforms.flipEnvMap.value=a.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=dl();let g=m?this._cubemapMaterial:this._equirectMaterial,_=new ne(this._lodPlanes[0],g),y=g.uniforms;y.envMap.value=a;let x=this._cubeSize;Tr(h,0,0,3*x,2*x),p.setRenderTarget(h),p.render(_,Ca)}_applyPMREM(a){let h=this._renderer,p=h.autoClear;h.autoClear=!1;let m=this._lodPlanes.length;for(let g=1;g<m;g++){let _=Math.sqrt(this._sigmas[g]*this._sigmas[g]-this._sigmas[g-1]*this._sigmas[g-1]),y=hl[(m-g-1)%hl.length];this._blur(a,g-1,g,_,y)}h.autoClear=p}_blur(a,h,p,m,g){let _=this._pingPongRenderTarget;this._halfBlur(a,_,h,p,m,"latitudinal",g),this._halfBlur(_,a,p,p,m,"longitudinal",g)}_halfBlur(a,h,p,m,g,_,y){let x=this._renderer,M=this._blurMaterial;if(_!=="latitudinal"&&_!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let S=3,b=new ne(this._lodPlanes[m],M),v=M.uniforms,T=this._sizeLods[p]-1,C=isFinite(g)?Math.PI/(2*T):2*Math.PI/(2*Ui-1),I=g/C,D=isFinite(g)?1+Math.floor(S*I):Ui;if(D>Ui)console.warn(`sigmaRadians, ${g}, is too large and will clip, as it requested ${D} samples when the maximum is set to ${Ui}`);let w=[],A=0;for(let q=0;q<Ui;++q){let Y=q/I,ut=Math.exp(-Y*Y/2);if(w.push(ut),q===0)A+=ut;else if(q<D)A+=2*ut}for(let q=0;q<w.length;q++)w[q]=w[q]/A;if(v.envMap.value=a.texture,v.samples.value=D,v.weights.value=w,v.latitudinal.value=_==="latitudinal",y)v.poleAxis.value=y;let{_lodMax:G}=this;v.dTheta.value=C,v.mipInt.value=G-p;let F=this._sizeLods[m],H=3*F*(m>G-rs?m-G+rs:0),rt=4*(this._cubeSize-F);Tr(h,H,rt,3*F,2*F),x.setRenderTarget(h),x.render(b,Ca)}}function Tf(a){let h=[],p=[],m=[],g=a,_=a-rs+1+ll.length;for(let y=0;y<_;y++){let x=Math.pow(2,g);p.push(x);let M=1/x;if(y>a-rs)M=ll[y-a+rs-1];else if(y===0)M=0;m.push(M);let S=1/(x-2),b=-S,v=1+S,T=[b,b,v,b,v,v,b,b,v,v,b,v],C=6,I=6,D=3,w=2,A=1,G=new Float32Array(D*I*C),F=new Float32Array(w*I*C),H=new Float32Array(A*I*C);for(let q=0;q<C;q++){let Y=q%3*2/3-1,ut=q>2?0:-1,B=[Y,ut,0,Y+0.6666666666666666,ut,0,Y+0.6666666666666666,ut+1,0,Y,ut,0,Y+0.6666666666666666,ut+1,0,Y,ut+1,0];G.set(B,D*I*q),F.set(T,w*I*q);let z=[q,q,q,q,q,q];H.set(z,A*I*q)}let rt=new Qe;if(rt.setAttribute("position",new Cn(G,D)),rt.setAttribute("uv",new Cn(F,w)),rt.setAttribute("faceIndex",new Cn(H,A)),h.push(rt),g>rs)g--}return{lodPlanes:h,sizeLods:p,sigmas:m}}function ul(a,h,p){let m=new xi(a,h,p);return m.texture.mapping=306,m.texture.name="PMREM.cubeUv",m.scissorTest=!0,m}function Tr(a,h,p,m,g){a.viewport.set(h,p,m,g),a.scissor.set(h,p,m,g)}function wf(a,h,p){let m=new Float32Array(Ui),g=new X(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/h,CUBEUV_TEXEL_HEIGHT:1/p,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:m},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:g}},vertexShader:so(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function dl(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function fl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}function Af(a){let h=new WeakMap,p=null;function m(x){if(x&&x.isTexture){let M=x.mapping,S=M===303||M===304,b=M===301||M===302;if(S||b){let v=h.get(x),T=v!==void 0?v.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==T){if(p===null)p=new Hs(a);return v=S?p.fromEquirectangular(x,v):p.fromCubemap(x,v),v.texture.pmremVersion=x.pmremVersion,h.set(x,v),v.texture}else if(v!==void 0)return v.texture;else{let C=x.image;if(S&&C&&C.height>0||b&&C&&g(C)){if(p===null)p=new Hs(a);return v=S?p.fromEquirectangular(x):p.fromCubemap(x),v.texture.pmremVersion=x.pmremVersion,h.set(x,v),x.addEventListener("dispose",_),v.texture}else return null}}}return x}function g(x){let M=0,S=6;for(let b=0;b<S;b++)if(x[b]!==void 0)M++;return M===S}function _(x){let M=x.target;M.removeEventListener("dispose",_);let S=h.get(M);if(S!==void 0)h.delete(M),S.dispose()}function y(){if(h=new WeakMap,p!==null)p.dispose(),p=null}return{get:m,dispose:y}}function Rf(a){let h={};function p(m){if(h[m]!==void 0)return h[m];let g;switch(m){case"WEBGL_depth_texture":g=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":g=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":g=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":g=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:g=a.getExtension(m)}return h[m]=g,g}return{has:function(m){return p(m)!==null},init:function(){p("EXT_color_buffer_float"),p("WEBGL_clip_cull_distance"),p("OES_texture_float_linear"),p("EXT_color_buffer_half_float"),p("WEBGL_multisampled_render_to_texture"),p("WEBGL_render_shared_exponent")},get:function(m){let g=p(m);if(g===null)Us("THREE.WebGLRenderer: "+m+" extension not supported.");return g}}}function Cf(a,h,p,m){let g={},_=new WeakMap;function y(v){let T=v.target;if(T.index!==null)h.remove(T.index);for(let I in T.attributes)h.remove(T.attributes[I]);for(let I in T.morphAttributes){let D=T.morphAttributes[I];for(let w=0,A=D.length;w<A;w++)h.remove(D[w])}T.removeEventListener("dispose",y),delete g[T.id];let C=_.get(T);if(C)h.remove(C),_.delete(T);if(m.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0)delete T._maxInstanceCount;p.memory.geometries--}function x(v,T){if(g[T.id]===!0)return T;return T.addEventListener("dispose",y),g[T.id]=!0,p.memory.geometries++,T}function M(v){let T=v.attributes;for(let I in T)h.update(T[I],a.ARRAY_BUFFER);let C=v.morphAttributes;for(let I in C){let D=C[I];for(let w=0,A=D.length;w<A;w++)h.update(D[w],a.ARRAY_BUFFER)}}function S(v){let T=[],C=v.index,I=v.attributes.position,D=0;if(C!==null){let G=C.array;D=C.version;for(let F=0,H=G.length;F<H;F+=3){let rt=G[F+0],q=G[F+1],Y=G[F+2];T.push(rt,q,q,Y,Y,rt)}}else if(I!==void 0){let G=I.array;D=I.version;for(let F=0,H=G.length/3-1;F<H;F+=3){let rt=F+0,q=F+1,Y=F+2;T.push(rt,q,q,Y,Y,rt)}}else return;let w=new((Kl(T))?eo:to)(T,1);w.version=D;let A=_.get(v);if(A)h.remove(A);_.set(v,w)}function b(v){let T=_.get(v);if(T){let C=v.index;if(C!==null){if(T.version<C.version)S(v)}}else S(v);return _.get(v)}return{get:x,update:M,getWireframeAttribute:b}}function Pf(a,h,p){let m;function g(T){m=T}let _,y;function x(T){_=T.type,y=T.bytesPerElement}function M(T,C){a.drawElements(m,C,_,T*y),p.update(C,m,1)}function S(T,C,I){if(I===0)return;a.drawElementsInstanced(m,C,_,T*y,I),p.update(C,m,I)}function b(T,C,I){if(I===0)return;h.get("WEBGL_multi_draw").multiDrawElementsWEBGL(m,C,0,_,T,0,I);let w=0;for(let A=0;A<I;A++)w+=C[A];p.update(w,m,1)}function v(T,C,I,D){if(I===0)return;let w=h.get("WEBGL_multi_draw");if(w===null)for(let A=0;A<T.length;A++)S(T[A]/y,C[A],D[A]);else{w.multiDrawElementsInstancedWEBGL(m,C,0,_,T,0,D,0,I);let A=0;for(let G=0;G<I;G++)A+=C[G]*D[G];p.update(A,m,1)}}this.setMode=g,this.setIndex=x,this.render=M,this.renderInstances=S,this.renderMultiDraw=b,this.renderMultiDrawInstances=v}function If(a){let h={geometries:0,textures:0},p={frame:0,calls:0,triangles:0,points:0,lines:0};function m(_,y,x){switch(p.calls++,y){case a.TRIANGLES:p.triangles+=x*(_/3);break;case a.LINES:p.lines+=x*(_/2);break;case a.LINE_STRIP:p.lines+=x*(_-1);break;case a.LINE_LOOP:p.lines+=x*_;break;case a.POINTS:p.points+=x*_;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",y);break}}function g(){p.calls=0,p.triangles=0,p.points=0,p.lines=0}return{memory:h,render:p,programs:null,autoReset:!0,reset:g,update:m}}function Df(a,h,p){let m=new WeakMap,g=new Ne;function _(y,x,M){let S=y.morphTargetInfluences,b=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,v=b!==void 0?b.length:0,T=m.get(x);if(T===void 0||T.count!==v){let B=function(){Y.dispose(),m.delete(x),x.removeEventListener("dispose",B)};if(T!==void 0)T.texture.dispose();let C=x.morphAttributes.position!==void 0,I=x.morphAttributes.normal!==void 0,D=x.morphAttributes.color!==void 0,w=x.morphAttributes.position||[],A=x.morphAttributes.normal||[],G=x.morphAttributes.color||[],F=0;if(C===!0)F=1;if(I===!0)F=2;if(D===!0)F=3;let H=x.attributes.position.count*F,rt=1;if(H>h.maxTextureSize)rt=Math.ceil(H/h.maxTextureSize),H=h.maxTextureSize;let q=new Float32Array(H*rt*4*v),Y=new Qa(q,H,rt,v);Y.type=1015,Y.needsUpdate=!0;let ut=F*4;for(let z=0;z<v;z++){let j=w[z],at=A[z],ct=G[z],ht=H*rt*4*z;for(let _t=0;_t<j.count;_t++){let J=_t*ut;if(C===!0)g.fromBufferAttribute(j,_t),q[ht+J+0]=g.x,q[ht+J+1]=g.y,q[ht+J+2]=g.z,q[ht+J+3]=0;if(I===!0)g.fromBufferAttribute(at,_t),q[ht+J+4]=g.x,q[ht+J+5]=g.y,q[ht+J+6]=g.z,q[ht+J+7]=0;if(D===!0)g.fromBufferAttribute(ct,_t),q[ht+J+8]=g.x,q[ht+J+9]=g.y,q[ht+J+10]=g.z,q[ht+J+11]=ct.itemSize===4?g.w:1}}T={count:v,texture:Y,size:new Et(H,rt)},m.set(x,T),x.addEventListener("dispose",B)}if(y.isInstancedMesh===!0&&y.morphTexture!==null)M.getUniforms().setValue(a,"morphTexture",y.morphTexture,p);else{let C=0;for(let D=0;D<S.length;D++)C+=S[D];let I=x.morphTargetsRelative?1:1-C;M.getUniforms().setValue(a,"morphTargetBaseInfluence",I),M.getUniforms().setValue(a,"morphTargetInfluences",S)}M.getUniforms().setValue(a,"morphTargetsTexture",T.texture,p),M.getUniforms().setValue(a,"morphTargetsTextureSize",T.size)}return{update:_}}function Lf(a,h,p,m){let g=new WeakMap;function _(M){let S=m.render.frame,b=M.geometry,v=h.get(M,b);if(g.get(v)!==S)h.update(v),g.set(v,S);if(M.isInstancedMesh){if(M.hasEventListener("dispose",x)===!1)M.addEventListener("dispose",x);if(g.get(M)!==S){if(p.update(M.instanceMatrix,a.ARRAY_BUFFER),M.instanceColor!==null)p.update(M.instanceColor,a.ARRAY_BUFFER);g.set(M,S)}}if(M.isSkinnedMesh){let T=M.skeleton;if(g.get(T)!==S)T.update(),g.set(T,S)}return v}function y(){g=new WeakMap}function x(M){let S=M.target;if(S.removeEventListener("dispose",x),p.remove(S.instanceMatrix),S.instanceColor!==null)p.remove(S.instanceColor)}return{update:_,dispose:y}}class ro extends cn{constructor(a,h,p,m,g,_,y,x,M,S=1026){if(S!==1026&&S!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(p===void 0&&S===1026)p=1014;if(p===void 0&&S===1027)p=1020;super(null,m,g,_,y,x,S,p,M);this.isDepthTexture=!0,this.image={width:a,height:h},this.magFilter=y!==void 0?y:1003,this.minFilter=x!==void 0?x:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(a){return super.copy(a),this.compareFunction=a.compareFunction,this}toJSON(a){let h=super.toJSON(a);if(this.compareFunction!==null)h.compareFunction=this.compareFunction;return h}}var ac=new cn,pl=new ro(1,1),oc=new Qa,lc=new tc,cc=new io,ml=[],gl=[],_l=new Float32Array(16),xl=new Float32Array(9),yl=new Float32Array(4);function ds(a,h,p){let m=a[0];if(m<=0||m>0)return a;let g=h*p,_=ml[g];if(_===void 0)_=new Float32Array(g),ml[g]=_;if(h!==0){m.toArray(_,0);for(let y=1,x=0;y!==h;++y)x+=p,a[y].toArray(_,x)}return _}function Ze(a,h){if(a.length!==h.length)return!1;for(let p=0,m=a.length;p<m;p++)if(a[p]!==h[p])return!1;return!0}function Je(a,h){for(let p=0,m=h.length;p<m;p++)a[p]=h[p]}function Wr(a,h){let p=gl[h];if(p===void 0)p=new Int32Array(h),gl[h]=p;for(let m=0;m!==h;++m)p[m]=a.allocateTextureUnit();return p}function Uf(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1f(this.addr,h),p[0]=h}function Nf(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2f(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ze(p,h))return;a.uniform2fv(this.addr,h),Je(p,h)}}function Ff(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3f(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else if(h.r!==void 0){if(p[0]!==h.r||p[1]!==h.g||p[2]!==h.b)a.uniform3f(this.addr,h.r,h.g,h.b),p[0]=h.r,p[1]=h.g,p[2]=h.b}else{if(Ze(p,h))return;a.uniform3fv(this.addr,h),Je(p,h)}}function Of(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4f(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ze(p,h))return;a.uniform4fv(this.addr,h),Je(p,h)}}function Bf(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ze(p,h))return;a.uniformMatrix2fv(this.addr,!1,h),Je(p,h)}else{if(Ze(p,m))return;yl.set(m),a.uniformMatrix2fv(this.addr,!1,yl),Je(p,m)}}function zf(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ze(p,h))return;a.uniformMatrix3fv(this.addr,!1,h),Je(p,h)}else{if(Ze(p,m))return;xl.set(m),a.uniformMatrix3fv(this.addr,!1,xl),Je(p,m)}}function Hf(a,h){let p=this.cache,m=h.elements;if(m===void 0){if(Ze(p,h))return;a.uniformMatrix4fv(this.addr,!1,h),Je(p,h)}else{if(Ze(p,m))return;_l.set(m),a.uniformMatrix4fv(this.addr,!1,_l),Je(p,m)}}function kf(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1i(this.addr,h),p[0]=h}function Gf(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2i(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ze(p,h))return;a.uniform2iv(this.addr,h),Je(p,h)}}function Wf(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3i(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(Ze(p,h))return;a.uniform3iv(this.addr,h),Je(p,h)}}function Vf(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4i(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ze(p,h))return;a.uniform4iv(this.addr,h),Je(p,h)}}function Xf(a,h){let p=this.cache;if(p[0]===h)return;a.uniform1ui(this.addr,h),p[0]=h}function qf(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y)a.uniform2ui(this.addr,h.x,h.y),p[0]=h.x,p[1]=h.y}else{if(Ze(p,h))return;a.uniform2uiv(this.addr,h),Je(p,h)}}function Yf(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z)a.uniform3ui(this.addr,h.x,h.y,h.z),p[0]=h.x,p[1]=h.y,p[2]=h.z}else{if(Ze(p,h))return;a.uniform3uiv(this.addr,h),Je(p,h)}}function Zf(a,h){let p=this.cache;if(h.x!==void 0){if(p[0]!==h.x||p[1]!==h.y||p[2]!==h.z||p[3]!==h.w)a.uniform4ui(this.addr,h.x,h.y,h.z,h.w),p[0]=h.x,p[1]=h.y,p[2]=h.z,p[3]=h.w}else{if(Ze(p,h))return;a.uniform4uiv(this.addr,h),Je(p,h)}}function Jf(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;let _;if(this.type===a.SAMPLER_2D_SHADOW)pl.compareFunction=515,_=pl;else _=ac;p.setTexture2D(h||_,g)}function $f(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTexture3D(h||lc,g)}function Kf(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTextureCube(h||cc,g)}function jf(a,h,p){let m=this.cache,g=p.allocateTextureUnit();if(m[0]!==g)a.uniform1i(this.addr,g),m[0]=g;p.setTexture2DArray(h||oc,g)}function Qf(a){switch(a){case 5126:return Uf;case 35664:return Nf;case 35665:return Ff;case 35666:return Of;case 35674:return Bf;case 35675:return zf;case 35676:return Hf;case 5124:case 35670:return kf;case 35667:case 35671:return Gf;case 35668:case 35672:return Wf;case 35669:case 35673:return Vf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return jf}}function tp(a,h){a.uniform1fv(this.addr,h)}function ep(a,h){let p=ds(h,this.size,2);a.uniform2fv(this.addr,p)}function np(a,h){let p=ds(h,this.size,3);a.uniform3fv(this.addr,p)}function ip(a,h){let p=ds(h,this.size,4);a.uniform4fv(this.addr,p)}function sp(a,h){let p=ds(h,this.size,4);a.uniformMatrix2fv(this.addr,!1,p)}function rp(a,h){let p=ds(h,this.size,9);a.uniformMatrix3fv(this.addr,!1,p)}function ap(a,h){let p=ds(h,this.size,16);a.uniformMatrix4fv(this.addr,!1,p)}function op(a,h){a.uniform1iv(this.addr,h)}function lp(a,h){a.uniform2iv(this.addr,h)}function cp(a,h){a.uniform3iv(this.addr,h)}function hp(a,h){a.uniform4iv(this.addr,h)}function up(a,h){a.uniform1uiv(this.addr,h)}function dp(a,h){a.uniform2uiv(this.addr,h)}function fp(a,h){a.uniform3uiv(this.addr,h)}function pp(a,h){a.uniform4uiv(this.addr,h)}function mp(a,h,p){let m=this.cache,g=h.length,_=Wr(p,g);if(!Ze(m,_))a.uniform1iv(this.addr,_),Je(m,_);for(let y=0;y!==g;++y)p.setTexture2D(h[y]||ac,_[y])}function gp(a,h,p){let m=this.cache,g=h.length,_=Wr(p,g);if(!Ze(m,_))a.uniform1iv(this.addr,_),Je(m,_);for(let y=0;y!==g;++y)p.setTexture3D(h[y]||lc,_[y])}function _p(a,h,p){let m=this.cache,g=h.length,_=Wr(p,g);if(!Ze(m,_))a.uniform1iv(this.addr,_),Je(m,_);for(let y=0;y!==g;++y)p.setTextureCube(h[y]||cc,_[y])}function xp(a,h,p){let m=this.cache,g=h.length,_=Wr(p,g);if(!Ze(m,_))a.uniform1iv(this.addr,_),Je(m,_);for(let y=0;y!==g;++y)p.setTexture2DArray(h[y]||oc,_[y])}function yp(a){switch(a){case 5126:return tp;case 35664:return ep;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return hp;case 5125:return up;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return xp}}class hc{constructor(a,h,p){this.id=a,this.addr=p,this.cache=[],this.type=h.type,this.setValue=Qf(h.type)}}class uc{constructor(a,h,p){this.id=a,this.addr=p,this.cache=[],this.type=h.type,this.size=h.size,this.setValue=yp(h.type)}}class dc{constructor(a){this.id=a,this.seq=[],this.map={}}setValue(a,h,p){let m=this.seq;for(let g=0,_=m.length;g!==_;++g){let y=m[g];y.setValue(a,h[y.id],p)}}}var Ua=/(\w+)(\])?(\[|\.)?/g;function vl(a,h){a.seq.push(h),a.map[h.id]=h}function vp(a,h,p){let m=a.name,g=m.length;Ua.lastIndex=0;while(!0){let _=Ua.exec(m),y=Ua.lastIndex,x=_[1],M=_[2]==="]",S=_[3];if(M)x=x|0;if(S===void 0||S==="["&&y+2===g){vl(p,S===void 0?new hc(x,a,h):new uc(x,a,h));break}else{let v=p.map[x];if(v===void 0)v=new dc(x),vl(p,v);p=v}}}class Os{constructor(a,h){this.seq=[],this.map={};let p=a.getProgramParameter(h,a.ACTIVE_UNIFORMS);for(let m=0;m<p;++m){let g=a.getActiveUniform(h,m),_=a.getUniformLocation(h,g.name);vp(g,_,this)}}setValue(a,h,p,m){let g=this.map[h];if(g!==void 0)g.setValue(a,p,m)}setOptional(a,h,p){let m=h[p];if(m!==void 0)this.setValue(a,p,m)}static upload(a,h,p,m){for(let g=0,_=h.length;g!==_;++g){let y=h[g],x=p[y.id];if(x.needsUpdate!==!1)y.setValue(a,x.value,m)}}static seqWithValue(a,h){let p=[];for(let m=0,g=a.length;m!==g;++m){let _=a[m];if(_.id in h)p.push(_)}return p}}function Ml(a,h,p){let m=a.createShader(h);return a.shaderSource(m,p),a.compileShader(m),m}var Mp=37297,Sp=0;function Ep(a,h){let p=a.split(`
`),m=[],g=Math.max(h-6,0),_=Math.min(h+6,p.length);for(let y=g;y<_;y++){let x=y+1;m.push(`${x===h?">":" "} ${x}: ${p[y]}`)}return m.join(`
`)}var Sl=new _e;function bp(a){Ae._getMatrix(Sl,Ae.workingColorSpace,a);let h=`mat3( ${Sl.elements.map((p)=>p.toFixed(4))} )`;switch(Ae.getTransfer(a)){case"linear":return[h,"LinearTransferOETF"];case"srgb":return[h,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[h,"LinearTransferOETF"]}}function El(a,h,p){let m=a.getShaderParameter(h,a.COMPILE_STATUS),g=a.getShaderInfoLog(h).trim();if(m&&g==="")return"";let _=/ERROR: 0:(\d+)/.exec(g);if(_){let y=parseInt(_[1]);return p.toUpperCase()+`

`+g+`

`+Ep(a.getShaderSource(h),y)}else return g}function Tp(a,h){let p=bp(h);return[`vec4 ${a}( vec4 value ) {`,`	return ${p[1]}( vec4( value.rgb * ${p[0]}, value.a ) );`,"}"].join(`
`)}function wp(a,h){let p;switch(h){case 1:p="Linear";break;case 2:p="Reinhard";break;case 3:p="Cineon";break;case 4:p="ACESFilmic";break;case 6:p="AgX";break;case 7:p="Neutral";break;case 5:p="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",h),p="Linear"}return"vec3 "+a+"( vec3 color ) { return "+p+"ToneMapping( color ); }"}var wr=new X;function Ap(){Ae.getLuminanceCoefficients(wr);let a=wr.x.toFixed(4),h=wr.y.toFixed(4),p=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${h}, ${p} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Rp(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Cp(a){let h=[];for(let p in a){let m=a[p];if(m===!1)continue;h.push("#define "+p+" "+m)}return h.join(`
`)}function Pp(a,h){let p={},m=a.getProgramParameter(h,a.ACTIVE_ATTRIBUTES);for(let g=0;g<m;g++){let _=a.getActiveAttrib(h,g),y=_.name,x=1;if(_.type===a.FLOAT_MAT2)x=2;if(_.type===a.FLOAT_MAT3)x=3;if(_.type===a.FLOAT_MAT4)x=4;p[y]={type:_.type,location:a.getAttribLocation(h,y),locationSize:x}}return p}function Ns(a){return a!==""}function bl(a,h){let p=h.numSpotLightShadows+h.numSpotLightMaps-h.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,h.numDirLights).replace(/NUM_SPOT_LIGHTS/g,h.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,h.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,p).replace(/NUM_RECT_AREA_LIGHTS/g,h.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,h.numPointLights).replace(/NUM_HEMI_LIGHTS/g,h.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,h.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,h.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,h.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,h.numPointLightShadows)}function Tl(a,h){return a.replace(/NUM_CLIPPING_PLANES/g,h.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,h.numClippingPlanes-h.numClipIntersection)}var Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(a){return a.replace(Ip,Lp)}var Dp=new Map;function Lp(a,h){let p=Me[h];if(p===void 0){let m=Dp.get(h);if(m!==void 0)p=Me[m],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',h,m);else throw Error("Can not resolve #include <"+h+">")}return Ga(p)}var Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(a){return a.replace(Up,Np)}function Np(a,h,p,m){let g="";for(let _=parseInt(h);_<parseInt(p);_++)g+=m.replace(/\[\s*i\s*\]/g,"[ "+_+" ]").replace(/UNROLLED_LOOP_INDEX/g,_);return g}function Al(a){let h=`precision ${a.precision} float;
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
#define LOW_PRECISION`;return h}function Fp(a){let h="SHADOWMAP_TYPE_BASIC";if(a.shadowMapType===1)h="SHADOWMAP_TYPE_PCF";else if(a.shadowMapType===2)h="SHADOWMAP_TYPE_PCF_SOFT";else if(a.shadowMapType===3)h="SHADOWMAP_TYPE_VSM";return h}function Op(a){let h="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:h="ENVMAP_TYPE_CUBE";break;case 306:h="ENVMAP_TYPE_CUBE_UV";break}return h}function Bp(a){let h="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:h="ENVMAP_MODE_REFRACTION";break}return h}function zp(a){let h="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:h="ENVMAP_BLENDING_MULTIPLY";break;case 1:h="ENVMAP_BLENDING_MIX";break;case 2:h="ENVMAP_BLENDING_ADD";break}return h}function Hp(a){let h=a.envMapCubeUVHeight;if(h===null)return null;let p=Math.log2(h)-2,m=1/h;return{texelWidth:1/(3*Math.max(Math.pow(2,p),112)),texelHeight:m,maxMip:p}}function kp(a,h,p,m){let g=a.getContext(),{defines:_,vertexShader:y,fragmentShader:x}=p,M=Fp(p),S=Op(p),b=Bp(p),v=zp(p),T=Hp(p),C=Rp(p),I=Cp(_),D=g.createProgram(),w,A,G=p.glslVersion?"#version "+p.glslVersion+`
`:"";if(p.isRawShaderMaterial){if(w=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,I].filter(Ns).join(`
`),w.length>0)w+=`
`;if(A=["#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,I].filter(Ns).join(`
`),A.length>0)A+=`
`}else w=[Al(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,I,p.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",p.batching?"#define USE_BATCHING":"",p.batchingColor?"#define USE_BATCHING_COLOR":"",p.instancing?"#define USE_INSTANCING":"",p.instancingColor?"#define USE_INSTANCING_COLOR":"",p.instancingMorph?"#define USE_INSTANCING_MORPH":"",p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.map?"#define USE_MAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+b:"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.displacementMap?"#define USE_DISPLACEMENTMAP":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.mapUv?"#define MAP_UV "+p.mapUv:"",p.alphaMapUv?"#define ALPHAMAP_UV "+p.alphaMapUv:"",p.lightMapUv?"#define LIGHTMAP_UV "+p.lightMapUv:"",p.aoMapUv?"#define AOMAP_UV "+p.aoMapUv:"",p.emissiveMapUv?"#define EMISSIVEMAP_UV "+p.emissiveMapUv:"",p.bumpMapUv?"#define BUMPMAP_UV "+p.bumpMapUv:"",p.normalMapUv?"#define NORMALMAP_UV "+p.normalMapUv:"",p.displacementMapUv?"#define DISPLACEMENTMAP_UV "+p.displacementMapUv:"",p.metalnessMapUv?"#define METALNESSMAP_UV "+p.metalnessMapUv:"",p.roughnessMapUv?"#define ROUGHNESSMAP_UV "+p.roughnessMapUv:"",p.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+p.anisotropyMapUv:"",p.clearcoatMapUv?"#define CLEARCOATMAP_UV "+p.clearcoatMapUv:"",p.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+p.clearcoatNormalMapUv:"",p.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+p.clearcoatRoughnessMapUv:"",p.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+p.iridescenceMapUv:"",p.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+p.iridescenceThicknessMapUv:"",p.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+p.sheenColorMapUv:"",p.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+p.sheenRoughnessMapUv:"",p.specularMapUv?"#define SPECULARMAP_UV "+p.specularMapUv:"",p.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+p.specularColorMapUv:"",p.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+p.specularIntensityMapUv:"",p.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+p.transmissionMapUv:"",p.thicknessMapUv?"#define THICKNESSMAP_UV "+p.thicknessMapUv:"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.flatShading?"#define FLAT_SHADED":"",p.skinning?"#define USE_SKINNING":"",p.morphTargets?"#define USE_MORPHTARGETS":"",p.morphNormals&&p.flatShading===!1?"#define USE_MORPHNORMALS":"",p.morphColors?"#define USE_MORPHCOLORS":"",p.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+p.morphTextureStride:"",p.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+p.morphTargetsCount:"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+M:"",p.sizeAttenuation?"#define USE_SIZEATTENUATION":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),A=[Al(p),"#define SHADER_TYPE "+p.shaderType,"#define SHADER_NAME "+p.shaderName,I,p.useFog&&p.fog?"#define USE_FOG":"",p.useFog&&p.fogExp2?"#define FOG_EXP2":"",p.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",p.map?"#define USE_MAP":"",p.matcap?"#define USE_MATCAP":"",p.envMap?"#define USE_ENVMAP":"",p.envMap?"#define "+S:"",p.envMap?"#define "+b:"",p.envMap?"#define "+v:"",T?"#define CUBEUV_TEXEL_WIDTH "+T.texelWidth:"",T?"#define CUBEUV_TEXEL_HEIGHT "+T.texelHeight:"",T?"#define CUBEUV_MAX_MIP "+T.maxMip+".0":"",p.lightMap?"#define USE_LIGHTMAP":"",p.aoMap?"#define USE_AOMAP":"",p.bumpMap?"#define USE_BUMPMAP":"",p.normalMap?"#define USE_NORMALMAP":"",p.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",p.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",p.emissiveMap?"#define USE_EMISSIVEMAP":"",p.anisotropy?"#define USE_ANISOTROPY":"",p.anisotropyMap?"#define USE_ANISOTROPYMAP":"",p.clearcoat?"#define USE_CLEARCOAT":"",p.clearcoatMap?"#define USE_CLEARCOATMAP":"",p.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",p.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",p.dispersion?"#define USE_DISPERSION":"",p.iridescence?"#define USE_IRIDESCENCE":"",p.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",p.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",p.specularMap?"#define USE_SPECULARMAP":"",p.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",p.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",p.roughnessMap?"#define USE_ROUGHNESSMAP":"",p.metalnessMap?"#define USE_METALNESSMAP":"",p.alphaMap?"#define USE_ALPHAMAP":"",p.alphaTest?"#define USE_ALPHATEST":"",p.alphaHash?"#define USE_ALPHAHASH":"",p.sheen?"#define USE_SHEEN":"",p.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",p.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",p.transmission?"#define USE_TRANSMISSION":"",p.transmissionMap?"#define USE_TRANSMISSIONMAP":"",p.thicknessMap?"#define USE_THICKNESSMAP":"",p.vertexTangents&&p.flatShading===!1?"#define USE_TANGENT":"",p.vertexColors||p.instancingColor||p.batchingColor?"#define USE_COLOR":"",p.vertexAlphas?"#define USE_COLOR_ALPHA":"",p.vertexUv1s?"#define USE_UV1":"",p.vertexUv2s?"#define USE_UV2":"",p.vertexUv3s?"#define USE_UV3":"",p.pointsUvs?"#define USE_POINTS_UV":"",p.gradientMap?"#define USE_GRADIENTMAP":"",p.flatShading?"#define FLAT_SHADED":"",p.doubleSided?"#define DOUBLE_SIDED":"",p.flipSided?"#define FLIP_SIDED":"",p.shadowMapEnabled?"#define USE_SHADOWMAP":"",p.shadowMapEnabled?"#define "+M:"",p.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",p.numLightProbes>0?"#define USE_LIGHT_PROBES":"",p.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",p.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",p.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",p.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",p.toneMapping!==0?"#define TONE_MAPPING":"",p.toneMapping!==0?Me.tonemapping_pars_fragment:"",p.toneMapping!==0?wp("toneMapping",p.toneMapping):"",p.dithering?"#define DITHERING":"",p.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,Tp("linearToOutputTexel",p.outputColorSpace),Ap(),p.useDepthPacking?"#define DEPTH_PACKING "+p.depthPacking:"",`
`].filter(Ns).join(`
`);if(y=Ga(y),y=bl(y,p),y=Tl(y,p),x=Ga(x),x=bl(x,p),x=Tl(x,p),y=wl(y),x=wl(x),p.isRawShaderMaterial!==!0)G=`#version 300 es
`,w=[C,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,A=["#define varying in",p.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",p.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A;let F=G+w+y,H=G+A+x,rt=Ml(g,g.VERTEX_SHADER,F),q=Ml(g,g.FRAGMENT_SHADER,H);if(g.attachShader(D,rt),g.attachShader(D,q),p.index0AttributeName!==void 0)g.bindAttribLocation(D,0,p.index0AttributeName);else if(p.morphTargets===!0)g.bindAttribLocation(D,0,"position");g.linkProgram(D);function Y(j){if(a.debug.checkShaderErrors){let at=g.getProgramInfoLog(D).trim(),ct=g.getShaderInfoLog(rt).trim(),ht=g.getShaderInfoLog(q).trim(),_t=!0,J=!0;if(g.getProgramParameter(D,g.LINK_STATUS)===!1)if(_t=!1,typeof a.debug.onShaderError==="function")a.debug.onShaderError(g,D,rt,q);else{let it=El(g,rt,"vertex"),Z=El(g,q,"fragment");console.error("THREE.WebGLProgram: Shader Error "+g.getError()+" - VALIDATE_STATUS "+g.getProgramParameter(D,g.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+at+`
`+it+`
`+Z)}else if(at!=="")console.warn("THREE.WebGLProgram: Program Info Log:",at);else if(ct===""||ht==="")J=!1;if(J)j.diagnostics={runnable:_t,programLog:at,vertexShader:{log:ct,prefix:w},fragmentShader:{log:ht,prefix:A}}}g.deleteShader(rt),g.deleteShader(q),ut=new Os(g,D),B=Pp(g,D)}let ut;this.getUniforms=function(){if(ut===void 0)Y(this);return ut};let B;this.getAttributes=function(){if(B===void 0)Y(this);return B};let z=p.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(z===!1)z=g.getProgramParameter(D,Mp);return z},this.destroy=function(){m.releaseStatesOfProgram(this),g.deleteProgram(D),this.program=void 0},this.type=p.shaderType,this.name=p.shaderName,this.id=Sp++,this.cacheKey=h,this.usedTimes=1,this.program=D,this.vertexShader=rt,this.fragmentShader=q,this}var Gp=0;class fc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(a){let{vertexShader:h,fragmentShader:p}=a,m=this._getShaderStage(h),g=this._getShaderStage(p),_=this._getShaderCacheForMaterial(a);if(_.has(m)===!1)_.add(m),m.usedTimes++;if(_.has(g)===!1)_.add(g),g.usedTimes++;return this}remove(a){let h=this.materialCache.get(a);for(let p of h)if(p.usedTimes--,p.usedTimes===0)this.shaderCache.delete(p.code);return this.materialCache.delete(a),this}getVertexShaderID(a){return this._getShaderStage(a.vertexShader).id}getFragmentShaderID(a){return this._getShaderStage(a.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(a){let h=this.materialCache,p=h.get(a);if(p===void 0)p=new Set,h.set(a,p);return p}_getShaderStage(a){let h=this.shaderCache,p=h.get(a);if(p===void 0)p=new pc(a),h.set(a,p);return p}}class pc{constructor(a){this.id=Gp++,this.code=a,this.usedTimes=0}}function Wp(a,h,p,m,g,_,y){let x=new kr,M=new fc,S=new Set,b=[],{logarithmicDepthBuffer:v,vertexTextures:T,precision:C}=g,I={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(B){if(S.add(B),B===0)return"uv";return`uv${B}`}function w(B,z,j,at,ct){let ht=at.fog,_t=ct.geometry,J=B.isMeshStandardMaterial?at.environment:null,it=(B.isMeshStandardMaterial?p:h).get(B.envMap||J),Z=!!it&&it.mapping===306?it.image.height:null,Rt=I[B.type];if(B.precision!==null){if(C=g.getMaxPrecision(B.precision),C!==B.precision)console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",C,"instead.")}let L=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,qt=L!==void 0?L.length:0,ee=0;if(_t.morphAttributes.position!==void 0)ee=1;if(_t.morphAttributes.normal!==void 0)ee=2;if(_t.morphAttributes.color!==void 0)ee=3;let pt,wt,$t,Wt;if(Rt){let Te=Vn[Rt];pt=Te.vertexShader,wt=Te.fragmentShader}else pt=B.vertexShader,wt=B.fragmentShader,M.update(B),$t=M.getVertexShaderID(B),Wt=M.getFragmentShaderID(B);let It=a.getRenderTarget(),se=a.state.buffers.depth.getReversed(),ye=ct.isInstancedMesh===!0,re=ct.isBatchedMesh===!0,xt=!!B.map,Ct=!!B.matcap,V=!!it,Gt=!!B.aoMap,bt=!!B.lightMap,Yt=!!B.bumpMap,Mt=!!B.normalMap,oe=!!B.displacementMap,zt=!!B.emissiveMap,Vt=!!B.metalnessMap,W=!!B.roughnessMap,U=B.anisotropy>0,st=B.clearcoat>0,mt=B.dispersion>0,yt=B.iridescence>0,ft=B.sheen>0,Qt=B.transmission>0,Dt=U&&!!B.anisotropyMap,Ft=st&&!!B.clearcoatMap,ce=st&&!!B.clearcoatNormalMap,Tt=st&&!!B.clearcoatRoughnessMap,Bt=yt&&!!B.iridescenceMap,Se=yt&&!!B.iridescenceThicknessMap,te=ft&&!!B.sheenColorMap,Ht=ft&&!!B.sheenRoughnessMap,fe=!!B.specularMap,ve=!!B.specularColorMap,Ie=!!B.specularIntensityMap,Q=Qt&&!!B.transmissionMap,St=Qt&&!!B.thicknessMap,dt=!!B.gradientMap,vt=!!B.alphaMap,Ot=B.alphaTest>0,Lt=!!B.alphaHash,jt=!!B.extensions,ze=0;if(B.toneMapped){if(It===null||It.isXRRenderTarget===!0)ze=a.toneMapping}let Ge={shaderID:Rt,shaderType:B.type,shaderName:B.name,vertexShader:pt,fragmentShader:wt,defines:B.defines,customVertexShaderID:$t,customFragmentShaderID:Wt,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:C,batching:re,batchingColor:re&&ct._colorsTexture!==null,instancing:ye,instancingColor:ye&&ct.instanceColor!==null,instancingMorph:ye&&ct.morphTexture!==null,supportsVertexTextures:T,outputColorSpace:It===null?a.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:"srgb-linear",alphaToCoverage:!!B.alphaToCoverage,map:xt,matcap:Ct,envMap:V,envMapMode:V&&it.mapping,envMapCubeUVHeight:Z,aoMap:Gt,lightMap:bt,bumpMap:Yt,normalMap:Mt,displacementMap:T&&oe,emissiveMap:zt,normalMapObjectSpace:Mt&&B.normalMapType===1,normalMapTangentSpace:Mt&&B.normalMapType===0,metalnessMap:Vt,roughnessMap:W,anisotropy:U,anisotropyMap:Dt,clearcoat:st,clearcoatMap:Ft,clearcoatNormalMap:ce,clearcoatRoughnessMap:Tt,dispersion:mt,iridescence:yt,iridescenceMap:Bt,iridescenceThicknessMap:Se,sheen:ft,sheenColorMap:te,sheenRoughnessMap:Ht,specularMap:fe,specularColorMap:ve,specularIntensityMap:Ie,transmission:Qt,transmissionMap:Q,thicknessMap:St,gradientMap:dt,opaque:B.transparent===!1&&B.blending===1&&B.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ot,alphaHash:Lt,combine:B.combine,mapUv:xt&&D(B.map.channel),aoMapUv:Gt&&D(B.aoMap.channel),lightMapUv:bt&&D(B.lightMap.channel),bumpMapUv:Yt&&D(B.bumpMap.channel),normalMapUv:Mt&&D(B.normalMap.channel),displacementMapUv:oe&&D(B.displacementMap.channel),emissiveMapUv:zt&&D(B.emissiveMap.channel),metalnessMapUv:Vt&&D(B.metalnessMap.channel),roughnessMapUv:W&&D(B.roughnessMap.channel),anisotropyMapUv:Dt&&D(B.anisotropyMap.channel),clearcoatMapUv:Ft&&D(B.clearcoatMap.channel),clearcoatNormalMapUv:ce&&D(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&D(B.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&D(B.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&D(B.iridescenceThicknessMap.channel),sheenColorMapUv:te&&D(B.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&D(B.sheenRoughnessMap.channel),specularMapUv:fe&&D(B.specularMap.channel),specularColorMapUv:ve&&D(B.specularColorMap.channel),specularIntensityMapUv:Ie&&D(B.specularIntensityMap.channel),transmissionMapUv:Q&&D(B.transmissionMap.channel),thicknessMapUv:St&&D(B.thicknessMap.channel),alphaMapUv:vt&&D(B.alphaMap.channel),vertexTangents:!!_t.attributes.tangent&&(Mt||U),vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!_t.attributes.uv&&(xt||vt),fog:!!ht,useFog:B.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:B.flatShading===!0,sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:se,skinning:ct.isSkinnedMesh===!0,morphTargets:_t.morphAttributes.position!==void 0,morphNormals:_t.morphAttributes.normal!==void 0,morphColors:_t.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:ee,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numClippingPlanes:y.numPlanes,numClipIntersection:y.numIntersection,dithering:B.dithering,shadowMapEnabled:a.shadowMap.enabled&&j.length>0,shadowMapType:a.shadowMap.type,toneMapping:ze,decodeVideoTexture:xt&&B.map.isVideoTexture===!0&&Ae.getTransfer(B.map.colorSpace)==="srgb",decodeVideoTextureEmissive:zt&&B.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(B.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===2,flipSided:B.side===1,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:jt&&B.extensions.clipCullDistance===!0&&m.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&B.extensions.multiDraw===!0||re)&&m.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:m.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return Ge.vertexUv1s=S.has(1),Ge.vertexUv2s=S.has(2),Ge.vertexUv3s=S.has(3),S.clear(),Ge}function A(B){let z=[];if(B.shaderID)z.push(B.shaderID);else z.push(B.customVertexShaderID),z.push(B.customFragmentShaderID);if(B.defines!==void 0)for(let j in B.defines)z.push(j),z.push(B.defines[j]);if(B.isRawShaderMaterial===!1)G(z,B),F(z,B),z.push(a.outputColorSpace);return z.push(B.customProgramCacheKey),z.join()}function G(B,z){B.push(z.precision),B.push(z.outputColorSpace),B.push(z.envMapMode),B.push(z.envMapCubeUVHeight),B.push(z.mapUv),B.push(z.alphaMapUv),B.push(z.lightMapUv),B.push(z.aoMapUv),B.push(z.bumpMapUv),B.push(z.normalMapUv),B.push(z.displacementMapUv),B.push(z.emissiveMapUv),B.push(z.metalnessMapUv),B.push(z.roughnessMapUv),B.push(z.anisotropyMapUv),B.push(z.clearcoatMapUv),B.push(z.clearcoatNormalMapUv),B.push(z.clearcoatRoughnessMapUv),B.push(z.iridescenceMapUv),B.push(z.iridescenceThicknessMapUv),B.push(z.sheenColorMapUv),B.push(z.sheenRoughnessMapUv),B.push(z.specularMapUv),B.push(z.specularColorMapUv),B.push(z.specularIntensityMapUv),B.push(z.transmissionMapUv),B.push(z.thicknessMapUv),B.push(z.combine),B.push(z.fogExp2),B.push(z.sizeAttenuation),B.push(z.morphTargetsCount),B.push(z.morphAttributeCount),B.push(z.numDirLights),B.push(z.numPointLights),B.push(z.numSpotLights),B.push(z.numSpotLightMaps),B.push(z.numHemiLights),B.push(z.numRectAreaLights),B.push(z.numDirLightShadows),B.push(z.numPointLightShadows),B.push(z.numSpotLightShadows),B.push(z.numSpotLightShadowsWithMaps),B.push(z.numLightProbes),B.push(z.shadowMapType),B.push(z.toneMapping),B.push(z.numClippingPlanes),B.push(z.numClipIntersection),B.push(z.depthPacking)}function F(B,z){if(x.disableAll(),z.supportsVertexTextures)x.enable(0);if(z.instancing)x.enable(1);if(z.instancingColor)x.enable(2);if(z.instancingMorph)x.enable(3);if(z.matcap)x.enable(4);if(z.envMap)x.enable(5);if(z.normalMapObjectSpace)x.enable(6);if(z.normalMapTangentSpace)x.enable(7);if(z.clearcoat)x.enable(8);if(z.iridescence)x.enable(9);if(z.alphaTest)x.enable(10);if(z.vertexColors)x.enable(11);if(z.vertexAlphas)x.enable(12);if(z.vertexUv1s)x.enable(13);if(z.vertexUv2s)x.enable(14);if(z.vertexUv3s)x.enable(15);if(z.vertexTangents)x.enable(16);if(z.anisotropy)x.enable(17);if(z.alphaHash)x.enable(18);if(z.batching)x.enable(19);if(z.dispersion)x.enable(20);if(z.batchingColor)x.enable(21);if(B.push(x.mask),x.disableAll(),z.fog)x.enable(0);if(z.useFog)x.enable(1);if(z.flatShading)x.enable(2);if(z.logarithmicDepthBuffer)x.enable(3);if(z.reverseDepthBuffer)x.enable(4);if(z.skinning)x.enable(5);if(z.morphTargets)x.enable(6);if(z.morphNormals)x.enable(7);if(z.morphColors)x.enable(8);if(z.premultipliedAlpha)x.enable(9);if(z.shadowMapEnabled)x.enable(10);if(z.doubleSided)x.enable(11);if(z.flipSided)x.enable(12);if(z.useDepthPacking)x.enable(13);if(z.dithering)x.enable(14);if(z.transmission)x.enable(15);if(z.sheen)x.enable(16);if(z.opaque)x.enable(17);if(z.pointsUvs)x.enable(18);if(z.decodeVideoTexture)x.enable(19);if(z.decodeVideoTextureEmissive)x.enable(20);if(z.alphaToCoverage)x.enable(21);B.push(x.mask)}function H(B){let z=I[B.type],j;if(z){let at=Vn[z];j=Dh.clone(at.uniforms)}else j=B.uniforms;return j}function rt(B,z){let j;for(let at=0,ct=b.length;at<ct;at++){let ht=b[at];if(ht.cacheKey===z){j=ht,++j.usedTimes;break}}if(j===void 0)j=new kp(a,z,B,_),b.push(j);return j}function q(B){if(--B.usedTimes===0){let z=b.indexOf(B);b[z]=b[b.length-1],b.pop(),B.destroy()}}function Y(B){M.remove(B)}function ut(){M.dispose()}return{getParameters:w,getProgramCacheKey:A,getUniforms:H,acquireProgram:rt,releaseProgram:q,releaseShaderCache:Y,programs:b,dispose:ut}}function Vp(){let a=new WeakMap;function h(y){return a.has(y)}function p(y){let x=a.get(y);if(x===void 0)x={},a.set(y,x);return x}function m(y){a.delete(y)}function g(y,x,M){a.get(y)[x]=M}function _(){a=new WeakMap}return{has:h,get:p,remove:m,update:g,dispose:_}}function Xp(a,h){if(a.groupOrder!==h.groupOrder)return a.groupOrder-h.groupOrder;else if(a.renderOrder!==h.renderOrder)return a.renderOrder-h.renderOrder;else if(a.material.id!==h.material.id)return a.material.id-h.material.id;else if(a.z!==h.z)return a.z-h.z;else return a.id-h.id}function Rl(a,h){if(a.groupOrder!==h.groupOrder)return a.groupOrder-h.groupOrder;else if(a.renderOrder!==h.renderOrder)return a.renderOrder-h.renderOrder;else if(a.z!==h.z)return h.z-a.z;else return a.id-h.id}function Cl(){let a=[],h=0,p=[],m=[],g=[];function _(){h=0,p.length=0,m.length=0,g.length=0}function y(v,T,C,I,D,w){let A=a[h];if(A===void 0)A={id:v.id,object:v,geometry:T,material:C,groupOrder:I,renderOrder:v.renderOrder,z:D,group:w},a[h]=A;else A.id=v.id,A.object=v,A.geometry=T,A.material=C,A.groupOrder=I,A.renderOrder=v.renderOrder,A.z=D,A.group=w;return h++,A}function x(v,T,C,I,D,w){let A=y(v,T,C,I,D,w);if(C.transmission>0)m.push(A);else if(C.transparent===!0)g.push(A);else p.push(A)}function M(v,T,C,I,D,w){let A=y(v,T,C,I,D,w);if(C.transmission>0)m.unshift(A);else if(C.transparent===!0)g.unshift(A);else p.unshift(A)}function S(v,T){if(p.length>1)p.sort(v||Xp);if(m.length>1)m.sort(T||Rl);if(g.length>1)g.sort(T||Rl)}function b(){for(let v=h,T=a.length;v<T;v++){let C=a[v];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:p,transmissive:m,transparent:g,init:_,push:x,unshift:M,finish:b,sort:S}}function qp(){let a=new WeakMap;function h(m,g){let _=a.get(m),y;if(_===void 0)y=new Cl,a.set(m,[y]);else if(g>=_.length)y=new Cl,_.push(y);else y=_[g];return y}function p(){a=new WeakMap}return{get:h,dispose:p}}function Yp(){let a={};return{get:function(h){if(a[h.id]!==void 0)return a[h.id];let p;switch(h.type){case"DirectionalLight":p={direction:new X,color:new xe};break;case"SpotLight":p={position:new X,direction:new X,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":p={position:new X,color:new xe,distance:0,decay:0};break;case"HemisphereLight":p={direction:new X,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":p={color:new xe,position:new X,halfWidth:new X,halfHeight:new X};break}return a[h.id]=p,p}}}function Zp(){let a={};return{get:function(h){if(a[h.id]!==void 0)return a[h.id];let p;switch(h.type){case"DirectionalLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":p={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1000};break}return a[h.id]=p,p}}}var Jp=0;function $p(a,h){return(h.castShadow?2:0)-(a.castShadow?2:0)+(h.map?1:0)-(a.map?1:0)}function Kp(a){let h=new Yp,p=Zp(),m={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let S=0;S<9;S++)m.probe.push(new X);let g=new X,_=new Ce,y=new Ce;function x(S){let b=0,v=0,T=0;for(let B=0;B<9;B++)m.probe[B].set(0,0,0);let C=0,I=0,D=0,w=0,A=0,G=0,F=0,H=0,rt=0,q=0,Y=0;S.sort($p);for(let B=0,z=S.length;B<z;B++){let j=S[B],{color:at,intensity:ct,distance:ht}=j,_t=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)b+=at.r*ct,v+=at.g*ct,T+=at.b*ct;else if(j.isLightProbe){for(let J=0;J<9;J++)m.probe[J].addScaledVector(j.sh.coefficients[J],ct);Y++}else if(j.isDirectionalLight){let J=h.get(j);if(J.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let it=j.shadow,Z=p.get(j);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,m.directionalShadow[C]=Z,m.directionalShadowMap[C]=_t,m.directionalShadowMatrix[C]=j.shadow.matrix,G++}m.directional[C]=J,C++}else if(j.isSpotLight){let J=h.get(j);J.position.setFromMatrixPosition(j.matrixWorld),J.color.copy(at).multiplyScalar(ct),J.distance=ht,J.coneCos=Math.cos(j.angle),J.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),J.decay=j.decay,m.spot[D]=J;let it=j.shadow;if(j.map){if(m.spotLightMap[rt]=j.map,rt++,it.updateMatrices(j),j.castShadow)q++}if(m.spotLightMatrix[D]=it.matrix,j.castShadow){let Z=p.get(j);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,m.spotShadow[D]=Z,m.spotShadowMap[D]=_t,H++}D++}else if(j.isRectAreaLight){let J=h.get(j);J.color.copy(at).multiplyScalar(ct),J.halfWidth.set(j.width*0.5,0,0),J.halfHeight.set(0,j.height*0.5,0),m.rectArea[w]=J,w++}else if(j.isPointLight){let J=h.get(j);if(J.color.copy(j.color).multiplyScalar(j.intensity),J.distance=j.distance,J.decay=j.decay,j.castShadow){let it=j.shadow,Z=p.get(j);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,Z.shadowCameraNear=it.camera.near,Z.shadowCameraFar=it.camera.far,m.pointShadow[I]=Z,m.pointShadowMap[I]=_t,m.pointShadowMatrix[I]=j.shadow.matrix,F++}m.point[I]=J,I++}else if(j.isHemisphereLight){let J=h.get(j);J.skyColor.copy(j.color).multiplyScalar(ct),J.groundColor.copy(j.groundColor).multiplyScalar(ct),m.hemi[A]=J,A++}}if(w>0)if(a.has("OES_texture_float_linear")===!0)m.rectAreaLTC1=Nt.LTC_FLOAT_1,m.rectAreaLTC2=Nt.LTC_FLOAT_2;else m.rectAreaLTC1=Nt.LTC_HALF_1,m.rectAreaLTC2=Nt.LTC_HALF_2;m.ambient[0]=b,m.ambient[1]=v,m.ambient[2]=T;let ut=m.hash;if(ut.directionalLength!==C||ut.pointLength!==I||ut.spotLength!==D||ut.rectAreaLength!==w||ut.hemiLength!==A||ut.numDirectionalShadows!==G||ut.numPointShadows!==F||ut.numSpotShadows!==H||ut.numSpotMaps!==rt||ut.numLightProbes!==Y)m.directional.length=C,m.spot.length=D,m.rectArea.length=w,m.point.length=I,m.hemi.length=A,m.directionalShadow.length=G,m.directionalShadowMap.length=G,m.pointShadow.length=F,m.pointShadowMap.length=F,m.spotShadow.length=H,m.spotShadowMap.length=H,m.directionalShadowMatrix.length=G,m.pointShadowMatrix.length=F,m.spotLightMatrix.length=H+rt-q,m.spotLightMap.length=rt,m.numSpotLightShadowsWithMaps=q,m.numLightProbes=Y,ut.directionalLength=C,ut.pointLength=I,ut.spotLength=D,ut.rectAreaLength=w,ut.hemiLength=A,ut.numDirectionalShadows=G,ut.numPointShadows=F,ut.numSpotShadows=H,ut.numSpotMaps=rt,ut.numLightProbes=Y,m.version=Jp++}function M(S,b){let v=0,T=0,C=0,I=0,D=0,w=b.matrixWorldInverse;for(let A=0,G=S.length;A<G;A++){let F=S[A];if(F.isDirectionalLight){let H=m.directional[v];H.direction.setFromMatrixPosition(F.matrixWorld),g.setFromMatrixPosition(F.target.matrixWorld),H.direction.sub(g),H.direction.transformDirection(w),v++}else if(F.isSpotLight){let H=m.spot[C];H.position.setFromMatrixPosition(F.matrixWorld),H.position.applyMatrix4(w),H.direction.setFromMatrixPosition(F.matrixWorld),g.setFromMatrixPosition(F.target.matrixWorld),H.direction.sub(g),H.direction.transformDirection(w),C++}else if(F.isRectAreaLight){let H=m.rectArea[I];H.position.setFromMatrixPosition(F.matrixWorld),H.position.applyMatrix4(w),y.identity(),_.copy(F.matrixWorld),_.premultiply(w),y.extractRotation(_),H.halfWidth.set(F.width*0.5,0,0),H.halfHeight.set(0,F.height*0.5,0),H.halfWidth.applyMatrix4(y),H.halfHeight.applyMatrix4(y),I++}else if(F.isPointLight){let H=m.point[T];H.position.setFromMatrixPosition(F.matrixWorld),H.position.applyMatrix4(w),T++}else if(F.isHemisphereLight){let H=m.hemi[D];H.direction.setFromMatrixPosition(F.matrixWorld),H.direction.transformDirection(w),D++}}}return{setup:x,setupView:M,state:m}}function Pl(a){let h=new Kp(a),p=[],m=[];function g(b){S.camera=b,p.length=0,m.length=0}function _(b){p.push(b)}function y(b){m.push(b)}function x(){h.setup(p)}function M(b){h.setupView(p,b)}let S={lightsArray:p,shadowsArray:m,camera:null,lights:h,transmissionRenderTarget:{}};return{init:g,state:S,setupLights:x,setupLightsView:M,pushLight:_,pushShadow:y}}function jp(a){let h=new WeakMap;function p(g,_=0){let y=h.get(g),x;if(y===void 0)x=new Pl(a),h.set(g,[x]);else if(_>=y.length)x=new Pl(a),y.push(x);else x=y[_];return x}function m(){h=new WeakMap}return{get:p,dispose:m}}class mc extends vi{static get type(){return"MeshDepthMaterial"}constructor(a){super();this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(a)}copy(a){return super.copy(a),this.depthPacking=a.depthPacking,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this}}class gc extends vi{static get type(){return"MeshDistanceMaterial"}constructor(a){super();this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(a)}copy(a){return super.copy(a),this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this}}var Qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
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
}`;function em(a,h,p){let m=new Gr,g=new Et,_=new Et,y=new Ne,x=new mc({depthPacking:3201}),M=new gc,S={},b=p.maxTextureSize,v={[0]:1,[1]:0,[2]:2},T=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Qp,fragmentShader:tm}),C=T.clone();C.defines.HORIZONTAL_PASS=1;let I=new Qe;I.setAttribute("position",new Cn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let D=new ne(I,T),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let A=this.type;this.render=function(q,Y,ut){if(w.enabled===!1)return;if(w.autoUpdate===!1&&w.needsUpdate===!1)return;if(q.length===0)return;let B=a.getRenderTarget(),z=a.getActiveCubeFace(),j=a.getActiveMipmapLevel(),at=a.state;at.setBlending(0),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);let ct=A!==3&&this.type===3,ht=A===3&&this.type!==3;for(let _t=0,J=q.length;_t<J;_t++){let it=q[_t],Z=it.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;g.copy(Z.mapSize);let Rt=Z.getFrameExtents();if(g.multiply(Rt),_.copy(Z.mapSize),g.x>b||g.y>b){if(g.x>b)_.x=Math.floor(b/Rt.x),g.x=_.x*Rt.x,Z.mapSize.x=_.x;if(g.y>b)_.y=Math.floor(b/Rt.y),g.y=_.y*Rt.y,Z.mapSize.y=_.y}if(Z.map===null||ct===!0||ht===!0){let qt=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(Z.map!==null)Z.map.dispose();Z.map=new xi(g.x,g.y,qt),Z.map.texture.name=it.name+".shadowMap",Z.camera.updateProjectionMatrix()}a.setRenderTarget(Z.map),a.clear();let L=Z.getViewportCount();for(let qt=0;qt<L;qt++){let ee=Z.getViewport(qt);y.set(_.x*ee.x,_.y*ee.y,_.x*ee.z,_.y*ee.w),at.viewport(y),Z.updateMatrices(it,qt),m=Z.getFrustum(),H(Y,ut,Z.camera,it,this.type)}if(Z.isPointLightShadow!==!0&&this.type===3)G(Z,ut);Z.needsUpdate=!1}A=this.type,w.needsUpdate=!1,a.setRenderTarget(B,z,j)};function G(q,Y){let ut=h.update(D);if(T.defines.VSM_SAMPLES!==q.blurSamples)T.defines.VSM_SAMPLES=q.blurSamples,C.defines.VSM_SAMPLES=q.blurSamples,T.needsUpdate=!0,C.needsUpdate=!0;if(q.mapPass===null)q.mapPass=new xi(g.x,g.y);T.uniforms.shadow_pass.value=q.map.texture,T.uniforms.resolution.value=q.mapSize,T.uniforms.radius.value=q.radius,a.setRenderTarget(q.mapPass),a.clear(),a.renderBufferDirect(Y,null,ut,T,D,null),C.uniforms.shadow_pass.value=q.mapPass.texture,C.uniforms.resolution.value=q.mapSize,C.uniforms.radius.value=q.radius,a.setRenderTarget(q.map),a.clear(),a.renderBufferDirect(Y,null,ut,C,D,null)}function F(q,Y,ut,B){let z=null,j=ut.isPointLight===!0?q.customDistanceMaterial:q.customDepthMaterial;if(j!==void 0)z=j;else if(z=ut.isPointLight===!0?M:x,a.localClippingEnabled&&Y.clipShadows===!0&&Array.isArray(Y.clippingPlanes)&&Y.clippingPlanes.length!==0||Y.displacementMap&&Y.displacementScale!==0||Y.alphaMap&&Y.alphaTest>0||Y.map&&Y.alphaTest>0){let at=z.uuid,ct=Y.uuid,ht=S[at];if(ht===void 0)ht={},S[at]=ht;let _t=ht[ct];if(_t===void 0)_t=z.clone(),ht[ct]=_t,Y.addEventListener("dispose",rt);z=_t}if(z.visible=Y.visible,z.wireframe=Y.wireframe,B===3)z.side=Y.shadowSide!==null?Y.shadowSide:Y.side;else z.side=Y.shadowSide!==null?Y.shadowSide:v[Y.side];if(z.alphaMap=Y.alphaMap,z.alphaTest=Y.alphaTest,z.map=Y.map,z.clipShadows=Y.clipShadows,z.clippingPlanes=Y.clippingPlanes,z.clipIntersection=Y.clipIntersection,z.displacementMap=Y.displacementMap,z.displacementScale=Y.displacementScale,z.displacementBias=Y.displacementBias,z.wireframeLinewidth=Y.wireframeLinewidth,z.linewidth=Y.linewidth,ut.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let at=a.properties.get(z);at.light=ut}return z}function H(q,Y,ut,B,z){if(q.visible===!1)return;if(q.layers.test(Y.layers)&&(q.isMesh||q.isLine||q.isPoints)){if((q.castShadow||q.receiveShadow&&z===3)&&(!q.frustumCulled||m.intersectsObject(q))){q.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,q.matrixWorld);let ct=h.update(q),ht=q.material;if(Array.isArray(ht)){let _t=ct.groups;for(let J=0,it=_t.length;J<it;J++){let Z=_t[J],Rt=ht[Z.materialIndex];if(Rt&&Rt.visible){let L=F(q,Rt,B,z);q.onBeforeShadow(a,q,Y,ut,ct,L,Z),a.renderBufferDirect(ut,null,ct,L,q,Z),q.onAfterShadow(a,q,Y,ut,ct,L,Z)}}}else if(ht.visible){let _t=F(q,ht,B,z);q.onBeforeShadow(a,q,Y,ut,ct,_t,null),a.renderBufferDirect(ut,null,ct,_t,q,null),q.onAfterShadow(a,q,Y,ut,ct,_t,null)}}}let at=q.children;for(let ct=0,ht=at.length;ct<ht;ct++)H(at[ct],Y,ut,B,z)}function rt(q){q.target.removeEventListener("dispose",rt);for(let ut in S){let B=S[ut],z=q.target.uuid;if(z in B)B[z].dispose(),delete B[z]}}}var nm={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function im(a,h){function p(){let Q=!1,St=new Ne,dt=null,vt=new Ne(0,0,0,0);return{setMask:function(Ot){if(dt!==Ot&&!Q)a.colorMask(Ot,Ot,Ot,Ot),dt=Ot},setLocked:function(Ot){Q=Ot},setClear:function(Ot,Lt,jt,ze,Ge){if(Ge===!0)Ot*=ze,Lt*=ze,jt*=ze;if(St.set(Ot,Lt,jt,ze),vt.equals(St)===!1)a.clearColor(Ot,Lt,jt,ze),vt.copy(St)},reset:function(){Q=!1,dt=null,vt.set(-1,0,0,0)}}}function m(){let Q=!1,St=!1,dt=null,vt=null,Ot=null;return{setReversed:function(Lt){if(St!==Lt){let jt=h.get("EXT_clip_control");if(St)jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT);else jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);let ze=Ot;Ot=null,this.setClear(ze)}St=Lt},getReversed:function(){return St},setTest:function(Lt){if(Lt)It(a.DEPTH_TEST);else se(a.DEPTH_TEST)},setMask:function(Lt){if(dt!==Lt&&!Q)a.depthMask(Lt),dt=Lt},setFunc:function(Lt){if(St)Lt=nm[Lt];if(vt!==Lt){switch(Lt){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}vt=Lt}},setLocked:function(Lt){Q=Lt},setClear:function(Lt){if(Ot!==Lt){if(St)Lt=1-Lt;a.clearDepth(Lt),Ot=Lt}},reset:function(){Q=!1,dt=null,vt=null,Ot=null,St=!1}}}function g(){let Q=!1,St=null,dt=null,vt=null,Ot=null,Lt=null,jt=null,ze=null,Ge=null;return{setTest:function(Te){if(!Q)if(Te)It(a.STENCIL_TEST);else se(a.STENCIL_TEST)},setMask:function(Te){if(St!==Te&&!Q)a.stencilMask(Te),St=Te},setFunc:function(Te,Un,Nn){if(dt!==Te||vt!==Un||Ot!==Nn)a.stencilFunc(Te,Un,Nn),dt=Te,vt=Un,Ot=Nn},setOp:function(Te,Un,Nn){if(Lt!==Te||jt!==Un||ze!==Nn)a.stencilOp(Te,Un,Nn),Lt=Te,jt=Un,ze=Nn},setLocked:function(Te){Q=Te},setClear:function(Te){if(Ge!==Te)a.clearStencil(Te),Ge=Te},reset:function(){Q=!1,St=null,dt=null,vt=null,Ot=null,Lt=null,jt=null,ze=null,Ge=null}}}let _=new p,y=new m,x=new g,M=new WeakMap,S=new WeakMap,b={},v={},T=new WeakMap,C=[],I=null,D=!1,w=null,A=null,G=null,F=null,H=null,rt=null,q=null,Y=new xe(0,0,0),ut=0,B=!1,z=null,j=null,at=null,ct=null,ht=null,_t=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,it=0,Z=a.getParameter(a.VERSION);if(Z.indexOf("WebGL")!==-1)it=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=it>=1;else if(Z.indexOf("OpenGL ES")!==-1)it=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=it>=2;let Rt=null,L={},qt=a.getParameter(a.SCISSOR_BOX),ee=a.getParameter(a.VIEWPORT),pt=new Ne().fromArray(qt),wt=new Ne().fromArray(ee);function $t(Q,St,dt,vt){let Ot=new Uint8Array(4),Lt=a.createTexture();a.bindTexture(Q,Lt),a.texParameteri(Q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let jt=0;jt<dt;jt++)if(Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY)a.texImage3D(St,0,a.RGBA,1,1,vt,0,a.RGBA,a.UNSIGNED_BYTE,Ot);else a.texImage2D(St+jt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ot);return Lt}let Wt={};Wt[a.TEXTURE_2D]=$t(a.TEXTURE_2D,a.TEXTURE_2D,1),Wt[a.TEXTURE_CUBE_MAP]=$t(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Wt[a.TEXTURE_2D_ARRAY]=$t(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Wt[a.TEXTURE_3D]=$t(a.TEXTURE_3D,a.TEXTURE_3D,1,1),_.setClear(0,0,0,1),y.setClear(1),x.setClear(0),It(a.DEPTH_TEST),y.setFunc(3),Yt(!1),Mt(1),It(a.CULL_FACE),Gt(0);function It(Q){if(b[Q]!==!0)a.enable(Q),b[Q]=!0}function se(Q){if(b[Q]!==!1)a.disable(Q),b[Q]=!1}function ye(Q,St){if(v[Q]!==St){if(a.bindFramebuffer(Q,St),v[Q]=St,Q===a.DRAW_FRAMEBUFFER)v[a.FRAMEBUFFER]=St;if(Q===a.FRAMEBUFFER)v[a.DRAW_FRAMEBUFFER]=St;return!0}return!1}function re(Q,St){let dt=C,vt=!1;if(Q){if(dt=T.get(St),dt===void 0)dt=[],T.set(St,dt);let Ot=Q.textures;if(dt.length!==Ot.length||dt[0]!==a.COLOR_ATTACHMENT0){for(let Lt=0,jt=Ot.length;Lt<jt;Lt++)dt[Lt]=a.COLOR_ATTACHMENT0+Lt;dt.length=Ot.length,vt=!0}}else if(dt[0]!==a.BACK)dt[0]=a.BACK,vt=!0;if(vt)a.drawBuffers(dt)}function xt(Q){if(I!==Q)return a.useProgram(Q),I=Q,!0;return!1}let Ct={[100]:a.FUNC_ADD,[101]:a.FUNC_SUBTRACT,[102]:a.FUNC_REVERSE_SUBTRACT};Ct[103]=a.MIN,Ct[104]=a.MAX;let V={[200]:a.ZERO,[201]:a.ONE,[202]:a.SRC_COLOR,[204]:a.SRC_ALPHA,[210]:a.SRC_ALPHA_SATURATE,[208]:a.DST_COLOR,[206]:a.DST_ALPHA,[203]:a.ONE_MINUS_SRC_COLOR,[205]:a.ONE_MINUS_SRC_ALPHA,[209]:a.ONE_MINUS_DST_COLOR,[207]:a.ONE_MINUS_DST_ALPHA,[211]:a.CONSTANT_COLOR,[212]:a.ONE_MINUS_CONSTANT_COLOR,[213]:a.CONSTANT_ALPHA,[214]:a.ONE_MINUS_CONSTANT_ALPHA};function Gt(Q,St,dt,vt,Ot,Lt,jt,ze,Ge,Te){if(Q===0){if(D===!0)se(a.BLEND),D=!1;return}if(D===!1)It(a.BLEND),D=!0;if(Q!==5){if(Q!==w||Te!==B){if(A!==100||H!==100)a.blendEquation(a.FUNC_ADD),A=100,H=100;if(Te)switch(Q){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}G=null,F=null,rt=null,q=null,Y.set(0,0,0),ut=0,w=Q,B=Te}return}if(Ot=Ot||St,Lt=Lt||dt,jt=jt||vt,St!==A||Ot!==H)a.blendEquationSeparate(Ct[St],Ct[Ot]),A=St,H=Ot;if(dt!==G||vt!==F||Lt!==rt||jt!==q)a.blendFuncSeparate(V[dt],V[vt],V[Lt],V[jt]),G=dt,F=vt,rt=Lt,q=jt;if(ze.equals(Y)===!1||Ge!==ut)a.blendColor(ze.r,ze.g,ze.b,Ge),Y.copy(ze),ut=Ge;w=Q,B=!1}function bt(Q,St){Q.side===2?se(a.CULL_FACE):It(a.CULL_FACE);let dt=Q.side===1;if(St)dt=!dt;Yt(dt),Q.blending===1&&Q.transparent===!1?Gt(0):Gt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),y.setFunc(Q.depthFunc),y.setTest(Q.depthTest),y.setMask(Q.depthWrite),_.setMask(Q.colorWrite);let vt=Q.stencilWrite;if(x.setTest(vt),vt)x.setMask(Q.stencilWriteMask),x.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),x.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass);zt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?It(a.SAMPLE_ALPHA_TO_COVERAGE):se(a.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(Q){if(z!==Q){if(Q)a.frontFace(a.CW);else a.frontFace(a.CCW);z=Q}}function Mt(Q){if(Q!==0){if(It(a.CULL_FACE),Q!==j)if(Q===1)a.cullFace(a.BACK);else if(Q===2)a.cullFace(a.FRONT);else a.cullFace(a.FRONT_AND_BACK)}else se(a.CULL_FACE);j=Q}function oe(Q){if(Q!==at){if(J)a.lineWidth(Q);at=Q}}function zt(Q,St,dt){if(Q){if(It(a.POLYGON_OFFSET_FILL),ct!==St||ht!==dt)a.polygonOffset(St,dt),ct=St,ht=dt}else se(a.POLYGON_OFFSET_FILL)}function Vt(Q){if(Q)It(a.SCISSOR_TEST);else se(a.SCISSOR_TEST)}function W(Q){if(Q===void 0)Q=a.TEXTURE0+_t-1;if(Rt!==Q)a.activeTexture(Q),Rt=Q}function U(Q,St,dt){if(dt===void 0)if(Rt===null)dt=a.TEXTURE0+_t-1;else dt=Rt;let vt=L[dt];if(vt===void 0)vt={type:void 0,texture:void 0},L[dt]=vt;if(vt.type!==Q||vt.texture!==St){if(Rt!==dt)a.activeTexture(dt),Rt=dt;a.bindTexture(Q,St||Wt[Q]),vt.type=Q,vt.texture=St}}function st(){let Q=L[Rt];if(Q!==void 0&&Q.type!==void 0)a.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0}function mt(){try{a.compressedTexImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function yt(){try{a.compressedTexImage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ft(){try{a.texSubImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Qt(){try{a.texSubImage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Dt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ft(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ce(){try{a.texStorage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Tt(){try{a.texStorage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Bt(){try{a.texImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Se(){try{a.texImage3D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function te(Q){if(pt.equals(Q)===!1)a.scissor(Q.x,Q.y,Q.z,Q.w),pt.copy(Q)}function Ht(Q){if(wt.equals(Q)===!1)a.viewport(Q.x,Q.y,Q.z,Q.w),wt.copy(Q)}function fe(Q,St){let dt=S.get(St);if(dt===void 0)dt=new WeakMap,S.set(St,dt);let vt=dt.get(Q);if(vt===void 0)vt=a.getUniformBlockIndex(St,Q.name),dt.set(Q,vt)}function ve(Q,St){let vt=S.get(St).get(Q);if(M.get(St)!==vt)a.uniformBlockBinding(St,vt,Q.__bindingPointIndex),M.set(St,vt)}function Ie(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),y.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),b={},Rt=null,L={},v={},T=new WeakMap,C=[],I=null,D=!1,w=null,A=null,G=null,F=null,H=null,rt=null,q=null,Y=new xe(0,0,0),ut=0,B=!1,z=null,j=null,at=null,ct=null,ht=null,pt.set(0,0,a.canvas.width,a.canvas.height),wt.set(0,0,a.canvas.width,a.canvas.height),_.reset(),y.reset(),x.reset()}return{buffers:{color:_,depth:y,stencil:x},enable:It,disable:se,bindFramebuffer:ye,drawBuffers:re,useProgram:xt,setBlending:Gt,setMaterial:bt,setFlipSided:Yt,setCullFace:Mt,setLineWidth:oe,setPolygonOffset:zt,setScissorTest:Vt,activeTexture:W,bindTexture:U,unbindTexture:st,compressedTexImage2D:mt,compressedTexImage3D:yt,texImage2D:Bt,texImage3D:Se,updateUBOMapping:fe,uniformBlockBinding:ve,texStorage2D:ce,texStorage3D:Tt,texSubImage2D:ft,texSubImage3D:Qt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ft,scissor:te,viewport:Ht,reset:Ie}}function Il(a,h,p,m){let g=sm(m);switch(p){case 1021:return a*h;case 1024:return a*h;case 1025:return a*h*2;case 1028:return a*h/g.components*g.byteLength;case 1029:return a*h/g.components*g.byteLength;case 1030:return a*h*2/g.components*g.byteLength;case 1031:return a*h*2/g.components*g.byteLength;case 1022:return a*h*3/g.components*g.byteLength;case 1023:return a*h*4/g.components*g.byteLength;case 1033:return a*h*4/g.components*g.byteLength;case 33776:case 33777:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*8;case 33778:case 33779:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 35841:case 35843:return Math.max(a,16)*Math.max(h,8)/4;case 35840:case 35842:return Math.max(a,8)*Math.max(h,8)/2;case 36196:case 37492:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*8;case 37496:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 37808:return Math.floor((a+3)/4)*Math.floor((h+3)/4)*16;case 37809:return Math.floor((a+4)/5)*Math.floor((h+3)/4)*16;case 37810:return Math.floor((a+4)/5)*Math.floor((h+4)/5)*16;case 37811:return Math.floor((a+5)/6)*Math.floor((h+4)/5)*16;case 37812:return Math.floor((a+5)/6)*Math.floor((h+5)/6)*16;case 37813:return Math.floor((a+7)/8)*Math.floor((h+4)/5)*16;case 37814:return Math.floor((a+7)/8)*Math.floor((h+5)/6)*16;case 37815:return Math.floor((a+7)/8)*Math.floor((h+7)/8)*16;case 37816:return Math.floor((a+9)/10)*Math.floor((h+4)/5)*16;case 37817:return Math.floor((a+9)/10)*Math.floor((h+5)/6)*16;case 37818:return Math.floor((a+9)/10)*Math.floor((h+7)/8)*16;case 37819:return Math.floor((a+9)/10)*Math.floor((h+9)/10)*16;case 37820:return Math.floor((a+11)/12)*Math.floor((h+9)/10)*16;case 37821:return Math.floor((a+11)/12)*Math.floor((h+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(a/4)*Math.ceil(h/4)*16;case 36283:case 36284:return Math.ceil(a/4)*Math.ceil(h/4)*8;case 36285:case 36286:return Math.ceil(a/4)*Math.ceil(h/4)*16}throw Error(`Unable to determine texture byte length for ${p} format.`)}function sm(a){switch(a){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${a}.`)}function rm(a,h,p,m,g,_,y){let x=h.has("WEBGL_multisampled_render_to_texture")?h.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new Et,b=new WeakMap,v,T=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(W){}function I(W,U){return C?new OffscreenCanvas(W,U):Br("canvas")}function D(W,U,st){let mt=1,yt=Vt(W);if(yt.width>st||yt.height>st)mt=st/Math.max(yt.width,yt.height);if(mt<1)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap||typeof VideoFrame<"u"&&W instanceof VideoFrame){let ft=Math.floor(mt*yt.width),Qt=Math.floor(mt*yt.height);if(v===void 0)v=I(ft,Qt);let Dt=U?I(ft,Qt):v;return Dt.width=ft,Dt.height=Qt,Dt.getContext("2d").drawImage(W,0,0,ft,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Qt+")."),Dt}else{if("data"in W)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+").");return W}return W}function w(W){return W.generateMipmaps}function A(W){a.generateMipmap(W)}function G(W){if(W.isWebGLCubeRenderTarget)return a.TEXTURE_CUBE_MAP;if(W.isWebGL3DRenderTarget)return a.TEXTURE_3D;if(W.isWebGLArrayRenderTarget||W.isCompressedArrayTexture)return a.TEXTURE_2D_ARRAY;return a.TEXTURE_2D}function F(W,U,st,mt,yt=!1){if(W!==null){if(a[W]!==void 0)return a[W];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let ft=U;if(U===a.RED){if(st===a.FLOAT)ft=a.R32F;if(st===a.HALF_FLOAT)ft=a.R16F;if(st===a.UNSIGNED_BYTE)ft=a.R8}if(U===a.RED_INTEGER){if(st===a.UNSIGNED_BYTE)ft=a.R8UI;if(st===a.UNSIGNED_SHORT)ft=a.R16UI;if(st===a.UNSIGNED_INT)ft=a.R32UI;if(st===a.BYTE)ft=a.R8I;if(st===a.SHORT)ft=a.R16I;if(st===a.INT)ft=a.R32I}if(U===a.RG){if(st===a.FLOAT)ft=a.RG32F;if(st===a.HALF_FLOAT)ft=a.RG16F;if(st===a.UNSIGNED_BYTE)ft=a.RG8}if(U===a.RG_INTEGER){if(st===a.UNSIGNED_BYTE)ft=a.RG8UI;if(st===a.UNSIGNED_SHORT)ft=a.RG16UI;if(st===a.UNSIGNED_INT)ft=a.RG32UI;if(st===a.BYTE)ft=a.RG8I;if(st===a.SHORT)ft=a.RG16I;if(st===a.INT)ft=a.RG32I}if(U===a.RGB_INTEGER){if(st===a.UNSIGNED_BYTE)ft=a.RGB8UI;if(st===a.UNSIGNED_SHORT)ft=a.RGB16UI;if(st===a.UNSIGNED_INT)ft=a.RGB32UI;if(st===a.BYTE)ft=a.RGB8I;if(st===a.SHORT)ft=a.RGB16I;if(st===a.INT)ft=a.RGB32I}if(U===a.RGBA_INTEGER){if(st===a.UNSIGNED_BYTE)ft=a.RGBA8UI;if(st===a.UNSIGNED_SHORT)ft=a.RGBA16UI;if(st===a.UNSIGNED_INT)ft=a.RGBA32UI;if(st===a.BYTE)ft=a.RGBA8I;if(st===a.SHORT)ft=a.RGBA16I;if(st===a.INT)ft=a.RGBA32I}if(U===a.RGB){if(st===a.UNSIGNED_INT_5_9_9_9_REV)ft=a.RGB9_E5}if(U===a.RGBA){let Qt=yt?"linear":Ae.getTransfer(mt);if(st===a.FLOAT)ft=a.RGBA32F;if(st===a.HALF_FLOAT)ft=a.RGBA16F;if(st===a.UNSIGNED_BYTE)ft=Qt==="srgb"?a.SRGB8_ALPHA8:a.RGBA8;if(st===a.UNSIGNED_SHORT_4_4_4_4)ft=a.RGBA4;if(st===a.UNSIGNED_SHORT_5_5_5_1)ft=a.RGB5_A1}if(ft===a.R16F||ft===a.R32F||ft===a.RG16F||ft===a.RG32F||ft===a.RGBA16F||ft===a.RGBA32F)h.get("EXT_color_buffer_float");return ft}function H(W,U){let st;if(W){if(U===null||U===1014||U===1020)st=a.DEPTH24_STENCIL8;else if(U===1015)st=a.DEPTH32F_STENCIL8;else if(U===1012)st=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(U===null||U===1014||U===1020)st=a.DEPTH_COMPONENT24;else if(U===1015)st=a.DEPTH_COMPONENT32F;else if(U===1012)st=a.DEPTH_COMPONENT16;return st}function rt(W,U){if(w(W)===!0||W.isFramebufferTexture&&W.minFilter!==1003&&W.minFilter!==1006)return Math.log2(Math.max(U.width,U.height))+1;else if(W.mipmaps!==void 0&&W.mipmaps.length>0)return W.mipmaps.length;else if(W.isCompressedTexture&&Array.isArray(W.image))return U.mipmaps.length;else return 1}function q(W){let U=W.target;if(U.removeEventListener("dispose",q),ut(U),U.isVideoTexture)b.delete(U)}function Y(W){let U=W.target;U.removeEventListener("dispose",Y),z(U)}function ut(W){let U=m.get(W);if(U.__webglInit===void 0)return;let st=W.source,mt=T.get(st);if(mt){let yt=mt[U.__cacheKey];if(yt.usedTimes--,yt.usedTimes===0)B(W);if(Object.keys(mt).length===0)T.delete(st)}m.remove(W)}function B(W){let U=m.get(W);a.deleteTexture(U.__webglTexture);let st=W.source,mt=T.get(st);delete mt[U.__cacheKey],y.memory.textures--}function z(W){let U=m.get(W);if(W.depthTexture)W.depthTexture.dispose(),m.remove(W.depthTexture);if(W.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(U.__webglFramebuffer[mt]))for(let yt=0;yt<U.__webglFramebuffer[mt].length;yt++)a.deleteFramebuffer(U.__webglFramebuffer[mt][yt]);else a.deleteFramebuffer(U.__webglFramebuffer[mt]);if(U.__webglDepthbuffer)a.deleteRenderbuffer(U.__webglDepthbuffer[mt])}else{if(Array.isArray(U.__webglFramebuffer))for(let mt=0;mt<U.__webglFramebuffer.length;mt++)a.deleteFramebuffer(U.__webglFramebuffer[mt]);else a.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer)a.deleteRenderbuffer(U.__webglDepthbuffer);if(U.__webglMultisampledFramebuffer)a.deleteFramebuffer(U.__webglMultisampledFramebuffer);if(U.__webglColorRenderbuffer){for(let mt=0;mt<U.__webglColorRenderbuffer.length;mt++)if(U.__webglColorRenderbuffer[mt])a.deleteRenderbuffer(U.__webglColorRenderbuffer[mt])}if(U.__webglDepthRenderbuffer)a.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let st=W.textures;for(let mt=0,yt=st.length;mt<yt;mt++){let ft=m.get(st[mt]);if(ft.__webglTexture)a.deleteTexture(ft.__webglTexture),y.memory.textures--;m.remove(st[mt])}m.remove(W)}let j=0;function at(){j=0}function ct(){let W=j;if(W>=g.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+W+" texture units while this GPU supports only "+g.maxTextures);return j+=1,W}function ht(W){let U=[];return U.push(W.wrapS),U.push(W.wrapT),U.push(W.wrapR||0),U.push(W.magFilter),U.push(W.minFilter),U.push(W.anisotropy),U.push(W.internalFormat),U.push(W.format),U.push(W.type),U.push(W.generateMipmaps),U.push(W.premultiplyAlpha),U.push(W.flipY),U.push(W.unpackAlignment),U.push(W.colorSpace),U.join()}function _t(W,U){let st=m.get(W);if(W.isVideoTexture)oe(W);if(W.isRenderTargetTexture===!1&&W.version>0&&st.__version!==W.version){let mt=W.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(st,W,U);return}}p.bindTexture(a.TEXTURE_2D,st.__webglTexture,a.TEXTURE0+U)}function J(W,U){let st=m.get(W);if(W.version>0&&st.__version!==W.version){wt(st,W,U);return}p.bindTexture(a.TEXTURE_2D_ARRAY,st.__webglTexture,a.TEXTURE0+U)}function it(W,U){let st=m.get(W);if(W.version>0&&st.__version!==W.version){wt(st,W,U);return}p.bindTexture(a.TEXTURE_3D,st.__webglTexture,a.TEXTURE0+U)}function Z(W,U){let st=m.get(W);if(W.version>0&&st.__version!==W.version){$t(st,W,U);return}p.bindTexture(a.TEXTURE_CUBE_MAP,st.__webglTexture,a.TEXTURE0+U)}let Rt={[1000]:a.REPEAT,[1001]:a.CLAMP_TO_EDGE,[1002]:a.MIRRORED_REPEAT},L={[1003]:a.NEAREST,[1004]:a.NEAREST_MIPMAP_NEAREST,[1005]:a.NEAREST_MIPMAP_LINEAR,[1006]:a.LINEAR,[1007]:a.LINEAR_MIPMAP_NEAREST,[1008]:a.LINEAR_MIPMAP_LINEAR},qt={[512]:a.NEVER,[519]:a.ALWAYS,[513]:a.LESS,[515]:a.LEQUAL,[514]:a.EQUAL,[518]:a.GEQUAL,[516]:a.GREATER,[517]:a.NOTEQUAL};function ee(W,U){if(U.type===1015&&h.has("OES_texture_float_linear")===!1&&(U.magFilter===1006||U.magFilter===1007||U.magFilter===1005||U.magFilter===1008||U.minFilter===1006||U.minFilter===1007||U.minFilter===1005||U.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(a.texParameteri(W,a.TEXTURE_WRAP_S,Rt[U.wrapS]),a.texParameteri(W,a.TEXTURE_WRAP_T,Rt[U.wrapT]),W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY)a.texParameteri(W,a.TEXTURE_WRAP_R,Rt[U.wrapR]);if(a.texParameteri(W,a.TEXTURE_MAG_FILTER,L[U.magFilter]),a.texParameteri(W,a.TEXTURE_MIN_FILTER,L[U.minFilter]),U.compareFunction)a.texParameteri(W,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(W,a.TEXTURE_COMPARE_FUNC,qt[U.compareFunction]);if(h.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===1003)return;if(U.minFilter!==1005&&U.minFilter!==1008)return;if(U.type===1015&&h.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||m.get(U).__currentAnisotropy){let st=h.get("EXT_texture_filter_anisotropic");a.texParameterf(W,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,g.getMaxAnisotropy())),m.get(U).__currentAnisotropy=U.anisotropy}}}function pt(W,U){let st=!1;if(W.__webglInit===void 0)W.__webglInit=!0,U.addEventListener("dispose",q);let mt=U.source,yt=T.get(mt);if(yt===void 0)yt={},T.set(mt,yt);let ft=ht(U);if(ft!==W.__cacheKey){if(yt[ft]===void 0)yt[ft]={texture:a.createTexture(),usedTimes:0},y.memory.textures++,st=!0;yt[ft].usedTimes++;let Qt=yt[W.__cacheKey];if(Qt!==void 0){if(yt[W.__cacheKey].usedTimes--,Qt.usedTimes===0)B(U)}W.__cacheKey=ft,W.__webglTexture=yt[ft].texture}return st}function wt(W,U,st){let mt=a.TEXTURE_2D;if(U.isDataArrayTexture||U.isCompressedArrayTexture)mt=a.TEXTURE_2D_ARRAY;if(U.isData3DTexture)mt=a.TEXTURE_3D;let yt=pt(W,U),ft=U.source;p.bindTexture(mt,W.__webglTexture,a.TEXTURE0+st);let Qt=m.get(ft);if(ft.version!==Qt.__version||yt===!0){p.activeTexture(a.TEXTURE0+st);let Dt=Ae.getPrimaries(Ae.workingColorSpace),Ft=U.colorSpace===""?null:Ae.getPrimaries(U.colorSpace),ce=U.colorSpace===""||Dt===Ft?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,U.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,U.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Tt=D(U.image,!1,g.maxTextureSize);Tt=zt(U,Tt);let Bt=_.convert(U.format,U.colorSpace),Se=_.convert(U.type),te=F(U.internalFormat,Bt,Se,U.colorSpace,U.isVideoTexture);ee(mt,U);let Ht,fe=U.mipmaps,ve=U.isVideoTexture!==!0,Ie=Qt.__version===void 0||yt===!0,Q=ft.dataReady,St=rt(U,Tt);if(U.isDepthTexture){if(te=H(U.format===1027,U.type),Ie)if(ve)p.texStorage2D(a.TEXTURE_2D,1,te,Tt.width,Tt.height);else p.texImage2D(a.TEXTURE_2D,0,te,Tt.width,Tt.height,0,Bt,Se,null)}else if(U.isDataTexture)if(fe.length>0){if(ve&&Ie)p.texStorage2D(a.TEXTURE_2D,St,te,fe[0].width,fe[0].height);for(let dt=0,vt=fe.length;dt<vt;dt++)if(Ht=fe[dt],ve){if(Q)p.texSubImage2D(a.TEXTURE_2D,dt,0,0,Ht.width,Ht.height,Bt,Se,Ht.data)}else p.texImage2D(a.TEXTURE_2D,dt,te,Ht.width,Ht.height,0,Bt,Se,Ht.data);U.generateMipmaps=!1}else if(ve){if(Ie)p.texStorage2D(a.TEXTURE_2D,St,te,Tt.width,Tt.height);if(Q)p.texSubImage2D(a.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Bt,Se,Tt.data)}else p.texImage2D(a.TEXTURE_2D,0,te,Tt.width,Tt.height,0,Bt,Se,Tt.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){if(ve&&Ie)p.texStorage3D(a.TEXTURE_2D_ARRAY,St,te,fe[0].width,fe[0].height,Tt.depth);for(let dt=0,vt=fe.length;dt<vt;dt++)if(Ht=fe[dt],U.format!==1023)if(Bt!==null)if(ve){if(Q)if(U.layerUpdates.size>0){let Ot=Il(Ht.width,Ht.height,U.format,U.type);for(let Lt of U.layerUpdates){let jt=Ht.data.subarray(Lt*Ot/Ht.data.BYTES_PER_ELEMENT,(Lt+1)*Ot/Ht.data.BYTES_PER_ELEMENT);p.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,dt,0,0,Lt,Ht.width,Ht.height,1,Bt,jt)}U.clearLayerUpdates()}else p.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,dt,0,0,0,Ht.width,Ht.height,Tt.depth,Bt,Ht.data)}else p.compressedTexImage3D(a.TEXTURE_2D_ARRAY,dt,te,Ht.width,Ht.height,Tt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ve){if(Q)p.texSubImage3D(a.TEXTURE_2D_ARRAY,dt,0,0,0,Ht.width,Ht.height,Tt.depth,Bt,Se,Ht.data)}else p.texImage3D(a.TEXTURE_2D_ARRAY,dt,te,Ht.width,Ht.height,Tt.depth,0,Bt,Se,Ht.data)}else{if(ve&&Ie)p.texStorage2D(a.TEXTURE_2D,St,te,fe[0].width,fe[0].height);for(let dt=0,vt=fe.length;dt<vt;dt++)if(Ht=fe[dt],U.format!==1023)if(Bt!==null)if(ve){if(Q)p.compressedTexSubImage2D(a.TEXTURE_2D,dt,0,0,Ht.width,Ht.height,Bt,Ht.data)}else p.compressedTexImage2D(a.TEXTURE_2D,dt,te,Ht.width,Ht.height,0,Ht.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ve){if(Q)p.texSubImage2D(a.TEXTURE_2D,dt,0,0,Ht.width,Ht.height,Bt,Se,Ht.data)}else p.texImage2D(a.TEXTURE_2D,dt,te,Ht.width,Ht.height,0,Bt,Se,Ht.data)}else if(U.isDataArrayTexture)if(ve){if(Ie)p.texStorage3D(a.TEXTURE_2D_ARRAY,St,te,Tt.width,Tt.height,Tt.depth);if(Q)if(U.layerUpdates.size>0){let dt=Il(Tt.width,Tt.height,U.format,U.type);for(let vt of U.layerUpdates){let Ot=Tt.data.subarray(vt*dt/Tt.data.BYTES_PER_ELEMENT,(vt+1)*dt/Tt.data.BYTES_PER_ELEMENT);p.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,vt,Tt.width,Tt.height,1,Bt,Se,Ot)}U.clearLayerUpdates()}else p.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,Se,Tt.data)}else p.texImage3D(a.TEXTURE_2D_ARRAY,0,te,Tt.width,Tt.height,Tt.depth,0,Bt,Se,Tt.data);else if(U.isData3DTexture)if(ve){if(Ie)p.texStorage3D(a.TEXTURE_3D,St,te,Tt.width,Tt.height,Tt.depth);if(Q)p.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,Se,Tt.data)}else p.texImage3D(a.TEXTURE_3D,0,te,Tt.width,Tt.height,Tt.depth,0,Bt,Se,Tt.data);else if(U.isFramebufferTexture){if(Ie)if(ve)p.texStorage2D(a.TEXTURE_2D,St,te,Tt.width,Tt.height);else{let dt=Tt.width,vt=Tt.height;for(let Ot=0;Ot<St;Ot++)p.texImage2D(a.TEXTURE_2D,Ot,te,dt,vt,0,Bt,Se,null),dt>>=1,vt>>=1}}else if(fe.length>0){if(ve&&Ie){let dt=Vt(fe[0]);p.texStorage2D(a.TEXTURE_2D,St,te,dt.width,dt.height)}for(let dt=0,vt=fe.length;dt<vt;dt++)if(Ht=fe[dt],ve){if(Q)p.texSubImage2D(a.TEXTURE_2D,dt,0,0,Bt,Se,Ht)}else p.texImage2D(a.TEXTURE_2D,dt,te,Bt,Se,Ht);U.generateMipmaps=!1}else if(ve){if(Ie){let dt=Vt(Tt);p.texStorage2D(a.TEXTURE_2D,St,te,dt.width,dt.height)}if(Q)p.texSubImage2D(a.TEXTURE_2D,0,0,0,Bt,Se,Tt)}else p.texImage2D(a.TEXTURE_2D,0,te,Bt,Se,Tt);if(w(U))A(mt);if(Qt.__version=ft.version,U.onUpdate)U.onUpdate(U)}W.__version=U.version}function $t(W,U,st){if(U.image.length!==6)return;let mt=pt(W,U),yt=U.source;p.bindTexture(a.TEXTURE_CUBE_MAP,W.__webglTexture,a.TEXTURE0+st);let ft=m.get(yt);if(yt.version!==ft.__version||mt===!0){p.activeTexture(a.TEXTURE0+st);let Qt=Ae.getPrimaries(Ae.workingColorSpace),Dt=U.colorSpace===""?null:Ae.getPrimaries(U.colorSpace),Ft=U.colorSpace===""||Qt===Dt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,U.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,U.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let ce=U.isCompressedTexture||U.image[0].isCompressedTexture,Tt=U.image[0]&&U.image[0].isDataTexture,Bt=[];for(let vt=0;vt<6;vt++){if(!ce&&!Tt)Bt[vt]=D(U.image[vt],!0,g.maxCubemapSize);else Bt[vt]=Tt?U.image[vt].image:U.image[vt];Bt[vt]=zt(U,Bt[vt])}let Se=Bt[0],te=_.convert(U.format,U.colorSpace),Ht=_.convert(U.type),fe=F(U.internalFormat,te,Ht,U.colorSpace),ve=U.isVideoTexture!==!0,Ie=ft.__version===void 0||mt===!0,Q=yt.dataReady,St=rt(U,Se);ee(a.TEXTURE_CUBE_MAP,U);let dt;if(ce){if(ve&&Ie)p.texStorage2D(a.TEXTURE_CUBE_MAP,St,fe,Se.width,Se.height);for(let vt=0;vt<6;vt++){dt=Bt[vt].mipmaps;for(let Ot=0;Ot<dt.length;Ot++){let Lt=dt[Ot];if(U.format!==1023)if(te!==null)if(ve){if(Q)p.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,0,0,Lt.width,Lt.height,te,Lt.data)}else p.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,fe,Lt.width,Lt.height,0,Lt.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(ve){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,0,0,Lt.width,Lt.height,te,Ht,Lt.data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,fe,Lt.width,Lt.height,0,te,Ht,Lt.data)}}}else{if(dt=U.mipmaps,ve&&Ie){if(dt.length>0)St++;let vt=Vt(Bt[0]);p.texStorage2D(a.TEXTURE_CUBE_MAP,St,fe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Tt){if(ve){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt[vt].width,Bt[vt].height,te,Ht,Bt[vt].data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,Bt[vt].width,Bt[vt].height,0,te,Ht,Bt[vt].data);for(let Ot=0;Ot<dt.length;Ot++){let jt=dt[Ot].image[vt].image;if(ve){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,0,0,jt.width,jt.height,te,Ht,jt.data)}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,fe,jt.width,jt.height,0,te,Ht,jt.data)}}else{if(ve){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,te,Ht,Bt[vt])}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,te,Ht,Bt[vt]);for(let Ot=0;Ot<dt.length;Ot++){let Lt=dt[Ot];if(ve){if(Q)p.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,0,0,te,Ht,Lt.image[vt])}else p.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,fe,te,Ht,Lt.image[vt])}}}if(w(U))A(a.TEXTURE_CUBE_MAP);if(ft.__version=yt.version,U.onUpdate)U.onUpdate(U)}W.__version=U.version}function Wt(W,U,st,mt,yt,ft){let Qt=_.convert(st.format,st.colorSpace),Dt=_.convert(st.type),Ft=F(st.internalFormat,Qt,Dt,st.colorSpace),ce=m.get(U),Tt=m.get(st);if(Tt.__renderTarget=U,!ce.__hasExternalTextures){let Bt=Math.max(1,U.width>>ft),Se=Math.max(1,U.height>>ft);if(yt===a.TEXTURE_3D||yt===a.TEXTURE_2D_ARRAY)p.texImage3D(yt,ft,Ft,Bt,Se,U.depth,0,Qt,Dt,null);else p.texImage2D(yt,ft,Ft,Bt,Se,0,Qt,Dt,null)}if(p.bindFramebuffer(a.FRAMEBUFFER,W),Mt(U))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,mt,yt,Tt.__webglTexture,0,Yt(U));else if(yt===a.TEXTURE_2D||yt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)a.framebufferTexture2D(a.FRAMEBUFFER,mt,yt,Tt.__webglTexture,ft);p.bindFramebuffer(a.FRAMEBUFFER,null)}function It(W,U,st){if(a.bindRenderbuffer(a.RENDERBUFFER,W),U.depthBuffer){let mt=U.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,ft=H(U.stencilBuffer,yt),Qt=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Dt=Yt(U);if(Mt(U))x.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Dt,ft,U.width,U.height);else if(st)a.renderbufferStorageMultisample(a.RENDERBUFFER,Dt,ft,U.width,U.height);else a.renderbufferStorage(a.RENDERBUFFER,ft,U.width,U.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,Qt,a.RENDERBUFFER,W)}else{let mt=U.textures;for(let yt=0;yt<mt.length;yt++){let ft=mt[yt],Qt=_.convert(ft.format,ft.colorSpace),Dt=_.convert(ft.type),Ft=F(ft.internalFormat,Qt,Dt,ft.colorSpace),ce=Yt(U);if(st&&Mt(U)===!1)a.renderbufferStorageMultisample(a.RENDERBUFFER,ce,Ft,U.width,U.height);else if(Mt(U))x.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ce,Ft,U.width,U.height);else a.renderbufferStorage(a.RENDERBUFFER,Ft,U.width,U.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function se(W,U){if(U&&U.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(p.bindFramebuffer(a.FRAMEBUFFER,W),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let mt=m.get(U.depthTexture);if(mt.__renderTarget=U,!mt.__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0;_t(U.depthTexture,0);let yt=mt.__webglTexture,ft=Yt(U);if(U.depthTexture.format===1026)if(Mt(U))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,yt,0,ft);else a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,yt,0);else if(U.depthTexture.format===1027)if(Mt(U))x.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,yt,0,ft);else a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,yt,0);else throw Error("Unknown depthTexture format")}function ye(W){let U=m.get(W),st=W.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==W.depthTexture){let mt=W.depthTexture;if(U.__depthDisposeCallback)U.__depthDisposeCallback();if(mt){let yt=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),U.__depthDisposeCallback=yt}U.__boundDepthTexture=mt}if(W.depthTexture&&!U.__autoAllocateDepthBuffer){if(st)throw Error("target.depthTexture not supported in Cube render targets");se(U.__webglFramebuffer,W)}else if(st){U.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(p.bindFramebuffer(a.FRAMEBUFFER,U.__webglFramebuffer[mt]),U.__webglDepthbuffer[mt]===void 0)U.__webglDepthbuffer[mt]=a.createRenderbuffer(),It(U.__webglDepthbuffer[mt],W,!1);else{let yt=W.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ft=U.__webglDepthbuffer[mt];a.bindRenderbuffer(a.RENDERBUFFER,ft),a.framebufferRenderbuffer(a.FRAMEBUFFER,yt,a.RENDERBUFFER,ft)}}else if(p.bindFramebuffer(a.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=a.createRenderbuffer(),It(U.__webglDepthbuffer,W,!1);else{let mt=W.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,yt=U.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,yt),a.framebufferRenderbuffer(a.FRAMEBUFFER,mt,a.RENDERBUFFER,yt)}p.bindFramebuffer(a.FRAMEBUFFER,null)}function re(W,U,st){let mt=m.get(W);if(U!==void 0)Wt(mt.__webglFramebuffer,W,W.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0);if(st!==void 0)ye(W)}function xt(W){let U=W.texture,st=m.get(W),mt=m.get(U);W.addEventListener("dispose",Y);let yt=W.textures,ft=W.isWebGLCubeRenderTarget===!0,Qt=yt.length>1;if(!Qt){if(mt.__webglTexture===void 0)mt.__webglTexture=a.createTexture();mt.__version=U.version,y.memory.textures++}if(ft){st.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(U.mipmaps&&U.mipmaps.length>0){st.__webglFramebuffer[Dt]=[];for(let Ft=0;Ft<U.mipmaps.length;Ft++)st.__webglFramebuffer[Dt][Ft]=a.createFramebuffer()}else st.__webglFramebuffer[Dt]=a.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){st.__webglFramebuffer=[];for(let Dt=0;Dt<U.mipmaps.length;Dt++)st.__webglFramebuffer[Dt]=a.createFramebuffer()}else st.__webglFramebuffer=a.createFramebuffer();if(Qt)for(let Dt=0,Ft=yt.length;Dt<Ft;Dt++){let ce=m.get(yt[Dt]);if(ce.__webglTexture===void 0)ce.__webglTexture=a.createTexture(),y.memory.textures++}if(W.samples>0&&Mt(W)===!1){st.__webglMultisampledFramebuffer=a.createFramebuffer(),st.__webglColorRenderbuffer=[],p.bindFramebuffer(a.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){let Ft=yt[Dt];st.__webglColorRenderbuffer[Dt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,st.__webglColorRenderbuffer[Dt]);let ce=_.convert(Ft.format,Ft.colorSpace),Tt=_.convert(Ft.type),Bt=F(Ft.internalFormat,ce,Tt,Ft.colorSpace,W.isXRRenderTarget===!0),Se=Yt(W);a.renderbufferStorageMultisample(a.RENDERBUFFER,Se,Bt,W.width,W.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Dt,a.RENDERBUFFER,st.__webglColorRenderbuffer[Dt])}if(a.bindRenderbuffer(a.RENDERBUFFER,null),W.depthBuffer)st.__webglDepthRenderbuffer=a.createRenderbuffer(),It(st.__webglDepthRenderbuffer,W,!0);p.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ft){p.bindTexture(a.TEXTURE_CUBE_MAP,mt.__webglTexture),ee(a.TEXTURE_CUBE_MAP,U);for(let Dt=0;Dt<6;Dt++)if(U.mipmaps&&U.mipmaps.length>0)for(let Ft=0;Ft<U.mipmaps.length;Ft++)Wt(st.__webglFramebuffer[Dt][Ft],W,U,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ft);else Wt(st.__webglFramebuffer[Dt],W,U,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);if(w(U))A(a.TEXTURE_CUBE_MAP);p.unbindTexture()}else if(Qt){for(let Dt=0,Ft=yt.length;Dt<Ft;Dt++){let ce=yt[Dt],Tt=m.get(ce);if(p.bindTexture(a.TEXTURE_2D,Tt.__webglTexture),ee(a.TEXTURE_2D,ce),Wt(st.__webglFramebuffer,W,ce,a.COLOR_ATTACHMENT0+Dt,a.TEXTURE_2D,0),w(ce))A(a.TEXTURE_2D)}p.unbindTexture()}else{let Dt=a.TEXTURE_2D;if(W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)Dt=W.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY;if(p.bindTexture(Dt,mt.__webglTexture),ee(Dt,U),U.mipmaps&&U.mipmaps.length>0)for(let Ft=0;Ft<U.mipmaps.length;Ft++)Wt(st.__webglFramebuffer[Ft],W,U,a.COLOR_ATTACHMENT0,Dt,Ft);else Wt(st.__webglFramebuffer,W,U,a.COLOR_ATTACHMENT0,Dt,0);if(w(U))A(Dt);p.unbindTexture()}if(W.depthBuffer)ye(W)}function Ct(W){let U=W.textures;for(let st=0,mt=U.length;st<mt;st++){let yt=U[st];if(w(yt)){let ft=G(W),Qt=m.get(yt).__webglTexture;p.bindTexture(ft,Qt),A(ft),p.unbindTexture()}}}let V=[],Gt=[];function bt(W){if(W.samples>0){if(Mt(W)===!1){let{textures:U,width:st,height:mt}=W,yt=a.COLOR_BUFFER_BIT,ft=W.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Qt=m.get(W),Dt=U.length>1;if(Dt)for(let Ft=0;Ft<U.length;Ft++)p.bindFramebuffer(a.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ft,a.RENDERBUFFER,null),p.bindFramebuffer(a.FRAMEBUFFER,Qt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ft,a.TEXTURE_2D,null,0);p.bindFramebuffer(a.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),p.bindFramebuffer(a.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let Ft=0;Ft<U.length;Ft++){if(W.resolveDepthBuffer){if(W.depthBuffer)yt|=a.DEPTH_BUFFER_BIT;if(W.stencilBuffer&&W.resolveStencilBuffer)yt|=a.STENCIL_BUFFER_BIT}if(Dt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Qt.__webglColorRenderbuffer[Ft]);let ce=m.get(U[Ft]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ce,0)}if(a.blitFramebuffer(0,0,st,mt,0,0,st,mt,yt,a.NEAREST),M===!0){if(V.length=0,Gt.length=0,V.push(a.COLOR_ATTACHMENT0+Ft),W.depthBuffer&&W.resolveDepthBuffer===!1)V.push(ft),Gt.push(ft),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Gt);a.invalidateFramebuffer(a.READ_FRAMEBUFFER,V)}}if(p.bindFramebuffer(a.READ_FRAMEBUFFER,null),p.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Dt)for(let Ft=0;Ft<U.length;Ft++){p.bindFramebuffer(a.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ft,a.RENDERBUFFER,Qt.__webglColorRenderbuffer[Ft]);let ce=m.get(U[Ft]).__webglTexture;p.bindFramebuffer(a.FRAMEBUFFER,Qt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ft,a.TEXTURE_2D,ce,0)}p.bindFramebuffer(a.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(W.depthBuffer&&W.resolveDepthBuffer===!1&&M){let U=W.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[U])}}}function Yt(W){return Math.min(g.maxSamples,W.samples)}function Mt(W){let U=m.get(W);return W.samples>0&&h.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function oe(W){let U=y.render.frame;if(b.get(W)!==U)b.set(W,U),W.update()}function zt(W,U){let{colorSpace:st,format:mt,type:yt}=W;if(W.isCompressedTexture===!0||W.isVideoTexture===!0)return U;if(st!=="srgb-linear"&&st!=="")if(Ae.getTransfer(st)==="srgb"){if(mt!==1023||yt!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",st);return U}function Vt(W){if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement)S.width=W.naturalWidth||W.width,S.height=W.naturalHeight||W.height;else if(typeof VideoFrame<"u"&&W instanceof VideoFrame)S.width=W.displayWidth,S.height=W.displayHeight;else S.width=W.width,S.height=W.height;return S}this.allocateTextureUnit=ct,this.resetTextureUnits=at,this.setTexture2D=_t,this.setTexture2DArray=J,this.setTexture3D=it,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=Mt}function am(a,h){function p(m,g=""){let _,y=Ae.getTransfer(g);if(m===1009)return a.UNSIGNED_BYTE;if(m===1017)return a.UNSIGNED_SHORT_4_4_4_4;if(m===1018)return a.UNSIGNED_SHORT_5_5_5_1;if(m===35902)return a.UNSIGNED_INT_5_9_9_9_REV;if(m===1010)return a.BYTE;if(m===1011)return a.SHORT;if(m===1012)return a.UNSIGNED_SHORT;if(m===1013)return a.INT;if(m===1014)return a.UNSIGNED_INT;if(m===1015)return a.FLOAT;if(m===1016)return a.HALF_FLOAT;if(m===1021)return a.ALPHA;if(m===1022)return a.RGB;if(m===1023)return a.RGBA;if(m===1024)return a.LUMINANCE;if(m===1025)return a.LUMINANCE_ALPHA;if(m===1026)return a.DEPTH_COMPONENT;if(m===1027)return a.DEPTH_STENCIL;if(m===1028)return a.RED;if(m===1029)return a.RED_INTEGER;if(m===1030)return a.RG;if(m===1031)return a.RG_INTEGER;if(m===1033)return a.RGBA_INTEGER;if(m===33776||m===33777||m===33778||m===33779)if(y==="srgb")if(_=h.get("WEBGL_compressed_texture_s3tc_srgb"),_!==null){if(m===33776)return _.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(_=h.get("WEBGL_compressed_texture_s3tc"),_!==null){if(m===33776)return _.COMPRESSED_RGB_S3TC_DXT1_EXT;if(m===33777)return _.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(m===33778)return _.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(m===33779)return _.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(m===35840||m===35841||m===35842||m===35843)if(_=h.get("WEBGL_compressed_texture_pvrtc"),_!==null){if(m===35840)return _.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(m===35841)return _.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(m===35842)return _.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(m===35843)return _.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(m===36196||m===37492||m===37496)if(_=h.get("WEBGL_compressed_texture_etc"),_!==null){if(m===36196||m===37492)return y==="srgb"?_.COMPRESSED_SRGB8_ETC2:_.COMPRESSED_RGB8_ETC2;if(m===37496)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:_.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(m===37808||m===37809||m===37810||m===37811||m===37812||m===37813||m===37814||m===37815||m===37816||m===37817||m===37818||m===37819||m===37820||m===37821)if(_=h.get("WEBGL_compressed_texture_astc"),_!==null){if(m===37808)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:_.COMPRESSED_RGBA_ASTC_4x4_KHR;if(m===37809)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:_.COMPRESSED_RGBA_ASTC_5x4_KHR;if(m===37810)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:_.COMPRESSED_RGBA_ASTC_5x5_KHR;if(m===37811)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:_.COMPRESSED_RGBA_ASTC_6x5_KHR;if(m===37812)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:_.COMPRESSED_RGBA_ASTC_6x6_KHR;if(m===37813)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:_.COMPRESSED_RGBA_ASTC_8x5_KHR;if(m===37814)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:_.COMPRESSED_RGBA_ASTC_8x6_KHR;if(m===37815)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:_.COMPRESSED_RGBA_ASTC_8x8_KHR;if(m===37816)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:_.COMPRESSED_RGBA_ASTC_10x5_KHR;if(m===37817)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:_.COMPRESSED_RGBA_ASTC_10x6_KHR;if(m===37818)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:_.COMPRESSED_RGBA_ASTC_10x8_KHR;if(m===37819)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:_.COMPRESSED_RGBA_ASTC_10x10_KHR;if(m===37820)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:_.COMPRESSED_RGBA_ASTC_12x10_KHR;if(m===37821)return y==="srgb"?_.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:_.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(m===36492||m===36494||m===36495)if(_=h.get("EXT_texture_compression_bptc"),_!==null){if(m===36492)return y==="srgb"?_.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:_.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(m===36494)return _.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(m===36495)return _.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(m===36283||m===36284||m===36285||m===36286)if(_=h.get("EXT_texture_compression_rgtc"),_!==null){if(m===36492)return _.COMPRESSED_RED_RGTC1_EXT;if(m===36284)return _.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(m===36285)return _.COMPRESSED_RED_GREEN_RGTC2_EXT;if(m===36286)return _.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(m===1020)return a.UNSIGNED_INT_24_8;return a[m]!==void 0?a[m]:null}return{convert:p}}class _c extends ln{constructor(a=[]){super();this.isArrayCamera=!0,this.cameras=a}}class Ut extends qe{constructor(){super();this.isGroup=!0,this.type="Group"}}var om={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X;return this._grip}dispatchEvent(a){if(this._targetRay!==null)this._targetRay.dispatchEvent(a);if(this._grip!==null)this._grip.dispatchEvent(a);if(this._hand!==null)this._hand.dispatchEvent(a);return this}connect(a){if(a&&a.hand){let h=this._hand;if(h)for(let p of a.hand.values())this._getHandJoint(h,p)}return this.dispatchEvent({type:"connected",data:a}),this}disconnect(a){if(this.dispatchEvent({type:"disconnected",data:a}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(a,h,p){let m=null,g=null,_=null,y=this._targetRay,x=this._grip,M=this._hand;if(a&&h.session.visibilityState!=="visible-blurred"){if(M&&a.hand){_=!0;for(let I of a.hand.values()){let D=h.getJointPose(I,p),w=this._getHandJoint(M,I);if(D!==null)w.matrix.fromArray(D.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.matrixWorldNeedsUpdate=!0,w.jointRadius=D.radius;w.visible=D!==null}let S=M.joints["index-finger-tip"],b=M.joints["thumb-tip"],v=S.position.distanceTo(b.position),T=0.02,C=0.005;if(M.inputState.pinching&&v>T+C)M.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:a.handedness,target:this});else if(!M.inputState.pinching&&v<=T-C)M.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:a.handedness,target:this})}else if(x!==null&&a.gripSpace){if(g=h.getPose(a.gripSpace,p),g!==null){if(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,g.linearVelocity)x.hasLinearVelocity=!0,x.linearVelocity.copy(g.linearVelocity);else x.hasLinearVelocity=!1;if(g.angularVelocity)x.hasAngularVelocity=!0,x.angularVelocity.copy(g.angularVelocity);else x.hasAngularVelocity=!1}}if(y!==null){if(m=h.getPose(a.targetRaySpace,p),m===null&&g!==null)m=g;if(m!==null){if(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,m.linearVelocity)y.hasLinearVelocity=!0,y.linearVelocity.copy(m.linearVelocity);else y.hasLinearVelocity=!1;if(m.angularVelocity)y.hasAngularVelocity=!0,y.angularVelocity.copy(m.angularVelocity);else y.hasAngularVelocity=!1;this.dispatchEvent(om)}}}if(y!==null)y.visible=m!==null;if(x!==null)x.visible=g!==null;if(M!==null)M.visible=_!==null;return this}_getHandJoint(a,h){if(a.joints[h.jointName]===void 0){let p=new Ut;p.matrixAutoUpdate=!1,p.visible=!1,a.joints[h.jointName]=p,a.add(p)}return a.joints[h.jointName]}}var lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cm=`
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

}`;class xc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(a,h,p){if(this.texture===null){let m=new cn,g=a.properties.get(m);if(g.__webglTexture=h.texture,h.depthNear!=p.depthNear||h.depthFar!=p.depthFar)this.depthNear=h.depthNear,this.depthFar=h.depthFar;this.texture=m}}getMesh(a){if(this.texture!==null){if(this.mesh===null){let h=a.cameras[0].viewport,p=new ri({vertexShader:lm,fragmentShader:cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:h.z},depthHeight:{value:h.w}}});this.mesh=new ne(new Yn(20,20),p)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yc extends yi{constructor(a,h){super();let p=this,m=null,g=1,_=null,y="local-floor",x=1,M=null,S=null,b=null,v=null,T=null,C=null,I=new xc,D=h.getContextAttributes(),w=null,A=null,G=[],F=[],H=new Et,rt=null,q=new ln;q.viewport=new Ne;let Y=new ln;Y.viewport=new Ne;let ut=[q,Y],B=new _c,z=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let wt=G[pt];if(wt===void 0)wt=new Or,G[pt]=wt;return wt.getTargetRaySpace()},this.getControllerGrip=function(pt){let wt=G[pt];if(wt===void 0)wt=new Or,G[pt]=wt;return wt.getGripSpace()},this.getHand=function(pt){let wt=G[pt];if(wt===void 0)wt=new Or,G[pt]=wt;return wt.getHandSpace()};function at(pt){let wt=F.indexOf(pt.inputSource);if(wt===-1)return;let $t=G[wt];if($t!==void 0)$t.update(pt.inputSource,pt.frame,M||_),$t.dispatchEvent({type:pt.type,data:pt.inputSource})}function ct(){m.removeEventListener("select",at),m.removeEventListener("selectstart",at),m.removeEventListener("selectend",at),m.removeEventListener("squeeze",at),m.removeEventListener("squeezestart",at),m.removeEventListener("squeezeend",at),m.removeEventListener("end",ct),m.removeEventListener("inputsourceschange",ht);for(let pt=0;pt<G.length;pt++){let wt=F[pt];if(wt===null)continue;F[pt]=null,G[pt].disconnect(wt)}z=null,j=null,I.reset(),a.setRenderTarget(w),T=null,v=null,b=null,m=null,A=null,ee.stop(),p.isPresenting=!1,a.setPixelRatio(rt),a.setSize(H.width,H.height,!1),p.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){if(g=pt,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){if(y=pt,p.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return M||_},this.setReferenceSpace=function(pt){M=pt},this.getBaseLayer=function(){return v!==null?v:T},this.getBinding=function(){return b},this.getFrame=function(){return C},this.getSession=function(){return m},this.setSession=async function(pt){if(m=pt,m!==null){if(w=a.getRenderTarget(),m.addEventListener("select",at),m.addEventListener("selectstart",at),m.addEventListener("selectend",at),m.addEventListener("squeeze",at),m.addEventListener("squeezestart",at),m.addEventListener("squeezeend",at),m.addEventListener("end",ct),m.addEventListener("inputsourceschange",ht),D.xrCompatible!==!0)await h.makeXRCompatible();if(rt=a.getPixelRatio(),a.getSize(H),m.renderState.layers===void 0){let wt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:g};T=new XRWebGLLayer(m,h,wt),m.updateRenderState({baseLayer:T}),a.setPixelRatio(1),a.setSize(T.framebufferWidth,T.framebufferHeight,!1),A=new xi(T.framebufferWidth,T.framebufferHeight,{format:1023,type:1009,colorSpace:a.outputColorSpace,stencilBuffer:D.stencil})}else{let wt=null,$t=null,Wt=null;if(D.depth)Wt=D.stencil?h.DEPTH24_STENCIL8:h.DEPTH_COMPONENT24,wt=D.stencil?1027:1026,$t=D.stencil?1020:1014;let It={colorFormat:h.RGBA8,depthFormat:Wt,scaleFactor:g};b=new XRWebGLBinding(m,h),v=b.createProjectionLayer(It),m.updateRenderState({layers:[v]}),a.setPixelRatio(1),a.setSize(v.textureWidth,v.textureHeight,!1),A=new xi(v.textureWidth,v.textureHeight,{format:1023,type:1009,depthTexture:new ro(v.textureWidth,v.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:D.stencil,colorSpace:a.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(x),M=null,_=await m.requestReferenceSpace(y),ee.setContext(m),ee.start(),p.isPresenting=!0,p.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(m!==null)return m.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function ht(pt){for(let wt=0;wt<pt.removed.length;wt++){let $t=pt.removed[wt],Wt=F.indexOf($t);if(Wt>=0)F[Wt]=null,G[Wt].disconnect($t)}for(let wt=0;wt<pt.added.length;wt++){let $t=pt.added[wt],Wt=F.indexOf($t);if(Wt===-1){for(let se=0;se<G.length;se++)if(se>=F.length){F.push($t),Wt=se;break}else if(F[se]===null){F[se]=$t,Wt=se;break}if(Wt===-1)break}let It=G[Wt];if(It)It.connect($t)}}let _t=new X,J=new X;function it(pt,wt,$t){_t.setFromMatrixPosition(wt.matrixWorld),J.setFromMatrixPosition($t.matrixWorld);let Wt=_t.distanceTo(J),It=wt.projectionMatrix.elements,se=$t.projectionMatrix.elements,ye=It[14]/(It[10]-1),re=It[14]/(It[10]+1),xt=(It[9]+1)/It[5],Ct=(It[9]-1)/It[5],V=(It[8]-1)/It[0],Gt=(se[8]+1)/se[0],bt=ye*V,Yt=ye*Gt,Mt=Wt/(-V+Gt),oe=Mt*-V;if(wt.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(oe),pt.translateZ(Mt),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),It[10]===-1)pt.projectionMatrix.copy(wt.projectionMatrix),pt.projectionMatrixInverse.copy(wt.projectionMatrixInverse);else{let zt=ye+Mt,Vt=re+Mt,W=bt-oe,U=Yt+(Wt-oe),st=xt*re/Vt*zt,mt=Ct*re/Vt*zt;pt.projectionMatrix.makePerspective(W,U,st,mt,zt,Vt),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function Z(pt,wt){if(wt===null)pt.matrixWorld.copy(pt.matrix);else pt.matrixWorld.multiplyMatrices(wt.matrixWorld,pt.matrix);pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(m===null)return;let{near:wt,far:$t}=pt;if(I.texture!==null){if(I.depthNear>0)wt=I.depthNear;if(I.depthFar>0)$t=I.depthFar}if(B.near=Y.near=q.near=wt,B.far=Y.far=q.far=$t,z!==B.near||j!==B.far)m.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,j=B.far;q.layers.mask=pt.layers.mask|2,Y.layers.mask=pt.layers.mask|4,B.layers.mask=q.layers.mask|Y.layers.mask;let Wt=pt.parent,It=B.cameras;Z(B,Wt);for(let se=0;se<It.length;se++)Z(It[se],Wt);if(It.length===2)it(B,q,Y);else B.projectionMatrix.copy(q.projectionMatrix);Rt(pt,B,Wt)};function Rt(pt,wt,$t){if($t===null)pt.matrix.copy(wt.matrixWorld);else pt.matrix.copy($t.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(wt.matrixWorld);if(pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(wt.projectionMatrix),pt.projectionMatrixInverse.copy(wt.projectionMatrixInverse),pt.isPerspectiveCamera)pt.fov=cs*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1}this.getCamera=function(){return B},this.getFoveation=function(){if(v===null&&T===null)return;return x},this.setFoveation=function(pt){if(x=pt,v!==null)v.fixedFoveation=pt;if(T!==null&&T.fixedFoveation!==void 0)T.fixedFoveation=pt},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(B)};let L=null;function qt(pt,wt){if(S=wt.getViewerPose(M||_),C=wt,S!==null){let $t=S.views;if(T!==null)a.setRenderTargetFramebuffer(A,T.framebuffer),a.setRenderTarget(A);let Wt=!1;if($t.length!==B.cameras.length)B.cameras.length=0,Wt=!0;for(let se=0;se<$t.length;se++){let ye=$t[se],re=null;if(T!==null)re=T.getViewport(ye);else{let Ct=b.getViewSubImage(v,ye);if(re=Ct.viewport,se===0)a.setRenderTargetTextures(A,Ct.colorTexture,v.ignoreDepthValues?void 0:Ct.depthStencilTexture),a.setRenderTarget(A)}let xt=ut[se];if(xt===void 0)xt=new ln,xt.layers.enable(se),xt.viewport=new Ne,ut[se]=xt;if(xt.matrix.fromArray(ye.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(ye.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(re.x,re.y,re.width,re.height),se===0)B.matrix.copy(xt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);if(Wt===!0)B.cameras.push(xt)}let It=m.enabledFeatures;if(It&&It.includes("depth-sensing")){let se=b.getDepthInformation($t[0]);if(se&&se.isValid&&se.texture)I.init(a,se,m.renderState)}}for(let $t=0;$t<G.length;$t++){let Wt=F[$t],It=G[$t];if(Wt!==null&&It!==void 0)It.update(Wt,wt,M||_)}if(L)L(pt,wt);if(wt.detectedPlanes)p.dispatchEvent({type:"planesdetected",data:wt});C=null}let ee=new rc;ee.setAnimationLoop(qt),this.setAnimationLoop=function(pt){L=pt},this.dispose=function(){}}}var Di=new Xn,hm=new Ce;function um(a,h){function p(w,A){if(w.matrixAutoUpdate===!0)w.updateMatrix();A.value.copy(w.matrix)}function m(w,A){if(A.color.getRGB(w.fogColor.value,nc(a)),A.isFog)w.fogNear.value=A.near,w.fogFar.value=A.far;else if(A.isFogExp2)w.fogDensity.value=A.density}function g(w,A,G,F,H){if(A.isMeshBasicMaterial)_(w,A);else if(A.isMeshLambertMaterial)_(w,A);else if(A.isMeshToonMaterial)_(w,A),v(w,A);else if(A.isMeshPhongMaterial)_(w,A),b(w,A);else if(A.isMeshStandardMaterial){if(_(w,A),T(w,A),A.isMeshPhysicalMaterial)C(w,A,H)}else if(A.isMeshMatcapMaterial)_(w,A),I(w,A);else if(A.isMeshDepthMaterial)_(w,A);else if(A.isMeshDistanceMaterial)_(w,A),D(w,A);else if(A.isMeshNormalMaterial)_(w,A);else if(A.isLineBasicMaterial){if(y(w,A),A.isLineDashedMaterial)x(w,A)}else if(A.isPointsMaterial)M(w,A,G,F);else if(A.isSpriteMaterial)S(w,A);else if(A.isShadowMaterial)w.color.value.copy(A.color),w.opacity.value=A.opacity;else if(A.isShaderMaterial)A.uniformsNeedUpdate=!1}function _(w,A){if(w.opacity.value=A.opacity,A.color)w.diffuse.value.copy(A.color);if(A.emissive)w.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity);if(A.map)w.map.value=A.map,p(A.map,w.mapTransform);if(A.alphaMap)w.alphaMap.value=A.alphaMap,p(A.alphaMap,w.alphaMapTransform);if(A.bumpMap){if(w.bumpMap.value=A.bumpMap,p(A.bumpMap,w.bumpMapTransform),w.bumpScale.value=A.bumpScale,A.side===1)w.bumpScale.value*=-1}if(A.normalMap){if(w.normalMap.value=A.normalMap,p(A.normalMap,w.normalMapTransform),w.normalScale.value.copy(A.normalScale),A.side===1)w.normalScale.value.negate()}if(A.displacementMap)w.displacementMap.value=A.displacementMap,p(A.displacementMap,w.displacementMapTransform),w.displacementScale.value=A.displacementScale,w.displacementBias.value=A.displacementBias;if(A.emissiveMap)w.emissiveMap.value=A.emissiveMap,p(A.emissiveMap,w.emissiveMapTransform);if(A.specularMap)w.specularMap.value=A.specularMap,p(A.specularMap,w.specularMapTransform);if(A.alphaTest>0)w.alphaTest.value=A.alphaTest;let G=h.get(A),{envMap:F,envMapRotation:H}=G;if(F){if(w.envMap.value=F,Di.copy(H),Di.x*=-1,Di.y*=-1,Di.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1)Di.y*=-1,Di.z*=-1;w.envMapRotation.value.setFromMatrix4(hm.makeRotationFromEuler(Di)),w.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=A.reflectivity,w.ior.value=A.ior,w.refractionRatio.value=A.refractionRatio}if(A.lightMap)w.lightMap.value=A.lightMap,w.lightMapIntensity.value=A.lightMapIntensity,p(A.lightMap,w.lightMapTransform);if(A.aoMap)w.aoMap.value=A.aoMap,w.aoMapIntensity.value=A.aoMapIntensity,p(A.aoMap,w.aoMapTransform)}function y(w,A){if(w.diffuse.value.copy(A.color),w.opacity.value=A.opacity,A.map)w.map.value=A.map,p(A.map,w.mapTransform)}function x(w,A){w.dashSize.value=A.dashSize,w.totalSize.value=A.dashSize+A.gapSize,w.scale.value=A.scale}function M(w,A,G,F){if(w.diffuse.value.copy(A.color),w.opacity.value=A.opacity,w.size.value=A.size*G,w.scale.value=F*0.5,A.map)w.map.value=A.map,p(A.map,w.uvTransform);if(A.alphaMap)w.alphaMap.value=A.alphaMap,p(A.alphaMap,w.alphaMapTransform);if(A.alphaTest>0)w.alphaTest.value=A.alphaTest}function S(w,A){if(w.diffuse.value.copy(A.color),w.opacity.value=A.opacity,w.rotation.value=A.rotation,A.map)w.map.value=A.map,p(A.map,w.mapTransform);if(A.alphaMap)w.alphaMap.value=A.alphaMap,p(A.alphaMap,w.alphaMapTransform);if(A.alphaTest>0)w.alphaTest.value=A.alphaTest}function b(w,A){w.specular.value.copy(A.specular),w.shininess.value=Math.max(A.shininess,0.0001)}function v(w,A){if(A.gradientMap)w.gradientMap.value=A.gradientMap}function T(w,A){if(w.metalness.value=A.metalness,A.metalnessMap)w.metalnessMap.value=A.metalnessMap,p(A.metalnessMap,w.metalnessMapTransform);if(w.roughness.value=A.roughness,A.roughnessMap)w.roughnessMap.value=A.roughnessMap,p(A.roughnessMap,w.roughnessMapTransform);if(A.envMap)w.envMapIntensity.value=A.envMapIntensity}function C(w,A,G){if(w.ior.value=A.ior,A.sheen>0){if(w.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),w.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap)w.sheenColorMap.value=A.sheenColorMap,p(A.sheenColorMap,w.sheenColorMapTransform);if(A.sheenRoughnessMap)w.sheenRoughnessMap.value=A.sheenRoughnessMap,p(A.sheenRoughnessMap,w.sheenRoughnessMapTransform)}if(A.clearcoat>0){if(w.clearcoat.value=A.clearcoat,w.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap)w.clearcoatMap.value=A.clearcoatMap,p(A.clearcoatMap,w.clearcoatMapTransform);if(A.clearcoatRoughnessMap)w.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,p(A.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform);if(A.clearcoatNormalMap){if(w.clearcoatNormalMap.value=A.clearcoatNormalMap,p(A.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===1)w.clearcoatNormalScale.value.negate()}}if(A.dispersion>0)w.dispersion.value=A.dispersion;if(A.iridescence>0){if(w.iridescence.value=A.iridescence,w.iridescenceIOR.value=A.iridescenceIOR,w.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap)w.iridescenceMap.value=A.iridescenceMap,p(A.iridescenceMap,w.iridescenceMapTransform);if(A.iridescenceThicknessMap)w.iridescenceThicknessMap.value=A.iridescenceThicknessMap,p(A.iridescenceThicknessMap,w.iridescenceThicknessMapTransform)}if(A.transmission>0){if(w.transmission.value=A.transmission,w.transmissionSamplerMap.value=G.texture,w.transmissionSamplerSize.value.set(G.width,G.height),A.transmissionMap)w.transmissionMap.value=A.transmissionMap,p(A.transmissionMap,w.transmissionMapTransform);if(w.thickness.value=A.thickness,A.thicknessMap)w.thicknessMap.value=A.thicknessMap,p(A.thicknessMap,w.thicknessMapTransform);w.attenuationDistance.value=A.attenuationDistance,w.attenuationColor.value.copy(A.attenuationColor)}if(A.anisotropy>0){if(w.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap)w.anisotropyMap.value=A.anisotropyMap,p(A.anisotropyMap,w.anisotropyMapTransform)}if(w.specularIntensity.value=A.specularIntensity,w.specularColor.value.copy(A.specularColor),A.specularColorMap)w.specularColorMap.value=A.specularColorMap,p(A.specularColorMap,w.specularColorMapTransform);if(A.specularIntensityMap)w.specularIntensityMap.value=A.specularIntensityMap,p(A.specularIntensityMap,w.specularIntensityMapTransform)}function I(w,A){if(A.matcap)w.matcap.value=A.matcap}function D(w,A){let G=h.get(A).light;w.referencePosition.value.setFromMatrixPosition(G.matrixWorld),w.nearDistance.value=G.shadow.camera.near,w.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:m,refreshMaterialUniforms:g}}function dm(a,h,p,m){let g={},_={},y=[],x=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function M(G,F){let H=F.program;m.uniformBlockBinding(G,H)}function S(G,F){let H=g[G.id];if(H===void 0)I(G),H=b(G),g[G.id]=H,G.addEventListener("dispose",w);let rt=F.program;m.updateUBOMapping(G,rt);let q=h.render.frame;if(_[G.id]!==q)T(G),_[G.id]=q}function b(G){let F=v();G.__bindingPointIndex=F;let H=a.createBuffer(),{__size:rt,usage:q}=G;return a.bindBuffer(a.UNIFORM_BUFFER,H),a.bufferData(a.UNIFORM_BUFFER,rt,q),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,F,H),H}function v(){for(let G=0;G<x;G++)if(y.indexOf(G)===-1)return y.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function T(G){let F=g[G.id],{uniforms:H,__cache:rt}=G;a.bindBuffer(a.UNIFORM_BUFFER,F);for(let q=0,Y=H.length;q<Y;q++){let ut=Array.isArray(H[q])?H[q]:[H[q]];for(let B=0,z=ut.length;B<z;B++){let j=ut[B];if(C(j,q,B,rt)===!0){let at=j.__offset,ct=Array.isArray(j.value)?j.value:[j.value],ht=0;for(let _t=0;_t<ct.length;_t++){let J=ct[_t],it=D(J);if(typeof J==="number"||typeof J==="boolean")j.__data[0]=J,a.bufferSubData(a.UNIFORM_BUFFER,at+ht,j.__data);else if(J.isMatrix3)j.__data[0]=J.elements[0],j.__data[1]=J.elements[1],j.__data[2]=J.elements[2],j.__data[3]=0,j.__data[4]=J.elements[3],j.__data[5]=J.elements[4],j.__data[6]=J.elements[5],j.__data[7]=0,j.__data[8]=J.elements[6],j.__data[9]=J.elements[7],j.__data[10]=J.elements[8],j.__data[11]=0;else J.toArray(j.__data,ht),ht+=it.storage/Float32Array.BYTES_PER_ELEMENT}a.bufferSubData(a.UNIFORM_BUFFER,at,j.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function C(G,F,H,rt){let q=G.value,Y=F+"_"+H;if(rt[Y]===void 0){if(typeof q==="number"||typeof q==="boolean")rt[Y]=q;else rt[Y]=q.clone();return!0}else{let ut=rt[Y];if(typeof q==="number"||typeof q==="boolean"){if(ut!==q)return rt[Y]=q,!0}else if(ut.equals(q)===!1)return ut.copy(q),!0}return!1}function I(G){let F=G.uniforms,H=0,rt=16;for(let Y=0,ut=F.length;Y<ut;Y++){let B=Array.isArray(F[Y])?F[Y]:[F[Y]];for(let z=0,j=B.length;z<j;z++){let at=B[z],ct=Array.isArray(at.value)?at.value:[at.value];for(let ht=0,_t=ct.length;ht<_t;ht++){let J=ct[ht],it=D(J),Z=H%rt,Rt=Z%it.boundary,L=Z+Rt;if(H+=Rt,L!==0&&rt-L<it.storage)H+=rt-L;at.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=H,H+=it.storage}}}let q=H%rt;if(q>0)H+=rt-q;return G.__size=H,G.__cache={},this}function D(G){let F={boundary:0,storage:0};if(typeof G==="number"||typeof G==="boolean")F.boundary=4,F.storage=4;else if(G.isVector2)F.boundary=8,F.storage=8;else if(G.isVector3||G.isColor)F.boundary=16,F.storage=12;else if(G.isVector4)F.boundary=16,F.storage=16;else if(G.isMatrix3)F.boundary=48,F.storage=48;else if(G.isMatrix4)F.boundary=64,F.storage=64;else if(G.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G);return F}function w(G){let F=G.target;F.removeEventListener("dispose",w);let H=y.indexOf(F.__bindingPointIndex);y.splice(H,1),a.deleteBuffer(g[F.id]),delete g[F.id],delete _[F.id]}function A(){for(let G in g)a.deleteBuffer(g[G]);y=[],g={},_={}}return{bind:M,update:S,dispose:A}}class ao{constructor(a={}){let{canvas:h=mh(),context:p=null,depth:m=!0,stencil:g=!1,alpha:_=!1,antialias:y=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:M=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:b=!1,reverseDepthBuffer:v=!1}=a;this.isWebGLRenderer=!0;let T;if(p!==null){if(typeof WebGLRenderingContext<"u"&&p instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=p.getContextAttributes().alpha}else T=_;let C=new Uint32Array(4),I=new Int32Array(4),D=null,w=null,A=[],G=[];this.domElement=h,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let F=this,H=!1,rt=0,q=0,Y=null,ut=-1,B=null,z=new Ne,j=new Ne,at=null,ct=new xe(0),ht=0,{width:_t,height:J}=h,it=1,Z=null,Rt=null,L=new Ne(0,0,_t,J),qt=new Ne(0,0,_t,J),ee=!1,pt=new Gr,wt=!1,$t=!1,Wt=new Ce,It=new Ce,se=new X,ye=new Ne,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function Ct(){return Y===null?it:1}let V=p;function Gt(O,nt){return h.getContext(O,nt)}try{let O={alpha:!0,depth:m,stencil:g,antialias:y,premultipliedAlpha:x,preserveDrawingBuffer:M,powerPreference:S,failIfMajorPerformanceCaveat:b};if("setAttribute"in h)h.setAttribute("data-engine","three.js r170");if(h.addEventListener("webglcontextlost",dt,!1),h.addEventListener("webglcontextrestored",vt,!1),h.addEventListener("webglcontextcreationerror",Ot,!1),V===null){if(V=Gt("webgl2",O),V===null)if(Gt("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let bt,Yt,Mt,oe,zt,Vt,W,U,st,mt,yt,ft,Qt,Dt,Ft,ce,Tt,Bt,Se,te,Ht,fe,ve,Ie;function Q(){if(bt=new Rf(V),bt.init(),fe=new am(V,bt),Yt=new Sf(V,bt,a,fe),Mt=new im(V,bt),Yt.reverseDepthBuffer&&v)Mt.buffers.depth.setReversed(!0);oe=new If(V),zt=new Vp,Vt=new rm(V,bt,Mt,zt,Yt,fe,oe),W=new bf(F),U=new Af(F),st=new Oh(V),ve=new vf(V,st),mt=new Cf(V,st,oe,ve),yt=new Lf(V,mt,st,oe),Se=new Df(V,Yt,Vt),ce=new Ef(zt),ft=new Wp(F,W,U,bt,Yt,ve,ce),Qt=new um(F,zt),Dt=new qp,Ft=new jp(bt),Bt=new yf(F,W,U,Mt,yt,T,x),Tt=new em(F,yt,Yt),Ie=new dm(V,oe,Yt,Mt),te=new Mf(V,bt,oe),Ht=new Pf(V,bt,oe),oe.programs=ft.programs,F.capabilities=Yt,F.extensions=bt,F.properties=zt,F.renderLists=Dt,F.shadowMap=Tt,F.state=Mt,F.info=oe}Q();let St=new yc(F,V);this.xr=St,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let O=bt.get("WEBGL_lose_context");if(O)O.loseContext()},this.forceContextRestore=function(){let O=bt.get("WEBGL_lose_context");if(O)O.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(O){if(O===void 0)return;it=O,this.setSize(_t,J,!1)},this.getSize=function(O){return O.set(_t,J)},this.setSize=function(O,nt,lt=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(_t=O,J=nt,h.width=Math.floor(O*it),h.height=Math.floor(nt*it),lt===!0)h.style.width=O+"px",h.style.height=nt+"px";this.setViewport(0,0,O,nt)},this.getDrawingBufferSize=function(O){return O.set(_t*it,J*it).floor()},this.setDrawingBufferSize=function(O,nt,lt){_t=O,J=nt,it=lt,h.width=Math.floor(O*lt),h.height=Math.floor(nt*lt),this.setViewport(0,0,O,nt)},this.getCurrentViewport=function(O){return O.copy(z)},this.getViewport=function(O){return O.copy(L)},this.setViewport=function(O,nt,lt,ot){if(O.isVector4)L.set(O.x,O.y,O.z,O.w);else L.set(O,nt,lt,ot);Mt.viewport(z.copy(L).multiplyScalar(it).round())},this.getScissor=function(O){return O.copy(qt)},this.setScissor=function(O,nt,lt,ot){if(O.isVector4)qt.set(O.x,O.y,O.z,O.w);else qt.set(O,nt,lt,ot);Mt.scissor(j.copy(qt).multiplyScalar(it).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(O){Mt.setScissorTest(ee=O)},this.setOpaqueSort=function(O){Z=O},this.setTransparentSort=function(O){Rt=O},this.getClearColor=function(O){return O.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(O=!0,nt=!0,lt=!0){let ot=0;if(O){let et=!1;if(Y!==null){let At=Y.texture.format;et=At===1033||At===1031||At===1029}if(et){let At=Y.texture.type,Pt=At===1009||At===1014||At===1012||At===1020||At===1017||At===1018,Xt=Bt.getClearColor(),Zt=Bt.getClearAlpha(),{r:he,g:me,b:Jt}=Xt;if(Pt)C[0]=he,C[1]=me,C[2]=Jt,C[3]=Zt,V.clearBufferuiv(V.COLOR,0,C);else I[0]=he,I[1]=me,I[2]=Jt,I[3]=Zt,V.clearBufferiv(V.COLOR,0,I)}else ot|=V.COLOR_BUFFER_BIT}if(nt)ot|=V.DEPTH_BUFFER_BIT;if(lt)ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){h.removeEventListener("webglcontextlost",dt,!1),h.removeEventListener("webglcontextrestored",vt,!1),h.removeEventListener("webglcontextcreationerror",Ot,!1),Dt.dispose(),Ft.dispose(),zt.dispose(),W.dispose(),U.dispose(),yt.dispose(),ve.dispose(),Ie.dispose(),ft.dispose(),St.dispose(),St.removeEventListener("sessionstart",Nn),St.removeEventListener("sessionend",ea),gn.stop()};function dt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let O=oe.autoReset,nt=Tt.enabled,lt=Tt.autoUpdate,ot=Tt.needsUpdate,et=Tt.type;Q(),oe.autoReset=O,Tt.enabled=nt,Tt.autoUpdate=lt,Tt.needsUpdate=ot,Tt.type=et}function Ot(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Lt(O){let nt=O.target;nt.removeEventListener("dispose",Lt),jt(nt)}function jt(O){ze(O),zt.remove(O)}function ze(O){let nt=zt.get(O).programs;if(nt!==void 0){if(nt.forEach(function(lt){ft.releaseProgram(lt)}),O.isShaderMaterial)ft.releaseShaderCache(O)}}this.renderBufferDirect=function(O,nt,lt,ot,et,At){if(nt===null)nt=re;let Pt=et.isMesh&&et.matrixWorld.determinant()<0,Xt=nr(O,nt,lt,ot,et);Mt.setMaterial(ot,Pt);let Zt=lt.index,he=1;if(ot.wireframe===!0){if(Zt=mt.getWireframeAttribute(lt),Zt===void 0)return;he=2}let me=lt.drawRange,Jt=lt.attributes.position,Ee=me.start*he,pe=(me.start+me.count)*he;if(At!==null)Ee=Math.max(Ee,At.start*he),pe=Math.min(pe,(At.start+At.count)*he);if(Zt!==null)Ee=Math.max(Ee,0),pe=Math.min(pe,Zt.count);else if(Jt!==void 0&&Jt!==null)Ee=Math.max(Ee,0),pe=Math.min(pe,Jt.count);let be=pe-Ee;if(be<0||be===1/0)return;ve.setup(et,ot,Xt,lt,Zt);let tn,we=te;if(Zt!==null)tn=st.get(Zt),we=Ht,we.setIndex(tn);if(et.isMesh)if(ot.wireframe===!0)Mt.setLineWidth(ot.wireframeLinewidth*Ct()),we.setMode(V.LINES);else we.setMode(V.TRIANGLES);else if(et.isLine){let Kt=ot.linewidth;if(Kt===void 0)Kt=1;if(Mt.setLineWidth(Kt*Ct()),et.isLineSegments)we.setMode(V.LINES);else if(et.isLineLoop)we.setMode(V.LINE_LOOP);else we.setMode(V.LINE_STRIP)}else if(et.isPoints)we.setMode(V.POINTS);else if(et.isSprite)we.setMode(V.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)we.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(!bt.get("WEBGL_multi_draw")){let{_multiDrawStarts:Kt,_multiDrawCounts:hn,_multiDrawCount:ae}=et,fn=Zt?st.get(Zt).bytesPerElement:1,_n=zt.get(ot).currentProgram.getUniforms();for(let rn=0;rn<ae;rn++)_n.setValue(V,"_gl_DrawID",rn),we.render(Kt[rn]/fn,hn[rn])}else we.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)we.renderInstances(Ee,be,et.count);else if(lt.isInstancedBufferGeometry){let Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,hn=Math.min(lt.instanceCount,Kt);we.renderInstances(Ee,be,hn)}else we.render(Ee,be)};function Ge(O,nt,lt){if(O.transparent===!0&&O.side===2&&O.forceSinglePass===!1)O.side=1,O.needsUpdate=!0,ki(O,nt,lt),O.side=0,O.needsUpdate=!0,ki(O,nt,lt),O.side=2;else ki(O,nt,lt)}this.compile=function(O,nt,lt=null){if(lt===null)lt=O;if(w=Ft.get(lt),w.init(nt),G.push(w),lt.traverseVisible(function(et){if(et.isLight&&et.layers.test(nt.layers)){if(w.pushLight(et),et.castShadow)w.pushShadow(et)}}),O!==lt)O.traverseVisible(function(et){if(et.isLight&&et.layers.test(nt.layers)){if(w.pushLight(et),et.castShadow)w.pushShadow(et)}});w.setupLights();let ot=new Set;return O.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let At=et.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){let Xt=At[Pt];Ge(Xt,lt,et),ot.add(Xt)}else Ge(At,lt,et),ot.add(At)}),G.pop(),w=null,ot},this.compileAsync=function(O,nt,lt=null){let ot=this.compile(O,nt,lt);return new Promise((et)=>{function At(){if(ot.forEach(function(Pt){if(zt.get(Pt).currentProgram.isReady())ot.delete(Pt)}),ot.size===0){et(O);return}setTimeout(At,10)}if(bt.get("KHR_parallel_shader_compile")!==null)At();else setTimeout(At,10)})};let Te=null;function Un(O){if(Te)Te(O)}function Nn(){gn.stop()}function ea(){gn.start()}let gn=new rc;if(gn.setAnimationLoop(Un),typeof self<"u")gn.setContext(self);this.setAnimationLoop=function(O){Te=O,St.setAnimationLoop(O),O===null?gn.stop():gn.start()},St.addEventListener("sessionstart",Nn),St.addEventListener("sessionend",ea),this.render=function(O,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(O.matrixWorldAutoUpdate===!0)O.updateMatrixWorld();if(nt.parent===null&&nt.matrixWorldAutoUpdate===!0)nt.updateMatrixWorld();if(St.enabled===!0&&St.isPresenting===!0){if(St.cameraAutoUpdate===!0)St.updateCamera(nt);nt=St.getCamera()}if(O.isScene===!0)O.onBeforeRender(F,O,nt,Y);if(w=Ft.get(O,G.length),w.init(nt),G.push(w),It.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),pt.setFromProjectionMatrix(It),$t=this.localClippingEnabled,wt=ce.init(this.clippingPlanes,$t),D=Dt.get(O,A.length),D.init(),A.push(D),St.enabled===!0&&St.isPresenting===!0){let At=F.xr.getDepthSensingMesh();if(At!==null)Kn(At,nt,-1/0,F.sortObjects)}if(Kn(O,nt,0,F.sortObjects),D.finish(),F.sortObjects===!0)D.sort(Z,Rt);if(xt=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,xt)Bt.addToRenderList(D,O);if(this.info.render.frame++,wt===!0)ce.beginShadows();let lt=w.state.shadowsArray;if(Tt.render(lt,O,nt),wt===!0)ce.endShadows();if(this.info.autoReset===!0)this.info.reset();let ot=D.opaque,et=D.transmissive;if(w.setupLights(),nt.isArrayCamera){let At=nt.cameras;if(et.length>0)for(let Pt=0,Xt=At.length;Pt<Xt;Pt++){let Zt=At[Pt];Mi(ot,et,O,Zt)}if(xt)Bt.render(O);for(let Pt=0,Xt=At.length;Pt<Xt;Pt++){let Zt=At[Pt];ys(D,O,Zt,Zt.viewport)}}else{if(et.length>0)Mi(ot,et,O,nt);if(xt)Bt.render(O);ys(D,O,nt)}if(Y!==null)Vt.updateMultisampleRenderTarget(Y),Vt.updateRenderTargetMipmap(Y);if(O.isScene===!0)O.onAfterRender(F,O,nt);if(ve.resetDefaultState(),ut=-1,B=null,G.pop(),G.length>0){if(w=G[G.length-1],wt===!0)ce.setGlobalState(F.clippingPlanes,w.state.camera)}else w=null;if(A.pop(),A.length>0)D=A[A.length-1];else D=null};function Kn(O,nt,lt,ot){if(O.visible===!1)return;if(O.layers.test(nt.layers)){if(O.isGroup)lt=O.renderOrder;else if(O.isLOD){if(O.autoUpdate===!0)O.update(nt)}else if(O.isLight){if(w.pushLight(O),O.castShadow)w.pushShadow(O)}else if(O.isSprite){if(!O.frustumCulled||pt.intersectsSprite(O)){if(ot)ye.setFromMatrixPosition(O.matrixWorld).applyMatrix4(It);let Pt=yt.update(O),Xt=O.material;if(Xt.visible)D.push(O,Pt,Xt,lt,ye.z,null)}}else if(O.isMesh||O.isLine||O.isPoints){if(!O.frustumCulled||pt.intersectsObject(O)){let Pt=yt.update(O),Xt=O.material;if(ot){if(O.boundingSphere!==void 0){if(O.boundingSphere===null)O.computeBoundingSphere();ye.copy(O.boundingSphere.center)}else{if(Pt.boundingSphere===null)Pt.computeBoundingSphere();ye.copy(Pt.boundingSphere.center)}ye.applyMatrix4(O.matrixWorld).applyMatrix4(It)}if(Array.isArray(Xt)){let Zt=Pt.groups;for(let he=0,me=Zt.length;he<me;he++){let Jt=Zt[he],Ee=Xt[Jt.materialIndex];if(Ee&&Ee.visible)D.push(O,Pt,Ee,lt,ye.z,Jt)}}else if(Xt.visible)D.push(O,Pt,Xt,lt,ye.z,null)}}}let At=O.children;for(let Pt=0,Xt=At.length;Pt<Xt;Pt++)Kn(At[Pt],nt,lt,ot)}function ys(O,nt,lt,ot){let{opaque:et,transmissive:At,transparent:Pt}=O;if(w.setupLightsView(lt),wt===!0)ce.setGlobalState(F.clippingPlanes,lt);if(ot)Mt.viewport(z.copy(ot));if(et.length>0)Gn(et,nt,lt);if(At.length>0)Gn(At,nt,lt);if(Pt.length>0)Gn(Pt,nt,lt);Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Mi(O,nt,lt,ot){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ot.id]===void 0)w.state.transmissionRenderTarget[ot.id]=new xi(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:g,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace});let At=w.state.transmissionRenderTarget[ot.id],Pt=ot.viewport||z;At.setSize(Pt.z,Pt.w);let Xt=F.getRenderTarget();if(F.setRenderTarget(At),F.getClearColor(ct),ht=F.getClearAlpha(),ht<1)F.setClearColor(16777215,0.5);if(F.clear(),xt)Bt.render(lt);let Zt=F.toneMapping;F.toneMapping=0;let he=ot.viewport;if(ot.viewport!==void 0)ot.viewport=void 0;if(w.setupLightsView(ot),wt===!0)ce.setGlobalState(F.clippingPlanes,ot);if(Gn(O,lt,ot),Vt.updateMultisampleRenderTarget(At),Vt.updateRenderTargetMipmap(At),bt.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Jt=0,Ee=nt.length;Jt<Ee;Jt++){let pe=nt[Jt],{object:be,geometry:tn,material:we,group:Kt}=pe;if(we.side===2&&be.layers.test(ot.layers)){let hn=we.side;we.side=1,we.needsUpdate=!0,tr(be,lt,ot,tn,we,Kt),we.side=hn,we.needsUpdate=!0,me=!0}}if(me===!0)Vt.updateMultisampleRenderTarget(At),Vt.updateRenderTargetMipmap(At)}if(F.setRenderTarget(Xt),F.setClearColor(ct,ht),he!==void 0)ot.viewport=he;F.toneMapping=Zt}function Gn(O,nt,lt){let ot=nt.isScene===!0?nt.overrideMaterial:null;for(let et=0,At=O.length;et<At;et++){let Pt=O[et],{object:Xt,geometry:Zt}=Pt,he=ot===null?Pt.material:ot,me=Pt.group;if(Xt.layers.test(lt.layers))tr(Xt,nt,lt,Zt,he,me)}}function tr(O,nt,lt,ot,et,At){if(O.onBeforeRender(F,nt,lt,ot,et,At),O.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),et.onBeforeRender(F,nt,lt,ot,O,At),et.transparent===!0&&et.side===2&&et.forceSinglePass===!1)et.side=1,et.needsUpdate=!0,F.renderBufferDirect(lt,nt,ot,et,O,At),et.side=0,et.needsUpdate=!0,F.renderBufferDirect(lt,nt,ot,et,O,At),et.side=2;else F.renderBufferDirect(lt,nt,ot,et,O,At);O.onAfterRender(F,nt,lt,ot,et,At)}function ki(O,nt,lt){if(nt.isScene!==!0)nt=re;let ot=zt.get(O),et=w.state.lights,At=w.state.shadowsArray,Pt=et.state.version,Xt=ft.getParameters(O,et.state,At,nt,lt),Zt=ft.getProgramCacheKey(Xt),he=ot.programs;if(ot.environment=O.isMeshStandardMaterial?nt.environment:null,ot.fog=nt.fog,ot.envMap=(O.isMeshStandardMaterial?U:W).get(O.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&O.envMap===null?nt.environmentRotation:O.envMapRotation,he===void 0)O.addEventListener("dispose",Lt),he=new Map,ot.programs=he;let me=he.get(Zt);if(me!==void 0){if(ot.currentProgram===me&&ot.lightsStateVersion===Pt)return vs(O,Xt),me}else Xt.uniforms=ft.getUniforms(O),O.onBeforeCompile(Xt,F),me=ft.acquireProgram(Xt,Zt),he.set(Zt,me),ot.uniforms=Xt.uniforms;let Jt=ot.uniforms;if(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)Jt.clippingPlanes=ce.uniform;if(vs(O,Xt),ot.needsLights=Ss(O),ot.lightsStateVersion=Pt,ot.needsLights)Jt.ambientLightColor.value=et.state.ambient,Jt.lightProbe.value=et.state.probe,Jt.directionalLights.value=et.state.directional,Jt.directionalLightShadows.value=et.state.directionalShadow,Jt.spotLights.value=et.state.spot,Jt.spotLightShadows.value=et.state.spotShadow,Jt.rectAreaLights.value=et.state.rectArea,Jt.ltc_1.value=et.state.rectAreaLTC1,Jt.ltc_2.value=et.state.rectAreaLTC2,Jt.pointLights.value=et.state.point,Jt.pointLightShadows.value=et.state.pointShadow,Jt.hemisphereLights.value=et.state.hemi,Jt.directionalShadowMap.value=et.state.directionalShadowMap,Jt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Jt.spotShadowMap.value=et.state.spotShadowMap,Jt.spotLightMatrix.value=et.state.spotLightMatrix,Jt.spotLightMap.value=et.state.spotLightMap,Jt.pointShadowMap.value=et.state.pointShadowMap,Jt.pointShadowMatrix.value=et.state.pointShadowMatrix;return ot.currentProgram=me,ot.uniformsList=null,me}function er(O){if(O.uniformsList===null){let nt=O.currentProgram.getUniforms();O.uniformsList=Os.seqWithValue(nt.seq,O.uniforms)}return O.uniformsList}function vs(O,nt){let lt=zt.get(O);lt.outputColorSpace=nt.outputColorSpace,lt.batching=nt.batching,lt.batchingColor=nt.batchingColor,lt.instancing=nt.instancing,lt.instancingColor=nt.instancingColor,lt.instancingMorph=nt.instancingMorph,lt.skinning=nt.skinning,lt.morphTargets=nt.morphTargets,lt.morphNormals=nt.morphNormals,lt.morphColors=nt.morphColors,lt.morphTargetsCount=nt.morphTargetsCount,lt.numClippingPlanes=nt.numClippingPlanes,lt.numIntersection=nt.numClipIntersection,lt.vertexAlphas=nt.vertexAlphas,lt.vertexTangents=nt.vertexTangents,lt.toneMapping=nt.toneMapping}function nr(O,nt,lt,ot,et){if(nt.isScene!==!0)nt=re;Vt.resetTextureUnits();let At=nt.fog,Pt=ot.isMeshStandardMaterial?nt.environment:null,Xt=Y===null?F.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:"srgb-linear",Zt=(ot.isMeshStandardMaterial?U:W).get(ot.envMap||Pt),he=ot.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,me=!!lt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Jt=!!lt.morphAttributes.position,Ee=!!lt.morphAttributes.normal,pe=!!lt.morphAttributes.color,be=0;if(ot.toneMapped){if(Y===null||Y.isXRRenderTarget===!0)be=F.toneMapping}let tn=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,we=tn!==void 0?tn.length:0,Kt=zt.get(ot),hn=w.state.lights;if(wt===!0){if($t===!0||O!==B){let De=O===B&&ot.id===ut;ce.setState(ot,O,De)}}let ae=!1;if(ot.version===Kt.__version){if(Kt.needsLights&&Kt.lightsStateVersion!==hn.state.version)ae=!0;else if(Kt.outputColorSpace!==Xt)ae=!0;else if(et.isBatchedMesh&&Kt.batching===!1)ae=!0;else if(!et.isBatchedMesh&&Kt.batching===!0)ae=!0;else if(et.isBatchedMesh&&Kt.batchingColor===!0&&et.colorTexture===null)ae=!0;else if(et.isBatchedMesh&&Kt.batchingColor===!1&&et.colorTexture!==null)ae=!0;else if(et.isInstancedMesh&&Kt.instancing===!1)ae=!0;else if(!et.isInstancedMesh&&Kt.instancing===!0)ae=!0;else if(et.isSkinnedMesh&&Kt.skinning===!1)ae=!0;else if(!et.isSkinnedMesh&&Kt.skinning===!0)ae=!0;else if(et.isInstancedMesh&&Kt.instancingColor===!0&&et.instanceColor===null)ae=!0;else if(et.isInstancedMesh&&Kt.instancingColor===!1&&et.instanceColor!==null)ae=!0;else if(et.isInstancedMesh&&Kt.instancingMorph===!0&&et.morphTexture===null)ae=!0;else if(et.isInstancedMesh&&Kt.instancingMorph===!1&&et.morphTexture!==null)ae=!0;else if(Kt.envMap!==Zt)ae=!0;else if(ot.fog===!0&&Kt.fog!==At)ae=!0;else if(Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==ce.numPlanes||Kt.numIntersection!==ce.numIntersection))ae=!0;else if(Kt.vertexAlphas!==he)ae=!0;else if(Kt.vertexTangents!==me)ae=!0;else if(Kt.morphTargets!==Jt)ae=!0;else if(Kt.morphNormals!==Ee)ae=!0;else if(Kt.morphColors!==pe)ae=!0;else if(Kt.toneMapping!==be)ae=!0;else if(Kt.morphTargetsCount!==we)ae=!0}else ae=!0,Kt.__version=ot.version;let fn=Kt.currentProgram;if(ae===!0)fn=ki(ot,nt,et);let _n=!1,rn=!1,pn=!1,Re=fn.getUniforms(),xn=Kt.uniforms;if(Mt.useProgram(fn.program))_n=!0,rn=!0,pn=!0;if(ot.id!==ut)ut=ot.id,rn=!0;if(_n||B!==O){if(Mt.buffers.depth.getReversed())Wt.copy(O.projectionMatrix),_h(Wt),xh(Wt),Re.setValue(V,"projectionMatrix",Wt);else Re.setValue(V,"projectionMatrix",O.projectionMatrix);Re.setValue(V,"viewMatrix",O.matrixWorldInverse);let Tn=Re.map.cameraPosition;if(Tn!==void 0)Tn.setValue(V,se.setFromMatrixPosition(O.matrixWorld));if(Yt.logarithmicDepthBuffer)Re.setValue(V,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2));if(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)Re.setValue(V,"isOrthographic",O.isOrthographicCamera===!0);if(B!==O)B=O,rn=!0,pn=!0}if(et.isSkinnedMesh){Re.setOptional(V,et,"bindMatrix"),Re.setOptional(V,et,"bindMatrixInverse");let De=et.skeleton;if(De){if(De.boneTexture===null)De.computeBoneTexture();Re.setValue(V,"boneTexture",De.boneTexture,Vt)}}if(et.isBatchedMesh){if(Re.setOptional(V,et,"batchingTexture"),Re.setValue(V,"batchingTexture",et._matricesTexture,Vt),Re.setOptional(V,et,"batchingIdTexture"),Re.setValue(V,"batchingIdTexture",et._indirectTexture,Vt),Re.setOptional(V,et,"batchingColorTexture"),et._colorsTexture!==null)Re.setValue(V,"batchingColorTexture",et._colorsTexture,Vt)}let jn=lt.morphAttributes;if(jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)Se.update(et,lt,fn);if(rn||Kt.receiveShadow!==et.receiveShadow)Kt.receiveShadow=et.receiveShadow,Re.setValue(V,"receiveShadow",et.receiveShadow);if(ot.isMeshGouraudMaterial&&ot.envMap!==null)xn.envMap.value=Zt,xn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1;if(ot.isMeshStandardMaterial&&ot.envMap===null&&nt.environment!==null)xn.envMapIntensity.value=nt.environmentIntensity;if(rn){if(Re.setValue(V,"toneMappingExposure",F.toneMappingExposure),Kt.needsLights)Ms(xn,pn);if(At&&ot.fog===!0)Qt.refreshFogUniforms(xn,At);Qt.refreshMaterialUniforms(xn,ot,it,J,w.state.transmissionRenderTarget[O.id]),Os.upload(V,er(Kt),xn,Vt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0)Os.upload(V,er(Kt),xn,Vt),ot.uniformsNeedUpdate=!1;if(ot.isSpriteMaterial)Re.setValue(V,"center",et.center);if(Re.setValue(V,"modelViewMatrix",et.modelViewMatrix),Re.setValue(V,"normalMatrix",et.normalMatrix),Re.setValue(V,"modelMatrix",et.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let De=ot.uniformsGroups;for(let Tn=0,yn=De.length;Tn<yn;Tn++){let Ke=De[Tn];Ie.update(Ke,fn),Ie.bind(Ke,fn)}}return fn}function Ms(O,nt){O.ambientLightColor.needsUpdate=nt,O.lightProbe.needsUpdate=nt,O.directionalLights.needsUpdate=nt,O.directionalLightShadows.needsUpdate=nt,O.pointLights.needsUpdate=nt,O.pointLightShadows.needsUpdate=nt,O.spotLights.needsUpdate=nt,O.spotLightShadows.needsUpdate=nt,O.rectAreaLights.needsUpdate=nt,O.hemisphereLights.needsUpdate=nt}function Ss(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}if(this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(O,nt,lt){zt.get(O.texture).__webglTexture=nt,zt.get(O.depthTexture).__webglTexture=lt;let ot=zt.get(O);if(ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=lt===void 0,!ot.__autoAllocateDepthBuffer){if(bt.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(O,nt){let lt=zt.get(O);lt.__webglFramebuffer=nt,lt.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(O,nt=0,lt=0){Y=O,rt=nt,q=lt;let ot=!0,et=null,At=!1,Pt=!1;if(O){let Zt=zt.get(O);if(Zt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(V.FRAMEBUFFER,null),ot=!1;else if(Zt.__webglFramebuffer===void 0)Vt.setupRenderTarget(O);else if(Zt.__hasExternalTextures)Vt.rebindTextures(O,zt.get(O.texture).__webglTexture,zt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let Jt=O.depthTexture;if(Zt.__boundDepthTexture!==Jt){if(Jt!==null&&zt.has(Jt)&&(O.width!==Jt.image.width||O.height!==Jt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(O)}}let he=O.texture;if(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)Pt=!0;let me=zt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget){if(Array.isArray(me[nt]))et=me[nt][lt];else et=me[nt];At=!0}else if(O.samples>0&&Vt.useMultisampledRTT(O)===!1)et=zt.get(O).__webglMultisampledFramebuffer;else if(Array.isArray(me))et=me[lt];else et=me;z.copy(O.viewport),j.copy(O.scissor),at=O.scissorTest}else z.copy(L).multiplyScalar(it).floor(),j.copy(qt).multiplyScalar(it).floor(),at=ee;if(Mt.bindFramebuffer(V.FRAMEBUFFER,et)&&ot)Mt.drawBuffers(O,et);if(Mt.viewport(z),Mt.scissor(j),Mt.setScissorTest(at),At){let Zt=zt.get(O.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Zt.__webglTexture,lt)}else if(Pt){let Zt=zt.get(O.texture),he=nt||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.__webglTexture,lt||0,he)}ut=-1},this.readRenderTargetPixels=function(O,nt,lt,ot,et,At,Pt){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=zt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pt!==void 0)Xt=Xt[Pt];if(Xt){Mt.bindFramebuffer(V.FRAMEBUFFER,Xt);try{let Zt=O.texture,{format:he,type:me}=Zt;if(!Yt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(nt>=0&&nt<=O.width-ot&&(lt>=0&&lt<=O.height-et))V.readPixels(nt,lt,ot,et,fe.convert(he),fe.convert(me),At)}finally{let Zt=Y!==null?zt.get(Y).__webglFramebuffer:null;Mt.bindFramebuffer(V.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(O,nt,lt,ot,et,At,Pt){if(!(O&&O.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=zt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pt!==void 0)Xt=Xt[Pt];if(Xt){let Zt=O.texture,{format:he,type:me}=Zt;if(!Yt.textureFormatReadable(he))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(me))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(nt>=0&&nt<=O.width-ot&&(lt>=0&&lt<=O.height-et)){Mt.bindFramebuffer(V.FRAMEBUFFER,Xt);let Jt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Jt),V.bufferData(V.PIXEL_PACK_BUFFER,At.byteLength,V.STREAM_READ),V.readPixels(nt,lt,ot,et,fe.convert(he),fe.convert(me),0);let Ee=Y!==null?zt.get(Y).__webglFramebuffer:null;Mt.bindFramebuffer(V.FRAMEBUFFER,Ee);let pe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await gh(V,pe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Jt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,At),V.deleteBuffer(Jt),V.deleteSync(pe),At}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,nt=null,lt=0){if(O.isTexture!==!0)Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),nt=arguments[0]||null,O=arguments[1];let ot=Math.pow(2,-lt),et=Math.floor(O.image.width*ot),At=Math.floor(O.image.height*ot),Pt=nt!==null?nt.x:0,Xt=nt!==null?nt.y:0;Vt.setTexture2D(O,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,Pt,Xt,et,At),Mt.unbindTexture()},this.copyTextureToTexture=function(O,nt,lt=null,ot=null,et=0){if(O.isTexture!==!0)Us("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,O=arguments[1],nt=arguments[2],et=arguments[3]||0,lt=null;let At,Pt,Xt,Zt,he,me,Jt,Ee,pe,be=O.isCompressedTexture?O.mipmaps[et]:O.image;if(lt!==null)At=lt.max.x-lt.min.x,Pt=lt.max.y-lt.min.y,Xt=lt.isBox3?lt.max.z-lt.min.z:1,Zt=lt.min.x,he=lt.min.y,me=lt.isBox3?lt.min.z:0;else At=be.width,Pt=be.height,Xt=be.depth||1,Zt=0,he=0,me=0;if(ot!==null)Jt=ot.x,Ee=ot.y,pe=ot.z;else Jt=0,Ee=0,pe=0;let tn=fe.convert(nt.format),we=fe.convert(nt.type),Kt;if(nt.isData3DTexture)Vt.setTexture3D(nt,0),Kt=V.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)Vt.setTexture2DArray(nt,0),Kt=V.TEXTURE_2D_ARRAY;else Vt.setTexture2D(nt,0),Kt=V.TEXTURE_2D;V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,nt.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,nt.unpackAlignment);let hn=V.getParameter(V.UNPACK_ROW_LENGTH),ae=V.getParameter(V.UNPACK_IMAGE_HEIGHT),fn=V.getParameter(V.UNPACK_SKIP_PIXELS),_n=V.getParameter(V.UNPACK_SKIP_ROWS),rn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,be.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,be.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zt),V.pixelStorei(V.UNPACK_SKIP_ROWS,he),V.pixelStorei(V.UNPACK_SKIP_IMAGES,me);let pn=O.isDataArrayTexture||O.isData3DTexture,Re=nt.isDataArrayTexture||nt.isData3DTexture;if(O.isRenderTargetTexture||O.isDepthTexture){let xn=zt.get(O),jn=zt.get(nt),De=zt.get(xn.__renderTarget),Tn=zt.get(jn.__renderTarget);Mt.bindFramebuffer(V.READ_FRAMEBUFFER,De.__webglFramebuffer),Mt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let yn=0;yn<Xt;yn++){if(pn)V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zt.get(O).__webglTexture,et,me+yn);if(O.isDepthTexture){if(Re)V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zt.get(nt).__webglTexture,et,pe+yn);V.blitFramebuffer(Zt,he,At,Pt,Jt,Ee,At,Pt,V.DEPTH_BUFFER_BIT,V.NEAREST)}else if(Re)V.copyTexSubImage3D(Kt,et,Jt,Ee,pe+yn,Zt,he,At,Pt);else V.copyTexSubImage2D(Kt,et,Jt,Ee,pe+yn,Zt,he,At,Pt)}Mt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Re)if(O.isDataTexture||O.isData3DTexture)V.texSubImage3D(Kt,et,Jt,Ee,pe,At,Pt,Xt,tn,we,be.data);else if(nt.isCompressedArrayTexture)V.compressedTexSubImage3D(Kt,et,Jt,Ee,pe,At,Pt,Xt,tn,be.data);else V.texSubImage3D(Kt,et,Jt,Ee,pe,At,Pt,Xt,tn,we,be);else if(O.isDataTexture)V.texSubImage2D(V.TEXTURE_2D,et,Jt,Ee,At,Pt,tn,we,be.data);else if(O.isCompressedTexture)V.compressedTexSubImage2D(V.TEXTURE_2D,et,Jt,Ee,be.width,be.height,tn,be.data);else V.texSubImage2D(V.TEXTURE_2D,et,Jt,Ee,At,Pt,tn,we,be);if(V.pixelStorei(V.UNPACK_ROW_LENGTH,hn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ae),V.pixelStorei(V.UNPACK_SKIP_PIXELS,fn),V.pixelStorei(V.UNPACK_SKIP_ROWS,_n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rn),et===0&&nt.generateMipmaps)V.generateMipmap(Kt);Mt.unbindTexture()},this.copyTextureToTexture3D=function(O,nt,lt=null,ot=null,et=0){if(O.isTexture!==!0)Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),lt=arguments[0]||null,ot=arguments[1]||null,O=arguments[2],nt=arguments[3],et=arguments[4]||0;return Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(O,nt,lt,ot,et)},this.initRenderTarget=function(O){if(zt.get(O).__webglFramebuffer===void 0)Vt.setupRenderTarget(O)},this.initTexture=function(O){if(O.isCubeTexture)Vt.setTextureCube(O,0);else if(O.isData3DTexture)Vt.setTexture3D(O,0);else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Vt.setTexture2DArray(O,0);else Vt.setTexture2D(O,0);Mt.unbindTexture()},this.resetState=function(){rt=0,q=0,Y=null,Mt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a;let h=this.getContext();h.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(a),h.unpackColorSpace=Ae._getUnpackColorSpace()}}class Vr{constructor(a,h=1,p=1000){this.isFog=!0,this.name="",this.color=new xe(a),this.near=h,this.far=p}clone(){return new Vr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qs extends qe{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(a,h){if(super.copy(a,h),a.background!==null)this.background=a.background.clone();if(a.environment!==null)this.environment=a.environment.clone();if(a.fog!==null)this.fog=a.fog.clone();if(this.backgroundBlurriness=a.backgroundBlurriness,this.backgroundIntensity=a.backgroundIntensity,this.backgroundRotation.copy(a.backgroundRotation),this.environmentIntensity=a.environmentIntensity,this.environmentRotation.copy(a.environmentRotation),a.overrideMaterial!==null)this.overrideMaterial=a.overrideMaterial.clone();return this.matrixAutoUpdate=a.matrixAutoUpdate,this}toJSON(a){let h=super.toJSON(a);if(this.fog!==null)h.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)h.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)h.object.backgroundIntensity=this.backgroundIntensity;if(h.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)h.object.environmentIntensity=this.environmentIntensity;return h.object.environmentRotation=this.environmentRotation.toArray(),h}}class vc extends cn{constructor(a=null,h=1,p=1,m,g,_,y,x,M=1003,S=1003,b,v){super(null,_,y,x,M,S,m,g,b,v);this.isDataTexture=!0,this.image={data:a,width:h,height:p},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa extends Cn{constructor(a,h,p,m=1){super(a,h,p);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=m}copy(a){return super.copy(a),this.meshPerAttribute=a.meshPerAttribute,this}toJSON(){let a=super.toJSON();return a.meshPerAttribute=this.meshPerAttribute,a.isInstancedBufferAttribute=!0,a}}var is=new Ce,Dl=new Ce,Ar=[],Ll=new Dn,fm=new Ce,Ps=new ne,Is=new Oi;class Ys extends ne{constructor(a,h,p){super(a,h);this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(p*16),16),this.instanceColor=null,this.morphTexture=null,this.count=p,this.boundingBox=null,this.boundingSphere=null;for(let m=0;m<p;m++)this.setMatrixAt(m,fm)}computeBoundingBox(){let a=this.geometry,h=this.count;if(this.boundingBox===null)this.boundingBox=new Dn;if(a.boundingBox===null)a.computeBoundingBox();this.boundingBox.makeEmpty();for(let p=0;p<h;p++)this.getMatrixAt(p,is),Ll.copy(a.boundingBox).applyMatrix4(is),this.boundingBox.union(Ll)}computeBoundingSphere(){let a=this.geometry,h=this.count;if(this.boundingSphere===null)this.boundingSphere=new Oi;if(a.boundingSphere===null)a.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let p=0;p<h;p++)this.getMatrixAt(p,is),Is.copy(a.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Is)}copy(a,h){if(super.copy(a,h),this.instanceMatrix.copy(a.instanceMatrix),a.morphTexture!==null)this.morphTexture=a.morphTexture.clone();if(a.instanceColor!==null)this.instanceColor=a.instanceColor.clone();if(this.count=a.count,a.boundingBox!==null)this.boundingBox=a.boundingBox.clone();if(a.boundingSphere!==null)this.boundingSphere=a.boundingSphere.clone();return this}getColorAt(a,h){h.fromArray(this.instanceColor.array,a*3)}getMatrixAt(a,h){h.fromArray(this.instanceMatrix.array,a*16)}getMorphAt(a,h){let p=h.morphTargetInfluences,m=this.morphTexture.source.data.data,g=p.length+1,_=a*g+1;for(let y=0;y<p.length;y++)p[y]=m[_+y]}raycast(a,h){let p=this.matrixWorld,m=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Is.copy(this.boundingSphere),Is.applyMatrix4(p),a.ray.intersectsSphere(Is)===!1)return;for(let g=0;g<m;g++){this.getMatrixAt(g,is),Dl.multiplyMatrices(p,is),Ps.matrixWorld=Dl,Ps.raycast(a,Ar);for(let _=0,y=Ar.length;_<y;_++){let x=Ar[_];x.instanceId=g,x.object=this,h.push(x)}Ar.length=0}}setColorAt(a,h){if(this.instanceColor===null)this.instanceColor=new Wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3);h.toArray(this.instanceColor.array,a*3)}setMatrixAt(a,h){h.toArray(this.instanceMatrix.array,a*16)}setMorphAt(a,h){let p=h.morphTargetInfluences,m=p.length+1;if(this.morphTexture===null)this.morphTexture=new vc(new Float32Array(m*this.count),m,this.count,1028,1015);let g=this.morphTexture.source.data.data,_=0;for(let M=0;M<p.length;M++)_+=p[M];let y=this.geometry.morphTargetsRelative?1:1-_,x=m*a;g[x]=y,g.set(p,x+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class fs extends vi{static get type(){return"LineBasicMaterial"}constructor(a){super();this.isLineBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.linewidth=a.linewidth,this.linecap=a.linecap,this.linejoin=a.linejoin,this.fog=a.fog,this}}var zr=new X,Hr=new X,Ul=new Ce,Ds=new us,Rr=new Oi,Na=new X,Nl=new X;class Xr extends qe{constructor(a=new Qe,h=new fs){super();this.isLine=!0,this.type="Line",this.geometry=a,this.material=h,this.updateMorphTargets()}copy(a,h){return super.copy(a,h),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}computeLineDistances(){let a=this.geometry;if(a.index===null){let h=a.attributes.position,p=[0];for(let m=1,g=h.count;m<g;m++)zr.fromBufferAttribute(h,m-1),Hr.fromBufferAttribute(h,m),p[m]=p[m-1],p[m]+=zr.distanceTo(Hr);a.setAttribute("lineDistance",new Pe(p,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(a,h){let p=this.geometry,m=this.matrixWorld,g=a.params.Line.threshold,_=p.drawRange;if(p.boundingSphere===null)p.computeBoundingSphere();if(Rr.copy(p.boundingSphere),Rr.applyMatrix4(m),Rr.radius+=g,a.ray.intersectsSphere(Rr)===!1)return;Ul.copy(m).invert(),Ds.copy(a.ray).applyMatrix4(Ul);let y=g/((this.scale.x+this.scale.y+this.scale.z)/3),x=y*y,M=this.isLineSegments?2:1,S=p.index,v=p.attributes.position;if(S!==null){let T=Math.max(0,_.start),C=Math.min(S.count,_.start+_.count);for(let I=T,D=C-1;I<D;I+=M){let w=S.getX(I),A=S.getX(I+1),G=Cr(this,a,Ds,x,w,A);if(G)h.push(G)}if(this.isLineLoop){let I=S.getX(C-1),D=S.getX(T),w=Cr(this,a,Ds,x,I,D);if(w)h.push(w)}}else{let T=Math.max(0,_.start),C=Math.min(v.count,_.start+_.count);for(let I=T,D=C-1;I<D;I+=M){let w=Cr(this,a,Ds,x,I,I+1);if(w)h.push(w)}if(this.isLineLoop){let I=Cr(this,a,Ds,x,C-1,T);if(I)h.push(I)}}}updateMorphTargets(){let h=this.geometry.morphAttributes,p=Object.keys(h);if(p.length>0){let m=h[p[0]];if(m!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let g=0,_=m.length;g<_;g++){let y=m[g].name||String(g);this.morphTargetInfluences.push(0),this.morphTargetDictionary[y]=g}}}}}function Cr(a,h,p,m,g,_){let y=a.geometry.attributes.position;if(zr.fromBufferAttribute(y,g),Hr.fromBufferAttribute(y,_),p.distanceSqToSegment(zr,Hr,Na,Nl)>m)return;Na.applyMatrix4(a.matrixWorld);let M=h.ray.origin.distanceTo(Na);if(M<h.near||M>h.far)return;return{distance:M,point:Nl.clone().applyMatrix4(a.matrixWorld),index:g,face:null,faceIndex:null,barycoord:null,object:a}}var Fl=new X,Ol=new X;class oo extends Xr{constructor(a,h){super(a,h);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let a=this.geometry;if(a.index===null){let h=a.attributes.position,p=[];for(let m=0,g=h.count;m<g;m+=2)Fl.fromBufferAttribute(h,m),Ol.fromBufferAttribute(h,m+1),p[m]=m===0?0:p[m-1],p[m+1]=p[m]+Fl.distanceTo(Ol);a.setAttribute("lineDistance",new Pe(p,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lo extends cn{constructor(a,h,p,m,g,_,y,x,M){super(a,h,p,m,g,_,y,x,M);this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(a,h){let p=this.getUtoTmapping(a);return this.getPoint(p,h)}getPoints(a=5){let h=[];for(let p=0;p<=a;p++)h.push(this.getPoint(p/a));return h}getSpacedPoints(a=5){let h=[];for(let p=0;p<=a;p++)h.push(this.getPointAt(p/a));return h}getLength(){let a=this.getLengths();return a[a.length-1]}getLengths(a=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let h=[],p,m=this.getPoint(0),g=0;h.push(0);for(let _=1;_<=a;_++)p=this.getPoint(_/a),g+=p.distanceTo(m),h.push(g),m=p;return this.cacheArcLengths=h,h}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(a,h){let p=this.getLengths(),m=0,g=p.length,_;if(h)_=h;else _=a*p[g-1];let y=0,x=g-1,M;while(y<=x)if(m=Math.floor(y+(x-y)/2),M=p[m]-_,M<0)y=m+1;else if(M>0)x=m-1;else{x=m;break}if(m=x,p[m]===_)return m/(g-1);let S=p[m],v=p[m+1]-S,T=(_-S)/v;return(m+T)/(g-1)}getTangent(a,h){let m=a-0.0001,g=a+0.0001;if(m<0)m=0;if(g>1)g=1;let _=this.getPoint(m),y=this.getPoint(g),x=h||(_.isVector2?new Et:new X);return x.copy(y).sub(_).normalize(),x}getTangentAt(a,h){let p=this.getUtoTmapping(a);return this.getTangent(p,h)}computeFrenetFrames(a,h){let p=new X,m=[],g=[],_=[],y=new X,x=new Ce;for(let T=0;T<=a;T++){let C=T/a;m[T]=this.getTangentAt(C,new X)}g[0]=new X,_[0]=new X;let M=Number.MAX_VALUE,S=Math.abs(m[0].x),b=Math.abs(m[0].y),v=Math.abs(m[0].z);if(S<=M)M=S,p.set(1,0,0);if(b<=M)M=b,p.set(0,1,0);if(v<=M)p.set(0,0,1);y.crossVectors(m[0],p).normalize(),g[0].crossVectors(m[0],y),_[0].crossVectors(m[0],g[0]);for(let T=1;T<=a;T++){if(g[T]=g[T-1].clone(),_[T]=_[T-1].clone(),y.crossVectors(m[T-1],m[T]),y.length()>Number.EPSILON){y.normalize();let C=Math.acos(Ye(m[T-1].dot(m[T]),-1,1));g[T].applyMatrix4(x.makeRotationAxis(y,C))}_[T].crossVectors(m[T],g[T])}if(h===!0){let T=Math.acos(Ye(g[0].dot(g[a]),-1,1));if(T/=a,m[0].dot(y.crossVectors(g[0],g[a]))>0)T=-T;for(let C=1;C<=a;C++)g[C].applyMatrix4(x.makeRotationAxis(m[C],T*C)),_[C].crossVectors(m[C],g[C])}return{tangents:m,normals:g,binormals:_}}clone(){return new this.constructor().copy(this)}copy(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}toJSON(){let a={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return a.arcLengthDivisions=this.arcLengthDivisions,a.type=this.type,a}fromJSON(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}}class qr extends kn{constructor(a=0,h=0,p=1,m=1,g=0,_=Math.PI*2,y=!1,x=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=a,this.aY=h,this.xRadius=p,this.yRadius=m,this.aStartAngle=g,this.aEndAngle=_,this.aClockwise=y,this.aRotation=x}getPoint(a,h=new Et){let p=h,m=Math.PI*2,g=this.aEndAngle-this.aStartAngle,_=Math.abs(g)<Number.EPSILON;while(g<0)g+=m;while(g>m)g-=m;if(g<Number.EPSILON)if(_)g=0;else g=m;if(this.aClockwise===!0&&!_)if(g===m)g=-m;else g=g-m;let y=this.aStartAngle+a*g,x=this.aX+this.xRadius*Math.cos(y),M=this.aY+this.yRadius*Math.sin(y);if(this.aRotation!==0){let S=Math.cos(this.aRotation),b=Math.sin(this.aRotation),v=x-this.aX,T=M-this.aY;x=v*S-T*b+this.aX,M=v*b+T*S+this.aY}return p.set(x,M)}copy(a){return super.copy(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}toJSON(){let a=super.toJSON();return a.aX=this.aX,a.aY=this.aY,a.xRadius=this.xRadius,a.yRadius=this.yRadius,a.aStartAngle=this.aStartAngle,a.aEndAngle=this.aEndAngle,a.aClockwise=this.aClockwise,a.aRotation=this.aRotation,a}fromJSON(a){return super.fromJSON(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}}class Mc extends qr{constructor(a,h,p,m,g,_){super(a,h,p,p,m,g,_);this.isArcCurve=!0,this.type="ArcCurve"}}function co(){let a=0,h=0,p=0,m=0;function g(_,y,x,M){a=_,h=x,p=-3*_+3*y-2*x-M,m=2*_-2*y+x+M}return{initCatmullRom:function(_,y,x,M,S){g(y,x,S*(x-_),S*(M-y))},initNonuniformCatmullRom:function(_,y,x,M,S,b,v){let T=(y-_)/S-(x-_)/(S+b)+(x-y)/b,C=(x-y)/b-(M-y)/(b+v)+(M-x)/v;T*=b,C*=b,g(y,x,T,C)},calc:function(_){let y=_*_,x=y*_;return a+h*_+p*y+m*x}}}var Pr=new X,Fa=new co,Oa=new co,Ba=new co;class Sc extends kn{constructor(a=[],h=!1,p="centripetal",m=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=a,this.closed=h,this.curveType=p,this.tension=m}getPoint(a,h=new X){let p=h,m=this.points,g=m.length,_=(g-(this.closed?0:1))*a,y=Math.floor(_),x=_-y;if(this.closed)y+=y>0?0:(Math.floor(Math.abs(y)/g)+1)*g;else if(x===0&&y===g-1)y=g-2,x=1;let M,S;if(this.closed||y>0)M=m[(y-1)%g];else Pr.subVectors(m[0],m[1]).add(m[0]),M=Pr;let b=m[y%g],v=m[(y+1)%g];if(this.closed||y+2<g)S=m[(y+2)%g];else Pr.subVectors(m[g-1],m[g-2]).add(m[g-1]),S=Pr;if(this.curveType==="centripetal"||this.curveType==="chordal"){let T=this.curveType==="chordal"?0.5:0.25,C=Math.pow(M.distanceToSquared(b),T),I=Math.pow(b.distanceToSquared(v),T),D=Math.pow(v.distanceToSquared(S),T);if(I<0.0001)I=1;if(C<0.0001)C=I;if(D<0.0001)D=I;Fa.initNonuniformCatmullRom(M.x,b.x,v.x,S.x,C,I,D),Oa.initNonuniformCatmullRom(M.y,b.y,v.y,S.y,C,I,D),Ba.initNonuniformCatmullRom(M.z,b.z,v.z,S.z,C,I,D)}else if(this.curveType==="catmullrom")Fa.initCatmullRom(M.x,b.x,v.x,S.x,this.tension),Oa.initCatmullRom(M.y,b.y,v.y,S.y,this.tension),Ba.initCatmullRom(M.z,b.z,v.z,S.z,this.tension);return p.set(Fa.calc(x),Oa.calc(x),Ba.calc(x)),p}copy(a){super.copy(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(m.clone())}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}toJSON(){let a=super.toJSON();a.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];a.points.push(m.toArray())}return a.closed=this.closed,a.curveType=this.curveType,a.tension=this.tension,a}fromJSON(a){super.fromJSON(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(new X().fromArray(m))}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}}function Bl(a,h,p,m,g){let _=(m-h)*0.5,y=(g-p)*0.5,x=a*a,M=a*x;return(2*p-2*m+_+y)*M+(-3*p+3*m-2*_-y)*x+_*a+p}function pm(a,h){let p=1-a;return p*p*h}function mm(a,h){return 2*(1-a)*a*h}function gm(a,h){return a*a*h}function Bs(a,h,p,m){return pm(a,h)+mm(a,p)+gm(a,m)}function _m(a,h){let p=1-a;return p*p*p*h}function xm(a,h){let p=1-a;return 3*p*p*a*h}function ym(a,h){return 3*(1-a)*a*a*h}function vm(a,h){return a*a*a*h}function zs(a,h,p,m,g){return _m(a,h)+xm(a,p)+ym(a,m)+vm(a,g)}class ho extends kn{constructor(a=new Et,h=new Et,p=new Et,m=new Et){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=a,this.v1=h,this.v2=p,this.v3=m}getPoint(a,h=new Et){let p=h,m=this.v0,g=this.v1,_=this.v2,y=this.v3;return p.set(zs(a,m.x,g.x,_.x,y.x),zs(a,m.y,g.y,_.y,y.y)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class Ec extends kn{constructor(a=new X,h=new X,p=new X,m=new X){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=a,this.v1=h,this.v2=p,this.v3=m}getPoint(a,h=new X){let p=h,m=this.v0,g=this.v1,_=this.v2,y=this.v3;return p.set(zs(a,m.x,g.x,_.x,y.x),zs(a,m.y,g.y,_.y,y.y),zs(a,m.z,g.z,_.z,y.z)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class uo extends kn{constructor(a=new Et,h=new Et){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=a,this.v2=h}getPoint(a,h=new Et){let p=h;if(a===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(a).add(this.v1);return p}getPointAt(a,h){return this.getPoint(a,h)}getTangent(a,h=new Et){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,h){return this.getTangent(a,h)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class bc extends kn{constructor(a=new X,h=new X){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=a,this.v2=h}getPoint(a,h=new X){let p=h;if(a===1)p.copy(this.v2);else p.copy(this.v2).sub(this.v1),p.multiplyScalar(a).add(this.v1);return p}getPointAt(a,h){return this.getPoint(a,h)}getTangent(a,h=new X){return h.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,h){return this.getTangent(a,h)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class fo extends kn{constructor(a=new Et,h=new Et,p=new Et){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=a,this.v1=h,this.v2=p}getPoint(a,h=new Et){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(Bs(a,m.x,g.x,_.x),Bs(a,m.y,g.y,_.y)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class Tc extends kn{constructor(a=new X,h=new X,p=new X){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=a,this.v1=h,this.v2=p}getPoint(a,h=new X){let p=h,m=this.v0,g=this.v1,_=this.v2;return p.set(Bs(a,m.x,g.x,_.x),Bs(a,m.y,g.y,_.y),Bs(a,m.z,g.z,_.z)),p}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){let a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class po extends kn{constructor(a=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=a}getPoint(a,h=new Et){let p=h,m=this.points,g=(m.length-1)*a,_=Math.floor(g),y=g-_,x=m[_===0?_:_-1],M=m[_],S=m[_>m.length-2?m.length-1:_+1],b=m[_>m.length-3?m.length-1:_+2];return p.set(Bl(y,x.x,M.x,S.x,b.x),Bl(y,x.y,M.y,S.y,b.y)),p}copy(a){super.copy(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(m.clone())}return this}toJSON(){let a=super.toJSON();a.points=[];for(let h=0,p=this.points.length;h<p;h++){let m=this.points[h];a.points.push(m.toArray())}return a}fromJSON(a){super.fromJSON(a),this.points=[];for(let h=0,p=a.points.length;h<p;h++){let m=a.points[h];this.points.push(new Et().fromArray(m))}return this}}var Va=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Sc,CubicBezierCurve:ho,CubicBezierCurve3:Ec,EllipseCurve:qr,LineCurve:uo,LineCurve3:bc,QuadraticBezierCurve:fo,QuadraticBezierCurve3:Tc,SplineCurve:po});class wc extends kn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(a){this.curves.push(a)}closePath(){let a=this.curves[0].getPoint(0),h=this.curves[this.curves.length-1].getPoint(1);if(!a.equals(h)){let p=a.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[p](h,a))}return this}getPoint(a,h){let p=a*this.getLength(),m=this.getCurveLengths(),g=0;while(g<m.length){if(m[g]>=p){let _=m[g]-p,y=this.curves[g],x=y.getLength(),M=x===0?0:1-_/x;return y.getPointAt(M,h)}g++}return null}getLength(){let a=this.getCurveLengths();return a[a.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let a=[],h=0;for(let p=0,m=this.curves.length;p<m;p++)h+=this.curves[p].getLength(),a.push(h);return this.cacheLengths=a,a}getSpacedPoints(a=40){let h=[];for(let p=0;p<=a;p++)h.push(this.getPoint(p/a));if(this.autoClose)h.push(h[0]);return h}getPoints(a=12){let h=[],p;for(let m=0,g=this.curves;m<g.length;m++){let _=g[m],y=_.isEllipseCurve?a*2:_.isLineCurve||_.isLineCurve3?1:_.isSplineCurve?a*_.points.length:a,x=_.getPoints(y);for(let M=0;M<x.length;M++){let S=x[M];if(p&&p.equals(S))continue;h.push(S),p=S}}if(this.autoClose&&h.length>1&&!h[h.length-1].equals(h[0]))h.push(h[0]);return h}copy(a){super.copy(a),this.curves=[];for(let h=0,p=a.curves.length;h<p;h++){let m=a.curves[h];this.curves.push(m.clone())}return this.autoClose=a.autoClose,this}toJSON(){let a=super.toJSON();a.autoClose=this.autoClose,a.curves=[];for(let h=0,p=this.curves.length;h<p;h++){let m=this.curves[h];a.curves.push(m.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.autoClose=a.autoClose,this.curves=[];for(let h=0,p=a.curves.length;h<p;h++){let m=a.curves[h];this.curves.push(new Va[m.type]().fromJSON(m))}return this}}class Xa extends wc{constructor(a){super();if(this.type="Path",this.currentPoint=new Et,a)this.setFromPoints(a)}setFromPoints(a){this.moveTo(a[0].x,a[0].y);for(let h=1,p=a.length;h<p;h++)this.lineTo(a[h].x,a[h].y);return this}moveTo(a,h){return this.currentPoint.set(a,h),this}lineTo(a,h){let p=new uo(this.currentPoint.clone(),new Et(a,h));return this.curves.push(p),this.currentPoint.set(a,h),this}quadraticCurveTo(a,h,p,m){let g=new fo(this.currentPoint.clone(),new Et(a,h),new Et(p,m));return this.curves.push(g),this.currentPoint.set(p,m),this}bezierCurveTo(a,h,p,m,g,_){let y=new ho(this.currentPoint.clone(),new Et(a,h),new Et(p,m),new Et(g,_));return this.curves.push(y),this.currentPoint.set(g,_),this}splineThru(a){let h=[this.currentPoint.clone()].concat(a),p=new po(h);return this.curves.push(p),this.currentPoint.copy(a[a.length-1]),this}arc(a,h,p,m,g,_){let y=this.currentPoint.x,x=this.currentPoint.y;return this.absarc(a+y,h+x,p,m,g,_),this}absarc(a,h,p,m,g,_){return this.absellipse(a,h,p,p,m,g,_),this}ellipse(a,h,p,m,g,_,y,x){let M=this.currentPoint.x,S=this.currentPoint.y;return this.absellipse(a+M,h+S,p,m,g,_,y,x),this}absellipse(a,h,p,m,g,_,y,x){let M=new qr(a,h,p,m,g,_,y,x);if(this.curves.length>0){let b=M.getPoint(0);if(!b.equals(this.currentPoint))this.lineTo(b.x,b.y)}this.curves.push(M);let S=M.getPoint(1);return this.currentPoint.copy(S),this}copy(a){return super.copy(a),this.currentPoint.copy(a.currentPoint),this}toJSON(){let a=super.toJSON();return a.currentPoint=this.currentPoint.toArray(),a}fromJSON(a){return super.fromJSON(a),this.currentPoint.fromArray(a.currentPoint),this}}class Zs extends Qe{constructor(a=1,h=32,p=0,m=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:a,segments:h,thetaStart:p,thetaLength:m},h=Math.max(3,h);let g=[],_=[],y=[],x=[],M=new X,S=new Et;_.push(0,0,0),y.push(0,0,1),x.push(0.5,0.5);for(let b=0,v=3;b<=h;b++,v+=3){let T=p+b/h*m;M.x=a*Math.cos(T),M.y=a*Math.sin(T),_.push(M.x,M.y,M.z),y.push(0,0,1),S.x=(_[v]/a+1)/2,S.y=(_[v+1]/a+1)/2,x.push(S.x,S.y)}for(let b=1;b<=h;b++)g.push(b,b+1,0);this.setIndex(g),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(y,3)),this.setAttribute("uv",new Pe(x,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new Zs(a.radius,a.segments,a.thetaStart,a.thetaLength)}}class zi extends Qe{constructor(a=1,h=1,p=1,m=32,g=1,_=!1,y=0,x=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:a,radiusBottom:h,height:p,radialSegments:m,heightSegments:g,openEnded:_,thetaStart:y,thetaLength:x};let M=this;m=Math.floor(m),g=Math.floor(g);let S=[],b=[],v=[],T=[],C=0,I=[],D=p/2,w=0;if(A(),_===!1){if(a>0)G(!0);if(h>0)G(!1)}this.setIndex(S),this.setAttribute("position",new Pe(b,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(T,2));function A(){let F=new X,H=new X,rt=0,q=(h-a)/p;for(let Y=0;Y<=g;Y++){let ut=[],B=Y/g,z=B*(h-a)+a;for(let j=0;j<=m;j++){let at=j/m,ct=at*x+y,ht=Math.sin(ct),_t=Math.cos(ct);H.x=z*ht,H.y=-B*p+D,H.z=z*_t,b.push(H.x,H.y,H.z),F.set(ht,q,_t).normalize(),v.push(F.x,F.y,F.z),T.push(at,1-B),ut.push(C++)}I.push(ut)}for(let Y=0;Y<m;Y++)for(let ut=0;ut<g;ut++){let B=I[ut][Y],z=I[ut+1][Y],j=I[ut+1][Y+1],at=I[ut][Y+1];if(a>0||ut!==0)S.push(B,z,at),rt+=3;if(h>0||ut!==g-1)S.push(z,j,at),rt+=3}M.addGroup(w,rt,0),w+=rt}function G(F){let H=C,rt=new Et,q=new X,Y=0,ut=F===!0?a:h,B=F===!0?1:-1;for(let j=1;j<=m;j++)b.push(0,D*B,0),v.push(0,B,0),T.push(0.5,0.5),C++;let z=C;for(let j=0;j<=m;j++){let ct=j/m*x+y,ht=Math.cos(ct),_t=Math.sin(ct);q.x=ut*_t,q.y=D*B,q.z=ut*ht,b.push(q.x,q.y,q.z),v.push(0,B,0),rt.x=ht*0.5+0.5,rt.y=_t*0.5*B+0.5,T.push(rt.x,rt.y),C++}for(let j=0;j<m;j++){let at=H+j,ct=z+j;if(F===!0)S.push(ct,ct+1,at);else S.push(ct+1,ct,at);Y+=3}M.addGroup(w,Y,F===!0?1:2),w+=Y}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new zi(a.radiusTop,a.radiusBottom,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength)}}class Yr extends zi{constructor(a=1,h=1,p=32,m=1,g=!1,_=0,y=Math.PI*2){super(0,a,h,p,m,g,_,y);this.type="ConeGeometry",this.parameters={radius:a,height:h,radialSegments:p,heightSegments:m,openEnded:g,thetaStart:_,thetaLength:y}}static fromJSON(a){return new Yr(a.radius,a.height,a.radialSegments,a.heightSegments,a.openEnded,a.thetaStart,a.thetaLength)}}var Ir=new X,Dr=new X,za=new X,Lr=new Rn;class mo extends Qe{constructor(a=null,h=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:a,thresholdAngle:h},a!==null){let m=Math.pow(10,4),g=Math.cos(os*h),_=a.getIndex(),y=a.getAttribute("position"),x=_?_.count:y.count,M=[0,0,0],S=["a","b","c"],b=[,,,],v={},T=[];for(let C=0;C<x;C+=3){if(_)M[0]=_.getX(C),M[1]=_.getX(C+1),M[2]=_.getX(C+2);else M[0]=C,M[1]=C+1,M[2]=C+2;let{a:I,b:D,c:w}=Lr;if(I.fromBufferAttribute(y,M[0]),D.fromBufferAttribute(y,M[1]),w.fromBufferAttribute(y,M[2]),Lr.getNormal(za),b[0]=`${Math.round(I.x*m)},${Math.round(I.y*m)},${Math.round(I.z*m)}`,b[1]=`${Math.round(D.x*m)},${Math.round(D.y*m)},${Math.round(D.z*m)}`,b[2]=`${Math.round(w.x*m)},${Math.round(w.y*m)},${Math.round(w.z*m)}`,b[0]===b[1]||b[1]===b[2]||b[2]===b[0])continue;for(let A=0;A<3;A++){let G=(A+1)%3,F=b[A],H=b[G],rt=Lr[S[A]],q=Lr[S[G]],Y=`${F}_${H}`,ut=`${H}_${F}`;if(ut in v&&v[ut]){if(za.dot(v[ut].normal)<=g)T.push(rt.x,rt.y,rt.z),T.push(q.x,q.y,q.z);v[ut]=null}else if(!(Y in v))v[Y]={index0:M[A],index1:M[G],normal:za.clone()}}}for(let C in v)if(v[C]){let{index0:I,index1:D}=v[C];Ir.fromBufferAttribute(y,I),Dr.fromBufferAttribute(y,D),T.push(Ir.x,Ir.y,Ir.z),T.push(Dr.x,Dr.y,Dr.z)}this.setAttribute("position",new Pe(T,3))}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}}class Js extends Xa{constructor(a){super(a);this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(a){let h=[];for(let p=0,m=this.holes.length;p<m;p++)h[p]=this.holes[p].getPoints(a);return h}extractPoints(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}}copy(a){super.copy(a),this.holes=[];for(let h=0,p=a.holes.length;h<p;h++){let m=a.holes[h];this.holes.push(m.clone())}return this}toJSON(){let a=super.toJSON();a.uuid=this.uuid,a.holes=[];for(let h=0,p=this.holes.length;h<p;h++){let m=this.holes[h];a.holes.push(m.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.uuid=a.uuid,this.holes=[];for(let h=0,p=a.holes.length;h<p;h++){let m=a.holes[h];this.holes.push(new Xa().fromJSON(m))}return this}}var Mm={triangulate:function(a,h,p=2){let m=h&&h.length,g=m?h[0]*p:a.length,_=Ac(a,0,g,p,!0),y=[];if(!_||_.next===_.prev)return y;let x,M,S,b,v,T,C;if(m)_=wm(a,h,_,p);if(a.length>80*p){x=S=a[0],M=b=a[1];for(let I=p;I<g;I+=p){if(v=a[I],T=a[I+1],v<x)x=v;if(T<M)M=T;if(v>S)S=v;if(T>b)b=T}C=Math.max(S-x,b-M),C=C!==0?32767/C:0}return ks(_,y,p,x,M,C,0),y}};function Ac(a,h,p,m,g){let _,y;if(g===Om(a,h,p,m)>0)for(_=h;_<p;_+=m)y=zl(_,a[_],a[_+1],y);else for(_=p-m;_>=h;_-=m)y=zl(_,a[_],a[_+1],y);if(y&&Zr(y,y.next))Ws(y),y=y.next;return y}function Ni(a,h){if(!a)return a;if(!h)h=a;let p=a,m;do if(m=!1,!p.steiner&&(Zr(p,p.next)||Ve(p.prev,p,p.next)===0)){if(Ws(p),p=h=p.prev,p===p.next)break;m=!0}else p=p.next;while(m||p!==h);return h}function ks(a,h,p,m,g,_,y){if(!a)return;if(!y&&_)Im(a,m,g,_);let x=a,M,S;while(a.prev!==a.next){if(M=a.prev,S=a.next,_?Em(a,m,g,_):Sm(a)){h.push(M.i/p|0),h.push(a.i/p|0),h.push(S.i/p|0),Ws(a),a=S.next,x=S.next;continue}if(a=S,a===x){if(!y)ks(Ni(a),h,p,m,g,_,1);else if(y===1)a=bm(Ni(a),h,p),ks(a,h,p,m,g,_,2);else if(y===2)Tm(a,h,p,m,g,_);break}}}function Sm(a){let h=a.prev,p=a,m=a.next;if(Ve(h,p,m)>=0)return!1;let g=h.x,_=p.x,y=m.x,x=h.y,M=p.y,S=m.y,b=g<_?g<y?g:y:_<y?_:y,v=x<M?x<S?x:S:M<S?M:S,T=g>_?g>y?g:y:_>y?_:y,C=x>M?x>S?x:S:M>S?M:S,I=m.next;while(I!==h){if(I.x>=b&&I.x<=T&&I.y>=v&&I.y<=C&&as(g,x,_,M,y,S,I.x,I.y)&&Ve(I.prev,I,I.next)>=0)return!1;I=I.next}return!0}function Em(a,h,p,m){let g=a.prev,_=a,y=a.next;if(Ve(g,_,y)>=0)return!1;let x=g.x,M=_.x,S=y.x,b=g.y,v=_.y,T=y.y,C=x<M?x<S?x:S:M<S?M:S,I=b<v?b<T?b:T:v<T?v:T,D=x>M?x>S?x:S:M>S?M:S,w=b>v?b>T?b:T:v>T?v:T,A=qa(C,I,h,p,m),G=qa(D,w,h,p,m),{prevZ:F,nextZ:H}=a;while(F&&F.z>=A&&H&&H.z<=G){if(F.x>=C&&F.x<=D&&F.y>=I&&F.y<=w&&F!==g&&F!==y&&as(x,b,M,v,S,T,F.x,F.y)&&Ve(F.prev,F,F.next)>=0)return!1;if(F=F.prevZ,H.x>=C&&H.x<=D&&H.y>=I&&H.y<=w&&H!==g&&H!==y&&as(x,b,M,v,S,T,H.x,H.y)&&Ve(H.prev,H,H.next)>=0)return!1;H=H.nextZ}while(F&&F.z>=A){if(F.x>=C&&F.x<=D&&F.y>=I&&F.y<=w&&F!==g&&F!==y&&as(x,b,M,v,S,T,F.x,F.y)&&Ve(F.prev,F,F.next)>=0)return!1;F=F.prevZ}while(H&&H.z<=G){if(H.x>=C&&H.x<=D&&H.y>=I&&H.y<=w&&H!==g&&H!==y&&as(x,b,M,v,S,T,H.x,H.y)&&Ve(H.prev,H,H.next)>=0)return!1;H=H.nextZ}return!0}function bm(a,h,p){let m=a;do{let g=m.prev,_=m.next.next;if(!Zr(g,_)&&Rc(g,m,m.next,_)&&Gs(g,_)&&Gs(_,g))h.push(g.i/p|0),h.push(m.i/p|0),h.push(_.i/p|0),Ws(m),Ws(m.next),m=a=_;m=m.next}while(m!==a);return Ni(m)}function Tm(a,h,p,m,g,_){let y=a;do{let x=y.next.next;while(x!==y.prev){if(y.i!==x.i&&Um(y,x)){let M=Cc(y,x);y=Ni(y,y.next),M=Ni(M,M.next),ks(y,h,p,m,g,_,0),ks(M,h,p,m,g,_,0);return}x=x.next}y=y.next}while(y!==a)}function wm(a,h,p,m){let g=[],_,y,x,M,S;for(_=0,y=h.length;_<y;_++){if(x=h[_]*m,M=_<y-1?h[_+1]*m:a.length,S=Ac(a,x,M,m,!1),S===S.next)S.steiner=!0;g.push(Lm(S))}g.sort(Am);for(_=0;_<g.length;_++)p=Rm(g[_],p);return p}function Am(a,h){return a.x-h.x}function Rm(a,h){let p=Cm(a,h);if(!p)return h;let m=Cc(p,a);return Ni(m,m.next),Ni(p,p.next)}function Cm(a,h){let p=h,m=-1/0,g,{x:_,y}=a;do{if(y<=p.y&&y>=p.next.y&&p.next.y!==p.y){let T=p.x+(y-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(T<=_&&T>m){if(m=T,g=p.x<p.next.x?p:p.next,T===_)return g}}p=p.next}while(p!==h);if(!g)return null;let x=g,M=g.x,S=g.y,b=1/0,v;p=g;do{if(_>=p.x&&p.x>=M&&_!==p.x&&as(y<S?_:m,y,M,S,y<S?m:_,y,p.x,p.y)){if(v=Math.abs(y-p.y)/(_-p.x),Gs(p,a)&&(v<b||v===b&&(p.x>g.x||p.x===g.x&&Pm(g,p))))g=p,b=v}p=p.next}while(p!==x);return g}function Pm(a,h){return Ve(a.prev,a,h.prev)<0&&Ve(h.next,a,a.next)<0}function Im(a,h,p,m){let g=a;do{if(g.z===0)g.z=qa(g.x,g.y,h,p,m);g.prevZ=g.prev,g.nextZ=g.next,g=g.next}while(g!==a);g.prevZ.nextZ=null,g.prevZ=null,Dm(g)}function Dm(a){let h,p,m,g,_,y,x,M,S=1;do{p=a,a=null,_=null,y=0;while(p){y++,m=p,x=0;for(h=0;h<S;h++)if(x++,m=m.nextZ,!m)break;M=S;while(x>0||M>0&&m){if(x!==0&&(M===0||!m||p.z<=m.z))g=p,p=p.nextZ,x--;else g=m,m=m.nextZ,M--;if(_)_.nextZ=g;else a=g;g.prevZ=_,_=g}p=m}_.nextZ=null,S*=2}while(y>1);return a}function qa(a,h,p,m,g){return a=(a-p)*g|0,h=(h-m)*g|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,h=(h|h<<8)&16711935,h=(h|h<<4)&252645135,h=(h|h<<2)&858993459,h=(h|h<<1)&1431655765,a|h<<1}function Lm(a){let h=a,p=a;do{if(h.x<p.x||h.x===p.x&&h.y<p.y)p=h;h=h.next}while(h!==a);return p}function as(a,h,p,m,g,_,y,x){return(g-y)*(h-x)>=(a-y)*(_-x)&&(a-y)*(m-x)>=(p-y)*(h-x)&&(p-y)*(_-x)>=(g-y)*(m-x)}function Um(a,h){return a.next.i!==h.i&&a.prev.i!==h.i&&!Nm(a,h)&&(Gs(a,h)&&Gs(h,a)&&Fm(a,h)&&(Ve(a.prev,a,h.prev)||Ve(a,h.prev,h))||Zr(a,h)&&Ve(a.prev,a,a.next)>0&&Ve(h.prev,h,h.next)>0)}function Ve(a,h,p){return(h.y-a.y)*(p.x-h.x)-(h.x-a.x)*(p.y-h.y)}function Zr(a,h){return a.x===h.x&&a.y===h.y}function Rc(a,h,p,m){let g=Nr(Ve(a,h,p)),_=Nr(Ve(a,h,m)),y=Nr(Ve(p,m,a)),x=Nr(Ve(p,m,h));if(g!==_&&y!==x)return!0;if(g===0&&Ur(a,p,h))return!0;if(_===0&&Ur(a,m,h))return!0;if(y===0&&Ur(p,a,m))return!0;if(x===0&&Ur(p,h,m))return!0;return!1}function Ur(a,h,p){return h.x<=Math.max(a.x,p.x)&&h.x>=Math.min(a.x,p.x)&&h.y<=Math.max(a.y,p.y)&&h.y>=Math.min(a.y,p.y)}function Nr(a){return a>0?1:a<0?-1:0}function Nm(a,h){let p=a;do{if(p.i!==a.i&&p.next.i!==a.i&&p.i!==h.i&&p.next.i!==h.i&&Rc(p,p.next,a,h))return!0;p=p.next}while(p!==a);return!1}function Gs(a,h){return Ve(a.prev,a,a.next)<0?Ve(a,h,a.next)>=0&&Ve(a,a.prev,h)>=0:Ve(a,h,a.prev)<0||Ve(a,a.next,h)<0}function Fm(a,h){let p=a,m=!1,g=(a.x+h.x)/2,_=(a.y+h.y)/2;do{if(p.y>_!==p.next.y>_&&p.next.y!==p.y&&g<(p.next.x-p.x)*(_-p.y)/(p.next.y-p.y)+p.x)m=!m;p=p.next}while(p!==a);return m}function Cc(a,h){let p=new Ya(a.i,a.x,a.y),m=new Ya(h.i,h.x,h.y),g=a.next,_=h.prev;return a.next=h,h.prev=a,p.next=g,g.prev=p,m.next=p,p.prev=m,_.next=m,m.prev=_,m}function zl(a,h,p,m){let g=new Ya(a,h,p);if(!m)g.prev=g,g.next=g;else g.next=m.next,g.prev=m,m.next.prev=g,m.next=g;return g}function Ws(a){if(a.next.prev=a.prev,a.prev.next=a.next,a.prevZ)a.prevZ.nextZ=a.nextZ;if(a.nextZ)a.nextZ.prevZ=a.prevZ}function Ya(a,h,p){this.i=a,this.x=h,this.y=p,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Om(a,h,p,m){let g=0;for(let _=h,y=p-m;_<p;_+=m)g+=(a[y]-a[_])*(a[_+1]+a[y+1]),y=_;return g}class _i{static area(a){let h=a.length,p=0;for(let m=h-1,g=0;g<h;m=g++)p+=a[m].x*a[g].y-a[g].x*a[m].y;return p*0.5}static isClockWise(a){return _i.area(a)<0}static triangulateShape(a,h){let p=[],m=[],g=[];Hl(a),kl(p,a);let _=a.length;h.forEach(Hl);for(let x=0;x<h.length;x++)m.push(_),_+=h[x].length,kl(p,h[x]);let y=Mm.triangulate(p,m);for(let x=0;x<y.length;x+=3)g.push(y.slice(x,x+3));return g}}function Hl(a){let h=a.length;if(h>2&&a[h-1].equals(a[0]))a.pop()}function kl(a,h){for(let p=0;p<h.length;p++)a.push(h[p].x),a.push(h[p].y)}class Jr extends Qe{constructor(a=new Js([new Et(0.5,0.5),new Et(-0.5,0.5),new Et(-0.5,-0.5),new Et(0.5,-0.5)]),h={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:a,options:h},a=Array.isArray(a)?a:[a];let p=this,m=[],g=[];for(let y=0,x=a.length;y<x;y++){let M=a[y];_(M)}this.setAttribute("position",new Pe(m,3)),this.setAttribute("uv",new Pe(g,2)),this.computeVertexNormals();function _(y){let x=[],M=h.curveSegments!==void 0?h.curveSegments:12,S=h.steps!==void 0?h.steps:1,b=h.depth!==void 0?h.depth:1,v=h.bevelEnabled!==void 0?h.bevelEnabled:!0,T=h.bevelThickness!==void 0?h.bevelThickness:0.2,C=h.bevelSize!==void 0?h.bevelSize:T-0.1,I=h.bevelOffset!==void 0?h.bevelOffset:0,D=h.bevelSegments!==void 0?h.bevelSegments:3,w=h.extrudePath,A=h.UVGenerator!==void 0?h.UVGenerator:Bm,G,F=!1,H,rt,q,Y;if(w)G=w.getSpacedPoints(S),F=!0,v=!1,H=w.computeFrenetFrames(S,!1),rt=new X,q=new X,Y=new X;if(!v)D=0,T=0,C=0,I=0;let ut=y.extractPoints(M),{shape:B,holes:z}=ut;if(!_i.isClockWise(B)){B=B.reverse();for(let xt=0,Ct=z.length;xt<Ct;xt++){let V=z[xt];if(_i.isClockWise(V))z[xt]=V.reverse()}}let at=_i.triangulateShape(B,z),ct=B;for(let xt=0,Ct=z.length;xt<Ct;xt++){let V=z[xt];B=B.concat(V)}function ht(xt,Ct,V){if(!Ct)console.error("THREE.ExtrudeGeometry: vec does not exist");return xt.clone().addScaledVector(Ct,V)}let _t=B.length,J=at.length;function it(xt,Ct,V){let Gt,bt,Yt,Mt=xt.x-Ct.x,oe=xt.y-Ct.y,zt=V.x-xt.x,Vt=V.y-xt.y,W=Mt*Mt+oe*oe,U=Mt*Vt-oe*zt;if(Math.abs(U)>Number.EPSILON){let st=Math.sqrt(W),mt=Math.sqrt(zt*zt+Vt*Vt),yt=Ct.x-oe/st,ft=Ct.y+Mt/st,Qt=V.x-Vt/mt,Dt=V.y+zt/mt,Ft=((Qt-yt)*Vt-(Dt-ft)*zt)/(Mt*Vt-oe*zt);Gt=yt+Mt*Ft-xt.x,bt=ft+oe*Ft-xt.y;let ce=Gt*Gt+bt*bt;if(ce<=2)return new Et(Gt,bt);else Yt=Math.sqrt(ce/2)}else{let st=!1;if(Mt>Number.EPSILON){if(zt>Number.EPSILON)st=!0}else if(Mt<-Number.EPSILON){if(zt<-Number.EPSILON)st=!0}else if(Math.sign(oe)===Math.sign(Vt))st=!0;if(st)Gt=-oe,bt=Mt,Yt=Math.sqrt(W);else Gt=Mt,bt=oe,Yt=Math.sqrt(W/2)}return new Et(Gt/Yt,bt/Yt)}let Z=[];for(let xt=0,Ct=ct.length,V=Ct-1,Gt=xt+1;xt<Ct;xt++,V++,Gt++){if(V===Ct)V=0;if(Gt===Ct)Gt=0;Z[xt]=it(ct[xt],ct[V],ct[Gt])}let Rt=[],L,qt=Z.concat();for(let xt=0,Ct=z.length;xt<Ct;xt++){let V=z[xt];L=[];for(let Gt=0,bt=V.length,Yt=bt-1,Mt=Gt+1;Gt<bt;Gt++,Yt++,Mt++){if(Yt===bt)Yt=0;if(Mt===bt)Mt=0;L[Gt]=it(V[Gt],V[Yt],V[Mt])}Rt.push(L),qt=qt.concat(L)}for(let xt=0;xt<D;xt++){let Ct=xt/D,V=T*Math.cos(Ct*Math.PI/2),Gt=C*Math.sin(Ct*Math.PI/2)+I;for(let bt=0,Yt=ct.length;bt<Yt;bt++){let Mt=ht(ct[bt],Z[bt],Gt);Wt(Mt.x,Mt.y,-V)}for(let bt=0,Yt=z.length;bt<Yt;bt++){let Mt=z[bt];L=Rt[bt];for(let oe=0,zt=Mt.length;oe<zt;oe++){let Vt=ht(Mt[oe],L[oe],Gt);Wt(Vt.x,Vt.y,-V)}}}let ee=C+I;for(let xt=0;xt<_t;xt++){let Ct=v?ht(B[xt],qt[xt],ee):B[xt];if(!F)Wt(Ct.x,Ct.y,0);else q.copy(H.normals[0]).multiplyScalar(Ct.x),rt.copy(H.binormals[0]).multiplyScalar(Ct.y),Y.copy(G[0]).add(q).add(rt),Wt(Y.x,Y.y,Y.z)}for(let xt=1;xt<=S;xt++)for(let Ct=0;Ct<_t;Ct++){let V=v?ht(B[Ct],qt[Ct],ee):B[Ct];if(!F)Wt(V.x,V.y,b/S*xt);else q.copy(H.normals[xt]).multiplyScalar(V.x),rt.copy(H.binormals[xt]).multiplyScalar(V.y),Y.copy(G[xt]).add(q).add(rt),Wt(Y.x,Y.y,Y.z)}for(let xt=D-1;xt>=0;xt--){let Ct=xt/D,V=T*Math.cos(Ct*Math.PI/2),Gt=C*Math.sin(Ct*Math.PI/2)+I;for(let bt=0,Yt=ct.length;bt<Yt;bt++){let Mt=ht(ct[bt],Z[bt],Gt);Wt(Mt.x,Mt.y,b+V)}for(let bt=0,Yt=z.length;bt<Yt;bt++){let Mt=z[bt];L=Rt[bt];for(let oe=0,zt=Mt.length;oe<zt;oe++){let Vt=ht(Mt[oe],L[oe],Gt);if(!F)Wt(Vt.x,Vt.y,b+V);else Wt(Vt.x,Vt.y+G[S-1].y,G[S-1].x+V)}}}pt(),wt();function pt(){let xt=m.length/3;if(v){let Ct=0,V=_t*Ct;for(let Gt=0;Gt<J;Gt++){let bt=at[Gt];It(bt[2]+V,bt[1]+V,bt[0]+V)}Ct=S+D*2,V=_t*Ct;for(let Gt=0;Gt<J;Gt++){let bt=at[Gt];It(bt[0]+V,bt[1]+V,bt[2]+V)}}else{for(let Ct=0;Ct<J;Ct++){let V=at[Ct];It(V[2],V[1],V[0])}for(let Ct=0;Ct<J;Ct++){let V=at[Ct];It(V[0]+_t*S,V[1]+_t*S,V[2]+_t*S)}}p.addGroup(xt,m.length/3-xt,0)}function wt(){let xt=m.length/3,Ct=0;$t(ct,Ct),Ct+=ct.length;for(let V=0,Gt=z.length;V<Gt;V++){let bt=z[V];$t(bt,Ct),Ct+=bt.length}p.addGroup(xt,m.length/3-xt,1)}function $t(xt,Ct){let V=xt.length;while(--V>=0){let Gt=V,bt=V-1;if(bt<0)bt=xt.length-1;for(let Yt=0,Mt=S+D*2;Yt<Mt;Yt++){let oe=_t*Yt,zt=_t*(Yt+1),Vt=Ct+Gt+oe,W=Ct+bt+oe,U=Ct+bt+zt,st=Ct+Gt+zt;se(Vt,W,U,st)}}}function Wt(xt,Ct,V){x.push(xt),x.push(Ct),x.push(V)}function It(xt,Ct,V){ye(xt),ye(Ct),ye(V);let Gt=m.length/3,bt=A.generateTopUV(p,m,Gt-3,Gt-2,Gt-1);re(bt[0]),re(bt[1]),re(bt[2])}function se(xt,Ct,V,Gt){ye(xt),ye(Ct),ye(Gt),ye(Ct),ye(V),ye(Gt);let bt=m.length/3,Yt=A.generateSideWallUV(p,m,bt-6,bt-3,bt-2,bt-1);re(Yt[0]),re(Yt[1]),re(Yt[3]),re(Yt[1]),re(Yt[2]),re(Yt[3])}function ye(xt){m.push(x[xt*3+0]),m.push(x[xt*3+1]),m.push(x[xt*3+2])}function re(xt){g.push(xt.x),g.push(xt.y)}}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}toJSON(){let a=super.toJSON(),h=this.parameters.shapes,p=this.parameters.options;return zm(h,p,a)}static fromJSON(a,h){let p=[];for(let g=0,_=a.shapes.length;g<_;g++){let y=h[a.shapes[g]];p.push(y)}let m=a.options.extrudePath;if(m!==void 0)a.options.extrudePath=new Va[m.type]().fromJSON(m);return new Jr(p,a.options)}}var Bm={generateTopUV:function(a,h,p,m,g){let _=h[p*3],y=h[p*3+1],x=h[m*3],M=h[m*3+1],S=h[g*3],b=h[g*3+1];return[new Et(_,y),new Et(x,M),new Et(S,b)]},generateSideWallUV:function(a,h,p,m,g,_){let y=h[p*3],x=h[p*3+1],M=h[p*3+2],S=h[m*3],b=h[m*3+1],v=h[m*3+2],T=h[g*3],C=h[g*3+1],I=h[g*3+2],D=h[_*3],w=h[_*3+1],A=h[_*3+2];if(Math.abs(x-b)<Math.abs(y-S))return[new Et(y,1-M),new Et(S,1-v),new Et(T,1-I),new Et(D,1-A)];else return[new Et(x,1-M),new Et(b,1-v),new Et(C,1-I),new Et(w,1-A)]}};function zm(a,h,p){if(p.shapes=[],Array.isArray(a))for(let m=0,g=a.length;m<g;m++){let _=a[m];p.shapes.push(_.uuid)}else p.shapes.push(a.uuid);if(p.options=Object.assign({},h),h.extrudePath!==void 0)p.options.extrudePath=h.extrudePath.toJSON();return p}class $r extends Qe{constructor(a=new Js([new Et(0,0.5),new Et(-0.5,-0.5),new Et(0.5,-0.5)]),h=12){super();this.type="ShapeGeometry",this.parameters={shapes:a,curveSegments:h};let p=[],m=[],g=[],_=[],y=0,x=0;if(Array.isArray(a)===!1)M(a);else for(let S=0;S<a.length;S++)M(a[S]),this.addGroup(y,x,S),y+=x,x=0;this.setIndex(p),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(_,2));function M(S){let b=m.length/3,v=S.extractPoints(h),{shape:T,holes:C}=v;if(_i.isClockWise(T)===!1)T=T.reverse();for(let D=0,w=C.length;D<w;D++){let A=C[D];if(_i.isClockWise(A)===!0)C[D]=A.reverse()}let I=_i.triangulateShape(T,C);for(let D=0,w=C.length;D<w;D++){let A=C[D];T=T.concat(A)}for(let D=0,w=T.length;D<w;D++){let A=T[D];m.push(A.x,A.y,0),g.push(0,0,1),_.push(A.x,A.y)}for(let D=0,w=I.length;D<w;D++){let A=I[D],G=A[0]+b,F=A[1]+b,H=A[2]+b;p.push(G,F,H),x+=3}}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}toJSON(){let a=super.toJSON(),h=this.parameters.shapes;return Hm(h,a)}static fromJSON(a,h){let p=[];for(let m=0,g=a.shapes.length;m<g;m++){let _=h[a.shapes[m]];p.push(_)}return new $r(p,a.curveSegments)}}function Hm(a,h){if(h.shapes=[],Array.isArray(a))for(let p=0,m=a.length;p<m;p++){let g=a[p];h.shapes.push(g.uuid)}else h.shapes.push(a.uuid);return h}class ps extends Qe{constructor(a=1,h=32,p=16,m=0,g=Math.PI*2,_=0,y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:a,widthSegments:h,heightSegments:p,phiStart:m,phiLength:g,thetaStart:_,thetaLength:y},h=Math.max(3,Math.floor(h)),p=Math.max(2,Math.floor(p));let x=Math.min(_+y,Math.PI),M=0,S=[],b=new X,v=new X,T=[],C=[],I=[],D=[];for(let w=0;w<=p;w++){let A=[],G=w/p,F=0;if(w===0&&_===0)F=0.5/h;else if(w===p&&x===Math.PI)F=-0.5/h;for(let H=0;H<=h;H++){let rt=H/h;b.x=-a*Math.cos(m+rt*g)*Math.sin(_+G*y),b.y=a*Math.cos(_+G*y),b.z=a*Math.sin(m+rt*g)*Math.sin(_+G*y),C.push(b.x,b.y,b.z),v.copy(b).normalize(),I.push(v.x,v.y,v.z),D.push(rt+F,1-G),A.push(M++)}S.push(A)}for(let w=0;w<p;w++)for(let A=0;A<h;A++){let G=S[w][A+1],F=S[w][A],H=S[w+1][A],rt=S[w+1][A+1];if(w!==0||_>0)T.push(G,F,rt);if(w!==p-1||x<Math.PI)T.push(F,H,rt)}this.setIndex(T),this.setAttribute("position",new Pe(C,3)),this.setAttribute("normal",new Pe(I,3)),this.setAttribute("uv",new Pe(D,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new ps(a.radius,a.widthSegments,a.heightSegments,a.phiStart,a.phiLength,a.thetaStart,a.thetaLength)}}class ai extends Qe{constructor(a=1,h=0.4,p=12,m=48,g=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:a,tube:h,radialSegments:p,tubularSegments:m,arc:g},p=Math.floor(p),m=Math.floor(m);let _=[],y=[],x=[],M=[],S=new X,b=new X,v=new X;for(let T=0;T<=p;T++)for(let C=0;C<=m;C++){let I=C/m*g,D=T/p*Math.PI*2;b.x=(a+h*Math.cos(D))*Math.cos(I),b.y=(a+h*Math.cos(D))*Math.sin(I),b.z=h*Math.sin(D),y.push(b.x,b.y,b.z),S.x=a*Math.cos(I),S.y=a*Math.sin(I),v.subVectors(b,S).normalize(),x.push(v.x,v.y,v.z),M.push(C/m),M.push(T/p)}for(let T=1;T<=p;T++)for(let C=1;C<=m;C++){let I=(m+1)*T+C-1,D=(m+1)*(T-1)+C-1,w=(m+1)*(T-1)+C,A=(m+1)*T+C;_.push(I,D,A),_.push(D,w,A)}this.setIndex(_),this.setAttribute("position",new Pe(y,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(M,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new ai(a.radius,a.tube,a.radialSegments,a.tubularSegments,a.arc)}}class go extends vi{static get type(){return"ShadowMaterial"}constructor(a){super();this.isShadowMaterial=!0,this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.fog=a.fog,this}}class Zn extends vi{static get type(){return"MeshStandardMaterial"}constructor(a){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.defines={STANDARD:""},this.color.copy(a.color),this.roughness=a.roughness,this.metalness=a.metalness,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.roughnessMap=a.roughnessMap,this.metalnessMap=a.metalnessMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.envMapIntensity=a.envMapIntensity,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}class _o extends Zn{static get type(){return"MeshPhysicalMaterial"}constructor(a){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(h){this.ior=(1+0.4*h)/(1-0.4*h)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(a)}get anisotropy(){return this._anisotropy}set anisotropy(a){if(this._anisotropy>0!==a>0)this.version++;this._anisotropy=a}get clearcoat(){return this._clearcoat}set clearcoat(a){if(this._clearcoat>0!==a>0)this.version++;this._clearcoat=a}get iridescence(){return this._iridescence}set iridescence(a){if(this._iridescence>0!==a>0)this.version++;this._iridescence=a}get dispersion(){return this._dispersion}set dispersion(a){if(this._dispersion>0!==a>0)this.version++;this._dispersion=a}get sheen(){return this._sheen}set sheen(a){if(this._sheen>0!==a>0)this.version++;this._sheen=a}get transmission(){return this._transmission}set transmission(a){if(this._transmission>0!==a>0)this.version++;this._transmission=a}copy(a){return super.copy(a),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=a.anisotropy,this.anisotropyRotation=a.anisotropyRotation,this.anisotropyMap=a.anisotropyMap,this.clearcoat=a.clearcoat,this.clearcoatMap=a.clearcoatMap,this.clearcoatRoughness=a.clearcoatRoughness,this.clearcoatRoughnessMap=a.clearcoatRoughnessMap,this.clearcoatNormalMap=a.clearcoatNormalMap,this.clearcoatNormalScale.copy(a.clearcoatNormalScale),this.dispersion=a.dispersion,this.ior=a.ior,this.iridescence=a.iridescence,this.iridescenceMap=a.iridescenceMap,this.iridescenceIOR=a.iridescenceIOR,this.iridescenceThicknessRange=[...a.iridescenceThicknessRange],this.iridescenceThicknessMap=a.iridescenceThicknessMap,this.sheen=a.sheen,this.sheenColor.copy(a.sheenColor),this.sheenColorMap=a.sheenColorMap,this.sheenRoughness=a.sheenRoughness,this.sheenRoughnessMap=a.sheenRoughnessMap,this.transmission=a.transmission,this.transmissionMap=a.transmissionMap,this.thickness=a.thickness,this.thicknessMap=a.thicknessMap,this.attenuationDistance=a.attenuationDistance,this.attenuationColor.copy(a.attenuationColor),this.specularIntensity=a.specularIntensity,this.specularIntensityMap=a.specularIntensityMap,this.specularColor.copy(a.specularColor),this.specularColorMap=a.specularColorMap,this}}function Fr(a,h,p){if(!a||!p&&a.constructor===h)return a;if(typeof h.BYTES_PER_ELEMENT==="number")return new h(a);return Array.prototype.slice.call(a)}function km(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}class $s{constructor(a,h,p,m){this.parameterPositions=a,this._cachedIndex=0,this.resultBuffer=m!==void 0?m:new h.constructor(p),this.sampleValues=h,this.valueSize=p,this.settings=null,this.DefaultSettings_={}}evaluate(a){let h=this.parameterPositions,p=this._cachedIndex,m=h[p],g=h[p-1];n:{t:{let _;e:{i:if(!(a<m)){for(let y=p+2;;){if(m===void 0){if(a<g)break i;return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}if(p===y)break;if(g=m,m=h[++p],a<m)break t}_=h.length;break e}if(!(a>=g)){let y=h[1];if(a<y)p=2,g=y;for(let x=p-2;;){if(g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(p===x)break;if(m=g,g=h[--p-1],a>=g)break t}_=p,p=0;break e}break n}while(p<_){let y=p+_>>>1;if(a<h[y])_=y;else p=y+1}if(m=h[p],g=h[p-1],g===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(m===void 0)return p=h.length,this._cachedIndex=p,this.copySampleValue_(p-1)}this._cachedIndex=p,this.intervalChanged_(p,g,m)}return this.interpolate_(p,g,a,m)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(a){let h=this.resultBuffer,p=this.sampleValues,m=this.valueSize,g=a*m;for(let _=0;_!==m;++_)h[_]=p[g+_];return h}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Pc extends $s{constructor(a,h,p,m){super(a,h,p,m);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(a,h,p){let m=this.parameterPositions,g=a-2,_=a+1,y=m[g],x=m[_];if(y===void 0)switch(this.getSettings_().endingStart){case 2401:g=a,y=2*h-p;break;case 2402:g=m.length-2,y=h+m[g]-m[g+1];break;default:g=a,y=p}if(x===void 0)switch(this.getSettings_().endingEnd){case 2401:_=a,x=2*p-h;break;case 2402:_=1,x=p+m[1]-m[0];break;default:_=a-1,x=h}let M=(p-h)*0.5,S=this.valueSize;this._weightPrev=M/(h-y),this._weightNext=M/(x-p),this._offsetPrev=g*S,this._offsetNext=_*S}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=a*y,M=x-y,S=this._offsetPrev,b=this._offsetNext,v=this._weightPrev,T=this._weightNext,C=(p-h)/(m-h),I=C*C,D=I*C,w=-v*D+2*v*I-v*C,A=(1+v)*D+(-1.5-2*v)*I+(-0.5+v)*C+1,G=(-1-T)*D+(1.5+T)*I+0.5*C,F=T*D-T*I;for(let H=0;H!==y;++H)g[H]=w*_[S+H]+A*_[M+H]+G*_[x+H]+F*_[b+H];return g}}class Ic extends $s{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=a*y,M=x-y,S=(p-h)/(m-h),b=1-S;for(let v=0;v!==y;++v)g[v]=_[M+v]*b+_[x+v]*S;return g}}class Dc extends $s{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a){return this.copySampleValue_(a-1)}}class Jn{constructor(a,h,p,m){if(a===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(h===void 0||h.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a,this.times=Fr(h,this.TimeBufferType),this.values=Fr(p,this.ValueBufferType),this.setInterpolation(m||this.DefaultInterpolation)}static toJSON(a){let h=a.constructor,p;if(h.toJSON!==this.toJSON)p=h.toJSON(a);else{p={name:a.name,times:Fr(a.times,Array),values:Fr(a.values,Array)};let m=a.getInterpolation();if(m!==a.DefaultInterpolation)p.interpolation=m}return p.type=a.ValueTypeName,p}InterpolantFactoryMethodDiscrete(a){return new Dc(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodLinear(a){return new Ic(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodSmooth(a){return new Pc(this.times,this.values,this.getValueSize(),a)}setInterpolation(a){let h;switch(a){case 2300:h=this.InterpolantFactoryMethodDiscrete;break;case 2301:h=this.InterpolantFactoryMethodLinear;break;case 2302:h=this.InterpolantFactoryMethodSmooth;break}if(h===void 0){let p="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(p);return console.warn("THREE.KeyframeTrack:",p),this}return this.createInterpolant=h,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(a){if(a!==0){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]+=a}return this}scale(a){if(a!==1){let h=this.times;for(let p=0,m=h.length;p!==m;++p)h[p]*=a}return this}trim(a,h){let p=this.times,m=p.length,g=0,_=m-1;while(g!==m&&p[g]<a)++g;while(_!==-1&&p[_]>h)--_;if(++_,g!==0||_!==m){if(g>=_)_=Math.max(_,1),g=_-1;let y=this.getValueSize();this.times=p.slice(g,_),this.values=this.values.slice(g*y,_*y)}return this}validate(){let a=!0,h=this.getValueSize();if(h-Math.floor(h)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1;let p=this.times,m=this.values,g=p.length;if(g===0)console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1;let _=null;for(let y=0;y!==g;y++){let x=p[y];if(typeof x==="number"&&isNaN(x)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,y,x),a=!1;break}if(_!==null&&_>x){console.error("THREE.KeyframeTrack: Out of order keys.",this,y,x,_),a=!1;break}_=x}if(m!==void 0){if(km(m))for(let y=0,x=m.length;y!==x;++y){let M=m[y];if(isNaN(M)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,y,M),a=!1;break}}}return a}optimize(){let a=this.times.slice(),h=this.values.slice(),p=this.getValueSize(),m=this.getInterpolation()===2302,g=a.length-1,_=1;for(let y=1;y<g;++y){let x=!1,M=a[y],S=a[y+1];if(M!==S&&(y!==1||M!==a[0]))if(!m){let b=y*p,v=b-p,T=b+p;for(let C=0;C!==p;++C){let I=h[b+C];if(I!==h[v+C]||I!==h[T+C]){x=!0;break}}}else x=!0;if(x){if(y!==_){a[_]=a[y];let b=y*p,v=_*p;for(let T=0;T!==p;++T)h[v+T]=h[b+T]}++_}}if(g>0){a[_]=a[g];for(let y=g*p,x=_*p,M=0;M!==p;++M)h[x+M]=h[y+M];++_}if(_!==a.length)this.times=a.slice(0,_),this.values=h.slice(0,_*p);else this.times=a,this.values=h;return this}clone(){let a=this.times.slice(),h=this.values.slice(),m=new this.constructor(this.name,a,h);return m.createInterpolant=this.createInterpolant,m}}Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=2301;class ms extends Jn{constructor(a,h,p){super(a,h,p)}}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=2300;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Lc extends Jn{}Lc.prototype.ValueTypeName="color";class Uc extends Jn{}Uc.prototype.ValueTypeName="number";class Nc extends $s{constructor(a,h,p,m){super(a,h,p,m)}interpolate_(a,h,p,m){let g=this.resultBuffer,_=this.sampleValues,y=this.valueSize,x=(p-h)/(m-h),M=a*y;for(let S=M+y;M!==S;M+=4)In.slerpFlat(g,0,_,M-y,_,M,x);return g}}class xo extends Jn{InterpolantFactoryMethodLinear(a){return new Nc(this.times,this.values,this.getValueSize(),a)}}xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Jn{constructor(a,h,p){super(a,h,p)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=2300;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fc extends Jn{}Fc.prototype.ValueTypeName="vector";class Oc{constructor(a,h,p){let m=this,g=!1,_=0,y=0,x=void 0,M=[];this.onStart=void 0,this.onLoad=a,this.onProgress=h,this.onError=p,this.itemStart=function(S){if(y++,g===!1){if(m.onStart!==void 0)m.onStart(S,_,y)}g=!0},this.itemEnd=function(S){if(_++,m.onProgress!==void 0)m.onProgress(S,_,y);if(_===y){if(g=!1,m.onLoad!==void 0)m.onLoad()}},this.itemError=function(S){if(m.onError!==void 0)m.onError(S)},this.resolveURL=function(S){if(x)return x(S);return S},this.setURLModifier=function(S){return x=S,this},this.addHandler=function(S,b){return M.push(S,b),this},this.removeHandler=function(S){let b=M.indexOf(S);if(b!==-1)M.splice(b,2);return this},this.getHandler=function(S){for(let b=0,v=M.length;b<v;b+=2){let T=M[b],C=M[b+1];if(T.global)T.lastIndex=0;if(T.test(S))return C}return null}}}var Gm=new Oc;class Bc{constructor(a){this.manager=a!==void 0?a:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(a,h){let p=this;return new Promise(function(m,g){p.load(a,m,h,g)})}parse(){}setCrossOrigin(a){return this.crossOrigin=a,this}setWithCredentials(a){return this.withCredentials=a,this}setPath(a){return this.path=a,this}setResourcePath(a){return this.resourcePath=a,this}setRequestHeader(a){return this.requestHeader=a,this}}Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ks extends qe{constructor(a,h=1){super();this.isLight=!0,this.type="Light",this.color=new xe(a),this.intensity=h}dispose(){}copy(a,h){return super.copy(a,h),this.color.copy(a.color),this.intensity=a.intensity,this}toJSON(a){let h=super.toJSON(a);if(h.object.color=this.color.getHex(),h.object.intensity=this.intensity,this.groundColor!==void 0)h.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)h.object.distance=this.distance;if(this.angle!==void 0)h.object.angle=this.angle;if(this.decay!==void 0)h.object.decay=this.decay;if(this.penumbra!==void 0)h.object.penumbra=this.penumbra;if(this.shadow!==void 0)h.object.shadow=this.shadow.toJSON();if(this.target!==void 0)h.object.target=this.target.uuid;return h}}class yo extends Ks{constructor(a,h,p){super(a,p);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(h)}copy(a,h){return super.copy(a,h),this.groundColor.copy(a.groundColor),this}}var Ha=new Ce,Gl=new X,Wl=new X;class Kr{constructor(a){this.camera=a,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(a){let h=this.camera,p=this.matrix;Gl.setFromMatrixPosition(a.matrixWorld),h.position.copy(Gl),Wl.setFromMatrixPosition(a.target.matrixWorld),h.lookAt(Wl),h.updateMatrixWorld(),Ha.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),p.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),p.multiply(Ha)}getViewport(a){return this._viewports[a]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(a){return this.camera=a.camera.clone(),this.intensity=a.intensity,this.bias=a.bias,this.radius=a.radius,this.mapSize.copy(a.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let a={};if(this.intensity!==1)a.intensity=this.intensity;if(this.bias!==0)a.bias=this.bias;if(this.normalBias!==0)a.normalBias=this.normalBias;if(this.radius!==1)a.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)a.mapSize=this.mapSize.toArray();return a.camera=this.camera.toJSON(!1).object,delete a.camera.matrix,a}}class zc extends Kr{constructor(){super(new ln(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(a){let h=this.camera,p=cs*2*a.angle*this.focus,m=this.mapSize.width/this.mapSize.height,g=a.distance||h.far;if(p!==h.fov||m!==h.aspect||g!==h.far)h.fov=p,h.aspect=m,h.far=g,h.updateProjectionMatrix();super.updateMatrices(a)}copy(a){return super.copy(a),this.focus=a.focus,this}}class vo extends Ks{constructor(a,h,p=0,m=Math.PI/3,g=0,_=2){super(a,h);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.distance=p,this.angle=m,this.penumbra=g,this.decay=_,this.map=null,this.shadow=new zc}get power(){return this.intensity*Math.PI}set power(a){this.intensity=a/Math.PI}dispose(){this.shadow.dispose()}copy(a,h){return super.copy(a,h),this.distance=a.distance,this.angle=a.angle,this.penumbra=a.penumbra,this.decay=a.decay,this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}var Vl=new Ce,Ls=new X,ka=new X;class Hc extends Kr{constructor(){super(new ln(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(a,h=0){let p=this.camera,m=this.matrix,g=a.distance||p.far;if(g!==p.far)p.far=g,p.updateProjectionMatrix();Ls.setFromMatrixPosition(a.matrixWorld),p.position.copy(Ls),ka.copy(p.position),ka.add(this._cubeDirections[h]),p.up.copy(this._cubeUps[h]),p.lookAt(ka),p.updateMatrixWorld(),m.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Vl.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl)}}class js extends Ks{constructor(a,h,p=0,m=2){super(a,h);this.isPointLight=!0,this.type="PointLight",this.distance=p,this.decay=m,this.shadow=new Hc}get power(){return this.intensity*4*Math.PI}set power(a){this.intensity=a/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(a,h){return super.copy(a,h),this.distance=a.distance,this.decay=a.decay,this.shadow=a.shadow.clone(),this}}class kc extends Kr{constructor(){super(new Xs(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Mo extends Ks{constructor(a,h){super(a,h);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new kc}dispose(){this.shadow.dispose()}copy(a){return super.copy(a),this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}var So="\\[\\]\\.:\\/",Wm=new RegExp("["+So+"]","g"),Eo="[^"+So+"]",Vm="[^"+So.replace("\\.","")+"]",Xm=/((?:WC+[\/:])*)/.source.replace("WC",Eo),qm=/(WCOD+)?/.source.replace("WCOD",Vm),Ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eo),Zm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eo),Jm=new RegExp("^"+Xm+qm+Ym+Zm+"$"),$m=["material","materials","bones","map"];class Gc{constructor(a,h,p){let m=p||Ue.parseTrackName(h);this._targetGroup=a,this._bindings=a.subscribe_(h,m)}getValue(a,h){this.bind();let p=this._targetGroup.nCachedObjects_,m=this._bindings[p];if(m!==void 0)m.getValue(a,h)}setValue(a,h){let p=this._bindings;for(let m=this._targetGroup.nCachedObjects_,g=p.length;m!==g;++m)p[m].setValue(a,h)}bind(){let a=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=a.length;h!==p;++h)a[h].bind()}unbind(){let a=this._bindings;for(let h=this._targetGroup.nCachedObjects_,p=a.length;h!==p;++h)a[h].unbind()}}class Ue{constructor(a,h,p){this.path=h,this.parsedPath=p||Ue.parseTrackName(h),this.node=Ue.findNode(a,this.parsedPath.nodeName),this.rootNode=a,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(a,h,p){if(!(a&&a.isAnimationObjectGroup))return new Ue(a,h,p);else return new Ue.Composite(a,h,p)}static sanitizeNodeName(a){return a.replace(/\s/g,"_").replace(Wm,"")}static parseTrackName(a){let h=Jm.exec(a);if(h===null)throw Error("PropertyBinding: Cannot parse trackName: "+a);let p={nodeName:h[2],objectName:h[3],objectIndex:h[4],propertyName:h[5],propertyIndex:h[6]},m=p.nodeName&&p.nodeName.lastIndexOf(".");if(m!==void 0&&m!==-1){let g=p.nodeName.substring(m+1);if($m.indexOf(g)!==-1)p.nodeName=p.nodeName.substring(0,m),p.objectName=g}if(p.propertyName===null||p.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return p}static findNode(a,h){if(h===void 0||h===""||h==="."||h===-1||h===a.name||h===a.uuid)return a;if(a.skeleton){let p=a.skeleton.getBoneByName(h);if(p!==void 0)return p}if(a.children){let p=function(g){for(let _=0;_<g.length;_++){let y=g[_];if(y.name===h||y.uuid===h)return y;let x=p(y.children);if(x)return x}return null},m=p(a.children);if(m)return m}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(a,h){a[h]=this.targetObject[this.propertyName]}_getValue_array(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)a[h++]=p[m]}_getValue_arrayElement(a,h){a[h]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(a,h){this.resolvedProperty.toArray(a,h)}_setValue_direct(a,h){this.targetObject[this.propertyName]=a[h]}_setValue_direct_setNeedsUpdate(a,h){this.targetObject[this.propertyName]=a[h],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(a,h){this.targetObject[this.propertyName]=a[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++]}_setValue_array_setNeedsUpdate(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(a,h){let p=this.resolvedProperty;for(let m=0,g=p.length;m!==g;++m)p[m]=a[h++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(a,h){this.resolvedProperty[this.propertyIndex]=a[h]}_setValue_arrayElement_setNeedsUpdate(a,h){this.resolvedProperty[this.propertyIndex]=a[h],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(a,h){this.resolvedProperty[this.propertyIndex]=a[h],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(a,h){this.resolvedProperty.fromArray(a,h)}_setValue_fromArray_setNeedsUpdate(a,h){this.resolvedProperty.fromArray(a,h),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(a,h){this.resolvedProperty.fromArray(a,h),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(a,h){this.bind(),this.getValue(a,h)}_setValue_unbound(a,h){this.bind(),this.setValue(a,h)}bind(){let a=this.node,h=this.parsedPath,{objectName:p,propertyName:m,propertyIndex:g}=h;if(!a)a=Ue.findNode(this.rootNode,h.nodeName),this.node=a;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!a){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(p){let M=h.objectIndex;switch(p){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(let S=0;S<a.length;S++)if(a[S].name===M){M=S;break}break;case"map":if("map"in a){a=a.map;break}if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}a=a.material.map;break;default:if(a[p]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[p]}if(M!==void 0){if(a[M]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[M]}}let _=a[m];if(_===void 0){let M=h.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+M+"."+m+" but it wasn't found.",a);return}let y=this.Versioning.None;if(this.targetObject=a,a.needsUpdate!==void 0)y=this.Versioning.NeedsUpdate;else if(a.matrixWorldNeedsUpdate!==void 0)y=this.Versioning.MatrixWorldNeedsUpdate;let x=this.BindingType.Direct;if(g!==void 0){if(m==="morphTargetInfluences"){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(a.morphTargetDictionary[g]!==void 0)g=a.morphTargetDictionary[g]}x=this.BindingType.ArrayElement,this.resolvedProperty=_,this.propertyIndex=g}else if(_.fromArray!==void 0&&_.toArray!==void 0)x=this.BindingType.HasFromToArray,this.resolvedProperty=_;else if(Array.isArray(_))x=this.BindingType.EntireArray,this.resolvedProperty=_;else this.propertyName=m;this.getValue=this.GetterByBindingType[x],this.setValue=this.SetterByBindingTypeAndVersioning[x][y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ue.Composite=Gc;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _0=new Float32Array(1);var Xl=new Ce;class bo{constructor(a,h,p=0,m=1/0){this.ray=new us(a,h),this.near=p,this.far=m,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(a,h){this.ray.set(a,h)}setFromCamera(a,h){if(h.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(h.matrixWorld),this.ray.direction.set(a.x,a.y,0.5).unproject(h).sub(this.ray.origin).normalize(),this.camera=h;else if(h.isOrthographicCamera)this.ray.origin.set(a.x,a.y,(h.near+h.far)/(h.near-h.far)).unproject(h),this.ray.direction.set(0,0,-1).transformDirection(h.matrixWorld),this.camera=h;else console.error("THREE.Raycaster: Unsupported camera type: "+h.type)}setFromXRController(a){return Xl.identity().extractRotation(a.matrixWorld),this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(a,h=!0,p=[]){return Za(a,this,p,h),p.sort(ql),p}intersectObjects(a,h=!0,p=[]){for(let m=0,g=a.length;m<g;m++)Za(a[m],this,p,h);return p.sort(ql),p}}function ql(a,h){return a.distance-h.distance}function Za(a,h,p,m){let g=!0;if(a.layers.test(h.layers)){if(a.raycast(h,p)===!1)g=!1}if(g===!0&&m===!0){let _=a.children;for(let y=0,x=_.length;y<x;y++)Za(_[y],h,p,!0)}}class jr{constructor(a=1,h=0,p=0){return this.radius=a,this.phi=h,this.theta=p,this}set(a,h,p){return this.radius=a,this.phi=h,this.theta=p,this}copy(a){return this.radius=a.radius,this.phi=a.phi,this.theta=a.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z)}setFromCartesianCoords(a,h,p){if(this.radius=Math.sqrt(a*a+h*h+p*p),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(a,p),this.phi=Math.acos(Ye(h/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class To extends yi{constructor(a,h=null){super();this.object=a,this.domElement=h,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="170";var Wc={type:"change"},Ao={type:"start"},Xc={type:"end"},Qr=new us,Vc=new En,jm=Math.cos(70*$l.DEG2RAD),$e=new X,mn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wo=0.000001;class ta extends To{constructor(a,h=null){super(a,h);if(this.state=Fe.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new In,this._lastTargetPosition=new X,this._quat=new In().setFromUnitVectors(a.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jr,this._sphericalDelta=new jr,this._scale=1,this._panOffset=new X,this._rotateStart=new Et,this._rotateEnd=new Et,this._rotateDelta=new Et,this._panStart=new Et,this._panEnd=new Et,this._panDelta=new Et,this._dollyStart=new Et,this._dollyEnd=new Et,this._dollyDelta=new Et,this._dollyDirection=new X,this._mouse=new Et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t0.bind(this),this._onPointerDown=Qm.bind(this),this._onPointerUp=e0.bind(this),this._onContextMenu=l0.bind(this),this._onMouseWheel=s0.bind(this),this._onKeyDown=r0.bind(this),this._onTouchStart=a0.bind(this),this._onTouchMove=o0.bind(this),this._onMouseDown=n0.bind(this),this._onMouseMove=i0.bind(this),this._interceptControlDown=c0.bind(this),this._interceptControlUp=h0.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(a){a.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=a}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wc),this.update(),this.state=Fe.NONE}update(a=null){let h=this.object.position;if($e.copy(h).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===Fe.NONE)this._rotateLeft(this._getAutoRotationAngle(a));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let p=this.minAzimuthAngle,m=this.maxAzimuthAngle;if(isFinite(p)&&isFinite(m)){if(p<-Math.PI)p+=mn;else if(p>Math.PI)p-=mn;if(m<-Math.PI)m+=mn;else if(m>Math.PI)m-=mn;if(p<=m)this._spherical.theta=Math.max(p,Math.min(m,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(p+m)/2?Math.max(p,this._spherical.theta):Math.min(m,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let g=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let _=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),g=_!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),h.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let _=null;if(this.object.isPerspectiveCamera){let y=$e.length();_=this._clampDistance(y*this._scale);let x=y-_;this.object.position.addScaledVector(this._dollyDirection,x),this.object.updateMatrixWorld(),g=!!x}else if(this.object.isOrthographicCamera){let y=new X(this._mouse.x,this._mouse.y,0);y.unproject(this.object);let x=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),g=x!==this.object.zoom;let M=new X(this._mouse.x,this._mouse.y,0);M.unproject(this.object),this.object.position.sub(M).add(y),this.object.updateMatrixWorld(),_=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(_!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(_).add(this.object.position);else if(Qr.origin.copy(this.object.position),Qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qr.direction))<jm)this.object.lookAt(this.target);else Vc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qr.intersectPlane(Vc,this.target)}else if(this.object.isOrthographicCamera){let _=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),_!==this.object.zoom)this.object.updateProjectionMatrix(),g=!0}if(this._scale=1,this._performCursorZoom=!1,g||this._lastPosition.distanceToSquared(this.object.position)>wo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wo||this._lastTargetPosition.distanceToSquared(this.target)>wo)return this.dispatchEvent(Wc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(a){if(a!==null)return mn/60*this.autoRotateSpeed*a;else return mn/60/60*this.autoRotateSpeed}_getZoomScale(a){let h=Math.abs(a*0.01);return Math.pow(0.95,this.zoomSpeed*h)}_rotateLeft(a){this._sphericalDelta.theta-=a}_rotateUp(a){this._sphericalDelta.phi-=a}_panLeft(a,h){$e.setFromMatrixColumn(h,0),$e.multiplyScalar(-a),this._panOffset.add($e)}_panUp(a,h){if(this.screenSpacePanning===!0)$e.setFromMatrixColumn(h,1);else $e.setFromMatrixColumn(h,0),$e.crossVectors(this.object.up,$e);$e.multiplyScalar(a),this._panOffset.add($e)}_pan(a,h){let p=this.domElement;if(this.object.isPerspectiveCamera){let m=this.object.position;$e.copy(m).sub(this.target);let g=$e.length();g*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*a*g/p.clientHeight,this.object.matrix),this._panUp(2*h*g/p.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(a*(this.object.right-this.object.left)/this.object.zoom/p.clientWidth,this.object.matrix),this._panUp(h*(this.object.top-this.object.bottom)/this.object.zoom/p.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(a){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=a;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(a){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=a;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(a,h){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let p=this.domElement.getBoundingClientRect(),m=a-p.left,g=h-p.top,{width:_,height:y}=p;this._mouse.x=m/_*2-1,this._mouse.y=-(g/y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(a){return Math.max(this.minDistance,Math.min(this.maxDistance,a))}_handleMouseDownRotate(a){this._rotateStart.set(a.clientX,a.clientY)}_handleMouseDownDolly(a){this._updateZoomParameters(a.clientX,a.clientX),this._dollyStart.set(a.clientX,a.clientY)}_handleMouseDownPan(a){this._panStart.set(a.clientX,a.clientY)}_handleMouseMoveRotate(a){this._rotateEnd.set(a.clientX,a.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/h.clientHeight),this._rotateUp(mn*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(a){if(this._dollyEnd.set(a.clientX,a.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(a){this._panEnd.set(a.clientX,a.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(a){if(this._updateZoomParameters(a.clientX,a.clientY),a.deltaY<0)this._dollyIn(this._getZoomScale(a.deltaY));else if(a.deltaY>0)this._dollyOut(this._getZoomScale(a.deltaY));this.update()}_handleKeyDown(a){let h=!1;switch(a.code){case this.keys.UP:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateUp(mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,this.keyPanSpeed);h=!0;break;case this.keys.BOTTOM:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateUp(-mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,-this.keyPanSpeed);h=!0;break;case this.keys.LEFT:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateLeft(mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(this.keyPanSpeed,0);h=!0;break;case this.keys.RIGHT:if(a.ctrlKey||a.metaKey||a.shiftKey)this._rotateLeft(-mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(-this.keyPanSpeed,0);h=!0;break}if(h)a.preventDefault(),this.update()}_handleTouchStartRotate(a){if(this._pointers.length===1)this._rotateStart.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._rotateStart.set(p,m)}}_handleTouchStartPan(a){if(this._pointers.length===1)this._panStart.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._panStart.set(p,m)}}_handleTouchStartDolly(a){let h=this._getSecondPointerPosition(a),p=a.pageX-h.x,m=a.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyStart.set(0,g)}_handleTouchStartDollyPan(a){if(this.enableZoom)this._handleTouchStartDolly(a);if(this.enablePan)this._handleTouchStartPan(a)}_handleTouchStartDollyRotate(a){if(this.enableZoom)this._handleTouchStartDolly(a);if(this.enableRotate)this._handleTouchStartRotate(a)}_handleTouchMoveRotate(a){if(this._pointers.length==1)this._rotateEnd.set(a.pageX,a.pageY);else{let p=this._getSecondPointerPosition(a),m=0.5*(a.pageX+p.x),g=0.5*(a.pageY+p.y);this._rotateEnd.set(m,g)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let h=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/h.clientHeight),this._rotateUp(mn*this._rotateDelta.y/h.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(a){if(this._pointers.length===1)this._panEnd.set(a.pageX,a.pageY);else{let h=this._getSecondPointerPosition(a),p=0.5*(a.pageX+h.x),m=0.5*(a.pageY+h.y);this._panEnd.set(p,m)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(a){let h=this._getSecondPointerPosition(a),p=a.pageX-h.x,m=a.pageY-h.y,g=Math.sqrt(p*p+m*m);this._dollyEnd.set(0,g),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let _=(a.pageX+h.x)*0.5,y=(a.pageY+h.y)*0.5;this._updateZoomParameters(_,y)}_handleTouchMoveDollyPan(a){if(this.enableZoom)this._handleTouchMoveDolly(a);if(this.enablePan)this._handleTouchMovePan(a)}_handleTouchMoveDollyRotate(a){if(this.enableZoom)this._handleTouchMoveDolly(a);if(this.enableRotate)this._handleTouchMoveRotate(a)}_addPointer(a){this._pointers.push(a.pointerId)}_removePointer(a){delete this._pointerPositions[a.pointerId];for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==a.pointerId){this._pointers.splice(h,1);return}}_isTrackingPointer(a){for(let h=0;h<this._pointers.length;h++)if(this._pointers[h]==a.pointerId)return!0;return!1}_trackPointer(a){let h=this._pointerPositions[a.pointerId];if(h===void 0)h=new Et,this._pointerPositions[a.pointerId]=h;h.set(a.pageX,a.pageY)}_getSecondPointerPosition(a){let h=a.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[h]}_customWheelEvent(a){let h=a.deltaMode,p={clientX:a.clientX,clientY:a.clientY,deltaY:a.deltaY};switch(h){case 1:p.deltaY*=16;break;case 2:p.deltaY*=100;break}if(a.ctrlKey&&!this._controlActive)p.deltaY*=10;return p}}function Qm(a){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(a))return;if(this._addPointer(a),a.pointerType==="touch")this._onTouchStart(a);else this._onMouseDown(a)}function t0(a){if(this.enabled===!1)return;if(a.pointerType==="touch")this._onTouchMove(a);else this._onMouseMove(a)}function e0(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xc),this.state=Fe.NONE;break;case 1:let h=this._pointers[0],p=this._pointerPositions[h];this._onTouchStart({pointerId:h,pageX:p.x,pageY:p.y});break}}function n0(a){let h;switch(a.button){case 0:h=this.mouseButtons.LEFT;break;case 1:h=this.mouseButtons.MIDDLE;break;case 2:h=this.mouseButtons.RIGHT;break;default:h=-1}switch(h){case Hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=Fe.DOLLY;break;case Hn.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Fe.ROTATE}break;case Hn.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Fe.PAN}break;default:this.state=Fe.NONE}if(this.state!==Fe.NONE)this.dispatchEvent(Ao)}function i0(a){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function s0(a){if(this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE)return;a.preventDefault(),this.dispatchEvent(Ao),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Xc)}function r0(a){if(this.enabled===!1||this.enablePan===!1)return;this._handleKeyDown(a)}function a0(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case qn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=Fe.TOUCH_ROTATE;break;case qn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=Fe.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}if(this.state!==Fe.NONE)this.dispatchEvent(Ao)}function o0(a){switch(this._trackPointer(a),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=Fe.NONE}}function l0(a){if(this.enabled===!1)return;a.preventDefault()}function c0(a){if(a.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function h0(a){if(a.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var Qs=new X;function Ln(a,h,p,m,g,_){let y=2*Math.PI*g/4,x=Math.max(_-2*g,0),M=Math.PI/4;Qs.copy(h),Qs[m]=0,Qs.normalize();let S=0.5*y/(y+x),b=1-Qs.angleTo(a)/M;if(Math.sign(Qs[p])===1)return b*S;else return x/(y+x)+S+S*(1-b)}class Ro extends sn{constructor(a=1,h=1,p=1,m=2,g=0.1){m=m*2+1,g=Math.min(a/2,h/2,p/2,g);super(1,1,1,m,m,m);if(m===1)return;let _=this.toNonIndexed();this.index=null,this.attributes.position=_.attributes.position,this.attributes.normal=_.attributes.normal,this.attributes.uv=_.attributes.uv;let y=new X,x=new X,M=new X(a,h,p).divideScalar(2).subScalar(g),S=this.attributes.position.array,b=this.attributes.normal.array,v=this.attributes.uv.array,T=S.length/6,C=new X,I=0.5/m;for(let D=0,w=0;D<S.length;D+=3,w+=2)switch(y.fromArray(S,D),x.copy(y),x.x-=Math.sign(x.x)*I,x.y-=Math.sign(x.y)*I,x.z-=Math.sign(x.z)*I,x.normalize(),S[D+0]=M.x*Math.sign(y.x)+x.x*g,S[D+1]=M.y*Math.sign(y.y)+x.y*g,S[D+2]=M.z*Math.sign(y.z)+x.z*g,b[D+0]=x.x,b[D+1]=x.y,b[D+2]=x.z,Math.floor(D/T)){case 0:C.set(1,0,0),v[w+0]=Ln(C,x,"z","y",g,p),v[w+1]=1-Ln(C,x,"y","z",g,h);break;case 1:C.set(-1,0,0),v[w+0]=1-Ln(C,x,"z","y",g,p),v[w+1]=1-Ln(C,x,"y","z",g,h);break;case 2:C.set(0,1,0),v[w+0]=1-Ln(C,x,"x","z",g,a),v[w+1]=Ln(C,x,"z","x",g,p);break;case 3:C.set(0,-1,0),v[w+0]=1-Ln(C,x,"x","z",g,a),v[w+1]=1-Ln(C,x,"z","x",g,p);break;case 4:C.set(0,0,1),v[w+0]=1-Ln(C,x,"x","y",g,a),v[w+1]=1-Ln(C,x,"y","x",g,h);break;case 5:C.set(0,0,-1),v[w+0]=Ln(C,x,"x","y",g,a),v[w+1]=1-Ln(C,x,"y","x",g,h);break}}}class Co extends qs{constructor(){super();let a=new sn;a.deleteAttribute("uv");let h=new Zn({side:Zl}),p=new Zn,m=new js(16777215,900,28,2);m.position.set(0.418,16.199,0.3),this.add(m);let g=new ne(a,h);g.position.set(-0.757,13.219,0.717),g.scale.set(31.713,28.305,28.591),this.add(g);let _=new ne(a,p);_.position.set(-10.906,2.009,1.846),_.rotation.set(0,-0.195,0),_.scale.set(2.328,7.905,4.651),this.add(_);let y=new ne(a,p);y.position.set(-5.607,-0.754,-0.758),y.rotation.set(0,0.994,0),y.scale.set(1.97,1.534,3.955),this.add(y);let x=new ne(a,p);x.position.set(6.167,0.857,7.803),x.rotation.set(0,0.561,0),x.scale.set(3.927,6.285,3.687),this.add(x);let M=new ne(a,p);M.position.set(-2.017,0.018,6.124),M.rotation.set(0,0.333,0),M.scale.set(2.002,4.566,2.064),this.add(M);let S=new ne(a,p);S.position.set(2.291,-0.756,-2.621),S.rotation.set(0,-0.286,0),S.scale.set(1.546,1.552,1.496),this.add(S);let b=new ne(a,p);b.position.set(-2.193,-0.369,-5.547),b.rotation.set(0,0.516,0),b.scale.set(3.875,3.487,2.986),this.add(b);let v=new ne(a,_s(50));v.position.set(-16.116,14.37,8.208),v.scale.set(0.1,2.428,2.739),this.add(v);let T=new ne(a,_s(50));T.position.set(-16.109,18.021,-8.207),T.scale.set(0.1,2.425,2.751),this.add(T);let C=new ne(a,_s(17));C.position.set(14.904,12.198,-1.832),C.scale.set(0.15,4.265,6.331),this.add(C);let I=new ne(a,_s(43));I.position.set(-0.462,8.89,14.52),I.scale.set(4.38,5.441,0.088),this.add(I);let D=new ne(a,_s(20));D.position.set(3.235,11.486,-12.541),D.scale.set(2.5,2,0.1),this.add(D);let w=new ne(a,_s(100));w.position.set(0,20,0),w.scale.set(1,0.1,1),this.add(w)}dispose(){let a=new Set;this.traverse((h)=>{if(h.isMesh)a.add(h.geometry),a.add(h.material)});for(let h of a)h.dispose()}}function _s(a){let h=new Bi;return h.color.setScalar(a),h}var $n=2.5,qc=1,Yc=0.9,xs=0.13,de=new X(e(189),0,t(183));function bn(a,h,p,m=1){let g=document.createElement("canvas");g.width=a,g.height=h,p(g.getContext("2d"));let _=new lo(g);if(_.colorSpace=$a,_.anisotropy=4,m!==1)_.wrapS=_.wrapT=Vs,_.repeat.set(m,m);return _}var Io=(a,h,p,m,g,_=9000)=>{a.fillStyle=m,a.fillRect(0,0,h,p);for(let y=0;y<_;y++){let x=(Math.random()-0.5)*g;a.fillStyle=x>0?`rgba(255,255,255,${x})`:`rgba(0,0,0,${-x})`,a.fillRect(Math.random()*h,Math.random()*p,2,2)}},Zc=()=>bn(512,512,(a)=>{for(let h=0;h<2;h++)for(let p=0;p<2;p++){let m=228+Math.floor(Math.random()*8);a.fillStyle=`rgb(${m+8},${m+3},${m-8})`,a.fillRect(h*256,p*256,256,256);for(let g=0;g<2500;g++)a.fillStyle=`rgba(${Math.random()>0.5?"255,255,255":"150,130,100"},.06)`,a.fillRect(h*256+Math.random()*256,p*256+Math.random()*256,3,3)}a.fillStyle="#cfc6b6";for(let h=0;h<=2;h++)a.fillRect(h*256-2,0,4,512),a.fillRect(0,h*256-2,512,4)}),Hi=(a,h=0.14)=>bn(256,256,(p)=>Io(p,256,256,a,h,6000),3),Jc=(a,h)=>bn(256,256,(p)=>{Io(p,256,256,a,0.2,14000),p.strokeStyle=h,p.lineWidth=10,p.strokeRect(12,12,232,232)}),u0=()=>bn(256,512,(a)=>{Io(a,256,512,"#2b3550",0.25,12000),a.strokeStyle="#c9a86a",a.lineWidth=6,a.strokeRect(14,14,228,484),a.fillStyle="#c9a86a88";for(let h=60;h<480;h+=70)a.beginPath(),a.ellipse(128,h,50,22,0,0,7),a.fill()}),$c=()=>bn(256,256,(a)=>{a.fillStyle="#f7f7f5",a.fillRect(0,0,256,256),a.fillStyle="#d9d9d6";for(let h=0;h<=4;h++)a.fillRect(h*64-1,0,2,256),a.fillRect(0,h*128-1,256,2)}),d0=()=>bn(256,256,(a)=>{a.fillStyle="#e6e2df",a.fillRect(0,0,256,256);let h=22;for(let p=0;p<300;p+=h*1.5)for(let m=0;m<300;m+=h*1.732){let g=Math.round(p/(h*1.5))%2*h*0.866;a.beginPath();for(let y=0;y<6;y++){let x=Math.PI/3*y+Math.PI/6;a.lineTo(m+g+h*Math.cos(x),p+h*Math.sin(x))}a.closePath();let _=205+Math.floor(Math.random()*40);a.fillStyle=`rgb(${_},${_-3},${_-2})`,a.fill(),a.strokeStyle="#f5f3f0",a.lineWidth=2,a.stroke()}}),f0=()=>bn(256,360,(a)=>{a.fillStyle="#121216",a.fillRect(0,0,256,360),a.fillStyle="#9b2b33",a.beginPath(),a.arc(128,105,78,0,7),a.fill(),a.fillStyle="#121216",a.beginPath(),a.arc(128,105,58,0,7),a.fill(),a.fillStyle="#d8d4cf",a.beginPath(),a.ellipse(128,110,28,36,0,0,7),a.fill(),a.fillStyle="#2d4f6d",a.fillRect(70,150,116,200),a.fillStyle="#e8e4dc";for(let h=170;h<330;h+=18)a.fillRect(98,h,60,6);a.fillStyle="#3c8b3a",a.fillRect(122,250,12,12)}),p0=()=>bn(256,340,(a)=>{let h=["#d94b3d","#f2b632","#3a7bd5","#43a047","#8e44ad","#f06292"];a.fillStyle="#e8d8b8",a.fillRect(0,0,256,340);for(let p=0;p<60;p++)a.fillStyle=h[p%6],a.beginPath(),a.arc(Math.random()*256,Math.random()*340,6+Math.random()*20,0,7),a.fill();a.fillStyle="#c69c6d",a.beginPath(),a.ellipse(128,200,50,100,0,0,7),a.fill(),a.fillStyle="#8a5a3a",a.beginPath(),a.arc(128,95,55,0,7),a.fill()}),m0=()=>bn(200,260,(a)=>{a.fillStyle="#f5d33b",a.fillRect(0,0,200,260);let h=["#e84a5f","#2a9d8f","#f4a261","#6c63ff","#ffffff"];for(let p=0;p<5;p++)a.fillStyle=h[p],a.beginPath(),a.moveTo(100,90),a.arc(100,90,70,Math.PI+p*0.63,Math.PI+(p+1)*0.63),a.fill();a.fillStyle="#f472b6",a.beginPath(),a.arc(140,140,28,0,7),a.fill(),a.fillStyle="#1f2937",a.fillRect(20,200,160,40)}),g0=()=>bn(256,160,(a)=>{a.fillStyle="#fbfbfb",a.fillRect(0,0,256,160),a.font="bold 26px sans-serif",a.fillStyle="#222",a.fillText("Bim",120,34),a.fillStyle="#d23",a.fillText("Flow",168,34),a.strokeStyle="#333",a.lineWidth=2;for(let h=50;h<150;h+=14)a.beginPath(),a.moveTo(16,h),a.lineTo(66+Math.random()*50,h),a.stroke();a.strokeStyle="#d23",a.beginPath(),a.arc(180,80,18,0,7),a.stroke()}),Po=(a)=>bn(64,32,(h)=>{let p=h.createLinearGradient(0,0,64,32);p.addColorStop(0,a),p.addColorStop(1,"#05060a"),h.fillStyle=p,h.fillRect(0,0,64,32)});function R0(a){let h=new ao({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(devicePixelRatio,1.75)),h.shadowMap.enabled=!0,h.shadowMap.type=Ja,h.shadowMap.autoUpdate=!1,h.outputColorSpace=$a,h.localClippingEnabled=!0,h.toneMapping=Jl,h.toneMappingExposure=1.05,a.appendChild(h.domElement);let p=new qs,m=new Hs(h);p.environment=m.fromScene(new Co,0.04).texture,p.environmentIntensity=0.55;let g=new ln(32,1,0.1,2500),_=new Xs(-5,5,5,-5,0.1,100),y=g,x=new ta(g,h.domElement);x.enableDamping=!0,x.maxPolarAngle=1.35,x.minDistance=2.5,x.maxDistance=30,x.screenSpacePanning=!0;let M=new ta(_,h.domElement);M.enableRotate=!1,M.enableDamping=!0,M.screenSpacePanning=!0,M.minZoom=0.6,M.maxZoom=6,M.enabled=!1,M.mouseButtons={LEFT:Hn.PAN,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},M.touches={ONE:qn.PAN,TWO:qn.DOLLY_PAN};let S=x;p.add(new yo(16777215,14274752,1.25));let b=new Mo(16773856,2.3);b.position.set(de.x-5,12,de.z+7),b.castShadow=!0,b.shadow.mapSize.set(2048,2048),Object.assign(b.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:35}),b.shadow.bias=-0.0004,b.shadow.normalBias=0.02,b.shadow.radius=3,b.target.position.copy(de),p.add(b,b.target);let v=(E,R={})=>new Zn({color:E,roughness:0.7,...R}),T=v("#f6f5f1",{roughness:0.45}),C=v("#f3f1ec",{roughness:0.85}),I=v("#232428",{roughness:0.4}),D=v("#2a2b2f",{roughness:0.8}),w=v("#c7cace",{metalness:0.8,roughness:0.28}),A=v("#d9dcdf",{metalness:1,roughness:0.12}),G=v("#18191c",{roughness:0.18,metalness:0.1}),F=new _o({color:"#cfe6ee",transparent:!0,opacity:0.28,roughness:0.03,metalness:0,clearcoat:1,depthWrite:!1}),H=v("#0f1114",{roughness:0.08,metalness:0.3}),rt=v("#e7eef2",{metalness:1,roughness:0.04}),q=v("#a9774f",{roughness:0.95,map:Hi("#a9774f")}),Y=v("#956643",{roughness:0.95,map:Hi("#956643")}),ut=v("#2f4a69",{roughness:0.6}),B=v("#9b6c45",{roughness:0.6}),z=v("#3f7d34",{roughness:0.7}),j=v("#5f9c40",{roughness:0.7}),at=v("#2c2c2c",{roughness:0.6}),ct=v("#fbfbf9",{roughness:0.15}),ht=v("#b8bcc0",{metalness:0.7,roughness:0.35}),_t=(E)=>E.traverse((R)=>{if(R.isMesh)R.castShadow=!0,R.receiveShadow=!0}),J=(E,R,P,N,k=0.015)=>new ne(new Ro(E,R,P,2,Math.min(k,E/2.1,R/2.1,P/2.1)),N),it=(E,R,P,N)=>new ne(new sn(E,R,P),N),Z=(E,R,P,N,k=24)=>new ne(new zi(E,R,P,k),N),Rt=(E,R,P=14)=>new ne(new ps(E,P,Math.round(P*0.75)),R),L=(E,R,P=0,N=0,k=0)=>(R.position.set(P,N,k),E.add(R),R),qt=(E,R,P)=>new ne(new Yn(E,R),P),ee=(E,R)=>{if(R==="x")E.rotation.z=Math.PI/2;else E.rotation.x=Math.PI/2;return E},pt=(E,R,P,N,k=!0,K=0.12)=>L(E,k?Z(0.006,0.006,K,ht,8):ee(Z(0.006,0.006,K,ht,8),"x"),R,P,N),wt=(E,R,P,N,k,K=0,tt=!0)=>{for(let gt=1;gt<k;gt++)L(E,it(0.004,P-0.04,0.004,D),-R/2+gt*R/k,K+P/2,N/2+0.001);for(let gt=0;gt<k;gt++)pt(E,-R/2+(gt+(gt%2?0.12:0.88))*R/k,K+(tt?P-0.12:P/2),N/2+0.015,!0,0.1)};function $t(E,R,P,N=!1){let k=new Ut;if(!N)L(k,Z(E*0.32,E*0.25,0.26,at,18),0,0.13,0);let K=N?0:0.26;for(let tt=0;tt<P;tt++){let gt=tt/P*Math.PI*2+Math.random()*0.4,kt=(R-K)*(0.6+Math.random()*0.4);L(k,Z(0.006,0.006,kt,z,5),Math.cos(gt)*0.05,K+kt/2,Math.sin(gt)*0.05).rotation.set(Math.sin(gt)*0.35,0,-Math.cos(gt)*0.35);for(let ge=1;ge<=3;ge++){let ie=L(k,Rt(0.05,ge%2?z:j,8),Math.cos(gt)*(0.05+ge*kt*0.1),K+kt*(0.35+ge*0.2),Math.sin(gt)*(0.05+ge*kt*0.1));ie.scale.set(1.4,0.35,0.8),ie.rotation.y=-gt}}return k}function Wt(E,R,P){let N=new Ut,k=v(P,{roughness:1,side:Pn,map:Hi(P,0.1)}),K=new Yn(E,R-0.1,64,10),tt=K.attributes.position,gt=Math.max(4,Math.round(E/0.11));for(let kt=0;kt<tt.count;kt++){let le=tt.getX(kt),ge=tt.getY(kt),ie=(R/2-ge)/R;tt.setZ(kt,Math.sin((le/E+0.5)*Math.PI*2*gt)*(0.028+ie*0.02)+ie*ie*0.03)}K.computeVertexNormals(),L(N,new ne(K,k),0,(R-0.1)/2+0.05,0.03),L(N,ee(Z(0.012,0.012,E+0.3,ht,8),"x"),0,R,0);for(let kt=0;kt<=gt;kt++)L(N,new ne(new ai(0.022,0.005,6,12),ht),-E/2+kt*E/gt,R,0);return N}function It(E,R,P,N=0.14,k=0.02){let K=new Yn(E+N*2,R+N,48,40);K.rotateX(-Math.PI/2);let tt=K.attributes.position;for(let kt=0;kt<tt.count;kt++){let le=tt.getX(kt),ge=tt.getZ(kt),ie=k*Math.sin(le*11+ge*4)*Math.cos(ge*7)+k*0.6*Math.sin(ge*17),Le=Math.abs(le)-E/2;if(Le>0)ie=-Le*2.4+Math.sin(ge*20)*0.01,le=Math.sign(le)*(E/2+Le*0.18);let Oe=ge-(R/2-N/2);if(Oe>0)ie=Math.min(ie,-Oe*2.4),ge=R/2-N/2+Oe*0.18;tt.setXYZ(kt,le,ie,ge)}K.computeVertexNormals();let gt=new ne(K,P);return gt.castShadow=!0,gt.receiveShadow=!0,gt}function se(E,R,P,N){let k=new Ut;L(k,J(E,P,R,C,0.01),0,P/2,0),L(k,it(E-0.02,0.006,0.006,v("#d0cdc6")),0,P-0.45,R/2+0.003),L(k,it(E-0.02,0.005,0.02,ht),0,P-0.43,R/2+0.01);for(let K=0;K<2;K++){let tt=-E/2+(K+0.5)*E/2,gt=N&&K===1?rt:T;L(k,it(E/2-0.03,P-0.55,0.015,gt),tt,(P-0.5)/2+0.02,R/2+0.008+K*0.02),L(k,it(0.02,P-0.55,0.02,ht),tt-E/4+0.02,(P-0.5)/2+0.02,R/2+0.012+K*0.02),L(k,it(0.02,P-0.55,0.02,ht),tt+E/4-0.02,(P-0.5)/2+0.02,R/2+0.012+K*0.02)}return[-1,1].forEach((K)=>pt(k,K*E*0.3,P-0.3,R/2+0.02,!1,0.14)),k}let ye={geladeira(E,R,P){let N=new Ut;L(N,J(E,P,R,w,0.03),0,P/2,0),L(N,it(E-0.02,0.006,0.006,D),0,1.22,R/2+0.002),L(N,J(0.025,0.5,0.03,ht,0.01),-E/2+0.07,1.5,R/2+0.02),L(N,J(0.025,0.5,0.03,ht,0.01),-E/2+0.07,0.95,R/2+0.02),L(N,J(0.16,0.12,0.02,v("#9aa3ab",{roughness:0.3}),0.01),E/2-0.16,1.45,R/2+0.006),["#3b82f6","#f59e0b","#7c3aed","#ef4444","#111827","#16a34a","#e5e7eb"].forEach((tt,gt)=>L(N,it(0.07+gt%3*0.02,0.05+gt%2*0.03,0.004,v(tt)),E*0.05+gt%3*0.1-0.08,1.32+Math.floor(gt/3)*0.1,R/2+0.004));let K=new Ut;return L(K,Z(0.13,0.15,0.3,I,28),0,0.15,0),L(K,J(0.05,0.04,0.12,I,0.01),0,0.2,0.17),L(N,K,0,P,0),N},"armario-cozinha"(E,R,P){let N=new Ut;if(L(N,J(E,P-0.04,R-0.03,T,0.01),0,(P-0.04)/2,-0.015),L(N,it(E+0.005,0.04,R+0.01,v("#f4f2ee",{roughness:0.3})),0,P-0.02,0),wt(N,E,P-0.1,R-0.03,Math.max(1,Math.round(E/0.42)),0.06),L(N,it(E,0.06,0.02,D),0,0.03,R/2-0.04),E>1){let k=new Ut;L(k,J(0.3,0.02,0.22,v("#a4744a"),0.01),0,0.01,0),L(k,J(0.12,0.08,0.12,v("#e9e3d6"),0.02),-0.05,0.06,0),L(k,Z(0.04,0.04,0.1,v("#ddd"),14),0.08,0.07,0),L(N,k,-E*0.25,P,0)}return N},fogao(E,R,P){let N=new Ut;L(N,J(E,P-0.03,R,w,0.015),0,(P-0.03)/2,0),L(N,it(E-0.01,0.02,R-0.01,H),0,P-0.02,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([K,tt])=>{L(N,Z(0.055,0.06,0.025,D),K*E/4.2,P,tt*R/5),L(N,Z(0.03,0.03,0.03,v("#555")),K*E/4.2,P+0.01,tt*R/5)}),L(N,it(E-0.1,0.4,0.01,H),0,0.42,R/2+0.005),pt(N,0,0.7,R/2+0.03,!1,E-0.12);for(let K=0;K<5;K++)L(N,ee(Z(0.015,0.015,0.02,I,12),"z"),-E/2+0.08+K*(E-0.16)/4,P-0.09,R/2+0.012);L(N,it(E,0.08,R,D),0,0.04,0);let k=new Ut;return L(k,J(E+0.1,0.1,0.45,w,0.02),0,0,0),L(k,it(0.2,0.025,0.01,I),E*0.25,-0.02,0.23),L(N,k,0,1.6,-R/2+0.2),N},microondas(E,R,P){let N=new Ut,k=v("#f6f5f1",{roughness:0.45});return L(N,it(E+0.08,0.025,R+0.06,k),0,-0.0125,-0.01),L(N,it(E+0.08,0.025,R+0.06,k),0,P+0.1,-0.01),[-1,1].forEach((K)=>L(N,it(0.025,P+0.12,R+0.06,k),K*(E/2+0.03),P/2+0.045,-0.01)),L(N,J(E,P,R,I,0.015),0,P/2,0),L(N,it(E*0.68,P*0.75,0.005,H),-E*0.12,P/2,R/2+0.003),L(N,it(E*0.18,P*0.7,0.004,v("#333")),E*0.36,P/2,R/2+0.003),N},maquina(E,R,P){let N=new Ut;return L(N,J(E,P,R,T,0.05),0,P/2,0),L(N,Z(E*0.38,E*0.38,0.02,v("#9aa3ab",{roughness:0.2,transparent:!0,opacity:0.85}),32),0,P+0.005,0.02),L(N,J(E-0.04,0.12,0.08,v("#e9e9e6"),0.02),0,P+0.06,-R/2+0.05),L(N,it(E*0.3,0.04,0.005,v("#4aa3c7")),0,P+0.07,-R/2+0.092),L(N,Z(0.03,0.03,0.55,v("#8bc34a"),10),E/2+0.05,0.27,R*0.3),N},tanque(E,R,P){let N=new Ut;L(N,J(E*0.5,P-0.2,R*0.5,T,0.02),0,(P-0.2)/2,-R*0.2),L(N,J(E,0.2,R,ct,0.04),0,P-0.1,0),L(N,it(E-0.08,0.02,R-0.1,v("#d8dadb",{roughness:0.3})),0,P-0.01,0.02);let k=new Ut;L(k,Z(0.012,0.012,0.22,A,10),0,0.11,0),L(k,ee(Z(0.01,0.01,0.12,A,10),"z"),0,0.22,0.06),L(N,k,0,P,-R/2+0.04);let K=new Ut;return[0,0.05,0.1].forEach((tt,gt)=>L(K,Z(0.008,0.008,0.16,v(["#c58b4c","#7c5a3a","#d8b98b"][gt]),6),tt,0.08,0)),L(N,K,-E*0.3,P,-R/2+0.05),N},"varal-teto"(E,R){let P=new Ut;for(let k=0;k<6;k++)L(P,ee(Z(0.008,0.008,E,T,8),"x"),0,0,-R/2+k*R/5);return[-1,1].forEach((k)=>L(P,it(0.02,0.02,R,T),k*E/2,0,0)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([k,K])=>L(P,Z(0.002,0.002,0.3,v("#ddd"),4),k*E/2,0.15,K*R/2)),[["#e24b75",0.4,0.55,-0.8],["#1f5f45",0.3,0.6,-0.4],["#1d2c54",0.25,0.3,0],["#6b6b6b",0.3,0.35,0.4],["#151515",0.3,0.45,0.8]].forEach(([k,K,tt,gt])=>{let kt=L(P,qt(K,tt,v(k,{side:Pn,roughness:1})),0,-tt/2,gt*R/2.2);kt.rotation.y=Math.PI/2}),P},balcao(E,R){let P=new Ut,N=R-0.12,k=-R/2+N/2;L(P,J(E-0.02,0.86,N,T,0.01),0,0.43,k);let K=new Ut;wt(K,E-0.02,0.78,N,4,0.06),K.rotation.y=Math.PI,K.position.z=k,P.add(K),L(P,it(E-0.02,0.06,0.02,D),0,0.03,-R/2+0.03),L(P,it(E,0.035,N+0.04,G),0,0.9,k),L(P,it(E,0.52,0.1,v("#ece9e3",{roughness:0.8})),0,1.16,R/2-0.11),L(P,it(E,0.035,0.34,G),0,1.44,R/2-0.02);let tt=new Ut;L(tt,Z(0.07,0.08,0.12,I,16),0,0.06,0),L(tt,ee(Z(0.008,0.008,0.32,I,6),"z"),0,0.25,0.04),L(tt,Z(0.04,0.07,0.1,I,14),0,0.36,0.18),L(P,tt,-E*0.1,1.44,R/2+0.05);let gt=new Ut;L(gt,J(0.16,0.14,0.16,I,0.03),0,0.07,0),L(gt,Z(0.07,0.06,0.22,v("#cfd6db",{transparent:!0,opacity:0.5}),16),0,0.25,0),L(P,gt,-E*0.3,1.44,R/2+0.05);let kt=new Ut;return L(kt,Z(0.04,0.04,0.22,v("#3b6b2f",{roughness:0.1}),14),0,0.11,0),L(kt,Z(0.012,0.025,0.1,v("#3b6b2f",{roughness:0.1}),10),0,0.27,0),L(P,kt,E*0.35,1.44,R/2+0.05),L(P,J(0.4,0.01,0.25,v("#a7774b",{roughness:0.9}),0.004),E*0.38,1.44,R/2+0.1),P},"pia-cozinha"(E,R){let P=new Ut;L(P,it(E*0.8,0.015,R*0.9,w),0,0.002,0),L(P,it(E*0.7,0.01,R*0.75,v("#8f9499",{metalness:0.8,roughness:0.3})),0,0.009,0),L(P,Z(0.015,0.018,0.28,A,12),E*0.3,0.14,-R*0.3);let N=L(P,new ne(new ai(0.07,0.011,8,16,Math.PI),A),E*0.3,0.28,-R*0.3+0.07);return N.rotation.y=Math.PI/2,P},escorredor(E,R){let P=new Ut;L(P,J(E,0.02,R,A,0.005),0,0.01,0),[-1,1].forEach((N)=>[-1,1].forEach((k)=>L(P,Z(0.004,0.004,0.14,A,6),N*(E/2-0.01),0.08,k*(R/2-0.01))));for(let N=0;N<6;N++)L(P,ee(Z(0.003,0.003,R,A,4),"z"),-E/2+0.03+N*(E-0.06)/5,0.15,0);return[0,1,2,3].forEach((N)=>{let k=L(P,Z(0.1,0.1,0.012,N%2?v("#f6f6f4",{roughness:0.2}):v("#1f3b73",{roughness:0.3}),22),-E/2+0.1+N*0.07,0.12,0);k.rotation.z=Math.PI/2-0.15}),[0,1,2].forEach((N)=>L(P,Z(0.03,0.025,0.1,v("#cfd8dc",{transparent:!0,opacity:0.6,roughness:0.1}),12),E*0.3,0.07,-R/3+N*R/3)),L(P,Z(0.05,0.045,0.08,v("#c13b3b"),16),E*0.18,0.06,R*0.25),L(P,J(0.14,0.07,0.1,v("#d26aa6"),0.02),0,0.2,0),P},filtro(E,R,P){let N=new Ut;return L(N,Z(E/2.4,E/2,P*0.55,v("#8a5236",{roughness:0.9}),20),0,P*0.275,0),L(N,Z(E/2.4,E/2.4,P*0.45,v("#6b6f73",{transparent:!0,opacity:0.7,roughness:0.2}),20),0,P*0.775,0),L(N,ee(Z(0.01,0.01,0.05,v("#c98"),6),"z"),0,P*0.15,E/2),N},"mesa-jantar"(E,R,P){let N=new Ut;return L(N,J(E,0.02,R,F,0.01),0,P,0),L(N,it(E*0.3,0.005,R*0.5,v("#e6a243")),0,P+0.013,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([k,K])=>L(N,Z(0.015,0.015,P,A,10),k*(E/2-0.06),P/2,K*(R/2-0.06))),L(N,Z(0.04,0.03,0.12,v("#3a2a20"),12),-E*0.2,P+0.07,R*0.2),[0,1,2].forEach((k)=>L(N,Z(0.002,0.002,0.25,v("#d9b48a"),4),-E*0.2+(k-1)*0.015,P+0.2,R*0.2)),L(N,Z(0.035,0.035,0.2,v("#f472b6"),14),E*0.2,P+0.1,-R*0.25),L(N,J(0.22,0.1,0.16,v("#f8c74a"),0.01),E*0.1,P+0.06,R*0.3),N},cadeiras(E,R){let P=new Ut;return L(P,J(E,0.05,R,I,0.02),0,0.46,0),L(P,J(E,0.4,0.03,I,0.015),0,0.7,-R/2+0.02),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([N,k])=>L(P,Z(0.009,0.009,0.44,A,8),N*(E/2-0.03),0.22,k*(R/2-0.03))),[-1,1].forEach((N)=>L(P,Z(0.009,0.009,0.44,A,8),N*(E/2-0.03),0.7,-R/2+0.02)),P},espada(E,R,P){let N=new Ut;L(N,Z(E*0.35,E*0.28,0.28,at,18),0,0.14,0),L(N,Z(E*0.33,E*0.33,0.01,v("#3d2a1d")),0,0.27,0);for(let k=0;k<11;k++){let K=k/11*Math.PI*2;L(N,it(0.045,P-0.3-Math.random()*0.3,0.008,k%2?z:v("#5a8a3a")),Math.cos(K)*0.04,0.28+(P-0.3)/2,Math.sin(K)*0.04).rotation.set((Math.random()-0.5)*0.25,K,(Math.random()-0.5)*0.25)}return N},zamioculca(E,R,P){return $t(E,P,7)},sofa(E,R,P,N){let k=new Ut,K=(ie)=>i(ie-N.x)-E/2,tt=(ie)=>i(ie-N.y)-R/2,gt=(ie,Le,Oe,nn,Wn,rr,bs,Ts=0.05)=>L(k,J(i(Oe-ie),bs,i(nn-Le),Wn,Ts),(K(ie)+K(Oe))/2,rr+bs/2,(tt(Le)+tt(nn))/2);gt(52,178,90,294,Y,0,0.2,0.03),gt(90,178,126,214,Y,0,0.2,0.03);for(let ie=186;ie<288;ie+=25.5)gt(60.3,ie+0.3,89.7,Math.min(ie+25.5,288)-0.3,q,0.2,0.2,0.07);[[90,186,105,214],[105,186,120,214]].forEach(([ie,Le,Oe,nn])=>gt(ie+0.3,Le+0.3,Oe-0.3,nn-0.3,q,0.2,0.2,0.07));for(let ie=180;ie<294;ie+=28.5)gt(52,ie+0.2,60,Math.min(ie+28.5,294)-0.2,Y,0.2,0.42,0.05);[[60,178,82,186],[82,178,104,186],[104,178,126,186]].forEach(([ie,Le,Oe,nn])=>gt(ie+0.2,Le,Oe-0.2,nn,Y,0.2,0.42,0.05)),gt(60,288,90,294,Y,0.2,0.22,0.04),gt(120,186,126,214,Y,0.2,0.22,0.04);let kt=(ie,Le,Oe,nn)=>{L(k,J(0.36,0.34,0.1,v(Oe,{roughness:0.95}),0.05),K(ie),0.55,tt(Le)).rotation.set(-0.25,nn,0)};kt(63,196,"#ece6d6",Math.PI/2),kt(63,280,"#7d9a6a",Math.PI/2),kt(112,190,"#ece6d6",0);let le=L(k,J(0.55,0.04,0.45,v("#8d96a3",{roughness:1,map:Hi("#8d96a3",0.2)}),0.02),K(74),0.44,tt(250));le.rotation.y=0.5;let ge=new Ut;return L(ge,J(0.32,0.38,0.16,v("#ece4d6",{roughness:1}),0.06),0,0.19,0),L(ge,J(0.24,0.03,0.17,v("#222"),0.01),0,0.38,0),L(k,ge,K(98),0.4,tt(196)),L(k,J(0.16,0.02,0.05,v("#111"),0.01),K(72),0.41,tt(266)).rotation.y=0.3,k},"tapete-sala"(E,R){let P=new Ut;return L(P,J(E,0.015,R,v("#1c1c1e",{map:Jc("#1c1c1e","#2c2c30"),roughness:1}),0.005),0,0.008,0),P},"mesa-centro"(E,R,P){let N=new Ut;return L(N,Z(0.5,0.5,0.035,I,40),0,P-0.02,0).scale.set(E,1,R),[0,2.1,4.2].forEach((K)=>{L(N,Z(0.014,0.01,P,I,8),Math.cos(K)*E*0.32,P/2,Math.sin(K)*R*0.32).rotation.set(Math.sin(K)*0.15,0,-Math.cos(K)*0.15)}),L(N,Z(0.06,0.05,0.08,v("#c26b3a")),E*0.15,P+0.04,0),L(N,J(0.18,0.02,0.24,v("#2c4a6e"),0.005),-E*0.15,P+0.01,0.02),N},estante(E,R,P){let N=new Ut;L(N,it(E,P,0.03,ut),0,P/2,-R/2+0.015),L(N,J(E,0.5,R,ut,0.01),0,0.25,0),[-1,1].forEach((le)=>{L(N,it(E/2-0.02,0.003,0.003,v("#1d3047")),le*E/4,0.25,R/2+0.002),pt(N,le*E/4,0.36,R/2+0.015,!1,0.24)}),L(N,it(E*0.3,0.16,R-0.05,v("#22384f")),-E*0.32,0.4,0.02),L(N,J(0.2,0.1,0.14,v("#ece9e3"),0.01),-E*0.36,0.37,0.04),L(N,it(0.18,0.12,0.2,v("#c9a37a")),-E*0.22,0.37,0.03),L(N,J(E,0.3,R-0.04,ut,0.01),0,P-0.15,-0.02),[-0.33,0.33].forEach((le)=>L(N,it(0.02,0.26,R-0.06,v("#294260")),le*E,P-0.15,-0.02));let k=["#e8e1d0","#b33","#222","#d9b26a","#e9e9e9","#2b2b2b","#c2185b","#f0eadb","#333","#7a5230"];for(let le=0;le<18;le++)L(N,it(0.022+Math.random()*0.02,0.2+Math.random()*0.05,0.16,v(k[le%k.length],{roughness:0.8})),-E/2+0.05+le*0.028,P-0.27+0.11,-0.03);L(N,$t(0.18,0.55,5,!0),0,P-0.28,-0.02),L(N,J(0.16,0.14,0.16,v("#3b87c9"),0.07),E*0.38,P-0.22,-0.02),L(N,J(E*0.58,E*0.58*0.58,0.03,I,0.006),-E*0.08,1.33,-R/2+0.05),L(N,qt(E*0.56,E*0.56*0.56,v("#000",{map:Po("#1d2a3a"),roughness:0.2})),-E*0.08,1.33,-R/2+0.066),L(N,Z(0.003,0.003,0.5,I,4),-E*0.12,0.85,-R/2+0.05);let K=L(N,it(0.45,0.6,0.02,v("#5a3a22")),E*0.3,0.82,-R/2+0.06);K.rotation.x=-0.06,L(N,qt(0.41,0.56,v("#fff",{map:m0()})),E*0.3,0.82,-R/2+0.072).rotation.x=-0.06;let tt=new Ut;L(tt,J(0.34,0.15,0.22,v("#5b3a20",{roughness:0.5}),0.02),0,0.075,0),L(tt,it(0.35,0.015,0.225,v("#2a1a10")),0,0.1,0),[-1,1].forEach((le)=>L(tt,it(0.02,0.03,0.01,v("#c9a34e",{metalness:0.8})),le*0.1,0.12,0.115)),L(N,tt,E*0.28,0.5,0.02),L(N,it(0.11,0.14,0.015,v("#1a1a1a")),-E*0.02,0.57,-0.06),L(N,qt(0.09,0.12,v("#c9b9a0")),-E*0.02,0.57,-0.052);let gt=new Ut;L(gt,Z(0.04,0.06,0.14,v("#b22")),0,0.07,0),L(gt,Rt(0.035,v("#f1d0b5")),0,0.17,0),L(gt,Rt(0.03,v("#fff")),0,0.15,0.02),L(gt,new ne(new Yr(0.04,0.07,12),v("#b22")),0,0.22,0),L(N,gt,E*0.1,0.5,0.03),L(N,J(0.08,0.06,0.08,v("#c9a77a"),0.01),-E*0.12,0.53,0.06);let kt=L(N,Rt(0.1,v("#3b9ad9",{roughness:0.3}),16),E*0.38,P-0.25,-0.02);return kt.scale.y=0.7,N},"cortina-sala"(E,R,P){let N=Wt(E,P,"#4a3428"),k=L(N,new ne(new ai(0.12,0.03,8,16),v("#4a3428",{roughness:1})),0,1,0.02);return k.rotation.x=Math.PI/2,N},"quadro-sala"(E,R,P){let N=new Ut;return L(N,it(E,P,0.03,v("#111")),0,P/2,0),L(N,qt(E-0.02,P-0.02,v("#fff",{map:f0()})),0,P/2,0.016),N},box(E,R,P){let N=new Ut;L(N,it(E,P,0.01,F),0,P/2,R/2),L(N,it(0.01,P,R,F),-E/2+0.01,P/2,0),L(N,it(E,0.03,0.04,ht),0,P,R/2),L(N,it(E,0.02,0.03,ht),0,0.01,R/2),L(N,it(0.03,P,0.03,ht),E/2-0.02,P/2,R/2);{let tt=L(N,Z(0.08,0.08,0.03,v("#f2f2f0",{roughness:0.3}),24),-E/2+0.14,2,0);tt.rotation.z=-0.5,L(N,ee(Z(0.012,0.012,0.12,A,8),"x"),-E/2+0.06,2.05,0),L(N,J(0.06,0.12,0.04,A,0.01),-E/2+0.03,1.2,0.15)}let k=new Ut;L(k,J(0.28,0.03,0.22,v("#3fa7b5"),0.01),0,0.3,0),[-1,1].forEach((tt)=>L(k,it(0.02,0.3,0.2,v("#2a2a2a")),tt*0.12,0.15,0)),L(N,k,E*0.3,0,-R*0.05);let K=new Ut;return L(K,J(0.25,0.02,0.1,v("#fff"),0.005),0,0,0),L(K,Z(0.025,0.025,0.18,v("#f1e3c4"),10),-0.06,0.09,0),L(K,Z(0.02,0.02,0.15,v("#7a5aa8"),10),0.05,0.08,0),L(N,K,E/2-0.14,1.2,-R/2+0.06),L(N,J(E*0.8,0.01,0.3,v("#6f7378",{roughness:1}),0.004),0,0.005,R/2+0.2),L(N,it(E+0.1,P+0.5,0.01,v("#fff",{map:$c(),roughness:0.25})),0,(P+0.5)/2,-R/2+0.005),N},vaso(E,R){let P=new Ut,N=L(P,Z(0.17,0.13,0.38,ct,24),0,0.19,0.04);N.scale.z=1.3;let k=L(P,Z(0.19,0.19,0.03,ct,24),0,0.4,0.04);k.scale.z=1.25,L(P,J(E*0.9,0.36,0.17,ct,0.03),0,0.58,-R/2+0.1),L(P,Z(0.03,0.03,0.01,A,12),0,0.765,-R/2+0.1),[-1,1].forEach((tt)=>L(P,Z(0.03,0.035,0.05,v("#e9dcc6"),12),tt*E*0.25,0.79,-R/2+0.1));let K=L(P,ee(Z(0.055,0.055,0.1,v("#fff",{roughness:1}),16),"x"),E/2+0.03,0.6,-R/2+0.1);return K.castShadow=!0,L(P,Z(0.1,0.09,0.3,v("#f4f4f2"),16),E/2+0.1,0.15,0.05),P},"pia-banheiro"(E,R,P){let N=new Ut;return L(N,J(E,P-0.12,R-0.06,T,0.01),0,(P-0.12)/2,-0.03),[0.22,0.5].forEach((k)=>{L(N,it(E-0.02,0.003,0.003,v("#ccc")),0,k+0.14,R/2-0.055),L(N,J(0.14,0.02,0.02,B,0.008),0,k,R/2-0.045)}),L(N,J(E*0.95,0.14,R-0.02,ct,0.06),0,P-0.07,0),L(N,it(E*0.6,0.01,R*0.55,v("#e5e8ea",{roughness:0.1})),0,P-0.005,0.03),L(N,Z(0.012,0.012,0.14,A,10),0,P+0.07,-R/2+0.05),L(N,ee(Z(0.009,0.009,0.08,A,8),"z"),0,P+0.14,-R/2+0.09),L(N,J(E*0.9,0.55,0.1,rt,0.01),0,1.6,-R/2+0.02),L(N,J(0.18,0.07,0.06,v("#fff"),0.02),0,1.2,-R/2+0.02),L(N,Z(0.03,0.035,0.16,I,12),E*0.3,P+0.08,-R*0.2),L(N,J(0.1,0.02,0.07,v("#2a2a2a"),0.01),-E*0.3,P+0.01,R*0.1),L(N,it(E+0.2,1.3,0.01,v("#fff",{map:$c(),roughness:0.25})),0,0.65,-R/2-0.01),N},"mesa-pc"(E,R,P){let N=new Ut;L(N,J(E,0.03,R,I,0.008),0,P,0),[-1,1].forEach((ge)=>{L(N,it(0.05,P,0.05,I),ge*(E/2-0.08),P/2,-R/2+0.1),L(N,it(0.06,0.03,R-0.1,I),ge*(E/2-0.08),0.015,0)}),L(N,J(E*0.78,0.006,0.32,v("#5a1f1f",{roughness:0.9}),0.003),0,P+0.018,0.05);{let Le=-R/2+0.12,Oe=new ne(new zi(1.5,1.5,0.345,32,1,!0,Math.PI-0.27,0.54),v("#000",{map:Po("#2b4a77"),side:Pn,roughness:0.25})),nn=new ne(new zi(1.52,1.52,0.37,32,1,!0,Math.PI-0.2775,0.555),v("#151517",{side:Pn,roughness:0.5}));[Oe,nn].forEach((Wn)=>L(N,Wn,0,P+0.43,Le+1.5)),L(N,J(0.16,0.03,0.02,v("#c8102e"),0.01),0,P+0.245,Le-0.025)}L(N,it(0.06,0.2,0.04,I),0,P+0.12,-R/2+0.08),L(N,it(0.25,0.01,0.18,I),0,P+0.02,-R/2+0.1),L(N,J(0.12,0.03,0.04,I,0.01),0,P+0.65,-R/2+0.1);let k=new Ut;L(k,J(0.38,0.02,0.26,v("#3a3d42"),0.01),0,0.01,0);let K=L(k,J(0.38,0.25,0.012,v("#3a3d42"),0.006),0,0.13,-0.13);K.rotation.x=-0.25,L(k,qt(0.34,0.21,v("#000",{map:Po("#1f2937")})),0,0.13,-0.123).rotation.x=-0.25,L(k,it(0.3,0.01,0.2,v("#e65a2f")),0,-0.02,0.02),L(N,k,-E*0.32,P+0.1,-R/2+0.25),L(N,J(0.44,0.02,0.14,v("#151515"),0.006),0,P+0.03,0.14),L(N,J(0.06,0.03,0.1,v("#151515"),0.02),0.32,P+0.03,0.14);let tt=L(N,new ne(new ai(0.09,0.015,8,16,Math.PI),I),E*0.38,P+0.25,-R/2+0.1);tt.rotation.y=Math.PI/2;let gt=new Ut;L(gt,Z(0.008,0.008,0.5,I,6),0,0.25,0).rotation.z=0.5,L(gt,Z(0.03,0.03,0.12,I,12),-0.14,0.45,0).rotation.z=1.2,L(gt,Z(0.07,0.07,0.01,v("#111",{transparent:!0,opacity:0.7}),20),-0.05,0.45,0.08).rotation.x=Math.PI/2,L(N,gt,E*0.44,P,-R/2+0.06);let kt=new Ut;L(kt,Z(0.008,0.008,1.3,I,6),0,0.65,0),L(kt,new ne(new ai(0.12,0.015,8,24),v("#fff",{emissive:"#fff",emissiveIntensity:0.4})),0,1.35,0),L(N,kt,-E*0.45,0,-R/2-0.1);let le=v("#111",{roughness:0.9});return[-0.2,0,0.15].forEach((ge)=>L(N,Z(0.004,0.004,P,le,4),ge,P/2,-R/2+0.02)),N},"cadeira-pc"(){let E=new Ut,R=v("#cfd0cd",{roughness:0.8}),P=v("#f2f2f0",{roughness:0.4});for(let k=0;k<5;k++){let K=k/5*Math.PI*2,tt=L(E,it(0.32,0.03,0.04,P),Math.cos(K)*0.16,0.07,Math.sin(K)*0.16);tt.rotation.y=-K,L(E,Rt(0.03,P,10),Math.cos(K)*0.3,0.03,Math.sin(K)*0.3)}L(E,Z(0.025,0.025,0.35,A,10),0,0.25,0),L(E,J(0.5,0.08,0.48,R,0.04),0,0.48,0);let N=L(E,J(0.46,0.6,0.06,R,0.05),0,0.85,-0.24);return N.rotation.x=-0.12,L(E,J(0.48,0.62,0.02,P,0.02),0,0.85,-0.28).rotation.x=-0.12,L(E,J(0.3,0.12,0.06,P,0.04),0,1.22,-0.29),L(E,J(0.36,0.14,0.05,v("#e3e3df"),0.04),0,0.72,-0.2),[-1,1].forEach((k)=>{L(E,J(0.05,0.03,0.26,v("#9a9a96"),0.015),k*0.27,0.68,-0.02),L(E,it(0.03,0.18,0.03,P),k*0.27,0.58,-0.1)}),E},puff(E){let R=new Ut;return L(R,Rt(E/2,v("#1d1e22",{roughness:0.5}),24),0,0.2,0).scale.set(1,0.5,1),R},"quadro-branco"(E,R,P){let N=new Ut;L(N,it(E,P,0.02,ht),0,P/2,0),L(N,qt(E-0.03,P-0.03,v("#fff",{map:g0(),roughness:0.2})),0,P/2,0.011);let k=new Ut;L(k,Z(0.17,0.17,0.03,I,20),0,0.45,0),[0,2.1,4.2].forEach((tt)=>L(k,Z(0.01,0.01,0.45,A,6),Math.cos(tt)*0.13,0.22,Math.sin(tt)*0.13)),L(k,J(0.14,0.03,0.05,v("#2a6fd1"),0.01),0,0.48,0),L(N,k,0,-0.6,0.35);let K=new Ut;return L(K,J(0.35,0.45,0.2,v("#f3f3f3",{roughness:1}),0.03),0,0.22,0),L(K,J(0.3,0.4,0.18,v("#2e2e8a",{roughness:1}),0.03),0.3,0.2,0.05),L(N,K,-E*0.3,-0.6,0.25),N},"guarda-roupa-escritorio"(E,R,P){return se(E,R,P,!1)},"guarda-roupa-casal"(E,R,P){return se(E,R,P,!0)},cama(E,R){let P=new Ut,N=v("#26262b",{roughness:0.55,map:Hi("#26262b",0.08)});L(P,J(E,0.3,R,v("#1f1f22",{roughness:0.9}),0.02),0,0.15,0),L(P,J(E-0.04,0.2,R-0.04,v("#e8e6e1"),0.05),0,0.4,0),L(P,It(E+0.04,R*0.78,v("#26262b",{roughness:0.45,side:Pn,map:Hi("#26262b",0.08)}),0.22,0.018),0,0.52,R*0.11-0.06),L(P,it(E+0.08,0.006,0.006,v("#bbb")),0,0.18,R/2+0.025),[-1,1].forEach((kt)=>{let le=L(P,Rt(0.5,v("#33333a",{roughness:0.45}),20),kt*E*0.24,0.6,-R/2+0.2);le.scale.set(E*0.44,0.13,0.3),le.rotation.x=-0.35});let k=(kt,le,ge,ie)=>{L(P,Rt(ie,v(ge,{roughness:1})),kt,0.58+ie*0.8,le),L(P,Rt(ie*0.65,v(ge,{roughness:1})),kt,0.58+ie*2.2,le-0.02)};k(-0.35,-R/2+0.5,"#f2efe8",0.09),k(-0.12,-R/2+0.5,"#f2efe8",0.09),k(0.2,-R/2+0.5,"#5b3a26",0.11),k(0.1,0.1,"#d6a65a",0.07);let K=L(P,J(0.5,0.06,0.4,v("#c2185b",{roughness:1}),0.03),0.3,0.56,0.05);K.rotation.y=0.4;let tt=L(P,J(0.45,0.06,0.35,v("#9aa0aa",{roughness:1}),0.03),0.25,0.56,0.4);tt.rotation.y=-0.3;let gt=L(P,J(0.4,0.05,0.28,v("#22396b",{roughness:1}),0.02),-0.35,0.55,0.45);return gt.rotation.y=0.1,P},"tapete-quarto"(E,R){let P=new Ut;L(P,J(E,0.012,R,v("#2b3550",{map:u0(),roughness:1}),0.004),0,0.006,0);let N=new Ut;return[-1,1].forEach((k)=>L(N,J(0.1,0.08,0.28,v("#f5f5f2"),0.03),k*0.07,0.04,0)),L(P,N,0,0.012,0),P},criado(E,R,P){let N=new Ut;return L(N,J(E,0.3,R,T,0.01),0,P-0.15,0),L(N,it(E-0.04,0.22,0.01,v("#e2ddd0")),0,P-0.15,R/2-0.03),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([k,K])=>{L(N,Z(0.012,0.008,P-0.3,B,8),k*(E/2-0.03),(P-0.3)/2,K*(R/2-0.03)).rotation.set(K*0.1,0,-k*0.1)}),L(N,Z(0.06,0.09,0.22,v("#4a2f22",{roughness:0.4}),16),0,P+0.11,0),L(N,Z(0.09,0.12,0.16,v("#f2ead8",{emissive:"#ffdca0",emissiveIntensity:0.35}),20),0,P+0.3,0),N},"quadro-quarto"(E,R,P){let N=new Ut;return L(N,it(E,P,0.03,v("#1a1a1a")),0,P/2,0),L(N,qt(E-0.02,P-0.02,v("#fff",{map:p0()})),0,P/2,0.016),N},"varal-chao"(E,R,P){let N=new Ut,k=v("#f4f4f2",{roughness:0.4});[-1,1].forEach((K)=>{let tt=L(N,Z(0.01,0.01,1.15,k,8),K*(E/2-0.02),0.5,-R*0.2);tt.rotation.x=0.45;let gt=L(N,Z(0.01,0.01,1.15,k,8),K*(E/2-0.02),0.5,R*0.2);gt.rotation.x=-0.45});for(let K=0;K<7;K++)L(N,ee(Z(0.006,0.006,E,k,6),"x"),0,P,-R/2+K*R/6);return["#151515","#1f2c4f","#6b1f2a","#151515","#e9e2d5"].forEach((K,tt)=>L(N,qt(0.34,0.5,v(K,{side:Pn,roughness:1})),-E/2+0.2+tt*(E-0.3)/5,P-0.25,-R/2+tt%3*R/3+0.05)),N},bike(E){let R=new Ut;R.scale.setScalar(E/1.72);let P=v("#22313f",{roughness:0.4}),N=v("#151515",{roughness:0.9});[-1,1].forEach((K)=>{L(R,new ne(new ai(0.34,0.03,8,28),N),K*0.5,0.36,0);for(let tt=0;tt<8;tt++){let gt=L(R,Z(0.002,0.002,0.66,v("#aaa"),3),K*0.5,0.36,0);gt.rotation.z=tt*Math.PI/8}});let k=(K,tt,gt,kt)=>{let le=Math.hypot(gt-K,kt-tt),ge=L(R,Z(0.018,0.018,le,P,8),(K+gt)/2,(tt+kt)/2,0);ge.rotation.z=Math.atan2(K-gt,kt-tt)};return k(-0.5,0.36,-0.05,0.4),k(-0.05,0.4,0.35,0.75),k(-0.05,0.4,-0.12,0.82),k(-0.12,0.82,0.35,0.75),k(0.35,0.75,0.5,0.36),k(-0.5,0.36,-0.12,0.82),L(R,J(0.2,0.04,0.08,I,0.02),-0.14,0.86,0),L(R,ee(Z(0.012,0.012,0.55,I,8),"z"),0.38,0.86,0),R}},re=[],xt=new Map,Ct=(E)=>{let R=new Js;return E.forEach(([P,N],k)=>k?R.lineTo(e(P),t(N)):R.moveTo(e(P),t(N))),R},V=Zc();V.wrapS=V.wrapT=Vs,V.repeat.set(0.8333333333333334,0.8333333333333334);let Gt=(E,R)=>{let P=new $r(Ct(E));P.rotateX(Math.PI/2);let N=new ne(P,R);N.receiveShadow=!0,N.userData.piso=!0,N.position.y=0.001,p.add(N),re.push(N)};Gt(l,v("#fff",{map:V,roughness:0.35,side:Pn}));let bt=Zc();bt.wrapS=bt.wrapT=Vs,bt.repeat.set(1.1111111111111112,1.1111111111111112),Gt(c,v("#e9e2d6",{map:bt,roughness:0.6,side:Pn}));let Mt=new ne(new Jr(Ct([[46,16],[202,16],[202,106],[332,106],[332,350],[46,350]]),{depth:0.18,bevelEnabled:!1}).rotateX(Math.PI/2),v("#f1efe9",{roughness:0.9}));Mt.receiveShadow=!0,p.add(Mt);let oe=new ne(new Zs(14,48).rotateX(-Math.PI/2),new go({opacity:0.12}));oe.position.set(de.x,-0.18,de.z),oe.receiveShadow=!0,p.add(oe);let zt=v("#fbfaf7",{roughness:0.92}),Vt=v("#6e6c68",{roughness:0.9}),W=v("#ffffff",{roughness:0.4}),U=(E,R,P,N=0,k=zt,K=!0)=>{let tt=e(E[0]),gt=t(E[1]),kt=e(R[0]),le=t(R[1]),ge=Math.hypot(kt-tt,le-gt)+xs,ie=-Math.atan2(le-gt,kt-tt),Le=new ne(new sn(ge,1,xs),k);Le.rotation.y=ie,Le.position.set((tt+kt)/2,0,(gt+le)/2),Le.castShadow=Le.receiveShadow=!0,p.add(Le);let Oe=new ne(new sn(ge+0.002,0.012,xs+0.002),Vt);Oe.rotation.y=ie,Oe.position.copy(Le.position),Oe.visible=K,p.add(Oe);let nn=Math.hypot(kt-tt,le-gt)||1,Wn={corpo:Le,topo:Oe,base:N,frente:E[1]>=340&&R[1]>=340,comTopo:K,h:P,seg:{x:(tt+kt)/2,z:(gt+le)/2,nx:-(le-gt)/nn,nz:(kt-tt)/nn}};return st(Wn,P),Wn},st=(E,R)=>{E.h=R,E.corpo.scale.y=R,E.corpo.position.y=E.base+R/2,E.topo.position.y=E.base+R+0.006},mt=[];u.forEach((E)=>{for(let R=1;R<E.length;R++){mt.push(U(E[R-1],E[R],$n));let P=U(E[R-1],E[R],0.07,0,W,!1);P.corpo.scale.z=1.18}});{let[E,R,P,N]=d,k=U([E+P/2,R],[E+P/2,R+N],$n);k.corpo.geometry=new sn(i(N)+xs,1,i(P)),k.topo.geometry=new sn(i(N)+xs,0.012,i(P)),mt.push(k)}let yt=[],ft=[],Qt=[],Dt=[],Ft=v("#e9eaea",{metalness:0.4,roughness:0.35}),ce=F.clone(),Tt=[ce,Ft];s.forEach(([E,R])=>{let P=U(E,R,1);P.frente=!1,Qt.push(P),yt.push(U(E,R,$n-2.1,2.1));let N=U(E,R,1.1,1,ce,!1);N.corpo.scale.z=0.25,Dt.push(N),[1,2.07].forEach((tt)=>{let gt=U(E,R,0.03,tt,Ft,!1);if(gt.corpo.scale.z=0.5,tt>2)Dt.push(gt)});let k=[(E[0]+R[0])/2,(E[1]+R[1])/2],K=E[0]===R[0];U(K?[k[0],k[1]-0.4]:[k[0]-0.4,k[1]],K?[k[0],k[1]+0.4]:[k[0]+0.4,k[1]],1.07,1,Ft,!1)});{let E=U(o[0],o[1],2.1,0,ce,!1);E.corpo.scale.z=0.25,yt.push(U(o[0],o[1],$n-2.1,2.1)),U(o[0],o[1],0.04,2.07,Ft,!1);let R=(o[0][0]+o[1][0])/2;U([R,302.5],[R,305.5],2.1,0,Ft,!1)}{let[E,R]=f,P=Math.round((R[0]-E[0])/3.2),N=v("#f2f0ea",{roughness:0.5});for(let K=0;K<=P;K++){let tt=Z(0.01,0.01,1.05,N,6);tt.position.set(e(E[0]+K*(R[0]-E[0])/P),0.525,t(E[1])-0.02),tt.castShadow=!0,p.add(tt)}U(E,R,0.05,1.05,N,!1);let k=U(E,R,1.3,1.1,v("#ffffff",{transparent:!0,opacity:0.1,side:Pn}),!1);k.corpo.scale.z=0.1,yt.push(k),[[50,304],[50,346]].forEach(()=>{})}{let E=d0();E.wrapS=E.wrapT=Vs,E.repeat.set(3,1);let R=qt(1.9,0.62,v("#fff",{map:E,roughness:0.4}));R.position.set(e(110),1.22,t(20)+xs/2+0.005),p.add(R)}let Bt=(E,R,P,N,k="#f7f6f2")=>{let K=new Ut,tt=v(k,{roughness:0.5});return Tt.push(tt),L(K,J(P,2.1,0.035,tt,0.005),P/2,1.05,0),L(K,ee(Z(0.012,0.012,0.12,A,8),"x"),P-0.08,1,0.03),L(K,ee(Z(0.012,0.012,0.12,A,8),"x"),P-0.08,1,-0.03),K.position.set(E,0,R),K.rotation.y=N,_t(K),p.add(K),K},Se=[Bt(e(50),t(160),0.85,1.2,"#efe9df"),Bt(e(216),t(199),0.55,2),Bt(e(221),t(230),0.7,1),Bt(e(200),t(232),0.7,-1.1)],te=[],Ht=Wt(1.8,2.3,"#a8a9ab");Ht.traverse((E)=>{let R=E;if(R.isMesh)Tt.push(R.material)}),Ht.position.set(e(270),0,t(342)),te.push(Ht);let fe=Wt(1.4,2.3,"#f3f1ec");fe.traverse((E)=>{let R=E;if(R.isMesh)Tt.push(R.material)}),fe.position.set(e(278),0,t(114)),te.push(fe);{let E=new Ut,R=J(0.8,0.02,0.22,v("#2e2a26"),0.01);R.position.y=0.42,R.rotation.z=1.2,E.add(R),[-1,1].forEach((P)=>{let N=Rt(0.03,v("#d6a23a"),8);N.position.set(-0.05+P*0.02,0.06+(P+1)*0.32,0.08),E.add(N)}),E.position.set(e(322),0,t(160)),te.push(E)}{let E=new Ut,R=Z(0.17,0.14,0.25,v("#ef8a9c"),18);R.position.y=0.125,R.scale.x=1.6,E.add(R);let P=Z(0.1,0.1,0.1,v("#7a1f3d"),16);P.position.set(0.12,0.2,0),E.add(P),E.position.set(e(150),0,t(208)),te.push(E)}for(let E=0;E<6;E++){let R=$t(0.14,0.32+E%3*0.08,4);R.position.set(e(56+E*8),0,t(342.5)),te.push(R)}{let E=new Ut,R=Z(0.012,0.012,1.2,v("#d64a6a"),6);R.position.y=0.6,R.rotation.z=0.15,E.add(R);let P=Z(0.12,0.14,0.05,v("#c9c9c9",{roughness:1}),14);P.position.y=0.03,E.add(P),E.position.set(e(178),0,t(310)),te.push(E)}{let E=new Ut,R=Z(0.06,0.08,0.22,v("#78c850",{transparent:!0,opacity:0.8}),14);R.position.y=0.11,E.add(R),E.position.set(e(178),0,t(322)),te.push(E)}{let E=new Ut,R=it(0.25,0.02,0.1,v("#fff"));R.position.set(0,1.35,0),E.add(R);let P=Z(0.03,0.03,0.16,v("#8d6ad1"),10);P.position.set(0.05,1.44,0),E.add(P);let N=Z(0.003,0.003,0.2,v("#2a7a3a"),4);N.position.set(-0.05,1.2,0),E.add(N),E.position.set(e(51)+0.07,0,t(120)),E.rotation.y=Math.PI/2,te.push(E)}{let E=new Ut,R=qt(1.2,0.9,v("#fff",{transparent:!0,opacity:0}));E.add(R),te.push(E)}te.forEach((E)=>{_t(E),p.add(E)});let ve={"+z":0,"-z":Math.PI,"+x":Math.PI/2,"-x":-Math.PI/2},Ie=new Map,Q=new Map,St=new Map;r.forEach((E)=>St.set(E.id,[...St.get(E.id)||[],E])),St.forEach((E,R)=>{let P=E.reduce((K,tt)=>K+e(tt.x)+i(tt.w)/2,0)/E.length,N=E.reduce((K,tt)=>K+t(tt.y)+i(tt.d)/2,0)/E.length,k=new Ut;k.position.set(P,0,N),k.userData.grupo=R,p.add(k),Ie.set(R,k),Q.set(R,k.position.clone()),E.forEach((K)=>{let tt=K.face==="+x"||K.face==="-x",gt=i(tt?K.d:K.w),kt=i(tt?K.w:K.d),le=(ye[K.id]||((ge,ie,Le)=>{let Oe=new Ut;return L(Oe,J(ge,Le,ie,T),0,Le/2,0),Oe}))(gt,kt,K.h,K);if(le.rotation.y=ve[K.face||"+z"],le.position.set(e(K.x)+i(K.w)/2-P,K.base||0,t(K.y)+i(K.d)/2-N),_t(le),K.id.startsWith("tapete"))le.traverse((ge)=>{ge.castShadow=!1});le.traverse((ge)=>{let ie=ge;if(!ie.isMesh)return;ie.userData.movel=K.id,ie.material=ie.material.clone(),xt.set(K.id,[...xt.get(K.id)||[],ie])}),k.add(le)}),re.push(k)}),xt.get("cortina-sala")?.forEach((E)=>Tt.push(E.material));let dt=new Ut;dt.visible=!1,p.add(dt);let vt=!1,Ot=bn(4,256,(E)=>{let R=E.createLinearGradient(0,0,0,256);R.addColorStop(0,"#5f97d6"),R.addColorStop(0.55,"#a9c9ec"),R.addColorStop(1,"#e9eef0"),E.fillStyle=R,E.fillRect(0,0,4,256)}),Lt=2.8,jt=-Lt*4-0.18;function ze(){if(vt)return;vt=!0;let E=(()=>{let ue=7;return()=>(ue=ue*16807%2147483647)/2147483647})(),R=new ne(new Zs(1400,64).rotateX(-Math.PI/2),v("#8a9a6a",{roughness:1}));R.position.y=jt-0.05,dt.add(R);let P=new ne(new Yn(26,34).rotateX(-Math.PI/2),v("#c9b9a3",{roughness:1}));P.position.set(de.x+3,jt,de.z+24),P.receiveShadow=!0,dt.add(P);for(let ue=0;ue<9;ue++){let He=new ne(new Yn(0.08,4.6).rotateX(-Math.PI/2),v("#e7c84b"));He.position.set(de.x-6+ue*2.6,jt+0.01,de.z+15),dt.add(He)}let N=["#d8d8d8","#f2f2f2","#9aa1a8","#b3262b","#2b2f36","#c9ccd0"];for(let ue=0;ue<14;ue++){let He=J(1.8,1.3,4.2,v(N[ue%6],{metalness:0.4,roughness:0.35}),0.35);He.position.set(de.x-6+ue%7*2.6+(ue>6?0:0),jt+0.65,de.z+15+(ue>6?9:0)),He.castShadow=!0,dt.add(He)}let k=v("#eeeeea",{roughness:0.9}),K=v("#c4c6c4",{roughness:0.9}),tt=(ue,He,Be,ke,li,ci=0,wn=!0)=>{let We=new Ut,hi=li*Lt;L(We,it(Be,hi,ke,k),0,hi/2,0),L(We,it(Be+0.1,Lt*1.3,ke+0.1,K),0,Lt*0.65,0),L(We,it(Be*0.3,2.2,ke*0.5,K),0,hi+1.1,0);for(let vn=0;vn<li;vn++)for(let Fn=0;Fn<Math.floor(Be/3.2);Fn++){let Ti=-Be/2+1.6+Fn*3.2,wi=vn*Lt+1.5;if(L(We,it(1.2,1.1,0.05,v("#55606b",{roughness:0.2,metalness:0.3})),Ti,wi,ke/2+0.02),L(We,it(1.2,1.1,0.05,v("#55606b",{roughness:0.2,metalness:0.3})),Ti,wi,-ke/2-0.02),wn&&Fn%2===0&&vn>0)L(We,it(2.4,0.08,1,k),Ti,vn*Lt,ke/2+0.5),L(We,it(2.4,1,0.04,v("#f4f4f2",{transparent:!0,opacity:0.55})),Ti,vn*Lt+0.5,ke/2+1)}return We.position.set(ue,jt,He),We.rotation.y=ci,We.traverse((vn)=>{if(vn.isMesh)vn.castShadow=!0,vn.receiveShadow=!0}),dt.add(We),We},gt=it(e(332)-e(46)+0.2,-jt,t(350)-t(16)+0.2,k);gt.position.set((e(46)+e(332))/2,jt/2-0.09,(t(16)+t(350))/2),gt.receiveShadow=!0,dt.add(gt);for(let ue=0;ue<4;ue++){let He=it(e(332)-e(46)+0.25,0.12,0.05,K);He.position.set((e(46)+e(332))/2,jt+(ue+1)*Lt,t(350)+0.12),dt.add(He)}tt(de.x-21,de.z+32,24,11,5,Math.PI/2),tt(de.x-22,de.z+8,20,11,5,Math.PI/2),tt(de.x+26,de.z-6,20,11,5,-Math.PI/2),tt(de.x-4,de.z-26,22,11,5,Math.PI);let kt=it(70,2.2,0.2,v("#d9d6cf"));kt.position.set(de.x,jt+1.1,de.z+44),dt.add(kt);let le=v("#4f7d36",{roughness:1}),ge=v("#6b9a43",{roughness:1}),ie=v("#6d4c35"),Le=(ue,He,Be=1)=>{let ke=new Ut;L(ke,Z(0.15*Be,0.2*Be,2.5*Be,ie,6),0,1.25*Be,0),L(ke,Rt(1.6*Be,E()>0.5?le:ge,8),0,3.2*Be,0),ke.position.set(ue,jt,He),dt.add(ke)};for(let ue=0;ue<26;ue++)Le(de.x-34+ue*2.8,de.z+47+E()*3,0.8+E()*0.6);for(let ue=0;ue<10;ue++)Le(de.x-30+E()*10,de.z-30+E()*60,0.9+E()*0.5);let Oe=new sn(1,1,1),nn=700,Wn=300,rr=new Ys(Oe,v("#f1ece2",{roughness:1}),nn),bs=new Ys(Oe,v("#b4593a",{roughness:1}),nn),Ts=new Ys(Oe,v("#e3e2de",{roughness:0.9}),Wn),Gi=new Ce,ar=new In,oa=new X,la=new X,Kc=new xe;for(let ue=0;ue<nn;ue++){let He=(E()-0.5)*Math.PI*1.7+(E()>0.25?0:Math.PI),Be=60+E()*340,ke=de.x+Math.sin(He)*Be,li=de.z+Math.cos(He)*Be,ci=5+E()*5,wn=5+E()*6,We=3+Math.floor(E()*3)*2.8,hi=E()*Math.PI;ar.setFromAxisAngle(new X(0,1,0),hi),Gi.compose(oa.set(ke,jt-6+Be*0.02+We/2,li),ar,la.set(ci,We,wn)),rr.setMatrixAt(ue,Gi),Gi.compose(oa.set(ke,jt-6+Be*0.02+We+0.25,li),ar,la.set(ci+0.6,0.5,wn+0.6)),bs.setMatrixAt(ue,Gi)}for(let ue=0;ue<Wn;ue++){let He=(E()-0.5)*Math.PI*0.9,Be=300+E()*900,ke=de.x+Math.sin(He)*Be,li=de.z+Math.cos(He)*Be,ci=12+E()*14,wn=12+E()*(Be>700?55:30);Gi.compose(oa.set(ke,jt-8+wn/2+Be*0.01,li),ar.identity(),la.set(ci,wn,ci*(0.7+E()*0.6))),Ts.setMatrixAt(ue,Gi);let We=0.82+E()*0.15;Ts.setColorAt(ue,Kc.setRGB(We,We*(0.97+E()*0.04),We*0.96))}[rr,bs,Ts].forEach((ue)=>{if(ue.instanceMatrix.needsUpdate=!0,ue.instanceColor)ue.instanceColor.needsUpdate=!0;dt.add(ue)});for(let ue=0;ue<16;ue++){let He=(E()-0.5)*Math.PI*1.6,Be=140+E()*250,ke=new ne(new ps(30+E()*40,12,8),v(E()>0.5?"#5f7f45":"#6f8c4f",{roughness:1}));ke.scale.y=0.25,ke.position.set(de.x+Math.sin(He)*Be,jt-6,de.z+Math.cos(He)*Be),dt.add(ke)}let Ho=(ue,He,Be,ke)=>{let wn=new Qe,We=[],hi=[];for(let Fn=0;Fn<=160;Fn++){let Ti=-1300+Fn*2600/160,wi=Fn/160,jc=He*(0.55+0.25*Math.sin(wi*9+ke)+0.12*Math.sin(wi*23+ke*2)+0.08*Math.sin(wi*57))*(1-Math.pow(Math.abs(wi-0.5)*1.6,3));if(We.push(Ti,jt-20,0,Ti,jt+Math.max(10,jc),-12),Fn<160){let Wi=Fn*2;hi.push(Wi,Wi+2,Wi+1,Wi+1,Wi+2,Wi+3)}}wn.setAttribute("position",new Pe(We,3)),wn.setIndex(hi),wn.computeVertexNormals();let vn=new ne(wn,new Zn({color:Be,roughness:1,side:Pn}));vn.position.set(de.x,0,de.z+ue),dt.add(vn)};Ho(1700,330,"#7189a6",0.3),Ho(1350,170,"#82977a",1.7)}let Ge=!1,Te=()=>{let E=Ge&&!pe;dt.visible=E,oe.visible=!E,p.background=E?Ot:null,p.fog=E?new Vr("#dfe7ee",260,2300):null,x.maxPolarAngle=E?1.56:1.35,x.maxDistance=E?60:30,h.shadowMap.needsUpdate=!0},Un=new Ut;p.add(Un);let Nn=new Zn({color:"#e0962e",transparent:!0,opacity:0.38}),ea=new fs({color:"#c47a12"}),gn=new Ut;p.add(gn);let Kn=new Map,ys=v("#a9784d",{roughness:0.55}),Mi=v("#f2f1ec",{roughness:0.5}),Gn=v("#8b8f98",{roughness:1,map:Hi("#8b8f98")});function tr(E){let R=new Ut,P=E.l/100,N=E.p/100,k=E.a/100,K=(tt,gt,kt,le=I)=>L(R,Z(0.018,0.018,kt,le,8),tt,kt/2,gt);if(E.tipo==="mesa")L(R,J(P,0.035,N,ys,0.01),0,k-0.018,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([tt,gt])=>K(tt*(P/2-0.05),gt*(N/2-0.05),k-0.03));else if(E.tipo==="cadeira")L(R,J(P,0.05,N,Gn,0.02),0,Math.min(0.47,k*0.5),0),L(R,J(P,k*0.45,0.04,Gn,0.02),0,k*0.75,-N/2+0.03),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([tt,gt])=>K(tt*(P/2-0.04),gt*(N/2-0.04),Math.min(0.45,k*0.48)));else if(E.tipo==="estante"){[-1,1].forEach((tt)=>L(R,it(0.02,k,N,Mi),tt*(P/2-0.01),k/2,0));for(let tt=0;tt<=4;tt++)L(R,it(P,0.02,N,Mi),0,0.02+tt*(k-0.04)/4,0);L(R,it(P,k,0.01,Mi),0,k/2,-N/2)}else if(E.tipo==="tapete")L(R,J(P,0.012,N,v("#c9b89a",{roughness:1,map:Jc("#c9b89a","#a99673")}),0.004),0,0.006,0);else if(E.tipo==="cama")L(R,J(P,0.3,N,v("#3a3a3f"),0.02),0,0.15,0),L(R,J(P-0.04,0.18,N-0.04,v("#eeeae2"),0.05),0,0.39,0),L(R,It(P,N*0.75,v("#7d8aa0",{side:Pn,roughness:0.8}),0.15),0,0.5,N*0.1);else if(E.tipo==="sofa")L(R,J(P,k*0.5,N,Gn,0.04),0,k*0.25,0),L(R,J(P,k*0.5,0.18,Gn,0.05),0,k*0.7,-N/2+0.09),[-1,1].forEach((tt)=>L(R,J(0.14,k*0.7,N,Gn,0.05),tt*(P/2-0.07),k*0.35,0));else if(E.tipo==="armario")L(R,J(P,k,N,Mi,0.01),0,k/2,0),L(R,it(0.004,k-0.06,0.004,v("#ccc")),0,k/2,N/2+0.002),[-1,1].forEach((tt)=>pt(R,tt*0.05,k*0.55,N/2+0.015,!0,0.14));else if(E.tipo==="fantasma"){let tt=L(R,it(P,k,N,new Zn({color:"#e0962e",transparent:!0,opacity:0.4})),0,k/2+0.005,0);tt.castShadow=!1,L(R,new oo(new mo(new sn(P,k,N)),new fs({color:"#c47a12"})),0,k/2+0.005,0)}else L(R,J(P,k,N,ys,0.01),0,k/2,0);return R.position.set(E.x,0,E.z),R.rotation.y=E.rot||0,R.userData.extra=E.id,R.traverse((tt)=>{if(tt.userData.extra=E.id,tt.isMesh&&E.tipo!=="fantasma")tt.castShadow=!0,tt.receiveShadow=!0}),R}let ki=new Set(["balcao","pia-cozinha","box","vaso","pia-banheiro","tanque","varal-teto","armario-cozinha","guarda-roupa-escritorio","guarda-roupa-casal","quadro-branco","quadro-sala","quadro-quarto","cortina-sala","microondas","filtro","escorredor","fogao"]),er=[["a porta de entrada",50,126,74,160],["a porta do banheiro",194,186,216,212],["a porta do escritório",208,202,236,232],["a porta do quarto",200,224,228,246],["a porta da varanda",60,294,150,314]],vs=(E)=>new Dn().setFromObject(E);function nr(E,R){let P=vs(E);if(P.expandByVector(new X(-0.03,0,-0.03)),P.min.y>1.2)return"";for(let[k,K,tt,gt,kt]of er)if(!(R.startsWith&&R.startsWith("tapete"))&&P.max.x>e(K)&&P.min.x<e(gt)&&P.max.z>t(tt)&&P.min.z<t(kt))return"Atrapalha "+k;for(let k of mt){let K=new Dn().setFromObject(k.corpo);if(K.min.y=0,K.intersectsBox(P))return"Bate na parede"}let N=[...[...Ie.entries()].map(([k,K])=>[k,K]),...[...Kn.entries()].map(([k,K])=>[k,K])];for(let[k,K]of N){if(K===E||k.startsWith("tapete")||K.userData.extra&&Ms.get(k)==="tapete")continue;let tt=vs(K);if(tt.min.y>1.2||tt.max.y<0.05)continue;if(tt.intersectsBox(P))return"Bate em "+(O(k)||"outro móvel")}return""}let Ms=new Map,Ss=new Map,O=(E)=>Ss.get(E)||r.find((R)=>R.id===E)?.nome,nt=[];[...s,o].forEach(([E,R])=>{let P=e((E[0]+R[0])/2),N=t((E[1]+R[1])/2),k=E[0]===R[0],K=new X(P+(k?-1.4:0),0,N+(k?0:N>de.z?-1.4:1.4)),tt=new vo(16773596,0,6,0.75,0.8,1.2);tt.position.set(P+(k?0.6:0),2.2,N+(k?0:N>de.z?0.6:-0.6)),tt.target.position.copy(K),p.add(tt,tt.target),nt.push(tt)});let lt=n.map((E)=>{let R=new js(16766883,0,Math.max(4,i(Math.max(E.w,E.h))*1.8),1.6);return R.position.set(e(E.x+E.w/2),2.35,t(E.y+E.h/2)),p.add(R),R}),ot=p.children.find((E)=>E.isHemisphereLight),et=[];xt.get("criado")?.forEach((E)=>{let R=E.material;if(R.emissive&&Math.abs(R.emissiveIntensity-0.35)<0.01)et.push(R)});let At=14,Pt=!1;function Xt(){let E=At,R=Math.max(0,Math.sin(Math.PI*(E-6)/13)),P=E<6.3||E>18.7,N=Math.PI*(E-6)/13;if(b.position.set(de.x-Math.cos(N)*10,1+R*12,de.z+6-Math.sin(N)*2),b.intensity=P?0:(Pt?2.6:2.3)*Math.pow(R,0.45),b.color.set(R<0.35?"#ffb27a":"#fff2e0"),ot)ot.intensity=P?0.22:0.45+R*(Pt?0.7:0.85),ot.color.set(P?"#7f8fb5":"#ffffff");if(p.environmentIntensity=P?0.08:(Pt?0.85:0.55)*(0.35+0.65*R),lt.forEach((k)=>k.intensity=P?2.2:0),nt.forEach((k)=>k.intensity=P?0:(Pt?3.2:1.2)*R),et.forEach((k)=>{k.emissiveIntensity=P?1.6:0.35}),h.toneMappingExposure=P?0.95:Pt?1.12:1.05,p.background&&Ge)p.background=P?Zt:Ot;if(p.fog)p.fog.color.set(P?"#2b3448":"#dfe7ee");h.shadowMap.needsUpdate=!0,en?.()}let Zt=bn(4,256,(E)=>{let R=E.createLinearGradient(0,0,0,256);R.addColorStop(0,"#0d1630"),R.addColorStop(0.6,"#2b3a5c"),R.addColorStop(1,"#4a4a5e"),E.fillStyle=R,E.fillRect(0,0,4,256)}),he=re.find((E)=>E.userData.piso)?.material;function me(){h.setPixelRatio(Math.min(devicePixelRatio,Pt?2.5:1.75)),ra(),h.shadowMap.type=Pt?Yl:Ja,b.shadow.radius=Pt?7:3,b.shadow.blurSamples=16;let E=Pt?4096:2048;if(b.shadow.mapSize.x!==E)b.shadow.mapSize.set(E,E),b.shadow.map?.dispose(),b.shadow.map=null;if(he)he.roughness=Pt?0.14:0.35,he.envMapIntensity=Pt?1.4:1;p.traverse((R)=>{let P=R;if(P.isMesh)[].concat(P.material).forEach((N)=>N.needsUpdate=!0)}),Xt()}let Jt=new En(new X(0,-1,0),qc+0.02),Ee=!0,pe=!1,be=!1,tn=()=>{},we="";function Kt(E=!1){let R=x.target,P=g.position,N=[R.x,R.z,P.x,P.z].map((tt)=>tt.toFixed(1)).join();if(!E&&N===we)return!1;we=N;let k=(tt)=>{let gt=(R.x-tt.seg.x)*tt.seg.nx+(R.z-tt.seg.z)*tt.seg.nz,kt=(P.x-tt.seg.x)*tt.seg.nx+(P.z-tt.seg.z)*tt.seg.nz;return gt*kt<0&&Math.abs(kt)>0.15},K=!1;if(mt.forEach((tt)=>{let gt=k(tt);if(gt!==!!tt.cortada)tt.cortada=gt,st(tt,gt?Yc:$n),K=!0}),Qt.forEach((tt)=>{let gt=k(tt);if(gt!==!!tt.cortada)tt.cortada=gt,st(tt,gt?Yc:1),K=!0}),yt.forEach((tt)=>{let gt=k(tt);if(gt!==!!tt.cortada)tt.cortada=gt,tt.corpo.visible=!gt,tt.topo.visible=tt.comTopo&&!gt,K=!0}),Dt.forEach((tt)=>{let gt=!k(tt);if(tt.corpo.visible!==gt)tt.corpo.visible=gt,K=!0}),K)h.shadowMap.needsUpdate=!0;return K}let hn=()=>{let E=pe?$n:Ee?$n:qc;if(mt.forEach((P)=>st(P,E)),Qt.forEach((P)=>{P.cortada=!1,st(P,Math.min(1,E))}),yt.forEach((P)=>{P.cortada=!1,P.corpo.visible=E===$n&&!pe,P.topo.visible=P.comTopo&&P.corpo.visible}),Dt.forEach((P)=>P.corpo.visible=E===$n||pe),mt.forEach((P)=>P.cortada=!1),!pe&&Ee&&!be)Kt(!0);let R=!pe&&!Ee?[Jt]:[];Tt.forEach((P)=>{P.clippingPlanes=R,P.needsUpdate=!0}),Se.forEach((P)=>P.visible=!pe),[Ht,fe].forEach((P)=>P.visible=!pe)},ae=null,fn=()=>{},_n=new bo,rn=new Et,pn=null,Re=h.domElement,xn=!1,jn=()=>{},De=null,Tn=!1,yn=()=>{},Ke=[],Es=new Ut;p.add(Es);let na=new En(new X(0,1,0),0),ia=(E)=>{let R=Re.getBoundingClientRect();rn.set((E.clientX-R.left)/R.width*2-1,-((E.clientY-R.top)/R.height)*2+1),_n.setFromCamera(rn,y)},Do=(E)=>{while(E){if(!E.visible)return!1;E=E.parent}return!0},Lo=()=>_n.intersectObjects([...re,gn,...mt.map((E)=>E.corpo)],!0).find((E)=>Do(E.object)&&!(E.object.material?.transparent&&!E.object.userData.extra)),ir=(E,R,P,N)=>{let k=P==="movel"?Q.get(R):new X;jn({id:R,tipo:P,dx:+(E.position.x-k.x).toFixed(3),dz:+(E.position.z-k.z).toFixed(3),x:+E.position.x.toFixed(3),z:+E.position.z.toFixed(3),rot:+E.rotation.y.toFixed(4),colisao:nr(E,R),fim:N})},Uo=(E,R)=>E.traverse((P)=>{let N=P.material;if(N&&N.emissive&&!Array.isArray(N))N.emissive.setHex(R)}),Si=null,Ei=0,sr=-0.1,bi=null;Re.addEventListener("pointerdown",(E)=>{if(pn={x:E.clientX,y:E.clientY,t:Date.now()},be){Si={x:E.clientX,y:E.clientY,yaw:Ei,pitch:sr};return}if(!xn||Tn)return;ia(E);let R=Lo();if(!R)return;let P=R.object.userData.movel,N=R.object.userData.extra,k=N?"extra":"movel",K=N||P;if(!K)return;if(k==="movel"&&ki.has(K)){jn({id:K,tipo:k,dx:0,dz:0,x:0,z:0,rot:0,colisao:"",fixo:!0,fim:!0});return}let tt=k==="movel"?Ie.get(K):Kn.get(K);if(!tt)return;let gt=new X;_n.ray.intersectPlane(na,gt),De={obj:tt,id:K,tipo:k,off:tt.position.clone().sub(gt)},S.enabled=!1,Re.setPointerCapture(E.pointerId),ir(tt,K,k,!1)}),Re.addEventListener("pointermove",(E)=>{if(be&&Si){Ei=Si.yaw-(E.clientX-Si.x)*0.005,sr=Math.max(-1.2,Math.min(1.2,Si.pitch-(E.clientY-Si.y)*0.004)),en();return}if(!De)return;ia(E);let R=new X;if(!_n.ray.intersectPlane(na,R))return;let P=(k)=>Math.round(k/0.02)*0.02;De.obj.position.x=P(R.x+De.off.x),De.obj.position.z=P(R.z+De.off.z);let N=nr(De.obj,De.id);Uo(De.obj,N?9048080:6961664),h.shadowMap.needsUpdate=!0,en(),ir(De.obj,De.id,De.tipo,!1)}),Re.addEventListener("pointerup",(E)=>{if(Si=null,De){let P=De;De=null,S.enabled=!be,Uo(P.obj,6961664),ir(P.obj,P.id,P.tipo,!0),pn=null;return}if(!pn||Math.hypot(E.clientX-pn.x,E.clientY-pn.y)>8||Date.now()-pn.t>600){pn=null;return}if(pn=null,ia(E),be){let P=new X;if(_n.ray.intersectPlane(na,P))bi=new X(P.x,1.6,P.z);return}if(Tn){let P=_n.intersectObjects([...re,gn,...mt.map((k)=>k.corpo)],!0).find((k)=>Do(k.object));if(!P)return;if(Ke.length>=2)Ke.length=0,Es.clear();Ke.push(P.point.clone());let N=new ne(new ps(0.035,12,10),new Bi({color:"#e0662e"}));if(N.position.copy(P.point),Es.add(N),Ke.length===2){let k=new Xr(new Qe().setFromPoints(Ke),new fs({color:"#e0662e",depthTest:!1}));k.renderOrder=9,Es.add(k),yn(Math.round(Ke[0].distanceTo(Ke[1])*100))}else yn(null);en();return}let R=Lo();if(!R||!(R.object.userData.movel||R.object.userData.piso))return;fn({movel:R.object.userData.movel,x:R.point.x*40+50,y:R.point.z*40+20})});let sa=null,ra=()=>{let{clientWidth:E,clientHeight:R}=a;h.setSize(E,R,!1),g.aspect=E/Math.max(1,R),g.updateProjectionMatrix();let P=E/Math.max(1,R),N=Math.max(8.9,7.6/P)/2;Object.assign(_,{left:-N*P,right:N*P,top:N,bottom:-N}),_.updateProjectionMatrix()},No=new ResizeObserver(ra);No.observe(a),ra();let aa=()=>{let E=Math.max(1,1.12/g.aspect);return{t:de.clone().add(new X(0,0,0.2)),p:new X(de.x-0.3*E,11.5*E,de.z+7.2*E)}},Fo=aa();g.position.copy(Fo.p),x.target.copy(Fo.t),_.position.set(de.x,20,de.z),_.up.set(0,0,-1),_.lookAt(de),M.target.copy(de),hn(),h.shadowMap.needsUpdate=!0;let Oo=0,Bo=!0,oi=2,en=()=>{oi=2};x.addEventListener("change",en),M.addEventListener("change",en),new ResizeObserver(en).observe(a);let zo=()=>{if(!Bo)return;if(ae)oi=2;if(be)ae=null;if(ae&&!pe){if(x.target.lerp(ae.t,0.12),g.position.lerp(ae.p,0.12),g.position.distanceTo(ae.p)<0.02)ae=null}if(ae&&pe){if(M.target.lerp(ae.t,0.15),_.position.lerp(new X(ae.t.x,20,ae.t.z),0.15),_.zoom+=(ae.p.y-_.zoom)*0.15,_.updateProjectionMatrix(),Math.abs(_.zoom-ae.p.y)<0.01)ae=null}if(be){if(bi){if(g.position.lerp(bi,0.12),g.position.distanceTo(bi)<0.02)bi=null;oi=2}g.rotation.set(sr,Ei,0,"YXZ")}else if(S.update())oi=2;if(oi>0&&!pe&&Ee&&!be&&Kt())oi=2;if(oi>0)oi--,h.render(p,y),tn();Oo=requestAnimationFrame(zo)};return zo(),Xt(),{focar(E){let R=n.find((K)=>K.id===E);if(pe){ae={t:R?new X(e(R.x+R.w/2),0,t(R.y+R.h/2)):de.clone(),p:new X(0,R?Math.min(3.2,7/Math.max(i(R.w),i(R.h),1.6)):1,0)};return}if(!R){ae=aa();return}let P=new X(e(R.x+R.w/2),0,t(R.y+R.h/2)),N=Math.max(i(R.w),i(R.h),1.8),k=Math.max(1,0.9/g.aspect);ae={t:P,p:P.clone().add(new X(N*0.3*k,(3.2+N*1.7)*k,(2.2+N*1.4)*k))}},selecionar(E){if(sa)xt.get(sa)?.forEach((R)=>R.material.emissive?.setHex(0));if(sa=E,E)xt.get(E)?.forEach((R)=>R.material.emissive?.setHex(6961664));en()},topo(E){let R=xt.get(E);if(!R?.length)return null;let P=new Dn;R.forEach((k)=>P.expandByObject(k));let N=P.getCenter(new X);return{x:N.x,y:Math.min(P.max.y,2.3),z:N.z}},onToque(E){fn=E},modo(E){pe=E,ae=null,y=E?_:g,S=E?M:x,M.enabled=E,x.enabled=!E,b.castShadow=!E,hn(),Te(),h.shadowMap.needsUpdate=!0,en()},paredes(E){Ee=E,hn(),h.shadowMap.needsUpdate=!0,en()},paisagem(E){if(Ge=E,E)ze();Te(),en()},vistaVaranda(){if(pe)return;if(!Ge)Ge=!0,ze(),Te();let E=new X(e(110),1.6,t(316));ae={t:E.clone().add(new X(0.3,0.45,4)),p:E}},aplicarLayout(E){Ie.forEach((R,P)=>{let N=Q.get(P),k=E.moveis[P];R.position.set(N.x+(k?.dx||0),0,N.z+(k?.dz||0)),R.rotation.y=k?.rot||0}),gn.clear(),Kn.clear(),Ms.clear(),Ss.clear(),E.extras.forEach((R)=>{let P=tr(R);gn.add(P),Kn.set(R.id,P),Ms.set(R.id,R.tipo),Ss.set(R.id,R.nome)}),h.shadowMap.needsUpdate=!0,en()},editar(E){if(xn=E,!E)De=null},onEditar(E){jn=E},girar(E,R){let P=R==="movel"?Ie.get(E):Kn.get(E);if(!P)return;P.rotation.y=(P.rotation.y+Math.PI/2)%(Math.PI*2),h.shadowMap.needsUpdate=!0,en(),ir(P,E,R,!0)},trena(E){Tn=E,Ke.length=0,Es.clear(),yn(null),en()},onTrena(E){yn=E},trenaMeio(){return Ke.length===2?{x:(Ke[0].x+Ke[1].x)/2,y:(Ke[0].y+Ke[1].y)/2+0.08,z:(Ke[0].z+Ke[1].z)/2}:null},passeio(E,R){if(E===be)return;if(be=E,ae=null,E){if(pe)pe=!1,y=g,S=x,M.enabled=!1;if(!R||R==="sala"||R==="jantar")g.position.set(2.5,1.6,3),Ei=Math.PI;else{let P=n.find((N)=>N.id===R)||n[3];g.position.set(e(P.x+P.w/2),1.6,t(P.y+P.h/2)),Ei=Math.atan2(g.position.x-de.x,g.position.z-de.z)}sr=-0.12,x.enabled=!1,g.fov=62,g.near=0.05,g.updateProjectionMatrix(),hn(),mt.forEach((P)=>st(P,$n)),yt.forEach((P)=>{P.corpo.visible=!0}),Dt.forEach((P)=>P.corpo.visible=!0)}else{g.fov=32,g.near=0.1,g.updateProjectionMatrix(),g.rotation.set(0,0,0),x.enabled=!0;let P=aa();g.position.copy(P.p),x.target.copy(P.t),g.lookAt(P.t),hn()}h.shadowMap.needsUpdate=!0,en()},andar(E){if(!be)return;let R=new X(-Math.sin(Ei),0,-Math.cos(Ei));bi=g.position.clone().addScaledVector(R,E),bi.y=1.6,en()},foto(E){Pt=E,me()},hora(E){At=E,Xt()},longe(){return pe?_.zoom<1.5:be?!1:g.position.distanceTo(x.target)>9},projetar(E,R,P){let N=new X(E,R,P).project(y);return{x:(N.x+1)/2*a.clientWidth,y:(1-N.y)/2*a.clientHeight,ok:N.z<1}},onMudou(E){tn=E,en()},destruir(){Bo=!1,cancelAnimationFrame(Oo),No.disconnect(),x.dispose(),M.dispose(),m.dispose(),h.dispose(),p.traverse((E)=>{E.geometry?.dispose()}),h.domElement.remove()}}}export{R0 as criarCena};
