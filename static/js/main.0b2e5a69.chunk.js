(this["webpackJsonpreddit-client"]=this["webpackJsonpreddit-client"]||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(14),r=s.n(n),i=(s(34),s(35),s(3)),d=(s(39),s(9)),l=s.n(d),j=s(10),o=s.n(j),b=s(11),h=s.n(b),u=s(20),m=(s(40),s(0));function O(e){var t=Object(c.useState)(0),s=Object(u.a)(t,2),a=s[0],n=s[1];return Object(m.jsxs)("div",{className:"PicCarousel",children:[Object(m.jsxs)("div",{className:"controls",children:[0===a?Object(m.jsx)("button",{disabled:!0,children:"\ud83d\udeab"}):Object(m.jsx)("button",{onClick:function(){n(a-1)},children:"\ud83d\udc48"}),a===e.pics.length-1?Object(m.jsx)("button",{disabled:!0,children:"\ud83d\udeab"}):Object(m.jsx)("button",{onClick:function(){n(a+1)},children:"\ud83d\udc49"})]}),Object(m.jsx)("img",{className:"shown-img",src:"https://i.redd.it/".concat(e.pics[a].media_id,".jpg"),alt:"Carousel"})]})}var x,p=s(27),f=s(13),v=s(21),N=s(8),w=s.n(N),g=s(18),_=s(4),k=Object(_.b)("postContainer/getLocalData",Object(g.a)(w.a.mark((function e(){var t,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("fakedata.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))),y=Object(_.b)("postContainer/getRedditData",function(){var e=Object(g.a)(w.a.mark((function e(t){var s,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return s=e.sent,e.next=5,s.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(_.c)({name:"postContainer",initialState:{posts:[],isLoading:!1,hasError:!1,showPosts:!1},reducers:{toggleShowPosts:function(e,t){e.showPosts=t.payload}},extraReducers:(x={},Object(f.a)(x,k.pending,(function(e,t){e.isLoading=!0,e.hasError=!1})),Object(f.a)(x,k.fulfilled,(function(e,t){e.posts=[].concat(Object(v.a)(e.posts),Object(v.a)(t.payload.data.children)),e.isLoading=!1,e.hasError=!1})),Object(f.a)(x,k.rejected,(function(e,t){e.isLoading=!1,e.hasError=!0})),Object(f.a)(x,y.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(f.a)(x,y.fulfilled,(function(e,t){e.posts=Object(v.a)(t.payload.data.children),e.isLoading=!1,e.hasError=!1})),Object(f.a)(x,y.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),x)}),S=C.actions.toggleShowPosts,E=C.reducer;function L(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}function P(e){var t=Object(i.b)();return!0===e.newWarn?Object(m.jsx)("div",{className:"post post_newWarn",children:Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsx)("h1",{className:"warning",children:"WARNING: You are browsing using the 'new' filter. These posts are very unmoderated, and can contain innapropriate content. Proceed at your own risk."}),Object(m.jsx)("button",{onClick:function(){return t(S(!0))},children:"I understand, let me in!"})]})}):e.data.secure_media&&e.data.secure_media.reddit_video?Object(m.jsxs)("div",{className:"post post_video",children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"info-item points",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("p",{children:e.data.score})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"info-item children",children:[Object(m.jsx)(o.a,{}),Object(m.jsx)("p",{children:e.data.num_comments})]}),Object(m.jsx)("div",{className:"info-item open",children:Object(m.jsx)("a",{href:"https://www.reddit.com".concat(e.data.permalink),target:"_blank",rel:"noreferrer",children:Object(m.jsx)(h.a,{})})})]}),Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsxs)("div",{className:"info-item metadata",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(m.jsx)("h2",{className:"title-text",children:e.data.title}),Object(m.jsx)(p.a,{src:e.data.secure_media.reddit_video.hls_url,autoplay:!1,controls:!0,className:"video-container"})]})]}):e.data.secure_media&&e.data.secure_media.oembed?Object(m.jsxs)("div",{className:"post post_gif",children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"info-item points",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("p",{children:e.data.score})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"info-item children",children:[Object(m.jsx)(o.a,{}),Object(m.jsx)("p",{children:e.data.num_comments})]}),Object(m.jsx)("div",{className:"info-item open",children:Object(m.jsx)("a",{href:"https://www.reddit.com".concat(e.data.permalink),target:"_blank",rel:"noreferrer",children:Object(m.jsx)(h.a,{})})})]}),Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsxs)("div",{className:"info-item metadata",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(m.jsx)("h2",{children:e.data.title}),Object(m.jsx)("div",{className:"embedded_media",dangerouslySetInnerHTML:{__html:L(e.data.secure_media.oembed.html)}})]})]}):"image"===e.data.post_hint?Object(m.jsxs)("div",{className:"post post_image",children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"info-item points",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("p",{children:e.data.score})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"info-item children",children:[Object(m.jsx)(o.a,{}),Object(m.jsx)("p",{children:e.data.num_comments})]}),Object(m.jsx)("div",{className:"info-item open",children:Object(m.jsx)("a",{href:"https://www.reddit.com".concat(e.data.permalink),target:"_blank",rel:"noreferrer",children:Object(m.jsx)(h.a,{})})})]}),Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsxs)("div",{className:"info-item metadata",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(m.jsx)("h2",{children:e.data.title}),Object(m.jsx)("img",{className:"image",alt:"Post Content",src:e.data.url})]})]}):e.data.gallery_data?Object(m.jsxs)("div",{className:"post post_carousel",children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"info-item points",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("p",{children:e.data.score})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"info-item children",children:[Object(m.jsx)(o.a,{}),Object(m.jsx)("p",{children:e.data.num_comments})]}),Object(m.jsx)("div",{className:"info-item open",children:Object(m.jsx)("a",{href:"https://www.reddit.com".concat(e.data.permalink),target:"_blank",rel:"noreferrer",children:Object(m.jsx)(h.a,{})})})]}),Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsxs)("div",{className:"info-item metadata",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(m.jsx)("h2",{children:e.data.title}),Object(m.jsx)(O,{className:"carousel",pics:e.data.gallery_data.items})]})]}):""===e.data.selftext?e.data.domain.startsWith("self.")?Object(m.jsxs)("div",{className:"post",children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"info-item points",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("p",{children:e.data.score})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"info-item children",children:[Object(m.jsx)(o.a,{}),Object(m.jsx)("p",{children:e.data.num_comments})]}),Object(m.jsx)("div",{className:"info-item open",children:Object(m.jsx)("a",{href:"https://www.reddit.com".concat(e.data.permalink),target:"_blank",rel:"noreferrer",children:Object(m.jsx)(h.a,{})})})]}),Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsxs)("div",{className:"info-item metadata",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(m.jsx)("h2",{children:e.data.title})]})]}):Object(m.jsxs)("div",{className:"post",children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"info-item points",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("p",{children:e.data.score})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"info-item children",children:[Object(m.jsx)(o.a,{}),Object(m.jsx)("p",{children:e.data.num_comments})]}),Object(m.jsx)("div",{className:"info-item open",children:Object(m.jsx)("a",{href:"https://www.reddit.com".concat(e.data.permalink),target:"_blank",rel:"noreferrer",children:Object(m.jsx)(h.a,{})})})]}),Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsxs)("div",{className:"info-item metadata",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(m.jsx)("h2",{children:e.data.title}),Object(m.jsx)("h4",{children:Object(m.jsx)("a",{href:e.data.url,target:"_blank",rel:"noreferrer",children:"Visit linked website"})})]})]}):Object(m.jsxs)("div",{className:"post",children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"info-item points",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("p",{children:e.data.score})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"info-item children",children:[Object(m.jsx)(o.a,{}),Object(m.jsx)("p",{children:e.data.num_comments})]}),Object(m.jsx)("div",{className:"info-item open",children:Object(m.jsx)("a",{href:"https://www.reddit.com".concat(e.data.permalink),target:"_blank",rel:"noreferrer",children:Object(m.jsx)(h.a,{})})})]}),Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsxs)("div",{className:"info-item metadata",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"rslash",children:"r/"}),e.data.subreddit]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"uslash",children:"u/"}),e.data.author]})]}),Object(m.jsx)("h4",{children:e.data.title}),Object(m.jsx)("div",{className:"selftext",dangerouslySetInnerHTML:{__html:L(e.data.selftext_html)}})]})]})}s(44);var F=s(28),I=s.n(F),W=Object(_.c)({name:"search",initialState:{currentSub:"popular"},reducers:{setCurrentSub:function(e,t){e.currentSub=t.payload}}}),T=W.actions.setCurrentSub,B=W.reducer;s(45);function M(e){var t=Object(c.useState)(""),s=Object(u.a)(t,2),a=s[0],n=s[1],r=Object(i.b)(),d=function(e){e.preventDefault(),0!==a.length?r(T(a)):alert("Please enter a value before searching.")};return Object(m.jsx)("div",{className:"search",children:Object(m.jsxs)("form",{onSubmit:function(e){return d(e)},class:"search-form",children:[Object(m.jsx)("input",{type:"text",class:"search-text",placeholder:"subreddit",value:"r/".concat(a),onChange:function(e){return function(e){" "!==e.target.value[e.target.value.length-1]&&n(e.target.value.substring(2))}(e)}}),Object(m.jsx)("input",{type:"button",class:"search-button",value:"Search",onClick:function(e){return d(e)}})]})})}function A(e){var t=Object(i.c)((function(e){return e.postContainer})),s=t.isLoading,c=t.hasError,a=t.posts,n=t.showPosts,r=Object(i.c)((function(e){return e.filter}));return s?Object(m.jsxs)("div",{className:"nonpost-container",children:[Object(m.jsx)(M,{}),Object(m.jsx)(I.a,{className:"loader",type:"bars",color:"#519fcf",height:"15%",width:"10%"})]}):c?Object(m.jsxs)("div",{className:"nonpost-container",children:[Object(m.jsx)(M,{}),Object(m.jsx)("h1",{children:"Error loading posts, please try again later :("})]}):"new"!==r.currentFilter||n?Object(m.jsxs)("div",{className:"PostContainer",children:[Object(m.jsx)(M,{}),a.map((function(e,t){return Object(m.jsx)(P,{data:a[t].data},t)}))]}):Object(m.jsxs)("div",{className:"nonpost-container",children:[Object(m.jsx)(M,{}),Object(m.jsx)(P,{newWarn:!0})]})}s(46);var D=Object(_.c)({name:"filter",initialState:{currentFilter:"hot"},reducers:{switchFilter:function(e,t){e.currentFilter=t.payload.filter}}}),R=D.actions.switchFilter,H=D.reducer;function J(e){var t=Object(i.b)(),s=Object(i.c)((function(e){return e.filter})).currentFilter,a=Object(i.c)((function(e){return e.search})).currentSub;return Object(c.useEffect)((function(){var e="https://www.reddit.com/r/".concat(a,"/").concat(s,".json");t(y(e)),window.scrollTo(0,0)})),Object(m.jsxs)("div",{className:"filter",children:[Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{className:"hot"===s?"active":"inactive",onClick:function(){return t(R({filter:"hot"}))},children:"Hot"}),Object(m.jsx)("button",{className:"new"===s?"active":"inactive",onClick:function(){return t(R({filter:"new"}))},children:"New"}),Object(m.jsx)("button",{className:"best"===s?"active":"inactive",onClick:function(){return t(R({filter:"best"}))},children:"Best"})]}),Object(m.jsxs)("div",{className:"text",children:[Object(m.jsx)("h3",{children:"This project is still a work in progress, here are some of the things to be added in the future:"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Loading more posts when a user's scroll reaches the bottom of the page"}),Object(m.jsx)("li",{children:"S\u0336e\u0336a\u0336r\u0336c\u0336h\u0336 \u0336b\u0336a\u0336r\u0336 \u0336t\u0336o\u0336 \u0336f\u0336i\u0336l\u0336t\u0336e\u0336r\u0336 \u0336b\u0336y\u0336 \u0336s\u0336u\u0336b\u0336r\u0336e\u0336d\u0336d\u0336i\u0336t\u0336"}),Object(m.jsx)("li",{children:"Interface to browse comments on posts"}),Object(m.jsx)("li",{children:"Improved mobile experience"})]}),Object(m.jsx)("p",{class:"myNote",children:"Made with \u2764\ufe0f by Quinn Sweeney"})]})]})}var G=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(A,{}),Object(m.jsx)(J,{})]})};function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var V=Object(_.b)("counter/fetchCount",function(){var e=Object(g.a)(w.a.mark((function e(t){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Y=Object(_.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(V.pending,(function(e){e.status="loading"})).addCase(V.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),$=Y.actions,q=($.increment,$.decrement,$.incrementByAmount,Y.reducer),z=Object(_.a)({reducer:{counter:q,postContainer:E,filter:H,search:B}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(i.a,{store:z,children:Object(m.jsx)(G,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.0b2e5a69.chunk.js.map