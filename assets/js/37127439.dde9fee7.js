"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},l="\u5e0c\u5c14\u6392\u5e8f",i={unversionedId:"embedded-development/basic/data-structure/sort/shell-sort",id:"embedded-development/basic/data-structure/sort/shell-sort",title:"\u5e0c\u5c14\u6392\u5e8f",description:"\u4ecb\u7ecd",source:"@site/docs/embedded-development/basic/data-structure/sort/shell-sort.md",sourceDirName:"embedded-development/basic/data-structure/sort",slug:"/embedded-development/basic/data-structure/sort/shell-sort",permalink:"/notebook/docs/embedded-development/basic/data-structure/sort/shell-sort",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u76f4\u63a5\u63d2\u5165\u6392\u5e8f",permalink:"/notebook/docs/embedded-development/basic/data-structure/sort/insert-directly-sort"},next:{title:"\u5feb\u901f\u6392\u5e8f",permalink:"/notebook/docs/embedded-development/basic/data-structure/sort/quick-sort"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u6392\u5e8f\u793a\u4f8b",id:"\u6392\u5e8f\u793a\u4f8b",level:2},{value:"\u521d\u59cb\u6570\u636e",id:"\u521d\u59cb\u6570\u636e",level:3},{value:"\u7b2c\u4e00\u6b21\u6392\u5e8f\uff0c gap = 8 / 2 = 4",id:"\u7b2c\u4e00\u6b21\u6392\u5e8f-gap--8--2--4",level:3},{value:"\u7b2c\u4e8c\u6b21\u6392\u5e8f\uff0c gap = 4 / 2 = 2",id:"\u7b2c\u4e8c\u6b21\u6392\u5e8f-gap--4--2--2",level:3},{value:"\u7b2c\u4e09\u6b21\u6392\u5e8f\uff0c gap = 2 / 2 = 1",id:"\u7b2c\u4e09\u6b21\u6392\u5e8f-gap--2--2--1",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"shell_sort.c",id:"shell_sortc",level:3},{value:"\u8f93\u51fa",id:"\u8f93\u51fa",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e0c\u5c14\u6392\u5e8f"},"\u5e0c\u5c14\u6392\u5e8f"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u5e0c\u5c14\u6392\u5e8f\u4e5f\u662f\u63d2\u5165\u6392\u5e8f\u7684\u4e00\u79cd\u3002\u4ed6\u662f\u5bf9\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\u7684\u4e00\u79cd\u7248\u672c\u7684\u6539\u8fdb\u3002\u5b83\u7684\u6838\u5fc3\u601d\u7ef4\u662f\u5148\u5c06\u6574\u4e2a\u5f85\u6392\u5143\u7d20\u5e8f\u5217\u5206\u5272\u6210\u82e5\u5e72\u4e2a\u5b50\u5e8f\u5217(\u4e00\u822c\u5143\u7d20\u7684\u4e2a\u6570/2\u83b7\u5f97)\uff0c\u7136\u540e\u5bf9\u6bcf\u4e2a\u7ec4\u5206\u522b\u8fdb\u884c\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\u3002\u968f\u7740\u5e8f\u5217\u7684\u9010\u6e10\u51cf\u5c0f\uff0c\u6240\u5305\u542b\u7684\u8bb0\u5f55\u5c31\u8d8a\u6765\u8d8a\u591a\uff0c\u5f53\u5e8f\u5217\u4e3a1\u7684\u65f6\u5019\uff0c\u6574\u4e2a\u6570\u636e\u5408\u6210\u4e00\u7ec4\u3002 \u5219\u5b8c\u6210\u6392\u5e8f\u3002"),(0,o.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.kt)("p",null,"\u5e0c\u5c14\u6392\u5e8f\u56e0\u4e3a\u5176\u6392\u5e8f\u7684\u7279\u6b8a\u6027\uff0c\u5bf9\u4e2d\u7b49\u5927\u5c0f\u89c4\u6a21\u7684\u6570\u636e\u6392\u5e8f\u8868\u73b0\u826f\u597d\u3002\u4f46\u662f\u5bf9\u975e\u5e38\u5927\u578b\u7684\u6570\u636e\u6392\u5e8f\u4e0d\u662f\u6700\u4f18\u7684\u9009\u62e9\u3002"),(0,o.kt)("h2",{id:"\u6392\u5e8f\u793a\u4f8b"},"\u6392\u5e8f\u793a\u4f8b"),(0,o.kt)("p",null,"\u5e0c\u5c14\u6392\u5e8f\u76ee\u7684\u4e3a\u4e86\u52a0\u5feb\u901f\u5ea6\u6539\u8fdb\u4e86\u63d2\u5165\u6392\u5e8f\uff0c\u4ea4\u6362\u4e0d\u76f8\u90bb\u7684\u5143\u7d20\u5bf9\u6570\u7ec4\u7684\u5c40\u90e8\u8fdb\u884c\u6392\u5e8f\uff0c\u5e76\u6700\u7ec8\u7528\u63d2\u5165\u6392\u5e8f\u5c06\u5c40\u90e8\u6709\u5e8f\u7684\u6570\u7ec4\u6392\u5e8f\u3002"),(0,o.kt)("p",null,"\u5728\u6b64\u6211\u4eec\u9009\u62e9\u4ee5 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"gap=length/2"),"\u7684\u65b9\u5f0f\u7c7b\u8fdb\u884c\u6392\u5e8f\u3002"),"\u7528\u5e8f\u5217 ",(0,o.kt)("inlineCode",{parentName:"p"},"{n/2,(n/2)/2\u20261}")," \u6765\u8868\u793a\u3002"),(0,o.kt)("h3",{id:"\u521d\u59cb\u6570\u636e"},"\u521d\u59cb\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int  a[] = {9,1,2,5,7,4,3,6};\nint len = sizeof(a)/sizeof(a[0]); // 8\n")),(0,o.kt)("h3",{id:"\u7b2c\u4e00\u6b21\u6392\u5e8f-gap--8--2--4"},"\u7b2c\u4e00\u6b21\u6392\u5e8f\uff0c gap = 8 / 2 = 4"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"shell-sort-01.jpeg",src:n(906).Z,width:"777",height:"639"})),(0,o.kt)("h3",{id:"\u7b2c\u4e8c\u6b21\u6392\u5e8f-gap--4--2--2"},"\u7b2c\u4e8c\u6b21\u6392\u5e8f\uff0c gap = 4 / 2 = 2"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"shell-sort-02.jpeg",src:n(429).Z,width:"718",height:"768"})),(0,o.kt)("h3",{id:"\u7b2c\u4e09\u6b21\u6392\u5e8f-gap--2--2--1"},"\u7b2c\u4e09\u6b21\u6392\u5e8f\uff0c gap = 2 / 2 = 1"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"shell-sort-03.jpeg",src:n(1354).Z,width:"692",height:"191"})),(0,o.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.kt)("h3",{id:"shell_sortc"},"shell_sort.c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'//\n// Created by gaosx on 22-9-9.\n//\n\n#include <stdio.h>\n\nvoid shell_sort(int *p, int n) {\n    int i = 0, j = 0, k = 0, temp = 0;\n    for (k = n / 2; k >= 1; k = k / 2) //\u5206\u6210\u7684\u7ec4\u6570\n    {\n        for (i = k; i < n; i++)//\u63d2\u5165\u6392\u5e8f\u7684\u6b21\u6570\n        {\n            temp = p[i];\n            for (j = i - k; j >= 0 && p[j] > temp; j = j - k)//\u627e\u5230\u6bcf\u7ec4\u4e2d\u7684\u5143\u7d20\uff0c\u8fdb\u884c\u6392\u5217\u3002\n            {                                             //\u6bcf\u7ec4\u5143\u7d20\u76f8\u9694k\u4e2a\n                p[j + k] = p[j];\n            }\n            p[j + k] = temp;\n        }\n    }\n}\n\nvoid output_array(int *p, int n) {\n    int i = 0;\n    for (i = 0; i < n; i++) {\n        printf("%d ", p[i]);\n    }\n    printf("\\n");\n}\n\nint main() {\n    int a[] = {9, 1, 2, 5, 7, 4, 3, 6};\n\n    int n = sizeof(a) / sizeof(a[0]);\n\n    shell_sort(a, n);\n    output_array(a, n);\n    return 0;\n}\n')),(0,o.kt)("h3",{id:"\u8f93\u51fa"},"\u8f93\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1 2 3 4 5 6 7 9\n")))}c.isMDXComponent=!0},906:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shell-sort-01-5990843f567fa02d0ebcfb33910f6796.jpeg"},429:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shell-sort-02-156004b664081692cd3d03b75e1732a3.jpeg"},1354:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shell-sort-03-3172387dff1b21dc59b4799ed610e408.jpeg"}}]);