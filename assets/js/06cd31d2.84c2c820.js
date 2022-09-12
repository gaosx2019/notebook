"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:20},i="\u6620\u5c04\u7684\u6587\u6cd5",l={unversionedId:"a-tour-of-go/basics/more-types/map-literals",id:"a-tour-of-go/basics/more-types/map-literals",title:"\u6620\u5c04\u7684\u6587\u6cd5",description:"\u6620\u5c04\u7684\u6587\u6cd5\u4e0e\u7ed3\u6784\u4f53\u76f8\u4f3c\uff0c\u4e0d\u8fc7\u5fc5\u987b\u6709\u952e\u540d\u3002",source:"@site/docs/a-tour-of-go/basics/more-types/map-literals.md",sourceDirName:"a-tour-of-go/basics/more-types",slug:"/a-tour-of-go/basics/more-types/map-literals",permalink:"/notebook/docs/a-tour-of-go/basics/more-types/map-literals",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u6620\u5c04",permalink:"/notebook/docs/a-tour-of-go/basics/more-types/maps"},next:{title:"\u6620\u5c04\u7684\u6587\u6cd5\uff08\u7eed\uff09",permalink:"/notebook/docs/a-tour-of-go/basics/more-types/map-literals-continued"}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6620\u5c04\u7684\u6587\u6cd5"},"\u6620\u5c04\u7684\u6587\u6cd5"),(0,o.kt)("p",null,"\u6620\u5c04\u7684\u6587\u6cd5\u4e0e\u7ed3\u6784\u4f53\u76f8\u4f3c\uff0c\u4e0d\u8fc7\u5fc5\u987b\u6709\u952e\u540d\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"map-literals.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype Vertex struct {\n    Lat, Long float64\n}\n\nvar m = map[string]Vertex{\n    "Bell Labs": Vertex{\n        40.68433, -74.39967,\n    },\n    "Google": Vertex{\n        37.42202, -122.08408,\n    },\n}\n\nfunc main() {\n    fmt.Println(m)\n}\n')),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"map[Bell Labs:{40.68433 -74.39967} Google:{37.42202 -122.08408}]\n")))}u.isMDXComponent=!0}}]);