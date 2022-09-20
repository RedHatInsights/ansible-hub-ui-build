"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[571],{15868:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var a=n(42982),r=n(4942),l=n(15671),i=n(43144),s=n(60136),o=n(6215),c=n(61120),u=n(27693),d=n(30624),m=n(65449),p=n(85624),g=n(11930),f=n(68778),h=n(43047),E=n(69957),v=n(53983),_=n(47922),k=n(53681),y=n(61647),T=n(42807),b=n(61542);var C=function(e){(0,s.Z)(C,e);var t,n,b=(t=C,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var r=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function C(e){var t;(0,l.Z)(this,C),t=b.call(this,e);var n=k.q6.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.sort||(n.sort="-pulp_created"),n.repository||(n.repository="staging"),t.state={versions:void 0,itemCount:0,params:n,loading:!0,updatingVersions:[],alerts:[],unauthorized:!1,inputText:"",uploadCertificateModalOpen:!1,versionToUploadCertificate:null},t}return(0,i.Z)(C,[{key:"componentDidMount",value:function(){this.context.user&&!this.context.user.is_anonymous&&this.context.user.model_permissions.move_collection?this.queryCollections():this.setState({unauthorized:!0})}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.versions,l=n.params,i=n.itemCount,s=n.loading,o=n.unauthorized;return a||o?d.createElement(d.Fragment,null,d.createElement(p.UP,{title:u.ag._("Approval dashboard")}),d.createElement(p.UW,{alerts:this.state.alerts,closeAlert:function(e){return t.closeAlert(e)}}),o?d.createElement(p.iA,null):d.createElement(p.or,{className:"hub-certification-dashboard"},d.createElement("section",{className:"body","data-cy":"body"},d.createElement("div",{className:"toolbar hub-toolbar"},d.createElement(g.Toolbar,null,d.createElement(g.ToolbarGroup,null,d.createElement(g.ToolbarItem,null,d.createElement(p.Kv,{inputText:this.state.inputText,onChange:function(e){t.setState({inputText:e})},updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},params:l,filterConfig:[{id:"namespace",title:u.ag._("Namespace")},{id:"name",title:u.ag._("Collection Name")},{id:"repository",title:u.ag._("Status"),inputType:"select",options:[{id:T.g.NOTCERTIFIED,title:u.ag._("Rejected")},{id:T.g.NEEDSREVIEW,title:u.ag._("Needs Review")},{id:T.g.PUBLISHED,title:u.ag._("Approved")}]}]})))),d.createElement(p.tl,{params:l,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:i,isTop:!0})),d.createElement("div",null,d.createElement(p.M$,{updateParams:function(e){t.updateParams(e,(function(){return t.queryCollections()})),t.setState({inputText:""})},params:l,ignoredParams:["page_size","page","sort"],niceValues:{repository:(e={},(0,r.Z)(e,T.g.PUBLISHED,u.ag._("Approved")),(0,r.Z)(e,T.g.NEEDSREVIEW,u.ag._("Needs Review")),(0,r.Z)(e,T.g.NOTCERTIFIED,u.ag._("Rejected")),e)},niceNames:{repository:u.ag._("Status")}})),s?d.createElement(p.AW,null):this.renderTable(a,l),d.createElement("div",{className:"footer"},d.createElement(p.tl,{params:l,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:i}))),d.createElement(p.zk,{isOpen:this.state.uploadCertificateModalOpen,onCancel:function(){return t.closeUploadCertificateModal()},onSubmit:function(e){return t.submitCertificate(e)}}))):d.createElement(p.gO,null)}},{key:"renderTable",value:function(e,t){var n=this;if(0===e.length)return(0,k.vS)(t,["namespace","name","repository"])?d.createElement(p.ei,null):d.createElement(p.vv,{title:u.ag._("No managed collections yet"),description:u.ag._("Collections will appear once uploaded")});var a={headers:[{title:u.ag._("Namespace"),type:"alpha",id:"namespace"},{title:u.ag._("Collection"),type:"alpha",id:"collection"},{title:u.ag._("Version"),type:"number",id:"version"},{title:u.ag._("Date created"),type:"number",id:"pulp_created"},{title:u.ag._("Status"),type:"none",id:"status"},{title:"",type:"none",id:"certify"}]};return d.createElement("table",{"aria-label":u.ag._("Collection versions"),className:"hub-c-table-content pf-c-table"},d.createElement(p.h2,{options:a,params:t,updateParams:function(e){return n.updateParams(e,(function(){return n.queryCollections()}))}}),d.createElement("tbody",null,e.map((function(e,t){return n.renderRow(e,t)}))))}},{key:"renderStatus",value:function(e){if(this.state.updatingVersions.includes(e))return d.createElement("span",{className:"fa fa-lg fa-spin fa-spinner"});if(e.repository_list.includes(T.g.PUBLISHED)){var t,n=((null===(t=this.context)||void 0===t?void 0:t.featureFlags)||{}).display_signatures;return d.createElement(g.Label,{variant:"outline",color:"green",icon:d.createElement(f.rE,null)},n&&"signed"===e.sign_state?u.ag._("Signed and approved"):u.ag._("Approved"))}if(e.repository_list.includes(T.g.NOTCERTIFIED))return d.createElement(g.Label,{variant:"outline",color:"red",icon:d.createElement(h.$O,null)},u.ag._("Rejected"));if(e.repository_list.includes(T.g.NEEDSREVIEW)){var a,r=(null===(a=this.context)||void 0===a?void 0:a.featureFlags)||{},l=r.can_upload_signatures,i=r.require_upload_signatures;return d.createElement(g.Label,{variant:"outline",color:"orange",icon:d.createElement(E.LP,null)},"unsigned"===e.sign_state&&l&&i?u.ag._("Needs signature and review"):u.ag._("Needs review"))}}},{key:"renderRow",value:function(e,t){var n=this;return d.createElement("tr",{key:t,"data-cy":"CertificationDashboard-row"},d.createElement("td",null,e.namespace),d.createElement("td",null,e.name),d.createElement("td",null,d.createElement(m.Link,{to:(0,y.dI)(y.nB.collectionByRepo,{namespace:e.namespace,collection:e.name,repo:e.repository_list[0]},{version:e.version})},e.version),d.createElement(g.Button,{variant:g.ButtonVariant.link,onClick:function(){n.download(e.namespace,e.name,e.version)}},d.createElement(v._8,null))),d.createElement("td",null,d.createElement(p.Id,{date:e.created_at})),d.createElement("td",null,this.renderStatus(e)),this.renderButtons(e))}},{key:"renderButtons",value:function(e){var t,n=this,a=(null===(t=this.context)||void 0===t?void 0:t.featureFlags)||{},r=a.can_upload_signatures,l=a.collection_auto_sign,i=a.require_upload_signatures;if(this.state.updatingVersions.includes(e))return d.createElement(p.cT,null);var s=r&&"unsigned"===e.sign_state,o=s&&i,c=l&&!i,f=[s&&d.createElement(d.Fragment,{key:"upload"},d.createElement(g.Button,{onClick:function(){return n.openUploadCertificateModal(e)}},u.ag._("Upload signature"))," "),d.createElement(g.Button,{key:"approve",isDisabled:o,"data-cy":"approve-button",onClick:function(){return n.updateCertification(e,T.g.NEEDSREVIEW,T.g.PUBLISHED)}},c?u.ag._("Sign and approve"):u.ag._("Approve"))].filter(Boolean),h=d.createElement(g.DropdownItem,{key:"imports",component:d.createElement(m.Link,{to:(0,y.dI)(y.nB.myImports,{},{namespace:e.namespace,name:e.name,version:e.version})},u.ag._("View Import Logs"))}),E=function(t,a){return d.createElement(g.DropdownItem,{onClick:function(){return n.updateCertification(e,a,T.g.PUBLISHED)},isDisabled:t,key:"certify"},c?u.ag._("Sign and approve"):u.ag._("Approve"))},v=function(t,a){return d.createElement(g.DropdownItem,{onClick:function(){return n.updateCertification(e,a,T.g.NOTCERTIFIED)},isDisabled:t,className:"rejected-icon",key:"reject"},u.ag._("Reject"))};return e.repository_list.includes(T.g.PUBLISHED)?d.createElement(p.cT,{kebabItems:[E(!0,T.g.PUBLISHED),v(!1,T.g.PUBLISHED),h]}):e.repository_list.includes(T.g.NOTCERTIFIED)?d.createElement(p.cT,{kebabItems:[E(!1,T.g.NOTCERTIFIED),v(!0,T.g.NOTCERTIFIED),h]}):e.repository_list.includes(T.g.NEEDSREVIEW)?d.createElement(p.cT,{kebabItems:[v(!1,T.g.NEEDSREVIEW),h],buttons:f}):void 0}},{key:"openUploadCertificateModal",value:function(e){this.setState({uploadCertificateModalOpen:!0,versionToUploadCertificate:e})}},{key:"closeUploadCertificateModal",value:function(){this.setState({uploadCertificateModalOpen:!1,versionToUploadCertificate:null})}},{key:"submitCertificate",value:function(e){var t=this,n=this.state.versionToUploadCertificate,a="".concat("/api/automation-hub/pulp/api/v3/","content/ansible/collection_versions/").concat(n.id,"/");return _.x8.getRepository({name:"staging"}).then((function(t){return _.Xp.upload({file:e,repository:t.data.results[0].pulp_href,signed_collection:a})})).then((function(e){return(0,k.BA)((0,k.LL)(e.data.task))})).then((function(){return t.addAlert(u.ag._('Certificate for collection "{0} {1} v{2}" has been successfully uploaded.',{0:n.namespace,1:n.name,2:n.version}),"success")})).then((function(){return t.queryCollections()})).catch((function(e){var a=e.response?(0,k.N3)(e.response.status,e.response.statusText):e;t.addAlert(u.ag._('The certificate for "{0} {1} v{2}" could not be saved.',{0:n.namespace,1:n.name,2:n.version}),"danger",a)})).finally((function(){return t.closeUploadCertificateModal()}))}},{key:"updateCertification",value:function(e,t,n){var a=this;return this.setState({updatingVersions:[e]}),_.eq.setRepository(e.namespace,e.name,e.version,t,n).then((function(e){return(0,k.BA)(e.data.remove_task_id,500)})).then((function(){return a.addAlert(u.ag._('Certification status for collection "{0} {1} v{2}" has been successfully updated.',{0:e.namespace,1:e.name,2:e.version}),"success")})).then((function(){return a.queryCollections()})).catch((function(t){var n=t.response?(0,k.N3)(t.response.status,t.response.statusText):t;a.addAlert(u.ag._('Changes to certification status for collection "{0} {1} v{2}" could not be saved.',{0:e.namespace,1:e.name,2:e.version}),"danger",n)}))}},{key:"queryCollections",value:function(){var e=this;this.setState({loading:!0},(function(){return _.eq.list(e.state.params).then((function(t){e.setState({versions:t.data.data,itemCount:t.data.meta.count,loading:!1,updatingVersions:[]})})).catch((function(t){e.addAlert(u.ag._("Error loading collections."),"danger",null==t?void 0:t.message),e.setState({loading:!1,updatingVersions:[]})}))}))}},{key:"download",value:function(e,t,n){_.gu.getDownloadURL("staging",e,t,n).then((function(e){window.location.assign(e)}))}},{key:"updateParams",get:function(){return k.q6.updateParamsMixin()}},{key:"closeAlert",get:function(){return(0,p.NQ)("alerts")}},{key:"addAlert",value:function(e,t,n){this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[{description:n,title:e,variant:t}])})}}]),C}(d.Component);const D=(0,m.withRouter)(C);C.contextType=b.I},91811:(e,t,n)=>{n.r(t),n.d(t,{TaskListView:()=>y,default:()=>T});var a=n(42982),r=n(15671),l=n(43144),i=n(60136),s=n(6215),o=n(61120),c=n(62747),u=n(27693),d=n(30624),m=n(42807),p=n(65449),g=n(11930),f=n(53681),h=n(90005),E=n(85624),v=n(47922),_=n(61647),k=n(61542);var y=function(e){(0,i.Z)(y,e);var t,n,k=(t=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(n){var r=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function y(e){var t;(0,r.Z)(this,y),t=k.call(this,e);var n=f.q6.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.sort||(n.sort="-pulp_created"),t.state={params:n,items:[],loading:!0,itemCount:0,alerts:[],cancelModalVisible:!1,selectedTask:null,unauthorised:!1,inputText:""},t}return(0,l.Z)(y,[{key:"componentDidMount",value:function(){var e,t;!this.context.user||this.context.user.is_anonymous?this.setState({loading:!1,unauthorised:!0}):this.queryTasks(),null!==(e=this.context.user)&&void 0!==e&&null!==(t=e.model_permissions)&&void 0!==t&&t.view_task||this.addAlert(u.ag._("You do not have permission to view all tasks. Only tasks created by you are visible."),"info")}},{key:"render",value:function(){var e=this,t=this.state,n=t.params,a=t.itemCount,r=t.loading,l=t.items,i=t.alerts,s=t.cancelModalVisible,o=t.unauthorised,c=0===l.length&&!(0,f.vS)(n,["name__contains","state"]);return d.createElement(d.Fragment,null,d.createElement(E.UW,{alerts:i,closeAlert:function(t){return e.closeAlert(t)}}),s?this.renderCancelModal():null,d.createElement(E.UP,{title:u.ag._("Task Management")}),o?d.createElement(E.iA,null):c&&!r?d.createElement(E.vv,{title:u.ag._("No tasks yet"),description:u.ag._("Tasks will appear once created.")}):d.createElement(E.or,null,r?d.createElement(E.AW,null):d.createElement("section",{className:"body"},d.createElement("div",{className:"hub-list-toolbar"},d.createElement(g.Toolbar,null,d.createElement(g.ToolbarContent,null,d.createElement(g.ToolbarGroup,null,d.createElement(g.ToolbarItem,null,d.createElement(E.Kv,{inputText:this.state.inputText,onChange:function(t){return e.setState({inputText:t})},updateParams:function(t){return e.updateParams(t,(function(){return e.queryTasks()}))},params:n,filterConfig:[{id:"name__contains",title:u.ag._("Task name")},{id:"state",title:u.ag._("Status"),inputType:"select",options:[{id:"completed",title:u.ag._("Completed")},{id:"failed",title:u.ag._("Failed")},{id:"running",title:u.ag._("Running")},{id:"waiting",title:u.ag._("Waiting")}]}]}))))),d.createElement(E.tl,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.queryTasks()}))},count:a,isTop:!0})),d.createElement("div",null,d.createElement(E.M$,{updateParams:function(t){e.updateParams(t,(function(){return e.queryTasks()})),e.setState({inputText:""})},params:n,ignoredParams:["page_size","page","sort","ordering"],niceNames:{name__contains:u.ag._("Task name"),state:u.ag._("Status")}})),r?d.createElement(E.AW,null):this.renderTable(n),d.createElement(E.tl,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.queryTasks()}))},count:a}))))}},{key:"renderTable",value:function(e){var t=this,n=this.state.items;if(0===n.length)return d.createElement(E.ei,null);var a={headers:[{title:u.ag._("Task name"),type:"alpha",id:"name"},{title:u.ag._("Created on"),type:"numeric",id:"pulp_created"},{title:u.ag._("Started at"),type:"numeric",id:"started_at"},{title:u.ag._("Finished at"),type:"numeric",id:"finished_at"},{title:u.ag._("Status"),type:"alpha",id:"state"}]};return d.createElement("table",{"aria-label":u.ag._("Task list"),className:"hub-c-table-content pf-c-table"},d.createElement(E.h2,{options:a,params:e,updateParams:function(e){return t.updateParams(e,(function(){return t.queryTasks()}))}}),d.createElement("tbody",null,n.map((function(e,n){return t.renderTableRow(e,n)}))))}},{key:"renderTableRow",value:function(e,t){var n=e.name,a=e.state,r=e.pulp_created,l=e.started_at,i=e.finished_at,s=e.pulp_href,o=(0,h.L)(s);return d.createElement("tr",{key:t},d.createElement("td",null,d.createElement(p.Link,{to:(0,_.dI)(_.nB.taskDetail,{task:o})},d.createElement(E.u,{content:m.g.TASK_NAMES[n]&&u.ag._(m.g.TASK_NAMES[n])||n},n))),d.createElement("td",null,d.createElement(E.Id,{date:r})),d.createElement("td",null,d.createElement(E.Id,{date:l})),d.createElement("td",null,d.createElement(E.Id,{date:i})),d.createElement("td",null,d.createElement(E.Eg,{status:a})),d.createElement("td",null,this.cancelButton(a,e)))}},{key:"cancelButton",value:function(e,t){var n=this;switch(e){case"running":case"waiting":return d.createElement(g.Button,{variant:"secondary","aria-label":u.ag._("Delete"),key:"delete",onClick:function(){return n.setState({cancelModalVisible:!0,selectedTask:t})}},u.ag._("Stop task"))}}},{key:"renderCancelModal",value:function(){var e=this,t=m.g.TASK_NAMES[this.state.selectedTask.name]||this.state.selectedTask.name;return d.createElement(E.sm,{cancelAction:function(){return e.setState({cancelModalVisible:!1})},title:u.ag._("Stop task?"),confirmAction:function(){return e.selectedTask(e.state.selectedTask,t)},confirmButtonTitle:u.ag._("Yes, stop")},u.ag._("{name} will be cancelled.",{name:t}))}},{key:"selectedTask",value:function(e,t){var n=this;v.sb.patch((0,h.L)(e.pulp_href),{state:"canceled"}).then((function(){n.setState({loading:!0,selectedTask:null,cancelModalVisible:!1,alerts:[].concat((0,a.Z)(n.state.alerts),[{variant:"success",title:t,description:d.createElement(c.cC,{id:'Task "{name}" stopped successfully.',values:{name:t}})}])}),n.queryTasks()})).catch((function(e){var r=e.response,l=r.status,i=r.statusText;n.setState({loading:!0,cancelModalVisible:!1,alerts:[].concat((0,a.Z)(n.state.alerts),[{variant:"danger",title:u.ag._('Task "{name}" could not be stopped.',{name:t}),description:(0,f.N3)(l,i)}])})}))}},{key:"closeAlert",get:function(){return(0,E.NQ)("alerts")}},{key:"queryTasks",value:function(){var e=this;this.setState({loading:!0},(function(){v.sb.list(e.state.params).then((function(t){e.setState({items:t.data.results,itemCount:t.data.count,loading:!1})})).catch((function(t){var n=t.response,r=n.status,l=n.statusText;e.setState({loading:!1,items:[],itemCount:0,alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:u.ag._("Tasks list could not be displayed."),description:(0,f.N3)(r,l)}])})}))}))}},{key:"addAlert",value:function(e,t,n){this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[{description:n,title:e,variant:t}])})}},{key:"updateParams",get:function(){return f.q6.updateParamsMixin()}}]),y}(d.Component);const T=(0,p.withRouter)(y);y.contextType=k.I},95153:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(42982),r=n(15671),l=n(43144),i=n(60136),s=n(6215),o=n(61120),c=n(48403),u=n.n(c),d=n(62747),m=n(30624),p=n(27693),g=n(65449),f=n(85624),h=n(11930),E=n(76473),v=n(47922),_=n(61647),k=n(42807),y=n(90005),T=n(53681);var b=function(e){(0,i.Z)(b,e);var t,n,c=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(n){var r=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function b(e){var t;return(0,r.Z)(this,b),(t=c.call(this,e)).state={loading:!0,task:null,parentTask:null,childTasks:[],alerts:[],cancelModalVisible:!1,taskName:"",resources:[],redirect:null,polling:null},t}return(0,l.Z)(b,[{key:"componentDidMount",value:function(){this.loadContent()}},{key:"componentWillUnmount",value:function(){this.state.polling&&clearInterval(this.state.polling)}},{key:"componentDidUpdate",value:function(e){e.match.params.task!==this.props.match.params.task&&(this.setState({loading:!0}),this.loadContent())}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.task,r=t.parentTask,l=t.childTasks,i=t.cancelModalVisible,s=t.alerts,o=t.taskName,c=t.resources,d=t.redirect,v=[{url:_.nB.taskList,name:p.ag._("Task management")},{name:a?o:""}],T=null;return r&&(T=(0,y.L)(r.pulp_href)),d?m.createElement(g.Redirect,{to:d}):n?m.createElement(f.AW,null):m.createElement(m.Fragment,null,m.createElement(f.UW,{alerts:s,closeAlert:function(t){return e.closeAlert(t)}}),i?this.renderCancelModal():null,m.createElement(f.UP,{title:o,breadcrumbs:m.createElement(f.Oo,{links:v}),pageControls:["running","waiting"].includes(a.state)&&m.createElement(h.Button,{variant:"secondary",onClick:function(){return e.setState({cancelModalVisible:!0})}},p.ag._("Stop task")),status:m.createElement(f.Eg,{className:"hub-c-task-status",status:a.state})}),m.createElement(f.or,null,m.createElement(h.Flex,null,m.createElement(h.Flex,{direction:{default:"column"},flex:{default:"flex_1"}},m.createElement(h.FlexItem,null,m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Task detail")),m.createElement("br",null),m.createElement(h.DescriptionList,{isHorizontal:!0},m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Task name")),m.createElement(h.DescriptionListDescription,null,a.name)),a.name!==o&&m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Descriptive name")),m.createElement(h.DescriptionListDescription,null,o)),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Finished at")),m.createElement(h.DescriptionListDescription,null,m.createElement(f.Id,{date:a.finished_at}))),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Created on")),m.createElement(h.DescriptionListDescription,null,m.createElement(f.Id,{date:a.pulp_created})))))),m.createElement(h.FlexItem,null,m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Task groups")),m.createElement("br",null),m.createElement(h.DescriptionList,{isHorizontal:!0},m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Task group")),m.createElement(h.DescriptionListDescription,null,a.task_group?a.task_group:p.ag._("No task group"))),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Parent task")),m.createElement(h.DescriptionListDescription,null,r?m.createElement(g.Link,{to:(0,_.dI)(_.nB.taskDetail,{task:T})},k.g.TASK_NAMES[r.name]&&p.ag._(k.g.TASK_NAMES[r.name])||r.name):p.ag._("No parent task"))),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Child tasks")),m.createElement(h.DescriptionListDescription,null,l.length?l.map((function(e){var t=(0,y.L)(e.pulp_href);return m.createElement(m.Fragment,{key:t},m.createElement(g.Link,{to:(0,_.dI)(_.nB.taskDetail,{task:t})},k.g.TASK_NAMES[e.name]&&p.ag._(k.g.TASK_NAMES[e.name])||e.name),m.createElement("br",null))})):p.ag._("No child task")))))),m.createElement(h.FlexItem,null,m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Reserve resources")),m.createElement("br",null),c.length?m.createElement(h.DescriptionList,{isHorizontal:!0},c.map((function(e,t){return m.createElement(m.Fragment,{key:e.type+t},m.createElement("hr",null),m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Type")),m.createElement(h.DescriptionListDescription,null,e.type)),e.name&&m.createElement(h.DescriptionListGroup,null,m.createElement(h.DescriptionListTerm,null,p.ag._("Name")),m.createElement(h.DescriptionListDescription,null,e.name)))}))):p.ag._("There's no resource record")))),m.createElement(h.Flex,{direction:{default:"column"},flex:{default:"flex_1"}},m.createElement(h.FlexItem,null,!a.error&&m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Progress messages")),m.createElement("br",null),a.progress_reports.length?m.createElement(h.DescriptionList,{isHorizontal:!0},a.progress_reports.reverse().map((function(e,t){return m.createElement(m.Fragment,{key:t},m.createElement("hr",null),Object.keys(e).map((function(t,n){return!!e[t]&&m.createElement(h.DescriptionListGroup,{key:t+n},m.createElement(h.DescriptionListTerm,null,{message:p.ag._("Message"),code:p.ag._("Code"),state:p.ag._("State"),done:p.ag._("Done")}[t]||u()(t)),m.createElement(h.DescriptionListDescription,null,e[t]))}))," ")}))):m.createElement(f.WU,{icon:E.TF,title:p.ag._("There is no progress message."),description:p.ag._("There is no progress message.")})),!!a.error&&m.createElement("section",{className:"body card-area"},m.createElement(h.Title,{headingLevel:"h2",size:"lg"},p.ag._("Error message")),m.createElement("br",null),m.createElement(m.Fragment,null,m.createElement(h.Title,{headingLevel:"h3"},p.ag._("Description")),m.createElement(h.CodeBlock,null,a.error.description),m.createElement(h.Title,{headingLevel:"h3"},p.ag._("Traceback")),m.createElement(h.CodeBlock,{className:"hub-code-block"},a.error.traceback))))))))}},{key:"renderCancelModal",value:function(){var e=this,t=this.state.taskName;return m.createElement(f.sm,{cancelAction:function(){return e.setState({cancelModalVisible:!1})},confirmAction:function(){return e.cancelTask()},title:p.ag._("Stop task"),confirmButtonTitle:p.ag._("Yes, stop")},p.ag._("{name} will stop running.",{name:t}))}},{key:"cancelTask",value:function(){var e=this,t=this.state,n=t.task,r=t.taskName;v.sb.patch((0,y.L)(n.pulp_href),{state:"canceled"}).then((function(){e.setState({loading:!0,cancelModalVisible:!1,alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"success",title:r,description:m.createElement(d.cC,{id:'Task "{taskName}" stopped successfully.',values:{taskName:r}})}])}),e.loadContent()})).catch((function(t){var n=t.response,l=n.status,i=n.statusText;e.setState({loading:!0,cancelModalVisible:!1,alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:p.ag._('Task "{taskName}" could not be stopped.',{taskName:r}),description:(0,T.N3)(l,i)}])}),e.loadContent()}))}},{key:"loadContent",value:function(){var e=this;this.state.polling||this.state.task||this.setState({polling:setInterval((function(){return e.loadContent()}),1e4)});var t=this.props.match.params.task;return v.sb.get(t).then((function(t){var n=[],a=null,r=[],l=[];if(["canceled","completed","failed"].includes(t.data.state)&&(clearInterval(e.state.polling),e.setState({polling:null})),t.data.parent_task){var i=(0,y.L)(t.data.parent_task);n.push(v.sb.get(i).then((function(e){a=e.data})).catch((function(){return!0})))}return t.data.child_tasks.length&&t.data.child_tasks.forEach((function(e){var t=(0,y.L)(e);n.push(v.sb.get(t).then((function(e){r.push(e.data)})).catch((function(){return!0})))})),t.data.reserved_resources_record.length&&t.data.reserved_resources_record.forEach((function(e){var t=e.replace("/api/automation-hub/pulp/api/v3/",""),a=(0,y.L)(t),r=e.split("/"),i=a?r[4]:r[r.length-2];a?n.push(v.O8.get(t).then((function(e){l.push({name:e.data.name,type:i})})).catch((function(){return!0}))):l.push({type:i})})),Promise.all(n).then((function(){e.setState({task:t.data,childTasks:r,parentTask:a,loading:!1,taskName:k.g.TASK_NAMES[t.data.name]&&p.ag._(k.g.TASK_NAMES[t.data.name])||t.data.name,resources:l})}))})).catch((function(){e.setState({redirect:_.nB.notFound})}))}},{key:"closeAlert",get:function(){return(0,f.NQ)("alerts")}}]),b}(m.Component);const C=(0,g.withRouter)(b)},79784:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(42982),r=n(15671),l=n(43144),i=n(60136),s=n(6215),o=n(61120),c=n(62747),u=n(27693),d=n(30624),m=n(65449),p=n(11930),g=n(61647),f=n(85624),h=n(53681),E=n(61542),v=n(47922);var _=function(e){(0,i.Z)(_,e);var t,n,E=(t=_,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(n){var r=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function _(e){var t;return(0,r.Z)(this,_),(t=E.call(this,e)).state={tokenData:void 0,alerts:[],repoUrl:""},t}return(0,l.Z)(_,[{key:"getMyDistributionPath",value:function(){var e=this;v.g9.list().then((function(t){var n,a=(null===(n=t.data.data.find((function(e){return e.base_path.includes("synclist")})))||void 0===n?void 0:n.base_path)||"";e.setState({repoUrl:a})})).catch((function(t){var n=t.response,r=n.status,l=n.statusText;e.setState({repoUrl:"",alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:u.ag._("Server URL could not be displayed."),description:(0,h.N3)(r,l)}])})}))}},{key:"componentDidMount",value:function(){var e=this;window.insights.chrome.auth.getOfflineToken().then((function(t){e.setState({tokenData:t.data})})),this.getMyDistributionPath()}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.tokenData,r=n.alerts,l='curl https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token -d grant_type=refresh_token -d client_id="cloud-services" -d refresh_token="'.concat(null!==(e=null==a?void 0:a.refresh_token)&&void 0!==e?e:"{{ user_token }}",'" --fail --silent --show-error --output /dev/null');return d.createElement(d.Fragment,null,d.createElement(f.UW,{alerts:r,closeAlert:function(e){return t.closeAlert(e)}}),d.createElement(f.UP,{title:u.ag._("Connect to Hub")}),d.createElement(f.or,null,d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Connect Private Automation Hub")),d.createElement("p",null,d.createElement(c.cC,{id:"Use the <0>Repository Management</0> page to sync collections curated by your organization to the Red Hat Certified repository in your private Automation Hub. Users with the correct permissions can use the sync toggles on the <1>Collections</1> page to control which collections are added to their organization's sync repository.",components:{0:d.createElement(m.Link,{to:g.nB.repositories}),1:d.createElement(m.Link,{to:g.nB.search})}}))),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Connect the ansible-galaxy client")),d.createElement("p",null,d.createElement(c.cC,{id:"Documentation on how to configure the <0>ansible-galaxy</0> client can be found <1>here</1>. Use the following parameters to configure the client.",components:{0:d.createElement("code",null),1:d.createElement("a",{href:"https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/",target:"_blank",rel:"noreferrer"})}}))),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Offline token")),d.createElement("p",null,d.createElement(c.cC,{id:"Use this token to authenticate clients that need to download content from Automation Hub. This is a secret token used to protect your content. Store your API token in a secure location."})),a?d.createElement("div",null,d.createElement(f.M5,null,a.refresh_token)):d.createElement("div",null,d.createElement(p.Button,{onClick:function(){return t.loadToken()}},u.ag._("Load token"))),d.createElement("div",{className:"pf-c-content",style:{paddingTop:"var(--pf-global--spacer--md)"}},d.createElement("span",null,d.createElement(c.cC,{id:"The token will expire after 30 days of inactivity. Run the command below periodically to prevent your token from expiring."})),d.createElement(f.M5,{isCode:!0,isReadOnly:!0,variant:p.ClipboardCopyVariant.expansion},l)),d.createElement("h2",null,u.ag._("Manage tokens")),d.createElement(c.cC,{id:"To revoke a token or see all of your tokens, visit the <0>offline API token management</0> page.",components:{0:d.createElement("a",{href:"https://sso.redhat.com/auth/realms/redhat-external/account/applications",target:"_blank",rel:"noreferrer"})}})),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Server URL")),d.createElement("p",null,d.createElement(c.cC,{id:"Use this URL to configure the API endpoints that clients need to download content from Automation Hub."})),d.createElement(f.M5,{isReadOnly:!0},(0,h.qX)(this.state.repoUrl))),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("SSO URL")),d.createElement("p",null,d.createElement(c.cC,{id:"Use this URL to configure the authentication URLs that clients need to download content from Automation Hub."})),d.createElement(f.M5,{isReadOnly:!0},"https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token"))))}},{key:"loadToken",value:function(){window.insights.chrome.auth.doOffline()}},{key:"closeAlert",get:function(){return(0,f.NQ)("alerts")}}]),_}(d.Component);const k=(0,m.withRouter)(_);_.contextType=E.I}}]);
//# sourceMappingURL=../sourcemaps/settings.198b408efe69f24f61ad47cc025b8f98.js.map