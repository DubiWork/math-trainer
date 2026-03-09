(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Wd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gh={exports:{}},Aa={},Kh={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function Nw(){if(Gm)return Pe;Gm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,$={};function B(O,q,Ae){this.props=O,this.context=q,this.refs=$,this.updater=Ae||z}B.prototype.isReactComponent={},B.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function oe(){}oe.prototype=B.prototype;function le(O,q,Ae){this.props=O,this.context=q,this.refs=$,this.updater=Ae||z}var te=le.prototype=new oe;te.constructor=le,W(te,B.prototype),te.isPureReactComponent=!0;var fe=Array.isArray,Ce=Object.prototype.hasOwnProperty,Te={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(O,q,Ae){var Re,xe={},Ne=null,ze=null;if(q!=null)for(Re in q.ref!==void 0&&(ze=q.ref),q.key!==void 0&&(Ne=""+q.key),q)Ce.call(q,Re)&&!k.hasOwnProperty(Re)&&(xe[Re]=q[Re]);var Me=arguments.length-2;if(Me===1)xe.children=Ae;else if(1<Me){for(var He=Array(Me),$t=0;$t<Me;$t++)He[$t]=arguments[$t+2];xe.children=He}if(O&&O.defaultProps)for(Re in Me=O.defaultProps,Me)xe[Re]===void 0&&(xe[Re]=Me[Re]);return{$$typeof:r,type:O,key:Ne,ref:ze,props:xe,_owner:Te.current}}function C(O,q){return{$$typeof:r,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function N(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ae){return q[Ae]})}var b=/\/+/g;function I(O,q){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):q.toString(36)}function ke(O,q,Ae,Re,xe){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var ze=!1;if(O===null)ze=!0;else switch(Ne){case"string":case"number":ze=!0;break;case"object":switch(O.$$typeof){case r:case e:ze=!0}}if(ze)return ze=O,xe=xe(ze),O=Re===""?"."+I(ze,0):Re,fe(xe)?(Ae="",O!=null&&(Ae=O.replace(b,"$&/")+"/"),ke(xe,q,Ae,"",function($t){return $t})):xe!=null&&(x(xe)&&(xe=C(xe,Ae+(!xe.key||ze&&ze.key===xe.key?"":(""+xe.key).replace(b,"$&/")+"/")+O)),q.push(xe)),1;if(ze=0,Re=Re===""?".":Re+":",fe(O))for(var Me=0;Me<O.length;Me++){Ne=O[Me];var He=Re+I(Ne,Me);ze+=ke(Ne,q,Ae,He,xe)}else if(He=R(O),typeof He=="function")for(O=He.call(O),Me=0;!(Ne=O.next()).done;)Ne=Ne.value,He=Re+I(Ne,Me++),ze+=ke(Ne,q,Ae,He,xe);else if(Ne==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ze}function rt(O,q,Ae){if(O==null)return O;var Re=[],xe=0;return ke(O,Re,"","",function(Ne){return q.call(Ae,Ne,xe++)}),Re}function vt(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(Ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ae)},function(Ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ae)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var qe={current:null},ee={transition:null},de={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Te};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:rt,forEach:function(O,q,Ae){rt(O,function(){q.apply(this,arguments)},Ae)},count:function(O){var q=0;return rt(O,function(){q++}),q},toArray:function(O){return rt(O,function(q){return q})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pe.Component=B,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=le,Pe.StrictMode=s,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Pe.act=ie,Pe.cloneElement=function(O,q,Ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Re=W({},O.props),xe=O.key,Ne=O.ref,ze=O._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,ze=Te.current),q.key!==void 0&&(xe=""+q.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(He in q)Ce.call(q,He)&&!k.hasOwnProperty(He)&&(Re[He]=q[He]===void 0&&Me!==void 0?Me[He]:q[He])}var He=arguments.length-2;if(He===1)Re.children=Ae;else if(1<He){Me=Array(He);for(var $t=0;$t<He;$t++)Me[$t]=arguments[$t+2];Re.children=Me}return{$$typeof:r,type:O.type,key:xe,ref:Ne,props:Re,_owner:ze}},Pe.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Pe.createElement=A,Pe.createFactory=function(O){var q=A.bind(null,O);return q.type=O,q},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(O){return{$$typeof:m,render:O}},Pe.isValidElement=x,Pe.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:vt}},Pe.memo=function(O,q){return{$$typeof:_,type:O,compare:q===void 0?null:q}},Pe.startTransition=function(O){var q=ee.transition;ee.transition={};try{O()}finally{ee.transition=q}},Pe.unstable_act=ie,Pe.useCallback=function(O,q){return qe.current.useCallback(O,q)},Pe.useContext=function(O){return qe.current.useContext(O)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(O){return qe.current.useDeferredValue(O)},Pe.useEffect=function(O,q){return qe.current.useEffect(O,q)},Pe.useId=function(){return qe.current.useId()},Pe.useImperativeHandle=function(O,q,Ae){return qe.current.useImperativeHandle(O,q,Ae)},Pe.useInsertionEffect=function(O,q){return qe.current.useInsertionEffect(O,q)},Pe.useLayoutEffect=function(O,q){return qe.current.useLayoutEffect(O,q)},Pe.useMemo=function(O,q){return qe.current.useMemo(O,q)},Pe.useReducer=function(O,q,Ae){return qe.current.useReducer(O,q,Ae)},Pe.useRef=function(O){return qe.current.useRef(O)},Pe.useState=function(O){return qe.current.useState(O)},Pe.useSyncExternalStore=function(O,q,Ae){return qe.current.useSyncExternalStore(O,q,Ae)},Pe.useTransition=function(){return qe.current.useTransition()},Pe.version="18.3.1",Pe}var Km;function qd(){return Km||(Km=1,Kh.exports=Nw()),Kh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function bw(){if(Qm)return Aa;Qm=1;var r=qd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,T={},R=null,z=null;_!==void 0&&(R=""+_),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(z=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(T[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:m,key:R,ref:z,props:T,_owner:o.current}}return Aa.Fragment=t,Aa.jsx=h,Aa.jsxs=h,Aa}var Ym;function Dw(){return Ym||(Ym=1,Gh.exports=bw()),Gh.exports}var V=Dw(),Y=qd();const Vw=Wd(Y);var wu={},Qh={exports:{}},Jt={},Yh={exports:{}},Jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function Ow(){return Jm||(Jm=1,(function(r){function e(ee,de){var ie=ee.length;ee.push(de);e:for(;0<ie;){var O=ie-1>>>1,q=ee[O];if(0<o(q,de))ee[O]=de,ee[ie]=q,ie=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var de=ee[0],ie=ee.pop();if(ie!==de){ee[0]=ie;e:for(var O=0,q=ee.length,Ae=q>>>1;O<Ae;){var Re=2*(O+1)-1,xe=ee[Re],Ne=Re+1,ze=ee[Ne];if(0>o(xe,ie))Ne<q&&0>o(ze,xe)?(ee[O]=ze,ee[Ne]=ie,O=Ne):(ee[O]=xe,ee[Re]=ie,O=Re);else if(Ne<q&&0>o(ze,ie))ee[O]=ze,ee[Ne]=ie,O=Ne;else break e}}return de}function o(ee,de){var ie=ee.sortIndex-de.sortIndex;return ie!==0?ie:ee.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,T=null,R=3,z=!1,W=!1,$=!1,B=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(ee){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=ee)s(_),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(_)}}function fe(ee){if($=!1,te(ee),!W)if(t(g)!==null)W=!0,vt(Ce);else{var de=t(_);de!==null&&qe(fe,de.startTime-ee)}}function Ce(ee,de){W=!1,$&&($=!1,oe(A),A=-1),z=!0;var ie=R;try{for(te(de),T=t(g);T!==null&&(!(T.expirationTime>de)||ee&&!N());){var O=T.callback;if(typeof O=="function"){T.callback=null,R=T.priorityLevel;var q=O(T.expirationTime<=de);de=r.unstable_now(),typeof q=="function"?T.callback=q:T===t(g)&&s(g),te(de)}else s(g);T=t(g)}if(T!==null)var Ae=!0;else{var Re=t(_);Re!==null&&qe(fe,Re.startTime-de),Ae=!1}return Ae}finally{T=null,R=ie,z=!1}}var Te=!1,k=null,A=-1,C=5,x=-1;function N(){return!(r.unstable_now()-x<C)}function b(){if(k!==null){var ee=r.unstable_now();x=ee;var de=!0;try{de=k(!0,ee)}finally{de?I():(Te=!1,k=null)}}else Te=!1}var I;if(typeof le=="function")I=function(){le(b)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,rt=ke.port2;ke.port1.onmessage=b,I=function(){rt.postMessage(null)}}else I=function(){B(b,0)};function vt(ee){k=ee,Te||(Te=!0,I())}function qe(ee,de){A=B(function(){ee(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){W||z||(W=!0,vt(Ce))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(R){case 1:case 2:case 3:var de=3;break;default:de=R}var ie=R;R=de;try{return ee()}finally{R=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ie=R;R=ee;try{return de()}finally{R=ie}},r.unstable_scheduleCallback=function(ee,de,ie){var O=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?O+ie:O):ie=O,ee){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ie+q,ee={id:w++,callback:de,priorityLevel:ee,startTime:ie,expirationTime:q,sortIndex:-1},ie>O?(ee.sortIndex=ie,e(_,ee),t(g)===null&&ee===t(_)&&($?(oe(A),A=-1):$=!0,qe(fe,ie-O))):(ee.sortIndex=q,e(g,ee),W||z||(W=!0,vt(Ce))),ee},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(ee){var de=R;return function(){var ie=R;R=de;try{return ee.apply(this,arguments)}finally{R=ie}}}})(Jh)),Jh}var Xm;function Lw(){return Xm||(Xm=1,Yh.exports=Ow()),Yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function Mw(){if(Zm)return Jt;Zm=1;var r=qd(),e=Lw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function R(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function le(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(oe,le);B[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(oe,le);B[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(oe,le);B[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function te(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(W(i,a,d,c)&&(a=null),c||d===null?R(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var fe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Te=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),rt=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),qe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,O;function q(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ae=!1;function Re(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function xe(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Te:return"Portal";case C:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case ke:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case b:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rt:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case vt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function ze(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $t(n){var i=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function vs(n){n._valueTracker||(n._valueTracker=$t(n))}function No(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Es(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ol(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ws(n,i){i=i.checked,i!=null&&te(n,"checked",i,!1)}function Ni(n,i){ws(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ct(n,i.type,a):i.hasOwnProperty("defaultValue")&&ct(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function bo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ct(n,i,a){(i!=="number"||Lr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ot=Array.isArray;function vn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Do(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ot(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function al(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Oo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ts(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Oo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fr,ll=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function bi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ul=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(n){ul.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ur[i]=Ur[n]})});function jr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ur.hasOwnProperty(n)&&Ur[n]?(""+i).trim():i+"px"}function Is(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=jr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Lo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function En(n,i){if(i){if(Lo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ss(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zr=null;function As(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ar=null,lr=null,it=null;function Mo(n){if(n=ca(n)){if(typeof ar!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ll(i),ar(n.stateNode,n.type,i))}}function Br(n){lr?it?it.push(n):it=[n]:lr=n}function $r(){if(lr){var n=lr,i=it;if(it=lr=null,Mo(n),i)for(n=0;n<i.length;n++)Mo(i[n])}}function cl(n,i){return n(i)}function hl(){}var Vn=!1;function dl(n,i,a){if(Vn)return n(i,a);Vn=!0;try{return cl(n,i,a)}finally{Vn=!1,(lr!==null||it!==null)&&(hl(),$r())}}function Di(n,i){var a=n.stateNode;if(a===null)return null;var c=Ll(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Hr=!1;if(m)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Hr=!1}function fl(n,i,a,c,d,f,v,S,P){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(K){this.onError(K)}}var ur=!1,On=null,Rs=!1,un=null,pl={onError:function(n){ur=!0,On=n}};function ml(n,i,a,c,d,f,v,S,P){ur=!1,On=null,fl.apply(pl,arguments)}function Fo(n,i,a,c,d,f,v,S,P){if(ml.apply(this,arguments),ur){if(ur){var U=On;ur=!1,On=null}else throw Error(t(198));Rs||(Rs=!0,un=U)}}function wn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Uo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function gl(n){if(wn(n)!==n)throw Error(t(188))}function yl(n){var i=n.alternate;if(!i){if(i=wn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return gl(d),n;if(f===c)return gl(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=f;break}if(S===c){v=!0,c=d,a=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===a){v=!0,a=f,c=d;break}if(S===c){v=!0,c=f,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function _l(n){return n=yl(n),n!==null?Vi(n):null}function Vi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Vi(n);if(i!==null)return i;n=n.sibling}return null}var jo=e.unstable_scheduleCallback,Cs=e.unstable_cancelCallback,Oi=e.unstable_shouldYield,cr=e.unstable_requestPaint,Ke=e.unstable_now,Sc=e.unstable_getCurrentPriorityLevel,Ps=e.unstable_ImmediatePriority,zo=e.unstable_UserBlockingPriority,Li=e.unstable_NormalPriority,Bo=e.unstable_LowPriority,ks=e.unstable_IdlePriority,Mi=null,Zt=null;function vl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Mi,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Fi,Ln=Math.log,cn=Math.LN2;function Fi(n){return n>>>=0,n===0?32:31-(Ln(n)/cn|0)|0}var Mn=64,qr=4194304;function je(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=je(S):(f&=v,f!==0&&(c=je(f)))}else v=a&~d,v!==0?c=je(v):f!==0&&(c=je(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-en(i),d=1<<a,c|=n[a],i&=~d;return c}function Ui(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ji(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-en(f),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Ui(S,i)):P<=i&&(n.expiredLanes|=S),f&=~S}}function $o(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ho(){var n=Mn;return Mn<<=1,(Mn&4194240)===0&&(Mn=64),n}function Wo(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function zi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-en(i),n[i]=a}function Ac(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-en(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function qo(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-en(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Oe=0;function Fn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Go,xs,Ko,Qo,Yo,Un=!1,Ns=[],jn=null,zn=null,Rt=null,Bi=new Map,dr=new Map,tn=[],El="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gr(n,i){switch(n){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Bi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(i.pointerId)}}function Tn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ca(i),i!==null&&xs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function wl(n,i,a,c,d){switch(i){case"focusin":return jn=Tn(jn,n,i,a,c,d),!0;case"dragenter":return zn=Tn(zn,n,i,a,c,d),!0;case"mouseover":return Rt=Tn(Rt,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return Bi.set(f,Tn(Bi.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,dr.set(f,Tn(dr.get(f)||null,n,i,a,c,d)),!0}return!1}function bs(n){var i=qi(n.target);if(i!==null){var a=wn(i);if(a!==null){if(i=a.tag,i===13){if(i=Uo(a),i!==null){n.blockedOn=i,Yo(n.priority,function(){Ko(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function We(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ds(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);zr=c,a.target.dispatchEvent(c),zr=null}else return i=ca(a),i!==null&&xs(i),n.blockedOn=a,!1;i.shift()}return!0}function Tl(n,i,a){We(n)&&a.delete(i)}function Rc(){Un=!1,jn!==null&&We(jn)&&(jn=null),zn!==null&&We(zn)&&(zn=null),Rt!==null&&We(Rt)&&(Rt=null),Bi.forEach(Tl),dr.forEach(Tl)}function Kr(n,i){n.blockedOn===i&&(n.blockedOn=null,Un||(Un=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rc)))}function Qr(n){function i(d){return Kr(d,n)}if(0<Ns.length){Kr(Ns[0],n);for(var a=1;a<Ns.length;a++){var c=Ns[a];c.blockedOn===n&&(c.blockedOn=null)}}for(jn!==null&&Kr(jn,n),zn!==null&&Kr(zn,n),Rt!==null&&Kr(Rt,n),Bi.forEach(i),dr.forEach(i),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)bs(a),a.blockedOn===null&&tn.shift()}var fr=fe.ReactCurrentBatchConfig,pr=!0;function Bn(n,i,a,c){var d=Oe,f=fr.transition;fr.transition=null;try{Oe=1,Jo(n,i,a,c)}finally{Oe=d,fr.transition=f}}function Il(n,i,a,c){var d=Oe,f=fr.transition;fr.transition=null;try{Oe=4,Jo(n,i,a,c)}finally{Oe=d,fr.transition=f}}function Jo(n,i,a,c){if(pr){var d=Ds(n,i,a,c);if(d===null)Mc(n,i,c,$n,a),Gr(n,c);else if(wl(d,n,i,a,c))c.stopPropagation();else if(Gr(n,c),i&4&&-1<El.indexOf(n)){for(;d!==null;){var f=ca(d);if(f!==null&&Go(f),f=Ds(n,i,a,c),f===null&&Mc(n,i,c,$n,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Mc(n,i,c,null,a)}}var $n=null;function Ds(n,i,a,c){if($n=null,n=As(c),n=qi(n),n!==null)if(i=wn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Uo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return $n=n,null}function Vs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case Ps:return 1;case zo:return 4;case Li:case Bo:return 16;case ks:return 536870912;default:return 16}default:return 16}}var nn=null,Os=null,mr=null;function Sl(){if(mr)return mr;var n,i=Os,a=i.length,c,d="value"in nn?nn.value:nn.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return mr=d.slice(n,1<c?1-c:void 0)}function $i(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function Xo(){return!1}function Vt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Hn:Xo,this.isPropagationStopped=Xo,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),i}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=Vt(Wn),Yr=ie({},Wn,{view:0,detail:0}),Ls=Vt(Yr),Ms,Fs,rn,Wi=ie({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ie,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Ms=n.screenX-rn.screenX,Fs=n.screenY-rn.screenY):Fs=Ms=0,rn=n),Ms)},movementY:function(n){return"movementY"in n?n.movementY:Fs}}),Zo=Vt(Wi),Al=ie({},Wi,{dataTransfer:0}),Rl=Vt(Al),Us=ie({},Yr,{relatedTarget:0}),Ct=Vt(Us),Cl=ie({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pl=Vt(Cl),Jr=ie({},Wn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Vt(Jr),p=ie({},Wn,{data:0}),y=Vt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j[n])?!!i[n]:!1}function Ie(){return Z}var at=ie({},Yr,{key:function(n){if(n.key){var i=E[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=$i(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ie,charCode:function(n){return n.type==="keypress"?$i(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$i(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$e=Vt(at),ht=ie({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=Vt(ht),gr=ie({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ie}),qn=Vt(gr),Gn=ie({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),js=Vt(Gn),ea=ie({},Wi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),AE=Vt(ea),RE=[9,13,27,32],Cc=m&&"CompositionEvent"in window,ta=null;m&&"documentMode"in document&&(ta=document.documentMode);var CE=m&&"TextEvent"in window&&!ta,Uf=m&&(!Cc||ta&&8<ta&&11>=ta),jf=" ",zf=!1;function Bf(n,i){switch(n){case"keyup":return RE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zs=!1;function PE(n,i){switch(n){case"compositionend":return $f(i);case"keypress":return i.which!==32?null:(zf=!0,jf);case"textInput":return n=i.data,n===jf&&zf?null:n;default:return null}}function kE(n,i){if(zs)return n==="compositionend"||!Cc&&Bf(n,i)?(n=Sl(),mr=Os=nn=null,zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Uf&&i.locale!=="ko"?null:i.data;default:return null}}var xE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!xE[n.type]:i==="textarea"}function Wf(n,i,a,c){Br(c),i=Dl(i,"onChange"),0<i.length&&(a=new Hi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var na=null,ra=null;function NE(n){up(n,0)}function kl(n){var i=qs(n);if(No(i))return n}function bE(n,i){if(n==="change")return i}var qf=!1;if(m){var Pc;if(m){var kc="oninput"in document;if(!kc){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),kc=typeof Gf.oninput=="function"}Pc=kc}else Pc=!1;qf=Pc&&(!document.documentMode||9<document.documentMode)}function Kf(){na&&(na.detachEvent("onpropertychange",Qf),ra=na=null)}function Qf(n){if(n.propertyName==="value"&&kl(ra)){var i=[];Wf(i,ra,n,As(n)),dl(NE,i)}}function DE(n,i,a){n==="focusin"?(Kf(),na=i,ra=a,na.attachEvent("onpropertychange",Qf)):n==="focusout"&&Kf()}function VE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kl(ra)}function OE(n,i){if(n==="click")return kl(i)}function LE(n,i){if(n==="input"||n==="change")return kl(i)}function ME(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var In=typeof Object.is=="function"?Object.is:ME;function ia(n,i){if(In(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!In(n[d],i[d]))return!1}return!0}function Yf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jf(n,i){var a=Yf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yf(a)}}function Xf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Xf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Zf(){for(var n=window,i=Lr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Lr(n.document)}return i}function xc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function FE(n){var i=Zf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Xf(a.ownerDocument.documentElement,a)){if(c!==null&&xc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=Jf(a,f);var v=Jf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var UE=m&&"documentMode"in document&&11>=document.documentMode,Bs=null,Nc=null,sa=null,bc=!1;function ep(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||Bs==null||Bs!==Lr(c)||(c=Bs,"selectionStart"in c&&xc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),sa&&ia(sa,c)||(sa=c,c=Dl(Nc,"onSelect"),0<c.length&&(i=new Hi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Bs)))}function xl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var $s={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Dc={},tp={};m&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Nl(n){if(Dc[n])return Dc[n];if(!$s[n])return n;var i=$s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in tp)return Dc[n]=i[a];return n}var np=Nl("animationend"),rp=Nl("animationiteration"),ip=Nl("animationstart"),sp=Nl("transitionend"),op=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(n,i){op.set(n,i),u(i,[n])}for(var Vc=0;Vc<ap.length;Vc++){var Oc=ap[Vc],jE=Oc.toLowerCase(),zE=Oc[0].toUpperCase()+Oc.slice(1);Xr(jE,"on"+zE)}Xr(np,"onAnimationEnd"),Xr(rp,"onAnimationIteration"),Xr(ip,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(sp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function lp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Fo(c,i,void 0,n),n.currentTarget=null}function up(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,U=S.currentTarget;if(S=S.listener,P!==f&&d.isPropagationStopped())break e;lp(d,S,U),f=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,U=S.currentTarget,S=S.listener,P!==f&&d.isPropagationStopped())break e;lp(d,S,U),f=P}}}if(Rs)throw n=un,Rs=!1,un=null,n}function Qe(n,i){var a=i[$c];a===void 0&&(a=i[$c]=new Set);var c=n+"__bubble";a.has(c)||(cp(i,n,2,!1),a.add(c))}function Lc(n,i,a){var c=0;i&&(c|=4),cp(a,n,c,i)}var bl="_reactListening"+Math.random().toString(36).slice(2);function aa(n){if(!n[bl]){n[bl]=!0,s.forEach(function(a){a!=="selectionchange"&&(BE.has(a)||Lc(a,!1,n),Lc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[bl]||(i[bl]=!0,Lc("selectionchange",!1,i))}}function cp(n,i,a,c){switch(Vs(i)){case 1:var d=Bn;break;case 4:d=Il;break;default:d=Jo}a=d.bind(null,i,a,n),d=void 0,!Hr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Mc(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=qi(S),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}S=S.parentNode}}c=c.return}dl(function(){var U=f,K=As(a),J=[];e:{var G=op.get(n);if(G!==void 0){var ne=Hi,ae=n;switch(n){case"keypress":if($i(a)===0)break e;case"keydown":case"keyup":ne=$e;break;case"focusin":ae="focus",ne=Ct;break;case"focusout":ae="blur",ne=Ct;break;case"beforeblur":case"afterblur":ne=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=qn;break;case np:case rp:case ip:ne=Pl;break;case sp:ne=js;break;case"scroll":ne=Ls;break;case"wheel":ne=AE;break;case"copy":case"cut":case"paste":ne=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=sn}var ue=(i&4)!==0,lt=!ue&&n==="scroll",L=ue?G!==null?G+"Capture":null:G;ue=[];for(var D=U,F;D!==null;){F=D;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,L!==null&&(X=Di(D,L),X!=null&&ue.push(la(D,X,F)))),lt)break;D=D.return}0<ue.length&&(G=new ne(G,ae,null,a,K),J.push({event:G,listeners:ue}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==zr&&(ae=a.relatedTarget||a.fromElement)&&(qi(ae)||ae[yr]))break e;if((ne||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(ae=a.relatedTarget||a.toElement,ne=U,ae=ae?qi(ae):null,ae!==null&&(lt=wn(ae),ae!==lt||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ne=null,ae=U),ne!==ae)){if(ue=Zo,X="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ue=sn,X="onPointerLeave",L="onPointerEnter",D="pointer"),lt=ne==null?G:qs(ne),F=ae==null?G:qs(ae),G=new ue(X,D+"leave",ne,a,K),G.target=lt,G.relatedTarget=F,X=null,qi(K)===U&&(ue=new ue(L,D+"enter",ae,a,K),ue.target=F,ue.relatedTarget=lt,X=ue),lt=X,ne&&ae)t:{for(ue=ne,L=ae,D=0,F=ue;F;F=Hs(F))D++;for(F=0,X=L;X;X=Hs(X))F++;for(;0<D-F;)ue=Hs(ue),D--;for(;0<F-D;)L=Hs(L),F--;for(;D--;){if(ue===L||L!==null&&ue===L.alternate)break t;ue=Hs(ue),L=Hs(L)}ue=null}else ue=null;ne!==null&&hp(J,G,ne,ue,!1),ae!==null&&lt!==null&&hp(J,lt,ae,ue,!0)}}e:{if(G=U?qs(U):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var ce=bE;else if(Hf(G))if(qf)ce=LE;else{ce=VE;var pe=DE}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ce=OE);if(ce&&(ce=ce(n,U))){Wf(J,ce,a,K);break e}pe&&pe(n,G,U),n==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&ct(G,"number",G.value)}switch(pe=U?qs(U):window,n){case"focusin":(Hf(pe)||pe.contentEditable==="true")&&(Bs=pe,Nc=U,sa=null);break;case"focusout":sa=Nc=Bs=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,ep(J,a,K);break;case"selectionchange":if(UE)break;case"keydown":case"keyup":ep(J,a,K)}var me;if(Cc)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else zs?Bf(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Uf&&a.locale!=="ko"&&(zs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&zs&&(me=Sl()):(nn=K,Os="value"in nn?nn.value:nn.textContent,zs=!0)),pe=Dl(U,_e),0<pe.length&&(_e=new y(_e,n,null,a,K),J.push({event:_e,listeners:pe}),me?_e.data=me:(me=$f(a),me!==null&&(_e.data=me)))),(me=CE?PE(n,a):kE(n,a))&&(U=Dl(U,"onBeforeInput"),0<U.length&&(K=new y("onBeforeInput","beforeinput",null,a,K),J.push({event:K,listeners:U}),K.data=me))}up(J,i)})}function la(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Dl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Di(n,a),f!=null&&c.unshift(la(n,f,d)),f=Di(n,i),f!=null&&c.push(la(n,f,d))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hp(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,U=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&U!==null&&(S=U,d?(P=Di(a,f),P!=null&&v.unshift(la(a,P,S))):d||(P=Di(a,f),P!=null&&v.push(la(a,P,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var $E=/\r\n?/g,HE=/\u0000|\uFFFD/g;function dp(n){return(typeof n=="string"?n:""+n).replace($E,`
`).replace(HE,"")}function Vl(n,i,a){if(i=dp(i),dp(n)!==i&&a)throw Error(t(425))}function Ol(){}var Fc=null,Uc=null;function jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,WE=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,qE=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(n){return fp.resolve(null).then(n).catch(GE)}:zc;function GE(n){setTimeout(function(){throw n})}function Bc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Qr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Qr(i)}function Zr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function pp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Ws,ua="__reactProps$"+Ws,yr="__reactContainer$"+Ws,$c="__reactEvents$"+Ws,KE="__reactListeners$"+Ws,QE="__reactHandles$"+Ws;function qi(n){var i=n[Kn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[yr]||a[Kn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=pp(n);n!==null;){if(a=n[Kn])return a;n=pp(n)}return i}n=a,a=n.parentNode}return null}function ca(n){return n=n[Kn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ll(n){return n[ua]||null}var Hc=[],Gs=-1;function ei(n){return{current:n}}function Ye(n){0>Gs||(n.current=Hc[Gs],Hc[Gs]=null,Gs--)}function Ge(n,i){Gs++,Hc[Gs]=n.current,n.current=i}var ti={},Ot=ei(ti),qt=ei(!1),Gi=ti;function Ks(n,i){var a=n.type.contextTypes;if(!a)return ti;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function Ml(){Ye(qt),Ye(Ot)}function mp(n,i,a){if(Ot.current!==ti)throw Error(t(168));Ge(Ot,i),Ge(qt,a)}function gp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ze(n)||"Unknown",d));return ie({},a,c)}function Fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ti,Gi=Ot.current,Ge(Ot,n),Ge(qt,qt.current),!0}function yp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=gp(n,i,Gi),c.__reactInternalMemoizedMergedChildContext=n,Ye(qt),Ye(Ot),Ge(Ot,n)):Ye(qt),Ge(qt,a)}var _r=null,Ul=!1,Wc=!1;function _p(n){_r===null?_r=[n]:_r.push(n)}function YE(n){Ul=!0,_p(n)}function ni(){if(!Wc&&_r!==null){Wc=!0;var n=0,i=Oe;try{var a=_r;for(Oe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}_r=null,Ul=!1}catch(d){throw _r!==null&&(_r=_r.slice(n+1)),jo(Ps,ni),d}finally{Oe=i,Wc=!1}}return null}var Qs=[],Ys=0,jl=null,zl=0,hn=[],dn=0,Ki=null,vr=1,Er="";function Qi(n,i){Qs[Ys++]=zl,Qs[Ys++]=jl,jl=n,zl=i}function vp(n,i,a){hn[dn++]=vr,hn[dn++]=Er,hn[dn++]=Ki,Ki=n;var c=vr;n=Er;var d=32-en(c)-1;c&=~(1<<d),a+=1;var f=32-en(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,vr=1<<32-en(i)+d|a<<d|c,Er=f+n}else vr=1<<f|a<<d|c,Er=n}function qc(n){n.return!==null&&(Qi(n,1),vp(n,1,0))}function Gc(n){for(;n===jl;)jl=Qs[--Ys],Qs[Ys]=null,zl=Qs[--Ys],Qs[Ys]=null;for(;n===Ki;)Ki=hn[--dn],hn[dn]=null,Er=hn[--dn],hn[dn]=null,vr=hn[--dn],hn[dn]=null}var on=null,an=null,Xe=!1,Sn=null;function Ep(n,i){var a=gn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function wp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Zr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ki!==null?{id:vr,overflow:Er}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(Xe){var i=an;if(i){var a=i;if(!wp(n,i)){if(Kc(n))throw Error(t(418));i=Zr(a.nextSibling);var c=on;i&&wp(n,i)?Ep(c,a):(n.flags=n.flags&-4097|2,Xe=!1,on=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,on=n}}}function Tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Bl(n){if(n!==on)return!1;if(!Xe)return Tp(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!jc(n.type,n.memoizedProps)),i&&(i=an)){if(Kc(n))throw Ip(),Error(t(418));for(;i;)Ep(n,i),i=Zr(i.nextSibling)}if(Tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Zr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Zr(n.stateNode.nextSibling):null;return!0}function Ip(){for(var n=an;n;)n=Zr(n.nextSibling)}function Js(){an=on=null,Xe=!1}function Yc(n){Sn===null?Sn=[n]:Sn.push(n)}var JE=fe.ReactCurrentBatchConfig;function ha(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var S=d.refs;v===null?delete S[f]:S[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $l(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Sp(n){var i=n._init;return i(n._payload)}function Ap(n){function i(L,D){if(n){var F=L.deletions;F===null?(L.deletions=[D],L.flags|=16):F.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)i(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=ci(L,D),L.index=0,L.sibling=null,L}function f(L,D,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<D?(L.flags|=2,D):F):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,D,F,X){return D===null||D.tag!==6?(D=zh(F,L.mode,X),D.return=L,D):(D=d(D,F),D.return=L,D)}function P(L,D,F,X){var ce=F.type;return ce===k?K(L,D,F.props.children,X,F.key):D!==null&&(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===vt&&Sp(ce)===D.type)?(X=d(D,F.props),X.ref=ha(L,D,F),X.return=L,X):(X=fu(F.type,F.key,F.props,null,L.mode,X),X.ref=ha(L,D,F),X.return=L,X)}function U(L,D,F,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=Bh(F,L.mode,X),D.return=L,D):(D=d(D,F.children||[]),D.return=L,D)}function K(L,D,F,X,ce){return D===null||D.tag!==7?(D=rs(F,L.mode,X,ce),D.return=L,D):(D=d(D,F),D.return=L,D)}function J(L,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=zh(""+D,L.mode,F),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ce:return F=fu(D.type,D.key,D.props,null,L.mode,F),F.ref=ha(L,null,D),F.return=L,F;case Te:return D=Bh(D,L.mode,F),D.return=L,D;case vt:var X=D._init;return J(L,X(D._payload),F)}if(ot(D)||de(D))return D=rs(D,L.mode,F,null),D.return=L,D;$l(L,D)}return null}function G(L,D,F,X){var ce=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:S(L,D,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:return F.key===ce?P(L,D,F,X):null;case Te:return F.key===ce?U(L,D,F,X):null;case vt:return ce=F._init,G(L,D,ce(F._payload),X)}if(ot(F)||de(F))return ce!==null?null:K(L,D,F,X,null);$l(L,F)}return null}function ne(L,D,F,X,ce){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(F)||null,S(D,L,""+X,ce);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ce:return L=L.get(X.key===null?F:X.key)||null,P(D,L,X,ce);case Te:return L=L.get(X.key===null?F:X.key)||null,U(D,L,X,ce);case vt:var pe=X._init;return ne(L,D,F,pe(X._payload),ce)}if(ot(X)||de(X))return L=L.get(F)||null,K(D,L,X,ce,null);$l(D,X)}return null}function ae(L,D,F,X){for(var ce=null,pe=null,me=D,_e=D=0,Tt=null;me!==null&&_e<F.length;_e++){me.index>_e?(Tt=me,me=null):Tt=me.sibling;var Ue=G(L,me,F[_e],X);if(Ue===null){me===null&&(me=Tt);break}n&&me&&Ue.alternate===null&&i(L,me),D=f(Ue,D,_e),pe===null?ce=Ue:pe.sibling=Ue,pe=Ue,me=Tt}if(_e===F.length)return a(L,me),Xe&&Qi(L,_e),ce;if(me===null){for(;_e<F.length;_e++)me=J(L,F[_e],X),me!==null&&(D=f(me,D,_e),pe===null?ce=me:pe.sibling=me,pe=me);return Xe&&Qi(L,_e),ce}for(me=c(L,me);_e<F.length;_e++)Tt=ne(me,L,_e,F[_e],X),Tt!==null&&(n&&Tt.alternate!==null&&me.delete(Tt.key===null?_e:Tt.key),D=f(Tt,D,_e),pe===null?ce=Tt:pe.sibling=Tt,pe=Tt);return n&&me.forEach(function(hi){return i(L,hi)}),Xe&&Qi(L,_e),ce}function ue(L,D,F,X){var ce=de(F);if(typeof ce!="function")throw Error(t(150));if(F=ce.call(F),F==null)throw Error(t(151));for(var pe=ce=null,me=D,_e=D=0,Tt=null,Ue=F.next();me!==null&&!Ue.done;_e++,Ue=F.next()){me.index>_e?(Tt=me,me=null):Tt=me.sibling;var hi=G(L,me,Ue.value,X);if(hi===null){me===null&&(me=Tt);break}n&&me&&hi.alternate===null&&i(L,me),D=f(hi,D,_e),pe===null?ce=hi:pe.sibling=hi,pe=hi,me=Tt}if(Ue.done)return a(L,me),Xe&&Qi(L,_e),ce;if(me===null){for(;!Ue.done;_e++,Ue=F.next())Ue=J(L,Ue.value,X),Ue!==null&&(D=f(Ue,D,_e),pe===null?ce=Ue:pe.sibling=Ue,pe=Ue);return Xe&&Qi(L,_e),ce}for(me=c(L,me);!Ue.done;_e++,Ue=F.next())Ue=ne(me,L,_e,Ue.value,X),Ue!==null&&(n&&Ue.alternate!==null&&me.delete(Ue.key===null?_e:Ue.key),D=f(Ue,D,_e),pe===null?ce=Ue:pe.sibling=Ue,pe=Ue);return n&&me.forEach(function(xw){return i(L,xw)}),Xe&&Qi(L,_e),ce}function lt(L,D,F,X){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:e:{for(var ce=F.key,pe=D;pe!==null;){if(pe.key===ce){if(ce=F.type,ce===k){if(pe.tag===7){a(L,pe.sibling),D=d(pe,F.props.children),D.return=L,L=D;break e}}else if(pe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===vt&&Sp(ce)===pe.type){a(L,pe.sibling),D=d(pe,F.props),D.ref=ha(L,pe,F),D.return=L,L=D;break e}a(L,pe);break}else i(L,pe);pe=pe.sibling}F.type===k?(D=rs(F.props.children,L.mode,X,F.key),D.return=L,L=D):(X=fu(F.type,F.key,F.props,null,L.mode,X),X.ref=ha(L,D,F),X.return=L,L=X)}return v(L);case Te:e:{for(pe=F.key;D!==null;){if(D.key===pe)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(L,D.sibling),D=d(D,F.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else i(L,D);D=D.sibling}D=Bh(F,L.mode,X),D.return=L,L=D}return v(L);case vt:return pe=F._init,lt(L,D,pe(F._payload),X)}if(ot(F))return ae(L,D,F,X);if(de(F))return ue(L,D,F,X);$l(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,F),D.return=L,L=D):(a(L,D),D=zh(F,L.mode,X),D.return=L,L=D),v(L)):a(L,D)}return lt}var Xs=Ap(!0),Rp=Ap(!1),Hl=ei(null),Wl=null,Zs=null,Jc=null;function Xc(){Jc=Zs=Wl=null}function Zc(n){var i=Hl.current;Ye(Hl),n._currentValue=i}function eh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function eo(n,i){Wl=n,Jc=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Kt=!0),n.firstContext=null)}function fn(n){var i=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:i,next:null},Zs===null){if(Wl===null)throw Error(t(308));Zs=n,Wl.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return i}var Yi=null;function th(n){Yi===null?Yi=[n]:Yi.push(n)}function Cp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,th(i)):(a.next=d.next,d.next=a),i.interleaved=a,wr(n,c)}function wr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ri=!1;function nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ii(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Fe&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,wr(n,a)}return d=c.interleaved,d===null?(i.next=i,th(c)):(i.next=d.next,d.next=i),c.interleaved=i,wr(n,a)}function ql(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qo(n,a)}}function kp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Gl(n,i,a,c){var d=n.updateQueue;ri=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,U=P.next;P.next=null,v===null?f=U:v.next=U,v=P;var K=n.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==v&&(S===null?K.firstBaseUpdate=U:S.next=U,K.lastBaseUpdate=P))}if(f!==null){var J=d.baseState;v=0,K=U=P=null,S=f;do{var G=S.lane,ne=S.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ae=n,ue=S;switch(G=i,ne=a,ue.tag){case 1:if(ae=ue.payload,typeof ae=="function"){J=ae.call(ne,J,G);break e}J=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ue.payload,G=typeof ae=="function"?ae.call(ne,J,G):ae,G==null)break e;J=ie({},J,G);break e;case 2:ri=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else ne={eventTime:ne,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(U=K=ne,P=J):K=K.next=ne,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(P=J),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=K,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);Zi|=v,n.lanes=v,n.memoizedState=J}}function xp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var da={},Qn=ei(da),fa=ei(da),pa=ei(da);function Ji(n){if(n===da)throw Error(t(174));return n}function rh(n,i){switch(Ge(pa,i),Ge(fa,n),Ge(Qn,da),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ts(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ts(i,n)}Ye(Qn),Ge(Qn,i)}function to(){Ye(Qn),Ye(fa),Ye(pa)}function Np(n){Ji(pa.current);var i=Ji(Qn.current),a=Ts(i,n.type);i!==a&&(Ge(fa,n),Ge(Qn,a))}function ih(n){fa.current===n&&(Ye(Qn),Ye(fa))}var Ze=ei(0);function Kl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sh=[];function oh(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var Ql=fe.ReactCurrentDispatcher,ah=fe.ReactCurrentBatchConfig,Xi=0,et=null,mt=null,Et=null,Yl=!1,ma=!1,ga=0,XE=0;function Lt(){throw Error(t(321))}function lh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!In(n[a],i[a]))return!1;return!0}function uh(n,i,a,c,d,f){if(Xi=f,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ql.current=n===null||n.memoizedState===null?nw:rw,n=a(c,d),ma){f=0;do{if(ma=!1,ga=0,25<=f)throw Error(t(301));f+=1,Et=mt=null,i.updateQueue=null,Ql.current=iw,n=a(c,d)}while(ma)}if(Ql.current=Zl,i=mt!==null&&mt.next!==null,Xi=0,Et=mt=et=null,Yl=!1,i)throw Error(t(300));return n}function ch(){var n=ga!==0;return ga=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?et.memoizedState=Et=n:Et=Et.next=n,Et}function pn(){if(mt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var i=Et===null?et.memoizedState:Et.next;if(i!==null)Et=i,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?et.memoizedState=Et=n:Et=Et.next=n}return Et}function ya(n,i){return typeof i=="function"?i(n):i}function hh(n){var i=pn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=v=null,P=null,U=f;do{var K=U.lane;if((Xi&K)===K)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var J={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(S=P=J,v=c):P=P.next=J,et.lanes|=K,Zi|=K}U=U.next}while(U!==null&&U!==f);P===null?v=c:P.next=S,In(c,i.memoizedState)||(Kt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,Zi|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function dh(n){var i=pn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);In(f,i.memoizedState)||(Kt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function bp(){}function Dp(n,i){var a=et,c=pn(),d=i(),f=!In(c.memoizedState,d);if(f&&(c.memoizedState=d,Kt=!0),c=c.queue,fh(Lp.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,_a(9,Op.bind(null,a,c,d,i),void 0,null),wt===null)throw Error(t(349));(Xi&30)!==0||Vp(a,i,d)}return d}function Vp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Op(n,i,a,c){i.value=a,i.getSnapshot=c,Mp(i)&&Fp(n)}function Lp(n,i,a){return a(function(){Mp(i)&&Fp(n)})}function Mp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!In(n,a)}catch{return!0}}function Fp(n){var i=wr(n,1);i!==null&&Pn(i,n,1,-1)}function Up(n){var i=Yn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},i.queue=n,n=n.dispatch=tw.bind(null,et,n),[i.memoizedState,n]}function _a(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function jp(){return pn().memoizedState}function Jl(n,i,a,c){var d=Yn();et.flags|=n,d.memoizedState=_a(1|i,a,void 0,c===void 0?null:c)}function Xl(n,i,a,c){var d=pn();c=c===void 0?null:c;var f=void 0;if(mt!==null){var v=mt.memoizedState;if(f=v.destroy,c!==null&&lh(c,v.deps)){d.memoizedState=_a(i,a,f,c);return}}et.flags|=n,d.memoizedState=_a(1|i,a,f,c)}function zp(n,i){return Jl(8390656,8,n,i)}function fh(n,i){return Xl(2048,8,n,i)}function Bp(n,i){return Xl(4,2,n,i)}function $p(n,i){return Xl(4,4,n,i)}function Hp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Wp(n,i,a){return a=a!=null?a.concat([n]):null,Xl(4,4,Hp.bind(null,i,n),a)}function ph(){}function qp(n,i){var a=pn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Gp(n,i){var a=pn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Kp(n,i,a){return(Xi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(In(a,i)||(a=Ho(),et.lanes|=a,Zi|=a,n.baseState=!0),i)}function ZE(n,i){var a=Oe;Oe=a!==0&&4>a?a:4,n(!0);var c=ah.transition;ah.transition={};try{n(!1),i()}finally{Oe=a,ah.transition=c}}function Qp(){return pn().memoizedState}function ew(n,i,a){var c=li(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Yp(n))Jp(i,a);else if(a=Cp(n,i,a,c),a!==null){var d=Wt();Pn(a,n,c,d),Xp(a,i,c)}}function tw(n,i,a){var c=li(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yp(n))Jp(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,S=f(v,a);if(d.hasEagerState=!0,d.eagerState=S,In(S,v)){var P=i.interleaved;P===null?(d.next=d,th(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Cp(n,i,d,c),a!==null&&(d=Wt(),Pn(a,n,c,d),Xp(a,i,c))}}function Yp(n){var i=n.alternate;return n===et||i!==null&&i===et}function Jp(n,i){ma=Yl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Xp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qo(n,a)}}var Zl={readContext:fn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},nw={readContext:fn,useCallback:function(n,i){return Yn().memoizedState=[n,i===void 0?null:i],n},useContext:fn,useEffect:zp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Jl(4194308,4,Hp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Jl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Jl(4,2,n,i)},useMemo:function(n,i){var a=Yn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Yn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ew.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var i=Yn();return n={current:n},i.memoizedState=n},useState:Up,useDebugValue:ph,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=Up(!1),i=n[0];return n=ZE.bind(null,n[1]),Yn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=et,d=Yn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));(Xi&30)!==0||Vp(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,zp(Lp.bind(null,c,f,n),[n]),c.flags|=2048,_a(9,Op.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=Yn(),i=wt.identifierPrefix;if(Xe){var a=Er,c=vr;a=(c&~(1<<32-en(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=XE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},rw={readContext:fn,useCallback:qp,useContext:fn,useEffect:fh,useImperativeHandle:Wp,useInsertionEffect:Bp,useLayoutEffect:$p,useMemo:Gp,useReducer:hh,useRef:jp,useState:function(){return hh(ya)},useDebugValue:ph,useDeferredValue:function(n){var i=pn();return Kp(i,mt.memoizedState,n)},useTransition:function(){var n=hh(ya)[0],i=pn().memoizedState;return[n,i]},useMutableSource:bp,useSyncExternalStore:Dp,useId:Qp,unstable_isNewReconciler:!1},iw={readContext:fn,useCallback:qp,useContext:fn,useEffect:fh,useImperativeHandle:Wp,useInsertionEffect:Bp,useLayoutEffect:$p,useMemo:Gp,useReducer:dh,useRef:jp,useState:function(){return dh(ya)},useDebugValue:ph,useDeferredValue:function(n){var i=pn();return mt===null?i.memoizedState=n:Kp(i,mt.memoizedState,n)},useTransition:function(){var n=dh(ya)[0],i=pn().memoizedState;return[n,i]},useMutableSource:bp,useSyncExternalStore:Dp,useId:Qp,unstable_isNewReconciler:!1};function An(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function mh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var eu={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=li(n),f=Tr(c,d);f.payload=i,a!=null&&(f.callback=a),i=ii(n,f,d),i!==null&&(Pn(i,n,d,c),ql(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Wt(),d=li(n),f=Tr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=ii(n,f,d),i!==null&&(Pn(i,n,d,c),ql(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Wt(),c=li(n),d=Tr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ii(n,d,c),i!==null&&(Pn(i,n,c,a),ql(i,n,c))}};function Zp(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!ia(a,c)||!ia(d,f):!0}function em(n,i,a){var c=!1,d=ti,f=i.contextType;return typeof f=="object"&&f!==null?f=fn(f):(d=Gt(i)?Gi:Ot.current,c=i.contextTypes,f=(c=c!=null)?Ks(n,d):ti),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=eu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function tm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&eu.enqueueReplaceState(i,i.state,null)}function gh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},nh(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=fn(f):(f=Gt(i)?Gi:Ot.current,d.context=Ks(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(mh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&eu.enqueueReplaceState(d,d.state,null),Gl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,i){try{var a="",c=i;do a+=xe(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function yh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function _h(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var sw=typeof WeakMap=="function"?WeakMap:Map;function nm(n,i,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){au||(au=!0,Dh=c),_h(n,i)},a}function rm(n,i,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){_h(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){_h(n,i),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function im(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new sw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=vw.bind(null,n,i,a),i.then(n,n))}function sm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function om(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Tr(-1,1),i.tag=2,ii(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var ow=fe.ReactCurrentOwner,Kt=!1;function Ht(n,i,a,c){i.child=n===null?Rp(i,null,a,c):Xs(i,n.child,a,c)}function am(n,i,a,c,d){a=a.render;var f=i.ref;return eo(i,d),c=uh(n,i,a,c,f,d),a=ch(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ir(n,i,d)):(Xe&&a&&qc(i),i.flags|=1,Ht(n,i,c,d),i.child)}function lm(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!jh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,um(n,i,f,c,d)):(n=fu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(v,c)&&n.ref===i.ref)return Ir(n,i,d)}return i.flags|=1,n=ci(f,c),n.ref=i.ref,n.return=i,i.child=n}function um(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(ia(f,c)&&n.ref===i.ref)if(Kt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return i.lanes=n.lanes,Ir(n,i,d)}return vh(n,i,a,c,d)}function cm(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(io,ln),ln|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ge(io,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,Ge(io,ln),ln|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,Ge(io,ln),ln|=c;return Ht(n,i,d,a),i.child}function hm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function vh(n,i,a,c,d){var f=Gt(a)?Gi:Ot.current;return f=Ks(i,f),eo(i,d),a=uh(n,i,a,c,f,d),c=ch(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ir(n,i,d)):(Xe&&c&&qc(i),i.flags|=1,Ht(n,i,a,d),i.child)}function dm(n,i,a,c,d){if(Gt(a)){var f=!0;Fl(i)}else f=!1;if(eo(i,d),i.stateNode===null)nu(n,i),em(i,a,c),gh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=fn(U):(U=Gt(a)?Gi:Ot.current,U=Ks(i,U));var K=a.getDerivedStateFromProps,J=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==U)&&tm(i,v,c,U),ri=!1;var G=i.memoizedState;v.state=G,Gl(i,c,v,d),P=i.memoizedState,S!==c||G!==P||qt.current||ri?(typeof K=="function"&&(mh(i,a,K,c),P=i.memoizedState),(S=ri||Zp(i,a,S,c,G,P,U))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Pp(n,i),S=i.memoizedProps,U=i.type===i.elementType?S:An(i.type,S),v.props=U,J=i.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=fn(P):(P=Gt(a)?Gi:Ot.current,P=Ks(i,P));var ne=a.getDerivedStateFromProps;(K=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==J||G!==P)&&tm(i,v,c,P),ri=!1,G=i.memoizedState,v.state=G,Gl(i,c,v,d);var ae=i.memoizedState;S!==J||G!==ae||qt.current||ri?(typeof ne=="function"&&(mh(i,a,ne,c),ae=i.memoizedState),(U=ri||Zp(i,a,U,c,G,ae,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Eh(n,i,a,c,f,d)}function Eh(n,i,a,c,d,f){hm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&yp(i,a,!1),Ir(n,i,f);c=i.stateNode,ow.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Xs(i,n.child,null,f),i.child=Xs(i,null,S,f)):Ht(n,i,S,f),i.memoizedState=c.state,d&&yp(i,a,!0),i.child}function fm(n){var i=n.stateNode;i.pendingContext?mp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&mp(n,i.context,!1),rh(n,i.containerInfo)}function pm(n,i,a,c,d){return Js(),Yc(d),i.flags|=256,Ht(n,i,a,c),i.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function mm(n,i,a){var c=i.pendingProps,d=Ze.current,f=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(Ze,d&1),n===null)return Qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=pu(v,c,0,null),n=rs(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=Th(a),i.memoizedState=wh,n):Ih(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return aw(n,i,v,c,S,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ci(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=ci(S,f):(f=rs(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?Th(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=wh,c}return f=n.child,n=f.sibling,c=ci(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ih(n,i){return i=pu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tu(n,i,a,c){return c!==null&&Yc(c),Xs(i,n.child,null,a),n=Ih(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function aw(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=yh(Error(t(422))),tu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=pu({mode:"visible",children:c.children},d,0,null),f=rs(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&Xs(i,n.child,null,v),i.child.memoizedState=Th(v),i.memoizedState=wh,f);if((i.mode&1)===0)return tu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=yh(f,c,void 0),tu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Kt||S){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,wr(n,d),Pn(c,n,d,-1))}return Uh(),c=yh(Error(t(421))),tu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Ew.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,an=Zr(d.nextSibling),on=i,Xe=!0,Sn=null,n!==null&&(hn[dn++]=vr,hn[dn++]=Er,hn[dn++]=Ki,vr=n.id,Er=n.overflow,Ki=i),i=Ih(i,c.children),i.flags|=4096,i)}function gm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),eh(n.return,i,a)}function Sh(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function ym(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(Ht(n,i,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gm(n,a,i);else if(n.tag===19)gm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(Ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Kl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Sh(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Kl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sh(i,!0,a,null,f);break;case"together":Sh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ir(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Zi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ci(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ci(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function lw(n,i,a){switch(i.tag){case 3:fm(i),Js();break;case 5:Np(i);break;case 1:Gt(i.type)&&Fl(i);break;case 4:rh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ge(Hl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ge(Ze,Ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?mm(n,i,a):(Ge(Ze,Ze.current&1),n=Ir(n,i,a),n!==null?n.sibling:null);Ge(Ze,Ze.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return ym(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(Ze,Ze.current),c)break;return null;case 22:case 23:return i.lanes=0,cm(n,i,a)}return Ir(n,i,a)}var _m,Ah,vm,Em;_m=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ah=function(){},vm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Ji(Qn.current);var f=null;switch(a){case"input":d=Es(n,d),c=Es(n,c),f=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),f=[];break;case"textarea":d=Do(n,d),c=Do(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ol)}En(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var P=c[U];if(S=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==S&&(P!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(f||(f=[]),f.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(f=f||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Qe("scroll",n),f||S===P||(f=[])):(f=f||[]).push(U,P))}a&&(f=f||[]).push("style",a);var U=f;(i.updateQueue=U)&&(i.flags|=4)}},Em=function(n,i,a,c){a!==c&&(i.flags|=4)};function va(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function uw(n,i,a){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(i),null;case 1:return Gt(i.type)&&Ml(),Mt(i),null;case 3:return c=i.stateNode,to(),Ye(qt),Ye(Ot),oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sn!==null&&(Lh(Sn),Sn=null))),Ah(n,i),Mt(i),null;case 5:ih(i);var d=Ji(pa.current);if(a=i.type,n!==null&&i.stateNode!=null)vm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mt(i),null}if(n=Ji(Qn.current),Bl(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[Kn]=i,c[ua]=f,n=(i.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<oa.length;d++)Qe(oa[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":ol(c,f),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Qe("invalid",c);break;case"textarea":Vo(c,f),Qe("invalid",c)}En(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&Vl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&Vl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":vs(c),bo(c,f,!0);break;case"textarea":vs(c),Mr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Ol)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=i,n[ua]=c,_m(n,i,!1,!1),i.stateNode=n;e:{switch(v=Ss(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<oa.length;d++)Qe(oa[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":ol(n,c),d=Es(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":Vo(n,c),d=Do(n,c),Qe("invalid",n);break;default:d=c}En(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var P=S[f];f==="style"?Is(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ll(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&bi(n,P):typeof P=="number"&&bi(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Qe("scroll",n):P!=null&&te(n,f,P,v))}switch(a){case"input":vs(n),bo(n,c,!1);break;case"textarea":vs(n),Mr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?vn(n,!!c.multiple,f,!1):c.defaultValue!=null&&vn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ol)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mt(i),null;case 6:if(n&&i.stateNode!=null)Em(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ji(pa.current),Ji(Qn.current),Bl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Kn]=i,(f=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Vl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vl(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=i,i.stateNode=c}return Mt(i),null;case 13:if(Ye(Ze),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&an!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ip(),Js(),i.flags|=98560,f=!1;else if(f=Bl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Kn]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mt(i),f=!1}else Sn!==null&&(Lh(Sn),Sn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ze.current&1)!==0?gt===0&&(gt=3):Uh())),i.updateQueue!==null&&(i.flags|=4),Mt(i),null);case 4:return to(),Ah(n,i),n===null&&aa(i.stateNode.containerInfo),Mt(i),null;case 10:return Zc(i.type._context),Mt(i),null;case 17:return Gt(i.type)&&Ml(),Mt(i),null;case 19:if(Ye(Ze),f=i.memoizedState,f===null)return Mt(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)va(f,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Kl(n),v!==null){for(i.flags|=128,va(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(Ze,Ze.current&1|2),i.child}n=n.sibling}f.tail!==null&&Ke()>so&&(i.flags|=128,c=!0,va(f,!1),i.lanes=4194304)}else{if(!c)if(n=Kl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),va(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Xe)return Mt(i),null}else 2*Ke()-f.renderingStartTime>so&&a!==1073741824&&(i.flags|=128,c=!0,va(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ke(),i.sibling=null,a=Ze.current,Ge(Ze,c?a&1|2:a&1),i):(Mt(i),null);case 22:case 23:return Fh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ln&1073741824)!==0&&(Mt(i),i.subtreeFlags&6&&(i.flags|=8192)):Mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function cw(n,i){switch(Gc(i),i.tag){case 1:return Gt(i.type)&&Ml(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return to(),Ye(qt),Ye(Ot),oh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ih(i),null;case 13:if(Ye(Ze),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ye(Ze),null;case 4:return to(),null;case 10:return Zc(i.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var ru=!1,Ft=!1,hw=typeof WeakSet=="function"?WeakSet:Set,se=null;function ro(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(n,i,c)}else a.current=null}function Rh(n,i,a){try{a()}catch(c){st(n,i,c)}}var wm=!1;function dw(n,i){if(Fc=pr,n=Zf(),xc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,U=0,K=0,J=n,G=null;t:for(;;){for(var ne;J!==a||d!==0&&J.nodeType!==3||(S=v+d),J!==f||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(ne=J.firstChild)!==null;)G=J,J=ne;for(;;){if(J===n)break t;if(G===a&&++U===d&&(S=v),G===f&&++K===c&&(P=v),(ne=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=ne}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},pr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var ue=ae.memoizedProps,lt=ae.memoizedState,L=i.stateNode,D=L.getSnapshotBeforeUpdate(i.elementType===i.type?ue:An(i.type,ue),lt);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){st(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return ae=wm,wm=!1,ae}function Ea(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Rh(i,a,f)}d=d.next}while(d!==c)}}function iu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ch(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Tm(n){var i=n.alternate;i!==null&&(n.alternate=null,Tm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Kn],delete i[ua],delete i[$c],delete i[KE],delete i[QE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Im(n){return n.tag===5||n.tag===3||n.tag===4}function Sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ol));else if(c!==4&&(n=n.child,n!==null))for(Ph(n,i,a),n=n.sibling;n!==null;)Ph(n,i,a),n=n.sibling}function kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(kh(n,i,a),n=n.sibling;n!==null;)kh(n,i,a),n=n.sibling}var Pt=null,Rn=!1;function si(n,i,a){for(a=a.child;a!==null;)Am(n,i,a),a=a.sibling}function Am(n,i,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Mi,a)}catch{}switch(a.tag){case 5:Ft||ro(a,i);case 6:var c=Pt,d=Rn;Pt=null,si(n,i,a),Pt=c,Rn=d,Pt!==null&&(Rn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Rn?(n=Pt,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),Qr(n)):Bc(Pt,a.stateNode));break;case 4:c=Pt,d=Rn,Pt=a.stateNode.containerInfo,Rn=!0,si(n,i,a),Pt=c,Rn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Rh(a,i,v),d=d.next}while(d!==c)}si(n,i,a);break;case 1:if(!Ft&&(ro(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){st(a,i,S)}si(n,i,a);break;case 21:si(n,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,si(n,i,a),Ft=c):si(n,i,a);break;default:si(n,i,a)}}function Rm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new hw),i.forEach(function(c){var d=ww.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Cn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Rn=!1;break e;case 3:Pt=S.stateNode.containerInfo,Rn=!0;break e;case 4:Pt=S.stateNode.containerInfo,Rn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));Am(f,v,d),Pt=null,Rn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){st(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cm(i,n),i=i.sibling}function Cm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(i,n),Jn(n),c&4){try{Ea(3,n,n.return),iu(3,n)}catch(ue){st(n,n.return,ue)}try{Ea(5,n,n.return)}catch(ue){st(n,n.return,ue)}}break;case 1:Cn(i,n),Jn(n),c&512&&a!==null&&ro(a,a.return);break;case 5:if(Cn(i,n),Jn(n),c&512&&a!==null&&ro(a,a.return),n.flags&32){var d=n.stateNode;try{bi(d,"")}catch(ue){st(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&ws(d,f),Ss(S,v);var U=Ss(S,f);for(v=0;v<P.length;v+=2){var K=P[v],J=P[v+1];K==="style"?Is(d,J):K==="dangerouslySetInnerHTML"?ll(d,J):K==="children"?bi(d,J):te(d,K,J,U)}switch(S){case"input":Ni(d,f);break;case"textarea":al(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ne=f.value;ne!=null?vn(d,!!f.multiple,ne,!1):G!==!!f.multiple&&(f.defaultValue!=null?vn(d,!!f.multiple,f.defaultValue,!0):vn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ua]=f}catch(ue){st(n,n.return,ue)}}break;case 6:if(Cn(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ue){st(n,n.return,ue)}}break;case 3:if(Cn(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(ue){st(n,n.return,ue)}break;case 4:Cn(i,n),Jn(n);break;case 13:Cn(i,n),Jn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(bh=Ke())),c&4&&Rm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(U=Ft)||K,Cn(i,n),Ft=U):Cn(i,n),Jn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(J=se=K;se!==null;){switch(G=se,ne=G.child,G.tag){case 0:case 11:case 14:case 15:Ea(4,G,G.return);break;case 1:ro(G,G.return);var ae=G.stateNode;if(typeof ae.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(ue){st(c,a,ue)}}break;case 5:ro(G,G.return);break;case 22:if(G.memoizedState!==null){xm(J);continue}}ne!==null?(ne.return=G,se=ne):xm(J)}K=K.sibling}e:for(K=null,J=n;;){if(J.tag===5){if(K===null){K=J;try{d=J.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=jr("display",v))}catch(ue){st(n,n.return,ue)}}}else if(J.tag===6){if(K===null)try{J.stateNode.nodeValue=U?"":J.memoizedProps}catch(ue){st(n,n.return,ue)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;K===J&&(K=null),J=J.return}K===J&&(K=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Cn(i,n),Jn(n),c&4&&Rm(n);break;case 21:break;default:Cn(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(bi(d,""),c.flags&=-33);var f=Sm(n);kh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Sm(n);Ph(n,S,v);break;default:throw Error(t(161))}}catch(P){st(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function fw(n,i,a){se=n,Pm(n)}function Pm(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ru;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ft;S=ru;var U=Ft;if(ru=v,(Ft=P)&&!U)for(se=d;se!==null;)v=se,P=v.child,v.tag===22&&v.memoizedState!==null?Nm(d):P!==null?(P.return=v,se=P):Nm(d);for(;f!==null;)se=f,Pm(f),f=f.sibling;se=d,ru=S,Ft=U}km(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,se=f):km(n)}}function km(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||iu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:An(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&xp(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xp(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var J=K.dehydrated;J!==null&&Qr(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&Ch(i)}catch(G){st(i,i.return,G)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function xm(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function Nm(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{iu(4,i)}catch(P){st(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){st(i,d,P)}}var f=i.return;try{Ch(i)}catch(P){st(i,f,P)}break;case 5:var v=i.return;try{Ch(i)}catch(P){st(i,v,P)}}}catch(P){st(i,i.return,P)}if(i===n){se=null;break}var S=i.sibling;if(S!==null){S.return=i.return,se=S;break}se=i.return}}var pw=Math.ceil,su=fe.ReactCurrentDispatcher,xh=fe.ReactCurrentOwner,mn=fe.ReactCurrentBatchConfig,Fe=0,wt=null,dt=null,kt=0,ln=0,io=ei(0),gt=0,wa=null,Zi=0,ou=0,Nh=0,Ta=null,Qt=null,bh=0,so=1/0,Sr=null,au=!1,Dh=null,oi=null,lu=!1,ai=null,uu=0,Ia=0,Vh=null,cu=-1,hu=0;function Wt(){return(Fe&6)!==0?Ke():cu!==-1?cu:cu=Ke()}function li(n){return(n.mode&1)===0?1:(Fe&2)!==0&&kt!==0?kt&-kt:JE.transition!==null?(hu===0&&(hu=Ho()),hu):(n=Oe,n!==0||(n=window.event,n=n===void 0?16:Vs(n.type)),n)}function Pn(n,i,a,c){if(50<Ia)throw Ia=0,Vh=null,Error(t(185));zi(n,a,c),((Fe&2)===0||n!==wt)&&(n===wt&&((Fe&2)===0&&(ou|=a),gt===4&&ui(n,kt)),Yt(n,c),a===1&&Fe===0&&(i.mode&1)===0&&(so=Ke()+500,Ul&&ni()))}function Yt(n,i){var a=n.callbackNode;ji(n,i);var c=hr(n,n===wt?kt:0);if(c===0)a!==null&&Cs(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Cs(a),i===1)n.tag===0?YE(Dm.bind(null,n)):_p(Dm.bind(null,n)),qE(function(){(Fe&6)===0&&ni()}),a=null;else{switch(Fn(c)){case 1:a=Ps;break;case 4:a=zo;break;case 16:a=Li;break;case 536870912:a=ks;break;default:a=Li}a=zm(a,bm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function bm(n,i){if(cu=-1,hu=0,(Fe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(oo()&&n.callbackNode!==a)return null;var c=hr(n,n===wt?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=du(n,c);else{i=c;var d=Fe;Fe|=2;var f=Om();(wt!==n||kt!==i)&&(Sr=null,so=Ke()+500,ts(n,i));do try{yw();break}catch(S){Vm(n,S)}while(!0);Xc(),su.current=f,Fe=d,dt!==null?i=0:(wt=null,kt=0,i=gt)}if(i!==0){if(i===2&&(d=$o(n),d!==0&&(c=d,i=Oh(n,d))),i===1)throw a=wa,ts(n,0),ui(n,c),Yt(n,Ke()),a;if(i===6)ui(n,c);else{if(d=n.current.alternate,(c&30)===0&&!mw(d)&&(i=du(n,c),i===2&&(f=$o(n),f!==0&&(c=f,i=Oh(n,f))),i===1))throw a=wa,ts(n,0),ui(n,c),Yt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Qt,Sr);break;case 3:if(ui(n,c),(c&130023424)===c&&(i=bh+500-Ke(),10<i)){if(hr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zc(ns.bind(null,n,Qt,Sr),i);break}ns(n,Qt,Sr);break;case 4:if(ui(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-en(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*pw(c/1960))-c,10<c){n.timeoutHandle=zc(ns.bind(null,n,Qt,Sr),c);break}ns(n,Qt,Sr);break;case 5:ns(n,Qt,Sr);break;default:throw Error(t(329))}}}return Yt(n,Ke()),n.callbackNode===a?bm.bind(null,n):null}function Oh(n,i){var a=Ta;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=du(n,i),n!==2&&(i=Qt,Qt=a,i!==null&&Lh(i)),n}function Lh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function mw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!In(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ui(n,i){for(i&=~Nh,i&=~ou,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-en(i),c=1<<a;n[a]=-1,i&=~c}}function Dm(n){if((Fe&6)!==0)throw Error(t(327));oo();var i=hr(n,0);if((i&1)===0)return Yt(n,Ke()),null;var a=du(n,i);if(n.tag!==0&&a===2){var c=$o(n);c!==0&&(i=c,a=Oh(n,c))}if(a===1)throw a=wa,ts(n,0),ui(n,i),Yt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Qt,Sr),Yt(n,Ke()),null}function Mh(n,i){var a=Fe;Fe|=1;try{return n(i)}finally{Fe=a,Fe===0&&(so=Ke()+500,Ul&&ni())}}function es(n){ai!==null&&ai.tag===0&&(Fe&6)===0&&oo();var i=Fe;Fe|=1;var a=mn.transition,c=Oe;try{if(mn.transition=null,Oe=1,n)return n()}finally{Oe=c,mn.transition=a,Fe=i,(Fe&6)===0&&ni()}}function Fh(){ln=io.current,Ye(io)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,WE(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ml();break;case 3:to(),Ye(qt),Ye(Ot),oh();break;case 5:ih(c);break;case 4:to();break;case 13:Ye(Ze);break;case 19:Ye(Ze);break;case 10:Zc(c.type._context);break;case 22:case 23:Fh()}a=a.return}if(wt=n,dt=n=ci(n.current,null),kt=ln=i,gt=0,wa=null,Nh=ou=Zi=0,Qt=Ta=null,Yi!==null){for(i=0;i<Yi.length;i++)if(a=Yi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Yi=null}return n}function Vm(n,i){do{var a=dt;try{if(Xc(),Ql.current=Zl,Yl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Yl=!1}if(Xi=0,Et=mt=et=null,ma=!1,ga=0,xh.current=null,a===null||a.return===null){gt=1,wa=i,dt=null;break}e:{var f=n,v=a.return,S=a,P=i;if(i=kt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,K=S,J=K.tag;if((K.mode&1)===0&&(J===0||J===11||J===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=sm(v);if(ne!==null){ne.flags&=-257,om(ne,v,S,f,i),ne.mode&1&&im(f,U,i),i=ne,P=U;var ae=i.updateQueue;if(ae===null){var ue=new Set;ue.add(P),i.updateQueue=ue}else ae.add(P);break e}else{if((i&1)===0){im(f,U,i),Uh();break e}P=Error(t(426))}}else if(Xe&&S.mode&1){var lt=sm(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),om(lt,v,S,f,i),Yc(no(P,S));break e}}f=P=no(P,S),gt!==4&&(gt=2),Ta===null?Ta=[f]:Ta.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var L=nm(f,P,i);kp(f,L);break e;case 1:S=P;var D=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(oi===null||!oi.has(F)))){f.flags|=65536,i&=-i,f.lanes|=i;var X=rm(f,S,i);kp(f,X);break e}}f=f.return}while(f!==null)}Mm(a)}catch(ce){i=ce,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Om(){var n=su.current;return su.current=Zl,n===null?Zl:n}function Uh(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||(Zi&268435455)===0&&(ou&268435455)===0||ui(wt,kt)}function du(n,i){var a=Fe;Fe|=2;var c=Om();(wt!==n||kt!==i)&&(Sr=null,ts(n,i));do try{gw();break}catch(d){Vm(n,d)}while(!0);if(Xc(),Fe=a,su.current=c,dt!==null)throw Error(t(261));return wt=null,kt=0,gt}function gw(){for(;dt!==null;)Lm(dt)}function yw(){for(;dt!==null&&!Oi();)Lm(dt)}function Lm(n){var i=jm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?Mm(n):dt=i,xh.current=null}function Mm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=uw(a,i,ln),a!==null){dt=a;return}}else{if(a=cw(a,i),a!==null){a.flags&=32767,dt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,dt=null;return}}if(i=i.sibling,i!==null){dt=i;return}dt=i=n}while(i!==null);gt===0&&(gt=5)}function ns(n,i,a){var c=Oe,d=mn.transition;try{mn.transition=null,Oe=1,_w(n,i,a,c)}finally{mn.transition=d,Oe=c}return null}function _w(n,i,a,c){do oo();while(ai!==null);if((Fe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Ac(n,f),n===wt&&(dt=wt=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||lu||(lu=!0,zm(Li,function(){return oo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=mn.transition,mn.transition=null;var v=Oe;Oe=1;var S=Fe;Fe|=4,xh.current=null,dw(n,a),Cm(a,n),FE(Uc),pr=!!Fc,Uc=Fc=null,n.current=a,fw(a),cr(),Fe=S,Oe=v,mn.transition=f}else n.current=a;if(lu&&(lu=!1,ai=n,uu=d),f=n.pendingLanes,f===0&&(oi=null),vl(a.stateNode),Yt(n,Ke()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(au)throw au=!1,n=Dh,Dh=null,n;return(uu&1)!==0&&n.tag!==0&&oo(),f=n.pendingLanes,(f&1)!==0?n===Vh?Ia++:(Ia=0,Vh=n):Ia=0,ni(),null}function oo(){if(ai!==null){var n=Fn(uu),i=mn.transition,a=Oe;try{if(mn.transition=null,Oe=16>n?16:n,ai===null)var c=!1;else{if(n=ai,ai=null,uu=0,(Fe&6)!==0)throw Error(t(331));var d=Fe;for(Fe|=4,se=n.current;se!==null;){var f=se,v=f.child;if((se.flags&16)!==0){var S=f.deletions;if(S!==null){for(var P=0;P<S.length;P++){var U=S[P];for(se=U;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:Ea(8,K,f)}var J=K.child;if(J!==null)J.return=K,se=J;else for(;se!==null;){K=se;var G=K.sibling,ne=K.return;if(Tm(K),K===U){se=null;break}if(G!==null){G.return=ne,se=G;break}se=ne}}}var ae=f.alternate;if(ae!==null){var ue=ae.child;if(ue!==null){ae.child=null;do{var lt=ue.sibling;ue.sibling=null,ue=lt}while(ue!==null)}}se=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,se=v;else e:for(;se!==null;){if(f=se,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ea(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,se=L;break e}se=f.return}}var D=n.current;for(se=D;se!==null;){v=se;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,se=F;else e:for(v=D;se!==null;){if(S=se,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:iu(9,S)}}catch(ce){st(S,S.return,ce)}if(S===v){se=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,se=X;break e}se=S.return}}if(Fe=d,ni(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Mi,n)}catch{}c=!0}return c}finally{Oe=a,mn.transition=i}}return!1}function Fm(n,i,a){i=no(a,i),i=nm(n,i,1),n=ii(n,i,1),i=Wt(),n!==null&&(zi(n,1,i),Yt(n,i))}function st(n,i,a){if(n.tag===3)Fm(n,n,a);else for(;i!==null;){if(i.tag===3){Fm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){n=no(a,n),n=rm(i,n,1),i=ii(i,n,1),n=Wt(),i!==null&&(zi(i,1,n),Yt(i,n));break}}i=i.return}}function vw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Wt(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(kt&a)===a&&(gt===4||gt===3&&(kt&130023424)===kt&&500>Ke()-bh?ts(n,0):Nh|=a),Yt(n,i)}function Um(n,i){i===0&&((n.mode&1)===0?i=1:(i=qr,qr<<=1,(qr&130023424)===0&&(qr=4194304)));var a=Wt();n=wr(n,i),n!==null&&(zi(n,i,a),Yt(n,a))}function Ew(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Um(n,a)}function ww(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Um(n,a)}var jm;jm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qt.current)Kt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Kt=!1,lw(n,i,a);Kt=(n.flags&131072)!==0}else Kt=!1,Xe&&(i.flags&1048576)!==0&&vp(i,zl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nu(n,i),n=i.pendingProps;var d=Ks(i,Ot.current);eo(i,a),d=uh(null,i,c,n,d,a);var f=ch();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(c)?(f=!0,Fl(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nh(i),d.updater=eu,i.stateNode=d,d._reactInternals=i,gh(i,c,n,a),i=Eh(null,i,c,!0,f,a)):(i.tag=0,Xe&&f&&qc(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Iw(c),n=An(c,n),d){case 0:i=vh(null,i,c,n,a);break e;case 1:i=dm(null,i,c,n,a);break e;case 11:i=am(null,i,c,n,a);break e;case 14:i=lm(null,i,c,An(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:An(c,d),vh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:An(c,d),dm(n,i,c,d,a);case 3:e:{if(fm(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,Pp(n,i),Gl(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=no(Error(t(423)),i),i=pm(n,i,c,a,d);break e}else if(c!==d){d=no(Error(t(424)),i),i=pm(n,i,c,a,d);break e}else for(an=Zr(i.stateNode.containerInfo.firstChild),on=i,Xe=!0,Sn=null,a=Rp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===d){i=Ir(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return Np(i),n===null&&Qc(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,jc(c,d)?v=null:f!==null&&jc(c,f)&&(i.flags|=32),hm(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&Qc(i),null;case 13:return mm(n,i,a);case 4:return rh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Xs(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:An(c,d),am(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,Ge(Hl,c._currentValue),c._currentValue=v,f!==null)if(In(f.value,v)){if(f.children===d.children&&!qt.current){i=Ir(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=Tr(-1,a&-a),P.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?P.next=P:(P.next=K.next,K.next=P),U.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),eh(f.return,a,i),S.lanes|=a;break}P=P.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),eh(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,eo(i,a),d=fn(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=An(c,i.pendingProps),d=An(c.type,d),lm(n,i,c,d,a);case 15:return um(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:An(c,d),nu(n,i),i.tag=1,Gt(c)?(n=!0,Fl(i)):n=!1,eo(i,a),em(i,c,d),gh(i,c,d,a),Eh(null,i,c,!0,n,a);case 19:return ym(n,i,a);case 22:return cm(n,i,a)}throw Error(t(156,i.tag))};function zm(n,i){return jo(n,i)}function Tw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,i,a,c){return new Tw(n,i,a,c)}function jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Iw(n){if(typeof n=="function")return jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===rt)return 14}return 2}function ci(n,i){var a=n.alternate;return a===null?(a=gn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fu(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return rs(a.children,d,f,i);case A:v=8,d|=8;break;case C:return n=gn(12,a,i,d|2),n.elementType=C,n.lanes=f,n;case I:return n=gn(13,a,i,d),n.elementType=I,n.lanes=f,n;case ke:return n=gn(19,a,i,d),n.elementType=ke,n.lanes=f,n;case qe:return pu(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:v=10;break e;case N:v=9;break e;case b:v=11;break e;case rt:v=14;break e;case vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function rs(n,i,a,c){return n=gn(7,n,c,i),n.lanes=a,n}function pu(n,i,a,c){return n=gn(22,n,c,i),n.elementType=qe,n.lanes=a,n.stateNode={isHidden:!1},n}function zh(n,i,a){return n=gn(6,n,null,i),n.lanes=a,n}function Bh(n,i,a){return i=gn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Sw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $h(n,i,a,c,d,f,v,S,P){return n=new Sw(n,i,a,S,P),i===1?(i=1,f===!0&&(i|=8)):i=0,f=gn(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(f),n}function Aw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Bm(n){if(!n)return ti;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return gp(n,a,i)}return i}function $m(n,i,a,c,d,f,v,S,P){return n=$h(a,c,!0,n,d,f,v,S,P),n.context=Bm(null),a=n.current,c=Wt(),d=li(a),f=Tr(c,d),f.callback=i??null,ii(a,f,d),n.current.lanes=d,zi(n,d,c),Yt(n,c),n}function mu(n,i,a,c){var d=i.current,f=Wt(),v=li(d);return a=Bm(a),i.context===null?i.context=a:i.pendingContext=a,i=Tr(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ii(d,i,v),n!==null&&(Pn(n,d,v,f),ql(n,d,v)),v}function gu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Hh(n,i){Hm(n,i),(n=n.alternate)&&Hm(n,i)}function Rw(){return null}var Wm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wh(n){this._internalRoot=n}yu.prototype.render=Wh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));mu(n,i,null,null)},yu.prototype.unmount=Wh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){mu(null,n,null,null)}),i[yr]=null}};function yu(n){this._internalRoot=n}yu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Qo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<tn.length&&i!==0&&i<tn[a].priority;a++);tn.splice(a,0,n),a===0&&bs(n)}};function qh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qm(){}function Cw(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=gu(v);f.call(U)}}var v=$m(i,c,n,0,null,!1,!1,"",qm);return n._reactRootContainer=v,n[yr]=v.current,aa(n.nodeType===8?n.parentNode:n),es(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=gu(P);S.call(U)}}var P=$h(n,0,!1,null,null,!1,!1,"",qm);return n._reactRootContainer=P,n[yr]=P.current,aa(n.nodeType===8?n.parentNode:n),es(function(){mu(i,P,a,c)}),P}function vu(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var P=gu(v);S.call(P)}}mu(i,v,n,d)}else v=Cw(a,i,n,d,c);return gu(v)}Go=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=je(i.pendingLanes);a!==0&&(qo(i,a|1),Yt(i,Ke()),(Fe&6)===0&&(so=Ke()+500,ni()))}break;case 13:es(function(){var c=wr(n,1);if(c!==null){var d=Wt();Pn(c,n,1,d)}}),Hh(n,1)}},xs=function(n){if(n.tag===13){var i=wr(n,134217728);if(i!==null){var a=Wt();Pn(i,n,134217728,a)}Hh(n,134217728)}},Ko=function(n){if(n.tag===13){var i=li(n),a=wr(n,i);if(a!==null){var c=Wt();Pn(a,n,i,c)}Hh(n,i)}},Qo=function(){return Oe},Yo=function(n,i){var a=Oe;try{return Oe=n,i()}finally{Oe=a}},ar=function(n,i,a){switch(i){case"input":if(Ni(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ll(c);if(!d)throw Error(t(90));No(c),Ni(c,d)}}}break;case"textarea":al(n,a);break;case"select":i=a.value,i!=null&&vn(n,!!a.multiple,i,!1)}},cl=Mh,hl=es;var Pw={usingClientEntryPoint:!1,Events:[ca,qs,Ll,Br,$r,Mh]},Sa={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kw={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_l(n),n===null?null:n.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||Rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{Mi=Eu.inject(kw),Zt=Eu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pw,Jt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(i))throw Error(t(200));return Aw(n,i,null,a)},Jt.createRoot=function(n,i){if(!qh(n))throw Error(t(299));var a=!1,c="",d=Wm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=$h(n,1,!1,null,null,a,!1,c,d),n[yr]=i.current,aa(n.nodeType===8?n.parentNode:n),new Wh(i)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_l(i),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return es(n)},Jt.hydrate=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!0,a)},Jt.hydrateRoot=function(n,i,a){if(!qh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Wm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=$m(i,null,n,1,a??null,d,!1,f,v),n[yr]=i.current,aa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new yu(i)},Jt.render=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!1,a)},Jt.unmountComponentAtNode=function(n){if(!_u(n))throw Error(t(40));return n._reactRootContainer?(es(function(){vu(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Jt.unstable_batchedUpdates=Mh,Jt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_u(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vu(n,i,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var eg;function Fw(){if(eg)return Qh.exports;eg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qh.exports=Mw(),Qh.exports}var tg;function Uw(){if(tg)return wu;tg=1;var r=Fw();return wu.createRoot=r.createRoot,wu.hydrateRoot=r.hydrateRoot,wu}var jw=Uw();const zw=Wd(jw),Bw=()=>{};var ng={};/**
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
 */const My=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},$w=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Fy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=u>>2,T=(u&3)<<4|m>>4;let R=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(R=64)),s.push(t[w],t[T],t[R],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(My(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):$w(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||T==null)throw new Hw;const R=u<<2|m>>4;if(s.push(R),_!==64){const z=m<<4&240|_>>2;if(s.push(z),T!==64){const W=_<<6&192|T;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Hw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ww=function(r){const e=My(r);return Fy.encodeByteArray(e,!0)},Uu=function(r){return Ww(r).replace(/\./g,"")},Uy=function(r){try{return Fy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gw=()=>qw().__FIREBASE_DEFAULTS__,Kw=()=>{if(typeof process>"u"||typeof ng>"u")return;const r=ng.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Qw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Uy(r[1]);return e&&JSON.parse(e)},oc=()=>{try{return Bw()||Gw()||Kw()||Qw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},jy=r=>{var e,t;return(t=(e=oc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Yw=r=>{const e=jy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},zy=()=>{var r;return(r=oc())==null?void 0:r.config},By=r=>{var e;return(e=oc())==null?void 0:e[`_${r}`]};/**
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
 */class Jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function So(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $y(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Xw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Uu(JSON.stringify(t)),Uu(JSON.stringify(h)),""].join(".")}const ba={};function Zw(){const r={prod:[],emulator:[]};for(const e of Object.keys(ba))ba[e]?r.emulator.push(e):r.prod.push(e);return r}function e0(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let rg=!1;function Hy(r,e){if(typeof window>"u"||typeof document>"u"||!So(window.location.host)||ba[r]===e||ba[r]||rg)return;ba[r]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=Zw().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function g(R,z){R.setAttribute("width","24"),R.setAttribute("id",z),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function _(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{rg=!0,h()},R}function w(R,z){R.setAttribute("id",z),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function T(){const R=e0(s),z=t("text"),W=document.getElementById(z)||document.createElement("span"),$=t("learnmore"),B=document.getElementById($)||document.createElement("a"),oe=t("preprendIcon"),le=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const te=R.element;m(te),w(B,$);const fe=_();g(le,oe),te.append(le,W,B,fe),document.body.appendChild(te)}u?(W.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(le.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function t0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function n0(){var e;const r=(e=oc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function r0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function i0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function s0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o0(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function a0(){return!n0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function l0(){try{return typeof indexedDB=="object"}catch{return!1}}function u0(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const c0="FirebaseError";class Or extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=c0,Object.setPrototypeOf(this,Or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?h0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Or(o,m,s)}}function h0(r,e){return r.replace(d0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const d0=/\{\$([^}]+)}/g;function f0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function us(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(ig(u)&&ig(h)){if(!us(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function ig(r){return r!==null&&typeof r=="object"}/**
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
 */function Ja(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function p0(r,e){const t=new m0(r,e);return t.subscribe.bind(t)}class m0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");g0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Xh),o.error===void 0&&(o.error=Xh),o.complete===void 0&&(o.complete=Xh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Xh(){}/**
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
 */function Dn(r){return r&&r._delegate?r._delegate:r}class cs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ss="[DEFAULT]";/**
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
 */class y0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Jw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(v0(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _0(r){return r===ss?void 0:r}function v0(r){return r.instantiationMode==="EAGER"}/**
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
 */class E0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new y0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(be||(be={}));const w0={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},T0=be.INFO,I0={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},S0=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=I0[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gd{constructor(e){this.name=e,this._logLevel=T0,this._logHandler=S0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const A0=(r,e)=>e.some(t=>r instanceof t);let sg,og;function R0(){return sg||(sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C0(){return og||(og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wy=new WeakMap,gd=new WeakMap,qy=new WeakMap,Zh=new WeakMap,Kd=new WeakMap;function P0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(_i(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Wy.set(t,r)}).catch(()=>{}),Kd.set(e,r),e}function k0(r){if(gd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});gd.set(r,e)}let yd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return gd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||qy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function x0(r){yd=r(yd)}function N0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(ed(this),e,...t);return qy.set(s,e.sort?e.sort():[e]),_i(s)}:C0().includes(r)?function(...e){return r.apply(ed(this),e),_i(Wy.get(this))}:function(...e){return _i(r.apply(ed(this),e))}}function b0(r){return typeof r=="function"?N0(r):(r instanceof IDBTransaction&&k0(r),A0(r,R0())?new Proxy(r,yd):r)}function _i(r){if(r instanceof IDBRequest)return P0(r);if(Zh.has(r))return Zh.get(r);const e=b0(r);return e!==r&&(Zh.set(r,e),Kd.set(e,r)),e}const ed=r=>Kd.get(r);function D0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=_i(h);return s&&h.addEventListener("upgradeneeded",g=>{s(_i(h.result),g.oldVersion,g.newVersion,_i(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const V0=["get","getKey","getAll","getAllKeys","count"],O0=["put","add","delete","clear"],td=new Map;function ag(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(td.get(e))return td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=O0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||V0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return td.set(e,u),u}x0(r=>({...r,get:(e,t,s)=>ag(e,t)||r.get(e,t,s),has:(e,t)=>!!ag(e,t)||r.has(e,t)}));/**
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
 */class L0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(M0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function M0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _d="@firebase/app",lg="0.14.9";/**
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
 */const xr=new Gd("@firebase/app"),F0="@firebase/app-compat",U0="@firebase/analytics-compat",j0="@firebase/analytics",z0="@firebase/app-check-compat",B0="@firebase/app-check",$0="@firebase/auth",H0="@firebase/auth-compat",W0="@firebase/database",q0="@firebase/data-connect",G0="@firebase/database-compat",K0="@firebase/functions",Q0="@firebase/functions-compat",Y0="@firebase/installations",J0="@firebase/installations-compat",X0="@firebase/messaging",Z0="@firebase/messaging-compat",eT="@firebase/performance",tT="@firebase/performance-compat",nT="@firebase/remote-config",rT="@firebase/remote-config-compat",iT="@firebase/storage",sT="@firebase/storage-compat",oT="@firebase/firestore",aT="@firebase/ai",lT="@firebase/firestore-compat",uT="firebase",cT="12.10.0";/**
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
 */const vd="[DEFAULT]",hT={[_d]:"fire-core",[F0]:"fire-core-compat",[j0]:"fire-analytics",[U0]:"fire-analytics-compat",[B0]:"fire-app-check",[z0]:"fire-app-check-compat",[$0]:"fire-auth",[H0]:"fire-auth-compat",[W0]:"fire-rtdb",[q0]:"fire-data-connect",[G0]:"fire-rtdb-compat",[K0]:"fire-fn",[Q0]:"fire-fn-compat",[Y0]:"fire-iid",[J0]:"fire-iid-compat",[X0]:"fire-fcm",[Z0]:"fire-fcm-compat",[eT]:"fire-perf",[tT]:"fire-perf-compat",[nT]:"fire-rc",[rT]:"fire-rc-compat",[iT]:"fire-gcs",[sT]:"fire-gcs-compat",[oT]:"fire-fst",[lT]:"fire-fst-compat",[aT]:"fire-vertex","fire-js":"fire-js",[uT]:"fire-js-all"};/**
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
 */const ju=new Map,dT=new Map,Ed=new Map;function ug(r,e){try{r.container.addComponent(e)}catch(t){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function _o(r){const e=r.name;if(Ed.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,r);for(const t of ju.values())ug(t,r);for(const t of dT.values())ug(t,r);return!0}function Qd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function kn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const fT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new Ya("app","Firebase",fT);/**
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
 */class pT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ao=cT;function Gy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:vd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw vi.create("bad-app-name",{appName:String(o)});if(t||(t=zy()),!t)throw vi.create("no-options");const u=ju.get(o);if(u){if(us(t,u.options)&&us(s,u.config))return u;throw vi.create("duplicate-app",{appName:o})}const h=new E0(o);for(const g of Ed.values())h.addComponent(g);const m=new pT(t,s,h);return ju.set(o,m),m}function Ky(r=vd){const e=ju.get(r);if(!e&&r===vd&&zy())return Gy();if(!e)throw vi.create("no-app",{appName:r});return e}function Ei(r,e,t){let s=hT[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(h.join(" "));return}_o(new cs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mT="firebase-heartbeat-database",gT=1,Ua="firebase-heartbeat-store";let nd=null;function Qy(){return nd||(nd=D0(mT,gT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ua)}catch(t){console.warn(t)}}}}).catch(r=>{throw vi.create("idb-open",{originalErrorMessage:r.message})})),nd}async function yT(r){try{const t=(await Qy()).transaction(Ua),s=await t.objectStore(Ua).get(Yy(r));return await t.done,s}catch(e){if(e instanceof Or)xr.warn(e.message);else{const t=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(t.message)}}}async function cg(r,e){try{const s=(await Qy()).transaction(Ua,"readwrite");await s.objectStore(Ua).put(e,Yy(r)),await s.done}catch(t){if(t instanceof Or)xr.warn(t.message);else{const s=vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xr.warn(s.message)}}}function Yy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const _T=1024,vT=30;class ET{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new TT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=hg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>vT){const h=IT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){xr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hg(),{heartbeatsToSend:s,unsentEntries:o}=wT(this._heartbeatsCache.heartbeats),u=Uu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return xr.warn(t),""}}}function hg(){return new Date().toISOString().substring(0,10)}function wT(r,e=_T){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),dg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),dg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class TT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l0()?u0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dg(r){return Uu(JSON.stringify({version:2,heartbeats:r})).length}function IT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function ST(r){_o(new cs("platform-logger",e=>new L0(e),"PRIVATE")),_o(new cs("heartbeat",e=>new ET(e),"PRIVATE")),Ei(_d,lg,r),Ei(_d,lg,"esm2020"),Ei("fire-js","")}ST("");function Jy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AT=Jy,Xy=new Ya("auth","Firebase",Jy());/**
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
 */const zu=new Gd("@firebase/auth");function RT(r,...e){zu.logLevel<=be.WARN&&zu.warn(`Auth (${Ao}): ${r}`,...e)}function ku(r,...e){zu.logLevel<=be.ERROR&&zu.error(`Auth (${Ao}): ${r}`,...e)}/**
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
 */function Nr(r,...e){throw Yd(r,...e)}function er(r,...e){return Yd(r,...e)}function Zy(r,e,t){const s={...AT(),[e]:t};return new Ya("auth","Firebase",s).create(e,{appName:r.name})}function wi(r){return Zy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Xy.create(r,...e)}function ve(r,e,...t){if(!r)throw Yd(e,...t)}function Rr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ku(e),new Error(e)}function br(r,e){r||Rr(e)}/**
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
 */function wd(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function CT(){return fg()==="http:"||fg()==="https:"}function fg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function PT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CT()||i0()||"connection"in navigator)?navigator.onLine:!0}function kT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Xa{constructor(e,t){this.shortDelay=e,this.longDelay=t,br(t>e,"Short delay should be less than long delay!"),this.isMobile=t0()||s0()}get(){return PT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jd(r,e){br(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class e_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bT=new Xa(3e4,6e4);function ac(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ro(r,e,t,s,o={}){return t_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ja({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return r0()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&So(r.emulatorConfig.host)&&(_.credentials="include"),e_.fetch()(await r_(r,r.config.apiHost,t,m),_)})}async function t_(r,e,t){r._canInitEmulator=!1;const s={...xT,...e};try{const o=new DT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Tu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Tu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Tu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Zy(r,w,_);Nr(r,w)}}catch(o){if(o instanceof Or)throw o;Nr(r,"network-request-failed",{message:String(o)})}}async function n_(r,e,t,s,o={}){const u=await Ro(r,e,t,s,o);return"mfaPendingCredential"in u&&Nr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function r_(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Jd(r.config,o):`${r.config.apiScheme}://${o}`;return NT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class DT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(er(this.auth,"network-request-failed")),bT.get())})}}function Tu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=er(r,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function VT(r,e){return Ro(r,"POST","/v1/accounts:delete",e)}async function Bu(r,e){return Ro(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Da(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OT(r,e=!1){const t=Dn(r),s=await t.getIdToken(e),o=Xd(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Da(rd(o.auth_time)),issuedAtTime:Da(rd(o.iat)),expirationTime:Da(rd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function rd(r){return Number(r)*1e3}function Xd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const o=Uy(t);return o?JSON.parse(o):(ku("Failed to decode base64 JWT payload"),null)}catch(o){return ku("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function pg(r){const e=Xd(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ja(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Or&&LT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function LT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class MT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Td{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $u(r){var T;const e=r.auth,t=await r.getIdToken(),s=await ja(r,Bu(e,{idToken:t}));ve(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?i_(o.providerUserInfo):[],h=UT(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Td(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,w)}async function FT(r){const e=Dn(r);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function i_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function jT(r,e){const t=await t_(r,{},async()=>{const s=Ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await r_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&So(r.emulatorConfig.host)&&(g.credentials="include"),e_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zT(r,e){return Ro(r,"POST","/v2/accounts:revokeToken",ac(r,e))}/**
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
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=pg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await jT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new fo;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
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
 */function di(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class xn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new MT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Td(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ja(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return OT(this,e)}reload(){return FT(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await $u(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(wi(this.auth));const e=await this.getIdToken();return await ja(this,VT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:T,emailVerified:R,isAnonymous:z,providerData:W,stsTokenManager:$}=t;ve(T&&$,e,"internal-error");const B=fo.fromJSON(this.name,$);ve(typeof T=="string",e,"internal-error"),di(s,e.name),di(o,e.name),ve(typeof R=="boolean",e,"internal-error"),ve(typeof z=="boolean",e,"internal-error"),di(u,e.name),di(h,e.name),di(m,e.name),di(g,e.name),di(_,e.name),di(w,e.name);const oe=new xn({uid:T,auth:e,email:o,emailVerified:R,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:B,createdAt:_,lastLoginAt:w});return W&&Array.isArray(W)&&(oe.providerData=W.map(le=>({...le}))),g&&(oe._redirectEventId=g),oe}static async _fromIdTokenResponse(e,t,s=!1){const o=new fo;o.updateFromServerResponse(t);const u=new xn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await $u(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?i_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new fo;m.updateFromIdToken(s);const g=new xn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Td(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const mg=new Map;function Cr(r){br(r instanceof Function,"Expected a class definition");let e=mg.get(r);return e?(br(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,mg.set(r,e),e)}/**
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
 */class s_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}s_.type="NONE";const gg=s_;/**
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
 */function xu(r,e,t){return`firebase:${r}:${e}:${t}`}class po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=xu(this.userKey,o.apiKey,u),this.fullPersistenceKey=xu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Bu(this.auth,{idToken:e}).catch(()=>{});return t?xn._fromGetAccountInfoResponse(this.auth,t,e):null}return xn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new po(Cr(gg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Cr(gg);const h=xu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const R=await Bu(e,{idToken:w}).catch(()=>{});if(!R)break;T=await xn._fromGetAccountInfoResponse(e,R,w)}else T=xn._fromJSON(e,w);_!==u&&(m=T),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new po(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new po(u,e,s))}}/**
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
 */function yg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(u_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(o_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h_(e))return"Blackberry";if(d_(e))return"Webos";if(a_(e))return"Safari";if((e.includes("chrome/")||l_(e))&&!e.includes("edge/"))return"Chrome";if(c_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function o_(r=Bt()){return/firefox\//i.test(r)}function a_(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function l_(r=Bt()){return/crios\//i.test(r)}function u_(r=Bt()){return/iemobile/i.test(r)}function c_(r=Bt()){return/android/i.test(r)}function h_(r=Bt()){return/blackberry/i.test(r)}function d_(r=Bt()){return/webos/i.test(r)}function Zd(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function BT(r=Bt()){var e;return Zd(r)&&!!((e=window.navigator)!=null&&e.standalone)}function $T(){return o0()&&document.documentMode===10}function f_(r=Bt()){return Zd(r)||c_(r)||d_(r)||h_(r)||/windows phone/i.test(r)||u_(r)}/**
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
 */function p_(r,e=[]){let t;switch(r){case"Browser":t=yg(Bt());break;case"Worker":t=`${yg(Bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ao}/${s}`}/**
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
 */class HT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function WT(r,e={}){return Ro(r,"GET","/v2/passwordPolicy",ac(r,e))}/**
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
 */const qT=6;class GT{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??qT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class KT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _g(this),this.idTokenSubscription=new _g(this),this.beforeStateQueue=new HT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bu(this,{idToken:e}),s=await xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(wi(this));const t=e?Dn(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WT(this),t=new GT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await zT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=p_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&RT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function lc(r){return Dn(r)}class _g{constructor(e){this.auth=e,this.observer=null,this.addObserver=p0(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ef={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QT(r){ef=r}function YT(r){return ef.loadJS(r)}function JT(){return ef.gapiScript}function XT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ZT(r,e){const t=Qd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(us(u,e??{}))return o;Nr(o,"already-initialized")}return t.initialize({options:e})}function eI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tI(r,e,t){const s=lc(r);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=m_(e),{host:h,port:m}=nI(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(us(_,s.config.emulator)&&us(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,So(h)?($y(`${u}//${h}${g}`),Hy("Auth",!0)):rI()}function m_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function nI(r){const e=m_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:vg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:vg(h)}}}function vg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function rI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class g_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}/**
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
 */async function mo(r,e){return n_(r,"POST","/v1/accounts:signInWithIdp",ac(r,e))}/**
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
 */const iI="http://localhost";class hs extends g_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new hs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return mo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,mo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mo(e,t)}buildRequest(){const e={requestUri:iI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ja(t)}return e}}/**
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
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Za extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fi extends Za{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
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
 */class pi extends Za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.GOOGLE_SIGN_IN_METHOD="google.com";pi.PROVIDER_ID="google.com";/**
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
 */class mi extends Za{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
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
 */class gi extends Za{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gi.credential(t,s)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
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
 */async function sI(r,e){return n_(r,"POST","/v1/accounts:signUp",ac(r,e))}/**
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
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await xn._fromIdTokenResponse(e,s,o),h=Eg(s);return new Si({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Eg(s);return new Si({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Eg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function __(r){var o;if(kn(r.app))return Promise.reject(wi(r));const e=lc(r);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Si({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await sI(e,{returnSecureToken:!0}),s=await Si._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class Hu extends Or{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Hu(e,t,s,o)}}function v_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(r,u,e,s):u})}async function oI(r,e,t=!1){const s=await ja(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Si._forOperation(r,"link",s)}/**
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
 */async function aI(r,e,t=!1){const{auth:s}=r;if(kn(s.app))return Promise.reject(wi(s));const o="reauthenticate";try{const u=await ja(r,v_(s,o,e,r),t);ve(u.idToken,s,"internal-error");const h=Xd(u.idToken);ve(h,s,"internal-error");const{sub:m}=h;return ve(r.uid===m,s,"user-mismatch"),Si._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Nr(s,"user-mismatch"),u}}/**
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
 */async function lI(r,e,t=!1){if(kn(r.app))return Promise.reject(wi(r));const s="signIn",o=await v_(r,s,e),u=await Si._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}function uI(r,e,t,s){return Dn(r).onIdTokenChanged(e,t,s)}function cI(r,e,t){return Dn(r).beforeAuthStateChanged(e,t)}function hI(r,e,t,s){return Dn(r).onAuthStateChanged(e,t,s)}const Wu="__sak";/**
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
 */class E_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wu,"1"),this.storage.removeItem(Wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dI=1e3,fI=10;class w_ extends E_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=f_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);$T()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,fI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}w_.type="LOCAL";const pI=w_;/**
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
 */class T_ extends E_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}T_.type="SESSION";const I_=T_;/**
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
 */function mI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new uc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await mI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
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
 */function tf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class gI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=tf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===_)switch(R.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function tr(){return window}function yI(r){tr().location.href=r}/**
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
 */function S_(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function _I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function EI(){return S_()?self:null}/**
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
 */const A_="firebaseLocalStorageDb",wI=1,qu="firebaseLocalStorage",R_="fbase_key";class el{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cc(r,e){return r.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function TI(){const r=indexedDB.deleteDatabase(A_);return new el(r).toPromise()}function Id(){const r=indexedDB.open(A_,wI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(qu,{keyPath:R_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(qu)?e(s):(s.close(),await TI(),e(await Id()))})})}async function wg(r,e,t){const s=cc(r,!0).put({[R_]:e,value:t});return new el(s).toPromise()}async function II(r,e){const t=cc(r,!1).get(e),s=await new el(t).toPromise();return s===void 0?null:s.value}function Tg(r,e){const t=cc(r,!0).delete(e);return new el(t).toPromise()}const SI=800,AI=3;class C_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>AI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(EI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await _I(),!this.activeServiceWorker)return;this.sender=new gI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Id();return await wg(e,Wu,"1"),await Tg(e,Wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>wg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>II(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=cc(o,!1).getAll();return new el(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}C_.type="LOCAL";const RI=C_;new Xa(3e4,6e4);/**
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
 */function CI(r,e){return e?Cr(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class nf extends g_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PI(r){return lI(r.auth,new nf(r),r.bypassAuthState)}function kI(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),aI(t,new nf(r),r.bypassAuthState)}async function xI(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),oI(t,new nf(r),r.bypassAuthState)}/**
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
 */class P_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PI;case"linkViaPopup":case"linkViaRedirect":return xI;case"reauthViaPopup":case"reauthViaRedirect":return kI;default:Nr(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NI=new Xa(2e3,1e4);class ho extends P_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ho.currentPopupAction&&ho.currentPopupAction.cancel(),ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NI.get())};e()}}ho.currentPopupAction=null;/**
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
 */const bI="pendingRedirect",Nu=new Map;class DI extends P_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Nu.get(this.auth._key());if(!e){try{const s=await VI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Nu.set(this.auth._key(),e)}return this.bypassAuthState||Nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VI(r,e){const t=MI(e),s=LI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function OI(r,e){Nu.set(r._key(),e)}function LI(r){return Cr(r._redirectPersistence)}function MI(r){return xu(bI,r.config.apiKey,r.name)}async function FI(r,e,t=!1){if(kn(r.app))return Promise.reject(wi(r));const s=lc(r),o=CI(s,e),h=await new DI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const UI=600*1e3;class jI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!k_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(er(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ig(e))}saveEventToCache(e){this.cachedEventUids.add(Ig(e)),this.lastProcessedEventTime=Date.now()}}function Ig(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function k_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k_(r);default:return!1}}/**
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
 */async function BI(r,e={}){return Ro(r,"GET","/v1/projects",e)}/**
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
 */const $I=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HI=/^https?/;async function WI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await BI(r);for(const t of e)try{if(qI(t))return}catch{}Nr(r,"unauthorized-domain")}function qI(r){const e=wd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!HI.test(t))return!1;if($I.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const GI=new Xa(3e4,6e4);function Sg(){const r=tr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function KI(r){return new Promise((e,t)=>{var o,u,h;function s(){Sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sg(),t(er(r,"network-request-failed"))},timeout:GI.get()})}if((u=(o=tr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=tr().gapi)!=null&&h.load)s();else{const m=XT("iframefcb");return tr()[m]=()=>{gapi.load?s():t(er(r,"network-request-failed"))},YT(`${JT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw bu=null,e})}let bu=null;function QI(r){return bu=bu||KI(r),bu}/**
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
 */const YI=new Xa(5e3,15e3),JI="__/auth/iframe",XI="emulator/auth/iframe",ZI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tS(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Jd(e,XI):`https://${r.config.authDomain}/${JI}`,s={apiKey:e.apiKey,appName:r.name,v:Ao},o=eS.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ja(s).slice(1)}`}async function nS(r){const e=await QI(r),t=tr().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:tS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=er(r,"network-request-failed"),m=tr().setTimeout(()=>{u(h)},YI.get());function g(){tr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const rS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iS=500,sS=600,oS="_blank",aS="http://localhost";class Ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lS(r,e,t,s=iS,o=sS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...rS,width:s.toString(),height:o.toString(),top:u,left:h},_=Bt().toLowerCase();t&&(m=l_(_)?oS:t),o_(_)&&(e=e||aS,g.scrollbars="yes");const w=Object.entries(g).reduce((R,[z,W])=>`${R}${z}=${W},`,"");if(BT(_)&&m!=="_self")return uS(e||"",m),new Ag(null);const T=window.open(e||"",m,w);ve(T,r,"popup-blocked");try{T.focus()}catch{}return new Ag(T)}function uS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const cS="__/auth/handler",hS="emulator/auth/handler",dS=encodeURIComponent("fac");async function Rg(r,e,t,s,o,u){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Ao,eventId:o};if(e instanceof y_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",f0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof Za){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${dS}=${encodeURIComponent(g)}`:"";return`${fS(r)}?${Ja(m).slice(1)}${_}`}function fS({config:r}){return r.emulator?Jd(r,hS):`https://${r.authDomain}/${cS}`}/**
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
 */const id="webStorageSupport";class pS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I_,this._completeRedirectFn=FI,this._overrideRedirectResult=OI}async _openPopup(e,t,s,o){var h;br((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Rg(e,t,s,wd(),o);return lS(e,u,tf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Rg(e,t,s,wd(),o);return yI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(br(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await nS(e),s=new jI(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(id,{type:id},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[id];u!==void 0&&t(!!u),Nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=WI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return f_()||a_()||Zd()}}const mS=pS;var Cg="@firebase/auth",Pg="1.12.1";/**
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
 */class gS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _S(r){_o(new cs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p_(r)},_=new KT(s,o,u,g);return eI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),_o(new cs("auth-internal",e=>{const t=lc(e.getProvider("auth").getImmediate());return(s=>new gS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ei(Cg,Pg,yS(r)),Ei(Cg,Pg,"esm2020")}/**
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
 */const vS=300,ES=By("authIdTokenMaxAge")||vS;let kg=null;const wS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>ES)return;const o=t==null?void 0:t.token;kg!==o&&(kg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function TS(r=Ky()){const e=Qd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ZT(r,{popupRedirectResolver:mS,persistence:[RI,pI,I_]}),s=By("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=wS(u.toString());cI(t,h,()=>h(t.currentUser)),uI(t,m=>h(m))}}const o=jy("auth");return o&&tI(t,`http://${o}`),t}function IS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}QT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=er("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",IS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_S("Browser");var SS="firebase",AS="12.10.0";/**
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
 */Ei(SS,AS,"app");var xg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ti,x_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,A){function C(){}C.prototype=A.prototype,k.F=A.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(x,N,b){for(var I=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)I[ke-2]=arguments[ke];return A.prototype[N].apply(x,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,A,C){C||(C=0);const x=Array(16);if(typeof A=="string")for(var N=0;N<16;++N)x[N]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(N=0;N<16;++N)x[N]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=k.g[0],C=k.g[1],N=k.g[2];let b=k.g[3],I;I=A+(b^C&(N^b))+x[0]+3614090360&4294967295,A=C+(I<<7&4294967295|I>>>25),I=b+(N^A&(C^N))+x[1]+3905402710&4294967295,b=A+(I<<12&4294967295|I>>>20),I=N+(C^b&(A^C))+x[2]+606105819&4294967295,N=b+(I<<17&4294967295|I>>>15),I=C+(A^N&(b^A))+x[3]+3250441966&4294967295,C=N+(I<<22&4294967295|I>>>10),I=A+(b^C&(N^b))+x[4]+4118548399&4294967295,A=C+(I<<7&4294967295|I>>>25),I=b+(N^A&(C^N))+x[5]+1200080426&4294967295,b=A+(I<<12&4294967295|I>>>20),I=N+(C^b&(A^C))+x[6]+2821735955&4294967295,N=b+(I<<17&4294967295|I>>>15),I=C+(A^N&(b^A))+x[7]+4249261313&4294967295,C=N+(I<<22&4294967295|I>>>10),I=A+(b^C&(N^b))+x[8]+1770035416&4294967295,A=C+(I<<7&4294967295|I>>>25),I=b+(N^A&(C^N))+x[9]+2336552879&4294967295,b=A+(I<<12&4294967295|I>>>20),I=N+(C^b&(A^C))+x[10]+4294925233&4294967295,N=b+(I<<17&4294967295|I>>>15),I=C+(A^N&(b^A))+x[11]+2304563134&4294967295,C=N+(I<<22&4294967295|I>>>10),I=A+(b^C&(N^b))+x[12]+1804603682&4294967295,A=C+(I<<7&4294967295|I>>>25),I=b+(N^A&(C^N))+x[13]+4254626195&4294967295,b=A+(I<<12&4294967295|I>>>20),I=N+(C^b&(A^C))+x[14]+2792965006&4294967295,N=b+(I<<17&4294967295|I>>>15),I=C+(A^N&(b^A))+x[15]+1236535329&4294967295,C=N+(I<<22&4294967295|I>>>10),I=A+(N^b&(C^N))+x[1]+4129170786&4294967295,A=C+(I<<5&4294967295|I>>>27),I=b+(C^N&(A^C))+x[6]+3225465664&4294967295,b=A+(I<<9&4294967295|I>>>23),I=N+(A^C&(b^A))+x[11]+643717713&4294967295,N=b+(I<<14&4294967295|I>>>18),I=C+(b^A&(N^b))+x[0]+3921069994&4294967295,C=N+(I<<20&4294967295|I>>>12),I=A+(N^b&(C^N))+x[5]+3593408605&4294967295,A=C+(I<<5&4294967295|I>>>27),I=b+(C^N&(A^C))+x[10]+38016083&4294967295,b=A+(I<<9&4294967295|I>>>23),I=N+(A^C&(b^A))+x[15]+3634488961&4294967295,N=b+(I<<14&4294967295|I>>>18),I=C+(b^A&(N^b))+x[4]+3889429448&4294967295,C=N+(I<<20&4294967295|I>>>12),I=A+(N^b&(C^N))+x[9]+568446438&4294967295,A=C+(I<<5&4294967295|I>>>27),I=b+(C^N&(A^C))+x[14]+3275163606&4294967295,b=A+(I<<9&4294967295|I>>>23),I=N+(A^C&(b^A))+x[3]+4107603335&4294967295,N=b+(I<<14&4294967295|I>>>18),I=C+(b^A&(N^b))+x[8]+1163531501&4294967295,C=N+(I<<20&4294967295|I>>>12),I=A+(N^b&(C^N))+x[13]+2850285829&4294967295,A=C+(I<<5&4294967295|I>>>27),I=b+(C^N&(A^C))+x[2]+4243563512&4294967295,b=A+(I<<9&4294967295|I>>>23),I=N+(A^C&(b^A))+x[7]+1735328473&4294967295,N=b+(I<<14&4294967295|I>>>18),I=C+(b^A&(N^b))+x[12]+2368359562&4294967295,C=N+(I<<20&4294967295|I>>>12),I=A+(C^N^b)+x[5]+4294588738&4294967295,A=C+(I<<4&4294967295|I>>>28),I=b+(A^C^N)+x[8]+2272392833&4294967295,b=A+(I<<11&4294967295|I>>>21),I=N+(b^A^C)+x[11]+1839030562&4294967295,N=b+(I<<16&4294967295|I>>>16),I=C+(N^b^A)+x[14]+4259657740&4294967295,C=N+(I<<23&4294967295|I>>>9),I=A+(C^N^b)+x[1]+2763975236&4294967295,A=C+(I<<4&4294967295|I>>>28),I=b+(A^C^N)+x[4]+1272893353&4294967295,b=A+(I<<11&4294967295|I>>>21),I=N+(b^A^C)+x[7]+4139469664&4294967295,N=b+(I<<16&4294967295|I>>>16),I=C+(N^b^A)+x[10]+3200236656&4294967295,C=N+(I<<23&4294967295|I>>>9),I=A+(C^N^b)+x[13]+681279174&4294967295,A=C+(I<<4&4294967295|I>>>28),I=b+(A^C^N)+x[0]+3936430074&4294967295,b=A+(I<<11&4294967295|I>>>21),I=N+(b^A^C)+x[3]+3572445317&4294967295,N=b+(I<<16&4294967295|I>>>16),I=C+(N^b^A)+x[6]+76029189&4294967295,C=N+(I<<23&4294967295|I>>>9),I=A+(C^N^b)+x[9]+3654602809&4294967295,A=C+(I<<4&4294967295|I>>>28),I=b+(A^C^N)+x[12]+3873151461&4294967295,b=A+(I<<11&4294967295|I>>>21),I=N+(b^A^C)+x[15]+530742520&4294967295,N=b+(I<<16&4294967295|I>>>16),I=C+(N^b^A)+x[2]+3299628645&4294967295,C=N+(I<<23&4294967295|I>>>9),I=A+(N^(C|~b))+x[0]+4096336452&4294967295,A=C+(I<<6&4294967295|I>>>26),I=b+(C^(A|~N))+x[7]+1126891415&4294967295,b=A+(I<<10&4294967295|I>>>22),I=N+(A^(b|~C))+x[14]+2878612391&4294967295,N=b+(I<<15&4294967295|I>>>17),I=C+(b^(N|~A))+x[5]+4237533241&4294967295,C=N+(I<<21&4294967295|I>>>11),I=A+(N^(C|~b))+x[12]+1700485571&4294967295,A=C+(I<<6&4294967295|I>>>26),I=b+(C^(A|~N))+x[3]+2399980690&4294967295,b=A+(I<<10&4294967295|I>>>22),I=N+(A^(b|~C))+x[10]+4293915773&4294967295,N=b+(I<<15&4294967295|I>>>17),I=C+(b^(N|~A))+x[1]+2240044497&4294967295,C=N+(I<<21&4294967295|I>>>11),I=A+(N^(C|~b))+x[8]+1873313359&4294967295,A=C+(I<<6&4294967295|I>>>26),I=b+(C^(A|~N))+x[15]+4264355552&4294967295,b=A+(I<<10&4294967295|I>>>22),I=N+(A^(b|~C))+x[6]+2734768916&4294967295,N=b+(I<<15&4294967295|I>>>17),I=C+(b^(N|~A))+x[13]+1309151649&4294967295,C=N+(I<<21&4294967295|I>>>11),I=A+(N^(C|~b))+x[4]+4149444226&4294967295,A=C+(I<<6&4294967295|I>>>26),I=b+(C^(A|~N))+x[11]+3174756917&4294967295,b=A+(I<<10&4294967295|I>>>22),I=N+(A^(b|~C))+x[2]+718787259&4294967295,N=b+(I<<15&4294967295|I>>>17),I=C+(b^(N|~A))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+A&4294967295,k.g[1]=k.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+b&4294967295}s.prototype.v=function(k,A){A===void 0&&(A=k.length);const C=A-this.blockSize,x=this.C;let N=this.h,b=0;for(;b<A;){if(N==0)for(;b<=C;)o(this,k,b),b+=this.blockSize;if(typeof k=="string"){for(;b<A;)if(x[N++]=k.charCodeAt(b++),N==this.blockSize){o(this,x),N=0;break}}else for(;b<A;)if(x[N++]=k[b++],N==this.blockSize){o(this,x),N=0;break}}this.h=N,this.o+=A},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var A=1;A<k.length-8;++A)k[A]=0;A=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=A&255,A/=256;for(this.v(k),k=Array(16),A=0,C=0;C<4;++C)for(let x=0;x<32;x+=8)k[A++]=this.g[C]>>>x&255;return k};function u(k,A){var C=m;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=A(k)}function h(k,A){this.h=A;const C=[];let x=!0;for(let N=k.length-1;N>=0;N--){const b=k[N]|0;x&&b==A||(C[N]=b,x=!1)}this.g=C}var m={};function g(k){return-128<=k&&k<128?u(k,function(A){return new h([A|0],A<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return T;if(k<0)return B(_(-k));const A=[];let C=1;for(let x=0;k>=C;x++)A[x]=k/C|0,C*=4294967296;return new h(A,0)}function w(k,A){if(k.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(k.charAt(0)=="-")return B(w(k.substring(1),A));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=_(Math.pow(A,8));let x=T;for(let b=0;b<k.length;b+=8){var N=Math.min(8,k.length-b);const I=parseInt(k.substring(b,b+N),A);N<8?(N=_(Math.pow(A,N)),x=x.j(N).add(_(I))):(x=x.j(C),x=x.add(_(I)))}return x}var T=g(0),R=g(1),z=g(16777216);r=h.prototype,r.m=function(){if($(this))return-B(this).m();let k=0,A=1;for(let C=0;C<this.g.length;C++){const x=this.i(C);k+=(x>=0?x:4294967296+x)*A,A*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(W(this))return"0";if($(this))return"-"+B(this).toString(k);const A=_(Math.pow(k,6));var C=this;let x="";for(;;){const N=fe(C,A).g;C=oe(C,N.j(A));let b=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=N,W(C))return b+x;for(;b.length<6;)b="0"+b;x=b+x}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function W(k){if(k.h!=0)return!1;for(let A=0;A<k.g.length;A++)if(k.g[A]!=0)return!1;return!0}function $(k){return k.h==-1}r.l=function(k){return k=oe(this,k),$(k)?-1:W(k)?0:1};function B(k){const A=k.g.length,C=[];for(let x=0;x<A;x++)C[x]=~k.g[x];return new h(C,~k.h).add(R)}r.abs=function(){return $(this)?B(this):this},r.add=function(k){const A=Math.max(this.g.length,k.g.length),C=[];let x=0;for(let N=0;N<=A;N++){let b=x+(this.i(N)&65535)+(k.i(N)&65535),I=(b>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);x=I>>>16,b&=65535,I&=65535,C[N]=I<<16|b}return new h(C,C[C.length-1]&-2147483648?-1:0)};function oe(k,A){return k.add(B(A))}r.j=function(k){if(W(this)||W(k))return T;if($(this))return $(k)?B(this).j(B(k)):B(B(this).j(k));if($(k))return B(this.j(B(k)));if(this.l(z)<0&&k.l(z)<0)return _(this.m()*k.m());const A=this.g.length+k.g.length,C=[];for(var x=0;x<2*A;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(let N=0;N<k.g.length;N++){const b=this.i(x)>>>16,I=this.i(x)&65535,ke=k.i(N)>>>16,rt=k.i(N)&65535;C[2*x+2*N]+=I*rt,le(C,2*x+2*N),C[2*x+2*N+1]+=b*rt,le(C,2*x+2*N+1),C[2*x+2*N+1]+=I*ke,le(C,2*x+2*N+1),C[2*x+2*N+2]+=b*ke,le(C,2*x+2*N+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new h(C,0)};function le(k,A){for(;(k[A]&65535)!=k[A];)k[A+1]+=k[A]>>>16,k[A]&=65535,A++}function te(k,A){this.g=k,this.h=A}function fe(k,A){if(W(A))throw Error("division by zero");if(W(k))return new te(T,T);if($(k))return A=fe(B(k),A),new te(B(A.g),B(A.h));if($(A))return A=fe(k,B(A)),new te(B(A.g),A.h);if(k.g.length>30){if($(k)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var C=R,x=A;x.l(k)<=0;)C=Ce(C),x=Ce(x);var N=Te(C,1),b=Te(x,1);for(x=Te(x,2),C=Te(C,2);!W(x);){var I=b.add(x);I.l(k)<=0&&(N=N.add(C),b=I),x=Te(x,1),C=Te(C,1)}return A=oe(k,N.j(A)),new te(N,A)}for(N=T;k.l(A)>=0;){for(C=Math.max(1,Math.floor(k.m()/A.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),b=_(C),I=b.j(A);$(I)||I.l(k)>0;)C-=x,b=_(C),I=b.j(A);W(b)&&(b=R),N=N.add(b),k=oe(k,I)}return new te(N,k)}r.B=function(k){return fe(this,k).h},r.and=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<A;x++)C[x]=this.i(x)&k.i(x);return new h(C,this.h&k.h)},r.or=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<A;x++)C[x]=this.i(x)|k.i(x);return new h(C,this.h|k.h)},r.xor=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<A;x++)C[x]=this.i(x)^k.i(x);return new h(C,this.h^k.h)};function Ce(k){const A=k.g.length+1,C=[];for(let x=0;x<A;x++)C[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(C,k.h)}function Te(k,A){const C=A>>5;A%=32;const x=k.g.length-C,N=[];for(let b=0;b<x;b++)N[b]=A>0?k.i(b+C)>>>A|k.i(b+C+1)<<32-A:k.i(b+C);return new h(N,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,x_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ti=h}).apply(typeof xg<"u"?xg:typeof self<"u"?self:typeof window<"u"?window:{});var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var N_,Pa,b_,Du,Sd,D_,V_,O_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Iu=="object"&&Iu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&y.push([E,p[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function w(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function T(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(E,M,j){for(var Z=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)Z[Ie-2]=arguments[Ie];return p.prototype[M].apply(E,Z)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function W(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=l.length||0;const j=M.length||0;l.length=y+j;for(let Z=0;Z<j;Z++)l[y+Z]=M[Z]}else l.push(M)}}class ${constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function B(l){h.setTimeout(()=>{throw l},0)}function oe(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class le{constructor(){this.h=this.g=null}add(p,y){const E=te.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var te=new $(()=>new fe,l=>l.reset());class fe{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Te=!1,k=new le,A=()=>{const l=Promise.resolve(void 0);Ce=()=>{l.then(C)}};function C(){for(var l;l=oe();){try{l.h.call(l.g)}catch(y){B(y)}var p=te;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Te=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l})();function I(l){return/^[\s\xa0]*$/.test(l)}function ke(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}T(ke,N),ke.prototype.init=function(l,p){const y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&ke.Z.h.call(this)},ke.prototype.h=function(){ke.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),vt=0;function qe(l,p,y,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++vt,this.da=this.fa=!1}function ee(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function de(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function ie(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function O(l){const p={};for(const y in l)p[y]=l[y];return p}const q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(l,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let j=0;j<q.length;j++)y=q[j],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function Re(l){this.src=l,this.g={},this.h=0}Re.prototype.add=function(l,p,y,E,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const Z=Ne(l,p,E,M);return Z>-1?(p=l[Z],y||(p.fa=!1)):(p=new qe(p,this.src,j,!!E,M),p.fa=y,l.push(p)),p};function xe(l,p){const y=p.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(ee(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Ne(l,p,y,E){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==E)return M}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Me={};function He(l,p,y,E,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)He(l,p[j],y,E,M);return null}return y=bo(y),l&&l[rt]?l.J(p,y,m(E)?!!E.capture:!1,M):$t(l,p,y,!1,E,M)}function $t(l,p,y,E,M,j){if(!p)throw Error("Invalid event type");const Z=m(M)?!!M.capture:!!M;let Ie=ws(l);if(Ie||(l[ze]=Ie=new Re(l)),y=Ie.add(p,y,E,Z,j),y.proxy)return y;if(E=vs(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)b||(M=Z),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(Es(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function vs(){function l(y){return p.call(l.src,l.listener,y)}const p=ol;return l}function No(l,p,y,E,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)No(l,p[j],y,E,M);else E=m(E)?!!E.capture:!!E,y=bo(y),l&&l[rt]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],y=Ne(p,y,E,M),y>-1&&(ee(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=ws(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ne(p,y,E,M)),(y=l>-1?p[l]:null)&&Lr(y))}function Lr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[rt])xe(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(Es(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=ws(p))?(xe(y,l),y.h==0&&(y.src=null,p[ze]=null)):ee(l)}}}function Es(l){return l in Me?Me[l]:Me[l]="on"+l}function ol(l,p){if(l.da)l=!0;else{p=new ke(p,this);const y=l.listener,E=l.ha||l.src;l.fa&&Lr(l),l=y.call(E,p)}return l}function ws(l){return l=l[ze],l instanceof Re?l:null}var Ni="__closure_events_fn_"+(Math.random()*1e9>>>0);function bo(l){return typeof l=="function"?l:(l[Ni]||(l[Ni]=function(p){return l.handleEvent(p)}),l[Ni])}function ct(){x.call(this),this.i=new Re(this),this.M=this,this.G=null}T(ct,x),ct.prototype[rt]=!0,ct.prototype.removeEventListener=function(l,p,y,E){No(this,l,p,y,E)};function ot(l,p){var y,E=l.G;if(E)for(y=[];E;E=E.G)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var M=p;p=new N(E,l),Ae(p,M)}M=!0;let j,Z;if(y)for(Z=y.length-1;Z>=0;Z--)j=p.g=y[Z],M=vn(j,E,!0,p)&&M;if(j=p.g=l,M=vn(j,E,!0,p)&&M,M=vn(j,E,!1,p)&&M,y)for(Z=0;Z<y.length;Z++)j=p.g=y[Z],M=vn(j,E,!1,p)&&M}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let E=0;E<y.length;E++)ee(y[E]);delete l.g[p],l.h--}}this.G=null},ct.prototype.J=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},ct.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function vn(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const Z=p[j];if(Z&&!Z.da&&Z.capture==y){const Ie=Z.listener,at=Z.ha||Z.src;Z.fa&&xe(l.i,Z),M=Ie.call(at,E)!==!1&&M}}return M&&!E.defaultPrevented}function Do(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Vo(l){l.g=Do(()=>{l.g=null,l.i&&(l.i=!1,Vo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class al extends x{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mr(l){x.call(this),this.h=l,this.g={}}T(Mr,x);var Oo=[];function Ts(l){de(l.g,function(p,y){this.g.hasOwnProperty(y)&&Lr(p)},l),l.g={}}Mr.prototype.N=function(){Mr.Z.N.call(this),Ts(this)},Mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fr=h.JSON.stringify,ll=h.JSON.parse,bi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Ur(){}function ul(){}var jr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Is(){N.call(this,"d")}T(Is,N);function Lo(){N.call(this,"c")}T(Lo,N);var En={},Ss=null;function zr(){return Ss=Ss||new ct}En.Ia="serverreachability";function As(l){N.call(this,En.Ia,l)}T(As,N);function ar(l){const p=zr();ot(p,new As(p))}En.STAT_EVENT="statevent";function lr(l,p){N.call(this,En.STAT_EVENT,l),this.stat=p}T(lr,N);function it(l){const p=zr();ot(p,new lr(p,l))}En.Ja="timingevent";function Mo(l,p){N.call(this,En.Ja,l),this.size=p}T(Mo,N);function Br(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function $r(){this.g=!0}$r.prototype.ua=function(){this.g=!1};function cl(l,p,y,E,M,j){l.info(function(){if(l.g)if(j){var Z="",Ie=j.split("&");for(let $e=0;$e<Ie.length;$e++){var at=Ie[$e].split("=");if(at.length>1){const ht=at[0];at=at[1];const sn=ht.split("_");Z=sn.length>=2&&sn[1]=="type"?Z+(ht+"="+at+"&"):Z+(ht+"=redacted&")}}}else Z=null;else Z=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+Z})}function hl(l,p,y,E,M,j,Z){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+j+" "+Z})}function Vn(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Di(l,y)+(E?" "+E:"")})}function dl(l,p){l.info(function(){return"TIMEOUT: "+p})}$r.prototype.info=function(){};function Di(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var y=j[l];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<E.length;Z++)E[Z]=""}}}}return Fr(j)}catch{return p}}var Hr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fl;function ur(){}T(ur,Ur),ur.prototype.g=function(){return new XMLHttpRequest},fl=new ur;function On(l){return encodeURIComponent(String(l))}function Rs(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function un(l,p,y,E){this.j=l,this.i=p,this.l=y,this.S=E||1,this.V=new Mr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pl}function pl(){this.i=null,this.g="",this.h=!1}var ml={},Fo={};function wn(l,p,y){l.M=1,l.A=hr(cn(p)),l.u=y,l.R=!0,Uo(l,null)}function Uo(l,p){l.F=Date.now(),Vi(l),l.B=cn(l.A);var y=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Qo(y.i,"t",E),l.C=0,y=l.j.L,l.h=new pl,l.g=Al(l.j,y?p:null,!l.u),l.P>0&&(l.O=new al(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Oo[0]=M.toString()),M=Oo);for(let j=0;j<M.length;j++){const Z=He(y,M[j],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),ar(),cl(l.i,l.v,l.B,l.l,l.S,l.u)}un.prototype.ba=function(l){l=l.target;const p=this.O;p&&Bn(l)==3?p.j():this.Y(l)},un.prototype.Y=function(l){try{if(l==this.g)e:{const Ie=Bn(this.g),at=this.g.ya(),$e=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||Il(this.g)))){this.K||Ie!=4||at==7||(at==8||$e<=0?ar(3):ar(2)),Cs(this);var p=this.g.ca();this.X=p;var y=gl(this);if(this.o=p==200,hl(this.i,this.v,this.B,this.l,this.S,Ie,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(E)){var j=E;break t}}j=null}if(l=j)Vn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,l);else{this.o=!1,this.m=3,it(12),cr(this),Oi(this);break e}}if(this.R){l=!0;let ht;for(;!this.K&&this.C<y.length;)if(ht=_l(this,y),ht==Fo){Ie==4&&(this.m=4,it(14),l=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==ml){this.m=4,it(15),Vn(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else Vn(this.i,this.l,ht,null),Ke(this,ht);if(yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||y.length!=0||this.h.h||(this.m=1,it(16),l=!1),this.o=this.o&&l,!l)Vn(this.i,this.l,y,"[Invalid Chunked Response]"),cr(this),Oi(this);else if(y.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Hi(Z),Z.P=!0,it(11))}}else Vn(this.i,this.l,y,null),Ke(this,y);Ie==4&&cr(this),this.o&&!this.K&&(Ie==4?Ms(this.j,this):(this.o=!1,Vi(this)))}else Jo(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),cr(this),Oi(this)}}}catch{}finally{}};function gl(l){if(!yl(l))return l.g.la();const p=Il(l.g);if(p==="")return"";let y="";const E=p.length,M=Bn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return cr(l),Oi(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<E;j++)l.h.h=!0,y+=l.h.i.decode(p[j],{stream:!(M&&j==E-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function yl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function _l(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?Fo:(y=Number(p.substring(y,E)),isNaN(y)?ml:(E+=1,E+y>p.length?Fo:(p=p.slice(E,E+y),l.C=E+y,p)))}un.prototype.cancel=function(){this.K=!0,cr(this)};function Vi(l){l.T=Date.now()+l.H,jo(l,l.H)}function jo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Br(_(l.aa,l),p)}function Cs(l){l.D&&(h.clearTimeout(l.D),l.D=null)}un.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(dl(this.i,this.B),this.M!=2&&(ar(),it(17)),cr(this),this.m=2,Oi(this)):jo(this,this.T-l)};function Oi(l){l.j.I==0||l.K||Ms(l.j,l)}function cr(l){Cs(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Ts(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ke(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||Bo(y.h,l))){if(!l.L&&Bo(y.h,l)&&y.I==3){try{var E=y.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)Ls(y),nn(y);else break e;Wn(y),it(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Br(_(y.Va,y),6e3));Li(y.h)<=1&&y.ta&&(y.ta=void 0)}else rn(y,11)}else if((l.L||y.g==l)&&Ls(y),!I(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let $e=M[p];const ht=$e[0];if(!(ht<=y.K))if(y.K=ht,$e=$e[1],y.I==2)if($e[0]=="c"){y.M=$e[1],y.ba=$e[2];const sn=$e[3];sn!=null&&(y.ka=sn,y.j.info("VER="+y.ka));const gr=$e[4];gr!=null&&(y.za=gr,y.j.info("SVER="+y.za));const qn=$e[5];qn!=null&&typeof qn=="number"&&qn>0&&(E=1.5*qn,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Gn=l.g;if(Gn){const js=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var j=E.h;j.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ks(j,j.h),j.h=null))}if(E.G){const ea=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;ea&&(E.wa=ea,je(E.J,E.G,ea))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var Z=l;if(E.na=Zo(E,E.L?E.ba:null,E.W),Z.L){Mi(E.h,Z);var Ie=Z,at=E.O;at&&(Ie.H=at),Ie.D&&(Cs(Ie),Vi(Ie)),E.g=Z}else Vt(E);y.i.length>0&&mr(y)}else $e[0]!="stop"&&$e[0]!="close"||rn(y,7);else y.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?rn(y,7):Vs(y):$e[0]!="noop"&&y.l&&y.l.qa($e),y.A=0)}}ar(4)}catch{}}var Sc=class{constructor(l,p){this.g=l,this.map=p}};function Ps(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Li(l){return l.h?1:l.g?l.g.size:0}function Bo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function ks(l,p){l.g?l.g.add(p):l.h=p}function Mi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ps.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Zt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return z(l.i)}var vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const E=l[y].indexOf("=");let M,j=null;E>=0?(M=l[y].substring(0,E),j=l[y].substring(E+1)):M=l[y],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ln(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Ln?(this.l=l.l,Fi(this,l.j),this.o=l.o,this.g=l.g,Mn(this,l.u),this.h=l.h,qr(this,Yo(l.i)),this.m=l.m):l&&(p=String(l).match(vl))?(this.l=!1,Fi(this,p[1]||"",!0),this.o=Ui(p[2]||""),this.g=Ui(p[3]||"",!0),Mn(this,p[4]),this.h=Ui(p[5]||"",!0),qr(this,p[6]||"",!0),this.m=Ui(p[7]||"")):(this.l=!1,this.i=new Oe(null,this.l))}Ln.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(ji(p,Ho,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(ji(p,Ho,!0),"@"),l.push(On(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(ji(y,y.charAt(0)=="/"?zi:Wo,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",ji(y,qo)),l.join("")},Ln.prototype.resolve=function(l){const p=cn(this);let y=!!l.j;y?Fi(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var E=l.h;if(y)Mn(p,l.u);else if(y=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let Z=0;Z<M.length;){const Ie=M[Z++];Ie=="."?E&&Z==M.length&&j.push(""):Ie==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&Z==M.length&&j.push("")):(j.push(Ie),E=!0)}E=j.join("/")}else E=M}return y?p.h=E:y=l.i.toString()!=="",y?qr(p,Yo(l.i)):y=!!l.m,y&&(p.m=l.m),p};function cn(l){return new Ln(l)}function Fi(l,p,y){l.j=y?Ui(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Mn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function qr(l,p,y){p instanceof Oe?(l.i=p,Ns(l.i,l.l)):(y||(p=ji(p,Ac)),l.i=new Oe(p,l.l))}function je(l,p,y){l.i.set(p,y)}function hr(l){return je(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Ui(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ji(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,$o),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $o(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ho=/[#\/\?@]/g,Wo=/[#\?:]/g,zi=/[#\?]/g,Ac=/[#\?@]/g,qo=/#/g;function Oe(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Fn(l){l.g||(l.g=new Map,l.h=0,l.i&&en(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Oe.prototype,r.add=function(l,p){Fn(this),this.i=null,l=Un(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Go(l,p){Fn(l),p=Un(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function xs(l,p){return Fn(l),p=Un(l,p),l.g.has(p)}r.forEach=function(l,p){Fn(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(p,M,E,this)},this)},this)};function Ko(l,p){Fn(l);let y=[];if(typeof p=="string")xs(l,p)&&(y=y.concat(l.g.get(Un(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}r.set=function(l,p){return Fn(this),this.i=null,l=Un(this,l),xs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=Ko(this,l),l.length>0?String(l[0]):p):p};function Qo(l,p,y){Go(l,p),y.length>0&&(l.i=null,l.g.set(Un(l,p),z(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var y=p[E];const M=On(y);y=Ko(this,y);for(let j=0;j<y.length;j++){let Z=M;y[j]!==""&&(Z+="="+On(y[j])),l.push(Z)}}return this.i=l.join("&")};function Yo(l){const p=new Oe;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Un(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ns(l,p){p&&!l.j&&(Fn(l),l.i=null,l.g.forEach(function(y,E){const M=E.toLowerCase();E!=M&&(Go(this,E),Qo(this,M,y))},l)),l.j=p}function jn(l,p){const y=new $r;if(h.Image){const E=new Image;E.onload=w(Rt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=w(Rt,y,"TestLoadImage: error",!1,p,E),E.onabort=w(Rt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(Rt,y,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function zn(l,p){const y=new $r,E=new AbortController,M=setTimeout(()=>{E.abort(),Rt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?Rt(y,"TestPingServer: ok",!0,p):Rt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Rt(y,"TestPingServer: error",!1,p)})}function Rt(l,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function Bi(){this.g=new bi}function dr(l){this.i=l.Sb||null,this.h=l.ab||!1}T(dr,Ur),dr.prototype.g=function(){return new tn(this.i,this.h)};function tn(l,p){ct.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(tn,ct),r=tn.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,Tn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;El(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function El(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Gr(this):Tn(this),this.readyState==3&&El(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,Gr(this))},r.Na=function(l){this.g&&(this.response=l,Gr(this))},r.ga=function(){this.g&&Gr(this)};function Gr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Tn(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function Tn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function wl(l){let p="";return de(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function bs(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=wl(y),typeof l=="string"?y!=null&&On(y):je(l,p,y))}function We(l){ct.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(We,ct);var Tl=/^https?$/i,Rc=["POST","PUT"];r=We.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fl.g(),this.g.onreadystatechange=R(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){Kr(this,j);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Rc,p,void 0)>=0)||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of y)this.g.setRequestHeader(j,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){Kr(this,j)}};function Kr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Qr(l),pr(l)}function Qr(l){l.A||(l.A=!0,ot(l,"complete"),ot(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,ot(this,"complete"),ot(this,"abort"),pr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),We.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?fr(this):this.Xa())},r.Xa=function(){fr(this)};function fr(l){if(l.h&&typeof u<"u"){if(l.v&&Bn(l)==4)setTimeout(l.Ca.bind(l),0);else if(ot(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=j===0){let Z=String(l.D).match(vl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),E=!Tl.test(Z?Z.toLowerCase():"")}y=E}if(y)ot(l,"complete"),ot(l,"success");else{l.o=6;try{var M=Bn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Qr(l)}}finally{pr(l)}}}}function pr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||ot(l,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}r.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),ll(p)}};function Il(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Jo(l){const p={};l=(l.g&&Bn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(I(l[E]))continue;var y=Rs(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[M]||[];p[M]=j,j.push(y)}ie(p,function(E){return E.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Ds(l){this.za=0,this.i=[],this.j=new $r,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$n("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$n("baseRetryDelayMs",5e3,l),this.Za=$n("retryDelaySeedMs",1e4,l),this.Ta=$n("forwardChannelMaxRetries",2,l),this.va=$n("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ps(l&&l.concurrentRequestLimit),this.Ba=new Bi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ds.prototype,r.ka=8,r.I=1,r.connect=function(l,p,y,E){it(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=Zo(this,null,this.W),mr(this)};function Vs(l){if(Os(l),l.I==3){var p=l.V++,y=cn(l.J);if(je(y,"SID",l.M),je(y,"RID",p),je(y,"TYPE","terminate"),Hn(l,y),p=new un(l,l.j,p),p.M=2,p.A=hr(cn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Al(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Vi(p)}Wi(l)}function nn(l){l.g&&(Hi(l),l.g.cancel(),l.g=null)}function Os(l){nn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ls(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function mr(l){if(!zo(l.h)&&!l.m){l.m=!0;var p=l.Ea;Ce||A(),Te||(Ce(),Te=!0),k.add(p,l),l.D=0}}function Sl(l,p){return Li(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Br(_(l.Ea,l,p),Fs(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new un(this,this.j,l);let j=this.o;if(this.U&&(j?(j=O(j),Ae(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Xo(this,M,p),y=cn(this.J),je(y,"RID",l),je(y,"CVER",22),this.G&&je(y,"X-HTTP-Session-Id",this.G),Hn(this,y),j&&(this.R?p="headers="+On(wl(j))+"&"+p:this.u&&bs(y,this.u,j)),ks(this.h,M),this.Ra&&je(y,"TYPE","init"),this.S?(je(y,"$req",p),je(y,"SID","null"),M.U=!0,wn(M,y,null)):wn(M,y,p),this.I=2}}else this.I==3&&(l?$i(this,l):this.i.length==0||zo(this.h)||$i(this))};function $i(l,p){var y;p?y=p.l:y=l.V++;const E=cn(l.J);je(E,"SID",l.M),je(E,"RID",y),je(E,"AID",l.K),Hn(l,E),l.u&&l.o&&bs(E,l.u,l.o),y=new un(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Xo(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),ks(l.h,y),wn(y,E,p)}function Hn(l,p){l.H&&de(l.H,function(y,E){je(p,E,y)}),l.l&&de({},function(y,E){je(p,E,y)})}function Xo(l,p,y){y=Math.min(l.i.length,y);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ie=-1;for(;;){const at=["count="+y];Ie==-1?y>0?(Ie=M[0].g,at.push("ofs="+Ie)):Ie=0:at.push("ofs="+Ie);let $e=!0;for(let ht=0;ht<y;ht++){var j=M[ht].g;const sn=M[ht].map;if(j-=Ie,j<0)Ie=Math.max(0,M[ht].g-100),$e=!1;else try{j="req"+j+"_"||"";try{var Z=sn instanceof Map?sn:Object.entries(sn);for(const[gr,qn]of Z){let Gn=qn;m(qn)&&(Gn=Fr(qn)),at.push(j+gr+"="+encodeURIComponent(Gn))}}catch(gr){throw at.push(j+"type="+encodeURIComponent("_badmap")),gr}}catch{E&&E(sn)}}if($e){Z=at.join("&");break e}}Z=void 0}return l=l.i.splice(0,y),p.G=l,Z}function Vt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Ce||A(),Te||(Ce(),Te=!0),k.add(p,l),l.A=0}}function Wn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Br(_(l.Da,l),Fs(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,Yr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Br(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),nn(this),Yr(this))};function Hi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Yr(l){l.g=new un(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=cn(l.na);je(p,"RID","rpc"),je(p,"SID",l.M),je(p,"AID",l.K),je(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&je(p,"TO",l.ia),je(p,"TYPE","xmlhttp"),Hn(l,p),l.u&&l.o&&bs(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=hr(cn(p)),y.u=null,y.R=!0,Uo(y,l)}r.Va=function(){this.C!=null&&(this.C=null,nn(this),Wn(this),it(19))};function Ls(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ms(l,p){var y=null;if(l.g==p){Ls(l),Hi(l),l.g=null;var E=2}else if(Bo(l.h,p))y=p.G,Mi(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=zr(),ot(E,new Mo(E,y)),mr(l)}else Vt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&Sl(l,p)||E==2&&Wn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),M){case 1:rn(l,5);break;case 4:rn(l,10);break;case 3:rn(l,6);break;default:rn(l,2)}}}function Fs(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function rn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),E=l.Ua;const M=!E;E=new Ln(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Fi(E,"https"),hr(E),M?jn(E.toString(),y):zn(E.toString(),y)}else it(2);l.I=0,l.l&&l.l.pa(p),Wi(l),Os(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Wi(l){if(l.I=0,l.ja=[],l.l){const p=Zt(l.h);(p.length!=0||l.i.length!=0)&&(W(l.ja,p),W(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Zo(l,p,y){var E=y instanceof Ln?cn(y):new Ln(y);if(E.g!="")p&&(E.g=p+"."+E.g),Mn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new Ln(null);E&&Fi(j,E),p&&(j.g=p),M&&Mn(j,M),y&&(j.h=y),E=j}return y=l.G,p=l.wa,y&&p&&je(E,y,p),je(E,"VER",l.ka),Hn(l,E),E}function Al(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new We(new dr({ab:y})):new We(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rl(){}r=Rl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Us(){}Us.prototype.g=function(l,p){return new Ct(l,p)};function Ct(l,p){ct.call(this),this.g=new Ds(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!I(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!I(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Jr(this)}T(Ct,ct),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Vs(this.g)},Ct.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=Fr(l),l=y);p.i.push(new Sc(p.Ya++,l)),p.I==3&&mr(p)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Vs(this.g),delete this.g,Ct.Z.N.call(this)};function Cl(l){Is.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}T(Cl,Is);function Pl(){Lo.call(this),this.status=1}T(Pl,Lo);function Jr(l){this.g=l}T(Jr,Rl),Jr.prototype.ra=function(){ot(this.g,"a")},Jr.prototype.qa=function(l){ot(this.g,new Cl(l))},Jr.prototype.pa=function(l){ot(this.g,new Pl)},Jr.prototype.oa=function(){ot(this.g,"b")},Us.prototype.createWebChannel=Us.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,O_=function(){return new Us},V_=function(){return zr()},D_=En,Sd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Hr.NO_ERROR=0,Hr.TIMEOUT=8,Hr.HTTP_ERROR=6,Du=Hr,Wr.COMPLETE="complete",b_=Wr,ul.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Pa=ul,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,N_=We}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
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
 */let Co="12.10.0";function RS(r){Co=r}/**
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
 */const ds=new Gd("@firebase/firestore");function ao(){return ds.logLevel}function re(r,...e){if(ds.logLevel<=be.DEBUG){const t=e.map(rf);ds.debug(`Firestore (${Co}): ${r}`,...t)}}function Dr(r,...e){if(ds.logLevel<=be.ERROR){const t=e.map(rf);ds.error(`Firestore (${Co}): ${r}`,...t)}}function fs(r,...e){if(ds.logLevel<=be.WARN){const t=e.map(rf);ds.warn(`Firestore (${Co}): ${r}`,...t)}}function rf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function ye(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,L_(r,s,t)}function L_(r,e,t){let s=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Dr(s),new Error(s)}function Be(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||L_(e,o,s)}function Se(r,e){return r}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Or{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ii{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class M_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class PS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class kS{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Ii;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ii,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ii)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string",31837,{l:s}),new M_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class xS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class NS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new xS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ng{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ng(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ng(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function DS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class sf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=DS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function De(r,e){return r<e?-1:r>e?1:0}function Ad(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return sd(o)===sd(u)?De(o,u):sd(o)?1:-1}return De(r.length,e.length)}const VS=55296,OS=57343;function sd(r){const e=r.charCodeAt(0);return e>=VS&&e<=OS}function vo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const bg="__name__";class Zn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Zn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return De(e.length,t.length)}static compareSegments(e,t){const s=Zn.isNumericId(e),o=Zn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Zn.extractNumericId(e).compare(Zn.extractNumericId(t)):Ad(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ti.fromString(e.substring(4,e.length-2))}}class tt extends Zn{construct(e,t,s){return new tt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new tt(t)}static emptyPath(){return new tt([])}}const LS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Zn{construct(e,t,s){return new bt(e,t,s)}static isValidIdentifier(e){return LS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bg}static keyField(){return new bt([bg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new he(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new he(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new he(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(tt.fromString(e))}static fromName(e){return new ge(tt.fromString(e).popFirst(5))}static empty(){return new ge(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new tt(e.slice()))}}/**
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
 */function MS(r,e,t){if(!t)throw new he(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function FS(r,e,t,s){if(e===!0&&s===!0)throw new he(Q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Dg(r){if(!ge.isDocumentKey(r))throw new he(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function F_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function of(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ye(12329,{type:typeof r})}function za(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=of(r);throw new he(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function pt(r,e){const t={typeString:r};return e&&(t.value=e),t}function tl(r,e){if(!F_(r))throw new he(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new he(Q.INVALID_ARGUMENT,t);return!0}/**
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
 */const Vg=-62135596800,Og=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Og);return new Je(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vg)throw new he(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Og}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(tl(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:pt("string",Je._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Je(0,0))}static max(){return new we(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ba=-1;function US(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Je(t+1,0):new Je(t,s));return new Ai(o,ge.empty(),e)}function jS(r){return new Ai(r.readTime,r.key,Ba)}class Ai{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ai(we.min(),ge.empty(),Ba)}static max(){return new Ai(we.max(),ge.empty(),Ba)}}function zS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
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
 */const BS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $S{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Po(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==BS)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function HS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class hc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}hc.ce=-1;/**
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
 */const af=-1;function dc(r){return r==null}function Gu(r){return r===0&&1/r==-1/0}function WS(r){return typeof r=="number"&&Number.isInteger(r)&&!Gu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const U_="";function qS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Lg(e)),e=GS(r.get(t),e);return Lg(e)}function GS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case U_:t+="";break;default:t+=u}}return t}function Lg(r){return r+U_+""}/**
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
 */function Mg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ms(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function j_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Su(this.root,e,this.comparator,!1)}getReverseIterator(){return new Su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Su(this.root,e,this.comparator,!0)}}class Su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=u??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fg(this.data.getIterator())}getIteratorFrom(e){return new Fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class Fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Nn([])}unionWith(e){let t=new _t(bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class z_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new z_("Invalid base64 string: "+u):u}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const KS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(r){if(Be(!!r,39018),typeof r=="string"){let e=0;const t=KS.exec(r);if(Be(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ut(r.seconds),nanos:ut(r.nanos)}}function ut(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ci(r){return typeof r=="string"?Dt.fromBase64String(r):Dt.fromUint8Array(r)}/**
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
 */const B_="server_timestamp",$_="__type__",H_="__previous_value__",W_="__local_write_time__";function lf(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[$_])==null?void 0:s.stringValue)===B_}function fc(r){const e=r.mapValue.fields[H_];return lf(e)?fc(e):e}function $a(r){const e=Ri(r.mapValue.fields[W_].timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class QS{constructor(e,t,s,o,u,h,m,g,_,w,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w,this.apiKey=T}}const Ku="(default)";class Ha{constructor(e,t){this.projectId=e,this.database=t||Ku}static empty(){return new Ha("","")}get isDefaultDatabase(){return this.database===Ku}isEqual(e){return e instanceof Ha&&e.projectId===this.projectId&&e.database===this.database}}function YS(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new he(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(r.options.projectId,e)}/**
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
 */const q_="__type__",JS="__max__",Au={mapValue:{}},G_="__vector__",Qu="value";function Pi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?lf(r)?4:ZS(r)?9007199254740991:XS(r)?10:11:ye(28295,{value:r})}function sr(r,e){if(r===e)return!0;const t=Pi(r);if(t!==Pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return $a(r).isEqual($a(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ri(o.timestampValue),m=Ri(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return Ci(o.bytesValue).isEqual(Ci(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return ut(o.geoPointValue.latitude)===ut(u.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ut(o.integerValue)===ut(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ut(o.doubleValue),m=ut(u.doubleValue);return h===m?Gu(h)===Gu(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return vo(r.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Mg(h)!==Mg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!sr(h[g],m[g])))return!1;return!0})(r,e);default:return ye(52216,{left:r})}}function Wa(r,e){return(r.values||[]).find((t=>sr(t,e)))!==void 0}function Eo(r,e){if(r===e)return 0;const t=Pi(r),s=Pi(e);if(t!==s)return De(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ut(u.integerValue||u.doubleValue),g=ut(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Ug(r.timestampValue,e.timestampValue);case 4:return Ug($a(r),$a(e));case 5:return Ad(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ci(u),g=Ci(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=De(m[_],g[_]);if(w!==0)return w}return De(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=De(ut(u.latitude),ut(h.latitude));return m!==0?m:De(ut(u.longitude),ut(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return jg(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var R,z,W,$;const m=u.fields||{},g=h.fields||{},_=(R=m[Qu])==null?void 0:R.arrayValue,w=(z=g[Qu])==null?void 0:z.arrayValue,T=De(((W=_==null?void 0:_.values)==null?void 0:W.length)||0,(($=w==null?void 0:w.values)==null?void 0:$.length)||0);return T!==0?T:jg(_,w)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Au.mapValue&&h===Au.mapValue)return 0;if(u===Au.mapValue)return 1;if(h===Au.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const R=Ad(g[T],w[T]);if(R!==0)return R;const z=Eo(m[g[T]],_[w[T]]);if(z!==0)return z}return De(g.length,w.length)})(r.mapValue,e.mapValue);default:throw ye(23264,{he:t})}}function Ug(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=Ri(r),s=Ri(e),o=De(t.seconds,s.seconds);return o!==0?o:De(t.nanos,s.nanos)}function jg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Eo(t[o],s[o]);if(u)return u}return De(t.length,s.length)}function wo(r){return Rd(r)}function Rd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ri(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ci(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ge.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Rd(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Rd(t.fields[h])}`;return o+"}"})(r.mapValue):ye(61005,{value:r})}function Vu(r){switch(Pi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fc(r);return e?16+Vu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ci(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Vu(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ms(s.fields,((u,h)=>{o+=u.length+Vu(h)})),o})(r.mapValue);default:throw ye(13486,{value:r})}}function Cd(r){return!!r&&"integerValue"in r}function uf(r){return!!r&&"arrayValue"in r}function zg(r){return!!r&&"nullValue"in r}function Bg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ou(r){return!!r&&"mapValue"in r}function XS(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[q_])==null?void 0:s.stringValue)===G_}function Va(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ms(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Va(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Va(r.arrayValue.values[t]);return e}return{...r}}function ZS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===JS}/**
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
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ou(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Va(t)}setAll(e){let t=bt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Va(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Ou(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Ou(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ms(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new yn(Va(this.value))}}function K_(r){const e=[];return ms(r.fields,((t,s)=>{const o=new bt([t]);if(Ou(s)){const u=K_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Nn(e)}/**
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
 */class zt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new zt(e,0,we.min(),we.min(),we.min(),yn.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,we.min(),we.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,we.min(),we.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yu{constructor(e,t){this.position=e,this.inclusive=t}}function $g(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(h.referenceValue),t.key):s=Eo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!sr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ju{constructor(e,t="asc"){this.field=e,this.dir=t}}function e1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Q_{}class yt extends Q_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new n1(e,t,s):t==="array-contains"?new s1(e,s):t==="in"?new o1(e,s):t==="not-in"?new a1(e,s):t==="array-contains-any"?new l1(e,s):new yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new r1(e,s):new i1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Eo(t,this.value)):t!==null&&Pi(this.value)===Pi(t)&&this.matchesComparison(Eo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class or extends Q_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new or(e,t)}matches(e){return Y_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Y_(r){return r.op==="and"}function J_(r){return t1(r)&&Y_(r)}function t1(r){for(const e of r.filters)if(e instanceof or)return!1;return!0}function Pd(r){if(r instanceof yt)return r.field.canonicalString()+r.op.toString()+wo(r.value);if(J_(r))return r.filters.map((e=>Pd(e))).join(",");{const e=r.filters.map((t=>Pd(t))).join(",");return`${r.op}(${e})`}}function X_(r,e){return r instanceof yt?(function(s,o){return o instanceof yt&&s.op===o.op&&s.field.isEqual(o.field)&&sr(s.value,o.value)})(r,e):r instanceof or?(function(s,o){return o instanceof or&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&X_(h,o.filters[m])),!0):!1})(r,e):void ye(19439)}function Z_(r){return r instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${wo(t.value)}`})(r):r instanceof or?(function(t){return t.op.toString()+" {"+t.getFilters().map(Z_).join(" ,")+"}"})(r):"Filter"}class n1 extends yt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class r1 extends yt{constructor(e,t){super(e,"in",t),this.keys=ev("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class i1 extends yt{constructor(e,t){super(e,"not-in",t),this.keys=ev("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ev(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ge.fromName(s.referenceValue)))}class s1 extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return uf(t)&&Wa(t.arrayValue,this.value)}}class o1 extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wa(this.value.arrayValue,t)}}class a1 extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wa(this.value.arrayValue,t)}}class l1 extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!uf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Wa(this.value.arrayValue,s)))}}/**
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
 */class u1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Wg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new u1(r,e,t,s,o,u,h)}function cf(r){const e=Se(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Pd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),dc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>wo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>wo(s))).join(",")),e.Te=t}return e.Te}function hf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!e1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!X_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Hg(r.startAt,e.startAt)&&Hg(r.endAt,e.endAt)}function kd(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class pc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function c1(r,e,t,s,o,u,h,m){return new pc(r,e,t,s,o,u,h,m)}function df(r){return new pc(r)}function qg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function h1(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function d1(r){return r.collectionGroup!==null}function Oa(r){const e=Se(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new _t(bt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ju(u,s))})),t.has(bt.keyField().canonicalString())||e.Ie.push(new Ju(bt.keyField(),s))}return e.Ie}function nr(r){const e=Se(r);return e.Ee||(e.Ee=f1(e,Oa(r))),e.Ee}function f1(r,e){if(r.limitType==="F")return Wg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ju(o.field,u)}));const t=r.endAt?new Yu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Yu(r.startAt.position,r.startAt.inclusive):null;return Wg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function xd(r,e,t){return new pc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function mc(r,e){return hf(nr(r),nr(e))&&r.limitType===e.limitType}function tv(r){return`${cf(nr(r))}|lt:${r.limitType}`}function lo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Z_(o))).join(", ")}]`),dc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>wo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>wo(o))).join(",")),`Target(${s})`})(nr(r))}; limitType=${r.limitType})`}function gc(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of Oa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=$g(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Oa(s),o)||s.endAt&&!(function(h,m,g){const _=$g(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Oa(s),o))})(r,e)}function p1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function nv(r){return(e,t)=>{let s=!1;for(const o of Oa(r)){const u=m1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function m1(r,e,t){const s=r.field.isKeyField()?ge.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?Eo(g,_):ye(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:r.dir})}}/**
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
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return j_(this.inner)}size(){return this.innerSize}}/**
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
 */const g1=new nt(ge.comparator);function Vr(){return g1}const rv=new nt(ge.comparator);function ka(...r){let e=rv;for(const t of r)e=e.insert(t.key,t);return e}function iv(r){let e=rv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function as(){return La()}function sv(){return La()}function La(){return new gs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const y1=new nt(ge.comparator),_1=new _t(ge.comparator);function Ve(...r){let e=_1;for(const t of r)e=e.add(t);return e}const v1=new _t(De);function E1(){return v1}/**
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
 */function ff(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gu(e)?"-0":e}}function ov(r){return{integerValue:""+r}}function w1(r,e){return WS(e)?ov(e):ff(r,e)}/**
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
 */class yc{constructor(){this._=void 0}}function T1(r,e,t){return r instanceof qa?(function(o,u){const h={fields:{[$_]:{stringValue:B_},[W_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&lf(u)&&(u=fc(u)),u&&(h.fields[H_]=u),{mapValue:h}})(t,e):r instanceof Ga?lv(r,e):r instanceof Ka?uv(r,e):(function(o,u){const h=av(o,u),m=Gg(h)+Gg(o.Ae);return Cd(h)&&Cd(o.Ae)?ov(m):ff(o.serializer,m)})(r,e)}function I1(r,e,t){return r instanceof Ga?lv(r,e):r instanceof Ka?uv(r,e):t}function av(r,e){return r instanceof Xu?(function(s){return Cd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class qa extends yc{}class Ga extends yc{constructor(e){super(),this.elements=e}}function lv(r,e){const t=cv(e);for(const s of r.elements)t.some((o=>sr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ka extends yc{constructor(e){super(),this.elements=e}}function uv(r,e){let t=cv(e);for(const s of r.elements)t=t.filter((o=>!sr(o,s)));return{arrayValue:{values:t}}}class Xu extends yc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Gg(r){return ut(r.integerValue||r.doubleValue)}function cv(r){return uf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class S1{constructor(e,t){this.field=e,this.transform=t}}function A1(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Ga&&o instanceof Ga||s instanceof Ka&&o instanceof Ka?vo(s.elements,o.elements,sr):s instanceof Xu&&o instanceof Xu?sr(s.Ae,o.Ae):s instanceof qa&&o instanceof qa})(r.transform,e.transform)}class R1{constructor(e,t){this.version=e,this.transformResults=t}}class kr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kr}static exists(e){return new kr(void 0,e)}static updateTime(e){return new kr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class _c{}function hv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new fv(r.key,kr.none()):new nl(r.key,r.data,kr.none());{const t=r.data,s=yn.empty();let o=new _t(bt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ys(r.key,s,new Nn(o.toArray()),kr.none())}}function C1(r,e,t){r instanceof nl?(function(o,u,h){const m=o.value.clone(),g=Qg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof ys?(function(o,u,h){if(!Lu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Qg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(dv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ma(r,e,t,s){return r instanceof nl?(function(u,h,m,g){if(!Lu(u.precondition,h))return m;const _=u.value.clone(),w=Yg(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof ys?(function(u,h,m,g){if(!Lu(u.precondition,h))return m;const _=Yg(u.fieldTransforms,g,h),w=h.data;return w.setAll(dv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(u,h,m){return Lu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function P1(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=av(s.transform,o||null);u!=null&&(t===null&&(t=yn.empty()),t.set(s.field,u))}return t||null}function Kg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&vo(s,o,((u,h)=>A1(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class nl extends _c{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ys extends _c{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function dv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Qg(r,e,t){const s=new Map;Be(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,I1(h,m,t[o]))}return s}function Yg(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,T1(u,h,e))}return s}class fv extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k1 extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class x1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&C1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ma(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=sv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=hv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,((t,s)=>Kg(t,s)))&&vo(this.baseMutations,e.baseMutations,((t,s)=>Kg(t,s)))}}class pf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return y1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new pf(e,t,s,o)}}/**
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
 */class N1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class b1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Le;function D1(r){switch(r){case Q.OK:return ye(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return ye(15467,{code:r})}}function pv(r){if(r===void 0)return Dr("GRPC error has no .code"),Q.UNKNOWN;switch(r){case ft.OK:return Q.OK;case ft.CANCELLED:return Q.CANCELLED;case ft.UNKNOWN:return Q.UNKNOWN;case ft.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case ft.INTERNAL:return Q.INTERNAL;case ft.UNAVAILABLE:return Q.UNAVAILABLE;case ft.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case ft.NOT_FOUND:return Q.NOT_FOUND;case ft.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case ft.ABORTED:return Q.ABORTED;case ft.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case ft.DATA_LOSS:return Q.DATA_LOSS;default:return ye(39323,{code:r})}}(Le=ft||(ft={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function V1(){return new TextEncoder}/**
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
 */const O1=new Ti([4294967295,4294967295],0);function Jg(r){const e=V1().encode(r),t=new x_;return t.update(e),new Uint8Array(t.digest())}function Xg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ti([t,s],0),new Ti([o,u],0)]}class mf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new xa(`Invalid padding: ${t}`);if(s<0)throw new xa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new xa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ti.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ti.fromNumber(s)));return o.compare(O1)===1&&(o=new Ti([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Jg(e),[s,o]=Xg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new mf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Jg(e),[s,o]=Xg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.be(h)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new vc(we.min(),o,new nt(De),Vr(),Ve())}}class rl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new rl(s,t,Ve(),Ve(),Ve())}}/**
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
 */class Mu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=o}}class mv{constructor(e,t){this.targetId=e,this.Ce=t}}class gv{constructor(e,t,s=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Zg{constructor(){this.ve=0,this.Fe=ey(),this.Me=Dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),t=Ve(),s=Ve();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:u})}})),new rl(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=ey()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class L1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vr(),this.He=Ru(),this.Je=Ru(),this.Ze=new nt(De)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(kd(u))if(s===0){const h=new ge(u.path);this.et(t,h,zt.newNoDocument(h,we.min()))}else Be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ci(s).toUint8Array()}catch(g){if(g instanceof z_)return fs("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new mf(h,o,u)}catch(g){return fs(g instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&kd(m.target)){const g=new ge(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,zt.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.Ke())}}));let s=Ve();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new vc(e,t,this.Ze,this.je,s);return this.je=Vr(),this.He=Ru(),this.Je=Ru(),this.Ze=new nt(De),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Zg,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new _t(De),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new _t(De),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ru(){return new nt(ge.comparator)}function ey(){return new nt(ge.comparator)}const M1={asc:"ASCENDING",desc:"DESCENDING"},F1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},U1={and:"AND",or:"OR"};class j1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nd(r,e){return r.useProto3Json||dc(e)?e:{value:e}}function Zu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function z1(r,e){return Zu(r,e.toTimestamp())}function rr(r){return Be(!!r,49232),we.fromTimestamp((function(t){const s=Ri(t);return new Je(s.seconds,s.nanos)})(r))}function gf(r,e){return bd(r,e).canonicalString()}function bd(r,e){const t=(function(o){return new tt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function _v(r){const e=tt.fromString(r);return Be(Iv(e),10190,{key:e.toString()}),e}function Dd(r,e){return gf(r.databaseId,e.path)}function od(r,e){const t=_v(e);if(t.get(1)!==r.databaseId.projectId)throw new he(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new he(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ge(Ev(t))}function vv(r,e){return gf(r.databaseId,e)}function B1(r){const e=_v(r);return e.length===4?tt.emptyPath():Ev(e)}function Vd(r){return new tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ev(r){return Be(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ty(r,e,t){return{name:Dd(r,e),fields:t.value.mapValue.fields}}function $1(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(Be(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(Be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?Q.UNKNOWN:pv(_.code);return new he(w,_.message||"")})(h);t=new gv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=od(r,s.document.name),u=rr(s.document.updateTime),h=s.document.createTime?rr(s.document.createTime):we.min(),m=new yn({mapValue:{fields:s.document.fields}}),g=zt.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Mu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=od(r,s.document),u=s.readTime?rr(s.readTime):we.min(),h=zt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Mu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=od(r,s.document),u=s.removedTargetIds||[];t=new Mu([],u,o,null)}else{if(!("filter"in e))return ye(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new b1(o,u),m=s.targetId;t=new mv(m,h)}}return t}function H1(r,e){let t;if(e instanceof nl)t={update:ty(r,e.key,e.value)};else if(e instanceof fv)t={delete:Dd(r,e.key)};else if(e instanceof ys)t={update:ty(r,e.key,e.data),updateMask:Z1(e.fieldMask)};else{if(!(e instanceof k1))return ye(16599,{dt:e.type});t={verify:Dd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof qa)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ga)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ka)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Xu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:z1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye(27497)})(r,e.precondition)),t}function W1(r,e){return r&&r.length>0?(Be(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?rr(o.updateTime):rr(u);return h.isEqual(we.min())&&(h=rr(u)),new R1(h,o.transformResults||[])})(t,e)))):[]}function q1(r,e){return{documents:[vv(r,e.path)]}}function G1(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=vv(r,o);const u=(function(_){if(_.length!==0)return Tv(or.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(R){return{field:uo(R.field),direction:Y1(R.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Nd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function K1(r){let e=B1(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(T){const R=wv(T);return R instanceof or&&J_(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((R=>(function(W){return new Ju(co(W.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(R)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let R;return R=typeof T=="object"?T.value:T,dc(R)?null:R})(t.limit));let g=null;t.startAt&&(g=(function(T){const R=!!T.before,z=T.values||[];return new Yu(z,R)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const R=!T.before,z=T.values||[];return new Yu(z,R)})(t.endAt)),c1(e,o,h,u,m,"F",g,_)}function Q1(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=co(t.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=co(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=co(t.unaryFilter.field);return yt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=co(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(r):r.fieldFilter!==void 0?(function(t){return yt.create(co(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return or.create(t.compositeFilter.filters.map((s=>wv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(r):ye(30097,{filter:r})}function Y1(r){return M1[r]}function J1(r){return F1[r]}function X1(r){return U1[r]}function uo(r){return{fieldPath:r.canonicalString()}}function co(r){return bt.fromServerFormat(r.fieldPath)}function Tv(r){return r instanceof yt?(function(t){if(t.op==="=="){if(Bg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NAN"}};if(zg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NAN"}};if(zg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uo(t.field),op:J1(t.op),value:t.value}}})(r):r instanceof or?(function(t){const s=t.getFilters().map((o=>Tv(o)));return s.length===1?s[0]:{compositeFilter:{op:X1(t.op),filters:s}}})(r):ye(54877,{filter:r})}function Z1(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Iv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Sv(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class yi{constructor(e,t,s,o,u=we.min(),h=we.min(),m=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eA{constructor(e){this.yt=e}}function tA(r){const e=K1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?xd(e,e.limit,"L"):e}/**
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
 */class nA{constructor(){this.Sn=new rA}addToCollectionParentIndex(e,t){return this.Sn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ai.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class rA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new _t(tt.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new _t(tt.comparator)).toArray()}}/**
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
 */const ny={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Av=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(Av,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class To{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new To(0)}static ar(){return new To(-1)}}/**
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
 */const ry="LruGarbageCollector",iA=1048576;function iy([r,e],[t,s]){const o=De(r,t);return o===0?De(e,s):o}class sA{constructor(e){this.Pr=e,this.buffer=new _t(iy),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();iy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){re(ry,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?re(ry,"Ignoring IndexedDB error during garbage collection: ",t):await Po(t)}await this.Ar(3e5)}))}}class aA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(hc.ce);const s=new sA(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(ny)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ny):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,t)))).next((T=>(u=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),ao()<=be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function lA(r,e){return new aA(r,e)}/**
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
 */class uA{constructor(){this.changes=new gs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class hA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ma(s.mutation,o,Nn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const o=as();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=ka();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=as();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Vr();const h=La(),m=(function(){return La()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof ys)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Ma(w.mutation,_,w.mutation.getFieldMask(),Je.now())):h.set(_.key,Nn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>m.set(_,new cA(w,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=La();let o=new nt(((h,m)=>h-m)),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||Nn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const T=(o.get(m.batchId)||Ve()).add(g);o=o.insert(m.batchId,T)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,T=sv();w.forEach((R=>{if(!u.has(R)){const z=hv(t.get(R),s.get(R));z!==null&&T.set(R,z),u=u.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return h1(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):d1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(as());let m=Ba,g=u;return h.next((_=>H.forEach(_,((w,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next((R=>{g=g.insert(w,R)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Ve()))).next((w=>({batchId:m,changes:iv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next((s=>{let o=ka();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ka();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(g=>{const _=(function(T,R){return new pc(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((T,R)=>{h=h.insert(T,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,zt.newInvalidDocument(w)))}));let m=ka();return h.forEach(((g,_)=>{const w=u.get(g);w!==void 0&&Ma(w.mutation,_,Nn.empty(),Je.now()),gc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class dA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return H.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:rr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:tA(o.bundledQuery),readTime:rr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class fA{constructor(){this.overlays=new nt(ge.comparator),this.Lr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=as();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.bt(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=as(),u=t.length+1,h=new ge(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=as(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=as(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return H.resolve(m)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new N1(t,s));let u=this.Lr.get(t);u===void 0&&(u=Ve(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class pA{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class yf{constructor(){this.kr=new _t(St.Kr),this.qr=new _t(St.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new St(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new ge(new tt([])),s=new St(t,e),o=new St(t,e+1),u=[];return this.qr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new ge(new tt([])),s=new St(t,e),o=new St(t,e+1);let u=Ve();return this.qr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new St(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return ge.comparator(e.key,t.key)||De(e.Hr,t.Hr)}static Ur(e,t){return De(e.Hr,t.Hr)||ge.comparator(e.key,t.key)}}/**
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
 */class mA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new _t(St.Kr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new x1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Jr=this.Jr.add(new St(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?af:this.Yn-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _t(De);return t.forEach((o=>{const u=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),H.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const h=new St(new ge(u),0);let m=new _t(De);return this.Jr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),H.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return H.forEach(t.mutations,(o=>{const u=new St(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new St(t,0),o=this.Jr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class gA{constructor(e){this.ti=e,this.docs=(function(){return new nt(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=Vr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():zt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Vr();const h=t.path,m=new ge(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||zS(jS(w),s)<=0||(o.has(w.key)||gc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ni(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new yA(this)}getSize(e){return H.resolve(this.size)}}class yA extends uA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class _A{constructor(e){this.persistence=e,this.ri=new gs((t=>cf(t)),hf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.ii=0,this.si=new yf,this.targetCount=0,this.oi=To._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),H.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new To(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.lr(t),H.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.si.containsKey(t))}}/**
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
 */class Rv{constructor(e,t){this._i={},this.overlays={},this.ai=new hc(0),this.ui=!1,this.ui=!0,this.ci=new pA,this.referenceDelegate=e(this),this.li=new _A(this),this.indexManager=new nA,this.remoteDocumentCache=(function(o){return new gA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new eA(t),this.Pi=new dA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new mA(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new vA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return H.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class vA extends $S{constructor(e){super(),this.currentSequenceNumber=e}}class _f{constructor(e){this.persistence=e,this.Ri=new yf,this.Ai=null}static Vi(e){return new _f(e)}get di(){if(this.Ai)return this.Ai;throw ye(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.di,(s=>{const o=ge.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,we.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ec{constructor(e,t){this.persistence=e,this.fi=new gs((s=>qS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=lA(this,t)}static Vi(e,t){return new ec(e,t)}Ti(){}Ii(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return H.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,we.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vu(e.data.value)),t}wr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class vf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=Ve(),o=Ve();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new vf(e,t.fromCache,s,o)}}/**
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
 */class EA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return a0()?8:HS(Bt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new EA;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(ao()<=be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(ao()<=be.DEBUG&&re("QueryEngine","Query:",lo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(ao()<=be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):H.resolve())}gs(e,t){if(qg(t))return H.resolve(null);let s=nr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=xd(t,null,"F"),s=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ve(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ss(t,_,h,g.readTime)?this.gs(e,xd(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return qg(t)||o.isEqual(we.min())?H.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ss(t,h,s,o)?H.resolve(null):(ao()<=be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),lo(t)),this.Ds(e,h,t,US(o,Ba)).next((m=>m)))}))}bs(e,t){let s=new _t(nv(e));return t.forEach(((o,u)=>{gc(e,u)&&(s=s.add(u))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return ao()<=be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",lo(t)),this.fs.getDocumentsMatchingQuery(e,t,Ai.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const Ef="LocalStore",TA=3e8;class IA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new nt(De),this.Fs=new gs((u=>cf(u)),hf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function SA(r,e,t,s){return new IA(r,e,t,s)}async function Cv(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Ve();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function AA(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,w){const T=_.batch,R=T.keys();let z=H.resolve();return R.forEach((W=>{z=z.next((()=>w.getEntry(g,W))).next(($=>{const B=_.docVersions.get(W);Be(B!==null,48541),$.version.compareTo(B)<0&&(T.applyToRemoteDocument($,_),$.isValidDocument()&&($.setReadTime(_.commitVersion),w.addEntry($)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Ve();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Pv(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function RA(r,e){const t=Se(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((w,T)=>{const R=o.get(T);if(!R)return;m.push(t.li.removeMatchingKeys(u,w.removedDocuments,T).next((()=>t.li.addMatchingKeys(u,w.addedDocuments,T))));let z=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?z=z.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(T,z),(function($,B,oe){return $.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=TA?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0})(R,z,w)&&m.push(t.li.updateTargetData(u,z))}));let g=Vr(),_=Ve();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(CA(u,h,e.documentUpdates).next((w=>{g=w.Bs,_=w.Ls}))),!s.isEqual(we.min())){const w=t.li.getLastRemoteSnapshotVersion(u).next((T=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.vs=o,u)))}function CA(r,e,t){let s=Ve(),o=Ve();return t.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let h=Vr();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):re(Ef,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function PA(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=af),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function kA(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new yi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Od(r,e,t){const s=Se(r),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ko(h))throw h;re(Ef,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function sy(r,e,t){const s=Se(r);let o=we.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const T=Se(g),R=T.Fs.get(w);return R!==void 0?H.resolve(T.vs.get(R)):T.li.getTargetData(_,w)})(s,h,nr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Ve()))).next((m=>(xA(s,p1(e),m),{documents:m,ks:u})))))}function xA(r,e,t){let s=r.Ms.get(e)||we.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(e,s)}class oy{constructor(){this.activeTargetIds=E1()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NA{constructor(){this.vo=new oy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new oy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bA{Mo(e){}shutdown(){}}/**
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
 */const ay="ConnectivityMonitor";class ly{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){re(ay,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){re(ay,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cu=null;function Ld(){return Cu===null?Cu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cu++,"0x"+Cu.toString(16)}/**
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
 */const ad="RestConnection",DA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class VA{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Ku?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Ld(),m=this.Qo(e,t.toUriEncodedString());re(ad,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,u);const{host:_}=new URL(m),w=So(_);return this.zo(e,m,g,s,w).then((T=>(re(ad,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw fs(ad,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",s),T}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Co})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=DA[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class OA{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ut="WebChannelConnection",Ra=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class go extends VA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!go.c_){const e=V_();Ra(e,D_.STAT_EVENT,(t=>{t.stat===Sd.PROXY?re(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===Sd.NOPROXY&&re(Ut,"STAT_EVENT: detected no buffering proxy")})),go.c_=!0}}zo(e,t,s,o,u){const h=Ld();return new Promise(((m,g)=>{const _=new N_;_.setWithCredentials(!0),_.listenOnce(b_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Du.NO_ERROR:const T=_.getResponseJson();re(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case Du.TIMEOUT:re(Ut,`RPC '${e}' ${h} timed out`),g(new he(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const R=_.getStatus();if(re(Ut,`RPC '${e}' ${h} failed with status:`,R,"response text:",_.getResponseText()),R>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const W=z==null?void 0:z.error;if(W&&W.status&&W.message){const $=(function(oe){const le=oe.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(le)>=0?le:Q.UNKNOWN})(W.status);g(new he($,W.message))}else g(new he(Q.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new he(Q.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(Ut,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re(Ut,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=Ld(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");re(Ut,`Creating RPC '${e}' stream ${o}: ${_}`,m);const w=h.createWebChannel(_,m);this.I_(w);let T=!1,R=!1;const z=new OA({Ho:W=>{R?re(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(T||(re(Ut,`Opening RPC '${e}' stream ${o} transport.`),w.open(),T=!0),re(Ut,`RPC '${e}' stream ${o} sending:`,W),w.send(W))},Jo:()=>w.close()});return Ra(w,Pa.EventType.OPEN,(()=>{R||(re(Ut,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),Ra(w,Pa.EventType.CLOSE,(()=>{R||(R=!0,re(Ut,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.E_(w))})),Ra(w,Pa.EventType.ERROR,(W=>{R||(R=!0,fs(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),z.o_(new he(Q.UNAVAILABLE,"The operation could not be completed")))})),Ra(w,Pa.EventType.MESSAGE,(W=>{var $;if(!R){const B=W.data[0];Be(!!B,16349);const oe=B,le=(oe==null?void 0:oe.error)||(($=oe[0])==null?void 0:$.error);if(le){re(Ut,`RPC '${e}' stream ${o} received error:`,le);const te=le.status;let fe=(function(k){const A=ft[k];if(A!==void 0)return pv(A)})(te),Ce=le.message;te==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&fs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),fe===void 0&&(fe=Q.INTERNAL,Ce="Unknown error status: "+te+" with message "+le.message),R=!0,z.o_(new he(fe,Ce)),w.close()}else re(Ut,`RPC '${e}' stream ${o} received:`,B),z.__(B)}})),go.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return O_()}}/**
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
 */function LA(r){return new go(r)}function ld(){return typeof document<"u"?document:null}/**
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
 */function Ec(r){return new j1(r,!0)}/**
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
 */go.c_=!1;class kv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const uy="PersistentStream";class xv{constructor(e,t,s,o,u,h,m,g){this.Ci=e,this.b_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new kv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Dr(t.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new he(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(uy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(re(uy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class MA extends xv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=$1(this.serializer,e),s=(function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?rr(h.readTime):we.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=Vd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=kd(g)?{documents:q1(u,g)}:{query:G1(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=yv(u,h.resumeToken);const _=Nd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=Zu(u,h.snapshotVersion.toTimestamp());const _=Nd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=Q1(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Vd(this.serializer),t.removeTarget=e,this.K_(t)}}class FA extends xv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=W1(e.writeResults,e.commitTime),s=rr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Vd(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>H1(this.serializer,s)))};this.K_(t)}}/**
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
 */class UA{}class jA extends UA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new he(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,bd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(Q.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,bd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(Q.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function zA(r,e,t,s){return new jA(r,e,t,s)}class BA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dr(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ps="RemoteStore";class $A{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{_s(this)&&(re(ps,"Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.Ea.add(4),await il(_),_.Va.set("Unknown"),_.Ea.delete(4),await wc(_)})(this))}))})),this.Va=new BA(s,o)}}async function wc(r){if(_s(r))for(const e of r.Ra)await e(!0)}async function il(r){for(const e of r.Ra)await e(!1)}function Nv(r,e){const t=Se(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Sf(t)?If(t):xo(t).O_()&&Tf(t,e))}function wf(r,e){const t=Se(r),s=xo(t);t.Ia.delete(e),s.O_()&&bv(t,e),t.Ia.size===0&&(s.O_()?s.L_():_s(t)&&t.Va.set("Unknown"))}function Tf(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xo(r).Z_(e)}function bv(r,e){r.da.$e(e),xo(r).X_(e)}function If(r){r.da=new L1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),xo(r).start(),r.Va.ua()}function Sf(r){return _s(r)&&!xo(r).x_()&&r.Ia.size>0}function _s(r){return Se(r).Ea.size===0}function Dv(r){r.da=void 0}async function HA(r){r.Va.set("Online")}async function WA(r){r.Ia.forEach(((e,t)=>{Tf(r,e)}))}async function qA(r,e){Dv(r),Sf(r)?(r.Va.ha(e),If(r)):r.Va.set("Unknown")}async function GA(r,e,t){if(r.Va.set("Online"),e instanceof gv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.da.removeTarget(m))})(r,e)}catch(s){re(ps,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await tc(r,s)}else if(e instanceof Mu?r.da.Xe(e):e instanceof mv?r.da.st(e):r.da.tt(e),!t.isEqual(we.min()))try{const s=await Pv(r.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ia.get(_);w&&u.Ia.set(_,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const w=u.Ia.get(g);if(!w)return;u.Ia.set(g,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),bv(u,g);const T=new yi(w.target,g,_,w.sequenceNumber);Tf(u,T)})),u.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){re(ps,"Failed to raise snapshot:",s),await tc(r,s)}}async function tc(r,e,t){if(!ko(e))throw e;r.Ea.add(1),await il(r),r.Va.set("Offline"),t||(t=()=>Pv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(ps,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await wc(r)}))}function Vv(r,e){return e().catch((t=>tc(r,t,e)))}async function Tc(r){const e=Se(r),t=ki(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:af;for(;KA(e);)try{const o=await PA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,QA(e,o)}catch(o){await tc(e,o)}Ov(e)&&Lv(e)}function KA(r){return _s(r)&&r.Ta.length<10}function QA(r,e){r.Ta.push(e);const t=ki(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function Ov(r){return _s(r)&&!ki(r).x_()&&r.Ta.length>0}function Lv(r){ki(r).start()}async function YA(r){ki(r).ra()}async function JA(r){const e=ki(r);for(const t of r.Ta)e.ea(t.mutations)}async function XA(r,e,t){const s=r.Ta.shift(),o=pf.from(s,e,t);await Vv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Tc(r)}async function ZA(r,e){e&&ki(r).Y_&&await(async function(s,o){if((function(h){return D1(h)&&h!==Q.ABORTED})(o.code)){const u=s.Ta.shift();ki(s).B_(),await Vv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Tc(s)}})(r,e),Ov(r)&&Lv(r)}async function cy(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),re(ps,"RemoteStore received new credentials");const s=_s(t);t.Ea.add(3),await il(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await wc(t)}async function eR(r,e){const t=Se(r);e?(t.Ea.delete(2),await wc(t)):e||(t.Ea.add(2),await il(t),t.Va.set("Unknown"))}function xo(r){return r.ma||(r.ma=(function(t,s,o){const u=Se(t);return u.sa(),new MA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:HA.bind(null,r),Yo:WA.bind(null,r),t_:qA.bind(null,r),J_:GA.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),Sf(r)?If(r):r.Va.set("Unknown")):(await r.ma.stop(),Dv(r))}))),r.ma}function ki(r){return r.fa||(r.fa=(function(t,s,o){const u=Se(t);return u.sa(),new FA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:YA.bind(null,r),t_:ZA.bind(null,r),ta:JA.bind(null,r),na:XA.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Tc(r)):(await r.fa.stop(),r.Ta.length>0&&(re(ps,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Af{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Af(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rf(r,e){if(Dr("AsyncQueue",`${e}: ${r}`),ko(r))return new he(Q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=ka(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class hy{constructor(){this.ga=new nt(ge.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ye(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Io{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Io(e,t,yo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class tR{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class nR{constructor(){this.queries=dy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Se(t),u=o.queries;o.queries=dy(),u.forEach(((h,m)=>{for(const g of m.ba)g.onError(s)}))})(this,new he(Q.ABORTED,"Firestore shutting down"))}}function dy(){return new gs((r=>tv(r)),mc)}async function rR(r,e){const t=Se(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.Da()&&(s=2):(u=new tR,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Rf(h,`Initialization of query '${lo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Cf(t)}async function iR(r,e){const t=Se(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ba.indexOf(e);h>=0&&(u.ba.splice(h,1),u.ba.length===0?o=e.Da()?0:1:!u.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function sR(r,e){const t=Se(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.ba)m.Fa(o)&&(s=!0);h.wa=o}}s&&Cf(t)}function oR(r,e,t){const s=Se(r),o=s.queries.get(e);if(o)for(const u of o.ba)u.onError(t);s.queries.delete(e)}function Cf(r){r.Ca.forEach((e=>{e.next()}))}var Md,fy;(fy=Md||(Md={})).Ma="default",fy.Cache="cache";class aR{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Md.Cache}}/**
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
 */class Mv{constructor(e){this.key=e}}class Fv{constructor(e){this.key=e}}class lR{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ve(),this.mutatedKeys=Ve(),this.eu=nv(e),this.tu=new yo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new hy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const R=o.get(w),z=gc(this.query,T)?T:null,W=!!R&&this.mutatedKeys.has(R.key),$=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let B=!1;R&&z?R.data.isEqual(z.data)?W!==$&&(s.track({type:3,doc:z}),B=!0):this.su(R,z)||(s.track({type:2,doc:z}),B=!0,(g&&this.eu(z,g)>0||_&&this.eu(z,_)<0)&&(m=!0)):!R&&z?(s.track({type:0,doc:z}),B=!0):R&&!z&&(s.track({type:1,doc:R}),B=!0,(g||_)&&(m=!0)),B&&(z?(h=h.add(z),u=$?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Ss:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,T)=>(function(z,W){const $=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Vt:B})}};return $(z)-$(W)})(w.type,T.type)||this.eu(w.doc,T.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new Io(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ve(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Fv(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Mv(s))})),t}cu(e){this.Za=e.ks,this.Ya=Ve();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Io.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Pf="SyncEngine";class uR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class cR{constructor(e){this.key=e,this.hu=!1}}class hR{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new gs((m=>tv(m)),mc),this.Iu=new Map,this.Eu=new Set,this.Ru=new nt(ge.comparator),this.Au=new Map,this.Vu=new yf,this.du={},this.mu=new Map,this.fu=To.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function dR(r,e,t=!0){const s=Hv(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Uv(s,e,t,!0),o}async function fR(r,e){const t=Hv(r);await Uv(t,e,!0,!1)}async function Uv(r,e,t,s){const o=await kA(r.localStore,nr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await pR(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Nv(r.remoteStore,o),m}async function pR(r,e,t,s,o){r.pu=(T,R,z)=>(async function($,B,oe,le){let te=B.view.ru(oe);te.Ss&&(te=await sy($.localStore,B.query,!1).then((({documents:k})=>B.view.ru(k,te))));const fe=le&&le.targetChanges.get(B.targetId),Ce=le&&le.targetMismatches.get(B.targetId)!=null,Te=B.view.applyChanges(te,$.isPrimaryClient,fe,Ce);return my($,B.targetId,Te.au),Te.snapshot})(r,T,R,z);const u=await sy(r.localStore,e,!0),h=new lR(e,u.ks),m=h.ru(u.documents),g=rl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);my(r,t,_.au);const w=new uR(e,t,h);return r.Tu.set(e,w),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function mR(r,e,t){const s=Se(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!mc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Od(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&wf(s.remoteStore,o.targetId),Fd(s,o.targetId)})).catch(Po)):(Fd(s,o.targetId),await Od(s.localStore,o.targetId,!0))}async function gR(r,e){const t=Se(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),wf(t.remoteStore,s.targetId))}async function yR(r,e,t){const s=SR(r);try{const o=await(function(h,m){const g=Se(h),_=Je.now(),w=m.reduce(((z,W)=>z.add(W.key)),Ve());let T,R;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let W=Vr(),$=Ve();return g.xs.getEntries(z,w).next((B=>{W=B,W.forEach(((oe,le)=>{le.isValidDocument()||($=$.add(oe))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,W))).next((B=>{T=B;const oe=[];for(const le of m){const te=P1(le,T.get(le.key).overlayedDocument);te!=null&&oe.push(new ys(le.key,te,K_(te.value.mapValue),kr.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,oe,m)})).next((B=>{R=B;const oe=B.applyToLocalDocumentSet(T,$);return g.documentOverlayCache.saveOverlays(z,B.batchId,oe)}))})).then((()=>({batchId:R.batchId,changes:iv(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.du[h.currentUser.toKey()];_||(_=new nt(De)),_=_.insert(m,g),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await sl(s,o.changes),await Tc(s.remoteStore)}catch(o){const u=Rf(o,"Failed to persist write");t.reject(u)}}async function jv(r,e){const t=Se(r);try{const s=await RA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Be(h.hu,14607):o.removedDocuments.size>0&&(Be(h.hu,42227),h.hu=!1))})),await sl(t,s,e)}catch(s){await Po(s)}}function py(r,e,t){const s=Se(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Se(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,T)=>{for(const R of T.ba)R.va(m)&&(_=!0)})),_&&Cf(g)})(s.eventManager,e),o.length&&s.Pu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _R(r,e,t){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new nt(ge.comparator);h=h.insert(u,zt.newNoDocument(u,we.min()));const m=Ve().add(u),g=new vc(we.min(),new Map,new nt(De),h,m);await jv(s,g),s.Ru=s.Ru.remove(u),s.Au.delete(e),kf(s)}else await Od(s.localStore,e,!1).then((()=>Fd(s,e,t))).catch(Po)}async function vR(r,e){const t=Se(r),s=e.batch.batchId;try{const o=await AA(t.localStore,e);Bv(t,s,null),zv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await sl(t,o)}catch(o){await Po(o)}}async function ER(r,e,t){const s=Se(r);try{const o=await(function(h,m){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next((T=>(Be(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Bv(s,e,t),zv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await sl(s,o)}catch(o){await Po(o)}}function zv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Bv(r,e,t){const s=Se(r);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Fd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||$v(r,s)}))}function $v(r,e){r.Eu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(wf(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),kf(r))}function my(r,e,t){for(const s of t)s instanceof Mv?(r.Vu.addReference(s.key,e),wR(r,s)):s instanceof Fv?(re(Pf,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||$v(r,s.key)):ye(19791,{wu:s})}function wR(r,e){const t=e.key,s=t.path.canonicalString();r.Ru.get(t)||r.Eu.has(s)||(re(Pf,"New document in limbo: "+t),r.Eu.add(s),kf(r))}function kf(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new ge(tt.fromString(e)),s=r.fu.next();r.Au.set(s,new cR(t)),r.Ru=r.Ru.insert(t,s),Nv(r.remoteStore,new yi(nr(df(t.path)),s,"TargetPurposeLimboResolution",hc.ce))}}async function sl(r,e,t){const s=Se(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=vf.Es(g.targetId,_);u.push(T)}})))})),await Promise.all(h),s.Pu.J_(o),await(async function(g,_){const w=Se(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>H.forEach(_,(R=>H.forEach(R.Ts,(z=>w.persistence.referenceDelegate.addReference(T,R.targetId,z))).next((()=>H.forEach(R.Is,(z=>w.persistence.referenceDelegate.removeReference(T,R.targetId,z)))))))))}catch(T){if(!ko(T))throw T;re(Ef,"Failed to update sequence numbers: "+T)}for(const T of _){const R=T.targetId;if(!T.fromCache){const z=w.vs.get(R),W=z.snapshotVersion,$=z.withLastLimboFreeSnapshotVersion(W);w.vs=w.vs.insert(R,$)}}})(s.localStore,u))}async function TR(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){re(Pf,"User change. New user:",e.toKey());const s=await Cv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((g=>{g.reject(new he(Q.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await sl(t,s.Ns)}}function IR(r,e){const t=Se(r),s=t.Au.get(e);if(s&&s.hu)return Ve().add(s.key);{let o=Ve();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Hv(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=jv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_R.bind(null,e),e.Pu.J_=sR.bind(null,e.eventManager),e.Pu.yu=oR.bind(null,e.eventManager),e}function SR(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ER.bind(null,e),e}class nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return SA(this.persistence,new wA,e.initialUser,this.serializer)}Cu(e){return new Rv(_f.Vi,this.serializer)}Du(e){return new NA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nc.provider={build:()=>new nc};class AR extends nc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Be(this.persistence.referenceDelegate instanceof ec,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new oA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Rv((s=>ec.Vi(s,t)),this.serializer)}}class Ud{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>py(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=TR.bind(null,this.syncEngine),await eR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nR})()}createDatastore(e){const t=Ec(e.databaseInfo.databaseId),s=LA(e.databaseInfo);return zA(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new $A(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>py(this.syncEngine,t,0)),(function(){return ly.v()?new ly:new bA})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,w){const T=new hR(o,u,h,m,g,_);return w&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Se(o);re(ps,"RemoteStore shutting down."),u.Ea.add(5),await il(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ud.provider={build:()=>new Ud};/**
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
 */class RR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const xi="FirestoreClient";class CR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=sf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{re(xi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(xi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Rf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ud(r,e){r.asyncQueue.verifyOperationInProgress(),re(xi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Cv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function gy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await PR(r);re(xi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>cy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>cy(e.remoteStore,o))),r._onlineComponents=e}async function PR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(xi,"Using user provided OfflineComponentProvider");try{await ud(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;fs("Error using user provided cache. Falling back to memory cache: "+t),await ud(r,new nc)}}else re(xi,"Using default OfflineComponentProvider"),await ud(r,new AR(void 0));return r._offlineComponents}async function Wv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(xi,"Using user provided OnlineComponentProvider"),await gy(r,r._uninitializedComponentsProvider._online)):(re(xi,"Using default OnlineComponentProvider"),await gy(r,new Ud))),r._onlineComponents}function kR(r){return Wv(r).then((e=>e.syncEngine))}async function xR(r){const e=await Wv(r),t=e.eventManager;return t.onListen=dR.bind(null,e.syncEngine),t.onUnlisten=mR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gR.bind(null,e.syncEngine),t}function NR(r,e,t={}){const s=new Ii;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const w=new RR({next:R=>{w.Nu(),h.enqueueAndForget((()=>iR(u,T)));const z=R.docs.has(m);!z&&R.fromCache?_.reject(new he(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&R.fromCache&&g&&g.source==="server"?_.reject(new he(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(R)},error:R=>_.reject(R)}),T=new aR(df(m.path),w,{includeMetadataChanges:!0,Ka:!0});return rR(u,T)})(await xR(r),r.asyncQueue,e,t,s))),s.promise}function bR(r,e){const t=new Ii;return r.asyncQueue.enqueueAndForget((async()=>yR(await kR(r),e,t))),t.promise}/**
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
 */function qv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const DR="ComponentProvider",yy=new Map;function VR(r,e,t,s,o){return new QS(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,qv(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const Gv="firestore.googleapis.com",_y=!0;class vy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gv,this.ssl=_y}else this.host=e.host,this.ssl=e.ssl??_y;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Av;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iA)throw new he(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new CS;switch(s.type){case"firstParty":return new NS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=yy.get(t);s&&(re(DR,"Removing Datastore"),yy.delete(t),s.terminate())})(this),Promise.resolve()}}function OR(r,e,t,s={}){var _;r=za(r,xf);const o=So(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&($y(`https://${m}`),Hy("Firestore",!0)),u.host!==Gv&&u.host!==m&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!us(g,h)&&(r._setSettings(g),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=jt.MOCK_USER;else{w=Xw(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new he(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new jt(R)}r._authCredentials=new PS(new M_(w,T))}}/**
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
 */class Nf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Nf(this.firestore,e,this._query)}}class At{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(tl(t,At._jsonSchema))return new At(e,s||null,new ge(tt.fromString(t.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:pt("string",At._jsonSchemaVersion),referencePath:pt("string")};class Qa extends Nf{constructor(e,t,s){super(e,t,df(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new ge(e))}withConverter(e){return new Qa(this.firestore,e,this._path)}}function LR(r,e,...t){if(r=Dn(r),arguments.length===1&&(e=sf.newId()),MS("doc","path",e),r instanceof xf){const s=tt.fromString(e,...t);return Dg(s),new At(r,null,new ge(s))}{if(!(r instanceof At||r instanceof Qa))throw new he(Q.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(tt.fromString(e,...t));return Dg(s),new At(r.firestore,r instanceof Qa?r.converter:null,new ge(s))}}/**
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
 */const Ey="AsyncQueue";class wy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new kv(this,"async_queue_retry"),this._c=()=>{const s=ld();s&&re(Ey,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ld();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ld();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ii;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ko(e))throw e;re(Ey,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Dr("INTERNAL UNHANDLED ERROR: ",Ty(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Af.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&ye(47125,{Pc:Ty(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ty(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class bf extends xf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new wy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wy(e),this._firestoreClient=void 0,await e}}}function MR(r,e){const t=typeof r=="object"?r:Ky(),s=typeof r=="string"?r:Ku,o=Qd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Yw("firestore");u&&OR(o,...u)}return o}function Kv(r){if(r._terminated)throw new he(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||FR(r),r._firestoreClient}function FR(r){var s,o,u,h;const e=r._freezeSettings(),t=VR(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new CR(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
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
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(Dt.fromBase64String(e))}catch(t){throw new he(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(tl(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:pt("string",_n._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class Qv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Df{constructor(e){this._methodName=e}}/**
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
 */class ir{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ir._jsonSchemaVersion}}static fromJSON(e){if(tl(e,ir._jsonSchema))return new ir(e.latitude,e.longitude)}}ir._jsonSchemaVersion="firestore/geoPoint/1.0",ir._jsonSchema={type:pt("string",ir._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class bn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(tl(e,bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new bn(e.vectorValues);throw new he(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bn._jsonSchemaVersion="firestore/vectorValue/1.0",bn._jsonSchema={type:pt("string",bn._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const UR=/^__.*__$/;class jR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,t,this.fieldTransforms):new nl(e,this.data,t,this.fieldTransforms)}}function Yv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{dataSource:r})}}class Vf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Vf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return rc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Yv(this.dataSource)&&UR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class zR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ec(e)}createContext(e,t,s,o=!1){return new Vf({dataSource:e,methodName:t,targetDoc:s,path:bt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function BR(r){const e=r._freezeSettings(),t=Ec(r._databaseId);return new zR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function $R(r,e,t,s,o,u={}){const h=r.createContext(u.merge||u.mergeFields?2:0,e,t,o);eE("Data must be an object, but it was:",h,s);const m=Xv(s,h);let g,_;if(u.merge)g=new Nn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const T of u.mergeFields){const R=Lf(e,T,t);if(!h.contains(R))throw new he(Q.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);qR(w,R)||w.push(R)}g=new Nn(w),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new jR(new yn(m),g,_)}class Of extends Df{_toFieldTransform(e){return new S1(e.path,new qa)}isEqual(e){return e instanceof Of}}function Jv(r,e){if(Zv(r=Dn(r)))return eE("Unsupported field value:",e,r),Xv(r,e);if(r instanceof Df)return(function(s,o){if(!Yv(o.dataSource))throw o.createError(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Jv(m,o.childContextForArray(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=Dn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return w1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Je.fromDate(s);return{timestampValue:Zu(o.serializer,u)}}if(s instanceof Je){const u=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Zu(o.serializer,u)}}if(s instanceof ir)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _n)return{bytesValue:yv(o.serializer,s._byteString)};if(s instanceof At){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:gf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof bn)return(function(h,m){const g=h instanceof bn?h.toArray():h;return{mapValue:{fields:{[q_]:{stringValue:G_},[Qu]:{arrayValue:{values:g.map((w=>{if(typeof w!="number")throw m.createError("VectorValues must only contain numeric values.");return ff(m.serializer,w)}))}}}}}})(s,o);if(Sv(s))return s._toProto(o.serializer);throw o.createError(`Unsupported field value: ${of(s)}`)})(r,e)}function Xv(r,e){const t={};return j_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(r,((s,o)=>{const u=Jv(o,e.childContextForField(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Zv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Je||r instanceof ir||r instanceof _n||r instanceof At||r instanceof Df||r instanceof bn||Sv(r))}function eE(r,e,t){if(!Zv(t)||!F_(t)){const s=of(t);throw s==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+s)}}function Lf(r,e,t){if((e=Dn(e))instanceof Qv)return e._internalPath;if(typeof e=="string")return WR(r,e);throw rc("Field path arguments must be of type string or ",r,!1,void 0,t)}const HR=new RegExp("[~\\*/\\[\\]]");function WR(r,e,t){if(e.search(HR)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Qv(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function rc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new he(Q.INVALID_ARGUMENT,m+r+g)}function qR(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class GR{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ms(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Qu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>ut(h.doubleValue)));return new bn(t)}convertGeoPoint(e){return new ir(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=fc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp($a(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=tt.fromString(e);Be(Iv(s),9688,{name:e});const o=new Ha(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(t)||Dr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class KR extends GR{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function tE(){return new Of("serverTimestamp")}const Iy="@firebase/firestore",Sy="4.12.0";/**
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
 */class nE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Lf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QR extends nE{data(){return super.data()}}function YR(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Na{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ls extends nE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Lf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ls._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ls._jsonSchemaVersion="firestore/documentSnapshot/1.0",ls._jsonSchema={type:pt("string",ls._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class Fu extends ls{data(e={}){return super.data(e)}}class Fa{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Na(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Fu(this._firestore,this._userDataWriter,s.key,s,new Na(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Fu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Fu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Na(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:JR(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:r})}}/**
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
 */Fa._jsonSchemaVersion="firestore/querySnapshot/1.0",Fa._jsonSchema={type:pt("string",Fa._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};/**
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
 */function XR(r){r=za(r,At);const e=za(r.firestore,bf),t=Kv(e);return NR(t,r._key).then((s=>eC(e,r,s)))}function rE(r,e,t){r=za(r,At);const s=za(r.firestore,bf),o=YR(r.converter,e),u=BR(s);return ZR(s,[$R(u,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,kr.none())])}function ZR(r,e){const t=Kv(r);return bR(t,e)}function eC(r,e,t){const s=t.docs.get(e._key),o=new KR(r);return new ls(r,o,e._key,s,new Na(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){RS(Ao),_o(new cs("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new bf(new kS(s.getProvider("auth-internal")),new bS(h,s.getProvider("app-check-internal")),YS(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Ei(Iy,Sy,e),Ei(Iy,Sy,"esm2020")})();const tC=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"];function nC(r){return tC.filter(e=>!r[e])}function rC(r){const e=nC(r);if(e.length>0)throw new Error(`Missing required Firebase environment variables: ${e.join(", ")}. Ensure variables are set in .env.local (local dev) or GitHub Secrets (CI/CD).`)}const iC={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",VITE_FIREBASE_APP_ID:"1:662195056281:web:9a116d842188f7e7599208",VITE_FIREBASE_AUTH_DOMAIN:"math-trainer-1a632.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"662195056281",VITE_FIREBASE_PROJECT_ID:"math-trainer-1a632",VITE_FIREBASE_STORAGE_BUCKET:"math-trainer-1a632.firebasestorage.app"};rC(iC);const sC={apiKey:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",authDomain:"math-trainer-1a632.firebaseapp.com",projectId:"math-trainer-1a632",storageBucket:"math-trainer-1a632.firebasestorage.app",messagingSenderId:"662195056281",appId:"1:662195056281:web:9a116d842188f7e7599208"};let cd,ic,iE;try{cd=Gy(sC),ic=TS(cd),iE=MR(cd)}catch(r){throw new Error(`Firebase initialization failed: ${r.message}. Check that your Firebase configuration values are correct.`)}function oC(){const[r,e]=Y.useState(null),[t,s]=Y.useState(!0),[o,u]=Y.useState(null),h=Y.useCallback(async()=>{try{u(null),await __(ic)}catch(m){console.error("Anonymous sign-in failed:",m.message),u(m)}},[]);return Y.useEffect(()=>{const m=hI(ic,g=>{g?(e(g),s(!1),console.log("User authenticated with ID:",g.uid)):(e(null),h())},g=>{console.error("Auth state change error:",g.message),u(g),s(!1)});return()=>m()},[h]),{user:r,loading:t,error:o}}const Pr={score:0,streak:0,currentStreak:0,totalProblems:0,correctAnswers:0,lastPlayed:null};function Mf(r){return LR(iE,"users",r,"progress","gameData")}async function Ay(r,e){if(!r)return console.error("saveProgress: userId is required"),!1;try{const t=Mf(r);return await rE(t,{...e,lastPlayed:tE()}),console.log("Progress saved successfully for user:",r.substring(0,8)),!0}catch(t){throw console.error("Failed to save progress:",t.message),t}}async function aC(r){var e;if(!r)return console.error("loadProgress: userId is required"),Pr;try{const t=Mf(r),s=await XR(t);if(s.exists()){const o=s.data();return console.log("Progress loaded for user:",r.substring(0,8)),{...Pr,...o,lastPlayed:((e=o.lastPlayed)==null?void 0:e.toDate())||null}}else return console.log("No progress found for user, returning defaults:",r.substring(0,8)),Pr}catch(t){return console.error("Failed to load progress:",t.message),Pr}}async function lC(r){if(!r)return console.error("resetProgress: userId is required"),!1;try{const e=Mf(r);return await rE(e,{...Pr,lastPlayed:tE()}),console.log("Progress reset for user:",r.substring(0,8)),!0}catch(e){throw console.error("Failed to reset progress:",e.message),e}}const uC=2e3;function cC(r){const[e,t]=Y.useState(Pr),[s,o]=Y.useState(!0),[u,h]=Y.useState(!1),[m,g]=Y.useState(null),_=Y.useRef(!1),w=Y.useRef(null),T=Y.useRef(!0);Y.useEffect(()=>{if(!r){o(!1);return}let B=!1;async function oe(){try{o(!0),g(null);const le=await aC(r);!B&&T.current&&(t(le),_.current=!0)}catch(le){!B&&T.current&&(console.error("useGameProgress: Failed to load progress",le),g(le),t(Pr),_.current=!0)}finally{!B&&T.current&&o(!1)}}return oe(),()=>{B=!0}},[r]),Y.useEffect(()=>(T.current=!0,()=>{T.current=!1,w.current&&clearTimeout(w.current)}),[]);const R=Y.useCallback(B=>{!r||!_.current||(w.current&&clearTimeout(w.current),w.current=setTimeout(async()=>{if(T.current)try{h(!0),await Ay(r,B),T.current&&g(null)}catch(oe){console.error("useGameProgress: Failed to save progress",oe),T.current&&g(oe)}finally{T.current&&h(!1)}},uC))},[r]),z=Y.useCallback(B=>{t(oe=>{const le={...oe,...B};return R(le),le})},[R]),W=Y.useCallback(async()=>{if(!r)return t(Pr),!0;try{return h(!0),g(null),await lC(r),T.current&&t(Pr),!0}catch(B){return console.error("useGameProgress: Failed to reset progress",B),T.current&&g(B),!1}finally{T.current&&h(!1)}},[r]),$=Y.useCallback(async()=>{if(!r||!_.current)return!1;w.current&&clearTimeout(w.current);try{return h(!0),await Ay(r,e),T.current&&g(null),!0}catch(B){return console.error("useGameProgress: Failed to force save",B),T.current&&g(B),!1}finally{T.current&&h(!1)}},[r,e]);return{progress:e,updateProgress:z,resetProgress:W,forceSave:$,loading:s,saving:u,error:m}}const hd=[{id:1,name:"First Steps",operators:["+"],minNumber:1,maxNumber:5,ageTarget:"5-6"},{id:2,name:"Addition Hero",operators:["+"],minNumber:1,maxNumber:10,ageTarget:"6"},{id:3,name:"Minus Magic",operators:["-"],minNumber:1,maxNumber:10,ageTarget:"6-7"},{id:4,name:"Mixed Warrior",operators:["+","-"],minNumber:1,maxNumber:10,ageTarget:"7"},{id:5,name:"Cross the 10",operators:["+"],minNumber:1,maxNumber:20,ageTarget:"7"},{id:6,name:"Subtract 20",operators:["-"],minNumber:1,maxNumber:20,ageTarget:"7-8"},{id:7,name:"Mixed 20",operators:["+","-"],minNumber:1,maxNumber:20,ageTarget:"8"},{id:8,name:"Tens Master",operators:["+","-"],minNumber:10,maxNumber:100,ageTarget:"8-9",multiplesOf:10},{id:9,name:"Century Runner",operators:["+","-"],minNumber:1,maxNumber:100,ageTarget:"9"},{id:10,name:"Speed of 2s",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"9-10",multipliers:[2,5,10]},{id:11,name:"Times Tables",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"10-11",multipliers:[3,4,6,7,8,9]},{id:12,name:"Division Quest",operators:["/"],minNumber:2,maxNumber:10,ageTarget:"11-12",divisors:[2,5,10]},{id:13,name:"Math Champion",operators:["+","-","*","/"],minNumber:1,maxNumber:100,ageTarget:"12-13"}];function jd(r){if(r<1||r>hd.length)throw new Error(`Invalid level: ${r}. Must be 1-${hd.length}`);return hd[r-1]}const zd={NUM_OPTIONS:4,WRONG_ANSWER_RANGE:3},hC=jd(2);function Xn(r,e){return Math.floor(Math.random()*(e-r+1))+r}function Pu(r,e,t){const s=Math.ceil(r/t)*t,o=[];for(let u=s;u<=e;u+=t)o.push(u);return o[Xn(0,o.length-1)]}function sE(r){const e=[...r];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function dC(r,e,t){t===void 0&&(t=r+20);const s=new Set,o=0,u=[];for(let g=-3;g<=zd.WRONG_ANSWER_RANGE;g++){if(g===0)continue;const _=r+g;_>=o&&_<=t&&u.push(_)}const h=sE(u);for(const g of h){if(s.size>=e)break;s.add(g)}let m=zd.WRONG_ANSWER_RANGE+1;for(;s.size<e;){const g=r+m,_=r-m;if(g<=t&&!s.has(g)&&s.add(g),s.size<e&&_>=o&&!s.has(_)&&s.add(_),m++,m>t)break}return Array.from(s).slice(0,e)}function Ry(r=hC){const{operators:e,minNumber:t,maxNumber:s,multiplesOf:o,multipliers:u,divisors:h}=r,m=e[Xn(0,e.length-1)];let g,_,w,T;if(m==="+")g=o?Pu(t,s,o):Xn(t,s),_=o?Pu(t,s,o):Xn(t,s),w=g+_,T=s*2;else if(m==="-")g=o?Pu(t,s,o):Xn(t,s),_=o?Pu(t,g,o):Xn(t,g),g<_&&([g,_]=[_,g]),w=g-_,T=s;else if(m==="*"){const W=u||[2,3,4,5,6,7,8,9,10];g=W[Xn(0,W.length-1)],_=Xn(1,10),w=g*_,T=Math.max(...W)*10}else{const W=h||[2,3,4,5];_=W[Xn(0,W.length-1)];const $=Xn(1,10);g=_*$,w=$,T=Math.max(...W)*10}const R=dC(w,zd.NUM_OPTIONS-1,T),z=sE([w,...R]);return{num1:g,num2:_,operator:m,correctAnswer:w,options:z}}function fC(r,e){return r===e}const pC=8,mC=-12,gC=3,yC=-8,_C=3e3,vC=1e4,EC=1.3,wC=1.6,TC=35,IC=20,SC=5,AC=85,RC=3,CC=50,oE="RECORD_ANSWER",aE="ACKNOWLEDGE_LEVEL_UP",lE="RESET";function Bd(r){return Math.min(100,Math.max(0,Math.round(r)))}function PC(r){let e=pC;return r<_C&&(e+=gC),e}function kC(r){return r>vC?yC:mC}function xC(r,e){return e>=5?r*wC:e>=2?r*EC:r}function uE(r){return{score:Bd(r??CC),streak:0,consecutiveWrong:0,shouldLevelUp:!1,lastDelta:0}}function NC(r,e){switch(e.type){case oE:{const{isCorrect:t,responseTimeMs:s}=e.payload;if(t){const m=r.streak+1,g=PC(s),_=xC(g,m),w=Math.round(_),T=Bd(r.score+w),R=T>=AC&&m>=RC;return{score:T,streak:m,consecutiveWrong:0,shouldLevelUp:r.shouldLevelUp||R,lastDelta:w}}const o=kC(s),u=Bd(r.score+o),h=r.consecutiveWrong+1;return{score:u,streak:0,consecutiveWrong:h,shouldLevelUp:r.shouldLevelUp,lastDelta:o}}case aE:return{...r,shouldLevelUp:!1};case lE:return uE(e.payload);default:return r}}function bC(r){const[e,t]=Y.useReducer(NC,r,uE),s=Y.useCallback((g,_)=>{t({type:oE,payload:{isCorrect:g,responseTimeMs:_}})},[]),o=Y.useCallback(()=>{t({type:aE})},[]),u=Y.useCallback(g=>{t({type:lE,payload:g})},[]),h=e.score<TC,m=e.score<IC&&e.consecutiveWrong>=SC;return{score:e.score,streak:e.streak,consecutiveWrong:e.consecutiveWrong,isStruggling:h,isCritical:m,shouldLevelUp:e.shouldLevelUp,lastDelta:e.lastDelta,recordAnswer:s,acknowledgeLevelUp:o,reset:u}}const DC=2e3,VC=10,dd={isPlaying:!1,currentProblem:null,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0,bestStreak:0,totalProblems:0,correctAnswers:0};function OC({currentLevel:r=2,updateProgress:e,initialProgress:t}={}){const s=bC(),[o,u]=Y.useState(()=>({...dd,score:(t==null?void 0:t.score)??0,bestStreak:(t==null?void 0:t.streak)??0,totalProblems:(t==null?void 0:t.totalProblems)??0,correctAnswers:(t==null?void 0:t.correctAnswers)??0})),h=Y.useRef(null),m=Y.useRef(!0),g=Y.useRef(null);Y.useEffect(()=>(m.current=!0,()=>{m.current=!1,h.current&&clearTimeout(h.current)}),[]),Y.useEffect(()=>{t&&!o.isPlaying&&u($=>({...$,score:t.score??$.score,bestStreak:t.streak??$.bestStreak,totalProblems:t.totalProblems??$.totalProblems,correctAnswers:t.correctAnswers??$.correctAnswers}))},[t,o.isPlaying]);const _=Y.useCallback(()=>{const $=Ry(jd(r));s.reset(),g.current=Date.now(),u(B=>({...B,isPlaying:!0,currentProblem:$,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0}))},[r,s]),w=Y.useCallback(()=>{if(!m.current)return;const $=Ry(jd(r));g.current=Date.now(),u(B=>({...B,currentProblem:$,userAnswer:null,showFeedback:!1,isCorrect:!1}))},[r]),T=Y.useCallback($=>{const B=o;if(!B.isPlaying||!B.currentProblem||B.showFeedback)return;const oe=fC($,B.currentProblem.correctAnswer),le=Date.now()-g.current;s.recordAnswer(oe,le),u(te=>{const fe=oe?te.score+VC:te.score,Ce=oe?te.streak+1:0,Te=Math.max(te.bestStreak,Ce),k=te.totalProblems+1,A=oe?te.correctAnswers+1:te.correctAnswers;return e&&e({score:fe,streak:Te,currentStreak:Ce,totalProblems:k,correctAnswers:A}),{...te,userAnswer:$,showFeedback:!0,isCorrect:oe,score:fe,streak:Ce,bestStreak:Te,totalProblems:k,correctAnswers:A}}),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{m.current&&w()},DC)},[o,e,w,s]),R=Y.useCallback(()=>{h.current&&clearTimeout(h.current),s.reset(),u($=>({...dd,score:$.score,bestStreak:$.bestStreak,totalProblems:$.totalProblems,correctAnswers:$.correctAnswers}))},[s]),z=Y.useCallback(()=>{h.current&&clearTimeout(h.current),s.reset(),u(dd)},[s]),W=Y.useCallback(()=>o.totalProblems===0?0:Math.round(o.correctAnswers/o.totalProblems*100),[o.totalProblems,o.correctAnswers]);return{gameState:o,currentProblem:o.currentProblem,userAnswer:o.userAnswer,score:o.score,streak:s.streak,bestStreak:o.bestStreak,isPlaying:o.isPlaying,showFeedback:o.showFeedback,isCorrect:o.isCorrect,totalProblems:o.totalProblems,correctAnswers:o.correctAnswers,confidenceScore:s.score,isStruggling:s.isStruggling,isCritical:s.isCritical,shouldLevelUp:s.shouldLevelUp,lastDelta:s.lastDelta,consecutiveWrong:s.consecutiveWrong,acknowledgeLevelUp:s.acknowledgeLevelUp,handleAnswer:T,startGame:_,nextProblem:w,resetGame:R,fullReset:z,accuracy:W()}}var fd={exports:{}},pd,Cy;function LC(){if(Cy)return pd;Cy=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return pd=r,pd}var md,Py;function MC(){if(Py)return md;Py=1;var r=LC();function e(){}function t(){}return t.resetWarningCache=e,md=function(){function s(h,m,g,_,w,T){if(T!==r){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}s.isRequired=s;function o(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return u.PropTypes=u,u},md}var ky;function FC(){return ky||(ky=1,fd.exports=MC()()),fd.exports}var UC=FC();const Ee=Wd(UC);function cE({num1:r,num2:e,operator:t}){return V.jsx("section",{className:"bg-sonic-blue rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md mx-auto","aria-label":"Math Problem",children:V.jsx("div",{className:"text-center",children:V.jsxs("p",{className:`text-4xl md:text-6xl font-game text-white tracking-wide
                     drop-shadow-md select-none`,"aria-live":"polite","aria-atomic":"true",children:[V.jsx("span",{className:"inline-block mx-2",children:r}),V.jsx("span",{className:"inline-block mx-2 text-sonic-gold",children:t}),V.jsx("span",{className:"inline-block mx-2",children:e}),V.jsx("span",{className:"inline-block mx-2",children:"="}),V.jsx("span",{className:"inline-block mx-2 text-sonic-gold animate-pulse",children:"?"})]})})})}cE.propTypes={num1:Ee.number.isRequired,num2:Ee.number.isRequired,operator:Ee.string.isRequired};function hE({options:r,onAnswer:e,disabled:t=!1}){const s=u=>{t||e(u)},o=(u,h)=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),s(h))};return V.jsx("div",{className:"grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto mt-6",role:"group","aria-label":"Answer Options",children:r.map((u,h)=>V.jsx("button",{onClick:()=>s(u),onKeyDown:m=>o(m,u),disabled:t,className:`
            bg-sonic-gold text-sonic-blue font-game
            text-3xl md:text-4xl
            py-6 md:py-8 px-4
            rounded-xl shadow-lg
            transform transition-all duration-200
            select-none
            ${t?"opacity-50 cursor-not-allowed":`hover:bg-yellow-400 hover:scale-105
                   active:scale-95 active:bg-yellow-500
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`}
          `,"aria-label":`Answer: ${u}`,children:u},`answer-${h}-${u}`))})}hE.propTypes={options:Ee.arrayOf(Ee.number).isRequired,onAnswer:Ee.func.isRequired,disabled:Ee.bool};function dE({score:r,streak:e}){const s=e>=10?{emoji:"🔥",label:"On Fire!"}:e>=5?{emoji:"⚡",label:"Lightning!"}:e>=3?{emoji:"🦔",label:"Speedy!"}:{emoji:"⭐",label:"Keep going!"};return V.jsxs("div",{className:`flex justify-between items-center w-full max-w-md mx-auto
                 bg-black/30 rounded-xl p-4 md:p-5`,role:"status","aria-label":`Score: ${r}, Streak: ${e}`,children:[V.jsxs("div",{className:"text-center flex-1",children:[V.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Score"}),V.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                     transition-all duration-300`,"aria-live":"polite",children:r})]}),V.jsx("div",{className:"w-px h-12 bg-white/20 mx-4","aria-hidden":"true"}),V.jsxs("div",{className:"text-center flex-1",children:[V.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Streak"}),V.jsxs("div",{className:"flex items-center justify-center gap-2",children:[V.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                       transition-all duration-300
                       ${e>0?"animate-bounce":""}`,"aria-live":"polite",children:e}),e>0&&V.jsx("span",{className:"text-2xl md:text-3xl transition-transform duration-300","aria-label":s.label,role:"img",children:s.emoji})]})]})]})}dE.propTypes={score:Ee.number.isRequired,streak:Ee.number.isRequired};const jC=[{text:"Sonic Speed!",emoji:"🦔💨"},{text:"Amazing!",emoji:"⭐"},{text:"Perfect!",emoji:"🎯"},{text:"Great Job!",emoji:"🎉"},{text:"You're on Fire!",emoji:"🔥"},{text:"Super Star!",emoji:"🌟"},{text:"Awesome!",emoji:"✨"},{text:"Incredible!",emoji:"💫"}],zC=[{text:"Try Again!",emoji:"💪"},{text:"Almost There!",emoji:"🎈"},{text:"Keep Going!",emoji:"🚀"},{text:"You've Got This!",emoji:"👍"},{text:"So Close!",emoji:"🌈"},{text:"One More Try!",emoji:"🎮"}],xy=200,Ny=1500,BC=200;function fE({isCorrect:r,onComplete:e=null}){const[t,s]=Y.useState(!1),[o,u]=Y.useState(!1),[h,m]=Y.useState({text:"",emoji:""}),g=Y.useCallback(()=>{const _=r?jC:zC,w=Math.floor(Math.random()*_.length);return _[w]},[r]);return Y.useEffect(()=>{m(g()),s(!0),u(!1);const _=setTimeout(()=>{u(!0)},xy+Ny),w=setTimeout(()=>{s(!1),e&&e()},xy+Ny+BC);return()=>{clearTimeout(_),clearTimeout(w)}},[r,e,g]),t?V.jsx("div",{className:`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        transition-opacity duration-200
        ${o?"opacity-0":"opacity-100"}
      `,"aria-live":"polite",role:"status",children:V.jsxs("div",{className:`
          flex flex-col items-center justify-center
          p-8 rounded-3xl
          ${r?"bg-gradient-to-br from-green-500 to-emerald-600 animate-feedback-correct":"bg-gradient-to-br from-orange-400 to-amber-500 animate-feedback-wrong"}
          shadow-2xl
          transform
          ${o?"scale-90 opacity-0":"scale-100 opacity-100"}
          transition-all duration-200
        `,children:[V.jsx("div",{className:`text-6xl md:text-7xl mb-4 ${r?"animate-bounce-custom":"animate-shake"}`,children:r?"✅":"🔄"}),V.jsx("h2",{className:`
            text-3xl md:text-4xl font-game text-white text-center
            drop-shadow-lg
            ${r?"animate-pulse-scale":""}
          `,children:h.text}),V.jsx("span",{className:"text-4xl md:text-5xl mt-3 animate-bounce",children:h.emoji}),r&&V.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden rounded-3xl",children:[V.jsx("div",{className:"sparkle sparkle-1",children:"✨"}),V.jsx("div",{className:"sparkle sparkle-2",children:"⭐"}),V.jsx("div",{className:"sparkle sparkle-3",children:"💫"}),V.jsx("div",{className:"sparkle sparkle-4",children:"🌟"}),V.jsx("div",{className:"sparkle sparkle-5",children:"✨"}),V.jsx("div",{className:"sparkle sparkle-6",children:"⭐"})]})]})}):null}fE.propTypes={isCorrect:Ee.bool.isRequired,onComplete:Ee.func};function pE({onGameEnd:r,updateProgress:e=null,initialProgress:t=null}){const{currentProblem:s,score:o,streak:u,bestStreak:h,showFeedback:m,isCorrect:g,handleAnswer:_,startGame:w,isPlaying:T,totalProblems:R,correctAnswers:z,accuracy:W}=OC({updateProgress:e,initialProgress:t});if(!T)return w(),null;if(!s)return V.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex items-center justify-center",children:V.jsx("p",{className:"text-white font-game text-2xl",children:"Loading..."})});const $=()=>{r&&r({score:o,streak:h,totalProblems:R,correctAnswers:z,accuracy:W})};return V.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col p-4 md:p-6 relative",children:[V.jsxs("header",{className:"flex justify-between items-start gap-4 mb-6 md:mb-8",children:[V.jsx("div",{className:"flex-1",children:V.jsx(dE,{score:o,streak:u})}),V.jsx("button",{onClick:$,className:`
            bg-sonic-red/80 hover:bg-sonic-red
            text-white font-game text-sm md:text-base
            px-4 py-2 rounded-lg
            shadow-lg
            transform transition-all duration-200
            hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-red-300
          `,"aria-label":"Exit game and return to start screen",children:"Exit"})]}),V.jsxs("main",{className:"flex-1 flex flex-col items-center justify-center gap-6 md:gap-8",children:[V.jsx("div",{className:"w-full transform transition-all duration-300 ease-out",children:V.jsx(cE,{num1:s.num1,num2:s.num2,operator:s.operator})}),V.jsx("div",{className:"w-full",children:V.jsx(hE,{options:s.options,onAnswer:_,disabled:m})})]}),V.jsx("footer",{className:"h-8 md:h-12","aria-hidden":"true"}),m&&V.jsx(fE,{isCorrect:g})]})}pE.propTypes={onGameEnd:Ee.func.isRequired,updateProgress:Ee.func,initialProgress:Ee.shape({score:Ee.number,streak:Ee.number,totalProblems:Ee.number,correctAnswers:Ee.number})};function mE({onStart:r,progress:e=null}){const t=e&&(e.score>0||e.streak>0);return V.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[V.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[V.jsx("div",{className:"absolute top-10 left-10 text-4xl animate-bounce opacity-50",children:"*"}),V.jsx("div",{className:"absolute top-20 right-16 text-3xl animate-pulse opacity-40",children:"*"}),V.jsx("div",{className:"absolute bottom-32 left-20 text-5xl animate-bounce opacity-30",children:"*"}),V.jsx("div",{className:"absolute bottom-20 right-10 text-4xl animate-pulse opacity-50",children:"*"})]}),V.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[V.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-4 animate-pulse-scale`,children:"Sonic Math Trainer!"}),V.jsxs("div",{className:"flex justify-center gap-2 text-4xl md:text-5xl mb-6",children:[V.jsx("span",{role:"img","aria-label":"hedgehog",children:"🦔"}),V.jsx("span",{role:"img","aria-label":"dash",children:"💨"})]}),V.jsx("p",{className:"text-xl md:text-2xl font-game text-white/90 mb-8 drop-shadow-md",children:"Time to boost your math power!"}),t&&V.jsxs("div",{className:`bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm
                       transform transition-all duration-300 hover:scale-105`,role:"status","aria-label":`Your best: ${e.score} points, ${e.streak} streak`,children:[V.jsx("p",{className:"text-lg md:text-xl font-game text-sonic-gold mb-2",children:"Your Best:"}),V.jsxs("div",{className:"flex justify-center items-center gap-6 flex-wrap",children:[V.jsxs("div",{className:"text-center",children:[V.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.score}),V.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"points"})]}),V.jsx("div",{className:"w-px h-12 bg-white/30","aria-hidden":"true"}),V.jsxs("div",{className:"text-center",children:[V.jsxs("div",{className:"flex items-center justify-center gap-2",children:[V.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.streak}),V.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]}),V.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"streak"})]})]}),e.totalProblems>0&&V.jsxs("p",{className:"text-base text-white/80 font-game mt-4",children:["Accuracy: ",Math.round(e.correctAnswers/e.totalProblems*100),"%"]})]}),V.jsx("button",{onClick:r,className:`
            bg-gradient-to-r from-sonic-gold to-yellow-400
            text-blue-900 font-game text-2xl md:text-3xl
            px-12 py-6 rounded-2xl
            shadow-lg shadow-yellow-500/50
            transform transition-all duration-300
            hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/60
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-yellow-300
            animate-pulse-scale
          `,"aria-label":"Start the math game",children:"Start Game!"}),V.jsxs("p",{className:"text-lg md:text-xl font-game text-white/70 mt-8",children:[V.jsx("span",{role:"img","aria-label":"star",children:"⭐"})," Tap the correct answer to score points!"," ",V.jsx("span",{role:"img","aria-label":"star",children:"⭐"})]})]}),V.jsx("div",{className:"absolute bottom-4 text-center text-white/40 font-game text-sm",children:"Math is fun!"})]})}mE.propTypes={onStart:Ee.func.isRequired,progress:Ee.shape({score:Ee.number,streak:Ee.number,totalProblems:Ee.number,correctAnswers:Ee.number})};function gE({sessionStats:r,onPlayAgain:e,onExit:t}){const{score:s=0,streak:o=0,totalProblems:u=0,correctAnswers:h=0,accuracy:m=0}=r||{},_=m>=80?{text:"Sonic Speed! Amazing!",emoji:"🦔💨",color:"text-green-400"}:m>=50?{text:"Great effort! Keep practicing!",emoji:"⭐",color:"text-sonic-gold"}:{text:"You're learning! Try again!",emoji:"💪",color:"text-orange-400"};return V.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[V.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[V.jsx("div",{className:"absolute top-10 left-8 text-3xl animate-bounce opacity-60",children:"*"}),V.jsx("div",{className:"absolute top-16 right-12 text-4xl animate-pulse opacity-50",children:"*"}),V.jsx("div",{className:"absolute top-32 left-20 text-2xl animate-bounce opacity-40",children:"*"}),V.jsx("div",{className:"absolute bottom-40 right-20 text-4xl animate-pulse opacity-50",children:"*"}),V.jsx("div",{className:"absolute bottom-24 left-12 text-3xl animate-bounce opacity-60",children:"*"}),V.jsx("div",{className:"absolute top-48 right-8 text-2xl animate-pulse opacity-40",children:"*"})]}),V.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[V.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-2 animate-pulse-scale`,children:"Great Job!"}),V.jsx("div",{className:"text-5xl md:text-6xl mb-6",children:V.jsx("span",{role:"img","aria-label":"party",children:"🎉"})}),V.jsxs("p",{className:`text-xl md:text-2xl font-game ${_.color} mb-6 drop-shadow-md`,children:[_.text," ",V.jsx("span",{role:"img","aria-label":"performance icon",children:_.emoji})]}),V.jsx("div",{className:"bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm",role:"status","aria-label":`Session stats: ${s} points, ${o} streak, ${m}% accuracy`,children:V.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[V.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[V.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Points"}),V.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:s})]}),V.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[V.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Best Streak"}),V.jsxs("div",{className:"flex items-center justify-center gap-2",children:[V.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:o}),o>=3&&V.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]})]}),V.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[V.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Accuracy"}),V.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[Math.round(m),"%"]})]}),V.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[V.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Problems"}),V.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[h,"/",u]})]})]})}),V.jsxs("div",{className:"flex flex-col gap-4",children:[V.jsx("button",{onClick:e,className:`
              bg-gradient-to-r from-sonic-gold to-yellow-400
              text-blue-900 font-game text-2xl md:text-3xl
              px-10 py-5 rounded-2xl w-full
              shadow-lg shadow-yellow-500/50
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/60
              active:scale-95
              focus:outline-none focus:ring-4 focus:ring-yellow-300
              animate-pulse-scale
            `,"aria-label":"Play the game again",children:"Play Again!"}),V.jsx("button",{onClick:t,className:`
              bg-white/20 hover:bg-white/30
              text-white font-game text-lg md:text-xl
              px-8 py-4 rounded-xl w-full
              shadow-md
              transform transition-all duration-300
              hover:scale-105
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-white/50
            `,"aria-label":"Go back to start screen",children:"Back to Start"})]}),V.jsxs("p",{className:"text-lg font-game text-white/60 mt-8",children:["Keep practicing to become a Math Master!"," ",V.jsx("span",{role:"img","aria-label":"trophy",children:"🏆"})]})]})]})}gE.propTypes={sessionStats:Ee.shape({score:Ee.number,streak:Ee.number,totalProblems:Ee.number,correctAnswers:Ee.number,accuracy:Ee.number}).isRequired,onPlayAgain:Ee.func.isRequired,onExit:Ee.func.isRequired};const yE=Y.createContext(null);function _E(){const r=Y.useContext(yE);if(r===null)throw new Error("useProfile must be used within a <ProfileProvider>");return r}const vE="math-trainer-profiles",$d=4,os=12,$C=4,Ar=["sonic","spiderman"];function Ic(){try{const r=localStorage.getItem(vE);if(r===null)return[];const e=JSON.parse(r);return Array.isArray(e)?e:(console.warn("[profiles] Corrupt data in localStorage — expected array, got",typeof e),[])}catch(r){return console.warn("[profiles] Failed to parse localStorage data:",r.message),[]}}function Ff(r){localStorage.setItem(vE,JSON.stringify(r))}function HC(r){const e=new Uint8Array(r);let t="";for(let s=0;s<e.length;s++)t+=e[s].toString(16).padStart(2,"0");return t}function by(){return Ic()}function WC({nickname:r,theme:e,pinHash:t,firebaseUid:s=null,currentLevel:o=1}){const u=Ic();if(u.length>=$d)throw new Error(`Maximum of ${$d} profiles reached`);if(typeof r!="string"||r.trim().length===0)throw new Error("Nickname is required");const h=r.trim();if([...h].length>os)throw new Error(`Nickname must be ${os} characters or fewer`);if(!Ar.includes(e))throw new Error(`Theme must be one of: ${Ar.join(", ")}`);if(typeof t!="string"||!/^[0-9a-f]{64}$/.test(t))throw new Error("pinHash must be a 64-character hex string");const m=new Date().toISOString(),g={id:crypto.randomUUID(),nickname:h,theme:e,pinHash:t,firebaseUid:s,currentLevel:o,createdAt:m,lastActiveAt:m};return u.push(g),Ff(u),g}function Dy(r,e){const t=Ic(),s=t.findIndex(m=>m.id===r);if(s===-1)throw new Error(`Profile not found: ${r}`);const{id:o,createdAt:u,...h}=e;return t[s]={...t[s],...h,lastActiveAt:new Date().toISOString()},Ff(t),t[s]}function qC(r){const e=Ic(),t=e.filter(s=>s.id!==r);return t.length===e.length?!1:(Ff(t),!0)}async function Hd(r){if(typeof r!="string"||!/^\d{4}$/.test(r))throw new Error(`PIN must be exactly ${$C} digits`);const t=new TextEncoder().encode(r),s=await crypto.subtle.digest("SHA-256",t);return HC(s)}async function GC(r,e){return await Hd(r)===e}const is="math-trainer-active-profile",KC=3,QC=30,It=Object.freeze({SET_PROFILES:"SET_PROFILES",SET_ACTIVE:"SET_ACTIVE",CLEAR_ACTIVE:"CLEAR_ACTIVE",ADD_PROFILE:"ADD_PROFILE",UPDATE_PROFILE:"UPDATE_PROFILE",DELETE_PROFILE:"DELETE_PROFILE",SET_LOADING:"SET_LOADING",SET_ERROR:"SET_ERROR"}),YC={profiles:[],activeProfile:null,isLoading:!0,error:null};function JC(r,e){var t,s;switch(e.type){case It.SET_PROFILES:return{...r,profiles:e.payload,isLoading:!1};case It.SET_ACTIVE:return{...r,activeProfile:e.payload,error:null};case It.CLEAR_ACTIVE:return{...r,activeProfile:null};case It.ADD_PROFILE:return{...r,profiles:[...r.profiles,e.payload]};case It.UPDATE_PROFILE:return{...r,profiles:r.profiles.map(o=>o.id===e.payload.id?e.payload:o),activeProfile:((t=r.activeProfile)==null?void 0:t.id)===e.payload.id?e.payload:r.activeProfile};case It.DELETE_PROFILE:{const o=r.profiles.filter(u=>u.id!==e.payload);return{...r,profiles:o,activeProfile:((s=r.activeProfile)==null?void 0:s.id)===e.payload?null:r.activeProfile}}case It.SET_LOADING:return{...r,isLoading:e.payload};case It.SET_ERROR:return{...r,error:e.payload};default:return r}}const Ca=4;function sc({profileName:r,onSubmit:e,onCancel:t,isVerifying:s=!1,error:o=null,attempts:u=0,maxAttempts:h=3,cooldownSeconds:m=30}){const[g,_]=Y.useState(""),[w,T]=Y.useState(!1),[R,z]=Y.useState(0),W=Y.useRef(null),$=R>0;Y.useEffect(()=>{u>=h&&R===0&&z(m)},[u,h,m,R]),Y.useEffect(()=>{if(!(R<=0))return W.current=setInterval(()=>{z(te=>te<=1?(clearInterval(W.current),0):te-1)},1e3),()=>clearInterval(W.current)},[R]),Y.useEffect(()=>{if(o){T(!0),_("");const te=setTimeout(()=>T(!1),500);return()=>clearTimeout(te)}},[o]);const B=Y.useCallback(te=>{s||$||_(fe=>{if(fe.length>=Ca)return fe;const Ce=fe+te;return Ce.length===Ca&&setTimeout(()=>e(Ce),0),Ce})},[s,$,e]),oe=Y.useCallback(()=>{s||$||_(te=>te.slice(0,-1))},[s,$]);Y.useEffect(()=>{function te(fe){fe.key>="0"&&fe.key<="9"?B(fe.key):fe.key==="Backspace"?oe():fe.key==="Escape"&&t()}return window.addEventListener("keydown",te),()=>window.removeEventListener("keydown",te)},[B,oe,t]);const le=[["1","2","3"],["4","5","6"],["7","8","9"],["backspace","0","cancel"]];return V.jsx("div",{className:`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm
                 flex items-center justify-center p-4`,role:"dialog","aria-label":`Enter PIN for ${r}`,"aria-modal":"true",children:V.jsxs("div",{className:`bg-gradient-to-b from-sonic-blue to-blue-900
                      rounded-3xl p-6 w-full max-w-xs shadow-2xl`,children:[V.jsx("h2",{className:"text-xl font-game text-white text-center mb-1 drop-shadow-md",children:"Enter PIN"}),V.jsx("p",{className:"text-sm font-game text-white/70 text-center mb-5",dir:"auto",children:r}),V.jsx("div",{className:`flex justify-center gap-3 mb-5 ${w?"animate-shake":""}`,role:"status","aria-live":"polite","aria-label":`${g.length} of ${Ca} digits entered`,children:Array.from({length:Ca}).map((te,fe)=>V.jsx("div",{className:`
                w-5 h-5 rounded-full border-2 transition-all duration-150
                motion-reduce:transition-none
                ${fe<g.length?"bg-sonic-gold border-sonic-gold shadow-md shadow-yellow-500/30 scale-110":"border-white/50 bg-transparent"}
                ${w&&fe<g.length?"border-red-400 bg-red-400":""}
              `,"aria-hidden":"true"},fe))}),o&&V.jsx("p",{className:"text-red-300 text-sm font-game text-center mb-3",role:"alert",children:o}),$&&V.jsxs("p",{className:"text-red-300 text-sm font-game text-center mb-3",role:"alert",children:["Too many tries! Wait ",R,"s"]}),V.jsx("div",{className:"grid grid-cols-3 gap-2 max-w-[280px] mx-auto",children:le.flat().map(te=>te==="backspace"?V.jsx("button",{onClick:oe,disabled:s||$||g.length===0,className:`aspect-square rounded-xl bg-white/10 hover:bg-white/20
                             text-white font-game text-xl
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90 disabled:opacity-30
                             focus:outline-none focus:ring-2 focus:ring-sonic-gold`,"aria-label":"Delete last digit",children:"⌫"},te):te==="cancel"?V.jsx("button",{onClick:t,className:`aspect-square rounded-xl bg-sonic-red/60 hover:bg-sonic-red/80
                             text-white font-game text-sm
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90
                             focus:outline-none focus:ring-2 focus:ring-red-300`,"aria-label":"Cancel PIN entry",children:"Back"},te):V.jsx("button",{onClick:()=>B(te),disabled:s||$||g.length>=Ca,className:`aspect-square rounded-xl bg-white/15 hover:bg-white/25
                           text-white font-game text-2xl
                           flex items-center justify-center
                           transition-all duration-150
                           active:scale-90 disabled:opacity-30
                           focus:outline-none focus:ring-2 focus:ring-sonic-gold`,"aria-label":`Digit ${te}`,children:te},te))}),s&&V.jsx("p",{className:"text-white/70 text-sm font-game text-center mt-4 animate-pulse",children:"Checking..."})]})})}sc.propTypes={profileName:Ee.string.isRequired,onSubmit:Ee.func.isRequired,onCancel:Ee.func.isRequired,isVerifying:Ee.bool,error:Ee.string,attempts:Ee.number,maxAttempts:Ee.number,cooldownSeconds:Ee.number};const XC={sonic:"🦔",spiderman:"🕷"},ZC={sonic:"border-sonic-blue",spiderman:"border-sonic-red"};function EE({onCreateProfile:r,onProfileActivated:e}){const{profiles:t,selectProfile:s,maxProfiles:o}=_E(),[u,h]=Y.useState(null),[m,g]=Y.useState(!1),[_,w]=Y.useState(null),[T,R]=Y.useState(0),z=Y.useCallback(B=>{h(B),w(null),R(0)},[]),W=Y.useCallback(async B=>{if(u){g(!0),w(null);try{await s(u,B)?(h(null),e&&e()):(R(le=>le+1),w("Oops! Wrong PIN. Try again."),navigator.vibrate&&navigator.vibrate(100))}catch{w("Something went wrong. Try again.")}finally{g(!1)}}},[u,s,e]),$=Y.useCallback(()=>{h(null),w(null),R(0)},[]);return t.length===0?V.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                      flex flex-col items-center justify-center p-6`,children:[V.jsx("h1",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-4 text-center",children:"Welcome to Math Trainer!"}),V.jsx("p",{className:"text-lg font-game text-white/80 mb-8 text-center",children:"Create your first hero to start playing!"}),V.jsx("button",{onClick:r,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                     text-blue-900 font-game text-xl
                     px-10 py-5 rounded-2xl
                     shadow-lg shadow-yellow-500/50
                     transform transition-all duration-300
                     hover:scale-110 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Create your first hero profile",children:"+ Create Hero"})]}):V.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                    flex flex-col items-center p-6`,children:[V.jsx("h1",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-8 mt-8 text-center",children:"Who's playing?"}),V.jsxs("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md",children:[t.map(B=>V.jsxs("button",{onClick:()=>z(B),className:`
              bg-black/20 backdrop-blur-sm rounded-2xl p-4
              border-2 ${ZC[B.theme]||"border-white/30"}
              flex flex-col items-center gap-2
              transform transition-all duration-200
              hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-sonic-gold
            `,"aria-label":`Select ${B.nickname}, Level ${B.currentLevel}`,children:[V.jsx("span",{className:"text-4xl",role:"img","aria-hidden":"true",children:XC[B.theme]||B.nickname.charAt(0).toUpperCase()}),V.jsx("span",{className:"text-lg font-game text-white truncate w-full text-center",dir:"auto",children:B.nickname}),V.jsxs("span",{className:"text-xs font-game text-sonic-gold bg-sonic-gold/20 px-2 py-0.5 rounded-full",children:["Level ",B.currentLevel]})]},B.id)),t.length<o&&V.jsxs("button",{onClick:r,className:`bg-transparent rounded-2xl p-4
                       border-2 border-dashed border-white/30
                       flex flex-col items-center justify-center gap-2
                       transform transition-all duration-200
                       hover:scale-105 hover:border-sonic-gold/50 active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-sonic-gold
                       min-h-[140px]`,"aria-label":"Create a new hero profile",children:[V.jsx("span",{className:"text-4xl text-white/50",children:"+"}),V.jsx("span",{className:"text-sm font-game text-white/50",children:"Add Hero"})]})]}),u&&V.jsx(sc,{profileName:u.nickname,onSubmit:W,onCancel:$,isVerifying:m,error:_,attempts:T,maxAttempts:KC,cooldownSeconds:QC})]})}EE.propTypes={onCreateProfile:Ee.func.isRequired,onProfileActivated:Ee.func};const xt=Object.freeze({SET_NICKNAME:"SET_NICKNAME",SET_THEME:"SET_THEME",SET_PIN_HASH:"SET_PIN_HASH",CONFIRM_MISMATCH:"CONFIRM_MISMATCH",SET_SUBMITTING:"SET_SUBMITTING",SET_ERROR:"SET_ERROR",GO_BACK:"GO_BACK",RESET:"RESET"}),wE={step:1,nickname:"",theme:null,pinHash:null,isSubmitting:!1,error:null};function eP(r,e){switch(e.type){case xt.SET_NICKNAME:return{...r,nickname:e.payload,step:2,error:null};case xt.SET_THEME:return{...r,theme:e.payload,step:3,error:null};case xt.SET_PIN_HASH:return{...r,pinHash:e.payload,step:4,error:null};case xt.CONFIRM_MISMATCH:return{...r,error:"PINs do not match. Try again!"};case xt.SET_SUBMITTING:return{...r,isSubmitting:e.payload,error:null};case xt.SET_ERROR:return{...r,error:e.payload,isSubmitting:!1};case xt.GO_BACK:return r.step===2?{...r,step:1,error:null}:r.step===3?{...r,step:2,error:null}:r.step===4?{...r,step:3,pinHash:null,error:null}:r;case xt.RESET:return{...wE};default:return r}}const Vy=4,Oy={sonic:"🦔",spiderman:"🕷"},Ly={sonic:"Sonic",spiderman:"Spiderman"},tP={sonic:"shadow-blue-500/40",spiderman:"shadow-red-500/40"},nP={sonic:"border-sonic-blue",spiderman:"border-sonic-red"};function TE({currentStep:r}){return V.jsx("div",{className:"flex justify-center gap-3 mb-6",role:"group","aria-label":"Profile creation progress",children:Array.from({length:Vy}).map((e,t)=>{const s=t+1,o=s===r,u=s<r;return V.jsx("div",{className:`
              w-3 h-3 rounded-full transition-all duration-300
              motion-reduce:transition-none
              ${u?"bg-sonic-gold":""}
              ${o?"bg-sonic-gold animate-pulse motion-reduce:animate-none":""}
              ${!u&&!o?"border-2 border-white/30 bg-transparent":""}
            `,"aria-current":o?"step":void 0,"aria-label":`Step ${s} of ${Vy}${o?", current":u?", completed":""}`},s)})})}TE.propTypes={currentStep:Ee.number.isRequired};function IE({onComplete:r,onCancel:e}){const[t,s]=Y.useReducer(eP,wE),o=Y.useRef(null),u=Y.useRef(null),h=Y.useRef(!0);Y.useEffect(()=>(h.current=!0,()=>{h.current=!1}),[]),Y.useEffect(()=>{t.step===1&&o.current&&o.current.focus()},[t.step]);const[m,g]=Y.useReducer((b,I)=>I,t.nickname);Y.useEffect(()=>{t.step===1&&g(t.nickname)},[t.step,t.nickname]);const[_,w]=Y.useReducer((b,I)=>I,t.theme);Y.useEffect(()=>{t.step===2&&w(t.theme)},[t.step,t.theme]);const T=[...m].length,R=os-T,z=m.trim().length>0&&T<=os,W=Y.useCallback(b=>{const I=b.target.value;[...I].length<=os&&g(I)},[]),$=Y.useCallback(()=>{const b=m.trim();b.length>0&&[...b].length<=os&&s({type:xt.SET_NICKNAME,payload:b})},[m]),B=Y.useCallback(b=>{b.key==="Enter"&&(b.preventDefault(),$())},[$]),oe=Y.useCallback(()=>{_&&Ar.includes(_)&&s({type:xt.SET_THEME,payload:_})},[_]),le=Y.useCallback(b=>{if(b.key==="ArrowLeft"||b.key==="ArrowRight"){b.preventDefault();const I=Ar.indexOf(_),ke=b.key==="ArrowRight"?(I+1)%Ar.length:(I-1+Ar.length)%Ar.length;w(Ar[ke])}},[_]),te=Y.useCallback(async b=>{try{const I=await Hd(b);h.current&&s({type:xt.SET_PIN_HASH,payload:I})}catch{h.current&&s({type:xt.SET_ERROR,payload:"Could not process PIN. Try again."})}},[]),fe=Y.useCallback(async b=>{var I;try{const ke=await Hd(b);if(!h.current)return;if(ke!==t.pinHash){s({type:xt.CONFIRM_MISMATCH});return}s({type:xt.SET_SUBMITTING,payload:!0});const rt=await __(ic);if(!h.current)return;const vt=rt.user.uid,qe=WC({nickname:t.nickname,theme:t.theme,pinHash:t.pinHash,firebaseUid:vt});if(!h.current)return;r(qe)}catch(ke){if(!h.current)return;const rt=(I=ke==null?void 0:ke.message)!=null&&I.includes("Maximum")?ke.message:"Could not create hero. Try again!";s({type:xt.SET_ERROR,payload:rt})}},[t.pinHash,t.nickname,t.theme,r]),Ce=Y.useCallback(()=>{s({type:xt.SET_ERROR,payload:null})},[]),Te=Y.useCallback(()=>{s({type:xt.GO_BACK})},[]);Y.useEffect(()=>{function b(I){I.key==="Escape"&&(t.step===1?e():t.isSubmitting||Te())}return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[t.step,t.isSubmitting,e,Te]);const k=()=>t.isSubmitting?null:t.step===1?V.jsx("button",{onClick:e,className:`text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                     hover:text-white transition-colors duration-150
                     focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg`,"aria-label":"Cancel profile creation",children:"Cancel"}):V.jsx("button",{onClick:Te,className:`text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                   hover:text-white transition-colors duration-150
                   focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg`,"aria-label":"Go back to previous step",children:"Back"}),A=()=>V.jsxs("div",{className:"flex flex-col items-center gap-4 w-full max-w-sm",children:[V.jsx("h2",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md text-center",children:"What is your name?"}),V.jsxs("div",{className:"w-full bg-black/20 backdrop-blur-sm rounded-2xl p-4",children:[V.jsx("input",{ref:o,type:"text",value:m,onChange:W,onKeyDown:B,placeholder:"Type your name...",dir:"auto",maxLength:os*2,className:`w-full bg-transparent text-2xl font-game text-white text-center
                     placeholder-white/40 outline-none`,"aria-label":"Enter your nickname"}),V.jsxs("p",{className:"text-white/70 text-xs font-game text-center mt-2",children:[R," characters left"]})]}),V.jsx("button",{onClick:$,disabled:!z,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                   text-blue-900 font-game text-xl
                   px-10 py-4 rounded-2xl min-h-[48px]
                   shadow-lg shadow-yellow-500/50
                   transform transition-all duration-300
                   motion-reduce:transition-none
                   hover:scale-105 active:scale-95
                   disabled:opacity-40 disabled:hover:scale-100
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Continue to theme selection",children:"Next"}),k()]}),C=()=>V.jsxs("div",{className:"flex flex-col items-center gap-4 w-full max-w-sm",children:[V.jsx("h2",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md text-center",children:"Choose your hero!"}),V.jsx("div",{className:"grid grid-cols-2 gap-4 w-full",role:"radiogroup","aria-label":"Select a theme",onKeyDown:le,children:Ar.map(b=>{const I=_===b;return V.jsxs("button",{role:"radio","aria-checked":I,"aria-label":`${Ly[b]} theme`,onClick:()=>w(b),className:`
                relative bg-black/20 backdrop-blur-sm rounded-2xl p-4
                border-2 min-h-[160px]
                flex flex-col items-center justify-center gap-2
                transform transition-all duration-300
                motion-reduce:transition-none
                hover:scale-105 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-sonic-gold
                ${I?`${nP[b]} scale-105 shadow-lg ${tP[b]}`:"border-white/30"}
              `,children:[V.jsx("span",{className:"text-6xl",role:"img","aria-hidden":"true",children:Oy[b]}),V.jsx("span",{className:"text-lg font-game text-white",children:Ly[b]}),I&&V.jsx("span",{className:"absolute top-2 right-2 text-sonic-gold text-xl","aria-hidden":"true",children:"✔"})]},b)})}),V.jsx("button",{ref:u,onClick:oe,disabled:!_,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                   text-blue-900 font-game text-xl
                   px-10 py-4 rounded-2xl min-h-[48px]
                   shadow-lg shadow-yellow-500/50
                   transform transition-all duration-300
                   motion-reduce:transition-none
                   hover:scale-105 active:scale-95
                   disabled:opacity-40 disabled:hover:scale-100
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Continue to PIN entry",children:"Next"}),k()]}),x=()=>V.jsx(sc,{profileName:"Choose a secret PIN",onSubmit:te,onCancel:Te,isVerifying:!1,error:t.error,attempts:0,maxAttempts:999,cooldownSeconds:0}),N=()=>V.jsx(sc,{profileName:"Confirm your PIN",onSubmit:fe,onCancel:Te,isVerifying:t.isSubmitting,error:t.error,attempts:0,maxAttempts:999,cooldownSeconds:0});return t.isSubmitting?V.jsx("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                    flex flex-col items-center justify-center p-6`,role:"dialog","aria-label":"Create a new hero profile",children:V.jsxs("div",{className:"text-center animate-pulse motion-reduce:animate-none",children:[V.jsx("span",{className:"text-6xl block mb-4",role:"img","aria-hidden":"true",children:Oy[t.theme]||"🌟"}),V.jsx("h2",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md",children:"Creating your hero..."})]})}):t.error&&t.step===4&&t.pinHash&&t.error!=="PINs do not match. Try again!"&&t.error!=="Could not process PIN. Try again."?V.jsx("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                      flex flex-col items-center justify-center p-6`,role:"dialog","aria-label":"Create a new hero profile",children:V.jsxs("div",{className:"text-center",children:[V.jsx("p",{className:"text-red-300 text-lg font-game mb-6",role:"alert",children:t.error}),V.jsx("button",{onClick:Ce,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                         text-blue-900 font-game text-xl
                         px-10 py-4 rounded-2xl min-h-[48px]
                         shadow-lg shadow-yellow-500/50
                         transform transition-all duration-300
                         motion-reduce:transition-none
                         hover:scale-105 active:scale-95
                         focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Try creating your hero again",children:"Try Again"}),V.jsx("div",{className:"mt-4",children:V.jsx("button",{onClick:Te,className:`text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                           hover:text-white transition-colors duration-150
                           focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg`,"aria-label":"Go back to previous step",children:"Back"})})]})}):t.step===3?x():t.step===4?N():V.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                  flex flex-col items-center justify-center p-6`,role:"dialog","aria-label":"Create a new hero profile",children:[V.jsx(TE,{currentStep:t.step}),t.step===1&&A(),t.step===2&&C()]})}IE.propTypes={onComplete:Ee.func.isRequired,onCancel:Ee.func.isRequired};function rP(){const{activeProfile:r,isLoading:e,clearActiveProfile:t,createAndActivate:s}=_E(),{user:o,loading:u,error:h}=oC(),{progress:m,updateProgress:g,forceSave:_,loading:w}=cC((r==null?void 0:r.firebaseUid)??(o==null?void 0:o.uid)),[T,R]=Y.useState("start"),[z,W]=Y.useState(null),[$,B]=Y.useState(!1),oe=e||u||w,le=Y.useCallback(x=>{if(x){const N=x.accuracy??(x.totalProblems>0?Math.round(x.correctAnswers/x.totalProblems*100):0);W({score:x.score??0,streak:x.streak??0,totalProblems:x.totalProblems??0,correctAnswers:x.correctAnswers??0,accuracy:N}),R("result")}else R("start")},[]),te=Y.useCallback(()=>{W(null),R("game")},[]),fe=Y.useCallback(()=>{W(null),R("game")},[]),Ce=Y.useCallback(()=>{_(),W(null),R("start")},[_]),Te=Y.useCallback(()=>{_(),t(),W(null),R("start")},[_,t]),k=Y.useCallback(()=>{B(!0)},[]),A=Y.useCallback(x=>{s(x),B(!1)},[s]),C=Y.useCallback(()=>{B(!1)},[]);return oe?V.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:V.jsxs("div",{className:"animate-pulse",children:[V.jsx("h1",{className:"text-4xl md:text-6xl font-game text-sonic-gold drop-shadow-lg text-center",children:"Loading..."}),V.jsx("p",{className:"text-xl text-white mt-4 font-game text-center",children:e?"Loading heroes...":u?"Connecting to Sonic Speed!":"Loading your progress..."})]})}):!r&&$?V.jsx(IE,{onComplete:A,onCancel:C}):r?h?V.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:V.jsxs("div",{className:"text-center",children:[V.jsx("h1",{className:"text-4xl md:text-6xl font-game text-red-500 drop-shadow-lg",children:"Oops!"}),V.jsx("p",{className:"text-xl text-white mt-4 font-game",children:"Could not connect to save your progress"}),V.jsx("p",{className:"text-sm text-white mt-2 opacity-75",children:h.message}),V.jsx("button",{onClick:()=>R("game"),className:`mt-6 bg-sonic-gold text-sonic-blue font-game px-8 py-4 rounded-full
                       hover:bg-yellow-400 transform hover:scale-105 transition-all
                       shadow-lg active:scale-95 text-xl`,children:"Play Anyway!"})]})}):V.jsxs(V.Fragment,{children:[T==="start"&&V.jsx(mE,{onStart:te,progress:m,onSwitchProfile:Te,activeProfile:r}),T==="game"&&V.jsx(pE,{onGameEnd:le,updateProgress:g,initialProgress:m}),T==="result"&&z&&V.jsx(gE,{sessionStats:z,onPlayAgain:fe,onExit:Ce})]}):V.jsx(EE,{onCreateProfile:k})}function SE({children:r}){const[e,t]=Y.useReducer(JC,YC);Y.useEffect(()=>{const T=by();t({type:It.SET_PROFILES,payload:T});const R=sessionStorage.getItem(is);if(R){const z=T.find(W=>W.id===R)||null;z?t({type:It.SET_ACTIVE,payload:z}):sessionStorage.removeItem(is)}},[]);const s=Y.useCallback(async(T,R)=>{if(!await GC(R,T.pinHash))return!1;const W=Dy(T.id,{});return t({type:It.SET_ACTIVE,payload:W}),sessionStorage.setItem(is,T.id),!0},[]),o=Y.useCallback(()=>{t({type:It.CLEAR_ACTIVE}),sessionStorage.removeItem(is)},[]),u=Y.useCallback(()=>{const T=by();t({type:It.SET_PROFILES,payload:T})},[]),h=Y.useCallback(T=>{t({type:It.ADD_PROFILE,payload:T})},[]),m=Y.useCallback(T=>{t({type:It.ADD_PROFILE,payload:T}),t({type:It.SET_ACTIVE,payload:T}),sessionStorage.setItem(is,T.id)},[]),g=Y.useCallback((T,R)=>{const z=Dy(T,R);return t({type:It.UPDATE_PROFILE,payload:z}),z},[]),_=Y.useCallback(T=>{const R=qC(T);return R&&(t({type:It.DELETE_PROFILE,payload:T}),sessionStorage.getItem(is)===T&&sessionStorage.removeItem(is)),R},[]),w=Y.useMemo(()=>({profiles:e.profiles,activeProfile:e.activeProfile,isLoading:e.isLoading,error:e.error,maxProfiles:$d,selectProfile:s,clearActiveProfile:o,refreshProfiles:u,addProfile:h,createAndActivate:m,updateProfile:g,deleteProfile:_}),[e.profiles,e.activeProfile,e.isLoading,e.error,s,o,u,h,m,g,_]);return V.jsx(yE.Provider,{value:w,children:r})}SE.propTypes={children:Ee.node.isRequired};zw.createRoot(document.getElementById("root")).render(V.jsx(Vw.StrictMode,{children:V.jsx(SE,{children:V.jsx(rP,{})})}));
