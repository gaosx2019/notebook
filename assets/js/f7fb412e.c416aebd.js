"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9660:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:16},i="Range",p={unversionedId:"a-tour-of-go/basics/more-types/range",id:"a-tour-of-go/basics/more-types/range",title:"Range",description:"for \u5faa\u73af\u7684 range \u5f62\u5f0f\u53ef\u904d\u5386\u5207\u7247\u6216\u6620\u5c04\u3002",source:"@site/docs/a-tour-of-go/basics/more-types/range.md",sourceDirName:"a-tour-of-go/basics/more-types",slug:"/a-tour-of-go/basics/more-types/range",permalink:"/my-website/docs/a-tour-of-go/basics/more-types/range",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"\u5411\u5207\u7247\u8ffd\u52a0\u5143\u7d20",permalink:"/my-website/docs/a-tour-of-go/basics/more-types/append"},next:{title:"range\uff08\u7eed\uff09",permalink:"/my-website/docs/a-tour-of-go/basics/more-types/range-continued"}},c={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"range"},"Range"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"range")," \u5f62\u5f0f\u53ef\u904d\u5386\u5207\u7247\u6216\u6620\u5c04\u3002"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u904d\u5386\u5207\u7247\u65f6\uff0c\u6bcf\u6b21\u8fed\u4ee3\u90fd\u4f1a\u8fd4\u56de\u4e24\u4e2a\u503c\u3002\u7b2c\u4e00\u4e2a\u503c\u4e3a\u5f53\u524d\u5143\u7d20\u7684\u4e0b\u6807\uff0c\u7b2c\u4e8c\u4e2a\u503c\u4e3a\u8be5\u4e0b\u6807\u6240\u5bf9\u5e94\u5143\u7d20\u7684\u4e00\u4efd\u526f\u672c\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"range.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nvar pow = []int{1, 2, 4, 8, 16, 32, 64, 128}\n\nfunc main() {\n    for i, v := range pow {\n        fmt.Printf("2**%d = %d\\n", i, v)\n    }\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2**0 = 1\n2**1 = 2\n2**2 = 4\n2**3 = 8\n2**4 = 16\n2**5 = 32\n2**6 = 64\n2**7 = 128\n")))}u.isMDXComponent=!0}}]);