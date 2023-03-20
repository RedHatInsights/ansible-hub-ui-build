"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[429],{97429:(e,t,n)=>{n.r(t),n.d(t,{NamespaceDetail:()=>k,default:()=>O});var a=n(42982),o=n(15671),s=n(43144),r=n(97326),l=n(79340),c=n(82963),i=n(61120),u=n(4942),p=n(14744),m=n(13855),d=n(35356),g=n(15265),f=n(92950),h=n(244),v=n(62012),y=n(93450),b=n(87150),E=n(42807),_=n(61542),S=n(61647),C=n(58464),w=n(90005);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){(0,l.Z)(P,e);var t,n,_=(t=P,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function P(e){var t;(0,o.Z)(this,P),t=_.call(this,e),(0,u.Z)((0,r.Z)(t),"nonAPIParams",["tab","group"]),(0,u.Z)((0,r.Z)(t),"nonQueryStringParams",["namespace"]),(0,u.Z)((0,r.Z)(t),"deleteNamespace",(function(){var e=t.state.namespace.name;t.setState({isNamespacePending:!0},(function(){return y.jZ.delete(e).then((function(){t.setState({redirect:S.Th.url,confirmDelete:!1,isNamespacePending:!1}),t.context.queueAlert({variant:"success",title:f.createElement(p.cC,{id:'Namespace "{name}" has been successfully deleted.',values:{name:e}})})})).catch((function(n){var o=n.response,s=o.status,r=o.statusText;t.setState({isOpenNamespaceModal:!1,confirmDelete:!1,isNamespacePending:!1},(function(){t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[{variant:"danger",title:m.ag._('Namespace "{name}" could not be deleted.',{name:e}),description:(0,C.N3)(s,r)}])})}))}))}))})),(0,u.Z)((0,r.Z)(t),"closeModal",(function(){t.setState({isOpenNamespaceModal:!1,confirmDelete:!1})}));var n=C.q6.parseParamString(e.location.search,["page","page_size"]);return n.namespace=e.routeParams.namespace,t.state={canSign:!1,collections:[],namespace:null,params:n,redirect:null,itemCount:0,showImportModal:!1,warning:"",updateCollection:null,showControls:!1,isOpenNamespaceModal:!1,isOpenSignModal:!1,isOpenWisdomModal:!1,isNamespaceEmpty:!1,confirmDelete:!1,isNamespacePending:!1,alerts:[],deleteCollection:null,isDeletionPending:!1,showGroupRemoveModal:null,showGroupSelectWizard:null,showRoleRemoveModal:null,showRoleSelectWizard:null,group:null},t}return(0,s.Z)(P,[{key:"componentDidMount",value:function(){this.load(),this.setState({alerts:this.context.alerts||[]}),this.context.setAlerts([])}},{key:"componentDidUpdate",value:function(e){if(e.location.search!==this.props.location.search){var t=C.q6.parseParamString(this.props.location.search,["page","page_size"]);t.namespace=this.props.routeParams.namespace,this.setState({params:t,group:this.filterGroup(t.group,this.state.namespace.groups)})}}},{key:"filterGroup",value:function(e,t){return e?t.find((function(t){var n=t.id;return Number(e)===n})):null}},{key:"updateGroups",value:function(e){var t=this,n=e.groups,a=e.alertSuccess,o=e.alertFailure,s=e.stateUpdate,r=this.state.namespace.name;y.V$.update(r,R(R({},this.state.namespace),{},{groups:n})).then((function(){t.addAlert({title:a,variant:"success"}),t.load()})).catch((function(e){var n=e.response,a=n.status,s=n.statusText;t.addAlert({title:o,variant:"danger",description:(0,C.N3)(a,s)})})).finally((function(){t.setState(s)}))}},{key:"render",value:function(){var e,t=this,n=this.state,o=n.canSign,s=n.collections,r=n.namespace,l=n.params,c=n.redirect,i=n.itemCount,u=n.showControls,h=n.showImportModal,y=n.warning,E=n.updateCollection,_=n.isOpenNamespaceModal,w=n.isOpenWisdomModal,P=n.confirmDelete,k=n.isNamespacePending,O=n.alerts,N=n.deleteCollection,A=n.isDeletionPending;if(c)return f.createElement(v.Navigate,{to:c});if(!r)return f.createElement(b.gO,null);var x=[{id:"collections",name:m.ag._("Collections")},u&&{id:"cli-configuration",name:m.ag._("CLI configuration")},r.resources&&{id:"resources",name:m.ag._("Resources")},{id:"owners",name:m.ag._("Namespace owners")}].filter(Boolean),D=l.tab||"collections",I=[S.Th,{name:r.name,url:"owners"===D?(0,S.dI)(S.nB.namespaceByRepo,{repo:this.context.selectedRepo,namespace:r.name}):null},"owners"===D?{name:m.ag._("Namespace owners"),url:l.group?(0,S.dI)(S.nB.namespaceByRepo,{repo:this.context.selectedRepo,namespace:r.name},{tab:"owners"}):null}:null,"owners"===D&&l.group?{name:m.ag._("Group {0}",{0:l.group})}:null].filter(Boolean),M=(0,C.qX)(),G=0===i&&!(0,C.vS)(l,["keywords"]),Z=function(e){return t.updateParams(e,(function(){return t.loadCollections()}))},B=["namespace","page","page_size","sort","tab","group","view_type"],j=this.context.hasPermission,T=(null===(e=this.state.namespace.related_fields.my_permissions)||void 0===e?void 0:e.includes("galaxy.change_namespace"))||j("galaxy.change_namespace"),U=R({},l);return delete U.group,f.createElement(f.Fragment,null,f.createElement(b.UW,{alerts:O,closeAlert:function(e){return t.closeAlert(e)}}),f.createElement(b.ZO,{isOpen:h,onUploadSuccess:function(){return t.setState({redirect:(0,S.dI)(S.nB.myImports,{},{namespace:r.name})})},setOpen:function(e,n){return t.toggleImportModal(e,n)},collection:E,namespace:r.name}),f.createElement(b.gQ,{deleteCollection:N,isDeletionPending:A,confirmDelete:P,setConfirmDelete:function(e){return t.setState({confirmDelete:e})},cancelAction:function(){return t.setState({deleteCollection:null})},deleteAction:function(){return t.setState({isDeletionPending:!0},(function(){return C.K1.deleteCollection({collection:N,setState:function(e){return t.setState(e)},load:function(){return t.load()},redirect:!1,selectedRepo:t.context.selectedRepo,addAlert:function(e){return t.addAlert(e)}})}))}}),_&&f.createElement(b.pf,{spinner:k,cancelAction:this.closeModal,deleteAction:this.deleteNamespace,title:m.ag._("Delete namespace?"),isDisabled:!P||k},f.createElement(f.Fragment,null,f.createElement(d.Text,{className:"delete-namespace-modal-message"},f.createElement(p.cC,{id:"Deleting <0>{0}</0> and its data will be lost.",values:{0:r.name},components:{0:f.createElement("b",null)}})),f.createElement(d.Checkbox,{isChecked:P,onChange:function(e){return t.setState({confirmDelete:e})},label:m.ag._("I understand that this action cannot be undone."),id:"delete_confirm"}))),w&&f.createElement(b.ms,{addAlert:function(e){return t.addAlert(e)},closeAction:function(){return t.setState({isOpenWisdomModal:!1})},scope:"namespace",reference:this.state.namespace.name}),y?f.createElement(d.Alert,{className:"hub-c-alert-namespace",variant:"warning",title:y,actionClose:f.createElement(d.AlertActionCloseButton,{onClose:function(){return t.setState({warning:""})}})}):null,f.createElement(b.z7,{namespace:r,breadcrumbs:I,tabs:x,params:U,updateParams:function(e){return t.updateParams(e)},pageControls:this.renderPageControls(),contextSelector:f.createElement(b.e4,{path:this.props.routePath,pathParams:{namespace:r.name},selectedRepo:this.context.selectedRepo}),filters:"collections"===D?f.createElement("div",{className:"hub-toolbar-wrapper namespace-detail"},f.createElement("div",{className:"toolbar"},f.createElement(b.Ls,{ignoredParams:B,params:l,updateParams:Z}),f.createElement("div",{className:"hub-pagination-container"},f.createElement(b.tl,{params:l,updateParams:Z,count:i,isTop:!0})))):null}),f.createElement(b.or,null,"collections"===D?G?f.createElement(b.vv,{title:m.ag._("No collections yet"),description:m.ag._("Collections will appear once uploaded"),button:this.state.showControls&&f.createElement(d.Button,{onClick:function(){return t.setState({showImportModal:!0})}},m.ag._("Upload collection"))}):f.createElement("section",{className:"body"},f.createElement(b.G2,{updateParams:Z,params:l,ignoredParams:B,collections:s,itemCount:i,showControls:this.state.showControls,repo:this.context.selectedRepo,renderCollectionControls:function(e){return t.renderCollectionControls(e)},displaySignatures:this.context.featureFlags.display_signatures})):null,"cli-configuration"===D?f.createElement("section",{className:"body"},f.createElement("div",null,f.createElement("div",null,f.createElement(p.cC,{id:"<0>Note:</0> Use this URL to configure ansible-galaxy to upload collections to this namespace. More information on ansible-galaxy configurations can be found <1>here</1><2> </2><3/>.",components:{0:f.createElement("b",null),1:f.createElement("a",{href:"https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client",target:"_blank",rel:"noreferrer"}),2:f.createElement("span",null),3:f.createElement(g.LA,null)}})),f.createElement(b.M5,{isReadOnly:!0},M))):null,"resources"===D?this.renderResources(r):null,"owners"===D?f.createElement(b.fD,{showGroupRemoveModal:this.state.showGroupRemoveModal,showGroupSelectWizard:this.state.showGroupSelectWizard,showRoleRemoveModal:this.state.showRoleRemoveModal,showRoleSelectWizard:this.state.showRoleSelectWizard,canEditOwners:T,group:this.state.group,groups:r.groups,name:r.name,pulpObjectType:"pulp_ansible/namespaces",selectRolesMessage:m.ag._("The selected roles will be added to this specific namespace."),updateProps:function(e){t.setState(e)},addGroup:function(e,n){var o=r.groups,s=r.name,l=R(R({},e),{},{object_roles:n.map((function(e){return e.name}))}),c=[].concat((0,a.Z)(o),[l]);t.updateGroups({groups:c,alertSuccess:m.ag._('Group "{0}" has been successfully added to "{name}".',{0:e.name,name:s}),alertFailure:m.ag._('Group "{0}" could not be added to "{name}".',{0:e.name,name:s}),stateUpdate:{showGroupSelectWizard:null}})},removeGroup:function(e){var n=r.name,a=r.groups.filter((function(t){return t!==e}));t.updateGroups({groups:a,alertSuccess:m.ag._('Group "{0}" has been successfully removed from "{name}".',{0:e.name,name:n}),alertFailure:m.ag._('Group "{0}" could not be removed from "{name}".',{0:e.name,name:n}),stateUpdate:{showGroupRemoveModal:null}})},addRole:function(e,n){var o=r.name,s=r.groups,l=R(R({},e),{},{object_roles:[].concat((0,a.Z)(e.object_roles),(0,a.Z)(n.map((function(e){return e.name}))))}),c=s.map((function(t){return t===e?l:t}));t.updateGroups({groups:c,alertSuccess:m.ag._('Group "{0}" roles successfully updated in "{name}".',{0:e.name,name:o}),alertFailure:m.ag._('Group "{0}" roles could not be update in "{name}".',{0:e.name,name:o}),stateUpdate:{showRoleSelectWizard:null}})},removeRole:function(e,n){var a=r.name,o=r.groups,s=R(R({},n),{},{object_roles:n.object_roles.filter((function(t){return t!==e}))}),l=o.map((function(e){return e===n?s:e}));t.updateGroups({groups:l,alertSuccess:m.ag._('Group "{0}" roles successfully updated in "{name}".',{0:n.name,name:a}),alertFailure:m.ag._('Group "{0}" roles could not be update in "{name}".',{0:n.name,name:a}),stateUpdate:{showRoleRemoveModal:null}})},urlPrefix:(0,S.dI)(S.nB.namespaceByRepo,{repo:this.context.selectedRepo,namespace:r.name})}):null),o&&f.createElement(b.HM,{name:this.state.namespace.name,isOpen:this.state.isOpenSignModal,onSubmit:function(){t.signAllCertificates(r)},onCancel:function(){t.setState({isOpenSignModal:!1})}}))}},{key:"handleCollectionAction",value:function(e,t){var n=this,o=this.state.collections.find((function(t){return t.id===e}));switch(t){case"upload":this.setState({updateCollection:o,showImportModal:!0});break;case"deprecate":this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[{variant:"info",title:m.ag._('Deprecation status update starting for collection "{0}".',{0:o.name})}])}),y.gu.setDeprecation(o,!o.deprecated,this.context.selectedRepo).then((function(e){var t=(0,w.L)(e.data.task);return(0,C.BA)(t).then((function(){var e=o.deprecated?m.ag._('Collection "{0}" has been successfully undeprecated.',{0:o.name}):m.ag._('Collection "{0}" has been successfully deprecated.',{0:o.name});return n.setState({alerts:[].concat((0,a.Z)(n.state.alerts),[{title:e,variant:"success"}])}),n.loadCollections()}))})).catch((function(){n.setState({warning:m.ag._("API Error: Failed to set deprecation.")})}))}}},{key:"renderResources",value:function(e){return f.createElement("div",{className:"pf-c-content preview"},f.createElement(h.D,null,e.resources))}},{key:"signAllCertificates",value:function(e){var t=this,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;return{variant:"danger",title:m.ag._("Failed to sign all collections."),description:m.ag._("API Error: {status}",{status:e})}};this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[{id:"loading-signing",variant:"success",title:m.ag._('Signing started for all collections in namespace "{0}".',{0:e.name})}]),isOpenSignModal:!1}),y.sh.sign({signing_service:this.context.settings.GALAXY_COLLECTION_SIGNING_SERVICE,distro_base_path:this.context.selectedRepo,namespace:e.name}).then((function(e){(0,C.BA)(e.data.task_id).then((function(){t.load()})).catch((function(e){t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[n(e)])})})).finally((function(){t.setState({alerts:t.state.alerts.filter((function(e){return"loading-signing"!==(null==e?void 0:e.id)}))})}))})).catch((function(e){t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[n(e.response.status)])})}))}},{key:"loadCollections",value:function(){var e=this;y.gu.list(R({},C.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo).then((function(t){e.setState({collections:t.data.data,itemCount:t.data.meta.count})}))}},{key:"load",value:function(){var e=this;Promise.all([y.gu.list(R({},C.q6.getReduced(this.state.params,this.nonAPIParams)),this.context.selectedRepo),y.jZ.get(this.props.routeParams.namespace,{include_related:"my_permissions"}),y.V$.get(this.props.routeParams.namespace,{include_related:"my_permissions"}).catch((function(t){return e.context.user.is_anonymous&&e.context.settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS||t.response&&404===t.response.status?null:Promise.reject(t)}))]).then((function(t){var n;e.setState({collections:t[0].data.data,itemCount:t[0].data.meta.count,namespace:t[1].data,showControls:!!t[2],canSign:(0,C.fz)(e.context,null===(n=t[2])||void 0===n?void 0:n.data),group:e.filterGroup(e.state.params.group,t[1].data.groups)}),e.loadAllRepos(t[0].data.meta.count)})).catch((function(){e.setState({redirect:(0,S.dI)(S.nB.notFound)})}))}},{key:"loadAllRepos",value:function(e){var t=this,n=Object.keys(E.g.REPOSITORYNAMES).filter((function(e){return e!==t.context.selectedRepo})).map((function(e){return y.gu.list({namespace:t.props.routeParams.namespace},e)}));Promise.all(n).then((function(n){return t.setState({isNamespaceEmpty:n.every((function(e){return 0===e.data.meta.count}))&&0===e})})).catch((function(e){var n=e.response,o=n.status,s=n.statusText;t.setState({alerts:[].concat((0,a.Z)(t.state.alerts),[{variant:"danger",title:m.ag._("Collection repositories could not be displayed."),description:(0,C.N3)(o,s)}])})}))}},{key:"updateParams",get:function(){return C.q6.updateParamsMixin(this.nonQueryStringParams)}},{key:"renderPageControls",value:function(){var e=this,t=this.state,n=t.canSign,a=t.collections,o=this.context.featureFlags.can_upload_signatures,s=this.context.featureFlags.ai_deny_index,r=this.context.hasPermission,l=[f.createElement(d.DropdownItem,{key:"1",component:f.createElement(v.Link,{to:(0,S.dI)(S.nB.editNamespace,{namespace:this.state.namespace.name})},m.ag._("Edit namespace"))}),r("galaxy.delete_namespace")&&f.createElement(f.Fragment,{key:"2"},this.state.isNamespaceEmpty?f.createElement(d.DropdownItem,{onClick:function(){return e.setState({isOpenNamespaceModal:!0})}},m.ag._("Delete namespace")):f.createElement(d.Tooltip,{isVisible:!1,content:f.createElement(p.cC,{id:"Cannot delete namespace until <0/>collections' dependencies have <1/>been deleted",components:{0:f.createElement("br",null),1:f.createElement("br",null)}}),position:"left"},f.createElement(d.DropdownItem,{isDisabled:!0},m.ag._("Delete namespace")))),f.createElement(d.DropdownItem,{key:"3",component:f.createElement(v.Link,{to:(0,S.dI)(S.nB.myImports,{},{namespace:this.state.namespace.name})},m.ag._("Imports"))}),n&&!o&&f.createElement(d.DropdownItem,{key:"sign-collections","data-cy":"sign-all-collections-button",onClick:function(){return e.setState({isOpenSignModal:!0})}},m.ag._("Sign all collections")),s&&f.createElement(d.DropdownItem,{key:"wisdom-settings",onClick:function(){return e.setState({isOpenWisdomModal:!0})}},m.ag._("Wisdom settings"))].filter(Boolean);return this.state.showControls?f.createElement("div",{className:"hub-namespace-page-controls","data-cy":"kebab-toggle"}," ",0!==a.length&&f.createElement(d.Button,{onClick:function(){return e.setState({showImportModal:!0})}},m.ag._("Upload collection")),l.length>0&&f.createElement("div",{"data-cy":"ns-kebab-toggle"},f.createElement(b.hu,{items:l}))):f.createElement("div",{className:"hub-namespace-page-controls"})}},{key:"toggleImportModal",value:function(e,t){var n={showImportModal:e};t&&(n.warning=t),e||(n.updateCollection=null),this.setState(n)}},{key:"addAlert",value:function(e){this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[e])})}},{key:"closeAlert",get:function(){return(0,b.NQ)("alerts")}},{key:"renderCollectionControls",value:function(e){var t=this,n=this.context.hasPermission;return f.createElement("div",{style:{display:"flex",alignItems:"center"}},f.createElement(d.Button,{onClick:function(){return t.handleCollectionAction(e.id,"upload")},variant:"secondary"},m.ag._("Upload new version")),f.createElement(b.hu,{items:[C.K1.deleteMenuOption({canDeleteCollection:n("ansible.delete_collection"),noDependencies:null,onClick:function(){return C.K1.tryOpenDeleteModalWithConfirm({addAlert:function(e){return t.addAlert(e)},setState:function(e){return t.setState(e)},collection:e})}}),f.createElement(d.DropdownItem,{onClick:function(){return t.handleCollectionAction(e.id,"deprecate")},key:"deprecate"},e.deprecated?m.ag._("Undeprecate"):m.ag._("Deprecate"))].filter(Boolean),ariaLabel:"collection-kebab"}))}}]),P}(f.Component);k.contextType=_.I;const O=(0,C.EN)(k)}}]);
//# sourceMappingURL=../sourcemaps/429.73b597c110f3dafded966956e4430774.js.map