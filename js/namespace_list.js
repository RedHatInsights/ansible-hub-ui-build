(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{652:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".card-layout {\n  display: flex;\n  flex-wrap: wrap; }\n  .card-layout .card-wrapper {\n    margin-right: 24px;\n    margin-bottom: 24px; }\n\n.toolbar {\n  padding-bottom: 16px;\n  display: flex;\n  justify-content: space-between; }\n",""])},656:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r,a=n(2),o=(n(661),n(96)),c=n(40),i=n(14),s=n(251),p=n(72),u=n(10),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},m=function(t){function e(e){var n=t.call(this,e)||this;n.nonURLParams=["tenant"];var r=i.a.parseParamString(e.location.search,["page","page_size"]);return r.page_size||(r.page_size=50),n.state={namespaces:void 0,itemCount:0,params:r},n}return l(e,t),e.prototype.componentDidMount=function(){this.loadNamespaces()},e.prototype.render=function(){var t=this,e=this.state,n=e.namespaces,r=e.params,i=e.itemCount,p=this.props,l=p.title,m=p.namespacePath;return n?a.createElement(a.Fragment,null,a.createElement(s.a,{title:l},a.createElement("div",{className:"toolbar"},a.createElement(s.B,{params:r,sortOptions:[{title:"Name",id:"name"}],searchPlaceholder:"Search "+l,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))}}),a.createElement("div",null,a.createElement(s.r,{params:r,updateParams:function(e){return t.updateParams(e)},count:i,isTop:!0})))),a.createElement(c.Main,null,a.createElement(c.Section,{className:"card-layout"},n.map((function(t,e){return a.createElement("div",{key:e,className:"card-wrapper"},a.createElement(o.a,{to:Object(u.b)(m,{namespace:t.name})},a.createElement(s.o,f({key:e},t))))}))))):a.createElement(s.m,null)},e.prototype.loadNamespaces=function(){var t=this;(this.props.filterOwner?function(t){return p.c.getMyNamespaces(t)}:function(t){return p.c.list(t)})(this.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count})}))},Object.defineProperty(e.prototype,"updateParams",{get:function(){return i.a.updateParamsMixin(this.nonURLParams)},enumerable:!0,configurable:!0}),e}(a.Component)},661:function(t,e,n){var r=n(652);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(652,(function(){var e=n(652);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)})),t.hot.dispose((function(){o()}))},670:function(t,e,n){"use strict";n.r(e);var r,a=n(2),o=n(453),c=n(656),i=n(10),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(){return(p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){return a.createElement(c.a,p({},this.props,{namespacePath:i.a.myCollections,title:"My Namespaces",filterOwner:!0}))},e}(a.Component);e.default=Object(o.a)(u)},673:function(t,e,n){"use strict";n.r(e);var r,a=n(2),o=n(453),c=n(656),i=n(10),s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(){return(p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){return a.createElement(c.a,p({},this.props,{namespacePath:i.a.namespace,title:"Partners"}))},e}(a.Component);e.default=Object(o.a)(u)}}]);
//# sourceMappingURL=namespace_list.js.map