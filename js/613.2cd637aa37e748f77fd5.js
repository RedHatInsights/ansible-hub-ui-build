"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[613],{98314:(e,t,a)=>{a.d(t,{T:()=>T});var n=a(42982),r=a(87462),s=a(15671),o=a(43144),c=a(97326),i=a(79340),l=a(82963),u=a(61120),m=a(4942),p=a(13855),d=a(35356),f=a(92950),h=a(62012),g=a(93450),y=a(95156),v=a(42807),E=a(61542),N=a(61647),P=a(58464),_=a(43819);var T=function(e){(0,i.Z)(T,e);var t,a,E=(t=T,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(a){var r=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function T(e){var t;(0,s.Z)(this,T),t=E.call(this,e),(0,m.Z)((0,c.Z)(t),"nonURLParams",["tenant"]),(0,m.Z)((0,c.Z)(t),"handleModalToggle",(function(){t.setState((function(e){return{isModalOpen:!e.isModalOpen}}))}));var a=_.q.parseParamString(e.location.search,["page","page_size"]);return a.page_size||(a.page_size=20),a.sort||(a.sort="name"),t.state={alerts:[],namespaces:void 0,itemCount:0,params:a,hasPermission:!0,isModalOpen:!1,loading:!0,inputText:a.keywords||""},t}return(0,o.Z)(T,[{key:"componentDidMount",value:function(){var e=this;this.setState({alerts:this.context.alerts||[]}),this.context.setAlerts([]),this.props.filterOwner?g.V$.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})).catch((function(t){var a=t.response,n=a.status,r=a.statusText;e.setState({namespaces:[],itemCount:0,loading:!1},(function(){return e.addAlert({variant:"danger",title:p.ag._("Namespaces list could not be displayed."),description:(0,P.N3)(n,r)})}))})):this.loadNamespaces()}},{key:"render",value:function(){var e=this;if(this.state.redirect)return f.createElement(h.Navigate,{to:this.state.redirect});var t=this.state,a=t.alerts,n=t.namespaces,r=t.params,s=t.itemCount,o=t.loading,c=t.inputText,i=this.props.filterOwner,l=this.context.hasPermission,u=!(0,P.vS)(this.state.params,["keywords"])&&void 0!==n&&0===n.length;if(o)return f.createElement(y.gO,null);var m=p.ag._(N.Th.name);return f.createElement("div",{className:"hub-namespace-page"},f.createElement(y.RZ,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(t){return e.setState({redirect:(0,N.dI)(N.nB.namespaceByRepo,{repo:"published",namespace:t.name},{tab:"collections"})})}}),f.createElement(y.UW,{alerts:a,closeAlert:function(t){return e.closeAlert(t)}}),f.createElement(y.UP,{title:m},!this.context.user.is_anonymous&&f.createElement("div",{className:"hub-tab-link-container"},f.createElement("div",{className:"tabs"},f.createElement(y.Ak,{tabs:[{title:p.ag._("All"),link:(0,N.dI)(N.nB.partners),active:!i},{title:p.ag._("My namespaces"),link:(0,N.dI)(N.nB.myNamespaces),active:i}]}))),u?null:f.createElement("div",{className:"toolbar"},f.createElement(d.Toolbar,null,f.createElement(d.ToolbarContent,null,f.createElement(d.ToolbarGroup,{style:{marginLeft:0}},f.createElement(d.ToolbarItem,null,f.createElement(y.Kv,{inputText:c,onChange:function(t){return e.setState({inputText:t})},updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},params:r,filterConfig:[{id:"keywords",title:p.ag._("keywords")}]}),f.createElement(y.M$,{style:{marginTop:"16px"},updateParams:function(t){e.updateParams(t,(function(){return e.loadNamespaces()})),e.setState({inputText:""})},params:r,ignoredParams:["page_size","page","sort"],niceNames:{keywords:p.ag._("keywords")}}))),f.createElement(d.ToolbarGroup,{style:{alignSelf:"start"}},f.createElement(d.ToolbarItem,null,f.createElement(y.PE,{options:[{title:p.ag._("Name"),id:"name",type:"alpha"}],params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))}})),l("galaxy.add_namespace")&&f.createElement(d.ToolbarItem,{key:"create-button"},f.createElement(d.Button,{variant:"primary",onClick:this.handleModalToggle},p.ag._("Create")))))),f.createElement("div",null,f.createElement(y.tl,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},count:s,isCompact:!0,perPageOptions:v.g.CARD_DEFAULT_PAGINATION_OPTIONS})))),f.createElement("section",{className:"card-area"},this.renderBody()),u||o?null:f.createElement("section",{className:"footer"},f.createElement(y.tl,{params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},perPageOptions:v.g.CARD_DEFAULT_PAGINATION_OPTIONS,count:s})))}},{key:"renderBody",value:function(){var e=this,t=this.state,a=t.namespaces,n=t.loading,s=this.props,o=s.namespacePath,c=s.filterOwner,i=this.context.hasPermission,l=p.ag._("No namespaces yet"),u=c?p.ag._("This account is not set up to manage any namespaces"):p.ag._("Namespaces will appear once created"),m=i("galaxy.add_namespace")?f.createElement(d.Button,{variant:"primary",onClick:function(){return e.handleModalToggle()}},p.ag._("Create")):null;return n?f.createElement("section",null,f.createElement(y.AW,null),";"):0===a.length?f.createElement("section",null,(0,P.vS)(this.state.params,["keywords"])?f.createElement(y.ei,null):f.createElement(y.vv,{title:l,description:u,button:m})):f.createElement("section",{className:"card-layout"},a.map((function(t,a){return f.createElement("div",{key:a,className:"card-wrapper"},f.createElement(y._v,(0,r.Z)({namespaceURL:(0,N.dI)(o,{namespace:t.name,repo:e.context.selectedRepo}),key:a},t)))})))}},{key:"loadNamespaces",value:function(){var e=this,t=this.props.filterOwner?g.V$:g.jZ;this.setState({loading:!0},(function(){t.list(e.state.params).then((function(t){e.setState({namespaces:t.data.data,itemCount:t.data.meta.count,loading:!1})})).catch((function(t){var a=t.response,n=a.status,r=a.statusText;e.setState({namespaces:[],itemCount:0,loading:!1},(function(){return e.addAlert({variant:"danger",title:p.ag._("Namespaces list could not be displayed."),description:(0,P.N3)(n,r)})}))}))}))}},{key:"updateParams",get:function(){return _.q.updateParamsMixin(this.nonURLParams)}},{key:"addAlert",value:function(e){this.setState({alerts:[].concat((0,n.Z)(this.state.alerts),[e])})}},{key:"closeAlert",get:function(){return(0,y.NQ)("alerts")}}]),T}(f.Component);T.contextType=E.I},42613:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(87462),r=a(15671),s=a(43144),o=a(79340),c=a(82963),i=a(61120),l=a(92950),u=a(61647),m=a(58464),p=a(98314);var d=function(e){(0,o.Z)(d,e);var t,a,m=(t=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var r=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function d(){return(0,r.Z)(this,d),m.apply(this,arguments)}return(0,s.Z)(d,[{key:"render",value:function(){return l.createElement(p.T,(0,n.Z)({},this.props,{namespacePath:u.nB.namespaceByRepo,filterOwner:!1}))}}]),d}(l.Component);const f=(0,m.EN)(d)}}]);
//# sourceMappingURL=../sourcemaps/613.dc4a68bae2b6899e739972c93d4acdf3.js.map