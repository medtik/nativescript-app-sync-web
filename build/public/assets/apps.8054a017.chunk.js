webpackJsonp([3],{1151:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(1),s=(o.n(a),o(172)),l=o(25),p=(o.n(l),function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}()),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var l=Array(a),p=0;p<a;p++)l[p]=arguments[p+3];o.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),u=c(s.r,{id:"popover-trigger-focus"},void 0,"只能包含字母和数字"),f=c(s.p.Header,{closeButton:!0},void 0,c(s.p.Title,{},void 0,"Add app")),d=c(s.a,{},void 0,"App name"),v=c(s.d.Feedback,{}),h=c(s.a,{},void 0,"Platform"),y=c("option",{value:""},void 0,"Select platform"),b=c("option",{value:"iOS"},void 0,"iOS"),m=c("option",{value:"Android"},void 0,"Android"),g=c("option",{value:"Windows"},void 0,"Windows"),w=c(s.a,{},void 0,"App framework"),S=c("option",{value:""},void 0,"Select app framework"),_=c("option",{value:"React-Native"},void 0,"React-Native"),O=c("option",{value:"Cordova"},void 0,"Cordova"),P=c("option",{value:"NativeScript"},void 0,"NativeScript 😎"),k=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.close=e.close.bind(e),e.setName=e.setName.bind(e),e.validateName=e.validateName.bind(e),e.setSelect=e.setSelect.bind(e),e.setPlatformSelect=e.setPlatformSelect.bind(e),e.onSubmit=e.onSubmit.bind(e),e}return i(t,e),p(t,[{key:"setPlatformSelect",value:function(e){var t=e.target.value;this.props.input({platform:t})}},{key:"setSelect",value:function(e){var t=e.target.value;this.props.input({os:t})}},{key:"setName",value:function(e){var t=e.target.value;this.props.input({appName:t})}},{key:"validateName",value:function(e){/^\w+$/.test(e)?this.setState({isShowNameError:!1}):this.setState({isShowNameError:!0})}},{key:"onSubmit",value:function(){this.props.isOnSubmiting||this.props.onSubmit()}},{key:"close",value:function(){this.props.close()}},{key:"render",value:function(){return c(s.p,{show:this.props.showModal,onHide:this.close},void 0,f,c(s.p.Body,{},void 0,c(s.c,{style:{display:"inline-block",width:"40%"},validationState:this.props.isShowNameError?"error":null},void 0,d,c(s.s,{trigger:["hover"],placement:"bottom",overlay:u},void 0,c(s.d,{type:"text",onChange:this.setName,value:this.props.appName,autoFocus:!0})),v),c(s.c,{style:{display:"inline-block",width:"20%",paddingLeft:15},validationState:this.props.isShowOSError?"error":null},void 0,h,c(s.d,{componentClass:"select",value:this.props.os,onChange:this.setSelect},void 0,y,b,m,g)),c(s.c,{style:{display:"inline-block",width:"20%",paddingLeft:15},validationState:this.props.isShowPlatformError?"error":null},void 0,w,c(s.d,{componentClass:"select",value:this.props.platform,onChange:this.setPlatformSelect},void 0,S,_,O,P)),c(s.c,{validationState:"error"},void 0,c(s.q,{},void 0,this.props.errorTip))),c(s.p.Footer,{},void 0,c(s.e,{onClick:this.close},void 0,"Close"),c(s.e,{onClick:this.onSubmit,disabled:!!this.props.isOnSubmiting},void 0,"Save")))}}]),t}(a.Component);k.defaultProps={onSubmit:function(e){},isOnSubmiting:!1,close:function(){},input:function(){},errorTip:"",showModal:!1,isShowNameError:!1,isShowOSError:!1,isShowPlatformError:!1,os:"",platform:"",appName:""},t.a=k},1153:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=o(1),s=(o.n(a),o(172)),l=o(7),p=o.n(l),c=o(25),u=o.n(c),f=o(130),d=o.n(f),v=o(1253),h=o.n(v),y=o(252),b=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var l=Array(a),p=0;p<a;p++)l[p]=arguments[p+3];o.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),m=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),g=b("td",{}),w=b(s.n,{},void 0,b(s.n.Item,{active:!0},void 0,"Apps")),S=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.renderRow=e.renderRow.bind(e),e}return i(t,e),m(t,[{key:"renderRow",value:function(e,t){var o=u.a.get(e,"name");return b("tr",{},u.a.get(e,"name"),b("td",{},void 0,b(y.a,{to:"/apps/"+o},void 0,o)),b("td",{style:{textAlign:"left"}},void 0,b("ul",{},void 0,u.a.map(u.a.get(e,"collaborators"),function(e,t){return b("li",{},t,t,b("span",{className:h.a.permission},void 0,"(",b("em",{},void 0,u.a.get(e,"permission")),")"),u.a.get(e,"isCurrentAccount")?b("span",{className:p()(h.a.label,h.a.labelSuccess)},void 0,"it's you"):null)}))),b("td",{},void 0,b("ul",{},void 0,u.a.map(u.a.get(e,"deployments"),function(e,t){return b("li",{style:"Production"===e?{color:"green"}:null},t,b(y.a,{to:"/apps/"+o+"/"+e},void 0,e))}))),g)}},{key:"render",value:function(){var e=this;return b("div",{className:h.a.root},void 0,b("div",{className:h.a.container},void 0,w,b(s.g,{style:{marginBottom:"20px"}},void 0,b(s.e,{onClick:this.props.popAddApp,bsStyle:"primary"},void 0,"Add an app")),b(s.o,{striped:!0,bordered:!0,condensed:!0,hover:!0,responsive:!0},void 0,b("thead",{},void 0,b("tr",{},void 0,b("th",{style:{textAlign:"center"}},void 0,"Name"),b("th",{style:{textAlign:"center"}},void 0,"Member"),b("th",{style:{textAlign:"center"}},void 0,"Deployments"),b("th",{style:{textAlign:"center"}},void 0,"Actions"))),b("tbody",{},void 0,this.props.rs.length>0?u.a.map(this.props.rs,function(t,o){return e.renderRow(t,o)}):b("tr",{},void 0,b("td",{colSpan:"4"},void 0,"No data"))))))}}]),t}(a.Component);S.defaultProps={isFetching:!0,rs:[],popAddApp:function(){}},t.a=d()(h.a)(S)},1160:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return{auth:d.a.get(e,"auth",{}),addProducts:d.a.get(e,"addProducts",{})}}function s(e,t){return{actions:o.i(u.a)(Object.assign({},v,h,y,b),e)}}var l=o(1),p=o.n(l),c=o(127),u=o(89),f=o(25),d=o.n(f),v=o(391),h=o(131),y=o(173),b=o(393),m=o(1151),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},w=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),S=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),w(t,[{key:"componentDidMount",value:function(){if(!d.a.get(this.props,"auth.isAuth")){var e=location.pathname;d.a.isEmpty(location.search)||(e+="?"+location.search),this.props.actions.setBackHistory(e),this.props.actions.fetchAuth(!0)}}},{key:"render",value:function(){var e=this.props,t=e.addProducts,o=e.actions;return p.a.createElement(m.a,g({},t,{input:o.popAddAppInput,close:o.closePopAddApp,onSubmit:function(){var e=d.a.get(t,"appName"),n=d.a.get(t,"os"),r=d.a.get(t,"platform");o.addProducts(e,n,r)}}))}}]),t}(l.Component);S.defaultProps={appName:""},t.a=o.i(c.a)(a,s)(S)},1165:function(e,t,o){t=e.exports=o(128)(),t.push([e.i,"._3AV4k{padding-left:20px;padding-right:20px}._3-pwX{margin:0 auto;padding:0 0 40px;min-height:480px;max-width:1000px}table{font-size:1.2em;width:100%;text-align:center}li{list-style:none}li a{text-decoration:none;color:inherit}._2-yGN{padding-left:10px;padding-right:5px}._3o5bn{padding:2px 4px;font-size:13px;font-style:normal;font-weight:400;display:inline-block;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}._2W088{background-color:#2faa60}._2-yGN em{color:green}",""]),t.locals={root:"_3AV4k",container:"_3-pwX",permission:"_2-yGN",label:"_3o5bn",labelSuccess:"_2W088"}},1253:function(e,t,o){var n=o(1165),r=o(129);"string"==typeof n&&(n=[[e.i,n,""]]),e.exports=n.locals||{},e.exports._getContent=function(){return n},e.exports._getCss=function(){return n.toString()},e.exports._insertCss=function(e){return r(n,e)}},939:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return{auth:f.a.get(e,"auth",{}),products:f.a.get(e,"products",{})}}function s(e,t){return{actions:o.i(c.a)(Object.assign({},d,v,h,y),e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),p=(o.n(l),o(127)),c=o(89),u=o(25),f=o.n(u),d=o(391),v=o(131),h=o(173),y=o(393),b=o(1153),m=o(1160),g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var l=Array(a),p=0;p<a;p++)l[p]=arguments[p+3];o.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),w=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),S=g(m.a,{}),_=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),w(t,[{key:"componentDidMount",value:function(){if(!f.a.get(this.props,"auth.isAuth")){var e=location.pathname;f.a.isEmpty(location.search)||(e+="?"+location.search),this.props.actions.setBackHistory(e),this.props.actions.fetchAuth(!0)}}},{key:"render",value:function(){var e=this.props,t=e.products,o=e.actions;return g("div",{},void 0,S,g(b.a,{isFetching:f.a.get(t,"isFetching"),rs:f.a.get(t,"rs"),popAddApp:o.showPopAddApp}))}}]),t}(l.Component);t.default=o.i(p.a)(a,s)(_)}});