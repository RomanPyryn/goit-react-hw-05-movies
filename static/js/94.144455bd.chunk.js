"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[94],{6820:function(e,t,n){n.d(t,{Z:function(){return d}});var r,o,a=n(501),i=n(6871),s=n(168),c=n(1223),u=c.Z.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  font-weight: 500;\n"]))),l=c.Z.li(o||(o=(0,s.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n\n  & a {\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n  }\n\n  & img {\n    margin-right: 10px;\n    border-radius: 50%;\n  }\n"]))),f=n(184),d=function(e){var t=e.onData,n=(0,i.TH)();return console.log(n.pathname),(0,f.jsx)(u,{children:t.map((function(e){var t;return(0,f.jsx)(l,{children:(0,f.jsxs)(a.rU,{to:"/"===n.pathname?"movies/".concat(e.id):"".concat(e.id),children:[(0,f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300/").concat(e.poster_path),alt:e.title,width:"20px",height:"20px"}),null!==(t=e.title)&&void 0!==t?t:e.original_title]})},e.id)}))})}},3570:function(e,t,n){n.d(t,{Pg:function(){return d},XZ:function(){return p},a2:function(){return f},fN:function(){return m},q:function(){return v}});var r=n(5861),o=n(4687),a=n.n(o),i=n(4569),s=n.n(i),c="b19e6b2986fc1ae4c290daa4cefec337",u="https://api.themoviedb.org/3/",l="".concat(u,"trending/movie/day"),f=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(l,"?api_key=").concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(u,"movie/").concat(t,"?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()("".concat(u,"search/movie?api_key=").concat(c,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},8094:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var r=n(5861),o=n(885),a=n(4687),i=n.n(a),s=n(2791);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=n(907);var p=n(181);function m(e){return function(e){if(Array.isArray(e))return(0,d.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,p.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var g=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(r&&(r+=" "),r+=t);return r},y=["theme","type"],h=["delay","staleId"];function b(e){return"number"===typeof e&&!isNaN(e)}function T(e){return"boolean"===typeof e}function E(e){return"string"===typeof e}function O(e){return"function"===typeof e}function _(e){return E(e)||O(e)?e:null}function C(e){return 0===e||e}function x(e){return(0,s.isValidElement)(e)||E(e)||O(e)||b(e)}var I={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function L(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,a=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,p=o?t+"--"+a:t,m=o?n+"--"+a:n,v=(0,s.useRef)(),g=(0,s.useRef)(0);function y(e){if(e.target===f.current){var t=f.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",y),t.removeEventListener("animationcancel",y),0===g.current&&"animationcancel"!==e.type&&(t.className=v.current)}}function h(){var e=f.current;e.removeEventListener("animationend",h),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,s.useLayoutEffect)((function(){!function(){var e=f.current;v.current=e.className,e.className+=" "+p,e.addEventListener("animationend",y),e.addEventListener("animationcancel",y)}()}),[]),(0,s.useEffect)((function(){d||(c?h():function(){g.current=1;var e=f.current;e.className+=" "+m,e.addEventListener("animationend",h)}())}),[d]),s.createElement(s.Fragment,null,r)}}function k(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var P={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,m([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},N=function(e){var t=e.theme,n=e.type,r=f(e,y);return s.createElement("svg",l({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var R={info:function(e){return s.createElement(N,l({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(N,l({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(N,l({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(N,l({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function S(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(O(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):E(o)||b(o)?a=o:r?a=R.spinner():function(e){return e in R}(n)&&(a=R[n](i))),a}function D(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,d=function(e){return-1!==i.indexOf(e)},p=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return l.get(e)}}).current;function v(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function g(e){c((function(t){return C(e)?t.filter((function(t){return t!==e})):[]}))}function y(){var e=p.queue.shift();w(e.toastContent,e.toastProps,e.staleId)}function I(e,t){var r=t.delay,o=t.staleId,a=f(t,h);if(x(e)&&!function(e){return!u.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||l.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,c=a.updateId,d=a.data,m=p.props,v=function(){return g(i)},I=null==c;I&&p.count++;var L,N,R={toastId:i,updateId:c,data:d,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||m.theme,icon:null!=a.icon?a.icon:m.icon,isIn:!1,key:a.key||p.toastKey++,type:a.type,closeToast:v,closeButton:a.closeButton,rtl:m.rtl,position:a.position||m.position,transition:a.transition||m.transition,className:_(a.className||m.toastClassName),bodyClassName:_(a.bodyClassName||m.bodyClassName),style:a.style||m.toastStyle,bodyStyle:a.bodyStyle||m.bodyStyle,onClick:a.onClick||m.onClick,pauseOnHover:T(a.pauseOnHover)?a.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:T(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:T(a.draggable)?a.draggable:m.draggable,draggablePercent:a.draggablePercent||m.draggablePercent,draggableDirection:a.draggableDirection||m.draggableDirection,closeOnClick:T(a.closeOnClick)?a.closeOnClick:m.closeOnClick,progressClassName:_(a.progressClassName||m.progressClassName),progressStyle:a.progressStyle||m.progressStyle,autoClose:!a.isLoading&&(L=a.autoClose,N=m.autoClose,!1===L||b(L)&&L>0?L:N),hideProgressBar:T(a.hideProgressBar)?a.hideProgressBar:m.hideProgressBar,progress:a.progress,role:a.role||m.role,deleteToast:function(){var e=k(l.get(i),"removed");l.delete(i),P.emit(4,e);var t=p.queue.length;if(p.count=C(i)?p.count-1:p.count-p.displayedToast,p.count<0&&(p.count=0),t>0){var r=C(i)?1:p.props.limit;if(1===t||1===r)p.displayedToast++,y();else{var o=r>t?t:r;p.displayedToast=o;for(var a=0;a<o;a++)y()}}else n()}};R.iconOut=S(R),O(a.onOpen)&&(R.onOpen=a.onOpen),O(a.onClose)&&(R.onClose=a.onClose),R.closeButton=m.closeButton,!1===a.closeButton||x(a.closeButton)?R.closeButton=a.closeButton:!0===a.closeButton&&(R.closeButton=!x(m.closeButton)||m.closeButton);var D=e;(0,s.isValidElement)(e)&&!E(e.type)?D=(0,s.cloneElement)(e,{closeToast:v,toastProps:R,data:d}):O(e)&&(D=e({closeToast:v,toastProps:R,data:d})),m.limit&&m.limit>0&&p.count>m.limit&&I?p.queue.push({toastContent:D,toastProps:R,staleId:o}):b(r)?setTimeout((function(){w(D,R,o)}),r):w(D,R,o)}}function w(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat(m(e),[r]).filter((function(e){return e!==n}))})),P.emit(4,k(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return p.containerId=e.containerId,P.cancelEmit(3).on(0,I).on(1,(function(e){return u.current&&g(e)})).on(5,v).emit(2,p),function(){l.clear(),P.emit(3,p)}}),[]),(0,s.useEffect)((function(){p.props=e,p.isToastActive=d,p.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:d}}function j(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function A(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function B(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,h=e.closeOnClick;function b(t){if(e.draggable){d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",x),document.addEventListener("touchmove",C),document.addEventListener("touchend",x);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=j(t.nativeEvent),d.y=A(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(d.boundingRect){var t=d.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&d.x>=o&&d.x<=a&&d.y>=n&&d.y<=r?_():E()}}function E(){a(!0)}function _(){a(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&_(),d.x=j(t),d.y=A(t),"x"===e.draggableDirection?d.delta=d.x-d.start:d.delta=d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+d.delta+"px)",n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function x(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",x);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",E,{once:!0}),O(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;O(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||_();window.addEventListener("focus",E),window.addEventListener("blur",_)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(I.onMouseEnter=_,I.onMouseLeave=E),h&&(I.onClick=function(e){y&&y(e),d.canCloseOnClick&&g()}),{playToast:E,pauseToast:_,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:I}}function M(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Z(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=e.hide,i=e.className,u=e.style,f=e.controlledProgress,d=e.progress,p=e.rtl,m=e.isIn,v=e.theme,y=l(l({},u),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});f&&(y.transform="scaleX("+d+")");var h=g("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+o,c({},"Toastify__progress-bar--rtl",p)),b=O(i)?i({rtl:p,type:o,defaultClassName:h}):g(h,i),T=c({},f&&d>=1?"onTransitionEnd":"onAnimationEnd",f&&d<1?null:function(){m&&r()});return s.createElement("div",l({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:b,style:y},T))}Z.defaultProps={type:w.DEFAULT,hide:!1};var F=function(e){var t=B(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,u=e.children,f=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,y=e.transition,h=e.position,b=e.className,T=e.style,E=e.bodyClassName,_=e.bodyStyle,C=e.progressClassName,x=e.progressStyle,I=e.updateId,w=e.role,L=e.progress,k=e.rtl,P=e.toastId,N=e.deleteToast,R=e.isIn,S=e.isLoading,D=e.iconOut,j=e.theme,A=g("Toastify__toast","Toastify__toast-theme--"+j,"Toastify__toast--"+p,c({},"Toastify__toast--rtl",k)),F=O(b)?b({rtl:k,position:h,type:p,defaultClassName:A}):g(A,b),z=!!L,H={closeToast:v,type:p,theme:j},q=null;return!1===i||(q=O(i)?i(H):s.isValidElement(i)?s.cloneElement(i,H):M(H)),s.createElement(y,{isIn:R,done:N,position:h,preventExitTransition:r,nodeRef:o},s.createElement("div",l(l({id:P,onClick:d,className:F},a),{},{style:T,ref:o}),s.createElement("div",l(l({},R&&{role:w}),{},{className:O(E)?E({type:p}):g("Toastify__toast-body",E),style:_}),null!=D&&s.createElement("div",{className:g("Toastify__toast-icon",c({},"Toastify--animate-icon Toastify__zoom-enter",!S))},D),s.createElement("div",null,u)),q,(f||z)&&s.createElement(Z,l(l({},I&&!z?{key:"pb-"+I}:{}),{},{rtl:k,theme:j,delay:f,isRunning:n,isIn:R,closeToast:v,hide:m,type:p,style:x,className:C,controlledProgress:z,progress:L}))))},z=L({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),H=(L({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),L({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),L({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,s.forwardRef)((function(e,t){var n=D(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,u=e.style,f=e.rtl,d=e.containerId;function p(e){var t=g("Toastify__toast-container","Toastify__toast-container--"+e,c({},"Toastify__toast-container--rtl",f));return O(i)?i({position:e,rtl:f,defaultClassName:t}):g(t,_(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:d},r((function(e,t){var n=t.length?l({},u):l(l({},u),{},{pointerEvents:"none"});return s.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(F,l(l({},o),{},{isIn:a(o.toastId),style:l(l({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+o.key}),r)})))})))})));H.displayName="ToastContainer",H.defaultProps={position:I.TOP_RIGHT,transition:z,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:M,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var q,U=new Map,Q=[];function V(){return Math.random().toString(36).substring(2,9)}function W(e){return e&&(E(e.toastId)||b(e.toastId))?e.toastId:V()}function G(e,t){return U.size>0?P.emit(0,e,t):Q.push({content:e,options:t}),t.toastId}function X(e,t){return l(l({},t),{},{type:t&&t.type||e,toastId:W(t)})}function Y(e){return function(t,n){return G(t,X(e,n))}}function K(e,t){return G(e,X(w.DEFAULT,t))}K.loading=function(e,t){return G(e,X(w.DEFAULT,l({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},K.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=E(o)?K.loading(o,n):K.loading(o.render,l(l({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=l(l(l({type:e},s),n),{},{data:o}),i=E(t)?{render:t}:t;return r?K.update(r,l(l({},a),i)):K(i.render,l(l({},a),i)),o}K.dismiss(r)},u=O(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},K.success=Y(w.SUCCESS),K.info=Y(w.INFO),K.error=Y(w.ERROR),K.warning=Y(w.WARNING),K.warn=K.warning,K.dark=function(e,t){return G(e,X(w.DEFAULT,l({theme:"dark"},t)))},K.dismiss=function(e){return P.emit(1,e)},K.clearWaitingQueue=function(e){return void 0===e&&(e={}),P.emit(5,e)},K.isActive=function(e){var t=!1;return U.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},K.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=U.get(n||q);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=l(l(l({},r),t),{},{toastId:t.toastId||e,updateId:V()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,G(i,a)}}),0)},K.done=function(e){K.update(e,{progress:1})},K.onChange=function(e){return P.on(4,e),function(){P.off(4,e)}},K.POSITION=I,K.TYPE=w,P.on(2,(function(e){q=e.containerId||e,U.set(q,e),Q.forEach((function(e){P.emit(0,e.content,e.options)})),Q=[]})).on(3,(function(e){U.delete(e.containerId||e),0===U.size&&P.off(0).off(1).off(5)}));var J,$,ee=n(3570),te=n(168),ne=n(1223),re=ne.Z.div(J||(J=(0,te.Z)(["\n  margin-top: 15px;\n"]))),oe=ne.Z.input($||($=(0,te.Z)(["\n  width: 250px;\n  margin-right: 5px;\n"]))),ae=n(184),ie=function(e){var t=e.onSubmitFom;return(0,ae.jsx)(re,{children:(0,ae.jsxs)("form",{onSubmit:t,children:[(0,ae.jsx)(oe,{type:"text",name:"serch",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,ae.jsx)("button",{type:"submit",children:"Search"})]})})},se=n(501),ce=n(6820),ue=function(){var e=(0,s.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1],c=(0,s.useState)([]),u=(0,o.Z)(c,2),l=u[0],f=u[1],d=(0,se.lr)(""),p=(0,o.Z)(d,2),m=p[0],v=p[1];(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.q(t);case 3:0===(n=e.sent).length&&K.error("Write something else!"),v({query:t}),f(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();""!==n&&e(n)}),[n,v]);return console.log(m),(0,ae.jsxs)("div",{children:[(0,ae.jsx)(ie,{onSubmitFom:function(e){e.preventDefault();var t=e.currentTarget.elements.serch.value;if(""===t.trim())return K.error("Write something!");a(t)}}),l.length>0&&(0,ae.jsx)(ce.Z,{onData:l}),(0,ae.jsx)(H,{})]})}}}]);
//# sourceMappingURL=94.144455bd.chunk.js.map