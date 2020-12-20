(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{189:function(e,t,o){"use strict";o.r(t);var n={computed:{background:function(){return"background: url('"+this.$DB.homepage.thoughts.image+"')no-repeat center center / cover"}}},r=o(11),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"page-header-section ptb-100 gradient-overlay text-center",style:e.background},[o("div",{staticClass:"container mb-5"},[o("div",{staticClass:"row align-items-center"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"page-header-content text-white"},[o("h1",{staticClass:"text-white mb-2",domProps:{innerHTML:e._s(e.$DB.homepage.thoughts.title)}}),e._v(" "),o("p",{staticClass:"lead",domProps:{innerHTML:e._s(e.$DB.homepage.thoughts.description)}})])])])]),e._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},e._l(e.$DB.homepage.thoughts.items,(function(t){return o("div",{staticClass:"col-md-4",staticStyle:{display:"flex","align-items":"stretch"}},[o("div",{staticClass:"single-blog-card card border-0 shadow-sm"},[o("img",{staticClass:"card-img-top position-relative",attrs:{src:t.image,height:"300"}}),e._v(" "),o("div",{staticClass:"card-body"},[o("h3",{staticClass:"h5 card-title"},[o("nuxt-link",{attrs:{to:t.page},domProps:{innerHTML:e._s(t.title)}})],1),e._v(" "),t.description?o("p",{staticClass:"card-text",domProps:{innerHTML:e._s(t.description)}}):e._e()])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},190:function(e,t,o){"use strict";o.r(t);var n={props:["title","type","image","content"],components:{ThoughtsCard:o(189).default},mounted:function(){var e=document.createElement("script");e.setAttribute("src","//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5fbe4fe82255f905"),document.head.appendChild(e)}},r=o(11),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"module ptb-100"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-2"}),e._v(" "),o("div",{staticClass:"col-lg-8 col-md-8"},[o("article",{staticClass:"post"},[o("div",{staticClass:"post-preview"},[o("img",{staticClass:"img-fluid",attrs:{src:e.image,alt:"article"}})]),e._v(" "),o("div",{staticClass:"post-wrapper"},[o("div",{staticClass:"post-header"},[o("h1",{staticClass:"post-title",staticStyle:{"font-size":"40px","font-weight":"bold"},domProps:{innerHTML:e._s(e.title)}})]),e._v(" "),o("div",{staticClass:"post-content"},[e._t("content")],2)])])]),e._v(" "),e._m(0)])])]),e._v(" "),o("thoughts-card")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-md-12 text-center"},[t("div",{staticClass:"addthis_inline_share_toolbox"})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ThoughtsCard:o(189).default})},209:function(e,t,o){"use strict";o.r(t);var n=o(190),r={components:{Template:n.default,ThoughtTemplate:n.default},data:function(){return{title:"Starting Over - A Very Risky Choice",image:"/imgs/thought-1.jpg",type:"Thought"}}},c=o(11),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thought-template",{attrs:{title:e.title,image:e.image,type:e.type},scopedSlots:e._u([{key:"content",fn:function(){return[o("p",{staticClass:"lead mb-3"},[e._v("\n      There’s a popular coding joke that asks “Why did it only take the Lord six days to create the entire world?” The answer: He started from scratch. Developers laugh, because every programmer has had the experience of trying to improve code written by someone else, and struggling to understand why it was written that way in the first place. Handling someone else’s code is one of the trickiest—and sometimes most frustrating—parts of programming. For that reason, it can be tempting to want to get rid of an entire project or large modules and just start from scratch.\n    ")]),e._v(" "),o("p",{staticClass:"lead mb-3"},[e._v("\n      That’s a very risky approach and it almost never succeeds.\n    ")]),e._v(" "),o("p",{staticClass:"lead mb-3"},[e._v("\n      Handling a legacy application, website or software project is a lot more like the joke that asks how to eat an elephant: one bite at a time. We have a deep respect for working systems, as complex as they are. It takes time, persistence and curiosity to build the extensive background required to get a complete understanding of complex systems.\n    ")]),e._v(" "),o("p",{staticClass:"lead mb-3"},[e._v("\n      More often than not, when you start to dive into the code, you find some odd quirk which is unclear but was developed for a particular business reason. Maybe in some geographies they don’t have PayPal and needed to integrate a cash-on-delivery software module programmed in some other language. Perhaps a particular supplier only takes orders over a certain size, so the inventory system has to create a certain backlog before triggering an order. Each of the peculiarities of the specific business leads to peculiarities in the code. Therefore, when you refactor, you are going to have to find alternatives - or recognize the wisdom of the original program and work around it.\n    ")]),e._v(" "),o("p",{staticClass:"lead mb-3"},[e._v("\n      When optimizing code for upgrades, faster build times, or better page rending responses, the first step is looking at how to decouple different parts of code into more modular fragments. Decoupling code requires a more modular approach, where each module has calls or cues to communicate between different parts of the system.\n    ")]),e._v(" "),o("p",{staticClass:"lead mb-3"},[e._v("\n      Once you’ve decoupled the modules, you can start to tackle each part of the legacy code and make improvements. Perhaps it does make sense to get rid of an outdated open source script or replace an entire module with an updated code base. Maybe it’s better to simply tweak some of the database calls. Once you’ve got the code broken down into manageable chunks, you can make internal changes that update the functionality without affecting any of the other modules in the project. You can then test those changes, and move on.\n    ")]),e._v(" "),o("p",{staticClass:"lead mb-3"},[e._v("\n      Code decoupling also has major advantages when it comes to upgrades, bug fixes, and other types of improvements. By taking a modular approach, it’s possible to phase out functionality that’s no longer needed, identify and fix edge cases, and pinpoint bugs. It also provides developers a cleaner environment for reading legacy code and understanding the purpose of each section of code they are working on.\n    ")]),e._v(" "),o("p",{staticClass:"lead mb-3"},[e._v("\n      Refactoring is always going to be a part of any software development project. The only question is how to do the refactoring in a way that provides the minimum disruption and the maximum chances for success. By keeping changes local, it’s possible to dramatically increase the quality of the outcomes while keeping a steady stream of improvements to the software.\n    ")]),e._v(" "),o("p",{staticClass:"lead mb-3"},[e._v("\n      Reach out to find out more about why the top global corporations prefer Premio.AI as their outsourced development team.\n    ")])]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Template:o(190).default})}}]);