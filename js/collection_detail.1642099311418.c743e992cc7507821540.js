(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[776],{30983:(e,t,n)=>{var r;window,e.exports=(r=n(30624),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(1),t),a(n(7),t)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RenderPluginDoc=void 0;const r=n(2);n(3);class a extends r.Component{constructor(e){super(e),this.CUSTOM_FORMATTERS=/([IBMULC])\(([^)]+)\)/gm,this.state={renderError:!1}}componentDidCatch(e,t){console.log(e),this.setState({renderError:!0})}render(){const{plugin:e}=this.props;if(this.state.renderError)return this.renderError(e);{let t,n,a,o;try{t=this.parseDocString(e),n=this.parseExamples(e),a=this.parseReturn(e),o={synopsis:this.renderSynopsis(t),parameters:this.renderParameters(t.options,e.content_type,this.subOptionsMaxDepth),notes:this.renderNotes(t),examples:this.renderExample(n),returnValues:this.renderReturnValues(a,this.returnContainMaxDepth),shortDescription:this.renderShortDescription(t),deprecated:this.renderDeprecated(t,e.content_name),requirements:this.renderRequirements(t)}}catch(t){return console.log(t),this.renderError(e)}return r.createElement("div",null,r.createElement("h1",null,e.content_type," > ",e.content_name),r.createElement("br",null),o.shortDescription,o.deprecated,this.renderTableOfContents(o),o.synopsis,o.requirements,o.parameters,o.notes,o.examples,o.returnValues)}}renderError(e){return r.createElement(r.Fragment,null,this.props.renderWarning("Documentation Syntax Error: cannot parse plugin documention."),r.createElement("br",null),r.createElement("div",null,e.content_type&&e.content_name?r.createElement("h1",null,e.content_type," > ",e.content_name):null,r.createElement("p",null,"The documentation object for this plugin seems to contain invalid syntax that makes it impossible for Automation Hub to parse. You can still look at the unformatted documentation object bellow if you need to."),r.createElement("h2",null,"Unformatted Documentation"),r.createElement("pre",{className:"plugin-raw"},JSON.stringify(e,null,2))))}parseDocString(e){if(!e.doc_strings)return{description:[],short_description:""};const t=Object.assign({},e.doc_strings.doc);let n=0;const r=(e,t)=>{t>n&&(n=t);for(let n of e)n.description=this.ensureListofStrings(n.description),"object"==typeof n.default&&(n.default=JSON.stringify(n.default)),n.suboptions&&r(n.suboptions,t+1)};return t.options&&r(t.options,0),t.description=this.ensureListofStrings(t.description),this.subOptionsMaxDepth=n,t}parseExamples(e){return e.doc_strings&&"string"==typeof e.doc_strings.examples?e.doc_strings.examples.replace("\n",""):null}parseReturn(e){if(!e.doc_strings)return null;if(!e.doc_strings.return)return null;let t=0;const n=(e,r)=>{r>t&&(t=r);for(let t of e)t.description=this.ensureListofStrings(t.description),t.contains&&n(t.contains,r+1)},r=[...e.doc_strings.return];return n(r,0),this.returnContainMaxDepth=t,r}reactReplace(e,t,n){const a=[];let o,l=0;for(;null!==(o=t.exec(e));)a.push(e.substr(l,t.lastIndex-l-o[0].length)),a.push(n(o)),l=t.lastIndex;return 0===a.length?r.createElement("span",null,e):(l!=e.length-1&&a.push(e.substring(l)),r.createElement("span",null,a.map(((e,t)=>r.createElement(r.Fragment,{key:t},e)))))}applyDocFormatters(e){const{renderModuleLink:t,renderDocLink:n}=this.props;return this.reactReplace(e,this.CUSTOM_FORMATTERS,(e=>{const a=e[0],o=e[1],l=e[2];switch(o){case"L":const e=l.split(",");return n(e[0],e[1]);case"U":return r.createElement("a",{href:l,target:"_blank"},l);case"I":return r.createElement("i",null,l);case"C":return r.createElement("span",{className:"inline-code"},l);case"M":return t(l);case"B":return r.createElement("b",null,l);default:return a}}))}ensureListofStrings(e){return"string"==typeof e?[e]:e||[]}renderDeprecated(e,t){if(!e.deprecated&&!t.startsWith("_"))return null;const n=e.deprecated||{};return r.createElement(r.Fragment,null,r.createElement("h2",null,"DEPRECATED"),n.removed_in?r.createElement("div",null,r.createElement("b",null,"Removed in version")," ",e.deprecated.removed_in):null,r.createElement("div",null,r.createElement("b",null,"Why: "),n.why?e.deprecated.why:"No reason specified."),r.createElement("div",null,r.createElement("b",null,"Alternative: "),n.alternative?e.deprecated.alternative:"No alternatives specified."))}renderTableOfContents(e){return r.createElement("ul",null,null!==e.synopsis&&r.createElement("li",null,this.props.renderTableOfContentsLink("Synopsis","synopsis")),null!==e.parameters&&r.createElement("li",null,this.props.renderTableOfContentsLink("Parameters","parameters")),null!==e.notes&&r.createElement("li",null,this.props.renderTableOfContentsLink("Notes","notes")),null!==e.examples&&r.createElement("li",null,this.props.renderTableOfContentsLink("Examples","examples")),null!==e.returnValues&&r.createElement("li",null,this.props.renderTableOfContentsLink("Return Values","return-values")))}renderShortDescription(e){return r.createElement("div",null,e.short_description)}renderSynopsis(e){return r.createElement(r.Fragment,null,r.createElement("h2",{id:"synopsis"},"Synopsis"),r.createElement("ul",null,e.description.map(((e,t)=>r.createElement("li",{key:t},this.applyDocFormatters(e))))))}renderParameters(e,t,n){if(!e)return null;const a=this.renderParameterEntries(e,t,0,n,"");return r.createElement(r.Fragment,null,r.createElement("h2",{id:"parameters"},"Parameters"),r.createElement("table",{className:"options-table"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",{colSpan:n+1},"Parameter"),r.createElement("th",null,"Choices/",r.createElement("span",{className:"blue"},"Defaults")),"module"!==t?r.createElement("th",null,"Configuration"):null,r.createElement("th",null,"Comments")),a)))}renderParameterEntries(e,t,n,a,o){let l=[];return e.forEach(((e,c)=>{const s=[],i=`${o}-${e.name}`;for(let e=0;e<n;e++)s.push(r.createElement("td",{key:e,className:"spacer"}));l.push(r.createElement("tr",{key:i},s,r.createElement("td",{colSpan:a+1-n,className:e.suboptions?"parent":""},r.createElement("span",{className:"option-name"},e.name),r.createElement("small",null,this.documentedType(e.type),e.elements?r.createElement("span",null," ","/ elements =",this.documentedType(e.elements)):null,e.required?r.createElement("span",null," ","/ ",r.createElement("span",{className:"red"},"required")):null)),r.createElement("td",null,this.renderChoices(e)),"module"!==t?r.createElement("td",null,this.renderPluginConfiguration(e)):null,r.createElement("td",null,e.description.map(((e,t)=>r.createElement("p",{key:t},this.applyDocFormatters(e)))),e.aliases?r.createElement("small",null,r.createElement("span",{className:"green"},"aliases: ",e.aliases.join(", "))):null))),e.suboptions&&(l=l.concat(this.renderParameterEntries(e.suboptions,t,n+1,a,i)))})),l}renderPluginConfiguration(e){return r.createElement(r.Fragment,null,e.ini?r.createElement("div",{className:"plugin-config"},"ini entries:",e.ini.map(((e,t)=>r.createElement("p",{key:t},"[",e.section,"]",r.createElement("br",null),e.key," = ",e.default?e.default:"VALUE")))):null,e.env?r.createElement("div",{className:"plugin-config"},e.env.map(((e,t)=>r.createElement("div",{key:t},"env: ",e.name)))):null,e.vars?r.createElement("div",{className:"plugin-config"},e.vars.map(((e,t)=>r.createElement("div",null,"var: ",e.name)))):null)}renderChoices(e){let t,n;return"bool"===e.type?(t=["no","yes"],!0===e.default?n="yes":!1===e.default&&(n="no")):(t=e.choices||[],n=e.default),r.createElement(r.Fragment,null,t&&Array.isArray(t)&&0!==t.length?r.createElement("div",null,r.createElement("span",{className:"option-name"},"Choices: "),r.createElement("ul",null,t.map(((e,t)=>r.createElement("li",{key:t},e===n?r.createElement("span",{className:"blue"},e,"  ←"):e))))):null,n&&!t.includes(n)?r.createElement("span",null,r.createElement("span",{className:"option-name"},"Default: "),r.createElement("span",{className:"blue"},n)):null)}renderNotes(e){return e.notes?r.createElement(r.Fragment,null,r.createElement("h2",{id:"notes"},"Notes"),r.createElement("ul",null,e.notes.map(((e,t)=>r.createElement("li",{key:t},this.applyDocFormatters(e)))))):null}renderRequirements(e){return e.requirements?r.createElement(r.Fragment,null,r.createElement("h2",null,"Requirements"),r.createElement("ul",null,e.requirements.map(((e,t)=>r.createElement("li",{key:t},e))))):null}renderExample(e){return e?r.createElement(r.Fragment,null,r.createElement("h2",{id:"examples"},"Examples"),r.createElement("pre",null,e)):null}renderReturnValues(e,t){return e?r.createElement(r.Fragment,null,r.createElement("h2",{id:"return-values"},"Return Values"),r.createElement("table",{className:"options-table"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",{colSpan:t+1},"Key"),r.createElement("th",null,"Returned"),r.createElement("th",null,"Description")),this.renderReturnValueEntries(e,0,t,"")))):null}renderReturnValueEntries(e,t,n,a){let o=[];return e.forEach(((e,l)=>{const c=[];for(let e=0;e<t;e++)c.push(r.createElement("td",{key:e,colSpan:1,className:"spacer"}));const s=`${a}-${e.name}`;o.push(r.createElement("tr",{key:s},c,r.createElement("td",{colSpan:n+1-t,className:e.contains?"parent":""},e.name," ",r.createElement("br",null)," (",e.type,")"),r.createElement("td",null,e.returned),r.createElement("td",null,e.description.map(((e,t)=>r.createElement("p",{key:t},this.applyDocFormatters(e)))),e.sample?r.createElement("div",null,r.createElement("br",null),"sample:","string"==typeof e.sample?e.sample:r.createElement("pre",null,JSON.stringify(e.sample,null,2))):null))),e.contains&&(o=o.concat(this.renderReturnValueEntries(e.contains,t+1,n,s)))})),o}documentedType(e){switch(e){case"str":return"string";case"bool":return"boolean";case"int":return"integer";case"dict":return"dictionary";case void 0:return"-";default:return e}}}t.RenderPluginDoc=a},function(e,t){e.exports=r},function(e,t,n){var r=n(4),a=n(5);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]),r(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function l(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var c=e[a],s=t.base?c[0]+t.base:c[0],i=n[s]||0,u="".concat(s," ").concat(i);n[s]=i+1;var p=l(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(o[p].references++,o[p].updater(m)):o.push({identifier:u,updater:h(m,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=a(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var i,u=(i=[],function(e,t){return i[e]=t,i.filter(Boolean).join("\n")});function p(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var o=document.createTextNode(a),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(o,l[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,f=0;function h(e,t){var n,r,a;if(t.singleton){var o=f++;n=d||(d=s(t)),r=p.bind(null,n,o,!1),a=p.bind(null,n,o,!0)}else n=s(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=l(n[r]);o[a].references--}for(var s=c(e,t),i=0;i<n.length;i++){var u=l(n[i]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=s}}}},function(e,t,n){(t=n(6)(!1)).push([e.i,".options-table{border-bottom:1px solid black;width:100%}.options-table td,.options-table th{border:1px solid black;padding:5px;vertical-align:top}.options-table ul{margin-top:0px}.options-table small{margin-bottom:0px}.options-table .spacer{width:20px;border-top:0px;border-bottom:0px}.options-table .parent{border-bottom:0px}.blue{color:var(--pf-global--info-color--100)}.red{color:var(--pf-global--danger-color--100)}.green{color:var(--pf-global--success-color--200)}.option-name{font-weight:bold}.plugin-config{margin-bottom:16px}.plugin-raw{white-space:pre-wrap}.inline-code{background-color:#e6e9e9;font-family:var(--pf-global--FontFamily--monospace);display:inline-block;border-radius:2px;padding:0px 2px 0px 2px}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,a,o=e[1]||"",l=e[3];if(!l)return o;if(t&&"function"==typeof btoa){var c=(n=l,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(a," */")),s=l.sources.map((function(e){return"/*# sourceURL=".concat(l.sourceRoot||"").concat(e," */")}));return[o].concat(s).concat([c]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlobType=t.PluginContentType=void 0,t.PluginContentType=class{},t.DocsBlobType=class{}}]))},9473:(e,t,n)=>{"use strict";n.d(t,{Y:()=>o});var r=n(34903),a=n(61647);function o(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return null};r.gu.getCached(this.props.match.params.namespace,this.props.match.params.collection,e,this.state.params,n).then((function(e){t.setState({collection:e},o)})).catch((function(){t.props.history.push(a.nB.notFound)}))}},5576:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(15671),a=n(43144),o=n(60136),l=n(6215),c=n(61120),s=n(25221),i=n(30624),u=n(86235),p=n(79330),m=n(9473),d=n(43819),f=n(61647),h=n(61542);var v=function(e){(0,o.Z)(h,e);var t,n,u=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var a=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function h(e){var t;(0,r.Z)(this,h),t=u.call(this,e);var n=d.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t}return(0,a.Z)(h,[{key:"componentDidMount",value:function(){this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,r=t.params;if(!n)return i.createElement(p.gO,null);var a=[f.Th,{url:(0,f.dI)(f.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,f.dI)(f.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:s.ag._("Content")}];return i.createElement(i.Fragment,null,i.createElement(p.X8,{collection:n,params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:a,activeTab:"contents",repo:this.context.selectedRepo}),i.createElement(p.or,null,i.createElement("section",{className:"body"},i.createElement(p.Ui,{contents:n.latest_version.metadata.contents,collection:n.name,namespace:n.namespace.name,params:r,updateParams:function(t){return e.updateParams(t)}}))))}},{key:"loadCollection",get:function(){return m.Y}},{key:"updateParams",get:function(){return d.q.updateParamsMixin()}}]),h}(i.Component);const y=(0,u.withRouter)(v);v.contextType=h.I},27910:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(42982),a=n(15671),o=n(43144),l=n(97326),c=n(60136),s=n(6215),i=n(61120),u=n(4942),p=n(25221),m=n(30624),d=n(86235),f=n(34903),h=n(79330),v=n(79698),y=n(61647),g=n(61542);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){(0,c.Z)(g,e);var t,n,d=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function g(e){var t;(0,a.Z)(this,g),t=d.call(this,e),(0,u.Z)((0,l.Z)(t),"ignoredParams",["page_size","page","sort","name__icontains"]);var n=v.q6.parseParamString(e.location.search,["page","page_size"]);return n.sort=n.sort?"collection":"-collection",t.state={collection:void 0,params:n,usedByDependencies:[],usedByDependenciesCount:0,usedByDependenciesLoading:!0,alerts:[]},t}return(0,o.Z)(g,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,r=t.params,a=t.usedByDependencies,o=t.usedByDependenciesCount,l=t.usedByDependenciesLoading,c=t.alerts;if(!n)return m.createElement(h.gO,null);var s=[y.Th,{url:(0,y.dI)(y.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,y.dI)(y.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:p.ag._("Dependencies")}],i=v.q6.getReduced(r,this.ignoredParams),u=v.q6.getReduced(r,["version"]),d=!Object.keys(n.latest_version.metadata.dependencies).length;return m.createElement(m.Fragment,null,m.createElement(h.UW,{alerts:c,closeAlert:function(t){return e.closeAlert(t)}}),m.createElement(h.X8,{collection:n,params:i,updateParams:function(t){e.updateParams(e.combineParams(e.state.params,t),(function(){return e.loadData(!0)}))},breadcrumbs:s,activeTab:"dependencies",repo:this.context.selectedRepo}),m.createElement(h.or,null,m.createElement("section",{className:"body"},m.createElement("div",{className:"pf-c-content collection-dependencies"},m.createElement("h1",null,p.ag._("Dependencies")),!d||o||(0,v.vS)(r,["name__icontains"])?m.createElement(m.Fragment,null,m.createElement("p",null,p.ag._("This collections requires the following collections for use")),d?m.createElement(h.vv,{title:p.ag._("No dependencies"),description:p.ag._("Collection does not have any dependencies.")}):m.createElement(h.nW,{collection:this.state.collection,repo:this.context.selectedRepo}),m.createElement("p",null,p.ag._("This collection is being used by")),m.createElement(h.KQ,{repo:this.context.selectedRepo,usedByDependencies:a,itemCount:o,params:u,usedByDependenciesLoading:l,updateParams:function(t){return e.updateParams(e.combineParams(e.state.params,t),(function(){return e.loadUsedByDependencies()}))}})):m.createElement(h.vv,{title:p.ag._("No dependencies"),description:p.ag._("Collection does not have any dependencies.")})))))}},{key:"loadData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loadCollection(t,(function(){return e.loadUsedByDependencies()}))}},{key:"loadUsedByDependencies",value:function(){var e=this;this.setState({usedByDependenciesLoading:!0},(function(){e.cancelToken&&e.cancelToken.cancel("request-canceled"),e.cancelToken=f.gu.getCancelToken(),f.gu.getUsedDependenciesByCollection(e.state.collection.namespace.name,e.state.collection.name,v.q6.getReduced(e.state.params,["version"]),e.cancelToken).then((function(t){var n=t.data;e.setState({usedByDependencies:n.data,usedByDependenciesCount:n.meta.count,usedByDependenciesLoading:!1})})).catch((function(t){"request-canceled"!==(null==t?void 0:t.message)&&e.setState({usedByDependenciesLoading:!1,alerts:[].concat((0,r.Z)(e.state.alerts),[{variant:"danger",title:p.ag._("Error loading dependent collections."),description:null==t?void 0:t.message}])})})).finally((function(){e.cancelToken=void 0}))}))}},{key:"loadCollection",value:function(e,t){var n=this;f.gu.getCached(this.props.match.params.namespace,this.props.match.params.collection,this.context.selectedRepo,this.state.params.version?{version:this.state.params.version}:{},e).then((function(e){return n.setState({collection:e},t)})).catch((function(){n.props.history.push(y.nB.notFound)}))}},{key:"updateParams",get:function(){return v.q6.updateParamsMixin()}},{key:"combineParams",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return E(E({},e),t)}))}},{key:"closeAlert",get:function(){return(0,h.NQ)("alerts")}}]),g}(m.Component);const x=(0,d.withRouter)(R);R.contextType=g.I},95781:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var r=n(87462),a=n(42982),o=n(15671),l=n(43144),c=n(60136),s=n(6215),i=n(61120),u=n(18446),p=n.n(u),m=n(30624),d=n(86235),f=n(79330),h=n(9473),v=n(43819),y=n(61647),g=n(61542);var b=function(e){(0,c.Z)(d,e);var t,n,u=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;(0,o.Z)(this,d),t=u.call(this,e);var n=v.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n,alerts:[]},t}return(0,l.Z)(d,[{key:"componentDidMount",value:function(){this.loadCollection(this.context.selectedRepo,!0)}},{key:"componentDidUpdate",value:function(e){p()(e.location,this.props.location)||this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,o=t.params,l=t.alerts;if(!n)return m.createElement(f.gO,null);var c=[y.Th,{url:(0,y.dI)(y.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{name:n.name}];return m.createElement(m.Fragment,null,m.createElement(f.UW,{alerts:l,closeAlert:function(t){return e.closeAlert(t)}}),m.createElement(f.X8,{collection:n,params:o,updateParams:function(t){return e.updateParams(t,(function(){return e.loadCollection(e.context.selectedRepo,!0)}))},breadcrumbs:c,activeTab:"install",repo:this.context.selectedRepo}),m.createElement(f.or,null,m.createElement("section",{className:"body"},m.createElement(f.aG,(0,r.Z)({},n,{updateParams:function(t){return e.updateParams(t)},params:this.state.params,addAlert:function(t,n,r){return e.setState({alerts:[].concat((0,a.Z)(e.state.alerts),[{variant:t,title:n,description:r}])})}})))))}},{key:"loadCollection",get:function(){return h.Y}},{key:"updateParams",get:function(){return v.q.updateParamsMixin()}},{key:"closeAlert",get:function(){return(0,f.NQ)("alerts")}}]),d}(m.Component);const E=(0,d.withRouter)(b);b.contextType=g.I},13987:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var r=n(15671),a=n(43144),o=n(60136),l=n(6215),c=n(61120),s=n(25221),i=n(30624),u=n.n(i),p=n(86235),m=function(){return m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)},d="",f=null,h=null,v=null;function y(){d="",null!==f&&f.disconnect(),null!==h&&(window.clearTimeout(h),h=null)}function g(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function b(){var e=null;if("#"===d)e=document.body;else{var t=d.replace("#","");null===(e=document.getElementById(t))&&"#top"===d&&(e=document.body)}if(null!==e){v(e);var n=e.getAttribute("tabindex");return null!==n||g(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||g(e)||(e.blur(),e.removeAttribute("tabindex")),y(),!0}return!1}function E(e){return u().forwardRef((function(t,n){var r="";"string"==typeof t.to&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):"object"==typeof t.to&&"string"==typeof t.to.hash&&(r=t.to.hash);var a={};e===p.NavLink&&(a.isActive=function(e,t){return e&&e.isExact&&t.hash===r});var o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["scroll","smooth","timeout","elementId"]);return u().createElement(e,m({},a,o,{onClick:function(e){var n;y(),d=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(e),""===d||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(v=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===b()&&(null===f&&(f=new MutationObserver(b)),f.observe(document,{attributes:!0,childList:!0,subtree:!0}),h=window.setTimeout((function(){y()}),n||1e4))}),0))},ref:n}),t.children)}))}var R=E(p.Link),x=(E(p.NavLink),n(56976)),_=n(79330),k=n(30983),P=n(9473),O=n(79698),C=n(61647),D=n(61542),T=n(43047);var B=function(e){(0,o.Z)(m,e);var t,n,u=(t=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var a=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function m(e){var t;(0,r.Z)(this,m),t=u.call(this,e);var n=O.q6.parseParamString(e.location.search);return t.state={collection:void 0,params:n},t.docsRef=i.createRef(),t.searchBarRef=i.createRef(),t}return(0,a.Z)(m,[{key:"componentDidMount",value:function(){this.loadCollection(this.context.selectedRepo)}},{key:"render",value:function(){var e,t,n=this,r=this.state,a=r.params,o=r.collection,l=this.props.match.params;if(!o)return i.createElement(_.gO,null);var c=l.type||"docs",u=l.name||l.page||null;if("docs"===c&&u){if(o.latest_version.docs_blob.documentation_files){var p=o.latest_version.docs_blob.documentation_files.find((function(e){return(0,O.Vb)(e.name)===l.page}));p&&(e=p.html)}}else if(u){if(o.latest_version.docs_blob.contents){var m=o.latest_version.docs_blob.contents.find((function(e){return e.content_type===c&&e.content_name===u}));m&&("role"===c?e=m.readme_html:t=m)}}else o.latest_version.docs_blob.collection_readme&&(e=o.latest_version.docs_blob.collection_readme.html);var d=[C.Th,{url:(0,C.dI)(C.nB.namespaceByRepo,{namespace:o.namespace.name,repo:this.context.selectedRepo}),name:o.namespace.name},{url:(0,C.dI)(C.nB.collectionByRepo,{namespace:o.namespace.name,collection:o.name,repo:this.context.selectedRepo}),name:o.name},{name:s.ag._("Documentation")}];return i.createElement(i.Fragment,null,i.createElement(_.X8,{collection:o,params:a,updateParams:function(e){return n.updateParams(e,(function(){return n.loadCollection(n.context.selectedRepo,!0)}))},breadcrumbs:d,activeTab:"documentation",className:"header",repo:this.context.selectedRepo}),i.createElement(_.or,{className:"main"},i.createElement("section",{className:"docs-container"},i.createElement(_.o5,{className:"sidebar",namespace:o.namespace.name,collection:o.name,docs_blob:o.latest_version.docs_blob,selectedName:u,selectedType:c,params:a,updateParams:function(e){return n.updateParams(e)},searchBarRef:this.searchBarRef}),i.createElement("div",{className:"body docs pf-c-content",ref:this.docsRef},e||t?e?i.createElement("div",{dangerouslySetInnerHTML:{__html:e}}):i.createElement(k.RenderPluginDoc,{plugin:t,renderModuleLink:function(e){return n.renderModuleLink(e,o,a,o.latest_version.metadata.contents)},renderDocLink:function(e,t){return n.renderDocLink(e,t,o,a)},renderTableOfContentsLink:function(e,t){return i.createElement(R,{to:"#"+t},e)},renderWarning:function(e){return i.createElement(x.Alert,{isInline:!0,variant:"warning",title:e})}}):this.renderNotFound(o.name)))))}},{key:"renderDocLink",value:function(e,t,n,r){return t&&t.startsWith("http")?i.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},e):t?i.createElement(p.Link,{to:(0,C.dI)(C.nB.collectionDocsPageByRepo,{namespace:n.namespace.name,collection:n.name,page:(0,O.Vb)(t),repo:this.context.selectedRepo},r)},e):null}},{key:"renderModuleLink",value:function(e,t,n,r){return r.find((function(t){return"module"===t.content_type&&t.name===e}))?i.createElement(p.Link,{to:(0,C.dI)(C.nB.collectionContentDocsByRepo,{namespace:t.namespace.name,collection:t.name,type:"module",name:e,repo:this.context.selectedRepo},n)},e):e}},{key:"renderNotFound",value:function(e){return i.createElement(_.WU,{title:s.ag._("Not found"),description:s.ag._("The file is not available for this version of {collectionName}",{collectionName:e}),icon:T.$O})}},{key:"loadCollection",get:function(){return P.Y}},{key:"updateParams",get:function(){return O.q6.updateParamsMixin()}}]),m}(i.Component);const S=(0,p.withRouter)(B);B.contextType=D.I},22282:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(15671),a=n(43144),o=n(60136),l=n(6215),c=n(61120),s=n(25221),i=n(30624),u=n(86235),p=n(34903),m=n(79330),d=n(9473),f=n(43819),h=n(61647),v=n(61542);var y=function(e){(0,o.Z)(v,e);var t,n,u=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var a=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function v(e){var t;(0,r.Z)(this,v),t=u.call(this,e);var n=f.q.parseParamString(e.location.search);return t.state={collection:void 0,params:n,loadingImports:!0,selectedImportDetail:void 0,selectedImport:void 0,apiError:void 0},t}return(0,a.Z)(v,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.collection,r=t.params,a=t.loadingImports,o=t.selectedImportDetail,l=t.selectedImport,c=t.apiError;if(!n)return i.createElement(m.gO,null);var u=[h.Th,{url:(0,h.dI)(h.nB.namespaceByRepo,{namespace:n.namespace.name,repo:this.context.selectedRepo}),name:n.namespace.name},{url:(0,h.dI)(h.nB.collectionByRepo,{namespace:n.namespace.name,collection:n.name,repo:this.context.selectedRepo}),name:n.name},{name:s.ag._("Import log")}];return i.createElement(i.Fragment,null,i.createElement(m.X8,{collection:n,params:r,updateParams:function(t){return e.updateParams(t,(function(){return e.loadData(!0)}))},breadcrumbs:u,activeTab:"import-log",repo:this.context.selectedRepo}),i.createElement(m.or,null,i.createElement("section",{className:"body"},i.createElement(m.Fb,{loading:a,task:o,followMessages:!1,setFollowMessages:function(){return null},selectedImport:l,apiError:c,hideCollectionName:!0}))))}},{key:"loadData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=s.ag._("Could not load import log");this.setState({loadingImports:!0},(function(){e.loadCollection(e.context.selectedRepo,t,(function(){p.q3.list({namespace:e.state.collection.namespace.name,name:e.state.collection.name,version:e.state.collection.latest_version.version,sort:"-created"}).then((function(t){var r=t.data.data[0];p.q3.get(r.id).then((function(t){e.setState({apiError:void 0,loadingImports:!1,selectedImport:r,selectedImportDetail:t.data})})).catch((function(){e.setState({apiError:n,loadingImports:!1})}))})).catch((function(){e.setState({apiError:n,loadingImports:!1})}))}))}))}},{key:"loadCollection",get:function(){return d.Y}},{key:"updateParams",get:function(){return f.q.updateParamsMixin()}}]),v}(i.Component);const g=(0,u.withRouter)(y);y.contextType=v.I}}]);
//# sourceMappingURL=collection_detail.1642099311418.c743e992cc7507821540.js.map