'use strict';var aa=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return ea(a())}
da("globalThis",function(a){return a||ca});
da("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};g[0]===""&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t=this||self;function v(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function ha(a){var b=typeof a;b=b!="object"?b:a?Array.isArray(a)?"array":b:"null";return b=="array"||b=="object"&&typeof a.length=="number"}
function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function la(a,b,c){la=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ia:ja;return la.apply(null,arguments)}
function w(a,b){a=a.split(".");for(var c=t,d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ma(a){return a}
function na(a,b){function c(){}
c.prototype=b.prototype;a.Ka=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ub=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function oa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,oa);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
na(oa,Error);oa.prototype.name="CustomError";function pa(a){return a}
;const qa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let ra=globalThis.trustedTypes,sa;function ta(){let a=null;if(!ra)return a;try{const b=c=>c;
a=ra.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(b){}return a}
;var ua=class{constructor(a){this.h=a}toString(){return this.h+""}};function va(a,b=`unexpected value ${a}!`){throw Error(b);}
;function wa(a,b){Array.prototype.forEach.call(a,b,void 0)}
function xa(a,b){return Array.prototype.map.call(a,b,void 0)}
function ya(a,b){b=Array.prototype.indexOf.call(a,b,void 0);b>=0&&Array.prototype.splice.call(a,b,1)}
function za(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ha(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Aa(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Ba(a){var b=v("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};let c,d;var e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(f){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(f){d="Not available",e=!0}b=Ca(a);if(!(!e&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){e=a.message;if(e==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)e=a.constructor.name;else if(e=a.constructor,Da[e])e=Da[e];else{e=String(e);if(!Da[e]){const f=/function\s+([^\(]+)/m.exec(e);Da[e]=f?f[1]:"[Anonymous]"}e=Da[e]}e='Unknown Error of type "'+e+'"'}else e="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(e+=": "+a.toString())}return{message:e,name:a.name||"UnknownError",lineNumber:c,fileName:d,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Ca(a,b){b||(b={});b[Ea(a)]=!0;let c=a.stack||"";var d=a.cause;d&&!b[Ea(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Ca(d,b));a=a.errors;if(Array.isArray(a)){d=1;let e;for(e=0;e<a.length&&!(d>4);e++)b[Ea(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Ca(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Ea(a){let b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Da={};var Fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ga(a){return a?decodeURI(a):a}
function Ha(a,b,c){if(Array.isArray(b))for(let d=0;d<b.length;d++)Ha(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Ia(a){const b=[];for(const c in a)Ha(c,a[c],b);return b.join("&")}
;function Ja(a){return(a&192)!==128}
function Ka(){throw Error("Invalid UTF8");}
function La(a,b){b=String.fromCharCode.apply(null,b);return a==null?b:a+b}
let Ma=void 0,Na;const Oa=typeof TextDecoder!=="undefined";function Pa(a){t.setTimeout(()=>{throw a;},0)}
;var Qa,Ra=v("CLOSURE_FLAGS"),Sa=Ra&&Ra[610401301];Qa=Sa!=null?Sa:!1;function Ta(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var Ua;const Va=t.navigator;Ua=Va?Va.userAgentData||null:null;function Wa(a){if(!Qa||!Ua)return!1;for(let b=0;b<Ua.brands.length;b++){const {brand:c}=Ua.brands[b];if(c&&c.indexOf(a)!=-1)return!0}return!1}
function x(a){return Ta().indexOf(a)!=-1}
;function Xa(){return Qa?!!Ua&&Ua.brands.length>0:!1}
;var Ya=x("Safari")&&!((Xa()?Wa("Chromium"):(x("Chrome")||x("CriOS"))&&(Xa()||!x("Edge"))||x("Silk"))||(Xa()?0:x("Coast"))||(Xa()?0:x("Opera"))||(Xa()?0:x("Edge"))||(Xa()?Wa("Microsoft Edge"):x("Edg/"))||(Xa()?Wa("Opera"):x("OPR"))||x("Firefox")||x("FxiOS")||x("Silk")||x("Android"))&&!(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"));var Za={},$a=null;function ab(a,b){b===void 0&&(b=0);bb();b=Za[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function cb(a){const b=a.length;let c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);const d=new Uint8Array(c);let e=0;db(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function db(a,b){function c(e){for(;d<a.length;){const f=a.charAt(d++),g=$a[f];if(g!=null)return g;if(!/^[\s\xa0]*$/.test(f))throw Error("Unknown base64 encoding at char: "+f);}return e}
bb();let d=0;for(;;){const e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function bb(){if(!$a){$a={};var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"];for(let c=0;c<5;c++){const d=a.concat(b[c].split(""));Za[c]=d;for(let e=0;e<d.length;e++){const f=d[e];$a[f]===void 0&&($a[f]=e)}}}}
;var eb=typeof Uint8Array!=="undefined",fb=!(Xa()?0:x("Trident")||x("MSIE"))&&typeof btoa==="function";const gb=/[-_.]/g,hb={"-":"+",_:"/",".":"="};function ib(a){return hb[a]||""}
function jb(a){if(!fb)return cb(a);a=gb.test(a)?a.replace(gb,ib):a;a=atob(a);const b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
var kb={};function lb(){return mb||(mb=new nb(null,kb))}
function ob(a){pb(kb);var b=a.h;b=b==null||eb&&b!=null&&b instanceof Uint8Array?b:typeof b==="string"?jb(b):null;return b==null?b:a.h=b}
var nb=class{sizeBytes(){const a=ob(this);return a?a.length:0}constructor(a,b){pb(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}};let mb;function pb(a){if(a!==kb)throw Error("illegal external caller");}
;let qb=void 0;function rb(a){a=Error(a);Aa(a,"warning");return a}
;var sb=typeof Symbol==="function"&&typeof Symbol()==="symbol";function tb(a,b,c=!1){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?c&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var ub=tb("jas",void 0,!0),vb=tb(void 0,"1oa"),wb=tb(void 0,Symbol()),xb=tb(void 0,"0actk"),yb=tb("m_m","Fb",!0);[...Object.values({cb:1,bb:2,ab:4,jb:8,ib:16,hb:32,Qa:64,pb:128,Ya:256,Xa:512,Va:1024,ob:2048,Wa:4096,Ta:8192,Za:16384,eb:32768})];const zb={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},Ab=Object.defineProperties,z=sb?ub:"Ea";var Bb;const Cb=[];A(Cb,55);Bb=Object.freeze(Cb);function Db(a,b){sb||z in a||Ab(a,zb);a[z]|=b}
function A(a,b){sb||z in a||Ab(a,zb);a[z]=b}
function Eb(a){a[z]&=-3}
;var Fb={};function Gb(a,b){return b===void 0?a.h!==Hb&&!!(2&(a.o[z]|0)):!!(2&b)&&a.h!==Hb}
const Hb={};var Ib=Object.freeze({});function Jb(a,b,c){const d=b&512?0:-1,e=a.length;if(b&64)b&=256;else if(b=!!e)b=a[e-1],b=b!=null&&typeof b==="object"&&b.constructor===Object;const f=e+(b?-1:0);for(let g=0;g<f;g++)c(g-d,a[g]);if(b){a=a[e-1];for(const g in a)!isNaN(g)&&c(+g,a[g])}}
var Kb={};function Lb(){return typeof BigInt==="function"}
;function Mb(a){a.Bb=!0;return a}
;var Nb=Mb(a=>typeof a==="number"),Ob=Mb(a=>typeof a==="string"),Pb=Mb(a=>typeof a==="boolean"),Qb=Mb(a=>a!=null&&typeof a==="object"&&typeof a.then==="function");var Rb=typeof t.BigInt==="function"&&typeof t.BigInt(0)==="bigint";var Xb=Mb(a=>Rb?a>=Sb&&a<=Tb:a[0]==="-"?Ub(a,Vb):Ub(a,Wb));
const Vb=Number.MIN_SAFE_INTEGER.toString(),Sb=Rb?BigInt(Number.MIN_SAFE_INTEGER):void 0,Wb=Number.MAX_SAFE_INTEGER.toString(),Tb=Rb?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Ub(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(let c=0;c<a.length;c++){const d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;const Yb=typeof Uint8Array.prototype.slice==="function";let C=0,D=0;function Zb(a){const b=a>>>0;C=b;D=(a-b)/4294967296>>>0}
function $b(a){if(a<0){Zb(0-a);const [b,c]=ac(C,D);C=b>>>0;D=c>>>0}else Zb(a)}
function cc(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Lb()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+dc(c)+dc(a));return c}
function dc(a){a=String(a);return"0000000".slice(a.length)+a}
function ac(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;const ec=typeof BigInt==="function"?BigInt.asIntN:void 0,fc=Number.isSafeInteger,gc=Number.isFinite,hc=Math.trunc;function ic(a){return a.displayName||a.name||"unknown type name"}
const jc=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function kc(a){switch(typeof a){case "bigint":return!0;case "number":return gc(a);case "string":return jc.test(a);default:return!1}}
function lc(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return gc(a)?a|0:void 0}
function mc(a){if(!kc(a))throw rb("int64");switch(typeof a){case "string":kc(a);var b=hc(Number(a));if(fc(b))a=String(b);else if(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),b=a.length,!(a[0]==="-"?b<20||b===20&&Number(a.substring(0,7))>-922337:b<19||b===19&&Number(a.substring(0,6))<922337)){if(a.length<16)$b(Number(a));else if(Lb())a=BigInt(a),C=Number(a&BigInt(4294967295))>>>0,D=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");D=C=0;var c=a.length;for(let e=0+b,f=(c-b)%6+b;f<=c;e=
f,f+=6){var d=Number(a.slice(e,f));D*=1E6;C=C*1E6+d;C>=4294967296&&(D+=Math.trunc(C/4294967296),D>>>=0,C>>>=0)}if(b){const [e,f]=ac(C,D);C=e;D=f}}a=C;b=D;if(b&2147483648)if(Lb())a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0));else{const [e,f]=ac(a,b);a="-"+cc(e,f)}else a=cc(a,b)}return a;case "bigint":b=a=ec(64,a);if(Ob(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Nb(b)&&!Number.isSafeInteger(b))throw Error(String(b));Rb?a=BigInt(a):a=Pb(a)?a?"1":"0":Ob(a)?a.trim()||"0":
String(a);return a;default:kc(a);a=hc(a);if(!fc(a)){$b(a);b=C;c=D;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:cc(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}}
function nc(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function E(a){return a==null||typeof a==="string"?a:void 0}
function oc(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${ic(b)} but got ${a&&ic(a.constructor)}`);return a}
function pc(a,b,c){if(a!=null&&typeof a==="object"&&a[yb]===Fb)return a;if(Array.isArray(a)){var d=a[z]|0;c=d|c&32|c&2;c!==d&&A(a,c);return new b(a)}}
;function qc(a){return a}
;function rc(a){const b=ma(wb);return b?a[b]:void 0}
function sc(a,b){for(const c in a)!isNaN(c)&&b(a,+c,a[c])}
function tc(a){const b=new uc;sc(a,(c,d,e)=>{b[d]=Array.prototype.slice.call(e)});
b.h=a.h;return b}
var uc=class{};function vc(a,b,c,d,e){const f=d?!!(b&32):void 0;d=[];var g=a.length;let h,k,l,p=!1;if(b&64){if(b&256?(g--,h=a[g],k=g):(k=4294967295,h=void 0),!(e||b&512)){p=!0;var n;l=((n=wc)!=null?n:qc)(h?k- -1:b>>16&1023||536870912,-1,a,h);k=l+-1}}else k=4294967295,b&1||(h=g&&a[g-1],h!=null&&typeof h==="object"&&h.constructor===Object?(g--,k=g,l=0):h=void 0);n=void 0;for(let m=0;m<g;m++){let u=a[m];if(u!=null&&(u=c(u,f))!=null)if(m>=k){var q=void 0;((q=n)!=null?q:n={})[m- -1]=u}else d[m]=u}if(h)for(let m in h)if(q=
h[m],q!=null&&(q=c(q,f))!=null)if(g=+m,g<l)d[g+-1]=q;else{let u;((u=n)!=null?u:n={})[m]=q}n&&(p?d.push(n):d[k]=n);e&&(A(d,b&67043905|(n!=null?290:34)),ma(wb)&&(a=rc(a))&&a instanceof uc&&(d[wb]=tc(a)));return d}
function xc(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Xb(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[z]|0;return a.length===0&&b&1?void 0:vc(a,b,xc,!1,!1)}if(a[yb]===Fb)return yc(a);if(a instanceof nb){const e=a.h;if(e==null)a="";else if(typeof e==="string")a=e;else{if(fb){b="";for(var c=0,d=e.length-10240;c<d;)b+=String.fromCharCode.apply(null,e.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?e.subarray(c):
e);b=btoa(b)}else b=ab(e);a=a.h=b}return a}return}return a}
let wc;function yc(a){a=a.o;return vc(a,a[z]|0,xc,void 0,!1)}
;let zc,Ac;function Bc(a){switch(typeof a){case "boolean":return zc||(zc=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Ac||(Ac=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function Cc(a,b,c){a=Dc(a,b[0],b[1],c?1:2);b!==zc&&c&&Db(a,8192);return a}
function Dc(a,b,c,d){if(a==null){var e=32;c?(a=[c],e|=512):a=[];b&&(e=e&-67043329|(b&1023)<<16)}else{if(!Array.isArray(a))throw Error("narr");e=a[z]|0;16384&e&&!(2&e)&&Ec();if(e&1024)throw Error("farr");if(e&64)return d!==3||e&16384||A(a,e|16384),a;if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;e&=-257;var f=c.length;if(f){var g=f-1;const k=c[g];if(k!=null&&typeof k==="object"&&k.constructor===Object){e|=256;b=e&512?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var h in k)f=+h,f<g&&(c[f+b]=k[h],
delete k[h]);e=e&-67043329|(g&1023)<<16;break a}}if(b){h=Math.max(b,f-(e&512?0:-1));if(h>1024)throw Error("spvt");e=e&-67043329|(h&1023)<<16}}}e|=64;d===3&&(e|=16384);A(a,e);return a}
function Ec(){if(xb!=null){var a;var b=(a=qb)!=null?a:qb={};a=b[xb]||0;a>=5||(b[xb]=a+1,b=Error(),Aa(b,"incident"),Pa(b))}}
;function Fc(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){const d=a[z]|0;if(a.length===0&&d&1)return;if(d&2)return a;var c;if(c=b)c=(!!(32&d)||!(1&d))&&!(1&d&&!(16&d));return c?(Db(a,34),d&4&&Object.freeze(a),a):vc(a,d,Fc,b!==void 0,!0)}if(a[yb]===Fb)return b=a.o,c=b[z]|0,Gb(a,c)?a:vc(b,c,Fc,!0,!0);if(a instanceof nb)return a}
function Gc(a){const b=a.o,c=b[z]|0;if(!Gb(a,c))return a;a=new a.constructor(vc(b,c,Fc,!0,!0));Eb(a.o);return a}
function Hc(a){if(a.h!==Hb)return!1;let b=a.o;b=vc(b,b[z]|0,Fc,!0,!0);Eb(b);a.o=b;a.h=void 0;return!0}
function Ic(a){if(!Hc(a)&&Gb(a,a.o[z]|0))throw Error();}
;function F(a,b,c){Object.isExtensible(a);return Jc(a.o,b,c)}
function Jc(a,b,c,d){if(b===-1)return null;const e=b+(c?0:-1),f=a.length-1;let g,h;if(!(f<1+(c?0:-1))){if(e>=f)if(g=a[f],g!=null&&typeof g==="object"&&g.constructor===Object)c=g[b],h=!0;else if(e===f)c=g;else return;else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function Kc(a,b,c){Ic(a);const d=a.o;H(d,d[z]|0,b,c);return a}
function H(a,b,c,d,e){const f=c+(e?0:-1);var g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){const h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;if(d!==void 0){let h;g=((h=b)!=null?h:b=a[z]|0)>>16&1023||536870912;c>=g?d!=null&&(a[g+(e?0:-1)]={[c]:d},b|=256,A(a,b)):a[f]=d}return b}
function Lc(a,b,c){a=Jc(a,b,c);return Array.isArray(a)?a:Bb}
function Mc(a,b){a===0&&(a=Nc(a,b),a|=16);return a|1}
function Oc(a){return!!(2&a)&&!!(4&a)||!!(1024&a)}
function Pc(a){if(sb){var b;return(b=a[vb])!=null?b:a[vb]=new Map}if(vb in a)return a[vb];b=new Map;Object.defineProperty(a,vb,{value:b});return b}
function Qc(a,b,c,d){let e=a.get(d);if(e!=null)return e;e=0;for(let f=0;f<d.length;f++){const g=d[f];Jc(b,g)!=null&&(e!==0&&(c=H(b,c,e)),e=g)}a.set(d,e);return e}
function Rc(a,b,c){let d=a[z]|0;const e=d&512?Kb:void 0,f=Jc(a,c,e);let g;if(f!=null&&f[yb]===Fb)return b=Gc(f),b!==f&&H(a,d,c,b,e),Hc(b),b.o;if(Array.isArray(f)){const h=f[z]|0;h&2?(g=Cc(vc(f,h,Fc,!0,!0),b,!0),Eb(g)):h&64?g=f:g=Cc(g,b,!0)}else g=Cc(void 0,b,!0);g!==f&&H(a,d,c,g,e);return g}
function Sc(a,b,c,d,e){a=Jc(a,d,e,f=>pc(f,c,b));
if(a!=null)return a}
function Tc(a,b,c,d){let e=a.o,f=e[z]|0;b=Sc(e,f,b,c,d);if(b==null)return b;f=e[z]|0;if(!Gb(a,f)){const g=Gc(b);g!==b&&(Hc(a)&&(e=a.o,f=e[z]|0),b=g,H(e,f,c,b,d))}return b}
function Uc(a,b,c,d,e,f,g,h){var k=Gb(a,c);f=k?1:f;g=!!g||f===3;k=h&&!k;(f===2||k)&&Hc(a)&&(b=a.o,c=b[z]|0);a=Lc(b,e);var l=a[z]|0;h=!!(4&l);if(!h){l=Mc(l,c);var p=a,n=c;const q=!!(2&l);q&&(n|=2);let m=!q,u=!0,B=0,y=0;for(;B<p.length;B++){const G=pc(p[B],d,n);if(G instanceof d){if(!q){const ka=Gb(G);m&&(m=!ka);u&&(u=ka)}p[y++]=G}}y<B&&(p.length=y);l|=4;l=u?l|16:l&-17;l=m?l|8:l&-9;A(p,l);q&&Object.freeze(p)}if(k&&!(8&l||!a.length&&(f===1||f===4&&32&l))){Oc(l)&&(a=Array.prototype.slice.call(a),l=Nc(l,
c),c=pa(H(b,c,e,a)));d=a;k=l;for(p=0;p<d.length;p++)l=d[p],n=Gc(l),l!==n&&(d[p]=n);k|=8;k=d.length?k&-17:k|16;A(d,k);l=k}f===1||f===4&&32&l?Oc(l)||(c=l,l|=!a.length||16&l&&(!h||32&l)?2:1024,l!==c&&A(a,l),Object.freeze(a)):(f===2&&Oc(l)&&(a=Array.prototype.slice.call(a),l=Nc(l,c),l=Vc(l,c,g),A(a,l),c=pa(H(b,c,e,a))),Oc(l)||(b=l,l=Vc(l,c,g),l!==b&&A(a,l)));return a}
function I(a,b,c,d){d!=null?oc(d,b):d=void 0;Kc(a,c,d);return a}
function Nc(a,b){2&a&&(a|=16);a=(2&b?a|2:a&-3)|32;return a&=-1025}
function Vc(a,b,c){32&b&&c||(a&=-33);return a}
function Wc(a,b,c,d){Ic(a);const e=a.o;a=Uc(a,e,e[z]|0,c,b,2,!0);d=d!=null?oc(d,c):new c;a.push(d);b=c=a[z]|0;Gb(d)?(c&=-9,a.length===1&&(c|=16)):c&=-17;c!==b&&A(a,c)}
function Xc(a,b,c="",d){let e;return(e=E(F(a,b,d)))!=null?e:c}
function Yc(a,b){var c=Zc;const d=a.o;c=Qc(Pc(d),d,void 0,c);return E(F(a,c===b?b:-1))}
function $c(a,b,c){if(c!=null){if(typeof c!=="number")throw rb("int32");if(!gc(c))throw rb("int32");c|=0}Kc(a,b,c)}
function J(a,b,c){return Kc(a,b,nc(c))}
function ad(a,b,c,d){a:{d=nc(d);Ic(a);const g=a.o;var e=g[z]|0;if(d==null){var f=Pc(g);if(Qc(f,g,e,c)===b)f.set(c,0);else break a}else{f=g;c.includes(b);const h=Pc(f),k=Qc(h,f,e,c);k!==b&&(k&&(e=H(f,e,k)),h.set(c,b))}H(g,e,b,d)}return a}
function bd(a,b,c){if(c!=null){if(!gc(c))throw rb("enum");c|=0}return Kc(a,b,c)}
;function cd(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function dd(){return Error("Failed to read varint, encoding is invalid.")}
function ed(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function fd(a,b){if(typeof a==="string")return{buffer:jb(a),J:b};if(Array.isArray(a))return{buffer:new Uint8Array(a),J:b};if(a.constructor===Uint8Array)return{buffer:a,J:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),J:!1};if(a.constructor===nb)return{buffer:ob(a)||new Uint8Array(0),J:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),J:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;function gd(a){const b=a.j;let c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw dd();hd(a,c);return e}
function hd(a,b){a.h=b;if(b>a.i)throw ed(a.i,b);}
function id(a,b){if(b<0)throw Error(`Tried to read a negative byte length: ${b}`);const c=a.h,d=c+b;if(d>a.i)throw ed(b,a.i-c);a.h=d;return c}
var jd=class{constructor(a,b,c,d){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.init(a,b,c,d)}init(a,b,c,{W:d=!1,da:e=!1}={}){this.W=d;this.da=e;a&&(a=fd(a,this.da),this.j=a.buffer,this.m=a.J,this.l=b||0,this.i=c!==void 0?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.W=!1}reset(){this.h=this.l}},kd=[];function ld(a,b,c,d){if(md.length){const e=md.pop();nd(e,d);e.h.init(a,b,c,d);return e}return new od(a,b,c,d)}
function nd(a,{ha:b=!1}={}){a.ha=b}
function pd(a){a.h.clear();a.l=-1;a.i=-1;md.length<100&&md.push(a)}
function qd(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=gd(a.h)>>>0;b=c>>>3;c&=7;if(!(c>=0&&c<=5))throw cd(c,a.j);if(b<1)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function rd(a){switch(a.i){case 0:if(a.i!=0)rd(a);else a:{a=a.h;var b=a.h;const c=b+10,d=a.j;for(;b<c;)if((d[b++]&128)===0){hd(a,b);break a}throw dd();}break;case 1:a=a.h;hd(a,a.h+8);break;case 2:a.i!=2?rd(a):(b=gd(a.h)>>>0,a=a.h,hd(a,a.h+b));break;case 5:a=a.h;hd(a,a.h+4);break;case 3:b=a.l;do{if(!qd(a))throw Error("Unmatched start-group tag: stream EOF");if(a.i==4){if(a.l!=b)throw Error("Unmatched end-group tag");break}rd(a)}while(1);break;default:throw cd(a.i,a.j);}}
function sd(a,b,c){const d=a.h.i,e=gd(a.h)>>>0,f=a.h.h+e;let g=f-d;g<=0&&(a.h.i=f,c(b,a,void 0,void 0,void 0),g=f-a.h.h);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${e} bytes, instead read ${e-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=d}
var od=class{constructor(a,b,c,d){if(kd.length){const e=kd.pop();e.init(a,b,c,d);a=e}else a=new jd(a,b,c,d);this.h=a;this.j=this.h.h;this.i=this.l=-1;nd(this,d)}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}},md=[];var K=class{constructor(a,b,c){this.o=Dc(a,b,c,3)}toJSON(){return yc(this)}clone(){{var a=this;const b=a.o;a=new a.constructor(vc(b,b[z]|0,Fc,!0,!0));Eb(a.o)}return a}J(){return Gb(this)}};K.prototype[yb]=Fb;function td(){const a=class{constructor(){throw Error();}};Object.setPrototypeOf(a,a.prototype);return a}
var ud=td();var vd=class{constructor(a,b){this.U=a;a=ma(ud);this.h=!!a&&b===a||!1}};const wd=new vd(function(a,b,c,d,e){if(a.i!==2)return!1;sd(a,Rc(b,d,c),e);return!0},ud),xd=new vd(function(a,b,c,d,e){if(a.i!==2)return!1;
sd(a,Rc(b,d,c),e);return!0},ud);
var yd=Symbol(),zd=Symbol(),Ad=Symbol();let Bd,Cd;
function Dd(a){var b=Ed,c=Fd,d=a[yd];if(d)return d;d={};d.va=a;var e=Bc(a[0]);d.aa=e;var f=a[1];e=1;f&&f.constructor===Object&&(d.extensions=f,f=a[++e],typeof f==="function"&&(d.Fa=!0,Bd!=null||(Bd=f),Cd!=null||(Cd=a[e+1]),f=a[e+=2]));const g={};for(;f&&Array.isArray(f)&&f.length&&typeof f[0]==="number"&&f[0]>0;){for(var h=0;h<f.length;h++)g[f[h]]=f;f=a[++e]}for(h=1;f!==void 0;){typeof f==="number"&&(h+=f,f=a[++e]);let p;var k=void 0;f instanceof vd?p=f:(p=wd,e--);let n;if((n=p)==null?0:n.h){f=a[++e];
k=a;var l=e;typeof f==="function"&&(f=f(),k[l]=f);k=f}f=a[++e];l=h+1;typeof f==="number"&&f<0&&(l-=f,f=a[++e]);for(;h<l;h++){const q=g[h];k?c(d,h,p,k,q):b(d,h,p,q)}}return a[yd]=d}
;function Ed(a,b,c,d){const e=c.U;a[b]=d?(f,g,h)=>e(f,g,h,d):e}
function Fd(a,b,c,d,e){const f=c.U;let g,h;a[b]=(k,l,p)=>f(k,l,p,h||(h=Dd(d).aa),g||(g=Gd(d)),e)}
function Gd(a){let b=a[zd];if(b!=null)return b;const c=Dd(a);b=c.Fa?(d,e)=>Bd(d,e,c):(d,e)=>{const f=d[z]|0;
for(;qd(e)&&e.i!=4;){var g=e.l,h=c[g];if(h==null){var k=c.extensions;k&&(k=k[g])&&(k=Hd(k),k!=null&&(h=c[g]=k))}if(h==null||!h(e,d,g)){k=e;h=k.j;rd(k);if(k.ha)var l=void 0;else{var p=k.h.h-h;k.h.h=h;k=k.h;h=p;if(h==0)l=lb();else{var n=id(k,h);k.W&&k.m?h=k.j.subarray(n,n+h):(k=k.j,p=n,h=n+h,h=p===h?new Uint8Array(0):Yb?k.slice(p,h):new Uint8Array(k.subarray(p,h)));l=h.length==0?lb():new nb(h,kb)}}p=k=h=void 0;n=d;l&&((h=(k=(p=n[wb])!=null?p:n[wb]=new uc)[g])!=null?h:k[g]=[]).push(l)}}if(e=rc(d))e.h=
c.va[Ad];f&8192&&Db(d,34);return!0};
a[zd]=b;a[Ad]=Id.bind(a);return b}
function Id(a,b,c){const d=this[yd],e=this[zd],f=Cc(void 0,d.aa,!1),g=rc(a);if(g){var h=!1,k=d.extensions;if(k&&(g==null||sc(g,(l,p,n)=>{if(n.length!==0)if(k[p])for(const q of n){l=ld(q);try{h=!0,e(f,l)}finally{pd(l)}}else c==null||c(a,p,n)}),h)){let l=a[z]|0;
if(l&2&&l&16384)throw Error();const p=l&512?Kb:void 0;Jb(f,f[z]|0,(n,q)=>{if(Jc(a,n,p)!=null)switch(b==null?void 0:b.Nb){case 1:return;default:throw Error();}l=pa(H(a,l,n,q,p));delete g[n]})}}}
function Hd(a){a=Array.isArray(a)?a[0]instanceof vd?a:[xd,a]:[a,void 0];const b=a[0].U;if(a=a[1]){const c=Gd(a),d=Dd(a).aa;return(e,f,g)=>b(e,f,g,d,c)}return b}
;var Jd;
Jd=new vd(function(a,b,c){if(a.i!==2)return!1;var d=gd(a.h)>>>0;a=a.h;var e=id(a,d);a=a.j;if(Oa){var f=a,g;(g=Na)||(g=Na=new TextDecoder("utf-8",{fatal:!0}));d=e+d;f=e===0&&d===f.length?f:f.subarray(e,d);try{var h=g.decode(f)}catch(l){if(Ma===void 0){try{g.decode(new Uint8Array([128]))}catch(p){}try{g.decode(new Uint8Array([97])),Ma=!0}catch(p){Ma=!1}}!Ma&&(Na=void 0);throw l;}}else{h=e;d=h+d;e=[];let l=null;let p;for(;h<d;){var k=a[h++];k<128?e.push(k):k<224?h>=d?Ka():(p=a[h++],k<194||Ja(p)?(h--,
Ka()):e.push((k&31)<<6|p&63)):k<240?h>=d-1?Ka():(p=a[h++],Ja(p)||k===224&&p<160||k===237&&p>=160||Ja(g=a[h++])?(h--,Ka()):e.push((k&15)<<12|(p&63)<<6|g&63)):k<=244?h>=d-2?Ka():(p=a[h++],Ja(p)||(k<<28)+(p-144)>>30!==0||Ja(g=a[h++])||Ja(f=a[h++])?(h--,Ka()):(k=(k&7)<<18|(p&63)<<12|(g&63)<<6|f&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):Ka();e.length>=8192&&(l=La(l,e),e.length=0)}h=La(l,e)}H(b,b[z]|0,c,h,(b[z]|0)&512?Kb:void 0);return!0},td());
var Kd=function(a,b,c=ud){return new vd(a,c)}(function(a,b,c,d,e){if(a.i!==2)return!1;
d=Cc(void 0,d,!0);var f=b[z]|0;if(f&2)throw Error();var g=!!(64&f)||!(8192&f);const h=f&512?Kb:void 0;let k=Lc(b,c,h);var l=k!==Bb;if(g||!l){l=g=k===Bb?55:k[z]|0;if(2&l||Oc(l)||4&l&&!(32&l))k=Array.prototype.slice.call(k),g=0,l=Nc(l,f),f=pa(H(b,f,c,k,h));l=Mc(l,f)&-13;l=Vc(l,f,!0);l!==g&&A(k,l)}k.push(d);sd(a,d,e);return!0},function(a,b,c,d,e){if(Array.isArray(b))for(let l=0;l<b.length;l++){var f=e,g=a,h=g.h;
var k=b[l];k=k instanceof K?k.o:Array.isArray(k)?Cc(k,d,!1):void 0;h.call(g,c,k,f)}});function Ld(){}
;function Md(a){for(const b in a)return!1;return!0}
function Nd(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=Nd(a[c]);return b}
const Od="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pd(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<Od.length;f++)c=Od[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Qd(a,b){this.h=a===Rd&&b||""}
Qd.prototype.toString=function(){return this.h};
var Rd={};new Qd(Rd,"");function Sd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Td(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(n){for(var q=g,m=0;m<64;m+=4)q[m/4]=n[m]<<24|n[m+1]<<16|n[m+2]<<8|n[m+3];for(m=16;m<80;m++)n=q[m-3]^q[m-8]^q[m-14]^q[m-16],q[m]=(n<<1|n>>>31)&4294967295;n=e[0];var u=e[1],B=e[2],y=e[3],G=e[4];for(m=0;m<80;m++){if(m<40)if(m<20){var ka=y^u&(B^y);var bc=1518500249}else ka=u^B^y,bc=1859775393;else m<60?(ka=u&B|y&(u|B),bc=2400959708):(ka=u^B^y,bc=3395469782);ka=((n<<5|n>>>27)&4294967295)+ka+G+bc+q[m]&4294967295;G=y;y=B;B=(u<<30|u>>>2)&4294967295;u=n;n=ka}e[0]=e[0]+n&4294967295;e[1]=e[1]+u&4294967295;
e[2]=e[2]+B&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+G&4294967295}
function c(n,q){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var m=[],u=0,B=n.length;u<B;++u)m.push(n.charCodeAt(u));n=m}q||(q=n.length);m=0;if(l==0)for(;m+64<q;)b(n.slice(m,m+64)),m+=64,p+=64;for(;m<q;)if(f[l++]=n[m++],p++,l==64)for(l=0,b(f);m+64<q;)b(n.slice(m,m+64)),m+=64,p+=64}
function d(){var n=[],q=p*8;l<56?c(h,56-l):c(h,64-(l-56));for(var m=63;m>=56;m--)f[m]=q&255,q>>>=8;b(f);for(m=q=0;m<5;m++)for(var u=24;u>=0;u-=8)n[q++]=e[m]>>u&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,ya:function(){for(var n=d(),q="",m=0;m<n.length;m++)q+="0123456789ABCDEF".charAt(Math.floor(n[m]/16))+"0123456789ABCDEF".charAt(n[m]%16);return q}}}
;function Ud(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,Vd(Sd(d),a,c||null)].join(" "):null}
function Vd(a,b,c){var d=[];let e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],wa(d,function(h){e.push(h)}),Wd(e.join(" "));
const f=[],g=[];wa(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];wa(d,function(h){e.push(h)});
a=Wd(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Wd(a){const b=Td();b.update(a);return b.ya().toLowerCase()}
;function Xd(){this.h=document||{cookie:""}}
Xd.prototype.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ka:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
Xd.prototype.set=function(a,b,c){let d,e,f,g=!1,h;typeof c==="object"&&(h=c.Qb,g=c.Rb||!1,f=c.domain||void 0,e=c.path||void 0,d=c.ka);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');d===void 0&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(d<0?"":d==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+d*1E3)).toUTCString())+(g?";secure":"")+(h!=null?";samesite="+h:"")};
Xd.prototype.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=qa(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
Xd.prototype.remove=function(a,b,c){const d=this.get(a)!==void 0;this.set(a,"",{ka:0,path:b,domain:c});return d};
Xd.prototype.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=qa(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};function Yd(a,b,c,d){(a=t[a])||typeof document==="undefined"||(a=(new Xd).get(b));return a?Ud(a,c,d):null}
;var Zd=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function $d(){this.l=this.l;this.i=this.i}
$d.prototype.l=!1;$d.prototype.dispose=function(){this.l||(this.l=!0,this.m())};
$d.prototype[Symbol.dispose]=function(){this.dispose()};
$d.prototype.addOnDisposeCallback=function(a,b){this.l?b!==void 0?a.call(b):a():(this.i||(this.i=[]),b&&(a=a.bind(b)),this.i.push(a))};
$d.prototype.m=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function ae(a,b){a.l(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
class be{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;this.i>0?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};class ce{constructor(){this.i=this.h=null}add(a,b){const c=de.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var de=new be(()=>new ee,a=>a.reset());
class ee{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let fe,ge=!1,he=new ce,je=(a,b)=>{fe||ie();ge||(fe(),ge=!0);he.add(a,b)},ie=()=>{const a=Promise.resolve(void 0);
fe=()=>{a.then(ke)}};
function ke(){let a;for(;a=he.remove();){try{a.h.call(a.scope)}catch(b){Pa(b)}ae(de,a)}ge=!1}
;function L(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=Ld)try{const b=this;a.call(void 0,function(c){le(b,2,c)},function(c){le(b,3,c)})}catch(b){le(this,3,b)}}
function me(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
me.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var ne=new be(function(){return new me},function(a){a.reset()});
function oe(a,b,c){const d=ne.get();d.j=a;d.i=b;d.context=c;return d}
function pe(a){if(a instanceof L)return a;const b=new L(Ld);le(b,2,a);return b}
L.prototype.then=function(a,b,c){return qe(this,Zd(typeof a==="function"?a:null),Zd(typeof b==="function"?b:null),c)};
L.prototype.$goog_Thenable=!0;L.prototype.C=function(a,b){return qe(this,null,Zd(a),b)};
L.prototype.catch=L.prototype.C;L.prototype.cancel=function(a){if(this.h==0){const b=new re(a);je(function(){se(this,b)},this)}};
function se(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){var d=0,e=null,f=null;for(let g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?se(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):te(c),ue(c,e,3,b)))}a.j=null}else le(a,3,b)}
function ve(a,b){a.i||a.h!=2&&a.h!=3||we(a);a.l?a.l.next=b:a.i=b;a.l=b}
function qe(a,b,c,d){const e=oe(null,null,null);e.h=new L(function(f,g){e.j=b?function(h){try{const k=b.call(d,h);f(k)}catch(k){g(k)}}:f;
e.i=c?function(h){try{const k=c.call(d,h);k===void 0&&h instanceof re?g(h):f(k)}catch(k){g(k)}}:g});
e.h.j=a;ve(a,e);return e.h}
L.prototype.H=function(a){this.h=0;le(this,2,a)};
L.prototype.K=function(a){this.h=0;le(this,3,a)};
function le(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.H,f=a.K;if(d instanceof L){ve(d,oe(e||Ld,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if(h=="object"&&d!=null||h=="function")try{const k=d.then;if(typeof k==="function"){xe(d,k,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,we(a),b!=3||c instanceof re||ye(a,c))}}
function xe(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
let h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function we(a){a.s||(a.s=!0,je(a.B,a))}
function te(a){let b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
L.prototype.B=function(){let a;for(;a=te(this);)ue(this,a,this.h,this.v);this.s=!1};
function ue(a,b,c,d){if(c==3&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,ze(b,c,d);else try{b.l?b.j.call(b.context):ze(b,c,d)}catch(e){Ae.call(null,e)}ae(ne,b)}
function ze(a,b,c){b==2?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function ye(a,b){a.m=!0;je(function(){a.m&&Ae.call(null,b)})}
var Ae=Pa;function re(a){oa.call(this,a)}
na(re,oa);re.prototype.name="cancel";const Be=self;class Ce{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a;this.reject=b})}}
;function M(a){$d.call(this);this.H=1;this.s=[];this.v=0;this.h=[];this.j={};this.V=!!a}
na(M,$d);M.prototype.K=function(a,b,c){let d=this.j[a];d||(d=this.j[a]=[]);const e=this.H;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.H=e+3;d.push(e);return e};
M.prototype.C=function(a){const b=this.h[a];if(b){const c=this.j[b];this.v!=0?(this.s.push(a),this.h[a+1]=()=>{}):(c&&ya(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
M.prototype.B=function(a,b){var c=this.j[a];if(c){const e=Array(arguments.length-1);var d=arguments.length;let f;for(f=1;f<d;f++)e[f-1]=arguments[f];if(this.V)for(f=0;f<c.length;f++)d=c[f],De(this.h[d+1],this.h[d+2],e);else{this.v++;try{for(f=0,d=c.length;f<d&&!this.l;f++){const g=c[f];this.h[g+1].apply(this.h[g+2],e)}}finally{if(this.v--,this.s.length>0&&this.v==0)for(;c=this.s.pop();)this.C(c)}}return f!=0}return!1};
function De(a,b,c){je(function(){a.apply(b,c)})}
M.prototype.clear=function(a){if(a){const b=this.j[a];b&&(b.forEach(this.C,this),delete this.j[a])}else this.h.length=0,this.j={}};
M.prototype.m=function(){M.Ka.m.call(this);this.clear();this.s.length=0};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let N={};var Ee=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Ub=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Fe={ta:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
za:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ge={ta:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
za:function(a){return[].concat.apply([],a)}};
N.Ja=function(){Ee?(N.pa=Uint8Array,N.na=Uint16Array,N.oa=Int32Array,N.assign(N,Fe)):(N.pa=Array,N.na=Array,N.oa=Array,N.assign(N,Ge))};
N.Ja();try{new Uint8Array(1)}catch(a){};function He(a){for(var b=a.length;--b>=0;)a[b]=0}
He(Array(576));He(Array(60));He(Array(512));He(Array(256));He(Array(29));He(Array(30));/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Ie="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Je=class{constructor(a){this.name=a}};var Ke=new Je("rawColdConfigGroup");var Le=new Je("rawHotConfigGroup");var Me=class extends K{constructor(a){super(a)}};var Ne=class extends K{constructor(a){super(a)}};var Oe=class extends K{constructor(a){super(a)}};var Pe=class extends K{constructor(a){super(a)}getPlayerType(){var a=F(this,36);a=a==null?a:gc(a)?a|0:void 0;return a!=null?a:0}setHomeGroupInfo(a){return I(this,Oe,81,a)}clearLocationPlayabilityToken(){return Kc(this,89)}};var Qe=class extends K{constructor(a){super(a)}},Re=[2,3,4,5,6];var Se=class extends K{constructor(a){super(a)}setTrackingParams(a){if(a!=null)if(typeof a==="string")a=a?new nb(a,kb):lb();else if(a.constructor!==nb)if(eb&&a!=null&&a instanceof Uint8Array)a=a.length?new nb(new Uint8Array(a),kb):lb();else throw Error();return Kc(this,1,a)}};var Te=class extends K{constructor(a){super(a)}};var Ue=class extends K{constructor(a){super(a)}};var Ve=class extends K{constructor(a){super(a)}};var We=class extends K{constructor(a){super(a)}setSafetyMode(a){return bd(this,5,a)}};var Xe=class extends K{constructor(a){super(a)}j(a){return I(this,Pe,1,a)}};var Ye=class extends K{constructor(a){super(a,500)}};var Ze=class extends K{constructor(a){super(a)}};var $e=class extends K{constructor(a){super(a)}setVideoId(a){return ad(this,1,Zc,a)}getPlaylistId(){return Yc(this,2)}},Zc=[1,2];var af=class extends K{constructor(a){super(a)}};var bf=new Je("recordNotificationInteractionsEndpoint");var cf=["notification/convert_endpoint_to_url"],df=["notification/record_interactions"],ef=["notification_registration/set_registration"];var ff=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var gf=["notifications_register","notifications_check_registration"];var O=class extends Error{constructor(a,...b){super(a);this.args=[...b];Object.setPrototypeOf(this,new.target.prototype)}};let hf=null;function P(a,b){const c={};c.key=a;c.value=b;return jf().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function kf(){return P("IndexedDBCheck","testing IndexedDB").then(()=>lf("IndexedDBCheck")).then(a=>a==="testing IndexedDB"?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function lf(a){const b=new O("Error accessing DB");return jf().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function jf(){return hf?Promise.resolve(hf):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))hf=d,a(hf);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),jf()};
c.onupgradeneeded=mf})}
function mf(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const nf={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function of(a){if(a.length===1)return a[0];var b=nf.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(nf).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function pf(a){return`/youtubei/v1/${of(a)}`}
;var qf=class extends K{constructor(a){super(a)}};var rf=class extends K{constructor(a){super(a,0,"yt.sw.adr")}};const sf=t.window;let tf,uf;const vf=(sf==null?void 0:(tf=sf.yt)==null?void 0:tf.config_)||(sf==null?void 0:(uf=sf.ytcfg)==null?void 0:uf.data_)||{};w("yt.config_",vf);function Q(...a){a=arguments;a.length>1?vf[a[0]]=a[1]:a.length===1&&Object.assign(vf,a[0])}
function R(a,b){return a in vf?vf[a]:b}
;const wf=[];function xf(a){wf.forEach(b=>b(a))}
function yf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zf(b)}}:a}
function zf(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Q("ERRORS",b));xf(a)}
function Af(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0,void 0,void 0]),Q("ERRORS",b))}
;const Bf=/^[\w.]*$/,Cf={q:!0,search_query:!0};function Df(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(h.length===1&&h[0]||h.length===2)try{const k=Ef(h[0]||""),l=Ef(h[1]||"");if(k in c){const p=c[k];Array.isArray(p)?za(p,l):c[k]=[p,l]}else c[k]=l}catch(k){var d=k,e=h[0];const l=String(Df);d.args=[{key:e,value:h[1],query:a,method:Ff===l?"unchanged":l}];Cf.hasOwnProperty(e)||Af(d)}}return c}
const Ff=String(Df);function Gf(a){a.charAt(0)==="?"&&(a=a.substring(1));return Df(a,"&")}
function Hf(a,b){return If(a,b||{},!0)}
function If(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Gf(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);b=a;a=Ia(e);a?(c=b.indexOf("#"),c<0&&(c=b.length),f=b.indexOf("?"),f<0||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Jf(a){if(!b)var b=window.location.href;const c=a.match(Fa)[1]||null,d=Ga(a.match(Fa)[3]||null);c&&d?(a=a.match(Fa),b=b.match(Fa),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ga(b.match(Fa)[3]||null)===d&&(Number(b.match(Fa)[4]||null)||null)===(Number(a.match(Fa)[4]||null)||null):!0;return a}
function Ef(a){return a&&a.match(Bf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Kf(a,b){typeof a==="function"&&(a=yf(a));return window.setTimeout(a,b)}
;var Lf="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),Mf=[...Lf,"client_dev_set_cookie"];function S(a){a=Nf(a);return typeof a==="string"&&a==="false"?!1:!!a}
function T(a,b){a=Nf(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Of(){return R("EXPERIMENTS_TOKEN","")}
function Nf(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Pf(){const a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=R("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&b[d]===void 0&&a.push({key:d,value:String(c[d])});return a}
;[...Lf];let Qf=!1;function Rf(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);b.priority&&(c.priority=b.priority);a=Sf(a,b);const d=Tf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||t;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=p=>{p=p||{};k?b.onSuccess&&b.onSuccess.call(e,p,h):b.onError&&b.onError.call(e,p,h);b.onFinish&&b.onFinish.call(e,p,h)};
(b.format||"JSON")==="JSON"&&(k||h.status>=400&&h.status<500)?h.json().then(l,()=>{l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&a>0&&(g=Kf(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||t))},a))}
function Sf(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Hf(a,b);return a}
function Tf(a,b){const c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=R("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ga(a.match(Fa)[3]||null)&&!b.withCredentials&&Ga(a.match(Fa)[3]||null)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&
(e=Gf(e),Pd(e,f),e=b.postBodyFormat&&b.postBodyFormat==="JSON"?JSON.stringify(e):Ia(e));f=e||f&&!Md(f);!Qf&&f&&b.method!=="POST"&&(Qf=!0,zf(Error("AJAX request with postData should use POST")));return e}
;const Uf=[{Z:a=>`Cannot read property '${a.key}'`,
S:{Error:[{u:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{u:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{u:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{u:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{u:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{u:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{u:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Z:a=>`Cannot call '${a.key}'`,
S:{TypeError:[{u:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{u:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{u:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{u:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{u:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{u:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}},{Z:a=>`${a.key} is not defined`,
S:{ReferenceError:[{u:/(.*) is not defined/,groups:["key"]},{u:/Can't find variable: (.*)/,groups:["key"]}]}}];var Wf={F:[],D:[{callback:Vf,weight:500}]};function Vf(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Xf(){if(!Yf){var a=Yf=new Zf;a.F.length=0;a.D.length=0;$f(a,Wf)}return Yf}
function $f(a,b){b.F&&a.F.push.apply(a.F,b.F);b.D&&a.D.push.apply(a.D,b.D)}
var Zf=class{constructor(){this.D=[];this.F=[]}},Yf;const ag=new M;function bg(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=cg(d);if(e===Infinity)break;const f=e>>3;switch(e&7){case 0:e=cg(d);if(f===2)return e;break;case 1:if(f===2)return;c+=8;break;case 2:e=cg(d);if(f===2)return a.substr(c,e);c+=e;break;case 5:if(f===2)return;c+=4;break;default:return}}while(c<b)}
function cg(a){let b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function dg(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=eg(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=bg(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?eg(`${f}.ve`,g,h,k):0;d+=f;d+=eg(e,a[e],b,c);if(d>500)break}}else c[b]=fg(a),d+=c[b].length;else c[b]=fg(a),d+=c[b].length;return d}
function eg(a,b,c,d){c+=`.${a}`;a=fg(b);d[c]=a;return c.length+a.length}
function fg(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function gg(){hg.instance||(hg.instance=new hg);return hg.instance}
function ig(a,b){a={};var c=[];"USER_SESSION_ID"in vf&&c.push({key:"u",value:R("USER_SESSION_ID")});var d=Sd(String(t.location.href));var e=[];var f;(f=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__1PSAPISID||t.__OVERRIDE_SID)?f=!0:(typeof document!=="undefined"&&(f=new Xd,f=f.get("SAPISID")||f.get("APISID")||f.get("__Secure-3PAPISID")||f.get("__Secure-1PAPISID")),f=!!f);f&&(f=(d=d.indexOf("https:")==0||d.indexOf("chrome-extension:")==0||d.indexOf("chrome-untrusted://new-tab-page")==0||d.indexOf("moz-extension:")==
0)?t.__SAPISID:t.__APISID,f||typeof document==="undefined"||(f=new Xd,f=f.get(d?"SAPISID":"APISID")||f.get("__Secure-3PAPISID")),(f=f?Ud(f,d?"SAPISIDHASH":"APISIDHASH",c):null)&&e.push(f),d&&((d=Yd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",c))&&e.push(d),(c=Yd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",c))&&e.push(c)));if(e=e.length==0?null:e.join(" "))a.Authorization=e,e=b=b==null?void 0:b.sessionIndex,e===void 0&&(e=Number(R("SESSION_INDEX",0)),e=isNaN(e)?0:e),S("voice_search_auth_header_removal")||
(a["X-Goog-AuthUser"]=e.toString()),"INNERTUBE_HOST_OVERRIDE"in vf||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in vf&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
var hg=class{constructor(){this.La=!0}};var jg={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function kg(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;w("ytglobal.prefsUserPrefsPrefs_",v("ytglobal.prefsUserPrefsPrefs_")||{});function lg(){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new O("Datasync ID not set","unknown");}
;function mg(a,b){return ng(a,0,b)}
function og(a){const b=v("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
var pg=class{h(a){ng(a,1)}};function qg(){rg.instance||(rg.instance=new rg);return rg.instance}
function ng(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);const d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Kf(a,c||0)}
var rg=class extends pg{P(a){if(a===void 0||!Number.isNaN(Number(a))){var b=v("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=v("yt.scheduler.instance.start");a&&a()}},sg=qg();const tg=[];let ug,vg=!1;function wg(a){vg||(ug?ug.handleError(a):(tg.push({type:"ERROR",payload:a}),tg.length>10&&tg.shift()))}
function xg(a,b){vg||(ug?ug.R(a,b):(tg.push({type:"EVENT",eventType:a,payload:b}),tg.length>10&&tg.shift()))}
;function yg(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function zg(a){return a.substr(0,a.indexOf(":"))||a}
;const Ag={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},Bg={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Cg={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var U=class extends O{constructor(a,b={},c=Ag[a],d=Bg[a],e=Cg[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}},Dg=class extends U{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ag.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Dg.prototype)}},Eg=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,Eg.prototype)}};const Fg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Gg(a,b,c,d){b=zg(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new U("QUOTA_EXCEEDED",a);if(Ya&&e.name==="UnknownError")return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Eg)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Fg.some(f=>e.message.includes(f)))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Gb:e.name})];e.level="WARNING";return e}
function Hg(a,b,c){return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function Ig(a){if(!a)throw Error();throw a;}
function Jg(a){return a}
var Kg=class{constructor(a){this.h=a}};function Lg(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof Mg?Ng(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Og(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof Mg?Ng(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Ng(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof Mg?Ng(a,b,f,d,e):d(f)},f=>{e(f)})}
var Mg=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if(this.state.status==="PENDING"){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if(this.state.status==="PENDING"){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new Mg(new Kg((b,c)=>{const d=[];let e=a.length;e===0&&b(d);for(let f=0;f<a.length;++f)Mg.resolve(a[f]).then(g=>{d[f]=g;e--;e===0&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new Mg(new Kg((b,c)=>{a instanceof Mg?a.then(b,c):b(a)}))}static reject(a){return new Mg(new Kg((b,c)=>{c(a)}))}then(a,b){const c=a!=null?a:Jg,d=b!=null?b:Ig;
return new Mg(new Kg((e,f)=>{this.state.status==="PENDING"?(this.h.push(()=>{Lg(this,this,c,e,f)}),this.i.push(()=>{Og(this,this,d,e,f)})):this.state.status==="FULFILLED"?Lg(this,this,c,e,f):this.state.status==="REJECTED"&&Og(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function Pg(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function Qg(a){return new Promise((b,c)=>{Pg(a,b,c)})}
function V(a){return new Mg(new Kg((b,c)=>{Pg(a,b,c)}))}
;function Rg(a,b){return new Mg(new Kg((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;const Sg=window;var W=Sg.ytcsi&&Sg.ytcsi.now?Sg.ytcsi.now:Sg.performance&&Sg.performance.timing&&Sg.performance.now&&Sg.performance.timing.navigationStart?()=>Sg.performance.timing.navigationStart+Sg.performance.now():()=>(new Date).getTime();function X(a,b,c,d){return r(function*(){const e={mode:"readonly",A:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.A?3:1;let g=0,h;for(;!h;){g++;const p=Math.round(W());try{var k=a.h.transaction(b,e.mode),l=d;const n=new Tg(k),q=yield Ug(n,l),m=Math.round(W());Vg(a,p,m,g,void 0,b.join(),e);return q}catch(n){l=Math.round(W());const q=Gg(n,a.h.name,b.join(),a.h.version);if(q instanceof U&&!q.h||g>=f)Vg(a,p,l,g,q,b.join(),e),h=q}}return Promise.reject(h)})}
function Wg(a,b,c){a=a.h.createObjectStore(b,c);return new Xg(a)}
function Yg(a,b,c,d){return X(a,[b],{mode:"readwrite",A:!0},e=>{e=e.objectStore(b);return V(e.h.put(c,d))})}
function Vg(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&xg("QUOTA_EXCEEDED",{dbName:zg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),xg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Zg(a,!1,d,f,b,g.tag),wg(e)):Zg(a,!0,d,f,b,g.tag)}
function Zg(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){xg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var $g=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}add(a,b,c){return X(this,[a],{mode:"readwrite",A:!0},d=>d.objectStore(a).add(b,c))}clear(a){return X(this,[a],{mode:"readwrite",
A:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;((a=this.options)==null?0:a.closed)&&this.options.closed()}count(a,b){return X(this,[a],{mode:"readonly",A:!0},c=>c.objectStore(a).count(b))}delete(a,b){return X(this,[a],{mode:"readwrite",
A:!0},c=>c.objectStore(a).delete(b))}get(a,b){return X(this,[a],{mode:"readonly",
A:!0},c=>c.objectStore(a).get(b))}getAll(a,b,c){return X(this,[a],{mode:"readonly",
A:!0},d=>d.objectStore(a).getAll(b,c))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function ah(a,b,c){a=a.h.openCursor(b.query,b.direction);return bh(a).then(d=>Rg(d,c))}
function ch(a,b){return ah(a,{query:b},c=>c.delete().then(()=>dh(c))).then(()=>{})}
function eh(a,b,c){const d=[];return ah(a,{query:b},e=>{if(!(c!==void 0&&d.length>=c))return d.push(e.cursor.value),dh(e)}).then(()=>d)}
var Xg=class{constructor(a){this.h=a}add(a,b){return V(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return V(this.h.clear()).then(()=>{})}count(a){return V(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?ch(this,a):V(this.h.delete(a))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBObjectStore.prototype?V(this.h.getAll(a,b)):eh(this,a,b)}index(a){try{return new fh(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Eg(a,
this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function Ug(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var Tg=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=U;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(h===null)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new U("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new Xg(a),this.j.set(a,b));return b}};function gh(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return bh(a).then(f=>Rg(f,c))}
function hh(a,b,c){const d=[];return gh(a,{query:b},e=>{if(!(c!==void 0&&d.length>=c))return d.push(e.cursor.value),dh(e)}).then(()=>d)}
var fh=class{constructor(a){this.h=a}count(a){return V(this.h.count(a))}delete(a){return gh(this,{query:a},b=>b.delete().then(()=>dh(b)))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBIndex.prototype?V(this.h.getAll(a,b)):hh(this,a,b)}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function bh(a){return V(a).then(b=>b?new ih(a,b):null)}
function dh(a){a.cursor.continue(void 0);return bh(a.request)}
function jh(a){a.cursor.advance(5);return bh(a.request)}
var ih=class{constructor(a,b){this.request=a;this.cursor=b}delete(){return V(this.cursor.delete()).then(()=>{})}update(a){return V(this.cursor.update(a))}};function kh(a,b,c){return new Promise((d,e)=>{let f;f=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.wa,h=c.blocking,k=c.Ma,l=c.upgrade,p=c.closed;let n;const q=()=>{n||(n=new $g(f.result,{closed:p}));return n};
f.addEventListener("upgradeneeded",m=>{try{if(m.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(f.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");m.dataLoss&&m.dataLoss!=="none"&&xg("IDB_DATA_CORRUPTED",{reason:m.dataLossMessage||"unknown reason",dbName:zg(a)});const u=q(),B=new Tg(f.transaction);l&&l(u,y=>m.oldVersion<y&&m.newVersion>=y,B);
B.done.catch(y=>{e(y)})}catch(u){e(u)}});
f.addEventListener("success",()=>{const m=f.result;h&&m.addEventListener("versionchange",()=>{h(q())});
m.addEventListener("close",()=>{xg("IDB_UNEXPECTEDLY_CLOSED",{dbName:zg(a),dbVersion:m.version});k&&k()});
d(q())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function lh(a,b,c={}){return kh(a,b,c)}
function mh(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.wa;d&&c.addEventListener("blocked",()=>{d()});
yield Qg(c)}catch(c){throw Gg(c,a,"",-1);}})}
;function nh(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function oh(a,b){if(!b)throw Hg("openWithToken",zg(a.name));return a.open()}
var ph=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}i(a,b,c={}){return lh(a,b,c)}delete(a={}){return mh(this.name,a)}open(){if(!this.j)throw nh(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,Ma:b,upgrade:this.options.upgrade},d=()=>{const e=this;return r(function*(){var f,g=(f=Error().stack)!=null?f:"";try{const k=yield e.i(e.name,e.options.version,c);f=k;var h=e.options;const l=[];for(const p of Object.keys(h.M)){const {L:n,Lb:q=Number.MAX_VALUE}=h.M[p];!(f.h.version>=n)||f.h.version>=q||f.h.objectStoreNames.contains(p)||l.push(p)}if(l.length!==0){const p=Object.keys(e.options.M),n=k.objectStoreNames();if(e.m<T("ytidb_reopen_db_retries",0))return e.m++,k.close(),wg(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:e.name,expectedObjectStores:p,foundObjectStores:n})),d();if(e.l<T("ytidb_remake_db_retries",1))return e.l++,yield e.delete(),wg(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:e.name,expectedObjectStores:p,foundObjectStores:n})),d();throw new Dg(n,p);}return k}catch(k){if(k instanceof DOMException?k.name==="VersionError":"DOMError"in self&&k instanceof DOMError?k.name==="VersionError":k instanceof Object&&"message"in k&&k.message==="An attempt was made to open a database using a lower version than the existing version."){g=
yield e.i(e.name,void 0,Object.assign({},c,{upgrade:void 0}));h=g.h.version;if(e.options.version!==void 0&&h>e.options.version+1)throw g.close(),e.j=!1,nh(e,h);return g}b();k instanceof Error&&!S("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw Gg(k,e.name,"",(l=e.options.version)!=null?l:-1);}})};
return this.h=a=d()}};const qh=new ph("YtIdbMeta",{M:{databases:{L:1}},upgrade(a,b){b(1)&&Wg(a,"databases",{keyPath:"actualName"})}});function rh(a,b){return r(function*(){return X(yield oh(qh,b),["databases"],{A:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return V(d.h.put(a,void 0)).then(()=>{})})})})}
function sh(a,b){return r(function*(){if(a)return(yield oh(qh,b)).delete("databases",a)})}
;let th;const uh=new class{constructor(){}}(new class{constructor(){}});function vh(){return r(function*(){return!0})}
function wh(){if(th!==void 0)return th;vg=!0;return th=vh().then(a=>{vg=!1;return a})}
function xh(){return v("ytglobal.idbToken_")||void 0}
function yh(){const a=xh();return a?Promise.resolve(a):wh().then(b=>{(b=b?uh:void 0)&&w("ytglobal.idbToken_",b);return b})}
;new Ce;function zh(a){try{lg();var b=!0}catch(c){b=!1}if(!b)throw a=new U("AUTH_INVALID",{dbName:a}),wg(a),a;b=lg();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function Ah(a,b,c,d){return r(function*(){var e,f=(e=Error().stack)!=null?e:"";e=yield yh();if(!e)throw e=Hg("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),wg(e),e;yg(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:zh(a);try{return yield rh(f,e),yield lh(f.actualName,b,d)}catch(g){try{yield sh(f.actualName,e)}catch(h){}throw g;}})}
function Bh(a,b,c={}){return Ah(a,b,!1,c)}
function Ch(a,b,c={}){return Ah(a,b,!0,c)}
function Dh(a,b={}){return r(function*(){const c=yield yh();if(c){yg(a);var d=zh(a);yield mh(d.actualName,b);yield sh(d.actualName,c)}})}
function Eh(a,b={}){return r(function*(){const c=yield yh();c&&(yg(a),yield mh(a,b),yield sh(a,c))})}
;function Fh(a,b){let c;return()=>{c||(c=new Gh(a,b));return c}}
var Gh=class extends ph{constructor(a,b){super(a,b);this.options=b;yg(a)}i(a,b,c={}){return(this.options.shared?Ch:Bh)(a,b,Object.assign({},c))}delete(a={}){return(this.options.shared?Eh:Dh)(this.name,a)}};function Hh(a,b){return Fh(a,b)}
;var Ih=Hh("ytGcfConfig",{M:{coldConfigStore:{L:1},hotConfigStore:{L:1}},shared:!1,upgrade(a,b){b(1)&&(Wg(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("hotTimestampIndex","timestamp",{unique:!1}),Wg(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("coldTimestampIndex","timestamp",{unique:!1}))},version:1});function Jh(a){return oh(Ih(),a)}
function Kh(a,b,c){return r(function*(){const d={config:a,hashData:b,timestamp:W()},e=yield Jh(c);yield e.clear("hotConfigStore");return yield Yg(e,"hotConfigStore",d)})}
function Lh(a,b,c,d){return r(function*(){const e={config:a,hashData:b,configData:c,timestamp:W()},f=yield Jh(d);yield f.clear("coldConfigStore");return yield Yg(f,"coldConfigStore",e)})}
function Mh(a){return r(function*(){let b=void 0;yield X(yield Jh(a),["coldConfigStore"],{mode:"readwrite",A:!0},c=>gh(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.cursor.value}));
return b})}
function Nh(a){return r(function*(){let b=void 0;yield X(yield Jh(a),["hotConfigStore"],{mode:"readwrite",A:!0},c=>gh(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.cursor.value}));
return b})}
;var Oh=class extends $d{constructor(){super();this.j=[];this.h=[];const a=v("yt.gcf.config.hotUpdateCallbacks");a?(this.j=[...a],this.h=a):(this.h=[],w("yt.gcf.config.hotUpdateCallbacks",this.h))}m(){for(const b of this.j){var a=this.h;const c=a.indexOf(b);c>=0&&a.splice(c,1)}this.j.length=0;super.m()}};function Ph(a,b,c){return r(function*(){if(S("start_client_gcf")){c&&(a.j=c,w("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;w("yt.gcf.config.hotHashData",a.hotHashData||null);var d=xh();if(d){if(!c){var e;c=(e=yield Nh(d))==null?void 0:e.config}yield Kh(c,b,d)}if(c){d=a.i;e=c;for(const f of d.h)f(e)}}})}
function Qh(a,b,c){return r(function*(){if(S("start_client_gcf")){a.coldHashData=b;w("yt.gcf.config.coldHashData",a.coldHashData||null);const d=xh();if(d){if(!c){let e;c=(e=yield Mh(d))==null?void 0:e.config}c&&(yield Lh(c,b,c.configData,d))}}})}
var Rh=class{constructor(){this.h=0;this.i=new Oh}};function Sh(){return"INNERTUBE_API_KEY"in vf&&"INNERTUBE_API_VERSION"in vf}
function Th(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),X:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Aa:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ba:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),ja:R("INNERTUBE_CONTEXT_HL"),ia:R("INNERTUBE_CONTEXT_GL"),Ca:R("INNERTUBE_HOST_OVERRIDE")||"",Da:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ab:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Uh(a){const b={client:{hl:a.ja,gl:a.ia,clientName:a.Aa,clientVersion:a.innertubeContextClientVersion,configInfo:a.X}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=Of();c!==""&&(b.client.experimentsToken=c);c=Pf();c.length>0&&(b.request={internalExperimentFlags:c});Vh(void 0,b);Wh(a,void 0,b);S("start_client_gcf")&&Xh(void 0,b);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var d;if(S("enable_persistent_device_token")&&(a==null?0:(d=a.client)==null?0:d.rolloutToken)){var e;b.client.rolloutToken=a==null?void 0:(e=a.client)==null?void 0:e.rolloutToken}d=Object;e=d.assign;a=b.client;var f=R("DEVICE","");c={};for(const [g,h]of Object.entries(Gf(f))){f=
g;const k=h;f==="cbrand"?c.deviceMake=k:f==="cmodel"?c.deviceModel=k:f==="cbr"?c.browserName=k:f==="cbrver"?c.browserVersion=k:f==="cos"?c.osName=k:f==="cosver"?c.osVersion=k:f==="cplatform"&&(c.platform=k)}b.client=e.call(d,a,c);return b}
function Vh(a,b){const c=v("yt.embedded_player.embed_url");c&&(a?(b=Tc(a,Ue,7)||new Ue,J(b,4,c),I(a,Ue,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Wh(a,b,c){if(a.appInstallData)if(b){let d;c=(d=Tc(b,Ne,62))!=null?d:new Ne;J(c,6,a.appInstallData);I(b,Ne,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Yh(a,b,c={}){let d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.tb||R("AUTHORIZATION");b||(a?b=`Bearer ${v("gapi.auth.getToken")().sb}`:(a=ig(gg()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Xh(a,b){if(!Rh.instance){var c=new Rh;Rh.instance=c}c=Rh.instance;var d=W()-c.h;if(c.h!==0&&d<T("send_config_hash_timer"))c=void 0;else{d=v("yt.gcf.config.coldConfigData");var e=v("yt.gcf.config.hotHashData"),f=v("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=W());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(d=c)if(e=d.coldConfigData,c=d.coldHashData,d=d.hotHashData,a){var g;b=(g=Tc(a,Ne,62))!=null?g:new Ne;g=J(b,1,e);g=J(g,3,c);J(g,5,d);I(a,Ne,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},e&&(b.client.configInfo.coldConfigData=e),c&&(b.client.configInfo.coldHashData=c),d&&(b.client.configInfo.hotHashData=d))}
;typeof TextEncoder!=="undefined"&&new TextEncoder;function Zh(a){this.version=1;this.args=a}
;function $h(){var a=ai;this.topic="screen-created";this.h=a}
$h.prototype.toString=function(){return this.topic};const bi=v("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.K;M.prototype.unsubscribeByKey=M.prototype.C;M.prototype.publish=M.prototype.B;M.prototype.clear=M.prototype.clear;w("ytPubsub2Pubsub2Instance",bi);const ci=v("ytPubsub2Pubsub2SubscribedKeys")||{};w("ytPubsub2Pubsub2SubscribedKeys",ci);const di=v("ytPubsub2Pubsub2TopicToKeys")||{};w("ytPubsub2Pubsub2TopicToKeys",di);const ei=v("ytPubsub2Pubsub2IsAsync")||{};w("ytPubsub2Pubsub2IsAsync",ei);
w("ytPubsub2Pubsub2SkipSubKey",null);function fi(a,b){const c=gi();c&&c.publish.call(c,a.toString(),a,b)}
function hi(a){var b=ii;const c=gi();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(ci[d])try{if(f&&b instanceof $h&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ma){const m=new h;h.ma=m.version}var l=h.ma}catch(m){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var p=l.construct;
{var n=k.args;const m=n.length;if(m>0){const u=Array(m);for(k=0;k<m;k++)u[k]=n[k];var q=u}else q=[]}f=p.call(l,h,q)}catch(m){throw m.message="yt.pubsub2.Data.deserialize(): "+m.message,m;}}catch(m){throw m.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+m.message,m;}a.call(window,f)}catch(m){zf(m)}},ei[b.toString()]?v("yt.scheduler.instance")?sg.h(g):Kf(g,0):g())});
ci[d]=!0;di[b.toString()]||(di[b.toString()]=[]);di[b.toString()].push(d);return d}
function ji(){var a=ki;const b=hi(function(c){a.apply(void 0,arguments);li(b)});
return b}
function li(a){const b=gi();b&&(typeof a==="number"&&(a=[a]),wa(a,c=>{b.unsubscribeByKey(c);delete ci[c]}))}
function gi(){return v("ytPubsub2Pubsub2Instance")}
;let mi=void 0,ni=void 0;var oi={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};const pi=["client.name","client.version"];function qi(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?pi.includes(b.key):!1);
return a}
;var ri=Hh("ServiceWorkerLogsDatabase",{M:{SWHealthLog:{L:1}},shared:!0,upgrade:(a,b)=>{b(1)&&Wg(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function si(a,b){return r(function*(){var c=yield oh(ri(),b),d=R("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=qi(e.clientError));e.interface=d;return Yg(c,"SWHealthLog",e)})}
;w("ytNetworklessLoggingInitializationOptions",t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1});function ti(a,b,c,d){!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Af(new O("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw a=new O("innertube xhrclient not ready",b,c,d),zf(a),a;c={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:()=>{d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:(h,k)=>{if(d.onSuccess)d.onSuccess(k)},
onFetchSuccess:h=>{if(d.onSuccess)d.onSuccess(h)},
onError:(h,k)=>{if(d.onError)d.onError(k)},
onFetchError:h=>{if(d.onError)d.onError(h)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};c.headers["Content-Type"]||(c.headers["Content-Type"]="application/json");let e="";var f=a.config_.Ca;f&&(e=f);f=a.config_.Da||!1;const g=Yh(f,e,d);Object.assign(c.headers,g);c.headers.Authorization&&!e&&f&&(c.headers["x-origin"]=window.location.origin);a=Hf(`${e}${`/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`}`,{alt:"json"});try{Rf(a,c)}catch(h){if(h.name==="InvalidAccessError")Af(Error("An extension is blocking network request."));
else throw h;}}
var ui=class{constructor(a){this.config_=null;a?this.config_=a:Sh()&&(this.config_=Th())}isReady(){!this.config_&&Sh()&&(this.config_=Th());return!!this.config_}};let vi=0;w("ytDomDomGetNextId",v("ytDomDomGetNextId")||(()=>++vi));w("ytEventsEventsListeners",t.ytEventsEventsListeners||{});w("ytEventsEventsCounter",t.ytEventsEventsCounter||{count:0});t.ytPubsubPubsubInstance||new M;var wi=Symbol("injectionDeps"),xi=class{constructor(){this.name="INNERTUBE_TRANSPORT_TOKEN"}toString(){return`InjectionToken(${this.name})`}},yi=class{constructor(){this.key=Rh}};function zi(a){var b={ba:Ai,la:Bi.instance};a.i.set(b.ba,b);const c=a.j.get(b.ba);if(c)try{c.Ob(a.resolve(b.ba))}catch(d){c.Kb(d)}}
function Ci(a,b,c,d=!1){if(c.indexOf(b)>-1)throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(d.la!==void 0)var e=d.la;else if(d.Oa)e=d[wi]?Di(a,d[wi],c):[],e=d.Oa(...e);else if(d.Na){e=d.Na;const f=e[wi]?Di(a,e[wi],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.Vb||a.h.set(b,e);return e}
function Di(a,b,c){return b?b.map(d=>d instanceof yi?Ci(a,d.key,c,!0):Ci(a,d,c)):[]}
var Ei=class{constructor(){this.i=new Map;this.j=new Map;this.h=new Map}resolve(a){return a instanceof yi?Ci(this,a.key,[],!0):Ci(this,a,[])}};let Fi;function Gi(){Fi||(Fi=new Ei);return Fi}
;let Hi=window;function Ii(){let a,b;return"h5vcc"in Hi&&((a=Hi.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Hi.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Hi&&Hi.performance.mark&&Hi.performance.measure?2:0}
function Ji(a){const b=Ii();switch(b){case 1:Hi.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Hi.performance.mark(`${a}-start`);break;case 0:break;default:va(b,"unknown trace type")}}
function Ki(a){var b=Ii();switch(b){case 1:Hi.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=`${a}-start`;const c=`${a}-end`;Hi.performance.mark(c);Hi.performance.measure(a,b,c);break;case 0:break;default:va(b,"unknown trace type")}}
;var Li=S("web_enable_lifecycle_monitoring")&&Ii()!==0,Mi=S("web_enable_lifecycle_monitoring");function Ni(a){let b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Oi(a){let b;return(b=a.priority)!=null?b:0}
function Pi(a){var b=Array.from(a.h.keys()).sort((c,d)=>Oi(a.h[d])-Oi(a.h[c]));
for(const c of b)b=a.h[c],b.jobId===void 0||b.T||(a.scheduler.P(b.jobId),ng(b.Y,10))}
var Qi=class{constructor(a){this.scheduler=qg();this.i=new Ce;this.h=a;for(let b=0;b<this.h.length;b++){const c=this.h[b];a=()=>{c.Y();this.h[b].T=!0;this.h.every(e=>e.T===!0)&&this.i.resolve()};
const d=ng(a,Oi(c));this.h[b]=Object.assign({},c,{Y:a,jobId:d})}}cancel(){for(const a of this.h)a.jobId===void 0||a.T||this.scheduler.P(a.jobId),a.T=!0;this.i.resolve()}};function Ri(a,b,c){Mi&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),console.log("with message: ",c),console.groupEnd())}
function Si(a,b){const c=b.filter(e=>Ti(a,e)===10),d=b.filter(e=>Ti(a,e)!==10);
return a.l.Tb?(...e)=>r(function*(){yield Ui(c,...e);Vi(a,d,...e)}):(...e)=>{Wi(c,...e);
Vi(a,d,...e)}}
function Ti(a,b){let c,d;return(d=(c=a.j)!=null?c:b.priority)!=null?d:0}
function Ui(a,...b){return r(function*(){qg();for(const c of a){let d;og(()=>{Xi(c.name);const e=Yi(()=>c.callback(...b));
Qb(e)?d=S("web_lifecycle_error_handling_killswitch")?e.then(()=>{Zi(c.name)}):e.then(()=>{Zi(c.name)},f=>{Ni(f);
Zi(c.name)}):Zi(c.name)});
d&&(yield d)}})}
function Vi(a,b,...c){b=b.map(d=>({Y:()=>{Xi(d.name);Yi(()=>d.callback(...c));
Zi(d.name)},
priority:Ti(a,d)}));
b.length&&(a.i=new Qi(b))}
function Wi(a,...b){qg();for(const c of a)og(()=>{Xi(c.name);Yi(()=>c.callback(...b));
Zi(c.name)})}
function Xi(a){Li&&a&&Ji(a)}
function Zi(a){Li&&a&&Ki(a)}
var $i=class{constructor(){this.state="none";this.plugins=[];this.j=void 0;this.l={};Li&&Ji(this.state)}get currentState(){return this.state}install(a){this.plugins.push(a);return this}transition(a,b){Li&&Ki(this.state);var c=this.transitions.find(d=>Array.isArray(d.from)?d.from.find(e=>e===this.state&&d.to===a):d.from===this.state&&d.to===a);
if(c){this.i&&(Pi(this.i),this.i=void 0);Ri(this,a,b);this.state=a;Li&&Ji(this.state);c=c.action.bind(this);const d=this.plugins.filter(e=>e[a]).map(e=>e[a]);
c(Si(this,d),b)}else throw Error(`no transition specified from ${this.state} to ${a}`);}};function Yi(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Ni(b)}}
;function aj(){bj||(bj=new cj);return bj}
var cj=class extends $i{constructor(){super();this.h=null;this.j=10;this.transitions=[{from:"none",to:"application_navigating",action:this.m},{from:"application_navigating",to:"none",action:this.s},{from:"application_navigating",to:"application_navigating",action:()=>{}},
{from:"none",to:"none",action:()=>{}}]}m(a,b){this.h=mg(()=>{this.currentState==="application_navigating"&&this.transition("none")},5E3);
a(b==null?void 0:b.event)}s(a,b){this.h&&(sg.P(this.h),this.h=null);a(b==null?void 0:b.event)}},bj;let dj=[];w("yt.logging.transport.getScrapedGelPayloads",function(){return dj});function ej(a,b){const c=fj(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(d.length<=1&&fj(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(gj(b.auth,h[0])){var f=b.isJspb;gj(f===void 0?"undefined":f?"true":"false",h[1])&&gj(b.cttAuthInfo,h[2])&&(f=b.tier,f=f===void 0?"undefined":JSON.stringify(f),gj(f,h[3])&&e.push(d[g]))}}return a.h[c]=e}
function gj(a,b){return a===void 0||a==="undefined"?!0:a===b}
var hj=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=fj(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=ej(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):
c.push(...this.store[b[d]].splice(0,a.sizeLimit)));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=ej(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=ej(this,a);let b=0;for(let c=0;c<a.length;c++){let d;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b}};
hj.prototype.getSequenceCount=hj.prototype.getSequenceCount;hj.prototype.extractMatchingEntries=hj.prototype.extractMatchingEntries;hj.prototype.smartExtractMatchingEntries=hj.prototype.smartExtractMatchingEntries;hj.prototype.storePayload=hj.prototype.storePayload;function fj(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function ij(a,b){if(a)return a[b.name]}
;const jj=T("initial_gel_batch_timeout",2E3),kj=T("gel_queue_timeout_max_ms",6E4),lj=T("gel_min_batch_size",5);let mj=void 0;class nj{constructor(){this.l=this.h=this.i=0;this.j=!1}}const oj=new nj,pj=new nj,qj=new nj,rj=new nj;let sj,tj=!0,uj=1;const vj=new Map,wj=t.ytLoggingTransportTokensToCttTargetIds_||{},xj=t.ytLoggingTransportTokensToJspbCttTargetIds_||{};let yj={};function zj(){let a=v("yt.logging.ims");a||(a=new hj,w("yt.logging.ims",a));return a}
function Aj(a,b){if(a.endpoint==="log_event"){Bj();var c=Cj(a),d=Dj(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=oi[d||""];var f,g;if(Gi().resolve(new yi)==null)var h=void 0;else{let k;h=(k=v("yt.gcf.config.hotConfigGroup"))!=null?k:R("RAW_HOT_CONFIG_GROUP");h=h==null?void 0:(f=h.loggingHotConfig)==null?void 0:(g=f.eventLoggingConfig)==null?void 0:g.payloadPolicies}if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;
f=Ej(e.tier);if(f===400){Fj(a,b);return}}yj[c]=!0;c={cttAuthInfo:c,isJspb:!1,tier:f};zj().storePayload(c,a.payload);Gj(b,c,d==="gelDebuggingEvent")}}
function Gj(a,b,c=!1){a&&(mj=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("tvhtml5_logging_max_batch")||T("web_logging_max_batch")||100;const d=W(),e=Hj(!1,b.tier),f=e.l;c&&(e.j=!0);c=0;b&&(c=zj().getSequenceCount(b));c>=1E3?Ij({writeThenSend:!0},!1,b.tier):c>=a?sj||(sj=Jj(()=>{Ij({writeThenSend:!0},!1,b.tier);sj=void 0},0)):d-f>=10&&(Kj(!1,b.tier),e.l=d)}
function Fj(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&zj().storePayload({isJspb:!1},a.payload);Bj();var c=Cj(a),d=new Map;d.set(c,[a.payload]);var e=Dj(a.payload)||"";b&&(mj=new b);return new L((f,g)=>{mj&&mj.isReady()?Lj(d,mj,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Cj(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;const c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);wj[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Ij(a={},b=!1,c){new L((d,e)=>{const f=Hj(b,c),g=f.j;f.j=!1;Mj(f.i);Mj(f.h);f.h=0;mj&&mj.isReady()?c===void 0&&S("enable_web_tiered_gel")?Nj(d,e,a,b,300,g):Nj(d,e,a,b,c,g):(Kj(b,c),d())})}
function Nj(a,b,c={},d=!1,e=200,f=!1){var g=mj,h=new Map;const k=new Map,l={isJspb:d,cttAuthInfo:void 0,tier:e},p={isJspb:d,cttAuthInfo:void 0};if(d){for(const n of Object.keys(yj))b=S("enable_web_tiered_gel")?zj().smartExtractMatchingEntries({keys:[l,p],sizeLimit:1E3}):zj().extractMatchingEntries({isJspb:!0,cttAuthInfo:n}),b.length>0&&h.set(n,b),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete yj[n];Oj(h,g,a,c,f)}else{for(const n of Object.keys(yj))h=S("enable_web_tiered_gel")?
zj().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:n,tier:e},{isJspb:!1,cttAuthInfo:n}],sizeLimit:1E3}):zj().extractMatchingEntries({isJspb:!1,cttAuthInfo:n}),h.length>0&&k.set(n,h),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete yj[n];Lj(k,g,a,b,c,!1,f)}}
function Kj(a=!1,b=200){const c=()=>{Ij({writeThenSend:!0},a,b)},d=Hj(a,b);
var e=d===rj||d===qj?5E3:kj;S("web_gel_timeout_cap")&&!d.h&&(e=Jj(()=>{c()},e),d.h=e);
Mj(d.i);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&tj&&(e=jj);e=Jj(()=>{T("gel_min_batch_size")>0?zj().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=lj&&c():c()},e);
d.i=e}
function Lj(a,b,c,d,e={},f,g){const h=Math.round(W());let k=a.size;const l=Pj(g);for(const [p,n]of a){a=p;g=n;const q=Nd({context:Uh(b.config_||Th())});if(!ha(g)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}q.events=g;(g=wj[a])&&Qj(q,a,g);delete wj[a];const m=a==="visitorOnlyApprovedKey";Rj(q,h,m);Sj(e);const u=G=>{S("start_client_gcf")&&sg.h(()=>r(function*(){yield Tj(G)}));
k--;k||c()};
let B=0;const y=()=>{B++;if(e.bypassNetworkless&&B===1)try{ti(b,l,q,Uj({writeThenSend:!0},m,u,y,f)),tj=!1}catch(G){zf(G),d()}k--;k||c()};
try{ti(b,l,q,Uj(e,m,u,y,f)),tj=!1}catch(G){zf(G),d()}}}
function Oj(a,b,c,d={},e){const f=Math.round(W()),g={value:a.size};var h=new Map([...a]);for(const [B]of h){var k=B,l=a.get(k);h=new af;var p=b.config_||Th(),n=new Xe,q=new Pe;J(q,1,p.ja);J(q,2,p.ia);bd(q,16,p.Ba);J(q,17,p.innertubeContextClientVersion);if(p.X){var m=p.X,u=new Ne;m.coldConfigData&&J(u,1,m.coldConfigData);m.appInstallData&&J(u,6,m.appInstallData);m.coldHashData&&J(u,3,m.coldHashData);m.hotHashData&&J(u,5,m.hotHashData);I(q,Ne,62,u)}if((m=t.devicePixelRatio)&&m!=1){if(m!=null&&typeof m!==
"number")throw Error(`Value of float/double field must be a number, found ${typeof m}: ${m}`);Kc(q,65,m)}m=Of();m!==""&&J(q,54,m);m=Pf();if(m.length>0){u=new Te;for(let y=0;y<m.length;y++){const G=new Qe;J(G,1,m[y].key);ad(G,2,Re,m[y].value);Wc(u,15,Qe,G)}I(n,Te,5,u)}Vh(n);Wh(p,q);S("start_client_gcf")&&Xh(q);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(p=new We,J(p,3,R("DELEGATED_SESSION_ID")));!S("fill_delegate_context_in_gel_killswitch")&&(m=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(u=Tc(n,We,3)||new We,p=n,m=J(u,18,m),I(p,We,3,m));p=q;m=R("DEVICE","");for(const [y,G]of Object.entries(Gf(m)))m=y,u=G,m==="cbrand"?J(p,12,u):m==="cmodel"?J(p,13,u):m==="cbr"?J(p,87,u):m==="cbrver"?J(p,88,u):m==="cos"?J(p,18,u):m==="cosver"?J(p,19,u):m==="cplatform"&&bd(p,42,kg(u));n.j(q);I(h,Xe,1,n);if(q=xj[k])a:{if(Yc(q,1))n=1;else if(q.getPlaylistId())n=2;else break a;I(h,$e,4,q);q=Tc(h,Xe,1)||new Xe;p=Tc(q,We,3)||new We;m=new Ve;J(m,2,k);bd(m,1,n);Wc(p,12,Ve,m);I(q,We,3,p)}delete xj[k];k=k===
"visitorOnlyApprovedKey";Vj()||Kc(h,2,f==null?f:mc(f));!k&&(n=R("EVENT_ID"))&&(q=Wj(),p=new Ze,J(p,1,n),Kc(p,2,q==null?q:mc(q)),I(h,Ze,5,p));Sj(d);if(S("jspb_serialize_with_worker")){ni||((n=R("WORKER_SERIALIZATION_URL"))?((n=n.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?(sa===void 0&&(sa=ta()),n=(q=sa)?q.createScriptURL(n):n,n=new ua(n)):n=null,ni=n):ni=null);q=ni||void 0;if(!mi&&q!==void 0){n=Worker;if(q instanceof ua)q=q.h;else throw Error("");mi=new n(q,void 0)}if((n=mi)&&d.writeThenSend){vj.set(uj,
{client:b,resolve:c,networklessOptions:d,isIsolated:!1,useVSSEndpoint:e,dangerousLogToVisitorSession:k,requestsOutstanding:g});a=n;b=a.postMessage;c=yc(h);b.call(a,{op:"gelBatchToSerialize",batchRequest:c,clientEvents:l,key:uj});uj++;break}}if(l){n=[];for(q=0;q<l.length;q++)try{n.push(new Ye(l[q]))}catch(y){zf(new O("Transport failed to deserialize "+String(l[q])))}l=n}else l=[];for(const y of l)Wc(h,3,Ye,y);l={startTime:W(),ticks:{},infos:{}};h=JSON.stringify(yc(h));l.ticks.geljspc=W();S("log_jspb_serialize_latency")&&
Math.random()<.001&&fi("meta_logging_csi_event",{timerName:"gel_jspb_serialize",Wb:l});Xj(h,b,c,d,e,k,g)}}
function Xj(a,b,c,d={},e,f,g={value:0}){e=Pj(e);d=Uj(d,f,h=>{S("start_client_gcf")&&sg.h(()=>r(function*(){yield Tj(h)}));
g.value--;g.value||c()},()=>{g.value--;
g.value||c()},!1);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;ti(b,e,"",d);tj=!1}
function Sj(a){S("always_send_and_write")&&(a.writeThenSend=!1)}
function Uj(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,vb:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Vj()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Rj(a,b,c){Vj()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&(c=Wj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Wj(){let a=R("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*65535/2));a++;a>65535&&(a=1);Q("BATCH_CLIENT_COUNTER",a);return a}
function Qj(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Bj(){var a=Nf("il_payload_scraping");a=(a!==void 0?String(a):"")==="enable_il_payload_scraping";!v("yt.logging.transport.enableScrapingForTest")&&a&&(dj=[],w("yt.logging.transport.enableScrapingForTest",!0),w("yt.logging.transport.scrapedPayloadsForTesting",dj),w("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),w("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
w("yt.logging.transport.scrapeClientEvent",!0))}
function Vj(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Jj(a,b){return S("transport_use_scheduler")===!1?Kf(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?mg(()=>{aj().currentState==="none"?a():aj().install({none:{callback:a}})},b):mg(a,b)}
function Mj(a){S("transport_use_scheduler")?sg.P(a):window.clearTimeout(a)}
function Tj(a){return r(function*(){var b,c=a==null?void 0:(b=a.responseContext)==null?void 0:b.globalConfigGroup;b=ij(c,Le);const d=c==null?void 0:c.hotHashData,e=ij(c,Ke);c=c==null?void 0:c.coldHashData;const f=Gi().resolve(new yi);f&&(d&&(b?yield Ph(f,d,b):yield Ph(f,d)),c&&(e?yield Qh(f,c,e):yield Qh(f,c)))})}
function Hj(a,b=200){return a?b===300?rj:pj:b===300?qj:oj}
function Dj(a){a=Object.keys(a);for(const b of a)if(oi[b])return b}
function Ej(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Pj(a=!1){return a&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;const Yj=t.ytLoggingGelSequenceIdObj_||{};
function Zj(a,b,c,d={}){const e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=v("_lact",window);a=a==null?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Yj[b]=b in Yj?Yj[b]+1:0,a.sequence={index:Yj[b],groupKey:b},d.endOfSequence&&delete Yj[d.sequenceGroup]);(d.sendIsolatedPayload?Fj:Aj)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function ak(a=!1){Ij(void 0,a)}
;let bk=[];function Y(a,b,c={}){let d=ui;R("ytLoggingEventsDefaultDisabled",!1)&&ui===ui&&(d=null);Zj(a,b,d,c)}
;var ck=new Set,dk=0,ek=0,fk=0,gk=[];const hk=[],ik=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function jk(a){kk(a)}
function lk(a){kk(a,"WARNING")}
function kk(a,b="ERROR"){var c={};c.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION");mk(a,c,b)}
function mk(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(S("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(dk>=5)){d=[];for(e of hk)try{e()&&d.push(e())}catch(u){}var e=
d;e=[...gk,...e];var f=Ba(a);d=f.message||"Unknown Error";const q=f.name||"UnknownError";var g=f.stack||a.i||"Not available";if(g.startsWith(`${q}: ${d}`)){var h=g.split("\n");h.shift();g=h.join("\n")}h=f.lineNumber||"Not available";f=f.fileName||"Not available";let m=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0;k<a.args.length&&!(m=dg(a.args[k],`params.${k}`,b,m),m>=500);k++);else if(a.hasOwnProperty("params")&&a.params){const u=a.params;if(typeof a.params==="object")for(k in u){if(!u[k])continue;
const B=`params.${k}`,y=fg(u[k]);b[B]=y;m+=B.length+y.length;if(m>500)break}else b.params=fg(u)}if(e.length)for(k=0;k<e.length&&!(m=dg(e[k],`params.context.${k}`,b,m),m>=500);k++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:d,name:q,lineNumber:h,fileName:f,stack:g,params:b,sampleWeight:1};k=Number(a.columnNumber);isNaN(k)||(b.lineNumber=`${b.lineNumber}:${k}`);if(a.level==="IGNORED")var l=0;else a:{a=Xf();for(l of a.F)if(b.message&&b.message.match(l.Ga)){l=
l.weight;break a}for(var p of a.D)if(p.callback(b)){l=p.weight;break a}l=1}b.sampleWeight=l;l=b;for(var n of Uf)if(n.S[l.name]){p=n.S[l.name];for(const u of p)if(p=l.message.match(u.u)){l.params["params.error.original"]=p[0];a=u.groups;b={};for(k=0;k<a.length;k++)b[a[k]]=p[k+1],l.params[`params.error.${a[k]}`]=p[k+1];l.message=n.Z(b);break}}l.params||(l.params={});n=Xf();l.params["params.errorServiceSignature"]=`msg=${n.F.length}&cb=${n.D.length}`;l.params["params.serviceWorker"]="true";t.document&&
t.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Qd(Rd,"sample")).constructor!==Qd&&(l.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(l);l.sampleWeight===0||ck.has(l.message)||nk(l,c)}}}
function nk(a,b="ERROR"){if(b==="ERROR"){ag.B("handleError",a);if(S("record_app_crashed_web")&&fk===0&&a.sampleWeight===1){fk++;var c={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(c.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}});Y("appCrashed",c)}ek++}else b==="WARNING"&&ag.B("handleWarning",a);c={};b:{for(e of ik){var d=Ta();if(d&&d.toLowerCase().indexOf(e.toLowerCase())>=0){var e=!0;break b}}e=!1}if(e)c=void 0;else{d={stackTrace:a.stack};
a.fileName&&(d.filename=a.fileName);e=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];e.length!==0&&(e.length!==1||isNaN(Number(e[0]))?e.length!==2||isNaN(Number(e[0]))||isNaN(Number(e[1]))||(d.lineNumber=Number(e[0]),d.columnNumber=Number(e[1])):d.lineNumber=Number(e[0]));e={level:"ERROR_LEVEL_UNKNOWN",message:a.message,errorClassName:a.name,sampleWeight:a.sampleWeight};b==="ERROR"?e.level="ERROR_LEVEL_ERROR":b==="WARNING"&&(e.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};
c.pageUrl=window.location.href;c.kvPairs=[];R("FEXP_EXPERIMENTS")&&(c.experimentIds=R("FEXP_EXPERIMENTS"));var f=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");const k=vf.EXPERIMENT_FLAGS;if((!k||!k.web_disable_gel_stp_ecatcher_killswitch)&&f)for(var g of Object.keys(f))c.kvPairs.push({key:g,value:String(f[g])});if(g=a.params)for(var h of Object.keys(g))c.kvPairs.push({key:`client.${h}`,value:String(g[h])});h=R("SERVER_NAME");g=R("SERVER_VERSION");h&&g&&(c.kvPairs.push({key:"server.name",value:h}),
c.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:c,stackTrace:d,logMessage:e}}if(c&&(Y("clientError",c),b==="ERROR"||S("errors_flush_gel_always_killswitch")))a:{if(S("web_fp_via_jspb")){b=bk;bk=[];if(b)for(const k of b)Zj(k.N,k.payload,ui,k.options);ak(!0);if(!S("web_fp_via_jspb_and_json"))break a}ak()}try{ck.add(a.message)}catch(k){}dk++}
function ok(a,...b){a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push(...b)}
;function pk(a){return r(function*(){var b=yield t.fetch(a.i);if(b.status!==200)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]==="yt.sw.adr"){b=new rf(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function qk(a=!1){const b=rk.instance;return r(function*(){if(a||!b.h)b.h=pk(b).then(b.j).catch(c=>{delete b.h;kk(c)});
return b.h})}
var rk=class{constructor(){this.i=sk("/sw.js_data")}j(a){const b=Tc(a,qf,2,Kb);if(b){var c=Xc(b,5);c&&(t.__SAPISID=c);E(F(b,10))!=null?Q("EOM_VISITOR_DATA",Xc(b,10)):E(F(b,7))!=null&&Q("VISITOR_DATA",Xc(b,7));if(lc(F(b,4))!=null){c=String;let e;var d=(e=lc(F(b,4)))!=null?e:0;Q("SESSION_INDEX",c(d))}E(F(b,8))!=null&&Q("DELEGATED_SESSION_ID",Xc(b,8));E(F(b,12))!=null&&Q("USER_SESSION_ID",Xc(b,12));E(F(b,11))!=null&&Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",Xc(b,11))}return a}};function tk(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string"&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},Number(b.expirationSeconds)*1E3))}
var uk=class{constructor(){this.h={}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");let c,d;b=((c=b.G.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];let e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];tk(this,a)}}};let vk=Date.now().toString();function wk(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}a=Array(16);for(b=0;b<16;b++){c=Date.now();for(let d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(Math.random()*256)}if(vk)for(b=1,c=0;c<vk.length;c++)a[b%16]^=a[(b-1)%16]/4^vk.charCodeAt(c),b++;return a}
;var xk;let yk=t.ytLoggingDocDocumentNonce_;if(!yk){const a=wk(),b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));yk=b.join("")}xk=yk;var zk={Sa:0,Pa:1,Ra:2,fb:3,Ua:4,rb:5,gb:6,nb:7,lb:8,mb:9,qb:10,kb:11,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH",10:"UNPLUGGED_BROWSE",11:"PICTURE_IN_PICTURE"};let Ak=1;function Bk(a){return new Ck({trackingParams:a})}
function Dk(a,b,c,d,e,f){const g=Ak++;return new Ck({veType:a,veCounter:g,elementIndex:c,dataElement:b,youtubeData:d,jspbYoutubeData:e,loggingDirectives:f})}
var Ck=class{constructor(a){this.h=a}getAsJson(){const a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new Se;
this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&$c(a,2,this.h.veType),this.h.veCounter!==void 0&&$c(a,6,this.h.veCounter),this.h.elementIndex!==void 0&&$c(a,3,this.h.elementIndex),this.h.isCounterfactual&&Kc(a,5,!0));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();I(a,Se,7,b)}this.h.youtubeData!==void 0&&I(a,Me,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&
!!this.h.veType}getLoggingDirectives(){return this.h.loggingDirectives}};function Ek(a=0){return R("client-screen-nonce-store",{})[a]}
function Fk(a,b=0){let c=R("client-screen-nonce-store");c||(c={},Q("client-screen-nonce-store",c));c[b]=a}
function Gk(a=0){return a===0?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function Hk(a=0){return R(Gk(a))}
function Ik(a=0){return(a=Hk(a))?new Ck({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Jk(){let a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function Kk(){return Object.values(R("client-screen-nonce-store",{})).filter(a=>a!==void 0)}
function Z(a=0){a=Ek(a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function Lk(a){for(const b of Object.values(zk))if(Z(b)===a)return!0;return!1}
function Mk(a,b,c){const d=Jk();(c=Z(c))&&delete d[c];b&&(d[a]=b)}
function Nk(a){return Jk()[a]}
function Ok(a,b,c=0,d){if(a!==Ek(c)||b!==R(Gk(c)))if(Mk(a,d,c),Fk(a,c),Q(Gk(c),b),b=()=>{setTimeout(()=>{a&&Y("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:xk,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
;function Pk(){var a=R("INNERTUBE_CONTEXT");if(!a)return kk(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=Nd(a);S("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=Of();c?b.experimentsToken=c:delete b.experimentsToken;uk.instance||(uk.instance=new uk);b=uk.instance.h;c=[];let d=0;for(var e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});
a.user=Object.assign({},a.user);if(e=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))a.user.serializedDelegationContext=e;return a}
;function Qk(a){var b=a;if(a=R("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Fa);b=d[5];var e=d[6];d=d[7];let f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;function Rk(a){const b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=
R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;var Sk=class{constructor(){this.h={}}get(a){if(Object.prototype.hasOwnProperty.call(this.h,a))return this.h[a]}set(a,b){this.h[a]=b}remove(a){delete this.h[a]}};new class{constructor(){this.mappings=new Sk}get(a){var b=this.mappings.get(a.toString());a:switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=va(b,void 0)}return a}};var Tk=class{},Uk=class extends Tk{};const Vk={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends Uk{})};class ai extends Zh{constructor(a){super(arguments);this.csn=a}}const ii=new $h,Wk=[];let Yk=Xk,Zk=0;const $k=new Map,al=new Map,bl=new Map;
function cl(a,b,c,d,e,f,g,h){const k=Yk(),l=new Ck({veType:b,youtubeData:f,jspbYoutubeData:void 0});f=dl({},k);e&&(f.cttAuthInfo=e);e={csn:k,pageVe:l.getAsJson()};S("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations);c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&lk(new O("newScreen() parent element does not have a VE - rootVe",
b));d&&(e.cloneCsn=d);a?Zj("screenCreated",e,a,f):Y("screenCreated",e,f);fi(ii,new ai(k));$k.clear();al.clear();bl.clear();return k}
function el(a,b,c,d,e=!1){fl(a,b,c,[d],e)}
function fl(a,b,c,d,e=!1){const f=dl({cttAuthInfo:Nk(b)||void 0},b);for(const h of d){var g=h.getAsJson();(Md(g)||!g.trackingParams&&!g.veType)&&lk(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){const k=gl(h,b);if(g.veType&&!al.has(k)&&!bl.has(k)&&!e){if(!S("il_attach_cache_limit")||$k.size<1E3){$k.set(k,[a,b,c,h]);return}S("il_attach_cache_limit")&&$k.size>1E3&&lk(new O("IL Attach cache exceeded limit"))}g=gl(c,b);$k.has(g)?hl(c,b):bl.set(g,!0)}}d=d.filter(h=>{h.csn!==
b?(h.csn=b,h=!0):h=!1;return h});
c={csn:b,parentVe:c.getAsJson(),childVes:xa(d,h=>h.getAsJson())};
b==="UNDEFINED_CSN"?il("visualElementAttached",f,c):a?Zj("visualElementAttached",c,a,f):Y("visualElementAttached",c,f)}
function jl(a,b,c,d,e){kl(a,b,c,e)}
function kl(a,b,c,d){ll(c,b);const e=dl({cttAuthInfo:Nk(b)||void 0},b);c={csn:b,ve:c.getAsJson(),eventType:1};d&&(c.clientData=d);b==="UNDEFINED_CSN"?il("visualElementShown",e,c):a?Zj("visualElementShown",c,a,e):Y("visualElementShown",c,e)}
function ml(a,b,c,d=!1){const e=d?16:8;d=dl({cttAuthInfo:Nk(b)||void 0,endOfSequence:d},b);c={csn:b,ve:c.getAsJson(),eventType:e};b==="UNDEFINED_CSN"?il("visualElementHidden",d,c):a?Zj("visualElementHidden",c,a,d):Y("visualElementHidden",c,d)}
function nl(a,b,c,d){var e=void 0;ll(c,b);e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";const f=dl({cttAuthInfo:Nk(b)||void 0},b);c={csn:b,ve:c.getAsJson(),gestureType:e};d&&(c.clientData=d);b==="UNDEFINED_CSN"?il("visualElementGestured",f,c):a?Zj("visualElementGestured",c,a,f):Y("visualElementGestured",c,f)}
function Xk(){let a;a=wk();const b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
function il(a,b,c){Wk.push({N:a,payload:c,Cb:void 0,options:b});Zk||(Zk=ji())}
function ki(a){if(Wk){for(const b of Wk)b.payload&&(b.payload.csn=a.csn,Y(b.N,b.payload,b.options));Wk.length=0}Zk=0}
function gl(a,b){return`${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`}
function ll(a,b){if(S("no_client_ve_attach_unless_shown")){var c=gl(a,b);al.set(c,!0);hl(a,b)}}
function hl(a,b){a=gl(a,b);$k.has(a)&&(b=$k.get(a)||[],el(b[0],b[1],b[2],b[3],!0),$k.delete(a))}
function dl(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;Object.assign({auto_search:"LATENCY_ACTION_AUTO_SEARCH",ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",cast_splash:"LATENCY_ACTION_CAST_SPLASH",channel_activity:"LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",channels:"LATENCY_ACTION_CHANNELS",chips:"LATENCY_ACTION_CHIPS",commerce_transaction:"LATENCY_ACTION_COMMERCE_TRANSACTION",direct_playback:"LATENCY_ACTION_DIRECT_PLAYBACK",editor:"LATENCY_ACTION_EDITOR",
embed:"LATENCY_ACTION_EMBED",embed_no_video:"LATENCY_ACTION_EMBED_NO_VIDEO",entity_key_serialization_perf:"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",entity_key_deserialization_perf:"LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",explore:"LATENCY_ACTION_EXPLORE",favorites:"LATENCY_ACTION_FAVORITES",home:"LATENCY_ACTION_HOME",inboarding:"LATENCY_ACTION_INBOARDING",landing:"LATENCY_ACTION_LANDING",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",live_pagination:"LATENCY_ACTION_LIVE_PAGINATION",
management:"LATENCY_ACTION_MANAGEMENT",mini_app:"LATENCY_ACTION_MINI_APP_PLAY",notification_settings:"LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",onboarding:"LATENCY_ACTION_ONBOARDING",parent_profile_settings:"LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",parent_tools_collection:"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",parent_tools_dashboard:"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",player_att:"LATENCY_ACTION_PLAYER_ATTESTATION",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",
profile_settings:"LATENCY_ACTION_KIDS_PROFILE_SETTINGS",profile_switcher:"LATENCY_ACTION_LOGIN",projects:"LATENCY_ACTION_PROJECTS",reel_watch:"LATENCY_ACTION_REEL_WATCH",results:"LATENCY_ACTION_RESULTS",red:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",premium:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",privacy_policy:"LATENCY_ACTION_KIDS_PRIVACY_POLICY",review:"LATENCY_ACTION_REVIEW",search_overview_answer:"LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",search_ui:"LATENCY_ACTION_SEARCH_UI",search_suggest:"LATENCY_ACTION_SUGGEST",
search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",secret_code:"LATENCY_ACTION_KIDS_SECRET_CODE",seek:"LATENCY_ACTION_PLAYER_SEEK",settings:"LATENCY_ACTION_SETTINGS",store:"LATENCY_ACTION_STORE",supervision_dashboard:"LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",tenx:"LATENCY_ACTION_TENX",video_preview:"LATENCY_ACTION_VIDEO_PREVIEW",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",watch_it_again:"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH",
"watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING",voice_assistant:"LATENCY_ACTION_VOICE_ASSISTANT",cast_load_by_entity_to_watch:"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",networkless_performance:"LATENCY_ACTION_NETWORKLESS_PERFORMANCE",gel_compression:"LATENCY_ACTION_GEL_COMPRESSION",gel_jspb_serialize:"LATENCY_ACTION_GEL_JSPB_SERIALIZE",attestation_challenge_fetch:"LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH"},
{"analytics.explore":"LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE","artist.analytics":"LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS","artist.events":"LATENCY_ACTION_CREATOR_ARTIST_CONCERTS","artist.presskit":"LATENCY_ACTION_CREATOR_ARTIST_PROFILE","asset.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS","asset.composition":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION","asset.composition_ownership":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP","asset.composition_policy":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",
"asset.embeds":"LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS","asset.history":"LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY","asset.issues":"LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES","asset.licenses":"LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES","asset.metadata":"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA","asset.ownership":"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP","asset.policy":"LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY","asset.references":"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES","asset.shares":"LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",
"asset.sound_recordings":"LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS","asset_group.assets":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS","asset_group.campaigns":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS","asset_group.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS","asset_group.metadata":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA","song.analytics":"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",creator_channel_dashboard:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
"channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS","channel.content":"LATENCY_ACTION_CREATOR_POST_LIST","channel.content.promotions":"LATENCY_ACTION_CREATOR_PROMOTION_LIST","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.editing":"LATENCY_ACTION_CREATOR_CHANNEL_EDITING","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.music":"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC","channel.music_storefront":"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
"channel.playlists":"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS","channel.live_streaming":"LATENCY_ACTION_CREATOR_LIVE_STREAMING","dialog.copyright_strikes":"LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES","dialog.video_copyright":"LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT","dialog.uploads":"LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",owner:"LATENCY_ACTION_CREATOR_CMS_DASHBOARD",
"owner.allowlist":"LATENCY_ACTION_CREATOR_CMS_ALLOWLIST","owner.analytics":"LATENCY_ACTION_CREATOR_CMS_ANALYTICS","owner.art_tracks":"LATENCY_ACTION_CREATOR_CMS_ART_TRACKS","owner.assets":"LATENCY_ACTION_CREATOR_CMS_ASSETS","owner.asset_groups":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS","owner.bulk":"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY","owner.campaigns":"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS","owner.channel_invites":"LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES","owner.channels":"LATENCY_ACTION_CREATOR_CMS_CHANNELS",
"owner.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS","owner.claims":"LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING","owner.claims.manual":"LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING","owner.delivery":"LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY","owner.delivery_templates":"LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES","owner.issues":"LATENCY_ACTION_CREATOR_CMS_ISSUES","owner.licenses":"LATENCY_ACTION_CREATOR_CMS_LICENSES","owner.pitch_music":"LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC","owner.policies":"LATENCY_ACTION_CREATOR_CMS_POLICIES",
"owner.releases":"LATENCY_ACTION_CREATOR_CMS_RELEASES","owner.reports":"LATENCY_ACTION_CREATOR_CMS_REPORTS","owner.videos":"LATENCY_ACTION_CREATOR_CMS_VIDEOS","playlist.videos":"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST","post.comments":"LATENCY_ACTION_CREATOR_POST_COMMENTS","post.edit":"LATENCY_ACTION_CREATOR_POST_EDIT","promotion.edit":"LATENCY_ACTION_CREATOR_PROMOTION_EDIT","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.claims":"LATENCY_ACTION_CREATOR_VIDEO_CLAIMS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
"video.copyright":"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.editor":"LATENCY_ACTION_CREATOR_VIDEO_EDITOR","video.editor_async":"LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC","video.live_settings":"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS","video.live_streaming":"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING","video.monetization":"LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION","video.policy":"LATENCY_ACTION_CREATOR_VIDEO_POLICY","video.rights_management":"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",
"video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS"});w("ytLoggingLatencyUsageStats_",t.ytLoggingLatencyUsageStats_||{});const ol=window;class pl{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var ql=ol.performance||ol.mozPerformance||ol.msPerformance||ol.webkitPerformance||new pl;la(ql.clearResourceTimings||ql.webkitClearResourceTimings||ql.mozClearResourceTimings||ql.msClearResourceTimings||ql.oClearResourceTimings||Ld,ql);const rl=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function sl(a){var b={xb:{}},c=gg();if(Bi.instance!==void 0){const d=Bi.instance;a=[b!==d.m,a!==d.l,c!==d.j,!1,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new O("InnerTubeTransportService is already initialized",a);
}else Bi.instance=new Bi(b,a,c)}
function tl(a,b){return r(function*(){var c;const d=a==null?void 0:(c=a.ea)==null?void 0:c.sessionIndex;c=yield pe(ig(0,{sessionIndex:d}));return Promise.resolve(Object.assign({},Rk(b),c))})}
function ul(a,b,c,d=()=>{}){return r(function*(){var e;
if(b==null?0:(e=b.G)==null?0:e.context){e=b.G.context;for(var f of[])yield f.Jb(e)}var g;if((g=a.i)==null?0:g.Sb(b.input,b.G))return yield a.i.Eb(b.input,b.G);var h;if((g=(h=b.config)==null?void 0:h.Mb)&&a.h.has(g))var k=a.h.get(g);else{h=JSON.stringify(b.G);let q;f=(q=(k=b.O)==null?void 0:k.headers)!=null?q:{};b.O=Object.assign({},b.O,{headers:Object.assign({},f,c)});k=Object.assign({},b.O);b.O.method==="POST"&&(k=Object.assign({},k,{body:h}));k=a.l.fetch(b.input,k,b.config);g&&a.h.set(g,k)}k=yield k;
var l;let p;if(k&&"error"in k&&((l=k)==null?0:(p=l.error)==null?0:p.details)){l=k.error.details;for(const q of l)(l=q["@type"])&&rl.indexOf(l)>-1&&(delete q["@type"],k=q)}g&&a.h.has(g)&&a.h.delete(g);let n;!k&&((n=a.i)==null?0:n.wb(b.input,b.G))&&(k=yield a.i.Db(b.input,b.G));d();return k||void 0})}
function vl(a,b,c){var d={ea:{identity:jg}};let e=()=>{};
b.context||(b.context=Pk());return new L(f=>r(function*(){var g=Qk(c);g=Jf(g)?"same-origin":"cors";if(a.j.La){var h,k=d==null?void 0:(h=d.ea)==null?void 0:h.sessionIndex;h=ig(0,{sessionIndex:k});g=Object.assign({},Rk(g),h)}else g=yield tl(d,g);h=Qk(c);k={};S("json_condensed_response")&&(k.prettyPrint="false");h=If(h,k||{},!1);k={method:"POST",mode:Jf(h)?"same-origin":"cors",credentials:Jf(h)?"same-origin":"include"};var l={};const p={};for(const n of Object.keys(l))l[n]&&(p[n]=l[n]);Object.keys(p).length>
0&&(k.headers=p);f(ul(a,{input:h,O:k,G:b,config:d},g,e))}))}
var Bi=class{constructor(a,b,c){this.m=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.ca||(a.ca={});a.ca=Object.assign({},Vk,a.ca)}};var Ai=new xi;let wl;function xl(){if(!wl){const a=Gi();sl({fetch:(b,c)=>pe(fetch(new Request(b,c)))});
zi(a);wl=a.resolve(Ai)}return wl}
;function yl(a){return r(function*(){yield zl();lk(a)})}
function Al(a){return r(function*(){yield zl();kk(a)})}
function Bl(a){r(function*(){var b=yield yh();b?yield si(a,b):(yield qk(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{N:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{N:"clientError",payload:a.clientError,options:b}:void 0,b&&Y(b.N,b.payload))})}
function zl(){return r(function*(){try{yield qk()}catch(a){}})}
;var Cl=Symbol("trackingData"),Dl=new WeakMap;function El(){Fl.instance||(Fl.instance=new Fl);return Fl.instance}
function Gl(a){const b=Hl(a);let c,d;if(S("il_use_view_model_logging_context")&&(b==null?0:(c=b.context)==null?0:(d=c.loggingContext)==null?0:d.loggingDirectives))return b.context.loggingContext.loggingDirectives.trackingParams||"";let e,f;if(b==null?0:(e=b.rendererContext)==null?0:(f=e.loggingContext)==null?0:f.loggingDirectives)return b.rendererContext.loggingContext.loggingDirectives.trackingParams||"";if(b==null?0:b.loggingDirectives)return b.loggingDirectives.trackingParams||"";let g;return((g=
a.veContainer)==null?0:g.trackingParams)?a.veContainer.trackingParams:(b==null?void 0:b.trackingParams)||""}
function Il(a,b,c){const d=Z(c);return a.csn===null||d===a.csn||c?d:(a=new O("VisibilityLogger called before newScreen",{caller:b.tagName,previous_csn:a.csn,current_csn:d}),lk(a),null)}
function Jl(a){let b;return!((b=Hl(a))==null||!b.loggingDirectives)}
function Kl(a){a=Hl(a);return Math.floor(Number(a&&a.loggingDirectives&&a.loggingDirectives.visibility&&a.loggingDirectives.visibility.types||""))||1}
function Hl(a){let b,c=a.data||((b=a.props)==null?void 0:b.data);if(a.isWebComponentWrapper){let d;c=(d=Dl.get(a))==null?void 0:d[Cl]}return c}
var Fl=class{constructor(){this.l=new Set;this.i=new Set;this.h=new Map;this.client=void 0;this.csn=null}j(a){this.client=a}m(){this.clear();this.csn=Z()}clear(){this.l.clear();this.i.clear();this.h.clear();this.csn=null}v(a,b,c){var d=Gl(a),e=a.visualElement?a.visualElement:d;b=this.l.has(e);var f=this.h.get(e);this.l.add(e);this.h.set(e,!0);a.impressionLog&&!b&&a.impressionLog();if(d||a.visualElement)if(c=Il(this,a,c)){var g=Jl(a);if(Kl(a)||g)e=a.visualElement?a.visualElement:Bk(d),d=a.interactionLoggingClientData,
g||b?Kl(a)&4?f||(a=this.client,ll(e,c),b=dl({cttAuthInfo:Nk(c)||void 0},c),f={csn:c,ve:e.getAsJson(),eventType:4},d&&(f.clientData=d),c==="UNDEFINED_CSN"?il("visualElementShown",b,f):a?Zj("visualElementShown",f,a,b):Y("visualElementShown",f,b)):Kl(a)&1&&!b&&kl(this.client,c,e,d):kl(this.client,c,e,d)}}s(a,b,c){var d=Gl(a);const e=a.visualElement?a.visualElement:d;b=this.i.has(e);const f=this.h.get(e);this.i.add(e);this.h.set(e,!1);if(f===!1)return!0;if(!d&&!a.visualElement)return!1;c=Il(this,a,c);
if(!c||!Kl(a)&&Jl(a))return!1;d=a.visualElement?a.visualElement:Bk(d);Kl(a)&8?ml(this.client,c,d):Kl(a)&2&&!b&&(a=this.client,b=dl({cttAuthInfo:Nk(c)||void 0},c),d={csn:c,ve:d.getAsJson(),eventType:2},c==="UNDEFINED_CSN"?il("visualElementHidden",b,d):a?Zj("visualElementHidden",d,a,b):Y("visualElementHidden",d,b));return!0}};function Ll(){Ml.instance||(Ml.instance=new Ml)}
function Nl(a){Ll();yf(El().v).bind(El())(a,void 0,8)}
function Ol(a){Ll();yf(El().s).bind(El())(a,void 0,8)}
var Ml=class{j(a){yf(El().j).bind(El())(a)}clear(){yf(El().clear).bind(El())()}};function Pl(){Ql.instance||(Ql.instance=new Ql);return Ql.instance}
function Rl(a,b,c={}){a.i.add(c.layer||0);a.m=()=>{Sl(a,b,c);const d=Ik(c.layer);if(d){for(const e of a.B)Tl(a,e[0],e[1]||d,c.layer);for(const e of a.C)Ul(a,e[0],e[1])}};
Z(c.layer)||a.m();if(c.ga)for(const d of c.ga)Vl(a,d,c.layer);else kk(Error("Delayed screen needs a data promise."))}
function Sl(a,b,c={}){var d=void 0;c.layer||(c.layer=0);d=c.Ha!==void 0?c.Ha:c.layer;const e=Z(d);d=Ik(d);let f;d&&(c.parentCsn!==void 0?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&e!=="UNDEFINED_CSN"&&(f={clientScreenNonce:e,visualElement:d}));let g;const h=R("EVENT_ID");e==="UNDEFINED_CSN"&&h&&(g={servletData:{serializedServletEventId:h}});S("combine_ve_grafts")&&e&&Wl(a,e);S("no_client_ve_attach_unless_shown")&&d&&e&&hl(d,e);let k;try{k=cl(a.client,b,f,c.fa,c.cttAuthInfo,g,c.zb,c.loggingExpectations)}catch(n){ok(n,
{Pb:b,rootVe:d,Ib:void 0,yb:e,Hb:f,fa:c.fa});kk(n);return}Ok(k,b,c.layer,c.cttAuthInfo);e&&e!=="UNDEFINED_CSN"&&d&&!Lk(e)&&ml(a.client,e,d,!0);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Ll();yf(El().m).bind(El())();const l=Ik(c.layer);e&&e!=="UNDEFINED_CSN"&&l&&(S("web_mark_root_visible")||S("music_web_mark_root_visible"))&&yf(jl)(void 0,k,l,void 0,void 0,void 0);a.i.delete(c.layer||0);a.m=void 0;let p;(p=a.V.get(c.layer))==null||p.forEach((n,q)=>{n?Tl(a,q,n,c.layer):
l&&Tl(a,q,l,c.layer)});
Xl(a)}
function Yl(a){var b=28631,c={layer:8};yf(()=>{[28631].includes(b)||(lk(new O("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.B=[];a.C=[];c.ga?Rl(a,b,c):Sl(a,b,c)})()}
function Vl(a,b,c=0){yf(()=>{b.then(d=>{a.i.has(c)&&a.m&&a.m();const e=Z(c),f=Ik(c);if(e&&f){var g;(d==null?0:(g=d.response)==null?0:g.trackingParams)&&el(a.client,e,f,Bk(d.response.trackingParams));var h;(d==null?0:(h=d.playerResponse)==null?0:h.trackingParams)&&el(a.client,e,f,Bk(d.playerResponse.trackingParams))}})})()}
function Tl(a,b,c,d=0){return yf(()=>{if(a.i.has(d))return a.B.push([b,c]),!0;const e=Z(d),f=c||Ik(d);if(e&&f){if(S("combine_ve_grafts")){const g=a.l.get(f.toString());g?g.push(b):(a.v.set(f.toString(),f),a.l.set(f.toString(),[b]));a.K||(a.K=mg(()=>{Wl(a,e)},1200))}else el(a.client,e,f,b);
return!0}return!1})()}
function Zl(a,b){return yf(()=>{const c=Bk(b);Tl(a,c,void 0,8);return c})()}
function Wl(a,b){if(b===void 0){const c=Kk();for(let d=0;d<c.length;d++)c[d]!==void 0&&Wl(a,c[d])}else a.l.forEach((c,d)=>{(d=a.v.get(d))&&fl(a.client,b,d,c)}),a.l.clear(),a.v.clear(),a.K=void 0}
function $l(a,b,c,d=0){if(!b)return!1;d=Z(d);if(!d)return!1;nl(a.client,d,Bk(b),c);return!0}
function Ul(a,b,c,d=0){const e=Z(d);b=b||Ik(d);e&&b&&(a=a.client,d=dl({cttAuthInfo:Nk(e)||void 0},e),c={csn:e,ve:b.getAsJson(),clientData:c},e==="UNDEFINED_CSN"?il("visualElementStateChanged",d,c):a?Zj("visualElementStateChanged",c,a,d):Y("visualElementStateChanged",c,d))}
function Xl(a){for(var b=0;b<a.s.length;b++){var c=a.s[b];try{c()}catch(d){kk(d)}}a.s.length=0;for(b=0;b<a.H.length;b++){c=a.H[b];try{c()}catch(d){kk(d)}}}
var Ql=class{constructor(){this.B=[];this.C=[];this.h=[];this.s=[];this.H=[];this.l=new Map;this.v=new Map;this.i=new Set;this.V=new Map}j(a){this.client=a}clickCommand(a,b,c=0){return $l(this,a.clickTrackingParams,b,c)}stateChanged(a,b,c=0){this.visualElementStateChanged(Bk(a),b,c)}visualElementStateChanged(a,b,c=0){c===0&&this.i.has(c)?this.C.push([a,b]):Ul(this,a,b,c)}};const am={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},bm=RegExp("^(?:[a-z]+:)?//","i");function cm(a){var b=a.data;a=b.type;b=b.data;a==="notifications_register"?(P("IDToken",b),dm()):a==="notifications_check_registration"&&em(b)}
function fm(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function gm(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function hm(a){return r(function*(){const b=gm(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=pf(cf);return im().then(e=>vl(e,c,d).then(f=>{f.json().then(g=>g&&g.endpointUrl?jm(a,g.endpointUrl):Promise.resolve()).catch(g=>{Al(g);
Promise.reject(g)})}))})}
function km(a,b){var c=Z(8);if(c==null||!b)return a;a=bm.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function jm(a,b){a.deviceId&&P("DeviceId",a.deviceId);a.timestampSec&&P("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=Pl();Yl(d);var e;const f=(e=c.postedEndpoint)==null?void 0:e.clickTrackingParams;e=c==null?void 0:c.loggingDirectives;const g=c.title,h={body:c.body,icon:c.iconUrl,data:{nav:km(b,e==null?void 0:e.trackingParams),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0,loggingDirectives:e},
tag:c.notificationTag||c.title+c.body+c.iconUrl,requireInteraction:!0};return self.registration.showNotification(g,h).then(()=>{var k;((k=h.data)==null?0:k.postedEndpoint)&&lm(h.data.postedEndpoint);let l;if((l=h.data)==null?0:l.loggingDirectives)k=h.data.loggingDirectives,S("enable_client_ve_spec")&&k.clientVeSpec?(k=Dk(k.clientVeSpec.uiType,void 0,k.clientVeSpec.elementIndex,k.clientVeSpec.clientYoutubeData,void 0,k),k=Tl(d,k,void 0,8)?k:null):k=k.trackingParams?Zl(d,k.trackingParams):null,Nl({screenLayer:8,
visualElement:k});mm(a.displayCap)}).catch(()=>{})}
function lm(a){if(!ij(a,bf))return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:ij(a,bf).serializedInteractionsRequest},c=pf(df);return im().then(d=>vl(d,b,c)).then(d=>d)}
function mm(a){a!==-1&&self.registration.getNotifications().then(b=>{for(let d=0;d<b.length-a;d++){b[d].data.isDismissed=!1;b[d].close();let e,f;if((e=b[d].data)==null?0:(f=e.loggingDirectives)==null?0:f.trackingParams){var c=Bk(b[d].data.loggingDirectives.trackingParams);const g={screenLayer:8,visualElement:c},h=Dk(82046),k=Pl();Tl(k,h,c,8);Nl({screenLayer:8,visualElement:h});(c=Z(8))&&nl(k.client,c,h);Ol(g)}}})}
function em(a){const b=[nm(a),lf("RegistrationTimestamp").then(om),pm(),qm(),rm()];Promise.all(b).catch(()=>{P("IDToken",a);dm();return Promise.resolve()})}
function om(a){return Date.now()-(a||0)<=9E7?Promise.resolve():Promise.reject()}
function nm(a){return lf("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function pm(){return lf("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function qm(){return lf("Endpoint").then(a=>sm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function rm(){return lf("application_server_key").then(a=>tm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function um(){var a=Notification.permission;if(am[a])return am[a]}
function dm(){P("RegistrationTimestamp",0);Promise.all([sm(),vm(),wm(),tm()]).then(([a,b,c,d])=>{b=b?ff(b):null;c=c?ff(c):null;d=d?ab(new Uint8Array(d),4):null;xm(a,b,c,d)}).catch(()=>{xm()})}
function xm(a=null,b=null,c=null,d=null){kf().then(e=>{e&&(P("Endpoint",a),P("P256dhKey",b),P("AuthKey",c),P("application_server_key",d),P("Permission",Notification.permission),Promise.all([lf("DeviceId"),lf("NotificationsDisabled")]).then(([f,g])=>{if(f!=null)var h=f;else{f=[];var k;h=h||Ie.length;for(k=0;k<256;k++)f[k]=Ie[0|Math.random()*h];h=f.join("")}ym(h,a!=null?a:void 0,b!=null?b:void 0,c!=null?c:void 0,d!=null?d:void 0,g!=null?g:void 0)}))})}
function ym(a,b,c,d,e,f){r(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:um()}}},h=pf(ef);return im().then(k=>vl(k,g,h).then(()=>{P("DeviceId",a);P("RegistrationTimestamp",Date.now());P("TimestampLowerBound",Date.now())},l=>{yl(l)}))})}
function sm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function vm(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function wm(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function tm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function im(){return r(function*(){try{return yield qk(!0),xl()}catch(a){return yield yl(a),Promise.reject(a)}})}
;let zm=self.location.origin+"/";function sk(a){let b=typeof ServiceWorkerGlobalScope!=="undefined"&&self instanceof ServiceWorkerGlobalScope?Be.registration.scope:zm;b.endsWith("/")&&(b=b.slice(0,-1));return a==="/"?b:b+a}
;let Am=void 0;function Bm(a){return r(function*(){Am||(Am=yield a.open("yt-appshell-assets"));return Am})}
function Cm(a,b){return r(function*(){const c=yield Bm(a),d=b.map(e=>Dm(c,e));
return Promise.all(d)})}
function Em(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function Fm(a,b){return r(function*(){const c=yield Bm(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function Gm(a,b,c){return r(function*(){yield(yield Bm(a)).put(b,c)})}
function Hm(a,b){r(function*(){yield(yield Bm(a)).delete(b)})}
function Dm(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var Im=Hh("yt-serviceworker-metadata",{M:{auth:{L:1},["resource-manifest-assets"]:{L:2}},shared:!0,upgrade(a,b){b(1)&&Wg(a,"resource-manifest-assets");b(2)&&Wg(a,"auth")},version:2});let Jm=null;function Km(a){return oh(Im(),a)}
function Lm(){return r(function*(){const a=yield yh();if(a)return Mm.instance||(Mm.instance=new Mm(a)),Mm.instance})}
function Nm(a,b){return r(function*(){yield X(yield Km(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return V(d.h.put(b,e)).then(()=>{Jm=e;let f=!0;return ah(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,jh(g)):d.delete(g.cursor.key).then(()=>dh(g)))})})})}
function Om(a,b){return r(function*(){let c=!1,d=0;yield X(yield Km(a.token),["resource-manifest-assets"],"readonly",e=>ah(e.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.cursor.value.includes(b))c=!0;else return d+=1,dh(f)}));
return c?d:-1})}
function Pm(a){return r(function*(){Jm||(yield X(yield Km(a.token),["resource-manifest-assets"],"readonly",b=>ah(b.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{Jm=c.cursor.key})));
return Jm})}
var Mm=class{constructor(a){this.token=a}};function Qm(){return r(function*(){const a=yield yh();if(a)return Rm.instance||(Rm.instance=new Rm(a)),Rm.instance})}
function Sm(a,b){return r(function*(){yield Yg(yield Km(a.token),"auth",b,"shell_identifier_key")})}
function Tm(a){return r(function*(){return(yield(yield Km(a.token)).get("auth","shell_identifier_key"))||""})}
function Um(a){return r(function*(){yield(yield Km(a.token)).clear("auth")})}
var Rm=class{constructor(a){this.token=a}};function Vm(){r(function*(){const a=yield Qm();a&&(yield Um(a))})}
;var Wm=class extends K{constructor(a){super(a)}hasUrl(){return E(F(this,1))!=null}};function Xm(a){const b=a.o;return Uc(a,b,b[z]|0,Wm,1,void 0===Ib?2:4,!1,!0)}
var Ym=function(a,b){return(c,d)=>{{const f={da:!0};d&&Object.assign(f,d);c=ld(c,void 0,void 0,f);try{const g=new a,h=g.o;Gd(b)(h,c);var e=g}finally{pd(c)}}return e}}(class extends K{constructor(a){super(a)}},[0,
Kd,[0,Jd]]);function Zm(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve($m(b)):Promise.reject(Error("No resource manifest header"))})}
function $m(a){return Xm(Ym(decodeURIComponent(a))).reduce((b,c)=>{(c=Xc(c,1))&&b.push(c);return b},[])}
;function an(a){return r(function*(){const b=yield qk();if(b&&E(F(b,3,Kb))!=null){var c=yield Qm();c&&(c=yield Tm(c),E(F(b,3,Kb))!==c&&(Hm(a.caches,a.I),Vm()))}})}
function bn(a){return r(function*(){let b,c;try{c=yield cn(a.h),b=yield Zm(c),yield Cm(a.caches,b)}catch(d){return Promise.reject(d)}try{yield dn(),yield Gm(a.caches,a.I,c)}catch(d){return Promise.reject(d)}if(b)try{yield en(a,b,a.I)}catch(d){}return Promise.resolve()})}
function cn(a){return r(function*(){try{return yield t.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function dn(){return r(function*(){var a=yield qk();let b;a&&E(F(a,3,Kb))!=null&&(b=Xc(a,3,void 0,Kb));return b?(a=yield Qm())?Promise.resolve(Sm(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function en(a,b,c){return r(function*(){const d=yield Lm();if(d)try{yield Nm(d,b)}catch(e){yield yl(e)}b.push(c);try{yield Fm(a.caches,b)}catch(e){yield yl(e)}return Promise.resolve()})}
function fn(a,b){return r(function*(){return Em(a.caches,b)})}
function gn(a){return r(function*(){return Em(a.caches,a.I)})}
var hn=class{constructor(){var a=self.caches;let b;b=sk("/app_shell");S("service_worker_forward_exp_params")&&(b+=self.location.search);var c=sk("/app_shell_home");this.caches=a;this.h=b;this.I=c}initialize(){const a=this;return r(function*(){yield an(a);return bn(a)})}};var jn=class{constructor(){const a=this;this.stream=new ReadableStream({start(b){a.close=()=>void b.close();
a.h=c=>{const d=c.getReader();return d.read().then(function h({done:f,value:g}){if(f)return Promise.resolve();b.enqueue(g);return d.read().then(h)})};
a.i=()=>{const c=(new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");b.enqueue(c)}}})}};function kn(a,b){return r(function*(){const c=b.request,d=yield fn(a.h,c.url);if(d)return a.i&&Bl({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:W()}),d;ln(a,c);return mn(b)})}
function nn(a,b){return r(function*(){const c=yield on(b);if(c.response&&(c.response.ok||c.response.type==="opaqueredirect"||c.response.status===429||c.response.status===303||c.response.status>=300&&c.response.status<400))return c.response;const d=yield gn(a.h);if(d)return pn(a),qn(d,b);rn(a);return c.response?c.response:Promise.reject(c.error)})}
function sn(a,b){b=new URL(b);if(!a.config.qa.includes(b.pathname))return!1;if(!b.search)return!0;b=new URLSearchParams(b.search);for(const c of a.config.sa){if(c.key==="*")return!0;a=b.get(c.key);if(c.value===void 0||a===c.value)if(b.delete(c.key),!b.toString())return!0}return!1}
function tn(a,b){return r(function*(){const c=yield gn(a.h);if(!c)return rn(a),mn(b);pn(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(W()-d);break a}d=-1}if(!(d>-1&&d/864E5>=7))return qn(c,b);d=yield on(b);return d.response&&d.response.ok?d.response:qn(c,b)})}
function mn(a){return Promise.resolve(a.preloadResponse).then(b=>b&&!un(b)?b:t.fetch(a.request))}
function ln(a,b){if(a.i){var c={assetPath:b.url,cacheHit:!1};Lm().then(d=>{if(d){var e=Pm(d).then(f=>{f&&(c.currentAppBundleTimestampSec=String(Math.floor(f/1E3)))});
d=Om(d,b.url).then(f=>{c.appBundleVersionDiffCount=f});
Promise.all([e,d]).catch(f=>{yl(f)}).finally(()=>{Bl({appShellAssetLoadReport:c,
timestamp:W()})})}else Bl({appShellAssetLoadReport:c,
timestamp:W()})})}}
function pn(a){a.i&&Bl({appShellAssetLoadReport:{assetPath:a.h.I,cacheHit:!0},timestamp:W()})}
function rn(a){a.i&&Bl({appShellAssetLoadReport:{assetPath:a.h.I,cacheHit:!1},timestamp:W()})}
function qn(a,b){if(!S("sw_nav_preload_pbj"))return a;const c=new jn,d=c.h(a.body);Promise.resolve(b.preloadResponse).then(e=>{if(!e||!un(e))throw Error("no pbj preload response available");d.then(()=>c.h(e.body)).then(()=>void c.close())}).catch(()=>{d.then(()=>{c.i();
c.close()})});
return new Response(c.stream,{status:a.status,statusText:a.statusText,headers:a.headers})}
function on(a){return r(function*(){try{return{response:yield mn(a)}}catch(b){return{error:b}}})}
function un(a){return a.headers.get("x-navigation-preload-response-type")==="pbj"}
var Dn=class{constructor(){var a=vn;var b={xa:wn,Ia:xn([yn,/\/signin/,/\/logout/]),qa:["/","/feed/downloads"],sa:zn([{key:"feature",value:"ytca"}]),ra:An(S("kevlar_sw_app_wide_fallback")?Bn:Cn)};this.h=a;this.config=b;a=T("app_shell_asset_log_fraction");this.i=!0;a&&(this.i=Math.random()<a)}};const En=/^\/$/,Cn=[En,/^\/feed\/downloads$/],Bn=[En,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function An(a){return new RegExp(a.map(b=>b.source).join("|"))}
const Fn=/^https:\/\/([\w-]*\.)*youtube\.com.*/;function xn(a){a=An(a);return new RegExp(`${Fn.source}(${a.source})`)}
const Gn=An([/\.css$/,/\.js$/,/\.ico$/,/\/ytmweb\/_\/js\//,/\/ytmweb\/_\/ss\//,/\/kabuki\/_\/js\//,/\/kabuki\/_\/ss\//,/\/ytmainappweb\/_\/js\//,/\/ytmainappweb\/_\/ss\//]),wn=new RegExp(`${Fn.source}(${Gn.source})`),yn=/purge_shell=1/;function zn(a=[]){const b=[];for(const c of Mf)b.push({key:c});for(const c of a)b.push(c);return b}
xn([yn]);zn();var In=class{constructor(){var a=vn,b=Hn,c=self;if(t.URLPattern){var d=[];S("service_worker_static_routing_exclude_embed")&&d.push({condition:{urlPattern:new URLPattern({pathname:"/embed*"})},source:"network"});S("service_worker_static_routing_exclude_innertube")&&d.push({condition:{urlPattern:new URLPattern({pathname:"/youtubei/v1/*"})},source:"network"})}else d=[];this.h=c;this.i=a;this.s=b;this.C=gf;this.j=d}init(){this.h.oninstall=this.v.bind(this);this.h.onactivate=this.l.bind(this);this.h.onfetch=
this.m.bind(this);this.h.onmessage=this.B.bind(this)}v(a){this.h.skipWaiting();if(S("service_worker_static_routing_registration")&&this.j.length>0&&a.addRoutes)try{a.addRoutes(this.j)}catch(c){}const b=this.i.initialize().catch(c=>{yl(c);return Promise.resolve()});
a.waitUntil(b)}l(a){const b=[this.h.clients.claim()],c=this.h.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),S("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}m(a){const b=this;return r(function*(){var c=b.s,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.config.Ia.test(e.url))rk.instance&&(delete rk.instance.h,t.__SAPISID=void 0,Q("VISITOR_DATA",void 0),Q("SESSION_INDEX",void 0),Q("DELEGATED_SESSION_ID",
void 0),Q("USER_SESSION_ID",void 0),Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",void 0)),d=a.respondWith,c=c.h,Hm(c.caches,c.I),Vm(),c=mn(a),d.call(a,c);else if(c.config.xa.test(e.url))a.respondWith(kn(c,a));else if(e.mode==="navigate"){const f=new URL(e.url);c.config.ra.test(f.pathname)?a.respondWith(nn(c,a)):sn(c,e.url)?a.respondWith(tn(c,a)):d&&a.respondWith(mn(a))}})}B(a){const b=a.data;
this.C.includes(b.type)?cm(a):b.type==="refresh_shell"&&bn(this.i).catch(c=>{yl(c)})}};function Jn(){let a=v("ytglobal.storage_");a||(a=new Kn,w("ytglobal.storage_",a));return a}
var Kn=class{estimate(){return r(function*(){const a=navigator;let b;if((b=a.storage)==null?0:b.estimate)return a.storage.estimate();let c;if((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)return Ln()})}};
function Ln(){const a=navigator;return new Promise((b,c)=>{let d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
w("ytglobal.storageClass_",Kn);function Mn(a,b){Jn().estimate().then(c=>{c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Nn(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Nn(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class On{constructor(){var a=Pn;this.handleError=Qn;this.h=a;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=.2}R(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Mn(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},
b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function Nn(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;$f(Xf(),{F:[{Ga:/Failed to fetch/,weight:500}],D:[]});({handleError:Qn=jk,R:Pn=Y}={handleError:Al,R:function(a,b){return r(function*(){yield zl();Y(a,b)})}});
var Pn,Qn;for(ug=new On;tg.length>0;){const a=tg.shift();switch(a.type){case "ERROR":ug.handleError(a.payload);break;case "EVENT":ug.R(a.eventType,a.payload)}}rk.instance=new rk;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(lm(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data,c;if(b==null?0:(c=b.loggingDirectives)==null?0:c.trackingParams){a=Bk(b.loggingDirectives.trackingParams);c={screenLayer:8,visualElement:a};if(b.isDismissed){b=Dk(74726);const d=Pl();Tl(d,b,a,8);Nl({screenLayer:8,visualElement:b});(a=Z(8))&&nl(d.client,a,b)}Ol(c)}};
self.onpush=function(a){a.waitUntil(lf("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return hm(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(fm())};
self.onpushsubscriptionchange=function(){dm()};
const vn=new hn,Hn=new Dn;(new In).init();
