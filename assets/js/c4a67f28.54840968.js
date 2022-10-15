"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[380],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),b=a,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},l="Vanilla JS",i={unversionedId:"web/frontend/vanillaJs/intro",id:"web/frontend/vanillaJs/intro",title:"Vanilla JS",description:"MDN \uc0ac\uc774\ud2b8\uc758 \uc124\uba85, \uc5ec\ub7ec \uc790\ub8cc\ub4e4\uc744 \ucc3e\uc544\ubcf4\uba70 \ub354 \uc88b\uc740 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud558\ub294\uc9c0 Web \uc2ec\ud654\uacfc\uc815\uc744 \uacf5\ubd80\ud558\uace0",source:"@site/docs/web/frontend/vanillaJs/intro.md",sourceDirName:"web/frontend/vanillaJs",slug:"/web/frontend/vanillaJs/intro",permalink:"/docs/web/frontend/vanillaJs/intro",draft:!1,editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/docs/web/frontend/vanillaJs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tilSidebar",previous:{title:"Angular vs. React vs. Vue",permalink:"/docs/web/frontend/angular_vs_react_vs_vue"},next:{title:"Web Advanced",permalink:"/docs/web/frontend/vanillaJs/webadvanced"}},c={},s=[{value:"Web Advanced",id:"web-advanced",level:2},{value:"Web APIs",id:"web-apis",level:2},{value:"Vanilla JS Basic",id:"vanilla-js-basic",level:2},{value:"\uae30\ub2a5 \uad6c\ud604",id:"\uae30\ub2a5-\uad6c\ud604",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vanilla-js"},"Vanilla JS"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"MDN \uc0ac\uc774\ud2b8\uc758 \uc124\uba85, \uc5ec\ub7ec \uc790\ub8cc\ub4e4\uc744 \ucc3e\uc544\ubcf4\uba70 \ub354 \uc88b\uc740 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud558\ub294\uc9c0 Web \uc2ec\ud654\uacfc\uc815\uc744 \uacf5\ubd80\ud558\uace0"),(0,a.kt)("p",{parentName:"blockquote"},"Dream Coding Academy ",(0,a.kt)("a",{parentName:"p",href:"https://academy.dream-coding.com/courses/take/browser101"},"\ud504\ub860\ud2b8\uc5d4\ub4dc \ud544\uc218 \ube0c\ub77c\uc6b0\uc800 101 \uac15\uc758"),"\ub97c \ub4e4\uc73c\uba70 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub300\ud574 \uc774\ud574\ud558\uace0 WEB APIs, DOM, Render Tree, Events, Refactoring, Event Loop\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf8\ub2e4.")),(0,a.kt)("h2",{id:"web-advanced"},"Web Advanced"),(0,a.kt)("p",null,"HTML\uc744 \uc880 \ub354 \uc9c1\uad00\uc801\uc73c\ub85c \uc54c \uc218 \uc788\uac8c \ud45c\ud604\ud574\uc8fc\ub294 Semantic Tag\nCSS Flexbox\ud83d\udc38 \ud65c\uc6a9\ud558\uae30\nVanilla JS\ub85c \uad6c\ud604\ud558\ub294 \ubb34\ud55c \uc2a4\ud06c\ub864, Carousel, Modal, Drag & Drop \ub4f1\n\uae30\ub2a5 \uad6c\ud604\uc5d0\uc11c \ub05d\ub098\uc9c0 \uc54a\uace0 \ub354 \uc88b\uc740 \ucf54\ub4dc\ub97c \uc9dc\uae30\uc704\ud574\uc11c\ub294 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud558\ub294 \uc9c0 \uc54c\uc544\ubcf4\uc790."),(0,a.kt)("h2",{id:"web-apis"},"Web APIs"),(0,a.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc640 \ud50c\ub81b\ud3fc\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 API\uc5d0 \ub300\ud574\uc11c \uc815\ud655\ud558\uac8c \uc774\ud574\ud558\uace0 \uc62c\ubc14\ub974\uac8c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \u2714\ufe0f\ub9e4\uc6b0 \uc911\uc694\ud558\ub2e4.\nAPI\ub780 \ubb34\uc5c7\uc778\uc9c0, \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Web APIs\ub294 \ubb34\uc5c7\uc774\uace0 \uc5b4\ub5a4 \uac83\ub4e4\uc774 \uc788\ub294\uc9c0 \uacf5\ubd80\ud574\ubcf4\uc790."),(0,a.kt)("h2",{id:"vanilla-js-basic"},"Vanilla JS Basic"),(0,a.kt)("p",null,"Template \ud504\ub85c\uc81d\ud2b8\ub97c \ud1b5\ud55c \uae30\ubcf8\uc801\uc778 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ubc29\ubc95\uacfc\n\ud568\uc218\ud615, OOP \ubc29\uc2dd\uc758 \uac1c\ubc1c \ubc29\ubc95\uc744 \ub530\ub77c\ud574\ubcf4\uba70 JS\ub97c \ud1b5\ud55c \ud504\ub85c\uc81d\ud2b8 \uac1c\ubc1c \ubc29\ubc95\uc744 \ubc30\uc6b0\uc790"),(0,a.kt)("h2",{id:"\uae30\ub2a5-\uad6c\ud604"},"\uae30\ub2a5 \uad6c\ud604"),(0,a.kt)("p",null,"Modal, Carousel, Drag & Drop\ub4f1 \uc5ec\ub7ec \uae30\ub2a5\ub4e4\uc744 OOP\uc640 Functional \ubc29\uc2dd\uc73c\ub85c \uc9c1\uc811 \uad6c\ud604\ud574\ubcf4\uba70\nVanilla JS\uc758 \uc0ac\uc6a9\ubc95\uc744 \uc775\ud600\ubcf8 \uc790\ub8cc"))}u.isMDXComponent=!0}}]);