"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[366],{22366:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(87462),r=a(15671),s=a(43144),o=a(79340),i=a(82963),l=a(61120),c=a(92950),u=a(40693),m=a(98314),p=a(61647),d=a(61542),f=a(48706);var h=function(e){(0,o.Z)(d,e);var t,a,u=(t=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(a){var r=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function d(){return(0,r.Z)(this,d),u.apply(this,arguments)}return(0,s.Z)(d,[{key:"render",value:function(){return!this.context.user||this.context.user.is_anonymous?c.createElement(f.iA,null):c.createElement(m.T,(0,n.Z)({},this.props,{namespacePath:p.nB.myCollectionsByRepo,filterOwner:!0}))}}]),d}(c.Component);const g=(0,u.EN)(h);h.contextType=d.I},98314:(e,t,a)=>{a.d(t,{T:()=>_});var n=a(42982),r=a(87462),s=a(15671),o=a(43144),i=a(97326),l=a(79340),c=a(82963),u=a(61120),m=a(4942),p=a(92950),d=a(11930),f=a(62012),h=a(43819),g=a(48706),y=a(47922),v=a(61647),E=a(42807),N=a(40693),P=a(61542),T=a(27693);var _=function(e){(0,l.Z)(_,e);var t,a,P=(t=_,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(a){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function _(e){var t;(0,s.Z)(this,_),t=P.call(this,e),(0,m.Z)((0,i.Z)(t),"nonURLParams",["tenant"]),(0,m.Z)((0,i.Z)(t),"handleModalToggle",(function(){t.setState((function(e){return{isModalOpen:!e.isModalOpen}}))}));var a=h.q.parseParamString(e.location.search,["page","page_size"]);return a.page_size||(a.page_size=20),a.sort||(a.sort="name"),t.state={alerts:[],namespaces:void 0,itemCount:0,params:a,hasPermission:!0,isModalOpen:!1,loading:!0,inputText:a.keywords||""},t}return(0,o.Z)(_,[{key:"componentDidMount",value:function(){var e=this;this.setState({alerts:this.context.alerts||[]}),this.context.setAlerts([]),this.props.filterOwner?y.V$.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})).catch((function(t){var a=t.response,n=a.status,r=a.statusText;e.setState({namespaces:[],itemCount:0,loading:!1},(function(){return e.addAlert({variant:"danger",title:T.ag._("Namespaces list could not be displayed."),description:(0,N.N3)(n,r)})}))})):this.loadNamespaces()}},{key:"render",value:function(){var e=this;if(this.state.redirect)return p.createElement(f.Navigate,{to:this.state.redirect});var t=this.state,a=t.alerts,n=t.namespaces,r=t.params,s=t.itemCount,o=t.loading,i=t.inputText,l=this.props.filterOwner,c=this.context.hasPermission,u=!(0,N.vS)(this.state.params,["keywords"])&&void 0!==n&&0===n.length;if(o)return p.createElement(g.gO,null);var m=T.ag._(v.Th.name);return p.createElement("div",{className:"hub-namespace-page"},p.createElement(g.RZ,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(t){return e.setState({redirect:(0,v.dI)(v.nB.namespaceByRepo,{repo:"published",namespace:t.name},{tab:"owners"})})}}),p.createElement(g.UW,{alerts:a,closeAlert:function(t){return e.closeAlert(t)}}),p.createElement(g.UP,{title:m},!this.context.user.is_anonymous&&p.createElement("div",{className:"hub-tab-link-container"},p.createElement("div",{className:"tabs"},p.createElement(g.Ak,{tabs:[{title:T.ag._("All"),link:(0,v.dI)(v.nB.partners),active:!l},{title:T.ag._("My namespaces"),link:(0,v.dI)(v.nB.myNamespaces),active:l}]}))),u?null:p.createElement("div",{className:"toolbar"},p.createElement(d.Toolbar,null,p.createElement(d.ToolbarContent,null,p.createElement(d.ToolbarGroup,{style:{marginLeft:0}},p.createElement(d.ToolbarItem,null,p.createElement(g.Kv,{inputText:i,onChange:function(t){return e.setState({inputText:t})},updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},params:r,filterConfig:[{id:"keywords",title:T.ag._("keywords")}]}),p.createElement(g.M$,{style:{marginTop:"16px"},updateParams:function(t){e.updateParams(t,(function(){return e.loadNamespaces()})),e.setState({inputText:""})},params:r,ignoredParams:["page_size","page","sort"]}))),p.createElement(d.ToolbarGroup,{style:{alignSelf:"start"}},p.createElement(d.ToolbarItem,null,p.createElement(g.PE,{options:[{title:T.ag._("Name"),id:"name",type:"alpha"}],params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))}})),c("galaxy.add_namespace")&&p.createElement(d.ToolbarItem,{key:"create-button"},p.createElement(d.Button,{variant:"primary",onClick:this.handleModalToggle},T.ag._("Create")))))),p.createElement("div",null,p.createElement(g.tl,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},count:s,isCompact:!0,perPageOptions:E.g.CARD_DEFAULT_PAGINATION_OPTIONS})))),p.createElement("section",{className:"card-area"},this.renderBody()),u||o?null:p.createElement("section",{className:"footer"},p.createElement(g.tl,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},perPageOptions:E.g.CARD_DEFAULT_PAGINATION_OPTIONS,count:s})))}},{key:"renderBody",value:function(){var e=this,t=this.state,a=t.namespaces,n=t.loading,s=this.props,o=s.namespacePath,i=s.filterOwner,l=this.context.hasPermission,c=T.ag._("No namespaces yet"),u=i?T.ag._("This account is not set up to manage any namespaces"):T.ag._("Namespaces will appear once created"),m=l("galaxy.add_namespace")?p.createElement(d.Button,{variant:"primary",onClick:function(){return e.handleModalToggle()}},T.ag._("Create")):null;return n?p.createElement("section",null,p.createElement(g.AW,null),";"):0===a.length?p.createElement("section",null,(0,N.vS)(this.state.params,["keywords"])?p.createElement(g.ei,null):p.createElement(g.vv,{title:c,description:u,button:m})):p.createElement("section",{className:"card-layout"},a.map((function(t,a){return p.createElement("div",{key:a,className:"card-wrapper"},p.createElement(g._v,(0,r.Z)({namespaceURL:(0,v.dI)(o,{namespace:t.name,repo:e.context.selectedRepo}),key:a},t)))})))}},{key:"loadNamespaces",value:function(){var e=this,t=this.props.filterOwner?y.V$:y.jZ;this.setState({loading:!0},(function(){t.list(e.state.params).then((function(t){e.setState({namespaces:t.data.data,itemCount:t.data.meta.count,loading:!1})})).catch((function(t){var a=t.response,n=a.status,r=a.statusText;e.setState({namespaces:[],itemCount:0,loading:!1},(function(){return e.addAlert({variant:"danger",title:T.ag._("Namespaces list could not be displayed."),description:(0,N.N3)(n,r)})}))}))}))}},{key:"updateParams",get:function(){return h.q.updateParamsMixin(this.nonURLParams)}},{key:"addAlert",value:function(e){this.setState({alerts:[].concat((0,n.Z)(this.state.alerts),[e])})}},{key:"closeAlert",get:function(){return(0,g.NQ)("alerts")}}]),_}(p.Component);_.contextType=P.I}}]);
//# sourceMappingURL=../sourcemaps/366.27daaca6d63cab8eed11bc995ee74712.js.map