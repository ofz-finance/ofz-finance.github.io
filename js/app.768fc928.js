(function(e){function t(t){for(var a,c,i=t[0],s=t[1],d=t[2],u=t[3]||[],m=0,f=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t),l.push.apply(l,u);while(f.length)f.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var d=n[c];0!==r[d]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return 0===o.length&&(l.forEach((function(e){if(void 0===r[e]){r[e]=null;var t=document.createElement("link");s.nc&&t.setAttribute("nonce",s.nc),t.rel="prefetch",t.as="script",t.href=i(e),document.head.appendChild(t)}})),l.length=0),e}var a={},c={app:0},r={app:0},o=[],l=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-33031f72":"3e708993","chunk-bf6a5aea":"e6edc7d5"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-33031f72":1,"chunk-bf6a5aea":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-33031f72":"91751f8a","chunk-bf6a5aea":"ce9a125a"}[e]+".css",r=s.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var i=o[l],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===r))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){i=u[l],d=i.getAttribute("data-href");if(d===a||d===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],m.parentNode.removeChild(m),n(o)},m.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(m)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",u.name="ChunkLoadError",u.type=a,u.request=c,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/ofz-finance/ofz-finance.github.io@main/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var m=0;m<d.length;m++)t(d[m]);var b=u,f=function(){return o.push([0,"chunk-vendors"]),n()}();t([[],{},0,["chunk-33031f72","chunk-bf6a5aea"]])})({0:function(e,t,n){e.exports=n("56d7")},"0fab":function(e,t,n){},"146f":function(e,t,n){"use strict";n("ab5d")},"25a8":function(e,t,n){"use strict";t["a"]=function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!1,a=0;a<t.length;a++)if(e.indexOf(t[a])>0){n=!0;break}var c=window.screen.width,r=window.screen.height;return c<500&&r<800&&(n=!0),{isH5:n}}},"317b":function(e,t,n){"use strict";n("435f")},3191:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return u}));var a=n("bc3a"),c=n.n(a),r=c.a.create({baseURL:"https://api.ofz.network/v1",timeout:5e3}),o=r,l=function(e){return o({url:"/gamefi/index",method:"get",params:e})},i=function(e){return o({url:"/gamefi/recommends",method:"get",params:e})},s=function(e){return o({url:"/gamefi/info",method:"get",params:e})},d=function(e){return o({url:"/gamefi/igos",method:"get",params:e})},u=function(e){return o({url:"/chains/index",method:"get",params:e})}},"435f":function(e,t,n){},4869:function(e,t,n){"use strict";n("0fab")},"4c97":function(e,t,n){e.exports=n.p+"img/weichat.b88f4c64.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("be66"),c=n.n(a),r=n("8bbf"),o={id:"app"};function l(e,t){var n=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createVNode"])(n)])}n("5fe6");var i=n("6b0d"),s=n.n(i);const d={},u=s()(d,[["render",l]]);var m=u,b=n("47e2"),f={home:"Home",game:"Game",igo:"IGO",Metaverse:"Metaverse",Staytuned:"Stay tuned",lang:"Language",FuturZone:"Our Future Zone ",FuturZone_bottom:"Metaverse-Our future zone<br>OFZ- The first entrance to the metaverse",Collections:"Collections",Seeall:"See all >>",rank:"Ranking",Populartutorials:"Popular tutorials",footer1:"Explore the first entrance to the metaverse.",footer2:"Metaverse is defined as a future persistent and decentralized online 3D virtual environment.GameFi presents decentralized financial products in the form of games of which Play to Earn is the core business model.Metaverse explorers are trying to depict parts of the metaverse and share the commercial value behind the exploration base on the current GameFi model.",Explore:"Explore",search:"search item here...",IGO2:"IGO",Loadmore:"Load more",Chain:"Chain",Website:"Website",Community:"Community",Gametutorial:"Game tutorial",SaleStarts:"Sale Starts In:",progress:"progress",comeSoon:"Coming Soon",allItem:"All item",active:"Active",shareTitle:"Come across an amazing project {msg} on ofz.com , the first entrance to metaverse.  Details",shareTitleTw1:"Come across an amazing project ",shareTitleTw2:" on ",detail:"the first entrance to metaverse.Details:",share:"Share",copy:"Copy successfully"},p={home:"首页",game:"游戏",igo:"IGO",Metaverse:"元宇宙",Staytuned:"敬请期待",lang:"语言",FuturZone:"Our Future Zone ",FuturZone_bottom:"元宇宙，我们的未来世界。<br>OFZ，探索元宇宙第一入口",Collections:"精选推荐",Seeall:"查看全部>>",rank:"排行榜",Populartutorials:"热门教程",footer1:"汇集元宇宙生态应用，探索元宇宙第一入口。",footer2:"元宇宙(Metaverse) 被用来描述一个未来持久化和去中心化的在线三维虚拟环境。GameFi（Game Finance） 将去中心化金融DeFi 产品以游戏的方式呈现，Play to Earn 边玩边赚钱是其核心商业模式。透过当前 GameFi模式，元宇宙探索者正尝试描绘出元宇宙的部分模样并共享探索背后的商业价值。",Explore:"项目探索",search:"搜索项目...",IGO2:"参与IGO",Loadmore:"查看更多",Chain:"所在网络",Website:"官方网址",Community:"社区",Gametutorial:"项目教程",SaleStarts:"开始时间",progress:"更新中",comeSoon:"即将开始",allItem:"所有项目",active:"进行中",shareTitle:"我发现一个很有趣的项目{msg},他被收录在元宇宙第一入口ofz.com,详情",shareTitleTw1:"我发现一个很有趣的项目",shareTitleTw2:"他被收入在元宇宙第一入口",detail:"详情:",share:"分享",copy:"复制成功"},g={en_us:f,zh_cn:p},O=(((navigator.language?navigator.language:navigator.userLanguage)||"zh").toLowerCase(),Object(b["a"])({fallbackLocale:"en_us",globalInjection:!0,legacy:!1,locale:window.sessionStorage.getItem("langOfz")||"en_us",messages:g})),h=O,j=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),v=n("d6fa"),y=n.n(v),E=function(e){return Object(r["pushScopeId"])("data-v-62b51baa"),e=e(),Object(r["popScopeId"])(),e},N={class:"dark-scheme de-grey"},V={id:"wrapper"},w={class:"no-bottom no-top h5_mt40",id:"content"},_=E((function(){return Object(r["createElementVNode"])("div",{id:"top"},null,-1)})),k={id:"section-hero","aria-label":"section",class:"pt20 pb20 vh-100 bg bg-height"},x={key:0,id:"particles-js"},S={class:"v-center"},C={class:"container"},B={class:"row align-items-center"},D={class:"col-md-6"},L=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-single"},null,-1)})),z=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-10"},null,-1)})),I={class:"wow fadeInUp","data-wow-delay":".75s",style:{"text-align":"left"}},T={class:"wow fadeInUp lead zone_bottom"},F=["innerHTML"],P=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-10"},null,-1)})),$={class:"row"},A={key:0,class:"spacer-single"},H=Object(r["createStaticVNode"])('<div class="row" data-v-62b51baa><div class="col-lg-4 col-md-4 col-sm-4 col-xs-3 wow fadeInRight mb30" data-wow-delay="1.1s" data-v-62b51baa><div class="de_count text-left" style="text-align:left;" data-v-62b51baa><h3 data-v-62b51baa><span data-v-62b51baa>1000+</span></h3><h5 class="id-color" data-v-62b51baa>Dapps(updating)</h5></div></div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 wow fadeInRight mb30 pd" data-wow-delay="1.4s" data-v-62b51baa><div class="de_count text-left" data-v-62b51baa><h3 data-v-62b51baa><span data-v-62b51baa>950</span>k</h3><h5 class="id-color" data-v-62b51baa>Dapps Users</h5></div></div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-3 wow fadeInRight mb30" data-wow-delay="1.7s" data-v-62b51baa><div class="de_count text-left" data-v-62b51baa><h3 data-v-62b51baa><span data-v-62b51baa>120.6</span>k</h3><h5 class="id-color" data-v-62b51baa>Pageview</h5></div></div></div>',1),M=E((function(){return Object(r["createElementVNode"])("div",{class:"col-md-6 xs-hide"},[Object(r["createElementVNode"])("img",{src:y.a,class:"img-fluid wow fadeInUp","data-wow-delay":".75s",alt:""})],-1)})),G={class:"content-body"},R={id:"section-collections",class:"pt30 pb30"},Z={class:"container"},q={class:"row wow fadeIn"},U={class:"col-lg-12 flex"},W={class:"style-2"},J={id:"items-carousel",class:"owl-carousel wow fadeIn flex"},K=["onClick"],Q={class:"nft__item_wrap"},X=["src"],Y={class:"nft__item_info",style:{"text-align":"left"}},ee={class:"nft__item_price line_clamp"},te=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-single mt0",style:{"margin-top":"80px"}},null,-1)})),ne={class:"row carousel"},ae={class:"col-lg-12 flex"},ce={class:"style-2"},re={id:"collection-carousel-alt",class:"owl-carousel wow fadeIn flex"},oe=["href"],le={class:"nft_wrap",style:{height:"123px"}},ie=["src"],se={class:"nft_coll_pp"},de=["src"],ue={class:"nft_coll_info"},me={class:"line_clamp"},be={class:"line_clamp"},fe=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-double mt0",style:{"margin-top":"80px"}},null,-1)})),pe={class:"row"},ge={class:"col-lg-12"},Oe={class:"style-2"},he={class:"col-md-12 wow fadeIn"},je={class:"author_list"},ve=["onClick"],ye={class:"author_list_pp"},Ee=["src"],Ne={class:"author_list_info rank_item"},Ve={style:{"font-size":"16px",color:"#ffffff","font-weight":"900"}},we={class:"line_clamp",style:{width:"95px"}},_e=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-double mt60",style:{"margin-top":"30px"}},null,-1)})),ke={id:"section-text",class:"no-top","data-wow-delay":"1.1s"},xe={class:"container"},Se={class:"row"},Ce={class:"col-lg-12"},Be={class:"style-2"},De=E((function(){return Object(r["createElementVNode"])("a",{href:"javascript:",id:"back-to-top"},null,-1)}));function Le(e,t,n,a,c,o){var l=Object(r["resolveComponent"])("Ahearder"),i=Object(r["resolveComponent"])("Popular"),s=Object(r["resolveComponent"])("Afooter");return Object(r["openBlock"])(),Object(r["createElementBlock"])("body",N,[Object(r["createElementVNode"])("div",V,[Object(r["createVNode"])(l),Object(r["createElementVNode"])("div",w,[_,Object(r["createElementVNode"])("section",k,[a.isH5?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",x)),Object(r["createElementVNode"])("div",S,[Object(r["createElementVNode"])("div",C,[Object(r["createElementVNode"])("div",B,[Object(r["createElementVNode"])("div",D,[L,z,Object(r["createElementVNode"])("h1",I,Object(r["toDisplayString"])(e.$t("FuturZone")),1),Object(r["createElementVNode"])("p",T,[Object(r["createElementVNode"])("span",{class:Object(r["normalizeClass"])([a.lang_type]),innerHTML:a.t("FuturZone_bottom")},null,10,F)]),P,Object(r["createElementVNode"])("div",$,[a.isH5?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",A)),H])]),M])])])]),Object(r["createElementVNode"])("div",G,[Object(r["createElementVNode"])("section",R,[Object(r["createElementVNode"])("div",Z,[Object(r["createElementVNode"])("div",q,[Object(r["createElementVNode"])("div",U,[Object(r["createElementVNode"])("h2",W,Object(r["toDisplayString"])(e.$t("Collections")),1),Object(r["createElementVNode"])("h2",{class:"style-2",onClick:t[0]||(t[0]=function(e){return a.goExplore(1)}),style:{cursor:"pointer","font-size":"15px",color:"#c3bebe"}},Object(r["toDisplayString"])(e.$t("Seeall")),1)]),Object(r["createElementVNode"])("div",J,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.recommendsList,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"d-item",key:t},[Object(r["createElementVNode"])("div",{class:"nft__item style-2",style:{height:"100%"},onClick:function(t){return a.goDetail(e.id)}},[Object(r["createElementVNode"])("div",Q,[Object(r["createElementVNode"])("img",{src:e.image_url,class:"lazy nft__item_preview",alt:""},null,8,X)]),Object(r["createElementVNode"])("div",Y,[Object(r["createElementVNode"])("h4",null,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("div",ee,Object(r["toDisplayString"])(e.sub_title),1)])],8,K)])})),128))])]),te,Object(r["createElementVNode"])("div",ne,[Object(r["createElementVNode"])("div",ae,[Object(r["createElementVNode"])("h2",ce,Object(r["toDisplayString"])(e.$t("igo")),1),Object(r["createElementVNode"])("h2",{class:"style-2",onClick:t[1]||(t[1]=function(e){return a.goExplore(2)}),style:{cursor:"pointer","font-size":"15px",color:"#c3bebe"}},Object(r["toDisplayString"])(e.$t("Seeall")),1)]),Object(r["createElementVNode"])("div",re,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.idoList,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"nft_coll style-2",key:t},[Object(r["createElementVNode"])("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},[Object(r["createElementVNode"])("div",le,[Object(r["createElementVNode"])("img",{src:e.image_url,class:"lazy img-fluid",alt:""},null,8,ie)]),Object(r["createElementVNode"])("div",se,[Object(r["createElementVNode"])("img",{class:"lazy",src:e.image_url,alt:"",style:{width:"60px",height:"60px"}},null,8,de)]),Object(r["createElementVNode"])("div",ue,[Object(r["createElementVNode"])("h4",me,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("span",be,Object(r["toDisplayString"])(e.sub_title),1)])],8,oe)])})),128))])]),fe,Object(r["createElementVNode"])("div",pe,[Object(r["createElementVNode"])("div",ge,[Object(r["createElementVNode"])("h2",Oe,Object(r["toDisplayString"])(e.$t("rank")),1)]),Object(r["createElementVNode"])("div",he,[Object(r["createElementVNode"])("ol",je,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.rankList,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.id,onClick:function(t){return a.goDetail(e.id)}},[Object(r["createElementVNode"])("div",ye,[Object(r["createElementVNode"])("img",{class:"lazy",src:e.image_url,alt:""},null,8,Ee)]),Object(r["createElementVNode"])("div",Ne,[Object(r["createElementVNode"])("span",Ve,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("span",we,Object(r["toDisplayString"])(e.sub_title),1)])],8,ve)})),128))])])])])]),_e,Object(r["createElementVNode"])("section",ke,[Object(r["createElementVNode"])("div",xe,[Object(r["createElementVNode"])("div",Se,[Object(r["createElementVNode"])("div",Ce,[Object(r["createElementVNode"])("h2",Be,Object(r["toDisplayString"])(e.$t("Populartutorials")),1)]),Object(r["createVNode"])(i)])])])])]),De,Object(r["createVNode"])(s)])])}var ze=n("5530"),Ie=n("1da1"),Te=(n("96cf"),n("8ba5")),Fe=n("c329"),Pe={class:"feature-box f-boxed style-3",style:{padding:"20px",width:"340px",margin:"auto"}},$e={class:"text"},Ae={class:"wow fadeInUp","data-wow-delay":".25s"},He=["src"],Me=["onClick"],Ge={class:"logo"},Re=["src"],Ze={class:"nft__item_info",style:{"text-align":"left","margin-left":"10px"}},qe={class:"nft__item_price line_clamp",style:{width:"200px"}};function Ue(e,t,n,a,c,o){return Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(a.videoList[a.lang_type],(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"col-lg-4 col-md-6 mb-sm-30",key:t},[Object(r["createElementVNode"])("div",Pe,[Object(r["createElementVNode"])("div",$e,[Object(r["createElementVNode"])("p",Ae,[Object(r["createElementVNode"])("iframe",{src:e.iframe,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,He)]),Object(r["createElementVNode"])("div",{class:"video_bottom",onClick:function(t){return a.goDetail(e.id)}},[Object(r["createElementVNode"])("div",Ge,[Object(r["createElementVNode"])("img",{src:e.imgurl,alt:""},null,8,Re)]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("div",Ze,[Object(r["createElementVNode"])("h4",null,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("div",qe,Object(r["toDisplayString"])(e.subtitle),1)])])],8,Me)])])])})),128)}var We=n("5502"),Je={name:"popular",setup:function(){var e=Object(j["d"])(),t=Object(We["b"])(),a=Object(r["computed"])((function(){return t.state.lang})),c={en_us:[{title:"BinaryX",subtitle:"Cyber Dragon is an online game based on Binance Smart Chain . Players can create characters, challenge copies, and loot rare items. The final challenge is to defeat the ultimate boss, the cyber dragon. ",id:"21",iframe:"//player.bilibili.com/player.html?aid=421836700&bvid=BV1r3411t7GT&cid=446855021&page=1",imgurl:n("ab9e")},{title:"Star Atlas",subtitle:"A grand strategy game of space exploration, territorial conquest, political domination, and more.",id:"139",iframe:"//player.bilibili.com/player.html?aid=977133103&BV1d44y1h7xw&cid=457085059&page=1",imgurl:n("8fe5")},{title:"DeFi Warrior",subtitle:"Defi Warrior is a Defi x NFT blockchain-based game genre inspired by the universe of cryptocurrencies where each Warrior is a crypto and each planet is a blockchain.  ",id:"254",iframe:"//player.bilibili.com/player.html?aid=677245184&bvid=BV1PU4y1K7Vx&cid=455684226&page=1",imgurl:n("57da")}],zh_cn:[{title:"BinaryX",subtitle:"Binary是一款基于币安智能链（BSC）的游戏。玩家可以自由创建角色，挑战各种副本，提高角色等级，获取极品装备。游戏的最终目标是挑战终极Boss-赛博之龙 ",id:"76",iframe:"//player.bilibili.com/player.html?aid=421836700&bvid=BV1r3411t7GT&cid=446855021&page=1",imgurl:n("ab9e")},{title:"Star Atlas",subtitle:"这是一款多人在线大型战略游戏，这里有太空探索，领土征服，和政治统治等。",id:"140",iframe:"//player.bilibili.com/player.html?aid=977133103&bvid=BV1d44y1h7xw&cid=457085059&page=1",imgurl:n("8fe5")},{title:"DeFi Warrior",subtitle:"Defi Warrior是一个基于Defi x NFT区块链的游戏类型，其灵感来自加密货币的宇宙，每个战士都是一个加密货币，每个星球都是单独的区块。 ",id:"255",iframe:"//player.bilibili.com/player.html?aid=677245184&bvid=BV1PU4y1K7Vx&cid=455684226&page=1",imgurl:n("57da")}]},o=function(){var t=Object(Ie["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.push({path:"detail",query:{id:n}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{videoList:c,goDetail:o,lang_type:a}}};n("317b");const Ke=s()(Je,[["render",Ue],["__scopeId","data-v-84f991fe"]]);var Qe=Ke,Xe=n("c831"),Ye=n("25a8"),et=n("9b63"),tt=n("3191"),nt={name:"Home",components:{Ahearder:Te["a"],Afooter:Fe["a"],Popular:Qe},setup:function(){var e=Object(b["b"])(),t=e.t,n=Object(j["d"])(),a=Object(We["b"])(),c=Object(Ye["a"])(),o=c.isH5,l=Object(r["reactive"])({recommendsList:[],idoList:[],rankList:[]}),i=Object(r["computed"])((function(){return a.state.lang}));Object(r["watch"])(i,(function(){u(),m()})),console.log("lang_type",i.value);var s=function(e){n.push({path:"/explore",query:{name:e}})},d=function(){var e=Object(Ie["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.push({path:"detail",query:{id:t}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(Ie["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(tt["e"])({is_hot:1,lang_type:i.value});case 2:t=e.sent,console.log("aa"),l.recommendsList=t.data.result.gamefi,l.idoList=t.data.result.idos,console.log("recommendsList",l.recommendsList),setTimeout((function(){Object(et["a"])()}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(Ie["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(tt["e"])({is_best:1,lang_type:i.value,rec_nums:12});case 2:t=e.sent,l.rankList=t.data.result.gamefi;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["onMounted"])((function(){o||particlesJS("particles-js",Xe),u(),m()})),Object(ze["a"])(Object(ze["a"])({goExplore:s,goDetail:d,t:t,getrecommendsList:u},Object(r["toRefs"])(l)),{},{lang_type:i,isH5:o})}};n("4869");const at=s()(nt,[["render",Le],["__scopeId","data-v-62b51baa"]]);var ct=at,rt=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:ct},{path:"/detail",name:"Detail",component:function(){return n.e("chunk-33031f72").then(n.bind(null,"1000"))}},{path:"/explore",name:"explore",component:function(){return n.e("chunk-bf6a5aea").then(n.bind(null,"91d0"))}}],ot=Object(j["a"])({history:Object(j["b"])(),routes:rt}),lt=ot,it=Object(We["a"])({state:{lang:window.sessionStorage.getItem("langOfz")||"en_us"},mutations:{changeLang:function(e,t){e.lang=t}},actions:{},modules:{}});n("572f"),Object(r["createApp"])(m);console.log("process.env.NODE_ENV","production"),Object(r["createApp"])(m).use(it).use(lt).use(h).use(c.a).mount("#app")},"57da":function(e,t,n){e.exports=n.p+"img/three.df267aef.png"},"5fe6":function(e,t,n){"use strict";n("db88")},"83e0":function(e,t,n){"use strict";n("8f3e")},"8ba5":function(e,t,n){"use strict";var a=n("8bbf"),c=n("fe9c"),r=n.n(c),o=function(e){return Object(a["pushScopeId"])("data-v-ee4026e8"),e=e(),Object(a["popScopeId"])(),e},l={key:0,class:"transparent border-bottom"},i={class:"container"},s={class:"row"},d={class:"col-md-12"},u={class:"de-flex sm-pt10"},m=o((function(){return Object(a["createElementVNode"])("div",{class:"de-flex-col"},[Object(a["createElementVNode"])("div",{class:"de-flex-col"},[Object(a["createElementVNode"])("div",{id:"logo"},[Object(a["createElementVNode"])("a",{href:"#"},[Object(a["createElementVNode"])("img",{alt:"",src:r.a,class:"logo"})])])])],-1)})),b={class:"de-flex-col header-col-mid"},f={id:"mainmenu",style:{"margin-right":"20px"}},p={href:"javascript:"},g=o((function(){return Object(a["createElementVNode"])("span",null,null,-1)})),O={href:"javascript:"},h=o((function(){return Object(a["createElementVNode"])("span",null,null,-1)})),j={href:"javascript:"},v=o((function(){return Object(a["createElementVNode"])("span",null,null,-1)})),y={href:"javascript:"},E=o((function(){return Object(a["createElementVNode"])("span",null,null,-1)})),N={href:"javascript:"},V=o((function(){return Object(a["createElementVNode"])("li",null,null,-1)})),w={key:0,id:"lang_type",class:"dropdown mb0 input-width"},_={href:"javascript:",class:"btn-selector"},k=o((function(){return Object(a["createElementVNode"])("span",null,"English",-1)})),x=[k],S=o((function(){return Object(a["createElementVNode"])("span",null,"中文",-1)})),C=[S],B={class:"menu_side_area"},D={class:"h5_logo"},L=o((function(){return Object(a["createElementVNode"])("img",{alt:"",src:r.a},null,-1)})),z={key:0},I={style:{"font-weight":"900"}},T={style:{"margin-left":"1rem"}},F={style:{"font-weight":"900"}};function P(e,t,n,c,r,o){var k=Object(a["resolveComponent"])("el-collapse-item"),S=Object(a["resolveComponent"])("el-collapse");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[c.isH5?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("header",l,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",u,[m,Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("ul",f,[Object(a["createElementVNode"])("li",{onClick:t[0]||(t[0]=function(e){return c.router.push("home")})},[Object(a["createElementVNode"])("a",p,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("home")),1),g])]),Object(a["createElementVNode"])("li",{onClick:t[1]||(t[1]=function(e){return c.router.push({path:"explore",query:{name:1}})})},[Object(a["createElementVNode"])("a",O,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("game")),1),h])]),Object(a["createElementVNode"])("li",{onClick:t[2]||(t[2]=function(e){return c.router.push({path:"explore",query:{name:2}})})},[Object(a["createElementVNode"])("a",j,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("igo")),1),v])]),Object(a["createElementVNode"])("li",null,[Object(a["createElementVNode"])("a",y,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("Metaverse")),1),E]),Object(a["createElementVNode"])("ul",null,[Object(a["createElementVNode"])("li",null,[Object(a["createElementVNode"])("a",N,Object(a["toDisplayString"])(e.$t("Staytuned")),1)])])]),V]),"/detail"===c.route.path||c.isH5?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",w,[Object(a["createElementVNode"])("a",_,Object(a["toDisplayString"])(c.langlocal),1),Object(a["createElementVNode"])("ul",null,[Object(a["createElementVNode"])("li",{onClick:t[3]||(t[3]=function(e){return c.changeLang("en_us")})},x),Object(a["createElementVNode"])("li",{onClick:t[4]||(t[4]=function(e){return c.changeLang("zh_cn")})},C)])])),Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("span",{id:"menu-btn",onClick:t[5]||(t[5]=function(){return c.menuClick&&c.menuClick.apply(c,arguments)})})])])])])])])])),c.isH5?(Object(a["openBlock"])(),Object(a["createElementBlock"])("header",{key:1,class:Object(a["normalizeClass"])(["transparent border-bottom",{h5menu:c.isShow}])},[Object(a["createElementVNode"])("div",D,[L,Object(a["createElementVNode"])("div",{class:"menu-btn",onClick:t[6]||(t[6]=function(){return c.menuClick&&c.menuClick.apply(c,arguments)})})]),c.isShow?(Object(a["openBlock"])(),Object(a["createElementBlock"])("ul",z,[Object(a["createVNode"])(S,{style:{background:"#212428"}},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("li",{onClick:t[7]||(t[7]=function(e){return c.isShow=!1,c.router.push("home")})},Object(a["toDisplayString"])(e.$t("home")),1),Object(a["createElementVNode"])("li",{onClick:t[8]||(t[8]=function(e){return c.isShow=!1,c.router.push({path:"explore",query:{name:1}})})},Object(a["toDisplayString"])(e.$t("game")),1),Object(a["createElementVNode"])("li",{onClick:t[9]||(t[9]=function(e){return c.isShow=!1,c.router.push({path:"explore",query:{name:2}})})},Object(a["toDisplayString"])(e.$t("igo")),1),Object(a["createVNode"])(k,{title:"Efficiency",name:"3"},{title:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",I,Object(a["toDisplayString"])(e.$t("Metaverse")),1)]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("li",T,Object(a["toDisplayString"])(e.$t("Staytuned")),1)]})),_:1}),Object(a["createVNode"])(k,{name:"4"},{title:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",F,Object(a["toDisplayString"])(e.$t("lang")),1)]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("li",{onClick:t[10]||(t[10]=function(e){return c.isShow=!1,c.changeLang("en_us")}),style:{"margin-left":"1rem"}},"English"),Object(a["createElementVNode"])("li",{onClick:t[11]||(t[11]=function(e){return c.isShow=!1,c.changeLang("zh_cn")}),style:{"margin-left":"1rem"}},"中文")]})),_:1})]})),_:1})])):Object(a["createCommentVNode"])("",!0)],2)):Object(a["createCommentVNode"])("",!0)],64)}n("7db0"),n("d3b7");var A=n("6c02"),H=n("5502"),M=n("25a8"),G={setup:function(){var e=Object(A["d"])(),t=Object(A["c"])(),n=Object(H["b"])(),c=Object(a["getCurrentInstance"])(),r=c.proxy,o=Object(M["a"])(),l=o.isH5,i=Object(a["ref"])(!1),s=function(){i.value=!i.value},d=function(e){console.log(e),r.$i18n.locale=e,n.commit("changeLang",e),window.sessionStorage.setItem("langOfz",e)};function u(e){var t=$(e+".dropdown"),n=t.find(".btn-selector"),a=t.find("ul"),c=a.find("li");console.log("opt",c),t.on("mouseenter",(function(){a.show()})).on("mouseleave",(function(){a.hide()})),c.on("click",(function(){a.hide();var e=$(this).text();c.removeClass("active"),$(this).addClass("active"),n.text(e)}))}var m=Object(a["computed"])((function(){var e=window.sessionStorage.getItem("langOfz")||"en_us",t={en_us:"English",zh_cn:"中文"};return t[e]}));return console.log("langlocal",m.value),Object(a["onMounted"])((function(){u("#lang_type"),console.log("route",t.path)})),{router:e,changeLang:d,langlocal:m,route:t,isH5:l,menuClick:s,isShow:i}}},R=(n("83e0"),n("6b0d")),Z=n.n(R);const q=Z()(G,[["render",P],["__scopeId","data-v-ee4026e8"]]);t["a"]=q},"8bbf":function(e,t){e.exports=Vue},"8f3e":function(e,t,n){},"8fe5":function(e,t,n){e.exports=n.p+"img/two.b3cd77a4.png"},"9b63":function(e,t,n){"use strict";function a(){jQuery("#collection-carousel-alt").owlCarousel({center:!1,items:5,loop:!1,margin:25,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],dots:!1,responsive:{1e3:{items:5},600:{items:2},0:{items:1}}}),jQuery("#items-carousel").owlCarousel({center:!1,items:4,loop:!1,margin:25,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],dots:!1,responsive:{1e3:{items:4},600:{items:2},0:{items:1}}}),jQuery("#items-carouse-3").owlCarousel({center:!1,items:4,loop:!0,margin:25,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],dots:!1,responsive:{1e3:{items:4},600:{items:2},0:{items:1}}})}n.d(t,"a",(function(){return a}))},ab5d:function(e,t,n){},ab9e:function(e,t,n){e.exports=n.p+"img/one.c34f8381.png"},bd64:function(e,t,n){e.exports=n.p+"img/footer.b36c1d54.jpg"},be66:function(e,t){e.exports=ElementPlus},c329:function(e,t,n){"use strict";var a=n("8bbf"),c=n("bd64"),r=n.n(c),o=n("4c97"),l=n.n(o),i=function(e){return Object(a["pushScopeId"])("data-v-4b43295f"),e=e(),Object(a["popScopeId"])(),e},s={class:"container"},d={key:0,class:"flex"},u=i((function(){return Object(a["createElementVNode"])("div",{class:"logo"},[Object(a["createElementVNode"])("img",{src:r.a,alt:""})],-1)})),m={class:"right"},b={class:"subfooter mt0"},f={class:"container"},p={class:"row"},g={class:"col-md-12"},O={class:"de-flex"},h=i((function(){return Object(a["createElementVNode"])("div",{class:"de-flex-col"},null,-1)})),j={class:"de-flex-col"},v={class:"social-icons"},y=Object(a["createStaticVNode"])('<a href="https://t.me/OurFutureZone" target="_blank" data-v-4b43295f><i class="fa fa-telegram fa-lg" data-v-4b43295f></i></a><a href="https://twitter.com/ofz_com" target="_blank" data-v-4b43295f><i class="fa fa-twitter fa-lg" data-v-4b43295f></i></a><a href="https://www.youtube.com/channel/UCt41byheHzmRMYIZ9OFilDA" target="_blank" data-v-4b43295f><i class="fa fa-youtube fa-lg" data-v-4b43295f></i></a><a href="mailto:contact@ofz.com" data-v-4b43295f><i class="fa fa-envelope fa-lg" data-v-4b43295f></i></a><a href="https://space.bilibili.com/1005130884?spm_id_from=333.788.b_765f7570696e666f.1" data-v-4b43295f><i class="fa fa-youtube-play fa-lg" data-v-4b43295f></i></a>',5),E=i((function(){return Object(a["createElementVNode"])("div",{style:{}},[Object(a["createElementVNode"])("img",{style:{width:"100%",height:"100%"},src:l.a,alt:""})],-1)})),N=i((function(){return Object(a["createElementVNode"])("a",{href:"javascript:"},[Object(a["createElementVNode"])("i",{class:"poptip--top fa fa-weixin fa-lg"})],-1)}));function V(e,t,n,c,r,o){var l=Object(a["resolveComponent"])("el-popover");return Object(a["openBlock"])(),Object(a["createElementBlock"])("footer",null,[Object(a["createElementVNode"])("div",s,[c.isH5?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",d,[u,Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.$t("footer1")),1),Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.$t("footer2")),1)])]))]),Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("div",O,[h,Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("div",v,[y,Object(a["createVNode"])(l,{placement:"top",width:100,trigger:"hover"},{reference:Object(a["withCtx"])((function(){return[N]})),default:Object(a["withCtx"])((function(){return[E]})),_:1})])])])])])])])])}var w=n("25a8"),_={setup:function(){var e=Object(w["a"])(),t=e.isH5;return console.log(t),{isH5:t}}},k=(n("146f"),n("6b0d")),x=n.n(k);const S=x()(_,[["render",V],["__scopeId","data-v-4b43295f"]]);t["a"]=S},c831:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":30,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true,"config_demo":{"hide_card":false,"background_color":"#b61924","background_image":"","background_position":"50% 50%","background_repeat":"no-repeat","background_size":"cover"}}')},d6fa:function(e,t,n){e.exports=n.p+"img/bg.9cf2eefe.png"},db88:function(e,t,n){},fe9c:function(e,t,n){e.exports=n.p+"img/logo.8a2bfc74.jpg"}});