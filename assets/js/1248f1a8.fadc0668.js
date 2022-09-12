"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4606],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:13},i="\u7528 make \u521b\u5efa\u5207\u7247",c={unversionedId:"a-tour-of-go/basics/more-types/making-slices",id:"a-tour-of-go/basics/more-types/making-slices",title:"\u7528 make \u521b\u5efa\u5207\u7247",description:"\u5207\u7247\u53ef\u4ee5\u7528\u5185\u5efa\u51fd\u6570 make \u6765\u521b\u5efa\uff0c\u8fd9\u4e5f\u662f\u4f60\u521b\u5efa\u52a8\u6001\u6570\u7ec4\u7684\u65b9\u5f0f\u3002",source:"@site/docs/a-tour-of-go/basics/more-types/making-slices.md",sourceDirName:"a-tour-of-go/basics/more-types",slug:"/a-tour-of-go/basics/more-types/making-slices",permalink:"/notebook/docs/a-tour-of-go/basics/more-types/making-slices",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"nil \u5207\u7247",permalink:"/notebook/docs/a-tour-of-go/basics/more-types/nil-slices"},next:{title:"\u5207\u7247\u7684\u5207\u7247",permalink:"/notebook/docs/a-tour-of-go/basics/more-types/slices-of-slice"}},l={},p=[],s={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7528-make-\u521b\u5efa\u5207\u7247"},"\u7528 make \u521b\u5efa\u5207\u7247"),(0,a.kt)("p",null,"\u5207\u7247\u53ef\u4ee5\u7528\u5185\u5efa\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," \u6765\u521b\u5efa\uff0c\u8fd9\u4e5f\u662f\u4f60\u521b\u5efa\u52a8\u6001\u6570\u7ec4\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"make")," \u51fd\u6570\u4f1a\u5206\u914d\u4e00\u4e2a\u5143\u7d20\u4e3a\u96f6\u503c\u7684\u6570\u7ec4\u5e76\u8fd4\u56de\u4e00\u4e2a\u5f15\u7528\u4e86\u5b83\u7684\u5207\u7247\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"a := make([]int, 5)  // len(a)=5\n")),(0,a.kt)("p",null,"\u8981\u6307\u5b9a\u5b83\u7684\u5bb9\u91cf\uff0c\u9700\u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," \u4f20\u5165\u7b2c\u4e09\u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"b := make([]int, 0, 5) // len(b)=0, cap(b)=5\n\nb = b[:cap(b)] // len(b)=5, cap(b)=5\nb = b[1:]      // len(b)=4, cap(b)=4\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"making-slices.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    a := make([]int, 5)\n    printSlice("a", a)\n\n    b := make([]int, 0, 5)\n    printSlice("b", b)\n\n    c := b[:2]\n    printSlice("c", c)\n\n    d := c[2:5]\n    printSlice("d", d)\n}\n\nfunc printSlice(s string, x []int) {\n    fmt.Printf("%s len=%d cap=%d %v\\n",\n        s, len(x), cap(x), x)\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a len=5 cap=5 [0 0 0 0 0]\nb len=0 cap=5 []\nc len=2 cap=5 [0 0]\nd len=3 cap=3 [0 0 0]\n")))}u.isMDXComponent=!0}}]);