(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{929:function(e,t,a){(e.exports=a(7)(!1)).push([e.i,".namespace-page{height:100%;display:flex;flex-direction:column;justify-content:space-between}.namespace-page .card-area{margin-top:24px;margin-left:24px;flex-grow:1}.namespace-page .card-area .card-layout{display:flex;flex-wrap:wrap}.namespace-page .card-area .card-layout .card-wrapper{margin-right:24px;margin-bottom:24px}.namespace-page .toolbar{display:flex;justify-content:space-between}.namespace-page .footer{border-top:1px solid #d8d8d8;flex-shrink:0}",""])},934:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n,r=a(1),o=(a(941),a(71)),s=a(30),i=a(384),c=a(49),p=a(100),l=a(36),u=a(14),m=a(23),d=a(88),f=a(28),y=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),h=function(){return(h=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},O=function(e){function t(t){var a=e.call(this,t)||this;a.nonURLParams=["tenant"],a.handleModalToggle=function(){a.setState((function(e){return{isModalOpen:!e.isModalOpen}}))};var n=s.a.parseParamString(t.location.search,["page","page_size"]);return n.page_size||(n.page_size=24),n.sort||(n.sort="name"),a.state={namespaces:void 0,itemCount:0,params:n,hasPermission:!0,isModalOpen:!1,loading:!0},a}return y(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.filterOwner?l.h.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})):this.loadNamespaces()},t.prototype.render=function(){var e,t=this,a=this.state,n=a.namespaces,s=a.params,l=a.itemCount,d=this.props,y=d.title,h=(d.filterOwner,this.context.user),O=!Object(f.d)(this.state.params,["keywords"])&&void 0!==n&&0===n.length;if(!n)return r.createElement(i.w,null);var _=[];return(null===(e=null==h?void 0:h.model_permissions)||void 0===e?void 0:e.add_namespace)&&_.push(r.createElement(p.a,{key:"create-button"},r.createElement(c.a,{variant:"primary",onClick:this.handleModalToggle},"Create"))),r.createElement("div",{className:"namespace-page"},r.createElement(i.D,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(e){return t.props.history.push(Object(u.b)(u.a.myCollections,{namespace:e.name}))}}),r.createElement(i.d,{title:y},O?null:r.createElement("div",{className:"toolbar"},r.createElement(i.U,{params:s,sortOptions:[{title:"Name",id:"name",type:"alpha"}],searchPlaceholder:"Search "+y.toLowerCase(),updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},extraInputs:_}),r.createElement("div",null,r.createElement(i.G,{params:s,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},count:l,isCompact:!0,perPageOptions:m.a.CARD_DEFAULT_PAGINATION_OPTIONS})))),r.createElement(o.Section,{className:"card-area"},this.renderBody()),O?null:r.createElement(o.Section,{className:"footer"},r.createElement(i.G,{params:s,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},perPageOptions:m.a.CARD_DEFAULT_PAGINATION_OPTIONS,count:l})))},t.prototype.renderBody=function(){var e,t=this,a=this.state,n=a.namespaces,s=a.loading,p=this.props,l=p.namespacePath,d=(p.filterOwner,this.context.user),y=m.a.STANDALONE_DEPLOYMENT_MODE?"No namespaces yet":"No managed namespaces yet",O=m.a.STANDALONE_DEPLOYMENT_MODE?"Namespaces will appear once created":"This account is not set up to manage any namespaces",_=(null===(e=null==d?void 0:d.model_permissions)||void 0===e?void 0:e.add_namespace)?r.createElement(c.a,{variant:"primary",onClick:function(){return t.handleModalToggle()}},"Create"):null;return s?r.createElement(o.Section,null,r.createElement(i.v,null),";"):0===n.length?r.createElement(o.Section,null,Object(f.d)(this.state.params,["keywords"])?r.createElement(i.p,null):r.createElement(i.q,{title:y,description:O,button:_})):r.createElement(o.Section,{className:"card-layout"},n.map((function(e,a){return r.createElement("div",{key:a,className:"card-wrapper"},r.createElement(i.B,h({namespaceURL:Object(u.b)(l,{namespace:e.name,repo:t.context.selectedRepo}),key:a},e)))})))},t.prototype.loadNamespaces=function(){var e,t=this;e=this.props.filterOwner?function(e){return l.h.list(e)}:function(e){return l.j.list(e)},this.setState({loading:!0},(function(){e(t.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return s.a.updateParamsMixin(this.nonURLParams)},enumerable:!1,configurable:!0}),t}(r.Component);O.contextType=d.a;try{O.displayName="NamespaceList",O.__docgenInfo={description:"",displayName:"NamespaceList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},namespacePath:{defaultValue:null,description:"",name:"namespacePath",required:!0,type:{name:"any"}},filterOwner:{defaultValue:null,description:"",name:"filterOwner",required:!1,type:{name:"boolean"}},history:{defaultValue:null,description:"",name:"history",required:!0,type:{name:"History<unknown>"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"Location<unknown>"}},match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"match<{}>"}},staticContext:{defaultValue:null,description:"",name:"staticContext",required:!1,type:{name:"StaticContext"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/namespace-list.tsx#NamespaceList"]={docgenInfo:O.__docgenInfo,name:"NamespaceList",path:"src/containers/namespace-list/namespace-list.tsx#NamespaceList"})}catch(e){}},941:function(e,t,a){var n=a(929);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(8)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(929,(function(){var t=a(929);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},952:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=a(629),s=a(934),i=a(14),c=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),p=function(){return(p=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:i.a.myCollectionsByRepo,title:"My namespaces",filterOwner:!0}))},t}(r.Component);t.default=Object(o.a)(l);try{mynamespaces.displayName="mynamespaces",mynamespaces.__docgenInfo={description:"",displayName:"mynamespaces",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<MyNamespaces>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/my-namespaces.tsx#mynamespaces"]={docgenInfo:mynamespaces.__docgenInfo,name:"mynamespaces",path:"src/containers/namespace-list/my-namespaces.tsx#mynamespaces"})}catch(e){}},955:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=a(629),s=a(934),i=a(14),c=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),p=function(){return(p=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e="partners".charAt(0).toUpperCase()+"partners".slice(1);return r.createElement(s.a,p({},this.props,{namespacePath:i.a.namespaceByRepo,title:e}))},t}(r.Component);t.default=Object(o.a)(l);try{partners.displayName="partners",partners.__docgenInfo={description:"",displayName:"partners",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<Partners>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/partners.tsx#partners"]={docgenInfo:partners.__docgenInfo,name:"partners",path:"src/containers/namespace-list/partners.tsx#partners"})}catch(e){}}}]);
//# sourceMappingURL=namespace_list.js.map