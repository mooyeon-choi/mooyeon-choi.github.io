"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[3904],{7983:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(4848),t=n(8453);const r={slug:"writing-css-with-accessibility-in-mind",title:"\uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec CSS \uc791\uc131\ud558\uae30",authors:"mooyeon",tags:["CSS","frontend"],date:"2024-03-02T21:56"},l="\uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec CSS \uc791\uc131\ud558\uae30",c={permalink:"/blog/writing-css-with-accessibility-in-mind",editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/blog/2024-03-02-writing-css-with-accessibility-in-mind.md",source:"@site/blog/2024-03-02-writing-css-with-accessibility-in-mind.md",title:"\uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec CSS \uc791\uc131\ud558\uae30",description:"Korean FE Article Team \uc5d0\uc11c \ubc88\uc5ed\ud574\uc8fc\ub294 FrontEnd \uc18c\uc2dd\uc744 \uc544\uce74\uc774\ube0c \ud558\uc600\uc2b5\ub2c8\ub2e4.",date:"2024-03-02T21:56:00.000Z",formattedDate:"2024\ub144 3\uc6d4 2\uc77c",tags:[{label:"CSS",permalink:"/blog/tags/css"},{label:"frontend",permalink:"/blog/tags/frontend"}],hasTruncateMarker:!0,authors:[{name:"Mooyeon Choi",url:"https://github.com/mooyeon-choi",imageURL:"https://github.com/mooyeon-choi.png",key:"mooyeon"}],frontMatter:{slug:"writing-css-with-accessibility-in-mind",title:"\uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec CSS \uc791\uc131\ud558\uae30",authors:"mooyeon",tags:["CSS","frontend"],date:"2024-03-02T21:56"},unlisted:!1,prevItem:{title:"\uc218\ub9ce\uc740 \uc800\uc7a5\uc18c\ub97c \ud558\ub098\ub85c - \uc790\ubc14 \uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\ub97c \ubaa8\ub178\ub808\ud3ec\ub85c \uc774\ub3d9\ud558\uae30",permalink:"/blog/monorepo"},nextItem:{title:"Import \uc18d\uc131 (attributes)",permalink:"/blog/import-attributes"}},h={authorsImageUrls:[void 0]},o=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\uac00\ub3c5\uc131 \uc788\ub294 \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc77d\uae30 \uc26c\uc6b4 \ud14d\uc2a4\ud2b8\ub85c",id:"\uac00\ub3c5\uc131-\uc788\ub294-\ud14d\uc2a4\ud2b8\uc5d0\uc11c-\uc77d\uae30-\uc26c\uc6b4-\ud14d\uc2a4\ud2b8\ub85c",level:2},{value:"\uae00\uaf34 \ud06c\uae30 \ud655\ub300",id:"\uae00\uaf34-\ud06c\uae30-\ud655\ub300",level:3},{value:"\ub77c\uc778 \ub192\uc774(line-height) \uc124\uc815",id:"\ub77c\uc778-\ub192\uc774line-height-\uc124\uc815",level:3},{value:"\ud14d\uc2a4\ud2b8\ub97c \uc67c\ucabd \ub610\ub294 \uc624\ub978\ucabd\uc73c\ub85c \uc815\ub82c",id:"\ud14d\uc2a4\ud2b8\ub97c-\uc67c\ucabd-\ub610\ub294-\uc624\ub978\ucabd\uc73c\ub85c-\uc815\ub82c",level:3},{value:"\ubb38\ub2e8 \ub108\ube44 \uc815\uc758",id:"\ubb38\ub2e8-\ub108\ube44-\uc815\uc758",level:3},{value:"\uac00\uc0c1 \uc694\uc18c\uc5d0 \ucf58\ud150\uce20 \uc2e0\uc911\ud558\uac8c \uc0ac\uc6a9\ud558\uae30",id:"\uac00\uc0c1-\uc694\uc18c\uc5d0-\ucf58\ud150\uce20-\uc2e0\uc911\ud558\uac8c-\uc0ac\uc6a9\ud558\uae30",level:2}];function a(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://kofearticle.substack.com/about?utm_source=substack&utm_medium=email",children:"Korean FE Article Team"})," \uc5d0\uc11c \ubc88\uc5ed\ud574\uc8fc\ub294 FrontEnd \uc18c\uc2dd\uc744 \uc544\uce74\uc774\ube0c \ud558\uc600\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,s.jsx)(i.p,{children:"\uc811\uadfc\uc131(Accessibility)\uc744 \uace0\ub824\ud558\uc5ec \uac1c\ubc1c\ud558\ub294 \uac83\uc740 \uac80\uc0c9 \uc5d4\uc9c4 \ucd5c\uc801\ud654\uc640 \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \ud5a5\uc0c1\uc744 \ub118\uc5b4\uc11c \ubc95\uc801 \uc694\uad6c\uc0ac\ud56d\uc774\ub098 \uc0ac\ud68c\uc801 \ucc45\uc784\uc744 \uc774\ud589\ud558\ub294 \ub9e4\uc6b0 \uc911\uc694\ud55c \uc5c5\ubb34\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(i.p,{children:"\uc774 \uae00\uc740 \ud2b9\ud788 CSS\ub97c \uc774\uc6a9\ud558\uc5ec \uc811\uadfc\uc131\uc744 \ud5a5\uc0c1\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc18c\uac1c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc2dc\ub9ac\uc988\ub85c\ub294 \u201c\uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec HTML \uc791\uc131\ud558\uae30\u201d, \u201c\uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec JavaScript \uc791\uc131\ud558\uae30\u201d\uac00 \uc788\uc2b5\ub2c8\ub2e4. 2017\ub144\uc5d0 \uc791\uc131\ub418\uc5b4 \uc624\ub79c \uc2dc\uac04\uc774 \uc9c0\ub0ac\uc74c\uc5d0\ub3c4 \uc5ec\uc804\ud788 \uc720\uc6a9\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uace0 \uc788\uc5b4 \ubc88\uc5ed\ud558\uc5ec \uc18c\uac1c\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(i.admonition,{title:"\ubaa9\ucc28",type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\uac00\ub3c5\uc131 \uc788\ub294 \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc77d\uae30 \uc26c\uc6b4 \ud14d\uc2a4\ud2b8\ub85c"}),"\n",(0,s.jsx)(i.li,{children:"\uac00\uc0c1 \uc694\uc18c\uc5d0 \ucf58\ud150\uce20 \uc2e0\uc911\ud558\uac8c \uc0ac\uc6a9\ud558\uae30"}),"\n",(0,s.jsx)(i.li,{children:"\ud654\uba74\ub9cc\uc774 \uc720\uc77c\ud55c \ub9e4\uccb4\uac00 \uc544\ub2c8\ub2e4"}),"\n",(0,s.jsx)(i.li,{children:"\uc644\uc804\ud788 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uc18d\uc131 \uac12\uc5d0 \ub300\ud55c \ub300\uc548"}),"\n",(0,s.jsx)(i.li,{children:"\ucf58\ud150\uce20\ub97c \uc228\uae30\ub294 \uc5ec\ub7ec \uac00\uc9c0 \ubc29\ubc95"}),"\n",(0,s.jsx)(i.li,{children:"\ub098\uc05c \ub300\ube44\ub294 \uc2e0\ub8b0\ud560 \uc218 \uc5c6\ub2e4"}),"\n",(0,s.jsx)(i.li,{children:"\uc0c9\uc0c1\uc774 \uc815\ubcf4\uc758 \uc720\uc77c\ud55c \ub2e8\uc11c\uac00 \ub418\uc5b4\uc11c\ub294 \uc548 \ub41c\ub2e4"}),"\n",(0,s.jsx)(i.li,{children:"\uc21c\uc11c\uc5d0 \uc2e0\uacbd \uc4f0\uae30"}),"\n",(0,s.jsx)(i.li,{children:"\uc911\uc694\ud55c \uac83\uc5d0 \uc9d1\uc911\ud558\uae30: focus"}),"\n",(0,s.jsx)(i.li,{children:"\uadf8\ub9ac\ub4dc\uc640 \ud3c9\ud3c9\ud55c \ubb38\uc11c \uad6c\uc870"}),"\n"]})}),"\n",(0,s.jsx)(i.p,{children:"CSS\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc6f9\uc0ac\uc774\ud2b8\uc640 \uc571\uc758 \uc811\uadfc\uc131\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \ud301\uc5d0 \ub300\ud55c \uc18c\uac1c\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(i.p,{children:["\uc774 \uae00\uc740 ",(0,s.jsx)(i.a,{href:"https://medium.com/@ABatickaya/%D0%B4%D1%83%D0%BC%D0%B0%D1%8F-%D0%BE-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BF%D0%B8%D1%88%D0%B5%D0%BC-css-9032d7b64fb2",children:"\ub7ec\uc2dc\uc544\uc5b4"}),"(\uc5ed\uc790: ",(0,s.jsx)(i.a,{href:"https://medium.com/@ABatickaya",children:"Workafrolic"}),"), ",(0,s.jsx)(i.a,{href:"https://maujor.com/tutorial/escrevendo-css-com-acessibilidade-em-mente.php",children:"\ud3ec\ub974\ud22c\uac08\uc5b4"}),"(\uc5ed\uc790: ",(0,s.jsx)(i.a,{href:"https://maujor.com/",children:"Maujor"}),"), \uadf8\ub9ac\uace0 ",(0,s.jsx)(i.a,{href:"https://frasco.io/writing-css-with-accessibility-in-mind-4fc82b26aecb",children:"\uc77c\ubcf8\uc5b4"}),"(\uc5ed\uc790: ",(0,s.jsx)(i.a,{href:"https://twitter.com/nakanishy",children:"Keita Nakanishi"}),")\ub85c \ubc88\uc5ed\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(i.p,{children:["\uc77d\uae30\ub97c \uc120\ud638\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74, ",(0,s.jsx)(i.strong,{children:"CSS Conf Budapest"}),"\uc5d0\uc11c \uc774 \uae00\uc758 \ub300\ubd80\ubd84\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud55c ",(0,s.jsx)(i.a,{href:"https://www.youtube.com/watch?v=EOiC2M47GBY",children:"\ub179\uc74c\ubcf8"}),"\uc744 \ub4e4\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(i.p,{children:["\uc57d 1\ub144 \uc804, \uc800\ub294 \uc6f9 \uc811\uadfc\uc131\uc5d0 \uc880 \ub354 \uc9d1\uc911\ud558\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \uc800\uc5d0\uac8c \uac00\uc7a5 \ud6a8\uacfc\uc801\uc778 \ud559\uc2b5 \ubc29\uc2dd\uc740 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc744 \uac00\ub974\uce58\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\uac83\uc774 \ubc14\ub85c \uc81c\uac00 ",(0,s.jsx)(i.a,{href:"https://speakerdeck.com/matuzo/",children:"\ubc0b\uc5c5\uacfc \ucee8\ud37c\ub7f0\uc2a4"}),"\uc5d0\uc11c \ubc1c\ud45c\ud558\uace0, \uc774 \uc8fc\uc81c\uc5d0 \ub300\ud55c \uae00\uc744 \uc4f0\ub294 \uc774\uc720 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \uc800\ub294 ",(0,s.jsx)(i.strong,{children:"Smashing Magazine"}),"\uc5d0 ",(0,s.jsx)(i.a,{href:"https://www.smashingmagazine.com/2017/07/enhancing-css-layout-floats-flexbox-grid/",children:"\uc810\uc9c4\uc801\uc778 \ud5a5\uc0c1"}),", \uadf8\ub9ac\uace0 \uc811\uadfc\uc131 \uae30\ucd08\uc5d0 \ub300\ud574 ",(0,s.jsx)(i.strong,{children:"Medium"}),"\uc5d0 \uae00\uc744 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uae00\uc740 \uc811\uadfc\uc131 \ud301 \ubaa8\uc74c \uc2dc\ub9ac\uc988 \uc911 \uc138 \ubc88\uc9f8 \uae00\uc785\ub2c8\ub2e4. \uad00\uc2ec\uc774 \uc788\ub2e4\uba74 \ud2b9\ubcc4\ud55c \uc21c\uc11c \uc5c6\uc774, ",(0,s.jsx)(i.a,{href:"https://medium.com/alistapart/writing-html-with-accessibility-in-mind-a62026493412",children:"\uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec HTML \uc791\uc131\ud558\uae30"}),"\uc640 ",(0,s.jsx)(i.a,{href:"https://medium.com/@matuzo/writing-javascript-with-accessibility-in-mind-a1f6a5f467b9",children:"\uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc791\uc131\ud558\uae30"}),"\ub97c \uc9c0\uae08\uc774\ub098 \ub098\uc911\uc5d0 \uc77d\uc5b4\ubcf4\uba74 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(i.p,{children:"\uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec CSS \uc791\uc131\ud558\uae30"}),"\n",(0,s.jsxs)(i.p,{children:["CSS\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ubb34\ud55c\ud55c \ubc29\ubc95\uacfc \ub2e4\uc591\ud55c \uc18d\uc131\uc774 \uc6b0\ub9ac\uc758 \uc0b6\uc744 \ub354 \uc27d\uac8c \ub9cc\ub4e4\uc5b4\uc8fc\uc9c0\ub9cc, \ub3d9\uc2dc\uc5d0 \uc0ac\uc6a9\uc790\uc758 \uacbd\ud5d8\uc744 \uc545\ud654\uc2dc\ud0ac \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc2e4, ",(0,s.jsx)(i.a,{href:"http://outlinenone.com/",children:"\ub2e8 \uc138 \uc904\uc758 CSS"})," \ub9cc\uc73c\ub85c \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc811\uadfc\ud558\uae30 \uc5b4\ub835\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(i.p,{children:"\uc774 \uae00\uc5d0\uc11c\ub294 \uc811\uadfc\uc131 \uc788\ub294 CSS\ub97c \uc791\uc131\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420\ub9cc\ud55c \uae30\uc220\uacfc \uace0\ub824 \uc0ac\ud56d \uadf8\ub9ac\uace0 \uc811\uadfc\ubc29\uc2dd\uc744 \ubaa8\ub450 \ubaa8\uc558\uc2b5\ub2c8\ub2e4. \uc774 \uceec\ub809\uc158\uc740 \uae30\ubcf8 \uac1c\ub150\uacfc \uc798 \uc54c\ub824\uc9c4 \uc18d\uc131\uc73c\ub85c \uc2dc\uc791\ud558\uc5ec, \ub05d\uc5d0\ub294 \uc880 \ub354 \uc0c8\ub85c\uc6b4 \uac83\ub4e4\uc744 \ub2e4\ub8f9\ub2c8\ub2e4."}),"\n",(0,s.jsx)(i.h2,{id:"\uac00\ub3c5\uc131-\uc788\ub294-\ud14d\uc2a4\ud2b8\uc5d0\uc11c-\uc77d\uae30-\uc26c\uc6b4-\ud14d\uc2a4\ud2b8\ub85c",children:"\uac00\ub3c5\uc131 \uc788\ub294 \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc77d\uae30 \uc26c\uc6b4 \ud14d\uc2a4\ud2b8\ub85c"}),"\n",(0,s.jsx)(i.p,{children:"\uc774\ubbf8\uc9c0, \uc544\uc774\ucf58, \ub3d9\uc601\uc0c1\uc740 \uc624\ub298\ub0a0 \uc6f9 \ub514\uc790\uc778\uc5d0\uc11c \ube7c\ub193\uc744 \uc218 \uc5c6\ub294 \uc694\uc18c\uc774\uc9c0\ub9cc, \uc5ec\uc804\ud788 \uac70\uc758 \ubaa8\ub4e0 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \ud14d\uc2a4\ud2b8\uac00 \ucf58\ud150\uce20\uc758 \ub300\ubd80\ubd84\uc744 \ucc28\uc9c0\ud569\ub2c8\ub2e4. \ud14d\uc2a4\ud2b8\ub294 \uc5b4\ub5a4 \uae30\uae30\uc5d0\uc11c\ub4e0 \uc77d\uc744 \uc218 \uc788\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0, \ud3f0\ud2b8 \uc18d\uc131\uc744 \uc2a4\ud0c0\uc77c\ub9c1\ud558\uace0, \ud14c\uc2a4\ud2b8\ud558\uba70, \ubbf8\uc138 \uc870\uc815\ud558\ub294 \ub370 \uc0c1\ub2f9\ud55c \uc2dc\uac04\uc744 \ud560\uc560\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(i.h3,{id:"\uae00\uaf34-\ud06c\uae30-\ud655\ub300",children:"\uae00\uaf34 \ud06c\uae30 \ud655\ub300"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"font_size_for_langth",src:n(3484).A+"",width:"720",height:"386"})}),"\n",(0,s.jsxs)(i.p,{children:["\uc0ac\uc6a9\uc790\uac00 \ud654\uba74\uc5d0\uc11c \ub5a8\uc5b4\uc9c4 \uac70\ub9ac\uc5d0 \ub530\ub77c \uae00\uaf34 \ud06c\uae30\ub294 \ud655\ub300\ud574\uc57c \ud569\ub2c8\ub2e4 (",(0,s.jsx)(i.a,{href:"https://blog.marvelapp.com/body-text-small/",children:"\ucd9c\ucc98: Marvel"}),")"]}),"\n",(0,s.jsxs)(i.p,{children:["\ud55c\ub54c ",(0,s.jsx)(i.a,{href:"https://www.smashingmagazine.com/2011/10/16-pixels-body-copy-anything-less-costly-mistake/",children:"12px \uae00\uaf34 \ud06c\uae30\uac00 \ubcf8\ubb38(body) \ud14d\uc2a4\ud2b8\uc758 \ud45c\uc900\uc774\uc5c8\uc9c0\ub9cc"}),", \ud574\uc0c1\ub3c4\uac00 \ub192\uc740 \uae30\uae30\uc758 \ub4f1\uc7a5\uc73c\ub85c \ud3c9\uade0 \uae00\uaf34 \ud06c\uae30\ub294 \ud55c\ub3d9\uc548 15\uc5d0\uc11c 18px \uc0ac\uc774\uc5d0 \uc815\ucc29\ud588\uc2b5\ub2c8\ub2e4. \ucd5c\uadfc \uba87 \ub144\uac04, \uae00\uaf34 \ud06c\uae30\ub294 \ub2e4\uc2dc 20px \uc774\uc0c1\uc73c\ub85c \uc0c1\uc2b9\ud588\uc73c\uba70, \uc774\ub294 \uc88b\uc740 \uc77c\uc785\ub2c8\ub2e4. \ud14d\uc2a4\ud2b8\ub294 \uc2a4\ub9c8\ud2b8\ud3f0\uc5d0\uc11c \ucda9\ubd84\ud788 \ucee4\uc57c \ud558\uba70, TV\uc640 \uac19\uc740 \ud070 \ud654\uba74\uc5d0\uc11c \uba40\ub9ac\uc11c\ub3c4 \uc77d\uc744 \uc218 \uc788\ub3c4\ub85d \ud654\uba74 \ud06c\uae30\uc5d0 \ub530\ub77c \ud655\ub300\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(i.p,{children:"\uc11c\uccb4\uc758 \ud2b9\uc131\uc774 \ub9e4\uc6b0 \ub2e4\uc591\ud558\uae30 \ub54c\ubb38\uc5d0 \ud45c\uc900\uc758 \ucd5c\uc18c \ud06c\uae30\ub97c \uc815\uc758\ud558\ub294 \uac83\uc740 \uc758\ubbf8\uac00 \uc5c6\uc9c0\ub9cc, \uc791\uc740 \ud654\uba74 \ud06c\uae30\uc5d0 \uc88b\uc740 \uc2dc\uc791\uc810\uc740 \uc544\ub9c8\ub3c4 18-20px\uc77c \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(i.p,{children:["\ubb3c\ub860 \uae00\uaf34 \ud06c\uae30\uc5d0 \ub300\ud574 \ub354 \ub9ce\uc774 \ub9d0\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc774 \uae00\uc5d0\uc11c \ub2e4\ub8e8\uae30\uc5d0\ub294 \ub108\ubb34 \ub9ce\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,s.jsx)(i.a,{href:"https://twitter.com/xtianmiller",children:"Christian Miller"}),"\uc758 ",(0,s.jsx)(i.a,{href:"https://blog.marvelapp.com/body-text-small/",children:"\ub2f9\uc2e0\uc758 Body \ud14d\uc2a4\ud2b8\ub294 \ub108\ubb34 \uc791\uc2b5\ub2c8\ub2e4"}),"\ub97c \uc77d\uc5b4\ubcf4\uc2dc\uae38 \uad8c\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(i.h3,{id:"\ub77c\uc778-\ub192\uc774line-height-\uc124\uc815",children:"\ub77c\uc778 \ub192\uc774(line-height) \uc124\uc815"}),"\n",(0,s.jsxs)(i.p,{children:["\ube0c\ub77c\uc6b0\uc800\uc758 \uae30\ubcf8 \ub77c\uc778 \ub192\uc774\ub294 \ub300\ub7b5 **",(0,s.jsx)(i.code,{children:"1.2"}),"**\uc785\ub2c8\ub2e4. ",(0,s.jsx)(i.a,{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-visual-presentation",children:"\uc6f9 \ucf58\ud150\uce20 \uc811\uadfc\uc131 \uc9c0\uce68"}),"\uc5d0 \ub530\ub974\uba74, \ud14d\uc2a4\ud2b8 \ube14\ub85d \ub0b4\uc758 \ubb38\ub2e8\uc5d0\uc11c\ub294 \ucd5c\uc18c **",(0,s.jsx)(i.code,{children:"1.5"}),"**\uc5ec\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"line-height",src:n(9492).A+"",width:"720",height:"277"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.em,{children:[(0,s.jsx)(i.code,{children:"line-height"}),"\uac00 1.2\uc778 \ubb38\ub2e8\uacfc 1.5\uc778 \ubb38\ub2e8 \ube44\uad50"]})}),"\n",(0,s.jsx)(i.p,{children:"\ubb38\ub2e8 \ub0b4 \ub77c\uc778 \ub192\uc774\uac00 \uc870\uc815\ub41c \ud14d\uc2a4\ud2b8\ub294 \uac00\ub3c5\uc131\uc774 \ud5a5\uc0c1\ub420 \ubfd0\ub9cc \uc544\ub2c8\ub77c, \uc2dc\uac01\uc801\uc73c\ub85c\ub3c4 \uaf64 \ub354 \ub9e4\ub825\uc801\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(i.h3,{id:"\ud14d\uc2a4\ud2b8\ub97c-\uc67c\ucabd-\ub610\ub294-\uc624\ub978\ucabd\uc73c\ub85c-\uc815\ub82c",children:"\ud14d\uc2a4\ud2b8\ub97c \uc67c\ucabd \ub610\ub294 \uc624\ub978\ucabd\uc73c\ub85c \uc815\ub82c"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"text align",src:n(3669).A+"",width:"720",height:"94"})}),"\n",(0,s.jsx)(i.p,{children:"\uc591\ucabd \uc815\ub82c\ub41c \ud14d\uc2a4\ud2b8\uc758 \ubd88\uaddc\uce59\ud55c \ub2e8\uc5b4 \uac04\uaca9"}),"\n",(0,s.jsxs)(i.p,{children:["\uc591\ucabd \uc815\ub82c\uc774 \uc67c\ucabd \ub610\ub294 \uc624\ub978\ucabd \uc815\ub82c\ub41c \ud14d\uc2a4\ud2b8\ubcf4\ub2e4 \ubcf4\uae30 \uc88b\ub2e4\uace0 \uc0dd\uac01\ud558\ub294 \uc0ac\ub78c\ub4e4\ub3c4 \uc788\uc9c0\ub9cc, \uc774\ub294 \ub098\uc05c \uad00\ud589\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4. ",(0,s.jsx)(i.code,{children:"text-align: justify"}),"\ub294 \uac19\uc740 \uae38\uc774\uc758 \uc904\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \ub2e8\uc5b4 \uac04\uaca9\uc744 \uc870\uc815\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubd88\uade0\uc77c\ud55c \uacf5\ubc31\uc740 \uac00\ub3c5\uc131\uc744 \ud574\uce60 \uc218 \uc788\uc73c\uba70 \ub9e4\uc6b0 \uc0b0\ub9cc\ud574\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud544\uc694\ud55c \uacbd\uc6b0 \ub2e8\uc5b4\ub97c \uad6c\ubd84\ud558\ub294 \uac83\ub3c4 \ud574\uacb0\ucc45\uc774 \ub420 \uc218 \uc788\uc9c0\ub9cc, ",(0,s.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens?redirectlocale=en-US&redirectslug=CSS%2Fhyphens#Languages_support_notes",children:"CSS \ud558\uc774\ud508"}),"\uc740 \uc798 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uace0 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(i.h3,{id:"\ubb38\ub2e8-\ub108\ube44-\uc815\uc758",children:"\ubb38\ub2e8 \ub108\ube44 \uc815\uc758"}),"\n",(0,s.jsxs)(i.p,{children:["\uc5ec\ub7ec \ucd9c\ucc98\uc5d0 \ub530\ub974\uba74 \ub514\uc790\uc774\ub108\ub4e4\uc740 ",(0,s.jsx)(i.a,{href:"https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/#line-length-measure-and-reading",children:"\uc904\ub2f9 45\uc5d0\uc11c 85\uc790"}),"\ub97c \uc720\uc9c0\ud574\uc57c \ud55c\ub2e4\uace0 \ud569\ub2c8\ub2e4. \uc774\uc0c1\uc801\uc778 \ubb38\ub2e8 \ub108\ube44\ub294 65\uc790\ub77c\uace0 \uc5ec\uaca8\uc9d1\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(i.p,{children:["\ud14d\uc2a4\ud2b8 \ube14\ub85d\uc758 \ub108\ube44\ub97c \uc815\uc758\ud560 \ub54c ch \ub2e8\uc704\uac00 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,s.jsx)(i.code,{children:"1ch"}),"\ub294 \uc22b\uc790 0\uc744 \ub098\ud0c0\ub0b4\ub294 \ubb38\uc790\uc758 \ub108\ube44\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4. \ub610\ud55c, ",(0,s.jsx)(i.code,{children:"font-family"})," \ub610\ub294 ",(0,s.jsx)(i.code,{children:"font-size"}),"\uac00 \ubcc0\uacbd\ub418\uba74 \uc774\uc5d0 \ub530\ub77c \ubcc0\uacbd\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-css",children:"p {\n  /* \ucd5c\ub300 \ub108\ube44 65\uc790 */\n  max-width: 65ch;\n}\n"})}),"\n",(0,s.jsxs)(i.p,{children:["\uc5b4\ub5a0\ud55c \uc885\ub958\uc758 \ubc18\uc751\ud615 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c \uae30\uc220\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74, \ub9e4\uc6b0 \ud070 \ud654\uba74\uc5d0\uc11c \uc0ac\uc774\ud2b8\ub97c \ud14c\uc2a4\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4. \uae00\uaf34 \ud06c\uae30\uc5d0 \uc81c\ud55c\uc774 \uc5c6\ub2e4\uba74, \ud2b9\uc815 \ubdf0\ud3ec\ud2b8 \ud06c\uae30\uc5d0\uc11c \ud14d\uc2a4\ud2b8\uac00 \uc77d\uae30 \uc5b4\ub824\uc6cc\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc81c\ud55c\uc744 \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc774\ub098 \ubc18\uc751\ud615 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\ub2e4\uba74, ",(0,s.jsx)(i.a,{href:"https://twitter.com/MikeRiethmuller",children:"Mike Riethmullers"}),"\uc758 \uae00 ",(0,s.jsx)(i.a,{href:"https://madebymike.com.au/writing/precise-control-responsive-typography/",children:"\ubc18\uc751\ud615 \ud0c0\uc774\ud3ec\uadf8\ub798\ud53c\uc5d0 \ub300\ud55c \uc815\ubc00\ud55c \uc81c\uc5b4"}),"\ub97c \uc77d\uc5b4\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(i.h2,{id:"\uac00\uc0c1-\uc694\uc18c\uc5d0-\ucf58\ud150\uce20-\uc2e0\uc911\ud558\uac8c-\uc0ac\uc6a9\ud558\uae30",children:"\uac00\uc0c1 \uc694\uc18c\uc5d0 \ucf58\ud150\uce20 \uc2e0\uc911\ud558\uac8c \uc0ac\uc6a9\ud558\uae30"}),"\n",(0,s.jsxs)(i.p,{children:["\uc6b0\ub9ac\ub294 ",(0,s.jsx)(i.code,{children:"::before"}),"\uc640 ",(0,s.jsx)(i.code,{children:"::after"}),"\ub77c\ub294 \uac00\uc0c1 \uc694\uc18c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc694\uc18c\uc758 \ub9e8 \ucc98\uc74c\uc774\ub098 \ub9e8 \ub05d\uc5d0 CSS\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 \ub514\uc790\uc778 \uc694\uc18c\ub97c \uc6b0\ub9ac \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ucd94\uac00\ud558\ub294 \ub9e4\uc6b0 \uc77c\ubc18\uc801\uc774\uace0 \ud3b8\ub9ac\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uc9c0\ub9cc, ",(0,s.jsx)(i.code,{children:"content"})," \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub0b4\uc6a9\uc744 \ucd94\uac00\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uad00\uc2ec\uc0ac\uc758 \ubd84\ub9ac\uc758 \uad00\uc810\uc5d0\uc11c \ubcf4\uba74, \uc6b0\ub9ac\ub294 \uc774\ub807\uac8c \ud558\uc9c0 \uc54a\uc544\uc57c \ud569\ub2c8\ub2e4."]})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3484:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/font_size_for_langth-a43026f55bde763d7c1e75c339d28fda.png"},9492:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/line-height-7273fc8d9fcacd9215ab6b95f8d04019.png"},3669:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/text-align-49810536a5c940b1bcd8982c4ba6b473.png"},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var s=n(6540);const t={},r=s.createContext(t);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);