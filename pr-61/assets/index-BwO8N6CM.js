(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Fd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zh={exports:{}},Ta={},Bh={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function vw(){if(jm)return Pe;jm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function R(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,$={};function B(b,W,Ae){this.props=b,this.context=W,this.refs=$,this.updater=Ae||z}B.prototype.isReactComponent={},B.prototype.setState=function(b,W){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,W,"setState")},B.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ae(){}ae.prototype=B.prototype;function ue(b,W,Ae){this.props=b,this.context=W,this.refs=$,this.updater=Ae||z}var te=ue.prototype=new ae;te.constructor=ue,Q(te,B.prototype),te.isPureReactComponent=!0;var ge=Array.isArray,Ee=Object.prototype.hasOwnProperty,Ce={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(b,W,Ae){var Re,ke={},xe=null,je=null;if(W!=null)for(Re in W.ref!==void 0&&(je=W.ref),W.key!==void 0&&(xe=""+W.key),W)Ee.call(W,Re)&&!k.hasOwnProperty(Re)&&(ke[Re]=W[Re]);var Le=arguments.length-2;if(Le===1)ke.children=Ae;else if(1<Le){for(var $e=Array(Le),Bt=0;Bt<Le;Bt++)$e[Bt]=arguments[Bt+2];ke.children=$e}if(b&&b.defaultProps)for(Re in Le=b.defaultProps,Le)ke[Re]===void 0&&(ke[Re]=Le[Re]);return{$$typeof:r,type:b,key:xe,ref:je,props:ke,_owner:Ce.current}}function P(b,W){return{$$typeof:r,type:b.type,key:W,ref:b.ref,props:b.props,_owner:b._owner}}function D(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function x(b){var W={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Ae){return W[Ae]})}var V=/\/+/g;function A(b,W){return typeof b=="object"&&b!==null&&b.key!=null?x(""+b.key):W.toString(36)}function We(b,W,Ae,Re,ke){var xe=typeof b;(xe==="undefined"||xe==="boolean")&&(b=null);var je=!1;if(b===null)je=!0;else switch(xe){case"string":case"number":je=!0;break;case"object":switch(b.$$typeof){case r:case e:je=!0}}if(je)return je=b,ke=ke(je),b=Re===""?"."+A(je,0):Re,ge(ke)?(Ae="",b!=null&&(Ae=b.replace(V,"$&/")+"/"),We(ke,W,Ae,"",function(Bt){return Bt})):ke!=null&&(D(ke)&&(ke=P(ke,Ae+(!ke.key||je&&je.key===ke.key?"":(""+ke.key).replace(V,"$&/")+"/")+b)),W.push(ke)),1;if(je=0,Re=Re===""?".":Re+":",ge(b))for(var Le=0;Le<b.length;Le++){xe=b[Le];var $e=Re+A(xe,Le);je+=We(xe,W,Ae,$e,ke)}else if($e=R(b),typeof $e=="function")for(b=$e.call(b),Le=0;!(xe=b.next()).done;)xe=xe.value,$e=Re+A(xe,Le++),je+=We(xe,W,Ae,$e,ke);else if(xe==="object")throw W=String(b),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return je}function _t(b,W,Ae){if(b==null)return b;var Re=[],ke=0;return We(b,Re,"","",function(xe){return W.call(Ae,xe,ke++)}),Re}function Nt(b){if(b._status===-1){var W=b._result;W=W(),W.then(function(Ae){(b._status===0||b._status===-1)&&(b._status=1,b._result=Ae)},function(Ae){(b._status===0||b._status===-1)&&(b._status=2,b._result=Ae)}),b._status===-1&&(b._status=0,b._result=W)}if(b._status===1)return b._result.default;throw b._result}var Je={current:null},Z={transition:null},de={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ce};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:_t,forEach:function(b,W,Ae){_t(b,function(){W.apply(this,arguments)},Ae)},count:function(b){var W=0;return _t(b,function(){W++}),W},toArray:function(b){return _t(b,function(W){return W})||[]},only:function(b){if(!D(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Pe.Component=B,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=ue,Pe.StrictMode=s,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Pe.act=ie,Pe.cloneElement=function(b,W,Ae){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Re=Q({},b.props),ke=b.key,xe=b.ref,je=b._owner;if(W!=null){if(W.ref!==void 0&&(xe=W.ref,je=Ce.current),W.key!==void 0&&(ke=""+W.key),b.type&&b.type.defaultProps)var Le=b.type.defaultProps;for($e in W)Ee.call(W,$e)&&!k.hasOwnProperty($e)&&(Re[$e]=W[$e]===void 0&&Le!==void 0?Le[$e]:W[$e])}var $e=arguments.length-2;if($e===1)Re.children=Ae;else if(1<$e){Le=Array($e);for(var Bt=0;Bt<$e;Bt++)Le[Bt]=arguments[Bt+2];Re.children=Le}return{$$typeof:r,type:b.type,key:ke,ref:xe,props:Re,_owner:je}},Pe.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:u,_context:b},b.Consumer=b},Pe.createElement=S,Pe.createFactory=function(b){var W=S.bind(null,b);return W.type=b,W},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(b){return{$$typeof:m,render:b}},Pe.isValidElement=D,Pe.lazy=function(b){return{$$typeof:E,_payload:{_status:-1,_result:b},_init:Nt}},Pe.memo=function(b,W){return{$$typeof:_,type:b,compare:W===void 0?null:W}},Pe.startTransition=function(b){var W=Z.transition;Z.transition={};try{b()}finally{Z.transition=W}},Pe.unstable_act=ie,Pe.useCallback=function(b,W){return Je.current.useCallback(b,W)},Pe.useContext=function(b){return Je.current.useContext(b)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(b){return Je.current.useDeferredValue(b)},Pe.useEffect=function(b,W){return Je.current.useEffect(b,W)},Pe.useId=function(){return Je.current.useId()},Pe.useImperativeHandle=function(b,W,Ae){return Je.current.useImperativeHandle(b,W,Ae)},Pe.useInsertionEffect=function(b,W){return Je.current.useInsertionEffect(b,W)},Pe.useLayoutEffect=function(b,W){return Je.current.useLayoutEffect(b,W)},Pe.useMemo=function(b,W){return Je.current.useMemo(b,W)},Pe.useReducer=function(b,W,Ae){return Je.current.useReducer(b,W,Ae)},Pe.useRef=function(b){return Je.current.useRef(b)},Pe.useState=function(b){return Je.current.useState(b)},Pe.useSyncExternalStore=function(b,W,Ae){return Je.current.useSyncExternalStore(b,W,Ae)},Pe.useTransition=function(){return Je.current.useTransition()},Pe.version="18.3.1",Pe}var zm;function Ud(){return zm||(zm=1,Bh.exports=vw()),Bh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function Ew(){if(Bm)return Ta;Bm=1;var r=Ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var E,T={},R=null,z=null;_!==void 0&&(R=""+_),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(z=g.ref);for(E in g)s.call(g,E)&&!u.hasOwnProperty(E)&&(T[E]=g[E]);if(m&&m.defaultProps)for(E in g=m.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:m,key:R,ref:z,props:T,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=h,Ta.jsxs=h,Ta}var $m;function ww(){return $m||($m=1,zh.exports=Ew()),zh.exports}var M=ww(),ee=Ud();const Tw=Fd(ee);var _u={},$h={exports:{}},Yt={},Hh={exports:{}},Wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function Iw(){return Hm||(Hm=1,(function(r){function e(Z,de){var ie=Z.length;Z.push(de);e:for(;0<ie;){var b=ie-1>>>1,W=Z[b];if(0<o(W,de))Z[b]=de,Z[ie]=W,ie=b;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var de=Z[0],ie=Z.pop();if(ie!==de){Z[0]=ie;e:for(var b=0,W=Z.length,Ae=W>>>1;b<Ae;){var Re=2*(b+1)-1,ke=Z[Re],xe=Re+1,je=Z[xe];if(0>o(ke,ie))xe<W&&0>o(je,ke)?(Z[b]=je,Z[xe]=ie,b=xe):(Z[b]=ke,Z[Re]=ie,b=Re);else if(xe<W&&0>o(je,ie))Z[b]=je,Z[xe]=ie,b=xe;else break e}}return de}function o(Z,de){var ie=Z.sortIndex-de.sortIndex;return ie!==0?ie:Z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],E=1,T=null,R=3,z=!1,Q=!1,$=!1,B=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(Z){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=Z)s(_),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(_)}}function ge(Z){if($=!1,te(Z),!Q)if(t(g)!==null)Q=!0,Nt(Ee);else{var de=t(_);de!==null&&Je(ge,de.startTime-Z)}}function Ee(Z,de){Q=!1,$&&($=!1,ae(S),S=-1),z=!0;var ie=R;try{for(te(de),T=t(g);T!==null&&(!(T.expirationTime>de)||Z&&!x());){var b=T.callback;if(typeof b=="function"){T.callback=null,R=T.priorityLevel;var W=b(T.expirationTime<=de);de=r.unstable_now(),typeof W=="function"?T.callback=W:T===t(g)&&s(g),te(de)}else s(g);T=t(g)}if(T!==null)var Ae=!0;else{var Re=t(_);Re!==null&&Je(ge,Re.startTime-de),Ae=!1}return Ae}finally{T=null,R=ie,z=!1}}var Ce=!1,k=null,S=-1,P=5,D=-1;function x(){return!(r.unstable_now()-D<P)}function V(){if(k!==null){var Z=r.unstable_now();D=Z;var de=!0;try{de=k(!0,Z)}finally{de?A():(Ce=!1,k=null)}}else Ce=!1}var A;if(typeof ue=="function")A=function(){ue(V)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,_t=We.port2;We.port1.onmessage=V,A=function(){_t.postMessage(null)}}else A=function(){B(V,0)};function Nt(Z){k=Z,Ce||(Ce=!0,A())}function Je(Z,de){S=B(function(){Z(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){Q||z||(Q=!0,Nt(Ee))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(R){case 1:case 2:case 3:var de=3;break;default:de=R}var ie=R;R=de;try{return Z()}finally{R=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,de){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ie=R;R=Z;try{return de()}finally{R=ie}},r.unstable_scheduleCallback=function(Z,de,ie){var b=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?b+ie:b):ie=b,Z){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ie+W,Z={id:E++,callback:de,priorityLevel:Z,startTime:ie,expirationTime:W,sortIndex:-1},ie>b?(Z.sortIndex=ie,e(_,Z),t(g)===null&&Z===t(_)&&($?(ae(S),S=-1):$=!0,Je(ge,ie-b))):(Z.sortIndex=W,e(g,Z),Q||z||(Q=!0,Nt(Ee))),Z},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(Z){var de=R;return function(){var ie=R;R=de;try{return Z.apply(this,arguments)}finally{R=ie}}}})(Wh)),Wh}var Wm;function Sw(){return Wm||(Wm=1,Hh.exports=Iw()),Hh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function Aw(){if(qm)return Yt;qm=1;var r=Ud(),e=Sw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function R(n){return g.call(T,n)?!0:g.call(E,n)?!1:_.test(n)?T[n]=!0:(E[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ae,ue);B[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ae,ue);B[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ae,ue);B[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function te(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(Q(i,a,d,c)&&(a=null),c||d===null?R(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ge=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),x=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,b;function W(n){if(b===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+n}var Ae=!1;function Re(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,I=f.length-1;1<=v&&0<=I&&d[v]!==f[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==f[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==f[I]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=I);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function ke(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Ce:return"Portal";case P:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case We:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case Nt:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function je(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Bt(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ms(n){n._valueTracker||(n._valueTracker=Bt(n))}function Co(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gs(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function rl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Le(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ys(n,i){i=i.checked,i!=null&&te(n,"checked",i,!1)}function ki(n,i){ys(n,i);var a=Le(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ut(n,i.type,a):i.hasOwnProperty("defaultValue")&&ut(n,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ko(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,i,a){(i!=="number"||Vr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function _n(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function xo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function No(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Le(a)}}function il(n,i){var a=Le(i.value),c=Le(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Or(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Do(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _s(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Do(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Lr,sl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function xi(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ol=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(n){ol.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Mr[i]=Mr[n]})});function Fr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Mr.hasOwnProperty(n)&&Mr[n]?(""+i).trim():i+"px"}function vs(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Fr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var bo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vn(n,i){if(i){if(bo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Es(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ur=null;function ws(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var or=null,ar=null,rt=null;function Vo(n){if(n=aa(n)){if(typeof or!="function")throw Error(t(280));var i=n.stateNode;i&&(i=bl(i),or(n.stateNode,n.type,i))}}function jr(n){ar?rt?rt.push(n):rt=[n]:ar=n}function zr(){if(ar){var n=ar,i=rt;if(rt=ar=null,Vo(n),i)for(n=0;n<i.length;n++)Vo(i[n])}}function al(n,i){return n(i)}function ll(){}var bn=!1;function ul(n,i,a){if(bn)return n(i,a);bn=!0;try{return al(n,i,a)}finally{bn=!1,(ar!==null||rt!==null)&&(ll(),zr())}}function Ni(n,i){var a=n.stateNode;if(a===null)return null;var c=bl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Br=!1;if(m)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Br=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Br=!1}function cl(n,i,a,c,d,f,v,I,C){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(G){this.onError(G)}}var lr=!1,Vn=null,Ts=!1,ln=null,hl={onError:function(n){lr=!0,Vn=n}};function dl(n,i,a,c,d,f,v,I,C){lr=!1,Vn=null,cl.apply(hl,arguments)}function Oo(n,i,a,c,d,f,v,I,C){if(dl.apply(this,arguments),lr){if(lr){var U=Vn;lr=!1,Vn=null}else throw Error(t(198));Ts||(Ts=!0,ln=U)}}function En(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Lo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function fl(n){if(En(n)!==n)throw Error(t(188))}function pl(n){var i=n.alternate;if(!i){if(i=En(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return fl(d),n;if(f===c)return fl(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=f;break}if(I===c){v=!0,c=d,a=f;break}I=I.sibling}if(!v){for(I=f.child;I;){if(I===a){v=!0,a=f,c=d;break}if(I===c){v=!0,c=f,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ml(n){return n=pl(n),n!==null?Di(n):null}function Di(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Di(n);if(i!==null)return i;n=n.sibling}return null}var Mo=e.unstable_scheduleCallback,Is=e.unstable_cancelCallback,bi=e.unstable_shouldYield,ur=e.unstable_requestPaint,Ge=e.unstable_now,_c=e.unstable_getCurrentPriorityLevel,Ss=e.unstable_ImmediatePriority,Fo=e.unstable_UserBlockingPriority,Vi=e.unstable_NormalPriority,Uo=e.unstable_LowPriority,As=e.unstable_IdlePriority,Oi=null,Xt=null;function gl(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Oi,n,void 0,(n.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Li,On=Math.log,un=Math.LN2;function Li(n){return n>>>=0,n===0?32:31-(On(n)/un|0)|0}var Ln=64,Hr=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Ue(I):(f&=v,f!==0&&(c=Ue(f)))}else v=a&~d,v!==0?c=Ue(v):f!==0&&(c=Ue(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Zt(i),d=1<<a,c|=n[a],i&=~d;return c}function Mi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fi(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-Zt(f),I=1<<v,C=d[v];C===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Mi(I,i)):C<=i&&(n.expiredLanes|=I),f&=~I}}function jo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zo(){var n=Ln;return Ln<<=1,(Ln&4194240)===0&&(Ln=64),n}function Bo(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ui(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Zt(i),n[i]=a}function vc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Zt(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function $o(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Zt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ve=0;function Mn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ho,Rs,Wo,qo,Go,Fn=!1,Ps=[],Un=null,jn=null,St=null,ji=new Map,hr=new Map,en=[],yl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wr(n,i){switch(n){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":ji.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(i.pointerId)}}function wn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=aa(i),i!==null&&Rs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function _l(n,i,a,c,d){switch(i){case"focusin":return Un=wn(Un,n,i,a,c,d),!0;case"dragenter":return jn=wn(jn,n,i,a,c,d),!0;case"mouseover":return St=wn(St,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return ji.set(f,wn(ji.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,hr.set(f,wn(hr.get(f)||null,n,i,a,c,d)),!0}return!1}function Cs(n){var i=Hi(n.target);if(i!==null){var a=En(i);if(a!==null){if(i=a.tag,i===13){if(i=Lo(a),i!==null){n.blockedOn=i,Go(n.priority,function(){Wo(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function He(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ks(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ur=c,a.target.dispatchEvent(c),Ur=null}else return i=aa(a),i!==null&&Rs(i),n.blockedOn=a,!1;i.shift()}return!0}function vl(n,i,a){He(n)&&a.delete(i)}function Ec(){Fn=!1,Un!==null&&He(Un)&&(Un=null),jn!==null&&He(jn)&&(jn=null),St!==null&&He(St)&&(St=null),ji.forEach(vl),hr.forEach(vl)}function qr(n,i){n.blockedOn===i&&(n.blockedOn=null,Fn||(Fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ec)))}function Gr(n){function i(d){return qr(d,n)}if(0<Ps.length){qr(Ps[0],n);for(var a=1;a<Ps.length;a++){var c=Ps[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Un!==null&&qr(Un,n),jn!==null&&qr(jn,n),St!==null&&qr(St,n),ji.forEach(i),hr.forEach(i),a=0;a<en.length;a++)c=en[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<en.length&&(a=en[0],a.blockedOn===null);)Cs(a),a.blockedOn===null&&en.shift()}var dr=ge.ReactCurrentBatchConfig,fr=!0;function zn(n,i,a,c){var d=Ve,f=dr.transition;dr.transition=null;try{Ve=1,Ko(n,i,a,c)}finally{Ve=d,dr.transition=f}}function El(n,i,a,c){var d=Ve,f=dr.transition;dr.transition=null;try{Ve=4,Ko(n,i,a,c)}finally{Ve=d,dr.transition=f}}function Ko(n,i,a,c){if(fr){var d=ks(n,i,a,c);if(d===null)Nc(n,i,c,Bn,a),Wr(n,c);else if(_l(d,n,i,a,c))c.stopPropagation();else if(Wr(n,c),i&4&&-1<yl.indexOf(n)){for(;d!==null;){var f=aa(d);if(f!==null&&Ho(f),f=ks(n,i,a,c),f===null&&Nc(n,i,c,Bn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Nc(n,i,c,null,a)}}var Bn=null;function ks(n,i,a,c){if(Bn=null,n=ws(c),n=Hi(n),n!==null)if(i=En(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Lo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Bn=n,null}function xs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_c()){case Ss:return 1;case Fo:return 4;case Vi:case Uo:return 16;case As:return 536870912;default:return 16}default:return 16}}var tn=null,Ns=null,pr=null;function wl(){if(pr)return pr;var n,i=Ns,a=i.length,c,d="value"in tn?tn.value:tn.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return pr=d.slice(n,1<c?1-c:void 0)}function zi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function $n(){return!0}function Qo(){return!1}function Dt(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(f):f[I]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$n:Qo,this.isPropagationStopped=Qo,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),i}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=Dt(Hn),Kr=ie({},Hn,{view:0,detail:0}),Ds=Dt(Kr),bs,Vs,nn,$i=ie({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ie,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==nn&&(nn&&n.type==="mousemove"?(bs=n.screenX-nn.screenX,Vs=n.screenY-nn.screenY):Vs=bs=0,nn=n),bs)},movementY:function(n){return"movementY"in n?n.movementY:Vs}}),Yo=Dt($i),Tl=ie({},$i,{dataTransfer:0}),Il=Dt(Tl),Os=ie({},Kr,{relatedTarget:0}),At=Dt(Os),Sl=ie({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Al=Dt(Sl),Qr=ie({},Hn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Dt(Qr),p=ie({},Hn,{data:0}),y=Dt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j[n])?!!i[n]:!1}function Ie(){return X}var ot=ie({},Kr,{key:function(n){if(n.key){var i=w[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=zi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ie,charCode:function(n){return n.type==="keypress"?zi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=Dt(ot),ct=ie({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rn=Dt(ct),mr=ie({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ie}),Wn=Dt(mr),qn=ie({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ls=Dt(qn),Jo=ie({},$i,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=Dt(Jo),pE=[9,13,27,32],wc=m&&"CompositionEvent"in window,Xo=null;m&&"documentMode"in document&&(Xo=document.documentMode);var mE=m&&"TextEvent"in window&&!Xo,Df=m&&(!wc||Xo&&8<Xo&&11>=Xo),bf=" ",Vf=!1;function Of(n,i){switch(n){case"keyup":return pE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function gE(n,i){switch(n){case"compositionend":return Lf(i);case"keypress":return i.which!==32?null:(Vf=!0,bf);case"textInput":return n=i.data,n===bf&&Vf?null:n;default:return null}}function yE(n,i){if(Ms)return n==="compositionend"||!wc&&Of(n,i)?(n=wl(),pr=Ns=tn=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Df&&i.locale!=="ko"?null:i.data;default:return null}}var _E={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!_E[n.type]:i==="textarea"}function Ff(n,i,a,c){jr(c),i=xl(i,"onChange"),0<i.length&&(a=new Bi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Zo=null,ea=null;function vE(n){np(n,0)}function Rl(n){var i=Bs(n);if(Co(i))return n}function EE(n,i){if(n==="change")return i}var Uf=!1;if(m){var Tc;if(m){var Ic="oninput"in document;if(!Ic){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),Ic=typeof jf.oninput=="function"}Tc=Ic}else Tc=!1;Uf=Tc&&(!document.documentMode||9<document.documentMode)}function zf(){Zo&&(Zo.detachEvent("onpropertychange",Bf),ea=Zo=null)}function Bf(n){if(n.propertyName==="value"&&Rl(ea)){var i=[];Ff(i,ea,n,ws(n)),ul(vE,i)}}function wE(n,i,a){n==="focusin"?(zf(),Zo=i,ea=a,Zo.attachEvent("onpropertychange",Bf)):n==="focusout"&&zf()}function TE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rl(ea)}function IE(n,i){if(n==="click")return Rl(i)}function SE(n,i){if(n==="input"||n==="change")return Rl(i)}function AE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Tn=typeof Object.is=="function"?Object.is:AE;function ta(n,i){if(Tn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Tn(n[d],i[d]))return!1}return!0}function $f(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hf(n,i){var a=$f(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$f(a)}}function Wf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Wf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function qf(){for(var n=window,i=Vr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Vr(n.document)}return i}function Sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function RE(n){var i=qf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Wf(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=Hf(a,f);var v=Hf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var PE=m&&"documentMode"in document&&11>=document.documentMode,Fs=null,Ac=null,na=null,Rc=!1;function Gf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||Fs==null||Fs!==Vr(c)||(c=Fs,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),na&&ta(na,c)||(na=c,c=xl(Ac,"onSelect"),0<c.length&&(i=new Bi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Fs)))}function Pl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},Pc={},Kf={};m&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Cl(n){if(Pc[n])return Pc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Kf)return Pc[n]=i[a];return n}var Qf=Cl("animationend"),Yf=Cl("animationiteration"),Jf=Cl("animationstart"),Xf=Cl("transitionend"),Zf=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,i){Zf.set(n,i),u(i,[n])}for(var Cc=0;Cc<ep.length;Cc++){var kc=ep[Cc],CE=kc.toLowerCase(),kE=kc[0].toUpperCase()+kc.slice(1);Yr(CE,"on"+kE)}Yr(Qf,"onAnimationEnd"),Yr(Yf,"onAnimationIteration"),Yr(Jf,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Xf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function tp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Oo(c,i,void 0,n),n.currentTarget=null}function np(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],C=I.instance,U=I.currentTarget;if(I=I.listener,C!==f&&d.isPropagationStopped())break e;tp(d,I,U),f=C}else for(v=0;v<c.length;v++){if(I=c[v],C=I.instance,U=I.currentTarget,I=I.listener,C!==f&&d.isPropagationStopped())break e;tp(d,I,U),f=C}}}if(Ts)throw n=ln,Ts=!1,ln=null,n}function Ke(n,i){var a=i[Mc];a===void 0&&(a=i[Mc]=new Set);var c=n+"__bubble";a.has(c)||(rp(i,n,2,!1),a.add(c))}function xc(n,i,a){var c=0;i&&(c|=4),rp(a,n,c,i)}var kl="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[kl]){n[kl]=!0,s.forEach(function(a){a!=="selectionchange"&&(xE.has(a)||xc(a,!1,n),xc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[kl]||(i[kl]=!0,xc("selectionchange",!1,i))}}function rp(n,i,a,c){switch(xs(i)){case 1:var d=zn;break;case 4:d=El;break;default:d=Ko}a=d.bind(null,i,a,n),d=void 0,!Br||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Nc(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;I!==null;){if(v=Hi(I),v===null)return;if(C=v.tag,C===5||C===6){c=f=v;continue e}I=I.parentNode}}c=c.return}ul(function(){var U=f,G=ws(a),Y=[];e:{var q=Zf.get(n);if(q!==void 0){var ne=Bi,oe=n;switch(n){case"keypress":if(zi(a)===0)break e;case"keydown":case"keyup":ne=Be;break;case"focusin":oe="focus",ne=At;break;case"focusout":oe="blur",ne=At;break;case"beforeblur":case"afterblur":ne=At;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Il;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Wn;break;case Qf:case Yf:case Jf:ne=Al;break;case Xf:ne=Ls;break;case"scroll":ne=Ds;break;case"wheel":ne=fE;break;case"copy":case"cut":case"paste":ne=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=rn}var le=(i&4)!==0,at=!le&&n==="scroll",O=le?q!==null?q+"Capture":null:q;le=[];for(var N=U,F;N!==null;){F=N;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,O!==null&&(J=Ni(N,O),J!=null&&le.push(sa(N,J,F)))),at)break;N=N.return}0<le.length&&(q=new ne(q,oe,null,a,G),Y.push({event:q,listeners:le}))}}if((i&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",q&&a!==Ur&&(oe=a.relatedTarget||a.fromElement)&&(Hi(oe)||oe[gr]))break e;if((ne||q)&&(q=G.window===G?G:(q=G.ownerDocument)?q.defaultView||q.parentWindow:window,ne?(oe=a.relatedTarget||a.toElement,ne=U,oe=oe?Hi(oe):null,oe!==null&&(at=En(oe),oe!==at||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=U),ne!==oe)){if(le=Yo,J="onMouseLeave",O="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(le=rn,J="onPointerLeave",O="onPointerEnter",N="pointer"),at=ne==null?q:Bs(ne),F=oe==null?q:Bs(oe),q=new le(J,N+"leave",ne,a,G),q.target=at,q.relatedTarget=F,J=null,Hi(G)===U&&(le=new le(O,N+"enter",oe,a,G),le.target=F,le.relatedTarget=at,J=le),at=J,ne&&oe)t:{for(le=ne,O=oe,N=0,F=le;F;F=js(F))N++;for(F=0,J=O;J;J=js(J))F++;for(;0<N-F;)le=js(le),N--;for(;0<F-N;)O=js(O),F--;for(;N--;){if(le===O||O!==null&&le===O.alternate)break t;le=js(le),O=js(O)}le=null}else le=null;ne!==null&&ip(Y,q,ne,le,!1),oe!==null&&at!==null&&ip(Y,at,oe,le,!0)}}e:{if(q=U?Bs(U):window,ne=q.nodeName&&q.nodeName.toLowerCase(),ne==="select"||ne==="input"&&q.type==="file")var ce=EE;else if(Mf(q))if(Uf)ce=SE;else{ce=TE;var fe=wE}else(ne=q.nodeName)&&ne.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ce=IE);if(ce&&(ce=ce(n,U))){Ff(Y,ce,a,G);break e}fe&&fe(n,q,U),n==="focusout"&&(fe=q._wrapperState)&&fe.controlled&&q.type==="number"&&ut(q,"number",q.value)}switch(fe=U?Bs(U):window,n){case"focusin":(Mf(fe)||fe.contentEditable==="true")&&(Fs=fe,Ac=U,na=null);break;case"focusout":na=Ac=Fs=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Gf(Y,a,G);break;case"selectionchange":if(PE)break;case"keydown":case"keyup":Gf(Y,a,G)}var pe;if(wc)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ms?Of(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Df&&a.locale!=="ko"&&(Ms||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ms&&(pe=wl()):(tn=G,Ns="value"in tn?tn.value:tn.textContent,Ms=!0)),fe=xl(U,_e),0<fe.length&&(_e=new y(_e,n,null,a,G),Y.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=Lf(a),pe!==null&&(_e.data=pe)))),(pe=mE?gE(n,a):yE(n,a))&&(U=xl(U,"onBeforeInput"),0<U.length&&(G=new y("onBeforeInput","beforeinput",null,a,G),Y.push({event:G,listeners:U}),G.data=pe))}np(Y,i)})}function sa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function xl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ni(n,a),f!=null&&c.unshift(sa(n,f,d)),f=Ni(n,i),f!=null&&c.push(sa(n,f,d))),n=n.return}return c}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ip(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var I=a,C=I.alternate,U=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&U!==null&&(I=U,d?(C=Ni(a,f),C!=null&&v.unshift(sa(a,C,I))):d||(C=Ni(a,f),C!=null&&v.push(sa(a,C,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var NE=/\r\n?/g,DE=/\u0000|\uFFFD/g;function sp(n){return(typeof n=="string"?n:""+n).replace(NE,`
`).replace(DE,"")}function Nl(n,i,a){if(i=sp(i),sp(n)!==i&&a)throw Error(t(425))}function Dl(){}var Dc=null,bc=null;function Vc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,bE=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,VE=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(n){return op.resolve(null).then(n).catch(OE)}:Oc;function OE(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Gr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Gr(i)}function Jr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ap(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var zs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+zs,oa="__reactProps$"+zs,gr="__reactContainer$"+zs,Mc="__reactEvents$"+zs,LE="__reactListeners$"+zs,ME="__reactHandles$"+zs;function Hi(n){var i=n[Gn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[gr]||a[Gn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ap(n);n!==null;){if(a=n[Gn])return a;n=ap(n)}return i}n=a,a=n.parentNode}return null}function aa(n){return n=n[Gn]||n[gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function bl(n){return n[oa]||null}var Fc=[],$s=-1;function Xr(n){return{current:n}}function Qe(n){0>$s||(n.current=Fc[$s],Fc[$s]=null,$s--)}function qe(n,i){$s++,Fc[$s]=n.current,n.current=i}var Zr={},bt=Xr(Zr),Wt=Xr(!1),Wi=Zr;function Hs(n,i){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function Vl(){Qe(Wt),Qe(bt)}function lp(n,i,a){if(bt.current!==Zr)throw Error(t(168));qe(bt,i),qe(Wt,a)}function up(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,je(n)||"Unknown",d));return ie({},a,c)}function Ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,Wi=bt.current,qe(bt,n),qe(Wt,Wt.current),!0}function cp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=up(n,i,Wi),c.__reactInternalMemoizedMergedChildContext=n,Qe(Wt),Qe(bt),qe(bt,n)):Qe(Wt),qe(Wt,a)}var yr=null,Ll=!1,Uc=!1;function hp(n){yr===null?yr=[n]:yr.push(n)}function FE(n){Ll=!0,hp(n)}function ei(){if(!Uc&&yr!==null){Uc=!0;var n=0,i=Ve;try{var a=yr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}yr=null,Ll=!1}catch(d){throw yr!==null&&(yr=yr.slice(n+1)),Mo(Ss,ei),d}finally{Ve=i,Uc=!1}}return null}var Ws=[],qs=0,Ml=null,Fl=0,cn=[],hn=0,qi=null,_r=1,vr="";function Gi(n,i){Ws[qs++]=Fl,Ws[qs++]=Ml,Ml=n,Fl=i}function dp(n,i,a){cn[hn++]=_r,cn[hn++]=vr,cn[hn++]=qi,qi=n;var c=_r;n=vr;var d=32-Zt(c)-1;c&=~(1<<d),a+=1;var f=32-Zt(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,_r=1<<32-Zt(i)+d|a<<d|c,vr=f+n}else _r=1<<f|a<<d|c,vr=n}function jc(n){n.return!==null&&(Gi(n,1),dp(n,1,0))}function zc(n){for(;n===Ml;)Ml=Ws[--qs],Ws[qs]=null,Fl=Ws[--qs],Ws[qs]=null;for(;n===qi;)qi=cn[--hn],cn[hn]=null,vr=cn[--hn],cn[hn]=null,_r=cn[--hn],cn[hn]=null}var sn=null,on=null,Xe=!1,In=null;function fp(n,i){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function pp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,sn=n,on=Jr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,sn=n,on=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=qi!==null?{id:_r,overflow:vr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(Xe){var i=on;if(i){var a=i;if(!pp(n,i)){if(Bc(n))throw Error(t(418));i=Jr(a.nextSibling);var c=sn;i&&pp(n,i)?fp(c,a):(n.flags=n.flags&-4097|2,Xe=!1,sn=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,sn=n}}}function mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Ul(n){if(n!==sn)return!1;if(!Xe)return mp(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Vc(n.type,n.memoizedProps)),i&&(i=on)){if(Bc(n))throw gp(),Error(t(418));for(;i;)fp(n,i),i=Jr(i.nextSibling)}if(mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){on=Jr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}on=null}}else on=sn?Jr(n.stateNode.nextSibling):null;return!0}function gp(){for(var n=on;n;)n=Jr(n.nextSibling)}function Gs(){on=sn=null,Xe=!1}function Hc(n){In===null?In=[n]:In.push(n)}var UE=ge.ReactCurrentBatchConfig;function la(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var I=d.refs;v===null?delete I[f]:I[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function jl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function yp(n){var i=n._init;return i(n._payload)}function _p(n){function i(O,N){if(n){var F=O.deletions;F===null?(O.deletions=[N],O.flags|=16):F.push(N)}}function a(O,N){if(!n)return null;for(;N!==null;)i(O,N),N=N.sibling;return null}function c(O,N){for(O=new Map;N!==null;)N.key!==null?O.set(N.key,N):O.set(N.index,N),N=N.sibling;return O}function d(O,N){return O=li(O,N),O.index=0,O.sibling=null,O}function f(O,N,F){return O.index=F,n?(F=O.alternate,F!==null?(F=F.index,F<N?(O.flags|=2,N):F):(O.flags|=2,N)):(O.flags|=1048576,N)}function v(O){return n&&O.alternate===null&&(O.flags|=2),O}function I(O,N,F,J){return N===null||N.tag!==6?(N=Oh(F,O.mode,J),N.return=O,N):(N=d(N,F),N.return=O,N)}function C(O,N,F,J){var ce=F.type;return ce===k?G(O,N,F.props.children,J,F.key):N!==null&&(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Nt&&yp(ce)===N.type)?(J=d(N,F.props),J.ref=la(O,N,F),J.return=O,J):(J=cu(F.type,F.key,F.props,null,O.mode,J),J.ref=la(O,N,F),J.return=O,J)}function U(O,N,F,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=Lh(F,O.mode,J),N.return=O,N):(N=d(N,F.children||[]),N.return=O,N)}function G(O,N,F,J,ce){return N===null||N.tag!==7?(N=ts(F,O.mode,J,ce),N.return=O,N):(N=d(N,F),N.return=O,N)}function Y(O,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Oh(""+N,O.mode,F),N.return=O,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ee:return F=cu(N.type,N.key,N.props,null,O.mode,F),F.ref=la(O,null,N),F.return=O,F;case Ce:return N=Lh(N,O.mode,F),N.return=O,N;case Nt:var J=N._init;return Y(O,J(N._payload),F)}if(st(N)||de(N))return N=ts(N,O.mode,F,null),N.return=O,N;jl(O,N)}return null}function q(O,N,F,J){var ce=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:I(O,N,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ee:return F.key===ce?C(O,N,F,J):null;case Ce:return F.key===ce?U(O,N,F,J):null;case Nt:return ce=F._init,q(O,N,ce(F._payload),J)}if(st(F)||de(F))return ce!==null?null:G(O,N,F,J,null);jl(O,F)}return null}function ne(O,N,F,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return O=O.get(F)||null,I(N,O,""+J,ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Ee:return O=O.get(J.key===null?F:J.key)||null,C(N,O,J,ce);case Ce:return O=O.get(J.key===null?F:J.key)||null,U(N,O,J,ce);case Nt:var fe=J._init;return ne(O,N,F,fe(J._payload),ce)}if(st(J)||de(J))return O=O.get(F)||null,G(N,O,J,ce,null);jl(N,J)}return null}function oe(O,N,F,J){for(var ce=null,fe=null,pe=N,_e=N=0,wt=null;pe!==null&&_e<F.length;_e++){pe.index>_e?(wt=pe,pe=null):wt=pe.sibling;var Fe=q(O,pe,F[_e],J);if(Fe===null){pe===null&&(pe=wt);break}n&&pe&&Fe.alternate===null&&i(O,pe),N=f(Fe,N,_e),fe===null?ce=Fe:fe.sibling=Fe,fe=Fe,pe=wt}if(_e===F.length)return a(O,pe),Xe&&Gi(O,_e),ce;if(pe===null){for(;_e<F.length;_e++)pe=Y(O,F[_e],J),pe!==null&&(N=f(pe,N,_e),fe===null?ce=pe:fe.sibling=pe,fe=pe);return Xe&&Gi(O,_e),ce}for(pe=c(O,pe);_e<F.length;_e++)wt=ne(pe,O,_e,F[_e],J),wt!==null&&(n&&wt.alternate!==null&&pe.delete(wt.key===null?_e:wt.key),N=f(wt,N,_e),fe===null?ce=wt:fe.sibling=wt,fe=wt);return n&&pe.forEach(function(ui){return i(O,ui)}),Xe&&Gi(O,_e),ce}function le(O,N,F,J){var ce=de(F);if(typeof ce!="function")throw Error(t(150));if(F=ce.call(F),F==null)throw Error(t(151));for(var fe=ce=null,pe=N,_e=N=0,wt=null,Fe=F.next();pe!==null&&!Fe.done;_e++,Fe=F.next()){pe.index>_e?(wt=pe,pe=null):wt=pe.sibling;var ui=q(O,pe,Fe.value,J);if(ui===null){pe===null&&(pe=wt);break}n&&pe&&ui.alternate===null&&i(O,pe),N=f(ui,N,_e),fe===null?ce=ui:fe.sibling=ui,fe=ui,pe=wt}if(Fe.done)return a(O,pe),Xe&&Gi(O,_e),ce;if(pe===null){for(;!Fe.done;_e++,Fe=F.next())Fe=Y(O,Fe.value,J),Fe!==null&&(N=f(Fe,N,_e),fe===null?ce=Fe:fe.sibling=Fe,fe=Fe);return Xe&&Gi(O,_e),ce}for(pe=c(O,pe);!Fe.done;_e++,Fe=F.next())Fe=ne(pe,O,_e,Fe.value,J),Fe!==null&&(n&&Fe.alternate!==null&&pe.delete(Fe.key===null?_e:Fe.key),N=f(Fe,N,_e),fe===null?ce=Fe:fe.sibling=Fe,fe=Fe);return n&&pe.forEach(function(_w){return i(O,_w)}),Xe&&Gi(O,_e),ce}function at(O,N,F,J){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ee:e:{for(var ce=F.key,fe=N;fe!==null;){if(fe.key===ce){if(ce=F.type,ce===k){if(fe.tag===7){a(O,fe.sibling),N=d(fe,F.props.children),N.return=O,O=N;break e}}else if(fe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Nt&&yp(ce)===fe.type){a(O,fe.sibling),N=d(fe,F.props),N.ref=la(O,fe,F),N.return=O,O=N;break e}a(O,fe);break}else i(O,fe);fe=fe.sibling}F.type===k?(N=ts(F.props.children,O.mode,J,F.key),N.return=O,O=N):(J=cu(F.type,F.key,F.props,null,O.mode,J),J.ref=la(O,N,F),J.return=O,O=J)}return v(O);case Ce:e:{for(fe=F.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(O,N.sibling),N=d(N,F.children||[]),N.return=O,O=N;break e}else{a(O,N);break}else i(O,N);N=N.sibling}N=Lh(F,O.mode,J),N.return=O,O=N}return v(O);case Nt:return fe=F._init,at(O,N,fe(F._payload),J)}if(st(F))return oe(O,N,F,J);if(de(F))return le(O,N,F,J);jl(O,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(O,N.sibling),N=d(N,F),N.return=O,O=N):(a(O,N),N=Oh(F,O.mode,J),N.return=O,O=N),v(O)):a(O,N)}return at}var Ks=_p(!0),vp=_p(!1),zl=Xr(null),Bl=null,Qs=null,Wc=null;function qc(){Wc=Qs=Bl=null}function Gc(n){var i=zl.current;Qe(zl),n._currentValue=i}function Kc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ys(n,i){Bl=n,Wc=Qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gt=!0),n.firstContext=null)}function dn(n){var i=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:i,next:null},Qs===null){if(Bl===null)throw Error(t(308));Qs=n,Bl.dependencies={lanes:0,firstContext:n}}else Qs=Qs.next=n;return i}var Ki=null;function Qc(n){Ki===null?Ki=[n]:Ki.push(n)}function Ep(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Qc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Er(n,c)}function Er(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ti=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ni(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Er(n,a)}return d=c.interleaved,d===null?(i.next=i,Qc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Er(n,a)}function $l(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,$o(n,a)}}function Tp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Hl(n,i,a,c){var d=n.updateQueue;ti=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,U=C.next;C.next=null,v===null?f=U:v.next=U,v=C;var G=n.alternate;G!==null&&(G=G.updateQueue,I=G.lastBaseUpdate,I!==v&&(I===null?G.firstBaseUpdate=U:I.next=U,G.lastBaseUpdate=C))}if(f!==null){var Y=d.baseState;v=0,G=U=C=null,I=f;do{var q=I.lane,ne=I.eventTime;if((c&q)===q){G!==null&&(G=G.next={eventTime:ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var oe=n,le=I;switch(q=i,ne=a,le.tag){case 1:if(oe=le.payload,typeof oe=="function"){Y=oe.call(ne,Y,q);break e}Y=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=le.payload,q=typeof oe=="function"?oe.call(ne,Y,q):oe,q==null)break e;Y=ie({},Y,q);break e;case 2:ti=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[I]:q.push(I))}else ne={eventTime:ne,lane:q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},G===null?(U=G=ne,C=Y):G=G.next=ne,v|=q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;q=I,I=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(G===null&&(C=Y),d.baseState=C,d.firstBaseUpdate=U,d.lastBaseUpdate=G,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);Ji|=v,n.lanes=v,n.memoizedState=Y}}function Ip(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ua={},Kn=Xr(ua),ca=Xr(ua),ha=Xr(ua);function Qi(n){if(n===ua)throw Error(t(174));return n}function Jc(n,i){switch(qe(ha,i),qe(ca,n),qe(Kn,ua),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_s(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=_s(i,n)}Qe(Kn),qe(Kn,i)}function Js(){Qe(Kn),Qe(ca),Qe(ha)}function Sp(n){Qi(ha.current);var i=Qi(Kn.current),a=_s(i,n.type);i!==a&&(qe(ca,n),qe(Kn,a))}function Xc(n){ca.current===n&&(Qe(Kn),Qe(ca))}var Ze=Xr(0);function Wl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zc=[];function eh(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var ql=ge.ReactCurrentDispatcher,th=ge.ReactCurrentBatchConfig,Yi=0,et=null,pt=null,vt=null,Gl=!1,da=!1,fa=0,jE=0;function Vt(){throw Error(t(321))}function nh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Tn(n[a],i[a]))return!1;return!0}function rh(n,i,a,c,d,f){if(Yi=f,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ql.current=n===null||n.memoizedState===null?HE:WE,n=a(c,d),da){f=0;do{if(da=!1,fa=0,25<=f)throw Error(t(301));f+=1,vt=pt=null,i.updateQueue=null,ql.current=qE,n=a(c,d)}while(da)}if(ql.current=Yl,i=pt!==null&&pt.next!==null,Yi=0,vt=pt=et=null,Gl=!1,i)throw Error(t(300));return n}function ih(){var n=fa!==0;return fa=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=n:vt=vt.next=n,vt}function fn(){if(pt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var i=vt===null?et.memoizedState:vt.next;if(i!==null)vt=i,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?et.memoizedState=vt=n:vt=vt.next=n}return vt}function pa(n,i){return typeof i=="function"?i(n):i}function sh(n){var i=fn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var I=v=null,C=null,U=f;do{var G=U.lane;if((Yi&G)===G)C!==null&&(C=C.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Y={lane:G,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};C===null?(I=C=Y,v=c):C=C.next=Y,et.lanes|=G,Ji|=G}U=U.next}while(U!==null&&U!==f);C===null?v=c:C.next=I,Tn(c,i.memoizedState)||(Gt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,Ji|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function oh(n){var i=fn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Tn(f,i.memoizedState)||(Gt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Ap(){}function Rp(n,i){var a=et,c=fn(),d=i(),f=!Tn(c.memoizedState,d);if(f&&(c.memoizedState=d,Gt=!0),c=c.queue,ah(kp.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,ma(9,Cp.bind(null,a,c,d,i),void 0,null),Et===null)throw Error(t(349));(Yi&30)!==0||Pp(a,i,d)}return d}function Pp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Cp(n,i,a,c){i.value=a,i.getSnapshot=c,xp(i)&&Np(n)}function kp(n,i,a){return a(function(){xp(i)&&Np(n)})}function xp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Tn(n,a)}catch{return!0}}function Np(n){var i=Er(n,1);i!==null&&Pn(i,n,1,-1)}function Dp(n){var i=Qn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},i.queue=n,n=n.dispatch=$E.bind(null,et,n),[i.memoizedState,n]}function ma(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function bp(){return fn().memoizedState}function Kl(n,i,a,c){var d=Qn();et.flags|=n,d.memoizedState=ma(1|i,a,void 0,c===void 0?null:c)}function Ql(n,i,a,c){var d=fn();c=c===void 0?null:c;var f=void 0;if(pt!==null){var v=pt.memoizedState;if(f=v.destroy,c!==null&&nh(c,v.deps)){d.memoizedState=ma(i,a,f,c);return}}et.flags|=n,d.memoizedState=ma(1|i,a,f,c)}function Vp(n,i){return Kl(8390656,8,n,i)}function ah(n,i){return Ql(2048,8,n,i)}function Op(n,i){return Ql(4,2,n,i)}function Lp(n,i){return Ql(4,4,n,i)}function Mp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Fp(n,i,a){return a=a!=null?a.concat([n]):null,Ql(4,4,Mp.bind(null,i,n),a)}function lh(){}function Up(n,i){var a=fn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&nh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function jp(n,i){var a=fn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&nh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function zp(n,i,a){return(Yi&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(Tn(a,i)||(a=zo(),et.lanes|=a,Ji|=a,n.baseState=!0),i)}function zE(n,i){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=th.transition;th.transition={};try{n(!1),i()}finally{Ve=a,th.transition=c}}function Bp(){return fn().memoizedState}function BE(n,i,a){var c=oi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},$p(n))Hp(i,a);else if(a=Ep(n,i,a,c),a!==null){var d=Ht();Pn(a,n,c,d),Wp(a,i,c)}}function $E(n,i,a){var c=oi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if($p(n))Hp(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,I=f(v,a);if(d.hasEagerState=!0,d.eagerState=I,Tn(I,v)){var C=i.interleaved;C===null?(d.next=d,Qc(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Ep(n,i,d,c),a!==null&&(d=Ht(),Pn(a,n,c,d),Wp(a,i,c))}}function $p(n){var i=n.alternate;return n===et||i!==null&&i===et}function Hp(n,i){da=Gl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Wp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,$o(n,a)}}var Yl={readContext:dn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},HE={readContext:dn,useCallback:function(n,i){return Qn().memoizedState=[n,i===void 0?null:i],n},useContext:dn,useEffect:Vp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Kl(4194308,4,Mp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Kl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Kl(4,2,n,i)},useMemo:function(n,i){var a=Qn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Qn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=BE.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var i=Qn();return n={current:n},i.memoizedState=n},useState:Dp,useDebugValue:lh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Dp(!1),i=n[0];return n=zE.bind(null,n[1]),Qn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=et,d=Qn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Et===null)throw Error(t(349));(Yi&30)!==0||Pp(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,Vp(kp.bind(null,c,f,n),[n]),c.flags|=2048,ma(9,Cp.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=Qn(),i=Et.identifierPrefix;if(Xe){var a=vr,c=_r;a=(c&~(1<<32-Zt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=fa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=jE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},WE={readContext:dn,useCallback:Up,useContext:dn,useEffect:ah,useImperativeHandle:Fp,useInsertionEffect:Op,useLayoutEffect:Lp,useMemo:jp,useReducer:sh,useRef:bp,useState:function(){return sh(pa)},useDebugValue:lh,useDeferredValue:function(n){var i=fn();return zp(i,pt.memoizedState,n)},useTransition:function(){var n=sh(pa)[0],i=fn().memoizedState;return[n,i]},useMutableSource:Ap,useSyncExternalStore:Rp,useId:Bp,unstable_isNewReconciler:!1},qE={readContext:dn,useCallback:Up,useContext:dn,useEffect:ah,useImperativeHandle:Fp,useInsertionEffect:Op,useLayoutEffect:Lp,useMemo:jp,useReducer:oh,useRef:bp,useState:function(){return oh(pa)},useDebugValue:lh,useDeferredValue:function(n){var i=fn();return pt===null?i.memoizedState=n:zp(i,pt.memoizedState,n)},useTransition:function(){var n=oh(pa)[0],i=fn().memoizedState;return[n,i]},useMutableSource:Ap,useSyncExternalStore:Rp,useId:Bp,unstable_isNewReconciler:!1};function Sn(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function uh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jl={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=oi(n),f=wr(c,d);f.payload=i,a!=null&&(f.callback=a),i=ni(n,f,d),i!==null&&(Pn(i,n,d,c),$l(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=oi(n),f=wr(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=ni(n,f,d),i!==null&&(Pn(i,n,d,c),$l(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=oi(n),d=wr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ni(n,d,c),i!==null&&(Pn(i,n,c,a),$l(i,n,c))}};function qp(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!ta(a,c)||!ta(d,f):!0}function Gp(n,i,a){var c=!1,d=Zr,f=i.contextType;return typeof f=="object"&&f!==null?f=dn(f):(d=qt(i)?Wi:bt.current,c=i.contextTypes,f=(c=c!=null)?Hs(n,d):Zr),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Jl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function Kp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Jl.enqueueReplaceState(i,i.state,null)}function ch(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Yc(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=dn(f):(f=qt(i)?Wi:bt.current,d.context=Hs(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(uh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Jl.enqueueReplaceState(d,d.state,null),Hl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var a="",c=i;do a+=ke(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function hh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function dh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var GE=typeof WeakMap=="function"?WeakMap:Map;function Qp(n,i,a){a=wr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){iu||(iu=!0,Ph=c),dh(n,i)},a}function Yp(n,i,a){a=wr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){dh(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){dh(n,i),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Jp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new GE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=aw.bind(null,n,i,a),i.then(n,n))}function Xp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Zp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=wr(-1,1),i.tag=2,ni(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var KE=ge.ReactCurrentOwner,Gt=!1;function $t(n,i,a,c){i.child=n===null?vp(i,null,a,c):Ks(i,n.child,a,c)}function em(n,i,a,c,d){a=a.render;var f=i.ref;return Ys(i,d),c=rh(n,i,a,c,f,d),a=ih(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Tr(n,i,d)):(Xe&&a&&jc(i),i.flags|=1,$t(n,i,c,d),i.child)}function tm(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Vh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,nm(n,i,f,c,d)):(n=cu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ta,a(v,c)&&n.ref===i.ref)return Tr(n,i,d)}return i.flags|=1,n=li(f,c),n.ref=i.ref,n.return=i,i.child=n}function nm(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(ta(f,c)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return i.lanes=n.lanes,Tr(n,i,d)}return fh(n,i,a,c,d)}function rm(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(eo,an),an|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(eo,an),an|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,qe(eo,an),an|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,qe(eo,an),an|=c;return $t(n,i,d,a),i.child}function im(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function fh(n,i,a,c,d){var f=qt(a)?Wi:bt.current;return f=Hs(i,f),Ys(i,d),a=rh(n,i,a,c,f,d),c=ih(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Tr(n,i,d)):(Xe&&c&&jc(i),i.flags|=1,$t(n,i,a,d),i.child)}function sm(n,i,a,c,d){if(qt(a)){var f=!0;Ol(i)}else f=!1;if(Ys(i,d),i.stateNode===null)Zl(n,i),Gp(i,a,c),ch(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var C=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=dn(U):(U=qt(a)?Wi:bt.current,U=Hs(i,U));var G=a.getDerivedStateFromProps,Y=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||C!==U)&&Kp(i,v,c,U),ti=!1;var q=i.memoizedState;v.state=q,Hl(i,c,v,d),C=i.memoizedState,I!==c||q!==C||Wt.current||ti?(typeof G=="function"&&(uh(i,a,G,c),C=i.memoizedState),(I=ti||qp(i,a,I,c,q,C,U))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=U,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,wp(n,i),I=i.memoizedProps,U=i.type===i.elementType?I:Sn(i.type,I),v.props=U,Y=i.pendingProps,q=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=dn(C):(C=qt(a)?Wi:bt.current,C=Hs(i,C));var ne=a.getDerivedStateFromProps;(G=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Y||q!==C)&&Kp(i,v,c,C),ti=!1,q=i.memoizedState,v.state=q,Hl(i,c,v,d);var oe=i.memoizedState;I!==Y||q!==oe||Wt.current||ti?(typeof ne=="function"&&(uh(i,a,ne,c),oe=i.memoizedState),(U=ti||qp(i,a,U,c,q,oe,C)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),v.props=c,v.state=oe,v.context=C,c=U):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),c=!1)}return ph(n,i,a,c,f,d)}function ph(n,i,a,c,d,f){im(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&cp(i,a,!1),Tr(n,i,f);c=i.stateNode,KE.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Ks(i,n.child,null,f),i.child=Ks(i,null,I,f)):$t(n,i,I,f),i.memoizedState=c.state,d&&cp(i,a,!0),i.child}function om(n){var i=n.stateNode;i.pendingContext?lp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&lp(n,i.context,!1),Jc(n,i.containerInfo)}function am(n,i,a,c,d){return Gs(),Hc(d),i.flags|=256,$t(n,i,a,c),i.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function lm(n,i,a){var c=i.pendingProps,d=Ze.current,f=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ze,d&1),n===null)return $c(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=hu(v,c,0,null),n=ts(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=gh(a),i.memoizedState=mh,n):yh(i,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return QE(n,i,v,c,I,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,I=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=li(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?f=li(I,f):(f=ts(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?gh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=mh,c}return f=n.child,n=f.sibling,c=li(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function yh(n,i){return i=hu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Xl(n,i,a,c){return c!==null&&Hc(c),Ks(i,n.child,null,a),n=yh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function QE(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=hh(Error(t(422))),Xl(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=hu({mode:"visible",children:c.children},d,0,null),f=ts(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&Ks(i,n.child,null,v),i.child.memoizedState=gh(v),i.memoizedState=mh,f);if((i.mode&1)===0)return Xl(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,f=Error(t(419)),c=hh(f,c,void 0),Xl(n,i,v,c)}if(I=(v&n.childLanes)!==0,Gt||I){if(c=Et,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Er(n,d),Pn(c,n,d,-1))}return bh(),c=hh(Error(t(421))),Xl(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=lw.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,on=Jr(d.nextSibling),sn=i,Xe=!0,In=null,n!==null&&(cn[hn++]=_r,cn[hn++]=vr,cn[hn++]=qi,_r=n.id,vr=n.overflow,qi=i),i=yh(i,c.children),i.flags|=4096,i)}function um(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Kc(n.return,i,a)}function _h(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function cm(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if($t(n,i,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&um(n,a,i);else if(n.tag===19)um(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Wl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),_h(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Wl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}_h(i,!0,a,null,f);break;case"together":_h(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Tr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ji|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=li(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=li(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function YE(n,i,a){switch(i.tag){case 3:om(i),Gs();break;case 5:Sp(i);break;case 1:qt(i.type)&&Ol(i);break;case 4:Jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(zl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ze,Ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?lm(n,i,a):(qe(Ze,Ze.current&1),n=Tr(n,i,a),n!==null?n.sibling:null);qe(Ze,Ze.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return cm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ze,Ze.current),c)break;return null;case 22:case 23:return i.lanes=0,rm(n,i,a)}return Tr(n,i,a)}var hm,vh,dm,fm;hm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vh=function(){},dm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Qi(Kn.current);var f=null;switch(a){case"input":d=gs(n,d),c=gs(n,c),f=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),f=[];break;case"textarea":d=xo(n,d),c=xo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Dl)}vn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var I=d[U];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var C=c[U];if(I=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&C!==I&&(C!=null||I!=null))if(U==="style")if(I){for(v in I)!I.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&I[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(f||(f=[]),f.push(U,a)),a=C;else U==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(f=f||[]).push(U,C)):U==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(U,""+C):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(C!=null&&U==="onScroll"&&Ke("scroll",n),f||I===C||(f=[])):(f=f||[]).push(U,C))}a&&(f=f||[]).push("style",a);var U=f;(i.updateQueue=U)&&(i.flags|=4)}},fm=function(n,i,a,c){a!==c&&(i.flags|=4)};function ga(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function JE(n,i,a){var c=i.pendingProps;switch(zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(i),null;case 1:return qt(i.type)&&Vl(),Ot(i),null;case 3:return c=i.stateNode,Js(),Qe(Wt),Qe(bt),eh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ul(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,In!==null&&(xh(In),In=null))),vh(n,i),Ot(i),null;case 5:Xc(i);var d=Qi(ha.current);if(a=i.type,n!==null&&i.stateNode!=null)dm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ot(i),null}if(n=Qi(Kn.current),Ul(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[Gn]=i,c[oa]=f,n=(i.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<ra.length;d++)Ke(ra[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":rl(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":No(c,f),Ke("invalid",c)}vn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var I=f[v];v==="children"?typeof I=="string"?c.textContent!==I&&(f.suppressHydrationWarning!==!0&&Nl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(f.suppressHydrationWarning!==!0&&Nl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":ms(c),ko(c,f,!0);break;case"textarea":ms(c),Or(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Dl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Do(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Gn]=i,n[oa]=c,hm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Es(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<ra.length;d++)Ke(ra[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":rl(n,c),d=gs(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":No(n,c),d=xo(n,c),Ke("invalid",n);break;default:d=c}vn(a,d),I=d;for(f in I)if(I.hasOwnProperty(f)){var C=I[f];f==="style"?vs(n,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&sl(n,C)):f==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&xi(n,C):typeof C=="number"&&xi(n,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?C!=null&&f==="onScroll"&&Ke("scroll",n):C!=null&&te(n,f,C,v))}switch(a){case"input":ms(n),ko(n,c,!1);break;case"textarea":ms(n),Or(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?_n(n,!!c.multiple,f,!1):c.defaultValue!=null&&_n(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Dl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ot(i),null;case 6:if(n&&i.stateNode!=null)fm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Qi(ha.current),Qi(Kn.current),Ul(i)){if(c=i.stateNode,a=i.memoizedProps,c[Gn]=i,(f=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Nl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Nl(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=i,i.stateNode=c}return Ot(i),null;case 13:if(Qe(Ze),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&on!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gp(),Gs(),i.flags|=98560,f=!1;else if(f=Ul(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Gn]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ot(i),f=!1}else In!==null&&(xh(In),In=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ze.current&1)!==0?mt===0&&(mt=3):bh())),i.updateQueue!==null&&(i.flags|=4),Ot(i),null);case 4:return Js(),vh(n,i),n===null&&ia(i.stateNode.containerInfo),Ot(i),null;case 10:return Gc(i.type._context),Ot(i),null;case 17:return qt(i.type)&&Vl(),Ot(i),null;case 19:if(Qe(Ze),f=i.memoizedState,f===null)return Ot(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)ga(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Wl(n),v!==null){for(i.flags|=128,ga(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ze,Ze.current&1|2),i.child}n=n.sibling}f.tail!==null&&Ge()>to&&(i.flags|=128,c=!0,ga(f,!1),i.lanes=4194304)}else{if(!c)if(n=Wl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ga(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Xe)return Ot(i),null}else 2*Ge()-f.renderingStartTime>to&&a!==1073741824&&(i.flags|=128,c=!0,ga(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ge(),i.sibling=null,a=Ze.current,qe(Ze,c?a&1|2:a&1),i):(Ot(i),null);case 22:case 23:return Dh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(an&1073741824)!==0&&(Ot(i),i.subtreeFlags&6&&(i.flags|=8192)):Ot(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function XE(n,i){switch(zc(i),i.tag){case 1:return qt(i.type)&&Vl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Js(),Qe(Wt),Qe(bt),eh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Xc(i),null;case 13:if(Qe(Ze),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(Ze),null;case 4:return Js(),null;case 10:return Gc(i.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var eu=!1,Lt=!1,ZE=typeof WeakSet=="function"?WeakSet:Set,se=null;function Zs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,i,c)}else a.current=null}function Eh(n,i,a){try{a()}catch(c){it(n,i,c)}}var pm=!1;function ew(n,i){if(Dc=fr,n=qf(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,I=-1,C=-1,U=0,G=0,Y=n,q=null;t:for(;;){for(var ne;Y!==a||d!==0&&Y.nodeType!==3||(I=v+d),Y!==f||c!==0&&Y.nodeType!==3||(C=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(ne=Y.firstChild)!==null;)q=Y,Y=ne;for(;;){if(Y===n)break t;if(q===a&&++U===d&&(I=v),q===f&&++G===c&&(C=v),(ne=Y.nextSibling)!==null)break;Y=q,q=Y.parentNode}Y=ne}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:n,selectionRange:a},fr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var le=oe.memoizedProps,at=oe.memoizedState,O=i.stateNode,N=O.getSnapshotBeforeUpdate(i.elementType===i.type?le:Sn(i.type,le),at);O.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){it(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return oe=pm,pm=!1,oe}function ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Eh(i,a,f)}d=d.next}while(d!==c)}}function tu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function wh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function mm(n){var i=n.alternate;i!==null&&(n.alternate=null,mm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Gn],delete i[oa],delete i[Mc],delete i[LE],delete i[ME])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function gm(n){return n.tag===5||n.tag===3||n.tag===4}function ym(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||gm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Th(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Dl));else if(c!==4&&(n=n.child,n!==null))for(Th(n,i,a),n=n.sibling;n!==null;)Th(n,i,a),n=n.sibling}function Ih(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ih(n,i,a),n=n.sibling;n!==null;)Ih(n,i,a),n=n.sibling}var Rt=null,An=!1;function ri(n,i,a){for(a=a.child;a!==null;)_m(n,i,a),a=a.sibling}function _m(n,i,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 5:Lt||Zs(a,i);case 6:var c=Rt,d=An;Rt=null,ri(n,i,a),Rt=c,An=d,Rt!==null&&(An?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(An?(n=Rt,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),Gr(n)):Lc(Rt,a.stateNode));break;case 4:c=Rt,d=An,Rt=a.stateNode.containerInfo,An=!0,ri(n,i,a),Rt=c,An=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Eh(a,i,v),d=d.next}while(d!==c)}ri(n,i,a);break;case 1:if(!Lt&&(Zs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){it(a,i,I)}ri(n,i,a);break;case 21:ri(n,i,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,ri(n,i,a),Lt=c):ri(n,i,a);break;default:ri(n,i,a)}}function vm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ZE),i.forEach(function(c){var d=uw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Rn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,An=!1;break e;case 3:Rt=I.stateNode.containerInfo,An=!0;break e;case 4:Rt=I.stateNode.containerInfo,An=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));_m(f,v,d),Rt=null,An=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(U){it(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Em(i,n),i=i.sibling}function Em(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Rn(i,n),Yn(n),c&4){try{ya(3,n,n.return),tu(3,n)}catch(le){it(n,n.return,le)}try{ya(5,n,n.return)}catch(le){it(n,n.return,le)}}break;case 1:Rn(i,n),Yn(n),c&512&&a!==null&&Zs(a,a.return);break;case 5:if(Rn(i,n),Yn(n),c&512&&a!==null&&Zs(a,a.return),n.flags&32){var d=n.stateNode;try{xi(d,"")}catch(le){it(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,I=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{I==="input"&&f.type==="radio"&&f.name!=null&&ys(d,f),Es(I,v);var U=Es(I,f);for(v=0;v<C.length;v+=2){var G=C[v],Y=C[v+1];G==="style"?vs(d,Y):G==="dangerouslySetInnerHTML"?sl(d,Y):G==="children"?xi(d,Y):te(d,G,Y,U)}switch(I){case"input":ki(d,f);break;case"textarea":il(d,f);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ne=f.value;ne!=null?_n(d,!!f.multiple,ne,!1):q!==!!f.multiple&&(f.defaultValue!=null?_n(d,!!f.multiple,f.defaultValue,!0):_n(d,!!f.multiple,f.multiple?[]:"",!1))}d[oa]=f}catch(le){it(n,n.return,le)}}break;case 6:if(Rn(i,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(le){it(n,n.return,le)}}break;case 3:if(Rn(i,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Gr(i.containerInfo)}catch(le){it(n,n.return,le)}break;case 4:Rn(i,n),Yn(n);break;case 13:Rn(i,n),Yn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Rh=Ge())),c&4&&vm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||G,Rn(i,n),Lt=U):Rn(i,n),Yn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!G&&(n.mode&1)!==0)for(se=n,G=n.child;G!==null;){for(Y=se=G;se!==null;){switch(q=se,ne=q.child,q.tag){case 0:case 11:case 14:case 15:ya(4,q,q.return);break;case 1:Zs(q,q.return);var oe=q.stateNode;if(typeof oe.componentWillUnmount=="function"){c=q,a=q.return;try{i=c,oe.props=i.memoizedProps,oe.state=i.memoizedState,oe.componentWillUnmount()}catch(le){it(c,a,le)}}break;case 5:Zs(q,q.return);break;case 22:if(q.memoizedState!==null){Im(Y);continue}}ne!==null?(ne.return=q,se=ne):Im(Y)}G=G.sibling}e:for(G=null,Y=n;;){if(Y.tag===5){if(G===null){G=Y;try{d=Y.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(I=Y.stateNode,C=Y.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=Fr("display",v))}catch(le){it(n,n.return,le)}}}else if(Y.tag===6){if(G===null)try{Y.stateNode.nodeValue=U?"":Y.memoizedProps}catch(le){it(n,n.return,le)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;G===Y&&(G=null),Y=Y.return}G===Y&&(G=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Rn(i,n),Yn(n),c&4&&vm(n);break;case 21:break;default:Rn(i,n),Yn(n)}}function Yn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(gm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xi(d,""),c.flags&=-33);var f=ym(n);Ih(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=ym(n);Th(n,I,v);break;default:throw Error(t(161))}}catch(C){it(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function tw(n,i,a){se=n,wm(n)}function wm(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||eu;if(!v){var I=d.alternate,C=I!==null&&I.memoizedState!==null||Lt;I=eu;var U=Lt;if(eu=v,(Lt=C)&&!U)for(se=d;se!==null;)v=se,C=v.child,v.tag===22&&v.memoizedState!==null?Sm(d):C!==null?(C.return=v,se=C):Sm(d);for(;f!==null;)se=f,wm(f),f=f.sibling;se=d,eu=I,Lt=U}Tm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,se=f):Tm(n)}}function Tm(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Lt||tu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Sn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Ip(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ip(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var G=U.memoizedState;if(G!==null){var Y=G.dehydrated;Y!==null&&Gr(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||i.flags&512&&wh(i)}catch(q){it(i,i.return,q)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function Im(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function Sm(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tu(4,i)}catch(C){it(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){it(i,d,C)}}var f=i.return;try{wh(i)}catch(C){it(i,f,C)}break;case 5:var v=i.return;try{wh(i)}catch(C){it(i,v,C)}}}catch(C){it(i,i.return,C)}if(i===n){se=null;break}var I=i.sibling;if(I!==null){I.return=i.return,se=I;break}se=i.return}}var nw=Math.ceil,nu=ge.ReactCurrentDispatcher,Sh=ge.ReactCurrentOwner,pn=ge.ReactCurrentBatchConfig,Me=0,Et=null,ht=null,Pt=0,an=0,eo=Xr(0),mt=0,_a=null,Ji=0,ru=0,Ah=0,va=null,Kt=null,Rh=0,to=1/0,Ir=null,iu=!1,Ph=null,ii=null,su=!1,si=null,ou=0,Ea=0,Ch=null,au=-1,lu=0;function Ht(){return(Me&6)!==0?Ge():au!==-1?au:au=Ge()}function oi(n){return(n.mode&1)===0?1:(Me&2)!==0&&Pt!==0?Pt&-Pt:UE.transition!==null?(lu===0&&(lu=zo()),lu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:xs(n.type)),n)}function Pn(n,i,a,c){if(50<Ea)throw Ea=0,Ch=null,Error(t(185));Ui(n,a,c),((Me&2)===0||n!==Et)&&(n===Et&&((Me&2)===0&&(ru|=a),mt===4&&ai(n,Pt)),Qt(n,c),a===1&&Me===0&&(i.mode&1)===0&&(to=Ge()+500,Ll&&ei()))}function Qt(n,i){var a=n.callbackNode;Fi(n,i);var c=cr(n,n===Et?Pt:0);if(c===0)a!==null&&Is(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Is(a),i===1)n.tag===0?FE(Rm.bind(null,n)):hp(Rm.bind(null,n)),VE(function(){(Me&6)===0&&ei()}),a=null;else{switch(Mn(c)){case 1:a=Ss;break;case 4:a=Fo;break;case 16:a=Vi;break;case 536870912:a=As;break;default:a=Vi}a=Vm(a,Am.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Am(n,i){if(au=-1,lu=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(no()&&n.callbackNode!==a)return null;var c=cr(n,n===Et?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=uu(n,c);else{i=c;var d=Me;Me|=2;var f=Cm();(Et!==n||Pt!==i)&&(Ir=null,to=Ge()+500,Zi(n,i));do try{sw();break}catch(I){Pm(n,I)}while(!0);qc(),nu.current=f,Me=d,ht!==null?i=0:(Et=null,Pt=0,i=mt)}if(i!==0){if(i===2&&(d=jo(n),d!==0&&(c=d,i=kh(n,d))),i===1)throw a=_a,Zi(n,0),ai(n,c),Qt(n,Ge()),a;if(i===6)ai(n,c);else{if(d=n.current.alternate,(c&30)===0&&!rw(d)&&(i=uu(n,c),i===2&&(f=jo(n),f!==0&&(c=f,i=kh(n,f))),i===1))throw a=_a,Zi(n,0),ai(n,c),Qt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:es(n,Kt,Ir);break;case 3:if(ai(n,c),(c&130023424)===c&&(i=Rh+500-Ge(),10<i)){if(cr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Oc(es.bind(null,n,Kt,Ir),i);break}es(n,Kt,Ir);break;case 4:if(ai(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Zt(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*nw(c/1960))-c,10<c){n.timeoutHandle=Oc(es.bind(null,n,Kt,Ir),c);break}es(n,Kt,Ir);break;case 5:es(n,Kt,Ir);break;default:throw Error(t(329))}}}return Qt(n,Ge()),n.callbackNode===a?Am.bind(null,n):null}function kh(n,i){var a=va;return n.current.memoizedState.isDehydrated&&(Zi(n,i).flags|=256),n=uu(n,i),n!==2&&(i=Kt,Kt=a,i!==null&&xh(i)),n}function xh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function rw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Tn(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ai(n,i){for(i&=~Ah,i&=~ru,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Zt(i),c=1<<a;n[a]=-1,i&=~c}}function Rm(n){if((Me&6)!==0)throw Error(t(327));no();var i=cr(n,0);if((i&1)===0)return Qt(n,Ge()),null;var a=uu(n,i);if(n.tag!==0&&a===2){var c=jo(n);c!==0&&(i=c,a=kh(n,c))}if(a===1)throw a=_a,Zi(n,0),ai(n,i),Qt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,es(n,Kt,Ir),Qt(n,Ge()),null}function Nh(n,i){var a=Me;Me|=1;try{return n(i)}finally{Me=a,Me===0&&(to=Ge()+500,Ll&&ei())}}function Xi(n){si!==null&&si.tag===0&&(Me&6)===0&&no();var i=Me;Me|=1;var a=pn.transition,c=Ve;try{if(pn.transition=null,Ve=1,n)return n()}finally{Ve=c,pn.transition=a,Me=i,(Me&6)===0&&ei()}}function Dh(){an=eo.current,Qe(eo)}function Zi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,bE(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Vl();break;case 3:Js(),Qe(Wt),Qe(bt),eh();break;case 5:Xc(c);break;case 4:Js();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Gc(c.type._context);break;case 22:case 23:Dh()}a=a.return}if(Et=n,ht=n=li(n.current,null),Pt=an=i,mt=0,_a=null,Ah=ru=Ji=0,Kt=va=null,Ki!==null){for(i=0;i<Ki.length;i++)if(a=Ki[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ki=null}return n}function Pm(n,i){do{var a=ht;try{if(qc(),ql.current=Yl,Gl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Gl=!1}if(Yi=0,vt=pt=et=null,da=!1,fa=0,Sh.current=null,a===null||a.return===null){mt=1,_a=i,ht=null;break}e:{var f=n,v=a.return,I=a,C=i;if(i=Pt,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var U=C,G=I,Y=G.tag;if((G.mode&1)===0&&(Y===0||Y===11||Y===15)){var q=G.alternate;q?(G.updateQueue=q.updateQueue,G.memoizedState=q.memoizedState,G.lanes=q.lanes):(G.updateQueue=null,G.memoizedState=null)}var ne=Xp(v);if(ne!==null){ne.flags&=-257,Zp(ne,v,I,f,i),ne.mode&1&&Jp(f,U,i),i=ne,C=U;var oe=i.updateQueue;if(oe===null){var le=new Set;le.add(C),i.updateQueue=le}else oe.add(C);break e}else{if((i&1)===0){Jp(f,U,i),bh();break e}C=Error(t(426))}}else if(Xe&&I.mode&1){var at=Xp(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Zp(at,v,I,f,i),Hc(Xs(C,I));break e}}f=C=Xs(C,I),mt!==4&&(mt=2),va===null?va=[f]:va.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var O=Qp(f,C,i);Tp(f,O);break e;case 1:I=C;var N=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ii===null||!ii.has(F)))){f.flags|=65536,i&=-i,f.lanes|=i;var J=Yp(f,I,i);Tp(f,J);break e}}f=f.return}while(f!==null)}xm(a)}catch(ce){i=ce,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Cm(){var n=nu.current;return nu.current=Yl,n===null?Yl:n}function bh(){(mt===0||mt===3||mt===2)&&(mt=4),Et===null||(Ji&268435455)===0&&(ru&268435455)===0||ai(Et,Pt)}function uu(n,i){var a=Me;Me|=2;var c=Cm();(Et!==n||Pt!==i)&&(Ir=null,Zi(n,i));do try{iw();break}catch(d){Pm(n,d)}while(!0);if(qc(),Me=a,nu.current=c,ht!==null)throw Error(t(261));return Et=null,Pt=0,mt}function iw(){for(;ht!==null;)km(ht)}function sw(){for(;ht!==null&&!bi();)km(ht)}function km(n){var i=bm(n.alternate,n,an);n.memoizedProps=n.pendingProps,i===null?xm(n):ht=i,Sh.current=null}function xm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=JE(a,i,an),a!==null){ht=a;return}}else{if(a=XE(a,i),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ht=null;return}}if(i=i.sibling,i!==null){ht=i;return}ht=i=n}while(i!==null);mt===0&&(mt=5)}function es(n,i,a){var c=Ve,d=pn.transition;try{pn.transition=null,Ve=1,ow(n,i,a,c)}finally{pn.transition=d,Ve=c}return null}function ow(n,i,a,c){do no();while(si!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(vc(n,f),n===Et&&(ht=Et=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||su||(su=!0,Vm(Vi,function(){return no(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=pn.transition,pn.transition=null;var v=Ve;Ve=1;var I=Me;Me|=4,Sh.current=null,ew(n,a),Em(a,n),RE(bc),fr=!!Dc,bc=Dc=null,n.current=a,tw(a),ur(),Me=I,Ve=v,pn.transition=f}else n.current=a;if(su&&(su=!1,si=n,ou=d),f=n.pendingLanes,f===0&&(ii=null),gl(a.stateNode),Qt(n,Ge()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(iu)throw iu=!1,n=Ph,Ph=null,n;return(ou&1)!==0&&n.tag!==0&&no(),f=n.pendingLanes,(f&1)!==0?n===Ch?Ea++:(Ea=0,Ch=n):Ea=0,ei(),null}function no(){if(si!==null){var n=Mn(ou),i=pn.transition,a=Ve;try{if(pn.transition=null,Ve=16>n?16:n,si===null)var c=!1;else{if(n=si,si=null,ou=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,se=n.current;se!==null;){var f=se,v=f.child;if((se.flags&16)!==0){var I=f.deletions;if(I!==null){for(var C=0;C<I.length;C++){var U=I[C];for(se=U;se!==null;){var G=se;switch(G.tag){case 0:case 11:case 15:ya(8,G,f)}var Y=G.child;if(Y!==null)Y.return=G,se=Y;else for(;se!==null;){G=se;var q=G.sibling,ne=G.return;if(mm(G),G===U){se=null;break}if(q!==null){q.return=ne,se=q;break}se=ne}}}var oe=f.alternate;if(oe!==null){var le=oe.child;if(le!==null){oe.child=null;do{var at=le.sibling;le.sibling=null,le=at}while(le!==null)}}se=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,se=v;else e:for(;se!==null;){if(f=se,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:ya(9,f,f.return)}var O=f.sibling;if(O!==null){O.return=f.return,se=O;break e}se=f.return}}var N=n.current;for(se=N;se!==null;){v=se;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,se=F;else e:for(v=N;se!==null;){if(I=se,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:tu(9,I)}}catch(ce){it(I,I.return,ce)}if(I===v){se=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,se=J;break e}se=I.return}}if(Me=d,ei(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Oi,n)}catch{}c=!0}return c}finally{Ve=a,pn.transition=i}}return!1}function Nm(n,i,a){i=Xs(a,i),i=Qp(n,i,1),n=ni(n,i,1),i=Ht(),n!==null&&(Ui(n,1,i),Qt(n,i))}function it(n,i,a){if(n.tag===3)Nm(n,n,a);else for(;i!==null;){if(i.tag===3){Nm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){n=Xs(a,n),n=Yp(i,n,1),i=ni(i,n,1),n=Ht(),i!==null&&(Ui(i,1,n),Qt(i,n));break}}i=i.return}}function aw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Pt&a)===a&&(mt===4||mt===3&&(Pt&130023424)===Pt&&500>Ge()-Rh?Zi(n,0):Ah|=a),Qt(n,i)}function Dm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Hr,Hr<<=1,(Hr&130023424)===0&&(Hr=4194304)));var a=Ht();n=Er(n,i),n!==null&&(Ui(n,i,a),Qt(n,a))}function lw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Dm(n,a)}function uw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Dm(n,a)}var bm;bm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Gt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gt=!1,YE(n,i,a);Gt=(n.flags&131072)!==0}else Gt=!1,Xe&&(i.flags&1048576)!==0&&dp(i,Fl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Zl(n,i),n=i.pendingProps;var d=Hs(i,bt.current);Ys(i,a),d=rh(null,i,c,n,d,a);var f=ih();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qt(c)?(f=!0,Ol(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(i),d.updater=Jl,i.stateNode=d,d._reactInternals=i,ch(i,c,n,a),i=ph(null,i,c,!0,f,a)):(i.tag=0,Xe&&f&&jc(i),$t(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Zl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=hw(c),n=Sn(c,n),d){case 0:i=fh(null,i,c,n,a);break e;case 1:i=sm(null,i,c,n,a);break e;case 11:i=em(null,i,c,n,a);break e;case 14:i=tm(null,i,c,Sn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Sn(c,d),fh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Sn(c,d),sm(n,i,c,d,a);case 3:e:{if(om(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,wp(n,i),Hl(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=Xs(Error(t(423)),i),i=am(n,i,c,a,d);break e}else if(c!==d){d=Xs(Error(t(424)),i),i=am(n,i,c,a,d);break e}else for(on=Jr(i.stateNode.containerInfo.firstChild),sn=i,Xe=!0,In=null,a=vp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),c===d){i=Tr(n,i,a);break e}$t(n,i,c,a)}i=i.child}return i;case 5:return Sp(i),n===null&&$c(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Vc(c,d)?v=null:f!==null&&Vc(c,f)&&(i.flags|=32),im(n,i),$t(n,i,v,a),i.child;case 6:return n===null&&$c(i),null;case 13:return lm(n,i,a);case 4:return Jc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ks(i,null,c,a):$t(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Sn(c,d),em(n,i,c,d,a);case 7:return $t(n,i,i.pendingProps,a),i.child;case 8:return $t(n,i,i.pendingProps.children,a),i.child;case 12:return $t(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,qe(zl,c._currentValue),c._currentValue=v,f!==null)if(Tn(f.value,v)){if(f.children===d.children&&!Wt.current){i=Tr(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var I=f.dependencies;if(I!==null){v=f.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(f.tag===1){C=wr(-1,a&-a),C.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var G=U.pending;G===null?C.next=C:(C.next=G.next,G.next=C),U.pending=C}}f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Kc(f.return,a,i),I.lanes|=a;break}C=C.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Kc(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}$t(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ys(i,a),d=dn(d),c=c(d),i.flags|=1,$t(n,i,c,a),i.child;case 14:return c=i.type,d=Sn(c,i.pendingProps),d=Sn(c.type,d),tm(n,i,c,d,a);case 15:return nm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Sn(c,d),Zl(n,i),i.tag=1,qt(c)?(n=!0,Ol(i)):n=!1,Ys(i,a),Gp(i,c,d),ch(i,c,d,a),ph(null,i,c,!0,n,a);case 19:return cm(n,i,a);case 22:return rm(n,i,a)}throw Error(t(156,i.tag))};function Vm(n,i){return Mo(n,i)}function cw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,i,a,c){return new cw(n,i,a,c)}function Vh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hw(n){if(typeof n=="function")return Vh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===_t)return 14}return 2}function li(n,i){var a=n.alternate;return a===null?(a=mn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cu(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")Vh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return ts(a.children,d,f,i);case S:v=8,d|=8;break;case P:return n=mn(12,a,i,d|2),n.elementType=P,n.lanes=f,n;case A:return n=mn(13,a,i,d),n.elementType=A,n.lanes=f,n;case We:return n=mn(19,a,i,d),n.elementType=We,n.lanes=f,n;case Je:return hu(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:v=10;break e;case x:v=9;break e;case V:v=11;break e;case _t:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=mn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function ts(n,i,a,c){return n=mn(7,n,c,i),n.lanes=a,n}function hu(n,i,a,c){return n=mn(22,n,c,i),n.elementType=Je,n.lanes=a,n.stateNode={isHidden:!1},n}function Oh(n,i,a){return n=mn(6,n,null,i),n.lanes=a,n}function Lh(n,i,a){return i=mn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function dw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Mh(n,i,a,c,d,f,v,I,C){return n=new dw(n,i,a,I,C),i===1?(i=1,f===!0&&(i|=8)):i=0,f=mn(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(f),n}function fw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Om(n){if(!n)return Zr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qt(a))return up(n,a,i)}return i}function Lm(n,i,a,c,d,f,v,I,C){return n=Mh(a,c,!0,n,d,f,v,I,C),n.context=Om(null),a=n.current,c=Ht(),d=oi(a),f=wr(c,d),f.callback=i??null,ni(a,f,d),n.current.lanes=d,Ui(n,d,c),Qt(n,c),n}function du(n,i,a,c){var d=i.current,f=Ht(),v=oi(d);return a=Om(a),i.context===null?i.context=a:i.pendingContext=a,i=wr(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ni(d,i,v),n!==null&&(Pn(n,d,v,f),$l(n,d,v)),v}function fu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Mm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fh(n,i){Mm(n,i),(n=n.alternate)&&Mm(n,i)}function pw(){return null}var Fm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uh(n){this._internalRoot=n}pu.prototype.render=Uh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));du(n,i,null,null)},pu.prototype.unmount=Uh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Xi(function(){du(null,n,null,null)}),i[gr]=null}};function pu(n){this._internalRoot=n}pu.prototype.unstable_scheduleHydration=function(n){if(n){var i=qo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<en.length&&i!==0&&i<en[a].priority;a++);en.splice(a,0,n),a===0&&Cs(n)}};function jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function mu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Um(){}function mw(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=fu(v);f.call(U)}}var v=Lm(i,c,n,0,null,!1,!1,"",Um);return n._reactRootContainer=v,n[gr]=v.current,ia(n.nodeType===8?n.parentNode:n),Xi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var U=fu(C);I.call(U)}}var C=Mh(n,0,!1,null,null,!1,!1,"",Um);return n._reactRootContainer=C,n[gr]=C.current,ia(n.nodeType===8?n.parentNode:n),Xi(function(){du(i,C,a,c)}),C}function gu(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var I=d;d=function(){var C=fu(v);I.call(C)}}du(i,v,n,d)}else v=mw(a,i,n,d,c);return fu(v)}Ho=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ue(i.pendingLanes);a!==0&&($o(i,a|1),Qt(i,Ge()),(Me&6)===0&&(to=Ge()+500,ei()))}break;case 13:Xi(function(){var c=Er(n,1);if(c!==null){var d=Ht();Pn(c,n,1,d)}}),Fh(n,1)}},Rs=function(n){if(n.tag===13){var i=Er(n,134217728);if(i!==null){var a=Ht();Pn(i,n,134217728,a)}Fh(n,134217728)}},Wo=function(n){if(n.tag===13){var i=oi(n),a=Er(n,i);if(a!==null){var c=Ht();Pn(a,n,i,c)}Fh(n,i)}},qo=function(){return Ve},Go=function(n,i){var a=Ve;try{return Ve=n,i()}finally{Ve=a}},or=function(n,i,a){switch(i){case"input":if(ki(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=bl(c);if(!d)throw Error(t(90));Co(c),ki(c,d)}}}break;case"textarea":il(n,a);break;case"select":i=a.value,i!=null&&_n(n,!!a.multiple,i,!1)}},al=Nh,ll=Xi;var gw={usingClientEntryPoint:!1,Events:[aa,Bs,bl,jr,zr,Nh]},wa={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yw={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ml(n),n===null?null:n.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Oi=yu.inject(yw),Xt=yu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw,Yt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(i))throw Error(t(200));return fw(n,i,null,a)},Yt.createRoot=function(n,i){if(!jh(n))throw Error(t(299));var a=!1,c="",d=Fm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Mh(n,1,!1,null,null,a,!1,c,d),n[gr]=i.current,ia(n.nodeType===8?n.parentNode:n),new Uh(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ml(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Xi(n)},Yt.hydrate=function(n,i,a){if(!mu(i))throw Error(t(200));return gu(null,n,i,!0,a)},Yt.hydrateRoot=function(n,i,a){if(!jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Fm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Lm(i,null,n,1,a??null,d,!1,f,v),n[gr]=i.current,ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new pu(i)},Yt.render=function(n,i,a){if(!mu(i))throw Error(t(200));return gu(null,n,i,!1,a)},Yt.unmountComponentAtNode=function(n){if(!mu(n))throw Error(t(40));return n._reactRootContainer?(Xi(function(){gu(null,null,n,!1,function(){n._reactRootContainer=null,n[gr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Nh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!mu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gu(n,i,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Gm;function Rw(){if(Gm)return $h.exports;Gm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),$h.exports=Aw(),$h.exports}var Km;function Pw(){if(Km)return _u;Km=1;var r=Rw();return _u.createRoot=r.createRoot,_u.hydrateRoot=r.hydrateRoot,_u}var Cw=Pw();const kw=Fd(Cw),xw=()=>{};var Qm={};/**
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
 */const Py=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Nw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Cy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=u>>2,T=(u&3)<<4|m>>4;let R=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(R=64)),s.push(t[E],t[T],t[R],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Py(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Nw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||T==null)throw new Dw;const R=u<<2|m>>4;if(s.push(R),_!==64){const z=m<<4&240|_>>2;if(s.push(z),T!==64){const Q=_<<6&192|T;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bw=function(r){const e=Py(r);return Cy.encodeByteArray(e,!0)},Lu=function(r){return bw(r).replace(/\./g,"")},ky=function(r){try{return Cy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ow=()=>Vw().__FIREBASE_DEFAULTS__,Lw=()=>{if(typeof process>"u"||typeof Qm>"u")return;const r=Qm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Mw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ky(r[1]);return e&&JSON.parse(e)},tc=()=>{try{return xw()||Ow()||Lw()||Mw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},xy=r=>{var e,t;return(t=(e=tc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Fw=r=>{const e=xy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ny=()=>{var r;return(r=tc())==null?void 0:r.config},Dy=r=>{var e;return(e=tc())==null?void 0:e[`_${r}`]};/**
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
 */class Uw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function wo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function by(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function jw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Lu(JSON.stringify(t)),Lu(JSON.stringify(h)),""].join(".")}const ka={};function zw(){const r={prod:[],emulator:[]};for(const e of Object.keys(ka))ka[e]?r.emulator.push(e):r.prod.push(e);return r}function Bw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ym=!1;function Vy(r,e){if(typeof window>"u"||typeof document>"u"||!wo(window.location.host)||ka[r]===e||ka[r]||Ym)return;ka[r]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=zw().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function g(R,z){R.setAttribute("width","24"),R.setAttribute("id",z),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function _(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Ym=!0,h()},R}function E(R,z){R.setAttribute("id",z),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function T(){const R=Bw(s),z=t("text"),Q=document.getElementById(z)||document.createElement("span"),$=t("learnmore"),B=document.getElementById($)||document.createElement("a"),ae=t("preprendIcon"),ue=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const te=R.element;m(te),E(B,$);const ge=_();g(ue,ae),te.append(ue,Q,B,ge),document.body.appendChild(te)}u?(Q.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function Hw(){var e;const r=(e=tc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ww(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Gw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kw(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Qw(){return!Hw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yw(){try{return typeof indexedDB=="object"}catch{return!1}}function Jw(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Xw="FirebaseError";class br extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Xw,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Zw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new br(o,m,s)}}function Zw(r,e){return r.replace(e0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const e0=/\{\$([^}]+)}/g;function t0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ss(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(Jm(u)&&Jm(h)){if(!ss(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Jm(r){return r!==null&&typeof r=="object"}/**
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
 */function Ka(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function n0(r,e){const t=new r0(r,e);return t.subscribe.bind(t)}class r0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");i0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=qh),o.error===void 0&&(o.error=qh),o.complete===void 0&&(o.complete=qh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function qh(){}/**
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
 */function Dn(r){return r&&r._delegate?r._delegate:r}class os{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class s0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Uw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a0(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:o0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o0(r){return r===ns?void 0:r}function a0(r){return r.instantiationMode==="EAGER"}/**
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
 */class l0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const u0={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},c0=Ne.INFO,h0={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},d0=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=h0[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jd{constructor(e){this.name=e,this._logLevel=c0,this._logHandler=d0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const f0=(r,e)=>e.some(t=>r instanceof t);let Xm,Zm;function p0(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m0(){return Zm||(Zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oy=new WeakMap,cd=new WeakMap,Ly=new WeakMap,Gh=new WeakMap,zd=new WeakMap;function g0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(gi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Oy.set(t,r)}).catch(()=>{}),zd.set(e,r),e}function y0(r){if(cd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});cd.set(r,e)}let hd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return cd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ly.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function _0(r){hd=r(hd)}function v0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Kh(this),e,...t);return Ly.set(s,e.sort?e.sort():[e]),gi(s)}:m0().includes(r)?function(...e){return r.apply(Kh(this),e),gi(Oy.get(this))}:function(...e){return gi(r.apply(Kh(this),e))}}function E0(r){return typeof r=="function"?v0(r):(r instanceof IDBTransaction&&y0(r),f0(r,p0())?new Proxy(r,hd):r)}function gi(r){if(r instanceof IDBRequest)return g0(r);if(Gh.has(r))return Gh.get(r);const e=E0(r);return e!==r&&(Gh.set(r,e),zd.set(e,r)),e}const Kh=r=>zd.get(r);function w0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=gi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(gi(h.result),g.oldVersion,g.newVersion,gi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const T0=["get","getKey","getAll","getAllKeys","count"],I0=["put","add","delete","clear"],Qh=new Map;function eg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=I0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||T0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return Qh.set(e,u),u}_0(r=>({...r,get:(e,t,s)=>eg(e,t)||r.get(e,t,s),has:(e,t)=>!!eg(e,t)||r.has(e,t)}));/**
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
 */class S0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(A0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function A0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dd="@firebase/app",tg="0.14.9";/**
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
 */const Cr=new jd("@firebase/app"),R0="@firebase/app-compat",P0="@firebase/analytics-compat",C0="@firebase/analytics",k0="@firebase/app-check-compat",x0="@firebase/app-check",N0="@firebase/auth",D0="@firebase/auth-compat",b0="@firebase/database",V0="@firebase/data-connect",O0="@firebase/database-compat",L0="@firebase/functions",M0="@firebase/functions-compat",F0="@firebase/installations",U0="@firebase/installations-compat",j0="@firebase/messaging",z0="@firebase/messaging-compat",B0="@firebase/performance",$0="@firebase/performance-compat",H0="@firebase/remote-config",W0="@firebase/remote-config-compat",q0="@firebase/storage",G0="@firebase/storage-compat",K0="@firebase/firestore",Q0="@firebase/ai",Y0="@firebase/firestore-compat",J0="firebase",X0="12.10.0";/**
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
 */const fd="[DEFAULT]",Z0={[dd]:"fire-core",[R0]:"fire-core-compat",[C0]:"fire-analytics",[P0]:"fire-analytics-compat",[x0]:"fire-app-check",[k0]:"fire-app-check-compat",[N0]:"fire-auth",[D0]:"fire-auth-compat",[b0]:"fire-rtdb",[V0]:"fire-data-connect",[O0]:"fire-rtdb-compat",[L0]:"fire-fn",[M0]:"fire-fn-compat",[F0]:"fire-iid",[U0]:"fire-iid-compat",[j0]:"fire-fcm",[z0]:"fire-fcm-compat",[B0]:"fire-perf",[$0]:"fire-perf-compat",[H0]:"fire-rc",[W0]:"fire-rc-compat",[q0]:"fire-gcs",[G0]:"fire-gcs-compat",[K0]:"fire-fst",[Y0]:"fire-fst-compat",[Q0]:"fire-vertex","fire-js":"fire-js",[J0]:"fire-js-all"};/**
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
 */const Mu=new Map,eT=new Map,pd=new Map;function ng(r,e){try{r.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function mo(r){const e=r.name;if(pd.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;pd.set(e,r);for(const t of Mu.values())ng(t,r);for(const t of eT.values())ng(t,r);return!0}function Bd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Cn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const tT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new Ga("app","Firebase",tT);/**
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
 */class nT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
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
 */const To=X0;function My(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:fd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw yi.create("bad-app-name",{appName:String(o)});if(t||(t=Ny()),!t)throw yi.create("no-options");const u=Mu.get(o);if(u){if(ss(t,u.options)&&ss(s,u.config))return u;throw yi.create("duplicate-app",{appName:o})}const h=new l0(o);for(const g of pd.values())h.addComponent(g);const m=new nT(t,s,h);return Mu.set(o,m),m}function Fy(r=fd){const e=Mu.get(r);if(!e&&r===fd&&Ny())return My();if(!e)throw yi.create("no-app",{appName:r});return e}function _i(r,e,t){let s=Z0[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(h.join(" "));return}mo(new os(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rT="firebase-heartbeat-database",iT=1,La="firebase-heartbeat-store";let Yh=null;function Uy(){return Yh||(Yh=w0(rT,iT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(La)}catch(t){console.warn(t)}}}}).catch(r=>{throw yi.create("idb-open",{originalErrorMessage:r.message})})),Yh}async function sT(r){try{const t=(await Uy()).transaction(La),s=await t.objectStore(La).get(jy(r));return await t.done,s}catch(e){if(e instanceof br)Cr.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function rg(r,e){try{const s=(await Uy()).transaction(La,"readwrite");await s.objectStore(La).put(e,jy(r)),await s.done}catch(t){if(t instanceof br)Cr.warn(t.message);else{const s=yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(s.message)}}}function jy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const oT=1024,aT=30;class lT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=ig();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>aT){const h=hT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ig(),{heartbeatsToSend:s,unsentEntries:o}=uT(this._heartbeatsCache.heartbeats),u=Lu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Cr.warn(t),""}}}function ig(){return new Date().toISOString().substring(0,10)}function uT(r,e=oT){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),sg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),sg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class cT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yw()?Jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sg(r){return Lu(JSON.stringify({version:2,heartbeats:r})).length}function hT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function dT(r){mo(new os("platform-logger",e=>new S0(e),"PRIVATE")),mo(new os("heartbeat",e=>new lT(e),"PRIVATE")),_i(dd,tg,r),_i(dd,tg,"esm2020"),_i("fire-js","")}dT("");function zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fT=zy,By=new Ga("auth","Firebase",zy());/**
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
 */const Fu=new jd("@firebase/auth");function pT(r,...e){Fu.logLevel<=Ne.WARN&&Fu.warn(`Auth (${To}): ${r}`,...e)}function Ru(r,...e){Fu.logLevel<=Ne.ERROR&&Fu.error(`Auth (${To}): ${r}`,...e)}/**
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
 */function kr(r,...e){throw $d(r,...e)}function Zn(r,...e){return $d(r,...e)}function $y(r,e,t){const s={...fT(),[e]:t};return new Ga("auth","Firebase",s).create(e,{appName:r.name})}function vi(r){return $y(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $d(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return By.create(r,...e)}function ve(r,e,...t){if(!r)throw $d(e,...t)}function Sr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ru(e),new Error(e)}function xr(r,e){r||Sr(e)}/**
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
 */function md(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function mT(){return og()==="http:"||og()==="https:"}function og(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function gT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mT()||qw()||"connection"in navigator)?navigator.onLine:!0}function yT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,xr(t>e,"Short delay should be less than long delay!"),this.isMobile=$w()||Gw()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hd(r,e){xr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Hy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ET=new Qa(3e4,6e4);function nc(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Io(r,e,t,s,o={}){return Wy(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ka({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return Ww()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&wo(r.emulatorConfig.host)&&(_.credentials="include"),Hy.fetch()(await Gy(r,r.config.apiHost,t,m),_)})}async function Wy(r,e,t){r._canInitEmulator=!1;const s={..._T,...e};try{const o=new wT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw vu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw vu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw vu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw $y(r,E,_);kr(r,E)}}catch(o){if(o instanceof br)throw o;kr(r,"network-request-failed",{message:String(o)})}}async function qy(r,e,t,s,o={}){const u=await Io(r,e,t,s,o);return"mfaPendingCredential"in u&&kr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function Gy(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Hd(r.config,o):`${r.config.apiScheme}://${o}`;return vT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class wT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),ET.get())})}}function vu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Zn(r,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function TT(r,e){return Io(r,"POST","/v1/accounts:delete",e)}async function Uu(r,e){return Io(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function xa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IT(r,e=!1){const t=Dn(r),s=await t.getIdToken(e),o=Wd(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:xa(Jh(o.auth_time)),issuedAtTime:xa(Jh(o.iat)),expirationTime:xa(Jh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Jh(r){return Number(r)*1e3}function Wd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const o=ky(t);return o?JSON.parse(o):(Ru("Failed to decode base64 JWT payload"),null)}catch(o){return Ru("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ag(r){const e=Wd(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ma(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof br&&ST(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function ST({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class AT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xa(this.lastLoginAt),this.creationTime=xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ju(r){var T;const e=r.auth,t=await r.getIdToken(),s=await Ma(r,Uu(e,{idToken:t}));ve(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?Ky(o.providerUserInfo):[],h=PT(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new gd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function RT(r){const e=Dn(r);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Ky(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function CT(r,e){const t=await Wy(r,{},async()=>{const s=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await Gy(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&wo(r.emulatorConfig.host)&&(g.credentials="include"),Hy.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kT(r,e){return Io(r,"POST","/v2/accounts:revokeToken",nc(r,e))}/**
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
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ag(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=ag(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await CT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function ci(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class kn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new AT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ma(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return IT(this,e)}reload(){return RT(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ju(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await Ma(this,TT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:T,emailVerified:R,isAnonymous:z,providerData:Q,stsTokenManager:$}=t;ve(T&&$,e,"internal-error");const B=uo.fromJSON(this.name,$);ve(typeof T=="string",e,"internal-error"),ci(s,e.name),ci(o,e.name),ve(typeof R=="boolean",e,"internal-error"),ve(typeof z=="boolean",e,"internal-error"),ci(u,e.name),ci(h,e.name),ci(m,e.name),ci(g,e.name),ci(_,e.name),ci(E,e.name);const ae=new kn({uid:T,auth:e,email:o,emailVerified:R,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:B,createdAt:_,lastLoginAt:E});return Q&&Array.isArray(Q)&&(ae.providerData=Q.map(ue=>({...ue}))),g&&(ae._redirectEventId=g),ae}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new kn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ju(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Ky(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new uo;m.updateFromIdToken(s);const g=new kn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new gd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const lg=new Map;function Ar(r){xr(r instanceof Function,"Expected a class definition");let e=lg.get(r);return e?(xr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,lg.set(r,e),e)}/**
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
 */class Qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qy.type="NONE";const ug=Qy;/**
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
 */function Pu(r,e,t){return`firebase:${r}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Pu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Pu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uu(this.auth,{idToken:e}).catch(()=>{});return t?kn._fromGetAccountInfoResponse(this.auth,t,e):null}return kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(Ar(ug),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Ar(ug);const h=Pu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let T;if(typeof E=="string"){const R=await Uu(e,{idToken:E}).catch(()=>{});if(!R)break;T=await kn._fromGetAccountInfoResponse(e,R,E)}else T=kn._fromJSON(e,E);_!==u&&(m=T),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new co(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new co(u,e,s))}}/**
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
 */function cg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t_(e))return"Blackberry";if(n_(e))return"Webos";if(Jy(e))return"Safari";if((e.includes("chrome/")||Xy(e))&&!e.includes("edge/"))return"Chrome";if(e_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Yy(r=zt()){return/firefox\//i.test(r)}function Jy(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xy(r=zt()){return/crios\//i.test(r)}function Zy(r=zt()){return/iemobile/i.test(r)}function e_(r=zt()){return/android/i.test(r)}function t_(r=zt()){return/blackberry/i.test(r)}function n_(r=zt()){return/webos/i.test(r)}function qd(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function xT(r=zt()){var e;return qd(r)&&!!((e=window.navigator)!=null&&e.standalone)}function NT(){return Kw()&&document.documentMode===10}function r_(r=zt()){return qd(r)||e_(r)||n_(r)||t_(r)||/windows phone/i.test(r)||Zy(r)}/**
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
 */function i_(r,e=[]){let t;switch(r){case"Browser":t=cg(zt());break;case"Worker":t=`${cg(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${To}/${s}`}/**
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
 */class DT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function bT(r,e={}){return Io(r,"GET","/v2/passwordPolicy",nc(r,e))}/**
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
 */const VT=6;class OT{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??VT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class LT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hg(this),this.idTokenSubscription=new hg(this),this.beforeStateQueue=new DT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ar(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uu(this,{idToken:e}),s=await kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Cn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(vi(this));const t=e?Dn(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bT(this),t=new OT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ga("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await kT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ar(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&pT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rc(r){return Dn(r)}class hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=n0(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MT(r){Gd=r}function FT(r){return Gd.loadJS(r)}function UT(){return Gd.gapiScript}function jT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function zT(r,e){const t=Bd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ss(u,e??{}))return o;kr(o,"already-initialized")}return t.initialize({options:e})}function BT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ar);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function $T(r,e,t){const s=rc(r);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=s_(e),{host:h,port:m}=HT(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(ss(_,s.config.emulator)&&ss(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,wo(h)?(by(`${u}//${h}${g}`),Vy("Auth",!0)):WT()}function s_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function HT(r){const e=s_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:dg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:dg(h)}}}function dg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function WT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class o_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
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
 */async function ho(r,e){return qy(r,"POST","/v1/accounts:signInWithIdp",nc(r,e))}/**
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
 */const qT="http://localhost";class as extends o_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new as(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:qT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ka(t)}return e}}/**
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
 */class a_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ya extends a_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hi extends Ya{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
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
 */class di extends Ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return as._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
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
 */class fi extends Ya{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
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
 */class pi extends Ya{constructor(){super("twitter.com")}static credential(e,t){return as._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
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
 */async function GT(r,e){return qy(r,"POST","/v1/accounts:signUp",nc(r,e))}/**
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
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await kn._fromIdTokenResponse(e,s,o),h=fg(s);return new Ti({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=fg(s);return new Ti({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function fg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function KT(r){var o;if(Cn(r.app))return Promise.reject(vi(r));const e=rc(r);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Ti({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await GT(e,{returnSecureToken:!0}),s=await Ti._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class zu extends br{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,zu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new zu(e,t,s,o)}}function l_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?zu._fromErrorAndOperation(r,u,e,s):u})}async function QT(r,e,t=!1){const s=await Ma(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ti._forOperation(r,"link",s)}/**
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
 */async function YT(r,e,t=!1){const{auth:s}=r;if(Cn(s.app))return Promise.reject(vi(s));const o="reauthenticate";try{const u=await Ma(r,l_(s,o,e,r),t);ve(u.idToken,s,"internal-error");const h=Wd(u.idToken);ve(h,s,"internal-error");const{sub:m}=h;return ve(r.uid===m,s,"user-mismatch"),Ti._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&kr(s,"user-mismatch"),u}}/**
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
 */async function JT(r,e,t=!1){if(Cn(r.app))return Promise.reject(vi(r));const s="signIn",o=await l_(r,s,e),u=await Ti._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}function XT(r,e,t,s){return Dn(r).onIdTokenChanged(e,t,s)}function ZT(r,e,t){return Dn(r).beforeAuthStateChanged(e,t)}function eI(r,e,t,s){return Dn(r).onAuthStateChanged(e,t,s)}const Bu="__sak";/**
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
 */class u_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tI=1e3,nI=10;class c_ extends u_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=r_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);NT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,nI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}c_.type="LOCAL";const rI=c_;/**
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
 */class h_ extends u_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}h_.type="SESSION";const d_=h_;/**
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
 */function iI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await iI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
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
 */function Kd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class sI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=Kd("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===_)switch(R.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function er(){return window}function oI(r){er().location.href=r}/**
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
 */function f_(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function aI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function uI(){return f_()?self:null}/**
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
 */const p_="firebaseLocalStorageDb",cI=1,$u="firebaseLocalStorage",m_="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sc(r,e){return r.transaction([$u],e?"readwrite":"readonly").objectStore($u)}function hI(){const r=indexedDB.deleteDatabase(p_);return new Ja(r).toPromise()}function yd(){const r=indexedDB.open(p_,cI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore($u,{keyPath:m_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains($u)?e(s):(s.close(),await hI(),e(await yd()))})})}async function pg(r,e,t){const s=sc(r,!0).put({[m_]:e,value:t});return new Ja(s).toPromise()}async function dI(r,e){const t=sc(r,!1).get(e),s=await new Ja(t).toPromise();return s===void 0?null:s.value}function mg(r,e){const t=sc(r,!0).delete(e);return new Ja(t).toPromise()}const fI=800,pI=3;class g_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>pI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(uI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await aI(),!this.activeServiceWorker)return;this.sender=new sI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await pg(e,Bu,"1"),await mg(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>pg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>dI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=sc(o,!1).getAll();return new Ja(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g_.type="LOCAL";const mI=g_;new Qa(3e4,6e4);/**
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
 */function gI(r,e){return e?Ar(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Qd extends o_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yI(r){return JT(r.auth,new Qd(r),r.bypassAuthState)}function _I(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),YT(t,new Qd(r),r.bypassAuthState)}async function vI(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),QT(t,new Qd(r),r.bypassAuthState)}/**
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
 */class y_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yI;case"linkViaPopup":case"linkViaRedirect":return vI;case"reauthViaPopup":case"reauthViaRedirect":return _I;default:kr(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EI=new Qa(2e3,1e4);class lo extends y_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EI.get())};e()}}lo.currentPopupAction=null;/**
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
 */const wI="pendingRedirect",Cu=new Map;class TI extends y_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Cu.get(this.auth._key());if(!e){try{const s=await II(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Cu.set(this.auth._key(),e)}return this.bypassAuthState||Cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function II(r,e){const t=RI(e),s=AI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function SI(r,e){Cu.set(r._key(),e)}function AI(r){return Ar(r._redirectPersistence)}function RI(r){return Pu(wI,r.config.apiKey,r.name)}async function PI(r,e,t=!1){if(Cn(r.app))return Promise.reject(vi(r));const s=rc(r),o=gI(s,e),h=await new TI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const CI=600*1e3;class kI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!__(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(gg(e))}saveEventToCache(e){this.cachedEventUids.add(gg(e)),this.lastProcessedEventTime=Date.now()}}function gg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function __({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return __(r);default:return!1}}/**
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
 */async function NI(r,e={}){return Io(r,"GET","/v1/projects",e)}/**
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
 */const DI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bI=/^https?/;async function VI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await NI(r);for(const t of e)try{if(OI(t))return}catch{}kr(r,"unauthorized-domain")}function OI(r){const e=md(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!bI.test(t))return!1;if(DI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const LI=new Qa(3e4,6e4);function yg(){const r=er().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function MI(r){return new Promise((e,t)=>{var o,u,h;function s(){yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yg(),t(Zn(r,"network-request-failed"))},timeout:LI.get()})}if((u=(o=er().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=er().gapi)!=null&&h.load)s();else{const m=jT("iframefcb");return er()[m]=()=>{gapi.load?s():t(Zn(r,"network-request-failed"))},FT(`${UT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw ku=null,e})}let ku=null;function FI(r){return ku=ku||MI(r),ku}/**
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
 */const UI=new Qa(5e3,15e3),jI="__/auth/iframe",zI="emulator/auth/iframe",BI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HI(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Hd(e,zI):`https://${r.config.authDomain}/${jI}`,s={apiKey:e.apiKey,appName:r.name,v:To},o=$I.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ka(s).slice(1)}`}async function WI(r){const e=await FI(r),t=er().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:HI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Zn(r,"network-request-failed"),m=er().setTimeout(()=>{u(h)},UI.get());function g(){er().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const qI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GI=500,KI=600,QI="_blank",YI="http://localhost";class _g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JI(r,e,t,s=GI,o=KI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...qI,width:s.toString(),height:o.toString(),top:u,left:h},_=zt().toLowerCase();t&&(m=Xy(_)?QI:t),Yy(_)&&(e=e||YI,g.scrollbars="yes");const E=Object.entries(g).reduce((R,[z,Q])=>`${R}${z}=${Q},`,"");if(xT(_)&&m!=="_self")return XI(e||"",m),new _g(null);const T=window.open(e||"",m,E);ve(T,r,"popup-blocked");try{T.focus()}catch{}return new _g(T)}function XI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const ZI="__/auth/handler",eS="emulator/auth/handler",tS=encodeURIComponent("fac");async function vg(r,e,t,s,o,u){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:To,eventId:o};if(e instanceof a_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",t0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof Ya){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),_=g?`#${tS}=${encodeURIComponent(g)}`:"";return`${nS(r)}?${Ka(m).slice(1)}${_}`}function nS({config:r}){return r.emulator?Hd(r,eS):`https://${r.authDomain}/${ZI}`}/**
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
 */const Xh="webStorageSupport";class rS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d_,this._completeRedirectFn=PI,this._overrideRedirectResult=SI}async _openPopup(e,t,s,o){var h;xr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await vg(e,t,s,md(),o);return JI(e,u,Kd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await vg(e,t,s,md(),o);return oI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(xr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await WI(e),s=new kI(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xh,{type:Xh},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Xh];u!==void 0&&t(!!u),kr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=VI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return r_()||Jy()||qd()}}const iS=rS;var Eg="@firebase/auth",wg="1.12.1";/**
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
 */class sS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aS(r){mo(new os("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(r)},_=new LT(s,o,u,g);return BT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),mo(new os("auth-internal",e=>{const t=rc(e.getProvider("auth").getImmediate());return(s=>new sS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_i(Eg,wg,oS(r)),_i(Eg,wg,"esm2020")}/**
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
 */const lS=300,uS=Dy("authIdTokenMaxAge")||lS;let Tg=null;const cS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>uS)return;const o=t==null?void 0:t.token;Tg!==o&&(Tg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function hS(r=Fy()){const e=Bd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=zT(r,{popupRedirectResolver:iS,persistence:[mI,rI,d_]}),s=Dy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=cS(u.toString());ZT(t,h,()=>h(t.currentUser)),XT(t,m=>h(m))}}const o=xy("auth");return o&&$T(t,`http://${o}`),t}function dS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}MT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Zn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",dS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aS("Browser");var fS="firebase",pS="12.10.0";/**
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
 */_i(fS,pS,"app");var Ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ei,v_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function P(){}P.prototype=S.prototype,k.F=S.prototype,k.prototype=new P,k.prototype.constructor=k,k.D=function(D,x,V){for(var A=Array(arguments.length-2),We=2;We<arguments.length;We++)A[We-2]=arguments[We];return S.prototype[x].apply(D,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,P){P||(P=0);const D=Array(16);if(typeof S=="string")for(var x=0;x<16;++x)D[x]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(x=0;x<16;++x)D[x]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=k.g[0],P=k.g[1],x=k.g[2];let V=k.g[3],A;A=S+(V^P&(x^V))+D[0]+3614090360&4294967295,S=P+(A<<7&4294967295|A>>>25),A=V+(x^S&(P^x))+D[1]+3905402710&4294967295,V=S+(A<<12&4294967295|A>>>20),A=x+(P^V&(S^P))+D[2]+606105819&4294967295,x=V+(A<<17&4294967295|A>>>15),A=P+(S^x&(V^S))+D[3]+3250441966&4294967295,P=x+(A<<22&4294967295|A>>>10),A=S+(V^P&(x^V))+D[4]+4118548399&4294967295,S=P+(A<<7&4294967295|A>>>25),A=V+(x^S&(P^x))+D[5]+1200080426&4294967295,V=S+(A<<12&4294967295|A>>>20),A=x+(P^V&(S^P))+D[6]+2821735955&4294967295,x=V+(A<<17&4294967295|A>>>15),A=P+(S^x&(V^S))+D[7]+4249261313&4294967295,P=x+(A<<22&4294967295|A>>>10),A=S+(V^P&(x^V))+D[8]+1770035416&4294967295,S=P+(A<<7&4294967295|A>>>25),A=V+(x^S&(P^x))+D[9]+2336552879&4294967295,V=S+(A<<12&4294967295|A>>>20),A=x+(P^V&(S^P))+D[10]+4294925233&4294967295,x=V+(A<<17&4294967295|A>>>15),A=P+(S^x&(V^S))+D[11]+2304563134&4294967295,P=x+(A<<22&4294967295|A>>>10),A=S+(V^P&(x^V))+D[12]+1804603682&4294967295,S=P+(A<<7&4294967295|A>>>25),A=V+(x^S&(P^x))+D[13]+4254626195&4294967295,V=S+(A<<12&4294967295|A>>>20),A=x+(P^V&(S^P))+D[14]+2792965006&4294967295,x=V+(A<<17&4294967295|A>>>15),A=P+(S^x&(V^S))+D[15]+1236535329&4294967295,P=x+(A<<22&4294967295|A>>>10),A=S+(x^V&(P^x))+D[1]+4129170786&4294967295,S=P+(A<<5&4294967295|A>>>27),A=V+(P^x&(S^P))+D[6]+3225465664&4294967295,V=S+(A<<9&4294967295|A>>>23),A=x+(S^P&(V^S))+D[11]+643717713&4294967295,x=V+(A<<14&4294967295|A>>>18),A=P+(V^S&(x^V))+D[0]+3921069994&4294967295,P=x+(A<<20&4294967295|A>>>12),A=S+(x^V&(P^x))+D[5]+3593408605&4294967295,S=P+(A<<5&4294967295|A>>>27),A=V+(P^x&(S^P))+D[10]+38016083&4294967295,V=S+(A<<9&4294967295|A>>>23),A=x+(S^P&(V^S))+D[15]+3634488961&4294967295,x=V+(A<<14&4294967295|A>>>18),A=P+(V^S&(x^V))+D[4]+3889429448&4294967295,P=x+(A<<20&4294967295|A>>>12),A=S+(x^V&(P^x))+D[9]+568446438&4294967295,S=P+(A<<5&4294967295|A>>>27),A=V+(P^x&(S^P))+D[14]+3275163606&4294967295,V=S+(A<<9&4294967295|A>>>23),A=x+(S^P&(V^S))+D[3]+4107603335&4294967295,x=V+(A<<14&4294967295|A>>>18),A=P+(V^S&(x^V))+D[8]+1163531501&4294967295,P=x+(A<<20&4294967295|A>>>12),A=S+(x^V&(P^x))+D[13]+2850285829&4294967295,S=P+(A<<5&4294967295|A>>>27),A=V+(P^x&(S^P))+D[2]+4243563512&4294967295,V=S+(A<<9&4294967295|A>>>23),A=x+(S^P&(V^S))+D[7]+1735328473&4294967295,x=V+(A<<14&4294967295|A>>>18),A=P+(V^S&(x^V))+D[12]+2368359562&4294967295,P=x+(A<<20&4294967295|A>>>12),A=S+(P^x^V)+D[5]+4294588738&4294967295,S=P+(A<<4&4294967295|A>>>28),A=V+(S^P^x)+D[8]+2272392833&4294967295,V=S+(A<<11&4294967295|A>>>21),A=x+(V^S^P)+D[11]+1839030562&4294967295,x=V+(A<<16&4294967295|A>>>16),A=P+(x^V^S)+D[14]+4259657740&4294967295,P=x+(A<<23&4294967295|A>>>9),A=S+(P^x^V)+D[1]+2763975236&4294967295,S=P+(A<<4&4294967295|A>>>28),A=V+(S^P^x)+D[4]+1272893353&4294967295,V=S+(A<<11&4294967295|A>>>21),A=x+(V^S^P)+D[7]+4139469664&4294967295,x=V+(A<<16&4294967295|A>>>16),A=P+(x^V^S)+D[10]+3200236656&4294967295,P=x+(A<<23&4294967295|A>>>9),A=S+(P^x^V)+D[13]+681279174&4294967295,S=P+(A<<4&4294967295|A>>>28),A=V+(S^P^x)+D[0]+3936430074&4294967295,V=S+(A<<11&4294967295|A>>>21),A=x+(V^S^P)+D[3]+3572445317&4294967295,x=V+(A<<16&4294967295|A>>>16),A=P+(x^V^S)+D[6]+76029189&4294967295,P=x+(A<<23&4294967295|A>>>9),A=S+(P^x^V)+D[9]+3654602809&4294967295,S=P+(A<<4&4294967295|A>>>28),A=V+(S^P^x)+D[12]+3873151461&4294967295,V=S+(A<<11&4294967295|A>>>21),A=x+(V^S^P)+D[15]+530742520&4294967295,x=V+(A<<16&4294967295|A>>>16),A=P+(x^V^S)+D[2]+3299628645&4294967295,P=x+(A<<23&4294967295|A>>>9),A=S+(x^(P|~V))+D[0]+4096336452&4294967295,S=P+(A<<6&4294967295|A>>>26),A=V+(P^(S|~x))+D[7]+1126891415&4294967295,V=S+(A<<10&4294967295|A>>>22),A=x+(S^(V|~P))+D[14]+2878612391&4294967295,x=V+(A<<15&4294967295|A>>>17),A=P+(V^(x|~S))+D[5]+4237533241&4294967295,P=x+(A<<21&4294967295|A>>>11),A=S+(x^(P|~V))+D[12]+1700485571&4294967295,S=P+(A<<6&4294967295|A>>>26),A=V+(P^(S|~x))+D[3]+2399980690&4294967295,V=S+(A<<10&4294967295|A>>>22),A=x+(S^(V|~P))+D[10]+4293915773&4294967295,x=V+(A<<15&4294967295|A>>>17),A=P+(V^(x|~S))+D[1]+2240044497&4294967295,P=x+(A<<21&4294967295|A>>>11),A=S+(x^(P|~V))+D[8]+1873313359&4294967295,S=P+(A<<6&4294967295|A>>>26),A=V+(P^(S|~x))+D[15]+4264355552&4294967295,V=S+(A<<10&4294967295|A>>>22),A=x+(S^(V|~P))+D[6]+2734768916&4294967295,x=V+(A<<15&4294967295|A>>>17),A=P+(V^(x|~S))+D[13]+1309151649&4294967295,P=x+(A<<21&4294967295|A>>>11),A=S+(x^(P|~V))+D[4]+4149444226&4294967295,S=P+(A<<6&4294967295|A>>>26),A=V+(P^(S|~x))+D[11]+3174756917&4294967295,V=S+(A<<10&4294967295|A>>>22),A=x+(S^(V|~P))+D[2]+718787259&4294967295,x=V+(A<<15&4294967295|A>>>17),A=P+(V^(x|~S))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.v=function(k,S){S===void 0&&(S=k.length);const P=S-this.blockSize,D=this.C;let x=this.h,V=0;for(;V<S;){if(x==0)for(;V<=P;)o(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<S;)if(D[x++]=k.charCodeAt(V++),x==this.blockSize){o(this,D),x=0;break}}else for(;V<S;)if(D[x++]=k[V++],x==this.blockSize){o(this,D),x=0;break}}this.h=x,this.o+=S},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var P=k.length-8;P<k.length;++P)k[P]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,P=0;P<4;++P)for(let D=0;D<32;D+=8)k[S++]=this.g[P]>>>D&255;return k};function u(k,S){var P=m;return Object.prototype.hasOwnProperty.call(P,k)?P[k]:P[k]=S(k)}function h(k,S){this.h=S;const P=[];let D=!0;for(let x=k.length-1;x>=0;x--){const V=k[x]|0;D&&V==S||(P[x]=V,D=!1)}this.g=P}var m={};function g(k){return-128<=k&&k<128?u(k,function(S){return new h([S|0],S<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return T;if(k<0)return B(_(-k));const S=[];let P=1;for(let D=0;k>=P;D++)S[D]=k/P|0,P*=4294967296;return new h(S,0)}function E(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return B(E(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const P=_(Math.pow(S,8));let D=T;for(let V=0;V<k.length;V+=8){var x=Math.min(8,k.length-V);const A=parseInt(k.substring(V,V+x),S);x<8?(x=_(Math.pow(S,x)),D=D.j(x).add(_(A))):(D=D.j(P),D=D.add(_(A)))}return D}var T=g(0),R=g(1),z=g(16777216);r=h.prototype,r.m=function(){if($(this))return-B(this).m();let k=0,S=1;for(let P=0;P<this.g.length;P++){const D=this.i(P);k+=(D>=0?D:4294967296+D)*S,S*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(Q(this))return"0";if($(this))return"-"+B(this).toString(k);const S=_(Math.pow(k,6));var P=this;let D="";for(;;){const x=ge(P,S).g;P=ae(P,x.j(S));let V=((P.g.length>0?P.g[0]:P.h)>>>0).toString(k);if(P=x,Q(P))return V+D;for(;V.length<6;)V="0"+V;D=V+D}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function Q(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function $(k){return k.h==-1}r.l=function(k){return k=ae(this,k),$(k)?-1:Q(k)?0:1};function B(k){const S=k.g.length,P=[];for(let D=0;D<S;D++)P[D]=~k.g[D];return new h(P,~k.h).add(R)}r.abs=function(){return $(this)?B(this):this},r.add=function(k){const S=Math.max(this.g.length,k.g.length),P=[];let D=0;for(let x=0;x<=S;x++){let V=D+(this.i(x)&65535)+(k.i(x)&65535),A=(V>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);D=A>>>16,V&=65535,A&=65535,P[x]=A<<16|V}return new h(P,P[P.length-1]&-2147483648?-1:0)};function ae(k,S){return k.add(B(S))}r.j=function(k){if(Q(this)||Q(k))return T;if($(this))return $(k)?B(this).j(B(k)):B(B(this).j(k));if($(k))return B(this.j(B(k)));if(this.l(z)<0&&k.l(z)<0)return _(this.m()*k.m());const S=this.g.length+k.g.length,P=[];for(var D=0;D<2*S;D++)P[D]=0;for(D=0;D<this.g.length;D++)for(let x=0;x<k.g.length;x++){const V=this.i(D)>>>16,A=this.i(D)&65535,We=k.i(x)>>>16,_t=k.i(x)&65535;P[2*D+2*x]+=A*_t,ue(P,2*D+2*x),P[2*D+2*x+1]+=V*_t,ue(P,2*D+2*x+1),P[2*D+2*x+1]+=A*We,ue(P,2*D+2*x+1),P[2*D+2*x+2]+=V*We,ue(P,2*D+2*x+2)}for(k=0;k<S;k++)P[k]=P[2*k+1]<<16|P[2*k];for(k=S;k<2*S;k++)P[k]=0;return new h(P,0)};function ue(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function te(k,S){this.g=k,this.h=S}function ge(k,S){if(Q(S))throw Error("division by zero");if(Q(k))return new te(T,T);if($(k))return S=ge(B(k),S),new te(B(S.g),B(S.h));if($(S))return S=ge(k,B(S)),new te(B(S.g),S.h);if(k.g.length>30){if($(k)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var P=R,D=S;D.l(k)<=0;)P=Ee(P),D=Ee(D);var x=Ce(P,1),V=Ce(D,1);for(D=Ce(D,2),P=Ce(P,2);!Q(D);){var A=V.add(D);A.l(k)<=0&&(x=x.add(P),V=A),D=Ce(D,1),P=Ce(P,1)}return S=ae(k,x.j(S)),new te(x,S)}for(x=T;k.l(S)>=0;){for(P=Math.max(1,Math.floor(k.m()/S.m())),D=Math.ceil(Math.log(P)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),V=_(P),A=V.j(S);$(A)||A.l(k)>0;)P-=D,V=_(P),A=V.j(S);Q(V)&&(V=R),x=x.add(V),k=ae(k,A)}return new te(x,k)}r.B=function(k){return ge(this,k).h},r.and=function(k){const S=Math.max(this.g.length,k.g.length),P=[];for(let D=0;D<S;D++)P[D]=this.i(D)&k.i(D);return new h(P,this.h&k.h)},r.or=function(k){const S=Math.max(this.g.length,k.g.length),P=[];for(let D=0;D<S;D++)P[D]=this.i(D)|k.i(D);return new h(P,this.h|k.h)},r.xor=function(k){const S=Math.max(this.g.length,k.g.length),P=[];for(let D=0;D<S;D++)P[D]=this.i(D)^k.i(D);return new h(P,this.h^k.h)};function Ee(k){const S=k.g.length+1,P=[];for(let D=0;D<S;D++)P[D]=k.i(D)<<1|k.i(D-1)>>>31;return new h(P,k.h)}function Ce(k,S){const P=S>>5;S%=32;const D=k.g.length-P,x=[];for(let V=0;V<D;V++)x[V]=S>0?k.i(V+P)>>>S|k.i(V+P+1)<<32-S:k.i(V+P);return new h(x,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,v_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,Ei=h}).apply(typeof Ig<"u"?Ig:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var E_,Aa,w_,xu,_d,T_,I_,S_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in y))break e;y=y[L]}l=l[l.length-1],w=y[l],p=p(w),p!=w&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&y.push([w,p[w]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function E(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function T(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(w,L,j){for(var X=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)X[Ie-2]=arguments[Ie];return p.prototype[L].apply(w,X)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const y=Array(p);for(let w=0;w<p;w++)y[w]=l[w];return y}return[]}function Q(l,p){for(let w=1;w<arguments.length;w++){const L=arguments[w];var y=typeof L;if(y=y!="object"?y:L?Array.isArray(L)?"array":y:"null",y=="array"||y=="object"&&typeof L.length=="number"){y=l.length||0;const j=L.length||0;l.length=y+j;for(let X=0;X<j;X++)l[y+X]=L[X]}else l.push(L)}}class ${constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function B(l){h.setTimeout(()=>{throw l},0)}function ae(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ue{constructor(){this.h=this.g=null}add(p,y){const w=te.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var te=new $(()=>new ge,l=>l.reset());class ge{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,Ce=!1,k=new ue,S=()=>{const l=Promise.resolve(void 0);Ee=()=>{l.then(P)}};function P(){for(var l;l=ae();){try{l.h.call(l.g)}catch(y){B(y)}var p=te;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Ce=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function We(l,p){x.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}T(We,x),We.prototype.init=function(l,p){const y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&We.Z.h.call(this)},We.prototype.h=function(){We.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Je(l,p,y,w,L){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++Nt,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function de(l,p,y){for(const w in l)p.call(y,l[w],w,l)}function ie(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function b(l){const p={};for(const y in l)p[y]=l[y];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(l,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)l[y]=w[y];for(let j=0;j<W.length;j++)y=W[j],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function Re(l){this.src=l,this.g={},this.h=0}Re.prototype.add=function(l,p,y,w,L){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const X=xe(l,p,w,L);return X>-1?(p=l[X],y||(p.fa=!1)):(p=new Je(p,this.src,j,!!w,L),p.fa=y,l.push(p)),p};function ke(l,p){const y=p.type;if(y in l.g){var w=l.g[y],L=Array.prototype.indexOf.call(w,p,void 0),j;(j=L>=0)&&Array.prototype.splice.call(w,L,1),j&&(Z(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function xe(l,p,y,w){for(let L=0;L<l.length;++L){const j=l[L];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==w)return L}return-1}var je="closure_lm_"+(Math.random()*1e6|0),Le={};function $e(l,p,y,w,L){if(Array.isArray(p)){for(let j=0;j<p.length;j++)$e(l,p[j],y,w,L);return null}return y=ko(y),l&&l[_t]?l.J(p,y,m(w)?!!w.capture:!1,L):Bt(l,p,y,!1,w,L)}function Bt(l,p,y,w,L,j){if(!p)throw Error("Invalid event type");const X=m(L)?!!L.capture:!!L;let Ie=ys(l);if(Ie||(l[je]=Ie=new Re(l)),y=Ie.add(p,y,w,X,j),y.proxy)return y;if(w=ms(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)V||(L=X),L===void 0&&(L=!1),l.addEventListener(p.toString(),w,L);else if(l.attachEvent)l.attachEvent(gs(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ms(){function l(y){return p.call(l.src,l.listener,y)}const p=rl;return l}function Co(l,p,y,w,L){if(Array.isArray(p))for(var j=0;j<p.length;j++)Co(l,p[j],y,w,L);else w=m(w)?!!w.capture:!!w,y=ko(y),l&&l[_t]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],y=xe(p,y,w,L),y>-1&&(Z(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=ys(l))&&(p=l.g[p.toString()],l=-1,p&&(l=xe(p,y,w,L)),(y=l>-1?p[l]:null)&&Vr(y))}function Vr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])ke(p.i,l);else{var y=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(y,w,l.capture):p.detachEvent?p.detachEvent(gs(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=ys(p))?(ke(y,l),y.h==0&&(y.src=null,p[je]=null)):Z(l)}}}function gs(l){return l in Le?Le[l]:Le[l]="on"+l}function rl(l,p){if(l.da)l=!0;else{p=new We(p,this);const y=l.listener,w=l.ha||l.src;l.fa&&Vr(l),l=y.call(w,p)}return l}function ys(l){return l=l[je],l instanceof Re?l:null}var ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function ko(l){return typeof l=="function"?l:(l[ki]||(l[ki]=function(p){return l.handleEvent(p)}),l[ki])}function ut(){D.call(this),this.i=new Re(this),this.M=this,this.G=null}T(ut,D),ut.prototype[_t]=!0,ut.prototype.removeEventListener=function(l,p,y,w){Co(this,l,p,y,w)};function st(l,p){var y,w=l.G;if(w)for(y=[];w;w=w.G)y.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new x(p,l);else if(p instanceof x)p.target=p.target||l;else{var L=p;p=new x(w,l),Ae(p,L)}L=!0;let j,X;if(y)for(X=y.length-1;X>=0;X--)j=p.g=y[X],L=_n(j,w,!0,p)&&L;if(j=p.g=l,L=_n(j,w,!0,p)&&L,L=_n(j,w,!1,p)&&L,y)for(X=0;X<y.length;X++)j=p.g=y[X],L=_n(j,w,!1,p)&&L}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let w=0;w<y.length;w++)Z(y[w]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,y,w){return this.i.add(String(l),p,!1,y,w)},ut.prototype.K=function(l,p,y,w){return this.i.add(String(l),p,!0,y,w)};function _n(l,p,y,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let j=0;j<p.length;++j){const X=p[j];if(X&&!X.da&&X.capture==y){const Ie=X.listener,ot=X.ha||X.src;X.fa&&ke(l.i,X),L=Ie.call(ot,w)!==!1&&L}}return L&&!w.defaultPrevented}function xo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function No(l){l.g=xo(()=>{l.g=null,l.i&&(l.i=!1,No(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class il extends D{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:No(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(l){D.call(this),this.h=l,this.g={}}T(Or,D);var Do=[];function _s(l){de(l.g,function(p,y){this.g.hasOwnProperty(y)&&Vr(p)},l),l.g={}}Or.prototype.N=function(){Or.Z.N.call(this),_s(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=h.JSON.stringify,sl=h.JSON.parse,xi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Mr(){}function ol(){}var Fr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vs(){x.call(this,"d")}T(vs,x);function bo(){x.call(this,"c")}T(bo,x);var vn={},Es=null;function Ur(){return Es=Es||new ut}vn.Ia="serverreachability";function ws(l){x.call(this,vn.Ia,l)}T(ws,x);function or(l){const p=Ur();st(p,new ws(p))}vn.STAT_EVENT="statevent";function ar(l,p){x.call(this,vn.STAT_EVENT,l),this.stat=p}T(ar,x);function rt(l){const p=Ur();st(p,new ar(p,l))}vn.Ja="timingevent";function Vo(l,p){x.call(this,vn.Ja,l),this.size=p}T(Vo,x);function jr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function zr(){this.g=!0}zr.prototype.ua=function(){this.g=!1};function al(l,p,y,w,L,j){l.info(function(){if(l.g)if(j){var X="",Ie=j.split("&");for(let Be=0;Be<Ie.length;Be++){var ot=Ie[Be].split("=");if(ot.length>1){const ct=ot[0];ot=ot[1];const rn=ct.split("_");X=rn.length>=2&&rn[1]=="type"?X+(ct+"="+ot+"&"):X+(ct+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+X})}function ll(l,p,y,w,L,j,X){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+j+" "+X})}function bn(l,p,y,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ni(l,y)+(w?" "+w:"")})}function ul(l,p){l.info(function(){return"TIMEOUT: "+p})}zr.prototype.info=function(){};function Ni(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var y=j[l];if(!(y.length<2)){var w=y[1];if(Array.isArray(w)&&!(w.length<1)){var L=w[0];if(L!="noop"&&L!="stop"&&L!="close")for(let X=1;X<w.length;X++)w[X]=""}}}}return Lr(j)}catch{return p}}var Br={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$r={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cl;function lr(){}T(lr,Mr),lr.prototype.g=function(){return new XMLHttpRequest},cl=new lr;function Vn(l){return encodeURIComponent(String(l))}function Ts(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function ln(l,p,y,w){this.j=l,this.i=p,this.l=y,this.S=w||1,this.V=new Or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hl}function hl(){this.i=null,this.g="",this.h=!1}var dl={},Oo={};function En(l,p,y){l.M=1,l.A=cr(un(p)),l.u=y,l.R=!0,Lo(l,null)}function Lo(l,p){l.F=Date.now(),Di(l),l.B=un(l.A);var y=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),qo(y.i,"t",w),l.C=0,y=l.j.L,l.h=new hl,l.g=Tl(l.j,y?p:null,!l.u),l.P>0&&(l.O=new il(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,w=l.ba;var L="readystatechange";Array.isArray(L)||(L&&(Do[0]=L.toString()),L=Do);for(let j=0;j<L.length;j++){const X=$e(y,L[j],w||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.J?b(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),or(),al(l.i,l.v,l.B,l.l,l.S,l.u)}ln.prototype.ba=function(l){l=l.target;const p=this.O;p&&zn(l)==3?p.j():this.Y(l)},ln.prototype.Y=function(l){try{if(l==this.g)e:{const Ie=zn(this.g),ot=this.g.ya(),Be=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||El(this.g)))){this.K||Ie!=4||ot==7||(ot==8||Be<=0?or(3):or(2)),Is(this);var p=this.g.ca();this.X=p;var y=fl(this);if(this.o=p==200,ll(this.i,this.v,this.B,this.l,this.S,Ie,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,L=this.g;if((w=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(w)){var j=w;break t}}j=null}if(l=j)bn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,rt(12),ur(this),bi(this);break e}}if(this.R){l=!0;let ct;for(;!this.K&&this.C<y.length;)if(ct=ml(this,y),ct==Oo){Ie==4&&(this.m=4,rt(14),l=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==dl){this.m=4,rt(15),bn(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else bn(this.i,this.l,ct,null),Ge(this,ct);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||y.length!=0||this.h.h||(this.m=1,rt(16),l=!1),this.o=this.o&&l,!l)bn(this.i,this.l,y,"[Invalid Chunked Response]"),ur(this),bi(this);else if(y.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Bi(X),X.P=!0,rt(11))}}else bn(this.i,this.l,y,null),Ge(this,y);Ie==4&&ur(this),this.o&&!this.K&&(Ie==4?bs(this.j,this):(this.o=!1,Di(this)))}else Ko(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),ur(this),bi(this)}}}catch{}finally{}};function fl(l){if(!pl(l))return l.g.la();const p=El(l.g);if(p==="")return"";let y="";const w=p.length,L=zn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return ur(l),bi(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<w;j++)l.h.h=!0,y+=l.h.i.decode(p[j],{stream:!(L&&j==w-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function pl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function ml(l,p){var y=l.C,w=p.indexOf(`
`,y);return w==-1?Oo:(y=Number(p.substring(y,w)),isNaN(y)?dl:(w+=1,w+y>p.length?Oo:(p=p.slice(w,w+y),l.C=w+y,p)))}ln.prototype.cancel=function(){this.K=!0,ur(this)};function Di(l){l.T=Date.now()+l.H,Mo(l,l.H)}function Mo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=jr(_(l.aa,l),p)}function Is(l){l.D&&(h.clearTimeout(l.D),l.D=null)}ln.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(ul(this.i,this.B),this.M!=2&&(or(),rt(17)),ur(this),this.m=2,bi(this)):Mo(this,this.T-l)};function bi(l){l.j.I==0||l.K||bs(l.j,l)}function ur(l){Is(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,_s(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||Uo(y.h,l))){if(!l.L&&Uo(y.h,l)&&y.I==3){try{var w=y.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)Ds(y),tn(y);else break e;Hn(y),rt(18)}}else y.xa=L[1],0<y.xa-y.K&&L[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=jr(_(y.Va,y),6e3));Vi(y.h)<=1&&y.ta&&(y.ta=void 0)}else nn(y,11)}else if((l.L||y.g==l)&&Ds(y),!A(p))for(L=y.Ba.g.parse(p),p=0;p<L.length;p++){let Be=L[p];const ct=Be[0];if(!(ct<=y.K))if(y.K=ct,Be=Be[1],y.I==2)if(Be[0]=="c"){y.M=Be[1],y.ba=Be[2];const rn=Be[3];rn!=null&&(y.ka=rn,y.j.info("VER="+y.ka));const mr=Be[4];mr!=null&&(y.za=mr,y.j.info("SVER="+y.za));const Wn=Be[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(w=1.5*Wn,y.O=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const qn=l.g;if(qn){const Ls=qn.g?qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ls){var j=w.h;j.g||Ls.indexOf("spdy")==-1&&Ls.indexOf("quic")==-1&&Ls.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(As(j,j.h),j.h=null))}if(w.G){const Jo=qn.g?qn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jo&&(w.wa=Jo,Ue(w.J,w.G,Jo))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),w=y;var X=l;if(w.na=Yo(w,w.L?w.ba:null,w.W),X.L){Oi(w.h,X);var Ie=X,ot=w.O;ot&&(Ie.H=ot),Ie.D&&(Is(Ie),Di(Ie)),w.g=X}else Dt(w);y.i.length>0&&pr(y)}else Be[0]!="stop"&&Be[0]!="close"||nn(y,7);else y.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?nn(y,7):xs(y):Be[0]!="noop"&&y.l&&y.l.qa(Be),y.A=0)}}or(4)}catch{}}var _c=class{constructor(l,p){this.g=l,this.map=p}};function Ss(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Vi(l){return l.h?1:l.g?l.g.size:0}function Uo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function As(l,p){l.g?l.g.add(p):l.h=p}function Oi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ss.prototype.cancel=function(){if(this.i=Xt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return z(l.i)}var gl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zt(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const w=l[y].indexOf("=");let L,j=null;w>=0?(L=l[y].substring(0,w),j=l[y].substring(w+1)):L=l[y],p(L,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function On(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof On?(this.l=l.l,Li(this,l.j),this.o=l.o,this.g=l.g,Ln(this,l.u),this.h=l.h,Hr(this,Go(l.i)),this.m=l.m):l&&(p=String(l).match(gl))?(this.l=!1,Li(this,p[1]||"",!0),this.o=Mi(p[2]||""),this.g=Mi(p[3]||"",!0),Ln(this,p[4]),this.h=Mi(p[5]||"",!0),Hr(this,p[6]||"",!0),this.m=Mi(p[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}On.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Fi(p,zo,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Fi(p,zo,!0),"@"),l.push(Vn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Fi(y,y.charAt(0)=="/"?Ui:Bo,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Fi(y,$o)),l.join("")},On.prototype.resolve=function(l){const p=un(this);let y=!!l.j;y?Li(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var w=l.h;if(y)Ln(p,l.u);else if(y=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var L=p.h.lastIndexOf("/");L!=-1&&(w=p.h.slice(0,L+1)+w)}if(L=w,L==".."||L==".")w="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){w=L.lastIndexOf("/",0)==0,L=L.split("/");const j=[];for(let X=0;X<L.length;){const Ie=L[X++];Ie=="."?w&&X==L.length&&j.push(""):Ie==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),w&&X==L.length&&j.push("")):(j.push(Ie),w=!0)}w=j.join("/")}else w=L}return y?p.h=w:y=l.i.toString()!=="",y?Hr(p,Go(l.i)):y=!!l.m,y&&(p.m=l.m),p};function un(l){return new On(l)}function Li(l,p,y){l.j=y?Mi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Ln(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Hr(l,p,y){p instanceof Ve?(l.i=p,Ps(l.i,l.l)):(y||(p=Fi(p,vc)),l.i=new Ve(p,l.l))}function Ue(l,p,y){l.i.set(p,y)}function cr(l){return Ue(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Mi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fi(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,jo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function jo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var zo=/[#\/\?@]/g,Bo=/[#\?:]/g,Ui=/[#\?]/g,vc=/[#\?@]/g,$o=/#/g;function Ve(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Mn(l){l.g||(l.g=new Map,l.h=0,l.i&&Zt(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Ve.prototype,r.add=function(l,p){Mn(this),this.i=null,l=Fn(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Ho(l,p){Mn(l),p=Fn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Rs(l,p){return Mn(l),p=Fn(l,p),l.g.has(p)}r.forEach=function(l,p){Mn(this),this.g.forEach(function(y,w){y.forEach(function(L){l.call(p,L,w,this)},this)},this)};function Wo(l,p){Mn(l);let y=[];if(typeof p=="string")Rs(l,p)&&(y=y.concat(l.g.get(Fn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}r.set=function(l,p){return Mn(this),this.i=null,l=Fn(this,l),Rs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=Wo(this,l),l.length>0?String(l[0]):p):p};function qo(l,p,y){Ho(l,p),y.length>0&&(l.i=null,l.g.set(Fn(l,p),z(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var y=p[w];const L=Vn(y);y=Wo(this,y);for(let j=0;j<y.length;j++){let X=L;y[j]!==""&&(X+="="+Vn(y[j])),l.push(X)}}return this.i=l.join("&")};function Go(l){const p=new Ve;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Fn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ps(l,p){p&&!l.j&&(Mn(l),l.i=null,l.g.forEach(function(y,w){const L=w.toLowerCase();w!=L&&(Ho(this,w),qo(this,L,y))},l)),l.j=p}function Un(l,p){const y=new zr;if(h.Image){const w=new Image;w.onload=E(St,y,"TestLoadImage: loaded",!0,p,w),w.onerror=E(St,y,"TestLoadImage: error",!1,p,w),w.onabort=E(St,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(St,y,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function jn(l,p){const y=new zr,w=new AbortController,L=setTimeout(()=>{w.abort(),St(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?St(y,"TestPingServer: ok",!0,p):St(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),St(y,"TestPingServer: error",!1,p)})}function St(l,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function ji(){this.g=new xi}function hr(l){this.i=l.Sb||null,this.h=l.ab||!1}T(hr,Mr),hr.prototype.g=function(){return new en(this.i,this.h)};function en(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(en,ut),r=en.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,wn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Wr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function yl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Wr(this):wn(this),this.readyState==3&&yl(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,Wr(this))},r.Na=function(l){this.g&&(this.response=l,Wr(this))},r.ga=function(){this.g&&Wr(this)};function Wr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,wn(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function wn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(en.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function _l(l){let p="";return de(l,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Cs(l,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=_l(y),typeof l=="string"?y!=null&&Vn(y):Ue(l,p,y))}function He(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(He,ut);var vl=/^https?$/i,Ec=["POST","PUT"];r=He.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cl.g(),this.g.onreadystatechange=R(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){qr(this,j);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Ec,p,void 0)>=0)||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of y)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){qr(this,j)}};function qr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Gr(l),fr(l)}function Gr(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,st(this,"complete"),st(this,"abort"),fr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fr(this,!0)),He.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?dr(this):this.Xa())},r.Xa=function(){dr(this)};function dr(l){if(l.h&&typeof u<"u"){if(l.v&&zn(l)==4)setTimeout(l.Ca.bind(l),0);else if(st(l,"readystatechange"),zn(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=j===0){let X=String(l.D).match(gl)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),w=!vl.test(X?X.toLowerCase():"")}y=w}if(y)st(l,"complete"),st(l,"success");else{l.o=6;try{var L=zn(l)>2?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.ca()+"]",Gr(l)}}finally{fr(l)}}}}function fr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||st(l,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function zn(l){return l.g?l.g.readyState:0}r.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),sl(p)}};function El(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ko(l){const p={};l=(l.g&&zn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(A(l[w]))continue;var y=Ts(l[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[L]||[];p[L]=j,j.push(y)}ie(p,function(w){return w.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function ks(l){this.za=0,this.i=[],this.j=new zr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bn("baseRetryDelayMs",5e3,l),this.Za=Bn("retryDelaySeedMs",1e4,l),this.Ta=Bn("forwardChannelMaxRetries",2,l),this.va=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ss(l&&l.concurrentRequestLimit),this.Ba=new ji,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=ks.prototype,r.ka=8,r.I=1,r.connect=function(l,p,y,w){rt(0),this.W=l,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.J=Yo(this,null,this.W),pr(this)};function xs(l){if(Ns(l),l.I==3){var p=l.V++,y=un(l.J);if(Ue(y,"SID",l.M),Ue(y,"RID",p),Ue(y,"TYPE","terminate"),$n(l,y),p=new ln(l,l.j,p),p.M=2,p.A=cr(un(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Tl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Di(p)}$i(l)}function tn(l){l.g&&(Bi(l),l.g.cancel(),l.g=null)}function Ns(l){tn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ds(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function pr(l){if(!Fo(l.h)&&!l.m){l.m=!0;var p=l.Ea;Ee||S(),Ce||(Ee(),Ce=!0),k.add(p,l),l.D=0}}function wl(l,p){return Vi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=jr(_(l.Ea,l,p),Vs(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const L=new ln(this,this.j,l);let j=this.o;if(this.U&&(j?(j=b(j),Ae(j,this.U)):j=this.U),this.u!==null||this.R||(L.J=j,j=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Qo(this,L,p),y=un(this.J),Ue(y,"RID",l),Ue(y,"CVER",22),this.G&&Ue(y,"X-HTTP-Session-Id",this.G),$n(this,y),j&&(this.R?p="headers="+Vn(_l(j))+"&"+p:this.u&&Cs(y,this.u,j)),As(this.h,L),this.Ra&&Ue(y,"TYPE","init"),this.S?(Ue(y,"$req",p),Ue(y,"SID","null"),L.U=!0,En(L,y,null)):En(L,y,p),this.I=2}}else this.I==3&&(l?zi(this,l):this.i.length==0||Fo(this.h)||zi(this))};function zi(l,p){var y;p?y=p.l:y=l.V++;const w=un(l.J);Ue(w,"SID",l.M),Ue(w,"RID",y),Ue(w,"AID",l.K),$n(l,w),l.u&&l.o&&Cs(w,l.u,l.o),y=new ln(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Qo(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),As(l.h,y),En(y,w,p)}function $n(l,p){l.H&&de(l.H,function(y,w){Ue(p,w,y)}),l.l&&de({},function(y,w){Ue(p,w,y)})}function Qo(l,p,y){y=Math.min(l.i.length,y);const w=l.l?_(l.l.Ka,l.l,l):null;e:{var L=l.i;let Ie=-1;for(;;){const ot=["count="+y];Ie==-1?y>0?(Ie=L[0].g,ot.push("ofs="+Ie)):Ie=0:ot.push("ofs="+Ie);let Be=!0;for(let ct=0;ct<y;ct++){var j=L[ct].g;const rn=L[ct].map;if(j-=Ie,j<0)Ie=Math.max(0,L[ct].g-100),Be=!1;else try{j="req"+j+"_"||"";try{var X=rn instanceof Map?rn:Object.entries(rn);for(const[mr,Wn]of X){let qn=Wn;m(Wn)&&(qn=Lr(Wn)),ot.push(j+mr+"="+encodeURIComponent(qn))}}catch(mr){throw ot.push(j+"type="+encodeURIComponent("_badmap")),mr}}catch{w&&w(rn)}}if(Be){X=ot.join("&");break e}}X=void 0}return l=l.i.splice(0,y),p.G=l,X}function Dt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Ee||S(),Ce||(Ee(),Ce=!0),k.add(p,l),l.A=0}}function Hn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=jr(_(l.Da,l),Vs(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,Kr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=jr(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),tn(this),Kr(this))};function Bi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Kr(l){l.g=new ln(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=un(l.na);Ue(p,"RID","rpc"),Ue(p,"SID",l.M),Ue(p,"AID",l.K),Ue(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ue(p,"TO",l.ia),Ue(p,"TYPE","xmlhttp"),$n(l,p),l.u&&l.o&&Cs(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=cr(un(p)),y.u=null,y.R=!0,Lo(y,l)}r.Va=function(){this.C!=null&&(this.C=null,tn(this),Hn(this),rt(19))};function Ds(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function bs(l,p){var y=null;if(l.g==p){Ds(l),Bi(l),l.g=null;var w=2}else if(Uo(l.h,p))y=p.G,Oi(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var L=l.D;w=Ur(),st(w,new Vo(w,y)),pr(l)}else Dt(l);else if(L=p.m,L==3||L==0&&p.X>0||!(w==1&&wl(l,p)||w==2&&Hn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),L){case 1:nn(l,5);break;case 4:nn(l,10);break;case 3:nn(l,6);break;default:nn(l,2)}}}function Vs(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function nn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),w=l.Ua;const L=!w;w=new On(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Li(w,"https"),cr(w),L?Un(w.toString(),y):jn(w.toString(),y)}else rt(2);l.I=0,l.l&&l.l.pa(p),$i(l),Ns(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function $i(l){if(l.I=0,l.ja=[],l.l){const p=Xt(l.h);(p.length!=0||l.i.length!=0)&&(Q(l.ja,p),Q(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Yo(l,p,y){var w=y instanceof On?un(y):new On(y);if(w.g!="")p&&(w.g=p+"."+w.g),Ln(w,w.u);else{var L=h.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const j=new On(null);w&&Li(j,w),p&&(j.g=p),L&&Ln(j,L),y&&(j.h=y),w=j}return y=l.G,p=l.wa,y&&p&&Ue(w,y,p),Ue(w,"VER",l.ka),$n(l,w),w}function Tl(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new He(new hr({ab:y})):new He(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Il(){}r=Il.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Os(){}Os.prototype.g=function(l,p){return new At(l,p)};function At(l,p){ut.call(this),this.g=new ks(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Qr(this)}T(At,ut),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){xs(this.g)},At.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=Lr(l),l=y);p.i.push(new _c(p.Ya++,l)),p.I==3&&pr(p)},At.prototype.N=function(){this.g.l=null,delete this.j,xs(this.g),delete this.g,At.Z.N.call(this)};function Sl(l){vs.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}T(Sl,vs);function Al(){bo.call(this),this.status=1}T(Al,bo);function Qr(l){this.g=l}T(Qr,Il),Qr.prototype.ra=function(){st(this.g,"a")},Qr.prototype.qa=function(l){st(this.g,new Sl(l))},Qr.prototype.pa=function(l){st(this.g,new Al)},Qr.prototype.oa=function(){st(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,S_=function(){return new Os},I_=function(){return Ur()},T_=vn,_d={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,xu=Br,$r.COMPLETE="complete",w_=$r,ol.EventType=Fr,Fr.OPEN="a",Fr.CLOSE="b",Fr.ERROR="c",Fr.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Aa=ol,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,E_=He}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let So="12.10.0";function mS(r){So=r}/**
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
 */const ls=new jd("@firebase/firestore");function io(){return ls.logLevel}function re(r,...e){if(ls.logLevel<=Ne.DEBUG){const t=e.map(Yd);ls.debug(`Firestore (${So}): ${r}`,...t)}}function Nr(r,...e){if(ls.logLevel<=Ne.ERROR){const t=e.map(Yd);ls.error(`Firestore (${So}): ${r}`,...t)}}function us(r,...e){if(ls.logLevel<=Ne.WARN){const t=e.map(Yd);ls.warn(`Firestore (${So}): ${r}`,...t)}}function Yd(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function ye(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,A_(r,s,t)}function A_(r,e,t){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Nr(s),new Error(s)}function ze(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||A_(e,o,s)}function Se(r,e){return r}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class R_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class yS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class _S{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new wi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new wi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new R_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class vS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ES{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new vS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Sg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Sg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Sg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Jd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=TS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function De(r,e){return r<e?-1:r>e?1:0}function vd(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return Zh(o)===Zh(u)?De(o,u):Zh(o)?1:-1}return De(r.length,e.length)}const IS=55296,SS=57343;function Zh(r){const e=r.charCodeAt(0);return e>=IS&&e<=SS}function go(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const Ag="__name__";class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Xn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return De(e.length,t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),o=Xn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):vd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ei.fromString(e.substring(4,e.length-2))}}class tt extends Xn{construct(e,t,s){return new tt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new tt(t)}static emptyPath(){return new tt([])}}const AS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Xn{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return AS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ag}static keyField(){return new kt([Ag])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new he(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new he(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new he(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(tt.fromString(e))}static fromName(e){return new me(tt.fromString(e).popFirst(5))}static empty(){return new me(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new tt(e.slice()))}}/**
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
 */function RS(r,e,t){if(!t)throw new he(K.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function PS(r,e,t,s){if(e===!0&&s===!0)throw new he(K.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Rg(r){if(!me.isDocumentKey(r))throw new he(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function P_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Xd(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ye(12329,{type:typeof r})}function Fa(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xd(r);throw new he(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function ft(r,e){const t={typeString:r};return e&&(t.value=e),t}function Xa(r,e){if(!P_(r))throw new he(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new he(K.INVALID_ARGUMENT,t);return!0}/**
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
 */const Pg=-62135596800,Cg=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Cg);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pg)throw new he(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cg}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xa(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:ft("string",Ye._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ye(0,0))}static max(){return new Te(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ua=-1;function CS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Ii(o,me.empty(),e)}function kS(r){return new Ii(r.readTime,r.key,Ua)}class Ii{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ii(Te.min(),me.empty(),Ua)}static max(){return new Ii(Te.max(),me.empty(),Ua)}}function xS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
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
 */const NS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ao(r){if(r.code!==K.FAILED_PRECONDITION||r.message!==NS)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function bS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ro(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class oc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}oc.ce=-1;/**
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
 */const Zd=-1;function ac(r){return r==null}function Hu(r){return r===0&&1/r==-1/0}function VS(r){return typeof r=="number"&&Number.isInteger(r)&&!Hu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const C_="";function OS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=kg(e)),e=LS(r.get(t),e);return kg(e)}function LS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case C_:t+="";break;default:t+=u}}return t}function kg(r){return r+C_+""}/**
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
 */function xg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function hs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function k_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new xn([])}unionWith(e){let t=new yt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new xn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class x_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new x_("Invalid base64 string: "+u):u}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const MS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=MS.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ai(r){return typeof r=="string"?xt.fromBase64String(r):xt.fromUint8Array(r)}/**
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
 */const N_="server_timestamp",D_="__type__",b_="__previous_value__",V_="__local_write_time__";function ef(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[D_])==null?void 0:s.stringValue)===N_}function lc(r){const e=r.mapValue.fields[b_];return ef(e)?lc(e):e}function ja(r){const e=Si(r.mapValue.fields[V_].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class FS{constructor(e,t,s,o,u,h,m,g,_,E,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E,this.apiKey=T}}const Wu="(default)";class za{constructor(e,t){this.projectId=e,this.database=t||Wu}static empty(){return new za("","")}get isDefaultDatabase(){return this.database===Wu}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}function US(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new he(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(r.options.projectId,e)}/**
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
 */const O_="__type__",jS="__max__",Tu={mapValue:{}},L_="__vector__",qu="value";function Ri(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ef(r)?4:BS(r)?9007199254740991:zS(r)?10:11:ye(28295,{value:r})}function ir(r,e){if(r===e)return!0;const t=Ri(r);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ja(r).isEqual(ja(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Si(o.timestampValue),m=Si(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return Ai(o.bytesValue).isEqual(Ai(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return lt(o.geoPointValue.latitude)===lt(u.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return lt(o.integerValue)===lt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=lt(o.doubleValue),m=lt(u.doubleValue);return h===m?Hu(h)===Hu(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return go(r.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(xg(h)!==xg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!ir(h[g],m[g])))return!1;return!0})(r,e);default:return ye(52216,{left:r})}}function Ba(r,e){return(r.values||[]).find((t=>ir(t,e)))!==void 0}function yo(r,e){if(r===e)return 0;const t=Ri(r),s=Ri(e);if(t!==s)return De(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=lt(u.integerValue||u.doubleValue),g=lt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Dg(r.timestampValue,e.timestampValue);case 4:return Dg(ja(r),ja(e));case 5:return vd(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ai(u),g=Ai(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const E=De(m[_],g[_]);if(E!==0)return E}return De(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=De(lt(u.latitude),lt(h.latitude));return m!==0?m:De(lt(u.longitude),lt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return bg(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var R,z,Q,$;const m=u.fields||{},g=h.fields||{},_=(R=m[qu])==null?void 0:R.arrayValue,E=(z=g[qu])==null?void 0:z.arrayValue,T=De(((Q=_==null?void 0:_.values)==null?void 0:Q.length)||0,(($=E==null?void 0:E.values)==null?void 0:$.length)||0);return T!==0?T:bg(_,E)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Tu.mapValue&&h===Tu.mapValue)return 0;if(u===Tu.mapValue)return 1;if(h===Tu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const R=vd(g[T],E[T]);if(R!==0)return R;const z=yo(m[g[T]],_[E[T]]);if(z!==0)return z}return De(g.length,E.length)})(r.mapValue,e.mapValue);default:throw ye(23264,{he:t})}}function Dg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=Si(r),s=Si(e),o=De(t.seconds,s.seconds);return o!==0?o:De(t.nanos,s.nanos)}function bg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return De(t.length,s.length)}function _o(r){return Ed(r)}function Ed(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Si(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ai(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return me.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Ed(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Ed(t.fields[h])}`;return o+"}"})(r.mapValue):ye(61005,{value:r})}function Nu(r){switch(Ri(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lc(r);return e?16+Nu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ai(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Nu(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return hs(s.fields,((u,h)=>{o+=u.length+Nu(h)})),o})(r.mapValue);default:throw ye(13486,{value:r})}}function wd(r){return!!r&&"integerValue"in r}function tf(r){return!!r&&"arrayValue"in r}function Vg(r){return!!r&&"nullValue"in r}function Og(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Du(r){return!!r&&"mapValue"in r}function zS(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[O_])==null?void 0:s.stringValue)===L_}function Na(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return hs(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Na(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Na(r.arrayValue.values[t]);return e}return{...r}}function BS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===jS}/**
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
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Na(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){hs(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new gn(Na(this.value))}}function M_(r){const e=[];return hs(r.fields,((t,s)=>{const o=new kt([t]);if(Du(s)){const u=M_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new xn(e)}/**
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
 */class jt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new jt(e,0,Te.min(),Te.min(),Te.min(),gn.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,Te.min(),Te.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,Te.min(),Te.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gu{constructor(e,t){this.position=e,this.inclusive=t}}function Lg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ir(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ku{constructor(e,t="asc"){this.field=e,this.dir=t}}function $S(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class F_{}class gt extends F_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new WS(e,t,s):t==="array-contains"?new KS(e,s):t==="in"?new QS(e,s):t==="not-in"?new YS(e,s):t==="array-contains-any"?new JS(e,s):new gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new qS(e,s):new GS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yo(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sr extends F_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new sr(e,t)}matches(e){return U_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function U_(r){return r.op==="and"}function j_(r){return HS(r)&&U_(r)}function HS(r){for(const e of r.filters)if(e instanceof sr)return!1;return!0}function Td(r){if(r instanceof gt)return r.field.canonicalString()+r.op.toString()+_o(r.value);if(j_(r))return r.filters.map((e=>Td(e))).join(",");{const e=r.filters.map((t=>Td(t))).join(",");return`${r.op}(${e})`}}function z_(r,e){return r instanceof gt?(function(s,o){return o instanceof gt&&s.op===o.op&&s.field.isEqual(o.field)&&ir(s.value,o.value)})(r,e):r instanceof sr?(function(s,o){return o instanceof sr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&z_(h,o.filters[m])),!0):!1})(r,e):void ye(19439)}function B_(r){return r instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`})(r):r instanceof sr?(function(t){return t.op.toString()+" {"+t.getFilters().map(B_).join(" ,")+"}"})(r):"Filter"}class WS extends gt{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class qS extends gt{constructor(e,t){super(e,"in",t),this.keys=$_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class GS extends gt{constructor(e,t){super(e,"not-in",t),this.keys=$_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $_(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>me.fromName(s.referenceValue)))}class KS extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tf(t)&&Ba(t.arrayValue,this.value)}}class QS extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ba(this.value.arrayValue,t)}}class YS extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ba(this.value.arrayValue,t)}}class JS extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ba(this.value.arrayValue,s)))}}/**
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
 */class XS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Fg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new XS(r,e,t,s,o,u,h)}function nf(r){const e=Se(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Td(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),ac(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>_o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>_o(s))).join(",")),e.Te=t}return e.Te}function rf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!$S(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!z_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Mg(r.startAt,e.startAt)&&Mg(r.endAt,e.endAt)}function Id(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class uc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function ZS(r,e,t,s,o,u,h,m){return new uc(r,e,t,s,o,u,h,m)}function sf(r){return new uc(r)}function Ug(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function e1(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function t1(r){return r.collectionGroup!==null}function Da(r){const e=Se(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(kt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ku(u,s))})),t.has(kt.keyField().canonicalString())||e.Ie.push(new Ku(kt.keyField(),s))}return e.Ie}function tr(r){const e=Se(r);return e.Ee||(e.Ee=n1(e,Da(r))),e.Ee}function n1(r,e){if(r.limitType==="F")return Fg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ku(o.field,u)}));const t=r.endAt?new Gu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Gu(r.startAt.position,r.startAt.inclusive):null;return Fg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Sd(r,e,t){return new uc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function cc(r,e){return rf(tr(r),tr(e))&&r.limitType===e.limitType}function H_(r){return`${nf(tr(r))}|lt:${r.limitType}`}function so(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>B_(o))).join(", ")}]`),ac(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>_o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>_o(o))).join(",")),`Target(${s})`})(tr(r))}; limitType=${r.limitType})`}function hc(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):me.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of Da(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Lg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Da(s),o)||s.endAt&&!(function(h,m,g){const _=Lg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Da(s),o))})(r,e)}function r1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function W_(r){return(e,t)=>{let s=!1;for(const o of Da(r)){const u=i1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function i1(r,e,t){const s=r.field.isKeyField()?me.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?yo(g,_):ye(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:r.dir})}}/**
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
 */class ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return k_(this.inner)}size(){return this.innerSize}}/**
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
 */const s1=new nt(me.comparator);function Dr(){return s1}const q_=new nt(me.comparator);function Ra(...r){let e=q_;for(const t of r)e=e.insert(t.key,t);return e}function G_(r){let e=q_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function rs(){return ba()}function K_(){return ba()}function ba(){return new ds((r=>r.toString()),((r,e)=>r.isEqual(e)))}const o1=new nt(me.comparator),a1=new yt(me.comparator);function be(...r){let e=a1;for(const t of r)e=e.add(t);return e}const l1=new yt(De);function u1(){return l1}/**
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
 */function of(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hu(e)?"-0":e}}function Q_(r){return{integerValue:""+r}}function c1(r,e){return VS(e)?Q_(e):of(r,e)}/**
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
 */class dc{constructor(){this._=void 0}}function h1(r,e,t){return r instanceof $a?(function(o,u){const h={fields:{[D_]:{stringValue:N_},[V_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&ef(u)&&(u=lc(u)),u&&(h.fields[b_]=u),{mapValue:h}})(t,e):r instanceof Ha?J_(r,e):r instanceof Wa?X_(r,e):(function(o,u){const h=Y_(o,u),m=jg(h)+jg(o.Ae);return wd(h)&&wd(o.Ae)?Q_(m):of(o.serializer,m)})(r,e)}function d1(r,e,t){return r instanceof Ha?J_(r,e):r instanceof Wa?X_(r,e):t}function Y_(r,e){return r instanceof Qu?(function(s){return wd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class $a extends dc{}class Ha extends dc{constructor(e){super(),this.elements=e}}function J_(r,e){const t=Z_(e);for(const s of r.elements)t.some((o=>ir(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Wa extends dc{constructor(e){super(),this.elements=e}}function X_(r,e){let t=Z_(e);for(const s of r.elements)t=t.filter((o=>!ir(o,s)));return{arrayValue:{values:t}}}class Qu extends dc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function jg(r){return lt(r.integerValue||r.doubleValue)}function Z_(r){return tf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class f1{constructor(e,t){this.field=e,this.transform=t}}function p1(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Ha&&o instanceof Ha||s instanceof Wa&&o instanceof Wa?go(s.elements,o.elements,ir):s instanceof Qu&&o instanceof Qu?ir(s.Ae,o.Ae):s instanceof $a&&o instanceof $a})(r.transform,e.transform)}class m1{constructor(e,t){this.version=e,this.transformResults=t}}class Pr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pr}static exists(e){return new Pr(void 0,e)}static updateTime(e){return new Pr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class fc{}function ev(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new nv(r.key,Pr.none()):new Za(r.key,r.data,Pr.none());{const t=r.data,s=gn.empty();let o=new yt(kt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new fs(r.key,s,new xn(o.toArray()),Pr.none())}}function g1(r,e,t){r instanceof Za?(function(o,u,h){const m=o.value.clone(),g=Bg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof fs?(function(o,u,h){if(!bu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Bg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(tv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Va(r,e,t,s){return r instanceof Za?(function(u,h,m,g){if(!bu(u.precondition,h))return m;const _=u.value.clone(),E=$g(u.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof fs?(function(u,h,m,g){if(!bu(u.precondition,h))return m;const _=$g(u.fieldTransforms,g,h),E=h.data;return E.setAll(tv(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(u,h,m){return bu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function y1(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=Y_(s.transform,o||null);u!=null&&(t===null&&(t=gn.empty()),t.set(s.field,u))}return t||null}function zg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,((u,h)=>p1(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Za extends fc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class fs extends fc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function tv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Bg(r,e,t){const s=new Map;ze(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,d1(h,m,t[o]))}return s}function $g(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,h1(u,h,e))}return s}class nv extends fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _1 extends fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class v1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&g1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Va(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Va(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=K_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=ev(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,((t,s)=>zg(t,s)))&&go(this.baseMutations,e.baseMutations,((t,s)=>zg(t,s)))}}class af{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return o1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new af(e,t,s,o)}}/**
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
 */class E1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class w1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var dt,Oe;function T1(r){switch(r){case K.OK:return ye(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return ye(15467,{code:r})}}function rv(r){if(r===void 0)return Nr("GRPC error has no .code"),K.UNKNOWN;switch(r){case dt.OK:return K.OK;case dt.CANCELLED:return K.CANCELLED;case dt.UNKNOWN:return K.UNKNOWN;case dt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case dt.INTERNAL:return K.INTERNAL;case dt.UNAVAILABLE:return K.UNAVAILABLE;case dt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case dt.NOT_FOUND:return K.NOT_FOUND;case dt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case dt.ABORTED:return K.ABORTED;case dt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case dt.DATA_LOSS:return K.DATA_LOSS;default:return ye(39323,{code:r})}}(Oe=dt||(dt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function I1(){return new TextEncoder}/**
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
 */const S1=new Ei([4294967295,4294967295],0);function Hg(r){const e=I1().encode(r),t=new v_;return t.update(e),new Uint8Array(t.digest())}function Wg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ei([t,s],0),new Ei([o,u],0)]}class lf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Pa(`Invalid padding: ${t}`);if(s<0)throw new Pa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Pa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Pa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ei.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ei.fromNumber(s)));return o.compare(S1)===1&&(o=new Ei([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Hg(e),[s,o]=Wg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new lf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Hg(e),[s,o]=Wg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.be(h)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,el.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new pc(Te.min(),o,new nt(De),Dr(),be())}}class el{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new el(s,t,be(),be(),be())}}/**
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
 */class Vu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=o}}class iv{constructor(e,t){this.targetId=e,this.Ce=t}}class sv{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class qg{constructor(){this.ve=0,this.Fe=Gg(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),t=be(),s=be();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:u})}})),new el(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Gg()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class A1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dr(),this.He=Iu(),this.Je=Iu(),this.Ze=new nt(De)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Id(u))if(s===0){const h=new me(u.path);this.et(t,h,jt.newNoDocument(h,Te.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ai(s).toUint8Array()}catch(g){if(g instanceof x_)return us("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new lf(h,o,u)}catch(g){return us(g instanceof Pa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Id(m.target)){const g=new me(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,jt.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.Ke())}}));let s=be();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new pc(e,t,this.Ze,this.je,s);return this.je=Dr(),this.He=Iu(),this.Je=Iu(),this.Ze=new nt(De),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new qg,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new yt(De),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new yt(De),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Iu(){return new nt(me.comparator)}function Gg(){return new nt(me.comparator)}const R1={asc:"ASCENDING",desc:"DESCENDING"},P1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},C1={and:"AND",or:"OR"};class k1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ad(r,e){return r.useProto3Json||ac(e)?e:{value:e}}function Yu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ov(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function x1(r,e){return Yu(r,e.toTimestamp())}function nr(r){return ze(!!r,49232),Te.fromTimestamp((function(t){const s=Si(t);return new Ye(s.seconds,s.nanos)})(r))}function uf(r,e){return Rd(r,e).canonicalString()}function Rd(r,e){const t=(function(o){return new tt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function av(r){const e=tt.fromString(r);return ze(dv(e),10190,{key:e.toString()}),e}function Pd(r,e){return uf(r.databaseId,e.path)}function ed(r,e){const t=av(e);if(t.get(1)!==r.databaseId.projectId)throw new he(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new he(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new me(uv(t))}function lv(r,e){return uf(r.databaseId,e)}function N1(r){const e=av(r);return e.length===4?tt.emptyPath():uv(e)}function Cd(r){return new tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function uv(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Kg(r,e,t){return{name:Pd(r,e),fields:t.value.mapValue.fields}}function D1(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(ze(E===void 0||typeof E=="string",58123),xt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),xt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?K.UNKNOWN:rv(_.code);return new he(E,_.message||"")})(h);t=new sv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ed(r,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Te.min(),m=new gn({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,u,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new Vu(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ed(r,s.document),u=s.readTime?nr(s.readTime):Te.min(),h=jt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Vu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ed(r,s.document),u=s.removedTargetIds||[];t=new Vu([],u,o,null)}else{if(!("filter"in e))return ye(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new w1(o,u),m=s.targetId;t=new iv(m,h)}}return t}function b1(r,e){let t;if(e instanceof Za)t={update:Kg(r,e.key,e.value)};else if(e instanceof nv)t={delete:Pd(r,e.key)};else if(e instanceof fs)t={update:Kg(r,e.key,e.data),updateMask:B1(e.fieldMask)};else{if(!(e instanceof _1))return ye(16599,{dt:e.type});t={verify:Pd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof $a)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Wa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Qu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:x1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye(27497)})(r,e.precondition)),t}function V1(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(Te.min())&&(h=nr(u)),new m1(h,o.transformResults||[])})(t,e)))):[]}function O1(r,e){return{documents:[lv(r,e.path)]}}function L1(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=lv(r,o);const u=(function(_){if(_.length!==0)return hv(sr.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((E=>(function(R){return{field:oo(R.field),direction:U1(R.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Ad(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function M1(r){let e=N1(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(T){const R=cv(T);return R instanceof sr&&j_(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((R=>(function(Q){return new Ku(ao(Q.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(R)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let R;return R=typeof T=="object"?T.value:T,ac(R)?null:R})(t.limit));let g=null;t.startAt&&(g=(function(T){const R=!!T.before,z=T.values||[];return new Gu(z,R)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const R=!T.before,z=T.values||[];return new Gu(z,R)})(t.endAt)),ZS(e,o,h,u,m,"F",g,_)}function F1(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ao(t.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ao(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ao(t.unaryFilter.field);return gt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ao(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(r):r.fieldFilter!==void 0?(function(t){return gt.create(ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return sr.create(t.compositeFilter.filters.map((s=>cv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(r):ye(30097,{filter:r})}function U1(r){return R1[r]}function j1(r){return P1[r]}function z1(r){return C1[r]}function oo(r){return{fieldPath:r.canonicalString()}}function ao(r){return kt.fromServerFormat(r.fieldPath)}function hv(r){return r instanceof gt?(function(t){if(t.op==="=="){if(Og(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NAN"}};if(Vg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Og(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NAN"}};if(Vg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(t.field),op:j1(t.op),value:t.value}}})(r):r instanceof sr?(function(t){const s=t.getFilters().map((o=>hv(o)));return s.length===1?s[0]:{compositeFilter:{op:z1(t.op),filters:s}}})(r):ye(54877,{filter:r})}function B1(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function dv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function fv(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class mi{constructor(e,t,s,o,u=Te.min(),h=Te.min(),m=xt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $1{constructor(e){this.yt=e}}function H1(r){const e=M1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Sd(e,e.limit,"L"):e}/**
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
 */class W1{constructor(){this.Sn=new q1}addToCollectionParentIndex(e,t){return this.Sn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ii.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ii.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class q1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(tt.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(tt.comparator)).toArray()}}/**
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
 */const Qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pv=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(pv,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class vo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new vo(0)}static ar(){return new vo(-1)}}/**
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
 */const Yg="LruGarbageCollector",G1=1048576;function Jg([r,e],[t,s]){const o=De(r,t);return o===0?De(e,s):o}class K1{constructor(e){this.Pr=e,this.buffer=new yt(Jg),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Jg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Q1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){re(Yg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ro(t)?re(Yg,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Ar(3e5)}))}}class Y1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(oc.ce);const s=new K1(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Qg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qg):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,m,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,t)))).next((T=>(u=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),io()<=Ne.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function J1(r,e){return new Y1(r,e)}/**
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
 */class X1{constructor(){this.changes=new ds((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Z1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class eA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Va(s.mutation,o,xn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,be()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=be()){const o=rs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ra();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=rs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,be())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Dr();const h=ba(),m=(function(){return ba()})();return t.forEach(((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof fs)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Va(E.mutation,_,E.mutation.getFieldMask(),Ye.now())):h.set(_.key,xn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>m.set(_,new Z1(E,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=ba();let o=new nt(((h,m)=>h-m)),u=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||xn.empty();E=m.applyToLocalView(_,E),s.set(g,E);const T=(o.get(m.batchId)||be()).add(g);o=o.insert(m.batchId,T)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,E=g.value,T=K_();E.forEach((R=>{if(!u.has(R)){const z=ev(t.get(R),s.get(R));z!==null&&T.set(R,z),u=u.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return e1(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):t1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(rs());let m=Ua,g=u;return h.next((_=>H.forEach(_,((E,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((R=>{g=g.insert(E,R)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,be()))).next((E=>({batchId:m,changes:G_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next((s=>{let o=Ra();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ra();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(g=>{const _=(function(T,R){return new uc(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((T,R)=>{h=h.insert(T,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,jt.newInvalidDocument(E)))}));let m=Ra();return h.forEach(((g,_)=>{const E=u.get(g);E!==void 0&&Va(E.mutation,_,xn.empty(),Ye.now()),hc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class tA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return H.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:H1(o.bundledQuery),readTime:nr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class nA{constructor(){this.overlays=new nt(me.comparator),this.Lr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=rs();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.bt(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=rs(),u=t.length+1,h=new me(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=rs(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=rs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return H.resolve(m)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new E1(t,s));let u=this.Lr.get(t);u===void 0&&(u=be(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
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
 */class rA{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class cf{constructor(){this.kr=new yt(Tt.Kr),this.qr=new yt(Tt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Tt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new me(new tt([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.qr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new me(new tt([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=be();return this.qr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return me.comparator(e.key,t.key)||De(e.Hr,t.Hr)}static Ur(e,t){return De(e.Hr,t.Hr)||me.comparator(e.key,t.key)}}/**
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
 */class iA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new yt(Tt.Kr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new v1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Jr=this.Jr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Zd:this.Yn-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(De);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),H.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;me.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new me(u),0);let m=new yt(De);return this.Jr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),H.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return H.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Jr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class sA{constructor(e){this.ti=e,this.docs=(function(){return new nt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=Dr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():jt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Dr();const h=t.path,m=new me(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||xS(kS(E),s)<=0||(o.has(E.key)||hc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ni(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new oA(this)}getSize(e){return H.resolve(this.size)}}class oA extends X1{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class aA{constructor(e){this.persistence=e,this.ri=new ds((t=>nf(t)),rf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.ii=0,this.si=new cf,this.targetCount=0,this.oi=vo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),H.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.lr(t),H.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.si.containsKey(t))}}/**
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
 */class mv{constructor(e,t){this._i={},this.overlays={},this.ai=new oc(0),this.ui=!1,this.ui=!0,this.ci=new rA,this.referenceDelegate=e(this),this.li=new aA(this),this.indexManager=new W1,this.remoteDocumentCache=(function(o){return new sA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new $1(t),this.Pi=new tA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new iA(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new lA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return H.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class lA extends DS{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ri=new cf,this.Ai=null}static Vi(e){return new hf(e)}get di(){if(this.Ai)return this.Ai;throw ye(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.di,(s=>{const o=me.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ju{constructor(e,t){this.persistence=e,this.fi=new ds((s=>OS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=J1(this,t)}static Vi(e,t){return new Ju(e,t)}Ti(){}Ii(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return H.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Te.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Nu(e.data.value)),t}wr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class df{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=be(),o=be();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new df(e,t.fromCache,s,o)}}/**
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
 */class uA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Qw()?8:bS(zt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new uA;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(io()<=Ne.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(io()<=Ne.DEBUG&&re("QueryEngine","Query:",so(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(io()<=Ne.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):H.resolve())}gs(e,t){if(Ug(t))return H.resolve(null);let s=tr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Sd(t,null,"F"),s=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=be(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ss(t,_,h,g.readTime)?this.gs(e,Sd(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return Ug(t)||o.isEqual(Te.min())?H.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ss(t,h,s,o)?H.resolve(null):(io()<=Ne.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),so(t)),this.Ds(e,h,t,CS(o,Ua)).next((m=>m)))}))}bs(e,t){let s=new yt(W_(e));return t.forEach(((o,u)=>{hc(e,u)&&(s=s.add(u))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return io()<=Ne.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",so(t)),this.fs.getDocumentsMatchingQuery(e,t,Ii.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const ff="LocalStore",hA=3e8;class dA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new nt(De),this.Fs=new ds((u=>nf(u)),rf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function fA(r,e,t,s){return new dA(r,e,t,s)}async function gv(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=be();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function pA(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,E){const T=_.batch,R=T.keys();let z=H.resolve();return R.forEach((Q=>{z=z.next((()=>E.getEntry(g,Q))).next(($=>{const B=_.docVersions.get(Q);ze(B!==null,48541),$.version.compareTo(B)<0&&(T.applyToRemoteDocument($,_),$.isValidDocument()&&($.setReadTime(_.commitVersion),E.addEntry($)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=be();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function yv(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function mA(r,e){const t=Se(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((E,T)=>{const R=o.get(T);if(!R)return;m.push(t.li.removeMatchingKeys(u,E.removedDocuments,T).next((()=>t.li.addMatchingKeys(u,E.addedDocuments,T))));let z=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?z=z.withResumeToken(xt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(T,z),(function($,B,ae){return $.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=hA?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(R,z,E)&&m.push(t.li.updateTargetData(u,z))}));let g=Dr(),_=be();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(gA(u,h,e.documentUpdates).next((E=>{g=E.Bs,_=E.Ls}))),!s.isEqual(Te.min())){const E=t.li.getLastRemoteSnapshotVersion(u).next((T=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.vs=o,u)))}function gA(r,e,t){let s=be(),o=be();return t.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let h=Dr();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):re(ff,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function yA(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Zd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function _A(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new mi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function kd(r,e,t){const s=Se(r),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ro(h))throw h;re(ff,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Xg(r,e,t){const s=Se(r);let o=Te.min(),u=be();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const T=Se(g),R=T.Fs.get(E);return R!==void 0?H.resolve(T.vs.get(R)):T.li.getTargetData(_,E)})(s,h,tr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?u:be()))).next((m=>(vA(s,r1(e),m),{documents:m,ks:u})))))}function vA(r,e,t){let s=r.Ms.get(e)||Te.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(e,s)}class Zg{constructor(){this.activeTargetIds=u1()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EA{constructor(){this.vo=new Zg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Zg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wA{Mo(e){}shutdown(){}}/**
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
 */const ey="ConnectivityMonitor";class ty{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){re(ey,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){re(ey,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Su=null;function xd(){return Su===null?Su=(function(){return 268435456+Math.round(2147483648*Math.random())})():Su++,"0x"+Su.toString(16)}/**
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
 */const td="RestConnection",TA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class IA{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Wu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=xd(),m=this.Qo(e,t.toUriEncodedString());re(td,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,u);const{host:_}=new URL(m),E=wo(_);return this.zo(e,m,g,s,E).then((T=>(re(td,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw us(td,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",s),T}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=TA[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class SA{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Mt="WebChannelConnection",Ia=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class fo extends IA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!fo.c_){const e=I_();Ia(e,T_.STAT_EVENT,(t=>{t.stat===_d.PROXY?re(Mt,"STAT_EVENT: detected buffering proxy"):t.stat===_d.NOPROXY&&re(Mt,"STAT_EVENT: detected no buffering proxy")})),fo.c_=!0}}zo(e,t,s,o,u){const h=xd();return new Promise(((m,g)=>{const _=new E_;_.setWithCredentials(!0),_.listenOnce(w_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case xu.NO_ERROR:const T=_.getResponseJson();re(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case xu.TIMEOUT:re(Mt,`RPC '${e}' ${h} timed out`),g(new he(K.DEADLINE_EXCEEDED,"Request time out"));break;case xu.HTTP_ERROR:const R=_.getStatus();if(re(Mt,`RPC '${e}' ${h} failed with status:`,R,"response text:",_.getResponseText()),R>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const Q=z==null?void 0:z.error;if(Q&&Q.status&&Q.message){const $=(function(ae){const ue=ae.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(ue)>=0?ue:K.UNKNOWN})(Q.status);g(new he($,Q.message))}else g(new he(K.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new he(K.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(Mt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);re(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=xd(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");re(Mt,`Creating RPC '${e}' stream ${o}: ${_}`,m);const E=h.createWebChannel(_,m);this.I_(E);let T=!1,R=!1;const z=new SA({Ho:Q=>{R?re(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,Q):(T||(re(Mt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),T=!0),re(Mt,`RPC '${e}' stream ${o} sending:`,Q),E.send(Q))},Jo:()=>E.close()});return Ia(E,Aa.EventType.OPEN,(()=>{R||(re(Mt,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),Ia(E,Aa.EventType.CLOSE,(()=>{R||(R=!0,re(Mt,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.E_(E))})),Ia(E,Aa.EventType.ERROR,(Q=>{R||(R=!0,us(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,Q.name,"Message:",Q.message),z.o_(new he(K.UNAVAILABLE,"The operation could not be completed")))})),Ia(E,Aa.EventType.MESSAGE,(Q=>{var $;if(!R){const B=Q.data[0];ze(!!B,16349);const ae=B,ue=(ae==null?void 0:ae.error)||(($=ae[0])==null?void 0:$.error);if(ue){re(Mt,`RPC '${e}' stream ${o} received error:`,ue);const te=ue.status;let ge=(function(k){const S=dt[k];if(S!==void 0)return rv(S)})(te),Ee=ue.message;te==="NOT_FOUND"&&Ee.includes("database")&&Ee.includes("does not exist")&&Ee.includes(this.databaseId.database)&&us(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ge===void 0&&(ge=K.INTERNAL,Ee="Unknown error status: "+te+" with message "+ue.message),R=!0,z.o_(new he(ge,Ee)),E.close()}else re(Mt,`RPC '${e}' stream ${o} received:`,B),z.__(B)}})),fo.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return S_()}}/**
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
 */function AA(r){return new fo(r)}function nd(){return typeof document<"u"?document:null}/**
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
 */function mc(r){return new k1(r,!0)}/**
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
 */fo.c_=!1;class _v{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const ny="PersistentStream";class vv{constructor(e,t,s,o,u,h,m,g){this.Ci=e,this.b_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _v(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new he(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(ny,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(re(ny,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class RA extends vv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=D1(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Te.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?nr(h.readTime):Te.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=Cd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Id(g)?{documents:O1(u,g)}:{query:L1(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=ov(u,h.resumeToken);const _=Ad(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Te.min())>0){m.readTime=Yu(u,h.snapshotVersion.toTimestamp());const _=Ad(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=F1(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Cd(this.serializer),t.removeTarget=e,this.K_(t)}}class PA extends vv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=V1(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Cd(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>b1(this.serializer,s)))};this.K_(t)}}/**
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
 */class CA{}class kA extends CA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new he(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Rd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(K.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,Rd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(K.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function xA(r,e,t,s){return new kA(r,e,t,s)}class NA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nr(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const cs="RemoteStore";class DA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{ps(this)&&(re(cs,"Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.Ea.add(4),await tl(_),_.Va.set("Unknown"),_.Ea.delete(4),await gc(_)})(this))}))})),this.Va=new NA(s,o)}}async function gc(r){if(ps(r))for(const e of r.Ra)await e(!0)}async function tl(r){for(const e of r.Ra)await e(!1)}function Ev(r,e){const t=Se(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),yf(t)?gf(t):Po(t).O_()&&mf(t,e))}function pf(r,e){const t=Se(r),s=Po(t);t.Ia.delete(e),s.O_()&&wv(t,e),t.Ia.size===0&&(s.O_()?s.L_():ps(t)&&t.Va.set("Unknown"))}function mf(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Po(r).Z_(e)}function wv(r,e){r.da.$e(e),Po(r).X_(e)}function gf(r){r.da=new A1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Po(r).start(),r.Va.ua()}function yf(r){return ps(r)&&!Po(r).x_()&&r.Ia.size>0}function ps(r){return Se(r).Ea.size===0}function Tv(r){r.da=void 0}async function bA(r){r.Va.set("Online")}async function VA(r){r.Ia.forEach(((e,t)=>{mf(r,e)}))}async function OA(r,e){Tv(r),yf(r)?(r.Va.ha(e),gf(r)):r.Va.set("Unknown")}async function LA(r,e,t){if(r.Va.set("Online"),e instanceof sv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.da.removeTarget(m))})(r,e)}catch(s){re(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xu(r,s)}else if(e instanceof Vu?r.da.Xe(e):e instanceof iv?r.da.st(e):r.da.tt(e),!t.isEqual(Te.min()))try{const s=await yv(r.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.Ia.get(_);E&&u.Ia.set(_,E.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const E=u.Ia.get(g);if(!E)return;u.Ia.set(g,E.withResumeToken(xt.EMPTY_BYTE_STRING,E.snapshotVersion)),wv(u,g);const T=new mi(E.target,g,_,E.sequenceNumber);mf(u,T)})),u.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){re(cs,"Failed to raise snapshot:",s),await Xu(r,s)}}async function Xu(r,e,t){if(!Ro(e))throw e;r.Ea.add(1),await tl(r),r.Va.set("Offline"),t||(t=()=>yv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(cs,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await gc(r)}))}function Iv(r,e){return e().catch((t=>Xu(r,t,e)))}async function yc(r){const e=Se(r),t=Pi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zd;for(;MA(e);)try{const o=await yA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,FA(e,o)}catch(o){await Xu(e,o)}Sv(e)&&Av(e)}function MA(r){return ps(r)&&r.Ta.length<10}function FA(r,e){r.Ta.push(e);const t=Pi(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function Sv(r){return ps(r)&&!Pi(r).x_()&&r.Ta.length>0}function Av(r){Pi(r).start()}async function UA(r){Pi(r).ra()}async function jA(r){const e=Pi(r);for(const t of r.Ta)e.ea(t.mutations)}async function zA(r,e,t){const s=r.Ta.shift(),o=af.from(s,e,t);await Iv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await yc(r)}async function BA(r,e){e&&Pi(r).Y_&&await(async function(s,o){if((function(h){return T1(h)&&h!==K.ABORTED})(o.code)){const u=s.Ta.shift();Pi(s).B_(),await Iv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await yc(s)}})(r,e),Sv(r)&&Av(r)}async function ry(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),re(cs,"RemoteStore received new credentials");const s=ps(t);t.Ea.add(3),await tl(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await gc(t)}async function $A(r,e){const t=Se(r);e?(t.Ea.delete(2),await gc(t)):e||(t.Ea.add(2),await tl(t),t.Va.set("Unknown"))}function Po(r){return r.ma||(r.ma=(function(t,s,o){const u=Se(t);return u.sa(),new RA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:bA.bind(null,r),Yo:VA.bind(null,r),t_:OA.bind(null,r),J_:LA.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),yf(r)?gf(r):r.Va.set("Unknown")):(await r.ma.stop(),Tv(r))}))),r.ma}function Pi(r){return r.fa||(r.fa=(function(t,s,o){const u=Se(t);return u.sa(),new PA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:UA.bind(null,r),t_:BA.bind(null,r),ta:jA.bind(null,r),na:zA.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await yc(r)):(await r.fa.stop(),r.Ta.length>0&&(re(cs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class _f{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new _f(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(r,e){if(Nr("AsyncQueue",`${e}: ${r}`),Ro(r))return new he(K.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=Ra(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class iy{constructor(){this.ga=new nt(me.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ye(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Eo{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Eo(e,t,po.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class HA{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class WA{constructor(){this.queries=sy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Se(t),u=o.queries;o.queries=sy(),u.forEach(((h,m)=>{for(const g of m.ba)g.onError(s)}))})(this,new he(K.ABORTED,"Firestore shutting down"))}}function sy(){return new ds((r=>H_(r)),cc)}async function qA(r,e){const t=Se(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.Da()&&(s=2):(u=new HA,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=vf(h,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Ef(t)}async function GA(r,e){const t=Se(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ba.indexOf(e);h>=0&&(u.ba.splice(h,1),u.ba.length===0?o=e.Da()?0:1:!u.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function KA(r,e){const t=Se(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.ba)m.Fa(o)&&(s=!0);h.wa=o}}s&&Ef(t)}function QA(r,e,t){const s=Se(r),o=s.queries.get(e);if(o)for(const u of o.ba)u.onError(t);s.queries.delete(e)}function Ef(r){r.Ca.forEach((e=>{e.next()}))}var Nd,oy;(oy=Nd||(Nd={})).Ma="default",oy.Cache="cache";class YA{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Nd.Cache}}/**
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
 */class Rv{constructor(e){this.key=e}}class Pv{constructor(e){this.key=e}}class JA{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=be(),this.mutatedKeys=be(),this.eu=W_(e),this.tu=new po(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new iy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const R=o.get(E),z=hc(this.query,T)?T:null,Q=!!R&&this.mutatedKeys.has(R.key),$=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let B=!1;R&&z?R.data.isEqual(z.data)?Q!==$&&(s.track({type:3,doc:z}),B=!0):this.su(R,z)||(s.track({type:2,doc:z}),B=!0,(g&&this.eu(z,g)>0||_&&this.eu(z,_)<0)&&(m=!0)):!R&&z?(s.track({type:0,doc:z}),B=!0):R&&!z&&(s.track({type:1,doc:R}),B=!0,(g||_)&&(m=!0)),B&&(z?(h=h.add(z),u=$?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Ss:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,T)=>(function(z,Q){const $=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Vt:B})}};return $(z)-$(Q)})(E.type,T.type)||this.eu(E.doc,T.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new Eo(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=be(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Pv(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Rv(s))})),t}cu(e){this.Za=e.ks,this.Ya=be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Eo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const wf="SyncEngine";class XA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ZA{constructor(e){this.key=e,this.hu=!1}}class eR{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ds((m=>H_(m)),cc),this.Iu=new Map,this.Eu=new Set,this.Ru=new nt(me.comparator),this.Au=new Map,this.Vu=new cf,this.du={},this.mu=new Map,this.fu=vo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function tR(r,e,t=!0){const s=bv(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Cv(s,e,t,!0),o}async function nR(r,e){const t=bv(r);await Cv(t,e,!0,!1)}async function Cv(r,e,t,s){const o=await _A(r.localStore,tr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await rR(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Ev(r.remoteStore,o),m}async function rR(r,e,t,s,o){r.pu=(T,R,z)=>(async function($,B,ae,ue){let te=B.view.ru(ae);te.Ss&&(te=await Xg($.localStore,B.query,!1).then((({documents:k})=>B.view.ru(k,te))));const ge=ue&&ue.targetChanges.get(B.targetId),Ee=ue&&ue.targetMismatches.get(B.targetId)!=null,Ce=B.view.applyChanges(te,$.isPrimaryClient,ge,Ee);return ly($,B.targetId,Ce.au),Ce.snapshot})(r,T,R,z);const u=await Xg(r.localStore,e,!0),h=new JA(e,u.ks),m=h.ru(u.documents),g=el.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);ly(r,t,_.au);const E=new XA(e,t,h);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function iR(r,e,t){const s=Se(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!cc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await kd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&pf(s.remoteStore,o.targetId),Dd(s,o.targetId)})).catch(Ao)):(Dd(s,o.targetId),await kd(s.localStore,o.targetId,!0))}async function sR(r,e){const t=Se(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pf(t.remoteStore,s.targetId))}async function oR(r,e,t){const s=fR(r);try{const o=await(function(h,m){const g=Se(h),_=Ye.now(),E=m.reduce(((z,Q)=>z.add(Q.key)),be());let T,R;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Q=Dr(),$=be();return g.xs.getEntries(z,E).next((B=>{Q=B,Q.forEach(((ae,ue)=>{ue.isValidDocument()||($=$.add(ae))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,Q))).next((B=>{T=B;const ae=[];for(const ue of m){const te=y1(ue,T.get(ue.key).overlayedDocument);te!=null&&ae.push(new fs(ue.key,te,M_(te.value.mapValue),Pr.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,ae,m)})).next((B=>{R=B;const ae=B.applyToLocalDocumentSet(T,$);return g.documentOverlayCache.saveOverlays(z,B.batchId,ae)}))})).then((()=>({batchId:R.batchId,changes:G_(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.du[h.currentUser.toKey()];_||(_=new nt(De)),_=_.insert(m,g),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await nl(s,o.changes),await yc(s.remoteStore)}catch(o){const u=vf(o,"Failed to persist write");t.reject(u)}}async function kv(r,e){const t=Se(r);try{const s=await mA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await nl(t,s,e)}catch(s){await Ao(s)}}function ay(r,e,t){const s=Se(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Se(h);g.onlineState=m;let _=!1;g.queries.forEach(((E,T)=>{for(const R of T.ba)R.va(m)&&(_=!0)})),_&&Ef(g)})(s.eventManager,e),o.length&&s.Pu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function aR(r,e,t){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new nt(me.comparator);h=h.insert(u,jt.newNoDocument(u,Te.min()));const m=be().add(u),g=new pc(Te.min(),new Map,new nt(De),h,m);await kv(s,g),s.Ru=s.Ru.remove(u),s.Au.delete(e),Tf(s)}else await kd(s.localStore,e,!1).then((()=>Dd(s,e,t))).catch(Ao)}async function lR(r,e){const t=Se(r),s=e.batch.batchId;try{const o=await pA(t.localStore,e);Nv(t,s,null),xv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await nl(t,o)}catch(o){await Ao(o)}}async function uR(r,e,t){const s=Se(r);try{const o=await(function(h,m){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,m).next((T=>(ze(T!==null,37113),E=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);Nv(s,e,t),xv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await nl(s,o)}catch(o){await Ao(o)}}function xv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Nv(r,e,t){const s=Se(r);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Dd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||Dv(r,s)}))}function Dv(r,e){r.Eu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(pf(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),Tf(r))}function ly(r,e,t){for(const s of t)s instanceof Rv?(r.Vu.addReference(s.key,e),cR(r,s)):s instanceof Pv?(re(wf,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||Dv(r,s.key)):ye(19791,{wu:s})}function cR(r,e){const t=e.key,s=t.path.canonicalString();r.Ru.get(t)||r.Eu.has(s)||(re(wf,"New document in limbo: "+t),r.Eu.add(s),Tf(r))}function Tf(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new me(tt.fromString(e)),s=r.fu.next();r.Au.set(s,new ZA(t)),r.Ru=r.Ru.insert(t,s),Ev(r.remoteStore,new mi(tr(sf(t.path)),s,"TargetPurposeLimboResolution",oc.ce))}}async function nl(r,e,t){const s=Se(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=df.Es(g.targetId,_);u.push(T)}})))})),await Promise.all(h),s.Pu.J_(o),await(async function(g,_){const E=Se(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>H.forEach(_,(R=>H.forEach(R.Ts,(z=>E.persistence.referenceDelegate.addReference(T,R.targetId,z))).next((()=>H.forEach(R.Is,(z=>E.persistence.referenceDelegate.removeReference(T,R.targetId,z)))))))))}catch(T){if(!Ro(T))throw T;re(ff,"Failed to update sequence numbers: "+T)}for(const T of _){const R=T.targetId;if(!T.fromCache){const z=E.vs.get(R),Q=z.snapshotVersion,$=z.withLastLimboFreeSnapshotVersion(Q);E.vs=E.vs.insert(R,$)}}})(s.localStore,u))}async function hR(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){re(wf,"User change. New user:",e.toKey());const s=await gv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((g=>{g.reject(new he(K.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await nl(t,s.Ns)}}function dR(r,e){const t=Se(r),s=t.Au.get(e);if(s&&s.hu)return be().add(s.key);{let o=be();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function bv(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aR.bind(null,e),e.Pu.J_=KA.bind(null,e.eventManager),e.Pu.yu=QA.bind(null,e.eventManager),e}function fR(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uR.bind(null,e),e}class Zu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return fA(this.persistence,new cA,e.initialUser,this.serializer)}Cu(e){return new mv(hf.Vi,this.serializer)}Du(e){return new EA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zu.provider={build:()=>new Zu};class pR extends Zu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof Ju,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Q1(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new mv((s=>Ju.Vi(s,t)),this.serializer)}}class bd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ay(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hR.bind(null,this.syncEngine),await $A(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new WA})()}createDatastore(e){const t=mc(e.databaseInfo.databaseId),s=AA(e.databaseInfo);return xA(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new DA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ay(this.syncEngine,t,0)),(function(){return ty.v()?new ty:new wA})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,E){const T=new eR(o,u,h,m,g,_);return E&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Se(o);re(cs,"RemoteStore shutting down."),u.Ea.add(5),await tl(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}bd.provider={build:()=>new bd};/**
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
 */class mR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ci="FirestoreClient";class gR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Jd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{re(Ci,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Ci,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function rd(r,e){r.asyncQueue.verifyOperationInProgress(),re(Ci,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await gv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function uy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await yR(r);re(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>ry(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>ry(e.remoteStore,o))),r._onlineComponents=e}async function yR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Ci,"Using user provided OfflineComponentProvider");try{await rd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;us("Error using user provided cache. Falling back to memory cache: "+t),await rd(r,new Zu)}}else re(Ci,"Using default OfflineComponentProvider"),await rd(r,new pR(void 0));return r._offlineComponents}async function Vv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Ci,"Using user provided OnlineComponentProvider"),await uy(r,r._uninitializedComponentsProvider._online)):(re(Ci,"Using default OnlineComponentProvider"),await uy(r,new bd))),r._onlineComponents}function _R(r){return Vv(r).then((e=>e.syncEngine))}async function vR(r){const e=await Vv(r),t=e.eventManager;return t.onListen=tR.bind(null,e.syncEngine),t.onUnlisten=iR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sR.bind(null,e.syncEngine),t}function ER(r,e,t={}){const s=new wi;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const E=new mR({next:R=>{E.Nu(),h.enqueueAndForget((()=>GA(u,T)));const z=R.docs.has(m);!z&&R.fromCache?_.reject(new he(K.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&R.fromCache&&g&&g.source==="server"?_.reject(new he(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(R)},error:R=>_.reject(R)}),T=new YA(sf(m.path),E,{includeMetadataChanges:!0,Ka:!0});return qA(u,T)})(await vR(r),r.asyncQueue,e,t,s))),s.promise}function wR(r,e){const t=new wi;return r.asyncQueue.enqueueAndForget((async()=>oR(await _R(r),e,t))),t.promise}/**
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
 */function Ov(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const TR="ComponentProvider",cy=new Map;function IR(r,e,t,s,o){return new FS(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Ov(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const Lv="firestore.googleapis.com",hy=!0;class dy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Lv,this.ssl=hy}else this.host=e.host,this.ssl=e.ssl??hy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<G1)throw new he(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ov(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class If{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new gS;switch(s.type){case"firstParty":return new ES(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=cy.get(t);s&&(re(TR,"Removing Datastore"),cy.delete(t),s.terminate())})(this),Promise.resolve()}}function SR(r,e,t,s={}){var _;r=Fa(r,If);const o=wo(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(by(`https://${m}`),Vy("Firestore",!0)),u.host!==Lv&&u.host!==m&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!ss(g,h)&&(r._setSettings(g),s.mockUserToken)){let E,T;if(typeof s.mockUserToken=="string")E=s.mockUserToken,T=Ft.MOCK_USER;else{E=jw(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new he(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ft(R)}r._authCredentials=new yS(new R_(E,T))}}/**
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
 */class Sf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Sf(this.firestore,e,this._query)}}class It{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Xa(t,It._jsonSchema))return new It(e,s||null,new me(tt.fromString(t.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:ft("string",It._jsonSchemaVersion),referencePath:ft("string")};class qa extends Sf{constructor(e,t,s){super(e,t,sf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new me(e))}withConverter(e){return new qa(this.firestore,e,this._path)}}function AR(r,e,...t){if(r=Dn(r),arguments.length===1&&(e=Jd.newId()),RS("doc","path",e),r instanceof If){const s=tt.fromString(e,...t);return Rg(s),new It(r,null,new me(s))}{if(!(r instanceof It||r instanceof qa))throw new he(K.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(tt.fromString(e,...t));return Rg(s),new It(r.firestore,r instanceof qa?r.converter:null,new me(s))}}/**
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
 */const fy="AsyncQueue";class py{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _v(this,"async_queue_retry"),this._c=()=>{const s=nd();s&&re(fy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=nd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=nd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new wi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;re(fy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Nr("INTERNAL UNHANDLED ERROR: ",my(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=_f.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&ye(47125,{Pc:my(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function my(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Af extends If{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new py,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new py(e),this._firestoreClient=void 0,await e}}}function RR(r,e){const t=typeof r=="object"?r:Fy(),s=typeof r=="string"?r:Wu,o=Bd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Fw("firestore");u&&SR(o,...u)}return o}function Mv(r){if(r._terminated)throw new he(K.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||PR(r),r._firestoreClient}function PR(r){var s,o,u,h;const e=r._freezeSettings(),t=IR(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new gR(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
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
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(xt.fromBase64String(e))}catch(t){throw new he(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xa(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:ft("string",yn._jsonSchemaVersion),bytes:ft("string")};/**
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
 */class Fv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Rf{constructor(e){this._methodName=e}}/**
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
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(Xa(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:ft("string",rr._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class Nn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xa(e,Nn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Nn(e.vectorValues);throw new he(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nn._jsonSchemaVersion="firestore/vectorValue/1.0",Nn._jsonSchema={type:ft("string",Nn._jsonSchemaVersion),vectorValues:ft("object")};/**
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
 */const CR=/^__.*__$/;class kR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Za(e,this.data,t,this.fieldTransforms)}}function Uv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{dataSource:r})}}class Pf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Pf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ec(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Uv(this.dataSource)&&CR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class xR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||mc(e)}createContext(e,t,s,o=!1){return new Pf({dataSource:e,methodName:t,targetDoc:s,path:kt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function NR(r){const e=r._freezeSettings(),t=mc(r._databaseId);return new xR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function DR(r,e,t,s,o,u={}){const h=r.createContext(u.merge||u.mergeFields?2:0,e,t,o);$v("Data must be an object, but it was:",h,s);const m=zv(s,h);let g,_;if(u.merge)g=new xn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const T of u.mergeFields){const R=kf(e,T,t);if(!h.contains(R))throw new he(K.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);OR(E,R)||E.push(R)}g=new xn(E),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new kR(new gn(m),g,_)}class Cf extends Rf{_toFieldTransform(e){return new f1(e.path,new $a)}isEqual(e){return e instanceof Cf}}function jv(r,e){if(Bv(r=Dn(r)))return $v("Unsupported field value:",e,r),zv(r,e);if(r instanceof Rf)return(function(s,o){if(!Uv(o.dataSource))throw o.createError(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=jv(m,o.childContextForArray(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=Dn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return c1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ye.fromDate(s);return{timestampValue:Yu(o.serializer,u)}}if(s instanceof Ye){const u=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Yu(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof yn)return{bytesValue:ov(o.serializer,s._byteString)};if(s instanceof It){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:uf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Nn)return(function(h,m){const g=h instanceof Nn?h.toArray():h;return{mapValue:{fields:{[O_]:{stringValue:L_},[qu]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw m.createError("VectorValues must only contain numeric values.");return of(m.serializer,E)}))}}}}}})(s,o);if(fv(s))return s._toProto(o.serializer);throw o.createError(`Unsupported field value: ${Xd(s)}`)})(r,e)}function zv(r,e){const t={};return k_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(r,((s,o)=>{const u=jv(o,e.childContextForField(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Bv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof rr||r instanceof yn||r instanceof It||r instanceof Rf||r instanceof Nn||fv(r))}function $v(r,e,t){if(!Bv(t)||!P_(t)){const s=Xd(t);throw s==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+s)}}function kf(r,e,t){if((e=Dn(e))instanceof Fv)return e._internalPath;if(typeof e=="string")return VR(r,e);throw ec("Field path arguments must be of type string or ",r,!1,void 0,t)}const bR=new RegExp("[~\\*/\\[\\]]");function VR(r,e,t){if(e.search(bR)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Fv(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ec(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new he(K.INVALID_ARGUMENT,m+r+g)}function OR(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class LR{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return hs(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[qu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>lt(h.doubleValue)));return new Nn(t)}convertGeoPoint(e){return new rr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=lc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const t=Si(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=tt.fromString(e);ze(dv(s),9688,{name:e});const o=new za(s.get(1),s.get(3)),u=new me(s.popFirst(5));return o.isEqual(t)||Nr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class MR extends LR{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function Hv(){return new Cf("serverTimestamp")}const gy="@firebase/firestore",yy="4.12.0";/**
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
 */class Wv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(kf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class FR extends Wv{data(){return super.data()}}function UR(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Ca{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends Wv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(kf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=is._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:ft("string",is._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Ou extends is{data(e={}){return super.data(e)}}class Oa{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ca(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ou(this._firestore,this._userDataWriter,s.key,s,new Ca(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Ou(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ca(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Ou(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ca(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:jR(m.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:r})}}/**
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
 */Oa._jsonSchemaVersion="firestore/querySnapshot/1.0",Oa._jsonSchema={type:ft("string",Oa._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};/**
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
 */function zR(r){r=Fa(r,It);const e=Fa(r.firestore,Af),t=Mv(e);return ER(t,r._key).then((s=>$R(e,r,s)))}function qv(r,e,t){r=Fa(r,It);const s=Fa(r.firestore,Af),o=UR(r.converter,e),u=NR(s);return BR(s,[DR(u,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Pr.none())])}function BR(r,e){const t=Mv(r);return wR(t,e)}function $R(r,e,t){const s=t.docs.get(e._key),o=new MR(r);return new is(r,o,e._key,s,new Ca(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){mS(To),mo(new os("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Af(new _S(s.getProvider("auth-internal")),new wS(h,s.getProvider("app-check-internal")),US(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),_i(gy,yy,e),_i(gy,yy,"esm2020")})();const HR=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"];function WR(r){return HR.filter(e=>!r[e])}function qR(r){const e=WR(r);if(e.length>0)throw new Error(`Missing required Firebase environment variables: ${e.join(", ")}. Ensure variables are set in .env.local (local dev) or GitHub Secrets (CI/CD).`)}const GR={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",VITE_FIREBASE_APP_ID:"1:662195056281:web:9a116d842188f7e7599208",VITE_FIREBASE_AUTH_DOMAIN:"math-trainer-1a632.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"662195056281",VITE_FIREBASE_PROJECT_ID:"math-trainer-1a632",VITE_FIREBASE_STORAGE_BUCKET:"math-trainer-1a632.firebasestorage.app"};qR(GR);const KR={apiKey:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",authDomain:"math-trainer-1a632.firebaseapp.com",projectId:"math-trainer-1a632",storageBucket:"math-trainer-1a632.firebasestorage.app",messagingSenderId:"662195056281",appId:"1:662195056281:web:9a116d842188f7e7599208"};let id,Vd,Gv;try{id=My(KR),Vd=hS(id),Gv=RR(id)}catch(r){throw new Error(`Firebase initialization failed: ${r.message}. Check that your Firebase configuration values are correct.`)}function QR(){const[r,e]=ee.useState(null),[t,s]=ee.useState(!0),[o,u]=ee.useState(null),h=ee.useCallback(async()=>{try{u(null),await KT(Vd)}catch(m){console.error("Anonymous sign-in failed:",m.message),u(m)}},[]);return ee.useEffect(()=>{const m=eI(Vd,g=>{g?(e(g),s(!1),console.log("User authenticated with ID:",g.uid)):(e(null),h())},g=>{console.error("Auth state change error:",g.message),u(g),s(!1)});return()=>m()},[h]),{user:r,loading:t,error:o}}const Rr={score:0,streak:0,currentStreak:0,totalProblems:0,correctAnswers:0,lastPlayed:null};function xf(r){return AR(Gv,"users",r,"progress","gameData")}async function _y(r,e){if(!r)return console.error("saveProgress: userId is required"),!1;try{const t=xf(r);return await qv(t,{...e,lastPlayed:Hv()}),console.log("Progress saved successfully for user:",r.substring(0,8)),!0}catch(t){throw console.error("Failed to save progress:",t.message),t}}async function YR(r){var e;if(!r)return console.error("loadProgress: userId is required"),Rr;try{const t=xf(r),s=await zR(t);if(s.exists()){const o=s.data();return console.log("Progress loaded for user:",r.substring(0,8)),{...Rr,...o,lastPlayed:((e=o.lastPlayed)==null?void 0:e.toDate())||null}}else return console.log("No progress found for user, returning defaults:",r.substring(0,8)),Rr}catch(t){return console.error("Failed to load progress:",t.message),Rr}}async function JR(r){if(!r)return console.error("resetProgress: userId is required"),!1;try{const e=xf(r);return await qv(e,{...Rr,lastPlayed:Hv()}),console.log("Progress reset for user:",r.substring(0,8)),!0}catch(e){throw console.error("Failed to reset progress:",e.message),e}}const XR=2e3;function ZR(r){const[e,t]=ee.useState(Rr),[s,o]=ee.useState(!0),[u,h]=ee.useState(!1),[m,g]=ee.useState(null),_=ee.useRef(!1),E=ee.useRef(null),T=ee.useRef(!0);ee.useEffect(()=>{if(!r){o(!1);return}let B=!1;async function ae(){try{o(!0),g(null);const ue=await YR(r);!B&&T.current&&(t(ue),_.current=!0)}catch(ue){!B&&T.current&&(console.error("useGameProgress: Failed to load progress",ue),g(ue),t(Rr),_.current=!0)}finally{!B&&T.current&&o(!1)}}return ae(),()=>{B=!0}},[r]),ee.useEffect(()=>(T.current=!0,()=>{T.current=!1,E.current&&clearTimeout(E.current)}),[]);const R=ee.useCallback(B=>{!r||!_.current||(E.current&&clearTimeout(E.current),E.current=setTimeout(async()=>{if(T.current)try{h(!0),await _y(r,B),T.current&&g(null)}catch(ae){console.error("useGameProgress: Failed to save progress",ae),T.current&&g(ae)}finally{T.current&&h(!1)}},XR))},[r]),z=ee.useCallback(B=>{t(ae=>{const ue={...ae,...B};return R(ue),ue})},[R]),Q=ee.useCallback(async()=>{if(!r)return t(Rr),!0;try{return h(!0),g(null),await JR(r),T.current&&t(Rr),!0}catch(B){return console.error("useGameProgress: Failed to reset progress",B),T.current&&g(B),!1}finally{T.current&&h(!1)}},[r]),$=ee.useCallback(async()=>{if(!r||!_.current)return!1;E.current&&clearTimeout(E.current);try{return h(!0),await _y(r,e),T.current&&g(null),!0}catch(B){return console.error("useGameProgress: Failed to force save",B),T.current&&g(B),!1}finally{T.current&&h(!1)}},[r,e]);return{progress:e,updateProgress:z,resetProgress:Q,forceSave:$,loading:s,saving:u,error:m}}const sd=[{id:1,name:"First Steps",operators:["+"],minNumber:1,maxNumber:5,ageTarget:"5-6"},{id:2,name:"Addition Hero",operators:["+"],minNumber:1,maxNumber:10,ageTarget:"6"},{id:3,name:"Minus Magic",operators:["-"],minNumber:1,maxNumber:10,ageTarget:"6-7"},{id:4,name:"Mixed Warrior",operators:["+","-"],minNumber:1,maxNumber:10,ageTarget:"7"},{id:5,name:"Cross the 10",operators:["+"],minNumber:1,maxNumber:20,ageTarget:"7"},{id:6,name:"Subtract 20",operators:["-"],minNumber:1,maxNumber:20,ageTarget:"7-8"},{id:7,name:"Mixed 20",operators:["+","-"],minNumber:1,maxNumber:20,ageTarget:"8"},{id:8,name:"Tens Master",operators:["+","-"],minNumber:10,maxNumber:100,ageTarget:"8-9",multiplesOf:10},{id:9,name:"Century Runner",operators:["+","-"],minNumber:1,maxNumber:100,ageTarget:"9"},{id:10,name:"Speed of 2s",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"9-10",multipliers:[2,5,10]},{id:11,name:"Times Tables",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"10-11",multipliers:[3,4,6,7,8,9]},{id:12,name:"Division Quest",operators:["/"],minNumber:2,maxNumber:10,ageTarget:"11-12",divisors:[2,5,10]},{id:13,name:"Math Champion",operators:["+","-","*","/"],minNumber:1,maxNumber:100,ageTarget:"12-13"}];function Od(r){if(r<1||r>sd.length)throw new Error(`Invalid level: ${r}. Must be 1-${sd.length}`);return sd[r-1]}const Ld={NUM_OPTIONS:4,WRONG_ANSWER_RANGE:3},eP=Od(2);function Jn(r,e){return Math.floor(Math.random()*(e-r+1))+r}function Au(r,e,t){const s=Math.ceil(r/t)*t,o=[];for(let u=s;u<=e;u+=t)o.push(u);return o[Jn(0,o.length-1)]}function Kv(r){const e=[...r];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function tP(r,e,t){t===void 0&&(t=r+20);const s=new Set,o=0,u=[];for(let g=-3;g<=Ld.WRONG_ANSWER_RANGE;g++){if(g===0)continue;const _=r+g;_>=o&&_<=t&&u.push(_)}const h=Kv(u);for(const g of h){if(s.size>=e)break;s.add(g)}let m=Ld.WRONG_ANSWER_RANGE+1;for(;s.size<e;){const g=r+m,_=r-m;if(g<=t&&!s.has(g)&&s.add(g),s.size<e&&_>=o&&!s.has(_)&&s.add(_),m++,m>t)break}return Array.from(s).slice(0,e)}function vy(r=eP){const{operators:e,minNumber:t,maxNumber:s,multiplesOf:o,multipliers:u,divisors:h}=r,m=e[Jn(0,e.length-1)];let g,_,E,T;if(m==="+")g=o?Au(t,s,o):Jn(t,s),_=o?Au(t,s,o):Jn(t,s),E=g+_,T=s*2;else if(m==="-")g=o?Au(t,s,o):Jn(t,s),_=o?Au(t,g,o):Jn(t,g),g<_&&([g,_]=[_,g]),E=g-_,T=s;else if(m==="*"){const Q=u||[2,3,4,5,6,7,8,9,10];g=Q[Jn(0,Q.length-1)],_=Jn(1,10),E=g*_,T=Math.max(...Q)*10}else{const Q=h||[2,3,4,5];_=Q[Jn(0,Q.length-1)];const $=Jn(1,10);g=_*$,E=$,T=Math.max(...Q)*10}const R=tP(E,Ld.NUM_OPTIONS-1,T),z=Kv([E,...R]);return{num1:g,num2:_,operator:m,correctAnswer:E,options:z}}function nP(r,e){return r===e}const rP=8,iP=-12,sP=3,oP=-8,aP=3e3,lP=1e4,uP=1.3,cP=1.6,hP=35,dP=20,fP=5,pP=85,mP=3,gP=50,Qv="RECORD_ANSWER",Yv="ACKNOWLEDGE_LEVEL_UP",Jv="RESET";function Md(r){return Math.min(100,Math.max(0,Math.round(r)))}function yP(r){let e=rP;return r<aP&&(e+=sP),e}function _P(r){return r>lP?oP:iP}function vP(r,e){return e>=5?r*cP:e>=2?r*uP:r}function Xv(r){return{score:Md(r??gP),streak:0,consecutiveWrong:0,shouldLevelUp:!1,lastDelta:0}}function EP(r,e){switch(e.type){case Qv:{const{isCorrect:t,responseTimeMs:s}=e.payload;if(t){const m=r.streak+1,g=yP(s),_=vP(g,m),E=Math.round(_),T=Md(r.score+E),R=T>=pP&&m>=mP;return{score:T,streak:m,consecutiveWrong:0,shouldLevelUp:r.shouldLevelUp||R,lastDelta:E}}const o=_P(s),u=Md(r.score+o),h=r.consecutiveWrong+1;return{score:u,streak:0,consecutiveWrong:h,shouldLevelUp:r.shouldLevelUp,lastDelta:o}}case Yv:return{...r,shouldLevelUp:!1};case Jv:return Xv(e.payload);default:return r}}function wP(r){const[e,t]=ee.useReducer(EP,r,Xv),s=ee.useCallback((g,_)=>{t({type:Qv,payload:{isCorrect:g,responseTimeMs:_}})},[]),o=ee.useCallback(()=>{t({type:Yv})},[]),u=ee.useCallback(g=>{t({type:Jv,payload:g})},[]),h=e.score<hP,m=e.score<dP&&e.consecutiveWrong>=fP;return{score:e.score,streak:e.streak,consecutiveWrong:e.consecutiveWrong,isStruggling:h,isCritical:m,shouldLevelUp:e.shouldLevelUp,lastDelta:e.lastDelta,recordAnswer:s,acknowledgeLevelUp:o,reset:u}}const TP=2e3,IP=10,od={isPlaying:!1,currentProblem:null,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0,bestStreak:0,totalProblems:0,correctAnswers:0};function SP({currentLevel:r=2,updateProgress:e,initialProgress:t}={}){const s=wP(),[o,u]=ee.useState(()=>({...od,score:(t==null?void 0:t.score)??0,bestStreak:(t==null?void 0:t.streak)??0,totalProblems:(t==null?void 0:t.totalProblems)??0,correctAnswers:(t==null?void 0:t.correctAnswers)??0})),h=ee.useRef(null),m=ee.useRef(!0),g=ee.useRef(null);ee.useEffect(()=>(m.current=!0,()=>{m.current=!1,h.current&&clearTimeout(h.current)}),[]),ee.useEffect(()=>{t&&!o.isPlaying&&u($=>({...$,score:t.score??$.score,bestStreak:t.streak??$.bestStreak,totalProblems:t.totalProblems??$.totalProblems,correctAnswers:t.correctAnswers??$.correctAnswers}))},[t,o.isPlaying]);const _=ee.useCallback(()=>{const $=vy(Od(r));s.reset(),g.current=Date.now(),u(B=>({...B,isPlaying:!0,currentProblem:$,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0}))},[r,s]),E=ee.useCallback(()=>{if(!m.current)return;const $=vy(Od(r));g.current=Date.now(),u(B=>({...B,currentProblem:$,userAnswer:null,showFeedback:!1,isCorrect:!1}))},[r]),T=ee.useCallback($=>{const B=o;if(!B.isPlaying||!B.currentProblem||B.showFeedback)return;const ae=nP($,B.currentProblem.correctAnswer),ue=Date.now()-g.current;s.recordAnswer(ae,ue),u(te=>{const ge=ae?te.score+IP:te.score,Ee=ae?te.streak+1:0,Ce=Math.max(te.bestStreak,Ee),k=te.totalProblems+1,S=ae?te.correctAnswers+1:te.correctAnswers;return e&&e({score:ge,streak:Ce,currentStreak:Ee,totalProblems:k,correctAnswers:S}),{...te,userAnswer:$,showFeedback:!0,isCorrect:ae,score:ge,streak:Ee,bestStreak:Ce,totalProblems:k,correctAnswers:S}}),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{m.current&&E()},TP)},[o,e,E,s]),R=ee.useCallback(()=>{h.current&&clearTimeout(h.current),s.reset(),u($=>({...od,score:$.score,bestStreak:$.bestStreak,totalProblems:$.totalProblems,correctAnswers:$.correctAnswers}))},[s]),z=ee.useCallback(()=>{h.current&&clearTimeout(h.current),s.reset(),u(od)},[s]),Q=ee.useCallback(()=>o.totalProblems===0?0:Math.round(o.correctAnswers/o.totalProblems*100),[o.totalProblems,o.correctAnswers]);return{gameState:o,currentProblem:o.currentProblem,userAnswer:o.userAnswer,score:o.score,streak:s.streak,bestStreak:o.bestStreak,isPlaying:o.isPlaying,showFeedback:o.showFeedback,isCorrect:o.isCorrect,totalProblems:o.totalProblems,correctAnswers:o.correctAnswers,confidenceScore:s.score,isStruggling:s.isStruggling,isCritical:s.isCritical,shouldLevelUp:s.shouldLevelUp,lastDelta:s.lastDelta,consecutiveWrong:s.consecutiveWrong,acknowledgeLevelUp:s.acknowledgeLevelUp,handleAnswer:T,startGame:_,nextProblem:E,resetGame:R,fullReset:z,accuracy:Q()}}var ad={exports:{}},ld,Ey;function AP(){if(Ey)return ld;Ey=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ld=r,ld}var ud,wy;function RP(){if(wy)return ud;wy=1;var r=AP();function e(){}function t(){}return t.resetWarningCache=e,ud=function(){function s(h,m,g,_,E,T){if(T!==r){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}s.isRequired=s;function o(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return u.PropTypes=u,u},ud}var Ty;function PP(){return Ty||(Ty=1,ad.exports=RP()()),ad.exports}var CP=PP();const we=Fd(CP);function Zv({num1:r,num2:e,operator:t}){return M.jsx("section",{className:"bg-sonic-blue rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md mx-auto","aria-label":"Math Problem",children:M.jsx("div",{className:"text-center",children:M.jsxs("p",{className:`text-4xl md:text-6xl font-game text-white tracking-wide
                     drop-shadow-md select-none`,"aria-live":"polite","aria-atomic":"true",children:[M.jsx("span",{className:"inline-block mx-2",children:r}),M.jsx("span",{className:"inline-block mx-2 text-sonic-gold",children:t}),M.jsx("span",{className:"inline-block mx-2",children:e}),M.jsx("span",{className:"inline-block mx-2",children:"="}),M.jsx("span",{className:"inline-block mx-2 text-sonic-gold animate-pulse",children:"?"})]})})})}Zv.propTypes={num1:we.number.isRequired,num2:we.number.isRequired,operator:we.string.isRequired};function eE({options:r,onAnswer:e,disabled:t=!1}){const s=u=>{t||e(u)},o=(u,h)=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),s(h))};return M.jsx("div",{className:"grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto mt-6",role:"group","aria-label":"Answer Options",children:r.map((u,h)=>M.jsx("button",{onClick:()=>s(u),onKeyDown:m=>o(m,u),disabled:t,className:`
            bg-sonic-gold text-sonic-blue font-game
            text-3xl md:text-4xl
            py-6 md:py-8 px-4
            rounded-xl shadow-lg
            transform transition-all duration-200
            select-none
            ${t?"opacity-50 cursor-not-allowed":`hover:bg-yellow-400 hover:scale-105
                   active:scale-95 active:bg-yellow-500
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`}
          `,"aria-label":`Answer: ${u}`,children:u},`answer-${h}-${u}`))})}eE.propTypes={options:we.arrayOf(we.number).isRequired,onAnswer:we.func.isRequired,disabled:we.bool};function tE({score:r,streak:e}){const s=e>=10?{emoji:"🔥",label:"On Fire!"}:e>=5?{emoji:"⚡",label:"Lightning!"}:e>=3?{emoji:"🦔",label:"Speedy!"}:{emoji:"⭐",label:"Keep going!"};return M.jsxs("div",{className:`flex justify-between items-center w-full max-w-md mx-auto
                 bg-black/30 rounded-xl p-4 md:p-5`,role:"status","aria-label":`Score: ${r}, Streak: ${e}`,children:[M.jsxs("div",{className:"text-center flex-1",children:[M.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Score"}),M.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                     transition-all duration-300`,"aria-live":"polite",children:r})]}),M.jsx("div",{className:"w-px h-12 bg-white/20 mx-4","aria-hidden":"true"}),M.jsxs("div",{className:"text-center flex-1",children:[M.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Streak"}),M.jsxs("div",{className:"flex items-center justify-center gap-2",children:[M.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                       transition-all duration-300
                       ${e>0?"animate-bounce":""}`,"aria-live":"polite",children:e}),e>0&&M.jsx("span",{className:"text-2xl md:text-3xl transition-transform duration-300","aria-label":s.label,role:"img",children:s.emoji})]})]})]})}tE.propTypes={score:we.number.isRequired,streak:we.number.isRequired};const kP=[{text:"Sonic Speed!",emoji:"🦔💨"},{text:"Amazing!",emoji:"⭐"},{text:"Perfect!",emoji:"🎯"},{text:"Great Job!",emoji:"🎉"},{text:"You're on Fire!",emoji:"🔥"},{text:"Super Star!",emoji:"🌟"},{text:"Awesome!",emoji:"✨"},{text:"Incredible!",emoji:"💫"}],xP=[{text:"Try Again!",emoji:"💪"},{text:"Almost There!",emoji:"🎈"},{text:"Keep Going!",emoji:"🚀"},{text:"You've Got This!",emoji:"👍"},{text:"So Close!",emoji:"🌈"},{text:"One More Try!",emoji:"🎮"}],Iy=200,Sy=1500,NP=200;function nE({isCorrect:r,onComplete:e=null}){const[t,s]=ee.useState(!1),[o,u]=ee.useState(!1),[h,m]=ee.useState({text:"",emoji:""}),g=ee.useCallback(()=>{const _=r?kP:xP,E=Math.floor(Math.random()*_.length);return _[E]},[r]);return ee.useEffect(()=>{m(g()),s(!0),u(!1);const _=setTimeout(()=>{u(!0)},Iy+Sy),E=setTimeout(()=>{s(!1),e&&e()},Iy+Sy+NP);return()=>{clearTimeout(_),clearTimeout(E)}},[r,e,g]),t?M.jsx("div",{className:`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        transition-opacity duration-200
        ${o?"opacity-0":"opacity-100"}
      `,"aria-live":"polite",role:"status",children:M.jsxs("div",{className:`
          flex flex-col items-center justify-center
          p-8 rounded-3xl
          ${r?"bg-gradient-to-br from-green-500 to-emerald-600 animate-feedback-correct":"bg-gradient-to-br from-orange-400 to-amber-500 animate-feedback-wrong"}
          shadow-2xl
          transform
          ${o?"scale-90 opacity-0":"scale-100 opacity-100"}
          transition-all duration-200
        `,children:[M.jsx("div",{className:`text-6xl md:text-7xl mb-4 ${r?"animate-bounce-custom":"animate-shake"}`,children:r?"✅":"🔄"}),M.jsx("h2",{className:`
            text-3xl md:text-4xl font-game text-white text-center
            drop-shadow-lg
            ${r?"animate-pulse-scale":""}
          `,children:h.text}),M.jsx("span",{className:"text-4xl md:text-5xl mt-3 animate-bounce",children:h.emoji}),r&&M.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden rounded-3xl",children:[M.jsx("div",{className:"sparkle sparkle-1",children:"✨"}),M.jsx("div",{className:"sparkle sparkle-2",children:"⭐"}),M.jsx("div",{className:"sparkle sparkle-3",children:"💫"}),M.jsx("div",{className:"sparkle sparkle-4",children:"🌟"}),M.jsx("div",{className:"sparkle sparkle-5",children:"✨"}),M.jsx("div",{className:"sparkle sparkle-6",children:"⭐"})]})]})}):null}nE.propTypes={isCorrect:we.bool.isRequired,onComplete:we.func};function rE({onGameEnd:r,updateProgress:e=null,initialProgress:t=null}){const{currentProblem:s,score:o,streak:u,bestStreak:h,showFeedback:m,isCorrect:g,handleAnswer:_,startGame:E,isPlaying:T,totalProblems:R,correctAnswers:z,accuracy:Q}=SP({updateProgress:e,initialProgress:t});if(!T)return E(),null;if(!s)return M.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex items-center justify-center",children:M.jsx("p",{className:"text-white font-game text-2xl",children:"Loading..."})});const $=()=>{r&&r({score:o,streak:h,totalProblems:R,correctAnswers:z,accuracy:Q})};return M.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col p-4 md:p-6 relative",children:[M.jsxs("header",{className:"flex justify-between items-start gap-4 mb-6 md:mb-8",children:[M.jsx("div",{className:"flex-1",children:M.jsx(tE,{score:o,streak:u})}),M.jsx("button",{onClick:$,className:`
            bg-sonic-red/80 hover:bg-sonic-red
            text-white font-game text-sm md:text-base
            px-4 py-2 rounded-lg
            shadow-lg
            transform transition-all duration-200
            hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-red-300
          `,"aria-label":"Exit game and return to start screen",children:"Exit"})]}),M.jsxs("main",{className:"flex-1 flex flex-col items-center justify-center gap-6 md:gap-8",children:[M.jsx("div",{className:"w-full transform transition-all duration-300 ease-out",children:M.jsx(Zv,{num1:s.num1,num2:s.num2,operator:s.operator})}),M.jsx("div",{className:"w-full",children:M.jsx(eE,{options:s.options,onAnswer:_,disabled:m})})]}),M.jsx("footer",{className:"h-8 md:h-12","aria-hidden":"true"}),m&&M.jsx(nE,{isCorrect:g})]})}rE.propTypes={onGameEnd:we.func.isRequired,updateProgress:we.func,initialProgress:we.shape({score:we.number,streak:we.number,totalProblems:we.number,correctAnswers:we.number})};function iE({onStart:r,progress:e=null}){const t=e&&(e.score>0||e.streak>0);return M.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[M.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[M.jsx("div",{className:"absolute top-10 left-10 text-4xl animate-bounce opacity-50",children:"*"}),M.jsx("div",{className:"absolute top-20 right-16 text-3xl animate-pulse opacity-40",children:"*"}),M.jsx("div",{className:"absolute bottom-32 left-20 text-5xl animate-bounce opacity-30",children:"*"}),M.jsx("div",{className:"absolute bottom-20 right-10 text-4xl animate-pulse opacity-50",children:"*"})]}),M.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[M.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-4 animate-pulse-scale`,children:"Sonic Math Trainer!"}),M.jsxs("div",{className:"flex justify-center gap-2 text-4xl md:text-5xl mb-6",children:[M.jsx("span",{role:"img","aria-label":"hedgehog",children:"🦔"}),M.jsx("span",{role:"img","aria-label":"dash",children:"💨"})]}),M.jsx("p",{className:"text-xl md:text-2xl font-game text-white/90 mb-8 drop-shadow-md",children:"Time to boost your math power!"}),t&&M.jsxs("div",{className:`bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm
                       transform transition-all duration-300 hover:scale-105`,role:"status","aria-label":`Your best: ${e.score} points, ${e.streak} streak`,children:[M.jsx("p",{className:"text-lg md:text-xl font-game text-sonic-gold mb-2",children:"Your Best:"}),M.jsxs("div",{className:"flex justify-center items-center gap-6 flex-wrap",children:[M.jsxs("div",{className:"text-center",children:[M.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.score}),M.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"points"})]}),M.jsx("div",{className:"w-px h-12 bg-white/30","aria-hidden":"true"}),M.jsxs("div",{className:"text-center",children:[M.jsxs("div",{className:"flex items-center justify-center gap-2",children:[M.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.streak}),M.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]}),M.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"streak"})]})]}),e.totalProblems>0&&M.jsxs("p",{className:"text-base text-white/80 font-game mt-4",children:["Accuracy: ",Math.round(e.correctAnswers/e.totalProblems*100),"%"]})]}),M.jsx("button",{onClick:r,className:`
            bg-gradient-to-r from-sonic-gold to-yellow-400
            text-blue-900 font-game text-2xl md:text-3xl
            px-12 py-6 rounded-2xl
            shadow-lg shadow-yellow-500/50
            transform transition-all duration-300
            hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/60
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-yellow-300
            animate-pulse-scale
          `,"aria-label":"Start the math game",children:"Start Game!"}),M.jsxs("p",{className:"text-lg md:text-xl font-game text-white/70 mt-8",children:[M.jsx("span",{role:"img","aria-label":"star",children:"⭐"})," Tap the correct answer to score points!"," ",M.jsx("span",{role:"img","aria-label":"star",children:"⭐"})]})]}),M.jsx("div",{className:"absolute bottom-4 text-center text-white/40 font-game text-sm",children:"Math is fun!"})]})}iE.propTypes={onStart:we.func.isRequired,progress:we.shape({score:we.number,streak:we.number,totalProblems:we.number,correctAnswers:we.number})};function sE({sessionStats:r,onPlayAgain:e,onExit:t}){const{score:s=0,streak:o=0,totalProblems:u=0,correctAnswers:h=0,accuracy:m=0}=r||{},_=m>=80?{text:"Sonic Speed! Amazing!",emoji:"🦔💨",color:"text-green-400"}:m>=50?{text:"Great effort! Keep practicing!",emoji:"⭐",color:"text-sonic-gold"}:{text:"You're learning! Try again!",emoji:"💪",color:"text-orange-400"};return M.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[M.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[M.jsx("div",{className:"absolute top-10 left-8 text-3xl animate-bounce opacity-60",children:"*"}),M.jsx("div",{className:"absolute top-16 right-12 text-4xl animate-pulse opacity-50",children:"*"}),M.jsx("div",{className:"absolute top-32 left-20 text-2xl animate-bounce opacity-40",children:"*"}),M.jsx("div",{className:"absolute bottom-40 right-20 text-4xl animate-pulse opacity-50",children:"*"}),M.jsx("div",{className:"absolute bottom-24 left-12 text-3xl animate-bounce opacity-60",children:"*"}),M.jsx("div",{className:"absolute top-48 right-8 text-2xl animate-pulse opacity-40",children:"*"})]}),M.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[M.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-2 animate-pulse-scale`,children:"Great Job!"}),M.jsx("div",{className:"text-5xl md:text-6xl mb-6",children:M.jsx("span",{role:"img","aria-label":"party",children:"🎉"})}),M.jsxs("p",{className:`text-xl md:text-2xl font-game ${_.color} mb-6 drop-shadow-md`,children:[_.text," ",M.jsx("span",{role:"img","aria-label":"performance icon",children:_.emoji})]}),M.jsx("div",{className:"bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm",role:"status","aria-label":`Session stats: ${s} points, ${o} streak, ${m}% accuracy`,children:M.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[M.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[M.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Points"}),M.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:s})]}),M.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[M.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Best Streak"}),M.jsxs("div",{className:"flex items-center justify-center gap-2",children:[M.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:o}),o>=3&&M.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]})]}),M.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[M.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Accuracy"}),M.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[Math.round(m),"%"]})]}),M.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[M.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Problems"}),M.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[h,"/",u]})]})]})}),M.jsxs("div",{className:"flex flex-col gap-4",children:[M.jsx("button",{onClick:e,className:`
              bg-gradient-to-r from-sonic-gold to-yellow-400
              text-blue-900 font-game text-2xl md:text-3xl
              px-10 py-5 rounded-2xl w-full
              shadow-lg shadow-yellow-500/50
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/60
              active:scale-95
              focus:outline-none focus:ring-4 focus:ring-yellow-300
              animate-pulse-scale
            `,"aria-label":"Play the game again",children:"Play Again!"}),M.jsx("button",{onClick:t,className:`
              bg-white/20 hover:bg-white/30
              text-white font-game text-lg md:text-xl
              px-8 py-4 rounded-xl w-full
              shadow-md
              transform transition-all duration-300
              hover:scale-105
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-white/50
            `,"aria-label":"Go back to start screen",children:"Back to Start"})]}),M.jsxs("p",{className:"text-lg font-game text-white/60 mt-8",children:["Keep practicing to become a Math Master!"," ",M.jsx("span",{role:"img","aria-label":"trophy",children:"🏆"})]})]})]})}sE.propTypes={sessionStats:we.shape({score:we.number,streak:we.number,totalProblems:we.number,correctAnswers:we.number,accuracy:we.number}).isRequired,onPlayAgain:we.func.isRequired,onExit:we.func.isRequired};const oE=ee.createContext(null);function aE(){const r=ee.useContext(oE);if(r===null)throw new Error("useProfile must be used within a <ProfileProvider>");return r}const lE="math-trainer-profiles",DP=4,bP=4;function Nf(){try{const r=localStorage.getItem(lE);if(r===null)return[];const e=JSON.parse(r);return Array.isArray(e)?e:(console.warn("[profiles] Corrupt data in localStorage — expected array, got",typeof e),[])}catch(r){return console.warn("[profiles] Failed to parse localStorage data:",r.message),[]}}function uE(r){localStorage.setItem(lE,JSON.stringify(r))}function VP(r){const e=new Uint8Array(r);let t="";for(let s=0;s<e.length;s++)t+=e[s].toString(16).padStart(2,"0");return t}function Ay(){return Nf()}function Ry(r,e){const t=Nf(),s=t.findIndex(m=>m.id===r);if(s===-1)throw new Error(`Profile not found: ${r}`);const{id:o,createdAt:u,...h}=e;return t[s]={...t[s],...h,lastActiveAt:new Date().toISOString()},uE(t),t[s]}function OP(r){const e=Nf(),t=e.filter(s=>s.id!==r);return t.length===e.length?!1:(uE(t),!0)}async function LP(r){if(typeof r!="string"||!/^\d{4}$/.test(r))throw new Error(`PIN must be exactly ${bP} digits`);const t=new TextEncoder().encode(r),s=await crypto.subtle.digest("SHA-256",t);return VP(s)}async function MP(r,e){return await LP(r)===e}const ro="math-trainer-active-profile",FP=3,UP=30,Ut=Object.freeze({SET_PROFILES:"SET_PROFILES",SET_ACTIVE:"SET_ACTIVE",CLEAR_ACTIVE:"CLEAR_ACTIVE",ADD_PROFILE:"ADD_PROFILE",UPDATE_PROFILE:"UPDATE_PROFILE",DELETE_PROFILE:"DELETE_PROFILE",SET_LOADING:"SET_LOADING",SET_ERROR:"SET_ERROR"}),jP={profiles:[],activeProfile:null,isLoading:!0,error:null};function zP(r,e){var t,s;switch(e.type){case Ut.SET_PROFILES:return{...r,profiles:e.payload,isLoading:!1};case Ut.SET_ACTIVE:return{...r,activeProfile:e.payload,error:null};case Ut.CLEAR_ACTIVE:return{...r,activeProfile:null};case Ut.ADD_PROFILE:return{...r,profiles:[...r.profiles,e.payload]};case Ut.UPDATE_PROFILE:return{...r,profiles:r.profiles.map(o=>o.id===e.payload.id?e.payload:o),activeProfile:((t=r.activeProfile)==null?void 0:t.id)===e.payload.id?e.payload:r.activeProfile};case Ut.DELETE_PROFILE:{const o=r.profiles.filter(u=>u.id!==e.payload);return{...r,profiles:o,activeProfile:((s=r.activeProfile)==null?void 0:s.id)===e.payload?null:r.activeProfile}}case Ut.SET_LOADING:return{...r,isLoading:e.payload};case Ut.SET_ERROR:return{...r,error:e.payload};default:return r}}const Sa=4;function cE({profileName:r,onSubmit:e,onCancel:t,isVerifying:s=!1,error:o=null,attempts:u=0,maxAttempts:h=3,cooldownSeconds:m=30}){const[g,_]=ee.useState(""),[E,T]=ee.useState(!1),[R,z]=ee.useState(0),Q=ee.useRef(null),$=R>0;ee.useEffect(()=>{u>=h&&R===0&&z(m)},[u,h,m,R]),ee.useEffect(()=>{if(!(R<=0))return Q.current=setInterval(()=>{z(te=>te<=1?(clearInterval(Q.current),0):te-1)},1e3),()=>clearInterval(Q.current)},[R]),ee.useEffect(()=>{if(o){T(!0),_("");const te=setTimeout(()=>T(!1),500);return()=>clearTimeout(te)}},[o]);const B=ee.useCallback(te=>{s||$||_(ge=>{if(ge.length>=Sa)return ge;const Ee=ge+te;return Ee.length===Sa&&setTimeout(()=>e(Ee),0),Ee})},[s,$,e]),ae=ee.useCallback(()=>{s||$||_(te=>te.slice(0,-1))},[s,$]);ee.useEffect(()=>{function te(ge){ge.key>="0"&&ge.key<="9"?B(ge.key):ge.key==="Backspace"?ae():ge.key==="Escape"&&t()}return window.addEventListener("keydown",te),()=>window.removeEventListener("keydown",te)},[B,ae,t]);const ue=[["1","2","3"],["4","5","6"],["7","8","9"],["backspace","0","cancel"]];return M.jsx("div",{className:`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm
                 flex items-center justify-center p-4`,role:"dialog","aria-label":`Enter PIN for ${r}`,"aria-modal":"true",children:M.jsxs("div",{className:`bg-gradient-to-b from-sonic-blue to-blue-900
                      rounded-3xl p-6 w-full max-w-xs shadow-2xl`,children:[M.jsx("h2",{className:"text-xl font-game text-white text-center mb-1 drop-shadow-md",children:"Enter PIN"}),M.jsx("p",{className:"text-sm font-game text-white/70 text-center mb-5",dir:"auto",children:r}),M.jsx("div",{className:`flex justify-center gap-3 mb-5 ${E?"animate-shake":""}`,role:"status","aria-live":"polite","aria-label":`${g.length} of ${Sa} digits entered`,children:Array.from({length:Sa}).map((te,ge)=>M.jsx("div",{className:`
                w-5 h-5 rounded-full border-2 transition-all duration-150
                motion-reduce:transition-none
                ${ge<g.length?"bg-sonic-gold border-sonic-gold shadow-md shadow-yellow-500/30 scale-110":"border-white/50 bg-transparent"}
                ${E&&ge<g.length?"border-red-400 bg-red-400":""}
              `,"aria-hidden":"true"},ge))}),o&&M.jsx("p",{className:"text-red-300 text-sm font-game text-center mb-3",role:"alert",children:o}),$&&M.jsxs("p",{className:"text-red-300 text-sm font-game text-center mb-3",role:"alert",children:["Too many tries! Wait ",R,"s"]}),M.jsx("div",{className:"grid grid-cols-3 gap-2 max-w-[280px] mx-auto",children:ue.flat().map(te=>te==="backspace"?M.jsx("button",{onClick:ae,disabled:s||$||g.length===0,className:`aspect-square rounded-xl bg-white/10 hover:bg-white/20
                             text-white font-game text-xl
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90 disabled:opacity-30
                             focus:outline-none focus:ring-2 focus:ring-sonic-gold`,"aria-label":"Delete last digit",children:"⌫"},te):te==="cancel"?M.jsx("button",{onClick:t,className:`aspect-square rounded-xl bg-sonic-red/60 hover:bg-sonic-red/80
                             text-white font-game text-sm
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90
                             focus:outline-none focus:ring-2 focus:ring-red-300`,"aria-label":"Cancel PIN entry",children:"Back"},te):M.jsx("button",{onClick:()=>B(te),disabled:s||$||g.length>=Sa,className:`aspect-square rounded-xl bg-white/15 hover:bg-white/25
                           text-white font-game text-2xl
                           flex items-center justify-center
                           transition-all duration-150
                           active:scale-90 disabled:opacity-30
                           focus:outline-none focus:ring-2 focus:ring-sonic-gold`,"aria-label":`Digit ${te}`,children:te},te))}),s&&M.jsx("p",{className:"text-white/70 text-sm font-game text-center mt-4 animate-pulse",children:"Checking..."})]})})}cE.propTypes={profileName:we.string.isRequired,onSubmit:we.func.isRequired,onCancel:we.func.isRequired,isVerifying:we.bool,error:we.string,attempts:we.number,maxAttempts:we.number,cooldownSeconds:we.number};const BP={sonic:"🦔",spiderman:"🕷"},$P={sonic:"border-sonic-blue",spiderman:"border-sonic-red"};function hE({onCreateProfile:r,onProfileActivated:e}){const{profiles:t,selectProfile:s,maxProfiles:o}=aE(),[u,h]=ee.useState(null),[m,g]=ee.useState(!1),[_,E]=ee.useState(null),[T,R]=ee.useState(0),z=ee.useCallback(B=>{h(B),E(null),R(0)},[]),Q=ee.useCallback(async B=>{if(u){g(!0),E(null);try{await s(u,B)?(h(null),e&&e()):(R(ue=>ue+1),E("Oops! Wrong PIN. Try again."),navigator.vibrate&&navigator.vibrate(100))}catch{E("Something went wrong. Try again.")}finally{g(!1)}}},[u,s,e]),$=ee.useCallback(()=>{h(null),E(null),R(0)},[]);return t.length===0?M.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                      flex flex-col items-center justify-center p-6`,children:[M.jsx("h1",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-4 text-center",children:"Welcome to Math Trainer!"}),M.jsx("p",{className:"text-lg font-game text-white/80 mb-8 text-center",children:"Create your first hero to start playing!"}),M.jsx("button",{onClick:r,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                     text-blue-900 font-game text-xl
                     px-10 py-5 rounded-2xl
                     shadow-lg shadow-yellow-500/50
                     transform transition-all duration-300
                     hover:scale-110 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Create your first hero profile",children:"+ Create Hero"})]}):M.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                    flex flex-col items-center p-6`,children:[M.jsx("h1",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-8 mt-8 text-center",children:"Who's playing?"}),M.jsxs("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md",children:[t.map(B=>M.jsxs("button",{onClick:()=>z(B),className:`
              bg-black/20 backdrop-blur-sm rounded-2xl p-4
              border-2 ${$P[B.theme]||"border-white/30"}
              flex flex-col items-center gap-2
              transform transition-all duration-200
              hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-sonic-gold
            `,"aria-label":`Select ${B.nickname}, Level ${B.currentLevel}`,children:[M.jsx("span",{className:"text-4xl",role:"img","aria-hidden":"true",children:BP[B.theme]||B.nickname.charAt(0).toUpperCase()}),M.jsx("span",{className:"text-lg font-game text-white truncate w-full text-center",dir:"auto",children:B.nickname}),M.jsxs("span",{className:"text-xs font-game text-sonic-gold bg-sonic-gold/20 px-2 py-0.5 rounded-full",children:["Level ",B.currentLevel]})]},B.id)),t.length<o&&M.jsxs("button",{onClick:r,className:`bg-transparent rounded-2xl p-4
                       border-2 border-dashed border-white/30
                       flex flex-col items-center justify-center gap-2
                       transform transition-all duration-200
                       hover:scale-105 hover:border-sonic-gold/50 active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-sonic-gold
                       min-h-[140px]`,"aria-label":"Create a new hero profile",children:[M.jsx("span",{className:"text-4xl text-white/50",children:"+"}),M.jsx("span",{className:"text-sm font-game text-white/50",children:"Add Hero"})]})]}),u&&M.jsx(cE,{profileName:u.nickname,onSubmit:Q,onCancel:$,isVerifying:m,error:_,attempts:T,maxAttempts:FP,cooldownSeconds:UP})]})}hE.propTypes={onCreateProfile:we.func.isRequired,onProfileActivated:we.func};we.number.isRequired;we.func.isRequired,we.func.isRequired;function HP(){const{activeProfile:r,isLoading:e,clearActiveProfile:t}=aE(),{user:s,loading:o,error:u}=QR(),{progress:h,updateProgress:m,forceSave:g,loading:_}=ZR((r==null?void 0:r.firebaseUid)??(s==null?void 0:s.uid)),[E,T]=ee.useState("start"),[R,z]=ee.useState(null),Q=e||o||_,$=ee.useCallback(Ee=>{if(Ee){const Ce=Ee.accuracy??(Ee.totalProblems>0?Math.round(Ee.correctAnswers/Ee.totalProblems*100):0);z({score:Ee.score??0,streak:Ee.streak??0,totalProblems:Ee.totalProblems??0,correctAnswers:Ee.correctAnswers??0,accuracy:Ce}),T("result")}else T("start")},[]),B=ee.useCallback(()=>{z(null),T("game")},[]),ae=ee.useCallback(()=>{z(null),T("game")},[]),ue=ee.useCallback(()=>{g(),z(null),T("start")},[g]),te=ee.useCallback(()=>{g(),t(),z(null),T("start")},[g,t]),ge=ee.useCallback(()=>{console.info("[App] Create profile flow not yet implemented (see #20)")},[]);return Q?M.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:M.jsxs("div",{className:"animate-pulse",children:[M.jsx("h1",{className:"text-4xl md:text-6xl font-game text-sonic-gold drop-shadow-lg text-center",children:"Loading..."}),M.jsx("p",{className:"text-xl text-white mt-4 font-game text-center",children:e?"Loading heroes...":o?"Connecting to Sonic Speed!":"Loading your progress..."})]})}):r?u?M.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:M.jsxs("div",{className:"text-center",children:[M.jsx("h1",{className:"text-4xl md:text-6xl font-game text-red-500 drop-shadow-lg",children:"Oops!"}),M.jsx("p",{className:"text-xl text-white mt-4 font-game",children:"Could not connect to save your progress"}),M.jsx("p",{className:"text-sm text-white mt-2 opacity-75",children:u.message}),M.jsx("button",{onClick:()=>T("game"),className:`mt-6 bg-sonic-gold text-sonic-blue font-game px-8 py-4 rounded-full
                       hover:bg-yellow-400 transform hover:scale-105 transition-all
                       shadow-lg active:scale-95 text-xl`,children:"Play Anyway!"})]})}):M.jsxs(M.Fragment,{children:[E==="start"&&M.jsx(iE,{onStart:B,progress:h,onSwitchProfile:te,activeProfile:r}),E==="game"&&M.jsx(rE,{onGameEnd:$,updateProgress:m,initialProgress:h}),E==="result"&&R&&M.jsx(sE,{sessionStats:R,onPlayAgain:ae,onExit:ue})]}):M.jsx(hE,{onCreateProfile:ge})}function dE({children:r}){const[e,t]=ee.useReducer(zP,jP);ee.useEffect(()=>{const E=Ay();t({type:Ut.SET_PROFILES,payload:E});const T=sessionStorage.getItem(ro);if(T){const R=E.find(z=>z.id===T)||null;R?t({type:Ut.SET_ACTIVE,payload:R}):sessionStorage.removeItem(ro)}},[]);const s=ee.useCallback(async(E,T)=>{if(!await MP(T,E.pinHash))return!1;const z=Ry(E.id,{});return t({type:Ut.SET_ACTIVE,payload:z}),sessionStorage.setItem(ro,E.id),!0},[]),o=ee.useCallback(()=>{t({type:Ut.CLEAR_ACTIVE}),sessionStorage.removeItem(ro)},[]),u=ee.useCallback(()=>{const E=Ay();t({type:Ut.SET_PROFILES,payload:E})},[]),h=ee.useCallback(E=>{t({type:Ut.ADD_PROFILE,payload:E})},[]),m=ee.useCallback((E,T)=>{const R=Ry(E,T);return t({type:Ut.UPDATE_PROFILE,payload:R}),R},[]),g=ee.useCallback(E=>{const T=OP(E);return T&&(t({type:Ut.DELETE_PROFILE,payload:E}),sessionStorage.getItem(ro)===E&&sessionStorage.removeItem(ro)),T},[]),_=ee.useMemo(()=>({profiles:e.profiles,activeProfile:e.activeProfile,isLoading:e.isLoading,error:e.error,maxProfiles:DP,selectProfile:s,clearActiveProfile:o,refreshProfiles:u,addProfile:h,updateProfile:m,deleteProfile:g}),[e.profiles,e.activeProfile,e.isLoading,e.error,s,o,u,h,m,g]);return M.jsx(oE.Provider,{value:_,children:r})}dE.propTypes={children:we.node.isRequired};kw.createRoot(document.getElementById("root")).render(M.jsx(Tw.StrictMode,{children:M.jsx(dE,{children:M.jsx(HP,{})})}));
