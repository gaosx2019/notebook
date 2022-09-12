"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,y=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(y,c(c({ref:t},s),{},{components:n})):r.createElement(y,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:24},c="\u51fd\u6570\u503c",i={unversionedId:"a-tour-of-go/basics/more-types/function-values",id:"a-tour-of-go/basics/more-types/function-values",title:"\u51fd\u6570\u503c",description:"\u51fd\u6570\u4e5f\u662f\u503c\u3002\u5b83\u4eec\u53ef\u4ee5\u50cf\u5176\u5b83\u503c\u4e00\u6837\u4f20\u9012\u3002",source:"@site/docs/a-tour-of-go/basics/more-types/function-values.md",sourceDirName:"a-tour-of-go/basics/more-types",slug:"/a-tour-of-go/basics/more-types/function-values",permalink:"/notebook/docs/a-tour-of-go/basics/more-types/function-values",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"\u7ec3\u4e60\uff1a\u6620\u5c04",permalink:"/notebook/docs/a-tour-of-go/basics/more-types/exercise-maps"},next:{title:"\u51fd\u6570\u7684\u95ed\u5305",permalink:"/notebook/docs/a-tour-of-go/basics/more-types/function-closures"}},u={},l=[],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u51fd\u6570\u503c"},"\u51fd\u6570\u503c"),(0,o.kt)("p",null,"\u51fd\u6570\u4e5f\u662f\u503c\u3002\u5b83\u4eec\u53ef\u4ee5\u50cf\u5176\u5b83\u503c\u4e00\u6837\u4f20\u9012\u3002"),(0,o.kt)("p",null,"\u51fd\u6570\u503c\u53ef\u4ee5\u7528\u4f5c\u51fd\u6570\u7684\u53c2\u6570\u6216\u8fd4\u56de\u503c\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"function-values.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "math"\n)\n\nfunc compute(fn func(float64, float64) float64) float64 {\n    return fn(3, 4)\n}\n\nfunc main() {\n    hypot := func(x, y float64) float64 {\n        return math.Sqrt(x*x + y*y)\n    }\n    fmt.Println(hypot(5, 12))\n\n    fmt.Println(compute(hypot))\n    fmt.Println(compute(math.Pow))\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"13\n5\n81\n")))}p.isMDXComponent=!0}}]);