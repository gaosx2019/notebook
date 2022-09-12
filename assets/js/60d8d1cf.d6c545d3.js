"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,p=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(p,s(s({ref:t},f),{},{components:n})):r.createElement(p,s({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},s="\u65b9\u6cd5\u5373\u51fd\u6570",i={unversionedId:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-funcs",id:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-funcs",title:"\u65b9\u6cd5\u5373\u51fd\u6570",description:"\u8bb0\u4f4f\uff1a\u65b9\u6cd5\u53ea\u662f\u4e2a\u5e26\u63a5\u6536\u8005\u53c2\u6570\u7684\u51fd\u6570\u3002",source:"@site/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-funcs.md",sourceDirName:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces",slug:"/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-funcs",permalink:"/my-website/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-funcs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u65b9\u6cd5",permalink:"/my-website/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods"},next:{title:"\u65b9\u6cd5\uff08\u7eed\uff09",permalink:"/my-website/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-continued"}},c={},u=[],f={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u65b9\u6cd5\u5373\u51fd\u6570"},"\u65b9\u6cd5\u5373\u51fd\u6570"),(0,o.kt)("p",null,"\u8bb0\u4f4f\uff1a\u65b9\u6cd5\u53ea\u662f\u4e2a\u5e26\u63a5\u6536\u8005\u53c2\u6570\u7684\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Abs")," \u7684\u5199\u6cd5\u5c31\u662f\u4e2a\u6b63\u5e38\u7684\u51fd\u6570\uff0c\u529f\u80fd\u5e76\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"methods-funcs.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "math"\n)\n\ntype Vertex struct {\n    X, Y float64\n}\n\nfunc Abs(v Vertex) float64 {\n    return math.Sqrt(v.X*v.X + v.Y*v.Y)\n}\n\nfunc main() {\n    v := Vertex{3, 4}\n    fmt.Println(Abs(v))\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"5\n")))}d.isMDXComponent=!0}}]);