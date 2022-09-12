"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4908],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return r?t.createElement(d,c(c({ref:n},u),{},{components:r})):t.createElement(d,c({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6511:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},c="Go\u7a0b",i={unversionedId:"a-tour-of-go/concurrency/concurrency/goroutines",id:"a-tour-of-go/concurrency/concurrency/goroutines",title:"Go\u7a0b",description:"Go \u7a0b\uff08goroutine\uff09\u662f\u7531 Go \u8fd0\u884c\u65f6\u7ba1\u7406\u7684\u8f7b\u91cf\u7ea7\u7ebf\u7a0b\u3002",source:"@site/docs/a-tour-of-go/concurrency/concurrency/goroutines.md",sourceDirName:"a-tour-of-go/concurrency/concurrency",slug:"/a-tour-of-go/concurrency/concurrency/goroutines",permalink:"/docs/a-tour-of-go/concurrency/concurrency/goroutines",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5e76\u53d1",permalink:"/docs/category/\u5e76\u53d1-1"},next:{title:"\u4fe1\u9053",permalink:"/docs/a-tour-of-go/concurrency/concurrency/channels"}},l={},p=[],u={toc:p};function s(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go\u7a0b"},"Go\u7a0b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u7a0b\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"goroutine"),"\uff09\u662f\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u8fd0\u884c\u65f6\u7ba1\u7406\u7684\u8f7b\u91cf\u7ea7\u7ebf\u7a0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"go f(x, y, z)\n")),(0,o.kt)("p",null,"\u4f1a\u542f\u52a8\u4e00\u4e2a\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u7a0b\u5e76\u6267\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"f(x, y, z)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"f"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"z")," \u7684\u6c42\u503c\u53d1\u751f\u5728\u5f53\u524d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u7a0b\u4e2d\uff0c\u800c f \u7684\u6267\u884c\u53d1\u751f\u5728\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u7a0b\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u7a0b\u5728\u76f8\u540c\u7684\u5730\u5740\u7a7a\u95f4\u4e2d\u8fd0\u884c\uff0c\u56e0\u6b64\u5728\u8bbf\u95ee\u5171\u4eab\u7684\u5185\u5b58\u65f6\u5fc5\u987b\u8fdb\u884c\u540c\u6b65\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"sync")," \u5305\u63d0\u4f9b\u4e86\u8fd9\u79cd\u80fd\u529b\uff0c\u4e0d\u8fc7\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u4e2d\u5e76\u4e0d\u7ecf\u5e38\u7528\u5230\uff0c\u56e0\u4e3a\u8fd8\u6709\u5176\u5b83\u7684\u529e\u6cd5\uff08\u89c1\u4e0b\u4e00\u9875\uff09\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"goroutines.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc say(s string) {\n    for i := 0; i < 5; i++ {\n        time.Sleep(100 * time.Millisecond)\n        fmt.Println(s)\n    }\n}\n\nfunc main() {\n    go say("world")\n    say("hello")\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hello\nworld\nhello\nworld\nworld\nhello\nhello\nworld\nworld\nhello\n")))}s.isMDXComponent=!0}}]);