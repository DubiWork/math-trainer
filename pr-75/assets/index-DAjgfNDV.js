(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Qd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jh={exports:{}},xa={},Xh={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function zw(){if(Xm)return xe;Xm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,$={};function z(V,W,Ae){this.props=V,this.context=W,this.refs=$,this.updater=Ae||B}z.prototype.isReactComponent={},z.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},z.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ae(){}ae.prototype=z.prototype;function ue(V,W,Ae){this.props=V,this.context=W,this.refs=$,this.updater=Ae||B}var ne=ue.prototype=new ae;ne.constructor=ue,q(ne,z.prototype),ne.isPureReactComponent=!0;var pe=Array.isArray,Ce=Object.prototype.hasOwnProperty,Te={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(V,W,Ae){var Re,ke={},Ne=null,Be=null;if(W!=null)for(Re in W.ref!==void 0&&(Be=W.ref),W.key!==void 0&&(Ne=""+W.key),W)Ce.call(W,Re)&&!k.hasOwnProperty(Re)&&(ke[Re]=W[Re]);var Me=arguments.length-2;if(Me===1)ke.children=Ae;else if(1<Me){for(var He=Array(Me),Ht=0;Ht<Me;Ht++)He[Ht]=arguments[Ht+2];ke.children=He}if(V&&V.defaultProps)for(Re in Me=V.defaultProps,Me)ke[Re]===void 0&&(ke[Re]=Me[Re]);return{$$typeof:r,type:V,key:Ne,ref:Be,props:ke,_owner:Te.current}}function C(V,W){return{$$typeof:r,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function b(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ae){return W[Ae]})}var D=/\/+/g;function I(V,W){return typeof V=="object"&&V!==null&&V.key!=null?b(""+V.key):W.toString(36)}function Pe(V,W,Ae,Re,ke){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Be=!1;if(V===null)Be=!0;else switch(Ne){case"string":case"number":Be=!0;break;case"object":switch(V.$$typeof){case r:case e:Be=!0}}if(Be)return Be=V,ke=ke(Be),V=Re===""?"."+I(Be,0):Re,pe(ke)?(Ae="",V!=null&&(Ae=V.replace(D,"$&/")+"/"),Pe(ke,W,Ae,"",function(Ht){return Ht})):ke!=null&&(N(ke)&&(ke=C(ke,Ae+(!ke.key||Be&&Be.key===ke.key?"":(""+ke.key).replace(D,"$&/")+"/")+V)),W.push(ke)),1;if(Be=0,Re=Re===""?".":Re+":",pe(V))for(var Me=0;Me<V.length;Me++){Ne=V[Me];var He=Re+I(Ne,Me);Be+=Pe(Ne,W,Ae,He,ke)}else if(He=R(V),typeof He=="function")for(V=He.call(V),Me=0;!(Ne=V.next()).done;)Ne=Ne.value,He=Re+I(Ne,Me++),Be+=Pe(Ne,W,Ae,He,ke);else if(Ne==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Be}function st(V,W,Ae){if(V==null)return V;var Re=[],ke=0;return Pe(V,Re,"","",function(Ne){return W.call(Ae,Ne,ke++)}),Re}function Et(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(Ae){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ae)},function(Ae){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ae)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var We={current:null},te={transition:null},fe={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:te,ReactCurrentOwner:Te};function ie(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:st,forEach:function(V,W,Ae){st(V,function(){W.apply(this,arguments)},Ae)},count:function(V){var W=0;return st(V,function(){W++}),W},toArray:function(V){return st(V,function(W){return W})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},xe.Component=z,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=ue,xe.StrictMode=i,xe.Suspense=g,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,xe.act=ie,xe.cloneElement=function(V,W,Ae){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=q({},V.props),ke=V.key,Ne=V.ref,Be=V._owner;if(W!=null){if(W.ref!==void 0&&(Ne=W.ref,Be=Te.current),W.key!==void 0&&(ke=""+W.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(He in W)Ce.call(W,He)&&!k.hasOwnProperty(He)&&(Re[He]=W[He]===void 0&&Me!==void 0?Me[He]:W[He])}var He=arguments.length-2;if(He===1)Re.children=Ae;else if(1<He){Me=Array(He);for(var Ht=0;Ht<He;Ht++)Me[Ht]=arguments[Ht+2];Re.children=Me}return{$$typeof:r,type:V.type,key:ke,ref:Ne,props:Re,_owner:Be}},xe.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},xe.createElement=A,xe.createFactory=function(V){var W=A.bind(null,V);return W.type=V,W},xe.createRef=function(){return{current:null}},xe.forwardRef=function(V){return{$$typeof:m,render:V}},xe.isValidElement=N,xe.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Et}},xe.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},xe.startTransition=function(V){var W=te.transition;te.transition={};try{V()}finally{te.transition=W}},xe.unstable_act=ie,xe.useCallback=function(V,W){return We.current.useCallback(V,W)},xe.useContext=function(V){return We.current.useContext(V)},xe.useDebugValue=function(){},xe.useDeferredValue=function(V){return We.current.useDeferredValue(V)},xe.useEffect=function(V,W){return We.current.useEffect(V,W)},xe.useId=function(){return We.current.useId()},xe.useImperativeHandle=function(V,W,Ae){return We.current.useImperativeHandle(V,W,Ae)},xe.useInsertionEffect=function(V,W){return We.current.useInsertionEffect(V,W)},xe.useLayoutEffect=function(V,W){return We.current.useLayoutEffect(V,W)},xe.useMemo=function(V,W){return We.current.useMemo(V,W)},xe.useReducer=function(V,W,Ae){return We.current.useReducer(V,W,Ae)},xe.useRef=function(V){return We.current.useRef(V)},xe.useState=function(V){return We.current.useState(V)},xe.useSyncExternalStore=function(V,W,Ae){return We.current.useSyncExternalStore(V,W,Ae)},xe.useTransition=function(){return We.current.useTransition()},xe.version="18.3.1",xe}var Zm;function Yd(){return Zm||(Zm=1,Xh.exports=zw()),Xh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function $w(){if(eg)return xa;eg=1;var r=Yd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var E,T={},R=null,B=null;_!==void 0&&(R=""+_),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(B=g.ref);for(E in g)i.call(g,E)&&!u.hasOwnProperty(E)&&(T[E]=g[E]);if(m&&m.defaultProps)for(E in g=m.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:m,key:R,ref:B,props:T,_owner:o.current}}return xa.Fragment=t,xa.jsx=h,xa.jsxs=h,xa}var tg;function Hw(){return tg||(tg=1,Jh.exports=$w()),Jh.exports}var x=Hw(),K=Yd();const qw=Qd(K);var Au={},Zh={exports:{}},Xt={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Ww(){return ng||(ng=1,(function(r){function e(te,fe){var ie=te.length;te.push(fe);e:for(;0<ie;){var V=ie-1>>>1,W=te[V];if(0<o(W,fe))te[V]=fe,te[ie]=W,ie=V;else break e}}function t(te){return te.length===0?null:te[0]}function i(te){if(te.length===0)return null;var fe=te[0],ie=te.pop();if(ie!==fe){te[0]=ie;e:for(var V=0,W=te.length,Ae=W>>>1;V<Ae;){var Re=2*(V+1)-1,ke=te[Re],Ne=Re+1,Be=te[Ne];if(0>o(ke,ie))Ne<W&&0>o(Be,ke)?(te[V]=Be,te[Ne]=ie,V=Ne):(te[V]=ke,te[Re]=ie,V=Re);else if(Ne<W&&0>o(Be,ie))te[V]=Be,te[Ne]=ie,V=Ne;else break e}}return fe}function o(te,fe){var ie=te.sortIndex-fe.sortIndex;return ie!==0?ie:te.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],_=[],E=1,T=null,R=3,B=!1,q=!1,$=!1,z=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(te){for(var fe=t(_);fe!==null;){if(fe.callback===null)i(_);else if(fe.startTime<=te)i(_),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(_)}}function pe(te){if($=!1,ne(te),!q)if(t(g)!==null)q=!0,Et(Ce);else{var fe=t(_);fe!==null&&We(pe,fe.startTime-te)}}function Ce(te,fe){q=!1,$&&($=!1,ae(A),A=-1),B=!0;var ie=R;try{for(ne(fe),T=t(g);T!==null&&(!(T.expirationTime>fe)||te&&!b());){var V=T.callback;if(typeof V=="function"){T.callback=null,R=T.priorityLevel;var W=V(T.expirationTime<=fe);fe=r.unstable_now(),typeof W=="function"?T.callback=W:T===t(g)&&i(g),ne(fe)}else i(g);T=t(g)}if(T!==null)var Ae=!0;else{var Re=t(_);Re!==null&&We(pe,Re.startTime-fe),Ae=!1}return Ae}finally{T=null,R=ie,B=!1}}var Te=!1,k=null,A=-1,C=5,N=-1;function b(){return!(r.unstable_now()-N<C)}function D(){if(k!==null){var te=r.unstable_now();N=te;var fe=!0;try{fe=k(!0,te)}finally{fe?I():(Te=!1,k=null)}}else Te=!1}var I;if(typeof ue=="function")I=function(){ue(D)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,st=Pe.port2;Pe.port1.onmessage=D,I=function(){st.postMessage(null)}}else I=function(){z(D,0)};function Et(te){k=te,Te||(Te=!0,I())}function We(te,fe){A=z(function(){te(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){q||B||(q=!0,Et(Ce))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(te){switch(R){case 1:case 2:case 3:var fe=3;break;default:fe=R}var ie=R;R=fe;try{return te()}finally{R=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,fe){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ie=R;R=te;try{return fe()}finally{R=ie}},r.unstable_scheduleCallback=function(te,fe,ie){var V=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?V+ie:V):ie=V,te){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ie+W,te={id:E++,callback:fe,priorityLevel:te,startTime:ie,expirationTime:W,sortIndex:-1},ie>V?(te.sortIndex=ie,e(_,te),t(g)===null&&te===t(_)&&($?(ae(A),A=-1):$=!0,We(pe,ie-V))):(te.sortIndex=W,e(g,te),q||B||(q=!0,Et(Ce))),te},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(te){var fe=R;return function(){var ie=R;R=fe;try{return te.apply(this,arguments)}finally{R=ie}}}})(td)),td}var rg;function Gw(){return rg||(rg=1,ed.exports=Ww()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Kw(){if(sg)return Xt;sg=1;var r=Yd(),e=Gw();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function u(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function R(n){return g.call(T,n)?!0:g.call(E,n)?!1:_.test(n)?T[n]=!0:(E[n]=!0,!1)}function B(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,s,a,c){if(s===null||typeof s>"u"||B(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(n,s,a,c,d,f,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=f,this.removeEmptyString=v}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];z[s]=new $(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(ae,ue);z[s]=new $(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(ae,ue);z[s]=new $(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(ae,ue);z[s]=new $(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function ne(n,s,a,c){var d=z.hasOwnProperty(s)?z[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(q(s,a,d,c)&&(a=null),c||d===null?R(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var pe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Te=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),b=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),st=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),te=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+n}var Ae=!1;function Re(n,s){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(n,[],s)}else{try{s.call()}catch(U){c=U}n.call(s.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,S=f.length-1;1<=v&&0<=S&&d[v]!==f[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==f[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==f[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function ke(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Te:return"Portal";case C:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case Pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case b:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case D:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case st:return s=n.displayName||null,s!==null?s:Ne(n.type)||"Memo";case Et:s=n._payload,n=n._init;try{return Ne(n(s))}catch{}}return null}function Be(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ht(n){var s=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Ti(n){n._valueTracker||(n._valueTracker=Ht(n))}function Oo(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Ur(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ii(n,s){var a=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function cl(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Me(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Si(n,s){s=s.checked,s!=null&&ne(n,"checked",s,!1)}function Os(n,s){Si(n,s);var a=Me(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ht(n,s.type,a):s.hasOwnProperty("defaultValue")&&ht(n,s.type,Me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Vo(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ht(n,s,a){(s!=="number"||Ur(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var at=Array.isArray;function En(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Lo(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Mo(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(at(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Me(a)}}function hl(n,s){var a=Me(s.value),c=Me(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function jr(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function Fo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ai(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?Fo(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Br,dl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Br.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Vs(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fl=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(n){fl.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),zr[s]=zr[n]})});function $r(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||zr.hasOwnProperty(n)&&zr[n]?(""+s).trim():s+"px"}function Ri(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=$r(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Uo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wn(n,s){if(s){if(Uo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ci(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hr=null;function xi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var cr=null,hr=null,it=null;function jo(n){if(n=fa(n)){if(typeof cr!="function")throw Error(t(280));var s=n.stateNode;s&&(s=jl(s),cr(n.stateNode,n.type,s))}}function qr(n){hr?it?it.push(n):it=[n]:hr=n}function Wr(){if(hr){var n=hr,s=it;if(it=hr=null,jo(n),s)for(n=0;n<s.length;n++)jo(s[n])}}function pl(n,s){return n(s)}function ml(){}var Vn=!1;function gl(n,s,a){if(Vn)return n(s,a);Vn=!0;try{return pl(n,s,a)}finally{Vn=!1,(hr!==null||it!==null)&&(ml(),Wr())}}function Ls(n,s){var a=n.stateNode;if(a===null)return null;var c=jl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Gr=!1;if(m)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Gr=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Gr=!1}function yl(n,s,a,c,d,f,v,S,P){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(Q){this.onError(Q)}}var dr=!1,Ln=null,Pi=!1,cn=null,_l={onError:function(n){dr=!0,Ln=n}};function vl(n,s,a,c,d,f,v,S,P){dr=!1,Ln=null,yl.apply(_l,arguments)}function Bo(n,s,a,c,d,f,v,S,P){if(vl.apply(this,arguments),dr){if(dr){var U=Ln;dr=!1,Ln=null}else throw Error(t(198));Pi||(Pi=!0,cn=U)}}function Tn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function zo(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function El(n){if(Tn(n)!==n)throw Error(t(188))}function wl(n){var s=n.alternate;if(!s){if(s=Tn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return El(d),n;if(f===c)return El(d),s;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=f;break}if(S===c){v=!0,c=d,a=f;break}S=S.sibling}if(!v){for(S=f.child;S;){if(S===a){v=!0,a=f,c=d;break}if(S===c){v=!0,c=f,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Tl(n){return n=wl(n),n!==null?Ms(n):null}function Ms(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ms(n);if(s!==null)return s;n=n.sibling}return null}var $o=e.unstable_scheduleCallback,ki=e.unstable_cancelCallback,Fs=e.unstable_shouldYield,fr=e.unstable_requestPaint,Qe=e.unstable_now,xc=e.unstable_getCurrentPriorityLevel,Ni=e.unstable_ImmediatePriority,Ho=e.unstable_UserBlockingPriority,Us=e.unstable_NormalPriority,qo=e.unstable_LowPriority,bi=e.unstable_IdlePriority,js=null,en=null;function Il(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(js,n,void 0,(n.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Bs,Mn=Math.log,hn=Math.LN2;function Bs(n){return n>>>=0,n===0?32:31-(Mn(n)/hn|0)|0}var Fn=64,Qr=4194304;function je(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pr(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=je(S):(f&=v,f!==0&&(c=je(f)))}else v=a&~d,v!==0?c=je(v):f!==0&&(c=je(f));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,f=s&-s,d>=f||d===16&&(f&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-tn(s),d=1<<a,c|=n[a],s&=~d;return c}function zs(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $s(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-tn(f),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=zs(S,s)):P<=s&&(n.expiredLanes|=S),f&=~S}}function Wo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Go(){var n=Fn;return Fn<<=1,(Fn&4194240)===0&&(Fn=64),n}function Ko(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function Hs(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-tn(s),n[s]=a}function Pc(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-tn(a),f=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Qo(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-tn(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var Ve=0;function Un(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yo,Di,Jo,Xo,Zo,jn=!1,Oi=[],Bn=null,zn=null,Ct=null,qs=new Map,mr=new Map,nn=[],Sl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yr(n,s){switch(n){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":qs.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(s.pointerId)}}function In(n,s,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},s!==null&&(s=fa(s),s!==null&&Di(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function Al(n,s,a,c,d){switch(s){case"focusin":return Bn=In(Bn,n,s,a,c,d),!0;case"dragenter":return zn=In(zn,n,s,a,c,d),!0;case"mouseover":return Ct=In(Ct,n,s,a,c,d),!0;case"pointerover":var f=d.pointerId;return qs.set(f,In(qs.get(f)||null,n,s,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,mr.set(f,In(mr.get(f)||null,n,s,a,c,d)),!0}return!1}function Vi(n){var s=Qs(n.target);if(s!==null){var a=Tn(s);if(a!==null){if(s=a.tag,s===13){if(s=zo(a),s!==null){n.blockedOn=s,Zo(n.priority,function(){Jo(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Li(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Hr=c,a.target.dispatchEvent(c),Hr=null}else return s=fa(a),s!==null&&Di(s),n.blockedOn=a,!1;s.shift()}return!0}function Rl(n,s,a){qe(n)&&a.delete(s)}function kc(){jn=!1,Bn!==null&&qe(Bn)&&(Bn=null),zn!==null&&qe(zn)&&(zn=null),Ct!==null&&qe(Ct)&&(Ct=null),qs.forEach(Rl),mr.forEach(Rl)}function Jr(n,s){n.blockedOn===s&&(n.blockedOn=null,jn||(jn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kc)))}function Xr(n){function s(d){return Jr(d,n)}if(0<Oi.length){Jr(Oi[0],n);for(var a=1;a<Oi.length;a++){var c=Oi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bn!==null&&Jr(Bn,n),zn!==null&&Jr(zn,n),Ct!==null&&Jr(Ct,n),qs.forEach(s),mr.forEach(s),a=0;a<nn.length;a++)c=nn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)Vi(a),a.blockedOn===null&&nn.shift()}var gr=pe.ReactCurrentBatchConfig,yr=!0;function $n(n,s,a,c){var d=Ve,f=gr.transition;gr.transition=null;try{Ve=1,ea(n,s,a,c)}finally{Ve=d,gr.transition=f}}function Cl(n,s,a,c){var d=Ve,f=gr.transition;gr.transition=null;try{Ve=4,ea(n,s,a,c)}finally{Ve=d,gr.transition=f}}function ea(n,s,a,c){if(yr){var d=Li(n,s,a,c);if(d===null)Bc(n,s,c,Hn,a),Yr(n,c);else if(Al(d,n,s,a,c))c.stopPropagation();else if(Yr(n,c),s&4&&-1<Sl.indexOf(n)){for(;d!==null;){var f=fa(d);if(f!==null&&Yo(f),f=Li(n,s,a,c),f===null&&Bc(n,s,c,Hn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Bc(n,s,c,null,a)}}var Hn=null;function Li(n,s,a,c){if(Hn=null,n=xi(c),n=Qs(n),n!==null)if(s=Tn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=zo(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Hn=n,null}function Mi(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xc()){case Ni:return 1;case Ho:return 4;case Us:case qo:return 16;case bi:return 536870912;default:return 16}default:return 16}}var rn=null,Fi=null,_r=null;function xl(){if(_r)return _r;var n,s=Fi,a=s.length,c,d="value"in rn?rn.value:rn.textContent,f=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[f-c];c++);return _r=d.slice(n,1<c?1-c:void 0)}function Ws(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function ta(){return!1}function Vt(n){function s(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qn:ta,this.isPropagationStopped=ta,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),s}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=Vt(Wn),Zr=ie({},Wn,{view:0,detail:0}),Ui=Vt(Zr),ji,Bi,sn,Ks=ie({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ie,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sn&&(sn&&n.type==="mousemove"?(ji=n.screenX-sn.screenX,Bi=n.screenY-sn.screenY):Bi=ji=0,sn=n),ji)},movementY:function(n){return"movementY"in n?n.movementY:Bi}}),na=Vt(Ks),Pl=ie({},Ks,{dataTransfer:0}),kl=Vt(Pl),zi=ie({},Zr,{relatedTarget:0}),xt=Vt(zi),Nl=ie({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),bl=Vt(Nl),es=ie({},Wn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Vt(es),p=ie({},Wn,{data:0}),y=Vt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ee(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=j[n])?!!s[n]:!1}function Ie(){return ee}var lt=ie({},Zr,{key:function(n){if(n.key){var s=w[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Ws(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ie,charCode:function(n){return n.type==="keypress"?Ws(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ws(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$e=Vt(lt),dt=ie({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),on=Vt(dt),vr=ie({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ie}),Gn=Vt(vr),Kn=ie({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$i=Vt(Kn),ra=ie({},Ks,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),LE=Vt(ra),ME=[9,13,27,32],Nc=m&&"CompositionEvent"in window,sa=null;m&&"documentMode"in document&&(sa=document.documentMode);var FE=m&&"TextEvent"in window&&!sa,Hf=m&&(!Nc||sa&&8<sa&&11>=sa),qf=" ",Wf=!1;function Gf(n,s){switch(n){case"keyup":return ME.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hi=!1;function UE(n,s){switch(n){case"compositionend":return Kf(s);case"keypress":return s.which!==32?null:(Wf=!0,qf);case"textInput":return n=s.data,n===qf&&Wf?null:n;default:return null}}function jE(n,s){if(Hi)return n==="compositionend"||!Nc&&Gf(n,s)?(n=xl(),_r=Fi=rn=null,Hi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Hf&&s.locale!=="ko"?null:s.data;default:return null}}var BE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!BE[n.type]:s==="textarea"}function Yf(n,s,a,c){qr(c),s=Ml(s,"onChange"),0<s.length&&(a=new Gs("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ia=null,oa=null;function zE(n){pp(n,0)}function Dl(n){var s=Qi(n);if(Oo(s))return n}function $E(n,s){if(n==="change")return s}var Jf=!1;if(m){var bc;if(m){var Dc="oninput"in document;if(!Dc){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),Dc=typeof Xf.oninput=="function"}bc=Dc}else bc=!1;Jf=bc&&(!document.documentMode||9<document.documentMode)}function Zf(){ia&&(ia.detachEvent("onpropertychange",ep),oa=ia=null)}function ep(n){if(n.propertyName==="value"&&Dl(oa)){var s=[];Yf(s,oa,n,xi(n)),gl(zE,s)}}function HE(n,s,a){n==="focusin"?(Zf(),ia=s,oa=a,ia.attachEvent("onpropertychange",ep)):n==="focusout"&&Zf()}function qE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dl(oa)}function WE(n,s){if(n==="click")return Dl(s)}function GE(n,s){if(n==="input"||n==="change")return Dl(s)}function KE(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Sn=typeof Object.is=="function"?Object.is:KE;function aa(n,s){if(Sn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Sn(n[d],s[d]))return!1}return!0}function tp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function np(n,s){var a=tp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tp(a)}}function rp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?rp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function sp(){for(var n=window,s=Ur();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Ur(n.document)}return s}function Oc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function QE(n){var s=sp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&rp(a.ownerDocument.documentElement,a)){if(c!==null&&Oc(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=np(a,f);var v=np(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var YE=m&&"documentMode"in document&&11>=document.documentMode,qi=null,Vc=null,la=null,Lc=!1;function ip(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lc||qi==null||qi!==Ur(c)||(c=qi,"selectionStart"in c&&Oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=Ml(Vc,"onSelect"),0<c.length&&(s=new Gs("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=qi)))}function Ol(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var Wi={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},Mc={},op={};m&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Vl(n){if(Mc[n])return Mc[n];if(!Wi[n])return n;var s=Wi[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in op)return Mc[n]=s[a];return n}var ap=Vl("animationend"),lp=Vl("animationiteration"),up=Vl("animationstart"),cp=Vl("transitionend"),hp=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ts(n,s){hp.set(n,s),u(s,[n])}for(var Fc=0;Fc<dp.length;Fc++){var Uc=dp[Fc],JE=Uc.toLowerCase(),XE=Uc[0].toUpperCase()+Uc.slice(1);ts(JE,"on"+XE)}ts(ap,"onAnimationEnd"),ts(lp,"onAnimationIteration"),ts(up,"onAnimationStart"),ts("dblclick","onDoubleClick"),ts("focusin","onFocus"),ts("focusout","onBlur"),ts(cp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function fp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,Bo(c,s,void 0,n),n.currentTarget=null}function pp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,U=S.currentTarget;if(S=S.listener,P!==f&&d.isPropagationStopped())break e;fp(d,S,U),f=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,U=S.currentTarget,S=S.listener,P!==f&&d.isPropagationStopped())break e;fp(d,S,U),f=P}}}if(Pi)throw n=cn,Pi=!1,cn=null,n}function Ye(n,s){var a=s[Gc];a===void 0&&(a=s[Gc]=new Set);var c=n+"__bubble";a.has(c)||(mp(s,n,2,!1),a.add(c))}function jc(n,s,a){var c=0;s&&(c|=4),mp(a,n,c,s)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Ll]){n[Ll]=!0,i.forEach(function(a){a!=="selectionchange"&&(ZE.has(a)||jc(a,!1,n),jc(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Ll]||(s[Ll]=!0,jc("selectionchange",!1,s))}}function mp(n,s,a,c){switch(Mi(s)){case 1:var d=$n;break;case 4:d=Cl;break;default:d=ea}a=d.bind(null,s,a,n),d=void 0,!Gr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function Bc(n,s,a,c,d){var f=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Qs(S),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}S=S.parentNode}}c=c.return}gl(function(){var U=f,Q=xi(a),J=[];e:{var G=hp.get(n);if(G!==void 0){var re=Gs,le=n;switch(n){case"keypress":if(Ws(a)===0)break e;case"keydown":case"keyup":re=$e;break;case"focusin":le="focus",re=xt;break;case"focusout":le="blur",re=xt;break;case"beforeblur":case"afterblur":re=xt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=Gn;break;case ap:case lp:case up:re=bl;break;case cp:re=$i;break;case"scroll":re=Ui;break;case"wheel":re=LE;break;case"copy":case"cut":case"paste":re=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=on}var ce=(s&4)!==0,ut=!ce&&n==="scroll",L=ce?G!==null?G+"Capture":null:G;ce=[];for(var O=U,F;O!==null;){F=O;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,L!==null&&(X=Ls(O,L),X!=null&&ce.push(ha(O,X,F)))),ut)break;O=O.return}0<ce.length&&(G=new re(G,le,null,a,Q),J.push({event:G,listeners:ce}))}}if((s&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",G&&a!==Hr&&(le=a.relatedTarget||a.fromElement)&&(Qs(le)||le[Er]))break e;if((re||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,re?(le=a.relatedTarget||a.toElement,re=U,le=le?Qs(le):null,le!==null&&(ut=Tn(le),le!==ut||le.tag!==5&&le.tag!==6)&&(le=null)):(re=null,le=U),re!==le)){if(ce=na,X="onMouseLeave",L="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(ce=on,X="onPointerLeave",L="onPointerEnter",O="pointer"),ut=re==null?G:Qi(re),F=le==null?G:Qi(le),G=new ce(X,O+"leave",re,a,Q),G.target=ut,G.relatedTarget=F,X=null,Qs(Q)===U&&(ce=new ce(L,O+"enter",le,a,Q),ce.target=F,ce.relatedTarget=ut,X=ce),ut=X,re&&le)t:{for(ce=re,L=le,O=0,F=ce;F;F=Gi(F))O++;for(F=0,X=L;X;X=Gi(X))F++;for(;0<O-F;)ce=Gi(ce),O--;for(;0<F-O;)L=Gi(L),F--;for(;O--;){if(ce===L||L!==null&&ce===L.alternate)break t;ce=Gi(ce),L=Gi(L)}ce=null}else ce=null;re!==null&&gp(J,G,re,ce,!1),le!==null&&ut!==null&&gp(J,ut,le,ce,!0)}}e:{if(G=U?Qi(U):window,re=G.nodeName&&G.nodeName.toLowerCase(),re==="select"||re==="input"&&G.type==="file")var he=$E;else if(Qf(G))if(Jf)he=GE;else{he=qE;var me=HE}else(re=G.nodeName)&&re.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=WE);if(he&&(he=he(n,U))){Yf(J,he,a,Q);break e}me&&me(n,G,U),n==="focusout"&&(me=G._wrapperState)&&me.controlled&&G.type==="number"&&ht(G,"number",G.value)}switch(me=U?Qi(U):window,n){case"focusin":(Qf(me)||me.contentEditable==="true")&&(qi=me,Vc=U,la=null);break;case"focusout":la=Vc=qi=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,ip(J,a,Q);break;case"selectionchange":if(YE)break;case"keydown":case"keyup":ip(J,a,Q)}var ge;if(Nc)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Hi?Gf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Hf&&a.locale!=="ko"&&(Hi||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Hi&&(ge=xl()):(rn=Q,Fi="value"in rn?rn.value:rn.textContent,Hi=!0)),me=Ml(U,ve),0<me.length&&(ve=new y(ve,n,null,a,Q),J.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=Kf(a),ge!==null&&(ve.data=ge)))),(ge=FE?UE(n,a):jE(n,a))&&(U=Ml(U,"onBeforeInput"),0<U.length&&(Q=new y("onBeforeInput","beforeinput",null,a,Q),J.push({event:Q,listeners:U}),Q.data=ge))}pp(J,s)})}function ha(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Ml(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ls(n,a),f!=null&&c.unshift(ha(n,f,d)),f=Ls(n,s),f!=null&&c.push(ha(n,f,d))),n=n.return}return c}function Gi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function gp(n,s,a,c,d){for(var f=s._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,U=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&U!==null&&(S=U,d?(P=Ls(a,f),P!=null&&v.unshift(ha(a,P,S))):d||(P=Ls(a,f),P!=null&&v.push(ha(a,P,S)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var ew=/\r\n?/g,tw=/\u0000|\uFFFD/g;function yp(n){return(typeof n=="string"?n:""+n).replace(ew,`
`).replace(tw,"")}function Fl(n,s,a){if(s=yp(s),yp(n)!==s&&a)throw Error(t(425))}function Ul(){}var zc=null,$c=null;function Hc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,nw=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,rw=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(n){return _p.resolve(null).then(n).catch(sw)}:qc;function sw(n){setTimeout(function(){throw n})}function Wc(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Xr(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Xr(s)}function ns(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function vp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Ki,da="__reactProps$"+Ki,Er="__reactContainer$"+Ki,Gc="__reactEvents$"+Ki,iw="__reactListeners$"+Ki,ow="__reactHandles$"+Ki;function Qs(n){var s=n[Qn];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Er]||a[Qn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=vp(n);n!==null;){if(a=n[Qn])return a;n=vp(n)}return s}n=a,a=n.parentNode}return null}function fa(n){return n=n[Qn]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qi(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jl(n){return n[da]||null}var Kc=[],Yi=-1;function rs(n){return{current:n}}function Je(n){0>Yi||(n.current=Kc[Yi],Kc[Yi]=null,Yi--)}function Ge(n,s){Yi++,Kc[Yi]=n.current,n.current=s}var ss={},Lt=rs(ss),Gt=rs(!1),Ys=ss;function Ji(n,s){var a=n.type.contextTypes;if(!a)return ss;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=s[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Bl(){Je(Gt),Je(Lt)}function Ep(n,s,a){if(Lt.current!==ss)throw Error(t(168));Ge(Lt,s),Ge(Gt,a)}function wp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Be(n)||"Unknown",d));return ie({},a,c)}function zl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ss,Ys=Lt.current,Ge(Lt,n),Ge(Gt,Gt.current),!0}function Tp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=wp(n,s,Ys),c.__reactInternalMemoizedMergedChildContext=n,Je(Gt),Je(Lt),Ge(Lt,n)):Je(Gt),Ge(Gt,a)}var wr=null,$l=!1,Qc=!1;function Ip(n){wr===null?wr=[n]:wr.push(n)}function aw(n){$l=!0,Ip(n)}function is(){if(!Qc&&wr!==null){Qc=!0;var n=0,s=Ve;try{var a=wr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}wr=null,$l=!1}catch(d){throw wr!==null&&(wr=wr.slice(n+1)),$o(Ni,is),d}finally{Ve=s,Qc=!1}}return null}var Xi=[],Zi=0,Hl=null,ql=0,dn=[],fn=0,Js=null,Tr=1,Ir="";function Xs(n,s){Xi[Zi++]=ql,Xi[Zi++]=Hl,Hl=n,ql=s}function Sp(n,s,a){dn[fn++]=Tr,dn[fn++]=Ir,dn[fn++]=Js,Js=n;var c=Tr;n=Ir;var d=32-tn(c)-1;c&=~(1<<d),a+=1;var f=32-tn(s)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Tr=1<<32-tn(s)+d|a<<d|c,Ir=f+n}else Tr=1<<f|a<<d|c,Ir=n}function Yc(n){n.return!==null&&(Xs(n,1),Sp(n,1,0))}function Jc(n){for(;n===Hl;)Hl=Xi[--Zi],Xi[Zi]=null,ql=Xi[--Zi],Xi[Zi]=null;for(;n===Js;)Js=dn[--fn],dn[fn]=null,Ir=dn[--fn],dn[fn]=null,Tr=dn[--fn],dn[fn]=null}var an=null,ln=null,Ze=!1,An=null;function Ap(n,s){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Rp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,an=n,ln=ns(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,an=n,ln=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Js!==null?{id:Tr,overflow:Ir}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function Xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(Ze){var s=ln;if(s){var a=s;if(!Rp(n,s)){if(Xc(n))throw Error(t(418));s=ns(a.nextSibling);var c=an;s&&Rp(n,s)?Ap(c,a):(n.flags=n.flags&-4097|2,Ze=!1,an=n)}}else{if(Xc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,an=n}}}function Cp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Wl(n){if(n!==an)return!1;if(!Ze)return Cp(n),Ze=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Hc(n.type,n.memoizedProps)),s&&(s=ln)){if(Xc(n))throw xp(),Error(t(418));for(;s;)Ap(n,s),s=ns(s.nextSibling)}if(Cp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){ln=ns(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}ln=null}}else ln=an?ns(n.stateNode.nextSibling):null;return!0}function xp(){for(var n=ln;n;)n=ns(n.nextSibling)}function eo(){ln=an=null,Ze=!1}function eh(n){An===null?An=[n]:An.push(n)}var lw=pe.ReactCurrentBatchConfig;function pa(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===f?s.ref:(s=function(v){var S=d.refs;v===null?delete S[f]:S[f]=v},s._stringRef=f,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Gl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Pp(n){var s=n._init;return s(n._payload)}function kp(n){function s(L,O){if(n){var F=L.deletions;F===null?(L.deletions=[O],L.flags|=16):F.push(O)}}function a(L,O){if(!n)return null;for(;O!==null;)s(L,O),O=O.sibling;return null}function c(L,O){for(L=new Map;O!==null;)O.key!==null?L.set(O.key,O):L.set(O.index,O),O=O.sibling;return L}function d(L,O){return L=fs(L,O),L.index=0,L.sibling=null,L}function f(L,O,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<O?(L.flags|=2,O):F):(L.flags|=2,O)):(L.flags|=1048576,O)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,O,F,X){return O===null||O.tag!==6?(O=qh(F,L.mode,X),O.return=L,O):(O=d(O,F),O.return=L,O)}function P(L,O,F,X){var he=F.type;return he===k?Q(L,O,F.props.children,X,F.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Et&&Pp(he)===O.type)?(X=d(O,F.props),X.ref=pa(L,O,F),X.return=L,X):(X=yu(F.type,F.key,F.props,null,L.mode,X),X.ref=pa(L,O,F),X.return=L,X)}function U(L,O,F,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==F.containerInfo||O.stateNode.implementation!==F.implementation?(O=Wh(F,L.mode,X),O.return=L,O):(O=d(O,F.children||[]),O.return=L,O)}function Q(L,O,F,X,he){return O===null||O.tag!==7?(O=oi(F,L.mode,X,he),O.return=L,O):(O=d(O,F),O.return=L,O)}function J(L,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return O=qh(""+O,L.mode,F),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ce:return F=yu(O.type,O.key,O.props,null,L.mode,F),F.ref=pa(L,null,O),F.return=L,F;case Te:return O=Wh(O,L.mode,F),O.return=L,O;case Et:var X=O._init;return J(L,X(O._payload),F)}if(at(O)||fe(O))return O=oi(O,L.mode,F,null),O.return=L,O;Gl(L,O)}return null}function G(L,O,F,X){var he=O!==null?O.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:S(L,O,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:return F.key===he?P(L,O,F,X):null;case Te:return F.key===he?U(L,O,F,X):null;case Et:return he=F._init,G(L,O,he(F._payload),X)}if(at(F)||fe(F))return he!==null?null:Q(L,O,F,X,null);Gl(L,F)}return null}function re(L,O,F,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(F)||null,S(O,L,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ce:return L=L.get(X.key===null?F:X.key)||null,P(O,L,X,he);case Te:return L=L.get(X.key===null?F:X.key)||null,U(O,L,X,he);case Et:var me=X._init;return re(L,O,F,me(X._payload),he)}if(at(X)||fe(X))return L=L.get(F)||null,Q(O,L,X,he,null);Gl(O,X)}return null}function le(L,O,F,X){for(var he=null,me=null,ge=O,ve=O=0,It=null;ge!==null&&ve<F.length;ve++){ge.index>ve?(It=ge,ge=null):It=ge.sibling;var Ue=G(L,ge,F[ve],X);if(Ue===null){ge===null&&(ge=It);break}n&&ge&&Ue.alternate===null&&s(L,ge),O=f(Ue,O,ve),me===null?he=Ue:me.sibling=Ue,me=Ue,ge=It}if(ve===F.length)return a(L,ge),Ze&&Xs(L,ve),he;if(ge===null){for(;ve<F.length;ve++)ge=J(L,F[ve],X),ge!==null&&(O=f(ge,O,ve),me===null?he=ge:me.sibling=ge,me=ge);return Ze&&Xs(L,ve),he}for(ge=c(L,ge);ve<F.length;ve++)It=re(ge,L,ve,F[ve],X),It!==null&&(n&&It.alternate!==null&&ge.delete(It.key===null?ve:It.key),O=f(It,O,ve),me===null?he=It:me.sibling=It,me=It);return n&&ge.forEach(function(ps){return s(L,ps)}),Ze&&Xs(L,ve),he}function ce(L,O,F,X){var he=fe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=O,ve=O=0,It=null,Ue=F.next();ge!==null&&!Ue.done;ve++,Ue=F.next()){ge.index>ve?(It=ge,ge=null):It=ge.sibling;var ps=G(L,ge,Ue.value,X);if(ps===null){ge===null&&(ge=It);break}n&&ge&&ps.alternate===null&&s(L,ge),O=f(ps,O,ve),me===null?he=ps:me.sibling=ps,me=ps,ge=It}if(Ue.done)return a(L,ge),Ze&&Xs(L,ve),he;if(ge===null){for(;!Ue.done;ve++,Ue=F.next())Ue=J(L,Ue.value,X),Ue!==null&&(O=f(Ue,O,ve),me===null?he=Ue:me.sibling=Ue,me=Ue);return Ze&&Xs(L,ve),he}for(ge=c(L,ge);!Ue.done;ve++,Ue=F.next())Ue=re(ge,L,ve,Ue.value,X),Ue!==null&&(n&&Ue.alternate!==null&&ge.delete(Ue.key===null?ve:Ue.key),O=f(Ue,O,ve),me===null?he=Ue:me.sibling=Ue,me=Ue);return n&&ge.forEach(function(Bw){return s(L,Bw)}),Ze&&Xs(L,ve),he}function ut(L,O,F,X){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ce:e:{for(var he=F.key,me=O;me!==null;){if(me.key===he){if(he=F.type,he===k){if(me.tag===7){a(L,me.sibling),O=d(me,F.props.children),O.return=L,L=O;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Et&&Pp(he)===me.type){a(L,me.sibling),O=d(me,F.props),O.ref=pa(L,me,F),O.return=L,L=O;break e}a(L,me);break}else s(L,me);me=me.sibling}F.type===k?(O=oi(F.props.children,L.mode,X,F.key),O.return=L,L=O):(X=yu(F.type,F.key,F.props,null,L.mode,X),X.ref=pa(L,O,F),X.return=L,L=X)}return v(L);case Te:e:{for(me=F.key;O!==null;){if(O.key===me)if(O.tag===4&&O.stateNode.containerInfo===F.containerInfo&&O.stateNode.implementation===F.implementation){a(L,O.sibling),O=d(O,F.children||[]),O.return=L,L=O;break e}else{a(L,O);break}else s(L,O);O=O.sibling}O=Wh(F,L.mode,X),O.return=L,L=O}return v(L);case Et:return me=F._init,ut(L,O,me(F._payload),X)}if(at(F))return le(L,O,F,X);if(fe(F))return ce(L,O,F,X);Gl(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,O!==null&&O.tag===6?(a(L,O.sibling),O=d(O,F),O.return=L,L=O):(a(L,O),O=qh(F,L.mode,X),O.return=L,L=O),v(L)):a(L,O)}return ut}var to=kp(!0),Np=kp(!1),Kl=rs(null),Ql=null,no=null,th=null;function nh(){th=no=Ql=null}function rh(n){var s=Kl.current;Je(Kl),n._currentValue=s}function sh(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function ro(n,s){Ql=n,th=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Qt=!0),n.firstContext=null)}function pn(n){var s=n._currentValue;if(th!==n)if(n={context:n,memoizedValue:s,next:null},no===null){if(Ql===null)throw Error(t(308));no=n,Ql.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return s}var Zs=null;function ih(n){Zs===null?Zs=[n]:Zs.push(n)}function bp(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,ih(s)):(a.next=d.next,d.next=a),s.interleaved=a,Sr(n,c)}function Sr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var os=!1;function oh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function as(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Fe&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Sr(n,a)}return d=c.interleaved,d===null?(s.next=s,ih(c)):(s.next=d.next,d.next=s),c.interleaved=s,Sr(n,a)}function Yl(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Qo(n,a)}}function Op(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=s:f=f.next=s}else d=f=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function Jl(n,s,a,c){var d=n.updateQueue;os=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,U=P.next;P.next=null,v===null?f=U:v.next=U,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=U:S.next=U,Q.lastBaseUpdate=P))}if(f!==null){var J=d.baseState;v=0,Q=U=P=null,S=f;do{var G=S.lane,re=S.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=n,ce=S;switch(G=s,re=a,ce.tag){case 1:if(le=ce.payload,typeof le=="function"){J=le.call(re,J,G);break e}J=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ce.payload,G=typeof le=="function"?le.call(re,J,G):le,G==null)break e;J=ie({},J,G);break e;case 2:os=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else re={eventTime:re,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(U=Q=re,P=J):Q=Q.next=re,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(P=J),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else f===null&&(d.shared.lanes=0);ni|=v,n.lanes=v,n.memoizedState=J}}function Vp(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ma={},Yn=rs(ma),ga=rs(ma),ya=rs(ma);function ei(n){if(n===ma)throw Error(t(174));return n}function ah(n,s){switch(Ge(ya,s),Ge(ga,n),Ge(Yn,ma),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ai(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Ai(s,n)}Je(Yn),Ge(Yn,s)}function so(){Je(Yn),Je(ga),Je(ya)}function Lp(n){ei(ya.current);var s=ei(Yn.current),a=Ai(s,n.type);s!==a&&(Ge(ga,n),Ge(Yn,a))}function lh(n){ga.current===n&&(Je(Yn),Je(ga))}var et=rs(0);function Xl(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var uh=[];function ch(){for(var n=0;n<uh.length;n++)uh[n]._workInProgressVersionPrimary=null;uh.length=0}var Zl=pe.ReactCurrentDispatcher,hh=pe.ReactCurrentBatchConfig,ti=0,tt=null,gt=null,wt=null,eu=!1,_a=!1,va=0,uw=0;function Mt(){throw Error(t(321))}function dh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Sn(n[a],s[a]))return!1;return!0}function fh(n,s,a,c,d,f){if(ti=f,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Zl.current=n===null||n.memoizedState===null?fw:pw,n=a(c,d),_a){f=0;do{if(_a=!1,va=0,25<=f)throw Error(t(301));f+=1,wt=gt=null,s.updateQueue=null,Zl.current=mw,n=a(c,d)}while(_a)}if(Zl.current=ru,s=gt!==null&&gt.next!==null,ti=0,wt=gt=tt=null,eu=!1,s)throw Error(t(300));return n}function ph(){var n=va!==0;return va=0,n}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?tt.memoizedState=wt=n:wt=wt.next=n,wt}function mn(){if(gt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var s=wt===null?tt.memoizedState:wt.next;if(s!==null)wt=s,gt=n;else{if(n===null)throw Error(t(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},wt===null?tt.memoizedState=wt=n:wt=wt.next=n}return wt}function Ea(n,s){return typeof s=="function"?s(n):s}function mh(n){var s=mn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=v=null,P=null,U=f;do{var Q=U.lane;if((ti&Q)===Q)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var J={lane:Q,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(S=P=J,v=c):P=P.next=J,tt.lanes|=Q,ni|=Q}U=U.next}while(U!==null&&U!==f);P===null?v=c:P.next=S,Sn(c,s.memoizedState)||(Qt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,tt.lanes|=f,ni|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function gh(n){var s=mn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Sn(f,s.memoizedState)||(Qt=!0),s.memoizedState=f,s.baseQueue===null&&(s.baseState=f),a.lastRenderedState=f}return[f,c]}function Mp(){}function Fp(n,s){var a=tt,c=mn(),d=s(),f=!Sn(c.memoizedState,d);if(f&&(c.memoizedState=d,Qt=!0),c=c.queue,yh(Bp.bind(null,a,c,n),[n]),c.getSnapshot!==s||f||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,wa(9,jp.bind(null,a,c,d,s),void 0,null),Tt===null)throw Error(t(349));(ti&30)!==0||Up(a,s,d)}return d}function Up(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function jp(n,s,a,c){s.value=a,s.getSnapshot=c,zp(s)&&$p(n)}function Bp(n,s,a){return a(function(){zp(s)&&$p(n)})}function zp(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Sn(n,a)}catch{return!0}}function $p(n){var s=Sr(n,1);s!==null&&Pn(s,n,1,-1)}function Hp(n){var s=Jn();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},s.queue=n,n=n.dispatch=dw.bind(null,tt,n),[s.memoizedState,n]}function wa(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function qp(){return mn().memoizedState}function tu(n,s,a,c){var d=Jn();tt.flags|=n,d.memoizedState=wa(1|s,a,void 0,c===void 0?null:c)}function nu(n,s,a,c){var d=mn();c=c===void 0?null:c;var f=void 0;if(gt!==null){var v=gt.memoizedState;if(f=v.destroy,c!==null&&dh(c,v.deps)){d.memoizedState=wa(s,a,f,c);return}}tt.flags|=n,d.memoizedState=wa(1|s,a,f,c)}function Wp(n,s){return tu(8390656,8,n,s)}function yh(n,s){return nu(2048,8,n,s)}function Gp(n,s){return nu(4,2,n,s)}function Kp(n,s){return nu(4,4,n,s)}function Qp(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Yp(n,s,a){return a=a!=null?a.concat([n]):null,nu(4,4,Qp.bind(null,s,n),a)}function _h(){}function Jp(n,s){var a=mn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&dh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Xp(n,s){var a=mn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&dh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Zp(n,s,a){return(ti&21)===0?(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a):(Sn(a,s)||(a=Go(),tt.lanes|=a,ni|=a,n.baseState=!0),s)}function cw(n,s){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=hh.transition;hh.transition={};try{n(!1),s()}finally{Ve=a,hh.transition=c}}function em(){return mn().memoizedState}function hw(n,s,a){var c=hs(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},tm(n))nm(s,a);else if(a=bp(n,s,a,c),a!==null){var d=Wt();Pn(a,n,c,d),rm(a,s,c)}}function dw(n,s,a){var c=hs(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(tm(n))nm(s,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=s.lastRenderedReducer,f!==null))try{var v=s.lastRenderedState,S=f(v,a);if(d.hasEagerState=!0,d.eagerState=S,Sn(S,v)){var P=s.interleaved;P===null?(d.next=d,ih(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=bp(n,s,d,c),a!==null&&(d=Wt(),Pn(a,n,c,d),rm(a,s,c))}}function tm(n){var s=n.alternate;return n===tt||s!==null&&s===tt}function nm(n,s){_a=eu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function rm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,Qo(n,a)}}var ru={readContext:pn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},fw={readContext:pn,useCallback:function(n,s){return Jn().memoizedState=[n,s===void 0?null:s],n},useContext:pn,useEffect:Wp,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,tu(4194308,4,Qp.bind(null,s,n),a)},useLayoutEffect:function(n,s){return tu(4194308,4,n,s)},useInsertionEffect:function(n,s){return tu(4,2,n,s)},useMemo:function(n,s){var a=Jn();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=Jn();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=hw.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var s=Jn();return n={current:n},s.memoizedState=n},useState:Hp,useDebugValue:_h,useDeferredValue:function(n){return Jn().memoizedState=n},useTransition:function(){var n=Hp(!1),s=n[0];return n=cw.bind(null,n[1]),Jn().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=tt,d=Jn();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(ti&30)!==0||Up(c,s,a)}d.memoizedState=a;var f={value:a,getSnapshot:s};return d.queue=f,Wp(Bp.bind(null,c,f,n),[n]),c.flags|=2048,wa(9,jp.bind(null,c,f,a,s),void 0,null),a},useId:function(){var n=Jn(),s=Tt.identifierPrefix;if(Ze){var a=Ir,c=Tr;a=(c&~(1<<32-tn(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=va++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=uw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},pw={readContext:pn,useCallback:Jp,useContext:pn,useEffect:yh,useImperativeHandle:Yp,useInsertionEffect:Gp,useLayoutEffect:Kp,useMemo:Xp,useReducer:mh,useRef:qp,useState:function(){return mh(Ea)},useDebugValue:_h,useDeferredValue:function(n){var s=mn();return Zp(s,gt.memoizedState,n)},useTransition:function(){var n=mh(Ea)[0],s=mn().memoizedState;return[n,s]},useMutableSource:Mp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1},mw={readContext:pn,useCallback:Jp,useContext:pn,useEffect:yh,useImperativeHandle:Yp,useInsertionEffect:Gp,useLayoutEffect:Kp,useMemo:Xp,useReducer:gh,useRef:qp,useState:function(){return gh(Ea)},useDebugValue:_h,useDeferredValue:function(n){var s=mn();return gt===null?s.memoizedState=n:Zp(s,gt.memoizedState,n)},useTransition:function(){var n=gh(Ea)[0],s=mn().memoizedState;return[n,s]},useMutableSource:Mp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1};function Rn(n,s){if(n&&n.defaultProps){s=ie({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function vh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:ie({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var su={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Wt(),d=hs(n),f=Ar(c,d);f.payload=s,a!=null&&(f.callback=a),s=as(n,f,d),s!==null&&(Pn(s,n,d,c),Yl(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Wt(),d=hs(n),f=Ar(c,d);f.tag=1,f.payload=s,a!=null&&(f.callback=a),s=as(n,f,d),s!==null&&(Pn(s,n,d,c),Yl(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Wt(),c=hs(n),d=Ar(a,c);d.tag=2,s!=null&&(d.callback=s),s=as(n,d,c),s!==null&&(Pn(s,n,c,a),Yl(s,n,c))}};function sm(n,s,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):s.prototype&&s.prototype.isPureReactComponent?!aa(a,c)||!aa(d,f):!0}function im(n,s,a){var c=!1,d=ss,f=s.contextType;return typeof f=="object"&&f!==null?f=pn(f):(d=Kt(s)?Ys:Lt.current,c=s.contextTypes,f=(c=c!=null)?Ji(n,d):ss),s=new s(a,f),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=su,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),s}function om(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&su.enqueueReplaceState(s,s.state,null)}function Eh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},oh(n);var f=s.contextType;typeof f=="object"&&f!==null?d.context=pn(f):(f=Kt(s)?Ys:Lt.current,d.context=Ji(n,f)),d.state=n.memoizedState,f=s.getDerivedStateFromProps,typeof f=="function"&&(vh(n,s,f,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&su.enqueueReplaceState(d,d.state,null),Jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function io(n,s){try{var a="",c=s;do a+=ke(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:s,stack:d,digest:null}}function wh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Th(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var gw=typeof WeakMap=="function"?WeakMap:Map;function am(n,s,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){hu||(hu=!0,Mh=c),Th(n,s)},a}function lm(n,s,a){a=Ar(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Th(n,s)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Th(n,s),typeof c!="function"&&(us===null?us=new Set([this]):us.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function um(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new gw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=kw.bind(null,n,s,a),s.then(n,n))}function cm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function hm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ar(-1,1),s.tag=2,as(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var yw=pe.ReactCurrentOwner,Qt=!1;function qt(n,s,a,c){s.child=n===null?Np(s,null,a,c):to(s,n.child,a,c)}function dm(n,s,a,c,d){a=a.render;var f=s.ref;return ro(s,d),c=fh(n,s,a,c,f,d),a=ph(),n!==null&&!Qt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Rr(n,s,d)):(Ze&&a&&Yc(s),s.flags|=1,qt(n,s,c,d),s.child)}function fm(n,s,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Hh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=f,pm(n,s,f,c,d)):(n=yu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(v,c)&&n.ref===s.ref)return Rr(n,s,d)}return s.flags|=1,n=fs(f,c),n.ref=s.ref,n.return=s,s.child=n}function pm(n,s,a,c,d){if(n!==null){var f=n.memoizedProps;if(aa(f,c)&&n.ref===s.ref)if(Qt=!1,s.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qt=!0);else return s.lanes=n.lanes,Rr(n,s,d)}return Ih(n,s,a,c,d)}function mm(n,s,a){var c=s.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(ao,un),un|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ge(ao,un),un|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,Ge(ao,un),un|=c}else f!==null?(c=f.baseLanes|a,s.memoizedState=null):c=a,Ge(ao,un),un|=c;return qt(n,s,d,a),s.child}function gm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Ih(n,s,a,c,d){var f=Kt(a)?Ys:Lt.current;return f=Ji(s,f),ro(s,d),a=fh(n,s,a,c,f,d),c=ph(),n!==null&&!Qt?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Rr(n,s,d)):(Ze&&c&&Yc(s),s.flags|=1,qt(n,s,a,d),s.child)}function ym(n,s,a,c,d){if(Kt(a)){var f=!0;zl(s)}else f=!1;if(ro(s,d),s.stateNode===null)ou(n,s),im(s,a,c),Eh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=pn(U):(U=Kt(a)?Ys:Lt.current,U=Ji(s,U));var Q=a.getDerivedStateFromProps,J=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==U)&&om(s,v,c,U),os=!1;var G=s.memoizedState;v.state=G,Jl(s,c,v,d),P=s.memoizedState,S!==c||G!==P||Gt.current||os?(typeof Q=="function"&&(vh(s,a,Q,c),P=s.memoizedState),(S=os||sm(s,a,S,c,G,P,U))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Dp(n,s),S=s.memoizedProps,U=s.type===s.elementType?S:Rn(s.type,S),v.props=U,J=s.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=pn(P):(P=Kt(a)?Ys:Lt.current,P=Ji(s,P));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==J||G!==P)&&om(s,v,c,P),os=!1,G=s.memoizedState,v.state=G,Jl(s,c,v,d);var le=s.memoizedState;S!==J||G!==le||Gt.current||os?(typeof re=="function"&&(vh(s,a,re,c),le=s.memoizedState),(U=os||sm(s,a,U,c,G,le,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=le),v.props=c,v.state=le,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(s.flags|=1024),c=!1)}return Sh(n,s,a,c,f,d)}function Sh(n,s,a,c,d,f){gm(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Tp(s,a,!1),Rr(n,s,f);c=s.stateNode,yw.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=to(s,n.child,null,f),s.child=to(s,null,S,f)):qt(n,s,S,f),s.memoizedState=c.state,d&&Tp(s,a,!0),s.child}function _m(n){var s=n.stateNode;s.pendingContext?Ep(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Ep(n,s.context,!1),ah(n,s.containerInfo)}function vm(n,s,a,c,d){return eo(),eh(d),s.flags|=256,qt(n,s,a,c),s.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function Rh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Em(n,s,a){var c=s.pendingProps,d=et.current,f=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(et,d&1),n===null)return Zc(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=s.mode,f=s.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=_u(v,c,0,null),n=oi(n,c,a,null),f.return=s,n.return=s,f.sibling=n,s.child=f,s.child.memoizedState=Rh(a),s.memoizedState=Ah,n):Ch(s,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return _w(n,s,v,c,S,d,a);if(f){f=c.fallback,v=s.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=fs(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=fs(S,f):(f=oi(f,v,a,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,v=n.child.memoizedState,v=v===null?Rh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,s.memoizedState=Ah,c}return f=n.child,n=f.sibling,c=fs(f,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Ch(n,s){return s=_u({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function iu(n,s,a,c){return c!==null&&eh(c),to(s,n.child,null,a),n=Ch(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function _w(n,s,a,c,d,f,v){if(a)return s.flags&256?(s.flags&=-257,c=wh(Error(t(422))),iu(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(f=c.fallback,d=s.mode,c=_u({mode:"visible",children:c.children},d,0,null),f=oi(f,d,v,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,(s.mode&1)!==0&&to(s,n.child,null,v),s.child.memoizedState=Rh(v),s.memoizedState=Ah,f);if((s.mode&1)===0)return iu(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=wh(f,c,void 0),iu(n,s,v,c)}if(S=(v&n.childLanes)!==0,Qt||S){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Sr(n,d),Pn(c,n,d,-1))}return $h(),c=wh(Error(t(421))),iu(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=Nw.bind(null,n),d._reactRetry=s,null):(n=f.treeContext,ln=ns(d.nextSibling),an=s,Ze=!0,An=null,n!==null&&(dn[fn++]=Tr,dn[fn++]=Ir,dn[fn++]=Js,Tr=n.id,Ir=n.overflow,Js=s),s=Ch(s,c.children),s.flags|=4096,s)}function wm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),sh(n.return,s,a)}function xh(n,s,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=s,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Tm(n,s,a){var c=s.pendingProps,d=c.revealOrder,f=c.tail;if(qt(n,s,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wm(n,a,s);else if(n.tag===19)wm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(et,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&Xl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),xh(s,!1,d,a,f);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Xl(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}xh(s,!0,a,null,f);break;case"together":xh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ou(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Rr(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),ni|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=fs(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=fs(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function vw(n,s,a){switch(s.tag){case 3:_m(s),eo();break;case 5:Lp(s);break;case 1:Kt(s.type)&&zl(s);break;case 4:ah(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ge(Kl,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ge(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Em(n,s,a):(Ge(et,et.current&1),n=Rr(n,s,a),n!==null?n.sibling:null);Ge(et,et.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Tm(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(et,et.current),c)break;return null;case 22:case 23:return s.lanes=0,mm(n,s,a)}return Rr(n,s,a)}var Im,Ph,Sm,Am;Im=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ph=function(){},Sm=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,ei(Yn.current);var f=null;switch(a){case"input":d=Ii(n,d),c=Ii(n,c),f=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),f=[];break;case"textarea":d=Lo(n,d),c=Lo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ul)}wn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var P=c[U];if(S=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==S&&(P!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(f||(f=[]),f.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(f=f||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Ye("scroll",n),f||S===P||(f=[])):(f=f||[]).push(U,P))}a&&(f=f||[]).push("style",a);var U=f;(s.updateQueue=U)&&(s.flags|=4)}},Am=function(n,s,a,c){a!==c&&(s.flags|=4)};function Ta(n,s){if(!Ze)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ft(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function Ew(n,s,a){var c=s.pendingProps;switch(Jc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return Kt(s.type)&&Bl(),Ft(s),null;case 3:return c=s.stateNode,so(),Je(Gt),Je(Lt),ch(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,An!==null&&(jh(An),An=null))),Ph(n,s),Ft(s),null;case 5:lh(s);var d=ei(ya.current);if(a=s.type,n!==null&&s.stateNode!=null)Sm(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(n=ei(Yn.current),Wl(s)){c=s.stateNode,a=s.type;var f=s.memoizedProps;switch(c[Qn]=s,c[da]=f,n=(s.mode&1)!==0,a){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(d=0;d<ua.length;d++)Ye(ua[d],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":cl(c,f),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ye("invalid",c);break;case"textarea":Mo(c,f),Ye("invalid",c)}wn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var S=f[v];v==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&Fl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&Fl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ye("scroll",c)}switch(a){case"input":Ti(c),Vo(c,f,!0);break;case"textarea":Ti(c),jr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Ul)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Fo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=s,n[da]=c,Im(n,s,!1,!1),s.stateNode=n;e:{switch(v=Ci(a,c),a){case"dialog":Ye("cancel",n),Ye("close",n),d=c;break;case"iframe":case"object":case"embed":Ye("load",n),d=c;break;case"video":case"audio":for(d=0;d<ua.length;d++)Ye(ua[d],n);d=c;break;case"source":Ye("error",n),d=c;break;case"img":case"image":case"link":Ye("error",n),Ye("load",n),d=c;break;case"details":Ye("toggle",n),d=c;break;case"input":cl(n,c),d=Ii(n,c),Ye("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Ye("invalid",n);break;case"textarea":Mo(n,c),d=Lo(n,c),Ye("invalid",n);break;default:d=c}wn(a,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var P=S[f];f==="style"?Ri(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&dl(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Vs(n,P):typeof P=="number"&&Vs(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Ye("scroll",n):P!=null&&ne(n,f,P,v))}switch(a){case"input":Ti(n),Vo(n,c,!1);break;case"textarea":Ti(n),jr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?En(n,!!c.multiple,f,!1):c.defaultValue!=null&&En(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ul)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(n&&s.stateNode!=null)Am(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ei(ya.current),ei(Yn.current),Wl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Qn]=s,(f=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,a,(n.mode&1)!==0)}f&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=s,s.stateNode=c}return Ft(s),null;case 13:if(Je(et),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&ln!==null&&(s.mode&1)!==0&&(s.flags&128)===0)xp(),eo(),s.flags|=98560,f=!1;else if(f=Wl(s),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Qn]=s}else eo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),f=!1}else An!==null&&(jh(An),An=null),f=!0;if(!f)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(et.current&1)!==0?yt===0&&(yt=3):$h())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return so(),Ph(n,s),n===null&&ca(s.stateNode.containerInfo),Ft(s),null;case 10:return rh(s.type._context),Ft(s),null;case 17:return Kt(s.type)&&Bl(),Ft(s),null;case 19:if(Je(et),f=s.memoizedState,f===null)return Ft(s),null;if(c=(s.flags&128)!==0,v=f.rendering,v===null)if(c)Ta(f,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=Xl(n),v!==null){for(s.flags|=128,Ta(f,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(et,et.current&1|2),s.child}n=n.sibling}f.tail!==null&&Qe()>lo&&(s.flags|=128,c=!0,Ta(f,!1),s.lanes=4194304)}else{if(!c)if(n=Xl(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ta(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Ze)return Ft(s),null}else 2*Qe()-f.renderingStartTime>lo&&a!==1073741824&&(s.flags|=128,c=!0,Ta(f,!1),s.lanes=4194304);f.isBackwards?(v.sibling=s.child,s.child=v):(a=f.last,a!==null?a.sibling=v:s.child=v,f.last=v)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Qe(),s.sibling=null,a=et.current,Ge(et,c?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return zh(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(un&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function ww(n,s){switch(Jc(s),s.tag){case 1:return Kt(s.type)&&Bl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return so(),Je(Gt),Je(Lt),ch(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return lh(s),null;case 13:if(Je(et),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));eo()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Je(et),null;case 4:return so(),null;case 10:return rh(s.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var au=!1,Ut=!1,Tw=typeof WeakSet=="function"?WeakSet:Set,oe=null;function oo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ot(n,s,c)}else a.current=null}function kh(n,s,a){try{a()}catch(c){ot(n,s,c)}}var Rm=!1;function Iw(n,s){if(zc=yr,n=sp(),Oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,U=0,Q=0,J=n,G=null;t:for(;;){for(var re;J!==a||d!==0&&J.nodeType!==3||(S=v+d),J!==f||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(re=J.firstChild)!==null;)G=J,J=re;for(;;){if(J===n)break t;if(G===a&&++U===d&&(S=v),G===f&&++Q===c&&(P=v),(re=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=re}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for($c={focusedElem:n,selectionRange:a},yr=!1,oe=s;oe!==null;)if(s=oe,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,oe=n;else for(;oe!==null;){s=oe;try{var le=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ce=le.memoizedProps,ut=le.memoizedState,L=s.stateNode,O=L.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Rn(s.type,ce),ut);L.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){ot(s,s.return,X)}if(n=s.sibling,n!==null){n.return=s.return,oe=n;break}oe=s.return}return le=Rm,Rm=!1,le}function Ia(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&kh(s,a,f)}d=d.next}while(d!==c)}}function lu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Nh(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Cm(n){var s=n.alternate;s!==null&&(n.alternate=null,Cm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Qn],delete s[da],delete s[Gc],delete s[iw],delete s[ow])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xm(n){return n.tag===5||n.tag===3||n.tag===4}function Pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Ul));else if(c!==4&&(n=n.child,n!==null))for(bh(n,s,a),n=n.sibling;n!==null;)bh(n,s,a),n=n.sibling}function Dh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Dh(n,s,a),n=n.sibling;n!==null;)Dh(n,s,a),n=n.sibling}var Pt=null,Cn=!1;function ls(n,s,a){for(a=a.child;a!==null;)km(n,s,a),a=a.sibling}function km(n,s,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(js,a)}catch{}switch(a.tag){case 5:Ut||oo(a,s);case 6:var c=Pt,d=Cn;Pt=null,ls(n,s,a),Pt=c,Cn=d,Pt!==null&&(Cn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Cn?(n=Pt,a=a.stateNode,n.nodeType===8?Wc(n.parentNode,a):n.nodeType===1&&Wc(n,a),Xr(n)):Wc(Pt,a.stateNode));break;case 4:c=Pt,d=Cn,Pt=a.stateNode.containerInfo,Cn=!0,ls(n,s,a),Pt=c,Cn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&kh(a,s,v),d=d.next}while(d!==c)}ls(n,s,a);break;case 1:if(!Ut&&(oo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){ot(a,s,S)}ls(n,s,a);break;case 21:ls(n,s,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ls(n,s,a),Ut=c):ls(n,s,a);break;default:ls(n,s,a)}}function Nm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Tw),s.forEach(function(c){var d=bw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Cn=!1;break e;case 3:Pt=S.stateNode.containerInfo,Cn=!0;break e;case 4:Pt=S.stateNode.containerInfo,Cn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));km(f,v,d),Pt=null,Cn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){ot(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)bm(s,n),s=s.sibling}function bm(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(s,n),Xn(n),c&4){try{Ia(3,n,n.return),lu(3,n)}catch(ce){ot(n,n.return,ce)}try{Ia(5,n,n.return)}catch(ce){ot(n,n.return,ce)}}break;case 1:xn(s,n),Xn(n),c&512&&a!==null&&oo(a,a.return);break;case 5:if(xn(s,n),Xn(n),c&512&&a!==null&&oo(a,a.return),n.flags&32){var d=n.stateNode;try{Vs(d,"")}catch(ce){ot(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&Si(d,f),Ci(S,v);var U=Ci(S,f);for(v=0;v<P.length;v+=2){var Q=P[v],J=P[v+1];Q==="style"?Ri(d,J):Q==="dangerouslySetInnerHTML"?dl(d,J):Q==="children"?Vs(d,J):ne(d,Q,J,U)}switch(S){case"input":Os(d,f);break;case"textarea":hl(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var re=f.value;re!=null?En(d,!!f.multiple,re,!1):G!==!!f.multiple&&(f.defaultValue!=null?En(d,!!f.multiple,f.defaultValue,!0):En(d,!!f.multiple,f.multiple?[]:"",!1))}d[da]=f}catch(ce){ot(n,n.return,ce)}}break;case 6:if(xn(s,n),Xn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ce){ot(n,n.return,ce)}}break;case 3:if(xn(s,n),Xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Xr(s.containerInfo)}catch(ce){ot(n,n.return,ce)}break;case 4:xn(s,n),Xn(n);break;case 13:xn(s,n),Xn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Lh=Qe())),c&4&&Nm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ut=(U=Ut)||Q,xn(s,n),Ut=U):xn(s,n),Xn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!Q&&(n.mode&1)!==0)for(oe=n,Q=n.child;Q!==null;){for(J=oe=Q;oe!==null;){switch(G=oe,re=G.child,G.tag){case 0:case 11:case 14:case 15:Ia(4,G,G.return);break;case 1:oo(G,G.return);var le=G.stateNode;if(typeof le.componentWillUnmount=="function"){c=G,a=G.return;try{s=c,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ce){ot(c,a,ce)}}break;case 5:oo(G,G.return);break;case 22:if(G.memoizedState!==null){Vm(J);continue}}re!==null?(re.return=G,oe=re):Vm(J)}Q=Q.sibling}e:for(Q=null,J=n;;){if(J.tag===5){if(Q===null){Q=J;try{d=J.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=$r("display",v))}catch(ce){ot(n,n.return,ce)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=U?"":J.memoizedProps}catch(ce){ot(n,n.return,ce)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:xn(s,n),Xn(n),c&4&&Nm(n);break;case 21:break;default:xn(s,n),Xn(n)}}function Xn(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Vs(d,""),c.flags&=-33);var f=Pm(n);Dh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Pm(n);bh(n,S,v);break;default:throw Error(t(161))}}catch(P){ot(n,n.return,P)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function Sw(n,s,a){oe=n,Dm(n)}function Dm(n,s,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||au;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ut;S=au;var U=Ut;if(au=v,(Ut=P)&&!U)for(oe=d;oe!==null;)v=oe,P=v.child,v.tag===22&&v.memoizedState!==null?Lm(d):P!==null?(P.return=v,oe=P):Lm(d);for(;f!==null;)oe=f,Dm(f),f=f.sibling;oe=d,au=S,Ut=U}Om(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,oe=f):Om(n)}}function Om(n){for(;oe!==null;){var s=oe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||lu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Rn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=s.updateQueue;f!==null&&Vp(s,f,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Vp(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var Q=U.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&Xr(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&Nh(s)}catch(G){ot(s,s.return,G)}}if(s===n){oe=null;break}if(a=s.sibling,a!==null){a.return=s.return,oe=a;break}oe=s.return}}function Vm(n){for(;oe!==null;){var s=oe;if(s===n){oe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,oe=a;break}oe=s.return}}function Lm(n){for(;oe!==null;){var s=oe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{lu(4,s)}catch(P){ot(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){ot(s,d,P)}}var f=s.return;try{Nh(s)}catch(P){ot(s,f,P)}break;case 5:var v=s.return;try{Nh(s)}catch(P){ot(s,v,P)}}}catch(P){ot(s,s.return,P)}if(s===n){oe=null;break}var S=s.sibling;if(S!==null){S.return=s.return,oe=S;break}oe=s.return}}var Aw=Math.ceil,uu=pe.ReactCurrentDispatcher,Oh=pe.ReactCurrentOwner,gn=pe.ReactCurrentBatchConfig,Fe=0,Tt=null,ft=null,kt=0,un=0,ao=rs(0),yt=0,Sa=null,ni=0,cu=0,Vh=0,Aa=null,Yt=null,Lh=0,lo=1/0,Cr=null,hu=!1,Mh=null,us=null,du=!1,cs=null,fu=0,Ra=0,Fh=null,pu=-1,mu=0;function Wt(){return(Fe&6)!==0?Qe():pu!==-1?pu:pu=Qe()}function hs(n){return(n.mode&1)===0?1:(Fe&2)!==0&&kt!==0?kt&-kt:lw.transition!==null?(mu===0&&(mu=Go()),mu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Mi(n.type)),n)}function Pn(n,s,a,c){if(50<Ra)throw Ra=0,Fh=null,Error(t(185));Hs(n,a,c),((Fe&2)===0||n!==Tt)&&(n===Tt&&((Fe&2)===0&&(cu|=a),yt===4&&ds(n,kt)),Jt(n,c),a===1&&Fe===0&&(s.mode&1)===0&&(lo=Qe()+500,$l&&is()))}function Jt(n,s){var a=n.callbackNode;$s(n,s);var c=pr(n,n===Tt?kt:0);if(c===0)a!==null&&ki(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&ki(a),s===1)n.tag===0?aw(Fm.bind(null,n)):Ip(Fm.bind(null,n)),rw(function(){(Fe&6)===0&&is()}),a=null;else{switch(Un(c)){case 1:a=Ni;break;case 4:a=Ho;break;case 16:a=Us;break;case 536870912:a=bi;break;default:a=Us}a=Wm(a,Mm.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function Mm(n,s){if(pu=-1,mu=0,(Fe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(uo()&&n.callbackNode!==a)return null;var c=pr(n,n===Tt?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=gu(n,c);else{s=c;var d=Fe;Fe|=2;var f=jm();(Tt!==n||kt!==s)&&(Cr=null,lo=Qe()+500,si(n,s));do try{xw();break}catch(S){Um(n,S)}while(!0);nh(),uu.current=f,Fe=d,ft!==null?s=0:(Tt=null,kt=0,s=yt)}if(s!==0){if(s===2&&(d=Wo(n),d!==0&&(c=d,s=Uh(n,d))),s===1)throw a=Sa,si(n,0),ds(n,c),Jt(n,Qe()),a;if(s===6)ds(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Rw(d)&&(s=gu(n,c),s===2&&(f=Wo(n),f!==0&&(c=f,s=Uh(n,f))),s===1))throw a=Sa,si(n,0),ds(n,c),Jt(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ii(n,Yt,Cr);break;case 3:if(ds(n,c),(c&130023424)===c&&(s=Lh+500-Qe(),10<s)){if(pr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Wt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=qc(ii.bind(null,n,Yt,Cr),s);break}ii(n,Yt,Cr);break;case 4:if(ds(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-tn(c);f=1<<v,v=s[v],v>d&&(d=v),c&=~f}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Aw(c/1960))-c,10<c){n.timeoutHandle=qc(ii.bind(null,n,Yt,Cr),c);break}ii(n,Yt,Cr);break;case 5:ii(n,Yt,Cr);break;default:throw Error(t(329))}}}return Jt(n,Qe()),n.callbackNode===a?Mm.bind(null,n):null}function Uh(n,s){var a=Aa;return n.current.memoizedState.isDehydrated&&(si(n,s).flags|=256),n=gu(n,s),n!==2&&(s=Yt,Yt=a,s!==null&&jh(s)),n}function jh(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function Rw(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Sn(f(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ds(n,s){for(s&=~Vh,s&=~cu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-tn(s),c=1<<a;n[a]=-1,s&=~c}}function Fm(n){if((Fe&6)!==0)throw Error(t(327));uo();var s=pr(n,0);if((s&1)===0)return Jt(n,Qe()),null;var a=gu(n,s);if(n.tag!==0&&a===2){var c=Wo(n);c!==0&&(s=c,a=Uh(n,c))}if(a===1)throw a=Sa,si(n,0),ds(n,s),Jt(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ii(n,Yt,Cr),Jt(n,Qe()),null}function Bh(n,s){var a=Fe;Fe|=1;try{return n(s)}finally{Fe=a,Fe===0&&(lo=Qe()+500,$l&&is())}}function ri(n){cs!==null&&cs.tag===0&&(Fe&6)===0&&uo();var s=Fe;Fe|=1;var a=gn.transition,c=Ve;try{if(gn.transition=null,Ve=1,n)return n()}finally{Ve=c,gn.transition=a,Fe=s,(Fe&6)===0&&is()}}function zh(){un=ao.current,Je(ao)}function si(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,nw(a)),ft!==null)for(a=ft.return;a!==null;){var c=a;switch(Jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bl();break;case 3:so(),Je(Gt),Je(Lt),ch();break;case 5:lh(c);break;case 4:so();break;case 13:Je(et);break;case 19:Je(et);break;case 10:rh(c.type._context);break;case 22:case 23:zh()}a=a.return}if(Tt=n,ft=n=fs(n.current,null),kt=un=s,yt=0,Sa=null,Vh=cu=ni=0,Yt=Aa=null,Zs!==null){for(s=0;s<Zs.length;s++)if(a=Zs[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Zs=null}return n}function Um(n,s){do{var a=ft;try{if(nh(),Zl.current=ru,eu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}eu=!1}if(ti=0,wt=gt=tt=null,_a=!1,va=0,Oh.current=null,a===null||a.return===null){yt=1,Sa=s,ft=null;break}e:{var f=n,v=a.return,S=a,P=s;if(s=kt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,Q=S,J=Q.tag;if((Q.mode&1)===0&&(J===0||J===11||J===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=cm(v);if(re!==null){re.flags&=-257,hm(re,v,S,f,s),re.mode&1&&um(f,U,s),s=re,P=U;var le=s.updateQueue;if(le===null){var ce=new Set;ce.add(P),s.updateQueue=ce}else le.add(P);break e}else{if((s&1)===0){um(f,U,s),$h();break e}P=Error(t(426))}}else if(Ze&&S.mode&1){var ut=cm(v);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),hm(ut,v,S,f,s),eh(io(P,S));break e}}f=P=io(P,S),yt!==4&&(yt=2),Aa===null?Aa=[f]:Aa.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,s&=-s,f.lanes|=s;var L=am(f,P,s);Op(f,L);break e;case 1:S=P;var O=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(us===null||!us.has(F)))){f.flags|=65536,s&=-s,f.lanes|=s;var X=lm(f,S,s);Op(f,X);break e}}f=f.return}while(f!==null)}zm(a)}catch(he){s=he,ft===a&&a!==null&&(ft=a=a.return);continue}break}while(!0)}function jm(){var n=uu.current;return uu.current=ru,n===null?ru:n}function $h(){(yt===0||yt===3||yt===2)&&(yt=4),Tt===null||(ni&268435455)===0&&(cu&268435455)===0||ds(Tt,kt)}function gu(n,s){var a=Fe;Fe|=2;var c=jm();(Tt!==n||kt!==s)&&(Cr=null,si(n,s));do try{Cw();break}catch(d){Um(n,d)}while(!0);if(nh(),Fe=a,uu.current=c,ft!==null)throw Error(t(261));return Tt=null,kt=0,yt}function Cw(){for(;ft!==null;)Bm(ft)}function xw(){for(;ft!==null&&!Fs();)Bm(ft)}function Bm(n){var s=qm(n.alternate,n,un);n.memoizedProps=n.pendingProps,s===null?zm(n):ft=s,Oh.current=null}function zm(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=Ew(a,s,un),a!==null){ft=a;return}}else{if(a=ww(a,s),a!==null){a.flags&=32767,ft=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,ft=null;return}}if(s=s.sibling,s!==null){ft=s;return}ft=s=n}while(s!==null);yt===0&&(yt=5)}function ii(n,s,a){var c=Ve,d=gn.transition;try{gn.transition=null,Ve=1,Pw(n,s,a,c)}finally{gn.transition=d,Ve=c}return null}function Pw(n,s,a,c){do uo();while(cs!==null);if((Fe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Pc(n,f),n===Tt&&(ft=Tt=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||du||(du=!0,Wm(Us,function(){return uo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=gn.transition,gn.transition=null;var v=Ve;Ve=1;var S=Fe;Fe|=4,Oh.current=null,Iw(n,a),bm(a,n),QE($c),yr=!!zc,$c=zc=null,n.current=a,Sw(a),fr(),Fe=S,Ve=v,gn.transition=f}else n.current=a;if(du&&(du=!1,cs=n,fu=d),f=n.pendingLanes,f===0&&(us=null),Il(a.stateNode),Jt(n,Qe()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(hu)throw hu=!1,n=Mh,Mh=null,n;return(fu&1)!==0&&n.tag!==0&&uo(),f=n.pendingLanes,(f&1)!==0?n===Fh?Ra++:(Ra=0,Fh=n):Ra=0,is(),null}function uo(){if(cs!==null){var n=Un(fu),s=gn.transition,a=Ve;try{if(gn.transition=null,Ve=16>n?16:n,cs===null)var c=!1;else{if(n=cs,cs=null,fu=0,(Fe&6)!==0)throw Error(t(331));var d=Fe;for(Fe|=4,oe=n.current;oe!==null;){var f=oe,v=f.child;if((oe.flags&16)!==0){var S=f.deletions;if(S!==null){for(var P=0;P<S.length;P++){var U=S[P];for(oe=U;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:Ia(8,Q,f)}var J=Q.child;if(J!==null)J.return=Q,oe=J;else for(;oe!==null;){Q=oe;var G=Q.sibling,re=Q.return;if(Cm(Q),Q===U){oe=null;break}if(G!==null){G.return=re,oe=G;break}oe=re}}}var le=f.alternate;if(le!==null){var ce=le.child;if(ce!==null){le.child=null;do{var ut=ce.sibling;ce.sibling=null,ce=ut}while(ce!==null)}}oe=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,oe=v;else e:for(;oe!==null;){if(f=oe,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ia(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,oe=L;break e}oe=f.return}}var O=n.current;for(oe=O;oe!==null;){v=oe;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,oe=F;else e:for(v=O;oe!==null;){if(S=oe,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:lu(9,S)}}catch(he){ot(S,S.return,he)}if(S===v){oe=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,oe=X;break e}oe=S.return}}if(Fe=d,is(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(js,n)}catch{}c=!0}return c}finally{Ve=a,gn.transition=s}}return!1}function $m(n,s,a){s=io(a,s),s=am(n,s,1),n=as(n,s,1),s=Wt(),n!==null&&(Hs(n,1,s),Jt(n,s))}function ot(n,s,a){if(n.tag===3)$m(n,n,a);else for(;s!==null;){if(s.tag===3){$m(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(us===null||!us.has(c))){n=io(a,n),n=lm(s,n,1),s=as(s,n,1),n=Wt(),s!==null&&(Hs(s,1,n),Jt(s,n));break}}s=s.return}}function kw(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Wt(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(kt&a)===a&&(yt===4||yt===3&&(kt&130023424)===kt&&500>Qe()-Lh?si(n,0):Vh|=a),Jt(n,s)}function Hm(n,s){s===0&&((n.mode&1)===0?s=1:(s=Qr,Qr<<=1,(Qr&130023424)===0&&(Qr=4194304)));var a=Wt();n=Sr(n,s),n!==null&&(Hs(n,s,a),Jt(n,a))}function Nw(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),Hm(n,a)}function bw(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Hm(n,a)}var qm;qm=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Gt.current)Qt=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return Qt=!1,vw(n,s,a);Qt=(n.flags&131072)!==0}else Qt=!1,Ze&&(s.flags&1048576)!==0&&Sp(s,ql,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;ou(n,s),n=s.pendingProps;var d=Ji(s,Lt.current);ro(s,a),d=fh(null,s,c,n,d,a);var f=ph();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Kt(c)?(f=!0,zl(s)):f=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,oh(s),d.updater=su,s.stateNode=d,d._reactInternals=s,Eh(s,c,n,a),s=Sh(null,s,c,!0,f,a)):(s.tag=0,Ze&&f&&Yc(s),qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(ou(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=Ow(c),n=Rn(c,n),d){case 0:s=Ih(null,s,c,n,a);break e;case 1:s=ym(null,s,c,n,a);break e;case 11:s=dm(null,s,c,n,a);break e;case 14:s=fm(null,s,c,Rn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Rn(c,d),Ih(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Rn(c,d),ym(n,s,c,d,a);case 3:e:{if(_m(s),n===null)throw Error(t(387));c=s.pendingProps,f=s.memoizedState,d=f.element,Dp(n,s),Jl(s,c,null,a);var v=s.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){d=io(Error(t(423)),s),s=vm(n,s,c,a,d);break e}else if(c!==d){d=io(Error(t(424)),s),s=vm(n,s,c,a,d);break e}else for(ln=ns(s.stateNode.containerInfo.firstChild),an=s,Ze=!0,An=null,a=Np(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(eo(),c===d){s=Rr(n,s,a);break e}qt(n,s,c,a)}s=s.child}return s;case 5:return Lp(s),n===null&&Zc(s),c=s.type,d=s.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Hc(c,d)?v=null:f!==null&&Hc(c,f)&&(s.flags|=32),gm(n,s),qt(n,s,v,a),s.child;case 6:return n===null&&Zc(s),null;case 13:return Em(n,s,a);case 4:return ah(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=to(s,null,c,a):qt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Rn(c,d),dm(n,s,c,d,a);case 7:return qt(n,s,s.pendingProps,a),s.child;case 8:return qt(n,s,s.pendingProps.children,a),s.child;case 12:return qt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,f=s.memoizedProps,v=d.value,Ge(Kl,c._currentValue),c._currentValue=v,f!==null)if(Sn(f.value,v)){if(f.children===d.children&&!Gt.current){s=Rr(n,s,a);break e}}else for(f=s.child,f!==null&&(f.return=s);f!==null;){var S=f.dependencies;if(S!==null){v=f.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=Ar(-1,a&-a),P.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var Q=U.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),U.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),sh(f.return,a,s),S.lanes|=a;break}P=P.next}}else if(f.tag===10)v=f.type===s.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),sh(v,a,s),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===s){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}qt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,ro(s,a),d=pn(d),c=c(d),s.flags|=1,qt(n,s,c,a),s.child;case 14:return c=s.type,d=Rn(c,s.pendingProps),d=Rn(c.type,d),fm(n,s,c,d,a);case 15:return pm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Rn(c,d),ou(n,s),s.tag=1,Kt(c)?(n=!0,zl(s)):n=!1,ro(s,a),im(s,c,d),Eh(s,c,d,a),Sh(null,s,c,!0,n,a);case 19:return Tm(n,s,a);case 22:return mm(n,s,a)}throw Error(t(156,s.tag))};function Wm(n,s){return $o(n,s)}function Dw(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,s,a,c){return new Dw(n,s,a,c)}function Hh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ow(n){if(typeof n=="function")return Hh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===D)return 11;if(n===st)return 14}return 2}function fs(n,s){var a=n.alternate;return a===null?(a=yn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yu(n,s,a,c,d,f){var v=2;if(c=n,typeof n=="function")Hh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return oi(a.children,d,f,s);case A:v=8,d|=8;break;case C:return n=yn(12,a,s,d|2),n.elementType=C,n.lanes=f,n;case I:return n=yn(13,a,s,d),n.elementType=I,n.lanes=f,n;case Pe:return n=yn(19,a,s,d),n.elementType=Pe,n.lanes=f,n;case We:return _u(a,d,f,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case b:v=9;break e;case D:v=11;break e;case st:v=14;break e;case Et:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=yn(v,a,s,d),s.elementType=n,s.type=c,s.lanes=f,s}function oi(n,s,a,c){return n=yn(7,n,c,s),n.lanes=a,n}function _u(n,s,a,c){return n=yn(22,n,c,s),n.elementType=We,n.lanes=a,n.stateNode={isHidden:!1},n}function qh(n,s,a){return n=yn(6,n,null,s),n.lanes=a,n}function Wh(n,s,a){return s=yn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function Vw(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Gh(n,s,a,c,d,f,v,S,P){return n=new Vw(n,s,a,S,P),s===1?(s=1,f===!0&&(s|=8)):s=0,f=yn(3,null,null,s),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},oh(f),n}function Lw(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function Gm(n){if(!n)return ss;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Kt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return wp(n,a,s)}return s}function Km(n,s,a,c,d,f,v,S,P){return n=Gh(a,c,!0,n,d,f,v,S,P),n.context=Gm(null),a=n.current,c=Wt(),d=hs(a),f=Ar(c,d),f.callback=s??null,as(a,f,d),n.current.lanes=d,Hs(n,d,c),Jt(n,c),n}function vu(n,s,a,c){var d=s.current,f=Wt(),v=hs(d);return a=Gm(a),s.context===null?s.context=a:s.pendingContext=a,s=Ar(f,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=as(d,s,v),n!==null&&(Pn(n,d,v,f),Yl(n,d,v)),v}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Qm(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function Kh(n,s){Qm(n,s),(n=n.alternate)&&Qm(n,s)}function Mw(){return null}var Ym=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qh(n){this._internalRoot=n}wu.prototype.render=Qh.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));vu(n,s,null,null)},wu.prototype.unmount=Qh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ri(function(){vu(null,n,null,null)}),s[Er]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var s=Xo();n={blockedOn:null,target:n,priority:s};for(var a=0;a<nn.length&&s!==0&&s<nn[a].priority;a++);nn.splice(a,0,n),a===0&&Vi(n)}};function Yh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jm(){}function Fw(n,s,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=Eu(v);f.call(U)}}var v=Km(s,c,n,0,null,!1,!1,"",Jm);return n._reactRootContainer=v,n[Er]=v.current,ca(n.nodeType===8?n.parentNode:n),ri(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=Eu(P);S.call(U)}}var P=Gh(n,0,!1,null,null,!1,!1,"",Jm);return n._reactRootContainer=P,n[Er]=P.current,ca(n.nodeType===8?n.parentNode:n),ri(function(){vu(s,P,a,c)}),P}function Iu(n,s,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var S=d;d=function(){var P=Eu(v);S.call(P)}}vu(s,v,n,d)}else v=Fw(a,s,n,d,c);return Eu(v)}Yo=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=je(s.pendingLanes);a!==0&&(Qo(s,a|1),Jt(s,Qe()),(Fe&6)===0&&(lo=Qe()+500,is()))}break;case 13:ri(function(){var c=Sr(n,1);if(c!==null){var d=Wt();Pn(c,n,1,d)}}),Kh(n,1)}},Di=function(n){if(n.tag===13){var s=Sr(n,134217728);if(s!==null){var a=Wt();Pn(s,n,134217728,a)}Kh(n,134217728)}},Jo=function(n){if(n.tag===13){var s=hs(n),a=Sr(n,s);if(a!==null){var c=Wt();Pn(a,n,s,c)}Kh(n,s)}},Xo=function(){return Ve},Zo=function(n,s){var a=Ve;try{return Ve=n,s()}finally{Ve=a}},cr=function(n,s,a){switch(s){case"input":if(Os(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=jl(c);if(!d)throw Error(t(90));Oo(c),Os(c,d)}}}break;case"textarea":hl(n,a);break;case"select":s=a.value,s!=null&&En(n,!!a.multiple,s,!1)}},pl=Bh,ml=ri;var Uw={usingClientEntryPoint:!1,Events:[fa,Qi,jl,qr,Wr,Bh]},Ca={findFiberByHostInstance:Qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jw={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||Mw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{js=Su.inject(jw),en=Su}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw,Xt.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(s))throw Error(t(200));return Lw(n,s,null,a)},Xt.createRoot=function(n,s){if(!Yh(n))throw Error(t(299));var a=!1,c="",d=Ym;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Gh(n,1,!1,null,null,a,!1,c,d),n[Er]=s.current,ca(n.nodeType===8?n.parentNode:n),new Qh(s)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Tl(s),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return ri(n)},Xt.hydrate=function(n,s,a){if(!Tu(s))throw Error(t(200));return Iu(null,n,s,!0,a)},Xt.hydrateRoot=function(n,s,a){if(!Yh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Ym;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Km(s,null,n,1,a??null,d,!1,f,v),n[Er]=s.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new wu(s)},Xt.render=function(n,s,a){if(!Tu(s))throw Error(t(200));return Iu(null,n,s,!1,a)},Xt.unmountComponentAtNode=function(n){if(!Tu(n))throw Error(t(40));return n._reactRootContainer?(ri(function(){Iu(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},Xt.unstable_batchedUpdates=Bh,Xt.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Tu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Iu(n,s,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var ig;function Qw(){if(ig)return Zh.exports;ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Zh.exports=Kw(),Zh.exports}var og;function Yw(){if(og)return Au;og=1;var r=Qw();return Au.createRoot=r.createRoot,Au.hydrateRoot=r.hydrateRoot,Au}var Jw=Yw();const Xw=Qd(Jw),Zw=()=>{};var ag={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},e0=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[i++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=u>>2,T=(u&3)<<4|m>>4;let R=(m&15)<<2|_>>6,B=_&63;g||(B=64,h||(R=64)),i.push(t[E],t[T],t[R],t[B])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(qy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):e0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||T==null)throw new t0;const R=u<<2|m>>4;if(i.push(R),_!==64){const B=m<<4&240|_>>2;if(i.push(B),T!==64){const q=_<<6&192|T;i.push(q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class t0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n0=function(r){const e=qy(r);return Wy.encodeByteArray(e,!0)},$u=function(r){return n0(r).replace(/\./g,"")},Gy=function(r){try{return Wy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function r0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const s0=()=>r0().__FIREBASE_DEFAULTS__,i0=()=>{if(typeof process>"u"||typeof ag>"u")return;const r=ag.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},o0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Gy(r[1]);return e&&JSON.parse(e)},cc=()=>{try{return Zw()||s0()||i0()||o0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ky=r=>{var e,t;return(t=(e=cc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},a0=r=>{const e=Ky(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Qy=()=>{var r;return(r=cc())==null?void 0:r.config},Yy=r=>{var e;return(e=cc())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function u0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[$u(JSON.stringify(t)),$u(JSON.stringify(h)),""].join(".")}const La={};function c0(){const r={prod:[],emulator:[]};for(const e of Object.keys(La))La[e]?r.emulator.push(e):r.prod.push(e);return r}function h0(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let lg=!1;function Xy(r,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||La[r]===e||La[r]||lg)return;La[r]=e;function t(R){return`__firebase__banner__${R}`}const i="__firebase__banner",u=c0().prod.length>0;function h(){const R=document.getElementById(i);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function g(R,B){R.setAttribute("width","24"),R.setAttribute("id",B),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function _(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{lg=!0,h()},R}function E(R,B){R.setAttribute("id",B),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function T(){const R=h0(i),B=t("text"),q=document.getElementById(B)||document.createElement("span"),$=t("learnmore"),z=document.getElementById($)||document.createElement("a"),ae=t("preprendIcon"),ue=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const ne=R.element;m(ne),E(z,$);const pe=_();g(ue,ae),ne.append(ue,q,z,pe),document.body.appendChild(ne)}u?(q.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function d0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function f0(){var e;const r=(e=cc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function p0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function m0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function g0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y0(){const r=$t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function _0(){return!f0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v0(){try{return typeof indexedDB=="object"}catch{return!1}}function E0(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="FirebaseError";class Fr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=w0,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?T0(u,i):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Fr(o,m,i)}}function T0(r,e){return r.replace(I0,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const I0=/\{\$([^}]+)}/g;function S0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function di(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const u=r[o],h=e[o];if(ug(u)&&ug(h)){if(!di(u,h))return!1}else if(u!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ug(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function A0(r,e){const t=new R0(r,e);return t.subscribe.bind(t)}class R0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");C0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=nd),o.error===void 0&&(o.error=nd),o.complete===void 0&&(o.complete=nd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function nd(){}/**
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
 */function On(r){return r&&r._delegate?r._delegate:r}class fi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const li="[DEFAULT]";/**
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
 */class x0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new l0;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(k0(e))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});i.resolve(u)}catch{}}}}clearInstance(e=li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=li){return this.instances.has(e)}getOptions(e=li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);i===m&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&e(u,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:P0(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=li){return this.component?this.component.multipleInstances?e:li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P0(r){return r===li?void 0:r}function k0(r){return r.instantiationMode==="EAGER"}/**
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
 */class N0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new x0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(be||(be={}));const b0={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},D0=be.INFO,O0={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},V0=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=O0[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jd{constructor(e){this.name=e,this._logLevel=D0,this._logHandler=V0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?b0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const L0=(r,e)=>e.some(t=>r instanceof t);let cg,hg;function M0(){return cg||(cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F0(){return hg||(hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zy=new WeakMap,Ed=new WeakMap,e_=new WeakMap,rd=new WeakMap,Xd=new WeakMap;function U0(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(ws(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Zy.set(t,r)}).catch(()=>{}),Xd.set(e,r),e}function j0(r){if(Ed.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Ed.set(r,e)}let wd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ed.get(r);if(e==="objectStoreNames")return r.objectStoreNames||e_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ws(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function B0(r){wd=r(wd)}function z0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(sd(this),e,...t);return e_.set(i,e.sort?e.sort():[e]),ws(i)}:F0().includes(r)?function(...e){return r.apply(sd(this),e),ws(Zy.get(this))}:function(...e){return ws(r.apply(sd(this),e))}}function $0(r){return typeof r=="function"?z0(r):(r instanceof IDBTransaction&&j0(r),L0(r,M0())?new Proxy(r,wd):r)}function ws(r){if(r instanceof IDBRequest)return U0(r);if(rd.has(r))return rd.get(r);const e=$0(r);return e!==r&&(rd.set(r,e),Xd.set(e,r)),e}const sd=r=>Xd.get(r);function H0(r,e,{blocked:t,upgrade:i,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=ws(h);return i&&h.addEventListener("upgradeneeded",g=>{i(ws(h.result),g.oldVersion,g.newVersion,ws(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const q0=["get","getKey","getAll","getAllKeys","count"],W0=["put","add","delete","clear"],id=new Map;function dg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=W0.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||q0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return id.set(e,u),u}B0(r=>({...r,get:(e,t,i)=>dg(e,t)||r.get(e,t,i),has:(e,t)=>!!dg(e,t)||r.has(e,t)}));/**
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
 */class G0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(K0(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function K0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",fg="0.14.9";/**
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
 */const Dr=new Jd("@firebase/app"),Q0="@firebase/app-compat",Y0="@firebase/analytics-compat",J0="@firebase/analytics",X0="@firebase/app-check-compat",Z0="@firebase/app-check",eT="@firebase/auth",tT="@firebase/auth-compat",nT="@firebase/database",rT="@firebase/data-connect",sT="@firebase/database-compat",iT="@firebase/functions",oT="@firebase/functions-compat",aT="@firebase/installations",lT="@firebase/installations-compat",uT="@firebase/messaging",cT="@firebase/messaging-compat",hT="@firebase/performance",dT="@firebase/performance-compat",fT="@firebase/remote-config",pT="@firebase/remote-config-compat",mT="@firebase/storage",gT="@firebase/storage-compat",yT="@firebase/firestore",_T="@firebase/ai",vT="@firebase/firestore-compat",ET="firebase",wT="12.10.0";/**
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
 */const Id="[DEFAULT]",TT={[Td]:"fire-core",[Q0]:"fire-core-compat",[J0]:"fire-analytics",[Y0]:"fire-analytics-compat",[Z0]:"fire-app-check",[X0]:"fire-app-check-compat",[eT]:"fire-auth",[tT]:"fire-auth-compat",[nT]:"fire-rtdb",[rT]:"fire-data-connect",[sT]:"fire-rtdb-compat",[iT]:"fire-fn",[oT]:"fire-fn-compat",[aT]:"fire-iid",[lT]:"fire-iid-compat",[uT]:"fire-fcm",[cT]:"fire-fcm-compat",[hT]:"fire-perf",[dT]:"fire-perf-compat",[fT]:"fire-rc",[pT]:"fire-rc-compat",[mT]:"fire-gcs",[gT]:"fire-gcs-compat",[yT]:"fire-fst",[vT]:"fire-fst-compat",[_T]:"fire-vertex","fire-js":"fire-js",[ET]:"fire-js-all"};/**
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
 */const Hu=new Map,IT=new Map,Sd=new Map;function pg(r,e){try{r.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function wo(r){const e=r.name;if(Sd.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Sd.set(e,r);for(const t of Hu.values())pg(t,r);for(const t of IT.values())pg(t,r);return!0}function Zd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function kn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const ST={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ts=new el("app","Firebase",ST);/**
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
 */class AT{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ts.create("app-deleted",{appName:this._name})}}/**
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
 */const xo=wT;function t_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Id,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ts.create("bad-app-name",{appName:String(o)});if(t||(t=Qy()),!t)throw Ts.create("no-options");const u=Hu.get(o);if(u){if(di(t,u.options)&&di(i,u.config))return u;throw Ts.create("duplicate-app",{appName:o})}const h=new N0(o);for(const g of Sd.values())h.addComponent(g);const m=new AT(t,i,h);return Hu.set(o,m),m}function n_(r=Id){const e=Hu.get(r);if(!e&&r===Id&&Qy())return t_();if(!e)throw Ts.create("no-app",{appName:r});return e}function Is(r,e,t){let i=TT[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(h.join(" "));return}wo(new fi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const RT="firebase-heartbeat-database",CT=1,$a="firebase-heartbeat-store";let od=null;function r_(){return od||(od=H0(RT,CT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($a)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ts.create("idb-open",{originalErrorMessage:r.message})})),od}async function xT(r){try{const t=(await r_()).transaction($a),i=await t.objectStore($a).get(s_(r));return await t.done,i}catch(e){if(e instanceof Fr)Dr.warn(e.message);else{const t=Ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(t.message)}}}async function mg(r,e){try{const i=(await r_()).transaction($a,"readwrite");await i.objectStore($a).put(e,s_(r)),await i.done}catch(t){if(t instanceof Fr)Dr.warn(t.message);else{const i=Ts.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(i.message)}}}function s_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const PT=1024,kT=30;class NT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new DT(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=gg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>kT){const h=OT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Dr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gg(),{heartbeatsToSend:i,unsentEntries:o}=bT(this._heartbeatsCache.heartbeats),u=$u(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Dr.warn(t),""}}}function gg(){return new Date().toISOString().substring(0,10)}function bT(r,e=PT){const t=[];let i=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),yg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),yg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class DT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v0()?E0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return mg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return mg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yg(r){return $u(JSON.stringify({version:2,heartbeats:r})).length}function OT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function VT(r){wo(new fi("platform-logger",e=>new G0(e),"PRIVATE")),wo(new fi("heartbeat",e=>new NT(e),"PRIVATE")),Is(Td,fg,r),Is(Td,fg,"esm2020"),Is("fire-js","")}VT("");function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LT=i_,o_=new el("auth","Firebase",i_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Jd("@firebase/auth");function MT(r,...e){qu.logLevel<=be.WARN&&qu.warn(`Auth (${xo}): ${r}`,...e)}function Du(r,...e){qu.logLevel<=be.ERROR&&qu.error(`Auth (${xo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(r,...e){throw ef(r,...e)}function rr(r,...e){return ef(r,...e)}function a_(r,e,t){const i={...LT(),[e]:t};return new el("auth","Firebase",i).create(e,{appName:r.name})}function Ss(r){return a_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ef(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return o_.create(r,...e)}function Ee(r,e,...t){if(!r)throw ef(e,...t)}function Pr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Du(e),new Error(e)}function Vr(r,e){r||Pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function FT(){return _g()==="http:"||_g()==="https:"}function _g(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FT()||m0()||"connection"in navigator)?navigator.onLine:!0}function jT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=d0()||g0()}get(){return UT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(r,e){Vr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$T=new nl(3e4,6e4);function hc(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Po(r,e,t,i,o={}){return u_(r,o,async()=>{let u={},h={};i&&(e==="GET"?h=i:u={body:JSON.stringify(i)});const m=tl({key:r.config.apiKey,...h}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:g,...u};return p0()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Co(r.emulatorConfig.host)&&(_.credentials="include"),l_.fetch()(await h_(r,r.config.apiHost,t,m),_)})}async function u_(r,e,t){r._canInitEmulator=!1;const i={...BT,...e};try{const o=new HT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ru(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(r,"user-disabled",h);const E=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw a_(r,E,_);Or(r,E)}}catch(o){if(o instanceof Fr)throw o;Or(r,"network-request-failed",{message:String(o)})}}async function c_(r,e,t,i,o={}){const u=await Po(r,e,t,i,o);return"mfaPendingCredential"in u&&Or(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function h_(r,e,t,i){const o=`${e}${t}?${i}`,u=r,h=u.config.emulator?tf(r.config,o):`${r.config.apiScheme}://${o}`;return zT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class HT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(rr(this.auth,"network-request-failed")),$T.get())})}}function Ru(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=rr(r,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(r,e){return Po(r,"POST","/v1/accounts:delete",e)}async function Wu(r,e){return Po(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WT(r,e=!1){const t=On(r),i=await t.getIdToken(e),o=nf(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:i,authTime:Ma(ad(o.auth_time)),issuedAtTime:Ma(ad(o.iat)),expirationTime:Ma(ad(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ad(r){return Number(r)*1e3}function nf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Du("JWT malformed, contained fewer than 3 sections"),null;try{const o=Gy(t);return o?JSON.parse(o):(Du("Failed to decode base64 JWT payload"),null)}catch(o){return Du("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function vg(r){const e=nf(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Fr&&GT(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function GT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Gu(r){var T;const e=r.auth,t=await r.getIdToken(),i=await Ha(r,Wu(e,{idToken:t}));Ee(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?d_(o.providerUserInfo):[],h=YT(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,E)}async function QT(r){const e=On(r);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YT(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function d_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(r,e){const t=await u_(r,{},async()=>{const i=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await h_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:i};return r.emulatorConfig&&Co(r.emulatorConfig.host)&&(g.credentials="include"),l_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function XT(r,e){return Po(r,"POST","/v2/accounts:revokeToken",hc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=vg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:u}=await JT(e,t);this.updateTokensAndExpiration(i,o,Number(u))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:u}=t,h=new go;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Ee(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new KT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Rd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ha(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WT(this,e)}reload(){return QT(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Ss(this.auth));const e=await this.getIdToken();return await Ha(this,qT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:T,emailVerified:R,isAnonymous:B,providerData:q,stsTokenManager:$}=t;Ee(T&&$,e,"internal-error");const z=go.fromJSON(this.name,$);Ee(typeof T=="string",e,"internal-error"),ms(i,e.name),ms(o,e.name),Ee(typeof R=="boolean",e,"internal-error"),Ee(typeof B=="boolean",e,"internal-error"),ms(u,e.name),ms(h,e.name),ms(m,e.name),ms(g,e.name),ms(_,e.name),ms(E,e.name);const ae=new Nn({uid:T,auth:e,email:o,emailVerified:R,displayName:i,isAnonymous:B,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:z,createdAt:_,lastLoginAt:E});return q&&Array.isArray(q)&&(ae.providerData=q.map(ue=>({...ue}))),g&&(ae._redirectEventId=g),ae}static async _fromIdTokenResponse(e,t,i=!1){const o=new go;o.updateFromServerResponse(t);const u=new Nn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?d_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new go;m.updateFromIdToken(i);const g=new Nn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new Map;function kr(r){Vr(r instanceof Function,"Expected a class definition");let e=Eg.get(r);return e?(Vr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Eg.set(r,e),e)}/**
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
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}f_.type="NONE";const wg=f_;/**
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
 */function Ou(r,e,t){return`firebase:${r}:${e}:${t}`}class yo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:u}=this.auth;this.fullUserKey=Ou(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ou("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wu(this.auth,{idToken:e}).catch(()=>{});return t?Nn._fromGetAccountInfoResponse(this.auth,t,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new yo(kr(wg),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||kr(wg);const h=Ou(i,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let T;if(typeof E=="string"){const R=await Wu(e,{idToken:E}).catch(()=>{});if(!R)break;T=await Nn._fromGetAccountInfoResponse(e,R,E)}else T=Nn._fromJSON(e,E);_!==u&&(m=T),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new yo(u,e,i):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new yo(u,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v_(e))return"Blackberry";if(E_(e))return"Webos";if(m_(e))return"Safari";if((e.includes("chrome/")||g_(e))&&!e.includes("edge/"))return"Chrome";if(__(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function p_(r=$t()){return/firefox\//i.test(r)}function m_(r=$t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g_(r=$t()){return/crios\//i.test(r)}function y_(r=$t()){return/iemobile/i.test(r)}function __(r=$t()){return/android/i.test(r)}function v_(r=$t()){return/blackberry/i.test(r)}function E_(r=$t()){return/webos/i.test(r)}function rf(r=$t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ZT(r=$t()){var e;return rf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function eI(){return y0()&&document.documentMode===10}function w_(r=$t()){return rf(r)||__(r)||E_(r)||v_(r)||/windows phone/i.test(r)||y_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(r,e=[]){let t;switch(r){case"Browser":t=Tg($t());break;case"Worker":t=`${Tg($t())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xo}/${i}`}/**
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
 */class tI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function nI(r,e={}){return Po(r,"GET","/v2/passwordPolicy",hc(r,e))}/**
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
 */const rI=6;class sI{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??rI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ig(this),this.idTokenSubscription=new Ig(this),this.beforeStateQueue=new tI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var i,o,u;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wu(this,{idToken:e}),i=await Nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(h){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(Ss(this));const t=e?On(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(Ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nI(this),t=new sI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await XT(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&MT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dc(r){return On(r)}class Ig{constructor(e){this.auth=e,this.observer=null,this.addObserver=A0(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oI(r){sf=r}function aI(r){return sf.loadJS(r)}function lI(){return sf.gapiScript}function uI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(r,e){const t=Zd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(di(u,e??{}))return o;Or(o,"already-initialized")}return t.initialize({options:e})}function hI(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(kr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function dI(r,e,t){const i=dc(r);Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,u=I_(e),{host:h,port:m}=fI(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ee(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ee(di(_,i.config.emulator)&&di(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Co(h)?(Jy(`${u}//${h}${g}`),Xy("Auth",!0)):pI()}function I_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function fI(r){const e=I_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const u=o[1];return{host:u,port:Sg(i.substr(u.length+1))}}else{const[u,h]=i.split(":");return{host:u,port:Sg(h)}}}function Sg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function pI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,t){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mI="http://localhost";class pi extends S_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Or("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...u}=t;if(!i||!o)return null;const h=new pi(i,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return _o(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,_o(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_o(e,t)}buildRequest(){const e={requestUri:mI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gs extends rl{constructor(){super("facebook.com")}static credential(e){return pi._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gs.credential(e.oauthAccessToken)}catch{return null}}}gs.FACEBOOK_SIGN_IN_METHOD="facebook.com";gs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pi._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ys.credential(t,i)}catch{return null}}}ys.GOOGLE_SIGN_IN_METHOD="google.com";ys.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends rl{constructor(){super("github.com")}static credential(e){return pi._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.GITHUB_SIGN_IN_METHOD="github.com";_s.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends rl{constructor(){super("twitter.com")}static credential(e,t){return pi._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vs.credential(t,i)}catch{return null}}}vs.TWITTER_SIGN_IN_METHOD="twitter.com";vs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(r,e){return c_(r,"POST","/v1/accounts:signUp",hc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const u=await Nn._fromIdTokenResponse(e,i,o),h=Ag(i);return new Cs({user:u,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ag(i);return new Cs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ag(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(r){var o;if(kn(r.app))return Promise.reject(Ss(r));const e=dc(r);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Cs({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await gI(e,{returnSecureToken:!0}),i=await Cs._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends Fr{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Ku(e,t,i,o)}}function C_(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(r,u,e,i):u})}async function yI(r,e,t=!1){const i=await Ha(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Cs._forOperation(r,"link",i)}/**
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
 */async function _I(r,e,t=!1){const{auth:i}=r;if(kn(i.app))return Promise.reject(Ss(i));const o="reauthenticate";try{const u=await Ha(r,C_(i,o,e,r),t);Ee(u.idToken,i,"internal-error");const h=nf(u.idToken);Ee(h,i,"internal-error");const{sub:m}=h;return Ee(r.uid===m,i,"user-mismatch"),Cs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Or(i,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(r,e,t=!1){if(kn(r.app))return Promise.reject(Ss(r));const i="signIn",o=await C_(r,i,e),u=await Cs._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(u.user),u}function EI(r,e,t,i){return On(r).onIdTokenChanged(e,t,i)}function wI(r,e,t){return On(r).beforeAuthStateChanged(e,t)}function TI(r,e,t,i){return On(r).onAuthStateChanged(e,t,i)}const Qu="__sak";/**
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
 */const II=1e3,SI=10;class P_ extends x_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},u=this.storage.getItem(i);eI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,SI):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}P_.type="LOCAL";const AI=P_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function RI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new fc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await RI(m);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class CI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=of("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===_)switch(R.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function xI(r){sr().location.href=r}/**
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
 */function b_(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function PI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function NI(){return b_()?self:null}/**
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
 */const D_="firebaseLocalStorageDb",bI=1,Yu="firebaseLocalStorage",O_="fbase_key";class sl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pc(r,e){return r.transaction([Yu],e?"readwrite":"readonly").objectStore(Yu)}function DI(){const r=indexedDB.deleteDatabase(D_);return new sl(r).toPromise()}function Cd(){const r=indexedDB.open(D_,bI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Yu,{keyPath:O_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Yu)?e(i):(i.close(),await DI(),e(await Cd()))})})}async function Rg(r,e,t){const i=pc(r,!0).put({[O_]:e,value:t});return new sl(i).toPromise()}async function OI(r,e){const t=pc(r,!1).get(e),i=await new sl(t).toPromise();return i===void 0?null:i.value}function Cg(r,e){const t=pc(r,!0).delete(e);return new sl(t).toPromise()}const VI=800,LI=3;class V_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>LI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fc._getInstance(NI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await PI(),!this.activeServiceWorker)return;this.sender=new CI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await Rg(e,Qu,"1"),await Cg(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Rg(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>OI(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=pc(o,!1).getAll();return new sl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V_.type="LOCAL";const MI=V_;new nl(3e4,6e4);/**
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
 */function FI(r,e){return e?kr(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class af extends S_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function UI(r){return vI(r.auth,new af(r),r.bypassAuthState)}function jI(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),_I(t,new af(r),r.bypassAuthState)}async function BI(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),yI(t,new af(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,t,i,o,u=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UI;case"linkViaPopup":case"linkViaRedirect":return BI;case"reauthViaPopup":case"reauthViaRedirect":return jI;default:Or(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=new nl(2e3,1e4);class mo extends L_{constructor(e,t,i,o,u){super(e,t,o,u),this.provider=i,this.authWindow=null,this.pollId=null,mo.currentPopupAction&&mo.currentPopupAction.cancel(),mo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zI.get())};e()}}mo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="pendingRedirect",Vu=new Map;class HI extends L_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Vu.get(this.auth._key());if(!e){try{const i=await qI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Vu.set(this.auth._key(),e)}return this.bypassAuthState||Vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qI(r,e){const t=KI(e),i=GI(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function WI(r,e){Vu.set(r._key(),e)}function GI(r){return kr(r._redirectPersistence)}function KI(r){return Ou($I,r.config.apiKey,r.name)}async function QI(r,e,t=!1){if(kn(r.app))return Promise.reject(Ss(r));const i=dc(r),o=FI(i,e),h=await new HI(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=600*1e3;class JI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!M_(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(rr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YI&&this.cachedEventUids.clear(),this.cachedEventUids.has(xg(e))}saveEventToCache(e){this.cachedEventUids.add(xg(e)),this.lastProcessedEventTime=Date.now()}}function xg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function M_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return M_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(r,e={}){return Po(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tS=/^https?/;async function nS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await ZI(r);for(const t of e)try{if(rS(t))return}catch{}Or(r,"unauthorized-domain")}function rS(r){const e=Ad(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!tS.test(t))return!1;if(eS.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const sS=new nl(3e4,6e4);function Pg(){const r=sr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function iS(r){return new Promise((e,t)=>{var o,u,h;function i(){Pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pg(),t(rr(r,"network-request-failed"))},timeout:sS.get()})}if((u=(o=sr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=sr().gapi)!=null&&h.load)i();else{const m=uI("iframefcb");return sr()[m]=()=>{gapi.load?i():t(rr(r,"network-request-failed"))},aI(`${lI()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Lu=null,e})}let Lu=null;function oS(r){return Lu=Lu||iS(r),Lu}/**
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
 */const aS=new nl(5e3,15e3),lS="__/auth/iframe",uS="emulator/auth/iframe",cS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dS(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?tf(e,uS):`https://${r.config.authDomain}/${lS}`,i={apiKey:e.apiKey,appName:r.name,v:xo},o=hS.get(r.config.apiHost);o&&(i.eid=o);const u=r._getFrameworks();return u.length&&(i.fw=u.join(",")),`${t}?${tl(i).slice(1)}`}async function fS(r){const e=await oS(r),t=sr().gapi;return Ee(t,r,"internal-error"),e.open({where:document.body,url:dS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cS,dontclear:!0},i=>new Promise(async(o,u)=>{await i.restyle({setHideOnLeave:!1});const h=rr(r,"network-request-failed"),m=sr().setTimeout(()=>{u(h)},aS.get());function g(){sr().clearTimeout(m),o(i)}i.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const pS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mS=500,gS=600,yS="_blank",_S="http://localhost";class kg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vS(r,e,t,i=mS,o=gS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let m="";const g={...pS,width:i.toString(),height:o.toString(),top:u,left:h},_=$t().toLowerCase();t&&(m=g_(_)?yS:t),p_(_)&&(e=e||_S,g.scrollbars="yes");const E=Object.entries(g).reduce((R,[B,q])=>`${R}${B}=${q},`,"");if(ZT(_)&&m!=="_self")return ES(e||"",m),new kg(null);const T=window.open(e||"",m,E);Ee(T,r,"popup-blocked");try{T.focus()}catch{}return new kg(T)}function ES(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const wS="__/auth/handler",TS="emulator/auth/handler",IS=encodeURIComponent("fac");async function Ng(r,e,t,i,o,u){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:xo,eventId:o};if(e instanceof A_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",S0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof rl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),_=g?`#${IS}=${encodeURIComponent(g)}`:"";return`${SS(r)}?${tl(m).slice(1)}${_}`}function SS({config:r}){return r.emulator?tf(r,TS):`https://${r.authDomain}/${wS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="webStorageSupport";class AS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N_,this._completeRedirectFn=QI,this._overrideRedirectResult=WI}async _openPopup(e,t,i,o){var h;Vr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Ng(e,t,i,Ad(),o);return vS(e,u,of())}async _openRedirect(e,t,i,o){await this._originValidation(e);const u=await Ng(e,t,i,Ad(),o);return xI(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Vr(u,"If manager is not set, promise should be"),u)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await fS(e),i=new JI(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ld,{type:ld},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[ld];u!==void 0&&t(!!u),Or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return w_()||m_()||rf()}}const RS=AS;var bg="@firebase/auth",Dg="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PS(r){wo(new fi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=i.options;Ee(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T_(r)},_=new iI(i,o,u,g);return hI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),wo(new fi("auth-internal",e=>{const t=dc(e.getProvider("auth").getImmediate());return(i=>new CS(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Is(bg,Dg,xS(r)),Is(bg,Dg,"esm2020")}/**
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
 */const kS=300,NS=Yy("authIdTokenMaxAge")||kS;let Og=null;const bS=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>NS)return;const o=t==null?void 0:t.token;Og!==o&&(Og=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function DS(r=n_()){const e=Zd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=cI(r,{popupRedirectResolver:RS,persistence:[MI,AI,N_]}),i=Yy("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(i,location.origin);if(location.origin===u.origin){const h=bS(u.toString());wI(t,h,()=>h(t.currentUser)),EI(t,m=>h(m))}}const o=Ky("auth");return o&&dI(t,`http://${o}`),t}function OS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}oI({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const u=rr("internal-error");u.customData=o,t(u)},i.type="text/javascript",i.charset="UTF-8",OS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PS("Browser");var VS="firebase",LS="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Is(VS,LS,"app");var Vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var As,F_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,A){function C(){}C.prototype=A.prototype,k.F=A.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(N,b,D){for(var I=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)I[Pe-2]=arguments[Pe];return A.prototype[b].apply(N,I)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,A,C){C||(C=0);const N=Array(16);if(typeof A=="string")for(var b=0;b<16;++b)N[b]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(b=0;b<16;++b)N[b]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=k.g[0],C=k.g[1],b=k.g[2];let D=k.g[3],I;I=A+(D^C&(b^D))+N[0]+3614090360&4294967295,A=C+(I<<7&4294967295|I>>>25),I=D+(b^A&(C^b))+N[1]+3905402710&4294967295,D=A+(I<<12&4294967295|I>>>20),I=b+(C^D&(A^C))+N[2]+606105819&4294967295,b=D+(I<<17&4294967295|I>>>15),I=C+(A^b&(D^A))+N[3]+3250441966&4294967295,C=b+(I<<22&4294967295|I>>>10),I=A+(D^C&(b^D))+N[4]+4118548399&4294967295,A=C+(I<<7&4294967295|I>>>25),I=D+(b^A&(C^b))+N[5]+1200080426&4294967295,D=A+(I<<12&4294967295|I>>>20),I=b+(C^D&(A^C))+N[6]+2821735955&4294967295,b=D+(I<<17&4294967295|I>>>15),I=C+(A^b&(D^A))+N[7]+4249261313&4294967295,C=b+(I<<22&4294967295|I>>>10),I=A+(D^C&(b^D))+N[8]+1770035416&4294967295,A=C+(I<<7&4294967295|I>>>25),I=D+(b^A&(C^b))+N[9]+2336552879&4294967295,D=A+(I<<12&4294967295|I>>>20),I=b+(C^D&(A^C))+N[10]+4294925233&4294967295,b=D+(I<<17&4294967295|I>>>15),I=C+(A^b&(D^A))+N[11]+2304563134&4294967295,C=b+(I<<22&4294967295|I>>>10),I=A+(D^C&(b^D))+N[12]+1804603682&4294967295,A=C+(I<<7&4294967295|I>>>25),I=D+(b^A&(C^b))+N[13]+4254626195&4294967295,D=A+(I<<12&4294967295|I>>>20),I=b+(C^D&(A^C))+N[14]+2792965006&4294967295,b=D+(I<<17&4294967295|I>>>15),I=C+(A^b&(D^A))+N[15]+1236535329&4294967295,C=b+(I<<22&4294967295|I>>>10),I=A+(b^D&(C^b))+N[1]+4129170786&4294967295,A=C+(I<<5&4294967295|I>>>27),I=D+(C^b&(A^C))+N[6]+3225465664&4294967295,D=A+(I<<9&4294967295|I>>>23),I=b+(A^C&(D^A))+N[11]+643717713&4294967295,b=D+(I<<14&4294967295|I>>>18),I=C+(D^A&(b^D))+N[0]+3921069994&4294967295,C=b+(I<<20&4294967295|I>>>12),I=A+(b^D&(C^b))+N[5]+3593408605&4294967295,A=C+(I<<5&4294967295|I>>>27),I=D+(C^b&(A^C))+N[10]+38016083&4294967295,D=A+(I<<9&4294967295|I>>>23),I=b+(A^C&(D^A))+N[15]+3634488961&4294967295,b=D+(I<<14&4294967295|I>>>18),I=C+(D^A&(b^D))+N[4]+3889429448&4294967295,C=b+(I<<20&4294967295|I>>>12),I=A+(b^D&(C^b))+N[9]+568446438&4294967295,A=C+(I<<5&4294967295|I>>>27),I=D+(C^b&(A^C))+N[14]+3275163606&4294967295,D=A+(I<<9&4294967295|I>>>23),I=b+(A^C&(D^A))+N[3]+4107603335&4294967295,b=D+(I<<14&4294967295|I>>>18),I=C+(D^A&(b^D))+N[8]+1163531501&4294967295,C=b+(I<<20&4294967295|I>>>12),I=A+(b^D&(C^b))+N[13]+2850285829&4294967295,A=C+(I<<5&4294967295|I>>>27),I=D+(C^b&(A^C))+N[2]+4243563512&4294967295,D=A+(I<<9&4294967295|I>>>23),I=b+(A^C&(D^A))+N[7]+1735328473&4294967295,b=D+(I<<14&4294967295|I>>>18),I=C+(D^A&(b^D))+N[12]+2368359562&4294967295,C=b+(I<<20&4294967295|I>>>12),I=A+(C^b^D)+N[5]+4294588738&4294967295,A=C+(I<<4&4294967295|I>>>28),I=D+(A^C^b)+N[8]+2272392833&4294967295,D=A+(I<<11&4294967295|I>>>21),I=b+(D^A^C)+N[11]+1839030562&4294967295,b=D+(I<<16&4294967295|I>>>16),I=C+(b^D^A)+N[14]+4259657740&4294967295,C=b+(I<<23&4294967295|I>>>9),I=A+(C^b^D)+N[1]+2763975236&4294967295,A=C+(I<<4&4294967295|I>>>28),I=D+(A^C^b)+N[4]+1272893353&4294967295,D=A+(I<<11&4294967295|I>>>21),I=b+(D^A^C)+N[7]+4139469664&4294967295,b=D+(I<<16&4294967295|I>>>16),I=C+(b^D^A)+N[10]+3200236656&4294967295,C=b+(I<<23&4294967295|I>>>9),I=A+(C^b^D)+N[13]+681279174&4294967295,A=C+(I<<4&4294967295|I>>>28),I=D+(A^C^b)+N[0]+3936430074&4294967295,D=A+(I<<11&4294967295|I>>>21),I=b+(D^A^C)+N[3]+3572445317&4294967295,b=D+(I<<16&4294967295|I>>>16),I=C+(b^D^A)+N[6]+76029189&4294967295,C=b+(I<<23&4294967295|I>>>9),I=A+(C^b^D)+N[9]+3654602809&4294967295,A=C+(I<<4&4294967295|I>>>28),I=D+(A^C^b)+N[12]+3873151461&4294967295,D=A+(I<<11&4294967295|I>>>21),I=b+(D^A^C)+N[15]+530742520&4294967295,b=D+(I<<16&4294967295|I>>>16),I=C+(b^D^A)+N[2]+3299628645&4294967295,C=b+(I<<23&4294967295|I>>>9),I=A+(b^(C|~D))+N[0]+4096336452&4294967295,A=C+(I<<6&4294967295|I>>>26),I=D+(C^(A|~b))+N[7]+1126891415&4294967295,D=A+(I<<10&4294967295|I>>>22),I=b+(A^(D|~C))+N[14]+2878612391&4294967295,b=D+(I<<15&4294967295|I>>>17),I=C+(D^(b|~A))+N[5]+4237533241&4294967295,C=b+(I<<21&4294967295|I>>>11),I=A+(b^(C|~D))+N[12]+1700485571&4294967295,A=C+(I<<6&4294967295|I>>>26),I=D+(C^(A|~b))+N[3]+2399980690&4294967295,D=A+(I<<10&4294967295|I>>>22),I=b+(A^(D|~C))+N[10]+4293915773&4294967295,b=D+(I<<15&4294967295|I>>>17),I=C+(D^(b|~A))+N[1]+2240044497&4294967295,C=b+(I<<21&4294967295|I>>>11),I=A+(b^(C|~D))+N[8]+1873313359&4294967295,A=C+(I<<6&4294967295|I>>>26),I=D+(C^(A|~b))+N[15]+4264355552&4294967295,D=A+(I<<10&4294967295|I>>>22),I=b+(A^(D|~C))+N[6]+2734768916&4294967295,b=D+(I<<15&4294967295|I>>>17),I=C+(D^(b|~A))+N[13]+1309151649&4294967295,C=b+(I<<21&4294967295|I>>>11),I=A+(b^(C|~D))+N[4]+4149444226&4294967295,A=C+(I<<6&4294967295|I>>>26),I=D+(C^(A|~b))+N[11]+3174756917&4294967295,D=A+(I<<10&4294967295|I>>>22),I=b+(A^(D|~C))+N[2]+718787259&4294967295,b=D+(I<<15&4294967295|I>>>17),I=C+(D^(b|~A))+N[9]+3951481745&4294967295,k.g[0]=k.g[0]+A&4294967295,k.g[1]=k.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,k.g[2]=k.g[2]+b&4294967295,k.g[3]=k.g[3]+D&4294967295}i.prototype.v=function(k,A){A===void 0&&(A=k.length);const C=A-this.blockSize,N=this.C;let b=this.h,D=0;for(;D<A;){if(b==0)for(;D<=C;)o(this,k,D),D+=this.blockSize;if(typeof k=="string"){for(;D<A;)if(N[b++]=k.charCodeAt(D++),b==this.blockSize){o(this,N),b=0;break}}else for(;D<A;)if(N[b++]=k[D++],b==this.blockSize){o(this,N),b=0;break}}this.h=b,this.o+=A},i.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var A=1;A<k.length-8;++A)k[A]=0;A=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=A&255,A/=256;for(this.v(k),k=Array(16),A=0,C=0;C<4;++C)for(let N=0;N<32;N+=8)k[A++]=this.g[C]>>>N&255;return k};function u(k,A){var C=m;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=A(k)}function h(k,A){this.h=A;const C=[];let N=!0;for(let b=k.length-1;b>=0;b--){const D=k[b]|0;N&&D==A||(C[b]=D,N=!1)}this.g=C}var m={};function g(k){return-128<=k&&k<128?u(k,function(A){return new h([A|0],A<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return T;if(k<0)return z(_(-k));const A=[];let C=1;for(let N=0;k>=C;N++)A[N]=k/C|0,C*=4294967296;return new h(A,0)}function E(k,A){if(k.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(k.charAt(0)=="-")return z(E(k.substring(1),A));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=_(Math.pow(A,8));let N=T;for(let D=0;D<k.length;D+=8){var b=Math.min(8,k.length-D);const I=parseInt(k.substring(D,D+b),A);b<8?(b=_(Math.pow(A,b)),N=N.j(b).add(_(I))):(N=N.j(C),N=N.add(_(I)))}return N}var T=g(0),R=g(1),B=g(16777216);r=h.prototype,r.m=function(){if($(this))return-z(this).m();let k=0,A=1;for(let C=0;C<this.g.length;C++){const N=this.i(C);k+=(N>=0?N:4294967296+N)*A,A*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(q(this))return"0";if($(this))return"-"+z(this).toString(k);const A=_(Math.pow(k,6));var C=this;let N="";for(;;){const b=pe(C,A).g;C=ae(C,b.j(A));let D=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=b,q(C))return D+N;for(;D.length<6;)D="0"+D;N=D+N}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function q(k){if(k.h!=0)return!1;for(let A=0;A<k.g.length;A++)if(k.g[A]!=0)return!1;return!0}function $(k){return k.h==-1}r.l=function(k){return k=ae(this,k),$(k)?-1:q(k)?0:1};function z(k){const A=k.g.length,C=[];for(let N=0;N<A;N++)C[N]=~k.g[N];return new h(C,~k.h).add(R)}r.abs=function(){return $(this)?z(this):this},r.add=function(k){const A=Math.max(this.g.length,k.g.length),C=[];let N=0;for(let b=0;b<=A;b++){let D=N+(this.i(b)&65535)+(k.i(b)&65535),I=(D>>>16)+(this.i(b)>>>16)+(k.i(b)>>>16);N=I>>>16,D&=65535,I&=65535,C[b]=I<<16|D}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ae(k,A){return k.add(z(A))}r.j=function(k){if(q(this)||q(k))return T;if($(this))return $(k)?z(this).j(z(k)):z(z(this).j(k));if($(k))return z(this.j(z(k)));if(this.l(B)<0&&k.l(B)<0)return _(this.m()*k.m());const A=this.g.length+k.g.length,C=[];for(var N=0;N<2*A;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(let b=0;b<k.g.length;b++){const D=this.i(N)>>>16,I=this.i(N)&65535,Pe=k.i(b)>>>16,st=k.i(b)&65535;C[2*N+2*b]+=I*st,ue(C,2*N+2*b),C[2*N+2*b+1]+=D*st,ue(C,2*N+2*b+1),C[2*N+2*b+1]+=I*Pe,ue(C,2*N+2*b+1),C[2*N+2*b+2]+=D*Pe,ue(C,2*N+2*b+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new h(C,0)};function ue(k,A){for(;(k[A]&65535)!=k[A];)k[A+1]+=k[A]>>>16,k[A]&=65535,A++}function ne(k,A){this.g=k,this.h=A}function pe(k,A){if(q(A))throw Error("division by zero");if(q(k))return new ne(T,T);if($(k))return A=pe(z(k),A),new ne(z(A.g),z(A.h));if($(A))return A=pe(k,z(A)),new ne(z(A.g),A.h);if(k.g.length>30){if($(k)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var C=R,N=A;N.l(k)<=0;)C=Ce(C),N=Ce(N);var b=Te(C,1),D=Te(N,1);for(N=Te(N,2),C=Te(C,2);!q(N);){var I=D.add(N);I.l(k)<=0&&(b=b.add(C),D=I),N=Te(N,1),C=Te(C,1)}return A=ae(k,b.j(A)),new ne(b,A)}for(b=T;k.l(A)>=0;){for(C=Math.max(1,Math.floor(k.m()/A.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=N<=48?1:Math.pow(2,N-48),D=_(C),I=D.j(A);$(I)||I.l(k)>0;)C-=N,D=_(C),I=D.j(A);q(D)&&(D=R),b=b.add(D),k=ae(k,I)}return new ne(b,k)}r.B=function(k){return pe(this,k).h},r.and=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let N=0;N<A;N++)C[N]=this.i(N)&k.i(N);return new h(C,this.h&k.h)},r.or=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let N=0;N<A;N++)C[N]=this.i(N)|k.i(N);return new h(C,this.h|k.h)},r.xor=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let N=0;N<A;N++)C[N]=this.i(N)^k.i(N);return new h(C,this.h^k.h)};function Ce(k){const A=k.g.length+1,C=[];for(let N=0;N<A;N++)C[N]=k.i(N)<<1|k.i(N-1)>>>31;return new h(C,k.h)}function Te(k,A){const C=A>>5;A%=32;const N=k.g.length-C,b=[];for(let D=0;D<N;D++)b[D]=A>0?k.i(D+C)>>>A|k.i(D+C+1)<<32-A:k.i(D+C);return new h(b,k.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,F_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,As=h}).apply(typeof Vg<"u"?Vg:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U_,Na,j_,Mu,xd,B_,z_,$_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(l,p){if(p)e:{var y=i;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in y))break e;y=y[M]}l=l[l.length-1],w=y[l],p=p(w),p!=w&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&y.push([w,p[w]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function E(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function T(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(w,M,j){for(var ee=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)ee[Ie-2]=arguments[Ie];return p.prototype[M].apply(w,ee)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function B(l){const p=l.length;if(p>0){const y=Array(p);for(let w=0;w<p;w++)y[w]=l[w];return y}return[]}function q(l,p){for(let w=1;w<arguments.length;w++){const M=arguments[w];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=l.length||0;const j=M.length||0;l.length=y+j;for(let ee=0;ee<j;ee++)l[y+ee]=M[ee]}else l.push(M)}}class ${constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function z(l){h.setTimeout(()=>{throw l},0)}function ae(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ue{constructor(){this.h=this.g=null}add(p,y){const w=ne.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var ne=new $(()=>new pe,l=>l.reset());class pe{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Te=!1,k=new ue,A=()=>{const l=Promise.resolve(void 0);Ce=()=>{l.then(C)}};function C(){for(var l;l=ae();){try{l.h.call(l.g)}catch(y){z(y)}var p=ne;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Te=!1}function N(){this.u=this.u,this.C=this.C}N.prototype.u=!1,N.prototype.dispose=function(){this.u||(this.u=!0,this.N())},N.prototype[Symbol.dispose]=function(){this.dispose()},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l})();function I(l){return/^[\s\xa0]*$/.test(l)}function Pe(l,p){b.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}T(Pe,b),Pe.prototype.init=function(l,p){const y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Pe.Z.h.call(this)},Pe.prototype.h=function(){Pe.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var st="closure_listenable_"+(Math.random()*1e6|0),Et=0;function We(l,p,y,w,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=M,this.key=++Et,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function fe(l,p,y){for(const w in l)p.call(y,l[w],w,l)}function ie(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function V(l){const p={};for(const y in l)p[y]=l[y];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(l,p){let y,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(y in w)l[y]=w[y];for(let j=0;j<W.length;j++)y=W[j],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function Re(l){this.src=l,this.g={},this.h=0}Re.prototype.add=function(l,p,y,w,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const ee=Ne(l,p,w,M);return ee>-1?(p=l[ee],y||(p.fa=!1)):(p=new We(p,this.src,j,!!w,M),p.fa=y,l.push(p)),p};function ke(l,p){const y=p.type;if(y in l.g){var w=l.g[y],M=Array.prototype.indexOf.call(w,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(w,M,1),j&&(te(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Ne(l,p,y,w){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==w)return M}return-1}var Be="closure_lm_"+(Math.random()*1e6|0),Me={};function He(l,p,y,w,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)He(l,p[j],y,w,M);return null}return y=Vo(y),l&&l[st]?l.J(p,y,m(w)?!!w.capture:!1,M):Ht(l,p,y,!1,w,M)}function Ht(l,p,y,w,M,j){if(!p)throw Error("Invalid event type");const ee=m(M)?!!M.capture:!!M;let Ie=Si(l);if(Ie||(l[Be]=Ie=new Re(l)),y=Ie.add(p,y,w,ee,j),y.proxy)return y;if(w=Ti(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)D||(M=ee),M===void 0&&(M=!1),l.addEventListener(p.toString(),w,M);else if(l.attachEvent)l.attachEvent(Ii(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ti(){function l(y){return p.call(l.src,l.listener,y)}const p=cl;return l}function Oo(l,p,y,w,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)Oo(l,p[j],y,w,M);else w=m(w)?!!w.capture:!!w,y=Vo(y),l&&l[st]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],y=Ne(p,y,w,M),y>-1&&(te(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=Si(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ne(p,y,w,M)),(y=l>-1?p[l]:null)&&Ur(y))}function Ur(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[st])ke(p.i,l);else{var y=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(y,w,l.capture):p.detachEvent?p.detachEvent(Ii(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=Si(p))?(ke(y,l),y.h==0&&(y.src=null,p[Be]=null)):te(l)}}}function Ii(l){return l in Me?Me[l]:Me[l]="on"+l}function cl(l,p){if(l.da)l=!0;else{p=new Pe(p,this);const y=l.listener,w=l.ha||l.src;l.fa&&Ur(l),l=y.call(w,p)}return l}function Si(l){return l=l[Be],l instanceof Re?l:null}var Os="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vo(l){return typeof l=="function"?l:(l[Os]||(l[Os]=function(p){return l.handleEvent(p)}),l[Os])}function ht(){N.call(this),this.i=new Re(this),this.M=this,this.G=null}T(ht,N),ht.prototype[st]=!0,ht.prototype.removeEventListener=function(l,p,y,w){Oo(this,l,p,y,w)};function at(l,p){var y,w=l.G;if(w)for(y=[];w;w=w.G)y.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new b(p,l);else if(p instanceof b)p.target=p.target||l;else{var M=p;p=new b(w,l),Ae(p,M)}M=!0;let j,ee;if(y)for(ee=y.length-1;ee>=0;ee--)j=p.g=y[ee],M=En(j,w,!0,p)&&M;if(j=p.g=l,M=En(j,w,!0,p)&&M,M=En(j,w,!1,p)&&M,y)for(ee=0;ee<y.length;ee++)j=p.g=y[ee],M=En(j,w,!1,p)&&M}ht.prototype.N=function(){if(ht.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let w=0;w<y.length;w++)te(y[w]);delete l.g[p],l.h--}}this.G=null},ht.prototype.J=function(l,p,y,w){return this.i.add(String(l),p,!1,y,w)},ht.prototype.K=function(l,p,y,w){return this.i.add(String(l),p,!0,y,w)};function En(l,p,y,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const ee=p[j];if(ee&&!ee.da&&ee.capture==y){const Ie=ee.listener,lt=ee.ha||ee.src;ee.fa&&ke(l.i,ee),M=Ie.call(lt,w)!==!1&&M}}return M&&!w.defaultPrevented}function Lo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Mo(l){l.g=Lo(()=>{l.g=null,l.i&&(l.i=!1,Mo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class hl extends N{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Mo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(l){N.call(this),this.h=l,this.g={}}T(jr,N);var Fo=[];function Ai(l){fe(l.g,function(p,y){this.g.hasOwnProperty(y)&&Ur(p)},l),l.g={}}jr.prototype.N=function(){jr.Z.N.call(this),Ai(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Br=h.JSON.stringify,dl=h.JSON.parse,Vs=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function zr(){}function fl(){}var $r={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ri(){b.call(this,"d")}T(Ri,b);function Uo(){b.call(this,"c")}T(Uo,b);var wn={},Ci=null;function Hr(){return Ci=Ci||new ht}wn.Ia="serverreachability";function xi(l){b.call(this,wn.Ia,l)}T(xi,b);function cr(l){const p=Hr();at(p,new xi(p))}wn.STAT_EVENT="statevent";function hr(l,p){b.call(this,wn.STAT_EVENT,l),this.stat=p}T(hr,b);function it(l){const p=Hr();at(p,new hr(p,l))}wn.Ja="timingevent";function jo(l,p){b.call(this,wn.Ja,l),this.size=p}T(jo,b);function qr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Wr(){this.g=!0}Wr.prototype.ua=function(){this.g=!1};function pl(l,p,y,w,M,j){l.info(function(){if(l.g)if(j){var ee="",Ie=j.split("&");for(let $e=0;$e<Ie.length;$e++){var lt=Ie[$e].split("=");if(lt.length>1){const dt=lt[0];lt=lt[1];const on=dt.split("_");ee=on.length>=2&&on[1]=="type"?ee+(dt+"="+lt+"&"):ee+(dt+"=redacted&")}}}else ee=null;else ee=j;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+y+`
`+ee})}function ml(l,p,y,w,M,j,ee){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+y+`
`+j+" "+ee})}function Vn(l,p,y,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ls(l,y)+(w?" "+w:"")})}function gl(l,p){l.info(function(){return"TIMEOUT: "+p})}Wr.prototype.info=function(){};function Ls(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var y=j[l];if(!(y.length<2)){var w=y[1];if(Array.isArray(w)&&!(w.length<1)){var M=w[0];if(M!="noop"&&M!="stop"&&M!="close")for(let ee=1;ee<w.length;ee++)w[ee]=""}}}}return Br(j)}catch{return p}}var Gr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yl;function dr(){}T(dr,zr),dr.prototype.g=function(){return new XMLHttpRequest},yl=new dr;function Ln(l){return encodeURIComponent(String(l))}function Pi(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function cn(l,p,y,w){this.j=l,this.i=p,this.l=y,this.S=w||1,this.V=new jr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _l}function _l(){this.i=null,this.g="",this.h=!1}var vl={},Bo={};function Tn(l,p,y){l.M=1,l.A=pr(hn(p)),l.u=y,l.R=!0,zo(l,null)}function zo(l,p){l.F=Date.now(),Ms(l),l.B=hn(l.A);var y=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),Xo(y.i,"t",w),l.C=0,y=l.j.L,l.h=new _l,l.g=Pl(l.j,y?p:null,!l.u),l.P>0&&(l.O=new hl(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,w=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Fo[0]=M.toString()),M=Fo);for(let j=0;j<M.length;j++){const ee=He(y,M[j],w||p.handleEvent,!1,p.h||p);if(!ee)break;p.g[ee.key]=ee}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),cr(),pl(l.i,l.v,l.B,l.l,l.S,l.u)}cn.prototype.ba=function(l){l=l.target;const p=this.O;p&&$n(l)==3?p.j():this.Y(l)},cn.prototype.Y=function(l){try{if(l==this.g)e:{const Ie=$n(this.g),lt=this.g.ya(),$e=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||Cl(this.g)))){this.K||Ie!=4||lt==7||(lt==8||$e<=0?cr(3):cr(2)),ki(this);var p=this.g.ca();this.X=p;var y=El(this);if(this.o=p==200,ml(this.i,this.v,this.B,this.l,this.S,Ie,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,M=this.g;if((w=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(w)){var j=w;break t}}j=null}if(l=j)Vn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qe(this,l);else{this.o=!1,this.m=3,it(12),fr(this),Fs(this);break e}}if(this.R){l=!0;let dt;for(;!this.K&&this.C<y.length;)if(dt=Tl(this,y),dt==Bo){Ie==4&&(this.m=4,it(14),l=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==vl){this.m=4,it(15),Vn(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else Vn(this.i,this.l,dt,null),Qe(this,dt);if(wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||y.length!=0||this.h.h||(this.m=1,it(16),l=!1),this.o=this.o&&l,!l)Vn(this.i,this.l,y,"[Invalid Chunked Response]"),fr(this),Fs(this);else if(y.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Gs(ee),ee.P=!0,it(11))}}else Vn(this.i,this.l,y,null),Qe(this,y);Ie==4&&fr(this),this.o&&!this.K&&(Ie==4?ji(this.j,this):(this.o=!1,Ms(this)))}else ea(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),fr(this),Fs(this)}}}catch{}finally{}};function El(l){if(!wl(l))return l.g.la();const p=Cl(l.g);if(p==="")return"";let y="";const w=p.length,M=$n(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return fr(l),Fs(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<w;j++)l.h.h=!0,y+=l.h.i.decode(p[j],{stream:!(M&&j==w-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function wl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Tl(l,p){var y=l.C,w=p.indexOf(`
`,y);return w==-1?Bo:(y=Number(p.substring(y,w)),isNaN(y)?vl:(w+=1,w+y>p.length?Bo:(p=p.slice(w,w+y),l.C=w+y,p)))}cn.prototype.cancel=function(){this.K=!0,fr(this)};function Ms(l){l.T=Date.now()+l.H,$o(l,l.H)}function $o(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=qr(_(l.aa,l),p)}function ki(l){l.D&&(h.clearTimeout(l.D),l.D=null)}cn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(gl(this.i,this.B),this.M!=2&&(cr(),it(17)),fr(this),this.m=2,Fs(this)):$o(this,this.T-l)};function Fs(l){l.j.I==0||l.K||ji(l.j,l)}function fr(l){ki(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Ai(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Qe(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||qo(y.h,l))){if(!l.L&&qo(y.h,l)&&y.I==3){try{var w=y.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)Ui(y),rn(y);else break e;Wn(y),it(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=qr(_(y.Va,y),6e3));Us(y.h)<=1&&y.ta&&(y.ta=void 0)}else sn(y,11)}else if((l.L||y.g==l)&&Ui(y),!I(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let $e=M[p];const dt=$e[0];if(!(dt<=y.K))if(y.K=dt,$e=$e[1],y.I==2)if($e[0]=="c"){y.M=$e[1],y.ba=$e[2];const on=$e[3];on!=null&&(y.ka=on,y.j.info("VER="+y.ka));const vr=$e[4];vr!=null&&(y.za=vr,y.j.info("SVER="+y.za));const Gn=$e[5];Gn!=null&&typeof Gn=="number"&&Gn>0&&(w=1.5*Gn,y.O=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const Kn=l.g;if(Kn){const $i=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var j=w.h;j.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(bi(j,j.h),j.h=null))}if(w.G){const ra=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;ra&&(w.wa=ra,je(w.J,w.G,ra))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),w=y;var ee=l;if(w.na=na(w,w.L?w.ba:null,w.W),ee.L){js(w.h,ee);var Ie=ee,lt=w.O;lt&&(Ie.H=lt),Ie.D&&(ki(Ie),Ms(Ie)),w.g=ee}else Vt(w);y.i.length>0&&_r(y)}else $e[0]!="stop"&&$e[0]!="close"||sn(y,7);else y.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?sn(y,7):Mi(y):$e[0]!="noop"&&y.l&&y.l.qa($e),y.A=0)}}cr(4)}catch{}}var xc=class{constructor(l,p){this.g=l,this.map=p}};function Ni(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ho(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Us(l){return l.h?1:l.g?l.g.size:0}function qo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function bi(l,p){l.g?l.g.add(p):l.h=p}function js(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ni.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function en(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return B(l.i)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const w=l[y].indexOf("=");let M,j=null;w>=0?(M=l[y].substring(0,w),j=l[y].substring(w+1)):M=l[y],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Mn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Mn?(this.l=l.l,Bs(this,l.j),this.o=l.o,this.g=l.g,Fn(this,l.u),this.h=l.h,Qr(this,Zo(l.i)),this.m=l.m):l&&(p=String(l).match(Il))?(this.l=!1,Bs(this,p[1]||"",!0),this.o=zs(p[2]||""),this.g=zs(p[3]||"",!0),Fn(this,p[4]),this.h=zs(p[5]||"",!0),Qr(this,p[6]||"",!0),this.m=zs(p[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}Mn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push($s(p,Go,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push($s(p,Go,!0),"@"),l.push(Ln(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push($s(y,y.charAt(0)=="/"?Hs:Ko,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",$s(y,Qo)),l.join("")},Mn.prototype.resolve=function(l){const p=hn(this);let y=!!l.j;y?Bs(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var w=l.h;if(y)Fn(p,l.u);else if(y=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var M=p.h.lastIndexOf("/");M!=-1&&(w=p.h.slice(0,M+1)+w)}if(M=w,M==".."||M==".")w="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){w=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let ee=0;ee<M.length;){const Ie=M[ee++];Ie=="."?w&&ee==M.length&&j.push(""):Ie==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),w&&ee==M.length&&j.push("")):(j.push(Ie),w=!0)}w=j.join("/")}else w=M}return y?p.h=w:y=l.i.toString()!=="",y?Qr(p,Zo(l.i)):y=!!l.m,y&&(p.m=l.m),p};function hn(l){return new Mn(l)}function Bs(l,p,y){l.j=y?zs(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Fn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Qr(l,p,y){p instanceof Ve?(l.i=p,Oi(l.i,l.l)):(y||(p=$s(p,Pc)),l.i=new Ve(p,l.l))}function je(l,p,y){l.i.set(p,y)}function pr(l){return je(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function zs(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function $s(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,Wo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Wo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Go=/[#\/\?@]/g,Ko=/[#\?:]/g,Hs=/[#\?]/g,Pc=/[#\?@]/g,Qo=/#/g;function Ve(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Un(l){l.g||(l.g=new Map,l.h=0,l.i&&tn(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Ve.prototype,r.add=function(l,p){Un(this),this.i=null,l=jn(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Yo(l,p){Un(l),p=jn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Di(l,p){return Un(l),p=jn(l,p),l.g.has(p)}r.forEach=function(l,p){Un(this),this.g.forEach(function(y,w){y.forEach(function(M){l.call(p,M,w,this)},this)},this)};function Jo(l,p){Un(l);let y=[];if(typeof p=="string")Di(l,p)&&(y=y.concat(l.g.get(jn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}r.set=function(l,p){return Un(this),this.i=null,l=jn(this,l),Di(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=Jo(this,l),l.length>0?String(l[0]):p):p};function Xo(l,p,y){Yo(l,p),y.length>0&&(l.i=null,l.g.set(jn(l,p),B(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var y=p[w];const M=Ln(y);y=Jo(this,y);for(let j=0;j<y.length;j++){let ee=M;y[j]!==""&&(ee+="="+Ln(y[j])),l.push(ee)}}return this.i=l.join("&")};function Zo(l){const p=new Ve;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function jn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Oi(l,p){p&&!l.j&&(Un(l),l.i=null,l.g.forEach(function(y,w){const M=w.toLowerCase();w!=M&&(Yo(this,w),Xo(this,M,y))},l)),l.j=p}function Bn(l,p){const y=new Wr;if(h.Image){const w=new Image;w.onload=E(Ct,y,"TestLoadImage: loaded",!0,p,w),w.onerror=E(Ct,y,"TestLoadImage: error",!1,p,w),w.onabort=E(Ct,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(Ct,y,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function zn(l,p){const y=new Wr,w=new AbortController,M=setTimeout(()=>{w.abort(),Ct(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(M),j.ok?Ct(y,"TestPingServer: ok",!0,p):Ct(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Ct(y,"TestPingServer: error",!1,p)})}function Ct(l,p,y,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(y)}catch{}}function qs(){this.g=new Vs}function mr(l){this.i=l.Sb||null,this.h=l.ab||!1}T(mr,zr),mr.prototype.g=function(){return new nn(this.i,this.h)};function nn(l,p){ht.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(nn,ht),r=nn.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,In(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Yr(this):In(this),this.readyState==3&&Sl(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,Yr(this))},r.Na=function(l){this.g&&(this.response=l,Yr(this))},r.ga=function(){this.g&&Yr(this)};function Yr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,In(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function In(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Al(l){let p="";return fe(l,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Vi(l,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Al(y),typeof l=="string"?y!=null&&Ln(y):je(l,p,y))}function qe(l){ht.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(qe,ht);var Rl=/^https?$/i,kc=["POST","PUT"];r=qe.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yl.g(),this.g.onreadystatechange=R(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){Jr(this,j);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)y.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(kc,p,void 0)>=0)||w||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ee]of y)this.g.setRequestHeader(j,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){Jr(this,j)}};function Jr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Xr(l),yr(l)}function Xr(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,at(this,"complete"),at(this,"abort"),yr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),qe.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?gr(this):this.Xa())},r.Xa=function(){gr(this)};function gr(l){if(l.h&&typeof u<"u"){if(l.v&&$n(l)==4)setTimeout(l.Ca.bind(l),0);else if(at(l,"readystatechange"),$n(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=j===0){let ee=String(l.D).match(Il)[1]||null;!ee&&h.self&&h.self.location&&(ee=h.self.location.protocol.slice(0,-1)),w=!Rl.test(ee?ee.toLowerCase():"")}y=w}if(y)at(l,"complete"),at(l,"success");else{l.o=6;try{var M=$n(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Xr(l)}}finally{yr(l)}}}}function yr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||at(l,"ready");try{y.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $n(l){return l.g?l.g.readyState:0}r.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),dl(p)}};function Cl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ea(l){const p={};l=(l.g&&$n(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(I(l[w]))continue;var y=Pi(l[w]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[M]||[];p[M]=j,j.push(y)}ie(p,function(w){return w.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Li(l){this.za=0,this.i=[],this.j=new Wr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Hn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Hn("baseRetryDelayMs",5e3,l),this.Za=Hn("retryDelaySeedMs",1e4,l),this.Ta=Hn("forwardChannelMaxRetries",2,l),this.va=Hn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ni(l&&l.concurrentRequestLimit),this.Ba=new qs,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Li.prototype,r.ka=8,r.I=1,r.connect=function(l,p,y,w){it(0),this.W=l,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.J=na(this,null,this.W),_r(this)};function Mi(l){if(Fi(l),l.I==3){var p=l.V++,y=hn(l.J);if(je(y,"SID",l.M),je(y,"RID",p),je(y,"TYPE","terminate"),qn(l,y),p=new cn(l,l.j,p),p.M=2,p.A=pr(hn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=Pl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Ms(p)}Ks(l)}function rn(l){l.g&&(Gs(l),l.g.cancel(),l.g=null)}function Fi(l){rn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ui(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function _r(l){if(!Ho(l.h)&&!l.m){l.m=!0;var p=l.Ea;Ce||A(),Te||(Ce(),Te=!0),k.add(p,l),l.D=0}}function xl(l,p){return Us(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=qr(_(l.Ea,l,p),Bi(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new cn(this,this.j,l);let j=this.o;if(this.U&&(j?(j=V(j),Ae(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ta(this,M,p),y=hn(this.J),je(y,"RID",l),je(y,"CVER",22),this.G&&je(y,"X-HTTP-Session-Id",this.G),qn(this,y),j&&(this.R?p="headers="+Ln(Al(j))+"&"+p:this.u&&Vi(y,this.u,j)),bi(this.h,M),this.Ra&&je(y,"TYPE","init"),this.S?(je(y,"$req",p),je(y,"SID","null"),M.U=!0,Tn(M,y,null)):Tn(M,y,p),this.I=2}}else this.I==3&&(l?Ws(this,l):this.i.length==0||Ho(this.h)||Ws(this))};function Ws(l,p){var y;p?y=p.l:y=l.V++;const w=hn(l.J);je(w,"SID",l.M),je(w,"RID",y),je(w,"AID",l.K),qn(l,w),l.u&&l.o&&Vi(w,l.u,l.o),y=new cn(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=ta(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),bi(l.h,y),Tn(y,w,p)}function qn(l,p){l.H&&fe(l.H,function(y,w){je(p,w,y)}),l.l&&fe({},function(y,w){je(p,w,y)})}function ta(l,p,y){y=Math.min(l.i.length,y);const w=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ie=-1;for(;;){const lt=["count="+y];Ie==-1?y>0?(Ie=M[0].g,lt.push("ofs="+Ie)):Ie=0:lt.push("ofs="+Ie);let $e=!0;for(let dt=0;dt<y;dt++){var j=M[dt].g;const on=M[dt].map;if(j-=Ie,j<0)Ie=Math.max(0,M[dt].g-100),$e=!1;else try{j="req"+j+"_"||"";try{var ee=on instanceof Map?on:Object.entries(on);for(const[vr,Gn]of ee){let Kn=Gn;m(Gn)&&(Kn=Br(Gn)),lt.push(j+vr+"="+encodeURIComponent(Kn))}}catch(vr){throw lt.push(j+"type="+encodeURIComponent("_badmap")),vr}}catch{w&&w(on)}}if($e){ee=lt.join("&");break e}}ee=void 0}return l=l.i.splice(0,y),p.G=l,ee}function Vt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Ce||A(),Te||(Ce(),Te=!0),k.add(p,l),l.A=0}}function Wn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=qr(_(l.Da,l),Bi(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,Zr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=qr(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),rn(this),Zr(this))};function Gs(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Zr(l){l.g=new cn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=hn(l.na);je(p,"RID","rpc"),je(p,"SID",l.M),je(p,"AID",l.K),je(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&je(p,"TO",l.ia),je(p,"TYPE","xmlhttp"),qn(l,p),l.u&&l.o&&Vi(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=pr(hn(p)),y.u=null,y.R=!0,zo(y,l)}r.Va=function(){this.C!=null&&(this.C=null,rn(this),Wn(this),it(19))};function Ui(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function ji(l,p){var y=null;if(l.g==p){Ui(l),Gs(l),l.g=null;var w=2}else if(qo(l.h,p))y=p.G,js(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;w=Hr(),at(w,new jo(w,y)),_r(l)}else Vt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(w==1&&xl(l,p)||w==2&&Wn(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),M){case 1:sn(l,5);break;case 4:sn(l,10);break;case 3:sn(l,6);break;default:sn(l,2)}}}function Bi(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function sn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),w=l.Ua;const M=!w;w=new Mn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Bs(w,"https"),pr(w),M?Bn(w.toString(),y):zn(w.toString(),y)}else it(2);l.I=0,l.l&&l.l.pa(p),Ks(l),Fi(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Ks(l){if(l.I=0,l.ja=[],l.l){const p=en(l.h);(p.length!=0||l.i.length!=0)&&(q(l.ja,p),q(l.ja,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.oa()}}function na(l,p,y){var w=y instanceof Mn?hn(y):new Mn(y);if(w.g!="")p&&(w.g=p+"."+w.g),Fn(w,w.u);else{var M=h.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new Mn(null);w&&Bs(j,w),p&&(j.g=p),M&&Fn(j,M),y&&(j.h=y),w=j}return y=l.G,p=l.wa,y&&p&&je(w,y,p),je(w,"VER",l.ka),qn(l,w),w}function Pl(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new qe(new mr({ab:y})):new qe(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function kl(){}r=kl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function zi(){}zi.prototype.g=function(l,p){return new xt(l,p)};function xt(l,p){ht.call(this),this.g=new Li(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!I(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!I(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new es(this)}T(xt,ht),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Mi(this.g)},xt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=Br(l),l=y);p.i.push(new xc(p.Ya++,l)),p.I==3&&_r(p)},xt.prototype.N=function(){this.g.l=null,delete this.j,Mi(this.g),delete this.g,xt.Z.N.call(this)};function Nl(l){Ri.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}T(Nl,Ri);function bl(){Uo.call(this),this.status=1}T(bl,Uo);function es(l){this.g=l}T(es,kl),es.prototype.ra=function(){at(this.g,"a")},es.prototype.qa=function(l){at(this.g,new Nl(l))},es.prototype.pa=function(l){at(this.g,new bl)},es.prototype.oa=function(){at(this.g,"b")},zi.prototype.createWebChannel=zi.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,$_=function(){return new zi},z_=function(){return Hr()},B_=wn,xd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Gr.NO_ERROR=0,Gr.TIMEOUT=8,Gr.HTTP_ERROR=6,Mu=Gr,Kr.COMPLETE="complete",j_=Kr,fl.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",ht.prototype.listen=ht.prototype.J,Na=fl,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,U_=qe}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="12.10.0";function MS(r){ko=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mi=new Jd("@firebase/firestore");function co(){return mi.logLevel}function se(r,...e){if(mi.logLevel<=be.DEBUG){const t=e.map(lf);mi.debug(`Firestore (${ko}): ${r}`,...t)}}function Lr(r,...e){if(mi.logLevel<=be.ERROR){const t=e.map(lf);mi.error(`Firestore (${ko}): ${r}`,...t)}}function gi(r,...e){if(mi.logLevel<=be.WARN){const t=e.map(lf);mi.warn(`Firestore (${ko}): ${r}`,...t)}}function lf(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,H_(r,i,t)}function H_(r,e,t){let i=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Lr(i),new Error(i)}function ze(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||H_(e,o,i)}function Se(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Bt.UNAUTHENTICATED)))}shutdown(){}}class US{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jS{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let u=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Rs,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Rs)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string",31837,{l:i}),new q_(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class BS{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class zS{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new BS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Lg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $S{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const i=u=>{u.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>i(u)))};const o=u=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Lg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Lg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=HS(40);for(let u=0;u<o.length;++u)i.length<20&&o[u]<t&&(i+=e.charAt(o[u]%62))}return i}}function De(r,e){return r<e?-1:r>e?1:0}function Pd(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),u=e.charAt(i);if(o!==u)return ud(o)===ud(u)?De(o,u):ud(o)?1:-1}return De(r.length,e.length)}const qS=55296,WS=57343;function ud(r){const e=r.charCodeAt(0);return e>=qS&&e<=WS}function To(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="__name__";class nr{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const u=nr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return De(e.length,t.length)}static compareSegments(e,t){const i=nr.isNumericId(e),o=nr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?nr.extractNumericId(e).compare(nr.extractNumericId(t)):Pd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return As.fromString(e.substring(4,e.length-2))}}class nt extends nr{construct(e,t,i){return new nt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new de(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new nt(t)}static emptyPath(){return new nt([])}}const GS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends nr{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return GS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mg}static keyField(){return new Dt([Mg])}static fromServerFormat(e){const t=[];let i="",o=0;const u=()=>{if(i.length===0)throw new de(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new de(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(i+=m,o++):(u(),o++)}if(u(),h)throw new de(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(nt.fromString(e))}static fromName(e){return new ye(nt.fromString(e).popFirst(5))}static empty(){return new ye(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new nt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(r,e,t){if(!t)throw new de(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function QS(r,e,t,i){if(e===!0&&i===!0)throw new de(Y.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Fg(r){if(!ye.isDocumentKey(r))throw new de(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function W_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function cf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function qa(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new de(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cf(r);throw new de(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function mt(r,e){const t={typeString:r};return e&&(t.value=e),t}function il(r,e){if(!W_(r))throw new de(Y.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,u="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${i}' field to equal '${u.value}'`;break}}if(t)throw new de(Y.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=-62135596800,jg=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*jg);return new Xe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ug)throw new de(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jg}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(il(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ug;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:mt("string",Xe._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Xe(0,0))}static max(){return new we(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Wa=-1;function YS(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new Xe(t+1,0):new Xe(t,i));return new xs(o,ye.empty(),e)}function JS(r){return new xs(r.readTime,r.key,Wa)}class xs{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new xs(we.min(),ye.empty(),Wa)}static max(){return new xs(we.max(),ye.empty(),Wa)}}function XS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==ZS)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((i,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(i,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,i)=>{t(e)}))}static reject(e){return new H(((t,i)=>{i(e)}))}static waitFor(e){return new H(((t,i)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>i(g)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next((o=>o?H.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,u)=>{i.push(t.call(this,o,u))})),this.waitFor(i)}static mapArray(e,t){return new H(((i,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++m,m===u&&i(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((i,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):i()};u()}))}}function t1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=-1;function gc(r){return r==null}function Ju(r){return r===0&&1/r==-1/0}function n1(r){return typeof r=="number"&&Number.isInteger(r)&&!Ju(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="";function r1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Bg(e)),e=s1(r.get(t),e);return Bg(e)}function s1(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case G_:t+="";break;default:t+=u}}return t}function Bg(r){return r+G_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function _i(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function K_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?i(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,i,o,u){this.key=e,this.value=t,this.color=i??bt.RED,this.left=o??bt.EMPTY,this.right=u??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,u){return new bt(e??this.key,t??this.value,i??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const u=i(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,i),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return bt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,u){return this}insert(e,t,i){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $g(this.data.getIterator())}getIteratorFrom(e){return new $g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=i.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class $g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new bn([])}unionWith(e){let t=new vt(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Q_("Invalid base64 string: "+u):u}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const i1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ps(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=i1.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(r.seconds),nanos:ct(r.nanos)}}function ct(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ks(r){return typeof r=="string"?Ot.fromBase64String(r):Ot.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="server_timestamp",J_="__type__",X_="__previous_value__",Z_="__local_write_time__";function df(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[J_])==null?void 0:i.stringValue)===Y_}function yc(r){const e=r.mapValue.fields[X_];return df(e)?yc(e):e}function Ga(r){const e=Ps(r.mapValue.fields[Z_].timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,t,i,o,u,h,m,g,_,E,T){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E,this.apiKey=T}}const Xu="(default)";class Ka{constructor(e,t){this.projectId=e,this.database=t||Xu}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database===Xu}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}function a1(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new de(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="__type__",l1="__max__",Pu={mapValue:{}},tv="__vector__",Zu="value";function Ns(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?df(r)?4:c1(r)?9007199254740991:u1(r)?10:11:_e(28295,{value:r})}function lr(r,e){if(r===e)return!0;const t=Ns(r);if(t!==Ns(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ga(r).isEqual(Ga(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ps(o.timestampValue),m=Ps(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return ks(o.bytesValue).isEqual(ks(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return ct(o.geoPointValue.latitude)===ct(u.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ct(o.integerValue)===ct(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ct(o.doubleValue),m=ct(u.doubleValue);return h===m?Ju(h)===Ju(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return To(r.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(zg(h)!==zg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!lr(h[g],m[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function Qa(r,e){return(r.values||[]).find((t=>lr(t,e)))!==void 0}function Io(r,e){if(r===e)return 0;const t=Ns(r),i=Ns(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ct(u.integerValue||u.doubleValue),g=ct(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return Hg(r.timestampValue,e.timestampValue);case 4:return Hg(Ga(r),Ga(e));case 5:return Pd(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=ks(u),g=ks(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const E=De(m[_],g[_]);if(E!==0)return E}return De(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=De(ct(u.latitude),ct(h.latitude));return m!==0?m:De(ct(u.longitude),ct(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return qg(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var R,B,q,$;const m=u.fields||{},g=h.fields||{},_=(R=m[Zu])==null?void 0:R.arrayValue,E=(B=g[Zu])==null?void 0:B.arrayValue,T=De(((q=_==null?void 0:_.values)==null?void 0:q.length)||0,(($=E==null?void 0:E.values)==null?void 0:$.length)||0);return T!==0?T:qg(_,E)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Pu.mapValue&&h===Pu.mapValue)return 0;if(u===Pu.mapValue)return 1;if(h===Pu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const R=Pd(g[T],E[T]);if(R!==0)return R;const B=Io(m[g[T]],_[E[T]]);if(B!==0)return B}return De(g.length,E.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function Hg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=Ps(r),i=Ps(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function qg(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const u=Io(t[o],i[o]);if(u)return u}return De(t.length,i.length)}function So(r){return kd(r)}function kd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Ps(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ks(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ye.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const u of t.values||[])o?o=!1:i+=",",i+=kd(u);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of i)u?u=!1:o+=",",o+=`${h}:${kd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function Fu(r){switch(Ns(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yc(r);return e?16+Fu(e):16;case 5:return 2*r.stringValue.length;case 6:return ks(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,u)=>o+Fu(u)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return _i(i.fields,((u,h)=>{o+=u.length+Fu(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function Nd(r){return!!r&&"integerValue"in r}function ff(r){return!!r&&"arrayValue"in r}function Wg(r){return!!r&&"nullValue"in r}function Gg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uu(r){return!!r&&"mapValue"in r}function u1(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[ev])==null?void 0:i.stringValue)===tv}function Fa(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return _i(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Fa(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fa(r.arrayValue.values[t]);return e}return{...r}}function c1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===l1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=m.popLast()}h?i[m.lastSegment()]=Fa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,i,o)}delete(e){const t=this.field(e.popLast());Uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){_i(t,((o,u)=>e[o]=u));for(const o of i)delete e[o]}clone(){return new _n(Fa(this.value))}}function nv(r){const e=[];return _i(r.fields,((t,i)=>{const o=new Dt([t]);if(Uu(i)){const u=nv(i.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i,o,u,h,m){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new zt(e,0,we.min(),we.min(),we.min(),_n.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,we.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,we.min(),we.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,we.min(),we.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ec{constructor(e,t){this.position=e,this.inclusive=t}}function Kg(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?i=ye.comparator(ye.fromName(h.referenceValue),t.key):i=Io(h,t.data.field(u.field)),u.dir==="desc"&&(i*=-1),i!==0)break}return i}function Qg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!lr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class tc{constructor(e,t="asc"){this.field=e,this.dir=t}}function h1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class rv{}class _t extends rv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new f1(e,t,i):t==="array-contains"?new g1(e,i):t==="in"?new y1(e,i):t==="not-in"?new _1(e,i):t==="array-contains-any"?new v1(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new p1(e,i):new m1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Io(t,this.value)):t!==null&&Ns(this.value)===Ns(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends rv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ur(e,t)}matches(e){return sv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sv(r){return r.op==="and"}function iv(r){return d1(r)&&sv(r)}function d1(r){for(const e of r.filters)if(e instanceof ur)return!1;return!0}function bd(r){if(r instanceof _t)return r.field.canonicalString()+r.op.toString()+So(r.value);if(iv(r))return r.filters.map((e=>bd(e))).join(",");{const e=r.filters.map((t=>bd(t))).join(",");return`${r.op}(${e})`}}function ov(r,e){return r instanceof _t?(function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&lr(i.value,o.value)})(r,e):r instanceof ur?(function(i,o){return o instanceof ur&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((u,h,m)=>u&&ov(h,o.filters[m])),!0):!1})(r,e):void _e(19439)}function av(r){return r instanceof _t?(function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`})(r):r instanceof ur?(function(t){return t.op.toString()+" {"+t.getFilters().map(av).join(" ,")+"}"})(r):"Filter"}class f1 extends _t{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class p1 extends _t{constructor(e,t){super(e,"in",t),this.keys=lv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class m1 extends _t{constructor(e,t){super(e,"not-in",t),this.keys=lv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function lv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>ye.fromName(i.referenceValue)))}class g1 extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ff(t)&&Qa(t.arrayValue,this.value)}}class y1 extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qa(this.value.arrayValue,t)}}class _1 extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qa(this.value.arrayValue,t)}}class v1 extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ff(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Qa(this.value.arrayValue,i)))}}/**
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
 */class E1{constructor(e,t=null,i=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Yg(r,e=null,t=[],i=[],o=null,u=null,h=null){return new E1(r,e,t,i,o,u,h)}function pf(r){const e=Se(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>bd(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(u){return u.field.canonicalString()+u.dir})(i))).join(","),gc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>So(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>So(i))).join(",")),e.Te=t}return e.Te}function mf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!h1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!ov(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Qg(r.startAt,e.startAt)&&Qg(r.endAt,e.endAt)}function Dd(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t=null,i=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function w1(r,e,t,i,o,u,h,m){return new _c(r,e,t,i,o,u,h,m)}function gf(r){return new _c(r)}function Jg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function T1(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function I1(r){return r.collectionGroup!==null}function Ua(r){const e=Se(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new vt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new tc(u,i))})),t.has(Dt.keyField().canonicalString())||e.Ie.push(new tc(Dt.keyField(),i))}return e.Ie}function ir(r){const e=Se(r);return e.Ee||(e.Ee=S1(e,Ua(r))),e.Ee}function S1(r,e){if(r.limitType==="F")return Yg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new tc(o.field,u)}));const t=r.endAt?new ec(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new ec(r.startAt.position,r.startAt.inclusive):null;return Yg(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function Od(r,e,t){return new _c(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function vc(r,e){return mf(ir(r),ir(e))&&r.limitType===e.limitType}function uv(r){return`${pf(ir(r))}|lt:${r.limitType}`}function ho(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>av(o))).join(", ")}]`),gc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>So(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>So(o))).join(",")),`Target(${i})`})(ir(r))}; limitType=${r.limitType})`}function Ec(r,e){return e.isFoundDocument()&&(function(i,o){const u=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(u):ye.isDocumentKey(i.path)?i.path.isEqual(u):i.path.isImmediateParentOf(u)})(r,e)&&(function(i,o){for(const u of Ua(i))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const u of i.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,m,g){const _=Kg(h,m,g);return h.inclusive?_<=0:_<0})(i.startAt,Ua(i),o)||i.endAt&&!(function(h,m,g){const _=Kg(h,m,g);return h.inclusive?_>=0:_>0})(i.endAt,Ua(i),o))})(r,e)}function A1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cv(r){return(e,t)=>{let i=!1;for(const o of Ua(r)){const u=R1(o,e,t);if(u!==0)return u;i=i||o.field.isKeyField()}return 0}}function R1(r,e,t){const i=r.field.isKeyField()?ye.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?Io(g,_):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,u]of i)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,((t,i)=>{for(const[o,u]of i)e(o,u)}))}isEmpty(){return K_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=new rt(ye.comparator);function Mr(){return C1}const hv=new rt(ye.comparator);function ba(...r){let e=hv;for(const t of r)e=e.insert(t.key,t);return e}function dv(r){let e=hv;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ci(){return ja()}function fv(){return ja()}function ja(){return new vi((r=>r.toString()),((r,e)=>r.isEqual(e)))}const x1=new rt(ye.comparator),P1=new vt(ye.comparator);function Oe(...r){let e=P1;for(const t of r)e=e.add(t);return e}const k1=new vt(De);function N1(){return k1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(e)?"-0":e}}function pv(r){return{integerValue:""+r}}function b1(r,e){return n1(e)?pv(e):yf(r,e)}/**
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
 */class wc{constructor(){this._=void 0}}function D1(r,e,t){return r instanceof Ya?(function(o,u){const h={fields:{[J_]:{stringValue:Y_},[Z_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&df(u)&&(u=yc(u)),u&&(h.fields[X_]=u),{mapValue:h}})(t,e):r instanceof Ja?gv(r,e):r instanceof Xa?yv(r,e):(function(o,u){const h=mv(o,u),m=Xg(h)+Xg(o.Ae);return Nd(h)&&Nd(o.Ae)?pv(m):yf(o.serializer,m)})(r,e)}function O1(r,e,t){return r instanceof Ja?gv(r,e):r instanceof Xa?yv(r,e):t}function mv(r,e){return r instanceof nc?(function(i){return Nd(i)||(function(u){return!!u&&"doubleValue"in u})(i)})(e)?e:{integerValue:0}:null}class Ya extends wc{}class Ja extends wc{constructor(e){super(),this.elements=e}}function gv(r,e){const t=_v(e);for(const i of r.elements)t.some((o=>lr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Xa extends wc{constructor(e){super(),this.elements=e}}function yv(r,e){let t=_v(e);for(const i of r.elements)t=t.filter((o=>!lr(o,i)));return{arrayValue:{values:t}}}class nc extends wc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Xg(r){return ct(r.integerValue||r.doubleValue)}function _v(r){return ff(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,t){this.field=e,this.transform=t}}function L1(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof Ja&&o instanceof Ja||i instanceof Xa&&o instanceof Xa?To(i.elements,o.elements,lr):i instanceof nc&&o instanceof nc?lr(i.Ae,o.Ae):i instanceof Ya&&o instanceof Ya})(r.transform,e.transform)}class M1{constructor(e,t){this.version=e,this.transformResults=t}}class br{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new br}static exists(e){return new br(void 0,e)}static updateTime(e){return new br(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Tc{}function vv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new wv(r.key,br.none()):new ol(r.key,r.data,br.none());{const t=r.data,i=_n.empty();let o=new vt(Dt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?i.delete(u):i.set(u,h),o=o.add(u)}return new Ei(r.key,i,new bn(o.toArray()),br.none())}}function F1(r,e,t){r instanceof ol?(function(o,u,h){const m=o.value.clone(),g=ey(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Ei?(function(o,u,h){if(!ju(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=ey(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Ev(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ba(r,e,t,i){return r instanceof ol?(function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=u.value.clone(),E=ty(u.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof Ei?(function(u,h,m,g){if(!ju(u.precondition,h))return m;const _=ty(u.fieldTransforms,g,h),E=h.data;return E.setAll(Ev(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(u,h,m){return ju(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function U1(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),u=mv(i.transform,o||null);u!=null&&(t===null&&(t=_n.empty()),t.set(i.field,u))}return t||null}function Zg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&To(i,o,((u,h)=>L1(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ol extends Tc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ei extends Tc{constructor(e,t,i,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Ev(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function ey(r,e,t){const i=new Map;ze(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);i.set(u.field,O1(h,m,t[o]))}return i}function ty(r,e,t){const i=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);i.set(o.field,D1(u,h,e))}return i}class wv extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class j1 extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&F1(u,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ba(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ba(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=fv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=vv(h,m);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,((t,i)=>Zg(t,i)))&&To(this.baseMutations,e.baseMutations,((t,i)=>Zg(t,i)))}}class _f{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){ze(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return x1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,i[h].version);return new _f(e,t,i,o)}}/**
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
 */class z1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,Le;function H1(r){switch(r){case Y.OK:return _e(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function Tv(r){if(r===void 0)return Lr("GRPC error has no .code"),Y.UNKNOWN;switch(r){case pt.OK:return Y.OK;case pt.CANCELLED:return Y.CANCELLED;case pt.UNKNOWN:return Y.UNKNOWN;case pt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case pt.INTERNAL:return Y.INTERNAL;case pt.UNAVAILABLE:return Y.UNAVAILABLE;case pt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case pt.NOT_FOUND:return Y.NOT_FOUND;case pt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case pt.ABORTED:return Y.ABORTED;case pt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case pt.DATA_LOSS:return Y.DATA_LOSS;default:return _e(39323,{code:r})}}(Le=pt||(pt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function q1(){return new TextEncoder}/**
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
 */const W1=new As([4294967295,4294967295],0);function ny(r){const e=q1().encode(r),t=new F_;return t.update(e),new Uint8Array(t.digest())}function ry(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new As([t,i],0),new As([o,u],0)]}class vf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Da(`Invalid padding: ${t}`);if(i<0)throw new Da(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Da(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Da(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=As.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(As.fromNumber(i)));return o.compare(W1)===1&&(o=new As([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ny(e),[i,o]=ry(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(i,o,u);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new vf(u,o,t);return i.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=ny(e),[i,o]=ry(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(i,o,u);this.be(h)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,i,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ic(we.min(),o,new rt(De),Mr(),Oe())}}class al{constructor(e,t,i,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new al(i,t,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=o}}class Iv{constructor(e,t){this.targetId=e,this.Ce=t}}class Sv{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class sy{constructor(){this.ve=0,this.Fe=iy(),this.Me=Ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Oe(),t=Oe(),i=Oe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:u})}})),new al(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=iy()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class G1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Mr(),this.He=ku(),this.Je=ku(),this.Ze=new rt(De)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Dd(u))if(i===0){const h=new ye(u.path);this.et(t,h,zt.newNoDocument(h,we.min()))}else ze(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=ks(i).toUint8Array()}catch(g){if(g instanceof Q_)return gi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new vf(h,o,u)}catch(g){return gi(g instanceof Da?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Dd(m.target)){const g=new ye(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,zt.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.Ke())}}));let i=Oe();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(i=i.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new Ic(e,t,this.Ze,this.je,i);return this.je=Mr(),this.He=ku(),this.Je=ku(),this.Ze=new rt(De),o}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new sy,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new vt(De),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new vt(De),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new sy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ku(){return new rt(ye.comparator)}function iy(){return new rt(ye.comparator)}const K1={asc:"ASCENDING",desc:"DESCENDING"},Q1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Y1={and:"AND",or:"OR"};class J1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vd(r,e){return r.useProto3Json||gc(e)?e:{value:e}}function rc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Av(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function X1(r,e){return rc(r,e.toTimestamp())}function or(r){return ze(!!r,49232),we.fromTimestamp((function(t){const i=Ps(t);return new Xe(i.seconds,i.nanos)})(r))}function Ef(r,e){return Ld(r,e).canonicalString()}function Ld(r,e){const t=(function(o){return new nt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Rv(r){const e=nt.fromString(r);return ze(Nv(e),10190,{key:e.toString()}),e}function Md(r,e){return Ef(r.databaseId,e.path)}function cd(r,e){const t=Rv(e);if(t.get(1)!==r.databaseId.projectId)throw new de(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new de(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(xv(t))}function Cv(r,e){return Ef(r.databaseId,e)}function Z1(r){const e=Rv(r);return e.length===4?nt.emptyPath():xv(e)}function Fd(r){return new nt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function xv(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function oy(r,e,t){return{name:Md(r,e),fields:t.value.mapValue.fields}}function eA(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(ze(E===void 0||typeof E=="string",58123),Ot.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ot.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?Y.UNKNOWN:Tv(_.code);return new de(E,_.message||"")})(h);t=new Sv(i,o,u,m||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=cd(r,i.document.name),u=or(i.document.updateTime),h=i.document.createTime?or(i.document.createTime):we.min(),m=new _n({mapValue:{fields:i.document.fields}}),g=zt.newFoundDocument(o,u,h,m),_=i.targetIds||[],E=i.removedTargetIds||[];t=new Bu(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=cd(r,i.document),u=i.readTime?or(i.readTime):we.min(),h=zt.newNoDocument(o,u),m=i.removedTargetIds||[];t=new Bu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=cd(r,i.document),u=i.removedTargetIds||[];t=new Bu([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:u}=i,h=new $1(o,u),m=i.targetId;t=new Iv(m,h)}}return t}function tA(r,e){let t;if(e instanceof ol)t={update:oy(r,e.key,e.value)};else if(e instanceof wv)t={delete:Md(r,e.key)};else if(e instanceof Ei)t={update:oy(r,e.key,e.data),updateMask:cA(e.fieldMask)};else{if(!(e instanceof j1))return _e(16599,{dt:e.type});t={verify:Md(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(u,h){const m=h.transform;if(m instanceof Ya)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ja)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof nc)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:X1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(r,e.precondition)),t}function nA(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?or(o.updateTime):or(u);return h.isEqual(we.min())&&(h=or(u)),new M1(h,o.transformResults||[])})(t,e)))):[]}function rA(r,e){return{documents:[Cv(r,e.path)]}}function sA(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Cv(r,o);const u=(function(_){if(_.length!==0)return kv(ur.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((E=>(function(R){return{field:fo(R.field),direction:aA(R.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Vd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function iA(r){let e=Z1(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ze(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(T){const R=Pv(T);return R instanceof ur&&iv(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((R=>(function(q){return new tc(po(q.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(R)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let R;return R=typeof T=="object"?T.value:T,gc(R)?null:R})(t.limit));let g=null;t.startAt&&(g=(function(T){const R=!!T.before,B=T.values||[];return new ec(B,R)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const R=!T.before,B=T.values||[];return new ec(B,R)})(t.endAt)),w1(e,o,h,u,m,"F",g,_)}function oA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=po(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=po(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=po(t.unaryFilter.field);return _t.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=po(t.unaryFilter.field);return _t.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return _t.create(po(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ur.create(t.compositeFilter.filters.map((i=>Pv(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function aA(r){return K1[r]}function lA(r){return Q1[r]}function uA(r){return Y1[r]}function fo(r){return{fieldPath:r.canonicalString()}}function po(r){return Dt.fromServerFormat(r.fieldPath)}function kv(r){return r instanceof _t?(function(t){if(t.op==="=="){if(Gg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NAN"}};if(Wg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NAN"}};if(Wg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fo(t.field),op:lA(t.op),value:t.value}}})(r):r instanceof ur?(function(t){const i=t.getFilters().map((o=>kv(o)));return i.length===1?i[0]:{compositeFilter:{op:uA(t.op),filters:i}}})(r):_e(54877,{filter:r})}function cA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Nv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function bv(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,i,o,u=we.min(),h=we.min(),m=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.yt=e}}function dA(r){const e=iA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Od(e,e.limit,"L"):e}/**
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
 */class fA{constructor(){this.Sn=new pA}addToCollectionParentIndex(e,t){return this.Sn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(xs.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class pA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(nt.comparator),u=!o.has(i);return this.index[t]=o.add(i),u}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(nt.comparator)).toArray()}}/**
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
 */const ay={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dv=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(Dv,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ly="LruGarbageCollector",mA=1048576;function uy([r,e],[t,i]){const o=De(r,t);return o===0?De(e,i):o}class gA{constructor(e){this.Pr=e,this.buffer=new vt(uy),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();uy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){se(ly,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bo(t)?se(ly,"Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Ar(3e5)}))}}class _A{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(mc.ce);const i=new gA(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(ay)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ay):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,u,h,m,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,m=Date.now(),this.removeTargets(e,i,t)))).next((T=>(u=T,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(_=Date.now(),co()<=be.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function vA(r,e){return new _A(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.changes=new vi((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Ba(i.mutation,o,bn.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Oe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Oe()){const o=ci();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((u=>{let h=ba();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=ci();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Oe())))}populateOverlays(e,t,i){const o=[];return i.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,i,o){let u=Mr();const h=ja(),m=(function(){return ja()})();return t.forEach(((g,_)=>{const E=i.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Ei)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Ba(E.mutation,_,E.mutation.getFieldMask(),Xe.now())):h.set(_.key,bn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>m.set(_,new wA(E,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const i=ja();let o=new rt(((h,m)=>h-m)),u=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=i.get(g)||bn.empty();E=m.applyToLocalView(_,E),i.set(g,E);const T=(o.get(m.batchId)||Oe()).add(g);o=o.insert(m.batchId,T)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,E=g.value,T=fv();E.forEach((R=>{if(!u.has(R)){const B=vv(t.get(R),i.get(R));B!==null&&T.set(R,B),u=u.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return H.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return T1(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):I1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-u.size):H.resolve(ci());let m=Wa,g=u;return h.next((_=>H.forEach(_,((E,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((R=>{g=g.insert(E,R)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,Oe()))).next((E=>({batchId:m,changes:dv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((i=>{let o=ba();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const u=t.collectionGroup;let h=ba();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(g=>{const _=(function(T,R){return new _c(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((E=>{E.forEach(((T,R)=>{h=h.insert(T,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,u,o)))).next((h=>{u.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,zt.newInvalidDocument(E)))}));let m=ba();return h.forEach(((g,_)=>{const E=u.get(g);E!==void 0&&Ba(E.mutation,_,bn.empty(),Xe.now()),Ec(t,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return H.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:or(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:dA(o.bundledQuery),readTime:or(o.readTime)}})(t)),H.resolve()}}/**
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
 */class SA{constructor(){this.overlays=new rt(ye.comparator),this.Lr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ci();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&i.set(o,u)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,u)=>{this.bt(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=ci(),u=t.length+1,h=new ye(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>i&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let u=new rt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let E=u.get(_.largestBatchId);E===null&&(E=ci(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=ci(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return H.resolve(m)}bt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new z1(t,i));let u=this.Lr.get(t);u===void 0&&(u=Oe(),this.Lr.set(t,u)),this.Lr.set(t,u.add(i.key))}}/**
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
 */class AA{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.kr=new vt(At.Kr),this.qr=new vt(At.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new At(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new At(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new ye(new nt([])),i=new At(t,e),o=new At(t,e+1),u=[];return this.qr.forEachInRange([i,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new ye(new nt([])),i=new At(t,e),o=new At(t,e+1);let u=Oe();return this.qr.forEachInRange([i,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new At(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return ye.comparator(e.key,t.key)||De(e.Hr,t.Hr)}static Ur(e,t){return De(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new vt(At.Kr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new B1(u,t,i,o);this.mutationQueue.push(h);for(const m of o)this.Jr=this.Jr.add(new At(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?hf:this.Yn-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([i,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(De);return t.forEach((o=>{const u=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,h],(m=>{i=i.add(m.Hr)}))})),H.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let u=i;ye.isDocumentKey(u)||(u=u.child(""));const h=new At(new ye(u),0);let m=new vt(De);return this.Jr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),H.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return H.forEach(t.mutations,(o=>{const u=new At(o.key,t.batchId);return i=i.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new At(t,0),o=this.Jr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.ti=e,this.docs=(function(){return new rt(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Mr();return t.forEach((o=>{const u=this.docs.get(o);i=i.insert(o,u?u.document.mutableCopy():zt.newInvalidDocument(o))})),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let u=Mr();const h=t.path,m=new ye(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||XS(JS(E),i)<=0||(o.has(E.key)||Ec(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ni(e,t){return H.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new xA(this)}getSize(e){return H.resolve(this.size)}}class xA extends EA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),H.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.persistence=e,this.ri=new vi((t=>pf(t)),mf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.ii=0,this.si=new wf,this.targetCount=0,this.oi=Ao._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),H.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ao(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.lr(t),H.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&i.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),H.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this._i={},this.overlays={},this.ai=new mc(0),this.ui=!1,this.ui=!0,this.ci=new AA,this.referenceDelegate=e(this),this.li=new PA(this),this.indexManager=new fA,this.remoteDocumentCache=(function(o){return new CA(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new hA(t),this.Pi=new IA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new SA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new RA(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){se("MemoryPersistence","Starting transaction:",e);const o=new kA(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return H.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class kA extends e1{constructor(e){super(),this.currentSequenceNumber=e}}class Tf{constructor(e){this.persistence=e,this.Ri=new wf,this.Ai=null}static Vi(e){return new Tf(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.di,(i=>{const o=ye.fromPath(i);return this.mi(e,o).next((u=>{u||t.removeEntry(o,we.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class sc{constructor(e,t){this.persistence=e,this.fi=new vi((i=>r1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=vA(this,t)}static Vi(e,t){return new sc(e,t)}Ti(){}Ii(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return H.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(i++,u.removeEntry(h,we.min()))})))).next((()=>u.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}wr(e,t,i){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=o}static Es(e,t){let i=Oe(),o=Oe();for(const u of t.docChanges)switch(u.type){case 0:i=i.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new If(e,t.fromCache,i,o)}}/**
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
 */class NA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return _0()?8:t1($t())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,i).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new NA;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(co()<=be.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",ho(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(co()<=be.DEBUG&&se("QueryEngine","Query:",ho(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(co()<=be.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",ho(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(t))):H.resolve())}gs(e,t){if(Jg(t))return H.resolve(null);let i=ir(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Od(t,null,"F"),i=ir(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((u=>{const h=Oe(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.bs(t,m);return this.Ss(t,_,h,g.readTime)?this.gs(e,Od(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,i,o){return Jg(t)||o.isEqual(we.min())?H.resolve(null):this.fs.getDocuments(e,i).next((u=>{const h=this.bs(t,u);return this.Ss(t,h,i,o)?H.resolve(null):(co()<=be.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ho(t)),this.Ds(e,h,t,YS(o,Wa)).next((m=>m)))}))}bs(e,t){let i=new vt(cv(e));return t.forEach(((o,u)=>{Ec(e,u)&&(i=i.add(u))})),i}Ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,i){return co()<=be.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",ho(t)),this.fs.getDocumentsMatchingQuery(e,t,xs.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="LocalStore",DA=3e8;class OA{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new rt(De),this.Fs=new vi((u=>pf(u)),mf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function VA(r,e,t,i){return new OA(r,e,t,i)}async function Vv(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((u=>{const h=[],m=[];let g=Oe();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function LA(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,E){const T=_.batch,R=T.keys();let B=H.resolve();return R.forEach((q=>{B=B.next((()=>E.getEntry(g,q))).next(($=>{const z=_.docVersions.get(q);ze(z!==null,48541),$.version.compareTo(z)<0&&(T.applyToRemoteDocument($,_),$.isValidDocument()&&($.setReadTime(_.commitVersion),E.addEntry($)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(g,T)))})(t,i,e,u).next((()=>u.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(m){let g=Oe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Lv(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function MA(r,e){const t=Se(r),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((E,T)=>{const R=o.get(T);if(!R)return;m.push(t.li.removeMatchingKeys(u,E.removedDocuments,T).next((()=>t.li.addMatchingKeys(u,E.addedDocuments,T))));let B=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?B=B.withResumeToken(Ot.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,i)),o=o.insert(T,B),(function($,z,ae){return $.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=DA?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(R,B,E)&&m.push(t.li.updateTargetData(u,B))}));let g=Mr(),_=Oe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(FA(u,h,e.documentUpdates).next((E=>{g=E.Bs,_=E.Ls}))),!i.isEqual(we.min())){const E=t.li.getLastRemoteSnapshotVersion(u).next((T=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,i)));m.push(E)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.vs=o,u)))}function FA(r,e,t){let i=Oe(),o=Oe();return t.forEach((u=>i=i.add(u))),e.getEntries(r,i).next((u=>{let h=Mr();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):se(Sf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function UA(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=hf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function jA(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((u=>u?(o=u,H.resolve(o)):t.li.allocateTargetId(i).next((h=>(o=new Es(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Ud(r,e,t){const i=Se(r),o=i.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",u,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!bo(h))throw h;se(Sf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function cy(r,e,t){const i=Se(r);let o=we.min(),u=Oe();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const T=Se(g),R=T.Fs.get(E);return R!==void 0?H.resolve(T.vs.get(R)):T.li.getTargetData(_,E)})(i,h,ir(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Oe()))).next((m=>(BA(i,A1(e),m),{documents:m,ks:u})))))}function BA(r,e,t){let i=r.Ms.get(e)||we.min();t.forEach(((o,u)=>{u.readTime.compareTo(i)>0&&(i=u.readTime)})),r.Ms.set(e,i)}class hy{constructor(){this.activeTargetIds=N1()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zA{constructor(){this.vo=new hy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new hy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $A{Mo(e){}shutdown(){}}/**
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
 */const dy="ConnectivityMonitor";class fy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){se(dy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){se(dy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const hd="RestConnection",HA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class qA{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===Xu?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,u){const h=jd(),m=this.Qo(e,t.toUriEncodedString());se(hd,`Sending RPC '${e}' ${h}:`,m,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,u);const{host:_}=new URL(m),E=Co(_);return this.zo(e,m,g,i,E).then((T=>(se(hd,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw gi(hd,`RPC '${e}' ${h} failed with error: `,T,"url: ",m,"request:",i),T}))}jo(e,t,i,o,u,h){return this.Wo(e,t,i,o,u)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),i&&i.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const i=HA[e];let o=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection",Pa=(r,e,t)=>{r.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class vo extends qA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!vo.c_){const e=z_();Pa(e,B_.STAT_EVENT,(t=>{t.stat===xd.PROXY?se(jt,"STAT_EVENT: detected buffering proxy"):t.stat===xd.NOPROXY&&se(jt,"STAT_EVENT: detected no buffering proxy")})),vo.c_=!0}}zo(e,t,i,o,u){const h=jd();return new Promise(((m,g)=>{const _=new U_;_.setWithCredentials(!0),_.listenOnce(j_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Mu.NO_ERROR:const T=_.getResponseJson();se(jt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),m(T);break;case Mu.TIMEOUT:se(jt,`RPC '${e}' ${h} timed out`),g(new de(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Mu.HTTP_ERROR:const R=_.getStatus();if(se(jt,`RPC '${e}' ${h} failed with status:`,R,"response text:",_.getResponseText()),R>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const q=B==null?void 0:B.error;if(q&&q.status&&q.message){const $=(function(ae){const ue=ae.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ue)>=0?ue:Y.UNKNOWN})(q.status);g(new de($,q.message))}else g(new de(Y.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new de(Y.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{se(jt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);se(jt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,i,15)}))}T_(e,t,i){const o=jd(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const _=u.join("");se(jt,`Creating RPC '${e}' stream ${o}: ${_}`,m);const E=h.createWebChannel(_,m);this.I_(E);let T=!1,R=!1;const B=new WA({Ho:q=>{R?se(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(T||(se(jt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),T=!0),se(jt,`RPC '${e}' stream ${o} sending:`,q),E.send(q))},Jo:()=>E.close()});return Pa(E,Na.EventType.OPEN,(()=>{R||(se(jt,`RPC '${e}' stream ${o} transport opened.`),B.i_())})),Pa(E,Na.EventType.CLOSE,(()=>{R||(R=!0,se(jt,`RPC '${e}' stream ${o} transport closed`),B.o_(),this.E_(E))})),Pa(E,Na.EventType.ERROR,(q=>{R||(R=!0,gi(jt,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),B.o_(new de(Y.UNAVAILABLE,"The operation could not be completed")))})),Pa(E,Na.EventType.MESSAGE,(q=>{var $;if(!R){const z=q.data[0];ze(!!z,16349);const ae=z,ue=(ae==null?void 0:ae.error)||(($=ae[0])==null?void 0:$.error);if(ue){se(jt,`RPC '${e}' stream ${o} received error:`,ue);const ne=ue.status;let pe=(function(k){const A=pt[k];if(A!==void 0)return Tv(A)})(ne),Ce=ue.message;ne==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&gi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),pe===void 0&&(pe=Y.INTERNAL,Ce="Unknown error status: "+ne+" with message "+ue.message),R=!0,B.o_(new de(pe,Ce)),E.close()}else se(jt,`RPC '${e}' stream ${o} received:`,z),B.__(z)}})),vo.u_(),setTimeout((()=>{B.s_()}),0),B}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return $_()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(r){return new vo(r)}function dd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(r){return new J1(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vo.c_=!1;class Mv{constructor(e,t,i=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="PersistentStream";class Fv{constructor(e,t,i,o,u,h,m,g){this.Ci=e,this.b_=i,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new de(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return se(py,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(se(py,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class KA extends Fv{constructor(e,t,i,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=eA(this.serializer,e),i=(function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?or(h.readTime):we.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Fd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Dd(g)?{documents:rA(u,g)}:{query:sA(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Av(u,h.resumeToken);const _=Vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=rc(u,h.snapshotVersion.toTimestamp());const _=Vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const i=oA(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Fd(this.serializer),t.removeTarget=e,this.K_(t)}}class QA extends Fv{constructor(e,t,i,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=nA(e.writeResults,e.commitTime),i=or(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Fd(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>tA(this.serializer,i)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{}class JA extends YA{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new de(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Ld(t,i),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(Y.UNKNOWN,u.toString())}))}jo(e,t,i,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,Ld(t,i),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new de(Y.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function XA(r,e,t,i){return new JA(r,e,t,i)}class ZA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Lr(t),this.aa=!1):se("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="RemoteStore";class eR{constructor(e,t,i,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{i.enqueueAndForget((async()=>{wi(this)&&(se(yi,"Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.Ea.add(4),await ll(_),_.Va.set("Unknown"),_.Ea.delete(4),await Ac(_)})(this))}))})),this.Va=new ZA(i,o)}}async function Ac(r){if(wi(r))for(const e of r.Ra)await e(!0)}async function ll(r){for(const e of r.Ra)await e(!1)}function Uv(r,e){const t=Se(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),xf(t)?Cf(t):Do(t).O_()&&Rf(t,e))}function Af(r,e){const t=Se(r),i=Do(t);t.Ia.delete(e),i.O_()&&jv(t,e),t.Ia.size===0&&(i.O_()?i.L_():wi(t)&&t.Va.set("Unknown"))}function Rf(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Do(r).Z_(e)}function jv(r,e){r.da.$e(e),Do(r).X_(e)}function Cf(r){r.da=new G1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Do(r).start(),r.Va.ua()}function xf(r){return wi(r)&&!Do(r).x_()&&r.Ia.size>0}function wi(r){return Se(r).Ea.size===0}function Bv(r){r.da=void 0}async function tR(r){r.Va.set("Online")}async function nR(r){r.Ia.forEach(((e,t)=>{Rf(r,e)}))}async function rR(r,e){Bv(r),xf(r)?(r.Va.ha(e),Cf(r)):r.Va.set("Unknown")}async function sR(r,e,t){if(r.Va.set("Online"),e instanceof Sv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.da.removeTarget(m))})(r,e)}catch(i){se(yi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ic(r,i)}else if(e instanceof Bu?r.da.Xe(e):e instanceof Iv?r.da.st(e):r.da.tt(e),!t.isEqual(we.min()))try{const i=await Lv(r.localStore);t.compareTo(i)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.Ia.get(_);E&&u.Ia.set(_,E.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const E=u.Ia.get(g);if(!E)return;u.Ia.set(g,E.withResumeToken(Ot.EMPTY_BYTE_STRING,E.snapshotVersion)),jv(u,g);const T=new Es(E.target,g,_,E.sequenceNumber);Rf(u,T)})),u.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(i){se(yi,"Failed to raise snapshot:",i),await ic(r,i)}}async function ic(r,e,t){if(!bo(e))throw e;r.Ea.add(1),await ll(r),r.Va.set("Offline"),t||(t=()=>Lv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(yi,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Ac(r)}))}function zv(r,e){return e().catch((t=>ic(r,t,e)))}async function Rc(r){const e=Se(r),t=bs(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:hf;for(;iR(e);)try{const o=await UA(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,oR(e,o)}catch(o){await ic(e,o)}$v(e)&&Hv(e)}function iR(r){return wi(r)&&r.Ta.length<10}function oR(r,e){r.Ta.push(e);const t=bs(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function $v(r){return wi(r)&&!bs(r).x_()&&r.Ta.length>0}function Hv(r){bs(r).start()}async function aR(r){bs(r).ra()}async function lR(r){const e=bs(r);for(const t of r.Ta)e.ea(t.mutations)}async function uR(r,e,t){const i=r.Ta.shift(),o=_f.from(i,e,t);await zv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Rc(r)}async function cR(r,e){e&&bs(r).Y_&&await(async function(i,o){if((function(h){return H1(h)&&h!==Y.ABORTED})(o.code)){const u=i.Ta.shift();bs(i).B_(),await zv(i,(()=>i.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Rc(i)}})(r,e),$v(r)&&Hv(r)}async function my(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),se(yi,"RemoteStore received new credentials");const i=wi(t);t.Ea.add(3),await ll(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ac(t)}async function hR(r,e){const t=Se(r);e?(t.Ea.delete(2),await Ac(t)):e||(t.Ea.add(2),await ll(t),t.Va.set("Unknown"))}function Do(r){return r.ma||(r.ma=(function(t,i,o){const u=Se(t);return u.sa(),new KA(i,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:tR.bind(null,r),Yo:nR.bind(null,r),t_:rR.bind(null,r),J_:sR.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),xf(r)?Cf(r):r.Va.set("Unknown")):(await r.ma.stop(),Bv(r))}))),r.ma}function bs(r){return r.fa||(r.fa=(function(t,i,o){const u=Se(t);return u.sa(),new QA(i,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:aR.bind(null,r),t_:cR.bind(null,r),ta:lR.bind(null,r),na:uR.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Rc(r)):(await r.fa.stop(),r.Ta.length>0&&(se(yi,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,i,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=u,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,u){const h=Date.now()+i,m=new Pf(e,t,h,o,u);return m.start(i),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kf(r,e){if(Lr("AsyncQueue",`${e}: ${r}`),bo(r))return new de(Y.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{static emptySet(e){return new Eo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=ba(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=i.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Eo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.ga=new rt(ye.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ro{constructor(e,t,i,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Ro(e,t,Eo.emptySet(t),h,i,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class fR{constructor(){this.queries=yy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Se(t),u=o.queries;o.queries=yy(),u.forEach(((h,m)=>{for(const g of m.ba)g.onError(i)}))})(this,new de(Y.ABORTED,"Firestore shutting down"))}}function yy(){return new vi((r=>uv(r)),vc)}async function pR(r,e){const t=Se(r);let i=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.Da()&&(i=2):(u=new dR,i=e.Da()?0:1);try{switch(i){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=kf(h,`Initialization of query '${ho(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Nf(t)}async function mR(r,e){const t=Se(r),i=e.query;let o=3;const u=t.queries.get(i);if(u){const h=u.ba.indexOf(e);h>=0&&(u.ba.splice(h,1),u.ba.length===0?o=e.Da()?0:1:!u.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function gR(r,e){const t=Se(r);let i=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.ba)m.Fa(o)&&(i=!0);h.wa=o}}i&&Nf(t)}function yR(r,e,t){const i=Se(r),o=i.queries.get(e);if(o)for(const u of o.ba)u.onError(t);i.queries.delete(e)}function Nf(r){r.Ca.forEach((e=>{e.next()}))}var Bd,_y;(_y=Bd||(Bd={})).Ma="default",_y.Cache="cache";class _R{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ro(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.key=e}}class Wv{constructor(e){this.key=e}}class vR{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Oe(),this.mutatedKeys=Oe(),this.eu=cv(e),this.tu=new Eo(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new gy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const R=o.get(E),B=Ec(this.query,T)?T:null,q=!!R&&this.mutatedKeys.has(R.key),$=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let z=!1;R&&B?R.data.isEqual(B.data)?q!==$&&(i.track({type:3,doc:B}),z=!0):this.su(R,B)||(i.track({type:2,doc:B}),z=!0,(g&&this.eu(B,g)>0||_&&this.eu(B,_)<0)&&(m=!0)):!R&&B?(i.track({type:0,doc:B}),z=!0):R&&!B&&(i.track({type:1,doc:R}),z=!0,(g||_)&&(m=!0)),z&&(B?(h=h.add(B),u=$?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),i.track({type:1,doc:E})}return{tu:h,iu:i,Ss:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,T)=>(function(B,q){const $=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:z})}};return $(B)-$(q)})(E.type,T.type)||this.eu(E.doc,T.doc))),this.ou(i),o=o??!1;const m=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new Ro(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Oe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new Wv(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new qv(i))})),t}cu(e){this.Za=e.ks,this.Ya=Oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ro.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const bf="SyncEngine";class ER{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class wR{constructor(e){this.key=e,this.hu=!1}}class TR{constructor(e,t,i,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new vi((m=>uv(m)),vc),this.Iu=new Map,this.Eu=new Set,this.Ru=new rt(ye.comparator),this.Au=new Map,this.Vu=new wf,this.du={},this.mu=new Map,this.fu=Ao.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function IR(r,e,t=!0){const i=Xv(r);let o;const u=i.Tu.get(e);return u?(i.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Gv(i,e,t,!0),o}async function SR(r,e){const t=Xv(r);await Gv(t,e,!0,!1)}async function Gv(r,e,t,i){const o=await jA(r.localStore,ir(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return i&&(m=await AR(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Uv(r.remoteStore,o),m}async function AR(r,e,t,i,o){r.pu=(T,R,B)=>(async function($,z,ae,ue){let ne=z.view.ru(ae);ne.Ss&&(ne=await cy($.localStore,z.query,!1).then((({documents:k})=>z.view.ru(k,ne))));const pe=ue&&ue.targetChanges.get(z.targetId),Ce=ue&&ue.targetMismatches.get(z.targetId)!=null,Te=z.view.applyChanges(ne,$.isPrimaryClient,pe,Ce);return Ey($,z.targetId,Te.au),Te.snapshot})(r,T,R,B);const u=await cy(r.localStore,e,!0),h=new vR(e,u.ks),m=h.ru(u.documents),g=al.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,g);Ey(r,t,_.au);const E=new ER(e,t,h);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function RR(r,e,t){const i=Se(r),o=i.Tu.get(e),u=i.Iu.get(o.targetId);if(u.length>1)return i.Iu.set(o.targetId,u.filter((h=>!vc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Ud(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Af(i.remoteStore,o.targetId),zd(i,o.targetId)})).catch(No)):(zd(i,o.targetId),await Ud(i.localStore,o.targetId,!0))}async function CR(r,e){const t=Se(r),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Af(t.remoteStore,i.targetId))}async function xR(r,e,t){const i=VR(r);try{const o=await(function(h,m){const g=Se(h),_=Xe.now(),E=m.reduce(((B,q)=>B.add(q.key)),Oe());let T,R;return g.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let q=Mr(),$=Oe();return g.xs.getEntries(B,E).next((z=>{q=z,q.forEach(((ae,ue)=>{ue.isValidDocument()||($=$.add(ae))}))})).next((()=>g.localDocuments.getOverlayedDocuments(B,q))).next((z=>{T=z;const ae=[];for(const ue of m){const ne=U1(ue,T.get(ue.key).overlayedDocument);ne!=null&&ae.push(new Ei(ue.key,ne,nv(ne.value.mapValue),br.exists(!0)))}return g.mutationQueue.addMutationBatch(B,_,ae,m)})).next((z=>{R=z;const ae=z.applyToLocalDocumentSet(T,$);return g.documentOverlayCache.saveOverlays(B,z.batchId,ae)}))})).then((()=>({batchId:R.batchId,changes:dv(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.du[h.currentUser.toKey()];_||(_=new rt(De)),_=_.insert(m,g),h.du[h.currentUser.toKey()]=_})(i,o.batchId,t),await ul(i,o.changes),await Rc(i.remoteStore)}catch(o){const u=kf(o,"Failed to persist write");t.reject(u)}}async function Kv(r,e){const t=Se(r);try{const i=await MA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await ul(t,i,e)}catch(i){await No(i)}}function vy(r,e,t){const i=Se(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Se(h);g.onlineState=m;let _=!1;g.queries.forEach(((E,T)=>{for(const R of T.ba)R.va(m)&&(_=!0)})),_&&Nf(g)})(i.eventManager,e),o.length&&i.Pu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function PR(r,e,t){const i=Se(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),u=o&&o.key;if(u){let h=new rt(ye.comparator);h=h.insert(u,zt.newNoDocument(u,we.min()));const m=Oe().add(u),g=new Ic(we.min(),new Map,new rt(De),h,m);await Kv(i,g),i.Ru=i.Ru.remove(u),i.Au.delete(e),Df(i)}else await Ud(i.localStore,e,!1).then((()=>zd(i,e,t))).catch(No)}async function kR(r,e){const t=Se(r),i=e.batch.batchId;try{const o=await LA(t.localStore,e);Yv(t,i,null),Qv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ul(t,o)}catch(o){await No(o)}}async function NR(r,e,t){const i=Se(r);try{const o=await(function(h,m){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,m).next((T=>(ze(T!==null,37113),E=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(i.localStore,e);Yv(i,e,t),Qv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ul(i,o)}catch(o){await No(o)}}function Qv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Yv(r,e,t){const i=Se(r);let o=i.du[i.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function zd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((i=>{r.Vu.containsKey(i)||Jv(r,i)}))}function Jv(r,e){r.Eu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(Af(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),Df(r))}function Ey(r,e,t){for(const i of t)i instanceof qv?(r.Vu.addReference(i.key,e),bR(r,i)):i instanceof Wv?(se(bf,"Document no longer in limbo: "+i.key),r.Vu.removeReference(i.key,e),r.Vu.containsKey(i.key)||Jv(r,i.key)):_e(19791,{wu:i})}function bR(r,e){const t=e.key,i=t.path.canonicalString();r.Ru.get(t)||r.Eu.has(i)||(se(bf,"New document in limbo: "+t),r.Eu.add(i),Df(r))}function Df(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new ye(nt.fromString(e)),i=r.fu.next();r.Au.set(i,new wR(t)),r.Ru=r.Ru.insert(t,i),Uv(r.remoteStore,new Es(ir(gf(t.path)),i,"TargetPurposeLimboResolution",mc.ce))}}async function ul(r,e,t){const i=Se(r),o=[],u=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((m,g)=>{h.push(i.pu(g,e,t).then((_=>{var E;if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=If.Es(g.targetId,_);u.push(T)}})))})),await Promise.all(h),i.Pu.J_(o),await(async function(g,_){const E=Se(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>H.forEach(_,(R=>H.forEach(R.Ts,(B=>E.persistence.referenceDelegate.addReference(T,R.targetId,B))).next((()=>H.forEach(R.Is,(B=>E.persistence.referenceDelegate.removeReference(T,R.targetId,B)))))))))}catch(T){if(!bo(T))throw T;se(Sf,"Failed to update sequence numbers: "+T)}for(const T of _){const R=T.targetId;if(!T.fromCache){const B=E.vs.get(R),q=B.snapshotVersion,$=B.withLastLimboFreeSnapshotVersion(q);E.vs=E.vs.insert(R,$)}}})(i.localStore,u))}async function DR(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){se(bf,"User change. New user:",e.toKey());const i=await Vv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((g=>{g.reject(new de(Y.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ul(t,i.Ns)}}function OR(r,e){const t=Se(r),i=t.Au.get(e);if(i&&i.hu)return Oe().add(i.key);{let o=Oe();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Xv(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PR.bind(null,e),e.Pu.J_=gR.bind(null,e.eventManager),e.Pu.yu=yR.bind(null,e.eventManager),e}function VR(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NR.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return VA(this.persistence,new bA,e.initialUser,this.serializer)}Cu(e){return new Ov(Tf.Vi,this.serializer)}Du(e){return new zA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class LR extends oc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof sc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new yA(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new Ov((i=>sc.Vi(i,t)),this.serializer)}}class $d{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>vy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=DR.bind(null,this.syncEngine),await hR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new fR})()}createDatastore(e){const t=Sc(e.databaseInfo.databaseId),i=GA(e.databaseInfo);return XA(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,u,h,m){return new eR(i,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>vy(this.syncEngine,t,0)),(function(){return fy.v()?new fy:new $A})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,E){const T=new TR(o,u,h,m,g,_);return E&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Se(o);se(yi,"RemoteStore shutting down."),u.Ea.add(5),await ll(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}$d.provider={build:()=>new $d};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="FirestoreClient";class FR{constructor(e,t,i,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(i,(async h=>{se(Ds,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(se(Ds,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=kf(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function fd(r,e){r.asyncQueue.verifyOperationInProgress(),se(Ds,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Vv(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function wy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await UR(r);se(Ds,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>my(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>my(e.remoteStore,o))),r._onlineComponents=e}async function UR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(Ds,"Using user provided OfflineComponentProvider");try{await fd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;gi("Error using user provided cache. Falling back to memory cache: "+t),await fd(r,new oc)}}else se(Ds,"Using default OfflineComponentProvider"),await fd(r,new LR(void 0));return r._offlineComponents}async function Zv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(Ds,"Using user provided OnlineComponentProvider"),await wy(r,r._uninitializedComponentsProvider._online)):(se(Ds,"Using default OnlineComponentProvider"),await wy(r,new $d))),r._onlineComponents}function jR(r){return Zv(r).then((e=>e.syncEngine))}async function BR(r){const e=await Zv(r),t=e.eventManager;return t.onListen=IR.bind(null,e.syncEngine),t.onUnlisten=RR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=CR.bind(null,e.syncEngine),t}function zR(r,e,t={}){const i=new Rs;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const E=new MR({next:R=>{E.Nu(),h.enqueueAndForget((()=>mR(u,T)));const B=R.docs.has(m);!B&&R.fromCache?_.reject(new de(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&R.fromCache&&g&&g.source==="server"?_.reject(new de(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(R)},error:R=>_.reject(R)}),T=new _R(gf(m.path),E,{includeMetadataChanges:!0,Ka:!0});return pR(u,T)})(await BR(r),r.asyncQueue,e,t,i))),i.promise}function $R(r,e){const t=new Rs;return r.asyncQueue.enqueueAndForget((async()=>xR(await jR(r),e,t))),t.promise}/**
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
 */const HR="ComponentProvider",Ty=new Map;function qR(r,e,t,i,o){return new o1(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,eE(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="firestore.googleapis.com",Iy=!0;class Sy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tE,this.ssl=Iy}else this.host=e.host,this.ssl=e.ssl??Iy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mA)throw new de(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eE(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new de(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new de(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new de(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Of{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new FS;switch(i.type){case"firstParty":return new zS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new de(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Ty.get(t);i&&(se(HR,"Removing Datastore"),Ty.delete(t),i.terminate())})(this),Promise.resolve()}}function WR(r,e,t,i={}){var _;r=qa(r,Of);const o=Co(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(Jy(`https://${m}`),Xy("Firestore",!0)),u.host!==tE&&u.host!==m&&gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:i};if(!di(g,h)&&(r._setSettings(g),i.mockUserToken)){let E,T;if(typeof i.mockUserToken=="string")E=i.mockUserToken,T=Bt.MOCK_USER;else{E=u0(i.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const R=i.mockUserToken.sub||i.mockUserToken.user_id;if(!R)throw new de(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Bt(R)}r._authCredentials=new US(new q_(E,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Vf(this.firestore,e,this._query)}}class Rt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Za(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(il(t,Rt._jsonSchema))return new Rt(e,i||null,new ye(nt.fromString(t.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:mt("string",Rt._jsonSchemaVersion),referencePath:mt("string")};class Za extends Vf{constructor(e,t,i){super(e,t,gf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new ye(e))}withConverter(e){return new Za(this.firestore,e,this._path)}}function GR(r,e,...t){if(r=On(r),arguments.length===1&&(e=uf.newId()),KS("doc","path",e),r instanceof Of){const i=nt.fromString(e,...t);return Fg(i),new Rt(r,null,new ye(i))}{if(!(r instanceof Rt||r instanceof Za))throw new de(Y.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(nt.fromString(e,...t));return Fg(i),new Rt(r.firestore,r instanceof Za?r.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="AsyncQueue";class Ry{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mv(this,"async_queue_retry"),this._c=()=>{const i=dd();i&&se(Ay,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=dd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=dd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Rs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bo(e))throw e;se(Ay,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Lr("INTERNAL UNHANDLED ERROR: ",Cy(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Pf.createAndSchedule(this,e,t,i,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:Cy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Cy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Lf extends Of{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Ry,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ry(e),this._firestoreClient=void 0,await e}}}function KR(r,e){const t=typeof r=="object"?r:n_(),i=typeof r=="string"?r:Xu,o=Zd(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const u=a0("firestore");u&&WR(o,...u)}return o}function nE(r){if(r._terminated)throw new de(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||QR(r),r._firestoreClient}function QR(r){var i,o,u,h;const e=r._freezeSettings(),t=qR(r._databaseId,((i=r._app)==null?void 0:i.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new FR(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Ot.fromBase64String(e))}catch(t){throw new de(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(il(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:mt("string",vn._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ar{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ar._jsonSchemaVersion}}static fromJSON(e){if(il(e,ar._jsonSchema))return new ar(e.latitude,e.longitude)}}ar._jsonSchemaVersion="firestore/geoPoint/1.0",ar._jsonSchema={type:mt("string",ar._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class Dn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let u=0;u<i.length;++u)if(i[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(il(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Dn(e.vectorValues);throw new de(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:mt("string",Dn._jsonSchemaVersion),vectorValues:mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=/^__.*__$/;class JR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ei(e,this.data,this.fieldMask,t,this.fieldTransforms):new ol(e,this.data,t,this.fieldTransforms)}}function sE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:r})}}class Ff{constructor(e,t,i,o,u,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ff({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ac(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(sE(this.dataSource)&&YR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class XR{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Sc(e)}createContext(e,t,i,o=!1){return new Ff({dataSource:e,methodName:t,targetDoc:i,path:Dt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZR(r){const e=r._freezeSettings(),t=Sc(r._databaseId);return new XR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function eC(r,e,t,i,o,u={}){const h=r.createContext(u.merge||u.mergeFields?2:0,e,t,o);lE("Data must be an object, but it was:",h,i);const m=oE(i,h);let g,_;if(u.merge)g=new bn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const T of u.mergeFields){const R=jf(e,T,t);if(!h.contains(R))throw new de(Y.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);rC(E,R)||E.push(R)}g=new bn(E),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new JR(new _n(m),g,_)}class Uf extends Mf{_toFieldTransform(e){return new V1(e.path,new Ya)}isEqual(e){return e instanceof Uf}}function iE(r,e){if(aE(r=On(r)))return lE("Unsupported field value:",e,r),oE(r,e);if(r instanceof Mf)return(function(i,o){if(!sE(o.dataSource))throw o.createError(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${i._methodName}() is not currently supported inside arrays`);const u=i._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(i,o){const u=[];let h=0;for(const m of i){let g=iE(m,o.childContextForArray(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(i,o){if((i=On(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return b1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const u=Xe.fromDate(i);return{timestampValue:rc(o.serializer,u)}}if(i instanceof Xe){const u=new Xe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:rc(o.serializer,u)}}if(i instanceof ar)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof vn)return{bytesValue:Av(o.serializer,i._byteString)};if(i instanceof Rt){const u=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(u))throw o.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Ef(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Dn)return(function(h,m){const g=h instanceof Dn?h.toArray():h;return{mapValue:{fields:{[ev]:{stringValue:tv},[Zu]:{arrayValue:{values:g.map((E=>{if(typeof E!="number")throw m.createError("VectorValues must only contain numeric values.");return yf(m.serializer,E)}))}}}}}})(i,o);if(bv(i))return i._toProto(o.serializer);throw o.createError(`Unsupported field value: ${cf(i)}`)})(r,e)}function oE(r,e){const t={};return K_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(r,((i,o)=>{const u=iE(o,e.childContextForField(i));u!=null&&(t[i]=u)})),{mapValue:{fields:t}}}function aE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Xe||r instanceof ar||r instanceof vn||r instanceof Rt||r instanceof Mf||r instanceof Dn||bv(r))}function lE(r,e,t){if(!aE(t)||!W_(t)){const i=cf(t);throw i==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+i)}}function jf(r,e,t){if((e=On(e))instanceof rE)return e._internalPath;if(typeof e=="string")return nC(r,e);throw ac("Field path arguments must be of type string or ",r,!1,void 0,t)}const tC=new RegExp("[~\\*/\\[\\]]");function nC(r,e,t){if(e.search(tC)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new rE(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ac(r,e,t,i,o){const u=i&&!i.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new de(Y.INVALID_ARGUMENT,m+r+g)}function rC(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{convertValue(e,t="none"){switch(Ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ks(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return _i(e,((o,u)=>{i[o]=this.convertValue(u,t)})),i}convertVectorValue(e){var i,o,u;const t=(u=(o=(i=e.fields)==null?void 0:i[Zu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>ct(h.doubleValue)));return new Dn(t)}convertGeoPoint(e){return new ar(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=yc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const t=Ps(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=nt.fromString(e);ze(Nv(i),9688,{name:e});const o=new Ka(i.get(1),i.get(3)),u=new ye(i.popFirst(5));return o.isEqual(t)||Lr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class iC extends sC{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,t)}}function uE(){return new Uf("serverTimestamp")}const xy="@firebase/firestore",Py="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t,i,o,u){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(jf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oC extends cE{data(){return super.data()}}function aC(r,e,t){let i;return i=r?r.toFirestore(e):e,i}class Oa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hi extends cE{constructor(e,t,i,o,u,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(jf("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",hi._jsonSchema={type:mt("string",hi._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class zu extends hi{data(e={}){return super.data(e)}}class za{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Oa(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new zu(this._firestore,this._userDataWriter,i.key,i,new Oa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new zu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new zu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Oa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:lC(m.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=za._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),i.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}/**
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
 */za._jsonSchemaVersion="firestore/querySnapshot/1.0",za._jsonSchema={type:mt("string",za._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(r){r=qa(r,Rt);const e=qa(r.firestore,Lf),t=nE(e);return zR(t,r._key).then((i=>hC(e,r,i)))}function hE(r,e,t){r=qa(r,Rt);const i=qa(r.firestore,Lf),o=aC(r.converter,e),u=ZR(i);return cC(i,[eC(u,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,br.none())])}function cC(r,e){const t=nE(r);return $R(t,e)}function hC(r,e,t){const i=t.docs.get(e._key),o=new iC(r);return new hi(r,o,e._key,i,new Oa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){MS(xo),wo(new fi("firestore",((i,{instanceIdentifier:o,options:u})=>{const h=i.getProvider("app").getImmediate(),m=new Lf(new jS(i.getProvider("auth-internal")),new $S(h,i.getProvider("app-check-internal")),a1(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Is(xy,Py,e),Is(xy,Py,"esm2020")})();const dC=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"];function fC(r){return dC.filter(e=>!r[e])}function pC(r){const e=fC(r);if(e.length>0)throw new Error(`Missing required Firebase environment variables: ${e.join(", ")}. Ensure variables are set in .env.local (local dev) or GitHub Secrets (CI/CD).`)}const mC={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",VITE_FIREBASE_APP_ID:"1:662195056281:web:9a116d842188f7e7599208",VITE_FIREBASE_AUTH_DOMAIN:"math-trainer-1a632.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"662195056281",VITE_FIREBASE_PROJECT_ID:"math-trainer-1a632",VITE_FIREBASE_STORAGE_BUCKET:"math-trainer-1a632.firebasestorage.app"};pC(mC);const gC={apiKey:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",authDomain:"math-trainer-1a632.firebaseapp.com",projectId:"math-trainer-1a632",storageBucket:"math-trainer-1a632.firebasestorage.app",messagingSenderId:"662195056281",appId:"1:662195056281:web:9a116d842188f7e7599208"};let pd,lc,dE;try{pd=t_(gC),lc=DS(pd),dE=KR(pd)}catch(r){throw new Error(`Firebase initialization failed: ${r.message}. Check that your Firebase configuration values are correct.`)}function yC(){const[r,e]=K.useState(null),[t,i]=K.useState(!0),[o,u]=K.useState(null),h=K.useCallback(async()=>{try{u(null),await R_(lc)}catch(m){console.error("Anonymous sign-in failed:",m.message),u(m)}},[]);return K.useEffect(()=>{const m=TI(lc,g=>{g?(e(g),i(!1),console.log("User authenticated with ID:",g.uid)):(e(null),h())},g=>{console.error("Auth state change error:",g.message),u(g),i(!1)});return()=>m()},[h]),{user:r,loading:t,error:o}}const Nr={score:0,streak:0,currentStreak:0,totalProblems:0,correctAnswers:0,lastPlayed:null};function Bf(r){return GR(dE,"users",r,"progress","gameData")}async function ky(r,e){if(!r)return console.error("saveProgress: userId is required"),!1;try{const t=Bf(r);return await hE(t,{...e,lastPlayed:uE()}),console.log("Progress saved successfully for user:",r.substring(0,8)),!0}catch(t){throw console.error("Failed to save progress:",t.message),t}}async function _C(r){var e;if(!r)return console.error("loadProgress: userId is required"),Nr;try{const t=Bf(r),i=await uC(t);if(i.exists()){const o=i.data();return console.log("Progress loaded for user:",r.substring(0,8)),{...Nr,...o,lastPlayed:((e=o.lastPlayed)==null?void 0:e.toDate())||null}}else return console.log("No progress found for user, returning defaults:",r.substring(0,8)),Nr}catch(t){return console.error("Failed to load progress:",t.message),Nr}}async function vC(r){if(!r)return console.error("resetProgress: userId is required"),!1;try{const e=Bf(r);return await hE(e,{...Nr,lastPlayed:uE()}),console.log("Progress reset for user:",r.substring(0,8)),!0}catch(e){throw console.error("Failed to reset progress:",e.message),e}}const EC=2e3;function wC(r){const[e,t]=K.useState(Nr),[i,o]=K.useState(!0),[u,h]=K.useState(!1),[m,g]=K.useState(null),_=K.useRef(!1),E=K.useRef(null),T=K.useRef(!0);K.useEffect(()=>{if(!r){o(!1);return}let z=!1;async function ae(){try{o(!0),g(null);const ue=await _C(r);!z&&T.current&&(t(ue),_.current=!0)}catch(ue){!z&&T.current&&(console.error("useGameProgress: Failed to load progress",ue),g(ue),t(Nr),_.current=!0)}finally{!z&&T.current&&o(!1)}}return ae(),()=>{z=!0}},[r]),K.useEffect(()=>(T.current=!0,()=>{T.current=!1,E.current&&clearTimeout(E.current)}),[]);const R=K.useCallback(z=>{!r||!_.current||(E.current&&clearTimeout(E.current),E.current=setTimeout(async()=>{if(T.current)try{h(!0),await ky(r,z),T.current&&g(null)}catch(ae){console.error("useGameProgress: Failed to save progress",ae),T.current&&g(ae)}finally{T.current&&h(!1)}},EC))},[r]),B=K.useCallback(z=>{t(ae=>{const ue={...ae,...z};return R(ue),ue})},[R]),q=K.useCallback(async()=>{if(!r)return t(Nr),!0;try{return h(!0),g(null),await vC(r),T.current&&t(Nr),!0}catch(z){return console.error("useGameProgress: Failed to reset progress",z),T.current&&g(z),!1}finally{T.current&&h(!1)}},[r]),$=K.useCallback(async()=>{if(!r||!_.current)return!1;E.current&&clearTimeout(E.current);try{return h(!0),await ky(r,e),T.current&&g(null),!0}catch(z){return console.error("useGameProgress: Failed to force save",z),T.current&&g(z),!1}finally{T.current&&h(!1)}},[r,e]);return{progress:e,updateProgress:B,resetProgress:q,forceSave:$,loading:i,saving:u,error:m}}const md=[{id:1,name:"First Steps",operators:["+"],minNumber:1,maxNumber:5,ageTarget:"5-6"},{id:2,name:"Addition Hero",operators:["+"],minNumber:1,maxNumber:10,ageTarget:"6"},{id:3,name:"Minus Magic",operators:["-"],minNumber:1,maxNumber:10,ageTarget:"6-7"},{id:4,name:"Mixed Warrior",operators:["+","-"],minNumber:1,maxNumber:10,ageTarget:"7"},{id:5,name:"Cross the 10",operators:["+"],minNumber:1,maxNumber:20,ageTarget:"7"},{id:6,name:"Subtract 20",operators:["-"],minNumber:1,maxNumber:20,ageTarget:"7-8"},{id:7,name:"Mixed 20",operators:["+","-"],minNumber:1,maxNumber:20,ageTarget:"8"},{id:8,name:"Tens Master",operators:["+","-"],minNumber:10,maxNumber:100,ageTarget:"8-9",multiplesOf:10},{id:9,name:"Century Runner",operators:["+","-"],minNumber:1,maxNumber:100,ageTarget:"9"},{id:10,name:"Speed of 2s",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"9-10",multipliers:[2,5,10]},{id:11,name:"Times Tables",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"10-11",multipliers:[3,4,6,7,8,9]},{id:12,name:"Division Quest",operators:["/"],minNumber:2,maxNumber:10,ageTarget:"11-12",divisors:[2,5,10]},{id:13,name:"Math Champion",operators:["+","-","*","/"],minNumber:1,maxNumber:100,ageTarget:"12-13"}];function Hd(r){if(r<1||r>md.length)throw new Error(`Invalid level: ${r}. Must be 1-${md.length}`);return md[r-1]}const qd={NUM_OPTIONS:4,WRONG_ANSWER_RANGE:3},TC=Hd(2);function tr(r,e){return Math.floor(Math.random()*(e-r+1))+r}function bu(r,e,t){const i=Math.ceil(r/t)*t,o=[];for(let u=i;u<=e;u+=t)o.push(u);return o[tr(0,o.length-1)]}function fE(r){const e=[...r];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function IC(r,e,t){t===void 0&&(t=r+20);const i=new Set,o=0,u=[];for(let g=-3;g<=qd.WRONG_ANSWER_RANGE;g++){if(g===0)continue;const _=r+g;_>=o&&_<=t&&u.push(_)}const h=fE(u);for(const g of h){if(i.size>=e)break;i.add(g)}let m=qd.WRONG_ANSWER_RANGE+1;for(;i.size<e;){const g=r+m,_=r-m;if(g<=t&&!i.has(g)&&i.add(g),i.size<e&&_>=o&&!i.has(_)&&i.add(_),m++,m>t)break}return Array.from(i).slice(0,e)}function Ny(r=TC){const{operators:e,minNumber:t,maxNumber:i,multiplesOf:o,multipliers:u,divisors:h}=r,m=e[tr(0,e.length-1)];let g,_,E,T;if(m==="+")g=o?bu(t,i,o):tr(t,i),_=o?bu(t,i,o):tr(t,i),E=g+_,T=i*2;else if(m==="-")g=o?bu(t,i,o):tr(t,i),_=o?bu(t,g,o):tr(t,g),g<_&&([g,_]=[_,g]),E=g-_,T=i;else if(m==="*"){const q=u||[2,3,4,5,6,7,8,9,10];g=q[tr(0,q.length-1)],_=tr(1,10),E=g*_,T=Math.max(...q)*10}else{const q=h||[2,3,4,5];_=q[tr(0,q.length-1)];const $=tr(1,10);g=_*$,E=$,T=Math.max(...q)*10}const R=IC(E,qd.NUM_OPTIONS-1,T),B=fE([E,...R]);return{num1:g,num2:_,operator:m,correctAnswer:E,options:B}}function SC(r,e){return r===e}const AC=8,RC=-12,CC=3,xC=-8,PC=3e3,kC=1e4,NC=1.3,bC=1.6,DC=35,OC=20,VC=5,LC=85,MC=3,FC=50,pE="RECORD_ANSWER",mE="ACKNOWLEDGE_LEVEL_UP",gE="RESET";function Wd(r){return Math.min(100,Math.max(0,Math.round(r)))}function UC(r){let e=AC;return r<PC&&(e+=CC),e}function jC(r){return r>kC?xC:RC}function BC(r,e){return e>=5?r*bC:e>=2?r*NC:r}function yE(r){return{score:Wd(r??FC),streak:0,consecutiveWrong:0,shouldLevelUp:!1,lastDelta:0}}function zC(r,e){switch(e.type){case pE:{const{isCorrect:t,responseTimeMs:i}=e.payload;if(t){const m=r.streak+1,g=UC(i),_=BC(g,m),E=Math.round(_),T=Wd(r.score+E),R=T>=LC&&m>=MC;return{score:T,streak:m,consecutiveWrong:0,shouldLevelUp:r.shouldLevelUp||R,lastDelta:E}}const o=jC(i),u=Wd(r.score+o),h=r.consecutiveWrong+1;return{score:u,streak:0,consecutiveWrong:h,shouldLevelUp:r.shouldLevelUp,lastDelta:o}}case mE:return{...r,shouldLevelUp:!1};case gE:return yE(e.payload);default:return r}}function $C(r){const[e,t]=K.useReducer(zC,r,yE),i=K.useCallback((g,_)=>{t({type:pE,payload:{isCorrect:g,responseTimeMs:_}})},[]),o=K.useCallback(()=>{t({type:mE})},[]),u=K.useCallback(g=>{t({type:gE,payload:g})},[]),h=e.score<DC,m=e.score<OC&&e.consecutiveWrong>=VC;return{score:e.score,streak:e.streak,consecutiveWrong:e.consecutiveWrong,isStruggling:h,isCritical:m,shouldLevelUp:e.shouldLevelUp,lastDelta:e.lastDelta,recordAnswer:i,acknowledgeLevelUp:o,reset:u}}const HC=2e3,qC=10,gd={isPlaying:!1,currentProblem:null,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0,bestStreak:0,totalProblems:0,correctAnswers:0};function WC({currentLevel:r=2,updateProgress:e,initialProgress:t}={}){const i=$C(),[o,u]=K.useState(()=>({...gd,score:(t==null?void 0:t.score)??0,bestStreak:(t==null?void 0:t.streak)??0,totalProblems:(t==null?void 0:t.totalProblems)??0,correctAnswers:(t==null?void 0:t.correctAnswers)??0})),h=K.useRef(null),m=K.useRef(!0),g=K.useRef(null);K.useEffect(()=>(m.current=!0,()=>{m.current=!1,h.current&&clearTimeout(h.current)}),[]),K.useEffect(()=>{t&&!o.isPlaying&&u($=>({...$,score:t.score??$.score,bestStreak:t.streak??$.bestStreak,totalProblems:t.totalProblems??$.totalProblems,correctAnswers:t.correctAnswers??$.correctAnswers}))},[t,o.isPlaying]);const _=K.useCallback(()=>{const $=Ny(Hd(r));i.reset(),g.current=Date.now(),u(z=>({...z,isPlaying:!0,currentProblem:$,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0}))},[r,i]),E=K.useCallback(()=>{if(!m.current)return;const $=Ny(Hd(r));g.current=Date.now(),u(z=>({...z,currentProblem:$,userAnswer:null,showFeedback:!1,isCorrect:!1}))},[r]),T=K.useCallback($=>{const z=o;if(!z.isPlaying||!z.currentProblem||z.showFeedback)return;const ae=SC($,z.currentProblem.correctAnswer),ue=Date.now()-g.current;i.recordAnswer(ae,ue),u(ne=>{const pe=ae?ne.score+qC:ne.score,Ce=ae?ne.streak+1:0,Te=Math.max(ne.bestStreak,Ce),k=ne.totalProblems+1,A=ae?ne.correctAnswers+1:ne.correctAnswers;return e&&e({score:pe,streak:Te,currentStreak:Ce,totalProblems:k,correctAnswers:A}),{...ne,userAnswer:$,showFeedback:!0,isCorrect:ae,score:pe,streak:Ce,bestStreak:Te,totalProblems:k,correctAnswers:A}}),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{m.current&&E()},HC)},[o,e,E,i]),R=K.useCallback(()=>{h.current&&clearTimeout(h.current),i.reset(),u($=>({...gd,score:$.score,bestStreak:$.bestStreak,totalProblems:$.totalProblems,correctAnswers:$.correctAnswers}))},[i]),B=K.useCallback(()=>{h.current&&clearTimeout(h.current),i.reset(),u(gd)},[i]),q=K.useCallback(()=>o.totalProblems===0?0:Math.round(o.correctAnswers/o.totalProblems*100),[o.totalProblems,o.correctAnswers]);return{gameState:o,currentProblem:o.currentProblem,userAnswer:o.userAnswer,score:o.score,streak:i.streak,bestStreak:o.bestStreak,isPlaying:o.isPlaying,showFeedback:o.showFeedback,isCorrect:o.isCorrect,totalProblems:o.totalProblems,correctAnswers:o.correctAnswers,confidenceScore:i.score,isStruggling:i.isStruggling,isCritical:i.isCritical,shouldLevelUp:i.shouldLevelUp,lastDelta:i.lastDelta,consecutiveWrong:i.consecutiveWrong,acknowledgeLevelUp:i.acknowledgeLevelUp,handleAnswer:T,startGame:_,nextProblem:E,resetGame:R,fullReset:B,accuracy:q()}}var yd={exports:{}},_d,by;function GC(){if(by)return _d;by=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return _d=r,_d}var vd,Dy;function KC(){if(Dy)return vd;Dy=1;var r=GC();function e(){}function t(){}return t.resetWarningCache=e,vd=function(){function i(h,m,g,_,E,T){if(T!==r){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}i.isRequired=i;function o(){return i}var u={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return u.PropTypes=u,u},vd}var Oy;function QC(){return Oy||(Oy=1,yd.exports=KC()()),yd.exports}var YC=QC();const Z=Qd(YC);function _E({num1:r,num2:e,operator:t}){return x.jsx("section",{className:"bg-sonic-blue rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md mx-auto","aria-label":"Math Problem",children:x.jsx("div",{className:"text-center",children:x.jsxs("p",{className:`text-4xl md:text-6xl font-game text-white tracking-wide
                     drop-shadow-md select-none`,"aria-live":"polite","aria-atomic":"true",children:[x.jsx("span",{className:"inline-block mx-2",children:r}),x.jsx("span",{className:"inline-block mx-2 text-sonic-gold",children:t}),x.jsx("span",{className:"inline-block mx-2",children:e}),x.jsx("span",{className:"inline-block mx-2",children:"="}),x.jsx("span",{className:"inline-block mx-2 text-sonic-gold animate-pulse",children:"?"})]})})})}_E.propTypes={num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.string.isRequired};function vE({options:r,onAnswer:e,disabled:t=!1}){const i=u=>{t||e(u)},o=(u,h)=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),i(h))};return x.jsx("div",{className:"grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto mt-6",role:"group","aria-label":"Answer Options",children:r.map((u,h)=>x.jsx("button",{onClick:()=>i(u),onKeyDown:m=>o(m,u),disabled:t,className:`
            bg-sonic-gold text-sonic-blue font-game
            text-3xl md:text-4xl
            py-6 md:py-8 px-4
            rounded-xl shadow-lg
            transform transition-all duration-200
            select-none
            ${t?"opacity-50 cursor-not-allowed":`hover:bg-yellow-400 hover:scale-105
                   active:scale-95 active:bg-yellow-500
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`}
          `,"aria-label":`Answer: ${u}`,children:u},`answer-${h}-${u}`))})}vE.propTypes={options:Z.arrayOf(Z.number).isRequired,onAnswer:Z.func.isRequired,disabled:Z.bool};function EE({score:r,streak:e}){const i=e>=10?{emoji:"🔥",label:"On Fire!"}:e>=5?{emoji:"⚡",label:"Lightning!"}:e>=3?{emoji:"🦔",label:"Speedy!"}:{emoji:"⭐",label:"Keep going!"};return x.jsxs("div",{className:`flex justify-between items-center w-full max-w-md mx-auto
                 bg-black/30 rounded-xl p-4 md:p-5`,role:"status","aria-label":`Score: ${r}, Streak: ${e}`,children:[x.jsxs("div",{className:"text-center flex-1",children:[x.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Score"}),x.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                     transition-all duration-300`,"aria-live":"polite",children:r})]}),x.jsx("div",{className:"w-px h-12 bg-white/20 mx-4","aria-hidden":"true"}),x.jsxs("div",{className:"text-center flex-1",children:[x.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Streak"}),x.jsxs("div",{className:"flex items-center justify-center gap-2",children:[x.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                       transition-all duration-300
                       ${e>0?"animate-bounce":""}`,"aria-live":"polite",children:e}),e>0&&x.jsx("span",{className:"text-2xl md:text-3xl transition-transform duration-300","aria-label":i.label,role:"img",children:i.emoji})]})]})]})}EE.propTypes={score:Z.number.isRequired,streak:Z.number.isRequired};const JC=[{text:"Sonic Speed!",emoji:"🦔💨"},{text:"Amazing!",emoji:"⭐"},{text:"Perfect!",emoji:"🎯"},{text:"Great Job!",emoji:"🎉"},{text:"You're on Fire!",emoji:"🔥"},{text:"Super Star!",emoji:"🌟"},{text:"Awesome!",emoji:"✨"},{text:"Incredible!",emoji:"💫"}],XC=[{text:"Try Again!",emoji:"💪"},{text:"Almost There!",emoji:"🎈"},{text:"Keep Going!",emoji:"🚀"},{text:"You've Got This!",emoji:"👍"},{text:"So Close!",emoji:"🌈"},{text:"One More Try!",emoji:"🎮"}],Vy=200,Ly=1500,ZC=200;function wE({isCorrect:r,onComplete:e=null}){const[t,i]=K.useState(!1),[o,u]=K.useState(!1),[h,m]=K.useState({text:"",emoji:""}),g=K.useCallback(()=>{const _=r?JC:XC,E=Math.floor(Math.random()*_.length);return _[E]},[r]);return K.useEffect(()=>{m(g()),i(!0),u(!1);const _=setTimeout(()=>{u(!0)},Vy+Ly),E=setTimeout(()=>{i(!1),e&&e()},Vy+Ly+ZC);return()=>{clearTimeout(_),clearTimeout(E)}},[r,e,g]),t?x.jsx("div",{className:`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        transition-opacity duration-200
        ${o?"opacity-0":"opacity-100"}
      `,"aria-live":"polite",role:"status",children:x.jsxs("div",{className:`
          flex flex-col items-center justify-center
          p-8 rounded-3xl
          ${r?"bg-gradient-to-br from-green-500 to-emerald-600 animate-feedback-correct":"bg-gradient-to-br from-orange-400 to-amber-500 animate-feedback-wrong"}
          shadow-2xl
          transform
          ${o?"scale-90 opacity-0":"scale-100 opacity-100"}
          transition-all duration-200
        `,children:[x.jsx("div",{className:`text-6xl md:text-7xl mb-4 ${r?"animate-bounce-custom":"animate-shake"}`,children:r?"✅":"🔄"}),x.jsx("h2",{className:`
            text-3xl md:text-4xl font-game text-white text-center
            drop-shadow-lg
            ${r?"animate-pulse-scale":""}
          `,children:h.text}),x.jsx("span",{className:"text-4xl md:text-5xl mt-3 animate-bounce",children:h.emoji}),r&&x.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden rounded-3xl",children:[x.jsx("div",{className:"sparkle sparkle-1",children:"✨"}),x.jsx("div",{className:"sparkle sparkle-2",children:"⭐"}),x.jsx("div",{className:"sparkle sparkle-3",children:"💫"}),x.jsx("div",{className:"sparkle sparkle-4",children:"🌟"}),x.jsx("div",{className:"sparkle sparkle-5",children:"✨"}),x.jsx("div",{className:"sparkle sparkle-6",children:"⭐"})]})]})}):null}wE.propTypes={isCorrect:Z.bool.isRequired,onComplete:Z.func};const ex=5;function TE({color:r,faded:e,index:t,testId:i}){return x.jsx("span",{className:`
        inline-block rounded-full
        w-6 h-6 md:w-7 md:h-7
        ${r}
        ${e?"opacity-50":""}
        animate-aid-enter motion-reduce:animate-none
      `,style:{animationDelay:`${t*60}ms`,animationFillMode:"both"},"aria-hidden":"true","data-testid":i})}TE.propTypes={color:Z.string.isRequired,faded:Z.bool.isRequired,index:Z.number.isRequired,testId:Z.string.isRequired};function Va({count:r,color:e,faded:t,startIndex:i,testIdPrefix:o}){return x.jsx("div",{className:"grid gap-2",style:{gridTemplateColumns:`repeat(${ex}, auto)`},"data-testid":`${o}-group`,children:Array.from({length:r}).map((u,h)=>x.jsx(TE,{color:e,faded:t,index:i+h,testId:`${o}-dot-${h}`},h))})}Va.propTypes={count:Z.number.isRequired,color:Z.string.isRequired,faded:Z.bool.isRequired,startIndex:Z.number.isRequired,testIdPrefix:Z.string.isRequired};function IE({num1:r,num2:e,operator:t}){if(t==="+")return x.jsxs("div",{className:"flex flex-wrap items-center gap-3",role:"img","aria-label":`${r} blue dots plus ${e} gold dots`,"data-testid":"dot-counter",children:[x.jsx(Va,{count:r,color:"bg-sonic-blue",faded:!1,startIndex:0,testIdPrefix:"num1"}),x.jsx("span",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md select-none","aria-hidden":"true","data-testid":"operator-label",children:"+"}),x.jsx(Va,{count:e,color:"bg-sonic-gold",faded:!1,startIndex:r,testIdPrefix:"num2"})]});const i=r-e;return x.jsxs("div",{className:"flex flex-wrap items-center gap-3",role:"img","aria-label":`${r} blue dots minus ${e} faded dots`,"data-testid":"dot-counter",children:[x.jsx(Va,{count:i,color:"bg-sonic-blue",faded:!1,startIndex:0,testIdPrefix:"solid"}),x.jsx("span",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md select-none","aria-hidden":"true","data-testid":"operator-label",children:"-"}),x.jsx(Va,{count:e,color:"bg-sonic-blue",faded:!0,startIndex:i,testIdPrefix:"faded"})]})}IE.propTypes={num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.oneOf(["+","-"]).isRequired};Z.number.isRequired,Z.number.isRequired;Z.number.isRequired,Z.number.isRequired;Z.number.isRequired,Z.number.isRequired,Z.number.isRequired;Z.number.isRequired,Z.number.isRequired,Z.oneOf(["+","-"]).isRequired,Z.number.isRequired,Z.number.isRequired;Z.number.isRequired,Z.number.isRequired,Z.oneOf(["+","-"]).isRequired,Z.number.isRequired,Z.number.isRequired;Z.number.isRequired,Z.number.isRequired,Z.oneOf(["+","-"]).isRequired;const Ke={BRIDGING_ADD:"bridging_add",BRIDGING_SUB:"bridging_sub",DOUBLES:"doubles",NEAR_DOUBLES:"near_doubles",COUNT_ON:"count_on",COUNT_BACK:"count_back"},Zn={[Ke.BRIDGING_ADD]:"Bridge to 10",[Ke.BRIDGING_SUB]:"Bridge to 10",[Ke.DOUBLES]:"Use Doubles",[Ke.NEAR_DOUBLES]:"Near Doubles",[Ke.COUNT_ON]:"Count On",[Ke.COUNT_BACK]:"Count Back"},er={bridging_add:(r,e)=>{let t,i;r>=e?(t=r,i=e):(t=e,i=r);const o=10-t%10,u=i-o,h=t+o;return[`Make ${h}: ${t}+${o}=${h}`,`Left over: ${i}-${o}=${u}`,`Add: ${h}+${u}=?`]},bridging_sub:(r,e)=>{const t=r%10,i=r-t,o=e-t;return[`Go to ${i}: ${r}-${t}=${i}`,`Left: ${e}-${t}=${o}`,`Take away: ${i}-${o}=?`]},doubles_add:r=>["It's a double!",`Think: ${r}+${r}=?`],doubles_sub:r=>[`Half of ${r} is ?`,`${r}-?=?`],near_doubles_add:(r,e)=>{const t=Math.min(r,e),i=t+t;return[`Double ${t}: ${t}+${t}=${i}`,`Add 1 more: ${i}+1=?`]},near_doubles_sub:(r,e)=>{const t=Math.floor(r/2),i=r%2===0?"":"~";return[`Half of ${r} is ${i}${t}`,`Adjust by 1: ${r}-${e}=?`]},count_on:(r,e)=>{const t=Math.max(r,e),i=Math.min(r,e);if(i<=3){const o=[];for(let h=1;h<i;h++)o.push(t+h);const u=o.length>0?`${o.join(",")},?`:"?";return[`Start at ${t}`,`Count up ${i}: ${u}`,"You land on ?"]}return[`Start at ${t}`,`Count up ${i} more`,"You land on ?"]},count_back:(r,e)=>{if(e<=3){const t=[];for(let o=1;o<e;o++)t.push(r-o);const i=t.length>0?`${t.join(",")},?`:"?";return[`Start at ${r}`,`Count back ${e}: ${i}`,"You land on ?"]}return[`Start at ${r}`,`Count back ${e} steps`,"You land on ?"]}};function tx(r,e){return r%10+e%10>10}function nx(r,e){const t=r%10;return t>0&&t<e}function My(r,e){return r===e}function Fy(r,e){return Math.abs(r-e)===1}function rx(r,e){return Math.min(r,e)<=3}function sx(r){return r<=3}function ix(r,e,t){if(t!=="+"&&t!=="-")return[];const i=[];return t==="+"?(My(r,e)&&i.push({id:Ke.DOUBLES,name:Zn[Ke.DOUBLES],steps:er.doubles_add(r)}),Fy(r,e)&&i.push({id:Ke.NEAR_DOUBLES,name:Zn[Ke.NEAR_DOUBLES],steps:er.near_doubles_add(r,e)}),tx(r,e)&&i.push({id:Ke.BRIDGING_ADD,name:Zn[Ke.BRIDGING_ADD],steps:er.bridging_add(r,e)}),rx(r,e)?i.push({id:Ke.COUNT_ON,name:Zn[Ke.COUNT_ON],steps:er.count_on(r,e)}):i.length===0&&i.push({id:Ke.COUNT_ON,name:Zn[Ke.COUNT_ON],steps:er.count_on(r,e)})):(My(r,e)&&i.push({id:Ke.DOUBLES,name:Zn[Ke.DOUBLES],steps:er.doubles_sub(r)}),Fy(r,e)&&i.push({id:Ke.NEAR_DOUBLES,name:Zn[Ke.NEAR_DOUBLES],steps:er.near_doubles_sub(r,e)}),nx(r,e)&&i.push({id:Ke.BRIDGING_SUB,name:Zn[Ke.BRIDGING_SUB],steps:er.bridging_sub(r,e)}),sx(e)?i.push({id:Ke.COUNT_BACK,name:Zn[Ke.COUNT_BACK],steps:er.count_back(r,e)}):i.length===0&&i.push({id:Ke.COUNT_BACK,name:Zn[Ke.COUNT_BACK],steps:er.count_back(r,e)})),i}function zf({num1:r,num2:e,operator:t}){const[i,o]=K.useState(0);K.useEffect(()=>{o(0)},[r,e,t]);const u=ix(r,e,t);if(u.length===0)return null;const h=i<u.length?i:0,m=u[h],g=u.length>1;function _(){o(E=>(E+1)%u.length)}return x.jsxs("div",{className:"flex max-h-[160px] flex-col gap-2 overflow-y-auto text-start",role:"region","aria-label":`Strategy hint for ${r} ${t} ${e}`,"data-testid":"strategy-hint",children:[x.jsxs("div",{"aria-live":"polite",children:[x.jsx("p",{className:"text-sonic-gold font-game text-base font-bold",children:m.name}),x.jsx("ol",{className:"mt-1 flex list-none flex-col gap-1 ps-0",children:m.steps.map((E,T)=>x.jsxs("li",{className:"flex items-center gap-2 text-sm text-white animate-step-fade motion-reduce:animate-none",style:{animationDelay:`${T*80}ms`},children:[x.jsx("span",{className:"flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sonic-gold/30 text-xs font-bold text-white","aria-hidden":"true",children:T+1}),x.jsx("span",{children:E})]},T))})]}),x.jsxs("div",{className:"mt-1 flex items-center justify-between",children:[x.jsxs("span",{className:"text-xs text-white/60",children:["Strategy ",h+1," of ",u.length]}),g&&x.jsx("button",{type:"button",className:"min-h-[44px] rounded-lg bg-white/15 px-3 py-2 text-sm text-white transition-colors hover:bg-white/25 motion-reduce:transition-none",onClick:_,"aria-label":"Show me another way to solve this problem",children:"Show me another way"})]})]})}zf.propTypes={num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.oneOf(["+","-"]).isRequired};const Uy=4;function ox(r){return r>=1&&r<=Uy?IE:r>=Uy+1?zf:null}function SE({isStruggling:r,currentLevel:e,num1:t,num2:i,operator:o}){const[u,h]=K.useState(!1);if(!r||u)return null;const m=ox(e);if(!m)return null;const g=m===zf?"max-h-[160px]":"max-h-[120px]";return x.jsxs("div",{className:`
        ${g} overflow-hidden
        bg-black/20 backdrop-blur-sm rounded-2xl p-3
        animate-aid-enter motion-reduce:animate-none
      `,"data-testid":"learning-aid-container",children:[x.jsx(m,{num1:t,num2:i,operator:o}),x.jsx("button",{type:"button",onClick:()=>h(!0),className:`
          mt-2 w-full min-h-[44px]
          bg-sonic-gold hover:bg-yellow-400
          text-black font-game text-base
          rounded-xl shadow-md
          transform transition-all duration-200
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-yellow-300
        `,"aria-label":"Dismiss learning aid","data-testid":"dismiss-aid-button",children:"I got it!"})]})}SE.propTypes={isStruggling:Z.bool.isRequired,currentLevel:Z.number.isRequired,num1:Z.number.isRequired,num2:Z.number.isRequired,operator:Z.oneOf(["+","-","*","/"]).isRequired};function AE({onGameEnd:r,updateProgress:e=null,initialProgress:t=null}){const{currentProblem:i,score:o,streak:u,bestStreak:h,showFeedback:m,isCorrect:g,handleAnswer:_,startGame:E,isPlaying:T,totalProblems:R,correctAnswers:B,accuracy:q,isStruggling:$}=WC({updateProgress:e,initialProgress:t});if(!T)return E(),null;if(!i)return x.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex items-center justify-center",children:x.jsx("p",{className:"text-white font-game text-2xl",children:"Loading..."})});const z=()=>{r&&r({score:o,streak:h,totalProblems:R,correctAnswers:B,accuracy:q})};return x.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col p-4 md:p-6 relative",children:[x.jsxs("header",{className:"flex justify-between items-start gap-4 mb-6 md:mb-8",children:[x.jsx("div",{className:"flex-1",children:x.jsx(EE,{score:o,streak:u})}),x.jsx("button",{onClick:z,className:`
            bg-sonic-red/80 hover:bg-sonic-red
            text-white font-game text-sm md:text-base
            px-4 py-2 rounded-lg
            shadow-lg
            transform transition-all duration-200
            hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-red-300
          `,"aria-label":"Exit game and return to start screen",children:"Exit"})]}),x.jsxs("main",{className:"flex-1 flex flex-col items-center justify-center gap-6 md:gap-8",children:[x.jsx("div",{className:"w-full transform transition-all duration-300 ease-out",children:x.jsx(_E,{num1:i.num1,num2:i.num2,operator:i.operator})}),x.jsx(SE,{isStruggling:$,currentLevel:2,num1:i.num1,num2:i.num2,operator:i.operator},R),x.jsx("div",{className:"w-full",children:x.jsx(vE,{options:i.options,onAnswer:_,disabled:m})})]}),x.jsx("footer",{className:"h-8 md:h-12","aria-hidden":"true"}),m&&x.jsx(wE,{isCorrect:g})]})}AE.propTypes={onGameEnd:Z.func.isRequired,updateProgress:Z.func,initialProgress:Z.shape({score:Z.number,streak:Z.number,totalProblems:Z.number,correctAnswers:Z.number})};function RE({onStart:r,progress:e=null}){const t=e&&(e.score>0||e.streak>0);return x.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[x.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[x.jsx("div",{className:"absolute top-10 left-10 text-4xl animate-bounce opacity-50",children:"*"}),x.jsx("div",{className:"absolute top-20 right-16 text-3xl animate-pulse opacity-40",children:"*"}),x.jsx("div",{className:"absolute bottom-32 left-20 text-5xl animate-bounce opacity-30",children:"*"}),x.jsx("div",{className:"absolute bottom-20 right-10 text-4xl animate-pulse opacity-50",children:"*"})]}),x.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[x.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-4 animate-pulse-scale`,children:"Sonic Math Trainer!"}),x.jsxs("div",{className:"flex justify-center gap-2 text-4xl md:text-5xl mb-6",children:[x.jsx("span",{role:"img","aria-label":"hedgehog",children:"🦔"}),x.jsx("span",{role:"img","aria-label":"dash",children:"💨"})]}),x.jsx("p",{className:"text-xl md:text-2xl font-game text-white/90 mb-8 drop-shadow-md",children:"Time to boost your math power!"}),t&&x.jsxs("div",{className:`bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm
                       transform transition-all duration-300 hover:scale-105`,role:"status","aria-label":`Your best: ${e.score} points, ${e.streak} streak`,children:[x.jsx("p",{className:"text-lg md:text-xl font-game text-sonic-gold mb-2",children:"Your Best:"}),x.jsxs("div",{className:"flex justify-center items-center gap-6 flex-wrap",children:[x.jsxs("div",{className:"text-center",children:[x.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.score}),x.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"points"})]}),x.jsx("div",{className:"w-px h-12 bg-white/30","aria-hidden":"true"}),x.jsxs("div",{className:"text-center",children:[x.jsxs("div",{className:"flex items-center justify-center gap-2",children:[x.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.streak}),x.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]}),x.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"streak"})]})]}),e.totalProblems>0&&x.jsxs("p",{className:"text-base text-white/80 font-game mt-4",children:["Accuracy: ",Math.round(e.correctAnswers/e.totalProblems*100),"%"]})]}),x.jsx("button",{onClick:r,className:`
            bg-gradient-to-r from-sonic-gold to-yellow-400
            text-blue-900 font-game text-2xl md:text-3xl
            px-12 py-6 rounded-2xl
            shadow-lg shadow-yellow-500/50
            transform transition-all duration-300
            hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/60
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-yellow-300
            animate-pulse-scale
          `,"aria-label":"Start the math game",children:"Start Game!"}),x.jsxs("p",{className:"text-lg md:text-xl font-game text-white/70 mt-8",children:[x.jsx("span",{role:"img","aria-label":"star",children:"⭐"})," Tap the correct answer to score points!"," ",x.jsx("span",{role:"img","aria-label":"star",children:"⭐"})]})]}),x.jsx("div",{className:"absolute bottom-4 text-center text-white/40 font-game text-sm",children:"Math is fun!"})]})}RE.propTypes={onStart:Z.func.isRequired,progress:Z.shape({score:Z.number,streak:Z.number,totalProblems:Z.number,correctAnswers:Z.number})};function CE({sessionStats:r,onPlayAgain:e,onExit:t}){const{score:i=0,streak:o=0,totalProblems:u=0,correctAnswers:h=0,accuracy:m=0}=r||{},_=m>=80?{text:"Sonic Speed! Amazing!",emoji:"🦔💨",color:"text-green-400"}:m>=50?{text:"Great effort! Keep practicing!",emoji:"⭐",color:"text-sonic-gold"}:{text:"You're learning! Try again!",emoji:"💪",color:"text-orange-400"};return x.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[x.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[x.jsx("div",{className:"absolute top-10 left-8 text-3xl animate-bounce opacity-60",children:"*"}),x.jsx("div",{className:"absolute top-16 right-12 text-4xl animate-pulse opacity-50",children:"*"}),x.jsx("div",{className:"absolute top-32 left-20 text-2xl animate-bounce opacity-40",children:"*"}),x.jsx("div",{className:"absolute bottom-40 right-20 text-4xl animate-pulse opacity-50",children:"*"}),x.jsx("div",{className:"absolute bottom-24 left-12 text-3xl animate-bounce opacity-60",children:"*"}),x.jsx("div",{className:"absolute top-48 right-8 text-2xl animate-pulse opacity-40",children:"*"})]}),x.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[x.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-2 animate-pulse-scale`,children:"Great Job!"}),x.jsx("div",{className:"text-5xl md:text-6xl mb-6",children:x.jsx("span",{role:"img","aria-label":"party",children:"🎉"})}),x.jsxs("p",{className:`text-xl md:text-2xl font-game ${_.color} mb-6 drop-shadow-md`,children:[_.text," ",x.jsx("span",{role:"img","aria-label":"performance icon",children:_.emoji})]}),x.jsx("div",{className:"bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm",role:"status","aria-label":`Session stats: ${i} points, ${o} streak, ${m}% accuracy`,children:x.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[x.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[x.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Points"}),x.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:i})]}),x.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[x.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Best Streak"}),x.jsxs("div",{className:"flex items-center justify-center gap-2",children:[x.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:o}),o>=3&&x.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]})]}),x.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[x.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Accuracy"}),x.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[Math.round(m),"%"]})]}),x.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[x.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Problems"}),x.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[h,"/",u]})]})]})}),x.jsxs("div",{className:"flex flex-col gap-4",children:[x.jsx("button",{onClick:e,className:`
              bg-gradient-to-r from-sonic-gold to-yellow-400
              text-blue-900 font-game text-2xl md:text-3xl
              px-10 py-5 rounded-2xl w-full
              shadow-lg shadow-yellow-500/50
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/60
              active:scale-95
              focus:outline-none focus:ring-4 focus:ring-yellow-300
              animate-pulse-scale
            `,"aria-label":"Play the game again",children:"Play Again!"}),x.jsx("button",{onClick:t,className:`
              bg-white/20 hover:bg-white/30
              text-white font-game text-lg md:text-xl
              px-8 py-4 rounded-xl w-full
              shadow-md
              transform transition-all duration-300
              hover:scale-105
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-white/50
            `,"aria-label":"Go back to start screen",children:"Back to Start"})]}),x.jsxs("p",{className:"text-lg font-game text-white/60 mt-8",children:["Keep practicing to become a Math Master!"," ",x.jsx("span",{role:"img","aria-label":"trophy",children:"🏆"})]})]})]})}CE.propTypes={sessionStats:Z.shape({score:Z.number,streak:Z.number,totalProblems:Z.number,correctAnswers:Z.number,accuracy:Z.number}).isRequired,onPlayAgain:Z.func.isRequired,onExit:Z.func.isRequired};const xE=K.createContext(null);function PE(){const r=K.useContext(xE);if(r===null)throw new Error("useProfile must be used within a <ProfileProvider>");return r}const kE="math-trainer-profiles",Gd=4,ui=12,ax=4,xr=["sonic","spiderman"];function Cc(){try{const r=localStorage.getItem(kE);if(r===null)return[];const e=JSON.parse(r);return Array.isArray(e)?e:(console.warn("[profiles] Corrupt data in localStorage — expected array, got",typeof e),[])}catch(r){return console.warn("[profiles] Failed to parse localStorage data:",r.message),[]}}function $f(r){localStorage.setItem(kE,JSON.stringify(r))}function lx(r){const e=new Uint8Array(r);let t="";for(let i=0;i<e.length;i++)t+=e[i].toString(16).padStart(2,"0");return t}function jy(){return Cc()}function ux({nickname:r,theme:e,pinHash:t,firebaseUid:i=null,currentLevel:o=1}){const u=Cc();if(u.length>=Gd)throw new Error(`Maximum of ${Gd} profiles reached`);if(typeof r!="string"||r.trim().length===0)throw new Error("Nickname is required");const h=r.trim();if([...h].length>ui)throw new Error(`Nickname must be ${ui} characters or fewer`);if(!xr.includes(e))throw new Error(`Theme must be one of: ${xr.join(", ")}`);if(typeof t!="string"||!/^[0-9a-f]{64}$/.test(t))throw new Error("pinHash must be a 64-character hex string");const m=new Date().toISOString(),g={id:crypto.randomUUID(),nickname:h,theme:e,pinHash:t,firebaseUid:i,currentLevel:o,createdAt:m,lastActiveAt:m};return u.push(g),$f(u),g}function By(r,e){const t=Cc(),i=t.findIndex(m=>m.id===r);if(i===-1)throw new Error(`Profile not found: ${r}`);const{id:o,createdAt:u,...h}=e;return t[i]={...t[i],...h,lastActiveAt:new Date().toISOString()},$f(t),t[i]}function cx(r){const e=Cc(),t=e.filter(i=>i.id!==r);return t.length===e.length?!1:($f(t),!0)}async function Kd(r){if(typeof r!="string"||!/^\d{4}$/.test(r))throw new Error(`PIN must be exactly ${ax} digits`);const t=new TextEncoder().encode(r),i=await crypto.subtle.digest("SHA-256",t);return lx(i)}async function hx(r,e){return await Kd(r)===e}const ai="math-trainer-active-profile",dx=3,fx=30,St=Object.freeze({SET_PROFILES:"SET_PROFILES",SET_ACTIVE:"SET_ACTIVE",CLEAR_ACTIVE:"CLEAR_ACTIVE",ADD_PROFILE:"ADD_PROFILE",UPDATE_PROFILE:"UPDATE_PROFILE",DELETE_PROFILE:"DELETE_PROFILE",SET_LOADING:"SET_LOADING",SET_ERROR:"SET_ERROR"}),px={profiles:[],activeProfile:null,isLoading:!0,error:null};function mx(r,e){var t,i;switch(e.type){case St.SET_PROFILES:return{...r,profiles:e.payload,isLoading:!1};case St.SET_ACTIVE:return{...r,activeProfile:e.payload,error:null};case St.CLEAR_ACTIVE:return{...r,activeProfile:null};case St.ADD_PROFILE:return{...r,profiles:[...r.profiles,e.payload]};case St.UPDATE_PROFILE:return{...r,profiles:r.profiles.map(o=>o.id===e.payload.id?e.payload:o),activeProfile:((t=r.activeProfile)==null?void 0:t.id)===e.payload.id?e.payload:r.activeProfile};case St.DELETE_PROFILE:{const o=r.profiles.filter(u=>u.id!==e.payload);return{...r,profiles:o,activeProfile:((i=r.activeProfile)==null?void 0:i.id)===e.payload?null:r.activeProfile}}case St.SET_LOADING:return{...r,isLoading:e.payload};case St.SET_ERROR:return{...r,error:e.payload};default:return r}}const ka=4;function uc({profileName:r,onSubmit:e,onCancel:t,isVerifying:i=!1,error:o=null,attempts:u=0,maxAttempts:h=3,cooldownSeconds:m=30}){const[g,_]=K.useState(""),[E,T]=K.useState(!1),[R,B]=K.useState(0),q=K.useRef(null),$=R>0;K.useEffect(()=>{u>=h&&R===0&&B(m)},[u,h,m,R]),K.useEffect(()=>{if(!(R<=0))return q.current=setInterval(()=>{B(ne=>ne<=1?(clearInterval(q.current),0):ne-1)},1e3),()=>clearInterval(q.current)},[R]),K.useEffect(()=>{if(o){T(!0),_("");const ne=setTimeout(()=>T(!1),500);return()=>clearTimeout(ne)}},[o]);const z=K.useCallback(ne=>{i||$||_(pe=>{if(pe.length>=ka)return pe;const Ce=pe+ne;return Ce.length===ka&&setTimeout(()=>e(Ce),0),Ce})},[i,$,e]),ae=K.useCallback(()=>{i||$||_(ne=>ne.slice(0,-1))},[i,$]);K.useEffect(()=>{function ne(pe){pe.key>="0"&&pe.key<="9"?z(pe.key):pe.key==="Backspace"?ae():pe.key==="Escape"&&t()}return window.addEventListener("keydown",ne),()=>window.removeEventListener("keydown",ne)},[z,ae,t]);const ue=[["1","2","3"],["4","5","6"],["7","8","9"],["backspace","0","cancel"]];return x.jsx("div",{className:`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm
                 flex items-center justify-center p-4`,role:"dialog","aria-label":`Enter PIN for ${r}`,"aria-modal":"true",children:x.jsxs("div",{className:`bg-gradient-to-b from-sonic-blue to-blue-900
                      rounded-3xl p-6 w-full max-w-xs shadow-2xl`,children:[x.jsx("h2",{className:"text-xl font-game text-white text-center mb-1 drop-shadow-md",children:"Enter PIN"}),x.jsx("p",{className:"text-sm font-game text-white/70 text-center mb-5",dir:"auto",children:r}),x.jsx("div",{className:`flex justify-center gap-3 mb-5 ${E?"animate-shake":""}`,role:"status","aria-live":"polite","aria-label":`${g.length} of ${ka} digits entered`,children:Array.from({length:ka}).map((ne,pe)=>x.jsx("div",{className:`
                w-5 h-5 rounded-full border-2 transition-all duration-150
                motion-reduce:transition-none
                ${pe<g.length?"bg-sonic-gold border-sonic-gold shadow-md shadow-yellow-500/30 scale-110":"border-white/50 bg-transparent"}
                ${E&&pe<g.length?"border-red-400 bg-red-400":""}
              `,"aria-hidden":"true"},pe))}),o&&x.jsx("p",{className:"text-red-300 text-sm font-game text-center mb-3",role:"alert",children:o}),$&&x.jsxs("p",{className:"text-red-300 text-sm font-game text-center mb-3",role:"alert",children:["Too many tries! Wait ",R,"s"]}),x.jsx("div",{className:"grid grid-cols-3 gap-2 max-w-[280px] mx-auto",children:ue.flat().map(ne=>ne==="backspace"?x.jsx("button",{onClick:ae,disabled:i||$||g.length===0,className:`aspect-square rounded-xl bg-white/10 hover:bg-white/20
                             text-white font-game text-xl
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90 disabled:opacity-30
                             focus:outline-none focus:ring-2 focus:ring-sonic-gold`,"aria-label":"Delete last digit",children:"⌫"},ne):ne==="cancel"?x.jsx("button",{onClick:t,className:`aspect-square rounded-xl bg-sonic-red/60 hover:bg-sonic-red/80
                             text-white font-game text-sm
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90
                             focus:outline-none focus:ring-2 focus:ring-red-300`,"aria-label":"Cancel PIN entry",children:"Back"},ne):x.jsx("button",{onClick:()=>z(ne),disabled:i||$||g.length>=ka,className:`aspect-square rounded-xl bg-white/15 hover:bg-white/25
                           text-white font-game text-2xl
                           flex items-center justify-center
                           transition-all duration-150
                           active:scale-90 disabled:opacity-30
                           focus:outline-none focus:ring-2 focus:ring-sonic-gold`,"aria-label":`Digit ${ne}`,children:ne},ne))}),i&&x.jsx("p",{className:"text-white/70 text-sm font-game text-center mt-4 animate-pulse",children:"Checking..."})]})})}uc.propTypes={profileName:Z.string.isRequired,onSubmit:Z.func.isRequired,onCancel:Z.func.isRequired,isVerifying:Z.bool,error:Z.string,attempts:Z.number,maxAttempts:Z.number,cooldownSeconds:Z.number};const gx={sonic:"🦔",spiderman:"🕷"},yx={sonic:"border-sonic-blue",spiderman:"border-sonic-red"};function NE({onCreateProfile:r,onProfileActivated:e}){const{profiles:t,selectProfile:i,maxProfiles:o}=PE(),[u,h]=K.useState(null),[m,g]=K.useState(!1),[_,E]=K.useState(null),[T,R]=K.useState(0),B=K.useCallback(z=>{h(z),E(null),R(0)},[]),q=K.useCallback(async z=>{if(u){g(!0),E(null);try{await i(u,z)?(h(null),e&&e()):(R(ue=>ue+1),E("Oops! Wrong PIN. Try again."),navigator.vibrate&&navigator.vibrate(100))}catch{E("Something went wrong. Try again.")}finally{g(!1)}}},[u,i,e]),$=K.useCallback(()=>{h(null),E(null),R(0)},[]);return t.length===0?x.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                      flex flex-col items-center justify-center p-6`,children:[x.jsx("h1",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-4 text-center",children:"Welcome to Math Trainer!"}),x.jsx("p",{className:"text-lg font-game text-white/80 mb-8 text-center",children:"Create your first hero to start playing!"}),x.jsx("button",{onClick:r,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                     text-blue-900 font-game text-xl
                     px-10 py-5 rounded-2xl
                     shadow-lg shadow-yellow-500/50
                     transform transition-all duration-300
                     hover:scale-110 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Create your first hero profile",children:"+ Create Hero"})]}):x.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                    flex flex-col items-center p-6`,children:[x.jsx("h1",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-8 mt-8 text-center",children:"Who's playing?"}),x.jsxs("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md",children:[t.map(z=>x.jsxs("button",{onClick:()=>B(z),className:`
              bg-black/20 backdrop-blur-sm rounded-2xl p-4
              border-2 ${yx[z.theme]||"border-white/30"}
              flex flex-col items-center gap-2
              transform transition-all duration-200
              hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-sonic-gold
            `,"aria-label":`Select ${z.nickname}, Level ${z.currentLevel}`,children:[x.jsx("span",{className:"text-4xl",role:"img","aria-hidden":"true",children:gx[z.theme]||z.nickname.charAt(0).toUpperCase()}),x.jsx("span",{className:"text-lg font-game text-white truncate w-full text-center",dir:"auto",children:z.nickname}),x.jsxs("span",{className:"text-xs font-game text-sonic-gold bg-sonic-gold/20 px-2 py-0.5 rounded-full",children:["Level ",z.currentLevel]})]},z.id)),t.length<o&&x.jsxs("button",{onClick:r,className:`bg-transparent rounded-2xl p-4
                       border-2 border-dashed border-white/30
                       flex flex-col items-center justify-center gap-2
                       transform transition-all duration-200
                       hover:scale-105 hover:border-sonic-gold/50 active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-sonic-gold
                       min-h-[140px]`,"aria-label":"Create a new hero profile",children:[x.jsx("span",{className:"text-4xl text-white/50",children:"+"}),x.jsx("span",{className:"text-sm font-game text-white/50",children:"Add Hero"})]})]}),u&&x.jsx(uc,{profileName:u.nickname,onSubmit:q,onCancel:$,isVerifying:m,error:_,attempts:T,maxAttempts:dx,cooldownSeconds:fx})]})}NE.propTypes={onCreateProfile:Z.func.isRequired,onProfileActivated:Z.func};const Nt=Object.freeze({SET_NICKNAME:"SET_NICKNAME",SET_THEME:"SET_THEME",SET_PIN_HASH:"SET_PIN_HASH",CONFIRM_MISMATCH:"CONFIRM_MISMATCH",SET_SUBMITTING:"SET_SUBMITTING",SET_ERROR:"SET_ERROR",GO_BACK:"GO_BACK",RESET:"RESET"}),bE={step:1,nickname:"",theme:null,pinHash:null,isSubmitting:!1,error:null};function _x(r,e){switch(e.type){case Nt.SET_NICKNAME:return{...r,nickname:e.payload,step:2,error:null};case Nt.SET_THEME:return{...r,theme:e.payload,step:3,error:null};case Nt.SET_PIN_HASH:return{...r,pinHash:e.payload,step:4,error:null};case Nt.CONFIRM_MISMATCH:return{...r,error:"PINs do not match. Try again!"};case Nt.SET_SUBMITTING:return{...r,isSubmitting:e.payload,error:null};case Nt.SET_ERROR:return{...r,error:e.payload,isSubmitting:!1};case Nt.GO_BACK:return r.step===2?{...r,step:1,error:null}:r.step===3?{...r,step:2,error:null}:r.step===4?{...r,step:3,pinHash:null,error:null}:r;case Nt.RESET:return{...bE};default:return r}}const zy=4,$y={sonic:"🦔",spiderman:"🕷"},Hy={sonic:"Sonic",spiderman:"Spiderman"},vx={sonic:"shadow-blue-500/40",spiderman:"shadow-red-500/40"},Ex={sonic:"border-sonic-blue",spiderman:"border-sonic-red"};function DE({currentStep:r}){return x.jsx("div",{className:"flex justify-center gap-3 mb-6",role:"group","aria-label":"Profile creation progress",children:Array.from({length:zy}).map((e,t)=>{const i=t+1,o=i===r,u=i<r;return x.jsx("div",{className:`
              w-3 h-3 rounded-full transition-all duration-300
              motion-reduce:transition-none
              ${u?"bg-sonic-gold":""}
              ${o?"bg-sonic-gold animate-pulse motion-reduce:animate-none":""}
              ${!u&&!o?"border-2 border-white/30 bg-transparent":""}
            `,"aria-current":o?"step":void 0,"aria-label":`Step ${i} of ${zy}${o?", current":u?", completed":""}`},i)})})}DE.propTypes={currentStep:Z.number.isRequired};function OE({onComplete:r,onCancel:e}){const[t,i]=K.useReducer(_x,bE),o=K.useRef(null),u=K.useRef(null),h=K.useRef(!0);K.useEffect(()=>(h.current=!0,()=>{h.current=!1}),[]),K.useEffect(()=>{t.step===1&&o.current&&o.current.focus()},[t.step]);const[m,g]=K.useReducer((D,I)=>I,t.nickname);K.useEffect(()=>{t.step===1&&g(t.nickname)},[t.step,t.nickname]);const[_,E]=K.useReducer((D,I)=>I,t.theme);K.useEffect(()=>{t.step===2&&E(t.theme)},[t.step,t.theme]);const T=[...m].length,R=ui-T,B=m.trim().length>0&&T<=ui,q=K.useCallback(D=>{const I=D.target.value;[...I].length<=ui&&g(I)},[]),$=K.useCallback(()=>{const D=m.trim();D.length>0&&[...D].length<=ui&&i({type:Nt.SET_NICKNAME,payload:D})},[m]),z=K.useCallback(D=>{D.key==="Enter"&&(D.preventDefault(),$())},[$]),ae=K.useCallback(()=>{_&&xr.includes(_)&&i({type:Nt.SET_THEME,payload:_})},[_]),ue=K.useCallback(D=>{if(D.key==="ArrowLeft"||D.key==="ArrowRight"){D.preventDefault();const I=xr.indexOf(_),Pe=D.key==="ArrowRight"?(I+1)%xr.length:(I-1+xr.length)%xr.length;E(xr[Pe])}},[_]),ne=K.useCallback(async D=>{try{const I=await Kd(D);h.current&&i({type:Nt.SET_PIN_HASH,payload:I})}catch{h.current&&i({type:Nt.SET_ERROR,payload:"Could not process PIN. Try again."})}},[]),pe=K.useCallback(async D=>{var I;try{const Pe=await Kd(D);if(!h.current)return;if(Pe!==t.pinHash){i({type:Nt.CONFIRM_MISMATCH});return}i({type:Nt.SET_SUBMITTING,payload:!0});const st=await R_(lc);if(!h.current)return;const Et=st.user.uid,We=ux({nickname:t.nickname,theme:t.theme,pinHash:t.pinHash,firebaseUid:Et});if(!h.current)return;r(We)}catch(Pe){if(!h.current)return;const st=(I=Pe==null?void 0:Pe.message)!=null&&I.includes("Maximum")?Pe.message:"Could not create hero. Try again!";i({type:Nt.SET_ERROR,payload:st})}},[t.pinHash,t.nickname,t.theme,r]),Ce=K.useCallback(()=>{i({type:Nt.SET_ERROR,payload:null})},[]),Te=K.useCallback(()=>{i({type:Nt.GO_BACK})},[]);K.useEffect(()=>{function D(I){I.key==="Escape"&&(t.step===1?e():t.isSubmitting||Te())}return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[t.step,t.isSubmitting,e,Te]);const k=()=>t.isSubmitting?null:t.step===1?x.jsx("button",{onClick:e,className:`text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                     hover:text-white transition-colors duration-150
                     focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg`,"aria-label":"Cancel profile creation",children:"Cancel"}):x.jsx("button",{onClick:Te,className:`text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                   hover:text-white transition-colors duration-150
                   focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg`,"aria-label":"Go back to previous step",children:"Back"}),A=()=>x.jsxs("div",{className:"flex flex-col items-center gap-4 w-full max-w-sm",children:[x.jsx("h2",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md text-center",children:"What is your name?"}),x.jsxs("div",{className:"w-full bg-black/20 backdrop-blur-sm rounded-2xl p-4",children:[x.jsx("input",{ref:o,type:"text",value:m,onChange:q,onKeyDown:z,placeholder:"Type your name...",dir:"auto",maxLength:ui*2,className:`w-full bg-transparent text-2xl font-game text-white text-center
                     placeholder-white/40 outline-none`,"aria-label":"Enter your nickname"}),x.jsxs("p",{className:"text-white/70 text-xs font-game text-center mt-2",children:[R," characters left"]})]}),x.jsx("button",{onClick:$,disabled:!B,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                   text-blue-900 font-game text-xl
                   px-10 py-4 rounded-2xl min-h-[48px]
                   shadow-lg shadow-yellow-500/50
                   transform transition-all duration-300
                   motion-reduce:transition-none
                   hover:scale-105 active:scale-95
                   disabled:opacity-40 disabled:hover:scale-100
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Continue to theme selection",children:"Next"}),k()]}),C=()=>x.jsxs("div",{className:"flex flex-col items-center gap-4 w-full max-w-sm",children:[x.jsx("h2",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md text-center",children:"Choose your hero!"}),x.jsx("div",{className:"grid grid-cols-2 gap-4 w-full",role:"radiogroup","aria-label":"Select a theme",onKeyDown:ue,children:xr.map(D=>{const I=_===D;return x.jsxs("button",{role:"radio","aria-checked":I,"aria-label":`${Hy[D]} theme`,onClick:()=>E(D),className:`
                relative bg-black/20 backdrop-blur-sm rounded-2xl p-4
                border-2 min-h-[160px]
                flex flex-col items-center justify-center gap-2
                transform transition-all duration-300
                motion-reduce:transition-none
                hover:scale-105 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-sonic-gold
                ${I?`${Ex[D]} scale-105 shadow-lg ${vx[D]}`:"border-white/30"}
              `,children:[x.jsx("span",{className:"text-6xl",role:"img","aria-hidden":"true",children:$y[D]}),x.jsx("span",{className:"text-lg font-game text-white",children:Hy[D]}),I&&x.jsx("span",{className:"absolute top-2 right-2 text-sonic-gold text-xl","aria-hidden":"true",children:"✔"})]},D)})}),x.jsx("button",{ref:u,onClick:ae,disabled:!_,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                   text-blue-900 font-game text-xl
                   px-10 py-4 rounded-2xl min-h-[48px]
                   shadow-lg shadow-yellow-500/50
                   transform transition-all duration-300
                   motion-reduce:transition-none
                   hover:scale-105 active:scale-95
                   disabled:opacity-40 disabled:hover:scale-100
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Continue to PIN entry",children:"Next"}),k()]}),N=()=>x.jsx(uc,{profileName:"Choose a secret PIN",onSubmit:ne,onCancel:Te,isVerifying:!1,error:t.error,attempts:0,maxAttempts:999,cooldownSeconds:0}),b=()=>x.jsx(uc,{profileName:"Confirm your PIN",onSubmit:pe,onCancel:Te,isVerifying:t.isSubmitting,error:t.error,attempts:0,maxAttempts:999,cooldownSeconds:0});return t.isSubmitting?x.jsx("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                    flex flex-col items-center justify-center p-6`,role:"dialog","aria-label":"Create a new hero profile",children:x.jsxs("div",{className:"text-center animate-pulse motion-reduce:animate-none",children:[x.jsx("span",{className:"text-6xl block mb-4",role:"img","aria-hidden":"true",children:$y[t.theme]||"🌟"}),x.jsx("h2",{className:"text-2xl md:text-3xl font-game text-white drop-shadow-md",children:"Creating your hero..."})]})}):t.error&&t.step===4&&t.pinHash&&t.error!=="PINs do not match. Try again!"&&t.error!=="Could not process PIN. Try again."?x.jsx("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                      flex flex-col items-center justify-center p-6`,role:"dialog","aria-label":"Create a new hero profile",children:x.jsxs("div",{className:"text-center",children:[x.jsx("p",{className:"text-red-300 text-lg font-game mb-6",role:"alert",children:t.error}),x.jsx("button",{onClick:Ce,className:`bg-gradient-to-r from-sonic-gold to-yellow-400
                         text-blue-900 font-game text-xl
                         px-10 py-4 rounded-2xl min-h-[48px]
                         shadow-lg shadow-yellow-500/50
                         transform transition-all duration-300
                         motion-reduce:transition-none
                         hover:scale-105 active:scale-95
                         focus:outline-none focus:ring-4 focus:ring-yellow-300`,"aria-label":"Try creating your hero again",children:"Try Again"}),x.jsx("div",{className:"mt-4",children:x.jsx("button",{onClick:Te,className:`text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                           hover:text-white transition-colors duration-150
                           focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg`,"aria-label":"Go back to previous step",children:"Back"})})]})}):t.step===3?N():t.step===4?b():x.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                  flex flex-col items-center justify-center p-6`,role:"dialog","aria-label":"Create a new hero profile",children:[x.jsx(DE,{currentStep:t.step}),t.step===1&&A(),t.step===2&&C()]})}OE.propTypes={onComplete:Z.func.isRequired,onCancel:Z.func.isRequired};function wx(){const{activeProfile:r,isLoading:e,clearActiveProfile:t,createAndActivate:i}=PE(),{user:o,loading:u,error:h}=yC(),{progress:m,updateProgress:g,forceSave:_,loading:E}=wC((r==null?void 0:r.firebaseUid)??(o==null?void 0:o.uid)),[T,R]=K.useState("start"),[B,q]=K.useState(null),[$,z]=K.useState(!1),ae=e||u||E,ue=K.useCallback(N=>{if(N){const b=N.accuracy??(N.totalProblems>0?Math.round(N.correctAnswers/N.totalProblems*100):0);q({score:N.score??0,streak:N.streak??0,totalProblems:N.totalProblems??0,correctAnswers:N.correctAnswers??0,accuracy:b}),R("result")}else R("start")},[]),ne=K.useCallback(()=>{q(null),R("game")},[]),pe=K.useCallback(()=>{q(null),R("game")},[]),Ce=K.useCallback(()=>{_(),q(null),R("start")},[_]),Te=K.useCallback(()=>{_(),t(),q(null),R("start")},[_,t]),k=K.useCallback(()=>{z(!0)},[]),A=K.useCallback(N=>{i(N),z(!1)},[i]),C=K.useCallback(()=>{z(!1)},[]);return ae?x.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:x.jsxs("div",{className:"animate-pulse",children:[x.jsx("h1",{className:"text-4xl md:text-6xl font-game text-sonic-gold drop-shadow-lg text-center",children:"Loading..."}),x.jsx("p",{className:"text-xl text-white mt-4 font-game text-center",children:e?"Loading heroes...":u?"Connecting to Sonic Speed!":"Loading your progress..."})]})}):!r&&$?x.jsx(OE,{onComplete:A,onCancel:C}):r?h?x.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:x.jsxs("div",{className:"text-center",children:[x.jsx("h1",{className:"text-4xl md:text-6xl font-game text-red-500 drop-shadow-lg",children:"Oops!"}),x.jsx("p",{className:"text-xl text-white mt-4 font-game",children:"Could not connect to save your progress"}),x.jsx("p",{className:"text-sm text-white mt-2 opacity-75",children:h.message}),x.jsx("button",{onClick:()=>R("game"),className:`mt-6 bg-sonic-gold text-sonic-blue font-game px-8 py-4 rounded-full
                       hover:bg-yellow-400 transform hover:scale-105 transition-all
                       shadow-lg active:scale-95 text-xl`,children:"Play Anyway!"})]})}):x.jsxs(x.Fragment,{children:[T==="start"&&x.jsx(RE,{onStart:ne,progress:m,onSwitchProfile:Te,activeProfile:r}),T==="game"&&x.jsx(AE,{onGameEnd:ue,updateProgress:g,initialProgress:m}),T==="result"&&B&&x.jsx(CE,{sessionStats:B,onPlayAgain:pe,onExit:Ce})]}):x.jsx(NE,{onCreateProfile:k})}function VE({children:r}){const[e,t]=K.useReducer(mx,px);K.useEffect(()=>{const T=jy();t({type:St.SET_PROFILES,payload:T});const R=sessionStorage.getItem(ai);if(R){const B=T.find(q=>q.id===R)||null;B?t({type:St.SET_ACTIVE,payload:B}):sessionStorage.removeItem(ai)}},[]);const i=K.useCallback(async(T,R)=>{if(!await hx(R,T.pinHash))return!1;const q=By(T.id,{});return t({type:St.SET_ACTIVE,payload:q}),sessionStorage.setItem(ai,T.id),!0},[]),o=K.useCallback(()=>{t({type:St.CLEAR_ACTIVE}),sessionStorage.removeItem(ai)},[]),u=K.useCallback(()=>{const T=jy();t({type:St.SET_PROFILES,payload:T})},[]),h=K.useCallback(T=>{t({type:St.ADD_PROFILE,payload:T})},[]),m=K.useCallback(T=>{t({type:St.ADD_PROFILE,payload:T}),t({type:St.SET_ACTIVE,payload:T}),sessionStorage.setItem(ai,T.id)},[]),g=K.useCallback((T,R)=>{const B=By(T,R);return t({type:St.UPDATE_PROFILE,payload:B}),B},[]),_=K.useCallback(T=>{const R=cx(T);return R&&(t({type:St.DELETE_PROFILE,payload:T}),sessionStorage.getItem(ai)===T&&sessionStorage.removeItem(ai)),R},[]),E=K.useMemo(()=>({profiles:e.profiles,activeProfile:e.activeProfile,isLoading:e.isLoading,error:e.error,maxProfiles:Gd,selectProfile:i,clearActiveProfile:o,refreshProfiles:u,addProfile:h,createAndActivate:m,updateProfile:g,deleteProfile:_}),[e.profiles,e.activeProfile,e.isLoading,e.error,i,o,u,h,m,g,_]);return x.jsx(xE.Provider,{value:E,children:r})}VE.propTypes={children:Z.node.isRequired};Xw.createRoot(document.getElementById("root")).render(x.jsx(qw.StrictMode,{children:x.jsx(VE,{children:x.jsx(wx,{})})}));
