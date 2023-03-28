"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[813],{34813:(t,e,a)=>{a.r(e),a.d(e,{default:()=>D});var r=a(4942),o=a(42982),n=a(15671),s=a(43144),i=a(79340),l=a(82963),c=a(61120),u=a(13855),p=a(96486),m=a(92950),d=a(27109),f=a(32942),h=a(97704),g=a(43819);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){(0,r.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var y=function(t){(0,i.Z)(h,t);var e,a,r=(e=h,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,c.Z)(e);if(a){var o=(0,c.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)});function h(t){var e;(0,n.Z)(this,h),e=r.call(this,t);var a=g.q.parseParamString(t.location.search,["page","page_size"]);return e.topOfPage=m.createRef(),e.state={selectedImport:void 0,importList:[],params:a,selectedImportDetails:void 0,resultsCount:0,importDetailError:"",followLogs:!1,loadingImports:!0,loadingImportDetails:!0,collection:null,alerts:[]},e}return(0,s.Z)(h,[{key:"componentDidMount",value:function(){var t=this;this.loadImportList((function(){return t.loadTaskDetails()})),this.polling=setInterval((function(){if(t.state.params.namespace){var e=t.state,a=e.selectedImport,r=e.selectedImportDetails,o=[d.yX.running,d.yX.waiting];(o.includes(null==r?void 0:r.state)||o.includes(null==a?void 0:a.state))&&t.poll()}}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.polling)}},{key:"closeAlert",get:function(){return(0,f.NQ)("alerts")}},{key:"addAlert",value:function(t){this.setState({alerts:[].concat((0,o.Z)(this.state.alerts),[t])})}},{key:"render",value:function(){var t=this,e=this.state,a=e.selectedImport,r=e.importList,o=e.params,n=e.selectedImportDetails,s=e.resultsCount,i=e.loadingImports,l=e.loadingImportDetails,c=e.importDetailError,p=e.followLogs,d=e.collection;return r?m.createElement(m.Fragment,null,m.createElement("div",{ref:this.topOfPage}),m.createElement(f.UP,{title:u.ag._("My imports")}),m.createElement(f.UW,{alerts:this.state.alerts,closeAlert:function(e){return t.closeAlert(e)}}),m.createElement(f.or,null,m.createElement("section",{className:"body"},m.createElement("div",{className:"hub-page-container","data-cy":"MyImports"},m.createElement("div",{className:"import-list"},m.createElement(f.n6,{addAlert:function(e){return t.addAlert(e)},importList:r,selectedImport:a,loading:i,numberOfResults:s,params:o,selectImport:function(e){return t.selectImport(e)},updateParams:function(e){t.updateParams(e,(function(){e.namespace?t.setState({loadingImports:!0,loadingImportDetails:!0},(function(){return t.loadImportList((function(){return t.loadTaskDetails()}))})):t.setState({importDetailError:u.ag._("No data"),loadingImportDetails:!1})}))}})),m.createElement("div",{className:"hub-import-console"},m.createElement(f.Fb,{empty:!this.state.params.namespace,loading:l,task:n,followMessages:p,setFollowMessages:function(e){t.setState({followLogs:e})},selectedImport:a,apiError:c,collection:d})))))):null}},{key:"updateParams",get:function(){return g.q.updateParamsMixin()}},{key:"selectImport",value:function(t){var e=this;this.setState({selectedImport:t,loadingImportDetails:!0},(function(){e.topOfPage.current.scrollIntoView({behavior:"smooth"}),e.loadTaskDetails()}))}},{key:"poll",value:function(){var t=this;this.loadTaskDetails((function(){var e=t.state,a=e.selectedImport,r=e.selectedImportDetails,o=e.importList;if(r&&a.state!==r.state){var n=o.findIndex((function(t){return t.id===a.id})),s=(0,p.cloneDeep)(o),i=(0,p.cloneDeep)(a);i.state=r.state,i.finished_at=r.finished_at,s[n]=i,t.setState({selectedImport:i,importList:s})}}))}},{key:"loadImportList",value:function(t){var e=this;this.state.params.namespace?d.q3.list(I(I({},this.state.params),{},{sort:"-created"})).then((function(a){e.setState({importList:a.data.data,selectedImport:a.data.data[0],resultsCount:a.data.meta.count,loadingImports:!1},t)})).catch((function(t){return console.log(t)})):this.setState({importDetailError:u.ag._("No data"),loadingImportDetails:!1})}},{key:"loadTaskDetails",value:function(t){var e=this;this.state.selectedImport?d.q3.get(this.state.selectedImport.id).then((function(a){e.setState({importDetailError:"",loadingImportDetails:!1,selectedImportDetails:a.data,collection:null},(function(){var a=e.state.selectedImportDetails;d.eq.list({namespace:a.namespace,name:a.name,version:a.version}).then((function(t){1===t.data.meta.count&&e.setState({collection:t.data.data[0]})})).finally((function(){t&&t()}))}))})).catch((function(){e.setState({selectedImportDetails:void 0,importDetailError:u.ag._("Error fetching import from API"),loadingImportDetails:!1})})):this.setState({importDetailError:u.ag._("No data"),loadingImportDetails:!1})}}]),h}(m.Component);const D=(0,h.EN)(y)}}]);
//# sourceMappingURL=../sourcemaps/813.8dedd3497663c6feb1d33df90a42da00.js.map