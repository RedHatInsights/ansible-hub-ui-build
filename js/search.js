(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{641:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,"/* logo blue */\n/* well background color */\n/* alert info background color */\n/* alert info border color */\n.toolbar {\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.header {\n  border-bottom: 1px solid #d8d8d8; }\n\n.collection-container {\n  min-height: calc(100vh - 285px); }\n  @media (min-width: 1000px) {\n    .collection-container {\n      display: flex; } }\n  .collection-container .sidebar {\n    margin-left: -24px;\n    margin-top: -24px;\n    background-color: white;\n    min-width: 190px;\n    padding: 16px;\n    padding-top: 24px; }\n  .collection-container .cards {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start; }\n    .collection-container .cards .card {\n      margin-left: 24px;\n      margin-bottom: 24px; }\n  .collection-container .list-container {\n    width: 100%; }\n  .collection-container .list {\n    margin-bottom: 24px;\n    margin-left: 24px;\n    overflow: hidden; }\n    .collection-container .list .data-list {\n      margin-top: -17px;\n      margin-bottom: -17px; }\n  .collection-container .empty {\n    flex-grow: 1; }\n\n.footer {\n  border-top: 1px solid #d8d8d8;\n  margin: 0px -24px -24px -24px; }\n",""])},650:function(e,t,n){var a=n(641);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(641,function(){var t=n(641);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},661:function(e,t,n){"use strict";n.r(t);var a,r=n(2),o=(n(650),n(433)),i=n(38),c=n(260),l=n(262),s=n(116),p=n(261),u=n(254),d=n(289),m=n(216),f=n(67),g=n(14),h=n(80),y=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(){return(b=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},E=function(e){function t(t){var n=e.call(this,t)||this,a=g.a.parseParamString(t.location.search,["page","page_size"]);return a.view_type||(a.view_type=localStorage.getItem(h.a.SEARCH_VIEW_TYPE_LOCAL_KEY)),n.state={collections:[],params:a,numberOfResults:0,loading:!0},n.tags=["network","cloud","package","security"],n}return y(t,e),t.prototype.componentDidMount=function(){this.queryCollections()},t.prototype.render=function(){var e=this,t=this.state,n=t.collections,a=t.params,o=t.numberOfResults;t.loading;return r.createElement(r.Fragment,null,r.createElement(m.a,{className:"header",title:"Collections",pageControls:r.createElement(m.c,{size:"sm",params:a,updateParams:function(t){return e.updateParams(t,function(){return localStorage.setItem(h.a.SEARCH_VIEW_TYPE_LOCAL_KEY,e.state.params.view_type)})}})},r.createElement("div",{className:"toolbar"},r.createElement(m.B,{params:a,sortOptions:[{id:"name",title:"Name"},{id:"download_count",title:"Downloads"},{id:"best_match",title:"Best Match"}],updateParams:function(t){return e.updateParams(t,function(){return e.queryCollections()})},searchPlaceholder:"Search Collections"}),r.createElement(m.r,{params:a,updateParams:function(t){return e.updateParams(t,function(){return e.queryCollections()})},count:o,isTop:!0}))),r.createElement(i.Main,null,r.createElement(i.Section,{className:"collection-container"},r.createElement("div",{className:"sidebar"},r.createElement(m.A,{params:a,updateParams:function(t){return e.updateParams(t,function(){return e.queryCollections()})},tags:this.tags})),this.renderCollections(n,a)),r.createElement(i.Section,{className:"body footer"},r.createElement(m.r,{params:a,updateParams:function(t){return e.updateParams(t,function(){return e.queryCollections()})},count:o}))))},t.prototype.renderCollections=function(e,t){return this.state.loading?r.createElement(m.l,null):0===e.length?this.renderEmpty():"list"===t.view_type?this.renderList(e):this.renderCards(e)},t.prototype.renderEmpty=function(){return r.createElement(c.a,{className:"empty",variant:c.b.full},r.createElement(l.a,{icon:d.a}),r.createElement(s.a,{headingLevel:"h2",size:"lg"},"No matches"),r.createElement(p.a,null,"Please try adjusting your search query"))},t.prototype.renderCards=function(e){return r.createElement("div",{className:"cards"},e.map(function(e){return r.createElement(m.d,b({className:"card",key:e.id},e))}))},t.prototype.renderList=function(e){return r.createElement("div",{className:"list-container"},r.createElement("div",{className:"body list"},r.createElement(u.a,{className:"data-list","aria-label":"List of Collections"},e.map(function(e){return r.createElement(m.i,b({showNamespace:!0,key:e.id},e))}))))},t.prototype.queryCollections=function(){var e=this;this.setState({loading:!0},function(){f.a.list(g.a.getReduced(e.state.params,["view_type"])).then(function(t){e.setState({collections:t.data.data,numberOfResults:t.data.meta.count,loading:!1})})})},Object.defineProperty(t.prototype,"updateParams",{get:function(){return g.a.updateParamsMixin()},enumerable:!0,configurable:!0}),t}(r.Component);t.default=Object(o.a)(E)}}]);
//# sourceMappingURL=search.js.map