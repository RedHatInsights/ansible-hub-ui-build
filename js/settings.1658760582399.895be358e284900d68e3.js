"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[571],{15868:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a=n(42982),r=n(15861),i=n(4942),l=n(15671),s=n(43144),o=n(60136),c=n(6215),u=n(61120),d=n(64687),m=n.n(d),p=n(48222),f=n(25221),g=n(30624),h=n(65449),E=n(50815),v=n(14938),_=n(68778),k=n(43047),y=n(69957),b=n(53983),T=n(27275),C=n(57910),S=n(61647),D=n(42807),L=n(61542);var N=function(e){(0,o.Z)(N,e);var t,n,d,L=(n=N,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,u.Z)(n);if(d){var a=(0,u.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function N(e){var t;(0,l.Z)(this,N),t=L.call(this,e);var n=C.q6.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.sort||(n.sort="-pulp_created"),n.repository||(n.repository="staging"),t.state={versions:void 0,itemCount:0,params:n,loading:!0,updatingVersions:[],alerts:[],unauthorized:!1,inputText:"",uploadCertificateModalOpen:!1,versionToUploadCertificate:void 0},t}return(0,s.Z)(N,[{key:"componentDidMount",value:function(){this.context.user&&!this.context.user.is_anonymous&&this.context.user.model_permissions.move_collection?this.queryCollections():this.setState({unauthorized:!0})}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.versions,r=n.params,l=n.itemCount,s=n.loading,o=n.unauthorized;return a||o?g.createElement(g.Fragment,null,g.createElement(E.UP,{title:f.ag._("Approval dashboard")}),g.createElement(E.UW,{alerts:this.state.alerts,closeAlert:function(e){return t.closeAlert(e)}}),o?g.createElement(E.iA,null):g.createElement(E.or,{className:"hub-certification-dashboard"},g.createElement("section",{className:"body","data-cy":"body"},g.createElement("div",{className:"toolbar hub-certification-dashboard-toolbar"},g.createElement(v.Toolbar,null,g.createElement(v.ToolbarGroup,null,g.createElement(v.ToolbarItem,null,g.createElement(E.Kv,{inputText:this.state.inputText,onChange:function(e){t.setState({inputText:e})},updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},params:r,filterConfig:[{id:"namespace",title:f.ag._("Namespace")},{id:"name",title:f.ag._("Collection Name")},{id:"repository",title:f.ag._("Status"),inputType:"select",options:[{id:D.g.NOTCERTIFIED,title:f.ag._("Rejected")},{id:D.g.NEEDSREVIEW,title:f.ag._("Needs Review")},{id:D.g.PUBLISHED,title:f.ag._("Approved")}]}]})))),g.createElement(E.tl,{params:r,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:l,isTop:!0})),g.createElement("div",null,g.createElement(E.M$,{updateParams:function(e){t.updateParams(e,(function(){return t.queryCollections()})),t.setState({inputText:""})},params:r,ignoredParams:["page_size","page","sort"],niceValues:{repository:(e={},(0,i.Z)(e,D.g.PUBLISHED,f.ag._("Approved")),(0,i.Z)(e,D.g.NEEDSREVIEW,f.ag._("Needs Review")),(0,i.Z)(e,D.g.NOTCERTIFIED,f.ag._("Rejected")),e)},niceNames:{repository:f.ag._("Status")}})),s?g.createElement(E.AW,null):this.renderTable(a,r),g.createElement("div",{className:"footer"},g.createElement(E.tl,{params:r,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:l}))),g.createElement(E.zk,{isOpen:this.state.uploadCertificateModalOpen,onCancel:function(){return t.closeUploadCertificateModal()},onSubmit:function(e){return t.submitCertificate(e)}}))):g.createElement(E.gO,null)}},{key:"renderTable",value:function(e,t){var n=this;if(0===e.length)return(0,C.vS)(t,["namespace","name","repository"])?g.createElement(E.ei,null):g.createElement(E.vv,{title:f.ag._("No managed collections yet"),description:f.ag._("Collections will appear once uploaded")});var a={headers:[{title:f.ag._("Namespace"),type:"alpha",id:"namespace"},{title:f.ag._("Collection"),type:"alpha",id:"collection"},{title:f.ag._("Version"),type:"number",id:"version"},{title:f.ag._("Date created"),type:"number",id:"pulp_created"},{title:f.ag._("Status"),type:"none",id:"status"},{title:"",type:"none",id:"certify"}]};return g.createElement("table",{"aria-label":f.ag._("Collection versions"),className:"hub-c-table-content pf-c-table"},g.createElement(E.h2,{options:a,params:t,updateParams:function(e){return n.updateParams(e,(function(){return n.queryCollections()}))}}),g.createElement("tbody",null,e.map((function(e,t){return n.renderRow(e,t)}))))}},{key:"renderStatus",value:function(e){if(this.state.updatingVersions.includes(e))return g.createElement("span",{className:"fa fa-lg fa-spin fa-spinner"});if(e.repository_list.includes(D.g.PUBLISHED)){var t,n=((null===(t=this.context)||void 0===t?void 0:t.featureFlags)||{}).display_signatures;return g.createElement(v.Label,{variant:"outline",color:"green",icon:g.createElement(_.rE,null)},n&&"signed"===e.sign_state?f.ag._("Signed and approved"):f.ag._("Approved"))}if(e.repository_list.includes(D.g.NOTCERTIFIED))return g.createElement(v.Label,{variant:"outline",color:"red",icon:g.createElement(k.$O,null)},f.ag._("Rejected"));if(e.repository_list.includes(D.g.NEEDSREVIEW)){var a,r=(null===(a=this.context)||void 0===a?void 0:a.featureFlags)||{},i=r.can_upload_signatures,l=r.require_upload_signatures;return g.createElement(v.Label,{variant:"outline",color:"orange",icon:g.createElement(y.LP,null)},"unsigned"===e.sign_state&&i&&l?f.ag._("Needs signature and review"):f.ag._("Needs review"))}}},{key:"renderRow",value:function(e,t){var n=this;return g.createElement("tr",{key:t,"data-cy":"CertificationDashboard-row"},g.createElement("td",null,e.namespace),g.createElement("td",null,e.name),g.createElement("td",null,g.createElement(h.Link,{to:(0,S.dI)(S.nB.collectionByRepo,{namespace:e.namespace,collection:e.name,repo:e.repository_list[0]},{version:e.version})},e.version),g.createElement(v.Button,{variant:v.ButtonVariant.link,onClick:function(){n.download(e.namespace,e.name,e.version)}},g.createElement(b._8,null))),g.createElement("td",null,g.createElement(E.Id,{date:e.created_at})),g.createElement("td",null,this.renderStatus(e)),this.renderButtons(e))}},{key:"renderButtons",value:function(e){var t,n=this,a=(null===(t=this.context)||void 0===t?void 0:t.featureFlags)||{},r=a.can_upload_signatures,i=a.collection_auto_sign,l=a.require_upload_signatures;if(this.state.updatingVersions.includes(e))return g.createElement(E.cT,null);var s=r&&"unsigned"===e.sign_state,o=s&&l,c=i&&!l,u=[s&&g.createElement(g.Fragment,{key:"upload"},g.createElement(v.Button,{onClick:function(){return n.openUploadCertificateModal(e)}},f.ag._("Upload signature"))," "),g.createElement(v.Button,{key:"approve",isDisabled:o,"data-cy":"approve-button",onClick:function(){return n.updateCertification(e,D.g.NEEDSREVIEW,D.g.PUBLISHED)}},c?f.ag._("Sign and approve"):f.ag._("Approve"))].filter(Boolean),d=g.createElement(v.DropdownItem,{key:"imports",component:g.createElement(h.Link,{to:(0,S.dI)(S.nB.myImports,{},{namespace:e.namespace,name:e.name,version:e.version})},f.ag._("View Import Logs"))}),m=function(t,a){return g.createElement(v.DropdownItem,{onClick:function(){return n.updateCertification(e,a,D.g.PUBLISHED)},isDisabled:t,key:"certify"},c?f.ag._("Sign and approve"):f.ag._("Approve"))},p=function(t,a){return g.createElement(v.DropdownItem,{onClick:function(){return n.updateCertification(e,a,D.g.NOTCERTIFIED)},isDisabled:t,className:"rejected-icon",key:"reject"},f.ag._("Reject"))};return e.repository_list.includes(D.g.PUBLISHED)?g.createElement(E.cT,{kebabItems:[m(!0,D.g.PUBLISHED),p(!1,D.g.PUBLISHED),d]}):e.repository_list.includes(D.g.NOTCERTIFIED)?g.createElement(E.cT,{kebabItems:[m(!1,D.g.NOTCERTIFIED),p(!0,D.g.NOTCERTIFIED),d]}):e.repository_list.includes(D.g.NEEDSREVIEW)?g.createElement(E.cT,{kebabItems:[p(!1,D.g.NEEDSREVIEW),d],buttons:u}):void 0}},{key:"openUploadCertificateModal",value:function(e){this.setState({uploadCertificateModalOpen:!0,versionToUploadCertificate:e})}},{key:"submitCertificate",value:(t=(0,r.Z)(m().mark((function e(t){var n,a,r,i=this;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.versionToUploadCertificate,e.next=3,T.x8.getRepository({name:"staging"});case 3:a=e.sent,r="".concat("/api/automation-hub/pulp/api/v3/","content/ansible/collection_versions/").concat(n.id,"/"),T.Xp.upload({file:t,repository:a.data.results[0].pulp_href,signed_collection:r}).then((function(e){(0,C.BA)((0,C.LL)(e.data.task)).then((function(){i.updateList(),i.setState({alerts:i.state.alerts.concat({variant:"success",title:f.ag._('Certificate for collection "{0} {1} v{2}" has been successfully uploaded.',{0:n.namespace,1:n.name,2:n.version})})})})).catch((function(e){i.setState({alerts:i.state.alerts.concat({variant:"danger",title:f.ag._('The certificate for "{0} {1} v{2}" could not be saved.',{0:n.namespace,1:n.name,2:n.version}),description:e})})}))})).catch((function(e){var t=e.response,a=t.status,r=t.statusText;i.setState({alerts:i.state.alerts.concat({variant:"danger",title:f.ag._('The certificate for "{0} {1} v{2}" could not be saved.',{0:n.namespace,1:n.name,2:n.version}),description:(0,C.N3)(a,r)})})})).finally((function(){i.closeUploadCertificateModal()}));case 6:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"closeUploadCertificateModal",value:function(){this.setState({uploadCertificateModalOpen:!1,versionToUploadCertificate:void 0})}},{key:"updateCertification",value:function(e,t,n){var a=this,r=this.state.alerts;this.setState({updatingVersions:[]},(function(){return T.eq.setRepository(e.namespace,e.name,e.version,t,n).then((function(t){a.setState({updatingVersions:[e]}),a.waitForUpdate(t.data.remove_task_id,e)}),a.addAlert(g.createElement(p.cC,{id:'Certification status for collection "{0} {1} v{2}" has been successfully updated.',values:{0:e.namespace,1:e.name,2:e.version}}),"success")).catch((function(t){var n=t.response,i=n.status,l=n.statusText;a.setState({updatingVersions:[],alerts:r.concat({variant:"danger",title:f.ag._('Changes to certification status for collection "{0} {1} v{2}" could not be saved.',{0:e.namespace,1:e.name,2:e.version}),description:(0,C.N3)(i,l)})})}))}))}},{key:"waitForUpdate",value:function(e,t){var n=this;return T.Kc.get(e).then(function(){var a=(0,r.Z)(m().mark((function a(r){return m().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("waiting"!==r.data.state&&"running"!==r.data.state){a.next=6;break}return a.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:n.waitForUpdate(e,t),a.next=11;break;case 6:if("completed"!==r.data.state){a.next=10;break}return a.abrupt("return",n.updateList());case 10:n.setState({updatingVersions:[],alerts:n.state.alerts.concat({variant:"danger",title:f.ag._('Changes to certification status for collection "{0} {1} v{2}" could not be saved.',{0:t.namespace,1:t.name,2:t.version}),description:(0,C.N3)(500,f.ag._("Internal Server Error"))})});case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}},{key:"updateList",value:function(){var e=this;return T.eq.list(this.state.params).then(function(){var t=(0,r.Z)(m().mark((function t(n){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({versions:n.data.data,updatingVersions:[]});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"queryCollections",value:function(){var e=this;this.setState({loading:!0},(function(){return T.eq.list(e.state.params).then((function(t){e.setState({versions:t.data.data,itemCount:t.data.meta.count,loading:!1,updatingVersions:[]})}))}))}},{key:"download",value:function(e,t,n){T.gu.getDownloadURL("staging",e,t,n).then((function(e){window.location.assign(e)}))}},{key:"updateParams",get:function(){return C.q6.updateParamsMixin()}},{key:"closeAlert",get:function(){return(0,E.NQ)("alerts")}},{key:"addAlert",value:function(e,t,n){this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[{description:n,title:e,variant:t}])})}}]),N}(g.Component);const R=(0,h.withRouter)(N);N.contextType=L.I},91811:(e,t,n)=>{n.r(t),n.d(t,{TaskListView:()=>y,default:()=>b});var a=n(42982),r=n(15671),i=n(43144),l=n(60136),s=n(6215),o=n(61120),c=n(48222),u=n(25221),d=n(30624),m=n(42807),p=n(65449),f=n(14938),g=n(57910),h=n(90005),E=n(50815),v=n(27275),_=n(61647),k=n(61542);var y=function(e){(0,l.Z)(y,e);var t,n,k=(t=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(n){var r=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function y(e){var t;(0,r.Z)(this,y),t=k.call(this,e);var n=g.q6.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.sort||(n.sort="-pulp_created"),t.state={params:n,items:[],loading:!0,itemCount:0,alerts:[],cancelModalVisible:!1,selectedTask:null,unauthorised:!1,inputText:""},t}return(0,i.Z)(y,[{key:"componentDidMount",value:function(){!this.context.user||this.context.user.is_anonymous?this.setState({loading:!1,unauthorised:!0}):this.queryTasks()}},{key:"render",value:function(){var e=this,t=this.state,n=t.params,a=t.itemCount,r=t.loading,i=t.items,l=t.alerts,s=t.cancelModalVisible,o=t.unauthorised,c=0===i.length&&!(0,g.vS)(n,["name__contains","state"]);return d.createElement(d.Fragment,null,d.createElement(E.UW,{alerts:l,closeAlert:function(t){return e.closeAlert(t)}}),s?this.renderCancelModal():null,d.createElement(E.UP,{title:u.ag._("Task Management")}),o?d.createElement(E.iA,null):c&&!r?d.createElement(E.vv,{title:u.ag._("No tasks yet"),description:u.ag._("Tasks will appear once created.")}):d.createElement(E.or,null,r?d.createElement(E.AW,null):d.createElement("section",{className:"body"},d.createElement("div",{className:"hub-task-list"},d.createElement(f.Toolbar,null,d.createElement(f.ToolbarContent,null,d.createElement(f.ToolbarGroup,null,d.createElement(f.ToolbarItem,null,d.createElement(E.Kv,{inputText:this.state.inputText,onChange:function(t){return e.setState({inputText:t})},updateParams:function(t){t.page=1,e.updateParams(t,(function(){return e.queryTasks()}))},params:n,filterConfig:[{id:"name__contains",title:u.ag._("Task name")},{id:"state",title:u.ag._("Status"),inputType:"select",options:[{id:"completed",title:u.ag._("Completed")},{id:"failed",title:u.ag._("Failed")},{id:"running",title:u.ag._("Running")},{id:"waiting",title:u.ag._("Waiting")}]}]}))))),d.createElement(E.tl,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.queryTasks()}))},count:a,isTop:!0})),d.createElement("div",null,d.createElement(E.M$,{updateParams:function(t){e.updateParams(t,(function(){return e.queryTasks()})),e.setState({inputText:""})},params:n,ignoredParams:["page_size","page","sort","ordering"],niceNames:{name__contains:u.ag._("Task name"),state:u.ag._("Status")}})),r?d.createElement(E.AW,null):this.renderTable(n),d.createElement(E.tl,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.queryTasks()}))},count:a}))))}},{key:"renderTable",value:function(e){var t=this,n=this.state.items;if(0===n.length)return d.createElement(E.ei,null);var a={headers:[{title:u.ag._("Task name"),type:"alpha",id:"name"},{title:u.ag._("Created on"),type:"numeric",id:"pulp_created"},{title:u.ag._("Started at"),type:"numeric",id:"started_at"},{title:u.ag._("Finished at"),type:"numeric",id:"finished_at"},{title:u.ag._("Status"),type:"alpha",id:"state"}]};return d.createElement("table",{"aria-label":u.ag._("Task list"),className:"hub-c-table-content pf-c-table"},d.createElement(E.h2,{options:a,params:e,updateParams:function(e){e.page=1,t.updateParams(e,(function(){return t.queryTasks()}))}}),d.createElement("tbody",null,n.map((function(e,n){return t.renderTableRow(e,n)}))))}},{key:"renderTableRow",value:function(e,t){var n=e.name,a=e.state,r=e.pulp_created,i=e.started_at,l=e.finished_at,s=e.pulp_href,o=(0,h.L)(s);return d.createElement("tr",{key:t},d.createElement("td",null,d.createElement(p.Link,{to:(0,_.dI)(_.nB.taskDetail,{task:o})},d.createElement(E.u,{content:m.g.TASK_NAMES[n]&&u.ag._(m.g.TASK_NAMES[n])||n},n))),d.createElement("td",null,d.createElement(E.Id,{date:r})),d.createElement("td",null,d.createElement(E.Id,{date:i})),d.createElement("td",null,d.createElement(E.Id,{date:l})),d.createElement("td",null,d.createElement(E.Eg,{status:a})),d.createElement("td",null,this.cancelButton(a,e)))}},{key:"cancelButton",value:function(e,t){var n=this;switch(e){case"running":case"waiting":return d.createElement(f.Button,{variant:"secondary","aria-label":u.ag._("Delete"),key:"delete",onClick:function(){return n.setState({cancelModalVisible:!0,selectedTask:t})}},u.ag._("Stop task"))}}},{key:"renderCancelModal",value:function(){var e=this,t=m.g.TASK_NAMES[this.state.selectedTask.name]||this.state.selectedTask.name;return d.createElement(E.sm,{cancelAction:function(){return e.setState({cancelModalVisible:!1})},title:u.ag._("Stop task?"),confirmAction:function(){return e.selectedTask(e.state.selectedTask,t)},confirmButtonTitle:u.ag._("Yes, stop")},u.ag._("{name} will be cancelled.",{name:t}))}},{key:"selectedTask",value:function(e,t){var n=this;v.sb.patch((0,h.L)(e.pulp_href),{state:"canceled"}).then((function(){n.setState({loading:!0,selectedTask:null,cancelModalVisible:!1,alerts:[].concat((0,a.Z)(n.state.alerts),[{variant:"success",title:t,description:d.createElement(c.cC,{id:'Task "{name}" stopped successfully.',values:{name:t}})}])}),n.queryTasks()})).catch((function(e){var r=e.response,i=r.status,l=r.statusText;n.setState({loading:!0,cancelModalVisible:!1,alerts:[].concat((0,a.Z)(n.state.alerts),[{variant:"danger",title:u.ag._('Task "{name}" could not be stopped.',{name:t}),description:(0,g.N3)(i,l)}])})}))}},{key:"closeAlert",get:function(){return(0,E.NQ)("alerts")}},{key:"queryTasks",value:function(){var e=this;this.setState({loading:!0},(function(){v.sb.list(e.state.params).then((function(t){e.setState({items:t.data.results,itemCount:t.data.count,loading:!1})})).catch((function(t){var n=t.response,r=n.status,i=n.statusText;e.setState({loading:!1,items:[],itemCount:0,alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:u.ag._("Tasks list could not be displayed."),description:(0,g.N3)(r,i)}])})}))}))}},{key:"updateParams",get:function(){return g.q6.updateParamsMixin()}}]),y}(d.Component);const b=(0,p.withRouter)(y);y.contextType=k.I},95153:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(42982),r=n(15671),i=n(43144),l=n(60136),s=n(6215),o=n(61120),c=n(48403),u=n.n(c),d=n(48222),m=n(30624),p=n(25221),f=n(65449),g=n(50815),h=n(14938),E=n(76473),v=n(27275),_=n(61647),k=n(42807),y=n(90005),b=n(57910);var T=function(e){(0,l.Z)(T,e);var t,n,c=(t=T,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(n){var r=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function T(e){var t;return(0,r.Z)(this,T),(t=c.call(this,e)).state={loading:!0,task:null,parentTask:null,childTasks:[],alerts:[],cancelModalVisible:!1,taskName:"",resources:[],redirect:null,polling:null},t}return(0,i.Z)(T,[{key:"componentDidMount",value:function(){this.loadContent()}},{key:"componentWillUnmount",value:function(){this.state.polling&&clearInterval(this.state.polling)}},{key:"componentDidUpdate",value:function(e){e.match.params.task!==this.props.match.params.task&&(this.setState({loading:!0}),this.loadContent())}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.task,r=t.parentTask,i=t.childTasks,l=t.cancelModalVisible,s=t.alerts,o=t.taskName,c=t.resources,d=t.redirect,v=[{url:_.nB.taskList,name:p.ag._("Task management")},{name:a?o:""}],b=null;return r&&(b=(0,y.L)(r.pulp_href)),d?m.createElement(f.Redirect,{to:d}):n?m.createElement(g.AW,null):m.createElement(m.Fragment,null,m.createElement(g.UW,{alerts:s,closeAlert:function(t){return e.closeAlert(t)}}),l?this.renderCancelModal():null,m.createElement(g.UP,{title:o,breadcrumbs:m.createElement(g.Oo,{links:v}),pageControls:["running","waiting"].includes(a.state)&&m.createElement(h.Button,{variant:"secondary",onClick:function(){return e.setState({cancelModalVisible:!0})}},p.ag._("Stop task")),status:m.createElement(g.Eg,{className:"hub-c-task-status",status:a.state})}),m.createElement(g.or,null,m.createElement(h.Flex,null,m.createElement(h.Flex,{direction:{default:"column"},flex:{default:"flex_1"}},m.createElement(h.FlexItem,null,m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Task detail")),m.createElement("br",null),m.createElement(h.DescriptionList,{isHorizontal:!0},m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Task name")),m.createElement(h.DescriptionListDescription,null,a.name)),a.name!==o&&m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Descriptive name")),m.createElement(h.DescriptionListDescription,null,o)),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Finished at")),m.createElement(h.DescriptionListDescription,null,m.createElement(g.Id,{date:a.finished_at}))),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Created on")),m.createElement(h.DescriptionListDescription,null,m.createElement(g.Id,{date:a.pulp_created})))))),m.createElement(h.FlexItem,null,m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Task groups")),m.createElement("br",null),m.createElement(h.DescriptionList,{isHorizontal:!0},m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Task group")),m.createElement(h.DescriptionListDescription,null,a.task_group?a.task_group:p.ag._("No task group"))),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Parent task")),m.createElement(h.DescriptionListDescription,null,r?m.createElement(f.Link,{to:(0,_.dI)(_.nB.taskDetail,{task:b})},k.g.TASK_NAMES[r.name]&&p.ag._(k.g.TASK_NAMES[r.name])||r.name):p.ag._("No parent task"))),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Child tasks")),m.createElement(h.DescriptionListDescription,null,i.length?i.map((function(e){var t=(0,y.L)(e.pulp_href);return m.createElement(m.Fragment,{key:t},m.createElement(f.Link,{to:(0,_.dI)(_.nB.taskDetail,{task:t})},k.g.TASK_NAMES[e.name]&&p.ag._(k.g.TASK_NAMES[e.name])||e.name),m.createElement("br",null))})):p.ag._("No child task")))))),m.createElement(h.FlexItem,null,m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Reserve resources")),m.createElement("br",null),c.length?m.createElement(h.DescriptionList,{isHorizontal:!0},c.map((function(e,t){return m.createElement(m.Fragment,{key:e.type+t},m.createElement("hr",null),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Type")),m.createElement(h.DescriptionListDescription,null,e.type)),e.name&&m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Name")),m.createElement(h.DescriptionListDescription,null,e.name)))}))):p.ag._("There's no resource record")))),m.createElement(h.Flex,{direction:{default:"column"},flex:{default:"flex_1"}},m.createElement(h.FlexItem,null,!a.error&&m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Progress messages")),m.createElement("br",null),a.progress_reports.length?m.createElement(h.DescriptionList,{isHorizontal:!0},a.progress_reports.reverse().map((function(e,t){return m.createElement(m.Fragment,{key:t},m.createElement("hr",null),Object.keys(e).map((function(t,n){return!!e[t]&&m.createElement(h.DescriptionListGroup,{key:t+n},m.createElement(h.DescriptionListTerm,null,{message:p.ag._("Message"),code:p.ag._("Code"),state:p.ag._("State"),done:p.ag._("Done")}[t]||u()(t)),m.createElement(h.DescriptionListDescription,null,e[t]))}))," ")}))):m.createElement(g.WU,{icon:E.TF,title:p.ag._("There is no progress message."),description:p.ag._("There is no progress message.")})),!!a.error&&m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Error message")),m.createElement("br",null),m.createElement(m.Fragment,null,m.createElement(h.Title,{headingLevel:"h3"},p.ag._("Description")),m.createElement(h.CodeBlock,null,a.error.description),m.createElement(h.Title,{headingLevel:"h3"},p.ag._("Traceback")),m.createElement(h.CodeBlock,{className:"hub-code-block"},a.error.traceback))))))))}},{key:"renderCancelModal",value:function(){var e=this,t=this.state.taskName;return m.createElement(g.sm,{cancelAction:function(){return e.setState({cancelModalVisible:!1})},confirmAction:function(){return e.cancelTask()},title:p.ag._("Stop task"),confirmButtonTitle:p.ag._("Yes, stop")},p.ag._("{name} will stop running.",{name:t}))}},{key:"cancelTask",value:function(){var e=this,t=this.state,n=t.task,r=t.taskName;v.sb.patch((0,y.L)(n.pulp_href),{state:"canceled"}).then((function(){e.setState({loading:!0,cancelModalVisible:!1,alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"success",title:r,description:m.createElement(d.cC,{id:'Task "{taskName}" stopped successfully.',values:{taskName:r}})}])}),e.loadContent()})).catch((function(t){var n=t.response,i=n.status,l=n.statusText;e.setState({loading:!0,cancelModalVisible:!1,alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:p.ag._('Task "{taskName}" could not be stopped.',{taskName:r}),description:(0,b.N3)(i,l)}])}),e.loadContent()}))}},{key:"loadContent",value:function(){var e=this;this.state.polling||this.state.task||this.setState({polling:setInterval((function(){return e.loadContent()}),1e4)});var t=this.props.match.params.task;return v.sb.get(t).then((function(t){var n=[],a=null,r=[],i=[];if(["canceled","completed","failed"].includes(t.data.state)&&(clearInterval(e.state.polling),e.setState({polling:null})),t.data.parent_task){var l=(0,y.L)(t.data.parent_task);n.push(v.sb.get(l).then((function(e){a=e.data})).catch((function(){return!0})))}return t.data.child_tasks.length&&t.data.child_tasks.forEach((function(e){var t=(0,y.L)(e);n.push(v.sb.get(t).then((function(e){r.push(e.data)})).catch((function(){return!0})))})),t.data.reserved_resources_record.length&&t.data.reserved_resources_record.forEach((function(e){var t=e.replace("/api/automation-hub/pulp/api/v3/",""),a=(0,y.L)(t),r=e.split("/"),l=a?r[4]:r[r.length-2];a?n.push(v.O8.get(t).then((function(e){i.push({name:e.data.name,type:l})})).catch((function(){return!0}))):i.push({type:l})})),Promise.all(n).then((function(){e.setState({task:t.data,childTasks:r,parentTask:a,loading:!1,taskName:k.g.TASK_NAMES[t.data.name]&&p.ag._(k.g.TASK_NAMES[t.data.name])||t.data.name,resources:i})}))})).catch((function(){e.setState({redirect:_.nB.notFound})}))}},{key:"closeAlert",get:function(){return(0,g.NQ)("alerts")}}]),T}(m.Component);const C=(0,f.withRouter)(T)},79784:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(42982),r=n(15671),i=n(43144),l=n(60136),s=n(6215),o=n(61120),c=n(48222),u=n(25221),d=n(30624),m=n(65449),p=n(14938),f=n(61647),g=n(50815),h=n(57910),E=n(61542),v=n(27275);var _=function(e){(0,l.Z)(_,e);var t,n,E=(t=_,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(n){var r=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function _(e){var t;return(0,r.Z)(this,_),(t=E.call(this,e)).state={tokenData:void 0,alerts:[],repoUrl:""},t}return(0,i.Z)(_,[{key:"getMyDistributionPath",value:function(){var e=this;v.g9.list().then((function(t){var n,a=(null===(n=t.data.data.find((function(e){return e.base_path.includes("synclist")})))||void 0===n?void 0:n.base_path)||"";e.setState({repoUrl:a})})).catch((function(t){var n=t.response,r=n.status,i=n.statusText;e.setState({repoUrl:"",alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:u.ag._("Server URL could not be displayed."),description:(0,h.N3)(r,i)}])})}))}},{key:"componentDidMount",value:function(){var e=this;window.insights.chrome.auth.getOfflineToken().then((function(t){e.setState({tokenData:t.data})})),this.getMyDistributionPath()}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.tokenData,r=n.alerts,i='curl https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token -d grant_type=refresh_token -d client_id="cloud-services" -d refresh_token="'.concat(null!==(e=null==a?void 0:a.refresh_token)&&void 0!==e?e:"{{ user_token }}",'" --fail --silent --show-error --output /dev/null');return d.createElement(d.Fragment,null,d.createElement(g.UW,{alerts:r,closeAlert:function(e){return t.closeAlert(e)}}),d.createElement(g.UP,{title:u.ag._("Connect to Hub")}),d.createElement(g.or,null,d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Connect Private Automation Hub")),d.createElement("p",null,d.createElement(c.cC,{id:"Use the <0>Repository Management</0> page to sync collections curated by your organization to the Red Hat Certified repository in your private Automation Hub. Users with the correct permissions can use the sync toggles on the <1>Collections</1> page to control which collections are added to their organization's sync repository.",components:{0:d.createElement(m.Link,{to:f.nB.repositories}),1:d.createElement(m.Link,{to:f.nB.search})}}))),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Connect the ansible-galaxy client")),d.createElement("p",null,d.createElement(c.cC,{id:"Documentation on how to configure the <0>ansible-galaxy</0> client can be found <1>here</1>. Use the following parameters to configure the client.",components:{0:d.createElement("code",null),1:d.createElement("a",{href:"https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/",target:"_blank",rel:"noreferrer"})}}))),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Offline token")),d.createElement("p",null,d.createElement(c.cC,{id:"Use this token to authenticate clients that need to download content from Automation Hub. This is a secret token used to protect your content. Store your API token in a secure location."})),a?d.createElement("div",null,d.createElement(g.M5,null,a.refresh_token)):d.createElement("div",null,d.createElement(p.Button,{onClick:function(){return t.loadToken()}},u.ag._("Load token"))),d.createElement("div",{className:"pf-c-content",style:{paddingTop:"var(--pf-global--spacer--md)"}},d.createElement("span",null,d.createElement(c.cC,{id:"The token will expire after 30 days of inactivity. Run the command below periodically to prevent your token from expiring."})),d.createElement(g.M5,{isCode:!0,isReadOnly:!0,variant:p.ClipboardCopyVariant.expansion},i)),d.createElement("h2",null,u.ag._("Manage tokens")),d.createElement(c.cC,{id:"To revoke a token or see all of your tokens, visit the <0>offline API token management</0> page.",components:{0:d.createElement("a",{href:"https://sso.redhat.com/auth/realms/redhat-external/account/applications",target:"_blank",rel:"noreferrer"})}})),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Server URL")),d.createElement("p",null,d.createElement(c.cC,{id:"Use this URL to configure the API endpoints that clients need to download content from Automation Hub."})),d.createElement(g.M5,{isReadOnly:!0},(0,h.qX)(this.state.repoUrl))),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("SSO URL")),d.createElement("p",null,d.createElement(c.cC,{id:"Use this URL to configure the authentication URLs that clients need to download content from Automation Hub."})),d.createElement(g.M5,{isReadOnly:!0},"https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token"))))}},{key:"loadToken",value:function(){window.insights.chrome.auth.doOffline()}},{key:"closeAlert",get:function(){return(0,g.NQ)("alerts")}}]),_}(d.Component);const k=(0,m.withRouter)(_);_.contextType=E.I}}]);
//# sourceMappingURL=../sourcemaps/settings.7958bbad85f60ad6c0416796621f1c4c.js.map