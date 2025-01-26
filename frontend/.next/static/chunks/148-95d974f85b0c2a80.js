"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{3610:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},9741:(e,t,n)=>{n.d(t,{N:()=>s});var r=n(2115),o=n(8166),u=n(8068),i=n(2317),l=n(5155);function s(e){let t=e+"CollectionProvider",[n,s]=(0,o.A)(t),[a,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return(0,l.jsx)(a,{scope:t,itemMap:u,collectionRef:o,children:n})};d.displayName=t;let f=e+"CollectionSlot",m=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=c(f,n),s=(0,u.s)(t,o.collectionRef);return(0,l.jsx)(i.DX,{ref:s,children:r})});m.displayName=f;let v=e+"CollectionItemSlot",p="data-radix-collection-item",y=r.forwardRef((e,t)=>{let{scope:n,children:o,...s}=e,a=r.useRef(null),d=(0,u.s)(t,a),f=c(v,n);return r.useEffect(()=>(f.itemMap.set(a,{ref:a,...s}),()=>void f.itemMap.delete(a))),(0,l.jsx)(i.DX,{[p]:"",ref:d,children:o})});return y.displayName=v,[{Provider:d,Slot:m,ItemSlot:y},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(p,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},s]}},8166:(e,t,n)=>{n.d(t,{A:()=>i,q:()=>u});var r=n(2115),o=n(5155);function u(e,t){let n=r.createContext(t),u=e=>{let{children:t,...u}=e,i=r.useMemo(()=>u,Object.values(u));return(0,o.jsx)(n.Provider,{value:i,children:t})};return u.displayName=e+"Provider",[u,function(o){let u=r.useContext(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],u=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return u.scopeName=e,[function(t,u){let i=r.createContext(u),l=n.length;n=[...n,u];let s=t=>{let{scope:n,children:u,...s}=t,a=n?.[e]?.[l]||i,c=r.useMemo(()=>s,Object.values(s));return(0,o.jsx)(a.Provider,{value:c,children:u})};return s.displayName=t+"Provider",[s,function(n,o){let s=o?.[e]?.[l]||i,a=r.useContext(s);if(a)return a;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(u,...t)]}},9674:(e,t,n)=>{n.d(t,{lg:()=>E,qW:()=>f,bL:()=>y});var r,o=n(2115),u=n(3610),i=n(3360),l=n(8068),s=n(1524),a=n(5155),c="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:y,onPointerDownOutside:E,onFocusOutside:N,onInteractOutside:w,onDismiss:b,...h}=e,C=o.useContext(d),[g,O]=o.useState(null),L=null!==(f=null==g?void 0:g.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,P]=o.useState({}),R=(0,l.s)(t,e=>O(e)),M=Array.from(C.layers),[x]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),D=M.indexOf(x),T=g?M.indexOf(g):-1,k=C.layersWithOutsidePointerEventsDisabled.size>0,A=T>=D,S=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.c)(e),u=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!u.current){let t=function(){p("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);u.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>u.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!A||n||(null==E||E(e),null==w||w(e),e.defaultPrevented||null==b||b())},L),_=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.c)(e),u=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!u.current&&p("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>u.current=!0,onBlurCapture:()=>u.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==N||N(e),null==w||w(e),e.defaultPrevented||null==b||b())},L);return!function(e,t=globalThis?.document){let n=(0,s.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{T!==C.layers.size-1||(null==y||y(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},L),o.useEffect(()=>{if(g)return m&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=L.body.style.pointerEvents,L.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(g)),C.layers.add(g),v(),()=>{m&&1===C.layersWithOutsidePointerEventsDisabled.size&&(L.body.style.pointerEvents=r)}},[g,L,m,C]),o.useEffect(()=>()=>{g&&(C.layers.delete(g),C.layersWithOutsidePointerEventsDisabled.delete(g),v())},[g,C]),o.useEffect(()=>{let e=()=>P({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,a.jsx)(i.sG.div,{...h,ref:R,style:{pointerEvents:k?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.m)(e.onFocusCapture,_.onFocusCapture),onBlurCapture:(0,u.m)(e.onBlurCapture,_.onBlurCapture),onPointerDownCapture:(0,u.m)(e.onPointerDownCapture,S.onPointerDownCapture)})});f.displayName="DismissableLayer";var m=o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),u=(0,l.s)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,a.jsx)(i.sG.div,{...e,ref:u})});function v(){let e=new CustomEvent(c);document.dispatchEvent(e)}function p(e,t,n,r){let{discrete:o}=r,u=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),o?(0,i.hO)(u,l):u.dispatchEvent(l)}m.displayName="DismissableLayerBranch";var y=f,E=m},7323:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2115),o=n(7650),u=n(3360),i=n(6611),l=n(5155),s=r.forwardRef((e,t)=>{var n,s;let{container:a,...c}=e,[d,f]=r.useState(!1);(0,i.N)(()=>f(!0),[]);let m=a||d&&(null===(s=globalThis)||void 0===s?void 0:null===(n=s.document)||void 0===n?void 0:n.body);return m?o.createPortal((0,l.jsx)(u.sG.div,{...c,ref:t}),m):null});s.displayName="Portal"},7028:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(2115),o=n(8068),u=n(6611),i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[o,i]=r.useState(),s=r.useRef({}),a=r.useRef(e),c=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=l(s.current);c.current="mounted"===d?e:"none"},[d]),(0,u.N)(()=>{let t=s.current,n=a.current;if(n!==e){let r=c.current,o=l(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),a.current=e}},[e,f]),(0,u.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=l(s.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!a.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},u=e=>{e.target===o&&(c.current=l(s.current))};return o.addEventListener("animationstart",u),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",u),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(s.current=getComputedStyle(e)),i(e)},[])}}(t),s="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),a=(0,o.s)(i.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(s));return"function"==typeof n||i.isPresent?r.cloneElement(s,{ref:a}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},1524:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(2115);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1488:(e,t,n)=>{n.d(t,{i:()=>u});var r=n(2115),o=n(1524);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[u]=n,i=r.useRef(u),l=(0,o.c)(t);return r.useEffect(()=>{i.current!==u&&(l(u),i.current=u)},[u,i,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,s=l?e:u,a=(0,o.c)(n);return[s,r.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else i(t)},[l,e,i,a])]}},6611:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(2115),o=globalThis?.document?r.useLayoutEffect:()=>{}},4057:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:n,strokeWidth:s?24*Number(l)/Number(o):l,className:u("lucide",a),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),s=(e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:s,...a}=n;return(0,r.createElement)(l,{ref:i,iconNode:t,className:u("lucide-".concat(o(e)),s),...a})});return n.displayName="".concat(e),n}},689:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(4057).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])}}]);