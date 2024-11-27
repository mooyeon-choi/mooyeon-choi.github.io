"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[6415],{7406:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=i(4848),c=i(8453);const l={sidebar_position:3},r="Git",d={id:"git",title:"Git",description:"Git\uc740 \ubd84\uc0b0\ud615 \ubc84\uc804\uad00\ub9ac\uc2dc\uc2a4\ud15c(DVCS) \uc774\ub2e4.",source:"@site/docs/git.md",sourceDirName:".",slug:"/git",permalink:"/docs/git",draft:!1,unlisted:!1,editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/docs/git.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tilSidebar",previous:{title:"\ub3c4\uc6c0\ub418\ub294 \uc790\ub8cc\ub4e4",permalink:"/docs/helpful"},next:{title:"Markdown",permalink:"/docs/markdown"}},t={},h=[{value:"Git \uae30\ubcf8 \uba85\ub839\uc5b4(\ub85c\uceec)",id:"git-\uae30\ubcf8-\uba85\ub839\uc5b4\ub85c\uceec",level:2},{value:"Git \uc6d0\uaca9 \uc800\uc7a5\uc18c \ud65c\uc6a9\ud558\uae30",id:"git-\uc6d0\uaca9-\uc800\uc7a5\uc18c-\ud65c\uc6a9\ud558\uae30",level:2},{value:"gitignore",id:"gitignore",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"git",children:"Git"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Git"}),"\uc740 ",(0,s.jsx)(e.code,{children:"\ubd84\uc0b0\ud615 \ubc84\uc804\uad00\ub9ac\uc2dc\uc2a4\ud15c(DVCS)"})," \uc774\ub2e4."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["window\uc5d0\uc11c ",(0,s.jsx)(e.code,{children:"Git"}),"\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,s.jsx)(e.code,{children:"Git bash"}),"\ub97c \ubc18\ub4dc\uc2dc \uc124\uce58\ud574\uc57c \ud568."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ucc38\uace0\uc790\ub8cc"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://git-scm.com/book/ko/v2",children:"Git Scm"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://backlog.com/git-tutorial/kr/intro/intro1_1.html",children:"\ub204\uad6c\ub098 \uc27d\uac8c \uc774\ud574\ud560 \uc218 \uc788\ub294 Git \uc785\ubb38"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"git-\uae30\ubcf8-\uba85\ub839\uc5b4\ub85c\uceec",children:"Git \uae30\ubcf8 \uba85\ub839\uc5b4(\ub85c\uceec)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ub85c\uceec\uc5d0\uc11c \ucc98\uc74c Git\uc744 \ud65c\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc544\ub798\uc758 \uc124\uc815\uc744 \ud574\uc918\uc57c \ud55c\ub2e4."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git config --global user.name '<Github username>'\n$ git config --global user.email '<Github email>'\n"})}),"\n",(0,s.jsx)(e.p,{children:"\ucee4\ubc0b\ud558\ub294 \uc0ac\ub78c(author)\uc774 \ub204\uad6c\uc778\uc9c0 \uc124\uc815!"}),"\n",(0,s.jsx)(e.p,{children:"Github email\uc774\ub791 \ub2e4\ub974\uba74, Github\uc5d0\uc11c \ub2e4\ub978 \uc0ac\ub78c\uc774 \ucee4\ubc0b\ud55c \uac83\uc73c\ub85c \uc778\uc2dd\ub428!"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"\ucef4\ud4e8\ud130\uc5d0\uc11c \ud55c\ubc88\ub9cc \uc124\uc815\ud574\uc8fc\uba74 \ub41c\ub2e4."})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Git \uc800\uc7a5\uc18c \uc124\uc815"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git init\nInitialized empty Git repository in C:/Users/student/Desktop/\uc0c8 \ud3f4\ub354/.git/\n\nstudent@DESKTOP MINGW64 ~/Desktop/\uc0c8 \ud3f4\ub354 (master)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"git init"}),"\uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uba74, \ud574\ub2f9 \ub514\ub809\ud1a0\ub9ac\uc5d0 ",(0,s.jsx)(e.code,{children:".git/"})," \ud3f4\ub354\uac00 \uc0dd\uc131\ub41c\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ubaa8\ub4e0 git\uacfc \uad00\ub828\ub41c \ub0b4\uc6a9\uc740 \ud574\ub2f9 \ud3f4\ub354\uc5d0 \ub2f4\uaca8\uc788\ub2e4."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\uc800\uc7a5\uc18c\ub85c \uc124\uc815\ub418\uc5c8\ub2e4\uba74, ",(0,s.jsx)(e.code,{children:"git bash"}),"\uc5d0\uc11c ",(0,s.jsx)(e.code,{children:"(master)"}),"\uac00 \ub098\ud0c0\ub09c\ub2e4."]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"(master)"}),"\ud3f4\ub354 \uc548\uc5d0\uc11c git init\uc744 \ud558\uba74 ",(0,s.jsx)(e.code,{children:".git/"}),"\uc548\uc5d0 \ub610 \ub2e4\uc2dc ",(0,s.jsx)(e.code,{children:".git/"}),"\uc774 \uc0dd\uc131\ub418\ubbc0\ub85c \ud558\uc9c0 \uc54a\ub294\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Staging area(\ucee4\ubc0b \ub300\uc0c1 \ubaa9\ub85d)\uc5d0 \ub2f4\uae30"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git add .\n$ git add a.txt\n$ git add startcamp/\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"git add"})," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 ",(0,s.jsx)(e.code,{children:"Staging Area"}),"\ub85c \ud2b9\uc815 \ud30c\uc77c \ud639\uc740 \ud3f4\ub354\ub97c ",(0,s.jsx)(e.code,{children:"commit"}),"\ud560 \ubaa9\ub85d ",(0,s.jsx)(e.code,{children:"(staging area, INDEX)"}),"\uc5d0 \ub2f4\uc544\ub193\ub294\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\ubc18\ub4dc\uc2dc ",(0,s.jsx)(e.code,{children:"git status"})," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \ub0b4\uac00 \uc6d0\ud558\ub294 \ud30c\uc77c\uc774 \ubc18\uc601\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ git status\n...\nChanges to be committed:\n  (use "git rm --cached <file>..." to unstage)\n\n        new file:   a.txt\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\uc774\ub825 \ub0a8\uae30\uae30(",(0,s.jsx)(e.code,{children:"commit"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git commit -m '\ucee4\ubc0b\uba54\uc2dc\uc9c0'\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"commit"}),"\uc740 \ud604\uc7ac \uc18c\uc2a4\ucf54\ub4dc\uc758 \uc0c1\ud0dc\ub97c ",(0,s.jsx)(e.strong,{children:"\uc2a4\ub0c5\uc0f7"})," \ucc0d\ub294 \uac83\uacfc \ub3d9\uc77c\ud558\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Staging Area"}),"\uc5d0 \ub2f4\uaca8\uc788\ub294 \ub0b4\uc6a9\uc744 \uc774\ub825\uc73c\ub85c \ub0a8\uae34\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ucee4\ubc0b\uba54\uc2dc\uc9c0\ub294 \ubc18\ub4dc\uc2dc \ud574\ub2f9 \uc774\ub825\uc758 \ub0b4\uc6a9\uc744 \uc815\ud655\ud558\uac8c \ud45c\ud604\ud574\uc57c \ud55c\ub2e4. (\ubcf4\ud1b5 \uc624\ud508\uc18c\uc2a4\ud504\ub85c\uc81d\ud2b8, \ud68c\uc0ac \ub0b4\uc5d0\uc11c \uad00\ub828\ub41c \ucee8\ubca4\uc158\uc774 \uc874\uc7ac\ud568.)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ucee4\ubc0b\uc774\ub825 \ud655\uc778\ud558\uae30"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git log\ncommit 65d8afaf4c30c728175c7078d90c5df07ee58248 (HEAD -> master)\nAuthor: mooyeon-choi <dus1208@ajou.ac.kr>\nDate:   Tue Jul 9 11:05:03 2019 +0900\n\n    \ud14c\uc2a4\ud2b8\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"git log -n"})," \uc635\uc158\uc744 \uc8fc\uba74, \ucd5c\uadfc n\uac1c\uc758 \ucee4\ubc0b\uc744 \ubcf4\uc5ec\uc900\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\ucee4\ubc0b \uc774\ub825\uc744 \ub0a8\uae34 \uc774\ud6c4\uc5d0 \ucee4\ubc0b \uba54\uc2dc\uc9c0 \ubcc0\uacbd, \uc0ad\uc81c \ub4f1\uc744 \ud560 \uc218 \uc788\ub294\ub370 \uc774 \uacbd\uc6b0\ub294 \ub9e4\uc6b0 \uc870\uc2ec\ud574\uc57c \ud55c\ub2e4!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"git \uc0c1\ud0dc \ud655\uc778"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\ud56d\uc0c1 \ubaa8\ub4e0 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\uae30 \uc804\uc5d0 \uc544\ub798\uc758 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud558\ub294 \uc2b5\uad00\uc744 \ub4e4\uc774\uc790!"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git status\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"git-\uc6d0\uaca9-\uc800\uc7a5\uc18c-\ud65c\uc6a9\ud558\uae30",children:"Git \uc6d0\uaca9 \uc800\uc7a5\uc18c \ud65c\uc6a9\ud558\uae30"}),"\n",(0,s.jsxs)(e.p,{children:["\uc6d0\uaca9 \uc800\uc7a5\uc18c (",(0,s.jsx)(e.code,{children:"remote repository"}),")\ub294 ",(0,s.jsx)(e.code,{children:"github"}),", ",(0,s.jsx)(e.code,{children:"gitlab"}),", ",(0,s.jsx)(e.code,{children:"bitbucket"})," \ub4f1 \ub2e4\uc591\ud55c \uc11c\ube44\uc2a4\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"github"})," : \uc624\ud508\uc18c\uc2a4\uac00 \ub9ce\ub2e4, \ud070\uc6a9\ub7c9 \uc5c5\ub85c\ub4dc \ubd88\uac00"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"bitbucket"})," : \ud070\uc6a9\ub7c9 \uc5c5\ub85c\ub4dc \uac00\ub2a5"]}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\uc6d0\uaca9 \uc800\uc7a5\uc18c(",(0,s.jsx)(e.code,{children:"remote repository"}),") \uc124\uc815"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git remote add origin __https://github.com__\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ub85c\uceec \uc800\uc7a5\uc18c\uc5d0 \ucd5c\ucd08\uc5d0 \ud55c\ubc88\ub9cc \ub4f1\ub85d\ud558\uba74 \ub41c\ub2e4."}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"\uc6d0\uaca9 \uc800\uc7a5\uc18c(remote)"}),"\ub97c ",(0,s.jsx)(e.code,{children:"origin"})," \uc774\ub77c\ub294 \uc774\ub984\uc73c\ub85c \uc815\ud574\uc9c4 ",(0,s.jsx)(e.code,{children:"url"}),"\uc744 ",(0,s.jsx)(e.code,{children:"\ub4f1\ub85d(add)"})," \ud558\ub294 \uac83\uc774\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\uc6d0\uaca9 \uc800\uc7a5\uc18c\ub85c ",(0,s.jsx)(e.code,{children:"push"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git push origin master\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"origin"}),"\uc73c\ub85c \uc124\uc815\ub41c \uc6d0\uaca9 \uc800\uc7a5\uc18c\uc5d0 ",(0,s.jsx)(e.code,{children:"push"})," \ud55c\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsxs)(e.li,{children:["\uc6d0\uaca9 \uc800\uc7a5\uc18c\uc5d0\uc11c ",(0,s.jsx)(e.code,{children:"pull"})]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git pull origin master\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\uc6d0\uaca9 \uc800\uc7a5\uc18c\uc5d0 \uc0c8\ub85c\uc6b4 \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc788\ub294 \uacbd\uc6b0 ",(0,s.jsx)(e.code,{children:"pull"})," \uc744 \ud1b5\ud574 \ubc1b\uc544\uc628\ub2e4."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"origin"}),"\uc73c\ub85c \uc124\uc815\ub41c \uc6d0\uaca9 \uc800\uc7a5\uc18c\uc5d0\uc11c ",(0,s.jsx)(e.code,{children:"pull"})," \ud55c\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"clone"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ git clone __url__\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"clone"}),"\uc740 \uc6d0\uaca9 \uc800\uc7a5\uc18c\uc5d0\uc11c \ucd5c\ucd08\uc5d0 \ubc1b\uc544\uc62c \ub54c \ud65c\uc6a9\ud55c\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"gitignore",children:"gitignore"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"git init\uc744 \ud558\uba74 \ud574\ub2f9 \ud30c\uc77c\uc744 \uc791\uc131\ud558\ub294 \uc2b5\uad00\uc744 \ub4e4\uc774\uc790!"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:".gitignore"})," \ud30c\uc77c\uc5d0 \uc791\uc131\ub41c \ud30c\uc77c \ud639\uc740 \ud3f4\ub354 \ub4f1\uc740 git\uc73c\ub85c \uad00\ub9ac\ub418\uc9c0 \uc54a\ub294\ub2e4. \uc608\uc2dc\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"__pycache__/ # __pycache__ \ud3f4\ub354 \uc548\uc5d0 \uc788\ub294 \ub0b4\uc6a9 \ubaa8\ub450\n*.zip\t\t # \ud655\uc7a5\uc790\uac00 zip\uc778 \ud30c\uc77c \ubaa8\ub450\nprofile.jpg  # profile.jpg \ud30c\uc77c\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\ucc98\uc74c\uc5d0\ub294 \uc9c1\uc811 \ub9cc\ub4e4\uae30\ubcf4\ub2e4 ",(0,s.jsx)(e.a,{href:"https://gitignore.io",children:"gitignore"})," \uc5d0\uc11c \ub0b4 \uac1c\ubc1c\ud658\uacbd\uc5d0 \ub9de\ucdb0 \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \ud30c\uc77c\uc744 \uc801\uc6a9\ud558\uc790."]}),"\n",(0,s.jsxs)(e.p,{children:["\uc608\ub97c \ub4e4\uba74, pycharm\uc744 \uc4f0\uace0 \uc788\uc744 \ub54c ",(0,s.jsx)(e.code,{children:".idea/"})," \ub97c \uc62c\ub9ac\uc9c0 \uc54a\ub294\ub2e4\uac70\ub098, python\uc5d0\uc11c\ub294 ",(0,s.jsx)(e.code,{children:"__pycache__/"})," \ub97c \uc62c\ub9b4 \ud544\uc694\ub294 \uc5c6\ub2e4."]})]})}function x(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>d});var s=i(6540);const c={},l=s.createContext(c);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);