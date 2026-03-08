(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function bd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Fh={exports:{}},Ea={},Uh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function ow(){if(Lm)return Se;Lm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.iterator;function P(V){return V===null||typeof V!="object"?null:(V=I&&V[I]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,H={};function B(V,W,Te){this.props=V,this.context=W,this.refs=H,this.updater=Te||z}B.prototype.isReactComponent={},B.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ae(){}ae.prototype=B.prototype;function ue(V,W,Te){this.props=V,this.context=W,this.refs=H,this.updater=Te||z}var me=ue.prototype=new ae;me.constructor=ue,Y(me,B.prototype),me.isPureReactComponent=!0;var De=Array.isArray,Le=Object.prototype.hasOwnProperty,xe={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(V,W,Te){var Ie,Ae={},Re=null,je=null;if(W!=null)for(Ie in W.ref!==void 0&&(je=W.ref),W.key!==void 0&&(Re=""+W.key),W)Le.call(W,Ie)&&!k.hasOwnProperty(Ie)&&(Ae[Ie]=W[Ie]);var Oe=arguments.length-2;if(Oe===1)Ae.children=Te;else if(1<Oe){for(var $e=Array(Oe),zt=0;zt<Oe;zt++)$e[zt]=arguments[zt+2];Ae.children=$e}if(V&&V.defaultProps)for(Ie in Oe=V.defaultProps,Oe)Ae[Ie]===void 0&&(Ae[Ie]=Oe[Ie]);return{$$typeof:i,type:V,key:Re,ref:je,props:Ae,_owner:xe.current}}function R(V,W){return{$$typeof:i,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function x(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Te){return W[Te]})}var O=/\/+/g;function A(V,W){return typeof V=="object"&&V!==null&&V.key!=null?x(""+V.key):W.toString(36)}function We(V,W,Te,Ie,Ae){var Re=typeof V;(Re==="undefined"||Re==="boolean")&&(V=null);var je=!1;if(V===null)je=!0;else switch(Re){case"string":case"number":je=!0;break;case"object":switch(V.$$typeof){case i:case e:je=!0}}if(je)return je=V,Ae=Ae(je),V=Ie===""?"."+A(je,0):Ie,De(Ae)?(Te="",V!=null&&(Te=V.replace(O,"$&/")+"/"),We(Ae,W,Te,"",function(zt){return zt})):Ae!=null&&(D(Ae)&&(Ae=R(Ae,Te+(!Ae.key||je&&je.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+V)),W.push(Ae)),1;if(je=0,Ie=Ie===""?".":Ie+":",De(V))for(var Oe=0;Oe<V.length;Oe++){Re=V[Oe];var $e=Ie+A(Re,Oe);je+=We(Re,W,Te,$e,Ae)}else if($e=P(V),typeof $e=="function")for(V=$e.call(V),Oe=0;!(Re=V.next()).done;)Re=Re.value,$e=Ie+A(Re,Oe++),je+=We(Re,W,Te,$e,Ae);else if(Re==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return je}function _t(V,W,Te){if(V==null)return V;var Ie=[],Ae=0;return We(V,Ie,"","",function(Re){return W.call(Te,Re,Ae++)}),Ie}function Nt(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(Te){(V._status===0||V._status===-1)&&(V._status=1,V._result=Te)},function(Te){(V._status===0||V._status===-1)&&(V._status=2,V._result=Te)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var Je={current:null},Z={transition:null},ce={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:xe};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:_t,forEach:function(V,W,Te){_t(V,function(){W.apply(this,arguments)},Te)},count:function(V){var W=0;return _t(V,function(){W++}),W},toArray:function(V){return _t(V,function(W){return W})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Se.Component=B,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=ue,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Se.act=ne,Se.cloneElement=function(V,W,Te){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=Y({},V.props),Ae=V.key,Re=V.ref,je=V._owner;if(W!=null){if(W.ref!==void 0&&(Re=W.ref,je=xe.current),W.key!==void 0&&(Ae=""+W.key),V.type&&V.type.defaultProps)var Oe=V.type.defaultProps;for($e in W)Le.call(W,$e)&&!k.hasOwnProperty($e)&&(Ie[$e]=W[$e]===void 0&&Oe!==void 0?Oe[$e]:W[$e])}var $e=arguments.length-2;if($e===1)Ie.children=Te;else if(1<$e){Oe=Array($e);for(var zt=0;zt<$e;zt++)Oe[zt]=arguments[zt+2];Ie.children=Oe}return{$$typeof:i,type:V.type,key:Ae,ref:Re,props:Ie,_owner:je}},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Se.createElement=S,Se.createFactory=function(V){var W=S.bind(null,V);return W.type=V,W},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:m,render:V}},Se.isValidElement=D,Se.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Nt}},Se.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},Se.startTransition=function(V){var W=Z.transition;Z.transition={};try{V()}finally{Z.transition=W}},Se.unstable_act=ne,Se.useCallback=function(V,W){return Je.current.useCallback(V,W)},Se.useContext=function(V){return Je.current.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V){return Je.current.useDeferredValue(V)},Se.useEffect=function(V,W){return Je.current.useEffect(V,W)},Se.useId=function(){return Je.current.useId()},Se.useImperativeHandle=function(V,W,Te){return Je.current.useImperativeHandle(V,W,Te)},Se.useInsertionEffect=function(V,W){return Je.current.useInsertionEffect(V,W)},Se.useLayoutEffect=function(V,W){return Je.current.useLayoutEffect(V,W)},Se.useMemo=function(V,W){return Je.current.useMemo(V,W)},Se.useReducer=function(V,W,Te){return Je.current.useReducer(V,W,Te)},Se.useRef=function(V){return Je.current.useRef(V)},Se.useState=function(V){return Je.current.useState(V)},Se.useSyncExternalStore=function(V,W,Te){return Je.current.useSyncExternalStore(V,W,Te)},Se.useTransition=function(){return Je.current.useTransition()},Se.version="18.3.1",Se}var Mm;function Ld(){return Mm||(Mm=1,Uh.exports=ow()),Uh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function aw(){if(Fm)return Ea;Fm=1;var i=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,I={},P=null,z=null;_!==void 0&&(P=""+_),g.key!==void 0&&(P=""+g.key),g.ref!==void 0&&(z=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(I[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)I[w]===void 0&&(I[w]=g[w]);return{$$typeof:e,type:m,key:P,ref:z,props:I,_owner:o.current}}return Ea.Fragment=t,Ea.jsx=h,Ea.jsxs=h,Ea}var Um;function lw(){return Um||(Um=1,Fh.exports=aw()),Fh.exports}var j=lw(),_e=Ld();const uw=bd(_e);var mu={},jh={exports:{}},Qt={},zh={exports:{}},Bh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function cw(){return jm||(jm=1,(function(i){function e(Z,ce){var ne=Z.length;Z.push(ce);e:for(;0<ne;){var V=ne-1>>>1,W=Z[V];if(0<o(W,ce))Z[V]=ce,Z[ne]=W,ne=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],ne=Z.pop();if(ne!==ce){Z[0]=ne;e:for(var V=0,W=Z.length,Te=W>>>1;V<Te;){var Ie=2*(V+1)-1,Ae=Z[Ie],Re=Ie+1,je=Z[Re];if(0>o(Ae,ne))Re<W&&0>o(je,Ae)?(Z[V]=je,Z[Re]=ne,V=Re):(Z[V]=Ae,Z[Ie]=ne,V=Ie);else if(Re<W&&0>o(je,ne))Z[V]=je,Z[Re]=ne,V=Re;else break e}}return ce}function o(Z,ce){var ne=Z.sortIndex-ce.sortIndex;return ne!==0?ne:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,I=null,P=3,z=!1,Y=!1,H=!1,B=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(Z){for(var ce=t(_);ce!==null;){if(ce.callback===null)s(_);else if(ce.startTime<=Z)s(_),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(_)}}function De(Z){if(H=!1,me(Z),!Y)if(t(g)!==null)Y=!0,Nt(Le);else{var ce=t(_);ce!==null&&Je(De,ce.startTime-Z)}}function Le(Z,ce){Y=!1,H&&(H=!1,ae(S),S=-1),z=!0;var ne=P;try{for(me(ce),I=t(g);I!==null&&(!(I.expirationTime>ce)||Z&&!x());){var V=I.callback;if(typeof V=="function"){I.callback=null,P=I.priorityLevel;var W=V(I.expirationTime<=ce);ce=i.unstable_now(),typeof W=="function"?I.callback=W:I===t(g)&&s(g),me(ce)}else s(g);I=t(g)}if(I!==null)var Te=!0;else{var Ie=t(_);Ie!==null&&Je(De,Ie.startTime-ce),Te=!1}return Te}finally{I=null,P=ne,z=!1}}var xe=!1,k=null,S=-1,R=5,D=-1;function x(){return!(i.unstable_now()-D<R)}function O(){if(k!==null){var Z=i.unstable_now();D=Z;var ce=!0;try{ce=k(!0,Z)}finally{ce?A():(xe=!1,k=null)}}else xe=!1}var A;if(typeof ue=="function")A=function(){ue(O)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,_t=We.port2;We.port1.onmessage=O,A=function(){_t.postMessage(null)}}else A=function(){B(O,0)};function Nt(Z){k=Z,xe||(xe=!0,A())}function Je(Z,ce){S=B(function(){Z(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){Y||z||(Y=!0,Nt(Le))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return P},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Z){switch(P){case 1:case 2:case 3:var ce=3;break;default:ce=P}var ne=P;P=ce;try{return Z()}finally{P=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ne=P;P=Z;try{return ce()}finally{P=ne}},i.unstable_scheduleCallback=function(Z,ce,ne){var V=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,Z){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ne+W,Z={id:w++,callback:ce,priorityLevel:Z,startTime:ne,expirationTime:W,sortIndex:-1},ne>V?(Z.sortIndex=ne,e(_,Z),t(g)===null&&Z===t(_)&&(H?(ae(S),S=-1):H=!0,Je(De,ne-V))):(Z.sortIndex=W,e(g,Z),Y||z||(Y=!0,Nt(Le))),Z},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(Z){var ce=P;return function(){var ne=P;P=ce;try{return Z.apply(this,arguments)}finally{P=ne}}}})(Bh)),Bh}var zm;function hw(){return zm||(zm=1,zh.exports=cw()),zh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function dw(){if(Bm)return Qt;Bm=1;var i=Ld(),e=hw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},I={};function P(n){return g.call(I,n)?!0:g.call(w,n)?!1:_.test(n)?I[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function H(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new H(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var ae=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ae,ue);B[r]=new H(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ae,ue);B[r]=new H(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ae,ue);B[r]=new H(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,a,d,c)&&(a=null),c||d===null?P(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var De=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Le=Symbol.for("react.element"),xe=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var Te=!1;function Ie(n,r){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,T=f.length-1;1<=v&&0<=T&&d[v]!==f[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==f[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==f[T]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Ae(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case xe:return"Portal";case R:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case We:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}function je(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function zt(n){var r=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ps(n){n._valueTracker||(n._valueTracker=zt(n))}function Ro(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ms(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function el(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Oe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gs(n,r){r=r.checked,r!=null&&me(n,"checked",r,!1)}function Pi(n,r){gs(n,r);var a=Oe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ut(n,r.type,a):r.hasOwnProperty("defaultValue")&&ut(n,r.type,Oe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Co(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,r,a){(r!=="number"||Vr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function yn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Oe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Po(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ko(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Oe(a)}}function tl(n,r){var a=Oe(r.value),c=Oe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Or(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function xo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ys(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?xo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var br,nl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=br.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ki(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rl=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(n){rl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Lr[r]=Lr[n]})});function Mr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Lr.hasOwnProperty(n)&&Lr[n]?(""+r).trim():r+"px"}function _s(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Mr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var No=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _n(n,r){if(r){if(No[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function vs(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function Es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sr=null,or=null,rt=null;function Do(n){if(n=sa(n)){if(typeof sr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=xl(r),sr(n.stateNode,n.type,r))}}function Ur(n){or?rt?rt.push(n):rt=[n]:or=n}function jr(){if(or){var n=or,r=rt;if(rt=or=null,Do(n),r)for(n=0;n<r.length;n++)Do(r[n])}}function il(n,r){return n(r)}function sl(){}var Dn=!1;function ol(n,r,a){if(Dn)return n(r,a);Dn=!0;try{return il(n,r,a)}finally{Dn=!1,(or!==null||rt!==null)&&(sl(),jr())}}function xi(n,r){var a=n.stateNode;if(a===null)return null;var c=xl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var zr=!1;if(m)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{zr=!1}function al(n,r,a,c,d,f,v,T,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(G){this.onError(G)}}var ar=!1,Vn=null,ws=!1,an=null,ll={onError:function(n){ar=!0,Vn=n}};function ul(n,r,a,c,d,f,v,T,C){ar=!1,Vn=null,al.apply(ll,arguments)}function Vo(n,r,a,c,d,f,v,T,C){if(ul.apply(this,arguments),ar){if(ar){var F=Vn;ar=!1,Vn=null}else throw Error(t(198));ws||(ws=!0,an=F)}}function vn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Oo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function cl(n){if(vn(n)!==n)throw Error(t(188))}function hl(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return cl(d),n;if(f===c)return cl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=f;break}if(T===c){v=!0,c=d,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,c=d;break}if(T===c){v=!0,c=f,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function dl(n){return n=hl(n),n!==null?Ni(n):null}function Ni(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ni(n);if(r!==null)return r;n=n.sibling}return null}var bo=e.unstable_scheduleCallback,Ts=e.unstable_cancelCallback,Di=e.unstable_shouldYield,lr=e.unstable_requestPaint,Ge=e.unstable_now,mc=e.unstable_getCurrentPriorityLevel,Is=e.unstable_ImmediatePriority,Lo=e.unstable_UserBlockingPriority,Vi=e.unstable_NormalPriority,Mo=e.unstable_LowPriority,Ss=e.unstable_IdlePriority,Oi=null,Jt=null;function fl(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Oi,n,void 0,(n.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:bi,On=Math.log,ln=Math.LN2;function bi(n){return n>>>=0,n===0?32:31-(On(n)/ln|0)|0}var bn=64,$r=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ur(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Ue(T):(f&=v,f!==0&&(c=Ue(f)))}else v=a&~d,v!==0?c=Ue(v):f!==0&&(c=Ue(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Xt(r),d=1<<a,c|=n[a],r&=~d;return c}function Li(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mi(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-Xt(f),T=1<<v,C=d[v];C===-1?((T&a)===0||(T&c)!==0)&&(d[v]=Li(T,r)):C<=r&&(n.expiredLanes|=T),f&=~T}}function Fo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Uo(){var n=bn;return bn<<=1,(bn&4194240)===0&&(bn=64),n}function jo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Fi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Xt(r),n[r]=a}function gc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Xt(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function zo(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Xt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ne=0;function Ln(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bo,As,$o,Ho,Wo,Mn=!1,Rs=[],Fn=null,Un=null,St=null,Ui=new Map,cr=new Map,Zt=[],pl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hr(n,r){switch(n){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Ui.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(r.pointerId)}}function En(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=sa(r),r!==null&&As(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function ml(n,r,a,c,d){switch(r){case"focusin":return Fn=En(Fn,n,r,a,c,d),!0;case"dragenter":return Un=En(Un,n,r,a,c,d),!0;case"mouseover":return St=En(St,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return Ui.set(f,En(Ui.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,cr.set(f,En(cr.get(f)||null,n,r,a,c,d)),!0}return!1}function Cs(n){var r=$i(n.target);if(r!==null){var a=vn(r);if(a!==null){if(r=a.tag,r===13){if(r=Oo(a),r!==null){n.blockedOn=r,Wo(n.priority,function(){$o(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function He(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ps(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fr=c,a.target.dispatchEvent(c),Fr=null}else return r=sa(a),r!==null&&As(r),n.blockedOn=a,!1;r.shift()}return!0}function gl(n,r,a){He(n)&&a.delete(r)}function yc(){Mn=!1,Fn!==null&&He(Fn)&&(Fn=null),Un!==null&&He(Un)&&(Un=null),St!==null&&He(St)&&(St=null),Ui.forEach(gl),cr.forEach(gl)}function Wr(n,r){n.blockedOn===r&&(n.blockedOn=null,Mn||(Mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yc)))}function qr(n){function r(d){return Wr(d,n)}if(0<Rs.length){Wr(Rs[0],n);for(var a=1;a<Rs.length;a++){var c=Rs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Fn!==null&&Wr(Fn,n),Un!==null&&Wr(Un,n),St!==null&&Wr(St,n),Ui.forEach(r),cr.forEach(r),a=0;a<Zt.length;a++)c=Zt[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Zt.length&&(a=Zt[0],a.blockedOn===null);)Cs(a),a.blockedOn===null&&Zt.shift()}var hr=De.ReactCurrentBatchConfig,dr=!0;function jn(n,r,a,c){var d=Ne,f=hr.transition;hr.transition=null;try{Ne=1,qo(n,r,a,c)}finally{Ne=d,hr.transition=f}}function yl(n,r,a,c){var d=Ne,f=hr.transition;hr.transition=null;try{Ne=4,qo(n,r,a,c)}finally{Ne=d,hr.transition=f}}function qo(n,r,a,c){if(dr){var d=Ps(n,r,a,c);if(d===null)Pc(n,r,c,zn,a),Hr(n,c);else if(ml(d,n,r,a,c))c.stopPropagation();else if(Hr(n,c),r&4&&-1<pl.indexOf(n)){for(;d!==null;){var f=sa(d);if(f!==null&&Bo(f),f=Ps(n,r,a,c),f===null&&Pc(n,r,c,zn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Pc(n,r,c,null,a)}}var zn=null;function Ps(n,r,a,c){if(zn=null,n=Es(c),n=$i(n),n!==null)if(r=vn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Oo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return zn=n,null}function ks(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mc()){case Is:return 1;case Lo:return 4;case Vi:case Mo:return 16;case Ss:return 536870912;default:return 16}default:return 16}}var en=null,xs=null,fr=null;function _l(){if(fr)return fr;var n,r=xs,a=r.length,c,d="value"in en?en.value:en.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return fr=d.slice(n,1<c?1-c:void 0)}function ji(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Go(){return!1}function Dt(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Bn:Go,this.isPropagationStopped=Go,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=Dt($n),Gr=ne({},$n,{view:0,detail:0}),Ns=Dt(Gr),Ds,Vs,tn,Bi=ne({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ee,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==tn&&(tn&&n.type==="mousemove"?(Ds=n.screenX-tn.screenX,Vs=n.screenY-tn.screenY):Vs=Ds=0,tn=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:Vs}}),Ko=Dt(Bi),vl=ne({},Bi,{dataTransfer:0}),El=Dt(vl),Os=ne({},Gr,{relatedTarget:0}),At=Dt(Os),wl=ne({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Tl=Dt(wl),Kr=ne({},$n,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Dt(Kr),p=ne({},$n,{data:0}),y=Dt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function Ee(){return X}var ot=ne({},Gr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ji(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ee,charCode:function(n){return n.type==="keypress"?ji(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ji(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=Dt(ot),ct=ne({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nn=Dt(ct),pr=ne({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ee}),Hn=Dt(pr),Wn=ne({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),bs=Dt(Wn),Qo=ne({},Bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),eE=Dt(Qo),tE=[9,13,27,32],_c=m&&"CompositionEvent"in window,Yo=null;m&&"documentMode"in document&&(Yo=document.documentMode);var nE=m&&"TextEvent"in window&&!Yo,Pf=m&&(!_c||Yo&&8<Yo&&11>=Yo),kf=" ",xf=!1;function Nf(n,r){switch(n){case"keyup":return tE.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function rE(n,r){switch(n){case"compositionend":return Df(r);case"keypress":return r.which!==32?null:(xf=!0,kf);case"textInput":return n=r.data,n===kf&&xf?null:n;default:return null}}function iE(n,r){if(Ls)return n==="compositionend"||!_c&&Nf(n,r)?(n=_l(),fr=xs=en=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pf&&r.locale!=="ko"?null:r.data;default:return null}}var sE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!sE[n.type]:r==="textarea"}function Of(n,r,a,c){Ur(c),r=Cl(r,"onChange"),0<r.length&&(a=new zi("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Jo=null,Xo=null;function oE(n){Xf(n,0)}function Il(n){var r=zs(n);if(Ro(r))return n}function aE(n,r){if(n==="change")return r}var bf=!1;if(m){var vc;if(m){var Ec="oninput"in document;if(!Ec){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),Ec=typeof Lf.oninput=="function"}vc=Ec}else vc=!1;bf=vc&&(!document.documentMode||9<document.documentMode)}function Mf(){Jo&&(Jo.detachEvent("onpropertychange",Ff),Xo=Jo=null)}function Ff(n){if(n.propertyName==="value"&&Il(Xo)){var r=[];Of(r,Xo,n,Es(n)),ol(oE,r)}}function lE(n,r,a){n==="focusin"?(Mf(),Jo=r,Xo=a,Jo.attachEvent("onpropertychange",Ff)):n==="focusout"&&Mf()}function uE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Il(Xo)}function cE(n,r){if(n==="click")return Il(r)}function hE(n,r){if(n==="input"||n==="change")return Il(r)}function dE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var wn=typeof Object.is=="function"?Object.is:dE;function Zo(n,r){if(wn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!wn(n[d],r[d]))return!1}return!0}function Uf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jf(n,r){var a=Uf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uf(a)}}function zf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?zf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Bf(){for(var n=window,r=Vr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Vr(n.document)}return r}function wc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function fE(n){var r=Bf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&zf(a.ownerDocument.documentElement,a)){if(c!==null&&wc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=jf(a,f);var v=jf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pE=m&&"documentMode"in document&&11>=document.documentMode,Ms=null,Tc=null,ea=null,Ic=!1;function $f(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||Ms==null||Ms!==Vr(c)||(c=Ms,"selectionStart"in c&&wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ea&&Zo(ea,c)||(ea=c,c=Cl(Tc,"onSelect"),0<c.length&&(r=new zi("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ms)))}function Sl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fs={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Sc={},Hf={};m&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Al(n){if(Sc[n])return Sc[n];if(!Fs[n])return n;var r=Fs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Hf)return Sc[n]=r[a];return n}var Wf=Al("animationend"),qf=Al("animationiteration"),Gf=Al("animationstart"),Kf=Al("transitionend"),Qf=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,r){Qf.set(n,r),u(r,[n])}for(var Ac=0;Ac<Yf.length;Ac++){var Rc=Yf[Ac],mE=Rc.toLowerCase(),gE=Rc[0].toUpperCase()+Rc.slice(1);Qr(mE,"on"+gE)}Qr(Wf,"onAnimationEnd"),Qr(qf,"onAnimationIteration"),Qr(Gf,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(Kf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Jf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Vo(c,r,void 0,n),n.currentTarget=null}function Xf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==f&&d.isPropagationStopped())break e;Jf(d,T,F),f=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,F=T.currentTarget,T=T.listener,C!==f&&d.isPropagationStopped())break e;Jf(d,T,F),f=C}}}if(ws)throw n=an,ws=!1,an=null,n}function Ke(n,r){var a=r[Oc];a===void 0&&(a=r[Oc]=new Set);var c=n+"__bubble";a.has(c)||(Zf(r,n,2,!1),a.add(c))}function Cc(n,r,a){var c=0;r&&(c|=4),Zf(a,n,c,r)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function na(n){if(!n[Rl]){n[Rl]=!0,s.forEach(function(a){a!=="selectionchange"&&(yE.has(a)||Cc(a,!1,n),Cc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Rl]||(r[Rl]=!0,Cc("selectionchange",!1,r))}}function Zf(n,r,a,c){switch(ks(r)){case 1:var d=jn;break;case 4:d=yl;break;default:d=qo}a=d.bind(null,r,a,n),d=void 0,!zr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Pc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;T!==null;){if(v=$i(T),v===null)return;if(C=v.tag,C===5||C===6){c=f=v;continue e}T=T.parentNode}}c=c.return}ol(function(){var F=f,G=Es(a),Q=[];e:{var q=Qf.get(n);if(q!==void 0){var ee=zi,ie=n;switch(n){case"keypress":if(ji(a)===0)break e;case"keydown":case"keyup":ee=Be;break;case"focusin":ie="focus",ee=At;break;case"focusout":ie="blur",ee=At;break;case"beforeblur":case"afterblur":ee=At;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=El;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Hn;break;case Wf:case qf:case Gf:ee=Tl;break;case Kf:ee=bs;break;case"scroll":ee=Ns;break;case"wheel":ee=eE;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=nn}var se=(r&4)!==0,at=!se&&n==="scroll",b=se?q!==null?q+"Capture":null:q;se=[];for(var N=F,M;N!==null;){M=N;var J=M.stateNode;if(M.tag===5&&J!==null&&(M=J,b!==null&&(J=xi(N,b),J!=null&&se.push(ra(N,J,M)))),at)break;N=N.return}0<se.length&&(q=new ee(q,ie,null,a,G),Q.push({event:q,listeners:se}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&a!==Fr&&(ie=a.relatedTarget||a.fromElement)&&($i(ie)||ie[mr]))break e;if((ee||q)&&(q=G.window===G?G:(q=G.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=F,ie=ie?$i(ie):null,ie!==null&&(at=vn(ie),ie!==at||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(se=Ko,J="onMouseLeave",b="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(se=nn,J="onPointerLeave",b="onPointerEnter",N="pointer"),at=ee==null?q:zs(ee),M=ie==null?q:zs(ie),q=new se(J,N+"leave",ee,a,G),q.target=at,q.relatedTarget=M,J=null,$i(G)===F&&(se=new se(b,N+"enter",ie,a,G),se.target=M,se.relatedTarget=at,J=se),at=J,ee&&ie)t:{for(se=ee,b=ie,N=0,M=se;M;M=Us(M))N++;for(M=0,J=b;J;J=Us(J))M++;for(;0<N-M;)se=Us(se),N--;for(;0<M-N;)b=Us(b),M--;for(;N--;){if(se===b||b!==null&&se===b.alternate)break t;se=Us(se),b=Us(b)}se=null}else se=null;ee!==null&&ep(Q,q,ee,se,!1),ie!==null&&at!==null&&ep(Q,at,ie,se,!0)}}e:{if(q=F?zs(F):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var oe=aE;else if(Vf(q))if(bf)oe=hE;else{oe=uE;var he=lE}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(oe=cE);if(oe&&(oe=oe(n,F))){Of(Q,oe,a,G);break e}he&&he(n,q,F),n==="focusout"&&(he=q._wrapperState)&&he.controlled&&q.type==="number"&&ut(q,"number",q.value)}switch(he=F?zs(F):window,n){case"focusin":(Vf(he)||he.contentEditable==="true")&&(Ms=he,Tc=F,ea=null);break;case"focusout":ea=Tc=Ms=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,$f(Q,a,G);break;case"selectionchange":if(pE)break;case"keydown":case"keyup":$f(Q,a,G)}var de;if(_c)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Ls?Nf(n,a)&&(ge="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Pf&&a.locale!=="ko"&&(Ls||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ls&&(de=_l()):(en=G,xs="value"in en?en.value:en.textContent,Ls=!0)),he=Cl(F,ge),0<he.length&&(ge=new y(ge,n,null,a,G),Q.push({event:ge,listeners:he}),de?ge.data=de:(de=Df(a),de!==null&&(ge.data=de)))),(de=nE?rE(n,a):iE(n,a))&&(F=Cl(F,"onBeforeInput"),0<F.length&&(G=new y("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:F}),G.data=de))}Xf(Q,r)})}function ra(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Cl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=xi(n,a),f!=null&&c.unshift(ra(n,f,d)),f=xi(n,r),f!=null&&c.push(ra(n,f,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ep(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=xi(a,f),C!=null&&v.unshift(ra(a,C,T))):d||(C=xi(a,f),C!=null&&v.push(ra(a,C,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var _E=/\r\n?/g,vE=/\u0000|\uFFFD/g;function tp(n){return(typeof n=="string"?n:""+n).replace(_E,`
`).replace(vE,"")}function Pl(n,r,a){if(r=tp(r),tp(n)!==r&&a)throw Error(t(425))}function kl(){}var kc=null,xc=null;function Nc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,EE=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,wE=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(n){return np.resolve(null).then(n).catch(TE)}:Dc;function TE(n){setTimeout(function(){throw n})}function Vc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),qr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);qr(r)}function Yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function rp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),qn="__reactFiber$"+js,ia="__reactProps$"+js,mr="__reactContainer$"+js,Oc="__reactEvents$"+js,IE="__reactListeners$"+js,SE="__reactHandles$"+js;function $i(n){var r=n[qn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[qn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=rp(n);n!==null;){if(a=n[qn])return a;n=rp(n)}return r}n=a,a=n.parentNode}return null}function sa(n){return n=n[qn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xl(n){return n[ia]||null}var bc=[],Bs=-1;function Jr(n){return{current:n}}function Qe(n){0>Bs||(n.current=bc[Bs],bc[Bs]=null,Bs--)}function qe(n,r){Bs++,bc[Bs]=n.current,n.current=r}var Xr={},Vt=Jr(Xr),Ht=Jr(!1),Hi=Xr;function $s(n,r){var a=n.type.contextTypes;if(!a)return Xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function Nl(){Qe(Ht),Qe(Vt)}function ip(n,r,a){if(Vt.current!==Xr)throw Error(t(168));qe(Vt,r),qe(Ht,a)}function sp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,je(n)||"Unknown",d));return ne({},a,c)}function Dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,Hi=Vt.current,qe(Vt,n),qe(Ht,Ht.current),!0}function op(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=sp(n,r,Hi),c.__reactInternalMemoizedMergedChildContext=n,Qe(Ht),Qe(Vt),qe(Vt,n)):Qe(Ht),qe(Ht,a)}var gr=null,Vl=!1,Lc=!1;function ap(n){gr===null?gr=[n]:gr.push(n)}function AE(n){Vl=!0,ap(n)}function Zr(){if(!Lc&&gr!==null){Lc=!0;var n=0,r=Ne;try{var a=gr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,Vl=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),bo(Is,Zr),d}finally{Ne=r,Lc=!1}}return null}var Hs=[],Ws=0,Ol=null,bl=0,un=[],cn=0,Wi=null,yr=1,_r="";function qi(n,r){Hs[Ws++]=bl,Hs[Ws++]=Ol,Ol=n,bl=r}function lp(n,r,a){un[cn++]=yr,un[cn++]=_r,un[cn++]=Wi,Wi=n;var c=yr;n=_r;var d=32-Xt(c)-1;c&=~(1<<d),a+=1;var f=32-Xt(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,yr=1<<32-Xt(r)+d|a<<d|c,_r=f+n}else yr=1<<f|a<<d|c,_r=n}function Mc(n){n.return!==null&&(qi(n,1),lp(n,1,0))}function Fc(n){for(;n===Ol;)Ol=Hs[--Ws],Hs[Ws]=null,bl=Hs[--Ws],Hs[Ws]=null;for(;n===Wi;)Wi=un[--cn],un[cn]=null,_r=un[--cn],un[cn]=null,yr=un[--cn],un[cn]=null}var rn=null,sn=null,Xe=!1,Tn=null;function up(n,r){var a=pn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function cp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=Yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wi!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=pn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Uc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if(Xe){var r=sn;if(r){var a=r;if(!cp(n,r)){if(Uc(n))throw Error(t(418));r=Yr(a.nextSibling);var c=rn;r&&cp(n,r)?up(c,a):(n.flags=n.flags&-4097|2,Xe=!1,rn=n)}}else{if(Uc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,rn=n}}}function hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Ll(n){if(n!==rn)return!1;if(!Xe)return hp(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Nc(n.type,n.memoizedProps)),r&&(r=sn)){if(Uc(n))throw dp(),Error(t(418));for(;r;)up(n,r),r=Yr(r.nextSibling)}if(hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=Yr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?Yr(n.stateNode.nextSibling):null;return!0}function dp(){for(var n=sn;n;)n=Yr(n.nextSibling)}function qs(){sn=rn=null,Xe=!1}function zc(n){Tn===null?Tn=[n]:Tn.push(n)}var RE=De.ReactCurrentBatchConfig;function oa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var T=d.refs;v===null?delete T[f]:T[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function fp(n){var r=n._init;return r(n._payload)}function pp(n){function r(b,N){if(n){var M=b.deletions;M===null?(b.deletions=[N],b.flags|=16):M.push(N)}}function a(b,N){if(!n)return null;for(;N!==null;)r(b,N),N=N.sibling;return null}function c(b,N){for(b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(b,N){return b=ai(b,N),b.index=0,b.sibling=null,b}function f(b,N,M){return b.index=M,n?(M=b.alternate,M!==null?(M=M.index,M<N?(b.flags|=2,N):M):(b.flags|=2,N)):(b.flags|=1048576,N)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function T(b,N,M,J){return N===null||N.tag!==6?(N=Dh(M,b.mode,J),N.return=b,N):(N=d(N,M),N.return=b,N)}function C(b,N,M,J){var oe=M.type;return oe===k?G(b,N,M.props.children,J,M.key):N!==null&&(N.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&fp(oe)===N.type)?(J=d(N,M.props),J.ref=oa(b,N,M),J.return=b,J):(J=au(M.type,M.key,M.props,null,b.mode,J),J.ref=oa(b,N,M),J.return=b,J)}function F(b,N,M,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==M.containerInfo||N.stateNode.implementation!==M.implementation?(N=Vh(M,b.mode,J),N.return=b,N):(N=d(N,M.children||[]),N.return=b,N)}function G(b,N,M,J,oe){return N===null||N.tag!==7?(N=es(M,b.mode,J,oe),N.return=b,N):(N=d(N,M),N.return=b,N)}function Q(b,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Dh(""+N,b.mode,M),N.return=b,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Le:return M=au(N.type,N.key,N.props,null,b.mode,M),M.ref=oa(b,null,N),M.return=b,M;case xe:return N=Vh(N,b.mode,M),N.return=b,N;case Nt:var J=N._init;return Q(b,J(N._payload),M)}if(st(N)||ce(N))return N=es(N,b.mode,M,null),N.return=b,N;Ml(b,N)}return null}function q(b,N,M,J){var oe=N!==null?N.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return oe!==null?null:T(b,N,""+M,J);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Le:return M.key===oe?C(b,N,M,J):null;case xe:return M.key===oe?F(b,N,M,J):null;case Nt:return oe=M._init,q(b,N,oe(M._payload),J)}if(st(M)||ce(M))return oe!==null?null:G(b,N,M,J,null);Ml(b,M)}return null}function ee(b,N,M,J,oe){if(typeof J=="string"&&J!==""||typeof J=="number")return b=b.get(M)||null,T(N,b,""+J,oe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Le:return b=b.get(J.key===null?M:J.key)||null,C(N,b,J,oe);case xe:return b=b.get(J.key===null?M:J.key)||null,F(N,b,J,oe);case Nt:var he=J._init;return ee(b,N,M,he(J._payload),oe)}if(st(J)||ce(J))return b=b.get(M)||null,G(N,b,J,oe,null);Ml(N,J)}return null}function ie(b,N,M,J){for(var oe=null,he=null,de=N,ge=N=0,wt=null;de!==null&&ge<M.length;ge++){de.index>ge?(wt=de,de=null):wt=de.sibling;var Me=q(b,de,M[ge],J);if(Me===null){de===null&&(de=wt);break}n&&de&&Me.alternate===null&&r(b,de),N=f(Me,N,ge),he===null?oe=Me:he.sibling=Me,he=Me,de=wt}if(ge===M.length)return a(b,de),Xe&&qi(b,ge),oe;if(de===null){for(;ge<M.length;ge++)de=Q(b,M[ge],J),de!==null&&(N=f(de,N,ge),he===null?oe=de:he.sibling=de,he=de);return Xe&&qi(b,ge),oe}for(de=c(b,de);ge<M.length;ge++)wt=ee(de,b,ge,M[ge],J),wt!==null&&(n&&wt.alternate!==null&&de.delete(wt.key===null?ge:wt.key),N=f(wt,N,ge),he===null?oe=wt:he.sibling=wt,he=wt);return n&&de.forEach(function(li){return r(b,li)}),Xe&&qi(b,ge),oe}function se(b,N,M,J){var oe=ce(M);if(typeof oe!="function")throw Error(t(150));if(M=oe.call(M),M==null)throw Error(t(151));for(var he=oe=null,de=N,ge=N=0,wt=null,Me=M.next();de!==null&&!Me.done;ge++,Me=M.next()){de.index>ge?(wt=de,de=null):wt=de.sibling;var li=q(b,de,Me.value,J);if(li===null){de===null&&(de=wt);break}n&&de&&li.alternate===null&&r(b,de),N=f(li,N,ge),he===null?oe=li:he.sibling=li,he=li,de=wt}if(Me.done)return a(b,de),Xe&&qi(b,ge),oe;if(de===null){for(;!Me.done;ge++,Me=M.next())Me=Q(b,Me.value,J),Me!==null&&(N=f(Me,N,ge),he===null?oe=Me:he.sibling=Me,he=Me);return Xe&&qi(b,ge),oe}for(de=c(b,de);!Me.done;ge++,Me=M.next())Me=ee(de,b,ge,Me.value,J),Me!==null&&(n&&Me.alternate!==null&&de.delete(Me.key===null?ge:Me.key),N=f(Me,N,ge),he===null?oe=Me:he.sibling=Me,he=Me);return n&&de.forEach(function(sw){return r(b,sw)}),Xe&&qi(b,ge),oe}function at(b,N,M,J){if(typeof M=="object"&&M!==null&&M.type===k&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Le:e:{for(var oe=M.key,he=N;he!==null;){if(he.key===oe){if(oe=M.type,oe===k){if(he.tag===7){a(b,he.sibling),N=d(he,M.props.children),N.return=b,b=N;break e}}else if(he.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&fp(oe)===he.type){a(b,he.sibling),N=d(he,M.props),N.ref=oa(b,he,M),N.return=b,b=N;break e}a(b,he);break}else r(b,he);he=he.sibling}M.type===k?(N=es(M.props.children,b.mode,J,M.key),N.return=b,b=N):(J=au(M.type,M.key,M.props,null,b.mode,J),J.ref=oa(b,N,M),J.return=b,b=J)}return v(b);case xe:e:{for(he=M.key;N!==null;){if(N.key===he)if(N.tag===4&&N.stateNode.containerInfo===M.containerInfo&&N.stateNode.implementation===M.implementation){a(b,N.sibling),N=d(N,M.children||[]),N.return=b,b=N;break e}else{a(b,N);break}else r(b,N);N=N.sibling}N=Vh(M,b.mode,J),N.return=b,b=N}return v(b);case Nt:return he=M._init,at(b,N,he(M._payload),J)}if(st(M))return ie(b,N,M,J);if(ce(M))return se(b,N,M,J);Ml(b,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,N!==null&&N.tag===6?(a(b,N.sibling),N=d(N,M),N.return=b,b=N):(a(b,N),N=Dh(M,b.mode,J),N.return=b,b=N),v(b)):a(b,N)}return at}var Gs=pp(!0),mp=pp(!1),Fl=Jr(null),Ul=null,Ks=null,Bc=null;function $c(){Bc=Ks=Ul=null}function Hc(n){var r=Fl.current;Qe(Fl),n._currentValue=r}function Wc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Qs(n,r){Ul=n,Bc=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(qt=!0),n.firstContext=null)}function hn(n){var r=n._currentValue;if(Bc!==n)if(n={context:n,memoizedValue:r,next:null},Ks===null){if(Ul===null)throw Error(t(308));Ks=n,Ul.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return r}var Gi=null;function qc(n){Gi===null?Gi=[n]:Gi.push(n)}function gp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,qc(r)):(a.next=d.next,d.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ei=!1;function Gc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ti(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,a)}return d=c.interleaved,d===null?(r.next=r,qc(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,a)}function jl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zo(n,a)}}function _p(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function zl(n,r,a,c){var d=n.updateQueue;ei=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,v===null?f=F:v.next=F,v=C;var G=n.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=F:T.next=F,G.lastBaseUpdate=C))}if(f!==null){var Q=d.baseState;v=0,G=F=C=null,T=f;do{var q=T.lane,ee=T.eventTime;if((c&q)===q){G!==null&&(G=G.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ie=n,se=T;switch(q=r,ee=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){Q=ie.call(ee,Q,q);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,q=typeof ie=="function"?ie.call(ee,Q,q):ie,q==null)break e;Q=ne({},Q,q);break e;case 2:ei=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else ee={eventTime:ee,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(F=G=ee,C=Q):G=G.next=ee,v|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(G===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=G,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Yi|=v,n.lanes=v,n.memoizedState=Q}}function vp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var aa={},Gn=Jr(aa),la=Jr(aa),ua=Jr(aa);function Ki(n){if(n===aa)throw Error(t(174));return n}function Kc(n,r){switch(qe(ua,r),qe(la,n),qe(Gn,aa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ys(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ys(r,n)}Qe(Gn),qe(Gn,r)}function Ys(){Qe(Gn),Qe(la),Qe(ua)}function Ep(n){Ki(ua.current);var r=Ki(Gn.current),a=ys(r,n.type);r!==a&&(qe(la,n),qe(Gn,a))}function Qc(n){la.current===n&&(Qe(Gn),Qe(la))}var Ze=Jr(0);function Bl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Yc=[];function Jc(){for(var n=0;n<Yc.length;n++)Yc[n]._workInProgressVersionPrimary=null;Yc.length=0}var $l=De.ReactCurrentDispatcher,Xc=De.ReactCurrentBatchConfig,Qi=0,et=null,pt=null,vt=null,Hl=!1,ca=!1,ha=0,CE=0;function Ot(){throw Error(t(321))}function Zc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!wn(n[a],r[a]))return!1;return!0}function eh(n,r,a,c,d,f){if(Qi=f,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$l.current=n===null||n.memoizedState===null?NE:DE,n=a(c,d),ca){f=0;do{if(ca=!1,ha=0,25<=f)throw Error(t(301));f+=1,vt=pt=null,r.updateQueue=null,$l.current=VE,n=a(c,d)}while(ca)}if($l.current=Gl,r=pt!==null&&pt.next!==null,Qi=0,vt=pt=et=null,Hl=!1,r)throw Error(t(300));return n}function th(){var n=ha!==0;return ha=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=n:vt=vt.next=n,vt}function dn(){if(pt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=vt===null?et.memoizedState:vt.next;if(r!==null)vt=r,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?et.memoizedState=vt=n:vt=vt.next=n}return vt}function da(n,r){return typeof r=="function"?r(n):r}function nh(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var T=v=null,C=null,F=f;do{var G=F.lane;if((Qi&G)===G)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=Q,v=c):C=C.next=Q,et.lanes|=G,Yi|=G}F=F.next}while(F!==null&&F!==f);C===null?v=c:C.next=T,wn(c,r.memoizedState)||(qt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,Yi|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function rh(n){var r=dn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);wn(f,r.memoizedState)||(qt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function wp(){}function Tp(n,r){var a=et,c=dn(),d=r(),f=!wn(c.memoizedState,d);if(f&&(c.memoizedState=d,qt=!0),c=c.queue,ih(Ap.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,fa(9,Sp.bind(null,a,c,d,r),void 0,null),Et===null)throw Error(t(349));(Qi&30)!==0||Ip(a,r,d)}return d}function Ip(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Sp(n,r,a,c){r.value=a,r.getSnapshot=c,Rp(r)&&Cp(n)}function Ap(n,r,a){return a(function(){Rp(r)&&Cp(n)})}function Rp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!wn(n,a)}catch{return!0}}function Cp(n){var r=vr(n,1);r!==null&&Rn(r,n,1,-1)}function Pp(n){var r=Kn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:n},r.queue=n,n=n.dispatch=xE.bind(null,et,n),[r.memoizedState,n]}function fa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function kp(){return dn().memoizedState}function Wl(n,r,a,c){var d=Kn();et.flags|=n,d.memoizedState=fa(1|r,a,void 0,c===void 0?null:c)}function ql(n,r,a,c){var d=dn();c=c===void 0?null:c;var f=void 0;if(pt!==null){var v=pt.memoizedState;if(f=v.destroy,c!==null&&Zc(c,v.deps)){d.memoizedState=fa(r,a,f,c);return}}et.flags|=n,d.memoizedState=fa(1|r,a,f,c)}function xp(n,r){return Wl(8390656,8,n,r)}function ih(n,r){return ql(2048,8,n,r)}function Np(n,r){return ql(4,2,n,r)}function Dp(n,r){return ql(4,4,n,r)}function Vp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Op(n,r,a){return a=a!=null?a.concat([n]):null,ql(4,4,Vp.bind(null,r,n),a)}function sh(){}function bp(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Zc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Lp(n,r){var a=dn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Zc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Mp(n,r,a){return(Qi&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=a):(wn(a,r)||(a=Uo(),et.lanes|=a,Yi|=a,n.baseState=!0),r)}function PE(n,r){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=Xc.transition;Xc.transition={};try{n(!1),r()}finally{Ne=a,Xc.transition=c}}function Fp(){return dn().memoizedState}function kE(n,r,a){var c=si(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Up(n))jp(r,a);else if(a=gp(n,r,a,c),a!==null){var d=$t();Rn(a,n,c,d),zp(a,r,c)}}function xE(n,r,a){var c=si(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Up(n))jp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,T=f(v,a);if(d.hasEagerState=!0,d.eagerState=T,wn(T,v)){var C=r.interleaved;C===null?(d.next=d,qc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=gp(n,r,d,c),a!==null&&(d=$t(),Rn(a,n,c,d),zp(a,r,c))}}function Up(n){var r=n.alternate;return n===et||r!==null&&r===et}function jp(n,r){ca=Hl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function zp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zo(n,a)}}var Gl={readContext:hn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},NE={readContext:hn,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:hn,useEffect:xp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Wl(4194308,4,Vp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Wl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Wl(4,2,n,r)},useMemo:function(n,r){var a=Kn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Kn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=kE.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:Pp,useDebugValue:sh,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=Pp(!1),r=n[0];return n=PE.bind(null,n[1]),Kn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=et,d=Kn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Et===null)throw Error(t(349));(Qi&30)!==0||Ip(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,xp(Ap.bind(null,c,f,n),[n]),c.flags|=2048,fa(9,Sp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Kn(),r=Et.identifierPrefix;if(Xe){var a=_r,c=yr;a=(c&~(1<<32-Xt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ha++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=CE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},DE={readContext:hn,useCallback:bp,useContext:hn,useEffect:ih,useImperativeHandle:Op,useInsertionEffect:Np,useLayoutEffect:Dp,useMemo:Lp,useReducer:nh,useRef:kp,useState:function(){return nh(da)},useDebugValue:sh,useDeferredValue:function(n){var r=dn();return Mp(r,pt.memoizedState,n)},useTransition:function(){var n=nh(da)[0],r=dn().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1},VE={readContext:hn,useCallback:bp,useContext:hn,useEffect:ih,useImperativeHandle:Op,useInsertionEffect:Np,useLayoutEffect:Dp,useMemo:Lp,useReducer:rh,useRef:kp,useState:function(){return rh(da)},useDebugValue:sh,useDeferredValue:function(n){var r=dn();return pt===null?r.memoizedState=n:Mp(r,pt.memoizedState,n)},useTransition:function(){var n=rh(da)[0],r=dn().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1};function In(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function oh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Kl={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=$t(),d=si(n),f=Er(c,d);f.payload=r,a!=null&&(f.callback=a),r=ti(n,f,d),r!==null&&(Rn(r,n,d,c),jl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=$t(),d=si(n),f=Er(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ti(n,f,d),r!==null&&(Rn(r,n,d,c),jl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=$t(),c=si(n),d=Er(a,c);d.tag=2,r!=null&&(d.callback=r),r=ti(n,d,c),r!==null&&(Rn(r,n,c,a),jl(r,n,c))}};function Bp(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!Zo(a,c)||!Zo(d,f):!0}function $p(n,r,a){var c=!1,d=Xr,f=r.contextType;return typeof f=="object"&&f!==null?f=hn(f):(d=Wt(r)?Hi:Vt.current,c=r.contextTypes,f=(c=c!=null)?$s(n,d):Xr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Kl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function Hp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Kl.enqueueReplaceState(r,r.state,null)}function ah(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Gc(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=hn(f):(f=Wt(r)?Hi:Vt.current,d.context=$s(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(oh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Kl.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Js(n,r){try{var a="",c=r;do a+=Ae(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function lh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function uh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var OE=typeof WeakMap=="function"?WeakMap:Map;function Wp(n,r,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){tu||(tu=!0,Sh=c),uh(n,r)},a}function qp(n,r,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){uh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){uh(n,r),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function Gp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new OE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=KE.bind(null,n,r,a),r.then(n,n))}function Kp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Qp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Er(-1,1),r.tag=2,ti(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var bE=De.ReactCurrentOwner,qt=!1;function Bt(n,r,a,c){r.child=n===null?mp(r,null,a,c):Gs(r,n.child,a,c)}function Yp(n,r,a,c,d){a=a.render;var f=r.ref;return Qs(r,d),c=eh(n,r,a,c,f,d),a=th(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Xe&&a&&Mc(r),r.flags|=1,Bt(n,r,c,d),r.child)}function Jp(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Nh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,Xp(n,r,f,c,d)):(n=au(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(v,c)&&n.ref===r.ref)return wr(n,r,d)}return r.flags|=1,n=ai(f,c),n.ref=r.ref,n.return=r,r.child=n}function Xp(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(Zo(f,c)&&n.ref===r.ref)if(qt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(qt=!0);else return r.lanes=n.lanes,wr(n,r,d)}return ch(n,r,a,c,d)}function Zp(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Zs,on),on|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(Zs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,qe(Zs,on),on|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,qe(Zs,on),on|=c;return Bt(n,r,d,a),r.child}function em(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function ch(n,r,a,c,d){var f=Wt(a)?Hi:Vt.current;return f=$s(r,f),Qs(r,d),a=eh(n,r,a,c,f,d),c=th(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Xe&&c&&Mc(r),r.flags|=1,Bt(n,r,a,d),r.child)}function tm(n,r,a,c,d){if(Wt(a)){var f=!0;Dl(r)}else f=!1;if(Qs(r,d),r.stateNode===null)Yl(n,r),$p(r,a,c),ah(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=hn(F):(F=Wt(a)?Hi:Vt.current,F=$s(r,F));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==F)&&Hp(r,v,c,F),ei=!1;var q=r.memoizedState;v.state=q,zl(r,c,v,d),C=r.memoizedState,T!==c||q!==C||Ht.current||ei?(typeof G=="function"&&(oh(r,a,G,c),C=r.memoizedState),(T=ei||Bp(r,a,T,c,q,C,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),v.props=c,v.state=C,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,yp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:In(r.type,T),v.props=F,Q=r.pendingProps,q=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=hn(C):(C=Wt(a)?Hi:Vt.current,C=$s(r,C));var ee=a.getDerivedStateFromProps;(G=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Q||q!==C)&&Hp(r,v,c,C),ei=!1,q=r.memoizedState,v.state=q,zl(r,c,v,d);var ie=r.memoizedState;T!==Q||q!==ie||Ht.current||ei?(typeof ee=="function"&&(oh(r,a,ee,c),ie=r.memoizedState),(F=ei||Bp(r,a,F,c,q,ie,C)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),v.props=c,v.state=ie,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return hh(n,r,a,c,f,d)}function hh(n,r,a,c,d,f){em(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&op(r,a,!1),wr(n,r,f);c=r.stateNode,bE.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Gs(r,n.child,null,f),r.child=Gs(r,null,T,f)):Bt(n,r,T,f),r.memoizedState=c.state,d&&op(r,a,!0),r.child}function nm(n){var r=n.stateNode;r.pendingContext?ip(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ip(n,r.context,!1),Kc(n,r.containerInfo)}function rm(n,r,a,c,d){return qs(),zc(d),r.flags|=256,Bt(n,r,a,c),r.child}var dh={dehydrated:null,treeContext:null,retryLane:0};function fh(n){return{baseLanes:n,cachePool:null,transitions:null}}function im(n,r,a){var c=r.pendingProps,d=Ze.current,f=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ze,d&1),n===null)return jc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=lu(v,c,0,null),n=es(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=fh(a),r.memoizedState=dh,n):ph(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return LE(n,r,v,c,T,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=ai(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=ai(T,f):(f=es(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?fh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=dh,c}return f=n.child,n=f.sibling,c=ai(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function ph(n,r){return r=lu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ql(n,r,a,c){return c!==null&&zc(c),Gs(r,n.child,null,a),n=ph(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function LE(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=lh(Error(t(422))),Ql(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=lu({mode:"visible",children:c.children},d,0,null),f=es(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Gs(r,n.child,null,v),r.child.memoizedState=fh(v),r.memoizedState=dh,f);if((r.mode&1)===0)return Ql(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,f=Error(t(419)),c=lh(f,c,void 0),Ql(n,r,v,c)}if(T=(v&n.childLanes)!==0,qt||T){if(c=Et,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,vr(n,d),Rn(c,n,d,-1))}return xh(),c=lh(Error(t(421))),Ql(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=QE.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,sn=Yr(d.nextSibling),rn=r,Xe=!0,Tn=null,n!==null&&(un[cn++]=yr,un[cn++]=_r,un[cn++]=Wi,yr=n.id,_r=n.overflow,Wi=r),r=ph(r,c.children),r.flags|=4096,r)}function sm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Wc(n.return,r,a)}function mh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function om(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(Bt(n,r,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sm(n,a,r);else if(n.tag===19)sm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ze,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),mh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}mh(r,!0,a,null,f);break;case"together":mh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Yi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ai(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ai(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function ME(n,r,a){switch(r.tag){case 3:nm(r),qs();break;case 5:Ep(r);break;case 1:Wt(r.type)&&Dl(r);break;case 4:Kc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Fl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ze,Ze.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?im(n,r,a):(qe(Ze,Ze.current&1),n=wr(n,r,a),n!==null?n.sibling:null);qe(Ze,Ze.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return om(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,Zp(n,r,a)}return wr(n,r,a)}var am,gh,lm,um;am=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gh=function(){},lm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Ki(Gn.current);var f=null;switch(a){case"input":d=ms(n,d),c=ms(n,c),f=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),f=[];break;case"textarea":d=Po(n,d),c=Po(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=kl)}_n(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(f||(f=[]),f.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(f=f||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&Ke("scroll",n),f||T===C||(f=[])):(f=f||[]).push(F,C))}a&&(f=f||[]).push("style",a);var F=f;(r.updateQueue=F)&&(r.flags|=4)}},um=function(n,r,a,c){a!==c&&(r.flags|=4)};function pa(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function FE(n,r,a){var c=r.pendingProps;switch(Fc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(r),null;case 1:return Wt(r.type)&&Nl(),bt(r),null;case 3:return c=r.stateNode,Ys(),Qe(Ht),Qe(Vt),Jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ll(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Tn!==null&&(Ch(Tn),Tn=null))),gh(n,r),bt(r),null;case 5:Qc(r);var d=Ki(ua.current);if(a=r.type,n!==null&&r.stateNode!=null)lm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return bt(r),null}if(n=Ki(Gn.current),Ll(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[qn]=r,c[ia]=f,n=(r.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<ta.length;d++)Ke(ta[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":el(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":ko(c,f),Ke("invalid",c)}_n(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var T=f[v];v==="children"?typeof T=="string"?c.textContent!==T&&(f.suppressHydrationWarning!==!0&&Pl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&Pl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":ps(c),Co(c,f,!0);break;case"textarea":ps(c),Or(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=kl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=xo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[qn]=r,n[ia]=c,am(n,r,!1,!1),r.stateNode=n;e:{switch(v=vs(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<ta.length;d++)Ke(ta[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":el(n,c),d=ms(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":ko(n,c),d=Po(n,c),Ke("invalid",n);break;default:d=c}_n(a,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var C=T[f];f==="style"?_s(n,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&nl(n,C)):f==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&ki(n,C):typeof C=="number"&&ki(n,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?C!=null&&f==="onScroll"&&Ke("scroll",n):C!=null&&me(n,f,C,v))}switch(a){case"input":ps(n),Co(n,c,!1);break;case"textarea":ps(n),Or(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Oe(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?yn(n,!!c.multiple,f,!1):c.defaultValue!=null&&yn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return bt(r),null;case 6:if(n&&r.stateNode!=null)um(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Ki(ua.current),Ki(Gn.current),Ll(r)){if(c=r.stateNode,a=r.memoizedProps,c[qn]=r,(f=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Pl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qn]=r,r.stateNode=c}return bt(r),null;case 13:if(Qe(Ze),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&sn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)dp(),qs(),r.flags|=98560,f=!1;else if(f=Ll(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[qn]=r}else qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bt(r),f=!1}else Tn!==null&&(Ch(Tn),Tn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ze.current&1)!==0?mt===0&&(mt=3):xh())),r.updateQueue!==null&&(r.flags|=4),bt(r),null);case 4:return Ys(),gh(n,r),n===null&&na(r.stateNode.containerInfo),bt(r),null;case 10:return Hc(r.type._context),bt(r),null;case 17:return Wt(r.type)&&Nl(),bt(r),null;case 19:if(Qe(Ze),f=r.memoizedState,f===null)return bt(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)pa(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Bl(n),v!==null){for(r.flags|=128,pa(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ze,Ze.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ge()>eo&&(r.flags|=128,c=!0,pa(f,!1),r.lanes=4194304)}else{if(!c)if(n=Bl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),pa(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Xe)return bt(r),null}else 2*Ge()-f.renderingStartTime>eo&&a!==1073741824&&(r.flags|=128,c=!0,pa(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ge(),r.sibling=null,a=Ze.current,qe(Ze,c?a&1|2:a&1),r):(bt(r),null);case 22:case 23:return kh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(on&1073741824)!==0&&(bt(r),r.subtreeFlags&6&&(r.flags|=8192)):bt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function UE(n,r){switch(Fc(r),r.tag){case 1:return Wt(r.type)&&Nl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ys(),Qe(Ht),Qe(Vt),Jc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Qc(r),null;case 13:if(Qe(Ze),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qe(Ze),null;case 4:return Ys(),null;case 10:return Hc(r.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var Jl=!1,Lt=!1,jE=typeof WeakSet=="function"?WeakSet:Set,re=null;function Xs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,r,c)}else a.current=null}function yh(n,r,a){try{a()}catch(c){it(n,r,c)}}var cm=!1;function zE(n,r){if(kc=dr,n=Bf(),wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,F=0,G=0,Q=n,q=null;t:for(;;){for(var ee;Q!==a||d!==0&&Q.nodeType!==3||(T=v+d),Q!==f||c!==0&&Q.nodeType!==3||(C=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ee=Q.firstChild)!==null;)q=Q,Q=ee;for(;;){if(Q===n)break t;if(q===a&&++F===d&&(T=v),q===f&&++G===c&&(C=v),(ee=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=ee}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:n,selectionRange:a},dr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,at=ie.memoizedState,b=r.stateNode,N=b.getSnapshotBeforeUpdate(r.elementType===r.type?se:In(r.type,se),at);b.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){it(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=cm,cm=!1,ie}function ma(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&yh(r,a,f)}d=d.next}while(d!==c)}}function Xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function _h(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function hm(n){var r=n.alternate;r!==null&&(n.alternate=null,hm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qn],delete r[ia],delete r[Oc],delete r[IE],delete r[SE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dm(n){return n.tag===5||n.tag===3||n.tag===4}function fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=kl));else if(c!==4&&(n=n.child,n!==null))for(vh(n,r,a),n=n.sibling;n!==null;)vh(n,r,a),n=n.sibling}function Eh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Eh(n,r,a),n=n.sibling;n!==null;)Eh(n,r,a),n=n.sibling}var Rt=null,Sn=!1;function ni(n,r,a){for(a=a.child;a!==null;)pm(n,r,a),a=a.sibling}function pm(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 5:Lt||Xs(a,r);case 6:var c=Rt,d=Sn;Rt=null,ni(n,r,a),Rt=c,Sn=d,Rt!==null&&(Sn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Sn?(n=Rt,a=a.stateNode,n.nodeType===8?Vc(n.parentNode,a):n.nodeType===1&&Vc(n,a),qr(n)):Vc(Rt,a.stateNode));break;case 4:c=Rt,d=Sn,Rt=a.stateNode.containerInfo,Sn=!0,ni(n,r,a),Rt=c,Sn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&yh(a,r,v),d=d.next}while(d!==c)}ni(n,r,a);break;case 1:if(!Lt&&(Xs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){it(a,r,T)}ni(n,r,a);break;case 21:ni(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,ni(n,r,a),Lt=c):ni(n,r,a);break;default:ni(n,r,a)}}function mm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new jE),r.forEach(function(c){var d=YE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function An(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:Rt=T.stateNode,Sn=!1;break e;case 3:Rt=T.stateNode.containerInfo,Sn=!0;break e;case 4:Rt=T.stateNode.containerInfo,Sn=!0;break e}T=T.return}if(Rt===null)throw Error(t(160));pm(f,v,d),Rt=null,Sn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){it(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)gm(r,n),r=r.sibling}function gm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(r,n),Qn(n),c&4){try{ma(3,n,n.return),Xl(3,n)}catch(se){it(n,n.return,se)}try{ma(5,n,n.return)}catch(se){it(n,n.return,se)}}break;case 1:An(r,n),Qn(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(An(r,n),Qn(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var d=n.stateNode;try{ki(d,"")}catch(se){it(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&gs(d,f),vs(T,v);var F=vs(T,f);for(v=0;v<C.length;v+=2){var G=C[v],Q=C[v+1];G==="style"?_s(d,Q):G==="dangerouslySetInnerHTML"?nl(d,Q):G==="children"?ki(d,Q):me(d,G,Q,F)}switch(T){case"input":Pi(d,f);break;case"textarea":tl(d,f);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ee=f.value;ee!=null?yn(d,!!f.multiple,ee,!1):q!==!!f.multiple&&(f.defaultValue!=null?yn(d,!!f.multiple,f.defaultValue,!0):yn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ia]=f}catch(se){it(n,n.return,se)}}break;case 6:if(An(r,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(se){it(n,n.return,se)}}break;case 3:if(An(r,n),Qn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{qr(r.containerInfo)}catch(se){it(n,n.return,se)}break;case 4:An(r,n),Qn(n);break;case 13:An(r,n),Qn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Ih=Ge())),c&4&&mm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||G,An(r,n),Lt=F):An(r,n),Qn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(re=n,G=n.child;G!==null;){for(Q=re=G;re!==null;){switch(q=re,ee=q.child,q.tag){case 0:case 11:case 14:case 15:ma(4,q,q.return);break;case 1:Xs(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){it(c,a,se)}}break;case 5:Xs(q,q.return);break;case 22:if(q.memoizedState!==null){vm(Q);continue}}ee!==null?(ee.return=q,re=ee):vm(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=Q.stateNode,C=Q.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Mr("display",v))}catch(se){it(n,n.return,se)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(se){it(n,n.return,se)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:An(r,n),Qn(n),c&4&&mm(n);break;case 21:break;default:An(r,n),Qn(n)}}function Qn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(dm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ki(d,""),c.flags&=-33);var f=fm(n);Eh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=fm(n);vh(n,T,v);break;default:throw Error(t(161))}}catch(C){it(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function BE(n,r,a){re=n,ym(n)}function ym(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Jl;if(!v){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Lt;T=Jl;var F=Lt;if(Jl=v,(Lt=C)&&!F)for(re=d;re!==null;)v=re,C=v.child,v.tag===22&&v.memoizedState!==null?Em(d):C!==null?(C.return=v,re=C):Em(d);for(;f!==null;)re=f,ym(f),f=f.sibling;re=d,Jl=T,Lt=F}_m(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,re=f):_m(n)}}function _m(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||Xl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:In(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&vp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}vp(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&qr(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&_h(r)}catch(q){it(r,r.return,q)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function vm(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function Em(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Xl(4,r)}catch(C){it(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){it(r,d,C)}}var f=r.return;try{_h(r)}catch(C){it(r,f,C)}break;case 5:var v=r.return;try{_h(r)}catch(C){it(r,v,C)}}}catch(C){it(r,r.return,C)}if(r===n){re=null;break}var T=r.sibling;if(T!==null){T.return=r.return,re=T;break}re=r.return}}var $E=Math.ceil,Zl=De.ReactCurrentDispatcher,wh=De.ReactCurrentOwner,fn=De.ReactCurrentBatchConfig,be=0,Et=null,ht=null,Ct=0,on=0,Zs=Jr(0),mt=0,ga=null,Yi=0,eu=0,Th=0,ya=null,Gt=null,Ih=0,eo=1/0,Tr=null,tu=!1,Sh=null,ri=null,nu=!1,ii=null,ru=0,_a=0,Ah=null,iu=-1,su=0;function $t(){return(be&6)!==0?Ge():iu!==-1?iu:iu=Ge()}function si(n){return(n.mode&1)===0?1:(be&2)!==0&&Ct!==0?Ct&-Ct:RE.transition!==null?(su===0&&(su=Uo()),su):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:ks(n.type)),n)}function Rn(n,r,a,c){if(50<_a)throw _a=0,Ah=null,Error(t(185));Fi(n,a,c),((be&2)===0||n!==Et)&&(n===Et&&((be&2)===0&&(eu|=a),mt===4&&oi(n,Ct)),Kt(n,c),a===1&&be===0&&(r.mode&1)===0&&(eo=Ge()+500,Vl&&Zr()))}function Kt(n,r){var a=n.callbackNode;Mi(n,r);var c=ur(n,n===Et?Ct:0);if(c===0)a!==null&&Ts(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Ts(a),r===1)n.tag===0?AE(Tm.bind(null,n)):ap(Tm.bind(null,n)),wE(function(){(be&6)===0&&Zr()}),a=null;else{switch(Ln(c)){case 1:a=Is;break;case 4:a=Lo;break;case 16:a=Vi;break;case 536870912:a=Ss;break;default:a=Vi}a=xm(a,wm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function wm(n,r){if(iu=-1,su=0,(be&6)!==0)throw Error(t(327));var a=n.callbackNode;if(to()&&n.callbackNode!==a)return null;var c=ur(n,n===Et?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=ou(n,c);else{r=c;var d=be;be|=2;var f=Sm();(Et!==n||Ct!==r)&&(Tr=null,eo=Ge()+500,Xi(n,r));do try{qE();break}catch(T){Im(n,T)}while(!0);$c(),Zl.current=f,be=d,ht!==null?r=0:(Et=null,Ct=0,r=mt)}if(r!==0){if(r===2&&(d=Fo(n),d!==0&&(c=d,r=Rh(n,d))),r===1)throw a=ga,Xi(n,0),oi(n,c),Kt(n,Ge()),a;if(r===6)oi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!HE(d)&&(r=ou(n,c),r===2&&(f=Fo(n),f!==0&&(c=f,r=Rh(n,f))),r===1))throw a=ga,Xi(n,0),oi(n,c),Kt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Zi(n,Gt,Tr);break;case 3:if(oi(n,c),(c&130023424)===c&&(r=Ih+500-Ge(),10<r)){if(ur(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Dc(Zi.bind(null,n,Gt,Tr),r);break}Zi(n,Gt,Tr);break;case 4:if(oi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-Xt(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*$E(c/1960))-c,10<c){n.timeoutHandle=Dc(Zi.bind(null,n,Gt,Tr),c);break}Zi(n,Gt,Tr);break;case 5:Zi(n,Gt,Tr);break;default:throw Error(t(329))}}}return Kt(n,Ge()),n.callbackNode===a?wm.bind(null,n):null}function Rh(n,r){var a=ya;return n.current.memoizedState.isDehydrated&&(Xi(n,r).flags|=256),n=ou(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Ch(r)),n}function Ch(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function HE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!wn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oi(n,r){for(r&=~Th,r&=~eu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Xt(r),c=1<<a;n[a]=-1,r&=~c}}function Tm(n){if((be&6)!==0)throw Error(t(327));to();var r=ur(n,0);if((r&1)===0)return Kt(n,Ge()),null;var a=ou(n,r);if(n.tag!==0&&a===2){var c=Fo(n);c!==0&&(r=c,a=Rh(n,c))}if(a===1)throw a=ga,Xi(n,0),oi(n,r),Kt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Zi(n,Gt,Tr),Kt(n,Ge()),null}function Ph(n,r){var a=be;be|=1;try{return n(r)}finally{be=a,be===0&&(eo=Ge()+500,Vl&&Zr())}}function Ji(n){ii!==null&&ii.tag===0&&(be&6)===0&&to();var r=be;be|=1;var a=fn.transition,c=Ne;try{if(fn.transition=null,Ne=1,n)return n()}finally{Ne=c,fn.transition=a,be=r,(be&6)===0&&Zr()}}function kh(){on=Zs.current,Qe(Zs)}function Xi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,EE(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(Fc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Nl();break;case 3:Ys(),Qe(Ht),Qe(Vt),Jc();break;case 5:Qc(c);break;case 4:Ys();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Hc(c.type._context);break;case 22:case 23:kh()}a=a.return}if(Et=n,ht=n=ai(n.current,null),Ct=on=r,mt=0,ga=null,Th=eu=Yi=0,Gt=ya=null,Gi!==null){for(r=0;r<Gi.length;r++)if(a=Gi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Gi=null}return n}function Im(n,r){do{var a=ht;try{if($c(),$l.current=Gl,Hl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Hl=!1}if(Qi=0,vt=pt=et=null,ca=!1,ha=0,wh.current=null,a===null||a.return===null){mt=1,ga=r,ht=null;break}e:{var f=n,v=a.return,T=a,C=r;if(r=Ct,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,G=T,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var q=G.alternate;q?(G.updateQueue=q.updateQueue,G.memoizedState=q.memoizedState,G.lanes=q.lanes):(G.updateQueue=null,G.memoizedState=null)}var ee=Kp(v);if(ee!==null){ee.flags&=-257,Qp(ee,v,T,f,r),ee.mode&1&&Gp(f,F,r),r=ee,C=F;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(C),r.updateQueue=se}else ie.add(C);break e}else{if((r&1)===0){Gp(f,F,r),xh();break e}C=Error(t(426))}}else if(Xe&&T.mode&1){var at=Kp(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Qp(at,v,T,f,r),zc(Js(C,T));break e}}f=C=Js(C,T),mt!==4&&(mt=2),ya===null?ya=[f]:ya.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var b=Wp(f,C,r);_p(f,b);break e;case 1:T=C;var N=f.type,M=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ri===null||!ri.has(M)))){f.flags|=65536,r&=-r,f.lanes|=r;var J=qp(f,T,r);_p(f,J);break e}}f=f.return}while(f!==null)}Rm(a)}catch(oe){r=oe,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Sm(){var n=Zl.current;return Zl.current=Gl,n===null?Gl:n}function xh(){(mt===0||mt===3||mt===2)&&(mt=4),Et===null||(Yi&268435455)===0&&(eu&268435455)===0||oi(Et,Ct)}function ou(n,r){var a=be;be|=2;var c=Sm();(Et!==n||Ct!==r)&&(Tr=null,Xi(n,r));do try{WE();break}catch(d){Im(n,d)}while(!0);if($c(),be=a,Zl.current=c,ht!==null)throw Error(t(261));return Et=null,Ct=0,mt}function WE(){for(;ht!==null;)Am(ht)}function qE(){for(;ht!==null&&!Di();)Am(ht)}function Am(n){var r=km(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?Rm(n):ht=r,wh.current=null}function Rm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=FE(a,r,on),a!==null){ht=a;return}}else{if(a=UE(a,r),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ht=null;return}}if(r=r.sibling,r!==null){ht=r;return}ht=r=n}while(r!==null);mt===0&&(mt=5)}function Zi(n,r,a){var c=Ne,d=fn.transition;try{fn.transition=null,Ne=1,GE(n,r,a,c)}finally{fn.transition=d,Ne=c}return null}function GE(n,r,a,c){do to();while(ii!==null);if((be&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(gc(n,f),n===Et&&(ht=Et=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nu||(nu=!0,xm(Vi,function(){return to(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=fn.transition,fn.transition=null;var v=Ne;Ne=1;var T=be;be|=4,wh.current=null,zE(n,a),gm(a,n),fE(xc),dr=!!kc,xc=kc=null,n.current=a,BE(a),lr(),be=T,Ne=v,fn.transition=f}else n.current=a;if(nu&&(nu=!1,ii=n,ru=d),f=n.pendingLanes,f===0&&(ri=null),fl(a.stateNode),Kt(n,Ge()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tu)throw tu=!1,n=Sh,Sh=null,n;return(ru&1)!==0&&n.tag!==0&&to(),f=n.pendingLanes,(f&1)!==0?n===Ah?_a++:(_a=0,Ah=n):_a=0,Zr(),null}function to(){if(ii!==null){var n=Ln(ru),r=fn.transition,a=Ne;try{if(fn.transition=null,Ne=16>n?16:n,ii===null)var c=!1;else{if(n=ii,ii=null,ru=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,re=n.current;re!==null;){var f=re,v=f.child;if((re.flags&16)!==0){var T=f.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(re=F;re!==null;){var G=re;switch(G.tag){case 0:case 11:case 15:ma(8,G,f)}var Q=G.child;if(Q!==null)Q.return=G,re=Q;else for(;re!==null;){G=re;var q=G.sibling,ee=G.return;if(hm(G),G===F){re=null;break}if(q!==null){q.return=ee,re=q;break}re=ee}}}var ie=f.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var at=se.sibling;se.sibling=null,se=at}while(se!==null)}}re=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,re=v;else e:for(;re!==null;){if(f=re,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:ma(9,f,f.return)}var b=f.sibling;if(b!==null){b.return=f.return,re=b;break e}re=f.return}}var N=n.current;for(re=N;re!==null;){v=re;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,re=M;else e:for(v=N;re!==null;){if(T=re,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Xl(9,T)}}catch(oe){it(T,T.return,oe)}if(T===v){re=null;break e}var J=T.sibling;if(J!==null){J.return=T.return,re=J;break e}re=T.return}}if(be=d,Zr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Oi,n)}catch{}c=!0}return c}finally{Ne=a,fn.transition=r}}return!1}function Cm(n,r,a){r=Js(a,r),r=Wp(n,r,1),n=ti(n,r,1),r=$t(),n!==null&&(Fi(n,1,r),Kt(n,r))}function it(n,r,a){if(n.tag===3)Cm(n,n,a);else for(;r!==null;){if(r.tag===3){Cm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){n=Js(a,n),n=qp(r,n,1),r=ti(r,n,1),n=$t(),r!==null&&(Fi(r,1,n),Kt(r,n));break}}r=r.return}}function KE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Ct&a)===a&&(mt===4||mt===3&&(Ct&130023424)===Ct&&500>Ge()-Ih?Xi(n,0):Th|=a),Kt(n,r)}function Pm(n,r){r===0&&((n.mode&1)===0?r=1:(r=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var a=$t();n=vr(n,r),n!==null&&(Fi(n,r,a),Kt(n,a))}function QE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Pm(n,a)}function YE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Pm(n,a)}var km;km=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)qt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return qt=!1,ME(n,r,a);qt=(n.flags&131072)!==0}else qt=!1,Xe&&(r.flags&1048576)!==0&&lp(r,bl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Yl(n,r),n=r.pendingProps;var d=$s(r,Vt.current);Qs(r,a),d=eh(null,r,c,n,d,a);var f=th();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(f=!0,Dl(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Gc(r),d.updater=Kl,r.stateNode=d,d._reactInternals=r,ah(r,c,n,a),r=hh(null,r,c,!0,f,a)):(r.tag=0,Xe&&f&&Mc(r),Bt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Yl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=XE(c),n=In(c,n),d){case 0:r=ch(null,r,c,n,a);break e;case 1:r=tm(null,r,c,n,a);break e;case 11:r=Yp(null,r,c,n,a);break e;case 14:r=Jp(null,r,c,In(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),ch(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),tm(n,r,c,d,a);case 3:e:{if(nm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,yp(n,r),zl(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Js(Error(t(423)),r),r=rm(n,r,c,a,d);break e}else if(c!==d){d=Js(Error(t(424)),r),r=rm(n,r,c,a,d);break e}else for(sn=Yr(r.stateNode.containerInfo.firstChild),rn=r,Xe=!0,Tn=null,a=mp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qs(),c===d){r=wr(n,r,a);break e}Bt(n,r,c,a)}r=r.child}return r;case 5:return Ep(r),n===null&&jc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Nc(c,d)?v=null:f!==null&&Nc(c,f)&&(r.flags|=32),em(n,r),Bt(n,r,v,a),r.child;case 6:return n===null&&jc(r),null;case 13:return im(n,r,a);case 4:return Kc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Gs(r,null,c,a):Bt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),Yp(n,r,c,d,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,qe(Fl,c._currentValue),c._currentValue=v,f!==null)if(wn(f.value,v)){if(f.children===d.children&&!Ht.current){r=wr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){v=f.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(f.tag===1){C=Er(-1,a&-a),C.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?C.next=C:(C.next=G.next,G.next=C),F.pending=C}}f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Wc(f.return,a,r),T.lanes|=a;break}C=C.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),Wc(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Bt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Qs(r,a),d=hn(d),c=c(d),r.flags|=1,Bt(n,r,c,a),r.child;case 14:return c=r.type,d=In(c,r.pendingProps),d=In(c.type,d),Jp(n,r,c,d,a);case 15:return Xp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:In(c,d),Yl(n,r),r.tag=1,Wt(c)?(n=!0,Dl(r)):n=!1,Qs(r,a),$p(r,c,d),ah(r,c,d,a),hh(null,r,c,!0,n,a);case 19:return om(n,r,a);case 22:return Zp(n,r,a)}throw Error(t(156,r.tag))};function xm(n,r){return bo(n,r)}function JE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,r,a,c){return new JE(n,r,a,c)}function Nh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function XE(n){if(typeof n=="function")return Nh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===_t)return 14}return 2}function ai(n,r){var a=n.alternate;return a===null?(a=pn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function au(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")Nh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return es(a.children,d,f,r);case S:v=8,d|=8;break;case R:return n=pn(12,a,r,d|2),n.elementType=R,n.lanes=f,n;case A:return n=pn(13,a,r,d),n.elementType=A,n.lanes=f,n;case We:return n=pn(19,a,r,d),n.elementType=We,n.lanes=f,n;case Je:return lu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:v=10;break e;case x:v=9;break e;case O:v=11;break e;case _t:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function es(n,r,a,c){return n=pn(7,n,c,r),n.lanes=a,n}function lu(n,r,a,c){return n=pn(22,n,c,r),n.elementType=Je,n.lanes=a,n.stateNode={isHidden:!1},n}function Dh(n,r,a){return n=pn(6,n,null,r),n.lanes=a,n}function Vh(n,r,a){return r=pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ZE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Oh(n,r,a,c,d,f,v,T,C){return n=new ZE(n,r,a,T,C),r===1?(r=1,f===!0&&(r|=8)):r=0,f=pn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(f),n}function ew(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Nm(n){if(!n)return Xr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return sp(n,a,r)}return r}function Dm(n,r,a,c,d,f,v,T,C){return n=Oh(a,c,!0,n,d,f,v,T,C),n.context=Nm(null),a=n.current,c=$t(),d=si(a),f=Er(c,d),f.callback=r??null,ti(a,f,d),n.current.lanes=d,Fi(n,d,c),Kt(n,c),n}function uu(n,r,a,c){var d=r.current,f=$t(),v=si(d);return a=Nm(a),r.context===null?r.context=a:r.pendingContext=a,r=Er(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ti(d,r,v),n!==null&&(Rn(n,d,v,f),jl(n,d,v)),v}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function bh(n,r){Vm(n,r),(n=n.alternate)&&Vm(n,r)}function tw(){return null}var Om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lh(n){this._internalRoot=n}hu.prototype.render=Lh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));uu(n,r,null,null)},hu.prototype.unmount=Lh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ji(function(){uu(null,n,null,null)}),r[mr]=null}};function hu(n){this._internalRoot=n}hu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ho();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Zt.length&&r!==0&&r<Zt[a].priority;a++);Zt.splice(a,0,n),a===0&&Cs(n)}};function Mh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function nw(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var F=cu(v);f.call(F)}}var v=Dm(r,c,n,0,null,!1,!1,"",bm);return n._reactRootContainer=v,n[mr]=v.current,na(n.nodeType===8?n.parentNode:n),Ji(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=cu(C);T.call(F)}}var C=Oh(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=C,n[mr]=C.current,na(n.nodeType===8?n.parentNode:n),Ji(function(){uu(r,C,a,c)}),C}function fu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var T=d;d=function(){var C=cu(v);T.call(C)}}uu(r,v,n,d)}else v=nw(a,r,n,d,c);return cu(v)}Bo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ue(r.pendingLanes);a!==0&&(zo(r,a|1),Kt(r,Ge()),(be&6)===0&&(eo=Ge()+500,Zr()))}break;case 13:Ji(function(){var c=vr(n,1);if(c!==null){var d=$t();Rn(c,n,1,d)}}),bh(n,1)}},As=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=$t();Rn(r,n,134217728,a)}bh(n,134217728)}},$o=function(n){if(n.tag===13){var r=si(n),a=vr(n,r);if(a!==null){var c=$t();Rn(a,n,r,c)}bh(n,r)}},Ho=function(){return Ne},Wo=function(n,r){var a=Ne;try{return Ne=n,r()}finally{Ne=a}},sr=function(n,r,a){switch(r){case"input":if(Pi(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=xl(c);if(!d)throw Error(t(90));Ro(c),Pi(c,d)}}}break;case"textarea":tl(n,a);break;case"select":r=a.value,r!=null&&yn(n,!!a.multiple,r,!1)}},il=Ph,sl=Ji;var rw={usingClientEntryPoint:!1,Events:[sa,zs,xl,Ur,jr,Ph]},va={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iw={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:De.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dl(n),n===null?null:n.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Oi=pu.inject(iw),Jt=pu}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(r))throw Error(t(200));return ew(n,r,null,a)},Qt.createRoot=function(n,r){if(!Mh(n))throw Error(t(299));var a=!1,c="",d=Om;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Oh(n,1,!1,null,null,a,!1,c,d),n[mr]=r.current,na(n.nodeType===8?n.parentNode:n),new Lh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=dl(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Ji(n)},Qt.hydrate=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!Mh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Dm(r,null,n,1,a??null,d,!1,f,v),n[mr]=r.current,na(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new hu(r)},Qt.render=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!du(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){fu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Qt.unstable_batchedUpdates=Ph,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fu(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var $m;function fw(){if($m)return jh.exports;$m=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),jh.exports=dw(),jh.exports}var Hm;function pw(){if(Hm)return mu;Hm=1;var i=fw();return mu.createRoot=i.createRoot,mu.hydrateRoot=i.hydrateRoot,mu}var mw=pw();const gw=bd(mw),yw=()=>{};var Wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},_w=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Ty={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,w=u>>2,I=(u&3)<<4|m>>4;let P=(m&15)<<2|_>>6,z=_&63;g||(z=64,h||(P=64)),s.push(t[w],t[I],t[P],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(wy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):_w(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const I=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||I==null)throw new vw;const P=u<<2|m>>4;if(s.push(P),_!==64){const z=m<<4&240|_>>2;if(s.push(z),I!==64){const Y=_<<6&192|I;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ew=function(i){const e=wy(i);return Ty.encodeByteArray(e,!0)},Vu=function(i){return Ew(i).replace(/\./g,"")},Iy=function(i){try{return Ty.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tw=()=>ww().__FIREBASE_DEFAULTS__,Iw=()=>{if(typeof process>"u"||typeof Wm>"u")return;const i=Wm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Sw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Iy(i[1]);return e&&JSON.parse(e)},Xu=()=>{try{return yw()||Tw()||Iw()||Sw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Sy=i=>{var e,t;return(t=(e=Xu())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},Aw=i=>{const e=Sy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ay=()=>{var i;return(i=Xu())==null?void 0:i.config},Ry=i=>{var e;return(e=Xu())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function vo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Cw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Vu(JSON.stringify(t)),Vu(JSON.stringify(h)),""].join(".")}const Ra={};function Pw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ra))Ra[e]?i.emulator.push(e):i.prod.push(e);return i}function kw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let qm=!1;function Py(i,e){if(typeof window>"u"||typeof document>"u"||!vo(window.location.host)||Ra[i]===e||Ra[i]||qm)return;Ra[i]=e;function t(P){return`__firebase__banner__${P}`}const s="__firebase__banner",u=Pw().prod.length>0;function h(){const P=document.getElementById(s);P&&P.remove()}function m(P){P.style.display="flex",P.style.background="#7faaf0",P.style.position="fixed",P.style.bottom="5px",P.style.left="5px",P.style.padding=".5em",P.style.borderRadius="5px",P.style.alignItems="center"}function g(P,z){P.setAttribute("width","24"),P.setAttribute("id",z),P.setAttribute("height","24"),P.setAttribute("viewBox","0 0 24 24"),P.setAttribute("fill","none"),P.style.marginLeft="-6px"}function _(){const P=document.createElement("span");return P.style.cursor="pointer",P.style.marginLeft="16px",P.style.fontSize="24px",P.innerHTML=" &times;",P.onclick=()=>{qm=!0,h()},P}function w(P,z){P.setAttribute("id",z),P.innerText="Learn more",P.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",P.setAttribute("target","__blank"),P.style.paddingLeft="5px",P.style.textDecoration="underline"}function I(){const P=kw(s),z=t("text"),Y=document.getElementById(z)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),ae=t("preprendIcon"),ue=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(P.created){const me=P.element;m(me),w(B,H);const De=_();g(ue,ae),me.append(ue,Y,B,De),document.body.appendChild(me)}u?(Y.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function Nw(){var e;const i=(e=Xu())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Ow(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bw(){const i=jt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Lw(){return!Nw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mw(){try{return typeof indexedDB=="object"}catch{return!1}}function Fw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="FirebaseError";class Dr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Uw,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?jw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Dr(o,m,s)}}function jw(i,e){return i.replace(zw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const zw=/\{\$([^}]+)}/g;function Bw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function is(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Gm(u)&&Gm(h)){if(!is(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Gm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $w(i,e){const t=new Hw(i,e);return t.subscribe.bind(t)}class Hw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ww(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=$h),o.error===void 0&&(o.error=$h),o.complete===void 0&&(o.complete=$h);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ww(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function $h(){}/**
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
 */function Nn(i){return i&&i._delegate?i._delegate:i}class ss{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class qw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Rw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kw(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gw(i){return i===ts?void 0:i}function Kw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const Yw={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Jw=Ce.INFO,Xw={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},Zw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Xw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Md{constructor(e){this.name=e,this._logLevel=Jw,this._logHandler=Zw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const eT=(i,e)=>e.some(t=>i instanceof t);let Km,Qm;function tT(){return Km||(Km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nT(){return Qm||(Qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ky=new WeakMap,ad=new WeakMap,xy=new WeakMap,Hh=new WeakMap,Fd=new WeakMap;function rT(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(mi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ky.set(t,i)}).catch(()=>{}),Fd.set(e,i),e}function iT(i){if(ad.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});ad.set(i,e)}let ld={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ad.get(i);if(e==="objectStoreNames")return i.objectStoreNames||xy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function sT(i){ld=i(ld)}function oT(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Wh(this),e,...t);return xy.set(s,e.sort?e.sort():[e]),mi(s)}:nT().includes(i)?function(...e){return i.apply(Wh(this),e),mi(ky.get(this))}:function(...e){return mi(i.apply(Wh(this),e))}}function aT(i){return typeof i=="function"?oT(i):(i instanceof IDBTransaction&&iT(i),eT(i,tT())?new Proxy(i,ld):i)}function mi(i){if(i instanceof IDBRequest)return rT(i);if(Hh.has(i))return Hh.get(i);const e=aT(i);return e!==i&&(Hh.set(i,e),Fd.set(e,i)),e}const Wh=i=>Fd.get(i);function lT(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=mi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(mi(h.result),g.oldVersion,g.newVersion,mi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const uT=["get","getKey","getAll","getAllKeys","count"],cT=["put","add","delete","clear"],qh=new Map;function Ym(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(qh.get(e))return qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=cT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||uT.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return qh.set(e,u),u}sT(i=>({...i,get:(e,t,s)=>Ym(e,t)||i.get(e,t,s),has:(e,t)=>!!Ym(e,t)||i.has(e,t)}));/**
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
 */class hT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dT(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ud="@firebase/app",Jm="0.14.9";/**
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
 */const Cr=new Md("@firebase/app"),fT="@firebase/app-compat",pT="@firebase/analytics-compat",mT="@firebase/analytics",gT="@firebase/app-check-compat",yT="@firebase/app-check",_T="@firebase/auth",vT="@firebase/auth-compat",ET="@firebase/database",wT="@firebase/data-connect",TT="@firebase/database-compat",IT="@firebase/functions",ST="@firebase/functions-compat",AT="@firebase/installations",RT="@firebase/installations-compat",CT="@firebase/messaging",PT="@firebase/messaging-compat",kT="@firebase/performance",xT="@firebase/performance-compat",NT="@firebase/remote-config",DT="@firebase/remote-config-compat",VT="@firebase/storage",OT="@firebase/storage-compat",bT="@firebase/firestore",LT="@firebase/ai",MT="@firebase/firestore-compat",FT="firebase",UT="12.10.0";/**
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
 */const cd="[DEFAULT]",jT={[ud]:"fire-core",[fT]:"fire-core-compat",[mT]:"fire-analytics",[pT]:"fire-analytics-compat",[yT]:"fire-app-check",[gT]:"fire-app-check-compat",[_T]:"fire-auth",[vT]:"fire-auth-compat",[ET]:"fire-rtdb",[wT]:"fire-data-connect",[TT]:"fire-rtdb-compat",[IT]:"fire-fn",[ST]:"fire-fn-compat",[AT]:"fire-iid",[RT]:"fire-iid-compat",[CT]:"fire-fcm",[PT]:"fire-fcm-compat",[kT]:"fire-perf",[xT]:"fire-perf-compat",[NT]:"fire-rc",[DT]:"fire-rc-compat",[VT]:"fire-gcs",[OT]:"fire-gcs-compat",[bT]:"fire-fst",[MT]:"fire-fst-compat",[LT]:"fire-vertex","fire-js":"fire-js",[FT]:"fire-js-all"};/**
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
 */const Ou=new Map,zT=new Map,hd=new Map;function Xm(i,e){try{i.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function fo(i){const e=i.name;if(hd.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;hd.set(e,i);for(const t of Ou.values())Xm(t,i);for(const t of zT.values())Xm(t,i);return!0}function Ud(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Cn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const BT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new Ha("app","Firebase",BT);/**
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
 */class $T{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
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
 */const Eo=UT;function Ny(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:cd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=Ay()),!t)throw gi.create("no-options");const u=Ou.get(o);if(u){if(is(t,u.options)&&is(s,u.config))return u;throw gi.create("duplicate-app",{appName:o})}const h=new Qw(o);for(const g of hd.values())h.addComponent(g);const m=new $T(t,s,h);return Ou.set(o,m),m}function Dy(i=cd){const e=Ou.get(i);if(!e&&i===cd&&Ay())return Ny();if(!e)throw gi.create("no-app",{appName:i});return e}function yi(i,e,t){let s=jT[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(h.join(" "));return}fo(new ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const HT="firebase-heartbeat-database",WT=1,Va="firebase-heartbeat-store";let Gh=null;function Vy(){return Gh||(Gh=lT(HT,WT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Va)}catch(t){console.warn(t)}}}}).catch(i=>{throw gi.create("idb-open",{originalErrorMessage:i.message})})),Gh}async function qT(i){try{const t=(await Vy()).transaction(Va),s=await t.objectStore(Va).get(Oy(i));return await t.done,s}catch(e){if(e instanceof Dr)Cr.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function Zm(i,e){try{const s=(await Vy()).transaction(Va,"readwrite");await s.objectStore(Va).put(e,Oy(i)),await s.done}catch(t){if(t instanceof Dr)Cr.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(s.message)}}}function Oy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const GT=1024,KT=30;class QT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new JT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=eg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>KT){const h=XT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eg(),{heartbeatsToSend:s,unsentEntries:o}=YT(this._heartbeatsCache.heartbeats),u=Vu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Cr.warn(t),""}}}function eg(){return new Date().toISOString().substring(0,10)}function YT(i,e=GT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),tg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),tg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class JT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mw()?Fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tg(i){return Vu(JSON.stringify({version:2,heartbeats:i})).length}function XT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function ZT(i){fo(new ss("platform-logger",e=>new hT(e),"PRIVATE")),fo(new ss("heartbeat",e=>new QT(e),"PRIVATE")),yi(ud,Jm,i),yi(ud,Jm,"esm2020"),yi("fire-js","")}ZT("");function by(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const e0=by,Ly=new Ha("auth","Firebase",by());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Md("@firebase/auth");function t0(i,...e){bu.logLevel<=Ce.WARN&&bu.warn(`Auth (${Eo}): ${i}`,...e)}function Iu(i,...e){bu.logLevel<=Ce.ERROR&&bu.error(`Auth (${Eo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(i,...e){throw jd(i,...e)}function Xn(i,...e){return jd(i,...e)}function My(i,e,t){const s={...e0(),[e]:t};return new Ha("auth","Firebase",s).create(e,{appName:i.name})}function _i(i){return My(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Ly.create(i,...e)}function ye(i,e,...t){if(!i)throw jd(e,...t)}function Ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Iu(e),new Error(e)}function kr(i,e){i||Ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function n0(){return ng()==="http:"||ng()==="https:"}function ng(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n0()||Vw()||"connection"in navigator)?navigator.onLine:!0}function i0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=xw()||Ow()}get(){return r0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(i,e){kr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],a0=new qa(3e4,6e4);function Zu(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function wo(i,e,t,s,o={}){return Uy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Wa({key:i.config.apiKey,...h}).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:g,...u};return Dw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&vo(i.emulatorConfig.host)&&(_.credentials="include"),Fy.fetch()(await zy(i,i.config.apiHost,t,m),_)})}async function Uy(i,e,t){i._canInitEmulator=!1;const s={...s0,...e};try{const o=new l0(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw gu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw gu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw My(i,w,_);Pr(i,w)}}catch(o){if(o instanceof Dr)throw o;Pr(i,"network-request-failed",{message:String(o)})}}async function jy(i,e,t,s,o={}){const u=await wo(i,e,t,s,o);return"mfaPendingCredential"in u&&Pr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function zy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?zd(i.config,o):`${i.config.apiScheme}://${o}`;return o0.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class l0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Xn(this.auth,"network-request-failed")),a0.get())})}}function gu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Xn(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(i,e){return wo(i,"POST","/v1/accounts:delete",e)}async function Lu(i,e){return wo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c0(i,e=!1){const t=Nn(i),s=await t.getIdToken(e),o=Bd(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ca(Kh(o.auth_time)),issuedAtTime:Ca(Kh(o.iat)),expirationTime:Ca(Kh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Kh(i){return Number(i)*1e3}function Bd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Iy(t);return o?JSON.parse(o):(Iu("Failed to decode base64 JWT payload"),null)}catch(o){return Iu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function rg(i){const e=Bd(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Dr&&h0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function h0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mu(i){var I;const e=i.auth,t=await i.getIdToken(),s=await Oa(i,Lu(e,{idToken:t}));ye(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(I=o.providerUserInfo)!=null&&I.length?By(o.providerUserInfo):[],h=p0(i.providerData,u),m=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new fd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,w)}async function f0(i){const e=Nn(i);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p0(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function By(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(i,e){const t=await Uy(i,{},async()=>{const s=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await zy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&vo(i.emulatorConfig.host)&&(g.credentials="include"),Fy.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function g0(i,e){return wo(i,"POST","/v2/accounts:revokeToken",Zu(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=rg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await m0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ao;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ao,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Pn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new d0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new fd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Oa(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return c0(this,e)}reload(){return f0(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(_i(this.auth));const e=await this.getIdToken();return await Oa(this,u0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:I,emailVerified:P,isAnonymous:z,providerData:Y,stsTokenManager:H}=t;ye(I&&H,e,"internal-error");const B=ao.fromJSON(this.name,H);ye(typeof I=="string",e,"internal-error"),ui(s,e.name),ui(o,e.name),ye(typeof P=="boolean",e,"internal-error"),ye(typeof z=="boolean",e,"internal-error"),ui(u,e.name),ui(h,e.name),ui(m,e.name),ui(g,e.name),ui(_,e.name),ui(w,e.name);const ae=new Pn({uid:I,auth:e,email:o,emailVerified:P,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:B,createdAt:_,lastLoginAt:w});return Y&&Array.isArray(Y)&&(ae.providerData=Y.map(ue=>({...ue}))),g&&(ae._redirectEventId=g),ae}static async _fromIdTokenResponse(e,t,s=!1){const o=new ao;o.updateFromServerResponse(t);const u=new Pn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Mu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?By(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ao;m.updateFromIdToken(s);const g=new Pn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new fd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;function Sr(i){kr(i instanceof Function,"Expected a class definition");let e=ig.get(i);return e?(kr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ig.set(i,e),e)}/**
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
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$y.type="NONE";const sg=$y;/**
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
 */function Su(i,e,t){return`firebase:${i}:${e}:${t}`}class lo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Su(this.userKey,o.apiKey,u),this.fullPersistenceKey=Su("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lu(this.auth,{idToken:e}).catch(()=>{});return t?Pn._fromGetAccountInfoResponse(this.auth,t,e):null}return Pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new lo(Sr(sg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Sr(sg);const h=Su(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let I;if(typeof w=="string"){const P=await Lu(e,{idToken:w}).catch(()=>{});if(!P)break;I=await Pn._fromGetAccountInfoResponse(e,P,w)}else I=Pn._fromJSON(e,w);_!==u&&(m=I),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new lo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new lo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qy(e))return"Blackberry";if(Yy(e))return"Webos";if(Wy(e))return"Safari";if((e.includes("chrome/")||qy(e))&&!e.includes("edge/"))return"Chrome";if(Ky(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hy(i=jt()){return/firefox\//i.test(i)}function Wy(i=jt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qy(i=jt()){return/crios\//i.test(i)}function Gy(i=jt()){return/iemobile/i.test(i)}function Ky(i=jt()){return/android/i.test(i)}function Qy(i=jt()){return/blackberry/i.test(i)}function Yy(i=jt()){return/webos/i.test(i)}function $d(i=jt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function y0(i=jt()){var e;return $d(i)&&!!((e=window.navigator)!=null&&e.standalone)}function _0(){return bw()&&document.documentMode===10}function Jy(i=jt()){return $d(i)||Ky(i)||Yy(i)||Qy(i)||/windows phone/i.test(i)||Gy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(i,e=[]){let t;switch(i){case"Browser":t=og(jt());break;case"Worker":t=`${og(jt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${s}`}/**
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
 */class v0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function E0(i,e={}){return wo(i,"GET","/v2/passwordPolicy",Zu(i,e))}/**
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
 */const w0=6;class T0{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??w0,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new v0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ly,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await lo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),s=await Pn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Cn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(_i(this));const t=e?Nn(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(_i(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(_i(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await E0(this),t=new T0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await g0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await lo.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&t0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ec(i){return Nn(i)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=$w(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function S0(i){Hd=i}function A0(i){return Hd.loadJS(i)}function R0(){return Hd.gapiScript}function C0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(i,e){const t=Ud(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(is(u,e??{}))return o;Pr(o,"already-initialized")}return t.initialize({options:e})}function k0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Sr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function x0(i,e,t){const s=ec(i);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Zy(e),{host:h,port:m}=N0(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(is(_,s.config.emulator)&&is(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,vo(h)?(Cy(`${u}//${h}${g}`),Py("Auth",!0)):D0()}function Zy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function N0(i){const e=Zy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:lg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:lg(h)}}}function lg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function D0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(i,e){return jy(i,"POST","/v1/accounts:signInWithIdp",Zu(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="http://localhost";class os extends e_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new os(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return uo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,uo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,uo(e,t)}buildRequest(){const e={requestUri:V0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ga extends t_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ga{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return os._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Ga{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Ga{constructor(){super("twitter.com")}static credential(e,t){return os._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(i,e){return jy(i,"POST","/v1/accounts:signUp",Zu(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Pn._fromIdTokenResponse(e,s,o),h=ug(s);return new wi({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ug(s);return new wi({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ug(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(i){var o;if(Cn(i.app))return Promise.reject(_i(i));const e=ec(i);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new wi({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await O0(e,{returnSecureToken:!0}),s=await wi._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends Dr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Fu(e,t,s,o)}}function n_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(i,u,e,s):u})}async function L0(i,e,t=!1){const s=await Oa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return wi._forOperation(i,"link",s)}/**
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
 */async function M0(i,e,t=!1){const{auth:s}=i;if(Cn(s.app))return Promise.reject(_i(s));const o="reauthenticate";try{const u=await Oa(i,n_(s,o,e,i),t);ye(u.idToken,s,"internal-error");const h=Bd(u.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(i.uid===m,s,"user-mismatch"),wi._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Pr(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(i,e,t=!1){if(Cn(i.app))return Promise.reject(_i(i));const s="signIn",o=await n_(i,s,e),u=await wi._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function U0(i,e,t,s){return Nn(i).onIdTokenChanged(e,t,s)}function j0(i,e,t){return Nn(i).beforeAuthStateChanged(e,t)}function z0(i,e,t,s){return Nn(i).onAuthStateChanged(e,t,s)}const Uu="__sak";/**
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
 */class r_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=1e3,$0=10;class i_ extends r_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);_0()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,$0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},B0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}i_.type="LOCAL";const H0=i_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_ extends r_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}s_.type="SESSION";const o_=s_;/**
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
 */function W0(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new tc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await W0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class q0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=Wd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(I){const P=I;if(P.data.eventId===_)switch(P.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(P.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function G0(i){Zn().location.href=i}/**
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
 */function a_(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function K0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Q0(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function Y0(){return a_()?self:null}/**
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
 */const l_="firebaseLocalStorageDb",J0=1,ju="firebaseLocalStorage",u_="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nc(i,e){return i.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function X0(){const i=indexedDB.deleteDatabase(l_);return new Ka(i).toPromise()}function pd(){const i=indexedDB.open(l_,J0);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ju,{keyPath:u_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ju)?e(s):(s.close(),await X0(),e(await pd()))})})}async function cg(i,e,t){const s=nc(i,!0).put({[u_]:e,value:t});return new Ka(s).toPromise()}async function Z0(i,e){const t=nc(i,!1).get(e),s=await new Ka(t).toPromise();return s===void 0?null:s.value}function hg(i,e){const t=nc(i,!0).delete(e);return new Ka(t).toPromise()}const eI=800,tI=3;class c_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>tI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(Y0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await K0(),!this.activeServiceWorker)return;this.sender=new q0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Q0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pd();return await cg(e,Uu,"1"),await hg(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>cg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Z0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=nc(o,!1).getAll();return new Ka(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c_.type="LOCAL";const nI=c_;new qa(3e4,6e4);/**
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
 */function rI(i,e){return e?Sr(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class qd extends e_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return uo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return uo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iI(i){return F0(i.auth,new qd(i),i.bypassAuthState)}function sI(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),M0(t,new qd(i),i.bypassAuthState)}async function oI(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),L0(t,new qd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iI;case"linkViaPopup":case"linkViaRedirect":return oI;case"reauthViaPopup":case"reauthViaRedirect":return sI;default:Pr(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new qa(2e3,1e4);class oo extends h_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aI.get())};e()}}oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="pendingRedirect",Au=new Map;class uI extends h_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const s=await cI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cI(i,e){const t=fI(e),s=dI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function hI(i,e){Au.set(i._key(),e)}function dI(i){return Sr(i._redirectPersistence)}function fI(i){return Su(lI,i.config.apiKey,i.name)}async function pI(i,e,t=!1){if(Cn(i.app))return Promise.reject(_i(i));const s=ec(i),o=rI(s,e),h=await new uI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=600*1e3;class gI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!d_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mI&&this.cachedEventUids.clear(),this.cachedEventUids.has(dg(e))}saveEventToCache(e){this.cachedEventUids.add(dg(e)),this.lastProcessedEventTime=Date.now()}}function dg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function d_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(i,e={}){return wo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EI=/^https?/;async function wI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await _I(i);for(const t of e)try{if(TI(t))return}catch{}Pr(i,"unauthorized-domain")}function TI(i){const e=dd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!EI.test(t))return!1;if(vI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const II=new qa(3e4,6e4);function fg(){const i=Zn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function SI(i){return new Promise((e,t)=>{var o,u,h;function s(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),t(Xn(i,"network-request-failed"))},timeout:II.get()})}if((u=(o=Zn().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=Zn().gapi)!=null&&h.load)s();else{const m=C0("iframefcb");return Zn()[m]=()=>{gapi.load?s():t(Xn(i,"network-request-failed"))},A0(`${R0()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Ru=null,e})}let Ru=null;function AI(i){return Ru=Ru||SI(i),Ru}/**
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
 */const RI=new qa(5e3,15e3),CI="__/auth/iframe",PI="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NI(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?zd(e,PI):`https://${i.config.authDomain}/${CI}`,s={apiKey:e.apiKey,appName:i.name,v:Eo},o=xI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Wa(s).slice(1)}`}async function DI(i){const e=await AI(i),t=Zn().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:NI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Xn(i,"network-request-failed"),m=Zn().setTimeout(()=>{u(h)},RI.get());function g(){Zn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const VI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OI=500,bI=600,LI="_blank",MI="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FI(i,e,t,s=OI,o=bI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...VI,width:s.toString(),height:o.toString(),top:u,left:h},_=jt().toLowerCase();t&&(m=qy(_)?LI:t),Hy(_)&&(e=e||MI,g.scrollbars="yes");const w=Object.entries(g).reduce((P,[z,Y])=>`${P}${z}=${Y},`,"");if(y0(_)&&m!=="_self")return UI(e||"",m),new pg(null);const I=window.open(e||"",m,w);ye(I,i,"popup-blocked");try{I.focus()}catch{}return new pg(I)}function UI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const jI="__/auth/handler",zI="emulator/auth/handler",BI=encodeURIComponent("fac");async function mg(i,e,t,s,o,u){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Eo,eventId:o};if(e instanceof t_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Bw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,I]of Object.entries({}))h[w]=I}if(e instanceof Ga){const w=e.getScopes().filter(I=>I!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),_=g?`#${BI}=${encodeURIComponent(g)}`:"";return`${$I(i)}?${Wa(m).slice(1)}${_}`}function $I({config:i}){return i.emulator?zd(i,zI):`https://${i.authDomain}/${jI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="webStorageSupport";class HI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o_,this._completeRedirectFn=pI,this._overrideRedirectResult=hI}async _openPopup(e,t,s,o){var h;kr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await mg(e,t,s,dd(),o);return FI(e,u,Wd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await mg(e,t,s,dd(),o);return G0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(kr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await DI(e),s=new gI(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qh,{type:Qh},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Qh];u!==void 0&&t(!!u),Pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jy()||Wy()||$d()}}const WI=HI;var gg="@firebase/auth",yg="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KI(i){fo(new ss("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xy(i)},_=new I0(s,o,u,g);return k0(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),fo(new ss("auth-internal",e=>{const t=ec(e.getProvider("auth").getImmediate());return(s=>new qI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(gg,yg,GI(i)),yi(gg,yg,"esm2020")}/**
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
 */const QI=300,YI=Ry("authIdTokenMaxAge")||QI;let _g=null;const JI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>YI)return;const o=t==null?void 0:t.token;_g!==o&&(_g=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function XI(i=Dy()){const e=Ud(i,"auth");if(e.isInitialized())return e.getImmediate();const t=P0(i,{popupRedirectResolver:WI,persistence:[nI,H0,o_]}),s=Ry("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=JI(u.toString());j0(t,h,()=>h(t.currentUser)),U0(t,m=>h(m))}}const o=Sy("auth");return o&&x0(t,`http://${o}`),t}function ZI(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}S0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Xn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",ZI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KI("Browser");var eS="firebase",tS="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi(eS,tS,"app");var vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vi,f_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function R(){}R.prototype=S.prototype,k.F=S.prototype,k.prototype=new R,k.prototype.constructor=k,k.D=function(D,x,O){for(var A=Array(arguments.length-2),We=2;We<arguments.length;We++)A[We-2]=arguments[We];return S.prototype[x].apply(D,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,R){R||(R=0);const D=Array(16);if(typeof S=="string")for(var x=0;x<16;++x)D[x]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(x=0;x<16;++x)D[x]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=k.g[0],R=k.g[1],x=k.g[2];let O=k.g[3],A;A=S+(O^R&(x^O))+D[0]+3614090360&4294967295,S=R+(A<<7&4294967295|A>>>25),A=O+(x^S&(R^x))+D[1]+3905402710&4294967295,O=S+(A<<12&4294967295|A>>>20),A=x+(R^O&(S^R))+D[2]+606105819&4294967295,x=O+(A<<17&4294967295|A>>>15),A=R+(S^x&(O^S))+D[3]+3250441966&4294967295,R=x+(A<<22&4294967295|A>>>10),A=S+(O^R&(x^O))+D[4]+4118548399&4294967295,S=R+(A<<7&4294967295|A>>>25),A=O+(x^S&(R^x))+D[5]+1200080426&4294967295,O=S+(A<<12&4294967295|A>>>20),A=x+(R^O&(S^R))+D[6]+2821735955&4294967295,x=O+(A<<17&4294967295|A>>>15),A=R+(S^x&(O^S))+D[7]+4249261313&4294967295,R=x+(A<<22&4294967295|A>>>10),A=S+(O^R&(x^O))+D[8]+1770035416&4294967295,S=R+(A<<7&4294967295|A>>>25),A=O+(x^S&(R^x))+D[9]+2336552879&4294967295,O=S+(A<<12&4294967295|A>>>20),A=x+(R^O&(S^R))+D[10]+4294925233&4294967295,x=O+(A<<17&4294967295|A>>>15),A=R+(S^x&(O^S))+D[11]+2304563134&4294967295,R=x+(A<<22&4294967295|A>>>10),A=S+(O^R&(x^O))+D[12]+1804603682&4294967295,S=R+(A<<7&4294967295|A>>>25),A=O+(x^S&(R^x))+D[13]+4254626195&4294967295,O=S+(A<<12&4294967295|A>>>20),A=x+(R^O&(S^R))+D[14]+2792965006&4294967295,x=O+(A<<17&4294967295|A>>>15),A=R+(S^x&(O^S))+D[15]+1236535329&4294967295,R=x+(A<<22&4294967295|A>>>10),A=S+(x^O&(R^x))+D[1]+4129170786&4294967295,S=R+(A<<5&4294967295|A>>>27),A=O+(R^x&(S^R))+D[6]+3225465664&4294967295,O=S+(A<<9&4294967295|A>>>23),A=x+(S^R&(O^S))+D[11]+643717713&4294967295,x=O+(A<<14&4294967295|A>>>18),A=R+(O^S&(x^O))+D[0]+3921069994&4294967295,R=x+(A<<20&4294967295|A>>>12),A=S+(x^O&(R^x))+D[5]+3593408605&4294967295,S=R+(A<<5&4294967295|A>>>27),A=O+(R^x&(S^R))+D[10]+38016083&4294967295,O=S+(A<<9&4294967295|A>>>23),A=x+(S^R&(O^S))+D[15]+3634488961&4294967295,x=O+(A<<14&4294967295|A>>>18),A=R+(O^S&(x^O))+D[4]+3889429448&4294967295,R=x+(A<<20&4294967295|A>>>12),A=S+(x^O&(R^x))+D[9]+568446438&4294967295,S=R+(A<<5&4294967295|A>>>27),A=O+(R^x&(S^R))+D[14]+3275163606&4294967295,O=S+(A<<9&4294967295|A>>>23),A=x+(S^R&(O^S))+D[3]+4107603335&4294967295,x=O+(A<<14&4294967295|A>>>18),A=R+(O^S&(x^O))+D[8]+1163531501&4294967295,R=x+(A<<20&4294967295|A>>>12),A=S+(x^O&(R^x))+D[13]+2850285829&4294967295,S=R+(A<<5&4294967295|A>>>27),A=O+(R^x&(S^R))+D[2]+4243563512&4294967295,O=S+(A<<9&4294967295|A>>>23),A=x+(S^R&(O^S))+D[7]+1735328473&4294967295,x=O+(A<<14&4294967295|A>>>18),A=R+(O^S&(x^O))+D[12]+2368359562&4294967295,R=x+(A<<20&4294967295|A>>>12),A=S+(R^x^O)+D[5]+4294588738&4294967295,S=R+(A<<4&4294967295|A>>>28),A=O+(S^R^x)+D[8]+2272392833&4294967295,O=S+(A<<11&4294967295|A>>>21),A=x+(O^S^R)+D[11]+1839030562&4294967295,x=O+(A<<16&4294967295|A>>>16),A=R+(x^O^S)+D[14]+4259657740&4294967295,R=x+(A<<23&4294967295|A>>>9),A=S+(R^x^O)+D[1]+2763975236&4294967295,S=R+(A<<4&4294967295|A>>>28),A=O+(S^R^x)+D[4]+1272893353&4294967295,O=S+(A<<11&4294967295|A>>>21),A=x+(O^S^R)+D[7]+4139469664&4294967295,x=O+(A<<16&4294967295|A>>>16),A=R+(x^O^S)+D[10]+3200236656&4294967295,R=x+(A<<23&4294967295|A>>>9),A=S+(R^x^O)+D[13]+681279174&4294967295,S=R+(A<<4&4294967295|A>>>28),A=O+(S^R^x)+D[0]+3936430074&4294967295,O=S+(A<<11&4294967295|A>>>21),A=x+(O^S^R)+D[3]+3572445317&4294967295,x=O+(A<<16&4294967295|A>>>16),A=R+(x^O^S)+D[6]+76029189&4294967295,R=x+(A<<23&4294967295|A>>>9),A=S+(R^x^O)+D[9]+3654602809&4294967295,S=R+(A<<4&4294967295|A>>>28),A=O+(S^R^x)+D[12]+3873151461&4294967295,O=S+(A<<11&4294967295|A>>>21),A=x+(O^S^R)+D[15]+530742520&4294967295,x=O+(A<<16&4294967295|A>>>16),A=R+(x^O^S)+D[2]+3299628645&4294967295,R=x+(A<<23&4294967295|A>>>9),A=S+(x^(R|~O))+D[0]+4096336452&4294967295,S=R+(A<<6&4294967295|A>>>26),A=O+(R^(S|~x))+D[7]+1126891415&4294967295,O=S+(A<<10&4294967295|A>>>22),A=x+(S^(O|~R))+D[14]+2878612391&4294967295,x=O+(A<<15&4294967295|A>>>17),A=R+(O^(x|~S))+D[5]+4237533241&4294967295,R=x+(A<<21&4294967295|A>>>11),A=S+(x^(R|~O))+D[12]+1700485571&4294967295,S=R+(A<<6&4294967295|A>>>26),A=O+(R^(S|~x))+D[3]+2399980690&4294967295,O=S+(A<<10&4294967295|A>>>22),A=x+(S^(O|~R))+D[10]+4293915773&4294967295,x=O+(A<<15&4294967295|A>>>17),A=R+(O^(x|~S))+D[1]+2240044497&4294967295,R=x+(A<<21&4294967295|A>>>11),A=S+(x^(R|~O))+D[8]+1873313359&4294967295,S=R+(A<<6&4294967295|A>>>26),A=O+(R^(S|~x))+D[15]+4264355552&4294967295,O=S+(A<<10&4294967295|A>>>22),A=x+(S^(O|~R))+D[6]+2734768916&4294967295,x=O+(A<<15&4294967295|A>>>17),A=R+(O^(x|~S))+D[13]+1309151649&4294967295,R=x+(A<<21&4294967295|A>>>11),A=S+(x^(R|~O))+D[4]+4149444226&4294967295,S=R+(A<<6&4294967295|A>>>26),A=O+(R^(S|~x))+D[11]+3174756917&4294967295,O=S+(A<<10&4294967295|A>>>22),A=x+(S^(O|~R))+D[2]+718787259&4294967295,x=O+(A<<15&4294967295|A>>>17),A=R+(O^(x|~S))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+O&4294967295}s.prototype.v=function(k,S){S===void 0&&(S=k.length);const R=S-this.blockSize,D=this.C;let x=this.h,O=0;for(;O<S;){if(x==0)for(;O<=R;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<S;)if(D[x++]=k.charCodeAt(O++),x==this.blockSize){o(this,D),x=0;break}}else for(;O<S;)if(D[x++]=k[O++],x==this.blockSize){o(this,D),x=0;break}}this.h=x,this.o+=S},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var R=k.length-8;R<k.length;++R)k[R]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,R=0;R<4;++R)for(let D=0;D<32;D+=8)k[S++]=this.g[R]>>>D&255;return k};function u(k,S){var R=m;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=S(k)}function h(k,S){this.h=S;const R=[];let D=!0;for(let x=k.length-1;x>=0;x--){const O=k[x]|0;D&&O==S||(R[x]=O,D=!1)}this.g=R}var m={};function g(k){return-128<=k&&k<128?u(k,function(S){return new h([S|0],S<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return I;if(k<0)return B(_(-k));const S=[];let R=1;for(let D=0;k>=R;D++)S[D]=k/R|0,R*=4294967296;return new h(S,0)}function w(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return B(w(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(S,8));let D=I;for(let O=0;O<k.length;O+=8){var x=Math.min(8,k.length-O);const A=parseInt(k.substring(O,O+x),S);x<8?(x=_(Math.pow(S,x)),D=D.j(x).add(_(A))):(D=D.j(R),D=D.add(_(A)))}return D}var I=g(0),P=g(1),z=g(16777216);i=h.prototype,i.m=function(){if(H(this))return-B(this).m();let k=0,S=1;for(let R=0;R<this.g.length;R++){const D=this.i(R);k+=(D>=0?D:4294967296+D)*S,S*=4294967296}return k},i.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(Y(this))return"0";if(H(this))return"-"+B(this).toString(k);const S=_(Math.pow(k,6));var R=this;let D="";for(;;){const x=De(R,S).g;R=ae(R,x.j(S));let O=((R.g.length>0?R.g[0]:R.h)>>>0).toString(k);if(R=x,Y(R))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},i.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function Y(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function H(k){return k.h==-1}i.l=function(k){return k=ae(this,k),H(k)?-1:Y(k)?0:1};function B(k){const S=k.g.length,R=[];for(let D=0;D<S;D++)R[D]=~k.g[D];return new h(R,~k.h).add(P)}i.abs=function(){return H(this)?B(this):this},i.add=function(k){const S=Math.max(this.g.length,k.g.length),R=[];let D=0;for(let x=0;x<=S;x++){let O=D+(this.i(x)&65535)+(k.i(x)&65535),A=(O>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);D=A>>>16,O&=65535,A&=65535,R[x]=A<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ae(k,S){return k.add(B(S))}i.j=function(k){if(Y(this)||Y(k))return I;if(H(this))return H(k)?B(this).j(B(k)):B(B(this).j(k));if(H(k))return B(this.j(B(k)));if(this.l(z)<0&&k.l(z)<0)return _(this.m()*k.m());const S=this.g.length+k.g.length,R=[];for(var D=0;D<2*S;D++)R[D]=0;for(D=0;D<this.g.length;D++)for(let x=0;x<k.g.length;x++){const O=this.i(D)>>>16,A=this.i(D)&65535,We=k.i(x)>>>16,_t=k.i(x)&65535;R[2*D+2*x]+=A*_t,ue(R,2*D+2*x),R[2*D+2*x+1]+=O*_t,ue(R,2*D+2*x+1),R[2*D+2*x+1]+=A*We,ue(R,2*D+2*x+1),R[2*D+2*x+2]+=O*We,ue(R,2*D+2*x+2)}for(k=0;k<S;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=S;k<2*S;k++)R[k]=0;return new h(R,0)};function ue(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function me(k,S){this.g=k,this.h=S}function De(k,S){if(Y(S))throw Error("division by zero");if(Y(k))return new me(I,I);if(H(k))return S=De(B(k),S),new me(B(S.g),B(S.h));if(H(S))return S=De(k,B(S)),new me(B(S.g),S.h);if(k.g.length>30){if(H(k)||H(S))throw Error("slowDivide_ only works with positive integers.");for(var R=P,D=S;D.l(k)<=0;)R=Le(R),D=Le(D);var x=xe(R,1),O=xe(D,1);for(D=xe(D,2),R=xe(R,2);!Y(D);){var A=O.add(D);A.l(k)<=0&&(x=x.add(R),O=A),D=xe(D,1),R=xe(R,1)}return S=ae(k,x.j(S)),new me(x,S)}for(x=I;k.l(S)>=0;){for(R=Math.max(1,Math.floor(k.m()/S.m())),D=Math.ceil(Math.log(R)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=_(R),A=O.j(S);H(A)||A.l(k)>0;)R-=D,O=_(R),A=O.j(S);Y(O)&&(O=P),x=x.add(O),k=ae(k,A)}return new me(x,k)}i.B=function(k){return De(this,k).h},i.and=function(k){const S=Math.max(this.g.length,k.g.length),R=[];for(let D=0;D<S;D++)R[D]=this.i(D)&k.i(D);return new h(R,this.h&k.h)},i.or=function(k){const S=Math.max(this.g.length,k.g.length),R=[];for(let D=0;D<S;D++)R[D]=this.i(D)|k.i(D);return new h(R,this.h|k.h)},i.xor=function(k){const S=Math.max(this.g.length,k.g.length),R=[];for(let D=0;D<S;D++)R[D]=this.i(D)^k.i(D);return new h(R,this.h^k.h)};function Le(k){const S=k.g.length+1,R=[];for(let D=0;D<S;D++)R[D]=k.i(D)<<1|k.i(D-1)>>>31;return new h(R,k.h)}function xe(k,S){const R=S>>5;S%=32;const D=k.g.length-R,x=[];for(let O=0;O<D;O++)x[O]=S>0?k.i(O+R)>>>S|k.i(O+R+1)<<32-S:k.i(O+R);return new h(x,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,f_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,vi=h}).apply(typeof vg<"u"?vg:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var p_,Ta,m_,Cu,md,g_,y_,__;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],p=p(E),p!=E&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var y=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&y.push([E,p[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function g(l,p,y){return l.call.apply(l.bind,arguments)}function _(l,p,y){return _=g,_.apply(null,arguments)}function w(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function I(l,p){function y(){}y.prototype=p.prototype,l.Z=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(E,L,U){for(var X=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)X[Ee-2]=arguments[Ee];return p.prototype[L].apply(E,X)}}var P=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const y=Array(p);for(let E=0;E<p;E++)y[E]=l[E];return y}return[]}function Y(l,p){for(let E=1;E<arguments.length;E++){const L=arguments[E];var y=typeof L;if(y=y!="object"?y:L?Array.isArray(L)?"array":y:"null",y=="array"||y=="object"&&typeof L.length=="number"){y=l.length||0;const U=L.length||0;l.length=y+U;for(let X=0;X<U;X++)l[y+X]=L[X]}else l.push(L)}}class H{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function B(l){h.setTimeout(()=>{throw l},0)}function ae(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ue{constructor(){this.h=this.g=null}add(p,y){const E=me.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var me=new H(()=>new De,l=>l.reset());class De{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,xe=!1,k=new ue,S=()=>{const l=Promise.resolve(void 0);Le=()=>{l.then(R)}};function R(){for(var l;l=ae();){try{l.h.call(l.g)}catch(y){B(y)}var p=me;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}xe=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,p),h.removeEventListener("test",y,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function We(l,p){x.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}I(We,x),We.prototype.init=function(l,p){const y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&We.Z.h.call(this)},We.prototype.h=function(){We.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _t="closure_listenable_"+(Math.random()*1e6|0),Nt=0;function Je(l,p,y,E,L){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=L,this.key=++Nt,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ce(l,p,y){for(const E in l)p.call(y,l[E],E,l)}function ne(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function V(l){const p={};for(const y in l)p[y]=l[y];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(l,p){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<W.length;U++)y=W[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,p,y,E,L){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const X=Re(l,p,E,L);return X>-1?(p=l[X],y||(p.fa=!1)):(p=new Je(p,this.src,U,!!E,L),p.fa=y,l.push(p)),p};function Ae(l,p){const y=p.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,p,void 0),U;(U=L>=0)&&Array.prototype.splice.call(E,L,1),U&&(Z(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Re(l,p,y,E){for(let L=0;L<l.length;++L){const U=l[L];if(!U.da&&U.listener==p&&U.capture==!!y&&U.ha==E)return L}return-1}var je="closure_lm_"+(Math.random()*1e6|0),Oe={};function $e(l,p,y,E,L){if(Array.isArray(p)){for(let U=0;U<p.length;U++)$e(l,p[U],y,E,L);return null}return y=Co(y),l&&l[_t]?l.J(p,y,m(E)?!!E.capture:!1,L):zt(l,p,y,!1,E,L)}function zt(l,p,y,E,L,U){if(!p)throw Error("Invalid event type");const X=m(L)?!!L.capture:!!L;let Ee=gs(l);if(Ee||(l[je]=Ee=new Ie(l)),y=Ee.add(p,y,E,X,U),y.proxy)return y;if(E=ps(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)O||(L=X),L===void 0&&(L=!1),l.addEventListener(p.toString(),E,L);else if(l.attachEvent)l.attachEvent(ms(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ps(){function l(y){return p.call(l.src,l.listener,y)}const p=el;return l}function Ro(l,p,y,E,L){if(Array.isArray(p))for(var U=0;U<p.length;U++)Ro(l,p[U],y,E,L);else E=m(E)?!!E.capture:!!E,y=Co(y),l&&l[_t]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],y=Re(p,y,E,L),y>-1&&(Z(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=gs(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Re(p,y,E,L)),(y=l>-1?p[l]:null)&&Vr(y))}function Vr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_t])Ae(p.i,l);else{var y=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(y,E,l.capture):p.detachEvent?p.detachEvent(ms(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=gs(p))?(Ae(y,l),y.h==0&&(y.src=null,p[je]=null)):Z(l)}}}function ms(l){return l in Oe?Oe[l]:Oe[l]="on"+l}function el(l,p){if(l.da)l=!0;else{p=new We(p,this);const y=l.listener,E=l.ha||l.src;l.fa&&Vr(l),l=y.call(E,p)}return l}function gs(l){return l=l[je],l instanceof Ie?l:null}var Pi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Co(l){return typeof l=="function"?l:(l[Pi]||(l[Pi]=function(p){return l.handleEvent(p)}),l[Pi])}function ut(){D.call(this),this.i=new Ie(this),this.M=this,this.G=null}I(ut,D),ut.prototype[_t]=!0,ut.prototype.removeEventListener=function(l,p,y,E){Ro(this,l,p,y,E)};function st(l,p){var y,E=l.G;if(E)for(y=[];E;E=E.G)y.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new x(p,l);else if(p instanceof x)p.target=p.target||l;else{var L=p;p=new x(E,l),Te(p,L)}L=!0;let U,X;if(y)for(X=y.length-1;X>=0;X--)U=p.g=y[X],L=yn(U,E,!0,p)&&L;if(U=p.g=l,L=yn(U,E,!0,p)&&L,L=yn(U,E,!1,p)&&L,y)for(X=0;X<y.length;X++)U=p.g=y[X],L=yn(U,E,!1,p)&&L}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const y=l.g[p];for(let E=0;E<y.length;E++)Z(y[E]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,y,E){return this.i.add(String(l),p,!1,y,E)},ut.prototype.K=function(l,p,y,E){return this.i.add(String(l),p,!0,y,E)};function yn(l,p,y,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let U=0;U<p.length;++U){const X=p[U];if(X&&!X.da&&X.capture==y){const Ee=X.listener,ot=X.ha||X.src;X.fa&&Ae(l.i,X),L=Ee.call(ot,E)!==!1&&L}}return L&&!E.defaultPrevented}function Po(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function ko(l){l.g=Po(()=>{l.g=null,l.i&&(l.i=!1,ko(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class tl extends D{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ko(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(l){D.call(this),this.h=l,this.g={}}I(Or,D);var xo=[];function ys(l){ce(l.g,function(p,y){this.g.hasOwnProperty(y)&&Vr(p)},l),l.g={}}Or.prototype.N=function(){Or.Z.N.call(this),ys(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var br=h.JSON.stringify,nl=h.JSON.parse,ki=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Lr(){}function rl(){}var Mr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _s(){x.call(this,"d")}I(_s,x);function No(){x.call(this,"c")}I(No,x);var _n={},vs=null;function Fr(){return vs=vs||new ut}_n.Ia="serverreachability";function Es(l){x.call(this,_n.Ia,l)}I(Es,x);function sr(l){const p=Fr();st(p,new Es(p))}_n.STAT_EVENT="statevent";function or(l,p){x.call(this,_n.STAT_EVENT,l),this.stat=p}I(or,x);function rt(l){const p=Fr();st(p,new or(p,l))}_n.Ja="timingevent";function Do(l,p){x.call(this,_n.Ja,l),this.size=p}I(Do,x);function Ur(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function jr(){this.g=!0}jr.prototype.ua=function(){this.g=!1};function il(l,p,y,E,L,U){l.info(function(){if(l.g)if(U){var X="",Ee=U.split("&");for(let Be=0;Be<Ee.length;Be++){var ot=Ee[Be].split("=");if(ot.length>1){const ct=ot[0];ot=ot[1];const nn=ct.split("_");X=nn.length>=2&&nn[1]=="type"?X+(ct+"="+ot+"&"):X+(ct+"=redacted&")}}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+y+`
`+X})}function sl(l,p,y,E,L,U,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+y+`
`+U+" "+X})}function Dn(l,p,y,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+xi(l,y)+(E?" "+E:"")})}function ol(l,p){l.info(function(){return"TIMEOUT: "+p})}jr.prototype.info=function(){};function xi(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var y=U[l];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var L=E[0];if(L!="noop"&&L!="stop"&&L!="close")for(let X=1;X<E.length;X++)E[X]=""}}}}return br(U)}catch{return p}}var zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Br={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},al;function ar(){}I(ar,Lr),ar.prototype.g=function(){return new XMLHttpRequest},al=new ar;function Vn(l){return encodeURIComponent(String(l))}function ws(l){var p=1;l=l.split(":");const y=[];for(;p>0&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function an(l,p,y,E){this.j=l,this.i=p,this.l=y,this.S=E||1,this.V=new Or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ll}function ll(){this.i=null,this.g="",this.h=!1}var ul={},Vo={};function vn(l,p,y){l.M=1,l.A=ur(ln(p)),l.u=y,l.R=!0,Oo(l,null)}function Oo(l,p){l.F=Date.now(),Ni(l),l.B=ln(l.A);var y=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Ho(y.i,"t",E),l.C=0,y=l.j.L,l.h=new ll,l.g=vl(l.j,y?p:null,!l.u),l.P>0&&(l.O=new tl(_(l.Y,l,l.g),l.P)),p=l.V,y=l.g,E=l.ba;var L="readystatechange";Array.isArray(L)||(L&&(xo[0]=L.toString()),L=xo);for(let U=0;U<L.length;U++){const X=$e(y,L[U],E||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),sr(),il(l.i,l.v,l.B,l.l,l.S,l.u)}an.prototype.ba=function(l){l=l.target;const p=this.O;p&&jn(l)==3?p.j():this.Y(l)},an.prototype.Y=function(l){try{if(l==this.g)e:{const Ee=jn(this.g),ot=this.g.ya(),Be=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||yl(this.g)))){this.K||Ee!=4||ot==7||(ot==8||Be<=0?sr(3):sr(2)),Ts(this);var p=this.g.ca();this.X=p;var y=cl(this);if(this.o=p==200,sl(this.i,this.v,this.B,this.l,this.S,Ee,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,L=this.g;if((E=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(E)){var U=E;break t}}U=null}if(l=U)Dn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,rt(12),lr(this),Di(this);break e}}if(this.R){l=!0;let ct;for(;!this.K&&this.C<y.length;)if(ct=dl(this,y),ct==Vo){Ee==4&&(this.m=4,rt(14),l=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==ul){this.m=4,rt(15),Dn(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else Dn(this.i,this.l,ct,null),Ge(this,ct);if(hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||y.length!=0||this.h.h||(this.m=1,rt(16),l=!1),this.o=this.o&&l,!l)Dn(this.i,this.l,y,"[Invalid Chunked Response]"),lr(this),Di(this);else if(y.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),zi(X),X.P=!0,rt(11))}}else Dn(this.i,this.l,y,null),Ge(this,y);Ee==4&&lr(this),this.o&&!this.K&&(Ee==4?Ds(this.j,this):(this.o=!1,Ni(this)))}else qo(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),lr(this),Di(this)}}}catch{}finally{}};function cl(l){if(!hl(l))return l.g.la();const p=yl(l.g);if(p==="")return"";let y="";const E=p.length,L=jn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return lr(l),Di(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<E;U++)l.h.h=!0,y+=l.h.i.decode(p[U],{stream:!(L&&U==E-1)});return p.length=0,l.h.g+=y,l.C=0,l.h.g}function hl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function dl(l,p){var y=l.C,E=p.indexOf(`
`,y);return E==-1?Vo:(y=Number(p.substring(y,E)),isNaN(y)?ul:(E+=1,E+y>p.length?Vo:(p=p.slice(E,E+y),l.C=E+y,p)))}an.prototype.cancel=function(){this.K=!0,lr(this)};function Ni(l){l.T=Date.now()+l.H,bo(l,l.H)}function bo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ur(_(l.aa,l),p)}function Ts(l){l.D&&(h.clearTimeout(l.D),l.D=null)}an.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(ol(this.i,this.B),this.M!=2&&(sr(),rt(17)),lr(this),this.m=2,Di(this)):bo(this,this.T-l)};function Di(l){l.j.I==0||l.K||Ds(l.j,l)}function lr(l){Ts(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,ys(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var y=l.j;if(y.I!=0&&(y.g==l||Mo(y.h,l))){if(!l.L&&Mo(y.h,l)&&y.I==3){try{var E=y.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)Ns(y),en(y);else break e;$n(y),rt(18)}}else y.xa=L[1],0<y.xa-y.K&&L[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Ur(_(y.Va,y),6e3));Vi(y.h)<=1&&y.ta&&(y.ta=void 0)}else tn(y,11)}else if((l.L||y.g==l)&&Ns(y),!A(p))for(L=y.Ba.g.parse(p),p=0;p<L.length;p++){let Be=L[p];const ct=Be[0];if(!(ct<=y.K))if(y.K=ct,Be=Be[1],y.I==2)if(Be[0]=="c"){y.M=Be[1],y.ba=Be[2];const nn=Be[3];nn!=null&&(y.ka=nn,y.j.info("VER="+y.ka));const pr=Be[4];pr!=null&&(y.za=pr,y.j.info("SVER="+y.za));const Hn=Be[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(E=1.5*Hn,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const Wn=l.g;if(Wn){const bs=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var U=E.h;U.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ss(U,U.h),U.h=null))}if(E.G){const Qo=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qo&&(E.wa=Qo,Ue(E.J,E.G,Qo))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var X=l;if(E.na=Ko(E,E.L?E.ba:null,E.W),X.L){Oi(E.h,X);var Ee=X,ot=E.O;ot&&(Ee.H=ot),Ee.D&&(Ts(Ee),Ni(Ee)),E.g=X}else Dt(E);y.i.length>0&&fr(y)}else Be[0]!="stop"&&Be[0]!="close"||tn(y,7);else y.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?tn(y,7):ks(y):Be[0]!="noop"&&y.l&&y.l.qa(Be),y.A=0)}}sr(4)}catch{}}var mc=class{constructor(l,p){this.g=l,this.map=p}};function Is(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Lo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Vi(l){return l.h?1:l.g?l.g.size:0}function Mo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ss(l,p){l.g?l.g.add(p):l.h=p}function Oi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Is.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Jt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.G);return p}return z(l.i)}var fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xt(l,p){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const E=l[y].indexOf("=");let L,U=null;E>=0?(L=l[y].substring(0,E),U=l[y].substring(E+1)):L=l[y],p(L,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function On(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof On?(this.l=l.l,bi(this,l.j),this.o=l.o,this.g=l.g,bn(this,l.u),this.h=l.h,$r(this,Wo(l.i)),this.m=l.m):l&&(p=String(l).match(fl))?(this.l=!1,bi(this,p[1]||"",!0),this.o=Li(p[2]||""),this.g=Li(p[3]||"",!0),bn(this,p[4]),this.h=Li(p[5]||"",!0),$r(this,p[6]||"",!0),this.m=Li(p[7]||"")):(this.l=!1,this.i=new Ne(null,this.l))}On.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Mi(p,Uo,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Mi(p,Uo,!0),"@"),l.push(Vn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Mi(y,y.charAt(0)=="/"?Fi:jo,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Mi(y,zo)),l.join("")},On.prototype.resolve=function(l){const p=ln(this);let y=!!l.j;y?bi(p,l.j):y=!!l.o,y?p.o=l.o:y=!!l.g,y?p.g=l.g:y=l.u!=null;var E=l.h;if(y)bn(p,l.u);else if(y=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var L=p.h.lastIndexOf("/");L!=-1&&(E=p.h.slice(0,L+1)+E)}if(L=E,L==".."||L==".")E="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){E=L.lastIndexOf("/",0)==0,L=L.split("/");const U=[];for(let X=0;X<L.length;){const Ee=L[X++];Ee=="."?E&&X==L.length&&U.push(""):Ee==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),E&&X==L.length&&U.push("")):(U.push(Ee),E=!0)}E=U.join("/")}else E=L}return y?p.h=E:y=l.i.toString()!=="",y?$r(p,Wo(l.i)):y=!!l.m,y&&(p.m=l.m),p};function ln(l){return new On(l)}function bi(l,p,y){l.j=y?Li(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function bn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function $r(l,p,y){p instanceof Ne?(l.i=p,Rs(l.i,l.l)):(y||(p=Mi(p,gc)),l.i=new Ne(p,l.l))}function Ue(l,p,y){l.i.set(p,y)}function ur(l){return Ue(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Li(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mi(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,Fo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Fo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Uo=/[#\/\?@]/g,jo=/[#\?:]/g,Fi=/[#\?]/g,gc=/[#\?@]/g,zo=/#/g;function Ne(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Ln(l){l.g||(l.g=new Map,l.h=0,l.i&&Xt(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}i=Ne.prototype,i.add=function(l,p){Ln(this),this.i=null,l=Mn(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Bo(l,p){Ln(l),p=Mn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function As(l,p){return Ln(l),p=Mn(l,p),l.g.has(p)}i.forEach=function(l,p){Ln(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(p,L,E,this)},this)},this)};function $o(l,p){Ln(l);let y=[];if(typeof p=="string")As(l,p)&&(y=y.concat(l.g.get(Mn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)y=y.concat(l[p]);return y}i.set=function(l,p){return Ln(this),this.i=null,l=Mn(this,l),As(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=$o(this,l),l.length>0?String(l[0]):p):p};function Ho(l,p,y){Bo(l,p),y.length>0&&(l.i=null,l.g.set(Mn(l,p),z(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var y=p[E];const L=Vn(y);y=$o(this,y);for(let U=0;U<y.length;U++){let X=L;y[U]!==""&&(X+="="+Vn(y[U])),l.push(X)}}return this.i=l.join("&")};function Wo(l){const p=new Ne;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Mn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Rs(l,p){p&&!l.j&&(Ln(l),l.i=null,l.g.forEach(function(y,E){const L=E.toLowerCase();E!=L&&(Bo(this,E),Ho(this,L,y))},l)),l.j=p}function Fn(l,p){const y=new jr;if(h.Image){const E=new Image;E.onload=w(St,y,"TestLoadImage: loaded",!0,p,E),E.onerror=w(St,y,"TestLoadImage: error",!1,p,E),E.onabort=w(St,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(St,y,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function Un(l,p){const y=new jr,E=new AbortController,L=setTimeout(()=>{E.abort(),St(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?St(y,"TestPingServer: ok",!0,p):St(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),St(y,"TestPingServer: error",!1,p)})}function St(l,p,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Ui(){this.g=new ki}function cr(l){this.i=l.Sb||null,this.h=l.ab||!1}I(cr,Lr),cr.prototype.g=function(){return new Zt(this.i,this.h)};function Zt(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Zt,ut),i=Zt.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,En(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function pl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Hr(this):En(this),this.readyState==3&&pl(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Hr(this))},i.Na=function(l){this.g&&(this.response=l,Hr(this))},i.ga=function(){this.g&&Hr(this)};function Hr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,En(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function En(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ml(l){let p="";return ce(l,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function Cs(l,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=ml(y),typeof l=="string"?y!=null&&Vn(y):Ue(l,p,y))}function He(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(He,ut);var gl=/^https?$/i,yc=["POST","PUT"];i=He.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():al.g(),this.g.onreadystatechange=P(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){Wr(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(yc,p,void 0)>=0)||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of y)this.g.setRequestHeader(U,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){Wr(this,U)}};function Wr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,qr(l),dr(l)}function qr(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,st(this,"complete"),st(this,"abort"),dr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),He.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?hr(this):this.Xa())},i.Xa=function(){hr(this)};function hr(l){if(l.h&&typeof u<"u"){if(l.v&&jn(l)==4)setTimeout(l.Ca.bind(l),0);else if(st(l,"readystatechange"),jn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=U===0){let X=String(l.D).match(fl)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),E=!gl.test(X?X.toLowerCase():"")}y=E}if(y)st(l,"complete"),st(l,"success");else{l.o=6;try{var L=jn(l)>2?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.ca()+"]",qr(l)}}finally{dr(l)}}}}function dr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,p||st(l,"ready");try{y.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function jn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return jn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),nl(p)}};function yl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function qo(l){const p={};l=(l.g&&jn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(A(l[E]))continue;var y=ws(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=p[L]||[];p[L]=U,U.push(y)}ne(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Ps(l){this.za=0,this.i=[],this.j=new jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zn("baseRetryDelayMs",5e3,l),this.Za=zn("retryDelaySeedMs",1e4,l),this.Ta=zn("forwardChannelMaxRetries",2,l),this.va=zn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Is(l&&l.concurrentRequestLimit),this.Ba=new Ui,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ps.prototype,i.ka=8,i.I=1,i.connect=function(l,p,y,E){rt(0),this.W=l,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=Ko(this,null,this.W),fr(this)};function ks(l){if(xs(l),l.I==3){var p=l.V++,y=ln(l.J);if(Ue(y,"SID",l.M),Ue(y,"RID",p),Ue(y,"TYPE","terminate"),Bn(l,y),p=new an(l,l.j,p),p.M=2,p.A=ur(ln(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=p.A,y=!0),y||(p.g=vl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Ni(p)}Bi(l)}function en(l){l.g&&(zi(l),l.g.cancel(),l.g=null)}function xs(l){en(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ns(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function fr(l){if(!Lo(l.h)&&!l.m){l.m=!0;var p=l.Ea;Le||S(),xe||(Le(),xe=!0),k.add(p,l),l.D=0}}function _l(l,p){return Vi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ur(_(l.Ea,l,p),Vs(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const L=new an(this,this.j,l);let U=this.o;if(this.U&&(U?(U=V(U),Te(U,this.U)):U=this.U),this.u!==null||this.R||(L.J=U,U=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Go(this,L,p),y=ln(this.J),Ue(y,"RID",l),Ue(y,"CVER",22),this.G&&Ue(y,"X-HTTP-Session-Id",this.G),Bn(this,y),U&&(this.R?p="headers="+Vn(ml(U))+"&"+p:this.u&&Cs(y,this.u,U)),Ss(this.h,L),this.Ra&&Ue(y,"TYPE","init"),this.S?(Ue(y,"$req",p),Ue(y,"SID","null"),L.U=!0,vn(L,y,null)):vn(L,y,p),this.I=2}}else this.I==3&&(l?ji(this,l):this.i.length==0||Lo(this.h)||ji(this))};function ji(l,p){var y;p?y=p.l:y=l.V++;const E=ln(l.J);Ue(E,"SID",l.M),Ue(E,"RID",y),Ue(E,"AID",l.K),Bn(l,E),l.u&&l.o&&Cs(E,l.u,l.o),y=new an(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Go(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ss(l.h,y),vn(y,E,p)}function Bn(l,p){l.H&&ce(l.H,function(y,E){Ue(p,E,y)}),l.l&&ce({},function(y,E){Ue(p,E,y)})}function Go(l,p,y){y=Math.min(l.i.length,y);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var L=l.i;let Ee=-1;for(;;){const ot=["count="+y];Ee==-1?y>0?(Ee=L[0].g,ot.push("ofs="+Ee)):Ee=0:ot.push("ofs="+Ee);let Be=!0;for(let ct=0;ct<y;ct++){var U=L[ct].g;const nn=L[ct].map;if(U-=Ee,U<0)Ee=Math.max(0,L[ct].g-100),Be=!1;else try{U="req"+U+"_"||"";try{var X=nn instanceof Map?nn:Object.entries(nn);for(const[pr,Hn]of X){let Wn=Hn;m(Hn)&&(Wn=br(Hn)),ot.push(U+pr+"="+encodeURIComponent(Wn))}}catch(pr){throw ot.push(U+"type="+encodeURIComponent("_badmap")),pr}}catch{E&&E(nn)}}if(Be){X=ot.join("&");break e}}X=void 0}return l=l.i.splice(0,y),p.G=l,X}function Dt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Le||S(),xe||(Le(),xe=!0),k.add(p,l),l.A=0}}function $n(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ur(_(l.Da,l),Vs(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Gr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ur(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),en(this),Gr(this))};function zi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Gr(l){l.g=new an(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=ln(l.na);Ue(p,"RID","rpc"),Ue(p,"SID",l.M),Ue(p,"AID",l.K),Ue(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ue(p,"TO",l.ia),Ue(p,"TYPE","xmlhttp"),Bn(l,p),l.u&&l.o&&Cs(p,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=ur(ln(p)),y.u=null,y.R=!0,Oo(y,l)}i.Va=function(){this.C!=null&&(this.C=null,en(this),$n(this),rt(19))};function Ns(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ds(l,p){var y=null;if(l.g==p){Ns(l),zi(l),l.g=null;var E=2}else if(Mo(l.h,p))y=p.G,Oi(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var L=l.D;E=Fr(),st(E,new Do(E,y)),fr(l)}else Dt(l);else if(L=p.m,L==3||L==0&&p.X>0||!(E==1&&_l(l,p)||E==2&&$n(l)))switch(y&&y.length>0&&(p=l.h,p.i=p.i.concat(y)),L){case 1:tn(l,5);break;case 4:tn(l,10);break;case 3:tn(l,6);break;default:tn(l,2)}}}function Vs(l,p){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*p}function tn(l,p){if(l.j.info("Error code "+p),p==2){var y=_(l.bb,l),E=l.Ua;const L=!E;E=new On(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||bi(E,"https"),ur(E),L?Fn(E.toString(),y):Un(E.toString(),y)}else rt(2);l.I=0,l.l&&l.l.pa(p),Bi(l),xs(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Bi(l){if(l.I=0,l.ja=[],l.l){const p=Jt(l.h);(p.length!=0||l.i.length!=0)&&(Y(l.ja,p),Y(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Ko(l,p,y){var E=y instanceof On?ln(y):new On(y);if(E.g!="")p&&(E.g=p+"."+E.g),bn(E,E.u);else{var L=h.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const U=new On(null);E&&bi(U,E),p&&(U.g=p),L&&bn(U,L),y&&(U.h=y),E=U}return y=l.G,p=l.wa,y&&p&&Ue(E,y,p),Ue(E,"VER",l.ka),Bn(l,E),E}function vl(l,p,y){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new He(new cr({ab:y})):new He(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}i=El.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Os(){}Os.prototype.g=function(l,p){return new At(l,p)};function At(l,p){ut.call(this),this.g=new Ps(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Kr(this)}I(At,ut),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){ks(this.g)},At.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=br(l),l=y);p.i.push(new mc(p.Ya++,l)),p.I==3&&fr(p)},At.prototype.N=function(){this.g.l=null,delete this.j,ks(this.g),delete this.g,At.Z.N.call(this)};function wl(l){_s.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}I(wl,_s);function Tl(){No.call(this),this.status=1}I(Tl,No);function Kr(l){this.g=l}I(Kr,El),Kr.prototype.ra=function(){st(this.g,"a")},Kr.prototype.qa=function(l){st(this.g,new wl(l))},Kr.prototype.pa=function(l){st(this.g,new Tl)},Kr.prototype.oa=function(){st(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,__=function(){return new Os},y_=function(){return Fr()},g_=_n,md={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zr.NO_ERROR=0,zr.TIMEOUT=8,zr.HTTP_ERROR=6,Cu=zr,Br.COMPLETE="complete",m_=Br,rl.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Ta=rl,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,p_=He}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let To="12.10.0";function nS(i){To=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const as=new Md("@firebase/firestore");function no(){return as.logLevel}function te(i,...e){if(as.logLevel<=Ce.DEBUG){const t=e.map(Gd);as.debug(`Firestore (${To}): ${i}`,...t)}}function xr(i,...e){if(as.logLevel<=Ce.ERROR){const t=e.map(Gd);as.error(`Firestore (${To}): ${i}`,...t)}}function ls(i,...e){if(as.logLevel<=Ce.WARN){const t=e.map(Gd);as.warn(`Firestore (${To}): ${i}`,...t)}}function Gd(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,v_(i,s,t)}function v_(i,e,t){let s=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xr(s),new Error(s)}function ze(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||v_(e,o,s)}function we(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class iS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class sS{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ei,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ei)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new E_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class oS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class aS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new oS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Eg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Eg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Eg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=uS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function gd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Yh(o)===Yh(u)?Pe(o,u):Yh(o)?1:-1}return Pe(i.length,e.length)}const cS=55296,hS=57343;function Yh(i){const e=i.charCodeAt(0);return e>=cS&&e<=hS}function po(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="__name__";class Jn{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&pe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Jn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Pe(e.length,t.length)}static compareSegments(e,t){const s=Jn.isNumericId(e),o=Jn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Jn.extractNumericId(e).compare(Jn.extractNumericId(t)):gd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vi.fromString(e.substring(4,e.length-2))}}class tt extends Jn{construct(e,t,s){return new tt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new le(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new tt(t)}static emptyPath(){return new tt([])}}const dS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Jn{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return dS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wg}static keyField(){return new kt([wg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new le(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new le(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new le(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new le(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(tt.fromString(e))}static fromName(e){return new fe(tt.fromString(e).popFirst(5))}static empty(){return new fe(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new tt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(i,e,t){if(!t)throw new le(K.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function pS(i,e,t,s){if(e===!0&&s===!0)throw new le(K.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Tg(i){if(!fe.isDocumentKey(i))throw new le(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function w_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Qd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":pe(12329,{type:typeof i})}function ba(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new le(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qd(i);throw new le(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function ft(i,e){const t={typeString:i};return e&&(t.value=e),t}function Qa(i,e){if(!w_(i))throw new le(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new le(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=-62135596800,Sg=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Sg);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ig)throw new le(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sg}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qa(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ig;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:ft("string",Ye._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ye(0,0))}static max(){return new ve(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const La=-1;function mS(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Ti(o,fe.empty(),e)}function gS(i){return new Ti(i.readTime,i.key,La)}class Ti{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ti(ve.min(),fe.empty(),La)}static max(){return new Ti(ve.max(),fe.empty(),La)}}function yS(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(i){if(i.code!==K.FAILED_PRECONDITION||i.message!==_S)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function ES(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function So(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class rc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=-1;function ic(i){return i==null}function zu(i){return i===0&&1/i==-1/0}function wS(i){return typeof i=="number"&&Number.isInteger(i)&&!zu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="";function TS(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Ag(e)),e=IS(i.get(t),e);return Ag(e)}function IS(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case T_:t+="";break;default:t+=u}}return t}function Ag(i){return i+T_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function cs(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function I_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _u(this.root,e,this.comparator,!1)}getReverseIterator(){return new _u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _u(this.root,e,this.comparator,!0)}}class _u{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=u??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cg(this.data.getIterator())}getIteratorFrom(e){return new Cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new kn([])}unionWith(e){let t=new yt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class S_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new S_("Invalid base64 string: "+u):u}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const SS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(i){if(ze(!!i,39018),typeof i=="string"){let e=0;const t=SS.exec(i);if(ze(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(i.seconds),nanos:lt(i.nanos)}}function lt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Si(i){return typeof i=="string"?xt.fromBase64String(i):xt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="server_timestamp",R_="__type__",C_="__previous_value__",P_="__local_write_time__";function Jd(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[R_])==null?void 0:s.stringValue)===A_}function sc(i){const e=i.mapValue.fields[C_];return Jd(e)?sc(e):e}function Ma(i){const e=Ii(i.mapValue.fields[P_].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,t,s,o,u,h,m,g,_,w,I){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w,this.apiKey=I}}const Bu="(default)";class Fa{constructor(e,t){this.projectId=e,this.database=t||Bu}static empty(){return new Fa("","")}get isDefaultDatabase(){return this.database===Bu}isEqual(e){return e instanceof Fa&&e.projectId===this.projectId&&e.database===this.database}}function RS(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new le(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fa(i.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="__type__",CS="__max__",vu={mapValue:{}},x_="__vector__",$u="value";function Ai(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Jd(i)?4:kS(i)?9007199254740991:PS(i)?10:11:pe(28295,{value:i})}function rr(i,e){if(i===e)return!0;const t=Ai(i);if(t!==Ai(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ma(i).isEqual(Ma(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ii(o.timestampValue),m=Ii(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Si(o.bytesValue).isEqual(Si(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return lt(o.geoPointValue.latitude)===lt(u.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return lt(o.integerValue)===lt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=lt(o.doubleValue),m=lt(u.doubleValue);return h===m?zu(h)===zu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return po(i.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Rg(h)!==Rg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!rr(h[g],m[g])))return!1;return!0})(i,e);default:return pe(52216,{left:i})}}function Ua(i,e){return(i.values||[]).find((t=>rr(t,e)))!==void 0}function mo(i,e){if(i===e)return 0;const t=Ai(i),s=Ai(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=lt(u.integerValue||u.doubleValue),g=lt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return Pg(i.timestampValue,e.timestampValue);case 4:return Pg(Ma(i),Ma(e));case 5:return gd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Si(u),g=Si(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Pe(m[_],g[_]);if(w!==0)return w}return Pe(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Pe(lt(u.latitude),lt(h.latitude));return m!==0?m:Pe(lt(u.longitude),lt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return kg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var P,z,Y,H;const m=u.fields||{},g=h.fields||{},_=(P=m[$u])==null?void 0:P.arrayValue,w=(z=g[$u])==null?void 0:z.arrayValue,I=Pe(((Y=_==null?void 0:_.values)==null?void 0:Y.length)||0,((H=w==null?void 0:w.values)==null?void 0:H.length)||0);return I!==0?I:kg(_,w)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===vu.mapValue&&h===vu.mapValue)return 0;if(u===vu.mapValue)return 1;if(h===vu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let I=0;I<g.length&&I<w.length;++I){const P=gd(g[I],w[I]);if(P!==0)return P;const z=mo(m[g[I]],_[w[I]]);if(z!==0)return z}return Pe(g.length,w.length)})(i.mapValue,e.mapValue);default:throw pe(23264,{he:t})}}function Pg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=Ii(i),s=Ii(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function kg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=mo(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function go(i){return yd(i)}function yd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ii(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Si(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return fe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=yd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${yd(t.fields[h])}`;return o+"}"})(i.mapValue):pe(61005,{value:i})}function Pu(i){switch(Ai(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sc(i);return e?16+Pu(e):16;case 5:return 2*i.stringValue.length;case 6:return Si(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Pu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return cs(s.fields,((u,h)=>{o+=u.length+Pu(h)})),o})(i.mapValue);default:throw pe(13486,{value:i})}}function _d(i){return!!i&&"integerValue"in i}function Xd(i){return!!i&&"arrayValue"in i}function xg(i){return!!i&&"nullValue"in i}function Ng(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ku(i){return!!i&&"mapValue"in i}function PS(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[k_])==null?void 0:s.stringValue)===x_}function Pa(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return cs(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Pa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pa(i.arrayValue.values[t]);return e}return{...i}}function kS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===CS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ku(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Pa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());ku(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];ku(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){cs(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new mn(Pa(this.value))}}function N_(i){const e=[];return cs(i.fields,((t,s)=>{const o=new kt([t]);if(ku(s)){const u=N_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,ve.min(),ve.min(),ve.min(),mn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,ve.min(),ve.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,ve.min(),ve.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hu{constructor(e,t){this.position=e,this.inclusive=t}}function Dg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=fe.comparator(fe.fromName(h.referenceValue),t.key):s=mo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!rr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wu{constructor(e,t="asc"){this.field=e,this.dir=t}}function xS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class D_{}class gt extends D_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new DS(e,t,s):t==="array-contains"?new bS(e,s):t==="in"?new LS(e,s):t==="not-in"?new MS(e,s):t==="array-contains-any"?new FS(e,s):new gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new VS(e,s):new OS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mo(t,this.value)):t!==null&&Ai(this.value)===Ai(t)&&this.matchesComparison(mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ir extends D_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ir(e,t)}matches(e){return V_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function V_(i){return i.op==="and"}function O_(i){return NS(i)&&V_(i)}function NS(i){for(const e of i.filters)if(e instanceof ir)return!1;return!0}function vd(i){if(i instanceof gt)return i.field.canonicalString()+i.op.toString()+go(i.value);if(O_(i))return i.filters.map((e=>vd(e))).join(",");{const e=i.filters.map((t=>vd(t))).join(",");return`${i.op}(${e})`}}function b_(i,e){return i instanceof gt?(function(s,o){return o instanceof gt&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)})(i,e):i instanceof ir?(function(s,o){return o instanceof ir&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&b_(h,o.filters[m])),!0):!1})(i,e):void pe(19439)}function L_(i){return i instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${go(t.value)}`})(i):i instanceof ir?(function(t){return t.op.toString()+" {"+t.getFilters().map(L_).join(" ,")+"}"})(i):"Filter"}class DS extends gt{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class VS extends gt{constructor(e,t){super(e,"in",t),this.keys=M_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class OS extends gt{constructor(e,t){super(e,"not-in",t),this.keys=M_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function M_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>fe.fromName(s.referenceValue)))}class bS extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xd(t)&&Ua(t.arrayValue,this.value)}}class LS extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ua(this.value.arrayValue,t)}}class MS extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ua(this.value.arrayValue,t)}}class FS extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ua(this.value.arrayValue,s)))}}/**
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
 */class US{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Og(i,e=null,t=[],s=[],o=null,u=null,h=null){return new US(i,e,t,s,o,u,h)}function Zd(i){const e=we(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>vd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),ic(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>go(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>go(s))).join(",")),e.Te=t}return e.Te}function ef(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!xS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!b_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Vg(i.startAt,e.startAt)&&Vg(i.endAt,e.endAt)}function Ed(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function jS(i,e,t,s,o,u,h,m){return new oc(i,e,t,s,o,u,h,m)}function tf(i){return new oc(i)}function bg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function zS(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function BS(i){return i.collectionGroup!==null}function ka(i){const e=we(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(kt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Wu(u,s))})),t.has(kt.keyField().canonicalString())||e.Ie.push(new Wu(kt.keyField(),s))}return e.Ie}function er(i){const e=we(i);return e.Ee||(e.Ee=$S(e,ka(i))),e.Ee}function $S(i,e){if(i.limitType==="F")return Og(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Wu(o.field,u)}));const t=i.endAt?new Hu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Hu(i.startAt.position,i.startAt.inclusive):null;return Og(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function wd(i,e,t){return new oc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ac(i,e){return ef(er(i),er(e))&&i.limitType===e.limitType}function F_(i){return`${Zd(er(i))}|lt:${i.limitType}`}function ro(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>L_(o))).join(", ")}]`),ic(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>go(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>go(o))).join(",")),`Target(${s})`})(er(i))}; limitType=${i.limitType})`}function lc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):fe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of ka(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=Dg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,ka(s),o)||s.endAt&&!(function(h,m,g){const _=Dg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,ka(s),o))})(i,e)}function HS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function U_(i){return(e,t)=>{let s=!1;for(const o of ka(i)){const u=WS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function WS(i,e,t){const s=i.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?mo(g,_):pe(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return pe(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return I_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=new nt(fe.comparator);function Nr(){return qS}const j_=new nt(fe.comparator);function Ia(...i){let e=j_;for(const t of i)e=e.insert(t.key,t);return e}function z_(i){let e=j_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ns(){return xa()}function B_(){return xa()}function xa(){return new hs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const GS=new nt(fe.comparator),KS=new yt(fe.comparator);function ke(...i){let e=KS;for(const t of i)e=e.add(t);return e}const QS=new yt(Pe);function YS(){return QS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function $_(i){return{integerValue:""+i}}function JS(i,e){return wS(e)?$_(e):nf(i,e)}/**
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
 */class uc{constructor(){this._=void 0}}function XS(i,e,t){return i instanceof ja?(function(o,u){const h={fields:{[R_]:{stringValue:A_},[P_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Jd(u)&&(u=sc(u)),u&&(h.fields[C_]=u),{mapValue:h}})(t,e):i instanceof za?W_(i,e):i instanceof Ba?q_(i,e):(function(o,u){const h=H_(o,u),m=Lg(h)+Lg(o.Ae);return _d(h)&&_d(o.Ae)?$_(m):nf(o.serializer,m)})(i,e)}function ZS(i,e,t){return i instanceof za?W_(i,e):i instanceof Ba?q_(i,e):t}function H_(i,e){return i instanceof qu?(function(s){return _d(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class ja extends uc{}class za extends uc{constructor(e){super(),this.elements=e}}function W_(i,e){const t=G_(e);for(const s of i.elements)t.some((o=>rr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ba extends uc{constructor(e){super(),this.elements=e}}function q_(i,e){let t=G_(e);for(const s of i.elements)t=t.filter((o=>!rr(o,s)));return{arrayValue:{values:t}}}class qu extends uc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Lg(i){return lt(i.integerValue||i.doubleValue)}function G_(i){return Xd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t){this.field=e,this.transform=t}}function t1(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof za&&o instanceof za||s instanceof Ba&&o instanceof Ba?po(s.elements,o.elements,rr):s instanceof qu&&o instanceof qu?rr(s.Ae,o.Ae):s instanceof ja&&o instanceof ja})(i.transform,e.transform)}class n1{constructor(e,t){this.version=e,this.transformResults=t}}class Rr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rr}static exists(e){return new Rr(void 0,e)}static updateTime(e){return new Rr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class cc{}function K_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Y_(i.key,Rr.none()):new Ya(i.key,i.data,Rr.none());{const t=i.data,s=mn.empty();let o=new yt(kt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ds(i.key,s,new kn(o.toArray()),Rr.none())}}function r1(i,e,t){i instanceof Ya?(function(o,u,h){const m=o.value.clone(),g=Fg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof ds?(function(o,u,h){if(!xu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Fg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Q_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Na(i,e,t,s){return i instanceof Ya?(function(u,h,m,g){if(!xu(u.precondition,h))return m;const _=u.value.clone(),w=Ug(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof ds?(function(u,h,m,g){if(!xu(u.precondition,h))return m;const _=Ug(u.fieldTransforms,g,h),w=h.data;return w.setAll(Q_(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((I=>I.field)))})(i,e,t,s):(function(u,h,m){return xu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function i1(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=H_(s.transform,o||null);u!=null&&(t===null&&(t=mn.empty()),t.set(s.field,u))}return t||null}function Mg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&po(s,o,((u,h)=>t1(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ya extends cc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ds extends cc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Q_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Fg(i,e,t){const s=new Map;ze(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,ZS(h,m,t[o]))}return s}function Ug(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,XS(u,h,e))}return s}class Y_ extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s1 extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&r1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=B_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=K_(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,((t,s)=>Mg(t,s)))&&po(this.baseMutations,e.baseMutations,((t,s)=>Mg(t,s)))}}class rf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return GS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new rf(e,t,s,o)}}/**
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
 */class a1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class l1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Ve;function u1(i){switch(i){case K.OK:return pe(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return pe(15467,{code:i})}}function J_(i){if(i===void 0)return xr("GRPC error has no .code"),K.UNKNOWN;switch(i){case dt.OK:return K.OK;case dt.CANCELLED:return K.CANCELLED;case dt.UNKNOWN:return K.UNKNOWN;case dt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case dt.INTERNAL:return K.INTERNAL;case dt.UNAVAILABLE:return K.UNAVAILABLE;case dt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case dt.NOT_FOUND:return K.NOT_FOUND;case dt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case dt.ABORTED:return K.ABORTED;case dt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case dt.DATA_LOSS:return K.DATA_LOSS;default:return pe(39323,{code:i})}}(Ve=dt||(dt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function c1(){return new TextEncoder}/**
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
 */const h1=new vi([4294967295,4294967295],0);function jg(i){const e=c1().encode(i),t=new f_;return t.update(e),new Uint8Array(t.digest())}function zg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new vi([t,s],0),new vi([o,u],0)]}class sf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Sa(`Invalid padding: ${t}`);if(s<0)throw new Sa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(vi.fromNumber(s)));return o.compare(h1)===1&&(o=new vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=jg(e),[s,o]=zg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new sf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=jg(e),[s,o]=zg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.be(h)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ja.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new hc(ve.min(),o,new nt(Pe),Nr(),ke())}}class Ja{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ja(s,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=o}}class X_{constructor(e,t){this.targetId=e,this.Ce=t}}class Z_{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Bg{constructor(){this.ve=0,this.Fe=$g(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ke(),t=ke(),s=ke();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe(38017,{changeType:u})}})),new Ja(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=$g()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class d1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nr(),this.He=Eu(),this.Je=Eu(),this.Ze=new nt(Pe)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Ed(u))if(s===0){const h=new fe(u.path);this.et(t,h,Ut.newNoDocument(h,ve.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Si(s).toUint8Array()}catch(g){if(g instanceof S_)return ls("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new sf(h,o,u)}catch(g){return ls(g instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Ed(m.target)){const g=new fe(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Ut.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.Ke())}}));let s=ke();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new hc(e,t,this.Ze,this.je,s);return this.je=Nr(),this.He=Eu(),this.Je=Eu(),this.Ze=new nt(Pe),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Bg,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new yt(Pe),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new yt(Pe),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Bg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Eu(){return new nt(fe.comparator)}function $g(){return new nt(fe.comparator)}const f1={asc:"ASCENDING",desc:"DESCENDING"},p1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m1={and:"AND",or:"OR"};class g1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Td(i,e){return i.useProto3Json||ic(e)?e:{value:e}}function Gu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ev(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function y1(i,e){return Gu(i,e.toTimestamp())}function tr(i){return ze(!!i,49232),ve.fromTimestamp((function(t){const s=Ii(t);return new Ye(s.seconds,s.nanos)})(i))}function of(i,e){return Id(i,e).canonicalString()}function Id(i,e){const t=(function(o){return new tt(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function tv(i){const e=tt.fromString(i);return ze(ov(e),10190,{key:e.toString()}),e}function Sd(i,e){return of(i.databaseId,e.path)}function Jh(i,e){const t=tv(e);if(t.get(1)!==i.databaseId.projectId)throw new le(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new le(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new fe(rv(t))}function nv(i,e){return of(i.databaseId,e)}function _1(i){const e=tv(i);return e.length===4?tt.emptyPath():rv(e)}function Ad(i){return new tt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function rv(i){return ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Hg(i,e,t){return{name:Sd(i,e),fields:t.value.mapValue.fields}}function v1(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:pe(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(ze(w===void 0||typeof w=="string",58123),xt.fromBase64String(w||"")):(ze(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),xt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?K.UNKNOWN:J_(_.code);return new le(w,_.message||"")})(h);t=new Z_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Jh(i,s.document.name),u=tr(s.document.updateTime),h=s.document.createTime?tr(s.document.createTime):ve.min(),m=new mn({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Nu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Jh(i,s.document),u=s.readTime?tr(s.readTime):ve.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Jh(i,s.document),u=s.removedTargetIds||[];t=new Nu([],u,o,null)}else{if(!("filter"in e))return pe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new l1(o,u),m=s.targetId;t=new X_(m,h)}}return t}function E1(i,e){let t;if(e instanceof Ya)t={update:Hg(i,e.key,e.value)};else if(e instanceof Y_)t={delete:Sd(i,e.key)};else if(e instanceof ds)t={update:Hg(i,e.key,e.data),updateMask:k1(e.fieldMask)};else{if(!(e instanceof s1))return pe(16599,{dt:e.type});t={verify:Sd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof ja)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof za)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ba)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof qu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw pe(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:y1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe(27497)})(i,e.precondition)),t}function w1(i,e){return i&&i.length>0?(ze(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?tr(o.updateTime):tr(u);return h.isEqual(ve.min())&&(h=tr(u)),new n1(h,o.transformResults||[])})(t,e)))):[]}function T1(i,e){return{documents:[nv(i,e.path)]}}function I1(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=nv(i,o);const u=(function(_){if(_.length!==0)return sv(ir.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(P){return{field:io(P.field),direction:R1(P.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Td(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function S1(i){let e=_1(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(I){const P=iv(I);return P instanceof ir&&O_(P)?P.getFilters():[P]})(t.where));let h=[];t.orderBy&&(h=(function(I){return I.map((P=>(function(Y){return new Wu(so(Y.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(P)))})(t.orderBy));let m=null;t.limit&&(m=(function(I){let P;return P=typeof I=="object"?I.value:I,ic(P)?null:P})(t.limit));let g=null;t.startAt&&(g=(function(I){const P=!!I.before,z=I.values||[];return new Hu(z,P)})(t.startAt));let _=null;return t.endAt&&(_=(function(I){const P=!I.before,z=I.values||[];return new Hu(z,P)})(t.endAt)),jS(e,o,h,u,m,"F",g,_)}function A1(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function iv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=so(t.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=so(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=so(t.unaryFilter.field);return gt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=so(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(i):i.fieldFilter!==void 0?(function(t){return gt.create(so(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return ir.create(t.compositeFilter.filters.map((s=>iv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(t.compositeFilter.op))})(i):pe(30097,{filter:i})}function R1(i){return f1[i]}function C1(i){return p1[i]}function P1(i){return m1[i]}function io(i){return{fieldPath:i.canonicalString()}}function so(i){return kt.fromServerFormat(i.fieldPath)}function sv(i){return i instanceof gt?(function(t){if(t.op==="=="){if(Ng(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NAN"}};if(xg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ng(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NAN"}};if(xg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(t.field),op:C1(t.op),value:t.value}}})(i):i instanceof ir?(function(t){const s=t.getFilters().map((o=>sv(o)));return s.length===1?s[0]:{compositeFilter:{op:P1(t.op),filters:s}}})(i):pe(54877,{filter:i})}function k1(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ov(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function av(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,s,o,u=ve.min(),h=ve.min(),m=xt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.yt=e}}function N1(i){const e=S1({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?wd(e,e.limit,"L"):e}/**
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
 */class D1{constructor(){this.Sn=new V1}addToCollectionParentIndex(e,t){return this.Sn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ti.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class V1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(tt.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(tt.comparator)).toArray()}}/**
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
 */const Wg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lv=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(lv,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new yo(0)}static ar(){return new yo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="LruGarbageCollector",O1=1048576;function Gg([i,e],[t,s]){const o=Pe(i,t);return o===0?Pe(e,s):o}class b1{constructor(e){this.Pr=e,this.buffer=new yt(Gg),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Gg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class L1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){te(qg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){So(t)?te(qg,"Ignoring IndexedDB error during garbage collection: ",t):await Io(t)}await this.Ar(3e5)}))}}class M1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(rc.ce);const s=new b1(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Wg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wg):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o)))).next((I=>(s=I,m=Date.now(),this.removeTargets(e,s,t)))).next((I=>(u=I,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((I=>(_=Date.now(),no()<=Ce.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${I} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:I}))))}}function F1(i,e){return new M1(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.changes=new hs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class j1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Na(s.mutation,o,kn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ke()){const o=ns();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ia();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ns();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ke())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Nr();const h=xa(),m=(function(){return xa()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof ds)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Na(w.mutation,_,w.mutation.getFieldMask(),Ye.now())):h.set(_.key,kn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>m.set(_,new j1(w,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=xa();let o=new nt(((h,m)=>h-m)),u=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||kn.empty();w=m.applyToLocalView(_,w),s.set(g,w);const I=(o.get(m.batchId)||ke()).add(g);o=o.insert(m.batchId,I)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,I=B_();w.forEach((P=>{if(!u.has(P)){const z=K_(t.get(P),s.get(P));z!==null&&I.set(P,z),u=u.add(P)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,I))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return zS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):BS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(ns());let m=La,g=u;return h.next((_=>$.forEach(_,((w,I)=>(m<I.largestBatchId&&(m=I.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((P=>{g=g.insert(w,P)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,ke()))).next((w=>({batchId:m,changes:z_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let o=Ia();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ia();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(g=>{const _=(function(I,P){return new oc(P,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((I,P)=>{h=h.insert(I,P)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))}));let m=Ia();return h.forEach(((g,_)=>{const w=u.get(g);w!==void 0&&Na(w.mutation,_,kn.empty(),Ye.now()),lc(t,_)&&(m=m.insert(g,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:tr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:N1(o.bundledQuery),readTime:tr(o.readTime)}})(t)),$.resolve()}}/**
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
 */class $1{constructor(){this.overlays=new nt(fe.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ns();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.bt(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=ns(),u=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=ns(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=ns(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return $.resolve(m)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new a1(t,s));let u=this.Lr.get(t);u===void 0&&(u=ke(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
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
 */class H1{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.kr=new yt(Tt.Kr),this.qr=new yt(Tt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Tt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new fe(new tt([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.qr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new fe(new tt([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=ke();return this.qr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return fe.comparator(e.key,t.key)||Pe(e.Hr,t.Hr)}static Ur(e,t){return Pe(e.Hr,t.Hr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new yt(Tt.Kr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new o1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Jr=this.Jr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Yd:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Pe);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),$.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;fe.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new fe(u),0);let m=new yt(Pe);return this.Jr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Hr)),!0)}),h),$.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return $.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Jr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.ti=e,this.docs=(function(){return new nt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Nr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Nr();const h=t.path,m=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||yS(gS(w),s)<=0||(o.has(w.key)||lc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe(9500)}ni(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new G1(this)}getSize(e){return $.resolve(this.size)}}class G1 extends U1{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.persistence=e,this.ri=new hs((t=>Zd(t)),ef),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.ii=0,this.si=new af,this.targetCount=0,this.oi=yo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new yo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t){this._i={},this.overlays={},this.ai=new rc(0),this.ui=!1,this.ui=!0,this.ci=new H1,this.referenceDelegate=e(this),this.li=new K1(this),this.indexManager=new D1,this.remoteDocumentCache=(function(o){return new q1(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new x1(t),this.Pi=new B1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new W1(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new Q1(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return $.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Q1 extends vS{constructor(e){super(),this.currentSequenceNumber=e}}class lf{constructor(e){this.persistence=e,this.Ri=new af,this.Ai=null}static Vi(e){return new lf(e)}get di(){if(this.Ai)return this.Ai;throw pe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(s=>{const o=fe.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,ve.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ku{constructor(e,t){this.persistence=e,this.fi=new hs((s=>TS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=F1(this,t)}static Vi(e,t){return new Ku(e,t)}Ti(){}Ii(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,ve.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pu(e.data.value)),t}wr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=ke(),o=ke();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new uf(e,t.fromCache,s,o)}}/**
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
 */class Y1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class J1{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Lw()?8:ES(jt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new Y1;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(no()<=Ce.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(no()<=Ce.DEBUG&&te("QueryEngine","Query:",ro(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(no()<=Ce.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):$.resolve())}gs(e,t){if(bg(t))return $.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=wd(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=ke(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,m);return this.Ss(t,_,h,g.readTime)?this.gs(e,wd(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return bg(t)||o.isEqual(ve.min())?$.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ss(t,h,s,o)?$.resolve(null):(no()<=Ce.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ro(t)),this.Ds(e,h,t,mS(o,La)).next((m=>m)))}))}bs(e,t){let s=new yt(U_(e));return t.forEach(((o,u)=>{lc(e,u)&&(s=s.add(u))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return no()<=Ce.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ro(t)),this.fs.getDocumentsMatchingQuery(e,t,Ti.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="LocalStore",X1=3e8;class Z1{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new nt(Pe),this.Fs=new hs((u=>Zd(u)),ef),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z1(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function eA(i,e,t,s){return new Z1(i,e,t,s)}async function cv(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=ke();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function tA(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,w){const I=_.batch,P=I.keys();let z=$.resolve();return P.forEach((Y=>{z=z.next((()=>w.getEntry(g,Y))).next((H=>{const B=_.docVersions.get(Y);ze(B!==null,48541),H.version.compareTo(B)<0&&(I.applyToRemoteDocument(H,_),H.isValidDocument()&&(H.setReadTime(_.commitVersion),w.addEntry(H)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(g,I)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=ke();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function hv(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function nA(i,e){const t=we(i),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((w,I)=>{const P=o.get(I);if(!P)return;m.push(t.li.removeMatchingKeys(u,w.removedDocuments,I).next((()=>t.li.addMatchingKeys(u,w.addedDocuments,I))));let z=P.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(I)!==null?z=z.withResumeToken(xt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(I,z),(function(H,B,ae){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=X1?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(P,z,w)&&m.push(t.li.updateTargetData(u,z))}));let g=Nr(),_=ke();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(rA(u,h,e.documentUpdates).next((w=>{g=w.Bs,_=w.Ls}))),!s.isEqual(ve.min())){const w=t.li.getLastRemoteSnapshotVersion(u).next((I=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.vs=o,u)))}function rA(i,e,t){let s=ke(),o=ke();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Nr();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):te(cf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function iA(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Yd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function sA(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Rd(i,e,t){const s=we(i),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!So(h))throw h;te(cf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Kg(i,e,t){const s=we(i);let o=ve.min(),u=ke();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const I=we(g),P=I.Fs.get(w);return P!==void 0?$.resolve(I.vs.get(P)):I.li.getTargetData(_,w)})(s,h,er(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?u:ke()))).next((m=>(oA(s,HS(e),m),{documents:m,ks:u})))))}function oA(i,e,t){let s=i.Ms.get(e)||ve.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class Qg{constructor(){this.activeTargetIds=YS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aA{constructor(){this.vo=new Qg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Qg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lA{Mo(e){}shutdown(){}}/**
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
 */const Yg="ConnectivityMonitor";class Jg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){te(Yg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){te(Yg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wu=null;function Cd(){return wu===null?wu=(function(){return 268435456+Math.round(2147483648*Math.random())})():wu++,"0x"+wu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="RestConnection",uA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class cA{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Bu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Cd(),m=this.Qo(e,t.toUriEncodedString());te(Xh,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,u);const{host:_}=new URL(m),w=vo(_);return this.zo(e,m,g,s,w).then((I=>(te(Xh,`Received RPC '${e}' ${h}: `,I),I)),(I=>{throw ls(Xh,`RPC '${e}' ${h} failed with error: `,I,"url: ",m,"request:",s),I}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+To})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=uA[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection",wa=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class co extends cA{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!co.c_){const e=y_();wa(e,g_.STAT_EVENT,(t=>{t.stat===md.PROXY?te(Mt,"STAT_EVENT: detected buffering proxy"):t.stat===md.NOPROXY&&te(Mt,"STAT_EVENT: detected no buffering proxy")})),co.c_=!0}}zo(e,t,s,o,u){const h=Cd();return new Promise(((m,g)=>{const _=new p_;_.setWithCredentials(!0),_.listenOnce(m_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Cu.NO_ERROR:const I=_.getResponseJson();te(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),m(I);break;case Cu.TIMEOUT:te(Mt,`RPC '${e}' ${h} timed out`),g(new le(K.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const P=_.getStatus();if(te(Mt,`RPC '${e}' ${h} failed with status:`,P,"response text:",_.getResponseText()),P>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const Y=z==null?void 0:z.error;if(Y&&Y.status&&Y.message){const H=(function(ae){const ue=ae.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(ue)>=0?ue:K.UNKNOWN})(Y.status);g(new le(H,Y.message))}else g(new le(K.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new le(K.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{te(Mt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);te(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=Cd(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");te(Mt,`Creating RPC '${e}' stream ${o}: ${_}`,m);const w=h.createWebChannel(_,m);this.I_(w);let I=!1,P=!1;const z=new hA({Ho:Y=>{P?te(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,Y):(I||(te(Mt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),I=!0),te(Mt,`RPC '${e}' stream ${o} sending:`,Y),w.send(Y))},Jo:()=>w.close()});return wa(w,Ta.EventType.OPEN,(()=>{P||(te(Mt,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),wa(w,Ta.EventType.CLOSE,(()=>{P||(P=!0,te(Mt,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.E_(w))})),wa(w,Ta.EventType.ERROR,(Y=>{P||(P=!0,ls(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,Y.name,"Message:",Y.message),z.o_(new le(K.UNAVAILABLE,"The operation could not be completed")))})),wa(w,Ta.EventType.MESSAGE,(Y=>{var H;if(!P){const B=Y.data[0];ze(!!B,16349);const ae=B,ue=(ae==null?void 0:ae.error)||((H=ae[0])==null?void 0:H.error);if(ue){te(Mt,`RPC '${e}' stream ${o} received error:`,ue);const me=ue.status;let De=(function(k){const S=dt[k];if(S!==void 0)return J_(S)})(me),Le=ue.message;me==="NOT_FOUND"&&Le.includes("database")&&Le.includes("does not exist")&&Le.includes(this.databaseId.database)&&ls(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),De===void 0&&(De=K.INTERNAL,Le="Unknown error status: "+me+" with message "+ue.message),P=!0,z.o_(new le(De,Le)),w.close()}else te(Mt,`RPC '${e}' stream ${o} received:`,B),z.__(B)}})),co.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return __()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(i){return new co(i)}function Zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(i){return new g1(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co.c_=!1;class dv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="PersistentStream";class fv{constructor(e,t,s,o,u,h,m,g){this.Ci=e,this.b_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new dv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(xr(t.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new le(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(Xg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(te(Xg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fA extends fv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=v1(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ve.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?tr(h.readTime):ve.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=Ad(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Ed(g)?{documents:T1(u,g)}:{query:I1(u,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=ev(u,h.resumeToken);const _=Td(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ve.min())>0){m.readTime=Gu(u,h.snapshotVersion.toTimestamp());const _=Td(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=A1(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Ad(this.serializer),t.removeTarget=e,this.K_(t)}}class pA extends fv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=w1(e.writeResults,e.commitTime),s=tr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ad(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>E1(this.serializer,s)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{}class gA extends mA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new le(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Id(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new le(K.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,Id(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new le(K.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function yA(i,e,t,s){return new gA(i,e,t,s)}class _A{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="RemoteStore";class vA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{fs(this)&&(te(us,"Restarting streams for network reachability change."),await(async function(g){const _=we(g);_.Ea.add(4),await Xa(_),_.Va.set("Unknown"),_.Ea.delete(4),await fc(_)})(this))}))})),this.Va=new _A(s,o)}}async function fc(i){if(fs(i))for(const e of i.Ra)await e(!0)}async function Xa(i){for(const e of i.Ra)await e(!1)}function pv(i,e){const t=we(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),pf(t)?ff(t):Ao(t).O_()&&df(t,e))}function hf(i,e){const t=we(i),s=Ao(t);t.Ia.delete(e),s.O_()&&mv(t,e),t.Ia.size===0&&(s.O_()?s.L_():fs(t)&&t.Va.set("Unknown"))}function df(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ao(i).Z_(e)}function mv(i,e){i.da.$e(e),Ao(i).X_(e)}function ff(i){i.da=new d1({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Ao(i).start(),i.Va.ua()}function pf(i){return fs(i)&&!Ao(i).x_()&&i.Ia.size>0}function fs(i){return we(i).Ea.size===0}function gv(i){i.da=void 0}async function EA(i){i.Va.set("Online")}async function wA(i){i.Ia.forEach(((e,t)=>{df(i,e)}))}async function TA(i,e){gv(i),pf(i)?(i.Va.ha(e),ff(i)):i.Va.set("Unknown")}async function IA(i,e,t){if(i.Va.set("Online"),e instanceof Z_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.da.removeTarget(m))})(i,e)}catch(s){te(us,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Qu(i,s)}else if(e instanceof Nu?i.da.Xe(e):e instanceof X_?i.da.st(e):i.da.tt(e),!t.isEqual(ve.min()))try{const s=await hv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ia.get(_);w&&u.Ia.set(_,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const w=u.Ia.get(g);if(!w)return;u.Ia.set(g,w.withResumeToken(xt.EMPTY_BYTE_STRING,w.snapshotVersion)),mv(u,g);const I=new pi(w.target,g,_,w.sequenceNumber);df(u,I)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){te(us,"Failed to raise snapshot:",s),await Qu(i,s)}}async function Qu(i,e,t){if(!So(e))throw e;i.Ea.add(1),await Xa(i),i.Va.set("Offline"),t||(t=()=>hv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{te(us,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await fc(i)}))}function yv(i,e){return e().catch((t=>Qu(i,t,e)))}async function pc(i){const e=we(i),t=Ri(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Yd;for(;SA(e);)try{const o=await iA(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,AA(e,o)}catch(o){await Qu(e,o)}_v(e)&&vv(e)}function SA(i){return fs(i)&&i.Ta.length<10}function AA(i,e){i.Ta.push(e);const t=Ri(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function _v(i){return fs(i)&&!Ri(i).x_()&&i.Ta.length>0}function vv(i){Ri(i).start()}async function RA(i){Ri(i).ra()}async function CA(i){const e=Ri(i);for(const t of i.Ta)e.ea(t.mutations)}async function PA(i,e,t){const s=i.Ta.shift(),o=rf.from(s,e,t);await yv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await pc(i)}async function kA(i,e){e&&Ri(i).Y_&&await(async function(s,o){if((function(h){return u1(h)&&h!==K.ABORTED})(o.code)){const u=s.Ta.shift();Ri(s).B_(),await yv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await pc(s)}})(i,e),_v(i)&&vv(i)}async function Zg(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),te(us,"RemoteStore received new credentials");const s=fs(t);t.Ea.add(3),await Xa(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await fc(t)}async function xA(i,e){const t=we(i);e?(t.Ea.delete(2),await fc(t)):e||(t.Ea.add(2),await Xa(t),t.Va.set("Unknown"))}function Ao(i){return i.ma||(i.ma=(function(t,s,o){const u=we(t);return u.sa(),new fA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:EA.bind(null,i),Yo:wA.bind(null,i),t_:TA.bind(null,i),J_:IA.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),pf(i)?ff(i):i.Va.set("Unknown")):(await i.ma.stop(),gv(i))}))),i.ma}function Ri(i){return i.fa||(i.fa=(function(t,s,o){const u=we(t);return u.sa(),new pA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:RA.bind(null,i),t_:kA.bind(null,i),ta:CA.bind(null,i),na:PA.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await pc(i)):(await i.fa.stop(),i.Ta.length>0&&(te(us,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new mf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gf(i,e){if(xr("AsyncQueue",`${e}: ${i}`),So(i))return new le(K.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static emptySet(e){return new ho(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=Ia(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ho)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ho;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.ga=new nt(fe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):pe(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class _o{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new _o(e,t,ho.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class DA{constructor(){this.queries=ty(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=ty(),u.forEach(((h,m)=>{for(const g of m.ba)g.onError(s)}))})(this,new le(K.ABORTED,"Firestore shutting down"))}}function ty(){return new hs((i=>F_(i)),ac)}async function VA(i,e){const t=we(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.Da()&&(s=2):(u=new NA,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=gf(h,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&yf(t)}async function OA(i,e){const t=we(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ba.indexOf(e);h>=0&&(u.ba.splice(h,1),u.ba.length===0?o=e.Da()?0:1:!u.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function bA(i,e){const t=we(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.ba)m.Fa(o)&&(s=!0);h.wa=o}}s&&yf(t)}function LA(i,e,t){const s=we(i),o=s.queries.get(e);if(o)for(const u of o.ba)u.onError(t);s.queries.delete(e)}function yf(i){i.Ca.forEach((e=>{e.next()}))}var Pd,ny;(ny=Pd||(Pd={})).Ma="default",ny.Cache="cache";class MA{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new _o(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Pd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.key=e}}class wv{constructor(e){this.key=e}}class FA{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ke(),this.mutatedKeys=ke(),this.eu=U_(e),this.tu=new ho(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new ey,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,I)=>{const P=o.get(w),z=lc(this.query,I)?I:null,Y=!!P&&this.mutatedKeys.has(P.key),H=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let B=!1;P&&z?P.data.isEqual(z.data)?Y!==H&&(s.track({type:3,doc:z}),B=!0):this.su(P,z)||(s.track({type:2,doc:z}),B=!0,(g&&this.eu(z,g)>0||_&&this.eu(z,_)<0)&&(m=!0)):!P&&z?(s.track({type:0,doc:z}),B=!0):P&&!z&&(s.track({type:1,doc:P}),B=!0,(g||_)&&(m=!0)),B&&(z?(h=h.add(z),u=H?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Ss:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,I)=>(function(z,Y){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Vt:B})}};return H(z)-H(Y)})(w.type,I.type)||this.eu(w.doc,I.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new _o(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ey,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ke(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new wv(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Ev(s))})),t}cu(e){this.Za=e.ks,this.Ya=ke();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return _o.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _f="SyncEngine";class UA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class jA{constructor(e){this.key=e,this.hu=!1}}class zA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new hs((m=>F_(m)),ac),this.Iu=new Map,this.Eu=new Set,this.Ru=new nt(fe.comparator),this.Au=new Map,this.Vu=new af,this.du={},this.mu=new Map,this.fu=yo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BA(i,e,t=!0){const s=Cv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Tv(s,e,t,!0),o}async function $A(i,e){const t=Cv(i);await Tv(t,e,!0,!1)}async function Tv(i,e,t,s){const o=await sA(i.localStore,er(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await HA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&pv(i.remoteStore,o),m}async function HA(i,e,t,s,o){i.pu=(I,P,z)=>(async function(H,B,ae,ue){let me=B.view.ru(ae);me.Ss&&(me=await Kg(H.localStore,B.query,!1).then((({documents:k})=>B.view.ru(k,me))));const De=ue&&ue.targetChanges.get(B.targetId),Le=ue&&ue.targetMismatches.get(B.targetId)!=null,xe=B.view.applyChanges(me,H.isPrimaryClient,De,Le);return iy(H,B.targetId,xe.au),xe.snapshot})(i,I,P,z);const u=await Kg(i.localStore,e,!0),h=new FA(e,u.ks),m=h.ru(u.documents),g=Ja.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,g);iy(i,t,_.au);const w=new UA(e,t,h);return i.Tu.set(e,w),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),_.snapshot}async function WA(i,e,t){const s=we(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!ac(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Rd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&hf(s.remoteStore,o.targetId),kd(s,o.targetId)})).catch(Io)):(kd(s,o.targetId),await Rd(s.localStore,o.targetId,!0))}async function qA(i,e){const t=we(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),hf(t.remoteStore,s.targetId))}async function GA(i,e,t){const s=eR(i);try{const o=await(function(h,m){const g=we(h),_=Ye.now(),w=m.reduce(((z,Y)=>z.add(Y.key)),ke());let I,P;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Y=Nr(),H=ke();return g.xs.getEntries(z,w).next((B=>{Y=B,Y.forEach(((ae,ue)=>{ue.isValidDocument()||(H=H.add(ae))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,Y))).next((B=>{I=B;const ae=[];for(const ue of m){const me=i1(ue,I.get(ue.key).overlayedDocument);me!=null&&ae.push(new ds(ue.key,me,N_(me.value.mapValue),Rr.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,ae,m)})).next((B=>{P=B;const ae=B.applyToLocalDocumentSet(I,H);return g.documentOverlayCache.saveOverlays(z,B.batchId,ae)}))})).then((()=>({batchId:P.batchId,changes:z_(I)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.du[h.currentUser.toKey()];_||(_=new nt(Pe)),_=_.insert(m,g),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await Za(s,o.changes),await pc(s.remoteStore)}catch(o){const u=gf(o,"Failed to persist write");t.reject(u)}}async function Iv(i,e){const t=we(i);try{const s=await nA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await Za(t,s,e)}catch(s){await Io(s)}}function ry(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=we(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,I)=>{for(const P of I.ba)P.va(m)&&(_=!0)})),_&&yf(g)})(s.eventManager,e),o.length&&s.Pu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function KA(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new nt(fe.comparator);h=h.insert(u,Ut.newNoDocument(u,ve.min()));const m=ke().add(u),g=new hc(ve.min(),new Map,new nt(Pe),h,m);await Iv(s,g),s.Ru=s.Ru.remove(u),s.Au.delete(e),vf(s)}else await Rd(s.localStore,e,!1).then((()=>kd(s,e,t))).catch(Io)}async function QA(i,e){const t=we(i),s=e.batch.batchId;try{const o=await tA(t.localStore,e);Av(t,s,null),Sv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Za(t,o)}catch(o){await Io(o)}}async function YA(i,e,t){const s=we(i);try{const o=await(function(h,m){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next((I=>(ze(I!==null,37113),w=I.keys(),g.mutationQueue.removeMutationBatch(_,I)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Av(s,e,t),Sv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Za(s,o)}catch(o){await Io(o)}}function Sv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Av(i,e,t){const s=we(i);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function kd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||Rv(i,s)}))}function Rv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(hf(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),vf(i))}function iy(i,e,t){for(const s of t)s instanceof Ev?(i.Vu.addReference(s.key,e),JA(i,s)):s instanceof wv?(te(_f,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||Rv(i,s.key)):pe(19791,{wu:s})}function JA(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Eu.has(s)||(te(_f,"New document in limbo: "+t),i.Eu.add(s),vf(i))}function vf(i){for(;i.Eu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new fe(tt.fromString(e)),s=i.fu.next();i.Au.set(s,new jA(t)),i.Ru=i.Ru.insert(t,s),pv(i.remoteStore,new pi(er(tf(t.path)),s,"TargetPurposeLimboResolution",rc.ce))}}async function Za(i,e,t){const s=we(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const I=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(_){o.push(_);const I=uf.Es(g.targetId,_);u.push(I)}})))})),await Promise.all(h),s.Pu.J_(o),await(async function(g,_){const w=we(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>$.forEach(_,(P=>$.forEach(P.Ts,(z=>w.persistence.referenceDelegate.addReference(I,P.targetId,z))).next((()=>$.forEach(P.Is,(z=>w.persistence.referenceDelegate.removeReference(I,P.targetId,z)))))))))}catch(I){if(!So(I))throw I;te(cf,"Failed to update sequence numbers: "+I)}for(const I of _){const P=I.targetId;if(!I.fromCache){const z=w.vs.get(P),Y=z.snapshotVersion,H=z.withLastLimboFreeSnapshotVersion(Y);w.vs=w.vs.insert(P,H)}}})(s.localStore,u))}async function XA(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){te(_f,"User change. New user:",e.toKey());const s=await cv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((g=>{g.reject(new le(K.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Za(t,s.Ns)}}function ZA(i,e){const t=we(i),s=t.Au.get(e);if(s&&s.hu)return ke().add(s.key);{let o=ke();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Cv(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KA.bind(null,e),e.Pu.J_=bA.bind(null,e.eventManager),e.Pu.yu=LA.bind(null,e.eventManager),e}function eR(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YA.bind(null,e),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return eA(this.persistence,new J1,e.initialUser,this.serializer)}Cu(e){return new uv(lf.Vi,this.serializer)}Du(e){return new aA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class tR extends Yu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof Ku,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new L1(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new uv((s=>Ku.Vi(s,t)),this.serializer)}}class xd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ry(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=XA.bind(null,this.syncEngine),await xA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new DA})()}createDatastore(e){const t=dc(e.databaseInfo.databaseId),s=dA(e.databaseInfo);return yA(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new vA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ry(this.syncEngine,t,0)),(function(){return Jg.v()?new Jg:new lA})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,w){const I=new zA(o,u,h,m,g,_);return w&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=we(o);te(us,"RemoteStore shutting down."),u.Ea.add(5),await Xa(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}xd.provider={build:()=>new xd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="FirestoreClient";class rR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Kd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{te(Ci,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(te(Ci,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=gf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ed(i,e){i.asyncQueue.verifyOperationInProgress(),te(Ci,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await cv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function sy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await iR(i);te(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Zg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>Zg(e.remoteStore,o))),i._onlineComponents=e}async function iR(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(Ci,"Using user provided OfflineComponentProvider");try{await ed(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ls("Error using user provided cache. Falling back to memory cache: "+t),await ed(i,new Yu)}}else te(Ci,"Using default OfflineComponentProvider"),await ed(i,new tR(void 0));return i._offlineComponents}async function Pv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(Ci,"Using user provided OnlineComponentProvider"),await sy(i,i._uninitializedComponentsProvider._online)):(te(Ci,"Using default OnlineComponentProvider"),await sy(i,new xd))),i._onlineComponents}function sR(i){return Pv(i).then((e=>e.syncEngine))}async function oR(i){const e=await Pv(i),t=e.eventManager;return t.onListen=BA.bind(null,e.syncEngine),t.onUnlisten=WA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$A.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qA.bind(null,e.syncEngine),t}function aR(i,e,t={}){const s=new Ei;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,g,_){const w=new nR({next:P=>{w.Nu(),h.enqueueAndForget((()=>OA(u,I)));const z=P.docs.has(m);!z&&P.fromCache?_.reject(new le(K.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&P.fromCache&&g&&g.source==="server"?_.reject(new le(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(P)},error:P=>_.reject(P)}),I=new MA(tf(m.path),w,{includeMetadataChanges:!0,Ka:!0});return VA(u,I)})(await oR(i),i.asyncQueue,e,t,s))),s.promise}function lR(i,e){const t=new Ei;return i.asyncQueue.enqueueAndForget((async()=>GA(await sR(i),e,t))),t.promise}/**
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
 */function kv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="ComponentProvider",oy=new Map;function cR(i,e,t,s,o){return new AS(i,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,kv(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="firestore.googleapis.com",ay=!0;class ly{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new le(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xv,this.ssl=ay}else this.host=e.host,this.ssl=e.ssl??ay;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<O1)throw new le(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ef{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ly({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ly(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new rS;switch(s.type){case"firstParty":return new aS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=oy.get(t);s&&(te(uR,"Removing Datastore"),oy.delete(t),s.terminate())})(this),Promise.resolve()}}function hR(i,e,t,s={}){var _;i=ba(i,Ef);const o=vo(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Cy(`https://${m}`),Py("Firestore",!0)),u.host!==xv&&u.host!==m&&ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!is(g,h)&&(i._setSettings(g),s.mockUserToken)){let w,I;if(typeof s.mockUserToken=="string")w=s.mockUserToken,I=Ft.MOCK_USER;else{w=Cw(s.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const P=s.mockUserToken.sub||s.mockUserToken.user_id;if(!P)throw new le(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Ft(P)}i._authCredentials=new iS(new E_(w,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wf(this.firestore,e,this._query)}}class It{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $a(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qa(t,It._jsonSchema))return new It(e,s||null,new fe(tt.fromString(t.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:ft("string",It._jsonSchemaVersion),referencePath:ft("string")};class $a extends wf{constructor(e,t,s){super(e,t,tf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new fe(e))}withConverter(e){return new $a(this.firestore,e,this._path)}}function dR(i,e,...t){if(i=Nn(i),arguments.length===1&&(e=Kd.newId()),fS("doc","path",e),i instanceof Ef){const s=tt.fromString(e,...t);return Tg(s),new It(i,null,new fe(s))}{if(!(i instanceof It||i instanceof $a))throw new le(K.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(tt.fromString(e,...t));return Tg(s),new It(i.firestore,i instanceof $a?i.converter:null,new fe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="AsyncQueue";class cy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new dv(this,"async_queue_retry"),this._c=()=>{const s=Zh();s&&te(uy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Zh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Zh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ei;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!So(e))throw e;te(uy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",hy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=mf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&pe(47125,{Pc:hy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function hy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Tf extends Ef{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new cy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cy(e),this._firestoreClient=void 0,await e}}}function fR(i,e){const t=typeof i=="object"?i:Dy(),s=typeof i=="string"?i:Bu,o=Ud(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Aw("firestore");u&&hR(o,...u)}return o}function Nv(i){if(i._terminated)throw new le(K.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||pR(i),i._firestoreClient}function pR(i){var s,o,u,h;const e=i._freezeSettings(),t=cR(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,e);i._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new rR(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(xt.fromBase64String(e))}catch(t){throw new le(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qa(e,gn._jsonSchema))return gn.fromBase64String(e.bytes)}}gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:ft("string",gn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nr._jsonSchemaVersion}}static fromJSON(e){if(Qa(e,nr._jsonSchema))return new nr(e.latitude,e.longitude)}}nr._jsonSchemaVersion="firestore/geoPoint/1.0",nr._jsonSchema={type:ft("string",nr._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class xn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qa(e,xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new xn(e.vectorValues);throw new le(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xn._jsonSchemaVersion="firestore/vectorValue/1.0",xn._jsonSchema={type:ft("string",xn._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=/^__.*__$/;class gR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ya(e,this.data,t,this.fieldTransforms)}}function Vv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{dataSource:i})}}class Sf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Sf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ju(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Vv(this.dataSource)&&mR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class yR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||dc(e)}createContext(e,t,s,o=!1){return new Sf({dataSource:e,methodName:t,targetDoc:s,path:kt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _R(i){const e=i._freezeSettings(),t=dc(i._databaseId);return new yR(i._databaseId,!!e.ignoreUndefinedProperties,t)}function vR(i,e,t,s,o,u={}){const h=i.createContext(u.merge||u.mergeFields?2:0,e,t,o);Mv("Data must be an object, but it was:",h,s);const m=bv(s,h);let g,_;if(u.merge)g=new kn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const I of u.mergeFields){const P=Rf(e,I,t);if(!h.contains(P))throw new le(K.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);TR(w,P)||w.push(P)}g=new kn(w),_=h.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,_=h.fieldTransforms;return new gR(new mn(m),g,_)}class Af extends If{_toFieldTransform(e){return new e1(e.path,new ja)}isEqual(e){return e instanceof Af}}function Ov(i,e){if(Lv(i=Nn(i)))return Mv("Unsupported field value:",e,i),bv(i,e);if(i instanceof If)return(function(s,o){if(!Vv(o.dataSource))throw o.createError(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Ov(m,o.childContextForArray(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Nn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return JS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ye.fromDate(s);return{timestampValue:Gu(o.serializer,u)}}if(s instanceof Ye){const u=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Gu(o.serializer,u)}}if(s instanceof nr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof gn)return{bytesValue:ev(o.serializer,s._byteString)};if(s instanceof It){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:of(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof xn)return(function(h,m){const g=h instanceof xn?h.toArray():h;return{mapValue:{fields:{[k_]:{stringValue:x_},[$u]:{arrayValue:{values:g.map((w=>{if(typeof w!="number")throw m.createError("VectorValues must only contain numeric values.");return nf(m.serializer,w)}))}}}}}})(s,o);if(av(s))return s._toProto(o.serializer);throw o.createError(`Unsupported field value: ${Qd(s)}`)})(i,e)}function bv(i,e){const t={};return I_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(i,((s,o)=>{const u=Ov(o,e.childContextForField(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Lv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof nr||i instanceof gn||i instanceof It||i instanceof If||i instanceof xn||av(i))}function Mv(i,e,t){if(!Lv(t)||!w_(t)){const s=Qd(t);throw s==="an object"?e.createError(i+" a custom object"):e.createError(i+" "+s)}}function Rf(i,e,t){if((e=Nn(e))instanceof Dv)return e._internalPath;if(typeof e=="string")return wR(i,e);throw Ju("Field path arguments must be of type string or ",i,!1,void 0,t)}const ER=new RegExp("[~\\*/\\[\\]]");function wR(i,e,t){if(e.search(ER)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Dv(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ju(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new le(K.INVALID_ARGUMENT,m+i+g)}function TR(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{convertValue(e,t="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return cs(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[$u].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>lt(h.doubleValue)));return new xn(t)}convertGeoPoint(e){return new nr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=sc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ma(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=tt.fromString(e);ze(ov(s),9688,{name:e});const o=new Fa(s.get(1),s.get(3)),u=new fe(s.popFirst(5));return o.isEqual(t)||xr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class SR extends IR{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function Fv(){return new Af("serverTimestamp")}const dy="@firebase/firestore",fy="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class AR extends Uv{data(){return super.data()}}function RR(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Aa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rs extends Uv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Rf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=rs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",rs._jsonSchema={type:ft("string",rs._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Du extends rs{data(e={}){return super.data(e)}}class Da{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Aa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Du(this._firestore,this._userDataWriter,s.key,s,new Aa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Aa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Aa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:CR(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Da._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CR(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:i})}}/**
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
 */Da._jsonSchemaVersion="firestore/querySnapshot/1.0",Da._jsonSchema={type:ft("string",Da._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(i){i=ba(i,It);const e=ba(i.firestore,Tf),t=Nv(e);return aR(t,i._key).then((s=>xR(e,i,s)))}function jv(i,e,t){i=ba(i,It);const s=ba(i.firestore,Tf),o=RR(i.converter,e),u=_R(s);return kR(s,[vR(u,"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Rr.none())])}function kR(i,e){const t=Nv(i);return lR(t,e)}function xR(i,e,t){const s=t.docs.get(e._key),o=new SR(i);return new rs(i,o,e._key,s,new Aa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){nS(Eo),fo(new ss("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Tf(new sS(s.getProvider("auth-internal")),new lS(h,s.getProvider("app-check-internal")),RS(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),yi(dy,fy,e),yi(dy,fy,"esm2020")})();const NR=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"];function DR(i){return NR.filter(e=>!i[e])}function VR(i){const e=DR(i);if(e.length>0)throw new Error(`Missing required Firebase environment variables: ${e.join(", ")}. Ensure variables are set in .env.local (local dev) or GitHub Secrets (CI/CD).`)}const OR={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",VITE_FIREBASE_APP_ID:"1:662195056281:web:9a116d842188f7e7599208",VITE_FIREBASE_AUTH_DOMAIN:"math-trainer-1a632.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"662195056281",VITE_FIREBASE_PROJECT_ID:"math-trainer-1a632",VITE_FIREBASE_STORAGE_BUCKET:"math-trainer-1a632.firebasestorage.app"};VR(OR);const bR={apiKey:"AIzaSyD7PTbHJQehQB9nJvLU44gUyCizbQHasX4",authDomain:"math-trainer-1a632.firebaseapp.com",projectId:"math-trainer-1a632",storageBucket:"math-trainer-1a632.firebasestorage.app",messagingSenderId:"662195056281",appId:"1:662195056281:web:9a116d842188f7e7599208"};let td,Nd,zv;try{td=Ny(bR),Nd=XI(td),zv=fR(td)}catch(i){throw new Error(`Firebase initialization failed: ${i.message}. Check that your Firebase configuration values are correct.`)}function LR(){const[i,e]=_e.useState(null),[t,s]=_e.useState(!0),[o,u]=_e.useState(null),h=_e.useCallback(async()=>{try{u(null),await b0(Nd)}catch(m){console.error("Anonymous sign-in failed:",m.message),u(m)}},[]);return _e.useEffect(()=>{const m=z0(Nd,g=>{g?(e(g),s(!1),console.log("User authenticated with ID:",g.uid)):(e(null),h())},g=>{console.error("Auth state change error:",g.message),u(g),s(!1)});return()=>m()},[h]),{user:i,loading:t,error:o}}const Ar={score:0,streak:0,currentStreak:0,totalProblems:0,correctAnswers:0,lastPlayed:null};function Cf(i){return dR(zv,"users",i,"progress","gameData")}async function py(i,e){if(!i)return console.error("saveProgress: userId is required"),!1;try{const t=Cf(i);return await jv(t,{...e,lastPlayed:Fv()}),console.log("Progress saved successfully for user:",i.substring(0,8)),!0}catch(t){throw console.error("Failed to save progress:",t.message),t}}async function MR(i){var e;if(!i)return console.error("loadProgress: userId is required"),Ar;try{const t=Cf(i),s=await PR(t);if(s.exists()){const o=s.data();return console.log("Progress loaded for user:",i.substring(0,8)),{...Ar,...o,lastPlayed:((e=o.lastPlayed)==null?void 0:e.toDate())||null}}else return console.log("No progress found for user, returning defaults:",i.substring(0,8)),Ar}catch(t){return console.error("Failed to load progress:",t.message),Ar}}async function FR(i){if(!i)return console.error("resetProgress: userId is required"),!1;try{const e=Cf(i);return await jv(e,{...Ar,lastPlayed:Fv()}),console.log("Progress reset for user:",i.substring(0,8)),!0}catch(e){throw console.error("Failed to reset progress:",e.message),e}}const UR=2e3;function jR(i){const[e,t]=_e.useState(Ar),[s,o]=_e.useState(!0),[u,h]=_e.useState(!1),[m,g]=_e.useState(null),_=_e.useRef(!1),w=_e.useRef(null),I=_e.useRef(!0);_e.useEffect(()=>{if(!i){o(!1);return}let B=!1;async function ae(){try{o(!0),g(null);const ue=await MR(i);!B&&I.current&&(t(ue),_.current=!0)}catch(ue){!B&&I.current&&(console.error("useGameProgress: Failed to load progress",ue),g(ue),t(Ar),_.current=!0)}finally{!B&&I.current&&o(!1)}}return ae(),()=>{B=!0}},[i]),_e.useEffect(()=>(I.current=!0,()=>{I.current=!1,w.current&&clearTimeout(w.current)}),[]);const P=_e.useCallback(B=>{!i||!_.current||(w.current&&clearTimeout(w.current),w.current=setTimeout(async()=>{if(I.current)try{h(!0),await py(i,B),I.current&&g(null)}catch(ae){console.error("useGameProgress: Failed to save progress",ae),I.current&&g(ae)}finally{I.current&&h(!1)}},UR))},[i]),z=_e.useCallback(B=>{t(ae=>{const ue={...ae,...B};return P(ue),ue})},[P]),Y=_e.useCallback(async()=>{if(!i)return t(Ar),!0;try{return h(!0),g(null),await FR(i),I.current&&t(Ar),!0}catch(B){return console.error("useGameProgress: Failed to reset progress",B),I.current&&g(B),!1}finally{I.current&&h(!1)}},[i]),H=_e.useCallback(async()=>{if(!i||!_.current)return!1;w.current&&clearTimeout(w.current);try{return h(!0),await py(i,e),I.current&&g(null),!0}catch(B){return console.error("useGameProgress: Failed to force save",B),I.current&&g(B),!1}finally{I.current&&h(!1)}},[i,e]);return{progress:e,updateProgress:z,resetProgress:Y,forceSave:H,loading:s,saving:u,error:m}}const nd=[{id:1,name:"First Steps",operators:["+"],minNumber:1,maxNumber:5,ageTarget:"5-6"},{id:2,name:"Addition Hero",operators:["+"],minNumber:1,maxNumber:10,ageTarget:"6"},{id:3,name:"Minus Magic",operators:["-"],minNumber:1,maxNumber:10,ageTarget:"6-7"},{id:4,name:"Mixed Warrior",operators:["+","-"],minNumber:1,maxNumber:10,ageTarget:"7"},{id:5,name:"Cross the 10",operators:["+"],minNumber:1,maxNumber:20,ageTarget:"7"},{id:6,name:"Subtract 20",operators:["-"],minNumber:1,maxNumber:20,ageTarget:"7-8"},{id:7,name:"Mixed 20",operators:["+","-"],minNumber:1,maxNumber:20,ageTarget:"8"},{id:8,name:"Tens Master",operators:["+","-"],minNumber:10,maxNumber:100,ageTarget:"8-9",multiplesOf:10},{id:9,name:"Century Runner",operators:["+","-"],minNumber:1,maxNumber:100,ageTarget:"9"},{id:10,name:"Speed of 2s",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"9-10",multipliers:[2,5,10]},{id:11,name:"Times Tables",operators:["*"],minNumber:2,maxNumber:10,ageTarget:"10-11",multipliers:[3,4,6,7,8,9]},{id:12,name:"Division Quest",operators:["/"],minNumber:2,maxNumber:10,ageTarget:"11-12",divisors:[2,5,10]},{id:13,name:"Math Champion",operators:["+","-","*","/"],minNumber:1,maxNumber:100,ageTarget:"12-13"}];function Dd(i){if(i<1||i>nd.length)throw new Error(`Invalid level: ${i}. Must be 1-${nd.length}`);return nd[i-1]}const Vd={NUM_OPTIONS:4,WRONG_ANSWER_RANGE:3},zR=Dd(2);function Yn(i,e){return Math.floor(Math.random()*(e-i+1))+i}function Tu(i,e,t){const s=Math.ceil(i/t)*t,o=[];for(let u=s;u<=e;u+=t)o.push(u);return o[Yn(0,o.length-1)]}function Bv(i){const e=[...i];for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function BR(i,e,t){t===void 0&&(t=i+20);const s=new Set,o=0,u=[];for(let g=-3;g<=Vd.WRONG_ANSWER_RANGE;g++){if(g===0)continue;const _=i+g;_>=o&&_<=t&&u.push(_)}const h=Bv(u);for(const g of h){if(s.size>=e)break;s.add(g)}let m=Vd.WRONG_ANSWER_RANGE+1;for(;s.size<e;){const g=i+m,_=i-m;if(g<=t&&!s.has(g)&&s.add(g),s.size<e&&_>=o&&!s.has(_)&&s.add(_),m++,m>t)break}return Array.from(s).slice(0,e)}function my(i=zR){const{operators:e,minNumber:t,maxNumber:s,multiplesOf:o,multipliers:u,divisors:h}=i,m=e[Yn(0,e.length-1)];let g,_,w,I;if(m==="+")g=o?Tu(t,s,o):Yn(t,s),_=o?Tu(t,s,o):Yn(t,s),w=g+_,I=s*2;else if(m==="-")g=o?Tu(t,s,o):Yn(t,s),_=o?Tu(t,g,o):Yn(t,g),g<_&&([g,_]=[_,g]),w=g-_,I=s;else if(m==="*"){const Y=u||[2,3,4,5,6,7,8,9,10];g=Y[Yn(0,Y.length-1)],_=Yn(1,10),w=g*_,I=Math.max(...Y)*10}else{const Y=h||[2,3,4,5];_=Y[Yn(0,Y.length-1)];const H=Yn(1,10);g=_*H,w=H,I=Math.max(...Y)*10}const P=BR(w,Vd.NUM_OPTIONS-1,I),z=Bv([w,...P]);return{num1:g,num2:_,operator:m,correctAnswer:w,options:z}}function $R(i,e){return i===e}const HR=8,WR=-12,qR=3,GR=-8,KR=3e3,QR=1e4,YR=1.3,JR=1.6,XR=35,ZR=20,eC=5,tC=85,nC=3,rC=50,$v="RECORD_ANSWER",Hv="ACKNOWLEDGE_LEVEL_UP",Wv="RESET";function Od(i){return Math.min(100,Math.max(0,Math.round(i)))}function iC(i){let e=HR;return i<KR&&(e+=qR),e}function sC(i){return i>QR?GR:WR}function oC(i,e){return e>=5?i*JR:e>=2?i*YR:i}function qv(i){return{score:Od(i??rC),streak:0,consecutiveWrong:0,shouldLevelUp:!1,lastDelta:0}}function aC(i,e){switch(e.type){case $v:{const{isCorrect:t,responseTimeMs:s}=e.payload;if(t){const m=i.streak+1,g=iC(s),_=oC(g,m),w=Math.round(_),I=Od(i.score+w),P=I>=tC&&m>=nC;return{score:I,streak:m,consecutiveWrong:0,shouldLevelUp:i.shouldLevelUp||P,lastDelta:w}}const o=sC(s),u=Od(i.score+o),h=i.consecutiveWrong+1;return{score:u,streak:0,consecutiveWrong:h,shouldLevelUp:i.shouldLevelUp,lastDelta:o}}case Hv:return{...i,shouldLevelUp:!1};case Wv:return qv(e.payload);default:return i}}function lC(i){const[e,t]=_e.useReducer(aC,i,qv),s=_e.useCallback((g,_)=>{t({type:$v,payload:{isCorrect:g,responseTimeMs:_}})},[]),o=_e.useCallback(()=>{t({type:Hv})},[]),u=_e.useCallback(g=>{t({type:Wv,payload:g})},[]),h=e.score<XR,m=e.score<ZR&&e.consecutiveWrong>=eC;return{score:e.score,streak:e.streak,consecutiveWrong:e.consecutiveWrong,isStruggling:h,isCritical:m,shouldLevelUp:e.shouldLevelUp,lastDelta:e.lastDelta,recordAnswer:s,acknowledgeLevelUp:o,reset:u}}const uC=2e3,cC=10,rd={isPlaying:!1,currentProblem:null,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0,bestStreak:0,totalProblems:0,correctAnswers:0};function hC({currentLevel:i=2,updateProgress:e,initialProgress:t}={}){const s=lC(),[o,u]=_e.useState(()=>({...rd,score:(t==null?void 0:t.score)??0,bestStreak:(t==null?void 0:t.streak)??0,totalProblems:(t==null?void 0:t.totalProblems)??0,correctAnswers:(t==null?void 0:t.correctAnswers)??0})),h=_e.useRef(null),m=_e.useRef(!0),g=_e.useRef(null);_e.useEffect(()=>(m.current=!0,()=>{m.current=!1,h.current&&clearTimeout(h.current)}),[]),_e.useEffect(()=>{t&&!o.isPlaying&&u(H=>({...H,score:t.score??H.score,bestStreak:t.streak??H.bestStreak,totalProblems:t.totalProblems??H.totalProblems,correctAnswers:t.correctAnswers??H.correctAnswers}))},[t,o.isPlaying]);const _=_e.useCallback(()=>{const H=my(Dd(i));s.reset(),g.current=Date.now(),u(B=>({...B,isPlaying:!0,currentProblem:H,userAnswer:null,showFeedback:!1,isCorrect:!1,score:0,streak:0}))},[i,s]),w=_e.useCallback(()=>{if(!m.current)return;const H=my(Dd(i));g.current=Date.now(),u(B=>({...B,currentProblem:H,userAnswer:null,showFeedback:!1,isCorrect:!1}))},[i]),I=_e.useCallback(H=>{const B=o;if(!B.isPlaying||!B.currentProblem||B.showFeedback)return;const ae=$R(H,B.currentProblem.correctAnswer),ue=Date.now()-g.current;s.recordAnswer(ae,ue),u(me=>{const De=ae?me.score+cC:me.score,Le=ae?me.streak+1:0,xe=Math.max(me.bestStreak,Le),k=me.totalProblems+1,S=ae?me.correctAnswers+1:me.correctAnswers;return e&&e({score:De,streak:xe,currentStreak:Le,totalProblems:k,correctAnswers:S}),{...me,userAnswer:H,showFeedback:!0,isCorrect:ae,score:De,streak:Le,bestStreak:xe,totalProblems:k,correctAnswers:S}}),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{m.current&&w()},uC)},[o,e,w,s]),P=_e.useCallback(()=>{h.current&&clearTimeout(h.current),s.reset(),u(H=>({...rd,score:H.score,bestStreak:H.bestStreak,totalProblems:H.totalProblems,correctAnswers:H.correctAnswers}))},[s]),z=_e.useCallback(()=>{h.current&&clearTimeout(h.current),s.reset(),u(rd)},[s]),Y=_e.useCallback(()=>o.totalProblems===0?0:Math.round(o.correctAnswers/o.totalProblems*100),[o.totalProblems,o.correctAnswers]);return{gameState:o,currentProblem:o.currentProblem,userAnswer:o.userAnswer,score:o.score,streak:s.streak,bestStreak:o.bestStreak,isPlaying:o.isPlaying,showFeedback:o.showFeedback,isCorrect:o.isCorrect,totalProblems:o.totalProblems,correctAnswers:o.correctAnswers,confidenceScore:s.score,isStruggling:s.isStruggling,isCritical:s.isCritical,shouldLevelUp:s.shouldLevelUp,lastDelta:s.lastDelta,consecutiveWrong:s.consecutiveWrong,acknowledgeLevelUp:s.acknowledgeLevelUp,handleAnswer:I,startGame:_,nextProblem:w,resetGame:P,fullReset:z,accuracy:Y()}}var id={exports:{}},sd,gy;function dC(){if(gy)return sd;gy=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return sd=i,sd}var od,yy;function fC(){if(yy)return od;yy=1;var i=dC();function e(){}function t(){}return t.resetWarningCache=e,od=function(){function s(h,m,g,_,w,I){if(I!==i){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}s.isRequired=s;function o(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return u.PropTypes=u,u},od}var _y;function pC(){return _y||(_y=1,id.exports=fC()()),id.exports}var mC=pC();const Fe=bd(mC);function Gv({num1:i,num2:e,operator:t}){return j.jsx("section",{className:"bg-sonic-blue rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md mx-auto","aria-label":"Math Problem",children:j.jsx("div",{className:"text-center",children:j.jsxs("p",{className:`text-4xl md:text-6xl font-game text-white tracking-wide
                     drop-shadow-md select-none`,"aria-live":"polite","aria-atomic":"true",children:[j.jsx("span",{className:"inline-block mx-2",children:i}),j.jsx("span",{className:"inline-block mx-2 text-sonic-gold",children:t}),j.jsx("span",{className:"inline-block mx-2",children:e}),j.jsx("span",{className:"inline-block mx-2",children:"="}),j.jsx("span",{className:"inline-block mx-2 text-sonic-gold animate-pulse",children:"?"})]})})})}Gv.propTypes={num1:Fe.number.isRequired,num2:Fe.number.isRequired,operator:Fe.string.isRequired};function Kv({options:i,onAnswer:e,disabled:t=!1}){const s=u=>{t||e(u)},o=(u,h)=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),s(h))};return j.jsx("div",{className:"grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto mt-6",role:"group","aria-label":"Answer Options",children:i.map((u,h)=>j.jsx("button",{onClick:()=>s(u),onKeyDown:m=>o(m,u),disabled:t,className:`
            bg-sonic-gold text-sonic-blue font-game
            text-3xl md:text-4xl
            py-6 md:py-8 px-4
            rounded-xl shadow-lg
            transform transition-all duration-200
            select-none
            ${t?"opacity-50 cursor-not-allowed":`hover:bg-yellow-400 hover:scale-105
                   active:scale-95 active:bg-yellow-500
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`}
          `,"aria-label":`Answer: ${u}`,children:u},`answer-${h}-${u}`))})}Kv.propTypes={options:Fe.arrayOf(Fe.number).isRequired,onAnswer:Fe.func.isRequired,disabled:Fe.bool};function Qv({score:i,streak:e}){const s=e>=10?{emoji:"🔥",label:"On Fire!"}:e>=5?{emoji:"⚡",label:"Lightning!"}:e>=3?{emoji:"🦔",label:"Speedy!"}:{emoji:"⭐",label:"Keep going!"};return j.jsxs("div",{className:`flex justify-between items-center w-full max-w-md mx-auto
                 bg-black/30 rounded-xl p-4 md:p-5`,role:"status","aria-label":`Score: ${i}, Streak: ${e}`,children:[j.jsxs("div",{className:"text-center flex-1",children:[j.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Score"}),j.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                     transition-all duration-300`,"aria-live":"polite",children:i})]}),j.jsx("div",{className:"w-px h-12 bg-white/20 mx-4","aria-hidden":"true"}),j.jsxs("div",{className:"text-center flex-1",children:[j.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase tracking-wide",children:"Streak"}),j.jsxs("div",{className:"flex items-center justify-center gap-2",children:[j.jsx("p",{className:`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                       transition-all duration-300
                       ${e>0?"animate-bounce":""}`,"aria-live":"polite",children:e}),e>0&&j.jsx("span",{className:"text-2xl md:text-3xl transition-transform duration-300","aria-label":s.label,role:"img",children:s.emoji})]})]})]})}Qv.propTypes={score:Fe.number.isRequired,streak:Fe.number.isRequired};const gC=[{text:"Sonic Speed!",emoji:"🦔💨"},{text:"Amazing!",emoji:"⭐"},{text:"Perfect!",emoji:"🎯"},{text:"Great Job!",emoji:"🎉"},{text:"You're on Fire!",emoji:"🔥"},{text:"Super Star!",emoji:"🌟"},{text:"Awesome!",emoji:"✨"},{text:"Incredible!",emoji:"💫"}],yC=[{text:"Try Again!",emoji:"💪"},{text:"Almost There!",emoji:"🎈"},{text:"Keep Going!",emoji:"🚀"},{text:"You've Got This!",emoji:"👍"},{text:"So Close!",emoji:"🌈"},{text:"One More Try!",emoji:"🎮"}],vy=200,Ey=1500,_C=200;function Yv({isCorrect:i,onComplete:e=null}){const[t,s]=_e.useState(!1),[o,u]=_e.useState(!1),[h,m]=_e.useState({text:"",emoji:""}),g=_e.useCallback(()=>{const _=i?gC:yC,w=Math.floor(Math.random()*_.length);return _[w]},[i]);return _e.useEffect(()=>{m(g()),s(!0),u(!1);const _=setTimeout(()=>{u(!0)},vy+Ey),w=setTimeout(()=>{s(!1),e&&e()},vy+Ey+_C);return()=>{clearTimeout(_),clearTimeout(w)}},[i,e,g]),t?j.jsx("div",{className:`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        transition-opacity duration-200
        ${o?"opacity-0":"opacity-100"}
      `,"aria-live":"polite",role:"status",children:j.jsxs("div",{className:`
          flex flex-col items-center justify-center
          p-8 rounded-3xl
          ${i?"bg-gradient-to-br from-green-500 to-emerald-600 animate-feedback-correct":"bg-gradient-to-br from-orange-400 to-amber-500 animate-feedback-wrong"}
          shadow-2xl
          transform
          ${o?"scale-90 opacity-0":"scale-100 opacity-100"}
          transition-all duration-200
        `,children:[j.jsx("div",{className:`text-6xl md:text-7xl mb-4 ${i?"animate-bounce-custom":"animate-shake"}`,children:i?"✅":"🔄"}),j.jsx("h2",{className:`
            text-3xl md:text-4xl font-game text-white text-center
            drop-shadow-lg
            ${i?"animate-pulse-scale":""}
          `,children:h.text}),j.jsx("span",{className:"text-4xl md:text-5xl mt-3 animate-bounce",children:h.emoji}),i&&j.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden rounded-3xl",children:[j.jsx("div",{className:"sparkle sparkle-1",children:"✨"}),j.jsx("div",{className:"sparkle sparkle-2",children:"⭐"}),j.jsx("div",{className:"sparkle sparkle-3",children:"💫"}),j.jsx("div",{className:"sparkle sparkle-4",children:"🌟"}),j.jsx("div",{className:"sparkle sparkle-5",children:"✨"}),j.jsx("div",{className:"sparkle sparkle-6",children:"⭐"})]})]})}):null}Yv.propTypes={isCorrect:Fe.bool.isRequired,onComplete:Fe.func};function Jv({onGameEnd:i,updateProgress:e=null,initialProgress:t=null}){const{currentProblem:s,score:o,streak:u,bestStreak:h,showFeedback:m,isCorrect:g,handleAnswer:_,startGame:w,isPlaying:I,totalProblems:P,correctAnswers:z,accuracy:Y}=hC({updateProgress:e,initialProgress:t});if(!I)return w(),null;if(!s)return j.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex items-center justify-center",children:j.jsx("p",{className:"text-white font-game text-2xl",children:"Loading..."})});const H=()=>{i&&i({score:o,streak:h,totalProblems:P,correctAnswers:z,accuracy:Y})};return j.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col p-4 md:p-6 relative",children:[j.jsxs("header",{className:"flex justify-between items-start gap-4 mb-6 md:mb-8",children:[j.jsx("div",{className:"flex-1",children:j.jsx(Qv,{score:o,streak:u})}),j.jsx("button",{onClick:H,className:`
            bg-sonic-red/80 hover:bg-sonic-red
            text-white font-game text-sm md:text-base
            px-4 py-2 rounded-lg
            shadow-lg
            transform transition-all duration-200
            hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-red-300
          `,"aria-label":"Exit game and return to start screen",children:"Exit"})]}),j.jsxs("main",{className:"flex-1 flex flex-col items-center justify-center gap-6 md:gap-8",children:[j.jsx("div",{className:"w-full transform transition-all duration-300 ease-out",children:j.jsx(Gv,{num1:s.num1,num2:s.num2,operator:s.operator})}),j.jsx("div",{className:"w-full",children:j.jsx(Kv,{options:s.options,onAnswer:_,disabled:m})})]}),j.jsx("footer",{className:"h-8 md:h-12","aria-hidden":"true"}),m&&j.jsx(Yv,{isCorrect:g})]})}Jv.propTypes={onGameEnd:Fe.func.isRequired,updateProgress:Fe.func,initialProgress:Fe.shape({score:Fe.number,streak:Fe.number,totalProblems:Fe.number,correctAnswers:Fe.number})};function Xv({onStart:i,progress:e=null}){const t=e&&(e.score>0||e.streak>0);return j.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[j.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[j.jsx("div",{className:"absolute top-10 left-10 text-4xl animate-bounce opacity-50",children:"*"}),j.jsx("div",{className:"absolute top-20 right-16 text-3xl animate-pulse opacity-40",children:"*"}),j.jsx("div",{className:"absolute bottom-32 left-20 text-5xl animate-bounce opacity-30",children:"*"}),j.jsx("div",{className:"absolute bottom-20 right-10 text-4xl animate-pulse opacity-50",children:"*"})]}),j.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[j.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-4 animate-pulse-scale`,children:"Sonic Math Trainer!"}),j.jsxs("div",{className:"flex justify-center gap-2 text-4xl md:text-5xl mb-6",children:[j.jsx("span",{role:"img","aria-label":"hedgehog",children:"🦔"}),j.jsx("span",{role:"img","aria-label":"dash",children:"💨"})]}),j.jsx("p",{className:"text-xl md:text-2xl font-game text-white/90 mb-8 drop-shadow-md",children:"Time to boost your math power!"}),t&&j.jsxs("div",{className:`bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm
                       transform transition-all duration-300 hover:scale-105`,role:"status","aria-label":`Your best: ${e.score} points, ${e.streak} streak`,children:[j.jsx("p",{className:"text-lg md:text-xl font-game text-sonic-gold mb-2",children:"Your Best:"}),j.jsxs("div",{className:"flex justify-center items-center gap-6 flex-wrap",children:[j.jsxs("div",{className:"text-center",children:[j.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.score}),j.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"points"})]}),j.jsx("div",{className:"w-px h-12 bg-white/30","aria-hidden":"true"}),j.jsxs("div",{className:"text-center",children:[j.jsxs("div",{className:"flex items-center justify-center gap-2",children:[j.jsx("p",{className:"text-3xl md:text-4xl font-game text-white",children:e.streak}),j.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]}),j.jsx("p",{className:"text-sm md:text-base text-white/70 font-game",children:"streak"})]})]}),e.totalProblems>0&&j.jsxs("p",{className:"text-base text-white/80 font-game mt-4",children:["Accuracy: ",Math.round(e.correctAnswers/e.totalProblems*100),"%"]})]}),j.jsx("button",{onClick:i,className:`
            bg-gradient-to-r from-sonic-gold to-yellow-400
            text-blue-900 font-game text-2xl md:text-3xl
            px-12 py-6 rounded-2xl
            shadow-lg shadow-yellow-500/50
            transform transition-all duration-300
            hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/60
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-yellow-300
            animate-pulse-scale
          `,"aria-label":"Start the math game",children:"Start Game!"}),j.jsxs("p",{className:"text-lg md:text-xl font-game text-white/70 mt-8",children:[j.jsx("span",{role:"img","aria-label":"star",children:"⭐"})," Tap the correct answer to score points!"," ",j.jsx("span",{role:"img","aria-label":"star",children:"⭐"})]})]}),j.jsx("div",{className:"absolute bottom-4 text-center text-white/40 font-game text-sm",children:"Math is fun!"})]})}Xv.propTypes={onStart:Fe.func.isRequired,progress:Fe.shape({score:Fe.number,streak:Fe.number,totalProblems:Fe.number,correctAnswers:Fe.number})};function Zv({sessionStats:i,onPlayAgain:e,onExit:t}){const{score:s=0,streak:o=0,totalProblems:u=0,correctAnswers:h=0,accuracy:m=0}=i||{},_=m>=80?{text:"Sonic Speed! Amazing!",emoji:"🦔💨",color:"text-green-400"}:m>=50?{text:"Great effort! Keep practicing!",emoji:"⭐",color:"text-sonic-gold"}:{text:"You're learning! Try again!",emoji:"💪",color:"text-orange-400"};return j.jsxs("div",{className:`min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden`,children:[j.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none","aria-hidden":"true",children:[j.jsx("div",{className:"absolute top-10 left-8 text-3xl animate-bounce opacity-60",children:"*"}),j.jsx("div",{className:"absolute top-16 right-12 text-4xl animate-pulse opacity-50",children:"*"}),j.jsx("div",{className:"absolute top-32 left-20 text-2xl animate-bounce opacity-40",children:"*"}),j.jsx("div",{className:"absolute bottom-40 right-20 text-4xl animate-pulse opacity-50",children:"*"}),j.jsx("div",{className:"absolute bottom-24 left-12 text-3xl animate-bounce opacity-60",children:"*"}),j.jsx("div",{className:"absolute top-48 right-8 text-2xl animate-pulse opacity-40",children:"*"})]}),j.jsxs("div",{className:"z-10 text-center max-w-lg w-full",children:[j.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-2 animate-pulse-scale`,children:"Great Job!"}),j.jsx("div",{className:"text-5xl md:text-6xl mb-6",children:j.jsx("span",{role:"img","aria-label":"party",children:"🎉"})}),j.jsxs("p",{className:`text-xl md:text-2xl font-game ${_.color} mb-6 drop-shadow-md`,children:[_.text," ",j.jsx("span",{role:"img","aria-label":"performance icon",children:_.emoji})]}),j.jsx("div",{className:"bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm",role:"status","aria-label":`Session stats: ${s} points, ${o} streak, ${m}% accuracy`,children:j.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[j.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[j.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Points"}),j.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:s})]}),j.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[j.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Best Streak"}),j.jsxs("div",{className:"flex items-center justify-center gap-2",children:[j.jsx("p",{className:"text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md",children:o}),o>=3&&j.jsx("span",{className:"text-2xl",role:"img","aria-label":"fire",children:"🔥"})]})]}),j.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[j.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Accuracy"}),j.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[Math.round(m),"%"]})]}),j.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[j.jsx("p",{className:"text-sm md:text-base text-white/70 font-game uppercase mb-1",children:"Problems"}),j.jsxs("p",{className:"text-3xl md:text-4xl font-game text-white drop-shadow-md",children:[h,"/",u]})]})]})}),j.jsxs("div",{className:"flex flex-col gap-4",children:[j.jsx("button",{onClick:e,className:`
              bg-gradient-to-r from-sonic-gold to-yellow-400
              text-blue-900 font-game text-2xl md:text-3xl
              px-10 py-5 rounded-2xl w-full
              shadow-lg shadow-yellow-500/50
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/60
              active:scale-95
              focus:outline-none focus:ring-4 focus:ring-yellow-300
              animate-pulse-scale
            `,"aria-label":"Play the game again",children:"Play Again!"}),j.jsx("button",{onClick:t,className:`
              bg-white/20 hover:bg-white/30
              text-white font-game text-lg md:text-xl
              px-8 py-4 rounded-xl w-full
              shadow-md
              transform transition-all duration-300
              hover:scale-105
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-white/50
            `,"aria-label":"Go back to start screen",children:"Back to Start"})]}),j.jsxs("p",{className:"text-lg font-game text-white/60 mt-8",children:["Keep practicing to become a Math Master!"," ",j.jsx("span",{role:"img","aria-label":"trophy",children:"🏆"})]})]})]})}Zv.propTypes={sessionStats:Fe.shape({score:Fe.number,streak:Fe.number,totalProblems:Fe.number,correctAnswers:Fe.number,accuracy:Fe.number}).isRequired,onPlayAgain:Fe.func.isRequired,onExit:Fe.func.isRequired};function vC(){const{user:i,loading:e,error:t}=LR(),{progress:s,updateProgress:o,forceSave:u,loading:h}=jR(i==null?void 0:i.uid),[m,g]=_e.useState("start"),[_,w]=_e.useState(null),I=e||h,P=_e.useCallback(B=>{if(B){const ae=B.accuracy??(B.totalProblems>0?Math.round(B.correctAnswers/B.totalProblems*100):0);w({score:B.score??0,streak:B.streak??0,totalProblems:B.totalProblems??0,correctAnswers:B.correctAnswers??0,accuracy:ae}),g("result")}else g("start")},[]),z=_e.useCallback(()=>{w(null),g("game")},[]),Y=_e.useCallback(()=>{w(null),g("game")},[]),H=_e.useCallback(()=>{u(),w(null),g("start")},[u]);return I?j.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:j.jsxs("div",{className:"animate-pulse",children:[j.jsx("h1",{className:"text-4xl md:text-6xl font-game text-sonic-gold drop-shadow-lg text-center",children:"Loading..."}),j.jsx("p",{className:"text-xl text-white mt-4 font-game text-center",children:e?"Connecting to Sonic Speed!":"Loading your progress..."})]})}):t?j.jsx("div",{className:"min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4",children:j.jsxs("div",{className:"text-center",children:[j.jsx("h1",{className:"text-4xl md:text-6xl font-game text-red-500 drop-shadow-lg",children:"Oops!"}),j.jsx("p",{className:"text-xl text-white mt-4 font-game",children:"Could not connect to save your progress"}),j.jsx("p",{className:"text-sm text-white mt-2 opacity-75",children:t.message}),j.jsx("button",{onClick:()=>g("game"),className:`mt-6 bg-sonic-gold text-sonic-blue font-game px-8 py-4 rounded-full
                       hover:bg-yellow-400 transform hover:scale-105 transition-all
                       shadow-lg active:scale-95 text-xl`,children:"Play Anyway!"})]})}):j.jsxs(j.Fragment,{children:[m==="start"&&j.jsx(Xv,{onStart:z,progress:s}),m==="game"&&j.jsx(Jv,{onGameEnd:P,updateProgress:o,initialProgress:s}),m==="result"&&_&&j.jsx(Zv,{sessionStats:_,onPlayAgain:Y,onExit:H})]})}gw.createRoot(document.getElementById("root")).render(j.jsx(uw.StrictMode,{children:j.jsx(vC,{})}));
