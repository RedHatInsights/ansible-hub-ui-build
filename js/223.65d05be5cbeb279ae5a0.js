"use strict";(self.webpackChunkautomationHub=self.webpackChunkautomationHub||[]).push([[223],{40223:(e,t,a)=>{a.r(t),a.d(t,{NamespaceDetail:()=>D,default:()=>N});var n=a(80296),s=a(45458),r=a(58168),o=a(23029),l=a(92901),i=a(50388),c=a(53954),u=a(15361),d=a(64467),m=a(42328),p=a(47712),h=a(22069),f=a(83873),v=a(72583),g=a(99780),_=a(86161),R=a(44914),y=a.n(R),S=a(38210),b=a(78765),A=a(88696),C=a(35894),E=a(97899),P=a(60165),k=a(39799);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){(0,d.A)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function j(e,t,a){return t=(0,c.A)(t),(0,i.A)(e,M()?Reflect.construct(t,a||[],(0,c.A)(e).constructor):t.apply(e,a))}function M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(M=function(){return!!e})()}var D=function(e){function t(e){var a;(0,o.A)(this,t),a=j(this,t,[e]),(0,d.A)(a,"deleteNamespace",(function(){var e=a.state.namespace.name,t=a.context.queueAlert;a.setState({isNamespacePending:!0},(function(){return A.GG.delete(e).then((function(){a.setState({redirect:(0,P.jV)(P.Jh.namespaces),confirmDelete:!1,isNamespacePending:!1}),t({variant:"success",title:y().createElement(m.x6,{id:"0af+8y",values:{name:e}})})})).catch((function(t){var n=t.response,s=n.status,r=n.statusText;a.setState({isOpenNamespaceModal:!1,confirmDelete:!1,isNamespacePending:!1},(function(){a.addAlert({variant:"danger",title:p.Ru._({id:"4v3Vgi",values:{name:e}}),description:(0,k.gJ)(s,r)})}))}))}))})),(0,d.A)(a,"closeModal",(function(){a.setState({isOpenNamespaceModal:!1,confirmDelete:!1})}));var n=k.mb.parseParamString(e.location.search,["page","page_size"]);return n.namespace=e.routeParams.namespace,e.routeParams.repo&&!n.repository_name&&(n.repository_name=e.routeParams.repo),n.sort||(n.sort="name"),a.state={alerts:[],canSign:!1,collections:[],confirmDelete:!1,deleteAll:!0,deleteCollection:null,filteredCount:0,group:null,isDeletionPending:!1,isNamespacePending:!1,isOpenLightspeedModal:!1,isOpenNamespaceModal:!1,isOpenSignModal:!1,namespace:null,params:n,redirect:null,showControls:!1,showGroupRemoveModal:null,showGroupSelectWizard:null,showImportModal:!1,showRoleRemoveModal:null,showRoleSelectWizard:null,unfilteredCount:0,updateCollection:null,user:null},a}return(0,u.A)(t,e),(0,l.A)(t,[{key:"componentDidMount",value:function(){this.load(),this.setState({alerts:this.context.alerts||[]}),this.context.setAlerts([])}},{key:"componentDidUpdate",value:function(e){var t=k.mb.parseParamString(this.props.location.search,["page","page_size"]);e.location.search!==this.props.location.search&&(t.namespace=this.props.routeParams.namespace,this.setState({params:t,group:this.filterGroup(t.group,this.state.namespace.groups),user:this.filterUser(t.user,this.state.namespace.users)})),e.routeParams.repo===this.props.routeParams.repo||!this.props.routeParams.repo||t.repository_name&&t.repository_name!==e.routeParams.repo||(t.repository_name=this.props.routeParams.repo,this.setState({params:t}))}},{key:"filterUser",value:function(e,t){return e?t.find((function(t){return t.name===e||t.username===e})):null}},{key:"filterGroup",value:function(e,t){return e?t.find((function(t){return t.name===e})):null}},{key:"updateRoles",value:function(e){var t=this,a=e.users,n=void 0===a?null:a,s=e.groups,r=void 0===s?null:s,o=e.alertSuccess,l=e.alertFailure,i=e.stateUpdate,c=this.state.namespace.name;A.U.update(c,O(O({},this.state.namespace),{},{users:n||this.state.namespace.users,groups:r||this.state.namespace.groups})).then((function(){t.addAlert({title:o,variant:"success"}),t.load()})).catch((function(e){var a=e.response,n=a.status,s=a.statusText;t.addAlert({title:l,variant:"danger",description:(0,k.gJ)(n,s)})})).finally((function(){t.setState(i)}))}},{key:"hasPerm",value:function(e){var t=this.state.namespace,a=this.context,n=a.hasPermission,s=a.user.is_superuser;return n(e)||function(e){var a,n;return null==t||null===(a=t.related_fields)||void 0===a||null===(a=a.my_permissions)||void 0===a||null===(n=a.includes)||void 0===n?void 0:n.call(a,e)}(e)||s}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.alerts,o=a.canSign,l=a.collections,i=a.confirmDelete,c=a.deleteCollection,u=a.filteredCount,d=a.isDeletionPending,g=a.isNamespacePending,R=a.isOpenLightspeedModal,S=a.isOpenNamespaceModal,A=a.namespace,E=a.params,w=a.redirect,j=a.showControls,M=a.showImportModal,D=a.updateCollection,N=this.context.featureFlags,U=N.legacy_roles,G=N.display_signatures;if(w)return y().createElement(b.Navigate,{to:w});if(!A)return y().createElement(C.AV,null);var x=E.tab||"collections",V=E.user,J=E.group,z=[{active:"collections"===x,title:p.Ru._({id:"DoJzLz"}),link:(0,P.jV)(P.Jh.namespaceDetail,{namespace:A.name},{tab:"collections"})},j&&{active:"cli-configuration"===x,title:p.Ru._({id:"nGGu/j"}),link:(0,P.jV)(P.Jh.namespaceDetail,{namespace:A.name},{tab:"cli-configuration"})},A.resources&&{active:"resources"===x,title:p.Ru._({id:"s+MGs7"}),link:(0,P.jV)(P.Jh.namespaceDetail,{namespace:A.name},{tab:"resources"})},{active:"access"===x,title:p.Ru._({id:"LuXP9q"}),link:(0,P.jV)(P.Jh.namespaceDetail,{namespace:A.name},{tab:"access"})},U&&{active:"role-namespaces"===x,title:p.Ru._({id:"yqpAPx"}),icon:y().createElement(_.Ay,null),link:(0,P.jV)(P.Jh.standaloneNamespaces,{},{provider:A.name})}],L=[(0,P.nb)(),{name:A.name,url:"access"===x?(0,P.jV)(P.Jh.namespaceDetail,{namespace:A.name}):null},"access"===x&&(J||V)?{url:(0,P.jV)(P.Jh.namespaceDetail,{namespace:A.name},{tab:x}),name:p.Ru._({id:"LuXP9q"})}:null,"access"===x&&J?{name:p.Ru._({id:"8uT/P7",values:{group:J}})}:null,"access"===x&&V?{name:p.Ru._({id:"AkUbn7",values:{user:V}})}:null,"access"!==x||V||J?null:{name:p.Ru._({id:"LuXP9q"})}].filter(Boolean),I=(0,k.k9)("published"),F=0===u&&!(0,k.l)(E,["is_signed","keywords","repository_name","tags"]),W=function(e){return t.updateParams(e,(function(){return t.loadCollections()}))},T=["namespace","page","page_size","sort","tab","group","user","view_type"],B=this.hasPerm("galaxy.change_namespace"),Z=E.repository_name||null,H=this.state.deleteAll?null:null==c||null===(e=c.repository)||void 0===e?void 0:e.name;return y().createElement(y().Fragment,null,y().createElement(C.NS,{alerts:n,closeAlert:function(e){return(0,C.R$)(e,{alerts:n,setAlerts:function(e){return t.setState({alerts:e})}})}}),y().createElement(C.zb,{isOpen:M,onUploadSuccess:function(){return t.setState({redirect:(0,P.jV)(P.Jh.myImports,{},{namespace:A.name})})},setOpen:function(e,a){return t.toggleImportModal(e,a)},collection:null==D?void 0:D.collection_version,namespace:A.name}),y().createElement(C.rm,{deleteCollection:c,collections:l,isDeletionPending:d,confirmDelete:i,setConfirmDelete:function(e){return t.setState({confirmDelete:e})},cancelAction:function(){return t.setState({deleteCollection:null})},deleteAction:function(){return t.setState({isDeletionPending:!0},(function(){return k.fG.deleteCollection({collection:c,setState:function(e){return t.setState(e)},load:function(){return t.load()},redirect:!1,addAlert:function(e){return t.addAlert(e)},deleteFromRepo:H})}))},deleteFromRepo:H}),S&&y().createElement(C.T6,{spinner:g,cancelAction:this.closeModal,deleteAction:this.deleteNamespace,title:p.Ru._({id:"3O16V4"}),isDisabled:!i||g},y().createElement(h.E,{style:{paddingBottom:"var(--pf-v5-global--spacer--md)"}},y().createElement(m.x6,{id:"4rNHDT",values:{0:A.name},components:{0:y().createElement("b",null)}})),y().createElement(f.S,{isChecked:i,onChange:function(e,a){return t.setState({confirmDelete:a})},label:p.Ru._({id:"lPupXS"}),id:"delete_confirm"})),R&&y().createElement(C.vo,{addAlert:function(e){return t.addAlert(e)},closeAction:function(){return t.setState({isOpenLightspeedModal:!1})},scope:"namespace",reference:this.state.namespace.name}),y().createElement(C.Os,{namespace:A,breadcrumbs:L,tabs:z,pageControls:this.renderPageControls()}),"collections"===x?y().createElement(C.Rx,(0,r.A)({count:u,ignoredParams:T,params:E,updateParams:W},(0,C.L2)({featureFlags:N,ignoredParams:T}))):null,y().createElement(C.gZ,null,"collections"===x?F?y().createElement(C.a4,{title:p.Ru._({id:"V1hs4Y"}),description:p.Ru._({id:"6STYN5"}),button:this.state.showControls&&y().createElement(v.$n,{onClick:function(){return t.setState({showImportModal:!0})}},p.Ru._({id:"gvZGSu"}))}):y().createElement("section",{className:"body"},y().createElement(C.rP,{updateParams:W,params:E,ignoredParams:T,collections:l,itemCount:u,displaySignatures:G,collectionControls:function(e){return t.renderCollectionControls(e)}})):null,"cli-configuration"===x?y().createElement("section",{className:"body"},y().createElement("div",null,y().createElement("div",null,y().createElement(m.x6,{id:"d2Hnfw",components:{0:y().createElement("b",null),1:y().createElement(C.Gr,{href:"https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#configuring-the-ansible-galaxy-client"})}})),y().createElement(C.hi,{url:I}))):null,"resources"===x?this.renderResources(A):null,"access"===x?y().createElement("section",{className:"body"},y().createElement(C.Gj,{showUserRemoveModal:this.state.showUserRemoveModal,showUserSelectWizard:this.state.showUserSelectWizard,showGroupRemoveModal:this.state.showGroupRemoveModal,showGroupSelectWizard:this.state.showGroupSelectWizard,showRoleRemoveModal:this.state.showRoleRemoveModal,showRoleSelectWizard:this.state.showRoleSelectWizard,canEditOwners:B,group:this.state.group,groups:A.groups,user:this.state.user,users:A.users,name:A.name,pulpObjectType:"pulp_ansible/namespaces",selectRolesMessage:p.Ru._({id:"+9O3kA"}),updateProps:function(e){t.setState(e)},addUser:function(e,a){var n=A.users,r=A.name,o=O(O({},e),{},{object_roles:a.map((function(e){return e.name}))}),l=[].concat((0,s.A)(n),[o]);t.updateRoles({users:l,alertSuccess:p.Ru._({id:"J7EvK0",values:{0:e.username,name:r}}),alertFailure:p.Ru._({id:"0P+eGj",values:{0:e.username,name:r}}),stateUpdate:{showUserSelectWizard:null}})},removeUser:function(e){var a=A.name,n=A.users.filter((function(t){return t!==e}));t.updateRoles({users:n,alertSuccess:p.Ru._({id:"ekGBsh",values:{0:e.username,name:a}}),alertFailure:p.Ru._({id:"O21voo",values:{0:e.username,name:a}}),stateUpdate:{showUserRemoveModal:null}})},addGroup:function(e,a){var n=A.groups,r=A.name,o=O(O({},e),{},{object_roles:a.map((function(e){return e.name}))}),l=[].concat((0,s.A)(n),[o]);t.updateRoles({groups:l,alertSuccess:p.Ru._({id:"lylrvu",values:{0:e.name,name:r}}),alertFailure:p.Ru._({id:"9/YKZd",values:{0:e.name,name:r}}),stateUpdate:{showGroupSelectWizard:null}})},removeGroup:function(e){var a=A.name,n=A.groups.filter((function(t){return t!==e}));t.updateRoles({groups:n,alertSuccess:p.Ru._({id:"94LxzI",values:{0:e.name,name:a}}),alertFailure:p.Ru._({id:"j17tAi",values:{0:e.name,name:a}}),stateUpdate:{showGroupRemoveModal:null}})},addUserRole:function(e,a){var n=A.name,r=A.users,o=O(O({},e),{},{object_roles:[].concat((0,s.A)(e.object_roles),(0,s.A)(a.map((function(e){return e.name}))))}),l=r.map((function(t){return t===e?o:t}));t.updateRoles({users:l,alertSuccess:p.Ru._({id:"ifVlo4",values:{0:e.username,name:n}}),alertFailure:p.Ru._({id:"xJC6dy",values:{0:e.username,name:n}}),stateUpdate:{showRoleSelectWizard:null}})},removeUserRole:function(e,a){var n=A.name,s=A.users,r=O(O({},a),{},{object_roles:a.object_roles.filter((function(t){return t!==e}))}),o=s.map((function(e){return e===a?r:e}));t.updateRoles({users:o,alertSuccess:p.Ru._({id:"ifVlo4",values:{0:a.username,name:n}}),alertFailure:p.Ru._({id:"xJC6dy",values:{0:a.username,name:n}}),stateUpdate:{showRoleRemoveModal:null}})},addRole:function(e,a){var n=A.name,r=A.groups,o=O(O({},e),{},{object_roles:[].concat((0,s.A)(e.object_roles),(0,s.A)(a.map((function(e){return e.name}))))}),l=r.map((function(t){return t===e?o:t}));t.updateRoles({groups:l,alertSuccess:p.Ru._({id:"svLSRe",values:{0:e.name,name:n}}),alertFailure:p.Ru._({id:"eeQk9h",values:{0:e.name,name:n}}),stateUpdate:{showRoleSelectWizard:null}})},removeRole:function(e,a){var n=A.name,s=A.groups,r=O(O({},a),{},{object_roles:a.object_roles.filter((function(t){return t!==e}))}),o=s.map((function(e){return e===a?r:e}));t.updateRoles({groups:o,alertSuccess:p.Ru._({id:"svLSRe",values:{0:a.name,name:n}}),alertFailure:p.Ru._({id:"eeQk9h",values:{0:a.name,name:n}}),stateUpdate:{showRoleRemoveModal:null}})},urlPrefix:(0,P.jV)(P.Jh.namespaceDetail,{namespace:A.name})})):null,"role-namespaces"===x?y().createElement(b.Navigate,{replace:!0,to:(0,P.jV)(P.Jh.standaloneNamespaces,{},{provider:A.name})}):null),o&&y().createElement(C.CU,{name:this.state.namespace.name,isOpen:this.state.isOpenSignModal,onSubmit:function(){return t.signAllCertificates(A,Z)},onCancel:function(){return t.setState({isOpenSignModal:!1})}}))}},{key:"handleCollectionAction",value:function(e,t){var a=this,n=this.state.collections.find((function(t){return t.collection_version.pulp_href===e})),s=n.collection_version.name;switch(t){case"upload":this.setState({updateCollection:n,showImportModal:!0});break;case"deprecate":this.addAlert({variant:"info",title:p.Ru._({id:"EcMJOL",values:{name:s}})}),A.Xy.setDeprecation(n).then((function(e){var t=(0,k.dx)(e.data.task);return(0,k.aZ)(t).then((function(){var e=n.is_deprecated?p.Ru._({id:"VlC6cD",values:{name:s}}):p.Ru._({id:"SiB+7P",values:{name:s}});return a.addAlert({title:e,variant:"success"}),a.loadCollections()}))})).catch((function(){a.addAlert({title:p.Ru._({id:"WNrewK"}),variant:"warning"})}))}}},{key:"renderResources",value:function(e){return y().createElement("div",{className:"pf-v5-c-content preview"},y().createElement(S.o,null,e.resources))}},{key:"signAllCertificates",value:function(e,t){var a=this,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;return{variant:"danger",title:p.Ru._({id:"DU+Z2J"}),description:p.Ru._({id:"KaNffr",values:{status:e}})}};A.KU.sign({signing_service:this.context.settings.GALAXY_COLLECTION_SIGNING_SERVICE,repository_name:t,namespace:e.name}).then((function(t){a.addAlert({id:"loading-signing",variant:"success",title:p.Ru._({id:"feSzhB",values:{0:e.name}})}),a.setState({isOpenSignModal:!1}),(0,k.aZ)(t.data.task_id).then((function(){a.loadCollections()})).catch((function(e){a.addAlert(n(e))})).finally((function(){a.setState({alerts:a.state.alerts.filter((function(e){return"loading-signing"!==(null==e?void 0:e.id)}))})}))})).catch((function(e){a.addAlert(n(e.response.status)),a.setState({isOpenSignModal:!1})}))}},{key:"loadAllCollections",value:function(e){return A.R4.list(O(O({},e),{},{is_highest:!0,namespace:this.props.routeParams.namespace,repository_label:"!hide_from_search"}))}},{key:"loadCollections",value:function(){var e=this;return this.loadAllCollections(k.mb.getReduced(this.state.params,["tab","group","user"])).then((function(t){e.setState({collections:t.data.data,filteredCount:t.data.meta.count})}))}},{key:"load",value:function(){var e=this;Promise.all([this.loadCollections(),this.loadAllCollections({page:1,page_size:1}),A.GG.get(this.props.routeParams.namespace,{include_related:"my_permissions"}),A.U.get(this.props.routeParams.namespace,{include_related:"my_permissions"}).catch((function(t){return e.context.user.is_anonymous&&e.context.settings.GALAXY_ENABLE_UNAUTHENTICATED_COLLECTION_ACCESS||t.response&&404===t.response.status?null:Promise.reject(t)}))]).then((function(t){var a=(0,n.A)(t,4),s=(a[0],a[1].data.meta.count),r=a[2].data,o=a[3];e.setState({canSign:(0,k.FZ)(e.context,null==o?void 0:o.data),group:e.filterGroup(e.state.params.group,r.groups),user:e.filterUser(e.state.params.user,r.users),namespace:O(O({},r),{},{users:r.users?r.users.map((function(e){return{username:e.name,object_roles:e.object_roles}})):[]}),showControls:!!o,unfilteredCount:s})})).catch((function(){e.setState({redirect:(0,P.jV)(P.Jh.notFound)})}))}},{key:"updateParams",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;k.mb.updateParams({params:e,ignoreParams:["namespace"],navigate:function(e){return t.props.navigate(e)},setState:function(e){return t.setState(e,a)}})}},{key:"renderPageControls",value:function(){var e=this;if(!this.state.showControls)return null;var t=this.state,a=t.canSign,n=t.collections,s=t.unfilteredCount,r=this.context.featureFlags,o=r.ai_deny_index,l=r.can_upload_signatures,i=this.state.params.repository_name||null,c=[y().createElement(g.t,{key:"edit",component:y().createElement(b.Link,{to:(0,P.jV)(P.Jh.editNamespace,{namespace:this.state.namespace.name})},p.Ru._({id:"N3McAj"}))}),this.hasPerm("galaxy.delete_namespace")&&(0===s?y().createElement(g.t,{key:"delete",onClick:function(){return e.setState({isOpenNamespaceModal:!0})}},p.Ru._({id:"4l1CVI"})):y().createElement(g.t,{key:"delete",isDisabled:!0,description:p.Ru._({id:"wA0oF0"})},p.Ru._({id:"4l1CVI"}))),y().createElement(g.t,{key:"imports",component:y().createElement(b.Link,{to:(0,P.jV)(P.Jh.myImports,{},{namespace:this.state.namespace.name})},p.Ru._({id:"02i3WU"}))}),a&&!l&&(i?y().createElement(g.t,{key:"sign-collections","data-cy":"sign-all-collections-button",onClick:function(){return e.setState({isOpenSignModal:!0})}},p.Ru._({id:"mNWtGl",values:{repository:i}})):y().createElement(g.t,{key:"sign-collections",isDisabled:!0,description:p.Ru._({id:"NVsZgR"})},p.Ru._({id:"zwYdsH"}))),o&&y().createElement(g.t,{key:"lightspeed-settings",onClick:function(){return e.setState({isOpenLightspeedModal:!0})}},p.Ru._({id:"kH9qoe"}))].filter(Boolean);return y().createElement("div",{style:{display:"flex",alignItems:"center"},"data-cy":"kebab-toggle"}," ",0!==n.length&&y().createElement(v.$n,{onClick:function(){return e.setState({showImportModal:!0})}},p.Ru._({id:"gvZGSu"})),c.length>0&&y().createElement("div",{"data-cy":"ns-kebab-toggle"},y().createElement(C.AN,{items:c})))}},{key:"toggleImportModal",value:function(e,t){t&&this.addAlert({title:t,variant:"warning"});var a={showImportModal:e};e||(a.updateCollection=null),this.setState(a)}},{key:"addAlert",value:function(e){this.setState({alerts:[].concat((0,s.A)(this.state.alerts),[e])})}},{key:"renderCollectionControls",value:function(e){var t=this,a=this.state,n=a.namespace,s=a.showControls,r=this.hasPerm("galaxy.upload_to_namespace");if(s){var o=function(a){return{addAlert:function(e){return t.addAlert(e)},collection:e,openModal:function(){return t.setState({deleteCollection:e,confirmDelete:!1,deleteAll:a})}}};return{uploadButton:r&&y().createElement(v.$n,{onClick:function(){return t.handleCollectionAction(e.collection_version.pulp_href,"upload")},variant:"secondary"},p.Ru._({id:"PHsJXN"})),dropdownMenu:y().createElement(C.wj,{collection:e,"data-cy":"collection-kebab",namespace:n,onDelete:o(!0),onDeprecate:function(){return t.handleCollectionAction(e.collection_version.pulp_href,"deprecate")},onRemove:o(!1)})}}}}])}(R.Component);(0,d.A)(D,"contextType",E.B);const N=(0,k.y)(D)}}]);
//# sourceMappingURL=../sourcemaps/223.9cacc4cda6f5060f79b0ca7afbf2e31a.js.map