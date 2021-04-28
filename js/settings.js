(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{933:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".certification-dasboard .toolbar{padding-bottom:16px;display:flex;justify-content:space-between}.certification-dasboard .control-column{display:flex;justify-content:flex-end;align-items:center}.certification-dasboard .footer{padding-top:16px}.certification-dasboard .updating-spinner{color:var(--pf-global--info-color--100)}",""])},945:function(e,t,n){var a=n(933);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},r=n(8)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(933,(function(){var t=n(933);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)})),e.hot.dispose((function(){r()}))},958:function(e,t,n){"use strict";n.r(t);var a,o=n(1),r=n(188),i=n(629),c=n(71),s=n(623),l=n(49),u=n(14),p=n(384),d=n(28),m=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(t){var n=e.call(this,t)||this;return n.state={tokenData:void 0},n}return m(t,e),t.prototype.componentDidMount=function(){var e=this;window.insights.chrome.auth.getOfflineToken().then((function(t){e.setState({tokenData:t.data})}))},t.prototype.render=function(){var e=this,t=this.state.tokenData;return o.createElement(o.Fragment,null,o.createElement(p.d,{title:"Connect to Hub"}),o.createElement(p.z,null,o.createElement(c.Section,{className:"body pf-c-content"},o.createElement("h2",null,"Connect Private Automation Hub"),o.createElement("p",null,"Use the ",o.createElement(r.a,{to:u.a.repositories},"Repository Management")," ","page to sync collections curated by your organization to the Red Hat Certified repository in your private Automation Hub. Users with the correct permissions can use the sync toggles on the"," ",o.createElement(r.a,{to:u.a.search},"Collections")," page to control which collections are added to their organization's sync repository.")),o.createElement(c.Section,{className:"body pf-c-content"},o.createElement("h2",null,"Connect the ansible-galaxy client"),o.createElement("p",null,"Documentation on how to configure the ",o.createElement("code",null,"ansible-galaxy")," ","client can be found"," ",o.createElement("a",{href:"https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/",target:"_blank"},"here"),". Use the following parameters to configure the client.")),o.createElement(c.Section,{className:"body pf-c-content"},o.createElement("h2",null,"Offline token"),o.createElement("p",null,"Use this token to authenticate clients that need to download content from Automation Hub. This is a secret token used to protect your content. Store your API token in a secure location."),t?o.createElement("div",null,o.createElement(s.a,null,t.refresh_token)):o.createElement(l.a,{onClick:function(){return e.loadToken()}},"Load token"),o.createElement("h2",null,"Manage tokens"),"To revoke a token or see all of your tokens, visit the"," ",o.createElement("a",{href:"https://sso.redhat.com/auth/realms/redhat-external/account/applications",target:"_blank"},"offline API token management")," ","page."),o.createElement(c.Section,{className:"body pf-c-content"},o.createElement("h2",null,"Server URL"),o.createElement("p",null,"Use this URL to configure the API endpoints that clients need to download content from Automation Hub."),o.createElement(s.a,{isReadOnly:!0},Object(d.e)("")),o.createElement("p",null,"Note: this URL contains all collections in Hub. To connect to your organization's sync repository use the URL found on"," ",o.createElement(r.a,{to:u.a.repositories},"Repository Management"),".")),o.createElement(c.Section,{className:"body pf-c-content"},o.createElement("h2",null,"SSO URL"),o.createElement("p",null,"Use this URL to configure the authentication URLs that clients need to download content from Automation Hub."),o.createElement(s.a,{isReadOnly:!0},"https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token"))))},t.prototype.loadToken=function(){window.insights.chrome.auth.doOffline()},t}(o.Component);t.default=Object(i.a)(f);try{tokeninsights.displayName="tokeninsights",tokeninsights.__docgenInfo={description:"",displayName:"tokeninsights",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<TokenPage>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/token/token-insights.tsx#tokeninsights"]={docgenInfo:tokeninsights.__docgenInfo,name:"tokeninsights",path:"src/containers/token/token-insights.tsx#tokeninsights"})}catch(e){}},959:function(e,t,n){"use strict";n.r(t);var a,o=n(1),r=(n(945),n(4)),i=n(188),c=n(629),s=n(384),l=n(71),u=n(631),p=n(126),d=n(99),m=n(182),f=n(49),h=n(107),E=n(128),y=n(129),b=n(36),g=n(28),v=n(14),_=n(24),S=n(88),w=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),C=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{s(a.next(e))}catch(e){r(e)}}function c(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((a=a.apply(e,t||[])).next())}))},k=function(e,t){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(o=2&r[0]?a.return:r[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,a=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}},R=function(e){function t(t){var n=e.call(this,t)||this,a=g.a.parseParamString(t.location.search,["page","page_size"]);return a.page_size||(a.page_size=10),a.sort||(a.sort="-pulp_created"),a.repository||(a.repository="staging"),n.state={versions:void 0,itemCount:0,params:a,loading:!0,updatingVersions:[],alerts:[],unauthorized:!1},n}return w(t,e),t.prototype.componentDidMount=function(){this.context.user&&this.context.user.model_permissions.move_collection?this.queryCollections():this.setState({unauthorized:!0})},t.prototype.render=function(){var e=this,t=this.state,n=t.versions,a=t.params,r=t.itemCount,i=t.loading,c=t.unauthorized;return n||c?o.createElement(o.Fragment,null,o.createElement(s.d,{title:"Approval dashboard"}),o.createElement(s.b,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),c?o.createElement(s.r,null):o.createElement(s.z,{className:"certification-dashboard"},o.createElement(l.Section,{className:"body"},o.createElement("div",{className:"toolbar"},o.createElement(u.a,null,o.createElement(p.a,null,o.createElement(d.a,null,o.createElement(s.m,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:a,filterConfig:[{id:"namespace",title:"Namespace"},{id:"name",title:"Collection Name"},{id:"repository",title:"Repository",inputType:"select",options:[{id:_.a.NOTCERTIFIED,title:"Rejected"},{id:_.a.NEEDSREVIEW,title:"Needs Review"},{id:_.a.PUBLISHED,title:"Approved"}]}]})))),o.createElement(s.G,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:r,isTop:!0})),o.createElement("div",null,o.createElement(s.c,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:a,ignoredParams:["page_size","page","sort"]})),i?o.createElement(s.v,null):this.renderTable(n,a),o.createElement("div",{className:"footer"},o.createElement(s.G,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:r}))))):o.createElement(s.w,null)},t.prototype.renderTable=function(e,t){var n=this;if(0===e.length)return Object(g.d)(t,["namespace","name","repository"])?o.createElement(s.p,null):o.createElement(s.q,{title:"No managed collections yet",description:"Collections will appear once uploaded"});return o.createElement("table",{"aria-label":"Collection versions",className:"content-table pf-c-table"},o.createElement(s.O,{options:{headers:[{title:"Namespace",type:"alpha",id:"namespace"},{title:"Collection",type:"alpha",id:"collection"},{title:"Version",type:"number",id:"version"},{title:"Date created",type:"number",id:"pulp_created"},{title:"Status",type:"none",id:"status"},{title:"",type:"none",id:"certify"}]},params:t,updateParams:function(e){return n.updateParams(e,(function(){return n.queryCollections()}))}}),o.createElement("tbody",null,e.map((function(e,t){return n.renderRow(e,t)}))))},t.prototype.renderStatus=function(e){return this.state.updatingVersions.includes(e)?o.createElement("span",{className:"fa fa-lg fa-spin fa-spinner"}):e.repository_list.includes(_.a.PUBLISHED)?o.createElement("span",null,o.createElement(h.a,{style:{color:"var(--pf-global--success-color--100)"}})," ","Approved"):e.repository_list.includes(_.a.NOTCERTIFIED)?o.createElement("span",null,o.createElement(E.a,{style:{color:"var(--pf-global--danger-color--100)"}})," ","Rejected"):e.repository_list.includes(_.a.NEEDSREVIEW)?o.createElement("span",null,o.createElement(y.a,{style:{color:"var(--pf-global--info-color--100)"}})," ","Needs Review"):void 0},t.prototype.renderRow=function(e,t){return o.createElement("tr",{"aria-labelledby":e.namespace+"."+e.name+" v"+e.version,key:t},o.createElement("td",null,e.namespace),o.createElement("td",null,e.name),o.createElement("td",null,o.createElement(i.a,{to:Object(v.b)(v.a.collectionByRepo,{namespace:e.namespace,collection:e.name,repo:e.repository_list[0]},{version:e.version})},e.version)),o.createElement("td",null,r(e.created_at).fromNow()),o.createElement("td",null,this.renderStatus(e)),o.createElement("td",null,o.createElement("div",{className:"control-column"},o.createElement("div",null,this.renderButtons(e)))))},t.prototype.renderButtons=function(e){var t=this;if(!this.state.updatingVersions.includes(e)){var n=o.createElement(m.a,{key:"imports",component:o.createElement(i.a,{to:Object(v.b)(v.a.myImports,{},{namespace:e.namespace,name:e.name,version:e.version})},"View Import Logs")}),a=function(n,a){return o.createElement(m.a,{onClick:function(){return t.updateCertification(e,a,_.a.PUBLISHED)},isDisabled:n,key:"certify"},"Approve")},r=function(n,a){return o.createElement(m.a,{onClick:function(){return t.updateCertification(e,a,_.a.NOTCERTIFIED)},isDisabled:n,className:"rejected-icon",key:"reject"},"Reject")};return e.repository_list.includes(_.a.PUBLISHED)?o.createElement("span",null,o.createElement(s.P,{items:[a(!0,_.a.PUBLISHED),r(!1,_.a.PUBLISHED),n]})):e.repository_list.includes(_.a.NOTCERTIFIED)?o.createElement("span",null,o.createElement(s.P,{items:[a(!1,_.a.NOTCERTIFIED),r(!0,_.a.NOTCERTIFIED),n]})):e.repository_list.includes(_.a.NEEDSREVIEW)?o.createElement("span",null,o.createElement(f.a,{onClick:function(){return t.updateCertification(e,_.a.NEEDSREVIEW,_.a.PUBLISHED)}},o.createElement("span",null,"Approve")),o.createElement(s.P,{items:[r(!1,_.a.NEEDSREVIEW),n]})):void 0}},t.prototype.updateCertification=function(e,t,n){var a=this;this.setState({updatingVersions:[]},(function(){return b.c.setRepository(e.namespace,e.name,e.version,t,n).then((function(t){a.setState({updatingVersions:[e]}),a.waitForUpdate(t.data.remove_task_id,e)})).catch((function(t){a.setState({updatingVersions:[],alerts:a.state.alerts.concat({variant:"danger",title:"API Error: "+t.response.status,description:"Could not update the certification status for "+e.namespace+"."+e.name+"."+e.version+"."})})}))}))},t.prototype.waitForUpdate=function(e,t){var n=this,a=e;return b.m.get(a).then((function(e){return C(n,void 0,void 0,(function(){var n=this;return k(this,(function(o){switch(o.label){case 0:return"waiting"!==e.data.state&&"running"!==e.data.state?[3,2]:[4,new Promise((function(e){return setTimeout(e,500)}))];case 1:return o.sent(),this.waitForUpdate(a,t),[3,3];case 2:if("completed"===e.data.state)return[2,b.c.list(this.state.params).then((function(e){return C(n,void 0,void 0,(function(){return k(this,(function(t){return this.setState({versions:e.data.data,updatingVersions:[]}),[2]}))}))}))];this.setState({updatingVersions:[],alerts:this.state.alerts.concat({variant:"danger",title:"API Error: 500",description:"Could not update the certification status for "+t.namespace+"."+t.name+"."+t.version+"."})}),o.label=3;case 3:return[2]}}))}))}))},t.prototype.queryCollections=function(){var e=this;this.setState({loading:!0},(function(){return b.c.list(e.state.params).then((function(t){e.setState({versions:t.data.data,itemCount:t.data.meta.count,loading:!1,updatingVersions:[]})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return g.a.updateParamsMixin()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"closeAlert",{get:function(){return Object(s.X)("alerts")},enumerable:!1,configurable:!0}),t}(o.Component);t.default=Object(c.a)(R),R.contextType=S.a;try{certificationdashboard.displayName="certificationdashboard",certificationdashboard.__docgenInfo={description:"",displayName:"certificationdashboard",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<CertificationDashboard>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/certification-dashboard/certification-dashboard.tsx#certificationdashboard"]={docgenInfo:certificationdashboard.__docgenInfo,name:"certificationdashboard",path:"src/containers/certification-dashboard/certification-dashboard.tsx#certificationdashboard"})}catch(e){}}}]);
//# sourceMappingURL=settings.js.map