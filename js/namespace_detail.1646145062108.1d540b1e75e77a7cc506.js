"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[33],{35053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a=n(4942),r=n(42982),s=n(15671),o=n(43144),c=n(60136),l=n(6215),i=n(61120),u=n(48222),m=n(25221),p=n(30624),d=n(86235),f=n(34895),h=n(29455),g=n(94679),v=n(61647),y=n(43188),b=n(61542);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=function(e){(0,c.Z)(w,e);var t,n,b=(t=w,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function w(e){var t;(0,s.Z)(this,w),t=b.call(this,e);var n=y.q6.parseParamString(e.location.search);return n.tab||(n.tab="edit-details"),t.state={loading:!1,alerts:[],namespace:null,userId:"",newLinkURL:"",newLinkName:"",errorMessages:{},saving:!1,redirect:null,unsavedData:!1,params:n,unauthorized:!1},t}return(0,o.Z)(w,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){g.TE.getUser().then((function(t){e.setState({userId:t.account_number},(function(){return e.loadNamespace()}))})).catch((function(t){var n=t.response,a=n.status,s=n.statusText;e.setState({loading:!1,redirect:(0,v.dI)(v.nB.namespaceByRepo,{namespace:e.props.match.params.namespace,repo:e.context.selectedRepo})},(function(){var t;e.context.setAlerts([].concat((0,r.Z)(e.context.alerts),[{variant:"danger",title:m.ag._('Active user profile "{0}" could not be displayed.',{0:null===(t=e.context.user)||void 0===t?void 0:t.username}),description:(0,y.N3)(a,s)}]))}))}))}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.namespace,a=t.errorMessages,r=t.saving,s=t.redirect,o=t.params,c=t.userId,l=t.unauthorized,i=t.loading,u=[{id:"edit-details",name:m.ag._("Edit details")},{id:"edit-resources",name:m.ag._("Edit resources")}];return s?p.createElement(d.Redirect,{push:!0,to:s}):i?p.createElement(h.AW,null):n?p.createElement(p.Fragment,null,p.createElement(h.z7,{namespace:n,breadcrumbs:[v.Th,{name:n.name,url:(0,v.dI)(v.nB.myCollections,{namespace:n.name})},{name:m.ag._("Edit")}],tabs:u,params:o,updateParams:function(t){return e.updateParams(t)}}),p.createElement(h.UW,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),l?p.createElement(h.iA,null):p.createElement(h.or,null,p.createElement("section",{className:"body"},"edit-details"===o.tab.toLowerCase()?p.createElement(h.yl,{userId:c,namespace:n,errorMessages:a,updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})}}):p.createElement(h.l6,{updateNamespace:function(t){return e.setState({namespace:t,unsavedData:!0})},namespace:n}),p.createElement(f.Form,null,p.createElement(f.ActionGroup,null,p.createElement(f.Button,{variant:"primary",onClick:function(){return e.saveNamespace()}},m.ag._("Save")),p.createElement(f.Button,{variant:"secondary",onClick:function(){return e.cancel()}},m.ag._("Cancel")),r?p.createElement(f.Spinner,null):null),this.state.unsavedData?p.createElement("div",{style:{color:"red"}},m.ag._("You have unsaved changes")):null)))):null}},{key:"updateParams",get:function(){return y.q6.updateParamsMixin()}},{key:"loadNamespace",value:function(){var e=this;g.V$.get(this.props.match.params.namespace).then((function(t){t.data.links.push({name:"",url:""}),e.setState({loading:!1,namespace:t.data})})).catch((function(){e.setState({unauthorized:!0,loading:!1})}))}},{key:"saveNamespace",value:function(){var e=this;this.setState({saving:!0},(function(){var t,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.state.namespace),s=[],o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw s}}}}(n.links);try{for(o.s();!(t=o.n()).done;){var c=t.value;""===c.url&&""===c.name||s.push(c)}}catch(e){o.e(e)}finally{o.f()}n.links=s,g.V$.update(e.state.namespace.name,n).then((function(t){e.setState({namespace:t.data,errorMessages:{},saving:!1,unsavedData:!1,redirect:(0,v.dI)(v.nB.myCollections,{namespace:e.state.namespace.name})},(function(){return e.context.setAlerts([].concat((0,r.Z)(e.context.alerts),[{variant:"success",title:p.createElement(u.cC,{id:'Saved changes to namespace "{0}".',values:{0:e.state.namespace.name}})}]))}))})).catch((function(t){var n=t.response;400===n.status?e.setState({errorMessages:(0,y.TQ)(t),saving:!1}):404===n.status&&e.setState({alerts:e.state.alerts.concat({variant:"danger",title:m.ag._('Changes to namespace "{0}" could not be saved.',{0:e.state.namespace.name}),description:(0,y.N3)(n.status,n.statusText)}),saving:!1})}))}))}},{key:"closeAlert",get:function(){return(0,h.NQ)("alerts")}},{key:"cancel",value:function(){this.setState({redirect:(0,v.dI)(v.nB.myCollections,{namespace:this.state.namespace.name})})}}]),w}(p.Component);w.contextType=b.I;const P=(0,d.withRouter)(w)},97429:(e,t,n)=>{n.r(t),n.d(t,{NamespaceDetail:()=>N,default:()=>k});var a=n(42982),r=n(15671),s=n(43144),o=n(97326),c=n(60136),l=n(6215),i=n(61120),u=n(4942),m=n(48222),p=n(25221),d=n(30624),f=n(86235),h=n(34895),g=n(15265),v=n(83521),y=n(94679),b=n(29455),E=n(43188),C=n(42807),w=n(61647),P=n(61542);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){(0,c.Z)(S,e);var t,n,P=(t=S,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function S(e){var t;(0,r.Z)(this,S),t=P.call(this,e),(0,u.Z)((0,o.Z)(t),"nonAPIParams",["tab"]),(0,u.Z)((0,o.Z)(t),"nonQueryStringParams",["namespace"]),(0,u.Z)((0,o.Z)(t),"deleteNamespace",(function(){var e=t.state.namespace.name;t.setState({isNamespacePending:!0},(function(){return y.jZ.delete(e).then((function(){t.setState({redirect:(0,w.dI)(w.nB.namespaces,{}),confirmDelete:!1,isNamespacePending:!1}),t.context.setAlerts([].concat((0,a.Z)(t.context.alerts),[{variant:"success",title:d.createElement(m.cC,{id:'Namespace "{name}" has been successfully deleted.',values:{name:e}})}]))})).catch((function(n){var r=n.response,s=r.status,o=r.statusText;t.setState({isOpenNamespaceModal:!1,confirmDelete:!1,isNamespacePending:!1},(function(){t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[{variant:"danger",title:p.ag._('Namespace "{name}" could not be deleted.',{name:e}),description:(0,E.N3)(s,o)}])})}))}))}))})),(0,u.Z)((0,o.Z)(t),"closeModal",(function(){t.setState({isOpenNamespaceModal:!1,confirmDelete:!1})}));var n=E.q6.parseParamString(e.location.search,["page","page_size"]);return n.namespace=e.match.params.namespace,t.state={collections:[],namespace:null,params:n,redirect:null,itemCount:0,showImportModal:!1,warning:"",updateCollection:null,showControls:!1,isOpenNamespaceModal:!1,isNamespaceEmpty:!1,confirmDelete:!1,isNamespacePending:!1,alerts:[]},t}return(0,s.Z)(S,[{key:"componentDidMount",value:function(){this.loadAll(),this.setState({alerts:this.context.alerts||[]})}},{key:"componentWillUnmount",value:function(){this.context.setAlerts([])}},{key:"render",value:function(){var e=this,t=this.state,n=t.collections,a=t.namespace,r=t.params,s=t.redirect,o=t.itemCount,c=t.showImportModal,l=t.warning,i=t.updateCollection,u=t.isOpenNamespaceModal,v=t.confirmDelete,y=t.isNamespacePending;if(s)return d.createElement(f.Redirect,{push:!0,to:s});if(!a)return d.createElement(b.gO,null);var C=[{id:"collections",name:p.ag._("Collections")}];this.state.showControls&&C.push({id:"cli-configuration",name:p.ag._("CLI configuration")});var P=r.tab||"collections";a.resources&&C.push({id:"resources",name:p.ag._("Resources")});var S=(0,E.qX)("inbound-"+a.name),O=0===o&&!(0,E.vS)(r,["keywords"]),N=function(t){return e.updateParams(t,(function(){return e.loadCollections()}))},k=["namespace","page","page_size","sort","tab","view_type"];return d.createElement(d.Fragment,null,d.createElement(b.UW,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),d.createElement(b.ZO,{isOpen:c,onUploadSuccess:function(){return e.setState({redirect:(0,w.dI)(w.nB.myImports,{},{namespace:a.name})})},setOpen:function(t,n){return e.toggleImportModal(t,n)},collection:i,namespace:a.name}),u&&d.createElement(b.pf,{spinner:y,cancelAction:this.closeModal,deleteAction:this.deleteNamespace,title:p.ag._("Delete namespace?"),isDisabled:!v||y},d.createElement(d.Fragment,null,d.createElement(h.Text,{className:"delete-namespace-modal-message"},d.createElement(m.cC,{id:"Deleting <0>{0}</0> and its data will be lost.",values:{0:a.name},components:{0:d.createElement("b",null)}})),d.createElement(h.Checkbox,{isChecked:v,onChange:function(t){return e.setState({confirmDelete:t})},label:p.ag._("I understand that this action cannot be undone."),id:"delete_confirm"}))),l?d.createElement(h.Alert,{className:"hub-c-alert-namespace",variant:"warning",title:l,actionClose:d.createElement(h.AlertActionCloseButton,{onClose:function(){return e.setState({warning:""})}})}):null,d.createElement(b.z7,{namespace:a,breadcrumbs:[w.Th,{name:a.name}],tabs:C,params:r,updateParams:function(t){return e.updateParams(t)},pageControls:this.renderPageControls(),contextSelector:d.createElement(b.e4,{selectedRepo:this.context.selectedRepo,path:this.props.match.path,pathParams:{namespace:a.name}}),filters:"collections"===P.toLowerCase()?d.createElement("div",{className:"hub-toolbar-wrapper namespace-detail"},d.createElement("div",{className:"toolbar"},d.createElement(b.Ls,{ignoredParams:k,params:r,updateParams:N}),d.createElement("div",{className:"hub-pagination-container"},d.createElement(b.tl,{params:r,updateParams:N,count:o,isTop:!0})))):null}),d.createElement(b.or,null,"collections"===P.toLowerCase()?O?d.createElement(b.vv,{title:p.ag._("No collections yet"),description:p.ag._("Collections will appear once uploaded"),button:this.state.showControls&&d.createElement(h.Button,{onClick:function(){return e.setState({showImportModal:!0})}},p.ag._("Upload collection"))}):d.createElement("section",{className:"body"},d.createElement(b.G2,{updateParams:N,params:r,ignoredParams:k,collections:n,itemCount:o,showControls:this.state.showControls,handleControlClick:function(t,n){return e.handleCollectionAction(t,n)},repo:this.context.selectedRepo})):null,"cli-configuration"===P.toLowerCase()?d.createElement("section",{className:"body"},d.createElement("div",null,d.createElement("div",null,d.createElement(m.cC,{id:"<0>Note:</0> Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found <1>here</1><2> </2><3/>.",components:{0:d.createElement("b",null),1:d.createElement("a",{href:"https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client",target:"_blank",rel:"noreferrer"}),2:d.createElement("span",null),3:d.createElement(g.LA,null)}})),d.createElement(b.M5,{isReadOnly:!0},S))):null,"resources"===P.toLowerCase()?this.renderResources(a):null))}},{key:"handleCollectionAction",value:function(e,t){var n=this,a=this.state.collections.find((function(t){return t.id===e}));switch(t){case"upload":this.setState({updateCollection:a,showImportModal:!0});break;case"deprecate":y.gu.setDeprecation(a,!a.deprecated,this.context.selectedRepo).then((function(){return n.loadCollections()})).catch((function(){n.setState({warning:p.ag._("API Error: Failed to set deprecation.")})}))}}},{key:"renderResources",value:function(e){return d.createElement("div",{className:"pf-c-content preview"},d.createElement(v.D,null,e.resources))}},{key:"loadCollections",value:function(){var e=this;y.gu.list(O({},E.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,itemCount:t.data.meta.count})}))}},{key:"loadAll",value:function(){var e=this;Promise.all([y.gu.list(O({},E.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo),y.jZ.get(this.props.match.params.namespace),y.V$.get(this.props.match.params.namespace).catch((function(t){return e.context.user.is_anonymous&&e.context.settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS||t.response&&404===t.response.status?null:Promise.reject(t)}))]).then((function(t){e.setState({collections:t[0].data.data,itemCount:t[0].data.meta.count,namespace:t[1].data,showControls:!!t[2]}),e.loadAllRepos(t[0].data.meta.count)})).catch((function(){e.setState({redirect:w.nB.notFound})}))}},{key:"loadAllRepos",value:function(e){var t=this,n=Object.keys(C.g.REPOSITORYNAMES).filter((function(e){return e!==t.context.selectedRepo})).map((function(e){return y.gu.list({namespace:t.props.match.params.namespace},e)}));Promise.all(n).then((function(n){return t.setState({isNamespaceEmpty:n.every((function(e){return 0===e.data.meta.count}))&&0===e})})).catch((function(e){var n=e.response,r=n.status,s=n.statusText;t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[{variant:"danger",title:p.ag._("Collection repositories could not be displayed."),description:(0,E.N3)(r,s)}])})}))}},{key:"updateParams",get:function(){return E.q6.updateParamsMixin(this.nonQueryStringParams)}},{key:"renderPageControls",value:function(){var e=this,t=this.state.collections,n=[d.createElement(h.DropdownItem,{key:"1",component:d.createElement(f.Link,{to:(0,w.dI)(w.nB.editNamespace,{namespace:this.state.namespace.name})},p.ag._("Edit namespace"))}),this.context.user.model_permissions.delete_namespace&&d.createElement(d.Fragment,{key:"2"},this.state.isNamespaceEmpty?d.createElement(h.DropdownItem,{onClick:function(){return e.setState({isOpenNamespaceModal:!0})}},p.ag._("Delete namespace")):d.createElement(h.Tooltip,{isVisible:!1,content:d.createElement(m.cC,{id:"Cannot delete namespace until <0/>collections' dependencies have <1/>been deleted",components:{0:d.createElement("br",null),1:d.createElement("br",null)}}),position:"left"},d.createElement(h.DropdownItem,{isDisabled:!0},p.ag._("Delete namespace")))),d.createElement(h.DropdownItem,{key:"3",component:d.createElement(f.Link,{to:(0,w.dI)(w.nB.myImports,{},{namespace:this.state.namespace.name})},p.ag._("Imports"))})].filter(Boolean);return this.state.showControls?d.createElement("div",{className:"hub-namespace-page-controls","data-cy":"kebab-toggle"}," ",0!==t.length&&d.createElement(h.Button,{onClick:function(){return e.setState({showImportModal:!0})}},p.ag._("Upload collection")),n.length>0&&d.createElement(b.hu,{items:n})):d.createElement("div",{className:"hub-namespace-page-controls"})}},{key:"toggleImportModal",value:function(e,t){var n={showImportModal:e};t&&(n.warning=t),e||(n.updateCollection=null),this.setState(n)}},{key:"closeAlert",get:function(){return(0,b.NQ)("alerts")}}]),S}(d.Component);N.contextType=P.I;const k=(0,f.withRouter)(N)}}]);
//# sourceMappingURL=../sourcemaps/namespace_detail.5285155cdc4e0f5d48b6b2699f0bb569.js.map