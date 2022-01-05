"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[571],{15868:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(15861),r=n(4942),o=n(15671),i=n(43144),l=n(60136),c=n(82963),s=n(61120),u=n(87757),p=n.n(u),m=n(23179),d=n(30624),f=n(86235),E=n(81467),h=n(56976),g=n(68778),y=n(43047),v=n(53688),_=n(34903),k=n(18944),b=n(61647),C=n(42807),R=n(61542);var I=function(e){(0,l.Z)(R,e);var t,n,u=(t=R,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function R(e){var t;(0,o.Z)(this,R),t=u.call(this,e);var n=k.q6.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.sort||(n.sort="-pulp_created"),n.repository||(n.repository="staging"),t.state={versions:void 0,itemCount:0,params:n,loading:!0,updatingVersions:[],alerts:[],unauthorized:!1,inputText:""},t}return(0,i.Z)(R,[{key:"componentDidMount",value:function(){this.context.user&&!this.context.user.is_anonymous&&this.context.user.model_permissions.move_collection?this.queryCollections():this.setState({unauthorized:!0})}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.versions,o=n.params,i=n.itemCount,l=n.loading,c=n.unauthorized;return a||c?d.createElement(d.Fragment,null,d.createElement(E.UP,{title:m.ag._("Approval dashboard")}),d.createElement(E.UW,{alerts:this.state.alerts,closeAlert:function(e){return t.closeAlert(e)}}),c?d.createElement(E.iA,null):d.createElement(E.or,{className:"certification-dashboard"},d.createElement("section",{className:"body"},d.createElement("div",{className:"toolbar certification-dashboard-toolbar"},d.createElement(h.Toolbar,null,d.createElement(h.ToolbarGroup,null,d.createElement(h.ToolbarItem,null,d.createElement(E.Kv,{inputText:this.state.inputText,onChange:function(e){t.setState({inputText:e})},updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},params:o,filterConfig:[{id:"namespace",title:m.ag._("Namespace")},{id:"name",title:m.ag._("Collection Name")},{id:"repository",title:m.ag._("Status"),inputType:"select",options:[{id:C.g.NOTCERTIFIED,title:m.ag._("Rejected")},{id:C.g.NEEDSREVIEW,title:m.ag._("Needs Review")},{id:C.g.PUBLISHED,title:m.ag._("Approved")}]}]})))),d.createElement(E.tl,{params:o,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:i,isTop:!0})),d.createElement("div",null,d.createElement(E.M$,{updateParams:function(e){t.updateParams(e,(function(){return t.queryCollections()})),t.setState({inputText:""})},params:o,ignoredParams:["page_size","page","sort"],niceValues:{repository:(e={},(0,r.Z)(e,C.g.PUBLISHED,m.ag._("Approved")),(0,r.Z)(e,C.g.NEEDSREVIEW,m.ag._("Needs Review")),(0,r.Z)(e,C.g.NOTCERTIFIED,m.ag._("Rejected")),e)},niceNames:{repository:m.ag._("Status")}})),l?d.createElement(E.AW,null):this.renderTable(a,o),d.createElement("div",{className:"footer"},d.createElement(E.tl,{params:o,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:i}))))):d.createElement(E.gO,null)}},{key:"renderTable",value:function(e,t){var n=this;if(0===e.length)return(0,k.vS)(t,["namespace","name","repository"])?d.createElement(E.ei,null):d.createElement(E.vv,{title:m.ag._("No managed collections yet"),description:m.ag._("Collections will appear once uploaded")});var a={headers:[{title:m.ag._("Namespace"),type:"alpha",id:"namespace"},{title:m.ag._("Collection"),type:"alpha",id:"collection"},{title:m.ag._("Version"),type:"number",id:"version"},{title:m.ag._("Date created"),type:"number",id:"pulp_created"},{title:m.ag._("Status"),type:"none",id:"status"},{title:"",type:"none",id:"certify"}]};return d.createElement("table",{"aria-label":m.ag._("Collection versions"),className:"content-table pf-c-table"},d.createElement(E.h2,{options:a,params:t,updateParams:function(e){return n.updateParams(e,(function(){return n.queryCollections()}))}}),d.createElement("tbody",null,e.map((function(e,t){return n.renderRow(e,t)}))))}},{key:"renderStatus",value:function(e){return this.state.updatingVersions.includes(e)?d.createElement("span",{className:"fa fa-lg fa-spin fa-spinner"}):e.repository_list.includes(C.g.PUBLISHED)?d.createElement("span",null,d.createElement(g.rE,{style:{color:"var(--pf-global--success-color--100)"}})," ",m.ag._("Approved")):e.repository_list.includes(C.g.NOTCERTIFIED)?d.createElement("span",null,d.createElement(y.$O,{style:{color:"var(--pf-global--danger-color--100)"}})," ",m.ag._("Rejected")):e.repository_list.includes(C.g.NEEDSREVIEW)?d.createElement("span",null,d.createElement(v.uM,{style:{color:"var(--pf-global--info-color--100)"}})," ",m.ag._("Needs Review")):void 0}},{key:"renderRow",value:function(e,t){return d.createElement("tr",{"aria-labelledby":"".concat(e.namespace,".").concat(e.name," v").concat(e.version),key:t},d.createElement("td",null,e.namespace),d.createElement("td",null,e.name),d.createElement("td",null,d.createElement(f.Link,{to:(0,b.dI)(b.nB.collectionByRepo,{namespace:e.namespace,collection:e.name,repo:e.repository_list[0]},{version:e.version})},e.version)),d.createElement("td",null,d.createElement(E.Id,{date:e.created_at})),d.createElement("td",null,this.renderStatus(e)),d.createElement("td",{style:{paddingRight:"0px",textAlign:"right"}},this.renderButtons(e)))}},{key:"renderButtons",value:function(e){var t=this;if(!this.state.updatingVersions.includes(e)){var n=d.createElement(h.DropdownItem,{key:"imports",component:d.createElement(f.Link,{to:(0,b.dI)(b.nB.myImports,{},{namespace:e.namespace,name:e.name,version:e.version})},m.ag._("View Import Logs"))}),a=function(n,a){return d.createElement(h.DropdownItem,{onClick:function(){return t.updateCertification(e,a,C.g.PUBLISHED)},isDisabled:n,key:"certify"},m.ag._("Approve"))},r=function(n,a){return d.createElement(h.DropdownItem,{onClick:function(){return t.updateCertification(e,a,C.g.NOTCERTIFIED)},isDisabled:n,className:"rejected-icon",key:"reject"},m.ag._("Reject"))};return e.repository_list.includes(C.g.PUBLISHED)?d.createElement("span",null,d.createElement(E.hu,{items:[a(!0,C.g.PUBLISHED),r(!1,C.g.PUBLISHED),n]})):e.repository_list.includes(C.g.NOTCERTIFIED)?d.createElement("span",null,d.createElement(E.hu,{items:[a(!1,C.g.NOTCERTIFIED),r(!0,C.g.NOTCERTIFIED),n]})):e.repository_list.includes(C.g.NEEDSREVIEW)?d.createElement("span",null,d.createElement(h.Button,{onClick:function(){return t.updateCertification(e,C.g.NEEDSREVIEW,C.g.PUBLISHED)}},d.createElement("span",null,m.ag._("Approve"))),d.createElement(E.hu,{items:[r(!1,C.g.NEEDSREVIEW),n]})):void 0}}},{key:"updateCertification",value:function(e,t,n){var a=this;this.setState({updatingVersions:[]},(function(){return _.eq.setRepository(e.namespace,e.name,e.version,t,n).then((function(t){a.setState({updatingVersions:[e]}),a.waitForUpdate(t.data.remove_task_id,e)})).catch((function(t){a.setState({updatingVersions:[],alerts:a.state.alerts.concat({variant:"danger",title:m.ag._("API Error: {0}",{0:t.response.status}),description:m.ag._("Could not update the certification status for {0}.{1}.{2}.",{0:e.namespace,1:e.name,2:e.version})})})}))}))}},{key:"waitForUpdate",value:function(e,t){var n=this,r=e;return _.Kc.get(r).then(function(){var e=(0,a.Z)(p().mark((function e(o){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("waiting"!==o.data.state&&"running"!==o.data.state){e.next=6;break}return e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:n.waitForUpdate(r,t),e.next=11;break;case 6:if("completed"!==o.data.state){e.next=10;break}return e.abrupt("return",_.eq.list(n.state.params).then(function(){var e=(0,a.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({versions:t.data.data,updatingVersions:[]});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:n.setState({updatingVersions:[],alerts:n.state.alerts.concat({variant:"danger",title:m.ag._("API Error: 500"),description:m.ag._("Could not update the certification status for {0}.{1}.{2}.",{0:t.namespace,1:t.name,2:t.version})})});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"queryCollections",value:function(){var e=this;this.setState({loading:!0},(function(){return _.eq.list(e.state.params).then((function(t){e.setState({versions:t.data.data,itemCount:t.data.meta.count,loading:!1,updatingVersions:[]})}))}))}},{key:"updateParams",get:function(){return k.q6.updateParamsMixin()}},{key:"closeAlert",get:function(){return(0,E.NQ)("alerts")}}]),R}(d.Component);const w=(0,f.withRouter)(I);I.contextType=R.I},79784:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(89062),r=n(15671),o=n(43144),i=n(60136),l=n(82963),c=n(61120),s=n(41168),u=n(23179),p=n(30624),m=n(86235),d=n(56976),f=n(61647),E=n(81467),h=n(18944),g=n(61542);var y=function(e){(0,i.Z)(y,e);var t,n,g=(t=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(n){var r=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function y(e){var t;return(0,r.Z)(this,y),(t=g.call(this,e)).state={tokenData:void 0,alerts:[]},t}return(0,o.Z)(y,[{key:"componentDidMount",value:function(){var e=this;window.insights.chrome.auth.getOfflineToken().then((function(t){e.setState({tokenData:t.data})})).catch((function(t){return e.setState({tokenData:void 0,alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:"danger",title:u.ag._("Error loading token."),description:null==t?void 0:t.message}])})}))}},{key:"render",value:function(){var e,t=this,n=this.context.user,a=this.state,r=a.tokenData,o=a.alerts,i='curl https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token -d grant_type=refresh_token -d client_id="'.concat(n.username,'" -d refresh_token="').concat(null!==(e=null==r?void 0:r.refresh_token)&&void 0!==e?e:"{{ user_token }}",'" --fail --silent --show-error --output /dev/null');return p.createElement(p.Fragment,null,p.createElement(E.UW,{alerts:o,closeAlert:function(e){return t.closeAlert(e)}}),p.createElement(E.UP,{title:u.ag._("Connect to Hub")}),p.createElement(E.or,null,p.createElement("section",{className:"body pf-c-content"},p.createElement("h2",null,u.ag._("Connect Private Automation Hub")),p.createElement("p",null,p.createElement(s.cC,{id:"Use the <0>Repository Management</0> page to sync collections curated by your organization to the Red Hat Certified repository in your private Automation Hub. Users with the correct permissions can use the sync toggles on the <1>Collections</1> page to control which collections are added to their organization's sync repository.",components:{0:p.createElement(m.Link,{to:f.nB.repositories}),1:p.createElement(m.Link,{to:f.nB.search})}}))),p.createElement("section",{className:"body pf-c-content"},p.createElement("h2",null,u.ag._("Connect the ansible-galaxy client")),p.createElement("p",null,p.createElement(s.cC,{id:"Documentation on how to configure the <0>ansible-galaxy</0> client can be found <1>here</1>. Use the following parameters to configure the client.",components:{0:p.createElement("code",null),1:p.createElement("a",{href:"https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/",target:"_blank"})}}))),p.createElement("section",{className:"body pf-c-content"},p.createElement("h2",null,u.ag._("Offline token")),p.createElement("p",null,p.createElement(s.cC,{id:"Use this token to authenticate clients that need to download content from Automation Hub. This is a secret token used to protect your content. Store your API token in a secure location."})),r?p.createElement("div",null,p.createElement(E.M5,null,r.refresh_token)):p.createElement("div",null,p.createElement(d.Button,{onClick:function(){return t.loadToken()}},u.ag._("Load token"))),p.createElement("div",{className:"pf-c-content",style:{paddingTop:"var(--pf-global--spacer--md)"}},p.createElement("span",null,p.createElement(s.cC,{id:"The token will expire after 30 days of inactivity. Run the command below periodically to prevent your token from expiring."})),p.createElement(E.M5,{isCode:!0,isReadOnly:!0,variant:d.ClipboardCopyVariant.expansion},i)),p.createElement("h2",null,u.ag._("Manage tokens")),p.createElement(s.cC,{id:"To revoke a token or see all of your tokens, visit the <0>offline API token management</0> page.",components:{0:p.createElement("a",{href:"https://sso.redhat.com/auth/realms/redhat-external/account/applications",target:"_blank"})}})),p.createElement("section",{className:"body pf-c-content"},p.createElement("h2",null,u.ag._("Server URL")),p.createElement("p",null,p.createElement(s.cC,{id:"Use this URL to configure the API endpoints that clients need to download content from Automation Hub."})),p.createElement(E.M5,{isReadOnly:!0},(0,h.qX)("")),p.createElement("p",null,p.createElement(s.cC,{id:"Note: this URL contains all collections in Hub. To connect to your organization's sync repository use the URL found on <0>Repository Management</0>.",components:{0:p.createElement(m.Link,{to:f.nB.repositories})}}))),p.createElement("section",{className:"body pf-c-content"},p.createElement("h2",null,u.ag._("SSO URL")),p.createElement("p",null,p.createElement(s.cC,{id:"Use this URL to configure the authentication URLs that clients need to download content from Automation Hub."})),p.createElement(E.M5,{isReadOnly:!0},"https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token"))))}},{key:"loadToken",value:function(){window.insights.chrome.auth.doOffline()}},{key:"closeAlert",get:function(){return(0,E.NQ)("alerts")}}]),y}(p.Component);const v=(0,m.withRouter)(y);y.contextType=g.I}}]);
//# sourceMappingURL=settings.752270f38e6a4b090ee7.js.map