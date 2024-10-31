"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[5564],{9949:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=l(4848),o=l(8453);const c={},r="Bloc \uc2dc\uc791\ud558\uae30",i={id:"app/flutter/bloc/howToStartBlocWithFlutter",title:"Bloc \uc2dc\uc791\ud558\uae30",description:"Dart SDK \uc124\uce58",source:"@site/docs/app/flutter/bloc/howToStartBlocWithFlutter.md",sourceDirName:"app/flutter/bloc",slug:"/app/flutter/bloc/howToStartBlocWithFlutter",permalink:"/docs/app/flutter/bloc/howToStartBlocWithFlutter",draft:!1,unlisted:!1,editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/docs/app/flutter/bloc/howToStartBlocWithFlutter.md",tags:[],version:"current",frontMatter:{},sidebar:"tilSidebar",previous:{title:"\uc65c Bloc\uc744 \uc0ac\uc6a9\ud560\uae4c?",permalink:"/docs/app/flutter/bloc/intro"},next:{title:"\ud575\uc2ec \uac1c\ub150 (package:bloc)",permalink:"/docs/app/flutter/bloc/coreConceptsPackageBloc"}},a={},s=[{value:"Dart SDK \uc124\uce58",id:"dart-sdk-\uc124\uce58",level:2},{value:"Bloc \uad6c\uc131 \ud328\ud0a4\uc9c0",id:"bloc-\uad6c\uc131-\ud328\ud0a4\uc9c0",level:2},{value:"Install",id:"install",level:2},{value:"Import",id:"import",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"bloc-\uc2dc\uc791\ud558\uae30",children:"Bloc \uc2dc\uc791\ud558\uae30"}),"\n",(0,n.jsx)(t.h2,{id:"dart-sdk-\uc124\uce58",children:"Dart SDK \uc124\uce58"}),"\n",(0,n.jsx)(t.h2,{id:"bloc-\uad6c\uc131-\ud328\ud0a4\uc9c0",children:"Bloc \uad6c\uc131 \ud328\ud0a4\uc9c0"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"bloc - bloc \ucf54\uc5b4 \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n",(0,n.jsx)(t.li,{children:"flutter_bloc - \ube60\ub974\uace0 \ubc18\uc751\uc131\uc774 \ub6f0\uc5b4\ub09c \ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\ucd95\uc744 \uc704\ud55c \uc704\uc82f"}),"\n",(0,n.jsx)(t.li,{children:"angular_bloc - \ube60\ub974\uace0 \ubc18\uc751\uc131\uc774 \ub6f0\uc5b4\ub09c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad6c\ucd95\uc744 \uc704\ud55c Angular \uad6c\uc131 \uc694\uc18c"}),"\n",(0,n.jsx)(t.li,{children:"hydrated_bloc - \ube14\ub85d \uc0c1\ud0dc\ub97c \uc790\ub3d9\uc73c\ub85c \uc720\uc9c0\ud558\uace0 \ubcf5\uc6d0\ud558\ub294 \ube14\ub85d \uc0c1\ud0dc \uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n",(0,n.jsx)(t.li,{children:"replay_bloc - \uc2e4\ud589 \ucde8\uc18c \ubc0f \ub2e4\uc2dc \uc2e4\ud589\uc5d0 \ub300\ud55c \uc9c0\uc6d0\uc744 \ucd94\uac00\ud558\ub294 \ube14\ub85d \uc0c1\ud0dc \uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(t.p,{children:["\uba3c\uc800 ",(0,n.jsx)(t.code,{children:"pubspec.yaml"})," \uc885\uc18d\uc131\uc73c\ub85c \ucd94\uac00\ud574\uc90d\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"pubspec.yaml"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"dependencies:\n  bloc: ^8.0.0\n  flutter_bloc: ^8.0.0\n  hydrated_bloc: ^9.1.4\n  ...\n"})}),"\n",(0,n.jsx)(t.p,{children:"\ub2e4\uc74c\uc73c\ub85c Bloc\uc744 \uc124\uce58\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.admonition,{title:"\uc8fc\uc758",type:"warning",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"pubspec.yaml"})," \ud30c\uc77c\uacfc \ub3d9\uc77c\ud55c \uc704\uce58\uc758 \ub514\ub809\ud130\ub9ac\uc5d0\uc11c \uc2e4\ud589\ud574\uc57c\ud569\ub2c8\ub2e4."]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"pub get"})," or ",(0,n.jsx)(t.code,{children:"flutter pub get"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"import",children:"Import"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"import 'package:bloc/bloc.dart';\nimport 'package:flutter_bloc/flutter_bloc.dart';\nimport 'package:hydrated_bloc/hydrated_bloc.dart';\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>i});var n=l(6540);const o={},c=n.createContext(o);function r(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);