"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[776],{9473:(e,t,n)=>{n.d(t,{Y:()=>c});var a=n(34903),o=n(61647);function c(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return null};a.gu.getCached(this.props.match.params.namespace,this.props.match.params.collection,e,this.state.params,n).then((function(e){t.setState({collection:e},c)})).catch((function(e){t.props.history.push(o.nB.notFound)}))}},5576:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(15671),o=n(43144),c=n(60136),r=n(6215),s=n(61120),l=n(25221),i=n(67294),u=n(5977),p=n(47012),d=n(9473),m=n(43819),f=n(61647),h=n(61542);var v=function(e){(0,c.Z)(h,e);var t,n,u=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,r.Z)(this,e)});function h(e){var t;(0,a.Z)(this,h),t=u.call(this,e);var n=m.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t}return(0,o.Z)(h,[{key:"componentDidMount",value:function(){this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,a=t.params;if(!n)return i.createElement(p.gO,null);var o=[f.Th,{url:(0,f.dI)(f.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,f.dI)(f.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:l.ag._("Content")}];return i.createElement(i.Fragment,null,i.createElement(p.X8,{collection:n,params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:o,activeTab:"contents",repo:this.context.selectedRepo}),i.createElement(p.or,null,i.createElement("section",{className:"body"},i.createElement(p.Ui,{contents:n.latest_version.metadata.contents,collection:n.name,namespace:n.namespace.name,params:a,updateParams:function(t){return e.updateParams(t)}}))))}},{key:"loadCollection",get:function(){return d.Y}},{key:"updateParams",get:function(){return m.q.updateParamsMixin()}}]),h}(i.Component);const y=(0,u.EN)(v);v.contextType=h.I},27910:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(42982),o=n(15671),c=n(43144),r=n(97326),s=n(60136),l=n(6215),i=n(61120),u=n(4942),p=n(25221),d=n(67294),m=n(5977),f=n(34903),h=n(47012),v=n(18944),y=n(61647),g=n(61542);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){(0,s.Z)(g,e);var t,n,m=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function g(e){var t;(0,o.Z)(this,g),t=m.call(this,e),(0,u.Z)((0,r.Z)(t),"ignoredParams",["page_size","page","sort","name__icontains"]),(0,u.Z)((0,r.Z)(t),"cancelToken",void 0);var n=v.q6.parseParamString(e.location.search,["page","page_size"]);return n.sort=n.sort?"collection":"-collection",t.state={collection:void 0,params:n,usedByDependencies:[],usedByDependenciesCount:0,usedByDependenciesLoading:!0,alerts:[]},t}return(0,c.Z)(g,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,a=t.params,o=t.usedByDependencies,c=t.usedByDependenciesCount,r=t.usedByDependenciesLoading,s=t.alerts;if(!n)return d.createElement(h.gO,null);var l=[y.Th,{url:(0,y.dI)(y.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,y.dI)(y.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:p.ag._("Dependencies")}],i=v.q6.getReduced(a,this.ignoredParams),u=v.q6.getReduced(a,["version"]),m=!Object.keys(n.latest_version.metadata.dependencies).length;return d.createElement(d.Fragment,null,d.createElement(h.UW,{alerts:s,closeAlert:function(t){return e.closeAlert(t)}}),d.createElement(h.X8,{collection:n,params:i,updateParams:function(t){e.updateParams(e.combineParams(e.state.params,t),(function(){return e.loadData(!0)}))},breadcrumbs:l,activeTab:"dependencies",repo:this.context.selectedRepo}),d.createElement(h.or,null,d.createElement("section",{className:"body"},d.createElement("div",{className:"pf-c-content collection-dependencies"},d.createElement("h1",null,p.ag._("Dependencies")),!m||c||(0,v.vS)(a,["name__icontains"])?d.createElement(d.Fragment,null,d.createElement("p",null,p.ag._("This collections requires the following collections for use")),m?d.createElement(h.vv,{title:p.ag._("No dependencies"),description:p.ag._("Collection does not have any dependencies.")}):d.createElement(h.nW,{collection:this.state.collection,repo:this.context.selectedRepo}),d.createElement("p",null,p.ag._("This collection is being used by")),d.createElement(h.KQ,{repo:this.context.selectedRepo,usedByDependencies:o,itemCount:c,params:u,usedByDependenciesLoading:r,updateParams:function(t){return e.updateParams(e.combineParams(e.state.params,t),(function(){return e.loadUsedByDependencies()}))}})):d.createElement(h.vv,{title:p.ag._("No dependencies"),description:p.ag._("Collection does not have any dependencies.")})))))}},{key:"loadData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loadCollection(t,(function(){return e.loadUsedByDependencies()}))}},{key:"loadUsedByDependencies",value:function(){var e=this;this.setState({usedByDependenciesLoading:!0},(function(){e.cancelToken&&e.cancelToken.cancel("request-canceled"),e.cancelToken=f.gu.getCancelToken(),f.gu.getUsedDependenciesByCollection(e.state.collection.namespace.name,e.state.collection.name,v.q6.getReduced(e.state.params,["version"]),e.cancelToken).then((function(t){var n=t.data;e.setState({usedByDependencies:n.data,usedByDependenciesCount:n.meta.count,usedByDependenciesLoading:!1})})).catch((function(t){"request-canceled"!==(null==t?void 0:t.message)&&e.setState({usedByDependenciesLoading:!1,alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:p.ag._("Error loading dependent collections."),description:null==t?void 0:t.message}])})})).finally((function(){e.cancelToken=void 0}))}))}},{key:"loadCollection",value:function(e,t){var n=this;f.gu.getCached(this.props.match.params.namespace,this.props.match.params.collection,this.context.selectedRepo,this.state.params.version?{version:this.state.params.version}:{},e).then((function(e){return n.setState({collection:e},t)})).catch((function(){n.props.history.push(y.nB.notFound)}))}},{key:"updateParams",get:function(){return v.q6.updateParamsMixin()}},{key:"combineParams",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return b(b({},e),t)}))}},{key:"closeAlert",get:function(){return(0,h.NQ)("alerts")}}]),g}(d.Component);const _=(0,m.EN)(E);E.contextType=g.I},95781:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a=n(87462),o=n(15671),c=n(43144),r=n(60136),s=n(6215),l=n(61120),i=n(18446),u=n.n(i),p=n(67294),d=n(5977),m=n(47012),f=n(9473),h=n(43819),v=n(61647),y=n(61542);var g=function(e){(0,r.Z)(d,e);var t,n,i=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,l.Z)(t);if(n){var o=(0,l.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;(0,o.Z)(this,d),t=i.call(this,e);var n=h.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t}return(0,c.Z)(d,[{key:"componentDidMount",value:function(){this.loadCollection(this.context.selectedRepo,!0)}},{key:"componentDidUpdate",value:function(e){u()(e.location,this.props.location)||this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,o=t.params;if(!n)return p.createElement(m.gO,null);var c=[v.Th,{url:(0,v.dI)(v.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{name:n.name}];return p.createElement(p.Fragment,null,p.createElement(m.X8,{collection:n,params:o,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:c,activeTab:"install",repo:this.context.selectedRepo}),p.createElement(m.or,null,p.createElement("section",{className:"body"},p.createElement(m.aG,(0,a.Z)({},n,{updateParams:function(t){return e.updateParams(t)},params:this.state.params})))))}},{key:"loadCollection",get:function(){return f.Y}},{key:"updateParams",get:function(){return h.q.updateParamsMixin()}}]),d}(p.Component);const R=(0,d.EN)(g);g.contextType=y.I},3895:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(15671),o=n(43144),c=n(60136),r=n(6215),s=n(61120),l=n(25221),i=n(67294),u=n(73727),p=n(5977),d=n(32582),m=n(87116),f=n(47012),h=n(30983),v=n(9473),y=n(18944),g=n(61647),R=n(61542),b=n(43047);var E=function(e){(0,c.Z)(R,e);var t,n,p=(t=R,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,r.Z)(this,e)});function R(e){var t;(0,a.Z)(this,R),t=p.call(this,e);var n=y.q6.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t.docsRef=i.createRef(),t.searchBarRef=i.createRef(),t}return(0,o.Z)(R,[{key:"componentDidMount",value:function(){this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e,t,n=this,a=this.state,o=a.params,c=a.collection,r=this.props.match.params;if(!c)return i.createElement(f.gO,null);var s=r.type||"docs",u=r.name||r.page||null;if("docs"===s&&u){if(c.latest_version.docs_blob.documentation_files){var p=c.latest_version.docs_blob.documentation_files.find((function(e){return(0,y.Vb)(e.name)===r.page}));p&&(e=p.html)}}else if(u){if(c.latest_version.docs_blob.contents){var v=c.latest_version.docs_blob.contents.find((function(e){return e.content_type===s&&e.content_name===u}));v&&("role"===s?e=v.readme_html:t=v)}}else c.latest_version.docs_blob.collection_readme&&(e=c.latest_version.docs_blob.collection_readme.html);var R=[g.Th,{url:(0,g.dI)(g.nB.namespaceByRepo,{namespace:c.namespace.name,repo:this.context.selectedRepo}),name:c.namespace.name},{url:(0,g.dI)(g.nB.collectionByRepo,{namespace:c.namespace.name,collection:c.name,repo:this.context.selectedRepo}),name:c.name},{name:l.ag._("Documentation")}];return i.createElement(i.Fragment,null,i.createElement(f.X8,{collection:c,params:o,updateParams:function(e){return n.updateParams(e,(function(){return n.loadCollection(n.context.selectedRepo,!0)}))},breadcrumbs:R,activeTab:"documentation",className:"header",repo:this.context.selectedRepo}),i.createElement(f.or,{className:"main"},i.createElement("section",{className:"docs-container"},i.createElement(f.o5,{className:"sidebar",namespace:c.namespace.name,collection:c.name,docs_blob:c.latest_version.docs_blob,selectedName:u,selectedType:s,params:o,updateParams:function(e){return n.updateParams(e)},searchBarRef:this.searchBarRef}),i.createElement("div",{className:"body docs pf-c-content",ref:this.docsRef},e||t?e?i.createElement("div",{dangerouslySetInnerHTML:{__html:e}}):i.createElement(h.RenderPluginDoc,{plugin:t,renderModuleLink:function(e){return n.renderModuleLink(e,c,o,c.latest_version.metadata.contents)},renderDocLink:function(e,t){return n.renderDocLink(e,t,c,o)},renderTableOfContentsLink:function(e,t){return i.createElement(d.fO,{to:"#"+t},e)},renderWarning:function(e){return i.createElement(m.b,{isInline:!0,variant:"warning",title:e})}}):this.renderNotFound(c.name)))))}},{key:"renderDocLink",value:function(e,t,n,a){return t&&t.startsWith("http")?i.createElement("a",{href:t,target:"_blank"},e):t?i.createElement(u.rU,{to:(0,g.dI)(g.nB.collectionDocsPageByRepo,{namespace:n.namespace.name,collection:n.name,page:(0,y.Vb)(t),repo:this.context.selectedRepo},a)},e):null}},{key:"renderModuleLink",value:function(e,t,n,a){return a.find((function(t){return"module"===t.content_type&&t.name===e}))?i.createElement(u.rU,{to:(0,g.dI)(g.nB.collectionContentDocsByRepo,{namespace:t.namespace.name,collection:t.name,type:"module",name:e,repo:this.context.selectedRepo},n)},e):e}},{key:"renderNotFound",value:function(e){return i.createElement(f.WU,{title:l.ag._("Not found"),description:l.ag._("The file is not available for this version of {collectionName}",{collectionName:e}),icon:b.$O})}},{key:"loadCollection",get:function(){return v.Y}},{key:"updateParams",get:function(){return y.q6.updateParamsMixin()}}]),R}(i.Component);const _=(0,p.EN)(E);E.contextType=R.I},22282:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(15671),o=n(43144),c=n(60136),r=n(6215),s=n(61120),l=n(25221),i=n(67294),u=n(5977),p=n(34903),d=n(47012),m=n(9473),f=n(43819),h=n(61647),v=n(61542);var y=function(e){(0,c.Z)(v,e);var t,n,u=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,r.Z)(this,e)});function v(e){var t;(0,a.Z)(this,v),t=u.call(this,e);var n=f.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n,loadingImports:!0,selectedImportDetail:void 0,selectedImport:void 0,apiError:void 0},t}return(0,o.Z)(v,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,a=t.params,o=t.loadingImports,c=t.selectedImportDetail,r=t.selectedImport,s=t.apiError;if(!n)return i.createElement(d.gO,null);var u=[h.Th,{url:(0,h.dI)(h.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,h.dI)(h.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:l.ag._("Import log")}];return i.createElement(i.Fragment,null,i.createElement(d.X8,{collection:n,params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.loadData(!0)}))},breadcrumbs:u,activeTab:"import-log",repo:this.context.selectedRepo}),i.createElement(d.or,null,i.createElement("section",{className:"body"},i.createElement(d.Fb,{loading:o,task:c,followMessages:!1,setFollowMessages:function(){return null},selectedImport:r,apiError:s,hideCollectionName:!0}))))}},{key:"loadData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=l.ag._("Could not load import log");this.setState({loadingImports:!0},(function(){e.loadCollection(e.context.selectedRepo,t,(function(){p.q3.list({namespace:e.state.collection.namespace.name,name:e.state.collection.name,version:e.state.collection.latest_version.version,sort:"-created"}).then((function(t){var a=t.data.data[0];p.q3.get(a.id).then((function(t){e.setState({apiError:void 0,loadingImports:!1,selectedImport:a,selectedImportDetail:t.data})})).catch((function(t){e.setState({apiError:n,loadingImports:!1})}))})).catch((function(t){e.setState({apiError:n,loadingImports:!1})}))}))}))}},{key:"loadCollection",get:function(){return m.Y}},{key:"updateParams",get:function(){return f.q.updateParamsMixin()}}]),v}(i.Component);const g=(0,u.EN)(y);y.contextType=v.I}}]);
//# sourceMappingURL=../sourcemaps/collection_detail.d72bc12903fd09c83a46.js.map