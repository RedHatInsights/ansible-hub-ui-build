"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[33],{35053:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var n=a(4942),r=a(42982),s=a(15671),o=a(43144),c=a(60136),l=a(6215),i=a(61120),u=a(48222),m=a(25221),p=a(15691),d=a(34018),f=a(79020),h=a(55477),g=a(94679),v=a(61647),y=a(14953),b=a(61542);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var w=function(e){(0,c.Z)(w,e);var t,a,b=(t=w,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var r=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function w(e){var t;(0,s.Z)(this,w),t=b.call(this,e);var a=y.q6.parseParamString(e.location.search);return a.tab||(a.tab="edit-details"),t.state={loading:!1,alerts:[],namespace:null,userId:"",newLinkURL:"",newLinkName:"",errorMessages:{},saving:!1,redirect:null,unsavedData:!1,params:a,unauthorized:!1},t}return(0,o.Z)(w,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){g.TE.getUser().then((function(t){e.setState({userId:t.account_number},(function(){return e.loadNamespace()}))})).catch((function(t){var a=t.response,n=a.status,s=a.statusText;e.setState({loading:!1,redirect:(0,v.dI)(v.nB.namespaceByRepo,{namespace:e.props.match.params.namespace,repo:e.context.selectedRepo})},(function(){var t;e.context.setAlerts([].concat((0,r.Z)(e.context.alerts),[{variant:"danger",title:m.ag._('Active user profile "{0}" could not be displayed.',{0:null===(t=e.context.user)||void 0===t?void 0:t.username}),description:(0,y.N3)(n,s)}]))}))}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.namespace,n=t.errorMessages,r=t.saving,s=t.redirect,o=t.params,c=t.userId,l=t.unauthorized,i=t.loading,u=[{id:"edit-details",name:m.ag._("Edit details")},{id:"edit-resources",name:m.ag._("Edit resources")}];return s?p.createElement(d.Redirect,{push:!0,to:s}):i?p.createElement(h.AW,null):a?p.createElement(p.Fragment,null,p.createElement(h.z7,{namespace:a,breadcrumbs:[v.Th,{name:a.name,url:(0,v.dI)(v.nB.myCollections,{namespace:a.name})},{name:m.ag._("Edit")}],tabs:u,params:o,updateParams:function(t){return e.updateParams(t)}}),p.createElement(h.UW,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),l?p.createElement(h.iA,null):p.createElement(h.or,null,p.createElement("section",{className:"body"},"edit-details"===o.tab.toLowerCase()?p.createElement(h.yl,{userId:c,namespace:a,errorMessages:n,updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})}}):p.createElement(h.l6,{updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})},namespace:a}),p.createElement(f.Form,null,p.createElement(f.ActionGroup,null,p.createElement(f.Button,{isDisabled:this.isSaveDisabled(),variant:"primary",onClick:function(){return e.saveNamespace()}},m.ag._("Save")),p.createElement(f.Button,{variant:"secondary",onClick:function(){return e.cancel()}},m.ag._("Cancel")),r?p.createElement(f.Spinner,null):null),this.state.unsavedData?p.createElement("div",{style:{color:"red"}},m.ag._("You have unsaved changes")):null)))):null}},{key:"isSaveDisabled",value:function(){return this.state.namespace.links.some((function(e){return"error"==h.yl.validateName(e).validated||"error"==h.yl.validateUrl(e).validated}))}},{key:"updateParams",get:function(){return y.q6.updateParamsMixin()}},{key:"loadNamespace",value:function(){var e=this;g.V$.get(this.props.match.params.namespace).then((function(t){t.data.links.push({name:"",url:""}),e.setState({loading:!1,namespace:t.data})})).catch((function(){e.setState({unauthorized:!0,loading:!1})}))}},{key:"saveNamespace",value:function(){var e=this;this.setState({saving:!0},(function(){var t,a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.state.namespace),s=[],o=function(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?E(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw s}}}}(a.links);try{for(o.s();!(t=o.n()).done;){var c=t.value;""===c.url&&""===c.name||s.push(c)}}catch(e){o.e(e)}finally{o.f()}a.links=s,g.V$.update(e.state.namespace.name,a).then((function(t){e.setState({namespace:t.data,errorMessages:{},saving:!1,unsavedData:!1,redirect:(0,v.dI)(v.nB.myCollections,{namespace:e.state.namespace.name})},(function(){return e.context.setAlerts([].concat((0,r.Z)(e.context.alerts),[{variant:"success",title:p.createElement(u.cC,{id:'Saved changes to namespace "{0}".',values:{0:e.state.namespace.name}})}]))}))})).catch((function(t){var a=t.response;400===a.status?e.setState({errorMessages:(0,y.TQ)(t),saving:!1}):404===a.status&&e.setState({alerts:e.state.alerts.concat({variant:"danger",title:m.ag._('Changes to namespace "{0}" could not be saved.',{0:e.state.namespace.name}),description:(0,y.N3)(a.status,a.statusText)}),saving:!1})}))}))}},{key:"closeAlert",get:function(){return(0,h.NQ)("alerts")}},{key:"cancel",value:function(){this.setState({redirect:(0,v.dI)(v.nB.myCollections,{namespace:this.state.namespace.name})})}}]),w}(p.Component);w.contextType=b.I;const S=(0,d.withRouter)(w)},97429:(e,t,a)=>{a.r(t),a.d(t,{NamespaceDetail:()=>N,default:()=>k});var n=a(42982),r=a(15671),s=a(43144),o=a(97326),c=a(60136),l=a(6215),i=a(61120),u=a(4942),m=a(48222),p=a(25221),d=a(15691),f=a(34018),h=a(79020),g=a(15265),v=a(10298),y=a(94679),b=a(55477),E=a(14953),C=a(42807),w=a(61647),S=a(61542);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){(0,u.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(e){(0,c.Z)(P,e);var t,a,S=(t=P,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var r=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function P(e){var t;(0,r.Z)(this,P),t=S.call(this,e),(0,u.Z)((0,o.Z)(t),"nonAPIParams",["tab"]),(0,u.Z)((0,o.Z)(t),"nonQueryStringParams",["namespace"]),(0,u.Z)((0,o.Z)(t),"deleteNamespace",(function(){var e=t.state.namespace.name;t.setState({isNamespacePending:!0},(function(){return y.jZ.delete(e).then((function(){t.setState({redirect:(0,w.dI)(w.Th.url,{}),confirmDelete:!1,isNamespacePending:!1}),t.context.setAlerts([].concat((0,n.Z)(t.context.alerts),[{variant:"success",title:d.createElement(m.cC,{id:'Namespace "{name}" has been successfully deleted.',values:{name:e}})}]))})).catch((function(a){var r=a.response,s=r.status,o=r.statusText;t.setState({isOpenNamespaceModal:!1,confirmDelete:!1,isNamespacePending:!1},(function(){t.setState({alerts:[].concat((0,n.Z)(t.state.alerts),[{variant:"danger",title:p.ag._('Namespace "{name}" could not be deleted.',{name:e}),description:(0,E.N3)(s,o)}])})}))}))}))})),(0,u.Z)((0,o.Z)(t),"closeModal",(function(){t.setState({isOpenNamespaceModal:!1,confirmDelete:!1})}));var a=E.q6.parseParamString(e.location.search,["page","page_size"]);return a.namespace=e.match.params.namespace,t.state={collections:[],namespace:null,params:a,redirect:null,itemCount:0,showImportModal:!1,warning:"",updateCollection:null,showControls:!1,isOpenNamespaceModal:!1,isNamespaceEmpty:!1,confirmDelete:!1,isNamespacePending:!1,alerts:[]},t}return(0,s.Z)(P,[{key:"componentDidMount",value:function(){this.loadAll(),this.setState({alerts:this.context.alerts||[]})}},{key:"componentWillUnmount",value:function(){this.context.setAlerts([])}},{key:"render",value:function(){var e=this,t=this.state,a=t.collections,n=t.namespace,r=t.params,s=t.redirect,o=t.itemCount,c=t.showImportModal,l=t.warning,i=t.updateCollection,u=t.isOpenNamespaceModal,v=t.confirmDelete,y=t.isNamespacePending;if(s)return d.createElement(f.Redirect,{push:!0,to:s});if(!n)return d.createElement(b.gO,null);var C=[{id:"collections",name:p.ag._("Collections")}];this.state.showControls&&C.push({id:"cli-configuration",name:p.ag._("CLI configuration")});var S=r.tab||"collections";n.resources&&C.push({id:"resources",name:p.ag._("Resources")});var P=(0,E.qX)("inbound-"+n.name),O=0===o&&!(0,E.vS)(r,["keywords"]),N=function(t){return e.updateParams(t,(function(){return e.loadCollections()}))},k=["namespace","page","page_size","sort","tab","view_type"];return d.createElement(d.Fragment,null,d.createElement(b.UW,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),d.createElement(b.ZO,{isOpen:c,onUploadSuccess:function(){return e.setState({redirect:(0,w.dI)(w.nB.myImports,{},{namespace:n.name})})},setOpen:function(t,a){return e.toggleImportModal(t,a)},collection:i,namespace:n.name}),u&&d.createElement(b.pf,{spinner:y,cancelAction:this.closeModal,deleteAction:this.deleteNamespace,title:p.ag._("Delete namespace?"),isDisabled:!v||y},d.createElement(d.Fragment,null,d.createElement(h.Text,{className:"delete-namespace-modal-message"},d.createElement(m.cC,{id:"Deleting <0>{0}</0> and its data will be lost.",values:{0:n.name},components:{0:d.createElement("b",null)}})),d.createElement(h.Checkbox,{isChecked:v,onChange:function(t){return e.setState({confirmDelete:t})},label:p.ag._("I understand that this action cannot be undone."),id:"delete_confirm"}))),l?d.createElement(h.Alert,{className:"hub-c-alert-namespace",variant:"warning",title:l,actionClose:d.createElement(h.AlertActionCloseButton,{onClose:function(){return e.setState({warning:""})}})}):null,d.createElement(b.z7,{namespace:n,breadcrumbs:[w.Th,{name:n.name}],tabs:C,params:r,updateParams:function(t){return e.updateParams(t)},pageControls:this.renderPageControls(),contextSelector:d.createElement(b.e4,{selectedRepo:this.context.selectedRepo,path:this.props.match.path,pathParams:{namespace:n.name}}),filters:"collections"===S.toLowerCase()?d.createElement("div",{className:"hub-toolbar-wrapper namespace-detail"},d.createElement("div",{className:"toolbar"},d.createElement(b.Ls,{ignoredParams:k,params:r,updateParams:N}),d.createElement("div",{className:"hub-pagination-container"},d.createElement(b.tl,{params:r,updateParams:N,count:o,isTop:!0})))):null}),d.createElement(b.or,null,"collections"===S.toLowerCase()?O?d.createElement(b.vv,{title:p.ag._("No collections yet"),description:p.ag._("Collections will appear once uploaded"),button:this.state.showControls&&d.createElement(h.Button,{onClick:function(){return e.setState({showImportModal:!0})}},p.ag._("Upload collection"))}):d.createElement("section",{className:"body"},d.createElement(b.G2,{updateParams:N,params:r,ignoredParams:k,collections:a,itemCount:o,showControls:this.state.showControls,handleControlClick:function(t,a){return e.handleCollectionAction(t,a)},repo:this.context.selectedRepo})):null,"cli-configuration"===S.toLowerCase()?d.createElement("section",{className:"body"},d.createElement("div",null,d.createElement("div",null,d.createElement(m.cC,{id:"<0>Note:</0> Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found <1>here</1><2> </2><3/>.",components:{0:d.createElement("b",null),1:d.createElement("a",{href:"https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client",target:"_blank",rel:"noreferrer"}),2:d.createElement("span",null),3:d.createElement(g.LA,null)}})),d.createElement(b.M5,{isReadOnly:!0},P))):null,"resources"===S.toLowerCase()?this.renderResources(n):null))}},{key:"handleCollectionAction",value:function(e,t){var a=this,n=this.state.collections.find((function(t){return t.id===e}));switch(t){case"upload":this.setState({updateCollection:n,showImportModal:!0});break;case"deprecate":y.gu.setDeprecation(n,!n.deprecated,this.context.selectedRepo).then((function(){return a.loadCollections()})).catch((function(){a.setState({warning:p.ag._("API Error: Failed to set deprecation.")})}))}}},{key:"renderResources",value:function(e){return d.createElement("div",{className:"pf-c-content preview"},d.createElement(v.D,null,e.resources))}},{key:"loadCollections",value:function(){var e=this;y.gu.list(O({},E.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,itemCount:t.data.meta.count})}))}},{key:"loadAll",value:function(){var e=this;Promise.all([y.gu.list(O({},E.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo),y.jZ.get(this.props.match.params.namespace),y.V$.get(this.props.match.params.namespace).catch((function(t){return e.context.user.is_anonymous&&e.context.settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS||t.response&&404===t.response.status?null:Promise.reject(t)}))]).then((function(t){e.setState({collections:t[0].data.data,itemCount:t[0].data.meta.count,namespace:t[1].data,showControls:!!t[2]}),e.loadAllRepos(t[0].data.meta.count)})).catch((function(){e.setState({redirect:w.nB.notFound})}))}},{key:"loadAllRepos",value:function(e){var t=this,a=Object.keys(C.g.REPOSITORYNAMES).filter((function(e){return e!==t.context.selectedRepo})).map((function(e){return y.gu.list({namespace:t.props.match.params.namespace},e)}));Promise.all(a).then((function(a){return t.setState({isNamespaceEmpty:a.every((function(e){return 0===e.data.meta.count}))&&0===e})})).catch((function(e){var a=e.response,r=a.status,s=a.statusText;t.setState({alerts:[].concat((0,n.Z)(t.state.alerts),[{variant:"danger",title:p.ag._("Collection repositories could not be displayed."),description:(0,E.N3)(r,s)}])})}))}},{key:"updateParams",get:function(){return E.q6.updateParamsMixin(this.nonQueryStringParams)}},{key:"renderPageControls",value:function(){var e=this,t=this.state.collections,a=[d.createElement(h.DropdownItem,{key:"1",component:d.createElement(f.Link,{to:(0,w.dI)(w.nB.editNamespace,{namespace:this.state.namespace.name})},p.ag._("Edit namespace"))}),this.context.user.model_permissions.delete_namespace&&d.createElement(d.Fragment,{key:"2"},this.state.isNamespaceEmpty?d.createElement(h.DropdownItem,{onClick:function(){return e.setState({isOpenNamespaceModal:!0})}},p.ag._("Delete namespace")):d.createElement(h.Tooltip,{isVisible:!1,content:d.createElement(m.cC,{id:"Cannot delete namespace until <0/>collections' dependencies have <1/>been deleted",components:{0:d.createElement("br",null),1:d.createElement("br",null)}}),position:"left"},d.createElement(h.DropdownItem,{isDisabled:!0},p.ag._("Delete namespace")))),d.createElement(h.DropdownItem,{key:"3",component:d.createElement(f.Link,{to:(0,w.dI)(w.nB.myImports,{},{namespace:this.state.namespace.name})},p.ag._("Imports"))})].filter(Boolean);return this.state.showControls?d.createElement("div",{className:"hub-namespace-page-controls","data-cy":"kebab-toggle"}," ",0!==t.length&&d.createElement(h.Button,{onClick:function(){return e.setState({showImportModal:!0})}},p.ag._("Upload collection")),a.length>0&&d.createElement(b.hu,{items:a})):d.createElement("div",{className:"hub-namespace-page-controls"})}},{key:"toggleImportModal",value:function(e,t){var a={showImportModal:e};t&&(a.warning=t),e||(a.updateCollection=null),this.setState(a)}},{key:"closeAlert",get:function(){return(0,b.NQ)("alerts")}}]),P}(d.Component);N.contextType=S.I;const k=(0,f.withRouter)(N)}}]);
//# sourceMappingURL=../sourcemaps/namespace_detail.3d7467ebdcc39c002f9b7cb6d49a6772.js.map