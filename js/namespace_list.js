(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{655:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".card-layout {\n  display: flex;\n  flex-wrap: wrap; }\n  .card-layout .card-wrapper {\n    margin-right: 24px;\n    margin-bottom: 24px; }\n\n.toolbar {\n  padding-bottom: 16px;\n  display: flex;\n  justify-content: space-between; }\n",""])},660:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var a,r=n(2),o=(n(665),n(102)),s=n(41),c=n(288),i=n(290),p=n(130),u=n(289),l=n(230),f=n(14),m=n(252),h=n(54),y=n(10),d=n(75),O=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),g=function(){return(g=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},P=function(t){function e(e){var n=t.call(this,e)||this;n.nonURLParams=["tenant"];var a=f.a.parseParamString(e.location.search,["page","page_size"]);return a.page_size||(a.page_size=24),n.state={namespaces:void 0,itemCount:0,params:a,hasPermission:!0},n}return O(e,t),e.prototype.componentDidMount=function(){var t=this;this.props.filterOwner?h.f.getMyNamespaces({}).then((function(e){0!==e.data.meta.count?t.loadNamespaces():t.setState({hasPermission:!1,namespaces:[]})})):this.loadNamespaces()},e.prototype.render=function(){var t=this,e=this.state,n=e.namespaces,a=e.params,f=e.itemCount,h=e.hasPermission,O=this.props,P=O.title,_=O.namespacePath;return n?r.createElement(r.Fragment,null,r.createElement(m.d,{title:P},r.createElement("div",{className:"toolbar"},r.createElement(m.G,{params:a,sortOptions:[{title:"Name",id:"name"}],searchPlaceholder:"Search "+P,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))}}),r.createElement("div",null,r.createElement(m.w,{params:a,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},count:f,isCompact:!0,perPageOptions:d.a.CARD_DEFAULT_PAGINATION_OPTIONS})))),r.createElement(s.Main,null,0===n.length?r.createElement(s.Section,null,r.createElement(c.a,{className:"empty",variant:c.b.full},r.createElement(i.a,{icon:l.b}),r.createElement(p.a,{headingLevel:"h2",size:"lg"},h?"No matches":"No managed namespaces"),r.createElement(u.a,null,h?"Please try adjusting your search query.":"This account is not set up to manage any namespaces."))):r.createElement(s.Section,{className:"card-layout"},n.map((function(t,e){return r.createElement("div",{key:e,className:"card-wrapper"},r.createElement(o.a,{to:Object(y.b)(_,{namespace:t.name})},r.createElement(m.t,g({key:e},t))))}))))):r.createElement(m.r,null)},e.prototype.loadNamespaces=function(){var t=this;(this.props.filterOwner?function(t){return h.f.getMyNamespaces(t)}:function(t){return h.f.list(t)})(this.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count})}))},Object.defineProperty(e.prototype,"updateParams",{get:function(){return f.a.updateParamsMixin(this.nonURLParams)},enumerable:!0,configurable:!0}),e}(r.Component)},665:function(t,e,n){var a=n(655);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(8)(a,r);a.locals&&(t.exports=a.locals),t.hot.accept(655,(function(){var e=n(655);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,a=0;for(n in t){if(!e||t[n]!==e[n])return!1;a++}for(n in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)})),t.hot.dispose((function(){o()}))},675:function(t,e,n){"use strict";n.r(e);var a,r=n(2),o=n(455),s=n(660),c=n(10),i=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(){return(p=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:c.a.myCollections,title:"My namespaces",filterOwner:!0}))},e}(r.Component);e.default=Object(o.a)(u)},678:function(t,e,n){"use strict";n.r(e);var a,r=n(2),o=n(455),s=n(660),c=n(10),i=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(){return(p=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:c.a.namespace,title:"Partners"}))},e}(r.Component);e.default=Object(o.a)(u)}}]);
//# sourceMappingURL=namespace_list.js.map