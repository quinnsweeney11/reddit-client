(this["webpackJsonpreddit-client"]=this["webpackJsonpreddit-client"]||[]).push([[0],{27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),i=(n(27),n(8)),o=(n(31),n(32),n(16)),d=n.n(o),u=n(17),j=n.n(u),l=n(2);function b(e){return""===e.data.selftext?Object(l.jsxs)("div",{className:"post",children:[Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"info-item",children:[Object(l.jsx)(d.a,{}),Object(l.jsx)("p",{children:e.data.score})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"info-item",children:[Object(l.jsx)(j.a,{}),Object(l.jsx)("p",{children:e.data.num_comments})]})]}),Object(l.jsx)("div",{className:"contents",children:Object(l.jsx)("h2",{children:e.data.title})})]}):Object(l.jsxs)("div",{className:"post",children:[Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"info-item",children:[Object(l.jsx)(d.a,{}),Object(l.jsx)("p",{children:e.data.score})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"info-item",children:[Object(l.jsx)(j.a,{}),Object(l.jsx)("p",{children:e.data.num_comments})]})]}),Object(l.jsxs)("div",{className:"contents",children:[Object(l.jsx)("h4",{children:e.data.title}),Object(l.jsx)("div",{className:"selftext",dangerouslySetInnerHTML:{__html:(t=e.data.selftext_html,(new DOMParser).parseFromString(t,"text/html").documentElement.textContent)}})]})]});var t}n(35);function f(e){var t=Object(i.c)((function(e){return e.postContainer})),n=t.isLoading,a=t.hasError,c=t.posts;return n?Object(l.jsx)("h3",{children:"Loading..."}):a?Object(l.jsx)("h1",{children:"Error loading posts, please try again later :("}):Object(l.jsx)("div",{className:"PostContainer",children:c.map((function(e,t){return Object(l.jsx)(b,{data:c[t].data},t)}))})}var h,m=n(13),O=n(18),x=n(9),p=n.n(x),v=n(12),g=n(5),w=Object(g.b)("postContainer/getLocalData",Object(v.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("fakedata.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),N=Object(g.c)({name:"postContainer",initialState:{posts:[],isLoading:!1,hasError:!1},reducers:{},extraReducers:(h={},Object(m.a)(h,w.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(m.a)(h,w.fulfilled,(function(e,t){e.posts=[].concat(Object(O.a)(e.posts),Object(O.a)(t.payload.data.children)),e.isLoading=!1,e.hasError=!1})),Object(m.a)(h,w.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),h)}).reducer;var y=function(){var e=Object(i.b)();return Object(a.useEffect)((function(){e(w())}),[e]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(f,{})})};function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var E=Object(g.b)("counter/fetchCount",function(){var e=Object(v.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(g.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(E.pending,(function(e){e.status="loading"})).addCase(E.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),k=L.actions,S=(k.increment,k.decrement,k.incrementByAmount,L.reducer),_=Object(g.a)({reducer:{counter:S,postContainer:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{store:_,children:Object(l.jsx)(y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.25aeefb8.chunk.js.map