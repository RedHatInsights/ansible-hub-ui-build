"use strict";(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[270],{98973:(e,t,n)=>{n.r(t),n.d(t,{SignatureKeysList:()=>h,default:()=>b});var a=n(42982),r=n(15671),l=n(43144),i=n(60136),u=n(6215),o=n(61120),s=n(27693),c=n(30624),m=n(65449),p=n(11930),d=n(53681),f=n(85624),y=n(47922),g=n(61542);var h=function(e){(0,i.Z)(g,e);var t,n,m=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(n){var r=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,u.Z)(this,e)});function g(e){var t;(0,r.Z)(this,g),t=m.call(this,e);var n=d.q6.parseParamString(e.location.search,["page","page_size"]);return n.page_size||(n.page_size=100),t.state={params:n,items:[],loading:!0,itemCount:0,alerts:[],unauthorised:!1,inputText:""},t}return(0,l.Z)(g,[{key:"componentDidMount",value:function(){!this.context.user||this.context.user.is_anonymous?this.setState({loading:!1,unauthorised:!0}):this.query()}},{key:"render",value:function(){var e=this,t=this.state,n=t.params,a=t.itemCount,r=t.loading,l=t.items,i=t.alerts,u=t.unauthorised,o=0===l.length&&!(0,d.vS)(n,["name"]);return c.createElement(c.Fragment,null,c.createElement(f.UW,{alerts:i,closeAlert:function(t){return e.closeAlert(t)}}),c.createElement(f.UP,{title:s.ag._("Signature Keys")}),u?c.createElement(f.iA,null):o&&!r?c.createElement(f.vv,{title:s.ag._("No signature keys yet"),description:s.ag._("Signature keys will appear once created.")}):c.createElement(f.or,null,r?c.createElement(f.AW,null):c.createElement("section",{className:"body"},c.createElement("div",{className:"hub-list-toolbar"},c.createElement(p.Toolbar,null,c.createElement(p.ToolbarContent,null,c.createElement(p.ToolbarGroup,null,c.createElement(p.ToolbarItem,null,c.createElement(f.Kv,{inputText:this.state.inputText,onChange:function(t){return e.setState({inputText:t})},updateParams:function(t){t.page=1,e.updateParams(t,(function(){return e.query()}))},params:n,filterConfig:[{id:"name",title:s.ag._("Name")}]}))))),c.createElement(f.tl,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.query()}))},count:a,isTop:!0})),c.createElement("div",null,c.createElement(f.M$,{updateParams:function(t){e.updateParams(t,(function(){return e.query()})),e.setState({inputText:""})},params:n,ignoredParams:["page_size","page","sort","ordering"],niceNames:{name:s.ag._("Name")}})),r?c.createElement(f.AW,null):this.renderTable(n),c.createElement(f.tl,{params:n,updateParams:function(t){return e.updateParams(t,(function(){return e.query()}))},count:a}))))}},{key:"renderTable",value:function(e){var t=this,n=this.state.items;if(!n.length)return c.createElement(f.ei,null);var a={headers:[{title:s.ag._("Name"),type:"none",id:"name"},{title:s.ag._("Key fingerprint"),type:"none",id:"pubkey_fingerprint"},{title:s.ag._("Created on"),type:"none",id:"pulp_created"},{title:s.ag._("Public key"),type:"none",id:"public_key"},{title:"",type:"none",id:"kebab"}]};return c.createElement("table",{"aria-label":s.ag._("Signature keys"),className:"hub-c-table-content pf-c-table"},c.createElement(f.h2,{options:a,params:e,updateParams:function(e){e.page=1,t.updateParams(e,(function(){return t.query()}))}}),c.createElement("tbody",null,n.map((function(e,n){return t.renderTableRow(e,n)}))))}},{key:"renderTableRow",value:function(e,t){var n=e.name,a=e.pubkey_fingerprint,r=e.public_key,l=e.pulp_created,i=[c.createElement(p.DropdownItem,{key:"download-key",onClick:function(){document.location="data:application/octet-stream,"+encodeURIComponent(r)}},s.ag._("Download key"))];return c.createElement("tr",{key:t},c.createElement("td",null,n),c.createElement("td",null,a),c.createElement("td",null,c.createElement(f.Id,{date:l})),c.createElement("td",null,c.createElement(f.M5,{isCode:!0,isReadOnly:!0,variant:"expansion"},r)),c.createElement(f.cT,{kebabItems:i}))}},{key:"closeAlert",get:function(){return(0,f.NQ)("alerts")}},{key:"query",value:function(){var e=this;this.setState({loading:!0},(function(){y.kO.list(e.state.params).then((function(t){e.setState({items:t.data.results,itemCount:t.data.count,loading:!1})})).catch((function(t){var n=t.response,a=n.status,r=n.statusText;e.setState({loading:!1,items:[],itemCount:0}),e.addAlert({title:s.ag._("Signature keys could not be displayed."),variant:"danger",description:(0,d.N3)(a,r)})}))}))}},{key:"addAlert",value:function(e){this.setState({alerts:[].concat((0,a.Z)(this.state.alerts),[e])})}},{key:"updateParams",get:function(){return d.q6.updateParamsMixin()}}]),g}(c.Component);const b=(0,m.withRouter)(h);h.contextType=g.I}}]);
//# sourceMappingURL=../sourcemaps/signature-keys-list.7805baf94e42b23912c05cc29e7bd61f.js.map