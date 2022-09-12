"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,y=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},i="\u7ed3\u6784\u4f53\u6307\u9488",p={unversionedId:"a-tour-of-go/basics/more-types/struct-pointers",id:"a-tour-of-go/basics/more-types/struct-pointers",title:"\u7ed3\u6784\u4f53\u6307\u9488",description:"\u7ed3\u6784\u4f53\u5b57\u6bb5\u53ef\u4ee5\u901a\u8fc7\u7ed3\u6784\u4f53\u6307\u9488\u6765\u8bbf\u95ee\u3002",source:"@site/docs/a-tour-of-go/basics/more-types/struct-pointers.md",sourceDirName:"a-tour-of-go/basics/more-types",slug:"/a-tour-of-go/basics/more-types/struct-pointers",permalink:"/docs/a-tour-of-go/basics/more-types/struct-pointers",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u7ed3\u6784\u4f53\u5b57\u6bb5",permalink:"/docs/a-tour-of-go/basics/more-types/struct-fields"},next:{title:"\u7ed3\u6784\u4f53\u6587\u6cd5",permalink:"/docs/a-tour-of-go/basics/more-types/struct-literals"}},s={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7ed3\u6784\u4f53\u6307\u9488"},"\u7ed3\u6784\u4f53\u6307\u9488"),(0,o.kt)("p",null,"\u7ed3\u6784\u4f53\u5b57\u6bb5\u53ef\u4ee5\u901a\u8fc7\u7ed3\u6784\u4f53\u6307\u9488\u6765\u8bbf\u95ee\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u6709\u4e00\u4e2a\u6307\u5411\u7ed3\u6784\u4f53\u7684\u6307\u9488 ",(0,o.kt)("inlineCode",{parentName:"p"},"p"),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"(*p).X")," \u6765\u8bbf\u95ee\u5176\u5b57\u6bb5 ",(0,o.kt)("inlineCode",{parentName:"p"},"X"),"\u3002\u4e0d\u8fc7\u8fd9\u4e48\u5199\u592a\u5570\u55e6\u4e86\uff0c\u6240\u4ee5\u8bed\u8a00\u4e5f\u5141\u8bb8\u6211\u4eec\u4f7f\u7528\u9690\u5f0f\u95f4\u63a5\u5f15\u7528\uff0c\u76f4\u63a5\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"p.X")," \u5c31\u53ef\u4ee5\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"struct-pointers.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype Vertex struct {\n    X int\n    Y int\n}\n\nfunc main() {\n    v := Vertex{1, 2}\n    p := &v\n    p.X = 1e9\n    fmt.Println(v)\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{1000000000 2}\n")))}u.isMDXComponent=!0}}]);