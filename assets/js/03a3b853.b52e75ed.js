"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:7},i="\u9009\u62e9\u503c\u6216\u6307\u9488\u4f5c\u4e3a\u63a5\u6536\u8005",s={unversionedId:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-with-pointer-receivers",id:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-with-pointer-receivers",title:"\u9009\u62e9\u503c\u6216\u6307\u9488\u4f5c\u4e3a\u63a5\u6536\u8005",description:"\u4f7f\u7528\u6307\u9488\u63a5\u6536\u8005\u7684\u539f\u56e0\u6709\u4e8c\uff1a",source:"@site/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-with-pointer-receivers.md",sourceDirName:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces",slug:"/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-with-pointer-receivers",permalink:"/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/methods-with-pointer-receivers",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u65b9\u6cd5\u4e0e\u6307\u9488\u91cd\u5b9a\u5411",permalink:"/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/indirection"},next:{title:"\u63a5\u53e3",permalink:"/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/interfaces"}},c={},l=[],p={toc:l};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u9009\u62e9\u503c\u6216\u6307\u9488\u4f5c\u4e3a\u63a5\u6536\u8005"},"\u9009\u62e9\u503c\u6216\u6307\u9488\u4f5c\u4e3a\u63a5\u6536\u8005"),(0,o.kt)("p",null,"\u4f7f\u7528\u6307\u9488\u63a5\u6536\u8005\u7684\u539f\u56e0\u6709\u4e8c\uff1a"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u65b9\u6cd5\u80fd\u591f\u4fee\u6539\u5176\u63a5\u6536\u8005\u6307\u5411\u7684\u503c\u3002"),(0,o.kt)("p",null,"\u5176\u6b21\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u5728\u6bcf\u6b21\u8c03\u7528\u65b9\u6cd5\u65f6\u590d\u5236\u8be5\u503c\u3002\u82e5\u503c\u7684\u7c7b\u578b\u4e3a\u5927\u578b\u7ed3\u6784\u4f53\u65f6\uff0c\u8fd9\u6837\u505a\u4f1a\u66f4\u52a0\u9ad8\u6548\u3002"),(0,o.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Scale")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Abs")," \u63a5\u6536\u8005\u7684\u7c7b\u578b\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"*Vertex"),"\uff0c\u5373\u4fbf ",(0,o.kt)("inlineCode",{parentName:"p"},"Abs")," \u5e76\u4e0d\u9700\u8981\u4fee\u6539\u5176\u63a5\u6536\u8005\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u6765\u8bf4\uff0c\u6240\u6709\u7ed9\u5b9a\u7c7b\u578b\u7684\u65b9\u6cd5\u90fd\u5e94\u8be5\u6709\u503c\u6216\u6307\u9488\u63a5\u6536\u8005\uff0c\u4f46\u5e76\u4e0d\u5e94\u8be5\u4e8c\u8005\u6df7\u7528\u3002\uff08\u6211\u4eec\u4f1a\u5728\u63a5\u4e0b\u6765\u51e0\u9875\u4e2d\u660e\u767d\u4e3a\u4ec0\u4e48\u3002\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"methods-with-pointer-receivers.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "math"\n)\n\ntype Vertex struct {\n    X, Y float64\n}\n\nfunc (v *Vertex) Scale(f float64) {\n    v.X = v.X * f\n    v.Y = v.Y * f\n}\n\nfunc (v *Vertex) Abs() float64 {\n    return math.Sqrt(v.X*v.X + v.Y*v.Y)\n}\n\nfunc main() {\n    v := &Vertex{3, 4}\n    fmt.Printf("Before scaling: %+v, Abs: %v\\n", v, v.Abs())\n    v.Scale(5)\n    fmt.Printf("After scaling: %+v, Abs: %v\\n", v, v.Abs())\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Before scaling: &{X:3 Y:4}, Abs: 5\nAfter scaling: &{X:15 Y:20}, Abs: 25\n")))}f.isMDXComponent=!0}}]);