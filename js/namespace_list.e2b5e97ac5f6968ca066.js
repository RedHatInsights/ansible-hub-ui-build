(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{745:function(e,t,n){(e.exports=n(10)(!1)).push([e.i,".namespace-page{height:100%;display:flex;flex-direction:column;justify-content:space-between}.namespace-page .card-area{margin-top:24px;margin-left:24px;flex-grow:1}.namespace-page .card-area .card-layout{display:flex;flex-wrap:wrap}.namespace-page .card-area .card-layout .card-wrapper{margin-right:24px;margin-bottom:24px}.namespace-page .toolbar{display:flex;justify-content:space-between}.namespace-page .pf-c-toolbar__content{padding-left:0px}.namespace-page .footer{border-top:1px solid #d8d8d8;flex-shrink:0}",""])},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var a,r,o,s,c,i,p,l,u,m,f,d=n(0),h=(n(757),n(20)),y=n(236),g=n(126),O=n(102),v=n(23),b=n(8),w=n(14),P=n(53),E=n(16),j=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),N=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},x=function(){return(x=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},C=function(e){function t(t){var n=e.call(this,t)||this;n.nonURLParams=["tenant"],n.handleModalToggle=function(){n.setState((function(e){return{isModalOpen:!e.isModalOpen}}))};var a=h.a.parseParamString(t.location.search,["page","page_size"]);return a.page_size||(a.page_size=20),a.sort||(a.sort="name"),n.state={namespaces:void 0,itemCount:0,params:a,hasPermission:!0,isModalOpen:!1,loading:!0},n}return j(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.filterOwner?v.h.list({}).then((function(t){0!==t.data.meta.count?e.loadNamespaces():e.setState({hasPermission:!1,namespaces:[],loading:!1})})):this.loadNamespaces()},t.prototype.render=function(){var e,t=this,n=this.state,a=n.namespaces,l=n.params,u=n.itemCount,m=this.props.filterOwner,f=this.context.user,h=!Object(E.d)(this.state.params,["keywords"])&&void 0!==a&&0===a.length;if(!a)return d.createElement(y.z,null);var v=[];(null===(e=null==f?void 0:f.model_permissions)||void 0===e?void 0:e.add_namespace)&&v.push(d.createElement(g.a,{key:"create-button"},d.createElement(O.a,{variant:"primary",onClick:this.handleModalToggle},_(r||(r=N(["Create"],["Create"]))))));var P=b.c.name,j=m?_(o||(o=N(["Search my namespaces"],["Search my namespaces"]))):_(s||(s=N(["Search all "],["Search all "])))+P.toLowerCase();return d.createElement("div",{className:"namespace-page"},d.createElement(y.G,{isOpen:this.state.isModalOpen,toggleModal:this.handleModalToggle,onCreateSuccess:function(e){return t.props.history.push(Object(b.b)(b.a.myCollections,{namespace:e.name}))}}),d.createElement(y.d,{title:P},d.createElement("div",{className:"tab-link-container"},d.createElement("div",{className:"tabs"},d.createElement(y.x,{tabs:[{title:_(c||(c=N(["All"],["All"]))),link:b.a.partners,active:!m},{title:_(i||(i=N(["My namespaces"],["My namespaces"]))),link:b.a.myNamespaces,active:m}]}))),h?null:d.createElement("div",{className:"toolbar"},d.createElement(y.X,{params:l,sortOptions:[{title:_(p||(p=N(["Name"],["Name"]))),id:"name",type:"alpha"}],searchPlaceholder:j,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},extraInputs:v}),d.createElement("div",null,d.createElement(y.J,{params:l,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},count:u,isCompact:!0,perPageOptions:w.a.CARD_DEFAULT_PAGINATION_OPTIONS})))),d.createElement("section",{className:"card-area"},this.renderBody()),h?null:d.createElement("section",{className:"footer"},d.createElement(y.J,{params:l,updateParams:function(e){return t.updateParams(e,(function(){return t.loadNamespaces()}))},perPageOptions:w.a.CARD_DEFAULT_PAGINATION_OPTIONS,count:u})))},t.prototype.renderBody=function(){var e,t=this,n=this.state,a=n.namespaces,r=n.loading,o=this.props,s=o.namespacePath,c=o.filterOwner,i=this.context.user,p=_(l||(l=N(["No namespaces yet"],["No namespaces yet"]))),h=c?_(m||(m=N(["This account is not set up to manage any namespaces"],["This account is not set up to manage any namespaces"]))):_(u||(u=N(["Namespaces will appear once created"],["Namespaces will appear once created"]))),g=(null===(e=null==i?void 0:i.model_permissions)||void 0===e?void 0:e.add_namespace)?d.createElement(O.a,{variant:"primary",onClick:function(){return t.handleModalToggle()}},_(f||(f=N(["Create"],["Create"])))):null;return r?d.createElement("section",null,d.createElement(y.y,null),";"):0===a.length?d.createElement("section",null,Object(E.d)(this.state.params,["keywords"])?d.createElement(y.r,null):d.createElement(y.s,{title:p,description:h,button:g})):d.createElement("section",{className:"card-layout"},a.map((function(e,n){return d.createElement("div",{key:n,className:"card-wrapper"},d.createElement(y.E,x({namespaceURL:Object(b.b)(s,{namespace:e.name,repo:t.context.selectedRepo}),key:n},e)))})))},t.prototype.loadNamespaces=function(){var e,t=this;e=this.props.filterOwner?function(e){return v.h.list(e)}:function(e){return v.j.list(e)},this.setState({loading:!0},(function(){e(t.state.params).then((function(e){t.setState({namespaces:e.data.data,itemCount:e.data.meta.count,loading:!1})}))}))},Object.defineProperty(t.prototype,"updateParams",{get:function(){return h.a.updateParamsMixin(this.nonURLParams)},enumerable:!1,configurable:!0}),t}(d.Component);C.contextType=P.a},757:function(e,t,n){var a=n(745);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(11)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(745,(function(){var t=n(745);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},769:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n(35),s=n(751),c=n(8),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:c.a.myCollectionsByRepo,filterOwner:!0}))},t}(r.Component);t.default=Object(o.g)(l)},770:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n(35),s=n(751),c=n(8),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return r.createElement(s.a,p({},this.props,{namespacePath:c.a.namespaceByRepo,filterOwner:!1}))},t}(r.Component);t.default=Object(o.g)(l)}}]);
//# sourceMappingURL=namespace_list.e2b5e97ac5f6968ca066.js.map