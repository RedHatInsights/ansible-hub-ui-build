(self.webpackChunkansible_hub_ui=self.webpackChunkansible_hub_ui||[]).push([[456],{5826:n=>{n.exports=Array.isArray||function(n){return"[object Array]"==Object.prototype.toString.call(n)}},14779:(n,t,e)=>{var r=e(5826);n.exports=function n(t,e,o){return r(e)||(o=e||o,e=[]),o=o||{},t instanceof RegExp?function(n,t){var e=n.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(n,t)}(t,e):r(t)?function(t,e,r){for(var o=[],i=0;i<t.length;i++)o.push(n(t[i],e,r).source);return l(new RegExp("(?:"+o.join("|")+")",f(r)),e)}(t,e,o):function(n,t,e){return h(i(n,e),t,e)}(t,e,o)},n.exports.parse=i,n.exports.compile=function(n,t){return c(i(n,t),t)},n.exports.tokensToFunction=c,n.exports.tokensToRegExp=h;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(n,t){for(var e,r=[],i=0,a=0,c="",l=t&&t.delimiter||"/";null!=(e=o.exec(n));){var f=e[0],h=e[1],p=e.index;if(c+=n.slice(a,p),a=p+f.length,h)c+=h[1];else{var d=n[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],x=e[7];c&&(r.push(c),c="");var b=null!=v&&null!=d&&d!==v,E="+"===w||"*"===w,C="?"===w||"*"===w,P=e[2]||l,k=y||g;r.push({name:m||i++,prefix:v||"",delimiter:P,optional:C,repeat:E,partial:b,asterisk:!!x,pattern:k?s(k):x?".*":"[^"+u(P)+"]+?"})}}return a<n.length&&(c+=n.substr(a)),c&&r.push(c),r}function a(n){return encodeURI(n).replace(/[\/?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()}))}function c(n,t){for(var e=new Array(n.length),o=0;o<n.length;o++)"object"==typeof n[o]&&(e[o]=new RegExp("^(?:"+n[o].pattern+")$",f(t)));return function(t,o){for(var i="",c=t||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<n.length;s++){var l=n[s];if("string"!=typeof l){var f,h=c[l.name];if(null==h){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(f=u(h[p]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===p?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(h).replace(/[?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})):u(h),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function l(n,t){return n.keys=t,n}function f(n){return n&&n.sensitive?"":"i"}function h(n,t,e){r(t)||(e=t||e,t=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<n.length;c++){var s=n[c];if("string"==typeof s)a+=u(s);else{var h=u(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+h+p+")*"),a+=p=s.optional?s.partial?h+"("+p+")?":"(?:"+h+"("+p+"))?":h+"("+p+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(e)),t)}},10456:(n,t,e)=>{"use strict";e.r(t),e.d(t,{BrowserRouter:()=>xn,HashRouter:()=>bn,Link:()=>Rn,MemoryRouter:()=>G,NavLink:()=>Ln,Prompt:()=>Q,Redirect:()=>tn,Route:()=>an,Router:()=>J,StaticRouter:()=>hn,Switch:()=>pn,generatePath:()=>nn,matchPath:()=>on,useHistory:()=>mn,useLocation:()=>yn,useParams:()=>gn,useRouteMatch:()=>wn,withRouter:()=>dn});var r=e(89611);function o(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,(0,r.Z)(n,t)}var i=e(30624),a=e.n(i),c=e(45697),u=e.n(c),s=e(87462);function l(n){return"/"===n.charAt(0)}function f(n,t){for(var e=t,r=e+1,o=n.length;r<o;e+=1,r+=1)n[e]=n[r];n.pop()}function h(n){return n.valueOf?n.valueOf():Object.prototype.valueOf.call(n)}const p=function n(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((function(t,r){return n(t,e[r])}));if("object"==typeof t||"object"==typeof e){var r=h(t),o=h(e);return r!==t||o!==e?n(r,o):Object.keys(Object.assign({},t,e)).every((function(r){return n(t[r],e[r])}))}return!1};function d(n,t){if(!n)throw new Error("Invariant failed")}function v(n){return"/"===n.charAt(0)?n:"/"+n}function m(n){return"/"===n.charAt(0)?n.substr(1):n}function y(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function g(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function w(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function x(n,t,e,r){var o;"string"==typeof n?(o=function(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}(n),o.state=t):(void 0===(o=(0,s.Z)({},n)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(n,t){void 0===t&&(t="");var e,r=n&&n.split("/")||[],o=t&&t.split("/")||[],i=n&&l(n),a=t&&l(t),c=i||a;if(n&&l(n)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];e="."===u||".."===u||""===u}else e=!1;for(var s=0,h=o.length;h>=0;h--){var p=o[h];"."===p?f(o,h):".."===p?(f(o,h),s++):s&&(f(o,h),s--)}if(!c)for(;s--;s)o.unshift("..");!c||""===o[0]||o[0]&&l(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function b(){var n=null,t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var E=!("undefined"==typeof window||!window.document||!window.document.createElement);function C(n,t){t(window.confirm(n))}var P="popstate",k="hashchange";function A(){try{return window.history.state||{}}catch(n){return{}}}function R(n){void 0===n&&(n={}),E||d(!1);var t,e=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=n,a=i.forceRefresh,c=void 0!==a&&a,u=i.getUserConfirmation,l=void 0===u?C:u,f=i.keyLength,h=void 0===f?6:f,p=n.basename?g(v(n.basename)):"";function m(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return p&&(i=y(i,p)),x(i,r,e)}function R(){return Math.random().toString(36).substr(2,h)}var O=b();function T(n){(0,s.Z)($,n),$.length=e.length,O.notifyListeners($.location,$.action)}function L(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||S(m(n.state))}function U(){S(m(A()))}var M=!1;function S(n){M?(M=!1,T()):O.confirmTransitionTo(n,"POP",l,(function(t){t?T({action:"POP",location:n}):function(n){var t=$.location,e=Z.indexOf(t.key);-1===e&&(e=0);var r=Z.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(M=!0,B(o))}(n)}))}var _=m(A()),Z=[_.key];function j(n){return p+w(n)}function B(n){e.go(n)}var H=0;function I(n){1===(H+=n)&&1===n?(window.addEventListener(P,L),o&&window.addEventListener(k,U)):0===H&&(window.removeEventListener(P,L),o&&window.removeEventListener(k,U))}var N=!1,$={length:e.length,action:"POP",location:_,createHref:j,push:function(n,t){var o="PUSH",i=x(n,t,R(),$.location);O.confirmTransitionTo(i,o,l,(function(n){if(n){var t=j(i),a=i.key,u=i.state;if(r)if(e.pushState({key:a,state:u},null,t),c)window.location.href=t;else{var s=Z.indexOf($.location.key),l=Z.slice(0,s+1);l.push(i.key),Z=l,T({action:o,location:i})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",i=x(n,t,R(),$.location);O.confirmTransitionTo(i,o,l,(function(n){if(n){var t=j(i),a=i.key,u=i.state;if(r)if(e.replaceState({key:a,state:u},null,t),c)window.location.replace(t);else{var s=Z.indexOf($.location.key);-1!==s&&(Z[s]=i.key),T({action:o,location:i})}else window.location.replace(t)}}))},go:B,goBack:function(){B(-1)},goForward:function(){B(1)},block:function(n){void 0===n&&(n=!1);var t=O.setPrompt(n);return N||(I(1),N=!0),function(){return N&&(N=!1,I(-1)),t()}},listen:function(n){var t=O.appendListener(n);return I(1),function(){I(-1),t()}}};return $}var O="hashchange",T={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+m(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:m,decodePath:v},slash:{encodePath:v,decodePath:v}};function L(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function U(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function M(n){window.location.replace(L(window.location.href)+"#"+n)}function S(n){void 0===n&&(n={}),E||d(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),r=e.getUserConfirmation,o=void 0===r?C:r,i=e.hashType,a=void 0===i?"slash":i,c=n.basename?g(v(n.basename)):"",u=T[a],l=u.encodePath,f=u.decodePath;function h(){var n=f(U());return c&&(n=y(n,c)),x(n)}var p=b();function m(n){(0,s.Z)(N,n),N.length=t.length,p.notifyListeners(N.location,N.action)}var P=!1,k=null;function A(){var n,t,e=U(),r=l(e);if(e!==r)M(r);else{var i=h(),a=N.location;if(!P&&(t=i,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(k===w(i))return;k=null,function(n){if(P)P=!1,m();else{p.confirmTransitionTo(n,"POP",o,(function(t){t?m({action:"POP",location:n}):function(n){var t=N.location,e=Z.lastIndexOf(w(t));-1===e&&(e=0);var r=Z.lastIndexOf(w(n));-1===r&&(r=0);var o=e-r;o&&(P=!0,j(o))}(n)}))}}(i)}}var R=U(),S=l(R);R!==S&&M(S);var _=h(),Z=[w(_)];function j(n){t.go(n)}var B=0;function H(n){1===(B+=n)&&1===n?window.addEventListener(O,A):0===B&&window.removeEventListener(O,A)}var I=!1,N={length:t.length,action:"POP",location:_,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=L(window.location.href)),e+"#"+l(c+w(n))},push:function(n,t){var e="PUSH",r=x(n,void 0,void 0,N.location);p.confirmTransitionTo(r,e,o,(function(n){if(n){var t=w(r),o=l(c+t);if(U()!==o){k=t,function(n){window.location.hash=n}(o);var i=Z.lastIndexOf(w(N.location)),a=Z.slice(0,i+1);a.push(t),Z=a,m({action:e,location:r})}else m()}}))},replace:function(n,t){var e="REPLACE",r=x(n,void 0,void 0,N.location);p.confirmTransitionTo(r,e,o,(function(n){if(n){var t=w(r),o=l(c+t);U()!==o&&(k=t,M(o));var i=Z.indexOf(w(N.location));-1!==i&&(Z[i]=t),m({action:e,location:r})}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(n){void 0===n&&(n=!1);var t=p.setPrompt(n);return I||(H(1),I=!0),function(){return I&&(I=!1,H(-1)),t()}},listen:function(n){var t=p.appendListener(n);return H(1),function(){H(-1),t()}}};return N}function _(n,t,e){return Math.min(Math.max(n,t),e)}function Z(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,r=t.initialEntries,o=void 0===r?["/"]:r,i=t.initialIndex,a=void 0===i?0:i,c=t.keyLength,u=void 0===c?6:c,l=b();function f(n){(0,s.Z)(y,n),y.length=y.entries.length,l.notifyListeners(y.location,y.action)}function h(){return Math.random().toString(36).substr(2,u)}var p=_(a,0,o.length-1),d=o.map((function(n){return x(n,void 0,"string"==typeof n?h():n.key||h())})),v=w;function m(n){var t=_(y.index+n,0,y.entries.length-1),r=y.entries[t];l.confirmTransitionTo(r,"POP",e,(function(n){n?f({action:"POP",location:r,index:t}):f()}))}var y={length:d.length,action:"POP",location:d[p],index:p,entries:d,createHref:v,push:function(n,t){var r="PUSH",o=x(n,t,h(),y.location);l.confirmTransitionTo(o,r,e,(function(n){if(n){var t=y.index+1,e=y.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),f({action:r,location:o,index:t,entries:e})}}))},replace:function(n,t){var r="REPLACE",o=x(n,t,h(),y.location);l.confirmTransitionTo(o,r,e,(function(n){n&&(y.entries[y.index]=o,f({action:r,location:o}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(n){var t=y.index+n;return t>=0&&t<y.entries.length},block:function(n){return void 0===n&&(n=!1),l.setPrompt(n)},listen:function(n){return l.appendListener(n)}};return y}var j=e(14779),B=e.n(j),H=(e(59864),e(63366)),I=e(8679),N=e.n(I),$=1073741823,W="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function D(n){var t=[];return{on:function(n){t.push(n)},off:function(n){t=t.filter((function(t){return t!==n}))},get:function(){return n},set:function(e,r){n=e,t.forEach((function(t){return t(n,r)}))}}}var F=a().createContext||function(n,t){var e,r,i,c="__create-react-context-"+((W[i="__global_unique_id__"]=(W[i]||0)+1)+"__"),s=function(n){function e(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).emitter=D(t.props.value),t}o(e,n);var r=e.prototype;return r.getChildContext=function(){var n;return(n={})[c]=this.emitter,n},r.componentWillReceiveProps=function(n){if(this.props.value!==n.value){var e,r=this.props.value,o=n.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof t?t(r,o):$,0!=(e|=0)&&this.emitter.set(n.value,e))}var i,a},r.render=function(){return this.props.children},e}(a().Component);s.childContextTypes=((e={})[c]=u().object.isRequired,e);var l=function(t){function e(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).observedBits=void 0,n.state={value:n.getValue()},n.onUpdate=function(t,e){0!=((0|n.observedBits)&e)&&n.setState({value:n.getValue()})},n}o(e,t);var r=e.prototype;return r.componentWillReceiveProps=function(n){var t=n.observedBits;this.observedBits=null==t?$:t},r.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var n=this.props.observedBits;this.observedBits=null==n?$:n},r.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},r.getValue=function(){return this.context[c]?this.context[c].get():n},r.render=function(){return(n=this.props.children,Array.isArray(n)?n[0]:n)(this.state.value);var n},e}(a().Component);return l.contextTypes=((r={})[c]=u().object,r),{Provider:s,Consumer:l}},K=function(n){var t=F();return t.displayName=n,t},V=K("Router-History"),q=K("Router"),J=function(n){function t(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen((function(n){e._pendingLocation=n}))),e}o(t,n),t.computeRootMatch=function(n){return{path:"/",url:"/",params:{},isExact:"/"===n}};var e=t.prototype;return e.componentDidMount=function(){var n=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(t){n._isMounted&&n.setState({location:t})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return a().createElement(q.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a().createElement(V.Provider,{children:this.props.children||null,value:this.props.history}))},t}(a().Component),G=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=Z(t.props),t}return o(t,n),t.prototype.render=function(){return a().createElement(J,{history:this.history,children:this.props.children})},t}(a().Component),z=function(n){function t(){return n.apply(this,arguments)||this}o(t,n);var e=t.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(n){this.props.onUpdate&&this.props.onUpdate.call(this,this,n)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},t}(a().Component);function Q(n){var t=n.message,e=n.when,r=void 0===e||e;return a().createElement(q.Consumer,null,(function(n){if(n||d(!1),!r||n.staticContext)return null;var e=n.history.block;return a().createElement(z,{onMount:function(n){n.release=e(t)},onUpdate:function(n,r){r.message!==t&&(n.release(),n.release=e(t))},onUnmount:function(n){n.release()},message:t})}))}var X={},Y=0;function nn(n,t){return void 0===n&&(n="/"),void 0===t&&(t={}),"/"===n?n:function(n){if(X[n])return X[n];var t=B().compile(n);return Y<1e4&&(X[n]=t,Y++),t}(n)(t,{pretty:!0})}function tn(n){var t=n.computedMatch,e=n.to,r=n.push,o=void 0!==r&&r;return a().createElement(q.Consumer,null,(function(n){n||d(!1);var r=n.history,i=n.staticContext,c=o?r.push:r.replace,u=x(t?"string"==typeof e?nn(e,t.params):(0,s.Z)({},e,{pathname:nn(e.pathname,t.params)}):e);return i?(c(u),null):a().createElement(z,{onMount:function(){c(u)},onUpdate:function(n,t){var e,r,o=x(t.to);e=o,r=(0,s.Z)({},u,{key:o.key}),e.pathname===r.pathname&&e.search===r.search&&e.hash===r.hash&&e.key===r.key&&p(e.state,r.state)||c(u)},to:e})}))}var en={},rn=0;function on(n,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var e=t,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,e){if(!e&&""!==e)return null;if(t)return t;var r=function(n,t){var e=""+t.end+t.strict+t.sensitive,r=en[e]||(en[e]={});if(r[n])return r[n];var o=[],i={regexp:B()(n,o,t),keys:o};return rn<1e4&&(r[n]=i,rn++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(n);if(!u)return null;var l=u[0],f=u.slice(1),h=n===l;return i&&!h?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:h,params:a.reduce((function(n,t,e){return n[t.name]=f[e],n}),{})}}),null)}var an=function(n){function t(){return n.apply(this,arguments)||this}return o(t,n),t.prototype.render=function(){var n=this;return a().createElement(q.Consumer,null,(function(t){t||d(!1);var e=n.props.location||t.location,r=n.props.computedMatch?n.props.computedMatch:n.props.path?on(e.pathname,n.props):t.match,o=(0,s.Z)({},t,{location:e,match:r}),i=n.props,c=i.children,u=i.component,l=i.render;return Array.isArray(c)&&function(n){return 0===a().Children.count(n)}(c)&&(c=null),a().createElement(q.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:u?a().createElement(u,o):l?l(o):null:"function"==typeof c?c(o):null)}))},t}(a().Component);function cn(n){return"/"===n.charAt(0)?n:"/"+n}function un(n,t){if(!n)return t;var e=cn(n);return 0!==t.pathname.indexOf(e)?t:(0,s.Z)({},t,{pathname:t.pathname.substr(e.length)})}function sn(n){return"string"==typeof n?n:w(n)}function ln(n){return function(){d(!1)}}function fn(){}var hn=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).handlePush=function(n){return t.navigateTo(n,"PUSH")},t.handleReplace=function(n){return t.navigateTo(n,"REPLACE")},t.handleListen=function(){return fn},t.handleBlock=function(){return fn},t}o(t,n);var e=t.prototype;return e.navigateTo=function(n,t){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,a=void 0===i?{}:i;a.action=t,a.location=function(n,t){return n?(0,s.Z)({},t,{pathname:cn(n)+t.pathname}):t}(o,x(n)),a.url=sn(a.location)},e.render=function(){var n=this.props,t=n.basename,e=void 0===t?"":t,r=n.context,o=void 0===r?{}:r,i=n.location,c=void 0===i?"/":i,u=(0,H.Z)(n,["basename","context","location"]),l={createHref:function(n){return cn(e+sn(n))},action:"POP",location:un(e,x(c)),push:this.handlePush,replace:this.handleReplace,go:ln(),goBack:ln(),goForward:ln(),listen:this.handleListen,block:this.handleBlock};return a().createElement(J,(0,s.Z)({},u,{history:l,staticContext:o}))},t}(a().Component),pn=function(n){function t(){return n.apply(this,arguments)||this}return o(t,n),t.prototype.render=function(){var n=this;return a().createElement(q.Consumer,null,(function(t){t||d(!1);var e,r,o=n.props.location||t.location;return a().Children.forEach(n.props.children,(function(n){if(null==r&&a().isValidElement(n)){e=n;var i=n.props.path||n.props.from;r=i?on(o.pathname,(0,s.Z)({},n.props,{path:i})):t.match}})),r?a().cloneElement(e,{location:o,computedMatch:r}):null}))},t}(a().Component);function dn(n){var t="withRouter("+(n.displayName||n.name)+")",e=function(t){var e=t.wrappedComponentRef,r=(0,H.Z)(t,["wrappedComponentRef"]);return a().createElement(q.Consumer,null,(function(t){return t||d(!1),a().createElement(n,(0,s.Z)({},r,t,{ref:e}))}))};return e.displayName=t,e.WrappedComponent=n,N()(e,n)}var vn=a().useContext;function mn(){return vn(V)}function yn(){return vn(q).location}function gn(){var n=vn(q).match;return n?n.params:{}}function wn(n){var t=yn(),e=vn(q).match;return n?on(t.pathname,n):e}var xn=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=R(t.props),t}return o(t,n),t.prototype.render=function(){return a().createElement(J,{history:this.history,children:this.props.children})},t}(a().Component),bn=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=S(t.props),t}return o(t,n),t.prototype.render=function(){return a().createElement(J,{history:this.history,children:this.props.children})},t}(a().Component),En=function(n,t){return"function"==typeof n?n(t):n},Cn=function(n,t){return"string"==typeof n?x(n,null,null,t):n},Pn=function(n){return n},kn=a().forwardRef;void 0===kn&&(kn=Pn);var An=kn((function(n,t){var e=n.innerRef,r=n.navigate,o=n.onClick,i=(0,H.Z)(n,["innerRef","navigate","onClick"]),c=i.target,u=(0,s.Z)({},i,{onClick:function(n){try{o&&o(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||c&&"_self"!==c||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return u.ref=Pn!==kn&&t||e,a().createElement("a",u)})),Rn=kn((function(n,t){var e=n.component,r=void 0===e?An:e,o=n.replace,i=n.to,c=n.innerRef,u=(0,H.Z)(n,["component","replace","to","innerRef"]);return a().createElement(q.Consumer,null,(function(n){n||d(!1);var e=n.history,l=Cn(En(i,n.location),n.location),f=l?e.createHref(l):"",h=(0,s.Z)({},u,{href:f,navigate:function(){var t=En(i,n.location),r=w(n.location)===w(Cn(t));(o||r?e.replace:e.push)(t)}});return Pn!==kn?h.ref=t||c:h.innerRef=c,a().createElement(r,h)}))})),On=function(n){return n},Tn=a().forwardRef;void 0===Tn&&(Tn=On);var Ln=Tn((function(n,t){var e=n["aria-current"],r=void 0===e?"page":e,o=n.activeClassName,i=void 0===o?"active":o,c=n.activeStyle,u=n.className,l=n.exact,f=n.isActive,h=n.location,p=n.sensitive,v=n.strict,m=n.style,y=n.to,g=n.innerRef,w=(0,H.Z)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(q.Consumer,null,(function(n){n||d(!1);var e=h||n.location,o=Cn(En(y,e),e),x=o.pathname,b=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=b?on(e.pathname,{path:b,exact:l,sensitive:p,strict:v}):null,C=!!(f?f(E,e):E),P="function"==typeof u?u(C):u,k="function"==typeof m?m(C):m;C&&(P=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(P,i),k=(0,s.Z)({},k,c));var A=(0,s.Z)({"aria-current":C&&r||null,className:P,style:k,to:o},w);return On!==Tn?A.ref=t||g:A.innerRef=g,a().createElement(Rn,A)}))}))}}]);
//# sourceMappingURL=456.1668518623414.61b55ad5f704fda8158f.js.map