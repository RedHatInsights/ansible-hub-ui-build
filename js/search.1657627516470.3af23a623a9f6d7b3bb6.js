"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[464],{50140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(4942),r=n(87462),c=n(42982),s=n(15671),o=n(43144),l=n(60136),i=n(6215),u=n(61120),d=n(25221),p=n(30624),m=n(15896),h=n(65449),f=n(14938),g=n(97965),y=n(27275),v=n(43819),_=n(42807),E=n(61542),C=n(61647);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){(0,l.Z)(E,e);var t,n,a=(t=E,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function E(e){var t;(0,s.Z)(this,E),t=a.call(this,e);var n=v.q.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=_.g.CARD_DEFAULT_PAGE_SIZE),n.view_type||(n.view_type=localStorage.getItem(_.g.SEARCH_VIEW_TYPE_LOCAL_KEY)),t.state={collections:[],params:n,numberOfResults:0,loading:!0,synclist:void 0,alerts:[],updateCollection:null,showImportModal:!1,redirect:null},t}return(0,o.Z)(E,[{key:"componentDidMount",value:function(){this.load()}},{key:"load",value:function(){this.queryCollections(),"insights"===_.g.INSIGHTS_DEPLOYMENT_MODE&&this.getSynclist()}},{key:"closeAlert",get:function(){return(0,g.NQ)("alerts")}},{key:"render",value:function(){var e=this;if(this.state.redirect)return p.createElement(h.Redirect,{push:!0,to:this.state.redirect});var t=this.state,n=t.loading,a=t.collections,r=t.params,c=t.numberOfResults,s=t.showImportModal,o=t.updateCollection,l=0===a.length&&!(0,m.vS)(r,["keywords","tags","sign_state"]),i=function(t){return e.updateParams(t,(function(){return e.queryCollections()}))};return p.createElement("div",{className:"search-page"},p.createElement(g.UW,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),s&&p.createElement(g.ZO,{isOpen:s,onUploadSuccess:function(){return e.setState({redirect:(0,C.dI)(C.nB.myImports,{},{namespace:o.namespace.name})})},setOpen:function(t,n){return e.toggleImportModal(t,n)},collection:o,namespace:o.namespace.name}),p.createElement(g.UP,{className:"header",title:d.ag._("Collections"),contextSelector:p.createElement(g.e4,{selectedRepo:this.context.selectedRepo,path:C.nB.searchByRepo})},!l&&p.createElement("div",{className:"hub-toolbar-wrapper"},p.createElement("div",{className:"toolbar"},p.createElement(g.Ls,{ignoredParams:["page","page_size","sort","view_type"],params:r,updateParams:i}),p.createElement("div",{className:"hub-pagination-container"},p.createElement("div",{className:"card-list-switcher"},p.createElement(g.nH,{size:"sm",params:r,updateParams:function(t){return e.updateParams(t,(function(){return localStorage.setItem(_.g.SEARCH_VIEW_TYPE_LOCAL_KEY,e.state.params.view_type)}))}})),p.createElement(g.tl,{params:r,updateParams:i,count:c,perPageOptions:_.g.CARD_DEFAULT_PAGINATION_OPTIONS,isTop:!0}))))),n?p.createElement(g.AW,null):l?p.createElement(g.vv,{title:d.ag._("No collections yet"),description:d.ag._("Collections will appear once uploaded")}):p.createElement(p.Fragment,null,p.createElement("section",{className:"collection-container"},this.renderCollections(a,r,i)),p.createElement("section",{className:"footer"},p.createElement(g.tl,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},perPageOptions:_.g.CARD_DEFAULT_PAGINATION_OPTIONS,count:c}))))}},{key:"toggleImportModal",value:function(e,t){t&&this.setState({alerts:[].concat((0,c.Z)(this.state.alerts),[{title:t,variant:"warning"}])}),this.setState({showImportModal:e})}},{key:"renderCollections",value:function(e,t,n){return 0===e.length?p.createElement(g.ei,{clearAllFilters:function(){v.q.clearAllFilters({params:t,ignoredParams:["page","page_size","sort","view_type"],updateParams:n})}}):"list"===t.view_type?this.renderList(e):this.renderCards(e)}},{key:"renderCards",value:function(e){var t=this;return p.createElement("div",{className:"hub-cards"},e.map((function(e){return p.createElement(g.zt,(0,r.Z)({className:"card",key:e.id},e,{footer:t.renderSyncToogle(e.name,e.namespace.name),repo:t.context.selectedRepo,menu:t.renderMenu(!1,e)}))})))}},{key:"handleControlClick",value:function(e){var t=this;y.gu.setDeprecation(e,!e.deprecated,this.context.selectedRepo).then((function(n){var a=(0,m.LL)(n.data.task);return(0,m.BA)(a).then((function(){var n=e.deprecated?d.ag._('The collection "{0}" has been successfully undeprecated.',{0:e.name}):d.ag._('The collection "{0}" has been successfully deprecated.',{0:e.name});t.setState({alerts:[].concat((0,c.Z)(t.state.alerts),[{title:n,variant:"success"}])}),t.load()}))})).catch((function(n){var a=n.response,r=a.status,s=a.statusText;t.setState({alerts:[].concat((0,c.Z)(t.state.alerts),[{variant:"danger",title:e.deprecated?d.ag._('Collection "{0}" could not be undeprecated.',{0:e.name}):d.ag._('Collection "{0}" could not be deprecated.',{0:e.name}),description:(0,m.N3)(r,s)}])})}))}},{key:"renderMenu",value:function(e,t){var n=this,a=[];return a.push(p.createElement(f.DropdownItem,{onClick:function(){return n.handleControlClick(t)},key:"deprecate"},t.deprecated?d.ag._("Undeprecate"):d.ag._("Deprecate"))),e||a.push(p.createElement(f.DropdownItem,{onClick:function(){return n.checkUploadPrivilleges(t)},key:"upload new version"},d.ag._("Upload new version"))),p.createElement(p.Fragment,null,e&&p.createElement(f.Button,{onClick:function(){return n.checkUploadPrivilleges(t)},variant:"secondary"},d.ag._("Upload new version")),p.createElement(g.hu,{items:a,ariaLabel:"collection-kebab"}))}},{key:"renderSyncToogle",value:function(e,t){var n=this;return this.state.synclist?p.createElement(f.Switch,{id:t+"."+e,className:"sync-toggle",label:d.ag._("Sync"),isChecked:this.isCollectionSynced(e,t),onChange:function(){return n.toggleCollectionSync(e,t)}}):null}},{key:"checkUploadPrivilleges",value:function(e){var t=this,n=function(){t.setState({alerts:[].concat((0,c.Z)(t.state.alerts),[{title:d.ag._("You don't have rights to do this operation."),variant:"warning"}])})};y.V$.get(e.namespace.name,{include_related:"my_permissions"}).then((function(a){a.data.related_fields.my_permissions.includes("galaxy.upload_to_namespace")?t.setState({updateCollection:e,showImportModal:!0}):n()})).catch((function(){n()}))}},{key:"toggleCollectionSync",value:function(e,t){var n=this,a=k({},this.state.synclist),r=a.collections.findIndex((function(n){return n.name===e&&n.namespace===t}));r<0?a.collections.push({name:e,namespace:t}):a.collections.splice(r,1),y.vy.update(a.id,a).then((function(e){n.setState({synclist:e.data}),y.vy.curate(a.id).then((function(){return null}))}))}},{key:"isCollectionSynced",value:function(e,t){var n=this.state.synclist,a=n.collections.find((function(n){return n.name===e&&n.namespace===t}));return"include"===n.policy?!(void 0===a):void 0===a}},{key:"renderList",value:function(e){var t=this;return p.createElement("div",{className:"list-container"},p.createElement("div",{className:"hub-list"},p.createElement(f.DataList,{className:"data-list","aria-label":d.ag._("List of Collections")},e.map((function(e){return p.createElement(g.Op,(0,r.Z)({showNamespace:!0,key:e.id},e,{controls:p.createElement(p.Fragment,null,t.renderSyncToogle(e.name,e.namespace.name),t.renderMenu(!0,e)),repo:t.context.selectedRepo}))})))))}},{key:"getSynclist",value:function(){var e=this;y.vy.list().then((function(t){1===t.data.meta.count?e.setState({synclist:t.data.data[0]}):console.error("my-synclist returned ".concat(t.data.meta.count," synclists"))}))}},{key:"queryCollections",value:function(){var e=this;this.setState({loading:!0},(function(){y.gu.list(k(k({},v.q.getReduced(e.state.params,["view_type"])),{},{deprecated:!1}),e.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,numberOfResults:t.data.meta.count,loading:!1})}))}))}},{key:"updateParams",get:function(){return v.q.updateParamsMixin()}}]),E}(p.Component);const S=(0,h.withRouter)(O);O.contextType=E.I}}]);
//# sourceMappingURL=search.1657627516470.3af23a623a9f6d7b3bb6.js.map