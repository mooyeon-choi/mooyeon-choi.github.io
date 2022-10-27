"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[6409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),k=l,d=s["".concat(o,".").concat(k)]||s[k]||c[k]||r;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={slug:"how to start vue.js",title:"Vue.js \uc2dc\uc791\ud558\uae30",authors:"mylog",tags:["Vuejs","frontend"]},i="How to start Vue.js",p={permalink:"/blog/how to start vue.js",editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/blog/2022-10-28-howtostartvue.md",source:"@site/blog/2022-10-28-howtostartvue.md",title:"Vue.js \uc2dc\uc791\ud558\uae30",description:"\ubaa9\ucc28",date:"2022-10-28T00:00:00.000Z",formattedDate:"2022\ub144 10\uc6d4 28\uc77c",tags:[{label:"Vuejs",permalink:"/blog/tags/vuejs"},{label:"frontend",permalink:"/blog/tags/frontend"}],readingTime:5.615,hasTruncateMarker:!0,authors:[{name:"Mooyeon Choi",url:"https://github.com/mooyeon-choi",imageURL:"https://github.com/mooyeon-choi.png",key:"mylog"}],frontMatter:{slug:"how to start vue.js",title:"Vue.js \uc2dc\uc791\ud558\uae30",authors:"mylog",tags:["Vuejs","frontend"]},nextItem:{title:"Vue.js Basic",permalink:"/blog/Vuejs basic"}},o={authorsImageUrls:[void 0]},u=[{value:"\ubaa9\ucc28",id:"\ubaa9\ucc28",level:2},{value:"\ud544\uc694\ud55c \ud234 \uc124\uce58",id:"\ud544\uc694\ud55c-\ud234-\uc124\uce58",level:2},{value:"node.js",id:"nodejs",level:3},{value:"Vue \uac1c\ubc1c\ud658\uacbd \ub9cc\ub4e4\uae30",id:"vue-\uac1c\ubc1c\ud658\uacbd-\ub9cc\ub4e4\uae30",level:2},{value:"<code>package.json</code> \ud30c\uc77c \uc0dd\uc131",id:"packagejson-\ud30c\uc77c-\uc0dd\uc131",level:3},{value:"Vue \uc124\uce58",id:"vue-\uc124\uce58",level:3},{value:"Webpack \uc124\uce58",id:"webpack-\uc124\uce58",level:3},{value:"webpack.config.js \ud30c\uc77c \uc0dd\uc131",id:"webpackconfigjs-\ud30c\uc77c-\uc0dd\uc131",level:3},{value:"main.js \uc0dd\uc131",id:"mainjs-\uc0dd\uc131",level:3},{value:"App.vue \uc0dd\uc131",id:"appvue-\uc0dd\uc131",level:3},{value:"Vue \ud30c\uc77c\ub4e4\uc744 \ubc88\uc5ed, \ubd88\ub7ec\uc624\uae30 \uc704\ud55c \uc791\uc5c5",id:"vue-\ud30c\uc77c\ub4e4\uc744-\ubc88\uc5ed-\ubd88\ub7ec\uc624\uae30-\uc704\ud55c-\uc791\uc5c5",level:3},{value:"index.html\uc5d0 \uc0ac\uc6a9\ud558\uae30",id:"indexhtml\uc5d0-\uc0ac\uc6a9\ud558\uae30",level:3},{value:"\ubcc0\uacbd\uc0ac\ud56d \uc801\uc6a9",id:"\ubcc0\uacbd\uc0ac\ud56d-\uc801\uc6a9",level:3},{value:"Style",id:"style",level:3},{value:"@vue/cli",id:"vuecli",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Project \uc0dd\uc131",id:"project-\uc0dd\uc131",level:3},{value:"Project \uc2e4\ud589",id:"project-\uc2e4\ud589",level:3},{value:"Project \uc911\uc9c0",id:"project-\uc911\uc9c0",level:3},{value:"Project \uad6c\uc870",id:"project-\uad6c\uc870",level:2},{value:"babel.config.js",id:"babelconfigjs",level:3},{value:"node_modules",id:"node_modules",level:3},{value:"package-lock.json",id:"package-lockjson",level:3},{value:"package.json",id:"packagejson",level:3},{value:"public/",id:"public",level:3},{value:"README.md",id:"readmemd",level:3},{value:"src/",id:"src",level:3}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%ED%95%84%EC%9A%94%ED%95%9C-%ED%88%B4-%EC%84%A4%EC%B9%98"},"\ud544\uc694\ud55c \ud234 \uc124\uce58")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#project-%EA%B5%AC%EC%A1%B0"},"Project \uad6c\uc870"))),(0,l.kt)("h2",{id:"\ud544\uc694\ud55c-\ud234-\uc124\uce58"},"\ud544\uc694\ud55c \ud234 \uc124\uce58"),(0,l.kt)("h3",{id:"nodejs"},"node.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"node.js \ub780?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub290\uacf3\uc5d0\uc11c\ub098 JavaScript\ub85c \ud504\ub85c\uadf8\ub798\ubc0d\uc774 \uac00\ub2a5\ud558\uac8c \ud558\ub294 framework"),(0,l.kt)("li",{parentName:"ul"},"server-side rendering, command line tools \ub4f1\uc5d0 \uc0ac\uc6a9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"npm \uc774\ub780?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Package Manager"),(0,l.kt)("li",{parentName:"ul"},"library, package \ub4e4\uc744 \uc27d\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," \ud30c\uc77c\uc548\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uacfc \ubc84\uc804 \uc815\ubcf4\ub4e4\uc774 \ub4e4\uc5b4\uc788\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"npx \ub780?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc6d0\ud558\ub294 library, package\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc2e4\ud589\ud558\ub294 \ubc29\ubc95"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'npx "some-package"\n'))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"node.js \uacf5\uc2dd\uc0ac\uc774\ud2b8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"node, npm version \ud655\uc778"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nv14.15.1\n\nnpm -v\n6.14.8\n")))),(0,l.kt)("h2",{id:"vue-\uac1c\ubc1c\ud658\uacbd-\ub9cc\ub4e4\uae30"},"Vue \uac1c\ubc1c\ud658\uacbd \ub9cc\ub4e4\uae30"),(0,l.kt)("h3",{id:"packagejson-\ud30c\uc77c-\uc0dd\uc131"},(0,l.kt)("inlineCode",{parentName:"h3"},"package.json")," \ud30c\uc77c \uc0dd\uc131"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm init\n")),(0,l.kt)("h3",{id:"vue-\uc124\uce58"},"Vue \uc124\uce58"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install vue\n")),(0,l.kt)("h3",{id:"webpack-\uc124\uce58"},"Webpack \uc124\uce58"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"}," ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \ud30c\uc77c \uc0dd\uc131")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install webpack webpack-cli -D\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webpack\uc740 \uac1c\ubc1c\ud658\uacbd\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"\ubaa8\ub4c8 \ubc88\ub4e4\ub7ec"),"\ub85c\uc368 \ud65c\uc6a9\ud558\uae30 \uc704\ud55c \uac83\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"-D"),"\uc635\uc158\uc744 \ud1b5\ud574 ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"DevDependencies"),"\uc5d0 \ucd94\uac00")),(0,l.kt)("h3",{id:"webpackconfigjs-\ud30c\uc77c-\uc0dd\uc131"},"webpack.config.js \ud30c\uc77c \uc0dd\uc131"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// webpack \uc124\uc815\nconst VueLoaderPlugin = require('vue-loader/lib/plugin')\nconst path = require('path')\n\nmodule.exports = {\n    mode: 'development', // vue\uc5d0\uc11c \uac1c\ubc1c\uc790 \ub3c4\uad6c \uc4f0\uac8c \ud574\uc90c \n    // \uc5ec\ub7ec\uac1c\uc758 \ud30c\uc77c\uc744 \uc77d\uc5b4\uc624\uae30\n    entry: {\n        app: path.join(__dirname, 'src', 'main.js') // src\uc5d0 \uc788\ub294 main.js\n    },\n    // \uad00\ub828\ub41c \ubaa8\ub4c8\n    module: {\n        rules: [\n            {\n                test: /\\.vue$/, // .vue \ud655\uc7a5\uc790\ub294\n                use: 'vue-loader', // \ubaa8\ub450 vue-loader\ub85c \ubc88\uc5ed\uc744 \ud574\ub77c\n            }\n        ]\n    },\n    plugins: [\n        new VueLoaderPlugin() // vue loader\uac00 \uac00\uc9c0\uace0 \uc788\ub294 plugin\uc744 \ubd88\ub7ec\uc624\uaca0\ub2e4.\n    ],\n    // \ucd5c\uc885 \uacb0\uacfc (.js)\n    output: {\n        filename: 'app.js',\n        path: path.join(__dirname, 'dist') // \uacb0\uacfc\ub97c \uc774 \uacbd\ub85c\ub85c \ub358\uc838\uc918!\n    }\n}\n")),(0,l.kt)("h3",{id:"mainjs-\uc0dd\uc131"},"main.js \uc0dd\uc131"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import vue from 'vue' // vue \uc790\uccb4\ub97c \ubd88\ub7ec\uc634\nimport App from './App.vue' // \ub0b4\uac00 \ub9cc\ub4e0 vue \ud30c\uc77c\n\nnew Vue({\n    el: '#app', \n    // \ub80c\ub354\ub9c1\n    render: function(createElement) {\n        createElement(App)\n    }\n})\n")),(0,l.kt)("h3",{id:"appvue-\uc0dd\uc131"},"App.vue \uc0dd\uc131"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \uae30\ubcf8 \uad6c\uc870 --\x3e \n<template>\n    <h1> \uc774\uac8c \uc2f1\uae00\ud30c\uc77c\ucef4\ud3ec\ub10c\ud2b8, \ucd5c\uc0c1\uc704 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. </h1>\n</template>\n<script>\nexport default {\n\n}\n<\/script>\n<style lang="">\n\n</style>\n')),(0,l.kt)("h3",{id:"vue-\ud30c\uc77c\ub4e4\uc744-\ubc88\uc5ed-\ubd88\ub7ec\uc624\uae30-\uc704\ud55c-\uc791\uc5c5"},"Vue \ud30c\uc77c\ub4e4\uc744 \ubc88\uc5ed, \ubd88\ub7ec\uc624\uae30 \uc704\ud55c \uc791\uc5c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install vue-loader vue-template-compiler -D\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vue-loader")," : Vue \ud30c\uc77c\uc744 \ubd88\ub7ec\uc624\ub294 \uc5ed\ud560"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vue-template-compiler")," : Vue \ud30c\uc77c\uc744 \ud574\uc11d\ud558\ub294 \uc5ed\ud560")),(0,l.kt)("h3",{id:"indexhtml\uc5d0-\uc0ac\uc6a9\ud558\uae30"},"index.html\uc5d0 \uc0ac\uc6a9\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="../dist/main.js"><\/script>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc0dd\uc131\ub41c ",(0,l.kt)("inlineCode",{parentName:"li"},"main.js")," \ud30c\uc77c\uc744 ",(0,l.kt)("inlineCode",{parentName:"li"},"index.html"),"\uc5d0 \uc704\uc640 \uac19\uc774 \uc0bd\uc785\ud558\uba74 Vue Component\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. ")),(0,l.kt)("h3",{id:"\ubcc0\uacbd\uc0ac\ud56d-\uc801\uc6a9"},"\ubcc0\uacbd\uc0ac\ud56d \uc801\uc6a9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubcc0\uacbd\uc0ac\ud56d\uc774 \uc0dd\uae34\ub2e4\uba74 \uc704 \uba85\ub839\uc5b4\ub85c \uc801\uc6a9\ud574\uc8fc\uc790")),(0,l.kt)("h3",{id:"style"},"Style"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"CSS \ubd88\ub7ec\uc624\uae30")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install vue-style-loader css-loader -D\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vue-style-loader")," : vue\uc758 style"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"css-loader")," : webpack css\ub97c \ubd88\ub7ec\uc624\ub294 \ub85c\ub354")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js // module -> rules \uc5d0 \ucd94\uac00\n{\n    test: '/\\.css$/',\n    use: ['vue-style-loader', 'css-loader'] // \uc55e\uc5d0\uaebc\uac00 css\ub97c \ub9cc\ub4e4\uac70\uace0 \ub4a4\uc5d0\uaebc\uac00 \ubd88\ub7ec\uc640\uc11c \ucc98\ub9ac\ud574\uc900\ub2e4\n}\n")),(0,l.kt)("h2",{id:"vuecli"},"@vue/cli"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc704\uc758 \ubcf5\uc7a1\ud55c \uacfc\uc815\ub4e4\uc744 \uc790\ub3d9\uc73c\ub85c \ucc98\ub9ac\ud574\uc8fc\ub294 package")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @vue/cli\n")),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"@vue/cli"),"\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"vue create")," \ub85c \uc0dd\uc131\ub418\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \uc5b4\ub5a4 \uac83\ub4e4\uc774 \uc788\ub294\uc9c0 \uc54c\uc544\ubcf8\ub2e4.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cli.vuejs.org/guide/creating-a-project.html#vue-create"},"\uacf5\uc2dd \ubb38\uc11c"))),(0,l.kt)("h3",{id:"project-\uc0dd\uc131"},"Project \uc0dd\uc131"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vue create 'project name'\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vue")," 2.x version, ",(0,l.kt)("inlineCode",{parentName:"li"},"npm")," module\uc744 \uc0ac\uc6a9\ud558\uc600\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucc98\uc74c \uc0dd\uc131\uc2dc 1\ubd84\uc815\ub3c4 \uc18c\uc694")),(0,l.kt)("h3",{id:"project-\uc2e4\ud589"},"Project \uc2e4\ud589"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,l.kt)("img",{src:"C:/Users/moo/Desktop/TIL/web/frontend/vue/images/vue_start.PNG",width:"600px"}),(0,l.kt)("h3",{id:"project-\uc911\uc9c0"},"Project \uc911\uc9c0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ctrl + c")),(0,l.kt)("h2",{id:"project-\uad6c\uc870"},"Project \uad6c\uc870"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"template/\n\u251c\u2500\u2500 babel.config.js\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n|  \u251c\u2500\u2500 favicon.ico\n|  \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 src\n   \u251c\u2500\u2500 App.vue\n   \u251c\u2500\u2500 assets\n   \u251c\u2500\u2500 components\n   \u2514\u2500\u2500 main.js\n")),(0,l.kt)("h3",{id:"babelconfigjs"},"babel.config.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/configuration"},"\uacf5\uc2dd \ubb38\uc11c")),(0,l.kt)("li",{parentName:"ul"},"Babel",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JavaScript transcompiler"),(0,l.kt)("li",{parentName:"ul"},"ECMAscript 2015+ \ubc84\uc804\uc758 \ucf54\ub4dc\ub97c \uc774\uc804 \ubc84\uc804\uc73c\ub85c \ubcc0\ud658\ud574\uc900\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"TypeScript, JSX \ub97c JavaScript\ub85c \ubcc0\ud658\ud574\uc900\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"Babel \ud658\uacbd \uc124\uc815\uc744 \uc704\ud55c \ud30c\uc77c")),(0,l.kt)("h3",{id:"node_modules"},"node_modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucd94\uac00\ud588\uc744\ub54c \uc790\ub3d9\uc801\uc73c\ub85c \ucd94\uac00\ub428"),(0,l.kt)("li",{parentName:"ul"},"\ub77c\uc774\ube0c\ub7ec\ub9ac \uad6c\uc870 \ud655\uc778 \uac00\ub2a5")),(0,l.kt)("h3",{id:"package-lockjson"},"package-lock.json"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json"},"\uacf5\uc2dd \ubb38\uc11c")),(0,l.kt)("li",{parentName:"ul"},"npm\uc744 \uc0ac\uc6a9\ud574\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"node_modules")," \ud2b8\ub9ac\ub098 ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," \ud30c\uc77c\uc744 \uc218\uc815\ud558\uac8c\ub418\uba74 \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294 \ud30c\uc77c"),(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc77c\uc774 \uc0dd\uc131\ub418\ub294 \uc2dc\uc810\uc758 \uc758\uc874\uc131 \ud2b8\ub9ac\uc5d0 \ub300\ud55c \uc815\ud655\ud55c \uc815\ubcf4\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4.")),(0,l.kt)("h3",{id:"packagejson"},"package.json"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"npm\uc5d0\uc11c \ubc84\uc804\uc744 \uad00\ub9ac\ud560\ub54c \ub0b4 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uadf8 \ub77c\uc774\ube0c\ub7ec\ub9ac \ub4e4\uc758 \ubc84\uc804\uc774 \uba85\uc2dc\ub418\uc5b4 \uc788\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "test",\n  "version": "0.1.0",\n  "private": true,\n  "dependencies": {\n    "@testing-library/jest-dom": "^5.11.4",\n    ...\n  },\n  "devDependencies": {\n    "@vue/cli-plugin-babel": "~4.5.0",\n    ...\n  },\n  ...\n}\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," : \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version")," : \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ubc84\uc804"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"private")," : private or public"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dependencies")," : \uc0ac\uc6a9\ud558\ub294 \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"devDependencies")," : \uac1c\ubc1c\uc5d0\ub9cc \uc0ac\uc6a9\ub418\ub294 \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac")))),(0,l.kt)("h3",{id:"public"},"public/"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uc5d0\uac8c \ubc30\ud3ec\ud560 \ub54c \uc678\ubd80\uc801\uc73c\ub85c \ubcf4\uc5ec\uc9c0\ub294 \uac83\ub4e4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"farvicon.ico"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"index.html")," \ub4f1")),(0,l.kt)("h3",{id:"readmemd"},"README.md"),(0,l.kt)("h3",{id:"src"},"src/"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc18c\uc2a4\ucf54\ub4dc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"main.js"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"App.vue")," \ub4f1")))}c.isMDXComponent=!0}}]);