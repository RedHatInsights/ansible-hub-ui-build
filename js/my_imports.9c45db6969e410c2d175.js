"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[837],{34813:(t,e,a)=>{a.r(e),a.d(e,{default:()=>D});var n=a(4942),r=a(15671),o=a(43144),s=a(60136),i=a(6215),l=a(61120),c=a(50361),u=a.n(c),p=a(25221),m=a(67294),d=a(5977),f=a(47012),v=a(34903),h=a(43819);function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){(0,n.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var y=function(t){(0,s.Z)(c,t);var e,a,n=(e=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,l.Z)(e);if(a){var r=(0,l.Z)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,i.Z)(this,t)});function c(t){var e;(0,r.Z)(this,c),e=n.call(this,t);var a=h.q.parseParamString(t.location.search,["page","page_size"]);return e.topOfPage=m.createRef(),e.state={selectedImport:void 0,importList:[],params:a,namespaces:[],selectedImportDetails:void 0,resultsCount:0,importDetailError:"",followLogs:!1,loadingImports:!0,loadingImportDetails:!0,selectedCollectionVersion:void 0},e}return(0,o.Z)(c,[{key:"componentDidMount",value:function(){var t=this;this.loadNamespaces((function(){return t.loadImportList((function(){return t.loadTaskDetails()}))})),this.polling=setInterval((function(){var e=t.state,a=e.selectedImport,n=e.selectedImportDetails,r=[v.yX.running,v.yX.waiting];(r.includes(null==n?void 0:n.state)||r.includes(null==a?void 0:a.state))&&t.poll()}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.polling)}},{key:"render",value:function(){var t=this,e=this.state,a=e.selectedImport,n=e.importList,r=e.params,o=e.namespaces,s=e.selectedImportDetails,i=e.resultsCount,l=e.loadingImports,c=e.loadingImportDetails,u=e.importDetailError,d=e.followLogs,v=e.selectedCollectionVersion;return n?m.createElement(m.Fragment,null,m.createElement("div",{ref:this.topOfPage}),m.createElement(f.UP,{title:p.ag._("My imports")}),m.createElement(f.or,null,m.createElement("section",{className:"body"},m.createElement("div",{className:"page-container"},m.createElement("div",{className:"import-list"},m.createElement(f.n6,{importList:n,selectedImport:a,loading:l,numberOfResults:i,params:r,namespaces:o,selectImport:function(e){return t.selectImport(e)},updateParams:function(e){t.updateParams(e,(function(){return t.setState({loadingImports:!0,loadingImportDetails:!0},(function(){return t.loadImportList((function(){return t.loadTaskDetails()}))}))}))}})),m.createElement("div",{className:"import-console"},m.createElement(f.Fb,{loading:c,task:s,followMessages:d,setFollowMessages:function(e){t.setState({followLogs:e})},selectedImport:a,apiError:u,collectionVersion:v})))))):null}},{key:"updateParams",get:function(){return h.q.updateParamsMixin()}},{key:"selectImport",value:function(t){var e=this;this.setState({selectedImport:t,loadingImportDetails:!0},(function(){e.topOfPage.current.scrollIntoView({behavior:"smooth"}),e.loadTaskDetails()}))}},{key:"poll",value:function(){var t=this;this.loadTaskDetails((function(){var e=t.state,a=e.selectedImport,n=e.selectedImportDetails,r=e.importList;if(n&&a.state!==n.state){var o=r.findIndex((function(t){return t.id===a.id})),s=u()(r),i=u()(a);i.state=n.state,i.finished_at=n.finished_at,s[o]=i,t.setState({selectedImport:i,importList:s})}}))}},{key:"loadNamespaces",value:function(t){var e=this;v.V$.list({page_size:1e3}).then((function(a){var n,r=a.data.data;e.state.params.namespace&&(n=r.find((function(t){return t.name===e.state.params.namespace}))),n||(n=r[0]),e.setState({namespaces:r,params:I(I({},e.state.params),{},{namespace:n.name})},t)})).catch((function(t){return console.log(t)}))}},{key:"loadImportList",value:function(t){var e=this;v.q3.list(I(I({},this.state.params),{},{sort:"-created"})).then((function(a){e.setState({importList:a.data.data,selectedImport:a.data.data[0],resultsCount:a.data.meta.count,loadingImports:!1},t)})).catch((function(t){return console.log(t)}))}},{key:"loadTaskDetails",value:function(t){var e=this;this.state.selectedImport?v.q3.get(this.state.selectedImport.id).then((function(a){e.setState({importDetailError:"",loadingImportDetails:!1,selectedImportDetails:a.data,selectedCollectionVersion:void 0},(function(){var a=e.state.selectedImportDetails;v.eq.list({namespace:a.namespace,name:a.name,version:a.version}).then((function(t){1===t.data.meta.count&&e.setState({selectedCollectionVersion:t.data.data[0]})})).finally((function(){t&&t()}))}))})).catch((function(t){e.setState({selectedImportDetails:void 0,importDetailError:p.ag._("Error fetching import from API"),loadingImportDetails:!1})})):this.setState({importDetailError:p.ag._("No data"),loadingImportDetails:!1})}}]),c}(m.Component);const D=(0,d.EN)(y)}}]);
//# sourceMappingURL=../sourcemaps/my_imports.89d32f090eae929a936e.js.map