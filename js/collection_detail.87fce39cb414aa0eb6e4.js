"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[776],{9473:(e,t,n)=>{n.d(t,{Y:()=>r});var a=n(74761),o=n(61647);function r(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return null};a.gu.getCached(this.props.match.params.namespace,this.props.match.params.collection,e,this.state.params,n).then((function(e){t.setState({collection:e},r)})).catch((function(e){t.props.history.push(o.nB.notFound)}))}},5576:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a,o=n(30168),r=n(15671),c=n(43144),l=n(60136),s=n(6215),i=n(61120),u=n(67294),m=n(5977),p=n(92942),d=n(9473),f=n(43819),h=n(61647),v=n(61542);var y=function(e){(0,l.Z)(v,e);var t,n,m=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function v(e){var t;(0,r.Z)(this,v),t=m.call(this,e);var n=f.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t}return(0,c.Z)(v,[{key:"componentDidMount",value:function(){this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,r=t.params;if(!n)return u.createElement(p.gO,null);var c=[h.Th,{url:(0,h.dI)(h.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,h.dI)(h.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:_(a||(a=(0,o.Z)(["Content"])))}];return u.createElement(u.Fragment,null,u.createElement(p.X8,{collection:n,params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:c,activeTab:"contents",repo:this.context.selectedRepo}),u.createElement(p.or,null,u.createElement("section",{className:"body"},u.createElement(p.Ui,{contents:n.latest_version.metadata.contents,collection:n.name,namespace:n.namespace.name,params:r,updateParams:function(t){return e.updateParams(t)}}))))}},{key:"loadCollection",get:function(){return d.Y}},{key:"updateParams",get:function(){return f.q.updateParamsMixin()}}]),v}(u.Component);const R=(0,m.EN)(y);y.contextType=v.I},95781:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(87462),o=n(15671),r=n(43144),c=n(60136),l=n(6215),s=n(61120),i=n(67294),u=n(5977),m=n(92942),p=n(9473),d=n(43819),f=n(61647),h=n(61542);var v=function(e){(0,c.Z)(h,e);var t,n,u=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function h(e){var t;(0,o.Z)(this,h),t=u.call(this,e);var n=d.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t}return(0,r.Z)(h,[{key:"componentDidMount",value:function(){this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,o=t.params;if(!n)return i.createElement(m.gO,null);var r=[f.Th,{url:(0,f.dI)(f.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{name:n.name}];return i.createElement(i.Fragment,null,i.createElement(m.X8,{collection:n,params:o,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:r,activeTab:"install",repo:this.context.selectedRepo}),i.createElement(m.or,null,i.createElement("section",{className:"body"},i.createElement(m.aG,(0,a.Z)({},n,{updateParams:function(t){return e.updateParams(t)},params:this.state.params})))))}},{key:"loadCollection",get:function(){return p.Y}},{key:"updateParams",get:function(){return d.q.updateParamsMixin()}}]),h}(i.Component);const y=(0,u.EN)(v);v.contextType=h.I},3895:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a,o,r,c=n(30168),l=n(15671),s=n(43144),i=n(60136),u=n(6215),m=n(61120),p=n(67294),d=n(73727),f=n(5977),h=n(32582),v=n(43547),y=n(92942),R=n(30983),g=n(9473),b=n(6568),E=n(61647),k=n(61542),x=n(43047);var P=function(e){(0,i.Z)(k,e);var t,n,f=(t=k,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,m.Z)(t);if(n){var o=(0,m.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,u.Z)(this,e)});function k(e){var t;(0,l.Z)(this,k),t=f.call(this,e);var n=b.q6.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t.docsRef=p.createRef(),t.searchBarRef=p.createRef(),t}return(0,s.Z)(k,[{key:"componentDidMount",value:function(){this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e,t,n=this,o=this.state,r=o.params,l=o.collection,s=this.props.match.params;if(!l)return p.createElement(y.gO,null);var i=s.type||"docs",u=s.name||s.page||null;if("docs"===i&&u){if(l.latest_version.docs_blob.documentation_files){var m=l.latest_version.docs_blob.documentation_files.find((function(e){return(0,b.Vb)(e.name)===s.page}));m&&(e=m.html)}}else if(u){if(l.latest_version.docs_blob.contents){var d=l.latest_version.docs_blob.contents.find((function(e){return e.content_type===i&&e.content_name===u}));d&&("role"===i?e=d.readme_html:t=d)}}else l.latest_version.docs_blob.collection_readme&&(e=l.latest_version.docs_blob.collection_readme.html);var f=[E.Th,{url:(0,E.dI)(E.nB.namespaceByRepo,{namespace:l.namespace.name,repo:this.context.selectedRepo}),name:l.namespace.name},{url:(0,E.dI)(E.nB.collectionByRepo,{namespace:l.namespace.name,collection:l.name,repo:this.context.selectedRepo}),name:l.name},{name:_(a||(a=(0,c.Z)(["Documentation"])))}];return p.createElement(p.Fragment,null,p.createElement(y.X8,{collection:l,params:r,updateParams:function(e){return n.updateParams(e,(function(){return n.loadCollection(n.context.selectedRepo,!0)}))},breadcrumbs:f,activeTab:"documentation",className:"header",repo:this.context.selectedRepo}),p.createElement(y.or,{className:"main"},p.createElement("section",{className:"docs-container"},p.createElement(y.o5,{className:"sidebar",namespace:l.namespace.name,collection:l.name,docs_blob:l.latest_version.docs_blob,selectedName:u,selectedType:i,params:r,updateParams:function(e){return n.updateParams(e)},searchBarRef:this.searchBarRef}),p.createElement("div",{className:"body docs pf-c-content",ref:this.docsRef},e||t?e?p.createElement("div",{dangerouslySetInnerHTML:{__html:e}}):p.createElement(R.RenderPluginDoc,{plugin:t,renderModuleLink:function(e){return n.renderModuleLink(e,l,r,l.latest_version.metadata.contents)},renderDocLink:function(e,t){return n.renderDocLink(e,t,l,r)},renderTableOfContentsLink:function(e,t){return p.createElement(h.fO,{to:"#"+t},e)},renderWarning:function(e){return p.createElement(v.b,{isInline:!0,variant:"warning",title:e})}}):this.renderNotFound(l.name)))))}},{key:"renderDocLink",value:function(e,t,n,a){return t&&t.startsWith("http")?p.createElement("a",{href:t,target:"_blank"},e):t?p.createElement(d.rU,{to:(0,E.dI)(E.nB.collectionDocsPageByRepo,{namespace:n.namespace.name,collection:n.name,page:(0,b.Vb)(t),repo:this.context.selectedRepo},a)},e):null}},{key:"renderModuleLink",value:function(e,t,n,a){return a.find((function(t){return"module"===t.content_type&&t.name===e}))?p.createElement(d.rU,{to:(0,E.dI)(E.nB.collectionContentDocsByRepo,{namespace:t.namespace.name,collection:t.name,type:"module",name:e,repo:this.context.selectedRepo},n)},e):e}},{key:"renderNotFound",value:function(e){return p.createElement(y.WU,{title:_(o||(o=(0,c.Z)(["Not found"]))),description:_(r||(r=(0,c.Z)(["The file is not available for this version of "])))+e,icon:x.$O})}},{key:"loadCollection",get:function(){return g.Y}},{key:"updateParams",get:function(){return b.q6.updateParamsMixin()}}]),k}(p.Component);const Z=(0,f.EN)(P);P.contextType=k.I},22282:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a,o,r=n(30168),c=n(15671),l=n(43144),s=n(60136),i=n(6215),u=n(61120),m=n(67294),p=n(5977),d=n(74761),f=n(92942),h=n(9473),v=n(43819),y=n(61647),R=n(61542);var g=function(e){(0,s.Z)(R,e);var t,n,p=(t=R,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var o=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function R(e){var t;(0,c.Z)(this,R),t=p.call(this,e);var n=v.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n,loadingImports:!0,selectedImportDetail:void 0,selectedImport:void 0,apiError:void 0},t}return(0,l.Z)(R,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,o=t.params,c=t.loadingImports,l=t.selectedImportDetail,s=t.selectedImport,i=t.apiError;if(!n)return m.createElement(f.gO,null);var u=[y.Th,{url:(0,y.dI)(y.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,y.dI)(y.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:_(a||(a=(0,r.Z)(["Import log"])))}];return m.createElement(m.Fragment,null,m.createElement(f.X8,{collection:n,params:o,updateParams:function(t){return e.updateParams(t,(function(){return e.loadData(!0)}))},breadcrumbs:u,activeTab:"import-log",repo:this.context.selectedRepo}),m.createElement(f.or,null,m.createElement("section",{className:"body"},m.createElement(f.Fb,{loading:c,task:l,followMessages:!1,setFollowMessages:function(){return null},selectedImport:s,apiError:i,hideCollectionName:!0}))))}},{key:"loadData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=_(o||(o=(0,r.Z)(["Could not load import log"])));this.setState({loadingImports:!0},(function(){e.loadCollection(e.context.selectedRepo,t,(function(){d.q3.list({namespace:e.state.collection.namespace.name,name:e.state.collection.name,version:e.state.collection.latest_version.version,sort:"-created"}).then((function(t){var a=t.data.data[0];d.q3.get(a.id).then((function(t){e.setState({apiError:void 0,loadingImports:!1,selectedImport:a,selectedImportDetail:t.data})})).catch((function(t){e.setState({apiError:n,loadingImports:!1})}))})).catch((function(t){e.setState({apiError:n,loadingImports:!1})}))}))}))}},{key:"loadCollection",get:function(){return h.Y}},{key:"updateParams",get:function(){return v.q.updateParamsMixin()}}]),R}(m.Component);const b=(0,p.EN)(g);g.contextType=R.I}}]);
//# sourceMappingURL=../sourcemaps/collection_detail.b79d78e54b0ce8814523.js.map