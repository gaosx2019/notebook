"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1525],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,b=s["".concat(o,".").concat(m)]||s[m]||c[m]||l;return t?a.createElement(b,i(i({ref:n},p),{},{components:t})):a.createElement(b,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:5},i="\u6570\u636e\u5728\u5185\u5b58\u7684\u5b58\u50a8",d={unversionedId:"embedded-development/basic/linux-c/data-type-in-c-language/storage-of-data-in-memory",id:"embedded-development/basic/linux-c/data-type-in-c-language/storage-of-data-in-memory",title:"\u6570\u636e\u5728\u5185\u5b58\u7684\u5b58\u50a8",description:"\u6570\u636e\u7c7b\u578b\u5206\u7c7b",source:"@site/docs/embedded-development/basic/linux-c/data-type-in-c-language/storage-of-data-in-memory.md",sourceDirName:"embedded-development/basic/linux-c/data-type-in-c-language",slug:"/embedded-development/basic/linux-c/data-type-in-c-language/storage-of-data-in-memory",permalink:"/notebook/docs/embedded-development/basic/linux-c/data-type-in-c-language/storage-of-data-in-memory",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"C\u8bed\u8a00\u4e2d\u7684\u8f93\u5165\u51fd\u6570",permalink:"/notebook/docs/embedded-development/basic/linux-c/data-type-in-c-language/input-in-c-language"},next:{title:"\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362",permalink:"/notebook/docs/embedded-development/basic/linux-c/data-type-in-c-language/cast"}},o={},u=[{value:"\u6570\u636e\u7c7b\u578b\u5206\u7c7b",id:"\u6570\u636e\u7c7b\u578b\u5206\u7c7b",level:2},{value:"\u6570\u636e\u7c7b\u578b\u7ec6\u5206",id:"\u6570\u636e\u7c7b\u578b\u7ec6\u5206",level:2},{value:"\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7",id:"\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7",level:3},{value:"8bit\u6570\u636e\u7684\u5b58\u50a8",id:"8bit\u6570\u636e\u7684\u5b58\u50a8",level:3},{value:"\u8d85\u51fa\u8303\u56f4\u6570\u636e\u7684\u8ba1\u7b97\u65b9\u6cd5",id:"\u8d85\u51fa\u8303\u56f4\u6570\u636e\u7684\u8ba1\u7b97\u65b9\u6cd5",level:3},{value:"\u6570\u636e\u8303\u56f4",id:"\u6570\u636e\u8303\u56f4",level:4},{value:"\u8bbe\u8ba1\u89c4\u5219",id:"\u8bbe\u8ba1\u89c4\u5219",level:4},{value:"\u8ba1\u7b97\u65b9\u6cd5",id:"\u8ba1\u7b97\u65b9\u6cd5",level:4},{value:"\u793a\u4f8b\u7528\u6cd5",id:"\u793a\u4f8b\u7528\u6cd5",level:4},{value:"\u793a\u4f8b\u7528\u6cd51",id:"\u793a\u4f8b\u7528\u6cd51",level:5},{value:"\u793a\u4f8b\u7528\u6cd52",id:"\u793a\u4f8b\u7528\u6cd52",level:5},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u8f93\u51fa",id:"\u8f93\u51fa",level:3}],p={toc:u};function c(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u636e\u5728\u5185\u5b58\u7684\u5b58\u50a8"},"\u6570\u636e\u5728\u5185\u5b58\u7684\u5b58\u50a8"),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u5206\u7c7b"},"\u6570\u636e\u7c7b\u578b\u5206\u7c7b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"variables-in-c-language-01.jpg",src:t(642).Z,width:"732",height:"587"})),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u7ec6\u5206"},"\u6570\u636e\u7c7b\u578b\u7ec6\u5206"),(0,r.kt)("h3",{id:"\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7"},"\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7"),(0,r.kt)("p",null,"\u6211\u4eec\u4e0a\u8ff0\uff0c\u6240\u4ecb\u7ecd\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5168\u90e8\u90fd\u53ef\u4ee5\u5206\u4e3a\u4e24\u79cd\uff0c\u5206\u522b\u7528\u4e24\u4e2a\u5173\u952e\u5b57\u5bf9\u5e94\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"signed"),(0,r.kt)("th",{parentName:"tr",align:null},"unsigned"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6709\u7b26\u53f7\u6570\u636e \u3010\u6b63\u6570,0,\u8d1f\u6570\u3011"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u7b26\u53f7\u6570\u636e \u3010\u6b63\u6570\uff0c0\u3011")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e38\u7528\u5199\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},"signed int"),(0,r.kt)("td",{parentName:"tr",align:null},"unsigned int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7279\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7701\u7565"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53ef\u7701\u7565")))),(0,r.kt)("p",null,"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"signed char  a ;   //char  a;\nunsinged char b;\n\nsigned int c;     //int c;\nunsinged int  d;\n")),(0,r.kt)("h3",{id:"8bit\u6570\u636e\u7684\u5b58\u50a8"},"8bit\u6570\u636e\u7684\u5b58\u50a8"),(0,r.kt)("p",null,"char\uff0c\u6709\u7b26\u53f7\u7c7b\u578b\uff0c\u53601bytes\u3002\u53ef\u4ee5\u8868\u793a\u8d1f\u6570\uff0c0\uff0c\u6b63\u6570\u3002\u8303\u56f4","[-128~127]"," -128~-1 0~127"),(0,r.kt)("p",null,"unsigned char\uff0c\u65e0\u7b26\u53f7\u7c7b\u578b\uff0c\u53601bytes\u3002\u53ef\u4ee5\u8868\u793a0\uff0c\u6b63\u6570\u3002\u8303\u56f4","[0~255]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1bytes = 8bit     ===>  0000 0000    0 \n                    ~\n                        1111 1111   255\n")),(0,r.kt)("h3",{id:"\u8d85\u51fa\u8303\u56f4\u6570\u636e\u7684\u8ba1\u7b97\u65b9\u6cd5"},"\u8d85\u51fa\u8303\u56f4\u6570\u636e\u7684\u8ba1\u7b97\u65b9\u6cd5"),(0,r.kt)("h4",{id:"\u6570\u636e\u8303\u56f4"},"\u6570\u636e\u8303\u56f4"),(0,r.kt)("p",null,"char ","[-128~127]"," \u6b63\u6570\uff0c\u8d1f\u6570\uff0c0"),(0,r.kt)("p",null,"unsigned char ","[0~255]"," \u6b63\u6570\uff0c0"),(0,r.kt)("h4",{id:"\u8bbe\u8ba1\u89c4\u5219"},"\u8bbe\u8ba1\u89c4\u5219"),(0,r.kt)("p",null,"\u65e0\u7b26\u53f7\u7c7b\u578b\u7684\u6570\u539f\u7801\uff0c\u53cd\u7801\uff0c\u8865\u7801\u662f\u5b83\u672c\u8eab\u3002 ","[\u6b63\u6570\u548c0]"),(0,r.kt)("p",null,"\u6709\u7b26\u53f7\u7c7b\u578b\u7684\u6570\u7684\u6700\u9ad8\u4f4d\u8868\u793a\u7b26\u53f7\u4f4d\uff0c0\u8868\u793a\u4e3a\u6b63\u6570\uff0c1\u8868\u793a\u4e3a\u8d1f\u6570"),(0,r.kt)("p",null,"\u8d1f\u6570\u7684\u53cd\u7801 = \u7b26\u53f7\u4f4d\u4e0d\u53d8\uff0c\u5176\u4ed6\u4f4d\u6309\u4f4d\u53d6\u53cd"),(0,r.kt)("p",null,"\u8d1f\u6570\u7684\u8865\u7801 = \u53cd\u7801 + 1"),(0,r.kt)("h4",{id:"\u8ba1\u7b97\u65b9\u6cd5"},"\u8ba1\u7b97\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5148\u8ba1\u7b97\u6574\u6570\u7684\u8865\u7801(=\u53f3\u8fb9\u7684\u6570)\uff0c\u628a\u8865\u7801\u8d4b\u503c\u7ed9\u53d8\u91cf\uff0c\u7136\u540e\u89c2\u5bdf\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b\u3002\u82e5\u662f\u4e3aunsinged char\u7c7b\u578b\uff0c\u4e00\u5b9a\u4e3a\u6b63\u6570\u62160\uff0c\u539f\uff0c\u53cd\uff0c\u8865\u4e00\u6837\u3002%d\u8f93\u51fa\u7684\u539f\u7801\u5c31\u662f\u8865\u7801\uff0c\u76f4\u63a5\u8f6c\u6362\u4e3a\u5143\u7d20\u8f93\u51fa\u5373\u53ef\u3002\u82e5\u662f\u4e3achar\u7c7b\u578b\uff0c\u89c2\u5bdf\u53d8\u91cf\u5185\u5b58\u5b58\u50a8\u6570\u636e\u7684\u6700\u9ad8\u4f4d\uff0c1\u8868\u793a\u4e3a\u8d1f\u6570\uff0c%d\u8f93\u51fa\u9700\u8981\u8f6c\u6362\u4e3a\u539f\u7801\u8f93\u51fa\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b\u7528\u6cd5"},"\u793a\u4f8b\u7528\u6cd5"),(0,r.kt)("h5",{id:"\u793a\u4f8b\u7528\u6cd51"},"\u793a\u4f8b\u7528\u6cd51"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <stdio.h>\n\nint main()\n{\n    char  a = 200; \n    printf("a = %d\\n",a);  //-56\n    return 0;\n}         \n         \n//\u8ba1\u7b97\u65b9\u6cd5\uff1a\n//200 = 128 + 64 + 8  ===> 1100 1000 \u539f\u7801\n//            200\u7684\u8865\u7801===> 1100 1000 ,\u590d\u5236\u7ed9\u4e86\u53d8\u91cfa.\n//\u90a3\u4e48a\u5728\u5185\u5b58\u4e2d\u7684\u8865\u7801: 1100 1000 ,\u800ca\u4e3achar\u7c7b\u578b\uff0c\u6700\u9ad8\u4f4d\u8868\u793a\u7b26\u53f7\u4f4d\uff0c\u4e3a1\uff0c\u8bf4\u660e\u8d1f\u6570\n                      // \u53d6\u53cd: 1011 0111 \n                      //    +1  : 1011 1000 ===>-(0011 1000)==>-0x38====>-56\n')),(0,r.kt)("h5",{id:"\u793a\u4f8b\u7528\u6cd52"},"\u793a\u4f8b\u7528\u6cd52"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <stdio.h>\nint main()\n{\n    unsigned char b = 280;\n    printf("b = %d\\n",b); //24\n    return 0;\n}       \n\n//\u8ba1\u7b97\u65b9\u6cd5:\n//280 = 256 + 16 + 8 ==> 1 0001 1000,b\u4e3aunsigned char\u7c7b\u578b\uff0c\u53608\u4f4d\uff0c\n          //\u6545\u53ea\u80fd\u628a\u4f4e8bit\u590d\u5236\u7ed9\u53d8\u91cfb\u3002\n          // b\u5728\u5185\u5b58\u4e2d\u7684\u8865\u7801: 0001 1000   ,b\u4e3aunsigned char\u7c7b\u578b\uff0c\u4e00\u5b9a\u4e3a0\uff0c\u6216\u8005\u6b63\u6570\n          //           \u539f\u7801: 0001 1000  ====>0x18 ===>16 + 8 = 24\n')),(0,r.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"char a = 180;")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"unsigned char b = 300;")),(0,r.kt)("p",null,"\u8981\u6c42\u4ee5\u4e0a\u6570\u636e\u7528%d\u8f93\u51fa\uff0c\u8bf7\u5927\u5bb6\u7528\u7b14\u7b97\u4e86\u4e4b\u540e\uff0c\u518d\u901a\u8fc7\u4ee3\u7801\u9a8c\u8bc1\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\nint main()\n{\n    char a = 180;\n    unsigned char b = 300;\n    printf("a = %d\\n", a); // -76\n    printf("b = %d\\n", b); // 44\n    return 0;\n}\n\n// \u8ba1\u7b97\u65b9\u6cd5\uff1a\n// 180 = 128 + 32 + 16 + 4\n// 180\u7684\u539f\u7801\uff1a1011 0100\n// 180\u7684\u8865\u7801\uff1a1011 0100\n// \u6700\u9ad8\u4f4d\u662f1\uff0c\u8bf4\u660e\u8d1f\u6570\n//      \u53cd\u7801\uff1a1100 1011\n//      \u8865\u7801\uff1a1100 1100\n//      ====\u300b -(0100 1100) => -76\n//\n// 300 = 256 + 32 + 8 + 4\n// 300\u7684\u539f\u7801\uff1a0010 1100\n// 300\u7684\u8865\u7801\uff1a0010 1100\n//      \u6b63\u6570\n//      \u53cd\u7801\uff1a0010 1100\n//      \u8865\u7801\uff1a0010 1100\n//      ===\u300b 2^5 + 2^3 + 2^2 = 44\n//\n')),(0,r.kt)("h3",{id:"\u8f93\u51fa"},"\u8f93\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a = -76\nb = 44\n")))}c.isMDXComponent=!0},642:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/variables-in-c-language-01-0e3f454a7bd486d3e1e76002a1538f6e.jpg"}}]);