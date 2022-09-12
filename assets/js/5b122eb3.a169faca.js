"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8009],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:e},u),{},{components:n})):r.createElement(d,a({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2882:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:9},a="\u6ca1\u6709\u6761\u4ef6\u7684 switch",c={unversionedId:"a-tour-of-go/basics/flow-control-statements/switch-with-no-condition",id:"a-tour-of-go/basics/flow-control-statements/switch-with-no-condition",title:"\u6ca1\u6709\u6761\u4ef6\u7684 switch",description:"\u6ca1\u6709\u6761\u4ef6\u7684 switch \u540c switch true \u4e00\u6837\u3002",source:"@site/docs/a-tour-of-go/basics/flow-control-statements/switch-with-no-condition.md",sourceDirName:"a-tour-of-go/basics/flow-control-statements",slug:"/a-tour-of-go/basics/flow-control-statements/switch-with-no-condition",permalink:"/docs/a-tour-of-go/basics/flow-control-statements/switch-with-no-condition",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"switch\u7684\u6c42\u503c\u987a\u5e8f",permalink:"/docs/a-tour-of-go/basics/flow-control-statements/switch-evaluation-order"},next:{title:"defer",permalink:"/docs/a-tour-of-go/basics/flow-control-statements/defer"}},s={},l=[],u={toc:l};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6ca1\u6709\u6761\u4ef6\u7684-switch"},"\u6ca1\u6709\u6761\u4ef6\u7684 switch"),(0,o.kt)("p",null,"\u6ca1\u6709\u6761\u4ef6\u7684 switch \u540c ",(0,o.kt)("inlineCode",{parentName:"p"},"switch true")," \u4e00\u6837\u3002"),(0,o.kt)("p",null,"\u8fd9\u79cd\u5f62\u5f0f\u80fd\u5c06\u4e00\u957f\u4e32 if-then-else \u5199\u5f97\u66f4\u52a0\u6e05\u6670\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"switch-with-no-condition.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    t := time.Now()\n    switch {\n    case t.Hour() < 12:\n        fmt.Println("Good morning!")\n    case t.Hour() < 17:\n        fmt.Println("Good afternoon.")\n    default:\n        fmt.Println("Good evening.")\n    }\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Good evening.\n")))}p.isMDXComponent=!0}}]);