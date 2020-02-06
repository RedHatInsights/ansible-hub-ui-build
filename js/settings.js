(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{659:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".toolbar {\n  padding-bottom: 16px;\n  display: flex;\n  justify-content: space-between; }\n\n.certified-icon {\n  color: var(--pf-global--success-color--100); }\n\n.rejected-icon {\n  color: var(--pf-global--danger-color--100); }\n\n.needs-review-icon {\n  color: var(--pf-global--info-color--100); }\n\n.control-column {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n\n.footer {\n  padding-top: 16px; }\n\n.updating-spinner {\n  color: var(--pf-global--info-color--100); }\n",""])},669:function(e,t,n){var a=n(659);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(659,(function(){var t=n(659);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},682:function(e,t,n){"use strict";n.r(t);var a,r=n(2),o=n(455),i=n(41),c=n(450),l=n(104),s=n(252),u=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(t){var n=e.call(this,t)||this;return n.state={tokenData:void 0},n}return u(t,e),t.prototype.componentDidMount=function(){var e=this;window.insights.chrome.auth.getOfflineToken().then((function(t){e.setState({tokenData:t.data})}))},t.prototype.render=function(){var e=this,t=this.state.tokenData;return r.createElement(r.Fragment,null,r.createElement(s.d,{title:"Token management"}),r.createElement(i.Main,null,r.createElement(i.Section,{className:"body pf-c-content"},r.createElement("h2",null,"Offline token"),r.createElement("p",null,"Use this token to authenticate the"," ",r.createElement("code",null,"ansible-galaxy")," client."),t?r.createElement("div",null,r.createElement(c.a,null,t.refresh_token)):r.createElement(l.a,{onClick:function(){return e.loadToken()}},"Load token"),r.createElement("h2",null,"Manage tokens"),"To remove an existing token, visit"," ",r.createElement("a",{href:"https://sso.redhat.com/auth/realms/redhat-external/account/",target:"_blank"},"Red Hat SSO account managment"),".")))},t.prototype.loadToken=function(){window.insights.chrome.auth.doOffline()},t}(r.Component);t.default=Object(o.a)(m)},683:function(e,t,n){"use strict";n.r(t);var a,r=n(2),o=(n(669),n(4)),i=n(454),c=n(102),l=n(455),s=n(252),u=n(41),m=n(305),d=n(307),p=n(306),f=n(288),E=n(290),h=n(130),v=n(289),g=n(267),y=n(104),b=n(230),C=n(162),w=n(163),_=n(165),k=n(54),P=n(35),j=n(10),N=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,r++)a[r]=o[i];return a},S=function(e){function t(t){var n=e.call(this,t)||this,a=P.a.parseParamString(t.location.search,["page","page_size"]);return a.page_size||(a.page_size=10),a.sort||(a.sort="-pulp_created"),a.certification||(a.certification=k.a.needsReview),n.state={versions:void 0,itemCount:0,params:a,loading:!0,updatingVersions:[],redirect:void 0,alerts:[]},n}return N(t,e),t.prototype.componentDidMount=function(){var e=this;k.e.get().then((function(t){t.data.is_partner_engineer?e.queryCollections():e.setState({redirect:j.a.notFound})}))},t.prototype.render=function(){var e=this,t=this.state,n=t.versions,a=t.params,o=t.itemCount,c=t.loading,l=t.redirect;if(l)return r.createElement(i.a,{to:l});return n?r.createElement(r.Fragment,null,r.createElement(s.d,{title:"Certification dashboard"}),r.createElement(s.b,{alerts:this.state.alerts,closeAlert:function(t){return e.closeAlert(t)}}),r.createElement(u.Main,null,r.createElement(u.Section,{className:"body"},r.createElement("div",{className:"toolbar"},r.createElement(m.a,null,r.createElement(d.a,null,r.createElement(p.a,null,r.createElement(s.m,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:a,filterConfig:[{id:"namespace",title:"Namespace"},{id:"name",title:"Collection Name"},{id:"certification",title:"Certification Status",inputType:"select",options:[{id:"not_certified",title:"Rejected"},{id:"needs_review",title:"Needs Review"},{id:"certified",title:"Certified"}]}]}))),r.createElement(d.a,null,r.createElement(p.a,null,r.createElement(s.A,{options:[{id:"pulp_created",title:"Date created"},{id:"namespace",title:"Namespace name"},{id:"version",title:"Version number"},{id:"name",title:"Collection name"}],params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))}})))),r.createElement(s.w,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:o,isTop:!0})),r.createElement("div",null,r.createElement(s.c,{updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},params:a,ignoredParams:["page_size","page","sort"]})),c?r.createElement(s.q,null):this.renderTable(n),r.createElement("div",{className:"footer"},r.createElement(s.w,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.queryCollections()}))},count:o}))))):r.createElement(s.r,null)},t.prototype.renderTable=function(e){var t=this;return 0===e.length?r.createElement(f.a,{className:"empty",variant:f.b.full},r.createElement(E.a,{icon:b.b}),r.createElement(h.a,{headingLevel:"h2",size:"lg"},"No matches"),r.createElement(v.a,null,"Please try adjusting your search query.")):r.createElement("table",{"aria-label":"Collection versions",className:"content-table pf-c-table"},r.createElement("thead",null,r.createElement("tr",{"aria-labelledby":"headers"},r.createElement("th",null,"Namespace"),r.createElement("th",null,"Collection"),r.createElement("th",null,"Version"),r.createElement("th",null,"Date created"),r.createElement("th",null,"Status"),r.createElement("th",null))),r.createElement("tbody",null,e.map((function(e,n){return t.renderRow(e,n)}))))},t.prototype.renderStatus=function(e){if(this.state.updatingVersions.includes(e.id))return r.createElement("span",{className:"fa fa-lg fa-spin fa-spinner"});switch(e.certification){case k.a.certified:return r.createElement("span",null,r.createElement(C.b,{className:"certified-icon"})," Certified");case k.a.notCertified:return r.createElement("span",null,r.createElement(w.b,{className:"rejected-icon"})," ","Rejected");case k.a.needsReview:return r.createElement("span",null,r.createElement(_.b,{className:"needs-review-icon"})," Needs Review")}},t.prototype.renderRow=function(e,t){return r.createElement("tr",{"aria-labelledby":e.namespace+"."+e.name+" v"+e.version,key:t},r.createElement("td",null,e.namespace),r.createElement("td",null,e.name),r.createElement("td",null,r.createElement(c.a,{to:Object(j.b)(j.a.collection,{namespace:e.namespace,collection:e.name},{version:e.version})},e.version)),r.createElement("td",null,o(e.created_at).fromNow()),r.createElement("td",null,this.renderStatus(e)),r.createElement("td",null,r.createElement("div",{className:"control-column"},r.createElement("div",null,this.renderButtons(e)))))},t.prototype.renderButtons=function(e){var t=this,n=r.createElement(g.a,{key:"imports",component:r.createElement(c.a,{to:Object(j.b)(j.a.myImports,{},{namespace:e.namespace,name:e.name,version:e.version})},"View Import Logs")}),a=function(n){return r.createElement(g.a,{onClick:function(){return t.updateCertification(e,k.a.certified)},isDisabled:n,key:"certify"},"Certify")},o=function(n){return r.createElement(g.a,{onClick:function(){return t.updateCertification(e,k.a.notCertified)},isDisabled:n,className:"rejected-icon",key:"reject"},"Reject")};switch(e.certification){case k.a.certified:return r.createElement("span",null,r.createElement(s.B,{items:[a(!0),o(!1),n]}));case k.a.notCertified:return r.createElement("span",null,r.createElement(s.B,{items:[a(!1),o(!0),n]}));case k.a.needsReview:return r.createElement("span",null,r.createElement(y.a,{onClick:function(){return t.updateCertification(e,k.a.certified)}},r.createElement("span",null,"Certify")),r.createElement(s.B,{items:[o(!1),n]}))}},t.prototype.updateCertification=function(e,t){var n=this;this.setState({updatingVersions:this.state.updatingVersions.concat([e.id])},(function(){return k.c.setCertifiation(e.namespace,e.name,e.version,t).then((function(){return k.c.list({namespace:e.namespace,name:e.name,version:e.version}).then((function(e){var t=e.data.data[0],a=O(n.state.versions),r=a.findIndex((function(e){return e.id===t.id}));a[r]=t,n.setState({versions:a,updatingVersions:n.state.updatingVersions.filter((function(e){return e!=t.id}))})}))})).catch((function(t){n.setState({updatingVersions:n.state.updatingVersions.filter((function(t){return t!=e.id})),alerts:n.state.alerts.concat({variant:"danger",title:"API Error: "+t.response.status,description:"Could not update the certification status for "+e.namespace+"."+e.name+"."+e.version+"."})})}))}))},t.prototype.queryCollections=function(){var e=this;this.setState({loading:!0},(function(){return k.c.list(e.state.params).then((function(t){return e.setState({versions:t.data.data,itemCount:t.data.meta.count,loading:!1,updatingVersions:[]})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return P.a.updateParamsMixin()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"closeAlert",{get:function(){return Object(s.H)("alerts")},enumerable:!0,configurable:!0}),t}(r.Component);t.default=Object(l.a)(S)}}]);
//# sourceMappingURL=settings.js.map