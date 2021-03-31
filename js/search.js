(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{923:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".search-page{height:100%;display:flex;flex-direction:column}.search-page .toolbar-wrapper .toolbar{display:flex;justify-content:space-between;align-items:center}.search-page .toolbar-wrapper .toolbar .pagination-container{display:flex;align-items:center}.search-page .toolbar-wrapper .toolbar .pagination-container .card-list-switcher{margin-right:24px}.search-page .header{border-bottom:1px solid #d8d8d8}.search-page .collection-container{padding-top:24px;flex-grow:1}.search-page .collection-container .cards{display:flex;flex-wrap:wrap;align-content:flex-start}.search-page .collection-container .cards .card{margin-left:24px;margin-bottom:24px}.search-page .collection-container .list-container{width:100%}.search-page .collection-container .list{margin-bottom:24px;margin-left:24px;margin-right:24px;padding-top:16px;padding-bottom:16px;overflow:hidden}.search-page .collection-container .list .data-list{margin-top:-17px;margin-bottom:-17px}.search-page .collection-container .empty{flex-grow:1}.search-page .footer{border-top:1px solid #d8d8d8;flex-shrink:0}",""])},935:function(e,t,n){var a=n(923);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(923,(function(){var t=n(923);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},948:function(e,t,n){"use strict";n.r(t);var a,r=n(1),o=(n(935),n(622)),i=n(72),c=n(625),s=n(627),l=n(124),p=n(99),u=n(436),d=n(155),m=n(379),f=n(36),g=n(27),h=n(32),y=n(125),E=n(28),_=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=function(){return(w=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v=function(e){function t(t){var n=e.call(this,t)||this,a=g.a.parseParamString(t.location.search,["page","page_size"]);return a.page_size||(a.page_size=h.a.CARD_DEFAULT_PAGE_SIZE),a.view_type||(a.view_type=localStorage.getItem(h.a.SEARCH_VIEW_TYPE_LOCAL_KEY)),n.state={collections:[],params:a,numberOfResults:0,loading:!0,synclist:void 0},n}return _(t,e),t.prototype.componentDidMount=function(){this.queryCollections(),"insights"===h.a.INSIGHTS_DEPLOYMENT_MODE&&this.getSynclist()},t.prototype.render=function(){var e=this,t=this.state,n=t.collections,a=t.params,o=t.numberOfResults,u=0===n.length&&!Object(E.d)(a,["keywords","tags"]);return r.createElement("div",{className:"search-page"},r.createElement(m.e,{className:"header",title:"Collections"},!u&&r.createElement("div",{className:"toolbar-wrapper"},r.createElement("div",{className:"toolbar"},r.createElement(c.a,null,r.createElement(s.a,null,r.createElement(l.a,null,r.createElement(p.a,null,r.createElement(m.n,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:a,filterConfig:[{id:"keywords",title:"Keywords"},{id:"tags",title:"Tag",inputType:"multiple",options:["cloud","linux","networking","storage","security","windows","infrastructure","monitoring","tools","database","application"].map((function(e){return{id:e,title:e}}))}]}),r.createElement(p.a,null,r.createElement(m.d,{style:{marginTop:"16px"},updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:a,ignoredParams:["page_size","page","sort","view_type"]})))))),r.createElement("div",{className:"pagination-container"},r.createElement("div",{className:"card-list-switcher"},r.createElement(m.g,{size:"sm",params:a,updateParams:function(t){return e.updateParams(t,(function(){return localStorage.setItem(h.a.SEARCH_VIEW_TYPE_LOCAL_KEY,e.state.params.view_type)}))}})),r.createElement(m.G,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:o,perPageOptions:h.a.CARD_DEFAULT_PAGINATION_OPTIONS,isTop:!0}))))),u?r.createElement(m.r,{title:"No collections yet",description:"Collections will appear once uploaded"}):r.createElement(r.Fragment,null,r.createElement(i.Section,{className:"collection-container"},this.renderCollections(n,a)),r.createElement(i.Section,{className:"footer"},r.createElement(m.G,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},perPageOptions:h.a.CARD_DEFAULT_PAGINATION_OPTIONS,count:o}))))},t.prototype.renderCollections=function(e,t){return this.state.loading?r.createElement(m.w,null):0===e.length?r.createElement(m.q,null):"list"===t.view_type?this.renderList(e):this.renderCards(e)},t.prototype.renderCards=function(e){var t=this;return r.createElement("div",{className:"cards"},e.map((function(e){return r.createElement(m.h,w({className:"card",key:e.id},e,{footer:t.renderSyncToggle(e.name,e.namespace.name),repo:t.context.selectedRepo}))})))},t.prototype.renderSyncToggle=function(e,t){var n=this;return this.state.synclist?r.createElement(u.a,{id:t+"."+e,className:"sync-toggle",label:"Sync",isChecked:this.isCollectionSynced(e,t),onChange:function(){return n.toggleCollectionSync(e,t)}}):null},t.prototype.toggleCollectionSync=function(e,t){var n=this,a=w({},this.state.synclist),r=a.collections.findIndex((function(n){return n.name===e&&n.namespace===t}));r<0?a.collections.push({name:e,namespace:t}):a.collections.splice(r,1),f.i.update(a.id,a).then((function(e){n.setState({synclist:e.data}),f.i.curate(a.id).then((function(){return null}))}))},t.prototype.isCollectionSynced=function(e,t){var n=this.state.synclist,a=n.collections.find((function(n){return n.name===e&&n.namespace===t}));return"include"===n.policy?!(void 0===a):void 0===a},t.prototype.renderList=function(e){var t=this;return r.createElement("div",{className:"list-container"},r.createElement("div",{className:"list"},r.createElement(d.a,{className:"data-list","aria-label":"List of Collections"},e.map((function(e){return r.createElement(m.m,w({showNamespace:!0,key:e.id},e,{controls:t.renderSyncToggle(e.name,e.namespace.name),repo:t.context.selectedRepo}))})))))},t.prototype.getSynclist=function(){var e=this;f.i.list().then((function(t){1===t.data.meta.count?e.setState({synclist:t.data.data[0]}):console.error("my-synclist returned "+t.data.meta.count+" synclists")}))},t.prototype.queryCollections=function(){var e=this;this.setState({loading:!0},(function(){f.b.list(w(w({},g.a.getReduced(e.state.params,["view_type"])),{deprecated:!1}),e.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,numberOfResults:t.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return g.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t}(r.Component);t.default=Object(o.a)(v),v.contextType=y.a;try{search.displayName="search",search.__docgenInfo={description:"",displayName:"search",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<Search>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/search/search.tsx#search"]={docgenInfo:search.__docgenInfo,name:"search",path:"src/containers/search/search.tsx#search"})}catch(e){}}}]);
//# sourceMappingURL=search.js.map