"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[33],{35053:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(4942),r=a(15671),o=a(43144),s=a(60136),l=a(6215),c=a(61120),i=a(25221),u=a(67294),m=a(5977),p=a(47012),d=a(34903),f=a(83115),h=a(68809),g=a(47173),v=a(2372),y=a(61647),E=a(18944);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var S=function(e){(0,s.Z)(w,e);var t,a,S=(t=w,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.Z)(t);if(a){var r=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function w(e){var t;(0,r.Z)(this,w),t=S.call(this,e);var a=E.q6.parseParamString(e.location.search);return a.tab||(a.tab="edit-details"),t.state={alerts:[],namespace:null,userId:"",newLinkURL:"",newLinkName:"",errorMessages:{},saving:!1,redirect:null,unsavedData:!1,params:a,unauthorized:!1},t}return(0,o.Z)(w,[{key:"componentDidMount",value:function(){var e=this;d.TE.getUser().then((function(t){e.setState({userId:t.account_number},(function(){return e.loadNamespace()}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.namespace,n=t.errorMessages,r=t.saving,o=t.redirect,s=t.params,l=t.userId,c=t.unauthorized,d=[{id:"edit-details",name:i.ag._("Edit details")},{id:"edit-resources",name:i.ag._("Edit resources")}];return a?o?u.createElement(m.l_,{push:!0,to:o}):u.createElement(u.Fragment,null,u.createElement(p.z7,{namespace:a,breadcrumbs:[y.Th,{name:a.name,url:(0,y.dI)(y.nB.myCollections,{namespace:a.name})},{name:i.ag._("Edit")}],tabs:d,params:s,updateParams:function(t){return e.updateParams(t)}}),u.createElement(p.UW,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),c?u.createElement(p.iA,null):u.createElement(p.or,null,u.createElement("section",{className:"body"},"edit-details"===s.tab.toLowerCase()?u.createElement(p.yl,{userId:l,namespace:a,errorMessages:n,updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})}}):u.createElement(p.l6,{updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})},namespace:a}),u.createElement(f.l,null,u.createElement(h.W,null,u.createElement(g.zx,{variant:"primary",onClick:function(){return e.saveNamespace()}},i.ag._("Save")),u.createElement(g.zx,{variant:"secondary",onClick:function(){return e.cancel()}},i.ag._("Cancel")),r?u.createElement(v.$,null):null),this.state.unsavedData?u.createElement("div",{style:{color:"red"}},i.ag._("You have unsaved changes")):null)))):null}},{key:"updateParams",get:function(){return E.q6.updateParamsMixin()}},{key:"loadNamespace",value:function(){var e=this;d.V$.get(this.props.match.params.namespace).then((function(t){t.data.links.push({name:"",url:""}),e.setState({namespace:t.data})})).catch((function(t){e.setState({unauthorized:!0})}))}},{key:"saveNamespace",value:function(){var e=this;this.setState({saving:!0},(function(){var t,a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.state.namespace),r=[],o=function(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?b(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw o}}}}(a.links);try{for(o.s();!(t=o.n()).done;){var s=t.value;""===s.url&&""===s.name||r.push(s)}}catch(e){o.e(e)}finally{o.f()}a.links=r,d.V$.update(e.state.namespace.name,a).then((function(t){e.setState({namespace:t.data,errorMessages:{},saving:!1,unsavedData:!1,redirect:(0,y.dI)(y.nB.myCollections,{namespace:e.state.namespace.name})})})).catch((function(t){var a=t.response;400===a.status?e.setState({errorMessages:(0,E.TQ)(t),saving:!1}):404===a.status&&e.setState({alerts:e.state.alerts.concat({variant:"danger",title:i.ag._("API Error: {0}",{0:t.response.status}),description:i.ag._("You don't have permissions to update this namespace.")}),saving:!1})}))}))}},{key:"closeAlert",get:function(){return(0,p.NQ)("alerts")}},{key:"cancel",value:function(){this.setState({redirect:(0,y.dI)(y.nB.myCollections,{namespace:this.state.namespace.name})})}}]),w}(u.Component);const w=(0,m.EN)(S)},2716:(e,t,a)=>{a.r(t),a.d(t,{NamespaceDetail:()=>z,default:()=>B});var n,r=a(42982),o=a(15671),s=a(43144),l=a(97326),c=a(60136),i=a(6215),u=a(61120),m=a(4942),p=a(48222),d=a(25221),f=a(67294),h=a(73727),g=a(5977),v=a(68340),y=a(93149),E=a(87116),b=a(56715),C=a(47173),S=a(84457),w=a(35224),P=a(54681),_=a(34903),O=a(47012),k=a(9669),N=a.n(k),I=a(8745),A=a(16074),Z=a(4861);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}!function(e){e.uploading="uploading",e.waiting="waiting"}(n||(n={}));var R=function(e){(0,c.Z)(p,e);var t,a,r=(t=p,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(a){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function p(e){var t;return(0,o.Z)(this,p),t=r.call(this,e),(0,m.Z)((0,l.Z)(t),"acceptedFileTypes",["application/x-gzip","application/gzip"]),(0,m.Z)((0,l.Z)(t),"COLLECTION_NAME_REGEX",/[0-9a-z_]+\-[0-9a-z_]+\-[0-9A-Za-z.+-]+/),t.state={file:void 0,errors:"",uploadProgress:0,uploadStatus:n.waiting},t}return(0,s.Z)(p,[{key:"render",value:function(){var e=this,t=this.props,a=t.isOpen,r=t.collection,o=this.state,s=o.file,l=o.errors,c=o.uploadProgress,i=o.uploadStatus;return f.createElement(I.u,{variant:"small",title:r?d.ag._("New version of {0}",{0:r.name}):d.ag._("New collection"),isOpen:a,onClose:function(){return e.handleClose()},actions:[f.createElement(C.zx,{key:"confirm",variant:"primary",onClick:function(){return e.saveFile()},isDisabled:!this.canUpload()},d.ag._("Upload")),f.createElement(C.zx,{key:"cancel",variant:"secondary",onClick:function(){return e.handleClose()}},d.ag._("Cancel"))]},f.createElement("div",{className:"upload-collection"},f.createElement("form",null,f.createElement("input",{disabled:i!==n.waiting,className:"upload-file",type:"file",id:"collection-widget",onChange:function(t){return e.handleFileUpload(t.target.files)}}),f.createElement("label",{className:"upload-file-label",htmlFor:"collection-widget"},f.createElement("div",{className:"upload-box"},f.createElement("div",{className:"upload-button"},this.renderFileIcon()),f.createElement("div",{className:"upload-text"},null!=s?s.name:d.ag._("Select file"),f.createElement("div",{className:"loading-bar",style:{width:100*c+"%"}}))))),l?f.createElement("span",{className:"file-error-messages"},f.createElement("i",{className:"pficon-error-circle-o"})," ",l):null))}},{key:"canUpload",value:function(){return!this.state.errors&&this.state.uploadStatus===n.waiting&&!!this.state.file}},{key:"renderFileIcon",value:function(){switch(this.state.uploadStatus){case n.uploading:return f.createElement(A.L4,{className:"fa-spin"});default:return f.createElement(Z.ry,null)}}},{key:"handleFileUpload",value:function(e){var t=e[0],a=this.props.collection;e.length>1?this.setState({errors:d.ag._("Please select no more than one file.")}):this.acceptedFileTypes.includes(t.type)?this.COLLECTION_NAME_REGEX.test(t.name)?a&&a.name!==t.name.split("-")[1]?this.setState({errors:d.ag._("The collection you have selected doesn't appear to match {0}",{0:a.name}),file:t,uploadProgress:0}):this.props.namespace!=t.name.split("-")[0]?this.setState({errors:d.ag._("The collection you have selected does not match this namespace."),file:t,uploadProgress:0}):this.setState({errors:"",file:t,uploadProgress:0}):this.setState({errors:d.ag._("Invalid file name. Collections must be formatted as 'namespace-collection_name-1.0.0'"),file:t,uploadProgress:0}):this.setState({errors:d.ag._("Invalid file format."),file:t,uploadProgress:0})}},{key:"saveFile",value:function(){var e=this;this.setState({uploadStatus:n.uploading});var t={file:this.state.file,sha256:""};this.cancelToken=_.gu.getCancelToken(),_.gu.upload("inbound-"+this.props.namespace,t,(function(t){e.setState({uploadProgress:t.loaded/t.total})}),this.cancelToken).then((function(t){e.props.onUploadSuccess(t)})).catch((function(t){var a="";if(!N().isCancel(t))if(t.response.data.errors){var r,o=[],s=function(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return x(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?x(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw o}}}}(t.response.data.errors);try{for(s.s();!(r=s.n()).done;){var l=r.value;o.push(l.detail||l.title||l.code||d.ag._("API error. Status code: {0}",{0:l.status}))}}catch(l){s.e(l)}finally{s.f()}a=o.join(", ")}else a=d.ag._("API error. Status code: {0}",{0:t.response.status});e.setState({uploadStatus:n.waiting,errors:a})})).finally((function(){e.cancelToken=null}))}},{key:"handleClose",value:function(){var e=this,t=null;this.cancelToken&&this.state.uploadStatus===n.uploading&&(t=d.ag._("Collection upload canceled"),this.cancelToken.cancel(t)),this.setState({file:void 0,errors:"",uploadProgress:0,uploadStatus:n.waiting},(function(){return e.props.setOpen(!1,t)}))}}]),p}(f.Component),j=a(18944),D=a(42807),M=a(61647),T=a(61542);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){(0,m.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z=function(e){(0,c.Z)(k,e);var t,a,n=(t=k,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(a){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function k(e){var t;(0,o.Z)(this,k),t=n.call(this,e),(0,m.Z)((0,l.Z)(t),"nonAPIParams",["tab"]),(0,m.Z)((0,l.Z)(t),"nonQueryStringParams",["namespace"]),(0,m.Z)((0,l.Z)(t),"deleteNamespace",(function(){_.jZ.delete(t.state.namespace.name).then((function(){t.setState({redirect:(0,M.dI)(M.nB.namespaces,{}),confirmDelete:!1}),t.context.setAlerts([].concat((0,r.Z)(t.context.alerts),[{variant:"success",title:d.ag._("Successfully deleted namespace.")}]))})).catch((function(e){t.setState({alerts:[].concat((0,r.Z)(t.state.alerts),[{variant:"danger",title:d.ag._("Error deleting namespace."),description:e.message}]),isOpenNamespaceModal:!1,confirmDelete:!1})}))})),(0,m.Z)((0,l.Z)(t),"closeModal",(function(){t.setState({isOpenNamespaceModal:!1,confirmDelete:!1})}));var a=j.q6.parseParamString(e.location.search,["page","page_size"]);return a.namespace=e.match.params.namespace,t.state={collections:[],namespace:null,params:a,redirect:null,itemCount:0,showImportModal:!1,warning:"",updateCollection:null,showControls:!1,isOpenNamespaceModal:!1,alerts:[],isNamespaceEmpty:!1,confirmDelete:!1},t}return(0,s.Z)(k,[{key:"componentDidMount",value:function(){this.loadAll(),this.context.alerts&&this.setState({alerts:this.context.alerts})}},{key:"componentWillUnmount",value:function(){this.context.setAlerts([])}},{key:"render",value:function(){var e=this,t=this.state,a=t.collections,n=t.namespace,r=t.params,o=t.redirect,s=t.itemCount,l=t.showImportModal,c=t.warning,i=t.updateCollection,u=t.isOpenNamespaceModal,m=t.confirmDelete;if(o)return f.createElement(g.l_,{push:!0,to:o});if(!n)return f.createElement(O.gO,null);var h=[{id:"collections",name:d.ag._("Collections")}];this.state.showControls&&h.push({id:"cli-configuration",name:d.ag._("CLI Configuration")});var S=r.tab||"collections";n.resources&&h.push({id:"resources",name:d.ag._("Resources")});var w=(0,j.qX)("inbound-"+n.name),P=0===s&&!(0,j.vS)(r,["keywords"]),_=function(t){return e.updateParams(t,(function(){return e.loadCollections()}))},k=["namespace","page","page_size","sort","tab","view_type"];return f.createElement(f.Fragment,null,f.createElement(R,{isOpen:l,onUploadSuccess:function(t){return e.setState({redirect:(0,M.dI)(M.nB.myImports,{},{namespace:n.name})})},setOpen:function(t,a){return e.toggleImportModal(t,a)},collection:i,namespace:n.name}),u&&f.createElement(O.sm,{cancelAction:this.closeModal,confirmAction:this.deleteNamespace,title:d.ag._("Permanently delete namespace?"),confirmButtonTitle:d.ag._("Delete"),isDisabled:!m},f.createElement(f.Fragment,null,f.createElement(v.x,{className:"delete-namespace-modal-message"},f.createElement(p.cC,{id:"Deleting <0>{0}</0> and its data will be lost.",values:{0:n.name},components:{0:f.createElement("b",null)}})),f.createElement(y.X,{isChecked:m,onChange:function(t){return e.setState({confirmDelete:t})},label:d.ag._("I understand that this action cannot be undone."),id:"delete_confirm"}))),f.createElement(O.UW,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),c?f.createElement(E.b,{className:"namespace-warning-alert",variant:"warning",title:c,actionClose:f.createElement(b.g,{onClose:function(){return e.setState({warning:""})}})}):null,f.createElement(O.z7,{namespace:n,breadcrumbs:[M.Th,{name:n.name}],tabs:h,params:r,updateParams:function(t){return e.updateParams(t)},pageControls:this.renderPageControls(),contextSelector:f.createElement(O.e4,{selectedRepo:this.context.selectedRepo,path:this.props.match.path,pathParams:{namespace:n.name}}),filters:"collections"===S.toLowerCase()?f.createElement("div",{className:"toolbar-wrapper namespace-detail"},f.createElement("div",{className:"toolbar"},f.createElement(O.Ls,{ignoredParams:k,params:r,updateParams:_}),f.createElement("div",{className:"pagination-container"},f.createElement(O.tl,{params:r,updateParams:_,count:s,isTop:!0})))):null}),f.createElement(O.or,null,"collections"===S.toLowerCase()?P?f.createElement(O.vv,{title:d.ag._("No collections yet"),description:d.ag._("Collections will appear once uploaded"),button:this.state.showControls&&f.createElement(C.zx,{onClick:function(){return e.setState({showImportModal:!0})}},d.ag._("Upload collection"))}):f.createElement("section",{className:"body"},f.createElement(O.G2,{updateParams:_,params:r,ignoredParams:k,collections:a,itemCount:s,showControls:this.state.showControls,handleControlClick:function(t,a){return e.handleCollectionAction(t,a)},repo:this.context.selectedRepo})):null,"cli-configuration"===S.toLowerCase()?f.createElement("section",{className:"body"},f.createElement("div",null,f.createElement(O.M5,{isReadOnly:!0},w),f.createElement("div",null,f.createElement(p.cC,{id:"<0>Note:</0> Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found <1>here</1>.",components:{0:f.createElement("b",null),1:f.createElement("a",{href:"https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client",target:"_blank"})}})))):null,"resources"===S.toLowerCase()?this.renderResources(n):null))}},{key:"handleCollectionAction",value:function(e,t){var a=this,n=this.state.collections.find((function(t){return t.id===e}));switch(t){case"upload":this.setState({updateCollection:n,showImportModal:!0});break;case"deprecate":_.gu.setDeprecation(n,!n.deprecated,this.context.selectedRepo).then((function(){return a.loadCollections()})).catch((function(e){a.setState({warning:d.ag._("API Error: Failed to set deprecation.")})}))}}},{key:"renderResources",value:function(e){return f.createElement("div",{className:"pf-c-content preview"},f.createElement(P,{source:e.resources}))}},{key:"loadCollections",value:function(){var e=this;_.gu.list(L({},j.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,itemCount:t.data.meta.count})}))}},{key:"loadAll",value:function(){var e=this;Promise.all([_.gu.list(L({},j.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo),_.jZ.get(this.props.match.params.namespace),_.V$.get(this.props.match.params.namespace).catch((function(t){return e.context.user.is_anonymous&&e.context.settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS||t.response&&404===t.response.status?null:Promise.reject(t)}))]).then((function(t){e.setState({collections:t[0].data.data,itemCount:t[0].data.meta.count,namespace:t[1].data,showControls:!!t[2]}),e.loadAllRepos(t[0].data.meta.count)})).catch((function(t){e.setState({redirect:M.nB.notFound})}))}},{key:"loadAllRepos",value:function(e){var t=this,a=Object.keys(D.g.REPOSITORYNAMES).filter((function(e){return e!==t.context.selectedRepo})).map((function(e){return _.gu.list({namespace:t.props.match.params.namespace},e)}));Promise.all(a).then((function(a){return t.setState({isNamespaceEmpty:a.every((function(e){return 0===e.data.meta.count}))&&0===e})})).catch((function(e){return t.setState({alerts:[].concat((0,r.Z)(t.state.alerts),[{variant:"danger",title:"Error loading collection repositories",description:null==e?void 0:e.message}])})}))}},{key:"updateParams",get:function(){return j.q6.updateParamsMixin(this.nonQueryStringParams)}},{key:"renderPageControls",value:function(){var e=this,t=this.state.collections;return this.state.showControls?f.createElement("div",{className:"namespace-page-controls"}," ",0!==t.length&&f.createElement(C.zx,{onClick:function(){return e.setState({showImportModal:!0})}},d.ag._("Upload collection")),f.createElement(O.hu,{items:[f.createElement(S.h,{key:"1",component:f.createElement(h.rU,{to:(0,M.dI)(M.nB.editNamespace,{namespace:this.state.namespace.name})},d.ag._("Edit namespace"))}),f.createElement(f.Fragment,{key:"2"},this.state.isNamespaceEmpty?f.createElement(S.h,{onClick:function(){return e.setState({isOpenNamespaceModal:!0})}},d.ag._("Delete namespace")):f.createElement(w.u,{isVisible:!1,content:f.createElement(p.cC,{id:"Cannot delete namespace until <0/>collections' dependencies have <1/>been deleted",components:{0:f.createElement("br",null),1:f.createElement("br",null)}}),position:"left"},f.createElement(S.h,{isDisabled:!0},d.ag._("Delete namespace")))),f.createElement(S.h,{key:"3",component:f.createElement(h.rU,{to:(0,M.dI)(M.nB.myImports,{},{namespace:this.state.namespace.name})},d.ag._("Imports"))})]})):f.createElement("div",{className:"namespace-page-controls"})}},{key:"toggleImportModal",value:function(e,t){var a={showImportModal:e};t&&(a.warning=t),e||(a.updateCollection=null),this.setState(a)}},{key:"closeAlert",get:function(){return(0,O.NQ)("alerts")}}]),k}(f.Component);z.contextType=T.I;const B=(0,g.EN)(z)}}]);
//# sourceMappingURL=../sourcemaps/namespace_detail.bb55a935f7e70766b070.js.map