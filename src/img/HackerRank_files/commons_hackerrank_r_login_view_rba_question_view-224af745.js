(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Pg3g:function(t,e,n){"use strict";n.d(e,"j",(function(){return l})),n.d(e,"k",(function(){return b})),n.d(e,"l",(function(){return m})),n.d(e,"i",(function(){return I})),n.d(e,"b",(function(){return O})),n.d(e,"f",(function(){return v})),n.d(e,"d",(function(){return j})),n.d(e,"c",(function(){return k})),n.d(e,"e",(function(){return h})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return q})),n.d(e,"a",(function(){return w})),n.d(e,"n",(function(){return E})),n.d(e,"o",(function(){return C})),n.d(e,"q",(function(){return y})),n.d(e,"p",(function(){return S})),n.d(e,"m",(function(){return P}));n("7VC1"),n("Tze0"),n("pIFo"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F"),n("KKXr");var r=n("E+oP"),u=n.n(r),c=n("qPyV"),o=n.n(c),i=n("cke4"),a=n.n(i),d=n("vmXh"),s=n.n(d),f=n("bSd7"),p=n("EOcb");function l(t){return t===f.e.DATASCIENCE}function b(t){return t===p.v.OFFLINE}function m(t){return t===p.v.ONLINE}function I(t){return t===p.o.CHE7||t===p.o.WORKSPACE_SERVICE}function O(){return".".concat(window.location.hostname.split(".").slice(-2).join("."),";")}function v(t,e){return o()((t||[]).concat(e),"time")}function j(t){if(!Array.isArray(t))return"";var e=t.length-1;return e>=0?t[e].time:""}function k(t,e){var n=t.dockerInfo,r=void 0===n?{}:n;return e?r[e]:r||{}}function h(t){var e=t.commands;return u()(e)?[]:Object.keys(e).reduce((function(t,n){var r=e[n].command;return u()(r)||t.push({label:n,command:r}),t}),[])}function g(t){return u()(t)?{}:t.reduce((function(t,e){var n=e.index,r=e.instruction;return Array.isArray(t[r])||(t[r]=[]),t[r].push("Q".concat(n)),t}),{})}function q(t){return u()(t)||t===p.q.JUPYTER}function w(t,e){var n=a.a.utils.utf8.toBytes(e.slice(-16)),r=a.a.utils.utf8.toBytes(e.slice(0,16)),u=(16-t.length%16)%16,c=t.padEnd(t.length+u," "),o=a.a.utils.utf8.toBytes(c),i=new a.a.ModeOfOperation.cbc(n,r).encrypt(o);return a.a.utils.hex.fromBytes(i)}function E(t,e){return t||l(e)}function C(t,e){return t||l(e)}function y(t){s.a.set(p.l,t,{expires:p.k})}function S(){s.a.remove(p.l)}function P(){return!!s.a.get(p.l)}},bqtk:function(t,e,n){"use strict";n.d(e,"f",(function(){return f})),n.d(e,"o",(function(){return p})),n.d(e,"l",(function(){return l})),n.d(e,"b",(function(){return b})),n.d(e,"i",(function(){return m})),n.d(e,"h",(function(){return I})),n.d(e,"n",(function(){return O})),n.d(e,"k",(function(){return v})),n.d(e,"g",(function(){return j})),n.d(e,"j",(function(){return k})),n.d(e,"c",(function(){return h})),n.d(e,"m",(function(){return w})),n.d(e,"e",(function(){return E})),n.d(e,"d",(function(){return C})),n.d(e,"a",(function(){return y}));n("eM6i"),n("KKXr"),n("DNiP"),n("VRzm"),n("Btvt");var r=n("E+oP"),u=n.n(r),c=n("ZaSc"),o=n("7fp8"),i=n("Pg3g"),a=n("AJT6"),d=n("EOcb");function s(t,e){return Object(i.i)(t)?"".concat(e).concat(d.n):e}function f(t,e,n){return Object(i.m)()||(e===d.r.GIT?Object(i.q)(!0):Object(i.q)(!1)),function(e){return Object(c.f)({url:Object(o.c)("makeAttempt",{testId:t}),ajaxServerConf:n,success:function(t){t.success&&e({type:a.a.TEST.MAKE_ATTEMPT})}})}}function p(t,e,n){return Object(c.d)({url:Object(o.c)("updatePreloginStatusOnServer",{testId:t}),data:e,ajaxServerConf:n})}function l(t,e,n){return Object(c.f)({url:Object(o.c)("retryPrelogin",{testId:t}),data:e,ajaxServerConf:n})}function b(t){return Object(c.b)({noCsrf:!0,url:Object(o.c)("gitLog",{url:t})})}function m(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{commit_message:d.a.SAVE_CODE};return Object(c.e)({url:Object(o.c)("gitPush",{attemptId:t,workspaceUniqueId:e}),data:n})}function I(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{commit_message:d.a.SAVE_CODE};return Object(c.e)({url:Object(o.c)("gitPull",{attemptId:t,workspaceUniqueId:e}),data:n})}function O(t,e,n){return Object(c.g)({url:Object(o.c)("offlineStatus",{attemptId:t,dockerId:e}),data:{offline:n?"true":"false"}})}function v(t,e){return Object(c.e)({url:Object(o.c)("resetUrl",{attemptId:t,workspaceUniqueId:e})})}function j(t){var e=t.attemptId,n=t.questionId,r=t.workspaceUniqueId,u=t.backend,a={attemptId:e,questionId:n};return Object(i.i)(u)&&(a={workspaceUniqueId:r}),Object(c.e)({url:Object(o.c)(s(u,"bootPrepare"),a)})}function k(t){var e=t.attemptId,n=t.questionId,r=t.workspaceUniqueId,u=t.backend,a={attemptId:e,questionId:n},d=t.data;return Object(i.i)(u)&&(a={workspaceUniqueId:r,questionId:n},d={}),Object(c.e)({url:Object(o.c)(s(u,"reboot"),a),data:d})}function h(t){var e=t.attemptId,n=t.questionId,r=t.workspaceUniqueId,u=t.backend,a={attemptId:e,questionId:n};return Object(i.i)(u)&&(a={workspaceUniqueId:r,questionId:n}),Object(c.b)({url:Object(o.c)(s(u,"bootStatus"),a)})}function g(t,e,n){return Object(c.e)({url:Object(o.c)("runTest",{attemptId:t,dockerId:e}),query:{type:"test"},data:{agent_endpoint:n}})}function q(t){return Object(c.e)({url:Object(o.c)("runTestChe7",{workspaceUniqueId:t}),data:{type:"test"}}).then((function(t){return{pid:t.pid,commandLine:t.command}}))}function w(t){var e=t.selectedMode,n=t.attemptId,r=t.workspaceUniqueId,u=t.dockerId,c=t.backend,o=void 0===c?d.o.CHE6:c,a=t.agentEndpoint,s=t.data,f=void 0===s?{commit_message:d.a.RUN_TESTS}:s,p=Object(i.k)(e)?"pullCodeFromServer":"pushCodeToServer";return S[p](n,r,f).then((function(t){return t.exitCode===d.D?Object(i.i)(o)?q(r):g(n,u,a):Promise.reject({message:JSON.stringify({stderr:t.log})})}))}function E(t){var e=t.attemptId,n=t.workspaceUniqueId,r=t.processId,u=t.backend,a=void 0===u?d.o.CHE6:u,f={agent_endpoint:t.agentEndpoint},p={attemptId:e,workspaceUniqueId:n,processId:r};return Object(i.i)(a)&&(f={pid:r},p={workspaceUniqueId:n}),Object(c.b)({url:Object(o.c)(s(a,"runTestPid"),p),data:f})}function C(t){var e=t.attemptId,n=t.workspaceUniqueId,r=t.processId,a=t.backend,d={agent_endpoint:t.agentEndpoint,from:t.fromTimestamp},f={attemptId:e,workspaceUniqueId:n,processId:r};return Object(i.i)(a)&&(d={pid:r},f={workspaceUniqueId:n}),Object(c.b)({url:Object(o.c)(s(a,"runTestLogs"),f),data:d,headers:Object(i.i)(a)?{Accept:"text/html"}:{}}).then((function(t){return Object(i.i)(a)?t.split("\n").reduce((function(t,e,n){return u()(e)||t.push({kind:0,time:Date.now()+n,text:e}),t}),[]):t}))}function y(t,e,n){return Object(c.a)({url:Object(o.c)("clearKeyCloak",{attemptId:t,username:n,context:e}),noCsrf:!0})}var S={pushCodeToServer:m,pullCodeFromServer:I,runTestChe6:g,runTestChe7:q,getEndpointForBackend:s}},eEux:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n("a1Th"),n("h7Nl"),n("Btvt"),n("I5cv");var r=n("lwsE"),u=n.n(r),c=n("W8MJ"),o=n.n(c),i=n("PJYZ"),a=n.n(i),d=n("7W2i"),s=n.n(d),f=n("a1gu"),p=n.n(f),l=n("Nsbk"),b=n.n(l),m=n("lSNA"),I=n.n(m),O=n("cDcd"),v=n.n(O),j=n("HfZf");function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b()(t);if(e){var u=b()(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return p()(this,n)}}var h=function(t){s()(n,t);var e=k(n);function n(){var t;u()(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return t=e.call.apply(e,[this].concat(c)),I()(a()(t),"handleLinkClick",(function(e){var n=t.props.onClick;if(n&&n(e),!e.defaultPrevented){var r=e.target;"a"===r.tagName.toLowerCase()&&(e.preventDefault(),window.open(r.href,"_blank"))}})),t}return o()(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.html,r=t.className,u={onClick:this.handleLinkClick};r&&(u.className=r);var c={html:n};return e&&(c.id=e),v.a.createElement("div",u,v.a.createElement(j.a,c))}}]),n}(O.PureComponent);I()(h,"defaultProps",{className:""})}}]);
//# sourceMappingURL=https://hrcdn.net/candidate-site/assets/sourcemaps/commons~hackerrank_r_login_view~rba_question_view-224af745.js.map