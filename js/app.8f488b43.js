(function(e){function t(t){for(var n,c,i=t[0],s=t[1],d=t[2],u=t[3]||[],m=0,p=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);b&&b(t),l.push.apply(l,u);while(p.length)p.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var d=a[c];0!==r[d]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return 0===o.length&&(l.forEach((function(e){if(void 0===r[e]){r[e]=null;var t=document.createElement("link");s.nc&&t.setAttribute("nonce",s.nc),t.rel="prefetch",t.as="script",t.href=i(e),document.head.appendChild(t)}})),l.length=0),e}var n={},c={app:0},r={app:0},o=[],l=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-486a65fa":"38a27e1a","chunk-9ada7958":"b652ac1d","chunk-c97e2152":"f55e0fce","chunk-d76a787c":"cf3eb79f"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-486a65fa":1,"chunk-9ada7958":1,"chunk-c97e2152":1,"chunk-d76a787c":1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-486a65fa":"902f2dac","chunk-9ada7958":"be38d084","chunk-c97e2152":"888c68c4","chunk-d76a787c":"cf573a0a"}[e]+".css",r=s.p+n,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var i=o[l],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===r))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){i=u[l],d=i.getAttribute("data-href");if(d===n||d===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete c[e],m.parentNode.removeChild(m),a(o)},m.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(m)})).then((function(){c[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",u.name="ChunkLoadError",u.type=n,u.request=c,a[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var m=0;m<d.length;m++)t(d[m]);var b=u,p=function(){return o.push([0,"chunk-vendors"]),a()}();t([[],{},0,["chunk-486a65fa","chunk-c97e2152","chunk-d76a787c","chunk-9ada7958"]])})({0:function(e,t,a){e.exports=a("56d7")},"0fab":function(e,t,a){},"170e":function(e,t,a){},"25a8":function(e,t,a){"use strict";t["a"]=function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!1,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){a=!0;break}var c=window.screen.width,r=window.screen.height;return c<500&&r<800&&(a=!0),{isH5:a}}},"2cd4":function(e,t,a){"use strict";a("46d7")},3191:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a("b775"),c=function(e){return Object(n["a"])({url:"/gamefi/index",method:"get",params:e})},r=function(e){return Object(n["a"])({url:"/gamefi/recommends",method:"get",params:e})},o=function(e){return Object(n["a"])({url:"/gamefi/info",method:"get",params:e})},l=function(e){return Object(n["a"])({url:"/gamefi/igos",method:"get",params:e})},i=function(e){return Object(n["a"])({url:"/chains/index",method:"get",params:e})}},"46d7":function(e,t,a){},4869:function(e,t,a){"use strict";a("0fab")},"4c97":function(e,t,a){e.exports=a.p+"img/weichat.b88f4c64.png"},5351:function(e,t,a){"use strict";a("fa42")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("be66"),c=a.n(n),r=a("8bbf"),o={id:"app"};function l(e,t){var a=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createVNode"])(a)])}a("7165");var i=a("6b0d"),s=a.n(i);const d={},u=s()(d,[["render",l]]);var m=u,b=a("47e2"),p={home:"Home",game:"Game",igo:"IGO",Metaverse:"Metaverse",Staytuned:"Stay tuned",lang:"Language",FuturZone:"Our Future Zone ",FuturZone_bottom:"Metaverse-Our future zone<br>OFZ- The first entrance to the metaverse",Collections:"Collections",Seeall:"See all >>",rank:"Ranking",Populartutorials:"Popular tutorials",footer1:"Explore the first entrance to the metaverse.",footer2:"Metaverse is defined as a future persistent and decentralized online 3D virtual environment.GameFi presents decentralized financial products in the form of games of which Play to Earn is the core business model.Metaverse explorers are trying to depict parts of the metaverse and share the commercial value behind the exploration base on the current GameFi model.",Explore:"Explore",search:"search item here...",IGO2:"IGO",Loadmore:"Load more",Chain:"Chain",Website:"Website",Community:"Community",Gametutorial:"Game tutorial",SaleStarts:"Sale Starts In:",progress:"progress",comeSoon:"Coming Soon",allItem:"All item",active:"Active",shareTitle:"Come across an amazing project {msg} on ofz.com , the first entrance to metaverse.  Details",shareTitleTw1:"Come across an amazing project ",shareTitleTw2:" on ",detail:"the first entrance to metaverse.Details:",share:"Share",copy:"Copy successfully",blog:"Blog",all:"All",teach:"Tutorials",topic:"Topic",recommendation:"Recommend",shareAr:"{msgs},detail:",shareXb:"(prepared by ofz editor)",search2:"search"},f={home:"首页",game:"游戏",igo:"IGO",Metaverse:"元宇宙",Staytuned:"敬请期待",lang:"语言",FuturZone:"Our Future Zone ",FuturZone_bottom:"元宇宙，我们的未来世界。<br>OFZ，探索元宇宙第一入口",Collections:"精选推荐",Seeall:"查看全部>>",rank:"排行榜",Populartutorials:"热门教程",footer1:"汇集元宇宙生态应用，探索元宇宙第一入口。",footer2:"元宇宙(Metaverse) 被用来描述一个未来持久化和去中心化的在线三维虚拟环境。GameFi（Game Finance） 将去中心化金融DeFi 产品以游戏的方式呈现，Play to Earn 边玩边赚钱是其核心商业模式。透过当前 GameFi模式，元宇宙探索者正尝试描绘出元宇宙的部分模样并共享探索背后的商业价值。",Explore:"项目探索",search:"搜索项目...",IGO2:"参与IGO",Loadmore:"查看更多",Chain:"所在网络",Website:"官方网址",Community:"社区",Gametutorial:"项目教程",SaleStarts:"开始时间",progress:"更新中",comeSoon:"即将开始",allItem:"所有项目",active:"进行中",shareTitle:"我发现一个很有趣的项目{msg},他被收录在元宇宙第一入口ofz.com,详情",shareTitleTw1:"我发现一个很有趣的项目",shareTitleTw2:"他被收入在元宇宙第一入口",detail:"详情:",share:"分享",copy:"复制成功",blog:"博客",all:"全部",teach:"教程",topic:"专题",recommendation:"主编推荐",shareAr:"{msgs},详情:",shareXb:"(由ofz小编整理)",search2:"搜索"},g={en_us:p,zh_cn:f},h=(((navigator.language?navigator.language:navigator.userLanguage)||"zh").toLowerCase(),Object(b["a"])({fallbackLocale:"en_us",globalInjection:!0,legacy:!1,locale:window.sessionStorage.getItem("langOfz")||"en_us",messages:g})),j=h,O=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),v=a("d6fa"),y=a.n(v),E=function(e){return Object(r["pushScopeId"])("data-v-62b51baa"),e=e(),Object(r["popScopeId"])(),e},N={class:"dark-scheme de-grey"},V={id:"wrapper"},w={class:"no-bottom no-top h5_mt40",id:"content"},k=E((function(){return Object(r["createElementVNode"])("div",{id:"top"},null,-1)})),_={id:"section-hero","aria-label":"section",class:"pt20 pb20 vh-100 bg bg-height"},x={key:0,id:"particles-js"},C={class:"v-center"},S={class:"container"},D={class:"row align-items-center"},B={class:"col-md-6"},z=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-single"},null,-1)})),L=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-10"},null,-1)})),I={class:"wow fadeInUp","data-wow-delay":".75s",style:{"text-align":"left"}},T={class:"wow fadeInUp lead zone_bottom"},$=["innerHTML"],F=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-10"},null,-1)})),P={class:"row"},A={key:0,class:"spacer-single"},H=Object(r["createStaticVNode"])('<div class="row" data-v-62b51baa><div class="col-lg-4 col-md-4 col-sm-4 col-xs-3 wow fadeInRight mb30" data-wow-delay="1.1s" data-v-62b51baa><div class="de_count text-left" style="text-align:left;" data-v-62b51baa><h3 data-v-62b51baa><span data-v-62b51baa>1000+</span></h3><h5 class="id-color" data-v-62b51baa>Dapps(updating)</h5></div></div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 wow fadeInRight mb30 pd" data-wow-delay="1.4s" data-v-62b51baa><div class="de_count text-left" data-v-62b51baa><h3 data-v-62b51baa><span data-v-62b51baa>950</span>k</h3><h5 class="id-color" data-v-62b51baa>Dapps Users</h5></div></div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-3 wow fadeInRight mb30" data-wow-delay="1.7s" data-v-62b51baa><div class="de_count text-left" data-v-62b51baa><h3 data-v-62b51baa><span data-v-62b51baa>120.6</span>k</h3><h5 class="id-color" data-v-62b51baa>Pageview</h5></div></div></div>',1),M=E((function(){return Object(r["createElementVNode"])("div",{class:"col-md-6 xs-hide"},[Object(r["createElementVNode"])("img",{src:y.a,class:"img-fluid wow fadeInUp","data-wow-delay":".75s",alt:""})],-1)})),R={class:"content-body"},G={id:"section-collections",class:"pt30 pb30"},q={class:"container"},Z={class:"row wow fadeIn"},W={class:"col-lg-12 flex"},U={class:"style-2"},X={id:"items-carousel",class:"owl-carousel wow fadeIn flex"},Q=["onClick"],J={class:"nft__item_wrap"},Y=["src"],K={class:"nft__item_info",style:{"text-align":"left"}},ee={class:"nft__item_price line_clamp"},te=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-single mt0",style:{"margin-top":"80px"}},null,-1)})),ae={class:"row carousel"},ne={class:"col-lg-12 flex"},ce={class:"style-2"},re={id:"collection-carousel-alt",class:"owl-carousel wow fadeIn flex"},oe=["href"],le={class:"nft_wrap",style:{height:"123px"}},ie=["src"],se={class:"nft_coll_pp"},de=["src"],ue={class:"nft_coll_info"},me={class:"line_clamp"},be={class:"line_clamp"},pe=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-double mt0",style:{"margin-top":"80px"}},null,-1)})),fe={class:"row"},ge={class:"col-lg-12"},he={class:"style-2"},je={class:"col-md-12 wow fadeIn"},Oe={class:"author_list"},ve=["onClick"],ye={class:"author_list_pp"},Ee=["src"],Ne={class:"author_list_info rank_item"},Ve={style:{"font-size":"16px",color:"#ffffff","font-weight":"900"}},we={class:"line_clamp",style:{width:"95px"}},ke=E((function(){return Object(r["createElementVNode"])("div",{class:"spacer-double mt60",style:{"margin-top":"30px"}},null,-1)})),_e={id:"section-text",class:"no-top","data-wow-delay":"1.1s"},xe={class:"container"},Ce={class:"row"},Se={class:"col-lg-12"},De={class:"style-2"},Be=E((function(){return Object(r["createElementVNode"])("a",{href:"javascript:",id:"back-to-top"},null,-1)}));function ze(e,t,a,n,c,o){var l=Object(r["resolveComponent"])("Ahearder"),i=Object(r["resolveComponent"])("Popular"),s=Object(r["resolveComponent"])("Afooter");return Object(r["openBlock"])(),Object(r["createElementBlock"])("body",N,[Object(r["createElementVNode"])("div",V,[Object(r["createVNode"])(l),Object(r["createElementVNode"])("div",w,[k,Object(r["createElementVNode"])("section",_,[n.isH5?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",x)),Object(r["createElementVNode"])("div",C,[Object(r["createElementVNode"])("div",S,[Object(r["createElementVNode"])("div",D,[Object(r["createElementVNode"])("div",B,[z,L,Object(r["createElementVNode"])("h1",I,Object(r["toDisplayString"])(e.$t("FuturZone")),1),Object(r["createElementVNode"])("p",T,[Object(r["createElementVNode"])("span",{class:Object(r["normalizeClass"])([n.lang_type]),innerHTML:n.t("FuturZone_bottom")},null,10,$)]),F,Object(r["createElementVNode"])("div",P,[n.isH5?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",A)),H])]),M])])])]),Object(r["createElementVNode"])("div",R,[Object(r["createElementVNode"])("section",G,[Object(r["createElementVNode"])("div",q,[Object(r["createElementVNode"])("div",Z,[Object(r["createElementVNode"])("div",W,[Object(r["createElementVNode"])("h2",U,Object(r["toDisplayString"])(e.$t("Collections")),1),Object(r["createElementVNode"])("h2",{class:"style-2",onClick:t[0]||(t[0]=function(e){return n.goExplore(1)}),style:{cursor:"pointer","font-size":"15px",color:"#c3bebe"}},Object(r["toDisplayString"])(e.$t("Seeall")),1)]),Object(r["createElementVNode"])("div",X,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.recommendsList,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"d-item",key:t},[Object(r["createElementVNode"])("div",{class:"nft__item style-2",style:{height:"100%"},onClick:function(t){return n.goDetail(e.id)}},[Object(r["createElementVNode"])("div",J,[Object(r["createElementVNode"])("img",{src:e.image_url,class:"lazy nft__item_preview",alt:""},null,8,Y)]),Object(r["createElementVNode"])("div",K,[Object(r["createElementVNode"])("h4",null,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("div",ee,Object(r["toDisplayString"])(e.sub_title),1)])],8,Q)])})),128))])]),te,Object(r["createElementVNode"])("div",ae,[Object(r["createElementVNode"])("div",ne,[Object(r["createElementVNode"])("h2",ce,Object(r["toDisplayString"])(e.$t("igo")),1),Object(r["createElementVNode"])("h2",{class:"style-2",onClick:t[1]||(t[1]=function(e){return n.goExplore(2)}),style:{cursor:"pointer","font-size":"15px",color:"#c3bebe"}},Object(r["toDisplayString"])(e.$t("Seeall")),1)]),Object(r["createElementVNode"])("div",re,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.idoList,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"nft_coll style-2",key:t},[Object(r["createElementVNode"])("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},[Object(r["createElementVNode"])("div",le,[Object(r["createElementVNode"])("img",{src:e.image_url,class:"lazy img-fluid",alt:""},null,8,ie)]),Object(r["createElementVNode"])("div",se,[Object(r["createElementVNode"])("img",{class:"lazy",src:e.image_url,alt:"",style:{width:"60px",height:"60px"}},null,8,de)]),Object(r["createElementVNode"])("div",ue,[Object(r["createElementVNode"])("h4",me,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("span",be,Object(r["toDisplayString"])(e.sub_title),1)])],8,oe)])})),128))])]),pe,Object(r["createElementVNode"])("div",fe,[Object(r["createElementVNode"])("div",ge,[Object(r["createElementVNode"])("h2",he,Object(r["toDisplayString"])(e.$t("rank")),1)]),Object(r["createElementVNode"])("div",je,[Object(r["createElementVNode"])("ol",Oe,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.rankList,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:e.id,onClick:function(t){return n.goDetail(e.id)}},[Object(r["createElementVNode"])("div",ye,[Object(r["createElementVNode"])("img",{class:"lazy",src:e.image_url,alt:""},null,8,Ee)]),Object(r["createElementVNode"])("div",Ne,[Object(r["createElementVNode"])("span",Ve,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("span",we,Object(r["toDisplayString"])(e.sub_title),1)])],8,ve)})),128))])])])])]),ke,Object(r["createElementVNode"])("section",_e,[Object(r["createElementVNode"])("div",xe,[Object(r["createElementVNode"])("div",Ce,[Object(r["createElementVNode"])("div",Se,[Object(r["createElementVNode"])("h2",De,Object(r["toDisplayString"])(e.$t("Populartutorials")),1)]),Object(r["createVNode"])(i)])])])])]),Be,Object(r["createVNode"])(s)])])}var Le=a("5530"),Ie=a("1da1"),Te=(a("96cf"),a("8ba5")),$e=a("c329"),Fe={class:"feature-box f-boxed style-3",style:{padding:"20px",width:"340px",margin:"auto"}},Pe={class:"text"},Ae={class:"wow fadeInUp","data-wow-delay":".25s"},He=["src"],Me=["onClick"],Re={class:"logo"},Ge=["src"],qe={class:"nft__item_info",style:{"text-align":"left","margin-left":"10px"}},Ze={class:"nft__item_price line_clamp",style:{width:"200px"}};function We(e,t,a,n,c,o){return Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.videoList[n.lang_type],(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"col-lg-4 col-md-6 mb-sm-30",key:t},[Object(r["createElementVNode"])("div",Fe,[Object(r["createElementVNode"])("div",Pe,[Object(r["createElementVNode"])("p",Ae,[Object(r["createElementVNode"])("iframe",{src:e.iframe,scrolling:"no",border:"0",frameborder:"no",framespacing:"0"}," ",8,He)]),Object(r["createElementVNode"])("div",{class:"video_bottom",onClick:function(t){return n.goDetail(e.id)}},[Object(r["createElementVNode"])("div",Re,[Object(r["createElementVNode"])("img",{src:e.imgurl,alt:""},null,8,Ge)]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("div",qe,[Object(r["createElementVNode"])("h4",null,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("div",Ze,Object(r["toDisplayString"])(e.subtitle),1)])])],8,Me)])])])})),128)}var Ue=a("5502"),Xe={name:"popular",setup:function(){var e=Object(O["d"])(),t=Object(Ue["b"])(),n=Object(r["computed"])((function(){return t.state.lang})),c={en_us:[{title:"BinaryX",subtitle:"Cyber Dragon is an online game based on Binance Smart Chain . Players can create characters, challenge copies, and loot rare items. The final challenge is to defeat the ultimate boss, the cyber dragon. ",id:"21",iframe:"//player.bilibili.com/player.html?aid=209942137&bvid=BV1Ha411k7qm&cid=462798977&page=1",imgurl:a("ab9e")},{title:"Star Atlas",subtitle:"A grand strategy game of space exploration, territorial conquest, political domination, and more.",id:"139",iframe:"//player.bilibili.com/player.html?aid=209877490&bvid=BV1ca411k7Ck&cid=462805068&page=1",imgurl:a("8fe5")},{title:"DeFi Warrior",subtitle:"Defi Warrior is a Defi x NFT blockchain-based game genre inspired by the universe of cryptocurrencies where each Warrior is a crypto and each planet is a blockchain.  ",id:"254",iframe:"//player.bilibili.com/player.html?aid=464903968&bvid=BV1VL411j7CX&cid=462816062&page=1",imgurl:a("57da")}],zh_cn:[{title:"BinaryX",subtitle:"Binary是一款基于币安智能链（BSC）的游戏。玩家可以自由创建角色，挑战各种副本，提高角色等级，获取极品装备。游戏的最终目标是挑战终极Boss-赛博之龙 ",id:"76",iframe:'//player.bilibili.com/player.html?aid=209942137&bvid=BV1Ha411k7qm&cid=462798977&page=1" ',imgurl:a("ab9e")},{title:"Star Atlas",subtitle:"这是一款多人在线大型战略游戏，这里有太空探索，领土征服，和政治统治等。",id:"140",iframe:"//player.bilibili.com/player.html?aid=209877490&bvid=BV1ca411k7Ck&cid=462805068&page=1",imgurl:a("8fe5")},{title:"DeFi Warrior",subtitle:"Defi Warrior是一个基于Defi x NFT区块链的游戏类型，其灵感来自加密货币的宇宙，每个战士都是一个加密货币，每个星球都是单独的区块。 ",id:"255",iframe:"//player.bilibili.com/player.html?aid=464903968&bvid=BV1VL411j7CX&cid=462816062&page=1",imgurl:a("57da")}]},o=function(){var t=Object(Ie["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.push({path:"detail",query:{id:a}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{videoList:c,goDetail:o,lang_type:n}}};a("5351");const Qe=s()(Xe,[["render",We],["__scopeId","data-v-6e545d89"]]);var Je=Qe,Ye=a("c831"),Ke=a("25a8"),et=a("9b63"),tt=a("3191"),at={name:"Home",components:{Ahearder:Te["a"],Afooter:$e["a"],Popular:Je},setup:function(){var e=Object(b["b"])(),t=e.t,a=Object(O["d"])(),n=Object(Ue["b"])(),c=Object(Ke["a"])(),o=c.isH5,l=Object(r["reactive"])({recommendsList:[],idoList:[],rankList:[]}),i=Object(r["computed"])((function(){return n.state.lang}));Object(r["watch"])(i,(function(){u(),m()})),console.log("lang_type",i.value);var s=function(e){a.push({path:"/explore",query:{name:e}})},d=function(){var e=Object(Ie["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.push({path:"detail",query:{id:t}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(Ie["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(tt["e"])({is_hot:1,lang_type:i.value});case 2:t=e.sent,console.log("aa"),l.recommendsList=t.data.result.gamefi,l.idoList=t.data.result.idos,console.log("recommendsList",l.recommendsList),setTimeout((function(){Object(et["a"])()}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(Ie["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(tt["e"])({is_best:1,lang_type:i.value,rec_nums:12});case 2:t=e.sent,l.rankList=t.data.result.gamefi;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r["onMounted"])((function(){o||particlesJS("particles-js",Ye),u(),m()})),Object(Le["a"])(Object(Le["a"])({goExplore:s,goDetail:d,t:t,getrecommendsList:u},Object(r["toRefs"])(l)),{},{lang_type:i,isH5:o})}};a("4869");const nt=s()(at,[["render",ze],["__scopeId","data-v-62b51baa"]]);var ct=nt,rt=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:ct},{path:"/detail",name:"Detail",component:function(){return a.e("chunk-486a65fa").then(a.bind(null,"1000"))}},{path:"/explore",name:"explore",component:function(){return a.e("chunk-9ada7958").then(a.bind(null,"91d0"))}},{path:"/blog",name:"blog",component:function(){return a.e("chunk-d76a787c").then(a.bind(null,"8439"))}},{path:"/blogDetail",name:"blogDetail",component:function(){return a.e("chunk-c97e2152").then(a.bind(null,"a589"))}}],ot=Object(O["a"])({history:Object(O["b"])(),routes:rt}),lt=ot,it=Object(Ue["a"])({state:{lang:window.sessionStorage.getItem("langOfz")||"en_us"},mutations:{changeLang:function(e,t){e.lang=t}},actions:{},modules:{}});a("572f"),Object(r["createApp"])(m);console.log("process.env.NODE_ENV","production"),Object(r["createApp"])(m).use(it).use(lt).use(j).use(c.a).mount("#app")},"57da":function(e,t,a){e.exports=a.p+"img/three.df267aef.png"},"6e8e":function(e,t,a){"use strict";a("c3df")},7165:function(e,t,a){"use strict";a("170e")},"8ba5":function(e,t,a){"use strict";var n=a("8bbf"),c=a("fe9c"),r=a.n(c),o=function(e){return Object(n["pushScopeId"])("data-v-cd29200e"),e=e(),Object(n["popScopeId"])(),e},l={key:0,class:"transparent border-bottom"},i={class:"container"},s={class:"row"},d={class:"col-md-12"},u={class:"de-flex sm-pt10"},m=o((function(){return Object(n["createElementVNode"])("div",{class:"de-flex-col"},[Object(n["createElementVNode"])("div",{class:"de-flex-col"},[Object(n["createElementVNode"])("div",{id:"logo"},[Object(n["createElementVNode"])("a",{href:"#"},[Object(n["createElementVNode"])("img",{alt:"",src:r.a,class:"logo"})])])])],-1)})),b={class:"de-flex-col header-col-mid"},p={id:"mainmenu",style:{"margin-right":"20px"}},f={href:"javascript:"},g=o((function(){return Object(n["createElementVNode"])("span",null,null,-1)})),h={href:"javascript:"},j=o((function(){return Object(n["createElementVNode"])("span",null,null,-1)})),O={href:"javascript:"},v=o((function(){return Object(n["createElementVNode"])("span",null,null,-1)})),y={href:"javascript:"},E=o((function(){return Object(n["createElementVNode"])("span",null,null,-1)})),N={href:"javascript:"},V=o((function(){return Object(n["createElementVNode"])("span",null,null,-1)})),w={href:"javascript:"},k=o((function(){return Object(n["createElementVNode"])("li",null,null,-1)})),_={id:"lang_type",class:"dropdown mb0 input-width"},x={href:"javascript:",class:"btn-selector"},C=o((function(){return Object(n["createElementVNode"])("span",null,"English",-1)})),S=[C],D=o((function(){return Object(n["createElementVNode"])("span",null,"中文",-1)})),B=[D],z={class:"menu_side_area"},L={class:"h5_logo"},I=o((function(){return Object(n["createElementVNode"])("img",{alt:"",src:r.a},null,-1)})),T={key:0},F={style:{"font-weight":"900"}},P={style:{"margin-left":"1rem"}},A={style:{"font-weight":"900"}};function H(e,t,a,c,r,o){var C=Object(n["resolveComponent"])("el-collapse-item"),D=Object(n["resolveComponent"])("el-collapse");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[c.isH5?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("header",l,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("div",s,[Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",u,[m,Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("ul",p,[Object(n["createElementVNode"])("li",{onClick:t[0]||(t[0]=function(e){return c.router.push("home")})},[Object(n["createElementVNode"])("a",f,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("home")),1),g])]),Object(n["createElementVNode"])("li",{onClick:t[1]||(t[1]=function(e){return c.router.push({path:"explore",query:{name:1}})})},[Object(n["createElementVNode"])("a",h,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("game")),1),j])]),Object(n["createElementVNode"])("li",{onClick:t[2]||(t[2]=function(e){return c.router.push({path:"explore",query:{name:2}})})},[Object(n["createElementVNode"])("a",O,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("igo")),1),v])]),"zh_cn"==c.langNow?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:0,onClick:t[3]||(t[3]=function(e){return c.router.push("blog")})},[Object(n["createElementVNode"])("a",y,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("blog")),1),E])])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",N,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("Metaverse")),1),V]),Object(n["createElementVNode"])("ul",null,[Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",w,Object(n["toDisplayString"])(e.$t("Staytuned")),1)])])]),k]),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",_,[Object(n["createElementVNode"])("a",x,Object(n["toDisplayString"])(c.langlocal),1),Object(n["createElementVNode"])("ul",null,[Object(n["createElementVNode"])("li",{onClick:t[4]||(t[4]=function(e){return c.changeLang("en_us")})},S),Object(n["createElementVNode"])("li",{onClick:t[5]||(t[5]=function(e){return c.changeLang("zh_cn")})},B)])],512),[[n["vShow"],"/detail"!==c.route.path&&!c.isH5&&"/blogDetail"!==c.route.path&&"/blog"!==c.route.path]]),Object(n["createElementVNode"])("div",z,[Object(n["createElementVNode"])("span",{id:"menu-btn",onClick:t[6]||(t[6]=function(){return c.menuClick&&c.menuClick.apply(c,arguments)})})])])])])])])])),c.isH5?(Object(n["openBlock"])(),Object(n["createElementBlock"])("header",{key:1,class:Object(n["normalizeClass"])(["transparent border-bottom",{h5menu:c.isShow}])},[Object(n["createElementVNode"])("div",L,[I,Object(n["createElementVNode"])("div",{class:"menu-btn",onClick:t[7]||(t[7]=function(){return c.menuClick&&c.menuClick.apply(c,arguments)})})]),c.isShow?(Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",T,[Object(n["createVNode"])(D,{style:{background:"#212428"}},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("li",{onClick:t[8]||(t[8]=function(e){return c.isShow=!1,c.router.push("home")})},Object(n["toDisplayString"])(e.$t("home")),1),Object(n["createElementVNode"])("li",{onClick:t[9]||(t[9]=function(e){return c.isShow=!1,c.router.push({path:"explore",query:{name:1}})})},Object(n["toDisplayString"])(e.$t("game")),1),Object(n["createElementVNode"])("li",{onClick:t[10]||(t[10]=function(e){return c.isShow=!1,c.router.push({path:"explore",query:{name:2}})})},Object(n["toDisplayString"])(e.$t("igo")),1),"zh_cn"==c.langNow?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:0,onClick:t[11]||(t[11]=function(e){return c.isShow=!1,c.router.push({path:"blog",query:{name:2}})})},Object(n["toDisplayString"])(e.$t("blog")),1)):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(C,{title:"Efficiency",name:"3"},{title:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",F,Object(n["toDisplayString"])(e.$t("Metaverse")),1)]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("li",P,Object(n["toDisplayString"])(e.$t("Staytuned")),1)]})),_:1}),Object(n["createVNode"])(C,{name:"4"},{title:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",A,Object(n["toDisplayString"])(e.$t("lang")),1)]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("li",{onClick:t[12]||(t[12]=function(e){return c.isShow=!1,c.changeLang("en_us")}),style:{"margin-left":"1rem"}},"English"),Object(n["createElementVNode"])("li",{onClick:t[13]||(t[13]=function(e){return c.isShow=!1,c.changeLang("zh_cn")}),style:{"margin-left":"1rem"}},"中文")]})),_:1})]})),_:1})])):Object(n["createCommentVNode"])("",!0)],2)):Object(n["createCommentVNode"])("",!0)],64)}a("7db0"),a("d3b7");var M=a("6c02"),R=a("5502"),G=a("25a8"),q={setup:function(){var e=Object(M["d"])(),t=Object(M["c"])(),a=Object(R["b"])(),c=Object(n["getCurrentInstance"])(),r=c.proxy,o=Object(G["a"])(),l=o.isH5,i=Object(n["ref"])(!1),s=function(){i.value=!i.value},d=Object(n["ref"])(window.sessionStorage.getItem("langOfz")||"en_us"),u=function(e){console.log(e,"ss"),d.value=e,r.$i18n.locale=e,a.commit("changeLang",e),window.sessionStorage.setItem("langOfz",e)};function m(e){var t=$(e+".dropdown"),a=t.find(".btn-selector"),n=t.find("ul"),c=n.find("li");console.log("opt",c),t.on("mouseenter",(function(){n.show()})).on("mouseleave",(function(){n.hide()})),c.on("click",(function(){n.hide();var e=$(this).text();c.removeClass("active"),$(this).addClass("active"),a.text(e)}))}var b=Object(n["computed"])((function(){var e=window.sessionStorage.getItem("langOfz")||"en_us",t={en_us:"English",zh_cn:"中文"};return t[e]}));return console.log("langlocal",b.value),Object(n["onMounted"])((function(){m("#lang_type"),console.log("route",t.path)})),{router:e,changeLang:u,langlocal:b,route:t,isH5:l,menuClick:s,isShow:i,langNow:d}}},Z=(a("2cd4"),a("6b0d")),W=a.n(Z);const U=W()(q,[["render",H],["__scopeId","data-v-cd29200e"]]);t["a"]=U},"8bbf":function(e,t){e.exports=Vue},"8fe5":function(e,t,a){e.exports=a.p+"img/two.b3cd77a4.png"},"9b63":function(e,t,a){"use strict";function n(){jQuery("#collection-carousel-alt").owlCarousel({center:!1,items:5,loop:!1,margin:25,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],dots:!1,responsive:{1e3:{items:5},600:{items:2},0:{items:1}}}),jQuery("#items-carousel").owlCarousel({center:!1,items:4,loop:!1,margin:25,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],dots:!1,responsive:{1e3:{items:4},600:{items:2},0:{items:1}}}),jQuery("#items-carouse-3").owlCarousel({center:!1,items:4,loop:!0,margin:25,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],dots:!1,responsive:{1e3:{items:4},600:{items:2},0:{items:1}}}),jQuery("#items-carouse-4").owlCarousel({center:!1,items:4,loop:!0,margin:25,nav:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],dots:!1,responsive:{1e3:{items:4},600:{items:2},0:{items:1}}}),jQuery("#item-carousel-big").owlCarousel({loop:!0,margin:25,nav:!1,dots:!1,autoPlay:1,responsive:{1e3:{items:1},600:{items:1},0:{items:1}}});var e=$("#item-carousel-big");e.owlCarousel(),$(".d-carousel .d-arrow-right").click((function(){e.trigger("next.owl.carousel")})),$(".d-carousel .d-arrow-left").click((function(){e.trigger("prev.owl.carousel")}))}a.d(t,"a",(function(){return n}))},ab9e:function(e,t,a){e.exports=a.p+"img/one.c34f8381.png"},b775:function(e,t,a){"use strict";var n=a("bc3a"),c=a.n(n),r=c.a.create({baseURL:"https://api.ofz.network/v1",timeout:5e3});t["a"]=r},bd64:function(e,t,a){e.exports=a.p+"img/footer.b36c1d54.jpg"},be66:function(e,t){e.exports=ElementPlus},c329:function(e,t,a){"use strict";var n=a("8bbf"),c=a("bd64"),r=a.n(c),o=a("4c97"),l=a.n(o),i=function(e){return Object(n["pushScopeId"])("data-v-722eb21a"),e=e(),Object(n["popScopeId"])(),e},s={class:"container"},d={key:0,class:"flex"},u=i((function(){return Object(n["createElementVNode"])("div",{class:"logo"},[Object(n["createElementVNode"])("img",{src:r.a,alt:""})],-1)})),m={class:"right"},b={class:"subfooter mt0"},p={class:"container"},f={class:"row"},g={class:"col-md-12"},h={class:"de-flex"},j=i((function(){return Object(n["createElementVNode"])("div",{class:"de-flex-col"},null,-1)})),O={class:"de-flex-col"},v={class:"social-icons"},y=Object(n["createStaticVNode"])('<a href="https://t.me/ofz_com1" target="_blank" data-v-722eb21a><i class="fa fa-telegram fa-lg" data-v-722eb21a></i></a><a href="https://twitter.com/ofz_com" target="_blank" data-v-722eb21a><i class="fa fa-twitter fa-lg" data-v-722eb21a></i></a><a href="https://www.youtube.com/channel/UCt41byheHzmRMYIZ9OFilDA" target="_blank" data-v-722eb21a><i class="fa fa-youtube fa-lg" data-v-722eb21a></i></a><a href="mailto:contact@ofz.com" data-v-722eb21a><i class="fa fa-envelope fa-lg" data-v-722eb21a></i></a><a href="https://space.bilibili.com/1005130884?spm_id_from=333.788.b_765f7570696e666f.1" data-v-722eb21a><i class="fa fa-youtube-play fa-lg" data-v-722eb21a></i></a>',5),E=i((function(){return Object(n["createElementVNode"])("div",{style:{}},[Object(n["createElementVNode"])("img",{style:{width:"100%",height:"100%"},src:l.a,alt:""})],-1)})),N=i((function(){return Object(n["createElementVNode"])("a",{href:"javascript:"},[Object(n["createElementVNode"])("i",{class:"poptip--top fa fa-weixin fa-lg"})],-1)}));function V(e,t,a,c,r,o){var l=Object(n["resolveComponent"])("el-popover");return Object(n["openBlock"])(),Object(n["createElementBlock"])("footer",null,[Object(n["createElementVNode"])("div",s,[c.isH5?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",d,[u,Object(n["createElementVNode"])("div",m,[Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.$t("footer1")),1),Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.$t("footer2")),1)])]))]),Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("div",p,[Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("div",h,[j,Object(n["createElementVNode"])("div",O,[Object(n["createElementVNode"])("div",v,[y,Object(n["createVNode"])(l,{placement:"top",width:100,trigger:"hover"},{reference:Object(n["withCtx"])((function(){return[N]})),default:Object(n["withCtx"])((function(){return[E]})),_:1})])])])])])])])])}var w=a("25a8"),k={setup:function(){var e=Object(w["a"])(),t=e.isH5;return console.log(t),{isH5:t}}},_=(a("6e8e"),a("6b0d")),x=a.n(_);const C=x()(k,[["render",V],["__scopeId","data-v-722eb21a"]]);t["a"]=C},c3df:function(e,t,a){},c831:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":30,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true,"config_demo":{"hide_card":false,"background_color":"#b61924","background_image":"","background_position":"50% 50%","background_repeat":"no-repeat","background_size":"cover"}}')},d6fa:function(e,t,a){e.exports=a.p+"img/bg.9cf2eefe.png"},fa42:function(e,t,a){},fe9c:function(e,t,a){e.exports=a.p+"img/logo.8a2bfc74.jpg"}});