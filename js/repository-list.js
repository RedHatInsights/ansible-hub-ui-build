(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{790:function(t,e,o){"use strict";o.r(e),o.d(e,"Repository",(function(){return f}));var r,n=o(0),a=o(662),s=o(236),i=o(717),c=o(16),l=o(15),u=o(23),p=o(60),d=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),m=function(){return(m=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},f=function(){},h=function(t){function e(e){var o=t.call(this,e)||this;o.nonQueryStringParams=["repository"],o.selectRemoteToEdit=function(t){o.unModifiedRemote=m({},t),o.setState({remoteToEdit:m({},t),showRemoteFormModal:!0})},o.refreshContent=function(){o.loadContent(!1)},o.loadContent=function(t){void 0===t&&(t=!0);var e=o.state.params;o.setState({loading:t},(function(){if("remote"==e.tab)u.l.list(c.a.getReduced(e,o.nonQueryStringParams)).then((function(t){o.setState({loading:!1,content:t.data.data,itemCount:t.data.meta.count})}));else{var t=u.d;"insights"===l.a.INSIGHTS_DEPLOYMENT_MODE&&(t=u.g),t.list().then((function(t){o.setState({loading:!1,content:t.data.data,itemCount:t.data.meta.count})}))}}))};var r=c.a.parseParamString(e.location.search,["page","page_size"]);return r.page_size||(r.page_size=10),r.tab||(r.tab="local"),r.tab||"insights"!==l.a.STANDALONE_DEPLOYMENT_MODE||(r.tab="local"),o.state={itemCount:1,params:r,loading:!1,showRemoteFormModal:!1,content:[],remoteToEdit:void 0,errorMessages:{}},o}return d(e,t),e.prototype.componentDidMount=function(){this.loadContent()},e.prototype.render=function(){var t=this,e=this.state,o=e.params,r=e.loading,a=e.content,i=e.remoteToEdit,p=e.showRemoteFormModal,d=e.errorMessages;return n.createElement(n.Fragment,null,i&&p&&n.createElement(s.J,{remote:i,updateRemote:function(e){return t.setState({remoteToEdit:e})},saveRemote:function(){var e=t.state.remoteToEdit;try{var o=e.repositories[0].distributions[0].base_path;u.l.smartUpdate(o,e,t.unModifiedRemote).then((function(e){t.setState({errorMessages:{},showRemoteFormModal:!1,remoteToEdit:void 0},(function(){return t.loadContent()}))})).catch((function(e){return t.setState({errorMessages:Object(c.g)(e)})}))}catch(e){t.setState({errorMessages:{__nofield:"Can't update remote without a distribution attached to it."}})}},errorMessages:d,showModal:p,closeModal:function(){return t.setState({showRemoteFormModal:!1,errorMessages:{}})}}),n.createElement(s.d,{title:"Repo Management"},"insights"!==l.a.STANDALONE_DEPLOYMENT_MODE||r?null:n.createElement("div",{className:"header-bottom"},n.createElement("div",{className:"tab-link-container"},n.createElement("div",{className:"tabs"},n.createElement(s.S,{tabs:["Local","Remote"],params:o,updateParams:function(e){t.setState({content:[]},(function(){return t.updateParams(e,(function(){return t.loadContent()}))}))}}))))),r?n.createElement(s.v,null):this.renderContent(o,a))},e.prototype.renderContent=function(t,e){var o=this,r=this.context.user;return"insights"===l.a.INSIGHTS_DEPLOYMENT_MODE||t.tab&&"local"===t.tab.toLowerCase()?n.createElement(s.z,{className:"repository-list"},n.createElement(i.a,{className:"body"},n.createElement(s.x,{repositories:e,updateParams:this.updateParams}))):t.tab&&"remote"===t.tab.toLowerCase()?0===e.length?n.createElement(s.q,{title:"No remote repositories yet",description:"Remote repositories will appear once added"}):n.createElement(s.z,{className:"repository-list"},n.createElement(i.a,{className:"body"},n.createElement(s.K,{remotes:e,updateParams:this.updateParams,editRemote:function(t){return o.selectRemoteToEdit(t)},syncRemote:function(t){return u.l.sync(t).then((function(t){return o.loadContent()}))},user:r,refreshRemotes:this.refreshContent}))):void 0},Object.defineProperty(e.prototype,"updateParams",{get:function(){return c.a.updateParamsMixin(this.nonQueryStringParams)},enumerable:!1,configurable:!0}),e}(n.Component);e.default=Object(a.a)(h),h.contextType=p.a;try{repositorylist.displayName="repositorylist",repositorylist.__docgenInfo={description:"",displayName:"repositorylist",props:{wrappedComponentRef:{defaultValue:null,description:"",name:"wrappedComponentRef",required:!1,type:{name:"Ref<RepositoryList>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/repositories/repository-list.tsx#repositorylist"]={docgenInfo:repositorylist.__docgenInfo,name:"repositorylist",path:"src/containers/repositories/repository-list.tsx#repositorylist"})}catch(t){}}}]);
//# sourceMappingURL=repository-list.js.map