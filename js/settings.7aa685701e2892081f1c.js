"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[571],{15868:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var a=n(15861),r=n(4942),o=n(15671),i=n(43144),l=n(60136),c=n(6215),s=n(61120),u=n(87757),m=n.n(u),p=n(25221),d=n(67294),f=n(73727),E=n(5977),h=n(81467),g=n(84812),y=n(33109),v=n(1595),_=n(84457),k=n(47173),b=n(68778),C=n(43047),R=n(53688),I=n(34903),N=n(18944),S=n(61647),T=n(42807),P=n(61542);var w=function(e){(0,l.Z)(E,e);var t,n,u=(t=E,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function E(e){var t;(0,o.Z)(this,E),t=u.call(this,e);var n=N.q6.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.sort||(n.sort="-pulp_created"),n.repository||(n.repository="staging"),t.state={versions:void 0,itemCount:0,params:n,loading:!0,updatingVersions:[],alerts:[],unauthorized:!1,inputText:""},t}return(0,i.Z)(E,[{key:"componentDidMount",value:function(){this.context.user&&!this.context.user.is_anonymous&&this.context.user.model_permissions.move_collection?this.queryCollections():this.setState({unauthorized:!0})}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.versions,o=n.params,i=n.itemCount,l=n.loading,c=n.unauthorized;return a||c?d.createElement(d.Fragment,null,d.createElement(h.UP,{title:p.ag._("Approval dashboard")}),d.createElement(h.UW,{alerts:this.state.alerts,closeAlert:function(e){return t.closeAlert(e)}}),c?d.createElement(h.iA,null):d.createElement(h.or,{className:"certification-dashboard"},d.createElement("section",{className:"body"},d.createElement("div",{className:"toolbar"},d.createElement(g.o,null,d.createElement(y.k,null,d.createElement(v.E,null,d.createElement(h.Kv,{inputText:this.state.inputText,onChange:function(e){t.setState({inputText:e})},updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},params:o,filterConfig:[{id:"namespace",title:p.ag._("Namespace")},{id:"name",title:p.ag._("Collection Name")},{id:"repository",title:p.ag._("Status"),inputType:"select",options:[{id:T.g.NOTCERTIFIED,title:p.ag._("Rejected")},{id:T.g.NEEDSREVIEW,title:p.ag._("Needs Review")},{id:T.g.PUBLISHED,title:p.ag._("Approved")}]}]})))),d.createElement(h.tl,{params:o,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:i,isTop:!0})),d.createElement("div",null,d.createElement(h.M$,{updateParams:function(e){t.updateParams(e,(function(){return t.queryCollections()})),t.setState({inputText:""})},params:o,ignoredParams:["page_size","page","sort"],niceValues:{repository:(e={},(0,r.Z)(e,T.g.PUBLISHED,p.ag._("Approved")),(0,r.Z)(e,T.g.NEEDSREVIEW,p.ag._("Needs Review")),(0,r.Z)(e,T.g.NOTCERTIFIED,p.ag._("Rejected")),e)},niceNames:{repository:p.ag._("Status")}})),l?d.createElement(h.AW,null):this.renderTable(a,o),d.createElement("div",{className:"footer"},d.createElement(h.tl,{params:o,updateParams:function(e){return t.updateParams(e,(function(){return t.queryCollections()}))},count:i}))))):d.createElement(h.gO,null)}},{key:"renderTable",value:function(e,t){var n=this;if(0===e.length)return(0,N.vS)(t,["namespace","name","repository"])?d.createElement(h.ei,null):d.createElement(h.vv,{title:p.ag._("No managed collections yet"),description:p.ag._("Collections will appear once uploaded")});var a={headers:[{title:p.ag._("Namespace"),type:"alpha",id:"namespace"},{title:p.ag._("Collection"),type:"alpha",id:"collection"},{title:p.ag._("Version"),type:"number",id:"version"},{title:p.ag._("Date created"),type:"number",id:"pulp_created"},{title:p.ag._("Status"),type:"none",id:"status"},{title:"",type:"none",id:"certify"}]};return d.createElement("table",{"aria-label":p.ag._("Collection versions"),className:"content-table pf-c-table"},d.createElement(h.h2,{options:a,params:t,updateParams:function(e){return n.updateParams(e,(function(){return n.queryCollections()}))}}),d.createElement("tbody",null,e.map((function(e,t){return n.renderRow(e,t)}))))}},{key:"renderStatus",value:function(e){return this.state.updatingVersions.includes(e)?d.createElement("span",{className:"fa fa-lg fa-spin fa-spinner"}):e.repository_list.includes(T.g.PUBLISHED)?d.createElement("span",null,d.createElement(b.rE,{style:{color:"var(--pf-global--success-color--100)"}})," ",p.ag._("Approved")):e.repository_list.includes(T.g.NOTCERTIFIED)?d.createElement("span",null,d.createElement(C.$O,{style:{color:"var(--pf-global--danger-color--100)"}})," ",p.ag._("Rejected")):e.repository_list.includes(T.g.NEEDSREVIEW)?d.createElement("span",null,d.createElement(R.uM,{style:{color:"var(--pf-global--info-color--100)"}})," ",p.ag._("Needs Review")):void 0}},{key:"renderRow",value:function(e,t){return d.createElement("tr",{"aria-labelledby":"".concat(e.namespace,".").concat(e.name," v").concat(e.version),key:t},d.createElement("td",null,e.namespace),d.createElement("td",null,e.name),d.createElement("td",null,d.createElement(f.rU,{to:(0,S.dI)(S.nB.collectionByRepo,{namespace:e.namespace,collection:e.name,repo:e.repository_list[0]},{version:e.version})},e.version)),d.createElement("td",null,d.createElement(h.Id,{date:e.created_at})),d.createElement("td",null,this.renderStatus(e)),d.createElement("td",null,d.createElement("div",{className:"control-column"},d.createElement("div",null,this.renderButtons(e)))))}},{key:"renderButtons",value:function(e){var t=this;if(!this.state.updatingVersions.includes(e)){var n=d.createElement(_.h,{key:"imports",component:d.createElement(f.rU,{to:(0,S.dI)(S.nB.myImports,{},{namespace:e.namespace,name:e.name,version:e.version})},p.ag._("View Import Logs"))}),a=function(n,a){return d.createElement(_.h,{onClick:function(){return t.updateCertification(e,a,T.g.PUBLISHED)},isDisabled:n,key:"certify"},p.ag._("Approve"))},r=function(n,a){return d.createElement(_.h,{onClick:function(){return t.updateCertification(e,a,T.g.NOTCERTIFIED)},isDisabled:n,className:"rejected-icon",key:"reject"},p.ag._("Reject"))};return e.repository_list.includes(T.g.PUBLISHED)?d.createElement("span",null,d.createElement(h.hu,{items:[a(!0,T.g.PUBLISHED),r(!1,T.g.PUBLISHED),n]})):e.repository_list.includes(T.g.NOTCERTIFIED)?d.createElement("span",null,d.createElement(h.hu,{items:[a(!1,T.g.NOTCERTIFIED),r(!0,T.g.NOTCERTIFIED),n]})):e.repository_list.includes(T.g.NEEDSREVIEW)?d.createElement("span",null,d.createElement(k.zx,{onClick:function(){return t.updateCertification(e,T.g.NEEDSREVIEW,T.g.PUBLISHED)}},d.createElement("span",null,p.ag._("Approve"))),d.createElement(h.hu,{items:[r(!1,T.g.NEEDSREVIEW),n]})):void 0}}},{key:"updateCertification",value:function(e,t,n){var a=this;this.setState({updatingVersions:[]},(function(){return I.eq.setRepository(e.namespace,e.name,e.version,t,n).then((function(t){a.setState({updatingVersions:[e]}),a.waitForUpdate(t.data.remove_task_id,e)})).catch((function(t){a.setState({updatingVersions:[],alerts:a.state.alerts.concat({variant:"danger",title:p.ag._("API Error: {0}",{0:t.response.status}),description:p.ag._("Could not update the certification status for {0}.{1}.{2}.",{0:e.namespace,1:e.name,2:e.version})})})}))}))}},{key:"waitForUpdate",value:function(e,t){var n=this,r=e;return I.Kc.get(r).then(function(){var e=(0,a.Z)(m().mark((function e(o){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("waiting"!==o.data.state&&"running"!==o.data.state){e.next=6;break}return e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:n.waitForUpdate(r,t),e.next=11;break;case 6:if("completed"!==o.data.state){e.next=10;break}return e.abrupt("return",I.eq.list(n.state.params).then(function(){var e=(0,a.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({versions:t.data.data,updatingVersions:[]});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:n.setState({updatingVersions:[],alerts:n.state.alerts.concat({variant:"danger",title:p.ag._("API Error: 500"),description:p.ag._("Could not update the certification status for {0}.{1}.{2}.",{0:t.namespace,1:t.name,2:t.version})})});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"queryCollections",value:function(){var e=this;this.setState({loading:!0},(function(){return I.eq.list(e.state.params).then((function(t){e.setState({versions:t.data.data,itemCount:t.data.meta.count,loading:!1,updatingVersions:[]})}))}))}},{key:"updateParams",get:function(){return N.q6.updateParamsMixin()}},{key:"closeAlert",get:function(){return(0,h.NQ)("alerts")}}]),E}(d.Component);const U=(0,E.EN)(w);w.contextType=P.I},79784:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(15671),r=n(43144),o=n(60136),i=n(6215),l=n(61120),c=n(48222),s=n(25221),u=n(67294),m=n(73727),p=n(5977),d=n(47173),f=n(99239),E=n(61647),h=n(81467),g=n(18944),y=n(61542);var v=function(e){(0,o.Z)(y,e);var t,n,p=(t=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,l.Z)(t);if(n){var r=(0,l.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,i.Z)(this,e)});function y(e){var t;return(0,a.Z)(this,y),(t=p.call(this,e)).state={tokenData:void 0},t}return(0,r.Z)(y,[{key:"componentDidMount",value:function(){var e=this;window.insights.chrome.auth.getOfflineToken().then((function(t){e.setState({tokenData:t.data})}))}},{key:"render",value:function(){var e,t=this,n=this.context.user,a=this.state.tokenData,r='curl https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token -d grant_type=refresh_token -d client_id="'.concat(n.username,'" -d refresh_token="').concat(null!==(e=null==a?void 0:a.refresh_token)&&void 0!==e?e:"{{ user_token }}",'" --fail --silent --show-error --output /dev/null');return u.createElement(u.Fragment,null,u.createElement(h.UP,{title:s.ag._("Connect to Hub")}),u.createElement(h.or,null,u.createElement("section",{className:"body pf-c-content"},u.createElement("h2",null,s.ag._("Connect Private Automation Hub")),u.createElement("p",null,u.createElement(c.cC,{id:"Use the <0>Repository Management</0> page to sync collections curated by your organization to the Red Hat Certified repository in your private Automation Hub. Users with the correct permissions can use the sync toggles on the <1>Collections</1> page to control which collections are added to their organization's sync repository.",components:{0:u.createElement(m.rU,{to:E.nB.repositories}),1:u.createElement(m.rU,{to:E.nB.search})}}))),u.createElement("section",{className:"body pf-c-content"},u.createElement("h2",null,s.ag._("Connect the ansible-galaxy client")),u.createElement("p",null,u.createElement(c.cC,{id:"Documentation on how to configure the <0>ansible-galaxy</0> client can be found <1>here</1>. Use the following parameters to configure the client.",components:{0:u.createElement("code",null),1:u.createElement("a",{href:"https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/",target:"_blank"})}}))),u.createElement("section",{className:"body pf-c-content"},u.createElement("h2",null,s.ag._("Offline token")),u.createElement("p",null,u.createElement(c.cC,{id:"Use this token to authenticate clients that need to download content from Automation Hub. This is a secret token used to protect your content. Store your API token in a secure location."})),a?u.createElement("div",null,u.createElement(h.M5,null,a.refresh_token)):u.createElement(d.zx,{onClick:function(){return t.loadToken()}},s.ag._("Load token")),u.createElement("div",{className:"pf-c-content",style:{paddingTop:"var(--pf-global--spacer--md)"}},u.createElement("span",null,u.createElement(c.cC,{id:"The token will expire after 30 days of inactivity. Run the command below periodically to prevent your token from expiring."})),u.createElement(h.M5,{isCode:!0,isReadOnly:!0,variant:f.oo.expansion},r)),u.createElement("h2",null,s.ag._("Manage tokens")),u.createElement(c.cC,{id:"To revoke a token or see all of your tokens, visit the <0>offline API token management</0> page.",components:{0:u.createElement("a",{href:"https://sso.redhat.com/auth/realms/redhat-external/account/applications",target:"_blank"})}})),u.createElement("section",{className:"body pf-c-content"},u.createElement("h2",null,s.ag._("Server URL")),u.createElement("p",null,u.createElement(c.cC,{id:"Use this URL to configure the API endpoints that clients need to download content from Automation Hub."})),u.createElement(h.M5,{isReadOnly:!0},(0,g.qX)("")),u.createElement("p",null,u.createElement(c.cC,{id:"Note: this URL contains all collections in Hub. To connect to your organization's sync repository use the URL found on <0>Repository Management</0>.",components:{0:u.createElement(m.rU,{to:E.nB.repositories})}}))),u.createElement("section",{className:"body pf-c-content"},u.createElement("h2",null,s.ag._("SSO URL")),u.createElement("p",null,u.createElement(c.cC,{id:"Use this URL to configure the authentication URLs that clients need to download content from Automation Hub."})),u.createElement(h.M5,{isReadOnly:!0},"https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token"))))}},{key:"loadToken",value:function(){window.insights.chrome.auth.doOffline()}}]),y}(u.Component);const _=(0,p.EN)(v);v.contextType=y.I}}]);
//# sourceMappingURL=../sourcemaps/settings.fec1fdd42d35f7c63434.js.map