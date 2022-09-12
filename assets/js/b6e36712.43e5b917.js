"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1675],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(l,".").concat(m)]||f[m]||s[m]||c;return r?t.createElement(y,a(a({ref:n},u),{},{components:r})):t.createElement(y,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5359:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const c={sidebar_position:3},a="range \u548c close",i={unversionedId:"a-tour-of-go/concurrency/concurrency/range-and-close",id:"a-tour-of-go/concurrency/concurrency/range-and-close",title:"range \u548c close",description:"\u53d1\u9001\u8005\u53ef\u901a\u8fc7 close \u5173\u95ed\u4e00\u4e2a\u4fe1\u9053\u6765\u8868\u793a\u6ca1\u6709\u9700\u8981\u53d1\u9001\u7684\u503c\u4e86\u3002\u63a5\u6536\u8005\u53ef\u4ee5\u901a\u8fc7\u4e3a\u63a5\u6536\u8868\u8fbe\u5f0f\u5206\u914d\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6765\u6d4b\u8bd5\u4fe1\u9053\u662f\u5426\u88ab\u5173\u95ed\uff1a\u82e5\u6ca1\u6709\u503c\u53ef\u4ee5\u63a5\u6536\u4e14\u4fe1\u9053\u5df2\u88ab\u5173\u95ed\uff0c\u90a3\u4e48\u5728\u6267\u884c\u5b8c",source:"@site/docs/a-tour-of-go/concurrency/concurrency/range-and-close.md",sourceDirName:"a-tour-of-go/concurrency/concurrency",slug:"/a-tour-of-go/concurrency/concurrency/range-and-close",permalink:"/docs/a-tour-of-go/concurrency/concurrency/range-and-close",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5e26\u7f13\u51b2\u7684\u4fe1\u9053",permalink:"/docs/a-tour-of-go/concurrency/concurrency/buffered_channels"},next:{title:"select \u8bed\u53e5",permalink:"/docs/a-tour-of-go/concurrency/concurrency/select"}},l={},p=[],u={toc:p};function s(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"range-\u548c-close"},"range \u548c close"),(0,o.kt)("p",null,"\u53d1\u9001\u8005\u53ef\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," \u5173\u95ed\u4e00\u4e2a\u4fe1\u9053\u6765\u8868\u793a\u6ca1\u6709\u9700\u8981\u53d1\u9001\u7684\u503c\u4e86\u3002\u63a5\u6536\u8005\u53ef\u4ee5\u901a\u8fc7\u4e3a\u63a5\u6536\u8868\u8fbe\u5f0f\u5206\u914d\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6765\u6d4b\u8bd5\u4fe1\u9053\u662f\u5426\u88ab\u5173\u95ed\uff1a\u82e5\u6ca1\u6709\u503c\u53ef\u4ee5\u63a5\u6536\u4e14\u4fe1\u9053\u5df2\u88ab\u5173\u95ed\uff0c\u90a3\u4e48\u5728\u6267\u884c\u5b8c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"v, ok := <-ch\n")),(0,o.kt)("p",null,"\u4e4b\u540e ",(0,o.kt)("inlineCode",{parentName:"p"},"ok")," \u4f1a\u88ab\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,o.kt)("p",null,"\u5faa\u73af ",(0,o.kt)("inlineCode",{parentName:"p"},"for i := range c")," \u4f1a\u4e0d\u65ad\u4ece\u4fe1\u9053\u63a5\u6536\u503c\uff0c\u76f4\u5230\u5b83\u88ab\u5173\u95ed\u3002"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u53ea\u6709\u53d1\u9001\u8005\u624d\u80fd\u5173\u95ed\u4fe1\u9053\uff0c\u800c\u63a5\u6536\u8005\u4e0d\u80fd\u3002\u5411\u4e00\u4e2a\u5df2\u7ecf\u5173\u95ed\u7684\u4fe1\u9053\u53d1\u9001\u6570\u636e\u4f1a\u5f15\u53d1\u7a0b\u5e8f\u6050\u614c\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"panic"),"\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u8fd8\u8981\u6ce8\u610f\uff1a")," \u4fe1\u9053\u4e0e\u6587\u4ef6\u4e0d\u540c\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u65e0\u9700\u5173\u95ed\u5b83\u4eec\u3002\u53ea\u6709\u5728\u5fc5\u987b\u544a\u8bc9\u63a5\u6536\u8005\u4e0d\u518d\u6709\u9700\u8981\u53d1\u9001\u7684\u503c\u65f6\u624d\u6709\u5fc5\u8981\u5173\u95ed\uff0c\u4f8b\u5982\u7ec8\u6b62\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"range")," \u5faa\u73af\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"range-and-close.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc fibonacci(n int, c chan int) {\n    x, y := 0, 1\n    for i := 0; i < n; i++ {\n        c <- x\n        x, y = y, x+y\n    }\n    close(c)\n}\n\nfunc main() {\n    c := make(chan int, 10)\n    go fibonacci(cap(c), c)\n    for i := range c {\n        fmt.Println(i)\n    }\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n")))}s.isMDXComponent=!0}}]);