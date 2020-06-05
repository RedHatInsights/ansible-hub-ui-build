(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{794:function(e,t,a){(e.exports=a(7)(!1)).push([e.i,".toolbar-wrapper{padding-bottom:24px}.toolbar-wrapper .applied-filters{margin-top:12px}.toolbar-wrapper .toolbar{display:flex;justify-content:space-between;align-items:center}.toolbar-wrapper .toolbar .pagination-container{display:flex;align-items:center}.toolbar-wrapper .toolbar .pagination-container .card-list-switcher{margin-right:24px}.header{border-bottom:1px solid #d8d8d8}.collection-container{min-height:calc(100vh - 285px)}@media (min-width: 1000px){.collection-container{display:flex}}.collection-container .cards{display:flex;flex-wrap:wrap;align-content:flex-start}.collection-container .cards .card{margin-left:24px;margin-bottom:24px}.collection-container .list-container{width:100%}.collection-container .list{margin-bottom:24px;margin-left:24px;padding-top:16px;padding-bottom:16px;overflow:hidden}.collection-container .list .data-list{margin-top:-17px;margin-bottom:-17px}.collection-container .empty{flex-grow:1}.footer{border-top:1px solid #d8d8d8;margin:0px -24px -24px -24px}\n",""])},807:function(e,t,a){var n=a(794);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(8)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(794,(function(){var t=a(794);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},821:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=(a(807),a(406)),i=a(38),c=a(751),l=a(752),s=a(753),p=a(730),u=a(731),m=a(725),d=a(733),f=a(223),h=a(425),g=a(732),y=a(224),E=a(39),_=a(15),w=a(33),b=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),v=function(){return(v=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},C=function(e){function t(t){var a=e.call(this,t)||this,n=_.a.parseParamString(t.location.search,["page","page_size"]);return n.page_size||(n.page_size=w.a.CARD_DEFAULT_PAGE_SIZE),n.view_type||(n.view_type=localStorage.getItem(w.a.SEARCH_VIEW_TYPE_LOCAL_KEY)),a.state={collections:[],params:n,numberOfResults:0,loading:!0},a}return b(t,e),t.prototype.componentDidMount=function(){this.queryCollections()},t.prototype.render=function(){var e=this,t=this.state,a=t.collections,n=t.params,o=t.numberOfResults;t.loading;return r.createElement(r.Fragment,null,r.createElement(y.d,{className:"header",title:"Collections"},r.createElement("div",{className:"toolbar-wrapper"},r.createElement("div",{className:"toolbar"},r.createElement(c.a,null,r.createElement(l.a,null,r.createElement(s.a,null,r.createElement(y.m,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:n,filterConfig:[{id:"collection",title:"Collection"},{id:"tags",title:"Tag",inputType:"multiple",options:["cloud","linux","network","storage","security","windows","infrastructure","monitoring","tools","database","application"].map((function(e){return{id:e,title:e}}))}]}))),r.createElement(l.a,null,r.createElement(s.a,null,r.createElement(y.B,{options:[{id:"name",title:"Collection name",type:"alpha"}],params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))}})))),r.createElement("div",{className:"pagination-container"},r.createElement("div",{className:"card-list-switcher"},r.createElement(y.f,{size:"sm",params:n,updateParams:function(t){return e.updateParams(t,(function(){return localStorage.setItem(w.a.SEARCH_VIEW_TYPE_LOCAL_KEY,e.state.params.view_type)}))}})),r.createElement(y.y,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:o,perPageOptions:w.a.CARD_DEFAULT_PAGINATION_OPTIONS,isTop:!0}))),r.createElement("div",{className:"applied-filters"},r.createElement(y.c,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:n,ignoredParams:["page_size","page","sort","view_type"]})))),r.createElement(y.t,null,r.createElement(i.Section,{className:"collection-container"},this.renderCollections(a,n)),r.createElement(i.Section,{className:"body footer"},r.createElement(y.y,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},perPageOptions:w.a.CARD_DEFAULT_PAGINATION_OPTIONS,count:o}))))},t.prototype.renderCollections=function(e,t){return this.state.loading?r.createElement(y.q,null):0===e.length?this.renderEmpty():"list"===t.view_type?this.renderList(e):this.renderCards(e)},t.prototype.renderEmpty=function(){var e=this;return r.createElement(p.a,{className:"empty",variant:p.b.full},r.createElement(u.a,{icon:g.a}),r.createElement(m.a,{headingLevel:"h2",size:"lg"},"No results found"),r.createElement(d.a,null,"No results match the search criteria. Remove all filters to show results."),r.createElement(f.a,{variant:"link",onClick:function(){return e.updateParams({},(function(){return e.queryCollections()}))}},"Clear search"))},t.prototype.renderCards=function(e){return r.createElement("div",{className:"cards"},e.map((function(e){return r.createElement(y.g,v({className:"card",key:e.id},e))})))},t.prototype.renderList=function(e){return r.createElement("div",{className:"list-container"},r.createElement("div",{className:"list"},r.createElement(h.a,{className:"data-list","aria-label":"List of Collections"},e.map((function(e){return r.createElement(y.l,v({showNamespace:!0,key:e.id},e))})))))},t.prototype.queryCollections=function(){var e=this;this.setState({loading:!0},(function(){E.c.list(v(v({},_.a.getReduced(e.state.params,["view_type"])),{deprecated:!1,certification:E.b.certified})).then((function(t){e.setState({collections:t.data.data,numberOfResults:t.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return _.a.updateParamsMixin()},enumerable:!0,configurable:!0}),t}(r.Component);t.default=Object(o.a)(C);try{search.displayName="search",search.__docgenInfo={description:"",displayName:"search",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<Search>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/search/search.tsx#search"]={docgenInfo:search.__docgenInfo,name:"search",path:"src/containers/search/search.tsx#search"})}catch(e){}}}]);
//# sourceMappingURL=search.js.map