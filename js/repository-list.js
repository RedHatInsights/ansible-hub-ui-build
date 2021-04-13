(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{959:function(t,e,o){"use strict";o.r(e),o.d(e,"Repository",(function(){return f}));var n,r=o(1),a=o(629),s=o(383),i=o(72),c=o(27),l=o(32),u=o(33),m=o(126),p=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),d=function(){return(d=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},f=function(){},h=function(t){function e(e){var o=t.call(this,e)||this;o.nonQueryStringParams=["repository"],o.selectRemoteToEdit=function(t){o.unModifiedRemote=d({},t),o.setState({remoteToEdit:d({},t),showRemoteFormModal:!0})},o.refreshContent=function(){o.loadContent(!1)},o.loadContent=function(t){void 0===t&&(t=!0);var e=o.state.params;o.setState({loading:t},(function(){if("remote"==e.tab)u.m.list(c.a.getReduced(e,o.nonQueryStringParams)).then((function(t){o.setState({loading:!1,content:t.data.data,itemCount:t.data.meta.count})}));else{var t=u.d;"insights"===l.a.INSIGHTS_DEPLOYMENT_MODE&&(t=u.h),t.list().then((function(t){o.setState({loading:!1,content:t.data.data,itemCount:t.data.meta.count})}))}}))};var n=c.a.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.tab||(n.tab="local"),n.tab||"insights"!==l.a.STANDALONE_DEPLOYMENT_MODE||(n.tab="local"),o.state={itemCount:1,params:n,loading:!1,showRemoteFormModal:!1,content:[],remoteToEdit:void 0,errorMessages:{}},o}return p(e,t),e.prototype.componentDidMount=function(){this.loadContent()},e.prototype.render=function(){var t=this,e=this.state,o=e.params,n=e.itemCount,a=e.loading,i=e.content,m=e.remoteToEdit,p=e.showRemoteFormModal,d=e.errorMessages;return r.createElement(r.Fragment,null,m&&p&&r.createElement(s.K,{remote:m,updateRemote:function(e){return t.setState({remoteToEdit:e})},saveRemote:function(){var e=t.state.remoteToEdit;try{var o=e.repositories[0].distributions[0].base_path;u.m.smartUpdate(o,e,t.unModifiedRemote).then((function(e){t.setState({errorMessages:{},showRemoteFormModal:!1,remoteToEdit:void 0},(function(){return t.loadContent()}))})).catch((function(e){return t.setState({errorMessages:Object(c.g)(e)})}))}catch(e){t.setState({errorMessages:{__nofield:"Can't update remote without a distribution attached to it."}})}},errorMessages:d,showModal:p,closeModal:function(){return t.setState({showRemoteFormModal:!1,errorMessages:{}})}}),r.createElement(s.e,{title:"Repo Management"},"insights"===l.a.STANDALONE_DEPLOYMENT_MODE?r.createElement("div",{className:"header-bottom"},r.createElement("div",{className:"tab-link-container"},r.createElement("div",{className:"tabs"},r.createElement(s.S,{tabs:["Local","Remote"],params:o,updateParams:function(e){t.setState({content:[]},(function(){return t.updateParams(e,(function(){return t.loadContent()}))}))}})))):null),this.renderContent(o,a,n,i))},e.prototype.renderContent=function(t,e,o,n){var a=this,c=this.context.user;return"insights"===l.a.INSIGHTS_DEPLOYMENT_MODE||t.tab&&"local"===t.tab.toLowerCase()?r.createElement(s.A,{className:"repository-list"},r.createElement(i.Section,{className:"body"},e?r.createElement(s.w,null):r.createElement(s.y,{repositories:n,updateParams:this.updateParams}))):t.tab&&"remote"===t.tab.toLowerCase()?0===n.length?r.createElement(s.r,{title:"No remote repositories yet",description:"Remote repositories will appear once added"}):r.createElement(s.A,{className:"repository-list"},r.createElement(i.Section,{className:"body"},e?r.createElement(s.w,null):r.createElement(s.L,{remotes:n,updateParams:this.updateParams,editRemote:function(t){return a.selectRemoteToEdit(t)},syncRemote:function(t){return u.m.sync(t).then((function(t){return a.loadContent()}))},user:c,refreshRemotes:this.refreshContent}))):void 0},Object.defineProperty(e.prototype,"updateParams",{get:function(){return c.a.updateParamsMixin(this.nonQueryStringParams)},enumerable:!1,configurable:!0}),e}(r.Component);e.default=Object(a.a)(h),h.contextType=m.a;try{repositorylist.displayName="repositorylist",repositorylist.__docgenInfo={description:"",displayName:"repositorylist",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<RepositoryList>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/repositories/repository-list.tsx#repositorylist"]={docgenInfo:repositorylist.__docgenInfo,name:"repositorylist",path:"src/containers/repositories/repository-list.tsx#repositorylist"})}catch(t){}}}]);
//# sourceMappingURL=repository-list.js.map