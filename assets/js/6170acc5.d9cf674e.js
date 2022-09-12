"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:23},i="\u56fe\u50cf",l={unversionedId:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces/images",id:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces/images",title:"\u56fe\u50cf",description:"image \u5305\u5b9a\u4e49\u4e86 Image \u63a5\u53e3\uff1a",source:"@site/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/images.md",sourceDirName:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces",slug:"/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/images",permalink:"/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/images",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"\u7ec3\u4e60\uff1arot13Reader",permalink:"/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/exercise-rot-reader"},next:{title:"\u7ec3\u4e60\uff1a\u56fe\u50cf",permalink:"/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/exercise-images"}},c={},s=[],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56fe\u50cf"},"\u56fe\u50cf"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"image")," \u5305\u5b9a\u4e49\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Image")," \u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package image\n\ntype Image interface {\n    ColorModel() color.Model\n    Bounds() Rectangle\n    At(x, y int) color.Color\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Bounds")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"Rectangle")," \u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a image.Rectangle\uff0c\u5b83\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," \u5305\u4e2d\u58f0\u660e\u3002"),(0,a.kt)("p",null,"\uff08\u8bf7\u53c2\u9605\u6587\u6863\u4e86\u89e3\u5168\u90e8\u4fe1\u606f\u3002\uff09"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"color.Color")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"color.Model")," \u7c7b\u578b\u4e5f\u662f\u63a5\u53e3\uff0c\u4f46\u662f\u901a\u5e38\u56e0\u4e3a\u76f4\u63a5\u4f7f\u7528\u9884\u5b9a\u4e49\u7684\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"image.RGBA")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"image.RGBAModel")," \u800c\u88ab\u5ffd\u89c6\u4e86\u3002\u8fd9\u4e9b\u63a5\u53e3\u548c\u7c7b\u578b\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"image/color")," \u5305\u5b9a\u4e49"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"images.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "image"\n)\n\nfunc main() {\n    m := image.NewRGBA(image.Rect(0, 0, 100, 100))\n    fmt.Println(m.Bounds())\n    fmt.Println(m.At(0, 0).RGBA())\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(0,0)-(100,100)\n0 0 0 0\n")))}m.isMDXComponent=!0}}]);