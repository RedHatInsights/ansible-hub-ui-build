(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{763:function(e,t,a){(e.exports=a(8)(!1)).push([e.i,".namespace-page{height:100%;display:flex;flex-direction:column;justify-content:space-between}.namespace-page .card-area{margin-top:24px;margin-left:24px;flex-grow:1}.namespace-page .card-area .card-layout{display:flex;flex-wrap:wrap}.namespace-page .card-area .card-layout .card-wrapper{margin-right:24px;margin-bottom:24px}.namespace-page .toolbar{display:flex;justify-content:space-between}.namespace-page .footer{border-top:1px solid #d8d8d8;flex-shrink:0}\n",""])},769:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n,r=a(0),o=(a(777),a(42)),s=a(701),i=a(702),c=a(697),p=a(704),l=a(703),u=a(16),m=a(222),f=a(137),d=a(106),y=a(31),h=a(12),O=a(53),g=a(223),_=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),E=function(){return(E=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},S=function(e){function t(t){var a=e.call(this,t)||this;a.nonURLParams=["tenant"],a.handleModalToggle=function(){a.setState((function(e){return{isModalOpen:!e.isModalOpen}}))};var n=u.a.parseParamString(t.location.search,["page","page_size"]);return n.page_size||(n.page_size=24),n.sort||(n.sort="name"),a.state={namespaces:void 0,itemCount:0,params:n,hasPermission:!0,isModalOpen:!1,loading:!0},a}return _(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.filterOwner?y.f.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})):this.loadNamespaces()},t.prototype.render=function(){var e=this,t=this.state,a=t.namespaces,n=t.params,s=t.itemCount,i=this.props,c=i.title,p=i.filterOwner,l=this.context.user;if(!a)return r.createElement(m.s,null);var u=[];return l&&l.model_permissions.add_namespace&&p&&u.push(r.createElement(d.a,{key:"create-button"},r.createElement(f.a,{variant:"primary",onClick:this.handleModalToggle},"Create"))),r.createElement("div",{className:"namespace-page"},r.createElement(m.x,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(t){return e.props.history.push(Object(h.b)(h.a.myCollections,{namespace:t.name}))}}),r.createElement(m.e,{title:c},r.createElement("div",{className:"toolbar"},r.createElement(m.K,{params:n,sortOptions:[{title:"Name",id:"name",type:"alpha"}],searchPlaceholder:"Search "+c.toLowerCase(),updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},extraInputs:u}),r.createElement("div",null,r.createElement(m.A,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},count:s,isCompact:!0,perPageOptions:O.a.CARD_DEFAULT_PAGINATION_OPTIONS})))),r.createElement(o.Section,{className:"card-area"},this.renderBody()),r.createElement(o.Section,{className:"footer"},r.createElement(m.A,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},perPageOptions:O.a.CARD_DEFAULT_PAGINATION_OPTIONS,count:s})))},t.prototype.renderBody=function(){var e=this,t=this.state,a=t.namespaces,n=t.hasPermission,u=this.props.namespacePath;return this.state.loading?r.createElement(o.Section,null,r.createElement(m.r,null),";"):0===a.length?r.createElement(o.Section,null,r.createElement(s.a,{className:"empty",variant:s.b.full},r.createElement(i.a,{icon:l.a}),r.createElement(c.a,{headingLevel:"h2",size:"lg"},n?"No results found":"No managed namespaces"),r.createElement(p.a,null,n?"No results match the filter criteria. Remove all filters or clear all filters to show results.":"This account is not set up to manage any namespaces."),n&&r.createElement(f.a,{variant:"link",onClick:function(){return e.updateParams({},(function(){return e.loadNamespaces()}))}},"Clear all filters"))):r.createElement(o.Section,{className:"card-layout"},a.map((function(e,t){return r.createElement("div",{key:t,className:"card-wrapper"},r.createElement(m.v,E({namespaceURL:Object(h.b)(u,{namespace:e.name}),key:t},e)))})))},t.prototype.loadNamespaces=function(){var e,t=this;e=this.props.filterOwner?function(e){return y.f.list(e)}:function(e){return y.h.list(e)},this.setState({loading:!0},(function(){e(t.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return u.a.updateParamsMixin(this.nonURLParams)},enumerable:!1,configurable:!0}),t}(r.Component);S.contextType=g.a;try{S.displayName="NamespaceList",S.__docgenInfo={description:"",displayName:"NamespaceList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},namespacePath:{defaultValue:null,description:"",name:"namespacePath",required:!0,type:{name:"Paths"}},filterOwner:{defaultValue:null,description:"",name:"filterOwner",required:!1,type:{name:"boolean"}},history:{defaultValue:null,description:"",name:"history",required:!0,type:{name:"History<any>"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"Location<any>"}},match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"match<{}>"}},staticContext:{defaultValue:null,description:"",name:"staticContext",required:!1,type:{name:"StaticContext"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/namespace-list.tsx#NamespaceList"]={docgenInfo:S.__docgenInfo,name:"NamespaceList",path:"src/containers/namespace-list/namespace-list.tsx#NamespaceList"})}catch(e){}},777:function(e,t,a){var n=a(763);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(10)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(763,(function(){var t=a(763);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},790:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a(400),s=a(769),i=a(12),c=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),p=function(){return(p=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:i.a.myCollections,title:"My namespaces",filterOwner:!0}))},t}(r.Component);t.default=Object(o.a)(l);try{mynamespaces.displayName="mynamespaces",mynamespaces.__docgenInfo={description:"",displayName:"mynamespaces",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<MyNamespaces>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/my-namespaces.tsx#mynamespaces"]={docgenInfo:mynamespaces.__docgenInfo,name:"mynamespaces",path:"src/containers/namespace-list/my-namespaces.tsx#mynamespaces"})}catch(e){}},793:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a(400),s=a(769),i=a(12),c=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),p=function(){return(p=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:i.a.namespace,title:"Partners"}))},t}(r.Component);t.default=Object(o.a)(l);try{partners.displayName="partners",partners.__docgenInfo={description:"",displayName:"partners",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<Partners>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/partners.tsx#partners"]={docgenInfo:partners.__docgenInfo,name:"partners",path:"src/containers/namespace-list/partners.tsx#partners"})}catch(e){}}}]);
//# sourceMappingURL=namespace_list.js.map