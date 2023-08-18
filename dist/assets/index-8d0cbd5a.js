function mA(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();Object.defineProperty(exports,"__esModule",{value:!0});exports.commonjsGlobal=void 0;exports.getAugmentedNamespace=wA;exports.getDefaultExportFromCjs=yA;exports.getDefaultExportFromNamespaceIfNotNamed=_A;exports.getDefaultExportFromNamespaceIfPresent=vA;var gA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};exports.commonjsGlobal=gA;function yA(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function vA(e){return e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _A(e){return e&&Object.prototype.hasOwnProperty.call(e,"default")&&Object.keys(e).length===1?e.default:e}function wA(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var iE={exports:{}},Uc={},sE={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),EA=Symbol.for("react.portal"),IA=Symbol.for("react.fragment"),TA=Symbol.for("react.strict_mode"),SA=Symbol.for("react.profiler"),PA=Symbol.for("react.provider"),RA=Symbol.for("react.context"),AA=Symbol.for("react.forward_ref"),kA=Symbol.for("react.suspense"),CA=Symbol.for("react.memo"),xA=Symbol.for("react.lazy"),Pv=Symbol.iterator;function OA(e){return e===null||typeof e!="object"?null:(e=Pv&&e[Pv]||e["@@iterator"],typeof e=="function"?e:null)}var oE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aE=Object.assign,lE={};function Zs(e,t,n){this.props=e,this.context=t,this.refs=lE,this.updater=n||oE}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uE(){}uE.prototype=Zs.prototype;function Am(e,t,n){this.props=e,this.context=t,this.refs=lE,this.updater=n||oE}var km=Am.prototype=new uE;km.constructor=Am;aE(km,Zs.prototype);km.isPureReactComponent=!0;var Rv=Array.isArray,cE=Object.prototype.hasOwnProperty,Cm={current:null},hE={key:!0,ref:!0,__self:!0,__source:!0};function dE(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)cE.call(t,r)&&!hE.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qa,type:e,key:s,ref:o,props:i,_owner:Cm.current}}function bA(e,t){return{$$typeof:qa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xm(e){return typeof e=="object"&&e!==null&&e.$$typeof===qa}function NA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Av=/\/+/g;function _d(e,t){return typeof e=="object"&&e!==null&&e.key!=null?NA(""+e.key):t.toString(36)}function nu(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qa:case EA:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+_d(o,0):r,Rv(i)?(n="",e!=null&&(n=e.replace(Av,"$&/")+"/"),nu(i,t,n,"",function(u){return u})):i!=null&&(xm(i)&&(i=bA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Av,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Rv(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+_d(s,a);o+=nu(s,t,n,l,i)}else if(l=OA(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+_d(s,a++),o+=nu(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Rl(e,t,n){if(e==null)return e;var r=[],i=0;return nu(e,r,"","",function(s){return t.call(n,s,i++)}),r}function DA(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},ru={transition:null},$A={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:ru,ReactCurrentOwner:Cm};G.Children={map:Rl,forEach:function(e,t,n){Rl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Rl(e,function(){t++}),t},toArray:function(e){return Rl(e,function(t){return t})||[]},only:function(e){if(!xm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Zs;G.Fragment=IA;G.Profiler=SA;G.PureComponent=Am;G.StrictMode=TA;G.Suspense=kA;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$A;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=aE({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Cm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)cE.call(t,l)&&!hE.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qa,type:e.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(e){return e={$$typeof:RA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:PA,_context:e},e.Consumer=e};G.createElement=dE;G.createFactory=function(e){var t=dE.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:AA,render:e}};G.isValidElement=xm;G.lazy=function(e){return{$$typeof:xA,_payload:{_status:-1,_result:e},_init:DA}};G.memo=function(e,t){return{$$typeof:CA,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=ru.transition;ru.transition={};try{e()}finally{ru.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return gt.current.useCallback(e,t)};G.useContext=function(e){return gt.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};G.useEffect=function(e,t){return gt.current.useEffect(e,t)};G.useId=function(){return gt.current.useId()};G.useImperativeHandle=function(e,t,n){return gt.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return gt.current.useMemo(e,t)};G.useReducer=function(e,t,n){return gt.current.useReducer(e,t,n)};G.useRef=function(e){return gt.current.useRef(e)};G.useState=function(e){return gt.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return gt.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return gt.current.useTransition()};G.version="18.2.0";sE.exports=G;var P=sE.exports;const ae=(void 0)(P),LA=mA({__proto__:null,default:ae},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MA=P,VA=Symbol.for("react.element"),UA=Symbol.for("react.fragment"),FA=Object.prototype.hasOwnProperty,jA=MA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BA={key:!0,ref:!0,__self:!0,__source:!0};function fE(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)FA.call(t,r)&&!BA.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:VA,type:e,key:s,ref:o,props:i,_owner:jA.current}}Uc.Fragment=UA;Uc.jsx=fE;Uc.jsxs=fE;iE.exports=Uc;var R=iE.exports,bf={},pE={exports:{}},Lt={},mE={exports:{}},gE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,V){var U=b.length;b.push(V);e:for(;0<U;){var me=U-1>>>1,Se=b[me];if(0<i(Se,V))b[me]=V,b[U]=Se,U=me;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var V=b[0],U=b.pop();if(U!==V){b[0]=U;e:for(var me=0,Se=b.length,xn=Se>>>1;me<xn;){var Rt=2*(me+1)-1,rr=b[Rt],At=Rt+1,Ft=b[At];if(0>i(rr,U))At<Se&&0>i(Ft,rr)?(b[me]=Ft,b[At]=U,me=At):(b[me]=rr,b[Rt]=U,me=Rt);else if(At<Se&&0>i(Ft,U))b[me]=Ft,b[At]=U,me=At;else break e}}return V}function i(b,V){var U=b.sortIndex-V.sortIndex;return U!==0?U:b.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=b)r(u),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(u)}}function _(b){if(v=!1,g(b),!y)if(n(l)!==null)y=!0,ei(E);else{var V=n(u);V!==null&&Ut(_,V.startTime-b)}}function E(b,V){y=!1,v&&(v=!1,m(C),C=-1),f=!0;var U=d;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||b&&!ie());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var Se=me(h.expirationTime<=V);V=e.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),g(V)}else r(l);h=n(l)}if(h!==null)var xn=!0;else{var Rt=n(u);Rt!==null&&Ut(_,Rt.startTime-V),xn=!1}return xn}finally{h=null,d=U,f=!1}}var I=!1,T=null,C=-1,M=5,x=-1;function ie(){return!(e.unstable_now()-x<M)}function Jr(){if(T!==null){var b=e.unstable_now();x=b;var V=!0;try{V=T(!0,b)}finally{V?Zr():(I=!1,T=null)}}else I=!1}var Zr;if(typeof p=="function")Zr=function(){p(Jr)};else if(typeof MessageChannel<"u"){var Sl=new MessageChannel,yd=Sl.port2;Sl.port1.onmessage=Jr,Zr=function(){yd.postMessage(null)}}else Zr=function(){w(Jr,0)};function ei(b){T=b,I||(I=!0,Zr())}function Ut(b,V){C=w(function(){b(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){y||f||(y=!0,ei(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var U=d;d=V;try{return b()}finally{d=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,V){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var U=d;d=b;try{return V()}finally{d=U}},e.unstable_scheduleCallback=function(b,V,U){var me=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?me+U:me):U=me,b){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=U+Se,b={id:c++,callback:V,priorityLevel:b,startTime:U,expirationTime:Se,sortIndex:-1},U>me?(b.sortIndex=U,t(u,b),n(l)===null&&b===n(u)&&(v?(m(C),C=-1):v=!0,Ut(_,U-me))):(b.sortIndex=Se,t(l,b),y||f||(y=!0,ei(E))),b},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(b){var V=d;return function(){var U=d;d=V;try{return b.apply(this,arguments)}finally{d=U}}}})(gE);mE.exports=gE;var zA=mE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE=P,Nt=zA;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vE=new Set,oa={};function Li(e,t){As(e,t),As(e+"Capture",t)}function As(e,t){for(oa[e]=t,e=0;e<t.length;e++)vE.add(t[e])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nf=Object.prototype.hasOwnProperty,WA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kv={},Cv={};function HA(e){return Nf.call(Cv,e)?!0:Nf.call(kv,e)?!1:WA.test(e)?Cv[e]=!0:(kv[e]=!0,!1)}function qA(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function KA(e,t,n,r){if(t===null||typeof t>"u"||qA(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Om=/[\-:]([a-z])/g;function bm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Om,bm);Xe[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Om,bm);Xe[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Om,bm);Xe[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nm(e,t,n,r){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(KA(t,n,i,r)&&(n=null),r||i===null?HA(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nr=yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Al=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),_E=Symbol.for("react.provider"),wE=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),Lf=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),EE=Symbol.for("react.offscreen"),xv=Symbol.iterator;function wo(e){return e===null||typeof e!="object"?null:(e=xv&&e[xv]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,wd;function Oo(e){if(wd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wd=t&&t[1]||""}return`
`+wd+e}var Ed=!1;function Id(e,t){if(!e||Ed)return"";Ed=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ed=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oo(e):""}function GA(e){switch(e.tag){case 5:return Oo(e.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return e=Id(e.type,!1),e;case 11:return e=Id(e.type.render,!1),e;case 1:return e=Id(e.type,!0),e;default:return""}}function Mf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zi:return"Fragment";case Ji:return"Portal";case Df:return"Profiler";case Dm:return"StrictMode";case $f:return"Suspense";case Lf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wE:return(e.displayName||"Context")+".Consumer";case _E:return(e._context.displayName||"Context")+".Provider";case $m:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lm:return t=e.displayName||null,t!==null?t:Mf(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return Mf(e(t))}catch{}}return null}function QA(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mf(t);case 8:return t===Dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function IE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function XA(e){var t=IE(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kl(e){e._valueTracker||(e._valueTracker=XA(e))}function TE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=IE(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vf(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ov(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$r(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function SE(e,t){t=t.checked,t!=null&&Nm(e,"checked",t,!1)}function Uf(e,t){SE(e,t);var n=$r(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ff(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ff(e,t.type,$r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ff(e,t,n){(t!=="number"||bu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bo=Array.isArray;function ds(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$r(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(bo(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$r(n)}}function PE(e,t){var n=$r(t.value),r=$r(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function RE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?RE(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cl,AE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cl=Cl||document.createElement("div"),Cl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function aa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YA=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(e){YA.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wo[t]=Wo[e]})});function kE(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wo.hasOwnProperty(e)&&Wo[e]?(""+t).trim():t+"px"}function CE(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kE(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var JA=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zf(e,t){if(t){if(JA[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Wf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hf=null;function Mm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qf=null,fs=null,ps=null;function $v(e){if(e=Qa(e)){if(typeof qf!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Wc(t),qf(e.stateNode,e.type,t))}}function xE(e){fs?ps?ps.push(e):ps=[e]:fs=e}function OE(){if(fs){var e=fs,t=ps;if(ps=fs=null,$v(e),t)for(e=0;e<t.length;e++)$v(t[e])}}function bE(e,t){return e(t)}function NE(){}var Td=!1;function DE(e,t,n){if(Td)return e(t,n);Td=!0;try{return bE(e,t,n)}finally{Td=!1,(fs!==null||ps!==null)&&(NE(),OE())}}function la(e,t){var n=e.stateNode;if(n===null)return null;var r=Wc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Kf=!1;if(qn)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Kf=!1}function ZA(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ho=!1,Nu=null,Du=!1,Gf=null,ek={onError:function(e){Ho=!0,Nu=e}};function tk(e,t,n,r,i,s,o,a,l){Ho=!1,Nu=null,ZA.apply(ek,arguments)}function nk(e,t,n,r,i,s,o,a,l){if(tk.apply(this,arguments),Ho){if(Ho){var u=Nu;Ho=!1,Nu=null}else throw Error(A(198));Du||(Du=!0,Gf=u)}}function Mi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lv(e){if(Mi(e)!==e)throw Error(A(188))}function rk(e){var t=e.alternate;if(!t){if(t=Mi(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Lv(i),e;if(s===r)return Lv(i),t;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function LE(e){return e=rk(e),e!==null?ME(e):null}function ME(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ME(e);if(t!==null)return t;e=e.sibling}return null}var VE=Nt.unstable_scheduleCallback,Mv=Nt.unstable_cancelCallback,ik=Nt.unstable_shouldYield,sk=Nt.unstable_requestPaint,Ae=Nt.unstable_now,ok=Nt.unstable_getCurrentPriorityLevel,Vm=Nt.unstable_ImmediatePriority,UE=Nt.unstable_UserBlockingPriority,$u=Nt.unstable_NormalPriority,ak=Nt.unstable_LowPriority,FE=Nt.unstable_IdlePriority,Fc=null,_n=null;function lk(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Fc,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:hk,uk=Math.log,ck=Math.LN2;function hk(e){return e>>>=0,e===0?32:31-(uk(e)/ck|0)|0}var xl=64,Ol=4194304;function No(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=No(a):(s&=o,s!==0&&(r=No(s)))}else o=n&~i,o!==0?r=No(o):s!==0&&(r=No(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),i=1<<n,r|=e[n],t&=~i;return r}function dk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=dk(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Qf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jE(){var e=xl;return xl<<=1,!(xl&4194240)&&(xl=64),e}function Sd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ka(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function pk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Um(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function BE(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zE,Fm,WE,HE,qE,Xf=!1,bl=[],wr=null,Er=null,Ir=null,ua=new Map,ca=new Map,cr=[],mk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vv(e,t){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ua.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(t.pointerId)}}function Io(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Qa(t),t!==null&&Fm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function gk(e,t,n,r,i){switch(t){case"focusin":return wr=Io(wr,e,t,n,r,i),!0;case"dragenter":return Er=Io(Er,e,t,n,r,i),!0;case"mouseover":return Ir=Io(Ir,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ua.set(s,Io(ua.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ca.set(s,Io(ca.get(s)||null,e,t,n,r,i)),!0}return!1}function KE(e){var t=oi(e.target);if(t!==null){var n=Mi(t);if(n!==null){if(t=n.tag,t===13){if(t=$E(n),t!==null){e.blockedOn=t,qE(e.priority,function(){WE(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hf=r,n.target.dispatchEvent(r),Hf=null}else return t=Qa(n),t!==null&&Fm(t),e.blockedOn=n,!1;t.shift()}return!0}function Uv(e,t,n){iu(e)&&n.delete(t)}function yk(){Xf=!1,wr!==null&&iu(wr)&&(wr=null),Er!==null&&iu(Er)&&(Er=null),Ir!==null&&iu(Ir)&&(Ir=null),ua.forEach(Uv),ca.forEach(Uv)}function To(e,t){e.blockedOn===t&&(e.blockedOn=null,Xf||(Xf=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,yk)))}function ha(e){function t(i){return To(i,e)}if(0<bl.length){To(bl[0],e);for(var n=1;n<bl.length;n++){var r=bl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wr!==null&&To(wr,e),Er!==null&&To(Er,e),Ir!==null&&To(Ir,e),ua.forEach(t),ca.forEach(t),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)KE(n),n.blockedOn===null&&cr.shift()}var ms=nr.ReactCurrentBatchConfig,Mu=!0;function vk(e,t,n,r){var i=te,s=ms.transition;ms.transition=null;try{te=1,jm(e,t,n,r)}finally{te=i,ms.transition=s}}function _k(e,t,n,r){var i=te,s=ms.transition;ms.transition=null;try{te=4,jm(e,t,n,r)}finally{te=i,ms.transition=s}}function jm(e,t,n,r){if(Mu){var i=Yf(e,t,n,r);if(i===null)Dd(e,t,r,Vu,n),Vv(e,r);else if(gk(i,e,t,n,r))r.stopPropagation();else if(Vv(e,r),t&4&&-1<mk.indexOf(e)){for(;i!==null;){var s=Qa(i);if(s!==null&&zE(s),s=Yf(e,t,n,r),s===null&&Dd(e,t,r,Vu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dd(e,t,r,null,n)}}var Vu=null;function Yf(e,t,n,r){if(Vu=null,e=Mm(r),e=oi(e),e!==null)if(t=Mi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$E(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vu=e,null}function GE(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ok()){case Vm:return 1;case UE:return 4;case $u:case ak:return 16;case FE:return 536870912;default:return 16}default:return 16}}var gr=null,Bm=null,su=null;function QE(){if(su)return su;var e,t=Bm,n=t.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return su=i.slice(e,1<r?1-r:void 0)}function ou(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nl(){return!0}function Fv(){return!1}function Mt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nl:Fv,this.isPropagationStopped=Fv,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),t}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=Mt(eo),Ga=we({},eo,{view:0,detail:0}),wk=Mt(Ga),Pd,Rd,So,jc=we({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==So&&(So&&e.type==="mousemove"?(Pd=e.screenX-So.screenX,Rd=e.screenY-So.screenY):Rd=Pd=0,So=e),Pd)},movementY:function(e){return"movementY"in e?e.movementY:Rd}}),jv=Mt(jc),Ek=we({},jc,{dataTransfer:0}),Ik=Mt(Ek),Tk=we({},Ga,{relatedTarget:0}),Ad=Mt(Tk),Sk=we({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Pk=Mt(Sk),Rk=we({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ak=Mt(Rk),kk=we({},eo,{data:0}),Bv=Mt(kk),Ck={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ok={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ok[e])?!!t[e]:!1}function Wm(){return bk}var Nk=we({},Ga,{key:function(e){if(e.key){var t=Ck[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ou(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wm,charCode:function(e){return e.type==="keypress"?ou(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ou(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dk=Mt(Nk),$k=we({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zv=Mt($k),Lk=we({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wm}),Mk=Mt(Lk),Vk=we({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uk=Mt(Vk),Fk=we({},jc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jk=Mt(Fk),Bk=[9,13,27,32],Hm=qn&&"CompositionEvent"in window,qo=null;qn&&"documentMode"in document&&(qo=document.documentMode);var zk=qn&&"TextEvent"in window&&!qo,XE=qn&&(!Hm||qo&&8<qo&&11>=qo),Wv=String.fromCharCode(32),Hv=!1;function YE(e,t){switch(e){case"keyup":return Bk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function JE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var es=!1;function Wk(e,t){switch(e){case"compositionend":return JE(t);case"keypress":return t.which!==32?null:(Hv=!0,Wv);case"textInput":return e=t.data,e===Wv&&Hv?null:e;default:return null}}function Hk(e,t){if(es)return e==="compositionend"||!Hm&&YE(e,t)?(e=QE(),su=Bm=gr=null,es=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return XE&&t.locale!=="ko"?null:t.data;default:return null}}var qk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qk[e.type]:t==="textarea"}function ZE(e,t,n,r){xE(r),t=Uu(t,"onChange"),0<t.length&&(n=new zm("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ko=null,da=null;function Kk(e){c1(e,0)}function Bc(e){var t=rs(e);if(TE(t))return e}function Gk(e,t){if(e==="change")return t}var e1=!1;if(qn){var kd;if(qn){var Cd="oninput"in document;if(!Cd){var Kv=document.createElement("div");Kv.setAttribute("oninput","return;"),Cd=typeof Kv.oninput=="function"}kd=Cd}else kd=!1;e1=kd&&(!document.documentMode||9<document.documentMode)}function Gv(){Ko&&(Ko.detachEvent("onpropertychange",t1),da=Ko=null)}function t1(e){if(e.propertyName==="value"&&Bc(da)){var t=[];ZE(t,da,e,Mm(e)),DE(Kk,t)}}function Qk(e,t,n){e==="focusin"?(Gv(),Ko=t,da=n,Ko.attachEvent("onpropertychange",t1)):e==="focusout"&&Gv()}function Xk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bc(da)}function Yk(e,t){if(e==="click")return Bc(t)}function Jk(e,t){if(e==="input"||e==="change")return Bc(t)}function Zk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:Zk;function fa(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nf.call(t,i)||!ln(e[i],t[i]))return!1}return!0}function Qv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xv(e,t){var n=Qv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qv(n)}}function n1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?n1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function r1(){for(var e=window,t=bu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bu(e.document)}return t}function qm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function eC(e){var t=r1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&n1(n.ownerDocument.documentElement,n)){if(r!==null&&qm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Xv(n,s);var o=Xv(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tC=qn&&"documentMode"in document&&11>=document.documentMode,ts=null,Jf=null,Go=null,Zf=!1;function Yv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zf||ts==null||ts!==bu(r)||(r=ts,"selectionStart"in r&&qm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Go&&fa(Go,r)||(Go=r,r=Uu(Jf,"onSelect"),0<r.length&&(t=new zm("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ts)))}function Dl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ns={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},xd={},i1={};qn&&(i1=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function zc(e){if(xd[e])return xd[e];if(!ns[e])return e;var t=ns[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in i1)return xd[e]=t[n];return e}var s1=zc("animationend"),o1=zc("animationiteration"),a1=zc("animationstart"),l1=zc("transitionend"),u1=new Map,Jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(e,t){u1.set(e,t),Li(t,[e])}for(var Od=0;Od<Jv.length;Od++){var bd=Jv[Od],nC=bd.toLowerCase(),rC=bd[0].toUpperCase()+bd.slice(1);Wr(nC,"on"+rC)}Wr(s1,"onAnimationEnd");Wr(o1,"onAnimationIteration");Wr(a1,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(l1,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Li("onBeforeInput",["compositionend","keypress","textInput","paste"]);Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Zv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nk(r,t,void 0,e),e.currentTarget=null}function c1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Zv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Zv(i,a,u),s=l}}}if(Du)throw e=Gf,Du=!1,Gf=null,e}function le(e,t){var n=t[ip];n===void 0&&(n=t[ip]=new Set);var r=e+"__bubble";n.has(r)||(h1(t,e,2,!1),n.add(r))}function Nd(e,t,n){var r=0;t&&(r|=4),h1(n,e,r,t)}var $l="_reactListening"+Math.random().toString(36).slice(2);function pa(e){if(!e[$l]){e[$l]=!0,vE.forEach(function(n){n!=="selectionchange"&&(iC.has(n)||Nd(n,!1,e),Nd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$l]||(t[$l]=!0,Nd("selectionchange",!1,t))}}function h1(e,t,n,r){switch(GE(t)){case 1:var i=vk;break;case 4:i=_k;break;default:i=jm}n=i.bind(null,t,n,e),i=void 0,!Kf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dd(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}DE(function(){var u=s,c=Mm(n),h=[];e:{var d=u1.get(e);if(d!==void 0){var f=zm,y=e;switch(e){case"keypress":if(ou(n)===0)break e;case"keydown":case"keyup":f=Dk;break;case"focusin":y="focus",f=Ad;break;case"focusout":y="blur",f=Ad;break;case"beforeblur":case"afterblur":f=Ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=jv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Ik;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Mk;break;case s1:case o1:case a1:f=Pk;break;case l1:f=Uk;break;case"scroll":f=wk;break;case"wheel":f=jk;break;case"copy":case"cut":case"paste":f=Ak;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=zv}var v=(t&4)!==0,w=!v&&e==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,g;p!==null;){g=p;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=la(p,m),_!=null&&v.push(ma(p,_,g)))),w)break;p=p.return}0<v.length&&(d=new f(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",d&&n!==Hf&&(y=n.relatedTarget||n.fromElement)&&(oi(y)||y[Kn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=u,y=y?oi(y):null,y!==null&&(w=Mi(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(v=jv,_="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=zv,_="onPointerLeave",m="onPointerEnter",p="pointer"),w=f==null?d:rs(f),g=y==null?d:rs(y),d=new v(_,p+"leave",f,n,c),d.target=w,d.relatedTarget=g,_=null,oi(c)===u&&(v=new v(m,p+"enter",y,n,c),v.target=g,v.relatedTarget=w,_=v),w=_,f&&y)t:{for(v=f,m=y,p=0,g=v;g;g=qi(g))p++;for(g=0,_=m;_;_=qi(_))g++;for(;0<p-g;)v=qi(v),p--;for(;0<g-p;)m=qi(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=qi(v),m=qi(m)}v=null}else v=null;f!==null&&e_(h,d,f,v,!1),y!==null&&w!==null&&e_(h,w,y,v,!0)}}e:{if(d=u?rs(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var E=Gk;else if(qv(d))if(e1)E=Jk;else{E=Xk;var I=Qk}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=Yk);if(E&&(E=E(e,u))){ZE(h,E,n,c);break e}I&&I(e,d,u),e==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Ff(d,"number",d.value)}switch(I=u?rs(u):window,e){case"focusin":(qv(I)||I.contentEditable==="true")&&(ts=I,Jf=u,Go=null);break;case"focusout":Go=Jf=ts=null;break;case"mousedown":Zf=!0;break;case"contextmenu":case"mouseup":case"dragend":Zf=!1,Yv(h,n,c);break;case"selectionchange":if(tC)break;case"keydown":case"keyup":Yv(h,n,c)}var T;if(Hm)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else es?YE(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(XE&&n.locale!=="ko"&&(es||C!=="onCompositionStart"?C==="onCompositionEnd"&&es&&(T=QE()):(gr=c,Bm="value"in gr?gr.value:gr.textContent,es=!0)),I=Uu(u,C),0<I.length&&(C=new Bv(C,e,null,n,c),h.push({event:C,listeners:I}),T?C.data=T:(T=JE(n),T!==null&&(C.data=T)))),(T=zk?Wk(e,n):Hk(e,n))&&(u=Uu(u,"onBeforeInput"),0<u.length&&(c=new Bv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}c1(h,t)})}function ma(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=la(e,n),s!=null&&r.unshift(ma(e,s,i)),s=la(e,t),s!=null&&r.push(ma(e,s,i))),e=e.return}return r}function qi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function e_(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=la(n,s),l!=null&&o.unshift(ma(n,l,a))):i||(l=la(n,s),l!=null&&o.push(ma(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var sC=/\r\n?/g,oC=/\u0000|\uFFFD/g;function t_(e){return(typeof e=="string"?e:""+e).replace(sC,`
`).replace(oC,"")}function Ll(e,t,n){if(t=t_(t),t_(e)!==t&&n)throw Error(A(425))}function Fu(){}var ep=null,tp=null;function np(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rp=typeof setTimeout=="function"?setTimeout:void 0,aC=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,lC=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(e){return n_.resolve(null).then(e).catch(uC)}:rp;function uC(e){setTimeout(function(){throw e})}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ha(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ha(t)}function Tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function r_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var to=Math.random().toString(36).slice(2),pn="__reactFiber$"+to,ga="__reactProps$"+to,Kn="__reactContainer$"+to,ip="__reactEvents$"+to,cC="__reactListeners$"+to,hC="__reactHandles$"+to;function oi(e){var t=e[pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kn]||n[pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=r_(e);e!==null;){if(n=e[pn])return n;e=r_(e)}return t}e=n,n=e.parentNode}return null}function Qa(e){return e=e[pn]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Wc(e){return e[ga]||null}var sp=[],is=-1;function Hr(e){return{current:e}}function de(e){0>is||(e.current=sp[is],sp[is]=null,is--)}function oe(e,t){is++,sp[is]=e.current,e.current=t}var Lr={},lt=Hr(Lr),Tt=Hr(!1),wi=Lr;function ks(e,t){var n=e.type.contextTypes;if(!n)return Lr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function St(e){return e=e.childContextTypes,e!=null}function ju(){de(Tt),de(lt)}function i_(e,t,n){if(lt.current!==Lr)throw Error(A(168));oe(lt,t),oe(Tt,n)}function d1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,QA(e)||"Unknown",i));return we({},n,r)}function Bu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lr,wi=lt.current,oe(lt,e),oe(Tt,Tt.current),!0}function s_(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=d1(e,t,wi),r.__reactInternalMemoizedMergedChildContext=e,de(Tt),de(lt),oe(lt,e)):de(Tt),oe(Tt,n)}var Dn=null,Hc=!1,Ld=!1;function f1(e){Dn===null?Dn=[e]:Dn.push(e)}function dC(e){Hc=!0,f1(e)}function qr(){if(!Ld&&Dn!==null){Ld=!0;var e=0,t=te;try{var n=Dn;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,Hc=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(e+1)),VE(Vm,qr),i}finally{te=t,Ld=!1}}return null}var ss=[],os=0,zu=null,Wu=0,jt=[],Bt=0,Ei=null,Mn=1,Vn="";function ti(e,t){ss[os++]=Wu,ss[os++]=zu,zu=e,Wu=t}function p1(e,t,n){jt[Bt++]=Mn,jt[Bt++]=Vn,jt[Bt++]=Ei,Ei=e;var r=Mn;e=Vn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mn=1<<32-rn(t)+i|n<<i|r,Vn=s+e}else Mn=1<<s|n<<i|r,Vn=e}function Km(e){e.return!==null&&(ti(e,1),p1(e,1,0))}function Gm(e){for(;e===zu;)zu=ss[--os],ss[os]=null,Wu=ss[--os],ss[os]=null;for(;e===Ei;)Ei=jt[--Bt],jt[Bt]=null,Vn=jt[--Bt],jt[Bt]=null,Mn=jt[--Bt],jt[Bt]=null}var bt=null,Ct=null,ye=!1,tn=null;function m1(e,t){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function o_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,Ct=Tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ei!==null?{id:Mn,overflow:Vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,bt=e,Ct=null,!0):!1;default:return!1}}function op(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ap(e){if(ye){var t=Ct;if(t){var n=t;if(!o_(e,t)){if(op(e))throw Error(A(418));t=Tr(n.nextSibling);var r=bt;t&&o_(e,t)?m1(r,n):(e.flags=e.flags&-4097|2,ye=!1,bt=e)}}else{if(op(e))throw Error(A(418));e.flags=e.flags&-4097|2,ye=!1,bt=e}}}function a_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function Ml(e){if(e!==bt)return!1;if(!ye)return a_(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!np(e.type,e.memoizedProps)),t&&(t=Ct)){if(op(e))throw g1(),Error(A(418));for(;t;)m1(e,t),t=Tr(t.nextSibling)}if(a_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=Tr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=bt?Tr(e.stateNode.nextSibling):null;return!0}function g1(){for(var e=Ct;e;)e=Tr(e.nextSibling)}function Cs(){Ct=bt=null,ye=!1}function Qm(e){tn===null?tn=[e]:tn.push(e)}var fC=nr.ReactCurrentBatchConfig;function Zt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Hu=Hr(null),qu=null,as=null,Xm=null;function Ym(){Xm=as=qu=null}function Jm(e){var t=Hu.current;de(Hu),e._currentValue=t}function lp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gs(e,t){qu=e,Xm=as=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(It=!0),e.firstContext=null)}function qt(e){var t=e._currentValue;if(Xm!==e)if(e={context:e,memoizedValue:t,next:null},as===null){if(qu===null)throw Error(A(308));as=e,qu.dependencies={lanes:0,firstContext:e}}else as=as.next=e;return t}var ai=null;function Zm(e){ai===null?ai=[e]:ai.push(e)}function y1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zm(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ur=!1;function eg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gn(e,n)}return i=r.interleaved,i===null?(t.next=t,Zm(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gn(e,n)}function au(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Um(e,n)}}function l_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ku(e,t,n,r){var i=e.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(d=t,f=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=we({},h,d);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ti|=o,e.lanes=o,e.memoizedState=h}}function u_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var _1=new yE.Component().refs;function up(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qc={isMounted:function(e){return(e=e._reactInternals)?Mi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=Rr(e),s=zn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Sr(e,s,i),t!==null&&(sn(t,e,i,r),au(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=Rr(e),s=zn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Sr(e,s,i),t!==null&&(sn(t,e,i,r),au(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=Rr(e),i=zn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sr(e,i,r),t!==null&&(sn(t,e,r,n),au(t,e,r))}};function c_(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!fa(n,r)||!fa(i,s):!0}function w1(e,t,n){var r=!1,i=Lr,s=t.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=St(t)?wi:lt.current,r=t.contextTypes,s=(r=r!=null)?ks(e,i):Lr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function h_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qc.enqueueReplaceState(t,t.state,null)}function cp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=_1,eg(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=St(t)?wi:lt.current,i.context=ks(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(up(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qc.enqueueReplaceState(i,i.state,null),Ku(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Po(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===_1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Vl(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function d_(e){var t=e._init;return t(e._payload)}function E1(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Ar(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,_){return p===null||p.tag!==6?(p=zd(g,m.mode,_),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,_){var E=g.type;return E===Zi?c(m,p,g.props.children,_,g.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&d_(E)===p.type)?(_=i(p,g.props),_.ref=Po(m,p,g),_.return=m,_):(_=fu(g.type,g.key,g.props,null,m.mode,_),_.ref=Po(m,p,g),_.return=m,_)}function u(m,p,g,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Wd(g,m.mode,_),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,_,E){return p===null||p.tag!==7?(p=mi(g,m.mode,_,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=zd(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Al:return g=fu(p.type,p.key,p.props,null,m.mode,g),g.ref=Po(m,null,p),g.return=m,g;case Ji:return p=Wd(p,m.mode,g),p.return=m,p;case lr:var _=p._init;return h(m,_(p._payload),g)}if(bo(p)||wo(p))return p=mi(p,m.mode,g,null),p.return=m,p;Vl(m,p)}return null}function d(m,p,g,_){var E=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(m,p,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Al:return g.key===E?l(m,p,g,_):null;case Ji:return g.key===E?u(m,p,g,_):null;case lr:return E=g._init,d(m,p,E(g._payload),_)}if(bo(g)||wo(g))return E!==null?null:c(m,p,g,_,null);Vl(m,g)}return null}function f(m,p,g,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(p,m,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Al:return m=m.get(_.key===null?g:_.key)||null,l(p,m,_,E);case Ji:return m=m.get(_.key===null?g:_.key)||null,u(p,m,_,E);case lr:var I=_._init;return f(m,p,g,I(_._payload),E)}if(bo(_)||wo(_))return m=m.get(g)||null,c(p,m,_,E,null);Vl(p,_)}return null}function y(m,p,g,_){for(var E=null,I=null,T=p,C=p=0,M=null;T!==null&&C<g.length;C++){T.index>C?(M=T,T=null):M=T.sibling;var x=d(m,T,g[C],_);if(x===null){T===null&&(T=M);break}e&&T&&x.alternate===null&&t(m,T),p=s(x,p,C),I===null?E=x:I.sibling=x,I=x,T=M}if(C===g.length)return n(m,T),ye&&ti(m,C),E;if(T===null){for(;C<g.length;C++)T=h(m,g[C],_),T!==null&&(p=s(T,p,C),I===null?E=T:I.sibling=T,I=T);return ye&&ti(m,C),E}for(T=r(m,T);C<g.length;C++)M=f(T,m,C,g[C],_),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?C:M.key),p=s(M,p,C),I===null?E=M:I.sibling=M,I=M);return e&&T.forEach(function(ie){return t(m,ie)}),ye&&ti(m,C),E}function v(m,p,g,_){var E=wo(g);if(typeof E!="function")throw Error(A(150));if(g=E.call(g),g==null)throw Error(A(151));for(var I=E=null,T=p,C=p=0,M=null,x=g.next();T!==null&&!x.done;C++,x=g.next()){T.index>C?(M=T,T=null):M=T.sibling;var ie=d(m,T,x.value,_);if(ie===null){T===null&&(T=M);break}e&&T&&ie.alternate===null&&t(m,T),p=s(ie,p,C),I===null?E=ie:I.sibling=ie,I=ie,T=M}if(x.done)return n(m,T),ye&&ti(m,C),E;if(T===null){for(;!x.done;C++,x=g.next())x=h(m,x.value,_),x!==null&&(p=s(x,p,C),I===null?E=x:I.sibling=x,I=x);return ye&&ti(m,C),E}for(T=r(m,T);!x.done;C++,x=g.next())x=f(T,m,C,x.value,_),x!==null&&(e&&x.alternate!==null&&T.delete(x.key===null?C:x.key),p=s(x,p,C),I===null?E=x:I.sibling=x,I=x);return e&&T.forEach(function(Jr){return t(m,Jr)}),ye&&ti(m,C),E}function w(m,p,g,_){if(typeof g=="object"&&g!==null&&g.type===Zi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Al:e:{for(var E=g.key,I=p;I!==null;){if(I.key===E){if(E=g.type,E===Zi){if(I.tag===7){n(m,I.sibling),p=i(I,g.props.children),p.return=m,m=p;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===lr&&d_(E)===I.type){n(m,I.sibling),p=i(I,g.props),p.ref=Po(m,I,g),p.return=m,m=p;break e}n(m,I);break}else t(m,I);I=I.sibling}g.type===Zi?(p=mi(g.props.children,m.mode,_,g.key),p.return=m,m=p):(_=fu(g.type,g.key,g.props,null,m.mode,_),_.ref=Po(m,p,g),_.return=m,m=_)}return o(m);case Ji:e:{for(I=g.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Wd(g,m.mode,_),p.return=m,m=p}return o(m);case lr:return I=g._init,w(m,p,I(g._payload),_)}if(bo(g))return y(m,p,g,_);if(wo(g))return v(m,p,g,_);Vl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=zd(g,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return w}var xs=E1(!0),I1=E1(!1),Xa={},wn=Hr(Xa),ya=Hr(Xa),va=Hr(Xa);function li(e){if(e===Xa)throw Error(A(174));return e}function tg(e,t){switch(oe(va,t),oe(ya,e),oe(wn,Xa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bf(t,e)}de(wn),oe(wn,t)}function Os(){de(wn),de(ya),de(va)}function T1(e){li(va.current);var t=li(wn.current),n=Bf(t,e.type);t!==n&&(oe(ya,e),oe(wn,n))}function ng(e){ya.current===e&&(de(wn),de(ya))}var ve=Hr(0);function Gu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Md=[];function rg(){for(var e=0;e<Md.length;e++)Md[e]._workInProgressVersionPrimary=null;Md.length=0}var lu=nr.ReactCurrentDispatcher,Vd=nr.ReactCurrentBatchConfig,Ii=0,_e=null,De=null,Ve=null,Qu=!1,Qo=!1,_a=0,pC=0;function Ye(){throw Error(A(321))}function ig(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function sg(e,t,n,r,i,s){if(Ii=s,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lu.current=e===null||e.memoizedState===null?vC:_C,e=n(r,i),Qo){s=0;do{if(Qo=!1,_a=0,25<=s)throw Error(A(301));s+=1,Ve=De=null,t.updateQueue=null,lu.current=wC,e=n(r,i)}while(Qo)}if(lu.current=Xu,t=De!==null&&De.next!==null,Ii=0,Ve=De=_e=null,Qu=!1,t)throw Error(A(300));return e}function og(){var e=_a!==0;return _a=0,e}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Kt(){if(De===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ve===null?_e.memoizedState:Ve.next;if(t!==null)Ve=t,De=e;else{if(e===null)throw Error(A(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function wa(e,t){return typeof t=="function"?t(e):t}function Ud(e){var t=Kt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ii&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,_e.lanes|=c,Ti|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ln(r,t.memoizedState)||(It=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,_e.lanes|=s,Ti|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fd(e){var t=Kt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ln(s,t.memoizedState)||(It=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function S1(){}function P1(e,t){var n=_e,r=Kt(),i=t(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,ag(k1.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Ea(9,A1.bind(null,n,r,i,t),void 0,null),je===null)throw Error(A(349));Ii&30||R1(n,t,i)}return i}function R1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function A1(e,t,n,r){t.value=n,t.getSnapshot=r,C1(t)&&x1(e)}function k1(e,t,n){return n(function(){C1(t)&&x1(e)})}function C1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch{return!0}}function x1(e){var t=Gn(e,1);t!==null&&sn(t,e,1,-1)}function f_(e){var t=dn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},t.queue=e,e=e.dispatch=yC.bind(null,_e,e),[t.memoizedState,e]}function Ea(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function O1(){return Kt().memoizedState}function uu(e,t,n,r){var i=dn();_e.flags|=e,i.memoizedState=Ea(1|t,n,void 0,r===void 0?null:r)}function Kc(e,t,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&ig(r,o.deps)){i.memoizedState=Ea(t,n,s,r);return}}_e.flags|=e,i.memoizedState=Ea(1|t,n,s,r)}function p_(e,t){return uu(8390656,8,e,t)}function ag(e,t){return Kc(2048,8,e,t)}function b1(e,t){return Kc(4,2,e,t)}function N1(e,t){return Kc(4,4,e,t)}function D1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $1(e,t,n){return n=n!=null?n.concat([e]):null,Kc(4,4,D1.bind(null,t,e),n)}function lg(){}function L1(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ig(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function M1(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ig(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function V1(e,t,n){return Ii&21?(ln(n,t)||(n=jE(),_e.lanes|=n,Ti|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=n)}function mC(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Vd.transition;Vd.transition={};try{e(!1),t()}finally{te=n,Vd.transition=r}}function U1(){return Kt().memoizedState}function gC(e,t,n){var r=Rr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F1(e))j1(t,n);else if(n=y1(e,t,n,r),n!==null){var i=pt();sn(n,e,r,i),B1(n,t,r)}}function yC(e,t,n){var r=Rr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F1(e))j1(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var l=t.interleaved;l===null?(i.next=i,Zm(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=y1(e,t,i,r),n!==null&&(i=pt(),sn(n,e,r,i),B1(n,t,r))}}function F1(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function j1(e,t){Qo=Qu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function B1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Um(e,n)}}var Xu={readContext:qt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},vC={readContext:qt,useCallback:function(e,t){return dn().memoizedState=[e,t===void 0?null:t],e},useContext:qt,useEffect:p_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,uu(4194308,4,D1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return uu(4194308,4,e,t)},useInsertionEffect:function(e,t){return uu(4,2,e,t)},useMemo:function(e,t){var n=dn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gC.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=dn();return e={current:e},t.memoizedState=e},useState:f_,useDebugValue:lg,useDeferredValue:function(e){return dn().memoizedState=e},useTransition:function(){var e=f_(!1),t=e[0];return e=mC.bind(null,e[1]),dn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=dn();if(ye){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),je===null)throw Error(A(349));Ii&30||R1(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,p_(k1.bind(null,r,s,e),[e]),r.flags|=2048,Ea(9,A1.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=dn(),t=je.identifierPrefix;if(ye){var n=Vn,r=Mn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_a++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_C={readContext:qt,useCallback:L1,useContext:qt,useEffect:ag,useImperativeHandle:$1,useInsertionEffect:b1,useLayoutEffect:N1,useMemo:M1,useReducer:Ud,useRef:O1,useState:function(){return Ud(wa)},useDebugValue:lg,useDeferredValue:function(e){var t=Kt();return V1(t,De.memoizedState,e)},useTransition:function(){var e=Ud(wa)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:S1,useSyncExternalStore:P1,useId:U1,unstable_isNewReconciler:!1},wC={readContext:qt,useCallback:L1,useContext:qt,useEffect:ag,useImperativeHandle:$1,useInsertionEffect:b1,useLayoutEffect:N1,useMemo:M1,useReducer:Fd,useRef:O1,useState:function(){return Fd(wa)},useDebugValue:lg,useDeferredValue:function(e){var t=Kt();return De===null?t.memoizedState=e:V1(t,De.memoizedState,e)},useTransition:function(){var e=Fd(wa)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:S1,useSyncExternalStore:P1,useId:U1,unstable_isNewReconciler:!1};function bs(e,t){try{var n="",r=t;do n+=GA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function jd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var EC=typeof WeakMap=="function"?WeakMap:Map;function z1(e,t,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ju||(Ju=!0,Ep=r),hp(e,t)},n}function W1(e,t,n){n=zn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hp(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hp(e,t),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function m_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new EC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$C.bind(null,e,t,n),t.then(e,e))}function g_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function y_(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var IC=nr.ReactCurrentOwner,It=!1;function dt(e,t,n,r){t.child=e===null?I1(t,null,n,r):xs(t,e.child,n,r)}function v_(e,t,n,r,i){n=n.render;var s=t.ref;return gs(t,i),r=sg(e,t,n,r,s,i),n=og(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(ye&&n&&Km(t),t.flags|=1,dt(e,t,r,i),t.child)}function __(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,H1(e,t,s,r,i)):(e=fu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(o,r)&&e.ref===t.ref)return Qn(e,t,i)}return t.flags|=1,e=Ar(s,r),e.ref=t.ref,e.return=t,t.child=e}function H1(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(fa(s,r)&&e.ref===t.ref)if(It=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(It=!0);else return t.lanes=e.lanes,Qn(e,t,i)}return dp(e,t,n,r,i)}function q1(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(us,kt),kt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(us,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(us,kt),kt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,oe(us,kt),kt|=r;return dt(e,t,i,n),t.child}function K1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dp(e,t,n,r,i){var s=St(n)?wi:lt.current;return s=ks(t,s),gs(t,i),n=sg(e,t,n,r,s,i),r=og(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qn(e,t,i)):(ye&&r&&Km(t),t.flags|=1,dt(e,t,n,i),t.child)}function w_(e,t,n,r,i){if(St(n)){var s=!0;Bu(t)}else s=!1;if(gs(t,i),t.stateNode===null)cu(e,t),w1(t,n,r),cp(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=qt(u):(u=St(n)?wi:lt.current,u=ks(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&h_(t,o,r,u),ur=!1;var d=t.memoizedState;o.state=d,Ku(t,r,o,i),l=t.memoizedState,a!==r||d!==l||Tt.current||ur?(typeof c=="function"&&(up(t,n,c,r),l=t.memoizedState),(a=ur||c_(t,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,v1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Zt(t.type,a),o.props=u,h=t.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qt(l):(l=St(n)?wi:lt.current,l=ks(t,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&h_(t,o,r,l),ur=!1,d=t.memoizedState,o.state=d,Ku(t,r,o,i);var y=t.memoizedState;a!==h||d!==y||Tt.current||ur?(typeof f=="function"&&(up(t,n,f,r),y=t.memoizedState),(u=ur||c_(t,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return fp(e,t,n,r,s,i)}function fp(e,t,n,r,i,s){K1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&s_(t,n,!1),Qn(e,t,s);r=t.stateNode,IC.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=xs(t,e.child,null,s),t.child=xs(t,null,a,s)):dt(e,t,a,s),t.memoizedState=r.state,i&&s_(t,n,!0),t.child}function G1(e){var t=e.stateNode;t.pendingContext?i_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&i_(e,t.context,!1),tg(e,t.containerInfo)}function E_(e,t,n,r,i){return Cs(),Qm(i),t.flags|=256,dt(e,t,n,r),t.child}var pp={dehydrated:null,treeContext:null,retryLane:0};function mp(e){return{baseLanes:e,cachePool:null,transitions:null}}function Q1(e,t,n){var r=t.pendingProps,i=ve.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(ve,i&1),e===null)return ap(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xc(o,r,0,null),e=mi(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=mp(n),t.memoizedState=pp,e):ug(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TC(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ar(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=mi(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?mp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=pp,r}return s=e.child,e=s.sibling,r=Ar(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ug(e,t){return t=Xc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ul(e,t,n,r){return r!==null&&Qm(r),xs(t,e.child,null,n),e=ug(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function TC(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=jd(Error(A(422))),Ul(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Xc({mode:"visible",children:r.children},i,0,null),s=mi(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&xs(t,e.child,null,o),t.child.memoizedState=mp(o),t.memoizedState=pp,s);if(!(t.mode&1))return Ul(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=jd(s,r,void 0),Ul(e,t,o,r)}if(a=(o&e.childLanes)!==0,It||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(e,i),sn(r,e,i,-1))}return mg(),r=jd(Error(A(421))),Ul(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=LC.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ct=Tr(i.nextSibling),bt=t,ye=!0,tn=null,e!==null&&(jt[Bt++]=Mn,jt[Bt++]=Vn,jt[Bt++]=Ei,Mn=e.id,Vn=e.overflow,Ei=t),t=ug(t,r.children),t.flags|=4096,t)}function I_(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),lp(e.return,t,n)}function Bd(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function X1(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(dt(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&I_(e,n,t);else if(e.tag===19)I_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Gu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bd(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bd(t,!0,n,null,s);break;case"together":Bd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ti|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Ar(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ar(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function SC(e,t,n){switch(t.tag){case 3:G1(t),Cs();break;case 5:T1(t);break;case 1:St(t.type)&&Bu(t);break;case 4:tg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;oe(Hu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?Q1(e,t,n):(oe(ve,ve.current&1),e=Qn(e,t,n),e!==null?e.sibling:null);oe(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return X1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,q1(e,t,n)}return Qn(e,t,n)}var Y1,gp,J1,Z1;Y1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gp=function(){};J1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,li(wn.current);var s=null;switch(n){case"input":i=Vf(e,i),r=Vf(e,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=jf(e,i),r=jf(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fu)}zf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Z1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ro(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function PC(e,t,n){var r=t.pendingProps;switch(Gm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return St(t.type)&&ju(),Je(t),null;case 3:return r=t.stateNode,Os(),de(Tt),de(lt),rg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(Sp(tn),tn=null))),gp(e,t),Je(t),null;case 5:ng(t);var i=li(va.current);if(n=t.type,e!==null&&t.stateNode!=null)J1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Je(t),null}if(e=li(wn.current),Ml(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[pn]=t,r[ga]=s,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Do.length;i++)le(Do[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Ov(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Nv(r,s),le("invalid",r)}zf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,a,e),i=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":kl(r),bv(r,s,!0);break;case"textarea":kl(r),Dv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=RE(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pn]=t,e[ga]=r,Y1(e,t,!1,!1),t.stateNode=e;e:{switch(o=Wf(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<Do.length;i++)le(Do[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":Ov(e,r),i=Vf(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),le("invalid",e);break;case"textarea":Nv(e,r),i=jf(e,r),le("invalid",e);break;default:i=r}zf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?CE(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&AE(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(e,l):typeof l=="number"&&aa(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",e):l!=null&&Nm(e,s,l,o))}switch(n){case"input":kl(e),bv(e,r,!1);break;case"textarea":kl(e),Dv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$r(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ds(e,!!r.multiple,s,!1):r.defaultValue!=null&&ds(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Z1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=li(va.current),li(wn.current),Ml(t)){if(r=t.stateNode,n=t.memoizedProps,r[pn]=t,(s=r.nodeValue!==n)&&(e=bt,e!==null))switch(e.tag){case 3:Ll(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ll(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=t,t.stateNode=r}return Je(t),null;case 13:if(de(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&Ct!==null&&t.mode&1&&!(t.flags&128))g1(),Cs(),t.flags|=98560,s=!1;else if(s=Ml(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[pn]=t}else Cs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),s=!1}else tn!==null&&(Sp(tn),tn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?$e===0&&($e=3):mg())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return Os(),gp(e,t),e===null&&pa(t.stateNode.containerInfo),Je(t),null;case 10:return Jm(t.type._context),Je(t),null;case 17:return St(t.type)&&ju(),Je(t),null;case 19:if(de(ve),s=t.memoizedState,s===null)return Je(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Ro(s,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Gu(e),o!==null){for(t.flags|=128,Ro(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(ve,ve.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ae()>Ns&&(t.flags|=128,r=!0,Ro(s,!1),t.lanes=4194304)}else{if(!r)if(e=Gu(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Je(t),null}else 2*Ae()-s.renderingStartTime>Ns&&n!==1073741824&&(t.flags|=128,r=!0,Ro(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ae(),t.sibling=null,n=ve.current,oe(ve,r?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return pg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?kt&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function RC(e,t){switch(Gm(t),t.tag){case 1:return St(t.type)&&ju(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Os(),de(Tt),de(lt),rg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ng(t),null;case 13:if(de(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Cs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ve),null;case 4:return Os(),null;case 10:return Jm(t.type._context),null;case 22:case 23:return pg(),null;case 24:return null;default:return null}}var Fl=!1,nt=!1,AC=typeof WeakSet=="function"?WeakSet:Set,D=null;function ls(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function yp(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var T_=!1;function kC(e,t){if(ep=Mu,e=r1(),qm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tp={focusedElem:e,selectionRange:n},Mu=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Zt(t.type,v),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){Pe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return y=T_,T_=!1,y}function Xo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&yp(t,n,s)}i=i.next}while(i!==r)}}function Gc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eI(e){var t=e.alternate;t!==null&&(e.alternate=null,eI(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[ga],delete t[ip],delete t[cC],delete t[hC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tI(e){return e.tag===5||e.tag===3||e.tag===4}function S_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tI(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _p(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fu));else if(r!==4&&(e=e.child,e!==null))for(_p(e,t,n),e=e.sibling;e!==null;)_p(e,t,n),e=e.sibling}function wp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wp(e,t,n),e=e.sibling;e!==null;)wp(e,t,n),e=e.sibling}var He=null,en=!1;function sr(e,t,n){for(n=n.child;n!==null;)nI(e,t,n),n=n.sibling}function nI(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:nt||ls(n,t);case 6:var r=He,i=en;He=null,sr(e,t,n),He=r,en=i,He!==null&&(en?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(en?(e=He,n=n.stateNode,e.nodeType===8?$d(e.parentNode,n):e.nodeType===1&&$d(e,n),ha(e)):$d(He,n.stateNode));break;case 4:r=He,i=en,He=n.stateNode.containerInfo,en=!0,sr(e,t,n),He=r,en=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yp(n,t,o),i=i.next}while(i!==r)}sr(e,t,n);break;case 1:if(!nt&&(ls(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,t,a)}sr(e,t,n);break;case 21:sr(e,t,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,sr(e,t,n),nt=r):sr(e,t,n);break;default:sr(e,t,n)}}function P_(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new AC),t.forEach(function(r){var i=MC.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,en=!1;break e;case 3:He=a.stateNode.containerInfo,en=!0;break e;case 4:He=a.stateNode.containerInfo,en=!0;break e}a=a.return}if(He===null)throw Error(A(160));nI(s,o,i),He=null,en=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rI(t,e),t=t.sibling}function rI(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jt(t,e),hn(e),r&4){try{Xo(3,e,e.return),Gc(3,e)}catch(v){Pe(e,e.return,v)}try{Xo(5,e,e.return)}catch(v){Pe(e,e.return,v)}}break;case 1:Jt(t,e),hn(e),r&512&&n!==null&&ls(n,n.return);break;case 5:if(Jt(t,e),hn(e),r&512&&n!==null&&ls(n,n.return),e.flags&32){var i=e.stateNode;try{aa(i,"")}catch(v){Pe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&SE(i,s),Wf(a,o);var u=Wf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?CE(i,h):c==="dangerouslySetInnerHTML"?AE(i,h):c==="children"?aa(i,h):Nm(i,c,h,u)}switch(a){case"input":Uf(i,s);break;case"textarea":PE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?ds(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?ds(i,!!s.multiple,s.defaultValue,!0):ds(i,!!s.multiple,s.multiple?[]:"",!1))}i[ga]=s}catch(v){Pe(e,e.return,v)}}break;case 6:if(Jt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Pe(e,e.return,v)}}break;case 3:if(Jt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(t.containerInfo)}catch(v){Pe(e,e.return,v)}break;case 4:Jt(t,e),hn(e);break;case 13:Jt(t,e),hn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dg=Ae())),r&4&&P_(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(nt=(u=nt)||c,Jt(t,e),nt=u):Jt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(D=e,c=e.child;c!==null;){for(h=D=c;D!==null;){switch(d=D,f=d.child,d.tag){case 0:case 11:case 14:case 15:Xo(4,d,d.return);break;case 1:ls(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Pe(r,n,v)}}break;case 5:ls(d,d.return);break;case 22:if(d.memoizedState!==null){A_(h);continue}}f!==null?(f.return=d,D=f):A_(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kE("display",o))}catch(v){Pe(e,e.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Pe(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Jt(t,e),hn(e),r&4&&P_(e);break;case 21:break;default:Jt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tI(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(aa(i,""),r.flags&=-33);var s=S_(e);wp(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=S_(e);_p(e,a,o);break;default:throw Error(A(161))}}catch(l){Pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function CC(e,t,n){D=e,iI(e)}function iI(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nt;a=Fl;var u=nt;if(Fl=o,(nt=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?k_(i):l!==null?(l.return=o,D=l):k_(i);for(;s!==null;)D=s,iI(s),s=s.sibling;D=i,Fl=a,nt=u}R_(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):R_(e)}}function R_(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:nt||Gc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&u_(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}u_(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ha(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}nt||t.flags&512&&vp(t)}catch(d){Pe(t,t.return,d)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function A_(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function k_(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gc(4,t)}catch(l){Pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Pe(t,i,l)}}var s=t.return;try{vp(t)}catch(l){Pe(t,s,l)}break;case 5:var o=t.return;try{vp(t)}catch(l){Pe(t,o,l)}}}catch(l){Pe(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var xC=Math.ceil,Yu=nr.ReactCurrentDispatcher,cg=nr.ReactCurrentOwner,Ht=nr.ReactCurrentBatchConfig,X=0,je=null,be=null,Ge=0,kt=0,us=Hr(0),$e=0,Ia=null,Ti=0,Qc=0,hg=0,Yo=null,wt=null,dg=0,Ns=1/0,bn=null,Ju=!1,Ep=null,Pr=null,jl=!1,yr=null,Zu=0,Jo=0,Ip=null,hu=-1,du=0;function pt(){return X&6?Ae():hu!==-1?hu:hu=Ae()}function Rr(e){return e.mode&1?X&2&&Ge!==0?Ge&-Ge:fC.transition!==null?(du===0&&(du=jE()),du):(e=te,e!==0||(e=window.event,e=e===void 0?16:GE(e.type)),e):1}function sn(e,t,n,r){if(50<Jo)throw Jo=0,Ip=null,Error(A(185));Ka(e,n,r),(!(X&2)||e!==je)&&(e===je&&(!(X&2)&&(Qc|=n),$e===4&&hr(e,Ge)),Pt(e,r),n===1&&X===0&&!(t.mode&1)&&(Ns=Ae()+500,Hc&&qr()))}function Pt(e,t){var n=e.callbackNode;fk(e,t);var r=Lu(e,e===je?Ge:0);if(r===0)n!==null&&Mv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mv(n),t===1)e.tag===0?dC(C_.bind(null,e)):f1(C_.bind(null,e)),lC(function(){!(X&6)&&qr()}),n=null;else{switch(BE(r)){case 1:n=Vm;break;case 4:n=UE;break;case 16:n=$u;break;case 536870912:n=FE;break;default:n=$u}n=dI(n,sI.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sI(e,t){if(hu=-1,du=0,X&6)throw Error(A(327));var n=e.callbackNode;if(ys()&&e.callbackNode!==n)return null;var r=Lu(e,e===je?Ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ec(e,r);else{t=r;var i=X;X|=2;var s=aI();(je!==e||Ge!==t)&&(bn=null,Ns=Ae()+500,pi(e,t));do try{NC();break}catch(a){oI(e,a)}while(1);Ym(),Yu.current=s,X=i,be!==null?t=0:(je=null,Ge=0,t=$e)}if(t!==0){if(t===2&&(i=Qf(e),i!==0&&(r=i,t=Tp(e,i))),t===1)throw n=Ia,pi(e,0),hr(e,r),Pt(e,Ae()),n;if(t===6)hr(e,r);else{if(i=e.current.alternate,!(r&30)&&!OC(i)&&(t=ec(e,r),t===2&&(s=Qf(e),s!==0&&(r=s,t=Tp(e,s))),t===1))throw n=Ia,pi(e,0),hr(e,r),Pt(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:ni(e,wt,bn);break;case 3:if(hr(e,r),(r&130023424)===r&&(t=dg+500-Ae(),10<t)){if(Lu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rp(ni.bind(null,e,wt,bn),t);break}ni(e,wt,bn);break;case 4:if(hr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xC(r/1960))-r,10<r){e.timeoutHandle=rp(ni.bind(null,e,wt,bn),r);break}ni(e,wt,bn);break;case 5:ni(e,wt,bn);break;default:throw Error(A(329))}}}return Pt(e,Ae()),e.callbackNode===n?sI.bind(null,e):null}function Tp(e,t){var n=Yo;return e.current.memoizedState.isDehydrated&&(pi(e,t).flags|=256),e=ec(e,t),e!==2&&(t=wt,wt=n,t!==null&&Sp(t)),e}function Sp(e){wt===null?wt=e:wt.push.apply(wt,e)}function OC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hr(e,t){for(t&=~hg,t&=~Qc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function C_(e){if(X&6)throw Error(A(327));ys();var t=Lu(e,0);if(!(t&1))return Pt(e,Ae()),null;var n=ec(e,t);if(e.tag!==0&&n===2){var r=Qf(e);r!==0&&(t=r,n=Tp(e,r))}if(n===1)throw n=Ia,pi(e,0),hr(e,t),Pt(e,Ae()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ni(e,wt,bn),Pt(e,Ae()),null}function fg(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Ns=Ae()+500,Hc&&qr())}}function Si(e){yr!==null&&yr.tag===0&&!(X&6)&&ys();var t=X;X|=1;var n=Ht.transition,r=te;try{if(Ht.transition=null,te=1,e)return e()}finally{te=r,Ht.transition=n,X=t,!(X&6)&&qr()}}function pg(){kt=us.current,de(us)}function pi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,aC(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Gm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ju();break;case 3:Os(),de(Tt),de(lt),rg();break;case 5:ng(r);break;case 4:Os();break;case 13:de(ve);break;case 19:de(ve);break;case 10:Jm(r.type._context);break;case 22:case 23:pg()}n=n.return}if(je=e,be=e=Ar(e.current,null),Ge=kt=t,$e=0,Ia=null,hg=Qc=Ti=0,wt=Yo=null,ai!==null){for(t=0;t<ai.length;t++)if(n=ai[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ai=null}return e}function oI(e,t){do{var n=be;try{if(Ym(),lu.current=Xu,Qu){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qu=!1}if(Ii=0,Ve=De=_e=null,Qo=!1,_a=0,cg.current=null,n===null||n.return===null){$e=1,Ia=t,be=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=g_(o);if(f!==null){f.flags&=-257,y_(f,o,a,s,t),f.mode&1&&m_(s,u,t),t=f,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){m_(s,u,t),mg();break e}l=Error(A(426))}}else if(ye&&a.mode&1){var w=g_(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),y_(w,o,a,s,t),Qm(bs(l,a));break e}}s=l=bs(l,a),$e!==4&&($e=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=z1(s,l,t);l_(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pr===null||!Pr.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=W1(s,a,t);l_(s,_);break e}}s=s.return}while(s!==null)}uI(n)}catch(E){t=E,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function aI(){var e=Yu.current;return Yu.current=Xu,e===null?Xu:e}function mg(){($e===0||$e===3||$e===2)&&($e=4),je===null||!(Ti&268435455)&&!(Qc&268435455)||hr(je,Ge)}function ec(e,t){var n=X;X|=2;var r=aI();(je!==e||Ge!==t)&&(bn=null,pi(e,t));do try{bC();break}catch(i){oI(e,i)}while(1);if(Ym(),X=n,Yu.current=r,be!==null)throw Error(A(261));return je=null,Ge=0,$e}function bC(){for(;be!==null;)lI(be)}function NC(){for(;be!==null&&!ik();)lI(be)}function lI(e){var t=hI(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?uI(e):be=t,cg.current=null}function uI(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=RC(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,be=null;return}}else if(n=PC(n,t,kt),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);$e===0&&($e=5)}function ni(e,t,n){var r=te,i=Ht.transition;try{Ht.transition=null,te=1,DC(e,t,n,r)}finally{Ht.transition=i,te=r}return null}function DC(e,t,n,r){do ys();while(yr!==null);if(X&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(pk(e,s),e===je&&(be=je=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jl||(jl=!0,dI($u,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=te;te=1;var a=X;X|=4,cg.current=null,kC(e,n),rI(n,e),eC(tp),Mu=!!ep,tp=ep=null,e.current=n,CC(n),sk(),X=a,te=o,Ht.transition=s}else e.current=n;if(jl&&(jl=!1,yr=e,Zu=i),s=e.pendingLanes,s===0&&(Pr=null),lk(n.stateNode),Pt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ju)throw Ju=!1,e=Ep,Ep=null,e;return Zu&1&&e.tag!==0&&ys(),s=e.pendingLanes,s&1?e===Ip?Jo++:(Jo=0,Ip=e):Jo=0,qr(),null}function ys(){if(yr!==null){var e=BE(Zu),t=Ht.transition,n=te;try{if(Ht.transition=null,te=16>e?16:e,yr===null)var r=!1;else{if(e=yr,yr=null,Zu=0,X&6)throw Error(A(331));var i=X;for(X|=4,D=e.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Xo(8,c,s)}var h=c.child;if(h!==null)h.return=c,D=h;else for(;D!==null;){c=D;var d=c.sibling,f=c.return;if(eI(c),c===u){D=null;break}if(d!==null){d.return=f,D=d;break}D=f}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,D=m;break e}D=s.return}}var p=e.current;for(D=p;D!==null;){o=D;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,D=g;else e:for(o=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gc(9,a)}}catch(E){Pe(a,a.return,E)}if(a===o){D=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,D=_;break e}D=a.return}}if(X=i,qr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Fc,e)}catch{}r=!0}return r}finally{te=n,Ht.transition=t}}return!1}function x_(e,t,n){t=bs(n,t),t=z1(e,t,1),e=Sr(e,t,1),t=pt(),e!==null&&(Ka(e,1,t),Pt(e,t))}function Pe(e,t,n){if(e.tag===3)x_(e,e,n);else for(;t!==null;){if(t.tag===3){x_(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){e=bs(n,e),e=W1(t,e,1),t=Sr(t,e,1),e=pt(),t!==null&&(Ka(t,1,e),Pt(t,e));break}}t=t.return}}function $C(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ge&n)===n&&($e===4||$e===3&&(Ge&130023424)===Ge&&500>Ae()-dg?pi(e,0):hg|=n),Pt(e,t)}function cI(e,t){t===0&&(e.mode&1?(t=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):t=1);var n=pt();e=Gn(e,t),e!==null&&(Ka(e,t,n),Pt(e,n))}function LC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cI(e,n)}function MC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),cI(e,n)}var hI;hI=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)It=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return It=!1,SC(e,t,n);It=!!(e.flags&131072)}else It=!1,ye&&t.flags&1048576&&p1(t,Wu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cu(e,t),e=t.pendingProps;var i=ks(t,lt.current);gs(t,n),i=sg(null,t,r,e,i,n);var s=og();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(s=!0,Bu(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(t),i.updater=qc,t.stateNode=i,i._reactInternals=t,cp(t,r,e,n),t=fp(null,t,r,!0,s,n)):(t.tag=0,ye&&s&&Km(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=UC(r),e=Zt(r,e),i){case 0:t=dp(null,t,r,e,n);break e;case 1:t=w_(null,t,r,e,n);break e;case 11:t=v_(null,t,r,e,n);break e;case 14:t=__(null,t,r,Zt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),dp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),w_(e,t,r,i,n);case 3:e:{if(G1(t),e===null)throw Error(A(387));r=t.pendingProps,s=t.memoizedState,i=s.element,v1(e,t),Ku(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=bs(Error(A(423)),t),t=E_(e,t,r,n,i);break e}else if(r!==i){i=bs(Error(A(424)),t),t=E_(e,t,r,n,i);break e}else for(Ct=Tr(t.stateNode.containerInfo.firstChild),bt=t,ye=!0,tn=null,n=I1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),r===i){t=Qn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return T1(t),e===null&&ap(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,np(r,i)?o=null:s!==null&&np(r,s)&&(t.flags|=32),K1(e,t),dt(e,t,o,n),t.child;case 6:return e===null&&ap(t),null;case 13:return Q1(e,t,n);case 4:return tg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xs(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),v_(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,oe(Hu,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!Tt.current){t=Qn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=zn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lp(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lp(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gs(t,n),i=qt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=Zt(r,t.pendingProps),i=Zt(r.type,i),__(e,t,r,i,n);case 15:return H1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),cu(e,t),t.tag=1,St(r)?(e=!0,Bu(t)):e=!1,gs(t,n),w1(t,r,i),cp(t,r,i,n),fp(null,t,r,!0,e,n);case 19:return X1(e,t,n);case 22:return q1(e,t,n)}throw Error(A(156,t.tag))};function dI(e,t){return VE(e,t)}function VC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,r){return new VC(e,t,n,r)}function gg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function UC(e){if(typeof e=="function")return gg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$m)return 11;if(e===Lm)return 14}return 2}function Ar(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fu(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")gg(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zi:return mi(n.children,i,s,t);case Dm:o=8,i|=8;break;case Df:return e=Wt(12,n,t,i|2),e.elementType=Df,e.lanes=s,e;case $f:return e=Wt(13,n,t,i),e.elementType=$f,e.lanes=s,e;case Lf:return e=Wt(19,n,t,i),e.elementType=Lf,e.lanes=s,e;case EE:return Xc(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _E:o=10;break e;case wE:o=9;break e;case $m:o=11;break e;case Lm:o=14;break e;case lr:o=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Wt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function mi(e,t,n,r){return e=Wt(7,e,r,t),e.lanes=n,e}function Xc(e,t,n,r){return e=Wt(22,e,r,t),e.elementType=EE,e.lanes=n,e.stateNode={isHidden:!1},e}function zd(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function Wd(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function FC(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sd(0),this.expirationTimes=Sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yg(e,t,n,r,i,s,o,a,l){return e=new FC(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Wt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(s),e}function jC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fI(e){if(!e)return Lr;e=e._reactInternals;e:{if(Mi(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(St(n))return d1(e,n,t)}return t}function pI(e,t,n,r,i,s,o,a,l){return e=yg(n,r,!0,e,i,s,o,a,l),e.context=fI(null),n=e.current,r=pt(),i=Rr(n),s=zn(r,i),s.callback=t??null,Sr(n,s,i),e.current.lanes=i,Ka(e,i,r),Pt(e,r),e}function Yc(e,t,n,r){var i=t.current,s=pt(),o=Rr(i);return n=fI(n),t.context===null?t.context=n:t.pendingContext=n,t=zn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sr(i,t,o),e!==null&&(sn(e,i,o,s),au(e,i,o)),o}function tc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function O_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vg(e,t){O_(e,t),(e=e.alternate)&&O_(e,t)}function BC(){return null}var mI=typeof reportError=="function"?reportError:function(e){console.error(e)};function _g(e){this._internalRoot=e}Jc.prototype.render=_g.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Yc(e,t,null,null)};Jc.prototype.unmount=_g.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Si(function(){Yc(null,e,null,null)}),t[Kn]=null}};function Jc(e){this._internalRoot=e}Jc.prototype.unstable_scheduleHydration=function(e){if(e){var t=HE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cr.length&&t!==0&&t<cr[n].priority;n++);cr.splice(n,0,e),n===0&&KE(e)}};function wg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function b_(){}function zC(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=tc(o);s.call(u)}}var o=pI(t,r,e,0,null,!1,!1,"",b_);return e._reactRootContainer=o,e[Kn]=o.current,pa(e.nodeType===8?e.parentNode:e),Si(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=tc(l);a.call(u)}}var l=yg(e,0,!1,null,null,!1,!1,"",b_);return e._reactRootContainer=l,e[Kn]=l.current,pa(e.nodeType===8?e.parentNode:e),Si(function(){Yc(t,l,n,r)}),l}function eh(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=tc(o);a.call(l)}}Yc(t,o,e,i)}else o=zC(n,t,e,i,r);return tc(o)}zE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=No(t.pendingLanes);n!==0&&(Um(t,n|1),Pt(t,Ae()),!(X&6)&&(Ns=Ae()+500,qr()))}break;case 13:Si(function(){var r=Gn(e,1);if(r!==null){var i=pt();sn(r,e,1,i)}}),vg(e,1)}};Fm=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=pt();sn(t,e,134217728,n)}vg(e,134217728)}};WE=function(e){if(e.tag===13){var t=Rr(e),n=Gn(e,t);if(n!==null){var r=pt();sn(n,e,t,r)}vg(e,t)}};HE=function(){return te};qE=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};qf=function(e,t,n){switch(t){case"input":if(Uf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wc(r);if(!i)throw Error(A(90));TE(r),Uf(r,i)}}}break;case"textarea":PE(e,n);break;case"select":t=n.value,t!=null&&ds(e,!!n.multiple,t,!1)}};bE=fg;NE=Si;var WC={usingClientEntryPoint:!1,Events:[Qa,rs,Wc,xE,OE,fg]},Ao={findFiberByHostInstance:oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},HC={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=LE(e),e===null?null:e.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||BC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{Fc=Bl.inject(HC),_n=Bl}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WC;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wg(t))throw Error(A(200));return jC(e,t,null,n)};Lt.createRoot=function(e,t){if(!wg(e))throw Error(A(299));var n=!1,r="",i=mI;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yg(e,1,!1,null,null,n,!1,r,i),e[Kn]=t.current,pa(e.nodeType===8?e.parentNode:e),new _g(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=LE(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return Si(e)};Lt.hydrate=function(e,t,n){if(!Zc(t))throw Error(A(200));return eh(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!wg(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pI(t,null,e,1,n??null,i,!1,s,o),e[Kn]=t.current,pa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Jc(t)};Lt.render=function(e,t,n){if(!Zc(t))throw Error(A(200));return eh(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!Zc(e))throw Error(A(40));return e._reactRootContainer?(Si(function(){eh(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};Lt.unstable_batchedUpdates=fg;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zc(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return eh(e,t,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";function gI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gI)}catch(e){console.error(e)}}gI(),pE.exports=Lt;var yI=pE.exports,N_=yI;bf.createRoot=N_.createRoot,bf.hydrateRoot=N_.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ta.apply(this,arguments)}var vr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vr||(vr={}));const D_="popstate";function qC(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:a="",hash:l=""}=Vi(i.location.hash.substr(1));return Pp("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:nc(s))}function r(i,s){th(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return GC(t,n,r,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function th(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function KC(){return Math.random().toString(36).substr(2,8)}function $_(e,t){return{usr:e.state,key:e.key,idx:t}}function Pp(e,t,n,r){return n===void 0&&(n=null),Ta({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vi(t):t,{state:n,key:t&&t.key||r||KC()})}function nc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function GC(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=vr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ta({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=vr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:m})}function d(w,m){a=vr.Push;let p=Pp(v.location,w,m);n&&n(p,w),u=c()+1;let g=$_(p,u),_=v.createHref(p);try{o.pushState(g,"",_)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function f(w,m){a=vr.Replace;let p=Pp(v.location,w,m);n&&n(p,w),u=c();let g=$_(p,u),_=v.createHref(p);o.replaceState(g,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function y(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:nc(w);return ke(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(D_,h),l=w,()=>{i.removeEventListener(D_,h),l=null}},createHref(w){return t(i,w)},createURL:y,encodeLocation(w){let m=y(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:f,go(w){return o.go(w)}};return v}var L_;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(L_||(L_={}));function QC(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Vi(t):t,i=Eg(r.pathname||"/",n);if(i==null)return null;let s=vI(e);XC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=sx(s[a],lx(i));return o}function vI(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ke(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=kr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vI(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:rx(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _I(s.path))i(s,o,l)}),t}function _I(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_I(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function XC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ix(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YC=/^:\w+$/,JC=3,ZC=2,ex=1,tx=10,nx=-2,M_=e=>e==="*";function rx(e,t){let n=e.split("/"),r=n.length;return n.some(M_)&&(r+=nx),t&&(r+=ZC),n.filter(i=>!M_(i)).reduce((i,s)=>i+(YC.test(s)?JC:s===""?ex:tx),r)}function ix(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function sx(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=ox({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:kr([i,c.pathname]),pathnameBase:dx(kr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=kr([i,c.pathnameBase]))}return s}function ox(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ax(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=ux(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function ax(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),th(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function lx(e){try{return decodeURI(e)}catch(t){return th(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ux(e,t){try{return decodeURIComponent(e)}catch(n){return th(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Eg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function cx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vi(e):e;return{pathname:n?n.startsWith("/")?n:hx(n,t):t,search:fx(r),hash:px(i)}}function hx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ig(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Tg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vi(e):(i=Ta({},e),ke(!i.pathname||!i.pathname.includes("?"),Hd("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Hd("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Hd("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=t.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?t[h]:"/"}let l=cx(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const kr=e=>e.join("/").replace(/\/\/+/g,"/"),dx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,px=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wI=["post","put","patch","delete"];new Set(wI);const gx=["get",...wI];new Set(gx);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rc(){return rc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rc.apply(this,arguments)}const Sg=P.createContext(null),yx=P.createContext(null),no=P.createContext(null),nh=P.createContext(null),kn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),EI=P.createContext(null);function vx(e,t){let{relative:n}=t===void 0?{}:t;ro()||ke(!1);let{basename:r,navigator:i}=P.useContext(no),{hash:s,pathname:o,search:a}=TI(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:kr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ro(){return P.useContext(nh)!=null}function Kr(){return ro()||ke(!1),P.useContext(nh).location}function II(e){P.useContext(no).static||P.useLayoutEffect(e)}function io(){let{isDataRoute:e}=P.useContext(kn);return e?Nx():_x()}function _x(){ro()||ke(!1);let e=P.useContext(Sg),{basename:t,navigator:n}=P.useContext(no),{matches:r}=P.useContext(kn),{pathname:i}=Kr(),s=JSON.stringify(Ig(r).map(l=>l.pathnameBase)),o=P.useRef(!1);return II(()=>{o.current=!0}),P.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Tg(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:kr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const wx=P.createContext(null);function Ex(e){let t=P.useContext(kn).outlet;return t&&P.createElement(wx.Provider,{value:e},t)}function L5(){let{matches:e}=P.useContext(kn),t=e[e.length-1];return t?t.params:{}}function TI(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=P.useContext(kn),{pathname:i}=Kr(),s=JSON.stringify(Ig(r).map(o=>o.pathnameBase));return P.useMemo(()=>Tg(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Ix(e,t){return Tx(e,t)}function Tx(e,t,n){ro()||ke(!1);let{navigator:r}=P.useContext(no),{matches:i}=P.useContext(kn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Kr(),u;if(t){var c;let v=typeof t=="string"?Vi(t):t;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ke(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=QC(e,{pathname:d}),y=kx(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:kr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:kr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&y?P.createElement(nh.Provider,{value:{location:rc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:vr.Pop}},y):y}function Sx(){let e=bx(),t=mx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,s)}const Px=P.createElement(Sx,null);class Rx extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(kn.Provider,{value:this.props.routeContext},P.createElement(EI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ax(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(Sg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(kn.Provider,{value:t},r)}function kx(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ke(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Px);let d=t.concat(s.slice(0,u+1)),f=()=>{let y;return c?y=h:l.route.Component?y=P.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,P.createElement(Ax,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?P.createElement(Rx,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var Rp;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Rp||(Rp={}));var Sa;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Sa||(Sa={}));function Cx(e){let t=P.useContext(Sg);return t||ke(!1),t}function xx(e){let t=P.useContext(yx);return t||ke(!1),t}function Ox(e){let t=P.useContext(kn);return t||ke(!1),t}function SI(e){let t=Ox(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function bx(){var e;let t=P.useContext(EI),n=xx(Sa.UseRouteError),r=SI(Sa.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Nx(){let{router:e}=Cx(Rp.UseNavigateStable),t=SI(Sa.UseNavigateStable),n=P.useRef(!1);return II(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,rc({fromRouteId:t},s)))},[e,t])}function PI(e){let{to:t,replace:n,state:r,relative:i}=e;ro()||ke(!1);let{matches:s}=P.useContext(kn),{pathname:o}=Kr(),a=io(),l=Tg(t,Ig(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return P.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Dx(e){return Ex(e.context)}function ic(e){ke(!1)}function $x(e){let{basename:t="/",children:n=null,location:r,navigationType:i=vr.Pop,navigator:s,static:o=!1}=e;ro()&&ke(!1);let a=t.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Vi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,y=P.useMemo(()=>{let v=Eg(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return y==null?null:P.createElement(no.Provider,{value:l},P.createElement(nh.Provider,{children:n,value:y}))}function RI(e){let{children:t,location:n}=e;return Ix(Ap(t),n)}var V_;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(V_||(V_={}));new Promise(()=>{});function Ap(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let s=[...t,i];if(r.type===P.Fragment){n.push.apply(n,Ap(r.props.children,s));return}r.type!==ic&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ap(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kp(){return kp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kp.apply(this,arguments)}function Lx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Mx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vx(e,t){return e.button===0&&(!t||t==="_self")&&!Mx(e)}const Ux=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Fx="startTransition",U_=LA[Fx];function jx(e){let{basename:t,children:n,future:r,window:i}=e,s=P.useRef();s.current==null&&(s.current=qC({window:i,v5Compat:!0}));let o=s.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=P.useCallback(h=>{u&&U_?U_(()=>l(h)):l(h)},[l,u]);return P.useLayoutEffect(()=>o.listen(c),[o,c]),P.createElement($x,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AI=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,h=Lx(t,Ux),{basename:d}=P.useContext(no),f,y=!1;if(typeof u=="string"&&zx.test(u)&&(f=u,Bx))try{let p=new URL(window.location.href),g=u.startsWith("//")?new URL(p.protocol+u):new URL(u),_=Eg(g.pathname,d);g.origin===p.origin&&_!=null?u=_+g.search+g.hash:y=!0}catch{}let v=vx(u,{relative:i}),w=Wx(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||w(p)}return P.createElement("a",kp({},h,{href:f||v,onClick:y||s?r:m,ref:n,target:l}))});var F_;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(F_||(F_={}));var j_;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(j_||(j_={}));function Wx(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=io(),l=Kr(),u=TI(e,{relative:o});return P.useCallback(c=>{if(Vx(c,n)){c.preventDefault();let h=r!==void 0?r:nc(l)===nc(u);a(e,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}var Fe=function(){return Fe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Fe.apply(this,arguments)};function Pg(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ds(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var ue="-ms-",Zo="-moz-",Z="-webkit-",kI="comm",rh="rule",Rg="decl",Hx="@import",CI="@keyframes",qx="@layer",Kx=Math.abs,Ag=String.fromCharCode,Cp=Object.assign;function Gx(e,t){return Ue(e,0)^45?(((t<<2^Ue(e,0))<<2^Ue(e,1))<<2^Ue(e,2))<<2^Ue(e,3):0}function xI(e){return e.trim()}function Nn(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function pu(e,t){return e.indexOf(t)}function Ue(e,t){return e.charCodeAt(t)|0}function $s(e,t,n){return e.slice(t,n)}function fn(e){return e.length}function OI(e){return e.length}function $o(e,t){return t.push(e),e}function Qx(e,t){return e.map(t).join("")}function B_(e,t){return e.filter(function(n){return!Nn(n,t)})}var ih=1,Ls=1,bI=0,Gt=0,Oe=0,so="";function sh(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:ih,column:Ls,length:o,return:"",siblings:a}}function ar(e,t){return Cp(sh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ki(e){for(;e.root;)e=ar(e.root,{children:[e]});$o(e,e.siblings)}function Xx(){return Oe}function Yx(){return Oe=Gt>0?Ue(so,--Gt):0,Ls--,Oe===10&&(Ls=1,ih--),Oe}function on(){return Oe=Gt<bI?Ue(so,Gt++):0,Ls++,Oe===10&&(Ls=1,ih++),Oe}function gi(){return Ue(so,Gt)}function mu(){return Gt}function oh(e,t){return $s(so,e,t)}function xp(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jx(e){return ih=Ls=1,bI=fn(so=e),Gt=0,[]}function Zx(e){return so="",e}function qd(e){return xI(oh(Gt-1,Op(e===91?e+2:e===40?e+1:e)))}function eO(e){for(;(Oe=gi())&&Oe<33;)on();return xp(e)>2||xp(Oe)>3?"":" "}function tO(e,t){for(;--t&&on()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return oh(e,mu()+(t<6&&gi()==32&&on()==32))}function Op(e){for(;on();)switch(Oe){case e:return Gt;case 34:case 39:e!==34&&e!==39&&Op(Oe);break;case 40:e===41&&Op(e);break;case 92:on();break}return Gt}function nO(e,t){for(;on()&&e+Oe!==47+10;)if(e+Oe===42+42&&gi()===47)break;return"/*"+oh(t,Gt-1)+"*"+Ag(e===47?e:on())}function rO(e){for(;!xp(gi());)on();return oh(e,Gt)}function iO(e){return Zx(gu("",null,null,null,[""],e=Jx(e),0,[0],e))}function gu(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,f=0,y=0,v=1,w=1,m=1,p=0,g="",_=i,E=s,I=r,T=g;w;)switch(y=p,p=on()){case 40:if(y!=108&&Ue(T,h-1)==58){pu(T+=q(qd(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:T+=qd(p);break;case 9:case 10:case 13:case 32:T+=eO(y);break;case 92:T+=tO(mu()-1,7);continue;case 47:switch(gi()){case 42:case 47:$o(sO(nO(on(),mu()),t,n,l),l);break;default:T+="/"}break;case 123*v:a[u++]=fn(T)*m;case 125*v:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+c:m==-1&&(T=q(T,/\f/g,"")),f>0&&fn(T)-h&&$o(f>32?W_(T+";",r,n,h-1,l):W_(q(T," ","")+";",r,n,h-2,l),l);break;case 59:T+=";";default:if($o(I=z_(T,t,n,u,c,i,a,g,_=[],E=[],h,s),s),p===123)if(c===0)gu(T,t,I,I,_,s,h,a,E);else switch(d===99&&Ue(T,3)===110?100:d){case 100:case 108:case 109:case 115:gu(e,I,I,r&&$o(z_(e,I,I,0,0,i,a,g,i,_=[],h,E),E),i,E,h,a,r?_:E);break;default:gu(T,I,I,I,[""],E,0,a,E)}}u=c=f=0,v=m=1,g=T="",h=o;break;case 58:h=1+fn(T),f=y;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&Yx()==125)continue}switch(T+=Ag(p),p*v){case 38:m=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(fn(T)-1)*m,m=1;break;case 64:gi()===45&&(T+=qd(on())),d=gi(),c=h=fn(g=T+=rO(mu())),p++;break;case 45:y===45&&fn(T)==2&&(v=0)}}return s}function z_(e,t,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,f=i===0?s:[""],y=OI(f),v=0,w=0,m=0;v<r;++v)for(var p=0,g=$s(e,d+1,d=Kx(w=o[v])),_=e;p<y;++p)(_=xI(w>0?f[p]+" "+g:q(g,/&\f/g,f[p])))&&(l[m++]=_);return sh(e,t,n,i===0?rh:a,l,u,c,h)}function sO(e,t,n,r){return sh(e,t,n,kI,Ag(Xx()),$s(e,2,-2),0,r)}function W_(e,t,n,r,i){return sh(e,t,n,Rg,$s(e,0,r),$s(e,r+1,-1),r,i)}function NI(e,t,n){switch(Gx(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return Zo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+Zo+e+ue+e+e;case 5936:switch(Ue(e,t+11)){case 114:return Z+e+ue+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+ue+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+ue+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+ue+e+e;case 6165:return Z+e+ue+"flex-"+e+e;case 5187:return Z+e+q(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ue+"flex-$1$2")+e;case 5443:return Z+e+ue+"flex-item-"+q(e,/flex-|-self/g,"")+(Nn(e,/flex-|baseline/)?"":ue+"grid-row-"+q(e,/flex-|-self/g,""))+e;case 4675:return Z+e+ue+"flex-line-pack"+q(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+ue+q(e,"shrink","negative")+e;case 5292:return Z+e+ue+q(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+q(e,"-grow","")+Z+e+ue+q(e,"grow","positive")+e;case 4554:return Z+q(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!Nn(e,/flex-|baseline/))return ue+"grid-column-align"+$s(e,t)+e;break;case 2592:case 3360:return ue+q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Nn(r.props,/grid-\w+-end/)})?~pu(e+(n=n[t].value),"span")?e:ue+q(e,"-start","")+e+ue+"grid-row-span:"+(~pu(n,"span")?Nn(n,/\d+/):+Nn(n,/\d+/)-+Nn(e,/\d+/))+";":ue+q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Nn(r.props,/grid-\w+-start/)})?e:ue+q(q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(e)-1-t>6)switch(Ue(e,t+1)){case 109:if(Ue(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Zo+(Ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pu(e,"stretch")?NI(q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return ue+i+":"+s+u+(o?ue+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Ue(e,t+6)===121)return q(e,":",":"+Z)+e;break;case 6444:switch(Ue(e,Ue(e,14)===45?18:11)){case 120:return q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(Ue(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ue+"$2box$3")+e;case 100:return q(e,":",":"+ue)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(e,"scroll-","scroll-snap-")+e}return e}function sc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function oO(e,t,n,r){switch(e.type){case qx:if(e.children.length)break;case Hx:case Rg:return e.return=e.return||e.value;case kI:return"";case CI:return e.return=e.value+"{"+sc(e.children,r)+"}";case rh:if(!fn(e.value=e.props.join(",")))return""}return fn(n=sc(e.children,r))?e.return=e.value+"{"+n+"}":""}function aO(e){var t=OI(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function lO(e){return function(t){t.root||(t=t.return)&&e(t)}}function uO(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Rg:e.return=NI(e.value,e.length,n);return;case CI:return sc([ar(e,{value:q(e.value,"@","@"+Z)})],r);case rh:if(e.length)return Qx(n=e.props,function(i){switch(Nn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ki(ar(e,{props:[q(i,/:(read-\w+)/,":"+Zo+"$1")]})),Ki(ar(e,{props:[i]})),Cp(e,{props:B_(n,r)});break;case"::placeholder":Ki(ar(e,{props:[q(i,/:(plac\w+)/,":"+Z+"input-$1")]})),Ki(ar(e,{props:[q(i,/:(plac\w+)/,":"+Zo+"$1")]})),Ki(ar(e,{props:[q(i,/:(plac\w+)/,ue+"input-$1")]})),Ki(ar(e,{props:[i]})),Cp(e,{props:B_(n,r)});break}return""})}}var cO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ms=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",kg=typeof window<"u"&&"HTMLElement"in window,hO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),dO={},ah=Object.freeze([]),Vs=Object.freeze({});function DI(e,t,n){return n===void 0&&(n=Vs),e.theme!==n.theme&&e.theme||t||n.theme}var $I=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pO=/(^-|-$)/g;function H_(e){return e.replace(fO,"-").replace(pO,"")}var mO=/(a)(d)/gi,q_=function(e){return String.fromCharCode(e+(e>25?39:97))};function bp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=q_(t%52)+n;return(q_(t%52)+n).replace(mO,"$1-$2")}var Kd,cs=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},LI=function(e){return cs(5381,e)};function Cg(e){return bp(LI(e)>>>0)}function gO(e){return e.displayName||e.name||"Component"}function Gd(e){return typeof e=="string"&&!0}var MI=typeof Symbol=="function"&&Symbol.for,VI=MI?Symbol.for("react.memo"):60115,yO=MI?Symbol.for("react.forward_ref"):60112,vO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_O={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},UI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wO=((Kd={})[yO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kd[VI]=UI,Kd);function K_(e){return("type"in(t=e)&&t.type.$$typeof)===VI?UI:"$$typeof"in e?wO[e.$$typeof]:vO;var t}var EO=Object.defineProperty,IO=Object.getOwnPropertyNames,G_=Object.getOwnPropertySymbols,TO=Object.getOwnPropertyDescriptor,SO=Object.getPrototypeOf,Q_=Object.prototype;function FI(e,t,n){if(typeof t!="string"){if(Q_){var r=SO(t);r&&r!==Q_&&FI(e,r,n)}var i=IO(t);G_&&(i=i.concat(G_(t)));for(var s=K_(e),o=K_(t),a=0;a<i.length;++a){var l=i[a];if(!(l in _O||n&&n[l]||o&&l in o||s&&l in s)){var u=TO(t,l);try{EO(e,l,u)}catch{}}}}return e}function Pi(e){return typeof e=="function"}function xg(e){return typeof e=="object"&&"styledComponentId"in e}function ui(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function oc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Pa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Np(e,t,n){if(n===void 0&&(n=!1),!n&&!Pa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Np(e[r],t[r]);else if(Pa(t))for(var r in t)e[r]=Np(e[r],t[r]);return e}function Og(e,t){Object.defineProperty(e,"toString",{value:t})}function Ri(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var PO=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Ri(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),yu=new Map,ac=new Map,Qd=1,zl=function(e){if(yu.has(e))return yu.get(e);for(;ac.has(Qd);)Qd++;var t=Qd++;return yu.set(e,t),ac.set(t,e),t},RO=function(e,t){yu.set(e,t),ac.set(t,e)},AO="style[".concat(Ms,"][").concat("data-styled-version",'="').concat("6.0.5",'"]'),kO=new RegExp("^".concat(Ms,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),CO=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},xO=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(kO);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(RO(c,u),CO(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function OO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jI=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ms,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ms,"active"),r.setAttribute("data-styled-version","6.0.5");var o=OO();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},bO=function(){function e(t){this.element=jI(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ri(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),NO=function(){function e(t){this.element=jI(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),DO=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),X_=kg,$O={isServer:!kg,useCSSOMInjection:!hO},lc=function(){function e(t,n,r){t===void 0&&(t=Vs),n===void 0&&(n={});var i=this;this.options=Fe(Fe({},$O),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&kg&&X_&&(X_=!1,function(s){for(var o=document.querySelectorAll(AO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ms)!=="active"&&(xO(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Og(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(m){return ac.get(m)}(h);if(d===void 0)return"continue";var f=s.names.get(d),y=o.getGroup(h);if(f===void 0||y.length===0)return"continue";var v="".concat(Ms,".g").concat(h,'[id="').concat(d,'"]'),w="";f!==void 0&&f.forEach(function(m){m.length>0&&(w+="".concat(m,","))}),l+="".concat(y).concat(v,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return zl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Fe(Fe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new DO(i):r?new bO(i):new NO(i)}(this.options),new PO(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(zl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(zl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(zl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),LO=/&/g,MO=/^\s*\/\/.*$/gm;function BI(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=BI(n.children,t)),n})}function VO(e){var t,n,r,i=e===void 0?Vs:e,s=i.options,o=s===void 0?Vs:s,a=i.plugins,l=a===void 0?ah:a,u=function(d,f,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===rh&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(LO,n).replace(r,u))}),o.prefix&&c.push(uO),c.push(oO);var h=function(d,f,y,v){f===void 0&&(f=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var w=d.replace(MO,""),m=iO(y||f?"".concat(y," ").concat(f," { ").concat(w," }"):w);o.namespace&&(m=BI(m,o.namespace));var p=[];return sc(m,aO(c.concat(lO(function(g){return p.push(g)})))),p};return h.hash=l.length?l.reduce(function(d,f){return f.name||Ri(15),cs(d,f.name)},5381).toString():"",h}var UO=new lc,Dp=VO(),zI=ae.createContext({shouldForwardProp:void 0,styleSheet:UO,stylis:Dp});zI.Consumer;ae.createContext(void 0);function $p(){return P.useContext(zI)}var WI=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Dp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Og(this,function(){throw Ri(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Dp),this.name+t.hash},e}(),FO=function(e){return e>="A"&&e<="Z"};function Y_(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;FO(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var HI=function(e){return e==null||e===!1||e===""},qI=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!HI(s)&&(Array.isArray(s)&&s.isCss||Pi(s)?r.push("".concat(Y_(i),":"),s,";"):Pa(s)?r.push.apply(r,Ds(Ds(["".concat(i," {")],qI(s),!1),["}"],!1)):r.push("".concat(Y_(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in cO||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Cr(e,t,n,r){if(HI(e))return[];if(xg(e))return[".".concat(e.styledComponentId)];if(Pi(e)){if(!Pi(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Cr(i,t,n,r)}var s;return e instanceof WI?n?(e.inject(n,r),[e.getName(r)]):[e]:Pa(e)?qI(e):Array.isArray(e)?Array.prototype.concat.apply(ah,e.map(function(o){return Cr(o,t,n,r)})):[e.toString()]}function KI(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Pi(n)&&!xg(n))return!1}return!0}var jO=LI("6.0.5"),BO=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KI(t),this.componentId=n,this.baseHash=cs(jO,n),this.baseStyle=r,lc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ui(i,this.staticRulesId);else{var s=oc(Cr(this.rules,t,n,r)),o=bp(cs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ui(i,o),this.staticRulesId=o}else{for(var l=cs(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=oc(Cr(h,t,n,r));l=cs(l,d),u+=d}}if(u){var f=bp(l>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(u,".".concat(f),void 0,this.componentId)),i=ui(i,f)}}return i},e}(),Ra=ae.createContext(void 0);Ra.Consumer;function zO(e){var t=ae.useContext(Ra),n=P.useMemo(function(){return function(r,i){if(!r)throw Ri(14);if(Pi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Ri(8);return i?Fe(Fe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ae.createElement(Ra.Provider,{value:n},e.children):null}var Xd={};function WO(e,t,n){var r=xg(e),i=e,s=!Gd(e),o=t.attrs,a=o===void 0?ah:o,l=t.componentId,u=l===void 0?function(g,_){var E=typeof g!="string"?"sc":H_(g);Xd[E]=(Xd[E]||0)+1;var I="".concat(E,"-").concat(Cg("6.0.5"+E+Xd[E]));return _?"".concat(_,"-").concat(I):I}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(g){return Gd(g)?"styled.".concat(g):"Styled(".concat(gO(g),")")}(e);var h=t.displayName&&t.componentId?"".concat(H_(t.displayName),"-").concat(t.componentId):t.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,f=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;f=function(g,_){return y(g,_)&&v(g,_)}}else f=y}var w=new BO(n,h,r?i.componentStyle:void 0);function m(g,_){return function(E,I,T){var C=E.attrs,M=E.componentStyle,x=E.defaultProps,ie=E.foldedComponentIds,Jr=E.styledComponentId,Zr=E.target,Sl=ae.useContext(Ra),yd=$p(),ei=E.shouldForwardProp||yd.shouldForwardProp,Ut=function(xn,Rt,rr){for(var At,Ft=Fe(Fe({},Rt),{className:void 0,theme:rr}),vd=0;vd<xn.length;vd+=1){var Pl=Pi(At=xn[vd])?At(Ft):At;for(var ir in Pl)Ft[ir]=ir==="className"?ui(Ft[ir],Pl[ir]):ir==="style"?Fe(Fe({},Ft[ir]),Pl[ir]):Pl[ir]}return Rt.className&&(Ft.className=ui(Ft.className,Rt.className)),Ft}(C,I,DI(I,Sl,x)||Vs),b=Ut.as||Zr,V={};for(var U in Ut)Ut[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?V.as=Ut.forwardedAs:ei&&!ei(U,b)||(V[U]=Ut[U]));var me=function(xn,Rt){var rr=$p(),At=xn.generateAndInjectStyles(Rt,rr.styleSheet,rr.stylis);return At}(M,Ut),Se=ui(ie,Jr);return me&&(Se+=" "+me),Ut.className&&(Se+=" "+Ut.className),V[Gd(b)&&!$I.has(b)?"class":"className"]=Se,V.ref=T,P.createElement(b,V)}(p,g,_)}var p=ae.forwardRef(m);return p.attrs=d,p.componentStyle=w,p.shouldForwardProp=f,p.foldedComponentIds=r?ui(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=h,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(_){for(var E=[],I=1;I<arguments.length;I++)E[I-1]=arguments[I];for(var T=0,C=E;T<C.length;T++)Np(_,C[T],!0);return _}({},i.defaultProps,g):g}}),Og(p,function(){return".".concat(p.styledComponentId)}),s&&FI(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function J_(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Z_=function(e){return Object.assign(e,{isCss:!0})};function bg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Pi(e)||Pa(e)){var r=e;return Z_(Cr(J_(ah,Ds([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Cr(i):Z_(Cr(J_(i,t)))}function Lp(e,t,n){if(n===void 0&&(n=Vs),!t)throw Ri(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,bg.apply(void 0,Ds([i],s,!1)))};return r.attrs=function(i){return Lp(e,t,Fe(Fe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Lp(e,t,Fe(Fe({},n),i))},r}var GI=function(e){return Lp(WO,e)},B=GI;$I.forEach(function(e){B[e]=GI(e)});var HO=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=KI(t),lc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(oc(Cr(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&lc.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function qO(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=bg.apply(void 0,Ds([e],t,!1)),i="sc-global-".concat(Cg(JSON.stringify(r))),s=new HO(r,i),o=function(l){var u=$p(),c=ae.useContext(Ra),h=ae.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),ae.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(s.isStatic)s.renderStyles(l,dO,c,d);else{var f=Fe(Fe({},u),{theme:DI(u,h,o.defaultProps)});s.renderStyles(l,f,c,d)}}return ae.memo(o)}function KO(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=oc(bg.apply(void 0,Ds([e],t,!1))),i=Cg(r);return new WI(i,r)}const GO=qO`

  @font-face {
    font-family: 'Dosis';
    font-weight: 300;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJabMV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7MV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: 500;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJBbMV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: 600;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ6bQV3A.ttf') format('truetype');
  }

  * {
    font-family: 'Dosis', sans-serif;
    margin: ${({theme:e})=>e.valueInPx.px0};
    padding: ${({theme:e})=>e.valueInPx.px0};
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::-webkit-scrollbar {
      width: ${({theme:e})=>e.valueInPx.px2};
      height: ${({theme:e})=>e.valueInPx.px2};
    }

    &::-webkit-scrollbar-track {
      background-color: ${({theme:e})=>e.usedColors.white};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({theme:e})=>e.usedColors.gray};
    }

    &::-webkit-scrollbar-thumb:hover,
    &::-webkit-scrollbar-thumb:active {
      background-color: ${({theme:e})=>e.usedColors.gray};
    }

    &::-webkit-scrollbar-corner {
      background-color: ${({theme:e})=>e.usedColors.white};
    }


    &::-webkit-scrollbar-thumb:horizontal {
      background-color: ${({theme:e})=>e.usedColors.gray};
    }

    &::-webkit-scrollbar-thumb:hover:horizontal,
    &::-webkit-scrollbar-thumb:active:horizontal {
      background-color: ${({theme:e})=>e.usedColors.gray};
    }
  }
`,QO=B.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colors.mainBackground};
`,XO=B.div`
  position: fixed;
  z-index: 10;
  top: ${({theme:e})=>e.valueInPx.px0};
  left: ${({theme:e})=>e.valueInPx.px0};

  width: ${({theme:e})=>e.valueInVw.vw100};
  height: ${({theme:e})=>e.valueInVh.vh100};

  opacity: 0.7;
  background-color: ${({theme:e})=>e.colors.mainBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`,YO=B.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
`,JO=KO`
  to {
    transform: rotate(360deg);
  }
`,ZO=B.div`
  display: inline-block;
  width: ${({theme:e})=>e.valueInPercent.pr10};
  height: ${({theme:e})=>e.valueInPercent.pr10};
  border: 2px solid ${({theme:e})=>e.usedColors.twitterColor};
  border-top-color: ${({theme:e})=>e.usedColors.twitterColor};
  border-radius: ${({theme:e})=>e.valueInPercent.pr50};
  animation: ${JO} 1s ease-in-out infinite;
`,Ng=()=>R.jsx(XO,{children:R.jsx(YO,{children:R.jsx(ZO,{})})});var QI={exports:{}},XI={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=P;function eb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tb=typeof Object.is=="function"?Object.is:eb,nb=Us.useState,rb=Us.useEffect,ib=Us.useLayoutEffect,sb=Us.useDebugValue;function ob(e,t){var n=t(),r=nb({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return ib(function(){i.value=n,i.getSnapshot=t,Yd(i)&&s({inst:i})},[e,n,t]),rb(function(){return Yd(i)&&s({inst:i}),e(function(){Yd(i)&&s({inst:i})})},[e]),sb(n),n}function Yd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tb(e,n)}catch{return!0}}function ab(e,t){return t()}var lb=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ab:ob;XI.useSyncExternalStore=Us.useSyncExternalStore!==void 0?Us.useSyncExternalStore:lb;QI.exports=XI;var ub=QI.exports,YI={exports:{}},JI={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh=P,cb=ub;function hb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var db=typeof Object.is=="function"?Object.is:hb,fb=cb.useSyncExternalStore,pb=lh.useRef,mb=lh.useEffect,gb=lh.useMemo,yb=lh.useDebugValue;JI.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=pb(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=gb(function(){function l(f){if(!u){if(u=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var y=o.value;if(i(y,f))return h=y}return h=f}if(y=h,db(c,f))return y;var v=r(f);return i!==void 0&&i(y,v)?y:(c=f,h=v)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(t())},d===null?void 0:function(){return l(d())}]},[t,n,r,i]);var a=fb(e,s[0],s[1]);return mb(function(){o.hasValue=!0,o.value=a},[a]),yb(a),a};YI.exports=JI;var vb=YI.exports;function _b(e){e()}let ZI=_b;const wb=e=>ZI=e,Eb=()=>ZI,e0=Symbol.for("react-redux-context"),t0=typeof globalThis<"u"?globalThis:{};function Ib(){var e;if(!P.createContext)return{};const t=(e=t0[e0])!=null?e:t0[e0]=new Map;let n=t.get(P.createContext);return n||(n=P.createContext(null),t.set(P.createContext,n)),n}const Mr=Ib();function Dg(e=Mr){return function(){return P.useContext(e)}}const eT=Dg(),Tb=()=>{throw new Error("uSES not initialized!")};let tT=Tb;const Sb=e=>{tT=e},Pb=(e,t)=>e===t;function Rb(e=Mr){const t=e===Mr?eT:Dg(e);return function(r,i={}){const{equalityFn:s=Pb,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:h,noopCheck:d}=t();P.useRef(!0);const f=P.useCallback({[r.name](v){return r(v)}}[r.name],[r,h,o]),y=tT(u.addNestedSub,l.getState,c||l.getState,f,s);return P.useDebugValue(y),y}}const Ab=Rb();var nT={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=typeof Symbol=="function"&&Symbol.for,$g=ze?Symbol.for("react.element"):60103,Lg=ze?Symbol.for("react.portal"):60106,uh=ze?Symbol.for("react.fragment"):60107,ch=ze?Symbol.for("react.strict_mode"):60108,hh=ze?Symbol.for("react.profiler"):60114,dh=ze?Symbol.for("react.provider"):60109,fh=ze?Symbol.for("react.context"):60110,Mg=ze?Symbol.for("react.async_mode"):60111,ph=ze?Symbol.for("react.concurrent_mode"):60111,mh=ze?Symbol.for("react.forward_ref"):60112,gh=ze?Symbol.for("react.suspense"):60113,kb=ze?Symbol.for("react.suspense_list"):60120,yh=ze?Symbol.for("react.memo"):60115,vh=ze?Symbol.for("react.lazy"):60116,Cb=ze?Symbol.for("react.block"):60121,xb=ze?Symbol.for("react.fundamental"):60117,Ob=ze?Symbol.for("react.responder"):60118,bb=ze?Symbol.for("react.scope"):60119;function Vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case $g:switch(e=e.type,e){case Mg:case ph:case uh:case hh:case ch:case gh:return e;default:switch(e=e&&e.$$typeof,e){case fh:case mh:case vh:case yh:case dh:return e;default:return t}}case Lg:return t}}}function rT(e){return Vt(e)===ph}re.AsyncMode=Mg;re.ConcurrentMode=ph;re.ContextConsumer=fh;re.ContextProvider=dh;re.Element=$g;re.ForwardRef=mh;re.Fragment=uh;re.Lazy=vh;re.Memo=yh;re.Portal=Lg;re.Profiler=hh;re.StrictMode=ch;re.Suspense=gh;re.isAsyncMode=function(e){return rT(e)||Vt(e)===Mg};re.isConcurrentMode=rT;re.isContextConsumer=function(e){return Vt(e)===fh};re.isContextProvider=function(e){return Vt(e)===dh};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$g};re.isForwardRef=function(e){return Vt(e)===mh};re.isFragment=function(e){return Vt(e)===uh};re.isLazy=function(e){return Vt(e)===vh};re.isMemo=function(e){return Vt(e)===yh};re.isPortal=function(e){return Vt(e)===Lg};re.isProfiler=function(e){return Vt(e)===hh};re.isStrictMode=function(e){return Vt(e)===ch};re.isSuspense=function(e){return Vt(e)===gh};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===uh||e===ph||e===hh||e===ch||e===gh||e===kb||typeof e=="object"&&e!==null&&(e.$$typeof===vh||e.$$typeof===yh||e.$$typeof===dh||e.$$typeof===fh||e.$$typeof===mh||e.$$typeof===xb||e.$$typeof===Ob||e.$$typeof===bb||e.$$typeof===Cb)};re.typeOf=Vt;nT.exports=re;var Nb=nT.exports,iT=Nb,Db={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$b={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sT={};sT[iT.ForwardRef]=Db;sT[iT.Memo]=$b;var se={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg=Symbol.for("react.element"),Ug=Symbol.for("react.portal"),_h=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),Ih=Symbol.for("react.provider"),Th=Symbol.for("react.context"),Lb=Symbol.for("react.server_context"),Sh=Symbol.for("react.forward_ref"),Ph=Symbol.for("react.suspense"),Rh=Symbol.for("react.suspense_list"),Ah=Symbol.for("react.memo"),kh=Symbol.for("react.lazy"),Mb=Symbol.for("react.offscreen"),oT;oT=Symbol.for("react.module.reference");function Xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vg:switch(e=e.type,e){case _h:case Eh:case wh:case Ph:case Rh:return e;default:switch(e=e&&e.$$typeof,e){case Lb:case Th:case Sh:case kh:case Ah:case Ih:return e;default:return t}}case Ug:return t}}}se.ContextConsumer=Th;se.ContextProvider=Ih;se.Element=Vg;se.ForwardRef=Sh;se.Fragment=_h;se.Lazy=kh;se.Memo=Ah;se.Portal=Ug;se.Profiler=Eh;se.StrictMode=wh;se.Suspense=Ph;se.SuspenseList=Rh;se.isAsyncMode=function(){return!1};se.isConcurrentMode=function(){return!1};se.isContextConsumer=function(e){return Xt(e)===Th};se.isContextProvider=function(e){return Xt(e)===Ih};se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vg};se.isForwardRef=function(e){return Xt(e)===Sh};se.isFragment=function(e){return Xt(e)===_h};se.isLazy=function(e){return Xt(e)===kh};se.isMemo=function(e){return Xt(e)===Ah};se.isPortal=function(e){return Xt(e)===Ug};se.isProfiler=function(e){return Xt(e)===Eh};se.isStrictMode=function(e){return Xt(e)===wh};se.isSuspense=function(e){return Xt(e)===Ph};se.isSuspenseList=function(e){return Xt(e)===Rh};se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_h||e===Eh||e===wh||e===Ph||e===Rh||e===Mb||typeof e=="object"&&e!==null&&(e.$$typeof===kh||e.$$typeof===Ah||e.$$typeof===Ih||e.$$typeof===Th||e.$$typeof===Sh||e.$$typeof===oT||e.getModuleId!==void 0)};se.typeOf=Xt;function Vb(){const e=Eb();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const n0={notify(){},get:()=>[]};function Ub(e,t){let n,r=n0;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=Vb())}function u(){n&&(n(),n=void 0,r.clear(),r=n0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const Fb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jb=Fb?P.useLayoutEffect:P.useEffect;function Bb({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=P.useMemo(()=>{const u=Ub(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[e,r,i,s]),a=P.useMemo(()=>e.getState(),[e]);jb(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=t||Mr;return P.createElement(l.Provider,{value:o},n)}function aT(e=Mr){const t=e===Mr?eT:Dg(e);return function(){const{store:r}=t();return r}}const zb=aT();function Wb(e=Mr){const t=e===Mr?zb:aT(e);return function(){return t().dispatch}}const Hb=Wb();Sb(vb.useSyncExternalStoreWithSelector);wb(yI.unstable_batchedUpdates);const Ch=()=>Hb(),Un=Ab,qb="modulepreload",Kb=function(e){return"/"+e},r0={},Yt=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Kb(s),s in r0)return;r0[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":qb,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},vt={HOME:"/home",SIGN_UP:"/sign-up",LOGIN:"/login",PROFILE:"/profile/:id",FEED:"/feed",FEED_TWEET:"/feed/:id",EXPLORE:"/explore",NOTIFICATIONS:"/notifications",MESSAGES:"/messages",BOOKMARKS:"/bookmarks",LISTS:"/lists",MORE:"/more",NOT_FOUND:"*"},Gb=ae.lazy(()=>Yt(()=>import("./index-703aa3fa.js"),[]).then(({Home:e})=>({default:e}))),Qb=ae.lazy(()=>Yt(()=>import("./index-12428d85.js"),["assets/index-12428d85.js","assets/style-74cba690.js","assets/forwardPropGuard-cc2dedbb.js","assets/index-f2613503.js","assets/style-6b2ca076.js","assets/dataForSelectors-86e14a25.js"]).then(({Profile:e})=>({default:e}))),i0=ae.lazy(()=>Yt(()=>import("./index-6e0bade8.js"),["assets/index-6e0bade8.js","assets/style-74cba690.js","assets/forwardPropGuard-cc2dedbb.js","assets/index-f2613503.js"]).then(({Feed:e})=>({default:e}))),Xb=ae.lazy(()=>Yt(()=>import("./index-add01f06.js"),["assets/index-add01f06.js","assets/useFormHandler-411551b4.js","assets/style-6b2ca076.js","assets/forwardPropGuard-cc2dedbb.js"]).then(({Login:e})=>({default:e}))),Yb=ae.lazy(()=>Yt(()=>import("./index-6fa4179a.js"),["assets/index-6fa4179a.js","assets/dataForSelectors-86e14a25.js","assets/useFormHandler-411551b4.js","assets/style-6b2ca076.js","assets/forwardPropGuard-cc2dedbb.js"]).then(({SignUp:e})=>({default:e}))),Jb=ae.lazy(()=>Yt(()=>import("./index-bb475cb4.js"),["assets/index-bb475cb4.js","assets/index-f2613503.js","assets/rootStyles-3a9ab128.js"]).then(({Explore:e})=>({default:e}))),Zb=ae.lazy(()=>Yt(()=>import("./index-66eeaf7d.js"),["assets/index-66eeaf7d.js","assets/index-f2613503.js","assets/rootStyles-3a9ab128.js"]).then(({Notifications:e})=>({default:e}))),eN=ae.lazy(()=>Yt(()=>import("./index-bf642ea3.js"),["assets/index-bf642ea3.js","assets/index-f2613503.js","assets/rootStyles-3a9ab128.js"]).then(({Messages:e})=>({default:e}))),tN=ae.lazy(()=>Yt(()=>import("./index-6bd1cc6d.js"),["assets/index-6bd1cc6d.js","assets/index-f2613503.js","assets/rootStyles-3a9ab128.js"]).then(({Bookmarks:e})=>({default:e}))),nN=ae.lazy(()=>Yt(()=>import("./index-8ece4050.js"),["assets/index-8ece4050.js","assets/index-f2613503.js","assets/rootStyles-3a9ab128.js"]).then(({Lists:e})=>({default:e}))),rN=ae.lazy(()=>Yt(()=>import("./index-89384cbc.js"),["assets/index-89384cbc.js","assets/index-f2613503.js","assets/rootStyles-3a9ab128.js"]).then(({More:e})=>({default:e}))),iN=ae.lazy(()=>Yt(()=>import("./index-778c8a84.js"),["assets/index-778c8a84.js","assets/index-f2613503.js","assets/rootStyles-3a9ab128.js"]).then(({PageNotFound:e})=>({default:e}))),{HOME:sN,LOGIN:oN,SIGN_UP:aN,NOT_FOUND:lN,PROFILE:uN,FEED:cN,EXPLORE:hN,NOTIFICATIONS:dN,MESSAGES:fN,BOOKMARKS:pN,LISTS:mN,MORE:gN,FEED_TWEET:yN}=vt,vN=[{path:"/",element:R.jsx(PI,{to:vt.HOME})},{path:sN,element:R.jsx(Gb,{})},{path:oN,element:R.jsx(Xb,{})},{path:aN,element:R.jsx(Yb,{})}],_N=[{path:lN,element:R.jsx(iN,{})},{path:uN,element:R.jsx(Qb,{})},{path:cN,element:R.jsx(i0,{})},{path:yN,element:R.jsx(i0,{})},{path:hN,element:R.jsx(Jb,{})},{path:dN,element:R.jsx(Zb,{})},{path:fN,element:R.jsx(eN,{})},{path:pN,element:R.jsx(tN,{})},{path:mN,element:R.jsx(nN,{})},{path:gN,element:R.jsx(rN,{})}],lT=e=>e.user.user,wN=e=>e.user,uT=e=>e.user.isAuth,M5=e=>e.user.user.id,EN=()=>Un(uT)?R.jsx(Dx,{}):R.jsx(PI,{to:vt.HOME}),IN=()=>R.jsx(ae.Suspense,{fallback:R.jsx(Ng,{}),children:R.jsx(RI,{children:vN.map(({path:e,element:t})=>R.jsx(ic,{path:e,element:t},e))})}),TN=()=>R.jsx(ae.Suspense,{fallback:R.jsx(Ng,{}),children:R.jsx(RI,{children:R.jsx(ic,{element:R.jsx(EN,{}),children:_N.map(({path:e,element:t})=>R.jsx(ic,{path:e,element:t},e))})})}),cT=e=>e.app.theme,SN=e=>e.app.alert,PN=e=>e.app.isLoading,V5=e=>e.app.modalStatus;function nn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Vr(e){return!!e&&!!e[ge]}function Xn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===DN}(e)||Array.isArray(e)||!!e[h0]||!!(!((t=e.constructor)===null||t===void 0)&&t[h0])||Fg(e)||jg(e))}function Ai(e,t,n){n===void 0&&(n=!1),oo(e)===0?(n?Object.keys:_s)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function oo(e){var t=e[ge];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Fg(e)?2:jg(e)?3:0}function vs(e,t){return oo(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function RN(e,t){return oo(e)===2?e.get(t):e[t]}function hT(e,t,n){var r=oo(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function dT(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Fg(e){return bN&&e instanceof Map}function jg(e){return NN&&e instanceof Set}function ri(e){return e.o||e.t}function Bg(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=pT(e);delete t[ge];for(var n=_s(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function zg(e,t){return t===void 0&&(t=!1),Wg(e)||Vr(e)||!Xn(e)||(oo(e)>1&&(e.set=e.add=e.clear=e.delete=AN),Object.freeze(e),t&&Ai(e,function(n,r){return zg(r,!0)},!0)),e}function AN(){nn(2)}function Wg(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function En(e){var t=Fp[e];return t||nn(18,e),t}function kN(e,t){Fp[e]||(Fp[e]=t)}function Mp(){return Aa}function Jd(e,t){t&&(En("Patches"),e.u=[],e.s=[],e.v=t)}function uc(e){Vp(e),e.p.forEach(CN),e.p=null}function Vp(e){e===Aa&&(Aa=e.l)}function s0(e){return Aa={p:[],l:Aa,h:e,m:!0,_:0}}function CN(e){var t=e[ge];t.i===0||t.i===1?t.j():t.g=!0}function Zd(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||En("ES5").S(t,e,r),r?(n[ge].P&&(uc(t),nn(4)),Xn(e)&&(e=cc(t,e),t.l||hc(t,e)),t.u&&En("Patches").M(n[ge].t,e,t.u,t.s)):e=cc(t,n,[]),uc(t),t.u&&t.v(t.u,t.s),e!==fT?e:void 0}function cc(e,t,n){if(Wg(t))return t;var r=t[ge];if(!r)return Ai(t,function(a,l){return o0(e,r,t,a,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return hc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Bg(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Ai(s,function(a,l){return o0(e,r,i,a,l,n,o)}),hc(e,i,!1),n&&e.u&&En("Patches").N(r,n,e.u,e.s)}return r.o}function o0(e,t,n,r,i,s,o){if(Vr(i)){var a=cc(e,i,s&&t&&t.i!==3&&!vs(t.R,r)?s.concat(r):void 0);if(hT(n,r,a),!Vr(a))return;e.m=!1}else o&&n.add(i);if(Xn(i)&&!Wg(i)){if(!e.h.D&&e._<1)return;cc(e,i),t&&t.A.l||hc(e,i)}}function hc(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&zg(t,n)}function ef(e,t){var n=e[ge];return(n?ri(n):e)[t]}function a0(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function dr(e){e.P||(e.P=!0,e.l&&dr(e.l))}function tf(e){e.o||(e.o=Bg(e.t))}function Up(e,t,n){var r=Fg(t)?En("MapSet").F(t,n):jg(t)?En("MapSet").T(t,n):e.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Mp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=ka;o&&(l=[a],u=Lo);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(t,n):En("ES5").J(t,n);return(n?n.A:Mp()).p.push(r),r}function xN(e){return Vr(e)||nn(22,e),function t(n){if(!Xn(n))return n;var r,i=n[ge],s=oo(n);if(i){if(!i.P&&(i.i<4||!En("ES5").K(i)))return i.t;i.I=!0,r=l0(n,s),i.I=!1}else r=l0(n,s);return Ai(r,function(o,a){i&&RN(i.t,o)===a||hT(r,o,t(a))}),s===3?new Set(r):r}(e)}function l0(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Bg(e)}function ON(){function e(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[ge];return ka.get(l,s)},set:function(l){var u=this[ge];ka.set(u,s,l)}},a}function t(s){for(var o=s.length-1;o>=0;o--){var a=s[o][ge];if(!a.P)switch(a.i){case 5:r(a)&&dr(a);break;case 4:n(a)&&dr(a)}}}function n(s){for(var o=s.t,a=s.k,l=_s(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==ge){var h=o[c];if(h===void 0&&!vs(o,c))return!0;var d=a[c],f=d&&d[ge];if(f?f.t!==h:!dT(d,h))return!0}}var y=!!o[ge];return l.length!==_s(o).length+(y?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};kN("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),f=0;f<h.length;f++)Object.defineProperty(d,""+f,e(f,!0));return d}var y=pT(h);delete y[ge];for(var v=_s(y),w=0;w<v.length;w++){var m=v[w];y[m]=e(m,c||!!y[m].enumerable)}return Object.create(Object.getPrototypeOf(h),y)}(a,s),u={i:a?5:4,A:o?o.A:Mp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,ge,{value:u,writable:!0}),l},S:function(s,o,a){a?Vr(o)&&o[ge].A===s&&t(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[ge];if(c){var h=c.t,d=c.k,f=c.R,y=c.i;if(y===4)Ai(d,function(g){g!==ge&&(h[g]!==void 0||vs(h,g)?f[g]||l(d[g]):(f[g]=!0,dr(c)))}),Ai(h,function(g){d[g]!==void 0||vs(d,g)||(f[g]=!1,dr(c))});else if(y===5){if(r(c)&&(dr(c),f.length=!0),d.length<h.length)for(var v=d.length;v<h.length;v++)f[v]=!1;else for(var w=h.length;w<d.length;w++)f[w]=!0;for(var m=Math.min(d.length,h.length),p=0;p<m;p++)d.hasOwnProperty(p)||(f[p]=!0),f[p]===void 0&&l(d[p])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var u0,Aa,Hg=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",bN=typeof Map<"u",NN=typeof Set<"u",c0=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",fT=Hg?Symbol.for("immer-nothing"):((u0={})["immer-nothing"]=!0,u0),h0=Hg?Symbol.for("immer-draftable"):"__$immer_draftable",ge=Hg?Symbol.for("immer-state"):"__$immer_state",DN=""+Object.prototype.constructor,_s=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,pT=Object.getOwnPropertyDescriptors||function(e){var t={};return _s(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Fp={},ka={get:function(e,t){if(t===ge)return e;var n=ri(e);if(!vs(n,t))return function(i,s,o){var a,l=a0(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Xn(r)?r:r===ef(e.t,t)?(tf(e),e.o[t]=Up(e.A.h,r,e)):r},has:function(e,t){return t in ri(e)},ownKeys:function(e){return Reflect.ownKeys(ri(e))},set:function(e,t,n){var r=a0(ri(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=ef(ri(e),t),s=i==null?void 0:i[ge];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(dT(n,i)&&(n!==void 0||vs(e.t,t)))return!0;tf(e),dr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return ef(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,tf(e),dr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=ri(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){nn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){nn(12)}},Lo={};Ai(ka,function(e,t){Lo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Lo.deleteProperty=function(e,t){return Lo.set.call(this,e,t,void 0)},Lo.set=function(e,t,n){return ka.set.call(this,e[0],t,n,e[0])};var $N=function(){function e(n){var r=this;this.O=c0,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(v){var w=this;v===void 0&&(v=a);for(var m=arguments.length,p=Array(m>1?m-1:0),g=1;g<m;g++)p[g-1]=arguments[g];return l.produce(v,function(_){var E;return(E=s).call.apply(E,[w,_].concat(p))})}}var u;if(typeof s!="function"&&nn(6),o!==void 0&&typeof o!="function"&&nn(7),Xn(i)){var c=s0(r),h=Up(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?uc(c):Vp(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return Jd(c,o),Zd(v,c)},function(v){throw uc(c),v}):(Jd(c,o),Zd(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===fT&&(u=void 0),r.D&&zg(u,!0),o){var f=[],y=[];En("Patches").M(i,u,f,y),o(f,y)}return u}nn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(f){return i.apply(void 0,[f].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Xn(n)||nn(8),Vr(n)&&(n=xN(n));var r=s0(this),i=Up(this,n,void 0);return i[ge].C=!0,Vp(r),i},t.finishDraft=function(n,r){var i=n&&n[ge],s=i.A;return Jd(s,r),Zd(void 0,s)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!c0&&nn(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=En("Patches").$;return Vr(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},e}(),Dt=new $N,mT=Dt.produce;Dt.produceWithPatches.bind(Dt);Dt.setAutoFreeze.bind(Dt);Dt.setUseProxies.bind(Dt);Dt.applyPatches.bind(Dt);Dt.createDraft.bind(Dt);Dt.finishDraft.bind(Dt);function Ca(e){"@babel/helpers - typeof";return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ca(e)}function LN(e,t){if(Ca(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ca(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function MN(e){var t=LN(e,"string");return Ca(t)==="symbol"?t:String(t)}function VN(e,t,n){return t=MN(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function f0(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d0(Object(n),!0).forEach(function(r){VN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function et(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var p0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),nf=function(){return Math.random().toString(36).substring(7).split("").join(".")},dc={INIT:"@@redux/INIT"+nf(),REPLACE:"@@redux/REPLACE"+nf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+nf()}};function UN(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function qg(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(et(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(et(1));return n(qg)(e,t)}if(typeof e!="function")throw new Error(et(2));var i=e,s=t,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(et(3));return s}function h(v){if(typeof v!="function")throw new Error(et(4));if(l)throw new Error(et(5));var w=!0;return u(),a.push(v),function(){if(w){if(l)throw new Error(et(6));w=!1,u();var p=a.indexOf(v);a.splice(p,1),o=null}}}function d(v){if(!UN(v))throw new Error(et(7));if(typeof v.type>"u")throw new Error(et(8));if(l)throw new Error(et(9));try{l=!0,s=i(s,v)}finally{l=!1}for(var w=o=a,m=0;m<w.length;m++){var p=w[m];p()}return v}function f(v){if(typeof v!="function")throw new Error(et(10));i=v,d({type:dc.REPLACE})}function y(){var v,w=h;return v={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(et(11));function g(){p.next&&p.next(c())}g();var _=w(g);return{unsubscribe:_}}},v[p0]=function(){return this},v}return d({type:dc.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:f},r[p0]=y,r}function FN(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:dc.INIT});if(typeof r>"u")throw new Error(et(12));if(typeof n(void 0,{type:dc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(et(13))})}function gT(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{FN(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var f=s[d],y=n[f],v=l[f],w=y(v,u);if(typeof w>"u")throw u&&u.type,new Error(et(14));h[f]=w,c=c||w!==v}return c=c||s.length!==Object.keys(l).length,c?h:l}}function fc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function jN(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(et(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=t.map(function(l){return l(o)});return s=fc.apply(void 0,a)(i.dispatch),f0(f0({},i),{},{dispatch:s})}}}function yT(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,e):o(a)}}};return t}var vT=yT();vT.withExtraArgument=yT;const m0=vT;var _T=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),BN=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Fs=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},zN=Object.defineProperty,WN=Object.defineProperties,HN=Object.getOwnPropertyDescriptors,g0=Object.getOwnPropertySymbols,qN=Object.prototype.hasOwnProperty,KN=Object.prototype.propertyIsEnumerable,y0=function(e,t,n){return t in e?zN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},xr=function(e,t){for(var n in t||(t={}))qN.call(t,n)&&y0(e,n,t[n]);if(g0)for(var r=0,i=g0(t);r<i.length;r++){var n=i[r];KN.call(t,n)&&y0(e,n,t[n])}return e},rf=function(e,t){return WN(e,HN(t))},GN=function(e,t,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(e,t)).next())})},QN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?fc:fc.apply(null,arguments)};function XN(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var YN=function(e){_T(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Fs([void 0],n[0].concat(this)))):new(t.bind.apply(t,Fs([void 0],n.concat(this))))},t}(Array),JN=function(e){_T(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Fs([void 0],n[0].concat(this)))):new(t.bind.apply(t,Fs([void 0],n.concat(this))))},t}(Array);function jp(e){return Xn(e)?mT(e,function(){}):e}function ZN(e){return typeof e=="boolean"}function eD(){return function(t){return tD(t)}}function tD(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new YN;return n&&(ZN(n)?r.push(m0):r.push(m0.withExtraArgument(n.extraArgument))),r}var nD=!0;function rD(e){var t=eD(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,f;if(typeof i=="function")f=i;else if(XN(i))f=gT(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=o;typeof y=="function"&&(y=y(t));var v=jN.apply(void 0,y),w=fc;l&&(w=QN(xr({trace:!nD},typeof l=="object"&&l)));var m=new JN(v),p=m;Array.isArray(d)?p=Fs([v],d):typeof d=="function"&&(p=d(m));var g=w.apply(void 0,p);return qg(f,c,g)}function Or(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return xr(xr({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function wT(e){var t={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function iD(e){return typeof e=="function"}function sD(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?wT(t):[t,n,r],s=i[0],o=i[1],a=i[2],l;if(iD(e))l=function(){return jp(e())};else{var u=jp(e);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var f=Fs([s[d.type]],o.filter(function(y){var v=y.matcher;return v(d)}).map(function(y){var v=y.reducer;return v}));return f.filter(function(y){return!!y}).length===0&&(f=[a]),f.reduce(function(y,v){if(v)if(Vr(y)){var w=y,m=v(w,d);return m===void 0?y:m}else{if(Xn(y))return mT(y,function(p){return v(p,d)});var m=v(y,d);if(m===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return y},h)}return c.getInitialState=l,c}function oD(e,t){return e+"/"+t}function ET(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:jp(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=oD(t,c),f,y;"reducer"in h?(f=h.reducer,y=h.prepare):f=h,s[c]=f,o[d]=f,a[c]=y?Or(d,y):Or(d)});function l(){var c=typeof e.extraReducers=="function"?wT(e.extraReducers):[e.extraReducers],h=c[0],d=h===void 0?{}:h,f=c[1],y=f===void 0?[]:f,v=c[2],w=v===void 0?void 0:v,m=xr(xr({},d),o);return sD(n,function(p){for(var g in m)p.addCase(g,m[g]);for(var _=0,E=y;_<E.length;_++){var I=E[_];p.addMatcher(I.matcher,I.reducer)}w&&p.addDefaultCase(w)})}var u;return{name:t,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var aD="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",lD=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=aD[Math.random()*64|0];return t},uD=["name","message","stack","code"],sf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),v0=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),cD=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=uD;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},xh=function(){function e(t,n,r){var i=Or(t+"/fulfilled",function(u,c,h,d){return{payload:u,meta:rf(xr({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=Or(t+"/pending",function(u,c,h){return{payload:void 0,meta:rf(xr({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=Or(t+"/rejected",function(u,c,h,d,f){return{payload:d,error:(r&&r.serializeError||cD)(u||"Rejected"),meta:rf(xr({},f||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var f=r!=null&&r.idGenerator?r.idGenerator(u):lD(),y=new a,v;function w(p){v=p,y.abort()}var m=function(){return GN(this,null,function(){var p,g,_,E,I,T,C;return BN(this,function(M){switch(M.label){case 0:return M.trys.push([0,4,,5]),E=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:h,extra:d}),dD(E)?[4,E]:[3,2];case 1:E=M.sent(),M.label=2;case 2:if(E===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return I=new Promise(function(x,ie){return y.signal.addEventListener("abort",function(){return ie({name:"AbortError",message:v||"Aborted"})})}),c(s(f,u,(g=r==null?void 0:r.getPendingMeta)==null?void 0:g.call(r,{requestId:f,arg:u},{getState:h,extra:d}))),[4,Promise.race([I,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:f,signal:y.signal,abort:w,rejectWithValue:function(x,ie){return new sf(x,ie)},fulfillWithValue:function(x,ie){return new v0(x,ie)}})).then(function(x){if(x instanceof sf)throw x;return x instanceof v0?i(x.payload,f,u,x.meta):i(x,f,u)})])];case 3:return _=M.sent(),[3,5];case 4:return T=M.sent(),_=T instanceof sf?o(null,f,u,T.payload,T.meta):o(T,f,u),[3,5];case 5:return C=r&&!r.dispatchConditionRejection&&o.match(_)&&_.meta.condition,C||c(_),[2,_]}})})}();return Object.assign(m,{abort:w,requestId:f,arg:u,unwrap:function(){return m.then(hD)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function hD(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function dD(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Kg="listenerMiddleware";Or(Kg+"/add");Or(Kg+"/removeAll");Or(Kg+"/remove");var _0;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);ON();var Gg=(e=>(e.Closed="modalClose",e.EditProfile="modalForEditProfile",e.CreateTweet="modalForCreateTweet",e))(Gg||{}),ao=(e=>(e.Light="light",e.Dark="dark",e))(ao||{});const fD={theme:ao.Light,isLoading:!1,alert:{isVisible:!1,message:""},modalStatus:Gg.Closed},IT=ET({name:"app",initialState:fD,reducers:{setTheme:(e,t)=>{e.theme=t.payload},setAppLoading:(e,t)=>{e.isLoading=t.payload},setAlert:(e,t)=>{e.alert=t.payload},setModalStatus:(e,t)=>{e.modalStatus=t.payload}}}),{setTheme:U5,setAlert:xa,setModalStatus:pD}=IT.actions,mD=IT.reducer,gD=B.div`
  position: fixed;
  bottom: ${({theme:e})=>e.valueInPercent.pr5};
  right: ${({theme:e})=>e.valueInPercent.pr2};
  width: fit-content;
  height: ${({theme:e})=>e.valueInPercent.pr10};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.indentation.i15};
  background-color: ${({theme:e})=>e.usedColors.twitterColor};
  color: ${({theme:e})=>e.usedColors.white};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  border: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.twitterColor};
  border-radius: ${({theme:e})=>e.valueInPx.px20};

  z-index: 100;
`,yD=()=>{const e=Ch(),t={isVisible:!1,message:""},{isVisible:n,message:r}=Un(SN),i=3e3;return P.useEffect(()=>{if(!n)return;const s=setTimeout(()=>e(xa(t)),i);return()=>clearTimeout(s)},[n]),n?R.jsx(gD,{children:r}):null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},vD=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},ST={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(TT(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vD(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new _D;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class _D extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wD=function(e){const t=TT(e);return ST.encodeByteArray(t,!0)},pc=function(e){return wD(e).replace(/\./g,"")},PT=function(e){try{return ST.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=()=>ED().__FIREBASE_DEFAULTS__,TD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},SD=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&PT(e[1]);return t&&JSON.parse(t)},Oh=()=>{try{return ID()||TD()||SD()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},RT=e=>{var t,n;return(n=(t=Oh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},AT=e=>{const t=RT(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},kT=()=>{var e;return(e=Oh())===null||e===void 0?void 0:e.config},CT=e=>{var t;return(t=Oh())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[pc(JSON.stringify(n)),pc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function AD(){var e;const t=(e=Oh())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kD(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function CD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xD(){const e=ut();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function OD(){try{return typeof indexedDB=="object"}catch{return!1}}function bD(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND="FirebaseError";class Cn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ND,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?DD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Cn(i,a,r)}}function DD(e,t){return e.replace($D,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const $D=/\{\$([^}]+)}/g;function LD(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function mc(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(w0(s)&&w0(o)){if(!mc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function w0(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mo(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Vo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function MD(e,t){const n=new VD(e,t);return n.subscribe.bind(n)}class VD{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UD(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=of),i.error===void 0&&(i.error=of),i.complete===void 0&&(i.complete=of);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UD(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function of(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){return e&&e._delegate?e._delegate:e}class Ur{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new PD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(BD(t))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ii){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ii){return this.instances.has(t)}getOptions(t=ii){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jD(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ii){return this.component?this.component.multipleInstances?t:ii:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jD(e){return e===ii?void 0:e}function BD(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new FD(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const WD={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},HD=Y.INFO,qD={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},KD=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=qD[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qg{constructor(t){this.name=t,this._logLevel=HD,this._logHandler=KD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?WD[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const GD=(e,t)=>t.some(n=>e instanceof n);let E0,I0;function QD(){return E0||(E0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XD(){return I0||(I0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OT=new WeakMap,Bp=new WeakMap,bT=new WeakMap,af=new WeakMap,Xg=new WeakMap;function YD(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(br(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&OT.set(n,e)}).catch(()=>{}),Xg.set(t,e),t}function JD(e){if(Bp.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Bp.set(e,t)}let zp={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Bp.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bT.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ZD(e){zp=e(zp)}function e2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(lf(this),t,...n);return bT.set(r,t.sort?t.sort():[t]),br(r)}:XD().includes(e)?function(...t){return e.apply(lf(this),t),br(OT.get(this))}:function(...t){return br(e.apply(lf(this),t))}}function t2(e){return typeof e=="function"?e2(e):(e instanceof IDBTransaction&&JD(e),GD(e,QD())?new Proxy(e,zp):e)}function br(e){if(e instanceof IDBRequest)return YD(e);if(af.has(e))return af.get(e);const t=t2(e);return t!==e&&(af.set(e,t),Xg.set(t,e)),t}const lf=e=>Xg.get(e);function n2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(br(o.result),l.oldVersion,l.newVersion,br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const r2=["get","getKey","getAll","getAllKeys","count"],i2=["put","add","delete","clear"],uf=new Map;function T0(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(uf.get(t))return uf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=i2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||r2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return uf.set(t,s),s}ZD(e=>({...e,get:(t,n,r)=>T0(t,n)||e.get(t,n,r),has:(t,n)=>!!T0(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(o2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function o2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wp="@firebase/app",S0="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Qg("@firebase/app"),a2="@firebase/app-compat",l2="@firebase/analytics-compat",u2="@firebase/analytics",c2="@firebase/app-check-compat",h2="@firebase/app-check",d2="@firebase/auth",f2="@firebase/auth-compat",p2="@firebase/database",m2="@firebase/database-compat",g2="@firebase/functions",y2="@firebase/functions-compat",v2="@firebase/installations",_2="@firebase/installations-compat",w2="@firebase/messaging",E2="@firebase/messaging-compat",I2="@firebase/performance",T2="@firebase/performance-compat",S2="@firebase/remote-config",P2="@firebase/remote-config-compat",R2="@firebase/storage",A2="@firebase/storage-compat",k2="@firebase/firestore",C2="@firebase/firestore-compat",x2="firebase",O2="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="[DEFAULT]",b2={[Wp]:"fire-core",[a2]:"fire-core-compat",[u2]:"fire-analytics",[l2]:"fire-analytics-compat",[h2]:"fire-app-check",[c2]:"fire-app-check-compat",[d2]:"fire-auth",[f2]:"fire-auth-compat",[p2]:"fire-rtdb",[m2]:"fire-rtdb-compat",[g2]:"fire-fn",[y2]:"fire-fn-compat",[v2]:"fire-iid",[_2]:"fire-iid-compat",[w2]:"fire-fcm",[E2]:"fire-fcm-compat",[I2]:"fire-perf",[T2]:"fire-perf-compat",[S2]:"fire-rc",[P2]:"fire-rc-compat",[R2]:"fire-gcs",[A2]:"fire-gcs-compat",[k2]:"fire-fst",[C2]:"fire-fst-compat","fire-js":"fire-js",[x2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Map,qp=new Map;function N2(e,t){try{e.container.addComponent(t)}catch(n){ki.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ci(e){const t=e.name;if(qp.has(t))return ki.debug(`There were multiple attempts to register component ${t}.`),!1;qp.set(t,e);for(const n of gc.values())N2(n,e);return!0}function bh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nr=new Ya("app","Firebase",D2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=O2;function NT(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Hp,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=kT()),!n)throw Nr.create("no-options");const s=gc.get(i);if(s){if(mc(n,s.options)&&mc(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new zD(i);for(const l of qp.values())o.addComponent(l);const a=new $2(n,r,o);return gc.set(i,a),a}function Yg(e=Hp){const t=gc.get(e);if(!t&&e===Hp&&kT())return NT();if(!t)throw Nr.create("no-app",{appName:e});return t}function In(e,t,n){var r;let i=(r=b2[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ki.warn(a.join(" "));return}Ci(new Ur(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="firebase-heartbeat-database",M2=1,Oa="firebase-heartbeat-store";let cf=null;function DT(){return cf||(cf=n2(L2,M2,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oa)}}}).catch(e=>{throw Nr.create("idb-open",{originalErrorMessage:e.message})})),cf}async function V2(e){try{return await(await DT()).transaction(Oa).objectStore(Oa).get($T(e))}catch(t){if(t instanceof Cn)ki.warn(t.message);else{const n=Nr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ki.warn(n.message)}}}async function P0(e,t){try{const r=(await DT()).transaction(Oa,"readwrite");await r.objectStore(Oa).put(t,$T(e)),await r.done}catch(n){if(n instanceof Cn)ki.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ki.warn(r.message)}}}function $T(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=1024,F2=30*24*60*60*1e3;class j2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=R0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=F2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=R0(),{heartbeatsToSend:n,unsentEntries:r}=B2(this._heartbeatsCache.heartbeats),i=pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function R0(){return new Date().toISOString().substring(0,10)}function B2(e,t=U2){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),A0(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),A0(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OD()?bD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await V2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return P0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function A0(e){return pc(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(e){Ci(new Ur("platform-logger",t=>new s2(t),"PRIVATE")),Ci(new Ur("heartbeat",t=>new j2(t),"PRIVATE")),In(Wp,S0,e),In(Wp,S0,"esm2017"),In("fire-js","")}W2("");function LT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H2=LT,MT=new Ya("auth","Firebase",LT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Qg("@firebase/auth");function q2(e,...t){yc.logLevel<=Y.WARN&&yc.warn(`Auth (${Ui}): ${e}`,...t)}function vu(e,...t){yc.logLevel<=Y.ERROR&&yc.error(`Auth (${Ui}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,...t){throw Jg(e,...t)}function Tn(e,...t){return Jg(e,...t)}function VT(e,t,n){const r=Object.assign(Object.assign({},H2()),{[t]:n});return new Ya("auth","Firebase",r).create(t,{appName:e.name})}function K2(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Qt(e,"argument-error"),VT(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jg(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return MT.create(e,...t)}function F(e,t,...n){if(!e)throw Jg(t,...n)}function Fn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw vu(t),new Error(t)}function Yn(e,t){e||Fn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function G2(){return k0()==="http:"||k0()==="https:"}function k0(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G2()||kD()||"connection"in navigator)?navigator.onLine:!0}function X2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,n){this.shortDelay=t,this.longDelay=n,Yn(n>t,"Short delay should be less than long delay!"),this.isMobile=RD()||CD()}get(){return Q2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(e,t){Yn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=new Za(3e4,6e4);function lo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function uo(e,t,n,r,i={}){return FT(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ja(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),UT.fetch()(jT(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function FT(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Y2),t);try{const i=new Z2(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wl(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wl(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wl(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wl(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw VT(e,c,u);Qt(e,c)}}catch(i){if(i instanceof Cn)throw i;Qt(e,"network-request-failed",{message:String(i)})}}async function el(e,t,n,r,i={}){const s=await uo(e,t,n,r,i);return"mfaPendingCredential"in s&&Qt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function jT(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Zg(e.config,i):`${e.config.apiScheme}://${i}`}class Z2{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),J2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wl(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tn(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e$(e,t){return uo(e,"POST","/v1/accounts:delete",t)}async function t$(e,t){return uo(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function n$(e,t=!1){const n=Ee(e),r=await n.getIdToken(t),i=ey(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ea(hf(i.auth_time)),issuedAtTime:ea(hf(i.iat)),expirationTime:ea(hf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hf(e){return Number(e)*1e3}function ey(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=PT(n);return i?JSON.parse(i):(vu("Failed to decode base64 JWT payload"),null)}catch(i){return vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function r$(e){const t=ey(e);return F(t,"internal-error"),F(typeof t.exp<"u","internal-error"),F(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Cn&&i$(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function i$({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ea(this.lastLoginAt),this.creationTime=ea(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(e){var t;const n=e.auth,r=await e.getIdToken(),i=await js(e,t$(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?l$(s.providerUserInfo):[],a=a$(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new BT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,h)}async function o$(e){const t=Ee(e);await vc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function a$(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function l$(e){return e.map(t=>{var{providerId:n}=t,r=Pg(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u$(e,t){const n=await FT(e,{},async()=>{const r=Ja({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=jT(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",UT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken<"u","internal-error"),F(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):r$(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return F(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await u$(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ba;return r&&(F(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ba,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){F(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class yi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Pg(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new BT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await js(this,this.stsTokenManager.getToken(this.auth,t));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return n$(this,t)}reload(){return o$(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new yi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await js(this,e$(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:E,providerData:I,stsTokenManager:T}=n;F(g&&T,t,"internal-error");const C=ba.fromJSON(this.name,T);F(typeof g=="string",t,"internal-error"),or(h,t.name),or(d,t.name),F(typeof _=="boolean",t,"internal-error"),F(typeof E=="boolean",t,"internal-error"),or(f,t.name),or(y,t.name),or(v,t.name),or(w,t.name),or(m,t.name),or(p,t.name);const M=new yi({uid:g,auth:t,email:d,emailVerified:_,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:f,tenantId:v,stsTokenManager:C,createdAt:m,lastLoginAt:p});return I&&Array.isArray(I)&&(M.providerData=I.map(x=>Object.assign({},x))),w&&(M._redirectEventId=w),M}static async _fromIdTokenResponse(t,n,r=!1){const i=new ba;i.updateFromServerResponse(n);const s=new yi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await vc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Map;function jn(e){Yn(e instanceof Function,"Expected a class definition");let t=C0.get(e);return t?(Yn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,C0.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}zT.type="NONE";const x0=zT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e,t,n){return`firebase:${e}:${t}:${n}`}class ws{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_u(this.userKey,i.apiKey,s),this.fullPersistenceKey=_u("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?yi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ws(jn(x0),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||jn(x0);const o=_u(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=yi._fromJSON(t,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ws(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ws(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(WT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(GT(t))return"Blackberry";if(QT(t))return"Webos";if(ty(t))return"Safari";if((t.includes("chrome/")||HT(t))&&!t.includes("edge/"))return"Chrome";if(KT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WT(e=ut()){return/firefox\//i.test(e)}function ty(e=ut()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function HT(e=ut()){return/crios\//i.test(e)}function qT(e=ut()){return/iemobile/i.test(e)}function KT(e=ut()){return/android/i.test(e)}function GT(e=ut()){return/blackberry/i.test(e)}function QT(e=ut()){return/webos/i.test(e)}function Nh(e=ut()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function c$(e=ut()){var t;return Nh(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function h$(){return xD()&&document.documentMode===10}function XT(e=ut()){return Nh(e)||KT(e)||QT(e)||GT(e)||/windows phone/i.test(e)||qT(e)}function d$(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(e,t=[]){let n;switch(e){case"Browser":n=O0(ut());break;case"Worker":n=`${O0(ut())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${r}`}async function JT(e,t){return uo(e,"GET","/v2/recaptchaConfig",lo(e,t))}function b0(e){return e!==void 0&&e.enterprise!==void 0}class ZT{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f$(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function eS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",f$().appendChild(r)})}function p$(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const m$="https://www.google.com/recaptcha/enterprise.js?render=",g$="recaptcha-enterprise",y$="NO_RECAPTCHA";class tS{constructor(t){this.type=g$,this.auth=Fi(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{JT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ZT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;b0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(y$)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&b0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}eS(m$+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function _c(e,t,n,r=!1){const i=new tS(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _${constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N0(this),this.idTokenSubscription=new N0(this),this.beforeStateQueue=new v$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=MT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ws.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await vc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=X2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ee(t):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(t))})}async initializeRecaptchaConfig(){const t=await JT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ZT(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new tS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ya("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&jn(t)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=YT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&q2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fi(e){return Ee(e)}class N0{constructor(t){this.auth=t,this.observer=null,this.addObserver=MD(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w$(e,t){const n=bh(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mc(s,t??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:t})}function E$(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function I$(e,t,n){const r=Fi(e);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nS(t),{host:o,port:a}=T$(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||S$()}function nS(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function T$(e){const t=nS(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:D0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:D0(o)}}}function D0(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function S$(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(t){return Fn("not implemented")}_linkToIdToken(t,n){return Fn("not implemented")}_getReauthenticationResolver(t){return Fn("not implemented")}}async function rS(e,t){return uo(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(e,t){return el(e,"POST","/v1/accounts:signInWithPassword",lo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P$(e,t){return el(e,"POST","/v1/accounts:signInWithEmailLink",lo(e,t))}async function R$(e,t){return el(e,"POST","/v1/accounts:signInWithEmailLink",lo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends ny{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Na(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Na(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await _c(t,r,"signInWithPassword");return df(t,i)}else return df(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await _c(t,r,"signInWithPassword");return df(t,s)}else return Promise.reject(i)});case"emailLink":return P$(t,{email:this._email,oobCode:this._password});default:Qt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return rS(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return R$(t,{idToken:n,email:this._email,oobCode:this._password});default:Qt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(e,t){return el(e,"POST","/v1/accounts:signInWithIdp",lo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A$="http://localhost";class xi extends ny{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Pg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Es(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Es(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Es(t,n)}buildRequest(){const t={requestUri:A$,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ja(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k$(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function C$(e){const t=Mo(Vo(e)).link,n=t?Mo(Vo(t)).deep_link_id:null,r=Mo(Vo(e)).deep_link_id;return(r?Mo(Vo(r)).link:null)||r||n||t||e}class ry{constructor(t){var n,r,i,s,o,a;const l=Mo(Vo(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=k$((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=C$(t);try{return new ry(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.providerId=co.PROVIDER_ID}static credential(t,n){return Na._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=ry.parseLink(n);return F(r,"argument-error"),Na._fromEmailAndCode(t,r.code,r.tenantId)}}co.PROVIDER_ID="password";co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends iy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends tl{constructor(){super("facebook.com")}static credential(t){return xi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fr.credentialFromTaggedObject(t)}static credentialFromError(t){return fr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fr.credential(t.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xi._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return $n.credentialFromTaggedObject(t)}static credentialFromError(t){return $n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends tl{constructor(){super("github.com")}static credential(t){return xi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pr.credentialFromTaggedObject(t)}static credentialFromError(t){return pr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return pr.credential(t.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends tl{constructor(){super("twitter.com")}static credential(t,n){return xi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return mr.credentialFromTaggedObject(t)}static credentialFromError(t){return mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(e,t){return el(e,"POST","/v1/accounts:signUp",lo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await yi._fromIdTokenResponse(t,r,i),o=$0(r);return new Oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=$0(r);return new Oi({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function $0(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends Cn{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new wc(t,n,r,i)}}function iS(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wc._fromErrorAndOperation(e,s,t,r):s})}async function x$(e,t,n=!1){const r=await js(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Oi._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O$(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await js(e,iS(r,i,t,e),n);F(s.idToken,r,"internal-error");const o=ey(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(e.uid===a,r,"user-mismatch"),Oi._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(e,t,n=!1){const r="signIn",i=await iS(e,r,t),s=await Oi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function b$(e,t){return sS(Fi(e),t)}async function N$(e,t,n){var r;const i=Fi(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await _c(i,s,"signUpPassword");o=ff(i,u)}else o=ff(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await _c(i,s,"signUpPassword");return ff(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Oi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function D$(e,t,n){return b$(Ee(e),co.credential(t,n))}function F5(e,t){return $$(Ee(e),null,t)}async function $$(e,t,n){const{auth:r}=e,s={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await js(e,rS(r,s));await e._updateTokensIfNecessary(o,!0)}function L$(e,t,n,r){return Ee(e).onIdTokenChanged(t,n,r)}function M$(e,t,n){return Ee(e).beforeAuthStateChanged(t,n)}function V$(e){return Ee(e).signOut()}const Ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ec,"1"),this.storage.removeItem(Ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U$(){const e=ut();return ty(e)||Nh(e)}const F$=1e3,j$=10;class aS extends oS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=U$()&&d$(),this.fallbackToPolling=XT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);h$()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,j$):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},F$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}aS.type="LOCAL";const B$=aS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS extends oS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}lS.type="SESSION";const uS=lS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z$(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Dh(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await z$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W${constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=sy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function H$(e){Sn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function q$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K$(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function G$(){return cS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="firebaseLocalStorageDb",Q$=1,Ic="firebaseLocalStorage",dS="fbase_key";class nl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $h(e,t){return e.transaction([Ic],t?"readwrite":"readonly").objectStore(Ic)}function X$(){const e=indexedDB.deleteDatabase(hS);return new nl(e).toPromise()}function Gp(){const e=indexedDB.open(hS,Q$);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ic,{keyPath:dS})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ic)?t(r):(r.close(),await X$(),t(await Gp()))})})}async function L0(e,t,n){const r=$h(e,!0).put({[dS]:t,value:n});return new nl(r).toPromise()}async function Y$(e,t){const n=$h(e,!1).get(t),r=await new nl(n).toPromise();return r===void 0?null:r.value}function M0(e,t){const n=$h(e,!0).delete(t);return new nl(n).toPromise()}const J$=800,Z$=3;class fS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gp(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Z$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dh._getInstance(G$()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await q$(),!this.activeServiceWorker)return;this.sender=new W$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||K$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Gp();return await L0(t,Ec,"1"),await M0(t,Ec),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>L0(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Y$(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>M0(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=$h(i,!1).getAll();return new nl(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fS.type="LOCAL";const eL=fS;new Za(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(e,t){return t?jn(t):(F(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy extends ny{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Es(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Es(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Es(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function tL(e){return sS(e.auth,new oy(e),e.bypassAuthState)}function nL(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),O$(n,new oy(e),e.bypassAuthState)}async function rL(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),x$(n,new oy(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return tL;case"linkViaPopup":case"linkViaRedirect":return rL;case"reauthViaPopup":case"reauthViaRedirect":return nL;default:Qt(this.auth,"internal-error")}}resolve(t){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL=new Za(2e3,1e4);async function sL(e,t,n){const r=Fi(e);K2(e,t,iy);const i=pS(r,n);return new ci(r,"signInViaPopup",t,i).executeNotNull()}class ci extends mS{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const t=sy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,iL.get())};t()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL="pendingRedirect",wu=new Map;class aL extends mS{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=wu.get(this.auth._key());if(!t){try{const r=await lL(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}wu.set(this.auth._key(),t)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lL(e,t){const n=hL(t),r=cL(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uL(e,t){wu.set(e._key(),t)}function cL(e){return jn(e._redirectPersistence)}function hL(e){return _u(oL,e.config.apiKey,e.name)}async function dL(e,t,n=!1){const r=Fi(e),i=pS(r,t),o=await new aL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=10*60*1e3;class pL{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!mL(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!gS(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=fL&&this.cachedEventUids.clear(),this.cachedEventUids.has(V0(t))}saveEventToCache(t){this.cachedEventUids.add(V0(t)),this.lastProcessedEventTime=Date.now()}}function V0(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function gS({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function mL(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gS(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(e,t={}){return uo(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vL=/^https?/;async function _L(e){if(e.config.emulator)return;const{authorizedDomains:t}=await gL(e);for(const n of t)try{if(wL(n))return}catch{}Qt(e,"unauthorized-domain")}function wL(e){const t=Kp(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vL.test(n))return!1;if(yL.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=new Za(3e4,6e4);function U0(){const e=Sn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function IL(e){return new Promise((t,n)=>{var r,i,s;function o(){U0(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{U0(),n(Tn(e,"network-request-failed"))},timeout:EL.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Sn().gapi)===null||s===void 0)&&s.load)o();else{const a=p$("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(Tn(e,"network-request-failed"))},eS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Eu=null,t})}let Eu=null;function TL(e){return Eu=Eu||IL(e),Eu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL=new Za(5e3,15e3),PL="__/auth/iframe",RL="emulator/auth/iframe",AL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CL(e){const t=e.config;F(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Zg(t,RL):`https://${e.config.authDomain}/${PL}`,r={apiKey:t.apiKey,appName:e.name,v:Ui},i=kL.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ja(r).slice(1)}`}async function xL(e){const t=await TL(e),n=Sn().gapi;return F(n,e,"internal-error"),t.open({where:document.body,url:CL(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(e,"network-request-failed"),a=Sn().setTimeout(()=>{s(o)},SL.get());function l(){Sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bL=500,NL=600,DL="_blank",$L="http://localhost";class F0{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LL(e,t,n,r=bL,i=NL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=HT(u)?DL:n),WT(u)&&(t=t||$L,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(c$(u)&&a!=="_self")return ML(t||"",a),new F0(null);const h=window.open(t||"",a,c);F(h,e,"popup-blocked");try{h.focus()}catch{}return new F0(h)}function ML(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VL="__/auth/handler",UL="emulator/auth/handler",FL=encodeURIComponent("fac");async function j0(e,t,n,r,i,s){F(e.config.authDomain,e,"auth-domain-config-required"),F(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ui,eventId:i};if(t instanceof iy){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",LD(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(t instanceof tl){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${FL}=${encodeURIComponent(l)}`:"";return`${jL(e)}?${Ja(a).slice(1)}${u}`}function jL({config:e}){return e.emulator?Zg(e,UL):`https://${e.authDomain}/${VL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="webStorageSupport";class BL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uS,this._completeRedirectFn=dL,this._overrideRedirectResult=uL}async _openPopup(t,n,r,i){var s;Yn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await j0(t,n,r,Kp(),i);return LL(t,o,sy())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await j0(t,n,r,Kp(),i);return H$(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await xL(t),r=new pL(t);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(pf,{type:pf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pf];o!==void 0&&n(!!o),Qt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_L(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return XT()||ty()||Nh()}}const zL=BL;var B0="@firebase/auth",z0="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qL(e){Ci(new Ur("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YT(e)},u=new _$(r,i,s,l);return E$(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ci(new Ur("auth-internal",t=>{const n=Fi(t.getProvider("auth").getImmediate());return(r=>new WL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(B0,z0,HL(e)),In(B0,z0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KL=5*60,GL=CT("authIdTokenMaxAge")||KL;let W0=null;const QL=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GL)return;const i=n==null?void 0:n.token;W0!==i&&(W0=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XL(e=Yg()){const t=bh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=w$(e,{popupRedirectResolver:zL,persistence:[eL,B$,uS]}),r=CT("authTokenSyncURL");if(r){const s=QL(r);M$(n,s,()=>s(n.currentUser)),L$(n,o=>s(o))}const i=RT("auth");return i&&I$(n,`http://${i}`),n}qL("Browser");const YL="/assets/logo-5884046f.svg",ay="/assets/photo-30223681.svg",JL=B.button`
  cursor: pointer;
  width: ${({theme:e})=>e.valueInPercent.pr100};

  padding: ${({theme:e})=>e.valueInPx.px5} ${({theme:e})=>e.valueInPx.px0};

  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeight.medium};
  line-height: ${({theme:e})=>e.valueInPx.px20};
  color: ${({theme:e})=>e.usedColors.white};

  background: ${({theme:e})=>e.usedColors.twitterColor};
  border: none;
  border-radius: ${({theme:e})=>e.valueInPx.px30};
  box-shadow: 0 4px 18px ${({theme:e})=>e.colors.boxShadow}
  transition: all 0.2s ease - in -out;

  &:disabled {
    background-color: ${({theme:e})=>e.usedColors.grayOpacity};

    &:hover {
      transform: none;
    }

    &:active {
      transform: none;
    }
  }

  &:hover {
    transform: translateY(2px);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(-1px);
  }
`,Tc=P.memo(({type:e,title:t,isValid:n,callBack:r})=>R.jsx(JL,{"data-cy":"button",onClick:r,disabled:!n,type:e,children:t})),H0=B(AI)`
  display: flex;
  gap: ${({theme:e})=>e.valueInPx.px10};
  align-self: flex-start;
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  font-size: ${({theme:e})=>e.fontSizes.l};
  font-size: ${({theme:e,isActive:t})=>t?e.fontSizes.xl:e.fontSizes.l};
  color: ${({theme:e,isActive:t})=>t?e.usedColors.twitterColor:e.colors.fontColor};
  text-decoration: ${({isActive:e})=>e?"underline":"none"};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: ${({theme:e})=>e.dimensions.laptop}px) {
    gap: ${({theme:e})=>e.valueInPx.px5};
    font-size: ${({theme:e})=>e.fontSizes.m};
    font-weight: ${({theme:e})=>e.fontWeight.normal};
    height: fit-content;
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.x36};
    height: fit-content;
  }
`,q0=B.img`
  width: ${({theme:e})=>e.valueInPx.px20};
  height: ${({theme:e})=>e.valueInPx.px20};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    width: ${({theme:e})=>e.valueInPx.px60};
    height: ${({theme:e})=>e.valueInPx.px50};
  }
`,ZL=P.memo(({path:e,src:t,alt:n,text:r,id:i})=>{const{pathname:s}=Kr(),o=s.startsWith(e.slice(0,4));return r===" Profile"?R.jsxs(H0,{to:`/profile/${i}`,isActive:o,children:[R.jsx(q0,{src:t,alt:n}),r]}):R.jsxs(H0,{to:e,isActive:o,children:[R.jsx(q0,{src:t,alt:n}),r]})}),eM="/assets/bookmarks-2c3cff9a.svg",tM="/assets/bookmarks-white-dac2836c.svg",nM="/assets/explore-5c12089e.svg",rM="/assets/explore-white-1bfaae5b.svg",iM="/assets/home-outline-067cfc87.svg",sM="/assets/home-white-934e81c2.svg",oM="/assets/lists-15e1b424.svg",aM="/assets/lists-white-77a58125.svg",lM="/assets/messages-5bd085ca.svg",uM="/assets/messages-white-ffa07fb8.svg",cM="/assets/more-65a4badc.svg",hM="/assets/more-white-cac52b6c.svg",dM="/assets/notification-aeed51a2.svg",fM="/assets/notification-white-49e6268d.svg",pM="/assets/profile-fill-6cfe452b.svg",mM="/assets/profile-white-9a5683d4.svg",gM=[{text:" Home",to:vt.FEED,src:iM,srcAlt:sM},{text:" Explore",to:vt.EXPLORE,src:nM,srcAlt:rM},{text:" Notifications",to:vt.NOTIFICATIONS,src:dM,srcAlt:fM},{text:" Messages",to:vt.MESSAGES,src:lM,srcAlt:uM},{text:" Bookmarks",to:vt.BOOKMARKS,src:eM,srcAlt:tM},{text:" Lists",to:vt.LISTS,src:oM,srcAlt:aM},{text:" Profile",to:vt.PROFILE,src:pM,srcAlt:mM},{text:" More",to:vt.MORE,src:cM,srcAlt:hM}];var yM="firebase",vM="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(yM,vM,"app");var _M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,ly=ly||{},z=_M||self;function Lh(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function rl(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function wM(e){return Object.prototype.hasOwnProperty.call(e,mf)&&e[mf]||(e[mf]=++EM)}var mf="closure_uid_"+(1e9*Math.random()>>>0),EM=0;function IM(e,t,n){return e.call.apply(e.bind,arguments)}function TM(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function st(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=IM:st=TM,st.apply(null,arguments)}function Hl(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function We(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Gr(){this.s=this.s,this.o=this.o}var SM=0;Gr.prototype.s=!1;Gr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SM!=0)&&wM(this)};Gr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yS=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function uy(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function K0(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Lh(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function ot(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var PM=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{z.addEventListener("test",()=>{},t),z.removeEventListener("test",()=>{},t)}catch{}return e}();function Da(e){return/^[\s\xa0]*$/.test(e)}function Mh(){var e=z.navigator;return e&&(e=e.userAgent)?e:""}function mn(e){return Mh().indexOf(e)!=-1}function cy(e){return cy[" "](e),e}cy[" "]=function(){};function RM(e,t){var n=vV;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var AM=mn("Opera"),Bs=mn("Trident")||mn("MSIE"),vS=mn("Edge"),Qp=vS||Bs,_S=mn("Gecko")&&!(Mh().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),kM=Mh().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function wS(){var e=z.document;return e?e.documentMode:void 0}var Xp;e:{var gf="",yf=function(){var e=Mh();if(_S)return/rv:([^\);]+)(\)|;)/.exec(e);if(vS)return/Edge\/([\d\.]+)/.exec(e);if(Bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(kM)return/WebKit\/(\S+)/.exec(e);if(AM)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(yf&&(gf=yf?yf[1]:""),Bs){var vf=wS();if(vf!=null&&vf>parseFloat(gf)){Xp=String(vf);break e}}Xp=gf}var Yp;if(z.document&&Bs){var G0=wS();Yp=G0||parseInt(Xp,10)||void 0}else Yp=void 0;var CM=Yp;function $a(e,t){if(ot.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(_S){e:{try{cy(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:xM[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$a.$.h.call(this)}}We($a,ot);var xM={2:"touch",3:"pen",4:"mouse"};$a.prototype.h=function(){$a.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var il="closure_listenable_"+(1e6*Math.random()|0),OM=0;function bM(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++OM,this.fa=this.ia=!1}function Vh(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function hy(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function NM(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ES(e){const t={};for(const n in e)t[n]=e[n];return t}const Q0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function IS(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Q0.length;s++)n=Q0[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Uh(e){this.src=e,this.g={},this.h=0}Uh.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Zp(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new bM(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Jp(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=yS(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Vh(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Zp(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var dy="closure_lm_"+(1e6*Math.random()|0),_f={};function TS(e,t,n,r,i){if(r&&r.once)return PS(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)TS(e,t[s],n,r,i);return null}return n=my(n),e&&e[il]?e.O(t,n,rl(r)?!!r.capture:!!r,i):SS(e,t,n,!1,r,i)}function SS(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=rl(i)?!!i.capture:!!i,a=py(e);if(a||(e[dy]=a=new Uh(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=DM(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)PM||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(AS(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DM(){function e(n){return t.call(e.src,e.listener,n)}const t=$M;return e}function PS(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)PS(e,t[s],n,r,i);return null}return n=my(n),e&&e[il]?e.P(t,n,rl(r)?!!r.capture:!!r,i):SS(e,t,n,!0,r,i)}function RS(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)RS(e,t[s],n,r,i);else r=rl(r)?!!r.capture:!!r,n=my(n),e&&e[il]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Zp(s,n,r,i),-1<n&&(Vh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=py(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Zp(t,n,r,i)),(n=-1<e?t[e]:null)&&fy(n))}function fy(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[il])Jp(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(AS(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=py(t))?(Jp(n,e),n.h==0&&(n.src=null,t[dy]=null)):Vh(e)}}}function AS(e){return e in _f?_f[e]:_f[e]="on"+e}function $M(e,t){if(e.fa)e=!0;else{t=new $a(t,this);var n=e.listener,r=e.la||e.src;e.ia&&fy(e),e=n.call(r,t)}return e}function py(e){return e=e[dy],e instanceof Uh?e:null}var wf="__closure_events_fn_"+(1e9*Math.random()>>>0);function my(e){return typeof e=="function"?e:(e[wf]||(e[wf]=function(t){return e.handleEvent(t)}),e[wf])}function Be(){Gr.call(this),this.i=new Uh(this),this.S=this,this.J=null}We(Be,Gr);Be.prototype[il]=!0;Be.prototype.removeEventListener=function(e,t,n,r){RS(this,e,t,n,r)};function Qe(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ot(t,e);else if(t instanceof ot)t.target=t.target||e;else{var i=t;t=new ot(r,e),IS(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ql(o,r,!0,t)&&i}if(o=t.g=e,i=ql(o,r,!0,t)&&i,i=ql(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ql(o,r,!1,t)&&i}Be.prototype.N=function(){if(Be.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Vh(n[r]);delete e.g[t],e.h--}}this.J=null};Be.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Be.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ql(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Jp(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var gy=z.JSON.stringify;class LM{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function MM(){var e=yy;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class VM{constructor(){this.h=this.g=null}add(t,n){const r=kS.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var kS=new LM(()=>new UM,e=>e.reset());class UM{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FM(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function jM(e){z.setTimeout(()=>{throw e},0)}let La,Ma=!1,yy=new VM,CS=()=>{const e=z.Promise.resolve(void 0);La=()=>{e.then(BM)}};var BM=()=>{for(var e;e=MM();){try{e.h.call(e.g)}catch(n){jM(n)}var t=kS;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ma=!1};function Fh(e,t){Be.call(this),this.h=e||1,this.g=t||z,this.j=st(this.qb,this),this.l=Date.now()}We(Fh,Be);O=Fh.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(vy(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vy(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}O.N=function(){Fh.$.N.call(this),vy(this),delete this.g};function _y(e,t,n){if(typeof e=="function")n&&(e=st(e,n));else if(e&&typeof e.handleEvent=="function")e=st(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:z.setTimeout(e,t||0)}function xS(e){e.g=_y(()=>{e.g=null,e.i&&(e.i=!1,xS(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class zM extends Gr{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:xS(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Va(e){Gr.call(this),this.h=e,this.g={}}We(Va,Gr);var X0=[];function OS(e,t,n,r){Array.isArray(n)||(n&&(X0[0]=n.toString()),n=X0);for(var i=0;i<n.length;i++){var s=TS(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function bS(e){hy(e.g,function(t,n){this.g.hasOwnProperty(n)&&fy(t)},e),e.g={}}Va.prototype.N=function(){Va.$.N.call(this),bS(this)};Va.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jh(){this.g=!0}jh.prototype.Ea=function(){this.g=!1};function WM(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function HM(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function hs(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+KM(e,n)+(r?" "+r:"")})}function qM(e,t){e.info(function(){return"TIMEOUT: "+t})}jh.prototype.info=function(){};function KM(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gy(n)}catch{return t}}var ji={},Y0=null;function Bh(){return Y0=Y0||new Be}ji.Ta="serverreachability";function NS(e){ot.call(this,ji.Ta,e)}We(NS,ot);function Ua(e){const t=Bh();Qe(t,new NS(t))}ji.STAT_EVENT="statevent";function DS(e,t){ot.call(this,ji.STAT_EVENT,e),this.stat=t}We(DS,ot);function ft(e){const t=Bh();Qe(t,new DS(t,e))}ji.Ua="timingevent";function $S(e,t){ot.call(this,ji.Ua,e),this.size=t}We($S,ot);function sl(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){e()},t)}var zh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},LS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wy(){}wy.prototype.h=null;function J0(e){return e.h||(e.h=e.i())}function MS(){}var ol={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ey(){ot.call(this,"d")}We(Ey,ot);function Iy(){ot.call(this,"c")}We(Iy,ot);var em;function Wh(){}We(Wh,wy);Wh.prototype.g=function(){return new XMLHttpRequest};Wh.prototype.i=function(){return{}};em=new Wh;function al(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Va(this),this.P=GM,e=Qp?125:void 0,this.V=new Fh(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new VS}function VS(){this.i=null,this.g="",this.h=!1}var GM=45e3,tm={},Sc={};O=al.prototype;O.setTimeout=function(e){this.P=e};function nm(e,t,n){e.L=1,e.v=qh(Jn(t)),e.s=n,e.S=!0,US(e,null)}function US(e,t){e.G=Date.now(),ll(e),e.A=Jn(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),KS(n.i,"t",r),e.C=0,n=e.l.J,e.h=new VS,e.g=pP(e.l,n?t:null,!e.s),0<e.O&&(e.M=new zM(st(e.Pa,e,e.g),e.O)),OS(e.U,e.g,"readystatechange",e.nb),t=e.I?ES(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ua(),WM(e.j,e.u,e.A,e.m,e.W,e.s)}O.nb=function(e){e=e.target;const t=this.M;t&&gn(e)==3?t.l():this.Pa(e)};O.Pa=function(e){try{if(e==this.g)e:{const c=gn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Qp||this.g&&(this.h.h||this.g.ja()||nw(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?Ua(3):Ua(2)),Hh(this);var n=this.g.da();this.ca=n;t:if(FS(this)){var r=nw(this.g);e="";var i=r.length,s=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),ta(this);var o="";break t}this.h.i=new z.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,HM(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Da(a)){var u=a;break t}}u=null}if(n=u)hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rm(this,n);else{this.i=!1,this.o=3,ft(12),hi(this),ta(this);break e}}this.S?(jS(this,c,o),Qp&&this.i&&c==3&&(OS(this.U,this.V,"tick",this.mb),this.V.start())):(hs(this.j,this.m,o,null),rm(this,o)),c==4&&hi(this),this.i&&!this.J&&(c==4?cP(this.l,this):(this.i=!1,ll(this)))}else mV(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),hi(this),ta(this)}}}catch{}finally{}};function FS(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function jS(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=QM(e,n),i==Sc){t==4&&(e.o=4,ft(14),r=!1),hs(e.j,e.m,null,"[Incomplete Response]");break}else if(i==tm){e.o=4,ft(15),hs(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else hs(e.j,e.m,i,null),rm(e,i);FS(e)&&i!=Sc&&i!=tm&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ft(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ky(t),t.M=!0,ft(11))):(hs(e.j,e.m,n,"[Invalid Chunked Response]"),hi(e),ta(e))}O.mb=function(){if(this.g){var e=gn(this.g),t=this.g.ja();this.C<t.length&&(Hh(this),jS(this,e,t),this.i&&e!=4&&ll(this))}};function QM(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Sc:(n=Number(t.substring(n,r)),isNaN(n)?tm:(r+=1,r+n>t.length?Sc:(t=t.slice(r,r+n),e.C=r+n,t)))}O.cancel=function(){this.J=!0,hi(this)};function ll(e){e.Y=Date.now()+e.P,BS(e,e.P)}function BS(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=sl(st(e.lb,e),t)}function Hh(e){e.B&&(z.clearTimeout(e.B),e.B=null)}O.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(qM(this.j,this.A),this.L!=2&&(Ua(),ft(17)),hi(this),this.o=2,ta(this)):BS(this,this.Y-e)};function ta(e){e.l.H==0||e.J||cP(e.l,e)}function hi(e){Hh(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,vy(e.V),bS(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function rm(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||im(n.i,e))){if(!e.K&&im(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ac(n),Qh(n);else break e;Ay(n),ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=sl(st(n.ib,n),6e3));if(1>=XS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else di(n,11)}else if((e.K||n.g==e)&&Ac(n),!Da(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ty(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ce(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=fP(r,r.J?r.pa:null,r.Y),o.K){YS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Hh(a),ll(a)),r.g=o}else lP(r);0<n.j.length&&Xh(n)}else u[0]!="stop"&&u[0]!="close"||di(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?di(n,7):Ry(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ua(4)}catch{}}function XM(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Lh(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function YM(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Lh(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function zS(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Lh(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=YM(e),r=XM(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var WS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JM(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vi(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof vi){this.h=e.h,Pc(this,e.j),this.s=e.s,this.g=e.g,Rc(this,e.m),this.l=e.l;var t=e.i,n=new Fa;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Z0(this,n),this.o=e.o}else e&&(t=String(e).match(WS))?(this.h=!1,Pc(this,t[1]||"",!0),this.s=Uo(t[2]||""),this.g=Uo(t[3]||"",!0),Rc(this,t[4]),this.l=Uo(t[5]||"",!0),Z0(this,t[6]||"",!0),this.o=Uo(t[7]||"")):(this.h=!1,this.i=new Fa(null,this.h))}vi.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Fo(t,ew,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Fo(t,ew,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Fo(n,n.charAt(0)=="/"?tV:eV,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Fo(n,rV)),e.join("")};function Jn(e){return new vi(e)}function Pc(e,t,n){e.j=n?Uo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Rc(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Z0(e,t,n){t instanceof Fa?(e.i=t,iV(e.i,e.h)):(n||(t=Fo(t,nV)),e.i=new Fa(t,e.h))}function ce(e,t,n){e.i.set(t,n)}function qh(e){return ce(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Uo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Fo(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ZM),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ZM(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ew=/[#\/\?@]/g,eV=/[#\?:]/g,tV=/[#\?]/g,nV=/[#\?@]/g,rV=/#/g;function Fa(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Qr(e){e.g||(e.g=new Map,e.h=0,e.i&&JM(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}O=Fa.prototype;O.add=function(e,t){Qr(this),this.i=null,e=ho(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function HS(e,t){Qr(e),t=ho(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function qS(e,t){return Qr(e),t=ho(e,t),e.g.has(t)}O.forEach=function(e,t){Qr(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};O.ta=function(){Qr(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};O.Z=function(e){Qr(this);let t=[];if(typeof e=="string")qS(this,e)&&(t=t.concat(this.g.get(ho(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};O.set=function(e,t){return Qr(this),this.i=null,e=ho(this,e),qS(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};O.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function KS(e,t,n){HS(e,t),0<n.length&&(e.i=null,e.g.set(ho(e,t),uy(n)),e.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ho(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function iV(e,t){t&&!e.j&&(Qr(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(HS(this,r),KS(this,i,n))},e)),e.j=t}var sV=class{constructor(e,t){this.g=e,this.map=t}};function GS(e){this.l=e||oV,z.PerformanceNavigationTiming?(e=z.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oV=10;function QS(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function XS(e){return e.h?1:e.g?e.g.size:0}function im(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ty(e,t){e.g?e.g.add(t):e.h=t}function YS(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}GS.prototype.cancel=function(){if(this.i=JS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function JS(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return uy(e.i)}var aV=class{stringify(e){return z.JSON.stringify(e,void 0)}parse(e){return z.JSON.parse(e,void 0)}};function lV(){this.g=new aV}function uV(e,t,n){const r=n||"";try{zS(e,function(i,s){let o=i;rl(i)&&(o=gy(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function cV(e,t){const n=new jh;if(z.Image){const r=new Image;r.onload=Hl(Kl,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Hl(Kl,n,r,"TestLoadImage: error",!1,t),r.onabort=Hl(Kl,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Hl(Kl,n,r,"TestLoadImage: timeout",!1,t),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Kl(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ul(e){this.l=e.fc||null,this.j=e.ob||!1}We(ul,wy);ul.prototype.g=function(){return new Kh(this.l,this.j)};ul.prototype.i=function(e){return function(){return e}}({});function Kh(e,t){Be.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Sy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(Kh,Be);var Sy=0;O=Kh.prototype;O.open=function(e,t){if(this.readyState!=Sy)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ja(this)};O.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||z).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cl(this)),this.readyState=Sy};O.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ja(this)),this.g&&(this.readyState=3,ja(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ZS(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ZS(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}O.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?cl(this):ja(this),this.readyState==3&&ZS(this)}};O.Za=function(e){this.g&&(this.response=this.responseText=e,cl(this))};O.Ya=function(e){this.g&&(this.response=e,cl(this))};O.ka=function(){this.g&&cl(this)};function cl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ja(e)}O.setRequestHeader=function(e,t){this.v.append(e,t)};O.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ja(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Kh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var hV=z.JSON.parse;function Re(e){Be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=eP,this.L=this.M=!1}We(Re,Be);var eP="",dV=/^https?$/i,fV=["POST","PUT"];O=Re.prototype;O.Oa=function(e){this.M=e};O.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():em.g(),this.C=this.u?J0(this.u):J0(em),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){tw(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&e instanceof z.FormData,!(0<=yS(fV,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rP(this),0<this.B&&((this.L=pV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=_y(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){tw(this,s)}};function pV(e){return Bs&&typeof e.timeout=="number"&&e.ontimeout!==void 0}O.ua=function(){typeof ly<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function tw(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,tP(e),Gh(e)}function tP(e){e.F||(e.F=!0,Qe(e,"complete"),Qe(e,"error"))}O.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Qe(this,"complete"),Qe(this,"abort"),Gh(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gh(this,!0)),Re.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?nP(this):this.kb())};O.kb=function(){nP(this)};function nP(e){if(e.h&&typeof ly<"u"&&(!e.C[1]||gn(e)!=4||e.da()!=2)){if(e.v&&gn(e)==4)_y(e.La,0,e);else if(Qe(e,"readystatechange"),gn(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(WS)[1]||null;!i&&z.self&&z.self.location&&(i=z.self.location.protocol.slice(0,-1)),r=!dV.test(i?i.toLowerCase():"")}n=r}if(n)Qe(e,"complete"),Qe(e,"success");else{e.m=6;try{var s=2<gn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",tP(e)}}finally{Gh(e)}}}}function Gh(e,t){if(e.g){rP(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Qe(e,"ready");try{n.onreadystatechange=r}catch{}}}function rP(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(z.clearTimeout(e.A),e.A=null)}O.isActive=function(){return!!this.g};function gn(e){return e.g?e.g.readyState:0}O.da=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),hV(t)}};function nw(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case eP:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function mV(e){const t={};e=(e.g&&2<=gn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Da(e[r]))continue;var n=FM(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}NM(t,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iP(e){let t="";return hy(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Py(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iP(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ce(e,t,n))}function ko(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function sP(e){this.Ga=0,this.j=[],this.l=new jh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ko("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ko("baseRetryDelayMs",5e3,e),this.hb=ko("retryDelaySeedMs",1e4,e),this.eb=ko("forwardChannelMaxRetries",2,e),this.xa=ko("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new GS(e&&e.concurrentRequestLimit),this.Ja=new lV,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=sP.prototype;O.ra=8;O.H=1;function Ry(e){if(oP(e),e.H==3){var t=e.W++,n=Jn(e.I);if(ce(n,"SID",e.K),ce(n,"RID",t),ce(n,"TYPE","terminate"),hl(e,n),t=new al(e,e.l,t),t.L=2,t.v=qh(Jn(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=t.v,n=!0),n||(t.g=pP(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ll(t)}dP(e)}function Qh(e){e.g&&(ky(e),e.g.cancel(),e.g=null)}function oP(e){Qh(e),e.u&&(z.clearTimeout(e.u),e.u=null),Ac(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&z.clearTimeout(e.m),e.m=null)}function Xh(e){if(!QS(e.i)&&!e.m){e.m=!0;var t=e.Na;La||CS(),Ma||(La(),Ma=!0),yy.add(t,e),e.C=0}}function gV(e,t){return XS(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=sl(st(e.Na,e,t),hP(e,e.C)),e.C++,!0)}O.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new al(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ES(s),IS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=aP(this,i,t),n=Jn(this.I),ce(n,"RID",e),ce(n,"CVER",22),this.F&&ce(n,"X-HTTP-Session-Id",this.F),hl(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(iP(s)))+"&"+t:this.o&&Py(n,this.o,s)),Ty(this.i,i),this.bb&&ce(n,"TYPE","init"),this.P?(ce(n,"$req",t),ce(n,"SID","null"),i.aa=!0,nm(i,n,null)):nm(i,n,t),this.H=2}}else this.H==3&&(e?rw(this,e):this.j.length==0||QS(this.i)||rw(this))};function rw(e,t){var n;t?n=t.m:n=e.W++;const r=Jn(e.I);ce(r,"SID",e.K),ce(r,"RID",n),ce(r,"AID",e.V),hl(e,r),e.o&&e.s&&Py(r,e.o,e.s),n=new al(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=aP(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ty(e.i,n),nm(n,r,t)}function hl(e,t){e.na&&hy(e.na,function(n,r){ce(t,r,n)}),e.h&&zS({},function(n,r){ce(t,r,n)})}function aP(e,t,n){n=Math.min(e.j.length,n);var r=e.h?st(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{uV(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function lP(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;La||CS(),Ma||(La(),Ma=!0),yy.add(t,e),e.A=0}}function Ay(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=sl(st(e.Ma,e),hP(e,e.A)),e.A++,!0)}O.Ma=function(){if(this.u=null,uP(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=sl(st(this.jb,this),e)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ft(10),Qh(this),uP(this))};function ky(e){e.B!=null&&(z.clearTimeout(e.B),e.B=null)}function uP(e){e.g=new al(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Jn(e.wa);ce(t,"RID","rpc"),ce(t,"SID",e.K),ce(t,"AID",e.V),ce(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ce(t,"TO",e.qa),ce(t,"TYPE","xmlhttp"),hl(e,t),e.o&&e.s&&Py(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=qh(Jn(t)),n.s=null,n.S=!0,US(n,e)}O.ib=function(){this.v!=null&&(this.v=null,Qh(this),Ay(this),ft(19))};function Ac(e){e.v!=null&&(z.clearTimeout(e.v),e.v=null)}function cP(e,t){var n=null;if(e.g==t){Ac(e),ky(e),e.g=null;var r=2}else if(im(e.i,t))n=t.F,YS(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Bh(),Qe(r,new $S(r,n)),Xh(e)}else lP(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&gV(e,t)||r==2&&Ay(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:di(e,5);break;case 4:di(e,10);break;case 3:di(e,6);break;default:di(e,2)}}}function hP(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function di(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=st(e.pb,e);n||(n=new vi("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Pc(n,"https"),qh(n)),cV(n.toString(),r)}else ft(2);e.H=0,e.h&&e.h.za(t),dP(e),oP(e)}O.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ft(2)):(this.l.info("Failed to ping google.com"),ft(1))};function dP(e){if(e.H=0,e.ma=[],e.h){const t=JS(e.i);(t.length!=0||e.j.length!=0)&&(K0(e.ma,t),K0(e.ma,e.j),e.i.i.length=0,uy(e.j),e.j.length=0),e.h.ya()}}function fP(e,t,n){var r=n instanceof vi?Jn(n):new vi(n);if(r.g!="")t&&(r.g=t+"."+r.g),Rc(r,r.m);else{var i=z.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new vi(null);r&&Pc(s,r),t&&(s.g=t),i&&Rc(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ce(r,n,t),ce(r,"VER",e.ra),hl(e,r),r}function pP(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Re(new ul({ob:!0})):new Re(e.va),t.Oa(e.J),t}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function mP(){}O=mP.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function kc(){if(Bs&&!(10<=Number(CM)))throw Error("Environmental error: no available transport.")}kc.prototype.g=function(e,t){return new $t(e,t)};function $t(e,t){Be.call(this),this.g=new sP(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Da(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Da(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new fo(this)}We($t,Be);$t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ft(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=fP(e,null,e.Y),Xh(e)};$t.prototype.close=function(){Ry(this.g)};$t.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=gy(e),e=n);t.j.push(new sV(t.fb++,e)),t.H==3&&Xh(t)};$t.prototype.N=function(){this.g.h=null,delete this.j,Ry(this.g),delete this.g,$t.$.N.call(this)};function gP(e){Ey.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}We(gP,Ey);function yP(){Iy.call(this),this.status=1}We(yP,Iy);function fo(e){this.g=e}We(fo,mP);fo.prototype.Ba=function(){Qe(this.g,"a")};fo.prototype.Aa=function(e){Qe(this.g,new gP(e))};fo.prototype.za=function(e){Qe(this.g,new yP)};fo.prototype.ya=function(){Qe(this.g,"b")};function yV(){this.blockSize=-1}function un(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(un,yV);un.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ef(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}un.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ef(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ef(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ef(this,r),i=0;break}}this.h=i,this.i+=t};un.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ne(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var vV={};function Cy(e){return-128<=e&&128>e?RM(e,function(t){return new ne([t|0],0>t?-1:0)}):new ne([e|0],0>e?-1:0)}function yn(e){if(isNaN(e)||!isFinite(e))return Is;if(0>e)return Ke(yn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=sm;return new ne(t,0)}function vP(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ke(vP(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yn(Math.pow(t,8)),r=Is,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=yn(Math.pow(t,s)),r=r.R(s).add(yn(o))):(r=r.R(n),r=r.add(yn(o)))}return r}var sm=4294967296,Is=Cy(0),om=Cy(1),iw=Cy(16777216);O=ne.prototype;O.ea=function(){if(zt(this))return-Ke(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:sm+r)*t,t*=sm}return e};O.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Bn(this))return"0";if(zt(this))return"-"+Ke(this).toString(e);for(var t=yn(Math.pow(e,6)),n=this,r="";;){var i=xc(n,t).g;n=Cc(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Bn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Bn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function zt(e){return e.h==-1}O.X=function(e){return e=Cc(this,e),zt(e)?-1:Bn(e)?0:1};function Ke(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ne(n,~e.h).add(om)}O.abs=function(){return zt(this)?Ke(this):this};O.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ne(n,n[n.length-1]&-2147483648?-1:0)};function Cc(e,t){return e.add(Ke(t))}O.R=function(e){if(Bn(this)||Bn(e))return Is;if(zt(this))return zt(e)?Ke(this).R(Ke(e)):Ke(Ke(this).R(e));if(zt(e))return Ke(this.R(Ke(e)));if(0>this.X(iw)&&0>e.X(iw))return yn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Gl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Gl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Gl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Gl(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ne(n,0)};function Gl(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Co(e,t){this.g=e,this.h=t}function xc(e,t){if(Bn(t))throw Error("division by zero");if(Bn(e))return new Co(Is,Is);if(zt(e))return t=xc(Ke(e),t),new Co(Ke(t.g),Ke(t.h));if(zt(t))return t=xc(e,Ke(t)),new Co(Ke(t.g),t.h);if(30<e.g.length){if(zt(e)||zt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=om,r=t;0>=r.X(e);)n=sw(n),r=sw(r);var i=Gi(n,1),s=Gi(r,1);for(r=Gi(r,2),n=Gi(n,2);!Bn(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Gi(r,1),n=Gi(n,1)}return t=Cc(e,i.R(t)),new Co(i,t)}for(i=Is;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=yn(n),o=s.R(t);zt(o)||0<o.X(e);)n-=r,s=yn(n),o=s.R(t);Bn(s)&&(s=om),i=i.add(s),e=Cc(e,o)}return new Co(i,e)}O.gb=function(e){return xc(this,e).h};O.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ne(n,this.h&e.h)};O.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ne(n,this.h|e.h)};O.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ne(n,this.h^e.h)};function sw(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ne(n,e.h)}function Gi(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ne(i,e.h)}kc.prototype.createWebChannel=kc.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;zh.NO_ERROR=0;zh.TIMEOUT=8;zh.HTTP_ERROR=6;LS.COMPLETE="complete";MS.EventType=ol;ol.OPEN="a";ol.CLOSE="b";ol.ERROR="c";ol.MESSAGE="d";Be.prototype.listen=Be.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;un.prototype.digest=un.prototype.l;un.prototype.reset=un.prototype.reset;un.prototype.update=un.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=yn;ne.fromString=vP;var _V=function(){return new kc},wV=function(){return Bh()},If=zh,EV=LS,IV=ji,ow={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},TV=ul,Ql=MS,SV=Re,PV=un,Ts=ne;const aw="@firebase/firestore";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let tt=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let po="10.1.0";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const bi=new Qg("@firebase/firestore");function lw(){return bi.logLevel}function $(e,...t){if(bi.logLevel<=Y.DEBUG){const n=t.map(xy);bi.debug(`Firestore (${po}): ${e}`,...n)}}function Zn(e,...t){if(bi.logLevel<=Y.ERROR){const n=t.map(xy);bi.error(`Firestore (${po}): ${e}`,...n)}}function zs(e,...t){if(bi.logLevel<=Y.WARN){const n=t.map(xy);bi.warn(`Firestore (${po}): ${e}`,...n)}}function xy(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function j(e="Unexpected state"){const t=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: `+e;throw Zn(t),new Error(t)}function fe(e,t){e||j()}function H(e,t){return e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Cn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _P{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class RV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class AV{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kV{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new _P(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return fe(t===null||typeof t=="string"),new tt(t)}}class CV{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xV{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new CV(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OV{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bV{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new OV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function NV(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wP{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=NV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function J(e,t){return e<t?-1:e>t?1:0}function Ws(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}class Le{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Le.fromMillis(Date.now())}static fromDate(t){return Le.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new Le(0,0))}static max(){return new W(new Le(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ba{constructor(t,n,r){n===void 0?n=0:n>t.length&&j(),r===void 0?r=t.length-n:r>t.length-n&&j(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ba.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ba?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class he extends Ba{construct(t,n,r){return new he(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const DV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ba{construct(t,n,r){return new it(t,n,r)}static isValidIdentifier(t){return DV.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(n)}static emptyPath(){return new it([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class L{constructor(t){this.path=t}static fromPath(t){return new L(he.fromString(t))}static fromName(t){return new L(he.fromString(t).popFirst(5))}static empty(){return new L(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&he.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return he.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new he(t.slice()))}}function $V(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Fr(i,L.empty(),t)}function LV(e){return new Fr(e.readTime,e.key,-1)}class Fr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Fr(W.min(),L.empty(),-1)}static max(){return new Fr(W.max(),L.empty(),-1)}}function MV(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=L.comparator(e.documentKey,t.documentKey),n!==0?n:J(e.largestBatchId,t.largestBatchId))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const VV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function dl(e){if(e.code!==S.FAILED_PRECONDITION||e.message!==VV)throw e;$("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):k.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):k.reject(n)}static resolve(t){return new k((n,r)=>{n(t)})}static reject(t){return new k((n,r)=>{r(t)})}static waitFor(t){return new k((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=k.resolve(!1);for(const r of t)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new k((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new k((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function fl(e){return e.name==="IndexedDbTransactionError"}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Oy{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Oy.ae=-1;function Yh(e){return e==null}function Oc(e){return e===0&&1/e==-1/0}function FV(e){return typeof e=="number"&&Number.isInteger(e)&&!Oc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uw(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Bi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function EP(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ie{constructor(t,n){this.comparator=t,this.root=n||qe.EMPTY}insert(t,n){return new Ie(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new Ie(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xl(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xl(this.root,t,this.comparator,!0)}}class Xl{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new qe(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const t=this.left.check();if(t!==this.right.check())throw j();return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,n,r,i,s){return this}insert(t,n,r){return new qe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class at{constructor(t){this.comparator=t,this.data=new Ie(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new cw(this.data.getIterator())}getIteratorFrom(t){return new cw(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new at(this.comparator);return n.data=t,n}}class cw{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new xt([])}unionWith(t){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new xt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ws(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class IP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new IP("Invalid base64 string: "+s):s}}(t);return new ct(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ct(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const jV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(e){if(fe(!!e),typeof e=="string"){let t=0;const n=jV.exec(e);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:xe(e.seconds),nanos:xe(e.nanos)}}function xe(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ni(e){return typeof e=="string"?ct.fromBase64String(e):ct.fromUint8Array(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function by(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ny(e){const t=e.mapValue.fields.__previous_value__;return by(t)?Ny(t):t}function za(e){const t=jr(e.mapValue.fields.__local_write_time__.timestampValue);return new Le(t.seconds,t.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class BV{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Wa{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Wa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Wa&&t.projectId===this.projectId&&t.database===this.database}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Di(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?by(e)?4:zV(e)?9007199254740991:10:j()}function Rn(e,t){if(e===t)return!0;const n=Di(e);if(n!==Di(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return za(e).isEqual(za(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),a=jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Ni(i.bytesValue).isEqual(Ni(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),a=xe(s.doubleValue);return o===a?Oc(o)===Oc(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ws(e.arrayValue.values||[],t.arrayValue.values||[],Rn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(uw(o)!==uw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Rn(o[l],a[l])))return!1;return!0}(e,t);default:return j()}}function Ha(e,t){return(e.values||[]).find(n=>Rn(n,t))!==void 0}function Hs(e,t){if(e===t)return 0;const n=Di(e),r=Di(t);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=xe(s.integerValue||s.doubleValue),l=xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return hw(e.timestampValue,t.timestampValue);case 4:return hw(za(e),za(t));case 5:return J(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Ni(s),l=Ni(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=J(a[u],l[u]);if(c!==0)return c}return J(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=J(xe(s.latitude),xe(o.latitude));return a!==0?a:J(xe(s.longitude),xe(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Hs(a[u],l[u]);if(c)return c}return J(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Yl.mapValue&&o===Yl.mapValue)return 0;if(s===Yl.mapValue)return 1;if(o===Yl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=J(l[h],c[h]);if(d!==0)return d;const f=Hs(a[l[h]],u[c[h]]);if(f!==0)return f}return J(l.length,c.length)}(e.mapValue,t.mapValue);default:throw j()}}function hw(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return J(e,t);const n=jr(e),r=jr(t),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function qs(e){return am(e)}function am(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ni(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return L.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=am(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${am(n.fields[o])}`;return i+"}"}(e.mapValue):j()}function dw(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function lm(e){return!!e&&"integerValue"in e}function Dy(e){return!!e&&"arrayValue"in e}function fw(e){return!!e&&"nullValue"in e}function pw(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Iu(e){return!!e&&"mapValue"in e}function na(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Bi(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=na(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=na(e.arrayValue.values[n]);return t}return Object.assign({},e)}function zV(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=na(n)}setAll(t){let n=it.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=na(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Rn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Bi(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Et(na(this.value))}}function TP(e){const t=[];return Bi(e.fields,(n,r)=>{const i=new it([n]);if(Iu(r)){const s=TP(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new xt(t)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new rt(t,0,W.min(),W.min(),W.min(),Et.empty(),0)}static newFoundDocument(t,n,r,i){return new rt(t,1,n,W.min(),r,i,0)}static newNoDocument(t,n){return new rt(t,2,n,W.min(),W.min(),Et.empty(),0)}static newUnknownDocument(t,n){return new rt(t,3,n,W.min(),W.min(),Et.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bc{constructor(t,n){this.position=t,this.inclusive=n}}function mw(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Hs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gw(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Rn(e.position[n],t.position[n]))return!1;return!0}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ss{constructor(t,n="asc"){this.field=t,this.dir=n}}function WV(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class SP{}class Ne extends SP{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new qV(t,n,r):n==="array-contains"?new QV(t,r):n==="in"?new XV(t,r):n==="not-in"?new YV(t,r):n==="array-contains-any"?new JV(t,r):new Ne(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new KV(t,r):new GV(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hs(n,this.value)):n!==null&&Di(this.value)===Di(n)&&this.matchesComparison(Hs(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class cn extends SP{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new cn(t,n)}matches(t){return PP(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function PP(e){return e.op==="and"}function RP(e){return HV(e)&&PP(e)}function HV(e){for(const t of e.filters)if(t instanceof cn)return!1;return!0}function um(e){if(e instanceof Ne)return e.field.canonicalString()+e.op.toString()+qs(e.value);if(RP(e))return e.filters.map(t=>um(t)).join(",");{const t=e.filters.map(n=>um(n)).join(",");return`${e.op}(${t})`}}function AP(e,t){return e instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&Rn(r.value,i.value)}(e,t):e instanceof cn?function(r,i){return i instanceof cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&AP(o,i.filters[a]),!0):!1}(e,t):void j()}function kP(e){return e instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${qs(n.value)}`}(e):e instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(kP).join(" ,")+"}"}(e):"Filter"}class qV extends Ne{constructor(t,n,r){super(t,n,r),this.key=L.fromName(r.referenceValue)}matches(t){const n=L.comparator(t.key,this.key);return this.matchesComparison(n)}}class KV extends Ne{constructor(t,n){super(t,"in",n),this.keys=CP("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class GV extends Ne{constructor(t,n){super(t,"not-in",n),this.keys=CP("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function CP(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class QV extends Ne{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Dy(n)&&Ha(n.arrayValue,this.value)}}class XV extends Ne{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ha(this.value.arrayValue,n)}}class YV extends Ne{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ha(this.value.arrayValue,n)}}class JV extends Ne{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Dy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ha(this.value.arrayValue,r))}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ZV{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function yw(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ZV(e,t,n,r,i,s,o)}function $y(e){const t=H(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>um(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>qs(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>qs(r)).join(",")),t.he=n}return t.he}function Ly(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!WV(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!AP(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!gw(e.startAt,t.startAt)&&gw(e.endAt,t.endAt)}function cm(e){return L.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mo{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function e4(e,t,n,r,i,s,o,a){return new mo(e,t,n,r,i,s,o,a)}function My(e){return new mo(e)}function vw(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Vy(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Jh(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function xP(e){return e.collectionGroup!==null}function Ps(e){const t=H(e);if(t.Pe===null){t.Pe=[];const n=Jh(t),r=Vy(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Ss(n)),t.Pe.push(new Ss(it.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Ss(it.keyField(),s))}}}return t.Pe}function er(e){const t=H(e);if(!t.Ie)if(t.limitType==="F")t.Ie=yw(t.path,t.collectionGroup,Ps(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Ps(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ss(s.field,o))}const r=t.endAt?new bc(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new bc(t.startAt.position,t.startAt.inclusive):null;t.Ie=yw(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function hm(e,t){t.getFirstInequalityField(),Jh(e);const n=e.filters.concat([t]);return new mo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function dm(e,t,n){return new mo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Zh(e,t){return Ly(er(e),er(t))&&e.limitType===t.limitType}function OP(e){return`${$y(er(e))}|lt:${e.limitType}`}function fm(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>kP(i)).join(", ")}]`),Yh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qs(i)).join(",")),`Target(${r})`}(er(e))}; limitType=${e.limitType})`}function ed(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Ps(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=mw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ps(r),i)||r.endAt&&!function(o,a,l){const u=mw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ps(r),i))}(e,t)}function t4(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function bP(e){return(t,n)=>{let r=!1;for(const i of Ps(e)){const s=n4(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function n4(e,t,n){const r=e.field.isKeyField()?L.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Hs(l,u):j()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class go{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Bi(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return EP(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const r4=new Ie(L.comparator);function tr(){return r4}const NP=new Ie(L.comparator);function jo(...e){let t=NP;for(const n of e)t=t.insert(n.key,n);return t}function DP(e){let t=NP;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function fi(){return ra()}function $P(){return ra()}function ra(){return new go(e=>e.toString(),(e,t)=>e.isEqual(t))}const i4=new Ie(L.comparator),s4=new at(L.comparator);function K(...e){let t=s4;for(const n of e)t=t.add(n);return t}const o4=new at(J);function a4(){return o4}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function LP(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oc(t)?"-0":t}}function MP(e){return{integerValue:""+e}}function l4(e,t){return FV(t)?MP(t):LP(e,t)}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class td{constructor(){this._=void 0}}function u4(e,t,n){return e instanceof Nc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&by(s)&&(s=Ny(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Ks?UP(e,t):e instanceof Gs?FP(e,t):function(i,s){const o=VP(i,s),a=_w(o)+_w(i.Te);return lm(o)&&lm(i.Te)?MP(a):LP(i.serializer,a)}(e,t)}function c4(e,t,n){return e instanceof Ks?UP(e,t):e instanceof Gs?FP(e,t):n}function VP(e,t){return e instanceof Dc?function(r){return lm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Nc extends td{}class Ks extends td{constructor(t){super(),this.elements=t}}function UP(e,t){const n=jP(t);for(const r of e.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends td{constructor(t){super(),this.elements=t}}function FP(e,t){let n=jP(t);for(const r of e.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Dc extends td{constructor(t,n){super(),this.serializer=t,this.Te=n}}function _w(e){return xe(e.integerValue||e.doubleValue)}function jP(e){return Dy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class BP{constructor(t,n){this.field=t,this.transform=n}}function h4(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Ks&&i instanceof Ks||r instanceof Gs&&i instanceof Gs?Ws(r.elements,i.elements,Rn):r instanceof Dc&&i instanceof Dc?Rn(r.Te,i.Te):r instanceof Nc&&i instanceof Nc}(e.transform,t.transform)}class d4{constructor(t,n){this.version=t,this.transformResults=n}}class an{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new an}static exists(t){return new an(void 0,t)}static updateTime(t){return new an(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class nd{}function zP(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Uy(e.key,an.none()):new pl(e.key,e.data,an.none());{const n=e.data,r=Et.empty();let i=new at(it.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(e.key,r,new xt(i.toArray()),an.none())}}function f4(e,t,n){e instanceof pl?function(i,s,o){const a=i.value.clone(),l=Ew(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Xr?function(i,s,o){if(!Tu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ew(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(WP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ia(e,t,n,r){return e instanceof pl?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const u=s.value.clone(),c=Iw(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Xr?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const u=Iw(s.fieldTransforms,l,o),c=o.data;return c.setAll(WP(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Tu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function p4(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=VP(r.transform,i||null);s!=null&&(n===null&&(n=Et.empty()),n.set(r.field,s))}return n||null}function ww(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ws(r,i,(s,o)=>h4(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class pl extends nd{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends nd{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function WP(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ew(e,t,n){const r=new Map;fe(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,c4(o,a,n[i]))}return r}function Iw(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,u4(s,o,t))}return r}class Uy extends nd{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m4 extends nd{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class g4{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&f4(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ia(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ia(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=$P();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=zP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),K())}isEqual(t){return this.batchId===t.batchId&&Ws(this.mutations,t.mutations,(n,r)=>ww(n,r))&&Ws(this.baseMutations,t.baseMutations,(n,r)=>ww(n,r))}}class Fy{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){fe(t.mutations.length===r.length);let i=function(){return i4}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fy(t,n,r,i)}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class y4{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class v4{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ce,Q;function _4(e){switch(e){default:return j();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function HP(e){if(e===void 0)return Zn("GRPC error has no .code"),S.UNKNOWN;switch(e){case Ce.OK:return S.OK;case Ce.CANCELLED:return S.CANCELLED;case Ce.UNKNOWN:return S.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return S.INTERNAL;case Ce.UNAVAILABLE:return S.UNAVAILABLE;case Ce.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ce.NOT_FOUND:return S.NOT_FOUND;case Ce.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ce.ABORTED:return S.ABORTED;case Ce.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ce.DATA_LOSS:return S.DATA_LOSS;default:return j()}}(Q=Ce||(Ce={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jy{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Jl}static getOrCreateInstance(){return Jl===null&&(Jl=new jy),Jl}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Jl=null;/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function w4(){return new TextEncoder}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const E4=new Ts([4294967295,4294967295],0);function Tw(e){const t=w4().encode(e),n=new PV;return n.update(t),new Uint8Array(n.digest())}function Sw(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ts([n,r],0),new Ts([i,s],0)]}class By{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bo(`Invalid padding: ${n}`);if(r<0)throw new Bo(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Bo(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Bo(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=Ts.fromNumber(this.de)}Re(t,n,r){let i=t.add(n.multiply(Ts.fromNumber(r)));return i.compare(E4)===1&&(i=new Ts([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=Tw(t),[r,i]=Sw(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new By(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=Tw(t),[r,i]=Sw(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Bo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rd{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,ml.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new rd(W.min(),i,new Ie(J),tr(),K())}}class ml{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new ml(r,n,K(),K(),K())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Su{constructor(t,n,r,i){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=i}}class qP{constructor(t,n){this.targetId=t,this.pe=n}}class KP{constructor(t,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Pw{constructor(){this.ye=0,this.we=Aw(),this.Se=ct.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=K(),n=K(),r=K();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new ml(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Aw()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class I4{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=tr(),this.$e=Rw(),this.Ue=new Ie(J)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:j()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(t){var n,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(cm(a))if(s===0){const l=new L(a.path);this.ze(i,l,rt.newNoDocument(l,W.min()))}else fe(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(t,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=jy.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,y){var v,w,m,p,g,_;const E={localCacheCount:f,existenceFilterCount:y.count},I=y.unchangedNames;return I&&(E.bloomFilter={applied:h===0,hashCount:(v=I==null?void 0:I.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(p=(m=(w=I==null?void 0:I.bits)===null||w===void 0?void 0:w.bitmap)===null||m===void 0?void 0:m.length)!==null&&p!==void 0?p:0,padding:(_=(g=I==null?void 0:I.bits)===null||g===void 0?void 0:g.padding)!==null&&_!==void 0?_:0},d&&(E.bloomFilter.mightContain=d)),E}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Ni(s).toUint8Array()}catch(h){if(h instanceof IP)return zs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new By(l,o,a)}catch(h){return zs(h instanceof Bo?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(t.targetId,c)?0:2,nt:c}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&cm(a.target)){const l=new L(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,rt.newNoDocument(l,t))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=K();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new rd(t,n,this.Ue,this.Ke,r);return this.Ke=tr(),this.$e=Rw(),this.Ue=new Ie(J),i}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Pw,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new at(J),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||$("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Pw),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Rw(){return new Ie(L.comparator)}function Aw(){return new Ie(L.comparator)}const T4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),S4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),P4=(()=>({and:"AND",or:"OR"}))();class R4{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function pm(e,t){return e.useProto3Json||Yh(t)?t:{value:t}}function $c(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function GP(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function A4(e,t){return $c(e,t.toTimestamp())}function Pn(e){return fe(!!e),W.fromTimestamp(function(n){const r=jr(n);return new Le(r.seconds,r.nanos)}(e))}function zy(e,t){return function(r){return new he(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function QP(e){const t=he.fromString(e);return fe(ZP(t)),t}function mm(e,t){return zy(e.databaseId,t.path)}function Tf(e,t){const n=QP(t);if(n.get(1)!==e.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new L(XP(n))}function gm(e,t){return zy(e.databaseId,t)}function k4(e){const t=QP(e);return t.length===4?he.emptyPath():XP(t)}function ym(e){return new he(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function XP(e){return fe(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function kw(e,t,n){return{name:mm(e,t),fields:n.value.mapValue.fields}}function C4(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:j()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(fe(c===void 0||typeof c=="string"),ct.fromBase64String(c||"")):(fe(c===void 0||c instanceof Uint8Array),ct.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:HP(u.code);return new N(c,u.message||"")}(o);n=new KP(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Tf(e,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):W.min(),a=new Et({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Su(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Tf(e,r.document),s=r.readTime?Pn(r.readTime):W.min(),o=rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Su([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Tf(e,r.document),s=r.removedTargetIds||[];n=new Su([],s,i,null)}else{if(!("filter"in t))return j();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new v4(i,s),a=r.targetId;n=new qP(a,o)}}return n}function x4(e,t){let n;if(t instanceof pl)n={update:kw(e,t.key,t.value)};else if(t instanceof Uy)n={delete:mm(e,t.key)};else if(t instanceof Xr)n={update:kw(e,t.key,t.data),updateMask:U4(t.fieldMask)};else{if(!(t instanceof m4))return j();n={verify:mm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Nc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Dc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw j()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:A4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j()}(e,t.precondition)),n}function O4(e,t){return e&&e.length>0?(fe(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(W.min())&&(o=Pn(s)),new d4(o,i.transformResults||[])}(n,t))):[]}function b4(e,t){return{documents:[gm(e,t.path)]}}function N4(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=gm(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=gm(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return JP(cn.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Xi(h.field),direction:L4(h.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=pm(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function D4(e){let t=k4(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=YP(h);return d instanceof cn&&RP(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Ss(Yi(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Yh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new bc(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new bc(f,d)}(n.endAt)),e4(t,i,o,s,a,"F",l,u)}function $4(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function YP(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yi(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yi(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yi(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yi(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(e):e.fieldFilter!==void 0?function(n){return Ne.create(Yi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>YP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j()}}(n.compositeFilter.op))}(e):j()}function L4(e){return T4[e]}function M4(e){return S4[e]}function V4(e){return P4[e]}function Xi(e){return{fieldPath:e.canonicalString()}}function Yi(e){return it.fromServerFormat(e.fieldPath)}function JP(e){return e instanceof Ne?function(n){if(n.op==="=="){if(pw(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NAN"}};if(fw(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pw(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NAN"}};if(fw(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xi(n.field),op:M4(n.op),value:n.value}}}(e):e instanceof cn?function(n){const r=n.getFilters().map(i=>JP(i));return r.length===1?r[0]:{compositeFilter:{op:V4(n.op),filters:r}}}(e):j()}function U4(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ZP(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _r{constructor(t,n,r,i,s=W.min(),o=W.min(),a=ct.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new _r(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class F4{constructor(t){this.ct=t}}function j4(e){const t=D4({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?dm(t,t.limit,"L"):t}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class B4{constructor(){this.sn=new z4}addToCollectionParentIndex(t,n){return this.sn.add(n),k.resolve()}getCollectionParents(t,n){return k.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return k.resolve()}deleteFieldIndex(t,n){return k.resolve()}getDocumentsMatchingTarget(t,n){return k.resolve(null)}getIndexType(t,n){return k.resolve(0)}getFieldIndexes(t,n){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,n){return k.resolve(Fr.min())}getMinOffsetFromCollectionGroup(t,n){return k.resolve(Fr.min())}updateCollectionGroup(t,n,r){return k.resolve()}updateIndexEntries(t,n){return k.resolve()}}class z4{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new at(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(he.comparator)).toArray()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qs{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Qs(0)}static On(){return new Qs(-1)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class W4{constructor(){this.changes=new go(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,rt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class H4{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class q4{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&ia(r.mutation,i,xt.empty(),Le.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,K()).next(()=>r))}getLocalViewOfDocuments(t,n,r=K()){const i=fi();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=jo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=fi();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,K()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=tr();const o=ra(),a=function(){return ra()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Xr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ia(c.mutation,u,c.mutation.getFieldMask(),Le.now())):o.set(u.key,xt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new H4(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=ra();let i=new Ie((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||xt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=$P();c.forEach(d=>{if(!s.has(d)){const f=zP(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):xP(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):k.resolve(fi());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,K())).next(c=>({batchId:a,changes:DP(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new L(n)).next(r=>{let i=jo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=jo();return this.indexManager.getCollectionParents(t,i).next(o=>k.forEach(o,a=>{const l=function(c,h){return new mo(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,rt.newInvalidDocument(u)))});let o=jo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ia(u.mutation,l,xt.empty(),Le.now()),ed(n,l)&&(o=o.insert(a,l))}),o})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class K4{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return k.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),k.resolve()}getNamedQuery(t,n){return k.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:j4(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),k.resolve()}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class G4{constructor(){this.overlays=new Ie(L.comparator),this.cr=new Map}getOverlay(t,n){return k.resolve(this.overlays.get(n))}getOverlays(t,n){const r=fi();return k.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),k.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),k.resolve()}getOverlaysForCollection(t,n,r){const i=fi(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Ie((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=fi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=fi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new y4(n,r));let s=this.cr.get(n);s===void 0&&(s=K(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wy{constructor(){this.lr=new at(Me.hr),this.Pr=new at(Me.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new Me(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new Me(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new L(new he([])),r=new Me(n,t),i=new Me(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new L(new he([])),r=new Me(n,t),i=new Me(n,t+1);let s=K();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Me(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Me{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return L.comparator(t.key,n.key)||J(t.mr,n.mr)}static Ir(t,n){return J(t.mr,n.mr)||L.comparator(t.key,n.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Q4{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new at(Me.hr)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new g4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Me(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(t,n){return k.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new at(J);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),k.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Me(new L(s),0);let a=new at(J);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),k.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){fe(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return k.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new Me(n,0),i=this.pr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class X4{constructor(t){this.Dr=t,this.docs=function(){return new Ie(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(t,n){let r=tr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=tr();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||MV(LV(c),r)<=0||(i.has(c.key)||ed(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(t,n,r,i){j()}vr(t,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Y4(this)}getSize(t){return k.resolve(this.size)}}class Y4 extends W4{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),k.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class J4{constructor(t){this.persistence=t,this.Cr=new go(n=>$y(n),Ly),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Wy,this.targetCount=0,this.Or=Qs.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),k.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new Qs(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,k.resolve()}updateTargetData(t,n){return this.Ln(n),k.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return k.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),k.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),k.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return k.resolve(r)}containsKey(t,n){return k.resolve(this.Mr.containsKey(n))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Z4{constructor(t,n){this.Nr={},this.overlays={},this.Br=new Oy(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new J4(this),this.indexManager=new B4,this.remoteDocumentCache=function(i){return new X4(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new F4(n),this.Qr=new K4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new G4,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new Q4(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){$("MemoryPersistence","Starting transaction:",t);const i=new eU(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return k.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class eU extends UV{constructor(t){super(),this.currentSequenceNumber=t}}class Hy{constructor(t){this.persistence=t,this.Wr=new Wy,this.Gr=null}static zr(t){return new Hy(t)}get jr(){if(this.Gr)return this.Gr;throw j()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),k.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),k.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.jr,r=>{const i=L.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return k.or([()=>k.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qy{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qy(t,n.fromCache,r,i)}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tU{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if(vw(n))return k.resolve(null);let r=er(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dm(n,null,"F"),r=er(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=K(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(t,dm(n,null,"F")):this.ji(t,u,n,l)}))})))}Ui(t,n,r,i){return vw(n)||i.isEqual(W.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(lw()<=Y.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fm(n)),this.ji(t,o,n,$V(i,-1)))})}Gi(t,n){let r=new at(bP(t));return n.forEach((i,s)=>{ed(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return lw()<=Y.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",fm(n)),this.Ki.getDocumentsMatchingQuery(t,n,Fr.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class nU{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new Ie(J),this.Yi=new go(s=>$y(s),Ly),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new q4(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function rU(e,t,n,r){return new nU(e,t,n,r)}async function eR(e,t){const n=H(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=K();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function iU(e,t){const n=H(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=k.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(l,y)).next(v=>{const w=u.docVersions.get(y);fe(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=K();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function tR(e){const t=H(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function sU(e,t){const n=H(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(ct.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(v,w,m){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.kr.updateTargetData(s,f))});let l=tr(),u=K();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(oU(s,o,t.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(W.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function oU(e,t,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=tr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function aU(e,t){const n=H(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function lU(e,t){const n=H(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,t).next(s=>s?(i=s,k.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new _r(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function vm(e,t,n){const r=H(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!fl(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Cw(e,t,n){const r=H(e);let i=W.min(),s=K();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=H(l),d=h.Yi.get(c);return d!==void 0?k.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,er(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?i:W.min(),n?s:K())).next(a=>(uU(r,t4(t),a),{documents:a,ss:s})))}function uU(e,t,n){let r=e.Zi.get(t)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Zi.set(t,r)}class xw{constructor(){this.activeTargetIds=a4()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cU{constructor(){this.Hs=new xw,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new xw,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hU{Ys(t){}shutdown(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ow{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Zl=null;function Sf(){return Zl===null?Zl=function(){return 268435456+Math.round(2147483648*Math.random())}():Zl++,"0x"+Zl.toString(16)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const dU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fU{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ze="WebChannelConnection";class pU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Sf(),l=this.mo(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>($("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw zs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=dU[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){const s=Sf();return new Promise((o,a)=>{const l=new SV;l.setWithCredentials(!0),l.listenOnce(EV.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case If.NO_ERROR:const c=l.getResponseJson();$(Ze,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case If.TIMEOUT:$(Ze,`RPC '${t}' ${s} timed out`),a(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case If.HTTP_ERROR:const h=l.getStatus();if($(Ze,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(f.status);a(new N(y,f.message))}else a(new N(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(S.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{$(Ze,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);$(Ze,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(t,n,r){const i=Sf(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=_V(),a=wV(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new TV({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");$(Ze,`Creating RPC '${t}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const y=new fU({so:w=>{f?$(Ze,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(d||($(Ze,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),$(Ze,`RPC '${t}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),v=(w,m,p)=>{w.listen(m,g=>{try{p(g)}catch(_){setTimeout(()=>{throw _},0)}})};return v(h,Ql.EventType.OPEN,()=>{f||$(Ze,`RPC '${t}' stream ${i} transport opened.`)}),v(h,Ql.EventType.CLOSE,()=>{f||(f=!0,$(Ze,`RPC '${t}' stream ${i} transport closed`),y.Po())}),v(h,Ql.EventType.ERROR,w=>{f||(f=!0,zs(Ze,`RPC '${t}' stream ${i} transport errored:`,w),y.Po(new N(S.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ql.EventType.MESSAGE,w=>{var m;if(!f){const p=w.data[0];fe(!!p);const g=p,_=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(_){$(Ze,`RPC '${t}' stream ${i} received error:`,_);const E=_.status;let I=function(M){const x=Ce[M];if(x!==void 0)return HP(x)}(E),T=_.message;I===void 0&&(I=S.INTERNAL,T="Unknown error status: "+E+" with message "+_.message),f=!0,y.Po(new N(I,T)),h.close()}else $(Ze,`RPC '${t}' stream ${i} received:`,p),y.Io(p)}}),v(a,IV.STAT_EVENT,w=>{w.stat===ow.PROXY?$(Ze,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===ow.NOPROXY&&$(Ze,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function Pf(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function id(e){return new R4(e,!0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class nR{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rR{constructor(t,n,r,i,s,o,a,l){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new nR(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{const i=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return $("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mU extends rR{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=C4(this.serializer,t),r=function(s){if(!("targetChange"in s))return W.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Pn(o.readTime):W.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=ym(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=cm(l)?{documents:b4(s,l)}:{query:N4(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GP(s,o.resumeToken);const u=pm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=$c(s,o.snapshotVersion.toTimestamp());const u=pm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=$4(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=ym(this.serializer),n.removeTarget=t,this.Ho(n)}}class gU extends rR{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(fe(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=O4(t.writeResults,t.commitTime),r=Pn(t.commitTime);return this.listener.u_(r,n)}return fe(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=ym(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>x4(this.serializer,r))};this.Ho(n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class yU extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(S.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(S.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class vU{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Zn(n),this.d_=!1):$("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _U{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{zi(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=H(l);u.y_.add(4),await gl(u),u.b_.set("Unknown"),u.y_.delete(4),await sd(u)}(this))})}),this.b_=new vU(r,i)}}async function sd(e){if(zi(e))for(const t of e.w_)await t(!0)}async function gl(e){for(const t of e.w_)await t(!1)}function iR(e,t){const n=H(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),Qy(n)?Gy(n):yo(n).Uo()&&Ky(n,t))}function sR(e,t){const n=H(e),r=yo(n);n.p_.delete(t),r.Uo()&&oR(n,t),n.p_.size===0&&(r.Uo()?r.zo():zi(n)&&n.b_.set("Unknown"))}function Ky(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}yo(e).i_(t)}function oR(e,t){e.D_.Be(t),yo(e).s_(t)}function Gy(e){e.D_=new I4({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),yo(e).start(),e.b_.A_()}function Qy(e){return zi(e)&&!yo(e).$o()&&e.p_.size>0}function zi(e){return H(e).y_.size===0}function aR(e){e.D_=void 0}async function wU(e){e.p_.forEach((t,n)=>{Ky(e,t)})}async function EU(e,t){aR(e),Qy(e)?(e.b_.m_(t),Gy(e)):e.b_.set("Unknown")}async function IU(e,t,n){if(e.b_.set("Online"),t instanceof KP&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(e,t)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Lc(e,r)}else if(t instanceof Su?e.D_.We(t):t instanceof qP?e.D_.Ze(t):e.D_.je(t),!n.isEqual(W.min()))try{const r=await tR(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(ct.EMPTY_BYTE_STRING,c.snapshotVersion)),oR(s,l);const h=new _r(c.target,l,u,c.sequenceNumber);Ky(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Lc(e,r)}}async function Lc(e,t,n){if(!fl(t))throw t;e.y_.add(1),await gl(e),e.b_.set("Offline"),n||(n=()=>tR(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await sd(e)})}function lR(e,t){return t().catch(n=>Lc(e,n,t))}async function od(e){const t=H(e),n=Br(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;TU(t);)try{const i=await aU(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,SU(t,i)}catch(i){await Lc(t,i)}uR(t)&&cR(t)}function TU(e){return zi(e)&&e.g_.length<10}function SU(e,t){e.g_.push(t);const n=Br(e);n.Uo()&&n.__&&n.a_(t.mutations)}function uR(e){return zi(e)&&!Br(e).$o()&&e.g_.length>0}function cR(e){Br(e).start()}async function PU(e){Br(e).l_()}async function RU(e){const t=Br(e);for(const n of e.g_)t.a_(n.mutations)}async function AU(e,t,n){const r=e.g_.shift(),i=Fy.from(r,t,n);await lR(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await od(e)}async function kU(e,t){t&&Br(e).__&&await async function(r,i){if(function(o){return _4(o)&&o!==S.ABORTED}(i.code)){const s=r.g_.shift();Br(r).Go(),await lR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await od(r)}}(e,t),uR(e)&&cR(e)}async function bw(e,t){const n=H(e);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=zi(n);n.y_.add(3),await gl(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await sd(n)}async function CU(e,t){const n=H(e);t?(n.y_.delete(2),await sd(n)):t||(n.y_.add(2),await gl(n),n.b_.set("Unknown"))}function yo(e){return e.v_||(e.v_=function(n,r,i){const s=H(n);return s.P_(),new mU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:wU.bind(null,e),uo:EU.bind(null,e),r_:IU.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),Qy(e)?Gy(e):e.b_.set("Unknown")):(await e.v_.stop(),aR(e))})),e.v_}function Br(e){return e.C_||(e.C_=function(n,r,i){const s=H(n);return s.P_(),new gU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:PU.bind(null,e),uo:kU.bind(null,e),c_:RU.bind(null,e),u_:AU.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await od(e)):(await e.C_.stop(),e.g_.length>0&&($("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xy{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Xy(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yy(e,t){if(Zn("AsyncQueue",`${t}: ${e}`),fl(e))return new N(S.UNAVAILABLE,`${t}: ${e}`);throw e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Rs{constructor(t){this.comparator=t?(n,r)=>t(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=jo(),this.sortedSet=new Ie(this.comparator)}static emptySet(t){return new Rs(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Rs)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nw{constructor(){this.F_=new Ie(L.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):j():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Xs{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xs(t,n,Rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xU{constructor(){this.x_=void 0,this.listeners=[]}}class OU{constructor(){this.queries=new go(t=>OP(t),Zh),this.onlineState="Unknown",this.O_=new Set}}async function hR(e,t){const n=H(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new xU),i)try{s.x_=await n.onListen(r)}catch(o){const a=Yy(o,`Initialization of query '${fm(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&Jy(n)}async function dR(e,t){const n=H(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bU(e,t){const n=H(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Jy(n)}function NU(e,t,n){const r=H(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Jy(e){e.O_.forEach(t=>{t.next()})}class fR{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Xs(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=Xs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pR{constructor(t){this.key=t}}class mR{constructor(t){this.key=t}}class DU{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=K(),this.mutatedKeys=K(),this.na=bP(t),this.ra=new Rs(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new Nw,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const d=i.get(c),f=ed(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?y!==v&&(r.track({type:3,doc:f}),w=!0):this._a(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.na(f,l)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((u,c)=>function(d,f){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return y(d)-y(f)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Xs(this.query,t.ra,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Nw,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=K(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new mR(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new pR(r))}),n}ha(t){this.X_=t.ss,this.ta=K();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return Xs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class $U{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class LU{constructor(t){this.key=t,this.Ia=!1}}class MU{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new go(a=>OP(a),Zh),this.da=new Map,this.Aa=new Set,this.Ra=new Ie(L.comparator),this.Va=new Map,this.ma=new Wy,this.fa={},this.ga=new Map,this.pa=Qs.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function VU(e,t){const n=GU(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await lU(n.localStore,er(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await UU(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&iR(n.remoteStore,o)}return i}async function UU(e,t,n,r,i){e.wa=(h,d,f)=>async function(v,w,m,p){let g=w.view.sa(m);g.zi&&(g=await Cw(v.localStore,w.query,!1).then(({documents:I})=>w.view.sa(I,g)));const _=p&&p.targetChanges.get(w.targetId),E=w.view.applyChanges(g,v.isPrimaryClient,_);return $w(v,w.targetId,E.ca),E.snapshot}(e,h,d,f);const s=await Cw(e.localStore,t,!0),o=new DU(t,s.ss),a=o.sa(s.documents),l=ml.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);$w(e,n,u.ca);const c=new $U(t,n,o);return e.Ea.set(t,c),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot}async function FU(e,t){const n=H(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Zh(s,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sR(n.remoteStore,r.targetId),_m(n,r.targetId)}).catch(dl)):(_m(n,r.targetId),await vm(n.localStore,r.targetId,!0))}async function jU(e,t,n){const r=QU(e);try{const i=await function(o,a){const l=H(o),u=Le.now(),c=a.reduce((f,y)=>f.add(y.key),K());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=tr(),v=K();return l.Xi.getEntries(f,c).next(w=>{y=w,y.forEach((m,p)=>{p.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(w=>{h=w;const m=[];for(const p of a){const g=p4(p,h.get(p.key).overlayedDocument);g!=null&&m.push(new Xr(p.key,g,TP(g.value.mapValue),an.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(w=>{d=w;const m=w.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,w.batchId,m)})}).then(()=>({batchId:d.batchId,changes:DP(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new Ie(J)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await yl(r,i.changes),await od(r.remoteStore)}catch(i){const s=Yy(i,"Failed to persist write");n.reject(s)}}async function gR(e,t){const n=H(e);try{const r=await sU(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?fe(o.Ia):i.removedDocuments.size>0&&(fe(o.Ia),o.Ia=!1))}),await yl(n,r,t)}catch(r){await dl(r)}}function Dw(e,t,n){const r=H(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=H(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Jy(l)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function BU(e,t,n){const r=H(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new Ie(L.comparator);o=o.insert(s,rt.newNoDocument(s,W.min()));const a=K().add(s),l=new rd(W.min(),new Map,new Ie(J),o,a);await gR(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(t),Zy(r)}else await vm(r.localStore,t,!1).then(()=>_m(r,t,n)).catch(dl)}async function zU(e,t){const n=H(e),r=t.batch.batchId;try{const i=await iU(n.localStore,t);vR(n,r,null),yR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yl(n,i)}catch(i){await dl(i)}}async function WU(e,t,n){const r=H(e);try{const i=await function(o,a){const l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(fe(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);vR(r,t,n),yR(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await yl(r,i)}catch(i){await dl(i)}}function yR(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function vR(e,t,n){const r=H(e);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function _m(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||_R(e,r)})}function _R(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(sR(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),Zy(e))}function $w(e,t,n){for(const r of n)r instanceof pR?(e.ma.addReference(r.key,t),HU(e,r)):r instanceof mR?($("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||_R(e,r.key)):j()}function HU(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||($("SyncEngine","New document in limbo: "+n),e.Aa.add(r),Zy(e))}function Zy(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new L(he.fromString(t)),r=e.pa.next();e.Va.set(r,new LU(n)),e.Ra=e.Ra.insert(n,r),iR(e.remoteStore,new _r(er(My(n.path)),r,"TargetPurposeLimboResolution",Oy.ae))}}async function yl(e,t,n){const r=H(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=qy.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=H(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(u,d=>k.forEach(d.Li,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>k.forEach(d.ki,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!fl(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.Ji.get(d),y=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(y);c.Ji=c.Ji.insert(d,v)}}}(r.localStore,s))}async function qU(e,t){const n=H(e);if(!n.currentUser.isEqual(t)){$("SyncEngine","User change. New user:",t.toKey());const r=await eR(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new N(S.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await yl(n,r.ts)}}function KU(e,t){const n=H(e),r=n.Va.get(t);if(r&&r.Ia)return K().add(r.key);{let i=K();const s=n.da.get(t);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function GU(e){const t=H(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=gR.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=KU.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=BU.bind(null,t),t.Ta.r_=bU.bind(null,t.eventManager),t.Ta.Sa=NU.bind(null,t.eventManager),t}function QU(e){const t=H(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zU.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=WU.bind(null,t),t}class Lw{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=id(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return rU(this.persistence,new tU,t.initialUser,this.serializer)}createPersistence(t){return new Z4(Hy.zr,this.serializer)}createSharedClientState(t){return new cU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XU{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qU.bind(null,this.syncEngine),await CU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new OU}()}createDatastore(t){const n=id(t.databaseInfo.databaseId),r=function(s){return new pU(s)}(t.databaseInfo);return function(s,o,a,l){return new yU(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new _U(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Dw(this.syncEngine,n,0),function(){return Ow.v()?new Ow:new hU}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,c){const h=new MU(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=H(n);$("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await gl(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wR{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Zn("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class YU{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=wP.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Yy(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Rf(e,t){e.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eR(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Mw(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ZU(e);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>bw(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>bw(t.remoteStore,s)),e._onlineComponents=t}function JU(e){return e.name==="FirebaseError"?e.code===S.FAILED_PRECONDITION||e.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function ZU(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!JU(n))throw n;zs("Error using user provided cache. Falling back to memory cache: "+n),await Rf(e,new Lw)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Rf(e,new Lw);return e._offlineComponents}async function ER(e){return e._onlineComponents||(e._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Mw(e,e._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Mw(e,new XU))),e._onlineComponents}function eF(e){return ER(e).then(t=>t.syncEngine)}async function IR(e){const t=await ER(e),n=t.eventManager;return n.onListen=VU.bind(null,t.syncEngine),n.onUnlisten=FU.bind(null,t.syncEngine),n}function tF(e,t,n={}){const r=new Wn;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new wR({next:d=>{o.enqueueAndForget(()=>dR(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new fR(My(a.path),c,{includeMetadataChanges:!0,W_:!0});return hR(s,h)}(await IR(e),e.asyncQueue,t,n,r)),r.promise}function nF(e,t,n={}){const r=new Wn;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new wR({next:d=>{o.enqueueAndForget(()=>dR(s,h)),d.fromCache&&l.source==="server"?u.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new fR(a,c,{includeMetadataChanges:!0,W_:!0});return hR(s,h)}(await IR(e),e.asyncQueue,t,n,r)),r.promise}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function TR(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Vw=new Map;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function SR(e,t,n){if(!n)throw new N(S.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function rF(e,t,n,r){if(t===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Uw(e){if(!L.isDocumentKey(e))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Fw(e){if(L.isDocumentKey(e))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ad(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":j()}function An(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ad(e);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}class jw{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}rF("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TR((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ld{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jw(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RV;switch(r.type){case"firstParty":return new xV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vw.get(n);r&&($("ComponentProvider","Removing Datastore"),Vw.delete(n),r.terminate())}(this),Promise.resolve()}}function iF(e,t,n,r={}){var i;const s=(e=An(e,ld))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=tt.MOCK_USER;else{a=xT(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new tt(u)}e._authCredentials=new AV(new _P(a,l))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wi{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Wi(this.firestore,t,this._query)}}class mt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class Dr extends Wi{constructor(t,n,r){super(t,n,My(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new L(t))}withConverter(t){return new Dr(this.firestore,t,this._path)}}function vl(e,t,...n){if(e=Ee(e),SR("collection","path",t),e instanceof ld){const r=he.fromString(t,...n);return Fw(r),new Dr(e,null,r)}{if(!(e instanceof mt||e instanceof Dr))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(he.fromString(t,...n));return Fw(r),new Dr(e.firestore,null,r)}}function ev(e,t,...n){if(e=Ee(e),arguments.length===1&&(t=wP.V()),SR("doc","path",t),e instanceof ld){const r=he.fromString(t,...n);return Uw(r),new mt(e,null,new L(r))}{if(!(e instanceof mt||e instanceof Dr))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(he.fromString(t,...n));return Uw(r),new mt(e.firestore,e instanceof Dr?e.converter:null,new L(r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sF{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new nR(this,"async_queue_retry"),this.Xa=()=>{const n=Pf();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=Pf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=Pf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new Wn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!fl(t))throw t;$("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Zn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const i=Xy.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&j()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}class vo extends ld{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new sF}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||PR(this),this._firestoreClient.terminate()}}function oF(e,t){const n=typeof e=="object"?e:Yg(),r=typeof e=="string"?e:t||"(default)",i=bh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=AT("firestore");s&&iF(i,...s)}return i}function tv(e){return e._firestoreClient||PR(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function PR(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new BV(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,TR(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new YU(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ys{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ys(ct.fromBase64String(t))}catch(n){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ys(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ud{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _l{constructor(t){this._methodName=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class nv{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const aF=/^__.*__$/;class lF{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Xr(t,this.data,this.fieldMask,n,this.fieldTransforms):new pl(t,this.data,n,this.fieldTransforms)}}class RR{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Xr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function AR(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class cd{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new cd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Mc(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(AR(this.uu)&&aF.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class uF{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||id(t)}Ru(t,n,r,i=!1){return new cd({uu:t,methodName:n,Au:r,path:it.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rv(e){const t=e._freezeSettings(),n=id(e._databaseId);return new uF(e._databaseId,!!t.ignoreUndefinedProperties,n)}function cF(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);iv("Data must be an object, but it was:",o,r);const a=CR(r,o);let l,u;if(s.merge)l=new xt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=wm(t,h,n);if(!o.contains(d))throw new N(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);OR(c,d)||c.push(d)}l=new xt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new lF(new Et(a),l,u)}class hd extends _l{_toFieldTransform(t){if(t.uu!==2)throw t.uu===1?t.Eu(`${this._methodName}() can only appear at the top level of your update data`):t.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof hd}}function kR(e,t,n){return new cd({uu:3,Au:t.settings.Au,methodName:e._methodName,hu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class hF extends _l{constructor(t,n){super(t),this.Vu=n}_toFieldTransform(t){const n=kR(this,t,!0),r=this.Vu.map(s=>Hi(s,n)),i=new Ks(r);return new BP(t.path,i)}isEqual(t){return this===t}}class dF extends _l{constructor(t,n){super(t),this.Vu=n}_toFieldTransform(t){const n=kR(this,t,!0),r=this.Vu.map(s=>Hi(s,n)),i=new Gs(r);return new BP(t.path,i)}isEqual(t){return this===t}}function fF(e,t,n,r){const i=e.Ru(1,t,n);iv("Data must be an object, but it was:",i,r);const s=[],o=Et.empty();Bi(r,(l,u)=>{const c=sv(t,l,n);u=Ee(u);const h=i.Iu(c);if(u instanceof hd)s.push(c);else{const d=Hi(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new xt(s);return new RR(o,a,i.fieldTransforms)}function pF(e,t,n,r,i,s){const o=e.Ru(1,t,n),a=[wm(t,r,n)],l=[i];if(s.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(wm(t,s[d])),l.push(s[d+1]);const u=[],c=Et.empty();for(let d=a.length-1;d>=0;--d)if(!OR(u,a[d])){const f=a[d];let y=l[d];y=Ee(y);const v=o.Iu(f);if(y instanceof hd)u.push(f);else{const w=Hi(y,v);w!=null&&(u.push(f),c.set(f,w))}}const h=new xt(u);return new RR(c,h,o.fieldTransforms)}function mF(e,t,n,r=!1){return Hi(n,e.Ru(r?4:3,t))}function Hi(e,t){if(xR(e=Ee(e)))return iv("Unsupported field value:",t,e),CR(e,t);if(e instanceof _l)return function(r,i){if(!AR(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Hi(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return l4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:$c(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$c(i.serializer,s)}}if(r instanceof nv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ys)return{bytesValue:GP(i.serializer,r._byteString)};if(r instanceof mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${ad(r)}`)}(e,t)}function CR(e,t){const n={};return EP(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Bi(e,(r,i)=>{const s=Hi(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xR(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Le||e instanceof nv||e instanceof Ys||e instanceof mt||e instanceof _l)}function iv(e,t,n){if(!xR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ad(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function wm(e,t,n){if((t=Ee(t))instanceof ud)return t._internalPath;if(typeof t=="string")return sv(e,t);throw Mc("Field path arguments must be of type string or ",e,!1,void 0,n)}const gF=new RegExp("[~\\*/\\[\\]]");function sv(e,t,n){if(t.search(gF)>=0)throw Mc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ud(...t.split("."))._internalPath}catch{throw Mc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Mc(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(S.INVALID_ARGUMENT,a+e+l)}function OR(e,t){return e.some(n=>n.isEqual(t))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bR{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(dd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yF extends bR{data(){return super.data()}}function dd(e,t){return typeof t=="string"?sv(e,t):t instanceof ud?t._internalPath:t._delegate._internalPath}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vF(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ov{}class NR extends ov{}function wl(e,t,...n){let r=[];t instanceof ov&&r.push(t),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof av).length,a=s.filter(l=>l instanceof fd).length;if(o>1||o>0&&a>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class fd extends NR{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new fd(t,n,r)}_apply(t){const n=this._parse(t);return $R(t._query,n),new Wi(t.firestore,t.converter,hm(t._query,n))}_parse(t){const n=rv(t.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){zw(h,c);const f=[];for(const y of h)f.push(Bw(l,s,y));d={arrayValue:{values:f}}}else d=Bw(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||zw(h,c),d=mF(a,o,h,c==="in"||c==="not-in");return Ne.create(u,c,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Js(e,t,n){const r=t,i=dd("where",e);return fd._create(i,r,n)}class av extends ov{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new av(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)$R(o,l),o=hm(o,l)}(t._query,n),new Wi(t.firestore,t.converter,hm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lv extends NR{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new lv(t,n)}_apply(t){const n=function(i,s,o){if(i.startAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ss(s,o);return function(u,c){if(Vy(u)===null){const h=Jh(u);h!==null&&LR(u,h,c.field)}}(i,a),a}(t._query,this._field,this._direction);return new Wi(t.firestore,t.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new mo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,n))}}function DR(e,t="asc"){const n=t,r=dd("orderBy",e);return lv._create(r,n)}function Bw(e,t,n){if(typeof(n=Ee(n))=="string"){if(n==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xP(t)&&n.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(he.fromString(n));if(!L.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dw(e,new L(r))}if(n instanceof mt)return dw(e,n._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ad(n)}.`)}function zw(e,t){if(!Array.isArray(e)||e.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function $R(e,t){if(t.isInequality()){const r=Jh(e),i=t.field;if(r!==null&&!r.isEqual(i))throw new N(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Vy(e);s!==null&&LR(e,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function LR(e,t,n){if(!n.isEqual(t))throw new N(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class _F{convertValue(t,n="none"){switch(Di(t)){case 0:return null;case 1:return t.booleanValue;case 2:return xe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ni(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw j()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Bi(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new nv(xe(t.latitude),xe(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ny(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(za(t));default:return null}}convertTimestamp(t){const n=jr(t);return new Le(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=he.fromString(t);fe(ZP(r));const i=new Wa(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wF(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zo{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class MR extends bR{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(dd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Pu extends MR{data(t={}){return super.data(t)}}class EF{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Pu(this._firestore,this._userDataWriter,r.key,r,new zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:IF(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IF(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TF(e){e=An(e,mt);const t=An(e.firestore,vo);return tF(tv(t),e._key).then(n=>SF(t,e,n))}class VR extends _F{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ys(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function El(e){e=An(e,Wi);const t=An(e.firestore,vo),n=tv(t),r=new VR(t);return vF(e._query),nF(n,e._query).then(i=>new EF(t,r,e,i))}function UR(e,t,n){e=An(e,mt);const r=An(e.firestore,vo),i=wF(e.converter,t,n);return uv(r,[cF(rv(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,an.none())])}function H5(e,t,n,...r){e=An(e,mt);const i=An(e.firestore,vo),s=rv(i);let o;return o=typeof(t=Ee(t))=="string"||t instanceof ud?pF(s,"updateDoc",e._key,t,n,r):fF(s,"updateDoc",e._key,t),uv(i,[o.toMutation(e._key,an.exists(!0))])}function q5(e){return uv(An(e.firestore,vo),[new Uy(e._key,an.none())])}function uv(e,t){return function(r,i){const s=new Wn;return r.asyncQueue.enqueueAndForget(async()=>jU(await eF(r),i,s)),s.promise}(tv(e),t)}function SF(e,t,n){const r=n.docs.get(t._key),i=new VR(e);return new MR(e,i,t._key,r,new zo(n.hasPendingWrites,n.fromCache),t.converter)}function K5(...e){return new hF("arrayUnion",e)}function G5(...e){return new dF("arrayRemove",e)}(function(t,n=!0){(function(i){po=i})(Ui),Ci(new Ur("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new vo(new kV(r.getProvider("auth-internal")),new bV(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),In(aw,"4.1.0",t),In(aw,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR="firebasestorage.googleapis.com",jR="storageBucket",PF=2*60*1e3,RF=10*60*1e3,AF=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Cn{constructor(t,n,r=0){super(Af(t),`Firebase Storage: ${n} (${Af(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Af(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function Af(e){return"storage/"+e}function cv(){const e="An unknown error occurred, please check the error payload for server response.";return new Te(pe.UNKNOWN,e)}function kF(e){return new Te(pe.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function CF(e){return new Te(pe.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xF(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(pe.UNAUTHENTICATED,e)}function OF(){return new Te(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bF(e){return new Te(pe.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function BR(){return new Te(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zR(){return new Te(pe.CANCELED,"User canceled the upload/download.")}function NF(e){return new Te(pe.INVALID_URL,"Invalid URL '"+e+"'.")}function DF(e){return new Te(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function $F(){return new Te(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jR+"' property when initializing the app?")}function WR(){return new Te(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LF(){return new Te(pe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function MF(){return new Te(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VF(e){return new Te(pe.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Em(e){return new Te(pe.INVALID_ARGUMENT,e)}function HR(){return new Te(pe.APP_DELETED,"The Firebase app was deleted.")}function UF(e){return new Te(pe.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function sa(e,t){return new Te(pe.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function xo(e){throw new Te(pe.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Ot.makeFromUrl(t,n)}catch{return new Ot(t,"")}if(r.path==="")return r;throw DF(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===FR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${w}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:f,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<g.length;_++){const E=g[_],I=E.regex.exec(t);if(I){const T=I[E.indices.bucket];let C=I[E.indices.path];C||(C=""),r=new Ot(T,C),E.postModify(r);break}}if(r==null)throw NF(t);return r}}class FF{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jF(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,t.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,e(f,l())},w)}function d(){s&&clearTimeout(s)}function f(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(w){y||(y=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function BF(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(e){return e!==void 0}function WF(e){return typeof e=="function"}function HF(e){return typeof e=="object"&&!Array.isArray(e)}function pd(e){return typeof e=="string"||e instanceof String}function Ww(e){return hv()&&e instanceof Blob}function hv(){return typeof Blob<"u"&&!AD()}function Hw(e,t,n,r){if(r<t)throw Em(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Em(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function qR(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(_i||(_i={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(t,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,y)=>{this.resolve_=f,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new eu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_i.NO_ERROR,l=s.getStatus();if(!a||KR(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===_i.ABORT;r(!1,new eu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new eu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());zF(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=cv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?HR():zR();o(l)}else{const l=BR();o(l)}};this.canceled_?n(!1,new eu(!1,null,!0)):this.backoffId_=jF(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&BF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class eu{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function KF(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function GF(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function QF(e,t){t&&(e["X-Firebase-GMPID"]=t)}function XF(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function YF(e,t,n,r,i,s,o=!0){const a=qR(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return QF(u,t),KF(u,n),GF(u,s),XF(u,r),new qF(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZF(...e){const t=JF();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(hv())return new Blob(e);throw new Te(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ej(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tj(e){if(typeof atob>"u")throw VF("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class kf{constructor(t,n){this.data=t,this.contentType=n||null}}function nj(e,t){switch(e){case vn.RAW:return new kf(GR(t));case vn.BASE64:case vn.BASE64URL:return new kf(QR(e,t));case vn.DATA_URL:return new kf(ij(t),sj(t))}throw cv()}function GR(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function rj(e){let t;try{t=decodeURIComponent(e)}catch{throw sa(vn.DATA_URL,"Malformed data URL.")}return GR(t)}function QR(e,t){switch(e){case vn.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw sa(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw sa(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tj(t)}catch(i){throw i.message.includes("polyfill")?i:sa(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class XR{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw sa(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=oj(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function ij(e){const t=new XR(e);return t.base64?QR(vn.BASE64,t.rest):rj(t.rest)}function sj(e){return new XR(e).contentType}function oj(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,n){let r=0,i="";Ww(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(Ww(this.data_)){const r=this.data_,i=ej(r,t,n);return i===null?null:new Ln(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Ln(r,!0)}}static getBlob(...t){if(hv()){const n=t.map(r=>r instanceof Ln?r.data_:r);return new Ln(ZF.apply(null,n))}else{const n=t.map(o=>pd(o)?nj(vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ln(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(e){let t;try{t=JSON.parse(e)}catch{return null}return HF(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aj(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function lj(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function JR(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uj(e,t){return t}class ht{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||uj}}let tu=null;function cj(e){return!pd(e)||e.length<2?e:JR(e)}function dv(){if(tu)return tu;const e=[];e.push(new ht("bucket")),e.push(new ht("generation")),e.push(new ht("metageneration")),e.push(new ht("name","fullPath",!0));function t(s,o){return cj(o)}const n=new ht("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,e.push(i),e.push(new ht("timeCreated")),e.push(new ht("updated")),e.push(new ht("md5Hash",null,!0)),e.push(new ht("cacheControl",null,!0)),e.push(new ht("contentDisposition",null,!0)),e.push(new ht("contentEncoding",null,!0)),e.push(new ht("contentLanguage",null,!0)),e.push(new ht("contentType",null,!0)),e.push(new ht("metadata","customMetadata",!0)),tu=e,tu}function hj(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new Ot(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function dj(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return hj(r,e),r}function ZR(e,t,n){const r=YR(t);return r===null?null:dj(e,r,n)}function fj(e,t,n,r){const i=YR(t);if(i===null||!pd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=e.bucket,h=e.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=Il(d,n,r),y=qR({alt:"media",token:u});return f+y})[0]}function eA(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class _o{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){if(!e)throw cv()}function fv(e,t){function n(r,i){const s=ZR(e,i,t);return Hn(s!==null),s}return n}function pj(e,t){function n(r,i){const s=ZR(e,i,t);return Hn(s!==null),fj(s,i,e.host,e._protocol)}return n}function Tl(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=OF():i=xF():n.getStatus()===402?i=CF(e.bucket):n.getStatus()===403?i=bF(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function tA(e){const t=Tl(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=kF(e.path)),s.serverResponse=i.serverResponse,s}return n}function mj(e,t,n){const r=t.fullServerUrl(),i=Il(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new _o(i,s,fv(e,n),o);return a.errorHandler=tA(t),a}function gj(e,t,n){const r=t.fullServerUrl(),i=Il(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new _o(i,s,pj(e,n),o);return a.errorHandler=tA(t),a}function yj(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function nA(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=yj(null,t)),r}function rA(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let _=0;_<2;_++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=nA(t,r,i),c=eA(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Ln.getBlob(h,r,d);if(f===null)throw WR();const y={name:u.fullPath},v=Il(s,e.host,e._protocol),w="POST",m=e.maxUploadRetryTime,p=new _o(v,w,fv(e,n),m);return p.urlParams=y,p.headers=o,p.body=f.uploadData(),p.errorHandler=Tl(t),p}class Vc{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function pv(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{Hn(!1)}return Hn(!!n&&(t||["active"]).indexOf(n)!==-1),n}function vj(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=nA(t,r,i),a={name:o.fullPath},l=Il(s,e.host,e._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=eA(o,n),d=e.maxUploadRetryTime;function f(v){pv(v);let w;try{w=v.getResponseHeader("X-Goog-Upload-URL")}catch{Hn(!1)}return Hn(pd(w)),w}const y=new _o(l,u,f,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=Tl(t),y}function _j(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=pv(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Hn(!1)}h||Hn(!1);const d=Number(h);return Hn(!isNaN(d)),new Vc(d,r.size(),c==="final")}const o="POST",a=e.maxUploadRetryTime,l=new _o(n,o,s,a);return l.headers=i,l.errorHandler=Tl(t),l}const qw=256*1024;function wj(e,t,n,r,i,s,o,a){const l=new Vc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw LF();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let f="";c===0?f="finalize":u===c?f="upload, finalize":f="upload";const y={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,d);if(v===null)throw WR();function w(_,E){const I=pv(_,["active","final"]),T=l.current+c,C=r.size();let M;return I==="final"?M=fv(t,s)(_,E):M=null,new Vc(T,C,I==="final",M)}const m="POST",p=t.maxUploadRetryTime,g=new _o(n,m,w,p);return g.headers=y,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=Tl(e),g}const _t={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Cf(e){switch(e){case"running":case"pausing":case"canceling":return _t.RUNNING;case"paused":return _t.PAUSED;case"success":return _t.SUCCESS;case"canceled":return _t.CANCELED;case"error":return _t.ERROR;default:return _t.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ej{constructor(t,n,r){if(WF(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const s=t;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class Ij{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_i.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_i.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_i.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw xo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Tj extends Ij{initXhr(){this.xhr_.responseType="text"}}function si(){return new Tj}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=dv(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(pe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(KR(i.status,[]))if(s)i=BR();else{this.sleepTime=Math.max(this.sleepTime*2,AF),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(pe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=vj(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,si,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=_j(this._ref.storage,this._ref._location,t,this._blob),s=this._ref.storage._makeRequest(i,si,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=qw*this._chunkMultiplier,n=new Vc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=wj(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,si,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){qw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=mj(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,si,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=rA(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,si,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=zR(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Cf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const s=new Ej(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Cf(this._state)){case _t.SUCCESS:Qi(this._resolve.bind(null,this.snapshot))();break;case _t.CANCELED:case _t.ERROR:const n=this._reject;Qi(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Cf(this._state)){case _t.RUNNING:case _t.PAUSED:t.next&&Qi(t.next.bind(t,this.snapshot))();break;case _t.SUCCESS:t.complete&&Qi(t.complete.bind(t))();break;case _t.CANCELED:case _t.ERROR:t.error&&Qi(t.error.bind(t,this._error))();break;default:t.error&&Qi(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,n){this._service=t,n instanceof Ot?this._location=n:this._location=Ot.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new $i(t,n)}get root(){const t=new Ot(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JR(this._location.path)}get storage(){return this._service}get parent(){const t=aj(this._location.path);if(t===null)return null;const n=new Ot(this._location.bucket,t);return new $i(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw UF(t)}}function Pj(e,t,n){e._throwIfRoot("uploadBytes");const r=rA(e.storage,e._location,dv(),new Ln(t,!0),n);return e.storage.makeRequestWithTokens(r,si).then(i=>({metadata:i,ref:e}))}function Rj(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Sj(e,new Ln(t),n)}function Aj(e){e._throwIfRoot("getDownloadURL");const t=gj(e.storage,e._location,dv());return e.storage.makeRequestWithTokens(t,si).then(n=>{if(n===null)throw MF();return n})}function kj(e,t){const n=lj(e._location.path,t),r=new Ot(e._location.bucket,n);return new $i(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cj(e){return/^[A-Za-z]+:\/\//.test(e)}function xj(e,t){return new $i(e,t)}function iA(e,t){if(e instanceof mv){const n=e;if(n._bucket==null)throw $F();const r=new $i(n,n._bucket);return t!=null?iA(r,t):r}else return t!==void 0?kj(e,t):e}function Oj(e,t){if(t&&Cj(t)){if(e instanceof mv)return xj(e,t);throw Em("To use ref(service, url), the first argument must be a Storage instance.")}else return iA(e,t)}function Kw(e,t){const n=t==null?void 0:t[jR];return n==null?null:Ot.makeFromBucketSpec(n,e)}function bj(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:xT(i,e.app.options.projectId))}class mv{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=FR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PF,this._maxUploadRetryTime=RF,this._requests=new Set,i!=null?this._bucket=Ot.makeFromBucketSpec(i,this._host):this._bucket=Kw(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ot.makeFromBucketSpec(this._url,t):this._bucket=Kw(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Hw("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Hw("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $i(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new FF(HR());{const o=YF(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Gw="@firebase/storage",Qw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="storage";function Q5(e,t,n){return e=Ee(e),Pj(e,t,n)}function X5(e,t,n){return e=Ee(e),Rj(e,t,n)}function Y5(e){return e=Ee(e),Aj(e)}function J5(e,t){return e=Ee(e),Oj(e,t)}function Nj(e=Yg(),t){e=Ee(e);const r=bh(e,sA).getImmediate({identifier:t}),i=AT("storage");return i&&Dj(r,...i),r}function Dj(e,t,n,r={}){bj(e,t,n,r)}function $j(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new mv(n,r,i,t,Ui)}function Lj(){Ci(new Ur(sA,$j,"PUBLIC").setMultipleInstances(!0)),In(Gw,Qw,""),In(Gw,Qw,"esm2017")}Lj();const{VITE_FIREBASE_API_KEY:Mj,VITE_FIREBASE_AUTH_DOMAIN:Vj,VITE_FIREBASE_PROJECT_ID:Uj,VITE_FIREBASE_STORAGE_BUCKET:Fj,VITE_FIREBASE_MESSAGING_SENDER_ID:jj,VITE_FIREBASE_API_ID:Bj,VITE_FIREBASE_MEASUREMENT_ID:zj}={VITE_FIREBASE_API_KEY:"AIzaSyCJLxlvg-HCrcztv-qba5z2Gu9rItlcNyk",VITE_FIREBASE_AUTH_DOMAIN:"twitter-modsen.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"twitter-modsen",VITE_FIREBASE_STORAGE_BUCKET:"twitter-modsen.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"826678812761",VITE_FIREBASE_API_ID:"1:826678812761:web:3b2e2ab783d27b92f15148",VITE_FIREBASE_MEASUREMENT_ID:"G-J131EMJVXC",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Wj={apiKey:Mj,authDomain:Vj,projectId:Uj,storageBucket:Fj,messagingSenderId:jj,appId:Bj,measurementId:zj},gv=NT(Wj),md=XL(gv),Z5=Nj(gv),Yr=oF(gv);var zr=(e=>(e.Users="users",e.Tweets="tweets",e))(zr||{});const oA={defaultName:"Name",defaultLastname:"Surname",defaultEmail:"email@gmail.com",defaultPhoto:ay,defaultTelegram:"@telegram",defaultPhone:"+375444444444",defaultMonth:"August",defaultDay:"11",defaultYear:"2023"},Hj=async e=>{const{collection:t,id:n,document:r}=e;await UR(ev(Yr,t,n),r)},aA=async(e,t)=>{const n=await TF(ev(Yr,e,t));return n.exists()?n.data():!1},e9=async(e,t)=>{const n=wl(vl(Yr,zr.Tweets),DR("date","desc"),Js(e,"==",t));return(await El(n)).docs.map(s=>{const{text:o,date:a,creator:l,image:u,likes:c,tweetId:h}=s.data();return{id:s.id,tweetId:h,text:o,date:a,creator:l,image:u,likes:c}})},t9=async()=>{const e=wl(vl(Yr,zr.Tweets),DR("date","desc"));return(await El(e)).docs.map(r=>{const{text:i,date:s,creator:o,image:a,likes:l,tweetId:u}=r.data();return{id:r.id,tweetId:u,text:i,date:s,creator:o,image:a,likes:l}})},qj=async(e,t)=>{const n=wl(vl(Yr,zr.Tweets),Js(e,">=",t),Js(e,"<=",`${t}`));return(await El(n)).docs.map(s=>{const{text:o,date:a,creator:l,image:u,likes:c,tweetId:h}=s.data();return{id:s.id,tweetId:h,text:o,date:a,creator:l,image:u,likes:c}})},Kj=async(e,t)=>{const n=wl(vl(Yr,zr.Users),Js(e,">=",t),Js(e,"<=",`${t}`));return(await El(n)).docs.map(s=>{const{name:o,email:a,lastName:l,telegram:u,phone:c}=s.data();return{id:s.id,name:o,email:a,lastName:l,telegram:u,phone:c}})},Gj=async(e,t)=>{const{user:n}=await D$(md,e,t);return n},Qj=async(e,t)=>{const n=await N$(md,e.email,t),r=n.user.uid,i={...e,id:r};return await UR(ev(Yr,"users",n.user.uid),i),i},lA=e=>e.startsWith("8")?`375${e.slice(2)}`:e.replace(/\D/g,""),Ru=xh("user/logInUserWithEmail",async(e,{rejectWithValue:t})=>{try{const{email:n,password:r}=e,i=await Gj(n,r),s=await aA(zr.Users,i.uid);return s||{}}catch{return t("Login Error")}}),n9=xh("user/logInWithPhoneNumber",async({phone:e,password:t},{dispatch:n})=>{try{const r=vl(Yr,"users"),i=lA(e),s=wl(r,Js("phone","==",i)),o=await El(s);o.docs[0]||n(Im("Invalid phone number"));const{email:a}=o.docs[0].data();return n(Ru({email:a,password:t}))}catch{n(Im("Login Error"))}}),xf=xh("user/signUpWithEmail",async(e,{dispatch:t})=>{try{const{email:n,password:r,name:i,phone:s,day:o,month:a,year:l,isValid:u,reset:c}=e,{defaultPhoto:h,defaultTelegram:d}=oA,f=i.toLowerCase(),y={id:"user.uid",email:n,nameLowercase:f,name:i.split(" ")[0],lastName:i.split(" ")[1],phone:lA(s),dateOfBirth:`${o} ${a} ${l}`,gender:null,telegram:d,photo:h},v=await Qj(y,r);return v||(u&&c(),{})}catch{t(Im("SignUp Error"))}}),r9=xh("user/signUpWithGoogle",async(e,{dispatch:t})=>{try{const n=new $n,{user:r}=await sL(md,n),{uid:i,email:s,displayName:o,phoneNumber:a}=r,l=await aA(zr.Users,i);if(!o||!s)throw t(xa({isVisible:!0,message:"Error with google account"})),new Error("Error with google account");const{defaultPhoto:u,defaultTelegram:c}=oA,h=o.toLowerCase(),d={id:i,email:s,nameLowercase:h,name:o.split(" ")[0],lastName:o.split(" ")[1],phone:a??"",dateOfBirth:"",gender:null,telegram:c,photo:u};l?t(Xw(l)):(await Hj({collection:zr.Users,document:d,id:i}),t(Xw(d)))}catch(n){t(xa({isVisible:!0,message:n.message}))}}),Xj={user:{},isAuth:!1,isLoading:!1,isError:""},uA=ET({name:"user",initialState:Xj,reducers:{setUser:(e,t)=>{e.isAuth=!0,e.isLoading=!1,e.user=t.payload},setUpdateUser:(e,t)=>{e.user={...e.user,...t.payload}},setLoading:(e,t)=>{e.isLoading=t.payload},setError:(e,t)=>{e.isError=t.payload},removeUser:e=>{e.isAuth=!1,e.isLoading=!1,e.user={}}},extraReducers:e=>{e.addCase(Ru.fulfilled,(t,n)=>{t.isAuth=!0,t.isLoading=!1,t.user=n.payload,t.isError=""}),e.addCase(Ru.pending,t=>{t.isAuth=!1,t.isLoading=!0,t.user={},t.isError=""}),e.addCase(Ru.rejected,t=>{t.isAuth=!1,t.isLoading=!1,t.user={},t.isError="Login Error"}),e.addCase(xf.fulfilled,(t,n)=>{t.isAuth=!0,t.isLoading=!1,t.user=n.payload||{},t.isError=""}),e.addCase(xf.pending,t=>{t.isAuth=!1,t.isLoading=!0,t.user={},t.isError=""}),e.addCase(xf.rejected,t=>{t.isAuth=!1,t.isLoading=!1,t.user={}})}}),{setUser:Xw,setUpdateUser:i9,removeUser:Yj,setError:Im}=uA.actions,Jj=uA.reducer,cA=(e,t)=>e===t,Zj=B.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
`,e3=B.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({theme:e})=>e.valueInPx.px15};
  width: ${({theme:e})=>e.valueInPercent.pr50};
`,t3=B.img`
  width: ${({theme:e})=>e.valueInPx.px30};
  height: ${({theme:e})=>e.valueInPx.px30};
  margin: ${({theme:e})=>e.indentation.i15} ${({theme:e})=>e.indentation.i0};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    width: ${({theme:e})=>e.valueInPx.px70};
    height: ${({theme:e})=>e.valueInPx.px70};
  }
`,n3=B.div`
  margin: ${({theme:e})=>e.valueInPercent.pr5} auto;
  padding: ${({theme:e})=>e.valueInPx.px10} ${({theme:e})=>e.valueInPx.px5};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({theme:e})=>e.colors.formBackground};
  border-radius: ${({theme:e})=>e.valueInPx.px10};
  border: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    margin: ${({theme:e})=>e.valueInPercent.pr2};
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    margin: ${({theme:e})=>e.valueInPercent.pr5};
  }

  @media (max-width: ${({theme:e})=>e.dimensions.laptop}px) {
    flex-direction: column;
  }
`,r3=B.div`
  padding: ${({theme:e})=>e.valueInPx.px5} ${({theme:e})=>e.valueInPx.px0};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`,i3=B.div`
  max-width: max-content;
  height: fit-content;
  padding-left: ${({theme:e})=>e.indentation.i5};
  display: flex;
  word-break: break-word;
  flex-direction: column;
  align-items: flex-start;
`,s3=B.p`
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeight.medium};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxxl};
  }
`,o3=B.div`
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeight.light};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxxl};
  }
`,a3=B.img`
  width: ${({theme:e})=>e.valueInPx.px50};
  height: ${({theme:e})=>e.valueInPx.px50};
  background-color: transparent;
  align-self: flex-start;
  border: ${({theme:e})=>e.valueInPx.px1} solid transparent;
  border-radius: ${({theme:e})=>e.valueInPercent.pr50};

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    width: ${({theme:e})=>e.valueInPx.px60};
    height: ${({theme:e})=>e.valueInPx.px50};
  }
`,l3=()=>{const e=Ch(),t=Un(cT),n=io(),{name:r,id:i,photo:s,lastName:o,telegram:a}=Un(lT),{pathname:l}=Kr(),u=cA(l,vt.FEED),c=()=>{e(pD(Gg.CreateTweet))},h=()=>{n(`/profile/${i}`)},d=()=>{V$(md),e(Yj()),n(vt.HOME)};return R.jsx(Zj,{"data-cy":"menuWrapper",children:R.jsxs(e3,{"data-cy":"menuItem",children:[R.jsx(t3,{src:YL,alt:"twitterLogo"}),gM.map(({to:f,text:y,src:v,srcAlt:w})=>R.jsx(ZL,{path:f,alt:y,src:t===ao.Dark?w:v,text:y,id:i},y)),R.jsx(Tc,{title:"Tweet",callBack:c,isValid:!0}),R.jsxs(n3,{children:[R.jsx(r3,{children:R.jsx(a3,{src:s||ay,alt:"profile in menu",onClick:h})}),R.jsxs(i3,{children:[R.jsxs(s3,{children:[r," ",o]}),a&&R.jsx(o3,{children:a})]})]}),!u&&R.jsx(Tc,{title:"Log Out",callBack:d,isValid:!0})]})})},u3="/assets/search-643124f9.svg",c3=B.div`
  margin-bottom: ${({theme:e})=>e.indentation.i5};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  gap: ${({theme:e})=>e.valueInPx.px10};
  border-radius: ${({theme:e})=>e.valueInPx.px10};
  border: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};
  padding: ${({theme:e})=>e.indentation.i15};

  @media (max-width: ${({theme:e})=>e.dimensions.laptop}px) {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.valueInPx.px10};
    justify-content: flex-start;
    align-items: center;
  }
`,h3=B.li`
  width: ${({theme:e})=>e.valueInPercent.pr70};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;

  @media (max-width: ${({theme:e})=>e.dimensions.laptop}px) {
    width: ${({theme:e})=>e.valueInPercent.pr90};
  }
`,d3=B.p`
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeight.light};
  color: ${({theme:e})=>e.colors.fontColor};
  background: transparent;
  word-break: break-word;

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }
`,f3=B.div`
  width: ${({theme:e})=>e.valueInPercent.pr30};
  height: fit-content;
  @media (max-width: ${({theme:e})=>e.dimensions.laptop}px) {
    width: ${({theme:e})=>e.valueInPercent.pr50};
  }
`,p3=P.memo(({id:e,text:t})=>{const n=io(),r=()=>{n(`/feed/${e}`)};return R.jsxs(c3,{children:[R.jsx(h3,{children:R.jsx(d3,{children:t})}),R.jsx(f3,{children:R.jsx(Tc,{title:"Read",isValid:!0,callBack:r})})]})}),m3=B.div`
  margin-bottom: ${({theme:e})=>e.indentation.i5};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.valueInPx.px10};
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-radius: ${({theme:e})=>e.valueInPx.px10};
  border: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};
  padding: ${({theme:e})=>e.indentation.i15};

  @media (max-width: ${({theme:e})=>e.dimensions.laptop}px) {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.valueInPx.px10};
    justify-content: flex-start;
    align-items: center;
  }
`,g3=B.li`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
`,y3=B.img`
  width: ${({theme:e})=>e.valueInPx.px40};
  height: ${({theme:e})=>e.valueInPx.px40};
  margin-right: ${({theme:e})=>e.valueInPercent.pr2};
  align-self: center;
  background-color: transparent;
  border: ${({theme:e})=>e.valueInPx.px1} solid transparent;
  border-radius: ${({theme:e})=>e.valueInPx.px10};

  &:hover {
    transform: scale(1.2);
  }
`,v3=B.p`
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeight.medium};
  color: ${({theme:e})=>e.colors.fontColor};
  background: transparent;

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,_3=B.p`
  margin-right: ${({theme:e})=>e.indentation.i5};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  color: ${({theme:e})=>e.colors.fontColor};
  background: transparent;
`,w3=B.div`
  display: flex;
  flex-direction: column;
  width: ${({theme:e})=>e.valueInPercent.pr80};
  height: fit-content;
`,E3=B.div`
  width: ${({theme:e})=>e.valueInPercent.pr50};
  height: fit-content;
`,I3=P.memo(({name:e,telegram:t,photo:n,lastName:r})=>{const i=Ch(),s=()=>{i(xa({isVisible:!0,message:`You have subscribed to a user ${e} ${r}`}))};return R.jsxs(m3,{children:[R.jsxs(w3,{children:[R.jsx(y3,{src:n||ay,alt:"userPhoto"}),R.jsxs(g3,{children:[R.jsxs(v3,{children:[e," ",r]}),t&&R.jsx(_3,{children:t})]})]}),R.jsx(E3,{children:R.jsx(Tc,{title:"Follow",isValid:!0,callBack:s})})]})}),s9={title:"Happening now",subTitle:"Join Twitter today",signUpGoogleText:"Sign up with Google",signUpEmailText:"Sign up with email",termsText:"By singing up you agree to the, ",termsOne:" and",termsTwo:" including",termsThree:".",question:"Already have an account?",loginText:" Log in",copyrightText:`© ${new Date().getFullYear()} Twitter, Inc.`,navLinks:[{name:" About",to:"#"},{name:" Help Center",to:"#"},{name:" Terms of Service",to:"#"},{name:" Privacy Policy",to:"#"},{name:" Cookie Policy",to:"#"},{name:" Ads info",to:"#"},{name:" Blog",to:"#"},{name:" Status",to:"#"},{name:" Carrres",to:"#"},{name:" Brand Resources",to:"#"},{name:" Advertsing",to:"#"},{name:" Marketing",to:"#"},{name:" Twitter for Business",to:"#"},{name:" Developers",to:"#"},{name:" Directory",to:"#"},{name:" Settings",to:"#"}]},T3={title:"You might like",link:"Show more",copyrightText:`© ${new Date().getFullYear()} Twitter, Inc.`,navLinks:[{name:" Terms of Service",to:"#"},{name:" Privacy Policy",to:"#"},{name:" Cookie Policy",to:"#"},{name:" Imprint",to:"#"},{name:" Ads info",to:"#"},{name:" More",to:"#"}]},S3=B.div`
  margin: ${({theme:e})=>e.valueInPercent.pr2};
  width: ${({theme:e})=>e.valueInPercent.pr30};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${({theme:e})=>e.colors.fontColor};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    padding: ${({theme:e})=>e.valueInPx.px15};
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    padding: ${({theme:e})=>e.valueInPx.px15};
    width: ${({theme:e})=>e.valueInPercent.pr80};
  }
`,P3=B.form`
  margin: ${({theme:e})=>e.indentation.i0} auto;
  margin-bottom: ${({theme:e})=>e.indentation.i5};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${({theme:e})=>e.valueInPx.px15};
  padding-right: ${({theme:e})=>e.valueInPx.px15};
  background: ${({theme:e})=>e.colors.formBackground};
  border-radius: ${({theme:e})=>e.valueInPx.px15};
  border: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};

  &:hover {
    border-color: ${({theme:e})=>e.usedColors.darkBlue};
  }

  &:focus-within {
    border-color: ${({theme:e})=>e.usedColors.twitterColor};
  }
`,R3=B.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
`,A3=B.img`
  width: ${({theme:e})=>e.valueInPx.px16};
  height: ${({theme:e})=>e.valueInPx.px16};
  background: transparent;
  opacity: 0.6;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    width: ${({theme:e})=>e.valueInPx.px20};
    height: ${({theme:e})=>e.valueInPx.px20};
  }
`,k3=B.input`
  width: ${({theme:e})=>e.valueInPercent.pr80};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  padding: ${({theme:e})=>e.indentation.i15};
  background-color: transparent;
  outline: none;
  border: none;
  font-size: ${({theme:e})=>e.fontSizes.m};
  color: ${({theme:e})=>e.colors.fontColor};

  &::placeholder {
    color: ${({theme:e})=>e.colors.fontColor};
    opacity: 0.7;
  }

  @media (max-width: ${({theme:e})=>e.dimensions.laptop}px) {
    font-size: ${({theme:e})=>e.fontSizes.sm};
    width: ${({theme:e})=>e.valueInPercent.pr90};
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,C3=B.div`
  margin-bottom: ${({theme:e})=>e.indentation.i5};
  padding: ${({theme:e})=>e.indentation.i15};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({theme:e})=>e.colors.formBackground};
  border-radius: ${({theme:e})=>e.valueInPx.px15};
  border: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};
`,x3=B.p`
  height: ${({theme:e})=>e.valueInPercent.pr100};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.fontColor};
  background: transparent;
`,O3=B.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.valueInPx.px15};
  margin: ${({theme:e})=>e.valueInPercent.pr2} auto;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  background-color: transparent;
`,b3=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({theme:e})=>e.valueInPercent.pr100};
`,Yw=B.div`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.usedColors.twitterColor};
  background: transparent;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xl};
  }
`,N3=B.ul`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: fit-content;
  margin-top: ${({theme:e})=>e.valueInPercent.pr2};
  display: flex;
  gap: ${({theme:e})=>e.valueInPx.px5};
  flex-wrap: wrap;
  align-items: flex-start;
`,Jw=B.li`
  margin-top: ${({theme:e})=>e.valueInPercent.pr2};
  margin-left: ${({theme:e})=>e.valueInPercent.pr2};
  font-size: ${({theme:e})=>e.fontSizes.sm};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xl};
  }
`,D3=B(AI)`
  color: ${({theme:e})=>e.colors.fontColor};

  &:hover {
    text-decoration: underline;
    color: ${({theme:e})=>e.usedColors.twitterColor};
    cursor: pointer;
  }
`,{title:$3,navLinks:L3,copyrightText:M3}=T3,V3=P.memo(()=>{const e=Ch(),[t,n]=P.useState(!1),[r,i]=P.useState(1),[s,o]=P.useState(""),[a,l]=P.useState([]),[u,c]=P.useState([]),{pathname:h}=Kr(),d=cA(h,vt.FEED),f=io(),y=a.filter((x,ie)=>ie<=r).map(x=>P.createElement(I3,{...x,key:x.id})),v=u.filter((x,ie)=>ie<=r).map(x=>P.createElement(p3,{...x,key:x.id})),w=d?Kj:qj,m=d?"nameLowercase":"text",p=d?"User not found":"Tweet not found",g=s.trim(),_=d?"Search Users":"Search Tweets",E=x=>{o(x.target.value)},I=async x=>{if(n(!0),s){const ie=await w(m,g);ie.length===0&&e(xa({isVisible:!0,message:p})),x(ie)}else x([]);n(!1)},T=async x=>{x.preventDefault(),d&&I(l),d||I(c)},C=()=>{i(x=>x+2)},M=()=>{o(""),i(1),l([]),c([])};return P.useEffect(()=>{M()},[f]),R.jsxs(S3,{children:[R.jsxs(P3,{children:[R.jsx(R3,{type:"submit",children:R.jsx(A3,{src:u3,alt:"Search twitter",onClick:T})}),R.jsx(k3,{placeholder:_,value:s,onChange:E})]}),t&&R.jsx("div",{children:"Loading..."}),(a.length!==0||u.length!==0)&&R.jsxs(C3,{children:[R.jsx(x3,{children:$3}),R.jsx(O3,{children:d?y:v}),R.jsxs(b3,{children:[R.jsx(Yw,{onClick:C,children:"Show More"}),R.jsx(Yw,{onClick:M,children:"Clear"})]})]}),R.jsxs(N3,{children:[L3.map(({name:x,to:ie})=>R.jsx(Jw,{children:R.jsx(D3,{to:ie,children:x})},x)),R.jsx(Jw,{children:M3})]})]})}),U3=B.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`,F3=B.div`
  width: ${({theme:e})=>e.valueInPercent.pr30};
  height: 100vh;
  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    display: none;
  }
`,j3=()=>R.jsxs(U3,{children:[R.jsx(F3,{"data-cy":"sideMenuBlock",children:R.jsx(l3,{})}),R.jsx(TN,{}),R.jsx(V3,{}),R.jsx(yD,{})]}),B3=()=>{const e=Un(uT),t=Un(wN).isLoading,n=Un(PN),{id:r}=Un(lT),i=io();return P.useEffect(()=>{e&&i(`/profile/${r}`)},[e,r]),n||t?R.jsx(Ng,{}):R.jsxs(QO,{children:[R.jsx(GO,{}),e?R.jsx(j3,{}):R.jsx(IN,{})]})};function Au(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Au=function(n){return typeof n}:Au=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Au(e)}function z3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zw(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W3(e,t,n){return t&&Zw(e.prototype,t),n&&Zw(e,n),e}function H3(e,t){return t&&(Au(t)==="object"||typeof t=="function")?t:ku(e)}function Tm(e){return Tm=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Tm(e)}function ku(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Sm(e,t)}function Sm(e,t){return Sm=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Sm(e,t)}function Cu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var hA=function(e){q3(t,e);function t(){var n,r;z3(this,t);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=H3(this,(n=Tm(t)).call.apply(n,[this].concat(s))),Cu(ku(r),"state",{bootstrapped:!1}),Cu(ku(r),"_unsubscribe",void 0),Cu(ku(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return W3(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(P.PureComponent);Cu(hA,"defaultProps",{children:null,loading:null});class K3 extends P.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t,n){console.error("Uncaught error:",t,n)}render(){const{hasError:t}=this.state,{children:n,fallback:r}=this.props;return t?r:n}}const G3=B.div`
  top: ${({theme:e})=>e.valueInPercent.pr50};
  left: ${({theme:e})=>e.valueInPercent.pr50};
  transform: translate(
    -${({theme:e})=>e.valueInPercent.pr50},
    -${({theme:e})=>e.valueInPercent.pr50}
  );
  position: absolute;
  font-family: 'Dosis', 'sans-serif';
  text-align: center;
`,Q3=B.h3`
  color: ${({theme:e})=>e.usedColors.black};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  letter-spacing: 0.2px;
  margin-bottom: ${({theme:e})=>e.valueInPx.px50};
`,X3=()=>R.jsx(G3,{children:R.jsx(Q3,{children:"Something went wrong, please reload the page"})}),ee={black:"rgb(0,0,0)",blackOpacity:"rgba(0,0,0,0.5)",white:"rgb(255,255,255)",darkGrayBlue:"rgb(36,52,71)",darkBlue:"rgb(20,29,38)",gray:"rgb(68,68,68)",grayOpacity:"rgba(143,143,143,0.5)",twitterColor:"rgba(29,161,242)",red:"rgb(255,36,75)",blueOpacity:"rgb(224,239,255)"},Pm={colors:{fontColor:ee.black,fontColorOpacity:ee.blackOpacity,headBackground:ee.twitterColor,mainBackground:ee.white,formBackground:ee.white,modalItemBackground:ee.white,modalContentBackground:ee.grayOpacity,boxShadow:ee.grayOpacity,toggleBackground:ee.white,toggleBackgroundChecked:ee.white,toggleCircle:ee.twitterColor,toggleBorder:ee.twitterColor,burgerMenuBackground:ee.blueOpacity,tweetBackground:ee.blueOpacity},usedColors:{...ee},fontSizes:{sm:"12px",m:"14px",l:"16px",xl:"18px",xxl:"22px",xxxl:"26px",x36:"36px",x60:"60px"},fontWeight:{light:300,normal:400,medium:500,semibold:600,bold:700},indentation:{i0:0,i5:"5px",i10:"10px",i15:"15px",i20:"20px",i25:"25px",i30:"30px",i40:"40px",i50:"50px",i150:"150px"},valueInPx:{px0:"0",px1:"1px",px2:"2px",px3:"3px",px5:"5px",px10:"10px",px15:"15px",px16:"16px",px20:"20px",px25:"25px",px30:"30px",px40:"40px",px45:"45px",px50:"50px",px60:"60px",px70:"70px",px80:"80px",px100:"100px",px150:"150px",px200:"200px",px250:"250px",px300:"300px",px370:"370px",px400:"400px",px480:"480px"},valueInPercent:{pr2:"2%",pr5:"5%",pr10:"10%",pr15:"15%",pr20:"20%",pr25:"25%",pr30:"30%",pr40:"40%",pr45:"45%",pr50:"50%",pr55:"55%",pr60:"60%",pr70:"70%",pr80:"80%",pr90:"90%",pr95:"95%",pr100:"100%",pr150:"150%",pr300:"300%"},valueInVh:{vh7:"7vh",vh18:"18vh",vh30:"30vh",vh40:"40vh",vh50:"50vh",vh60:"60vh",vh75:"75vh",vh90:"90vh",vh100:"100vh"},valueInVw:{vw25:"25vw",vw35:"35vw",vw50:"50vw",vw60:"60vw",vw80:"80vw",vw90:"90vw",vw100:"100vw"},dimensions:{mobile:495,tablet:768,laptop:1024,bigScreen:1920}},Y3={...Pm,type:ao.Light},J3={...Pm,type:ao.Dark,colors:{...Pm.colors,fontColor:ee.white,fontColorOpacity:ee.grayOpacity,headBackground:ee.darkGrayBlue,mainBackground:ee.darkBlue,formBackground:ee.darkGrayBlue,modalItemBackground:ee.darkGrayBlue,modalContentBackground:ee.blackOpacity,boxShadow:ee.grayOpacity,toggleBackground:ee.twitterColor,toggleBackgroundChecked:ee.twitterColor,toggleCircle:ee.white,toggleBorder:ee.twitterColor,burgerMenuBackground:ee.darkGrayBlue,tweetBackground:ee.darkGrayBlue}},Z3=({children:e,theme:t})=>{const n=t===ao.Light?Y3:J3;return R.jsx(zO,{theme:n,children:e})},e5=({children:e})=>{const t=Un(cT);return R.jsx(Z3,{theme:t,children:e})};var yv="persist:",vv="persist/FLUSH",gd="persist/REHYDRATE",_v="persist/PAUSE",wv="persist/PERSIST",Ev="persist/PURGE",Iv="persist/REGISTER",t5=-1;function xu(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xu=function(n){return typeof n}:xu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xu(e)}function eE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function n5(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eE(n,!0).forEach(function(r){r5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eE(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function r5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i5(e,t,n,r){r.debug;var i=n5({},n);return e&&xu(e)==="object"&&Object.keys(e).forEach(function(s){s!=="_persist"&&t[s]===n[s]&&(i[s]=e[s])}),i}function s5(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,s="".concat(e.keyPrefix!==void 0?e.keyPrefix:yv).concat(e.key),o=e.storage,a;e.serialize===!1?a=function(E){return E}:typeof e.serialize=="function"?a=e.serialize:a=o5;var l=e.writeFailHandler||null,u={},c={},h=[],d=null,f=null,y=function(E){Object.keys(E).forEach(function(I){m(I)&&u[I]!==E[I]&&h.indexOf(I)===-1&&h.push(I)}),Object.keys(u).forEach(function(I){E[I]===void 0&&m(I)&&h.indexOf(I)===-1&&u[I]!==void 0&&h.push(I)}),d===null&&(d=setInterval(v,i)),u=E};function v(){if(h.length===0){d&&clearInterval(d),d=null;return}var _=h.shift(),E=r.reduce(function(I,T){return T.in(I,_,u)},u[_]);if(E!==void 0)try{c[_]=a(E)}catch(I){console.error("redux-persist/createPersistoid: error serializing state",I)}else delete c[_];h.length===0&&w()}function w(){Object.keys(c).forEach(function(_){u[_]===void 0&&delete c[_]}),f=o.setItem(s,a(c)).catch(p)}function m(_){return!(n&&n.indexOf(_)===-1&&_!=="_persist"||t&&t.indexOf(_)!==-1)}function p(_){l&&l(_)}var g=function(){for(;h.length!==0;)v();return f||Promise.resolve()};return{update:y,flush:g}}function o5(e){return JSON.stringify(e)}function a5(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:yv).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(o){return o}:typeof e.deserialize=="function"?i=e.deserialize:i=l5,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=t.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function l5(e){return JSON.parse(e)}function u5(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:yv).concat(e.key);return t.removeItem(n,c5)}function c5(e){}function tE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tE(n,!0).forEach(function(r){h5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tE(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d5(e,t){if(e==null)return{};var n=f5(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function f5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var p5=5e3;function m5(e,t){var n=e.version!==void 0?e.version:t5;e.debug;var r=e.stateReconciler===void 0?i5:e.stateReconciler,i=e.getStoredState||a5,s=e.timeout!==void 0?e.timeout:p5,o=null,a=!1,l=!0,u=function(h){return h._persist.rehydrated&&o&&!l&&o.update(h),h};return function(c,h){var d=c||{},f=d._persist,y=d5(d,["_persist"]),v=y;if(h.type===wv){var w=!1,m=function(C,M){w||(h.rehydrate(e.key,C,M),w=!0)};if(s&&setTimeout(function(){!w&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},s),l=!1,o||(o=s5(e)),f)return On({},t(v,h),{_persist:f});if(typeof h.rehydrate!="function"||typeof h.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return h.register(e.key),i(e).then(function(T){var C=e.migrate||function(M,x){return Promise.resolve(M)};C(T,n).then(function(M){m(M)},function(M){m(void 0,M)})},function(T){m(void 0,T)}),On({},t(v,h),{_persist:{version:n,rehydrated:!1}})}else{if(h.type===Ev)return a=!0,h.result(u5(e)),On({},t(v,h),{_persist:f});if(h.type===vv)return h.result(o&&o.flush()),On({},t(v,h),{_persist:f});if(h.type===_v)l=!0;else if(h.type===gd){if(a)return On({},v,{_persist:On({},f,{rehydrated:!0})});if(h.key===e.key){var p=t(v,h),g=h.payload,_=r!==!1&&g!==void 0?r(g,c,p,e):p,E=On({},_,{_persist:On({},f,{rehydrated:!0})});return u(E)}}}if(!f)return t(c,h);var I=t(v,h);return I===v?c:u(On({},I,{_persist:f}))}}function nE(e){return v5(e)||y5(e)||g5()}function g5(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function y5(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function v5(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function rE(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rE(n,!0).forEach(function(r){_5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rE(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _5(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var dA={registry:[],bootstrapped:!1},w5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:dA,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Iv:return Rm({},t,{registry:[].concat(nE(t.registry),[n.key])});case gd:var r=t.registry.indexOf(n.key),i=nE(t.registry);return i.splice(r,1),Rm({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function E5(e,t,n){var r=n||!1,i=qg(w5,dA,t&&t.enhancer?t.enhancer:void 0),s=function(u){i.dispatch({type:Iv,key:u})},o=function(u,c,h){var d={type:gd,payload:c,err:h,key:u};e.dispatch(d),i.dispatch(d),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Rm({},i,{purge:function(){var u=[];return e.dispatch({type:Ev,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:vv,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){e.dispatch({type:_v})},persist:function(){e.dispatch({type:wv,register:s,rehydrate:o})}});return t&&t.manualPersist||a.persist(),a}var Tv={},Sv={};Sv.__esModule=!0;Sv.default=S5;function Ou(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ou=function(n){return typeof n}:Ou=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ou(e)}function Of(){}var I5={getItem:Of,setItem:Of,removeItem:Of};function T5(e){if((typeof self>"u"?"undefined":Ou(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function S5(e){var t="".concat(e,"Storage");return T5(t)?self[t]:I5}Tv.__esModule=!0;Tv.default=A5;var P5=R5(Sv);function R5(e){return e&&e.__esModule?e:{default:e}}function A5(e){var t=(0,P5.default)(e);return{getItem:function(r){return new Promise(function(i,s){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(t.removeItem(r))})}}}var fA=void 0,k5=C5(Tv);function C5(e){return e&&e.__esModule?e:{default:e}}var x5=(0,k5.default)("local");fA=x5;const O5=gT({app:mD,user:Jj}),b5={key:"root",storage:fA},N5=m5(b5,O5),pA=rD({reducer:N5,middleware:e=>e({serializableCheck:{ignoredActions:[vv,gd,_v,wv,Ev,Iv]}})}),D5=E5(pA),$5=({children:e})=>R.jsx(jx,{children:R.jsx(Bb,{store:pA,children:R.jsx(hA,{loading:null,persistor:D5,children:R.jsx(e5,{children:R.jsx(K3,{fallback:R.jsx(X3,{}),children:e})})})})});bf.createRoot(document.getElementById("root")).render(R.jsx($5,{children:R.jsx(B3,{})}));export{l3 as $,J5 as A,Tc as B,Z5 as C,X5 as D,Y5 as E,zr as F,Hj as G,Ng as H,Nj as I,Q5 as J,G5 as K,AI as L,Gg as M,K5 as N,cT as O,vt as P,M5 as Q,cA as R,q5 as S,ao as T,wN as U,Ru as V,n9 as W,KO as X,xf as Y,io as Z,ae as _,r9 as a,U5 as a0,xa as b,Un as c,yI as d,pD as e,lT as f,V5 as g,s9 as h,i9 as i,R as j,e9 as k,Kr as l,ay as m,bg as n,aA as o,L5 as p,t9 as q,P as r,B as s,YL as t,Ch as u,ev as v,Yr as w,H5 as x,md as y,F5 as z};
