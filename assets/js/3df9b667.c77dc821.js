"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[9768],{16:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=o(4848),r=o(8453);const s={slug:"refs-from-dom-to-api",title:"Refs in React - DOM \uc811\uadfc\uc5d0\uc11c \uba85\ub839\ud615 API\uae4c\uc9c0",authors:"mooyeon",tags:["React","Javascript","frontend","useEffect","useLayoutEffect"],date:"2024-03-16T21:51"},a='"\uae5c\ube61\uc774\ub294" UI\ub97c \uac70\ubd80\ud558\uc138\uc694. useLayoutEffect, \ud398\uc778\ud305 \uadf8\ub9ac\uace0 \ube0c\ub77c\uc6b0\uc800 \uc774\uc57c\uae30',i={permalink:"/blog/refs-from-dom-to-api",editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/blog/2024-03-16-refs-from-dom-to-api.md",source:"@site/blog/2024-03-16-refs-from-dom-to-api.md",title:"Refs in React - DOM \uc811\uadfc\uc5d0\uc11c \uba85\ub839\ud615 API\uae4c\uc9c0",description:"FrontEnd\uc5d0 \uad00\ud55c \ub3c4\uc6c0\uc774 \ub420\ub9cc\ud55c \uc790\ub8cc\ub4e4\uc744 \ubc88\uc5ed",date:"2024-03-16T21:51:00.000Z",formattedDate:"2024\ub144 3\uc6d4 16\uc77c",tags:[{label:"React",permalink:"/blog/tags/react"},{label:"Javascript",permalink:"/blog/tags/javascript"},{label:"frontend",permalink:"/blog/tags/frontend"},{label:"useEffect",permalink:"/blog/tags/use-effect"},{label:"useLayoutEffect",permalink:"/blog/tags/use-layout-effect"}],hasTruncateMarker:!0,authors:[{name:"Mooyeon Choi",url:"https://github.com/mooyeon-choi",imageURL:"https://github.com/mooyeon-choi.png",key:"mooyeon"}],frontMatter:{slug:"refs-from-dom-to-api",title:"Refs in React - DOM \uc811\uadfc\uc5d0\uc11c \uba85\ub839\ud615 API\uae4c\uc9c0",authors:"mooyeon",tags:["React","Javascript","frontend","useEffect","useLayoutEffect"],date:"2024-03-16T21:51"},unlisted:!1,prevItem:{title:"\uae5c\ube61\uc774\ub294 UI\ub97c \uac70\ubd80\ud558\uc138\uc694. useLayoutEffect, \ud398\uc778\ud305 \uadf8\ub9ac\uace0 \ube0c\ub77c\uc6b0\uc800 \uc774\uc57c\uae30",permalink:"/blog/no-more-flickering-ui"},nextItem:{title:"Dart \uc644\uc804 \uc815\ubcf5 - \ud6a8\uc728\uc801\uc774\uace0 \uac15\ub825\ud55c \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc704\ud55c 8\uac00\uc9c0 \uace0\uae09 \ud14c\ud06c\ub2c9",permalink:"/blog/dart-mastery-unleashed-8-advanced-techniques-for-efficient-and-powerful-programming"}},l={authorsImageUrls:[void 0]},c=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2}];function f(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"FrontEnd\uc5d0 \uad00\ud55c \ub3c4\uc6c0\uc774 \ub420\ub9cc\ud55c \uc790\ub8cc\ub4e4\uc744 \ubc88\uc5ed"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"refs-from-dom-to-api",src:o(4319).A+"",width:"1080",height:"720"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\uc6d0\ubb38: ",(0,n.jsx)(t.a,{href:"https://www.developerway.com/posts/refs-from-dom-to-api",children:"https://www.developerway.com/posts/refs-from-dom-to-api"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,n.jsx)(t.admonition,{title:"\ubaa9\ucc28",type:"info",children:(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"useRef\ub97c \ud1b5\ud55c React DOM \uc811\uadfc"}),"\n",(0,n.jsx)(t.li,{children:"\ubd80\ubaa8 \uc694\uc18c\uc5d0\uc11c \uc790\uc2dd \uc694\uc18c\ub85c prop\ub85c ref \uc804\ub2ec\ud558\uae30"}),"\n",(0,n.jsx)(t.li,{children:"forwardRef\ub85c ref \uc804\ub2ec\ud558\uae30"}),"\n",(0,n.jsx)(t.li,{children:"useImperativeHandle\ub97c \uc0ac\uc6a9\ud558\ub294 \uba85\ub839\ud615 API"}),"\n",(0,n.jsx)(t.li,{children:"\uba85\ub839\ud615 API\uc5d0\uc11c useImperativeHandle \uc81c\uac70\ud558\uae30"}),"\n"]})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},4319:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/refs-from-dom-to-api_welcome-7303ecf9f86b2db71a6d43976974b1b7.png"},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);