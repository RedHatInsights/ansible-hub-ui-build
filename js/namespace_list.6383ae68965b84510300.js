"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[684],{22366:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(87462),r=a(15671),s=a(43144),c=a(60136),o=a(6215),i=a(61120),l=a(67294),u=a(5977),p=a(98314),m=a(61647);var f=function(e){(0,c.Z)(f,e);var t,a,u=(t=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var r=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function f(){return(0,r.Z)(this,f),u.apply(this,arguments)}return(0,s.Z)(f,[{key:"render",value:function(){return l.createElement(p.T,(0,n.Z)({},this.props,{namespacePath:m.nB.myCollectionsByRepo,filterOwner:!0}))}}]),f}(l.Component);const d=(0,u.EN)(f)},98314:(e,t,a)=>{a.d(t,{T:()=>N});var n=a(87462),r=a(15671),s=a(43144),c=a(97326),o=a(60136),i=a(6215),l=a(61120),u=a(4942),p=a(81796),m=a(67294),f=a(5977),d=a(43819),h=a(92942),v=a(1595),y=a(47173),g=a(74761),E=a(61647),_=a(42807),P=a(61542),Z=a(48643);var N=function(e){(0,o.Z)(N,e);var t,a,P=(t=N,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(a){var r=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function N(e){var t;(0,r.Z)(this,N),t=P.call(this,e),(0,u.Z)((0,c.Z)(t),"nonURLParams",["tenant"]),(0,u.Z)((0,c.Z)(t),"handleModalToggle",(function(){t.setState((function(e){return{isModalOpen:!e.isModalOpen}}))}));var a=d.q.parseParamString(e.location.search,["page","page_size"]);return a.page_size||(a.page_size=20),a.sort||(a.sort="name"),t.state={namespaces:void 0,itemCount:0,params:a,hasPermission:!0,isModalOpen:!1,loading:!0},t}return(0,s.Z)(N,[{key:"componentDidMount",value:function(){var e=this;this.props.filterOwner?g.V$.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})):this.loadNamespaces()}},{key:"render",value:function(){var e,t=this;if(this.state.redirect)return m.createElement(f.l_,{push:!0,to:this.state.redirect});var a=this.state,n=a.namespaces,r=a.params,s=a.itemCount,c=this.props.filterOwner,o=this.context.user,i=!(0,Z.vS)(this.state.params,["keywords"])&&void 0!==n&&0===n.length;if(!n)return m.createElement(h.gO,null);var l=[];null!=o&&null!==(e=o.model_permissions)&&void 0!==e&&e.add_namespace&&l.push(m.createElement(v.E,{key:"create-button"},m.createElement(y.zx,{variant:"primary",onClick:this.handleModalToggle},p.ag._("Create"))));var u=E.Th.name,d=c?p.ag._("Search my namespaces"):p.ag._("Search all {0}",{0:u.toLowerCase()});return m.createElement("div",{className:"namespace-page"},m.createElement(h.RZ,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(e){return t.setState({redirect:(0,E.dI)(E.nB.myCollections,{namespace:e.name})})}}),m.createElement(h.UP,{title:u},m.createElement("div",{className:"tab-link-container"},m.createElement("div",{className:"tabs"},m.createElement(h.Ak,{tabs:[{title:p.ag._("All"),link:E.nB.partners,active:!c},{title:p.ag._("My namespaces"),link:E.nB.myNamespaces,active:c}]}))),i?null:m.createElement("div",{className:"toolbar"},m.createElement(h.o8,{params:r,sortOptions:[{title:p.ag._("Name"),id:"name",type:"alpha"}],searchPlaceholder:d,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},extraInputs:l}),m.createElement("div",null,m.createElement(h.tl,{params:r,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},count:s,isCompact:!0,perPageOptions:_.g.CARD_DEFAULT_PAGINATION_OPTIONS})))),m.createElement("section",{className:"card-area"},this.renderBody()),i?null:m.createElement("section",{className:"footer"},m.createElement(h.tl,{params:r,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},perPageOptions:_.g.CARD_DEFAULT_PAGINATION_OPTIONS,count:s})))}},{key:"renderBody",value:function(){var e,t=this,a=this.state,r=a.namespaces,s=a.loading,c=this.props,o=c.namespacePath,i=c.filterOwner,l=this.context.user,u=p.ag._("No namespaces yet"),f=i?p.ag._("This account is not set up to manage any namespaces"):p.ag._("Namespaces will appear once created"),d=null!=l&&null!==(e=l.model_permissions)&&void 0!==e&&e.add_namespace?m.createElement(y.zx,{variant:"primary",onClick:function(){return t.handleModalToggle()}},p.ag._("Create")):null;return s?m.createElement("section",null,m.createElement(h.AW,null),";"):0===r.length?m.createElement("section",null,(0,Z.vS)(this.state.params,["keywords"])?m.createElement(h.ei,null):m.createElement(h.vv,{title:u,description:f,button:d})):m.createElement("section",{className:"card-layout"},r.map((function(e,a){return m.createElement("div",{key:a,className:"card-wrapper"},m.createElement(h._v,(0,n.Z)({namespaceURL:(0,E.dI)(o,{namespace:e.name,repo:t.context.selectedRepo}),key:a},e)))})))}},{key:"loadNamespaces",value:function(){var e,t=this;e=this.props.filterOwner?function(e){return g.V$.list(e)}:function(e){return g.jZ.list(e)},this.setState({loading:!0},(function(){e(t.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count,loading:!1})}))}))}},{key:"updateParams",get:function(){return d.q.updateParamsMixin(this.nonURLParams)}}]),N}(m.Component);N.contextType=P.I},42613:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(87462),r=a(15671),s=a(43144),c=a(60136),o=a(6215),i=a(61120),l=a(67294),u=a(5977),p=a(98314),m=a(61647);var f=function(e){(0,c.Z)(f,e);var t,a,u=(t=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var r=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function f(){return(0,r.Z)(this,f),u.apply(this,arguments)}return(0,s.Z)(f,[{key:"render",value:function(){return l.createElement(p.T,(0,n.Z)({},this.props,{namespacePath:m.nB.namespaceByRepo,filterOwner:!1}))}}]),f}(l.Component);const d=(0,u.EN)(f)}}]);
//# sourceMappingURL=../sourcemaps/namespace_list.b491df8d79171a737a50.js.map