"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[684],{22366:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(87462),r=a(15671),s=a(43144),o=a(60136),c=a(82963),i=a(61120),l=a(30624),u=a(96620),p=a(98314),m=a(61647),d=a(61542),f=a(89216);var h=function(e){(0,o.Z)(d,e);var t,a,u=(t=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var r=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function d(){return(0,r.Z)(this,d),u.apply(this,arguments)}return(0,s.Z)(d,[{key:"render",value:function(){return!this.context.user||this.context.user.is_anonymous?l.createElement(f.iA,null):l.createElement(p.T,(0,n.Z)({},this.props,{namespacePath:m.nB.myCollectionsByRepo,filterOwner:!0}))}}]),d}(l.Component);const y=(0,u.withRouter)(h);h.contextType=d.I},98314:(e,t,a)=>{a.d(t,{T:()=>N});var n=a(87462),r=a(42982),s=a(15671),o=a(43144),c=a(97326),i=a(60136),l=a(82963),u=a(61120),p=a(4942),m=a(30624),d=a(11930),f=a(96620),h=a(43819),y=a(89216),g=a(47922),v=a(61647),E=a(42807),P=a(20451),T=a(61542),_=a(27693);var N=function(e){(0,i.Z)(N,e);var t,a,T=(t=N,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(a){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function N(e){var t;(0,s.Z)(this,N),t=T.call(this,e),(0,p.Z)((0,c.Z)(t),"nonURLParams",["tenant"]),(0,p.Z)((0,c.Z)(t),"handleModalToggle",(function(){t.setState((function(e){return{isModalOpen:!e.isModalOpen}}))}));var a=h.q.parseParamString(e.location.search,["page","page_size"]);return a.page_size||(a.page_size=20),a.sort||(a.sort="name"),t.state={namespaces:void 0,itemCount:0,params:a,hasPermission:!0,isModalOpen:!1,loading:!0,inputText:a.keywords||""},t}return(0,o.Z)(N,[{key:"componentDidMount",value:function(){var e=this;this.props.filterOwner?g.V$.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})).catch((function(t){var a=t.response,n=a.status,s=a.statusText;e.setState({namespaces:[],itemCount:0,loading:!1},(function(){return e.context.setAlerts([].concat((0,r.Z)(e.context.alerts),[{variant:"danger",title:_.ag._("Namespaces list could not be displayed."),description:(0,P.N3)(n,s)}]))}))})):this.loadNamespaces()}},{key:"componentWillUnmount",value:function(){this.context.setAlerts([])}},{key:"render",value:function(){var e=this;if(this.state.redirect)return m.createElement(f.Redirect,{push:!0,to:this.state.redirect});var t=this.state,a=t.namespaces,n=t.params,r=t.itemCount,s=t.loading,o=t.inputText,c=this.props.filterOwner,i=this.context,l=i.alerts,u=i.hasPermission,p=!(0,P.vS)(this.state.params,["keywords"])&&void 0!==a&&0===a.length;if(s)return m.createElement(y.gO,null);var h=_.ag._(v.Th.name);return m.createElement("div",{className:"hub-namespace-page"},m.createElement(y.RZ,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(t){return e.setState({redirect:(0,v.dI)(v.nB.namespaceByRepo,{repo:"published",namespace:t.name},{tab:"owners"})})}}),m.createElement(y.UW,{alerts:l,closeAlert:function(){return e.closeAlert()}}),m.createElement(y.UP,{title:h},!this.context.user.is_anonymous&&m.createElement("div",{className:"hub-tab-link-container"},m.createElement("div",{className:"tabs"},m.createElement(y.Ak,{tabs:[{title:_.ag._("All"),link:v.nB.partners,active:!c},{title:_.ag._("My namespaces"),link:v.nB.myNamespaces,active:c}]}))),p?null:m.createElement("div",{className:"toolbar"},m.createElement(d.Toolbar,null,m.createElement(d.ToolbarContent,null,m.createElement(d.ToolbarGroup,{style:{marginLeft:0}},m.createElement(d.ToolbarItem,null,m.createElement(y.Kv,{inputText:o,onChange:function(t){return e.setState({inputText:t})},updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},params:n,filterConfig:[{id:"keywords",title:_.ag._("keywords")}]}),m.createElement(y.M$,{style:{marginTop:"16px"},updateParams:function(t){e.updateParams(t,(function(){return e.loadNamespaces()})),e.setState({inputText:""})},params:n,ignoredParams:["page_size","page","sort"]}))),m.createElement(d.ToolbarGroup,{style:{alignSelf:"start"}},m.createElement(d.ToolbarItem,null,m.createElement(y.PE,{options:[{title:_.ag._("Name"),id:"name",type:"alpha"}],params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))}})),u("galaxy.add_namespace")&&m.createElement(d.ToolbarItem,{key:"create-button"},m.createElement(d.Button,{variant:"primary",onClick:this.handleModalToggle},_.ag._("Create")))))),m.createElement("div",null,m.createElement(y.tl,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},count:r,isCompact:!0,perPageOptions:E.g.CARD_DEFAULT_PAGINATION_OPTIONS})))),m.createElement("section",{className:"card-area"},this.renderBody()),p||s?null:m.createElement("section",{className:"footer"},m.createElement(y.tl,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},perPageOptions:E.g.CARD_DEFAULT_PAGINATION_OPTIONS,count:r})))}},{key:"renderBody",value:function(){var e=this,t=this.state,a=t.namespaces,r=t.loading,s=this.props,o=s.namespacePath,c=s.filterOwner,i=this.context.hasPermission,l=_.ag._("No namespaces yet"),u=c?_.ag._("This account is not set up to manage any namespaces"):_.ag._("Namespaces will appear once created"),p=i("galaxy.add_namespace")?m.createElement(d.Button,{variant:"primary",onClick:function(){return e.handleModalToggle()}},_.ag._("Create")):null;return r?m.createElement("section",null,m.createElement(y.AW,null),";"):0===a.length?m.createElement("section",null,(0,P.vS)(this.state.params,["keywords"])?m.createElement(y.ei,null):m.createElement(y.vv,{title:l,description:u,button:p})):m.createElement("section",{className:"card-layout"},a.map((function(t,a){return m.createElement("div",{key:a,className:"card-wrapper"},m.createElement(y._v,(0,n.Z)({namespaceURL:(0,v.dI)(o,{namespace:t.name,repo:e.context.selectedRepo}),key:a},t)))})))}},{key:"loadNamespaces",value:function(){var e=this,t=this.props.filterOwner?g.V$:g.jZ;this.setState({loading:!0},(function(){t.list(e.state.params).then((function(t){e.setState({namespaces:t.data.data,itemCount:t.data.meta.count,loading:!1})})).catch((function(t){var a=t.response,n=a.status,s=a.statusText;e.setState({namespaces:[],itemCount:0,loading:!1},(function(){return e.context.setAlerts([].concat((0,r.Z)(e.context.alerts),[{variant:"danger",title:_.ag._("Namespaces list could not be displayed."),description:(0,P.N3)(n,s)}]))}))}))}))}},{key:"updateParams",get:function(){return h.q.updateParamsMixin(this.nonURLParams)}},{key:"closeAlert",value:function(){this.context.setAlerts([])}}]),N}(m.Component);N.contextType=T.I},42613:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(87462),r=a(15671),s=a(43144),o=a(60136),c=a(82963),i=a(61120),l=a(30624),u=a(96620),p=a(98314),m=a(61647);var d=function(e){(0,o.Z)(d,e);var t,a,u=(t=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var r=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function d(){return(0,r.Z)(this,d),u.apply(this,arguments)}return(0,s.Z)(d,[{key:"render",value:function(){return l.createElement(p.T,(0,n.Z)({},this.props,{namespacePath:m.nB.namespaceByRepo,filterOwner:!1}))}}]),d}(l.Component);const f=(0,u.withRouter)(d)}}]);
//# sourceMappingURL=namespace_list.1670942114193.cc957700922f8c9ff57c.js.map