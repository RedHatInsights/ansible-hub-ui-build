(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{654:function(t,e,o){(t.exports=o(7)(!1)).push([t.i,"/* logo blue */\n/* well background color */\n/* alert info background color */\n/* alert info border color */\n.page-container {\n  display: flex; }\n  .page-container .import-list {\n    width: 400px; }\n  .page-container .import-console {\n    flex-grow: 1;\n    margin-left: 10px; }\n",""])},663:function(t,e,o){var a=o(654);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},r=o(8)(a,n);a.locals&&(t.exports=a.locals),t.hot.accept(654,(function(){var e=o(654);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var o,a=0;for(o in t){if(!e||t[o]!==e[o])return!1;a++}for(o in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(e)})),t.hot.dispose((function(){r()}))},674:function(t,e,o){"use strict";o.r(e);var a,n=o(2),r=(o(663),o(453)),s=o(40),i=o(58),l=o(251),c=o(72),p=o(14),m=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),u=function(){return(u=Object.assign||function(t){for(var e,o=1,a=arguments.length;o<a;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},d=function(t){function e(e){var o=t.call(this,e)||this,a=p.a.parseParamString(e.location.search,["page","page_size"]);return o.topOfPage=n.createRef(),o.state={selectedImport:void 0,importList:[],params:a,namespaces:[],selectedImportDetails:void 0,resultsCount:0,importDetailError:"",followLogs:!1,loadingImports:!0,loadingImportDetails:!0},o}return m(e,t),e.prototype.componentDidMount=function(){var t=this;this.loadNamespaces((function(){return t.loadImportList((function(){return t.loadTaskDetails()}))})),this.polling=setInterval((function(){!t.state.selectedImportDetails||t.state.selectedImportDetails.state!==c.d.running&&t.state.selectedImportDetails.state!==c.d.waiting||t.poll()}),1e4)},e.prototype.componentWillUnmount=function(){clearInterval(this.polling)},e.prototype.render=function(){var t=this,e=this.state,o=e.selectedImport,a=e.importList,r=e.params,i=e.namespaces,c=e.selectedImportDetails,p=e.resultsCount,m=e.loadingImports,u=e.loadingImportDetails,d=e.importDetailError,f=e.followLogs;return a?n.createElement(n.Fragment,null,n.createElement("div",{ref:this.topOfPage}),n.createElement(l.a,{title:"My imports"}),n.createElement(s.Main,null,n.createElement(s.Section,{className:"body"},n.createElement("div",{className:"page-container"},n.createElement("div",{className:"import-list"},n.createElement(l.k,{importList:a,selectedImport:o,loading:m,numberOfResults:p,params:r,namespaces:i,selectImport:function(e){return t.selectImport(e)},updateParams:function(e){t.updateParams(e,(function(){return t.setState({loadingImports:!0,loadingImportDetails:!0},(function(){return t.loadImportList((function(){return t.loadTaskDetails()}))}))}))}})),n.createElement("div",{className:"import-console"},n.createElement(l.j,{loading:u,task:c,followMessages:f,setFollowMessages:function(e){t.setState({followLogs:e})},selectedImport:o,apiError:d})))))):null},Object.defineProperty(e.prototype,"updateParams",{get:function(){return p.a.updateParamsMixin()},enumerable:!0,configurable:!0}),e.prototype.selectImport=function(t){var e=this;this.setState({selectedImport:t,loadingImportDetails:!0},(function(){e.topOfPage.current.scrollIntoView({behavior:"smooth"}),e.loadTaskDetails()}))},e.prototype.poll=function(){var t=this;this.loadTaskDetails((function(){var e=t.state,o=e.selectedImport,a=e.selectedImportDetails,n=e.importList;if(a&&o.state!==a.state){var r=n.findIndex((function(t){return t.id===o.id})),s=Object(i.cloneDeep)(n),l=Object(i.cloneDeep)(o);l.state=a.state,l.finished_at=a.finished_at,s[r]=l,t.setState({selectedImport:l,importList:s})}}))},e.prototype.loadNamespaces=function(t){var e=this;c.c.getMyNamespaces({page_size:1e3}).then((function(o){var a,n=o.data.data;e.state.params.namespace&&(a=n.find((function(t){return t.name===e.state.params.namespace}))),a||(a=n[0]),e.setState({namespaces:n,params:u(u({},e.state.params),{namespace:a.name})},t)})).catch((function(t){return console.log(t)}))},e.prototype.loadImportList=function(t){var e=this;c.b.list(this.state.params).then((function(o){e.setState({importList:o.data.data,selectedImport:o.data.data[0],resultsCount:o.data.meta.count,loadingImports:!1},t)})).catch((function(t){return console.log(t)}))},e.prototype.loadTaskDetails=function(t){var e=this;this.state.selectedImport?c.b.get(this.state.selectedImport.id).then((function(o){e.setState({importDetailError:"",loadingImportDetails:!1,selectedImportDetails:o.data},t)})).catch((function(t){e.setState({selectedImportDetails:void 0,importDetailError:"Error fetching import from API",loadingImportDetails:!1})})):this.setState({importDetailError:"No data",loadingImportDetails:!1})},e}(n.Component);e.default=Object(r.a)(d)}}]);
//# sourceMappingURL=my_imports.js.map