"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[464],{50140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(4942),r=n(87462),c=n(15671),s=n(43144),l=n(60136),o=n(6215),i=n(61120),u=n(81796),p=n(67294),m=n(5977),d=n(13946),f=n(31765),y=n(72233),g=n(92209),v=n(43819),h=n(42807),E=n(61542),_=n(48643),O=n(61647);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){(0,l.Z)(m,e);var t,n,a=(t=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function m(e){var t;(0,c.Z)(this,m),t=a.call(this,e);var n=v.q.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=h.g.CARD_DEFAULT_PAGE_SIZE),n.view_type||(n.view_type=localStorage.getItem(h.g.SEARCH_VIEW_TYPE_LOCAL_KEY)),t.state={collections:[],params:n,numberOfResults:0,loading:!0,synclist:void 0},t}return(0,s.Z)(m,[{key:"componentDidMount",value:function(){this.queryCollections(),"insights"===h.g.INSIGHTS_DEPLOYMENT_MODE&&this.getSynclist()}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.collections,r=t.params,c=t.numberOfResults,s=0===a.length&&!(0,_.vS)(r,["keywords","tags"]),l=function(t){return e.updateParams(t,(function(){return e.queryCollections()}))};return p.createElement("div",{className:"search-page"},p.createElement(y.UP,{className:"header",title:u.ag._("Collections"),contextSelector:p.createElement(y.e4,{selectedRepo:this.context.selectedRepo,path:O.nB.searchByRepo})},!s&&p.createElement("div",{className:"toolbar-wrapper"},p.createElement("div",{className:"toolbar"},p.createElement(y.Ls,{ignoredParams:["page","page_size","sort","view_type"],params:r,updateParams:l}),p.createElement("div",{className:"pagination-container"},p.createElement("div",{className:"card-list-switcher"},p.createElement(y.nH,{size:"sm",params:r,updateParams:function(t){return e.updateParams(t,(function(){return localStorage.setItem(h.g.SEARCH_VIEW_TYPE_LOCAL_KEY,e.state.params.view_type)}))}})),p.createElement(y.tl,{params:r,updateParams:l,count:c,perPageOptions:h.g.CARD_DEFAULT_PAGINATION_OPTIONS,isTop:!0}))))),n?p.createElement(y.AW,null):s?p.createElement(y.vv,{title:u.ag._("No collections yet"),description:u.ag._("Collections will appear once uploaded")}):p.createElement(p.Fragment,null,p.createElement("section",{className:"collection-container"},this.renderCollections(a,r,l)),p.createElement("section",{className:"footer"},p.createElement(y.tl,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},perPageOptions:h.g.CARD_DEFAULT_PAGINATION_OPTIONS,count:c}))))}},{key:"renderCollections",value:function(e,t,n){return 0===e.length?p.createElement(y.ei,{clearAllFilters:function(){v.q.clearAllFilters({params:t,ignoredParams:["page","page_size","sort","view_type"],updateParams:n})}}):"list"===t.view_type?this.renderList(e):this.renderCards(e)}},{key:"renderCards",value:function(e){var t=this;return p.createElement("div",{className:"cards"},e.map((function(e){return p.createElement(y.zt,(0,r.Z)({className:"card",key:e.id},e,{footer:t.renderSyncToggle(e.name,e.namespace.name),repo:t.context.selectedRepo}))})))}},{key:"renderSyncToggle",value:function(e,t){var n=this;return this.state.synclist?p.createElement(d.r,{id:t+"."+e,className:"sync-toggle",label:u.ag._("Sync"),isChecked:this.isCollectionSynced(e,t),onChange:function(){return n.toggleCollectionSync(e,t)}}):null}},{key:"toggleCollectionSync",value:function(e,t){var n=this,a=S({},this.state.synclist),r=a.collections.findIndex((function(n){return n.name===e&&n.namespace===t}));r<0?a.collections.push({name:e,namespace:t}):a.collections.splice(r,1),g.vy.update(a.id,a).then((function(e){n.setState({synclist:e.data}),g.vy.curate(a.id).then((function(){return null}))}))}},{key:"isCollectionSynced",value:function(e,t){var n=this.state.synclist,a=n.collections.find((function(n){return n.name===e&&n.namespace===t}));return"include"===n.policy?!(void 0===a):void 0===a}},{key:"renderList",value:function(e){var t=this;return p.createElement("div",{className:"list-container"},p.createElement("div",{className:"list"},p.createElement(f.FR,{className:"data-list","aria-label":u.ag._("List of Collections")},e.map((function(e){return p.createElement(y.Op,(0,r.Z)({showNamespace:!0,key:e.id},e,{controls:t.renderSyncToggle(e.name,e.namespace.name),repo:t.context.selectedRepo}))})))))}},{key:"getSynclist",value:function(){var e=this;g.vy.list().then((function(t){1===t.data.meta.count?e.setState({synclist:t.data.data[0]}):console.error("my-synclist returned ".concat(t.data.meta.count," synclists"))}))}},{key:"queryCollections",value:function(){var e=this;this.setState({loading:!0},(function(){g.gu.list(S(S({},v.q.getReduced(e.state.params,["view_type"])),{},{deprecated:!1}),e.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,numberOfResults:t.data.meta.count,loading:!1})}))}))}},{key:"updateParams",get:function(){return v.q.updateParamsMixin()}}]),m}(p.Component);const C=(0,m.EN)(b);b.contextType=E.I}}]);
//# sourceMappingURL=../sourcemaps/search.0990657386ad17c0d2cf.js.map