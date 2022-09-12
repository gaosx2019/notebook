"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,b=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i="\u591a\u503c\u8fd4\u56de",s={unversionedId:"a-tour-of-go/basics/packages-variables-functions/multiple-results",id:"a-tour-of-go/basics/packages-variables-functions/multiple-results",title:"\u591a\u503c\u8fd4\u56de",description:"\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4efb\u610f\u6570\u91cf\u7684\u8fd4\u56de\u503c\u3002",source:"@site/docs/a-tour-of-go/basics/packages-variables-functions/multiple-results.md",sourceDirName:"a-tour-of-go/basics/packages-variables-functions",slug:"/a-tour-of-go/basics/packages-variables-functions/multiple-results",permalink:"/docs/a-tour-of-go/basics/packages-variables-functions/multiple-results",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u51fd\u6570(\u7eed)",permalink:"/docs/a-tour-of-go/basics/packages-variables-functions/functions-continued"},next:{title:"\u547d\u540d\u8fd4\u56de\u503c",permalink:"/docs/a-tour-of-go/basics/packages-variables-functions/named-return-values"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u591a\u503c\u8fd4\u56de"},"\u591a\u503c\u8fd4\u56de"),(0,a.kt)("p",null,"\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4efb\u610f\u6570\u91cf\u7684\u8fd4\u56de\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"swap")," \u51fd\u6570\u8fd4\u56de\u4e86\u4e24\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"multiple-results.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc swap(x, y string) (string, string) {\n    return y, x\n}\n\nfunc main() {\n    a, b := swap("hello", "world")\n    fmt.Println(a, b)\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"world hello\n")))}p.isMDXComponent=!0}}]);