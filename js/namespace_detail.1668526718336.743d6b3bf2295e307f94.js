"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[33],{35053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(42982),r=n(4942),o=n(15671),s=n(43144),l=n(60136),c=n(82963),i=n(61120),u=n(62747),p=n(27693),m=n(30624),d=n(96620),f=n(11930),h=n(47922),g=n(89216),v=n(61542),y=n(61647),b=n(20451);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var _=function(e){(0,l.Z)(_,e);var t,n,v=(t=_,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function _(e){var t;(0,o.Z)(this,_),t=v.call(this,e);var n=b.q6.parseParamString(e.location.search);return n.tab||(n.tab="edit-details"),t.state={loading:!1,alerts:[],namespace:null,newLinkURL:"",newLinkName:"",errorMessages:{},saving:!1,redirect:null,unsavedData:!1,params:n,unauthorized:!1},t}return(0,s.Z)(_,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){return e.loadNamespace()}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.namespace,a=t.errorMessages,r=t.saving,o=t.redirect,s=t.params,l=t.unauthorized,c=t.loading,i=[{id:"edit-details",name:p.ag._("Edit details")},{id:"edit-resources",name:p.ag._("Edit resources")}];if(o)return m.createElement(d.Redirect,{push:!0,to:o});if(c)return m.createElement(g.AW,null);if(!n)return null;var u=function(t){return e.setState({namespace:t,unsavedData:!0})};return m.createElement(m.Fragment,null,m.createElement(g.z7,{namespace:n,breadcrumbs:[y.Th,{name:n.name,url:(0,y.dI)(y.nB.namespaceByRepo,{repo:this.context.selectedRepo,namespace:n.name})},{name:p.ag._("Edit")}],tabs:i,params:s,updateParams:function(t){return e.updateParams(t)}}),m.createElement(g.UW,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),l?m.createElement(g.iA,null):m.createElement(g.or,null,m.createElement("section",{className:"body"},"edit-details"===s.tab?m.createElement(g.yl,{errorMessages:a,namespace:n,updateNamespace:u}):null,"edit-resources"===s.tab?m.createElement(g.l6,{namespace:n,updateNamespace:u}):null,m.createElement(f.Form,null,m.createElement(f.ActionGroup,null,m.createElement(f.Button,{isDisabled:this.isSaveDisabled(),variant:"primary",onClick:function(){return e.saveNamespace()}},p.ag._("Save")),m.createElement(f.Button,{variant:"secondary",onClick:function(){return e.cancel()}},p.ag._("Cancel")),r?m.createElement(f.Spinner,null):null),this.state.unsavedData?m.createElement("div",{style:{color:"red"}},p.ag._("You have unsaved changes")):null))))}},{key:"isSaveDisabled",value:function(){return this.state.namespace.links.some((function(e){return"error"==g.yl.validateName(e).validated||"error"==g.yl.validateUrl(e).validated}))}},{key:"updateParams",get:function(){return b.q6.updateParamsMixin()}},{key:"loadNamespace",value:function(){var e=this;h.V$.get(this.props.match.params.namespace).then((function(t){t.data.links.push({name:"",url:""}),e.setState({loading:!1,namespace:t.data})})).catch((function(){e.setState({unauthorized:!0,loading:!1})}))}},{key:"saveNamespace",value:function(){var e=this;this.setState({saving:!0},(function(){var t,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.state.namespace),o=[],s=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw o}}}}(n.links);try{for(s.s();!(t=s.n()).done;){var l=t.value;""===l.url&&""===l.name||o.push(l)}}catch(e){s.e(e)}finally{s.f()}n.links=o,h.V$.update(e.state.namespace.name,n).then((function(t){e.setState({namespace:t.data,errorMessages:{},saving:!1,unsavedData:!1,redirect:(0,y.dI)(y.nB.namespaceByRepo,{repo:e.context.selectedRepo,namespace:e.state.namespace.name})},(function(){return e.context.setAlerts([].concat((0,a.Z)(e.context.alerts),[{variant:"success",title:m.createElement(u.cC,{id:'Saved changes to namespace "{0}".',values:{0:e.state.namespace.name}})}]))}))})).catch((function(t){var n=t.response;400===n.status?e.setState({errorMessages:(0,b.TQ)(t),saving:!1}):404===n.status&&e.setState({alerts:e.state.alerts.concat({variant:"danger",title:p.ag._('Changes to namespace "{0}" could not be saved.',{0:e.state.namespace.name}),description:(0,b.N3)(n.status,n.statusText)}),saving:!1})}))}))}},{key:"closeAlert",get:function(){return(0,g.NQ)("alerts")}},{key:"cancel",value:function(){this.setState({redirect:(0,y.dI)(y.nB.namespaceByRepo,{repo:this.context.selectedRepo,namespace:this.state.namespace.name})})}}]),_}(m.Component);_.contextType=v.I;const C=(0,d.withRouter)(_)},97429:(e,t,n)=>{n.r(t),n.d(t,{NamespaceDetail:()=>P,default:()=>k});var a=n(42982),r=n(15671),o=n(43144),s=n(97326),l=n(60136),c=n(82963),i=n(61120),u=n(4942),p=n(62747),m=n(27693),d=n(30624),f=n(90005),h=n(96620),g=n(11930),v=n(15265),y=n(10298),b=n(47922),E=n(89216),S=n(20451),_=n(42807),C=n(61647),w=n(61542);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){(0,l.Z)(R,e);var t,n,w=(t=R,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function R(e){var t;(0,r.Z)(this,R),t=w.call(this,e),(0,u.Z)((0,s.Z)(t),"nonAPIParams",["tab","group"]),(0,u.Z)((0,s.Z)(t),"nonQueryStringParams",["namespace"]),(0,u.Z)((0,s.Z)(t),"deleteNamespace",(function(){var e=t.state.namespace.name;t.setState({isNamespacePending:!0},(function(){return b.jZ.delete(e).then((function(){t.setState({redirect:(0,C.dI)(C.Th.url,{}),confirmDelete:!1,isNamespacePending:!1}),t.context.setAlerts([].concat((0,a.Z)(t.context.alerts),[{variant:"success",title:d.createElement(p.cC,{id:'Namespace "{name}" has been successfully deleted.',values:{name:e}})}]))})).catch((function(n){var r=n.response,o=r.status,s=r.statusText;t.setState({isOpenNamespaceModal:!1,confirmDelete:!1,isNamespacePending:!1},(function(){t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[{variant:"danger",title:m.ag._('Namespace "{name}" could not be deleted.',{name:e}),description:(0,S.N3)(o,s)}])})}))}))}))})),(0,u.Z)((0,s.Z)(t),"closeModal",(function(){t.setState({isOpenNamespaceModal:!1,confirmDelete:!1})}));var n=S.q6.parseParamString(e.location.search,["page","page_size"]);return n.namespace=e.match.params.namespace,t.state={canSign:!1,collections:[],namespace:null,params:n,redirect:null,itemCount:0,showImportModal:!1,warning:"",updateCollection:null,showControls:!1,isOpenNamespaceModal:!1,isOpenSignModal:!1,isNamespaceEmpty:!1,confirmDelete:!1,isNamespacePending:!1,alerts:[],deleteCollection:null,isDeletionPending:!1,showGroupRemoveModal:null,showGroupSelectWizard:null,showRoleRemoveModal:null,showRoleSelectWizard:null,group:null},t}return(0,o.Z)(R,[{key:"componentDidMount",value:function(){this.load(),this.setState({alerts:this.context.alerts||[]})}},{key:"componentWillUnmount",value:function(){this.context.setAlerts([])}},{key:"componentDidUpdate",value:function(e){if(e.location.search!==this.props.location.search){var t=S.q6.parseParamString(this.props.location.search,["page","page_size"]);t.namespace=this.props.match.params.namespace,this.setState({params:t,group:this.filterGroup(t.group,this.state.namespace.groups)})}}},{key:"filterGroup",value:function(e,t){return e?t.find((function(t){var n=t.id;return Number(e)===n})):null}},{key:"updateGroups",value:function(e){var t=this,n=e.groups,a=e.alertSuccess,r=e.alertFailure,o=e.stateUpdate,s=this.state.namespace.name;b.V$.update(s,O(O({},this.state.namespace),{},{groups:n})).then((function(){t.addAlert({title:a,variant:"success"}),t.load()})).catch((function(e){var n=e.response,a=n.status,o=n.statusText;t.addAlert({title:r,variant:"danger",description:(0,S.N3)(a,o)})})).finally((function(){t.setState(o)}))}},{key:"render",value:function(){var e,t=this,n=this.state,r=n.canSign,o=n.collections,s=n.namespace,l=n.params,c=n.redirect,i=n.itemCount,u=n.showControls,f=n.showImportModal,y=n.warning,b=n.updateCollection,_=n.isOpenNamespaceModal,w=n.confirmDelete,R=n.isNamespacePending,P=n.alerts,k=n.deleteCollection,N=n.isDeletionPending;if(c)return d.createElement(h.Redirect,{push:!0,to:c});if(!s)return d.createElement(E.gO,null);var A=[{id:"collections",name:m.ag._("Collections")},u&&{id:"cli-configuration",name:m.ag._("CLI configuration")},s.resources&&{id:"resources",name:m.ag._("Resources")},{id:"owners",name:m.ag._("Namespace owners")}].filter(Boolean),D=l.tab||"collections",x=[C.Th,{name:s.name,url:"owners"===D?(0,C.dI)(C.nB.namespaceByRepo,{repo:this.context.selectedRepo,namespace:s.name}):null},"owners"===D?{name:m.ag._("Namespace owners"),url:l.group?(0,C.dI)(C.nB.namespaceByRepo,{repo:this.context.selectedRepo,namespace:s.name},{tab:"owners"}):null}:null,"owners"===D&&l.group?{name:m.ag._("Group {0}",{0:l.group})}:null].filter(Boolean),I=(0,S.qX)("inbound-"+s.name),M=0===i&&!(0,S.vS)(l,["keywords"]),Z=function(e){return t.updateParams(e,(function(){return t.loadCollections()}))},j=["namespace","page","page_size","sort","tab","group","view_type"],B=this.context.hasPermission,G=(null===(e=this.state.namespace.related_fields.my_permissions)||void 0===e?void 0:e.includes("galaxy.change_namespace"))||B("galaxy.change_namespace"),T=O({},l);return delete T.group,d.createElement(d.Fragment,null,d.createElement(E.UW,{alerts:P,closeAlert:function(e){return t.closeAlert(e)}}),d.createElement(E.ZO,{isOpen:f,onUploadSuccess:function(){return t.setState({redirect:(0,C.dI)(C.nB.myImports,{},{namespace:s.name})})},setOpen:function(e,n){return t.toggleImportModal(e,n)},collection:b,namespace:s.name}),d.createElement(E.gQ,{deleteCollection:k,isDeletionPending:N,confirmDelete:w,setConfirmDelete:function(e){return t.setState({confirmDelete:e})},cancelAction:function(){return t.setState({deleteCollection:null})},deleteAction:function(){return t.setState({isDeletionPending:!0},(function(){return S.K1.deleteCollection({collection:k,setState:function(e){return t.setState(e)},load:function(){return t.load()},redirect:!1,selectedRepo:t.context.selectedRepo,addAlert:function(e){return t.addAlert(e)}})}))}}),_&&d.createElement(E.pf,{spinner:R,cancelAction:this.closeModal,deleteAction:this.deleteNamespace,title:m.ag._("Delete namespace?"),isDisabled:!w||R},d.createElement(d.Fragment,null,d.createElement(g.Text,{className:"delete-namespace-modal-message"},d.createElement(p.cC,{id:"Deleting <0>{0}</0> and its data will be lost.",values:{0:s.name},components:{0:d.createElement("b",null)}})),d.createElement(g.Checkbox,{isChecked:w,onChange:function(e){return t.setState({confirmDelete:e})},label:m.ag._("I understand that this action cannot be undone."),id:"delete_confirm"}))),y?d.createElement(g.Alert,{className:"hub-c-alert-namespace",variant:"warning",title:y,actionClose:d.createElement(g.AlertActionCloseButton,{onClose:function(){return t.setState({warning:""})}})}):null,d.createElement(E.z7,{namespace:s,breadcrumbs:x,tabs:A,params:T,updateParams:function(e){return t.updateParams(e)},pageControls:this.renderPageControls(),contextSelector:d.createElement(E.e4,{selectedRepo:this.context.selectedRepo,path:this.props.match.path,pathParams:{namespace:s.name}}),filters:"collections"===D?d.createElement("div",{className:"hub-toolbar-wrapper namespace-detail"},d.createElement("div",{className:"toolbar"},d.createElement(E.Ls,{ignoredParams:j,params:l,updateParams:Z}),d.createElement("div",{className:"hub-pagination-container"},d.createElement(E.tl,{params:l,updateParams:Z,count:i,isTop:!0})))):null}),d.createElement(E.or,null,"collections"===D?M?d.createElement(E.vv,{title:m.ag._("No collections yet"),description:m.ag._("Collections will appear once uploaded"),button:this.state.showControls&&d.createElement(g.Button,{onClick:function(){return t.setState({showImportModal:!0})}},m.ag._("Upload collection"))}):d.createElement("section",{className:"body"},d.createElement(E.G2,{updateParams:Z,params:l,ignoredParams:j,collections:o,itemCount:i,showControls:this.state.showControls,repo:this.context.selectedRepo,renderCollectionControls:function(e){return t.renderCollectionControls(e)}})):null,"cli-configuration"===D?d.createElement("section",{className:"body"},d.createElement("div",null,d.createElement("div",null,d.createElement(p.cC,{id:"<0>Note:</0> Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found <1>here</1><2> </2><3/>.",components:{0:d.createElement("b",null),1:d.createElement("a",{href:"https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client",target:"_blank",rel:"noreferrer"}),2:d.createElement("span",null),3:d.createElement(v.LA,null)}})),d.createElement(E.M5,{isReadOnly:!0},I))):null,"resources"===D?this.renderResources(s):null,"owners"===D?d.createElement(E.fD,{showGroupRemoveModal:this.state.showGroupRemoveModal,showGroupSelectWizard:this.state.showGroupSelectWizard,showRoleRemoveModal:this.state.showRoleRemoveModal,showRoleSelectWizard:this.state.showRoleSelectWizard,canEditOwners:G,group:this.state.group,groups:s.groups,name:s.name,pulpObjectType:"pulp_ansible/namespaces",selectRolesMessage:m.ag._("The selected roles will be added to this specific namespace."),updateProps:function(e){t.setState(e)},addGroup:function(e,n){var r=s.groups,o=s.name,l=O(O({},e),{},{object_roles:n.map((function(e){return e.name}))}),c=[].concat((0,a.Z)(r),[l]);t.updateGroups({groups:c,alertSuccess:m.ag._('Group "{0}" has been successfully added to "{name}".',{0:e.name,name:o}),alertFailure:m.ag._('Group "{0}" could not be added to "{name}".',{0:e.name,name:o}),stateUpdate:{showGroupSelectWizard:null}})},removeGroup:function(e){var n=s.name,a=s.groups.filter((function(t){return t!==e}));t.updateGroups({groups:a,alertSuccess:m.ag._('Group "{0}" has been successfully removed from "{name}".',{0:e.name,name:n}),alertFailure:m.ag._('Group "{0}" could not be removed from "{name}".',{0:e.name,name:n}),stateUpdate:{showGroupRemoveModal:null}})},addRole:function(e,n){var r=s.name,o=s.groups,l=O(O({},e),{},{object_roles:[].concat((0,a.Z)(e.object_roles),(0,a.Z)(n.map((function(e){return e.name}))))}),c=o.map((function(t){return t===e?l:t}));t.updateGroups({groups:c,alertSuccess:m.ag._('Group "{0}" roles successfully updated in "{name}".',{0:e.name,name:r}),alertFailure:m.ag._('Group "{0}" roles could not be update in "{name}".',{0:e.name,name:r}),stateUpdate:{showRoleSelectWizard:null}})},removeRole:function(e,n){var a=s.name,r=s.groups,o=O(O({},n),{},{object_roles:n.object_roles.filter((function(t){return t!==e}))}),l=r.map((function(e){return e===n?o:e}));t.updateGroups({groups:l,alertSuccess:m.ag._('Group "{0}" roles successfully updated in "{name}".',{0:n.name,name:a}),alertFailure:m.ag._('Group "{0}" roles could not be update in "{name}".',{0:n.name,name:a}),stateUpdate:{showRoleRemoveModal:null}})},urlPrefix:(0,C.dI)(C.nB.namespaceByRepo,{repo:this.context.selectedRepo,namespace:s.name})}):null),r&&d.createElement(E.HM,{name:this.state.namespace.name,isOpen:this.state.isOpenSignModal,onSubmit:function(){t.signAllCertificates(s)},onCancel:function(){t.setState({isOpenSignModal:!1})}}))}},{key:"handleCollectionAction",value:function(e,t){var n=this,r=this.state.collections.find((function(t){return t.id===e}));switch(t){case"upload":this.setState({updateCollection:r,showImportModal:!0});break;case"deprecate":this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[{variant:"info",title:m.ag._('Deprecation status update starting for collection "{0}".',{0:r.name})}])}),b.gu.setDeprecation(r,!r.deprecated,this.context.selectedRepo).then((function(e){var t=(0,f.L)(e.data.task);return(0,S.BA)(t).then((function(){var e=r.deprecated?m.ag._('Collection "{0}" has been successfully undeprecated.',{0:r.name}):m.ag._('Collection "{0}" has been successfully deprecated.',{0:r.name});return n.setState({alerts:[].concat((0,a.Z)(n.state.alerts),[{title:e,variant:"success"}])}),n.loadCollections()}))})).catch((function(){n.setState({warning:m.ag._("API Error: Failed to set deprecation.")})}))}}},{key:"renderResources",value:function(e){return d.createElement("div",{className:"pf-c-content preview"},d.createElement(y.D,null,e.resources))}},{key:"signAllCertificates",value:function(e){var t=this,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;return{variant:"danger",title:m.ag._("Failed to sign all collections."),description:m.ag._("API Error: {status}",{status:e})}};this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[{id:"loading-signing",variant:"success",title:m.ag._('Signing started for all collections in namespace "{0}".',{0:e.name})}]),isOpenSignModal:!1}),b.sh.sign({signing_service:this.context.settings.GALAXY_COLLECTION_SIGNING_SERVICE,distro_base_path:this.context.selectedRepo,namespace:e.name}).then((function(e){(0,S.BA)(e.data.task_id).then((function(){t.load()})).catch((function(e){t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[n(e)])})})).finally((function(){t.setState({alerts:t.state.alerts.filter((function(e){return"loading-signing"!==(null==e?void 0:e.id)}))})}))})).catch((function(e){t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[n(e.response.status)])})}))}},{key:"loadCollections",value:function(){var e=this;b.gu.list(O({},S.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,itemCount:t.data.meta.count})}))}},{key:"load",value:function(){var e=this;Promise.all([b.gu.list(O({},S.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo),b.jZ.get(this.props.match.params.namespace,{include_related:"my_permissions"}),b.V$.get(this.props.match.params.namespace,{include_related:"my_permissions"}).catch((function(t){return e.context.user.is_anonymous&&e.context.settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS||t.response&&404===t.response.status?null:Promise.reject(t)}))]).then((function(t){var n;e.setState({collections:t[0].data.data,itemCount:t[0].data.meta.count,namespace:t[1].data,showControls:!!t[2],canSign:(0,S.rO)(e.context,null===(n=t[2])||void 0===n?void 0:n.data),group:e.filterGroup(e.state.params.group,t[1].data.groups)}),e.loadAllRepos(t[0].data.meta.count)})).catch((function(){e.setState({redirect:C.nB.notFound})}))}},{key:"loadAllRepos",value:function(e){var t=this,n=Object.keys(_.g.REPOSITORYNAMES).filter((function(e){return e!==t.context.selectedRepo})).map((function(e){return b.gu.list({namespace:t.props.match.params.namespace},e)}));Promise.all(n).then((function(n){return t.setState({isNamespaceEmpty:n.every((function(e){return 0===e.data.meta.count}))&&0===e})})).catch((function(e){var n=e.response,r=n.status,o=n.statusText;t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[{variant:"danger",title:m.ag._("Collection repositories could not be displayed."),description:(0,S.N3)(r,o)}])})}))}},{key:"updateParams",get:function(){return S.q6.updateParamsMixin(this.nonQueryStringParams)}},{key:"renderPageControls",value:function(){var e,t=this,n=this.state,a=n.canSign,r=n.collections,o=((null===(e=this.context)||void 0===e?void 0:e.featureFlags)||{}).can_upload_signatures,s=this.context.hasPermission,l=[d.createElement(g.DropdownItem,{key:"1",component:d.createElement(h.Link,{to:(0,C.dI)(C.nB.editNamespace,{namespace:this.state.namespace.name})},m.ag._("Edit namespace"))}),s("galaxy.delete_namespace")&&d.createElement(d.Fragment,{key:"2"},this.state.isNamespaceEmpty?d.createElement(g.DropdownItem,{onClick:function(){return t.setState({isOpenNamespaceModal:!0})}},m.ag._("Delete namespace")):d.createElement(g.Tooltip,{isVisible:!1,content:d.createElement(p.cC,{id:"Cannot delete namespace until <0/>collections' dependencies have <1/>been deleted",components:{0:d.createElement("br",null),1:d.createElement("br",null)}}),position:"left"},d.createElement(g.DropdownItem,{isDisabled:!0},m.ag._("Delete namespace")))),d.createElement(g.DropdownItem,{key:"3",component:d.createElement(h.Link,{to:(0,C.dI)(C.nB.myImports,{},{namespace:this.state.namespace.name})},m.ag._("Imports"))}),a&&!o&&d.createElement(g.DropdownItem,{key:"sign-collections","data-cy":"sign-all-collections-button",onClick:function(){return t.setState({isOpenSignModal:!0})}},m.ag._("Sign all collections"))].filter(Boolean);return this.state.showControls?d.createElement("div",{className:"hub-namespace-page-controls","data-cy":"kebab-toggle"}," ",0!==r.length&&d.createElement(g.Button,{onClick:function(){return t.setState({showImportModal:!0})}},m.ag._("Upload collection")),l.length>0&&d.createElement("div",{"data-cy":"ns-kebab-toggle"},d.createElement(E.hu,{items:l}))):d.createElement("div",{className:"hub-namespace-page-controls"})}},{key:"toggleImportModal",value:function(e,t){var n={showImportModal:e};t&&(n.warning=t),e||(n.updateCollection=null),this.setState(n)}},{key:"addAlert",value:function(e){this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[e])})}},{key:"closeAlert",get:function(){return(0,E.NQ)("alerts")}},{key:"renderCollectionControls",value:function(e){var t=this,n=this.context.hasPermission;return d.createElement("div",{style:{display:"flex",alignItems:"center"}},d.createElement(g.Button,{onClick:function(){return t.handleCollectionAction(e.id,"upload")},variant:"secondary"},m.ag._("Upload new version")),d.createElement(E.hu,{items:[S.K1.deleteMenuOption({canDeleteCollection:n("ansible.delete_collection"),noDependencies:null,onClick:function(){return S.K1.tryOpenDeleteModalWithConfirm({addAlert:function(e){return t.addAlert(e)},setState:function(e){return t.setState(e)},collection:e})}}),d.createElement(g.DropdownItem,{onClick:function(){return t.handleCollectionAction(e.id,"deprecate")},key:"deprecate"},e.deprecated?m.ag._("Undeprecate"):m.ag._("Deprecate"))].filter(Boolean),ariaLabel:"collection-kebab"}))}}]),R}(d.Component);P.contextType=w.I;const k=(0,h.withRouter)(P)}}]);
//# sourceMappingURL=../sourcemaps/namespace_detail.f0b01822598943db2bb29bbe19d22a20.js.map