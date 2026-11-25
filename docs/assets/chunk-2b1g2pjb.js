import{S,u,d,E,it,ot,rt,st,je,X,lt,ae}from"./chunk-pvxzwfe5.js";var Hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Yl=1,Ja=2;var Zl=1,Pn=2;var Jl=4;var Vs=1000;var $a="srgb";class yi{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ko=1234567,os=Math.PI/180,cs=180/Math.PI;function Fi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function Ka(t,e){return(t%e+e)%e}function Qc(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function th(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function Fs(t,e,n){return(1-n)*t+n*e}function eh(t,e,n,i){return Fs(t,e,1-Math.exp(-n*i))}function nh(t,e=1){return e-Math.abs(Ka(t,e*2)-e)}function ih(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function sh(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function rh(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ah(t,e){return t+Math.random()*(e-t)}function oh(t){return t*(0.5-Math.random())}function lh(t){if(t!==void 0)ko=t;let e=ko+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ch(t){return t*os}function hh(t){return t*cs}function uh(t){return(t&t-1)===0&&t!==0}function dh(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function fh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ph(t,e,n,i,s){let{cos:r,sin:o}=Math,a=r(n/2),c=o(n/2),h=r((e+i)/2),p=o((e+i)/2),l=r((e-i)/2),m=o((e-i)/2),y=r((i-e)/2),M=o((i-e)/2);switch(s){case"XYX":t.set(a*p,c*l,c*m,a*h);break;case"YZY":t.set(c*m,a*p,c*l,a*h);break;case"ZXZ":t.set(c*l,c*m,a*p,a*h);break;case"XZX":t.set(a*p,c*M,c*y,a*h);break;case"YXY":t.set(c*y,a*p,c*M,a*h);break;case"ZYZ":t.set(c*M,c*y,a*p,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("Invalid component type.")}}var $l={DEG2RAD:os,RAD2DEG:cs,generateUUID:Fi,clamp:qe,euclideanModulo:Ka,mapLinear:Qc,inverseLerp:th,lerp:Fs,damp:eh,pingpong:nh,smoothstep:ih,smootherstep:sh,randInt:rh,randFloat:ah,randFloatSpread:oh,seededRandom:lh,degToRad:ch,radToDeg:hh,isPowerOfTwo:uh,ceilPowerOfTwo:dh,floorPowerOfTwo:fh,setQuaternionFromProperEuler:ph,normalize:un,denormalize:ss};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t,e,n,i,s,r,o,a,c){if(ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,o,a,c)}set(t,e,n,i,s,r,o,a,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=a,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],a=n[6],c=n[1],h=n[4],p=n[7],l=n[2],m=n[5],y=n[8],M=i[0],b=i[3],g=i[6],_=i[1],U=i[4],R=i[7],D=i[2],j=i[5],B=i[8];return s[0]=r*M+o*_+a*D,s[3]=r*b+o*U+a*j,s[6]=r*g+o*R+a*B,s[1]=c*M+h*_+p*D,s[4]=c*b+h*U+p*j,s[7]=c*g+h*R+p*B,s[2]=l*M+m*_+y*D,s[5]=l*b+m*U+y*j,s[8]=l*g+m*R+y*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*s*h+n*o*a+i*s*c-i*r*a}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],h=t[8],p=h*r-o*c,l=o*a-h*s,m=c*s-r*a,y=e*p+n*l+i*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return t[0]=p*M,t[1]=(i*c-h*n)*M,t[2]=(o*n-i*r)*M,t[3]=l*M,t[4]=(h*e-i*a)*M,t[5]=(i*s-o*e)*M,t[6]=m*M,t[7]=(n*a-c*e)*M,t[8]=(r*e-n*s)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){let a=Math.cos(s),c=Math.sin(s);return this.set(n*a,n*c,-n*(a*r+c*o)+r+t,-i*c,i*a,-i*(-c*r+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var ca=new ge;function Kl(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Br(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mh(){let t=Br("canvas");return t.style.display="block",t}var Go={};function Us(t){if(t in Go)return;Go[t]=!0,console.warn(t)}function gh(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function _h(t){let e=t.elements;e[2]=0.5*e[2]+0.5*e[3],e[6]=0.5*e[6]+0.5*e[7],e[10]=0.5*e[10]+0.5*e[11],e[14]=0.5*e[14]+0.5*e[15]}function xh(t){let e=t.elements;if(e[11]===-1)e[10]=-e[10]-1,e[14]=-e[14];else e[10]=-e[10],e[14]=-e[14]+1}var we={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;if(this.spaces[e].transfer==="srgb")t.r=si(t.r),t.g=si(t.g),t.b=si(t.b);if(this.spaces[e].primaries!==this.spaces[n].primaries)t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ);if(this.spaces[n].transfer==="srgb")t.r=ls(t.r),t.g=ls(t.g),t.b=ls(t.b);return t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){if(t==="")return"linear";return this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function si(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function ls(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Wo=[0.64,0.33,0.3,0.6,0.15,0.06],Vo=[0.2126,0.7152,0.0722],Xo=[0.3127,0.329],qo=new ge().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Yo=new ge().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);we.define({["srgb-linear"]:{primaries:Wo,whitePoint:Xo,transfer:"linear",toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:Vo,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Wo,whitePoint:Xo,transfer:"srgb",toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:Vo,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}});var Vi;class jl{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{if(Vi===void 0)Vi=Br("canvas");Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");if(t instanceof ImageData)n.putImageData(t,0,0);else n.drawImage(t,0,0,t.width,t.height);e=Vi}if(e.width>2048||e.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",0.6);else return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=si(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(si(e[n]/255)*255);else e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var yh=0;class ja{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)if(i[r].isDataTexture)s.push(ha(i[r].image));else s.push(ha(i[r]))}else s=ha(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function ha(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return jl.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var vh=0;class cn extends yi{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,o=1023,a=1009,c=cn.DEFAULT_ANISOTROPY,h=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Fi(),this.name="",this.source=new ja(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=300;cn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,i=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,o=0.1,a=t.elements,c=a[0],h=a[4],p=a[8],l=a[1],m=a[5],y=a[9],M=a[2],b=a[6],g=a[10];if(Math.abs(h-l)<0.01&&Math.abs(p-M)<0.01&&Math.abs(y-b)<0.01){if(Math.abs(h+l)<0.1&&Math.abs(p+M)<0.1&&Math.abs(y+b)<0.1&&Math.abs(c+m+g-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let U=(c+1)/2,R=(m+1)/2,D=(g+1)/2,j=(h+l)/4,B=(p+M)/4,z=(y+b)/4;if(U>R&&U>D)if(U<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(U),i=j/n,s=B/n;else if(R>D)if(R<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(R),n=j/i,s=z/i;else if(D<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(D),n=B/s,i=z/s;return this.set(n,i,s,e),this}let _=Math.sqrt((b-y)*(b-y)+(p-M)*(p-M)+(l-h)*(l-h));if(Math.abs(_)<0.001)_=1;return this.x=(b-y)/_,this.y=(p-M)/_,this.z=(l-h)/_,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ql extends yi{constructor(t=1,e=1,n={}){super();this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);if(this.texture.source=new ja(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null)this.depthTexture=t.depthTexture.clone();return this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Ql{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class Qa extends cn{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tc extends cn{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let a=n[i+0],c=n[i+1],h=n[i+2],p=n[i+3],l=s[r+0],m=s[r+1],y=s[r+2],M=s[r+3];if(o===0){t[e+0]=a,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(o===1){t[e+0]=l,t[e+1]=m,t[e+2]=y,t[e+3]=M;return}if(p!==M||a!==l||c!==m||h!==y){let b=1-o,g=a*l+c*m+h*y+p*M,_=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){let D=Math.sqrt(U),j=Math.atan2(D,g*_);b=Math.sin(b*j)/D,o=Math.sin(o*j)/D}let R=o*_;if(a=a*b+l*R,c=c*b+m*R,h=h*b+y*R,p=p*b+M*R,b===1-o){let D=1/Math.sqrt(a*a+c*c+h*h+p*p);a*=D,c*=D,h*=D,p*=D}}t[e]=a,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,i,s,r){let o=n[i],a=n[i+1],c=n[i+2],h=n[i+3],p=s[r],l=s[r+1],m=s[r+2],y=s[r+3];return t[e]=o*y+h*p+a*m-c*l,t[e+1]=a*y+h*l+c*p-o*m,t[e+2]=c*y+h*m+o*l-a*p,t[e+3]=h*y-o*p-a*l-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:o,sin:a}=Math,c=o(n/2),h=o(i/2),p=o(s/2),l=a(n/2),m=a(i/2),y=a(s/2);switch(r){case"XYZ":this._x=l*h*p+c*m*y,this._y=c*m*p-l*h*y,this._z=c*h*y+l*m*p,this._w=c*h*p-l*m*y;break;case"YXZ":this._x=l*h*p+c*m*y,this._y=c*m*p-l*h*y,this._z=c*h*y-l*m*p,this._w=c*h*p+l*m*y;break;case"ZXY":this._x=l*h*p-c*m*y,this._y=c*m*p+l*h*y,this._z=c*h*y+l*m*p,this._w=c*h*p-l*m*y;break;case"ZYX":this._x=l*h*p-c*m*y,this._y=c*m*p+l*h*y,this._z=c*h*y-l*m*p,this._w=c*h*p+l*m*y;break;case"YZX":this._x=l*h*p+c*m*y,this._y=c*m*p+l*h*y,this._z=c*h*y-l*m*p,this._w=c*h*p-l*m*y;break;case"XZY":this._x=l*h*p-c*m*y,this._y=c*m*p-l*h*y,this._z=c*h*y+l*m*p,this._w=c*h*p+l*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],h=e[6],p=e[10],l=n+o+p;if(l>0){let m=0.5/Math.sqrt(l+1);this._w=0.25/m,this._x=(h-a)*m,this._y=(s-c)*m,this._z=(r-i)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-a)/m,this._x=0.25*m,this._y=(i+r)/m,this._z=(s+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(s-c)/m,this._x=(i+r)/m,this._y=0.25*m,this._z=(a+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(r-i)/m,this._x=(s+c)/m,this._y=(a+h)/m,this._z=0.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<Number.EPSILON)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:o,_y:a,_z:c,_w:h}=e;return this._x=n*h+r*o+i*c-s*a,this._y=i*h+r*a+s*o-n*c,this._z=s*h+r*c+n*a-i*o,this._w=r*h-n*o-i*a-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,r=this._w,o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0)this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o;else this.copy(t);if(o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let a=1-o*o;if(a<=Number.EPSILON){let m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let c=Math.sqrt(a),h=Math.atan2(c,o),p=Math.sin((1-e)*h)/c,l=Math.sin(e*h)/c;return this._w=r*p+this._w*l,this._x=n*p+this._x*l,this._y=i*p+this._y*l,this._z=s*p+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:o,w:a}=t,c=2*(r*i-o*n),h=2*(o*e-s*i),p=2*(s*n-r*e);return this.x=e+a*c+r*p-o*h,this.y=n+a*h+o*c-s*p,this.z=i+a*p+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:o,z:a}=e;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ua=new O,Zo=new In;class Dn{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++){if(t.isMesh===!0)t.getVertexPosition(r,On);else On.fromBufferAttribute(s,r);On.applyMatrix4(t.matrixWorld),this.expandByPoint(On)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();or.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();or.copy(n.boundingBox)}or.applyMatrix4(t.matrixWorld),this.union(or)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),lr.subVectors(this.max,ws),Xi.subVectors(t.a,ws),qi.subVectors(t.b,ws),Yi.subVectors(t.c,ws),ui.subVectors(qi,Xi),di.subVectors(Yi,qi),Ai.subVectors(Xi,Yi);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ai.z,Ai.y,ui.z,0,-ui.x,di.z,0,-di.x,Ai.z,0,-Ai.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ai.y,Ai.x,0];if(!da(e,Xi,qi,Yi,lr))return!1;if(e=[1,0,0,0,1,0,0,0,1],!da(e,Xi,qi,Yi,lr))return!1;return cr.crossVectors(ui,di),e=[cr.x,cr.y,cr.z],da(e,Xi,qi,Yi,lr)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(On).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}var Qn=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,or=new Dn,Xi=new O,qi=new O,Yi=new O,ui=new O,di=new O,Ai=new O,ws=new O,lr=new O,cr=new O,Ri=new O;function da(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ri.fromArray(t,r);let a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=e.dot(Ri),h=n.dot(Ri),p=i.dot(Ri);if(Math.max(-Math.max(c,h,p),Math.min(c,h,p))>a)return!1}return!0}var Mh=new Dn,As=new O,fa=new O;class Oi{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Mh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(fa)),this.expandByPoint(As.copy(t.center).sub(fa));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}var ti=new O,pa=new O,hr=new O,fi=new O,ma=new O,ur=new O,ga=new O;class us{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){pa.copy(t).add(e).multiplyScalar(0.5),hr.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(pa);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(hr),o=fi.dot(this.direction),a=-fi.dot(hr),c=fi.lengthSq(),h=Math.abs(1-r*r),p,l,m,y;if(h>0)if(p=r*a-o,l=r*o-a,y=s*h,p>=0)if(l>=-y)if(l<=y){let M=1/h;p*=M,l*=M,m=p*(p+r*l+2*o)+l*(r*p+l+2*a)+c}else l=s,p=Math.max(0,-(r*l+o)),m=-p*p+l*(l+2*a)+c;else l=-s,p=Math.max(0,-(r*l+o)),m=-p*p+l*(l+2*a)+c;else if(l<=-y)p=Math.max(0,-(-r*s+o)),l=p>0?-s:Math.min(Math.max(-s,-a),s),m=-p*p+l*(l+2*a)+c;else if(l<=y)p=0,l=Math.min(Math.max(-s,-a),s),m=l*(l+2*a)+c;else p=Math.max(0,-(r*s+o)),l=p>0?s:Math.min(Math.max(-s,-a),s),m=-p*p+l*(l+2*a)+c;else l=r>0?-s:s,p=Math.max(0,-(r*l+o)),m=-p*p+l*(l+2*a)+c;if(n)n.copy(this.origin).addScaledVector(this.direction,p);if(i)i.copy(pa).addScaledVector(hr,l);return m}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),i=ti.dot(ti)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,a=n+r;if(a<0)return null;if(o<0)return this.at(a,e);return this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,o,a,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,l=this.origin;if(c>=0)n=(t.min.x-l.x)*c,i=(t.max.x-l.x)*c;else n=(t.max.x-l.x)*c,i=(t.min.x-l.x)*c;if(h>=0)s=(t.min.y-l.y)*h,r=(t.max.y-l.y)*h;else s=(t.max.y-l.y)*h,r=(t.min.y-l.y)*h;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(p>=0)o=(t.min.z-l.z)*p,a=(t.max.z-l.z)*p;else o=(t.max.z-l.z)*p,a=(t.min.z-l.z)*p;if(n>a||o>i)return null;if(o>n||n!==n)n=o;if(a<i||i!==i)i=a;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,s){ma.subVectors(e,t),ur.subVectors(n,t),ga.crossVectors(ma,ur);let r=this.direction.dot(ga),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;fi.subVectors(this.origin,t);let a=o*this.direction.dot(ur.crossVectors(fi,ur));if(a<0)return null;let c=o*this.direction.dot(ma.cross(fi));if(c<0)return null;if(a+c>r)return null;let h=-o*fi.dot(ga);if(h<0)return null;return this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,i,s,r,o,a,c,h,p,l,m,y,M,b){if(Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,o,a,c,h,p,l,m,y,M,b)}set(t,e,n,i,s,r,o,a,c,h,p,l,m,y,M,b){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=r,g[9]=o,g[13]=a,g[2]=c,g[6]=h,g[10]=p,g[14]=l,g[3]=m,g[7]=y,g[11]=M,g[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),r=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){let l=r*h,m=r*p,y=o*h,M=o*p;e[0]=a*h,e[4]=-a*p,e[8]=c,e[1]=m+y*c,e[5]=l-M*c,e[9]=-o*a,e[2]=M-l*c,e[6]=y+m*c,e[10]=r*a}else if(t.order==="YXZ"){let l=a*h,m=a*p,y=c*h,M=c*p;e[0]=l+M*o,e[4]=y*o-m,e[8]=r*c,e[1]=r*p,e[5]=r*h,e[9]=-o,e[2]=m*o-y,e[6]=M+l*o,e[10]=r*a}else if(t.order==="ZXY"){let l=a*h,m=a*p,y=c*h,M=c*p;e[0]=l-M*o,e[4]=-r*p,e[8]=y+m*o,e[1]=m+y*o,e[5]=r*h,e[9]=M-l*o,e[2]=-r*c,e[6]=o,e[10]=r*a}else if(t.order==="ZYX"){let l=r*h,m=r*p,y=o*h,M=o*p;e[0]=a*h,e[4]=y*c-m,e[8]=l*c+M,e[1]=a*p,e[5]=M*c+l,e[9]=m*c-y,e[2]=-c,e[6]=o*a,e[10]=r*a}else if(t.order==="YZX"){let l=r*a,m=r*c,y=o*a,M=o*c;e[0]=a*h,e[4]=M-l*p,e[8]=y*p+m,e[1]=p,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+y,e[10]=l-M*p}else if(t.order==="XZY"){let l=r*a,m=r*c,y=o*a,M=o*c;e[0]=a*h,e[4]=-p,e[8]=c*h,e[1]=l*p+M,e[5]=r*h,e[9]=m*p-y,e[2]=y*p-m,e[6]=o*h,e[10]=M*p+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sh,t,Eh)}lookAt(t,e,n){let i=this.elements;if(Mn.subVectors(t,e),Mn.lengthSq()===0)Mn.z=1;if(Mn.normalize(),pi.crossVectors(n,Mn),pi.lengthSq()===0){if(Math.abs(n.z)===1)Mn.x+=0.0001;else Mn.z+=0.0001;Mn.normalize(),pi.crossVectors(n,Mn)}return pi.normalize(),dr.crossVectors(Mn,pi),i[0]=pi.x,i[4]=dr.x,i[8]=Mn.x,i[1]=pi.y,i[5]=dr.y,i[9]=Mn.y,i[2]=pi.z,i[6]=dr.z,i[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],a=n[8],c=n[12],h=n[1],p=n[5],l=n[9],m=n[13],y=n[2],M=n[6],b=n[10],g=n[14],_=n[3],U=n[7],R=n[11],D=n[15],j=i[0],B=i[4],z=i[8],ct=i[12],P=i[1],I=i[5],W=i[9],Q=i[13],nt=i[2],at=i[6],mt=i[10],k=i[14],J=i[3],H=i[7],wt=i[11],T=i[15];return s[0]=r*j+o*P+a*nt+c*J,s[4]=r*B+o*I+a*at+c*H,s[8]=r*z+o*W+a*mt+c*wt,s[12]=r*ct+o*Q+a*k+c*T,s[1]=h*j+p*P+l*nt+m*J,s[5]=h*B+p*I+l*at+m*H,s[9]=h*z+p*W+l*mt+m*wt,s[13]=h*ct+p*Q+l*k+m*T,s[2]=y*j+M*P+b*nt+g*J,s[6]=y*B+M*I+b*at+g*H,s[10]=y*z+M*W+b*mt+g*wt,s[14]=y*ct+M*Q+b*k+g*T,s[3]=_*j+U*P+R*nt+D*J,s[7]=_*B+U*I+R*at+D*H,s[11]=_*z+U*W+R*mt+D*wt,s[15]=_*ct+U*Q+R*k+D*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],a=t[9],c=t[13],h=t[2],p=t[6],l=t[10],m=t[14],y=t[3],M=t[7],b=t[11],g=t[15];return y*(+s*a*p-i*c*p-s*o*l+n*c*l+i*o*m-n*a*m)+M*(+e*a*m-e*c*l+s*r*l-i*r*m+i*c*h-s*a*h)+b*(+e*c*p-e*o*m-s*r*p+n*r*m+s*o*h-n*c*h)+g*(-i*o*h-e*a*p+e*o*l+i*r*p-n*r*l+n*a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],h=t[8],p=t[9],l=t[10],m=t[11],y=t[12],M=t[13],b=t[14],g=t[15],_=p*b*c-M*l*c+M*a*m-o*b*m-p*a*g+o*l*g,U=y*l*c-h*b*c-y*a*m+r*b*m+h*a*g-r*l*g,R=h*M*c-y*p*c+y*o*m-r*M*m-h*o*g+r*p*g,D=y*p*a-h*M*a-y*o*l+r*M*l+h*o*b-r*p*b,j=e*_+n*U+i*R+s*D;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/j;return t[0]=_*B,t[1]=(M*l*s-p*b*s-M*i*m+n*b*m+p*i*g-n*l*g)*B,t[2]=(o*b*s-M*a*s+M*i*c-n*b*c-o*i*g+n*a*g)*B,t[3]=(p*a*s-o*l*s-p*i*c+n*l*c+o*i*m-n*a*m)*B,t[4]=U*B,t[5]=(h*b*s-y*l*s+y*i*m-e*b*m-h*i*g+e*l*g)*B,t[6]=(y*a*s-r*b*s-y*i*c+e*b*c+r*i*g-e*a*g)*B,t[7]=(r*l*s-h*a*s+h*i*c-e*l*c-r*i*m+e*a*m)*B,t[8]=R*B,t[9]=(y*p*s-h*M*s-y*n*m+e*M*m+h*n*g-e*p*g)*B,t[10]=(r*M*s-y*o*s+y*n*c-e*M*c-r*n*g+e*o*g)*B,t[11]=(h*o*s-r*p*s-h*n*c+e*p*c+r*n*m-e*o*m)*B,t[12]=D*B,t[13]=(h*M*i-y*p*i+y*n*l-e*M*l-h*n*b+e*p*b)*B,t[14]=(y*o*i-r*M*i-y*n*a+e*M*a+r*n*b-e*o*b)*B,t[15]=(r*p*i-h*o*i+h*n*a-e*p*a-r*n*l+e*o*l)*B,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:o,z:a}=t,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*a,c*a+i*o,0,c*o+i*a,h*o+n,h*a-i*r,0,c*a-i*o,h*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:o,_w:a}=e,c=s+s,h=r+r,p=o+o,l=s*c,m=s*h,y=s*p,M=r*h,b=r*p,g=o*p,_=a*c,U=a*h,R=a*p,{x:D,y:j,z:B}=n;return i[0]=(1-(M+g))*D,i[1]=(m+R)*D,i[2]=(y-U)*D,i[3]=0,i[4]=(m-R)*j,i[5]=(1-(l+g))*j,i[6]=(b+_)*j,i[7]=0,i[8]=(y+U)*B,i[9]=(b-_)*B,i[10]=(1-(l+M))*B,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Zi.set(i[0],i[1],i[2]).length(),r=Zi.set(i[4],i[5],i[6]).length(),o=Zi.set(i[8],i[9],i[10]).length();if(this.determinant()<0)s=-s;t.x=i[12],t.y=i[13],t.z=i[14],Bn.copy(this);let c=1/s,h=1/r,p=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=p,Bn.elements[9]*=p,Bn.elements[10]*=p,e.setFromRotationMatrix(Bn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r,o=2000){let a=this.elements,c=2*s/(e-t),h=2*s/(n-i),p=(e+t)/(e-t),l=(n+i)/(n-i),m,y;if(o===2000)m=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===2001)m=-r/(r-s),y=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return a[0]=c,a[4]=0,a[8]=p,a[12]=0,a[1]=0,a[5]=h,a[9]=l,a[13]=0,a[2]=0,a[6]=0,a[10]=m,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,r,o=2000){let a=this.elements,c=1/(e-t),h=1/(n-i),p=1/(r-s),l=(e+t)*c,m=(n+i)*h,y,M;if(o===2000)y=(r+s)*p,M=-2*p;else if(o===2001)y=s*p,M=-1*p;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-l,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-m,a[2]=0,a[6]=0,a[10]=M,a[14]=-y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Zi=new O,Bn=new Re,Sh=new O(0,0,0),Eh=new O(1,1,1),pi=new O,dr=new O,Mn=new O,Jo=new Re,$o=new In;class Xn{constructor(t=0,e=0,n=0,i=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],o=i[8],a=i[1],c=i[5],h=i[9],p=i[2],l=i[6],m=i[10];switch(e){case"XYZ":if(this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,s);else this._x=Math.atan2(l,c),this._z=0;break;case"YXZ":if(this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<0.9999999)this._y=Math.atan2(o,m),this._z=Math.atan2(a,c);else this._y=Math.atan2(-p,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(qe(l,-1,1)),Math.abs(l)<0.9999999)this._y=Math.atan2(-p,m),this._z=Math.atan2(-r,c);else this._y=0,this._z=Math.atan2(a,s);break;case"ZYX":if(this._y=Math.asin(-qe(p,-1,1)),Math.abs(p)<0.9999999)this._x=Math.atan2(l,m),this._z=Math.atan2(a,s);else this._x=0,this._z=Math.atan2(-r,c);break;case"YZX":if(this._z=Math.asin(qe(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s);else this._x=0,this._y=Math.atan2(o,m);break;case"XZY":if(this._z=Math.asin(-qe(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(l,c),this._y=Math.atan2(o,s);else this._x=Math.atan2(-h,m),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $o.setFromEuler(this),this.setFromQuaternion($o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class kr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var bh=0,Ko=new O,Ji=new In,ei=new Re,fr=new O,Rs=new O,Th=new O,wh=new In,jo=new O(1,0,0),Qo=new O(0,1,0),tl=new O(0,0,1),el={type:"added"},Ah={type:"removed"},$i={type:"childadded",child:null},_a={type:"childremoved",child:null};class Xe extends yi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();let t=new O,e=new Xn,n=new In,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new ge}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(jo,t)}rotateY(t){return this.rotateOnAxis(Qo,t)}rotateZ(t){return this.rotateOnAxis(tl,t)}translateOnAxis(t,e){return Ko.copy(t).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jo,t)}translateY(t){return this.translateOnAxis(Qo,t)}translateZ(t){return this.translateOnAxis(tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)fr.copy(t);else fr.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)ei.lookAt(Rs,fr,this.up);else ei.lookAt(fr,Rs,this.up);if(this.quaternion.setFromRotationMatrix(ei),i)ei.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(ei),this.quaternion.premultiply(Ji.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(el),$i.child=t,this.dispatchEvent($i),$i.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ah),_a.child=t,this.dispatchEvent(_a),_a.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld);return t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(el),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(e===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o)=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius};if(this.boundingBox!==null)i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}}function s(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(t);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){let p=a[c];s(t.shapes,p)}else s(t.shapes,a)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(s(t.materials,this.material[a]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(s(t.animations,a))}}if(e){let o=r(t.geometries),a=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),l=r(t.skeletons),m=r(t.animations),y=r(t.nodes);if(o.length>0)n.geometries=o;if(a.length>0)n.materials=a;if(c.length>0)n.textures=c;if(h.length>0)n.images=h;if(p.length>0)n.shapes=p;if(l.length>0)n.skeletons=l;if(m.length>0)n.animations=m;if(y.length>0)n.nodes=y}return n.object=i,n;function r(o){let a=[];for(let c in o){let h=o[c];delete h.metadata,a.push(h)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}Xe.DEFAULT_UP=new O(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new O,ni=new O,xa=new O,ii=new O,Ki=new O,ji=new O,nl=new O,ya=new O,va=new O,Ma=new O,Sa=new Ue,Ea=new Ue,ba=new Ue;class Rn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zn.subVectors(t,e),i.cross(zn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){zn.subVectors(i,e),ni.subVectors(n,e),xa.subVectors(t,e);let r=zn.dot(zn),o=zn.dot(ni),a=zn.dot(xa),c=ni.dot(ni),h=ni.dot(xa),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;let l=1/p,m=(c*a-o*h)*l,y=(r*h-o*a)*l;return s.set(1-m-y,y,m)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,ii)===null)return!1;return ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,i,s,r,o,a){if(this.getBarycoord(t,e,n,i,ii)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(s,ii.x),a.addScaledVector(r,ii.y),a.addScaledVector(o,ii.z),a}static getInterpolatedAttribute(t,e,n,i,s,r){return Sa.setScalar(0),Ea.setScalar(0),ba.setScalar(0),Sa.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Sa,s.x),r.addScaledVector(Ea,s.y),r.addScaledVector(ba,s.z),r}static isFrontFacing(t,e,n,i){return zn.subVectors(n,e),ni.subVectors(t,e),zn.cross(ni).dot(i)<0?!0:!1}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),zn.cross(ni).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,o;Ki.subVectors(i,n),ji.subVectors(s,n),ya.subVectors(t,n);let a=Ki.dot(ya),c=ji.dot(ya);if(a<=0&&c<=0)return e.copy(n);va.subVectors(t,i);let h=Ki.dot(va),p=ji.dot(va);if(h>=0&&p<=h)return e.copy(i);let l=a*p-h*c;if(l<=0&&a>=0&&h<=0)return r=a/(a-h),e.copy(n).addScaledVector(Ki,r);Ma.subVectors(t,s);let m=Ki.dot(Ma),y=ji.dot(Ma);if(y>=0&&m<=y)return e.copy(s);let M=m*c-a*y;if(M<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(n).addScaledVector(ji,o);let b=h*y-m*p;if(b<=0&&p-h>=0&&m-y>=0)return nl.subVectors(s,i),o=(p-h)/(p-h+(m-y)),e.copy(i).addScaledVector(nl,o);let g=1/(b+M+l);return r=M*g,o=l*g,e.copy(n).addScaledVector(Ki,r).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}var ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ta(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class _e{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=we.workingColorSpace){if(t=Ka(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Ta(r,s,t+0.3333333333333333),this.g=Ta(r,s,t),this.b=Ta(r,s,t-0.3333333333333333)}return we.toWorkingColorSpace(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=ec[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else console.warn("THREE.Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return we.fromWorkingColorSpace(on.copy(this),t),Math.round(qe(on.r*255,0,255))*65536+Math.round(qe(on.g*255,0,255))*256+Math.round(qe(on.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(on.copy(this),e);let{r:n,g:i,b:s}=on,r=Math.max(n,i,s),o=Math.min(n,i,s),a,c,h=(o+r)/2;if(o===r)a=0,c=0;else{let p=r-o;switch(c=h<=0.5?p/(r+o):p/(2-r-o),r){case n:a=(i-s)/p+(i<s?6:0);break;case i:a=(s-n)/p+2;break;case s:a=(n-i)/p+4;break}a/=6}return t.h=a,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t="srgb"){we.fromWorkingColorSpace(on.copy(this),t);let{r:e,g:n,b:i}=on;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(pr);let n=Fs(mi.h,pr.h,e),i=Fs(mi.s,pr.s,e),s=Fs(mi.l,pr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var on=new _e;_e.NAMES=ec;var Rh=0;class vi extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Fi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let o in s){let a=s[o];delete a.metadata,r.push(a)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bi extends vi{static get type(){return"MeshBasicMaterial"}constructor(t){super();this.isMeshBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Ve=new O,mr=new Mt;class Cn{constructor(t,e,n=!1){if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=ss(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=un(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=ss(e,this.array);return e}setX(t,e){if(this.normalized)e=un(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=ss(e,this.array);return e}setY(t,e){if(this.normalized)e=un(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=ss(e,this.array);return e}setZ(t,e){if(this.normalized)e=un(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=ss(e,this.array);return e}setW(t,e){if(this.normalized)e=un(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=un(e,this.array),n=un(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=un(e,this.array),n=un(n,this.array),i=un(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=un(e,this.array),n=un(n,this.array),i=un(i,this.array),s=un(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")t.name=this.name;if(this.usage!==35044)t.usage=this.usage;return t}}class to extends Cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eo extends Cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends Cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Ch=0,An=new Re,wa=new Xe,Qi=new O,Sn=new Dn,Cs=new Dn,Ke=new O;class Qe extends yi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Kl(t))?eo:to)(t,1);else this.index=t;return this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new ge().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}if(t.length>e.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Dn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Sn.setFromBufferAttribute(s),this.morphTargetsRelative)Ke.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ke);else this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Oi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let o=e[s];if(Cs.setFromBufferAttribute(o),this.morphTargetsRelative)Ke.addVectors(Sn.min,Cs.min),Sn.expandByPoint(Ke),Ke.addVectors(Sn.max,Cs.max),Sn.expandByPoint(Ke);else Sn.expandByPoint(Cs.min),Sn.expandByPoint(Cs.max)}Sn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ke.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let s=0,r=e.length;s<r;s++){let o=e[s],a=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++){if(Ke.fromBufferAttribute(o,c),a)Qi.fromBufferAttribute(t,c),Ke.add(Qi);i=Math.max(i,n.distanceToSquared(Ke))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),o=[],a=[];for(let z=0;z<n.count;z++)o[z]=new O,a[z]=new O;let c=new O,h=new O,p=new O,l=new Mt,m=new Mt,y=new Mt,M=new O,b=new O;function g(z,ct,P){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,ct),p.fromBufferAttribute(n,P),l.fromBufferAttribute(s,z),m.fromBufferAttribute(s,ct),y.fromBufferAttribute(s,P),h.sub(c),p.sub(c),m.sub(l),y.sub(l);let I=1/(m.x*y.y-y.x*m.y);if(!isFinite(I))return;M.copy(h).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(I),b.copy(p).multiplyScalar(m.x).addScaledVector(h,-y.x).multiplyScalar(I),o[z].add(M),o[ct].add(M),o[P].add(M),a[z].add(b),a[ct].add(b),a[P].add(b)}let _=this.groups;if(_.length===0)_=[{start:0,count:t.count}];for(let z=0,ct=_.length;z<ct;++z){let P=_[z],{start:I,count:W}=P;for(let Q=I,nt=I+W;Q<nt;Q+=3)g(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let U=new O,R=new O,D=new O,j=new O;function B(z){D.fromBufferAttribute(i,z),j.copy(D);let ct=o[z];U.copy(ct),U.sub(D.multiplyScalar(D.dot(ct))).normalize(),R.crossVectors(j,ct);let I=R.dot(a[z])<0?-1:1;r.setXYZW(z,U.x,U.y,U.z,I)}for(let z=0,ct=_.length;z<ct;++z){let P=_[z],{start:I,count:W}=P;for(let Q=I,nt=I+W;Q<nt;Q+=3)B(t.getX(Q+0)),B(t.getX(Q+1)),B(t.getX(Q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,m=n.count;l<m;l++)n.setXYZ(l,0,0,0);let i=new O,s=new O,r=new O,o=new O,a=new O,c=new O,h=new O,p=new O;if(t)for(let l=0,m=t.count;l<m;l+=3){let y=t.getX(l+0),M=t.getX(l+1),b=t.getX(l+2);i.fromBufferAttribute(e,y),s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,b),h.subVectors(r,s),p.subVectors(i,s),h.cross(p),o.fromBufferAttribute(n,y),a.fromBufferAttribute(n,M),c.fromBufferAttribute(n,b),o.add(h),a.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let l=0,m=e.count;l<m;l+=3)i.fromBufferAttribute(e,l+0),s.fromBufferAttribute(e,l+1),r.fromBufferAttribute(e,l+2),h.subVectors(r,s),p.subVectors(i,s),h.cross(p),n.setXYZ(l+0,h.x,h.y,h.z),n.setXYZ(l+1,h.x,h.y,h.z),n.setXYZ(l+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,a){let{array:c,itemSize:h,normalized:p}=o,l=new c.constructor(a.length*h),m=0,y=0;for(let M=0,b=a.length;M<b;M++){if(o.isInterleavedBufferAttribute)m=a[M]*o.data.stride+o.offset;else m=a[M]*h;for(let g=0;g<h;g++)l[y++]=c[m++]}return new Cn(l,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Qe,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=t(a,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let a=[],c=s[o];for(let h=0,p=c.length;h<p;h++){let l=c[h],m=t(l,n);a.push(m)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,a=r.length;o<a;o++){let c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!=="")t.name=this.name;if(Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0){let a=this.parameters;for(let c in a)if(a[c]!==void 0)t[c]=a[c];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let a in n){let c=n[a];t.data.attributes[a]=c.toJSON(t.data)}let i={},s=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],h=[];for(let p=0,l=c.length;p<l;p++){let m=c[p];h.push(m.toJSON(t.data))}if(h.length>0)i[a]=h,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let o=this.boundingSphere;if(o!==null)t.data.boundingSphere={center:o.center.toArray(),radius:o.radius};return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],p=s[c];for(let l=0,m=p.length;l<m;l++)h.push(p[l].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=t.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var il=new Re,Ci=new us,gr=new Oi,sl=new O,_r=new O,xr=new O,yr=new O,Aa=new O,vr=new O,rl=new O,Mr=new O;class te extends Xe{constructor(t=new Qe,e=new Bi){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){vr.set(0,0,0);for(let a=0,c=s.length;a<c;a++){let h=o[a],p=s[a];if(h===0)continue;if(Aa.fromBufferAttribute(p,t),r)vr.addScaledVector(Aa,h);else vr.addScaledVector(Aa.sub(e),h)}e.add(vr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(gr.copy(n.boundingSphere),gr.applyMatrix4(s),Ci.copy(t.ray).recast(t.near),gr.containsPoint(Ci.origin)===!1){if(Ci.intersectSphere(gr,sl)===null)return;if(Ci.origin.distanceToSquared(sl)>(t.far-t.near)**2)return}if(il.copy(s).invert(),Ci.copy(t.ray).applyMatrix4(il),n.boundingBox!==null){if(Ci.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Ci)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,{groups:l,drawRange:m}=s;if(o!==null)if(Array.isArray(r))for(let y=0,M=l.length;y<M;y++){let b=l[y],g=r[b.materialIndex],_=Math.max(b.start,m.start),U=Math.min(o.count,Math.min(b.start+b.count,m.start+m.count));for(let R=_,D=U;R<D;R+=3){let j=o.getX(R),B=o.getX(R+1),z=o.getX(R+2);if(i=Sr(this,g,t,n,c,h,p,j,B,z),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let y=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let b=y,g=M;b<g;b+=3){let _=o.getX(b),U=o.getX(b+1),R=o.getX(b+2);if(i=Sr(this,r,t,n,c,h,p,_,U,R),i)i.faceIndex=Math.floor(b/3),e.push(i)}}else if(a!==void 0)if(Array.isArray(r))for(let y=0,M=l.length;y<M;y++){let b=l[y],g=r[b.materialIndex],_=Math.max(b.start,m.start),U=Math.min(a.count,Math.min(b.start+b.count,m.start+m.count));for(let R=_,D=U;R<D;R+=3){let j=R,B=R+1,z=R+2;if(i=Sr(this,g,t,n,c,h,p,j,B,z),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=b.materialIndex,e.push(i)}}else{let y=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let b=y,g=M;b<g;b+=3){let _=b,U=b+1,R=b+2;if(i=Sr(this,r,t,n,c,h,p,_,U,R),i)i.faceIndex=Math.floor(b/3),e.push(i)}}}}function Ph(t,e,n,i,s,r,o,a){let c;if(e.side===1)c=i.intersectTriangle(o,r,s,!0,a);else c=i.intersectTriangle(s,r,o,e.side===0,a);if(c===null)return null;Mr.copy(a),Mr.applyMatrix4(t.matrixWorld);let h=n.ray.origin.distanceTo(Mr);if(h<n.near||h>n.far)return null;return{distance:h,point:Mr.clone(),object:t}}function Sr(t,e,n,i,s,r,o,a,c,h){t.getVertexPosition(a,_r),t.getVertexPosition(c,xr),t.getVertexPosition(h,yr);let p=Ph(t,e,n,i,_r,xr,yr,rl);if(p){let l=new O;if(Rn.getBarycoord(rl,_r,xr,yr,l),s)p.uv=Rn.getInterpolatedAttribute(s,a,c,h,l,new Mt);if(r)p.uv1=Rn.getInterpolatedAttribute(r,a,c,h,l,new Mt);if(o){if(p.normal=Rn.getInterpolatedAttribute(o,a,c,h,l,new O),p.normal.dot(i.direction)>0)p.normal.multiplyScalar(-1)}let m={a,b:c,c:h,normal:new O,materialIndex:0};Rn.getNormal(_r,xr,yr,m.normal),p.face=m,p.barycoord=l}return p}class sn extends Qe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let a=[],c=[],h=[],p=[],l=0,m=0;y("z","y","x",-1,-1,n,e,t,r,s,0),y("z","y","x",1,-1,n,e,-t,r,s,1),y("x","z","y",1,1,t,n,e,i,r,2),y("x","z","y",1,-1,t,n,-e,i,r,3),y("x","y","z",1,-1,t,e,n,i,s,4),y("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(p,2));function y(M,b,g,_,U,R,D,j,B,z,ct){let P=R/B,I=D/z,W=R/2,Q=D/2,nt=j/2,at=B+1,mt=z+1,k=0,J=0,H=new O;for(let wt=0;wt<mt;wt++){let T=wt*I-Q;for(let Vt=0;Vt<at;Vt++){let Qt=Vt*P-W;H[M]=Qt*_,H[b]=T*U,H[g]=nt,c.push(H.x,H.y,H.z),H[M]=0,H[b]=0,H[g]=j>0?1:-1,h.push(H.x,H.y,H.z),p.push(Vt/B),p.push(1-wt/z),k+=1}}for(let wt=0;wt<z;wt++)for(let T=0;T<B;T++){let Vt=l+T+at*wt,Qt=l+T+at*(wt+1),dt=l+(T+1)+at*(wt+1),bt=l+(T+1)+at*wt;a.push(Vt,Qt,bt),a.push(Qt,dt,bt),J+=6}o.addGroup(m,J,ct),m+=J,l+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion))if(s.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))e[n][i]=s.slice();else e[n][i]=s}}return e}function dn(t){let e={};for(let n=0;n<t.length;n++){let i=hs(t[n]);for(let s in i)e[s]=i[s]}return e}function Ih(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nc(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return we.workingColorSpace}var Dh={clone:hs,merge:dn},Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends vi{static get type(){return"ShaderMaterial"}constructor(t){super();if(this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Ih(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}}class no extends Xe{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=2000}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var gi=new O,al=new Mt,ol=new Mt;class ln extends no{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(os*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(os*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,al,ol),e.subVectors(ol,al)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(os*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:c}=r;s+=r.offsetX*i/a,e-=r.offsetY*n/c,i*=r.width/a,n*=r.height/c}let o=this.filmOffset;if(o!==0)s+=t*o/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}var ts=-90,es=1;class ic extends Xe{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ln(ts,es,t,e);i.layers=this.layers,this.add(i);let s=new ln(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new ln(ts,es,t,e);r.layers=this.layers,this.add(r);let o=new ln(ts,es,t,e);o.layers=this.layers,this.add(o);let a=new ln(ts,es,t,e);a.layers=this.layers,this.add(a);let c=new ln(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,o,a]=e;for(let c of e)this.remove(c);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,o,a,c,h]=this.children,p=t.getRenderTarget(),l=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,a),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(p,l,m),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class io extends cn{constructor(t,e,n,i,s,r,o,a,c,h){t=t!==void 0?t:[],e=e!==void 0?e:301;super(t,e,n,i,s,r,o,a,c,h);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sc extends xi{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new io(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new sn(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;let r=new te(i,s),o=e.minFilter;if(e.minFilter===1008)e.minFilter=1006;return new ic(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var Ra=new O,Nh=new O,Fh=new ge;class En{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ra.subVectors(n,e).cross(Nh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ra),i=this.normal.dot(n);if(i===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let s=-(t.start.dot(this.normal)+this.constant)/i;if(s<0||s>1)return null;return e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fh.getNormalMatrix(t),i=this.coplanarPoint(Ra).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Pi=new Oi,Er=new O;class Gr{constructor(t=new En,e=new En,n=new En,i=new En,s=new En,r=new En){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000){let n=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],h=i[5],p=i[6],l=i[7],m=i[8],y=i[9],M=i[10],b=i[11],g=i[12],_=i[13],U=i[14],R=i[15];if(n[0].setComponents(a-s,l-c,b-m,R-g).normalize(),n[1].setComponents(a+s,l+c,b+m,R+g).normalize(),n[2].setComponents(a+r,l+h,b+y,R+_).normalize(),n[3].setComponents(a-r,l-h,b-y,R-_).normalize(),n[4].setComponents(a-o,l-p,b-M,R-U).normalize(),e===2000)n[5].setComponents(a+o,l+p,b+M,R+U).normalize();else if(e===2001)n[5].setComponents(o,p,M,U).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=0.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Er.x=i.normal.x>0?t.max.x:t.min.x,Er.y=i.normal.y>0?t.max.y:t.min.y,Er.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rc(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){if(e===!0)return;if(n===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Oh(t){let e=new WeakMap;function n(a,c){let{array:h,usage:p}=a,l=h.byteLength,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,h,p),a.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(a.isFloat16BufferAttribute)y=t.HALF_FLOAT;else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:l}}function i(a,c,h){let{array:p,updateRanges:l}=c;if(t.bindBuffer(h,a),l.length===0)t.bufferSubData(h,0,p);else{l.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<l.length;y++){let M=l[m],b=l[y];if(b.start<=M.start+M.count+1)M.count=Math.max(M.count,b.start+b.count-M.start);else++m,l[m]=b}l.length=m+1;for(let y=0,M=l.length;y<M;y++){let b=l[y];t.bufferSubData(h,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;return e.get(a)}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;let c=e.get(a);if(c)t.deleteBuffer(c.buffer),e.delete(a)}function o(a,c){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let p=e.get(a);if(!p||p.version<a.version)e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=e.get(a);if(h===void 0)e.set(a,n(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}class Yn extends Qe{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,o=Math.floor(n),a=Math.floor(i),c=o+1,h=a+1,p=t/o,l=e/a,m=[],y=[],M=[],b=[];for(let g=0;g<h;g++){let _=g*l-r;for(let U=0;U<c;U++){let R=U*p-s;y.push(R,-_,0),M.push(0,0,1),b.push(U/o),b.push(1-g/a)}}for(let g=0;g<a;g++)for(let _=0;_<o;_++){let U=_+c*g,R=_+c*(g+1),D=_+1+c*(g+1),j=_+1+c*g;m.push(U,R,j),m.push(R,D,j)}this.setIndex(m),this.setAttribute("position",new Ce(y,3)),this.setAttribute("normal",new Ce(M,3)),this.setAttribute("uv",new Ce(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bh=`#ifdef USE_ALPHAHASH
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
}`,ve={alphahash_fragment:Bh,alphahash_pars_fragment:zh,alphamap_fragment:Hh,alphamap_pars_fragment:kh,alphatest_fragment:Gh,alphatest_pars_fragment:Wh,aomap_fragment:Vh,aomap_pars_fragment:Xh,batching_pars_vertex:qh,batching_vertex:Yh,begin_vertex:Zh,beginnormal_vertex:Jh,bsdfs:$h,iridescence_fragment:Kh,bumpmap_pars_fragment:jh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:tu,clipping_planes_pars_vertex:eu,clipping_planes_vertex:nu,color_fragment:iu,color_pars_fragment:su,color_pars_vertex:ru,color_vertex:au,common:ou,cube_uv_reflection_fragment:lu,defaultnormal_vertex:cu,displacementmap_pars_vertex:hu,displacementmap_vertex:uu,emissivemap_fragment:du,emissivemap_pars_fragment:fu,colorspace_fragment:pu,colorspace_pars_fragment:mu,envmap_fragment:gu,envmap_common_pars_fragment:_u,envmap_pars_fragment:xu,envmap_pars_vertex:yu,envmap_physical_pars_fragment:Pu,envmap_vertex:vu,fog_vertex:Mu,fog_pars_vertex:Su,fog_fragment:Eu,fog_pars_fragment:bu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:wu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:Ru,lights_pars_begin:Cu,lights_toon_fragment:Iu,lights_toon_pars_fragment:Du,lights_phong_fragment:Lu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Nu,lights_physical_pars_fragment:Fu,lights_fragment_begin:Ou,lights_fragment_maps:Bu,lights_fragment_end:zu,logdepthbuf_fragment:Hu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Wu,map_fragment:Vu,map_pars_fragment:Xu,map_particle_fragment:qu,map_particle_pars_fragment:Yu,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:Ju,morphinstance_vertex:$u,morphcolor_vertex:Ku,morphnormal_vertex:ju,morphtarget_pars_vertex:Qu,morphtarget_vertex:td,normal_fragment_begin:ed,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:sd,normal_vertex:rd,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:hd,opaque_fragment:ud,packing:dd,premultiplied_alpha_fragment:fd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:vd,shadowmap_vertex:Md,shadowmask_pars_fragment:Sd,skinbase_vertex:Ed,skinning_pars_vertex:bd,skinning_vertex:Td,skinnormal_vertex:wd,specularmap_fragment:Ad,specularmap_pars_fragment:Rd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Pd,transmission_fragment:Id,transmission_pars_fragment:Dd,uv_pars_fragment:Ld,uv_pars_vertex:Ud,uv_vertex:Nd,worldpos_vertex:Fd,background_vert:Od,background_frag:Bd,backgroundCube_vert:zd,backgroundCube_frag:Hd,cube_vert:kd,cube_frag:Gd,depth_vert:Wd,depth_frag:Vd,distanceRGBA_vert:Xd,distanceRGBA_frag:qd,equirect_vert:Yd,equirect_frag:Zd,linedashed_vert:Jd,linedashed_frag:$d,meshbasic_vert:Kd,meshbasic_frag:jd,meshlambert_vert:Qd,meshlambert_frag:tf,meshmatcap_vert:ef,meshmatcap_frag:nf,meshnormal_vert:sf,meshnormal_frag:rf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:hf,meshtoon_frag:uf,points_vert:df,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},Lt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Mt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Vn={basic:{uniforms:dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new _e(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:dn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:dn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new _e(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:dn([Lt.points,Lt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:dn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:dn([Lt.common,Lt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:dn([Lt.sprite,Lt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:dn([Lt.common,Lt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:dn([Lt.lights,Lt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Vn.physical={uniforms:dn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var br={r:0,b:0,g:0},Ii=new Xn,xf=new Re;function yf(t,e,n,i,s,r,o){let a=new _e(0),c=r===!0?0:1,h,p,l=null,m=0,y=null;function M(U){let R=U.isScene===!0?U.background:null;if(R&&R.isTexture)R=(U.backgroundBlurriness>0?n:e).get(R);return R}function b(U){let R=!1,D=M(U);if(D===null)_(a,c);else if(D&&D.isColor)_(D,1),R=!0;let j=t.xr.getEnvironmentBlendMode();if(j==="additive")i.buffers.color.setClear(0,0,0,1,o);else if(j==="alpha-blend")i.buffers.color.setClear(0,0,0,0,o);if(t.autoClear||R)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function g(U,R){let D=M(R);if(D&&(D.isCubeTexture||D.mapping===306)){if(p===void 0)p=new te(new sn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:hs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(j,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p);if(Ii.copy(R.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1)Ii.y*=-1,Ii.z*=-1;if(p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(xf.makeRotationFromEuler(Ii)),p.material.toneMapped=we.getTransfer(D.colorSpace)!=="srgb",l!==D||m!==D.version||y!==t.toneMapping)p.material.needsUpdate=!0,l=D,m=D.version,y=t.toneMapping;p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)}else if(D&&D.isTexture){if(h===void 0)h=new te(new Yn(2,2),new ri({name:"BackgroundMaterial",uniforms:hs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h);if(h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=we.getTransfer(D.colorSpace)!=="srgb",D.matrixAutoUpdate===!0)D.updateMatrix();if(h.material.uniforms.uvTransform.value.copy(D.matrix),l!==D||m!==D.version||y!==t.toneMapping)h.material.needsUpdate=!0,l=D,m=D.version,y=t.toneMapping;h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)}}function _(U,R){U.getRGB(br,nc(t)),i.buffers.color.setClear(br.r,br.g,br.b,R,o)}return{getClearColor:function(){return a},setClearColor:function(U,R=1){a.set(U),c=R,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(U){c=U,_(a,c)},render:b,addToRenderList:g}}function vf(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=m(null),r=s,o=!1;function a(I,W,Q,nt,at){let mt=!1,k=l(nt,Q,W);if(r!==k)r=k,h(r.object);if(mt=y(I,nt,Q,at),mt)M(I,nt,Q,at);if(at!==null)e.update(at,t.ELEMENT_ARRAY_BUFFER);if(mt||o){if(o=!1,D(I,W,Q,nt),at!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(at).buffer)}}function c(){return t.createVertexArray()}function h(I){return t.bindVertexArray(I)}function p(I){return t.deleteVertexArray(I)}function l(I,W,Q){let nt=Q.wireframe===!0,at=i[I.id];if(at===void 0)at={},i[I.id]=at;let mt=at[W.id];if(mt===void 0)mt={},at[W.id]=mt;let k=mt[nt];if(k===void 0)k=m(c()),mt[nt]=k;return k}function m(I){let W=[],Q=[],nt=[];for(let at=0;at<n;at++)W[at]=0,Q[at]=0,nt[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Q,attributeDivisors:nt,object:I,attributes:{},index:null}}function y(I,W,Q,nt){let at=r.attributes,mt=W.attributes,k=0,J=Q.getAttributes();for(let H in J)if(J[H].location>=0){let T=at[H],Vt=mt[H];if(Vt===void 0){if(H==="instanceMatrix"&&I.instanceMatrix)Vt=I.instanceMatrix;if(H==="instanceColor"&&I.instanceColor)Vt=I.instanceColor}if(T===void 0)return!0;if(T.attribute!==Vt)return!0;if(Vt&&T.data!==Vt.data)return!0;k++}if(r.attributesNum!==k)return!0;if(r.index!==nt)return!0;return!1}function M(I,W,Q,nt){let at={},mt=W.attributes,k=0,J=Q.getAttributes();for(let H in J)if(J[H].location>=0){let T=mt[H];if(T===void 0){if(H==="instanceMatrix"&&I.instanceMatrix)T=I.instanceMatrix;if(H==="instanceColor"&&I.instanceColor)T=I.instanceColor}let Vt={};if(Vt.attribute=T,T&&T.data)Vt.data=T.data;at[H]=Vt,k++}r.attributes=at,r.attributesNum=k,r.index=nt}function b(){let I=r.newAttributes;for(let W=0,Q=I.length;W<Q;W++)I[W]=0}function g(I){_(I,0)}function _(I,W){let Q=r.newAttributes,nt=r.enabledAttributes,at=r.attributeDivisors;if(Q[I]=1,nt[I]===0)t.enableVertexAttribArray(I),nt[I]=1;if(at[I]!==W)t.vertexAttribDivisor(I,W),at[I]=W}function U(){let I=r.newAttributes,W=r.enabledAttributes;for(let Q=0,nt=W.length;Q<nt;Q++)if(W[Q]!==I[Q])t.disableVertexAttribArray(Q),W[Q]=0}function R(I,W,Q,nt,at,mt,k){if(k===!0)t.vertexAttribIPointer(I,W,Q,at,mt);else t.vertexAttribPointer(I,W,Q,nt,at,mt)}function D(I,W,Q,nt){b();let at=nt.attributes,mt=Q.getAttributes(),k=W.defaultAttributeValues;for(let J in mt){let H=mt[J];if(H.location>=0){let wt=at[J];if(wt===void 0){if(J==="instanceMatrix"&&I.instanceMatrix)wt=I.instanceMatrix;if(J==="instanceColor"&&I.instanceColor)wt=I.instanceColor}if(wt!==void 0){let T=wt.normalized,Vt=wt.itemSize,Qt=e.get(wt);if(Qt===void 0)continue;let{buffer:dt,type:bt,bytesPerElement:Zt}=Qt,kt=bt===t.INT||bt===t.UNSIGNED_INT||wt.gpuType===1013;if(wt.isInterleavedBufferAttribute){let Ct=wt.data,ne=Ct.stride,xe=wt.offset;if(Ct.isInstancedInterleavedBuffer){for(let ie=0;ie<H.locationSize;ie++)_(H.location+ie,Ct.meshPerAttribute);if(I.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0)nt._maxInstanceCount=Ct.meshPerAttribute*Ct.count}else for(let ie=0;ie<H.locationSize;ie++)g(H.location+ie);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let ie=0;ie<H.locationSize;ie++)R(H.location+ie,Vt/H.locationSize,bt,T,ne*Zt,(xe+Vt/H.locationSize*ie)*Zt,kt)}else{if(wt.isInstancedBufferAttribute){for(let Ct=0;Ct<H.locationSize;Ct++)_(H.location+Ct,wt.meshPerAttribute);if(I.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0)nt._maxInstanceCount=wt.meshPerAttribute*wt.count}else for(let Ct=0;Ct<H.locationSize;Ct++)g(H.location+Ct);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Ct=0;Ct<H.locationSize;Ct++)R(H.location+Ct,Vt/H.locationSize,bt,T,Vt*Zt,Vt/H.locationSize*Ct*Zt,kt)}}else if(k!==void 0){let T=k[J];if(T!==void 0)switch(T.length){case 2:t.vertexAttrib2fv(H.location,T);break;case 3:t.vertexAttrib3fv(H.location,T);break;case 4:t.vertexAttrib4fv(H.location,T);break;default:t.vertexAttrib1fv(H.location,T)}}}}U()}function j(){ct();for(let I in i){let W=i[I];for(let Q in W){let nt=W[Q];for(let at in nt)p(nt[at].object),delete nt[at];delete W[Q]}delete i[I]}}function B(I){if(i[I.id]===void 0)return;let W=i[I.id];for(let Q in W){let nt=W[Q];for(let at in nt)p(nt[at].object),delete nt[at];delete W[Q]}delete i[I.id]}function z(I){for(let W in i){let Q=i[W];if(Q[I.id]===void 0)continue;let nt=Q[I.id];for(let at in nt)p(nt[at].object),delete nt[at];delete Q[I.id]}}function ct(){if(P(),o=!0,r===s)return;r=s,h(r.object)}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:ct,resetDefaultState:P,dispose:j,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:g,disableUnusedAttributes:U}}function Mf(t,e,n){let i;function s(h){i=h}function r(h,p){t.drawArrays(i,h,p),n.update(p,i,1)}function o(h,p,l){if(l===0)return;t.drawArraysInstanced(i,h,p,l),n.update(p,i,l)}function a(h,p,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,l);let y=0;for(let M=0;M<l;M++)y+=p[M];n.update(y,i,1)}function c(h,p,l,m){if(l===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)o(h[M],p[M],m[M]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,p,0,m,0,l);let M=0;for(let b=0;b<l;b++)M+=p[b]*m[b];n.update(M,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sf(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let z=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(z){if(z!==1023&&i.convert(z)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(z){let ct=z===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(z!==1009&&i.convert(z)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==1015&&!ct)return!1;return!0}function c(z){if(z==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";z="mediump"}if(z==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let h=n.precision!==void 0?n.precision:"highp",p=c(h);if(p!==h)console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p;let l=n.logarithmicDepthBuffer===!0,m=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),U=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),R=t.getParameter(t.MAX_VARYING_VECTORS),D=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),j=M>0,B=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:l,reverseDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:U,maxVaryings:R,maxFragmentUniforms:D,vertexTextures:j,maxSamples:B}}function Ef(t){let e=this,n=null,i=0,s=!1,r=!1,o=new En,a=new ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,m){let y=l.length!==0||m||i!==0||s;return s=m,i=l.length,y},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,m){n=p(l,m,0)},this.setState=function(l,m,y){let{clippingPlanes:M,clipIntersection:b,clipShadows:g}=l,_=t.get(l);if(!s||M===null||M.length===0||r&&!g)if(r)p(null);else h();else{let U=r?0:i,R=U*4,D=_.clippingState||null;c.value=D,D=p(M,m,R,y);for(let j=0;j!==R;++j)D[j]=n[j];_.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function h(){if(c.value!==n)c.value=n,c.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function p(l,m,y,M){let b=l!==null?l.length:0,g=null;if(b!==0){if(g=c.value,M!==!0||g===null){let _=y+b*4,U=m.matrixWorldInverse;if(a.getNormalMatrix(U),g===null||g.length<_)g=new Float32Array(_);for(let R=0,D=y;R!==b;++R,D+=4)o.copy(l[R]).applyMatrix4(U,a),o.normal.toArray(g,D),g[D+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function bf(t){let e=new WeakMap;function n(o,a){if(a===303)o.mapping=301;else if(a===304)o.mapping=302;return o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===303||a===304)if(e.has(o)){let c=e.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new sc(c.height);return h.fromEquirectangularTexture(t,o),e.set(o,h),o.addEventListener("dispose",s),n(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);if(c!==void 0)e.delete(a),c.dispose()}function r(){e=new WeakMap}return{get:i,dispose:r}}class Xs extends no{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}var rs=4,ll=[0.125,0.215,0.35,0.446,0.526,0.582],Ui=20,Ca=new Xs,cl=new _e,Pa=null,Ia=0,Da=0,La=!1,Li=(1+Math.sqrt(5))/2,ns=1/Li,hl=[new O(-Li,ns,0),new O(Li,ns,0),new O(-ns,0,Li),new O(ns,0,Li),new O(0,Li,-ns),new O(0,Li,ns),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Hs{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=0.1,i=100){Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();if(s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0)this._blur(s,0,0,e);return this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=dl(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pa,Ia,Da),this._renderer.xr.enabled=La,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===301||t.mapping===302)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},i=ul(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=ul(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(s)),this._blurMaterial=wf(s,t,e)}return i}_compileMaterial(t){let e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Ca)}_sceneToCubeUV(t,e,n,i){let o=new ln(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,{autoClear:p,toneMapping:l}=h;h.getClearColor(cl),h.toneMapping=0,h.autoClear=!1;let m=new Bi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),y=new te(new sn,m),M=!1,b=t.background;if(b){if(b.isColor)m.color.copy(b),t.background=null,M=!0}else m.color.copy(cl),M=!0;for(let g=0;g<6;g++){let _=g%3;if(_===0)o.up.set(0,a[g],0),o.lookAt(c[g],0,0);else if(_===1)o.up.set(0,0,a[g]),o.lookAt(0,c[g],0);else o.up.set(0,a[g],0),o.lookAt(0,0,c[g]);let U=this._cubeSize;if(Tr(i,_*U,g>2?U:0,U,U),h.setRenderTarget(i),M)h.render(y,o);h.render(t,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=l,h.autoClear=p,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===301||t.mapping===302;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=fl();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=dl();let s=i?this._cubemapMaterial:this._equirectMaterial,r=new te(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let a=this._cubeSize;Tr(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(r,Ca)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hl[(i-s-1)%hl.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){let a=this._renderer,c=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new te(this._lodPlanes[i],c),l=c.uniforms,m=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ui-1),M=s/y,b=isFinite(s)?1+Math.floor(h*M):Ui;if(b>Ui)console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ui}`);let g=[],_=0;for(let B=0;B<Ui;++B){let z=B/M,ct=Math.exp(-z*z/2);if(g.push(ct),B===0)_+=ct;else if(B<b)_+=2*ct}for(let B=0;B<g.length;B++)g[B]=g[B]/_;if(l.envMap.value=t.texture,l.samples.value=b,l.weights.value=g,l.latitudinal.value=r==="latitudinal",o)l.poleAxis.value=o;let{_lodMax:U}=this;l.dTheta.value=y,l.mipInt.value=U-n;let R=this._sizeLods[i],D=3*R*(i>U-rs?i-U+rs:0),j=4*(this._cubeSize-R);Tr(e,D,j,3*R,2*R),a.setRenderTarget(e),a.render(p,Ca)}}function Tf(t){let e=[],n=[],i=[],s=t,r=t-rs+1+ll.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);n.push(a);let c=1/a;if(o>t-rs)c=ll[o-t+rs-1];else if(o===0)c=0;i.push(c);let h=1/(a-2),p=-h,l=1+h,m=[p,p,l,p,l,l,p,p,l,l,p,l],y=6,M=6,b=3,g=2,_=1,U=new Float32Array(b*M*y),R=new Float32Array(g*M*y),D=new Float32Array(_*M*y);for(let B=0;B<y;B++){let z=B%3*2/3-1,ct=B>2?0:-1,P=[z,ct,0,z+0.6666666666666666,ct,0,z+0.6666666666666666,ct+1,0,z,ct,0,z+0.6666666666666666,ct+1,0,z,ct+1,0];U.set(P,b*M*B),R.set(m,g*M*B);let I=[B,B,B,B,B,B];D.set(I,_*M*B)}let j=new Qe;if(j.setAttribute("position",new Cn(U,b)),j.setAttribute("uv",new Cn(R,g)),j.setAttribute("faceIndex",new Cn(D,_)),e.push(j),s>rs)s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ul(t,e,n){let i=new xi(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function wf(t,e,n){let i=new Float32Array(Ui),s=new O(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:so(),fragmentShader:`

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
	`}function Af(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let c=a.mapping,h=c===303||c===304,p=c===301||c===302;if(h||p){let l=e.get(a),m=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m){if(n===null)n=new Hs(t);return l=h?n.fromEquirectangular(a,l):n.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),l.texture}else if(l!==void 0)return l.texture;else{let y=a.image;if(h&&y&&y.height>0||p&&y&&s(y)){if(n===null)n=new Hs(t);return l=h?n.fromEquirectangular(a):n.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),a.addEventListener("dispose",r),l.texture}else return null}}}return a}function s(a){let c=0,h=6;for(let p=0;p<h;p++)if(a[p]!==void 0)c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=e.get(c);if(h!==void 0)e.delete(c),h.dispose()}function o(){if(e=new WeakMap,n!==null)n.dispose(),n=null}return{get:i,dispose:o}}function Rf(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Us("THREE.WebGLRenderer: "+i+" extension not supported.");return s}}}function Cf(t,e,n,i){let s={},r=new WeakMap;function o(l){let m=l.target;if(m.index!==null)e.remove(m.index);for(let M in m.attributes)e.remove(m.attributes[M]);for(let M in m.morphAttributes){let b=m.morphAttributes[M];for(let g=0,_=b.length;g<_;g++)e.remove(b[g])}m.removeEventListener("dispose",o),delete s[m.id];let y=r.get(m);if(y)e.remove(y),r.delete(m);if(i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0)delete m._maxInstanceCount;n.memory.geometries--}function a(l,m){if(s[m.id]===!0)return m;return m.addEventListener("dispose",o),s[m.id]=!0,n.memory.geometries++,m}function c(l){let m=l.attributes;for(let M in m)e.update(m[M],t.ARRAY_BUFFER);let y=l.morphAttributes;for(let M in y){let b=y[M];for(let g=0,_=b.length;g<_;g++)e.update(b[g],t.ARRAY_BUFFER)}}function h(l){let m=[],y=l.index,M=l.attributes.position,b=0;if(y!==null){let U=y.array;b=y.version;for(let R=0,D=U.length;R<D;R+=3){let j=U[R+0],B=U[R+1],z=U[R+2];m.push(j,B,B,z,z,j)}}else if(M!==void 0){let U=M.array;b=M.version;for(let R=0,D=U.length/3-1;R<D;R+=3){let j=R+0,B=R+1,z=R+2;m.push(j,B,B,z,z,j)}}else return;let g=new((Kl(m))?eo:to)(m,1);g.version=b;let _=r.get(l);if(_)e.remove(_);r.set(l,g)}function p(l){let m=r.get(l);if(m){let y=l.index;if(y!==null){if(m.version<y.version)h(l)}}else h(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:p}}function Pf(t,e,n){let i;function s(m){i=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,y){t.drawElements(i,y,r,m*o),n.update(y,i,1)}function h(m,y,M){if(M===0)return;t.drawElementsInstanced(i,y,r,m*o,M),n.update(y,i,M)}function p(m,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,r,m,0,M);let g=0;for(let _=0;_<M;_++)g+=y[_];n.update(g,i,1)}function l(m,y,M,b){if(M===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<m.length;_++)h(m[_]/o,y[_],b[_]);else{g.multiDrawElementsInstancedWEBGL(i,y,0,r,m,0,b,0,M);let _=0;for(let U=0;U<M;U++)_+=y[U]*b[U];n.update(_,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=l}function If(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Df(t,e,n){let i=new WeakMap,s=new Ue;function r(o,a,c){let h=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=p!==void 0?p.length:0,m=i.get(a);if(m===void 0||m.count!==l){let P=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",P)};if(m!==void 0)m.texture.dispose();let y=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],U=a.morphAttributes.color||[],R=0;if(y===!0)R=1;if(M===!0)R=2;if(b===!0)R=3;let D=a.attributes.position.count*R,j=1;if(D>e.maxTextureSize)j=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize;let B=new Float32Array(D*j*4*l),z=new Qa(B,D,j,l);z.type=1015,z.needsUpdate=!0;let ct=R*4;for(let I=0;I<l;I++){let W=g[I],Q=_[I],nt=U[I],at=D*j*4*I;for(let mt=0;mt<W.count;mt++){let k=mt*ct;if(y===!0)s.fromBufferAttribute(W,mt),B[at+k+0]=s.x,B[at+k+1]=s.y,B[at+k+2]=s.z,B[at+k+3]=0;if(M===!0)s.fromBufferAttribute(Q,mt),B[at+k+4]=s.x,B[at+k+5]=s.y,B[at+k+6]=s.z,B[at+k+7]=0;if(b===!0)s.fromBufferAttribute(nt,mt),B[at+k+8]=s.x,B[at+k+9]=s.y,B[at+k+10]=s.z,B[at+k+11]=nt.itemSize===4?s.w:1}}m={count:l,texture:z,size:new Mt(D,j)},i.set(a,m),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let b=0;b<h.length;b++)y+=h[b];let M=a.morphTargetsRelative?1:1-y;c.getUniforms().setValue(t,"morphTargetBaseInfluence",M),c.getUniforms().setValue(t,"morphTargetInfluences",h)}c.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}return{update:r}}function Lf(t,e,n,i){let s=new WeakMap;function r(c){let h=i.render.frame,p=c.geometry,l=e.get(c,p);if(s.get(l)!==h)e.update(l),s.set(l,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",a)===!1)c.addEventListener("dispose",a);if(s.get(c)!==h){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);s.set(c,h)}}if(c.isSkinnedMesh){let m=c.skeleton;if(s.get(m)!==h)m.update(),s.set(m,h)}return l}function o(){s=new WeakMap}function a(c){let h=c.target;if(h.removeEventListener("dispose",a),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:r,dispose:o}}class ro extends cn{constructor(t,e,n,i,s,r,o,a,c,h=1026){if(h!==1026&&h!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(n===void 0&&h===1026)n=1014;if(n===void 0&&h===1027)n=1020;super(null,i,s,r,o,a,h,n,c);this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=a!==void 0?a:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);if(this.compareFunction!==null)e.compareFunction=this.compareFunction;return e}}var ac=new cn,pl=new ro(1,1),oc=new Qa,lc=new tc,cc=new io,ml=[],gl=[],_l=new Float32Array(16),xl=new Float32Array(9),yl=new Float32Array(4);function ds(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=ml[s];if(r===void 0)r=new Float32Array(s),ml[s]=r;if(e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ye(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ze(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wr(t,e){let n=gl[e];if(n===void 0)n=new Int32Array(e),gl[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Uf(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Nf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ye(n,e))return;t.uniform2fv(this.addr,e),Ze(n,e)}}function Ff(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ye(n,e))return;t.uniform3fv(this.addr,e),Ze(n,e)}}function Of(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ye(n,e))return;t.uniform4fv(this.addr,e),Ze(n,e)}}function Bf(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ye(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ze(n,e)}else{if(Ye(n,i))return;yl.set(i),t.uniformMatrix2fv(this.addr,!1,yl),Ze(n,i)}}function zf(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ye(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ze(n,e)}else{if(Ye(n,i))return;xl.set(i),t.uniformMatrix3fv(this.addr,!1,xl),Ze(n,i)}}function Hf(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ye(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ze(n,e)}else{if(Ye(n,i))return;_l.set(i),t.uniformMatrix4fv(this.addr,!1,_l),Ze(n,i)}}function kf(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Gf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ye(n,e))return;t.uniform2iv(this.addr,e),Ze(n,e)}}function Wf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ye(n,e))return;t.uniform3iv(this.addr,e),Ze(n,e)}}function Vf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ye(n,e))return;t.uniform4iv(this.addr,e),Ze(n,e)}}function Xf(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function qf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ye(n,e))return;t.uniform2uiv(this.addr,e),Ze(n,e)}}function Yf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ye(n,e))return;t.uniform3uiv(this.addr,e),Ze(n,e)}}function Zf(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ye(n,e))return;t.uniform4uiv(this.addr,e),Ze(n,e)}}function Jf(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)pl.compareFunction=515,r=pl;else r=ac;n.setTexture2D(e||r,s)}function $f(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||lc,s)}function Kf(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||cc,s)}function jf(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||oc,s)}function Qf(t){switch(t){case 5126:return Uf;case 35664:return Nf;case 35665:return Ff;case 35666:return Of;case 35674:return Bf;case 35675:return zf;case 35676:return Hf;case 5124:case 35670:return kf;case 35667:case 35671:return Gf;case 35668:case 35672:return Wf;case 35669:case 35673:return Vf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return jf}}function tp(t,e){t.uniform1fv(this.addr,e)}function ep(t,e){let n=ds(e,this.size,2);t.uniform2fv(this.addr,n)}function np(t,e){let n=ds(e,this.size,3);t.uniform3fv(this.addr,n)}function ip(t,e){let n=ds(e,this.size,4);t.uniform4fv(this.addr,n)}function sp(t,e){let n=ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rp(t,e){let n=ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ap(t,e){let n=ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function op(t,e){t.uniform1iv(this.addr,e)}function lp(t,e){t.uniform2iv(this.addr,e)}function cp(t,e){t.uniform3iv(this.addr,e)}function hp(t,e){t.uniform4iv(this.addr,e)}function up(t,e){t.uniform1uiv(this.addr,e)}function dp(t,e){t.uniform2uiv(this.addr,e)}function fp(t,e){t.uniform3uiv(this.addr,e)}function pp(t,e){t.uniform4uiv(this.addr,e)}function mp(t,e,n){let i=this.cache,s=e.length,r=Wr(n,s);if(!Ye(i,r))t.uniform1iv(this.addr,r),Ze(i,r);for(let o=0;o!==s;++o)n.setTexture2D(e[o]||ac,r[o])}function gp(t,e,n){let i=this.cache,s=e.length,r=Wr(n,s);if(!Ye(i,r))t.uniform1iv(this.addr,r),Ze(i,r);for(let o=0;o!==s;++o)n.setTexture3D(e[o]||lc,r[o])}function _p(t,e,n){let i=this.cache,s=e.length,r=Wr(n,s);if(!Ye(i,r))t.uniform1iv(this.addr,r),Ze(i,r);for(let o=0;o!==s;++o)n.setTextureCube(e[o]||cc,r[o])}function xp(t,e,n){let i=this.cache,s=e.length,r=Wr(n,s);if(!Ye(i,r))t.uniform1iv(this.addr,r),Ze(i,r);for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||oc,r[o])}function yp(t){switch(t){case 5126:return tp;case 35664:return ep;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return hp;case 5125:return up;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return xp}}class hc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qf(e.type)}}class uc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yp(e.type)}}class dc{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(t,e[o.id],n)}}}var Ua=/(\w+)(\])?(\[|\.)?/g;function vl(t,e){t.seq.push(e),t.map[e.id]=e}function vp(t,e,n){let i=t.name,s=i.length;Ua.lastIndex=0;while(!0){let r=Ua.exec(i),o=Ua.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c)a=a|0;if(h===void 0||h==="["&&o+2===s){vl(n,h===void 0?new hc(a,t,e):new uc(a,t,e));break}else{let l=n.map[a];if(l===void 0)l=new dc(a),vl(n,l);n=l}}}class Os{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);vp(s,r,this)}}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let o=e[s],a=n[o.id];if(a.needsUpdate!==!1)o.setValue(t,a.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function Ml(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Mp=37297,Sp=0;function Ep(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Sl=new ge;function bp(t){we._getMatrix(Sl,we.workingColorSpace,t);let e=`mat3( ${Sl.elements.map((n)=>n.toFixed(4))} )`;switch(we.getTransfer(t)){case"linear":return[e,"LinearTransferOETF"];case"srgb":return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function El(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+Ep(t.getShaderSource(e),o)}else return s}function Tp(t,e){let n=bp(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wp(t,e){let n;switch(e){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="Cineon";break;case 4:n="ACESFilmic";break;case 6:n="AgX";break;case 7:n="Neutral";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var wr=new O;function Ap(){we.getLuminanceCoefficients(wr);let t=wr.x.toFixed(4),e=wr.y.toFixed(4),n=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Rp(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Cp(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function Pp(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;if(r.type===t.FLOAT_MAT2)a=2;if(r.type===t.FLOAT_MAT3)a=3;if(r.type===t.FLOAT_MAT4)a=4;n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ns(t){return t!==""}function bl(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tl(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(t){return t.replace(Ip,Lp)}var Dp=new Map;function Lp(t,e){let n=ve[e];if(n===void 0){let i=Dp.get(e);if(i!==void 0)n=ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("Can not resolve #include <"+e+">")}return Ga(n)}var Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(t){return t.replace(Up,Np)}function Np(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Al(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}function Fp(t){let e="SHADOWMAP_TYPE_BASIC";if(t.shadowMapType===1)e="SHADOWMAP_TYPE_PCF";else if(t.shadowMapType===2)e="SHADOWMAP_TYPE_PCF_SOFT";else if(t.shadowMapType===3)e="SHADOWMAP_TYPE_VSM";return e}function Op(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bp(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function zp(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Hp(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function kp(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:o,fragmentShader:a}=n,c=Fp(n),h=Op(n),p=Bp(n),l=zp(n),m=Hp(n),y=Rp(n),M=Cp(r),b=s.createProgram(),g,_,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ns).join(`
`),g.length>0)g+=`
`;if(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ns).join(`
`),_.length>0)_+=`
`}else g=[Al(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),_=[Al(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",n.envMap?"#define "+l:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?ve.tonemapping_pars_fragment:"",n.toneMapping!==0?wp("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,Tp("linearToOutputTexel",n.outputColorSpace),Ap(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ns).join(`
`);if(o=Ga(o),o=bl(o,n),o=Tl(o,n),a=Ga(a),a=bl(a,n),a=Tl(a,n),o=wl(o),a=wl(a),n.isRawShaderMaterial!==!0)U=`#version 300 es
`,g=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_;let R=U+g+o,D=U+_+a,j=Ml(s,s.VERTEX_SHADER,R),B=Ml(s,s.FRAGMENT_SHADER,D);if(s.attachShader(b,j),s.attachShader(b,B),n.index0AttributeName!==void 0)s.bindAttribLocation(b,0,n.index0AttributeName);else if(n.morphTargets===!0)s.bindAttribLocation(b,0,"position");s.linkProgram(b);function z(W){if(t.debug.checkShaderErrors){let Q=s.getProgramInfoLog(b).trim(),nt=s.getShaderInfoLog(j).trim(),at=s.getShaderInfoLog(B).trim(),mt=!0,k=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(mt=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,b,j,B);else{let J=El(s,j,"vertex"),H=El(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+Q+`
`+J+`
`+H)}else if(Q!=="")console.warn("THREE.WebGLProgram: Program Info Log:",Q);else if(nt===""||at==="")k=!1;if(k)W.diagnostics={runnable:mt,programLog:Q,vertexShader:{log:nt,prefix:g},fragmentShader:{log:at,prefix:_}}}s.deleteShader(j),s.deleteShader(B),ct=new Os(s,b),P=Pp(s,b)}let ct;this.getUniforms=function(){if(ct===void 0)z(this);return ct};let P;this.getAttributes=function(){if(P===void 0)z(this);return P};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(I===!1)I=s.getProgramParameter(b,Mp);return I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Sp++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=j,this.fragmentShader=B,this}var Gp=0;class fc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let{vertexShader:e,fragmentShader:n}=t,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);if(r.has(i)===!1)r.add(i),i.usedTimes++;if(r.has(s)===!1)r.add(s),s.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new pc(t),e.set(t,n);return n}}class pc{constructor(t){this.id=Gp++,this.code=t,this.usedTimes=0}}function Wp(t,e,n,i,s,r,o){let a=new kr,c=new fc,h=new Set,p=[],{logarithmicDepthBuffer:l,vertexTextures:m,precision:y}=s,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(P){if(h.add(P),P===0)return"uv";return`uv${P}`}function g(P,I,W,Q,nt){let at=Q.fog,mt=nt.geometry,k=P.isMeshStandardMaterial?Q.environment:null,J=(P.isMeshStandardMaterial?n:e).get(P.envMap||k),H=!!J&&J.mapping===306?J.image.height:null,wt=M[P.type];if(P.precision!==null){if(y=s.getMaxPrecision(P.precision),y!==P.precision)console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead.")}let T=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Vt=T!==void 0?T.length:0,Qt=0;if(mt.morphAttributes.position!==void 0)Qt=1;if(mt.morphAttributes.normal!==void 0)Qt=2;if(mt.morphAttributes.color!==void 0)Qt=3;let dt,bt,Zt,kt;if(wt){let be=Vn[wt];dt=be.vertexShader,bt=be.fragmentShader}else dt=P.vertexShader,bt=P.fragmentShader,c.update(P),Zt=c.getVertexShaderID(P),kt=c.getFragmentShaderID(P);let Ct=t.getRenderTarget(),ne=t.state.buffers.depth.getReversed(),xe=nt.isInstancedMesh===!0,ie=nt.isBatchedMesh===!0,gt=!!P.map,At=!!P.matcap,F=!!J,Ht=!!P.aoMap,St=!!P.lightMap,Xt=!!P.bumpMap,yt=!!P.normalMap,re=!!P.displacementMap,Ot=!!P.emissiveMap,Gt=!!P.metalnessMap,N=!!P.roughnessMap,w=P.anisotropy>0,K=P.clearcoat>0,ft=P.dispersion>0,_t=P.iridescence>0,ut=P.sheen>0,Kt=P.transmission>0,Pt=w&&!!P.anisotropyMap,Ut=K&&!!P.clearcoatMap,le=K&&!!P.clearcoatNormalMap,Et=K&&!!P.clearcoatRoughnessMap,Ft=_t&&!!P.iridescenceMap,Me=_t&&!!P.iridescenceThicknessMap,jt=ut&&!!P.sheenColorMap,Bt=ut&&!!P.sheenRoughnessMap,de=!!P.specularMap,ye=!!P.specularColorMap,Pe=!!P.specularIntensityMap,V=Kt&&!!P.transmissionMap,vt=Kt&&!!P.thicknessMap,ht=!!P.gradientMap,xt=!!P.alphaMap,Nt=P.alphaTest>0,It=!!P.alphaHash,$t=!!P.extensions,Be=0;if(P.toneMapped){if(Ct===null||Ct.isXRRenderTarget===!0)Be=t.toneMapping}let ke={shaderID:wt,shaderType:P.type,shaderName:P.name,vertexShader:dt,fragmentShader:bt,defines:P.defines,customVertexShaderID:Zt,customFragmentShaderID:kt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:ie,batchingColor:ie&&nt._colorsTexture!==null,instancing:xe,instancingColor:xe&&nt.instanceColor!==null,instancingMorph:xe&&nt.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ct===null?t.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:"srgb-linear",alphaToCoverage:!!P.alphaToCoverage,map:gt,matcap:At,envMap:F,envMapMode:F&&J.mapping,envMapCubeUVHeight:H,aoMap:Ht,lightMap:St,bumpMap:Xt,normalMap:yt,displacementMap:m&&re,emissiveMap:Ot,normalMapObjectSpace:yt&&P.normalMapType===1,normalMapTangentSpace:yt&&P.normalMapType===0,metalnessMap:Gt,roughnessMap:N,anisotropy:w,anisotropyMap:Pt,clearcoat:K,clearcoatMap:Ut,clearcoatNormalMap:le,clearcoatRoughnessMap:Et,dispersion:ft,iridescence:_t,iridescenceMap:Ft,iridescenceThicknessMap:Me,sheen:ut,sheenColorMap:jt,sheenRoughnessMap:Bt,specularMap:de,specularColorMap:ye,specularIntensityMap:Pe,transmission:Kt,transmissionMap:V,thicknessMap:vt,gradientMap:ht,opaque:P.transparent===!1&&P.blending===1&&P.alphaToCoverage===!1,alphaMap:xt,alphaTest:Nt,alphaHash:It,combine:P.combine,mapUv:gt&&b(P.map.channel),aoMapUv:Ht&&b(P.aoMap.channel),lightMapUv:St&&b(P.lightMap.channel),bumpMapUv:Xt&&b(P.bumpMap.channel),normalMapUv:yt&&b(P.normalMap.channel),displacementMapUv:re&&b(P.displacementMap.channel),emissiveMapUv:Ot&&b(P.emissiveMap.channel),metalnessMapUv:Gt&&b(P.metalnessMap.channel),roughnessMapUv:N&&b(P.roughnessMap.channel),anisotropyMapUv:Pt&&b(P.anisotropyMap.channel),clearcoatMapUv:Ut&&b(P.clearcoatMap.channel),clearcoatNormalMapUv:le&&b(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&b(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&b(P.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&b(P.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&b(P.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&b(P.sheenRoughnessMap.channel),specularMapUv:de&&b(P.specularMap.channel),specularColorMapUv:ye&&b(P.specularColorMap.channel),specularIntensityMapUv:Pe&&b(P.specularIntensityMap.channel),transmissionMapUv:V&&b(P.transmissionMap.channel),thicknessMapUv:vt&&b(P.thicknessMap.channel),alphaMapUv:xt&&b(P.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(yt||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!mt.attributes.uv&&(gt||xt),fog:!!at,useFog:P.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:ne,skinning:nt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Qt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:P.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,decodeVideoTexture:gt&&P.map.isVideoTexture===!0&&we.getTransfer(P.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Ot&&P.emissiveMap.isVideoTexture===!0&&we.getTransfer(P.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===2,flipSided:P.side===1,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:$t&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&P.extensions.multiDraw===!0||ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ke.vertexUv1s=h.has(1),ke.vertexUv2s=h.has(2),ke.vertexUv3s=h.has(3),h.clear(),ke}function _(P){let I=[];if(P.shaderID)I.push(P.shaderID);else I.push(P.customVertexShaderID),I.push(P.customFragmentShaderID);if(P.defines!==void 0)for(let W in P.defines)I.push(W),I.push(P.defines[W]);if(P.isRawShaderMaterial===!1)U(I,P),R(I,P),I.push(t.outputColorSpace);return I.push(P.customProgramCacheKey),I.join()}function U(P,I){P.push(I.precision),P.push(I.outputColorSpace),P.push(I.envMapMode),P.push(I.envMapCubeUVHeight),P.push(I.mapUv),P.push(I.alphaMapUv),P.push(I.lightMapUv),P.push(I.aoMapUv),P.push(I.bumpMapUv),P.push(I.normalMapUv),P.push(I.displacementMapUv),P.push(I.emissiveMapUv),P.push(I.metalnessMapUv),P.push(I.roughnessMapUv),P.push(I.anisotropyMapUv),P.push(I.clearcoatMapUv),P.push(I.clearcoatNormalMapUv),P.push(I.clearcoatRoughnessMapUv),P.push(I.iridescenceMapUv),P.push(I.iridescenceThicknessMapUv),P.push(I.sheenColorMapUv),P.push(I.sheenRoughnessMapUv),P.push(I.specularMapUv),P.push(I.specularColorMapUv),P.push(I.specularIntensityMapUv),P.push(I.transmissionMapUv),P.push(I.thicknessMapUv),P.push(I.combine),P.push(I.fogExp2),P.push(I.sizeAttenuation),P.push(I.morphTargetsCount),P.push(I.morphAttributeCount),P.push(I.numDirLights),P.push(I.numPointLights),P.push(I.numSpotLights),P.push(I.numSpotLightMaps),P.push(I.numHemiLights),P.push(I.numRectAreaLights),P.push(I.numDirLightShadows),P.push(I.numPointLightShadows),P.push(I.numSpotLightShadows),P.push(I.numSpotLightShadowsWithMaps),P.push(I.numLightProbes),P.push(I.shadowMapType),P.push(I.toneMapping),P.push(I.numClippingPlanes),P.push(I.numClipIntersection),P.push(I.depthPacking)}function R(P,I){if(a.disableAll(),I.supportsVertexTextures)a.enable(0);if(I.instancing)a.enable(1);if(I.instancingColor)a.enable(2);if(I.instancingMorph)a.enable(3);if(I.matcap)a.enable(4);if(I.envMap)a.enable(5);if(I.normalMapObjectSpace)a.enable(6);if(I.normalMapTangentSpace)a.enable(7);if(I.clearcoat)a.enable(8);if(I.iridescence)a.enable(9);if(I.alphaTest)a.enable(10);if(I.vertexColors)a.enable(11);if(I.vertexAlphas)a.enable(12);if(I.vertexUv1s)a.enable(13);if(I.vertexUv2s)a.enable(14);if(I.vertexUv3s)a.enable(15);if(I.vertexTangents)a.enable(16);if(I.anisotropy)a.enable(17);if(I.alphaHash)a.enable(18);if(I.batching)a.enable(19);if(I.dispersion)a.enable(20);if(I.batchingColor)a.enable(21);if(P.push(a.mask),a.disableAll(),I.fog)a.enable(0);if(I.useFog)a.enable(1);if(I.flatShading)a.enable(2);if(I.logarithmicDepthBuffer)a.enable(3);if(I.reverseDepthBuffer)a.enable(4);if(I.skinning)a.enable(5);if(I.morphTargets)a.enable(6);if(I.morphNormals)a.enable(7);if(I.morphColors)a.enable(8);if(I.premultipliedAlpha)a.enable(9);if(I.shadowMapEnabled)a.enable(10);if(I.doubleSided)a.enable(11);if(I.flipSided)a.enable(12);if(I.useDepthPacking)a.enable(13);if(I.dithering)a.enable(14);if(I.transmission)a.enable(15);if(I.sheen)a.enable(16);if(I.opaque)a.enable(17);if(I.pointsUvs)a.enable(18);if(I.decodeVideoTexture)a.enable(19);if(I.decodeVideoTextureEmissive)a.enable(20);if(I.alphaToCoverage)a.enable(21);P.push(a.mask)}function D(P){let I=M[P.type],W;if(I){let Q=Vn[I];W=Dh.clone(Q.uniforms)}else W=P.uniforms;return W}function j(P,I){let W;for(let Q=0,nt=p.length;Q<nt;Q++){let at=p[Q];if(at.cacheKey===I){W=at,++W.usedTimes;break}}if(W===void 0)W=new kp(t,I,P,r),p.push(W);return W}function B(P){if(--P.usedTimes===0){let I=p.indexOf(P);p[I]=p[p.length-1],p.pop(),P.destroy()}}function z(P){c.remove(P)}function ct(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:D,acquireProgram:j,releaseProgram:B,releaseShaderCache:z,programs:p,dispose:ct}}function Vp(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);if(a===void 0)a={},t.set(o,a);return a}function i(o){t.delete(o)}function s(o,a,c){t.get(o)[a]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Xp(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Rl(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Cl(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(l,m,y,M,b,g){let _=t[e];if(_===void 0)_={id:l.id,object:l,geometry:m,material:y,groupOrder:M,renderOrder:l.renderOrder,z:b,group:g},t[e]=_;else _.id=l.id,_.object=l,_.geometry=m,_.material=y,_.groupOrder=M,_.renderOrder=l.renderOrder,_.z=b,_.group=g;return e++,_}function a(l,m,y,M,b,g){let _=o(l,m,y,M,b,g);if(y.transmission>0)i.push(_);else if(y.transparent===!0)s.push(_);else n.push(_)}function c(l,m,y,M,b,g){let _=o(l,m,y,M,b,g);if(y.transmission>0)i.unshift(_);else if(y.transparent===!0)s.unshift(_);else n.unshift(_)}function h(l,m){if(n.length>1)n.sort(l||Xp);if(i.length>1)i.sort(m||Rl);if(s.length>1)s.sort(m||Rl)}function p(){for(let l=e,m=t.length;l<m;l++){let y=t[l];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:p,sort:h}}function qp(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;if(r===void 0)o=new Cl,t.set(i,[o]);else if(s>=r.length)o=new Cl,r.push(o);else o=r[s];return o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Yp(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new _e};break;case"SpotLight":n={position:new O,direction:new O,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new _e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":n={color:new _e,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function Zp(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Jp=0;function $p(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Kp(t){let e=new Yp,n=Zp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new O);let s=new O,r=new Re,o=new Re;function a(h){let p=0,l=0,m=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let y=0,M=0,b=0,g=0,_=0,U=0,R=0,D=0,j=0,B=0,z=0;h.sort($p);for(let P=0,I=h.length;P<I;P++){let W=h[P],{color:Q,intensity:nt,distance:at}=W,mt=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)p+=Q.r*nt,l+=Q.g*nt,m+=Q.b*nt;else if(W.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(W.sh.coefficients[k],nt);z++}else if(W.isDirectionalLight){let k=e.get(W);if(k.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let J=W.shadow,H=n.get(W);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[y]=H,i.directionalShadowMap[y]=mt,i.directionalShadowMatrix[y]=W.shadow.matrix,U++}i.directional[y]=k,y++}else if(W.isSpotLight){let k=e.get(W);k.position.setFromMatrixPosition(W.matrixWorld),k.color.copy(Q).multiplyScalar(nt),k.distance=at,k.coneCos=Math.cos(W.angle),k.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),k.decay=W.decay,i.spot[b]=k;let J=W.shadow;if(W.map){if(i.spotLightMap[j]=W.map,j++,J.updateMatrices(W),W.castShadow)B++}if(i.spotLightMatrix[b]=J.matrix,W.castShadow){let H=n.get(W);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[b]=H,i.spotShadowMap[b]=mt,D++}b++}else if(W.isRectAreaLight){let k=e.get(W);k.color.copy(Q).multiplyScalar(nt),k.halfWidth.set(W.width*0.5,0,0),k.halfHeight.set(0,W.height*0.5,0),i.rectArea[g]=k,g++}else if(W.isPointLight){let k=e.get(W);if(k.color.copy(W.color).multiplyScalar(W.intensity),k.distance=W.distance,k.decay=W.decay,W.castShadow){let J=W.shadow,H=n.get(W);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[M]=H,i.pointShadowMap[M]=mt,i.pointShadowMatrix[M]=W.shadow.matrix,R++}i.point[M]=k,M++}else if(W.isHemisphereLight){let k=e.get(W);k.skyColor.copy(W.color).multiplyScalar(nt),k.groundColor.copy(W.groundColor).multiplyScalar(nt),i.hemi[_]=k,_++}}if(g>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2;else i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2;i.ambient[0]=p,i.ambient[1]=l,i.ambient[2]=m;let ct=i.hash;if(ct.directionalLength!==y||ct.pointLength!==M||ct.spotLength!==b||ct.rectAreaLength!==g||ct.hemiLength!==_||ct.numDirectionalShadows!==U||ct.numPointShadows!==R||ct.numSpotShadows!==D||ct.numSpotMaps!==j||ct.numLightProbes!==z)i.directional.length=y,i.spot.length=b,i.rectArea.length=g,i.point.length=M,i.hemi.length=_,i.directionalShadow.length=U,i.directionalShadowMap.length=U,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=U,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=D+j-B,i.spotLightMap.length=j,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=z,ct.directionalLength=y,ct.pointLength=M,ct.spotLength=b,ct.rectAreaLength=g,ct.hemiLength=_,ct.numDirectionalShadows=U,ct.numPointShadows=R,ct.numSpotShadows=D,ct.numSpotMaps=j,ct.numLightProbes=z,i.version=Jp++}function c(h,p){let l=0,m=0,y=0,M=0,b=0,g=p.matrixWorldInverse;for(let _=0,U=h.length;_<U;_++){let R=h[_];if(R.isDirectionalLight){let D=i.directional[l];D.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(g),l++}else if(R.isSpotLight){let D=i.spot[y];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(g),D.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(g),y++}else if(R.isRectAreaLight){let D=i.rectArea[M];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(g),o.identity(),r.copy(R.matrixWorld),r.premultiply(g),o.extractRotation(r),D.halfWidth.set(R.width*0.5,0,0),D.halfHeight.set(0,R.height*0.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),M++}else if(R.isPointLight){let D=i.point[m];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(g),m++}else if(R.isHemisphereLight){let D=i.hemi[b];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(g),b++}}}return{setup:a,setupView:c,state:i}}function Pl(t){let e=new Kp(t),n=[],i=[];function s(p){h.camera=p,n.length=0,i.length=0}function r(p){n.push(p)}function o(p){i.push(p)}function a(){e.setup(n)}function c(p){e.setupView(n,p)}let h={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function jp(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;if(o===void 0)a=new Pl(t),e.set(s,[a]);else if(r>=o.length)a=new Pl(t),o.push(a);else a=o[r];return a}function i(){e=new WeakMap}return{get:n,dispose:i}}class mc extends vi{static get type(){return"MeshDepthMaterial"}constructor(t){super();this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gc extends vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super();this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}var Qp=`void main() {
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
}`;function em(t,e,n){let i=new Gr,s=new Mt,r=new Mt,o=new Ue,a=new mc({depthPacking:3201}),c=new gc,h={},p=n.maxTextureSize,l={[0]:1,[1]:0,[2]:2},m=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Qp,fragmentShader:tm}),y=m.clone();y.defines.HORIZONTAL_PASS=1;let M=new Qe;M.setAttribute("position",new Cn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let b=new te(M,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(B,z,ct){if(g.enabled===!1)return;if(g.autoUpdate===!1&&g.needsUpdate===!1)return;if(B.length===0)return;let P=t.getRenderTarget(),I=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(0),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let nt=_!==3&&this.type===3,at=_===3&&this.type!==3;for(let mt=0,k=B.length;mt<k;mt++){let J=B[mt],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let wt=H.getFrameExtents();if(s.multiply(wt),r.copy(H.mapSize),s.x>p||s.y>p){if(s.x>p)r.x=Math.floor(p/wt.x),s.x=r.x*wt.x,H.mapSize.x=r.x;if(s.y>p)r.y=Math.floor(p/wt.y),s.y=r.y*wt.y,H.mapSize.y=r.y}if(H.map===null||nt===!0||at===!0){let Vt=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(H.map!==null)H.map.dispose();H.map=new xi(s.x,s.y,Vt),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();let T=H.getViewportCount();for(let Vt=0;Vt<T;Vt++){let Qt=H.getViewport(Vt);o.set(r.x*Qt.x,r.y*Qt.y,r.x*Qt.z,r.y*Qt.w),Q.viewport(o),H.updateMatrices(J,Vt),i=H.getFrustum(),D(z,ct,H.camera,J,this.type)}if(H.isPointLightShadow!==!0&&this.type===3)U(H,ct);H.needsUpdate=!1}_=this.type,g.needsUpdate=!1,t.setRenderTarget(P,I,W)};function U(B,z){let ct=e.update(b);if(m.defines.VSM_SAMPLES!==B.blurSamples)m.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0;if(B.mapPass===null)B.mapPass=new xi(s.x,s.y);m.uniforms.shadow_pass.value=B.map.texture,m.uniforms.resolution.value=B.mapSize,m.uniforms.radius.value=B.radius,t.setRenderTarget(B.mapPass),t.clear(),t.renderBufferDirect(z,null,ct,m,b,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,t.setRenderTarget(B.map),t.clear(),t.renderBufferDirect(z,null,ct,y,b,null)}function R(B,z,ct,P){let I=null,W=ct.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(W!==void 0)I=W;else if(I=ct.isPointLight===!0?c:a,t.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){let Q=I.uuid,nt=z.uuid,at=h[Q];if(at===void 0)at={},h[Q]=at;let mt=at[nt];if(mt===void 0)mt=I.clone(),at[nt]=mt,z.addEventListener("dispose",j);I=mt}if(I.visible=z.visible,I.wireframe=z.wireframe,P===3)I.side=z.shadowSide!==null?z.shadowSide:z.side;else I.side=z.shadowSide!==null?z.shadowSide:l[z.side];if(I.alphaMap=z.alphaMap,I.alphaTest=z.alphaTest,I.map=z.map,I.clipShadows=z.clipShadows,I.clippingPlanes=z.clippingPlanes,I.clipIntersection=z.clipIntersection,I.displacementMap=z.displacementMap,I.displacementScale=z.displacementScale,I.displacementBias=z.displacementBias,I.wireframeLinewidth=z.wireframeLinewidth,I.linewidth=z.linewidth,ct.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let Q=t.properties.get(I);Q.light=ct}return I}function D(B,z,ct,P,I){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)){if((B.castShadow||B.receiveShadow&&I===3)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,B.matrixWorld);let nt=e.update(B),at=B.material;if(Array.isArray(at)){let mt=nt.groups;for(let k=0,J=mt.length;k<J;k++){let H=mt[k],wt=at[H.materialIndex];if(wt&&wt.visible){let T=R(B,wt,P,I);B.onBeforeShadow(t,B,z,ct,nt,T,H),t.renderBufferDirect(ct,null,nt,T,B,H),B.onAfterShadow(t,B,z,ct,nt,T,H)}}}else if(at.visible){let mt=R(B,at,P,I);B.onBeforeShadow(t,B,z,ct,nt,mt,null),t.renderBufferDirect(ct,null,nt,mt,B,null),B.onAfterShadow(t,B,z,ct,nt,mt,null)}}}let Q=B.children;for(let nt=0,at=Q.length;nt<at;nt++)D(Q[nt],z,ct,P,I)}function j(B){B.target.removeEventListener("dispose",j);for(let ct in h){let P=h[ct],I=B.target.uuid;if(I in P)P[I].dispose(),delete P[I]}}}var nm={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function im(t,e){function n(){let V=!1,vt=new Ue,ht=null,xt=new Ue(0,0,0,0);return{setMask:function(Nt){if(ht!==Nt&&!V)t.colorMask(Nt,Nt,Nt,Nt),ht=Nt},setLocked:function(Nt){V=Nt},setClear:function(Nt,It,$t,Be,ke){if(ke===!0)Nt*=Be,It*=Be,$t*=Be;if(vt.set(Nt,It,$t,Be),xt.equals(vt)===!1)t.clearColor(Nt,It,$t,Be),xt.copy(vt)},reset:function(){V=!1,ht=null,xt.set(-1,0,0,0)}}}function i(){let V=!1,vt=!1,ht=null,xt=null,Nt=null;return{setReversed:function(It){if(vt!==It){let $t=e.get("EXT_clip_control");if(vt)$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT);else $t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let Be=Nt;Nt=null,this.setClear(Be)}vt=It},getReversed:function(){return vt},setTest:function(It){if(It)Ct(t.DEPTH_TEST);else ne(t.DEPTH_TEST)},setMask:function(It){if(ht!==It&&!V)t.depthMask(It),ht=It},setFunc:function(It){if(vt)It=nm[It];if(xt!==It){switch(It){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xt=It}},setLocked:function(It){V=It},setClear:function(It){if(Nt!==It){if(vt)It=1-It;t.clearDepth(It),Nt=It}},reset:function(){V=!1,ht=null,xt=null,Nt=null,vt=!1}}}function s(){let V=!1,vt=null,ht=null,xt=null,Nt=null,It=null,$t=null,Be=null,ke=null;return{setTest:function(be){if(!V)if(be)Ct(t.STENCIL_TEST);else ne(t.STENCIL_TEST)},setMask:function(be){if(vt!==be&&!V)t.stencilMask(be),vt=be},setFunc:function(be,Un,Nn){if(ht!==be||xt!==Un||Nt!==Nn)t.stencilFunc(be,Un,Nn),ht=be,xt=Un,Nt=Nn},setOp:function(be,Un,Nn){if(It!==be||$t!==Un||Be!==Nn)t.stencilOp(be,Un,Nn),It=be,$t=Un,Be=Nn},setLocked:function(be){V=be},setClear:function(be){if(ke!==be)t.clearStencil(be),ke=be},reset:function(){V=!1,vt=null,ht=null,xt=null,Nt=null,It=null,$t=null,Be=null,ke=null}}}let r=new n,o=new i,a=new s,c=new WeakMap,h=new WeakMap,p={},l={},m=new WeakMap,y=[],M=null,b=!1,g=null,_=null,U=null,R=null,D=null,j=null,B=null,z=new _e(0,0,0),ct=0,P=!1,I=null,W=null,Q=null,nt=null,at=null,mt=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,H=t.getParameter(t.VERSION);if(H.indexOf("WebGL")!==-1)J=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=J>=1;else if(H.indexOf("OpenGL ES")!==-1)J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=J>=2;let wt=null,T={},Vt=t.getParameter(t.SCISSOR_BOX),Qt=t.getParameter(t.VIEWPORT),dt=new Ue().fromArray(Vt),bt=new Ue().fromArray(Qt);function Zt(V,vt,ht,xt){let Nt=new Uint8Array(4),It=t.createTexture();t.bindTexture(V,It),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $t=0;$t<ht;$t++)if(V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY)t.texImage3D(vt,0,t.RGBA,1,1,xt,0,t.RGBA,t.UNSIGNED_BYTE,Nt);else t.texImage2D(vt+$t,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Nt);return It}let kt={};kt[t.TEXTURE_2D]=Zt(t.TEXTURE_2D,t.TEXTURE_2D,1),kt[t.TEXTURE_CUBE_MAP]=Zt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[t.TEXTURE_2D_ARRAY]=Zt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),kt[t.TEXTURE_3D]=Zt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ct(t.DEPTH_TEST),o.setFunc(3),Xt(!1),yt(1),Ct(t.CULL_FACE),Ht(0);function Ct(V){if(p[V]!==!0)t.enable(V),p[V]=!0}function ne(V){if(p[V]!==!1)t.disable(V),p[V]=!1}function xe(V,vt){if(l[V]!==vt){if(t.bindFramebuffer(V,vt),l[V]=vt,V===t.DRAW_FRAMEBUFFER)l[t.FRAMEBUFFER]=vt;if(V===t.FRAMEBUFFER)l[t.DRAW_FRAMEBUFFER]=vt;return!0}return!1}function ie(V,vt){let ht=y,xt=!1;if(V){if(ht=m.get(vt),ht===void 0)ht=[],m.set(vt,ht);let Nt=V.textures;if(ht.length!==Nt.length||ht[0]!==t.COLOR_ATTACHMENT0){for(let It=0,$t=Nt.length;It<$t;It++)ht[It]=t.COLOR_ATTACHMENT0+It;ht.length=Nt.length,xt=!0}}else if(ht[0]!==t.BACK)ht[0]=t.BACK,xt=!0;if(xt)t.drawBuffers(ht)}function gt(V){if(M!==V)return t.useProgram(V),M=V,!0;return!1}let At={[100]:t.FUNC_ADD,[101]:t.FUNC_SUBTRACT,[102]:t.FUNC_REVERSE_SUBTRACT};At[103]=t.MIN,At[104]=t.MAX;let F={[200]:t.ZERO,[201]:t.ONE,[202]:t.SRC_COLOR,[204]:t.SRC_ALPHA,[210]:t.SRC_ALPHA_SATURATE,[208]:t.DST_COLOR,[206]:t.DST_ALPHA,[203]:t.ONE_MINUS_SRC_COLOR,[205]:t.ONE_MINUS_SRC_ALPHA,[209]:t.ONE_MINUS_DST_COLOR,[207]:t.ONE_MINUS_DST_ALPHA,[211]:t.CONSTANT_COLOR,[212]:t.ONE_MINUS_CONSTANT_COLOR,[213]:t.CONSTANT_ALPHA,[214]:t.ONE_MINUS_CONSTANT_ALPHA};function Ht(V,vt,ht,xt,Nt,It,$t,Be,ke,be){if(V===0){if(b===!0)ne(t.BLEND),b=!1;return}if(b===!1)Ct(t.BLEND),b=!0;if(V!==5){if(V!==g||be!==P){if(_!==100||D!==100)t.blendEquation(t.FUNC_ADD),_=100,D=100;if(be)switch(V){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}U=null,R=null,j=null,B=null,z.set(0,0,0),ct=0,g=V,P=be}return}if(Nt=Nt||vt,It=It||ht,$t=$t||xt,vt!==_||Nt!==D)t.blendEquationSeparate(At[vt],At[Nt]),_=vt,D=Nt;if(ht!==U||xt!==R||It!==j||$t!==B)t.blendFuncSeparate(F[ht],F[xt],F[It],F[$t]),U=ht,R=xt,j=It,B=$t;if(Be.equals(z)===!1||ke!==ct)t.blendColor(Be.r,Be.g,Be.b,ke),z.copy(Be),ct=ke;g=V,P=!1}function St(V,vt){V.side===2?ne(t.CULL_FACE):Ct(t.CULL_FACE);let ht=V.side===1;if(vt)ht=!ht;Xt(ht),V.blending===1&&V.transparent===!1?Ht(0):Ht(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let xt=V.stencilWrite;if(a.setTest(xt),xt)a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass);Ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ct(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(V){if(I!==V){if(V)t.frontFace(t.CW);else t.frontFace(t.CCW);I=V}}function yt(V){if(V!==0){if(Ct(t.CULL_FACE),V!==W)if(V===1)t.cullFace(t.BACK);else if(V===2)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else ne(t.CULL_FACE);W=V}function re(V){if(V!==Q){if(k)t.lineWidth(V);Q=V}}function Ot(V,vt,ht){if(V){if(Ct(t.POLYGON_OFFSET_FILL),nt!==vt||at!==ht)t.polygonOffset(vt,ht),nt=vt,at=ht}else ne(t.POLYGON_OFFSET_FILL)}function Gt(V){if(V)Ct(t.SCISSOR_TEST);else ne(t.SCISSOR_TEST)}function N(V){if(V===void 0)V=t.TEXTURE0+mt-1;if(wt!==V)t.activeTexture(V),wt=V}function w(V,vt,ht){if(ht===void 0)if(wt===null)ht=t.TEXTURE0+mt-1;else ht=wt;let xt=T[ht];if(xt===void 0)xt={type:void 0,texture:void 0},T[ht]=xt;if(xt.type!==V||xt.texture!==vt){if(wt!==ht)t.activeTexture(ht),wt=ht;t.bindTexture(V,vt||kt[V]),xt.type=V,xt.texture=vt}}function K(){let V=T[wt];if(V!==void 0&&V.type!==void 0)t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0}function ft(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ft(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function jt(V){if(dt.equals(V)===!1)t.scissor(V.x,V.y,V.z,V.w),dt.copy(V)}function Bt(V){if(bt.equals(V)===!1)t.viewport(V.x,V.y,V.z,V.w),bt.copy(V)}function de(V,vt){let ht=h.get(vt);if(ht===void 0)ht=new WeakMap,h.set(vt,ht);let xt=ht.get(V);if(xt===void 0)xt=t.getUniformBlockIndex(vt,V.name),ht.set(V,xt)}function ye(V,vt){let xt=h.get(vt).get(V);if(c.get(vt)!==xt)t.uniformBlockBinding(vt,xt,V.__bindingPointIndex),c.set(vt,xt)}function Pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},wt=null,T={},l={},m=new WeakMap,y=[],M=null,b=!1,g=null,_=null,U=null,R=null,D=null,j=null,B=null,z=new _e(0,0,0),ct=0,P=!1,I=null,W=null,Q=null,nt=null,at=null,dt.set(0,0,t.canvas.width,t.canvas.height),bt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ct,disable:ne,bindFramebuffer:xe,drawBuffers:ie,useProgram:gt,setBlending:Ht,setMaterial:St,setFlipSided:Xt,setCullFace:yt,setLineWidth:re,setPolygonOffset:Ot,setScissorTest:Gt,activeTexture:N,bindTexture:w,unbindTexture:K,compressedTexImage2D:ft,compressedTexImage3D:_t,texImage2D:Ft,texImage3D:Me,updateUBOMapping:de,uniformBlockBinding:ye,texStorage2D:le,texStorage3D:Et,texSubImage2D:ut,texSubImage3D:Kt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Ut,scissor:jt,viewport:Bt,reset:Pe}}function Il(t,e,n,i){let s=sm(i);switch(n){case 1021:return t*e;case 1024:return t*e;case 1025:return t*e*2;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function sm(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${t}.`)}function rm(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,p=new WeakMap,l,m=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(N){}function M(N,w){return y?new OffscreenCanvas(N,w):Br("canvas")}function b(N,w,K){let ft=1,_t=Gt(N);if(_t.width>K||_t.height>K)ft=K/Math.max(_t.width,_t.height);if(ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ut=Math.floor(ft*_t.width),Kt=Math.floor(ft*_t.height);if(l===void 0)l=M(ut,Kt);let Pt=w?M(ut,Kt):l;return Pt.width=ut,Pt.height=Kt,Pt.getContext("2d").drawImage(N,0,0,ut,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ut+"x"+Kt+")."),Pt}else{if("data"in N)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+").");return N}return N}function g(N){return N.generateMipmaps}function _(N){t.generateMipmap(N)}function U(N){if(N.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(N.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function R(N,w,K,ft,_t=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=w;if(w===t.RED){if(K===t.FLOAT)ut=t.R32F;if(K===t.HALF_FLOAT)ut=t.R16F;if(K===t.UNSIGNED_BYTE)ut=t.R8}if(w===t.RED_INTEGER){if(K===t.UNSIGNED_BYTE)ut=t.R8UI;if(K===t.UNSIGNED_SHORT)ut=t.R16UI;if(K===t.UNSIGNED_INT)ut=t.R32UI;if(K===t.BYTE)ut=t.R8I;if(K===t.SHORT)ut=t.R16I;if(K===t.INT)ut=t.R32I}if(w===t.RG){if(K===t.FLOAT)ut=t.RG32F;if(K===t.HALF_FLOAT)ut=t.RG16F;if(K===t.UNSIGNED_BYTE)ut=t.RG8}if(w===t.RG_INTEGER){if(K===t.UNSIGNED_BYTE)ut=t.RG8UI;if(K===t.UNSIGNED_SHORT)ut=t.RG16UI;if(K===t.UNSIGNED_INT)ut=t.RG32UI;if(K===t.BYTE)ut=t.RG8I;if(K===t.SHORT)ut=t.RG16I;if(K===t.INT)ut=t.RG32I}if(w===t.RGB_INTEGER){if(K===t.UNSIGNED_BYTE)ut=t.RGB8UI;if(K===t.UNSIGNED_SHORT)ut=t.RGB16UI;if(K===t.UNSIGNED_INT)ut=t.RGB32UI;if(K===t.BYTE)ut=t.RGB8I;if(K===t.SHORT)ut=t.RGB16I;if(K===t.INT)ut=t.RGB32I}if(w===t.RGBA_INTEGER){if(K===t.UNSIGNED_BYTE)ut=t.RGBA8UI;if(K===t.UNSIGNED_SHORT)ut=t.RGBA16UI;if(K===t.UNSIGNED_INT)ut=t.RGBA32UI;if(K===t.BYTE)ut=t.RGBA8I;if(K===t.SHORT)ut=t.RGBA16I;if(K===t.INT)ut=t.RGBA32I}if(w===t.RGB){if(K===t.UNSIGNED_INT_5_9_9_9_REV)ut=t.RGB9_E5}if(w===t.RGBA){let Kt=_t?"linear":we.getTransfer(ft);if(K===t.FLOAT)ut=t.RGBA32F;if(K===t.HALF_FLOAT)ut=t.RGBA16F;if(K===t.UNSIGNED_BYTE)ut=Kt==="srgb"?t.SRGB8_ALPHA8:t.RGBA8;if(K===t.UNSIGNED_SHORT_4_4_4_4)ut=t.RGBA4;if(K===t.UNSIGNED_SHORT_5_5_5_1)ut=t.RGB5_A1}if(ut===t.R16F||ut===t.R32F||ut===t.RG16F||ut===t.RG32F||ut===t.RGBA16F||ut===t.RGBA32F)e.get("EXT_color_buffer_float");return ut}function D(N,w){let K;if(N){if(w===null||w===1014||w===1020)K=t.DEPTH24_STENCIL8;else if(w===1015)K=t.DEPTH32F_STENCIL8;else if(w===1012)K=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(w===null||w===1014||w===1020)K=t.DEPTH_COMPONENT24;else if(w===1015)K=t.DEPTH_COMPONENT32F;else if(w===1012)K=t.DEPTH_COMPONENT16;return K}function j(N,w){if(g(N)===!0||N.isFramebufferTexture&&N.minFilter!==1003&&N.minFilter!==1006)return Math.log2(Math.max(w.width,w.height))+1;else if(N.mipmaps!==void 0&&N.mipmaps.length>0)return N.mipmaps.length;else if(N.isCompressedTexture&&Array.isArray(N.image))return w.mipmaps.length;else return 1}function B(N){let w=N.target;if(w.removeEventListener("dispose",B),ct(w),w.isVideoTexture)p.delete(w)}function z(N){let w=N.target;w.removeEventListener("dispose",z),I(w)}function ct(N){let w=i.get(N);if(w.__webglInit===void 0)return;let K=N.source,ft=m.get(K);if(ft){let _t=ft[w.__cacheKey];if(_t.usedTimes--,_t.usedTimes===0)P(N);if(Object.keys(ft).length===0)m.delete(K)}i.remove(N)}function P(N){let w=i.get(N);t.deleteTexture(w.__webglTexture);let K=N.source,ft=m.get(K);delete ft[w.__cacheKey],o.memory.textures--}function I(N){let w=i.get(N);if(N.depthTexture)N.depthTexture.dispose(),i.remove(N.depthTexture);if(N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(w.__webglFramebuffer[ft]))for(let _t=0;_t<w.__webglFramebuffer[ft].length;_t++)t.deleteFramebuffer(w.__webglFramebuffer[ft][_t]);else t.deleteFramebuffer(w.__webglFramebuffer[ft]);if(w.__webglDepthbuffer)t.deleteRenderbuffer(w.__webglDepthbuffer[ft])}else{if(Array.isArray(w.__webglFramebuffer))for(let ft=0;ft<w.__webglFramebuffer.length;ft++)t.deleteFramebuffer(w.__webglFramebuffer[ft]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer)t.deleteRenderbuffer(w.__webglDepthbuffer);if(w.__webglMultisampledFramebuffer)t.deleteFramebuffer(w.__webglMultisampledFramebuffer);if(w.__webglColorRenderbuffer){for(let ft=0;ft<w.__webglColorRenderbuffer.length;ft++)if(w.__webglColorRenderbuffer[ft])t.deleteRenderbuffer(w.__webglColorRenderbuffer[ft])}if(w.__webglDepthRenderbuffer)t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let K=N.textures;for(let ft=0,_t=K.length;ft<_t;ft++){let ut=i.get(K[ft]);if(ut.__webglTexture)t.deleteTexture(ut.__webglTexture),o.memory.textures--;i.remove(K[ft])}i.remove(N)}let W=0;function Q(){W=0}function nt(){let N=W;if(N>=s.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures);return W+=1,N}function at(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function mt(N,w){let K=i.get(N);if(N.isVideoTexture)re(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){let ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(K,N,w);return}}n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+w)}function k(N,w){let K=i.get(N);if(N.version>0&&K.__version!==N.version){bt(K,N,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+w)}function J(N,w){let K=i.get(N);if(N.version>0&&K.__version!==N.version){bt(K,N,w);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+w)}function H(N,w){let K=i.get(N);if(N.version>0&&K.__version!==N.version){Zt(K,N,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+w)}let wt={[1000]:t.REPEAT,[1001]:t.CLAMP_TO_EDGE,[1002]:t.MIRRORED_REPEAT},T={[1003]:t.NEAREST,[1004]:t.NEAREST_MIPMAP_NEAREST,[1005]:t.NEAREST_MIPMAP_LINEAR,[1006]:t.LINEAR,[1007]:t.LINEAR_MIPMAP_NEAREST,[1008]:t.LINEAR_MIPMAP_LINEAR},Vt={[512]:t.NEVER,[519]:t.ALWAYS,[513]:t.LESS,[515]:t.LEQUAL,[514]:t.EQUAL,[518]:t.GEQUAL,[516]:t.GREATER,[517]:t.NOTEQUAL};function Qt(N,w){if(w.type===1015&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===1006||w.magFilter===1007||w.magFilter===1005||w.magFilter===1008||w.minFilter===1006||w.minFilter===1007||w.minFilter===1005||w.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(N,t.TEXTURE_WRAP_S,wt[w.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,wt[w.wrapT]),N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)t.texParameteri(N,t.TEXTURE_WRAP_R,wt[w.wrapR]);if(t.texParameteri(N,t.TEXTURE_MAG_FILTER,T[w.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,T[w.minFilter]),w.compareFunction)t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Vt[w.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===1003)return;if(w.minFilter!==1005&&w.minFilter!==1008)return;if(w.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function dt(N,w){let K=!1;if(N.__webglInit===void 0)N.__webglInit=!0,w.addEventListener("dispose",B);let ft=w.source,_t=m.get(ft);if(_t===void 0)_t={},m.set(ft,_t);let ut=at(w);if(ut!==N.__cacheKey){if(_t[ut]===void 0)_t[ut]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,K=!0;_t[ut].usedTimes++;let Kt=_t[N.__cacheKey];if(Kt!==void 0){if(_t[N.__cacheKey].usedTimes--,Kt.usedTimes===0)P(w)}N.__cacheKey=ut,N.__webglTexture=_t[ut].texture}return K}function bt(N,w,K){let ft=t.TEXTURE_2D;if(w.isDataArrayTexture||w.isCompressedArrayTexture)ft=t.TEXTURE_2D_ARRAY;if(w.isData3DTexture)ft=t.TEXTURE_3D;let _t=dt(N,w),ut=w.source;n.bindTexture(ft,N.__webglTexture,t.TEXTURE0+K);let Kt=i.get(ut);if(ut.version!==Kt.__version||_t===!0){n.activeTexture(t.TEXTURE0+K);let Pt=we.getPrimaries(we.workingColorSpace),Ut=w.colorSpace===""?null:we.getPrimaries(w.colorSpace),le=w.colorSpace===""||Pt===Ut?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Et=b(w.image,!1,s.maxTextureSize);Et=Ot(w,Et);let Ft=r.convert(w.format,w.colorSpace),Me=r.convert(w.type),jt=R(w.internalFormat,Ft,Me,w.colorSpace,w.isVideoTexture);Qt(ft,w);let Bt,de=w.mipmaps,ye=w.isVideoTexture!==!0,Pe=Kt.__version===void 0||_t===!0,V=ut.dataReady,vt=j(w,Et);if(w.isDepthTexture){if(jt=D(w.format===1027,w.type),Pe)if(ye)n.texStorage2D(t.TEXTURE_2D,1,jt,Et.width,Et.height);else n.texImage2D(t.TEXTURE_2D,0,jt,Et.width,Et.height,0,Ft,Me,null)}else if(w.isDataTexture)if(de.length>0){if(ye&&Pe)n.texStorage2D(t.TEXTURE_2D,vt,jt,de[0].width,de[0].height);for(let ht=0,xt=de.length;ht<xt;ht++)if(Bt=de[ht],ye){if(V)n.texSubImage2D(t.TEXTURE_2D,ht,0,0,Bt.width,Bt.height,Ft,Me,Bt.data)}else n.texImage2D(t.TEXTURE_2D,ht,jt,Bt.width,Bt.height,0,Ft,Me,Bt.data);w.generateMipmaps=!1}else if(ye){if(Pe)n.texStorage2D(t.TEXTURE_2D,vt,jt,Et.width,Et.height);if(V)n.texSubImage2D(t.TEXTURE_2D,0,0,0,Et.width,Et.height,Ft,Me,Et.data)}else n.texImage2D(t.TEXTURE_2D,0,jt,Et.width,Et.height,0,Ft,Me,Et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){if(ye&&Pe)n.texStorage3D(t.TEXTURE_2D_ARRAY,vt,jt,de[0].width,de[0].height,Et.depth);for(let ht=0,xt=de.length;ht<xt;ht++)if(Bt=de[ht],w.format!==1023)if(Ft!==null)if(ye){if(V)if(w.layerUpdates.size>0){let Nt=Il(Bt.width,Bt.height,w.format,w.type);for(let It of w.layerUpdates){let $t=Bt.data.subarray(It*Nt/Bt.data.BYTES_PER_ELEMENT,(It+1)*Nt/Bt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ht,0,0,It,Bt.width,Bt.height,1,Ft,$t)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ht,0,0,0,Bt.width,Bt.height,Et.depth,Ft,Bt.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ht,jt,Bt.width,Bt.height,Et.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ye){if(V)n.texSubImage3D(t.TEXTURE_2D_ARRAY,ht,0,0,0,Bt.width,Bt.height,Et.depth,Ft,Me,Bt.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,ht,jt,Bt.width,Bt.height,Et.depth,0,Ft,Me,Bt.data)}else{if(ye&&Pe)n.texStorage2D(t.TEXTURE_2D,vt,jt,de[0].width,de[0].height);for(let ht=0,xt=de.length;ht<xt;ht++)if(Bt=de[ht],w.format!==1023)if(Ft!==null)if(ye){if(V)n.compressedTexSubImage2D(t.TEXTURE_2D,ht,0,0,Bt.width,Bt.height,Ft,Bt.data)}else n.compressedTexImage2D(t.TEXTURE_2D,ht,jt,Bt.width,Bt.height,0,Bt.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ye){if(V)n.texSubImage2D(t.TEXTURE_2D,ht,0,0,Bt.width,Bt.height,Ft,Me,Bt.data)}else n.texImage2D(t.TEXTURE_2D,ht,jt,Bt.width,Bt.height,0,Ft,Me,Bt.data)}else if(w.isDataArrayTexture)if(ye){if(Pe)n.texStorage3D(t.TEXTURE_2D_ARRAY,vt,jt,Et.width,Et.height,Et.depth);if(V)if(w.layerUpdates.size>0){let ht=Il(Et.width,Et.height,w.format,w.type);for(let xt of w.layerUpdates){let Nt=Et.data.subarray(xt*ht/Et.data.BYTES_PER_ELEMENT,(xt+1)*ht/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,Ft,Me,Nt)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Ft,Me,Et.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,jt,Et.width,Et.height,Et.depth,0,Ft,Me,Et.data);else if(w.isData3DTexture)if(ye){if(Pe)n.texStorage3D(t.TEXTURE_3D,vt,jt,Et.width,Et.height,Et.depth);if(V)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Ft,Me,Et.data)}else n.texImage3D(t.TEXTURE_3D,0,jt,Et.width,Et.height,Et.depth,0,Ft,Me,Et.data);else if(w.isFramebufferTexture){if(Pe)if(ye)n.texStorage2D(t.TEXTURE_2D,vt,jt,Et.width,Et.height);else{let ht=Et.width,xt=Et.height;for(let Nt=0;Nt<vt;Nt++)n.texImage2D(t.TEXTURE_2D,Nt,jt,ht,xt,0,Ft,Me,null),ht>>=1,xt>>=1}}else if(de.length>0){if(ye&&Pe){let ht=Gt(de[0]);n.texStorage2D(t.TEXTURE_2D,vt,jt,ht.width,ht.height)}for(let ht=0,xt=de.length;ht<xt;ht++)if(Bt=de[ht],ye){if(V)n.texSubImage2D(t.TEXTURE_2D,ht,0,0,Ft,Me,Bt)}else n.texImage2D(t.TEXTURE_2D,ht,jt,Ft,Me,Bt);w.generateMipmaps=!1}else if(ye){if(Pe){let ht=Gt(Et);n.texStorage2D(t.TEXTURE_2D,vt,jt,ht.width,ht.height)}if(V)n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ft,Me,Et)}else n.texImage2D(t.TEXTURE_2D,0,jt,Ft,Me,Et);if(g(w))_(ft);if(Kt.__version=ut.version,w.onUpdate)w.onUpdate(w)}N.__version=w.version}function Zt(N,w,K){if(w.image.length!==6)return;let ft=dt(N,w),_t=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+K);let ut=i.get(_t);if(_t.version!==ut.__version||ft===!0){n.activeTexture(t.TEXTURE0+K);let Kt=we.getPrimaries(we.workingColorSpace),Pt=w.colorSpace===""?null:we.getPrimaries(w.colorSpace),Ut=w.colorSpace===""||Kt===Pt?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let le=w.isCompressedTexture||w.image[0].isCompressedTexture,Et=w.image[0]&&w.image[0].isDataTexture,Ft=[];for(let xt=0;xt<6;xt++){if(!le&&!Et)Ft[xt]=b(w.image[xt],!0,s.maxCubemapSize);else Ft[xt]=Et?w.image[xt].image:w.image[xt];Ft[xt]=Ot(w,Ft[xt])}let Me=Ft[0],jt=r.convert(w.format,w.colorSpace),Bt=r.convert(w.type),de=R(w.internalFormat,jt,Bt,w.colorSpace),ye=w.isVideoTexture!==!0,Pe=ut.__version===void 0||ft===!0,V=_t.dataReady,vt=j(w,Me);Qt(t.TEXTURE_CUBE_MAP,w);let ht;if(le){if(ye&&Pe)n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,de,Me.width,Me.height);for(let xt=0;xt<6;xt++){ht=Ft[xt].mipmaps;for(let Nt=0;Nt<ht.length;Nt++){let It=ht[Nt];if(w.format!==1023)if(jt!==null)if(ye){if(V)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,0,0,It.width,It.height,jt,It.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,de,It.width,It.height,0,It.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(ye){if(V)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,0,0,It.width,It.height,jt,Bt,It.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,de,It.width,It.height,0,jt,Bt,It.data)}}}else{if(ht=w.mipmaps,ye&&Pe){if(ht.length>0)vt++;let xt=Gt(Ft[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,de,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){if(ye){if(V)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ft[xt].width,Ft[xt].height,jt,Bt,Ft[xt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Ft[xt].width,Ft[xt].height,0,jt,Bt,Ft[xt].data);for(let Nt=0;Nt<ht.length;Nt++){let $t=ht[Nt].image[xt].image;if(ye){if(V)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,0,0,$t.width,$t.height,jt,Bt,$t.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,de,$t.width,$t.height,0,jt,Bt,$t.data)}}else{if(ye){if(V)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,jt,Bt,Ft[xt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,jt,Bt,Ft[xt]);for(let Nt=0;Nt<ht.length;Nt++){let It=ht[Nt];if(ye){if(V)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,0,0,jt,Bt,It.image[xt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,de,jt,Bt,It.image[xt])}}}if(g(w))_(t.TEXTURE_CUBE_MAP);if(ut.__version=_t.version,w.onUpdate)w.onUpdate(w)}N.__version=w.version}function kt(N,w,K,ft,_t,ut){let Kt=r.convert(K.format,K.colorSpace),Pt=r.convert(K.type),Ut=R(K.internalFormat,Kt,Pt,K.colorSpace),le=i.get(w),Et=i.get(K);if(Et.__renderTarget=w,!le.__hasExternalTextures){let Ft=Math.max(1,w.width>>ut),Me=Math.max(1,w.height>>ut);if(_t===t.TEXTURE_3D||_t===t.TEXTURE_2D_ARRAY)n.texImage3D(_t,ut,Ut,Ft,Me,w.depth,0,Kt,Pt,null);else n.texImage2D(_t,ut,Ut,Ft,Me,0,Kt,Pt,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,N),yt(w))a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ft,_t,Et.__webglTexture,0,Xt(w));else if(_t===t.TEXTURE_2D||_t>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,ft,_t,Et.__webglTexture,ut);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ct(N,w,K){if(t.bindRenderbuffer(t.RENDERBUFFER,N),w.depthBuffer){let ft=w.depthTexture,_t=ft&&ft.isDepthTexture?ft.type:null,ut=D(w.stencilBuffer,_t),Kt=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pt=Xt(w);if(yt(w))a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pt,ut,w.width,w.height);else if(K)t.renderbufferStorageMultisample(t.RENDERBUFFER,Pt,ut,w.width,w.height);else t.renderbufferStorage(t.RENDERBUFFER,ut,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,Kt,t.RENDERBUFFER,N)}else{let ft=w.textures;for(let _t=0;_t<ft.length;_t++){let ut=ft[_t],Kt=r.convert(ut.format,ut.colorSpace),Pt=r.convert(ut.type),Ut=R(ut.internalFormat,Kt,Pt,ut.colorSpace),le=Xt(w);if(K&&yt(w)===!1)t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Ut,w.width,w.height);else if(yt(w))a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Ut,w.width,w.height);else t.renderbufferStorage(t.RENDERBUFFER,Ut,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ne(N,w){if(w&&w.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ft=i.get(w.depthTexture);if(ft.__renderTarget=w,!ft.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0;mt(w.depthTexture,0);let _t=ft.__webglTexture,ut=Xt(w);if(w.depthTexture.format===1026)if(yt(w))a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_t,0,ut);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_t,0);else if(w.depthTexture.format===1027)if(yt(w))a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_t,0,ut);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_t,0);else throw Error("Unknown depthTexture format")}function xe(N){let w=i.get(N),K=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let ft=N.depthTexture;if(w.__depthDisposeCallback)w.__depthDisposeCallback();if(ft){let _t=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ft.removeEventListener("dispose",_t)};ft.addEventListener("dispose",_t),w.__depthDisposeCallback=_t}w.__boundDepthTexture=ft}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw Error("target.depthTexture not supported in Cube render targets");ne(w.__webglFramebuffer,N)}else if(K){w.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ft]),w.__webglDepthbuffer[ft]===void 0)w.__webglDepthbuffer[ft]=t.createRenderbuffer(),Ct(w.__webglDepthbuffer[ft],N,!1);else{let _t=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ut=w.__webglDepthbuffer[ft];t.bindRenderbuffer(t.RENDERBUFFER,ut),t.framebufferRenderbuffer(t.FRAMEBUFFER,_t,t.RENDERBUFFER,ut)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),Ct(w.__webglDepthbuffer,N,!1);else{let ft=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_t=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,_t),t.framebufferRenderbuffer(t.FRAMEBUFFER,ft,t.RENDERBUFFER,_t)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(N,w,K){let ft=i.get(N);if(w!==void 0)kt(ft.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(K!==void 0)xe(N)}function gt(N){let w=N.texture,K=i.get(N),ft=i.get(w);N.addEventListener("dispose",z);let _t=N.textures,ut=N.isWebGLCubeRenderTarget===!0,Kt=_t.length>1;if(!Kt){if(ft.__webglTexture===void 0)ft.__webglTexture=t.createTexture();ft.__version=w.version,o.memory.textures++}if(ut){K.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Pt]=[];for(let Ut=0;Ut<w.mipmaps.length;Ut++)K.__webglFramebuffer[Pt][Ut]=t.createFramebuffer()}else K.__webglFramebuffer[Pt]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Pt=0;Pt<w.mipmaps.length;Pt++)K.__webglFramebuffer[Pt]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(Kt)for(let Pt=0,Ut=_t.length;Pt<Ut;Pt++){let le=i.get(_t[Pt]);if(le.__webglTexture===void 0)le.__webglTexture=t.createTexture(),o.memory.textures++}if(N.samples>0&&yt(N)===!1){K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Pt=0;Pt<_t.length;Pt++){let Ut=_t[Pt];K.__webglColorRenderbuffer[Pt]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[Pt]);let le=r.convert(Ut.format,Ut.colorSpace),Et=r.convert(Ut.type),Ft=R(Ut.internalFormat,le,Et,Ut.colorSpace,N.isXRRenderTarget===!0),Me=Xt(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,Ft,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pt,t.RENDERBUFFER,K.__webglColorRenderbuffer[Pt])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer)K.__webglDepthRenderbuffer=t.createRenderbuffer(),Ct(K.__webglDepthRenderbuffer,N,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ut){n.bindTexture(t.TEXTURE_CUBE_MAP,ft.__webglTexture),Qt(t.TEXTURE_CUBE_MAP,w);for(let Pt=0;Pt<6;Pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ut=0;Ut<w.mipmaps.length;Ut++)kt(K.__webglFramebuffer[Pt][Ut],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut);else kt(K.__webglFramebuffer[Pt],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);if(g(w))_(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(Kt){for(let Pt=0,Ut=_t.length;Pt<Ut;Pt++){let le=_t[Pt],Et=i.get(le);if(n.bindTexture(t.TEXTURE_2D,Et.__webglTexture),Qt(t.TEXTURE_2D,le),kt(K.__webglFramebuffer,N,le,t.COLOR_ATTACHMENT0+Pt,t.TEXTURE_2D,0),g(le))_(t.TEXTURE_2D)}n.unbindTexture()}else{let Pt=t.TEXTURE_2D;if(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)Pt=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(Pt,ft.__webglTexture),Qt(Pt,w),w.mipmaps&&w.mipmaps.length>0)for(let Ut=0;Ut<w.mipmaps.length;Ut++)kt(K.__webglFramebuffer[Ut],N,w,t.COLOR_ATTACHMENT0,Pt,Ut);else kt(K.__webglFramebuffer,N,w,t.COLOR_ATTACHMENT0,Pt,0);if(g(w))_(Pt);n.unbindTexture()}if(N.depthBuffer)xe(N)}function At(N){let w=N.textures;for(let K=0,ft=w.length;K<ft;K++){let _t=w[K];if(g(_t)){let ut=U(N),Kt=i.get(_t).__webglTexture;n.bindTexture(ut,Kt),_(ut),n.unbindTexture()}}}let F=[],Ht=[];function St(N){if(N.samples>0){if(yt(N)===!1){let{textures:w,width:K,height:ft}=N,_t=t.COLOR_BUFFER_BIT,ut=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Kt=i.get(N),Pt=w.length>1;if(Pt)for(let Ut=0;Ut<w.length;Ut++)n.bindFramebuffer(t.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ut,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Kt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ut,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Ut=0;Ut<w.length;Ut++){if(N.resolveDepthBuffer){if(N.depthBuffer)_t|=t.DEPTH_BUFFER_BIT;if(N.stencilBuffer&&N.resolveStencilBuffer)_t|=t.STENCIL_BUFFER_BIT}if(Pt){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Kt.__webglColorRenderbuffer[Ut]);let le=i.get(w[Ut]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}if(t.blitFramebuffer(0,0,K,ft,0,0,K,ft,_t,t.NEAREST),c===!0){if(F.length=0,Ht.length=0,F.push(t.COLOR_ATTACHMENT0+Ut),N.depthBuffer&&N.resolveDepthBuffer===!1)F.push(ut),Ht.push(ut),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ht);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,F)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Pt)for(let Ut=0;Ut<w.length;Ut++){n.bindFramebuffer(t.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ut,t.RENDERBUFFER,Kt.__webglColorRenderbuffer[Ut]);let le=i.get(w[Ut]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Kt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ut,t.TEXTURE_2D,le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){let w=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Xt(N){return Math.min(s.maxSamples,N.samples)}function yt(N){let w=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function re(N){let w=o.render.frame;if(p.get(N)!==w)p.set(N,w),N.update()}function Ot(N,w){let{colorSpace:K,format:ft,type:_t}=N;if(N.isCompressedTexture===!0||N.isVideoTexture===!0)return w;if(K!=="srgb-linear"&&K!=="")if(we.getTransfer(K)==="srgb"){if(ft!==1023||_t!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",K);return w}function Gt(N){if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement)h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height;else if(typeof VideoFrame<"u"&&N instanceof VideoFrame)h.width=N.displayWidth,h.height=N.displayHeight;else h.width=N.width,h.height=N.height;return h}this.allocateTextureUnit=nt,this.resetTextureUnits=Q,this.setTexture2D=mt,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=ie,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=yt}function am(t,e){function n(i,s=""){let r,o=we.getTransfer(s);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1024)return t.LUMINANCE;if(i===1025)return t.LUMINANCE_ALPHA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(o==="srgb")if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===36196||i===37492)return o==="srgb"?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===37496)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===37808)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===36492)return o==="srgb"?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===1020)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}class _c extends ln{constructor(t=[]){super();this.isArrayCamera=!0,this.cameras=t}}class Dt extends Xe{constructor(){super();this.isGroup=!0,this.type="Group"}}var om={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let b=e.getJointPose(M,n),g=this._getHandJoint(c,M);if(b!==null)g.matrix.fromArray(b.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=b.radius;g.visible=b!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],l=h.position.distanceTo(p.position),m=0.02,y=0.005;if(c.inputState.pinching&&l>m+y)c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!c.inputState.pinching&&l<=m-y)c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(a!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity);else a.hasLinearVelocity=!1;if(s.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity);else a.hasAngularVelocity=!1}}if(o!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity);else o.hasLinearVelocity=!1;if(i.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(om)}}}if(o!==null)o.visible=i!==null;if(a!==null)a.visible=s!==null;if(c!==null)c.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var lm=`
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

}`;class xc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new cn,s=t.properties.get(i);if(s.__webglTexture=e.texture,e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new ri({vertexShader:lm,fragmentShader:cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Yn(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yc extends yi{constructor(t,e){super();let n=this,i=null,s=1,r=null,o="local-floor",a=1,c=null,h=null,p=null,l=null,m=null,y=null,M=new xc,b=e.getContextAttributes(),g=null,_=null,U=[],R=[],D=new Mt,j=null,B=new ln;B.viewport=new Ue;let z=new ln;z.viewport=new Ue;let ct=[B,z],P=new _c,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let bt=U[dt];if(bt===void 0)bt=new Or,U[dt]=bt;return bt.getTargetRaySpace()},this.getControllerGrip=function(dt){let bt=U[dt];if(bt===void 0)bt=new Or,U[dt]=bt;return bt.getGripSpace()},this.getHand=function(dt){let bt=U[dt];if(bt===void 0)bt=new Or,U[dt]=bt;return bt.getHandSpace()};function Q(dt){let bt=R.indexOf(dt.inputSource);if(bt===-1)return;let Zt=U[bt];if(Zt!==void 0)Zt.update(dt.inputSource,dt.frame,c||r),Zt.dispatchEvent({type:dt.type,data:dt.inputSource})}function nt(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",nt),i.removeEventListener("inputsourceschange",at);for(let dt=0;dt<U.length;dt++){let bt=R[dt];if(bt===null)continue;R[dt]=null,U[dt].disconnect(bt)}I=null,W=null,M.reset(),t.setRenderTarget(g),m=null,l=null,p=null,i=null,_=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(j),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){if(s=dt,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){if(o=dt,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(dt){c=dt},this.getBaseLayer=function(){return l!==null?l:m},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(dt){if(i=dt,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",nt),i.addEventListener("inputsourceschange",at),b.xrCompatible!==!0)await e.makeXRCompatible();if(j=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){let bt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,bt),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new xi(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let bt=null,Zt=null,kt=null;if(b.depth)kt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=b.stencil?1027:1026,Zt=b.stencil?1020:1014;let Ct={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:s};p=new XRWebGLBinding(i,e),l=p.createProjectionLayer(Ct),i.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),_=new xi(l.textureWidth,l.textureHeight,{format:1023,type:1009,depthTexture:new ro(l.textureWidth,l.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(a),c=null,r=await i.requestReferenceSpace(o),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function at(dt){for(let bt=0;bt<dt.removed.length;bt++){let Zt=dt.removed[bt],kt=R.indexOf(Zt);if(kt>=0)R[kt]=null,U[kt].disconnect(Zt)}for(let bt=0;bt<dt.added.length;bt++){let Zt=dt.added[bt],kt=R.indexOf(Zt);if(kt===-1){for(let ne=0;ne<U.length;ne++)if(ne>=R.length){R.push(Zt),kt=ne;break}else if(R[ne]===null){R[ne]=Zt,kt=ne;break}if(kt===-1)break}let Ct=U[kt];if(Ct)Ct.connect(Zt)}}let mt=new O,k=new O;function J(dt,bt,Zt){mt.setFromMatrixPosition(bt.matrixWorld),k.setFromMatrixPosition(Zt.matrixWorld);let kt=mt.distanceTo(k),Ct=bt.projectionMatrix.elements,ne=Zt.projectionMatrix.elements,xe=Ct[14]/(Ct[10]-1),ie=Ct[14]/(Ct[10]+1),gt=(Ct[9]+1)/Ct[5],At=(Ct[9]-1)/Ct[5],F=(Ct[8]-1)/Ct[0],Ht=(ne[8]+1)/ne[0],St=xe*F,Xt=xe*Ht,yt=kt/(-F+Ht),re=yt*-F;if(bt.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(re),dt.translateZ(yt),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),Ct[10]===-1)dt.projectionMatrix.copy(bt.projectionMatrix),dt.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let Ot=xe+yt,Gt=ie+yt,N=St-re,w=Xt+(kt-re),K=gt*ie/Gt*Ot,ft=At*ie/Gt*Ot;dt.projectionMatrix.makePerspective(N,w,K,ft,Ot,Gt),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function H(dt,bt){if(bt===null)dt.matrixWorld.copy(dt.matrix);else dt.matrixWorld.multiplyMatrices(bt.matrixWorld,dt.matrix);dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(i===null)return;let{near:bt,far:Zt}=dt;if(M.texture!==null){if(M.depthNear>0)bt=M.depthNear;if(M.depthFar>0)Zt=M.depthFar}if(P.near=z.near=B.near=bt,P.far=z.far=B.far=Zt,I!==P.near||W!==P.far)i.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,W=P.far;B.layers.mask=dt.layers.mask|2,z.layers.mask=dt.layers.mask|4,P.layers.mask=B.layers.mask|z.layers.mask;let kt=dt.parent,Ct=P.cameras;H(P,kt);for(let ne=0;ne<Ct.length;ne++)H(Ct[ne],kt);if(Ct.length===2)J(P,B,z);else P.projectionMatrix.copy(B.projectionMatrix);wt(dt,P,kt)};function wt(dt,bt,Zt){if(Zt===null)dt.matrix.copy(bt.matrixWorld);else dt.matrix.copy(Zt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(bt.matrixWorld);if(dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(bt.projectionMatrix),dt.projectionMatrixInverse.copy(bt.projectionMatrixInverse),dt.isPerspectiveCamera)dt.fov=cs*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1}this.getCamera=function(){return P},this.getFoveation=function(){if(l===null&&m===null)return;return a},this.setFoveation=function(dt){if(a=dt,l!==null)l.fixedFoveation=dt;if(m!==null&&m.fixedFoveation!==void 0)m.fixedFoveation=dt},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(P)};let T=null;function Vt(dt,bt){if(h=bt.getViewerPose(c||r),y=bt,h!==null){let Zt=h.views;if(m!==null)t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_);let kt=!1;if(Zt.length!==P.cameras.length)P.cameras.length=0,kt=!0;for(let ne=0;ne<Zt.length;ne++){let xe=Zt[ne],ie=null;if(m!==null)ie=m.getViewport(xe);else{let At=p.getViewSubImage(l,xe);if(ie=At.viewport,ne===0)t.setRenderTargetTextures(_,At.colorTexture,l.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(_)}let gt=ct[ne];if(gt===void 0)gt=new ln,gt.layers.enable(ne),gt.viewport=new Ue,ct[ne]=gt;if(gt.matrix.fromArray(xe.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(xe.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(ie.x,ie.y,ie.width,ie.height),ne===0)P.matrix.copy(gt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);if(kt===!0)P.cameras.push(gt)}let Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let ne=p.getDepthInformation(Zt[0]);if(ne&&ne.isValid&&ne.texture)M.init(t,ne,i.renderState)}}for(let Zt=0;Zt<U.length;Zt++){let kt=R[Zt],Ct=U[Zt];if(kt!==null&&Ct!==void 0)Ct.update(kt,bt,c||r)}if(T)T(dt,bt);if(bt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:bt});y=null}let Qt=new rc;Qt.setAnimationLoop(Vt),this.setAnimationLoop=function(dt){T=dt},this.dispose=function(){}}}var Di=new Xn,hm=new Re;function um(t,e){function n(g,_){if(g.matrixAutoUpdate===!0)g.updateMatrix();_.value.copy(g.matrix)}function i(g,_){if(_.color.getRGB(g.fogColor.value,nc(t)),_.isFog)g.fogNear.value=_.near,g.fogFar.value=_.far;else if(_.isFogExp2)g.fogDensity.value=_.density}function s(g,_,U,R,D){if(_.isMeshBasicMaterial)r(g,_);else if(_.isMeshLambertMaterial)r(g,_);else if(_.isMeshToonMaterial)r(g,_),l(g,_);else if(_.isMeshPhongMaterial)r(g,_),p(g,_);else if(_.isMeshStandardMaterial){if(r(g,_),m(g,_),_.isMeshPhysicalMaterial)y(g,_,D)}else if(_.isMeshMatcapMaterial)r(g,_),M(g,_);else if(_.isMeshDepthMaterial)r(g,_);else if(_.isMeshDistanceMaterial)r(g,_),b(g,_);else if(_.isMeshNormalMaterial)r(g,_);else if(_.isLineBasicMaterial){if(o(g,_),_.isLineDashedMaterial)a(g,_)}else if(_.isPointsMaterial)c(g,_,U,R);else if(_.isSpriteMaterial)h(g,_);else if(_.isShadowMaterial)g.color.value.copy(_.color),g.opacity.value=_.opacity;else if(_.isShaderMaterial)_.uniformsNeedUpdate=!1}function r(g,_){if(g.opacity.value=_.opacity,_.color)g.diffuse.value.copy(_.color);if(_.emissive)g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity);if(_.map)g.map.value=_.map,n(_.map,g.mapTransform);if(_.alphaMap)g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform);if(_.bumpMap){if(g.bumpMap.value=_.bumpMap,n(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===1)g.bumpScale.value*=-1}if(_.normalMap){if(g.normalMap.value=_.normalMap,n(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===1)g.normalScale.value.negate()}if(_.displacementMap)g.displacementMap.value=_.displacementMap,n(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias;if(_.emissiveMap)g.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,g.emissiveMapTransform);if(_.specularMap)g.specularMap.value=_.specularMap,n(_.specularMap,g.specularMapTransform);if(_.alphaTest>0)g.alphaTest.value=_.alphaTest;let U=e.get(_),{envMap:R,envMapRotation:D}=U;if(R){if(g.envMap.value=R,Di.copy(D),Di.x*=-1,Di.y*=-1,Di.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1)Di.y*=-1,Di.z*=-1;g.envMapRotation.value.setFromMatrix4(hm.makeRotationFromEuler(Di)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio}if(_.lightMap)g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,g.lightMapTransform);if(_.aoMap)g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,g.aoMapTransform)}function o(g,_){if(g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map)g.map.value=_.map,n(_.map,g.mapTransform)}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,U,R){if(g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*U,g.scale.value=R*0.5,_.map)g.map.value=_.map,n(_.map,g.uvTransform);if(_.alphaMap)g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform);if(_.alphaTest>0)g.alphaTest.value=_.alphaTest}function h(g,_){if(g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map)g.map.value=_.map,n(_.map,g.mapTransform);if(_.alphaMap)g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform);if(_.alphaTest>0)g.alphaTest.value=_.alphaTest}function p(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,0.0001)}function l(g,_){if(_.gradientMap)g.gradientMap.value=_.gradientMap}function m(g,_){if(g.metalness.value=_.metalness,_.metalnessMap)g.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,g.metalnessMapTransform);if(g.roughness.value=_.roughness,_.roughnessMap)g.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,g.roughnessMapTransform);if(_.envMap)g.envMapIntensity.value=_.envMapIntensity}function y(g,_,U){if(g.ior.value=_.ior,_.sheen>0){if(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap)g.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,g.sheenColorMapTransform);if(_.sheenRoughnessMap)g.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,g.sheenRoughnessMapTransform)}if(_.clearcoat>0){if(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap)g.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,g.clearcoatMapTransform);if(_.clearcoatRoughnessMap)g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform);if(_.clearcoatNormalMap){if(g.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===1)g.clearcoatNormalScale.value.negate()}}if(_.dispersion>0)g.dispersion.value=_.dispersion;if(_.iridescence>0){if(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap)g.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,g.iridescenceMapTransform);if(_.iridescenceThicknessMap)g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform)}if(_.transmission>0){if(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=U.texture,g.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap)g.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,g.transmissionMapTransform);if(g.thickness.value=_.thickness,_.thicknessMap)g.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,g.thicknessMapTransform);g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)}if(_.anisotropy>0){if(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap)g.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,g.anisotropyMapTransform)}if(g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap)g.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,g.specularColorMapTransform);if(_.specularIntensityMap)g.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,g.specularIntensityMapTransform)}function M(g,_){if(_.matcap)g.matcap.value=_.matcap}function b(g,_){let U=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(U.matrixWorld),g.nearDistance.value=U.shadow.camera.near,g.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dm(t,e,n,i){let s={},r={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(U,R){let D=R.program;i.uniformBlockBinding(U,D)}function h(U,R){let D=s[U.id];if(D===void 0)M(U),D=p(U),s[U.id]=D,U.addEventListener("dispose",g);let j=R.program;i.updateUBOMapping(U,j);let B=e.render.frame;if(r[U.id]!==B)m(U),r[U.id]=B}function p(U){let R=l();U.__bindingPointIndex=R;let D=t.createBuffer(),{__size:j,usage:B}=U;return t.bindBuffer(t.UNIFORM_BUFFER,D),t.bufferData(t.UNIFORM_BUFFER,j,B),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,R,D),D}function l(){for(let U=0;U<a;U++)if(o.indexOf(U)===-1)return o.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(U){let R=s[U.id],{uniforms:D,__cache:j}=U;t.bindBuffer(t.UNIFORM_BUFFER,R);for(let B=0,z=D.length;B<z;B++){let ct=Array.isArray(D[B])?D[B]:[D[B]];for(let P=0,I=ct.length;P<I;P++){let W=ct[P];if(y(W,B,P,j)===!0){let Q=W.__offset,nt=Array.isArray(W.value)?W.value:[W.value],at=0;for(let mt=0;mt<nt.length;mt++){let k=nt[mt],J=b(k);if(typeof k==="number"||typeof k==="boolean")W.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,Q+at,W.__data);else if(k.isMatrix3)W.__data[0]=k.elements[0],W.__data[1]=k.elements[1],W.__data[2]=k.elements[2],W.__data[3]=0,W.__data[4]=k.elements[3],W.__data[5]=k.elements[4],W.__data[6]=k.elements[5],W.__data[7]=0,W.__data[8]=k.elements[6],W.__data[9]=k.elements[7],W.__data[10]=k.elements[8],W.__data[11]=0;else k.toArray(W.__data,at),at+=J.storage/Float32Array.BYTES_PER_ELEMENT}t.bufferSubData(t.UNIFORM_BUFFER,Q,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function y(U,R,D,j){let B=U.value,z=R+"_"+D;if(j[z]===void 0){if(typeof B==="number"||typeof B==="boolean")j[z]=B;else j[z]=B.clone();return!0}else{let ct=j[z];if(typeof B==="number"||typeof B==="boolean"){if(ct!==B)return j[z]=B,!0}else if(ct.equals(B)===!1)return ct.copy(B),!0}return!1}function M(U){let R=U.uniforms,D=0,j=16;for(let z=0,ct=R.length;z<ct;z++){let P=Array.isArray(R[z])?R[z]:[R[z]];for(let I=0,W=P.length;I<W;I++){let Q=P[I],nt=Array.isArray(Q.value)?Q.value:[Q.value];for(let at=0,mt=nt.length;at<mt;at++){let k=nt[at],J=b(k),H=D%j,wt=H%J.boundary,T=H+wt;if(D+=wt,T!==0&&j-T<J.storage)D+=j-T;Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=J.storage}}}let B=D%j;if(B>0)D+=j-B;return U.__size=D,U.__cache={},this}function b(U){let R={boundary:0,storage:0};if(typeof U==="number"||typeof U==="boolean")R.boundary=4,R.storage=4;else if(U.isVector2)R.boundary=8,R.storage=8;else if(U.isVector3||U.isColor)R.boundary=16,R.storage=12;else if(U.isVector4)R.boundary=16,R.storage=16;else if(U.isMatrix3)R.boundary=48,R.storage=48;else if(U.isMatrix4)R.boundary=64,R.storage=64;else if(U.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U);return R}function g(U){let R=U.target;R.removeEventListener("dispose",g);let D=o.indexOf(R.__bindingPointIndex);o.splice(D,1),t.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function _(){for(let U in s)t.deleteBuffer(s[U]);o=[],s={},r={}}return{bind:c,update:h,dispose:_}}class ao{constructor(t={}){let{canvas:e=mh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:l=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let y=new Uint32Array(4),M=new Int32Array(4),b=null,g=null,_=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let R=this,D=!1,j=0,B=0,z=null,ct=-1,P=null,I=new Ue,W=new Ue,Q=null,nt=new _e(0),at=0,{width:mt,height:k}=e,J=1,H=null,wt=null,T=new Ue(0,0,mt,k),Vt=new Ue(0,0,mt,k),Qt=!1,dt=new Gr,bt=!1,Zt=!1,kt=new Re,Ct=new Re,ne=new O,xe=new Ue,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function At(){return z===null?J:1}let F=n;function Ht(C,Z){return e.getContext(C,Z)}try{let C={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e)e.setAttribute("data-engine","three.js r170");if(e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),F===null){if(F=Ht("webgl2",C),F===null)if(Ht("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let St,Xt,yt,re,Ot,Gt,N,w,K,ft,_t,ut,Kt,Pt,Ut,le,Et,Ft,Me,jt,Bt,de,ye,Pe;function V(){if(St=new Rf(F),St.init(),de=new am(F,St),Xt=new Sf(F,St,t,de),yt=new im(F,St),Xt.reverseDepthBuffer&&l)yt.buffers.depth.setReversed(!0);re=new If(F),Ot=new Vp,Gt=new rm(F,St,yt,Ot,Xt,de,re),N=new bf(R),w=new Af(R),K=new Oh(F),ye=new vf(F,K),ft=new Cf(F,K,re,ye),_t=new Lf(F,ft,K,re),Me=new Df(F,Xt,Gt),le=new Ef(Ot),ut=new Wp(R,N,w,St,Xt,ye,le),Kt=new um(R,Ot),Pt=new qp,Ut=new jp(St),Ft=new yf(R,N,w,yt,_t,m,a),Et=new em(R,_t,Xt),Pe=new dm(F,re,Xt,yt),jt=new Mf(F,St,re),Bt=new Pf(F,St,re),re.programs=ut.programs,R.capabilities=Xt,R.extensions=St,R.properties=Ot,R.renderLists=Pt,R.shadowMap=Et,R.state=yt,R.info=re}V();let vt=new yc(R,F);this.xr=vt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=St.get("WEBGL_lose_context");if(C)C.loseContext()},this.forceContextRestore=function(){let C=St.get("WEBGL_lose_context");if(C)C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){if(C===void 0)return;J=C,this.setSize(mt,k,!1)},this.getSize=function(C){return C.set(mt,k)},this.setSize=function(C,Z,et=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(mt=C,k=Z,e.width=Math.floor(C*J),e.height=Math.floor(Z*J),et===!0)e.style.width=C+"px",e.style.height=Z+"px";this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(mt*J,k*J).floor()},this.setDrawingBufferSize=function(C,Z,et){mt=C,k=Z,J=et,e.width=Math.floor(C*et),e.height=Math.floor(Z*et),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(T)},this.setViewport=function(C,Z,et,tt){if(C.isVector4)T.set(C.x,C.y,C.z,C.w);else T.set(C,Z,et,tt);yt.viewport(I.copy(T).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(Vt)},this.setScissor=function(C,Z,et,tt){if(C.isVector4)Vt.set(C.x,C.y,C.z,C.w);else Vt.set(C,Z,et,tt);yt.scissor(W.copy(Vt).multiplyScalar(J).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(C){yt.setScissorTest(Qt=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){wt=C},this.getClearColor=function(C){return C.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(C=!0,Z=!0,et=!0){let tt=0;if(C){let Y=!1;if(z!==null){let Tt=z.texture.format;Y=Tt===1033||Tt===1031||Tt===1029}if(Y){let Tt=z.texture.type,Rt=Tt===1009||Tt===1014||Tt===1012||Tt===1020||Tt===1017||Tt===1018,Wt=Ft.getClearColor(),qt=Ft.getClearAlpha(),{r:ce,g:pe,b:Yt}=Wt;if(Rt)y[0]=ce,y[1]=pe,y[2]=Yt,y[3]=qt,F.clearBufferuiv(F.COLOR,0,y);else M[0]=ce,M[1]=pe,M[2]=Yt,M[3]=qt,F.clearBufferiv(F.COLOR,0,M)}else tt|=F.COLOR_BUFFER_BIT}if(Z)tt|=F.DEPTH_BUFFER_BIT;if(et)tt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);F.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),Pt.dispose(),Ut.dispose(),Ot.dispose(),N.dispose(),w.dispose(),_t.dispose(),ye.dispose(),Pe.dispose(),ut.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Nn),vt.removeEventListener("sessionend",ea),gn.stop()};function ht(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let C=re.autoReset,Z=Et.enabled,et=Et.autoUpdate,tt=Et.needsUpdate,Y=Et.type;V(),re.autoReset=C,Et.enabled=Z,Et.autoUpdate=et,Et.needsUpdate=tt,Et.type=Y}function Nt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function It(C){let Z=C.target;Z.removeEventListener("dispose",It),$t(Z)}function $t(C){Be(C),Ot.remove(C)}function Be(C){let Z=Ot.get(C).programs;if(Z!==void 0){if(Z.forEach(function(et){ut.releaseProgram(et)}),C.isShaderMaterial)ut.releaseShaderCache(C)}}this.renderBufferDirect=function(C,Z,et,tt,Y,Tt){if(Z===null)Z=ie;let Rt=Y.isMesh&&Y.matrixWorld.determinant()<0,Wt=nr(C,Z,et,tt,Y);yt.setMaterial(tt,Rt);let qt=et.index,ce=1;if(tt.wireframe===!0){if(qt=ft.getWireframeAttribute(et),qt===void 0)return;ce=2}let pe=et.drawRange,Yt=et.attributes.position,Se=pe.start*ce,fe=(pe.start+pe.count)*ce;if(Tt!==null)Se=Math.max(Se,Tt.start*ce),fe=Math.min(fe,(Tt.start+Tt.count)*ce);if(qt!==null)Se=Math.max(Se,0),fe=Math.min(fe,qt.count);else if(Yt!==void 0&&Yt!==null)Se=Math.max(Se,0),fe=Math.min(fe,Yt.count);let Ee=fe-Se;if(Ee<0||Ee===1/0)return;ye.setup(Y,tt,Wt,et,qt);let tn,Te=jt;if(qt!==null)tn=K.get(qt),Te=Bt,Te.setIndex(tn);if(Y.isMesh)if(tt.wireframe===!0)yt.setLineWidth(tt.wireframeLinewidth*At()),Te.setMode(F.LINES);else Te.setMode(F.TRIANGLES);else if(Y.isLine){let Jt=tt.linewidth;if(Jt===void 0)Jt=1;if(yt.setLineWidth(Jt*At()),Y.isLineSegments)Te.setMode(F.LINES);else if(Y.isLineLoop)Te.setMode(F.LINE_LOOP);else Te.setMode(F.LINE_STRIP)}else if(Y.isPoints)Te.setMode(F.POINTS);else if(Y.isSprite)Te.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Te.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(!St.get("WEBGL_multi_draw")){let{_multiDrawStarts:Jt,_multiDrawCounts:hn,_multiDrawCount:se}=Y,fn=qt?K.get(qt).bytesPerElement:1,_n=Ot.get(tt).currentProgram.getUniforms();for(let rn=0;rn<se;rn++)_n.setValue(F,"_gl_DrawID",rn),Te.render(Jt[rn]/fn,hn[rn])}else Te.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Te.renderInstances(Se,Ee,Y.count);else if(et.isInstancedBufferGeometry){let Jt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,hn=Math.min(et.instanceCount,Jt);Te.renderInstances(Se,Ee,hn)}else Te.render(Se,Ee)};function ke(C,Z,et){if(C.transparent===!0&&C.side===2&&C.forceSinglePass===!1)C.side=1,C.needsUpdate=!0,ki(C,Z,et),C.side=0,C.needsUpdate=!0,ki(C,Z,et),C.side=2;else ki(C,Z,et)}this.compile=function(C,Z,et=null){if(et===null)et=C;if(g=Ut.get(et),g.init(Z),U.push(g),et.traverseVisible(function(Y){if(Y.isLight&&Y.layers.test(Z.layers)){if(g.pushLight(Y),Y.castShadow)g.pushShadow(Y)}}),C!==et)C.traverseVisible(function(Y){if(Y.isLight&&Y.layers.test(Z.layers)){if(g.pushLight(Y),Y.castShadow)g.pushShadow(Y)}});g.setupLights();let tt=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Rt=0;Rt<Tt.length;Rt++){let Wt=Tt[Rt];ke(Wt,et,Y),tt.add(Wt)}else ke(Tt,et,Y),tt.add(Tt)}),U.pop(),g=null,tt},this.compileAsync=function(C,Z,et=null){let tt=this.compile(C,Z,et);return new Promise((Y)=>{function Tt(){if(tt.forEach(function(Rt){if(Ot.get(Rt).currentProgram.isReady())tt.delete(Rt)}),tt.size===0){Y(C);return}setTimeout(Tt,10)}if(St.get("KHR_parallel_shader_compile")!==null)Tt();else setTimeout(Tt,10)})};let be=null;function Un(C){if(be)be(C)}function Nn(){gn.stop()}function ea(){gn.start()}let gn=new rc;if(gn.setAnimationLoop(Un),typeof self<"u")gn.setContext(self);this.setAnimationLoop=function(C){be=C,vt.setAnimationLoop(C),C===null?gn.stop():gn.start()},vt.addEventListener("sessionstart",Nn),vt.addEventListener("sessionend",ea),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(C.matrixWorldAutoUpdate===!0)C.updateMatrixWorld();if(Z.parent===null&&Z.matrixWorldAutoUpdate===!0)Z.updateMatrixWorld();if(vt.enabled===!0&&vt.isPresenting===!0){if(vt.cameraAutoUpdate===!0)vt.updateCamera(Z);Z=vt.getCamera()}if(C.isScene===!0)C.onBeforeRender(R,C,Z,z);if(g=Ut.get(C,U.length),g.init(Z),U.push(g),Ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),dt.setFromProjectionMatrix(Ct),Zt=this.localClippingEnabled,bt=le.init(this.clippingPlanes,Zt),b=Pt.get(C,_.length),b.init(),_.push(b),vt.enabled===!0&&vt.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();if(Tt!==null)Kn(Tt,Z,-1/0,R.sortObjects)}if(Kn(C,Z,0,R.sortObjects),b.finish(),R.sortObjects===!0)b.sort(H,wt);if(gt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,gt)Ft.addToRenderList(b,C);if(this.info.render.frame++,bt===!0)le.beginShadows();let et=g.state.shadowsArray;if(Et.render(et,C,Z),bt===!0)le.endShadows();if(this.info.autoReset===!0)this.info.reset();let tt=b.opaque,Y=b.transmissive;if(g.setupLights(),Z.isArrayCamera){let Tt=Z.cameras;if(Y.length>0)for(let Rt=0,Wt=Tt.length;Rt<Wt;Rt++){let qt=Tt[Rt];Mi(tt,Y,C,qt)}if(gt)Ft.render(C);for(let Rt=0,Wt=Tt.length;Rt<Wt;Rt++){let qt=Tt[Rt];ys(b,C,qt,qt.viewport)}}else{if(Y.length>0)Mi(tt,Y,C,Z);if(gt)Ft.render(C);ys(b,C,Z)}if(z!==null)Gt.updateMultisampleRenderTarget(z),Gt.updateRenderTargetMipmap(z);if(C.isScene===!0)C.onAfterRender(R,C,Z);if(ye.resetDefaultState(),ct=-1,P=null,U.pop(),U.length>0){if(g=U[U.length-1],bt===!0)le.setGlobalState(R.clippingPlanes,g.state.camera)}else g=null;if(_.pop(),_.length>0)b=_[_.length-1];else b=null};function Kn(C,Z,et,tt){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD){if(C.autoUpdate===!0)C.update(Z)}else if(C.isLight){if(g.pushLight(C),C.castShadow)g.pushShadow(C)}else if(C.isSprite){if(!C.frustumCulled||dt.intersectsSprite(C)){if(tt)xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);let Rt=_t.update(C),Wt=C.material;if(Wt.visible)b.push(C,Rt,Wt,et,xe.z,null)}}else if(C.isMesh||C.isLine||C.isPoints){if(!C.frustumCulled||dt.intersectsObject(C)){let Rt=_t.update(C),Wt=C.material;if(tt){if(C.boundingSphere!==void 0){if(C.boundingSphere===null)C.computeBoundingSphere();xe.copy(C.boundingSphere.center)}else{if(Rt.boundingSphere===null)Rt.computeBoundingSphere();xe.copy(Rt.boundingSphere.center)}xe.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)}if(Array.isArray(Wt)){let qt=Rt.groups;for(let ce=0,pe=qt.length;ce<pe;ce++){let Yt=qt[ce],Se=Wt[Yt.materialIndex];if(Se&&Se.visible)b.push(C,Rt,Se,et,xe.z,Yt)}}else if(Wt.visible)b.push(C,Rt,Wt,et,xe.z,null)}}}let Tt=C.children;for(let Rt=0,Wt=Tt.length;Rt<Wt;Rt++)Kn(Tt[Rt],Z,et,tt)}function ys(C,Z,et,tt){let{opaque:Y,transmissive:Tt,transparent:Rt}=C;if(g.setupLightsView(et),bt===!0)le.setGlobalState(R.clippingPlanes,et);if(tt)yt.viewport(I.copy(tt));if(Y.length>0)Gn(Y,Z,et);if(Tt.length>0)Gn(Tt,Z,et);if(Rt.length>0)Gn(Rt,Z,et);yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Mi(C,Z,et,tt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(g.state.transmissionRenderTarget[tt.id]===void 0)g.state.transmissionRenderTarget[tt.id]=new xi(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace});let Tt=g.state.transmissionRenderTarget[tt.id],Rt=tt.viewport||I;Tt.setSize(Rt.z,Rt.w);let Wt=R.getRenderTarget();if(R.setRenderTarget(Tt),R.getClearColor(nt),at=R.getClearAlpha(),at<1)R.setClearColor(16777215,0.5);if(R.clear(),gt)Ft.render(et);let qt=R.toneMapping;R.toneMapping=0;let ce=tt.viewport;if(tt.viewport!==void 0)tt.viewport=void 0;if(g.setupLightsView(tt),bt===!0)le.setGlobalState(R.clippingPlanes,tt);if(Gn(C,et,tt),Gt.updateMultisampleRenderTarget(Tt),Gt.updateRenderTargetMipmap(Tt),St.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Yt=0,Se=Z.length;Yt<Se;Yt++){let fe=Z[Yt],{object:Ee,geometry:tn,material:Te,group:Jt}=fe;if(Te.side===2&&Ee.layers.test(tt.layers)){let hn=Te.side;Te.side=1,Te.needsUpdate=!0,tr(Ee,et,tt,tn,Te,Jt),Te.side=hn,Te.needsUpdate=!0,pe=!0}}if(pe===!0)Gt.updateMultisampleRenderTarget(Tt),Gt.updateRenderTargetMipmap(Tt)}if(R.setRenderTarget(Wt),R.setClearColor(nt,at),ce!==void 0)tt.viewport=ce;R.toneMapping=qt}function Gn(C,Z,et){let tt=Z.isScene===!0?Z.overrideMaterial:null;for(let Y=0,Tt=C.length;Y<Tt;Y++){let Rt=C[Y],{object:Wt,geometry:qt}=Rt,ce=tt===null?Rt.material:tt,pe=Rt.group;if(Wt.layers.test(et.layers))tr(Wt,Z,et,qt,ce,pe)}}function tr(C,Z,et,tt,Y,Tt){if(C.onBeforeRender(R,Z,et,tt,Y,Tt),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(R,Z,et,tt,C,Tt),Y.transparent===!0&&Y.side===2&&Y.forceSinglePass===!1)Y.side=1,Y.needsUpdate=!0,R.renderBufferDirect(et,Z,tt,Y,C,Tt),Y.side=0,Y.needsUpdate=!0,R.renderBufferDirect(et,Z,tt,Y,C,Tt),Y.side=2;else R.renderBufferDirect(et,Z,tt,Y,C,Tt);C.onAfterRender(R,Z,et,tt,Y,Tt)}function ki(C,Z,et){if(Z.isScene!==!0)Z=ie;let tt=Ot.get(C),Y=g.state.lights,Tt=g.state.shadowsArray,Rt=Y.state.version,Wt=ut.getParameters(C,Y.state,Tt,Z,et),qt=ut.getProgramCacheKey(Wt),ce=tt.programs;if(tt.environment=C.isMeshStandardMaterial?Z.environment:null,tt.fog=Z.fog,tt.envMap=(C.isMeshStandardMaterial?w:N).get(C.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ce===void 0)C.addEventListener("dispose",It),ce=new Map,tt.programs=ce;let pe=ce.get(qt);if(pe!==void 0){if(tt.currentProgram===pe&&tt.lightsStateVersion===Rt)return vs(C,Wt),pe}else Wt.uniforms=ut.getUniforms(C),C.onBeforeCompile(Wt,R),pe=ut.acquireProgram(Wt,qt),ce.set(qt,pe),tt.uniforms=Wt.uniforms;let Yt=tt.uniforms;if(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)Yt.clippingPlanes=le.uniform;if(vs(C,Wt),tt.needsLights=Ss(C),tt.lightsStateVersion=Rt,tt.needsLights)Yt.ambientLightColor.value=Y.state.ambient,Yt.lightProbe.value=Y.state.probe,Yt.directionalLights.value=Y.state.directional,Yt.directionalLightShadows.value=Y.state.directionalShadow,Yt.spotLights.value=Y.state.spot,Yt.spotLightShadows.value=Y.state.spotShadow,Yt.rectAreaLights.value=Y.state.rectArea,Yt.ltc_1.value=Y.state.rectAreaLTC1,Yt.ltc_2.value=Y.state.rectAreaLTC2,Yt.pointLights.value=Y.state.point,Yt.pointLightShadows.value=Y.state.pointShadow,Yt.hemisphereLights.value=Y.state.hemi,Yt.directionalShadowMap.value=Y.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Yt.spotShadowMap.value=Y.state.spotShadowMap,Yt.spotLightMatrix.value=Y.state.spotLightMatrix,Yt.spotLightMap.value=Y.state.spotLightMap,Yt.pointShadowMap.value=Y.state.pointShadowMap,Yt.pointShadowMatrix.value=Y.state.pointShadowMatrix;return tt.currentProgram=pe,tt.uniformsList=null,pe}function er(C){if(C.uniformsList===null){let Z=C.currentProgram.getUniforms();C.uniformsList=Os.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function vs(C,Z){let et=Ot.get(C);et.outputColorSpace=Z.outputColorSpace,et.batching=Z.batching,et.batchingColor=Z.batchingColor,et.instancing=Z.instancing,et.instancingColor=Z.instancingColor,et.instancingMorph=Z.instancingMorph,et.skinning=Z.skinning,et.morphTargets=Z.morphTargets,et.morphNormals=Z.morphNormals,et.morphColors=Z.morphColors,et.morphTargetsCount=Z.morphTargetsCount,et.numClippingPlanes=Z.numClippingPlanes,et.numIntersection=Z.numClipIntersection,et.vertexAlphas=Z.vertexAlphas,et.vertexTangents=Z.vertexTangents,et.toneMapping=Z.toneMapping}function nr(C,Z,et,tt,Y){if(Z.isScene!==!0)Z=ie;Gt.resetTextureUnits();let Tt=Z.fog,Rt=tt.isMeshStandardMaterial?Z.environment:null,Wt=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:"srgb-linear",qt=(tt.isMeshStandardMaterial?w:N).get(tt.envMap||Rt),ce=tt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pe=!!et.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Yt=!!et.morphAttributes.position,Se=!!et.morphAttributes.normal,fe=!!et.morphAttributes.color,Ee=0;if(tt.toneMapped){if(z===null||z.isXRRenderTarget===!0)Ee=R.toneMapping}let tn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Te=tn!==void 0?tn.length:0,Jt=Ot.get(tt),hn=g.state.lights;if(bt===!0){if(Zt===!0||C!==P){let Ie=C===P&&tt.id===ct;le.setState(tt,C,Ie)}}let se=!1;if(tt.version===Jt.__version){if(Jt.needsLights&&Jt.lightsStateVersion!==hn.state.version)se=!0;else if(Jt.outputColorSpace!==Wt)se=!0;else if(Y.isBatchedMesh&&Jt.batching===!1)se=!0;else if(!Y.isBatchedMesh&&Jt.batching===!0)se=!0;else if(Y.isBatchedMesh&&Jt.batchingColor===!0&&Y.colorTexture===null)se=!0;else if(Y.isBatchedMesh&&Jt.batchingColor===!1&&Y.colorTexture!==null)se=!0;else if(Y.isInstancedMesh&&Jt.instancing===!1)se=!0;else if(!Y.isInstancedMesh&&Jt.instancing===!0)se=!0;else if(Y.isSkinnedMesh&&Jt.skinning===!1)se=!0;else if(!Y.isSkinnedMesh&&Jt.skinning===!0)se=!0;else if(Y.isInstancedMesh&&Jt.instancingColor===!0&&Y.instanceColor===null)se=!0;else if(Y.isInstancedMesh&&Jt.instancingColor===!1&&Y.instanceColor!==null)se=!0;else if(Y.isInstancedMesh&&Jt.instancingMorph===!0&&Y.morphTexture===null)se=!0;else if(Y.isInstancedMesh&&Jt.instancingMorph===!1&&Y.morphTexture!==null)se=!0;else if(Jt.envMap!==qt)se=!0;else if(tt.fog===!0&&Jt.fog!==Tt)se=!0;else if(Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==le.numPlanes||Jt.numIntersection!==le.numIntersection))se=!0;else if(Jt.vertexAlphas!==ce)se=!0;else if(Jt.vertexTangents!==pe)se=!0;else if(Jt.morphTargets!==Yt)se=!0;else if(Jt.morphNormals!==Se)se=!0;else if(Jt.morphColors!==fe)se=!0;else if(Jt.toneMapping!==Ee)se=!0;else if(Jt.morphTargetsCount!==Te)se=!0}else se=!0,Jt.__version=tt.version;let fn=Jt.currentProgram;if(se===!0)fn=ki(tt,Z,Y);let _n=!1,rn=!1,pn=!1,Ae=fn.getUniforms(),xn=Jt.uniforms;if(yt.useProgram(fn.program))_n=!0,rn=!0,pn=!0;if(tt.id!==ct)ct=tt.id,rn=!0;if(_n||P!==C){if(yt.buffers.depth.getReversed())kt.copy(C.projectionMatrix),_h(kt),xh(kt),Ae.setValue(F,"projectionMatrix",kt);else Ae.setValue(F,"projectionMatrix",C.projectionMatrix);Ae.setValue(F,"viewMatrix",C.matrixWorldInverse);let Tn=Ae.map.cameraPosition;if(Tn!==void 0)Tn.setValue(F,ne.setFromMatrixPosition(C.matrixWorld));if(Xt.logarithmicDepthBuffer)Ae.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2));if(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)Ae.setValue(F,"isOrthographic",C.isOrthographicCamera===!0);if(P!==C)P=C,rn=!0,pn=!0}if(Y.isSkinnedMesh){Ae.setOptional(F,Y,"bindMatrix"),Ae.setOptional(F,Y,"bindMatrixInverse");let Ie=Y.skeleton;if(Ie){if(Ie.boneTexture===null)Ie.computeBoneTexture();Ae.setValue(F,"boneTexture",Ie.boneTexture,Gt)}}if(Y.isBatchedMesh){if(Ae.setOptional(F,Y,"batchingTexture"),Ae.setValue(F,"batchingTexture",Y._matricesTexture,Gt),Ae.setOptional(F,Y,"batchingIdTexture"),Ae.setValue(F,"batchingIdTexture",Y._indirectTexture,Gt),Ae.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null)Ae.setValue(F,"batchingColorTexture",Y._colorsTexture,Gt)}let jn=et.morphAttributes;if(jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)Me.update(Y,et,fn);if(rn||Jt.receiveShadow!==Y.receiveShadow)Jt.receiveShadow=Y.receiveShadow,Ae.setValue(F,"receiveShadow",Y.receiveShadow);if(tt.isMeshGouraudMaterial&&tt.envMap!==null)xn.envMap.value=qt,xn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1;if(tt.isMeshStandardMaterial&&tt.envMap===null&&Z.environment!==null)xn.envMapIntensity.value=Z.environmentIntensity;if(rn){if(Ae.setValue(F,"toneMappingExposure",R.toneMappingExposure),Jt.needsLights)Ms(xn,pn);if(Tt&&tt.fog===!0)Kt.refreshFogUniforms(xn,Tt);Kt.refreshMaterialUniforms(xn,tt,J,k,g.state.transmissionRenderTarget[C.id]),Os.upload(F,er(Jt),xn,Gt)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0)Os.upload(F,er(Jt),xn,Gt),tt.uniformsNeedUpdate=!1;if(tt.isSpriteMaterial)Ae.setValue(F,"center",Y.center);if(Ae.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ae.setValue(F,"normalMatrix",Y.normalMatrix),Ae.setValue(F,"modelMatrix",Y.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let Ie=tt.uniformsGroups;for(let Tn=0,yn=Ie.length;Tn<yn;Tn++){let $e=Ie[Tn];Pe.update($e,fn),Pe.bind($e,fn)}}return fn}function Ms(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Ss(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}if(this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,Z,et){Ot.get(C.texture).__webglTexture=Z,Ot.get(C.depthTexture).__webglTexture=et;let tt=Ot.get(C);if(tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=et===void 0,!tt.__autoAllocateDepthBuffer){if(St.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(C,Z){let et=Ot.get(C);et.__webglFramebuffer=Z,et.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,et=0){z=C,j=Z,B=et;let tt=!0,Y=null,Tt=!1,Rt=!1;if(C){let qt=Ot.get(C);if(qt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(F.FRAMEBUFFER,null),tt=!1;else if(qt.__webglFramebuffer===void 0)Gt.setupRenderTarget(C);else if(qt.__hasExternalTextures)Gt.rebindTextures(C,Ot.get(C.texture).__webglTexture,Ot.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Yt=C.depthTexture;if(qt.__boundDepthTexture!==Yt){if(Yt!==null&&Ot.has(Yt)&&(C.width!==Yt.image.width||C.height!==Yt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(C)}}let ce=C.texture;if(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)Rt=!0;let pe=Ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget){if(Array.isArray(pe[Z]))Y=pe[Z][et];else Y=pe[Z];Tt=!0}else if(C.samples>0&&Gt.useMultisampledRTT(C)===!1)Y=Ot.get(C).__webglMultisampledFramebuffer;else if(Array.isArray(pe))Y=pe[et];else Y=pe;I.copy(C.viewport),W.copy(C.scissor),Q=C.scissorTest}else I.copy(T).multiplyScalar(J).floor(),W.copy(Vt).multiplyScalar(J).floor(),Q=Qt;if(yt.bindFramebuffer(F.FRAMEBUFFER,Y)&&tt)yt.drawBuffers(C,Y);if(yt.viewport(I),yt.scissor(W),yt.setScissorTest(Q),Tt){let qt=Ot.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Z,qt.__webglTexture,et)}else if(Rt){let qt=Ot.get(C.texture),ce=Z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.__webglTexture,et||0,ce)}ct=-1},this.readRenderTargetPixels=function(C,Z,et,tt,Y,Tt,Rt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=Ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0)Wt=Wt[Rt];if(Wt){yt.bindFramebuffer(F.FRAMEBUFFER,Wt);try{let qt=C.texture,{format:ce,type:pe}=qt;if(!Xt.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(Z>=0&&Z<=C.width-tt&&(et>=0&&et<=C.height-Y))F.readPixels(Z,et,tt,Y,de.convert(ce),de.convert(pe),Tt)}finally{let qt=z!==null?Ot.get(z).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,et,tt,Y,Tt,Rt){if(!(C&&C.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=Ot.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0)Wt=Wt[Rt];if(Wt){let qt=C.texture,{format:ce,type:pe}=qt;if(!Xt.textureFormatReadable(ce))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(pe))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=C.width-tt&&(et>=0&&et<=C.height-Y)){yt.bindFramebuffer(F.FRAMEBUFFER,Wt);let Yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(Z,et,tt,Y,de.convert(ce),de.convert(pe),0);let Se=z!==null?Ot.get(z).__webglFramebuffer:null;yt.bindFramebuffer(F.FRAMEBUFFER,Se);let fe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gh(F,fe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(Yt),F.deleteSync(fe),Tt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Z=null,et=0){if(C.isTexture!==!0)Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,C=arguments[1];let tt=Math.pow(2,-et),Y=Math.floor(C.image.width*tt),Tt=Math.floor(C.image.height*tt),Rt=Z!==null?Z.x:0,Wt=Z!==null?Z.y:0;Gt.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,et,0,0,Rt,Wt,Y,Tt),yt.unbindTexture()},this.copyTextureToTexture=function(C,Z,et=null,tt=null,Y=0){if(C.isTexture!==!0)Us("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,C=arguments[1],Z=arguments[2],Y=arguments[3]||0,et=null;let Tt,Rt,Wt,qt,ce,pe,Yt,Se,fe,Ee=C.isCompressedTexture?C.mipmaps[Y]:C.image;if(et!==null)Tt=et.max.x-et.min.x,Rt=et.max.y-et.min.y,Wt=et.isBox3?et.max.z-et.min.z:1,qt=et.min.x,ce=et.min.y,pe=et.isBox3?et.min.z:0;else Tt=Ee.width,Rt=Ee.height,Wt=Ee.depth||1,qt=0,ce=0,pe=0;if(tt!==null)Yt=tt.x,Se=tt.y,fe=tt.z;else Yt=0,Se=0,fe=0;let tn=de.convert(Z.format),Te=de.convert(Z.type),Jt;if(Z.isData3DTexture)Gt.setTexture3D(Z,0),Jt=F.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)Gt.setTexture2DArray(Z,0),Jt=F.TEXTURE_2D_ARRAY;else Gt.setTexture2D(Z,0),Jt=F.TEXTURE_2D;F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);let hn=F.getParameter(F.UNPACK_ROW_LENGTH),se=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=F.getParameter(F.UNPACK_SKIP_PIXELS),_n=F.getParameter(F.UNPACK_SKIP_ROWS),rn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,qt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ce),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pe);let pn=C.isDataArrayTexture||C.isData3DTexture,Ae=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let xn=Ot.get(C),jn=Ot.get(Z),Ie=Ot.get(xn.__renderTarget),Tn=Ot.get(jn.__renderTarget);yt.bindFramebuffer(F.READ_FRAMEBUFFER,Ie.__webglFramebuffer),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let yn=0;yn<Wt;yn++){if(pn)F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(C).__webglTexture,Y,pe+yn);if(C.isDepthTexture){if(Ae)F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(Z).__webglTexture,Y,fe+yn);F.blitFramebuffer(qt,ce,Tt,Rt,Yt,Se,Tt,Rt,F.DEPTH_BUFFER_BIT,F.NEAREST)}else if(Ae)F.copyTexSubImage3D(Jt,Y,Yt,Se,fe+yn,qt,ce,Tt,Rt);else F.copyTexSubImage2D(Jt,Y,Yt,Se,fe+yn,qt,ce,Tt,Rt)}yt.bindFramebuffer(F.READ_FRAMEBUFFER,null),yt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Ae)if(C.isDataTexture||C.isData3DTexture)F.texSubImage3D(Jt,Y,Yt,Se,fe,Tt,Rt,Wt,tn,Te,Ee.data);else if(Z.isCompressedArrayTexture)F.compressedTexSubImage3D(Jt,Y,Yt,Se,fe,Tt,Rt,Wt,tn,Ee.data);else F.texSubImage3D(Jt,Y,Yt,Se,fe,Tt,Rt,Wt,tn,Te,Ee);else if(C.isDataTexture)F.texSubImage2D(F.TEXTURE_2D,Y,Yt,Se,Tt,Rt,tn,Te,Ee.data);else if(C.isCompressedTexture)F.compressedTexSubImage2D(F.TEXTURE_2D,Y,Yt,Se,Ee.width,Ee.height,tn,Ee.data);else F.texSubImage2D(F.TEXTURE_2D,Y,Yt,Se,Tt,Rt,tn,Te,Ee);if(F.pixelStorei(F.UNPACK_ROW_LENGTH,hn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,se),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),F.pixelStorei(F.UNPACK_SKIP_ROWS,_n),F.pixelStorei(F.UNPACK_SKIP_IMAGES,rn),Y===0&&Z.generateMipmaps)F.generateMipmap(Jt);yt.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,et=null,tt=null,Y=0){if(C.isTexture!==!0)Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,tt=arguments[1]||null,C=arguments[2],Z=arguments[3],Y=arguments[4]||0;return Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,et,tt,Y)},this.initRenderTarget=function(C){if(Ot.get(C).__webglFramebuffer===void 0)Gt.setupRenderTarget(C)},this.initTexture=function(C){if(C.isCubeTexture)Gt.setTextureCube(C,0);else if(C.isData3DTexture)Gt.setTexture3D(C,0);else if(C.isDataArrayTexture||C.isCompressedArrayTexture)Gt.setTexture2DArray(C,0);else Gt.setTexture2D(C,0);yt.unbindTexture()},this.resetState=function(){j=0,B=0,z=null,yt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}}class Vr{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new _e(t),this.near=e,this.far=n}clone(){return new Vr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qs extends Xe{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)e.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)e.object.backgroundIntensity=this.backgroundIntensity;if(e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)e.object.environmentIntensity=this.environmentIntensity;return e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vc extends cn{constructor(t=null,e=1,n=1,i,s,r,o,a,c=1003,h=1003,p,l){super(null,r,o,a,c,h,i,s,p,l);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa extends Cn{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var is=new Re,Dl=new Re,Ar=[],Ll=new Dn,fm=new Re,Ps=new te,Is=new Oi;class Ys extends te{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fm)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new Dn;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),Ll.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(Ll)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new Oi;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),Is.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Is)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,is),Dl.multiplyMatrices(n,is),Ps.matrixWorld=Dl,Ps.raycast(t,Ar);for(let r=0,o=Ar.length;r<o;r++){let a=Ar[r];a.instanceId=s,a.object=this,e.push(a)}Ar.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new Wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3);e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new vc(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let o=this.geometry.morphTargetsRelative?1:1-r,a=i*t;s[a]=o,s.set(n,a+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class fs extends vi{static get type(){return"LineBasicMaterial"}constructor(t){super();this.isLineBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var zr=new O,Hr=new O,Ul=new Re,Ds=new us,Rr=new Oi,Na=new O,Nl=new O;class Xr extends Xe{constructor(t=new Qe,e=new fs){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)zr.fromBufferAttribute(e,i-1),Hr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zr.distanceTo(Hr);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=s,t.ray.intersectsSphere(Rr)===!1)return;Ul.copy(i).invert(),Ds.copy(t.ray).applyMatrix4(Ul);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=this.isLineSegments?2:1,h=n.index,l=n.attributes.position;if(h!==null){let m=Math.max(0,r.start),y=Math.min(h.count,r.start+r.count);for(let M=m,b=y-1;M<b;M+=c){let g=h.getX(M),_=h.getX(M+1),U=Cr(this,t,Ds,a,g,_);if(U)e.push(U)}if(this.isLineLoop){let M=h.getX(y-1),b=h.getX(m),g=Cr(this,t,Ds,a,M,b);if(g)e.push(g)}}else{let m=Math.max(0,r.start),y=Math.min(l.count,r.start+r.count);for(let M=m,b=y-1;M<b;M+=c){let g=Cr(this,t,Ds,a,M,M+1);if(g)e.push(g)}if(this.isLineLoop){let M=Cr(this,t,Ds,a,y-1,m);if(M)e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cr(t,e,n,i,s,r){let o=t.geometry.attributes.position;if(zr.fromBufferAttribute(o,s),Hr.fromBufferAttribute(o,r),n.distanceSqToSegment(zr,Hr,Na,Nl)>i)return;Na.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Na);if(c<e.near||c>e.far)return;return{distance:c,point:Nl.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}var Fl=new O,Ol=new O;class oo extends Xr{constructor(t,e){super(t,e);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Fl.fromBufferAttribute(e,i),Ol.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fl.distanceTo(Ol);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lo extends cn{constructor(t,e,n,i,s,r,o,a,c){super(t,e,n,i,s,r,o,a,c);this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let o=0,a=s-1,c;while(o<=a)if(i=Math.floor(o+(a-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===r)return i/(s-1);let h=n[i],l=n[i+1]-h,m=(r-h)/l;return(i+m)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),o=this.getPoint(s),a=e||(r.isVector2?new Mt:new O);return a.copy(o).sub(r).normalize(),a}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new O,i=[],s=[],r=[],o=new O,a=new Re;for(let m=0;m<=t;m++){let y=m/t;i[m]=this.getTangentAt(y,new O)}s[0]=new O,r[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),p=Math.abs(i[0].y),l=Math.abs(i[0].z);if(h<=c)c=h,n.set(1,0,0);if(p<=c)c=p,n.set(0,1,0);if(l<=c)n.set(0,0,1);o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),r[m]=r[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(qe(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(a.makeRotationAxis(o,y))}r[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(qe(s[0].dot(s[t]),-1,1));if(m/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0)m=-m;for(let y=1;y<=t;y++)s[y].applyMatrix4(a.makeRotationAxis(i[y],m*y)),r[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qr extends kn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=a}getPoint(t,e=new Mt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let o=this.aStartAngle+t*s,a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),l=a-this.aX,m=c-this.aY;a=l*h-m*p+this.aX,c=l*p+m*h+this.aY}return n.set(a,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mc extends qr{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function co(){let t=0,e=0,n=0,i=0;function s(r,o,a,c){t=r,e=a,n=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){s(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,p,l){let m=(o-r)/h-(a-r)/(h+p)+(a-o)/p,y=(a-o)/p-(c-o)/(p+l)+(c-a)/l;m*=p,y*=p,s(o,a,m,y)},calc:function(r){let o=r*r,a=o*r;return t+e*r+n*o+i*a}}}var Pr=new O,Fa=new co,Oa=new co,Ba=new co;class Sc extends kn{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,o=Math.floor(r),a=r-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s;else if(a===0&&o===s-1)o=s-2,a=1;let c,h;if(this.closed||o>0)c=i[(o-1)%s];else Pr.subVectors(i[0],i[1]).add(i[0]),c=Pr;let p=i[o%s],l=i[(o+1)%s];if(this.closed||o+2<s)h=i[(o+2)%s];else Pr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Pr;if(this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?0.5:0.25,y=Math.pow(c.distanceToSquared(p),m),M=Math.pow(p.distanceToSquared(l),m),b=Math.pow(l.distanceToSquared(h),m);if(M<0.0001)M=1;if(y<0.0001)y=M;if(b<0.0001)b=M;Fa.initNonuniformCatmullRom(c.x,p.x,l.x,h.x,y,M,b),Oa.initNonuniformCatmullRom(c.y,p.y,l.y,h.y,y,M,b),Ba.initNonuniformCatmullRom(c.z,p.z,l.z,h.z,y,M,b)}else if(this.curveType==="catmullrom")Fa.initCatmullRom(c.x,p.x,l.x,h.x,this.tension),Oa.initCatmullRom(c.y,p.y,l.y,h.y,this.tension),Ba.initCatmullRom(c.z,p.z,l.z,h.z,this.tension);return n.set(Fa.calc(a),Oa.calc(a),Ba.calc(a)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bl(t,e,n,i,s){let r=(i-e)*0.5,o=(s-n)*0.5,a=t*t,c=t*a;return(2*n-2*i+r+o)*c+(-3*n+3*i-2*r-o)*a+r*t+n}function pm(t,e){let n=1-t;return n*n*e}function mm(t,e){return 2*(1-t)*t*e}function gm(t,e){return t*t*e}function Bs(t,e,n,i){return pm(t,e)+mm(t,n)+gm(t,i)}function _m(t,e){let n=1-t;return n*n*n*e}function xm(t,e){let n=1-t;return 3*n*n*t*e}function ym(t,e){return 3*(1-t)*t*t*e}function vm(t,e){return t*t*t*e}function zs(t,e,n,i,s){return _m(t,e)+xm(t,n)+ym(t,i)+vm(t,s)}class ho extends kn{constructor(t=new Mt,e=new Mt,n=new Mt,i=new Mt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Mt){let n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(zs(t,i.x,s.x,r.x,o.x),zs(t,i.y,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ec extends kn{constructor(t=new O,e=new O,n=new O,i=new O){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(zs(t,i.x,s.x,r.x,o.x),zs(t,i.y,s.y,r.y,o.y),zs(t,i.z,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uo extends kn{constructor(t=new Mt,e=new Mt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bc extends kn{constructor(t=new O,e=new O){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fo extends kn{constructor(t=new Mt,e=new Mt,n=new Mt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Bs(t,i.x,s.x,r.x),Bs(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tc extends kn{constructor(t=new O,e=new O,n=new O){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Bs(t,i.x,s.x,r.x),Bs(t,i.y,s.y,r.y),Bs(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class po extends kn{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),o=s-r,a=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],p=i[r>i.length-3?i.length-1:r+2];return n.set(Bl(o,a.x,c.x,h.x,p.x),Bl(o,a.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Mt().fromArray(i))}return this}}var Va=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Sc,CubicBezierCurve:ho,CubicBezierCurve3:Ec,EllipseCurve:qr,LineCurve:uo,LineCurve3:bc,QuadraticBezierCurve:fo,QuadraticBezierCurve3:Tc,SplineCurve:po});class wc extends kn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,o=this.curves[s],a=o.getLength(),c=a===0?0:1-r/a;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,a=r.getPoints(o);for(let c=0;c<a.length;c++){let h=a[c];if(n&&n.equals(h))continue;e.push(h),n=h}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Va[i.type]().fromJSON(i))}return this}}class Xa extends wc{constructor(t){super();if(this.type="Path",this.currentPoint=new Mt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new uo(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new fo(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let o=new ho(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i),new Mt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new po(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,o,a){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,r,o,a),this}absellipse(t,e,n,i,s,r,o,a){let c=new qr(t,e,n,i,s,r,o,a);if(this.curves.length>0){let p=c.getPoint(0);if(!p.equals(this.currentPoint))this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Zs extends Qe{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],o=[],a=[],c=new O,h=new Mt;r.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let p=0,l=3;p<=e;p++,l+=3){let m=n+p/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[l]/t+1)/2,h.y=(r[l+1]/t+1)/2,a.push(h.x,h.y)}for(let p=1;p<=e;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zi extends Qe{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],p=[],l=[],m=[],y=0,M=[],b=n/2,g=0;if(_(),r===!1){if(t>0)U(!0);if(e>0)U(!1)}this.setIndex(h),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(m,2));function _(){let R=new O,D=new O,j=0,B=(e-t)/n;for(let z=0;z<=s;z++){let ct=[],P=z/s,I=P*(e-t)+t;for(let W=0;W<=i;W++){let Q=W/i,nt=Q*a+o,at=Math.sin(nt),mt=Math.cos(nt);D.x=I*at,D.y=-P*n+b,D.z=I*mt,p.push(D.x,D.y,D.z),R.set(at,B,mt).normalize(),l.push(R.x,R.y,R.z),m.push(Q,1-P),ct.push(y++)}M.push(ct)}for(let z=0;z<i;z++)for(let ct=0;ct<s;ct++){let P=M[ct][z],I=M[ct+1][z],W=M[ct+1][z+1],Q=M[ct][z+1];if(t>0||ct!==0)h.push(P,I,Q),j+=3;if(e>0||ct!==s-1)h.push(I,W,Q),j+=3}c.addGroup(g,j,0),g+=j}function U(R){let D=y,j=new Mt,B=new O,z=0,ct=R===!0?t:e,P=R===!0?1:-1;for(let W=1;W<=i;W++)p.push(0,b*P,0),l.push(0,P,0),m.push(0.5,0.5),y++;let I=y;for(let W=0;W<=i;W++){let nt=W/i*a+o,at=Math.cos(nt),mt=Math.sin(nt);B.x=ct*mt,B.y=b*P,B.z=ct*at,p.push(B.x,B.y,B.z),l.push(0,P,0),j.x=at*0.5+0.5,j.y=mt*0.5*P+0.5,m.push(j.x,j.y),y++}for(let W=0;W<i;W++){let Q=D+W,nt=I+W;if(R===!0)h.push(nt,nt+1,Q);else h.push(nt+1,nt,Q);z+=3}c.addGroup(g,z,R===!0?1:2),g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yr extends zi{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,s,r,o);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Yr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}var Ir=new O,Dr=new O,za=new O,Lr=new Rn;class mo extends Qe{constructor(t=null,e=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(os*e),r=t.getIndex(),o=t.getAttribute("position"),a=r?r.count:o.count,c=[0,0,0],h=["a","b","c"],p=[,,,],l={},m=[];for(let y=0;y<a;y+=3){if(r)c[0]=r.getX(y),c[1]=r.getX(y+1),c[2]=r.getX(y+2);else c[0]=y,c[1]=y+1,c[2]=y+2;let{a:M,b,c:g}=Lr;if(M.fromBufferAttribute(o,c[0]),b.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Lr.getNormal(za),p[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,p[1]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,p[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,p[0]===p[1]||p[1]===p[2]||p[2]===p[0])continue;for(let _=0;_<3;_++){let U=(_+1)%3,R=p[_],D=p[U],j=Lr[h[_]],B=Lr[h[U]],z=`${R}_${D}`,ct=`${D}_${R}`;if(ct in l&&l[ct]){if(za.dot(l[ct].normal)<=s)m.push(j.x,j.y,j.z),m.push(B.x,B.y,B.z);l[ct]=null}else if(!(z in l))l[z]={index0:c[_],index1:c[U],normal:za.clone()}}}for(let y in l)if(l[y]){let{index0:M,index1:b}=l[y];Ir.fromBufferAttribute(o,M),Dr.fromBufferAttribute(o,b),m.push(Ir.x,Ir.y,Ir.z),m.push(Dr.x,Dr.y,Dr.z)}this.setAttribute("position",new Ce(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Js extends Xa{constructor(t){super(t);this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Xa().fromJSON(i))}return this}}var Mm={triangulate:function(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=Ac(t,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h,p,l,m,y;if(i)r=wm(t,e,r,n);if(t.length>80*n){a=h=t[0],c=p=t[1];for(let M=n;M<s;M+=n){if(l=t[M],m=t[M+1],l<a)a=l;if(m<c)c=m;if(l>h)h=l;if(m>p)p=m}y=Math.max(h-a,p-c),y=y!==0?32767/y:0}return ks(r,o,n,a,c,y,0),o}};function Ac(t,e,n,i,s){let r,o;if(s===Om(t,e,n,i)>0)for(r=e;r<n;r+=i)o=zl(r,t[r],t[r+1],o);else for(r=n-i;r>=e;r-=i)o=zl(r,t[r],t[r+1],o);if(o&&Zr(o,o.next))Ws(o),o=o.next;return o}function Ni(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(Zr(n,n.next)||We(n.prev,n,n.next)===0)){if(Ws(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ks(t,e,n,i,s,r,o){if(!t)return;if(!o&&r)Im(t,i,s,r);let a=t,c,h;while(t.prev!==t.next){if(c=t.prev,h=t.next,r?Em(t,i,s,r):Sm(t)){e.push(c.i/n|0),e.push(t.i/n|0),e.push(h.i/n|0),Ws(t),t=h.next,a=h.next;continue}if(t=h,t===a){if(!o)ks(Ni(t),e,n,i,s,r,1);else if(o===1)t=bm(Ni(t),e,n),ks(t,e,n,i,s,r,2);else if(o===2)Tm(t,e,n,i,s,r);break}}}function Sm(t){let e=t.prev,n=t,i=t.next;if(We(e,n,i)>=0)return!1;let s=e.x,r=n.x,o=i.x,a=e.y,c=n.y,h=i.y,p=s<r?s<o?s:o:r<o?r:o,l=a<c?a<h?a:h:c<h?c:h,m=s>r?s>o?s:o:r>o?r:o,y=a>c?a>h?a:h:c>h?c:h,M=i.next;while(M!==e){if(M.x>=p&&M.x<=m&&M.y>=l&&M.y<=y&&as(s,a,r,c,o,h,M.x,M.y)&&We(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Em(t,e,n,i){let s=t.prev,r=t,o=t.next;if(We(s,r,o)>=0)return!1;let a=s.x,c=r.x,h=o.x,p=s.y,l=r.y,m=o.y,y=a<c?a<h?a:h:c<h?c:h,M=p<l?p<m?p:m:l<m?l:m,b=a>c?a>h?a:h:c>h?c:h,g=p>l?p>m?p:m:l>m?l:m,_=qa(y,M,e,n,i),U=qa(b,g,e,n,i),{prevZ:R,nextZ:D}=t;while(R&&R.z>=_&&D&&D.z<=U){if(R.x>=y&&R.x<=b&&R.y>=M&&R.y<=g&&R!==s&&R!==o&&as(a,p,c,l,h,m,R.x,R.y)&&We(R.prev,R,R.next)>=0)return!1;if(R=R.prevZ,D.x>=y&&D.x<=b&&D.y>=M&&D.y<=g&&D!==s&&D!==o&&as(a,p,c,l,h,m,D.x,D.y)&&We(D.prev,D,D.next)>=0)return!1;D=D.nextZ}while(R&&R.z>=_){if(R.x>=y&&R.x<=b&&R.y>=M&&R.y<=g&&R!==s&&R!==o&&as(a,p,c,l,h,m,R.x,R.y)&&We(R.prev,R,R.next)>=0)return!1;R=R.prevZ}while(D&&D.z<=U){if(D.x>=y&&D.x<=b&&D.y>=M&&D.y<=g&&D!==s&&D!==o&&as(a,p,c,l,h,m,D.x,D.y)&&We(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function bm(t,e,n){let i=t;do{let s=i.prev,r=i.next.next;if(!Zr(s,r)&&Rc(s,i,i.next,r)&&Gs(s,r)&&Gs(r,s))e.push(s.i/n|0),e.push(i.i/n|0),e.push(r.i/n|0),Ws(i),Ws(i.next),i=t=r;i=i.next}while(i!==t);return Ni(i)}function Tm(t,e,n,i,s,r){let o=t;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&Um(o,a)){let c=Cc(o,a);o=Ni(o,o.next),c=Ni(c,c.next),ks(o,e,n,i,s,r,0),ks(c,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function wm(t,e,n,i){let s=[],r,o,a,c,h;for(r=0,o=e.length;r<o;r++){if(a=e[r]*i,c=r<o-1?e[r+1]*i:t.length,h=Ac(t,a,c,i,!1),h===h.next)h.steiner=!0;s.push(Lm(h))}s.sort(Am);for(r=0;r<s.length;r++)n=Rm(s[r],n);return n}function Am(t,e){return t.x-e.x}function Rm(t,e){let n=Cm(t,e);if(!n)return e;let i=Cc(n,t);return Ni(i,i.next),Ni(n,n.next)}function Cm(t,e){let n=e,i=-1/0,s,{x:r,y:o}=t;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let m=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(m<=r&&m>i){if(i=m,s=n.x<n.next.x?n:n.next,m===r)return s}}n=n.next}while(n!==e);if(!s)return null;let a=s,c=s.x,h=s.y,p=1/0,l;n=s;do{if(r>=n.x&&n.x>=c&&r!==n.x&&as(o<h?r:i,o,c,h,o<h?i:r,o,n.x,n.y)){if(l=Math.abs(o-n.y)/(r-n.x),Gs(n,t)&&(l<p||l===p&&(n.x>s.x||n.x===s.x&&Pm(s,n))))s=n,p=l}n=n.next}while(n!==a);return s}function Pm(t,e){return We(t.prev,t,e.prev)<0&&We(e.next,t,t.next)<0}function Im(t,e,n,i){let s=t;do{if(s.z===0)s.z=qa(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,Dm(s)}function Dm(t){let e,n,i,s,r,o,a,c,h=1;do{n=t,t=null,r=null,o=0;while(n){o++,i=n,a=0;for(e=0;e<h;e++)if(a++,i=i.nextZ,!i)break;c=h;while(a>0||c>0&&i){if(a!==0&&(c===0||!i||n.z<=i.z))s=n,n=n.nextZ,a--;else s=i,i=i.nextZ,c--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}n=i}r.nextZ=null,h*=2}while(o>1);return t}function qa(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Lm(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function as(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function Um(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Nm(t,e)&&(Gs(t,e)&&Gs(e,t)&&Fm(t,e)&&(We(t.prev,t,e.prev)||We(t,e.prev,e))||Zr(t,e)&&We(t.prev,t,t.next)>0&&We(e.prev,e,e.next)>0)}function We(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Zr(t,e){return t.x===e.x&&t.y===e.y}function Rc(t,e,n,i){let s=Nr(We(t,e,n)),r=Nr(We(t,e,i)),o=Nr(We(n,i,t)),a=Nr(We(n,i,e));if(s!==r&&o!==a)return!0;if(s===0&&Ur(t,n,e))return!0;if(r===0&&Ur(t,i,e))return!0;if(o===0&&Ur(n,t,i))return!0;if(a===0&&Ur(n,e,i))return!0;return!1}function Ur(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Nr(t){return t>0?1:t<0?-1:0}function Nm(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Rc(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Gs(t,e){return We(t.prev,t,t.next)<0?We(t,e,t.next)>=0&&We(t,t.prev,e)>=0:We(t,e,t.prev)<0||We(t,t.next,e)<0}function Fm(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function Cc(t,e){let n=new Ya(t.i,t.x,t.y),i=new Ya(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function zl(t,e,n,i){let s=new Ya(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function Ws(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function Ya(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Om(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}class _i{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return _i.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Hl(t),kl(n,t);let r=t.length;e.forEach(Hl);for(let a=0;a<e.length;a++)i.push(r),r+=e[a].length,kl(n,e[a]);let o=Mm.triangulate(n,i);for(let a=0;a<o.length;a+=3)s.push(o.slice(a,a+3));return s}}function Hl(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function kl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Jr extends Qe{constructor(t=new Js([new Mt(0.5,0.5),new Mt(-0.5,0.5),new Mt(-0.5,-0.5),new Mt(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let o=0,a=t.length;o<a;o++){let c=t[o];r(c)}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(s,2)),this.computeVertexNormals();function r(o){let a=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,l=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:0.2,y=e.bevelSize!==void 0?e.bevelSize:m-0.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,b=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Bm,U,R=!1,D,j,B,z;if(g)U=g.getSpacedPoints(h),R=!0,l=!1,D=g.computeFrenetFrames(h,!1),j=new O,B=new O,z=new O;if(!l)b=0,m=0,y=0,M=0;let ct=o.extractPoints(c),{shape:P,holes:I}=ct;if(!_i.isClockWise(P)){P=P.reverse();for(let gt=0,At=I.length;gt<At;gt++){let F=I[gt];if(_i.isClockWise(F))I[gt]=F.reverse()}}let Q=_i.triangulateShape(P,I),nt=P;for(let gt=0,At=I.length;gt<At;gt++){let F=I[gt];P=P.concat(F)}function at(gt,At,F){if(!At)console.error("THREE.ExtrudeGeometry: vec does not exist");return gt.clone().addScaledVector(At,F)}let mt=P.length,k=Q.length;function J(gt,At,F){let Ht,St,Xt,yt=gt.x-At.x,re=gt.y-At.y,Ot=F.x-gt.x,Gt=F.y-gt.y,N=yt*yt+re*re,w=yt*Gt-re*Ot;if(Math.abs(w)>Number.EPSILON){let K=Math.sqrt(N),ft=Math.sqrt(Ot*Ot+Gt*Gt),_t=At.x-re/K,ut=At.y+yt/K,Kt=F.x-Gt/ft,Pt=F.y+Ot/ft,Ut=((Kt-_t)*Gt-(Pt-ut)*Ot)/(yt*Gt-re*Ot);Ht=_t+yt*Ut-gt.x,St=ut+re*Ut-gt.y;let le=Ht*Ht+St*St;if(le<=2)return new Mt(Ht,St);else Xt=Math.sqrt(le/2)}else{let K=!1;if(yt>Number.EPSILON){if(Ot>Number.EPSILON)K=!0}else if(yt<-Number.EPSILON){if(Ot<-Number.EPSILON)K=!0}else if(Math.sign(re)===Math.sign(Gt))K=!0;if(K)Ht=-re,St=yt,Xt=Math.sqrt(N);else Ht=yt,St=re,Xt=Math.sqrt(N/2)}return new Mt(Ht/Xt,St/Xt)}let H=[];for(let gt=0,At=nt.length,F=At-1,Ht=gt+1;gt<At;gt++,F++,Ht++){if(F===At)F=0;if(Ht===At)Ht=0;H[gt]=J(nt[gt],nt[F],nt[Ht])}let wt=[],T,Vt=H.concat();for(let gt=0,At=I.length;gt<At;gt++){let F=I[gt];T=[];for(let Ht=0,St=F.length,Xt=St-1,yt=Ht+1;Ht<St;Ht++,Xt++,yt++){if(Xt===St)Xt=0;if(yt===St)yt=0;T[Ht]=J(F[Ht],F[Xt],F[yt])}wt.push(T),Vt=Vt.concat(T)}for(let gt=0;gt<b;gt++){let At=gt/b,F=m*Math.cos(At*Math.PI/2),Ht=y*Math.sin(At*Math.PI/2)+M;for(let St=0,Xt=nt.length;St<Xt;St++){let yt=at(nt[St],H[St],Ht);kt(yt.x,yt.y,-F)}for(let St=0,Xt=I.length;St<Xt;St++){let yt=I[St];T=wt[St];for(let re=0,Ot=yt.length;re<Ot;re++){let Gt=at(yt[re],T[re],Ht);kt(Gt.x,Gt.y,-F)}}}let Qt=y+M;for(let gt=0;gt<mt;gt++){let At=l?at(P[gt],Vt[gt],Qt):P[gt];if(!R)kt(At.x,At.y,0);else B.copy(D.normals[0]).multiplyScalar(At.x),j.copy(D.binormals[0]).multiplyScalar(At.y),z.copy(U[0]).add(B).add(j),kt(z.x,z.y,z.z)}for(let gt=1;gt<=h;gt++)for(let At=0;At<mt;At++){let F=l?at(P[At],Vt[At],Qt):P[At];if(!R)kt(F.x,F.y,p/h*gt);else B.copy(D.normals[gt]).multiplyScalar(F.x),j.copy(D.binormals[gt]).multiplyScalar(F.y),z.copy(U[gt]).add(B).add(j),kt(z.x,z.y,z.z)}for(let gt=b-1;gt>=0;gt--){let At=gt/b,F=m*Math.cos(At*Math.PI/2),Ht=y*Math.sin(At*Math.PI/2)+M;for(let St=0,Xt=nt.length;St<Xt;St++){let yt=at(nt[St],H[St],Ht);kt(yt.x,yt.y,p+F)}for(let St=0,Xt=I.length;St<Xt;St++){let yt=I[St];T=wt[St];for(let re=0,Ot=yt.length;re<Ot;re++){let Gt=at(yt[re],T[re],Ht);if(!R)kt(Gt.x,Gt.y,p+F);else kt(Gt.x,Gt.y+U[h-1].y,U[h-1].x+F)}}}dt(),bt();function dt(){let gt=i.length/3;if(l){let At=0,F=mt*At;for(let Ht=0;Ht<k;Ht++){let St=Q[Ht];Ct(St[2]+F,St[1]+F,St[0]+F)}At=h+b*2,F=mt*At;for(let Ht=0;Ht<k;Ht++){let St=Q[Ht];Ct(St[0]+F,St[1]+F,St[2]+F)}}else{for(let At=0;At<k;At++){let F=Q[At];Ct(F[2],F[1],F[0])}for(let At=0;At<k;At++){let F=Q[At];Ct(F[0]+mt*h,F[1]+mt*h,F[2]+mt*h)}}n.addGroup(gt,i.length/3-gt,0)}function bt(){let gt=i.length/3,At=0;Zt(nt,At),At+=nt.length;for(let F=0,Ht=I.length;F<Ht;F++){let St=I[F];Zt(St,At),At+=St.length}n.addGroup(gt,i.length/3-gt,1)}function Zt(gt,At){let F=gt.length;while(--F>=0){let Ht=F,St=F-1;if(St<0)St=gt.length-1;for(let Xt=0,yt=h+b*2;Xt<yt;Xt++){let re=mt*Xt,Ot=mt*(Xt+1),Gt=At+Ht+re,N=At+St+re,w=At+St+Ot,K=At+Ht+Ot;ne(Gt,N,w,K)}}}function kt(gt,At,F){a.push(gt),a.push(At),a.push(F)}function Ct(gt,At,F){xe(gt),xe(At),xe(F);let Ht=i.length/3,St=_.generateTopUV(n,i,Ht-3,Ht-2,Ht-1);ie(St[0]),ie(St[1]),ie(St[2])}function ne(gt,At,F,Ht){xe(gt),xe(At),xe(Ht),xe(At),xe(F),xe(Ht);let St=i.length/3,Xt=_.generateSideWallUV(n,i,St-6,St-3,St-2,St-1);ie(Xt[0]),ie(Xt[1]),ie(Xt[3]),ie(Xt[1]),ie(Xt[2]),ie(Xt[3])}function xe(gt){i.push(a[gt*3+0]),i.push(a[gt*3+1]),i.push(a[gt*3+2])}function ie(gt){s.push(gt.x),s.push(gt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zm(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new Va[i.type]().fromJSON(i);return new Jr(n,t.options)}}var Bm={generateTopUV:function(t,e,n,i,s){let r=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],h=e[s*3],p=e[s*3+1];return[new Mt(r,o),new Mt(a,c),new Mt(h,p)]},generateSideWallUV:function(t,e,n,i,s,r){let o=e[n*3],a=e[n*3+1],c=e[n*3+2],h=e[i*3],p=e[i*3+1],l=e[i*3+2],m=e[s*3],y=e[s*3+1],M=e[s*3+2],b=e[r*3],g=e[r*3+1],_=e[r*3+2];if(Math.abs(a-p)<Math.abs(o-h))return[new Mt(o,1-c),new Mt(h,1-l),new Mt(m,1-M),new Mt(b,1-_)];else return[new Mt(a,1-c),new Mt(p,1-l),new Mt(y,1-M),new Mt(g,1-_)]}};function zm(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class $r extends Qe{constructor(t=new Js([new Mt(0,0.5),new Mt(-0.5,-0.5),new Mt(0.5,-0.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],r=[],o=0,a=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,a,h),o+=a,a=0;this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(r,2));function c(h){let p=i.length/3,l=h.extractPoints(e),{shape:m,holes:y}=l;if(_i.isClockWise(m)===!1)m=m.reverse();for(let b=0,g=y.length;b<g;b++){let _=y[b];if(_i.isClockWise(_)===!0)y[b]=_.reverse()}let M=_i.triangulateShape(m,y);for(let b=0,g=y.length;b<g;b++){let _=y[b];m=m.concat(_)}for(let b=0,g=m.length;b<g;b++){let _=m[b];i.push(_.x,_.y,0),s.push(0,0,1),r.push(_.x,_.y)}for(let b=0,g=M.length;b<g;b++){let _=M[b],U=_[0]+p,R=_[1]+p,D=_[2]+p;n.push(U,R,D),a+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Hm(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let r=e[t.shapes[i]];n.push(r)}return new $r(n,t.curveSegments)}}function Hm(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}class ps extends Qe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let a=Math.min(r+o,Math.PI),c=0,h=[],p=new O,l=new O,m=[],y=[],M=[],b=[];for(let g=0;g<=n;g++){let _=[],U=g/n,R=0;if(g===0&&r===0)R=0.5/e;else if(g===n&&a===Math.PI)R=-0.5/e;for(let D=0;D<=e;D++){let j=D/e;p.x=-t*Math.cos(i+j*s)*Math.sin(r+U*o),p.y=t*Math.cos(r+U*o),p.z=t*Math.sin(i+j*s)*Math.sin(r+U*o),y.push(p.x,p.y,p.z),l.copy(p).normalize(),M.push(l.x,l.y,l.z),b.push(j+R,1-U),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let U=h[g][_+1],R=h[g][_],D=h[g+1][_],j=h[g+1][_+1];if(g!==0||r>0)m.push(U,R,j);if(g!==n-1||a<Math.PI)m.push(R,D,j)}this.setIndex(m),this.setAttribute("position",new Ce(y,3)),this.setAttribute("normal",new Ce(M,3)),this.setAttribute("uv",new Ce(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ai extends Qe{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let r=[],o=[],a=[],c=[],h=new O,p=new O,l=new O;for(let m=0;m<=n;m++)for(let y=0;y<=i;y++){let M=y/i*s,b=m/n*Math.PI*2;p.x=(t+e*Math.cos(b))*Math.cos(M),p.y=(t+e*Math.cos(b))*Math.sin(M),p.z=e*Math.sin(b),o.push(p.x,p.y,p.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),l.subVectors(p,h).normalize(),a.push(l.x,l.y,l.z),c.push(y/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let y=1;y<=i;y++){let M=(i+1)*m+y-1,b=(i+1)*(m-1)+y-1,g=(i+1)*(m-1)+y,_=(i+1)*m+y;r.push(M,b,_),r.push(b,g,_)}this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class go extends vi{static get type(){return"ShadowMaterial"}constructor(t){super();this.isShadowMaterial=!0,this.color=new _e(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Zn extends vi{static get type(){return"MeshStandardMaterial"}constructor(t){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _o extends Zn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){if(this._anisotropy>0!==t>0)this.version++;this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){if(this._clearcoat>0!==t>0)this.version++;this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){if(this._iridescence>0!==t>0)this.version++;this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){if(this._dispersion>0!==t>0)this.version++;this._dispersion=t}get sheen(){return this._sheen}set sheen(t){if(this._sheen>0!==t>0)this.version++;this._sheen=t}get transmission(){return this._transmission}set transmission(t){if(this._transmission>0!==t>0)this.version++;this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Fr(t,e,n){if(!t||!n&&t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function km(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}class $s{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let o=e[1];if(t<o)n=2,s=o;for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let o=n+r>>>1;if(t<e[o])r=o;else n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Pc extends $s{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,o=2*e-n;break;case 2402:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,a=2*n-e;break;case 2402:r=1,a=n+i[1]-i[0];break;default:r=t-1,a=e}let c=(n-e)*0.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,h=this._offsetPrev,p=this._offsetNext,l=this._weightPrev,m=this._weightNext,y=(n-e)/(i-e),M=y*y,b=M*y,g=-l*b+2*l*M-l*y,_=(1+l)*b+(-1.5-2*l)*M+(-0.5+l)*y+1,U=(-1-m)*b+(1.5+m)*M+0.5*y,R=m*b-m*M;for(let D=0;D!==o;++D)s[D]=g*r[h+D]+_*r[c+D]+U*r[a+D]+R*r[p+D];return s}}class Ic extends $s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,h=(n-e)/(i-e),p=1-h;for(let l=0;l!==o;++l)s[l]=r[c+l]*p+r[a+l]*h;return s}}class Dc extends $s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Jn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fr(e,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fr(t.times,Array),values:Fr(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let o=0;o!==s;o++){let a=n[o];if(typeof a==="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),t=!1;break}r=a}if(i!==void 0){if(km(i))for(let o=0,a=i.length;o!==a;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let o=1;o<s;++o){let a=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(!i){let p=o*n,l=p-n,m=p+n;for(let y=0;y!==n;++y){let M=e[p+y];if(M!==e[l+y]||M!==e[m+y]){a=!0;break}}}else a=!0;if(a){if(o!==r){t[r]=t[o];let p=o*n,l=r*n;for(let m=0;m!==n;++m)e[l+m]=e[p+m]}++r}}if(s>0){t[r]=t[s];for(let o=s*n,a=r*n,c=0;c!==n;++c)e[a+c]=e[o+c];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=2301;class ms extends Jn{constructor(t,e,n){super(t,e,n)}}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=2300;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Lc extends Jn{}Lc.prototype.ValueTypeName="color";class Uc extends Jn{}Uc.prototype.ValueTypeName="number";class Nc extends $s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)In.slerpFlat(s,0,r,c-o,r,c,a);return s}}class xo extends Jn{InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}}xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Jn{constructor(t,e,n){super(t,e,n)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=2300;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fc extends Jn{}Fc.prototype.ValueTypeName="vector";class Oc{constructor(t,e,n){let i=this,s=!1,r=0,o=0,a=void 0,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){if(o++,s===!1){if(i.onStart!==void 0)i.onStart(h,r,o)}s=!0},this.itemEnd=function(h){if(r++,i.onProgress!==void 0)i.onProgress(h,r,o);if(r===o){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(h){if(i.onError!==void 0)i.onError(h)},this.resolveURL=function(h){if(a)return a(h);return h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);if(p!==-1)c.splice(p,2);return this},this.getHandler=function(h){for(let p=0,l=c.length;p<l;p+=2){let m=c[p],y=c[p+1];if(m.global)m.lastIndex=0;if(m.test(h))return y}return null}}}var Gm=new Oc;class Bc{constructor(t){this.manager=t!==void 0?t:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ks extends Xe{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);if(e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0)e.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)e.object.distance=this.distance;if(this.angle!==void 0)e.object.angle=this.angle;if(this.decay!==void 0)e.object.decay=this.decay;if(this.penumbra!==void 0)e.object.penumbra=this.penumbra;if(this.shadow!==void 0)e.object.shadow=this.shadow.toJSON();if(this.target!==void 0)e.object.target=this.target.uuid;return e}}class yo extends Ks{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}var Ha=new Re,Gl=new O,Wl=new O;class Kr{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gl),Wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wl),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};if(this.intensity!==1)t.intensity=this.intensity;if(this.bias!==0)t.bias=this.bias;if(this.normalBias!==0)t.normalBias=this.normalBias;if(this.radius!==1)t.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)t.mapSize=this.mapSize.toArray();return t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zc extends Kr{constructor(){super(new ln(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=cs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;if(n!==e.fov||i!==e.aspect||s!==e.far)e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix();super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class vo extends Ks{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new zc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}var Vl=new Re,Ls=new O,ka=new O;class Hc extends Kr{constructor(){super(new ln(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;if(s!==n.far)n.far=s,n.updateProjectionMatrix();Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),ka.copy(n.position),ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ka),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl)}}class js extends Ks{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kc extends Kr{constructor(){super(new Xs(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Mo extends Ks{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new kc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}var So="\\[\\]\\.:\\/",Wm=new RegExp("["+So+"]","g"),Eo="[^"+So+"]",Vm="[^"+So.replace("\\.","")+"]",Xm=/((?:WC+[\/:])*)/.source.replace("WC",Eo),qm=/(WCOD+)?/.source.replace("WCOD",Vm),Ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eo),Zm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eo),Jm=new RegExp("^"+Xm+qm+Ym+Zm+"$"),$m=["material","materials","bones","map"];class Gc{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Le{constructor(t,e,n){this.path=e,this.parsedPath=n||Le.parseTrackName(e),this.node=Le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new Le(t,e,n);else return new Le.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wm,"")}static parseTrackName(t){let e=Jm.exec(t);if(e===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if($m.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===e||o.uuid===e)return o;let a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=Le.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[i];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;if(this.targetObject=t,t.needsUpdate!==void 0)o=this.Versioning.NeedsUpdate;else if(t.matrixWorldNeedsUpdate!==void 0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))a=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Le.Composite=Gc;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _0=new Float32Array(1);var Xl=new Re;class bo{constructor(t,e,n=0,i=1/0){this.ray=new us(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(t,e=!0,n=[]){return Za(t,this,n,e),n.sort(ql),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Za(t[i],this,n,e);return n.sort(ql),n}}function ql(t,e){return t.distance-e.distance}function Za(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let o=0,a=r.length;o<a;o++)Za(r[o],e,n,!0)}}class jr{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){if(this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(t,n),this.phi=Math.acos(qe(e/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class To extends yi{constructor(t,e=null){super();this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="170";var Wc={type:"change"},Ao={type:"start"},Xc={type:"end"},Qr=new us,Vc=new En,jm=Math.cos(70*$l.DEG2RAD),Je=new O,mn=2*Math.PI,Ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wo=0.000001;class ta extends To{constructor(t,e=null){super(t,e);if(this.state=Ne.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new In,this._lastTargetPosition=new O,this._quat=new In().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jr,this._sphericalDelta=new jr,this._scale=1,this._panOffset=new O,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new O,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t0.bind(this),this._onPointerDown=Qm.bind(this),this._onPointerUp=e0.bind(this),this._onContextMenu=l0.bind(this),this._onMouseWheel=s0.bind(this),this._onKeyDown=r0.bind(this),this._onTouchStart=a0.bind(this),this._onTouchMove=o0.bind(this),this._onMouseDown=n0.bind(this),this._onMouseMove=i0.bind(this),this._interceptControlDown=c0.bind(this),this._interceptControlUp=h0.bind(this),this.domElement!==null)this.connect();this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wc),this.update(),this.state=Ne.NONE}update(t=null){let e=this.object.position;if(Je.copy(e).sub(this.target),Je.applyQuaternion(this._quat),this._spherical.setFromVector3(Je),this.autoRotate&&this.state===Ne.NONE)this._rotateLeft(this._getAutoRotationAngle(t));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;if(isFinite(n)&&isFinite(i)){if(n<-Math.PI)n+=mn;else if(n>Math.PI)n-=mn;if(i<-Math.PI)i+=mn;else if(i>Math.PI)i-=mn;if(n<=i)this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Je.setFromSpherical(this._spherical),Je.applyQuaternion(this._quatInverse),e.copy(this.target).add(Je),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=Je.length();r=this._clampDistance(o*this._scale);let a=o-r;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),s=!!a}else if(this.object.isOrthographicCamera){let o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=a!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(r!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position);else if(Qr.origin.copy(this.object.position),Qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qr.direction))<jm)this.object.lookAt(this.target);else Vc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qr.intersectPlane(Vc,this.target)}else if(this.object.isOrthographicCamera){let r=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom)this.object.updateProjectionMatrix(),s=!0}if(this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>wo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wo||this._lastTargetPosition.distanceToSquared(this.target)>wo)return this.dispatchEvent(Wc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(t){if(t!==null)return mn/60*this.autoRotateSpeed*t;else return mn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*0.01);return Math.pow(0.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Je.setFromMatrixColumn(e,0),Je.multiplyScalar(-t),this._panOffset.add(Je)}_panUp(t,e){if(this.screenSpacePanning===!0)Je.setFromMatrixColumn(e,1);else Je.setFromMatrixColumn(e,0),Je.crossVectors(this.object.up,Je);Je.multiplyScalar(t),this._panOffset.add(Je)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Je.copy(i).sub(this.target);let s=Je.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,{width:r,height:o}=n;this._mouse.x=i/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){if(this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){if(this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0)this._dollyIn(this._getZoomScale(t.deltaY));else if(t.deltaY>0)this._dollyOut(this._getZoomScale(t.deltaY));this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:if(t.ctrlKey||t.metaKey||t.shiftKey)this._rotateUp(mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,this.keyPanSpeed);e=!0;break;case this.keys.BOTTOM:if(t.ctrlKey||t.metaKey||t.shiftKey)this._rotateUp(-mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(0,-this.keyPanSpeed);e=!0;break;case this.keys.LEFT:if(t.ctrlKey||t.metaKey||t.shiftKey)this._rotateLeft(mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(this.keyPanSpeed,0);e=!0;break;case this.keys.RIGHT:if(t.ctrlKey||t.metaKey||t.shiftKey)this._rotateLeft(-mn*this.rotateSpeed/this.domElement.clientHeight);else this._pan(-this.keyPanSpeed,0);e=!0;break}if(e)t.preventDefault(),this.update()}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enablePan)this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enableRotate)this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=0.5*(t.pageX+n.x),s=0.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*0.5,o=(t.pageY+e.y)*0.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enablePan)this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enableRotate)this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];if(e===void 0)e=new Mt,this._pointerPositions[t.pointerId]=e;e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}if(t.ctrlKey&&!this._controlActive)n.deltaY*=10;return n}}function Qm(t){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(t))return;if(this._addPointer(t),t.pointerType==="touch")this._onTouchStart(t);else this._onMouseDown(t)}function t0(t){if(this.enabled===!1)return;if(t.pointerType==="touch")this._onTouchMove(t);else this._onMouseMove(t)}function e0(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xc),this.state=Ne.NONE;break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function n0(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Ne.DOLLY;break;case Hn.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ne.ROTATE}break;case Hn.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Ne.PAN}break;default:this.state=Ne.NONE}if(this.state!==Ne.NONE)this.dispatchEvent(Ao)}function i0(t){switch(this.state){case Ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function s0(t){if(this.enabled===!1||this.enableZoom===!1||this.state!==Ne.NONE)return;t.preventDefault(),this.dispatchEvent(Ao),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Xc)}function r0(t){if(this.enabled===!1||this.enablePan===!1)return;this._handleKeyDown(t)}function a0(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case qn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Ne.TOUCH_ROTATE;break;case qn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Ne.TOUCH_PAN;break;default:this.state=Ne.NONE}break;case 2:switch(this.touches.TWO){case qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Ne.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Ne.TOUCH_DOLLY_ROTATE;break;default:this.state=Ne.NONE}break;default:this.state=Ne.NONE}if(this.state!==Ne.NONE)this.dispatchEvent(Ao)}function o0(t){switch(this._trackPointer(t),this.state){case Ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Ne.NONE}}function l0(t){if(this.enabled===!1)return;t.preventDefault()}function c0(t){if(t.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function h0(t){if(t.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var Qs=new O;function Ln(t,e,n,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Qs.copy(e),Qs[i]=0,Qs.normalize();let h=0.5*o/(o+a),p=1-Qs.angleTo(t)/c;if(Math.sign(Qs[n])===1)return p*h;else return a/(o+a)+h+h*(1-p)}class Ro extends sn{constructor(t=1,e=1,n=1,i=2,s=0.1){i=i*2+1,s=Math.min(t/2,e/2,n/2,s);super(1,1,1,i,i,i);if(i===1)return;let r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;let o=new O,a=new O,c=new O(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,p=this.attributes.normal.array,l=this.attributes.uv.array,m=h.length/6,y=new O,M=0.5/i;for(let b=0,g=0;b<h.length;b+=3,g+=2)switch(o.fromArray(h,b),a.copy(o),a.x-=Math.sign(a.x)*M,a.y-=Math.sign(a.y)*M,a.z-=Math.sign(a.z)*M,a.normalize(),h[b+0]=c.x*Math.sign(o.x)+a.x*s,h[b+1]=c.y*Math.sign(o.y)+a.y*s,h[b+2]=c.z*Math.sign(o.z)+a.z*s,p[b+0]=a.x,p[b+1]=a.y,p[b+2]=a.z,Math.floor(b/m)){case 0:y.set(1,0,0),l[g+0]=Ln(y,a,"z","y",s,n),l[g+1]=1-Ln(y,a,"y","z",s,e);break;case 1:y.set(-1,0,0),l[g+0]=1-Ln(y,a,"z","y",s,n),l[g+1]=1-Ln(y,a,"y","z",s,e);break;case 2:y.set(0,1,0),l[g+0]=1-Ln(y,a,"x","z",s,t),l[g+1]=Ln(y,a,"z","x",s,n);break;case 3:y.set(0,-1,0),l[g+0]=1-Ln(y,a,"x","z",s,t),l[g+1]=1-Ln(y,a,"z","x",s,n);break;case 4:y.set(0,0,1),l[g+0]=1-Ln(y,a,"x","y",s,t),l[g+1]=1-Ln(y,a,"y","x",s,e);break;case 5:y.set(0,0,-1),l[g+0]=Ln(y,a,"x","y",s,t),l[g+1]=1-Ln(y,a,"y","x",s,e);break}}}class Co extends qs{constructor(){super();let t=new sn;t.deleteAttribute("uv");let e=new Zn({side:Zl}),n=new Zn,i=new js(16777215,900,28,2);i.position.set(0.418,16.199,0.3),this.add(i);let s=new te(t,e);s.position.set(-0.757,13.219,0.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new te(t,n);r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-0.195,0),r.scale.set(2.328,7.905,4.651),this.add(r);let o=new te(t,n);o.position.set(-5.607,-0.754,-0.758),o.rotation.set(0,0.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let a=new te(t,n);a.position.set(6.167,0.857,7.803),a.rotation.set(0,0.561,0),a.scale.set(3.927,6.285,3.687),this.add(a);let c=new te(t,n);c.position.set(-2.017,0.018,6.124),c.rotation.set(0,0.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new te(t,n);h.position.set(2.291,-0.756,-2.621),h.rotation.set(0,-0.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let p=new te(t,n);p.position.set(-2.193,-0.369,-5.547),p.rotation.set(0,0.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let l=new te(t,_s(50));l.position.set(-16.116,14.37,8.208),l.scale.set(0.1,2.428,2.739),this.add(l);let m=new te(t,_s(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(0.1,2.425,2.751),this.add(m);let y=new te(t,_s(17));y.position.set(14.904,12.198,-1.832),y.scale.set(0.15,4.265,6.331),this.add(y);let M=new te(t,_s(43));M.position.set(-0.462,8.89,14.52),M.scale.set(4.38,5.441,0.088),this.add(M);let b=new te(t,_s(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,0.1),this.add(b);let g=new te(t,_s(100));g.position.set(0,20,0),g.scale.set(1,0.1,1),this.add(g)}dispose(){let t=new Set;this.traverse((e)=>{if(e.isMesh)t.add(e.geometry),t.add(e.material)});for(let e of t)e.dispose()}}function _s(t){let e=new Bi;return e.color.setScalar(t),e}var $n=2.5,qc=1,Yc=0.9,xs=0.13,ue=new O(u(189),0,d(183));function bn(t,e,n,i=1){let s=document.createElement("canvas");s.width=t,s.height=e,n(s.getContext("2d"));let r=new lo(s);if(r.colorSpace=$a,r.anisotropy=4,i!==1)r.wrapS=r.wrapT=Vs,r.repeat.set(i,i);return r}var Io=(t,e,n,i,s,r=9000)=>{t.fillStyle=i,t.fillRect(0,0,e,n);for(let o=0;o<r;o++){let a=(Math.random()-0.5)*s;t.fillStyle=a>0?`rgba(255,255,255,${a})`:`rgba(0,0,0,${-a})`,t.fillRect(Math.random()*e,Math.random()*n,2,2)}},Zc=()=>bn(512,512,(t)=>{for(let e=0;e<2;e++)for(let n=0;n<2;n++){let i=228+Math.floor(Math.random()*8);t.fillStyle=`rgb(${i+8},${i+3},${i-8})`,t.fillRect(e*256,n*256,256,256);for(let s=0;s<2500;s++)t.fillStyle=`rgba(${Math.random()>0.5?"255,255,255":"150,130,100"},.06)`,t.fillRect(e*256+Math.random()*256,n*256+Math.random()*256,3,3)}t.fillStyle="#cfc6b6";for(let e=0;e<=2;e++)t.fillRect(e*256-2,0,4,512),t.fillRect(0,e*256-2,512,4)}),Hi=(t,e=0.14)=>bn(256,256,(n)=>Io(n,256,256,t,e,6000),3),Jc=(t,e)=>bn(256,256,(n)=>{Io(n,256,256,t,0.2,14000),n.strokeStyle=e,n.lineWidth=10,n.strokeRect(12,12,232,232)}),u0=()=>bn(256,512,(t)=>{Io(t,256,512,"#2b3550",0.25,12000),t.strokeStyle="#c9a86a",t.lineWidth=6,t.strokeRect(14,14,228,484),t.fillStyle="#c9a86a88";for(let e=60;e<480;e+=70)t.beginPath(),t.ellipse(128,e,50,22,0,0,7),t.fill()}),$c=()=>bn(256,256,(t)=>{t.fillStyle="#f7f7f5",t.fillRect(0,0,256,256),t.fillStyle="#d9d9d6";for(let e=0;e<=4;e++)t.fillRect(e*64-1,0,2,256),t.fillRect(0,e*128-1,256,2)}),d0=()=>bn(256,256,(t)=>{t.fillStyle="#e6e2df",t.fillRect(0,0,256,256);let e=22;for(let n=0;n<300;n+=e*1.5)for(let i=0;i<300;i+=e*1.732){let s=Math.round(n/(e*1.5))%2*e*0.866;t.beginPath();for(let o=0;o<6;o++){let a=Math.PI/3*o+Math.PI/6;t.lineTo(i+s+e*Math.cos(a),n+e*Math.sin(a))}t.closePath();let r=205+Math.floor(Math.random()*40);t.fillStyle=`rgb(${r},${r-3},${r-2})`,t.fill(),t.strokeStyle="#f5f3f0",t.lineWidth=2,t.stroke()}}),f0=()=>bn(256,360,(t)=>{t.fillStyle="#121216",t.fillRect(0,0,256,360),t.fillStyle="#9b2b33",t.beginPath(),t.arc(128,105,78,0,7),t.fill(),t.fillStyle="#121216",t.beginPath(),t.arc(128,105,58,0,7),t.fill(),t.fillStyle="#d8d4cf",t.beginPath(),t.ellipse(128,110,28,36,0,0,7),t.fill(),t.fillStyle="#2d4f6d",t.fillRect(70,150,116,200),t.fillStyle="#e8e4dc";for(let e=170;e<330;e+=18)t.fillRect(98,e,60,6);t.fillStyle="#3c8b3a",t.fillRect(122,250,12,12)}),p0=()=>bn(256,340,(t)=>{let e=["#d94b3d","#f2b632","#3a7bd5","#43a047","#8e44ad","#f06292"];t.fillStyle="#e8d8b8",t.fillRect(0,0,256,340);for(let n=0;n<60;n++)t.fillStyle=e[n%6],t.beginPath(),t.arc(Math.random()*256,Math.random()*340,6+Math.random()*20,0,7),t.fill();t.fillStyle="#c69c6d",t.beginPath(),t.ellipse(128,200,50,100,0,0,7),t.fill(),t.fillStyle="#8a5a3a",t.beginPath(),t.arc(128,95,55,0,7),t.fill()}),m0=()=>bn(200,260,(t)=>{t.fillStyle="#f5d33b",t.fillRect(0,0,200,260);let e=["#e84a5f","#2a9d8f","#f4a261","#6c63ff","#ffffff"];for(let n=0;n<5;n++)t.fillStyle=e[n],t.beginPath(),t.moveTo(100,90),t.arc(100,90,70,Math.PI+n*0.63,Math.PI+(n+1)*0.63),t.fill();t.fillStyle="#f472b6",t.beginPath(),t.arc(140,140,28,0,7),t.fill(),t.fillStyle="#1f2937",t.fillRect(20,200,160,40)}),g0=()=>bn(256,160,(t)=>{t.fillStyle="#fbfbfb",t.fillRect(0,0,256,160),t.font="bold 26px sans-serif",t.fillStyle="#222",t.fillText("Bim",120,34),t.fillStyle="#d23",t.fillText("Flow",168,34),t.strokeStyle="#333",t.lineWidth=2;for(let e=50;e<150;e+=14)t.beginPath(),t.moveTo(16,e),t.lineTo(66+Math.random()*50,e),t.stroke();t.strokeStyle="#d23",t.beginPath(),t.arc(180,80,18,0,7),t.stroke()}),Po=(t)=>bn(64,32,(e)=>{let n=e.createLinearGradient(0,0,64,32);n.addColorStop(0,t),n.addColorStop(1,"#05060a"),e.fillStyle=n,e.fillRect(0,0,64,32)});function R0(t){let e=new ao({antialias:!0,alpha:!0});e.setPixelRatio(Math.min(devicePixelRatio,1.75)),e.shadowMap.enabled=!0,e.shadowMap.type=Ja,e.shadowMap.autoUpdate=!1,e.outputColorSpace=$a,e.localClippingEnabled=!0,e.toneMapping=Jl,e.toneMappingExposure=1.05,t.appendChild(e.domElement);let n=new qs,i=new Hs(e);n.environment=i.fromScene(new Co,0.04).texture,n.environmentIntensity=0.55;let s=new ln(32,1,0.1,2500),r=new Xs(-5,5,5,-5,0.1,100),o=s,a=new ta(s,e.domElement);a.enableDamping=!0,a.maxPolarAngle=1.35,a.minDistance=2.5,a.maxDistance=30,a.screenSpacePanning=!0;let c=new ta(r,e.domElement);c.enableRotate=!1,c.enableDamping=!0,c.screenSpacePanning=!0,c.minZoom=0.6,c.maxZoom=6,c.enabled=!1,c.mouseButtons={LEFT:Hn.PAN,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},c.touches={ONE:qn.PAN,TWO:qn.DOLLY_PAN};let h=a;n.add(new yo(16777215,14274752,1.25));let p=new Mo(16773856,2.3);p.position.set(ue.x-5,12,ue.z+7),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),Object.assign(p.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:35}),p.shadow.bias=-0.0004,p.shadow.normalBias=0.02,p.shadow.radius=3,p.target.position.copy(ue),n.add(p,p.target);let l=(f,x={})=>new Zn({color:f,roughness:0.7,...x}),m=l("#f6f5f1",{roughness:0.45}),y=l("#f3f1ec",{roughness:0.85}),M=l("#232428",{roughness:0.4}),b=l("#2a2b2f",{roughness:0.8}),g=l("#c7cace",{metalness:0.8,roughness:0.28}),_=l("#d9dcdf",{metalness:1,roughness:0.12}),U=l("#18191c",{roughness:0.18,metalness:0.1}),R=new _o({color:"#cfe6ee",transparent:!0,opacity:0.28,roughness:0.03,metalness:0,clearcoat:1,depthWrite:!1}),D=l("#0f1114",{roughness:0.08,metalness:0.3}),j=l("#e7eef2",{metalness:1,roughness:0.04}),B=l("#a9774f",{roughness:0.95,map:Hi("#a9774f")}),z=l("#956643",{roughness:0.95,map:Hi("#956643")}),ct=l("#2f4a69",{roughness:0.6}),P=l("#9b6c45",{roughness:0.6}),I=l("#3f7d34",{roughness:0.7}),W=l("#5f9c40",{roughness:0.7}),Q=l("#2c2c2c",{roughness:0.6}),nt=l("#fbfbf9",{roughness:0.15}),at=l("#b8bcc0",{metalness:0.7,roughness:0.35}),mt=(f)=>f.traverse((x)=>{if(x.isMesh)x.castShadow=!0,x.receiveShadow=!0}),k=(f,x,v,A,L=0.015)=>new te(new Ro(f,x,v,2,Math.min(L,f/2.1,x/2.1,v/2.1)),A),J=(f,x,v,A)=>new te(new sn(f,x,v),A),H=(f,x,v,A,L=24)=>new te(new zi(f,x,v,L),A),wt=(f,x,v=14)=>new te(new ps(f,v,Math.round(v*0.75)),x),T=(f,x,v=0,A=0,L=0)=>(x.position.set(v,A,L),f.add(x),x),Vt=(f,x,v)=>new te(new Yn(f,x),v),Qt=(f,x)=>{if(x==="x")f.rotation.z=Math.PI/2;else f.rotation.x=Math.PI/2;return f},dt=(f,x,v,A,L=!0,G=0.12)=>T(f,L?H(0.006,0.006,G,at,8):Qt(H(0.006,0.006,G,at,8),"x"),x,v,A),bt=(f,x,v,A,L,G=0,q=!0)=>{for(let pt=1;pt<L;pt++)T(f,J(0.004,v-0.04,0.004,b),-x/2+pt*x/L,G+v/2,A/2+0.001);for(let pt=0;pt<L;pt++)dt(f,-x/2+(pt+(pt%2?0.12:0.88))*x/L,G+(q?v-0.12:v/2),A/2+0.015,!0,0.1)};function Zt(f,x,v,A=!1){let L=new Dt;if(!A)T(L,H(f*0.32,f*0.25,0.26,Q,18),0,0.13,0);let G=A?0:0.26;for(let q=0;q<v;q++){let pt=q/v*Math.PI*2+Math.random()*0.4,zt=(x-G)*(0.6+Math.random()*0.4);T(L,H(0.006,0.006,zt,I,5),Math.cos(pt)*0.05,G+zt/2,Math.sin(pt)*0.05).rotation.set(Math.sin(pt)*0.35,0,-Math.cos(pt)*0.35);for(let me=1;me<=3;me++){let ee=T(L,wt(0.05,me%2?I:W,8),Math.cos(pt)*(0.05+me*zt*0.1),G+zt*(0.35+me*0.2),Math.sin(pt)*(0.05+me*zt*0.1));ee.scale.set(1.4,0.35,0.8),ee.rotation.y=-pt}}return L}function kt(f,x,v){let A=new Dt,L=l(v,{roughness:1,side:Pn,map:Hi(v,0.1)}),G=new Yn(f,x-0.1,64,10),q=G.attributes.position,pt=Math.max(4,Math.round(f/0.11));for(let zt=0;zt<q.count;zt++){let oe=q.getX(zt),me=q.getY(zt),ee=(x/2-me)/x;q.setZ(zt,Math.sin((oe/f+0.5)*Math.PI*2*pt)*(0.028+ee*0.02)+ee*ee*0.03)}G.computeVertexNormals(),T(A,new te(G,L),0,(x-0.1)/2+0.05,0.03),T(A,Qt(H(0.012,0.012,f+0.3,at,8),"x"),0,x,0);for(let zt=0;zt<=pt;zt++)T(A,new te(new ai(0.022,0.005,6,12),at),-f/2+zt*f/pt,x,0);return A}function Ct(f,x,v,A=0.14,L=0.02){let G=new Yn(f+A*2,x+A,48,40);G.rotateX(-Math.PI/2);let q=G.attributes.position;for(let zt=0;zt<q.count;zt++){let oe=q.getX(zt),me=q.getZ(zt),ee=L*Math.sin(oe*11+me*4)*Math.cos(me*7)+L*0.6*Math.sin(me*17),De=Math.abs(oe)-f/2;if(De>0)ee=-De*2.4+Math.sin(me*20)*0.01,oe=Math.sign(oe)*(f/2+De*0.18);let Fe=me-(x/2-A/2);if(Fe>0)ee=Math.min(ee,-Fe*2.4),me=x/2-A/2+Fe*0.18;q.setXYZ(zt,oe,ee,me)}G.computeVertexNormals();let pt=new te(G,v);return pt.castShadow=!0,pt.receiveShadow=!0,pt}function ne(f,x,v,A){let L=new Dt;T(L,k(f,v,x,y,0.01),0,v/2,0),T(L,J(f-0.02,0.006,0.006,l("#d0cdc6")),0,v-0.45,x/2+0.003),T(L,J(f-0.02,0.005,0.02,at),0,v-0.43,x/2+0.01);for(let G=0;G<2;G++){let q=-f/2+(G+0.5)*f/2,pt=A&&G===1?j:m;T(L,J(f/2-0.03,v-0.55,0.015,pt),q,(v-0.5)/2+0.02,x/2+0.008+G*0.02),T(L,J(0.02,v-0.55,0.02,at),q-f/4+0.02,(v-0.5)/2+0.02,x/2+0.012+G*0.02),T(L,J(0.02,v-0.55,0.02,at),q+f/4-0.02,(v-0.5)/2+0.02,x/2+0.012+G*0.02)}return[-1,1].forEach((G)=>dt(L,G*f*0.3,v-0.3,x/2+0.02,!1,0.14)),L}let xe={geladeira(f,x,v){let A=new Dt;T(A,k(f,v,x,g,0.03),0,v/2,0),T(A,J(f-0.02,0.006,0.006,b),0,1.22,x/2+0.002),T(A,k(0.025,0.5,0.03,at,0.01),-f/2+0.07,1.5,x/2+0.02),T(A,k(0.025,0.5,0.03,at,0.01),-f/2+0.07,0.95,x/2+0.02),T(A,k(0.16,0.12,0.02,l("#9aa3ab",{roughness:0.3}),0.01),f/2-0.16,1.45,x/2+0.006),["#3b82f6","#f59e0b","#7c3aed","#ef4444","#111827","#16a34a","#e5e7eb"].forEach((q,pt)=>T(A,J(0.07+pt%3*0.02,0.05+pt%2*0.03,0.004,l(q)),f*0.05+pt%3*0.1-0.08,1.32+Math.floor(pt/3)*0.1,x/2+0.004));let G=new Dt;return T(G,H(0.13,0.15,0.3,M,28),0,0.15,0),T(G,k(0.05,0.04,0.12,M,0.01),0,0.2,0.17),T(A,G,0,v,0),A},"armario-cozinha"(f,x,v){let A=new Dt;if(T(A,k(f,v-0.04,x-0.03,m,0.01),0,(v-0.04)/2,-0.015),T(A,J(f+0.005,0.04,x+0.01,l("#f4f2ee",{roughness:0.3})),0,v-0.02,0),bt(A,f,v-0.1,x-0.03,Math.max(1,Math.round(f/0.42)),0.06),T(A,J(f,0.06,0.02,b),0,0.03,x/2-0.04),f>1){let L=new Dt;T(L,k(0.3,0.02,0.22,l("#a4744a"),0.01),0,0.01,0),T(L,k(0.12,0.08,0.12,l("#e9e3d6"),0.02),-0.05,0.06,0),T(L,H(0.04,0.04,0.1,l("#ddd"),14),0.08,0.07,0),T(A,L,-f*0.25,v,0)}return A},fogao(f,x,v){let A=new Dt;T(A,k(f,v-0.03,x,g,0.015),0,(v-0.03)/2,0),T(A,J(f-0.01,0.02,x-0.01,D),0,v-0.02,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([G,q])=>{T(A,H(0.055,0.06,0.025,b),G*f/4.2,v,q*x/5),T(A,H(0.03,0.03,0.03,l("#555")),G*f/4.2,v+0.01,q*x/5)}),T(A,J(f-0.1,0.4,0.01,D),0,0.42,x/2+0.005),dt(A,0,0.7,x/2+0.03,!1,f-0.12);for(let G=0;G<5;G++)T(A,Qt(H(0.015,0.015,0.02,M,12),"z"),-f/2+0.08+G*(f-0.16)/4,v-0.09,x/2+0.012);T(A,J(f,0.08,x,b),0,0.04,0);let L=new Dt;return T(L,k(f+0.1,0.1,0.45,g,0.02),0,0,0),T(L,J(0.2,0.025,0.01,M),f*0.25,-0.02,0.23),T(A,L,0,1.6,-x/2+0.2),A},microondas(f,x,v){let A=new Dt,L=l("#f6f5f1",{roughness:0.45});return T(A,J(f+0.08,0.025,x+0.06,L),0,-0.0125,-0.01),T(A,J(f+0.08,0.025,x+0.06,L),0,v+0.1,-0.01),[-1,1].forEach((G)=>T(A,J(0.025,v+0.12,x+0.06,L),G*(f/2+0.03),v/2+0.045,-0.01)),T(A,k(f,v,x,M,0.015),0,v/2,0),T(A,J(f*0.68,v*0.75,0.005,D),-f*0.12,v/2,x/2+0.003),T(A,J(f*0.18,v*0.7,0.004,l("#333")),f*0.36,v/2,x/2+0.003),A},maquina(f,x,v){let A=new Dt;return T(A,k(f,v,x,m,0.05),0,v/2,0),T(A,H(f*0.38,f*0.38,0.02,l("#9aa3ab",{roughness:0.2,transparent:!0,opacity:0.85}),32),0,v+0.005,0.02),T(A,k(f-0.04,0.12,0.08,l("#e9e9e6"),0.02),0,v+0.06,-x/2+0.05),T(A,J(f*0.3,0.04,0.005,l("#4aa3c7")),0,v+0.07,-x/2+0.092),T(A,H(0.03,0.03,0.55,l("#8bc34a"),10),f/2+0.05,0.27,x*0.3),A},tanque(f,x,v){let A=new Dt;T(A,k(f*0.5,v-0.2,x*0.5,m,0.02),0,(v-0.2)/2,-x*0.2),T(A,k(f,0.2,x,nt,0.04),0,v-0.1,0),T(A,J(f-0.08,0.02,x-0.1,l("#d8dadb",{roughness:0.3})),0,v-0.01,0.02);let L=new Dt;T(L,H(0.012,0.012,0.22,_,10),0,0.11,0),T(L,Qt(H(0.01,0.01,0.12,_,10),"z"),0,0.22,0.06),T(A,L,0,v,-x/2+0.04);let G=new Dt;return[0,0.05,0.1].forEach((q,pt)=>T(G,H(0.008,0.008,0.16,l(["#c58b4c","#7c5a3a","#d8b98b"][pt]),6),q,0.08,0)),T(A,G,-f*0.3,v,-x/2+0.05),A},"varal-teto"(f,x){let v=new Dt;for(let L=0;L<6;L++)T(v,Qt(H(0.008,0.008,f,m,8),"x"),0,0,-x/2+L*x/5);return[-1,1].forEach((L)=>T(v,J(0.02,0.02,x,m),L*f/2,0,0)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([L,G])=>T(v,H(0.002,0.002,0.3,l("#ddd"),4),L*f/2,0.15,G*x/2)),[["#e24b75",0.4,0.55,-0.8],["#1f5f45",0.3,0.6,-0.4],["#1d2c54",0.25,0.3,0],["#6b6b6b",0.3,0.35,0.4],["#151515",0.3,0.45,0.8]].forEach(([L,G,q,pt])=>{let zt=T(v,Vt(G,q,l(L,{side:Pn,roughness:1})),0,-q/2,pt*x/2.2);zt.rotation.y=Math.PI/2}),v},balcao(f,x){let v=new Dt,A=x-0.12,L=-x/2+A/2;T(v,k(f-0.02,0.86,A,m,0.01),0,0.43,L);let G=new Dt;bt(G,f-0.02,0.78,A,4,0.06),G.rotation.y=Math.PI,G.position.z=L,v.add(G),T(v,J(f-0.02,0.06,0.02,b),0,0.03,-x/2+0.03),T(v,J(f,0.035,A+0.04,U),0,0.9,L),T(v,J(f,0.52,0.1,l("#ece9e3",{roughness:0.8})),0,1.16,x/2-0.11),T(v,J(f,0.035,0.34,U),0,1.44,x/2-0.02);let q=new Dt;T(q,H(0.07,0.08,0.12,M,16),0,0.06,0),T(q,Qt(H(0.008,0.008,0.32,M,6),"z"),0,0.25,0.04),T(q,H(0.04,0.07,0.1,M,14),0,0.36,0.18),T(v,q,-f*0.1,1.44,x/2+0.05);let pt=new Dt;T(pt,k(0.16,0.14,0.16,M,0.03),0,0.07,0),T(pt,H(0.07,0.06,0.22,l("#cfd6db",{transparent:!0,opacity:0.5}),16),0,0.25,0),T(v,pt,-f*0.3,1.44,x/2+0.05);let zt=new Dt;return T(zt,H(0.04,0.04,0.22,l("#3b6b2f",{roughness:0.1}),14),0,0.11,0),T(zt,H(0.012,0.025,0.1,l("#3b6b2f",{roughness:0.1}),10),0,0.27,0),T(v,zt,f*0.35,1.44,x/2+0.05),T(v,k(0.4,0.01,0.25,l("#a7774b",{roughness:0.9}),0.004),f*0.38,1.44,x/2+0.1),v},"pia-cozinha"(f,x){let v=new Dt;T(v,J(f*0.8,0.015,x*0.9,g),0,0.002,0),T(v,J(f*0.7,0.01,x*0.75,l("#8f9499",{metalness:0.8,roughness:0.3})),0,0.009,0),T(v,H(0.015,0.018,0.28,_,12),f*0.3,0.14,-x*0.3);let A=T(v,new te(new ai(0.07,0.011,8,16,Math.PI),_),f*0.3,0.28,-x*0.3+0.07);return A.rotation.y=Math.PI/2,v},escorredor(f,x){let v=new Dt;T(v,k(f,0.02,x,_,0.005),0,0.01,0),[-1,1].forEach((A)=>[-1,1].forEach((L)=>T(v,H(0.004,0.004,0.14,_,6),A*(f/2-0.01),0.08,L*(x/2-0.01))));for(let A=0;A<6;A++)T(v,Qt(H(0.003,0.003,x,_,4),"z"),-f/2+0.03+A*(f-0.06)/5,0.15,0);return[0,1,2,3].forEach((A)=>{let L=T(v,H(0.1,0.1,0.012,A%2?l("#f6f6f4",{roughness:0.2}):l("#1f3b73",{roughness:0.3}),22),-f/2+0.1+A*0.07,0.12,0);L.rotation.z=Math.PI/2-0.15}),[0,1,2].forEach((A)=>T(v,H(0.03,0.025,0.1,l("#cfd8dc",{transparent:!0,opacity:0.6,roughness:0.1}),12),f*0.3,0.07,-x/3+A*x/3)),T(v,H(0.05,0.045,0.08,l("#c13b3b"),16),f*0.18,0.06,x*0.25),T(v,k(0.14,0.07,0.1,l("#d26aa6"),0.02),0,0.2,0),v},filtro(f,x,v){let A=new Dt;return T(A,H(f/2.4,f/2,v*0.55,l("#8a5236",{roughness:0.9}),20),0,v*0.275,0),T(A,H(f/2.4,f/2.4,v*0.45,l("#6b6f73",{transparent:!0,opacity:0.7,roughness:0.2}),20),0,v*0.775,0),T(A,Qt(H(0.01,0.01,0.05,l("#c98"),6),"z"),0,v*0.15,f/2),A},"mesa-jantar"(f,x,v){let A=new Dt;return T(A,k(f,0.02,x,R,0.01),0,v,0),T(A,J(f*0.3,0.005,x*0.5,l("#e6a243")),0,v+0.013,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([L,G])=>T(A,H(0.015,0.015,v,_,10),L*(f/2-0.06),v/2,G*(x/2-0.06))),T(A,H(0.04,0.03,0.12,l("#3a2a20"),12),-f*0.2,v+0.07,x*0.2),[0,1,2].forEach((L)=>T(A,H(0.002,0.002,0.25,l("#d9b48a"),4),-f*0.2+(L-1)*0.015,v+0.2,x*0.2)),T(A,H(0.035,0.035,0.2,l("#f472b6"),14),f*0.2,v+0.1,-x*0.25),T(A,k(0.22,0.1,0.16,l("#f8c74a"),0.01),f*0.1,v+0.06,x*0.3),A},cadeiras(f,x){let v=new Dt;return T(v,k(f,0.05,x,M,0.02),0,0.46,0),T(v,k(f,0.4,0.03,M,0.015),0,0.7,-x/2+0.02),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([A,L])=>T(v,H(0.009,0.009,0.44,_,8),A*(f/2-0.03),0.22,L*(x/2-0.03))),[-1,1].forEach((A)=>T(v,H(0.009,0.009,0.44,_,8),A*(f/2-0.03),0.7,-x/2+0.02)),v},espada(f,x,v){let A=new Dt;T(A,H(f*0.35,f*0.28,0.28,Q,18),0,0.14,0),T(A,H(f*0.33,f*0.33,0.01,l("#3d2a1d")),0,0.27,0);for(let L=0;L<11;L++){let G=L/11*Math.PI*2;T(A,J(0.045,v-0.3-Math.random()*0.3,0.008,L%2?I:l("#5a8a3a")),Math.cos(G)*0.04,0.28+(v-0.3)/2,Math.sin(G)*0.04).rotation.set((Math.random()-0.5)*0.25,G,(Math.random()-0.5)*0.25)}return A},zamioculca(f,x,v){return Zt(f,v,7)},sofa(f,x,v,A){let L=new Dt,G=(ee)=>S(ee-A.x)-f/2,q=(ee)=>S(ee-A.y)-x/2,pt=(ee,De,Fe,nn,Wn,rr,bs,Ts=0.05)=>T(L,k(S(Fe-ee),bs,S(nn-De),Wn,Ts),(G(ee)+G(Fe))/2,rr+bs/2,(q(De)+q(nn))/2);pt(52,178,90,294,z,0,0.2,0.03),pt(90,178,126,214,z,0,0.2,0.03);for(let ee=186;ee<288;ee+=25.5)pt(60.3,ee+0.3,89.7,Math.min(ee+25.5,288)-0.3,B,0.2,0.2,0.07);[[90,186,105,214],[105,186,120,214]].forEach(([ee,De,Fe,nn])=>pt(ee+0.3,De+0.3,Fe-0.3,nn-0.3,B,0.2,0.2,0.07));for(let ee=180;ee<294;ee+=28.5)pt(52,ee+0.2,60,Math.min(ee+28.5,294)-0.2,z,0.2,0.42,0.05);[[60,178,82,186],[82,178,104,186],[104,178,126,186]].forEach(([ee,De,Fe,nn])=>pt(ee+0.2,De,Fe-0.2,nn,z,0.2,0.42,0.05)),pt(60,288,90,294,z,0.2,0.22,0.04),pt(120,186,126,214,z,0.2,0.22,0.04);let zt=(ee,De,Fe,nn)=>{T(L,k(0.36,0.34,0.1,l(Fe,{roughness:0.95}),0.05),G(ee),0.55,q(De)).rotation.set(-0.25,nn,0)};zt(63,196,"#ece6d6",Math.PI/2),zt(63,280,"#7d9a6a",Math.PI/2),zt(112,190,"#ece6d6",0);let oe=T(L,k(0.55,0.04,0.45,l("#8d96a3",{roughness:1,map:Hi("#8d96a3",0.2)}),0.02),G(74),0.44,q(250));oe.rotation.y=0.5;let me=new Dt;return T(me,k(0.32,0.38,0.16,l("#ece4d6",{roughness:1}),0.06),0,0.19,0),T(me,k(0.24,0.03,0.17,l("#222"),0.01),0,0.38,0),T(L,me,G(98),0.4,q(196)),T(L,k(0.16,0.02,0.05,l("#111"),0.01),G(72),0.41,q(266)).rotation.y=0.3,L},"tapete-sala"(f,x){let v=new Dt;return T(v,k(f,0.015,x,l("#1c1c1e",{map:Jc("#1c1c1e","#2c2c30"),roughness:1}),0.005),0,0.008,0),v},"mesa-centro"(f,x,v){let A=new Dt;return T(A,H(0.5,0.5,0.035,M,40),0,v-0.02,0).scale.set(f,1,x),[0,2.1,4.2].forEach((G)=>{T(A,H(0.014,0.01,v,M,8),Math.cos(G)*f*0.32,v/2,Math.sin(G)*x*0.32).rotation.set(Math.sin(G)*0.15,0,-Math.cos(G)*0.15)}),T(A,H(0.06,0.05,0.08,l("#c26b3a")),f*0.15,v+0.04,0),T(A,k(0.18,0.02,0.24,l("#2c4a6e"),0.005),-f*0.15,v+0.01,0.02),A},estante(f,x,v){let A=new Dt;T(A,J(f,v,0.03,ct),0,v/2,-x/2+0.015),T(A,k(f,0.5,x,ct,0.01),0,0.25,0),[-1,1].forEach((oe)=>{T(A,J(f/2-0.02,0.003,0.003,l("#1d3047")),oe*f/4,0.25,x/2+0.002),dt(A,oe*f/4,0.36,x/2+0.015,!1,0.24)}),T(A,J(f*0.3,0.16,x-0.05,l("#22384f")),-f*0.32,0.4,0.02),T(A,k(0.2,0.1,0.14,l("#ece9e3"),0.01),-f*0.36,0.37,0.04),T(A,J(0.18,0.12,0.2,l("#c9a37a")),-f*0.22,0.37,0.03),T(A,k(f,0.3,x-0.04,ct,0.01),0,v-0.15,-0.02),[-0.33,0.33].forEach((oe)=>T(A,J(0.02,0.26,x-0.06,l("#294260")),oe*f,v-0.15,-0.02));let L=["#e8e1d0","#b33","#222","#d9b26a","#e9e9e9","#2b2b2b","#c2185b","#f0eadb","#333","#7a5230"];for(let oe=0;oe<18;oe++)T(A,J(0.022+Math.random()*0.02,0.2+Math.random()*0.05,0.16,l(L[oe%L.length],{roughness:0.8})),-f/2+0.05+oe*0.028,v-0.27+0.11,-0.03);T(A,Zt(0.18,0.55,5,!0),0,v-0.28,-0.02),T(A,k(0.16,0.14,0.16,l("#3b87c9"),0.07),f*0.38,v-0.22,-0.02),T(A,k(f*0.58,f*0.58*0.58,0.03,M,0.006),-f*0.08,1.33,-x/2+0.05),T(A,Vt(f*0.56,f*0.56*0.56,l("#000",{map:Po("#1d2a3a"),roughness:0.2})),-f*0.08,1.33,-x/2+0.066),T(A,H(0.003,0.003,0.5,M,4),-f*0.12,0.85,-x/2+0.05);let G=T(A,J(0.45,0.6,0.02,l("#5a3a22")),f*0.3,0.82,-x/2+0.06);G.rotation.x=-0.06,T(A,Vt(0.41,0.56,l("#fff",{map:m0()})),f*0.3,0.82,-x/2+0.072).rotation.x=-0.06;let q=new Dt;T(q,k(0.34,0.15,0.22,l("#5b3a20",{roughness:0.5}),0.02),0,0.075,0),T(q,J(0.35,0.015,0.225,l("#2a1a10")),0,0.1,0),[-1,1].forEach((oe)=>T(q,J(0.02,0.03,0.01,l("#c9a34e",{metalness:0.8})),oe*0.1,0.12,0.115)),T(A,q,f*0.28,0.5,0.02),T(A,J(0.11,0.14,0.015,l("#1a1a1a")),-f*0.02,0.57,-0.06),T(A,Vt(0.09,0.12,l("#c9b9a0")),-f*0.02,0.57,-0.052);let pt=new Dt;T(pt,H(0.04,0.06,0.14,l("#b22")),0,0.07,0),T(pt,wt(0.035,l("#f1d0b5")),0,0.17,0),T(pt,wt(0.03,l("#fff")),0,0.15,0.02),T(pt,new te(new Yr(0.04,0.07,12),l("#b22")),0,0.22,0),T(A,pt,f*0.1,0.5,0.03),T(A,k(0.08,0.06,0.08,l("#c9a77a"),0.01),-f*0.12,0.53,0.06);let zt=T(A,wt(0.1,l("#3b9ad9",{roughness:0.3}),16),f*0.38,v-0.25,-0.02);return zt.scale.y=0.7,A},"cortina-sala"(f,x,v){let A=kt(f,v,"#4a3428"),L=T(A,new te(new ai(0.12,0.03,8,16),l("#4a3428",{roughness:1})),0,1,0.02);return L.rotation.x=Math.PI/2,A},"quadro-sala"(f,x,v){let A=new Dt;return T(A,J(f,v,0.03,l("#111")),0,v/2,0),T(A,Vt(f-0.02,v-0.02,l("#fff",{map:f0()})),0,v/2,0.016),A},box(f,x,v){let A=new Dt;T(A,J(f,v,0.01,R),0,v/2,x/2),T(A,J(0.01,v,x,R),-f/2+0.01,v/2,0),T(A,J(f,0.03,0.04,at),0,v,x/2),T(A,J(f,0.02,0.03,at),0,0.01,x/2),T(A,J(0.03,v,0.03,at),f/2-0.02,v/2,x/2);{let q=T(A,H(0.08,0.08,0.03,l("#f2f2f0",{roughness:0.3}),24),-f/2+0.14,2,0);q.rotation.z=-0.5,T(A,Qt(H(0.012,0.012,0.12,_,8),"x"),-f/2+0.06,2.05,0),T(A,k(0.06,0.12,0.04,_,0.01),-f/2+0.03,1.2,0.15)}let L=new Dt;T(L,k(0.28,0.03,0.22,l("#3fa7b5"),0.01),0,0.3,0),[-1,1].forEach((q)=>T(L,J(0.02,0.3,0.2,l("#2a2a2a")),q*0.12,0.15,0)),T(A,L,f*0.3,0,-x*0.05);let G=new Dt;return T(G,k(0.25,0.02,0.1,l("#fff"),0.005),0,0,0),T(G,H(0.025,0.025,0.18,l("#f1e3c4"),10),-0.06,0.09,0),T(G,H(0.02,0.02,0.15,l("#7a5aa8"),10),0.05,0.08,0),T(A,G,f/2-0.14,1.2,-x/2+0.06),T(A,k(f*0.8,0.01,0.3,l("#6f7378",{roughness:1}),0.004),0,0.005,x/2+0.2),T(A,J(f+0.1,v+0.5,0.01,l("#fff",{map:$c(),roughness:0.25})),0,(v+0.5)/2,-x/2+0.005),A},vaso(f,x){let v=new Dt,A=T(v,H(0.17,0.13,0.38,nt,24),0,0.19,0.04);A.scale.z=1.3;let L=T(v,H(0.19,0.19,0.03,nt,24),0,0.4,0.04);L.scale.z=1.25,T(v,k(f*0.9,0.36,0.17,nt,0.03),0,0.58,-x/2+0.1),T(v,H(0.03,0.03,0.01,_,12),0,0.765,-x/2+0.1),[-1,1].forEach((q)=>T(v,H(0.03,0.035,0.05,l("#e9dcc6"),12),q*f*0.25,0.79,-x/2+0.1));let G=T(v,Qt(H(0.055,0.055,0.1,l("#fff",{roughness:1}),16),"x"),f/2+0.03,0.6,-x/2+0.1);return G.castShadow=!0,T(v,H(0.1,0.09,0.3,l("#f4f4f2"),16),f/2+0.1,0.15,0.05),v},"pia-banheiro"(f,x,v){let A=new Dt;return T(A,k(f,v-0.12,x-0.06,m,0.01),0,(v-0.12)/2,-0.03),[0.22,0.5].forEach((L)=>{T(A,J(f-0.02,0.003,0.003,l("#ccc")),0,L+0.14,x/2-0.055),T(A,k(0.14,0.02,0.02,P,0.008),0,L,x/2-0.045)}),T(A,k(f*0.95,0.14,x-0.02,nt,0.06),0,v-0.07,0),T(A,J(f*0.6,0.01,x*0.55,l("#e5e8ea",{roughness:0.1})),0,v-0.005,0.03),T(A,H(0.012,0.012,0.14,_,10),0,v+0.07,-x/2+0.05),T(A,Qt(H(0.009,0.009,0.08,_,8),"z"),0,v+0.14,-x/2+0.09),T(A,k(f*0.9,0.55,0.1,j,0.01),0,1.6,-x/2+0.02),T(A,k(0.18,0.07,0.06,l("#fff"),0.02),0,1.2,-x/2+0.02),T(A,H(0.03,0.035,0.16,M,12),f*0.3,v+0.08,-x*0.2),T(A,k(0.1,0.02,0.07,l("#2a2a2a"),0.01),-f*0.3,v+0.01,x*0.1),T(A,J(f+0.2,1.3,0.01,l("#fff",{map:$c(),roughness:0.25})),0,0.65,-x/2-0.01),A},"mesa-pc"(f,x,v){let A=new Dt;T(A,k(f,0.03,x,M,0.008),0,v,0),[-1,1].forEach((me)=>{T(A,J(0.05,v,0.05,M),me*(f/2-0.08),v/2,-x/2+0.1),T(A,J(0.06,0.03,x-0.1,M),me*(f/2-0.08),0.015,0)}),T(A,k(f*0.78,0.006,0.32,l("#5a1f1f",{roughness:0.9}),0.003),0,v+0.018,0.05);{let De=-x/2+0.12,Fe=new te(new zi(1.5,1.5,0.345,32,1,!0,Math.PI-0.27,0.54),l("#000",{map:Po("#2b4a77"),side:Pn,roughness:0.25})),nn=new te(new zi(1.52,1.52,0.37,32,1,!0,Math.PI-0.2775,0.555),l("#151517",{side:Pn,roughness:0.5}));[Fe,nn].forEach((Wn)=>T(A,Wn,0,v+0.43,De+1.5)),T(A,k(0.16,0.03,0.02,l("#c8102e"),0.01),0,v+0.245,De-0.025)}T(A,J(0.06,0.2,0.04,M),0,v+0.12,-x/2+0.08),T(A,J(0.25,0.01,0.18,M),0,v+0.02,-x/2+0.1),T(A,k(0.12,0.03,0.04,M,0.01),0,v+0.65,-x/2+0.1);let L=new Dt;T(L,k(0.38,0.02,0.26,l("#3a3d42"),0.01),0,0.01,0);let G=T(L,k(0.38,0.25,0.012,l("#3a3d42"),0.006),0,0.13,-0.13);G.rotation.x=-0.25,T(L,Vt(0.34,0.21,l("#000",{map:Po("#1f2937")})),0,0.13,-0.123).rotation.x=-0.25,T(L,J(0.3,0.01,0.2,l("#e65a2f")),0,-0.02,0.02),T(A,L,-f*0.32,v+0.1,-x/2+0.25),T(A,k(0.44,0.02,0.14,l("#151515"),0.006),0,v+0.03,0.14),T(A,k(0.06,0.03,0.1,l("#151515"),0.02),0.32,v+0.03,0.14);let q=T(A,new te(new ai(0.09,0.015,8,16,Math.PI),M),f*0.38,v+0.25,-x/2+0.1);q.rotation.y=Math.PI/2;let pt=new Dt;T(pt,H(0.008,0.008,0.5,M,6),0,0.25,0).rotation.z=0.5,T(pt,H(0.03,0.03,0.12,M,12),-0.14,0.45,0).rotation.z=1.2,T(pt,H(0.07,0.07,0.01,l("#111",{transparent:!0,opacity:0.7}),20),-0.05,0.45,0.08).rotation.x=Math.PI/2,T(A,pt,f*0.44,v,-x/2+0.06);let zt=new Dt;T(zt,H(0.008,0.008,1.3,M,6),0,0.65,0),T(zt,new te(new ai(0.12,0.015,8,24),l("#fff",{emissive:"#fff",emissiveIntensity:0.4})),0,1.35,0),T(A,zt,-f*0.45,0,-x/2-0.1);let oe=l("#111",{roughness:0.9});return[-0.2,0,0.15].forEach((me)=>T(A,H(0.004,0.004,v,oe,4),me,v/2,-x/2+0.02)),A},"cadeira-pc"(){let f=new Dt,x=l("#cfd0cd",{roughness:0.8}),v=l("#f2f2f0",{roughness:0.4});for(let L=0;L<5;L++){let G=L/5*Math.PI*2,q=T(f,J(0.32,0.03,0.04,v),Math.cos(G)*0.16,0.07,Math.sin(G)*0.16);q.rotation.y=-G,T(f,wt(0.03,v,10),Math.cos(G)*0.3,0.03,Math.sin(G)*0.3)}T(f,H(0.025,0.025,0.35,_,10),0,0.25,0),T(f,k(0.5,0.08,0.48,x,0.04),0,0.48,0);let A=T(f,k(0.46,0.6,0.06,x,0.05),0,0.85,-0.24);return A.rotation.x=-0.12,T(f,k(0.48,0.62,0.02,v,0.02),0,0.85,-0.28).rotation.x=-0.12,T(f,k(0.3,0.12,0.06,v,0.04),0,1.22,-0.29),T(f,k(0.36,0.14,0.05,l("#e3e3df"),0.04),0,0.72,-0.2),[-1,1].forEach((L)=>{T(f,k(0.05,0.03,0.26,l("#9a9a96"),0.015),L*0.27,0.68,-0.02),T(f,J(0.03,0.18,0.03,v),L*0.27,0.58,-0.1)}),f},puff(f){let x=new Dt;return T(x,wt(f/2,l("#1d1e22",{roughness:0.5}),24),0,0.2,0).scale.set(1,0.5,1),x},"quadro-branco"(f,x,v){let A=new Dt;T(A,J(f,v,0.02,at),0,v/2,0),T(A,Vt(f-0.03,v-0.03,l("#fff",{map:g0(),roughness:0.2})),0,v/2,0.011);let L=new Dt;T(L,H(0.17,0.17,0.03,M,20),0,0.45,0),[0,2.1,4.2].forEach((q)=>T(L,H(0.01,0.01,0.45,_,6),Math.cos(q)*0.13,0.22,Math.sin(q)*0.13)),T(L,k(0.14,0.03,0.05,l("#2a6fd1"),0.01),0,0.48,0),T(A,L,0,-0.6,0.35);let G=new Dt;return T(G,k(0.35,0.45,0.2,l("#f3f3f3",{roughness:1}),0.03),0,0.22,0),T(G,k(0.3,0.4,0.18,l("#2e2e8a",{roughness:1}),0.03),0.3,0.2,0.05),T(A,G,-f*0.3,-0.6,0.25),A},"guarda-roupa-escritorio"(f,x,v){return ne(f,x,v,!1)},"guarda-roupa-casal"(f,x,v){return ne(f,x,v,!0)},cama(f,x){let v=new Dt,A=l("#26262b",{roughness:0.55,map:Hi("#26262b",0.08)});T(v,k(f,0.3,x,l("#1f1f22",{roughness:0.9}),0.02),0,0.15,0),T(v,k(f-0.04,0.2,x-0.04,l("#e8e6e1"),0.05),0,0.4,0),T(v,Ct(f+0.04,x*0.78,l("#26262b",{roughness:0.45,side:Pn,map:Hi("#26262b",0.08)}),0.22,0.018),0,0.52,x*0.11-0.06),T(v,J(f+0.08,0.006,0.006,l("#bbb")),0,0.18,x/2+0.025),[-1,1].forEach((zt)=>{let oe=T(v,wt(0.5,l("#33333a",{roughness:0.45}),20),zt*f*0.24,0.6,-x/2+0.2);oe.scale.set(f*0.44,0.13,0.3),oe.rotation.x=-0.35});let L=(zt,oe,me,ee)=>{T(v,wt(ee,l(me,{roughness:1})),zt,0.58+ee*0.8,oe),T(v,wt(ee*0.65,l(me,{roughness:1})),zt,0.58+ee*2.2,oe-0.02)};L(-0.35,-x/2+0.5,"#f2efe8",0.09),L(-0.12,-x/2+0.5,"#f2efe8",0.09),L(0.2,-x/2+0.5,"#5b3a26",0.11),L(0.1,0.1,"#d6a65a",0.07);let G=T(v,k(0.5,0.06,0.4,l("#c2185b",{roughness:1}),0.03),0.3,0.56,0.05);G.rotation.y=0.4;let q=T(v,k(0.45,0.06,0.35,l("#9aa0aa",{roughness:1}),0.03),0.25,0.56,0.4);q.rotation.y=-0.3;let pt=T(v,k(0.4,0.05,0.28,l("#22396b",{roughness:1}),0.02),-0.35,0.55,0.45);return pt.rotation.y=0.1,v},"tapete-quarto"(f,x){let v=new Dt;T(v,k(f,0.012,x,l("#2b3550",{map:u0(),roughness:1}),0.004),0,0.006,0);let A=new Dt;return[-1,1].forEach((L)=>T(A,k(0.1,0.08,0.28,l("#f5f5f2"),0.03),L*0.07,0.04,0)),T(v,A,0,0.012,0),v},criado(f,x,v){let A=new Dt;return T(A,k(f,0.3,x,m,0.01),0,v-0.15,0),T(A,J(f-0.04,0.22,0.01,l("#e2ddd0")),0,v-0.15,x/2-0.03),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([L,G])=>{T(A,H(0.012,0.008,v-0.3,P,8),L*(f/2-0.03),(v-0.3)/2,G*(x/2-0.03)).rotation.set(G*0.1,0,-L*0.1)}),T(A,H(0.06,0.09,0.22,l("#4a2f22",{roughness:0.4}),16),0,v+0.11,0),T(A,H(0.09,0.12,0.16,l("#f2ead8",{emissive:"#ffdca0",emissiveIntensity:0.35}),20),0,v+0.3,0),A},"quadro-quarto"(f,x,v){let A=new Dt;return T(A,J(f,v,0.03,l("#1a1a1a")),0,v/2,0),T(A,Vt(f-0.02,v-0.02,l("#fff",{map:p0()})),0,v/2,0.016),A},"varal-chao"(f,x,v){let A=new Dt,L=l("#f4f4f2",{roughness:0.4});[-1,1].forEach((G)=>{let q=T(A,H(0.01,0.01,1.15,L,8),G*(f/2-0.02),0.5,-x*0.2);q.rotation.x=0.45;let pt=T(A,H(0.01,0.01,1.15,L,8),G*(f/2-0.02),0.5,x*0.2);pt.rotation.x=-0.45});for(let G=0;G<7;G++)T(A,Qt(H(0.006,0.006,f,L,6),"x"),0,v,-x/2+G*x/6);return["#151515","#1f2c4f","#6b1f2a","#151515","#e9e2d5"].forEach((G,q)=>T(A,Vt(0.34,0.5,l(G,{side:Pn,roughness:1})),-f/2+0.2+q*(f-0.3)/5,v-0.25,-x/2+q%3*x/3+0.05)),A},bike(f){let x=new Dt;x.scale.setScalar(f/1.72);let v=l("#22313f",{roughness:0.4}),A=l("#151515",{roughness:0.9});[-1,1].forEach((G)=>{T(x,new te(new ai(0.34,0.03,8,28),A),G*0.5,0.36,0);for(let q=0;q<8;q++){let pt=T(x,H(0.002,0.002,0.66,l("#aaa"),3),G*0.5,0.36,0);pt.rotation.z=q*Math.PI/8}});let L=(G,q,pt,zt)=>{let oe=Math.hypot(pt-G,zt-q),me=T(x,H(0.018,0.018,oe,v,8),(G+pt)/2,(q+zt)/2,0);me.rotation.z=Math.atan2(G-pt,zt-q)};return L(-0.5,0.36,-0.05,0.4),L(-0.05,0.4,0.35,0.75),L(-0.05,0.4,-0.12,0.82),L(-0.12,0.82,0.35,0.75),L(0.35,0.75,0.5,0.36),L(-0.5,0.36,-0.12,0.82),T(x,k(0.2,0.04,0.08,M,0.02),-0.14,0.86,0),T(x,Qt(H(0.012,0.012,0.55,M,8),"z"),0.38,0.86,0),x}},ie=[],gt=new Map,At=(f)=>{let x=new Js;return f.forEach(([v,A],L)=>L?x.lineTo(u(v),d(A)):x.moveTo(u(v),d(A))),x},F=Zc();F.wrapS=F.wrapT=Vs,F.repeat.set(0.8333333333333334,0.8333333333333334);let Ht=(f,x)=>{let v=new $r(At(f));v.rotateX(Math.PI/2);let A=new te(v,x);A.receiveShadow=!0,A.userData.piso=!0,A.position.y=0.001,n.add(A),ie.push(A)};Ht(it,l("#fff",{map:F,roughness:0.35,side:Pn}));let St=Zc();St.wrapS=St.wrapT=Vs,St.repeat.set(1.1111111111111112,1.1111111111111112),Ht(ot,l("#e9e2d6",{map:St,roughness:0.6,side:Pn}));let yt=new te(new Jr(At([[46,16],[202,16],[202,106],[332,106],[332,350],[46,350]]),{depth:0.18,bevelEnabled:!1}).rotateX(Math.PI/2),l("#f1efe9",{roughness:0.9}));yt.receiveShadow=!0,n.add(yt);let re=new te(new Zs(14,48).rotateX(-Math.PI/2),new go({opacity:0.12}));re.position.set(ue.x,-0.18,ue.z),re.receiveShadow=!0,n.add(re);let Ot=l("#fbfaf7",{roughness:0.92}),Gt=l("#6e6c68",{roughness:0.9}),N=l("#ffffff",{roughness:0.4}),w=(f,x,v,A=0,L=Ot,G=!0)=>{let q=u(f[0]),pt=d(f[1]),zt=u(x[0]),oe=d(x[1]),me=Math.hypot(zt-q,oe-pt)+xs,ee=-Math.atan2(oe-pt,zt-q),De=new te(new sn(me,1,xs),L);De.rotation.y=ee,De.position.set((q+zt)/2,0,(pt+oe)/2),De.castShadow=De.receiveShadow=!0,n.add(De);let Fe=new te(new sn(me+0.002,0.012,xs+0.002),Gt);Fe.rotation.y=ee,Fe.position.copy(De.position),Fe.visible=G,n.add(Fe);let nn=Math.hypot(zt-q,oe-pt)||1,Wn={corpo:De,topo:Fe,base:A,frente:f[1]>=340&&x[1]>=340,comTopo:G,h:v,seg:{x:(q+zt)/2,z:(pt+oe)/2,nx:-(oe-pt)/nn,nz:(zt-q)/nn}};return K(Wn,v),Wn},K=(f,x)=>{f.h=x,f.corpo.scale.y=x,f.corpo.position.y=f.base+x/2,f.topo.position.y=f.base+x+0.006},ft=[];rt.forEach((f)=>{for(let x=1;x<f.length;x++){ft.push(w(f[x-1],f[x],$n));let v=w(f[x-1],f[x],0.07,0,N,!1);v.corpo.scale.z=1.18}});{let[f,x,v,A]=st,L=w([f+v/2,x],[f+v/2,x+A],$n);L.corpo.geometry=new sn(S(A)+xs,1,S(v)),L.topo.geometry=new sn(S(A)+xs,0.012,S(v)),ft.push(L)}let _t=[],ut=[],Kt=[],Pt=[],Ut=l("#e9eaea",{metalness:0.4,roughness:0.35}),le=R.clone(),Et=[le,Ut];je.forEach(([f,x])=>{let v=w(f,x,1);v.frente=!1,Kt.push(v),_t.push(w(f,x,$n-2.1,2.1));let A=w(f,x,1.1,1,le,!1);A.corpo.scale.z=0.25,Pt.push(A),[1,2.07].forEach((q)=>{let pt=w(f,x,0.03,q,Ut,!1);if(pt.corpo.scale.z=0.5,q>2)Pt.push(pt)});let L=[(f[0]+x[0])/2,(f[1]+x[1])/2],G=f[0]===x[0];w(G?[L[0],L[1]-0.4]:[L[0]-0.4,L[1]],G?[L[0],L[1]+0.4]:[L[0]+0.4,L[1]],1.07,1,Ut,!1)});{let f=w(X[0],X[1],2.1,0,le,!1);f.corpo.scale.z=0.25,_t.push(w(X[0],X[1],$n-2.1,2.1)),w(X[0],X[1],0.04,2.07,Ut,!1);let x=(X[0][0]+X[1][0])/2;w([x,302.5],[x,305.5],2.1,0,Ut,!1)}{let[f,x]=lt,v=Math.round((x[0]-f[0])/3.2),A=l("#f2f0ea",{roughness:0.5});for(let G=0;G<=v;G++){let q=H(0.01,0.01,1.05,A,6);q.position.set(u(f[0]+G*(x[0]-f[0])/v),0.525,d(f[1])-0.02),q.castShadow=!0,n.add(q)}w(f,x,0.05,1.05,A,!1);let L=w(f,x,1.3,1.1,l("#ffffff",{transparent:!0,opacity:0.1,side:Pn}),!1);L.corpo.scale.z=0.1,_t.push(L),[[50,304],[50,346]].forEach(()=>{})}{let f=d0();f.wrapS=f.wrapT=Vs,f.repeat.set(3,1);let x=Vt(1.9,0.62,l("#fff",{map:f,roughness:0.4}));x.position.set(u(110),1.22,d(20)+xs/2+0.005),n.add(x)}let Ft=(f,x,v,A,L="#f7f6f2")=>{let G=new Dt,q=l(L,{roughness:0.5});return Et.push(q),T(G,k(v,2.1,0.035,q,0.005),v/2,1.05,0),T(G,Qt(H(0.012,0.012,0.12,_,8),"x"),v-0.08,1,0.03),T(G,Qt(H(0.012,0.012,0.12,_,8),"x"),v-0.08,1,-0.03),G.position.set(f,0,x),G.rotation.y=A,mt(G),n.add(G),G},Me=[Ft(u(50),d(160),0.85,1.2,"#efe9df"),Ft(u(216),d(199),0.55,2),Ft(u(221),d(230),0.7,1),Ft(u(200),d(232),0.7,-1.1)],jt=[],Bt=kt(1.8,2.3,"#a8a9ab");Bt.traverse((f)=>{let x=f;if(x.isMesh)Et.push(x.material)}),Bt.position.set(u(270),0,d(342)),jt.push(Bt);let de=kt(1.4,2.3,"#f3f1ec");de.traverse((f)=>{let x=f;if(x.isMesh)Et.push(x.material)}),de.position.set(u(278),0,d(114)),jt.push(de);{let f=new Dt,x=k(0.8,0.02,0.22,l("#2e2a26"),0.01);x.position.y=0.42,x.rotation.z=1.2,f.add(x),[-1,1].forEach((v)=>{let A=wt(0.03,l("#d6a23a"),8);A.position.set(-0.05+v*0.02,0.06+(v+1)*0.32,0.08),f.add(A)}),f.position.set(u(322),0,d(160)),jt.push(f)}{let f=new Dt,x=H(0.17,0.14,0.25,l("#ef8a9c"),18);x.position.y=0.125,x.scale.x=1.6,f.add(x);let v=H(0.1,0.1,0.1,l("#7a1f3d"),16);v.position.set(0.12,0.2,0),f.add(v),f.position.set(u(150),0,d(208)),jt.push(f)}for(let f=0;f<6;f++){let x=Zt(0.14,0.32+f%3*0.08,4);x.position.set(u(56+f*8),0,d(342.5)),jt.push(x)}{let f=new Dt,x=H(0.012,0.012,1.2,l("#d64a6a"),6);x.position.y=0.6,x.rotation.z=0.15,f.add(x);let v=H(0.12,0.14,0.05,l("#c9c9c9",{roughness:1}),14);v.position.y=0.03,f.add(v),f.position.set(u(178),0,d(310)),jt.push(f)}{let f=new Dt,x=H(0.06,0.08,0.22,l("#78c850",{transparent:!0,opacity:0.8}),14);x.position.y=0.11,f.add(x),f.position.set(u(178),0,d(322)),jt.push(f)}{let f=new Dt,x=J(0.25,0.02,0.1,l("#fff"));x.position.set(0,1.35,0),f.add(x);let v=H(0.03,0.03,0.16,l("#8d6ad1"),10);v.position.set(0.05,1.44,0),f.add(v);let A=H(0.003,0.003,0.2,l("#2a7a3a"),4);A.position.set(-0.05,1.2,0),f.add(A),f.position.set(u(51)+0.07,0,d(120)),f.rotation.y=Math.PI/2,jt.push(f)}{let f=new Dt,x=Vt(1.2,0.9,l("#fff",{transparent:!0,opacity:0}));f.add(x),jt.push(f)}jt.forEach((f)=>{mt(f),n.add(f)});let ye={"+z":0,"-z":Math.PI,"+x":Math.PI/2,"-x":-Math.PI/2},Pe=new Map,V=new Map,vt=new Map;ae.forEach((f)=>vt.set(f.id,[...vt.get(f.id)||[],f])),vt.forEach((f,x)=>{let v=f.reduce((G,q)=>G+u(q.x)+S(q.w)/2,0)/f.length,A=f.reduce((G,q)=>G+d(q.y)+S(q.d)/2,0)/f.length,L=new Dt;L.position.set(v,0,A),L.userData.grupo=x,n.add(L),Pe.set(x,L),V.set(x,L.position.clone()),f.forEach((G)=>{let q=G.face==="+x"||G.face==="-x",pt=S(q?G.d:G.w),zt=S(q?G.w:G.d),oe=(xe[G.id]||((me,ee,De)=>{let Fe=new Dt;return T(Fe,k(me,De,ee,m),0,De/2,0),Fe}))(pt,zt,G.h,G);if(oe.rotation.y=ye[G.face||"+z"],oe.position.set(u(G.x)+S(G.w)/2-v,G.base||0,d(G.y)+S(G.d)/2-A),mt(oe),G.id.startsWith("tapete"))oe.traverse((me)=>{me.castShadow=!1});oe.traverse((me)=>{let ee=me;if(!ee.isMesh)return;ee.userData.movel=G.id,ee.material=ee.material.clone(),gt.set(G.id,[...gt.get(G.id)||[],ee])}),L.add(oe)}),ie.push(L)}),gt.get("cortina-sala")?.forEach((f)=>Et.push(f.material));let ht=new Dt;ht.visible=!1,n.add(ht);let xt=!1,Nt=bn(4,256,(f)=>{let x=f.createLinearGradient(0,0,0,256);x.addColorStop(0,"#5f97d6"),x.addColorStop(0.55,"#a9c9ec"),x.addColorStop(1,"#e9eef0"),f.fillStyle=x,f.fillRect(0,0,4,256)}),It=2.8,$t=-It*4-0.18;function Be(){if(xt)return;xt=!0;let f=(()=>{let he=7;return()=>(he=he*16807%2147483647)/2147483647})(),x=new te(new Zs(1400,64).rotateX(-Math.PI/2),l("#8a9a6a",{roughness:1}));x.position.y=$t-0.05,ht.add(x);let v=new te(new Yn(26,34).rotateX(-Math.PI/2),l("#c9b9a3",{roughness:1}));v.position.set(ue.x+3,$t,ue.z+24),v.receiveShadow=!0,ht.add(v);for(let he=0;he<9;he++){let ze=new te(new Yn(0.08,4.6).rotateX(-Math.PI/2),l("#e7c84b"));ze.position.set(ue.x-6+he*2.6,$t+0.01,ue.z+15),ht.add(ze)}let A=["#d8d8d8","#f2f2f2","#9aa1a8","#b3262b","#2b2f36","#c9ccd0"];for(let he=0;he<14;he++){let ze=k(1.8,1.3,4.2,l(A[he%6],{metalness:0.4,roughness:0.35}),0.35);ze.position.set(ue.x-6+he%7*2.6+(he>6?0:0),$t+0.65,ue.z+15+(he>6?9:0)),ze.castShadow=!0,ht.add(ze)}let L=l("#eeeeea",{roughness:0.9}),G=l("#c4c6c4",{roughness:0.9}),q=(he,ze,Oe,He,li,ci=0,wn=!0)=>{let Ge=new Dt,hi=li*It;T(Ge,J(Oe,hi,He,L),0,hi/2,0),T(Ge,J(Oe+0.1,It*1.3,He+0.1,G),0,It*0.65,0),T(Ge,J(Oe*0.3,2.2,He*0.5,G),0,hi+1.1,0);for(let vn=0;vn<li;vn++)for(let Fn=0;Fn<Math.floor(Oe/3.2);Fn++){let Ti=-Oe/2+1.6+Fn*3.2,wi=vn*It+1.5;if(T(Ge,J(1.2,1.1,0.05,l("#55606b",{roughness:0.2,metalness:0.3})),Ti,wi,He/2+0.02),T(Ge,J(1.2,1.1,0.05,l("#55606b",{roughness:0.2,metalness:0.3})),Ti,wi,-He/2-0.02),wn&&Fn%2===0&&vn>0)T(Ge,J(2.4,0.08,1,L),Ti,vn*It,He/2+0.5),T(Ge,J(2.4,1,0.04,l("#f4f4f2",{transparent:!0,opacity:0.55})),Ti,vn*It+0.5,He/2+1)}return Ge.position.set(he,$t,ze),Ge.rotation.y=ci,Ge.traverse((vn)=>{if(vn.isMesh)vn.castShadow=!0,vn.receiveShadow=!0}),ht.add(Ge),Ge},pt=J(u(332)-u(46)+0.2,-$t,d(350)-d(16)+0.2,L);pt.position.set((u(46)+u(332))/2,$t/2-0.09,(d(16)+d(350))/2),pt.receiveShadow=!0,ht.add(pt);for(let he=0;he<4;he++){let ze=J(u(332)-u(46)+0.25,0.12,0.05,G);ze.position.set((u(46)+u(332))/2,$t+(he+1)*It,d(350)+0.12),ht.add(ze)}q(ue.x-21,ue.z+32,24,11,5,Math.PI/2),q(ue.x-22,ue.z+8,20,11,5,Math.PI/2),q(ue.x+26,ue.z-6,20,11,5,-Math.PI/2),q(ue.x-4,ue.z-26,22,11,5,Math.PI);let zt=J(70,2.2,0.2,l("#d9d6cf"));zt.position.set(ue.x,$t+1.1,ue.z+44),ht.add(zt);let oe=l("#4f7d36",{roughness:1}),me=l("#6b9a43",{roughness:1}),ee=l("#6d4c35"),De=(he,ze,Oe=1)=>{let He=new Dt;T(He,H(0.15*Oe,0.2*Oe,2.5*Oe,ee,6),0,1.25*Oe,0),T(He,wt(1.6*Oe,f()>0.5?oe:me,8),0,3.2*Oe,0),He.position.set(he,$t,ze),ht.add(He)};for(let he=0;he<26;he++)De(ue.x-34+he*2.8,ue.z+47+f()*3,0.8+f()*0.6);for(let he=0;he<10;he++)De(ue.x-30+f()*10,ue.z-30+f()*60,0.9+f()*0.5);let Fe=new sn(1,1,1),nn=700,Wn=300,rr=new Ys(Fe,l("#f1ece2",{roughness:1}),nn),bs=new Ys(Fe,l("#b4593a",{roughness:1}),nn),Ts=new Ys(Fe,l("#e3e2de",{roughness:0.9}),Wn),Gi=new Re,ar=new In,oa=new O,la=new O,Kc=new _e;for(let he=0;he<nn;he++){let ze=(f()-0.5)*Math.PI*1.7+(f()>0.25?0:Math.PI),Oe=60+f()*340,He=ue.x+Math.sin(ze)*Oe,li=ue.z+Math.cos(ze)*Oe,ci=5+f()*5,wn=5+f()*6,Ge=3+Math.floor(f()*3)*2.8,hi=f()*Math.PI;ar.setFromAxisAngle(new O(0,1,0),hi),Gi.compose(oa.set(He,$t-6+Oe*0.02+Ge/2,li),ar,la.set(ci,Ge,wn)),rr.setMatrixAt(he,Gi),Gi.compose(oa.set(He,$t-6+Oe*0.02+Ge+0.25,li),ar,la.set(ci+0.6,0.5,wn+0.6)),bs.setMatrixAt(he,Gi)}for(let he=0;he<Wn;he++){let ze=(f()-0.5)*Math.PI*0.9,Oe=300+f()*900,He=ue.x+Math.sin(ze)*Oe,li=ue.z+Math.cos(ze)*Oe,ci=12+f()*14,wn=12+f()*(Oe>700?55:30);Gi.compose(oa.set(He,$t-8+wn/2+Oe*0.01,li),ar.identity(),la.set(ci,wn,ci*(0.7+f()*0.6))),Ts.setMatrixAt(he,Gi);let Ge=0.82+f()*0.15;Ts.setColorAt(he,Kc.setRGB(Ge,Ge*(0.97+f()*0.04),Ge*0.96))}[rr,bs,Ts].forEach((he)=>{if(he.instanceMatrix.needsUpdate=!0,he.instanceColor)he.instanceColor.needsUpdate=!0;ht.add(he)});for(let he=0;he<16;he++){let ze=(f()-0.5)*Math.PI*1.6,Oe=140+f()*250,He=new te(new ps(30+f()*40,12,8),l(f()>0.5?"#5f7f45":"#6f8c4f",{roughness:1}));He.scale.y=0.25,He.position.set(ue.x+Math.sin(ze)*Oe,$t-6,ue.z+Math.cos(ze)*Oe),ht.add(He)}let Ho=(he,ze,Oe,He)=>{let wn=new Qe,Ge=[],hi=[];for(let Fn=0;Fn<=160;Fn++){let Ti=-1300+Fn*2600/160,wi=Fn/160,jc=ze*(0.55+0.25*Math.sin(wi*9+He)+0.12*Math.sin(wi*23+He*2)+0.08*Math.sin(wi*57))*(1-Math.pow(Math.abs(wi-0.5)*1.6,3));if(Ge.push(Ti,$t-20,0,Ti,$t+Math.max(10,jc),-12),Fn<160){let Wi=Fn*2;hi.push(Wi,Wi+2,Wi+1,Wi+1,Wi+2,Wi+3)}}wn.setAttribute("position",new Ce(Ge,3)),wn.setIndex(hi),wn.computeVertexNormals();let vn=new te(wn,new Zn({color:Oe,roughness:1,side:Pn}));vn.position.set(ue.x,0,ue.z+he),ht.add(vn)};Ho(1700,330,"#7189a6",0.3),Ho(1350,170,"#82977a",1.7)}let ke=!1,be=()=>{let f=ke&&!fe;ht.visible=f,re.visible=!f,n.background=f?Nt:null,n.fog=f?new Vr("#dfe7ee",260,2300):null,a.maxPolarAngle=f?1.56:1.35,a.maxDistance=f?60:30,e.shadowMap.needsUpdate=!0},Un=new Dt;n.add(Un);let Nn=new Zn({color:"#e0962e",transparent:!0,opacity:0.38}),ea=new fs({color:"#c47a12"}),gn=new Dt;n.add(gn);let Kn=new Map,ys=l("#a9784d",{roughness:0.55}),Mi=l("#f2f1ec",{roughness:0.5}),Gn=l("#8b8f98",{roughness:1,map:Hi("#8b8f98")});function tr(f){let x=new Dt,v=f.l/100,A=f.p/100,L=f.a/100,G=(q,pt,zt,oe=M)=>T(x,H(0.018,0.018,zt,oe,8),q,zt/2,pt);if(f.tipo==="mesa")T(x,k(v,0.035,A,ys,0.01),0,L-0.018,0),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([q,pt])=>G(q*(v/2-0.05),pt*(A/2-0.05),L-0.03));else if(f.tipo==="cadeira")T(x,k(v,0.05,A,Gn,0.02),0,Math.min(0.47,L*0.5),0),T(x,k(v,L*0.45,0.04,Gn,0.02),0,L*0.75,-A/2+0.03),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([q,pt])=>G(q*(v/2-0.04),pt*(A/2-0.04),Math.min(0.45,L*0.48)));else if(f.tipo==="estante"){[-1,1].forEach((q)=>T(x,J(0.02,L,A,Mi),q*(v/2-0.01),L/2,0));for(let q=0;q<=4;q++)T(x,J(v,0.02,A,Mi),0,0.02+q*(L-0.04)/4,0);T(x,J(v,L,0.01,Mi),0,L/2,-A/2)}else if(f.tipo==="tapete")T(x,k(v,0.012,A,l("#c9b89a",{roughness:1,map:Jc("#c9b89a","#a99673")}),0.004),0,0.006,0);else if(f.tipo==="cama")T(x,k(v,0.3,A,l("#3a3a3f"),0.02),0,0.15,0),T(x,k(v-0.04,0.18,A-0.04,l("#eeeae2"),0.05),0,0.39,0),T(x,Ct(v,A*0.75,l("#7d8aa0",{side:Pn,roughness:0.8}),0.15),0,0.5,A*0.1);else if(f.tipo==="sofa")T(x,k(v,L*0.5,A,Gn,0.04),0,L*0.25,0),T(x,k(v,L*0.5,0.18,Gn,0.05),0,L*0.7,-A/2+0.09),[-1,1].forEach((q)=>T(x,k(0.14,L*0.7,A,Gn,0.05),q*(v/2-0.07),L*0.35,0));else if(f.tipo==="armario")T(x,k(v,L,A,Mi,0.01),0,L/2,0),T(x,J(0.004,L-0.06,0.004,l("#ccc")),0,L/2,A/2+0.002),[-1,1].forEach((q)=>dt(x,q*0.05,L*0.55,A/2+0.015,!0,0.14));else if(f.tipo==="fantasma"){let q=T(x,J(v,L,A,new Zn({color:"#e0962e",transparent:!0,opacity:0.4})),0,L/2+0.005,0);q.castShadow=!1,T(x,new oo(new mo(new sn(v,L,A)),new fs({color:"#c47a12"})),0,L/2+0.005,0)}else T(x,k(v,L,A,ys,0.01),0,L/2,0);return x.position.set(f.x,0,f.z),x.rotation.y=f.rot||0,x.userData.extra=f.id,x.traverse((q)=>{if(q.userData.extra=f.id,q.isMesh&&f.tipo!=="fantasma")q.castShadow=!0,q.receiveShadow=!0}),x}let ki=new Set(["balcao","pia-cozinha","box","vaso","pia-banheiro","tanque","varal-teto","armario-cozinha","guarda-roupa-escritorio","guarda-roupa-casal","quadro-branco","quadro-sala","quadro-quarto","cortina-sala","microondas","filtro","escorredor","fogao"]),er=[["a porta de entrada",50,126,74,160],["a porta do banheiro",194,186,216,212],["a porta do escritório",208,202,236,232],["a porta do quarto",200,224,228,246],["a porta da varanda",60,294,150,314]],vs=(f)=>new Dn().setFromObject(f);function nr(f,x){let v=vs(f);if(v.expandByVector(new O(-0.03,0,-0.03)),v.min.y>1.2)return"";for(let[L,G,q,pt,zt]of er)if(!(x.startsWith&&x.startsWith("tapete"))&&v.max.x>u(G)&&v.min.x<u(pt)&&v.max.z>d(q)&&v.min.z<d(zt))return"Atrapalha "+L;for(let L of ft){let G=new Dn().setFromObject(L.corpo);if(G.min.y=0,G.intersectsBox(v))return"Bate na parede"}let A=[...[...Pe.entries()].map(([L,G])=>[L,G]),...[...Kn.entries()].map(([L,G])=>[L,G])];for(let[L,G]of A){if(G===f||L.startsWith("tapete")||G.userData.extra&&Ms.get(L)==="tapete")continue;let q=vs(G);if(q.min.y>1.2||q.max.y<0.05)continue;if(q.intersectsBox(v))return"Bate em "+(C(L)||"outro móvel")}return""}let Ms=new Map,Ss=new Map,C=(f)=>Ss.get(f)||ae.find((x)=>x.id===f)?.nome,Z=[];[...je,X].forEach(([f,x])=>{let v=u((f[0]+x[0])/2),A=d((f[1]+x[1])/2),L=f[0]===x[0],G=new O(v+(L?-1.4:0),0,A+(L?0:A>ue.z?-1.4:1.4)),q=new vo(16773596,0,6,0.75,0.8,1.2);q.position.set(v+(L?0.6:0),2.2,A+(L?0:A>ue.z?0.6:-0.6)),q.target.position.copy(G),n.add(q,q.target),Z.push(q)});let et=E.map((f)=>{let x=new js(16766883,0,Math.max(4,S(Math.max(f.w,f.h))*1.8),1.6);return x.position.set(u(f.x+f.w/2),2.35,d(f.y+f.h/2)),n.add(x),x}),tt=n.children.find((f)=>f.isHemisphereLight),Y=[];gt.get("criado")?.forEach((f)=>{let x=f.material;if(x.emissive&&Math.abs(x.emissiveIntensity-0.35)<0.01)Y.push(x)});let Tt=14,Rt=!1;function Wt(){let f=Tt,x=Math.max(0,Math.sin(Math.PI*(f-6)/13)),v=f<6.3||f>18.7,A=Math.PI*(f-6)/13;if(p.position.set(ue.x-Math.cos(A)*10,1+x*12,ue.z+6-Math.sin(A)*2),p.intensity=v?0:(Rt?2.6:2.3)*Math.pow(x,0.45),p.color.set(x<0.35?"#ffb27a":"#fff2e0"),tt)tt.intensity=v?0.22:0.45+x*(Rt?0.7:0.85),tt.color.set(v?"#7f8fb5":"#ffffff");if(n.environmentIntensity=v?0.08:(Rt?0.85:0.55)*(0.35+0.65*x),et.forEach((L)=>L.intensity=v?2.2:0),Z.forEach((L)=>L.intensity=v?0:(Rt?3.2:1.2)*x),Y.forEach((L)=>{L.emissiveIntensity=v?1.6:0.35}),e.toneMappingExposure=v?0.95:Rt?1.12:1.05,n.background&&ke)n.background=v?qt:Nt;if(n.fog)n.fog.color.set(v?"#2b3448":"#dfe7ee");e.shadowMap.needsUpdate=!0,en?.()}let qt=bn(4,256,(f)=>{let x=f.createLinearGradient(0,0,0,256);x.addColorStop(0,"#0d1630"),x.addColorStop(0.6,"#2b3a5c"),x.addColorStop(1,"#4a4a5e"),f.fillStyle=x,f.fillRect(0,0,4,256)}),ce=ie.find((f)=>f.userData.piso)?.material;function pe(){e.setPixelRatio(Math.min(devicePixelRatio,Rt?2.5:1.75)),ra(),e.shadowMap.type=Rt?Yl:Ja,p.shadow.radius=Rt?7:3,p.shadow.blurSamples=16;let f=Rt?4096:2048;if(p.shadow.mapSize.x!==f)p.shadow.mapSize.set(f,f),p.shadow.map?.dispose(),p.shadow.map=null;if(ce)ce.roughness=Rt?0.14:0.35,ce.envMapIntensity=Rt?1.4:1;n.traverse((x)=>{let v=x;if(v.isMesh)[].concat(v.material).forEach((A)=>A.needsUpdate=!0)}),Wt()}let Yt=new En(new O(0,-1,0),qc+0.02),Se=!0,fe=!1,Ee=!1,tn=()=>{},Te="";function Jt(f=!1){let x=a.target,v=s.position,A=[x.x,x.z,v.x,v.z].map((q)=>q.toFixed(1)).join();if(!f&&A===Te)return!1;Te=A;let L=(q)=>{let pt=(x.x-q.seg.x)*q.seg.nx+(x.z-q.seg.z)*q.seg.nz,zt=(v.x-q.seg.x)*q.seg.nx+(v.z-q.seg.z)*q.seg.nz;return pt*zt<0&&Math.abs(zt)>0.15},G=!1;if(ft.forEach((q)=>{let pt=L(q);if(pt!==!!q.cortada)q.cortada=pt,K(q,pt?Yc:$n),G=!0}),Kt.forEach((q)=>{let pt=L(q);if(pt!==!!q.cortada)q.cortada=pt,K(q,pt?Yc:1),G=!0}),_t.forEach((q)=>{let pt=L(q);if(pt!==!!q.cortada)q.cortada=pt,q.corpo.visible=!pt,q.topo.visible=q.comTopo&&!pt,G=!0}),Pt.forEach((q)=>{let pt=!L(q);if(q.corpo.visible!==pt)q.corpo.visible=pt,G=!0}),G)e.shadowMap.needsUpdate=!0;return G}let hn=()=>{let f=fe?$n:Se?$n:qc;if(ft.forEach((v)=>K(v,f)),Kt.forEach((v)=>{v.cortada=!1,K(v,Math.min(1,f))}),_t.forEach((v)=>{v.cortada=!1,v.corpo.visible=f===$n&&!fe,v.topo.visible=v.comTopo&&v.corpo.visible}),Pt.forEach((v)=>v.corpo.visible=f===$n||fe),ft.forEach((v)=>v.cortada=!1),!fe&&Se&&!Ee)Jt(!0);let x=!fe&&!Se?[Yt]:[];Et.forEach((v)=>{v.clippingPlanes=x,v.needsUpdate=!0}),Me.forEach((v)=>v.visible=!fe),[Bt,de].forEach((v)=>v.visible=!fe)},se=null,fn=()=>{},_n=new bo,rn=new Mt,pn=null,Ae=e.domElement,xn=!1,jn=()=>{},Ie=null,Tn=!1,yn=()=>{},$e=[],Es=new Dt;n.add(Es);let na=new En(new O(0,1,0),0),ia=(f)=>{let x=Ae.getBoundingClientRect();rn.set((f.clientX-x.left)/x.width*2-1,-((f.clientY-x.top)/x.height)*2+1),_n.setFromCamera(rn,o)},Do=(f)=>{while(f){if(!f.visible)return!1;f=f.parent}return!0},Lo=()=>_n.intersectObjects([...ie,gn,...ft.map((f)=>f.corpo)],!0).find((f)=>Do(f.object)&&!(f.object.material?.transparent&&!f.object.userData.extra)),ir=(f,x,v,A)=>{let L=v==="movel"?V.get(x):new O;jn({id:x,tipo:v,dx:+(f.position.x-L.x).toFixed(3),dz:+(f.position.z-L.z).toFixed(3),x:+f.position.x.toFixed(3),z:+f.position.z.toFixed(3),rot:+f.rotation.y.toFixed(4),colisao:nr(f,x),fim:A})},Uo=(f,x)=>f.traverse((v)=>{let A=v.material;if(A&&A.emissive&&!Array.isArray(A))A.emissive.setHex(x)}),Si=null,Ei=0,sr=-0.1,bi=null;Ae.addEventListener("pointerdown",(f)=>{if(pn={x:f.clientX,y:f.clientY,t:Date.now()},Ee){Si={x:f.clientX,y:f.clientY,yaw:Ei,pitch:sr};return}if(!xn||Tn)return;ia(f);let x=Lo();if(!x)return;let v=x.object.userData.movel,A=x.object.userData.extra,L=A?"extra":"movel",G=A||v;if(!G)return;if(L==="movel"&&ki.has(G)){jn({id:G,tipo:L,dx:0,dz:0,x:0,z:0,rot:0,colisao:"",fixo:!0,fim:!0});return}let q=L==="movel"?Pe.get(G):Kn.get(G);if(!q)return;let pt=new O;_n.ray.intersectPlane(na,pt),Ie={obj:q,id:G,tipo:L,off:q.position.clone().sub(pt)},h.enabled=!1,Ae.setPointerCapture(f.pointerId),ir(q,G,L,!1)}),Ae.addEventListener("pointermove",(f)=>{if(Ee&&Si){Ei=Si.yaw-(f.clientX-Si.x)*0.005,sr=Math.max(-1.2,Math.min(1.2,Si.pitch-(f.clientY-Si.y)*0.004)),en();return}if(!Ie)return;ia(f);let x=new O;if(!_n.ray.intersectPlane(na,x))return;let v=(L)=>Math.round(L/0.02)*0.02;Ie.obj.position.x=v(x.x+Ie.off.x),Ie.obj.position.z=v(x.z+Ie.off.z);let A=nr(Ie.obj,Ie.id);Uo(Ie.obj,A?9048080:6961664),e.shadowMap.needsUpdate=!0,en(),ir(Ie.obj,Ie.id,Ie.tipo,!1)}),Ae.addEventListener("pointerup",(f)=>{if(Si=null,Ie){let v=Ie;Ie=null,h.enabled=!Ee,Uo(v.obj,6961664),ir(v.obj,v.id,v.tipo,!0),pn=null;return}if(!pn||Math.hypot(f.clientX-pn.x,f.clientY-pn.y)>8||Date.now()-pn.t>600){pn=null;return}if(pn=null,ia(f),Ee){let v=new O;if(_n.ray.intersectPlane(na,v))bi=new O(v.x,1.6,v.z);return}if(Tn){let v=_n.intersectObjects([...ie,gn,...ft.map((L)=>L.corpo)],!0).find((L)=>Do(L.object));if(!v)return;if($e.length>=2)$e.length=0,Es.clear();$e.push(v.point.clone());let A=new te(new ps(0.035,12,10),new Bi({color:"#e0662e"}));if(A.position.copy(v.point),Es.add(A),$e.length===2){let L=new Xr(new Qe().setFromPoints($e),new fs({color:"#e0662e",depthTest:!1}));L.renderOrder=9,Es.add(L),yn(Math.round($e[0].distanceTo($e[1])*100))}else yn(null);en();return}let x=Lo();if(!x||!(x.object.userData.movel||x.object.userData.piso))return;fn({movel:x.object.userData.movel,x:x.point.x*40+50,y:x.point.z*40+20})});let sa=null,ra=()=>{let{clientWidth:f,clientHeight:x}=t;e.setSize(f,x,!1),s.aspect=f/Math.max(1,x),s.updateProjectionMatrix();let v=f/Math.max(1,x),A=Math.max(8.9,7.6/v)/2;Object.assign(r,{left:-A*v,right:A*v,top:A,bottom:-A}),r.updateProjectionMatrix()},No=new ResizeObserver(ra);No.observe(t),ra();let aa=()=>{let f=Math.max(1,1.12/s.aspect);return{t:ue.clone().add(new O(0,0,0.2)),p:new O(ue.x-0.3*f,11.5*f,ue.z+7.2*f)}},Fo=aa();s.position.copy(Fo.p),a.target.copy(Fo.t),r.position.set(ue.x,20,ue.z),r.up.set(0,0,-1),r.lookAt(ue),c.target.copy(ue),hn(),e.shadowMap.needsUpdate=!0;let Oo=0,Bo=!0,oi=2,en=()=>{oi=2};a.addEventListener("change",en),c.addEventListener("change",en),new ResizeObserver(en).observe(t);let zo=()=>{if(!Bo)return;if(se)oi=2;if(Ee)se=null;if(se&&!fe){if(a.target.lerp(se.t,0.12),s.position.lerp(se.p,0.12),s.position.distanceTo(se.p)<0.02)se=null}if(se&&fe){if(c.target.lerp(se.t,0.15),r.position.lerp(new O(se.t.x,20,se.t.z),0.15),r.zoom+=(se.p.y-r.zoom)*0.15,r.updateProjectionMatrix(),Math.abs(r.zoom-se.p.y)<0.01)se=null}if(Ee){if(bi){if(s.position.lerp(bi,0.12),s.position.distanceTo(bi)<0.02)bi=null;oi=2}s.rotation.set(sr,Ei,0,"YXZ")}else if(h.update())oi=2;if(oi>0&&!fe&&Se&&!Ee&&Jt())oi=2;if(oi>0)oi--,e.render(n,o),tn();Oo=requestAnimationFrame(zo)};return zo(),Wt(),{focar(f){let x=E.find((G)=>G.id===f);if(fe){se={t:x?new O(u(x.x+x.w/2),0,d(x.y+x.h/2)):ue.clone(),p:new O(0,x?Math.min(3.2,7/Math.max(S(x.w),S(x.h),1.6)):1,0)};return}if(!x){se=aa();return}let v=new O(u(x.x+x.w/2),0,d(x.y+x.h/2)),A=Math.max(S(x.w),S(x.h),1.8),L=Math.max(1,0.9/s.aspect);se={t:v,p:v.clone().add(new O(A*0.3*L,(3.2+A*1.7)*L,(2.2+A*1.4)*L))}},selecionar(f){if(sa)gt.get(sa)?.forEach((x)=>x.material.emissive?.setHex(0));if(sa=f,f)gt.get(f)?.forEach((x)=>x.material.emissive?.setHex(6961664));en()},topo(f){let x=gt.get(f);if(!x?.length)return null;let v=new Dn;x.forEach((L)=>v.expandByObject(L));let A=v.getCenter(new O);return{x:A.x,y:Math.min(v.max.y,2.3),z:A.z}},onToque(f){fn=f},modo(f){fe=f,se=null,o=f?r:s,h=f?c:a,c.enabled=f,a.enabled=!f,p.castShadow=!f,hn(),be(),e.shadowMap.needsUpdate=!0,en()},paredes(f){Se=f,hn(),e.shadowMap.needsUpdate=!0,en()},paisagem(f){if(ke=f,f)Be();be(),en()},vistaVaranda(){if(fe)return;if(!ke)ke=!0,Be(),be();let f=new O(u(110),1.6,d(316));se={t:f.clone().add(new O(0.3,0.45,4)),p:f}},aplicarLayout(f){Pe.forEach((x,v)=>{let A=V.get(v),L=f.moveis[v];x.position.set(A.x+(L?.dx||0),0,A.z+(L?.dz||0)),x.rotation.y=L?.rot||0}),gn.clear(),Kn.clear(),Ms.clear(),Ss.clear(),f.extras.forEach((x)=>{let v=tr(x);gn.add(v),Kn.set(x.id,v),Ms.set(x.id,x.tipo),Ss.set(x.id,x.nome)}),e.shadowMap.needsUpdate=!0,en()},editar(f){if(xn=f,!f)Ie=null},onEditar(f){jn=f},girar(f,x){let v=x==="movel"?Pe.get(f):Kn.get(f);if(!v)return;v.rotation.y=(v.rotation.y+Math.PI/2)%(Math.PI*2),e.shadowMap.needsUpdate=!0,en(),ir(v,f,x,!0)},trena(f){Tn=f,$e.length=0,Es.clear(),yn(null),en()},onTrena(f){yn=f},trenaMeio(){return $e.length===2?{x:($e[0].x+$e[1].x)/2,y:($e[0].y+$e[1].y)/2+0.08,z:($e[0].z+$e[1].z)/2}:null},passeio(f,x){if(f===Ee)return;if(Ee=f,se=null,f){if(fe)fe=!1,o=s,h=a,c.enabled=!1;if(!x||x==="sala"||x==="jantar")s.position.set(2.5,1.6,3),Ei=Math.PI;else{let v=E.find((A)=>A.id===x)||E[3];s.position.set(u(v.x+v.w/2),1.6,d(v.y+v.h/2)),Ei=Math.atan2(s.position.x-ue.x,s.position.z-ue.z)}sr=-0.12,a.enabled=!1,s.fov=62,s.near=0.05,s.updateProjectionMatrix(),hn(),ft.forEach((v)=>K(v,$n)),_t.forEach((v)=>{v.corpo.visible=!0}),Pt.forEach((v)=>v.corpo.visible=!0)}else{s.fov=32,s.near=0.1,s.updateProjectionMatrix(),s.rotation.set(0,0,0),a.enabled=!0;let v=aa();s.position.copy(v.p),a.target.copy(v.t),s.lookAt(v.t),hn()}e.shadowMap.needsUpdate=!0,en()},andar(f){if(!Ee)return;let x=new O(-Math.sin(Ei),0,-Math.cos(Ei));bi=s.position.clone().addScaledVector(x,f),bi.y=1.6,en()},foto(f){Rt=f,pe()},hora(f){Tt=f,Wt()},longe(){return fe?r.zoom<1.5:Ee?!1:s.position.distanceTo(a.target)>9},projetar(f,x,v){let A=new O(f,x,v).project(o);return{x:(A.x+1)/2*t.clientWidth,y:(1-A.y)/2*t.clientHeight,ok:A.z<1}},onMudou(f){tn=f,en()},destruir(){Bo=!1,cancelAnimationFrame(Oo),No.disconnect(),a.dispose(),c.dispose(),i.dispose(),e.dispose(),n.traverse((f)=>{f.geometry?.dispose()}),e.domElement.remove()}}}export{R0 as criarCena};
