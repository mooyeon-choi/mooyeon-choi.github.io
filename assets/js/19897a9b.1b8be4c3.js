"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[217],{4881:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>E,contentTitle:()=>r,default:()=>C,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=o(4848),n=o(8453);const a={slug:2,title:"Flutter EquaTable\ub85c Bloc State \uad00\ub9ac\ud558\uae30",authors:"mooyeon",tags:["Flutter","Bloc","Equatable"],date:"2024-11-06T12:01"},r="Flutter Equatable\ub85c Bloc State \uad00\ub9ac\ud558\uae30",i={permalink:"/blog/2",editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/blog/2024-11-05-flutter-equatable-with-bloc.md",source:"@site/blog/2024-11-05-flutter-equatable-with-bloc.md",title:"Flutter EquaTable\ub85c Bloc State \uad00\ub9ac\ud558\uae30",description:"Flutter\ub85c Android/iOS \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uba74 RiverPod\uc774\ub098 Bloc\uacfc \uac19\uc740 \uc0c1\ud0dc\uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc744 \ub4e4\uc5b4\ubd24\uc744 \uac83\uc774\ub2e4. \uc774\ub7ec\ud55c \uc0c1\ud0dc\uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc740 UI \uacc4\uce35\uacfc \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \ub2f4\ub2f9\ud558\ub294 \uacc4\uce35\uc744 \ubd84\ub9ac\ud574\uc8fc\uc5b4 \ubcf4\ub2e4 \uc27d\uac8c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\ub3c4\ub85d \ub3c4\uc640\uc900\ub2e4. \ud558\uc9c0\ub9cc \ubd84\ub9ac\ud574\ub454 \uc0c1\ud0dc\ub97c \ube44\uad50\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \uc0dd\uac01\ud588\uac74 \uac83\ucc98\ub7fc Object \ube44\uad50\uac00 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uac00 \uc788\ub294\ub370, Equatable\uc744 \ud1b5\ud574\uc11c \uc5b4\ub5bb\uac8c Object\ub97c \ube44\uad50\ud558\uace0 Bloc State\ub97c \ub354\uc6b1 \uc798 \uad00\ub9ac\ud560 \uc218 \uc788\uc744 \uc9c0 \ud655\uc778\ud574\ubcf4\uc790.",date:"2024-11-06T12:01:00.000Z",formattedDate:"2024\ub144 11\uc6d4 6\uc77c",tags:[{label:"Flutter",permalink:"/blog/tags/flutter"},{label:"Bloc",permalink:"/blog/tags/bloc"},{label:"Equatable",permalink:"/blog/tags/equatable"}],hasTruncateMarker:!0,authors:[{name:"Mooyeon Choi",url:"https://github.com/mooyeon-choi",imageURL:"https://github.com/mooyeon-choi.png",key:"mooyeon"}],frontMatter:{slug:"2",title:"Flutter EquaTable\ub85c Bloc State \uad00\ub9ac\ud558\uae30",authors:"mooyeon",tags:["Flutter","Bloc","Equatable"],date:"2024-11-06T12:01"},unlisted:!1,nextItem:{title:"2024 KWDC \ud1ba\uc544\ubcf4\uae30",permalink:"/blog/2024-kwdc"}},E={authorsImageUrls:[void 0]},c=[];function s(t){const e={a:"a",admonition:"admonition",li:"li",ol:"ol",p:"p",...(0,n.R)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Flutter\ub85c Android/iOS \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uba74 RiverPod\uc774\ub098 Bloc\uacfc \uac19\uc740 \uc0c1\ud0dc\uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc744 \ub4e4\uc5b4\ubd24\uc744 \uac83\uc774\ub2e4. \uc774\ub7ec\ud55c \uc0c1\ud0dc\uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc740 UI \uacc4\uce35\uacfc \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \ub2f4\ub2f9\ud558\ub294 \uacc4\uce35\uc744 \ubd84\ub9ac\ud574\uc8fc\uc5b4 \ubcf4\ub2e4 \uc27d\uac8c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\ub3c4\ub85d \ub3c4\uc640\uc900\ub2e4. \ud558\uc9c0\ub9cc \ubd84\ub9ac\ud574\ub454 \uc0c1\ud0dc\ub97c \ube44\uad50\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \uc0dd\uac01\ud588\uac74 \uac83\ucc98\ub7fc Object \ube44\uad50\uac00 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uac00 \uc788\ub294\ub370, Equatable\uc744 \ud1b5\ud574\uc11c \uc5b4\ub5bb\uac8c Object\ub97c \ube44\uad50\ud558\uace0 Bloc State\ub97c \ub354\uc6b1 \uc798 \uad00\ub9ac\ud560 \uc218 \uc788\uc744 \uc9c0 \ud655\uc778\ud574\ubcf4\uc790."}),"\n",(0,l.jsx)(e.admonition,{title:"\ubaa9\ucc28",type:"info",children:(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"#bloc",children:"Bloc"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"#swiftui-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%EC%9D%98-%EB%A7%88%EB%B2%95",children:"SwiftUI \uc560\ub2c8\uba54\uc774\uc158\uc758 \ub9c8\ubc95"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"#%EC%9C%84%EC%A0%AF-%EC%9C%84%EC%A0%AF-%EC%96%B4%EB%94%94%EC%97%90%EB%82%98-%EC%9E%88%EA%B3%A0-%ED%94%BD%EC%85%80-%ED%95%98%EB%82%98%EB%8F%84-%EB%82%A8%EA%B8%B0%EC%A7%80-%EC%95%8A%EA%B8%B0",children:"\uc704\uc82f, \uc704\uc82f, \uc5b4\ub514\uc5d0\ub098 \uc788\uace0 \ud53d\uc140 \ud558\ub098\ub3c4 \ub0a8\uae30\uc9c0 \uc54a\uae30"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"#%EB%AA%A8%EB%91%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%94%94%EC%9E%90%EC%9D%B8",children:"\ubaa8\ub450\ub97c \uc704\ud55c \ub514\uc790\uc778"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"#%EC%9C%84%EC%B9%98-%EA%B8%B0%EB%B0%98-%EC%84%9C%EB%B9%84%EC%8A%A4%EB%A5%BC-%ED%95%98%EB%A9%B4%EC%84%9C-%EC%95%8C%EA%B2%8C%EB%90%9C-%EC%82%AC%EC%86%8C%ED%95%9C-%EC%A7%80%EC%8B%9D%EB%93%A4",children:"\uc704\uce58 \uae30\ubc18 \uc11c\ube44\uc2a4\ub97c \ud558\uba74\uc11c \uc54c\uac8c\ub41c \uc0ac\uc18c\ud55c \uc9c0\uc2dd\ub4e4"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A4%91%EC%8B%AC-%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0",children:"\uc0ac\uc6a9\uc790 \uc911\uc2ec \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub9cc\ub4e4\uae30"})}),"\n"]})})]})}function C(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(s,{...t})}):s(t)}},8453:(t,e,o)=>{o.d(e,{R:()=>r,x:()=>i});var l=o(6540);const n={},a=l.createContext(n);function r(t){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),l.createElement(a.Provider,{value:e},t.children)}}}]);