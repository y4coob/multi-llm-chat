(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1787:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9324,23)),Promise.resolve().then(r.bind(r,5118)),Promise.resolve().then(r.t.bind(r,5299,23))},5118:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>ea});var n=r(5155),o=r(241),s=r(2115),a=r(7650),i=r(3610),l=r(8068),d=r(9741),u=r(8166),c=r(9674),p=r(7323),f=r(7028),v=r(3360),m=r(1524),w=r(1488),x=r(6611),y=s.forwardRef((e,t)=>(0,n.jsx)(v.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));y.displayName="VisuallyHidden";var h="ToastProvider",[g,E,T]=(0,d.N)("Toast"),[b,N]=(0,u.A)("Toast",[T]),[R,j]=b(h),P=e=>{let{__scopeToast:t,label:r="Notification",duration:o=5e3,swipeDirection:a="right",swipeThreshold:i=50,children:l}=e,[d,u]=s.useState(null),[c,p]=s.useState(0),f=s.useRef(!1),v=s.useRef(!1);return r.trim()||console.error("Invalid prop `label` supplied to `".concat(h,"`. Expected non-empty `string`.")),(0,n.jsx)(g.Provider,{scope:t,children:(0,n.jsx)(R,{scope:t,label:r,duration:o,swipeDirection:a,swipeThreshold:i,toastCount:c,viewport:d,onViewportChange:u,onToastAdd:s.useCallback(()=>p(e=>e+1),[]),onToastRemove:s.useCallback(()=>p(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:v,children:l})})};P.displayName=h;var S="ToastViewport",C=["F8"],A="toast.viewportPause",D="toast.viewportResume",I=s.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:o=C,label:a="Notifications ({hotkey})",...i}=e,d=j(S,r),u=E(r),p=s.useRef(null),f=s.useRef(null),m=s.useRef(null),w=s.useRef(null),x=(0,l.s)(t,w,d.onViewportChange),y=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),h=d.toastCount>0;s.useEffect(()=>{let e=e=>{var t;0!==o.length&&o.every(t=>e[t]||e.code===t)&&(null===(t=w.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[o]),s.useEffect(()=>{let e=p.current,t=w.current;if(h&&e&&t){let r=()=>{if(!d.isClosePausedRef.current){let e=new CustomEvent(A);t.dispatchEvent(e),d.isClosePausedRef.current=!0}},n=()=>{if(d.isClosePausedRef.current){let e=new CustomEvent(D);t.dispatchEvent(e),d.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||n()},s=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",o),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",s),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",s),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[h,d.isClosePausedRef]);let T=s.useCallback(e=>{let{tabbingDirection:t}=e,r=u().map(e=>{let r=e.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===t?n:n.reverse()});return("forwards"===t?r.reverse():r).flat()},[u]);return s.useEffect(()=>{let e=w.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,o,s;let r=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(n=f.current)||void 0===n||n.focus();return}let i=T({tabbingDirection:a?"backwards":"forwards"}),l=i.findIndex(e=>e===r);Z(i.slice(l+1))?t.preventDefault():a?null===(o=f.current)||void 0===o||o.focus():null===(s=m.current)||void 0===s||s.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[u,T]),(0,n.jsxs)(c.lg,{ref:p,role:"region","aria-label":a.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:h?void 0:"none"},children:[h&&(0,n.jsx)(F,{ref:f,onFocusFromOutsideViewport:()=>{Z(T({tabbingDirection:"forwards"}))}}),(0,n.jsx)(g.Slot,{scope:r,children:(0,n.jsx)(v.sG.ol,{tabIndex:-1,...i,ref:x})}),h&&(0,n.jsx)(F,{ref:m,onFocusFromOutsideViewport:()=>{Z(T({tabbingDirection:"backwards"}))}})]})});I.displayName=S;var L="ToastFocusProxy",F=s.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:o,...s}=e,a=j(L,r);return(0,n.jsx)(y,{"aria-hidden":!0,tabIndex:0,...s,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;(null===(t=a.viewport)||void 0===t?void 0:t.contains(r))||o()}})});F.displayName=L;var _="Toast",k=s.forwardRef((e,t)=>{let{forceMount:r,open:o,defaultOpen:s,onOpenChange:a,...l}=e,[d=!0,u]=(0,w.i)({prop:o,defaultProp:s,onChange:a});return(0,n.jsx)(f.C,{present:r||d,children:(0,n.jsx)(K,{open:d,...l,ref:t,onClose:()=>u(!1),onPause:(0,m.c)(e.onPause),onResume:(0,m.c)(e.onResume),onSwipeStart:(0,i.m)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,i.m)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(r,"px"))}),onSwipeCancel:(0,i.m)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,i.m)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(r,"px")),u(!1)})})})});k.displayName=_;var[M,O]=b(_,{onClose(){}}),K=s.forwardRef((e,t)=>{let{__scopeToast:r,type:o="foreground",duration:d,open:u,onClose:p,onEscapeKeyDown:f,onPause:w,onResume:x,onSwipeStart:y,onSwipeMove:h,onSwipeCancel:E,onSwipeEnd:T,...b}=e,N=j(_,r),[R,P]=s.useState(null),S=(0,l.s)(t,e=>P(e)),C=s.useRef(null),I=s.useRef(null),L=d||N.duration,F=s.useRef(0),k=s.useRef(L),O=s.useRef(0),{onToastAdd:K,onToastRemove:G}=N,U=(0,m.c)(()=>{var e;(null==R?void 0:R.contains(document.activeElement))&&(null===(e=N.viewport)||void 0===e||e.focus()),p()}),X=s.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(O.current),F.current=new Date().getTime(),O.current=window.setTimeout(U,e))},[U]);s.useEffect(()=>{let e=N.viewport;if(e){let t=()=>{X(k.current),null==x||x()},r=()=>{let e=new Date().getTime()-F.current;k.current=k.current-e,window.clearTimeout(O.current),null==w||w()};return e.addEventListener(A,r),e.addEventListener(D,t),()=>{e.removeEventListener(A,r),e.removeEventListener(D,t)}}},[N.viewport,L,w,x,X]),s.useEffect(()=>{u&&!N.isClosePausedRef.current&&X(L)},[u,L,N.isClosePausedRef,X]),s.useEffect(()=>(K(),()=>G()),[K,G]);let H=s.useMemo(()=>R?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!n){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(R):null,[R]);return N.viewport?(0,n.jsxs)(n.Fragment,{children:[H&&(0,n.jsx)(V,{__scopeToast:r,role:"status","aria-live":"foreground"===o?"assertive":"polite","aria-atomic":!0,children:H}),(0,n.jsx)(M,{scope:r,onClose:U,children:a.createPortal((0,n.jsx)(g.ItemSlot,{scope:r,children:(0,n.jsx)(c.bL,{asChild:!0,onEscapeKeyDown:(0,i.m)(f,()=>{N.isFocusedToastEscapeKeyDownRef.current||U(),N.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,n.jsx)(v.sG.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":N.swipeDirection,...b,ref:S,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,i.m)(e.onKeyDown,e=>{"Escape"!==e.key||(null==f||f(e.nativeEvent),e.nativeEvent.defaultPrevented||(N.isFocusedToastEscapeKeyDownRef.current=!0,U()))}),onPointerDown:(0,i.m)(e.onPointerDown,e=>{0===e.button&&(C.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,i.m)(e.onPointerMove,e=>{if(!C.current)return;let t=e.clientX-C.current.x,r=e.clientY-C.current.y,n=!!I.current,o=["left","right"].includes(N.swipeDirection),s=["left","up"].includes(N.swipeDirection)?Math.min:Math.max,a=o?s(0,t):0,i=o?0:s(0,r),l="touch"===e.pointerType?10:2,d={x:a,y:i},u={originalEvent:e,delta:d};n?(I.current=d,z("toast.swipeMove",h,u,{discrete:!1})):Q(d,N.swipeDirection,l)?(I.current=d,z("toast.swipeStart",y,u,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(C.current=null)}),onPointerUp:(0,i.m)(e.onPointerUp,e=>{let t=I.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),I.current=null,C.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};Q(t,N.swipeDirection,N.swipeThreshold)?z("toast.swipeEnd",T,n,{discrete:!0}):z("toast.swipeCancel",E,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),N.viewport)})]}):null}),V=e=>{let{__scopeToast:t,children:r,...o}=e,a=j(_,t),[i,l]=s.useState(!1),[d,u]=s.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,m.c)(e);(0,x.N)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>l(!0)),s.useEffect(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),d?null:(0,n.jsx)(p.Z,{asChild:!0,children:(0,n.jsx)(y,{...o,children:i&&(0,n.jsxs)(n.Fragment,{children:[a.label," ",r]})})})},G=s.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e;return(0,n.jsx)(v.sG.div,{...o,ref:t})});G.displayName="ToastTitle";var U=s.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e;return(0,n.jsx)(v.sG.div,{...o,ref:t})});U.displayName="ToastDescription";var X="ToastAction",H=s.forwardRef((e,t)=>{let{altText:r,...o}=e;return r.trim()?(0,n.jsx)(Y,{altText:r,asChild:!0,children:(0,n.jsx)(q,{...o,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(X,"`. Expected non-empty `string`.")),null)});H.displayName=X;var W="ToastClose",q=s.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e,s=O(W,r);return(0,n.jsx)(Y,{asChild:!0,children:(0,n.jsx)(v.sG.button,{type:"button",...o,ref:t,onClick:(0,i.m)(e.onClick,s.onClose)})})});q.displayName=W;var Y=s.forwardRef((e,t)=>{let{__scopeToast:r,altText:o,...s}=e;return(0,n.jsx)(v.sG.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...s,ref:t})});function z(e,t,r,n){let{discrete:o}=n,s=r.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&s.addEventListener(e,t,{once:!0}),o?(0,v.hO)(s,a):s.dispatchEvent(a)}var Q=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.abs(e.x),o=Math.abs(e.y),s=n>o;return"left"===t||"right"===t?s&&n>r:!s&&o>r};function Z(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var $=r(1027),B=r(689),J=r(9602);let ee=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(I,{ref:t,className:(0,J.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...o})});ee.displayName=I.displayName;let et=(0,$.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),er=s.forwardRef((e,t)=>{let{className:r,variant:o,...s}=e;return(0,n.jsx)(k,{ref:t,className:(0,J.cn)(et({variant:o}),r),...s})});er.displayName=k.displayName,s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(H,{ref:t,className:(0,J.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...o})}).displayName=H.displayName;let en=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(q,{ref:t,className:(0,J.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...o,children:(0,n.jsx)(B.A,{className:"h-4 w-4"})})});en.displayName=q.displayName;let eo=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(G,{ref:t,className:(0,J.cn)("text-sm font-semibold [&+div]:text-xs",r),...o})});eo.displayName=G.displayName;let es=s.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(U,{ref:t,className:(0,J.cn)("text-sm opacity-90",r),...o})});function ea(){let{toasts:e}=(0,o.dj)();return(0,n.jsxs)(P,{children:[e.map(function(e){let{id:t,title:r,description:o,action:s,...a}=e;return(0,n.jsxs)(er,{...a,children:[(0,n.jsxs)("div",{className:"grid gap-1",children:[r&&(0,n.jsx)(eo,{children:r}),o&&(0,n.jsx)(es,{children:o})]}),s,(0,n.jsx)(en,{})]},t)}),(0,n.jsx)(ee,{})]})}es.displayName=U.displayName},241:(e,t,r)=>{"use strict";r.d(t,{dj:()=>p});var n=r(2115);let o=0,s=new Map,a=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?a(r):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function u(e){d=i(d,e),l.forEach(e=>{e(d)})}function c(e){let{...t}=e,r=(o=(o+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>u({type:"DISMISS_TOAST",toastId:r});return u({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function p(){let[e,t]=n.useState(d);return n.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},9602:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var n=r(3463),o=r(9795);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,n.$)(t))}},9324:()=>{},5299:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[618,906,148,441,517,358],()=>t(1787)),_N_E=e.O()}]);