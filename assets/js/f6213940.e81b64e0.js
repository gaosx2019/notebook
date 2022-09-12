"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(a,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},p="1-3 \u5e38\u7528\u7b97\u6cd5\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\u8ba1\u7b97-\u8bfe\u540e\u7ec3\u4e60",c={unversionedId:"imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-3",id:"imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-3",title:"1-3 \u5e38\u7528\u7b97\u6cd5\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\u8ba1\u7b97-\u8bfe\u540e\u7ec3\u4e60",description:"\u7ec3\u4e60",source:"@site/docs/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-3.md",sourceDirName:"imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01",slug:"/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-3",permalink:"/notebook/docs/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-3",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1-2 \u5e38\u7528\u7b97\u6cd5\u7684\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6",permalink:"/notebook/docs/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-2"},next:{title:"1-5 \u8868\u8fbe\u5f0f\u6c42\u503c\u7b80\u5355\u7248",permalink:"/notebook/docs/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-5"}},a={},l=[{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2}],s={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-3-\u5e38\u7528\u7b97\u6cd5\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\u8ba1\u7b97-\u8bfe\u540e\u7ec3\u4e60"},"1-3 \u5e38\u7528\u7b97\u6cd5\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\u8ba1\u7b97-\u8bfe\u540e\u7ec3\u4e60"),(0,o.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,o.kt)("p",null,"\u5927\u5bb6\u81ea\u5df1\u63a8\u5bfc\u51fa\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u7684\u503c\u3002\uff08\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u76f4\u63a5\u63d2\u5165\u6392\u5e8f\nvoid insert_directly_sort(int *p, int n) {\n    int i = 0, j = 0, temp = 0;\n    for (i = 1; i < n; i++) {\n        if (p[i] < p[i - 1]) {\n            temp = p[i];\n            for (j = i - 1; j >= 0 && temp < p[j]; j--) {\n                p[j + 1] = p[j];\n            }\n            p[j + 1] = temp;\n        }\n    }\n}\n\n\u6838\u5fc3\u8bed\u53e5\u4e3a\u5185\u90e8\u7684p[j + 1] = p[j]\u8bed\u53e5\n\ni = 1\uff0c \u5185\u90e8\u8d4b\u503c\u8bed\u53e5\u6267\u884c\u4e86 1 \u6b21\ni = 2\uff0c \u5185\u90e8\u8d4b\u503c\u8bed\u53e5\u6267\u884c\u4e86 2 \u6b21\n\ni = n - 1\uff0c \u5185\u90e8\u8d4b\u503c\u8bed\u53e5\u6267\u884c\u4e86 n - 1 \u6b21\n\n\u6838\u5fc3\u8bed\u53e5\u6267\u884c\u7684\u9891\u5ea6:  T(n) = 1 + 2 + 3 + .... + n -1 \n                        = n * (n - 1) / 2\n\u5bf9T(n)\u6c42\u6781\u9650\u53ef\u5f97\u5230\n\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6:  O(n^2)\n")))}m.isMDXComponent=!0}}]);