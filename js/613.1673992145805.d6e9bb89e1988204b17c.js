"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[613],{98314:(e,t,a)=>{a.d(t,{T:()=>_});var n=a(42982),r=a(87462),s=a(15671),o=a(43144),i=a(97326),l=a(79340),c=a(82963),u=a(61120),p=a(4942),m=a(27693),d=a(11930),f=a(92950),h=a(62012),g=a(95517),y=a(48706),v=a(42807),E=a(61542),N=a(61647),P=a(29423),T=a(43819);var _=function(e){(0,l.Z)(_,e);var t,a,E=(t=_,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(a){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function _(e){var t;(0,s.Z)(this,_),t=E.call(this,e),(0,p.Z)((0,i.Z)(t),"nonURLParams",["tenant"]),(0,p.Z)((0,i.Z)(t),"handleModalToggle",(function(){t.setState((function(e){return{isModalOpen:!e.isModalOpen}}))}));var a=T.q.parseParamString(e.location.search,["page","page_size"]);return a.page_size||(a.page_size=20),a.sort||(a.sort="name"),t.state={alerts:[],namespaces:void 0,itemCount:0,params:a,hasPermission:!0,isModalOpen:!1,loading:!0,inputText:a.keywords||""},t}return(0,o.Z)(_,[{key:"componentDidMount",value:function(){var e=this;this.setState({alerts:this.context.alerts||[]}),this.context.setAlerts([]),this.props.filterOwner?g.V$.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})).catch((function(t){var a=t.response,n=a.status,r=a.statusText;e.setState({namespaces:[],itemCount:0,loading:!1},(function(){return e.addAlert({variant:"danger",title:m.ag._("Namespaces list could not be displayed."),description:(0,P.N3)(n,r)})}))})):this.loadNamespaces()}},{key:"render",value:function(){var e=this;if(this.state.redirect)return f.createElement(h.Navigate,{to:this.state.redirect});var t=this.state,a=t.alerts,n=t.namespaces,r=t.params,s=t.itemCount,o=t.loading,i=t.inputText,l=this.props.filterOwner,c=this.context.hasPermission,u=!(0,P.vS)(this.state.params,["keywords"])&&void 0!==n&&0===n.length;if(o)return f.createElement(y.gO,null);var p=m.ag._(N.Th.name);return f.createElement("div",{className:"hub-namespace-page"},f.createElement(y.RZ,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(t){return e.setState({redirect:(0,N.dI)(N.nB.namespaceByRepo,{repo:"published",namespace:t.name},{tab:"owners"})})}}),f.createElement(y.UW,{alerts:a,closeAlert:function(t){return e.closeAlert(t)}}),f.createElement(y.UP,{title:p},!this.context.user.is_anonymous&&f.createElement("div",{className:"hub-tab-link-container"},f.createElement("div",{className:"tabs"},f.createElement(y.Ak,{tabs:[{title:m.ag._("All"),link:(0,N.dI)(N.nB.partners),active:!l},{title:m.ag._("My namespaces"),link:(0,N.dI)(N.nB.myNamespaces),active:l}]}))),u?null:f.createElement("div",{className:"toolbar"},f.createElement(d.Toolbar,null,f.createElement(d.ToolbarContent,null,f.createElement(d.ToolbarGroup,{style:{marginLeft:0}},f.createElement(d.ToolbarItem,null,f.createElement(y.Kv,{inputText:i,onChange:function(t){return e.setState({inputText:t})},updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},params:r,filterConfig:[{id:"keywords",title:m.ag._("keywords")}]}),f.createElement(y.M$,{style:{marginTop:"16px"},updateParams:function(t){e.updateParams(t,(function(){return e.loadNamespaces()})),e.setState({inputText:""})},params:r,ignoredParams:["page_size","page","sort"]}))),f.createElement(d.ToolbarGroup,{style:{alignSelf:"start"}},f.createElement(d.ToolbarItem,null,f.createElement(y.PE,{options:[{title:m.ag._("Name"),id:"name",type:"alpha"}],params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))}})),c("galaxy.add_namespace")&&f.createElement(d.ToolbarItem,{key:"create-button"},f.createElement(d.Button,{variant:"primary",onClick:this.handleModalToggle},m.ag._("Create")))))),f.createElement("div",null,f.createElement(y.tl,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},count:s,isCompact:!0,perPageOptions:v.g.CARD_DEFAULT_PAGINATION_OPTIONS})))),f.createElement("section",{className:"card-area"},this.renderBody()),u||o?null:f.createElement("section",{className:"footer"},f.createElement(y.tl,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},perPageOptions:v.g.CARD_DEFAULT_PAGINATION_OPTIONS,count:s})))}},{key:"renderBody",value:function(){var e=this,t=this.state,a=t.namespaces,n=t.loading,s=this.props,o=s.namespacePath,i=s.filterOwner,l=this.context.hasPermission,c=m.ag._("No namespaces yet"),u=i?m.ag._("This account is not set up to manage any namespaces"):m.ag._("Namespaces will appear once created"),p=l("galaxy.add_namespace")?f.createElement(d.Button,{variant:"primary",onClick:function(){return e.handleModalToggle()}},m.ag._("Create")):null;return n?f.createElement("section",null,f.createElement(y.AW,null),";"):0===a.length?f.createElement("section",null,(0,P.vS)(this.state.params,["keywords"])?f.createElement(y.ei,null):f.createElement(y.vv,{title:c,description:u,button:p})):f.createElement("section",{className:"card-layout"},a.map((function(t,a){return f.createElement("div",{key:a,className:"card-wrapper"},f.createElement(y._v,(0,r.Z)({namespaceURL:(0,N.dI)(o,{namespace:t.name,repo:e.context.selectedRepo}),key:a},t)))})))}},{key:"loadNamespaces",value:function(){var e=this,t=this.props.filterOwner?g.V$:g.jZ;this.setState({loading:!0},(function(){t.list(e.state.params).then((function(t){e.setState({namespaces:t.data.data,itemCount:t.data.meta.count,loading:!1})})).catch((function(t){var a=t.response,n=a.status,r=a.statusText;e.setState({namespaces:[],itemCount:0,loading:!1},(function(){return e.addAlert({variant:"danger",title:m.ag._("Namespaces list could not be displayed."),description:(0,P.N3)(n,r)})}))}))}))}},{key:"updateParams",get:function(){return T.q.updateParamsMixin(this.nonURLParams)}},{key:"addAlert",value:function(e){this.setState({alerts:[].concat((0,n.Z)(this.state.alerts),[e])})}},{key:"closeAlert",get:function(){return(0,y.NQ)("alerts")}}]),_}(f.Component);_.contextType=E.I},42613:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(87462),r=a(15671),s=a(43144),o=a(79340),i=a(82963),l=a(61120),c=a(92950),u=a(61647),p=a(29423),m=a(98314);var d=function(e){(0,o.Z)(d,e);var t,a,p=(t=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(a){var r=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function d(){return(0,r.Z)(this,d),p.apply(this,arguments)}return(0,s.Z)(d,[{key:"render",value:function(){return c.createElement(m.T,(0,n.Z)({},this.props,{namespacePath:u.nB.namespaceByRepo,filterOwner:!1}))}}]),d}(c.Component);const f=(0,p.EN)(d)}}]);
//# sourceMappingURL=../sourcemaps/613.3997af932750e953c15384e64c24a285.js.map