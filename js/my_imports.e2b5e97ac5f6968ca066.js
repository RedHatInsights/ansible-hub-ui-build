(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{748:function(t,e,o){(t.exports=o(10)(!1)).push([t.i,".page-container{display:flex}.page-container .import-list{width:400px}.page-container .import-console{flex-grow:1;margin-left:10px}",""])},760:function(t,e,o){var a=o(748);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},r=o(11)(a,n);a.locals&&(t.exports=a.locals),t.hot.accept(748,(function(){var e=o(748);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var o,a=0;for(o in t){if(!e||t[o]!==e[o])return!1;a++}for(o in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(e)})),t.hot.dispose((function(){r()}))},771:function(t,e,o){"use strict";o.r(e);var a,n,r,s,i=o(0),l=(o(760),o(35)),c=o(81),p=o(236),m=o(23),u=o(20),d=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),f=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},g=function(){return(g=Object.assign||function(t){for(var e,o=1,a=arguments.length;o<a;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},h=function(t){function e(e){var o=t.call(this,e)||this,a=u.a.parseParamString(e.location.search,["page","page_size"]);return o.topOfPage=i.createRef(),o.state={selectedImport:void 0,importList:[],params:a,namespaces:[],selectedImportDetails:void 0,resultsCount:0,importDetailError:"",followLogs:!1,loadingImports:!0,loadingImportDetails:!0,selectedCollectionVersion:void 0},o}return d(e,t),e.prototype.componentDidMount=function(){var t=this;this.loadNamespaces((function(){return t.loadImportList((function(){return t.loadTaskDetails()}))})),this.polling=setInterval((function(){var e=t.state,o=e.selectedImport,a=e.selectedImportDetails,n=[m.k.running,m.k.waiting];(n.includes(null==a?void 0:a.state)||n.includes(null==o?void 0:o.state))&&t.poll()}),1e4)},e.prototype.componentWillUnmount=function(){clearInterval(this.polling)},e.prototype.render=function(){var t=this,e=this.state,o=e.selectedImport,a=e.importList,r=e.params,s=e.namespaces,l=e.selectedImportDetails,c=e.resultsCount,m=e.loadingImports,u=e.loadingImportDetails,d=e.importDetailError,g=e.followLogs,h=e.selectedCollectionVersion;return a?i.createElement(i.Fragment,null,i.createElement("div",{ref:this.topOfPage}),i.createElement(p.d,{title:_(n||(n=f(["My imports"],["My imports"])))}),i.createElement(p.C,null,i.createElement("section",{className:"body"},i.createElement("div",{className:"page-container"},i.createElement("div",{className:"import-list"},i.createElement(p.w,{importList:a,selectedImport:o,loading:m,numberOfResults:c,params:r,namespaces:s,selectImport:function(e){return t.selectImport(e)},updateParams:function(e){t.updateParams(e,(function(){return t.setState({loadingImports:!0,loadingImportDetails:!0},(function(){return t.loadImportList((function(){return t.loadTaskDetails()}))}))}))}})),i.createElement("div",{className:"import-console"},i.createElement(p.v,{loading:u,task:l,followMessages:g,setFollowMessages:function(e){t.setState({followLogs:e})},selectedImport:o,apiError:d,collectionVersion:h})))))):null},Object.defineProperty(e.prototype,"updateParams",{get:function(){return u.a.updateParamsMixin()},enumerable:!1,configurable:!0}),e.prototype.selectImport=function(t){var e=this;this.setState({selectedImport:t,loadingImportDetails:!0},(function(){e.topOfPage.current.scrollIntoView({behavior:"smooth"}),e.loadTaskDetails()}))},e.prototype.poll=function(){var t=this;this.loadTaskDetails((function(){var e=t.state,o=e.selectedImport,a=e.selectedImportDetails,n=e.importList;if(a&&o.state!==a.state){var r=n.findIndex((function(t){return t.id===o.id})),s=Object(c.cloneDeep)(n),i=Object(c.cloneDeep)(o);i.state=a.state,i.finished_at=a.finished_at,s[r]=i,t.setState({selectedImport:i,importList:s})}}))},e.prototype.loadNamespaces=function(t){var e=this;m.h.list({page_size:1e3}).then((function(o){var a,n=o.data.data;e.state.params.namespace&&(a=n.find((function(t){return t.name===e.state.params.namespace}))),a||(a=n[0]),e.setState({namespaces:n,params:g(g({},e.state.params),{namespace:a.name})},t)})).catch((function(t){return console.log(t)}))},e.prototype.loadImportList=function(t){var e=this;m.f.list(g(g({},this.state.params),{sort:"-created"})).then((function(o){e.setState({importList:o.data.data,selectedImport:o.data.data[0],resultsCount:o.data.meta.count,loadingImports:!1},t)})).catch((function(t){return console.log(t)}))},e.prototype.loadTaskDetails=function(t){var e=this;this.state.selectedImport?m.f.get(this.state.selectedImport.id).then((function(o){e.setState({importDetailError:"",loadingImportDetails:!1,selectedImportDetails:o.data,selectedCollectionVersion:void 0},(function(){var o=e.state.selectedImportDetails;m.c.list({namespace:o.namespace,name:o.name,version:o.version}).then((function(t){1===t.data.meta.count&&e.setState({selectedCollectionVersion:t.data.data[0]})})).finally((function(){t&&t()}))}))})).catch((function(t){e.setState({selectedImportDetails:void 0,importDetailError:_(s||(s=f(["Error fetching import from API"],["Error fetching import from API"]))),loadingImportDetails:!1})})):this.setState({importDetailError:_(r||(r=f(["No data"],["No data"]))),loadingImportDetails:!1})},e}(i.Component);e.default=Object(l.g)(h)}}]);
//# sourceMappingURL=my_imports.e2b5e97ac5f6968ca066.js.map