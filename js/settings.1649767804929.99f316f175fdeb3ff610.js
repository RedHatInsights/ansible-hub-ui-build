"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[571],{15868:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(42982),r=n(15861),o=n(4942),i=n(15671),l=n(43144),s=n(60136),c=n(6215),u=n(61120),d=n(87757),p=n.n(d),m=n(48222),f=n(25221),h=n(15691),g=n(34018),E=n(55477),v=n(79020),y=n(68778),_=n(43047),b=n(69957),k=n(94679),C=n(14953),R=n(61647),S=n(42807),I=n(61542);var N=function(e){(0,s.Z)(I,e);var t,n,d=(t=I,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function I(e){var t;(0,i.Z)(this,I),t=d.call(this,e);var n=C.q6.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.sort||(n.sort="-pulp_created"),n.repository||(n.repository="staging"),t.state={versions:void 0,itemCount:0,params:n,loading:!0,updatingVersions:[],alerts:[],unauthorized:!1,inputText:""},t}return(0,l.Z)(I,[{key:"componentDidMount",value:function(){this.context.user&&!this.context.user.is_anonymous&&this.context.user.model_permissions.move_collection?this.queryCollections():this.setState({unauthorized:!0})}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.versions,r=n.params,i=n.itemCount,l=n.loading,s=n.unauthorized;return a||s?h.createElement(h.Fragment,null,h.createElement(E.UP,{title:f.ag._("Approval dashboard")}),h.createElement(E.UW,{alerts:this.state.alerts,closeAlert:function(e){return t.closeAlert(e)}}),s?h.createElement(E.iA,null):h.createElement(E.or,{className:"hub-certification-dashboard"},h.createElement("section",{className:"body","data-cy":"body"},h.createElement("div",{className:"toolbar hub-certification-dashboard-toolbar"},h.createElement(v.Toolbar,null,h.createElement(v.ToolbarGroup,null,h.createElement(v.ToolbarItem,null,h.createElement(E.Kv,{inputText:this.state.inputText,onChange:function(e){t.setState({inputText:e})},updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},params:r,filterConfig:[{id:"namespace",title:f.ag._("Namespace")},{id:"name",title:f.ag._("Collection Name")},{id:"repository",title:f.ag._("Status"),inputType:"select",options:[{id:S.g.NOTCERTIFIED,title:f.ag._("Rejected")},{id:S.g.NEEDSREVIEW,title:f.ag._("Needs Review")},{id:S.g.PUBLISHED,title:f.ag._("Approved")}]}]})))),h.createElement(E.tl,{params:r,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:i,isTop:!0})),h.createElement("div",null,h.createElement(E.M$,{updateParams:function(e){t.updateParams(e,(function(){return t.queryCollections()})),t.setState({inputText:""})},params:r,ignoredParams:["page_size","page","sort"],niceValues:{repository:(e={},(0,o.Z)(e,S.g.PUBLISHED,f.ag._("Approved")),(0,o.Z)(e,S.g.NEEDSREVIEW,f.ag._("Needs Review")),(0,o.Z)(e,S.g.NOTCERTIFIED,f.ag._("Rejected")),e)},niceNames:{repository:f.ag._("Status")}})),l?h.createElement(E.AW,null):this.renderTable(a,r),h.createElement("div",{className:"footer"},h.createElement(E.tl,{params:r,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:i}))))):h.createElement(E.gO,null)}},{key:"renderTable",value:function(e,t){var n=this;if(0===e.length)return(0,C.vS)(t,["namespace","name","repository"])?h.createElement(E.ei,null):h.createElement(E.vv,{title:f.ag._("No managed collections yet"),description:f.ag._("Collections will appear once uploaded")});var a={headers:[{title:f.ag._("Namespace"),type:"alpha",id:"namespace"},{title:f.ag._("Collection"),type:"alpha",id:"collection"},{title:f.ag._("Version"),type:"number",id:"version"},{title:f.ag._("Date created"),type:"number",id:"pulp_created"},{title:f.ag._("Status"),type:"none",id:"status"},{title:"",type:"none",id:"certify"}]};return h.createElement("table",{"aria-label":f.ag._("Collection versions"),className:"hub-c-table-content pf-c-table"},h.createElement(E.h2,{options:a,params:t,updateParams:function(e){return n.updateParams(e,(function(){return n.queryCollections()}))}}),h.createElement("tbody",null,e.map((function(e,t){return n.renderRow(e,t)}))))}},{key:"renderStatus",value:function(e){return this.state.updatingVersions.includes(e)?h.createElement("span",{className:"fa fa-lg fa-spin fa-spinner"}):e.repository_list.includes(S.g.PUBLISHED)?h.createElement(v.Label,{variant:"outline",color:"green",icon:h.createElement(y.rE,null)},"signed"===e.sign_state?f.ag._("Signed and approved"):f.ag._("Approved")):e.repository_list.includes(S.g.NOTCERTIFIED)?h.createElement(v.Label,{variant:"outline",color:"red",icon:h.createElement(_.$O,null)},f.ag._("Rejected")):e.repository_list.includes(S.g.NEEDSREVIEW)?h.createElement(v.Label,{variant:"outline",color:"orange",icon:h.createElement(b.LP,null)},f.ag._("Needs Review")):void 0}},{key:"renderRow",value:function(e,t){return h.createElement("tr",{key:t,"data-cy":"CertificationDashboard-row"},h.createElement("td",null,e.namespace),h.createElement("td",null,e.name),h.createElement("td",null,h.createElement(g.Link,{to:(0,R.dI)(R.nB.collectionByRepo,{namespace:e.namespace,collection:e.name,repo:e.repository_list[0]},{version:e.version})},e.version)),h.createElement("td",null,h.createElement(E.Id,{date:e.created_at})),h.createElement("td",null,this.renderStatus(e)),h.createElement("td",{style:{paddingRight:"0px",textAlign:"right"}},this.renderButtons(e)))}},{key:"renderButtons",value:function(e){var t,n,a,r,o,i,l,s=this,c=!0===(null===(t=this.context)||void 0===t||null===(n=t.featureFlags)||void 0===n?void 0:n.collection_signing)&&!0===(null===(a=this.context)||void 0===a||null===(r=a.featureFlags)||void 0===r?void 0:r.collection_auto_sign)&&(null===(o=this.context)||void 0===o||null===(i=o.user)||void 0===i||null===(l=i.model_permissions)||void 0===l?void 0:l.sign_collections_on_namespace);if(!this.state.updatingVersions.includes(e)){var u=h.createElement(v.DropdownItem,{key:"imports",component:h.createElement(g.Link,{to:(0,R.dI)(R.nB.myImports,{},{namespace:e.namespace,name:e.name,version:e.version})},f.ag._("View Import Logs"))}),d=function(t,n){return h.createElement(v.DropdownItem,{onClick:function(){return s.updateCertification(e,n,S.g.PUBLISHED)},isDisabled:t,key:"certify"},c?f.ag._("Sign and approve"):f.ag._("Approve"))},p=function(t,n){return h.createElement(v.DropdownItem,{onClick:function(){return s.updateCertification(e,n,S.g.NOTCERTIFIED)},isDisabled:t,className:"rejected-icon",key:"reject"},f.ag._("Reject"))};return e.repository_list.includes(S.g.PUBLISHED)?h.createElement("span",null,h.createElement(E.hu,{items:[d(!0,S.g.PUBLISHED),p(!1,S.g.PUBLISHED),u]})):e.repository_list.includes(S.g.NOTCERTIFIED)?h.createElement("span",null,h.createElement(E.hu,{items:[d(!1,S.g.NOTCERTIFIED),p(!0,S.g.NOTCERTIFIED),u]})):e.repository_list.includes(S.g.NEEDSREVIEW)?h.createElement("span",null,h.createElement(v.Button,{onClick:function(){return s.updateCertification(e,S.g.NEEDSREVIEW,S.g.PUBLISHED)}},h.createElement("span",null,c?f.ag._("Sign and approve"):f.ag._("Approve"))),h.createElement(E.hu,{items:[p(!1,S.g.NEEDSREVIEW),u]})):void 0}}},{key:"updateCertification",value:function(e,t,n){var a=this,r=this.state.alerts;this.setState({updatingVersions:[]},(function(){return k.eq.setRepository(e.namespace,e.name,e.version,t,n).then((function(t){a.setState({updatingVersions:[e]}),a.waitForUpdate(t.data.remove_task_id,e)}),a.addAlert(h.createElement(m.cC,{id:'Certification status for collection "{0} {1} v{2}" has been successfully updated.',values:{0:e.namespace,1:e.name,2:e.version}}),"success")).catch((function(t){var n=t.response,o=n.status,i=n.statusText;a.setState({updatingVersions:[],alerts:r.concat({variant:"danger",title:f.ag._('Changes to certification status for collection "{0} {1} v{2}" could not be saved.',{0:e.namespace,1:e.name,2:e.version}),description:(0,C.N3)(o,i)})})}))}))}},{key:"waitForUpdate",value:function(e,t){var n=this,a=e;return k.Kc.get(a).then(function(){var e=(0,r.Z)(p().mark((function e(o){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("waiting"!==o.data.state&&"running"!==o.data.state){e.next=6;break}return e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:n.waitForUpdate(a,t),e.next=11;break;case 6:if("completed"!==o.data.state){e.next=10;break}return e.abrupt("return",k.eq.list(n.state.params).then(function(){var e=(0,r.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({versions:t.data.data,updatingVersions:[]});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:n.setState({updatingVersions:[],alerts:n.state.alerts.concat({variant:"danger",title:f.ag._('Changes to certification status for collection "{0} {1} v{2}" could not be saved.',{0:t.namespace,1:t.name,2:t.version}),description:(0,C.N3)(500,f.ag._("Internal Server Error"))})});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"queryCollections",value:function(){var e=this;this.setState({loading:!0},(function(){return k.eq.list(e.state.params).then((function(t){e.setState({versions:t.data.data,itemCount:t.data.meta.count,loading:!1,updatingVersions:[]})}))}))}},{key:"updateParams",get:function(){return C.q6.updateParamsMixin()}},{key:"closeAlert",get:function(){return(0,E.NQ)("alerts")}},{key:"addAlert",value:function(e,t,n){this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[{description:n,title:e,variant:t}])})}}]),I}(h.Component);const w=(0,g.withRouter)(N);N.contextType=I.I},79784:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(42982),r=n(15671),o=n(43144),i=n(60136),l=n(6215),s=n(61120),c=n(48222),u=n(25221),d=n(15691),p=n(34018),m=n(79020),f=n(61647),h=n(55477),g=n(14953),E=n(61542),v=n(94679);var y=function(e){(0,i.Z)(y,e);var t,n,E=(t=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function y(e){var t;return(0,r.Z)(this,y),(t=E.call(this,e)).state={tokenData:void 0,alerts:[],repoUrl:""},t}return(0,o.Z)(y,[{key:"getMyDistributionPath",value:function(){var e=this;v.g9.list().then((function(t){var n,a=(null===(n=t.data.data.find((function(e){return e.base_path.includes("synclist")})))||void 0===n?void 0:n.base_path)||"";e.setState({repoUrl:a})})).catch((function(t){var n=t.response,r=n.status,o=n.statusText;e.setState({repoUrl:"",alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:u.ag._("Server URL could not be displayed."),description:(0,g.N3)(r,o)}])})}))}},{key:"componentDidMount",value:function(){var e=this;window.insights.chrome.auth.getOfflineToken().then((function(t){e.setState({tokenData:t.data})})),this.getMyDistributionPath()}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.tokenData,r=n.alerts,o='curl https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token -d grant_type=refresh_token -d client_id="cloud-services" -d refresh_token="'.concat(null!==(e=null==a?void 0:a.refresh_token)&&void 0!==e?e:"{{ user_token }}",'" --fail --silent --show-error --output /dev/null');return d.createElement(d.Fragment,null,d.createElement(h.UW,{alerts:r,closeAlert:function(e){return t.closeAlert(e)}}),d.createElement(h.UP,{title:u.ag._("Connect to Hub")}),d.createElement(h.or,null,d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Connect Private Automation Hub")),d.createElement("p",null,d.createElement(c.cC,{id:"Use the <0>Repository Management</0> page to sync collections curated by your organization to the Red Hat Certified repository in your private Automation Hub. Users with the correct permissions can use the sync toggles on the <1>Collections</1> page to control which collections are added to their organization's sync repository.",components:{0:d.createElement(p.Link,{to:f.nB.repositories}),1:d.createElement(p.Link,{to:f.nB.search})}}))),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Connect the ansible-galaxy client")),d.createElement("p",null,d.createElement(c.cC,{id:"Documentation on how to configure the <0>ansible-galaxy</0> client can be found <1>here</1>. Use the following parameters to configure the client.",components:{0:d.createElement("code",null),1:d.createElement("a",{href:"https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/",target:"_blank",rel:"noreferrer"})}}))),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Offline token")),d.createElement("p",null,d.createElement(c.cC,{id:"Use this token to authenticate clients that need to download content from Automation Hub. This is a secret token used to protect your content. Store your API token in a secure location."})),a?d.createElement("div",null,d.createElement(h.M5,null,a.refresh_token)):d.createElement("div",null,d.createElement(m.Button,{onClick:function(){return t.loadToken()}},u.ag._("Load token"))),d.createElement("div",{className:"pf-c-content",style:{paddingTop:"var(--pf-global--spacer--md)"}},d.createElement("span",null,d.createElement(c.cC,{id:"The token will expire after 30 days of inactivity. Run the command below periodically to prevent your token from expiring."})),d.createElement(h.M5,{isCode:!0,isReadOnly:!0,variant:m.ClipboardCopyVariant.expansion},o)),d.createElement("h2",null,u.ag._("Manage tokens")),d.createElement(c.cC,{id:"To revoke a token or see all of your tokens, visit the <0>offline API token management</0> page.",components:{0:d.createElement("a",{href:"https://sso.redhat.com/auth/realms/redhat-external/account/applications",target:"_blank",rel:"noreferrer"})}})),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("Server URL")),d.createElement("p",null,d.createElement(c.cC,{id:"Use this URL to configure the API endpoints that clients need to download content from Automation Hub."})),d.createElement(h.M5,{isReadOnly:!0},(0,g.qX)(this.state.repoUrl))),d.createElement("section",{className:"body pf-c-content"},d.createElement("h2",null,u.ag._("SSO URL")),d.createElement("p",null,d.createElement(c.cC,{id:"Use this URL to configure the authentication URLs that clients need to download content from Automation Hub."})),d.createElement(h.M5,{isReadOnly:!0},"https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token"))))}},{key:"loadToken",value:function(){window.insights.chrome.auth.doOffline()}},{key:"closeAlert",get:function(){return(0,h.NQ)("alerts")}}]),y}(d.Component);const _=(0,p.withRouter)(y);y.contextType=E.I}}]);
//# sourceMappingURL=settings.1649767804929.99f316f175fdeb3ff610.js.map