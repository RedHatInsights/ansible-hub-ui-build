"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[282],{9473:(e,t,a)=>{a.d(t,{Y:()=>l});var n=a(4942),o=a(47922),r=a(61647);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e){var t=e.forceReload,a=e.matchParams,n=e.navigate,c=e.selectedRepo,l=e.setCollection,s=e.stateParams;o.gu.getCached(a.namespace,a.collection,c,i(i({},s),{},{include_related:"my_permissions"}),t).then((function(e){return o.gu.list({name:a.collection},c).then((function(t){e.deprecated=t.data.data[0].deprecated,l(e)}))})).catch((function(){n((0,r.dI)(r.nB.notFound))}))}},22282:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(15671),o=a(43144),r=a(79340),c=a(82963),i=a(61120),l=a(27693),s=a(92950),u=a(40693),p=a(47922),m=a(48706),d=a(9473),f=a(43819),h=a(61647),v=a(61542);var g=function(e){(0,r.Z)(v,e);var t,a,u=(t=v,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var o=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function v(e){var t;(0,n.Z)(this,v),t=u.call(this,e);var a=f.q.parseParamString(e.location.search);return t.state={collection:void 0,params:a,loadingImports:!0,selectedImportDetail:void 0,selectedImport:void 0,apiError:void 0},t}return(0,o.Z)(v,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.collection,n=t.params,o=t.loadingImports,r=t.selectedImportDetail,c=t.selectedImport,i=t.apiError;if(!a)return s.createElement(m.gO,null);var u=[h.Th,{url:(0,h.dI)(h.nB.namespaceByRepo,{namespace:a.namespace.name,repo:this.context.selectedRepo}),name:a.namespace.name},{url:(0,h.dI)(h.nB.collectionByRepo,{namespace:a.namespace.name,collection:a.name,repo:this.context.selectedRepo}),name:a.name},{name:l.ag._("Import log")}];return s.createElement(s.Fragment,null,s.createElement(m.X8,{reload:function(){return e.loadData(!0)},collection:a,params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.loadData(!0)}))},breadcrumbs:u,activeTab:"import-log",repo:this.context.selectedRepo}),s.createElement(m.or,null,s.createElement("section",{className:"body"},s.createElement(m.Fb,{empty:!1,loading:o,task:r,followMessages:!1,setFollowMessages:function(){return null},selectedImport:c,apiError:i,hideCollectionName:!0}))))}},{key:"loadData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=l.ag._("Could not load import log");this.setState({loadingImports:!0},(function(){e.loadCollection(t,(function(){p.q3.list({namespace:e.state.collection.namespace.name,name:e.state.collection.name,version:e.state.collection.latest_version.version,sort:"-created"}).then((function(t){var n=t.data.data[0];p.q3.get(n.id).then((function(t){e.setState({apiError:void 0,loadingImports:!1,selectedImport:n,selectedImportDetail:t.data})})).catch((function(){e.setState({apiError:a,loadingImports:!1})}))})).catch((function(){e.setState({apiError:a,loadingImports:!1})}))}))}))}},{key:"loadCollection",value:function(e,t){var a=this;(0,d.Y)({forceReload:e,matchParams:this.props.routeParams,navigate:this.props.navigate,selectedRepo:this.context.selectedRepo,setCollection:function(e){return a.setState({collection:e},t)},stateParams:this.state.params})}},{key:"updateParams",get:function(){return f.q.updateParamsMixin()}}]),v}(s.Component);const y=(0,u.EN)(g);g.contextType=v.I}}]);
//# sourceMappingURL=../sourcemaps/282.8c9d76a4d322c5db91c6da5597c37d47.js.map