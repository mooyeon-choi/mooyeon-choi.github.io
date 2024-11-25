"use strict";(self.webpackChunkmylog=self.webpackChunkmylog||[]).push([[4021],{6278:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=e(4848),l=e(8453);const t={slug:"identity-pool-with-aws-cognito",title:"Amazon Cognito\ub85c \uc0ac\uc6a9\uc790 \uad00\ub9ac\ud558\uae30",authors:"mooyeon",tags:["aws","cognito","swift","cocoapods"],date:"2024-11-25T19:45"},s="Amazon Cognito\ub85c \uc0ac\uc6a9\uc790 \uad00\ub9ac\ud558\uae30",d={permalink:"/blog/identity-pool-with-aws-cognito",editUrl:"https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/blog/2024-11-25-identity-pool-with-aws-cognito.md",source:"@site/blog/2024-11-25-identity-pool-with-aws-cognito.md",title:"Amazon Cognito\ub85c \uc0ac\uc6a9\uc790 \uad00\ub9ac\ud558\uae30",description:"\uc18c\uac1c",date:"2024-11-25T19:45:00.000Z",formattedDate:"2024\ub144 11\uc6d4 25\uc77c",tags:[{label:"aws",permalink:"/blog/tags/aws"},{label:"cognito",permalink:"/blog/tags/cognito"},{label:"swift",permalink:"/blog/tags/swift"},{label:"cocoapods",permalink:"/blog/tags/cocoapods"}],hasTruncateMarker:!0,authors:[{name:"Mooyeon Choi",url:"https://github.com/mooyeon-choi",imageURL:"https://github.com/mooyeon-choi.png",key:"mooyeon"}],frontMatter:{slug:"identity-pool-with-aws-cognito",title:"Amazon Cognito\ub85c \uc0ac\uc6a9\uc790 \uad00\ub9ac\ud558\uae30",authors:"mooyeon",tags:["aws","cognito","swift","cocoapods"],date:"2024-11-25T19:45"},unlisted:!1,nextItem:{title:"\uae30\uc220 \ube14\ub85c\uadf8 \ub0b4\uc6a9 \uacf5\uc720 \uc2a4\ud130\ub514 \uccab\uc8fc\ucc28 \ub9ac\ubdf0",permalink:"/blog/first-study-review"}},a={authorsImageUrls:[void 0]},c=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"User pool",id:"user-pool",level:2},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:3},{value:"\uac00\uc785\ud558\uae30",id:"\uac00\uc785\ud558\uae30",level:4},{value:"\ub85c\uadf8\uc778",id:"\ub85c\uadf8\uc778",level:4},{value:"\uad00\ub9ac\uc790 \ub85c\uadf8\uc778",id:"\uad00\ub9ac\uc790-\ub85c\uadf8\uc778",level:4},{value:"\ubcf4\uc548",id:"\ubcf4\uc548",level:4},{value:"\uc0ac\uc6a9\uc790 \uc815\uc758\ud615 \uc0ac\uc6a9\uc790 \uacbd\ud5d8",id:"\uc0ac\uc6a9\uc790-\uc815\uc758\ud615-\uc0ac\uc6a9\uc790-\uacbd\ud5d8",level:4},{value:"\ubaa8\ub2c8\ud130\ub9c1 \ubc0f \ubd84\uc11d",id:"\ubaa8\ub2c8\ud130\ub9c1-\ubc0f-\ubd84\uc11d",level:4},{value:"Amazon Cognito ID \ud480 \ud1b5\ud569",id:"amazon-cognito-id-\ud480-\ud1b5\ud569",level:4},{value:"Identity pool",id:"identity-pool",level:2},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5-1",level:3},{value:"AWS \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \uc694\uccad \uc778\uc99d",id:"aws-\uc11c\ube44\uc2a4\uc5d0-\ub300\ud55c-\uc694\uccad-\uc778\uc99d",level:4},{value:"\ub9ac\uc18c\uc2a4 \uae30\ubc18 \uc815\ucc45\uc73c\ub85c \uc694\uccad \ud544\ud130\ub9c1",id:"\ub9ac\uc18c\uc2a4-\uae30\ubc18-\uc815\ucc45\uc73c\ub85c-\uc694\uccad-\ud544\ud130\ub9c1",level:4},{value:"\uac8c\uc2a4\ud2b8 \uc561\uc138\uc2a4 \ud560\ub2f9",id:"\uac8c\uc2a4\ud2b8-\uc561\uc138\uc2a4-\ud560\ub2f9",level:4},{value:"\uc0ac\uc6a9\uc790 \ud2b9\uc131\uc5d0 \ub530\ub77c IAM \uc5ed\ud560 \ud560\ub2f9",id:"\uc0ac\uc6a9\uc790-\ud2b9\uc131\uc5d0-\ub530\ub77c-iam-\uc5ed\ud560-\ud560\ub2f9",level:4},{value:"\ub2e4\uc591\ud55c ID \uacf5\uae09\uc790 \ud5c8\uc6a9",id:"\ub2e4\uc591\ud55c-id-\uacf5\uae09\uc790-\ud5c8\uc6a9",level:4},{value:"\uc9c1\uc811 \uc790\uaca9 \uc99d\uba85",id:"\uc9c1\uc811-\uc790\uaca9-\uc99d\uba85",level:4},{value:"Cognito Sync",id:"cognito-sync",level:2}];function r(n){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito\ub294 \uc6f9 \ubc0f \ubaa8\ubc14\uc77c \uc571\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc790 \uc778\uc99d \ubc0f \uc2b9\uc778\uc744 \ucc98\ub9ac\ud55c\ub2e4. \uc0ac\uc6a9\uc790 \ud480\uc744 \uc0ac\uc6a9\ud558\uba74 \uc571\uc5d0 \uac00\uc785 \ubc0f \ub85c\uadf8\uc778 \uae30\ub2a5\uc744 \uc27d\uace0 \uc548\uc804\ud558\uac8c \ucd94\uac00\ud560 \uc218 \uc788\ub2e4. Identity pools\ub97c \uc0ac\uc6a9\ud558\uba74 \uc571\uc740 \uc0ac\uc6a9\uc790\uac00 \uc775\uba85\uc774\ub4e0 \uc778\uc99d\ub418\uc5c8\ub4e0 \ud2b9\uc815 AWS \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud558\ub294 \uc784\uc2dc \uc790\uaca9 \uc99d\uba85\uc744 \uc5bb\uc744 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"\ubbf8\uad6d, \uc218\uc220\uc2e4\uc774\ub77c\ub294 \ud2b9\uc218\ud55c \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uba74\uc11c \uc0ac\uc6a9\uc790 \uc694\uccad\uc744 \ucd5c\uc18c\ud654\ud558\uae30 \uc704\ud574 ML model \uc801\uc6a9, \uc81c\uc2a4\uccd0 \ub3d9\uc791 \ub4f1 \ub2e4\uc591\ud55c \uc2dc\ub3c4\ub97c \ud558\uc600\ub2e4. \uc774\ubc88\uc5d0\ub294 \uc0ac\uc6a9\uc790 \uc778\uc99d\uacfc \uad00\ub828\ud558\uc5ec \uc5b4\ub5bb\uac8c \ud558\uba74 \ubd88\ud544\uc694\ud55c \uacfc\uc815\uc744 \uc904\uc774\uace0 \ubcf4\ub2e4 \uc548\uc804\ud558\uac8c \uc801\uc6a9\ud560 \uc218 \uc788\uc744\uc9c0 \uace0\ubbfc\ud558\uba70 Amazon Coginto\ub97c \uc801\uc6a9\ud55c \ub0b4\uc6a9\uc774\ub2e4."}),"\n",(0,i.jsx)(o.admonition,{title:"\ubaa9\ucc28",type:"info",children:(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"#user-pool",children:"User pool"})}),"\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"#identity-pool",children:"Identity pool"})}),"\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"#github-action%EC%9D%84-%ED%86%B5%ED%95%9C-vercel-%EC%88%98%EB%8F%99-%EB%B0%B0%ED%8F%AC-%EC%99%84%EC%A0%84-%EC%A0%95%EB%B3%B5-with-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC",children:"Cognito Sync"})}),"\n"]})}),"\n",(0,i.jsx)(o.h2,{id:"user-pool",children:"User pool"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito \uc0ac\uc6a9\uc790 \ud480\uc740 \uc6f9 \ubc0f \ubaa8\ubc14\uc77c \uc571 \uc778\uc99d\uacfc \uad8c\ud55c \ubd80\uc5ec\ub97c \uc704\ud55c \uc0ac\uc6a9\uc790 \ub514\ub809\ud1a0\ub9ac\uc774\ub2e4. \uc571 \uad00\uc810\uc5d0\uc11c Amazon Cognito \uc0ac\uc6a9\uc790 \ud480\uc740 OpenID Connect(OIDC) \uc790\uaca9 \uc99d\uba85 \uacf5\uae09\uc790(IdP)\uc774\ub2e4. \uc0ac\uc6a9\uc790 \ud480\uc740 \ubcf4\uc548, \uc544\uc774\ub374\ud2f0\ud2f0, \ud398\ub354\ub808\uc774\uc158, \uc571 \ud1b5\ud569, \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uc0ac\uc6a9\uc790 \uc9c0\uc815\uc744 \uc704\ud55c \uae30\ub2a5 \uacc4\uce35\uc744 \ucd94\uac00\ud55c\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"\uc608\ub97c \ub4e4\uc5b4 \uc0ac\uc6a9\uc790\uc758 \uc138\uc158\uc774 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ucd9c\ucc98\uc5d0\uc11c \uc628 \uac83\uc778\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. Amazon Cognito \ub514\ub809\ud130\ub9ac\ub97c \uc678\ubd80 ID \uc81c\uacf5\uc5c5\uccb4\uc640 \uacb0\ud569\ud560 \uc218 \uc788\ub2e4. \uc6d0\ud558\ub294 AWS SDK\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc571\uc5d0 \uac00\uc7a5 \uc801\ud569\ud55c \uad8c\ud55c \ubd80\uc5ec \ubaa8\ub378 API\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4. \uadf8\ub9ac\uace0 Amazon Cognito\uc758 \uae30\ubcf8 \ub3d9\uc791\uc744 \uc218\uc815\ud558\uac70\ub098 \uc815\ube44\ud558\ub294 AWS Lambda \ud568\uc218\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"user pool",src:e(1471).A+"",width:"798",height:"199"})}),"\n",(0,i.jsx)(o.h3,{id:"\ud2b9\uc9d5",children:"\ud2b9\uc9d5"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito user pool\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \ud2b9\uc9d5\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\uac00\uc785\ud558\uae30",children:"\uac00\uc785\ud558\uae30"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito \uc0ac\uc6a9\uc790 \ud480\uc5d0\ub294 \uc0ac\uc6a9\uc790 \ud504\ub85c\ud544\uc744 \uc0ac\uc6a9\uc790 \ud480\uc5d0 \ucd94\uac00\ud558\ub294 \uc0ac\uc6a9\uc790 \uc911\uc2ec, \uad00\ub9ac\uc790 \uc911\uc2ec \ubc0f \ud504\ub85c\uadf8\ub798\ubc0d \ubc29\uc2dd\uc774 \uc788\ub2e4. Amazon Cognito \uc0ac\uc6a9\uc790 \ud480\uc740 \ub2e4\uc74c \uac00\uc785 \ubaa8\ub378\uc744 \uc9c0\uc6d0\ud55c\ub2e4. \uc571\uc5d0\uc11c \uc544\ub798 \ubaa8\ub378\uc758 \ubaa8\ub4e0 \uc870\ud569\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsxs)(o.admonition,{title:"\uc911\uc694",type:"warning",children:[(0,i.jsxs)(o.p,{children:["\uc0ac\uc6a9\uc790 \ud480\uc5d0\uc11c \uc0ac\uc6a9\uc790 \uac00\uc785\uc744 \ud65c\uc131\ud654 \ud558\uba74 \uc778\ud130\ub137\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \uacc4\uc815\uc5d0 \uac00\uc785\ud558\uace0 \uc571\uc5d0 \ub85c\uadf8\uc778\ud560 \uc218 \uc788\ub2e4. \uc571\uc744 \uacf5\uac1c\uc801\uc73c\ub85c \uac1c\ubc29\ud558\ub824\ub294 \uacbd\uc6b0\uac00 \uc544\ub2c8\uba74 \uc0ac\uc6a9\uc790 \ud480\uc5d0\uc11c \uc140\ud504 \ub4f1\ub85d\uc744 \ube44\ud65c\uc131\ud654 \ud574\uc57c\ud55c\ub2e4. \uc774 \uc124\uc815\uc744 \ubcc0\uacbd\ud558\ub824\uba74 \uc0ac\uc6a9\uc790 \ud480 \ucf58\uc194\uc758 ",(0,i.jsx)(o.strong,{children:"Authentication"})," \uc544\ub798 ",(0,i.jsx)(o.strong,{children:"Sign-up"})," \uba54\ub274\uc5d0\uc11c ",(0,i.jsx)(o.strong,{children:"Self-service sign-up"})," \uc124\uc815\uc744 \ubcc0\uacbd\ud558\uac70\ub098 ",(0,i.jsx)(o.code,{children:"CreateUserPool"})," \ub610\ub294 ",(0,i.jsx)(o.code,{children:"UpdateUserPool"})," API \uc694\uccad\uc5d0\uc11c ",(0,i.jsx)(o.code,{children:"AllowAdmiCreateUserOnly"})," \uac12\uc744 \uc218\uc815\ud574\uc57c \ud55c\ub2e4."]}),(0,i.jsxs)(o.p,{children:["\uc0ac\uc6a9\uc790 \ud480\uc5d0 \uc124\uc815\ud560 \uc218 \uc788\ub294 \ubcf4\uc548 \uae30\ub2a5\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/cognito/latest/developerguide/managing-security.html",children:"Amazon Cognito \uc0ac\uc6a9\uc790 \ud480 \ubcf4\uc548 \uae30\ub2a5 \uc0ac\uc6a9"}),"\uc744 \ucc38\uace0\ud558\uc790."]})]}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\uc0ac\uc6a9\uc790\ub294 \uc571\uc5d0 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \uc0ac\uc6a9\uc790 \ud480\uc5d0 \uace0\uc720\ud55c \uc0ac\uc6a9\uc790 \ud504\ub85c\ud544\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub2e4. API \uac00\uc785 \uc791\uc5c5\uc744 \ud638\ucd9c\ud558\uc5ec \uc0ac\uc6a9\uc790 \ud480\uc5d0 \uc0ac\uc6a9\uc790\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\ub2e4. \uc774\ub7ec\ud55c \uac00\uc785 \uc791\uc5c5\uc744 \ub204\uad6c\uc5d0\uac8c\ub098 \uacf5\uac1c\ud558\uac70\ub098 ",(0,i.jsx)(o.strong,{children:"Client secret"})," \ub610\ub294 ",(0,i.jsx)(o.strong,{children:"AWS credentials"}),"\ub85c \uad8c\ud55c\uc744 \ubd80\uc5ec\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["\uc0ac\uc6a9\uc790\uac00 Amazon Cognito\uc5d0 \uc815\ubcf4\ub97c \uc804\ub2ec\ud558\ub3c4\ub85d \ud5c8\uac00\ud560 \uc218 \uc788\ub294 \ud0c0\uc0ac IdP\ub85c \ub9ac\ub514\ub809\uc158\ud560 \uc218 \uc788\ub2e4. Amazon Cognito\ub294 OIDC ID \ud1a0\ud070, OAuth 2.0 ",(0,i.jsx)(o.code,{children:"userInfo"})," \ub370\uc774\ud130 \ubc0f SAML 2.0 \uc5b4\uc124\uc158\uc744 \uc0ac\uc6a9\uc790 \ud480\uc758 \uc0ac\uc6a9\uc790 \ud504\ub85c\ud544\ub85c \ucc98\ub9ac\ud55c\ub2e4. \uc18d\uc131 \ub9e4\ud551 \uaddc\uce59\uc5d0 \ub530\ub77c Amazon Cognito\uac00 \uc218\uc2e0\ud558\ub3c4\ub85d \ud558\ub824\ub294 \uc18d\uc131\uc744 \uc81c\uc5b4\ud55c\ub2e4."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"\uacf5\uac1c \ub610\ub294 \uc5f0\ud569 \uac00\uc785\uc744 \uac74\ub108\ub6f0\uace0, \uc790\uccb4 \ub370\uc774\ud130 \uc18c\uc2a4 \ubc0f \uc2a4\ud0a4\ub9c8\ub97c \uae30\ubc18\uc73c\ub85c \uc0ac\uc6a9\uc790\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4. Amazon Cognito \ucf58\uc194 \ub610\ub294 API\uc5d0\uc11c \uc9c1\uc811 \uc0ac\uc6a9\uc790\ub97c \ucd94\uac00\ud55c\ub2e4. CSV \ud30c\uc77c\uc5d0\uc11c \uc0ac\uc6a9\uc790\ub97c \uac00\uc838\uc628\ub2e4. \uae30\uc874 \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \uc0c8 \uc0ac\uc6a9\uc790\ub97c \uc870\ud68c\ud558\uace0 \uae30\uc874 \ub370\uc774\ud130\uc5d0\uc11c \uc0ac\uc6a9\uc790 \ud504\ub85c\ud544\uc744 \ucc44\uc6b0\ub294 AWS Lambda \ud568\uc218\ub97c \uc2e4\ud589\ud55c\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"\uc0ac\uc6a9\uc790\uac00 \uac00\uc785\ud55c \ud6c4 Amazon Cognito\uac00 \uc561\uc138\uc2a4 \ubc0f ID \ud1a0\ud070\uc5d0 \ub098\uc5f4\ud55c \uadf8\ub8f9\uc5d0 \ucd94\uac00\ud560 \uc218 \uc788\ub2e4. ID \ud1a0\ud070\uc744 ID \ud480\uc5d0 \uc804\ub2ec\ud560 \ub54c \uc0ac\uc6a9\uc790 \ud480 \uadf8\ub8f9\uc744 IAM \uc5ed\ud560\uc5d0 \uc5f0\uacb0\ud560 \uc218\ub3c4 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\ub85c\uadf8\uc778",children:"\ub85c\uadf8\uc778"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito\ub294 \uc571\uc5d0 \ub300\ud55c \ub3c5\ub9bd\ud615 \uc0ac\uc6a9\uc790 \ub514\ub809\ud130\ub9ac \ubc0f ID \uacf5\uae09\uc790(IdP)\uac00 \ub420 \uc218 \uc788\ub2e4. \uc0ac\uc6a9\uc790\ub294 Amazon Cognito\uc5d0\uc11c \ud638\uc2a4\ud305\ud558\ub294 \uad00\ub9ac\ud615 \ub85c\uadf8\uc778 \ud398\uc774\uc9c0 \ub610\ub294 Amazon Cognito \uc0ac\uc6a9\uc790 \ud480 API\ub97c \ud1b5\ud55c \uc0ac\uc6a9\uc790 \uc815\uc758 \uc0ac\uc6a9\uc790 \uc778\uc99d \uc11c\ube44\uc2a4\ub85c \ub85c\uadf8\uc778\ud560 \uc218 \uc788\ub2e4. \uc0ac\uc6a9\uc790 \uc815\uc758 \ud504\ub860\ud2b8\uc5d4\ub4dc \ub4a4\uc5d0 \uc788\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uacc4\uce35\uc740 \uc5ec\ub7ec\uac00\uc9c0 \ubc29\ubc95 \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc31\uc5d4\ub4dc\uc5d0\uc11c \uc694\uccad\uc744 \uc2b9\uc778\ud558\uc5ec \uc694\uccad\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"\uc0ac\uc6a9\uc790\ub294 \uc0ac\uc6a9\uc790 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638, \ud328\uc2a4\ud0a4, \uc774\uba54\uc77c \ubc0f SMS \uba54\uc2dc\uc9c0 \uc77c\ud68c\uc6a9 \ube44\ubc00\ubc88\ud638\ub85c \uc124\uc815\ud558\uace0 \ub85c\uadf8\uc778\ud560 \uc218 \uc788\ub2e4. \uc678\ubd80 \uc0ac\uc6a9\uc790 \ub514\ub809\ud1a0\ub9ac, \ub85c\uadf8\uc778 \ud6c4 \ub2e4\uc911 \uc694\uc18c \uc778\uc99d(MFA), \uc2e0\ub8b0 \uae30\uc5b5 \uc7a5\uce58, \uc124\uacc4\ud55c \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc778\uc99d \ud750\ub984\uacfc \ud1b5\ud569 \ub85c\uadf8\uc778\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito\uc5d0 \ub0b4\uc7a5\ub41c \uc0ac\uc6a9\uc790 \ub514\ub809\ud1a0\ub9ac\uc640 \uc120\ud0dd\uc801\uc73c\ub85c \uacb0\ud569\ub41c \uc678\ubd80 \ub514\ub809\ud1a0\ub9ac\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub97c \ub85c\uadf8\uc778\uc2dc\ud0a4\ub824\uba74 \ub2e4\uc74c \ud1b5\ud569\uc744 \ucd94\uac00\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"OAuth 2.0 \uc18c\uc15c \ub85c\uadf8\uc778\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uace0 \uace0\uac1d \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uac00\uc838\uc628\ub2e4. Amazon Cognito\ub294 OAuth 2.0\uc744 \ud1b5\ud574 Google, Facebook, Amazon \ubc0f Apple \ub85c\uadf8\uc778\uc744 \uc9c0\uc6d0\ud55c\ub2e4."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"SAML \ubc0f OIDC \ub85c\uadf8\uc778\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uace0 \uc9c1\uc7a5 \ubc0f \ud559\uad50 \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uac00\uc838\uc628\ub2e4. \ub610\ud55c Amanon Cognito\ub97c \uad6c\uc131\ud558\uc5ec \ubaa8\ub4e0 SAML \ub610\ub294 OpenID Connect(OIDC) ID \uacf5\uae09\uc790(IdP)\uc758 \ud074\ub808\uc784\uc744 \uc218\ub77d\ud560 \uc218\ub3c4 \uc788\ub2e4."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"\uc678\ubd80 \uc0ac\uc6a9\uc790 \ud504\ub85c\ud544\uc744 \uae30\ubcf8 \uc0ac\uc6a9\uc790 \ud504\ub85c\ud544\uc5d0 \uc5f0\uacb0\ud55c\ub2e4. \uc5f0\uacb0\ub41c \uc0ac\uc6a9\uc790\ub294 \ud0c0\uc0ac \uc0ac\uc6a9\uc790 ID\ub85c \ub85c\uadf8\uc778\ud558\uc5ec \uae30\ubcf8 \uc81c\uacf5 \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ud560\ub2f9\ud55c \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \ubc1b\uc744 \uc218 \uc788\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h4,{id:"\uad00\ub9ac\uc790-\ub85c\uadf8\uc778",children:"\uad00\ub9ac\uc790 \ub85c\uadf8\uc778"}),"\n",(0,i.jsx)(o.p,{children:"\uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ucd95\ud558\uace0 \uc2f6\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uad00\ub9ac\ud615 \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4. \uad00\ub9ac\ud615 \ub85c\uadf8\uc778\uc740 \uac00\uc785, \ub85c\uadf8\uc778, \ub2e4\uc911 \uc694\uc18c \uc778\uc99d(MFA) \ubc0f \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815\uc744 \uc704\ud55c \uc6f9 \ud398\uc774\uc9c0 \uc138\ud2b8\uc774\ub2e4. \uae30\uc874 \ub3c4\uba54\uc778\uc5d0 \uad00\ub9ac\ud615 \ub85c\uadf8\uc778\uc744 \ucd94\uac00\ud558\uac70\ub098 AWS \ud558\uc704 \ub3c4\uba54\uc778\uc5d0\uc11c \uc811\ub450\uc0ac \uc2dd\ubcc4\uc790\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\ubcf4\uc548",children:"\ubcf4\uc548"}),"\n",(0,i.jsx)(o.p,{children:"\ub85c\uceec \uc0ac\uc6a9\uc790\ub294 SMS \ub610\ub294 \uc774\uba54\uc77c \uba54\uc2dc\uc9c0\uc760 \ucf54\ub4dc \ub610\ub294 \ub2e4\uc911 \uc694\uc18c \uc778\uc99d(MFA) \ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\ub294 \uc571\uc73c\ub85c \ucd94\uac00 \uc778\uc99d \uc694\uc18c\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c MFA\ub97c \uc124\uc815\ud558\uace0 \ucc98\ub9ac\ud558\ub294 \uba54\ucee4\ub2c8\uc998\uc744 \uad6c\ucd95\ud558\uac70\ub098 \uad00\ub9ac\ub418\ub294 \ub85c\uadf8\uc778\uc774 \uc774\ub97c \uad00\ub9ac\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\ub2e4. Amazon Cognito \uc0ac\uc6a9\uc790 \ud480\uc740 \uc0ac\uc6a9\uc790\uac00 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \uae30\uae30\uc5d0\uc11c \ub85c\uadf8\uc778\ud560 \ub54c MFA\ub97c \uc6b0\ud68c\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"\uc0ac\uc6a9\uc790\uc5d0\uac8c \ucc98\uc74c\uc5d0 MFA\ub97c \uc694\uad6c\ud558\uc9c0 \uc54a\uc73c\ub824\uba74 \uc870\uac74\ubd80\ub85c \uc694\uad6c\ud560 \uc218 \uc788\ub2e4. Amazon Cognito\ub294 \uace0\uae09 \ubcf4\uc548 \uae30\ub2a5\uc744 \ud1b5\ud574 \uc7a0\uc7ac\uc801\uc778 \uc545\uc758\uc801 \ud65c\ub3d9\uc744 \uac10\uc9c0\ud558\uace0 \uc0ac\uc6a9\uc790\uc5d0\uac8c MFA\ub97c \uc124\uc815\ud558\uac70\ub098 \ub85c\uadf8\uc778\uc744 \ucc28\ub2e8\ud558\ub3c4\ub85d \uc694\uad6c\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"\uc0ac\uc6a9\uc790 \ud480\uc5d0 \ub300\ud55c \ub124\ud2b8\uc6cc\ud06c \ud2b8\ub798\ud53d\uc774 \uc545\uc758\uc801\uc77c \uc218 \uc788\ub294 \uacbd\uc6b0 AWS WAF \uc6f9 ACL\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \uc870\uce58\ub97c \ucde8\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\uc0ac\uc6a9\uc790-\uc815\uc758\ud615-\uc0ac\uc6a9\uc790-\uacbd\ud5d8",children:"\uc0ac\uc6a9\uc790 \uc815\uc758\ud615 \uc0ac\uc6a9\uc790 \uacbd\ud5d8"}),"\n",(0,i.jsx)(o.p,{children:"\uc0ac\uc6a9\uc790\uc758 \uac00\uc785, \ub85c\uadf8\uc778 \ub610\ub294 \ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8\uc758 \ub300\ubd80\ubd84 \ub2e8\uacc4\uc5d0\uc11c Amazon Cognito\uac00 \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\uc790 \uc815\uc758\ud560 \uc218 \uc788\ub2e4. Lambda \ud2b8\ub9ac\uac70\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790 \uc815\uc758 \uc870\uac74\uc5d0 \ub530\ub77c ID \ud1a0\ud070\uc744 \uc218\uc815\ud558\uac70\ub098 \uac00\uc785 \uc694\uccad\uc744 \uac70\ubd80\ud560 \uc218 \uc788\ub2e4. \uc0ac\uc6a9\uc790 \uc815\uc758 \uc778\uc99d \ud750\ub984\uc744 \uc9c1\uc811 \ub9cc\ub4e4 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"\uc0ac\uc6a9\uc790 \uc815\uc758 CSS\uc640 \ub85c\uace0\ub97c \uc5c5\ub85c\ub4dc\ud558\uc5ec \uad00\ub9ac\ub418\ub294 \ub85c\uadf8\uc778\uc5d0 \uce5c\uc219\ud55c \ubaa8\uc591\uacfc \ub290\ub08c\uc744 \ubd80\uc5ec\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\ubaa8\ub2c8\ud130\ub9c1-\ubc0f-\ubd84\uc11d",children:"\ubaa8\ub2c8\ud130\ub9c1 \ubc0f \ubd84\uc11d"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito \uc0ac\uc6a9\uc790 \ud480\uc744 \uad00\ub9ac\ud615 \ub85c\uadf8\uc778 \uc694\uccad\uc744 \ud3ec\ud568\ud55c API \uc694\uccad\uc744 AWS CloudTrail\uc5d0 \uae30\ub85d\ud55c\ub2e4. Amazon CloudWatch Logs\uc5d0\uc11c \uc131\ub2a5 \uc9c0\ud45c\ub97c \uac80\ud1a0\ud558\uace0, Lambda \ud2b8\ub9ac\uac70\ub97c \uc0ac\uc6a9\ud558\uc5ec CloudWatch\uc5d0 \uc0ac\uc6a9\uc790 \uc9c0\uc815 \ub85c\uadf8\ub97c \ud478\uc2dc\ud558\uace0, \uc774\uba54\uc77c \ubc0f SMS \uba54\uc2dc\uc9c0 \uc804\ub2ec\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0, Service Quotas \ucf58\uc194\uc5d0\uc11c API \uc694\uccad \ubcfc\ub968\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"Plus \uae30\ub2a5 \ud50c\ub79c\uc744 \uc0ac\uc6a9\ud558\uba74 \uc790\ub3d9 \ud559\uc2b5 \uae30\uc220\ub85c \uc0ac\uc6a9\uc790 \uc778\uc99d \uc2dc\ub3c4\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\uc5ec \uce68\ud574 \uc9c0\ud45c\ub97c \ud30c\uc545\ud558\uace0 \uc704\ud5d8\uc744 \uc989\uc2dc \ud574\uacb0\ud560 \uc218 \uc788\ub2e4. \uc774\ub7ec\ud55c \uace0\uae09 \ubcf4\uc548 \uae30\ub2a5\uc740 \uc0ac\uc6a9\uc790 \ud65c\ub3d9\uc744 \uc0ac\uc6a9\uc790 \ud480\uc5d0 \uae30\ub85d\ud558\uace0, \uc120\ud0dd\uc801\uc73c\ub85c Amazon S3, CloudWatch Logs \ub610\ub294 Amazon Data Firehouse\uc5d0 \uae30\ub85d\ud55c\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"API \uc694\uccad\uc5d0\uc11c Amazon Pinopoint \ucea0\ud398\uc778\uc73c\ub85c \ub514\ubc14\uc774\uc2a4 \ubc0f \uc138\uc158 \ub370\uc774\ud130\ub97c \ub85c\uae45\ud560 \uc218\ub3c4 \uc788\ub2e4. Amazon Pinpoint\ub97c \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790 \ud65c\ub3d9 \ubd84\uc11d\uc5d0 \ub530\ub77c \uc571\uc5d0\uc11c \ud478\uc2dc \uc54c\ub9bc\uc744 \ubcf4\ub0bc \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"amazon-cognito-id-\ud480-\ud1b5\ud569",children:"Amazon Cognito ID \ud480 \ud1b5\ud569"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito\uc758 \ub2e4\ub978 \uc808\ubc18\uc740 ID \ud480\uc774\ub2e4. ID \ud480\uc740 \uc0ac\uc6a9\uc790\ub85c\ubd80\ud130 Amazon DynamoDB \ub610\ub294 Amazon S3\uc640 \uac19\uc740 AWS \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c API \uc694\uccad\uc744 \uc2b9\uc778\ud558\uace0 \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 \uc790\uaca9 \uc99d\uba85\uc744 \uc81c\uacf5\ud55c\ub2e4. \uc0ac\uc6a9\uc790 \ud480\uc5d0\uc11c \uc0ac\uc6a9\uc790\ub97c \ubd84\ub958\ud558\ub294 \ubc29\ubc95\uc5d0 \ub530\ub77c \ub370\uc774\ud130\ub97c \ubcf4\ud638\ud558\ub294 ID \uae30\ubc18 \uc561\uc138\uc2a4 \uc815\ucc45\uc744 \ube4c\ub4dc\ud560 \uc218 \uc788\ub2e4. ID \ud480\uc740 \uc0ac\uc6a9\uc790 \ud480 \uc778\uc99d\uacfc \ubb34\uad00\ud558\uac8c \ub2e4\uc591\ud55c ID \uacf5\uae09\uc790\ub85c\ubd80\ud130 \ud1a0\ud070 \ubc0f SAML 2.0 \uc5b4\uc124\uc158\uc744 \ud5c8\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.h2,{id:"identity-pool",children:"Identity pool"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito ID \ud480\uc740 AWS \uc790\uaca9 \uc99d\uba85\uc73c\ub85c \uad50\ud658\ud560 \uc218 \uc788\ub294 \ud398\ub354\ub808\uc774\uc158 ID \ub514\ub809\ud1a0\ub9ac\uc774\ub2e4. ID \ud480\uc740 \uc571 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc784\uc2dc AWS \uc790\uaca9 \uc99d\uba85\uc744 \uc0dd\uc131\ud55c\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778\ud588\ub4e0 \uc544\uc9c1 \uc2dd\ubcc4\ud558\uc9c0 \uc54a\uc558\ub4e0 \uc0c1\uad00\uc5c6\ub2e4. AWS Identity and Access Management(IAM) \uc5ed\ud560 \ubc0f \uc815\ucc45\uc744 \uc0ac\uc6a9\ud558\uba74 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubd80\uc5ec\ud558\ub824\ub294 \uad8c\ud55c \uc218\uc900\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uac8c\uc2a4\ud2b8\ub85c \uc2dc\uc791\ud558\uc5ec AWS \uc11c\ube44\uc2a4\uc5d0 \ubcf4\uad00\ub41c \uc790\uc0b0\uc744 \uac80\uc0c9\ud560 \uc218 \uc788\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ud0c0\uc0ac ID \uacf5\uae09\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub85c\uadf8\uc778\ud558\uc5ec \ub4f1\ub85d\ub41c \uba64\ubc84\uc5d0\uac8c \uc81c\uacf5\ud558\ub294 \uc790\uc0b0\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\ub97c \uc7a0\uae08 \ud574\uc81c \ud560 \uc218 \uc788\ub2e4. \ud0c0\uc0ac ID \uacf5\uae09\uc790\ub294 Apple\uc774\ub098 Google\uacfc \uac19\uc740 \uc18c\ube44\uc790(\uc18c\uc15c) OAuth 2.0 \uacf5\uae09\uc790, \uc0ac\uc6a9\uc790 \uc9c0\uc815 SAML \ub610\ub294 OIDC ID \uacf5\uae09\uc790 \ub610\ub294 \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \ub514\uc790\uc778\ud55c \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc778\uc99d \uccb4\uacc4(\uac1c\ubc1c \uacf5\uae09\uc790\ub77c\uace0\ub3c4 \ud568)\uac00 \ub420 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.h3,{id:"\ud2b9\uc9d5-1",children:"\ud2b9\uc9d5"}),"\n",(0,i.jsx)(o.h4,{id:"aws-\uc11c\ube44\uc2a4\uc5d0-\ub300\ud55c-\uc694\uccad-\uc778\uc99d",children:"AWS \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \uc694\uccad \uc778\uc99d"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Simple Storage Service(Amazon S3) \ubc0f Amazon DynamoDB\uc640 \uac19\uc740 AWS \uc11c\ube44\uc2a4\uc5d0 API \uc694\uccad\uc744 \uc778\uc99d\ud55c\ub2e4. Amazon Pinpoint \ubc0f Amazon CloudWatch\uc640 \uac19\uc740 \uc11c\ube44\uc2a4\ub85c \uc0ac\uc6a9\uc790 \ud65c\ub3d9\uc744 \ubd84\uc11d\ud55c\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\ub9ac\uc18c\uc2a4-\uae30\ubc18-\uc815\ucc45\uc73c\ub85c-\uc694\uccad-\ud544\ud130\ub9c1",children:"\ub9ac\uc18c\uc2a4 \uae30\ubc18 \uc815\ucc45\uc73c\ub85c \uc694\uccad \ud544\ud130\ub9c1"}),"\n",(0,i.jsx)(o.p,{children:"\ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc790 \uc561\uc138\uc2a4\ub97c \uc138\ubd80\uc801\uc73c\ub85c \uc81c\uc5b4\ud55c\ub2e4. \uc0ac\uc6a9\uc790 \ud074\ub808\uc784\uc744 IAM \uc138\uc158 \ud0dc\uadf8\ub85c \ubcc0\ud658\ud558\uace0 \uc0ac\uc6a9\uc790\uc758 \uac1c\ubcc4 \ud558\uc704 \uc9d1\ud569\uc5d0 \ub9ac\uc18c\uc2a4 \uc561\uc138\uc2a4\ub97c \ubd80\uc5ec\ud558\ub294 IAM \uc815\ucc45\uc744 \uad6c\ucd95\ud55c\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\uac8c\uc2a4\ud2b8-\uc561\uc138\uc2a4-\ud560\ub2f9",children:"\uac8c\uc2a4\ud2b8 \uc561\uc138\uc2a4 \ud560\ub2f9"}),"\n",(0,i.jsx)(o.p,{children:"\uc544\uc9c1 \ub85c\uadf8\uc778\ud558\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\uc758 \uacbd\uc6b0, \uc881\uc740 \uc561\uc138\uc2a4 \ubc94\uc704\ub85c AWS \uc790\uaca9 \uc99d\uba85\uc744 \uc0dd\uc131\ud558\ub3c4\ub85d ID \ud480\uc744 \uad6c\uc131\ud55c\ub2e4. \ub2e8\uc77c \ub85c\uadf8\uc778 \uacf5\uae09\uc790\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub97c \uc778\uc99d\ud558\uc5ec \uc561\uc138\uc2a4 \uad8c\ud55c\uc744 \ub192\uc77c \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\uc0ac\uc6a9\uc790-\ud2b9\uc131\uc5d0-\ub530\ub77c-iam-\uc5ed\ud560-\ud560\ub2f9",children:"\uc0ac\uc6a9\uc790 \ud2b9\uc131\uc5d0 \ub530\ub77c IAM \uc5ed\ud560 \ud560\ub2f9"}),"\n",(0,i.jsx)(o.p,{children:"\uc778\uc99d\ub41c \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub2e8\uc77c IAM \uc5ed\ud560\uc744 \ud560\ub2f9\ud558\uac70\ub098 \uac01 \uc0ac\uc6a9\uc790\uc758 \ud074\ub808\uc784\uc5d0 \ub530\ub77c \uc5ed\ud560\uc744 \uc120\ud0dd\ud55c\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\ub2e4\uc591\ud55c-id-\uacf5\uae09\uc790-\ud5c8\uc6a9",children:"\ub2e4\uc591\ud55c ID \uacf5\uae09\uc790 \ud5c8\uc6a9"}),"\n",(0,i.jsx)(o.p,{children:"AWS \uc790\uaca9 \uc99d\uba85\uc744 \uc704\ud574 ID \ub610\ub294 \uc561\uc138\uc2a4 \ud1a0\ud070, \uc0ac\uc6a9\uc790 \ud480 \ud1a0\ud070, SAML \uc5b4\uc124\uc158 \ub610\ub294 \uc18c\uc15c \uacf5\uae09\uc790 OAuth \ud1a0\ud070\uc744 \uad50\ud658\ud55c\ub2e4."}),"\n",(0,i.jsx)(o.h4,{id:"\uc9c1\uc811-\uc790\uaca9-\uc99d\uba85",children:"\uc9c1\uc811 \uc790\uaca9 \uc99d\uba85"}),"\n",(0,i.jsx)(o.p,{children:"\uc0ac\uc6a9\uc790 \uac80\uc99d\uc744 \uc9c1\uc811 \uc218\ud589\ud558\uace0 \uac1c\ubc1c\uc790 AWS \uc790\uaca9 \uc99d\uba85\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc790\uaca9 \uc99d\uba85\uc744 \ubc1c\uae09\ud55c\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"\uc571\uc5d0 \uc778\uc99d \ubc0f \uad8c\ud55c \ubd80\uc5ec \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\ub294 Amazon Cognito \uc0ac\uc6a9\uc790 \ud480\uc774 \uc774\ubbf8 \uc788\uc744 \uc218 \uc788\ub2e4. \uc0ac\uc6a9\uc790 \ud480\uc744 ID \ud480\uc5d0 \ub300\ud55c ID \uacf5\uae09\uc790(IdP)\ub85c \uc124\uc815\ud560 \uc218 \uc788\ub2e4. \uadf8\ub807\uac8c \ud558\uba74 \uc0ac\uc6a9\uc790\ub294 \uc0ac\uc6a9\uc790 \ud480 IdP\ub97c \ud1b5\ud574 \uc778\uc99d\ud558\uace0, \ud074\ub808\uc784\uc744 \uacf5\ud1b5 OIDC ID \ud1a0\ud070\uc73c\ub85c \ud1b5\ud569\ud558\uace0, \ud574\ub2f9 \ud1a0\ud070\uc744 AWS \uc790\uaca9 \uc99d\uba85\uc73c\ub85c \uad50\ud658\ud560 \uc218 \uc788\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uc0ac\uc6a9\uc790\ub294 \uc11c\uba85\ub41c \uc694\uccad\uc5d0\uc11c \uc790\uaca9 \uc99d\uba85\uc744 AWS \uc11c\ube44\uc2a4\uc5d0 \uc81c\uc2dc\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"\ub610\ud55c \ubaa8\ub4e0 ID \uacf5\uae09\uc790\uc758 \uc778\uc99d\ub41c \ud074\ub808\uc784\uc744 ID \ud480\uc5d0 \uc9c1\uc811 \uc81c\ucd9c\ud560 \uc218 \uc788\ub2e4. Amazon Cognito\ub294 SAML, OAuth \ubc0f OIDC \uacf5\uae09\uc790\uc758 \uc0ac\uc6a9\uc790 \ud074\ub808\uc784\uc744 \ub2e8\uae30 \uc790\uaca9 \uc99d\uba85\uc5d0 \ub300\ud55c AssumeRoleWithWebIdentity API \uc694\uccad\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc815\uc758\ud55c\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito \uc0ac\uc6a9\uc790 \ud480\uc740 SSO \uc9c0\uc6d0 \uc571\uc5d0 \ub300\ud55c OIDC ID \uacf5\uae09\uc790\uc640 \uac19\ub2e4. ID \ud480\uc740 IAM \uad8c\ud55c \ubd80\uc5ec\uc5d0 \uac00\uc7a5 \uc798 \uc791\ub3d9\ud558\ub294 \ub9ac\uc18c\uc2a4 \uc885\uc18d\uc131\uc774 \uc788\ub294 \ubaa8\ub4e0 \uc571\uc5d0 \ub300\ud55c AWS ID \uacf5\uae09\uc790 \uc5ed\ud560\uc744 \ud55c\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito ID \ud480\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 ID \uacf5\uae09\uc790\ub97c \uc9c0\uc6d0\ud55c\ub2e4."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"\uacf5\uacf5 \uacf5\uae09\uc790: Amazon\uc744 ID \ud480 IdP\ub85c \ub85c\uadf8\uc778 \uc124\uc815, Facebook\uc744 ID \ud480 IDP\ub85c \uc124\uc815, Google\uc744 ID \ud480 IdP\ub85c \uc124\uc815, Apple\uc744 ID \ud480 IdP\ub85c \ub85c\uadf8\uc778 \uc124\uc815"}),"\n",(0,i.jsx)(o.li,{children:"Amazon Cognito \uc0ac\uc6a9\uc790 \ud480"}),"\n",(0,i.jsx)(o.li,{children:"OIDC \uacf5\uae09\uc790\ub97c ID \ud480 IdP\ub85c \uc124\uc815"}),"\n",(0,i.jsx)(o.li,{children:"SAML \uacf5\uae09\uc790\ub97c ID \ud480 IdP\ub85c \uc124\uc815"}),"\n",(0,i.jsx)(o.li,{children:"\uac1c\ubc1c\uc790 \uc778\uc99d ID"}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Amazon Cognito ID \ud480 \uc9c0\uc5ed \uac00\uc6a9\uc131\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,i.jsx)(o.a,{href:"https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/",children:"AWS \uc11c\ube44\uc2a4 \uc9c0\uc5ed \uac00\uc6a9\uc131"}),"\uc744 \ud1b5\ud574 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,i.jsx)(o.h2,{id:"cognito-sync",children:"Cognito Sync"}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito Sync\ub294 AWS AppSync\uc640 \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654 \ud558\ubbc0\ub85c AWS AppSync\ub97c \uc0ac\uc6a9\ud574\ub3c4 \ub41c\ub2e4."}),"\n",(0,i.jsx)(o.p,{children:"Amazon Cognito Sync\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uad00\ub828 \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uc5ec\ub7ec\uae30\uae30\uc5d0\uc11c \ub3d9\uae30\ud654\ud560 \uc218 \uc788\ub294 AWS \uc11c\ube44\uc2a4 \ubc0f \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc774\ub2e4. Amazon Cognito Sync\ub294 \uc790\uccb4 \ubc31\uc5d4\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0\ub3c4 \ubaa8\ubc14\uc77c \uae30\uae30\uc640 \uc6f9\uc5d0\uc11c \uc0ac\uc6a9\uc790 \ud504\ub85c\ud544 \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654\ud560 \uc218 \uc788\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ub370\uc774\ud130\ub97c \ub85c\uceec\uc5d0 \uce90\uc2dc\ud558\uc5ec \uc571\uc774 \uae30\uae30 \uc5f0\uacb0 \uc0c1\ud0dc\uc5d0 \uad00\uacc4\uc5c6\uc774 \ub370\uc774\ud130\ub97c \uc77d\uace0 \uc4f8 \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4. \uae30\uae30\uac00 \uc628\ub77c\uc778 \uc0c1\ud0dc\uc774\uba74 \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654\ud560 \uc218 \uc788\ub2e4. \ud478\uc2dc \ub3d9\uae30\ud654\ub97c \uc124\uc815\ud558\uba74 \ub2e4\ub978 \uae30\uae30\uc5d0 \uc5c5\ub370\uc774\ud2b8\uac00 \uc788\uc74c\uc744 \uc989\uc2dc \uc54c\ub9b4 \uc218 \uc788\ub2e4."})]})}function h(n={}){const{wrapper:o}={...(0,l.R)(),...n.components};return o?(0,i.jsx)(o,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},1471:(n,o,e)=>{e.d(o,{A:()=>i});const i=e.p+"assets/images/user_pool-8473381fabe3542107f2f3cc27407d5b.png"},8453:(n,o,e)=>{e.d(o,{R:()=>s,x:()=>d});var i=e(6540);const l={},t=i.createContext(l);function s(n){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function d(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),i.createElement(t.Provider,{value:o},n.children)}}}]);