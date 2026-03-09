(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Qd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jh={exports:{}},xa={},Xh={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function Yw(){if(Jm)return xe;Jm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,$={};function B(V,W,Ae){this.props=V,this.context=W,this.refs=$,this.updater=Ae||z}B.prototype.isReactComponent={},B.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ae(){}ae.prototype=B.prototype;function ue(V,W,Ae){this.props=V,this.context=W,this.refs=$,this.updater=Ae||z}var ne=ue.prototype=new ae;ne.constructor=ue,q(ne,B.prototype),ne.isPureReactComponent=!0;var pe=Array.isArray,Ce=Object.prototype.hasOwnProperty,Te={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(V,W,Ae){var Re,ke={},Ne=null,ze=null;if(W!=null)for(Re in W.ref!==void 0&&(ze=W.ref),W.key!==void 0&&(Ne=""+W.key),W)Ce.call(W,Re)&&!k.hasOwnProperty(Re)&&(ke[Re]=W[Re]);var Me=arguments.length-2;if(Me===1)ke.children=Ae;else if(1<Me){for(var He=Array(Me),$t=0;$t<Me;$t++)He[$t]=arguments[$t+2];ke.children=He}if(V&&V.defaultProps)for(Re in Me=V.defaultProps,Me)ke[Re]===void 0&&(ke[Re]=Me[Re]);return{$$typeof:r,type:V,key:Ne,ref:ze,props:ke,_owner:Te.current}}function x(V,W){return{$$typeof:r,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function b(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ae){return W[Ae]})}var D=/\/+/g;function I(V,W){return typeof V=="object"&&V!==null&&V.key!=null?b(""+V.key):W.toString(36)}function Pe(V,W,Ae,Re,ke){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var ze=!1;if(V===null)ze=!0;else switch(Ne){case"string":case"number":ze=!0;break;case"object":switch(V.$$typeof){case r:case e:ze=!0}}if(ze)return ze=V,ke=ke(ze),V=Re===""?"."+I(ze,0):Re,pe(ke)?(Ae="",V!=null&&(Ae=V.replace(D,"$&/")+"/"),Pe(ke,W,Ae,"",function($t){return $t})):ke!=null&&(N(ke)&&(ke=x(ke,Ae+(!ke.key||ze&&ze.key===ke.key?"":(""+ke.key).replace(D,"$&/")+"/")+V)),W.push(ke)),1;if(ze=0,Re=Re===""?".":Re+":",pe(V))for(var Me=0;Me<V.length;Me++){Ne=V[Me];var He=Re+I(Ne,Me);ze+=Pe(Ne,W,Ae,He,ke)}else if(He=R(V),typeof He=="function")for(V=He.call(V),Me=0;!(Ne=V.next()).done;)Ne=Ne.value,He=Re+I(Ne,Me++),ze+=Pe(Ne,W,Ae,He,ke);else if(Ne==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ze}function rt(V,W,Ae){if(V==null)return V;var Re=[],ke=0;return Pe(V,Re,"","",function(Ne){return W.call(Ae,Ne,ke++)}),Re}function vt(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(Ae){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ae)},function(Ae){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ae)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var We={current:null},te={transition:null},fe={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:te,ReactCurrentOwner:Te};function se(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:rt,forEach:function(V,W,Ae){rt(V,function(){W.apply(this,arguments)},Ae)},count:function(V){var W=0;return rt(V,function(){W++}),W},toArray:function(V){return rt(V,function(W){return W})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},xe.Component=B,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=ue,xe.StrictMode=s,xe.Suspense=g,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,xe.act=se,xe.cloneElement=function(V,W,Ae){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=q({},V.props),ke=V.key,Ne=V.ref,ze=V._owner;if(W!=null){if(W.ref!==void 0&&(Ne=W.ref,ze=Te.current),W.key!==void 0&&(ke=""+W.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(He in W)Ce.call(W,He)&&!k.hasOwnProperty(He)&&(Re[He]=W[He]===void 0&&Me!==void 0?Me[He]:W[He])}var He=arguments.length-2;if(He===1)Re.children=Ae;else if(1<He){Me=Array(He);for(var $t=0;$t<He;$t++)Me[$t]=arguments[$t+2];Re.children=Me}return{$$typeof:r,type:V.type,key:ke,ref:Ne,props:Re,_owner:ze}},xe.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},xe.createElement=A,xe.createFactory=function(V){var W=A.bind(null,V);return W.type=V,W},xe.createRef=function(){return{current:null}},xe.forwardRef=function(V){return{$$typeof:m,render:V}},xe.isValidElement=N,xe.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:vt}},xe.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},xe.startTransition=function(V){var W=te.transition;te.transition={};try{V()}finally{te.transition=W}},xe.unstable_act=se,xe.useCallback=function(V,W){return We.current.useCallback(V,W)},xe.useContext=function(V){return We.current.useContext(V)},xe.useDebugValue=function(){},xe.useDeferredValue=function(V){return We.current.useDeferredValue(V)},xe.useEffect=function(V,W){return We.current.useEffect(V,W)},xe.useId=function(){return We.current.useId()},xe.useImperativeHandle=function(V,W,Ae){return We.current.useImperativeHandle(V,W,Ae)},xe.useInsertionEffect=function(V,W){return We.current.useInsertionEffect(V,W)},xe.useLayoutEffect=function(V,W){return We.current.useLayoutEffect(V,W)},xe.useMemo=function(V,W){return We.current.useMemo(V,W)},xe.useReducer=function(V,W,Ae){return We.current.useReducer(V,W,Ae)},xe.useRef=function(V){return We.current.useRef(V)},xe.useState=function(V){return We.current.useState(V)},xe.useSyncExternalStore=function(V,W,Ae){return We.current.useSyncExternalStore(V,W,Ae)},xe.useTransition=function(){return We.current.useTransition()},xe.version="18.3.1",xe}var Xm;function Yd(){return Xm||(Xm=1,Xh.exports=Yw()),Xh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function Jw(){if(Zm)return xa;Zm=1;var r=Yd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,T={},R=null,z=null;_!==void 0&&(R=""+_),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(z=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(T[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:m,key:R,ref:z,props:T,_owner:o.current}}return xa.Fragment=t,xa.jsx=h,xa.jsxs=h,xa}var eg;function Xw(){return eg||(eg=1,Jh.exports=Jw()),Jh.exports}var C=Xw(),K=Yd();const Zw=Qd(K);var Au={},Zh={exports:{}},Jt={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function e0(){return tg||(tg=1,(function(r){function e(te,fe){var se=te.length;te.push(fe);e:for(;0<se;){var V=se-1>>>1,W=te[V];if(0<o(W,fe))te[V]=fe,te[se]=W,se=V;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var fe=te[0],se=te.pop();if(se!==fe){te[0]=se;e:for(var V=0,W=te.length,Ae=W>>>1;V<Ae;){var Re=2*(V+1)-1,ke=te[Re],Ne=Re+1,ze=te[Ne];if(0>o(ke,se))Ne<W&&0>o(ze,ke)?(te[V]=ze,te[Ne]=se,V=Ne):(te[V]=ke,te[Re]=se,V=Re);else if(Ne<W&&0>o(ze,se))te[V]=ze,te[Ne]=se,V=Ne;else break e}}return fe}function o(te,fe){var se=te.sortIndex-fe.sortIndex;return se!==0?se:te.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,T=null,R=3,z=!1,q=!1,$=!1,B=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(te){for(var fe=t(_);fe!==null;){if(fe.callback===null)s(_);else if(fe.startTime<=te)s(_),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(_)}}function pe(te){if($=!1,ne(te),!q)if(t(g)!==null)q=!0,vt(Ce);else{var fe=t(_);fe!==null&&We(pe,fe.startTime-te)}}function Ce(te,fe){q=!1,$&&($=!1,ae(A),A=-1),z=!0;var se=R;try{for(ne(fe),T=t(g);T!==null&&(!(T.expirationTime>fe)||te&&!b());){var V=T.callback;if(typeof V=="function"){T.callback=null,R=T.priorityLevel;var W=V(T.expirationTime<=fe);fe=r.unstable_now(),typeof W=="function"?T.callback=W:T===t(g)&&s(g),ne(fe)}else s(g);T=t(g)}if(T!==null)var Ae=!0;else{var Re=t(_);Re!==null&&We(pe,Re.startTime-fe),Ae=!1}return Ae}finally{T=null,R=se,z=!1}}var Te=!1,k=null,A=-1,x=5,N=-1;function b(){return!(r.unstable_now()-N<x)}function D(){if(k!==null){var te=r.unstable_now();N=te;var fe=!0;try{fe=k(!0,te)}finally{fe?I():(Te=!1,k=null)}}else Te=!1}var I;if(typeof ue=="function")I=function(){ue(D)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,rt=Pe.port2;Pe.port1.onmessage=D,I=function(){rt.postMessage(null)}}else I=function(){B(D,0)};function vt(te){k=te,Te||(Te=!0,I())}function We(te,fe){A=B(function(){te(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){q||z||(q=!0,vt(Ce))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(te){switch(R){case 1:case 2:case 3:var fe=3;break;default:fe=R}var se=R;R=fe;try{return te()}finally{R=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,fe){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var se=R;R=te;try{return fe()}finally{R=se}},r.unstable_scheduleCallback=function(te,fe,se){var V=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,te){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=se+W,te={id:w++,callback:fe,priorityLevel:te,startTime:se,expirationTime:W,sortIndex:-1},se>V?(te.sortIndex=se,e(_,te),t(g)===null&&te===t(_)&&($?(ae(A),A=-1):$=!0,We(pe,se-V))):(te.sortIndex=W,e(g,te),q||z||(q=!0,vt(Ce))),te},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(te){var fe=R;return function(){var se=R;R=fe;try{return te.apply(this,arguments)}finally{R=se}}}})(td)),td}var ng;function t0(){return ng||(ng=1,ed.exports=e0()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function n0(){if(rg)return Jt;rg=1;var r=Yd(),e=t0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function R(n){return g.call(T,n)?!0:g.call(w,n)?!1:_.test(n)?T[n]=!0:(w[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ae,ue);B[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ae,ue);B[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ae,ue);B[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function ne(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(q(i,a,d,c)&&(a=null),c||d===null?R(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var pe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Te=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),b=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),rt=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),te=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var Ae=!1;function Re(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function ke(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Te:return"Portal";case x:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case Pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case b:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case D:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rt:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case vt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function ze(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $t(n){var i=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ws(n){n._valueTracker||(n._valueTracker=$t(n))}function Oo(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Mr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ts(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function cl(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Is(n,i){i=i.checked,i!=null&&ne(n,"checked",i,!1)}function bi(n,i){Is(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ct(n,i.type,a):i.hasOwnProperty("defaultValue")&&ct(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Vo(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ct(n,i,a){(i!=="number"||Mr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ot=Array.isArray;function vn(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Lo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Mo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ot(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function hl(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Fr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Fo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ss(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Fo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ur,dl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ur.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Di(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fl=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(n){fl.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),jr[i]=jr[n]})});function zr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||jr.hasOwnProperty(n)&&jr[n]?(""+i).trim():i+"px"}function As(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=zr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Uo=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function En(n,i){if(i){if(Uo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Rs(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Br=null;function Cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lr=null,ur=null,it=null;function jo(n){if(n=fa(n)){if(typeof lr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=jl(i),lr(n.stateNode,n.type,i))}}function $r(n){ur?it?it.push(n):it=[n]:ur=n}function Hr(){if(ur){var n=ur,i=it;if(it=ur=null,jo(n),i)for(n=0;n<i.length;n++)jo(i[n])}}function pl(n,i){return n(i)}function ml(){}var On=!1;function gl(n,i,a){if(On)return n(i,a);On=!0;try{return pl(n,i,a)}finally{On=!1,(ur!==null||it!==null)&&(ml(),Hr())}}function Oi(n,i){var a=n.stateNode;if(a===null)return null;var c=jl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qr=!1;if(m)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){qr=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{qr=!1}function yl(n,i,a,c,d,f,v,S,P){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(Q){this.onError(Q)}}var cr=!1,Vn=null,xs=!1,un=null,_l={onError:function(n){cr=!0,Vn=n}};function vl(n,i,a,c,d,f,v,S,P){cr=!1,Vn=null,yl.apply(_l,arguments)}function zo(n,i,a,c,d,f,v,S,P){if(vl.apply(this,arguments),cr){if(cr){var U=Vn;cr=!1,Vn=null}else throw Error(t(198));xs||(xs=!0,un=U)}}function wn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Bo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function El(n){if(wn(n)!==n)throw Error(t(188))}function wl(n){var i=n.alternate;if(!i){if(i=wn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return El(d),n;if(f===c)return El(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=f;break}if(S===c){v=!0,c=d,a=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===a){v=!0,a=f,c=d;break}if(S===c){v=!0,c=f,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Tl(n){return n=wl(n),n!==null?Vi(n):null}function Vi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Vi(n);if(i!==null)return i;n=n.sibling}return null}var $o=e.unstable_scheduleCallback,Ps=e.unstable_cancelCallback,Li=e.unstable_shouldYield,hr=e.unstable_requestPaint,Ke=e.unstable_now,xc=e.unstable_getCurrentPriorityLevel,ks=e.unstable_ImmediatePriority,Ho=e.unstable_UserBlockingPriority,Mi=e.unstable_NormalPriority,qo=e.unstable_LowPriority,Ns=e.unstable_IdlePriority,Fi=null,Zt=null;function Il(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Fi,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Ui,Ln=Math.log,cn=Math.LN2;function Ui(n){return n>>>=0,n===0?32:31-(Ln(n)/cn|0)|0}var Mn=64,Gr=4194304;function je(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=je(S):(f&=v,f!==0&&(c=je(f)))}else v=a&~d,v!==0?c=je(v):f!==0&&(c=je(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-en(i),d=1<<a,c|=n[a],i&=~d;return c}function ji(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zi(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-en(f),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=ji(S,i)):P<=i&&(n.expiredLanes|=S),f&=~S}}function Wo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Go(){var n=Mn;return Mn<<=1,(Mn&4194240)===0&&(Mn=64),n}function Ko(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Bi(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-en(i),n[i]=a}function Pc(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-en(a),f=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Qo(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-en(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ve=0;function Fn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yo,bs,Jo,Xo,Zo,Un=!1,Ds=[],jn=null,zn=null,Rt=null,$i=new Map,fr=new Map,tn=[],Sl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kr(n,i){switch(n){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":$i.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(i.pointerId)}}function Tn(n,i,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=fa(i),i!==null&&bs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Al(n,i,a,c,d){switch(i){case"focusin":return jn=Tn(jn,n,i,a,c,d),!0;case"dragenter":return zn=Tn(zn,n,i,a,c,d),!0;case"mouseover":return Rt=Tn(Rt,n,i,a,c,d),!0;case"pointerover":var f=d.pointerId;return $i.set(f,Tn($i.get(f)||null,n,i,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,fr.set(f,Tn(fr.get(f)||null,n,i,a,c,d)),!0}return!1}function Os(n){var i=Gi(n.target);if(i!==null){var a=wn(i);if(a!==null){if(i=a.tag,i===13){if(i=Bo(a),i!==null){n.blockedOn=i,Zo(n.priority,function(){Jo(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Vs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Br=c,a.target.dispatchEvent(c),Br=null}else return i=fa(a),i!==null&&bs(i),n.blockedOn=a,!1;i.shift()}return!0}function Rl(n,i,a){qe(n)&&a.delete(i)}function kc(){Un=!1,jn!==null&&qe(jn)&&(jn=null),zn!==null&&qe(zn)&&(zn=null),Rt!==null&&qe(Rt)&&(Rt=null),$i.forEach(Rl),fr.forEach(Rl)}function Qr(n,i){n.blockedOn===i&&(n.blockedOn=null,Un||(Un=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kc)))}function Yr(n){function i(d){return Qr(d,n)}if(0<Ds.length){Qr(Ds[0],n);for(var a=1;a<Ds.length;a++){var c=Ds[a];c.blockedOn===n&&(c.blockedOn=null)}}for(jn!==null&&Qr(jn,n),zn!==null&&Qr(zn,n),Rt!==null&&Qr(Rt,n),$i.forEach(i),fr.forEach(i),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)Os(a),a.blockedOn===null&&tn.shift()}var pr=pe.ReactCurrentBatchConfig,mr=!0;function Bn(n,i,a,c){var d=Ve,f=pr.transition;pr.transition=null;try{Ve=1,ea(n,i,a,c)}finally{Ve=d,pr.transition=f}}function Cl(n,i,a,c){var d=Ve,f=pr.transition;pr.transition=null;try{Ve=4,ea(n,i,a,c)}finally{Ve=d,pr.transition=f}}function ea(n,i,a,c){if(mr){var d=Vs(n,i,a,c);if(d===null)zc(n,i,c,$n,a),Kr(n,c);else if(Al(d,n,i,a,c))c.stopPropagation();else if(Kr(n,c),i&4&&-1<Sl.indexOf(n)){for(;d!==null;){var f=fa(d);if(f!==null&&Yo(f),f=Vs(n,i,a,c),f===null&&zc(n,i,c,$n,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else zc(n,i,c,null,a)}}var $n=null;function Vs(n,i,a,c){if($n=null,n=Cs(c),n=Gi(n),n!==null)if(i=wn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Bo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return $n=n,null}function Ls(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xc()){case ks:return 1;case Ho:return 4;case Mi:case qo:return 16;case Ns:return 536870912;default:return 16}default:return 16}}var nn=null,Ms=null,gr=null;function xl(){if(gr)return gr;var n,i=Ms,a=i.length,c,d="value"in nn?nn.value:nn.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[f-c];c++);return gr=d.slice(n,1<c?1-c:void 0)}function Hi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function ta(){return!1}function Ot(n){function i(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Hn:ta,this.isPropagationStopped=ta,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),i}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=Ot(qn),Jr=se({},qn,{view:0,detail:0}),Fs=Ot(Jr),Us,js,rn,Wi=se({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ie,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Us=n.screenX-rn.screenX,js=n.screenY-rn.screenY):js=Us=0,rn=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:js}}),na=Ot(Wi),Pl=se({},Wi,{dataTransfer:0}),kl=Ot(Pl),zs=se({},Jr,{relatedTarget:0}),Ct=Ot(zs),Nl=se({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),bl=Ot(Nl),Xr=se({},qn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Ot(Xr),p=se({},qn,{data:0}),y=Ot(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ee(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j[n])?!!i[n]:!1}function Ie(){return ee}var at=se({},Jr,{key:function(n){if(n.key){var i=E[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Hi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ie,charCode:function(n){return n.type==="keypress"?Hi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$e=Ot(at),ht=se({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=Ot(ht),yr=se({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ie}),Wn=Ot(yr),Gn=se({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bs=Ot(Gn),ra=se({},Wi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),HE=Ot(ra),qE=[9,13,27,32],Nc=m&&"CompositionEvent"in window,ia=null;m&&"documentMode"in document&&(ia=document.documentMode);var WE=m&&"TextEvent"in window&&!ia,$f=m&&(!Nc||ia&&8<ia&&11>=ia),Hf=" ",qf=!1;function Wf(n,i){switch(n){case"keyup":return qE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function GE(n,i){switch(n){case"compositionend":return Gf(i);case"keypress":return i.which!==32?null:(qf=!0,Hf);case"textInput":return n=i.data,n===Hf&&qf?null:n;default:return null}}function KE(n,i){if($s)return n==="compositionend"||!Nc&&Wf(n,i)?(n=xl(),gr=Ms=nn=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $f&&i.locale!=="ko"?null:i.data;default:return null}}var QE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!QE[n.type]:i==="textarea"}function Qf(n,i,a,c){$r(c),i=Ml(i,"onChange"),0<i.length&&(a=new qi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var sa=null,oa=null;function YE(n){fp(n,0)}function Dl(n){var i=Ks(n);if(Oo(i))return n}function JE(n,i){if(n==="change")return i}var Yf=!1;if(m){var bc;if(m){var Dc="oninput"in document;if(!Dc){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Dc=typeof Jf.oninput=="function"}bc=Dc}else bc=!1;Yf=bc&&(!document.documentMode||9<document.documentMode)}function Xf(){sa&&(sa.detachEvent("onpropertychange",Zf),oa=sa=null)}function Zf(n){if(n.propertyName==="value"&&Dl(oa)){var i=[];Qf(i,oa,n,Cs(n)),gl(YE,i)}}function XE(n,i,a){n==="focusin"?(Xf(),sa=i,oa=a,sa.attachEvent("onpropertychange",Zf)):n==="focusout"&&Xf()}function ZE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dl(oa)}function ew(n,i){if(n==="click")return Dl(i)}function tw(n,i){if(n==="input"||n==="change")return Dl(i)}function nw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var In=typeof Object.is=="function"?Object.is:nw;function aa(n,i){if(In(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!In(n[d],i[d]))return!1}return!0}function ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function tp(n,i){var a=ep(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ep(a)}}function np(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?np(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function rp(){for(var n=window,i=Mr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Mr(n.document)}return i}function Oc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function rw(n){var i=rp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&np(a.ownerDocument.documentElement,a)){if(c!==null&&Oc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=tp(a,f);var v=tp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var iw=m&&"documentMode"in document&&11>=document.documentMode,Hs=null,Vc=null,la=null,Lc=!1;function ip(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lc||Hs==null||Hs!==Mr(c)||(c=Hs,"selectionStart"in c&&Oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=Ml(Vc,"onSelect"),0<c.length&&(i=new qi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Hs)))}function Ol(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qs={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},Mc={},sp={};m&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Vl(n){if(Mc[n])return Mc[n];if(!qs[n])return n;var i=qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in sp)return Mc[n]=i[a];return n}var op=Vl("animationend"),ap=Vl("animationiteration"),lp=Vl("animationstart"),up=Vl("transitionend"),cp=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(n,i){cp.set(n,i),u(i,[n])}for(var Fc=0;Fc<hp.length;Fc++){var Uc=hp[Fc],sw=Uc.toLowerCase(),ow=Uc[0].toUpperCase()+Uc.slice(1);Zr(sw,"on"+ow)}Zr(op,"onAnimationEnd"),Zr(ap,"onAnimationIteration"),Zr(lp,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(up,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function dp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,zo(c,i,void 0,n),n.currentTarget=null}function fp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,U=S.currentTarget;if(S=S.listener,P!==f&&d.isPropagationStopped())break e;dp(d,S,U),f=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,U=S.currentTarget,S=S.listener,P!==f&&d.isPropagationStopped())break e;dp(d,S,U),f=P}}}if(xs)throw n=un,xs=!1,un=null,n}function Qe(n,i){var a=i[Gc];a===void 0&&(a=i[Gc]=new Set);var c=n+"__bubble";a.has(c)||(pp(i,n,2,!1),a.add(c))}function jc(n,i,a){var c=0;i&&(c|=4),pp(a,n,c,i)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Ll]){n[Ll]=!0,s.forEach(function(a){a!=="selectionchange"&&(aw.has(a)||jc(a,!1,n),jc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ll]||(i[Ll]=!0,jc("selectionchange",!1,i))}}function pp(n,i,a,c){switch(Ls(i)){case 1:var d=Bn;break;case 4:d=Cl;break;default:d=ea}a=d.bind(null,i,a,n),d=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function zc(n,i,a,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Gi(S),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}S=S.parentNode}}c=c.return}gl(function(){var U=f,Q=Cs(a),J=[];e:{var G=cp.get(n);if(G!==void 0){var re=qi,le=n;switch(n){case"keypress":if(Hi(a)===0)break e;case"keydown":case"keyup":re=$e;break;case"focusin":le="focus",re=Ct;break;case"focusout":le="blur",re=Ct;break;case"beforeblur":case"afterblur":re=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=Wn;break;case op:case ap:case lp:re=bl;break;case up:re=Bs;break;case"scroll":re=Fs;break;case"wheel":re=HE;break;case"copy":case"cut":case"paste":re=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=sn}var ce=(i&4)!==0,lt=!ce&&n==="scroll",L=ce?G!==null?G+"Capture":null:G;ce=[];for(var O=U,F;O!==null;){F=O;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,L!==null&&(X=Oi(O,L),X!=null&&ce.push(ha(O,X,F)))),lt)break;O=O.return}0<ce.length&&(G=new re(G,le,null,a,Q),J.push({event:G,listeners:ce}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",G&&a!==Br&&(le=a.relatedTarget||a.fromElement)&&(Gi(le)||le[_r]))break e;if((re||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,re?(le=a.relatedTarget||a.toElement,re=U,le=le?Gi(le):null,le!==null&&(lt=wn(le),le!==lt||le.tag!==5&&le.tag!==6)&&(le=null)):(re=null,le=U),re!==le)){if(ce=na,X="onMouseLeave",L="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(ce=sn,X="onPointerLeave",L="onPointerEnter",O="pointer"),lt=re==null?G:Ks(re),F=le==null?G:Ks(le),G=new ce(X,O+"leave",re,a,Q),G.target=lt,G.relatedTarget=F,X=null,Gi(Q)===U&&(ce=new ce(L,O+"enter",le,a,Q),ce.target=F,ce.relatedTarget=lt,X=ce),lt=X,re&&le)t:{for(ce=re,L=le,O=0,F=ce;F;F=Ws(F))O++;for(F=0,X=L;X;X=Ws(X))F++;for(;0<O-F;)ce=Ws(ce),O--;for(;0<F-O;)L=Ws(L),F--;for(;O--;){if(ce===L||L!==null&&ce===L.alternate)break t;ce=Ws(ce),L=Ws(L)}ce=null}else ce=null;re!==null&&mp(J,G,re,ce,!1),le!==null&&lt!==null&&mp(J,lt,le,ce,!0)}}e:{if(G=U?Ks(U):window,re=G.nodeName&&G.nodeName.toLowerCase(),re==="select"||re==="input"&&G.type==="file")var he=JE;else if(Kf(G))if(Yf)he=tw;else{he=ZE;var me=XE}else(re=G.nodeName)&&re.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=ew);if(he&&(he=he(n,U))){Qf(J,he,a,Q);break e}me&&me(n,G,U),n==="focusout"&&(me=G._wrapperState)&&me.controlled&&G.type==="number"&&ct(G,"number",G.value)}switch(me=U?Ks(U):window,n){case"focusin":(Kf(me)||me.contentEditable==="true")&&(Hs=me,Vc=U,la=null);break;case"focusout":la=Vc=Hs=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,ip(J,a,Q);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":ip(J,a,Q)}var ge;if(Nc)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else $s?Wf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&($f&&a.locale!=="ko"&&($s||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&$s&&(ge=xl()):(nn=Q,Ms="value"in nn?nn.value:nn.textContent,$s=!0)),me=Ml(U,ve),0<me.length&&(ve=new y(ve,n,null,a,Q),J.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=Gf(a),ge!==null&&(ve.data=ge)))),(ge=WE?GE(n,a):KE(n,a))&&(U=Ml(U,"onBeforeInput"),0<U.length&&(Q=new y("onBeforeInput","beforeinput",null,a,Q),J.push({event:Q,listeners:U}),Q.data=ge))}fp(J,i)})}function ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ml(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Oi(n,a),f!=null&&c.unshift(ha(n,f,d)),f=Oi(n,i),f!=null&&c.push(ha(n,f,d))),n=n.return}return c}function Ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mp(n,i,a,c,d){for(var f=i._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,U=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&U!==null&&(S=U,d?(P=Oi(a,f),P!=null&&v.unshift(ha(a,P,S))):d||(P=Oi(a,f),P!=null&&v.push(ha(a,P,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var lw=/\r\n?/g,uw=/\u0000|\uFFFD/g;function gp(n){return(typeof n=="string"?n:""+n).replace(lw,`
`).replace(uw,"")}function Fl(n,i,a){if(i=gp(i),gp(n)!==i&&a)throw Error(t(425))}function Ul(){}var Bc=null,$c=null;function Hc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,cw=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,hw=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(n){return yp.resolve(null).then(n).catch(dw)}:qc;function dw(n){setTimeout(function(){throw n})}function Wc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Yr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Yr(i)}function ei(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _p(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Gs,da="__reactProps$"+Gs,_r="__reactContainer$"+Gs,Gc="__reactEvents$"+Gs,fw="__reactListeners$"+Gs,pw="__reactHandles$"+Gs;function Gi(n){var i=n[Kn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[_r]||a[Kn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=_p(n);n!==null;){if(a=n[Kn])return a;n=_p(n)}return i}n=a,a=n.parentNode}return null}function fa(n){return n=n[Kn]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jl(n){return n[da]||null}var Kc=[],Qs=-1;function ti(n){return{current:n}}function Ye(n){0>Qs||(n.current=Kc[Qs],Kc[Qs]=null,Qs--)}function Ge(n,i){Qs++,Kc[Qs]=n.current,n.current=i}var ni={},Vt=ti(ni),Wt=ti(!1),Ki=ni;function Ys(n,i){var a=n.type.contextTypes;if(!a)return ni;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function zl(){Ye(Wt),Ye(Vt)}function vp(n,i,a){if(Vt.current!==ni)throw Error(t(168));Ge(Vt,i),Ge(Wt,a)}function Ep(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ze(n)||"Unknown",d));return se({},a,c)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ni,Ki=Vt.current,Ge(Vt,n),Ge(Wt,Wt.current),!0}function wp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ep(n,i,Ki),c.__reactInternalMemoizedMergedChildContext=n,Ye(Wt),Ye(Vt),Ge(Vt,n)):Ye(Wt),Ge(Wt,a)}var vr=null,$l=!1,Qc=!1;function Tp(n){vr===null?vr=[n]:vr.push(n)}function mw(n){$l=!0,Tp(n)}function ri(){if(!Qc&&vr!==null){Qc=!0;var n=0,i=Ve;try{var a=vr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,$l=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),$o(ks,ri),d}finally{Ve=i,Qc=!1}}return null}var Js=[],Xs=0,Hl=null,ql=0,hn=[],dn=0,Qi=null,Er=1,wr="";function Yi(n,i){Js[Xs++]=ql,Js[Xs++]=Hl,Hl=n,ql=i}function Ip(n,i,a){hn[dn++]=Er,hn[dn++]=wr,hn[dn++]=Qi,Qi=n;var c=Er;n=wr;var d=32-en(c)-1;c&=~(1<<d),a+=1;var f=32-en(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Er=1<<32-en(i)+d|a<<d|c,wr=f+n}else Er=1<<f|a<<d|c,wr=n}function Yc(n){n.return!==null&&(Yi(n,1),Ip(n,1,0))}function Jc(n){for(;n===Hl;)Hl=Js[--Xs],Js[Xs]=null,ql=Js[--Xs],Js[Xs]=null;for(;n===Qi;)Qi=hn[--dn],hn[dn]=null,wr=hn[--dn],hn[dn]=null,Er=hn[--dn],hn[dn]=null}var on=null,an=null,Xe=!1,Sn=null;function Sp(n,i){var a=gn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ap(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=ei(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Qi!==null?{id:Er,overflow:wr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(Xe){var i=an;if(i){var a=i;if(!Ap(n,i)){if(Xc(n))throw Error(t(418));i=ei(a.nextSibling);var c=on;i&&Ap(n,i)?Sp(c,a):(n.flags=n.flags&-4097|2,Xe=!1,on=n)}}else{if(Xc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,on=n}}}function Rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Wl(n){if(n!==on)return!1;if(!Xe)return Rp(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hc(n.type,n.memoizedProps)),i&&(i=an)){if(Xc(n))throw Cp(),Error(t(418));for(;i;)Sp(n,i),i=ei(i.nextSibling)}if(Rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=ei(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?ei(n.stateNode.nextSibling):null;return!0}function Cp(){for(var n=an;n;)n=ei(n.nextSibling)}function Zs(){an=on=null,Xe=!1}function eh(n){Sn===null?Sn=[n]:Sn.push(n)}var gw=pe.ReactCurrentBatchConfig;function pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var S=d.refs;v===null?delete S[f]:S[f]=v},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Gl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function xp(n){var i=n._init;return i(n._payload)}function Pp(n){function i(L,O){if(n){var F=L.deletions;F===null?(L.deletions=[O],L.flags|=16):F.push(O)}}function a(L,O){if(!n)return null;for(;O!==null;)i(L,O),O=O.sibling;return null}function c(L,O){for(L=new Map;O!==null;)O.key!==null?L.set(O.key,O):L.set(O.index,O),O=O.sibling;return L}function d(L,O){return L=hi(L,O),L.index=0,L.sibling=null,L}function f(L,O,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<O?(L.flags|=2,O):F):(L.flags|=2,O)):(L.flags|=1048576,O)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,O,F,X){return O===null||O.tag!==6?(O=qh(F,L.mode,X),O.return=L,O):(O=d(O,F),O.return=L,O)}function P(L,O,F,X){var he=F.type;return he===k?Q(L,O,F.props.children,X,F.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===vt&&xp(he)===O.type)?(X=d(O,F.props),X.ref=pa(L,O,F),X.return=L,X):(X=yu(F.type,F.key,F.props,null,L.mode,X),X.ref=pa(L,O,F),X.return=L,X)}function U(L,O,F,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==F.containerInfo||O.stateNode.implementation!==F.implementation?(O=Wh(F,L.mode,X),O.return=L,O):(O=d(O,F.children||[]),O.return=L,O)}function Q(L,O,F,X,he){return O===null||O.tag!==7?(O=is(F,L.mode,X,he),O.return=L,O):(O=d(O,F),O.return=L,O)}function J(L,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return O=qh(""+O,L.mode,F),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ce:return F=yu(O.type,O.key,O.props,null,L.mode,F),F.ref=pa(L,null,O),F.return=L,F;case Te:return O=Wh(O,L.mode,F),O.return=L,O;case vt:var X=O._init;return J(L,X(O._payload),F)}if(ot(O)||fe(O))return O=is(O,L.mode,F,null),O.return=L,O;Gl(L,O)}return null}function G(L,O,F,X){var he=O!==null?O.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:S(L,O,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:return F.key===he?P(L,O,F,X):null;case Te:return F.key===he?U(L,O,F,X):null;case vt:return he=F._init,G(L,O,he(F._payload),X)}if(ot(F)||fe(F))return he!==null?null:Q(L,O,F,X,null);Gl(L,F)}return null}function re(L,O,F,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(F)||null,S(O,L,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ce:return L=L.get(X.key===null?F:X.key)||null,P(O,L,X,he);case Te:return L=L.get(X.key===null?F:X.key)||null,U(O,L,X,he);case vt:var me=X._init;return re(L,O,F,me(X._payload),he)}if(ot(X)||fe(X))return L=L.get(F)||null,Q(O,L,X,he,null);Gl(O,X)}return null}function le(L,O,F,X){for(var he=null,me=null,ge=O,ve=O=0,Tt=null;ge!==null&&ve<F.length;ve++){ge.index>ve?(Tt=ge,ge=null):Tt=ge.sibling;var Ue=G(L,ge,F[ve],X);if(Ue===null){ge===null&&(ge=Tt);break}n&&ge&&Ue.alternate===null&&i(L,ge),O=f(Ue,O,ve),me===null?he=Ue:me.sibling=Ue,me=Ue,ge=Tt}if(ve===F.length)return a(L,ge),Xe&&Yi(L,ve),he;if(ge===null){for(;ve<F.length;ve++)ge=J(L,F[ve],X),ge!==null&&(O=f(ge,O,ve),me===null?he=ge:me.sibling=ge,me=ge);return Xe&&Yi(L,ve),he}for(ge=c(L,ge);ve<F.length;ve++)Tt=re(ge,L,ve,F[ve],X),Tt!==null&&(n&&Tt.alternate!==null&&ge.delete(Tt.key===null?ve:Tt.key),O=f(Tt,O,ve),me===null?he=Tt:me.sibling=Tt,me=Tt);return n&&ge.forEach(function(di){return i(L,di)}),Xe&&Yi(L,ve),he}function ce(L,O,F,X){var he=fe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=O,ve=O=0,Tt=null,Ue=F.next();ge!==null&&!Ue.done;ve++,Ue=F.next()){ge.index>ve?(Tt=ge,ge=null):Tt=ge.sibling;var di=G(L,ge,Ue.value,X);if(di===null){ge===null&&(ge=Tt);break}n&&ge&&di.alternate===null&&i(L,ge),O=f(di,O,ve),me===null?he=di:me.sibling=di,me=di,ge=Tt}if(Ue.done)return a(L,ge),Xe&&Yi(L,ve),he;if(ge===null){for(;!Ue.done;ve++,Ue=F.next())Ue=J(L,Ue.value,X),Ue!==null&&(O=f(Ue,O,ve),me===null?he=Ue:me.sibling=Ue,me=Ue);return Xe&&Yi(L,ve),he}for(ge=c(L,ge);!Ue.done;ve++,Ue=F.next())Ue=re(ge,L,ve,Ue.value,X),Ue!==null&&(n&&Ue.alternate!==null&&ge.delete(Ue.key===null?ve:Ue.key),O=f(Ue,O,ve),me===null?he=Ue:me.sibling=Ue,me=Ue);return n&&ge.forEach(function(Qw){return i(L,Qw)}),Xe&&Yi(L,ve),he}function lt(L,O,F,X){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:e:{for(var he=F.key,me=O;me!==null;){if(me.key===he){if(he=F.type,he===k){if(me.tag===7){a(L,me.sibling),O=d(me,F.props.children),O.return=L,L=O;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===vt&&xp(he)===me.type){a(L,me.sibling),O=d(me,F.props),O.ref=pa(L,me,F),O.return=L,L=O;break e}a(L,me);break}else i(L,me);me=me.sibling}F.type===k?(O=is(F.props.children,L.mode,X,F.key),O.return=L,L=O):(X=yu(F.type,F.key,F.props,null,L.mode,X),X.ref=pa(L,O,F),X.return=L,L=X)}return v(L);case Te:e:{for(me=F.key;O!==null;){if(O.key===me)if(O.tag===4&&O.stateNode.containerInfo===F.containerInfo&&O.stateNode.implementation===F.implementation){a(L,O.sibling),O=d(O,F.children||[]),O.return=L,L=O;break e}else{a(L,O);break}else i(L,O);O=O.sibling}O=Wh(F,L.mode,X),O.return=L,L=O}return v(L);case vt:return me=F._init,lt(L,O,me(F._payload),X)}if(ot(F))return le(L,O,F,X);if(fe(F))return ce(L,O,F,X);Gl(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,O!==null&&O.tag===6?(a(L,O.sibling),O=d(O,F),O.return=L,L=O):(a(L,O),O=qh(F,L.mode,X),O.return=L,L=O),v(L)):a(L,O)}return lt}var eo=Pp(!0),kp=Pp(!1),Kl=ti(null),Ql=null,to=null,th=null;function nh(){th=to=Ql=null}function rh(n){var i=Kl.current;Ye(Kl),n._currentValue=i}function ih(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function no(n,i){Ql=n,th=to=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Kt=!0),n.firstContext=null)}function fn(n){var i=n._currentValue;if(th!==n)if(n={context:n,memoizedValue:i,next:null},to===null){if(Ql===null)throw Error(t(308));to=n,Ql.dependencies={lanes:0,firstContext:n}}else to=to.next=n;return i}var Ji=null;function sh(n){Ji===null?Ji=[n]:Ji.push(n)}function Np(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,sh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Tr(n,c)}function Tr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ii=!1;function oh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function si(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Fe&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Tr(n,a)}return d=c.interleaved,d===null?(i.next=i,sh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Tr(n,a)}function Yl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qo(n,a)}}function Dp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Jl(n,i,a,c){var d=n.updateQueue;ii=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,U=P.next;P.next=null,v===null?f=U:v.next=U,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=U:S.next=U,Q.lastBaseUpdate=P))}if(f!==null){var J=d.baseState;v=0,Q=U=P=null,S=f;do{var G=S.lane,re=S.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=n,ce=S;switch(G=i,re=a,ce.tag){case 1:if(le=ce.payload,typeof le=="function"){J=le.call(re,J,G);break e}J=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ce.payload,G=typeof le=="function"?le.call(re,J,G):le,G==null)break e;J=se({},J,G);break e;case 2:ii=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else re={eventTime:re,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(U=Q=re,P=J):Q=Q.next=re,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(P=J),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);es|=v,n.lanes=v,n.memoizedState=J}}function Op(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ma={},Qn=ti(ma),ga=ti(ma),ya=ti(ma);function Xi(n){if(n===ma)throw Error(t(174));return n}function ah(n,i){switch(Ge(ya,i),Ge(ga,n),Ge(Qn,ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ss(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ss(i,n)}Ye(Qn),Ge(Qn,i)}function ro(){Ye(Qn),Ye(ga),Ye(ya)}function Vp(n){Xi(ya.current);var i=Xi(Qn.current),a=Ss(i,n.type);i!==a&&(Ge(ga,n),Ge(Qn,a))}function lh(n){ga.current===n&&(Ye(Qn),Ye(ga))}var Ze=ti(0);function Xl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var uh=[];function ch(){for(var n=0;n<uh.length;n++)uh[n]._workInProgressVersionPrimary=null;uh.length=0}var Zl=pe.ReactCurrentDispatcher,hh=pe.ReactCurrentBatchConfig,Zi=0,et=null,mt=null,Et=null,eu=!1,_a=!1,va=0,yw=0;function Lt(){throw Error(t(321))}function dh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!In(n[a],i[a]))return!1;return!0}function fh(n,i,a,c,d,f){if(Zi=f,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Zl.current=n===null||n.memoizedState===null?ww:Tw,n=a(c,d),_a){f=0;do{if(_a=!1,va=0,25<=f)throw Error(t(301));f+=1,Et=mt=null,i.updateQueue=null,Zl.current=Iw,n=a(c,d)}while(_a)}if(Zl.current=ru,i=mt!==null&&mt.next!==null,Zi=0,Et=mt=et=null,eu=!1,i)throw Error(t(300));return n}function ph(){var n=va!==0;return va=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?et.memoizedState=Et=n:Et=Et.next=n,Et}function pn(){if(mt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var i=Et===null?et.memoizedState:Et.next;if(i!==null)Et=i,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?et.memoizedState=Et=n:Et=Et.next=n}return Et}function Ea(n,i){return typeof i=="function"?i(n):i}function mh(n){var i=pn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=v=null,P=null,U=f;do{var Q=U.lane;if((Zi&Q)===Q)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var J={lane:Q,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(S=P=J,v=c):P=P.next=J,et.lanes|=Q,es|=Q}U=U.next}while(U!==null&&U!==f);P===null?v=c:P.next=S,In(c,i.memoizedState)||(Kt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,es|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function gh(n){var i=pn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);In(f,i.memoizedState)||(Kt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,c]}function Lp(){}function Mp(n,i){var a=et,c=pn(),d=i(),f=!In(c.memoizedState,d);if(f&&(c.memoizedState=d,Kt=!0),c=c.queue,yh(jp.bind(null,a,c,n),[n]),c.getSnapshot!==i||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,wa(9,Up.bind(null,a,c,d,i),void 0,null),wt===null)throw Error(t(349));(Zi&30)!==0||Fp(a,i,d)}return d}function Fp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Up(n,i,a,c){i.value=a,i.getSnapshot=c,zp(i)&&Bp(n)}function jp(n,i,a){return a(function(){zp(i)&&Bp(n)})}function zp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!In(n,a)}catch{return!0}}function Bp(n){var i=Tr(n,1);i!==null&&xn(i,n,1,-1)}function $p(n){var i=Yn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},i.queue=n,n=n.dispatch=Ew.bind(null,et,n),[i.memoizedState,n]}function wa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Hp(){return pn().memoizedState}function tu(n,i,a,c){var d=Yn();et.flags|=n,d.memoizedState=wa(1|i,a,void 0,c===void 0?null:c)}function nu(n,i,a,c){var d=pn();c=c===void 0?null:c;var f=void 0;if(mt!==null){var v=mt.memoizedState;if(f=v.destroy,c!==null&&dh(c,v.deps)){d.memoizedState=wa(i,a,f,c);return}}et.flags|=n,d.memoizedState=wa(1|i,a,f,c)}function qp(n,i){return tu(8390656,8,n,i)}function yh(n,i){return nu(2048,8,n,i)}function Wp(n,i){return nu(4,2,n,i)}function Gp(n,i){return nu(4,4,n,i)}function Kp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qp(n,i,a){return a=a!=null?a.concat([n]):null,nu(4,4,Kp.bind(null,i,n),a)}function _h(){}function Yp(n,i){var a=pn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&dh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Jp(n,i){var a=pn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&dh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Xp(n,i,a){return(Zi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(In(a,i)||(a=Go(),et.lanes|=a,es|=a,n.baseState=!0),i)}function _w(n,i){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=hh.transition;hh.transition={};try{n(!1),i()}finally{Ve=a,hh.transition=c}}function Zp(){return pn().memoizedState}function vw(n,i,a){var c=ui(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},em(n))tm(i,a);else if(a=Np(n,i,a,c),a!==null){var d=qt();xn(a,n,c,d),nm(a,i,c)}}function Ew(n,i,a){var c=ui(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(em(n))tm(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,S=f(v,a);if(d.hasEagerState=!0,d.eagerState=S,In(S,v)){var P=i.interleaved;P===null?(d.next=d,sh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=Np(n,i,d,c),a!==null&&(d=qt(),xn(a,n,c,d),nm(a,i,c))}}function em(n){var i=n.alternate;return n===et||i!==null&&i===et}function tm(n,i){_a=eu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function nm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Qo(n,a)}}var ru={readContext:fn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},ww={readContext:fn,useCallback:function(n,i){return Yn().memoizedState=[n,i===void 0?null:i],n},useContext:fn,useEffect:qp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,tu(4194308,4,Kp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return tu(4194308,4,n,i)},useInsertionEffect:function(n,i){return tu(4,2,n,i)},useMemo:function(n,i){var a=Yn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Yn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=vw.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var i=Yn();return n={current:n},i.memoizedState=n},useState:$p,useDebugValue:_h,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=$p(!1),i=n[0];return n=_w.bind(null,n[1]),Yn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=et,d=Yn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));(Zi&30)!==0||Fp(c,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,qp(jp.bind(null,c,f,n),[n]),c.flags|=2048,wa(9,Up.bind(null,c,f,a,i),void 0,null),a},useId:function(){var n=Yn(),i=wt.identifierPrefix;if(Xe){var a=wr,c=Er;a=(c&~(1<<32-en(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=yw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Tw={readContext:fn,useCallback:Yp,useContext:fn,useEffect:yh,useImperativeHandle:Qp,useInsertionEffect:Wp,useLayoutEffect:Gp,useMemo:Jp,useReducer:mh,useRef:Hp,useState:function(){return mh(Ea)},useDebugValue:_h,useDeferredValue:function(n){var i=pn();return Xp(i,mt.memoizedState,n)},useTransition:function(){var n=mh(Ea)[0],i=pn().memoizedState;return[n,i]},useMutableSource:Lp,useSyncExternalStore:Mp,useId:Zp,unstable_isNewReconciler:!1},Iw={readContext:fn,useCallback:Yp,useContext:fn,useEffect:yh,useImperativeHandle:Qp,useInsertionEffect:Wp,useLayoutEffect:Gp,useMemo:Jp,useReducer:gh,useRef:Hp,useState:function(){return gh(Ea)},useDebugValue:_h,useDeferredValue:function(n){var i=pn();return mt===null?i.memoizedState=n:Xp(i,mt.memoizedState,n)},useTransition:function(){var n=gh(Ea)[0],i=pn().memoizedState;return[n,i]},useMutableSource:Lp,useSyncExternalStore:Mp,useId:Zp,unstable_isNewReconciler:!1};function An(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function vh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var iu={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qt(),d=ui(n),f=Ir(c,d);f.payload=i,a!=null&&(f.callback=a),i=si(n,f,d),i!==null&&(xn(i,n,d,c),Yl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qt(),d=ui(n),f=Ir(c,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=si(n,f,d),i!==null&&(xn(i,n,d,c),Yl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),c=ui(n),d=Ir(a,c);d.tag=2,i!=null&&(d.callback=i),i=si(n,d,c),i!==null&&(xn(i,n,c,a),Yl(i,n,c))}};function rm(n,i,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(d,f):!0}function im(n,i,a){var c=!1,d=ni,f=i.contextType;return typeof f=="object"&&f!==null?f=fn(f):(d=Gt(i)?Ki:Vt.current,c=i.contextTypes,f=(c=c!=null)?Ys(n,d):ni),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=iu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function sm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&iu.enqueueReplaceState(i,i.state,null)}function Eh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},oh(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=fn(f):(f=Gt(i)?Ki:Vt.current,d.context=Ys(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(vh(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&iu.enqueueReplaceState(d,d.state,null),Jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function io(n,i){try{var a="",c=i;do a+=ke(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function wh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Th(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Sw=typeof WeakMap=="function"?WeakMap:Map;function om(n,i,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){hu||(hu=!0,Mh=c),Th(n,i)},a}function am(n,i,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Th(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Th(n,i),typeof c!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function lm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Sw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Fw.bind(null,n,i,a),i.then(n,n))}function um(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function cm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ir(-1,1),i.tag=2,si(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Aw=pe.ReactCurrentOwner,Kt=!1;function Ht(n,i,a,c){i.child=n===null?kp(i,null,a,c):eo(i,n.child,a,c)}function hm(n,i,a,c,d){a=a.render;var f=i.ref;return no(i,d),c=fh(n,i,a,c,f,d),a=ph(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Sr(n,i,d)):(Xe&&a&&Yc(i),i.flags|=1,Ht(n,i,c,d),i.child)}function dm(n,i,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Hh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,fm(n,i,f,c,d)):(n=yu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(v,c)&&n.ref===i.ref)return Sr(n,i,d)}return i.flags|=1,n=hi(f,c),n.ref=i.ref,n.return=i,i.child=n}function fm(n,i,a,c,d){if(n!==null){var f=n.memoizedProps;if(aa(f,c)&&n.ref===i.ref)if(Kt=!1,i.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return i.lanes=n.lanes,Sr(n,i,d)}return Ih(n,i,a,c,d)}function pm(n,i,a){var c=i.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(oo,ln),ln|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ge(oo,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,Ge(oo,ln),ln|=c}else f!==null?(c=f.baseLanes|a,i.memoizedState=null):c=a,Ge(oo,ln),ln|=c;return Ht(n,i,d,a),i.child}function mm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ih(n,i,a,c,d){var f=Gt(a)?Ki:Vt.current;return f=Ys(i,f),no(i,d),a=fh(n,i,a,c,f,d),c=ph(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Sr(n,i,d)):(Xe&&c&&Yc(i),i.flags|=1,Ht(n,i,a,d),i.child)}function gm(n,i,a,c,d){if(Gt(a)){var f=!0;Bl(i)}else f=!1;if(no(i,d),i.stateNode===null)ou(n,i),im(i,a,c),Eh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=fn(U):(U=Gt(a)?Ki:Vt.current,U=Ys(i,U));var Q=a.getDerivedStateFromProps,J=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==U)&&sm(i,v,c,U),ii=!1;var G=i.memoizedState;v.state=G,Jl(i,c,v,d),P=i.memoizedState,S!==c||G!==P||Wt.current||ii?(typeof Q=="function"&&(vh(i,a,Q,c),P=i.memoizedState),(S=ii||rm(i,a,S,c,G,P,U))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,bp(n,i),S=i.memoizedProps,U=i.type===i.elementType?S:An(i.type,S),v.props=U,J=i.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=fn(P):(P=Gt(a)?Ki:Vt.current,P=Ys(i,P));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==J||G!==P)&&sm(i,v,c,P),ii=!1,G=i.memoizedState,v.state=G,Jl(i,c,v,d);var le=i.memoizedState;S!==J||G!==le||Wt.current||ii?(typeof re=="function"&&(vh(i,a,re,c),le=i.memoizedState),(U=ii||rm(i,a,U,c,G,le,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=le),v.props=c,v.state=le,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Sh(n,i,a,c,f,d)}function Sh(n,i,a,c,d,f){mm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&wp(i,a,!1),Sr(n,i,f);c=i.stateNode,Aw.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=eo(i,n.child,null,f),i.child=eo(i,null,S,f)):Ht(n,i,S,f),i.memoizedState=c.state,d&&wp(i,a,!0),i.child}function ym(n){var i=n.stateNode;i.pendingContext?vp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&vp(n,i.context,!1),ah(n,i.containerInfo)}function _m(n,i,a,c,d){return Zs(),eh(d),i.flags|=256,Ht(n,i,a,c),i.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function Rh(n){return{baseLanes:n,cachePool:null,transitions:null}}function vm(n,i,a){var c=i.pendingProps,d=Ze.current,f=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(Ze,d&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=_u(v,c,0,null),n=is(n,c,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=Rh(a),i.memoizedState=Ah,n):Ch(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return Rw(n,i,v,c,S,d,a);if(f){f=c.fallback,v=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=hi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=hi(S,f):(f=is(f,v,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=n.child.memoizedState,v=v===null?Rh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,i.memoizedState=Ah,c}return f=n.child,n=f.sibling,c=hi(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ch(n,i){return i=_u({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function su(n,i,a,c){return c!==null&&eh(c),eo(i,n.child,null,a),n=Ch(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Rw(n,i,a,c,d,f,v){if(a)return i.flags&256?(i.flags&=-257,c=wh(Error(t(422))),su(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=_u({mode:"visible",children:c.children},d,0,null),f=is(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&eo(i,n.child,null,v),i.child.memoizedState=Rh(v),i.memoizedState=Ah,f);if((i.mode&1)===0)return su(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=wh(f,c,void 0),su(n,i,v,c)}if(S=(v&n.childLanes)!==0,Kt||S){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Tr(n,d),xn(c,n,d,-1))}return $h(),c=wh(Error(t(421))),su(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Uw.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,an=ei(d.nextSibling),on=i,Xe=!0,Sn=null,n!==null&&(hn[dn++]=Er,hn[dn++]=wr,hn[dn++]=Qi,Er=n.id,wr=n.overflow,Qi=i),i=Ch(i,c.children),i.flags|=4096,i)}function Em(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ih(n.return,i,a)}function xh(n,i,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function wm(n,i,a){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(Ht(n,i,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Em(n,a,i);else if(n.tag===19)Em(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(Ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Xl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),xh(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Xl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}xh(i,!0,a,null,f);break;case"together":xh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ou(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Sr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),es|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=hi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=hi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Cw(n,i,a){switch(i.tag){case 3:ym(i),Zs();break;case 5:Vp(i);break;case 1:Gt(i.type)&&Bl(i);break;case 4:ah(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ge(Kl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ge(Ze,Ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?vm(n,i,a):(Ge(Ze,Ze.current&1),n=Sr(n,i,a),n!==null?n.sibling:null);Ge(Ze,Ze.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return wm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(Ze,Ze.current),c)break;return null;case 22:case 23:return i.lanes=0,pm(n,i,a)}return Sr(n,i,a)}var Tm,Ph,Im,Sm;Tm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ph=function(){},Im=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Xi(Qn.current);var f=null;switch(a){case"input":d=Ts(n,d),c=Ts(n,c),f=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),f=[];break;case"textarea":d=Lo(n,d),c=Lo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ul)}En(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var P=c[U];if(S=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==S&&(P!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(f||(f=[]),f.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(f=f||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Qe("scroll",n),f||S===P||(f=[])):(f=f||[]).push(U,P))}a&&(f=f||[]).push("style",a);var U=f;(i.updateQueue=U)&&(i.flags|=4)}},Sm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ta(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function xw(n,i,a){var c=i.pendingProps;switch(Jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(i),null;case 1:return Gt(i.type)&&zl(),Mt(i),null;case 3:return c=i.stateNode,ro(),Ye(Wt),Ye(Vt),ch(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sn!==null&&(jh(Sn),Sn=null))),Ph(n,i),Mt(i),null;case 5:lh(i);var d=Xi(ya.current);if(a=i.type,n!==null&&i.stateNode!=null)Im(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mt(i),null}if(n=Xi(Qn.current),Wl(i)){c=i.stateNode,a=i.type;var f=i.memoizedProps;switch(c[Kn]=i,c[da]=f,n=(i.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<ua.length;d++)Qe(ua[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":cl(c,f),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Qe("invalid",c);break;case"textarea":Mo(c,f),Qe("invalid",c)}En(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&Fl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&Fl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":ws(c),Vo(c,f,!0);break;case"textarea":ws(c),Fr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Ul)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Fo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=i,n[da]=c,Tm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Rs(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<ua.length;d++)Qe(ua[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":cl(n,c),d=Ts(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":Mo(n,c),d=Lo(n,c),Qe("invalid",n);break;default:d=c}En(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var P=S[f];f==="style"?As(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&dl(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Di(n,P):typeof P=="number"&&Di(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Qe("scroll",n):P!=null&&ne(n,f,P,v))}switch(a){case"input":ws(n),Vo(n,c,!1);break;case"textarea":ws(n),Fr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?vn(n,!!c.multiple,f,!1):c.defaultValue!=null&&vn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ul)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mt(i),null;case 6:if(n&&i.stateNode!=null)Sm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Xi(ya.current),Xi(Qn.current),Wl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Kn]=i,(f=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=i,i.stateNode=c}return Mt(i),null;case 13:if(Ye(Ze),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&an!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Cp(),Zs(),i.flags|=98560,f=!1;else if(f=Wl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Kn]=i}else Zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mt(i),f=!1}else Sn!==null&&(jh(Sn),Sn=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ze.current&1)!==0?gt===0&&(gt=3):$h())),i.updateQueue!==null&&(i.flags|=4),Mt(i),null);case 4:return ro(),Ph(n,i),n===null&&ca(i.stateNode.containerInfo),Mt(i),null;case 10:return rh(i.type._context),Mt(i),null;case 17:return Gt(i.type)&&zl(),Mt(i),null;case 19:if(Ye(Ze),f=i.memoizedState,f===null)return Mt(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)Ta(f,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Xl(n),v!==null){for(i.flags|=128,Ta(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(Ze,Ze.current&1|2),i.child}n=n.sibling}f.tail!==null&&Ke()>ao&&(i.flags|=128,c=!0,Ta(f,!1),i.lanes=4194304)}else{if(!c)if(n=Xl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Xe)return Mt(i),null}else 2*Ke()-f.renderingStartTime>ao&&a!==1073741824&&(i.flags|=128,c=!0,Ta(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(a=f.last,a!==null?a.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ke(),i.sibling=null,a=Ze.current,Ge(Ze,c?a&1|2:a&1),i):(Mt(i),null);case 22:case 23:return Bh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ln&1073741824)!==0&&(Mt(i),i.subtreeFlags&6&&(i.flags|=8192)):Mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Pw(n,i){switch(Jc(i),i.tag){case 1:return Gt(i.type)&&zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ro(),Ye(Wt),Ye(Vt),ch(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return lh(i),null;case 13:if(Ye(Ze),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ye(Ze),null;case 4:return ro(),null;case 10:return rh(i.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var au=!1,Ft=!1,kw=typeof WeakSet=="function"?WeakSet:Set,oe=null;function so(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(n,i,c)}else a.current=null}function kh(n,i,a){try{a()}catch(c){st(n,i,c)}}var Am=!1;function Nw(n,i){if(Bc=mr,n=rp(),Oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,U=0,Q=0,J=n,G=null;t:for(;;){for(var re;J!==a||d!==0&&J.nodeType!==3||(S=v+d),J!==f||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(re=J.firstChild)!==null;)G=J,J=re;for(;;){if(J===n)break t;if(G===a&&++U===d&&(S=v),G===f&&++Q===c&&(P=v),(re=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=re}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for($c={focusedElem:n,selectionRange:a},mr=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var le=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ce=le.memoizedProps,lt=le.memoizedState,L=i.stateNode,O=L.getSnapshotBeforeUpdate(i.elementType===i.type?ce:An(i.type,ce),lt);L.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){st(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return le=Am,Am=!1,le}function Ia(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&kh(i,a,f)}d=d.next}while(d!==c)}}function lu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Nh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Rm(n){var i=n.alternate;i!==null&&(n.alternate=null,Rm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Kn],delete i[da],delete i[Gc],delete i[fw],delete i[pw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cm(n){return n.tag===5||n.tag===3||n.tag===4}function xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ul));else if(c!==4&&(n=n.child,n!==null))for(bh(n,i,a),n=n.sibling;n!==null;)bh(n,i,a),n=n.sibling}function Dh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Dh(n,i,a),n=n.sibling;n!==null;)Dh(n,i,a),n=n.sibling}var xt=null,Rn=!1;function oi(n,i,a){for(a=a.child;a!==null;)Pm(n,i,a),a=a.sibling}function Pm(n,i,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Fi,a)}catch{}switch(a.tag){case 5:Ft||so(a,i);case 6:var c=xt,d=Rn;xt=null,oi(n,i,a),xt=c,Rn=d,xt!==null&&(Rn?(n=xt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):xt.removeChild(a.stateNode));break;case 18:xt!==null&&(Rn?(n=xt,a=a.stateNode,n.nodeType===8?Wc(n.parentNode,a):n.nodeType===1&&Wc(n,a),Yr(n)):Wc(xt,a.stateNode));break;case 4:c=xt,d=Rn,xt=a.stateNode.containerInfo,Rn=!0,oi(n,i,a),xt=c,Rn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&kh(a,i,v),d=d.next}while(d!==c)}oi(n,i,a);break;case 1:if(!Ft&&(so(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){st(a,i,S)}oi(n,i,a);break;case 21:oi(n,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,oi(n,i,a),Ft=c):oi(n,i,a);break;default:oi(n,i,a)}}function km(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kw),i.forEach(function(c){var d=jw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Cn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:xt=S.stateNode,Rn=!1;break e;case 3:xt=S.stateNode.containerInfo,Rn=!0;break e;case 4:xt=S.stateNode.containerInfo,Rn=!0;break e}S=S.return}if(xt===null)throw Error(t(160));Pm(f,v,d),xt=null,Rn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){st(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Nm(i,n),i=i.sibling}function Nm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(i,n),Jn(n),c&4){try{Ia(3,n,n.return),lu(3,n)}catch(ce){st(n,n.return,ce)}try{Ia(5,n,n.return)}catch(ce){st(n,n.return,ce)}}break;case 1:Cn(i,n),Jn(n),c&512&&a!==null&&so(a,a.return);break;case 5:if(Cn(i,n),Jn(n),c&512&&a!==null&&so(a,a.return),n.flags&32){var d=n.stateNode;try{Di(d,"")}catch(ce){st(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Is(d,f),Rs(S,v);var U=Rs(S,f);for(v=0;v<P.length;v+=2){var Q=P[v],J=P[v+1];Q==="style"?As(d,J):Q==="dangerouslySetInnerHTML"?dl(d,J):Q==="children"?Di(d,J):ne(d,Q,J,U)}switch(S){case"input":bi(d,f);break;case"textarea":hl(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var re=f.value;re!=null?vn(d,!!f.multiple,re,!1):G!==!!f.multiple&&(f.defaultValue!=null?vn(d,!!f.multiple,f.defaultValue,!0):vn(d,!!f.multiple,f.multiple?[]:"",!1))}d[da]=f}catch(ce){st(n,n.return,ce)}}break;case 6:if(Cn(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ce){st(n,n.return,ce)}}break;case 3:if(Cn(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Yr(i.containerInfo)}catch(ce){st(n,n.return,ce)}break;case 4:Cn(i,n),Jn(n);break;case 13:Cn(i,n),Jn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Lh=Ke())),c&4&&km(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(U=Ft)||Q,Cn(i,n),Ft=U):Cn(i,n),Jn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!Q&&(n.mode&1)!==0)for(oe=n,Q=n.child;Q!==null;){for(J=oe=Q;oe!==null;){switch(G=oe,re=G.child,G.tag){case 0:case 11:case 14:case 15:Ia(4,G,G.return);break;case 1:so(G,G.return);var le=G.stateNode;if(typeof le.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,le.props=i.memoizedProps,le.state=i.memoizedState,le.componentWillUnmount()}catch(ce){st(c,a,ce)}}break;case 5:so(G,G.return);break;case 22:if(G.memoizedState!==null){Om(J);continue}}re!==null?(re.return=G,oe=re):Om(J)}Q=Q.sibling}e:for(Q=null,J=n;;){if(J.tag===5){if(Q===null){Q=J;try{d=J.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=zr("display",v))}catch(ce){st(n,n.return,ce)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=U?"":J.memoizedProps}catch(ce){st(n,n.return,ce)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Cn(i,n),Jn(n),c&4&&km(n);break;case 21:break;default:Cn(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Cm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Di(d,""),c.flags&=-33);var f=xm(n);Dh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=xm(n);bh(n,S,v);break;default:throw Error(t(161))}}catch(P){st(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function bw(n,i,a){oe=n,bm(n)}function bm(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||au;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ft;S=au;var U=Ft;if(au=v,(Ft=P)&&!U)for(oe=d;oe!==null;)v=oe,P=v.child,v.tag===22&&v.memoizedState!==null?Vm(d):P!==null?(P.return=v,oe=P):Vm(d);for(;f!==null;)oe=f,bm(f),f=f.sibling;oe=d,au=S,Ft=U}Dm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,oe=f):Dm(n)}}function Dm(n){for(;oe!==null;){var i=oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||lu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:An(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Op(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Op(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var Q=U.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&Yr(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&Nh(i)}catch(G){st(i,i.return,G)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Om(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function Vm(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{lu(4,i)}catch(P){st(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){st(i,d,P)}}var f=i.return;try{Nh(i)}catch(P){st(i,f,P)}break;case 5:var v=i.return;try{Nh(i)}catch(P){st(i,v,P)}}}catch(P){st(i,i.return,P)}if(i===n){oe=null;break}var S=i.sibling;if(S!==null){S.return=i.return,oe=S;break}oe=i.return}}var Dw=Math.ceil,uu=pe.ReactCurrentDispatcher,Oh=pe.ReactCurrentOwner,mn=pe.ReactCurrentBatchConfig,Fe=0,wt=null,dt=null,Pt=0,ln=0,oo=ti(0),gt=0,Sa=null,es=0,cu=0,Vh=0,Aa=null,Qt=null,Lh=0,ao=1/0,Ar=null,hu=!1,Mh=null,ai=null,du=!1,li=null,fu=0,Ra=0,Fh=null,pu=-1,mu=0;function qt(){return(Fe&6)!==0?Ke():pu!==-1?pu:pu=Ke()}function ui(n){return(n.mode&1)===0?1:(Fe&2)!==0&&Pt!==0?Pt&-Pt:gw.transition!==null?(mu===0&&(mu=Go()),mu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Ls(n.type)),n)}function xn(n,i,a,c){if(50<Ra)throw Ra=0,Fh=null,Error(t(185));Bi(n,a,c),((Fe&2)===0||n!==wt)&&(n===wt&&((Fe&2)===0&&(cu|=a),gt===4&&ci(n,Pt)),Yt(n,c),a===1&&Fe===0&&(i.mode&1)===0&&(ao=Ke()+500,$l&&ri()))}function Yt(n,i){var a=n.callbackNode;zi(n,i);var c=dr(n,n===wt?Pt:0);if(c===0)a!==null&&Ps(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ps(a),i===1)n.tag===0?mw(Mm.bind(null,n)):Tp(Mm.bind(null,n)),hw(function(){(Fe&6)===0&&ri()}),a=null;else{switch(Fn(c)){case 1:a=ks;break;case 4:a=Ho;break;case 16:a=Mi;break;case 536870912:a=Ns;break;default:a=Mi}a=qm(a,Lm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Lm(n,i){if(pu=-1,mu=0,(Fe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(lo()&&n.callbackNode!==a)return null;var c=dr(n,n===wt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=gu(n,c);else{i=c;var d=Fe;Fe|=2;var f=Um();(wt!==n||Pt!==i)&&(Ar=null,ao=Ke()+500,ns(n,i));do try{Lw();break}catch(S){Fm(n,S)}while(!0);nh(),uu.current=f,Fe=d,dt!==null?i=0:(wt=null,Pt=0,i=gt)}if(i!==0){if(i===2&&(d=Wo(n),d!==0&&(c=d,i=Uh(n,d))),i===1)throw a=Sa,ns(n,0),ci(n,c),Yt(n,Ke()),a;if(i===6)ci(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Ow(d)&&(i=gu(n,c),i===2&&(f=Wo(n),f!==0&&(c=f,i=Uh(n,f))),i===1))throw a=Sa,ns(n,0),ci(n,c),Yt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:rs(n,Qt,Ar);break;case 3:if(ci(n,c),(c&130023424)===c&&(i=Lh+500-Ke(),10<i)){if(dr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=qc(rs.bind(null,n,Qt,Ar),i);break}rs(n,Qt,Ar);break;case 4:if(ci(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-en(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Dw(c/1960))-c,10<c){n.timeoutHandle=qc(rs.bind(null,n,Qt,Ar),c);break}rs(n,Qt,Ar);break;case 5:rs(n,Qt,Ar);break;default:throw Error(t(329))}}}return Yt(n,Ke()),n.callbackNode===a?Lm.bind(null,n):null}function Uh(n,i){var a=Aa;return n.current.memoizedState.isDehydrated&&(ns(n,i).flags|=256),n=gu(n,i),n!==2&&(i=Qt,Qt=a,i!==null&&jh(i)),n}function jh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function Ow(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!In(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ci(n,i){for(i&=~Vh,i&=~cu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-en(i),c=1<<a;n[a]=-1,i&=~c}}function Mm(n){if((Fe&6)!==0)throw Error(t(327));lo();var i=dr(n,0);if((i&1)===0)return Yt(n,Ke()),null;var a=gu(n,i);if(n.tag!==0&&a===2){var c=Wo(n);c!==0&&(i=c,a=Uh(n,c))}if(a===1)throw a=Sa,ns(n,0),ci(n,i),Yt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,rs(n,Qt,Ar),Yt(n,Ke()),null}function zh(n,i){var a=Fe;Fe|=1;try{return n(i)}finally{Fe=a,Fe===0&&(ao=Ke()+500,$l&&ri())}}function ts(n){li!==null&&li.tag===0&&(Fe&6)===0&&lo();var i=Fe;Fe|=1;var a=mn.transition,c=Ve;try{if(mn.transition=null,Ve=1,n)return n()}finally{Ve=c,mn.transition=a,Fe=i,(Fe&6)===0&&ri()}}function Bh(){ln=oo.current,Ye(oo)}function ns(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,cw(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:ro(),Ye(Wt),Ye(Vt),ch();break;case 5:lh(c);break;case 4:ro();break;case 13:Ye(Ze);break;case 19:Ye(Ze);break;case 10:rh(c.type._context);break;case 22:case 23:Bh()}a=a.return}if(wt=n,dt=n=hi(n.current,null),Pt=ln=i,gt=0,Sa=null,Vh=cu=es=0,Qt=Aa=null,Ji!==null){for(i=0;i<Ji.length;i++)if(a=Ji[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ji=null}return n}function Fm(n,i){do{var a=dt;try{if(nh(),Zl.current=ru,eu){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}eu=!1}if(Zi=0,Et=mt=et=null,_a=!1,va=0,Oh.current=null,a===null||a.return===null){gt=1,Sa=i,dt=null;break}e:{var f=n,v=a.return,S=a,P=i;if(i=Pt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,Q=S,J=Q.tag;if((Q.mode&1)===0&&(J===0||J===11||J===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=um(v);if(re!==null){re.flags&=-257,cm(re,v,S,f,i),re.mode&1&&lm(f,U,i),i=re,P=U;var le=i.updateQueue;if(le===null){var ce=new Set;ce.add(P),i.updateQueue=ce}else le.add(P);break e}else{if((i&1)===0){lm(f,U,i),$h();break e}P=Error(t(426))}}else if(Xe&&S.mode&1){var lt=um(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),cm(lt,v,S,f,i),eh(io(P,S));break e}}f=P=io(P,S),gt!==4&&(gt=2),Aa===null?Aa=[f]:Aa.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var L=om(f,P,i);Dp(f,L);break e;case 1:S=P;var O=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ai===null||!ai.has(F)))){f.flags|=65536,i&=-i,f.lanes|=i;var X=am(f,S,i);Dp(f,X);break e}}f=f.return}while(f!==null)}zm(a)}catch(he){i=he,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Um(){var n=uu.current;return uu.current=ru,n===null?ru:n}function $h(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||(es&268435455)===0&&(cu&268435455)===0||ci(wt,Pt)}function gu(n,i){var a=Fe;Fe|=2;var c=Um();(wt!==n||Pt!==i)&&(Ar=null,ns(n,i));do try{Vw();break}catch(d){Fm(n,d)}while(!0);if(nh(),Fe=a,uu.current=c,dt!==null)throw Error(t(261));return wt=null,Pt=0,gt}function Vw(){for(;dt!==null;)jm(dt)}function Lw(){for(;dt!==null&&!Li();)jm(dt)}function jm(n){var i=Hm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?zm(n):dt=i,Oh.current=null}function zm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=xw(a,i,ln),a!==null){dt=a;return}}else{if(a=Pw(a,i),a!==null){a.flags&=32767,dt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,dt=null;return}}if(i=i.sibling,i!==null){dt=i;return}dt=i=n}while(i!==null);gt===0&&(gt=5)}function rs(n,i,a){var c=Ve,d=mn.transition;try{mn.transition=null,Ve=1,Mw(n,i,a,c)}finally{mn.transition=d,Ve=c}return null}function Mw(n,i,a,c){do lo();while(li!==null);if((Fe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Pc(n,f),n===wt&&(dt=wt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||du||(du=!0,qm(Mi,function(){return lo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=mn.transition,mn.transition=null;var v=Ve;Ve=1;var S=Fe;Fe|=4,Oh.current=null,Nw(n,a),Nm(a,n),rw($c),mr=!!Bc,$c=Bc=null,n.current=a,bw(a),hr(),Fe=S,Ve=v,mn.transition=f}else n.current=a;if(du&&(du=!1,li=n,fu=d),f=n.pendingLanes,f===0&&(ai=null),Il(a.stateNode),Yt(n,Ke()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(hu)throw hu=!1,n=Mh,Mh=null,n;return(fu&1)!==0&&n.tag!==0&&lo(),f=n.pendingLanes,(f&1)!==0?n===Fh?Ra++:(Ra=0,Fh=n):Ra=0,ri(),null}function lo(){if(li!==null){var n=Fn(fu),i=mn.transition,a=Ve;try{if(mn.transition=null,Ve=16>n?16:n,li===null)var c=!1;else{if(n=li,li=null,fu=0,(Fe&6)!==0)throw Error(t(331));var d=Fe;for(Fe|=4,oe=n.current;oe!==null;){var f=oe,v=f.child;if((oe.flags&16)!==0){var S=f.deletions;if(S!==null){for(var P=0;P<S.length;P++){var U=S[P];for(oe=U;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:Ia(8,Q,f)}var J=Q.child;if(J!==null)J.return=Q,oe=J;else for(;oe!==null;){Q=oe;var G=Q.sibling,re=Q.return;if(Rm(Q),Q===U){oe=null;break}if(G!==null){G.return=re,oe=G;break}oe=re}}}var le=f.alternate;if(le!==null){var ce=le.child;if(ce!==null){le.child=null;do{var lt=ce.sibling;ce.sibling=null,ce=lt}while(ce!==null)}}oe=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,oe=v;else e:for(;oe!==null;){if(f=oe,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ia(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,oe=L;break e}oe=f.return}}var O=n.current;for(oe=O;oe!==null;){v=oe;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,oe=F;else e:for(v=O;oe!==null;){if(S=oe,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:lu(9,S)}}catch(he){st(S,S.return,he)}if(S===v){oe=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,oe=X;break e}oe=S.return}}if(Fe=d,ri(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Fi,n)}catch{}c=!0}return c}finally{Ve=a,mn.transition=i}}return!1}function Bm(n,i,a){i=io(a,i),i=om(n,i,1),n=si(n,i,1),i=qt(),n!==null&&(Bi(n,1,i),Yt(n,i))}function st(n,i,a){if(n.tag===3)Bm(n,n,a);else for(;i!==null;){if(i.tag===3){Bm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ai===null||!ai.has(c))){n=io(a,n),n=am(i,n,1),i=si(i,n,1),n=qt(),i!==null&&(Bi(i,1,n),Yt(i,n));break}}i=i.return}}function Fw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qt(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Pt&a)===a&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>Ke()-Lh?ns(n,0):Vh|=a),Yt(n,i)}function $m(n,i){i===0&&((n.mode&1)===0?i=1:(i=Gr,Gr<<=1,(Gr&130023424)===0&&(Gr=4194304)));var a=qt();n=Tr(n,i),n!==null&&(Bi(n,i,a),Yt(n,a))}function Uw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),$m(n,a)}function jw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),$m(n,a)}var Hm;Hm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Kt=!1,Cw(n,i,a);Kt=(n.flags&131072)!==0}else Kt=!1,Xe&&(i.flags&1048576)!==0&&Ip(i,ql,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ou(n,i),n=i.pendingProps;var d=Ys(i,Vt.current);no(i,a),d=fh(null,i,c,n,d,a);var f=ph();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(c)?(f=!0,Bl(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,oh(i),d.updater=iu,i.stateNode=d,d._reactInternals=i,Eh(i,c,n,a),i=Sh(null,i,c,!0,f,a)):(i.tag=0,Xe&&f&&Yc(i),Ht(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ou(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Bw(c),n=An(c,n),d){case 0:i=Ih(null,i,c,n,a);break e;case 1:i=gm(null,i,c,n,a);break e;case 11:i=hm(null,i,c,n,a);break e;case 14:i=dm(null,i,c,An(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:An(c,d),Ih(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:An(c,d),gm(n,i,c,d,a);case 3:e:{if(ym(i),n===null)throw Error(t(387));c=i.pendingProps,f=i.memoizedState,d=f.element,bp(n,i),Jl(i,c,null,a);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=io(Error(t(423)),i),i=_m(n,i,c,a,d);break e}else if(c!==d){d=io(Error(t(424)),i),i=_m(n,i,c,a,d);break e}else for(an=ei(i.stateNode.containerInfo.firstChild),on=i,Xe=!0,Sn=null,a=kp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zs(),c===d){i=Sr(n,i,a);break e}Ht(n,i,c,a)}i=i.child}return i;case 5:return Vp(i),n===null&&Zc(i),c=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Hc(c,d)?v=null:f!==null&&Hc(c,f)&&(i.flags|=32),mm(n,i),Ht(n,i,v,a),i.child;case 6:return n===null&&Zc(i),null;case 13:return vm(n,i,a);case 4:return ah(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=eo(i,null,c,a):Ht(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:An(c,d),hm(n,i,c,d,a);case 7:return Ht(n,i,i.pendingProps,a),i.child;case 8:return Ht(n,i,i.pendingProps.children,a),i.child;case 12:return Ht(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,Ge(Kl,c._currentValue),c._currentValue=v,f!==null)if(In(f.value,v)){if(f.children===d.children&&!Wt.current){i=Sr(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=Ir(-1,a&-a),P.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var Q=U.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),U.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),ih(f.return,a,i),S.lanes|=a;break}P=P.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),ih(v,a,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Ht(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,no(i,a),d=fn(d),c=c(d),i.flags|=1,Ht(n,i,c,a),i.child;case 14:return c=i.type,d=An(c,i.pendingProps),d=An(c.type,d),dm(n,i,c,d,a);case 15:return fm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:An(c,d),ou(n,i),i.tag=1,Gt(c)?(n=!0,Bl(i)):n=!1,no(i,a),im(i,c,d),Eh(i,c,d,a),Sh(null,i,c,!0,n,a);case 19:return wm(n,i,a);case 22:return pm(n,i,a)}throw Error(t(156,i.tag))};function qm(n,i){return $o(n,i)}function zw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,i,a,c){return new zw(n,i,a,c)}function Hh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Bw(n){if(typeof n=="function")return Hh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===D)return 11;if(n===rt)return 14}return 2}function hi(n,i){var a=n.alternate;return a===null?(a=gn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yu(n,i,a,c,d,f){var v=2;if(c=n,typeof n=="function")Hh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return is(a.children,d,f,i);case A:v=8,d|=8;break;case x:return n=gn(12,a,i,d|2),n.elementType=x,n.lanes=f,n;case I:return n=gn(13,a,i,d),n.elementType=I,n.lanes=f,n;case Pe:return n=gn(19,a,i,d),n.elementType=Pe,n.lanes=f,n;case We:return _u(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case b:v=9;break e;case D:v=11;break e;case rt:v=14;break e;case vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=f,i}function is(n,i,a,c){return n=gn(7,n,c,i),n.lanes=a,n}function _u(n,i,a,c){return n=gn(22,n,c,i),n.elementType=We,n.lanes=a,n.stateNode={isHidden:!1},n}function qh(n,i,a){return n=gn(6,n,null,i),n.lanes=a,n}function Wh(n,i,a){return i=gn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $w(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Gh(n,i,a,c,d,f,v,S,P){return n=new $w(n,i,a,S,P),i===1?(i=1,f===!0&&(i|=8)):i=0,f=gn(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},oh(f),n}function Hw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Wm(n){if(!n)return ni;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return Ep(n,a,i)}return i}function Gm(n,i,a,c,d,f,v,S,P){return n=Gh(a,c,!0,n,d,f,v,S,P),n.context=Wm(null),a=n.current,c=qt(),d=ui(a),f=Ir(c,d),f.callback=i??null,si(a,f,d),n.current.lanes=d,Bi(n,d,c),Yt(n,c),n}function vu(n,i,a,c){var d=i.current,f=qt(),v=ui(d);return a=Wm(a),i.context===null?i.context=a:i.pendingContext=a,i=Ir(f,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=si(d,i,v),n!==null&&(xn(n,d,v,f),Yl(n,d,v)),v}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Km(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Kh(n,i){Km(n,i),(n=n.alternate)&&Km(n,i)}function qw(){return null}var Qm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qh(n){this._internalRoot=n}wu.prototype.render=Qh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vu(n,i,null,null)},wu.prototype.unmount=Qh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ts(function(){vu(null,n,null,null)}),i[_r]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Xo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<tn.length&&i!==0&&i<tn[a].priority;a++);tn.splice(a,0,n),a===0&&Os(n)}};function Yh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function Ww(n,i,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=Eu(v);f.call(U)}}var v=Gm(i,c,n,0,null,!1,!1,"",Ym);return n._reactRootContainer=v,n[_r]=v.current,ca(n.nodeType===8?n.parentNode:n),ts(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=Eu(P);S.call(U)}}var P=Gh(n,0,!1,null,null,!1,!1,"",Ym);return n._reactRootContainer=P,n[_r]=P.current,ca(n.nodeType===8?n.parentNode:n),ts(function(){vu(i,P,a,c)}),P}function Iu(n,i,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var P=Eu(v);S.call(P)}}vu(i,v,n,d)}else v=Ww(a,i,n,d,c);return Eu(v)}Yo=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=je(i.pendingLanes);a!==0&&(Qo(i,a|1),Yt(i,Ke()),(Fe&6)===0&&(ao=Ke()+500,ri()))}break;case 13:ts(function(){var c=Tr(n,1);if(c!==null){var d=qt();xn(c,n,1,d)}}),Kh(n,1)}},bs=function(n){if(n.tag===13){var i=Tr(n,134217728);if(i!==null){var a=qt();xn(i,n,134217728,a)}Kh(n,134217728)}},Jo=function(n){if(n.tag===13){var i=ui(n),a=Tr(n,i);if(a!==null){var c=qt();xn(a,n,i,c)}Kh(n,i)}},Xo=function(){return Ve},Zo=function(n,i){var a=Ve;try{return Ve=n,i()}finally{Ve=a}},lr=function(n,i,a){switch(i){case"input":if(bi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=jl(c);if(!d)throw Error(t(90));Oo(c),bi(c,d)}}}break;case"textarea":hl(n,a);break;case"select":i=a.value,i!=null&&vn(n,!!a.multiple,i,!1)}},pl=zh,ml=ts;var Gw={usingClientEntryPoint:!1,Events:[fa,Ks,jl,$r,Hr,zh]},Ca={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kw={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Fi=Su.inject(Kw),Zt=Su}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gw,Jt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(i))throw Error(t(200));return Hw(n,i,null,a)},Jt.createRoot=function(n,i){if(!Yh(n))throw Error(t(299));var a=!1,c="",d=Qm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Gh(n,1,!1,null,null,a,!1,c,d),n[_r]=i.current,ca(n.nodeType===8?n.parentNode:n),new Qh(i)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Tl(i),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return ts(n)},Jt.hydrate=function(n,i,a){if(!Tu(i))throw Error(t(200));return Iu(null,n,i,!0,a)},Jt.hydrateRoot=function(n,i,a){if(!Yh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Qm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Gm(i,null,n,1,a??null,d,!1,f,v),n[_r]=i.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new wu(i)},Jt.render=function(n,i,a){if(!Tu(i))throw Error(t(200));return Iu(null,n,i,!1,a)},Jt.unmountComponentAtNode=function(n){if(!Tu(n))throw Error(t(40));return n._reactRootContainer?(ts(function(){Iu(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},Jt.unstable_batchedUpdates=zh,Jt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Tu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Iu(n,i,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var ig;function r0(){if(ig)return Zh.exports;ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Zh.exports=n0(),Zh.exports}var sg;function i0(){if(sg)return Au;sg=1;var r=r0();return Au.createRoot=r.createRoot,Au.hydrateRoot=r.hydrateRoot,Au}var s0=i0();const o0=Qd(s0),a0=()=>{};var og={};/**
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
 */const qy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},l0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=u>>2,T=(u&3)<<4|m>>4;let R=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(R=64)),s.push(t[w],t[T],t[R],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(qy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):l0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||T==null)throw new u0;const R=u<<2|m>>4;if(s.push(R),_!==64){const z=m<<4&240|_>>2;if(s.push(z),T!==64){const q=_<<6&192|T;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class u0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c0=function(r){const e=qy(r);return Wy.encodeByteArray(e,!0)},$u=function(r){return c0(r).replace(/\./g,"")},Gy=function(r){try{return Wy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function h0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const d0=()=>h0().__FIREBASE_DEFAULTS__,f0=()=>{if(typeof process>"u"||typeof og>"u")return;const r=og.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},p0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Gy(r[1]);return e&&JSON.parse(e)},cc=()=>{try{return a0()||d0()||f0()||p0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ky=r=>{var e,t;return(t=(e=cc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},m0=r=>{const e=Ky(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Qy=()=>{var r;return(r=cc())==null?void 0:r.config},Yy=r=>{var e;return(e=cc())==null?void 0:e[`_${r}`]};/**
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
 */class g0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Co(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jy(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function y0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[$u(JSON.stringify(t)),$u(JSON.stringify(h)),""].join(".")}const La={};function _0(){const r={prod:[],emulator:[]};for(const e of Object.keys(La))La[e]?r.emulator.push(e):r.prod.push(e);return r}function v0(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let ag=!1;function Xy(r,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||La[r]===e||La[r]||ag)return;La[r]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=_0().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function g(R,z){R.setAttribute("width","24"),R.setAttribute("id",z),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function _(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{ag=!0,h()},R}function w(R,z){R.setAttribute("id",z),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function T(){const R=v0(s),z=t("text"),q=document.getElementById(z)||document.createElement("span"),$=t("learnmore"),B=document.getElementById($)||document.createElement("a"),ae=t("preprendIcon"),ue=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const ne=R.element;m(ne),w(B,$);const pe=_();g(ue,ae),ne.append(ue,q,B,pe),document.body.appendChild(ne)}u?(q.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function E0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function w0(){var e;const r=(e=cc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function T0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function I0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function S0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function A0(){const r=Bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function R0(){return!w0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C0(){try{return typeof indexedDB=="object"}catch{return!1}}function x0(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const P0="FirebaseError";class Lr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=P0,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?k0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Lr(o,m,s)}}function k0(r,e){return r.replace(N0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const N0=/\{\$([^}]+)}/g;function b0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function cs(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(lg(u)&&lg(h)){if(!cs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function lg(r){return r!==null&&typeof r=="object"}/**
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
 */function tl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function D0(r,e){const t=new O0(r,e);return t.subscribe.bind(t)}class O0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");V0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=nd),o.error===void 0&&(o.error=nd),o.complete===void 0&&(o.complete=nd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function nd(){}/**
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
 */function Dn(r){return r&&r._delegate?r._delegate:r}class hs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const os="[DEFAULT]";/**
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
 */class L0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new g0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(F0(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:M0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M0(r){return r===os?void 0:r}function F0(r){return r.instantiationMode==="EAGER"}/**
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
 */class U0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new L0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(be||(be={}));const j0={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},z0=be.INFO,B0={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},$0=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=B0[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jd{constructor(e){this.name=e,this._logLevel=z0,this._logHandler=$0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?j0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const H0=(r,e)=>e.some(t=>r instanceof t);let ug,cg;function q0(){return ug||(ug=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W0(){return cg||(cg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zy=new WeakMap,Ed=new WeakMap,e_=new WeakMap,rd=new WeakMap,Xd=new WeakMap;function G0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(vi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Zy.set(t,r)}).catch(()=>{}),Xd.set(e,r),e}function K0(r){if(Ed.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Ed.set(r,e)}let wd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ed.get(r);if(e==="objectStoreNames")return r.objectStoreNames||e_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Q0(r){wd=r(wd)}function Y0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(id(this),e,...t);return e_.set(s,e.sort?e.sort():[e]),vi(s)}:W0().includes(r)?function(...e){return r.apply(id(this),e),vi(Zy.get(this))}:function(...e){return vi(r.apply(id(this),e))}}function J0(r){return typeof r=="function"?Y0(r):(r instanceof IDBTransaction&&K0(r),H0(r,q0())?new Proxy(r,wd):r)}function vi(r){if(r instanceof IDBRequest)return G0(r);if(rd.has(r))return rd.get(r);const e=J0(r);return e!==r&&(rd.set(r,e),Xd.set(e,r)),e}const id=r=>Xd.get(r);function X0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=vi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(vi(h.result),g.oldVersion,g.newVersion,vi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const Z0=["get","getKey","getAll","getAllKeys","count"],eT=["put","add","delete","clear"],sd=new Map;function hg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(sd.get(e))return sd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=eT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Z0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return sd.set(e,u),u}Q0(r=>({...r,get:(e,t,s)=>hg(e,t)||r.get(e,t,s),has:(e,t)=>!!hg(e,t)||r.has(e,t)}));/**
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
 */class tT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function nT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",dg="0.14.9";/**
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
 */const Nr=new Jd("@firebase/app"),rT="@firebase/app-compat",iT="@firebase/analytics-compat",sT="@firebase/analytics",oT="@firebase/app-check-compat",aT="@firebase/app-check",lT="@firebase/auth",uT="@firebase/auth-compat",cT="@firebase/database",hT="@firebase/data-connect",dT="@firebase/database-compat",fT="@firebase/functions",pT="@firebase/functions-compat",mT="@firebase/installations",gT="@firebase/installations-compat",yT="@firebase/messaging",_T="@firebase/messaging-compat",vT="@firebase/performance",ET="@firebase/performance-compat",wT="@firebase/remote-config",TT="@firebase/remote-config-compat",IT="@firebase/storage",ST="@firebase/storage-compat",AT="@firebase/firestore",RT="@firebase/ai",CT="@firebase/firestore-compat",xT="firebase",PT="12.10.0";/**
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
 */const Id="[DEFAULT]",kT={[Td]:"fire-core",[rT]:"fire-core-compat",[sT]:"fire-analytics",[iT]:"fire-analytics-compat",[aT]:"fire-app-check",[oT]:"fire-app-check-compat",[lT]:"fire-auth",[uT]:"fire-auth-compat",[cT]:"fire-rtdb",[hT]:"fire-data-connect",[dT]:"fire-rtdb-compat",[fT]:"fire-fn",[pT]:"fire-fn-compat",[mT]:"fire-iid",[gT]:"fire-iid-compat",[yT]:"fire-fcm",[_T]:"fire-fcm-compat",[vT]:"fire-perf",[ET]:"fire-perf-compat",[wT]:"fire-rc",[TT]:"fire-rc-compat",[IT]:"fire-gcs",[ST]:"fire-gcs-compat",[AT]:"fire-fst",[CT]:"fire-fst-compat",[RT]:"fire-vertex","fire-js":"fire-js",[xT]:"fire-js-all"};/**
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
 */const Hu=new Map,NT=new Map,Sd=new Map;function fg(r,e){try{r.container.addComponent(e)}catch(t){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function wo(r){const e=r.name;if(Sd.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;Sd.set(e,r);for(const t of Hu.values())fg(t,r);for(const t of NT.values())fg(t,r);return!0}function Zd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Pn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const bT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new el("app","Firebase",bT);/**
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
 */class DT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
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
 */const xo=PT;function t_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Id,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ei.create("bad-app-name",{appName:String(o)});if(t||(t=Qy()),!t)throw Ei.create("no-options");const u=Hu.get(o);if(u){if(cs(t,u.options)&&cs(s,u.config))return u;throw Ei.create("duplicate-app",{appName:o})}const h=new U0(o);for(const g of Sd.values())h.addComponent(g);const m=new DT(t,s,h);return Hu.set(o,m),m}function n_(r=Id){const e=Hu.get(r);if(!e&&r===Id&&Qy())return t_();if(!e)throw Ei.create("no-app",{appName:r});return e}function wi(r,e,t){let s=kT[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(h.join(" "));return}wo(new hs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const OT="firebase-heartbeat-database",VT=1,$a="firebase-heartbeat-store";let od=null;function r_(){return od||(od=X0(OT,VT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($a)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ei.create("idb-open",{originalErrorMessage:r.message})})),od}async function LT(r){try{const t=(await r_()).transaction($a),s=await t.objectStore($a).get(i_(r));return await t.done,s}catch(e){if(e instanceof Lr)Nr.warn(e.message);else{const t=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(t.message)}}}async function pg(r,e){try{const s=(await r_()).transaction($a,"readwrite");await s.objectStore($a).put(e,i_(r)),await s.done}catch(t){if(t instanceof Lr)Nr.warn(t.message);else{const s=Ei.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nr.warn(s.message)}}}function i_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const MT=1024,FT=30;class UT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=mg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>FT){const h=BT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mg(),{heartbeatsToSend:s,unsentEntries:o}=jT(this._heartbeatsCache.heartbeats),u=$u(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Nr.warn(t),""}}}function mg(){return new Date().toISOString().substring(0,10)}function jT(r,e=MT){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),gg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),gg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class zT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return C0()?x0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await LT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gg(r){return $u(JSON.stringify({version:2,heartbeats:r})).length}function BT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function $T(r){wo(new hs("platform-logger",e=>new tT(e),"PRIVATE")),wo(new hs("heartbeat",e=>new UT(e),"PRIVATE")),wi(Td,dg,r),wi(Td,dg,"esm2020"),wi("fire-js","")}$T("");function s_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HT=s_,o_=new el("auth","Firebase",s_());/**
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
 */const qu=new Jd("@firebase/auth");function qT(r,...e){qu.logLevel<=be.WARN&&qu.warn(`Auth (${xo}): ${r}`,...e)}function Du(r,...e){qu.logLevel<=be.ERROR&&qu.error(`Auth (${xo}): ${r}`,...e)}/**
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
 */function br(r,...e){throw ef(r,...e)}function er(r,...e){return ef(r,...e)}function a_(r,e,t){const s={...HT(),[e]:t};return new el("auth","Firebase",s).create(e,{appName:r.name})}function Ti(r){return a_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ef(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return o_.create(r,...e)}function Ee(r,e,...t){if(!r)throw ef(e,...t)}function Cr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Du(e),new Error(e)}function Dr(r,e){r||Cr(e)}/**
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
 */function Ad(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function WT(){return yg()==="http:"||yg()==="https:"}function yg(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function GT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WT()||I0()||"connection"in navigator)?navigator.onLine:!0}function KT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=E0()||S0()}get(){return GT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tf(r,e){Dr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class l_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const YT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JT=new nl(3e4,6e4);function hc(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Po(r,e,t,s,o={}){return u_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=tl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return T0()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Co(r.emulatorConfig.host)&&(_.credentials="include"),l_.fetch()(await h_(r,r.config.apiHost,t,m),_)})}async function u_(r,e,t){r._canInitEmulator=!1;const s={...QT,...e};try{const o=new XT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ru(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw a_(r,w,_);br(r,w)}}catch(o){if(o instanceof Lr)throw o;br(r,"network-request-failed",{message:String(o)})}}async function c_(r,e,t,s,o={}){const u=await Po(r,e,t,s,o);return"mfaPendingCredential"in u&&br(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function h_(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?tf(r.config,o):`${r.config.apiScheme}://${o}`;return YT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class XT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(er(this.auth,"network-request-failed")),JT.get())})}}function Ru(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=er(r,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function ZT(r,e){return Po(r,"POST","/v1/accounts:delete",e)}async function Wu(r,e){return Po(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ma(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eI(r,e=!1){const t=Dn(r),s=await t.getIdToken(e),o=nf(s);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ma(ad(o.auth_time)),issuedAtTime:Ma(ad(o.iat)),expirationTime:Ma(ad(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ad(r){return Number(r)*1e3}function nf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Du("JWT malformed, contained fewer than 3 sections"),null;try{const o=Gy(t);return o?JSON.parse(o):(Du("Failed to decode base64 JWT payload"),null)}catch(o){return Du("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function _g(r){const e=nf(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ha(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Lr&&tI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function tI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class nI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(r){var T;const e=r.auth,t=await r.getIdToken(),s=await Ha(r,Wu(e,{idToken:t}));Ee(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?d_(o.providerUserInfo):[],h=iI(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,w)}async function rI(r){const e=Dn(r);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function d_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function sI(r,e){const t=await u_(r,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await h_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Co(r.emulatorConfig.host)&&(g.credentials="include"),l_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oI(r,e){return Po(r,"POST","/v2/accounts:revokeToken",hc(r,e))}/**
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
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=_g(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await sI(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new go;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Ee(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
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
 */function fi(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class kn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new nI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Rd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ha(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eI(this,e)}reload(){return rI(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await Ha(this,ZT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:T,emailVerified:R,isAnonymous:z,providerData:q,stsTokenManager:$}=t;Ee(T&&$,e,"internal-error");const B=go.fromJSON(this.name,$);Ee(typeof T=="string",e,"internal-error"),fi(s,e.name),fi(o,e.name),Ee(typeof R=="boolean",e,"internal-error"),Ee(typeof z=="boolean",e,"internal-error"),fi(u,e.name),fi(h,e.name),fi(m,e.name),fi(g,e.name),fi(_,e.name),fi(w,e.name);const ae=new kn({uid:T,auth:e,email:o,emailVerified:R,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:B,createdAt:_,lastLoginAt:w});return q&&Array.isArray(q)&&(ae.providerData=q.map(ue=>({...ue}))),g&&(ae._redirectEventId=g),ae}static async _fromIdTokenResponse(e,t,s=!1){const o=new go;o.updateFromServerResponse(t);const u=new kn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?d_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new go;m.updateFromIdToken(s);const g=new kn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const vg=new Map;function xr(r){Dr(r instanceof Function,"Expected a class definition");let e=vg.get(r);return e?(Dr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,vg.set(r,e),e)}/**
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
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}f_.type="NONE";const Eg=f_;/**
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
 */function Ou(r,e,t){return`firebase:${r}:${e}:${t}`}class yo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ou(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ou("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wu(this.auth,{idToken:e}).catch(()=>{});return t?kn._fromGetAccountInfoResponse(this.auth,t,e):null}return kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new yo(xr(Eg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||xr(Eg);const h=Ou(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let T;if(typeof w=="string"){const R=await Wu(e,{idToken:w}).catch(()=>{});if(!R)break;T=await kn._fromGetAccountInfoResponse(e,R,w)}else T=kn._fromJSON(e,w);_!==u&&(m=T),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new yo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new yo(u,e,s))}}/**
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
 */function wg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v_(e))return"Blackberry";if(E_(e))return"Webos";if(m_(e))return"Safari";if((e.includes("chrome/")||g_(e))&&!e.includes("edge/"))return"Chrome";if(__(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function p_(r=Bt()){return/firefox\//i.test(r)}function m_(r=Bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g_(r=Bt()){return/crios\//i.test(r)}function y_(r=Bt()){return/iemobile/i.test(r)}function __(r=Bt()){return/android/i.test(r)}function v_(r=Bt()){return/blackberry/i.test(r)}function E_(r=Bt()){return/webos/i.test(r)}function rf(r=Bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function aI(r=Bt()){var e;return rf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function lI(){return A0()&&document.documentMode===10}function w_(r=Bt()){return rf(r)||__(r)||E_(r)||v_(r)||/windows phone/i.test(r)||y_(r)}/**
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
 */function T_(r,e=[]){let t;switch(r){case"Browser":t=wg(Bt());break;case"Worker":t=`${wg(Bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xo}/${s}`}/**
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
 */class uI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function cI(r,e={}){return Po(r,"GET","/v2/passwordPolicy",hc(r,e))}/**
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
 */const hI=6;class dI{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??hI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class fI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tg(this),this.idTokenSubscription=new Tg(this),this.beforeStateQueue=new uI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wu(this,{idToken:e}),s=await kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(Ti(this));const t=e?Dn(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cI(this),t=new dI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await oI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&qT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dc(r){return Dn(r)}class Tg{constructor(e){this.auth=e,this.observer=null,this.addObserver=D0(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pI(r){sf=r}function mI(r){return sf.loadJS(r)}function gI(){return sf.gapiScript}function yI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function _I(r,e){const t=Zd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(cs(u,e??{}))return o;br(o,"already-initialized")}return t.initialize({options:e})}function vI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function EI(r,e,t){const s=dc(r);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=I_(e),{host:h,port:m}=wI(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(cs(_,s.config.emulator)&&cs(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Co(h)?(Jy(`${u}//${h}${g}`),Xy("Auth",!0)):TI()}function I_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function wI(r){const e=I_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Ig(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Ig(h)}}}function Ig(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function TI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class S_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}/**
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
 */async function _o(r,e){return c_(r,"POST","/v1/accounts:signInWithIdp",hc(r,e))}/**
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
 */const II="http://localhost";class ds extends S_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):br("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new ds(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return _o(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,_o(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_o(e,t)}buildRequest(){const e={requestUri:II,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
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
 */class A_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rl extends A_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pi extends rl{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
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
 */class mi extends rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return mi.credential(t,s)}catch{return null}}}mi.GOOGLE_SIGN_IN_METHOD="google.com";mi.PROVIDER_ID="google.com";/**
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
 */class gi extends rl{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
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
 */class yi extends rl{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return yi.credential(t,s)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
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
 */async function SI(r,e){return c_(r,"POST","/v1/accounts:signUp",hc(r,e))}/**
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
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await kn._fromIdTokenResponse(e,s,o),h=Sg(s);return new Ai({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Sg(s);return new Ai({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Sg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function R_(r){var o;if(Pn(r.app))return Promise.reject(Ti(r));const e=dc(r);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Ai({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await SI(e,{returnSecureToken:!0}),s=await Ai._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class Ku extends Lr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ku(e,t,s,o)}}function C_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(r,u,e,s):u})}async function AI(r,e,t=!1){const s=await Ha(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ai._forOperation(r,"link",s)}/**
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
 */async function RI(r,e,t=!1){const{auth:s}=r;if(Pn(s.app))return Promise.reject(Ti(s));const o="reauthenticate";try{const u=await Ha(r,C_(s,o,e,r),t);Ee(u.idToken,s,"internal-error");const h=nf(u.idToken);Ee(h,s,"internal-error");const{sub:m}=h;return Ee(r.uid===m,s,"user-mismatch"),Ai._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&br(s,"user-mismatch"),u}}/**
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
 */async function CI(r,e,t=!1){if(Pn(r.app))return Promise.reject(Ti(r));const s="signIn",o=await C_(r,s,e),u=await Ai._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}function xI(r,e,t,s){return Dn(r).onIdTokenChanged(e,t,s)}function PI(r,e,t){return Dn(r).beforeAuthStateChanged(e,t)}function kI(r,e,t,s){return Dn(r).onAuthStateChanged(e,t,s)}const Qu="__sak";/**
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
 */class x_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NI=1e3,bI=10;class P_ extends x_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);lI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,bI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},NI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}P_.type="LOCAL";const DI=P_;/**
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
 */class k_ extends x_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}k_.type="SESSION";const N_=k_;/**
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
 */function OI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new fc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await OI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
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
 */function of(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class VI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=of("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===_)switch(R.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function tr(){return window}function LI(r){tr().location.href=r}/**
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
 */function b_(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function MI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function UI(){return b_()?self:null}/**
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
 */const D_="firebaseLocalStorageDb",jI=1,Yu="firebaseLocalStorage",O_="fbase_key";class il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pc(r,e){return r.transaction([Yu],e?"readwrite":"readonly").objectStore(Yu)}function zI(){const r=indexedDB.deleteDatabase(D_);return new il(r).toPromise()}function Cd(){const r=indexedDB.open(D_,jI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Yu,{keyPath:O_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Yu)?e(s):(s.close(),await zI(),e(await Cd()))})})}async function Ag(r,e,t){const s=pc(r,!0).put({[O_]:e,value:t});return new il(s).toPromise()}async function BI(r,e){const t=pc(r,!1).get(e),s=await new il(t).toPromise();return s===void 0?null:s.value}function Rg(r,e){const t=pc(r,!0).delete(e);return new il(t).toPromise()}const $I=800,HI=3;class V_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>HI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fc._getInstance(UI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await MI(),!this.activeServiceWorker)return;this.sender=new VI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await Ag(e,Qu,"1"),await Rg(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ag(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>BI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=pc(o,!1).getAll();return new il(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V_.type="LOCAL";const qI=V_;new nl(3e4,6e4);/**
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
 */function WI(r,e){return e?xr(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class af extends S_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GI(r){return CI(r.auth,new af(r),r.bypassAuthState)}function KI(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),RI(t,new af(r),r.bypassAuthState)}async function QI(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),AI(t,new af(r),r.bypassAuthState)}/**
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
 */class L_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GI;case"linkViaPopup":case"linkViaRedirect":return QI;case"reauthViaPopup":case"reauthViaRedirect":return KI;default:br(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YI=new nl(2e3,1e4);class mo extends L_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,mo.currentPopupAction&&mo.currentPopupAction.cancel(),mo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YI.get())};e()}}mo.currentPopupAction=null;/**
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
 */const JI="pendingRedirect",Vu=new Map;class XI extends L_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Vu.get(this.auth._key());if(!e){try{const s=await ZI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Vu.set(this.auth._key(),e)}return this.bypassAuthState||Vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZI(r,e){const t=nS(e),s=tS(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function eS(r,e){Vu.set(r._key(),e)}function tS(r){return xr(r._redirectPersistence)}function nS(r){return Ou(JI,r.config.apiKey,r.name)}async function rS(r,e,t=!1){if(Pn(r.app))return Promise.reject(Ti(r));const s=dc(r),o=WI(s,e),h=await new XI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const iS=600*1e3;class sS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!M_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(er(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cg(e))}saveEventToCache(e){this.cachedEventUids.add(Cg(e)),this.lastProcessedEventTime=Date.now()}}function Cg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function M_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return M_(r);default:return!1}}/**
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
 */async function aS(r,e={}){return Po(r,"GET","/v1/projects",e)}/**
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
 */const lS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uS=/^https?/;async function cS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await aS(r);for(const t of e)try{if(hS(t))return}catch{}br(r,"unauthorized-domain")}function hS(r){const e=Ad(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!uS.test(t))return!1;if(lS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const dS=new nl(3e4,6e4);function xg(){const r=tr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function fS(r){return new Promise((e,t)=>{var o,u,h;function s(){xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xg(),t(er(r,"network-request-failed"))},timeout:dS.get()})}if((u=(o=tr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=tr().gapi)!=null&&h.load)s();else{const m=yI("iframefcb");return tr()[m]=()=>{gapi.load?s():t(er(r,"network-request-failed"))},mI(`${gI()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Lu=null,e})}let Lu=null;function pS(r){return Lu=Lu||fS(r),Lu}/**
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
 */const mS=new nl(5e3,15e3),gS="__/auth/iframe",yS="emulator/auth/iframe",_S={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ES(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?tf(e,yS):`https://${r.config.authDomain}/${gS}`,s={apiKey:e.apiKey,appName:r.name,v:xo},o=vS.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${tl(s).slice(1)}`}async function wS(r){const e=await pS(r),t=tr().gapi;return Ee(t,r,"internal-error"),e.open({where:document.body,url:ES(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_S,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=er(r,"network-request-failed"),m=tr().setTimeout(()=>{u(h)},mS.get());function g(){tr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const TS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IS=500,SS=600,AS="_blank",RS="http://localhost";class Pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CS(r,e,t,s=IS,o=SS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...TS,width:s.toString(),height:o.toString(),top:u,left:h},_=Bt().toLowerCase();t&&(m=g_(_)?AS:t),p_(_)&&(e=e||RS,g.scrollbars="yes");const w=Object.entries(g).reduce((R,[z,q])=>`${R}${z}=${q},`,"");if(aI(_)&&m!=="_self")return xS(e||"",m),new Pg(null);const T=window.open(e||"",m,w);Ee(T,r,"popup-blocked");try{T.focus()}catch{}return new Pg(T)}function xS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const PS="__/auth/handler",kS="emulator/auth/handler",NS=encodeURIComponent("fac");async function kg(r,e,t,s,o,u){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:xo,eventId:o};if(e instanceof A_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",b0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof rl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),_=g?`#${NS}=${encodeURIComponent(g)}`:"";return`${bS(r)}?${tl(m).slice(1)}${_}`}function bS({config:r}){return r.emulator?tf(r,kS):`https://${r.authDomain}/${PS}`}/**
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
 */const ld="webStorageSupport";class DS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N_,this._completeRedirectFn=rS,this._overrideRedirectResult=eS}async _openPopup(e,t,s,o){var h;Dr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await kg(e,t,s,Ad(),o);return CS(e,u,of())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await kg(e,t,s,Ad(),o);return LI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await wS(e),s=new sS(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ld,{type:ld},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[ld];u!==void 0&&t(!!u),br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return w_()||m_()||rf()}}const OS=DS;var Ng="@firebase/auth",bg="1.12.1";/**
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
 */class VS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MS(r){wo(new hs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T_(r)},_=new fI(s,o,u,g);return vI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),wo(new hs("auth-internal",e=>{const t=dc(e.getProvider("auth").getImmediate());return(s=>new VS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wi(Ng,bg,LS(r)),wi(Ng,bg,"esm2020")}/**
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
 */const FS=300,US=Yy("authIdTokenMaxAge")||FS;let Dg=null;const jS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>US)return;const o=t==null?void 0:t.token;Dg!==o&&(Dg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zS(r=n_()){const e=Zd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=_I(r,{popupRedirectResolver:OS,persistence:[qI,DI,N_]}),s=Yy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=jS(u.toString());PI(t,h,()=>h(t.currentUser)),xI(t,m=>h(m))}}const o=Ky("auth");return o&&EI(t,`http://${o}`),t}function BS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}pI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=er("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",BS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MS("Browser");var $S="firebase",HS="12.10.0";/**
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
 */wi($S,HS,"app");var Og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ii,F_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,A){function x(){}x.prototype=A.prototype,k.F=A.prototype,k.prototype=new x,k.prototype.constructor=k,k.D=function(N,b,D){for(var I=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)I[Pe-2]=arguments[Pe];return A.prototype[b].apply(N,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,A,x){x||(x=0);const N=Array(16);if(typeof A=="string")for(var b=0;b<16;++b)N[b]=A.charCodeAt(x++)|A.charCodeAt(x++)<<8|A.charCodeAt(x++)<<16|A.charCodeAt(x++)<<24;else for(b=0;b<16;++b)N[b]=A[x++]|A[x++]<<8|A[x++]<<16|A[x++]<<24;A=k.g[0],x=k.g[1],b=k.g[2];let D=k.g[3],I;I=A+(D^x&(b^D))+N[0]+3614090360&4294967295,A=x+(I<<7&4294967295|I>>>25),I=D+(b^A&(x^b))+N[1]+3905402710&4294967295,D=A+(I<<12&4294967295|I>>>20),I=b+(x^D&(A^x))+N[2]+606105819&4294967295,b=D+(I<<17&4294967295|I>>>15),I=x+(A^b&(D^A))+N[3]+3250441966&4294967295,x=b+(I<<22&4294967295|I>>>10),I=A+(D^x&(b^D))+N[4]+4118548399&4294967295,A=x+(I<<7&4294967295|I>>>25),I=D+(b^A&(x^b))+N[5]+1200080426&4294967295,D=A+(I<<12&4294967295|I>>>20),I=b+(x^D&(A^x))+N[6]+2821735955&4294967295,b=D+(I<<17&4294967295|I>>>15),I=x+(A^b&(D^A))+N[7]+4249261313&4294967295,x=b+(I<<22&4294967295|I>>>10),I=A+(D^x&(b^D))+N[8]+1770035416&4294967295,A=x+(I<<7&4294967295|I>>>25),I=D+(b^A&(x^b))+N[9]+2336552879&4294967295,D=A+(I<<12&4294967295|I>>>20),I=b+(x^D&(A^x))+N[10]+4294925233&4294967295,b=D+(I<<17&4294967295|I>>>15),I=x+(A^b&(D^A))+N[11]+2304563134&4294967295,x=b+(I<<22&4294967295|I>>>10),I=A+(D^x&(b^D))+N[12]+1804603682&4294967295,A=x+(I<<7&4294967295|I>>>25),I=D+(b^A&(x^b))+N[13]+4254626195&4294967295,D=A+(I<<12&4294967295|I>>>20),I=b+(x^D&(A^x))+N[14]+2792965006&4294967295,b=D+(I<<17&4294967295|I>>>15),I=x+(A^b&(D^A))+N[15]+1236535329&4294967295,x=b+(I<<22&4294967295|I>>>10),I=A+(b^D&(x^b))+N[1]+4129170786&4294967295,A=x+(I<<5&4294967295|I>>>27),I=D+(x^b&(A^x))+N[6]+3225465664&4294967295,D=A+(I<<9&4294967295|I>>>23),I=b+(A^x&(D^A))+N[11]+643717713&4294967295,b=D+(I<<14&4294967295|I>>>18),I=x+(D^A&(b^D))+N[0]+3921069994&4294967295,x=b+(I<<20&4294967295|I>>>12),I=A+(b^D&(x^b))+N[5]+3593408605&4294967295,A=x+(I<<5&4294967295|I>>>27),I=D+(x^b&(A^x))+N[10]+38016083&4294967295,D=A+(I<<9&4294967295|I>>>23),I=b+(A^x&(D^A))+N[15]+3634488961&4294967295,b=D+(I<<14&4294967295|I>>>18),I=x+(D^A&(b^D))+N[4]+3889429448&4294967295,x=b+(I<<20&4294967295|I>>>12),I=A+(b^D&(x^b))+N[9]+568446438&4294967295,A=x+(I<<5&4294967295|I>>>27),I=D+(x^b&(A^x))+N[14]+3275163606&4294967295,D=A+(I<<9&4294967295|I>>>23),I=b+(A^x&(D^A))+N[3]+4107603335&4294967295,b=D+(I<<14&4294967295|I>>>18),I=x+(D^A&(b^D))+N[8]+1163531501&4294967295,x=b+(I<<20&4294967295|I>>>12),I=A+(b^D&(x^b))+N[13]+2850285829&4294967295,A=x+(I<<5&4294967295|I>>>27),I=D+(x^b&(A^x))+N[2]+4243563512&4294967295,D=A+(I<<9&4294967295|I>>>23),I=b+(A^x&(D^A))+N[7]+1735328473&4294967295,b=D+(I<<14&4294967295|I>>>18),I=x+(D^A&(b^D))+N[12]+2368359562&4294967295,x=b+(I<<20&4294967295|I>>>12),I=A+(x^b^D)+N[5]+4294588738&4294967295,A=x+(I<<4&4294967295|I>>>28),I=D+(A^x^b)+N[8]+2272392833&4294967295,D=A+(I<<11&4294967295|I>>>21),I=b+(D^A^x)+N[11]+1839030562&4294967295,b=D+(I<<16&4294967295|I>>>16),I=x+(b^D^A)+N[14]+4259657740&4294967295,x=b+(I<<23&4294967295|I>>>9),I=A+(x^b^D)+N[1]+2763975236&4294967295,A=x+(I<<4&4294967295|I>>>28),I=D+(A^x^b)+N[4]+1272893353&4294967295,D=A+(I<<11&4294967295|I>>>21),I=b+(D^A^x)+N[7]+4139469664&4294967295,b=D+(I<<16&4294967295|I>>>16),I=x+(b^D^A)+N[10]+3200236656&4294967295,x=b+(I<<23&4294967295|I>>>9),I=A+(x^b^D)+N[13]+681279174&4294967295,A=x+(I<<4&4294967295|I>>>28),I=D+(A^x^b)+N[0]+3936430074&4294967295,D=A+(I<<11&4294967295|I>>>21),I=b+(D^A^x)+N[3]+3572445317&4294967295,b=D+(I<<16&4294967295|I>>>16),I=x+(b^D^A)+N[6]+76029189&4294967295,x=b+(I<<23&4294967295|I>>>9),I=A+(x^b^D)+N[9]+3654602809&4294967295,A=x+(I<<4&4294967295|I>>>28),I=D+(A^x^b)+N[12]+3873151461&4294967295,D=A+(I<<11&4294967295|I>>>21),I=b+(D^A^x)+N[15]+530742520&4294967295,b=D+(I<<16&4294967295|I>>>16),I=x+(b^D^A)+N[2]+3299628645&4294967295,x=b+(I<<23&4294967295|I>>>9),I=A+(b^(x|~D))+N[0]+4096336452&4294967295,A=x+(I<<6&4294967295|I>>>26),I=D+(x^(A|~b))+N[7]+1126891415&4294967295,D=A+(I<<10&4294967295|I>>>22),I=b+(A^(D|~x))+N[14]+2878612391&4294967295,b=D+(I<<15&4294967295|I>>>17),I=x+(D^(b|~A))+N[5]+4237533241&4294967295,x=b+(I<<21&4294967295|I>>>11),I=A+(b^(x|~D))+N[12]+1700485571&4294967295,A=x+(I<<6&4294967295|I>>>26),I=D+(x^(A|~b))+N[3]+2399980690&4294967295,D=A+(I<<10&4294967295|I>>>22),I=b+(A^(D|~x))+N[10]+4293915773&4294967295,b=D+(I<<15&4294967295|I>>>17),I=x+(D^(b|~A))+N[1]+2240044497&4294967295,x=b+(I<<21&4294967295|I>>>11),I=A+(b^(x|~D))+N[8]+1873313359&4294967295,A=x+(I<<6&4294967295|I>>>26),I=D+(x^(A|~b))+N[15]+4264355552&4294967295,D=A+(I<<10&4294967295|I>>>22),I=b+(A^(D|~x))+N[6]+2734768916&4294967295,b=D+(I<<15&4294967295|I>>>17),I=x+(D^(b|~A))+N[13]+1309151649&4294967295,x=b+(I<<21&4294967295|I>>>11),I=A+(b^(x|~D))+N[4]+4149444226&4294967295,A=x+(I<<6&4294967295|I>>>26),I=D+(x^(A|~b))+N[11]+3174756917&4294967295,D=A+(I<<10&4294967295|I>>>22),I=b+(A^(D|~x))+N[2]+718787259&4294967295,b=D+(I<<15&4294967295|I>>>17),I=x+(D^(b|~A))+N[9]+3951481745&4294967295,k.g[0]=k.g[0]+A&4294967295,k.g[1]=k.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,k.g[2]=k.g[2]+b&4294967295,k.g[3]=k.g[3]+D&4294967295}s.prototype.v=function(k,A){A===void 0&&(A=k.length);const x=A-this.blockSize,N=this.C;let b=this.h,D=0;for(;D<A;){if(b==0)for(;D<=x;)o(this,k,D),D+=this.blockSize;if(typeof k=="string"){for(;D<A;)if(N[b++]=k.charCodeAt(D++),b==this.blockSize){o(this,N),b=0;break}}else for(;D<A;)if(N[b++]=k[D++],b==this.blockSize){o(this,N),b=0;break}}this.h=b,this.o+=A},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var A=1;A<k.length-8;++A)k[A]=0;A=this.o*8;for(var x=k.length-8;x<k.length;++x)k[x]=A&255,A/=256;for(this.v(k),k=Array(16),A=0,x=0;x<4;++x)for(let N=0;N<32;N+=8)k[A++]=this.g[x]>>>N&255;return k};function u(k,A){var x=m;return Object.prototype.hasOwnProperty.call(x,k)?x[k]:x[k]=A(k)}function h(k,A){this.h=A;const x=[];let N=!0;for(let b=k.length-1;b>=0;b--){const D=k[b]|0;N&&D==A||(x[b]=D,N=!1)}this.g=x}var m={};function g(k){return-128<=k&&k<128?u(k,function(A){return new h([A|0],A<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return T;if(k<0)return B(_(-k));const A=[];let x=1;for(let N=0;k>=x;N++)A[N]=k/x|0,x*=4294967296;return new h(A,0)}function w(k,A){if(k.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(k.charAt(0)=="-")return B(w(k.substring(1),A));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=_(Math.pow(A,8));let N=T;for(let D=0;D<k.length;D+=8){var b=Math.min(8,k.length-D);const I=parseInt(k.substring(D,D+b),A);b<8?(b=_(Math.pow(A,b)),N=N.j(b).add(_(I))):(N=N.j(x),N=N.add(_(I)))}return N}var T=g(0),R=g(1),z=g(16777216);r=h.prototype,r.m=function(){if($(this))return-B(this).m();let k=0,A=1;for(let x=0;x<this.g.length;x++){const N=this.i(x);k+=(N>=0?N:4294967296+N)*A,A*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(q(this))return"0";if($(this))return"-"+B(this).toString(k);const A=_(Math.pow(k,6));var x=this;let N="";for(;;){const b=pe(x,A).g;x=ae(x,b.j(A));let D=((x.g.length>0?x.g[0]:x.h)>>>0).toString(k);if(x=b,q(x))return D+N;for(;D.length<6;)D="0"+D;N=D+N}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function q(k){if(k.h!=0)return!1;for(let A=0;A<k.g.length;A++)if(k.g[A]!=0)return!1;return!0}function $(k){return k.h==-1}r.l=function(k){return k=ae(this,k),$(k)?-1:q(k)?0:1};function B(k){const A=k.g.length,x=[];for(let N=0;N<A;N++)x[N]=~k.g[N];return new h(x,~k.h).add(R)}r.abs=function(){return $(this)?B(this):this},r.add=function(k){const A=Math.max(this.g.length,k.g.length),x=[];let N=0;for(let b=0;b<=A;b++){let D=N+(this.i(b)&65535)+(k.i(b)&65535),I=(D>>>16)+(this.i(b)>>>16)+(k.i(b)>>>16);N=I>>>16,D&=65535,I&=65535,x[b]=I<<16|D}return new h(x,x[x.length-1]&-2147483648?-1:0)};function ae(k,A){return k.add(B(A))}r.j=function(k){if(q(this)||q(k))return T;if($(this))return $(k)?B(this).j(B(k)):B(B(this).j(k));if($(k))return B(this.j(B(k)));if(this.l(z)<0&&k.l(z)<0)return _(this.m()*k.m());const A=this.g.length+k.g.length,x=[];for(var N=0;N<2*A;N++)x[N]=0;for(N=0;N<this.g.length;N++)for(let b=0;b<k.g.length;b++){const D=this.i(N)>>>16,I=this.i(N)&65535,Pe=k.i(b)>>>16,rt=k.i(b)&65535;x[2*N+2*b]+=I*rt,ue(x,2*N+2*b),x[2*N+2*b+1]+=D*rt,ue(x,2*N+2*b+1),x[2*N+2*b+1]+=I*Pe,ue(x,2*N+2*b+1),x[2*N+2*b+2]+=D*Pe,ue(x,2*N+2*b+2)}for(k=0;k<A;k++)x[k]=x[2*k+1]<<16|x[2*k];for(k=A;k<2*A;k++)x[k]=0;return new h(x,0)};function ue(k,A){for(;(k[A]&65535)!=k[A];)k[A+1]+=k[A]>>>16,k[A]&=65535,A++}function ne(k,A){this.g=k,this.h=A}function pe(k,A){if(q(A))throw Error("division by zero");if(q(k))return new ne(T,T);if($(k))return A=pe(B(k),A),new ne(B(A.g),B(A.h));if($(A))return A=pe(k,B(A)),new ne(B(A.g),A.h);if(k.g.length>30){if($(k)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var x=R,N=A;N.l(k)<=0;)x=Ce(x),N=Ce(N);var b=Te(x,1),D=Te(N,1);for(N=Te(N,2),x=Te(x,2);!q(N);){var I=D.add(N);I.l(k)<=0&&(b=b.add(x),D=I),N=Te(N,1),x=Te(x,1)}return A=ae(k,b.j(A)),new ne(b,A)}for(b=T;k.l(A)>=0;){for(x=Math.max(1,Math.floor(k.m()/A.m())),N=Math.ceil(Math.log(x)/Math.LN2),N=N<=48?1:Math.pow(2,N-48),D=_(x),I=D.j(A);$(I)||I.l(k)>0;)x-=N,D=_(x),I=D.j(A);q(D)&&(D=R),b=b.add(D),k=ae(k,I)}return new ne(b,k)}r.B=function(k){return pe(this,k).h},r.and=function(k){const A=Math.max(this.g.length,k.g.length),x=[];for(let N=0;N<A;N++)x[N]=this.i(N)&k.i(N);return new h(x,this.h&k.h)},r.or=function(k){const A=Math.max(this.g.length,k.g.length),x=[];for(let N=0;N<A;N++)x[N]=this.i(N)|k.i(N);return new h(x,this.h|k.h)},r.xor=function(k){const A=Math.max(this.g.length,k.g.length),x=[];for(let N=0;N<A;N++)x[N]=this.i(N)^k.i(N);return new h(x,this.h^k.h)};function Ce(k){const A=k.g.length+1,x=[];for(let N=0;N<A;N++)x[N]=k.i(N)<<1|k.i(N-1)>>>31;return new h(x,k.h)}function Te(k,A){const x=A>>5;A%=32;const N=k.g.length-x,b=[];for(let D=0;D<N;D++)b[D]=A>0?k.i(D+x)>>>A|k.i(D+x+1)<<32-A:k.i(D+x);return new h(b,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,F_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ii=h}).apply(typeof Og<"u"?Og:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U_,Na,j_,Mu,xd,z_,B_,$_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in y))break e;y=y[M]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&y.push([E,p[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function w(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function T(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(E,M,j){for(var ee=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)ee[Ie-2]=arguments[Ie];return p.prototype[M].apply(E,ee)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function q(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=l.length||0;const j=M.length||0;l.length=y+j;for(let ee=0;ee<j;ee++)l[y+ee]=M[ee]}else l.push(M)}}class ${constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function B(l){h.setTimeout(()=>{throw l},0)}function ae(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ue{constructor(){this.h=this.g=null}add(p,y){const E=ne.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var ne=new $(()=>new pe,l=>l.reset());class pe{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Te=!1,k=new ue,A=()=>{const l=Promise.resolve(void 0);Ce=()=>{l.then(x)}};function x(){for(var l;l=ae();){try{l.h.call(l.g)}catch(y){B(y)}var p=ne;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Te=!1}function N(){this.u=this.u,this.C=this.C}N.prototype.u=!1,N.prototype.dispose=function(){this.u||(this.u=!0,this.N())},N.prototype[Symbol.dispose]=function(){this.dispose()},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l})();function I(l){return/^[\s\xa0]*$/.test(l)}function Pe(l,p){b.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}T(Pe,b),Pe.prototype.init=function(l,p){const y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Pe.Z.h.call(this)},Pe.prototype.h=function(){Pe.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),vt=0;function We(l,p,y,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=M,this.key=++vt,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function fe(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function se(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function V(l){const p={};for(const y in l)p[y]=l[y];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(l,p){let y,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(y in E)l[y]=E[y];for(let j=0;j<W.length;j++)y=W[j],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function Re(l){this.src=l,this.g={},this.h=0}Re.prototype.add=function(l,p,y,E,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const ee=Ne(l,p,E,M);return ee>-1?(p=l[ee],y||(p.fa=!1)):(p=new We(p,this.src,j,!!E,M),p.fa=y,l.push(p)),p};function ke(l,p){const y=p.type;if(y in l.g){var E=l.g[y],M=Array.prototype.indexOf.call(E,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(te(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Ne(l,p,y,E){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==E)return M}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Me={};function He(l,p,y,E,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)He(l,p[j],y,E,M);return null}return y=Vo(y),l&&l[rt]?l.J(p,y,m(E)?!!E.capture:!1,M):$t(l,p,y,!1,E,M)}function $t(l,p,y,E,M,j){if(!p)throw Error("Invalid event type");const ee=m(M)?!!M.capture:!!M;let Ie=Is(l);if(Ie||(l[ze]=Ie=new Re(l)),y=Ie.add(p,y,E,ee,j),y.proxy)return y;if(E=ws(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)D||(M=ee),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(Ts(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ws(){function l(y){return p.call(l.src,l.listener,y)}const p=cl;return l}function Oo(l,p,y,E,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)Oo(l,p[j],y,E,M);else E=m(E)?!!E.capture:!!E,y=Vo(y),l&&l[rt]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],y=Ne(p,y,E,M),y>-1&&(te(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=Is(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ne(p,y,E,M)),(y=l>-1?p[l]:null)&&Mr(y))}function Mr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[rt])ke(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(Ts(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Is(p))?(ke(y,l),y.h==0&&(y.src=null,p[ze]=null)):te(l)}}}function Ts(l){return l in Me?Me[l]:Me[l]="on"+l}function cl(l,p){if(l.da)l=!0;else{p=new Pe(p,this);const y=l.listener,E=l.ha||l.src;l.fa&&Mr(l),l=y.call(E,p)}return l}function Is(l){return l=l[ze],l instanceof Re?l:null}var bi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vo(l){return typeof l=="function"?l:(l[bi]||(l[bi]=function(p){return l.handleEvent(p)}),l[bi])}function ct(){N.call(this),this.i=new Re(this),this.M=this,this.G=null}T(ct,N),ct.prototype[rt]=!0,ct.prototype.removeEventListener=function(l,p,y,E){Oo(this,l,p,y,E)};function ot(l,p){var y,E=l.G;if(E)for(y=[];E;E=E.G)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new b(p,l);else if(p instanceof b)p.target=p.target||l;else{var M=p;p=new b(E,l),Ae(p,M)}M=!0;let j,ee;if(y)for(ee=y.length-1;ee>=0;ee--)j=p.g=y[ee],M=vn(j,E,!0,p)&&M;if(j=p.g=l,M=vn(j,E,!0,p)&&M,M=vn(j,E,!1,p)&&M,y)for(ee=0;ee<y.length;ee++)j=p.g=y[ee],M=vn(j,E,!1,p)&&M}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let E=0;E<y.length;E++)te(y[E]);delete l.g[p],l.h--}}this.G=null},ct.prototype.J=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},ct.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function vn(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const ee=p[j];if(ee&&!ee.da&&ee.capture==y){const Ie=ee.listener,at=ee.ha||ee.src;ee.fa&&ke(l.i,ee),M=Ie.call(at,E)!==!1&&M}}return M&&!E.defaultPrevented}function Lo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Mo(l){l.g=Lo(()=>{l.g=null,l.i&&(l.i=!1,Mo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class hl extends N{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Mo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fr(l){N.call(this),this.h=l,this.g={}}T(Fr,N);var Fo=[];function Ss(l){fe(l.g,function(p,y){this.g.hasOwnProperty(y)&&Mr(p)},l),l.g={}}Fr.prototype.N=function(){Fr.Z.N.call(this),Ss(this)},Fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ur=h.JSON.stringify,dl=h.JSON.parse,Di=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function jr(){}function fl(){}var zr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function As(){b.call(this,"d")}T(As,b);function Uo(){b.call(this,"c")}T(Uo,b);var En={},Rs=null;function Br(){return Rs=Rs||new ct}En.Ia="serverreachability";function Cs(l){b.call(this,En.Ia,l)}T(Cs,b);function lr(l){const p=Br();ot(p,new Cs(p))}En.STAT_EVENT="statevent";function ur(l,p){b.call(this,En.STAT_EVENT,l),this.stat=p}T(ur,b);function it(l){const p=Br();ot(p,new ur(p,l))}En.Ja="timingevent";function jo(l,p){b.call(this,En.Ja,l),this.size=p}T(jo,b);function $r(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Hr(){this.g=!0}Hr.prototype.ua=function(){this.g=!1};function pl(l,p,y,E,M,j){l.info(function(){if(l.g)if(j){var ee="",Ie=j.split("&");for(let $e=0;$e<Ie.length;$e++){var at=Ie[$e].split("=");if(at.length>1){const ht=at[0];at=at[1];const sn=ht.split("_");ee=sn.length>=2&&sn[1]=="type"?ee+(ht+"="+at+"&"):ee+(ht+"=redacted&")}}}else ee=null;else ee=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+y+`
`+ee})}function ml(l,p,y,E,M,j,ee){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+y+`
`+j+" "+ee})}function On(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Oi(l,y)+(E?" "+E:"")})}function gl(l,p){l.info(function(){return"TIMEOUT: "+p})}Hr.prototype.info=function(){};function Oi(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var y=j[l];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let ee=1;ee<E.length;ee++)E[ee]=""}}}}return Ur(j)}catch{return p}}var qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yl;function cr(){}T(cr,jr),cr.prototype.g=function(){return new XMLHttpRequest},yl=new cr;function Vn(l){return encodeURIComponent(String(l))}function xs(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function un(l,p,y,E){this.j=l,this.i=p,this.l=y,this.S=E||1,this.V=new Fr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _l}function _l(){this.i=null,this.g="",this.h=!1}var vl={},zo={};function wn(l,p,y){l.M=1,l.A=dr(cn(p)),l.u=y,l.R=!0,Bo(l,null)}function Bo(l,p){l.F=Date.now(),Vi(l),l.B=cn(l.A);var y=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Xo(y.i,"t",E),l.C=0,y=l.j.L,l.h=new _l,l.g=Pl(l.j,y?p:null,!l.u),l.P>0&&(l.O=new hl(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Fo[0]=M.toString()),M=Fo);for(let j=0;j<M.length;j++){const ee=He(y,M[j],E||p.handleEvent,!1,p.h||p);if(!ee)break;p.g[ee.key]=ee}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),lr(),pl(l.i,l.v,l.B,l.l,l.S,l.u)}un.prototype.ba=function(l){l=l.target;const p=this.O;p&&Bn(l)==3?p.j():this.Y(l)},un.prototype.Y=function(l){try{if(l==this.g)e:{const Ie=Bn(this.g),at=this.g.ya(),$e=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||Cl(this.g)))){this.K||Ie!=4||at==7||(at==8||$e<=0?lr(3):lr(2)),Ps(this);var p=this.g.ca();this.X=p;var y=El(this);if(this.o=p==200,ml(this.i,this.v,this.B,this.l,this.S,Ie,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(E)){var j=E;break t}}j=null}if(l=j)On(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,l);else{this.o=!1,this.m=3,it(12),hr(this),Li(this);break e}}if(this.R){l=!0;let ht;for(;!this.K&&this.C<y.length;)if(ht=Tl(this,y),ht==zo){Ie==4&&(this.m=4,it(14),l=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==vl){this.m=4,it(15),On(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else On(this.i,this.l,ht,null),Ke(this,ht);if(wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||y.length!=0||this.h.h||(this.m=1,it(16),l=!1),this.o=this.o&&l,!l)On(this.i,this.l,y,"[Invalid Chunked Response]"),hr(this),Li(this);else if(y.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),qi(ee),ee.P=!0,it(11))}}else On(this.i,this.l,y,null),Ke(this,y);Ie==4&&hr(this),this.o&&!this.K&&(Ie==4?Us(this.j,this):(this.o=!1,Vi(this)))}else ea(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),hr(this),Li(this)}}}catch{}finally{}};function El(l){if(!wl(l))return l.g.la();const p=Cl(l.g);if(p==="")return"";let y="";const E=p.length,M=Bn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return hr(l),Li(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<E;j++)l.h.h=!0,y+=l.h.i.decode(p[j],{stream:!(M&&j==E-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function wl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Tl(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?zo:(y=Number(p.substring(y,E)),isNaN(y)?vl:(E+=1,E+y>p.length?zo:(p=p.slice(E,E+y),l.C=E+y,p)))}un.prototype.cancel=function(){this.K=!0,hr(this)};function Vi(l){l.T=Date.now()+l.H,$o(l,l.H)}function $o(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=$r(_(l.aa,l),p)}function Ps(l){l.D&&(h.clearTimeout(l.D),l.D=null)}un.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(gl(this.i,this.B),this.M!=2&&(lr(),it(17)),hr(this),this.m=2,Li(this)):$o(this,this.T-l)};function Li(l){l.j.I==0||l.K||Us(l.j,l)}function hr(l){Ps(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Ss(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ke(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||qo(y.h,l))){if(!l.L&&qo(y.h,l)&&y.I==3){try{var E=y.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)Fs(y),nn(y);else break e;qn(y),it(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=$r(_(y.Va,y),6e3));Mi(y.h)<=1&&y.ta&&(y.ta=void 0)}else rn(y,11)}else if((l.L||y.g==l)&&Fs(y),!I(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let $e=M[p];const ht=$e[0];if(!(ht<=y.K))if(y.K=ht,$e=$e[1],y.I==2)if($e[0]=="c"){y.M=$e[1],y.ba=$e[2];const sn=$e[3];sn!=null&&(y.ka=sn,y.j.info("VER="+y.ka));const yr=$e[4];yr!=null&&(y.za=yr,y.j.info("SVER="+y.za));const Wn=$e[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(E=1.5*Wn,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Gn=l.g;if(Gn){const Bs=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var j=E.h;j.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ns(j,j.h),j.h=null))}if(E.G){const ra=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;ra&&(E.wa=ra,je(E.J,E.G,ra))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var ee=l;if(E.na=na(E,E.L?E.ba:null,E.W),ee.L){Fi(E.h,ee);var Ie=ee,at=E.O;at&&(Ie.H=at),Ie.D&&(Ps(Ie),Vi(Ie)),E.g=ee}else Ot(E);y.i.length>0&&gr(y)}else $e[0]!="stop"&&$e[0]!="close"||rn(y,7);else y.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?rn(y,7):Ls(y):$e[0]!="noop"&&y.l&&y.l.qa($e),y.A=0)}}lr(4)}catch{}}var xc=class{constructor(l,p){this.g=l,this.map=p}};function ks(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ho(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Mi(l){return l.h?1:l.g?l.g.size:0}function qo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ns(l,p){l.g?l.g.add(p):l.h=p}function Fi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}ks.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Zt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return z(l.i)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const E=l[y].indexOf("=");let M,j=null;E>=0?(M=l[y].substring(0,E),j=l[y].substring(E+1)):M=l[y],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ln(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Ln?(this.l=l.l,Ui(this,l.j),this.o=l.o,this.g=l.g,Mn(this,l.u),this.h=l.h,Gr(this,Zo(l.i)),this.m=l.m):l&&(p=String(l).match(Il))?(this.l=!1,Ui(this,p[1]||"",!0),this.o=ji(p[2]||""),this.g=ji(p[3]||"",!0),Mn(this,p[4]),this.h=ji(p[5]||"",!0),Gr(this,p[6]||"",!0),this.m=ji(p[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}Ln.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(zi(p,Go,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(zi(p,Go,!0),"@"),l.push(Vn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(zi(y,y.charAt(0)=="/"?Bi:Ko,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",zi(y,Qo)),l.join("")},Ln.prototype.resolve=function(l){const p=cn(this);let y=!!l.j;y?Ui(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var E=l.h;if(y)Mn(p,l.u);else if(y=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let ee=0;ee<M.length;){const Ie=M[ee++];Ie=="."?E&&ee==M.length&&j.push(""):Ie==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&ee==M.length&&j.push("")):(j.push(Ie),E=!0)}E=j.join("/")}else E=M}return y?p.h=E:y=l.i.toString()!=="",y?Gr(p,Zo(l.i)):y=!!l.m,y&&(p.m=l.m),p};function cn(l){return new Ln(l)}function Ui(l,p,y){l.j=y?ji(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Mn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Gr(l,p,y){p instanceof Ve?(l.i=p,Ds(l.i,l.l)):(y||(p=zi(p,Pc)),l.i=new Ve(p,l.l))}function je(l,p,y){l.i.set(p,y)}function dr(l){return je(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function ji(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function zi(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,Wo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Wo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Go=/[#\/\?@]/g,Ko=/[#\?:]/g,Bi=/[#\?]/g,Pc=/[#\?@]/g,Qo=/#/g;function Ve(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Fn(l){l.g||(l.g=new Map,l.h=0,l.i&&en(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Ve.prototype,r.add=function(l,p){Fn(this),this.i=null,l=Un(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Yo(l,p){Fn(l),p=Un(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function bs(l,p){return Fn(l),p=Un(l,p),l.g.has(p)}r.forEach=function(l,p){Fn(this),this.g.forEach(function(y,E){y.forEach(function(M){l.call(p,M,E,this)},this)},this)};function Jo(l,p){Fn(l);let y=[];if(typeof p=="string")bs(l,p)&&(y=y.concat(l.g.get(Un(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}r.set=function(l,p){return Fn(this),this.i=null,l=Un(this,l),bs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=Jo(this,l),l.length>0?String(l[0]):p):p};function Xo(l,p,y){Yo(l,p),y.length>0&&(l.i=null,l.g.set(Un(l,p),z(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var y=p[E];const M=Vn(y);y=Jo(this,y);for(let j=0;j<y.length;j++){let ee=M;y[j]!==""&&(ee+="="+Vn(y[j])),l.push(ee)}}return this.i=l.join("&")};function Zo(l){const p=new Ve;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Un(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ds(l,p){p&&!l.j&&(Fn(l),l.i=null,l.g.forEach(function(y,E){const M=E.toLowerCase();E!=M&&(Yo(this,E),Xo(this,M,y))},l)),l.j=p}function jn(l,p){const y=new Hr;if(h.Image){const E=new Image;E.onload=w(Rt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=w(Rt,y,"TestLoadImage: error",!1,p,E),E.onabort=w(Rt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(Rt,y,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function zn(l,p){const y=new Hr,E=new AbortController,M=setTimeout(()=>{E.abort(),Rt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?Rt(y,"TestPingServer: ok",!0,p):Rt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Rt(y,"TestPingServer: error",!1,p)})}function Rt(l,p,y,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(y)}catch{}}function $i(){this.g=new Di}function fr(l){this.i=l.Sb||null,this.h=l.ab||!1}T(fr,jr),fr.prototype.g=function(){return new tn(this.i,this.h)};function tn(l,p){ct.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(tn,ct),r=tn.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,Tn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Kr(this):Tn(this),this.readyState==3&&Sl(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,Kr(this))},r.Na=function(l){this.g&&(this.response=l,Kr(this))},r.ga=function(){this.g&&Kr(this)};function Kr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Tn(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function Tn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Al(l){let p="";return fe(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Os(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Al(y),typeof l=="string"?y!=null&&Vn(y):je(l,p,y))}function qe(l){ct.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(qe,ct);var Rl=/^https?$/i,kc=["POST","PUT"];r=qe.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yl.g(),this.g.onreadystatechange=R(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){Qr(this,j);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)y.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())y.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(kc,p,void 0)>=0)||E||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ee]of y)this.g.setRequestHeader(j,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){Qr(this,j)}};function Qr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Yr(l),mr(l)}function Yr(l){l.A||(l.A=!0,ot(l,"complete"),ot(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,ot(this,"complete"),ot(this,"abort"),mr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),qe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?pr(this):this.Xa())},r.Xa=function(){pr(this)};function pr(l){if(l.h&&typeof u<"u"){if(l.v&&Bn(l)==4)setTimeout(l.Ca.bind(l),0);else if(ot(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=j===0){let ee=String(l.D).match(Il)[1]||null;!ee&&h.self&&h.self.location&&(ee=h.self.location.protocol.slice(0,-1)),E=!Rl.test(ee?ee.toLowerCase():"")}y=E}if(y)ot(l,"complete"),ot(l,"success");else{l.o=6;try{var M=Bn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Yr(l)}}finally{mr(l)}}}}function mr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||ot(l,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}r.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),dl(p)}};function Cl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ea(l){const p={};l=(l.g&&Bn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(I(l[E]))continue;var y=xs(l[E]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[M]||[];p[M]=j,j.push(y)}se(p,function(E){return E.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Vs(l){this.za=0,this.i=[],this.j=new Hr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$n("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$n("baseRetryDelayMs",5e3,l),this.Za=$n("retryDelaySeedMs",1e4,l),this.Ta=$n("forwardChannelMaxRetries",2,l),this.va=$n("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new ks(l&&l.concurrentRequestLimit),this.Ba=new $i,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Vs.prototype,r.ka=8,r.I=1,r.connect=function(l,p,y,E){it(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=na(this,null,this.W),gr(this)};function Ls(l){if(Ms(l),l.I==3){var p=l.V++,y=cn(l.J);if(je(y,"SID",l.M),je(y,"RID",p),je(y,"TYPE","terminate"),Hn(l,y),p=new un(l,l.j,p),p.M=2,p.A=dr(cn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Pl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Vi(p)}Wi(l)}function nn(l){l.g&&(qi(l),l.g.cancel(),l.g=null)}function Ms(l){nn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Fs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function gr(l){if(!Ho(l.h)&&!l.m){l.m=!0;var p=l.Ea;Ce||A(),Te||(Ce(),Te=!0),k.add(p,l),l.D=0}}function xl(l,p){return Mi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=$r(_(l.Ea,l,p),js(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new un(this,this.j,l);let j=this.o;if(this.U&&(j?(j=V(j),Ae(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ta(this,M,p),y=cn(this.J),je(y,"RID",l),je(y,"CVER",22),this.G&&je(y,"X-HTTP-Session-Id",this.G),Hn(this,y),j&&(this.R?p="headers="+Vn(Al(j))+"&"+p:this.u&&Os(y,this.u,j)),Ns(this.h,M),this.Ra&&je(y,"TYPE","init"),this.S?(je(y,"$req",p),je(y,"SID","null"),M.U=!0,wn(M,y,null)):wn(M,y,p),this.I=2}}else this.I==3&&(l?Hi(this,l):this.i.length==0||Ho(this.h)||Hi(this))};function Hi(l,p){var y;p?y=p.l:y=l.V++;const E=cn(l.J);je(E,"SID",l.M),je(E,"RID",y),je(E,"AID",l.K),Hn(l,E),l.u&&l.o&&Os(E,l.u,l.o),y=new un(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=ta(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ns(l.h,y),wn(y,E,p)}function Hn(l,p){l.H&&fe(l.H,function(y,E){je(p,E,y)}),l.l&&fe({},function(y,E){je(p,E,y)})}function ta(l,p,y){y=Math.min(l.i.length,y);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ie=-1;for(;;){const at=["count="+y];Ie==-1?y>0?(Ie=M[0].g,at.push("ofs="+Ie)):Ie=0:at.push("ofs="+Ie);let $e=!0;for(let ht=0;ht<y;ht++){var j=M[ht].g;const sn=M[ht].map;if(j-=Ie,j<0)Ie=Math.max(0,M[ht].g-100),$e=!1;else try{j="req"+j+"_"||"";try{var ee=sn instanceof Map?sn:Object.entries(sn);for(const[yr,Wn]of ee){let Gn=Wn;m(Wn)&&(Gn=Ur(Wn)),at.push(j+yr+"="+encodeURIComponent(Gn))}}catch(yr){throw at.push(j+"type="+encodeURIComponent("_badmap")),yr}}catch{E&&E(sn)}}if($e){ee=at.join("&");break e}}ee=void 0}return l=l.i.splice(0,y),p.G=l,ee}function Ot(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Ce||A(),Te||(Ce(),Te=!0),k.add(p,l),l.A=0}}function qn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=$r(_(l.Da,l),js(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,Jr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=$r(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),nn(this),Jr(this))};function qi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Jr(l){l.g=new un(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=cn(l.na);je(p,"RID","rpc"),je(p,"SID",l.M),je(p,"AID",l.K),je(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&je(p,"TO",l.ia),je(p,"TYPE","xmlhttp"),Hn(l,p),l.u&&l.o&&Os(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=dr(cn(p)),y.u=null,y.R=!0,Bo(y,l)}r.Va=function(){this.C!=null&&(this.C=null,nn(this),qn(this),it(19))};function Fs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Us(l,p){var y=null;if(l.g==p){Fs(l),qi(l),l.g=null;var E=2}else if(qo(l.h,p))y=p.G,Fi(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=Br(),ot(E,new jo(E,y)),gr(l)}else Ot(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&xl(l,p)||E==2&&qn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),M){case 1:rn(l,5);break;case 4:rn(l,10);break;case 3:rn(l,6);break;default:rn(l,2)}}}function js(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function rn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),E=l.Ua;const M=!E;E=new Ln(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Ui(E,"https"),dr(E),M?jn(E.toString(),y):zn(E.toString(),y)}else it(2);l.I=0,l.l&&l.l.pa(p),Wi(l),Ms(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Wi(l){if(l.I=0,l.ja=[],l.l){const p=Zt(l.h);(p.length!=0||l.i.length!=0)&&(q(l.ja,p),q(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function na(l,p,y){var E=y instanceof Ln?cn(y):new Ln(y);if(E.g!="")p&&(E.g=p+"."+E.g),Mn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new Ln(null);E&&Ui(j,E),p&&(j.g=p),M&&Mn(j,M),y&&(j.h=y),E=j}return y=l.G,p=l.wa,y&&p&&je(E,y,p),je(E,"VER",l.ka),Hn(l,E),E}function Pl(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new qe(new fr({ab:y})):new qe(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function kl(){}r=kl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function zs(){}zs.prototype.g=function(l,p){return new Ct(l,p)};function Ct(l,p){ct.call(this),this.g=new Vs(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!I(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!I(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Xr(this)}T(Ct,ct),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Ls(this.g)},Ct.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=Ur(l),l=y);p.i.push(new xc(p.Ya++,l)),p.I==3&&gr(p)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Ls(this.g),delete this.g,Ct.Z.N.call(this)};function Nl(l){As.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}T(Nl,As);function bl(){Uo.call(this),this.status=1}T(bl,Uo);function Xr(l){this.g=l}T(Xr,kl),Xr.prototype.ra=function(){ot(this.g,"a")},Xr.prototype.qa=function(l){ot(this.g,new Nl(l))},Xr.prototype.pa=function(l){ot(this.g,new bl)},Xr.prototype.oa=function(){ot(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,$_=function(){return new zs},B_=function(){return Br()},z_=En,xd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,Mu=qr,Wr.COMPLETE="complete",j_=Wr,fl.EventType=zr,zr.OPEN="a",zr.CLOSE="b",zr.ERROR="c",zr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Na=fl,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,U_=qe}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let ko="12.10.0";function qS(r){ko=r}/**
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
 */const fs=new Jd("@firebase/firestore");function co(){return fs.logLevel}function ie(r,...e){if(fs.logLevel<=be.DEBUG){const t=e.map(lf);fs.debug(`Firestore (${ko}): ${r}`,...t)}}function Or(r,...e){if(fs.logLevel<=be.ERROR){const t=e.map(lf);fs.error(`Firestore (${ko}): ${r}`,...t)}}function ps(r,...e){if(fs.logLevel<=be.WARN){const t=e.map(lf);fs.warn(`Firestore (${ko}): ${r}`,...t)}}function lf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function _e(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,H_(r,s,t)}function H_(r,e,t){let s=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Or(s),new Error(s)}function Be(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||H_(e,o,s)}function Se(r,e){return r}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Lr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Si{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class q_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class GS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class KS{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Si;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Si,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Si)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Be(typeof s.accessToken=="string",31837,{l:s}),new q_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class QS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class YS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new QS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Vg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Be(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Vg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Vg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function XS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=XS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function De(r,e){return r<e?-1:r>e?1:0}function Pd(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return ud(o)===ud(u)?De(o,u):ud(o)?1:-1}return De(r.length,e.length)}const ZS=55296,e1=57343;function ud(r){const e=r.charCodeAt(0);return e>=ZS&&e<=e1}function To(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const Lg="__name__";class Zn{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Zn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return De(e.length,t.length)}static compareSegments(e,t){const s=Zn.isNumericId(e),o=Zn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Zn.extractNumericId(e).compare(Zn.extractNumericId(t)):Pd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ii.fromString(e.substring(4,e.length-2))}}class tt extends Zn{construct(e,t,s){return new tt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new tt(t)}static emptyPath(){return new tt([])}}const t1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Zn{construct(e,t,s){return new bt(e,t,s)}static isValidIdentifier(e){return t1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lg}static keyField(){return new bt([Lg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new de(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new de(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new de(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(tt.fromString(e))}static fromName(e){return new ye(tt.fromString(e).popFirst(5))}static empty(){return new ye(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new tt(e.slice()))}}/**
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
 */function n1(r,e,t){if(!t)throw new de(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function r1(r,e,t,s){if(e===!0&&s===!0)throw new de(Y.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Mg(r){if(!ye.isDocumentKey(r))throw new de(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function W_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function cf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function qa(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new de(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cf(r);throw new de(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function pt(r,e){const t={typeString:r};return e&&(t.value=e),t}function sl(r,e){if(!W_(r))throw new de(Y.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new de(Y.INVALID_ARGUMENT,t);return!0}/**
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
 */const Fg=-62135596800,Ug=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ug);return new Je(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fg)throw new de(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ug}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(sl(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:pt("string",Je._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */const Wa=-1;function i1(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Je(t+1,0):new Je(t,s));return new Ri(o,ye.empty(),e)}function s1(r){return new Ri(r.readTime,r.key,Wa)}class Ri{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ri(we.min(),ye.empty(),Wa)}static max(){return new Ri(we.max(),ye.empty(),Wa)}}function o1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
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
 */const a1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function No(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==a1)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function u1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mc.ce=-1;/**
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
 */const hf=-1;function gc(r){return r==null}function Ju(r){return r===0&&1/r==-1/0}function c1(r){return typeof r=="number"&&Number.isInteger(r)&&!Ju(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const G_="";function h1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=jg(e)),e=d1(r.get(t),e);return jg(e)}function d1(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case G_:t+="";break;default:t+=u}}return t}function jg(r){return r+G_+""}/**
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
 */function zg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ys(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function K_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=u??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bg(this.data.getIterator())}getIteratorFrom(e){return new Bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class Bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new Nn([])}unionWith(e){let t=new _t(bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Q_("Invalid base64 string: "+u):u}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const f1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(r){if(Be(!!r,39018),typeof r=="string"){let e=0;const t=f1.exec(r);if(Be(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ut(r.seconds),nanos:ut(r.nanos)}}function ut(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function xi(r){return typeof r=="string"?Dt.fromBase64String(r):Dt.fromUint8Array(r)}/**
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
 */const Y_="server_timestamp",J_="__type__",X_="__previous_value__",Z_="__local_write_time__";function df(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[J_])==null?void 0:s.stringValue)===Y_}function yc(r){const e=r.mapValue.fields[X_];return df(e)?yc(e):e}function Ga(r){const e=Ci(r.mapValue.fields[Z_].timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class p1{constructor(e,t,s,o,u,h,m,g,_,w,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w,this.apiKey=T}}const Xu="(default)";class Ka{constructor(e,t){this.projectId=e,this.database=t||Xu}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database===Xu}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}function m1(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new de(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(r.options.projectId,e)}/**
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
 */const ev="__type__",g1="__max__",Pu={mapValue:{}},tv="__vector__",Zu="value";function Pi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?df(r)?4:_1(r)?9007199254740991:y1(r)?10:11:_e(28295,{value:r})}function or(r,e){if(r===e)return!0;const t=Pi(r);if(t!==Pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ga(r).isEqual(Ga(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ci(o.timestampValue),m=Ci(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return xi(o.bytesValue).isEqual(xi(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return ut(o.geoPointValue.latitude)===ut(u.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ut(o.integerValue)===ut(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ut(o.doubleValue),m=ut(u.doubleValue);return h===m?Ju(h)===Ju(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return To(r.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(zg(h)!==zg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!or(h[g],m[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function Qa(r,e){return(r.values||[]).find((t=>or(t,e)))!==void 0}function Io(r,e){if(r===e)return 0;const t=Pi(r),s=Pi(e);if(t!==s)return De(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ut(u.integerValue||u.doubleValue),g=ut(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return $g(r.timestampValue,e.timestampValue);case 4:return $g(Ga(r),Ga(e));case 5:return Pd(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=xi(u),g=xi(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=De(m[_],g[_]);if(w!==0)return w}return De(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=De(ut(u.latitude),ut(h.latitude));return m!==0?m:De(ut(u.longitude),ut(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Hg(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var R,z,q,$;const m=u.fields||{},g=h.fields||{},_=(R=m[Zu])==null?void 0:R.arrayValue,w=(z=g[Zu])==null?void 0:z.arrayValue,T=De(((q=_==null?void 0:_.values)==null?void 0:q.length)||0,(($=w==null?void 0:w.values)==null?void 0:$.length)||0);return T!==0?T:Hg(_,w)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Pu.mapValue&&h===Pu.mapValue)return 0;if(u===Pu.mapValue)return 1;if(h===Pu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const R=Pd(g[T],w[T]);if(R!==0)return R;const z=Io(m[g[T]],_[w[T]]);if(z!==0)return z}return De(g.length,w.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function $g(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=Ci(r),s=Ci(e),o=De(t.seconds,s.seconds);return o!==0?o:De(t.nanos,s.nanos)}function Hg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Io(t[o],s[o]);if(u)return u}return De(t.length,s.length)}function So(r){return kd(r)}function kd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ci(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return xi(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ye.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=kd(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${kd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function Fu(r){switch(Pi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yc(r);return e?16+Fu(e):16;case 5:return 2*r.stringValue.length;case 6:return xi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Fu(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ys(s.fields,((u,h)=>{o+=u.length+Fu(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Nd(r){return!!r&&"integerValue"in r}function ff(r){return!!r&&"arrayValue"in r}function qg(r){return!!r&&"nullValue"in r}function Wg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uu(r){return!!r&&"mapValue"in r}function y1(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[ev])==null?void 0:s.stringValue)===tv}function Fa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ys(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Fa(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fa(r.arrayValue.values[t]);return e}return{...r}}function _1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===g1}/**
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
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(t)}setAll(e){let t=bt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Fa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ys(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new yn(Fa(this.value))}}function nv(r){const e=[];return ys(r.fields,((t,s)=>{const o=new bt([t]);if(Uu(s)){const u=nv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Nn(e)}/**
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
 */class ec{constructor(e,t){this.position=e,this.inclusive=t}}function Gg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=ye.comparator(ye.fromName(h.referenceValue),t.key):s=Io(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!or(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class tc{constructor(e,t="asc"){this.field=e,this.dir=t}}function v1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class rv{}class yt extends rv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new w1(e,t,s):t==="array-contains"?new S1(e,s):t==="in"?new A1(e,s):t==="not-in"?new R1(e,s):t==="array-contains-any"?new C1(e,s):new yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new T1(e,s):new I1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Io(t,this.value)):t!==null&&Pi(this.value)===Pi(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends rv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ar(e,t)}matches(e){return iv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function iv(r){return r.op==="and"}function sv(r){return E1(r)&&iv(r)}function E1(r){for(const e of r.filters)if(e instanceof ar)return!1;return!0}function bd(r){if(r instanceof yt)return r.field.canonicalString()+r.op.toString()+So(r.value);if(sv(r))return r.filters.map((e=>bd(e))).join(",");{const e=r.filters.map((t=>bd(t))).join(",");return`${r.op}(${e})`}}function ov(r,e){return r instanceof yt?(function(s,o){return o instanceof yt&&s.op===o.op&&s.field.isEqual(o.field)&&or(s.value,o.value)})(r,e):r instanceof ar?(function(s,o){return o instanceof ar&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&ov(h,o.filters[m])),!0):!1})(r,e):void _e(19439)}function av(r){return r instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`})(r):r instanceof ar?(function(t){return t.op.toString()+" {"+t.getFilters().map(av).join(" ,")+"}"})(r):"Filter"}class w1 extends yt{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class T1 extends yt{constructor(e,t){super(e,"in",t),this.keys=lv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class I1 extends yt{constructor(e,t){super(e,"not-in",t),this.keys=lv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function lv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ye.fromName(s.referenceValue)))}class S1 extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ff(t)&&Qa(t.arrayValue,this.value)}}class A1 extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qa(this.value.arrayValue,t)}}class R1 extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qa(this.value.arrayValue,t)}}class C1 extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ff(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Qa(this.value.arrayValue,s)))}}/**
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
 */class x1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Qg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new x1(r,e,t,s,o,u,h)}function pf(r){const e=Se(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>bd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),gc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>So(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>So(s))).join(",")),e.Te=t}return e.Te}function mf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!v1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!ov(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Kg(r.startAt,e.startAt)&&Kg(r.endAt,e.endAt)}function Dd(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class _c{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function P1(r,e,t,s,o,u,h,m){return new _c(r,e,t,s,o,u,h,m)}function gf(r){return new _c(r)}function Yg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function k1(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function N1(r){return r.collectionGroup!==null}function Ua(r){const e=Se(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new _t(bt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new tc(u,s))})),t.has(bt.keyField().canonicalString())||e.Ie.push(new tc(bt.keyField(),s))}return e.Ie}function nr(r){const e=Se(r);return e.Ee||(e.Ee=b1(e,Ua(r))),e.Ee}function b1(r,e){if(r.limitType==="F")return Qg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new tc(o.field,u)}));const t=r.endAt?new ec(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ec(r.startAt.position,r.startAt.inclusive):null;return Qg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Od(r,e,t){return new _c(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function vc(r,e){return mf(nr(r),nr(e))&&r.limitType===e.limitType}function uv(r){return`${pf(nr(r))}|lt:${r.limitType}`}function ho(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>av(o))).join(", ")}]`),gc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>So(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>So(o))).join(",")),`Target(${s})`})(nr(r))}; limitType=${r.limitType})`}function Ec(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ye.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of Ua(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Gg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Ua(s),o)||s.endAt&&!(function(h,m,g){const _=Gg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Ua(s),o))})(r,e)}function D1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cv(r){return(e,t)=>{let s=!1;for(const o of Ua(r)){const u=O1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function O1(r,e,t){const s=r.field.isKeyField()?ye.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?Io(g,_):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:r.dir})}}/**
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
 */class _s{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return K_(this.inner)}size(){return this.innerSize}}/**
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
 */const V1=new nt(ye.comparator);function Vr(){return V1}const hv=new nt(ye.comparator);function ba(...r){let e=hv;for(const t of r)e=e.insert(t.key,t);return e}function dv(r){let e=hv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ls(){return ja()}function fv(){return ja()}function ja(){return new _s((r=>r.toString()),((r,e)=>r.isEqual(e)))}const L1=new nt(ye.comparator),M1=new _t(ye.comparator);function Oe(...r){let e=M1;for(const t of r)e=e.add(t);return e}const F1=new _t(De);function U1(){return F1}/**
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
 */function yf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(e)?"-0":e}}function pv(r){return{integerValue:""+r}}function j1(r,e){return c1(e)?pv(e):yf(r,e)}/**
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
 */class wc{constructor(){this._=void 0}}function z1(r,e,t){return r instanceof Ya?(function(o,u){const h={fields:{[J_]:{stringValue:Y_},[Z_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&df(u)&&(u=yc(u)),u&&(h.fields[X_]=u),{mapValue:h}})(t,e):r instanceof Ja?gv(r,e):r instanceof Xa?yv(r,e):(function(o,u){const h=mv(o,u),m=Jg(h)+Jg(o.Ae);return Nd(h)&&Nd(o.Ae)?pv(m):yf(o.serializer,m)})(r,e)}function B1(r,e,t){return r instanceof Ja?gv(r,e):r instanceof Xa?yv(r,e):t}function mv(r,e){return r instanceof nc?(function(s){return Nd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ya extends wc{}class Ja extends wc{constructor(e){super(),this.elements=e}}function gv(r,e){const t=_v(e);for(const s of r.elements)t.some((o=>or(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Xa extends wc{constructor(e){super(),this.elements=e}}function yv(r,e){let t=_v(e);for(const s of r.elements)t=t.filter((o=>!or(o,s)));return{arrayValue:{values:t}}}class nc extends wc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Jg(r){return ut(r.integerValue||r.doubleValue)}function _v(r){return ff(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class $1{constructor(e,t){this.field=e,this.transform=t}}function H1(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Ja&&o instanceof Ja||s instanceof Xa&&o instanceof Xa?To(s.elements,o.elements,or):s instanceof nc&&o instanceof nc?or(s.Ae,o.Ae):s instanceof Ya&&o instanceof Ya})(r.transform,e.transform)}class q1{constructor(e,t){this.version=e,this.transformResults=t}}class kr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kr}static exists(e){return new kr(void 0,e)}static updateTime(e){return new kr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Tc{}function vv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new wv(r.key,kr.none()):new ol(r.key,r.data,kr.none());{const t=r.data,s=yn.empty();let o=new _t(bt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new vs(r.key,s,new Nn(o.toArray()),kr.none())}}function W1(r,e,t){r instanceof ol?(function(o,u,h){const m=o.value.clone(),g=Zg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof vs?(function(o,u,h){if(!ju(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Zg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Ev(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function za(r,e,t,s){return r instanceof ol?(function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=u.value.clone(),w=ey(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof vs?(function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=ey(u.fieldTransforms,g,h),w=h.data;return w.setAll(Ev(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(u,h,m){return ju(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function G1(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=mv(s.transform,o||null);u!=null&&(t===null&&(t=yn.empty()),t.set(s.field,u))}return t||null}function Xg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&To(s,o,((u,h)=>H1(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ol extends Tc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class vs extends Tc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Ev(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Zg(r,e,t){const s=new Map;Be(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,B1(h,m,t[o]))}return s}function ey(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,z1(u,h,e))}return s}class wv extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K1 extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Q1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&W1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=za(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=fv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=vv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,((t,s)=>Xg(t,s)))&&To(this.baseMutations,e.baseMutations,((t,s)=>Xg(t,s)))}}class _f{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return L1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new _f(e,t,s,o)}}/**
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
 */class Y1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class J1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Le;function X1(r){switch(r){case Y.OK:return _e(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function Tv(r){if(r===void 0)return Or("GRPC error has no .code"),Y.UNKNOWN;switch(r){case ft.OK:return Y.OK;case ft.CANCELLED:return Y.CANCELLED;case ft.UNKNOWN:return Y.UNKNOWN;case ft.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ft.INTERNAL:return Y.INTERNAL;case ft.UNAVAILABLE:return Y.UNAVAILABLE;case ft.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ft.NOT_FOUND:return Y.NOT_FOUND;case ft.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ft.ABORTED:return Y.ABORTED;case ft.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ft.DATA_LOSS:return Y.DATA_LOSS;default:return _e(39323,{code:r})}}(Le=ft||(ft={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Z1(){return new TextEncoder}/**
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
 */const eA=new Ii([4294967295,4294967295],0);function ty(r){const e=Z1().encode(r),t=new F_;return t.update(e),new Uint8Array(t.digest())}function ny(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ii([t,s],0),new Ii([o,u],0)]}class vf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Da(`Invalid padding: ${t}`);if(s<0)throw new Da(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Da(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Da(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ii.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ii.fromNumber(s)));return o.compare(eA)===1&&(o=new Ii([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ty(e),[s,o]=ny(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new vf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=ty(e),[s,o]=ny(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.be(h)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ic{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ic(we.min(),o,new nt(De),Vr(),Oe())}}class al{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new al(s,t,Oe(),Oe(),Oe())}}/**
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
 */class zu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Iv{constructor(e,t){this.targetId=e,this.Ce=t}}class Sv{constructor(e,t,s=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ry{constructor(){this.ve=0,this.Fe=iy(),this.Me=Dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Oe(),t=Oe(),s=Oe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new al(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=iy()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Be(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class tA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vr(),this.He=ku(),this.Je=ku(),this.Ze=new nt(De)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Dd(u))if(s===0){const h=new ye(u.path);this.et(t,h,zt.newNoDocument(h,we.min()))}else Be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=xi(s).toUint8Array()}catch(g){if(g instanceof Q_)return ps("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new vf(h,o,u)}catch(g){return ps(g instanceof Da?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Dd(m.target)){const g=new ye(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,zt.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.Ke())}}));let s=Oe();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new Ic(e,t,this.Ze,this.je,s);return this.je=Vr(),this.He=ku(),this.Je=ku(),this.Ze=new nt(De),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new ry,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new _t(De),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new _t(De),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ry),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ku(){return new nt(ye.comparator)}function iy(){return new nt(ye.comparator)}const nA={asc:"ASCENDING",desc:"DESCENDING"},rA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iA={and:"AND",or:"OR"};class sA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vd(r,e){return r.useProto3Json||gc(e)?e:{value:e}}function rc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Av(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function oA(r,e){return rc(r,e.toTimestamp())}function rr(r){return Be(!!r,49232),we.fromTimestamp((function(t){const s=Ci(t);return new Je(s.seconds,s.nanos)})(r))}function Ef(r,e){return Ld(r,e).canonicalString()}function Ld(r,e){const t=(function(o){return new tt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Rv(r){const e=tt.fromString(r);return Be(Nv(e),10190,{key:e.toString()}),e}function Md(r,e){return Ef(r.databaseId,e.path)}function cd(r,e){const t=Rv(e);if(t.get(1)!==r.databaseId.projectId)throw new de(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new de(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(xv(t))}function Cv(r,e){return Ef(r.databaseId,e)}function aA(r){const e=Rv(r);return e.length===4?tt.emptyPath():xv(e)}function Fd(r){return new tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function xv(r){return Be(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function sy(r,e,t){return{name:Md(r,e),fields:t.value.mapValue.fields}}function lA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(Be(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(Be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?Y.UNKNOWN:Tv(_.code);return new de(w,_.message||"")})(h);t=new Sv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=cd(r,s.document.name),u=rr(s.document.updateTime),h=s.document.createTime?rr(s.document.createTime):we.min(),m=new yn({mapValue:{fields:s.document.fields}}),g=zt.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new zu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=cd(r,s.document),u=s.readTime?rr(s.readTime):we.min(),h=zt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new zu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=cd(r,s.document),u=s.removedTargetIds||[];t=new zu([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new J1(o,u),m=s.targetId;t=new Iv(m,h)}}return t}function uA(r,e){let t;if(e instanceof ol)t={update:sy(r,e.key,e.value)};else if(e instanceof wv)t={delete:Md(r,e.key)};else if(e instanceof vs)t={update:sy(r,e.key,e.data),updateMask:_A(e.fieldMask)};else{if(!(e instanceof K1))return _e(16599,{dt:e.type});t={verify:Md(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ya)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ja)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof nc)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:oA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(r,e.precondition)),t}function cA(r,e){return r&&r.length>0?(Be(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?rr(o.updateTime):rr(u);return h.isEqual(we.min())&&(h=rr(u)),new q1(h,o.transformResults||[])})(t,e)))):[]}function hA(r,e){return{documents:[Cv(r,e.path)]}}function dA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Cv(r,o);const u=(function(_){if(_.length!==0)return kv(ar.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(R){return{field:fo(R.field),direction:mA(R.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Vd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function fA(r){let e=aA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(T){const R=Pv(T);return R instanceof ar&&sv(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((R=>(function(q){return new tc(po(q.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(R)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let R;return R=typeof T=="object"?T.value:T,gc(R)?null:R})(t.limit));let g=null;t.startAt&&(g=(function(T){const R=!!T.before,z=T.values||[];return new ec(z,R)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const R=!T.before,z=T.values||[];return new ec(z,R)})(t.endAt)),P1(e,o,h,u,m,"F",g,_)}function pA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=po(t.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=po(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=po(t.unaryFilter.field);return yt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=po(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return yt.create(po(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ar.create(t.compositeFilter.filters.map((s=>Pv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function mA(r){return nA[r]}function gA(r){return rA[r]}function yA(r){return iA[r]}function fo(r){return{fieldPath:r.canonicalString()}}function po(r){return bt.fromServerFormat(r.fieldPath)}function kv(r){return r instanceof yt?(function(t){if(t.op==="=="){if(Wg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NAN"}};if(qg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NAN"}};if(qg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fo(t.field),op:gA(t.op),value:t.value}}})(r):r instanceof ar?(function(t){const s=t.getFilters().map((o=>kv(o)));return s.length===1?s[0]:{compositeFilter:{op:yA(t.op),filters:s}}})(r):_e(54877,{filter:r})}function _A(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Nv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function bv(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class _i{constructor(e,t,s,o,u=we.min(),h=we.min(),m=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new _i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vA{constructor(e){this.yt=e}}function EA(r){const e=fA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Od(e,e.limit,"L"):e}/**
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
 */class wA{constructor(){this.Sn=new TA}addToCollectionParentIndex(e,t){return this.Sn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ri.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class TA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new _t(tt.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new _t(tt.comparator)).toArray()}}/**
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
 */const oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dv=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(Dv,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class Ao{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ao(0)}static ar(){return new Ao(-1)}}/**
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
 */const ay="LruGarbageCollector",IA=1048576;function ly([r,e],[t,s]){const o=De(r,t);return o===0?De(e,s):o}class SA{constructor(e){this.Pr=e,this.buffer=new _t(ly),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ly(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ie(ay,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bo(t)?ie(ay,"Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Ar(3e5)}))}}class RA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(mc.ce);const s=new SA(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(oy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oy):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,t)))).next((T=>(u=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),co()<=be.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function CA(r,e){return new RA(r,e)}/**
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
 */class xA{constructor(){this.changes=new _s((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&za(s.mutation,o,Nn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Oe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Oe()){const o=ls();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=ba();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ls();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Oe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Vr();const h=ja(),m=(function(){return ja()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof vs)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),za(w.mutation,_,w.mutation.getFieldMask(),Je.now())):h.set(_.key,Nn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>m.set(_,new PA(w,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=ja();let o=new nt(((h,m)=>h-m)),u=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||Nn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const T=(o.get(m.batchId)||Oe()).add(g);o=o.insert(m.batchId,T)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,T=fv();w.forEach((R=>{if(!u.has(R)){const z=vv(t.get(R),s.get(R));z!==null&&T.set(R,z),u=u.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return k1(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):N1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(ls());let m=Wa,g=u;return h.next((_=>H.forEach(_,((w,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next((R=>{g=g.insert(w,R)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Oe()))).next((w=>({batchId:m,changes:dv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((s=>{let o=ba();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ba();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(g=>{const _=(function(T,R){return new _c(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((T,R)=>{h=h.insert(T,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,zt.newInvalidDocument(w)))}));let m=ba();return h.forEach(((g,_)=>{const w=u.get(g);w!==void 0&&za(w.mutation,_,Nn.empty(),Je.now()),Ec(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class NA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return H.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:rr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:EA(o.bundledQuery),readTime:rr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class bA{constructor(){this.overlays=new nt(ye.comparator),this.Lr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ls();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.bt(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=ls(),u=t.length+1,h=new ye(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=ls(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=ls(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return H.resolve(m)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new Y1(t,s));let u=this.Lr.get(t);u===void 0&&(u=Oe(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
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
 */class DA{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class wf{constructor(){this.kr=new _t(St.Kr),this.qr=new _t(St.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new St(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new ye(new tt([])),s=new St(t,e),o=new St(t,e+1),u=[];return this.qr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new ye(new tt([])),s=new St(t,e),o=new St(t,e+1);let u=Oe();return this.qr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new St(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return ye.comparator(e.key,t.key)||De(e.Hr,t.Hr)}static Ur(e,t){return De(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
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
 */class OA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new _t(St.Kr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new Q1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Jr=this.Jr.add(new St(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?hf:this.Yn-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _t(De);return t.forEach((o=>{const u=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),H.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ye.isDocumentKey(u)||(u=u.child(""));const h=new St(new ye(u),0);let m=new _t(De);return this.Jr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),H.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Be(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return H.forEach(t.mutations,(o=>{const u=new St(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new St(t,0),o=this.Jr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class VA{constructor(e){this.ti=e,this.docs=(function(){return new nt(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=Vr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():zt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Vr();const h=t.path,m=new ye(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||o1(s1(w),s)<=0||(o.has(w.key)||Ec(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ni(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new LA(this)}getSize(e){return H.resolve(this.size)}}class LA extends xA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class MA{constructor(e){this.persistence=e,this.ri=new _s((t=>pf(t)),mf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.ii=0,this.si=new wf,this.targetCount=0,this.oi=Ao._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),H.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ao(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.lr(t),H.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.si.containsKey(t))}}/**
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
 */class Ov{constructor(e,t){this._i={},this.overlays={},this.ai=new mc(0),this.ui=!1,this.ui=!0,this.ci=new DA,this.referenceDelegate=e(this),this.li=new MA(this),this.indexManager=new wA,this.remoteDocumentCache=(function(o){return new VA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new vA(t),this.Pi=new NA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new OA(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new FA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return H.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class FA extends l1{constructor(e){super(),this.currentSequenceNumber=e}}class Tf{constructor(e){this.persistence=e,this.Ri=new wf,this.Ai=null}static Vi(e){return new Tf(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.di,(s=>{const o=ye.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,we.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ic{constructor(e,t){this.persistence=e,this.fi=new _s((s=>h1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=CA(this,t)}static Vi(e,t){return new ic(e,t)}Ti(){}Ii(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return H.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,we.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}wr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class If{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=Oe(),o=Oe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new If(e,t.fromCache,s,o)}}/**
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
 */class UA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return R0()?8:u1(Bt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new UA;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(co()<=be.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",ho(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(co()<=be.DEBUG&&ie("QueryEngine","Query:",ho(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(co()<=be.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",ho(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):H.resolve())}gs(e,t){if(Yg(t))return H.resolve(null);let s=nr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Od(t,null,"F"),s=nr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Oe(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ss(t,_,h,g.readTime)?this.gs(e,Od(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return Yg(t)||o.isEqual(we.min())?H.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ss(t,h,s,o)?H.resolve(null):(co()<=be.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ho(t)),this.Ds(e,h,t,i1(o,Wa)).next((m=>m)))}))}bs(e,t){let s=new _t(cv(e));return t.forEach(((o,u)=>{Ec(e,u)&&(s=s.add(u))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return co()<=be.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",ho(t)),this.fs.getDocumentsMatchingQuery(e,t,Ri.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const Sf="LocalStore",zA=3e8;class BA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new nt(De),this.Fs=new _s((u=>pf(u)),mf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function $A(r,e,t,s){return new BA(r,e,t,s)}async function Vv(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Oe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function HA(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,w){const T=_.batch,R=T.keys();let z=H.resolve();return R.forEach((q=>{z=z.next((()=>w.getEntry(g,q))).next(($=>{const B=_.docVersions.get(q);Be(B!==null,48541),$.version.compareTo(B)<0&&(T.applyToRemoteDocument($,_),$.isValidDocument()&&($.setReadTime(_.commitVersion),w.addEntry($)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Oe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Lv(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function qA(r,e){const t=Se(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((w,T)=>{const R=o.get(T);if(!R)return;m.push(t.li.removeMatchingKeys(u,w.removedDocuments,T).next((()=>t.li.addMatchingKeys(u,w.addedDocuments,T))));let z=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?z=z.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(T,z),(function($,B,ae){return $.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=zA?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(R,z,w)&&m.push(t.li.updateTargetData(u,z))}));let g=Vr(),_=Oe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(WA(u,h,e.documentUpdates).next((w=>{g=w.Bs,_=w.Ls}))),!s.isEqual(we.min())){const w=t.li.getLastRemoteSnapshotVersion(u).next((T=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.vs=o,u)))}function WA(r,e,t){let s=Oe(),o=Oe();return t.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let h=Vr();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ie(Sf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function GA(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=hf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function KA(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new _i(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Ud(r,e,t){const s=Se(r),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!bo(h))throw h;ie(Sf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function uy(r,e,t){const s=Se(r);let o=we.min(),u=Oe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const T=Se(g),R=T.Fs.get(w);return R!==void 0?H.resolve(T.vs.get(R)):T.li.getTargetData(_,w)})(s,h,nr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Oe()))).next((m=>(QA(s,D1(e),m),{documents:m,ks:u})))))}function QA(r,e,t){let s=r.Ms.get(e)||we.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(e,s)}class cy{constructor(){this.activeTargetIds=U1()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YA{constructor(){this.vo=new cy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new cy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class JA{Mo(e){}shutdown(){}}/**
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
 */const hy="ConnectivityMonitor";class dy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ie(hy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ie(hy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nu=null;function jd(){return Nu===null?Nu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Nu++,"0x"+Nu.toString(16)}/**
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
 */const hd="RestConnection",XA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ZA{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Xu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=jd(),m=this.Qo(e,t.toUriEncodedString());ie(hd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,u);const{host:_}=new URL(m),w=Co(_);return this.zo(e,m,g,s,w).then((T=>(ie(hd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw ps(hd,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",s),T}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=XA[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class eR{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ut="WebChannelConnection",Pa=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class vo extends ZA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!vo.c_){const e=B_();Pa(e,z_.STAT_EVENT,(t=>{t.stat===xd.PROXY?ie(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===xd.NOPROXY&&ie(Ut,"STAT_EVENT: detected no buffering proxy")})),vo.c_=!0}}zo(e,t,s,o,u){const h=jd();return new Promise(((m,g)=>{const _=new U_;_.setWithCredentials(!0),_.listenOnce(j_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Mu.NO_ERROR:const T=_.getResponseJson();ie(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case Mu.TIMEOUT:ie(Ut,`RPC '${e}' ${h} timed out`),g(new de(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Mu.HTTP_ERROR:const R=_.getStatus();if(ie(Ut,`RPC '${e}' ${h} failed with status:`,R,"response text:",_.getResponseText()),R>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const q=z==null?void 0:z.error;if(q&&q.status&&q.message){const $=(function(ae){const ue=ae.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ue)>=0?ue:Y.UNKNOWN})(q.status);g(new de($,q.message))}else g(new de(Y.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new de(Y.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ie(Ut,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ie(Ut,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=jd(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");ie(Ut,`Creating RPC '${e}' stream ${o}: ${_}`,m);const w=h.createWebChannel(_,m);this.I_(w);let T=!1,R=!1;const z=new eR({Ho:q=>{R?ie(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(T||(ie(Ut,`Opening RPC '${e}' stream ${o} transport.`),w.open(),T=!0),ie(Ut,`RPC '${e}' stream ${o} sending:`,q),w.send(q))},Jo:()=>w.close()});return Pa(w,Na.EventType.OPEN,(()=>{R||(ie(Ut,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),Pa(w,Na.EventType.CLOSE,(()=>{R||(R=!0,ie(Ut,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.E_(w))})),Pa(w,Na.EventType.ERROR,(q=>{R||(R=!0,ps(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),z.o_(new de(Y.UNAVAILABLE,"The operation could not be completed")))})),Pa(w,Na.EventType.MESSAGE,(q=>{var $;if(!R){const B=q.data[0];Be(!!B,16349);const ae=B,ue=(ae==null?void 0:ae.error)||(($=ae[0])==null?void 0:$.error);if(ue){ie(Ut,`RPC '${e}' stream ${o} received error:`,ue);const ne=ue.status;let pe=(function(k){const A=ft[k];if(A!==void 0)return Tv(A)})(ne),Ce=ue.message;ne==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&ps(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),pe===void 0&&(pe=Y.INTERNAL,Ce="Unknown error status: "+ne+" with message "+ue.message),R=!0,z.o_(new de(pe,Ce)),w.close()}else ie(Ut,`RPC '${e}' stream ${o} received:`,B),z.__(B)}})),vo.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return $_()}}/**
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
 */function tR(r){return new vo(r)}function dd(){return typeof document<"u"?document:null}/**
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
 */function Sc(r){return new sA(r,!0)}/**
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
 */vo.c_=!1;class Mv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const fy="PersistentStream";class Fv{constructor(e,t,s,o,u,h,m,g){this.Ci=e,this.b_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Or(t.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new de(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(fy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ie(fy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nR extends Fv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=lA(this.serializer,e),s=(function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?rr(h.readTime):we.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=Fd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Dd(g)?{documents:hA(u,g)}:{query:dA(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Av(u,h.resumeToken);const _=Vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=rc(u,h.snapshotVersion.toTimestamp());const _=Vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=pA(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Fd(this.serializer),t.removeTarget=e,this.K_(t)}}class rR extends Fv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=cA(e.writeResults,e.commitTime),s=rr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Fd(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>uA(this.serializer,s)))};this.K_(t)}}/**
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
 */class iR{}class sR extends iR{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new de(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Ld(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(Y.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,Ld(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new de(Y.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function oR(r,e,t,s){return new sR(r,e,t,s)}class aR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Or(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ms="RemoteStore";class lR{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{Es(this)&&(ie(ms,"Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.Ea.add(4),await ll(_),_.Va.set("Unknown"),_.Ea.delete(4),await Ac(_)})(this))}))})),this.Va=new aR(s,o)}}async function Ac(r){if(Es(r))for(const e of r.Ra)await e(!0)}async function ll(r){for(const e of r.Ra)await e(!1)}function Uv(r,e){const t=Se(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),xf(t)?Cf(t):Do(t).O_()&&Rf(t,e))}function Af(r,e){const t=Se(r),s=Do(t);t.Ia.delete(e),s.O_()&&jv(t,e),t.Ia.size===0&&(s.O_()?s.L_():Es(t)&&t.Va.set("Unknown"))}function Rf(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Do(r).Z_(e)}function jv(r,e){r.da.$e(e),Do(r).X_(e)}function Cf(r){r.da=new tA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Do(r).start(),r.Va.ua()}function xf(r){return Es(r)&&!Do(r).x_()&&r.Ia.size>0}function Es(r){return Se(r).Ea.size===0}function zv(r){r.da=void 0}async function uR(r){r.Va.set("Online")}async function cR(r){r.Ia.forEach(((e,t)=>{Rf(r,e)}))}async function hR(r,e){zv(r),xf(r)?(r.Va.ha(e),Cf(r)):r.Va.set("Unknown")}async function dR(r,e,t){if(r.Va.set("Online"),e instanceof Sv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.da.removeTarget(m))})(r,e)}catch(s){ie(ms,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await sc(r,s)}else if(e instanceof zu?r.da.Xe(e):e instanceof Iv?r.da.st(e):r.da.tt(e),!t.isEqual(we.min()))try{const s=await Lv(r.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ia.get(_);w&&u.Ia.set(_,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const w=u.Ia.get(g);if(!w)return;u.Ia.set(g,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),jv(u,g);const T=new _i(w.target,g,_,w.sequenceNumber);Rf(u,T)})),u.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){ie(ms,"Failed to raise snapshot:",s),await sc(r,s)}}async function sc(r,e,t){if(!bo(e))throw e;r.Ea.add(1),await ll(r),r.Va.set("Offline"),t||(t=()=>Lv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ie(ms,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Ac(r)}))}function Bv(r,e){return e().catch((t=>sc(r,t,e)))}async function Rc(r){const e=Se(r),t=ki(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:hf;for(;fR(e);)try{const o=await GA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,pR(e,o)}catch(o){await sc(e,o)}$v(e)&&Hv(e)}function fR(r){return Es(r)&&r.Ta.length<10}function pR(r,e){r.Ta.push(e);const t=ki(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function $v(r){return Es(r)&&!ki(r).x_()&&r.Ta.length>0}function Hv(r){ki(r).start()}async function mR(r){ki(r).ra()}async function gR(r){const e=ki(r);for(const t of r.Ta)e.ea(t.mutations)}async function yR(r,e,t){const s=r.Ta.shift(),o=_f.from(s,e,t);await Bv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Rc(r)}async function _R(r,e){e&&ki(r).Y_&&await(async function(s,o){if((function(h){return X1(h)&&h!==Y.ABORTED})(o.code)){const u=s.Ta.shift();ki(s).B_(),await Bv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Rc(s)}})(r,e),$v(r)&&Hv(r)}async function py(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),ie(ms,"RemoteStore received new credentials");const s=Es(t);t.Ea.add(3),await ll(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ac(t)}async function vR(r,e){const t=Se(r);e?(t.Ea.delete(2),await Ac(t)):e||(t.Ea.add(2),await ll(t),t.Va.set("Unknown"))}function Do(r){return r.ma||(r.ma=(function(t,s,o){const u=Se(t);return u.sa(),new nR(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:uR.bind(null,r),Yo:cR.bind(null,r),t_:hR.bind(null,r),J_:dR.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),xf(r)?Cf(r):r.Va.set("Unknown")):(await r.ma.stop(),zv(r))}))),r.ma}function ki(r){return r.fa||(r.fa=(function(t,s,o){const u=Se(t);return u.sa(),new rR(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:mR.bind(null,r),t_:_R.bind(null,r),ta:gR.bind(null,r),na:yR.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Rc(r)):(await r.fa.stop(),r.Ta.length>0&&(ie(ms,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Pf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Si,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Pf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kf(r,e){if(Or("AsyncQueue",`${e}: ${r}`),bo(r))return new de(Y.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Eo{static emptySet(e){return new Eo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=ba(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Eo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class my{constructor(){this.ga=new nt(ye.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ro{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Ro(e,t,Eo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class ER{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class wR{constructor(){this.queries=gy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Se(t),u=o.queries;o.queries=gy(),u.forEach(((h,m)=>{for(const g of m.ba)g.onError(s)}))})(this,new de(Y.ABORTED,"Firestore shutting down"))}}function gy(){return new _s((r=>uv(r)),vc)}async function TR(r,e){const t=Se(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.Da()&&(s=2):(u=new ER,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=kf(h,`Initialization of query '${ho(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Nf(t)}async function IR(r,e){const t=Se(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ba.indexOf(e);h>=0&&(u.ba.splice(h,1),u.ba.length===0?o=e.Da()?0:1:!u.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function SR(r,e){const t=Se(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.ba)m.Fa(o)&&(s=!0);h.wa=o}}s&&Nf(t)}function AR(r,e,t){const s=Se(r),o=s.queries.get(e);if(o)for(const u of o.ba)u.onError(t);s.queries.delete(e)}function Nf(r){r.Ca.forEach((e=>{e.next()}))}var zd,yy;(yy=zd||(zd={})).Ma="default",yy.Cache="cache";class RR{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ro(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==zd.Cache}}/**
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
 */class qv{constructor(e){this.key=e}}class Wv{constructor(e){this.key=e}}class CR{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Oe(),this.mutatedKeys=Oe(),this.eu=cv(e),this.tu=new Eo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new my,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const R=o.get(w),z=Ec(this.query,T)?T:null,q=!!R&&this.mutatedKeys.has(R.key),$=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let B=!1;R&&z?R.data.isEqual(z.data)?q!==$&&(s.track({type:3,doc:z}),B=!0):this.su(R,z)||(s.track({type:2,doc:z}),B=!0,(g&&this.eu(z,g)>0||_&&this.eu(z,_)<0)&&(m=!0)):!R&&z?(s.track({type:0,doc:z}),B=!0):R&&!z&&(s.track({type:1,doc:R}),B=!0,(g||_)&&(m=!0)),B&&(z?(h=h.add(z),u=$?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Ss:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,T)=>(function(z,q){const $=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:B})}};return $(z)-$(q)})(w.type,T.type)||this.eu(w.doc,T.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new Ro(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new my,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Oe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Wv(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new qv(s))})),t}cu(e){this.Za=e.ks,this.Ya=Oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ro.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const bf="SyncEngine";class xR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class PR{constructor(e){this.key=e,this.hu=!1}}class kR{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new _s((m=>uv(m)),vc),this.Iu=new Map,this.Eu=new Set,this.Ru=new nt(ye.comparator),this.Au=new Map,this.Vu=new wf,this.du={},this.mu=new Map,this.fu=Ao.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function NR(r,e,t=!0){const s=Xv(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Gv(s,e,t,!0),o}async function bR(r,e){const t=Xv(r);await Gv(t,e,!0,!1)}async function Gv(r,e,t,s){const o=await KA(r.localStore,nr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await DR(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Uv(r.remoteStore,o),m}async function DR(r,e,t,s,o){r.pu=(T,R,z)=>(async function($,B,ae,ue){let ne=B.view.ru(ae);ne.Ss&&(ne=await uy($.localStore,B.query,!1).then((({documents:k})=>B.view.ru(k,ne))));const pe=ue&&ue.targetChanges.get(B.targetId),Ce=ue&&ue.targetMismatches.get(B.targetId)!=null,Te=B.view.applyChanges(ne,$.isPrimaryClient,pe,Ce);return vy($,B.targetId,Te.au),Te.snapshot})(r,T,R,z);const u=await uy(r.localStore,e,!0),h=new CR(e,u.ks),m=h.ru(u.documents),g=al.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);vy(r,t,_.au);const w=new xR(e,t,h);return r.Tu.set(e,w),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function OR(r,e,t){const s=Se(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!vc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Ud(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Af(s.remoteStore,o.targetId),Bd(s,o.targetId)})).catch(No)):(Bd(s,o.targetId),await Ud(s.localStore,o.targetId,!0))}async function VR(r,e){const t=Se(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Af(t.remoteStore,s.targetId))}async function LR(r,e,t){const s=$R(r);try{const o=await(function(h,m){const g=Se(h),_=Je.now(),w=m.reduce(((z,q)=>z.add(q.key)),Oe());let T,R;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let q=Vr(),$=Oe();return g.xs.getEntries(z,w).next((B=>{q=B,q.forEach(((ae,ue)=>{ue.isValidDocument()||($=$.add(ae))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,q))).next((B=>{T=B;const ae=[];for(const ue of m){const ne=G1(ue,T.get(ue.key).overlayedDocument);ne!=null&&ae.push(new vs(ue.key,ne,nv(ne.value.mapValue),kr.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,ae,m)})).next((B=>{R=B;const ae=B.applyToLocalDocumentSet(T,$);return g.documentOverlayCache.saveOverlays(z,B.batchId,ae)}))})).then((()=>({batchId:R.batchId,changes:dv(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.du[h.currentUser.toKey()];_||(_=new nt(De)),_=_.insert(m,g),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await ul(s,o.changes),await Rc(s.remoteStore)}catch(o){const u=kf(o,"Failed to persist write");t.reject(u)}}async function Kv(r,e){const t=Se(r);try{const s=await qA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Be(h.hu,14607):o.removedDocuments.size>0&&(Be(h.hu,42227),h.hu=!1))})),await ul(t,s,e)}catch(s){await No(s)}}function _y(r,e,t){const s=Se(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Se(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,T)=>{for(const R of T.ba)R.va(m)&&(_=!0)})),_&&Nf(g)})(s.eventManager,e),o.length&&s.Pu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function MR(r,e,t){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new nt(ye.comparator);h=h.insert(u,zt.newNoDocument(u,we.min()));const m=Oe().add(u),g=new Ic(we.min(),new Map,new nt(De),h,m);await Kv(s,g),s.Ru=s.Ru.remove(u),s.Au.delete(e),Df(s)}else await Ud(s.localStore,e,!1).then((()=>Bd(s,e,t))).catch(No)}async function FR(r,e){const t=Se(r),s=e.batch.batchId;try{const o=await HA(t.localStore,e);Yv(t,s,null),Qv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ul(t,o)}catch(o){await No(o)}}async function UR(r,e,t){const s=Se(r);try{const o=await(function(h,m){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next((T=>(Be(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Yv(s,e,t),Qv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ul(s,o)}catch(o){await No(o)}}function Qv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Yv(r,e,t){const s=Se(r);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Bd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||Jv(r,s)}))}function Jv(r,e){r.Eu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(Af(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),Df(r))}function vy(r,e,t){for(const s of t)s instanceof qv?(r.Vu.addReference(s.key,e),jR(r,s)):s instanceof Wv?(ie(bf,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||Jv(r,s.key)):_e(19791,{wu:s})}function jR(r,e){const t=e.key,s=t.path.canonicalString();r.Ru.get(t)||r.Eu.has(s)||(ie(bf,"New document in limbo: "+t),r.Eu.add(s),Df(r))}function Df(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new ye(tt.fromString(e)),s=r.fu.next();r.Au.set(s,new PR(t)),r.Ru=r.Ru.insert(t,s),Uv(r.remoteStore,new _i(nr(gf(t.path)),s,"TargetPurposeLimboResolution",mc.ce))}}async function ul(r,e,t){const s=Se(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=If.Es(g.targetId,_);u.push(T)}})))})),await Promise.all(h),s.Pu.J_(o),await(async function(g,_){const w=Se(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>H.forEach(_,(R=>H.forEach(R.Ts,(z=>w.persistence.referenceDelegate.addReference(T,R.targetId,z))).next((()=>H.forEach(R.Is,(z=>w.persistence.referenceDelegate.removeReference(T,R.targetId,z)))))))))}catch(T){if(!bo(T))throw T;ie(Sf,"Failed to update sequence numbers: "+T)}for(const T of _){const R=T.targetId;if(!T.fromCache){const z=w.vs.get(R),q=z.snapshotVersion,$=z.withLastLimboFreeSnapshotVersion(q);w.vs=w.vs.insert(R,$)}}})(s.localStore,u))}async function zR(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){ie(bf,"User change. New user:",e.toKey());const s=await Vv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((g=>{g.reject(new de(Y.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ul(t,s.Ns)}}function BR(r,e){const t=Se(r),s=t.Au.get(e);if(s&&s.hu)return Oe().add(s.key);{let o=Oe();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Xv(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MR.bind(null,e),e.Pu.J_=SR.bind(null,e.eventManager),e.Pu.yu=AR.bind(null,e.eventManager),e}function $R(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UR.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return $A(this.persistence,new jA,e.initialUser,this.serializer)}Cu(e){return new Ov(Tf.Vi,this.serializer)}Du(e){return new YA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class HR extends oc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Be(this.persistence.referenceDelegate instanceof ic,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new AA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Ov((s=>ic.Vi(s,t)),this.serializer)}}class $d{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_y(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zR.bind(null,this.syncEngine),await vR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wR})()}createDatastore(e){const t=Sc(e.databaseInfo.databaseId),s=tR(e.databaseInfo);return oR(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new lR(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>_y(this.syncEngine,t,0)),(function(){return dy.v()?new dy:new JA})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,w){const T=new kR(o,u,h,m,g,_);return w&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Se(o);ie(ms,"RemoteStore shutting down."),u.Ea.add(5),await ll(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}$d.provider={build:()=>new $d};/**
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
 */class qR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ni="FirestoreClient";class WR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ie(Ni,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ie(Ni,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Si;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=kf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function fd(r,e){r.asyncQueue.verifyOperationInProgress(),ie(Ni,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Vv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Ey(r,e){r.asyncQueue.verifyOperationInProgress();const t=await GR(r);ie(Ni,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>py(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>py(e.remoteStore,o))),r._onlineComponents=e}async function GR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie(Ni,"Using user provided OfflineComponentProvider");try{await fd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ps("Error using user provided cache. Falling back to memory cache: "+t),await fd(r,new oc)}}else ie(Ni,"Using default OfflineComponentProvider"),await fd(r,new HR(void 0));return r._offlineComponents}async function Zv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie(Ni,"Using user provided OnlineComponentProvider"),await Ey(r,r._uninitializedComponentsProvider._online)):(ie(Ni,"Using default OnlineComponentProvider"),await Ey(r,new $d))),r._onlineComponents}function KR(r){return Zv(r).then((e=>e.syncEngine))}async function QR(r){const e=await Zv(r),t=e.eventManager;return t.onListen=NR.bind(null,e.syncEngine),t.onUnlisten=OR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VR.bind(null,e.syncEngine),t}function YR(r,e,t={}){const s=new Si;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const w=new qR({next:R=>{w.Nu(),h.enqueueAndForget((()=>IR(u,T)));const z=R.docs.has(m);!z&&R.fromCache?_.reject(new de(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&R.fromCache&&g&&g.source==="server"?_.reject(new de(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(R)},error:R=>_.reject(R)}),T=new RR(gf(m.path),w,{includeMetadataChanges:!0,Ka:!0});return TR(u,T)})(await QR(r),r.asyncQueue,e,t,s))),s.promise}function JR(r,e){const t=new Si;return r.asyncQueue.enqueueAndForget((async()=>LR(await KR(r),e,t))),t.promise}/**
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
 */function eE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const XR="ComponentProvider",wy=new Map;function ZR(r,e,t,s,o){return new p1(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,eE(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const tE="firestore.googleapis.com",Ty=!0;class Iy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tE,this.ssl=Ty}else this.host=e.host,this.ssl=e.ssl??Ty;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<IA)throw new de(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eE(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new de(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new de(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new de(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Of{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Iy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Iy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new WS;switch(s.type){case"firstParty":return new YS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=wy.get(t);s&&(ie(XR,"Removing Datastore"),wy.delete(t),s.terminate())})(this),Promise.resolve()}}function eC(r,e,t,s={}){var _;r=qa(r,Of);const o=Co(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(Jy(`https://${m}`),Xy("Firestore",!0)),u.host!==tE&&u.host!==m&&ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!cs(g,h)&&(r._setSettings(g),s.mockUserToken)){let w,T;if(typeof s.mockUserToken=="string")w=s.mockUserToken,T=jt.MOCK_USER;else{w=y0(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new de(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new jt(R)}r._authCredentials=new GS(new q_(w,T))}}/**
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
 */class Vf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vf(this.firestore,e,this._query)}}class At{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Za(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(sl(t,At._jsonSchema))return new At(e,s||null,new ye(tt.fromString(t.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:pt("string",At._jsonSchemaVersion),referencePath:pt("string")};class Za extends Vf{constructor(e,t,s){super(e,t,gf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new ye(e))}withConverter(e){return new Za(this.firestore,e,this._path)}}function tC(r,e,...t){if(r=Dn(r),arguments.length===1&&(e=uf.newId()),n1("doc","path",e),r instanceof Of){const s=tt.fromString(e,...t);return Mg(s),new At(r,null,new ye(s))}{if(!(r instanceof At||r instanceof Za))throw new de(Y.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(tt.fromString(e,...t));return Mg(s),new At(r.firestore,r instanceof Za?r.converter:null,new ye(s))}}/**
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
 */const Sy="AsyncQueue";class Ay{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mv(this,"async_queue_retry"),this._c=()=>{const s=dd();s&&ie(Sy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=dd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=dd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Si;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bo(e))throw e;ie(Sy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Or("INTERNAL UNHANDLED ERROR: ",Ry(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Pf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:Ry(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ry(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Lf extends Of{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Ay,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ay(e),this._firestoreClient=void 0,await e}}}function nC(r,e){const t=typeof r=="object"?r:n_(),s=typeof r=="string"?r:Xu,o=Zd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=m0("firestore");u&&eC(o,...u)}return o}function nE(r){if(r._terminated)throw new de(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rC(r),r._firestoreClient}function rC(r){var s,o,u,h;const e=r._freezeSettings(),t=ZR(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new WR(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
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
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(Dt.fromBase64String(e))}catch(t){throw new de(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(sl(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:pt("string",_n._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class rE{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Mf{constructor(e){this._methodName=e}}/**
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
 */class ir{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ir._jsonSchemaVersion}}static fromJSON(e){if(sl(e,ir._jsonSchema))return new ir(e.latitude,e.longitude)}}ir._jsonSchemaVersion="firestore/geoPoint/1.0",ir._jsonSchema={type:pt("string",ir._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
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
 */class bn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(sl(e,bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new bn(e.vectorValues);throw new de(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bn._jsonSchemaVersion="firestore/vectorValue/1.0",bn._jsonSchema={type:pt("string",bn._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const iC=/^__.*__$/;class sC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,t,this.fieldTransforms):new ol(e,this.data,t,this.fieldTransforms)}}function iE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:r})}}class Ff{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ff({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ac(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(iE(this.dataSource)&&iC.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class oC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Sc(e)}createContext(e,t,s,o=!1){return new Ff({dataSource:e,methodName:t,targetDoc:s,path:bt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aC(r){const e=r._freezeSettings(),t=Sc(r._databaseId);return new oC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function lC(r,e,t,s,o,u={}){const h=r.createContext(u.merge||u.mergeFields?2:0,e,t,o);lE("Data must be an object, but it was:",h,s);const m=oE(s,h);let g,_;if(u.merge)g=new Nn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const T of u.mergeFields){const R=jf(e,T,t);if(!h.contains(R))throw new de(Y.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);hC(w,R)||w.push(R)}g=new Nn(w),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new sC(new yn(m),g,_)}class Uf extends Mf{_toFieldTransform(e){return new $1(e.path,new Ya)}isEqual(e){return e instanceof Uf}}function sE(r,e){if(aE(r=Dn(r)))return lE("Unsupported field value:",e,r),oE(r,e);if(r instanceof Mf)return(function(s,o){if(!iE(o.dataSource))throw o.createError(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=sE(m,o.childContextForArray(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=Dn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return j1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Je.fromDate(s);return{timestampValue:rc(o.serializer,u)}}if(s instanceof Je){const u=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:rc(o.serializer,u)}}if(s instanceof ir)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _n)return{bytesValue:Av(o.serializer,s._byteString)};if(s instanceof At){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Ef(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof bn)return(function(h,m){const g=h instanceof bn?h.toArray():h;return{mapValue:{fields:{[ev]:{stringValue:tv},[Zu]:{arrayValue:{values:g.map((w=>{if(typeof w!="number")throw m.createError("VectorValues must only contain numeric values.");return yf(m.serializer,w)}))}}}}}})(s,o);if(bv(s))return s._toProto(o.serializer);throw o.createError(`Unsupported field value: ${cf(s)}`)})(r,e)}function oE(r,e){const t={};return K_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(r,((s,o)=>{const u=sE(o,e.childContextForField(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function aE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Je||r instanceof ir||r instanceof _n||r instanceof At||r instanceof Mf||r instanceof bn||bv(r))}function lE(r,e,t){if(!aE(t)||!W_(t)){const s=cf(t);throw s==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+s)}}function jf(r,e,t){if((e=Dn(e))instanceof rE)return e._internalPath;if(typeof e=="string")return cC(r,e);throw ac("Field path arguments must be of type string or ",r,!1,void 0,t)}const uC=new RegExp("[~\\*/\\[\\]]");function cC(r,e,t){if(e.search(uC)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new rE(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ac(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new de(Y.INVALID_ARGUMENT,m+r+g)}function hC(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class dC{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ys(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Zu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>ut(h.doubleValue)));return new bn(t)}convertGeoPoint(e){return new ir(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=yc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const t=Ci(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=tt.fromString(e);Be(Nv(s),9688,{name:e});const o=new Ka(s.get(1),s.get(3)),u=new ye(s.popFirst(5));return o.isEqual(t)||Or(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class fC extends dC{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function uE(){return new Uf("serverTimestamp")}const Cy="@firebase/firestore",xy="4.12.0";/**
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
 */class cE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(jf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class pC extends cE{data(){return super.data()}}function mC(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Oa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class us extends cE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(jf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=us._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}us._jsonSchemaVersion="firestore/documentSnapshot/1.0",us._jsonSchema={type:pt("string",us._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class Bu extends us{data(e={}){return super.data(e)}}class Ba{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Oa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Bu(this._firestore,this._userDataWriter,s.key,s,new Oa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:gC(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ba._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */Ba._jsonSchemaVersion="firestore/querySnapshot/1.0",Ba._jsonSchema={type:pt("string",Ba._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};/**
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
 */function yC(r){r=qa(r,At);const e=qa(r.firestore,Lf),t=nE(e);return YR(t,r._key).then((s=>vC(e,r,s)))}function hE(r,e,t){r=qa(r,At);const s=qa(r.firestore,Lf),o=mC(r.converter,e),u=aC(s);return _C(s,[lC(u,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,kr.none())])}function _C(r,e){const t=nE(r);return JR(t,e)}function vC(r,e,t){const s=t.docs.get(e._key),o=new fC(r);return new us(r,o,e._key,s,new Oa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){qS(xo),wo(new hs("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Lf(new KS(s.getProvider("auth-internal")),new JS(h,s.getProvider("app-check-internal")),m1(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),wi(Cy,xy,e),wi(Cy,xy,"esm2020")})();const EC=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"];function wC(r){return EC.filter(e=>!r[e])}function TC(r){const e=wC(r);if(e.length>0)throw new Error(`Missing required Firebase environment variables: ${e.join(", ")}. Ensure variables are set in .env.local (local dev) or GitHub Secrets (CI/CD).`)}const IC={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",VITE_FIREBASE_APP_ID:"1:662195056281:web:9a116d842188f7e7599208",VITE_FIREBASE_AUTH_DOMAIN:"math-trainer-1a632.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"662195056281",VITE_FIREBASE_PROJECT_ID:"math-trainer-1a632",VITE_FIREBASE_STORAGE_BUCKET:"math-trainer-1a632.firebasestorage.app"};TC(IC);const SC={apiKey:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",authDomain:"math-trainer-1a632.firebaseapp.com",projectId:"math-trainer-1a632",storageBucket:"math-trainer-1a632.firebasestorage.app",messagingSenderId:"662195056281",appId:"1:662195056281:web:9a116d842188f7e7599208"};let pd,lc,dE;try{pd=t_(SC),lc=zS(pd),dE=nC(pd)}catch(r){throw new Error(`Firebase initialization failed: ${r.message}. Check that your Firebase configuration values are correct.`)}function AC(){const[r,e]=K.useState(null),[t,s]=K.useState(!0),[o,u]=K.useState(null),h=K.useCallback(async()=>{try{u(null),await R_(lc)}catch(m){console.error("Anonymous sign-in failed:",m.message),u(m)}},[]);return K.useEffect(()=>{const m=kI(lc,g=>{g?(e(g),s(!1),console.log("User authenticated with ID:",g.uid)):(e(null),h())},g=>{console.error("Auth state change error:",g.message),u(g),s(!1)});return()=>m()},[h]),{user:r,loading:t,error:o}}const Pr={score:0,streak:0,currentStreak:0,totalProblems:0,correctAnswers:0,lastPlayed:null};function zf(r){return tC(dE,"users",r,"progress","gameData")}async function Py(r,e){if(!r)return console.error("saveProgress: userId is required"),!1;try{const t=zf(r);return await hE(t,{...e,lastPlayed:uE()}),console.log("Progress saved successfully for user:",r.substring(0,8)),!0}catch(t){throw console.error("Failed to save progress:",t.message),t}}async function RC(r){var e;if(!r)return console.error("loadProgress: userId is required"),Pr;try{const t=zf(r),s=await yC(t);if(s.exists()){const o=s.data();return console.log("Progress loaded for user:",r.substring(0,8)),{...Pr,...o,lastPlayed:((e=o.lastPlayed)==null?void 0:e.toDate())||null}}else return console.log("No progress found for user, returning defaults:",r.substring(0,8)),Pr}catch(t){return console.error("Failed to load progress:",t.message),Pr}}async function CC(r){if(!r)return console.error("resetProgress: userId is required"),!1;try{const e=zf(r);return await hE(e,{...Pr,lastPlayed:uE()}),console.log("Progress reset for user:",r.substring(0,8)),!0}catch(e){throw console.error("Failed to reset progress:",e.message),e}}const xC=2e3;function PC(r){const[e,t]=K.useState(Pr),[s,o]=K.useState(!0),[u,h]=K.useState(!1),[m,g]=K.useState(null),_=K.useRef(!1),w=K.useRef(null),T=K.useRef(!0);K.useEffect(()=>{if(!r){o(!1);return}let B=!1;async function ae(){try{o(!0),g(null);const ue=await RC(r);!B&&T.current&&(t(ue),_.current=!0)}catch(ue){!B&&T.current&&(console.error("useGameProgress: Failed to load progress",ue),g(ue),t(Pr),_.current=!0)}finally{!B&&T.current&&o(!1)}}return ae(),()=>{B=!0}},[r]),K.useEffect(()=>(T.current=!0,()=>{T.current=!1,w.current&&clearTimeout(w.current)}),[]);const R=K.useCallback(B=>{!r||!_.current||(w.current&&clearTimeout(w.current),w.current=setTimeout(async()=>{if(T.current)try{h(!0),await Py(r,B),T.current&&g(null)}catch(ae){console.error("useGameProgress: Failed to save progress",ae),T.current&&g(ae)}finally{T.current&&h(!1)}},xC))},[r]),z=K.useCallback(B=>{t(ae=>{const ue={...ae,...B};return R(ue),ue})},[R]),q=K.useCallback(async()=>{if(!r)return t(Pr),!0;try{return h(!0),g(null),await CC(r),T.current&&t(Pr),!0}catch(B){return console.error("useGameProgress: Failed to reset progress",B),T.current&&g(B),!1}finally{T.current&&h(!1)}},[r]),$=K.useCallback(async()=>{if(!r||!_.current)return!1;w.current&&clearTimeout(w.current);try{return h(!0),await Py(r,e),T.current&&g(null),!0}catch(B){return console.error("useGameProgress: Failed to force save",B),T.current&&g(B),!1}finally{T.current&&h(!1)}},[r,e]);return{progress:e,updateProgress:z,resetProgress:q,forceSave:$,loading:s,saving:u,error:m}}const md=[{id:1,name:"First Steps",operators:["+"],minNumber:1,maxNumber:5,ageTarget:"5-6"},{id:2,name:"Addition Hero",operators:["+"],minNumber:1,maxNumber:10,ageTarget:"6"},{id:3,name:"Minus Magic",operators:["-"],minNumber:1,maxNumber:10,ageTarget:"6-7"},{id:4,name:"Mixed Warrior",operators:["+","-"],minNumber:1,maxNumber:10,ageTarget:"7"},{id:5,name:"Cross the 10",operators:["+"],minNumber:1,maxNumber:20,ageTarget:"7"},{id:6,name:"Subtract 20",operators:["-"],minNumber:1,maxNumber:20,ageTarget:"7-8"},{id:7,name:"Mixed 20",operators:["+","-"],minNumber:1,maxNumber:20,ageTarget:"8"},{id:8,name:"Tens Master",operators:["+","-"],minNumber:10,maxNumber:100,ageTarget:"8-9",multiplesOf:10},{id:9,name:"Century Runner",operators:["+","-"],minNumber:1,maxNumber:100,ageTarget:"9"},{id:10,name:"Speed of 2s",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"9-10",multipliers:[2,5,10]},{id:11,name:"Times Tables",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"10-11",multipliers:[3,4,6,7,8,9]},{id:12,name:"Division Quest",operators:["/"],minNumber:2,maxNumber:10,ageTarget:"11-12",divisors:[2,5,10]},{id:13,name:"Math Champion",operators:["+","-","*","/"],minNumber:1,maxNumber:100,ageTarget:"12-13"}];function Hd(r){if(r<1||r>md.length)throw new Error(`Invalid level: ${r}. Must be 1-${md.length}`);return md[r-1]}const qd={NUM_OPTIONS:4,WRONG_ANSWER_RANGE:3},kC=Hd(2);function Xn(r,e){return Math.floor(Math.random()*(e-r+1))+r}function bu(r,e,t){const s=Math.ceil(r/t)*t,o=[];for(let u=s;u<=e;u+=t)o.push(u);return o[Xn(0,o.length-1)]}function fE(r){const e=[...r];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function NC(r,e,t){t===void 0&&(t=r+20);const s=new Set,o=0,u=[];for(let g=-3;g<=qd.WRONG_ANSWER_RANGE;g++){if(g===0)continue;const _=r+g;_>=o&&_<=t&&u.push(_)}const h=fE(u);for(const g of h){if(s.size>=e)break;s.add(g)}let m=qd.WRONG_ANSWER_RANGE+1;for(;s.size<e;){const g=r+m,_=r-m;if(g<=t&&!s.has(g)&&s.add(g),s.size<e&&_>=o&&!s.has(_)&&s.add(_),m++,m>t)break}return Array.from(s).slice(0,e)}function ky(r=kC){const{operators:e,minNumber:t,maxNumber:s,multiplesOf:o,multipliers:u,divisors:h}=r,m=e[Xn(0,e.length-1)];let g,_,w,T;if(m==="+")g=o?bu(t,s,o):Xn(t,s),_=o?bu(t,s,o):Xn(t,s),w=g+_,T=s*2;else if(m==="-")g=o?bu(t,s,o):Xn(t,s),_=o?bu(t,g,o):Xn(t,g),g<_&&([g,_]=[_,g]),w=g-_,T=s;else if(m==="*"){const q=u||[2,3,4,5,6,7,8,9,10];g=q[Xn(0,q.length-1)],_=Xn(1,10),w=g*_,T=Math.max(...q)*10}else{const q=h||[2,3,4,5];_=q[Xn(0,q.length-1)];const $=Xn(1,10);g=_*$,w=$,T=Math.max(...q)*10}const R=NC(w,qd.NUM_OPTIONS-1,T),z=fE([w,...R]);return{num1:g,num2:_,operator:m,correctAnswer:w,options:z}}function bC(r,e){return r===e}const DC=8,OC=-12,VC=3,LC=-8,MC=3e3,FC=1e4,UC=1.3,jC=1.6,zC=35,BC=20,$C=5,HC=85,qC=3,WC=50,pE="RECORD_ANSWER",mE="ACKNOWLEDGE_LEVEL_UP",gE="RESET";function Wd(r){return Math.min(100,Math.max(0,Math.round(r)))}function GC(r){let e=DC;return r<MC&&(e+=VC),e}function KC(r){return r>FC?LC:OC}function QC(r,e){return e>=5?r*jC:e>=2?r*UC:r}function yE(r){return{score:Wd(r??WC),streak:0,consecutiveWrong:0,shouldLevelUp:!1,lastDelta:0}}function YC(r,e){switch(e.type){case pE:{const{isCorrect:t,responseTimeMs:s}=e.payload;if(t){const m=r.streak+1,g=GC(s),_=QC(g,m),w=Math.round(_),T=Wd(r.score+w),R=T>=HC&&m>=qC;return{score:T,streak:m,consecutiveWrong:0,shouldLevelUp:r.shouldLevelUp||R,lastDelta:w}}const o=KC(s),u=Wd(r.score+o),h=r.consecutiveWrong+1;return{score:u,streak:0,consecutiveWrong:h,shouldLevelUp:r.shouldLevelUp,lastDelta:o}}case mE:return{...r,shouldLevelUp:!1};case gE:return yE(e.payload);default:return r}}function JC(r){const[e,t]=K.useReducer(YC,r,yE),s=K.useCallback((g,_)=>{t({type:pE,payload:{isCorrect:g,responseTimeMs:_}})},[]),o=K.useCallback(()=>{t({type:mE})},[]),u=K.useCallback(g=>{t({type:gE,payload:g})},[]),h=e.score<zC,m=e.score<BC&&e.consecutiveWrong>=$C;return{score:e.score,streak:e.streak,consecutiveWrong:e.consecutiveWrong,isStruggling:h,isCritical:m,shouldLevelUp:e.shouldLevelUp,lastDelta:e.lastDelta,recordAnswer:s,acknowledgeLevelUp:o,reset:u}}const XC=2e3,ZC=10,gd={isPlaying:!1,currentProblem:null,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0,bestStreak:0,totalProblems:0,correctAnswers:0};function ex({currentLevel:r=2,updateProgress:e,initialProgress:t}={}){const s=JC(),[o,u]=K.useState(()=>({...gd,score:(t==null?void 0:t.score)??0,bestStreak:(t==null?void 0:t.streak)??0,totalProblems:(t==null?void 0:t.totalProblems)??0,correctAnswers:(t==null?void 0:t.correctAnswers)??0})),h=K.useRef(null),m=K.useRef(!0),g=K.useRef(null);K.useEffect(()=>(m.current=!0,()=>{m.current=!1,h.current&&clearTimeout(h.current)}),[]),K.useEffect(()=>{t&&!o.isPlaying&&u($=>({...$,score:t.score??$.score,bestStreak:t.streak??$.bestStreak,totalProblems:t.totalProblems??$.totalProblems,correctAnswers:t.correctAnswers??$.correctAnswers}))},[t,o.isPlaying]);const _=K.useCallback(()=>{const $=ky(Hd(r));s.reset(),g.current=Date.now(),u(B=>({...B,isPlaying:!0,currentProblem:$,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0}))},[r,s]),w=K.useCallback(()=>{if(!m.current)return;const $=ky(Hd(r));g.current=Date.now(),u(B=>({...B,currentProblem:$,userAnswer:null,showFeedback:!1,isCorrect:!1}))},[r]),T=K.useCallback($=>{const B=o;if(!B.isPlaying||!B.currentProblem||B.showFeedback)return;const ae=bC($,B.currentProblem.correctAnswer),ue=Date.now()-g.current;s.recordAnswer(ae,ue),u(ne=>{const pe=ae?ne.score+ZC:ne.score,Ce=ae?ne.streak+1:0,Te=Math.max(ne.bestStreak,Ce),k=ne.totalProblems+1,A=ae?ne.correctAnswers+1:ne.correctAnswers;return e&&e({score:pe,streak:Te,currentStreak:Ce,totalProblems:k,correctAnswers:A}),{...ne,userAnswer:$,showFeedback:!0,isCorrect:ae,score:pe,streak:Ce,bestStreak:Te,totalProblems:k,correctAnswers:A}}),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{m.current&&w()},XC)},[o,e,w,s]),R=K.useCallback(()=>{h.current&&clearTimeout(h.current),s.reset(),u($=>({...gd,score:$.score,bestStreak:$.bestStreak,totalProblems:$.totalProblems,correctAnswers:$.correctAnswers}))},[s]),z=K.useCallback(()=>{h.current&&clearTimeout(h.current),s.reset(),u(gd)},[s]),q=K.useCallback(()=>o.totalProblems===0?0:Math.round(o.correctAnswers/o.totalProblems*100),[o.totalProblems,o.correctAnswers]);return{gameState:o,currentProblem:o.currentProblem,userAnswer:o.userAnswer,score:o.score,streak:s.streak,bestStreak:o.bestStreak,isPlaying:o.isPlaying,showFeedback:o.showFeedback,isCorrect:o.isCorrect,totalProblems:o.totalProblems,correctAnswers:o.correctAnswers,confidenceScore:s.score,isStruggling:s.isStruggling,isCritical:s.isCritical,shouldLevelUp:s.shouldLevelUp,lastDelta:s.lastDelta,consecutiveWrong:s.consecutiveWrong,acknowledgeLevelUp:s.acknowledgeLevelUp,handleAnswer:T,startGame:_,nextProblem:w,resetGame:R,fullReset:z,accuracy:q()}}var yd={exports:{}},_d,Ny;function tx(){if(Ny)return _d;Ny=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return _d=r,_d}var vd,by;function nx(){if(by)return vd;by=1;var r=tx();function e(){}function t(){}return t.resetWarningCache=e,vd=function(){function s(h,m,g,_,w,T){if(T!==r){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}s.isRequired=s;function o(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return u.PropTypes=u,u},vd}var Dy;function rx(){return Dy||(Dy=1,yd.exports=nx()()),yd.exports}var ix=rx();const Z=Qd(ix);function _E({num1:r,num2:e,operator:t}){return C.jsx("section",{className:"bg-sonic-blue rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md mx-auto","aria-label":"Math Problem",children:C.jsx("div",{className:"text-center",children:C.jsxs("p",{className:`text-4xl md:text-6xl font-game text-white tracking-wide
                     drop-shadow-md select-none`,"aria-live":"polite","aria-atomic":"true",children:[C.jsx("span",{className:"inline-block mx-2",children:r}),C.jsx("span",{className:"inline-block mx-2 text-sonic-gold",children:t}),C.jsx("span",{className:"inline-block mx-2",children:e}),C.jsx("span",{className:"inline-block mx-2",children:"="}),C.jsx("span",{className:"inline-block mx-2 text-sonic-gold animate-pulse",children:"?"})]})})})}_E.propTypes={num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.string.isRequired};function vE({options:r,onAnswer:e,disabled:t=!1}){const s=u=>{t||e(u)},o=(u,h)=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),s(h))};return C.jsx("div",{className:"grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto mt-6",role:"group","aria-label":"Answer Options",children:r.map((u,h)=>C.jsx("button",{onClick:()=>s(u),onKeyDown:m=>o(m,u),disabled:t,className:`
            bg-sonic-gold text-sonic-blue font-game
            text-3xl md:text-4xl
            py-6 md:py-8 px-4
            rounded-xl shadow-lg
            transform transition-all duration-200
            select-none
            ${t?"opacity-50 cursor-not-allowed":`hover:bg-yellow-400 hover:scale-105
                   active:scale-95 active:bg-yellow-500
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`}
          `,"aria-label":`Answer: ${u}`,children:u},`answer-${h}-${u}`))})}vE.propTypes={options:Z.arrayOf(Z.number).isRequired,onAnswer:Z.func.isRequired,disabled:Z.bool};function EE({score:r,streak:e}){const s=e>=10?{emoji:"🔥",label:"On Fire!"}:e>=5?{emoji:"⚡",label:"Lightning!"}:e>=3?{emoji:"🦔",label:"Speedy!"}:{emoji:"⭐",label:"Keep going!"};return C.jsxs("div",{className:`flex justify-between items-center w-full max-w-md mx-auto
                 bg-black/30 rounded-xl p-4 md:p-5`,role:"status","aria-label":`Score: ${r}, Streak: ${e}`,children:[C.jsxs("div",{className:"text-center flex-1",children:[C.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Score"}),C.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                     transition-all duration-300`,"aria-live":"polite",children:r})]}),C.jsx("div",{className:"w-px h-12 bg-white/20 mx-4","aria-hidden":"true"}),C.jsxs("div",{className:"text-center flex-1",children:[C.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Streak"}),C.jsxs("div",{className:"flex items-center justify-center gap-2",children:[C.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                       transition-all duration-300
                       ${e>0?"animate-bounce":""}`,"aria-live":"polite",children:e}),e>0&&C.jsx("span",{className:"text-2xl md:text-3xl transition-transform duration-300","aria-label":s.label,role:"img",children:s.emoji})]})]})]})}EE.propTypes={score:Z.number.isRequired,streak:Z.number.isRequired};const sx=[{text:"Sonic Speed!",emoji:"🦔💨"},{text:"Amazing!",emoji:"⭐"},{text:"Perfect!",emoji:"🎯"},{text:"Great Job!",emoji:"🎉"},{text:"You're on Fire!",emoji:"🔥"},{text:"Super Star!",emoji:"🌟"},{text:"Awesome!",emoji:"✨"},{text:"Incredible!",emoji:"💫"}],ox=[{text:"Try Again!",emoji:"💪"},{text:"Almost There!",emoji:"🎈"},{text:"Keep Going!",emoji:"🚀"},{text:"You've Got This!",emoji:"👍"},{text:"So Close!",emoji:"🌈"},{text:"One More Try!",emoji:"🎮"}],Oy=200,Vy=1500,ax=200;function wE({isCorrect:r,onComplete:e=null}){const[t,s]=K.useState(!1),[o,u]=K.useState(!1),[h,m]=K.useState({text:"",emoji:""}),g=K.useCallback(()=>{const _=r?sx:ox,w=Math.floor(Math.random()*_.length);return _[w]},[r]);return K.useEffect(()=>{m(g()),s(!0),u(!1);const _=setTimeout(()=>{u(!0)},Oy+Vy),w=setTimeout(()=>{s(!1),e&&e()},Oy+Vy+ax);return()=>{clearTimeout(_),clearTimeout(w)}},[r,e,g]),t?C.jsx("div",{className:`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        transition-opacity duration-200
        ${o?"opacity-0":"opacity-100"}
      `,"aria-live":"polite",role:"status",children:C.jsxs("div",{className:`
          flex flex-col items-center justify-center
          p-8 rounded-3xl
          ${r?"bg-gradient-to-br from-green-500 to-emerald-600 animate-feedback-correct":"bg-gradient-to-br from-orange-400 to-amber-500 animate-feedback-wrong"}
          shadow-2xl
          transform
          ${o?"scale-90 opacity-0":"scale-100 opacity-100"}
          transition-all duration-200
        `,children:[C.jsx("div",{className:`text-6xl md:text-7xl mb-4 ${r?"animate-bounce-custom":"animate-shake"}`,children:r?"✅":"🔄"}),C.jsx("h2",{className:`
            text-3xl md:text-4xl font-game text-white text-center
            drop-shadow-lg
            ${r?"animate-pulse-scale":""}
          `,children:h.text}),C.jsx("span",{className:"text-4xl md:text-5xl mt-3 animate-bounce",children:h.emoji}),r&&C.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden rounded-3xl",children:[C.jsx("div",{className:"sparkle sparkle-1",children:"✨"}),C.jsx("div",{className:"sparkle sparkle-2",children:"⭐"}),C.jsx("div",{className:"sparkle sparkle-3",children:"💫"}),C.jsx("div",{className:"sparkle sparkle-4",children:"🌟"}),C.jsx("div",{className:"sparkle sparkle-5",children:"✨"}),C.jsx("div",{className:"sparkle sparkle-6",children:"⭐"})]})]})}):null}wE.propTypes={isCorrect:Z.bool.isRequired,onComplete:Z.func};const lx=5;function TE({color:r,faded:e,index:t,testId:s}){return C.jsx("span",{className:`
        inline-block rounded-full
        w-6 h-6 md:w-7 md:h-7
        ${r}
        ${e?"opacity-50":""}
        animate-aid-enter motion-reduce:animate-none
      `,style:{animationDelay:`${t*60}ms`,animationFillMode:"both"},"aria-hidden":"true","data-testid":s})}TE.propTypes={color:Z.string.isRequired,faded:Z.bool.isRequired,index:Z.number.isRequired,testId:Z.string.isRequired};function Va({count:r,color:e,faded:t,startIndex:s,testIdPrefix:o}){return C.jsx("div",{className:"grid gap-2",style:{gridTemplateColumns:`repeat(${lx}, auto)`},"data-testid":`${o}-group`,children:Array.from({length:r}).map((u,h)=>C.jsx(TE,{color:e,faded:t,index:s+h,testId:`${o}-dot-${h}`},h))})}Va.propTypes={count:Z.number.isRequired,color:Z.string.isRequired,faded:Z.bool.isRequired,startIndex:Z.number.isRequired,testIdPrefix:Z.string.isRequired};function IE({num1:r,num2:e,operator:t}){if(t==="+")return C.jsxs("div",{className:"flex flex-wrap items-center gap-3",role:"img","aria-label":`${r} blue dots plus ${e} gold dots`,"data-testid":"dot-counter",children:[C.jsx(Va,{count:r,color:"bg-sonic-blue",faded:!1,startIndex:0,testIdPrefix:"num1"}),C.jsx("span",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md select-none","aria-hidden":"true","data-testid":"operator-label",children:"+"}),C.jsx(Va,{count:e,color:"bg-sonic-gold",faded:!1,startIndex:r,testIdPrefix:"num2"})]});const s=r-e;return C.jsxs("div",{className:"flex flex-wrap items-center gap-3",role:"img","aria-label":`${r} blue dots minus ${e} faded dots`,"data-testid":"dot-counter",children:[C.jsx(Va,{count:s,color:"bg-sonic-blue",faded:!1,startIndex:0,testIdPrefix:"solid"}),C.jsx("span",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md select-none","aria-hidden":"true","data-testid":"operator-label",children:"-"}),C.jsx(Va,{count:e,color:"bg-sonic-blue",faded:!0,startIndex:s,testIdPrefix:"faded"})]})}IE.propTypes={num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.oneOf(["+","-"]).isRequired};const Ly=24,ux=120,sr=85,cx=8,hx=14,dx=6,SE=22,fx=100,My=60,px="#666666",Fy="#999999",AE="#0066cc",mx="#ffd700";function gx(r,e,t){const s=t==="+"?r+e:r-e;return Math.max(r,r+e,s,20)}function yx(r){return r%5===0}function gs(r,e,t){const s=t-2*Ly;return Ly+r/e*s}function _x(r,e){const t=(r+e)/2,s=sr-SE;return`M ${r} ${sr} Q ${t} ${s} ${e} ${sr}`}function vx(r,e,t){return`Number line showing ${r} ${t==="+"?"plus":"minus"} ${e}, answer hidden`}function RE({maxValue:r,viewBoxWidth:e}){const t=gs(0,r,e),s=gs(r,r,e);return C.jsx("line",{x1:t,y1:sr,x2:s,y2:sr,stroke:px,strokeWidth:2,"data-testid":"number-line-base"})}RE.propTypes={maxValue:Z.number.isRequired,viewBoxWidth:Z.number.isRequired};function CE({maxValue:r,viewBoxWidth:e}){const t=[];for(let s=0;s<=r;s++){const o=gs(s,r,e),u=yx(s),h=u?hx:cx;t.push(C.jsxs("g",{"data-testid":`tick-${s}`,children:[C.jsx("line",{x1:o,y1:sr-h/2,x2:o,y2:sr+h/2,stroke:Fy,strokeWidth:1}),u&&C.jsx("text",{x:o,y:sr+h/2+14,textAnchor:"middle",fontSize:"11",fill:Fy,fontFamily:"Comic Sans MS, cursive, sans-serif","data-testid":`tick-label-${s}`,children:s})]},s))}return C.jsx(C.Fragment,{children:t})}CE.propTypes={maxValue:Z.number.isRequired,viewBoxWidth:Z.number.isRequired};function xE({num1:r,maxValue:e,viewBoxWidth:t}){const s=gs(r,e,t);return C.jsx("circle",{cx:s,cy:sr,r:dx,fill:AE,"data-testid":"start-dot"})}xE.propTypes={num1:Z.number.isRequired,maxValue:Z.number.isRequired,viewBoxWidth:Z.number.isRequired};function PE({num1:r,num2:e,operator:t,maxValue:s,viewBoxWidth:o}){const u=t==="+"?1:-1,h=[];for(let m=0;m<e;m++){const g=r+m*u,_=g+u,w=gs(g,s,o),T=gs(_,s,o),R=_x(w,T);h.push(C.jsx("path",{d:R,fill:"none",stroke:AE,strokeWidth:2,strokeDasharray:My,strokeDashoffset:My,className:"animate-arc-draw motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]",style:{animationDelay:`${m*fx}ms`,animationFillMode:"forwards"},"data-testid":`arc-${m}`},m))}return C.jsx(C.Fragment,{children:h})}PE.propTypes={num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.oneOf(["+","-"]).isRequired,maxValue:Z.number.isRequired,viewBoxWidth:Z.number.isRequired};function kE({num1:r,num2:e,operator:t,maxValue:s,viewBoxWidth:o}){const u=t==="+"?r+e:r-e,h=gs(u,s,o);return C.jsx("text",{x:h,y:sr-SE-8,textAnchor:"middle",fontSize:"20",fontWeight:"bold",fill:mx,fontFamily:"Comic Sans MS, cursive, sans-serif","data-testid":"answer-marker",children:"?"})}kE.propTypes={num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.oneOf(["+","-"]).isRequired,maxValue:Z.number.isRequired,viewBoxWidth:Z.number.isRequired};const uo=400;function NE({num1:r,num2:e,operator:t}){const s=gx(r,e,t),o=vx(r,e,t);return C.jsxs("svg",{viewBox:`0 0 ${uo} ${ux}`,className:"w-full max-h-[120px]",role:"img","aria-label":o,"data-testid":"number-line",children:[C.jsx(RE,{maxValue:s,viewBoxWidth:uo}),C.jsx(CE,{maxValue:s,viewBoxWidth:uo}),C.jsx(xE,{num1:r,maxValue:s,viewBoxWidth:uo}),C.jsx(PE,{num1:r,num2:e,operator:t,maxValue:s,viewBoxWidth:uo}),C.jsx(kE,{num1:r,num2:e,operator:t,maxValue:s,viewBoxWidth:uo})]})}NE.propTypes={num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.oneOf(["+","-"]).isRequired};const Uy=4,Ex=7;function wx(r){return r>=1&&r<=Uy?IE:r>=Uy+1&&r<=Ex?NE:null}function bE({isStruggling:r,currentLevel:e,num1:t,num2:s,operator:o,problemKey:u}){const[h,m]=K.useState(!1);if(K.useEffect(()=>{m(!1)},[u]),!r||h)return null;const g=wx(e);return g?C.jsxs("div",{className:`
        max-h-[120px] overflow-hidden
        bg-black/20 backdrop-blur-sm rounded-2xl p-3
        animate-aid-enter motion-reduce:animate-none
      `,"data-testid":"learning-aid-container",children:[C.jsx(g,{num1:t,num2:s,operator:o}),C.jsx("button",{type:"button",onClick:()=>m(!0),className:`
          mt-2 w-full min-h-[44px]
          bg-sonic-gold hover:bg-yellow-400
          text-black font-game text-base
          rounded-xl shadow-md
          transform transition-all duration-200
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-yellow-300
        `,"aria-label":"Dismiss learning aid","data-testid":"dismiss-aid-button",children:"I got it!"})]}):null}bE.propTypes={isStruggling:Z.bool.isRequired,currentLevel:Z.number.isRequired,num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.string.isRequired,problemKey:Z.oneOfType([Z.string,Z.number]).isRequired};function DE({onGameEnd:r,updateProgress:e=null,initialProgress:t=null}){const{currentProblem:s,score:o,streak:u,bestStreak:h,showFeedback:m,isCorrect:g,handleAnswer:_,startGame:w,isPlaying:T,totalProblems:R,correctAnswers:z,accuracy:q,isStruggling:$}=ex({updateProgress:e,initialProgress:t});if(!T)return w(),null;if(!s)return C.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex items-center justify-center",children:C.jsx("p",{className:"text-white font-game text-2xl",children:"Loading..."})});const B=()=>{r&&r({score:o,streak:h,totalProblems:R,correctAnswers:z,accuracy:q})};return C.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col p-4 md:p-6 relative",children:[C.jsxs("header",{className:"flex justify-between items-start gap-4 mb-6 md:mb-8",children:[C.jsx("div",{className:"flex-1",children:C.jsx(EE,{score:o,streak:u})}),C.jsx("button",{onClick:B,className:`
            bg-sonic-red/80 hover:bg-sonic-red
            text-white font-game text-sm md:text-base
            px-4 py-2 rounded-lg
            shadow-lg
            transform transition-all duration-200
            hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-red-300
          `,"aria-label":"Exit game and return to start screen",children:"Exit"})]}),C.jsxs("main",{className:"flex-1 flex flex-col items-center justify-center gap-6 md:gap-8",children:[C.jsx("div",{className:"w-full transform transition-all duration-300 ease-out",children:C.jsx(_E,{num1:s.num1,num2:s.num2,operator:s.operator})}),C.jsx(bE,{isStruggling:$,currentLevel:2,num1:s.num1,num2:s.num2,operator:s.operator,problemKey:R}),C.jsx("div",{className:"w-full",children:C.jsx(vE,{options:s.options,onAnswer:_,disabled:m})})]}),C.jsx("footer",{className:"h-8 md:h-12","aria-hidden":"true"}),m&&C.jsx(wE,{isCorrect:g})]})}DE.propTypes={onGameEnd:Z.func.isRequired,updateProgress:Z.func,initialProgress:Z.shape({score:Z.number,streak:Z.number,totalProblems:Z.number,correctAnswers:Z.number})};function OE({onStart:r,progress:e=null}){const t=e&&(e.score>0||e.streak>0);return C.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[C.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[C.jsx("div",{className:"absolute top-10 left-10 text-4xl animate-bounce opacity-50",children:"*"}),C.jsx("div",{className:"absolute top-20 right-16 text-3xl animate-pulse opacity-40",children:"*"}),C.jsx("div",{className:"absolute bottom-32 left-20 text-5xl animate-bounce opacity-30",children:"*"}),C.jsx("div",{className:"absolute bottom-20 right-10 text-4xl animate-pulse opacity-50",children:"*"})]}),C.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[C.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-4 animate-pulse-scale`,children:"Sonic Math Trainer!"}),C.jsxs("div",{className:"flex justify-center gap-2 text-4xl md:text-5xl mb-6",children:[C.jsx("span",{role:"img","aria-label":"hedgehog",children:"🦔"}),C.jsx("span",{role:"img","aria-label":"dash",children:"💨"})]}),C.jsx("p",{className:"text-xl md:text-2xl font-game text-white/90 mb-8 drop-shadow-md",children:"Time to boost your math power!"}),t&&C.jsxs("div",{className:`bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm
                       transform transition-all duration-300 hover:scale-105`,role:"status","aria-label":`Your best: ${e.score} points, ${e.streak} streak`,children:[C.jsx("p",{className:"text-lg md:text-xl font-game text-sonic-gold mb-2",children:"Your Best:"}),C.jsxs("div",{className:"flex justify-center items-center gap-6 flex-wrap",children:[C.jsxs("div",{className:"text-center",children:[C.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.score}),C.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"points"})]}),C.jsx("div",{className:"w-px h-12 bg-white/30","aria-hidden":"true"}),C.jsxs("div",{className:"text-center",children:[C.jsxs("div",{className:"flex items-center justify-center gap-2",children:[C.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.streak}),C.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]}),C.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"streak"})]})]}),e.totalProblems>0&&C.jsxs("p",{className:"text-base text-white/80 font-game mt-4",children:["Accuracy: ",Math.round(e.correctAnswers/e.totalProblems*100),"%"]})]}),C.jsx("button",{onClick:r,className:`
            bg-gradient-to-r from-sonic-gold to-yellow-400
            text-blue-900 font-game text-2xl md:text-3xl
            px-12 py-6 rounded-2xl
            shadow-lg shadow-yellow-500/50
            transform transition-all duration-300
            hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/60
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-yellow-300
            animate-pulse-scale
          `,"aria-label":"Start the math game",children:"Start Game!"}),C.jsxs("p",{className:"text-lg md:text-xl font-game text-white/70 mt-8",children:[C.jsx("span",{role:"img","aria-label":"star",children:"⭐"})," Tap the correct answer to score points!"," ",C.jsx("span",{role:"img","aria-label":"star",children:"⭐"})]})]}),C.jsx("div",{className:"absolute bottom-4 text-center text-white/40 font-game text-sm",children:"Math is fun!"})]})}OE.propTypes={onStart:Z.func.isRequired,progress:Z.shape({score:Z.number,streak:Z.number,totalProblems:Z.number,correctAnswers:Z.number})};function VE({sessionStats:r,onPlayAgain:e,onExit:t}){const{score:s=0,streak:o=0,totalProblems:u=0,correctAnswers:h=0,accuracy:m=0}=r||{},_=m>=80?{text:"Sonic Speed! Amazing!",emoji:"🦔💨",color:"text-green-400"}:m>=50?{text:"Great effort! Keep practicing!",emoji:"⭐",color:"text-sonic-gold"}:{text:"You're learning! Try again!",emoji:"💪",color:"text-orange-400"};return C.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[C.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[C.jsx("div",{className:"absolute top-10 left-8 text-3xl animate-bounce opacity-60",children:"*"}),C.jsx("div",{className:"absolute top-16 right-12 text-4xl animate-pulse opacity-50",children:"*"}),C.jsx("div",{className:"absolute top-32 left-20 text-2xl animate-bounce opacity-40",children:"*"}),C.jsx("div",{className:"absolute bottom-40 right-20 text-4xl animate-pulse opacity-50",children:"*"}),C.jsx("div",{className:"absolute bottom-24 left-12 text-3xl animate-bounce opacity-60",children:"*"}),C.jsx("div",{className:"absolute top-48 right-8 text-2xl animate-pulse opacity-40",children:"*"})]}),C.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[C.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-2 animate-pulse-scale`,children:"Great Job!"}),C.jsx("div",{className:"text-5xl md:text-6xl mb-6",children:C.jsx("span",{role:"img","aria-label":"party",children:"🎉"})}),C.jsxs("p",{className:`text-xl md:text-2xl font-game ${_.color} mb-6 drop-shadow-md`,children:[_.text," ",C.jsx("span",{role:"img","aria-label":"performance icon",children:_.emoji})]}),C.jsx("div",{className:"bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm",role:"status","aria-label":`Session stats: ${s} points, ${o} streak, ${m}% accuracy`,children:C.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[C.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[C.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Points"}),C.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:s})]}),C.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[C.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Best Streak"}),C.jsxs("div",{className:"flex items-center justify-center gap-2",children:[C.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:o}),o>=3&&C.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]})]}),C.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[C.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Accuracy"}),C.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[Math.round(m),"%"]})]}),C.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[C.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Problems"}),C.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[h,"/",u]})]})]})}),C.jsxs("div",{className:"flex flex-col gap-4",children:[C.jsx("button",{onClick:e,className:`
              bg-gradient-to-r from-sonic-gold to-yellow-400
              text-blue-900 font-game text-2xl md:text-3xl
              px-10 py-5 rounded-2xl w-full
              shadow-lg shadow-yellow-500/50
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/60
              active:scale-95
              focus:outline-none focus:ring-4 focus:ring-yellow-300
              animate-pulse-scale
            `,"aria-label":"Play the game again",children:"Play Again!"}),C.jsx("button",{onClick:t,className:`
              bg-white/20 hover:bg-white/30
              text-white font-game text-lg md:text-xl
              px-8 py-4 rounded-xl w-full
              shadow-md
              transform transition-all duration-300
              hover:scale-105
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-white/50
            `,"aria-label":"Go back to start screen",children:"Back to Start"})]}),C.jsxs("p",{className:"text-lg font-game text-white/60 mt-8",children:["Keep practicing to become a Math Master!"," ",C.jsx("span",{role:"img","aria-label":"trophy",children:"🏆"})]})]})]})}VE.propTypes={sessionStats:Z.shape({score:Z.number,streak:Z.number,totalProblems:Z.number,correctAnswers:Z.number,accuracy:Z.number}).isRequired,onPlayAgain:Z.func.isRequired,onExit:Z.func.isRequired};const LE=K.createContext(null);function ME(){const r=K.useContext(LE);if(r===null)throw new Error("useProfile must be used within a <ProfileProvider>");return r}const FE="math-trainer-profiles",Gd=4,as=12,Tx=4,Rr=["sonic","spiderman"];function Cc(){try{const r=localStorage.getItem(FE);if(r===null)return[];const e=JSON.parse(r);return Array.isArray(e)?e:(console.warn("[profiles] Corrupt data in localStorage — expected array, got",typeof e),[])}catch(r){return console.warn("[profiles] Failed to parse localStorage data:",r.message),[]}}function Bf(r){localStorage.setItem(FE,JSON.stringify(r))}function Ix(r){const e=new Uint8Array(r);let t="";for(let s=0;s<e.length;s++)t+=e[s].toString(16).padStart(2,"0");return t}function jy(){return Cc()}function Sx({nickname:r,theme:e,pinHash:t,firebaseUid:s=null,currentLevel:o=1}){const u=Cc();if(u.length>=Gd)throw new Error(`Maximum of ${Gd} profiles reached`);if(typeof r!="string"||r.trim().length===0)throw new Error("Nickname is required");const h=r.trim();if([...h].length>as)throw new Error(`Nickname must be ${as} characters or fewer`);if(!Rr.includes(e))throw new Error(`Theme must be one of: ${Rr.join(", ")}`);if(typeof t!="string"||!/^[0-9a-f]{64}$/.test(t))throw new Error("pinHash must be a 64-character hex string");const m=new Date().toISOString(),g={id:crypto.randomUUID(),nickname:h,theme:e,pinHash:t,firebaseUid:s,currentLevel:o,createdAt:m,lastActiveAt:m};return u.push(g),Bf(u),g}function zy(r,e){const t=Cc(),s=t.findIndex(m=>m.id===r);if(s===-1)throw new Error(`Profile not found: ${r}`);const{id:o,createdAt:u,...h}=e;return t[s]={...t[s],...h,lastActiveAt:new Date().toISOString()},Bf(t),t[s]}function Ax(r){const e=Cc(),t=e.filter(s=>s.id!==r);return t.length===e.length?!1:(Bf(t),!0)}async function Kd(r){if(typeof r!="string"||!/^\d{4}$/.test(r))throw new Error(`PIN must be exactly ${Tx} digits`);const t=new TextEncoder().encode(r),s=await crypto.subtle.digest("SHA-256",t);return Ix(s)}async function Rx(r,e){return await Kd(r)===e}const ss="math-trainer-active-profile",Cx=3,xx=30,It=Object.freeze({SET_PROFILES:"SET_PROFILES",SET_ACTIVE:"SET_ACTIVE",CLEAR_ACTIVE:"CLEAR_ACTIVE",ADD_PROFILE:"ADD_PROFILE",UPDATE_PROFILE:"UPDATE_PROFILE",DELETE_PROFILE:"DELETE_PROFILE",SET_LOADING:"SET_LOADING",SET_ERROR:"SET_ERROR"}),Px={profiles:[],activeProfile:null,isLoading:!0,error:null};function kx(r,e){var t,s;switch(e.type){case It.SET_PROFILES:return{...r,profiles:e.payload,isLoading:!1};case It.SET_ACTIVE:return{...r,activeProfile:e.payload,error:null};case It.CLEAR_ACTIVE:return{...r,activeProfile:null};case It.ADD_PROFILE:return{...r,profiles:[...r.profiles,e.payload]};case It.UPDATE_PROFILE:return{...r,profiles:r.profiles.map(o=>o.id===e.payload.id?e.payload:o),activeProfile:((t=r.activeProfile)==null?void 0:t.id)===e.payload.id?e.payload:r.activeProfile};case It.DELETE_PROFILE:{const o=r.profiles.filter(u=>u.id!==e.payload);return{...r,profiles:o,activeProfile:((s=r.activeProfile)==null?void 0:s.id)===e.payload?null:r.activeProfile}}case It.SET_LOADING:return{...r,isLoading:e.payload};case It.SET_ERROR:return{...r,error:e.payload};default:return r}}const ka=4;function uc({profileName:r,onSubmit:e,onCancel:t,isVerifying:s=!1,error:o=null,attempts:u=0,maxAttempts:h=3,cooldownSeconds:m=30}){const[g,_]=K.useState(""),[w,T]=K.useState(!1),[R,z]=K.useState(0),q=K.useRef(null),$=R>0;K.useEffect(()=>{u>=h&&R===0&&z(m)},[u,h,m,R]),K.useEffect(()=>{if(!(R<=0))return q.current=setInterval(()=>{z(ne=>ne<=1?(clearInterval(q.current),0):ne-1)},1e3),()=>clearInterval(q.current)},[R]),K.useEffect(()=>{if(o){T(!0),_("");const ne=setTimeout(()=>T(!1),500);return()=>clearTimeout(ne)}},[o]);const B=K.useCallback(ne=>{s||$||_(pe=>{if(pe.length>=ka)return pe;const Ce=pe+ne;return Ce.length===ka&&setTimeout(()=>e(Ce),0),Ce})},[s,$,e]),ae=K.useCallback(()=>{s||$||_(ne=>ne.slice(0,-1))},[s,$]);K.useEffect(()=>{function ne(pe){pe.key>="0"&&pe.key<="9"?B(pe.key):pe.key==="Backspace"?ae():pe.key==="Escape"&&t()}return window.addEventListener("keydown",ne),()=>window.removeEventListener("keydown",ne)},[B,ae,t]);const ue=[["1","2","3"],["4","5","6"],["7","8","9"],["backspace","0","cancel"]];return C.jsx("div",{className:`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm
                 flex items-center justify-center p-4`,role:"dialog","aria-label":`Enter PIN for ${r}`,"aria-modal":"true",children:C.jsxs("div",{className:`bg-gradient-to-b from-sonic-blue to-blue-900
                      rounded-3xl p-6 w-full max-w-xs shadow-2xl`,children:[C.jsx("h2",{className:"text-xl font-game text-white text-center mb-1 drop-shadow-md",children:"Enter PIN"}),C.jsx("p",{className:"text-sm font-game text-white/70 text-center mb-5",dir:"auto",children:r}),C.jsx("div",{className:`flex justify-center gap-3 mb-5 ${w?"animate-shake":""}`,role:"status","aria-live":"polite","aria-label":`${g.length} of ${ka} digits entered`,children:Array.from({length:ka}).map((ne,pe)=>C.jsx("div",{className:`
                w-5 h-5 rounded-full border-2 transition-all duration-150
                motion-reduce:transition-none
                ${pe<g.length?"bg-sonic-gold border-sonic-gold shadow-md shadow-yellow-500/30 scale-110":"border-white/50 bg-transparent"}
                ${w&&pe<g.length?"border-red-400 bg-red-400":""}
              `,"aria-hidden":"true"},pe))}),o&&C.jsx("p",{className:"text-red-300 text-sm font-game text-center mb-3",role:"alert",children:o}),$&&C.jsxs("p",{className:"text-red-300 text-sm font-game text-center mb-3",role:"alert",children:["Too many tries! Wait ",R,"s"]}),C.jsx("div",{className:"grid grid-cols-3 gap-2 max-w-[280px] mx-auto",children:ue.flat().map(ne=>ne==="backspace"?C.jsx("button",{onClick:ae,disabled:s||$||g.length===0,className:`aspect-square rounded-xl bg-white/10 hover:bg-white/20
                             text-white font-game text-xl
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90 disabled:opacity-30
                             focus:outline-none focus:ring-2 focus:ring-sonic-gold`,"aria-label":"Delete last digit",children:"⌫"},ne):ne==="cancel"?C.jsx("button",{onClick:t,className:`aspect-square rounded-xl bg-sonic-red/60 hover:bg-sonic-red/80
                             text-white font-game text-sm
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90
                             focus:outline-none focus:ring-2 focus:ring-red-300`,"aria-label":"Cancel PIN entry",children:"Back"},ne):C.jsx("button",{onClick:()=>B(ne),disabled:s||$||g.length>=ka,className:`aspect-square rounded-xl bg-white/15 hover:bg-white/25
                           text-white font-game text-2xl
                           flex items-center justify-center
                           transition-all duration-150
                           active:scale-90 disabled:opacity-30
                           focus:outline-none focus:ring-2 focus:ring-sonic-gold`,"aria-label":`Digit ${ne}`,children:ne},ne))}),s&&C.jsx("p",{className:"text-white/70 text-sm font-game text-center mt-4 animate-pulse",children:"Checking..."})]})})}uc.propTypes={profileName:Z.string.isRequired,onSubmit:Z.func.isRequired,onCancel:Z.func.isRequired,isVerifying:Z.bool,error:Z.string,attempts:Z.number,maxAttempts:Z.number,cooldownSeconds:Z.number};const Nx={sonic:"🦔",spiderman:"🕷"},bx={sonic:"border-sonic-blue",spiderman:"border-sonic-red"};function UE({onCreateProfile:r,onProfileActivated:e}){const{profiles:t,selectProfile:s,maxProfiles:o}=ME(),[u,h]=K.useState(null),[m,g]=K.useState(!1),[_,w]=K.useState(null),[T,R]=K.useState(0),z=K.useCallback(B=>{h(B),w(null),R(0)},[]),q=K.useCallback(async B=>{if(u){g(!0),w(null);try{await s(u,B)?(h(null),e&&e()):(R(ue=>ue+1),w("Oops! Wrong PIN. Try again."),navigator.vibrate&&navigator.vibrate(100))}catch{w("Something went wrong. Try again.")}finally{g(!1)}}},[u,s,e]),$=K.useCallback(()=>{h(null),w(null),R(0)},[]);return t.length===0?C.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                      flex flex-col items-center justify-center p-6`,children:[C.jsx("h1",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-4 text-center",children:"Welcome to Math Trainer!"}),C.jsx("p",{className:"text-lg font-game text-white/80 mb-8 text-center",children:"Create your first hero to start playing!"}),C.jsx("button",{onClick:r,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                     text-blue-900 font-game text-xl
                     px-10 py-5 rounded-2xl
                     shadow-lg shadow-yellow-500/50
                     transform transition-all duration-300
                     hover:scale-110 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Create your first hero profile",children:"+ Create Hero"})]}):C.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                    flex flex-col items-center p-6`,children:[C.jsx("h1",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-8 mt-8 text-center",children:"Who's playing?"}),C.jsxs("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md",children:[t.map(B=>C.jsxs("button",{onClick:()=>z(B),className:`
              bg-black/20 backdrop-blur-sm rounded-2xl p-4
              border-2 ${bx[B.theme]||"border-white/30"}
              flex flex-col items-center gap-2
              transform transition-all duration-200
              hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-sonic-gold
            `,"aria-label":`Select ${B.nickname}, Level ${B.currentLevel}`,children:[C.jsx("span",{className:"text-4xl",role:"img","aria-hidden":"true",children:Nx[B.theme]||B.nickname.charAt(0).toUpperCase()}),C.jsx("span",{className:"text-lg font-game text-white truncate w-full text-center",dir:"auto",children:B.nickname}),C.jsxs("span",{className:"text-xs font-game text-sonic-gold bg-sonic-gold/20 px-2 py-0.5 rounded-full",children:["Level ",B.currentLevel]})]},B.id)),t.length<o&&C.jsxs("button",{onClick:r,className:`bg-transparent rounded-2xl p-4
                       border-2 border-dashed border-white/30
                       flex flex-col items-center justify-center gap-2
                       transform transition-all duration-200
                       hover:scale-105 hover:border-sonic-gold/50 active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-sonic-gold
                       min-h-[140px]`,"aria-label":"Create a new hero profile",children:[C.jsx("span",{className:"text-4xl text-white/50",children:"+"}),C.jsx("span",{className:"text-sm font-game text-white/50",children:"Add Hero"})]})]}),u&&C.jsx(uc,{profileName:u.nickname,onSubmit:q,onCancel:$,isVerifying:m,error:_,attempts:T,maxAttempts:Cx,cooldownSeconds:xx})]})}UE.propTypes={onCreateProfile:Z.func.isRequired,onProfileActivated:Z.func};const kt=Object.freeze({SET_NICKNAME:"SET_NICKNAME",SET_THEME:"SET_THEME",SET_PIN_HASH:"SET_PIN_HASH",CONFIRM_MISMATCH:"CONFIRM_MISMATCH",SET_SUBMITTING:"SET_SUBMITTING",SET_ERROR:"SET_ERROR",GO_BACK:"GO_BACK",RESET:"RESET"}),jE={step:1,nickname:"",theme:null,pinHash:null,isSubmitting:!1,error:null};function Dx(r,e){switch(e.type){case kt.SET_NICKNAME:return{...r,nickname:e.payload,step:2,error:null};case kt.SET_THEME:return{...r,theme:e.payload,step:3,error:null};case kt.SET_PIN_HASH:return{...r,pinHash:e.payload,step:4,error:null};case kt.CONFIRM_MISMATCH:return{...r,error:"PINs do not match. Try again!"};case kt.SET_SUBMITTING:return{...r,isSubmitting:e.payload,error:null};case kt.SET_ERROR:return{...r,error:e.payload,isSubmitting:!1};case kt.GO_BACK:return r.step===2?{...r,step:1,error:null}:r.step===3?{...r,step:2,error:null}:r.step===4?{...r,step:3,pinHash:null,error:null}:r;case kt.RESET:return{...jE};default:return r}}const By=4,$y={sonic:"🦔",spiderman:"🕷"},Hy={sonic:"Sonic",spiderman:"Spiderman"},Ox={sonic:"shadow-blue-500/40",spiderman:"shadow-red-500/40"},Vx={sonic:"border-sonic-blue",spiderman:"border-sonic-red"};function zE({currentStep:r}){return C.jsx("div",{className:"flex justify-center gap-3 mb-6",role:"group","aria-label":"Profile creation progress",children:Array.from({length:By}).map((e,t)=>{const s=t+1,o=s===r,u=s<r;return C.jsx("div",{className:`
              w-3 h-3 rounded-full transition-all duration-300
              motion-reduce:transition-none
              ${u?"bg-sonic-gold":""}
              ${o?"bg-sonic-gold animate-pulse motion-reduce:animate-none":""}
              ${!u&&!o?"border-2 border-white/30 bg-transparent":""}
            `,"aria-current":o?"step":void 0,"aria-label":`Step ${s} of ${By}${o?", current":u?", completed":""}`},s)})})}zE.propTypes={currentStep:Z.number.isRequired};function BE({onComplete:r,onCancel:e}){const[t,s]=K.useReducer(Dx,jE),o=K.useRef(null),u=K.useRef(null),h=K.useRef(!0);K.useEffect(()=>(h.current=!0,()=>{h.current=!1}),[]),K.useEffect(()=>{t.step===1&&o.current&&o.current.focus()},[t.step]);const[m,g]=K.useReducer((D,I)=>I,t.nickname);K.useEffect(()=>{t.step===1&&g(t.nickname)},[t.step,t.nickname]);const[_,w]=K.useReducer((D,I)=>I,t.theme);K.useEffect(()=>{t.step===2&&w(t.theme)},[t.step,t.theme]);const T=[...m].length,R=as-T,z=m.trim().length>0&&T<=as,q=K.useCallback(D=>{const I=D.target.value;[...I].length<=as&&g(I)},[]),$=K.useCallback(()=>{const D=m.trim();D.length>0&&[...D].length<=as&&s({type:kt.SET_NICKNAME,payload:D})},[m]),B=K.useCallback(D=>{D.key==="Enter"&&(D.preventDefault(),$())},[$]),ae=K.useCallback(()=>{_&&Rr.includes(_)&&s({type:kt.SET_THEME,payload:_})},[_]),ue=K.useCallback(D=>{if(D.key==="ArrowLeft"||D.key==="ArrowRight"){D.preventDefault();const I=Rr.indexOf(_),Pe=D.key==="ArrowRight"?(I+1)%Rr.length:(I-1+Rr.length)%Rr.length;w(Rr[Pe])}},[_]),ne=K.useCallback(async D=>{try{const I=await Kd(D);h.current&&s({type:kt.SET_PIN_HASH,payload:I})}catch{h.current&&s({type:kt.SET_ERROR,payload:"Could not process PIN. Try again."})}},[]),pe=K.useCallback(async D=>{var I;try{const Pe=await Kd(D);if(!h.current)return;if(Pe!==t.pinHash){s({type:kt.CONFIRM_MISMATCH});return}s({type:kt.SET_SUBMITTING,payload:!0});const rt=await R_(lc);if(!h.current)return;const vt=rt.user.uid,We=Sx({nickname:t.nickname,theme:t.theme,pinHash:t.pinHash,firebaseUid:vt});if(!h.current)return;r(We)}catch(Pe){if(!h.current)return;const rt=(I=Pe==null?void 0:Pe.message)!=null&&I.includes("Maximum")?Pe.message:"Could not create hero. Try again!";s({type:kt.SET_ERROR,payload:rt})}},[t.pinHash,t.nickname,t.theme,r]),Ce=K.useCallback(()=>{s({type:kt.SET_ERROR,payload:null})},[]),Te=K.useCallback(()=>{s({type:kt.GO_BACK})},[]);K.useEffect(()=>{function D(I){I.key==="Escape"&&(t.step===1?e():t.isSubmitting||Te())}return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[t.step,t.isSubmitting,e,Te]);const k=()=>t.isSubmitting?null:t.step===1?C.jsx("button",{onClick:e,className:`text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                     hover:text-white transition-colors duration-150
                     focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg`,"aria-label":"Cancel profile creation",children:"Cancel"}):C.jsx("button",{onClick:Te,className:`text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                   hover:text-white transition-colors duration-150
                   focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg`,"aria-label":"Go back to previous step",children:"Back"}),A=()=>C.jsxs("div",{className:"flex flex-col items-center gap-4 w-full max-w-sm",children:[C.jsx("h2",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md text-center",children:"What is your name?"}),C.jsxs("div",{className:"w-full bg-black/20 backdrop-blur-sm rounded-2xl p-4",children:[C.jsx("input",{ref:o,type:"text",value:m,onChange:q,onKeyDown:B,placeholder:"Type your name...",dir:"auto",maxLength:as*2,className:`w-full bg-transparent text-2xl font-game text-white text-center
                     placeholder-white/40 outline-none`,"aria-label":"Enter your nickname"}),C.jsxs("p",{className:"text-white/70 text-xs font-game text-center mt-2",children:[R," characters left"]})]}),C.jsx("button",{onClick:$,disabled:!z,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                   text-blue-900 font-game text-xl
                   px-10 py-4 rounded-2xl min-h-[48px]
                   shadow-lg shadow-yellow-500/50
                   transform transition-all duration-300
                   motion-reduce:transition-none
                   hover:scale-105 active:scale-95
                   disabled:opacity-40 disabled:hover:scale-100
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Continue to theme selection",children:"Next"}),k()]}),x=()=>C.jsxs("div",{className:"flex flex-col items-center gap-4 w-full max-w-sm",children:[C.jsx("h2",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md text-center",children:"Choose your hero!"}),C.jsx("div",{className:"grid grid-cols-2 gap-4 w-full",role:"radiogroup","aria-label":"Select a theme",onKeyDown:ue,children:Rr.map(D=>{const I=_===D;return C.jsxs("button",{role:"radio","aria-checked":I,"aria-label":`${Hy[D]} theme`,onClick:()=>w(D),className:`
                relative bg-black/20 backdrop-blur-sm rounded-2xl p-4
                border-2 min-h-[160px]
                flex flex-col items-center justify-center gap-2
                transform transition-all duration-300
                motion-reduce:transition-none
                hover:scale-105 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-sonic-gold
                ${I?`${Vx[D]} scale-105 shadow-lg ${Ox[D]}`:"border-white/30"}
              `,children:[C.jsx("span",{className:"text-6xl",role:"img","aria-hidden":"true",children:$y[D]}),C.jsx("span",{className:"text-lg font-game text-white",children:Hy[D]}),I&&C.jsx("span",{className:"absolute top-2 right-2 text-sonic-gold text-xl","aria-hidden":"true",children:"✔"})]},D)})}),C.jsx("button",{ref:u,onClick:ae,disabled:!_,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                   text-blue-900 font-game text-xl
                   px-10 py-4 rounded-2xl min-h-[48px]
                   shadow-lg shadow-yellow-500/50
                   transform transition-all duration-300
                   motion-reduce:transition-none
                   hover:scale-105 active:scale-95
                   disabled:opacity-40 disabled:hover:scale-100
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Continue to PIN entry",children:"Next"}),k()]}),N=()=>C.jsx(uc,{profileName:"Choose a secret PIN",onSubmit:ne,onCancel:Te,isVerifying:!1,error:t.error,attempts:0,maxAttempts:999,cooldownSeconds:0}),b=()=>C.jsx(uc,{profileName:"Confirm your PIN",onSubmit:pe,onCancel:Te,isVerifying:t.isSubmitting,error:t.error,attempts:0,maxAttempts:999,cooldownSeconds:0});return t.isSubmitting?C.jsx("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                    flex flex-col items-center justify-center p-6`,role:"dialog","aria-label":"Create a new hero profile",children:C.jsxs("div",{className:"text-center animate-pulse motion-reduce:animate-none",children:[C.jsx("span",{className:"text-6xl block mb-4",role:"img","aria-hidden":"true",children:$y[t.theme]||"🌟"}),C.jsx("h2",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md",children:"Creating your hero..."})]})}):t.error&&t.step===4&&t.pinHash&&t.error!=="PINs do not match. Try again!"&&t.error!=="Could not process PIN. Try again."?C.jsx("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                      flex flex-col items-center justify-center p-6`,role:"dialog","aria-label":"Create a new hero profile",children:C.jsxs("div",{className:"text-center",children:[C.jsx("p",{className:"text-red-300 text-lg font-game mb-6",role:"alert",children:t.error}),C.jsx("button",{onClick:Ce,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                         text-blue-900 font-game text-xl
                         px-10 py-4 rounded-2xl min-h-[48px]
                         shadow-lg shadow-yellow-500/50
                         transform transition-all duration-300
                         motion-reduce:transition-none
                         hover:scale-105 active:scale-95
                         focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Try creating your hero again",children:"Try Again"}),C.jsx("div",{className:"mt-4",children:C.jsx("button",{onClick:Te,className:`text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                           hover:text-white transition-colors duration-150
                           focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg`,"aria-label":"Go back to previous step",children:"Back"})})]})}):t.step===3?N():t.step===4?b():C.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                  flex flex-col items-center justify-center p-6`,role:"dialog","aria-label":"Create a new hero profile",children:[C.jsx(zE,{currentStep:t.step}),t.step===1&&A(),t.step===2&&x()]})}BE.propTypes={onComplete:Z.func.isRequired,onCancel:Z.func.isRequired};function Lx(){const{activeProfile:r,isLoading:e,clearActiveProfile:t,createAndActivate:s}=ME(),{user:o,loading:u,error:h}=AC(),{progress:m,updateProgress:g,forceSave:_,loading:w}=PC((r==null?void 0:r.firebaseUid)??(o==null?void 0:o.uid)),[T,R]=K.useState("start"),[z,q]=K.useState(null),[$,B]=K.useState(!1),ae=e||u||w,ue=K.useCallback(N=>{if(N){const b=N.accuracy??(N.totalProblems>0?Math.round(N.correctAnswers/N.totalProblems*100):0);q({score:N.score??0,streak:N.streak??0,totalProblems:N.totalProblems??0,correctAnswers:N.correctAnswers??0,accuracy:b}),R("result")}else R("start")},[]),ne=K.useCallback(()=>{q(null),R("game")},[]),pe=K.useCallback(()=>{q(null),R("game")},[]),Ce=K.useCallback(()=>{_(),q(null),R("start")},[_]),Te=K.useCallback(()=>{_(),t(),q(null),R("start")},[_,t]),k=K.useCallback(()=>{B(!0)},[]),A=K.useCallback(N=>{s(N),B(!1)},[s]),x=K.useCallback(()=>{B(!1)},[]);return ae?C.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:C.jsxs("div",{className:"animate-pulse",children:[C.jsx("h1",{className:"text-4xl md:text-6xl font-game text-sonic-gold drop-shadow-lg text-center",children:"Loading..."}),C.jsx("p",{className:"text-xl text-white mt-4 font-game text-center",children:e?"Loading heroes...":u?"Connecting to Sonic Speed!":"Loading your progress..."})]})}):!r&&$?C.jsx(BE,{onComplete:A,onCancel:x}):r?h?C.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:C.jsxs("div",{className:"text-center",children:[C.jsx("h1",{className:"text-4xl md:text-6xl font-game text-red-500 drop-shadow-lg",children:"Oops!"}),C.jsx("p",{className:"text-xl text-white mt-4 font-game",children:"Could not connect to save your progress"}),C.jsx("p",{className:"text-sm text-white mt-2 opacity-75",children:h.message}),C.jsx("button",{onClick:()=>R("game"),className:`mt-6 bg-sonic-gold text-sonic-blue font-game px-8 py-4 rounded-full
                       hover:bg-yellow-400 transform hover:scale-105 transition-all
                       shadow-lg active:scale-95 text-xl`,children:"Play Anyway!"})]})}):C.jsxs(C.Fragment,{children:[T==="start"&&C.jsx(OE,{onStart:ne,progress:m,onSwitchProfile:Te,activeProfile:r}),T==="game"&&C.jsx(DE,{onGameEnd:ue,updateProgress:g,initialProgress:m}),T==="result"&&z&&C.jsx(VE,{sessionStats:z,onPlayAgain:pe,onExit:Ce})]}):C.jsx(UE,{onCreateProfile:k})}function $E({children:r}){const[e,t]=K.useReducer(kx,Px);K.useEffect(()=>{const T=jy();t({type:It.SET_PROFILES,payload:T});const R=sessionStorage.getItem(ss);if(R){const z=T.find(q=>q.id===R)||null;z?t({type:It.SET_ACTIVE,payload:z}):sessionStorage.removeItem(ss)}},[]);const s=K.useCallback(async(T,R)=>{if(!await Rx(R,T.pinHash))return!1;const q=zy(T.id,{});return t({type:It.SET_ACTIVE,payload:q}),sessionStorage.setItem(ss,T.id),!0},[]),o=K.useCallback(()=>{t({type:It.CLEAR_ACTIVE}),sessionStorage.removeItem(ss)},[]),u=K.useCallback(()=>{const T=jy();t({type:It.SET_PROFILES,payload:T})},[]),h=K.useCallback(T=>{t({type:It.ADD_PROFILE,payload:T})},[]),m=K.useCallback(T=>{t({type:It.ADD_PROFILE,payload:T}),t({type:It.SET_ACTIVE,payload:T}),sessionStorage.setItem(ss,T.id)},[]),g=K.useCallback((T,R)=>{const z=zy(T,R);return t({type:It.UPDATE_PROFILE,payload:z}),z},[]),_=K.useCallback(T=>{const R=Ax(T);return R&&(t({type:It.DELETE_PROFILE,payload:T}),sessionStorage.getItem(ss)===T&&sessionStorage.removeItem(ss)),R},[]),w=K.useMemo(()=>({profiles:e.profiles,activeProfile:e.activeProfile,isLoading:e.isLoading,error:e.error,maxProfiles:Gd,selectProfile:s,clearActiveProfile:o,refreshProfiles:u,addProfile:h,createAndActivate:m,updateProfile:g,deleteProfile:_}),[e.profiles,e.activeProfile,e.isLoading,e.error,s,o,u,h,m,g,_]);return C.jsx(LE.Provider,{value:w,children:r})}$E.propTypes={children:Z.node.isRequired};o0.createRoot(document.getElementById("root")).render(C.jsx(Zw.StrictMode,{children:C.jsx($E,{children:C.jsx(Lx,{})})}));
