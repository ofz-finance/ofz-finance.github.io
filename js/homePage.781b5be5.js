(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["homePage"],{"1f16":function(t,e,n){"use strict";n("3db5")},2739:function(t,e,n){var a={"./add.svg":"38b2","./close.svg":"27ae","./connect.svg":"8232","./connect_gray.svg":"5f46","./disConnect.svg":"1471","./discord.svg":"5a83","./email.svg":"daef","./github.svg":"e4505","./ic_copy_nor.svg":"589f","./ic_copy_pre.svg":"58ba","./ic_ending.svg":"cc25","./ic_question.svg":"a074","./ic_radio_selected.svg":"8a53","./ic_set.svg":"1d44","./ic_share_nor.svg":"da7e","./ic_share_pre.svg":"9811","./ic_success.svg":"b480","./input.svg":"32fc","./lang.svg":"f59b","./logo.svg":"155f","./medium.svg":"e8a0","./nav-about-active.svg":"91a2","./nav-about.svg":"df6e","./nav-charts-active.svg":"6755","./nav-charts.svg":"5dd8","./nav-doc-active.svg":"3551","./nav-doc.svg":"d849","./nav-home-active.svg":"da2c","./nav-home.svg":"a2d6","./nav-pool-active.svg":"9ff1","./nav-pool.svg":"577c","./nav-swap-active.svg":"0f29","./nav-swap.svg":"b670","./nav-vote-active.svg":"3174","./nav-vote.svg":"007b","./not-select.svg":"bb7e","./open.svg":"b164","./output.svg":"a30b","./refresh.svg":"1ab5","./selected.svg":"0091","./status-active.svg":"3369","./status.svg":"0795","./telegram.svg":"0b45","./twitter.svg":"af83"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="2739"},"3db5":function(t,e,n){},4235:function(t,e,n){},"558b":function(t,e,n){},7553:function(t,e,n){},"820a":function(t,e,n){"use strict";n("7553")},"8bc2":function(t,e,n){"use strict";n("558b")},a76d:function(t,e,n){"use strict";n("ea54")},b2d6:function(t,e,n){"use strict";e.__esModule=!0,e.default={el:{colorpicker:{confirm:"OK",clear:"Clear"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:""},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},empty:{description:"No Data"}}}},bc47:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page-wrapper",class:t.isMobile?"mobile-wrapper":""},[n("NavBar",{ref:"navBar",attrs:{isMobile:t.isMobile},on:{changeCollapse:t.changeCollapse}}),n("div",{staticClass:"main main-contanier",class:t.isCollapse?"disabled-scroll":"",on:{click:function(e){return e.stopPropagation(),t.closePannel.apply(null,arguments)}}},[n("router-view")],1),t.isMobile?t._e():n("Footer"),t.showDialog?n("div",[n("comDialog",t._b({attrs:{showDialog:t.showDialog},on:{"update:showDialog":function(e){t.showDialog=e},"update:show-dialog":function(e){t.showDialog=e}}},"comDialog",t.options,!1))],1):t._e(),t.showLinkWallet?n("div",[n("LinkWallet",t._b({attrs:{showDialog:t.showLinkWallet,isMobile:t.isMobile},on:{"update:showDialog":function(e){t.showLinkWallet=e},"update:show-dialog":function(e){t.showLinkWallet=e}}},"LinkWallet",t.walletOptions,!1))],1):t._e()],1)},i=[],o=n("5530"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-bar-wrapper"},[a("ul",{staticClass:"nav-bar-list"},[t.isMobile?a("li",{staticClass:"collapse-item"},[t.isCollapse?a("img",{attrs:{src:n("b164"),alt:""},on:{click:t.collapse}}):a("img",{attrs:{src:n("27ae"),alt:""},on:{click:t.collapse}})]):t._e(),a("li",{staticClass:"left-logo",on:{click:function(e){return t.$router.push("/")}}},[a("img",{attrs:{src:n("155f"),alt:""}})]),t._l(t.navList,(function(e,n){return n<3&&!t.isMobile?a("li",{key:n,class:[t.activeGroup===e.group?"selected":"not-select"],on:{click:function(n){return t.toActive(e)}}},[t._v(t._s(e.name))]):t._e()})),t.isMobile?t._e():a("li",{staticClass:"not-select"},[a("label",{staticClass:"comming-item news-wrapper",on:{click:function(e){return t.open("https://ofz.gitbook.io/ofz/announcement")}}},[t._v(" "+t._s(t.$t("common.charts"))+" "),a("img",{staticClass:"news-img",attrs:{src:n("13aa"),alt:""}})])]),a("li",{staticClass:"right-operate"},[t._l(t.accountList,(function(e){return a("label",{directives:[{name:"show",rawName:"v-show",value:e.account,expression:"item.account"}],key:e.id,staticClass:"chain-img"},[t.hideId!==e.id?a("el-popover",{attrs:{placement:"top-start",width:"400","popper-class":"customer-popover",trigger:"hover"}},[a("div",{staticClass:"connect-account"},[a("div",{staticClass:"header"},[a("label",{staticStyle:{"font-size":"18px"}},[t._v(t._s(t.$t("common.account")))]),t.isMobile?t._e():a("label",{staticClass:"change",staticStyle:{"font-size":"14px"},on:{click:function(n){return t.changeAccount(e)}}},[t._v(t._s(t.$t("common.change")))])]),a("div",{staticClass:"wallet-wrapper"},[t.isMobile?a("p",{staticClass:"name"},[t._v("Wallet")]):a("p",{staticClass:"name"},[t._v("MetaMask")]),a("p",{staticClass:"account",on:{click:function(n){return t.copy(e.account)}}},[t._v(t._s(t._f("formatAdress")(e.account))+" "),a("label",{staticClass:"copy-btn"},[a("img",{attrs:{src:n("d92a"),alt:""}})])])]),a("div",{staticClass:"dis-connect btn-hover",on:{click:function(n){return t.clearAccount(e)}}},[a("img",{attrs:{src:n("1471"),alt:""}}),a("label",{staticStyle:{cursor:"pointer"}},[t._v(t._s(t.$t("common.disconnect")))])])]),a("img",{attrs:{slot:"reference",src:n("de3c")("./"+e.chain+(t.currentNetOfChain===e.chain?"-light":"")+".png"),alt:""},slot:"reference"})]):t._e()],1)})),a("p",{staticClass:"connect-btn btn-hover",class:{gray:t.isConnected},on:{click:function(e){t.isConnected||t.connect()}}},[a("img",{staticClass:"connect-icon",attrs:{src:n("2739")("./"+(t.isConnected?"connect_gray":"connect")+".svg"),alt:""}}),a("label",{staticClass:"connect-text"},[t._v(t._s(t.$t("tradeAndMine.connect")))])]),t.isMobile?t._e():a("el-dropdown",{on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.langName)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{staticClass:"black-dropDown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"en-US"}},[t._v("English")])],1)],1)],2)],2),t.isCollapse&&t.isMobile?a("section",{staticClass:"mobile-nav-wrapper"},[a("ul",{staticClass:"mobile-bar-list"},[a("li",{staticClass:"item"},[a("ul",[t._l(t.navList,(function(e,i){return i<4?a("li",{key:i,staticClass:"list-item",class:[t.activeGroup===e.group?"selected":"not-select",e.disabled?"disabled":""],on:{click:function(n){return t.toActive(e)}}},[t.activeGroup!==e.group?a("img",{attrs:{src:n("2739")("./"+e.imgName+".svg"),alt:""}}):a("img",{attrs:{src:n("e61d")("./"+e.imgName+"-active.svg"),alt:""}}),t._v(" "+t._s(e.name)+" ")]):t._e()})),a("li",{key:"doc",staticClass:"list-item",class:t.activeGroup===t.navList[5].group?"selected":"not-select",on:{click:function(e){return e.preventDefault(),e.target!==e.currentTarget?null:t.toActive(t.navList[5])}}},[t.activeGroup!==t.navList[5].group?a("img",{attrs:{src:n("2739")("./"+t.navList[5].imgName+".svg"),alt:""}}):a("img",{attrs:{src:n("e61d")("./"+t.navList[5].imgName+"-active.svg"),alt:""}}),t._v(" "+t._s(t.navList[5].name)+" "),a("i",{staticClass:"arrow-icon",class:t.activeGroup===t.navList[5].group?"el-icon-caret-top":"el-icon-caret-bottom",on:{click:function(e){return e.preventDefault(),e.target!==e.currentTarget?null:t.toActive(t.navList[5])}}}),t.activeGroup===t.navList[5].group?a("div",{staticClass:"panel-down"},[a("p",{on:{click:function(e){return t.open("https://ofz.gitbook.io/ofz/faq")}}},[t._v("FAQ")])]):t._e()]),a("li",{key:"about",staticClass:"list-item",class:t.activeGroup===t.navList[6].group?"selected":"not-select",on:{click:function(e){return e.preventDefault(),e.target!==e.currentTarget?null:t.toActive(t.navList[6])}}},[t.activeGroup!==t.navList[6].group?a("img",{attrs:{src:n("2739")("./"+t.navList[6].imgName+".svg"),alt:""}}):a("img",{attrs:{src:n("e61d")("./"+t.navList[6].imgName+"-active.svg"),alt:""}}),t._v(" "+t._s(t.navList[6].name)+" "),a("i",{staticClass:"arrow-icon",class:t.activeGroup===t.navList[6].group?"el-icon-caret-top":"el-icon-caret-bottom",on:{click:function(e){return e.preventDefault(),e.target!==e.currentTarget?null:t.toActive(t.navList[6])}}}),t.activeGroup===t.navList[6].group?a("div",{staticClass:"panel-down"},[a("p",{on:{click:function(e){return t.open("https://ofz.gitbook.io/ofz/announcement")}}},[t._v(t._s(t.$t("footer.announcement")))])]):t._e()])],2)]),a("li",{staticClass:"footer"},[t._m(0),a("label",{staticClass:"link",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://twitter.com/ofz_com")}}},[a("img",{attrs:{src:n("af83"),alt:""}})]),a("label",{staticClass:"link",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://t.me/OFZ_Chat")}}},[a("img",{attrs:{src:n("0b45"),alt:""}})]),a("label",{staticClass:"link",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://discord.com/invite/p4E7sWGvmT")}}},[a("img",{attrs:{src:n("5a83"),alt:""}})]),a("label",{staticClass:"link",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://medium.com/@OFZ")}}},[a("img",{attrs:{src:n("e8a0"),alt:""}})]),t._m(1),a("label",{staticClass:"lang-icon",staticStyle:{cursor:"pointer"}},[a("el-dropdown",{on:{command:t.handleCommand}},[a("img",{attrs:{src:n("f59b"),alt:""}}),a("el-dropdown-menu",{staticClass:"black-dropDown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"en-US"}},[t._v("English")])],1)],1)],1)])])]):t._e()])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"link",staticStyle:{cursor:"pointer"}},[a("img",{attrs:{src:n("e4505"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"link",attrs:{href:"mailto: contact@ofz.com"}},[a("img",{attrs:{src:n("daef"),alt:""}})])}],r=n("1da1"),l=(n("96cf"),n("4795"),n("b0c0"),n("a9e3"),n("d81d"),n("4de4"),n("b2d6")),u=n.n(l),d=n("f0d9"),p=n.n(d),f=n("4897"),h=n.n(f),g=n("ed08"),m=n("f60d"),v=n("2f62"),C=n("c9d9"),b={props:{isMobile:{type:Boolean,default:!1}},data:function(){return{langName:"",langMap:{"zh-CN":"简体中文","en-US":"English"},address:"",chainName:C["c"],activeGroup:"home",hideId:"",isCollapse:!1}},created:function(){var t=this;this.activeMenu(this.$route),window.ethereum&&window.ethereum.isMetaMask&&(this.timer=setInterval(Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(g["g"])();case 2:t.address=e.sent,t.updateCurrentAddress(t.address);case 4:case"end":return e.stop()}}),e)}))),2e3)),this.langName=this.langMap[sessionStorage.getItem("lang")||"en-US"],Object(m["b"])(sessionStorage.getItem("lang")||"en-US"),"zh-CN"===sessionStorage.getItem("lang")?h.a.use(p.a):h.a.use(u.a)},methods:Object(o["a"])(Object(o["a"])({},Object(v["c"])(["updateCurrentAddress","updateAccount"])),{},{toActive:function(t){if(!t.disabled)return"charts"===t.group?window.open("https://ofz.gitbook.io/ofz/announcement"):void(t.group!==this.activeGroup?(t.path&&(this.isCollapse=!1,this.$emit("changeCollapse",this.isCollapse)),this.activeGroup=t.group,t.path!==this.$route.path&&t.path&&this.$router.push(t.path)):this.activeGroup="")},handleCommand:function(t){"en-US"===t?h.a.use(u.a):h.a.use(p.a),this.langName=this.langMap[t],sessionStorage.setItem("lang",t),Object(m["b"])(t)},connect:function(){this.openWalletDialog()},activeMenu:function(t){if("record-index"===t.name){var e=this.$route.query.type;this.activeGroup=this.navList[Number(e)-1].group}else this.activeGroup=t.meta.group||"swap"},clearAccount:function(t){var e=this,n=JSON.parse(JSON.stringify(this.accountList));n.map((function(e){return e.id===t.id&&(e.account=""),e})),this.updateAccount(n),this.hideId=t.id,this.$nextTick((function(){e.hideId=""}))},changeAccount:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(window.ethereum){n.next=3;break}return e.openDialog({tradeStatus:"noMetaMask",isShowBtn:!1}),n.abrupt("return");case 3:if(t){n.next=5;break}return n.abrupt("return");case 5:return n.prev=5,n.next=8,Object(g["e"])();case 8:if(a=n.sent,a){n.next=11;break}return n.abrupt("return");case 11:i=JSON.parse(JSON.stringify(e.accountList)),i.map((function(e){return e.id===t.id&&(e.account=a),e})),e.updateAccount(i),n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](5),console.log("connect:",n.t0);case 19:case"end":return n.stop()}}),n,null,[[5,16]])})))()},collapse:function(){this.isCollapse=!this.isCollapse,this.$emit("changeCollapse",this.isCollapse)},closePannel:function(){this.isCollapse=!1,this.$emit("changeCollapse",this.isCollapse)},open:function(t){window.open(t)}}),computed:Object(o["a"])(Object(o["a"])({},Object(v["d"])(["chainId","accountList"])),{},{isConnected:function(){return 3===this.accountList.filter((function(t){return t.account})).length},currentNetOfChain:function(){return"Ether"===this.chainName[this.chainId]?"ETH":this.chainName[this.chainId]},navList:function(){return[{path:"/home/index",name:this.$t("header.home"),group:"home",imgName:"nav-home"},{path:"/swap/index",name:this.$t("header.trade"),group:"swap",imgName:"nav-swap"},{path:"/vault/index",name:this.$t("common.pool"),group:"pool",imgName:"nav-pool"},{path:"",name:this.$t("common.charts"),group:"charts",imgName:"nav-charts",disabled:!1},{path:"",name:this.$t("common.charts"),group:"charts",imgName:"nav-charts",disabled:!0},{path:"",name:this.$t("common.doc"),group:"doc",imgName:"nav-doc"},{path:"",name:this.$t("common.about"),group:"about",imgName:"nav-about"}]}}),watch:{$route:function(t){this.activeMenu(t)}},beforeDestroy:function(){clearInterval(this.timer)}},_=b,w=(n("c495"),n("8bc2"),n("2877")),k=Object(w["a"])(_,s,c,!1,null,"038a4ba6",null),y=k.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("ul",{staticClass:"footer-inner"},[a("li",{staticClass:"img-list-box"},[a("div",{staticClass:"img-list"},[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("e4505"),alt:""}}),a("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("af83"),alt:""},on:{click:function(e){return t.open("https://twitter.com/ofz_com")}}}),a("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("0b45"),alt:""},on:{click:function(e){return t.open("https://t.me/OFZ_Chat")}}}),a("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("5a83"),alt:""},on:{click:function(e){return t.open("https://discord.com/invite/p4E7sWGvmT")}}}),a("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("e8a0"),alt:""},on:{click:function(e){return t.open("https://medium.com/@OFZ")}}}),t._m(0)])]),a("li",[a("div",[a("p",{staticClass:"cursor",on:{click:function(e){return t.open("https://ofz.gitbook.io/ofz/")}}},[t._v(t._s(t.$t("footer.documentation")))])]),a("div",[a("p",{staticClass:"cursor",on:{click:function(e){return t.open("https://ofz.gitbook.io/ofz/faq")}}},[t._v("FAQ")])])]),a("li",[a("div",[a("p",{staticClass:"cursor",on:{click:function(e){return t.open("https://ofz.gitbook.io/ofz/litepaper")}}},[t._v(t._s(t.$t("footer.about")))])]),a("div",[a("p",{staticClass:"cursor",on:{click:function(e){return t.open("https://ofz.gitbook.io/ofz/announcement")}}},[t._v(t._s(t.$t("footer.announcement")))])])])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"mailto:contact@ofz.com"}},[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("daef"),alt:""}})])}],I={methods:{open:function(t){window.open(t)}}},x=I,D=(n("820a"),Object(w["a"])(x,O,S,!1,null,"4063a6dd",null)),M=D.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"comDialog",attrs:{title:t.title,visible:t.dialogVisible,width:t.width,"show-close":t.showClose,"destroy-on-close":"","close-on-click-modal":t.closeOnClickModal,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"content"},[["waiting","failed","success","noMetaMask"].includes(t.tradeStatus)?t._e():[100!==t.percentage?a("div",{staticClass:"pending"},[a("i",{staticClass:"el-icon-loading loading-icon"}),a("span",[t._v(t._s(t.$t("common.pending")))])]):t._e(),100===t.percentage?a("div",{staticClass:"success"},[a("img",{staticClass:"status-img",attrs:{src:n("42a9"),alt:""}}),a("span",{staticClass:"font-family"},[t._v(t._s(t.$t("common.success")))])]):t._e(),a("div",{staticClass:"progress-box"},[a("el-progress",{attrs:{percentage:t.percentage,color:"#FFD400","show-text":!1,"stroke-width":10}}),a("label",{staticClass:"refresh-icon",on:{click:t.refreshDialog}},[a("img",{staticStyle:{width:"20px"},attrs:{src:n("1ab5"),alt:""}})])],1),t.isExpend&&t.type&&t.hash?a("div",{staticClass:"expend",on:{click:function(e){t.isExpend=!t.isExpend}}},[a("img",{attrs:{src:n("872f"),alt:""}})]):t._e(),!t.isExpend&&t.type&&t.hash?a("div",{staticClass:"expended",on:{click:function(e){t.isExpend=!t.isExpend}}},[a("img",{attrs:{src:n("872f"),alt:""}})]):t._e(),t.isExpend?a("div",{staticClass:"progress-detail"},[a("el-timeline",[t.orderInfo.fromFinal?a("el-timeline-item",{attrs:{placement:"top"}},[a("div",{staticClass:"dot",class:{active:t.orderInfo.fromCurrent===t.orderInfo.fromFinal},attrs:{slot:"dot"},slot:"dot"}),a("el-card",[a("img",{staticClass:"icon",attrs:{src:n("c400")("./"+t.orderInfo.fromChain+"-light.png"),alt:""}}),a("div",{staticClass:"info"},[a("div",{staticClass:"top"},[a("span",{staticClass:"currency"},[t._v(t._s(t.orderInfo.fromChain))]),a("span",[a("i",[t._v(t._s(t.orderInfo.fromCurrent))]),t._v("/"+t._s(t.orderInfo.fromFinal)+" Confirmed")])]),a("div",{staticClass:"bottom"},[a("span",[t._v("Hash")]),a("span",[t._v(" "+t._s(t._f("formatAdress")(t.orderInfo.fromHash,5,11))+" "),t.orderInfo.fromHash?a("i",{staticClass:"copy",on:{click:function(e){return t.copy(t.orderInfo.fromHash)}}}):t._e(),t.orderInfo.fromHashLink?a("i",{staticClass:"share",on:{click:function(e){return t.open(t.orderInfo.fromHashLink)}}}):t._e()])])])])],1):t._e(),t.orderInfo.hecoFinal?a("el-timeline-item",{attrs:{placement:"top"}},[a("div",{staticClass:"dot",class:{active:t.orderInfo.hecoCurrent===t.orderInfo.hecoFinal},attrs:{slot:"dot"},slot:"dot"}),a("el-card",[a("img",{staticClass:"icon",attrs:{src:n("daa5"),alt:""}}),a("div",{staticClass:"info"},[a("div",{staticClass:"top"},[a("span",{staticClass:"currency"},[t._v("HECO")]),a("span",[a("i",[t._v(t._s(t.orderInfo.hecoCurrent))]),t._v("/"+t._s(t.orderInfo.hecoFinal)+" Confirmed")])]),a("div",{staticClass:"bottom"},[a("span",[t._v("Hash")]),a("span",[t._v(" "+t._s(t._f("formatAdress")(t.orderInfo.hecoHash,5,11))+" "),t.orderInfo.hecoHash?a("i",{staticClass:"copy",on:{click:function(e){return t.copy(t.orderInfo.hecoHash)}}}):t._e(),t.orderInfo.hecoHashLink?a("i",{staticClass:"share",on:{click:function(e){return t.open(t.orderInfo.hecoHashLink)}}}):t._e()])])])])],1):t._e(),t.orderInfo.toFinal?a("el-timeline-item",{attrs:{placement:"top"}},[a("div",{staticClass:"dot",class:{active:t.orderInfo.toCurrent===t.orderInfo.toFinal},attrs:{slot:"dot"},slot:"dot"}),a("el-card",[a("img",{staticClass:"icon",attrs:{src:n("c400")("./"+t.orderInfo.toChain+"-light.png"),alt:""}}),a("div",{staticClass:"info"},[a("div",{staticClass:"top"},[a("span",{staticClass:"currency"},[t._v(t._s(t.orderInfo.toChain))]),a("span",[a("i",[t._v(t._s(t.orderInfo.toCurrent))]),t._v("/"+t._s(t.orderInfo.toFinal)+" Confirmed")])]),a("div",{staticClass:"bottom"},[a("span",[t._v("Hash")]),a("span",[t._v(" "+t._s(t._f("formatAdress")(t.orderInfo.toHash,5,11))+" "),t.orderInfo.toHash?a("i",{staticClass:"copy",on:{click:function(e){return t.copy(t.orderInfo.toHash)}}}):t._e(),t.orderInfo.toHashLink?a("i",{staticClass:"share",on:{click:function(e){return t.open(t.orderInfo.toHashLink)}}}):t._e()])])])])],1):t._e()],1)],1):t._e()],"waiting"===t.tradeStatus?[a("div",{staticClass:"waiting"},[a("i",{staticClass:"el-icon-loading loading-icon"}),a("p",{staticClass:"text font-family"},[t._v(t._s(t.$t("common.waitingConfirmation")))]),a("p",{staticClass:"yellow font-family"},[t._v(t._s(t.$t("common.walletConfirm")))])])]:t._e(),"failed"===t.tradeStatus?[a("div",{staticClass:"failed"},[a("img",{staticClass:"status-img",attrs:{src:n("8ccf"),alt:""}}),a("p",{staticClass:"text font-family"},[t._v(t._s(t.$t("common.transRejected")))]),a("button",{staticClass:"btn primary-button",on:{click:function(e){return t.handleClose()}}},[t._v(t._s(t.$t("common.dismiss")))])])]:t._e(),"success"===t.tradeStatus?[a("div",{staticClass:"failed"},[a("img",{staticClass:"status-img",attrs:{src:n("42a9"),alt:""}}),a("p",{staticClass:"text font-family"},[t._v(t._s(t.$t("common.transSent")))]),a("button",{staticClass:"btn primary-button",on:{click:function(e){return t.handleClose()}}},[t._v(t._s(t.$t("common.dismiss")))])])]:t._e(),"noMetaMask"===t.tradeStatus?[a("div",{staticClass:"noMetaMask"},[a("img",{staticClass:"status-img",attrs:{src:n("7cbc"),alt:""}}),a("p",{staticClass:"text font-family"},[t._v(t._s(t.$t("common.notMetamask")))]),a("p",{staticClass:"confirm yellow"},[t._v(t._s(t.$t("common.downloadLink"))),a("a",{staticClass:"yellow",attrs:{href:"https://metamask.io/download.html",target:"_blank"}},[t._v("https://metamask.io/download.html")])])]),t.isShowBtn?a("div",{staticClass:"dialog-footer",style:{"text-align":t.align},attrs:{slot:"footer"},slot:"footer"},[t.showCancel?a("button",{staticClass:"cancel-btn btn",on:{click:t.cancel}},[t._v(t._s(t.$t("common.withdrawal")))]):t._e(),t.showConfirm?a("button",{staticClass:"confirm-btn primary-button",on:{click:t.confirm}},[t._v(t._s(t.$t("common.continueWaiting")))]):t._e()]):t._e()]:t._e()],2)])},E=[],N=(n("4160"),n("0c6d")),$=null,T={props:{showDialog:{type:Boolean,default:function(){return!1}},width:{type:String,default:function(){return"400px"}},confirmText:{type:String,default:function(){return"确定"}},title:{type:String,default:function(){return""}},align:{type:String,default:function(){return"center"}},tradeStatus:{type:String,default:function(){return""}},headerBg:{type:String,default:function(){return"blue"}},showClose:{type:Boolean,default:function(){return!0}},showCancel:{type:Boolean,default:function(){return!1}},showConfirm:{type:Boolean,default:function(){return!0}},cacelText:{type:String,default:function(){return"取消"}},closeOnClickModal:{type:Boolean,default:function(){return!0}},dialogType:{type:String,default:function(){return"tips"}},isShowBtn:{type:Boolean,default:function(){return!0}},type:{type:Number,default:function(){return 0}},hash:{type:String,default:function(){return""}}},data:function(){return{percentage:0,isExpend:!1,orderInfo:{}}},computed:{dialogVisible:{get:function(){return this.showDialog},set:function(t){this.$emit("update:showDialog",t)}}},watch:{hash:{handler:function(t){var e=this;t&&($||(this.getOrderInfo(),$=setInterval((function(){e.getOrderInfo()}),8e3)))},immediate:!0},percentage:{handler:function(t){100===t&&$&&(clearInterval($),$=null)},immediate:!0}},methods:{refreshDialog:function(){this.loading=this.$loading({lock:!0,text:"",spinner:"el-icon-loading",customClass:"approving-loadind",background:"rgba(0, 0, 0, 0.7)"}),this.getOrderInfo(!0)},getPercentage:function(){var t,e=this;if(null===(t=this.orderInfo)||void 0===t||!t.orderId)return 0;var n=[{final:"fromFinal",current:"fromCurrent"},{final:"hecoFinal",current:"hecoCurrent"},{final:"toFinal",current:"toCurrent"}],a=0,i=0;n.forEach((function(t){e.orderInfo[t["final"]]&&(a+=e.orderInfo[t["final"]],i+=e.orderInfo[t["current"]])}));var o=i/a*100;return o||0},handleClose:function(){this.$emit("cancel"),this.dialogVisible=!1,$&&(clearInterval($),$=null)},confirm:function(){"tips"===this.dialogType&&(this.dialogVisible=!1),this.$emit("confirm")},openDialog:function(){this.dialogVisible=!0},getOrderInfo:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.type||e.hash){n.next=2;break}return n.abrupt("return");case 2:return a={pageSize:10,pageIndex:1,type:e.type},1===e.type||2===e.type?a.fromTxHash=e.hash:a.hecoTxHash=e.hash,n.next=6,N["a"].orderList(a);case 6:i=n.sent,t&&e.loading.close(),e.orderInfo=Object(o["a"])({},null===i||void 0===i?void 0:i.rows[0]),e.percentage=e.getPercentage(),console.log("orderList",e.orderInfo),console.log("percentage",e.percentage);case 12:case"end":return n.stop()}}),n)})))()},open:function(t){window.open(t)}}},H=T,j=(n("a76d"),Object(w["a"])(H,L,E,!1,null,"6a5004dc",null)),A=j.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseDialog",t._b({attrs:{showDialog:t.dialogVisible},on:{"update:showDialog":function(e){t.dialogVisible=e},"update:show-dialog":function(e){t.dialogVisible=e},cancel:t.cancel}},"BaseDialog",t.propsConfig,!1),[a("section",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("common.connectWallet"))+" ")]),a("ul",{staticClass:"wallet-list",attrs:{slot:"content"},slot:"content"},[a("li",{staticClass:"wallet-left"},t._l(t.chainList,(function(e){return a("p",{key:e.id,staticClass:"chain-box"},[a("label",{staticClass:"img-bg",on:{click:function(n){return t.selectChain(e)}}},[a("img",{attrs:{src:n("de3c")("./"+e.chain+(t.currentChain===e.chain?"-light":"")+".png"),alt:""}})])])})),0),a("li",{staticClass:"wallet-right"},[a("p",{staticClass:"wallet-name"},[t._v(t._s(t.currentChain)+" "+t._s(t.$t("common.wallet")))]),a("ul",[a("li",{staticClass:"connect-info",class:t.currentItem&&t.currentItem.account?"connected":"",on:{click:function(e){return t.connect(t.currentItem)}}},[a("img",{staticClass:"wallet-img",attrs:{src:n("fb17"),alt:""}}),a("div",{staticClass:"center"},[t.isMobile?a("p",[t._v(t._s(t.$t("tradeAndMine.connect"))+" Wallet")]):a("p",[t._v(t._s(t.$t("tradeAndMine.connect"))+" MetaMask")]),t.currentItem?a("p",{staticClass:"account",on:{click:function(e){return t.copy(t.currentItem.account)}}},[t._v(t._s(t._f("formatAdress")(t.currentItem.account))+" "),a("label",{staticClass:"copy-btn"},[a("img",{attrs:{src:n("d92a"),alt:""}})])]):t._e()]),a("img",{staticClass:"right-img",attrs:{src:n("38b2"),alt:""}})])])])]),a("section",{attrs:{slot:"content"},slot:"content"})])},F=[],z=(n("7db0"),n("a0b9")),W={components:{BaseDialog:z["a"]},props:{showDialog:{type:Boolean,default:function(){return!1}},chain:{type:String,default:function(){return"ETH"}},account:{type:String,default:function(){return""}},isMobile:{type:Boolean,default:function(){return!1}}},data:function(){return{propsConfig:{isShowBtn:!1,width:"360px"},currentChain:"HECO",currentItem:null,chainList:[{chain:"ETH",id:3,account:""},{chain:"BSC",id:2,account:""},{chain:"HECO",id:1,account:""}]}},mounted:function(){var t=this;this.accountList.length&&(this.chainList=JSON.parse(JSON.stringify(this.accountList))),this.currentItem=this.chainList.find((function(e){return e.chain===t.currentChain}))},methods:Object(o["a"])(Object(o["a"])({},Object(v["c"])(["updateAccount"])),{},{selectChain:function(t){this.currentChain=t.chain,this.currentItem=t},connect:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(window.ethereum){n.next=3;break}return e.openDialog({tradeStatus:"noMetaMask",isShowBtn:!1}),n.abrupt("return");case 3:if(t&&!t.account){n.next=5;break}return n.abrupt("return");case 5:return n.prev=5,n.next=8,Object(g["e"])();case 8:a=n.sent,e.chainList.map((function(e){return e.id===t.id&&(e.account=a),e})),i=JSON.parse(JSON.stringify(e.chainList)),e.updateAccount(i),e.$emit("change",e.currentItem,i),n.next=18;break;case 15:n.prev=15,n.t0=n["catch"](5),console.log("connect:",n.t0);case 18:case"end":return n.stop()}}),n,null,[[5,15]])})))()},cancel:function(){this.$emit("close",this.chainList),this.dialogVisible=!1}}),watch:{chain:{handler:function(t){var e=this;t&&(this.currentChain="Ether"===t?"ETH":t,this.currentItem=this.chainList.find((function(t){return t.chain===e.currentChain})))},deep:!0,immediate:!0},account:{handler:function(t){t&&this.currentItem&&(this.currentItem.account=t)},deep:!0,immediate:!0}},computed:Object(o["a"])(Object(o["a"])({},Object(v["d"])(["accountList","accountInfo"])),{},{dialogVisible:{get:function(){return this.showDialog},set:function(t){this.$emit("update:showDialog",t)}}})},U=W,G=(n("1f16"),Object(w["a"])(U,B,F,!1,null,"78be7aff",null)),J=G.exports,V={components:{NavBar:y,Footer:M,comDialog:A,LinkWallet:J},data:function(){return{showDialog:!1,showLinkWallet:!1,isMobile:!1,isCollapse:!1}},mounted:function(){var t=this;sessionStorage.accountInfo&&this.updateAccount(JSON.parse(sessionStorage.accountInfo)),this.resizeChange(),window.onresize=function(){t.resizeChange()}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(v["c"])(["updateAccount","updateDevice"])),Object(v["b"])("common",["closeDialog","clearOptions","closeWalletDialog","clearWalletOptions"])),{},{resizeChange:function(){this.isMobile=window.matchMedia("(max-width: 750px)").matches,this.updateDevice(this.isMobile)},closePannel:function(){this.$refs.navBar.closePannel()},changeCollapse:function(t){this.isCollapse=t}}),watch:{dialogVisible:function(t){this.showDialog=t},showDialog:function(t){t||(this.closeDialog(),this.clearOptions())},dialogVisibleWallet:function(t){this.showLinkWallet=t},showLinkWallet:function(t){t||(this.closeWalletDialog(),this.clearWalletOptions())}},computed:Object(o["a"])({},Object(v["d"])("common",["dialogVisible","options","walletOptions","dialogVisibleWallet"]))},P=V,R=(n("ef88"),Object(w["a"])(P,a,i,!1,null,"76cc2852",null));e["default"]=R.exports},c400:function(t,e,n){var a={"./BSC-light.png":"12f8","./ETH-light.png":"e1a4","./Ether-light.png":"aa67","./HECO-light.png":"daa5"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="c400"},c495:function(t,e,n){"use strict";n("dd5e")},dd5e:function(t,e,n){},de3c:function(t,e,n){var a={"./BSC-light.png":"12f8","./BSC.png":"4074","./BSC_BTCB.png":"e3e0","./BSC_ETH.png":"e4f6","./BSC_USDT.png":"12e0","./ERC20_USDT.png":"3e43","./ERC20_WBTC.png":"a83b","./ETH-light.png":"e1a4","./ETH.png":"e53b","./Ether-light.png":"aa67","./Ether.png":"64e1","./Ether_ETH.png":"bfad","./HECO-light.png":"daa5","./HECO.png":"cf17","./HECO_DAI.png":"f059","./HECO_ETH.png":"4f4c","./HECO_HBTC.png":"457e","./HECO_HUSD.png":"e74b","./HECO_USDC.png":"a0c4","./HECO_USDT.png":"1cd4","./USDT(HECO).png":"56a5","./USDT.png":"3a70","./arrow.png":"060e","./bg.png":"5607","./caretright.png":"1611","./copy-active.png":"177c","./copy.png":"d92a","./downline_popup.png":"4ad5","./empty.png":"3565","./failed.png":"8ccf","./ic_c_nor.png":"c505","./ic_c_pre.png":"da16","./ic_down.png":"7ceb","./ic_ending_black.png":"cc69","./ic_exchange.png":"8c5c","./ic_exchange_gray.png":"b330","./ic_j.png":"414e","./ic_next_gray.png":"2d91","./ic_up.png":"872f","./line.png":"c709","./line_black.png":"3301","./metaMask.png":"fb17","./news.png":"13aa","./noMetaMask.png":"7cbc","./success.png":"42a9","./sym_head.png":"d8de","./waiting.png":"2e9a"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="de3c"},e61d:function(t,e,n){var a={"./nav-about-active.svg":"91a2","./nav-charts-active.svg":"6755","./nav-doc-active.svg":"3551","./nav-home-active.svg":"da2c","./nav-pool-active.svg":"9ff1","./nav-swap-active.svg":"0f29","./nav-vote-active.svg":"3174","./status-active.svg":"3369"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="e61d"},ea54:function(t,e,n){},ef88:function(t,e,n){"use strict";n("4235")}}]);