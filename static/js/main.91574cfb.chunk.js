(this["webpackJsonpreddit-client"]=this["webpackJsonpreddit-client"]||[]).push([[0],{33:function(e,t,s){},34:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(13),i=s.n(n),r=(s(33),s(34),s(6)),d=(s(38),s(11)),l=s.n(d),o=s(12),j=s.n(o),b=s(27),h=(s(39),s(0));function u(e){var t=Object(c.useState)(0),s=Object(b.a)(t,2),a=s[0],n=s[1];return Object(h.jsxs)("div",{className:"PicCarousel",children:[Object(h.jsxs)("div",{className:"controls",children:[0===a?Object(h.jsx)("button",{disabled:!0,children:"\ud83d\udeab"}):Object(h.jsx)("button",{onClick:function(){n(a-1)},children:"\ud83d\udc48"}),a===e.pics.length-1?Object(h.jsx)("button",{disabled:!0,children:"\ud83d\udeab"}):Object(h.jsx)("button",{onClick:function(){n(a+1)},children:"\ud83d\udc49"})]}),Object(h.jsx)("img",{className:"shown-img",src:"https://i.redd.it/".concat(e.pics[a].media_id,".jpg"),alt:"Carousel"})]})}s(41);var m,O=s(25),x=s(10),p=s(19),f=s(8),v=s.n(f),N=s(17),g=s(4),w=Object(g.b)("postContainer/getLocalData",Object(N.a)(v.a.mark((function e(){var t,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("fakedata.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))),_=Object(g.b)("postContainer/getRedditData",function(){var e=Object(N.a)(v.a.mark((function e(t){var s,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return s=e.sent,e.next=5,s.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(g.c)({name:"postContainer",initialState:{posts:[],isLoading:!1,hasError:!1,showPosts:!1},reducers:{toggleShowPosts:function(e,t){e.showPosts=t.payload}},extraReducers:(m={},Object(x.a)(m,w.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(x.a)(m,w.fulfilled,(function(e,t){e.posts=[].concat(Object(p.a)(e.posts),Object(p.a)(t.payload.data.children)),e.isLoading=!1,e.hasError=!1})),Object(x.a)(m,w.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),Object(x.a)(m,_.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(x.a)(m,_.fulfilled,(function(e,t){e.posts=Object(p.a)(t.payload.data.children),e.isLoading=!1,e.hasError=!1})),Object(x.a)(m,_.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),m)}),C=y.actions.toggleShowPosts,k=y.reducer;function E(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}function L(e){var t=Object(r.b)();return!0===e.newWarn?Object(h.jsx)("div",{className:"post post_newWarn",children:Object(h.jsxs)("div",{className:"contents",children:[Object(h.jsx)("h1",{className:"warning",children:"WARNING: You are browsing using the 'new' filter. These posts are very unmoderated, and can contain innapropriate content. Proceed at your own risk."}),Object(h.jsx)("button",{onClick:function(){return t(C(!0))},children:"I understand, let me in!"})]})}):e.data.secure_media&&e.data.secure_media.reddit_video?Object(h.jsxs)("div",{className:"post post_video",children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"info-item points",children:[Object(h.jsx)(l.a,{}),Object(h.jsx)("p",{children:e.data.score})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"info-item children",children:[Object(h.jsx)(j.a,{}),Object(h.jsx)("p",{children:e.data.num_comments})]})]}),Object(h.jsxs)("div",{className:"contents",children:[Object(h.jsxs)("div",{className:"info-item metadata",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(h.jsx)("h2",{className:"title-text",children:e.data.title}),Object(h.jsx)(O.a,{src:e.data.secure_media.reddit_video.hls_url,autoplay:!1,controls:!0,className:"video-container"})]})]}):e.data.secure_media&&e.data.secure_media.oembed?Object(h.jsxs)("div",{className:"post post_gif",children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"info-item points",children:[Object(h.jsx)(l.a,{}),Object(h.jsx)("p",{children:e.data.score})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"info-item children",children:[Object(h.jsx)(j.a,{}),Object(h.jsx)("p",{children:e.data.num_comments})]})]}),Object(h.jsxs)("div",{className:"contents",children:[Object(h.jsxs)("div",{className:"info-item metadata",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(h.jsx)("h2",{children:e.data.title}),Object(h.jsx)("div",{className:"embedded_media",dangerouslySetInnerHTML:{__html:E(e.data.secure_media.oembed.html)}})]})]}):"image"===e.data.post_hint?Object(h.jsxs)("div",{className:"post post_image",children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"info-item points",children:[Object(h.jsx)(l.a,{}),Object(h.jsx)("p",{children:e.data.score})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"info-item children",children:[Object(h.jsx)(j.a,{}),Object(h.jsx)("p",{children:e.data.num_comments})]})]}),Object(h.jsxs)("div",{className:"contents",children:[Object(h.jsxs)("div",{className:"info-item metadata",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(h.jsx)("h2",{children:e.data.title}),Object(h.jsx)("img",{className:"image",alt:"Post Content",src:e.data.url})]})]}):e.data.gallery_data?Object(h.jsxs)("div",{className:"post post_carousel",children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"info-item points",children:[Object(h.jsx)(l.a,{}),Object(h.jsx)("p",{children:e.data.score})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"info-item children",children:[Object(h.jsx)(j.a,{}),Object(h.jsx)("p",{children:e.data.num_comments})]})]}),Object(h.jsxs)("div",{className:"contents",children:[Object(h.jsxs)("div",{className:"info-item metadata",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(h.jsx)("h2",{children:e.data.title}),Object(h.jsx)(u,{className:"carousel",pics:e.data.gallery_data.items})]})]}):""===e.data.selftext?Object(h.jsxs)("div",{className:"post",children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"info-item points",children:[Object(h.jsx)(l.a,{}),Object(h.jsx)("p",{children:e.data.score})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"info-item children",children:[Object(h.jsx)(j.a,{}),Object(h.jsx)("p",{children:e.data.num_comments})]})]}),Object(h.jsxs)("div",{className:"contents",children:[Object(h.jsxs)("div",{className:"info-item metadata",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(h.jsx)("h2",{children:e.data.title})]})]}):Object(h.jsxs)("div",{className:"post",children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{className:"info-item points",children:[Object(h.jsx)(l.a,{}),Object(h.jsx)("p",{children:e.data.score})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"info-item children",children:[Object(h.jsx)(j.a,{}),Object(h.jsx)("p",{children:e.data.num_comments})]})]}),Object(h.jsxs)("div",{className:"contents",children:[Object(h.jsxs)("div",{className:"info-item metadata",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(h.jsx)("h4",{children:e.data.title}),Object(h.jsx)("div",{className:"selftext",dangerouslySetInnerHTML:{__html:E(e.data.selftext_html)}})]})]})}s(44);var S=s(26),P=s.n(S);function F(e){var t=Object(r.c)((function(e){return e.postContainer})),s=t.isLoading,c=t.hasError,a=t.posts,n=t.showPosts,i=Object(r.c)((function(e){return e.filter}));return s?Object(h.jsx)("div",{className:"nonpost-container",children:Object(h.jsx)(P.a,{className:"loader",type:"bars",color:"#519fcf",height:"15%",width:"10%"})}):c?Object(h.jsx)("div",{className:"nonpost-container",children:Object(h.jsx)("h1",{children:"Error loading posts, please try again later :("})}):"new"!==i.currentFilter||n?Object(h.jsx)("div",{className:"PostContainer",children:a.map((function(e,t){return Object(h.jsx)(L,{data:a[t].data},t)}))}):Object(h.jsx)("div",{className:"nonpost-container",children:Object(h.jsx)(L,{newWarn:!0})})}s(45);var I=Object(g.c)({name:"filter",initialState:{currentFilter:"hot"},reducers:{switchFilter:function(e,t){e.currentFilter=t.payload.filter}}}),T=I.actions.switchFilter,W=I.reducer;function B(e){var t=Object(r.b)(),s=Object(r.c)((function(e){return e.filter})).currentFilter;return console.log(s),Object(c.useEffect)((function(){var e="https://www.reddit.com/".concat(s,".json");t(_(e)),window.scrollTo(0,0)})),Object(h.jsxs)("div",{className:"filter",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{className:"hot"===s?"active":"inactive",onClick:function(){return t(T({filter:"hot"}))},children:"Hot"}),Object(h.jsx)("button",{className:"new"===s?"active":"inactive",onClick:function(){return t(T({filter:"new"}))},children:"New"}),Object(h.jsx)("button",{className:"best"===s?"active":"inactive",onClick:function(){return t(T({filter:"best"}))},children:"Best"})]}),Object(h.jsxs)("div",{className:"text",children:[Object(h.jsx)("h3",{children:"This project is still a work in progress, here are some of the things to be added in the future:"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Loading more posts when a user's scroll reaches the bottom of the page"}),Object(h.jsx)("li",{children:"Search bar to filter by subreddit"}),Object(h.jsx)("li",{children:"Interface to browse comments on posts"}),Object(h.jsx)("li",{children:"Improved mobile experience"})]}),Object(h.jsx)("p",{class:"myNote",children:"Made with \u2764\ufe0f by Quinn Sweeney"})]})]})}var M=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(F,{}),Object(h.jsx)(B,{})]})};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var R=Object(g.b)("counter/fetchCount",function(){var e=Object(N.a)(v.a.mark((function e(t){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(g.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(R.pending,(function(e){e.status="loading"})).addCase(R.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),H=D.actions,J=(H.increment,H.decrement,H.incrementByAmount,D.reducer),G=Object(g.a)({reducer:{counter:J,postContainer:k,filter:W}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(r.a,{store:G,children:Object(h.jsx)(M,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.91574cfb.chunk.js.map