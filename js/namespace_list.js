(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{720:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".card-layout {\n  display: flex;\n  flex-wrap: wrap; }\n  .card-layout .card-wrapper {\n    margin-right: 24px;\n    margin-bottom: 24px; }\n\n.toolbar {\n  padding-bottom: 24px;\n  display: flex;\n  justify-content: space-between; }\n",""])},725:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a,r=n(2),o=(n(730),n(117)),s=n(53),i=n(326),c=n(328),p=n(142),l=n(327),u=n(242),m=n(16),f=n(280),d=n(112),y=n(64),h=n(44),g=n(10),O=n(37),_=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),E=function(){return(E=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},S=function(e){function t(t){var n=e.call(this,t)||this;n.nonURLParams=["tenant"],n.handleModalToggle=function(){n.setState((function(e){return{isModalOpen:!e.isModalOpen}}))};var a=m.a.parseParamString(t.location.search,["page","page_size"]);return a.page_size||(a.page_size=24),a.sort||(a.sort="name"),n.state={namespaces:void 0,itemCount:0,params:a,hasPermission:!0,isModalOpen:!1,partnerEngineer:!1,loading:!0},n}return _(t,e),t.prototype.componentDidMount=function(){var e=this;this.isPartnerEngineer(),this.props.filterOwner?h.f.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})):this.loadNamespaces()},t.prototype.render=function(){var e=this,t=this.state,n=t.namespaces,a=t.params,o=t.itemCount,i=t.partnerEngineer,c=this.props.title;if(!n)return r.createElement(f.r,null);var p=i&&r.createElement(r.Fragment,null,r.createElement(y.a,{variant:"separator"}),r.createElement(y.a,null,r.createElement(d.a,{variant:"primary",onClick:this.handleModalToggle},"Create")));return r.createElement(r.Fragment,null,r.createElement(f.d,{title:c},r.createElement("div",{className:"toolbar"},r.createElement(f.H,{params:a,sortOptions:[{title:"Name",id:"name",type:"alpha"}],searchPlaceholder:"Search "+c.toLowerCase(),updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},extraInputs:[p]}),r.createElement("div",null,r.createElement(f.y,{params:a,updateParams:function(t){return e.updateParams(t,(function(){return e.loadNamespaces()}))},count:o,isCompact:!0,perPageOptions:O.a.CARD_DEFAULT_PAGINATION_OPTIONS})))),r.createElement(f.t,null,r.createElement(s.Section,null,this.renderBody()),r.createElement(f.w,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(t){return e.props.history.push(Object(g.b)(g.a.myCollections,{namespace:t.name}))}})))},t.prototype.renderBody=function(){var e=this,t=this.state,n=t.namespaces,a=t.hasPermission,m=this.props.namespacePath;return this.state.loading?r.createElement(s.Section,null,r.createElement(f.q,null),";"):0===n.length?r.createElement(s.Section,null,r.createElement(i.a,{className:"empty",variant:i.b.full},r.createElement(c.a,{icon:u.b}),r.createElement(p.a,{headingLevel:"h2",size:"lg"},a?"No results found":"No managed namespaces"),r.createElement(l.a,null,a?"No results match the filter criteria. Remove all filters or clear all filters to show results.":"This account is not set up to manage any namespaces."),a&&r.createElement(d.a,{variant:"link",onClick:function(){return e.updateParams({},(function(){return e.loadNamespaces()}))}},"Clear all filters"))):r.createElement(s.Section,{className:"card-layout"},n.map((function(e,t){return r.createElement("div",{key:t,className:"card-wrapper"},r.createElement(o.a,{to:Object(g.b)(m,{namespace:e.name})},r.createElement(f.u,E({key:t},e))))})))},t.prototype.loadNamespaces=function(){var e,t=this;e=this.props.filterOwner?function(e){return h.f.list(e)}:function(e){return h.g.list(e)},this.setState({loading:!0},(function(){e(t.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return m.a.updateParamsMixin(this.nonURLParams)},enumerable:!0,configurable:!0}),t.prototype.isPartnerEngineer=function(){var e=this;h.a.isPartnerEngineer().then((function(t){var n=t.data;e.setState({partnerEngineer:n.is_partner_engineer})}))},t}(r.Component);try{S.displayName="NamespaceList",S.__docgenInfo={description:"",displayName:"NamespaceList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},namespacePath:{defaultValue:null,description:"",name:"namespacePath",required:!0,type:{name:"Paths"}},filterOwner:{defaultValue:null,description:"",name:"filterOwner",required:!1,type:{name:"boolean"}},history:{defaultValue:null,description:"",name:"history",required:!0,type:{name:"History<any>"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"Location<any>"}},match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"match<{}>"}},staticContext:{defaultValue:null,description:"",name:"staticContext",required:!1,type:{name:"StaticContext"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/namespace-list.tsx#NamespaceList"]={docgenInfo:S.__docgenInfo,name:"NamespaceList",path:"src/containers/namespace-list/namespace-list.tsx#NamespaceList"})}catch(e){}},730:function(e,t,n){var a=n(720);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(7)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(720,(function(){var t=n(720);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},741:function(e,t,n){"use strict";n.r(t);var a,r=n(2),o=n(488),s=n(725),i=n(10),c=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:i.a.myCollections,title:"My namespaces",filterOwner:!0}))},t}(r.Component);t.default=Object(o.a)(l);try{mynamespaces.displayName="mynamespaces",mynamespaces.__docgenInfo={description:"",displayName:"mynamespaces",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<MyNamespaces>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/my-namespaces.tsx#mynamespaces"]={docgenInfo:mynamespaces.__docgenInfo,name:"mynamespaces",path:"src/containers/namespace-list/my-namespaces.tsx#mynamespaces"})}catch(e){}},744:function(e,t,n){"use strict";n.r(t);var a,r=n(2),o=n(488),s=n(725),i=n(10),c=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:i.a.namespace,title:"Partners"}))},t}(r.Component);t.default=Object(o.a)(l);try{partners.displayName="partners",partners.__docgenInfo={description:"",displayName:"partners",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<Partners>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/namespace-list/partners.tsx#partners"]={docgenInfo:partners.__docgenInfo,name:"partners",path:"src/containers/namespace-list/partners.tsx#partners"})}catch(e){}}}]);
//# sourceMappingURL=namespace_list.js.map