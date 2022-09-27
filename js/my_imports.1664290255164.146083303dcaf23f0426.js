"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[837],{34813:(t,e,a)=>{a.r(e),a.d(e,{default:()=>b});var r=a(4942),o=a(42982),n=a(15671),s=a(43144),i=a(60136),l=a(6215),c=a(61120),u=a(50361),p=a.n(u),m=a(27693),d=a(30624),f=a(65449),h=a(85624),g=a(47922),v=a(43819);function I(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?I(Object(a),!0).forEach((function(e){(0,r.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D=function(t){(0,i.Z)(u,t);var e,a,r=(e=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,c.Z)(e);if(a){var o=(0,c.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)});function u(t){var e;(0,n.Z)(this,u),e=r.call(this,t);var a=v.q.parseParamString(t.location.search,["page","page_size"]);return e.topOfPage=d.createRef(),e.state={selectedImport:void 0,importList:[],params:a,selectedImportDetails:void 0,resultsCount:0,importDetailError:"",followLogs:!1,loadingImports:!0,loadingImportDetails:!0,selectedCollectionVersion:void 0,alerts:[]},e}return(0,s.Z)(u,[{key:"componentDidMount",value:function(){var t=this;this.loadImportList((function(){return t.loadTaskDetails()})),this.polling=setInterval((function(){if(t.state.params.namespace){var e=t.state,a=e.selectedImport,r=e.selectedImportDetails,o=[g.yX.running,g.yX.waiting];(o.includes(null==r?void 0:r.state)||o.includes(null==a?void 0:a.state))&&t.poll()}}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.polling)}},{key:"closeAlert",get:function(){return(0,h.NQ)("alerts")}},{key:"addAlert",value:function(t){this.setState({alerts:[].concat((0,o.Z)(this.state.alerts),[t])})}},{key:"render",value:function(){var t=this,e=this.state,a=e.selectedImport,r=e.importList,o=e.params,n=e.selectedImportDetails,s=e.resultsCount,i=e.loadingImports,l=e.loadingImportDetails,c=e.importDetailError,u=e.followLogs,p=e.selectedCollectionVersion;return r?d.createElement(d.Fragment,null,d.createElement("div",{ref:this.topOfPage}),d.createElement(h.UP,{title:m.ag._("My imports")}),d.createElement(h.UW,{alerts:this.state.alerts,closeAlert:function(e){return t.closeAlert(e)}}),d.createElement(h.or,null,d.createElement("section",{className:"body"},d.createElement("div",{className:"hub-page-container","data-cy":"MyImports"},d.createElement("div",{className:"import-list"},d.createElement(h.n6,{addAlert:function(e){return t.addAlert(e)},importList:r,selectedImport:a,loading:i,numberOfResults:s,params:o,selectImport:function(e){return t.selectImport(e)},updateParams:function(e){t.updateParams(e,(function(){e.namespace?t.setState({loadingImports:!0,loadingImportDetails:!0},(function(){return t.loadImportList((function(){return t.loadTaskDetails()}))})):t.setState({importDetailError:m.ag._("No data"),loadingImportDetails:!1})}))}})),d.createElement("div",{className:"hub-import-console"},d.createElement(h.Fb,{empty:!this.state.params.namespace,loading:l,task:n,followMessages:u,setFollowMessages:function(e){t.setState({followLogs:e})},selectedImport:a,apiError:c,collectionVersion:p})))))):null}},{key:"updateParams",get:function(){return v.q.updateParamsMixin()}},{key:"selectImport",value:function(t){var e=this;this.setState({selectedImport:t,loadingImportDetails:!0},(function(){e.topOfPage.current.scrollIntoView({behavior:"smooth"}),e.loadTaskDetails()}))}},{key:"poll",value:function(){var t=this;this.loadTaskDetails((function(){var e=t.state,a=e.selectedImport,r=e.selectedImportDetails,o=e.importList;if(r&&a.state!==r.state){var n=o.findIndex((function(t){return t.id===a.id})),s=p()(o),i=p()(a);i.state=r.state,i.finished_at=r.finished_at,s[n]=i,t.setState({selectedImport:i,importList:s})}}))}},{key:"loadImportList",value:function(t){var e=this;this.state.params.namespace?g.q3.list(y(y({},this.state.params),{},{sort:"-created"})).then((function(a){e.setState({importList:a.data.data,selectedImport:a.data.data[0],resultsCount:a.data.meta.count,loadingImports:!1},t)})).catch((function(t){return console.log(t)})):this.setState({importDetailError:m.ag._("No data"),loadingImportDetails:!1})}},{key:"loadTaskDetails",value:function(t){var e=this;this.state.selectedImport?g.q3.get(this.state.selectedImport.id).then((function(a){e.setState({importDetailError:"",loadingImportDetails:!1,selectedImportDetails:a.data,selectedCollectionVersion:void 0},(function(){var a=e.state.selectedImportDetails;g.eq.list({namespace:a.namespace,name:a.name,version:a.version}).then((function(t){1===t.data.meta.count&&e.setState({selectedCollectionVersion:t.data.data[0]})})).finally((function(){t&&t()}))}))})).catch((function(){e.setState({selectedImportDetails:void 0,importDetailError:m.ag._("Error fetching import from API"),loadingImportDetails:!1})})):this.setState({importDetailError:m.ag._("No data"),loadingImportDetails:!1})}}]),u}(d.Component);const b=(0,f.withRouter)(D)}}]);
//# sourceMappingURL=../sourcemaps/my_imports.8c3e054b4df28fcb1a84bc3dc335371d.js.map