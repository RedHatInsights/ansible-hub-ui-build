(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{759:function(e,t,a){(e.exports=a(10)(!1)).push([e.i,".upload-collection .file-error-messages{color:#c00}.upload-collection .upload-file{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.upload-collection .upload-file-label{display:inline-block;cursor:pointer;width:100%;font-weight:normal}.upload-collection .upload-file-label .upload-box{display:flex;border-style:solid;border-width:thin;width:100%;border-radius:3px}.upload-collection .upload-file-label .upload-box .upload-button,.upload-collection .upload-file-label .upload-box .upload-text{padding:5px}.upload-collection .upload-file-label .upload-box .upload-button{border-right:thin solid;padding-left:10px;padding-right:10px}.upload-collection .upload-file-label .upload-box .upload-button:hover{color:#fff;background-color:gray}.upload-collection .upload-file-label .upload-box .upload-text{position:relative;width:100%}.upload-collection .upload-file-label .upload-box .loading-bar{position:absolute;height:3px;background-color:#5bb75b;bottom:0px;left:0px}",""])},770:function(e,t,a){var n=a(759);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},r=a(12)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(759,(function(){var t=a(759);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)})),e.hot.dispose((function(){r()}))},774:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a(715),s=a(699),l=a(35),i=a(241),c=a(23),p=a(669),u=a(722),d=a(102),m=a(8),f=a(16),h=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),y=function(){return(y=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},g=function(e){function t(t){var a=e.call(this,t)||this,n=f.a.parseParamString(t.location.search);return n.tab||(n.tab="edit details"),a.state={alerts:[],namespace:null,userId:"",newLinkURL:"",newLinkName:"",errorMessages:{},saving:!1,redirect:null,unsavedData:!1,params:n,unauthorized:!1},a}return h(t,e),t.prototype.componentDidMount=function(){var e=this;c.a.getUser().then((function(t){e.setState({userId:t.account_number},(function(){return e.loadNamespace()}))}))},t.prototype.render=function(){var e=this,t=this.state,a=t.namespace,n=t.errorMessages,c=t.saving,f=t.redirect,h=t.params,y=t.userId,g=t.unauthorized;return a?f?o.createElement(l.c,{to:f}):o.createElement(o.Fragment,null,o.createElement(i.J,{namespace:a,breadcrumbs:[m.c,{name:a.name,url:Object(m.b)(m.a.myCollections,{namespace:a.name})},{name:"Edit"}],tabs:["Edit details","Edit resources"],params:h,updateParams:function(t){return e.updateParams(t)}}),o.createElement(i.b,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),g?o.createElement(i.s,null):o.createElement(i.B,null,o.createElement(r.a,{className:"body"},"edit details"===h.tab.toLowerCase()?o.createElement(i.E,{userId:y,namespace:a,errorMessages:n,updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})}}):o.createElement(i.O,{updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})},namespace:a}),o.createElement(p.a,null,o.createElement(u.a,null,o.createElement(d.a,{variant:"primary",onClick:function(){return e.saveNamespace()}},"Save"),o.createElement(d.a,{variant:"secondary",onClick:function(){return e.cancel()}},"Cancel"),c?o.createElement(s.a,null):null),this.state.unsavedData?o.createElement("div",{style:{color:"red"}},"You have unsaved changes"):null)))):null},Object.defineProperty(t.prototype,"updateParams",{get:function(){return f.a.updateParamsMixin()},enumerable:!1,configurable:!0}),t.prototype.loadNamespace=function(){var e=this;c.h.get(this.props.match.params.namespace).then((function(t){t.data.links.push({name:"",url:""}),e.setState({namespace:t.data})})).catch((function(t){e.setState({unauthorized:!0})}))},t.prototype.saveNamespace=function(){var e=this;this.setState({saving:!0},(function(){for(var t=y({},e.state.namespace),a=[],n=0,o=t.links;n<o.length;n++){var r=o[n];""===r.url&&""===r.name||a.push(r)}t.links=a,c.h.update(e.state.namespace.name,t).then((function(t){e.setState({namespace:t.data,errorMessages:{},saving:!1,unsavedData:!1,redirect:Object(m.b)(m.a.myCollections,{namespace:e.state.namespace.name})})})).catch((function(t){var a=t.response;400===a.status?e.setState({errorMessages:Object(f.g)(t),saving:!1}):404===a.status&&e.setState({alerts:e.state.alerts.concat({variant:"danger",title:"API Error: "+t.response.status,description:"You don't have permissions to update this namespace."}),saving:!1})}))}))},Object.defineProperty(t.prototype,"closeAlert",{get:function(){return Object(i.Z)("alerts")},enumerable:!1,configurable:!0}),t.prototype.cancel=function(){this.setState({redirect:Object(m.b)(m.a.myCollections,{namespace:this.state.namespace.name})})},t}(o.Component);t.default=Object(l.o)(g);try{editnamespace.displayName="editnamespace",editnamespace.__docgenInfo={description:"",displayName:"editnamespace",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<EditNamespace>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/edit-namespace/edit-namespace.tsx#editnamespace"]={docgenInfo:editnamespace.__docgenInfo,name:"editnamespace",path:"src/containers/edit-namespace/edit-namespace.tsx#editnamespace"})}catch(e){}},787:function(e,t,a){"use strict";a.r(t),a.d(t,"NamespaceDetail",(function(){return N}));var n,o,r=a(0),s=a(35),l=a(32),i=a(715),c=a(748),p=a(720),u=a(102),d=a(745),m=a(676),f=a(236),h=a(23),y=a(241),g=(a(770),a(135)),b=a.n(g),v=a(741),E=a(739),C=a(740),S=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)});!function(e){e.uploading="uploading",e.waiting="waiting"}(o||(o={}));var O=function(e){function t(t){var a=e.call(this,t)||this;return a.acceptedFileTypes=["application/x-gzip","application/gzip"],a.COLLECTION_NAME_REGEX=/[0-9a-z_]+\-[0-9a-z_]+\-[0-9A-Za-z.+-]+/,a.state={file:void 0,errors:"",uploadProgress:0,uploadStatus:o.waiting},a}return S(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.isOpen,n=t.collection,s=this.state,l=s.file,i=s.errors,c=s.uploadProgress,p=s.uploadStatus;return r.createElement(v.a,{variant:"small",title:n?"New version of "+n.name:"New collection",isOpen:a,onClose:function(){return e.handleClose()},actions:[r.createElement(u.a,{key:"confirm",variant:"primary",onClick:function(){return e.saveFile()},isDisabled:!this.canUpload()},"Upload"),r.createElement(u.a,{key:"cancel",variant:"secondary",onClick:function(){return e.handleClose()}},"Cancel")]},r.createElement("div",{className:"upload-collection"},r.createElement("form",null,r.createElement("input",{disabled:p!==o.waiting,className:"upload-file",type:"file",id:"collection-widget",onChange:function(t){return e.handleFileUpload(t.target.files)}}),r.createElement("label",{className:"upload-file-label",htmlFor:"collection-widget"},r.createElement("div",{className:"upload-box"},r.createElement("div",{className:"upload-button"},this.renderFileIcon()),r.createElement("div",{className:"upload-text"},null!=l?l.name:"Select file",r.createElement("div",{className:"loading-bar",style:{width:100*c+"%"}}))))),i?r.createElement("span",{className:"file-error-messages"},r.createElement("i",{className:"pficon-error-circle-o"})," ",i):null))},t.prototype.canUpload=function(){return!this.state.errors&&(this.state.uploadStatus===o.waiting&&!!this.state.file)},t.prototype.renderFileIcon=function(){switch(this.state.uploadStatus){case o.uploading:return r.createElement(E.a,{className:"fa-spin"});default:return r.createElement(C.a,null)}},t.prototype.handleFileUpload=function(e){var t=e[0],a=this.props.collection;e.length>1?this.setState({errors:"Please select no more than one file."}):this.acceptedFileTypes.includes(t.type)?this.COLLECTION_NAME_REGEX.test(t.name)?a&&a.name!==t.name.split("-")[1]?this.setState({errors:"The collection you have selected doesn't appear to match "+a.name,file:t,uploadProgress:0}):this.props.namespace!=t.name.split("-")[0]?this.setState({errors:"The collection you have selected does not match this namespace.",file:t,uploadProgress:0}):this.setState({errors:"",file:t,uploadProgress:0}):this.setState({errors:"Invalid file name. Collections must be formatted as 'namespace-collection_name-1.0.0'",file:t,uploadProgress:0}):this.setState({errors:"Invalid file format.",file:t,uploadProgress:0})},t.prototype.saveFile=function(){var e=this;this.setState({uploadStatus:o.uploading});var t={file:this.state.file,sha256:""};this.cancelToken=h.b.getCancelToken(),h.b.upload("inbound-"+this.props.namespace,t,(function(t){e.setState({uploadProgress:t.loaded/t.total})}),this.cancelToken).then((function(t){e.props.onUploadSuccess(t)})).catch((function(t){var a="";if(!b.a.isCancel(t))if(t.response.data.errors){for(var n=[],r=0,s=t.response.data.errors;r<s.length;r++){var l=s[r];n.push(l.detail||l.title||l.code||"API error. Status code: "+l.status)}a=n.join(", ")}else a="API error. Status code: "+t.response.status;e.setState({uploadStatus:o.waiting,errors:a})})).finally((function(t){e.cancelToken=null}))},t.prototype.handleClose=function(){var e=this,t=null;this.cancelToken&&this.state.uploadStatus===o.uploading&&(t="Collection upload canceled",this.cancelToken.cancel(t)),this.setState({file:void 0,errors:"",uploadProgress:0,uploadStatus:o.waiting},(function(){return e.props.setOpen(!1,t)}))},t}(r.Component);try{O.displayName="ImportModal",O.__docgenInfo={description:"",displayName:"ImportModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(isOpen: any, warnings?: any) => void"}},onUploadSuccess:{defaultValue:null,description:"",name:"onUploadSuccess",required:!0,type:{name:"(result: any) => void"}},collection:{defaultValue:null,description:"",name:"collection",required:!1,type:{name:"any"}},namespace:{defaultValue:null,description:"",name:"namespace",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-detail/import-modal/import-modal.tsx#ImportModal"]={docgenInfo:O.__docgenInfo,name:"ImportModal",path:"src/containers/namespace-detail/import-modal/import-modal.tsx#ImportModal"})}catch(e){}var w=a(16),_=a(8),x=a(54),I=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),P=function(){return(P=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},N=function(e){function t(t){var a=e.call(this,t)||this;a.nonAPIParams=["tab"],a.nonQueryStringParams=["namespace"];var n=w.a.parseParamString(t.location.search,["page","page_size"]);return n.namespace=t.match.params.namespace,a.state={collections:[],namespace:null,params:n,redirect:null,itemCount:0,showImportModal:!1,warning:"",updateCollection:null,showControls:!1},a}return I(t,e),t.prototype.componentDidMount=function(){this.loadAll()},t.prototype.render=function(){var e=this,t=this.state,a=t.collections,n=t.namespace,o=t.params,l=t.redirect,m=t.itemCount,f=t.showImportModal,h=t.warning,g=t.updateCollection;if(l)return r.createElement(s.c,{to:l});if(!n)return r.createElement(y.y,null);var b=["Collections"];this.state.showControls&&b.push("CLI Configuration");var v=o.tab||"collections";n.resources&&b.push("Resources");var E=Object(w.e)("inbound-"+n.name),C=0===m&&!Object(w.d)(o,["keywords"]);return r.createElement(r.Fragment,null,r.createElement(O,{isOpen:f,onUploadSuccess:function(t){return e.props.history.push(Object(_.b)(_.a.myImports,{},{namespace:n.name}))},setOpen:function(t,a){return e.toggleImportModal(t,a)},collection:g,namespace:n.name}),h?r.createElement(c.a,{style:{position:"fixed",right:"5px",top:"80px",zIndex:300},variant:"warning",title:h,actionClose:r.createElement(p.a,{onClose:function(){return e.setState({warning:""})}})}):null,r.createElement(y.J,{namespace:n,breadcrumbs:[_.c,{name:n.name}],tabs:b,params:o,updateParams:function(t){return e.updateParams(t)},pageControls:this.renderPageControls(),contextSelector:r.createElement(y.N,{selectedRepo:this.context.selectedRepo,path:this.props.match.path,pathParams:{namespace:n.name}})}),r.createElement(y.B,null,"collections"===v.toLowerCase()?C?r.createElement(y.r,{title:"No collections yet",description:"Collections will appear once uploaded",button:this.state.showControls&&r.createElement(u.a,{onClick:function(){return e.setState({showImportModal:!0})}},"Upload collection")}):r.createElement(i.a,{className:"body"},r.createElement(y.k,{updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollections()}))},params:o,collections:a,itemCount:m,showControls:this.state.showControls,handleControlClick:function(t,a){return e.handleCollectionAction(t,a)},repo:this.context.selectedRepo})):null,"cli configuration"===v.toLowerCase()?r.createElement(i.a,{className:"body"},r.createElement("div",null,r.createElement(d.a,{isReadOnly:!0},E),r.createElement("div",null,r.createElement("b",null,"Note:")," Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found"," ",r.createElement("a",{href:"https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client",target:"_blank"},"here"),"."))):null,"resources"===v.toLowerCase()?this.renderResources(n):null))},t.prototype.handleCollectionAction=function(e,t){var a=this,n=this.state.collections.find((function(t){return t.id===e}));switch(t){case"upload":this.setState({updateCollection:n,showImportModal:!0});break;case"deprecate":h.b.setDeprecation(n,!n.deprecated,this.context.selectedRepo).then((function(){return a.loadCollections()})).catch((function(e){a.setState({warning:"API Error: Failed to set deprecation."})}))}},t.prototype.renderResources=function(e){return r.createElement("div",{className:"pf-c-content preview"},r.createElement(f,{source:e.resources}))},t.prototype.loadCollections=function(){var e=this;h.b.list(P({},w.a.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,itemCount:t.data.meta.count})}))},t.prototype.loadAll=function(){var e=this;Promise.all([h.b.list(P({},w.a.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo),h.j.get(this.props.match.params.namespace),h.h.get(this.props.match.params.namespace).catch((function(e){return e.response&&404===e.response.status?null:Promise.reject(e)}))]).then((function(t){e.setState({collections:t[0].data.data,itemCount:t[0].data.meta.count,namespace:t[1].data,showControls:!!t[2]})})).catch((function(t){e.setState({redirect:_.a.notFound})}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return w.a.updateParamsMixin(this.nonQueryStringParams)},enumerable:!1,configurable:!0}),t.prototype.renderPageControls=function(){var e=this,t=this.state.collections;return this.state.showControls?r.createElement("div",{style:{display:"flex",alignItems:"center"}}," ",0!==t.length&&r.createElement(u.a,{onClick:function(){return e.setState({showImportModal:!0})}},"Upload collection"),r.createElement(y.R,{items:[r.createElement(m.a,{key:"1",component:r.createElement(l.Link,{to:Object(_.b)(_.a.editNamespace,{namespace:this.state.namespace.name})},"Edit namespace")}),r.createElement(m.a,{key:"2",component:r.createElement(l.Link,{to:Object(_.b)(_.a.myImports,{},{namespace:this.state.namespace.name})},"Imports")})]})):r.createElement("div",{style:{display:"flex",alignItems:"center"}})},t.prototype.toggleImportModal=function(e,t){var a={showImportModal:e};t&&(a.warning=t),e||(a.updateCollection=null),this.setState(a)},t}(r.Component);N.contextType=x.a;t.default=Object(s.o)(N);try{N.displayName="NamespaceDetail",N.__docgenInfo={description:"",displayName:"NamespaceDetail",props:{selectedRepo:{defaultValue:null,description:"",name:"selectedRepo",required:!0,type:{name:"string"}},history:{defaultValue:null,description:"",name:"history",required:!0,type:{name:"History<unknown>"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"Location<unknown>"}},match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"match<{}>"}},staticContext:{defaultValue:null,description:"",name:"staticContext",required:!1,type:{name:"StaticContext"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-detail/namespace-detail.tsx#NamespaceDetail"]={docgenInfo:N.__docgenInfo,name:"NamespaceDetail",path:"src/containers/namespace-detail/namespace-detail.tsx#NamespaceDetail"})}catch(e){}try{namespacedetail.displayName="namespacedetail",namespacedetail.__docgenInfo={description:"",displayName:"namespacedetail",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<NamespaceDetail>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-detail/namespace-detail.tsx#namespacedetail"]={docgenInfo:namespacedetail.__docgenInfo,name:"namespacedetail",path:"src/containers/namespace-detail/namespace-detail.tsx#namespacedetail"})}catch(e){}}}]);
//# sourceMappingURL=namespace_detail.86fae20b09cdd99199e1.js.map