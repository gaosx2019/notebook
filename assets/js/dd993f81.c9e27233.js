"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7104],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:5},i="\u51fd\u6570(\u7eed)",c={unversionedId:"a-tour-of-go/basics/packages-variables-functions/functions-continued",id:"a-tour-of-go/basics/packages-variables-functions/functions-continued",title:"\u51fd\u6570(\u7eed)",description:"\u5f53\u8fde\u7eed\u4e24\u4e2a\u6216\u591a\u4e2a\u51fd\u6570\u7684\u5df2\u547d\u540d\u5f62\u53c2\u7c7b\u578b\u76f8\u540c\u65f6\uff0c\u9664\u6700\u540e\u4e00\u4e2a\u7c7b\u578b\u4ee5\u5916\uff0c\u5176\u5b83\u90fd\u53ef\u4ee5\u7701\u7565\u3002",source:"@site/docs/a-tour-of-go/basics/packages-variables-functions/functions-continued.md",sourceDirName:"a-tour-of-go/basics/packages-variables-functions",slug:"/a-tour-of-go/basics/packages-variables-functions/functions-continued",permalink:"/docs/a-tour-of-go/basics/packages-variables-functions/functions-continued",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u51fd\u6570",permalink:"/docs/a-tour-of-go/basics/packages-variables-functions/functions"},next:{title:"\u591a\u503c\u8fd4\u56de",permalink:"/docs/a-tour-of-go/basics/packages-variables-functions/multiple-results"}},s={},u=[],l={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u51fd\u6570\u7eed"},"\u51fd\u6570(\u7eed)"),(0,a.kt)("p",null,"\u5f53\u8fde\u7eed\u4e24\u4e2a\u6216\u591a\u4e2a\u51fd\u6570\u7684\u5df2\u547d\u540d\u5f62\u53c2\u7c7b\u578b\u76f8\u540c\u65f6\uff0c\u9664\u6700\u540e\u4e00\u4e2a\u7c7b\u578b\u4ee5\u5916\uff0c\u5176\u5b83\u90fd\u53ef\u4ee5\u7701\u7565\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"x int, y int\n")),(0,a.kt)("p",null,"\u88ab\u7f29\u5199\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"x, y int\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"functions-continued.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc add(x, y int) int {\n    return x + y\n}\n\nfunc main() {\n    fmt.Println(add(42, 13))\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"55\n")))}p.isMDXComponent=!0}}]);