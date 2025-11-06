(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const f of r)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function l(r){const f={};return r.integrity&&(f.integrity=r.integrity),r.referrerPolicy&&(f.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?f.credentials="include":r.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(r){if(r.ep)return;r.ep=!0;const f=l(r);fetch(r.href,f)}})();var ef={exports:{}},Ha={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function jp(){if(r1)return Ha;r1=1;var u=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function l(s,r,f){var h=null;if(f!==void 0&&(h=""+f),r.key!==void 0&&(h=""+r.key),"key"in r){f={};for(var d in r)d!=="key"&&(f[d]=r[d])}else f=r;return r=f.ref,{$$typeof:u,type:s,key:h,ref:r!==void 0?r:null,props:f}}return Ha.Fragment=n,Ha.jsx=l,Ha.jsxs=l,Ha}var c1;function Up(){return c1||(c1=1,ef.exports=jp()),ef.exports}var E=Up(),nf={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1;function wp(){if(f1)return ct;f1=1;var u=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),b=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,A={};function z(C,Q,F){this.props=C,this.context=Q,this.refs=A,this.updater=F||T}z.prototype.isReactComponent={},z.prototype.setState=function(C,Q){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Q,"setState")},z.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function U(){}U.prototype=z.prototype;function N(C,Q,F){this.props=C,this.context=Q,this.refs=A,this.updater=F||T}var j=N.prototype=new U;j.constructor=N,_(j,z.prototype),j.isPureReactComponent=!0;var D=Array.isArray;function H(){}var q={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function X(C,Q,F){var $=F.ref;return{$$typeof:u,type:C,key:Q,ref:$!==void 0?$:null,props:F}}function W(C,Q){return X(C.type,Q,C.props)}function et(C){return typeof C=="object"&&C!==null&&C.$$typeof===u}function P(C){var Q={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(F){return Q[F]})}var nt=/\/+/g;function I(C,Q){return typeof C=="object"&&C!==null&&C.key!=null?P(""+C.key):Q.toString(36)}function ht(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(H,H):(C.status="pending",C.then(function(Q){C.status==="pending"&&(C.status="fulfilled",C.value=Q)},function(Q){C.status==="pending"&&(C.status="rejected",C.reason=Q)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function Y(C,Q,F,$,ut){var dt=typeof C;(dt==="undefined"||dt==="boolean")&&(C=null);var At=!1;if(C===null)At=!0;else switch(dt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(C.$$typeof){case u:case n:At=!0;break;case p:return At=C._init,Y(At(C._payload),Q,F,$,ut)}}if(At)return ut=ut(C),At=$===""?"."+I(C,0):$,D(ut)?(F="",At!=null&&(F=At.replace(nt,"$&/")+"/"),Y(ut,Q,F,"",function(Zl){return Zl})):ut!=null&&(et(ut)&&(ut=W(ut,F+(ut.key==null||C&&C.key===ut.key?"":(""+ut.key).replace(nt,"$&/")+"/")+At)),Q.push(ut)),1;At=0;var de=$===""?".":$+":";if(D(C))for(var Qt=0;Qt<C.length;Qt++)$=C[Qt],dt=de+I($,Qt),At+=Y($,Q,F,dt,ut);else if(Qt=x(C),typeof Qt=="function")for(C=Qt.call(C),Qt=0;!($=C.next()).done;)$=$.value,dt=de+I($,Qt++),At+=Y($,Q,F,dt,ut);else if(dt==="object"){if(typeof C.then=="function")return Y(ht(C),Q,F,$,ut);throw Q=String(C),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return At}function J(C,Q,F){if(C==null)return C;var $=[],ut=0;return Y(C,$,"","",function(dt){return Q.call(F,dt,ut++)}),$}function lt(C){if(C._status===-1){var Q=C._result;Q=Q(),Q.then(function(F){(C._status===0||C._status===-1)&&(C._status=1,C._result=F)},function(F){(C._status===0||C._status===-1)&&(C._status=2,C._result=F)}),C._status===-1&&(C._status=0,C._result=Q)}if(C._status===1)return C._result.default;throw C._result}var St=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},xt={map:J,forEach:function(C,Q,F){J(C,function(){Q.apply(this,arguments)},F)},count:function(C){var Q=0;return J(C,function(){Q++}),Q},toArray:function(C){return J(C,function(Q){return Q})||[]},only:function(C){if(!et(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ct.Activity=v,ct.Children=xt,ct.Component=z,ct.Fragment=l,ct.Profiler=r,ct.PureComponent=N,ct.StrictMode=s,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ct.__COMPILER_RUNTIME={__proto__:null,c:function(C){return q.H.useMemoCache(C)}},ct.cache=function(C){return function(){return C.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(C,Q,F){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var $=_({},C.props),ut=C.key;if(Q!=null)for(dt in Q.key!==void 0&&(ut=""+Q.key),Q)!K.call(Q,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&Q.ref===void 0||($[dt]=Q[dt]);var dt=arguments.length-2;if(dt===1)$.children=F;else if(1<dt){for(var At=Array(dt),de=0;de<dt;de++)At[de]=arguments[de+2];$.children=At}return X(C.type,ut,$)},ct.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},ct.createElement=function(C,Q,F){var $,ut={},dt=null;if(Q!=null)for($ in Q.key!==void 0&&(dt=""+Q.key),Q)K.call(Q,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ut[$]=Q[$]);var At=arguments.length-2;if(At===1)ut.children=F;else if(1<At){for(var de=Array(At),Qt=0;Qt<At;Qt++)de[Qt]=arguments[Qt+2];ut.children=de}if(C&&C.defaultProps)for($ in At=C.defaultProps,At)ut[$]===void 0&&(ut[$]=At[$]);return X(C,dt,ut)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(C){return{$$typeof:d,render:C}},ct.isValidElement=et,ct.lazy=function(C){return{$$typeof:p,_payload:{_status:-1,_result:C},_init:lt}},ct.memo=function(C,Q){return{$$typeof:g,type:C,compare:Q===void 0?null:Q}},ct.startTransition=function(C){var Q=q.T,F={};q.T=F;try{var $=C(),ut=q.S;ut!==null&&ut(F,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(H,St)}catch(dt){St(dt)}finally{Q!==null&&F.types!==null&&(Q.types=F.types),q.T=Q}},ct.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ct.use=function(C){return q.H.use(C)},ct.useActionState=function(C,Q,F){return q.H.useActionState(C,Q,F)},ct.useCallback=function(C,Q){return q.H.useCallback(C,Q)},ct.useContext=function(C){return q.H.useContext(C)},ct.useDebugValue=function(){},ct.useDeferredValue=function(C,Q){return q.H.useDeferredValue(C,Q)},ct.useEffect=function(C,Q){return q.H.useEffect(C,Q)},ct.useEffectEvent=function(C){return q.H.useEffectEvent(C)},ct.useId=function(){return q.H.useId()},ct.useImperativeHandle=function(C,Q,F){return q.H.useImperativeHandle(C,Q,F)},ct.useInsertionEffect=function(C,Q){return q.H.useInsertionEffect(C,Q)},ct.useLayoutEffect=function(C,Q){return q.H.useLayoutEffect(C,Q)},ct.useMemo=function(C,Q){return q.H.useMemo(C,Q)},ct.useOptimistic=function(C,Q){return q.H.useOptimistic(C,Q)},ct.useReducer=function(C,Q,F){return q.H.useReducer(C,Q,F)},ct.useRef=function(C){return q.H.useRef(C)},ct.useState=function(C){return q.H.useState(C)},ct.useSyncExternalStore=function(C,Q,F){return q.H.useSyncExternalStore(C,Q,F)},ct.useTransition=function(){return q.H.useTransition()},ct.version="19.2.0",ct}var o1;function Gf(){return o1||(o1=1,nf.exports=wp()),nf.exports}var rt=Gf(),lf={exports:{}},qa={},af={exports:{}},sf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1;function Bp(){return h1||(h1=1,(function(u){function n(Y,J){var lt=Y.length;Y.push(J);t:for(;0<lt;){var St=lt-1>>>1,xt=Y[St];if(0<r(xt,J))Y[St]=J,Y[lt]=xt,lt=St;else break t}}function l(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var J=Y[0],lt=Y.pop();if(lt!==J){Y[0]=lt;t:for(var St=0,xt=Y.length,C=xt>>>1;St<C;){var Q=2*(St+1)-1,F=Y[Q],$=Q+1,ut=Y[$];if(0>r(F,lt))$<xt&&0>r(ut,F)?(Y[St]=ut,Y[$]=lt,St=$):(Y[St]=F,Y[Q]=lt,St=Q);else if($<xt&&0>r(ut,lt))Y[St]=ut,Y[$]=lt,St=$;else break t}}return J}function r(Y,J){var lt=Y.sortIndex-J.sortIndex;return lt!==0?lt:Y.id-J.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;u.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();u.unstable_now=function(){return h.now()-d}}var m=[],g=[],p=1,v=null,b=3,x=!1,T=!1,_=!1,A=!1,z=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function j(Y){for(var J=l(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=Y)s(g),J.sortIndex=J.expirationTime,n(m,J);else break;J=l(g)}}function D(Y){if(_=!1,j(Y),!T)if(l(m)!==null)T=!0,H||(H=!0,P());else{var J=l(g);J!==null&&ht(D,J.startTime-Y)}}var H=!1,q=-1,K=5,X=-1;function W(){return A?!0:!(u.unstable_now()-X<K)}function et(){if(A=!1,H){var Y=u.unstable_now();X=Y;var J=!0;try{t:{T=!1,_&&(_=!1,U(q),q=-1),x=!0;var lt=b;try{e:{for(j(Y),v=l(m);v!==null&&!(v.expirationTime>Y&&W());){var St=v.callback;if(typeof St=="function"){v.callback=null,b=v.priorityLevel;var xt=St(v.expirationTime<=Y);if(Y=u.unstable_now(),typeof xt=="function"){v.callback=xt,j(Y),J=!0;break e}v===l(m)&&s(m),j(Y)}else s(m);v=l(m)}if(v!==null)J=!0;else{var C=l(g);C!==null&&ht(D,C.startTime-Y),J=!1}}break t}finally{v=null,b=lt,x=!1}J=void 0}}finally{J?P():H=!1}}}var P;if(typeof N=="function")P=function(){N(et)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,I=nt.port2;nt.port1.onmessage=et,P=function(){I.postMessage(null)}}else P=function(){z(et,0)};function ht(Y,J){q=z(function(){Y(u.unstable_now())},J)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(Y){Y.callback=null},u.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<Y?Math.floor(1e3/Y):5},u.unstable_getCurrentPriorityLevel=function(){return b},u.unstable_next=function(Y){switch(b){case 1:case 2:case 3:var J=3;break;default:J=b}var lt=b;b=J;try{return Y()}finally{b=lt}},u.unstable_requestPaint=function(){A=!0},u.unstable_runWithPriority=function(Y,J){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var lt=b;b=Y;try{return J()}finally{b=lt}},u.unstable_scheduleCallback=function(Y,J,lt){var St=u.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?St+lt:St):lt=St,Y){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=lt+xt,Y={id:p++,callback:J,priorityLevel:Y,startTime:lt,expirationTime:xt,sortIndex:-1},lt>St?(Y.sortIndex=lt,n(g,Y),l(m)===null&&Y===l(g)&&(_?(U(q),q=-1):_=!0,ht(D,lt-St))):(Y.sortIndex=xt,n(m,Y),T||x||(T=!0,H||(H=!0,P()))),Y},u.unstable_shouldYield=W,u.unstable_wrapCallback=function(Y){var J=b;return function(){var lt=b;b=J;try{return Y.apply(this,arguments)}finally{b=lt}}}})(sf)),sf}var d1;function Lp(){return d1||(d1=1,af.exports=Bp()),af.exports}var uf={exports:{}},fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1;function Hp(){if(m1)return fe;m1=1;var u=Gf();function n(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)g+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(n(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},r=Symbol.for("react.portal");function f(m,g,p){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:v==null?null:""+v,children:m,containerInfo:g,implementation:p}}var h=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,fe.createPortal=function(m,g){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return f(m,g,null,p)},fe.flushSync=function(m){var g=h.T,p=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=p,s.d.f()}},fe.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},fe.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},fe.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var p=g.as,v=d(p,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;p==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:b,fetchPriority:x}):p==="script"&&s.d.X(m,{crossOrigin:v,integrity:b,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},fe.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var p=d(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:p,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},fe.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var p=g.as,v=d(p,g.crossOrigin);s.d.L(m,p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},fe.preloadModule=function(m,g){if(typeof m=="string")if(g){var p=d(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:p,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},fe.requestFormReset=function(m){s.d.r(m)},fe.unstable_batchedUpdates=function(m,g){return m(g)},fe.useFormState=function(m,g,p){return h.H.useFormState(m,g,p)},fe.useFormStatus=function(){return h.H.useHostTransitionStatus()},fe.version="19.2.0",fe}var g1;function qp(){if(g1)return uf.exports;g1=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(n){console.error(n)}}return u(),uf.exports=Hp(),uf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y1;function Yp(){if(y1)return qa;y1=1;var u=Lp(),n=Gf(),l=qp();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function g(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,a=e;;){var c=i.return;if(c===null)break;var o=c.alternate;if(o===null){if(a=c.return,a!==null){i=a;continue}break}if(c.child===o.child){for(o=c.child;o;){if(o===i)return m(c),t;if(o===a)return m(c),e;o=o.sibling}throw Error(s(188))}if(i.return!==a.return)i=c,a=o;else{for(var y=!1,S=c.child;S;){if(S===i){y=!0,i=c,a=o;break}if(S===a){y=!0,a=c,i=o;break}S=S.sibling}if(!y){for(S=o.child;S;){if(S===i){y=!0,i=o,a=c;break}if(S===a){y=!0,a=o,i=c;break}S=S.sibling}if(!y)throw Error(s(189))}}if(i.alternate!==a)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),N=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),et=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=et&&t[et]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function I(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _:return"Fragment";case z:return"Profiler";case A:return"StrictMode";case D:return"Suspense";case H:return"SuspenseList";case X:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case N:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case j:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return e=t.displayName||null,e!==null?e:I(t.type)||"Memo";case K:e=t._payload,t=t._init;try{return I(t(e))}catch{}}return null}var ht=Array.isArray,Y=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},St=[],xt=-1;function C(t){return{current:t}}function Q(t){0>xt||(t.current=St[xt],St[xt]=null,xt--)}function F(t,e){xt++,St[xt]=t.current,t.current=e}var $=C(null),ut=C(null),dt=C(null),At=C(null);function de(t,e){switch(F(dt,e),F(ut,t),F($,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?D0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=D0(e),t=R0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q($),F($,t)}function Qt(){Q($),Q(ut),Q(dt)}function Zl(t){t.memoizedState!==null&&F(At,t);var e=$.current,i=R0(e,t.type);e!==i&&(F(ut,t),F($,i))}function es(t){ut.current===t&&(Q($),Q(ut)),At.current===t&&(Q(At),Ua._currentValue=lt)}var Lu,so;function vi(t){if(Lu===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||"",so=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lu+t+so}var Hu=!1;function qu(t,e){if(!t||Hu)return"";Hu=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(G){var L=G}Reflect.construct(t,[],k)}else{try{k.call()}catch(G){L=G}t.call(k.prototype)}}else{try{throw Error()}catch(G){L=G}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(G){if(G&&L&&typeof G.stack=="string")return[G.stack,L.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),y=o[0],S=o[1];if(y&&S){var M=y.split(`
`),B=S.split(`
`);for(c=a=0;a<M.length&&!M[a].includes("DetermineComponentFrameRoot");)a++;for(;c<B.length&&!B[c].includes("DetermineComponentFrameRoot");)c++;if(a===M.length||c===B.length)for(a=M.length-1,c=B.length-1;1<=a&&0<=c&&M[a]!==B[c];)c--;for(;1<=a&&0<=c;a--,c--)if(M[a]!==B[c]){if(a!==1||c!==1)do if(a--,c--,0>c||M[a]!==B[c]){var V=`
`+M[a].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=a&&0<=c);break}}}finally{Hu=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?vi(i):""}function fg(t,e){switch(t.tag){case 26:case 27:case 5:return vi(t.type);case 16:return vi("Lazy");case 13:return t.child!==e&&e!==null?vi("Suspense Fallback"):vi("Suspense");case 19:return vi("SuspenseList");case 0:case 15:return qu(t.type,!1);case 11:return qu(t.type.render,!1);case 1:return qu(t.type,!0);case 31:return vi("Activity");default:return""}}function uo(t){try{var e="",i=null;do e+=fg(t,i),i=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Yu=Object.prototype.hasOwnProperty,Gu=u.unstable_scheduleCallback,Xu=u.unstable_cancelCallback,og=u.unstable_shouldYield,hg=u.unstable_requestPaint,Ce=u.unstable_now,dg=u.unstable_getCurrentPriorityLevel,ro=u.unstable_ImmediatePriority,co=u.unstable_UserBlockingPriority,ns=u.unstable_NormalPriority,mg=u.unstable_LowPriority,fo=u.unstable_IdlePriority,gg=u.log,yg=u.unstable_setDisableYieldValue,kl=null,Ne=null;function Yn(t){if(typeof gg=="function"&&yg(t),Ne&&typeof Ne.setStrictMode=="function")try{Ne.setStrictMode(kl,t)}catch{}}var De=Math.clz32?Math.clz32:vg,pg=Math.log,_g=Math.LN2;function vg(t){return t>>>=0,t===0?32:31-(pg(t)/_g|0)|0}var is=256,ls=262144,as=4194304;function Si(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ss(t,e,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,o=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var S=a&134217727;return S!==0?(a=S&~o,a!==0?c=Si(a):(y&=S,y!==0?c=Si(y):i||(i=S&~t,i!==0&&(c=Si(i))))):(S=a&~o,S!==0?c=Si(S):y!==0?c=Si(y):i||(i=a&~t,i!==0&&(c=Si(i)))),c===0?0:e!==0&&e!==c&&(e&o)===0&&(o=c&-c,i=e&-e,o>=i||o===32&&(i&4194048)!==0)?e:c}function Kl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Sg(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oo(){var t=as;return as<<=1,(as&62914560)===0&&(as=4194304),t}function Vu(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function Jl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xg(t,e,i,a,c,o){var y=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var S=t.entanglements,M=t.expirationTimes,B=t.hiddenUpdates;for(i=y&~i;0<i;){var V=31-De(i),k=1<<V;S[V]=0,M[V]=-1;var L=B[V];if(L!==null)for(B[V]=null,V=0;V<L.length;V++){var G=L[V];G!==null&&(G.lane&=-536870913)}i&=~k}a!==0&&ho(t,a,0),o!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=o&~(y&~e))}function ho(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-De(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|i&261930}function mo(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var a=31-De(i),c=1<<a;c&e|t[a]&e&&(t[a]|=e),i&=~c}}function go(t,e){var i=e&-e;return i=(i&42)!==0?1:Qu(i),(i&(t.suspendedLanes|e))!==0?0:i}function Qu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yo(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:e1(t.type))}function po(t,e){var i=J.p;try{return J.p=t,e()}finally{J.p=i}}var Gn=Math.random().toString(36).slice(2),le="__reactFiber$"+Gn,pe="__reactProps$"+Gn,Ji="__reactContainer$"+Gn,ku="__reactEvents$"+Gn,bg="__reactListeners$"+Gn,Tg="__reactHandles$"+Gn,_o="__reactResources$"+Gn,Fl="__reactMarker$"+Gn;function Ku(t){delete t[le],delete t[pe],delete t[ku],delete t[bg],delete t[Tg]}function Fi(t){var e=t[le];if(e)return e;for(var i=t.parentNode;i;){if(e=i[Ji]||i[le]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=q0(t);t!==null;){if(i=t[le])return i;t=q0(t)}return e}t=i,i=t.parentNode}return null}function $i(t){if(t=t[le]||t[Ji]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function $l(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Wi(t){var e=t[_o];return e||(e=t[_o]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ee(t){t[Fl]=!0}var vo=new Set,So={};function xi(t,e){Pi(t,e),Pi(t+"Capture",e)}function Pi(t,e){for(So[t]=e,t=0;t<e.length;t++)vo.add(e[t])}var Eg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xo={},bo={};function Ag(t){return Yu.call(bo,t)?!0:Yu.call(xo,t)?!1:Eg.test(t)?bo[t]=!0:(xo[t]=!0,!1)}function us(t,e,i){if(Ag(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function rs(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function _n(t,e,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+a)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function To(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mg(t,e,i){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,o=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return c.call(this)},set:function(y){i=""+y,o.call(this,y)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(y){i=""+y},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ju(t){if(!t._valueTracker){var e=To(t)?"checked":"value";t._valueTracker=Mg(t,e,""+t[e])}}function Eo(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),a="";return t&&(a=To(t)?t.checked?"true":"false":t.value),t=a,t!==i?(e.setValue(t),!0):!1}function cs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zg=/[\n"\\]/g;function ke(t){return t.replace(zg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Fu(t,e,i,a,c,o,y,S){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),e!=null?y==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ze(e)):t.value!==""+Ze(e)&&(t.value=""+Ze(e)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),e!=null?$u(t,y,Ze(e)):i!=null?$u(t,y,Ze(i)):a!=null&&t.removeAttribute("value"),c==null&&o!=null&&(t.defaultChecked=!!o),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+Ze(S):t.removeAttribute("name")}function Ao(t,e,i,a,c,o,y,S){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||i!=null){if(!(o!=="submit"&&o!=="reset"||e!=null)){Ju(t);return}i=i!=null?""+Ze(i):"",e=e!=null?""+Ze(e):i,S||e===t.value||(t.value=e),t.defaultValue=e}a=a??c,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=S?t.checked:!!a,t.defaultChecked=!!a,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Ju(t)}function $u(t,e,i){e==="number"&&cs(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Ii(t,e,i,a){if(t=t.options,e){e={};for(var c=0;c<i.length;c++)e["$"+i[c]]=!0;for(i=0;i<t.length;i++)c=e.hasOwnProperty("$"+t[i].value),t[i].selected!==c&&(t[i].selected=c),c&&a&&(t[i].defaultSelected=!0)}else{for(i=""+Ze(i),e=null,c=0;c<t.length;c++){if(t[c].value===i){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}e!==null||t[c].disabled||(e=t[c])}e!==null&&(e.selected=!0)}}function Mo(t,e,i){if(e!=null&&(e=""+Ze(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Ze(i):""}function zo(t,e,i,a){if(e==null){if(a!=null){if(i!=null)throw Error(s(92));if(ht(a)){if(1<a.length)throw Error(s(93));a=a[0]}i=a}i==null&&(i=""),e=i}i=Ze(e),t.defaultValue=i,a=t.textContent,a===i&&a!==""&&a!==null&&(t.value=a),Ju(t)}function tl(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var Og=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oo(t,e,i){var a=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,i):typeof i!="number"||i===0||Og.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Co(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var a in i)!i.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var c in e)a=e[c],e.hasOwnProperty(c)&&i[c]!==a&&Oo(t,c,a)}else for(var o in e)e.hasOwnProperty(o)&&Oo(t,o,e[o])}function Wu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ng=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fs(t){return Ng.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function vn(){}var Pu=null;function Iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var el=null,nl=null;function No(t){var e=$i(t);if(e&&(t=e.stateNode)){var i=t[pe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Fu(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ke(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var a=i[e];if(a!==t&&a.form===t.form){var c=a[pe]||null;if(!c)throw Error(s(90));Fu(a,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(e=0;e<i.length;e++)a=i[e],a.form===t.form&&Eo(a)}break t;case"textarea":Mo(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Ii(t,!!i.multiple,e,!1)}}}var tr=!1;function Do(t,e,i){if(tr)return t(e,i);tr=!0;try{var a=t(e);return a}finally{if(tr=!1,(el!==null||nl!==null)&&(Ws(),el&&(e=el,t=nl,nl=el=null,No(e),t)))for(e=0;e<t.length;e++)No(t[e])}}function Wl(t,e){var i=t.stateNode;if(i===null)return null;var a=i[pe]||null;if(a===null)return null;i=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(Sn)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){er=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{er=!1}var Xn=null,nr=null,os=null;function Ro(){if(os)return os;var t,e=nr,i=e.length,a,c="value"in Xn?Xn.value:Xn.textContent,o=c.length;for(t=0;t<i&&e[t]===c[t];t++);var y=i-t;for(a=1;a<=y&&e[i-a]===c[o-a];a++);return os=c.slice(t,1<a?1-a:void 0)}function hs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ds(){return!0}function jo(){return!1}function _e(t){function e(i,a,c,o,y){this._reactName=i,this._targetInst=c,this.type=a,this.nativeEvent=o,this.target=y,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(i=t[S],this[S]=i?i(o):o[S]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ds:jo,this.isPropagationStopped=jo,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),e}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=_e(bi),Il=v({},bi,{view:0,detail:0}),Dg=_e(Il),ir,lr,ta,gs=v({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(ir=t.screenX-ta.screenX,lr=t.screenY-ta.screenY):lr=ir=0,ta=t),ir)},movementY:function(t){return"movementY"in t?t.movementY:lr}}),Uo=_e(gs),Rg=v({},gs,{dataTransfer:0}),jg=_e(Rg),Ug=v({},Il,{relatedTarget:0}),ar=_e(Ug),wg=v({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=_e(wg),Lg=v({},bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hg=_e(Lg),qg=v({},bi,{data:0}),wo=_e(qg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xg[t])?!!e[t]:!1}function sr(){return Vg}var Qg=v({},Il,{key:function(t){if(t.key){var e=Yg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(t){return t.type==="keypress"?hs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zg=_e(Qg),kg=v({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bo=_e(kg),Kg=v({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),Jg=_e(Kg),Fg=v({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),$g=_e(Fg),Wg=v({},gs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pg=_e(Wg),Ig=v({},bi,{newState:0,oldState:0}),ty=_e(Ig),ey=[9,13,27,32],ur=Sn&&"CompositionEvent"in window,ea=null;Sn&&"documentMode"in document&&(ea=document.documentMode);var ny=Sn&&"TextEvent"in window&&!ea,Lo=Sn&&(!ur||ea&&8<ea&&11>=ea),Ho=" ",qo=!1;function Yo(t,e){switch(t){case"keyup":return ey.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Go(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var il=!1;function iy(t,e){switch(t){case"compositionend":return Go(e);case"keypress":return e.which!==32?null:(qo=!0,Ho);case"textInput":return t=e.data,t===Ho&&qo?null:t;default:return null}}function ly(t,e){if(il)return t==="compositionend"||!ur&&Yo(t,e)?(t=Ro(),os=nr=Xn=null,il=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lo&&e.locale!=="ko"?null:e.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ay[t.type]:e==="textarea"}function Vo(t,e,i,a){el?nl?nl.push(a):nl=[a]:el=a,e=lu(e,"onChange"),0<e.length&&(i=new ms("onChange","change",null,i,a),t.push({event:i,listeners:e}))}var na=null,ia=null;function sy(t){A0(t,0)}function ys(t){var e=$l(t);if(Eo(e))return t}function Qo(t,e){if(t==="change")return e}var Zo=!1;if(Sn){var rr;if(Sn){var cr="oninput"in document;if(!cr){var ko=document.createElement("div");ko.setAttribute("oninput","return;"),cr=typeof ko.oninput=="function"}rr=cr}else rr=!1;Zo=rr&&(!document.documentMode||9<document.documentMode)}function Ko(){na&&(na.detachEvent("onpropertychange",Jo),ia=na=null)}function Jo(t){if(t.propertyName==="value"&&ys(ia)){var e=[];Vo(e,ia,t,Iu(t)),Do(sy,e)}}function uy(t,e,i){t==="focusin"?(Ko(),na=e,ia=i,na.attachEvent("onpropertychange",Jo)):t==="focusout"&&Ko()}function ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ys(ia)}function cy(t,e){if(t==="click")return ys(e)}function fy(t,e){if(t==="input"||t==="change")return ys(e)}function oy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Re=typeof Object.is=="function"?Object.is:oy;function la(t,e){if(Re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var c=i[a];if(!Yu.call(e,c)||!Re(t[c],e[c]))return!1}return!0}function Fo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $o(t,e){var i=Fo(t);t=0;for(var a;i;){if(i.nodeType===3){if(a=t+i.textContent.length,t<=e&&a>=e)return{node:i,offset:e-t};t=a}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Fo(i)}}function Wo(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wo(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Po(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=cs(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=cs(t.document)}return e}function fr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var hy=Sn&&"documentMode"in document&&11>=document.documentMode,ll=null,or=null,aa=null,hr=!1;function Io(t,e,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;hr||ll==null||ll!==cs(a)||(a=ll,"selectionStart"in a&&fr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),aa&&la(aa,a)||(aa=a,a=lu(or,"onSelect"),0<a.length&&(e=new ms("onSelect","select",null,e,i),t.push({event:e,listeners:a}),e.target=ll)))}function Ti(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var al={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionrun:Ti("Transition","TransitionRun"),transitionstart:Ti("Transition","TransitionStart"),transitioncancel:Ti("Transition","TransitionCancel"),transitionend:Ti("Transition","TransitionEnd")},dr={},th={};Sn&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function Ei(t){if(dr[t])return dr[t];if(!al[t])return t;var e=al[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in th)return dr[t]=e[i];return t}var eh=Ei("animationend"),nh=Ei("animationiteration"),ih=Ei("animationstart"),dy=Ei("transitionrun"),my=Ei("transitionstart"),gy=Ei("transitioncancel"),lh=Ei("transitionend"),ah=new Map,mr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mr.push("scrollEnd");function sn(t,e){ah.set(t,e),xi(e,[t])}var ps=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ke=[],sl=0,gr=0;function _s(){for(var t=sl,e=gr=sl=0;e<t;){var i=Ke[e];Ke[e++]=null;var a=Ke[e];Ke[e++]=null;var c=Ke[e];Ke[e++]=null;var o=Ke[e];if(Ke[e++]=null,a!==null&&c!==null){var y=a.pending;y===null?c.next=c:(c.next=y.next,y.next=c),a.pending=c}o!==0&&sh(i,c,o)}}function vs(t,e,i,a){Ke[sl++]=t,Ke[sl++]=e,Ke[sl++]=i,Ke[sl++]=a,gr|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function yr(t,e,i,a){return vs(t,e,i,a),Ss(t)}function Ai(t,e){return vs(t,null,null,e),Ss(t)}function sh(t,e,i){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i);for(var c=!1,o=t.return;o!==null;)o.childLanes|=i,a=o.alternate,a!==null&&(a.childLanes|=i),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(c=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,c&&e!==null&&(c=31-De(i),t=o.hiddenUpdates,a=t[c],a===null?t[c]=[e]:a.push(e),e.lane=i|536870912),o):null}function Ss(t){if(50<za)throw za=0,Ac=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ul={};function yy(t,e,i,a){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,i,a){return new yy(t,e,i,a)}function pr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xn(t,e){var i=t.alternate;return i===null?(i=je(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function uh(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function xs(t,e,i,a,c,o){var y=0;if(a=t,typeof t=="function")pr(t)&&(y=1);else if(typeof t=="string")y=xp(t,i,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case X:return t=je(31,i,e,c),t.elementType=X,t.lanes=o,t;case _:return Mi(i.children,c,o,e);case A:y=8,c|=24;break;case z:return t=je(12,i,e,c|2),t.elementType=z,t.lanes=o,t;case D:return t=je(13,i,e,c),t.elementType=D,t.lanes=o,t;case H:return t=je(19,i,e,c),t.elementType=H,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:y=10;break t;case U:y=9;break t;case j:y=11;break t;case q:y=14;break t;case K:y=16,a=null;break t}y=29,i=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=je(y,i,e,c),e.elementType=t,e.type=a,e.lanes=o,e}function Mi(t,e,i,a){return t=je(7,t,a,e),t.lanes=i,t}function _r(t,e,i){return t=je(6,t,null,e),t.lanes=i,t}function rh(t){var e=je(18,null,null,0);return e.stateNode=t,e}function vr(t,e,i){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ch=new WeakMap;function Je(t,e){if(typeof t=="object"&&t!==null){var i=ch.get(t);return i!==void 0?i:(e={value:t,source:e,stack:uo(e)},ch.set(t,e),e)}return{value:t,source:e,stack:uo(e)}}var rl=[],cl=0,bs=null,sa=0,Fe=[],$e=0,Vn=null,fn=1,on="";function bn(t,e){rl[cl++]=sa,rl[cl++]=bs,bs=t,sa=e}function fh(t,e,i){Fe[$e++]=fn,Fe[$e++]=on,Fe[$e++]=Vn,Vn=t;var a=fn;t=on;var c=32-De(a)-1;a&=~(1<<c),i+=1;var o=32-De(e)+c;if(30<o){var y=c-c%5;o=(a&(1<<y)-1).toString(32),a>>=y,c-=y,fn=1<<32-De(e)+c|i<<c|a,on=o+t}else fn=1<<o|i<<c|a,on=t}function Sr(t){t.return!==null&&(bn(t,1),fh(t,1,0))}function xr(t){for(;t===bs;)bs=rl[--cl],rl[cl]=null,sa=rl[--cl],rl[cl]=null;for(;t===Vn;)Vn=Fe[--$e],Fe[$e]=null,on=Fe[--$e],Fe[$e]=null,fn=Fe[--$e],Fe[$e]=null}function oh(t,e){Fe[$e++]=fn,Fe[$e++]=on,Fe[$e++]=Vn,fn=e.id,on=e.overflow,Vn=t}var ae=null,wt=null,_t=!1,Qn=null,We=!1,br=Error(s(519));function Zn(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ua(Je(e,t)),br}function hh(t){var e=t.stateNode,i=t.type,a=t.memoizedProps;switch(e[le]=t,e[pe]=a,i){case"dialog":gt("cancel",e),gt("close",e);break;case"iframe":case"object":case"embed":gt("load",e);break;case"video":case"audio":for(i=0;i<Ca.length;i++)gt(Ca[i],e);break;case"source":gt("error",e);break;case"img":case"image":case"link":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"input":gt("invalid",e),Ao(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":gt("invalid",e);break;case"textarea":gt("invalid",e),zo(e,a.value,a.defaultValue,a.children)}i=a.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||a.suppressHydrationWarning===!0||C0(e.textContent,i)?(a.popover!=null&&(gt("beforetoggle",e),gt("toggle",e)),a.onScroll!=null&&gt("scroll",e),a.onScrollEnd!=null&&gt("scrollend",e),a.onClick!=null&&(e.onclick=vn),e=!0):e=!1,e||Zn(t,!0)}function dh(t){for(ae=t.return;ae;)switch(ae.tag){case 5:case 31:case 13:We=!1;return;case 27:case 3:We=!0;return;default:ae=ae.return}}function fl(t){if(t!==ae)return!1;if(!_t)return dh(t),_t=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Yc(t.type,t.memoizedProps)),i=!i),i&&wt&&Zn(t),dh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));wt=H0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));wt=H0(t)}else e===27?(e=wt,ai(t.type)?(t=Zc,Zc=null,wt=t):wt=e):wt=ae?Ie(t.stateNode.nextSibling):null;return!0}function zi(){wt=ae=null,_t=!1}function Tr(){var t=Qn;return t!==null&&(be===null?be=t:be.push.apply(be,t),Qn=null),t}function ua(t){Qn===null?Qn=[t]:Qn.push(t)}var Er=C(null),Oi=null,Tn=null;function kn(t,e,i){F(Er,e._currentValue),e._currentValue=i}function En(t){t._currentValue=Er.current,Q(Er)}function Ar(t,e,i){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===i)break;t=t.return}}function Mr(t,e,i,a){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var o=c.dependencies;if(o!==null){var y=c.child;o=o.firstContext;t:for(;o!==null;){var S=o;o=c;for(var M=0;M<e.length;M++)if(S.context===e[M]){o.lanes|=i,S=o.alternate,S!==null&&(S.lanes|=i),Ar(o.return,i,t),a||(y=null);break t}o=S.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=i,o=y.alternate,o!==null&&(o.lanes|=i),Ar(y,i,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function ol(t,e,i,a){t=null;for(var c=e,o=!1;c!==null;){if(!o){if((c.flags&524288)!==0)o=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var S=c.type;Re(c.pendingProps.value,y.value)||(t!==null?t.push(S):t=[S])}}else if(c===At.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ua):t=[Ua])}c=c.return}t!==null&&Mr(e,t,i,a),e.flags|=262144}function Ts(t){for(t=t.firstContext;t!==null;){if(!Re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ci(t){Oi=t,Tn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function se(t){return mh(Oi,t)}function Es(t,e){return Oi===null&&Ci(t),mh(t,e)}function mh(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},Tn===null){if(t===null)throw Error(s(308));Tn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Tn=Tn.next=e;return i}var py=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},_y=u.unstable_scheduleCallback,vy=u.unstable_NormalPriority,Jt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zr(){return{controller:new py,data:new Map,refCount:0}}function ra(t){t.refCount--,t.refCount===0&&_y(vy,function(){t.controller.abort()})}var ca=null,Or=0,hl=0,dl=null;function Sy(t,e){if(ca===null){var i=ca=[];Or=0,hl=Dc(),dl={status:"pending",value:void 0,then:function(a){i.push(a)}}}return Or++,e.then(gh,gh),e}function gh(){if(--Or===0&&ca!==null){dl!==null&&(dl.status="fulfilled");var t=ca;ca=null,hl=0,dl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function xy(t,e){var i=[],a={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var c=0;c<i.length;c++)(0,i[c])(e)},function(c){for(a.status="rejected",a.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),a}var yh=Y.S;Y.S=function(t,e){Id=Ce(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Sy(t,e),yh!==null&&yh(t,e)};var Ni=C(null);function Cr(){var t=Ni.current;return t!==null?t:Rt.pooledCache}function As(t,e){e===null?F(Ni,Ni.current):F(Ni,e.pool)}function ph(){var t=Cr();return t===null?null:{parent:Jt._currentValue,pool:t}}var ml=Error(s(460)),Nr=Error(s(474)),Ms=Error(s(542)),zs={then:function(){}};function _h(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vh(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(vn,vn),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,xh(t),t;default:if(typeof e.status=="string")e.then(vn,vn);else{if(t=Rt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var c=e;c.status="fulfilled",c.value=a}},function(a){if(e.status==="pending"){var c=e;c.status="rejected",c.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,xh(t),t}throw Ri=e,ml}}function Di(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Ri=i,ml):i}}var Ri=null;function Sh(){if(Ri===null)throw Error(s(459));var t=Ri;return Ri=null,t}function xh(t){if(t===ml||t===Ms)throw Error(s(483))}var gl=null,fa=0;function Os(t){var e=fa;return fa+=1,gl===null&&(gl=[]),vh(gl,t,e)}function oa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Cs(t,e){throw e.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function bh(t){function e(R,O){if(t){var w=R.deletions;w===null?(R.deletions=[O],R.flags|=16):w.push(O)}}function i(R,O){if(!t)return null;for(;O!==null;)e(R,O),O=O.sibling;return null}function a(R){for(var O=new Map;R!==null;)R.key!==null?O.set(R.key,R):O.set(R.index,R),R=R.sibling;return O}function c(R,O){return R=xn(R,O),R.index=0,R.sibling=null,R}function o(R,O,w){return R.index=w,t?(w=R.alternate,w!==null?(w=w.index,w<O?(R.flags|=67108866,O):w):(R.flags|=67108866,O)):(R.flags|=1048576,O)}function y(R){return t&&R.alternate===null&&(R.flags|=67108866),R}function S(R,O,w,Z){return O===null||O.tag!==6?(O=_r(w,R.mode,Z),O.return=R,O):(O=c(O,w),O.return=R,O)}function M(R,O,w,Z){var at=w.type;return at===_?V(R,O,w.props.children,Z,w.key):O!==null&&(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===K&&Di(at)===O.type)?(O=c(O,w.props),oa(O,w),O.return=R,O):(O=xs(w.type,w.key,w.props,null,R.mode,Z),oa(O,w),O.return=R,O)}function B(R,O,w,Z){return O===null||O.tag!==4||O.stateNode.containerInfo!==w.containerInfo||O.stateNode.implementation!==w.implementation?(O=vr(w,R.mode,Z),O.return=R,O):(O=c(O,w.children||[]),O.return=R,O)}function V(R,O,w,Z,at){return O===null||O.tag!==7?(O=Mi(w,R.mode,Z,at),O.return=R,O):(O=c(O,w),O.return=R,O)}function k(R,O,w){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=_r(""+O,R.mode,w),O.return=R,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case x:return w=xs(O.type,O.key,O.props,null,R.mode,w),oa(w,O),w.return=R,w;case T:return O=vr(O,R.mode,w),O.return=R,O;case K:return O=Di(O),k(R,O,w)}if(ht(O)||P(O))return O=Mi(O,R.mode,w,null),O.return=R,O;if(typeof O.then=="function")return k(R,Os(O),w);if(O.$$typeof===N)return k(R,Es(R,O),w);Cs(R,O)}return null}function L(R,O,w,Z){var at=O!==null?O.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return at!==null?null:S(R,O,""+w,Z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case x:return w.key===at?M(R,O,w,Z):null;case T:return w.key===at?B(R,O,w,Z):null;case K:return w=Di(w),L(R,O,w,Z)}if(ht(w)||P(w))return at!==null?null:V(R,O,w,Z,null);if(typeof w.then=="function")return L(R,O,Os(w),Z);if(w.$$typeof===N)return L(R,O,Es(R,w),Z);Cs(R,w)}return null}function G(R,O,w,Z,at){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return R=R.get(w)||null,S(O,R,""+Z,at);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case x:return R=R.get(Z.key===null?w:Z.key)||null,M(O,R,Z,at);case T:return R=R.get(Z.key===null?w:Z.key)||null,B(O,R,Z,at);case K:return Z=Di(Z),G(R,O,w,Z,at)}if(ht(Z)||P(Z))return R=R.get(w)||null,V(O,R,Z,at,null);if(typeof Z.then=="function")return G(R,O,w,Os(Z),at);if(Z.$$typeof===N)return G(R,O,w,Es(O,Z),at);Cs(O,Z)}return null}function tt(R,O,w,Z){for(var at=null,bt=null,it=O,ot=O=0,pt=null;it!==null&&ot<w.length;ot++){it.index>ot?(pt=it,it=null):pt=it.sibling;var Tt=L(R,it,w[ot],Z);if(Tt===null){it===null&&(it=pt);break}t&&it&&Tt.alternate===null&&e(R,it),O=o(Tt,O,ot),bt===null?at=Tt:bt.sibling=Tt,bt=Tt,it=pt}if(ot===w.length)return i(R,it),_t&&bn(R,ot),at;if(it===null){for(;ot<w.length;ot++)it=k(R,w[ot],Z),it!==null&&(O=o(it,O,ot),bt===null?at=it:bt.sibling=it,bt=it);return _t&&bn(R,ot),at}for(it=a(it);ot<w.length;ot++)pt=G(it,R,ot,w[ot],Z),pt!==null&&(t&&pt.alternate!==null&&it.delete(pt.key===null?ot:pt.key),O=o(pt,O,ot),bt===null?at=pt:bt.sibling=pt,bt=pt);return t&&it.forEach(function(fi){return e(R,fi)}),_t&&bn(R,ot),at}function st(R,O,w,Z){if(w==null)throw Error(s(151));for(var at=null,bt=null,it=O,ot=O=0,pt=null,Tt=w.next();it!==null&&!Tt.done;ot++,Tt=w.next()){it.index>ot?(pt=it,it=null):pt=it.sibling;var fi=L(R,it,Tt.value,Z);if(fi===null){it===null&&(it=pt);break}t&&it&&fi.alternate===null&&e(R,it),O=o(fi,O,ot),bt===null?at=fi:bt.sibling=fi,bt=fi,it=pt}if(Tt.done)return i(R,it),_t&&bn(R,ot),at;if(it===null){for(;!Tt.done;ot++,Tt=w.next())Tt=k(R,Tt.value,Z),Tt!==null&&(O=o(Tt,O,ot),bt===null?at=Tt:bt.sibling=Tt,bt=Tt);return _t&&bn(R,ot),at}for(it=a(it);!Tt.done;ot++,Tt=w.next())Tt=G(it,R,ot,Tt.value,Z),Tt!==null&&(t&&Tt.alternate!==null&&it.delete(Tt.key===null?ot:Tt.key),O=o(Tt,O,ot),bt===null?at=Tt:bt.sibling=Tt,bt=Tt);return t&&it.forEach(function(Rp){return e(R,Rp)}),_t&&bn(R,ot),at}function Dt(R,O,w,Z){if(typeof w=="object"&&w!==null&&w.type===_&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case x:t:{for(var at=w.key;O!==null;){if(O.key===at){if(at=w.type,at===_){if(O.tag===7){i(R,O.sibling),Z=c(O,w.props.children),Z.return=R,R=Z;break t}}else if(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===K&&Di(at)===O.type){i(R,O.sibling),Z=c(O,w.props),oa(Z,w),Z.return=R,R=Z;break t}i(R,O);break}else e(R,O);O=O.sibling}w.type===_?(Z=Mi(w.props.children,R.mode,Z,w.key),Z.return=R,R=Z):(Z=xs(w.type,w.key,w.props,null,R.mode,Z),oa(Z,w),Z.return=R,R=Z)}return y(R);case T:t:{for(at=w.key;O!==null;){if(O.key===at)if(O.tag===4&&O.stateNode.containerInfo===w.containerInfo&&O.stateNode.implementation===w.implementation){i(R,O.sibling),Z=c(O,w.children||[]),Z.return=R,R=Z;break t}else{i(R,O);break}else e(R,O);O=O.sibling}Z=vr(w,R.mode,Z),Z.return=R,R=Z}return y(R);case K:return w=Di(w),Dt(R,O,w,Z)}if(ht(w))return tt(R,O,w,Z);if(P(w)){if(at=P(w),typeof at!="function")throw Error(s(150));return w=at.call(w),st(R,O,w,Z)}if(typeof w.then=="function")return Dt(R,O,Os(w),Z);if(w.$$typeof===N)return Dt(R,O,Es(R,w),Z);Cs(R,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,O!==null&&O.tag===6?(i(R,O.sibling),Z=c(O,w),Z.return=R,R=Z):(i(R,O),Z=_r(w,R.mode,Z),Z.return=R,R=Z),y(R)):i(R,O)}return function(R,O,w,Z){try{fa=0;var at=Dt(R,O,w,Z);return gl=null,at}catch(it){if(it===ml||it===Ms)throw it;var bt=je(29,it,null,R.mode);return bt.lanes=Z,bt.return=R,bt}finally{}}}var ji=bh(!0),Th=bh(!1),Kn=!1;function Dr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Jn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(t,e,i){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Et&2)!==0){var c=a.pending;return c===null?e.next=e:(e.next=c.next,c.next=e),a.pending=e,e=Ss(t),sh(t,null,i),e}return vs(t,a,e,i),Ss(t)}function ha(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,i|=a,e.lanes=i,mo(t,i)}}function jr(t,e){var i=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var c=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var y={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};o===null?c=o=y:o=o.next=y,i=i.next}while(i!==null);o===null?c=o=e:o=o.next=e}else c=o=e;i={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var Ur=!1;function da(){if(Ur){var t=dl;if(t!==null)throw t}}function ma(t,e,i,a){Ur=!1;var c=t.updateQueue;Kn=!1;var o=c.firstBaseUpdate,y=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var M=S,B=M.next;M.next=null,y===null?o=B:y.next=B,y=M;var V=t.alternate;V!==null&&(V=V.updateQueue,S=V.lastBaseUpdate,S!==y&&(S===null?V.firstBaseUpdate=B:S.next=B,V.lastBaseUpdate=M))}if(o!==null){var k=c.baseState;y=0,V=B=M=null,S=o;do{var L=S.lane&-536870913,G=L!==S.lane;if(G?(yt&L)===L:(a&L)===L){L!==0&&L===hl&&(Ur=!0),V!==null&&(V=V.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});t:{var tt=t,st=S;L=e;var Dt=i;switch(st.tag){case 1:if(tt=st.payload,typeof tt=="function"){k=tt.call(Dt,k,L);break t}k=tt;break t;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=st.payload,L=typeof tt=="function"?tt.call(Dt,k,L):tt,L==null)break t;k=v({},k,L);break t;case 2:Kn=!0}}L=S.callback,L!==null&&(t.flags|=64,G&&(t.flags|=8192),G=c.callbacks,G===null?c.callbacks=[L]:G.push(L))}else G={lane:L,tag:S.tag,payload:S.payload,callback:S.callback,next:null},V===null?(B=V=G,M=k):V=V.next=G,y|=L;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;G=S,S=G.next,G.next=null,c.lastBaseUpdate=G,c.shared.pending=null}}while(!0);V===null&&(M=k),c.baseState=M,c.firstBaseUpdate=B,c.lastBaseUpdate=V,o===null&&(c.shared.lanes=0),ti|=y,t.lanes=y,t.memoizedState=k}}function Eh(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Ah(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Eh(i[t],e)}var yl=C(null),Ns=C(0);function Mh(t,e){t=jn,F(Ns,t),F(yl,e),jn=t|e.baseLanes}function wr(){F(Ns,jn),F(yl,yl.current)}function Br(){jn=Ns.current,Q(yl),Q(Ns)}var Ue=C(null),Pe=null;function $n(t){var e=t.alternate;F(Zt,Zt.current&1),F(Ue,t),Pe===null&&(e===null||yl.current!==null||e.memoizedState!==null)&&(Pe=t)}function Lr(t){F(Zt,Zt.current),F(Ue,t),Pe===null&&(Pe=t)}function zh(t){t.tag===22?(F(Zt,Zt.current),F(Ue,t),Pe===null&&(Pe=t)):Wn()}function Wn(){F(Zt,Zt.current),F(Ue,Ue.current)}function we(t){Q(Ue),Pe===t&&(Pe=null),Q(Zt)}var Zt=C(0);function Ds(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Vc(i)||Qc(i)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var An=0,ft=null,Ct=null,Ft=null,Rs=!1,pl=!1,Ui=!1,js=0,ga=0,_l=null,by=0;function Gt(){throw Error(s(321))}function Hr(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Re(t[i],e[i]))return!1;return!0}function qr(t,e,i,a,c,o){return An=o,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Y.H=t===null||t.memoizedState===null?fd:tc,Ui=!1,o=i(a,c),Ui=!1,pl&&(o=Ch(e,i,a,c)),Oh(t),o}function Oh(t){Y.H=_a;var e=Ct!==null&&Ct.next!==null;if(An=0,Ft=Ct=ft=null,Rs=!1,ga=0,_l=null,e)throw Error(s(300));t===null||$t||(t=t.dependencies,t!==null&&Ts(t)&&($t=!0))}function Ch(t,e,i,a){ft=t;var c=0;do{if(pl&&(_l=null),ga=0,pl=!1,25<=c)throw Error(s(301));if(c+=1,Ft=Ct=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Y.H=od,o=e(i,a)}while(pl);return o}function Ty(){var t=Y.H,e=t.useState()[0];return e=typeof e.then=="function"?ya(e):e,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(ft.flags|=1024),e}function Yr(){var t=js!==0;return js=0,t}function Gr(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function Xr(t){if(Rs){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Rs=!1}An=0,Ft=Ct=ft=null,pl=!1,ga=js=0,_l=null}function me(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?ft.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function kt(){if(Ct===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ft===null?ft.memoizedState:Ft.next;if(e!==null)Ft=e,Ct=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ft===null?ft.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ya(t){var e=ga;return ga+=1,_l===null&&(_l=[]),t=vh(_l,t,e),e=ft,(Ft===null?e.memoizedState:Ft.next)===null&&(e=e.alternate,Y.H=e===null||e.memoizedState===null?fd:tc),t}function ws(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ya(t);if(t.$$typeof===N)return se(t)}throw Error(s(438,String(t)))}function Vr(t){var e=null,i=ft.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var a=ft.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(c){return c.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Us(),ft.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),a=0;a<t;a++)i[a]=W;return e.index++,i}function Mn(t,e){return typeof e=="function"?e(t):e}function Bs(t){var e=kt();return Qr(e,Ct,t)}function Qr(t,e,i){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=i;var c=t.baseQueue,o=a.pending;if(o!==null){if(c!==null){var y=c.next;c.next=o.next,o.next=y}e.baseQueue=c=o,a.pending=null}if(o=t.baseState,c===null)t.memoizedState=o;else{e=c.next;var S=y=null,M=null,B=e,V=!1;do{var k=B.lane&-536870913;if(k!==B.lane?(yt&k)===k:(An&k)===k){var L=B.revertLane;if(L===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),k===hl&&(V=!0);else if((An&L)===L){B=B.next,L===hl&&(V=!0);continue}else k={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},M===null?(S=M=k,y=o):M=M.next=k,ft.lanes|=L,ti|=L;k=B.action,Ui&&i(o,k),o=B.hasEagerState?B.eagerState:i(o,k)}else L={lane:k,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},M===null?(S=M=L,y=o):M=M.next=L,ft.lanes|=k,ti|=k;B=B.next}while(B!==null&&B!==e);if(M===null?y=o:M.next=S,!Re(o,t.memoizedState)&&($t=!0,V&&(i=dl,i!==null)))throw i;t.memoizedState=o,t.baseState=y,t.baseQueue=M,a.lastRenderedState=o}return c===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Zr(t){var e=kt(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var a=i.dispatch,c=i.pending,o=e.memoizedState;if(c!==null){i.pending=null;var y=c=c.next;do o=t(o,y.action),y=y.next;while(y!==c);Re(o,e.memoizedState)||($t=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),i.lastRenderedState=o}return[o,a]}function Nh(t,e,i){var a=ft,c=kt(),o=_t;if(o){if(i===void 0)throw Error(s(407));i=i()}else i=e();var y=!Re((Ct||c).memoizedState,i);if(y&&(c.memoizedState=i,$t=!0),c=c.queue,Jr(jh.bind(null,a,c,t),[t]),c.getSnapshot!==e||y||Ft!==null&&Ft.memoizedState.tag&1){if(a.flags|=2048,vl(9,{destroy:void 0},Rh.bind(null,a,c,i,e),null),Rt===null)throw Error(s(349));o||(An&127)!==0||Dh(a,e,i)}return i}function Dh(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=ft.updateQueue,e===null?(e=Us(),ft.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Rh(t,e,i,a){e.value=i,e.getSnapshot=a,Uh(e)&&wh(t)}function jh(t,e,i){return i(function(){Uh(e)&&wh(t)})}function Uh(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Re(t,i)}catch{return!0}}function wh(t){var e=Ai(t,2);e!==null&&Te(e,t,2)}function kr(t){var e=me();if(typeof t=="function"){var i=t;if(t=i(),Ui){Yn(!0);try{i()}finally{Yn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:t},e}function Bh(t,e,i,a){return t.baseState=i,Qr(t,Ct,typeof a=="function"?a:Mn)}function Ey(t,e,i,a,c){if(qs(t))throw Error(s(485));if(t=e.action,t!==null){var o={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){o.listeners.push(y)}};Y.T!==null?i(!0):o.isTransition=!1,a(o),i=e.pending,i===null?(o.next=e.pending=o,Lh(e,o)):(o.next=i.next,e.pending=i.next=o)}}function Lh(t,e){var i=e.action,a=e.payload,c=t.state;if(e.isTransition){var o=Y.T,y={};Y.T=y;try{var S=i(c,a),M=Y.S;M!==null&&M(y,S),Hh(t,e,S)}catch(B){Kr(t,e,B)}finally{o!==null&&y.types!==null&&(o.types=y.types),Y.T=o}}else try{o=i(c,a),Hh(t,e,o)}catch(B){Kr(t,e,B)}}function Hh(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(a){qh(t,e,a)},function(a){return Kr(t,e,a)}):qh(t,e,i)}function qh(t,e,i){e.status="fulfilled",e.value=i,Yh(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,Lh(t,i)))}function Kr(t,e,i){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=i,Yh(e),e=e.next;while(e!==a)}t.action=null}function Yh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Gh(t,e){return e}function Xh(t,e){if(_t){var i=Rt.formState;if(i!==null){t:{var a=ft;if(_t){if(wt){e:{for(var c=wt,o=We;c.nodeType!==8;){if(!o){c=null;break e}if(c=Ie(c.nextSibling),c===null){c=null;break e}}o=c.data,c=o==="F!"||o==="F"?c:null}if(c){wt=Ie(c.nextSibling),a=c.data==="F!";break t}}Zn(a)}a=!1}a&&(e=i[0])}}return i=me(),i.memoizedState=i.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gh,lastRenderedState:e},i.queue=a,i=ud.bind(null,ft,a),a.dispatch=i,a=kr(!1),o=Ir.bind(null,ft,!1,a.queue),a=me(),c={state:e,dispatch:null,action:t,pending:null},a.queue=c,i=Ey.bind(null,ft,c,o,i),c.dispatch=i,a.memoizedState=t,[e,i,!1]}function Vh(t){var e=kt();return Qh(e,Ct,t)}function Qh(t,e,i){if(e=Qr(t,e,Gh)[0],t=Bs(Mn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=ya(e)}catch(y){throw y===ml?Ms:y}else a=e;e=kt();var c=e.queue,o=c.dispatch;return i!==e.memoizedState&&(ft.flags|=2048,vl(9,{destroy:void 0},Ay.bind(null,c,i),null)),[a,o,t]}function Ay(t,e){t.action=e}function Zh(t){var e=kt(),i=Ct;if(i!==null)return Qh(e,i,t);kt(),e=e.memoizedState,i=kt();var a=i.queue.dispatch;return i.memoizedState=t,[e,a,!1]}function vl(t,e,i,a){return t={tag:t,create:i,deps:a,inst:e,next:null},e=ft.updateQueue,e===null&&(e=Us(),ft.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(a=i.next,i.next=t,t.next=a,e.lastEffect=t),t}function kh(){return kt().memoizedState}function Ls(t,e,i,a){var c=me();ft.flags|=t,c.memoizedState=vl(1|e,{destroy:void 0},i,a===void 0?null:a)}function Hs(t,e,i,a){var c=kt();a=a===void 0?null:a;var o=c.memoizedState.inst;Ct!==null&&a!==null&&Hr(a,Ct.memoizedState.deps)?c.memoizedState=vl(e,o,i,a):(ft.flags|=t,c.memoizedState=vl(1|e,o,i,a))}function Kh(t,e){Ls(8390656,8,t,e)}function Jr(t,e){Hs(2048,8,t,e)}function My(t){ft.flags|=4;var e=ft.updateQueue;if(e===null)e=Us(),ft.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function Jh(t){var e=kt().memoizedState;return My({ref:e,nextImpl:t}),function(){if((Et&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function Fh(t,e){return Hs(4,2,t,e)}function $h(t,e){return Hs(4,4,t,e)}function Wh(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ph(t,e,i){i=i!=null?i.concat([t]):null,Hs(4,4,Wh.bind(null,e,t),i)}function Fr(){}function Ih(t,e){var i=kt();e=e===void 0?null:e;var a=i.memoizedState;return e!==null&&Hr(e,a[1])?a[0]:(i.memoizedState=[t,e],t)}function td(t,e){var i=kt();e=e===void 0?null:e;var a=i.memoizedState;if(e!==null&&Hr(e,a[1]))return a[0];if(a=t(),Ui){Yn(!0);try{t()}finally{Yn(!1)}}return i.memoizedState=[a,e],a}function $r(t,e,i){return i===void 0||(An&1073741824)!==0&&(yt&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=e0(),ft.lanes|=t,ti|=t,i)}function ed(t,e,i,a){return Re(i,e)?i:yl.current!==null?(t=$r(t,i,a),Re(t,e)||($t=!0),t):(An&42)===0||(An&1073741824)!==0&&(yt&261930)===0?($t=!0,t.memoizedState=i):(t=e0(),ft.lanes|=t,ti|=t,e)}function nd(t,e,i,a,c){var o=J.p;J.p=o!==0&&8>o?o:8;var y=Y.T,S={};Y.T=S,Ir(t,!1,e,i);try{var M=c(),B=Y.S;if(B!==null&&B(S,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var V=xy(M,a);pa(t,e,V,He(t))}else pa(t,e,a,He(t))}catch(k){pa(t,e,{then:function(){},status:"rejected",reason:k},He())}finally{J.p=o,y!==null&&S.types!==null&&(y.types=S.types),Y.T=y}}function zy(){}function Wr(t,e,i,a){if(t.tag!==5)throw Error(s(476));var c=id(t).queue;nd(t,c,e,lt,i===null?zy:function(){return ld(t),i(a)})}function id(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:lt},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ld(t){var e=id(t);e.next===null&&(e=t.alternate.memoizedState),pa(t,e.next.queue,{},He())}function Pr(){return se(Ua)}function ad(){return kt().memoizedState}function sd(){return kt().memoizedState}function Oy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=He();t=Jn(i);var a=Fn(e,t,i);a!==null&&(Te(a,e,i),ha(a,e,i)),e={cache:zr()},t.payload=e;return}e=e.return}}function Cy(t,e,i){var a=He();i={lane:a,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},qs(t)?rd(e,i):(i=yr(t,e,i,a),i!==null&&(Te(i,t,a),cd(i,e,a)))}function ud(t,e,i){var a=He();pa(t,e,i,a)}function pa(t,e,i,a){var c={lane:a,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(qs(t))rd(e,c);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var y=e.lastRenderedState,S=o(y,i);if(c.hasEagerState=!0,c.eagerState=S,Re(S,y))return vs(t,e,c,0),Rt===null&&_s(),!1}catch{}finally{}if(i=yr(t,e,c,a),i!==null)return Te(i,t,a),cd(i,e,a),!0}return!1}function Ir(t,e,i,a){if(a={lane:2,revertLane:Dc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qs(t)){if(e)throw Error(s(479))}else e=yr(t,i,a,2),e!==null&&Te(e,t,2)}function qs(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function rd(t,e){pl=Rs=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function cd(t,e,i){if((i&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,i|=a,e.lanes=i,mo(t,i)}}var _a={readContext:se,use:ws,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useLayoutEffect:Gt,useInsertionEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useSyncExternalStore:Gt,useId:Gt,useHostTransitionStatus:Gt,useFormState:Gt,useActionState:Gt,useOptimistic:Gt,useMemoCache:Gt,useCacheRefresh:Gt};_a.useEffectEvent=Gt;var fd={readContext:se,use:ws,useCallback:function(t,e){return me().memoizedState=[t,e===void 0?null:e],t},useContext:se,useEffect:Kh,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,Ls(4194308,4,Wh.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Ls(4194308,4,t,e)},useInsertionEffect:function(t,e){Ls(4,2,t,e)},useMemo:function(t,e){var i=me();e=e===void 0?null:e;var a=t();if(Ui){Yn(!0);try{t()}finally{Yn(!1)}}return i.memoizedState=[a,e],a},useReducer:function(t,e,i){var a=me();if(i!==void 0){var c=i(e);if(Ui){Yn(!0);try{i(e)}finally{Yn(!1)}}}else c=e;return a.memoizedState=a.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},a.queue=t,t=t.dispatch=Cy.bind(null,ft,t),[a.memoizedState,t]},useRef:function(t){var e=me();return t={current:t},e.memoizedState=t},useState:function(t){t=kr(t);var e=t.queue,i=ud.bind(null,ft,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Fr,useDeferredValue:function(t,e){var i=me();return $r(i,t,e)},useTransition:function(){var t=kr(!1);return t=nd.bind(null,ft,t.queue,!0,!1),me().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var a=ft,c=me();if(_t){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),Rt===null)throw Error(s(349));(yt&127)!==0||Dh(a,e,i)}c.memoizedState=i;var o={value:i,getSnapshot:e};return c.queue=o,Kh(jh.bind(null,a,o,t),[t]),a.flags|=2048,vl(9,{destroy:void 0},Rh.bind(null,a,o,i,e),null),i},useId:function(){var t=me(),e=Rt.identifierPrefix;if(_t){var i=on,a=fn;i=(a&~(1<<32-De(a)-1)).toString(32)+i,e="_"+e+"R_"+i,i=js++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=by++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Pr,useFormState:Xh,useActionState:Xh,useOptimistic:function(t){var e=me();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Ir.bind(null,ft,!0,i),i.dispatch=e,[t,e]},useMemoCache:Vr,useCacheRefresh:function(){return me().memoizedState=Oy.bind(null,ft)},useEffectEvent:function(t){var e=me(),i={impl:t};return e.memoizedState=i,function(){if((Et&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},tc={readContext:se,use:ws,useCallback:Ih,useContext:se,useEffect:Jr,useImperativeHandle:Ph,useInsertionEffect:Fh,useLayoutEffect:$h,useMemo:td,useReducer:Bs,useRef:kh,useState:function(){return Bs(Mn)},useDebugValue:Fr,useDeferredValue:function(t,e){var i=kt();return ed(i,Ct.memoizedState,t,e)},useTransition:function(){var t=Bs(Mn)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:ya(t),e]},useSyncExternalStore:Nh,useId:ad,useHostTransitionStatus:Pr,useFormState:Vh,useActionState:Vh,useOptimistic:function(t,e){var i=kt();return Bh(i,Ct,t,e)},useMemoCache:Vr,useCacheRefresh:sd};tc.useEffectEvent=Jh;var od={readContext:se,use:ws,useCallback:Ih,useContext:se,useEffect:Jr,useImperativeHandle:Ph,useInsertionEffect:Fh,useLayoutEffect:$h,useMemo:td,useReducer:Zr,useRef:kh,useState:function(){return Zr(Mn)},useDebugValue:Fr,useDeferredValue:function(t,e){var i=kt();return Ct===null?$r(i,t,e):ed(i,Ct.memoizedState,t,e)},useTransition:function(){var t=Zr(Mn)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:ya(t),e]},useSyncExternalStore:Nh,useId:ad,useHostTransitionStatus:Pr,useFormState:Zh,useActionState:Zh,useOptimistic:function(t,e){var i=kt();return Ct!==null?Bh(i,Ct,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Vr,useCacheRefresh:sd};od.useEffectEvent=Jh;function ec(t,e,i,a){e=t.memoizedState,i=i(a,e),i=i==null?e:v({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var nc={enqueueSetState:function(t,e,i){t=t._reactInternals;var a=He(),c=Jn(a);c.payload=e,i!=null&&(c.callback=i),e=Fn(t,c,a),e!==null&&(Te(e,t,a),ha(e,t,a))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var a=He(),c=Jn(a);c.tag=1,c.payload=e,i!=null&&(c.callback=i),e=Fn(t,c,a),e!==null&&(Te(e,t,a),ha(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=He(),a=Jn(i);a.tag=2,e!=null&&(a.callback=e),e=Fn(t,a,i),e!==null&&(Te(e,t,i),ha(e,t,i))}};function hd(t,e,i,a,c,o,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,o,y):e.prototype&&e.prototype.isPureReactComponent?!la(i,a)||!la(c,o):!0}function dd(t,e,i,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,a),e.state!==t&&nc.enqueueReplaceState(e,e.state,null)}function wi(t,e){var i=e;if("ref"in e){i={};for(var a in e)a!=="ref"&&(i[a]=e[a])}if(t=t.defaultProps){i===e&&(i=v({},i));for(var c in t)i[c]===void 0&&(i[c]=t[c])}return i}function md(t){ps(t)}function gd(t){console.error(t)}function yd(t){ps(t)}function Ys(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function pd(t,e,i){try{var a=t.onCaughtError;a(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ic(t,e,i){return i=Jn(i),i.tag=3,i.payload={element:null},i.callback=function(){Ys(t,e)},i}function _d(t){return t=Jn(t),t.tag=3,t}function vd(t,e,i,a){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var o=a.value;t.payload=function(){return c(o)},t.callback=function(){pd(e,i,a)}}var y=i.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){pd(e,i,a),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var S=a.stack;this.componentDidCatch(a.value,{componentStack:S!==null?S:""})})}function Ny(t,e,i,a,c){if(i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=i.alternate,e!==null&&ol(e,i,c,!0),i=Ue.current,i!==null){switch(i.tag){case 31:case 13:return Pe===null?Ps():i.alternate===null&&Xt===0&&(Xt=3),i.flags&=-257,i.flags|=65536,i.lanes=c,a===zs?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([a]):e.add(a),Oc(t,a,c)),!1;case 22:return i.flags|=65536,a===zs?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([a]):i.add(a)),Oc(t,a,c)),!1}throw Error(s(435,i.tag))}return Oc(t,a,c),Ps(),!1}if(_t)return e=Ue.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=c,a!==br&&(t=Error(s(422),{cause:a}),ua(Je(t,i)))):(a!==br&&(e=Error(s(423),{cause:a}),ua(Je(e,i))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,a=Je(a,i),c=ic(t.stateNode,a,c),jr(t,c),Xt!==4&&(Xt=2)),!1;var o=Error(s(520),{cause:a});if(o=Je(o,i),Ma===null?Ma=[o]:Ma.push(o),Xt!==4&&(Xt=2),e===null)return!0;a=Je(a,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=c&-c,i.lanes|=t,t=ic(i.stateNode,a,t),jr(i,t),!1;case 1:if(e=i.type,o=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ei===null||!ei.has(o))))return i.flags|=65536,c&=-c,i.lanes|=c,c=_d(c),vd(c,t,i,a),jr(i,c),!1}i=i.return}while(i!==null);return!1}var lc=Error(s(461)),$t=!1;function ue(t,e,i,a){e.child=t===null?Th(e,null,i,a):ji(e,t.child,i,a)}function Sd(t,e,i,a,c){i=i.render;var o=e.ref;if("ref"in a){var y={};for(var S in a)S!=="ref"&&(y[S]=a[S])}else y=a;return Ci(e),a=qr(t,e,i,y,o,c),S=Yr(),t!==null&&!$t?(Gr(t,e,c),zn(t,e,c)):(_t&&S&&Sr(e),e.flags|=1,ue(t,e,a,c),e.child)}function xd(t,e,i,a,c){if(t===null){var o=i.type;return typeof o=="function"&&!pr(o)&&o.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=o,bd(t,e,o,a,c)):(t=xs(i.type,null,a,e,e.mode,c),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!hc(t,c)){var y=o.memoizedProps;if(i=i.compare,i=i!==null?i:la,i(y,a)&&t.ref===e.ref)return zn(t,e,c)}return e.flags|=1,t=xn(o,a),t.ref=e.ref,t.return=e,e.child=t}function bd(t,e,i,a,c){if(t!==null){var o=t.memoizedProps;if(la(o,a)&&t.ref===e.ref)if($t=!1,e.pendingProps=a=o,hc(t,c))(t.flags&131072)!==0&&($t=!0);else return e.lanes=t.lanes,zn(t,e,c)}return ac(t,e,i,a,c)}function Td(t,e,i,a){var c=a.children,o=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(o=o!==null?o.baseLanes|i:i,t!==null){for(a=e.child=t.child,c=0;a!==null;)c=c|a.lanes|a.childLanes,a=a.sibling;a=c&~o}else a=0,e.child=null;return Ed(t,e,o,i,a)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&As(e,o!==null?o.cachePool:null),o!==null?Mh(e,o):wr(),zh(e);else return a=e.lanes=536870912,Ed(t,e,o!==null?o.baseLanes|i:i,i,a)}else o!==null?(As(e,o.cachePool),Mh(e,o),Wn(),e.memoizedState=null):(t!==null&&As(e,null),wr(),Wn());return ue(t,e,c,i),e.child}function va(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ed(t,e,i,a,c){var o=Cr();return o=o===null?null:{parent:Jt._currentValue,pool:o},e.memoizedState={baseLanes:i,cachePool:o},t!==null&&As(e,null),wr(),zh(e),t!==null&&ol(t,e,a,!0),e.childLanes=c,null}function Gs(t,e){return e=Vs({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Ad(t,e,i){return ji(e,t.child,null,i),t=Gs(e,e.pendingProps),t.flags|=2,we(e),e.memoizedState=null,t}function Dy(t,e,i){var a=e.pendingProps,c=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(_t){if(a.mode==="hidden")return t=Gs(e,a),e.lanes=536870912,va(null,t);if(Lr(e),(t=wt)?(t=L0(t,We),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Vn!==null?{id:fn,overflow:on}:null,retryLane:536870912,hydrationErrors:null},i=rh(t),i.return=e,e.child=i,ae=e,wt=null)):t=null,t===null)throw Zn(e);return e.lanes=536870912,null}return Gs(e,a)}var o=t.memoizedState;if(o!==null){var y=o.dehydrated;if(Lr(e),c)if(e.flags&256)e.flags&=-257,e=Ad(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if($t||ol(t,e,i,!1),c=(i&t.childLanes)!==0,$t||c){if(a=Rt,a!==null&&(y=go(a,i),y!==0&&y!==o.retryLane))throw o.retryLane=y,Ai(t,y),Te(a,t,y),lc;Ps(),e=Ad(t,e,i)}else t=o.treeContext,wt=Ie(y.nextSibling),ae=e,_t=!0,Qn=null,We=!1,t!==null&&oh(e,t),e=Gs(e,a),e.flags|=4096;return e}return t=xn(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Xs(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function ac(t,e,i,a,c){return Ci(e),i=qr(t,e,i,a,void 0,c),a=Yr(),t!==null&&!$t?(Gr(t,e,c),zn(t,e,c)):(_t&&a&&Sr(e),e.flags|=1,ue(t,e,i,c),e.child)}function Md(t,e,i,a,c,o){return Ci(e),e.updateQueue=null,i=Ch(e,a,i,c),Oh(t),a=Yr(),t!==null&&!$t?(Gr(t,e,o),zn(t,e,o)):(_t&&a&&Sr(e),e.flags|=1,ue(t,e,i,o),e.child)}function zd(t,e,i,a,c){if(Ci(e),e.stateNode===null){var o=ul,y=i.contextType;typeof y=="object"&&y!==null&&(o=se(y)),o=new i(a,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=nc,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=a,o.state=e.memoizedState,o.refs={},Dr(e),y=i.contextType,o.context=typeof y=="object"&&y!==null?se(y):ul,o.state=e.memoizedState,y=i.getDerivedStateFromProps,typeof y=="function"&&(ec(e,i,y,a),o.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(y=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),y!==o.state&&nc.enqueueReplaceState(o,o.state,null),ma(e,a,o,c),da(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){o=e.stateNode;var S=e.memoizedProps,M=wi(i,S);o.props=M;var B=o.context,V=i.contextType;y=ul,typeof V=="object"&&V!==null&&(y=se(V));var k=i.getDerivedStateFromProps;V=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function",S=e.pendingProps!==S,V||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(S||B!==y)&&dd(e,o,a,y),Kn=!1;var L=e.memoizedState;o.state=L,ma(e,a,o,c),da(),B=e.memoizedState,S||L!==B||Kn?(typeof k=="function"&&(ec(e,i,k,a),B=e.memoizedState),(M=Kn||hd(e,i,M,a,L,B,y))?(V||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=B),o.props=a,o.state=B,o.context=y,a=M):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{o=e.stateNode,Rr(t,e),y=e.memoizedProps,V=wi(i,y),o.props=V,k=e.pendingProps,L=o.context,B=i.contextType,M=ul,typeof B=="object"&&B!==null&&(M=se(B)),S=i.getDerivedStateFromProps,(B=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(y!==k||L!==M)&&dd(e,o,a,M),Kn=!1,L=e.memoizedState,o.state=L,ma(e,a,o,c),da();var G=e.memoizedState;y!==k||L!==G||Kn||t!==null&&t.dependencies!==null&&Ts(t.dependencies)?(typeof S=="function"&&(ec(e,i,S,a),G=e.memoizedState),(V=Kn||hd(e,i,V,a,L,G,M)||t!==null&&t.dependencies!==null&&Ts(t.dependencies))?(B||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,G,M),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,G,M)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||y===t.memoizedProps&&L===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&L===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=G),o.props=a,o.state=G,o.context=M,a=V):(typeof o.componentDidUpdate!="function"||y===t.memoizedProps&&L===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&L===t.memoizedState||(e.flags|=1024),a=!1)}return o=a,Xs(t,e),a=(e.flags&128)!==0,o||a?(o=e.stateNode,i=a&&typeof i.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&a?(e.child=ji(e,t.child,null,c),e.child=ji(e,null,i,c)):ue(t,e,i,c),e.memoizedState=o.state,t=e.child):t=zn(t,e,c),t}function Od(t,e,i,a){return zi(),e.flags|=256,ue(t,e,i,a),e.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(t){return{baseLanes:t,cachePool:ph()}}function rc(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=Le),t}function Cd(t,e,i){var a=e.pendingProps,c=!1,o=(e.flags&128)!==0,y;if((y=o)||(y=t!==null&&t.memoizedState===null?!1:(Zt.current&2)!==0),y&&(c=!0,e.flags&=-129),y=(e.flags&32)!==0,e.flags&=-33,t===null){if(_t){if(c?$n(e):Wn(),(t=wt)?(t=L0(t,We),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Vn!==null?{id:fn,overflow:on}:null,retryLane:536870912,hydrationErrors:null},i=rh(t),i.return=e,e.child=i,ae=e,wt=null)):t=null,t===null)throw Zn(e);return Qc(t)?e.lanes=32:e.lanes=536870912,null}var S=a.children;return a=a.fallback,c?(Wn(),c=e.mode,S=Vs({mode:"hidden",children:S},c),a=Mi(a,c,i,null),S.return=e,a.return=e,S.sibling=a,e.child=S,a=e.child,a.memoizedState=uc(i),a.childLanes=rc(t,y,i),e.memoizedState=sc,va(null,a)):($n(e),cc(e,S))}var M=t.memoizedState;if(M!==null&&(S=M.dehydrated,S!==null)){if(o)e.flags&256?($n(e),e.flags&=-257,e=fc(t,e,i)):e.memoizedState!==null?(Wn(),e.child=t.child,e.flags|=128,e=null):(Wn(),S=a.fallback,c=e.mode,a=Vs({mode:"visible",children:a.children},c),S=Mi(S,c,i,null),S.flags|=2,a.return=e,S.return=e,a.sibling=S,e.child=a,ji(e,t.child,null,i),a=e.child,a.memoizedState=uc(i),a.childLanes=rc(t,y,i),e.memoizedState=sc,e=va(null,a));else if($n(e),Qc(S)){if(y=S.nextSibling&&S.nextSibling.dataset,y)var B=y.dgst;y=B,a=Error(s(419)),a.stack="",a.digest=y,ua({value:a,source:null,stack:null}),e=fc(t,e,i)}else if($t||ol(t,e,i,!1),y=(i&t.childLanes)!==0,$t||y){if(y=Rt,y!==null&&(a=go(y,i),a!==0&&a!==M.retryLane))throw M.retryLane=a,Ai(t,a),Te(y,t,a),lc;Vc(S)||Ps(),e=fc(t,e,i)}else Vc(S)?(e.flags|=192,e.child=t.child,e=null):(t=M.treeContext,wt=Ie(S.nextSibling),ae=e,_t=!0,Qn=null,We=!1,t!==null&&oh(e,t),e=cc(e,a.children),e.flags|=4096);return e}return c?(Wn(),S=a.fallback,c=e.mode,M=t.child,B=M.sibling,a=xn(M,{mode:"hidden",children:a.children}),a.subtreeFlags=M.subtreeFlags&65011712,B!==null?S=xn(B,S):(S=Mi(S,c,i,null),S.flags|=2),S.return=e,a.return=e,a.sibling=S,e.child=a,va(null,a),a=e.child,S=t.child.memoizedState,S===null?S=uc(i):(c=S.cachePool,c!==null?(M=Jt._currentValue,c=c.parent!==M?{parent:M,pool:M}:c):c=ph(),S={baseLanes:S.baseLanes|i,cachePool:c}),a.memoizedState=S,a.childLanes=rc(t,y,i),e.memoizedState=sc,va(t.child,a)):($n(e),i=t.child,t=i.sibling,i=xn(i,{mode:"visible",children:a.children}),i.return=e,i.sibling=null,t!==null&&(y=e.deletions,y===null?(e.deletions=[t],e.flags|=16):y.push(t)),e.child=i,e.memoizedState=null,i)}function cc(t,e){return e=Vs({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Vs(t,e){return t=je(22,t,null,e),t.lanes=0,t}function fc(t,e,i){return ji(e,t.child,null,i),t=cc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nd(t,e,i){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Ar(t.return,e,i)}function oc(t,e,i,a,c,o){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:c,treeForkCount:o}:(y.isBackwards=e,y.rendering=null,y.renderingStartTime=0,y.last=a,y.tail=i,y.tailMode=c,y.treeForkCount=o)}function Dd(t,e,i){var a=e.pendingProps,c=a.revealOrder,o=a.tail;a=a.children;var y=Zt.current,S=(y&2)!==0;if(S?(y=y&1|2,e.flags|=128):y&=1,F(Zt,y),ue(t,e,a,i),a=_t?sa:0,!S&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nd(t,i,e);else if(t.tag===19)Nd(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(i=e.child,c=null;i!==null;)t=i.alternate,t!==null&&Ds(t)===null&&(c=i),i=i.sibling;i=c,i===null?(c=e.child,e.child=null):(c=i.sibling,i.sibling=null),oc(e,!1,c,i,o,a);break;case"backwards":case"unstable_legacy-backwards":for(i=null,c=e.child,e.child=null;c!==null;){if(t=c.alternate,t!==null&&Ds(t)===null){e.child=c;break}t=c.sibling,c.sibling=i,i=c,c=t}oc(e,!0,i,null,o,a);break;case"together":oc(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function zn(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),ti|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(ol(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=xn(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=xn(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function hc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ts(t)))}function Ry(t,e,i){switch(e.tag){case 3:de(e,e.stateNode.containerInfo),kn(e,Jt,t.memoizedState.cache),zi();break;case 27:case 5:Zl(e);break;case 4:de(e,e.stateNode.containerInfo);break;case 10:kn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Lr(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?($n(e),e.flags|=128,null):(i&e.child.childLanes)!==0?Cd(t,e,i):($n(e),t=zn(t,e,i),t!==null?t.sibling:null);$n(e);break;case 19:var c=(t.flags&128)!==0;if(a=(i&e.childLanes)!==0,a||(ol(t,e,i,!1),a=(i&e.childLanes)!==0),c){if(a)return Dd(t,e,i);e.flags|=128}if(c=e.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),F(Zt,Zt.current),a)break;return null;case 22:return e.lanes=0,Td(t,e,i,e.pendingProps);case 24:kn(e,Jt,t.memoizedState.cache)}return zn(t,e,i)}function Rd(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)$t=!0;else{if(!hc(t,i)&&(e.flags&128)===0)return $t=!1,Ry(t,e,i);$t=(t.flags&131072)!==0}else $t=!1,_t&&(e.flags&1048576)!==0&&fh(e,sa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Di(e.elementType),e.type=t,typeof t=="function")pr(t)?(a=wi(t,a),e.tag=1,e=zd(null,e,t,a,i)):(e.tag=0,e=ac(null,e,t,a,i));else{if(t!=null){var c=t.$$typeof;if(c===j){e.tag=11,e=Sd(null,e,t,a,i);break t}else if(c===q){e.tag=14,e=xd(null,e,t,a,i);break t}}throw e=I(t)||t,Error(s(306,e,""))}}return e;case 0:return ac(t,e,e.type,e.pendingProps,i);case 1:return a=e.type,c=wi(a,e.pendingProps),zd(t,e,a,c,i);case 3:t:{if(de(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var o=e.memoizedState;c=o.element,Rr(t,e),ma(e,a,null,i);var y=e.memoizedState;if(a=y.cache,kn(e,Jt,a),a!==o.cache&&Mr(e,[Jt],i,!0),da(),a=y.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:y.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=Od(t,e,a,i);break t}else if(a!==c){c=Je(Error(s(424)),e),ua(c),e=Od(t,e,a,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(wt=Ie(t.firstChild),ae=e,_t=!0,Qn=null,We=!0,i=Th(e,null,a,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(zi(),a===c){e=zn(t,e,i);break t}ue(t,e,a,i)}e=e.child}return e;case 26:return Xs(t,e),t===null?(i=V0(e.type,null,e.pendingProps,null))?e.memoizedState=i:_t||(i=e.type,t=e.pendingProps,a=au(dt.current).createElement(i),a[le]=e,a[pe]=t,re(a,i,t),ee(a),e.stateNode=a):e.memoizedState=V0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Zl(e),t===null&&_t&&(a=e.stateNode=Y0(e.type,e.pendingProps,dt.current),ae=e,We=!0,c=wt,ai(e.type)?(Zc=c,wt=Ie(a.firstChild)):wt=c),ue(t,e,e.pendingProps.children,i),Xs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&_t&&((c=a=wt)&&(a=rp(a,e.type,e.pendingProps,We),a!==null?(e.stateNode=a,ae=e,wt=Ie(a.firstChild),We=!1,c=!0):c=!1),c||Zn(e)),Zl(e),c=e.type,o=e.pendingProps,y=t!==null?t.memoizedProps:null,a=o.children,Yc(c,o)?a=null:y!==null&&Yc(c,y)&&(e.flags|=32),e.memoizedState!==null&&(c=qr(t,e,Ty,null,null,i),Ua._currentValue=c),Xs(t,e),ue(t,e,a,i),e.child;case 6:return t===null&&_t&&((t=i=wt)&&(i=cp(i,e.pendingProps,We),i!==null?(e.stateNode=i,ae=e,wt=null,t=!0):t=!1),t||Zn(e)),null;case 13:return Cd(t,e,i);case 4:return de(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ji(e,null,a,i):ue(t,e,a,i),e.child;case 11:return Sd(t,e,e.type,e.pendingProps,i);case 7:return ue(t,e,e.pendingProps,i),e.child;case 8:return ue(t,e,e.pendingProps.children,i),e.child;case 12:return ue(t,e,e.pendingProps.children,i),e.child;case 10:return a=e.pendingProps,kn(e,e.type,a.value),ue(t,e,a.children,i),e.child;case 9:return c=e.type._context,a=e.pendingProps.children,Ci(e),c=se(c),a=a(c),e.flags|=1,ue(t,e,a,i),e.child;case 14:return xd(t,e,e.type,e.pendingProps,i);case 15:return bd(t,e,e.type,e.pendingProps,i);case 19:return Dd(t,e,i);case 31:return Dy(t,e,i);case 22:return Td(t,e,i,e.pendingProps);case 24:return Ci(e),a=se(Jt),t===null?(c=Cr(),c===null&&(c=Rt,o=zr(),c.pooledCache=o,o.refCount++,o!==null&&(c.pooledCacheLanes|=i),c=o),e.memoizedState={parent:a,cache:c},Dr(e),kn(e,Jt,c)):((t.lanes&i)!==0&&(Rr(t,e),ma(e,null,null,i),da()),c=t.memoizedState,o=e.memoizedState,c.parent!==a?(c={parent:a,cache:a},e.memoizedState=c,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=c),kn(e,Jt,a)):(a=o.cache,kn(e,Jt,a),a!==c.cache&&Mr(e,[Jt],i,!0))),ue(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function On(t){t.flags|=4}function dc(t,e,i,a,c){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(a0())t.flags|=8192;else throw Ri=zs,Nr}else t.flags&=-16777217}function jd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!J0(e))if(a0())t.flags|=8192;else throw Ri=zs,Nr}function Qs(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?oo():536870912,t.lanes|=e,Tl|=e)}function Sa(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,a=0;if(e)for(var c=t.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags&65011712,a|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=i,e}function jy(t,e,i){var a=e.pendingProps;switch(xr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return Bt(e),null;case 3:return i=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),En(Jt),Qt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fl(e)?On(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Tr())),Bt(e),null;case 26:var c=e.type,o=e.memoizedState;return t===null?(On(e),o!==null?(Bt(e),jd(e,o)):(Bt(e),dc(e,c,null,a,i))):o?o!==t.memoizedState?(On(e),Bt(e),jd(e,o)):(Bt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&On(e),Bt(e),dc(e,c,t,a,i)),null;case 27:if(es(e),i=dt.current,c=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&On(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}t=$.current,fl(e)?hh(e):(t=Y0(c,a,i),e.stateNode=t,On(e))}return Bt(e),null;case 5:if(es(e),c=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&On(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}if(o=$.current,fl(e))hh(e);else{var y=au(dt.current);switch(o){case 1:o=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:o=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":o=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":o=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":o=y.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?y.createElement("select",{is:a.is}):y.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?y.createElement(c,{is:a.is}):y.createElement(c)}}o[le]=e,o[pe]=a;t:for(y=e.child;y!==null;){if(y.tag===5||y.tag===6)o.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break t;for(;y.sibling===null;){if(y.return===null||y.return===e)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}e.stateNode=o;t:switch(re(o,c,a),c){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&On(e)}}return Bt(e),dc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&On(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=dt.current,fl(e)){if(t=e.stateNode,i=e.memoizedProps,a=null,c=ae,c!==null)switch(c.tag){case 27:case 5:a=c.memoizedProps}t[le]=e,t=!!(t.nodeValue===i||a!==null&&a.suppressHydrationWarning===!0||C0(t.nodeValue,i)),t||Zn(e,!0)}else t=au(t).createTextNode(a),t[le]=e,e.stateNode=t}return Bt(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(a=fl(e),i!==null){if(t===null){if(!a)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[le]=e}else zi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),t=!1}else i=Tr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(we(e),e):(we(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Bt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=fl(e),a!==null&&a.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=e.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[le]=e}else zi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),c=!1}else c=Tr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return e.flags&256?(we(e),e):(we(e),null)}return we(e),(e.flags&128)!==0?(e.lanes=i,e):(i=a!==null,t=t!==null&&t.memoizedState!==null,i&&(a=e.child,c=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(c=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==c&&(a.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),Qs(e,e.updateQueue),Bt(e),null);case 4:return Qt(),t===null&&wc(e.stateNode.containerInfo),Bt(e),null;case 10:return En(e.type),Bt(e),null;case 19:if(Q(Zt),a=e.memoizedState,a===null)return Bt(e),null;if(c=(e.flags&128)!==0,o=a.rendering,o===null)if(c)Sa(a,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ds(t),o!==null){for(e.flags|=128,Sa(a,!1),t=o.updateQueue,e.updateQueue=t,Qs(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)uh(i,t),i=i.sibling;return F(Zt,Zt.current&1|2),_t&&bn(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Ce()>Fs&&(e.flags|=128,c=!0,Sa(a,!1),e.lanes=4194304)}else{if(!c)if(t=Ds(o),t!==null){if(e.flags|=128,c=!0,t=t.updateQueue,e.updateQueue=t,Qs(e,t),Sa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!_t)return Bt(e),null}else 2*Ce()-a.renderingStartTime>Fs&&i!==536870912&&(e.flags|=128,c=!0,Sa(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(t=a.last,t!==null?t.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ce(),t.sibling=null,i=Zt.current,F(Zt,c?i&1|2:i&1),_t&&bn(e,a.treeForkCount),t):(Bt(e),null);case 22:case 23:return we(e),Br(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(i&536870912)!==0&&(e.flags&128)===0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),i=e.updateQueue,i!==null&&Qs(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==i&&(e.flags|=2048),t!==null&&Q(Ni),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),En(Jt),Bt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Uy(t,e){switch(xr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return En(Jt),Qt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return es(e),null;case 31:if(e.memoizedState!==null){if(we(e),e.alternate===null)throw Error(s(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(we(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(Zt),null;case 4:return Qt(),null;case 10:return En(e.type),null;case 22:case 23:return we(e),Br(),t!==null&&Q(Ni),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return En(Jt),null;case 25:return null;default:return null}}function Ud(t,e){switch(xr(e),e.tag){case 3:En(Jt),Qt();break;case 26:case 27:case 5:es(e);break;case 4:Qt();break;case 31:e.memoizedState!==null&&we(e);break;case 13:we(e);break;case 19:Q(Zt);break;case 10:En(e.type);break;case 22:case 23:we(e),Br(),t!==null&&Q(Ni);break;case 24:En(Jt)}}function xa(t,e){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var c=a.next;i=c;do{if((i.tag&t)===t){a=void 0;var o=i.create,y=i.inst;a=o(),y.destroy=a}i=i.next}while(i!==c)}}catch(S){zt(e,e.return,S)}}function Pn(t,e,i){try{var a=e.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var o=c.next;a=o;do{if((a.tag&t)===t){var y=a.inst,S=y.destroy;if(S!==void 0){y.destroy=void 0,c=e;var M=i,B=S;try{B()}catch(V){zt(c,M,V)}}}a=a.next}while(a!==o)}}catch(V){zt(e,e.return,V)}}function wd(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Ah(e,i)}catch(a){zt(t,t.return,a)}}}function Bd(t,e,i){i.props=wi(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(a){zt(t,e,a)}}function ba(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof i=="function"?t.refCleanup=i(a):i.current=a}}catch(c){zt(t,e,c)}}function hn(t,e){var i=t.ref,a=t.refCleanup;if(i!==null)if(typeof a=="function")try{a()}catch(c){zt(t,e,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){zt(t,e,c)}else i.current=null}function Ld(t){var e=t.type,i=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&a.focus();break t;case"img":i.src?a.src=i.src:i.srcSet&&(a.srcset=i.srcSet)}}catch(c){zt(t,t.return,c)}}function mc(t,e,i){try{var a=t.stateNode;np(a,t.type,i,e),a[pe]=e}catch(c){zt(t,t.return,c)}}function Hd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ai(t.type)||t.tag===4}function gc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Hd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ai(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yc(t,e,i){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=vn));else if(a!==4&&(a===27&&ai(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(yc(t,e,i),t=t.sibling;t!==null;)yc(t,e,i),t=t.sibling}function Zs(t,e,i){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(a!==4&&(a===27&&ai(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(Zs(t,e,i),t=t.sibling;t!==null;)Zs(t,e,i),t=t.sibling}function qd(t){var e=t.stateNode,i=t.memoizedProps;try{for(var a=t.type,c=e.attributes;c.length;)e.removeAttributeNode(c[0]);re(e,a,i),e[le]=t,e[pe]=i}catch(o){zt(t,t.return,o)}}var Cn=!1,Wt=!1,pc=!1,Yd=typeof WeakSet=="function"?WeakSet:Set,ne=null;function wy(t,e){if(t=t.containerInfo,Hc=hu,t=Po(t),fr(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var c=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break t}var y=0,S=-1,M=-1,B=0,V=0,k=t,L=null;e:for(;;){for(var G;k!==i||c!==0&&k.nodeType!==3||(S=y+c),k!==o||a!==0&&k.nodeType!==3||(M=y+a),k.nodeType===3&&(y+=k.nodeValue.length),(G=k.firstChild)!==null;)L=k,k=G;for(;;){if(k===t)break e;if(L===i&&++B===c&&(S=y),L===o&&++V===a&&(M=y),(G=k.nextSibling)!==null)break;k=L,L=k.parentNode}k=G}i=S===-1||M===-1?null:{start:S,end:M}}else i=null}i=i||{start:0,end:0}}else i=null;for(qc={focusedElem:t,selectionRange:i},hu=!1,ne=e;ne!==null;)if(e=ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ne=t;else for(;ne!==null;){switch(e=ne,o=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)c=t[i],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,i=e,c=o.memoizedProps,o=o.memoizedState,a=i.stateNode;try{var tt=wi(i.type,c);t=a.getSnapshotBeforeUpdate(tt,o),a.__reactInternalSnapshotBeforeUpdate=t}catch(st){zt(i,i.return,st)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)Xc(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Xc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,ne=t;break}ne=e.return}}function Gd(t,e,i){var a=i.flags;switch(i.tag){case 0:case 11:case 15:Dn(t,i),a&4&&xa(5,i);break;case 1:if(Dn(t,i),a&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(y){zt(i,i.return,y)}else{var c=wi(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(c,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(i,i.return,y)}}a&64&&wd(i),a&512&&ba(i,i.return);break;case 3:if(Dn(t,i),a&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Ah(t,e)}catch(y){zt(i,i.return,y)}}break;case 27:e===null&&a&4&&qd(i);case 26:case 5:Dn(t,i),e===null&&a&4&&Ld(i),a&512&&ba(i,i.return);break;case 12:Dn(t,i);break;case 31:Dn(t,i),a&4&&Qd(t,i);break;case 13:Dn(t,i),a&4&&Zd(t,i),a&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Qy.bind(null,i),fp(t,i))));break;case 22:if(a=i.memoizedState!==null||Cn,!a){e=e!==null&&e.memoizedState!==null||Wt,c=Cn;var o=Wt;Cn=a,(Wt=e)&&!o?Rn(t,i,(i.subtreeFlags&8772)!==0):Dn(t,i),Cn=c,Wt=o}break;case 30:break;default:Dn(t,i)}}function Xd(t){var e=t.alternate;e!==null&&(t.alternate=null,Xd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ku(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Lt=null,ve=!1;function Nn(t,e,i){for(i=i.child;i!==null;)Vd(t,e,i),i=i.sibling}function Vd(t,e,i){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(kl,i)}catch{}switch(i.tag){case 26:Wt||hn(i,e),Nn(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Wt||hn(i,e);var a=Lt,c=ve;ai(i.type)&&(Lt=i.stateNode,ve=!1),Nn(t,e,i),Da(i.stateNode),Lt=a,ve=c;break;case 5:Wt||hn(i,e);case 6:if(a=Lt,c=ve,Lt=null,Nn(t,e,i),Lt=a,ve=c,Lt!==null)if(ve)try{(Lt.nodeType===9?Lt.body:Lt.nodeName==="HTML"?Lt.ownerDocument.body:Lt).removeChild(i.stateNode)}catch(o){zt(i,e,o)}else try{Lt.removeChild(i.stateNode)}catch(o){zt(i,e,o)}break;case 18:Lt!==null&&(ve?(t=Lt,w0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Dl(t)):w0(Lt,i.stateNode));break;case 4:a=Lt,c=ve,Lt=i.stateNode.containerInfo,ve=!0,Nn(t,e,i),Lt=a,ve=c;break;case 0:case 11:case 14:case 15:Pn(2,i,e),Wt||Pn(4,i,e),Nn(t,e,i);break;case 1:Wt||(hn(i,e),a=i.stateNode,typeof a.componentWillUnmount=="function"&&Bd(i,e,a)),Nn(t,e,i);break;case 21:Nn(t,e,i);break;case 22:Wt=(a=Wt)||i.memoizedState!==null,Nn(t,e,i),Wt=a;break;default:Nn(t,e,i)}}function Qd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Dl(t)}catch(i){zt(e,e.return,i)}}}function Zd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Dl(t)}catch(i){zt(e,e.return,i)}}function By(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Yd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Yd),e;default:throw Error(s(435,t.tag))}}function ks(t,e){var i=By(t);e.forEach(function(a){if(!i.has(a)){i.add(a);var c=Zy.bind(null,t,a);a.then(c,c)}})}function Se(t,e){var i=e.deletions;if(i!==null)for(var a=0;a<i.length;a++){var c=i[a],o=t,y=e,S=y;t:for(;S!==null;){switch(S.tag){case 27:if(ai(S.type)){Lt=S.stateNode,ve=!1;break t}break;case 5:Lt=S.stateNode,ve=!1;break t;case 3:case 4:Lt=S.stateNode.containerInfo,ve=!0;break t}S=S.return}if(Lt===null)throw Error(s(160));Vd(o,y,c),Lt=null,ve=!1,o=c.alternate,o!==null&&(o.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)kd(e,t),e=e.sibling}var un=null;function kd(t,e){var i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Se(e,t),xe(t),a&4&&(Pn(3,t,t.return),xa(3,t),Pn(5,t,t.return));break;case 1:Se(e,t),xe(t),a&512&&(Wt||i===null||hn(i,i.return)),a&64&&Cn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?a:i.concat(a))));break;case 26:var c=un;if(Se(e,t),xe(t),a&512&&(Wt||i===null||hn(i,i.return)),a&4){var o=i!==null?i.memoizedState:null;if(a=t.memoizedState,i===null)if(a===null)if(t.stateNode===null){t:{a=t.type,i=t.memoizedProps,c=c.ownerDocument||c;e:switch(a){case"title":o=c.getElementsByTagName("title")[0],(!o||o[Fl]||o[le]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=c.createElement(a),c.head.insertBefore(o,c.querySelector("head > title"))),re(o,a,i),o[le]=t,ee(o),a=o;break t;case"link":var y=k0("link","href",c).get(a+(i.href||""));if(y){for(var S=0;S<y.length;S++)if(o=y[S],o.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&o.getAttribute("rel")===(i.rel==null?null:i.rel)&&o.getAttribute("title")===(i.title==null?null:i.title)&&o.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){y.splice(S,1);break e}}o=c.createElement(a),re(o,a,i),c.head.appendChild(o);break;case"meta":if(y=k0("meta","content",c).get(a+(i.content||""))){for(S=0;S<y.length;S++)if(o=y[S],o.getAttribute("content")===(i.content==null?null:""+i.content)&&o.getAttribute("name")===(i.name==null?null:i.name)&&o.getAttribute("property")===(i.property==null?null:i.property)&&o.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&o.getAttribute("charset")===(i.charSet==null?null:i.charSet)){y.splice(S,1);break e}}o=c.createElement(a),re(o,a,i),c.head.appendChild(o);break;default:throw Error(s(468,a))}o[le]=t,ee(o),a=o}t.stateNode=a}else K0(c,t.type,t.stateNode);else t.stateNode=Z0(c,a,t.memoizedProps);else o!==a?(o===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):o.count--,a===null?K0(c,t.type,t.stateNode):Z0(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&mc(t,t.memoizedProps,i.memoizedProps)}break;case 27:Se(e,t),xe(t),a&512&&(Wt||i===null||hn(i,i.return)),i!==null&&a&4&&mc(t,t.memoizedProps,i.memoizedProps);break;case 5:if(Se(e,t),xe(t),a&512&&(Wt||i===null||hn(i,i.return)),t.flags&32){c=t.stateNode;try{tl(c,"")}catch(tt){zt(t,t.return,tt)}}a&4&&t.stateNode!=null&&(c=t.memoizedProps,mc(t,c,i!==null?i.memoizedProps:c)),a&1024&&(pc=!0);break;case 6:if(Se(e,t),xe(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,i=t.stateNode;try{i.nodeValue=a}catch(tt){zt(t,t.return,tt)}}break;case 3:if(ru=null,c=un,un=su(e.containerInfo),Se(e,t),un=c,xe(t),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Dl(e.containerInfo)}catch(tt){zt(t,t.return,tt)}pc&&(pc=!1,Kd(t));break;case 4:a=un,un=su(t.stateNode.containerInfo),Se(e,t),xe(t),un=a;break;case 12:Se(e,t),xe(t);break;case 31:Se(e,t),xe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ks(t,a)));break;case 13:Se(e,t),xe(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Js=Ce()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ks(t,a)));break;case 22:c=t.memoizedState!==null;var M=i!==null&&i.memoizedState!==null,B=Cn,V=Wt;if(Cn=B||c,Wt=V||M,Se(e,t),Wt=V,Cn=B,xe(t),a&8192)t:for(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,c&&(i===null||M||Cn||Wt||Bi(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){M=i=e;try{if(o=M.stateNode,c)y=o.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{S=M.stateNode;var k=M.memoizedProps.style,L=k!=null&&k.hasOwnProperty("display")?k.display:null;S.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(tt){zt(M,M.return,tt)}}}else if(e.tag===6){if(i===null){M=e;try{M.stateNode.nodeValue=c?"":M.memoizedProps}catch(tt){zt(M,M.return,tt)}}}else if(e.tag===18){if(i===null){M=e;try{var G=M.stateNode;c?B0(G,!0):B0(M.stateNode,!1)}catch(tt){zt(M,M.return,tt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(i=a.retryQueue,i!==null&&(a.retryQueue=null,ks(t,i))));break;case 19:Se(e,t),xe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ks(t,a)));break;case 30:break;case 21:break;default:Se(e,t),xe(t)}}function xe(t){var e=t.flags;if(e&2){try{for(var i,a=t.return;a!==null;){if(Hd(a)){i=a;break}a=a.return}if(i==null)throw Error(s(160));switch(i.tag){case 27:var c=i.stateNode,o=gc(t);Zs(t,o,c);break;case 5:var y=i.stateNode;i.flags&32&&(tl(y,""),i.flags&=-33);var S=gc(t);Zs(t,S,y);break;case 3:case 4:var M=i.stateNode.containerInfo,B=gc(t);yc(t,B,M);break;default:throw Error(s(161))}}catch(V){zt(t,t.return,V)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Kd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Dn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Gd(t,e.alternate,e),e=e.sibling}function Bi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pn(4,e,e.return),Bi(e);break;case 1:hn(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&Bd(e,e.return,i),Bi(e);break;case 27:Da(e.stateNode);case 26:case 5:hn(e,e.return),Bi(e);break;case 22:e.memoizedState===null&&Bi(e);break;case 30:Bi(e);break;default:Bi(e)}t=t.sibling}}function Rn(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,c=t,o=e,y=o.flags;switch(o.tag){case 0:case 11:case 15:Rn(c,o,i),xa(4,o);break;case 1:if(Rn(c,o,i),a=o,c=a.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(B){zt(a,a.return,B)}if(a=o,c=a.updateQueue,c!==null){var S=a.stateNode;try{var M=c.shared.hiddenCallbacks;if(M!==null)for(c.shared.hiddenCallbacks=null,c=0;c<M.length;c++)Eh(M[c],S)}catch(B){zt(a,a.return,B)}}i&&y&64&&wd(o),ba(o,o.return);break;case 27:qd(o);case 26:case 5:Rn(c,o,i),i&&a===null&&y&4&&Ld(o),ba(o,o.return);break;case 12:Rn(c,o,i);break;case 31:Rn(c,o,i),i&&y&4&&Qd(c,o);break;case 13:Rn(c,o,i),i&&y&4&&Zd(c,o);break;case 22:o.memoizedState===null&&Rn(c,o,i),ba(o,o.return);break;case 30:break;default:Rn(c,o,i)}e=e.sibling}}function _c(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&ra(i))}function vc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ra(t))}function rn(t,e,i,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jd(t,e,i,a),e=e.sibling}function Jd(t,e,i,a){var c=e.flags;switch(e.tag){case 0:case 11:case 15:rn(t,e,i,a),c&2048&&xa(9,e);break;case 1:rn(t,e,i,a);break;case 3:rn(t,e,i,a),c&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ra(t)));break;case 12:if(c&2048){rn(t,e,i,a),t=e.stateNode;try{var o=e.memoizedProps,y=o.id,S=o.onPostCommit;typeof S=="function"&&S(y,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(M){zt(e,e.return,M)}}else rn(t,e,i,a);break;case 31:rn(t,e,i,a);break;case 13:rn(t,e,i,a);break;case 23:break;case 22:o=e.stateNode,y=e.alternate,e.memoizedState!==null?o._visibility&2?rn(t,e,i,a):Ta(t,e):o._visibility&2?rn(t,e,i,a):(o._visibility|=2,Sl(t,e,i,a,(e.subtreeFlags&10256)!==0||!1)),c&2048&&_c(y,e);break;case 24:rn(t,e,i,a),c&2048&&vc(e.alternate,e);break;default:rn(t,e,i,a)}}function Sl(t,e,i,a,c){for(c=c&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var o=t,y=e,S=i,M=a,B=y.flags;switch(y.tag){case 0:case 11:case 15:Sl(o,y,S,M,c),xa(8,y);break;case 23:break;case 22:var V=y.stateNode;y.memoizedState!==null?V._visibility&2?Sl(o,y,S,M,c):Ta(o,y):(V._visibility|=2,Sl(o,y,S,M,c)),c&&B&2048&&_c(y.alternate,y);break;case 24:Sl(o,y,S,M,c),c&&B&2048&&vc(y.alternate,y);break;default:Sl(o,y,S,M,c)}e=e.sibling}}function Ta(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,a=e,c=a.flags;switch(a.tag){case 22:Ta(i,a),c&2048&&_c(a.alternate,a);break;case 24:Ta(i,a),c&2048&&vc(a.alternate,a);break;default:Ta(i,a)}e=e.sibling}}var Ea=8192;function xl(t,e,i){if(t.subtreeFlags&Ea)for(t=t.child;t!==null;)Fd(t,e,i),t=t.sibling}function Fd(t,e,i){switch(t.tag){case 26:xl(t,e,i),t.flags&Ea&&t.memoizedState!==null&&bp(i,un,t.memoizedState,t.memoizedProps);break;case 5:xl(t,e,i);break;case 3:case 4:var a=un;un=su(t.stateNode.containerInfo),xl(t,e,i),un=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Ea,Ea=16777216,xl(t,e,i),Ea=a):xl(t,e,i));break;default:xl(t,e,i)}}function $d(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Aa(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var a=e[i];ne=a,Pd(a,t)}$d(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wd(t),t=t.sibling}function Wd(t){switch(t.tag){case 0:case 11:case 15:Aa(t),t.flags&2048&&Pn(9,t,t.return);break;case 3:Aa(t);break;case 12:Aa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ks(t)):Aa(t);break;default:Aa(t)}}function Ks(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var a=e[i];ne=a,Pd(a,t)}$d(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pn(8,e,e.return),Ks(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,Ks(e));break;default:Ks(e)}t=t.sibling}}function Pd(t,e){for(;ne!==null;){var i=ne;switch(i.tag){case 0:case 11:case 15:Pn(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var a=i.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ra(i.memoizedState.cache)}if(a=i.child,a!==null)a.return=i,ne=a;else t:for(i=t;ne!==null;){a=ne;var c=a.sibling,o=a.return;if(Xd(a),a===i){ne=null;break t}if(c!==null){c.return=o,ne=c;break t}ne=o}}}var Ly={getCacheForType:function(t){var e=se(Jt),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return se(Jt).controller.signal}},Hy=typeof WeakMap=="function"?WeakMap:Map,Et=0,Rt=null,mt=null,yt=0,Mt=0,Be=null,In=!1,bl=!1,Sc=!1,jn=0,Xt=0,ti=0,Li=0,xc=0,Le=0,Tl=0,Ma=null,be=null,bc=!1,Js=0,Id=0,Fs=1/0,$s=null,ei=null,te=0,ni=null,El=null,Un=0,Tc=0,Ec=null,t0=null,za=0,Ac=null;function He(){return(Et&2)!==0&&yt!==0?yt&-yt:Y.T!==null?Dc():yo()}function e0(){if(Le===0)if((yt&536870912)===0||_t){var t=ls;ls<<=1,(ls&3932160)===0&&(ls=262144),Le=t}else Le=536870912;return t=Ue.current,t!==null&&(t.flags|=32),Le}function Te(t,e,i){(t===Rt&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(Al(t,0),ii(t,yt,Le,!1)),Jl(t,i),((Et&2)===0||t!==Rt)&&(t===Rt&&((Et&2)===0&&(Li|=i),Xt===4&&ii(t,yt,Le,!1)),dn(t))}function n0(t,e,i){if((Et&6)!==0)throw Error(s(327));var a=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Kl(t,e),c=a?Gy(t,e):zc(t,e,!0),o=a;do{if(c===0){bl&&!a&&ii(t,e,0,!1);break}else{if(i=t.current.alternate,o&&!qy(i)){c=zc(t,e,!1),o=!1;continue}if(c===2){if(o=e,t.errorRecoveryDisabledLanes&o)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){e=y;t:{var S=t;c=Ma;var M=S.current.memoizedState.isDehydrated;if(M&&(Al(S,y).flags|=256),y=zc(S,y,!1),y!==2){if(Sc&&!M){S.errorRecoveryDisabledLanes|=o,Li|=o,c=4;break t}o=be,be=c,o!==null&&(be===null?be=o:be.push.apply(be,o))}c=y}if(o=!1,c!==2)continue}}if(c===1){Al(t,0),ii(t,e,0,!0);break}t:{switch(a=t,o=c,o){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:ii(a,e,Le,!In);break t;case 2:be=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(c=Js+300-Ce(),10<c)){if(ii(a,e,Le,!In),ss(a,0,!0)!==0)break t;Un=e,a.timeoutHandle=j0(i0.bind(null,a,i,be,$s,bc,e,Le,Li,Tl,In,o,"Throttled",-0,0),c);break t}i0(a,i,be,$s,bc,e,Le,Li,Tl,In,o,null,-0,0)}}break}while(!0);dn(t)}function i0(t,e,i,a,c,o,y,S,M,B,V,k,L,G){if(t.timeoutHandle=-1,k=e.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vn},Fd(e,o,k);var tt=(o&62914560)===o?Js-Ce():(o&4194048)===o?Id-Ce():0;if(tt=Tp(k,tt),tt!==null){Un=o,t.cancelPendingCommit=tt(o0.bind(null,t,e,o,i,a,c,y,S,M,V,k,null,L,G)),ii(t,o,y,!B);return}}o0(t,e,o,i,a,c,y,S,M)}function qy(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var a=0;a<i.length;a++){var c=i[a],o=c.getSnapshot;c=c.value;try{if(!Re(o(),c))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ii(t,e,i,a){e&=~xc,e&=~Li,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var c=e;0<c;){var o=31-De(c),y=1<<o;a[o]=-1,c&=~y}i!==0&&ho(t,i,e)}function Ws(){return(Et&6)===0?(Oa(0),!1):!0}function Mc(){if(mt!==null){if(Mt===0)var t=mt.return;else t=mt,Tn=Oi=null,Xr(t),gl=null,fa=0,t=mt;for(;t!==null;)Ud(t.alternate,t),t=t.return;mt=null}}function Al(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,ap(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Un=0,Mc(),Rt=t,mt=i=xn(t.current,null),yt=e,Mt=0,Be=null,In=!1,bl=Kl(t,e),Sc=!1,Tl=Le=xc=Li=ti=Xt=0,be=Ma=null,bc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var c=31-De(a),o=1<<c;e|=t[c],a&=~o}return jn=e,_s(),i}function l0(t,e){ft=null,Y.H=_a,e===ml||e===Ms?(e=Sh(),Mt=3):e===Nr?(e=Sh(),Mt=4):Mt=e===lc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Be=e,mt===null&&(Xt=1,Ys(t,Je(e,t.current)))}function a0(){var t=Ue.current;return t===null?!0:(yt&4194048)===yt?Pe===null:(yt&62914560)===yt||(yt&536870912)!==0?t===Pe:!1}function s0(){var t=Y.H;return Y.H=_a,t===null?_a:t}function u0(){var t=Y.A;return Y.A=Ly,t}function Ps(){Xt=4,In||(yt&4194048)!==yt&&Ue.current!==null||(bl=!0),(ti&134217727)===0&&(Li&134217727)===0||Rt===null||ii(Rt,yt,Le,!1)}function zc(t,e,i){var a=Et;Et|=2;var c=s0(),o=u0();(Rt!==t||yt!==e)&&($s=null,Al(t,e)),e=!1;var y=Xt;t:do try{if(Mt!==0&&mt!==null){var S=mt,M=Be;switch(Mt){case 8:Mc(),y=6;break t;case 3:case 2:case 9:case 6:Ue.current===null&&(e=!0);var B=Mt;if(Mt=0,Be=null,Ml(t,S,M,B),i&&bl){y=0;break t}break;default:B=Mt,Mt=0,Be=null,Ml(t,S,M,B)}}Yy(),y=Xt;break}catch(V){l0(t,V)}while(!0);return e&&t.shellSuspendCounter++,Tn=Oi=null,Et=a,Y.H=c,Y.A=o,mt===null&&(Rt=null,yt=0,_s()),y}function Yy(){for(;mt!==null;)r0(mt)}function Gy(t,e){var i=Et;Et|=2;var a=s0(),c=u0();Rt!==t||yt!==e?($s=null,Fs=Ce()+500,Al(t,e)):bl=Kl(t,e);t:do try{if(Mt!==0&&mt!==null){e=mt;var o=Be;e:switch(Mt){case 1:Mt=0,Be=null,Ml(t,e,o,1);break;case 2:case 9:if(_h(o)){Mt=0,Be=null,c0(e);break}e=function(){Mt!==2&&Mt!==9||Rt!==t||(Mt=7),dn(t)},o.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:_h(o)?(Mt=0,Be=null,c0(e)):(Mt=0,Be=null,Ml(t,e,o,7));break;case 5:var y=null;switch(mt.tag){case 26:y=mt.memoizedState;case 5:case 27:var S=mt;if(y?J0(y):S.stateNode.complete){Mt=0,Be=null;var M=S.sibling;if(M!==null)mt=M;else{var B=S.return;B!==null?(mt=B,Is(B)):mt=null}break e}}Mt=0,Be=null,Ml(t,e,o,5);break;case 6:Mt=0,Be=null,Ml(t,e,o,6);break;case 8:Mc(),Xt=6;break t;default:throw Error(s(462))}}Xy();break}catch(V){l0(t,V)}while(!0);return Tn=Oi=null,Y.H=a,Y.A=c,Et=i,mt!==null?0:(Rt=null,yt=0,_s(),Xt)}function Xy(){for(;mt!==null&&!og();)r0(mt)}function r0(t){var e=Rd(t.alternate,t,jn);t.memoizedProps=t.pendingProps,e===null?Is(t):mt=e}function c0(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Md(i,e,e.pendingProps,e.type,void 0,yt);break;case 11:e=Md(i,e,e.pendingProps,e.type.render,e.ref,yt);break;case 5:Xr(e);default:Ud(i,e),e=mt=uh(e,jn),e=Rd(i,e,jn)}t.memoizedProps=t.pendingProps,e===null?Is(t):mt=e}function Ml(t,e,i,a){Tn=Oi=null,Xr(e),gl=null,fa=0;var c=e.return;try{if(Ny(t,c,e,i,yt)){Xt=1,Ys(t,Je(i,t.current)),mt=null;return}}catch(o){if(c!==null)throw mt=c,o;Xt=1,Ys(t,Je(i,t.current)),mt=null;return}e.flags&32768?(_t||a===1?t=!0:bl||(yt&536870912)!==0?t=!1:(In=t=!0,(a===2||a===9||a===3||a===6)&&(a=Ue.current,a!==null&&a.tag===13&&(a.flags|=16384))),f0(e,t)):Is(e)}function Is(t){var e=t;do{if((e.flags&32768)!==0){f0(e,In);return}t=e.return;var i=jy(e.alternate,e,jn);if(i!==null){mt=i;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);Xt===0&&(Xt=5)}function f0(t,e){do{var i=Uy(t.alternate,t);if(i!==null){i.flags&=32767,mt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){mt=t;return}mt=t=i}while(t!==null);Xt=6,mt=null}function o0(t,e,i,a,c,o,y,S,M){t.cancelPendingCommit=null;do tu();while(te!==0);if((Et&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(o=e.lanes|e.childLanes,o|=gr,xg(t,i,o,y,S,M),t===Rt&&(mt=Rt=null,yt=0),El=e,ni=t,Un=i,Tc=o,Ec=c,t0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ky(ns,function(){return y0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null,c=J.p,J.p=2,y=Et,Et|=4;try{wy(t,e,i)}finally{Et=y,J.p=c,Y.T=a}}te=1,h0(),d0(),m0()}}function h0(){if(te===1){te=0;var t=ni,e=El,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=Y.T,Y.T=null;var a=J.p;J.p=2;var c=Et;Et|=4;try{kd(e,t);var o=qc,y=Po(t.containerInfo),S=o.focusedElem,M=o.selectionRange;if(y!==S&&S&&S.ownerDocument&&Wo(S.ownerDocument.documentElement,S)){if(M!==null&&fr(S)){var B=M.start,V=M.end;if(V===void 0&&(V=B),"selectionStart"in S)S.selectionStart=B,S.selectionEnd=Math.min(V,S.value.length);else{var k=S.ownerDocument||document,L=k&&k.defaultView||window;if(L.getSelection){var G=L.getSelection(),tt=S.textContent.length,st=Math.min(M.start,tt),Dt=M.end===void 0?st:Math.min(M.end,tt);!G.extend&&st>Dt&&(y=Dt,Dt=st,st=y);var R=$o(S,st),O=$o(S,Dt);if(R&&O&&(G.rangeCount!==1||G.anchorNode!==R.node||G.anchorOffset!==R.offset||G.focusNode!==O.node||G.focusOffset!==O.offset)){var w=k.createRange();w.setStart(R.node,R.offset),G.removeAllRanges(),st>Dt?(G.addRange(w),G.extend(O.node,O.offset)):(w.setEnd(O.node,O.offset),G.addRange(w))}}}}for(k=[],G=S;G=G.parentNode;)G.nodeType===1&&k.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<k.length;S++){var Z=k[S];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}hu=!!Hc,qc=Hc=null}finally{Et=c,J.p=a,Y.T=i}}t.current=e,te=2}}function d0(){if(te===2){te=0;var t=ni,e=El,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=Y.T,Y.T=null;var a=J.p;J.p=2;var c=Et;Et|=4;try{Gd(t,e.alternate,e)}finally{Et=c,J.p=a,Y.T=i}}te=3}}function m0(){if(te===4||te===3){te=0,hg();var t=ni,e=El,i=Un,a=t0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?te=5:(te=0,El=ni=null,g0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ei=null),Zu(i),e=e.stateNode,Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=Y.T,c=J.p,J.p=2,Y.T=null;try{for(var o=t.onRecoverableError,y=0;y<a.length;y++){var S=a[y];o(S.value,{componentStack:S.stack})}}finally{Y.T=e,J.p=c}}(Un&3)!==0&&tu(),dn(t),c=t.pendingLanes,(i&261930)!==0&&(c&42)!==0?t===Ac?za++:(za=0,Ac=t):za=0,Oa(0)}}function g0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ra(e)))}function tu(){return h0(),d0(),m0(),y0()}function y0(){if(te!==5)return!1;var t=ni,e=Tc;Tc=0;var i=Zu(Un),a=Y.T,c=J.p;try{J.p=32>i?32:i,Y.T=null,i=Ec,Ec=null;var o=ni,y=Un;if(te=0,El=ni=null,Un=0,(Et&6)!==0)throw Error(s(331));var S=Et;if(Et|=4,Wd(o.current),Jd(o,o.current,y,i),Et=S,Oa(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(kl,o)}catch{}return!0}finally{J.p=c,Y.T=a,g0(t,e)}}function p0(t,e,i){e=Je(i,e),e=ic(t.stateNode,e,2),t=Fn(t,e,2),t!==null&&(Jl(t,2),dn(t))}function zt(t,e,i){if(t.tag===3)p0(t,t,i);else for(;e!==null;){if(e.tag===3){p0(e,t,i);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ei===null||!ei.has(a))){t=Je(i,t),i=_d(2),a=Fn(e,i,2),a!==null&&(vd(i,a,e,t),Jl(a,2),dn(a));break}}e=e.return}}function Oc(t,e,i){var a=t.pingCache;if(a===null){a=t.pingCache=new Hy;var c=new Set;a.set(e,c)}else c=a.get(e),c===void 0&&(c=new Set,a.set(e,c));c.has(i)||(Sc=!0,c.add(i),t=Vy.bind(null,t,e,i),e.then(t,t))}function Vy(t,e,i){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Rt===t&&(yt&i)===i&&(Xt===4||Xt===3&&(yt&62914560)===yt&&300>Ce()-Js?(Et&2)===0&&Al(t,0):xc|=i,Tl===yt&&(Tl=0)),dn(t)}function _0(t,e){e===0&&(e=oo()),t=Ai(t,e),t!==null&&(Jl(t,e),dn(t))}function Qy(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),_0(t,i)}function Zy(t,e){var i=0;switch(t.tag){case 31:case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(i=c.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),_0(t,i)}function ky(t,e){return Gu(t,e)}var eu=null,zl=null,Cc=!1,nu=!1,Nc=!1,li=0;function dn(t){t!==zl&&t.next===null&&(zl===null?eu=zl=t:zl=zl.next=t),nu=!0,Cc||(Cc=!0,Jy())}function Oa(t,e){if(!Nc&&nu){Nc=!0;do for(var i=!1,a=eu;a!==null;){if(t!==0){var c=a.pendingLanes;if(c===0)var o=0;else{var y=a.suspendedLanes,S=a.pingedLanes;o=(1<<31-De(42|t)+1)-1,o&=c&~(y&~S),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(i=!0,b0(a,o))}else o=yt,o=ss(a,a===Rt?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Kl(a,o)||(i=!0,b0(a,o));a=a.next}while(i);Nc=!1}}function Ky(){v0()}function v0(){nu=Cc=!1;var t=0;li!==0&&lp()&&(t=li);for(var e=Ce(),i=null,a=eu;a!==null;){var c=a.next,o=S0(a,e);o===0?(a.next=null,i===null?eu=c:i.next=c,c===null&&(zl=i)):(i=a,(t!==0||(o&3)!==0)&&(nu=!0)),a=c}te!==0&&te!==5||Oa(t),li!==0&&(li=0)}function S0(t,e){for(var i=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var y=31-De(o),S=1<<y,M=c[y];M===-1?((S&i)===0||(S&a)!==0)&&(c[y]=Sg(S,e)):M<=e&&(t.expiredLanes|=S),o&=~S}if(e=Rt,i=yt,i=ss(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,i===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Xu(a),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Kl(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(a!==null&&Xu(a),Zu(i)){case 2:case 8:i=co;break;case 32:i=ns;break;case 268435456:i=fo;break;default:i=ns}return a=x0.bind(null,t),i=Gu(i,a),t.callbackPriority=e,t.callbackNode=i,e}return a!==null&&a!==null&&Xu(a),t.callbackPriority=2,t.callbackNode=null,2}function x0(t,e){if(te!==0&&te!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(tu()&&t.callbackNode!==i)return null;var a=yt;return a=ss(t,t===Rt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(n0(t,a,e),S0(t,Ce()),t.callbackNode!=null&&t.callbackNode===i?x0.bind(null,t):null)}function b0(t,e){if(tu())return null;n0(t,e,!0)}function Jy(){sp(function(){(Et&6)!==0?Gu(ro,Ky):v0()})}function Dc(){if(li===0){var t=hl;t===0&&(t=is,is<<=1,(is&261888)===0&&(is=256)),li=t}return li}function T0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fs(""+t)}function E0(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function Fy(t,e,i,a,c){if(e==="submit"&&i&&i.stateNode===c){var o=T0((c[pe]||null).action),y=a.submitter;y&&(e=(e=y[pe]||null)?T0(e.formAction):y.getAttribute("formAction"),e!==null&&(o=e,y=null));var S=new ms("action","action",null,a,c);t.push({event:S,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(li!==0){var M=y?E0(c,y):new FormData(c);Wr(i,{pending:!0,data:M,method:c.method,action:o},null,M)}}else typeof o=="function"&&(S.preventDefault(),M=y?E0(c,y):new FormData(c),Wr(i,{pending:!0,data:M,method:c.method,action:o},o,M))},currentTarget:c}]})}}for(var Rc=0;Rc<mr.length;Rc++){var jc=mr[Rc],$y=jc.toLowerCase(),Wy=jc[0].toUpperCase()+jc.slice(1);sn($y,"on"+Wy)}sn(eh,"onAnimationEnd"),sn(nh,"onAnimationIteration"),sn(ih,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(dy,"onTransitionRun"),sn(my,"onTransitionStart"),sn(gy,"onTransitionCancel"),sn(lh,"onTransitionEnd"),Pi("onMouseEnter",["mouseout","mouseover"]),Pi("onMouseLeave",["mouseout","mouseover"]),Pi("onPointerEnter",["pointerout","pointerover"]),Pi("onPointerLeave",["pointerout","pointerover"]),xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ca));function A0(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var a=t[i],c=a.event;a=a.listeners;t:{var o=void 0;if(e)for(var y=a.length-1;0<=y;y--){var S=a[y],M=S.instance,B=S.currentTarget;if(S=S.listener,M!==o&&c.isPropagationStopped())break t;o=S,c.currentTarget=B;try{o(c)}catch(V){ps(V)}c.currentTarget=null,o=M}else for(y=0;y<a.length;y++){if(S=a[y],M=S.instance,B=S.currentTarget,S=S.listener,M!==o&&c.isPropagationStopped())break t;o=S,c.currentTarget=B;try{o(c)}catch(V){ps(V)}c.currentTarget=null,o=M}}}}function gt(t,e){var i=e[ku];i===void 0&&(i=e[ku]=new Set);var a=t+"__bubble";i.has(a)||(M0(e,t,2,!1),i.add(a))}function Uc(t,e,i){var a=0;e&&(a|=4),M0(i,t,a,e)}var iu="_reactListening"+Math.random().toString(36).slice(2);function wc(t){if(!t[iu]){t[iu]=!0,vo.forEach(function(i){i!=="selectionchange"&&(Py.has(i)||Uc(i,!1,t),Uc(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[iu]||(e[iu]=!0,Uc("selectionchange",!1,e))}}function M0(t,e,i,a){switch(e1(e)){case 2:var c=Mp;break;case 8:c=zp;break;default:c=$c}i=c.bind(null,e,i,t),c=void 0,!er||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(e,i,{capture:!0,passive:c}):t.addEventListener(e,i,!0):c!==void 0?t.addEventListener(e,i,{passive:c}):t.addEventListener(e,i,!1)}function Bc(t,e,i,a,c){var o=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var y=a.tag;if(y===3||y===4){var S=a.stateNode.containerInfo;if(S===c)break;if(y===4)for(y=a.return;y!==null;){var M=y.tag;if((M===3||M===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;S!==null;){if(y=Fi(S),y===null)return;if(M=y.tag,M===5||M===6||M===26||M===27){a=o=y;continue t}S=S.parentNode}}a=a.return}Do(function(){var B=o,V=Iu(i),k=[];t:{var L=ah.get(t);if(L!==void 0){var G=ms,tt=t;switch(t){case"keypress":if(hs(i)===0)break t;case"keydown":case"keyup":G=Zg;break;case"focusin":tt="focus",G=ar;break;case"focusout":tt="blur",G=ar;break;case"beforeblur":case"afterblur":G=ar;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Jg;break;case eh:case nh:case ih:G=Bg;break;case lh:G=$g;break;case"scroll":case"scrollend":G=Dg;break;case"wheel":G=Pg;break;case"copy":case"cut":case"paste":G=Hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Bo;break;case"toggle":case"beforetoggle":G=ty}var st=(e&4)!==0,Dt=!st&&(t==="scroll"||t==="scrollend"),R=st?L!==null?L+"Capture":null:L;st=[];for(var O=B,w;O!==null;){var Z=O;if(w=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||w===null||R===null||(Z=Wl(O,R),Z!=null&&st.push(Na(O,Z,w))),Dt)break;O=O.return}0<st.length&&(L=new G(L,tt,null,i,V),k.push({event:L,listeners:st}))}}if((e&7)===0){t:{if(L=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",L&&i!==Pu&&(tt=i.relatedTarget||i.fromElement)&&(Fi(tt)||tt[Ji]))break t;if((G||L)&&(L=V.window===V?V:(L=V.ownerDocument)?L.defaultView||L.parentWindow:window,G?(tt=i.relatedTarget||i.toElement,G=B,tt=tt?Fi(tt):null,tt!==null&&(Dt=f(tt),st=tt.tag,tt!==Dt||st!==5&&st!==27&&st!==6)&&(tt=null)):(G=null,tt=B),G!==tt)){if(st=Uo,Z="onMouseLeave",R="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(st=Bo,Z="onPointerLeave",R="onPointerEnter",O="pointer"),Dt=G==null?L:$l(G),w=tt==null?L:$l(tt),L=new st(Z,O+"leave",G,i,V),L.target=Dt,L.relatedTarget=w,Z=null,Fi(V)===B&&(st=new st(R,O+"enter",tt,i,V),st.target=w,st.relatedTarget=Dt,Z=st),Dt=Z,G&&tt)e:{for(st=Iy,R=G,O=tt,w=0,Z=R;Z;Z=st(Z))w++;Z=0;for(var at=O;at;at=st(at))Z++;for(;0<w-Z;)R=st(R),w--;for(;0<Z-w;)O=st(O),Z--;for(;w--;){if(R===O||O!==null&&R===O.alternate){st=R;break e}R=st(R),O=st(O)}st=null}else st=null;G!==null&&z0(k,L,G,st,!1),tt!==null&&Dt!==null&&z0(k,Dt,tt,st,!0)}}t:{if(L=B?$l(B):window,G=L.nodeName&&L.nodeName.toLowerCase(),G==="select"||G==="input"&&L.type==="file")var bt=Qo;else if(Xo(L))if(Zo)bt=fy;else{bt=ry;var it=uy}else G=L.nodeName,!G||G.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?B&&Wu(B.elementType)&&(bt=Qo):bt=cy;if(bt&&(bt=bt(t,B))){Vo(k,bt,i,V);break t}it&&it(t,L,B),t==="focusout"&&B&&L.type==="number"&&B.memoizedProps.value!=null&&$u(L,"number",L.value)}switch(it=B?$l(B):window,t){case"focusin":(Xo(it)||it.contentEditable==="true")&&(ll=it,or=B,aa=null);break;case"focusout":aa=or=ll=null;break;case"mousedown":hr=!0;break;case"contextmenu":case"mouseup":case"dragend":hr=!1,Io(k,i,V);break;case"selectionchange":if(hy)break;case"keydown":case"keyup":Io(k,i,V)}var ot;if(ur)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else il?Yo(t,i)&&(pt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(pt="onCompositionStart");pt&&(Lo&&i.locale!=="ko"&&(il||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&il&&(ot=Ro()):(Xn=V,nr="value"in Xn?Xn.value:Xn.textContent,il=!0)),it=lu(B,pt),0<it.length&&(pt=new wo(pt,t,null,i,V),k.push({event:pt,listeners:it}),ot?pt.data=ot:(ot=Go(i),ot!==null&&(pt.data=ot)))),(ot=ny?iy(t,i):ly(t,i))&&(pt=lu(B,"onBeforeInput"),0<pt.length&&(it=new wo("onBeforeInput","beforeinput",null,i,V),k.push({event:it,listeners:pt}),it.data=ot)),Fy(k,t,B,i,V)}A0(k,e)})}function Na(t,e,i){return{instance:t,listener:e,currentTarget:i}}function lu(t,e){for(var i=e+"Capture",a=[];t!==null;){var c=t,o=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||o===null||(c=Wl(t,i),c!=null&&a.unshift(Na(t,c,o)),c=Wl(t,e),c!=null&&a.push(Na(t,c,o))),t.tag===3)return a;t=t.return}return[]}function Iy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function z0(t,e,i,a,c){for(var o=e._reactName,y=[];i!==null&&i!==a;){var S=i,M=S.alternate,B=S.stateNode;if(S=S.tag,M!==null&&M===a)break;S!==5&&S!==26&&S!==27||B===null||(M=B,c?(B=Wl(i,o),B!=null&&y.unshift(Na(i,B,M))):c||(B=Wl(i,o),B!=null&&y.push(Na(i,B,M)))),i=i.return}y.length!==0&&t.push({event:e,listeners:y})}var tp=/\r\n?/g,ep=/\u0000|\uFFFD/g;function O0(t){return(typeof t=="string"?t:""+t).replace(tp,`
`).replace(ep,"")}function C0(t,e){return e=O0(e),O0(t)===e}function Nt(t,e,i,a,c,o){switch(i){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||tl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&tl(t,""+a);break;case"className":rs(t,"class",a);break;case"tabIndex":rs(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":rs(t,i,a);break;case"style":Co(t,a,o);break;case"data":if(e!=="object"){rs(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(i);break}a=fs(""+a),t.setAttribute(i,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(i==="formAction"?(e!=="input"&&Nt(t,e,"name",c.name,c,null),Nt(t,e,"formEncType",c.formEncType,c,null),Nt(t,e,"formMethod",c.formMethod,c,null),Nt(t,e,"formTarget",c.formTarget,c,null)):(Nt(t,e,"encType",c.encType,c,null),Nt(t,e,"method",c.method,c,null),Nt(t,e,"target",c.target,c,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(i);break}a=fs(""+a),t.setAttribute(i,a);break;case"onClick":a!=null&&(t.onclick=vn);break;case"onScroll":a!=null&&gt("scroll",t);break;case"onScrollEnd":a!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(i=a.__html,i!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=i}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}i=fs(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(i,""+a):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":a===!0?t.setAttribute(i,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(i,a):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(i,a):t.removeAttribute(i);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(i):t.setAttribute(i,a);break;case"popover":gt("beforetoggle",t),gt("toggle",t),us(t,"popover",a);break;case"xlinkActuate":_n(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":_n(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":_n(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":_n(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":_n(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":_n(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":_n(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":_n(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":_n(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":us(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Cg.get(i)||i,us(t,i,a))}}function Lc(t,e,i,a,c,o){switch(i){case"style":Co(t,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(i=a.__html,i!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=i}}break;case"children":typeof a=="string"?tl(t,a):(typeof a=="number"||typeof a=="bigint")&&tl(t,""+a);break;case"onScroll":a!=null&&gt("scroll",t);break;case"onScrollEnd":a!=null&&gt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=vn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!So.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),e=i.slice(2,c?i.length-7:void 0),o=t[pe]||null,o=o!=null?o[i]:null,typeof o=="function"&&t.removeEventListener(e,o,c),typeof a=="function")){typeof o!="function"&&o!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,a,c);break t}i in t?t[i]=a:a===!0?t.setAttribute(i,""):us(t,i,a)}}}function re(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var a=!1,c=!1,o;for(o in i)if(i.hasOwnProperty(o)){var y=i[o];if(y!=null)switch(o){case"src":a=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Nt(t,e,o,y,i,null)}}c&&Nt(t,e,"srcSet",i.srcSet,i,null),a&&Nt(t,e,"src",i.src,i,null);return;case"input":gt("invalid",t);var S=o=y=c=null,M=null,B=null;for(a in i)if(i.hasOwnProperty(a)){var V=i[a];if(V!=null)switch(a){case"name":c=V;break;case"type":y=V;break;case"checked":M=V;break;case"defaultChecked":B=V;break;case"value":o=V;break;case"defaultValue":S=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,e));break;default:Nt(t,e,a,V,i,null)}}Ao(t,o,S,M,B,y,c,!1);return;case"select":gt("invalid",t),a=y=o=null;for(c in i)if(i.hasOwnProperty(c)&&(S=i[c],S!=null))switch(c){case"value":o=S;break;case"defaultValue":y=S;break;case"multiple":a=S;default:Nt(t,e,c,S,i,null)}e=o,i=y,t.multiple=!!a,e!=null?Ii(t,!!a,e,!1):i!=null&&Ii(t,!!a,i,!0);return;case"textarea":gt("invalid",t),o=c=a=null;for(y in i)if(i.hasOwnProperty(y)&&(S=i[y],S!=null))switch(y){case"value":a=S;break;case"defaultValue":c=S;break;case"children":o=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:Nt(t,e,y,S,i,null)}zo(t,a,c,o);return;case"option":for(M in i)if(i.hasOwnProperty(M)&&(a=i[M],a!=null))switch(M){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Nt(t,e,M,a,i,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(a=0;a<Ca.length;a++)gt(Ca[a],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in i)if(i.hasOwnProperty(B)&&(a=i[B],a!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Nt(t,e,B,a,i,null)}return;default:if(Wu(e)){for(V in i)i.hasOwnProperty(V)&&(a=i[V],a!==void 0&&Lc(t,e,V,a,i,void 0));return}}for(S in i)i.hasOwnProperty(S)&&(a=i[S],a!=null&&Nt(t,e,S,a,i,null))}function np(t,e,i,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,o=null,y=null,S=null,M=null,B=null,V=null;for(G in i){var k=i[G];if(i.hasOwnProperty(G)&&k!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":M=k;default:a.hasOwnProperty(G)||Nt(t,e,G,null,a,k)}}for(var L in a){var G=a[L];if(k=i[L],a.hasOwnProperty(L)&&(G!=null||k!=null))switch(L){case"type":o=G;break;case"name":c=G;break;case"checked":B=G;break;case"defaultChecked":V=G;break;case"value":y=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,e));break;default:G!==k&&Nt(t,e,L,G,a,k)}}Fu(t,y,S,M,B,V,o,c);return;case"select":G=y=S=L=null;for(o in i)if(M=i[o],i.hasOwnProperty(o)&&M!=null)switch(o){case"value":break;case"multiple":G=M;default:a.hasOwnProperty(o)||Nt(t,e,o,null,a,M)}for(c in a)if(o=a[c],M=i[c],a.hasOwnProperty(c)&&(o!=null||M!=null))switch(c){case"value":L=o;break;case"defaultValue":S=o;break;case"multiple":y=o;default:o!==M&&Nt(t,e,c,o,a,M)}e=S,i=y,a=G,L!=null?Ii(t,!!i,L,!1):!!a!=!!i&&(e!=null?Ii(t,!!i,e,!0):Ii(t,!!i,i?[]:"",!1));return;case"textarea":G=L=null;for(S in i)if(c=i[S],i.hasOwnProperty(S)&&c!=null&&!a.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Nt(t,e,S,null,a,c)}for(y in a)if(c=a[y],o=i[y],a.hasOwnProperty(y)&&(c!=null||o!=null))switch(y){case"value":L=c;break;case"defaultValue":G=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==o&&Nt(t,e,y,c,a,o)}Mo(t,L,G);return;case"option":for(var tt in i)if(L=i[tt],i.hasOwnProperty(tt)&&L!=null&&!a.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Nt(t,e,tt,null,a,L)}for(M in a)if(L=a[M],G=i[M],a.hasOwnProperty(M)&&L!==G&&(L!=null||G!=null))switch(M){case"selected":t.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Nt(t,e,M,L,a,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in i)L=i[st],i.hasOwnProperty(st)&&L!=null&&!a.hasOwnProperty(st)&&Nt(t,e,st,null,a,L);for(B in a)if(L=a[B],G=i[B],a.hasOwnProperty(B)&&L!==G&&(L!=null||G!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,e));break;default:Nt(t,e,B,L,a,G)}return;default:if(Wu(e)){for(var Dt in i)L=i[Dt],i.hasOwnProperty(Dt)&&L!==void 0&&!a.hasOwnProperty(Dt)&&Lc(t,e,Dt,void 0,a,L);for(V in a)L=a[V],G=i[V],!a.hasOwnProperty(V)||L===G||L===void 0&&G===void 0||Lc(t,e,V,L,a,G);return}}for(var R in i)L=i[R],i.hasOwnProperty(R)&&L!=null&&!a.hasOwnProperty(R)&&Nt(t,e,R,null,a,L);for(k in a)L=a[k],G=i[k],!a.hasOwnProperty(k)||L===G||L==null&&G==null||Nt(t,e,k,L,a,G)}function N0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ip(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),a=0;a<i.length;a++){var c=i[a],o=c.transferSize,y=c.initiatorType,S=c.duration;if(o&&S&&N0(y)){for(y=0,S=c.responseEnd,a+=1;a<i.length;a++){var M=i[a],B=M.startTime;if(B>S)break;var V=M.transferSize,k=M.initiatorType;V&&N0(k)&&(M=M.responseEnd,y+=V*(M<S?1:(S-B)/(M-B)))}if(--a,e+=8*(o+y)/(c.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hc=null,qc=null;function au(t){return t.nodeType===9?t:t.ownerDocument}function D0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=null;function lp(){var t=window.event;return t&&t.type==="popstate"?t===Gc?!1:(Gc=t,!0):(Gc=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,ap=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,sp=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(t){return U0.resolve(null).then(t).catch(up)}:j0;function up(t){setTimeout(function(){throw t})}function ai(t){return t==="head"}function w0(t,e){var i=e,a=0;do{var c=i.nextSibling;if(t.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"||i==="/&"){if(a===0){t.removeChild(c),Dl(e);return}a--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")a++;else if(i==="html")Da(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Da(i);for(var o=i.firstChild;o;){var y=o.nextSibling,S=o.nodeName;o[Fl]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&o.rel.toLowerCase()==="stylesheet"||i.removeChild(o),o=y}}else i==="body"&&Da(t.ownerDocument.body);i=c}while(i);Dl(e)}function B0(t,e){var i=t;t=0;do{var a=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),a&&a.nodeType===8)if(i=a.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=a}while(i)}function Xc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Xc(i),Ku(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function rp(t,e,i,a){for(;t.nodeType===1;){var c=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Fl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Ie(t.nextSibling),t===null)break}return null}function cp(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ie(t.nextSibling),t===null))return null;return t}function L0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ie(t.nextSibling),t===null))return null;return t}function Vc(t){return t.data==="$?"||t.data==="$~"}function Qc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fp(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var a=function(){e(),i.removeEventListener("DOMContentLoaded",a)};i.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ie(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Zc=null;function H0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return Ie(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function q0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function Y0(t,e,i){switch(e=au(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Da(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ku(t)}var tn=new Map,G0=new Set;function su(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wn=J.d;J.d={f:op,r:hp,D:dp,C:mp,L:gp,m:yp,X:_p,S:pp,M:vp};function op(){var t=wn.f(),e=Ws();return t||e}function hp(t){var e=$i(t);e!==null&&e.tag===5&&e.type==="form"?ld(e):wn.r(t)}var Ol=typeof document>"u"?null:document;function X0(t,e,i){var a=Ol;if(a&&typeof e=="string"&&e){var c=ke(e);c='link[rel="'+t+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),G0.has(c)||(G0.add(c),t={rel:t,crossOrigin:i,href:e},a.querySelector(c)===null&&(e=a.createElement("link"),re(e,"link",t),ee(e),a.head.appendChild(e)))}}function dp(t){wn.D(t),X0("dns-prefetch",t,null)}function mp(t,e){wn.C(t,e),X0("preconnect",t,e)}function gp(t,e,i){wn.L(t,e,i);var a=Ol;if(a&&t&&e){var c='link[rel="preload"][as="'+ke(e)+'"]';e==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+ke(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+ke(i.imageSizes)+'"]')):c+='[href="'+ke(t)+'"]';var o=c;switch(e){case"style":o=Cl(t);break;case"script":o=Nl(t)}tn.has(o)||(t=v({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),tn.set(o,t),a.querySelector(c)!==null||e==="style"&&a.querySelector(Ra(o))||e==="script"&&a.querySelector(ja(o))||(e=a.createElement("link"),re(e,"link",t),ee(e),a.head.appendChild(e)))}}function yp(t,e){wn.m(t,e);var i=Ol;if(i&&t){var a=e&&typeof e.as=="string"?e.as:"script",c='link[rel="modulepreload"][as="'+ke(a)+'"][href="'+ke(t)+'"]',o=c;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Nl(t)}if(!tn.has(o)&&(t=v({rel:"modulepreload",href:t},e),tn.set(o,t),i.querySelector(c)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(ja(o)))return}a=i.createElement("link"),re(a,"link",t),ee(a),i.head.appendChild(a)}}}function pp(t,e,i){wn.S(t,e,i);var a=Ol;if(a&&t){var c=Wi(a).hoistableStyles,o=Cl(t);e=e||"default";var y=c.get(o);if(!y){var S={loading:0,preload:null};if(y=a.querySelector(Ra(o)))S.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":e},i),(i=tn.get(o))&&kc(t,i);var M=y=a.createElement("link");ee(M),re(M,"link",t),M._p=new Promise(function(B,V){M.onload=B,M.onerror=V}),M.addEventListener("load",function(){S.loading|=1}),M.addEventListener("error",function(){S.loading|=2}),S.loading|=4,uu(y,e,a)}y={type:"stylesheet",instance:y,count:1,state:S},c.set(o,y)}}}function _p(t,e){wn.X(t,e);var i=Ol;if(i&&t){var a=Wi(i).hoistableScripts,c=Nl(t),o=a.get(c);o||(o=i.querySelector(ja(c)),o||(t=v({src:t,async:!0},e),(e=tn.get(c))&&Kc(t,e),o=i.createElement("script"),ee(o),re(o,"link",t),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(c,o))}}function vp(t,e){wn.M(t,e);var i=Ol;if(i&&t){var a=Wi(i).hoistableScripts,c=Nl(t),o=a.get(c);o||(o=i.querySelector(ja(c)),o||(t=v({src:t,async:!0,type:"module"},e),(e=tn.get(c))&&Kc(t,e),o=i.createElement("script"),ee(o),re(o,"link",t),i.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(c,o))}}function V0(t,e,i,a){var c=(c=dt.current)?su(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=Cl(i.href),i=Wi(c).hoistableStyles,a=i.get(e),a||(a={type:"style",instance:null,count:0,state:null},i.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Cl(i.href);var o=Wi(c).hoistableStyles,y=o.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,y),(o=c.querySelector(Ra(t)))&&!o._p&&(y.instance=o,y.state.loading=5),tn.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},tn.set(t,i),o||Sp(c,t,i,y.state))),e&&a===null)throw Error(s(528,""));return y}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Nl(i),i=Wi(c).hoistableScripts,a=i.get(e),a||(a={type:"script",instance:null,count:0,state:null},i.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Cl(t){return'href="'+ke(t)+'"'}function Ra(t){return'link[rel="stylesheet"]['+t+"]"}function Q0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Sp(t,e,i,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),re(e,"link",i),ee(e),t.head.appendChild(e))}function Nl(t){return'[src="'+ke(t)+'"]'}function ja(t){return"script[async]"+t}function Z0(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ke(i.href)+'"]');if(a)return e.instance=a,ee(a),a;var c=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ee(a),re(a,"style",c),uu(a,i.precedence,t),e.instance=a;case"stylesheet":c=Cl(i.href);var o=t.querySelector(Ra(c));if(o)return e.state.loading|=4,e.instance=o,ee(o),o;a=Q0(i),(c=tn.get(c))&&kc(a,c),o=(t.ownerDocument||t).createElement("link"),ee(o);var y=o;return y._p=new Promise(function(S,M){y.onload=S,y.onerror=M}),re(o,"link",a),e.state.loading|=4,uu(o,i.precedence,t),e.instance=o;case"script":return o=Nl(i.src),(c=t.querySelector(ja(o)))?(e.instance=c,ee(c),c):(a=i,(c=tn.get(o))&&(a=v({},i),Kc(a,c)),t=t.ownerDocument||t,c=t.createElement("script"),ee(c),re(c,"link",a),t.head.appendChild(c),e.instance=c);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,uu(a,i.precedence,t));return e.instance}function uu(t,e,i){for(var a=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=a.length?a[a.length-1]:null,o=c,y=0;y<a.length;y++){var S=a[y];if(S.dataset.precedence===e)o=S;else if(o!==c)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function kc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Kc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ru=null;function k0(t,e,i){if(ru===null){var a=new Map,c=ru=new Map;c.set(i,a)}else c=ru,a=c.get(i),a||(a=new Map,c.set(i,a));if(a.has(t))return a;for(a.set(t,null),i=i.getElementsByTagName(t),c=0;c<i.length;c++){var o=i[c];if(!(o[Fl]||o[le]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var y=o.getAttribute(e)||"";y=t+y;var S=a.get(y);S?S.push(o):a.set(y,[o])}}return a}function K0(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function xp(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function J0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function bp(t,e,i,a){if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=Cl(a.href),o=e.querySelector(Ra(c));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=cu.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=o,ee(o);return}o=e.ownerDocument||e,a=Q0(a),(c=tn.get(c))&&kc(a,c),o=o.createElement("link"),ee(o);var y=o;y._p=new Promise(function(S,M){y.onload=S,y.onerror=M}),re(o,"link",a),i.instance=o}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=cu.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Jc=0;function Tp(t,e){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var a=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4+e);0<t.imgBytes&&Jc===0&&(Jc=62500*ip());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var o=t.unsuspend;t.unsuspend=null,o()}},(t.imgBytes>Jc?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(c)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fu=null;function ou(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fu=new Map,e.forEach(Ep,t),fu=null,cu.call(t))}function Ep(t,e){if(!(e.state.loading&4)){var i=fu.get(t);if(i)var a=i.get(null);else{i=new Map,fu.set(t,i);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<c.length;o++){var y=c[o];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(i.set(y.dataset.precedence,y),a=y)}a&&i.set(null,a)}c=e.instance,y=c.getAttribute("data-precedence"),o=i.get(y)||a,o===a&&i.set(null,c),i.set(y,c),this.count++,a=cu.bind(this),c.addEventListener("load",a),c.addEventListener("error",a),o?o.parentNode.insertBefore(c,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),e.state.loading|=4}}var Ua={$$typeof:N,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function Ap(t,e,i,a,c,o,y,S,M){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.hiddenUpdates=Vu(null),this.identifierPrefix=a,this.onUncaughtError=c,this.onCaughtError=o,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function F0(t,e,i,a,c,o,y,S,M,B,V,k){return t=new Ap(t,e,i,y,M,B,V,k,S),e=1,o===!0&&(e|=24),o=je(3,null,null,e),t.current=o,o.stateNode=t,e=zr(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:a,isDehydrated:i,cache:e},Dr(o),t}function $0(t){return t?(t=ul,t):ul}function W0(t,e,i,a,c,o){c=$0(c),a.context===null?a.context=c:a.pendingContext=c,a=Jn(e),a.payload={element:i},o=o===void 0?null:o,o!==null&&(a.callback=o),i=Fn(t,a,e),i!==null&&(Te(i,t,e),ha(i,t,e))}function P0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Fc(t,e){P0(t,e),(t=t.alternate)&&P0(t,e)}function I0(t){if(t.tag===13||t.tag===31){var e=Ai(t,67108864);e!==null&&Te(e,t,67108864),Fc(t,67108864)}}function t1(t){if(t.tag===13||t.tag===31){var e=He();e=Qu(e);var i=Ai(t,e);i!==null&&Te(i,t,e),Fc(t,e)}}var hu=!0;function Mp(t,e,i,a){var c=Y.T;Y.T=null;var o=J.p;try{J.p=2,$c(t,e,i,a)}finally{J.p=o,Y.T=c}}function zp(t,e,i,a){var c=Y.T;Y.T=null;var o=J.p;try{J.p=8,$c(t,e,i,a)}finally{J.p=o,Y.T=c}}function $c(t,e,i,a){if(hu){var c=Wc(a);if(c===null)Bc(t,e,a,du,i),n1(t,a);else if(Cp(c,t,e,i,a))a.stopPropagation();else if(n1(t,a),e&4&&-1<Op.indexOf(t)){for(;c!==null;){var o=$i(c);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var y=Si(o.pendingLanes);if(y!==0){var S=o;for(S.pendingLanes|=2,S.entangledLanes|=2;y;){var M=1<<31-De(y);S.entanglements[1]|=M,y&=~M}dn(o),(Et&6)===0&&(Fs=Ce()+500,Oa(0))}}break;case 31:case 13:S=Ai(o,2),S!==null&&Te(S,o,2),Ws(),Fc(o,2)}if(o=Wc(a),o===null&&Bc(t,e,a,du,i),o===c)break;c=o}c!==null&&a.stopPropagation()}else Bc(t,e,a,null,i)}}function Wc(t){return t=Iu(t),Pc(t)}var du=null;function Pc(t){if(du=null,t=Fi(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=h(e),t!==null)return t;t=null}else if(i===31){if(t=d(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return du=t,null}function e1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dg()){case ro:return 2;case co:return 8;case ns:case mg:return 32;case fo:return 268435456;default:return 32}default:return 32}}var Ic=!1,si=null,ui=null,ri=null,wa=new Map,Ba=new Map,ci=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n1(t,e){switch(t){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function La(t,e,i,a,c,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:i,eventSystemFlags:a,nativeEvent:o,targetContainers:[c]},e!==null&&(e=$i(e),e!==null&&I0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,c!==null&&e.indexOf(c)===-1&&e.push(c),t)}function Cp(t,e,i,a,c){switch(e){case"focusin":return si=La(si,t,e,i,a,c),!0;case"dragenter":return ui=La(ui,t,e,i,a,c),!0;case"mouseover":return ri=La(ri,t,e,i,a,c),!0;case"pointerover":var o=c.pointerId;return wa.set(o,La(wa.get(o)||null,t,e,i,a,c)),!0;case"gotpointercapture":return o=c.pointerId,Ba.set(o,La(Ba.get(o)||null,t,e,i,a,c)),!0}return!1}function i1(t){var e=Fi(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=h(i),e!==null){t.blockedOn=e,po(t.priority,function(){t1(i)});return}}else if(e===31){if(e=d(i),e!==null){t.blockedOn=e,po(t.priority,function(){t1(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Wc(t.nativeEvent);if(i===null){i=t.nativeEvent;var a=new i.constructor(i.type,i);Pu=a,i.target.dispatchEvent(a),Pu=null}else return e=$i(i),e!==null&&I0(e),t.blockedOn=i,!1;e.shift()}return!0}function l1(t,e,i){mu(t)&&i.delete(e)}function Np(){Ic=!1,si!==null&&mu(si)&&(si=null),ui!==null&&mu(ui)&&(ui=null),ri!==null&&mu(ri)&&(ri=null),wa.forEach(l1),Ba.forEach(l1)}function gu(t,e){t.blockedOn===e&&(t.blockedOn=null,Ic||(Ic=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Np)))}var yu=null;function a1(t){yu!==t&&(yu=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){yu===t&&(yu=null);for(var e=0;e<t.length;e+=3){var i=t[e],a=t[e+1],c=t[e+2];if(typeof a!="function"){if(Pc(a||i)===null)continue;break}var o=$i(i);o!==null&&(t.splice(e,3),e-=3,Wr(o,{pending:!0,data:c,method:i.method,action:a},a,c))}}))}function Dl(t){function e(M){return gu(M,t)}si!==null&&gu(si,t),ui!==null&&gu(ui,t),ri!==null&&gu(ri,t),wa.forEach(e),Ba.forEach(e);for(var i=0;i<ci.length;i++){var a=ci[i];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ci.length&&(i=ci[0],i.blockedOn===null);)i1(i),i.blockedOn===null&&ci.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(a=0;a<i.length;a+=3){var c=i[a],o=i[a+1],y=c[pe]||null;if(typeof o=="function")y||a1(i);else if(y){var S=null;if(o&&o.hasAttribute("formAction")){if(c=o,y=o[pe]||null)S=y.formAction;else if(Pc(c)!==null)continue}else S=y.action;typeof S=="function"?i[a+1]=S:(i.splice(a,3),a-=3),a1(i)}}}function s1(){function t(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function e(){c!==null&&(c(),c=null),a||setTimeout(i,20)}function i(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),c!==null&&(c(),c=null)}}}function tf(t){this._internalRoot=t}pu.prototype.render=tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,a=He();W0(i,a,t,e,null,null)},pu.prototype.unmount=tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;W0(t.current,2,null,t,null,null),Ws(),e[Ji]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=yo();t={blockedOn:null,target:t,priority:e};for(var i=0;i<ci.length&&e!==0&&e<ci[i].priority;i++);ci.splice(i,0,t),i===0&&i1(t)}};var u1=n.version;if(u1!=="19.2.0")throw Error(s(527,u1,"19.2.0"));J.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Dp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{kl=_u.inject(Dp),Ne=_u}catch{}}return qa.createRoot=function(t,e){if(!r(t))throw Error(s(299));var i=!1,a="",c=md,o=gd,y=yd;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(c=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(y=e.onRecoverableError)),e=F0(t,1,!1,null,null,i,a,null,c,o,y,s1),t[Ji]=e.current,wc(t),new tf(e)},qa.hydrateRoot=function(t,e,i){if(!r(t))throw Error(s(299));var a=!1,c="",o=md,y=gd,S=yd,M=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(o=i.onUncaughtError),i.onCaughtError!==void 0&&(y=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.formState!==void 0&&(M=i.formState)),e=F0(t,1,!0,e,i??null,a,c,M,o,y,S,s1),e.context=$0(null),i=e.current,a=He(),a=Qu(a),c=Jn(a),c.callback=null,Fn(i,c,a),i=a,e.current.lanes=i,Jl(e,i),dn(e),t[Ji]=e.current,wc(t),new pu(e)},qa.version="19.2.0",qa}var p1;function Gp(){if(p1)return lf.exports;p1=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(n){console.error(n)}}return u(),lf.exports=Yp(),lf.exports}var Xp=Gp();const Vp=()=>{const[u,n]=rt.useState(""),[l,s]=rt.useState(!1),[r,f]=rt.useState(0),[h,d]=rt.useState(450),[m,g]=rt.useState(!1),[p,v]=rt.useState(!1),b="CryptoX";rt.useEffect(()=>{const A=setTimeout(()=>{const z=b;n(l?z.substring(0,u.length-1):z.substring(0,u.length+1)),d(l?180:450),!l&&u===z?setTimeout(()=>s(!0),4500):l&&u===""&&(s(!1),f(r+1))},h);return()=>clearTimeout(A)},[u,l,r,h]),rt.useEffect(()=>{const _=()=>{v(window.innerWidth<=1023),window.innerWidth>1023&&g(!1)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const x=()=>{g(!m)},T=()=>{p&&g(!1)};return E.jsx("header",{className:"header",children:E.jsxs("div",{className:`header-container ${m?"menu-open":""}`,children:[E.jsxs("a",{href:"#hero",className:"logo",children:[u,E.jsx("span",{className:"cursor",children:"|"})]}),p&&E.jsxs("button",{className:`burger-button ${m?"active":""}`,onClick:x,"aria-label":"Toggle menu",children:[E.jsx("span",{className:"burger-line"}),E.jsx("span",{className:"burger-line"}),E.jsx("span",{className:"burger-line"})]}),E.jsxs("nav",{className:`nav ${p&&m?"nav-mobile-open":""} ${p?"nav-mobile":""}`,children:[E.jsx("a",{href:"#hero",className:"nav-link",onClick:T,children:E.jsx("span",{className:"nav-link-text",children:"Главная"})}),E.jsx("a",{href:"#features",className:"nav-link",onClick:T,children:E.jsx("span",{className:"nav-link-text",children:"О проекте"})}),E.jsx("a",{href:"#team",className:"nav-link",onClick:T,children:E.jsx("span",{className:"nav-link-text",children:"О команде"})}),E.jsx("a",{href:"#documentation",className:"nav-link",onClick:T,children:E.jsx("span",{className:"nav-link-text",children:"Документация"})}),E.jsx("a",{href:"#web",className:"nav-link",onClick:T,children:E.jsx("span",{className:"nav-link-text",children:"Веб версия"})}),E.jsx("a",{href:"#install",className:"nav-link nav-button",onClick:T,children:E.jsx("span",{className:"nav-link-text",children:"Установить"})})]})]})})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zp=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,l,s)=>s?s.toUpperCase():l.toLowerCase()),_1=u=>{const n=Zp(u);return n.charAt(0).toUpperCase()+n.slice(1)},lm=(...u)=>u.filter((n,l,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===l).join(" ").trim(),kp=u=>{for(const n in u)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=rt.forwardRef(({color:u="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:r="",children:f,iconNode:h,...d},m)=>rt.createElement("svg",{ref:m,...Kp,width:n,height:n,stroke:u,strokeWidth:s?Number(l)*24/Number(n):l,className:lm("lucide",r),...!f&&!kp(d)&&{"aria-hidden":"true"},...d},[...h.map(([g,p])=>rt.createElement(g,p)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(u,n)=>{const l=rt.forwardRef(({className:s,...r},f)=>rt.createElement(Jp,{ref:f,iconNode:n,className:lm(`lucide-${Qp(_1(u))}`,`lucide-${u}`,s),...r}));return l.displayName=_1(u),l};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],$p=Ot("activity",Fp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Pp=Ot("book-open",Wp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],t_=Ot("chevron-down",Ip);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],n_=Ot("chevron-left",e_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],bf=Ot("chevron-right",i_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],a_=Ot("circle-check",l_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],u_=Ot("clock",s_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],rf=Ot("code-xml",r_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],f_=Ot("cpu",c_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Tf=Ot("database",o_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],d_=Ot("eye",h_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],v1=Ot("file-text",m_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],y_=Ot("folder-open",g_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],S1=Ot("folder",p_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],v_=Ot("git-branch",__);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],x_=Ot("github",S_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],T_=Ot("image",b_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],A_=Ot("info",E_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],cf=Ot("key",M_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Su=Ot("lock",z_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],C_=Ot("message-square",O_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],x1=Ot("network",N_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],R_=Ot("server",D_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],wl=Ot("shield",j_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],xu=Ot("terminal",U_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],B_=Ot("trending-up",w_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],H_=Ot("triangle-alert",L_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Y_=Ot("users",q_);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],X_=Ot("zap",G_);function Va(u){let n=u[0],l=u[1],s=u[2];return Math.sqrt(n*n+l*l+s*s)}function Ef(u,n){return u[0]=n[0],u[1]=n[1],u[2]=n[2],u}function V_(u,n,l,s){return u[0]=n,u[1]=l,u[2]=s,u}function b1(u,n,l){return u[0]=n[0]+l[0],u[1]=n[1]+l[1],u[2]=n[2]+l[2],u}function T1(u,n,l){return u[0]=n[0]-l[0],u[1]=n[1]-l[1],u[2]=n[2]-l[2],u}function Q_(u,n,l){return u[0]=n[0]*l[0],u[1]=n[1]*l[1],u[2]=n[2]*l[2],u}function Z_(u,n,l){return u[0]=n[0]/l[0],u[1]=n[1]/l[1],u[2]=n[2]/l[2],u}function ff(u,n,l){return u[0]=n[0]*l,u[1]=n[1]*l,u[2]=n[2]*l,u}function k_(u,n){let l=n[0]-u[0],s=n[1]-u[1],r=n[2]-u[2];return Math.sqrt(l*l+s*s+r*r)}function K_(u,n){let l=n[0]-u[0],s=n[1]-u[1],r=n[2]-u[2];return l*l+s*s+r*r}function E1(u){let n=u[0],l=u[1],s=u[2];return n*n+l*l+s*s}function J_(u,n){return u[0]=-n[0],u[1]=-n[1],u[2]=-n[2],u}function F_(u,n){return u[0]=1/n[0],u[1]=1/n[1],u[2]=1/n[2],u}function Af(u,n){let l=n[0],s=n[1],r=n[2],f=l*l+s*s+r*r;return f>0&&(f=1/Math.sqrt(f)),u[0]=n[0]*f,u[1]=n[1]*f,u[2]=n[2]*f,u}function am(u,n){return u[0]*n[0]+u[1]*n[1]+u[2]*n[2]}function A1(u,n,l){let s=n[0],r=n[1],f=n[2],h=l[0],d=l[1],m=l[2];return u[0]=r*m-f*d,u[1]=f*h-s*m,u[2]=s*d-r*h,u}function $_(u,n,l,s){let r=n[0],f=n[1],h=n[2];return u[0]=r+s*(l[0]-r),u[1]=f+s*(l[1]-f),u[2]=h+s*(l[2]-h),u}function W_(u,n,l,s,r){const f=Math.exp(-s*r);let h=n[0],d=n[1],m=n[2];return u[0]=l[0]+(h-l[0])*f,u[1]=l[1]+(d-l[1])*f,u[2]=l[2]+(m-l[2])*f,u}function P_(u,n,l){let s=n[0],r=n[1],f=n[2],h=l[3]*s+l[7]*r+l[11]*f+l[15];return h=h||1,u[0]=(l[0]*s+l[4]*r+l[8]*f+l[12])/h,u[1]=(l[1]*s+l[5]*r+l[9]*f+l[13])/h,u[2]=(l[2]*s+l[6]*r+l[10]*f+l[14])/h,u}function I_(u,n,l){let s=n[0],r=n[1],f=n[2],h=l[3]*s+l[7]*r+l[11]*f+l[15];return h=h||1,u[0]=(l[0]*s+l[4]*r+l[8]*f)/h,u[1]=(l[1]*s+l[5]*r+l[9]*f)/h,u[2]=(l[2]*s+l[6]*r+l[10]*f)/h,u}function t2(u,n,l){let s=n[0],r=n[1],f=n[2];return u[0]=s*l[0]+r*l[3]+f*l[6],u[1]=s*l[1]+r*l[4]+f*l[7],u[2]=s*l[2]+r*l[5]+f*l[8],u}function e2(u,n,l){let s=n[0],r=n[1],f=n[2],h=l[0],d=l[1],m=l[2],g=l[3],p=d*f-m*r,v=m*s-h*f,b=h*r-d*s,x=d*b-m*v,T=m*p-h*b,_=h*v-d*p,A=g*2;return p*=A,v*=A,b*=A,x*=2,T*=2,_*=2,u[0]=s+p+x,u[1]=r+v+T,u[2]=f+b+_,u}const n2=(function(){const u=[0,0,0],n=[0,0,0];return function(l,s){Ef(u,l),Ef(n,s),Af(u,u),Af(n,n);let r=am(u,n);return r>1?0:r<-1?Math.PI:Math.acos(r)}})();function i2(u,n){return u[0]===n[0]&&u[1]===n[1]&&u[2]===n[2]}class cn extends Array{constructor(n=0,l=n,s=n){return super(n,l,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(n){this[0]=n}set y(n){this[1]=n}set z(n){this[2]=n}set(n,l=n,s=n){return n.length?this.copy(n):(V_(this,n,l,s),this)}copy(n){return Ef(this,n),this}add(n,l){return l?b1(this,n,l):b1(this,this,n),this}sub(n,l){return l?T1(this,n,l):T1(this,this,n),this}multiply(n){return n.length?Q_(this,this,n):ff(this,this,n),this}divide(n){return n.length?Z_(this,this,n):ff(this,this,1/n),this}inverse(n=this){return F_(this,n),this}len(){return Va(this)}distance(n){return n?k_(this,n):Va(this)}squaredLen(){return E1(this)}squaredDistance(n){return n?K_(this,n):E1(this)}negate(n=this){return J_(this,n),this}cross(n,l){return l?A1(this,n,l):A1(this,this,n),this}scale(n){return ff(this,this,n),this}normalize(){return Af(this,this),this}dot(n){return am(this,n)}equals(n){return i2(this,n)}applyMatrix3(n){return t2(this,this,n),this}applyMatrix4(n){return P_(this,this,n),this}scaleRotateMatrix4(n){return I_(this,this,n),this}applyQuaternion(n){return e2(this,this,n),this}angle(n){return n2(this,n)}lerp(n,l){return $_(this,this,n,l),this}smoothLerp(n,l,s){return W_(this,this,n,l,s),this}clone(){return new cn(this[0],this[1],this[2])}fromArray(n,l=0){return this[0]=n[l],this[1]=n[l+1],this[2]=n[l+2],this}toArray(n=[],l=0){return n[l]=this[0],n[l+1]=this[1],n[l+2]=this[2],n}transformDirection(n){const l=this[0],s=this[1],r=this[2];return this[0]=n[0]*l+n[4]*s+n[8]*r,this[1]=n[1]*l+n[5]*s+n[9]*r,this[2]=n[2]*l+n[6]*s+n[10]*r,this.normalize()}}const M1=new cn;let l2=1,a2=1,z1=!1;class s2{constructor(n,l={}){n.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=n,this.attributes=l,this.id=l2++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in l)this.addAttribute(s,l[s])}addAttribute(n,l){if(this.attributes[n]=l,l.id=a2++,l.size=l.size||1,l.type=l.type||(l.data.constructor===Float32Array?this.gl.FLOAT:l.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),l.target=n==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,l.normalized=l.normalized||!1,l.stride=l.stride||0,l.offset=l.offset||0,l.count=l.count||(l.stride?l.data.byteLength/l.stride:l.data.length/l.size),l.divisor=l.instanced||0,l.needsUpdate=!1,l.usage=l.usage||this.gl.STATIC_DRAW,l.buffer||this.updateAttribute(l),l.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==l.count*l.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,l.count*l.divisor);this.instancedCount=l.count*l.divisor}else n==="index"?this.drawRange.count=l.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,l.count))}updateAttribute(n){const l=!n.buffer;l&&(n.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==n.buffer&&(this.gl.bindBuffer(n.target,n.buffer),this.glState.boundBuffer=n.buffer),l?this.gl.bufferData(n.target,n.data,n.usage):this.gl.bufferSubData(n.target,0,n.data),n.needsUpdate=!1}setIndex(n){this.addAttribute("index",n)}setDrawRange(n,l){this.drawRange.start=n,this.drawRange.count=l}setInstancedCount(n){this.instancedCount=n}createVAO(n){this.VAOs[n.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[n.attributeOrder]),this.bindAttributes(n)}bindAttributes(n){n.attributeLocations.forEach((l,{name:s,type:r})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const f=this.attributes[s];this.gl.bindBuffer(f.target,f.buffer),this.glState.boundBuffer=f.buffer;let h=1;r===35674&&(h=2),r===35675&&(h=3),r===35676&&(h=4);const d=f.size/h,m=h===1?0:h*h*4,g=h===1?0:h*4;for(let p=0;p<h;p++)this.gl.vertexAttribPointer(l+p,d,f.type,f.normalized,f.stride+m,f.offset+p*g),this.gl.enableVertexAttribArray(l+p),this.gl.renderer.vertexAttribDivisor(l+p,f.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:n,mode:l=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${n.attributeOrder}`&&(this.VAOs[n.attributeOrder]||this.createVAO(n),this.gl.renderer.bindVertexArray(this.VAOs[n.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${n.attributeOrder}`),n.attributeLocations.forEach((r,{name:f})=>{const h=this.attributes[f];h.needsUpdate&&this.updateAttribute(h)});let s=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(l,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(l,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(l,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(l,this.drawRange.start,this.drawRange.count)}getPosition(){const n=this.attributes.position;if(n.data)return n;if(!z1)return console.warn("No position buffer data found to compute bounds"),z1=!0}computeBoundingBox(n){n||(n=this.getPosition());const l=n.data,s=n.size;this.bounds||(this.bounds={min:new cn,max:new cn,center:new cn,scale:new cn,radius:1/0});const r=this.bounds.min,f=this.bounds.max,h=this.bounds.center,d=this.bounds.scale;r.set(1/0),f.set(-1/0);for(let m=0,g=l.length;m<g;m+=s){const p=l[m],v=l[m+1],b=l[m+2];r.x=Math.min(p,r.x),r.y=Math.min(v,r.y),r.z=Math.min(b,r.z),f.x=Math.max(p,f.x),f.y=Math.max(v,f.y),f.z=Math.max(b,f.z)}d.sub(f,r),h.add(r,f).divide(2)}computeBoundingSphere(n){n||(n=this.getPosition());const l=n.data,s=n.size;this.bounds||this.computeBoundingBox(n);let r=0;for(let f=0,h=l.length;f<h;f+=s)M1.fromArray(l,f),r=Math.max(r,this.bounds.center.squaredDistance(M1));this.bounds.radius=Math.sqrt(r)}remove(){for(let n in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[n]),delete this.VAOs[n];for(let n in this.attributes)this.gl.deleteBuffer(this.attributes[n].buffer),delete this.attributes[n]}}let u2=1;const O1={};class r2{constructor(n,{vertex:l,fragment:s,uniforms:r={},transparent:f=!1,cullFace:h=n.BACK,frontFace:d=n.CCW,depthTest:m=!0,depthWrite:g=!0,depthFunc:p=n.LEQUAL}={}){n.canvas||console.error("gl not passed as first argument to Program"),this.gl=n,this.uniforms=r,this.id=u2++,l||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=f,this.cullFace=h,this.frontFace=d,this.depthTest=m,this.depthWrite=g,this.depthFunc=p,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=n.createShader(n.VERTEX_SHADER),this.fragmentShader=n.createShader(n.FRAGMENT_SHADER),this.program=n.createProgram(),n.attachShader(this.program,this.vertexShader),n.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:l,fragment:s})}setShaders({vertex:n,fragment:l}){if(n&&(this.gl.shaderSource(this.vertexShader,n),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${C1(n)}`)),l&&(this.gl.shaderSource(this.fragmentShader,l),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${C1(l)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let h=0;h<s;h++){let d=this.gl.getActiveUniform(this.program,h);this.uniformLocations.set(d,this.gl.getUniformLocation(this.program,d.name));const m=d.name.match(/(\w+)/g);d.uniformName=m[0],d.nameComponents=m.slice(1)}this.attributeLocations=new Map;const r=[],f=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let h=0;h<f;h++){const d=this.gl.getActiveAttrib(this.program,h),m=this.gl.getAttribLocation(this.program,d.name);m!==-1&&(r[m]=d.name,this.attributeLocations.set(d,m))}this.attributeOrder=r.join("")}setBlendFunc(n,l,s,r){this.blendFunc.src=n,this.blendFunc.dst=l,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=r,n&&(this.transparent=!0)}setBlendEquation(n,l){this.blendEquation.modeRGB=n,this.blendEquation.modeAlpha=l}setStencilFunc(n,l,s){this.stencilRef=l,this.stencilFunc.func=n,this.stencilFunc.ref=l,this.stencilFunc.mask=s}setStencilOp(n,l,s){this.stencilOp.stencilFail=n,this.stencilOp.depthFail=l,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:n=!1}={}){let l=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,f)=>{let h=this.uniforms[f.uniformName];for(const d of f.nameComponents){if(!h)break;if(d in h)h=h[d];else{if(Array.isArray(h.value))break;h=void 0;break}}if(!h)return N1(`Active uniform ${f.name} has not been supplied`);if(h&&h.value===void 0)return N1(`${f.name} uniform is missing a value parameter`);if(h.value.texture)return l=l+1,h.value.update(l),of(this.gl,f.type,r,l);if(h.value.length&&h.value[0].texture){const d=[];return h.value.forEach(m=>{l=l+1,m.update(l),d.push(l)}),of(this.gl,f.type,r,d)}of(this.gl,f.type,r,h.value)}),this.applyState(),n&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function of(u,n,l,s){s=s.length?c2(s):s;const r=u.renderer.state.uniformLocations.get(l);if(s.length)if(r===void 0||r.length!==s.length)u.renderer.state.uniformLocations.set(l,s.slice(0));else{if(f2(r,s))return;r.set?r.set(s):o2(r,s),u.renderer.state.uniformLocations.set(l,r)}else{if(r===s)return;u.renderer.state.uniformLocations.set(l,s)}switch(n){case 5126:return s.length?u.uniform1fv(l,s):u.uniform1f(l,s);case 35664:return u.uniform2fv(l,s);case 35665:return u.uniform3fv(l,s);case 35666:return u.uniform4fv(l,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?u.uniform1iv(l,s):u.uniform1i(l,s);case 35671:case 35667:return u.uniform2iv(l,s);case 35672:case 35668:return u.uniform3iv(l,s);case 35673:case 35669:return u.uniform4iv(l,s);case 35674:return u.uniformMatrix2fv(l,!1,s);case 35675:return u.uniformMatrix3fv(l,!1,s);case 35676:return u.uniformMatrix4fv(l,!1,s)}}function C1(u){let n=u.split(`
`);for(let l=0;l<n.length;l++)n[l]=l+1+": "+n[l];return n.join(`
`)}function c2(u){const n=u.length,l=u[0].length;if(l===void 0)return u;const s=n*l;let r=O1[s];r||(O1[s]=r=new Float32Array(s));for(let f=0;f<n;f++)r.set(u[f],f*l);return r}function f2(u,n){if(u.length!==n.length)return!1;for(let l=0,s=u.length;l<s;l++)if(u[l]!==n[l])return!1;return!0}function o2(u,n){for(let l=0,s=u.length;l<s;l++)u[l]=n[l]}let hf=0;function N1(u){hf>100||(console.warn(u),hf++,hf>100&&console.warn("More than 100 program warnings - stopping logs."))}const df=new cn;let h2=1;class d2{constructor({canvas:n=document.createElement("canvas"),width:l=300,height:s=150,dpr:r=1,alpha:f=!1,depth:h=!0,stencil:d=!1,antialias:m=!1,premultipliedAlpha:g=!1,preserveDrawingBuffer:p=!1,powerPreference:v="default",autoClear:b=!0,webgl:x=2}={}){const T={alpha:f,depth:h,stencil:d,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:v};this.dpr=r,this.alpha=f,this.color=!0,this.depth=h,this.stencil=d,this.premultipliedAlpha=g,this.autoClear=b,this.id=h2++,x===2&&(this.gl=n.getContext("webgl2",T)),this.isWebgl2=!!this.gl,this.gl||(this.gl=n.getContext("webgl",T)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(l,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(n,l){this.width=n,this.height=l,this.gl.canvas.width=n*this.dpr,this.gl.canvas.height=l*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:n+"px",height:l+"px"})}setViewport(n,l,s=0,r=0){this.state.viewport.width===n&&this.state.viewport.height===l||(this.state.viewport.width=n,this.state.viewport.height=l,this.state.viewport.x=s,this.state.viewport.y=r,this.gl.viewport(s,r,n,l))}setScissor(n,l,s=0,r=0){this.gl.scissor(s,r,n,l)}enable(n){this.state[n]!==!0&&(this.gl.enable(n),this.state[n]=!0)}disable(n){this.state[n]!==!1&&(this.gl.disable(n),this.state[n]=!1)}setBlendFunc(n,l,s,r){this.state.blendFunc.src===n&&this.state.blendFunc.dst===l&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=n,this.state.blendFunc.dst=l,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=r,s!==void 0?this.gl.blendFuncSeparate(n,l,s,r):this.gl.blendFunc(n,l))}setBlendEquation(n,l){n=n||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===n&&this.state.blendEquation.modeAlpha===l)&&(this.state.blendEquation.modeRGB=n,this.state.blendEquation.modeAlpha=l,l!==void 0?this.gl.blendEquationSeparate(n,l):this.gl.blendEquation(n))}setCullFace(n){this.state.cullFace!==n&&(this.state.cullFace=n,this.gl.cullFace(n))}setFrontFace(n){this.state.frontFace!==n&&(this.state.frontFace=n,this.gl.frontFace(n))}setDepthMask(n){this.state.depthMask!==n&&(this.state.depthMask=n,this.gl.depthMask(n))}setDepthFunc(n){this.state.depthFunc!==n&&(this.state.depthFunc=n,this.gl.depthFunc(n))}setStencilMask(n){this.state.stencilMask!==n&&(this.state.stencilMask=n,this.gl.stencilMask(n))}setStencilFunc(n,l,s){this.state.stencilFunc===n&&this.state.stencilRef===l&&this.state.stencilFuncMask===s||(this.state.stencilFunc=n||this.gl.ALWAYS,this.state.stencilRef=l||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(n||this.gl.ALWAYS,l||0,s||0))}setStencilOp(n,l,s){this.state.stencilFail===n&&this.state.stencilDepthFail===l&&this.state.stencilDepthPass===s||(this.state.stencilFail=n,this.state.stencilDepthFail=l,this.state.stencilDepthPass=s,this.gl.stencilOp(n,l,s))}activeTexture(n){this.state.activeTextureUnit!==n&&(this.state.activeTextureUnit=n,this.gl.activeTexture(this.gl.TEXTURE0+n))}bindFramebuffer({target:n=this.gl.FRAMEBUFFER,buffer:l=null}={}){this.state.framebuffer!==l&&(this.state.framebuffer=l,this.gl.bindFramebuffer(n,l))}getExtension(n,l,s){return l&&this.gl[l]?this.gl[l].bind(this.gl):(this.extensions[n]||(this.extensions[n]=this.gl.getExtension(n)),l?this.extensions[n]?this.extensions[n][s].bind(this.extensions[n]):null:this.extensions[n])}sortOpaque(n,l){return n.renderOrder!==l.renderOrder?n.renderOrder-l.renderOrder:n.program.id!==l.program.id?n.program.id-l.program.id:n.zDepth!==l.zDepth?n.zDepth-l.zDepth:l.id-n.id}sortTransparent(n,l){return n.renderOrder!==l.renderOrder?n.renderOrder-l.renderOrder:n.zDepth!==l.zDepth?l.zDepth-n.zDepth:l.id-n.id}sortUI(n,l){return n.renderOrder!==l.renderOrder?n.renderOrder-l.renderOrder:n.program.id!==l.program.id?n.program.id-l.program.id:l.id-n.id}getRenderList({scene:n,camera:l,frustumCull:s,sort:r}){let f=[];if(l&&s&&l.updateFrustum(),n.traverse(h=>{if(!h.visible)return!0;h.draw&&(s&&h.frustumCulled&&l&&!l.frustumIntersectsMesh(h)||f.push(h))}),r){const h=[],d=[],m=[];f.forEach(g=>{g.program.transparent?g.program.depthTest?d.push(g):m.push(g):h.push(g),g.zDepth=0,!(g.renderOrder!==0||!g.program.depthTest||!l)&&(g.worldMatrix.getTranslation(df),df.applyMatrix4(l.projectionViewMatrix),g.zDepth=df.z)}),h.sort(this.sortOpaque),d.sort(this.sortTransparent),m.sort(this.sortUI),f=h.concat(d,m)}return f}render({scene:n,camera:l,target:s=null,update:r=!0,sort:f=!0,frustumCull:h=!0,clear:d}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(d||this.autoClear&&d!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&n.updateMatrixWorld(),l&&l.updateMatrixWorld(),this.getRenderList({scene:n,camera:l,frustumCull:h,sort:f}).forEach(g=>{g.draw({camera:l})})}}function m2(u,n){return u[0]=n[0],u[1]=n[1],u[2]=n[2],u[3]=n[3],u}function g2(u,n,l,s,r){return u[0]=n,u[1]=l,u[2]=s,u[3]=r,u}function y2(u,n){let l=n[0],s=n[1],r=n[2],f=n[3],h=l*l+s*s+r*r+f*f;return h>0&&(h=1/Math.sqrt(h)),u[0]=l*h,u[1]=s*h,u[2]=r*h,u[3]=f*h,u}function p2(u,n){return u[0]*n[0]+u[1]*n[1]+u[2]*n[2]+u[3]*n[3]}function _2(u){return u[0]=0,u[1]=0,u[2]=0,u[3]=1,u}function v2(u,n,l){l=l*.5;let s=Math.sin(l);return u[0]=s*n[0],u[1]=s*n[1],u[2]=s*n[2],u[3]=Math.cos(l),u}function D1(u,n,l){let s=n[0],r=n[1],f=n[2],h=n[3],d=l[0],m=l[1],g=l[2],p=l[3];return u[0]=s*p+h*d+r*g-f*m,u[1]=r*p+h*m+f*d-s*g,u[2]=f*p+h*g+s*m-r*d,u[3]=h*p-s*d-r*m-f*g,u}function S2(u,n,l){l*=.5;let s=n[0],r=n[1],f=n[2],h=n[3],d=Math.sin(l),m=Math.cos(l);return u[0]=s*m+h*d,u[1]=r*m+f*d,u[2]=f*m-r*d,u[3]=h*m-s*d,u}function x2(u,n,l){l*=.5;let s=n[0],r=n[1],f=n[2],h=n[3],d=Math.sin(l),m=Math.cos(l);return u[0]=s*m-f*d,u[1]=r*m+h*d,u[2]=f*m+s*d,u[3]=h*m-r*d,u}function b2(u,n,l){l*=.5;let s=n[0],r=n[1],f=n[2],h=n[3],d=Math.sin(l),m=Math.cos(l);return u[0]=s*m+r*d,u[1]=r*m-s*d,u[2]=f*m+h*d,u[3]=h*m-f*d,u}function T2(u,n,l,s){let r=n[0],f=n[1],h=n[2],d=n[3],m=l[0],g=l[1],p=l[2],v=l[3],b,x,T,_,A;return x=r*m+f*g+h*p+d*v,x<0&&(x=-x,m=-m,g=-g,p=-p,v=-v),1-x>1e-6?(b=Math.acos(x),T=Math.sin(b),_=Math.sin((1-s)*b)/T,A=Math.sin(s*b)/T):(_=1-s,A=s),u[0]=_*r+A*m,u[1]=_*f+A*g,u[2]=_*h+A*p,u[3]=_*d+A*v,u}function E2(u,n){let l=n[0],s=n[1],r=n[2],f=n[3],h=l*l+s*s+r*r+f*f,d=h?1/h:0;return u[0]=-l*d,u[1]=-s*d,u[2]=-r*d,u[3]=f*d,u}function A2(u,n){return u[0]=-n[0],u[1]=-n[1],u[2]=-n[2],u[3]=n[3],u}function M2(u,n){let l=n[0]+n[4]+n[8],s;if(l>0)s=Math.sqrt(l+1),u[3]=.5*s,s=.5/s,u[0]=(n[5]-n[7])*s,u[1]=(n[6]-n[2])*s,u[2]=(n[1]-n[3])*s;else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[r*3+r]&&(r=2);let f=(r+1)%3,h=(r+2)%3;s=Math.sqrt(n[r*3+r]-n[f*3+f]-n[h*3+h]+1),u[r]=.5*s,s=.5/s,u[3]=(n[f*3+h]-n[h*3+f])*s,u[f]=(n[f*3+r]+n[r*3+f])*s,u[h]=(n[h*3+r]+n[r*3+h])*s}return u}function z2(u,n,l="YXZ"){let s=Math.sin(n[0]*.5),r=Math.cos(n[0]*.5),f=Math.sin(n[1]*.5),h=Math.cos(n[1]*.5),d=Math.sin(n[2]*.5),m=Math.cos(n[2]*.5);return l==="XYZ"?(u[0]=s*h*m+r*f*d,u[1]=r*f*m-s*h*d,u[2]=r*h*d+s*f*m,u[3]=r*h*m-s*f*d):l==="YXZ"?(u[0]=s*h*m+r*f*d,u[1]=r*f*m-s*h*d,u[2]=r*h*d-s*f*m,u[3]=r*h*m+s*f*d):l==="ZXY"?(u[0]=s*h*m-r*f*d,u[1]=r*f*m+s*h*d,u[2]=r*h*d+s*f*m,u[3]=r*h*m-s*f*d):l==="ZYX"?(u[0]=s*h*m-r*f*d,u[1]=r*f*m+s*h*d,u[2]=r*h*d-s*f*m,u[3]=r*h*m+s*f*d):l==="YZX"?(u[0]=s*h*m+r*f*d,u[1]=r*f*m+s*h*d,u[2]=r*h*d-s*f*m,u[3]=r*h*m-s*f*d):l==="XZY"&&(u[0]=s*h*m-r*f*d,u[1]=r*f*m-s*h*d,u[2]=r*h*d+s*f*m,u[3]=r*h*m+s*f*d),u}const O2=m2,C2=g2,N2=p2,D2=y2;class R2 extends Array{constructor(n=0,l=0,s=0,r=1){super(n,l,s,r),this.onChange=()=>{},this._target=this;const f=["0","1","2","3"];return new Proxy(this,{set(h,d){const m=Reflect.set(...arguments);return m&&f.includes(d)&&h.onChange(),m}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(n){this._target[0]=n,this.onChange()}set y(n){this._target[1]=n,this.onChange()}set z(n){this._target[2]=n,this.onChange()}set w(n){this._target[3]=n,this.onChange()}identity(){return _2(this._target),this.onChange(),this}set(n,l,s,r){return n.length?this.copy(n):(C2(this._target,n,l,s,r),this.onChange(),this)}rotateX(n){return S2(this._target,this._target,n),this.onChange(),this}rotateY(n){return x2(this._target,this._target,n),this.onChange(),this}rotateZ(n){return b2(this._target,this._target,n),this.onChange(),this}inverse(n=this._target){return E2(this._target,n),this.onChange(),this}conjugate(n=this._target){return A2(this._target,n),this.onChange(),this}copy(n){return O2(this._target,n),this.onChange(),this}normalize(n=this._target){return D2(this._target,n),this.onChange(),this}multiply(n,l){return l?D1(this._target,n,l):D1(this._target,this._target,n),this.onChange(),this}dot(n){return N2(this._target,n)}fromMatrix3(n){return M2(this._target,n),this.onChange(),this}fromEuler(n,l){return z2(this._target,n,n.order),l||this.onChange(),this}fromAxisAngle(n,l){return v2(this._target,n,l),this.onChange(),this}slerp(n,l){return T2(this._target,this._target,n,l),this.onChange(),this}fromArray(n,l=0){return this._target[0]=n[l],this._target[1]=n[l+1],this._target[2]=n[l+2],this._target[3]=n[l+3],this.onChange(),this}toArray(n=[],l=0){return n[l]=this[0],n[l+1]=this[1],n[l+2]=this[2],n[l+3]=this[3],n}}const j2=1e-6;function U2(u,n){return u[0]=n[0],u[1]=n[1],u[2]=n[2],u[3]=n[3],u[4]=n[4],u[5]=n[5],u[6]=n[6],u[7]=n[7],u[8]=n[8],u[9]=n[9],u[10]=n[10],u[11]=n[11],u[12]=n[12],u[13]=n[13],u[14]=n[14],u[15]=n[15],u}function w2(u,n,l,s,r,f,h,d,m,g,p,v,b,x,T,_,A){return u[0]=n,u[1]=l,u[2]=s,u[3]=r,u[4]=f,u[5]=h,u[6]=d,u[7]=m,u[8]=g,u[9]=p,u[10]=v,u[11]=b,u[12]=x,u[13]=T,u[14]=_,u[15]=A,u}function B2(u){return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function L2(u,n){let l=n[0],s=n[1],r=n[2],f=n[3],h=n[4],d=n[5],m=n[6],g=n[7],p=n[8],v=n[9],b=n[10],x=n[11],T=n[12],_=n[13],A=n[14],z=n[15],U=l*d-s*h,N=l*m-r*h,j=l*g-f*h,D=s*m-r*d,H=s*g-f*d,q=r*g-f*m,K=p*_-v*T,X=p*A-b*T,W=p*z-x*T,et=v*A-b*_,P=v*z-x*_,nt=b*z-x*A,I=U*nt-N*P+j*et+D*W-H*X+q*K;return I?(I=1/I,u[0]=(d*nt-m*P+g*et)*I,u[1]=(r*P-s*nt-f*et)*I,u[2]=(_*q-A*H+z*D)*I,u[3]=(b*H-v*q-x*D)*I,u[4]=(m*W-h*nt-g*X)*I,u[5]=(l*nt-r*W+f*X)*I,u[6]=(A*j-T*q-z*N)*I,u[7]=(p*q-b*j+x*N)*I,u[8]=(h*P-d*W+g*K)*I,u[9]=(s*W-l*P-f*K)*I,u[10]=(T*H-_*j+z*U)*I,u[11]=(v*j-p*H-x*U)*I,u[12]=(d*X-h*et-m*K)*I,u[13]=(l*et-s*X+r*K)*I,u[14]=(_*N-T*D-A*U)*I,u[15]=(p*D-v*N+b*U)*I,u):null}function sm(u){let n=u[0],l=u[1],s=u[2],r=u[3],f=u[4],h=u[5],d=u[6],m=u[7],g=u[8],p=u[9],v=u[10],b=u[11],x=u[12],T=u[13],_=u[14],A=u[15],z=n*h-l*f,U=n*d-s*f,N=n*m-r*f,j=l*d-s*h,D=l*m-r*h,H=s*m-r*d,q=g*T-p*x,K=g*_-v*x,X=g*A-b*x,W=p*_-v*T,et=p*A-b*T,P=v*A-b*_;return z*P-U*et+N*W+j*X-D*K+H*q}function R1(u,n,l){let s=n[0],r=n[1],f=n[2],h=n[3],d=n[4],m=n[5],g=n[6],p=n[7],v=n[8],b=n[9],x=n[10],T=n[11],_=n[12],A=n[13],z=n[14],U=n[15],N=l[0],j=l[1],D=l[2],H=l[3];return u[0]=N*s+j*d+D*v+H*_,u[1]=N*r+j*m+D*b+H*A,u[2]=N*f+j*g+D*x+H*z,u[3]=N*h+j*p+D*T+H*U,N=l[4],j=l[5],D=l[6],H=l[7],u[4]=N*s+j*d+D*v+H*_,u[5]=N*r+j*m+D*b+H*A,u[6]=N*f+j*g+D*x+H*z,u[7]=N*h+j*p+D*T+H*U,N=l[8],j=l[9],D=l[10],H=l[11],u[8]=N*s+j*d+D*v+H*_,u[9]=N*r+j*m+D*b+H*A,u[10]=N*f+j*g+D*x+H*z,u[11]=N*h+j*p+D*T+H*U,N=l[12],j=l[13],D=l[14],H=l[15],u[12]=N*s+j*d+D*v+H*_,u[13]=N*r+j*m+D*b+H*A,u[14]=N*f+j*g+D*x+H*z,u[15]=N*h+j*p+D*T+H*U,u}function H2(u,n,l){let s=l[0],r=l[1],f=l[2],h,d,m,g,p,v,b,x,T,_,A,z;return n===u?(u[12]=n[0]*s+n[4]*r+n[8]*f+n[12],u[13]=n[1]*s+n[5]*r+n[9]*f+n[13],u[14]=n[2]*s+n[6]*r+n[10]*f+n[14],u[15]=n[3]*s+n[7]*r+n[11]*f+n[15]):(h=n[0],d=n[1],m=n[2],g=n[3],p=n[4],v=n[5],b=n[6],x=n[7],T=n[8],_=n[9],A=n[10],z=n[11],u[0]=h,u[1]=d,u[2]=m,u[3]=g,u[4]=p,u[5]=v,u[6]=b,u[7]=x,u[8]=T,u[9]=_,u[10]=A,u[11]=z,u[12]=h*s+p*r+T*f+n[12],u[13]=d*s+v*r+_*f+n[13],u[14]=m*s+b*r+A*f+n[14],u[15]=g*s+x*r+z*f+n[15]),u}function q2(u,n,l){let s=l[0],r=l[1],f=l[2];return u[0]=n[0]*s,u[1]=n[1]*s,u[2]=n[2]*s,u[3]=n[3]*s,u[4]=n[4]*r,u[5]=n[5]*r,u[6]=n[6]*r,u[7]=n[7]*r,u[8]=n[8]*f,u[9]=n[9]*f,u[10]=n[10]*f,u[11]=n[11]*f,u[12]=n[12],u[13]=n[13],u[14]=n[14],u[15]=n[15],u}function Y2(u,n,l,s){let r=s[0],f=s[1],h=s[2],d=Math.hypot(r,f,h),m,g,p,v,b,x,T,_,A,z,U,N,j,D,H,q,K,X,W,et,P,nt,I,ht;return Math.abs(d)<j2?null:(d=1/d,r*=d,f*=d,h*=d,m=Math.sin(l),g=Math.cos(l),p=1-g,v=n[0],b=n[1],x=n[2],T=n[3],_=n[4],A=n[5],z=n[6],U=n[7],N=n[8],j=n[9],D=n[10],H=n[11],q=r*r*p+g,K=f*r*p+h*m,X=h*r*p-f*m,W=r*f*p-h*m,et=f*f*p+g,P=h*f*p+r*m,nt=r*h*p+f*m,I=f*h*p-r*m,ht=h*h*p+g,u[0]=v*q+_*K+N*X,u[1]=b*q+A*K+j*X,u[2]=x*q+z*K+D*X,u[3]=T*q+U*K+H*X,u[4]=v*W+_*et+N*P,u[5]=b*W+A*et+j*P,u[6]=x*W+z*et+D*P,u[7]=T*W+U*et+H*P,u[8]=v*nt+_*I+N*ht,u[9]=b*nt+A*I+j*ht,u[10]=x*nt+z*I+D*ht,u[11]=T*nt+U*I+H*ht,n!==u&&(u[12]=n[12],u[13]=n[13],u[14]=n[14],u[15]=n[15]),u)}function G2(u,n){return u[0]=n[12],u[1]=n[13],u[2]=n[14],u}function um(u,n){let l=n[0],s=n[1],r=n[2],f=n[4],h=n[5],d=n[6],m=n[8],g=n[9],p=n[10];return u[0]=Math.hypot(l,s,r),u[1]=Math.hypot(f,h,d),u[2]=Math.hypot(m,g,p),u}function X2(u){let n=u[0],l=u[1],s=u[2],r=u[4],f=u[5],h=u[6],d=u[8],m=u[9],g=u[10];const p=n*n+l*l+s*s,v=r*r+f*f+h*h,b=d*d+m*m+g*g;return Math.sqrt(Math.max(p,v,b))}const rm=(function(){const u=[1,1,1];return function(n,l){let s=u;um(s,l);let r=1/s[0],f=1/s[1],h=1/s[2],d=l[0]*r,m=l[1]*f,g=l[2]*h,p=l[4]*r,v=l[5]*f,b=l[6]*h,x=l[8]*r,T=l[9]*f,_=l[10]*h,A=d+v+_,z=0;return A>0?(z=Math.sqrt(A+1)*2,n[3]=.25*z,n[0]=(b-T)/z,n[1]=(x-g)/z,n[2]=(m-p)/z):d>v&&d>_?(z=Math.sqrt(1+d-v-_)*2,n[3]=(b-T)/z,n[0]=.25*z,n[1]=(m+p)/z,n[2]=(x+g)/z):v>_?(z=Math.sqrt(1+v-d-_)*2,n[3]=(x-g)/z,n[0]=(m+p)/z,n[1]=.25*z,n[2]=(b+T)/z):(z=Math.sqrt(1+_-d-v)*2,n[3]=(m-p)/z,n[0]=(x+g)/z,n[1]=(b+T)/z,n[2]=.25*z),n}})();function V2(u,n,l,s){let r=Va([u[0],u[1],u[2]]);const f=Va([u[4],u[5],u[6]]),h=Va([u[8],u[9],u[10]]);sm(u)<0&&(r=-r),l[0]=u[12],l[1]=u[13],l[2]=u[14];const m=u.slice(),g=1/r,p=1/f,v=1/h;m[0]*=g,m[1]*=g,m[2]*=g,m[4]*=p,m[5]*=p,m[6]*=p,m[8]*=v,m[9]*=v,m[10]*=v,rm(n,m),s[0]=r,s[1]=f,s[2]=h}function Q2(u,n,l,s){const r=u,f=n[0],h=n[1],d=n[2],m=n[3],g=f+f,p=h+h,v=d+d,b=f*g,x=f*p,T=f*v,_=h*p,A=h*v,z=d*v,U=m*g,N=m*p,j=m*v,D=s[0],H=s[1],q=s[2];return r[0]=(1-(_+z))*D,r[1]=(x+j)*D,r[2]=(T-N)*D,r[3]=0,r[4]=(x-j)*H,r[5]=(1-(b+z))*H,r[6]=(A+U)*H,r[7]=0,r[8]=(T+N)*q,r[9]=(A-U)*q,r[10]=(1-(b+_))*q,r[11]=0,r[12]=l[0],r[13]=l[1],r[14]=l[2],r[15]=1,r}function Z2(u,n){let l=n[0],s=n[1],r=n[2],f=n[3],h=l+l,d=s+s,m=r+r,g=l*h,p=s*h,v=s*d,b=r*h,x=r*d,T=r*m,_=f*h,A=f*d,z=f*m;return u[0]=1-v-T,u[1]=p+z,u[2]=b-A,u[3]=0,u[4]=p-z,u[5]=1-g-T,u[6]=x+_,u[7]=0,u[8]=b+A,u[9]=x-_,u[10]=1-g-v,u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,u}function k2(u,n,l,s,r){let f=1/Math.tan(n/2),h=1/(s-r);return u[0]=f/l,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=f,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=(r+s)*h,u[11]=-1,u[12]=0,u[13]=0,u[14]=2*r*s*h,u[15]=0,u}function K2(u,n,l,s,r,f,h){let d=1/(n-l),m=1/(s-r),g=1/(f-h);return u[0]=-2*d,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=-2*m,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=2*g,u[11]=0,u[12]=(n+l)*d,u[13]=(r+s)*m,u[14]=(h+f)*g,u[15]=1,u}function J2(u,n,l,s){let r=n[0],f=n[1],h=n[2],d=s[0],m=s[1],g=s[2],p=r-l[0],v=f-l[1],b=h-l[2],x=p*p+v*v+b*b;x===0?b=1:(x=1/Math.sqrt(x),p*=x,v*=x,b*=x);let T=m*b-g*v,_=g*p-d*b,A=d*v-m*p;return x=T*T+_*_+A*A,x===0&&(g?d+=1e-6:m?g+=1e-6:m+=1e-6,T=m*b-g*v,_=g*p-d*b,A=d*v-m*p,x=T*T+_*_+A*A),x=1/Math.sqrt(x),T*=x,_*=x,A*=x,u[0]=T,u[1]=_,u[2]=A,u[3]=0,u[4]=v*A-b*_,u[5]=b*T-p*A,u[6]=p*_-v*T,u[7]=0,u[8]=p,u[9]=v,u[10]=b,u[11]=0,u[12]=r,u[13]=f,u[14]=h,u[15]=1,u}function j1(u,n,l){return u[0]=n[0]+l[0],u[1]=n[1]+l[1],u[2]=n[2]+l[2],u[3]=n[3]+l[3],u[4]=n[4]+l[4],u[5]=n[5]+l[5],u[6]=n[6]+l[6],u[7]=n[7]+l[7],u[8]=n[8]+l[8],u[9]=n[9]+l[9],u[10]=n[10]+l[10],u[11]=n[11]+l[11],u[12]=n[12]+l[12],u[13]=n[13]+l[13],u[14]=n[14]+l[14],u[15]=n[15]+l[15],u}function U1(u,n,l){return u[0]=n[0]-l[0],u[1]=n[1]-l[1],u[2]=n[2]-l[2],u[3]=n[3]-l[3],u[4]=n[4]-l[4],u[5]=n[5]-l[5],u[6]=n[6]-l[6],u[7]=n[7]-l[7],u[8]=n[8]-l[8],u[9]=n[9]-l[9],u[10]=n[10]-l[10],u[11]=n[11]-l[11],u[12]=n[12]-l[12],u[13]=n[13]-l[13],u[14]=n[14]-l[14],u[15]=n[15]-l[15],u}function F2(u,n,l){return u[0]=n[0]*l,u[1]=n[1]*l,u[2]=n[2]*l,u[3]=n[3]*l,u[4]=n[4]*l,u[5]=n[5]*l,u[6]=n[6]*l,u[7]=n[7]*l,u[8]=n[8]*l,u[9]=n[9]*l,u[10]=n[10]*l,u[11]=n[11]*l,u[12]=n[12]*l,u[13]=n[13]*l,u[14]=n[14]*l,u[15]=n[15]*l,u}class Au extends Array{constructor(n=1,l=0,s=0,r=0,f=0,h=1,d=0,m=0,g=0,p=0,v=1,b=0,x=0,T=0,_=0,A=1){return super(n,l,s,r,f,h,d,m,g,p,v,b,x,T,_,A),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(n){this[12]=n}set y(n){this[13]=n}set z(n){this[14]=n}set w(n){this[15]=n}set(n,l,s,r,f,h,d,m,g,p,v,b,x,T,_,A){return n.length?this.copy(n):(w2(this,n,l,s,r,f,h,d,m,g,p,v,b,x,T,_,A),this)}translate(n,l=this){return H2(this,l,n),this}rotate(n,l,s=this){return Y2(this,s,n,l),this}scale(n,l=this){return q2(this,l,typeof n=="number"?[n,n,n]:n),this}add(n,l){return l?j1(this,n,l):j1(this,this,n),this}sub(n,l){return l?U1(this,n,l):U1(this,this,n),this}multiply(n,l){return n.length?l?R1(this,n,l):R1(this,this,n):F2(this,this,n),this}identity(){return B2(this),this}copy(n){return U2(this,n),this}fromPerspective({fov:n,aspect:l,near:s,far:r}={}){return k2(this,n,l,s,r),this}fromOrthogonal({left:n,right:l,bottom:s,top:r,near:f,far:h}){return K2(this,n,l,s,r,f,h),this}fromQuaternion(n){return Z2(this,n),this}setPosition(n){return this.x=n[0],this.y=n[1],this.z=n[2],this}inverse(n=this){return L2(this,n),this}compose(n,l,s){return Q2(this,n,l,s),this}decompose(n,l,s){return V2(this,n,l,s),this}getRotation(n){return rm(n,this),this}getTranslation(n){return G2(n,this),this}getScaling(n){return um(n,this),this}getMaxScaleOnAxis(){return X2(this)}lookAt(n,l,s){return J2(this,n,l,s),this}determinant(){return sm(this)}fromArray(n,l=0){return this[0]=n[l],this[1]=n[l+1],this[2]=n[l+2],this[3]=n[l+3],this[4]=n[l+4],this[5]=n[l+5],this[6]=n[l+6],this[7]=n[l+7],this[8]=n[l+8],this[9]=n[l+9],this[10]=n[l+10],this[11]=n[l+11],this[12]=n[l+12],this[13]=n[l+13],this[14]=n[l+14],this[15]=n[l+15],this}toArray(n=[],l=0){return n[l]=this[0],n[l+1]=this[1],n[l+2]=this[2],n[l+3]=this[3],n[l+4]=this[4],n[l+5]=this[5],n[l+6]=this[6],n[l+7]=this[7],n[l+8]=this[8],n[l+9]=this[9],n[l+10]=this[10],n[l+11]=this[11],n[l+12]=this[12],n[l+13]=this[13],n[l+14]=this[14],n[l+15]=this[15],n}}function $2(u,n,l="YXZ"){return l==="XYZ"?(u[1]=Math.asin(Math.min(Math.max(n[8],-1),1)),Math.abs(n[8])<.99999?(u[0]=Math.atan2(-n[9],n[10]),u[2]=Math.atan2(-n[4],n[0])):(u[0]=Math.atan2(n[6],n[5]),u[2]=0)):l==="YXZ"?(u[0]=Math.asin(-Math.min(Math.max(n[9],-1),1)),Math.abs(n[9])<.99999?(u[1]=Math.atan2(n[8],n[10]),u[2]=Math.atan2(n[1],n[5])):(u[1]=Math.atan2(-n[2],n[0]),u[2]=0)):l==="ZXY"?(u[0]=Math.asin(Math.min(Math.max(n[6],-1),1)),Math.abs(n[6])<.99999?(u[1]=Math.atan2(-n[2],n[10]),u[2]=Math.atan2(-n[4],n[5])):(u[1]=0,u[2]=Math.atan2(n[1],n[0]))):l==="ZYX"?(u[1]=Math.asin(-Math.min(Math.max(n[2],-1),1)),Math.abs(n[2])<.99999?(u[0]=Math.atan2(n[6],n[10]),u[2]=Math.atan2(n[1],n[0])):(u[0]=0,u[2]=Math.atan2(-n[4],n[5]))):l==="YZX"?(u[2]=Math.asin(Math.min(Math.max(n[1],-1),1)),Math.abs(n[1])<.99999?(u[0]=Math.atan2(-n[9],n[5]),u[1]=Math.atan2(-n[2],n[0])):(u[0]=0,u[1]=Math.atan2(n[8],n[10]))):l==="XZY"&&(u[2]=Math.asin(-Math.min(Math.max(n[4],-1),1)),Math.abs(n[4])<.99999?(u[0]=Math.atan2(n[6],n[5]),u[1]=Math.atan2(n[8],n[0])):(u[0]=Math.atan2(-n[9],n[10]),u[1]=0)),u}const w1=new Au;class W2 extends Array{constructor(n=0,l=n,s=n,r="YXZ"){super(n,l,s),this.order=r,this.onChange=()=>{},this._target=this;const f=["0","1","2"];return new Proxy(this,{set(h,d){const m=Reflect.set(...arguments);return m&&f.includes(d)&&h.onChange(),m}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(n){this._target[0]=n,this.onChange()}set y(n){this._target[1]=n,this.onChange()}set z(n){this._target[2]=n,this.onChange()}set(n,l=n,s=n){return n.length?this.copy(n):(this._target[0]=n,this._target[1]=l,this._target[2]=s,this.onChange(),this)}copy(n){return this._target[0]=n[0],this._target[1]=n[1],this._target[2]=n[2],this.onChange(),this}reorder(n){return this._target.order=n,this.onChange(),this}fromRotationMatrix(n,l=this.order){return $2(this._target,n,l),this.onChange(),this}fromQuaternion(n,l=this.order,s){return w1.fromQuaternion(n),this._target.fromRotationMatrix(w1,l),s||this.onChange(),this}fromArray(n,l=0){return this._target[0]=n[l],this._target[1]=n[l+1],this._target[2]=n[l+2],this}toArray(n=[],l=0){return n[l]=this[0],n[l+1]=this[1],n[l+2]=this[2],n}}class P2{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Au,this.worldMatrix=new Au,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new cn,this.quaternion=new R2,this.scale=new cn(1),this.rotation=new W2,this.up=new cn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(n,l=!0){this.parent&&n!==this.parent&&this.parent.removeChild(this,!1),this.parent=n,l&&n&&n.addChild(this,!1)}addChild(n,l=!0){~this.children.indexOf(n)||this.children.push(n),l&&n.setParent(this,!1)}removeChild(n,l=!0){~this.children.indexOf(n)&&this.children.splice(this.children.indexOf(n),1),l&&n.setParent(null,!1)}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||n)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,n=!0);for(let l=0,s=this.children.length;l<s;l++)this.children[l].updateMatrixWorld(n)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(n){if(!n(this))for(let l=0,s=this.children.length;l<s;l++)this.children[l].traverse(n)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(n,l=!1){l?this.matrix.lookAt(this.position,n,this.up):this.matrix.lookAt(n,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function I2(u,n){return u[0]=n[0],u[1]=n[1],u[2]=n[2],u[3]=n[4],u[4]=n[5],u[5]=n[6],u[6]=n[8],u[7]=n[9],u[8]=n[10],u}function tv(u,n){let l=n[0],s=n[1],r=n[2],f=n[3],h=l+l,d=s+s,m=r+r,g=l*h,p=s*h,v=s*d,b=r*h,x=r*d,T=r*m,_=f*h,A=f*d,z=f*m;return u[0]=1-v-T,u[3]=p-z,u[6]=b+A,u[1]=p+z,u[4]=1-g-T,u[7]=x-_,u[2]=b-A,u[5]=x+_,u[8]=1-g-v,u}function ev(u,n){return u[0]=n[0],u[1]=n[1],u[2]=n[2],u[3]=n[3],u[4]=n[4],u[5]=n[5],u[6]=n[6],u[7]=n[7],u[8]=n[8],u}function nv(u,n,l,s,r,f,h,d,m,g){return u[0]=n,u[1]=l,u[2]=s,u[3]=r,u[4]=f,u[5]=h,u[6]=d,u[7]=m,u[8]=g,u}function iv(u){return u[0]=1,u[1]=0,u[2]=0,u[3]=0,u[4]=1,u[5]=0,u[6]=0,u[7]=0,u[8]=1,u}function lv(u,n){let l=n[0],s=n[1],r=n[2],f=n[3],h=n[4],d=n[5],m=n[6],g=n[7],p=n[8],v=p*h-d*g,b=-p*f+d*m,x=g*f-h*m,T=l*v+s*b+r*x;return T?(T=1/T,u[0]=v*T,u[1]=(-p*s+r*g)*T,u[2]=(d*s-r*h)*T,u[3]=b*T,u[4]=(p*l-r*m)*T,u[5]=(-d*l+r*f)*T,u[6]=x*T,u[7]=(-g*l+s*m)*T,u[8]=(h*l-s*f)*T,u):null}function B1(u,n,l){let s=n[0],r=n[1],f=n[2],h=n[3],d=n[4],m=n[5],g=n[6],p=n[7],v=n[8],b=l[0],x=l[1],T=l[2],_=l[3],A=l[4],z=l[5],U=l[6],N=l[7],j=l[8];return u[0]=b*s+x*h+T*g,u[1]=b*r+x*d+T*p,u[2]=b*f+x*m+T*v,u[3]=_*s+A*h+z*g,u[4]=_*r+A*d+z*p,u[5]=_*f+A*m+z*v,u[6]=U*s+N*h+j*g,u[7]=U*r+N*d+j*p,u[8]=U*f+N*m+j*v,u}function av(u,n,l){let s=n[0],r=n[1],f=n[2],h=n[3],d=n[4],m=n[5],g=n[6],p=n[7],v=n[8],b=l[0],x=l[1];return u[0]=s,u[1]=r,u[2]=f,u[3]=h,u[4]=d,u[5]=m,u[6]=b*s+x*h+g,u[7]=b*r+x*d+p,u[8]=b*f+x*m+v,u}function sv(u,n,l){let s=n[0],r=n[1],f=n[2],h=n[3],d=n[4],m=n[5],g=n[6],p=n[7],v=n[8],b=Math.sin(l),x=Math.cos(l);return u[0]=x*s+b*h,u[1]=x*r+b*d,u[2]=x*f+b*m,u[3]=x*h-b*s,u[4]=x*d-b*r,u[5]=x*m-b*f,u[6]=g,u[7]=p,u[8]=v,u}function uv(u,n,l){let s=l[0],r=l[1];return u[0]=s*n[0],u[1]=s*n[1],u[2]=s*n[2],u[3]=r*n[3],u[4]=r*n[4],u[5]=r*n[5],u[6]=n[6],u[7]=n[7],u[8]=n[8],u}function rv(u,n){let l=n[0],s=n[1],r=n[2],f=n[3],h=n[4],d=n[5],m=n[6],g=n[7],p=n[8],v=n[9],b=n[10],x=n[11],T=n[12],_=n[13],A=n[14],z=n[15],U=l*d-s*h,N=l*m-r*h,j=l*g-f*h,D=s*m-r*d,H=s*g-f*d,q=r*g-f*m,K=p*_-v*T,X=p*A-b*T,W=p*z-x*T,et=v*A-b*_,P=v*z-x*_,nt=b*z-x*A,I=U*nt-N*P+j*et+D*W-H*X+q*K;return I?(I=1/I,u[0]=(d*nt-m*P+g*et)*I,u[1]=(m*W-h*nt-g*X)*I,u[2]=(h*P-d*W+g*K)*I,u[3]=(r*P-s*nt-f*et)*I,u[4]=(l*nt-r*W+f*X)*I,u[5]=(s*W-l*P-f*K)*I,u[6]=(_*q-A*H+z*D)*I,u[7]=(A*j-T*q-z*N)*I,u[8]=(T*H-_*j+z*U)*I,u):null}class cv extends Array{constructor(n=1,l=0,s=0,r=0,f=1,h=0,d=0,m=0,g=1){return super(n,l,s,r,f,h,d,m,g),this}set(n,l,s,r,f,h,d,m,g){return n.length?this.copy(n):(nv(this,n,l,s,r,f,h,d,m,g),this)}translate(n,l=this){return av(this,l,n),this}rotate(n,l=this){return sv(this,l,n),this}scale(n,l=this){return uv(this,l,n),this}multiply(n,l){return l?B1(this,n,l):B1(this,this,n),this}identity(){return iv(this),this}copy(n){return ev(this,n),this}fromMatrix4(n){return I2(this,n),this}fromQuaternion(n){return tv(this,n),this}fromBasis(n,l,s){return this.set(n[0],n[1],n[2],l[0],l[1],l[2],s[0],s[1],s[2]),this}inverse(n=this){return lv(this,n),this}getNormalMatrix(n){return rv(this,n),this}}let fv=0;class ov extends P2{constructor(n,{geometry:l,program:s,mode:r=n.TRIANGLES,frustumCulled:f=!0,renderOrder:h=0}={}){super(),n.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=n,this.id=fv++,this.geometry=l,this.program=s,this.mode=r,this.frustumCulled=f,this.renderOrder=h,this.modelViewMatrix=new Au,this.normalMatrix=new cv,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(n){return this.beforeRenderCallbacks.push(n),this}onAfterRender(n){return this.afterRenderCallbacks.push(n),this}draw({camera:n}={}){n&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=n.projectionMatrix,this.program.uniforms.cameraPosition.value=n.worldPosition,this.program.uniforms.viewMatrix.value=n.viewMatrix,this.modelViewMatrix.multiply(n.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:n}));let l=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:l}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:n}))}}const L1={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function H1(u){u.length===4&&(u=u[0]+u[1]+u[1]+u[2]+u[2]+u[3]+u[3]);const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);return n||console.warn(`Unable to convert hex string ${u} to rgb values`),[parseInt(n[1],16)/255,parseInt(n[2],16)/255,parseInt(n[3],16)/255]}function hv(u){return u=parseInt(u),[(u>>16&255)/255,(u>>8&255)/255,(u&255)/255]}function q1(u){return u===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(u)?u[0]==="#"?H1(u):L1[u.toLowerCase()]?H1(L1[u.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):hv(u)}class Y1 extends Array{constructor(n){return Array.isArray(n)?super(...n):super(...q1(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(n){this[0]=n}set g(n){this[1]=n}set b(n){this[2]=n}set(n){return Array.isArray(n)?this.copy(n):this.copy(q1(...arguments))}copy(n){return this[0]=n[0],this[1]=n[1],this[2]=n[2],this}}class dv extends s2{constructor(n,{attributes:l={}}={}){Object.assign(l,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(n,l)}}const mv=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,gv=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;function yv(u){const{colorStops:n=["#5227FF","#7cff67","#5227FF"],amplitude:l=1,blend:s=.5}=u,r=rt.useRef(u);r.current=u;const f=rt.useRef(null);return rt.useEffect(()=>{const h=f.current;if(!h)return;const d=new d2({alpha:!0,premultipliedAlpha:!0,antialias:!0}),m=d.gl;m.clearColor(0,0,0,0),m.enable(m.BLEND),m.blendFunc(m.ONE,m.ONE_MINUS_SRC_ALPHA),m.canvas.style.backgroundColor="transparent";let g;function p(){if(!h)return;const A=h.offsetWidth,z=h.offsetHeight;d.setSize(A,z),g&&(g.uniforms.uResolution.value=[A,z])}window.addEventListener("resize",p);const v=new dv(m);v.attributes.uv&&delete v.attributes.uv;const b=n.map(A=>{const z=new Y1(A);return[z.r,z.g,z.b]});g=new r2(m,{vertex:mv,fragment:gv,uniforms:{uTime:{value:0},uAmplitude:{value:l},uColorStops:{value:b},uResolution:{value:[h.offsetWidth,h.offsetHeight]},uBlend:{value:s}}});const x=new ov(m,{geometry:v,program:g});h.appendChild(m.canvas);let T=0;const _=A=>{T=requestAnimationFrame(_);const{time:z=A*.01,speed:U=1}=r.current;if(g){g.uniforms.uTime.value=z*U*.1,g.uniforms.uAmplitude.value=r.current.amplitude??1,g.uniforms.uBlend.value=r.current.blend??s;const N=r.current.colorStops??n;g.uniforms.uColorStops.value=N.map(j=>{const D=new Y1(j);return[D.r,D.g,D.b]}),d.render({scene:x})}};return T=requestAnimationFrame(_),p(),()=>{cancelAnimationFrame(T),window.removeEventListener("resize",p),h&&m.canvas.parentNode===h&&h.removeChild(m.canvas),m.getExtension("WEBGL_lose_context")?.loseContext()}},[l,s,n]),E.jsx("div",{ref:f,className:"aurora-container"})}const pv=()=>{const u=rt.useRef(null),n=rt.useRef(null),l=rt.useRef(null),s="Приватность в интернете стала роскошью, а не правом.",r="Мы вернули её вам. Надёжное шифрование и нулевой след.",f="Ваша переписка остаётся вашей. Всегда.";return rt.useEffect(()=>{const h=(p,v,b)=>{p&&setTimeout(()=>{let x=0;const T=setInterval(()=>{x<v.length?(p.textContent=v.substring(0,x+1)+"|",x++):(p.textContent=v,clearInterval(T))},70)},b)},m=300+s.length*70+200,g=m+r.length*70+200;h(u.current,s,300),h(n.current,r,m),h(l.current,f,g)},[]),E.jsxs("section",{className:"hero-section",id:"hero",children:[E.jsx(yv,{colorStops:["#6366f1","#8b5cf6","#4338ca"],blend:.5,amplitude:.5,speed:.5}),E.jsxs("div",{className:"hero-content",children:[E.jsxs("h1",{className:"hero-title",children:["Общайся свободно.",E.jsx("br",{}),"Остайся невидимым."]}),E.jsx("div",{className:"hero-description-badge",children:E.jsxs("p",{className:"hero-description",children:[E.jsx("span",{ref:u}),E.jsx("br",{}),E.jsx("span",{ref:n,className:"hero-description-highlight"}),E.jsx("br",{}),E.jsx("span",{ref:l})]})}),E.jsxs("div",{className:"hero-buttons",children:[E.jsxs("button",{className:"hero-button primary",children:[E.jsx("span",{children:"Скачать CryptoX"}),E.jsx("span",{className:"button-arrow",children:"→"})]}),E.jsx("button",{className:"hero-button secondary",children:E.jsx("span",{children:"Попробовать веб-версию"})})]}),E.jsxs("div",{className:"hero-stats",children:[E.jsxs("div",{className:"stat-item",children:[E.jsx(wl,{className:"stat-icon",size:40,strokeWidth:1.5}),E.jsx("div",{className:"stat-value",children:"Многослойная защита"}),E.jsxs("div",{className:"stat-label",children:["Комбинация алгоритмов военного класса с постоянной ротацией ключей.",E.jsx("br",{}),"Каждое сообщение шифруется уникально. Взлом одного не открывает остальные.",E.jsx("br",{}),E.jsx("span",{className:"stat-tech",children:"XChaCha20-Poly1305, AES-256-GCM, Signal Protocol"})]})]}),E.jsx("div",{className:"stat-divider"}),E.jsxs("div",{className:"stat-item",children:[E.jsx(d_,{className:"stat-icon",size:40,strokeWidth:1.5}),E.jsx("div",{className:"stat-value",children:"Zero-Knowledge"}),E.jsxs("div",{className:"stat-label",children:["Сервер физически не может прочитать ваши данные.",E.jsx("br",{}),"Ключи только на вашем устройстве. Даже мы не знаем, о чем вы пишете.",E.jsx("br",{}),E.jsx("span",{className:"stat-tech",children:"E2EE, Perfect Forward Secrecy, Hardware Security"})]})]}),E.jsx("div",{className:"stat-divider"}),E.jsxs("div",{className:"stat-item",children:[E.jsx(Su,{className:"stat-icon",size:40,strokeWidth:1.5}),E.jsx("div",{className:"stat-value",children:"Анти-форензика"}),E.jsxs("div",{className:"stat-label",children:["Метаданные не существуют. IP адреса не сохраняются.",E.jsx("br",{}),"Следы уничтожаются мгновенно. Даже при изъятии серверов — ничего не найдут.",E.jsx("br",{}),E.jsx("span",{className:"stat-tech",children:"Tor Integration, Sealed Sender, RAM-only"})]})]})]})]})]})};function Bn(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function cm(u,n){u.prototype=Object.create(n.prototype),u.prototype.constructor=u,u.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ql={duration:.5,overwrite:!1,delay:0},Xf,ce,Ht,nn=1e8,Ut=1/nn,Mf=Math.PI*2,_v=Mf/4,vv=0,fm=Math.sqrt,Sv=Math.cos,xv=Math.sin,ie=function(n){return typeof n=="string"},Vt=function(n){return typeof n=="function"},Hn=function(n){return typeof n=="number"},Vf=function(n){return typeof n>"u"},pn=function(n){return typeof n=="object"},Ee=function(n){return n!==!1},Qf=function(){return typeof window<"u"},vu=function(n){return Vt(n)||ie(n)},om=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},he=Array.isArray,zf=/(?:-?\.?\d|\.)+/gi,hm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dm=/[+-]=-?[.\d]+/,mm=/[^,'"\[\]\s]+/gi,bv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,mn,Of,Zf,Ve={},Mu={},gm,ym=function(n){return(Mu=Yl(n,Ve))&&Oe},kf=function(n,l){return console.warn("Invalid property",n,"set to",l,"Missing plugin? gsap.registerPlugin()")},Ka=function(n,l){return!l&&console.warn(n)},pm=function(n,l){return n&&(Ve[n]=l)&&Mu&&(Mu[n]=l)||Ve},Ja=function(){return 0},Tv={suppressEvents:!0,isStart:!0,kill:!1},bu={suppressEvents:!0,kill:!1},Ev={suppressEvents:!0},Kf={},mi=[],Cf={},_m,qe={},gf={},G1=30,Tu=[],Jf="",Ff=function(n){var l=n[0],s,r;if(pn(l)||Vt(l)||(n=[n]),!(s=(l._gsap||{}).harness)){for(r=Tu.length;r--&&!Tu[r].targetTest(l););s=Tu[r]}for(r=n.length;r--;)n[r]&&(n[r]._gsap||(n[r]._gsap=new Xm(n[r],s)))||n.splice(r,1);return n},Xi=function(n){return n._gsap||Ff(ln(n))[0]._gsap},vm=function(n,l,s){return(s=n[l])&&Vt(s)?n[l]():Vf(s)&&n.getAttribute&&n.getAttribute(l)||s},Ae=function(n,l){return(n=n.split(",")).forEach(l)||n},Kt=function(n){return Math.round(n*1e5)/1e5||0},It=function(n){return Math.round(n*1e7)/1e7||0},Bl=function(n,l){var s=l.charAt(0),r=parseFloat(l.substr(2));return n=parseFloat(n),s==="+"?n+r:s==="-"?n-r:s==="*"?n*r:n/r},Av=function(n,l){for(var s=l.length,r=0;n.indexOf(l[r])<0&&++r<s;);return r<s},zu=function(){var n=mi.length,l=mi.slice(0),s,r;for(Cf={},mi.length=0,s=0;s<n;s++)r=l[s],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},$f=function(n){return!!(n._initted||n._startAt||n.add)},Sm=function(n,l,s,r){mi.length&&!ce&&zu(),n.render(l,s,!!(ce&&l<0&&$f(n))),mi.length&&!ce&&zu()},xm=function(n){var l=parseFloat(n);return(l||l===0)&&(n+"").match(mm).length<2?l:ie(n)?n.trim():n},bm=function(n){return n},Qe=function(n,l){for(var s in l)s in n||(n[s]=l[s]);return n},Mv=function(n){return function(l,s){for(var r in s)r in l||r==="duration"&&n||r==="ease"||(l[r]=s[r])}},Yl=function(n,l){for(var s in l)n[s]=l[s];return n},X1=function u(n,l){for(var s in l)s!=="__proto__"&&s!=="constructor"&&s!=="prototype"&&(n[s]=pn(l[s])?u(n[s]||(n[s]={}),l[s]):l[s]);return n},Ou=function(n,l){var s={},r;for(r in n)r in l||(s[r]=n[r]);return s},Qa=function(n){var l=n.parent||qt,s=n.keyframes?Mv(he(n.keyframes)):Qe;if(Ee(n.inherit))for(;l;)s(n,l.vars.defaults),l=l.parent||l._dp;return n},zv=function(n,l){for(var s=n.length,r=s===l.length;r&&s--&&n[s]===l[s];);return s<0},Tm=function(n,l,s,r,f){var h=n[r],d;if(f)for(d=l[f];h&&h[f]>d;)h=h._prev;return h?(l._next=h._next,h._next=l):(l._next=n[s],n[s]=l),l._next?l._next._prev=l:n[r]=l,l._prev=h,l.parent=l._dp=n,l},ju=function(n,l,s,r){s===void 0&&(s="_first"),r===void 0&&(r="_last");var f=l._prev,h=l._next;f?f._next=h:n[s]===l&&(n[s]=h),h?h._prev=f:n[r]===l&&(n[r]=f),l._next=l._prev=l.parent=null},yi=function(n,l){n.parent&&(!l||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},Vi=function(n,l){if(n&&(!l||l._end>n._dur||l._start<0))for(var s=n;s;)s._dirty=1,s=s.parent;return n},Ov=function(n){for(var l=n.parent;l&&l.parent;)l._dirty=1,l.totalDuration(),l=l.parent;return n},Nf=function(n,l,s,r){return n._startAt&&(ce?n._startAt.revert(bu):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(l,!0,r))},Cv=function u(n){return!n||n._ts&&u(n.parent)},V1=function(n){return n._repeat?Gl(n._tTime,n=n.duration()+n._rDelay)*n:0},Gl=function(n,l){var s=Math.floor(n=It(n/l));return n&&s===n?s-1:s},Cu=function(n,l){return(n-l._start)*l._ts+(l._ts>=0?0:l._dirty?l.totalDuration():l._tDur)},Uu=function(n){return n._end=It(n._start+(n._tDur/Math.abs(n._ts||n._rts||Ut)||0))},wu=function(n,l){var s=n._dp;return s&&s.smoothChildTiming&&n._ts&&(n._start=It(s._time-(n._ts>0?l/n._ts:((n._dirty?n.totalDuration():n._tDur)-l)/-n._ts)),Uu(n),s._dirty||Vi(s,n)),n},Em=function(n,l){var s;if((l._time||!l._dur&&l._initted||l._start<n._time&&(l._dur||!l.add))&&(s=Cu(n.rawTime(),l),(!l._dur||ts(0,l.totalDuration(),s)-l._tTime>Ut)&&l.render(s,!0)),Vi(n,l)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(s=n;s._dp;)s.rawTime()>=0&&s.totalTime(s._tTime),s=s._dp;n._zTime=-Ut}},gn=function(n,l,s,r){return l.parent&&yi(l),l._start=It((Hn(s)?s:s||n!==qt?en(n,s,l):n._time)+l._delay),l._end=It(l._start+(l.totalDuration()/Math.abs(l.timeScale())||0)),Tm(n,l,"_first","_last",n._sort?"_start":0),Df(l)||(n._recent=l),r||Em(n,l),n._ts<0&&wu(n,n._tTime),n},Am=function(n,l){return(Ve.ScrollTrigger||kf("scrollTrigger",l))&&Ve.ScrollTrigger.create(l,n)},Mm=function(n,l,s,r,f){if(Pf(n,l,f),!n._initted)return 1;if(!s&&n._pt&&!ce&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&_m!==Ye.frame)return mi.push(n),n._lazy=[f,r],1},Nv=function u(n){var l=n.parent;return l&&l._ts&&l._initted&&!l._lock&&(l.rawTime()<0||u(l))},Df=function(n){var l=n.data;return l==="isFromStart"||l==="isStart"},Dv=function(n,l,s,r){var f=n.ratio,h=l<0||!l&&(!n._start&&Nv(n)&&!(!n._initted&&Df(n))||(n._ts<0||n._dp._ts<0)&&!Df(n))?0:1,d=n._rDelay,m=0,g,p,v;if(d&&n._repeat&&(m=ts(0,n._tDur,l),p=Gl(m,d),n._yoyo&&p&1&&(h=1-h),p!==Gl(n._tTime,d)&&(f=1-h,n.vars.repeatRefresh&&n._initted&&n.invalidate())),h!==f||ce||r||n._zTime===Ut||!l&&n._zTime){if(!n._initted&&Mm(n,l,r,s,m))return;for(v=n._zTime,n._zTime=l||(s?Ut:0),s||(s=l&&!v),n.ratio=h,n._from&&(h=1-h),n._time=0,n._tTime=m,g=n._pt;g;)g.r(h,g.d),g=g._next;l<0&&Nf(n,l,s,!0),n._onUpdate&&!s&&Ge(n,"onUpdate"),m&&n._repeat&&!s&&n.parent&&Ge(n,"onRepeat"),(l>=n._tDur||l<0)&&n.ratio===h&&(h&&yi(n,1),!s&&!ce&&(Ge(n,h?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=l)},Rv=function(n,l,s){var r;if(s>l)for(r=n._first;r&&r._start<=s;){if(r.data==="isPause"&&r._start>l)return r;r=r._next}else for(r=n._last;r&&r._start>=s;){if(r.data==="isPause"&&r._start<l)return r;r=r._prev}},Xl=function(n,l,s,r){var f=n._repeat,h=It(l)||0,d=n._tTime/n._tDur;return d&&!r&&(n._time*=h/n._dur),n._dur=h,n._tDur=f?f<0?1e10:It(h*(f+1)+n._rDelay*f):h,d>0&&!r&&wu(n,n._tTime=n._tDur*d),n.parent&&Uu(n),s||Vi(n.parent,n),n},Q1=function(n){return n instanceof ye?Vi(n):Xl(n,n._dur)},jv={_start:0,endTime:Ja,totalDuration:Ja},en=function u(n,l,s){var r=n.labels,f=n._recent||jv,h=n.duration()>=nn?f.endTime(!1):n._dur,d,m,g;return ie(l)&&(isNaN(l)||l in r)?(m=l.charAt(0),g=l.substr(-1)==="%",d=l.indexOf("="),m==="<"||m===">"?(d>=0&&(l=l.replace(/=/,"")),(m==="<"?f._start:f.endTime(f._repeat>=0))+(parseFloat(l.substr(1))||0)*(g?(d<0?f:s).totalDuration()/100:1)):d<0?(l in r||(r[l]=h),r[l]):(m=parseFloat(l.charAt(d-1)+l.substr(d+1)),g&&s&&(m=m/100*(he(s)?s[0]:s).totalDuration()),d>1?u(n,l.substr(0,d-1),s)+m:h+m)):l==null?h:+l},Za=function(n,l,s){var r=Hn(l[1]),f=(r?2:1)+(n<2?0:1),h=l[f],d,m;if(r&&(h.duration=l[1]),h.parent=s,n){for(d=h,m=s;m&&!("immediateRender"in d);)d=m.vars.defaults||{},m=Ee(m.vars.inherit)&&m.parent;h.immediateRender=Ee(d.immediateRender),n<2?h.runBackwards=1:h.startAt=l[f-1]}return new Pt(l[0],h,l[f+1])},_i=function(n,l){return n||n===0?l(n):l},ts=function(n,l,s){return s<n?n:s>l?l:s},oe=function(n,l){return!ie(n)||!(l=bv.exec(n))?"":l[1]},Uv=function(n,l,s){return _i(s,function(r){return ts(n,l,r)})},Rf=[].slice,zm=function(n,l){return n&&pn(n)&&"length"in n&&(!l&&!n.length||n.length-1 in n&&pn(n[0]))&&!n.nodeType&&n!==mn},wv=function(n,l,s){return s===void 0&&(s=[]),n.forEach(function(r){var f;return ie(r)&&!l||zm(r,1)?(f=s).push.apply(f,ln(r)):s.push(r)})||s},ln=function(n,l,s){return Ht&&!l&&Ht.selector?Ht.selector(n):ie(n)&&!s&&(Of||!Vl())?Rf.call((l||Zf).querySelectorAll(n),0):he(n)?wv(n,s):zm(n)?Rf.call(n,0):n?[n]:[]},jf=function(n){return n=ln(n)[0]||Ka("Invalid scope")||{},function(l){var s=n.current||n.nativeElement||n;return ln(l,s.querySelectorAll?s:s===n?Ka("Invalid scope")||Zf.createElement("div"):n)}},Om=function(n){return n.sort(function(){return .5-Math.random()})},Cm=function(n){if(Vt(n))return n;var l=pn(n)?n:{each:n},s=Qi(l.ease),r=l.from||0,f=parseFloat(l.base)||0,h={},d=r>0&&r<1,m=isNaN(r)||d,g=l.axis,p=r,v=r;return ie(r)?p=v={center:.5,edges:.5,end:1}[r]||0:!d&&m&&(p=r[0],v=r[1]),function(b,x,T){var _=(T||l).length,A=h[_],z,U,N,j,D,H,q,K,X;if(!A){if(X=l.grid==="auto"?0:(l.grid||[1,nn])[1],!X){for(q=-nn;q<(q=T[X++].getBoundingClientRect().left)&&X<_;);X<_&&X--}for(A=h[_]=[],z=m?Math.min(X,_)*p-.5:r%X,U=X===nn?0:m?_*v/X-.5:r/X|0,q=0,K=nn,H=0;H<_;H++)N=H%X-z,j=U-(H/X|0),A[H]=D=g?Math.abs(g==="y"?j:N):fm(N*N+j*j),D>q&&(q=D),D<K&&(K=D);r==="random"&&Om(A),A.max=q-K,A.min=K,A.v=_=(parseFloat(l.amount)||parseFloat(l.each)*(X>_?_-1:g?g==="y"?_/X:X:Math.max(X,_/X))||0)*(r==="edges"?-1:1),A.b=_<0?f-_:f,A.u=oe(l.amount||l.each)||0,s=s&&_<0?qm(s):s}return _=(A[b]-A.min)/A.max||0,It(A.b+(s?s(_):_)*A.v)+A.u}},Uf=function(n){var l=Math.pow(10,((n+"").split(".")[1]||"").length);return function(s){var r=It(Math.round(parseFloat(s)/n)*n*l);return(r-r%1)/l+(Hn(s)?0:oe(s))}},Nm=function(n,l){var s=he(n),r,f;return!s&&pn(n)&&(r=s=n.radius||nn,n.values?(n=ln(n.values),(f=!Hn(n[0]))&&(r*=r)):n=Uf(n.increment)),_i(l,s?Vt(n)?function(h){return f=n(h),Math.abs(f-h)<=r?f:h}:function(h){for(var d=parseFloat(f?h.x:h),m=parseFloat(f?h.y:0),g=nn,p=0,v=n.length,b,x;v--;)f?(b=n[v].x-d,x=n[v].y-m,b=b*b+x*x):b=Math.abs(n[v]-d),b<g&&(g=b,p=v);return p=!r||g<=r?n[p]:h,f||p===h||Hn(h)?p:p+oe(h)}:Uf(n))},Dm=function(n,l,s,r){return _i(he(n)?!l:s===!0?!!(s=0):!r,function(){return he(n)?n[~~(Math.random()*n.length)]:(s=s||1e-5)&&(r=s<1?Math.pow(10,(s+"").length-2):1)&&Math.floor(Math.round((n-s/2+Math.random()*(l-n+s*.99))/s)*s*r)/r})},Bv=function(){for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return function(r){return l.reduce(function(f,h){return h(f)},r)}},Lv=function(n,l){return function(s){return n(parseFloat(s))+(l||oe(s))}},Hv=function(n,l,s){return jm(n,l,0,1,s)},Rm=function(n,l,s){return _i(s,function(r){return n[~~l(r)]})},qv=function u(n,l,s){var r=l-n;return he(n)?Rm(n,u(0,n.length),l):_i(s,function(f){return(r+(f-n)%r)%r+n})},Yv=function u(n,l,s){var r=l-n,f=r*2;return he(n)?Rm(n,u(0,n.length-1),l):_i(s,function(h){return h=(f+(h-n)%f)%f||0,n+(h>r?f-h:h)})},Fa=function(n){for(var l=0,s="",r,f,h,d;~(r=n.indexOf("random(",l));)h=n.indexOf(")",r),d=n.charAt(r+7)==="[",f=n.substr(r+7,h-r-7).match(d?mm:zf),s+=n.substr(l,r-l)+Dm(d?f:+f[0],d?0:+f[1],+f[2]||1e-5),l=h+1;return s+n.substr(l,n.length-l)},jm=function(n,l,s,r,f){var h=l-n,d=r-s;return _i(f,function(m){return s+((m-n)/h*d||0)})},Gv=function u(n,l,s,r){var f=isNaN(n+l)?0:function(x){return(1-x)*n+x*l};if(!f){var h=ie(n),d={},m,g,p,v,b;if(s===!0&&(r=1)&&(s=null),h)n={p:n},l={p:l};else if(he(n)&&!he(l)){for(p=[],v=n.length,b=v-2,g=1;g<v;g++)p.push(u(n[g-1],n[g]));v--,f=function(T){T*=v;var _=Math.min(b,~~T);return p[_](T-_)},s=l}else r||(n=Yl(he(n)?[]:{},n));if(!p){for(m in l)Wf.call(d,n,m,"get",l[m]);f=function(T){return eo(T,d)||(h?n.p:n)}}}return _i(s,f)},Z1=function(n,l,s){var r=n.labels,f=nn,h,d,m;for(h in r)d=r[h]-l,d<0==!!s&&d&&f>(d=Math.abs(d))&&(m=h,f=d);return m},Ge=function(n,l,s){var r=n.vars,f=r[l],h=Ht,d=n._ctx,m,g,p;if(f)return m=r[l+"Params"],g=r.callbackScope||n,s&&mi.length&&zu(),d&&(Ht=d),p=m?f.apply(g,m):f.call(g),Ht=h,p},Ga=function(n){return yi(n),n.scrollTrigger&&n.scrollTrigger.kill(!!ce),n.progress()<1&&Ge(n,"onInterrupt"),n},Ul,Um=[],wm=function(n){if(n)if(n=!n.name&&n.default||n,Qf()||n.headless){var l=n.name,s=Vt(n),r=l&&!s&&n.init?function(){this._props=[]}:n,f={init:Ja,render:eo,add:Wf,kill:iS,modifier:nS,rawVars:0},h={targetTest:0,get:0,getSetter:to,aliases:{},register:0};if(Vl(),n!==r){if(qe[l])return;Qe(r,Qe(Ou(n,f),h)),Yl(r.prototype,Yl(f,Ou(n,h))),qe[r.prop=l]=r,n.targetTest&&(Tu.push(r),Kf[l]=1),l=(l==="css"?"CSS":l.charAt(0).toUpperCase()+l.substr(1))+"Plugin"}pm(l,r),n.register&&n.register(Oe,r,Me)}else Um.push(n)},jt=255,Xa={aqua:[0,jt,jt],lime:[0,jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,jt],navy:[0,0,128],white:[jt,jt,jt],olive:[128,128,0],yellow:[jt,jt,0],orange:[jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[jt,0,0],pink:[jt,192,203],cyan:[0,jt,jt],transparent:[jt,jt,jt,0]},yf=function(n,l,s){return n+=n<0?1:n>1?-1:0,(n*6<1?l+(s-l)*n*6:n<.5?s:n*3<2?l+(s-l)*(2/3-n)*6:l)*jt+.5|0},Bm=function(n,l,s){var r=n?Hn(n)?[n>>16,n>>8&jt,n&jt]:0:Xa.black,f,h,d,m,g,p,v,b,x,T;if(!r){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),Xa[n])r=Xa[n];else if(n.charAt(0)==="#"){if(n.length<6&&(f=n.charAt(1),h=n.charAt(2),d=n.charAt(3),n="#"+f+f+h+h+d+d+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return r=parseInt(n.substr(1,6),16),[r>>16,r>>8&jt,r&jt,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),r=[n>>16,n>>8&jt,n&jt]}else if(n.substr(0,3)==="hsl"){if(r=T=n.match(zf),!l)m=+r[0]%360/360,g=+r[1]/100,p=+r[2]/100,h=p<=.5?p*(g+1):p+g-p*g,f=p*2-h,r.length>3&&(r[3]*=1),r[0]=yf(m+1/3,f,h),r[1]=yf(m,f,h),r[2]=yf(m-1/3,f,h);else if(~n.indexOf("="))return r=n.match(hm),s&&r.length<4&&(r[3]=1),r}else r=n.match(zf)||Xa.transparent;r=r.map(Number)}return l&&!T&&(f=r[0]/jt,h=r[1]/jt,d=r[2]/jt,v=Math.max(f,h,d),b=Math.min(f,h,d),p=(v+b)/2,v===b?m=g=0:(x=v-b,g=p>.5?x/(2-v-b):x/(v+b),m=v===f?(h-d)/x+(h<d?6:0):v===h?(d-f)/x+2:(f-h)/x+4,m*=60),r[0]=~~(m+.5),r[1]=~~(g*100+.5),r[2]=~~(p*100+.5)),s&&r.length<4&&(r[3]=1),r},Lm=function(n){var l=[],s=[],r=-1;return n.split(gi).forEach(function(f){var h=f.match(jl)||[];l.push.apply(l,h),s.push(r+=h.length+1)}),l.c=s,l},k1=function(n,l,s){var r="",f=(n+r).match(gi),h=l?"hsla(":"rgba(",d=0,m,g,p,v;if(!f)return n;if(f=f.map(function(b){return(b=Bm(b,l,1))&&h+(l?b[0]+","+b[1]+"%,"+b[2]+"%,"+b[3]:b.join(","))+")"}),s&&(p=Lm(n),m=s.c,m.join(r)!==p.c.join(r)))for(g=n.replace(gi,"1").split(jl),v=g.length-1;d<v;d++)r+=g[d]+(~m.indexOf(d)?f.shift()||h+"0,0,0,0)":(p.length?p:f.length?f:s).shift());if(!g)for(g=n.split(gi),v=g.length-1;d<v;d++)r+=g[d]+f[d];return r+g[v]},gi=(function(){var u="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in Xa)u+="|"+n+"\\b";return new RegExp(u+")","gi")})(),Xv=/hsl[a]?\(/,Hm=function(n){var l=n.join(" "),s;if(gi.lastIndex=0,gi.test(l))return s=Xv.test(l),n[1]=k1(n[1],s),n[0]=k1(n[0],s,Lm(n[1])),!0},$a,Ye=(function(){var u=Date.now,n=500,l=33,s=u(),r=s,f=1e3/240,h=f,d=[],m,g,p,v,b,x,T=function _(A){var z=u()-r,U=A===!0,N,j,D,H;if((z>n||z<0)&&(s+=z-l),r+=z,D=r-s,N=D-h,(N>0||U)&&(H=++v.frame,b=D-v.time*1e3,v.time=D=D/1e3,h+=N+(N>=f?4:f-N),j=1),U||(m=g(_)),j)for(x=0;x<d.length;x++)d[x](D,b,H,A)};return v={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(A){return b/(1e3/(A||60))},wake:function(){gm&&(!Of&&Qf()&&(mn=Of=window,Zf=mn.document||{},Ve.gsap=Oe,(mn.gsapVersions||(mn.gsapVersions=[])).push(Oe.version),ym(Mu||mn.GreenSockGlobals||!mn.gsap&&mn||{}),Um.forEach(wm)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,m&&v.sleep(),g=p||function(A){return setTimeout(A,h-v.time*1e3+1|0)},$a=1,T(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(m),$a=0,g=Ja},lagSmoothing:function(A,z){n=A||1/0,l=Math.min(z||33,n)},fps:function(A){f=1e3/(A||240),h=v.time*1e3+f},add:function(A,z,U){var N=z?function(j,D,H,q){A(j,D,H,q),v.remove(N)}:A;return v.remove(A),d[U?"unshift":"push"](N),Vl(),N},remove:function(A,z){~(z=d.indexOf(A))&&d.splice(z,1)&&x>=z&&x--},_listeners:d},v})(),Vl=function(){return!$a&&Ye.wake()},vt={},Vv=/^[\d.\-M][\d.\-,\s]/,Qv=/["']/g,Zv=function(n){for(var l={},s=n.substr(1,n.length-3).split(":"),r=s[0],f=1,h=s.length,d,m,g;f<h;f++)m=s[f],d=f!==h-1?m.lastIndexOf(","):m.length,g=m.substr(0,d),l[r]=isNaN(g)?g.replace(Qv,"").trim():+g,r=m.substr(d+1).trim();return l},kv=function(n){var l=n.indexOf("(")+1,s=n.indexOf(")"),r=n.indexOf("(",l);return n.substring(l,~r&&r<s?n.indexOf(")",s+1):s)},Kv=function(n){var l=(n+"").split("("),s=vt[l[0]];return s&&l.length>1&&s.config?s.config.apply(null,~n.indexOf("{")?[Zv(l[1])]:kv(n).split(",").map(xm)):vt._CE&&Vv.test(n)?vt._CE("",n):s},qm=function(n){return function(l){return 1-n(1-l)}},Ym=function u(n,l){for(var s=n._first,r;s;)s instanceof ye?u(s,l):s.vars.yoyoEase&&(!s._yoyo||!s._repeat)&&s._yoyo!==l&&(s.timeline?u(s.timeline,l):(r=s._ease,s._ease=s._yEase,s._yEase=r,s._yoyo=l)),s=s._next},Qi=function(n,l){return n&&(Vt(n)?n:vt[n]||Kv(n))||l},Ki=function(n,l,s,r){s===void 0&&(s=function(m){return 1-l(1-m)}),r===void 0&&(r=function(m){return m<.5?l(m*2)/2:1-l((1-m)*2)/2});var f={easeIn:l,easeOut:s,easeInOut:r},h;return Ae(n,function(d){vt[d]=Ve[d]=f,vt[h=d.toLowerCase()]=s;for(var m in f)vt[h+(m==="easeIn"?".in":m==="easeOut"?".out":".inOut")]=vt[d+"."+m]=f[m]}),f},Gm=function(n){return function(l){return l<.5?(1-n(1-l*2))/2:.5+n((l-.5)*2)/2}},pf=function u(n,l,s){var r=l>=1?l:1,f=(s||(n?.3:.45))/(l<1?l:1),h=f/Mf*(Math.asin(1/r)||0),d=function(p){return p===1?1:r*Math.pow(2,-10*p)*xv((p-h)*f)+1},m=n==="out"?d:n==="in"?function(g){return 1-d(1-g)}:Gm(d);return f=Mf/f,m.config=function(g,p){return u(n,g,p)},m},_f=function u(n,l){l===void 0&&(l=1.70158);var s=function(h){return h?--h*h*((l+1)*h+l)+1:0},r=n==="out"?s:n==="in"?function(f){return 1-s(1-f)}:Gm(s);return r.config=function(f){return u(n,f)},r};Ae("Linear,Quad,Cubic,Quart,Quint,Strong",function(u,n){var l=n<5?n+1:n;Ki(u+",Power"+(l-1),n?function(s){return Math.pow(s,l)}:function(s){return s},function(s){return 1-Math.pow(1-s,l)},function(s){return s<.5?Math.pow(s*2,l)/2:1-Math.pow((1-s)*2,l)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;Ki("Elastic",pf("in"),pf("out"),pf());(function(u,n){var l=1/n,s=2*l,r=2.5*l,f=function(d){return d<l?u*d*d:d<s?u*Math.pow(d-1.5/n,2)+.75:d<r?u*(d-=2.25/n)*d+.9375:u*Math.pow(d-2.625/n,2)+.984375};Ki("Bounce",function(h){return 1-f(1-h)},f)})(7.5625,2.75);Ki("Expo",function(u){return Math.pow(2,10*(u-1))*u+u*u*u*u*u*u*(1-u)});Ki("Circ",function(u){return-(fm(1-u*u)-1)});Ki("Sine",function(u){return u===1?1:-Sv(u*_v)+1});Ki("Back",_f("in"),_f("out"),_f());vt.SteppedEase=vt.steps=Ve.SteppedEase={config:function(n,l){n===void 0&&(n=1);var s=1/n,r=n+(l?0:1),f=l?1:0,h=1-Ut;return function(d){return((r*ts(0,h,d)|0)+f)*s}}};ql.ease=vt["quad.out"];Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(u){return Jf+=u+","+u+"Params,"});var Xm=function(n,l){this.id=vv++,n._gsap=this,this.target=n,this.harness=l,this.get=l?l.get:vm,this.set=l?l.getSetter:to},Wa=(function(){function u(l){this.vars=l,this._delay=+l.delay||0,(this._repeat=l.repeat===1/0?-2:l.repeat||0)&&(this._rDelay=l.repeatDelay||0,this._yoyo=!!l.yoyo||!!l.yoyoEase),this._ts=1,Xl(this,+l.duration,1,1),this.data=l.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),$a||Ye.wake()}var n=u.prototype;return n.delay=function(s){return s||s===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+s-this._delay),this._delay=s,this):this._delay},n.duration=function(s){return arguments.length?this.totalDuration(this._repeat>0?s+(s+this._rDelay)*this._repeat:s):this.totalDuration()&&this._dur},n.totalDuration=function(s){return arguments.length?(this._dirty=0,Xl(this,this._repeat<0?s:(s-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(s,r){if(Vl(),!arguments.length)return this._tTime;var f=this._dp;if(f&&f.smoothChildTiming&&this._ts){for(wu(this,s),!f._dp||f.parent||Em(f,this);f&&f.parent;)f.parent._time!==f._start+(f._ts>=0?f._tTime/f._ts:(f.totalDuration()-f._tTime)/-f._ts)&&f.totalTime(f._tTime,!0),f=f.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&s<this._tDur||this._ts<0&&s>0||!this._tDur&&!s)&&gn(this._dp,this,this._start-this._delay)}return(this._tTime!==s||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ut||!s&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=s),Sm(this,s,r)),this},n.time=function(s,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),s+V1(this))%(this._dur+this._rDelay)||(s?this._dur:0),r):this._time},n.totalProgress=function(s,r){return arguments.length?this.totalTime(this.totalDuration()*s,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(s,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-s:s)+V1(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(s,r){var f=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(s-1)*f,r):this._repeat?Gl(this._tTime,f)+1:1},n.timeScale=function(s,r){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===s)return this;var f=this.parent&&this._ts?Cu(this.parent._time,this):this._tTime;return this._rts=+s||0,this._ts=this._ps||s===-Ut?0:this._rts,this.totalTime(ts(-Math.abs(this._delay),this.totalDuration(),f),r!==!1),Uu(this),Ov(this)},n.paused=function(s){return arguments.length?(this._ps!==s&&(this._ps=s,s?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},n.startTime=function(s){if(arguments.length){this._start=s;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gn(r,this,s-this._delay),this}return this._start},n.endTime=function(s){return this._start+(Ee(s)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(s){var r=this.parent||this._dp;return r?s&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cu(r.rawTime(s),this):this._tTime:this._tTime},n.revert=function(s){s===void 0&&(s=Ev);var r=ce;return ce=s,$f(this)&&(this.timeline&&this.timeline.revert(s),this.totalTime(-.01,s.suppressEvents)),this.data!=="nested"&&s.kill!==!1&&this.kill(),ce=r,this},n.globalTime=function(s){for(var r=this,f=arguments.length?s:r.rawTime();r;)f=r._start+f/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(s):f},n.repeat=function(s){return arguments.length?(this._repeat=s===1/0?-2:s,Q1(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(s){if(arguments.length){var r=this._time;return this._rDelay=s,Q1(this),r?this.time(r):this}return this._rDelay},n.yoyo=function(s){return arguments.length?(this._yoyo=s,this):this._yoyo},n.seek=function(s,r){return this.totalTime(en(this,s),Ee(r))},n.restart=function(s,r){return this.play().totalTime(s?-this._delay:0,Ee(r)),this._dur||(this._zTime=-Ut),this},n.play=function(s,r){return s!=null&&this.seek(s,r),this.reversed(!1).paused(!1)},n.reverse=function(s,r){return s!=null&&this.seek(s||this.totalDuration(),r),this.reversed(!0).paused(!1)},n.pause=function(s,r){return s!=null&&this.seek(s,r),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(s){return arguments.length?(!!s!==this.reversed()&&this.timeScale(-this._rts||(s?-Ut:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},n.isActive=function(){var s=this.parent||this._dp,r=this._start,f;return!!(!s||this._ts&&this._initted&&s.isActive()&&(f=s.rawTime(!0))>=r&&f<this.endTime(!0)-Ut)},n.eventCallback=function(s,r,f){var h=this.vars;return arguments.length>1?(r?(h[s]=r,f&&(h[s+"Params"]=f),s==="onUpdate"&&(this._onUpdate=r)):delete h[s],this):h[s]},n.then=function(s){var r=this;return new Promise(function(f){var h=Vt(s)?s:bm,d=function(){var g=r.then;r.then=null,Vt(h)&&(h=h(r))&&(h.then||h===r)&&(r.then=g),f(h),r.then=g};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?d():r._prom=d})},n.kill=function(){Ga(this)},u})();Qe(Wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var ye=(function(u){cm(n,u);function n(s,r){var f;return s===void 0&&(s={}),f=u.call(this,s)||this,f.labels={},f.smoothChildTiming=!!s.smoothChildTiming,f.autoRemoveChildren=!!s.autoRemoveChildren,f._sort=Ee(s.sortChildren),qt&&gn(s.parent||qt,Bn(f),r),s.reversed&&f.reverse(),s.paused&&f.paused(!0),s.scrollTrigger&&Am(Bn(f),s.scrollTrigger),f}var l=n.prototype;return l.to=function(r,f,h){return Za(0,arguments,this),this},l.from=function(r,f,h){return Za(1,arguments,this),this},l.fromTo=function(r,f,h,d){return Za(2,arguments,this),this},l.set=function(r,f,h){return f.duration=0,f.parent=this,Qa(f).repeatDelay||(f.repeat=0),f.immediateRender=!!f.immediateRender,new Pt(r,f,en(this,h),1),this},l.call=function(r,f,h){return gn(this,Pt.delayedCall(0,r,f),h)},l.staggerTo=function(r,f,h,d,m,g,p){return h.duration=f,h.stagger=h.stagger||d,h.onComplete=g,h.onCompleteParams=p,h.parent=this,new Pt(r,h,en(this,m)),this},l.staggerFrom=function(r,f,h,d,m,g,p){return h.runBackwards=1,Qa(h).immediateRender=Ee(h.immediateRender),this.staggerTo(r,f,h,d,m,g,p)},l.staggerFromTo=function(r,f,h,d,m,g,p,v){return d.startAt=h,Qa(d).immediateRender=Ee(d.immediateRender),this.staggerTo(r,f,d,m,g,p,v)},l.render=function(r,f,h){var d=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,p=r<=0?0:It(r),v=this._zTime<0!=r<0&&(this._initted||!g),b,x,T,_,A,z,U,N,j,D,H,q;if(this!==qt&&p>m&&r>=0&&(p=m),p!==this._tTime||h||v){if(d!==this._time&&g&&(p+=this._time-d,r+=this._time-d),b=p,j=this._start,N=this._ts,z=!N,v&&(g||(d=this._zTime),(r||!f)&&(this._zTime=r)),this._repeat){if(H=this._yoyo,A=g+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(A*100+r,f,h);if(b=It(p%A),p===m?(_=this._repeat,b=g):(D=It(p/A),_=~~D,_&&_===D&&(b=g,_--),b>g&&(b=g)),D=Gl(this._tTime,A),!d&&this._tTime&&D!==_&&this._tTime-D*A-this._dur<=0&&(D=_),H&&_&1&&(b=g-b,q=1),_!==D&&!this._lock){var K=H&&D&1,X=K===(H&&_&1);if(_<D&&(K=!K),d=K?0:p%g?g:p,this._lock=1,this.render(d||(q?0:It(_*A)),f,!g)._lock=0,this._tTime=p,!f&&this.parent&&Ge(this,"onRepeat"),this.vars.repeatRefresh&&!q&&(this.invalidate()._lock=1),d&&d!==this._time||z!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,X&&(this._lock=2,d=K?g:-1e-4,this.render(d,!0),this.vars.repeatRefresh&&!q&&this.invalidate()),this._lock=0,!this._ts&&!z)return this;Ym(this,q)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(U=Rv(this,It(d),It(b)),U&&(p-=b-(b=U._start))),this._tTime=p,this._time=b,this._act=!N,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,d=0),!d&&p&&!f&&!D&&(Ge(this,"onStart"),this._tTime!==p))return this;if(b>=d&&r>=0)for(x=this._first;x;){if(T=x._next,(x._act||b>=x._start)&&x._ts&&U!==x){if(x.parent!==this)return this.render(r,f,h);if(x.render(x._ts>0?(b-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(b-x._start)*x._ts,f,h),b!==this._time||!this._ts&&!z){U=0,T&&(p+=this._zTime=-Ut);break}}x=T}else{x=this._last;for(var W=r<0?r:b;x;){if(T=x._prev,(x._act||W<=x._end)&&x._ts&&U!==x){if(x.parent!==this)return this.render(r,f,h);if(x.render(x._ts>0?(W-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(W-x._start)*x._ts,f,h||ce&&$f(x)),b!==this._time||!this._ts&&!z){U=0,T&&(p+=this._zTime=W?-Ut:Ut);break}}x=T}}if(U&&!f&&(this.pause(),U.render(b>=d?0:-Ut)._zTime=b>=d?1:-1,this._ts))return this._start=j,Uu(this),this.render(r,f,h);this._onUpdate&&!f&&Ge(this,"onUpdate",!0),(p===m&&this._tTime>=this.totalDuration()||!p&&d)&&(j===this._start||Math.abs(N)!==Math.abs(this._ts))&&(this._lock||((r||!g)&&(p===m&&this._ts>0||!p&&this._ts<0)&&yi(this,1),!f&&!(r<0&&!d)&&(p||d||!m)&&(Ge(this,p===m&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<m&&this.timeScale()>0)&&this._prom())))}return this},l.add=function(r,f){var h=this;if(Hn(f)||(f=en(this,f,r)),!(r instanceof Wa)){if(he(r))return r.forEach(function(d){return h.add(d,f)}),this;if(ie(r))return this.addLabel(r,f);if(Vt(r))r=Pt.delayedCall(0,r);else return this}return this!==r?gn(this,r,f):this},l.getChildren=function(r,f,h,d){r===void 0&&(r=!0),f===void 0&&(f=!0),h===void 0&&(h=!0),d===void 0&&(d=-nn);for(var m=[],g=this._first;g;)g._start>=d&&(g instanceof Pt?f&&m.push(g):(h&&m.push(g),r&&m.push.apply(m,g.getChildren(!0,f,h)))),g=g._next;return m},l.getById=function(r){for(var f=this.getChildren(1,1,1),h=f.length;h--;)if(f[h].vars.id===r)return f[h]},l.remove=function(r){return ie(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&ju(this,r),r===this._recent&&(this._recent=this._last),Vi(this))},l.totalTime=function(r,f){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(Ye.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),u.prototype.totalTime.call(this,r,f),this._forcing=0,this):this._tTime},l.addLabel=function(r,f){return this.labels[r]=en(this,f),this},l.removeLabel=function(r){return delete this.labels[r],this},l.addPause=function(r,f,h){var d=Pt.delayedCall(0,f||Ja,h);return d.data="isPause",this._hasPause=1,gn(this,d,en(this,r))},l.removePause=function(r){var f=this._first;for(r=en(this,r);f;)f._start===r&&f.data==="isPause"&&yi(f),f=f._next},l.killTweensOf=function(r,f,h){for(var d=this.getTweensOf(r,h),m=d.length;m--;)oi!==d[m]&&d[m].kill(r,f);return this},l.getTweensOf=function(r,f){for(var h=[],d=ln(r),m=this._first,g=Hn(f),p;m;)m instanceof Pt?Av(m._targets,d)&&(g?(!oi||m._initted&&m._ts)&&m.globalTime(0)<=f&&m.globalTime(m.totalDuration())>f:!f||m.isActive())&&h.push(m):(p=m.getTweensOf(d,f)).length&&h.push.apply(h,p),m=m._next;return h},l.tweenTo=function(r,f){f=f||{};var h=this,d=en(h,r),m=f,g=m.startAt,p=m.onStart,v=m.onStartParams,b=m.immediateRender,x,T=Pt.to(h,Qe({ease:f.ease||"none",lazy:!1,immediateRender:!1,time:d,overwrite:"auto",duration:f.duration||Math.abs((d-(g&&"time"in g?g.time:h._time))/h.timeScale())||Ut,onStart:function(){if(h.pause(),!x){var A=f.duration||Math.abs((d-(g&&"time"in g?g.time:h._time))/h.timeScale());T._dur!==A&&Xl(T,A,0,1).render(T._time,!0,!0),x=1}p&&p.apply(T,v||[])}},f));return b?T.render(0):T},l.tweenFromTo=function(r,f,h){return this.tweenTo(f,Qe({startAt:{time:en(this,r)}},h))},l.recent=function(){return this._recent},l.nextLabel=function(r){return r===void 0&&(r=this._time),Z1(this,en(this,r))},l.previousLabel=function(r){return r===void 0&&(r=this._time),Z1(this,en(this,r),1)},l.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ut)},l.shiftChildren=function(r,f,h){h===void 0&&(h=0);for(var d=this._first,m=this.labels,g;d;)d._start>=h&&(d._start+=r,d._end+=r),d=d._next;if(f)for(g in m)m[g]>=h&&(m[g]+=r);return Vi(this)},l.invalidate=function(r){var f=this._first;for(this._lock=0;f;)f.invalidate(r),f=f._next;return u.prototype.invalidate.call(this,r)},l.clear=function(r){r===void 0&&(r=!0);for(var f=this._first,h;f;)h=f._next,this.remove(f),f=h;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Vi(this)},l.totalDuration=function(r){var f=0,h=this,d=h._last,m=nn,g,p,v;if(arguments.length)return h.timeScale((h._repeat<0?h.duration():h.totalDuration())/(h.reversed()?-r:r));if(h._dirty){for(v=h.parent;d;)g=d._prev,d._dirty&&d.totalDuration(),p=d._start,p>m&&h._sort&&d._ts&&!h._lock?(h._lock=1,gn(h,d,p-d._delay,1)._lock=0):m=p,p<0&&d._ts&&(f-=p,(!v&&!h._dp||v&&v.smoothChildTiming)&&(h._start+=p/h._ts,h._time-=p,h._tTime-=p),h.shiftChildren(-p,!1,-1/0),m=0),d._end>f&&d._ts&&(f=d._end),d=g;Xl(h,h===qt&&h._time>f?h._time:f,1,1),h._dirty=0}return h._tDur},n.updateRoot=function(r){if(qt._ts&&(Sm(qt,Cu(r,qt)),_m=Ye.frame),Ye.frame>=G1){G1+=Xe.autoSleep||120;var f=qt._first;if((!f||!f._ts)&&Xe.autoSleep&&Ye._listeners.length<2){for(;f&&!f._ts;)f=f._next;f||Ye.sleep()}}},n})(Wa);Qe(ye.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jv=function(n,l,s,r,f,h,d){var m=new Me(this._pt,n,l,0,1,Jm,null,f),g=0,p=0,v,b,x,T,_,A,z,U;for(m.b=s,m.e=r,s+="",r+="",(z=~r.indexOf("random("))&&(r=Fa(r)),h&&(U=[s,r],h(U,n,l),s=U[0],r=U[1]),b=s.match(mf)||[];v=mf.exec(r);)T=v[0],_=r.substring(g,v.index),x?x=(x+1)%5:_.substr(-5)==="rgba("&&(x=1),T!==b[p++]&&(A=parseFloat(b[p-1])||0,m._pt={_next:m._pt,p:_||p===1?_:",",s:A,c:T.charAt(1)==="="?Bl(A,T)-A:parseFloat(T)-A,m:x&&x<4?Math.round:0},g=mf.lastIndex);return m.c=g<r.length?r.substring(g,r.length):"",m.fp=d,(dm.test(r)||z)&&(m.e=0),this._pt=m,m},Wf=function(n,l,s,r,f,h,d,m,g,p){Vt(r)&&(r=r(f||0,n,h));var v=n[l],b=s!=="get"?s:Vt(v)?g?n[l.indexOf("set")||!Vt(n["get"+l.substr(3)])?l:"get"+l.substr(3)](g):n[l]():v,x=Vt(v)?g?Iv:km:If,T;if(ie(r)&&(~r.indexOf("random(")&&(r=Fa(r)),r.charAt(1)==="="&&(T=Bl(b,r)+(oe(b)||0),(T||T===0)&&(r=T))),!p||b!==r||wf)return!isNaN(b*r)&&r!==""?(T=new Me(this._pt,n,l,+b||0,r-(b||0),typeof v=="boolean"?eS:Km,0,x),g&&(T.fp=g),d&&T.modifier(d,this,n),this._pt=T):(!v&&!(l in n)&&kf(l,r),Jv.call(this,n,l,b,r,x,m||Xe.stringFilter,g))},Fv=function(n,l,s,r,f){if(Vt(n)&&(n=ka(n,f,l,s,r)),!pn(n)||n.style&&n.nodeType||he(n)||om(n))return ie(n)?ka(n,f,l,s,r):n;var h={},d;for(d in n)h[d]=ka(n[d],f,l,s,r);return h},Vm=function(n,l,s,r,f,h){var d,m,g,p;if(qe[n]&&(d=new qe[n]).init(f,d.rawVars?l[n]:Fv(l[n],r,f,h,s),s,r,h)!==!1&&(s._pt=m=new Me(s._pt,f,n,0,1,d.render,d,0,d.priority),s!==Ul))for(g=s._ptLookup[s._targets.indexOf(f)],p=d._props.length;p--;)g[d._props[p]]=m;return d},oi,wf,Pf=function u(n,l,s){var r=n.vars,f=r.ease,h=r.startAt,d=r.immediateRender,m=r.lazy,g=r.onUpdate,p=r.runBackwards,v=r.yoyoEase,b=r.keyframes,x=r.autoRevert,T=n._dur,_=n._startAt,A=n._targets,z=n.parent,U=z&&z.data==="nested"?z.vars.targets:A,N=n._overwrite==="auto"&&!Xf,j=n.timeline,D,H,q,K,X,W,et,P,nt,I,ht,Y,J;if(j&&(!b||!f)&&(f="none"),n._ease=Qi(f,ql.ease),n._yEase=v?qm(Qi(v===!0?f:v,ql.ease)):0,v&&n._yoyo&&!n._repeat&&(v=n._yEase,n._yEase=n._ease,n._ease=v),n._from=!j&&!!r.runBackwards,!j||b&&!r.stagger){if(P=A[0]?Xi(A[0]).harness:0,Y=P&&r[P.prop],D=Ou(r,Kf),_&&(_._zTime<0&&_.progress(1),l<0&&p&&d&&!x?_.render(-1,!0):_.revert(p&&T?bu:Tv),_._lazy=0),h){if(yi(n._startAt=Pt.set(A,Qe({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:!_&&Ee(m),startAt:null,delay:0,onUpdate:g&&function(){return Ge(n,"onUpdate")},stagger:0},h))),n._startAt._dp=0,n._startAt._sat=n,l<0&&(ce||!d&&!x)&&n._startAt.revert(bu),d&&T&&l<=0&&s<=0){l&&(n._zTime=l);return}}else if(p&&T&&!_){if(l&&(d=!1),q=Qe({overwrite:!1,data:"isFromStart",lazy:d&&!_&&Ee(m),immediateRender:d,stagger:0,parent:z},D),Y&&(q[P.prop]=Y),yi(n._startAt=Pt.set(A,q)),n._startAt._dp=0,n._startAt._sat=n,l<0&&(ce?n._startAt.revert(bu):n._startAt.render(-1,!0)),n._zTime=l,!d)u(n._startAt,Ut,Ut);else if(!l)return}for(n._pt=n._ptCache=0,m=T&&Ee(m)||m&&!T,H=0;H<A.length;H++){if(X=A[H],et=X._gsap||Ff(A)[H]._gsap,n._ptLookup[H]=I={},Cf[et.id]&&mi.length&&zu(),ht=U===A?H:U.indexOf(X),P&&(nt=new P).init(X,Y||D,n,ht,U)!==!1&&(n._pt=K=new Me(n._pt,X,nt.name,0,1,nt.render,nt,0,nt.priority),nt._props.forEach(function(lt){I[lt]=K}),nt.priority&&(W=1)),!P||Y)for(q in D)qe[q]&&(nt=Vm(q,D,n,ht,X,U))?nt.priority&&(W=1):I[q]=K=Wf.call(n,X,q,"get",D[q],ht,U,0,r.stringFilter);n._op&&n._op[H]&&n.kill(X,n._op[H]),N&&n._pt&&(oi=n,qt.killTweensOf(X,I,n.globalTime(l)),J=!n.parent,oi=0),n._pt&&m&&(Cf[et.id]=1)}W&&Fm(n),n._onInit&&n._onInit(n)}n._onUpdate=g,n._initted=(!n._op||n._pt)&&!J,b&&l<=0&&j.render(nn,!0,!0)},$v=function(n,l,s,r,f,h,d,m){var g=(n._pt&&n._ptCache||(n._ptCache={}))[l],p,v,b,x;if(!g)for(g=n._ptCache[l]=[],b=n._ptLookup,x=n._targets.length;x--;){if(p=b[x][l],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==l&&p.fp!==l;)p=p._next;if(!p)return wf=1,n.vars[l]="+=0",Pf(n,d),wf=0,m?Ka(l+" not eligible for reset"):1;g.push(p)}for(x=g.length;x--;)v=g[x],p=v._pt||v,p.s=(r||r===0)&&!f?r:p.s+(r||0)+h*p.c,p.c=s-p.s,v.e&&(v.e=Kt(s)+oe(v.e)),v.b&&(v.b=p.s+oe(v.b))},Wv=function(n,l){var s=n[0]?Xi(n[0]).harness:0,r=s&&s.aliases,f,h,d,m;if(!r)return l;f=Yl({},l);for(h in r)if(h in f)for(m=r[h].split(","),d=m.length;d--;)f[m[d]]=f[h];return f},Pv=function(n,l,s,r){var f=l.ease||r||"power1.inOut",h,d;if(he(l))d=s[n]||(s[n]=[]),l.forEach(function(m,g){return d.push({t:g/(l.length-1)*100,v:m,e:f})});else for(h in l)d=s[h]||(s[h]=[]),h==="ease"||d.push({t:parseFloat(n),v:l[h],e:f})},ka=function(n,l,s,r,f){return Vt(n)?n.call(l,s,r,f):ie(n)&&~n.indexOf("random(")?Fa(n):n},Qm=Jf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zm={};Ae(Qm+",id,stagger,delay,duration,paused,scrollTrigger",function(u){return Zm[u]=1});var Pt=(function(u){cm(n,u);function n(s,r,f,h){var d;typeof r=="number"&&(f.duration=r,r=f,f=null),d=u.call(this,h?r:Qa(r))||this;var m=d.vars,g=m.duration,p=m.delay,v=m.immediateRender,b=m.stagger,x=m.overwrite,T=m.keyframes,_=m.defaults,A=m.scrollTrigger,z=m.yoyoEase,U=r.parent||qt,N=(he(s)||om(s)?Hn(s[0]):"length"in r)?[s]:ln(s),j,D,H,q,K,X,W,et;if(d._targets=N.length?Ff(N):Ka("GSAP target "+s+" not found. https://gsap.com",!Xe.nullTargetWarn)||[],d._ptLookup=[],d._overwrite=x,T||b||vu(g)||vu(p)){if(r=d.vars,j=d.timeline=new ye({data:"nested",defaults:_||{},targets:U&&U.data==="nested"?U.vars.targets:N}),j.kill(),j.parent=j._dp=Bn(d),j._start=0,b||vu(g)||vu(p)){if(q=N.length,W=b&&Cm(b),pn(b))for(K in b)~Qm.indexOf(K)&&(et||(et={}),et[K]=b[K]);for(D=0;D<q;D++)H=Ou(r,Zm),H.stagger=0,z&&(H.yoyoEase=z),et&&Yl(H,et),X=N[D],H.duration=+ka(g,Bn(d),D,X,N),H.delay=(+ka(p,Bn(d),D,X,N)||0)-d._delay,!b&&q===1&&H.delay&&(d._delay=p=H.delay,d._start+=p,H.delay=0),j.to(X,H,W?W(D,X,N):0),j._ease=vt.none;j.duration()?g=p=0:d.timeline=0}else if(T){Qa(Qe(j.vars.defaults,{ease:"none"})),j._ease=Qi(T.ease||r.ease||"none");var P=0,nt,I,ht;if(he(T))T.forEach(function(Y){return j.to(N,Y,">")}),j.duration();else{H={};for(K in T)K==="ease"||K==="easeEach"||Pv(K,T[K],H,T.easeEach);for(K in H)for(nt=H[K].sort(function(Y,J){return Y.t-J.t}),P=0,D=0;D<nt.length;D++)I=nt[D],ht={ease:I.e,duration:(I.t-(D?nt[D-1].t:0))/100*g},ht[K]=I.v,j.to(N,ht,P),P+=ht.duration;j.duration()<g&&j.to({},{duration:g-j.duration()})}}g||d.duration(g=j.duration())}else d.timeline=0;return x===!0&&!Xf&&(oi=Bn(d),qt.killTweensOf(N),oi=0),gn(U,Bn(d),f),r.reversed&&d.reverse(),r.paused&&d.paused(!0),(v||!g&&!T&&d._start===It(U._time)&&Ee(v)&&Cv(Bn(d))&&U.data!=="nested")&&(d._tTime=-Ut,d.render(Math.max(0,-p)||0)),A&&Am(Bn(d),A),d}var l=n.prototype;return l.render=function(r,f,h){var d=this._time,m=this._tDur,g=this._dur,p=r<0,v=r>m-Ut&&!p?m:r<Ut?0:r,b,x,T,_,A,z,U,N,j;if(!g)Dv(this,r,f,h);else if(v!==this._tTime||!r||h||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(b=v,N=this.timeline,this._repeat){if(_=g+this._rDelay,this._repeat<-1&&p)return this.totalTime(_*100+r,f,h);if(b=It(v%_),v===m?(T=this._repeat,b=g):(A=It(v/_),T=~~A,T&&T===A?(b=g,T--):b>g&&(b=g)),z=this._yoyo&&T&1,z&&(j=this._yEase,b=g-b),A=Gl(this._tTime,_),b===d&&!h&&this._initted&&T===A)return this._tTime=v,this;T!==A&&(N&&this._yEase&&Ym(N,z),this.vars.repeatRefresh&&!z&&!this._lock&&b!==_&&this._initted&&(this._lock=h=1,this.render(It(_*T),!0).invalidate()._lock=0))}if(!this._initted){if(Mm(this,p?r:b,h,f,v))return this._tTime=0,this;if(d!==this._time&&!(h&&this.vars.repeatRefresh&&T!==A))return this;if(g!==this._dur)return this.render(r,f,h)}if(this._tTime=v,this._time=b,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=U=(j||this._ease)(b/g),this._from&&(this.ratio=U=1-U),!d&&v&&!f&&!A&&(Ge(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(U,x.d),x=x._next;N&&N.render(r<0?r:N._dur*N._ease(b/this._dur),f,h)||this._startAt&&(this._zTime=r),this._onUpdate&&!f&&(p&&Nf(this,r,f,h),Ge(this,"onUpdate")),this._repeat&&T!==A&&this.vars.onRepeat&&!f&&this.parent&&Ge(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(p&&!this._onUpdate&&Nf(this,r,!0,!0),(r||!g)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&yi(this,1),!f&&!(p&&!d)&&(v||d||z)&&(Ge(this,v===m?"onComplete":"onReverseComplete",!0),this._prom&&!(v<m&&this.timeScale()>0)&&this._prom()))}return this},l.targets=function(){return this._targets},l.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),u.prototype.invalidate.call(this,r)},l.resetTo=function(r,f,h,d,m){$a||Ye.wake(),this._ts||this.play();var g=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Pf(this,g),p=this._ease(g/this._dur),$v(this,r,f,h,d,p,g,m)?this.resetTo(r,f,h,d,1):(wu(this,0),this.parent||Tm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},l.kill=function(r,f){if(f===void 0&&(f="all"),!r&&(!f||f==="all"))return this._lazy=this._pt=0,this.parent?Ga(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ce),this;if(this.timeline){var h=this.timeline.totalDuration();return this.timeline.killTweensOf(r,f,oi&&oi.vars.overwrite!==!0)._first||Ga(this),this.parent&&h!==this.timeline.totalDuration()&&Xl(this,this._dur*this.timeline._tDur/h,0,1),this}var d=this._targets,m=r?ln(r):d,g=this._ptLookup,p=this._pt,v,b,x,T,_,A,z;if((!f||f==="all")&&zv(d,m))return f==="all"&&(this._pt=0),Ga(this);for(v=this._op=this._op||[],f!=="all"&&(ie(f)&&(_={},Ae(f,function(U){return _[U]=1}),f=_),f=Wv(d,f)),z=d.length;z--;)if(~m.indexOf(d[z])){b=g[z],f==="all"?(v[z]=f,T=b,x={}):(x=v[z]=v[z]||{},T=f);for(_ in T)A=b&&b[_],A&&((!("kill"in A.d)||A.d.kill(_)===!0)&&ju(this,A,"_pt"),delete b[_]),x!=="all"&&(x[_]=1)}return this._initted&&!this._pt&&p&&Ga(this),this},n.to=function(r,f){return new n(r,f,arguments[2])},n.from=function(r,f){return Za(1,arguments)},n.delayedCall=function(r,f,h,d){return new n(f,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:f,onReverseComplete:f,onCompleteParams:h,onReverseCompleteParams:h,callbackScope:d})},n.fromTo=function(r,f,h){return Za(2,arguments)},n.set=function(r,f){return f.duration=0,f.repeatDelay||(f.repeat=0),new n(r,f)},n.killTweensOf=function(r,f,h){return qt.killTweensOf(r,f,h)},n})(Wa);Qe(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ae("staggerTo,staggerFrom,staggerFromTo",function(u){Pt[u]=function(){var n=new ye,l=Rf.call(arguments,0);return l.splice(u==="staggerFromTo"?5:4,0,0),n[u].apply(n,l)}});var If=function(n,l,s){return n[l]=s},km=function(n,l,s){return n[l](s)},Iv=function(n,l,s,r){return n[l](r.fp,s)},tS=function(n,l,s){return n.setAttribute(l,s)},to=function(n,l){return Vt(n[l])?km:Vf(n[l])&&n.setAttribute?tS:If},Km=function(n,l){return l.set(l.t,l.p,Math.round((l.s+l.c*n)*1e6)/1e6,l)},eS=function(n,l){return l.set(l.t,l.p,!!(l.s+l.c*n),l)},Jm=function(n,l){var s=l._pt,r="";if(!n&&l.b)r=l.b;else if(n===1&&l.e)r=l.e;else{for(;s;)r=s.p+(s.m?s.m(s.s+s.c*n):Math.round((s.s+s.c*n)*1e4)/1e4)+r,s=s._next;r+=l.c}l.set(l.t,l.p,r,l)},eo=function(n,l){for(var s=l._pt;s;)s.r(n,s.d),s=s._next},nS=function(n,l,s,r){for(var f=this._pt,h;f;)h=f._next,f.p===r&&f.modifier(n,l,s),f=h},iS=function(n){for(var l=this._pt,s,r;l;)r=l._next,l.p===n&&!l.op||l.op===n?ju(this,l,"_pt"):l.dep||(s=1),l=r;return!s},lS=function(n,l,s,r){r.mSet(n,l,r.m.call(r.tween,s,r.mt),r)},Fm=function(n){for(var l=n._pt,s,r,f,h;l;){for(s=l._next,r=f;r&&r.pr>l.pr;)r=r._next;(l._prev=r?r._prev:h)?l._prev._next=l:f=l,(l._next=r)?r._prev=l:h=l,l=s}n._pt=f},Me=(function(){function u(l,s,r,f,h,d,m,g,p){this.t=s,this.s=f,this.c=h,this.p=r,this.r=d||Km,this.d=m||this,this.set=g||If,this.pr=p||0,this._next=l,l&&(l._prev=this)}var n=u.prototype;return n.modifier=function(s,r,f){this.mSet=this.mSet||this.set,this.set=lS,this.m=s,this.mt=f,this.tween=r},u})();Ae(Jf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(u){return Kf[u]=1});Ve.TweenMax=Ve.TweenLite=Pt;Ve.TimelineLite=Ve.TimelineMax=ye;qt=new ye({sortChildren:!1,defaults:ql,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xe.stringFilter=Hm;var Zi=[],Eu={},aS=[],K1=0,sS=0,vf=function(n){return(Eu[n]||aS).map(function(l){return l()})},Bf=function(){var n=Date.now(),l=[];n-K1>2&&(vf("matchMediaInit"),Zi.forEach(function(s){var r=s.queries,f=s.conditions,h,d,m,g;for(d in r)h=mn.matchMedia(r[d]).matches,h&&(m=1),h!==f[d]&&(f[d]=h,g=1);g&&(s.revert(),m&&l.push(s))}),vf("matchMediaRevert"),l.forEach(function(s){return s.onMatch(s,function(r){return s.add(null,r)})}),K1=n,vf("matchMedia"))},$m=(function(){function u(l,s){this.selector=s&&jf(s),this.data=[],this._r=[],this.isReverted=!1,this.id=sS++,l&&this.add(l)}var n=u.prototype;return n.add=function(s,r,f){Vt(s)&&(f=r,r=s,s=Vt);var h=this,d=function(){var g=Ht,p=h.selector,v;return g&&g!==h&&g.data.push(h),f&&(h.selector=jf(f)),Ht=h,v=r.apply(h,arguments),Vt(v)&&h._r.push(v),Ht=g,h.selector=p,h.isReverted=!1,v};return h.last=d,s===Vt?d(h,function(m){return h.add(null,m)}):s?h[s]=d:d},n.ignore=function(s){var r=Ht;Ht=null,s(this),Ht=r},n.getTweens=function(){var s=[];return this.data.forEach(function(r){return r instanceof u?s.push.apply(s,r.getTweens()):r instanceof Pt&&!(r.parent&&r.parent.data==="nested")&&s.push(r)}),s},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(s,r){var f=this;if(s?(function(){for(var d=f.getTweens(),m=f.data.length,g;m--;)g=f.data[m],g.data==="isFlip"&&(g.revert(),g.getChildren(!0,!0,!1).forEach(function(p){return d.splice(d.indexOf(p),1)}));for(d.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,v){return v.g-p.g||-1/0}).forEach(function(p){return p.t.revert(s)}),m=f.data.length;m--;)g=f.data[m],g instanceof ye?g.data!=="nested"&&(g.scrollTrigger&&g.scrollTrigger.revert(),g.kill()):!(g instanceof Pt)&&g.revert&&g.revert(s);f._r.forEach(function(p){return p(s,f)}),f.isReverted=!0})():this.data.forEach(function(d){return d.kill&&d.kill()}),this.clear(),r)for(var h=Zi.length;h--;)Zi[h].id===this.id&&Zi.splice(h,1)},n.revert=function(s){this.kill(s||{})},u})(),uS=(function(){function u(l){this.contexts=[],this.scope=l,Ht&&Ht.data.push(this)}var n=u.prototype;return n.add=function(s,r,f){pn(s)||(s={matches:s});var h=new $m(0,f||this.scope),d=h.conditions={},m,g,p;Ht&&!h.selector&&(h.selector=Ht.selector),this.contexts.push(h),r=h.add("onMatch",r),h.queries=s;for(g in s)g==="all"?p=1:(m=mn.matchMedia(s[g]),m&&(Zi.indexOf(h)<0&&Zi.push(h),(d[g]=m.matches)&&(p=1),m.addListener?m.addListener(Bf):m.addEventListener("change",Bf)));return p&&r(h,function(v){return h.add(null,v)}),this},n.revert=function(s){this.kill(s||{})},n.kill=function(s){this.contexts.forEach(function(r){return r.kill(s,!0)})},u})(),Nu={registerPlugin:function(){for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];l.forEach(function(r){return wm(r)})},timeline:function(n){return new ye(n)},getTweensOf:function(n,l){return qt.getTweensOf(n,l)},getProperty:function(n,l,s,r){ie(n)&&(n=ln(n)[0]);var f=Xi(n||{}).get,h=s?bm:xm;return s==="native"&&(s=""),n&&(l?h((qe[l]&&qe[l].get||f)(n,l,s,r)):function(d,m,g){return h((qe[d]&&qe[d].get||f)(n,d,m,g))})},quickSetter:function(n,l,s){if(n=ln(n),n.length>1){var r=n.map(function(p){return Oe.quickSetter(p,l,s)}),f=r.length;return function(p){for(var v=f;v--;)r[v](p)}}n=n[0]||{};var h=qe[l],d=Xi(n),m=d.harness&&(d.harness.aliases||{})[l]||l,g=h?function(p){var v=new h;Ul._pt=0,v.init(n,s?p+s:p,Ul,0,[n]),v.render(1,v),Ul._pt&&eo(1,Ul)}:d.set(n,m);return h?g:function(p){return g(n,m,s?p+s:p,d,1)}},quickTo:function(n,l,s){var r,f=Oe.to(n,Qe((r={},r[l]="+=0.1",r.paused=!0,r.stagger=0,r),s||{})),h=function(m,g,p){return f.resetTo(l,m,g,p)};return h.tween=f,h},isTweening:function(n){return qt.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=Qi(n.ease,ql.ease)),X1(ql,n||{})},config:function(n){return X1(Xe,n||{})},registerEffect:function(n){var l=n.name,s=n.effect,r=n.plugins,f=n.defaults,h=n.extendTimeline;(r||"").split(",").forEach(function(d){return d&&!qe[d]&&!Ve[d]&&Ka(l+" effect requires "+d+" plugin.")}),gf[l]=function(d,m,g){return s(ln(d),Qe(m||{},f),g)},h&&(ye.prototype[l]=function(d,m,g){return this.add(gf[l](d,pn(m)?m:(g=m)&&{},this),g)})},registerEase:function(n,l){vt[n]=Qi(l)},parseEase:function(n,l){return arguments.length?Qi(n,l):vt},getById:function(n){return qt.getById(n)},exportRoot:function(n,l){n===void 0&&(n={});var s=new ye(n),r,f;for(s.smoothChildTiming=Ee(n.smoothChildTiming),qt.remove(s),s._dp=0,s._time=s._tTime=qt._time,r=qt._first;r;)f=r._next,(l||!(!r._dur&&r instanceof Pt&&r.vars.onComplete===r._targets[0]))&&gn(s,r,r._start-r._delay),r=f;return gn(qt,s,0),s},context:function(n,l){return n?new $m(n,l):Ht},matchMedia:function(n){return new uS(n)},matchMediaRefresh:function(){return Zi.forEach(function(n){var l=n.conditions,s,r;for(r in l)l[r]&&(l[r]=!1,s=1);s&&n.revert()})||Bf()},addEventListener:function(n,l){var s=Eu[n]||(Eu[n]=[]);~s.indexOf(l)||s.push(l)},removeEventListener:function(n,l){var s=Eu[n],r=s&&s.indexOf(l);r>=0&&s.splice(r,1)},utils:{wrap:qv,wrapYoyo:Yv,distribute:Cm,random:Dm,snap:Nm,normalize:Hv,getUnit:oe,clamp:Uv,splitColor:Bm,toArray:ln,selector:jf,mapRange:jm,pipe:Bv,unitize:Lv,interpolate:Gv,shuffle:Om},install:ym,effects:gf,ticker:Ye,updateRoot:ye.updateRoot,plugins:qe,globalTimeline:qt,core:{PropTween:Me,globals:pm,Tween:Pt,Timeline:ye,Animation:Wa,getCache:Xi,_removeLinkedListItem:ju,reverting:function(){return ce},context:function(n){return n&&Ht&&(Ht.data.push(n),n._ctx=Ht),Ht},suppressOverwrites:function(n){return Xf=n}}};Ae("to,from,fromTo,delayedCall,set,killTweensOf",function(u){return Nu[u]=Pt[u]});Ye.add(ye.updateRoot);Ul=Nu.to({},{duration:0});var rS=function(n,l){for(var s=n._pt;s&&s.p!==l&&s.op!==l&&s.fp!==l;)s=s._next;return s},cS=function(n,l){var s=n._targets,r,f,h;for(r in l)for(f=s.length;f--;)h=n._ptLookup[f][r],h&&(h=h.d)&&(h._pt&&(h=rS(h,r)),h&&h.modifier&&h.modifier(l[r],n,s[f],r))},Sf=function(n,l){return{name:n,headless:1,rawVars:1,init:function(r,f,h){h._onInit=function(d){var m,g;if(ie(f)&&(m={},Ae(f,function(p){return m[p]=1}),f=m),l){m={};for(g in f)m[g]=l(f[g]);f=m}cS(d,f)}}}},Oe=Nu.registerPlugin({name:"attr",init:function(n,l,s,r,f){var h,d,m;this.tween=s;for(h in l)m=n.getAttribute(h)||"",d=this.add(n,"setAttribute",(m||0)+"",l[h],r,f,0,0,h),d.op=h,d.b=m,this._props.push(h)},render:function(n,l){for(var s=l._pt;s;)ce?s.set(s.t,s.p,s.b,s):s.r(n,s.d),s=s._next}},{name:"endArray",headless:1,init:function(n,l){for(var s=l.length;s--;)this.add(n,s,n[s]||0,l[s],0,0,0,0,0,1)}},Sf("roundProps",Uf),Sf("modifiers"),Sf("snap",Nm))||Nu;Pt.version=ye.version=Oe.version="3.13.0";gm=1;Qf()&&Vl();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var J1,hi,Ll,no,Gi,F1,io,fS=function(){return typeof window<"u"},qn={},Yi=180/Math.PI,Hl=Math.PI/180,Rl=Math.atan2,$1=1e8,lo=/([A-Z])/g,oS=/(left|right|width|margin|padding|x)/i,hS=/[\s,\(]\S/,yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lf=function(n,l){return l.set(l.t,l.p,Math.round((l.s+l.c*n)*1e4)/1e4+l.u,l)},dS=function(n,l){return l.set(l.t,l.p,n===1?l.e:Math.round((l.s+l.c*n)*1e4)/1e4+l.u,l)},mS=function(n,l){return l.set(l.t,l.p,n?Math.round((l.s+l.c*n)*1e4)/1e4+l.u:l.b,l)},gS=function(n,l){var s=l.s+l.c*n;l.set(l.t,l.p,~~(s+(s<0?-.5:.5))+l.u,l)},Wm=function(n,l){return l.set(l.t,l.p,n?l.e:l.b,l)},Pm=function(n,l){return l.set(l.t,l.p,n!==1?l.b:l.e,l)},yS=function(n,l,s){return n.style[l]=s},pS=function(n,l,s){return n.style.setProperty(l,s)},_S=function(n,l,s){return n._gsap[l]=s},vS=function(n,l,s){return n._gsap.scaleX=n._gsap.scaleY=s},SS=function(n,l,s,r,f){var h=n._gsap;h.scaleX=h.scaleY=s,h.renderTransform(f,h)},xS=function(n,l,s,r,f){var h=n._gsap;h[l]=s,h.renderTransform(f,h)},Yt="transform",ze=Yt+"Origin",bS=function u(n,l){var s=this,r=this.target,f=r.style,h=r._gsap;if(n in qn&&f){if(this.tfm=this.tfm||{},n!=="transform")n=yn[n]||n,~n.indexOf(",")?n.split(",").forEach(function(d){return s.tfm[d]=Ln(r,d)}):this.tfm[n]=h.x?h[n]:Ln(r,n),n===ze&&(this.tfm.zOrigin=h.zOrigin);else return yn.transform.split(",").forEach(function(d){return u.call(s,d,l)});if(this.props.indexOf(Yt)>=0)return;h.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ze,l,"")),n=Yt}(f||l)&&this.props.push(n,l,f[n])},Im=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},TS=function(){var n=this.props,l=this.target,s=l.style,r=l._gsap,f,h;for(f=0;f<n.length;f+=3)n[f+1]?n[f+1]===2?l[n[f]](n[f+2]):l[n[f]]=n[f+2]:n[f+2]?s[n[f]]=n[f+2]:s.removeProperty(n[f].substr(0,2)==="--"?n[f]:n[f].replace(lo,"-$1").toLowerCase());if(this.tfm){for(h in this.tfm)r[h]=this.tfm[h];r.svg&&(r.renderTransform(),l.setAttribute("data-svg-origin",this.svgo||"")),f=io(),(!f||!f.isStart)&&!s[Yt]&&(Im(s),r.zOrigin&&s[ze]&&(s[ze]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},tg=function(n,l){var s={target:n,props:[],revert:TS,save:bS};return n._gsap||Oe.core.getCache(n),l&&n.style&&n.nodeType&&l.split(",").forEach(function(r){return s.save(r)}),s},eg,Hf=function(n,l){var s=hi.createElementNS?hi.createElementNS((l||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):hi.createElement(n);return s&&s.style?s:hi.createElement(n)},an=function u(n,l,s){var r=getComputedStyle(n);return r[l]||r.getPropertyValue(l.replace(lo,"-$1").toLowerCase())||r.getPropertyValue(l)||!s&&u(n,Ql(l)||l,1)||""},W1="O,Moz,ms,Ms,Webkit".split(","),Ql=function(n,l,s){var r=l||Gi,f=r.style,h=5;if(n in f&&!s)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);h--&&!(W1[h]+n in f););return h<0?null:(h===3?"ms":h>=0?W1[h]:"")+n},qf=function(){fS()&&window.document&&(J1=window,hi=J1.document,Ll=hi.documentElement,Gi=Hf("div")||{style:{}},Hf("div"),Yt=Ql(Yt),ze=Yt+"Origin",Gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",eg=!!Ql("perspective"),io=Oe.core.reverting,no=1)},P1=function(n){var l=n.ownerSVGElement,s=Hf("svg",l&&l.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=n.cloneNode(!0),f;r.style.display="block",s.appendChild(r),Ll.appendChild(s);try{f=r.getBBox()}catch{}return s.removeChild(r),Ll.removeChild(s),f},I1=function(n,l){for(var s=l.length;s--;)if(n.hasAttribute(l[s]))return n.getAttribute(l[s])},ng=function(n){var l,s;try{l=n.getBBox()}catch{l=P1(n),s=1}return l&&(l.width||l.height)||s||(l=P1(n)),l&&!l.width&&!l.x&&!l.y?{x:+I1(n,["x","cx","x1"])||0,y:+I1(n,["y","cy","y1"])||0,width:0,height:0}:l},ig=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&ng(n))},ki=function(n,l){if(l){var s=n.style,r;l in qn&&l!==ze&&(l=Yt),s.removeProperty?(r=l.substr(0,2),(r==="ms"||l.substr(0,6)==="webkit")&&(l="-"+l),s.removeProperty(r==="--"?l:l.replace(lo,"-$1").toLowerCase())):s.removeAttribute(l)}},di=function(n,l,s,r,f,h){var d=new Me(n._pt,l,s,0,1,h?Pm:Wm);return n._pt=d,d.b=r,d.e=f,n._props.push(s),d},tm={deg:1,rad:1,turn:1},ES={grid:1,flex:1},pi=function u(n,l,s,r){var f=parseFloat(s)||0,h=(s+"").trim().substr((f+"").length)||"px",d=Gi.style,m=oS.test(l),g=n.tagName.toLowerCase()==="svg",p=(g?"client":"offset")+(m?"Width":"Height"),v=100,b=r==="px",x=r==="%",T,_,A,z;if(r===h||!f||tm[r]||tm[h])return f;if(h!=="px"&&!b&&(f=u(n,l,s,"px")),z=n.getCTM&&ig(n),(x||h==="%")&&(qn[l]||~l.indexOf("adius")))return T=z?n.getBBox()[m?"width":"height"]:n[p],Kt(x?f/T*v:f/100*T);if(d[m?"width":"height"]=v+(b?h:r),_=r!=="rem"&&~l.indexOf("adius")||r==="em"&&n.appendChild&&!g?n:n.parentNode,z&&(_=(n.ownerSVGElement||{}).parentNode),(!_||_===hi||!_.appendChild)&&(_=hi.body),A=_._gsap,A&&x&&A.width&&m&&A.time===Ye.time&&!A.uncache)return Kt(f/A.width*v);if(x&&(l==="height"||l==="width")){var U=n.style[l];n.style[l]=v+r,T=n[p],U?n.style[l]=U:ki(n,l)}else(x||h==="%")&&!ES[an(_,"display")]&&(d.position=an(n,"position")),_===n&&(d.position="static"),_.appendChild(Gi),T=Gi[p],_.removeChild(Gi),d.position="absolute";return m&&x&&(A=Xi(_),A.time=Ye.time,A.width=_[p]),Kt(b?T*f/v:T&&f?v/T*f:0)},Ln=function(n,l,s,r){var f;return no||qf(),l in yn&&l!=="transform"&&(l=yn[l],~l.indexOf(",")&&(l=l.split(",")[0])),qn[l]&&l!=="transform"?(f=Ia(n,r),f=l!=="transformOrigin"?f[l]:f.svg?f.origin:Ru(an(n,ze))+" "+f.zOrigin+"px"):(f=n.style[l],(!f||f==="auto"||r||~(f+"").indexOf("calc("))&&(f=Du[l]&&Du[l](n,l,s)||an(n,l)||vm(n,l)||(l==="opacity"?1:0))),s&&!~(f+"").trim().indexOf(" ")?pi(n,l,f,s)+s:f},AS=function(n,l,s,r){if(!s||s==="none"){var f=Ql(l,n,1),h=f&&an(n,f,1);h&&h!==s?(l=f,s=h):l==="borderColor"&&(s=an(n,"borderTopColor"))}var d=new Me(this._pt,n.style,l,0,1,Jm),m=0,g=0,p,v,b,x,T,_,A,z,U,N,j,D;if(d.b=s,d.e=r,s+="",r+="",r.substring(0,6)==="var(--"&&(r=an(n,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=n.style[l],n.style[l]=r,r=an(n,l)||r,_?n.style[l]=_:ki(n,l)),p=[s,r],Hm(p),s=p[0],r=p[1],b=s.match(jl)||[],D=r.match(jl)||[],D.length){for(;v=jl.exec(r);)A=v[0],U=r.substring(m,v.index),T?T=(T+1)%5:(U.substr(-5)==="rgba("||U.substr(-5)==="hsla(")&&(T=1),A!==(_=b[g++]||"")&&(x=parseFloat(_)||0,j=_.substr((x+"").length),A.charAt(1)==="="&&(A=Bl(x,A)+j),z=parseFloat(A),N=A.substr((z+"").length),m=jl.lastIndex-N.length,N||(N=N||Xe.units[l]||j,m===r.length&&(r+=N,d.e+=N)),j!==N&&(x=pi(n,l,_,N)||0),d._pt={_next:d._pt,p:U||g===1?U:",",s:x,c:z-x,m:T&&T<4||l==="zIndex"?Math.round:0});d.c=m<r.length?r.substring(m,r.length):""}else d.r=l==="display"&&r==="none"?Pm:Wm;return dm.test(r)&&(d.e=0),this._pt=d,d},em={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},MS=function(n){var l=n.split(" "),s=l[0],r=l[1]||"50%";return(s==="top"||s==="bottom"||r==="left"||r==="right")&&(n=s,s=r,r=n),l[0]=em[s]||s,l[1]=em[r]||r,l.join(" ")},zS=function(n,l){if(l.tween&&l.tween._time===l.tween._dur){var s=l.t,r=s.style,f=l.u,h=s._gsap,d,m,g;if(f==="all"||f===!0)r.cssText="",m=1;else for(f=f.split(","),g=f.length;--g>-1;)d=f[g],qn[d]&&(m=1,d=d==="transformOrigin"?ze:Yt),ki(s,d);m&&(ki(s,Yt),h&&(h.svg&&s.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ia(s,1),h.uncache=1,Im(r)))}},Du={clearProps:function(n,l,s,r,f){if(f.data!=="isFromStart"){var h=n._pt=new Me(n._pt,l,s,0,0,zS);return h.u=r,h.pr=-10,h.tween=f,n._props.push(s),1}}},Pa=[1,0,0,1,0,0],lg={},ag=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},nm=function(n){var l=an(n,Yt);return ag(l)?Pa:l.substr(7).match(hm).map(Kt)},ao=function(n,l){var s=n._gsap||Xi(n),r=n.style,f=nm(n),h,d,m,g;return s.svg&&n.getAttribute("transform")?(m=n.transform.baseVal.consolidate().matrix,f=[m.a,m.b,m.c,m.d,m.e,m.f],f.join(",")==="1,0,0,1,0,0"?Pa:f):(f===Pa&&!n.offsetParent&&n!==Ll&&!s.svg&&(m=r.display,r.display="block",h=n.parentNode,(!h||!n.offsetParent&&!n.getBoundingClientRect().width)&&(g=1,d=n.nextElementSibling,Ll.appendChild(n)),f=nm(n),m?r.display=m:ki(n,"display"),g&&(d?h.insertBefore(n,d):h?h.appendChild(n):Ll.removeChild(n))),l&&f.length>6?[f[0],f[1],f[4],f[5],f[12],f[13]]:f)},Yf=function(n,l,s,r,f,h){var d=n._gsap,m=f||ao(n,!0),g=d.xOrigin||0,p=d.yOrigin||0,v=d.xOffset||0,b=d.yOffset||0,x=m[0],T=m[1],_=m[2],A=m[3],z=m[4],U=m[5],N=l.split(" "),j=parseFloat(N[0])||0,D=parseFloat(N[1])||0,H,q,K,X;s?m!==Pa&&(q=x*A-T*_)&&(K=j*(A/q)+D*(-_/q)+(_*U-A*z)/q,X=j*(-T/q)+D*(x/q)-(x*U-T*z)/q,j=K,D=X):(H=ng(n),j=H.x+(~N[0].indexOf("%")?j/100*H.width:j),D=H.y+(~(N[1]||N[0]).indexOf("%")?D/100*H.height:D)),r||r!==!1&&d.smooth?(z=j-g,U=D-p,d.xOffset=v+(z*x+U*_)-z,d.yOffset=b+(z*T+U*A)-U):d.xOffset=d.yOffset=0,d.xOrigin=j,d.yOrigin=D,d.smooth=!!r,d.origin=l,d.originIsAbsolute=!!s,n.style[ze]="0px 0px",h&&(di(h,d,"xOrigin",g,j),di(h,d,"yOrigin",p,D),di(h,d,"xOffset",v,d.xOffset),di(h,d,"yOffset",b,d.yOffset)),n.setAttribute("data-svg-origin",j+" "+D)},Ia=function(n,l){var s=n._gsap||new Xm(n);if("x"in s&&!l&&!s.uncache)return s;var r=n.style,f=s.scaleX<0,h="px",d="deg",m=getComputedStyle(n),g=an(n,ze)||"0",p,v,b,x,T,_,A,z,U,N,j,D,H,q,K,X,W,et,P,nt,I,ht,Y,J,lt,St,xt,C,Q,F,$,ut;return p=v=b=_=A=z=U=N=j=0,x=T=1,s.svg=!!(n.getCTM&&ig(n)),m.translate&&((m.translate!=="none"||m.scale!=="none"||m.rotate!=="none")&&(r[Yt]=(m.translate!=="none"?"translate3d("+(m.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(m.rotate!=="none"?"rotate("+m.rotate+") ":"")+(m.scale!=="none"?"scale("+m.scale.split(" ").join(",")+") ":"")+(m[Yt]!=="none"?m[Yt]:"")),r.scale=r.rotate=r.translate="none"),q=ao(n,s.svg),s.svg&&(s.uncache?(lt=n.getBBox(),g=s.xOrigin-lt.x+"px "+(s.yOrigin-lt.y)+"px",J=""):J=!l&&n.getAttribute("data-svg-origin"),Yf(n,J||g,!!J||s.originIsAbsolute,s.smooth!==!1,q)),D=s.xOrigin||0,H=s.yOrigin||0,q!==Pa&&(et=q[0],P=q[1],nt=q[2],I=q[3],p=ht=q[4],v=Y=q[5],q.length===6?(x=Math.sqrt(et*et+P*P),T=Math.sqrt(I*I+nt*nt),_=et||P?Rl(P,et)*Yi:0,U=nt||I?Rl(nt,I)*Yi+_:0,U&&(T*=Math.abs(Math.cos(U*Hl))),s.svg&&(p-=D-(D*et+H*nt),v-=H-(D*P+H*I))):(ut=q[6],F=q[7],xt=q[8],C=q[9],Q=q[10],$=q[11],p=q[12],v=q[13],b=q[14],K=Rl(ut,Q),A=K*Yi,K&&(X=Math.cos(-K),W=Math.sin(-K),J=ht*X+xt*W,lt=Y*X+C*W,St=ut*X+Q*W,xt=ht*-W+xt*X,C=Y*-W+C*X,Q=ut*-W+Q*X,$=F*-W+$*X,ht=J,Y=lt,ut=St),K=Rl(-nt,Q),z=K*Yi,K&&(X=Math.cos(-K),W=Math.sin(-K),J=et*X-xt*W,lt=P*X-C*W,St=nt*X-Q*W,$=I*W+$*X,et=J,P=lt,nt=St),K=Rl(P,et),_=K*Yi,K&&(X=Math.cos(K),W=Math.sin(K),J=et*X+P*W,lt=ht*X+Y*W,P=P*X-et*W,Y=Y*X-ht*W,et=J,ht=lt),A&&Math.abs(A)+Math.abs(_)>359.9&&(A=_=0,z=180-z),x=Kt(Math.sqrt(et*et+P*P+nt*nt)),T=Kt(Math.sqrt(Y*Y+ut*ut)),K=Rl(ht,Y),U=Math.abs(K)>2e-4?K*Yi:0,j=$?1/($<0?-$:$):0),s.svg&&(J=n.getAttribute("transform"),s.forceCSS=n.setAttribute("transform","")||!ag(an(n,Yt)),J&&n.setAttribute("transform",J))),Math.abs(U)>90&&Math.abs(U)<270&&(f?(x*=-1,U+=_<=0?180:-180,_+=_<=0?180:-180):(T*=-1,U+=U<=0?180:-180)),l=l||s.uncache,s.x=p-((s.xPercent=p&&(!l&&s.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-p)?-50:0)))?n.offsetWidth*s.xPercent/100:0)+h,s.y=v-((s.yPercent=v&&(!l&&s.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-v)?-50:0)))?n.offsetHeight*s.yPercent/100:0)+h,s.z=b+h,s.scaleX=Kt(x),s.scaleY=Kt(T),s.rotation=Kt(_)+d,s.rotationX=Kt(A)+d,s.rotationY=Kt(z)+d,s.skewX=U+d,s.skewY=N+d,s.transformPerspective=j+h,(s.zOrigin=parseFloat(g.split(" ")[2])||!l&&s.zOrigin||0)&&(r[ze]=Ru(g)),s.xOffset=s.yOffset=0,s.force3D=Xe.force3D,s.renderTransform=s.svg?CS:eg?sg:OS,s.uncache=0,s},Ru=function(n){return(n=n.split(" "))[0]+" "+n[1]},xf=function(n,l,s){var r=oe(l);return Kt(parseFloat(l)+parseFloat(pi(n,"x",s+"px",r)))+r},OS=function(n,l){l.z="0px",l.rotationY=l.rotationX="0deg",l.force3D=0,sg(n,l)},Hi="0deg",Ya="0px",qi=") ",sg=function(n,l){var s=l||this,r=s.xPercent,f=s.yPercent,h=s.x,d=s.y,m=s.z,g=s.rotation,p=s.rotationY,v=s.rotationX,b=s.skewX,x=s.skewY,T=s.scaleX,_=s.scaleY,A=s.transformPerspective,z=s.force3D,U=s.target,N=s.zOrigin,j="",D=z==="auto"&&n&&n!==1||z===!0;if(N&&(v!==Hi||p!==Hi)){var H=parseFloat(p)*Hl,q=Math.sin(H),K=Math.cos(H),X;H=parseFloat(v)*Hl,X=Math.cos(H),h=xf(U,h,q*X*-N),d=xf(U,d,-Math.sin(H)*-N),m=xf(U,m,K*X*-N+N)}A!==Ya&&(j+="perspective("+A+qi),(r||f)&&(j+="translate("+r+"%, "+f+"%) "),(D||h!==Ya||d!==Ya||m!==Ya)&&(j+=m!==Ya||D?"translate3d("+h+", "+d+", "+m+") ":"translate("+h+", "+d+qi),g!==Hi&&(j+="rotate("+g+qi),p!==Hi&&(j+="rotateY("+p+qi),v!==Hi&&(j+="rotateX("+v+qi),(b!==Hi||x!==Hi)&&(j+="skew("+b+", "+x+qi),(T!==1||_!==1)&&(j+="scale("+T+", "+_+qi),U.style[Yt]=j||"translate(0, 0)"},CS=function(n,l){var s=l||this,r=s.xPercent,f=s.yPercent,h=s.x,d=s.y,m=s.rotation,g=s.skewX,p=s.skewY,v=s.scaleX,b=s.scaleY,x=s.target,T=s.xOrigin,_=s.yOrigin,A=s.xOffset,z=s.yOffset,U=s.forceCSS,N=parseFloat(h),j=parseFloat(d),D,H,q,K,X;m=parseFloat(m),g=parseFloat(g),p=parseFloat(p),p&&(p=parseFloat(p),g+=p,m+=p),m||g?(m*=Hl,g*=Hl,D=Math.cos(m)*v,H=Math.sin(m)*v,q=Math.sin(m-g)*-b,K=Math.cos(m-g)*b,g&&(p*=Hl,X=Math.tan(g-p),X=Math.sqrt(1+X*X),q*=X,K*=X,p&&(X=Math.tan(p),X=Math.sqrt(1+X*X),D*=X,H*=X)),D=Kt(D),H=Kt(H),q=Kt(q),K=Kt(K)):(D=v,K=b,H=q=0),(N&&!~(h+"").indexOf("px")||j&&!~(d+"").indexOf("px"))&&(N=pi(x,"x",h,"px"),j=pi(x,"y",d,"px")),(T||_||A||z)&&(N=Kt(N+T-(T*D+_*q)+A),j=Kt(j+_-(T*H+_*K)+z)),(r||f)&&(X=x.getBBox(),N=Kt(N+r/100*X.width),j=Kt(j+f/100*X.height)),X="matrix("+D+","+H+","+q+","+K+","+N+","+j+")",x.setAttribute("transform",X),U&&(x.style[Yt]=X)},NS=function(n,l,s,r,f){var h=360,d=ie(f),m=parseFloat(f)*(d&&~f.indexOf("rad")?Yi:1),g=m-r,p=r+g+"deg",v,b;return d&&(v=f.split("_")[1],v==="short"&&(g%=h,g!==g%(h/2)&&(g+=g<0?h:-h)),v==="cw"&&g<0?g=(g+h*$1)%h-~~(g/h)*h:v==="ccw"&&g>0&&(g=(g-h*$1)%h-~~(g/h)*h)),n._pt=b=new Me(n._pt,l,s,r,g,dS),b.e=p,b.u="deg",n._props.push(s),b},im=function(n,l){for(var s in l)n[s]=l[s];return n},DS=function(n,l,s){var r=im({},s._gsap),f="perspective,force3D,transformOrigin,svgOrigin",h=s.style,d,m,g,p,v,b,x,T;r.svg?(g=s.getAttribute("transform"),s.setAttribute("transform",""),h[Yt]=l,d=Ia(s,1),ki(s,Yt),s.setAttribute("transform",g)):(g=getComputedStyle(s)[Yt],h[Yt]=l,d=Ia(s,1),h[Yt]=g);for(m in qn)g=r[m],p=d[m],g!==p&&f.indexOf(m)<0&&(x=oe(g),T=oe(p),v=x!==T?pi(s,m,g,T):parseFloat(g),b=parseFloat(p),n._pt=new Me(n._pt,d,m,v,b-v,Lf),n._pt.u=T||0,n._props.push(m));im(d,r)};Ae("padding,margin,Width,Radius",function(u,n){var l="Top",s="Right",r="Bottom",f="Left",h=(n<3?[l,s,r,f]:[l+f,l+s,r+s,r+f]).map(function(d){return n<2?u+d:"border"+d+u});Du[n>1?"border"+u:u]=function(d,m,g,p,v){var b,x;if(arguments.length<4)return b=h.map(function(T){return Ln(d,T,g)}),x=b.join(" "),x.split(b[0]).length===5?b[0]:x;b=(p+"").split(" "),x={},h.forEach(function(T,_){return x[T]=b[_]=b[_]||b[(_-1)/2|0]}),d.init(m,x,v)}});var ug={name:"css",register:qf,targetTest:function(n){return n.style&&n.nodeType},init:function(n,l,s,r,f){var h=this._props,d=n.style,m=s.vars.startAt,g,p,v,b,x,T,_,A,z,U,N,j,D,H,q,K;no||qf(),this.styles=this.styles||tg(n),K=this.styles.props,this.tween=s;for(_ in l)if(_!=="autoRound"&&(p=l[_],!(qe[_]&&Vm(_,l,s,r,n,f)))){if(x=typeof p,T=Du[_],x==="function"&&(p=p.call(s,r,n,f),x=typeof p),x==="string"&&~p.indexOf("random(")&&(p=Fa(p)),T)T(this,n,_,p,s)&&(q=1);else if(_.substr(0,2)==="--")g=(getComputedStyle(n).getPropertyValue(_)+"").trim(),p+="",gi.lastIndex=0,gi.test(g)||(A=oe(g),z=oe(p)),z?A!==z&&(g=pi(n,_,g,z)+z):A&&(p+=A),this.add(d,"setProperty",g,p,r,f,0,0,_),h.push(_),K.push(_,0,d[_]);else if(x!=="undefined"){if(m&&_ in m?(g=typeof m[_]=="function"?m[_].call(s,r,n,f):m[_],ie(g)&&~g.indexOf("random(")&&(g=Fa(g)),oe(g+"")||g==="auto"||(g+=Xe.units[_]||oe(Ln(n,_))||""),(g+"").charAt(1)==="="&&(g=Ln(n,_))):g=Ln(n,_),b=parseFloat(g),U=x==="string"&&p.charAt(1)==="="&&p.substr(0,2),U&&(p=p.substr(2)),v=parseFloat(p),_ in yn&&(_==="autoAlpha"&&(b===1&&Ln(n,"visibility")==="hidden"&&v&&(b=0),K.push("visibility",0,d.visibility),di(this,d,"visibility",b?"inherit":"hidden",v?"inherit":"hidden",!v)),_!=="scale"&&_!=="transform"&&(_=yn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),N=_ in qn,N){if(this.styles.save(_),x==="string"&&p.substring(0,6)==="var(--"&&(p=an(n,p.substring(4,p.indexOf(")"))),v=parseFloat(p)),j||(D=n._gsap,D.renderTransform&&!l.parseTransform||Ia(n,l.parseTransform),H=l.smoothOrigin!==!1&&D.smooth,j=this._pt=new Me(this._pt,d,Yt,0,1,D.renderTransform,D,0,-1),j.dep=1),_==="scale")this._pt=new Me(this._pt,D,"scaleY",D.scaleY,(U?Bl(D.scaleY,U+v):v)-D.scaleY||0,Lf),this._pt.u=0,h.push("scaleY",_),_+="X";else if(_==="transformOrigin"){K.push(ze,0,d[ze]),p=MS(p),D.svg?Yf(n,p,0,H,0,this):(z=parseFloat(p.split(" ")[2])||0,z!==D.zOrigin&&di(this,D,"zOrigin",D.zOrigin,z),di(this,d,_,Ru(g),Ru(p)));continue}else if(_==="svgOrigin"){Yf(n,p,1,H,0,this);continue}else if(_ in lg){NS(this,D,_,b,U?Bl(b,U+p):p);continue}else if(_==="smoothOrigin"){di(this,D,"smooth",D.smooth,p);continue}else if(_==="force3D"){D[_]=p;continue}else if(_==="transform"){DS(this,p,n);continue}}else _ in d||(_=Ql(_)||_);if(N||(v||v===0)&&(b||b===0)&&!hS.test(p)&&_ in d)A=(g+"").substr((b+"").length),v||(v=0),z=oe(p)||(_ in Xe.units?Xe.units[_]:A),A!==z&&(b=pi(n,_,g,z)),this._pt=new Me(this._pt,N?D:d,_,b,(U?Bl(b,U+v):v)-b,!N&&(z==="px"||_==="zIndex")&&l.autoRound!==!1?gS:Lf),this._pt.u=z||0,A!==z&&z!=="%"&&(this._pt.b=g,this._pt.r=mS);else if(_ in d)AS.call(this,n,_,g,U?U+p:p);else if(_ in n)this.add(n,_,g||n[_],U?U+p:p,r,f);else if(_!=="parseTransform"){kf(_,p);continue}N||(_ in d?K.push(_,0,d[_]):typeof n[_]=="function"?K.push(_,2,n[_]()):K.push(_,1,g||n[_])),h.push(_)}}q&&Fm(this)},render:function(n,l){if(l.tween._time||!io())for(var s=l._pt;s;)s.r(n,s.d),s=s._next;else l.styles.revert()},get:Ln,aliases:yn,getSetter:function(n,l,s){var r=yn[l];return r&&r.indexOf(",")<0&&(l=r),l in qn&&l!==ze&&(n._gsap.x||Ln(n,"x"))?s&&F1===s?l==="scale"?vS:_S:(F1=s||{})&&(l==="scale"?SS:xS):n.style&&!Vf(n.style[l])?yS:~l.indexOf("-")?pS:to(n,l)},core:{_removeProperty:ki,_getMatrix:ao}};Oe.utils.checkPrefix=Ql;Oe.core.getStyleSaver=tg;(function(u,n,l,s){var r=Ae(u+","+n+","+l,function(f){qn[f]=1});Ae(n,function(f){Xe.units[f]="deg",lg[f]=1}),yn[r[13]]=u+","+n,Ae(s,function(f){var h=f.split(":");yn[h[1]]=r[h[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(u){Xe.units[u]="px"});Oe.registerPlugin(ug);var ge=Oe.registerPlugin(ug)||Oe;ge.core.Tween;const rg=12,cg=300,Bu="139, 92, 246",RS=768,jS=(u,n,l=Bu)=>{const s=document.createElement("div");return s.className="particle",s.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${l}, 1);
    box-shadow: 0 0 6px rgba(${l}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${u}px;
    top: ${n}px;
  `,s},US=u=>({proximity:u*.5,fadeDistance:u*.75}),wS=(u,n,l,s,r)=>{const f=u.getBoundingClientRect(),h=(n-f.left)/f.width*100,d=(l-f.top)/f.height*100;u.style.setProperty("--glow-x",`${h}%`),u.style.setProperty("--glow-y",`${d}%`),u.style.setProperty("--glow-intensity",s.toString()),u.style.setProperty("--glow-radius",`${r}px`)},BS=({children:u,className:n="",disableAnimations:l=!1,style:s,particleCount:r=rg,glowColor:f=Bu,enableTilt:h=!0,clickEffect:d=!1,enableMagnetism:m=!1})=>{const g=rt.useRef(null),p=rt.useRef([]),v=rt.useRef([]),b=rt.useRef(!1),x=rt.useRef([]),T=rt.useRef(!1),_=rt.useRef(null),A=rt.useCallback(()=>{if(T.current||!g.current)return;const{width:N,height:j}=g.current.getBoundingClientRect();x.current=Array.from({length:r},()=>jS(Math.random()*N,Math.random()*j,f)),T.current=!0},[r,f]),z=rt.useCallback(()=>{v.current.forEach(clearTimeout),v.current=[],_.current?.kill(),p.current.forEach(N=>{ge.to(N,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{N.parentNode?.removeChild(N)}})}),p.current=[]},[]),U=rt.useCallback(()=>{!g.current||!b.current||(T.current||A(),x.current.forEach((N,j)=>{const D=setTimeout(()=>{if(!b.current||!g.current)return;const H=N.cloneNode(!0);g.current.appendChild(H),p.current.push(H),ge.fromTo(H,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),ge.to(H,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),ge.to(H,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},j*100);v.current.push(D)}))},[A]);return rt.useEffect(()=>{if(l||!g.current)return;const N=g.current,j=()=>{b.current=!0,U(),h&&ge.to(N,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},D=()=>{b.current=!1,z(),h&&ge.to(N,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),m&&ge.to(N,{x:0,y:0,duration:.3,ease:"power2.out"})},H=K=>{if(!h&&!m)return;const X=N.getBoundingClientRect(),W=K.clientX-X.left,et=K.clientY-X.top,P=X.width/2,nt=X.height/2;if(h){const I=(et-nt)/nt*-10,ht=(W-P)/P*10;ge.to(N,{rotateX:I,rotateY:ht,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(m){const I=(W-P)*.05,ht=(et-nt)*.05;_.current=ge.to(N,{x:I,y:ht,duration:.3,ease:"power2.out"})}},q=K=>{if(!d)return;const X=N.getBoundingClientRect(),W=K.clientX-X.left,et=K.clientY-X.top,P=Math.max(Math.hypot(W,et),Math.hypot(W-X.width,et),Math.hypot(W,et-X.height),Math.hypot(W-X.width,et-X.height)),nt=document.createElement("div");nt.style.cssText=`
        position: absolute;
        width: ${P*2}px;
        height: ${P*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${f}, 0.4) 0%, rgba(${f}, 0.2) 30%, transparent 70%);
        left: ${W-P}px;
        top: ${et-P}px;
        pointer-events: none;
        z-index: 1000;
      `,N.appendChild(nt),ge.fromTo(nt,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>nt.remove()})};return N.addEventListener("mouseenter",j),N.addEventListener("mouseleave",D),N.addEventListener("mousemove",H),N.addEventListener("click",q),()=>{b.current=!1,N.removeEventListener("mouseenter",j),N.removeEventListener("mouseleave",D),N.removeEventListener("mousemove",H),N.removeEventListener("click",q),z()}},[U,z,l,h,m,d,f]),E.jsx("div",{ref:g,className:`${n} particle-container`,style:{...s,position:"relative",overflow:"hidden"},children:u})},LS=({gridRef:u,disableAnimations:n=!1,enabled:l=!0,spotlightRadius:s=cg,glowColor:r=Bu})=>{const f=rt.useRef(null),h=rt.useRef(!1);return rt.useEffect(()=>{if(n||!u?.current||!l)return;const d=document.createElement("div");d.className="global-spotlight",d.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${r}, 0.15) 0%,
        rgba(${r}, 0.08) 15%,
        rgba(${r}, 0.04) 25%,
        rgba(${r}, 0.02) 40%,
        rgba(${r}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(d),f.current=d;const m=p=>{if(!f.current||!u.current)return;const b=u.current.closest(".bento-section")?.getBoundingClientRect(),x=b&&p.clientX>=b.left&&p.clientX<=b.right&&p.clientY>=b.top&&p.clientY<=b.bottom;h.current=x||!1;const T=u.current.querySelectorAll(".card");if(!x){ge.to(f.current,{opacity:0,duration:.3,ease:"power2.out"}),T.forEach(N=>{N.style.setProperty("--glow-intensity","0")});return}const{proximity:_,fadeDistance:A}=US(s);let z=1/0;T.forEach(N=>{const j=N,D=j.getBoundingClientRect(),H=D.left+D.width/2,q=D.top+D.height/2,K=Math.hypot(p.clientX-H,p.clientY-q)-Math.max(D.width,D.height)/2,X=Math.max(0,K);z=Math.min(z,X);let W=0;X<=_?W=1:X<=A&&(W=(A-X)/(A-_)),wS(j,p.clientX,p.clientY,W,s)}),ge.to(f.current,{left:p.clientX,top:p.clientY,duration:.1,ease:"power2.out"});const U=z<=_?.8:z<=A?(A-z)/(A-_)*.8:0;ge.to(f.current,{opacity:U,duration:U>0?.2:.5,ease:"power2.out"})},g=()=>{h.current=!1,u.current?.querySelectorAll(".card").forEach(p=>{p.style.setProperty("--glow-intensity","0")}),f.current&&ge.to(f.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",m),document.addEventListener("mouseleave",g),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseleave",g),f.current?.parentNode?.removeChild(f.current)}},[u,n,l,s,r]),null},HS=({children:u,gridRef:n})=>E.jsx("div",{className:"card-grid bento-section",ref:n,children:u}),qS=()=>{const[u,n]=rt.useState(!1);return rt.useEffect(()=>{const l=()=>n(window.innerWidth<=RS);return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),u},YS=({textAutoHide:u=!0,enableStars:n=!0,enableSpotlight:l=!0,enableBorderGlow:s=!0,disableAnimations:r=!1,spotlightRadius:f=cg,particleCount:h=rg,enableTilt:d=!1,glowColor:m=Bu,clickEffect:g=!0,enableMagnetism:p=!0,cardData:v=[]})=>{const b=rt.useRef(null),x=qS(),T=r||x;return!v||v.length===0?null:E.jsxs(E.Fragment,{children:[l&&E.jsx(LS,{gridRef:b,disableAnimations:T,enabled:l,spotlightRadius:f,glowColor:m}),E.jsx(HS,{gridRef:b,children:v.map((_,A)=>{const U={className:`card ${u?"card--text-autohide":""} ${s?"card--border-glow":""}`,style:{backgroundColor:_.color,"--glow-color":m}};return n?E.jsxs(BS,{...U,disableAnimations:T,particleCount:h,glowColor:m,enableTilt:d,clickEffect:g,enableMagnetism:p,children:[E.jsx("div",{className:"card__header",children:E.jsx("div",{className:"card__label",children:_.label})}),E.jsxs("div",{className:"card__content",children:[E.jsx("h2",{className:"card__title",children:_.title}),E.jsx("p",{className:"card__description",children:_.description})]})]},A):E.jsxs("div",{...U,children:[E.jsx("div",{className:"card__header",children:E.jsx("div",{className:"card__label",children:_.label})}),E.jsxs("div",{className:"card__content",children:[E.jsx("h2",{className:"card__title",children:_.title}),E.jsx("p",{className:"card__description",children:_.description})]})]},A)})})]})},GS=()=>{const u=[{color:"rgba(10, 5, 25, 0.5)",title:"Криптография военного класса",description:"Signal Protocol с XChaCha20-Poly1305 — протокол, одобренный IETF и используемый в критической инфраструктуре. Perfect Forward Secrecy обеспечивает математическую невозможность ретроспективной расшифровки. Каждое сообщение защищено уникальным эфемерным ключом. Компрометация одного сеанса не влияет на безопасность остальных.",label:"MILITARY-GRADE"},{color:"rgba(10, 5, 25, 0.5)",title:"Архитектура нулевого разглашения",description:"Сервер лишён технической возможности дешифрования. Ключи существуют только на устройствах пользователей. RAM-only хранилище не оставляет артефактов.",label:"ZERO-KNOWLEDGE"},{color:"rgba(10, 5, 25, 0.5)",title:"Полная прозрачность кода",description:"Открытый код под MIT лицензией. Независимый аудит доступен криптографам. Отсутствие бэкдоров подтверждается математически.",label:"OPEN SOURCE"},{color:"rgba(10, 5, 25, 0.5)",title:"Минимизация цифрового следа",description:"Email требуется только для восстановления доступа — никаких дополнительных данных. Tor-интеграция маскирует сетевую активность. Sealed Sender шифрует метаданные отправителя на уровне протокола. Сервер не знает кто, кому и когда отправляет сообщения. Телеметрия отсутствует полностью.",label:"PRIVACY-FIRST"},{color:"rgba(10, 5, 25, 0.5)",title:"Прямая передача без посредников",description:"WebRTC P2P для голосовых вызовов. Аудиопоток идёт напрямую между устройствами. Адаптивный Opus-кодек работает при любом соединении.",label:"PEER-TO-PEER"},{color:"rgba(10, 5, 25, 0.5)",title:"Эфемерные коммуникации",description:"Время жизни от 5 секунд до 7 суток. Безвозвратное удаление после прочтения. Криптографическое затирание исключает форензический анализ.",label:"EPHEMERAL"}];return E.jsx("section",{className:"features-section",id:"features",children:E.jsxs("div",{className:"features-container",children:[E.jsxs("div",{className:"features-header",children:[E.jsx("h2",{className:"features-title",children:"Инженерия конфиденциальности"}),E.jsxs("p",{className:"features-subtitle",children:["Криптографическая стойкость на уровне государственных стандартов.",E.jsx("br",{}),"Архитектура спроектирована для противодействия целевому наблюдению."]})]}),E.jsx(YS,{cardData:u,textAutoHide:!1,enableStars:!0,enableSpotlight:!0,enableBorderGlow:!0,enableTilt:!1,enableMagnetism:!0,clickEffect:!0,spotlightRadius:350,particleCount:15,glowColor:"139, 92, 246"})]})})},XS=()=>{const u=[{period:"Сентябрь 2025",title:"Исследование и проектирование",description:"Проект начался с глубокого анализа существующих решений. Изучал архитектуру популярных мессенджеров — Signal (отличная криптография, но привязка к телефону), Telegram (быстрый, но серверное шифрование), WhatsApp (сбор метаданных), Matrix (децентрализация, но сложность).",details:["Анализ Signal, Telegram, WhatsApp, Matrix","Определение ключевых проблем","Составление технического задания","Выбор технологического стека"],status:"completed",icon:E.jsx(xu,{size:32})},{period:"Сентябрь - Октябрь 2025",title:"Разработка backend и криптографического ядра",description:"Основная работа велась над серверной частью и реализацией криптографических протоколов.",details:["REST API на Node.js + Express + TypeScript","PostgreSQL + Redis для данных","Signal Protocol — E2EE шифрование","X3DH + Double Ratchet Algorithm","JWT аутентификация + Bcrypt","Docker + Nginx инфраструктура"],status:"completed",icon:E.jsx(Tf,{size:32})},{period:"Конец октября 2025",title:"Frontend разработка",description:"После завершения основной части backend перешел к клиентской части.",details:["React 18 + TypeScript + Vite","Socket.io для WebSocket","WebCrypto API для криптографии","Responsive UI/UX дизайн","IndexedDB для локального хранения"],status:"completed",icon:E.jsx(rf,{size:32})},{period:"Ноябрь 2025 - Настоящее",title:"Активная разработка и расширение",description:"Основная инфраструктура готова, но впереди еще много работы.",details:["🔄 Групповые чаты с Sender Keys","🔄 Обмен файлами с E2EE","🔄 Voice сообщения","📋 Desktop приложение (Electron)","📋 Mobile apps (React Native)","📋 Video/Voice звонки (WebRTC)","📋 Tor интеграция","📋 Security audit"],status:"in-progress",icon:E.jsx(wl,{size:32})}],[n,l]=rt.useState(0),s=rt.useRef(null),r=rt.useRef(null),f=rt.useRef(null),h=()=>{s.current&&clearInterval(s.current),s.current=setInterval(()=>{l(T=>(T+1)%u.length)},15e3)},d=()=>{h()};rt.useEffect(()=>(h(),()=>{s.current&&clearInterval(s.current)}),[u.length]);const m=()=>{l(T=>(T+1)%u.length),d()},g=()=>{l(T=>(T-1+u.length)%u.length),d()},p=T=>{l(T),d()},v=T=>{r.current=T.touches[0].clientX},b=T=>{f.current=T.touches[0].clientX},x=()=>{if(!r.current||!f.current)return;const T=r.current-f.current;Math.abs(T)>50&&(T>0?m():g()),r.current=null,f.current=null};return E.jsx("section",{className:"team-section",id:"team",children:E.jsxs("div",{className:"team-container",children:[E.jsxs("div",{className:"team-header",children:[E.jsx("h2",{className:"team-title",children:"О команде"}),E.jsxs("p",{className:"team-subtitle",children:["От идеи до реализации. Один человек, одна миссия —",E.jsx("br",{}),"создать мессенджер, который уважает приватность."]})]}),E.jsxs("div",{className:"timeline-carousel",children:[E.jsxs("div",{className:"timeline-track",onTouchStart:v,onTouchMove:b,onTouchEnd:x,children:[E.jsx("button",{className:"carousel-button prev",onClick:g,"aria-label":"Previous",children:E.jsx(n_,{size:28,strokeWidth:2.5})}),E.jsx("div",{className:"timeline-slides with-transition",style:{transform:`translateX(-${n*100}%)`},children:u.map((T,_)=>E.jsx("div",{className:`timeline-slide ${T.status} ${_===n?"active":""}`,children:E.jsxs("div",{className:"timeline-slide-content",children:[E.jsx("div",{className:"timeline-icon",children:T.icon}),E.jsx("div",{className:"timeline-period",children:T.period}),E.jsx("h3",{className:"timeline-title",children:T.title}),E.jsx("p",{className:"timeline-description",children:T.description}),E.jsx("ul",{className:"timeline-details",children:T.details.map((A,z)=>E.jsx("li",{children:A},z))}),E.jsxs("div",{className:"timeline-status",children:[T.status==="completed"&&E.jsx("span",{className:"status-badge completed",children:"✓ Завершено"}),T.status==="in-progress"&&E.jsx("span",{className:"status-badge in-progress",children:"⟳ В разработке"})]})]})},_))}),E.jsx("button",{className:"carousel-button next",onClick:m,"aria-label":"Next",children:E.jsx(bf,{size:28,strokeWidth:2.5})})]}),E.jsx("div",{className:"carousel-dots",children:u.map((T,_)=>E.jsx("button",{className:`dot ${_===n?"active":""}`,onClick:()=>p(_),"aria-label":`Go to slide ${_+1}`},_))})]}),E.jsxs("div",{className:"developer-card",children:[E.jsx("div",{className:"developer-card-glow"}),E.jsxs("div",{className:"developer-card-inner",children:[E.jsxs("div",{className:"developer-header",children:[E.jsxs("div",{className:"developer-avatar",children:[E.jsx("div",{className:"avatar-glow"}),E.jsx("div",{className:"avatar-inner",children:E.jsx(rf,{size:36,strokeWidth:2})})]}),E.jsxs("div",{className:"developer-info",children:[E.jsxs("div",{className:"developer-badge",children:[E.jsx(xu,{size:16}),E.jsx("span",{children:"Developer"})]}),E.jsx("h3",{className:"developer-name",children:"Создатель проекта"}),E.jsx("p",{className:"developer-role",children:"Студент 4 курса • Fullstack Developer"})]})]}),E.jsxs("div",{className:"developer-quote",children:[E.jsx("div",{className:"quote-icon",children:'"'}),E.jsx("p",{children:"Начал как дипломную работу. В процессе понял масштаб проблемы приватности в современных мессенджерах. Решил не ограничиваться 'галочкой' для диплома."})]}),E.jsxs("div",{className:"developer-journey",children:[E.jsxs("h4",{className:"journey-title",children:[E.jsx(wl,{size:20}),"Путь разработки"]}),E.jsxs("ul",{children:[E.jsxs("li",{children:[E.jsx("span",{className:"journey-icon",children:"📚"}),"Изучаю криптографические протоколы и research papers"]}),E.jsxs("li",{children:[E.jsx("span",{className:"journey-icon",children:"👥"}),"Консультируюсь с опытными разработчиками и экспертами"]}),E.jsxs("li",{children:[E.jsx("span",{className:"journey-icon",children:"🔍"}),"Получаю код-ревью от senior девелоперов"]}),E.jsxs("li",{children:[E.jsx("span",{className:"journey-icon",children:"🌐"}),"Участвую в open source сообществах"]})]})]}),E.jsxs("div",{className:"developer-reality",children:[E.jsxs("div",{className:"reality-block honesty",children:[E.jsx("strong",{children:"Честно:"})," Да, это мой первый проект такого масштаба. Да, делаю ошибки и учусь на них. Но подхожу максимально ответственно — потому что речь о безопасности людей."]}),E.jsxs("div",{className:"reality-block openness",children:[E.jsx("strong",{children:"Открыто:"})," Код открыт для аудита. Архитектурные решения задокументированы. Приветствуется фидбэк от экспертов."]})]}),E.jsxs("div",{className:"developer-tech-stack",children:[E.jsxs("h4",{className:"stack-title",children:[E.jsx(Tf,{size:20}),"Tech Stack"]}),E.jsxs("div",{className:"tech-grid",children:[E.jsxs("div",{className:"tech-category",children:[E.jsxs("div",{className:"category-header",children:[E.jsx(xu,{size:16}),E.jsx("strong",{children:"Backend"})]}),E.jsx("span",{children:"Node.js, Express, TypeScript, PostgreSQL, Redis, Socket.io, Docker, Nginx"})]}),E.jsxs("div",{className:"tech-category",children:[E.jsxs("div",{className:"category-header",children:[E.jsx(rf,{size:16}),E.jsx("strong",{children:"Frontend"})]}),E.jsx("span",{children:"React 18, TypeScript, Vite, Socket.io Client, WebCrypto API"})]}),E.jsxs("div",{className:"tech-category",children:[E.jsxs("div",{className:"category-header",children:[E.jsx(wl,{size:16}),E.jsx("strong",{children:"Security"})]}),E.jsx("span",{children:"Signal Protocol, X3DH, Double Ratchet, XChaCha20-Poly1305, Ed25519, JWT, Bcrypt"})]})]})]}),E.jsxs("div",{className:"developer-footer",children:[E.jsxs("a",{href:"https://github.com/GANSGX",target:"_blank",rel:"noopener noreferrer",className:"github-link",children:[E.jsx(x_,{size:20}),E.jsx("span",{children:"View on GitHub"}),E.jsx(bf,{size:16})]}),E.jsxs("div",{className:"footer-badges",children:[E.jsx("span",{className:"badge",children:"Open Source"}),E.jsx("span",{className:"badge",children:"Audit Welcome"})]})]})]})]})]})})},VS=()=>{const[u,n]=rt.useState("overview"),[l,s]=rt.useState(new Set(["root","getting-started","features"])),r=rt.useRef(null);rt.useEffect(()=>{r.current&&r.current.scrollTo({top:0,behavior:"smooth"})},[u]);const f=[{id:"overview",title:"Обзор проекта",icon:E.jsx(Pp,{size:16}),content:`
# CryptoX — Защищённый мессенджер с E2E шифрованием

## Краткое описание

CryptoX представляет собой криптографически защищённую платформу мгновенного обмена сообщениями корпоративного уровня, объединяющую удобство современных мессенджеров с военным уровнем защиты данных. Платформа реализует Signal Protocol для персональных коммуникаций и обеспечивает полную прозрачность архитектуры безопасности.

## Основные возможности

### Криптографическая безопасность
\`\`\`
Протокол: Signal Protocol (Double Ratchet Algorithm)
Шифрование: XChaCha20-Poly1305, AES-256-GCM
Обмен ключами: Extended Triple Diffie-Hellman (X3DH)
Forward Secrecy: Perfect Forward Secrecy (PFS)
\`\`\`

**[ICON: LOCK]** **Персональные чаты (1-on-1)** [BADGE: E2E-ENCRYPTED]
- End-to-end шифрование всех персональных сообщений
- Криптографическая изоляция сессий
- Автоматическая ротация эфемерных ключей
- Ключи шифрования только на устройствах пользователей

**[ICON: USERS]** **Групповые чаты** [BADGE: SERVER-SIDE]
- Server-side шифрование с прозрачным информированием
- Честное предупреждение пользователей об архитектуре
- AES-256-GCM для групповых сообщений
- Возможность масштабирования до больших групп

### Инфраструктура реального времени

**[ICON: NETWORK]** **Звонки WebRTC P2P**
- Прямое peer-to-peer соединение без промежуточных серверов
- Opus codec с адаптивным битрейтом (6-510 kbps)
- DTLS-SRTP шифрование для медиа-потоков
- Поддержка: аудио + видео (только 1-on-1 в MVP)

**[ICON: ACTIVITY]** **Обмен сообщениями в реальном времени**
- Задержка доставки < 500мс (p95)
- Бинарный протокол для минимизации накладных расходов
- Автоматическое переподключение с экспоненциальной задержкой
- Socket.io для двусторонней связи

### Мультиустройственная архитектура

**[ICON: DATABASE]** **Зашифрованная облачная синхронизация**
- SQLCipher для локального хранилища на устройстве
- PostgreSQL 16 для серверного хранения данных
- Redis 7 для кэширования и pub/sub
- Синхронизация истории между устройствами

## Целевая аудитория

| Сегмент | Сценарий использования | Приоритетные функции |
|---------|------------------------|----------------------|
| **Корпоративный сектор** | Внутренние коммуникации | Multi-device, управление правами |
| **Privacy-пользователи** | Безопасная личная переписка | E2E шифрование, Zero-knowledge |
| **Активисты/Журналисты** | Защита источников | Минимизация метаданных, Tor |
| **Разработчики** | Открытый исходный код | Полный доступ к коду, API |

## Технические показатели производительности (SLA)

**[ICON: ACTIVITY]** **Целевые показатели производительности**
\`\`\`
Доставка сообщения: < 500мс (p95)
Загрузка истории (1000 сообщений): < 2с (p99)
Установка соединения: < 1с (p95)
Время отклика API: < 200мс (p95)
\`\`\`

**[ICON: SHIELD]** **Целевые показатели безопасности**
\`\`\`
Критические уязвимости: 0
Итерации хеширования пароля: 4 (Argon2id)
Период ротации ключей: 30 дней (Signed PreKeys)
Тайм-аут сессии: 30 дней (JWT)
\`\`\`

**[ICON: TRENDING-UP]** **Целевые показатели доступности**
\`\`\`
Uptime системы: 99.5% (SLA)
RTO (время восстановления): < 1ч
RPO (точка восстановления): < 15м
\`\`\`

## Обзор технологического стека

**Frontend**: React 18 + TypeScript + Vite
**Desktop**: Electron + SQLCipher
**Backend**: Node.js 20 + Fastify + Socket.io
**База данных**: PostgreSQL 16 + Redis 7
**Криптография**: libsignal-client + SubtleCrypto API
**Медиа**: Sharp + FFmpeg
**DevOps**: Docker + Nginx
      `},{id:"getting-started",title:"Начало работы",icon:E.jsx(X_,{size:16}),children:[{id:"registration",title:"Регистрация",icon:E.jsx(cf,{size:16}),content:`
# Протокол регистрации пользователя

## Требования к валидации входных данных

### Спецификация имени пользователя
\`\`\`
Длина: 3-30 символов
Набор символов: [a-z0-9_]
Уникальность: проверка на стороне сервера
Регулярное выражение: ^[a-z0-9_]{3,30}$
\`\`\`

**Корректные примеры**: \`john_doe\`, \`alice_2024\`, \`user123\`
**Некорректные примеры**: \`Jo\` (слишком короткое), \`User@123\` (недопустимые символы)

### Требования к электронной почте
\`\`\`
Формат: соответствие RFC 5322
Назначение: восстановление аккаунта, уведомления
Верификация: 6-значный OTP код на email
Время жизни: 10 минут
\`\`\`

### Политика безопасности пароля
\`\`\`
Минимальная длина: 8 символов
Рекомендуется: 12+ символов (буквы, цифры, спецсимволы)
Алгоритм хеширования: Argon2id
Объём памяти: 65536 КиБ (64 МиБ)
Итерации: 4
Параллелизм: 2 потока
\`\`\`

## Процесс регистрации

### Этап 1: Валидация на стороне клиента
**[ICON: CHECK-CIRCLE]** Санитизация ввода и проверка формата
- Проверка username по регулярному выражению
- Верификация формата email
- Оценка надёжности пароля
- Обратная связь в реальном времени

### Этап 2: Генерация криптографических ключей
**[ICON: KEY]** Локальная деривация и генерация ключей
\`\`\`
1. Password Key = Argon2id(password, salt, params)
2. Master Key = HKDF(Password Key, info="master")
3. Storage Key = HKDF(Master Key, info="storage")
4. Signal Identity Key Pair = Curve25519.generateKeyPair()
5. Signed PreKey = Curve25519.generateKeyPair()
6. OneTime PreKeys[25] = Curve25519.generateKeyPairs()
\`\`\`

**[ICON: ALERT-TRIANGLE]** Примечание по безопасности: Приватные ключи никогда не покидают устройство

### Этап 3: Регистрация на сервере
**[ICON: SERVER]** Создание аккаунта в backend
\`\`\`sql
INSERT INTO users (
  username,
  email,
  password_hash,
  salt,
  encrypted_master_key,
  identity_public_key,
  signed_prekey_public,
  signed_prekey_signature,
  onetime_prekeys
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
\`\`\`

### Этап 4: Выдача JWT токена
**[ICON: LOCK]** Генерация токена аутентификации
\`\`\`
Алгоритм: HS256
Payload: { userId, username, iat, exp }
Срок действия: 30 дней
Хранение: localStorage (зашифрованный)
\`\`\`

### Этап 5: Подтверждение email
**[ICON: INFO]** Верификация на основе OTP
\`\`\`
Генерация кода: crypto.randomInt(100000, 999999)
Доставка: Resend API
Хранение: Redis с TTL=600с
Максимум попыток: 5
Задержка между отправками: 60с
\`\`\`

## Архитектура безопасности

**[ICON: SHIELD]** Реализация Zero-Knowledge
- Пароль никогда не передаётся в открытом виде
- Сервер хранит только Argon2id хеш
- Master Key зашифрован Email Recovery Key
- Все приватные ключи только на клиенте

**[ICON: KEY]** Иерархия ключей
\`\`\`
Password (Пароль)
  └─> Password Key (Argon2id)
       ├─> Auth Token (валидация на сервере)
       └─> Master Key
            ├─> Storage Key (SQLCipher)
            ├─> Email Recovery Key
            └─> Signal Keys (E2E)
\`\`\`

## Антиспам меры (Неподтверждённые аккаунты)

**Применяемые лимиты**:
\`\`\`
Сообщения: 10/час
Группы: 0 (создание отключено)
Контакты: 5 добавлений/день
Загрузка файлов: 50 МБ/день
\`\`\`

**[ICON: CHECK-CIRCLE]** Лимиты снимаются после подтверждения email
          `},{id:"login",title:"Вход в систему",icon:E.jsx(Su,{size:16}),content:`
# Система аутентификации

## Автоматический вход в систему

**[ICON: CLOCK]** Сохранение JWT токена
\`\`\`
Срок действия: 30 дней
Хранение: localStorage (зашифрован AES-256)
Автопродление: при активности пользователя
Привязка к устройству: отпечаток User-Agent
\`\`\`

**Процесс валидации сессии**:
1. Запуск приложения → получение JWT из localStorage
2. Валидация токена с публичным ключом сервера
3. Если валиден → автоматическая аутентификация
4. Если истёк → перенаправление на форму входа

**[ICON: ACTIVITY]** Производительность: < 100мс время валидации

## Вход с нового устройства

### Фаза 1: Ввод учётных данных
**[ICON: KEY]** Пользователь предоставляет факторы аутентификации
\`\`\`
Обязательные поля:
  - username: строка
  - password: строка (минимум 8 символов)
\`\`\`

### Фаза 2: Криптографическая аутентификация
**[ICON: LOCK]** Деривация ключей на стороне клиента
\`\`\`typescript
// Шаг 1: Запросить salt пользователя с сервера
const salt = await api.getSalt(username);

// Шаг 2: Вывести Password Key используя Argon2id
const passwordKey = await argon2id.hash(password, salt, {
  memoryCost: 65536,
  timeCost: 4,
  parallelism: 2
});

// Шаг 3: Сгенерировать Auth Token для проверки на сервере
const authToken = HMAC-SHA256(passwordKey, "auth");

// Шаг 4: Отправить на сервер
const response = await api.login({ username, authToken });
\`\`\`

### Фаза 3: Синхронизация данных
**[ICON: DATABASE]** Восстановление зашифрованной истории
\`\`\`
1. Получить зашифрованный Master Key с сервера
2. Расшифровать Master Key используя Email Recovery Key
3. Вывести Storage Key из Master Key
4. Скачать зашифрованную историю сообщений
5. Расшифровать историю используя Storage Key
6. Заполнить локальную SQLCipher базу данных
\`\`\`

**[ICON: CLOCK]** Временная сложность: O(n), где n = количество сообщений
**Целевая производительность**: 5-10 секунд для 10к сообщений

## Протокол восстановления пароля

### Предварительные условия
**[ICON: CHECK-CIRCLE]** Требуется подтверждённый email
- Аккаунт должен иметь подтверждённый email адрес
- Восстановление невозможно для неподтверждённых аккаунтов

### Процесс восстановления

**Шаг 1: Инициация восстановления**
\`\`\`
POST /api/auth/forgot-password
Body: { username: string }
\`\`\`

**Шаг 2: Генерация токена**
\`\`\`typescript
const recoveryToken = crypto.randomBytes(32).toString('hex');
const hashedToken = SHA256(recoveryToken);
await redis.setex(\`recovery:\${hashedToken}\`, 3600, userId);
\`\`\`

**Шаг 3: Доставка email**
\`\`\`
Ссылка: https://cryptox.app/reset?token={recoveryToken}
Срок действия: 1 час (TTL 3600с)
Сервис: Resend API
\`\`\`

**Шаг 4: Сброс пароля**
\`\`\`
POST /api/auth/reset-password
Body: {
  token: string,
  newPassword: string
}
\`\`\`

### Гарантии безопасности

**[ICON: SHIELD]** Сохранение данных
- История сообщений остаётся нетронутой (E2E ключи не меняются)
- Слой шифрования Master Key сохраняется
- Обновляется только слой аутентификации

**[ICON: LOCK]** Управление сессиями
- Все существующие JWT токены аннулируются
- Активные сессии завершаются глобально
- Пользователь должен заново авторизоваться на всех устройствах

## Управление сессиями на нескольких устройствах

**[ICON: DATABASE]** Панель активных сессий
\`\`\`typescript
interface Session {
  sessionId: string;
  device: {
    type: 'desktop' | 'mobile' | 'web';
    os: string;
    browser?: string;
  };
  network: {
    ipAddress: string;
    location: string; // GeoIP определение
  };
  activity: {
    createdAt: timestamp;
    lastActive: timestamp;
    expiresAt: timestamp;
  };
}
\`\`\`

**Операции с сессиями**:
- **Просмотреть все**: \`GET /api/sessions\`
- **Отозвать одну**: \`DELETE /api/sessions/:id\`
- **Отозвать остальные**: \`DELETE /api/sessions/others\`
- **Экстренная блокировка**: \`DELETE /api/sessions/all\`

**[ICON: ACTIVITY]** События сессий в реальном времени через Socket.io
\`\`\`
Событие: 'session:revoked'
Действие: Немедленный выход и очистка ключей
\`\`\`
          `}]},{id:"features",title:"Функционал",icon:E.jsx(S1,{size:16}),children:[{id:"private-chats",title:"1-on-1 Чаты (E2E)",icon:E.jsx(C_,{size:16}),content:`
# Личные чаты с E2E шифрованием

## Технологии шифрования

### Signal Protocol
- **Асимметричная криптография** для обмена ключами
- **Perfect Forward Secrecy** — компрометация одного ключа не влияет на другие
- **Уникальный ключ** для каждого сообщения

### Характеристики
- **Максимальная длина**: 10,000 символов
- **Unicode поддержка**: эмодзи, кириллица, все языки
- **Время доставки**: < 500ms

## Основные операции

### Отправка сообщений

1. Проверка Signal сессии с получателем
2. Если сессии нет — запрос публичных ключей
3. Шифрование сообщения
4. Отправка через Socket.io
5. Сохранение в БД (зашифрованное)
6. Доставка получателю

### Статусы сообщений
- ⚡ **Одна галочка** — отправлено на сервер
- ⚡⚡ **Две галочки** — доставлено получателю
- 🎯 **Две синие** — прочитано

### Редактирование
- ⏱️ В течение 30 минут после отправки
- ✅ Даже после прочтения получателем
- 🔐 Повторное шифрование
- 📝 Пометка "изменено"

### Удаление
- **"Удалить у себя"** — только у отправителя
- **"Удалить у всех"** — у обоих (в течение 48 часов)
- Полное удаление из интерфейса

## Дополнительные функции

### Цитирование (Reply)
- Долгое нажатие → "Ответить"
- Показ оригинального сообщения
- Клик по цитате → скролл к оригиналу

### Реакции
- 💻 Технические реакции и другие эмодзи
- Счётчик реакций
- Список кто поставил реакцию

### Пересылка
- Настройка "Разрешить/Запретить пересылку"
- Пометка "Forwarded from @username"
- E2E шифрование для нового получателя

### Закрепление
- Одно закреплённое сообщение на чат
- Показ вверху окна
- Быстрое открепление

### Поиск
- Full-Text Search в PostgreSQL
- Показ контекста (3 строки до/после)
- Подсветка найденного
- Скролл к результату

## Приватность и безопасность

🔐 **Zero-Knowledge**
- Сервер не может прочитать содержимое
- Ключи только на устройствах пользователей

🛡️ **Perfect Forward Secrecy**
- Компрометация устройства не открывает старые сообщения
- Каждая сессия использует уникальные ключи

⚙️ **Отсутствие метаданных**
- Не сохраняются IP-адреса
- Минимум служебной информации
          `},{id:"group-chats",title:"Групповые чаты",icon:E.jsx(Y_,{size:16}),content:`
# Групповые чаты

⚠️ **Важное предупреждение о безопасности**

Групповые чаты используют **server-side шифрование**, но **НЕ являются E2E**.

Для максимально конфиденциальных разговоров используйте личные чаты.

## Создание группы

### Параметры группы
- **Название** (обязательно, до 100 символов)
- **Аватар** (опционально, до 5MB)
- **Описание** (опционально, до 500 символов)
- **Участники** (минимум 2 человека)

### Создатель автоматически получает роль Owner

## Система ролей

### Owner (Владелец)
- ✅ Все права администратора
- ✅ Назначение/снятие админов
- ✅ Настройка прав админов
- ✅ Удаление группы
- ✅ Передача владения другому участнику

### Admin (Администратор)
- ✅ Удаление сообщений любых участников
- ✅ Блокировка/разблокировка участников (ban)
- ✅ Изменение настроек группы
- ✅ Закрепление сообщений
- ❌ Не может назначать других админов
- ❌ Не может удалить группу

### Member (Участник)
- ✅ Отправка сообщений
- ✅ Просмотр истории
- ✅ Реакции на сообщения
- ❌ Ограниченные права

### Настраиваемые права

Owner может гибко настроить права:
- Кто может писать сообщения
- Кто может добавлять участников
- Кто может менять название/аватар группы
- Кто может закреплять сообщения

## Функции групповых чатов

### Упоминания (@mentions)
- \`@username\` для упоминания участника
- Отдельное уведомление для упомянутого
- Автодополнение при вводе @

### Ответы на сообщения
- Цитирование с указанием автора
- Thread-подобная структура

### Реакции
- Как в личных чатах
- Видны всем участникам

### Закрепление
- До 3 закреплённых сообщений
- Только админы и Owner

## Управление участниками

### Добавление
- Owner и админы (если разрешено)
- Уведомление всем участникам
- Новый участник видит историю с момента добавления

### Удаление (kick)
- Только админы и Owner
- Участник может вернуться по новой ссылке-приглашению

### Блокировка (ban)
- Только админы и Owner
- Участник не может вернуться даже по ссылке
- Можно разблокировать

### Выход
- Любой участник может выйти сам
- При выходе теряется доступ к новым сообщениям

## Ссылки-приглашения

- Уникальный код для вступления
- Можно сбросить (старая перестаёт работать)
- Настройка: кто может генерировать ссылки
- Опционально: требовать одобрение админа

## Безопасность групп

🔐 **Server-side шифрование**
- Сообщения зашифрованы в БД
- Но сервер имеет ключи
- Админы сервера технически могут получить доступ

✅ **Честное предупреждение**
- Пользователи видят предупреждение при создании
- Прозрачность в вопросах безопасности

🛡️ **Защита от спама**
- Лимиты на частоту сообщений
- Антифлуд механизмы
- Автомодерация (опционально)
          `},{id:"calls",title:"Звонки (WebRTC)",icon:E.jsx(x1,{size:16}),content:`
# Голосовые и видео звонки

## Технология WebRTC P2P

### Peer-to-Peer соединение
- **Прямая передача** между устройствами
- **Без посредников** — сервер только для сигнализации
- **Низкая задержка** благодаря прямому соединению

### Поддерживаемые форматы
- **Аудио**: Opus codec (адаптивный битрейт)
- **Видео**: VP8/VP9 или H.264
- **Разрешение**: до Full HD (1920x1080)

## Типы звонков

### Аудио звонки
- 🎤 Высокое качество звука (Opus)
- 📈 Адаптивный битрейт (6-510 kbps)
- ⚙️ Подавление шума и эха
- 🌐 Работает даже при медленном интернете

### Видео звонки
- 💻 HD качество (до 1080p)
- 🔄 Автоматическая адаптация к скорости сети
- 🖼️ Режим "Картинка в картинке"
- ⚡ Переключение между камерами

## Ограничения MVP

⚠️ **Только 1-on-1 звонки**
- Групповые звонки в v2.0
- Текущая архитектура оптимизирована для двух участников

## Процесс звонка

### Исходящий звонок

1. **Инициация**
   - Нажатие кнопки "Позвонить"
   - Выбор типа: аудио или видео

2. **Сигнализация**
   - Отправка предложения (SDP offer) через Socket.io
   - STUN/TURN для обхода NAT

3. **Установка соединения**
   - Обмен ICE кандидатами
   - Установка P2P соединения
   - Начало передачи медиа

### Входящий звонок

1. **Уведомление**
   - Push уведомление (если приложение свёрнуто)
   - Звук вызова
   - Полноэкранное окно

2. **Действия**
   - ✅ Принять (аудио/видео)
   - ❌ Отклонить
   - 💬 Отклонить с сообщением

3. **Соединение**
   - Автоматический обмен SDP
   - Установка P2P канала

## Функции во время звонка

### Управление звуком
- ⚙️ Выключить микрофон (mute)
- 🔧 Настройка громкости
- 📡 Переключение аудио выхода (динамик/наушники)

### Управление видео
- 💻 Выключить камеру
- 🔄 Переключить камеру (фронт/тыл)
- 🖼️ Режим картинка в картинке

### Дополнительно
- 💬 Отправить сообщение во время звонка
- 📸 Скриншот (с согласия собеседника)
- ⏱️ Таймер звонка

## Безопасность звонков

### End-to-End шифрование
- 🔐 DTLS-SRTP шифрование медиа потока
- 🔧 Ключи генерируются для каждого звонка
- ✅ Верификация через сравнение кодов безопасности

### Приватность
- 🛡️ Звонки не записываются
- 🛡️ Сервер не имеет доступа к контенту
- ⚡ Метаданные минимальны (только факт звонка)

### STUN/TURN серверы
- Используются только для установки соединения
- После установки P2P — вся передача напрямую
- Опционально: собственный TURN сервер для максимальной приватности

## Качество и производительность

### Адаптация к сети
- Автоматическое снижение качества при плохом соединении
- Приоритет аудио над видео
- Переключение на аудио-only при необходимости

### Минимальные требования
- **Интернет**: 100 kbps для аудио, 500 kbps для видео
- **Процессор**: любой современный (для кодирования)
- **RAM**: 100MB дополнительно на звонок

### Уведомления о качестве
- 📡 Индикатор качества соединения
- ⚠️ Предупреждение о плохом соединении
- 📈 Статистика в реальном времени (битрейт, задержка, потери пакетов)
          `},{id:"media",title:"Медиа файлы",icon:E.jsx(T_,{size:16}),content:`
# Работа с медиа

## Поддерживаемые типы

### Изображения
- **Форматы**: JPG, PNG, GIF, WebP
- **Максимальный размер**: 10MB
- **Оптимизация**: автоматическое сжатие
- **Превью**: генерация thumbnail'ов

### Видео
- **Форматы**: MP4, WebM, MOV
- **Максимальный размер**: 100MB
- **Оптимизация**: FFmpeg перекодирование
- **Превью**: первый кадр как thumbnail

### Аудио
- **Форматы**: MP3, OGG, WAV, AAC
- **Максимальный размер**: 20MB
- **Голосовые сообщения**: Opus codec

### Документы
- **Форматы**: PDF, DOC, DOCX, TXT, XLS, XLSX, ZIP
- **Максимальный размер**: 50MB

## Обработка изображений

### Автоматическая оптимизация
- Сжатие с сохранением качества (Sharp)
- Удаление EXIF метаданных (защита приватности)
- Генерация 3 версий:
  - **Thumbnail**: 150x150px (для списка чатов)
  - **Preview**: 800x600px (для просмотра в чате)
  - **Original**: исходное качество

### Форматы отправки
- Как **файл** — без сжатия
- Как **изображение** — с оптимизацией

## Голосовые сообщения

### Запись
- 🎤 Нажать и удерживать для записи
- ↑ Свайп вверх для блокировки записи
- ← Свайп влево для отмены
- **Максимальная длительность**: 10 минут

### Воспроизведение
- ▶️ Плеер с waveform визуализацией
- ⏩ Ускорение (1x, 1.5x, 2x)
- Перемотка по клику на waveform

### Технические характеристики
- **Codec**: Opus
- **Bitrate**: 24 kbps (оптимально для речи)
- **Формат**: .ogg

## Обработка видео

### Серверная обработка
- FFmpeg для перекодирования
- Нормализация разрешения (макс 1080p)
- Сжатие с сохранением качества

### Воспроизведение
- Встроенный плеер
- Поддержка субтитров (.srt)
- Полноэкранный режим
- Picture-in-Picture

## Безопасность медиа

### Шифрование
- **1-on-1 чаты**: E2E шифрование файлов
- **Групповые чаты**: server-side шифрование
- Ключи для расшифровки только у участников

### Приватность
- 🛡️ Автоматическое удаление EXIF (GPS, дата, модель телефона)
- 🛡️ Не используется для машинного обучения
- 🛡️ Не сканируется на содержимое (нет CSAM фильтров)

### Хранение
- Файлы хранятся зашифрованными
- CDN не используется (все на собственных серверах)
- Автоудаление при удалении сообщения

## Галерея и просмотр

### Встроенная галерея
- Свайп между изображениями/видео из чата
- Zoom и панорамирование
- Скачивание в локальное хранилище

### Превью в чате
- Thumbnail для быстрой загрузки
- Lazy loading для экономии трафика
- Прогресс-бар при загрузке

## Ограничения по трафику

### Для неподтверждённых аккаунтов
- Максимум 50MB в день
- До 5 файлов в час

### Для подтверждённых аккаунтов
- Без ограничений по количеству
- Лимиты только по размеру файла

## Производительность

### Оптимизация загрузки
- Progressive загрузка (как в JPEG)
- Загрузка по частям (chunked)
- Кэширование на клиенте

### Экономия трафика
- Настройка "Не загружать медиа автоматически"
- Отдельно для мобильных данных и Wi-Fi
- Настройка качества загрузки (авто/высокое/среднее/низкое)
          `}]},{id:"security",title:"Безопасность",icon:E.jsx(Su,{size:16}),children:[{id:"encryption",title:"Шифрование",icon:E.jsx(cf,{size:16}),content:`
# Криптографическая архитектура

## Signal Protocol (E2E для 1-on-1)

### Компоненты протокола

**Double Ratchet Algorithm**
- Комбинация Diffie-Hellman и симметричного ключа
- Автоматическая ротация ключей после каждого сообщения
- Perfect Forward Secrecy

**Extended Triple Diffie-Hellman (X3DH)**
- Установка начального ключа между двумя устройствами
- Работает даже если получатель оффлайн
- Защита от атак man-in-the-middle

**Prekeys**
- Пакет публичных ключей на сервере
- Позволяет начать переписку с оффлайн пользователем
- Автоматическое обновление

### Криптографические примитивы

- **Симметричное шифрование**: XChaCha20-Poly1305
- **Асимметричная криптография**: Curve25519
- **Хеширование**: SHA-256, HMAC-SHA256
- **KDF**: HKDF (HMAC-based Key Derivation Function)

## Server-side шифрование (группы)

### Алгоритм
- AES-256-GCM для шифрования сообщений
- Ключ группы генерируется на сервере
- Ротация ключа при изменении состава участников

### Ограничения
- Сервер имеет доступ к ключам
- Админы сервера теоретически могут расшифровать
- Честное предупреждение пользователям

## Ключевая архитектура

### Типы ключей

**Master Key**
- Главный ключ пользователя
- Генерируется из пароля через Argon2
- Никогда не передаётся на сервер
- Используется для шифрования других ключей

**Storage Key**
- Шифрует локальную базу данных (SQLCipher)
- Производная от Master Key
- Уникальна для каждого устройства

**Password Key**
- Используется для аутентификации
- Argon2id(password + salt)
- Только хеш отправляется на сервер

**Email Recovery Key**
- Запасной ключ для восстановления Master Key
- Шифруется паролем и хранится на сервере
- Используется при восстановлении доступа

**Signal Keys**
- Identity Key Pair (долгосрочный)
- Signed PreKey (среднесрочный, 30 дней)
- One-Time PreKeys (одноразовые)
- Ephemeral Keys (эфемерные, для каждого сообщения)

## Perfect Forward Secrecy

### Принцип работы
- Каждое сообщение использует уникальный эфемерный ключ
- Компрометация устройства не открывает прошлые сообщения
- Автоматическая ротация ключей

### Защита
- Даже при взломе одного ключа — остальные в безопасности
- История сообщений остаётся защищённой
- Минимальное окно атаки

## Защита метаданных

### Sealed Sender
- Шифрование информации об отправителе
- Сервер не знает кто кому пишет
- Только timestamp и размер пакета

### Minimal Metadata
- Не сохраняются IP адреса
- Не сохраняются логи активности
- Минимум служебной информации

### Tor Integration (опционально)
- Маскировка сетевой активности
- Дополнительный слой анонимности
- Подключение через Tor в настройках

## Zero-Knowledge Architecture

### Принцип
- Сервер физически не может расшифровать данные
- Все криптографические операции на клиенте
- Минимум данных на сервере

### Что хранится на сервере
- ✅ Зашифрованные сообщения (E2E для 1-on-1)
- ✅ Публичные ключи
- ✅ Хеш пароля (для аутентификации)
- ✅ Зашифрованный Master Key (для восстановления)
- ❌ Не хранятся приватные ключи
- ❌ Не хранятся пароли
- ❌ Не хранится незашифрованный контент

## Аудит и прозрачность

### Open Source
- Весь код доступен на GitHub
- Лицензия: MIT
- Независимый аудит возможен

### Воспроизводимые сборки
- Каждый может проверить что код не изменён
- Детерминированная компиляция
- Подпись релизов

### Security.txt
- Контакты для сообщения об уязвимостях
- Bug Bounty программа
- Ответственное раскрытие

## Защита от атак

### Брутфорс
- Argon2 делает перебор очень медленным
- Rate limiting на попытки входа
- Блокировка после N неудачных попыток

### Man-in-the-Middle
- Certificate Pinning
- Валидация Signal ключей через safety numbers
- E2E шифрование защищает от перехвата

### Replay атаки
- Каждое сообщение имеет уникальный nonce
- Защита на уровне протокола
- Таймстампы и sequence numbers

### Компрометация сервера
- E2E шифрование защищает 1-on-1 чаты
- Zero-Knowledge архитектура
- Даже при полном доступе к серверу — нельзя прочитать сообщения
          `},{id:"privacy",title:"Приватность",icon:E.jsx(wl,{size:16}),content:`
# Политика приватности

## Принципы

### Минимизация данных
- Собираем только необходимое для работы сервиса
- Не используем трекеры и аналитику
- Не продаём данные третьим лицам

### Прозрачность
- Честно говорим что можем и что не можем защитить
- Предупреждаем о разнице между E2E и server-side
- Открытый код для проверки

### Контроль пользователя
- Вы решаете что делиться
- Настройки приватности по умолчанию максимальны
- Возможность удалить все данные

## Какие данные собираются

### Обязательные
- **Username**: для идентификации
- **Email**: для восстановления (необязательно к подтверждению)
- **Хеш пароля**: для аутентификации
- **Публичные ключи**: для E2E шифрования

### Опциональные
- **Аватар**: если вы загрузите
- **Статус**: если установите
- **Имя**: если укажете

### Технические
- **Дата регистрации**: для антифлуда
- **Последняя активность**: для статуса "был(а) в сети"
- **JWT токены**: для авторизации сессий

### НЕ собираются
- ❌ IP адреса (не логируются)
- ❌ Метаданные устройства
- ❌ Логи активности
- ❌ Содержимое сообщений (невозможно прочитать)
- ❌ История звонков (только факт что был звонок)

## Настройки приватности

### Статус "Онлайн"
- Показывать всем
- Только контактам
- Никому

### Последняя активность
- Показывать всем
- Только контактам
- Никому

### Аватар
- Показывать всем
- Только контактам
- Никому

### Пересылка сообщений
- Разрешить
- Запретить (защита контента)

### Добавление в группы
- Все могут добавить
- Только контакты
- Запрашивать разрешение

## Удаление данных

### Удаление аккаунта
- Полное удаление из базы данных
- Удаление всех ключей
- Сообщения остаются у других пользователей (E2E специфика)

### Право на забвение
- 30 дней на отзыв решения
- После — безвозвратное удаление
- Уведомление контактов

## Соответствие GDPR

- ✅ Право на доступ к данным
- ✅ Право на исправление
- ✅ Право на удаление
- ✅ Право на портативность
- ✅ Право на возражение
- ✅ Прозрачность обработки

## Юрисдикция и запросы

### Расположение серверов
- Европа (GDPR compliance)
- Шифрование в состоянии покоя

### Ответ на запросы властей
- Можем предоставить только публичную информацию
- E2E сообщения физически невозможно расшифровать
- Прозрачный отчёт о запросах (Transparency Report)

### Что можем раскрыть
- Username и email (если есть)
- Дату регистрации
- Публичные ключи
- Зашифрованные сообщения (но без ключей)

### Что НЕ можем раскрыть
- ❌ Содержимое E2E сообщений (нет ключей)
- ❌ IP адреса (не сохраняем)
- ❌ Историю активности (не логируем)
          `}]},{id:"technical",title:"Технические детали",icon:E.jsx(f_,{size:16}),children:[{id:"architecture",title:"Архитектура",icon:E.jsx(v_,{size:16}),content:`
# Системная архитектура

## Технологический стек

### Frontend
- **React 18** — современный UI фреймворк
- **TypeScript** — типобезопасность
- **Vite** — быстрая сборка
- **Zustand** — легковесный state management
- **Socket.io Client** — real-time коммуникация
- **react-i18next** — интернационализация
- **Pure CSS** — без CSS фреймворков

### Desktop (Electron)
- **Electron** — кроссплатформенный desktop
- **better-sqlite3** — локальная база данных
- **SQLCipher** — шифрование БД
- **electron-builder** — сборка дистрибутивов
- **electron-updater** — автообновления

### Backend
- **Node.js 20+** — серверная платформа
- **Fastify** — быстрый веб-фреймворк
- **Socket.io** — WebSocket для real-time
- **PostgreSQL 16** — основная БД
- **Redis 7** — кэш и pub/sub
- **JWT** — аутентификация
- **bcrypt/argon2** — хеширование

### Криптография
- **@signalapp/libsignal-client** — Signal Protocol
- **SubtleCrypto API** — Web Crypto
- **tweetnacl** — дополнительные примитивы

### Медиа обработка
- **Sharp** — обработка изображений
- **FFmpeg** — обработка видео/аудио
- **Opus codec** — голосовые сообщения

### DevOps
- **Docker** — контейнеризация
- **Docker Compose** — оркестрация
- **Nginx** — обратный прокси и SSL
- **Git** — версионный контроль

## Архитектура системы

### Трёхуровневая архитектура

**Презентационный слой (Client)**
- React приложение (Browser)
- Electron приложение (Desktop)
- Общая кодовая база для UI

**Бизнес-логика (Backend)**
- Fastify REST API
- Socket.io для real-time
- Обработка медиа
- Аутентификация

**Хранение данных**
- PostgreSQL для персистентных данных
- Redis для кэша и очередей
- SQLCipher для локального хранения

## Схема базы данных

### Основные таблицы

**users**
- id, username, email, password_hash
- salt, encrypted_master_key, public_keys
- email_verified, created_at, last_seen

**messages**
- id, sender_id, recipient_id, chat_id
- encrypted_content, message_type
- created_at, edited_at, deleted_at
- reply_to_message_id

**chats**
- id, type (private/group)
- last_message_id, created_at

**groups**
- id, name, description, avatar
- creator_id, created_at

**group_members**
- group_id, user_id, role
- joined_at, permissions

**reactions**
- message_id, user_id, emoji

**files**
- id, message_id, filename
- file_type, file_size, encrypted_path

## Real-time коммуникация

### Socket.io события

**Клиент → Сервер**
- \`message:send\` — отправка сообщения
- \`message:edit\` — редактирование
- \`message:delete\` — удаление
- \`typing:start\` — начало печати
- \`typing:stop\` — конец печати
- \`call:offer\` — инициация звонка
- \`call:answer\` — ответ на звонок
- \`call:ice-candidate\` — WebRTC сигнализация

**Сервер → Клиент**
- \`message:new\` — новое сообщение
- \`message:updated\` — обновлено
- \`message:deleted\` — удалено
- \`typing:status\` — статус печати
- \`call:incoming\` — входящий звонок
- \`user:status\` — изменение статуса пользователя

## API структура

### RESTful endpoints

**Auth**
- POST \`/api/auth/register\`
- POST \`/api/auth/login\`
- POST \`/api/auth/verify-email\`
- POST \`/api/auth/forgot-password\`
- POST \`/api/auth/reset-password\`

**Users**
- GET \`/api/users/:username\`
- PATCH \`/api/users/me\`
- GET \`/api/users/me/sessions\`
- DELETE \`/api/users/me/sessions/:id\`

**Messages**
- GET \`/api/chats/:chatId/messages\`
- POST \`/api/chats/:chatId/messages\`
- PATCH \`/api/messages/:id\`
- DELETE \`/api/messages/:id\`

**Groups**
- POST \`/api/groups\`
- GET \`/api/groups/:id\`
- PATCH \`/api/groups/:id\`
- DELETE \`/api/groups/:id\`
- POST \`/api/groups/:id/members\`
- DELETE \`/api/groups/:id/members/:userId\`

**Files**
- POST \`/api/files/upload\`
- GET \`/api/files/:id\`
- DELETE \`/api/files/:id\`

## Производительность

### Оптимизации

**Базы данных**
- Индексы на часто запрашиваемых полях
- Connection pooling
- Prepared statements

**Кэширование**
- Redis для сессий
- Redis для недавних сообщений
- Кэш публичных ключей

**CDN и статика**
- Nginx для статических файлов
- Gzip/Brotli сжатие
- HTTP/2

**Ленивая загрузка**
- Пагинация сообщений (1000 за раз)
- Lazy loading медиа
- Виртуализация списков

## Масштабируемость

### Горизонтальное масштабирование

**Backend**
- Несколько инстансов Fastify
- Load balancer (Nginx)
- Session store в Redis (не в памяти)

**Socket.io**
- Redis adapter для multi-instance
- Sticky sessions в load balancer

**База данных**
- Read replicas для чтения
- Шардирование для больших объёмов

**Файловое хранилище**
- Отдельный файловый сервер
- Опционально S3-compatible хранилище
          `},{id:"api",title:"API Reference",icon:E.jsx(xu,{size:16}),content:`
# API Documentation

## Базовый URL

\`\`\`
https://api.cryptox.app/v1
\`\`\`

## Аутентификация

Все защищённые эндпоинты требуют JWT токен в заголовке:

\`\`\`
Authorization: Bearer <token>
\`\`\`

## Общие ответы

### Успешный ответ
\`\`\`json
{
  "success": true,
  "data": { ... }
}
\`\`\`

### Ошибка
\`\`\`json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
\`\`\`

## Auth Endpoints

### POST /auth/register

Регистрация нового пользователя

**Request Body:**
\`\`\`json
{
  "username": "alice",
  "email": "alice@example.com",
  "passwordHash": "argon2id$...",
  "salt": "base64...",
  "encryptedMasterKey": "base64...",
  "publicKeys": {
    "identityKey": "base64...",
    "signedPreKey": "base64...",
    "signature": "base64...",
    "oneTimePreKeys": ["base64...", ...]
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "token": "jwt...",
    "expiresAt": "2024-02-15T12:00:00Z"
  }
}
\`\`\`

### POST /auth/login

Вход в систему

**Request Body:**
\`\`\`json
{
  "username": "alice",
  "authToken": "derived from password"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "token": "jwt...",
    "encryptedMasterKey": "base64...",
    "expiresAt": "2024-02-15T12:00:00Z"
  }
}
\`\`\`

### POST /auth/verify-email

Подтверждение email кодом

**Request Body:**
\`\`\`json
{
  "code": "123456"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "verified": true
  }
}
\`\`\`

## Messages Endpoints

### GET /chats/:chatId/messages

Получить историю сообщений

**Query Params:**
- \`limit\` (default: 1000) — количество сообщений
- \`before\` (optional) — timestamp для пагинации

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "messages": [
      {
        "id": "uuid",
        "senderId": "uuid",
        "recipientId": "uuid",
        "encryptedContent": "base64...",
        "messageType": "text",
        "createdAt": "2024-01-15T10:00:00Z",
        "editedAt": null,
        "replyTo": null
      }
    ],
    "hasMore": true
  }
}
\`\`\`

### POST /chats/:chatId/messages

Отправить сообщение (используется редко, обычно через Socket.io)

**Request Body:**
\`\`\`json
{
  "encryptedContent": "base64...",
  "messageType": "text",
  "replyTo": "message-uuid (optional)"
}
\`\`\`

### PATCH /messages/:id

Редактировать сообщение

**Request Body:**
\`\`\`json
{
  "encryptedContent": "base64..."
}
\`\`\`

### DELETE /messages/:id

Удалить сообщение

**Query Params:**
- \`deleteForAll\` (boolean) — удалить у всех

## Groups Endpoints

### POST /groups

Создать группу

**Request Body:**
\`\`\`json
{
  "name": "Group Name",
  "description": "Optional description",
  "avatar": "base64 or null",
  "memberIds": ["uuid1", "uuid2"]
}
\`\`\`

### GET /groups/:id

Получить информацию о группе

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Group Name",
    "description": "...",
    "avatar": "url or null",
    "createdAt": "2024-01-15T10:00:00Z",
    "members": [
      {
        "userId": "uuid",
        "username": "alice",
        "role": "owner",
        "joinedAt": "2024-01-15T10:00:00Z"
      }
    ]
  }
}
\`\`\`

### POST /groups/:id/members

Добавить участника

**Request Body:**
\`\`\`json
{
  "userId": "uuid"
}
\`\`\`

### DELETE /groups/:id/members/:userId

Удалить участника

## Files Endpoints

### POST /files/upload

Загрузить файл

**Request:** multipart/form-data
- \`file\` — файл
- \`chatId\` — ID чата
- \`messageId\` — ID сообщения (опционально)

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "fileId": "uuid",
    "encryptedUrl": "https://...",
    "thumbnail": "https://... (for images)",
    "size": 1024000,
    "mimeType": "image/jpeg"
  }
}
\`\`\`

### GET /files/:id

Скачать файл (требует аутентификации и права доступа)

## Rate Limits

- **Неподтверждённые аккаунты**: 100 req/hour
- **Подтверждённые**: 1000 req/hour
- **Файлы**: 50 uploads/hour

## Коды ошибок

- \`INVALID_CREDENTIALS\` — неверные данные для входа
- \`USERNAME_TAKEN\` — username уже занят
- \`EMAIL_TAKEN\` — email уже зарегистрирован
- \`INVALID_CODE\` — неверный код подтверждения
- \`RATE_LIMIT_EXCEEDED\` — превышен лимит запросов
- \`UNAUTHORIZED\` — требуется аутентификация
- \`FORBIDDEN\` — нет прав доступа
- \`NOT_FOUND\` — ресурс не найден
- \`FILE_TOO_LARGE\` — файл слишком большой
          `}]}],h=x=>{s(T=>{const _=new Set(T);return _.has(x)?_.delete(x):_.add(x),_})},d=(x,T=0)=>{const _=x.children&&x.children.length>0,A=l.has(x.id),z=u===x.id;return E.jsxs("div",{className:"menu-item-wrapper",children:[E.jsx("div",{className:`menu-item ${z?"active":""} level-${T}`,onClick:()=>{_?h(x.id):n(x.id)},children:E.jsxs("div",{className:"menu-item-content",children:[_?A?E.jsx(t_,{size:16}):E.jsx(bf,{size:16}):null,E.jsx("span",{className:"menu-item-icon",children:_?A?E.jsx(y_,{size:16}):E.jsx(S1,{size:16}):x.icon}),E.jsx("span",{className:"menu-item-title",children:x.title})]})}),_&&A&&E.jsx("div",{className:"menu-children",children:x.children.map(U=>d(U,T+1))})]},x.id)},m=(x,T)=>{for(const _ of x){if(_.id===T&&_.content)return _.content;if(_.children){const A=m(_.children,T);if(A)return A}}return""},g=x=>{const T={"CHECK-CIRCLE":E.jsx(a_,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),CLOCK:E.jsx(u_,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),ACTIVITY:E.jsx($p,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),LOCK:E.jsx(Su,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),KEY:E.jsx(cf,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),SHIELD:E.jsx(wl,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),DATABASE:E.jsx(Tf,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),NETWORK:E.jsx(x1,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),SERVER:E.jsx(R_,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),"ALERT-TRIANGLE":E.jsx(H_,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),INFO:E.jsx(A_,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}}),"TRENDING-UP":E.jsx(B_,{size:14,style:{display:"inline",verticalAlign:"text-bottom",marginRight:"4px"}})},_=[],A=/\*\*\[ICON:\s*([A-Z-]+)\]\*\*\s*/g;let z=0,U,N=0;for(;(U=A.exec(x))!==null;){if(U.index>z){const D=x.substring(z,U.index);_.push(E.jsx("span",{children:D},`text-${N++}`))}const j=U[1];T[j]&&_.push(E.jsx("span",{className:"doc-icon",children:T[j]},`icon-${N++}`)),z=A.lastIndex}return z<x.length&&_.push(E.jsx("span",{children:x.substring(z)},`text-${N++}`)),_.length>0?E.jsx(E.Fragment,{children:_}):x},p=x=>(x=x.replace(/\*\*(\[(?:ICON|BADGE):[^\]]+\])\*\*/g,"$1"),x=x.replace(/\[BADGE:\s*([^\]]+)\]/g,'<span class="doc-badge">$1</span>'),x=x.replace(/\[ICON:\s*[A-Z-]+\]\s*/g,""),x),v=x=>{const T=x.trim().split(`
`),_=[];let A="",z=!1,U=[],N=!1;return T.forEach((j,D)=>{if(j.startsWith("```")){z?(_.push(E.jsx("pre",{className:"code-block",children:E.jsx("code",{children:A})},`code-${D}`)),A="",z=!1):z=!0;return}if(z){A+=j+`
`;return}if(j.startsWith("# "))N&&(_.push(E.jsx("ul",{className:"doc-list",children:U.map((H,q)=>E.jsx("li",{dangerouslySetInnerHTML:{__html:H}},q))},`list-${D}`)),U=[],N=!1),_.push(E.jsx("h1",{className:"doc-h1",children:j.substring(2)},D));else if(j.startsWith("## "))N&&(_.push(E.jsx("ul",{className:"doc-list",children:U.map((H,q)=>E.jsx("li",{dangerouslySetInnerHTML:{__html:H}},q))},`list-${D}`)),U=[],N=!1),_.push(E.jsx("h2",{className:"doc-h2",children:j.substring(3)},D));else if(j.startsWith("### "))N&&(_.push(E.jsx("ul",{className:"doc-list",children:U.map((H,q)=>E.jsx("li",{dangerouslySetInnerHTML:{__html:H}},q))},`list-${D}`)),U=[],N=!1),_.push(E.jsx("h3",{className:"doc-h3",children:j.substring(4)},D));else if(j.startsWith("- ")||j.startsWith("* ")){N=!0;const H=j.substring(2).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>');U.push(H)}else if(j.startsWith("`")&&j.endsWith("`"))N&&(_.push(E.jsx("ul",{className:"doc-list",children:U.map((H,q)=>E.jsx("li",{dangerouslySetInnerHTML:{__html:H}},q))},`list-${D}`)),U=[],N=!1),_.push(E.jsx("code",{className:"inline-code",children:j.slice(1,-1)},D));else if(j.trim()){N&&!j.startsWith("  ")&&(_.push(E.jsx("ul",{className:"doc-list",children:U.map((q,K)=>E.jsx("li",{dangerouslySetInnerHTML:{__html:q}},K))},`list-${D}`)),U=[],N=!1);const H=p(j).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');j.includes("**[ICON:")?_.push(E.jsx("p",{className:"doc-paragraph icon-paragraph",children:g(j)},D)):_.push(E.jsx("p",{className:"doc-paragraph",dangerouslySetInnerHTML:{__html:H}},D))}}),N&&U.length>0&&_.push(E.jsx("ul",{className:"doc-list",children:U.map((j,D)=>E.jsx("li",{dangerouslySetInnerHTML:{__html:j}},D))},"list-final")),_},b=m(f,u);return E.jsx("section",{className:"documentation-section",id:"documentation",children:E.jsxs("div",{className:"documentation-container",children:[E.jsxs("div",{className:"documentation-header",children:[E.jsx("h2",{className:"documentation-title",children:"Техническая документация"}),E.jsx("p",{className:"documentation-subtitle",children:"Полное руководство по архитектуре, функционалу и безопасности CryptoX"})]}),E.jsxs("div",{className:"documentation-window",children:[E.jsxs("div",{className:"documentation-sidebar",children:[E.jsxs("div",{className:"sidebar-header",children:[E.jsx(v1,{size:18}),E.jsx("span",{children:"Содержание"})]}),E.jsx("div",{className:"sidebar-menu",children:f.map(x=>d(x))})]}),E.jsx("div",{className:"documentation-content",ref:r,children:E.jsx("div",{className:"content-wrapper",children:b?v(b):E.jsxs("div",{className:"empty-state",children:[E.jsx(v1,{size:48}),E.jsx("p",{children:"Выберите раздел из меню"})]})})})]})]})})};function QS(){return E.jsxs(E.Fragment,{children:[E.jsx(Vp,{}),E.jsx(pv,{}),E.jsx(GS,{}),E.jsx(XS,{}),E.jsx(VS,{})]})}Xp.createRoot(document.getElementById("root")).render(E.jsx(rt.StrictMode,{children:E.jsx(QS,{})}));
