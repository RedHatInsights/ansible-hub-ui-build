"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[684],{22366:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(87462),r=n(15671),s=n(43144),c=n(60136),o=n(6215),l=n(61120),i=n(67294),u=n(5977),p=n(98314),m=n(61647),f=n(61542),d=n(47012);var h=function(e){(0,c.Z)(f,e);var t,n,u=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,l.Z)(t);if(n){var r=(0,l.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function f(){return(0,r.Z)(this,f),u.apply(this,arguments)}return(0,s.Z)(f,[{key:"render",value:function(){return!this.context.user||this.context.user.is_anonymous?i.createElement(d.iA,null):i.createElement(p.T,(0,a.Z)({},this.props,{namespacePath:m.nB.myCollectionsByRepo,filterOwner:!0}))}}]),f}(i.Component);const v=(0,u.EN)(h);h.contextType=f.I},98314:(e,t,n)=>{n.d(t,{T:()=>N});var a=n(87462),r=n(15671),s=n(43144),c=n(97326),o=n(60136),l=n(6215),i=n(61120),u=n(4942),p=n(25221),m=n(67294),f=n(5977),d=n(43819),h=n(47012),v=n(1595),y=n(47173),g=n(56359),E=n(61647),_=n(42807),P=n(9425),Z=n(61542);var N=function(e){(0,o.Z)(N,e);var t,n,Z=(t=N,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,l.Z)(this,e)});function N(e){var t;(0,r.Z)(this,N),t=Z.call(this,e),(0,u.Z)((0,c.Z)(t),"nonURLParams",["tenant"]),(0,u.Z)((0,c.Z)(t),"handleModalToggle",(function(){t.setState((function(e){return{isModalOpen:!e.isModalOpen}}))}));var n=d.q.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=20),n.sort||(n.sort="name"),t.state={namespaces:void 0,itemCount:0,params:n,hasPermission:!0,isModalOpen:!1,loading:!0},t}return(0,s.Z)(N,[{key:"componentDidMount",value:function(){var e=this;this.props.filterOwner?g.V$.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})):this.loadNamespaces()}},{key:"componentWillUnmount",value:function(){this.context.setAlerts([])}},{key:"render",value:function(){var e,t=this;if(this.state.redirect)return m.createElement(f.l_,{push:!0,to:this.state.redirect});var n=this.state,a=n.namespaces,r=n.params,s=n.itemCount,c=n.loading,o=this.props.filterOwner,l=this.context,i=l.user,u=l.alerts,d=!(0,P.vS)(this.state.params,["keywords"])&&void 0!==a&&0===a.length;if(c)return m.createElement(h.gO,null);var g=[];null!=i&&null!==(e=i.model_permissions)&&void 0!==e&&e.add_namespace&&g.push(m.createElement(v.E,{key:"create-button"},m.createElement(y.zx,{variant:"primary",onClick:this.handleModalToggle},p.ag._("Create"))));var Z=E.Th.name,N=Z.toLowerCase(),k=o?p.ag._("Search my namespaces"):p.ag._("Search all {titleLowerCase}",{titleLowerCase:N});return m.createElement("div",{className:"namespace-page"},m.createElement(h.RZ,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(e){return t.setState({redirect:(0,E.dI)(E.nB.myCollections,{namespace:e.name})})}}),m.createElement(h.UW,{alerts:u,closeAlert:function(e){return t.closeAlert(e)}}),m.createElement(h.UP,{title:Z},!this.context.user.is_anonymous&&m.createElement("div",{className:"tab-link-container"},m.createElement("div",{className:"tabs"},m.createElement(h.Ak,{tabs:[{title:p.ag._("All"),link:E.nB.partners,active:!o},{title:p.ag._("My namespaces"),link:E.nB.myNamespaces,active:o}]}))),d?null:m.createElement("div",{className:"toolbar"},m.createElement(h.o8,{params:r,sortOptions:[{title:p.ag._("Name"),id:"name",type:"alpha"}],searchPlaceholder:k,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},extraInputs:g}),m.createElement("div",null,m.createElement(h.tl,{params:r,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},count:s,isCompact:!0,perPageOptions:_.g.CARD_DEFAULT_PAGINATION_OPTIONS})))),m.createElement("section",{className:"card-area"},this.renderBody()),d||c?null:m.createElement("section",{className:"footer"},m.createElement(h.tl,{params:r,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},perPageOptions:_.g.CARD_DEFAULT_PAGINATION_OPTIONS,count:s})))}},{key:"renderBody",value:function(){var e,t=this,n=this.state,r=n.namespaces,s=n.loading,c=this.props,o=c.namespacePath,l=c.filterOwner,i=this.context.user,u=p.ag._("No namespaces yet"),f=l?p.ag._("This account is not set up to manage any namespaces"):p.ag._("Namespaces will appear once created"),d=null!=i&&null!==(e=i.model_permissions)&&void 0!==e&&e.add_namespace?m.createElement(y.zx,{variant:"primary",onClick:function(){return t.handleModalToggle()}},p.ag._("Create")):null;return s?m.createElement("section",null,m.createElement(h.AW,null),";"):0===r.length?m.createElement("section",null,(0,P.vS)(this.state.params,["keywords"])?m.createElement(h.ei,null):m.createElement(h.vv,{title:u,description:f,button:d})):m.createElement("section",{className:"card-layout"},r.map((function(e,n){return m.createElement("div",{key:n,className:"card-wrapper"},m.createElement(h._v,(0,a.Z)({namespaceURL:(0,E.dI)(o,{namespace:e.name,repo:t.context.selectedRepo}),key:n},e)))})))}},{key:"loadNamespaces",value:function(){var e,t=this;e=this.props.filterOwner?function(e){return g.V$.list(e)}:function(e){return g.jZ.list(e)},this.setState({loading:!0},(function(){e(t.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count,loading:!1})}))}))}},{key:"updateParams",get:function(){return d.q.updateParamsMixin(this.nonURLParams)}},{key:"closeAlert",value:function(e){this.context.setAlerts([])}}]),N}(m.Component);N.contextType=Z.I},42613:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(87462),r=n(15671),s=n(43144),c=n(60136),o=n(6215),l=n(61120),i=n(67294),u=n(5977),p=n(98314),m=n(61647);var f=function(e){(0,c.Z)(f,e);var t,n,u=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,l.Z)(t);if(n){var r=(0,l.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function f(){return(0,r.Z)(this,f),u.apply(this,arguments)}return(0,s.Z)(f,[{key:"render",value:function(){return i.createElement(p.T,(0,a.Z)({},this.props,{namespacePath:m.nB.namespaceByRepo,filterOwner:!1}))}}]),f}(i.Component);const d=(0,u.EN)(f)}}]);
//# sourceMappingURL=../sourcemaps/namespace_list.77bb7c1f60a920336054.js.map