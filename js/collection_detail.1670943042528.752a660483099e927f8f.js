(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[776],{18446:(e,t,n)=>{var a=n(90939);e.exports=function(e,t){return a(e,t)}},9473:(e,t,n)=>{"use strict";n.d(t,{Y:()=>i});var a=n(4942),o=n(47922),r=n(61647);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return null};o.gu.getCached(this.props.match.params.namespace,this.props.match.params.collection,e,s(s({},this.state.params),{},{include_related:"my_permissions"}),n).then((function(e){return o.gu.list({name:t.props.match.params.collection},t.context.selectedRepo).then((function(n){e.deprecated=n.data.data[0].deprecated,t.setState({collection:e},a)}))})).catch((function(){t.props.history.push(r.nB.notFound)}))}},5576:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var a=n(15671),o=n(43144),r=n(60136),c=n(82963),s=n(61120),i=n(27693),l=n(30624),u=n(96620),p=n(89216),d=n(9473),m=n(43819),f=n(61647),h=n(61542);var v=function(e){(0,r.Z)(h,e);var t,n,u=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){var t;(0,a.Z)(this,h),t=u.call(this,e);var n=m.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t}return(0,o.Z)(h,[{key:"componentDidMount",value:function(){this.load(!1)}},{key:"load",value:function(e){this.loadCollection(this.context.selectedRepo,e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,a=t.params;if(!n)return l.createElement(p.gO,null);var o=[f.Th,{url:(0,f.dI)(f.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,f.dI)(f.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:i.ag._("Content")}];return l.createElement(l.Fragment,null,l.createElement(p.X8,{reload:function(){return e.load(!0)},collection:n,params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:o,activeTab:"contents",repo:this.context.selectedRepo}),l.createElement(p.or,null,l.createElement("section",{className:"body"},l.createElement(p.Ui,{contents:n.latest_version.metadata.contents,collection:n.name,namespace:n.namespace.name,params:a,updateParams:function(t){return e.updateParams(t)}}))))}},{key:"loadCollection",get:function(){return d.Y}},{key:"updateParams",get:function(){return m.q.updateParamsMixin()}}]),h}(l.Component);const y=(0,u.withRouter)(v);v.contextType=h.I},27910:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var a=n(42982),o=n(70885),r=n(15671),c=n(43144),s=n(97326),i=n(60136),l=n(82963),u=n(61120),p=n(4942),d=n(27693),m=n(30624),f=n(96620),h=n(47922),v=n(89216),y=n(20451),g=n(61647),b=n(61542);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){(0,i.Z)(b,e);var t,n,f=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var o=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function b(e){var t;(0,r.Z)(this,b),t=f.call(this,e),(0,p.Z)((0,s.Z)(t),"ignoredParams",["page_size","page","sort","name__icontains"]);var n=y.q6.parseParamString(e.location.search,["page","page_size"]);return n.sort=n.sort?"collection":"-collection",t.state={collection:void 0,dependencies_repos:[],params:n,usedByDependencies:[],usedByDependenciesCount:0,usedByDependenciesLoading:!0,alerts:[]},t}return(0,c.Z)(b,[{key:"componentDidMount",value:function(){this.loadData(!1)}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,a=t.params,o=t.usedByDependencies,r=t.usedByDependenciesCount,c=t.usedByDependenciesLoading,s=t.alerts;if(!n)return m.createElement(v.gO,null);var i=[g.Th,{url:(0,g.dI)(g.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,g.dI)(g.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:d.ag._("Dependencies")}],l=y.q6.getReduced(a,this.ignoredParams),u=y.q6.getReduced(a,["version"]),p=!Object.keys(n.latest_version.metadata.dependencies).length;return m.createElement(m.Fragment,null,m.createElement(v.UW,{alerts:s,closeAlert:function(t){return e.closeAlert(t)}}),m.createElement(v.X8,{reload:function(){return e.loadData(!0)},collection:n,params:l,updateParams:function(t){e.updateParams(e.combineParams(e.state.params,t),(function(){return e.loadData(!0)}))},breadcrumbs:i,activeTab:"dependencies",repo:this.context.selectedRepo}),m.createElement(v.or,null,m.createElement("section",{className:"body"},m.createElement("div",{className:"pf-c-content collection-dependencies"},m.createElement("h1",null,d.ag._("Dependencies")),!p||r||(0,y.vS)(a,["name__icontains"])?m.createElement(m.Fragment,null,m.createElement("p",null,d.ag._("This collections requires the following collections for use")),p?m.createElement(v.vv,{title:d.ag._("No dependencies"),description:d.ag._("Collection does not have any dependencies.")}):m.createElement(v.nW,{collection:this.state.collection,dependencies_repos:this.state.dependencies_repos}),m.createElement("p",null,d.ag._("This collection is being used by")),m.createElement(v.KQ,{repo:this.context.selectedRepo,usedByDependencies:o,itemCount:r,params:u,usedByDependenciesLoading:c,updateParams:function(t){return e.updateParams(e.combineParams(e.state.params,t),(function(){return e.loadUsedByDependencies()}))}})):m.createElement(v.vv,{title:d.ag._("No dependencies"),description:d.ag._("Collection does not have any dependencies.")})))))}},{key:"loadData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loadCollection(t,(function(){return e.loadCollectionsDependenciesRepos((function(){return e.loadUsedByDependencies()}))}))}},{key:"loadCollectionsDependenciesRepos",value:function(e){var t=this,n=this.state.collection.latest_version.metadata.dependencies,a=[],r=[];Object.keys(n).forEach((function(e){var c=e.split("."),s=(0,o.Z)(c,2),i=s[0],l=s[1],u=n[e],p={name:l,namespace:i,version:u=t.separateVersion(u).version,repo:"",path:""};a.push(p);var d=t.loadDependencyRepo(p);r.push(d)})),Promise.all(r).then((function(){t.setState({dependencies_repos:a},e())}))}},{key:"loadDependencyRepo",value:function(e){return h.eq.list({namespace:e.namespace,name:e.name,version:e.version}).then((function(t){e.repo=t.data.data[0].repository_list[0],e.path=(0,g.dI)(g.nB.collectionByRepo,{collection:e.name,namespace:e.namespace,repo:e.repo},e.version)})).catch((function(){}))}},{key:"loadUsedByDependencies",value:function(){var e=this;this.setState({usedByDependenciesLoading:!0},(function(){e.cancelToken&&e.cancelToken.cancel("request-canceled"),e.cancelToken=h.gu.getCancelToken(),h.gu.getUsedDependenciesByCollection(e.state.collection.namespace.name,e.state.collection.name,y.q6.getReduced(e.state.params,["version"]),e.cancelToken).then((function(t){var n=t.data;e.setState({usedByDependencies:n.data,usedByDependenciesCount:n.meta.count,usedByDependenciesLoading:!1})})).catch((function(t){var n=t.response,o=n.status,r=n.statusText;"request-canceled"!==(null==t?void 0:t.message)&&e.setState({usedByDependenciesLoading:!1,alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:d.ag._("Dependent collections could not be displayed."),description:(0,y.N3)(o,r)}])})})).finally((function(){e.cancelToken=void 0}))}))}},{key:"loadCollection",value:function(e,t){var n=this;h.gu.getCached(this.props.match.params.namespace,this.props.match.params.collection,this.context.selectedRepo,this.state.params.version?{version:this.state.params.version}:{},e).then((function(e){n.setState({collection:e},t)})).catch((function(){n.props.history.push(g.nB.notFound)}))}},{key:"updateParams",get:function(){return y.q6.updateParamsMixin()}},{key:"combineParams",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return E(E({},e),t)}))}},{key:"closeAlert",get:function(){return(0,v.NQ)("alerts")}},{key:"separateVersion",value:function(e){var t=e.match(/((\d+\.*)+)/);return t?{version:t[0]}:{}}}]),b}(m.Component);const k=(0,f.withRouter)(_);_.contextType=b.I},95781:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var a=n(87462),o=n(42982),r=n(15671),c=n(43144),s=n(60136),i=n(82963),l=n(61120),u=n(18446),p=n.n(u),d=n(30624),m=n(96620),f=n(89216),h=n(9473),v=n(43819),y=n(61647),g=n(61542);var b=function(e){(0,s.Z)(m,e);var t,n,u=(t=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,l.Z)(t);if(n){var o=(0,l.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function m(e){var t;(0,r.Z)(this,m),t=u.call(this,e);var n=v.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n,alerts:[]},t}return(0,c.Z)(m,[{key:"componentDidMount",value:function(){this.load(!0)}},{key:"load",value:function(e){this.loadCollection(this.context.selectedRepo,e)}},{key:"componentDidUpdate",value:function(e){p()(e.location,this.props.location)||this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,r=t.params,c=t.alerts;if(!n)return d.createElement(f.gO,null);var s=[y.Th,{url:(0,y.dI)(y.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{name:n.name}];return d.createElement(d.Fragment,null,d.createElement(f.UW,{alerts:c,closeAlert:function(t){return e.closeAlert(t)}}),d.createElement(f.X8,{reload:function(){return e.load(!0)},collection:n,params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:s,activeTab:"install",repo:this.context.selectedRepo}),d.createElement(f.or,null,d.createElement("section",{className:"body"},d.createElement(f.aG,(0,a.Z)({},n,{updateParams:function(t){return e.updateParams(t)},params:this.state.params,addAlert:function(t,n,a){return e.setState({alerts:[].concat((0,o.Z)(e.state.alerts),[{variant:t,title:n,description:a}])})}})))))}},{key:"loadCollection",get:function(){return h.Y}},{key:"updateParams",get:function(){return v.q.updateParamsMixin()}},{key:"closeAlert",get:function(){return(0,f.NQ)("alerts")}}]),m}(d.Component);const R=(0,m.withRouter)(b);b.contextType=g.I},13987:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var a=n(15671),o=n(43144),r=n(60136),c=n(82963),s=n(61120),i=n(27693),l=n(30624),u=n.n(l),p=n(96620),d=function(){return d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)},m="",f=null,h=null,v=null;function y(){m="",null!==f&&f.disconnect(),null!==h&&(window.clearTimeout(h),h=null)}function g(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function b(){var e=null;if("#"===m)e=document.body;else{var t=m.replace("#","");null===(e=document.getElementById(t))&&"#top"===m&&(e=document.body)}if(null!==e){v(e);var n=e.getAttribute("tabindex");return null!==n||g(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||g(e)||(e.blur(),e.removeAttribute("tabindex")),y(),!0}return!1}function R(e){return u().forwardRef((function(t,n){var a="";"string"==typeof t.to&&t.to.includes("#")?a="#"+t.to.split("#").slice(1).join("#"):"object"==typeof t.to&&"string"==typeof t.to.hash&&(a=t.to.hash);var o={};e===p.NavLink&&(o.isActive=function(e,t){return e&&e.isExact&&t.hash===a});var r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}(t,["scroll","smooth","timeout","elementId"]);return u().createElement(e,d({},o,r,{onClick:function(e){var n;y(),m=t.elementId?"#"+t.elementId:a,t.onClick&&t.onClick(e),""===m||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(v=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===b()&&(null===f&&(f=new MutationObserver(b)),f.observe(document,{attributes:!0,childList:!0,subtree:!0}),h=window.setTimeout((function(){y()}),n||1e4))}),0))},ref:n}),t.children)}))}var E=R(p.Link),_=(R(p.NavLink),n(11930)),k=n(89216),P=n(9473),O=n(20451),B=n(61647),D=n(61542),x=n(43047),C=n(69957);var I=function(e){(0,r.Z)(d,e);var t,n,u=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;(0,a.Z)(this,d),t=u.call(this,e);var n=O.q6.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t.docsRef=l.createRef(),t.searchBarRef=l.createRef(),t}return(0,o.Z)(d,[{key:"componentDidMount",value:function(){this.load(!1)}},{key:"load",value:function(e){this.loadCollection(this.context.selectedRepo,e)}},{key:"render",value:function(){var e,t,n=this,a=this.state,o=a.params,r=a.collection,c=this.props.match.params;if(!r)return l.createElement(k.gO,null);var s=c.type||"docs",u=c.name||c.page||null;if("docs"===s&&u){if(r.latest_version.docs_blob.documentation_files){var p=r.latest_version.docs_blob.documentation_files.find((function(e){return(0,O.Vb)(e.name)===c.page}));p&&(e=p.html)}}else if(u){if(r.latest_version.docs_blob.contents){var d=r.latest_version.docs_blob.contents.find((function(e){return e.content_type===s&&e.content_name===u}));d&&("role"===s?e=d.readme_html:t=d)}}else r.latest_version.docs_blob.collection_readme&&(e=r.latest_version.docs_blob.collection_readme.html);var m=[B.Th,{url:(0,B.dI)(B.nB.namespaceByRepo,{namespace:r.namespace.name,repo:this.context.selectedRepo}),name:r.namespace.name},{url:(0,B.dI)(B.nB.collectionByRepo,{namespace:r.namespace.name,collection:r.name,repo:this.context.selectedRepo}),name:r.name},{name:i.ag._("Documentation")}];return l.createElement(l.Fragment,null,l.createElement(k.X8,{reload:function(){return n.load(!0)},collection:r,params:o,updateParams:function(e){return n.updateParams(e,(function(){return n.loadCollection(n.context.selectedRepo,!0)}))},breadcrumbs:m,activeTab:"documentation",className:"header",repo:this.context.selectedRepo}),l.createElement(k.or,{className:"main"},l.createElement("section",{className:"docs-container"},l.createElement(k.o5,{className:"sidebar",namespace:r.namespace.name,collection:r.name,docs_blob:r.latest_version.docs_blob,selectedName:u,selectedType:s,params:o,updateParams:function(e){return n.updateParams(e)},searchBarRef:this.searchBarRef}),l.createElement("div",{className:"body docs pf-c-content",ref:this.docsRef},e||t?e?l.createElement("div",{dangerouslySetInnerHTML:{__html:e}}):l.createElement(k.q_,{plugin:t,renderModuleLink:function(e){return n.renderModuleLink(e,r,o,r.latest_version.metadata.contents)},renderDocLink:function(e,t){return n.renderDocLink(e,t,r,o)},renderTableOfContentsLink:function(e,t){return l.createElement(E,{to:"#"+t},e)},renderWarning:function(e){return l.createElement(_.Alert,{isInline:!0,variant:"warning",title:e})}}):"community"!==this.context.selectedRepo||r.latest_version.docs_blob.contents?this.renderNotFound(r.name):this.renderCommunityWarningMessage()))))}},{key:"renderDocLink",value:function(e,t,n,a){return t&&t.startsWith("http")?l.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},e):t?l.createElement(p.Link,{to:(0,B.dI)(B.nB.collectionDocsPageByRepo,{namespace:n.namespace.name,collection:n.name,page:(0,O.Vb)(t),repo:this.context.selectedRepo},a)},e):null}},{key:"renderModuleLink",value:function(e,t,n,a){return a.find((function(t){return"module"===t.content_type&&t.name===e}))?l.createElement(p.Link,{to:(0,B.dI)(B.nB.collectionContentDocsByRepo,{namespace:t.namespace.name,collection:t.name,type:"module",name:e,repo:this.context.selectedRepo},n)},e):e}},{key:"renderNotFound",value:function(e){return l.createElement(k.WU,{title:i.ag._("Not found"),description:i.ag._("The file is not available for this version of {collectionName}",{collectionName:e}),icon:x.$O})}},{key:"renderCommunityWarningMessage",value:function(){return l.createElement(k.WU,{title:i.ag._("Warning"),description:i.ag._("Community collections do not have docs nor content counts, but all content gets synchronized"),icon:C.LP})}},{key:"loadCollection",get:function(){return P.Y}},{key:"updateParams",get:function(){return O.q6.updateParamsMixin()}}]),d}(l.Component);const w=(0,p.withRouter)(I);I.contextType=D.I},22282:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var a=n(15671),o=n(43144),r=n(60136),c=n(82963),s=n(61120),i=n(27693),l=n(30624),u=n(96620),p=n(47922),d=n(89216),m=n(9473),f=n(43819),h=n(61647),v=n(61542);var y=function(e){(0,r.Z)(v,e);var t,n,u=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function v(e){var t;(0,a.Z)(this,v),t=u.call(this,e);var n=f.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n,loadingImports:!0,selectedImportDetail:void 0,selectedImport:void 0,apiError:void 0},t}return(0,o.Z)(v,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,a=t.params,o=t.loadingImports,r=t.selectedImportDetail,c=t.selectedImport,s=t.apiError;if(!n)return l.createElement(d.gO,null);var u=[h.Th,{url:(0,h.dI)(h.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,h.dI)(h.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:i.ag._("Import log")}];return l.createElement(l.Fragment,null,l.createElement(d.X8,{reload:function(){return e.loadData(!0)},collection:n,params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.loadData(!0)}))},breadcrumbs:u,activeTab:"import-log",repo:this.context.selectedRepo}),l.createElement(d.or,null,l.createElement("section",{className:"body"},l.createElement(d.Fb,{empty:!1,loading:o,task:r,followMessages:!1,setFollowMessages:function(){return null},selectedImport:c,apiError:s,hideCollectionName:!0}))))}},{key:"loadData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=i.ag._("Could not load import log");this.setState({loadingImports:!0},(function(){e.loadCollection(e.context.selectedRepo,t,(function(){p.q3.list({namespace:e.state.collection.namespace.name,name:e.state.collection.name,version:e.state.collection.latest_version.version,sort:"-created"}).then((function(t){var a=t.data.data[0];p.q3.get(a.id).then((function(t){e.setState({apiError:void 0,loadingImports:!1,selectedImport:a,selectedImportDetail:t.data})})).catch((function(){e.setState({apiError:n,loadingImports:!1})}))})).catch((function(){e.setState({apiError:n,loadingImports:!1})}))}))}))}},{key:"loadCollection",get:function(){return m.Y}},{key:"updateParams",get:function(){return f.q.updateParamsMixin()}}]),v}(l.Component);const g=(0,u.withRouter)(y);y.contextType=v.I}}]);
//# sourceMappingURL=collection_detail.1670943042528.752a660483099e927f8f.js.map