"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:8},i="switch\u7684\u6c42\u503c\u987a\u5e8f",s={unversionedId:"a-tour-of-go/basics/flow-control-statements/switch-evaluation-order",id:"a-tour-of-go/basics/flow-control-statements/switch-evaluation-order",title:"switch\u7684\u6c42\u503c\u987a\u5e8f",description:"switch \u7684 case \u8bed\u53e5\u4ece\u4e0a\u5230\u4e0b\u987a\u6b21\u6267\u884c\uff0c\u76f4\u5230\u5339\u914d\u6210\u529f\u65f6\u505c\u6b62\u3002",source:"@site/docs/a-tour-of-go/basics/flow-control-statements/switch-evaluation-order.md",sourceDirName:"a-tour-of-go/basics/flow-control-statements",slug:"/a-tour-of-go/basics/flow-control-statements/switch-evaluation-order",permalink:"/my-website/docs/a-tour-of-go/basics/flow-control-statements/switch-evaluation-order",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"switch",permalink:"/my-website/docs/a-tour-of-go/basics/flow-control-statements/switch"},next:{title:"\u6ca1\u6709\u6761\u4ef6\u7684 switch",permalink:"/my-website/docs/a-tour-of-go/basics/flow-control-statements/switch-with-no-condition"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"switch\u7684\u6c42\u503c\u987a\u5e8f"},"switch\u7684\u6c42\u503c\u987a\u5e8f"),(0,o.kt)("p",null,"switch \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"case")," \u8bed\u53e5\u4ece\u4e0a\u5230\u4e0b\u987a\u6b21\u6267\u884c\uff0c\u76f4\u5230\u5339\u914d\u6210\u529f\u65f6\u505c\u6b62\u3002"),(0,o.kt)("p",null,"\uff08\u4f8b\u5982\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"switch i {\ncase 0:\ncase f():\n}\n")),(0,o.kt)("p",null,"\u5728 i==0 \u65f6 f \u4e0d\u4f1a\u88ab\u8c03\u7528\u3002\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"switch-evaluation-order.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    fmt.Println("When\'s Saturday?")\n    today := time.Now().Weekday()\n    switch time.Saturday {\n    case today + 0:\n        fmt.Println("Today.")\n    case today + 1:\n        fmt.Println("Tomorrow.")\n    case today + 2:\n        fmt.Println("In two days.")\n    default:\n        fmt.Println("Too far away.")\n    }\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"When's Saturday?\nToo far away.\n")))}p.isMDXComponent=!0}}]);