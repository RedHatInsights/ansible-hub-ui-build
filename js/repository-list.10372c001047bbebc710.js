"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[378],{98809:(e,t,n)=>{n.r(t),n.d(t,{Repository:()=>v,default:()=>M});var o=n(43144),r=n(97326),a=n(60136),s=n(6215),i=n(61120),c=n(4942),u=n(15671),l=n(25221),m=n(67294),d=n(5977),f=n(47012),p=n(9425),h=n(42807),g=n(56359),E=n(61542);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function e(){(0,u.Z)(this,e)},O=function(e){(0,a.Z)(E,e);var t,n,d=(t=E,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return(0,s.Z)(this,e)});function E(e){var t;(0,u.Z)(this,E),t=d.call(this,e),(0,c.Z)((0,r.Z)(t),"nonQueryStringParams",["repository"]),(0,c.Z)((0,r.Z)(t),"selectRemoteToEdit",(function(e){t.unModifiedRemote=y({},e),t.setState({remoteToEdit:y({},e),showRemoteFormModal:!0})})),(0,c.Z)((0,r.Z)(t),"refreshContent",(function(){t.loadContent(!1)})),(0,c.Z)((0,r.Z)(t),"loadContent",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=t.state.params;t.setState({loading:e},(function(){if("remote"==n.tab)g.eU.list(p.q6.getReduced(n,t.nonQueryStringParams)).then((function(e){t.setState({loading:!1,content:e.data.data,itemCount:e.data.meta.count})}));else{var e=g.Pt;"insights"===h.g.INSIGHTS_DEPLOYMENT_MODE&&(e=g.g9),e.list().then((function(e){t.setState({loading:!1,content:e.data.data,itemCount:e.data.meta.count})}))}}))}));var n=p.q6.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=10),n.tab||(n.tab="local"),n.tab||"insights"!==h.g.STANDALONE_DEPLOYMENT_MODE||(n.tab="local"),t.state={itemCount:1,params:n,loading:!1,showRemoteFormModal:!1,content:[],remoteToEdit:void 0,errorMessages:{},unauthorised:!1},t}return(0,o.Z)(E,[{key:"componentDidMount",value:function(){!this.context.user||this.context.user.is_anonymous?this.setState({unauthorised:!0,loading:!1}):this.loadContent()}},{key:"render",value:function(){var e=this,t=this.state,n=t.params,o=t.loading,r=t.content,a=t.remoteToEdit,s=t.showRemoteFormModal,i=t.errorMessages,c=t.unauthorised,u=[{id:"local",name:l.ag._("Local")},{id:"remote",name:l.ag._("Remote")}];return m.createElement(m.Fragment,null,a&&s&&m.createElement(f.bi,{remote:a,updateRemote:function(t){return e.setState({remoteToEdit:t})},saveRemote:function(){var t=e.state.remoteToEdit;try{var n=t.repositories[0].distributions[0].base_path;g.eU.smartUpdate(n,t,e.unModifiedRemote).then((function(t){e.setState({errorMessages:{},showRemoteFormModal:!1,remoteToEdit:void 0},(function(){return e.loadContent()}))})).catch((function(t){return e.setState({errorMessages:(0,p.TQ)(t)})}))}catch(t){e.setState({errorMessages:{__nofield:l.ag._("Can't update remote without a distribution attached to it.")}})}},errorMessages:i,showModal:s,closeModal:function(){return e.setState({showRemoteFormModal:!1,errorMessages:{}})}}),m.createElement(f.UP,{title:l.ag._("Repo Management")},"insights"!==h.g.STANDALONE_DEPLOYMENT_MODE||o||c?null:m.createElement("div",{className:"header-bottom"},m.createElement("div",{className:"tab-link-container"},m.createElement("div",{className:"tabs"},m.createElement(f.mQ,{tabs:u,params:n,updateParams:function(t){e.setState({content:[]},(function(){return e.updateParams(t,(function(){return e.loadContent()}))}))}}))))),o?m.createElement(f.AW,null):c?m.createElement(f.iA,null):this.renderContent(n,r))}},{key:"renderContent",value:function(e,t){var n=this,o=this.context.user;return"insights"===h.g.INSIGHTS_DEPLOYMENT_MODE||e.tab&&"local"===e.tab.toLowerCase()?m.createElement(f.or,{className:"repository-list"},m.createElement("section",{className:"body"},m.createElement(f.j8,{repositories:t,updateParams:this.updateParams}))):e.tab&&"remote"===e.tab.toLowerCase()?0===t.length?m.createElement(f.vv,{title:l.ag._("No remote repositories yet"),description:l.ag._("Remote repositories will appear once added")}):m.createElement(f.or,{className:"repository-list"},m.createElement("section",{className:"body"},m.createElement(f.UK,{remotes:t,updateParams:this.updateParams,editRemote:function(e){return n.selectRemoteToEdit(e)},syncRemote:function(e){return g.eU.sync(e).then((function(e){return n.loadContent()}))},user:o,refreshRemotes:this.refreshContent}))):void 0}},{key:"updateParams",get:function(){return p.q6.updateParamsMixin(this.nonQueryStringParams)}}]),E}(m.Component);const M=(0,d.EN)(O);O.contextType=E.I}}]);
//# sourceMappingURL=../sourcemaps/repository-list.54612ba6f0f5dfc06232.js.map