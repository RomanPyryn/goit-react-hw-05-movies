"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[52],{6820:function(n,t,r){r.d(t,{Z:function(){return d}});var e,a,c=r(501),u=r(6871),i=r(168),o=r(1223),s=o.Z.ul(e||(e=(0,i.Z)(["\n  list-style: none;\n  font-weight: 500;\n"]))),p=o.Z.li(a||(a=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n\n  & a {\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n  }\n\n  & img {\n    margin-right: 10px;\n    border-radius: 50%;\n  }\n"]))),f=r(184),d=function(n){var t=n.onData,r=(0,u.TH)();return(0,f.jsx)(s,{children:t.map((function(n){var t;return(0,f.jsx)(p,{children:(0,f.jsxs)(c.rU,{to:"/"===r.pathname?"movies/".concat(n.id):"".concat(n.id),state:{from:r},children:[(0,f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300/").concat(n.poster_path),alt:n.title,width:"20px",height:"20px"}),null!==(t=n.title)&&void 0!==t?t:n.original_title]})},n.id)}))})}},3570:function(n,t,r){r.d(t,{Pg:function(){return d},XZ:function(){return h},a2:function(){return f},fN:function(){return l},q:function(){return v}});var e=r(5861),a=r(4687),c=r.n(a),u=r(4569),i=r.n(u),o="b19e6b2986fc1ae4c290daa4cefec337",s="https://api.themoviedb.org/3/",p="".concat(s,"trending/movie/day"),f=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("".concat(p,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("".concat(s,"movie/").concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()},7052:function(n,t,r){r.r(t);var e=r(885),a=r(2791),c=r(3570),u=r(6820),i=r(184);t.default=function(){var n=(0,a.useState)([]),t=(0,e.Z)(n,2),r=t[0],o=t[1];return(0,a.useEffect)((function(){c.a2().then(o)}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Tranding today"}),(0,i.jsx)(u.Z,{onData:r})]})}}}]);
//# sourceMappingURL=52.71591520.chunk.js.map