/*! For license information please see 4404.cec4a994.js.LICENSE.txt */
(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[4404],{8770:(t,n,e)=>{"use strict";e.d(n,{ul:()=>u});var o=e(6540),r="https://platform.twitter.com/widgets.js",i="createTweet",u=function(t){var n=o.useRef(null),u=o.useState(!0),c=u[0],a=u[1];return o.useEffect((function(){var o=!0;return e(2491)(r,"twitter-embed",(function(){if(window.twttr){if(o){if(!window.twttr.widgets[i])return void console.error("Method "+i+" is not present anymore in twttr.widget api");window.twttr.widgets[i](t.tweetId,null==n?void 0:n.current,t.options).then((function(n){a(!1),t.onLoad&&t.onLoad(n)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){o=!1}}),[]),o.createElement(o.Fragment,null,c&&o.createElement(o.Fragment,null,t.placeholder),o.createElement("div",{ref:n}))}},2491:(t,n,e)=>{var o,r,i;i=function(){var t,n,e=document,o=e.getElementsByTagName("head")[0],r=!1,i="push",u="readyState",c="onreadystatechange",a={},l={},f={},s={};function d(t,n){for(var e=0,o=t.length;e<o;++e)if(!n(t[e]))return r;return 1}function p(t,n){d(t,(function(t){return n(t),1}))}function m(n,e,o){n=n[i]?n:[n];var r=e&&e.call,u=r?e:o,c=r?n.join(""):e,h=n.length;function v(t){return t.call?t():a[t]}function g(){if(! --h)for(var t in a[c]=1,u&&u(),f)d(t.split("|"),v)&&!p(f[t],v)&&(f[t]=[])}return setTimeout((function(){p(n,(function n(e,o){return null===e?g():(o||/^https?:\/\//.test(e)||!t||(e=-1===e.indexOf(".js")?t+e+".js":t+e),s[e]?(c&&(l[c]=1),2==s[e]?g():setTimeout((function(){n(e,!0)}),0)):(s[e]=1,c&&(l[c]=1),void w(e,g)))}))}),0),m}function w(t,r){var i,a=e.createElement("script");a.onload=a.onerror=a[c]=function(){a[u]&&!/^c|loade/.test(a[u])||i||(a.onload=a[c]=null,i=1,s[t]=2,r())},a.async=1,a.src=n?t+(-1===t.indexOf("?")?"?":"&")+n:t,o.insertBefore(a,o.lastChild)}return m.get=w,m.order=function(t,n,e){!function o(r){r=t.shift(),t.length?m(r,o):m(r,n,e)}()},m.path=function(n){t=n},m.urlArgs=function(t){n=t},m.ready=function(t,n,e){t=t[i]?t:[t];var o,r=[];return!p(t,(function(t){a[t]||r[i](t)}))&&d(t,(function(t){return a[t]}))?n():(o=t.join("|"),f[o]=f[o]||[],f[o][i](n),e&&e(r)),m},m.done=function(t){m([null],t)},m},t.exports?t.exports=i():void 0===(r="function"==typeof(o=i)?o.call(n,e,n,t):o)||(t.exports=r)},8453:(t,n,e)=>{"use strict";e.d(n,{R:()=>u,x:()=>c});var o=e(6540);const r={},i=o.createContext(r);function u(t){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:u(t.components),o.createElement(i.Provider,{value:n},t.children)}}}]);