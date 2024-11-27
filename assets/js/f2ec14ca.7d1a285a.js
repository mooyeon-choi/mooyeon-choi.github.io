"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[104],{5290:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=e(4848),i=e(8453);const l={slug:"identity-pool-with-aws-cognito",title:"Amazon Cognito\ub85c \uc0ac\uc6a9\uc790 \uad00\ub9ac\ud558\uae30",authors:"mooyeon",tags:["aws","cognito","flutter","swift","cocoapods"],date:"2024-11-25T19:45"},s="Amazon Cognito\ub85c \uc0ac\uc6a9\uc790 \uad00\ub9ac\ud558\uae30",a={permalink:"/blog/identity-pool-with-aws-cognito",editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/blog/2024-11-25-identity-pool-with-aws-cognito.md",source:"@site/blog/2024-11-25-identity-pool-with-aws-cognito.md",title:"Amazon Cognito\ub85c \uc0ac\uc6a9\uc790 \uad00\ub9ac\ud558\uae30",description:"\uc18c\uac1c",date:"2024-11-25T19:45:00.000Z",formattedDate:"2024\ub144 11\uc6d4 25\uc77c",tags:[{label:"aws",permalink:"/blog/tags/aws"},{label:"cognito",permalink:"/blog/tags/cognito"},{label:"flutter",permalink:"/blog/tags/flutter"},{label:"swift",permalink:"/blog/tags/swift"},{label:"cocoapods",permalink:"/blog/tags/cocoapods"}],hasTruncateMarker:!0,authors:[{name:"Mooyeon Choi",url:"https://github.com/mooyeon-choi",imageURL:"https://github.com/mooyeon-choi.png",key:"mooyeon"}],frontMatter:{slug:"identity-pool-with-aws-cognito",title:"Amazon Cognito\ub85c \uc0ac\uc6a9\uc790 \uad00\ub9ac\ud558\uae30",authors:"mooyeon",tags:["aws","cognito","flutter","swift","cocoapods"],date:"2024-11-25T19:45"},unlisted:!1,nextItem:{title:"\uae30\uc220 \ube14\ub85c\uadf8 \ub0b4\uc6a9 \uacf5\uc720 \uc2a4\ud130\ub514 \uccab\uc8fc\ucc28 \ub9ac\ubdf0",permalink:"/blog/first-study-review"}},r={authorsImageUrls:[void 0]},c=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2}];function d(o){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,n.jsx)(t.p,{children:"Amazon Cognito\ub294 \uc6f9 \ubc0f \ubaa8\ubc14\uc77c \uc571\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc790 \uc778\uc99d \ubc0f \uc2b9\uc778\uc744 \ucc98\ub9ac\ud55c\ub2e4. \uc0ac\uc6a9\uc790 \ud480\uc744 \uc0ac\uc6a9\ud558\uba74 \uc571\uc5d0 \uac00\uc785 \ubc0f \ub85c\uadf8\uc778 \uae30\ub2a5\uc744 \uc27d\uace0 \uc548\uc804\ud558\uac8c \ucd94\uac00\ud560 \uc218 \uc788\ub2e4. Identity pools\ub97c \uc0ac\uc6a9\ud558\uba74 \uc571\uc740 \uc0ac\uc6a9\uc790\uac00 \uc775\uba85\uc774\ub4e0 \uc778\uc99d\ub418\uc5c8\ub4e0 \ud2b9\uc815 AWS \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud558\ub294 \uc784\uc2dc \uc790\uaca9 \uc99d\uba85\uc744 \uc5bb\uc744 \uc218 \uc788\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:"\ubbf8\uad6d, \uc218\uc220\uc2e4\uc774\ub77c\ub294 \ud2b9\uc218\ud55c \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uba74\uc11c \uc0ac\uc6a9\uc790 \uc694\uccad\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574 ML model \uc801\uc6a9, \uc81c\uc2a4\uccd0 \ub3d9\uc791 \ub4f1 \ub2e4\uc591\ud55c \uc2dc\ub3c4\ub97c \ud558\uc600\ub2e4. \uc774\ubc88\uc5d0\ub294 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc \uad00\ub828\ud558\uc5ec \uc5b4\ub5bb\uac8c \ud558\uba74 \ubd88\ud544\uc694\ud55c \uacfc\uc815\uc744 \uc904\uc774\uace0 \ubcf4\ub2e4 \uc548\uc804\ud558\uac8c \uc801\uc6a9\ud560 \uc218 \uc788\uc744\uc9c0 \uace0\ubbfc\ud558\uba70 Amazon Coginto\ub97c \uc801\uc6a9\ud55c \ub0b4\uc6a9\uc774\ub2e4."}),"\n",(0,n.jsx)(t.admonition,{title:"\ubaa9\ucc28",type:"info",children:(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#user-pool",children:"User pool"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#identity-pool",children:"Identity pool"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#github-action%EC%9D%84-%ED%86%B5%ED%95%9C-vercel-%EC%88%98%EB%8F%99-%EB%B0%B0%ED%8F%AC-%EC%99%84%EC%A0%84-%EC%A0%95%EB%B3%B5-with-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC",children:"Cognito Sync"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#Flutter%EC%97%90-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0",children:"Flutter\uc5d0 \uc801\uc6a9\ud558\uae30"})}),"\n"]})})]})}function h(o={}){const{wrapper:t}={...(0,i.R)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(d,{...o})}):d(o)}},8453:(o,t,e)=>{e.d(t,{R:()=>s,x:()=>a});var n=e(6540);const i={},l=n.createContext(i);function s(o){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function a(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:s(o.components),n.createElement(l.Provider,{value:t},o.children)}}}]);