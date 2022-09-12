"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,b=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:8},i="\u5207\u7247\u5c31\u50cf\u6570\u7ec4\u7684\u5f15\u7528",s={unversionedId:"a-tour-of-go/basics/more-types/slices-pointers",id:"a-tour-of-go/basics/more-types/slices-pointers",title:"\u5207\u7247\u5c31\u50cf\u6570\u7ec4\u7684\u5f15\u7528",description:"\u5207\u7247\u5e76\u4e0d\u5b58\u50a8\u4efb\u4f55\u6570\u636e\uff0c\u5b83\u53ea\u662f\u63cf\u8ff0\u4e86\u5e95\u5c42\u6570\u7ec4\u4e2d\u7684\u4e00\u6bb5\u3002",source:"@site/docs/a-tour-of-go/basics/more-types/slices-pointers.md",sourceDirName:"a-tour-of-go/basics/more-types",slug:"/a-tour-of-go/basics/more-types/slices-pointers",permalink:"/docs/a-tour-of-go/basics/more-types/slices-pointers",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u5207\u7247",permalink:"/docs/a-tour-of-go/basics/more-types/slices"},next:{title:"\u5207\u7247\u6587\u6cd5",permalink:"/docs/a-tour-of-go/basics/more-types/slice-literals"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5207\u7247\u5c31\u50cf\u6570\u7ec4\u7684\u5f15\u7528"},"\u5207\u7247\u5c31\u50cf\u6570\u7ec4\u7684\u5f15\u7528"),(0,o.kt)("p",null,"\u5207\u7247\u5e76\u4e0d\u5b58\u50a8\u4efb\u4f55\u6570\u636e\uff0c\u5b83\u53ea\u662f\u63cf\u8ff0\u4e86\u5e95\u5c42\u6570\u7ec4\u4e2d\u7684\u4e00\u6bb5\u3002"),(0,o.kt)("p",null,"\u66f4\u6539\u5207\u7247\u7684\u5143\u7d20\u4f1a\u4fee\u6539\u5176\u5e95\u5c42\u6570\u7ec4\u4e2d\u5bf9\u5e94\u7684\u5143\u7d20\u3002"),(0,o.kt)("p",null,"\u4e0e\u5b83\u5171\u4eab\u5e95\u5c42\u6570\u7ec4\u7684\u5207\u7247\u90fd\u4f1a\u89c2\u6d4b\u5230\u8fd9\u4e9b\u4fee\u6539\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"slices-pointers.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    names := [4]string{\n        "John",\n        "Paul",\n        "George",\n        "Ringo",\n    }\n    fmt.Println(names)\n\n    a := names[0:2]\n    b := names[1:3]\n    fmt.Println(a, b)\n\n    b[0] = "XXX"\n    fmt.Println(a, b)\n    fmt.Println(names)\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[John Paul George Ringo]\n[John Paul] [Paul George]\n[John XXX] [XXX George]\n[John XXX George Ringo]\n")))}u.isMDXComponent=!0}}]);