"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:16},i="Stringer",s={unversionedId:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces/stringer",id:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces/stringer",title:"Stringer",description:"fmt \u5305\u4e2d\u5b9a\u4e49\u7684 Stringer \u662f\u6700\u666e\u904d\u7684\u63a5\u53e3\u4e4b\u4e00\u3002s",source:"@site/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/stringer.md",sourceDirName:"a-tour-of-go/methods-and-interfaces/methods-and-interfaces",slug:"/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/stringer",permalink:"/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/stringer",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u9009\u62e9",permalink:"/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/type-switches"},next:{title:"\u7ec3\u4e60\uff1aStringer",permalink:"/docs/a-tour-of-go/methods-and-interfaces/methods-and-interfaces/exercise-stringer"}},c={},p=[],l={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stringer"},"Stringer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fmt")," \u5305\u4e2d\u5b9a\u4e49\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Stringer")," \u662f\u6700\u666e\u904d\u7684\u63a5\u53e3\u4e4b\u4e00\u3002s"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Stringer interface {\n    String() string\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Stringer")," \u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u5b57\u7b26\u4e32\u63cf\u8ff0\u81ea\u5df1\u7684\u7c7b\u578b\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"fmt")," \u5305\uff08\u8fd8\u6709\u5f88\u591a\u5305\uff09\u90fd\u901a\u8fc7\u6b64\u63a5\u53e3\u6765\u6253\u5370\u503c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"stringer.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype Person struct {\n    Name string\n    Age  int\n}\n\nfunc (p Person) String() string {\n    return fmt.Sprintf("%v (%v years)", p.Name, p.Age)\n}\n\nfunc main() {\n    a := Person{"Arthur Dent", 42}\n    z := Person{"Zaphod Beeblebrox", 9001}\n    fmt.Println(a, z)\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Arthur Dent (42 years) Zaphod Beeblebrox (9001 years)\n")))}f.isMDXComponent=!0}}]);