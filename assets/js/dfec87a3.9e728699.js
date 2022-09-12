"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),b=a,m=f["".concat(c,".").concat(b)]||f[b]||u[b]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:8},i="\u53d8\u91cf",s={unversionedId:"a-tour-of-go/basics/packages-variables-functions/variables",id:"a-tour-of-go/basics/packages-variables-functions/variables",title:"\u53d8\u91cf",description:"var \u8bed\u53e5\u7528\u4e8e\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u5217\u8868\uff0c\u8ddf\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u4e00\u6837\uff0c\u7c7b\u578b\u5728\u6700\u540e\u3002",source:"@site/docs/a-tour-of-go/basics/packages-variables-functions/variables.md",sourceDirName:"a-tour-of-go/basics/packages-variables-functions",slug:"/a-tour-of-go/basics/packages-variables-functions/variables",permalink:"/docs/a-tour-of-go/basics/packages-variables-functions/variables",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u547d\u540d\u8fd4\u56de\u503c",permalink:"/docs/a-tour-of-go/basics/packages-variables-functions/named-return-values"},next:{title:"\u53d8\u91cf\u7684\u521d\u59cb\u5316",permalink:"/docs/a-tour-of-go/basics/packages-variables-functions/variables-with-initializers"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"var")," \u8bed\u53e5\u7528\u4e8e\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u5217\u8868\uff0c\u8ddf\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u4e00\u6837\uff0c\u7c7b\u578b\u5728\u6700\u540e\u3002"),(0,a.kt)("p",null,"\u5c31\u50cf\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u770b\u5230\u7684\u4e00\u6837\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"var")," \u8bed\u53e5\u53ef\u4ee5\u51fa\u73b0\u5728\u5305\u6216\u51fd\u6570\u7ea7\u522b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"variables.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nvar c, python, java bool\n\nfunc main() {\n    var i int\n    fmt.Println(i, c, python, java)\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0 false false false\n")))}u.isMDXComponent=!0}}]);