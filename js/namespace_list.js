(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{929:function(e,t,a){(e.exports=a(7)(!1)).push([e.i,".namespace-page{height:100%;display:flex;flex-direction:column;justify-content:space-between}.namespace-page .card-area{margin-top:24px;margin-left:24px;flex-grow:1}.namespace-page .card-area .card-layout{display:flex;flex-wrap:wrap}.namespace-page .card-area .card-layout .card-wrapper{margin-right:24px;margin-bottom:24px}.namespace-page .toolbar{display:flex;justify-content:space-between}.namespace-page .footer{border-top:1px solid #d8d8d8;flex-shrink:0}",""])},934:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n,r=a(1),o=(a(941),a(70)),s=a(30),c=a(384),p=a(49),i=a(99),l=a(36),u=a(14),m=a(23),d=a(89),f=a(28),y=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),h=function(){return(h=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},O=function(e){function t(t){var a=e.call(this,t)||this;a.nonURLParams=["tenant"],a.handleModalToggle=function(){a.setState((function(e){return{isModalOpen:!e.isModalOpen}}))};var n=s.a.parseParamString(t.location.search,["page","page_size"]);return n.page_size||(n.page_size=24),n.sort||(n.sort="name"),a.state={namespaces:void 0,itemCount:0,params:n,hasPermission:!0,isModalOpen:!1,loading:!0},a}return y(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.filterOwner?l.h.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})):this.loadNamespaces()},t.prototype.render=function(){var e=this,t=this.state,a=t.namespaces,n=t.params,s=t.itemCount,l=this.props,d=l.title,y=l.filterOwner,h=this.context.user,O=!Object(f.d)(this.state.params,["keywords"])&&void 0!==a&&0===a.length;if(!a)return r.createElement(c.w,null);var _=[];return h&&h.model_permissions.add_namespace&&y&&_.push(r.createElement(i.a,{key:"create-button"},r.createElement(p.a,{variant:"primary",onClick:this.handleModalToggle},"Create"))),r.createElement("div",{className:"namespace-page"},r.createElement(c.D,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(t){return e.props.history.push(Object(u.b)(u.a.myCollections,{namespace:t.name}))}}),r.createElement(c.d,{title:d},O?null:r.createElement("div",{className:"toolbar"},r.createElement(c.U,{params:n,sortOptions:[{title:"Name",id:"name",type:"alpha"}],searchPlaceholder:"Search "+d.toLowerCase(),updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},extraInputs:_}),r.createElement("div",null,r.createElement(c.G,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},count:s,isCompact:!0,perPageOptions:m.a.CARD_DEFAULT_PAGINATION_OPTIONS})))),r.createElement(o.Section,{className:"card-area"},this.renderBody()),O?null:r.createElement(o.Section,{className:"footer"},r.createElement(c.G,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},perPageOptions:m.a.CARD_DEFAULT_PAGINATION_OPTIONS,count:s})))},t.prototype.renderBody=function(){var e=this,t=this.state,a=t.namespaces,n=t.loading,s=this.props,i=s.namespacePath,l=s.filterOwner,d=m.a.STANDALONE_DEPLOYMENT_MODE?"No namespaces yet":"No managed namespaces yet",y=m.a.STANDALONE_DEPLOYMENT_MODE?"Namespaces will appear once created":"This account is not set up to manage any namespaces",O=m.a.STANDALONE_DEPLOYMENT_MODE&&l?r.createElement(p.a,{variant:"primary",onClick:function(){return e.handleModalToggle()}},"Create"):null;return n?r.createElement(o.Section,null,r.createElement(c.v,null),";"):0===a.length?r.createElement(o.Section,null,Object(f.d)(this.state.params,["keywords"])?r.createElement(c.p,null):r.createElement(c.q,{title:d,description:y,button:O})):r.createElement(o.Section,{className:"card-layout"},a.map((function(t,a){return r.createElement("div",{key:a,className:"card-wrapper"},r.createElement(c.B,h({namespaceURL:Object(u.b)(i,{namespace:t.name,repo:e.context.selectedRepo}),key:a},t)))})))},t.prototype.loadNamespaces=function(){var e,t=this;e=this.props.filterOwner?function(e){return l.h.list(e)}:function(e){return l.j.list(e)},this.setState({loading:!0},(function(){e(t.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return s.a.updateParamsMixin(this.nonURLParams)},enumerable:!1,configurable:!0}),t}(r.Component);O.contextType=d.a;try{O.displayName="NamespaceList",O.__docgenInfo={description:"",displayName:"NamespaceList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},namespacePath:{defaultValue:null,description:"",name:"namespacePath",required:!0,type:{name:"any"}},filterOwner:{defaultValue:null,description:"",name:"filterOwner",required:!1,type:{name:"boolean"}},history:{defaultValue:null,description:"",name:"history",required:!0,type:{name:"History<unknown>"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"Location<unknown>"}},match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"match<{}>"}},staticContext:{defaultValue:null,description:"",name:"staticContext",required:!1,type:{name:"StaticContext"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/namespace-list.tsx#NamespaceList"]={docgenInfo:O.__docgenInfo,name:"NamespaceList",path:"src/containers/namespace-list/namespace-list.tsx#NamespaceList"})}catch(e){}},941:function(e,t,a){var n=a(929);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(8)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(929,(function(){var t=a(929);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},952:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=a(629),s=a(934),c=a(14),p=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){return r.createElement(s.a,i({},this.props,{namespacePath:c.a.myCollectionsByRepo,title:"My namespaces",filterOwner:!0}))},t}(r.Component);t.default=Object(o.a)(l);try{mynamespaces.displayName="mynamespaces",mynamespaces.__docgenInfo={description:"",displayName:"mynamespaces",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<MyNamespaces>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/my-namespaces.tsx#mynamespaces"]={docgenInfo:mynamespaces.__docgenInfo,name:"mynamespaces",path:"src/containers/namespace-list/my-namespaces.tsx#mynamespaces"})}catch(e){}},955:function(e,t,a){"use strict";a.r(t);var n,r=a(1),o=a(629),s=a(934),c=a(14),p=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e="partners".charAt(0).toUpperCase()+"partners".slice(1);return r.createElement(s.a,i({},this.props,{namespacePath:c.a.namespaceByRepo,title:e}))},t}(r.Component);t.default=Object(o.a)(l);try{partners.displayName="partners",partners.__docgenInfo={description:"",displayName:"partners",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<Partners>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/partners.tsx#partners"]={docgenInfo:partners.__docgenInfo,name:"partners",path:"src/containers/namespace-list/partners.tsx#partners"})}catch(e){}}}]);
//# sourceMappingURL=namespace_list.js.map