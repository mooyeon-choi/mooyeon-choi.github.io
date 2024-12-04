"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[7485],{2716:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(4848),r=o(8453);const a={slug:"frontend-decorator-pattern",title:"\ud504\ub860\ud2b8\uc564\ub4dc\uc5d0\uc11c\uc758 \ub370\ucf54\ub808\uc774\ud130 \ud328\ud134 \uc0b4\ud3b4\ubcf4\uae30",authors:"mooyeon",tags:["FrontEnd","Decorator","DesignPattern","JavaScript","Flutter"],date:"2024-12-03T19:45"},i="\ud504\ub860\ud2b8\uc564\ub4dc\uc5d0\uc11c\uc758 \ub370\ucf54\ub808\uc774\ud130 \ud328\ud134 \uc0b4\ud3b4\ubcf4\uae30",l={permalink:"/blog/frontend-decorator-pattern",editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/blog/2024-12-03-frontend-decorator-pattern.md",source:"@site/blog/2024-12-03-frontend-decorator-pattern.md",title:"\ud504\ub860\ud2b8\uc564\ub4dc\uc5d0\uc11c\uc758 \ub370\ucf54\ub808\uc774\ud130 \ud328\ud134 \uc0b4\ud3b4\ubcf4\uae30",description:"\uc18c\uac1c",date:"2024-12-03T19:45:00.000Z",formattedDate:"2024\ub144 12\uc6d4 3\uc77c",tags:[{label:"FrontEnd",permalink:"/blog/tags/front-end"},{label:"Decorator",permalink:"/blog/tags/decorator"},{label:"DesignPattern",permalink:"/blog/tags/design-pattern"},{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"Flutter",permalink:"/blog/tags/flutter"}],hasTruncateMarker:!0,authors:[{name:"Mooyeon Choi",url:"https://github.com/mooyeon-choi",imageURL:"https://github.com/mooyeon-choi.png",key:"mooyeon"}],frontMatter:{slug:"frontend-decorator-pattern",title:"\ud504\ub860\ud2b8\uc564\ub4dc\uc5d0\uc11c\uc758 \ub370\ucf54\ub808\uc774\ud130 \ud328\ud134 \uc0b4\ud3b4\ubcf4\uae30",authors:"mooyeon",tags:["FrontEnd","Decorator","DesignPattern","JavaScript","Flutter"],date:"2024-12-03T19:45"},unlisted:!1,nextItem:{title:"iOS \ud658\uacbd\uc5d0\uc11c \uc628\ub514\ubc14\uc774\uc2a4 AI\ubaa8\ub378 \ucd5c\uc801\ud654\ud558\uae30",permalink:"/blog/ondevice-ai-model-with-coreml"}},s={authorsImageUrls:[void 0]},c=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2}];function d(t){const e={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,n.jsxs)(e.p,{children:["\ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub4e4\uc774\ub77c\uba74 ",(0,n.jsx)(e.strong,{children:"Decorator"}),"\ub098 ",(0,n.jsx)(e.strong,{children:"Annotation"}),"\uc5d0 \ub300\ud574 \uc775\uc219\ud560 \uac83\uc774\ub2e4. \ud558\uc9c0\ub9cc \ud504\ub860\ud2b8\uc5d4\ub4dc \uc0dd\ud0dc\uacc4\uc5d0\uc11c\ub294 \uc9c0\uae08\uaecf \uc5ec\ub7ec \uc774\uc720\ub85c \uc778\ud574 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub2e4\uac00 \ucd5c\uadfc\uc5d0 \ub4e4\uc5b4\uc11c \ub3c4\uc785\uc744 \ud558\ub824\ub294 \uc2dc\ub3c4\uac00 \uc774\ub8e8\uc5b4\uc9c0\uace0 \uc788\ub2e4. \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c\ub294 \uc65c \uc774\ub7ec\ud55c \uba54\ud0c0\ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc744 \uc801\uc6a9\ud558\uc9c0 \ubabb\ud558\uc600\ub294\uc9c0, \ub610 \uc801\uc6a9\ud558\uae30 \uc704\ud574\uc11c \uc55e\uc73c\ub85c \ub118\uc5b4\uc57c\ud560 \uc0b0\ub4e4\uc740 \uc5b4\ub5a4 \uac83\ub4e4\uc774 \uc788\ub294\uc9c0 \uc54c\uc544\ubcf4\uc790."]}),"\n",(0,n.jsx)(e.admonition,{title:"\ubaa9\ucc28",type:"info",children:(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"#%EB%A9%94%ED%83%80-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%B4%EB%9E%80",children:"\uba54\ud0c0 \ud504\ub85c\uadf8\ub798\ubc0d\uc774\ub780?"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%99%80-%EB%8D%B0%EC%BD%94%EB%A0%88%EC%9D%B4%ED%84%B0",children:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc640 \ub370\ucf54\ub808\uc774\ud130"})}),"\n"]})})]})}function m(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},8453:(t,e,o)=>{o.d(e,{R:()=>i,x:()=>l});var n=o(6540);const r={},a=n.createContext(r);function i(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);