(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{744:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(23),a=n(8);function r(e,t,n){var r=this;void 0===t&&(t=!1),void 0===n&&(n=function(){return null}),o.b.getCached(this.props.match.params.namespace,this.props.match.params.collection,e,this.state.params,t).then((function(e){r.setState({collection:e},n)})).catch((function(e){r.props.history.push(a.a.notFound)}))}},745:function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".main{margin:0px;padding:0px}.header{border-bottom:1px solid #d8d8d8}.pf-c-toolbar__group{margin-left:16px}.docs-container{padding-top:24px;background-color:#fff}@media(min-width: 1000px){.docs-container{display:flex}}.docs-container .sidebar{min-width:294px;max-width:294px;border-right:1px solid #d8d8d8;padding:0px;padding-top:0px}.docs-container .docs{flex-grow:1;padding:24px;padding-top:0px;overflow-x:auto;min-height:calc(100vh - 250px)}.docs-container .docs table tr:nth-child(2n){background-color:#f2f2f2}.docs-container .docs table td,.docs-container .docs table th{border:1px solid #ccc;padding:5px}.docs-container pre{white-space:pre-wrap}",""])},754:function(e,t,n){var o=n(745);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},r=n(11)(o,a);o.locals&&(e.exports=o.locals),e.hot.accept(745,(function(){var t=n(745);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,o=0;for(n in e){if(!t||e[n]!==t[n])return!1;o++}for(n in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)})),e.hot.dispose((function(){r()}))},766:function(e,t,n){"use strict";n.r(t);var o,a=n(0),r=n(35),c=n(236),i=n(744),s=n(20),l=n(8),p=n(53),u=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(){return(m=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},d=function(e){function t(t){var n=e.call(this,t)||this,o=s.a.parseParamString(t.location.search);return n.state={collection:void 0,params:o},n}return u(t,e),t.prototype.componentDidMount=function(){this.loadCollection(this.context.selectedRepo)},t.prototype.render=function(){var e=this,t=this.state,n=t.collection,o=t.params;if(!n)return a.createElement(c.z,null);var r=[l.c,{url:Object(l.b)(l.a.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{name:n.name}];return a.createElement(a.Fragment,null,a.createElement(c.j,{collection:n,params:o,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:r,activeTab:"install",repo:this.context.selectedRepo}),a.createElement(c.C,null,a.createElement("section",{className:"body"},a.createElement(c.k,m({},n,{updateParams:function(t){return e.updateParams(t)},params:this.state.params})))))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return i.a},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return s.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t}(a.Component);t.default=Object(r.g)(d),d.contextType=p.a},767:function(e,t,n){"use strict";n.r(t);var o,a=n(0),r=n(35),c=n(236),i=n(744),s=n(20),l=n(8),p=n(53),u=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(t){var n=e.call(this,t)||this,o=s.a.parseParamString(t.location.search);return n.state={collection:void 0,params:o},n}return u(t,e),t.prototype.componentDidMount=function(){this.loadCollection(this.context.selectedRepo)},t.prototype.render=function(){var e=this,t=this.state,n=t.collection,o=t.params;if(!n)return a.createElement(c.z,null);var r=[l.c,{url:Object(l.b)(l.a.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:Object(l.b)(l.a.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:"Content"}];return a.createElement(a.Fragment,null,a.createElement(c.j,{collection:n,params:o,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:r,activeTab:"contents",repo:this.context.selectedRepo}),a.createElement(c.C,null,a.createElement("section",{className:"body"},a.createElement(c.h,{contents:n.latest_version.metadata.contents,collection:n.name,namespace:n.namespace.name,params:o,updateParams:function(t){return e.updateParams(t)}}))))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return i.a},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return s.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t}(a.Component);t.default=Object(r.g)(m),m.contextType=p.a},768:function(e,t,n){"use strict";n.r(t);var o,a=n(0),r=(n(754),n(31)),c=n(35),i=n(756),s=n(736),l=n(236),p=n(755),u=n(744),m=n(16),d=n(8),f=n(53),b=n(112),h=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=function(e){function t(t){var n=e.call(this,t)||this,o=m.a.parseParamString(t.location.search);return n.state={collection:void 0,params:o},n.docsRef=a.createRef(),n.searchBarRef=a.createRef(),n}return h(t,e),t.prototype.componentDidMount=function(){this.loadCollection(this.context.selectedRepo)},t.prototype.render=function(){var e,t,n=this,o=this.state,r=o.params,c=o.collection,u=this.props.match.params;if(!c)return a.createElement(l.z,null);var f=u.type||"docs",b=u.name||u.page||null;if("docs"===f&&b){if(c.latest_version.docs_blob.documentation_files){var h=c.latest_version.docs_blob.documentation_files.find((function(e){return Object(m.h)(e.name)===u.page}));h&&(e=h.html)}}else if(b){if(c.latest_version.docs_blob.contents){var y=c.latest_version.docs_blob.contents.find((function(e){return e.content_type===f&&e.content_name===b}));y&&("role"===f?e=y.readme_html:t=y)}}else c.latest_version.docs_blob.collection_readme&&(e=c.latest_version.docs_blob.collection_readme.html);var g=[d.c,{url:Object(d.b)(d.a.namespaceByRepo,{namespace:c.namespace.name,repo:this.context.selectedRepo}),name:c.namespace.name},{url:Object(d.b)(d.a.collectionByRepo,{namespace:c.namespace.name,collection:c.name,repo:this.context.selectedRepo}),name:c.name},{name:"Documentation"}];return a.createElement(a.Fragment,null,a.createElement(l.j,{collection:c,params:r,updateParams:function(e){return n.updateParams(e,(function(){return n.loadCollection(n.context.selectedRepo,!0)}))},breadcrumbs:g,activeTab:"documentation",className:"header",repo:this.context.selectedRepo}),a.createElement(l.C,{className:"main"},a.createElement("section",{className:"docs-container"},a.createElement(l.U,{className:"sidebar",namespace:c.namespace.name,collection:c.name,docs_blob:c.latest_version.docs_blob,selectedName:b,selectedType:f,params:r,updateParams:function(e){return n.updateParams(e)},searchBarRef:this.searchBarRef}),a.createElement("div",{className:"body docs pf-c-content",ref:this.docsRef},e||t?e?a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}):a.createElement(p.RenderPluginDoc,{plugin:t,renderModuleLink:function(e){return n.renderModuleLink(e,c,r,c.latest_version.metadata.contents)},renderDocLink:function(e,t){return n.renderDocLink(e,t,c,r)},renderTableOfContentsLink:function(e,t){return a.createElement(i.a,{to:"#"+t},e)},renderWarning:function(e){return a.createElement(s.a,{isInline:!0,variant:"warning",title:e})}}):this.renderNotFound(c.name)))))},t.prototype.renderDocLink=function(e,t,n,o){return t&&t.startsWith("http")?a.createElement("a",{href:t,target:"_blank"},e):t?a.createElement(r.b,{to:Object(d.b)(d.a.collectionDocsPageByRepo,{namespace:n.namespace.name,collection:n.name,page:Object(m.h)(t),repo:this.context.selectedRepo},o)},e):null},t.prototype.renderModuleLink=function(e,t,n,o){return o.find((function(t){return"module"===t.content_type&&t.name===e}))?a.createElement(r.b,{to:Object(d.b)(d.a.collectionContentDocsByRepo,{namespace:t.namespace.name,collection:t.name,type:"module",name:e,repo:this.context.selectedRepo},n)},e):e},t.prototype.renderNotFound=function(e){return a.createElement(l.q,{title:"Not found",description:"The file is not available for this version of "+e,icon:b.a})},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return u.a},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return m.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t}(a.Component);t.default=Object(c.g)(y),y.contextType=f.a},769:function(e,t,n){"use strict";n.r(t);var o,a=n(0),r=n(35),c=n(23),i=n(236),s=n(744),l=n(20),p=n(8),u=n(53),m=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(t){var n=e.call(this,t)||this,o=l.a.parseParamString(t.location.search);return n.state={collection:void 0,params:o,loadingImports:!0,selectedImportDetail:void 0,selectedImport:void 0,apiError:void 0},n}return m(t,e),t.prototype.componentDidMount=function(){this.loadData()},t.prototype.render=function(){var e=this,t=this.state,n=t.collection,o=t.params,r=t.loadingImports,c=t.selectedImportDetail,s=t.selectedImport,l=t.apiError;if(!n)return a.createElement(i.z,null);var u=[p.c,{url:Object(p.b)(p.a.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:Object(p.b)(p.a.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:"Import log"}];return a.createElement(a.Fragment,null,a.createElement(i.j,{collection:n,params:o,updateParams:function(t){return e.updateParams(t,(function(){return e.loadData(!0)}))},breadcrumbs:u,activeTab:"import-log",repo:this.context.selectedRepo}),a.createElement(i.C,null,a.createElement("section",{className:"body"},a.createElement(i.v,{loading:r,task:c,followMessages:!1,setFollowMessages:function(e){return null},selectedImport:s,apiError:l,hideCollectionName:!0}))))},t.prototype.loadData=function(e){var t=this;void 0===e&&(e=!1);var n="Could not load import log";this.setState({loadingImports:!0},(function(){t.loadCollection(t.context.selectedRepo,e,(function(){c.f.list({namespace:t.state.collection.namespace.name,name:t.state.collection.name,version:t.state.collection.latest_version.version,sort:"-created"}).then((function(e){var o=e.data.data[0];c.f.get(o.id).then((function(e){t.setState({apiError:void 0,loadingImports:!1,selectedImport:o,selectedImportDetail:e.data})})).catch((function(e){t.setState({apiError:n,loadingImports:!1})}))})).catch((function(e){t.setState({apiError:n,loadingImports:!1})}))}))}))},Object.defineProperty(t.prototype,"loadCollection",{get:function(){return s.a},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updateParams",{get:function(){return l.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t}(a.Component);t.default=Object(r.g)(d),d.contextType=u.a}}]);
//# sourceMappingURL=collection_detail.75d0bdc8f45ba39bf3e9.js.map