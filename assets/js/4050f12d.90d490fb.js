"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},f),{},{components:n})):r.createElement(d,i({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},i="if",s={unversionedId:"a-tour-of-go/basics/flow-control-statements/if",id:"a-tour-of-go/basics/flow-control-statements/if",title:"if",description:"Go \u7684 if \u8bed\u53e5\u4e0e for \u5faa\u73af\u7c7b\u4f3c\uff0c\u8868\u8fbe\u5f0f\u5916\u65e0\u9700\u5c0f\u62ec\u53f7 ( ) \uff0c\u800c\u5927\u62ec\u53f7 { } \u5219\u662f\u5fc5\u987b\u7684\u3002",source:"@site/docs/a-tour-of-go/basics/flow-control-statements/if.md",sourceDirName:"a-tour-of-go/basics/flow-control-statements",slug:"/a-tour-of-go/basics/flow-control-statements/if",permalink:"/docs/a-tour-of-go/basics/flow-control-statements/if",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u65e0\u9650\u5faa\u73af",permalink:"/docs/a-tour-of-go/basics/flow-control-statements/forever"},next:{title:"if \u7684\u7b80\u77ed\u8bed\u53e5",permalink:"/docs/a-tour-of-go/basics/flow-control-statements/if-with-a-short-statement"}},c={},l=[],f={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"if"},"if"),(0,o.kt)("p",null,"Go \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," \u8bed\u53e5\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u7c7b\u4f3c\uff0c\u8868\u8fbe\u5f0f\u5916\u65e0\u9700\u5c0f\u62ec\u53f7 ",(0,o.kt)("inlineCode",{parentName:"p"},"( )")," \uff0c\u800c\u5927\u62ec\u53f7 ",(0,o.kt)("inlineCode",{parentName:"p"},"{ }")," \u5219\u662f\u5fc5\u987b\u7684\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "math"\n)\n\nfunc sqrt(x float64) string {\n    if x < 0 {\n        return sqrt(-x) + "i"\n    }\n    return fmt.Sprint(math.Sqrt(x))\n}\n\nfunc main() {\n    fmt.Println(sqrt(2), sqrt(-4))\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1.4142135623730951 2i\n")))}p.isMDXComponent=!0}}]);