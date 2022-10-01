"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1518],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=o,m=d["".concat(p,".").concat(b)]||d[b]||c[b]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},a="\u5192\u6ce1\u6392\u5e8f",l={unversionedId:"embedded-development/basic/data-structure/sort/bubble-sort",id:"embedded-development/basic/data-structure/sort/bubble-sort",title:"\u5192\u6ce1\u6392\u5e8f",description:"\u6392\u5e8f\u8fc7\u7a0b",source:"@site/docs/embedded-development/basic/data-structure/sort/bubble-sort.md",sourceDirName:"embedded-development/basic/data-structure/sort",slug:"/embedded-development/basic/data-structure/sort/bubble-sort",permalink:"/notebook/docs/embedded-development/basic/data-structure/sort/bubble-sort",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6392\u5e8f",permalink:"/notebook/docs/category/\u6392\u5e8f"},next:{title:"\u7b80\u5355\u9009\u62e9\u6392\u5e8f",permalink:"/notebook/docs/embedded-development/basic/data-structure/sort/simple-selection-sort"}},p={},u=[{value:"\u6392\u5e8f\u8fc7\u7a0b",id:"\u6392\u5e8f\u8fc7\u7a0b",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"bubble_sort.c",id:"bubble_sortc",level:3},{value:"\u8f93\u51fa",id:"\u8f93\u51fa",level:3},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"bubble_sort.c",id:"bubble_sortc-1",level:3},{value:"\u8f93\u51fa",id:"\u8f93\u51fa-1",level:3}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5192\u6ce1\u6392\u5e8f"},"\u5192\u6ce1\u6392\u5e8f"),(0,o.kt)("h2",{id:"\u6392\u5e8f\u8fc7\u7a0b"},"\u6392\u5e8f\u8fc7\u7a0b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6bd4\u8f83\u7b2c\u4e00\u4e2a\u6570\u4e0e\u7b2c\u4e8c\u4e2a\u6570\uff0c\u82e5\u4e3a\u9006\u5e8f",(0,o.kt)("inlineCode",{parentName:"li"},"a[0] > a[1]"),"\uff0c\u5219\u4ea4\u6362\uff1b\u7136\u540e\u6bd4\u8f83\u7b2c\u4e8c\u4e2a\u6570\u4e0e\u7b2c\u4e09\u4e2a\u6570\uff1b\u4f9d\u6b64\u7c7b\u63a8\uff0c\u76f4\u81f3\u7b2cn-1\u4e2a\u6570\u548c\u7b2cn\u4e2a\u6570\u6bd4\u8f83\u4e3a\u6b62\u2014\u2014\u7b2c\u4e00\u8d9f\u5192\u6ce1\u6392\u5e8f\uff0c\u7ed3\u679c\u6700\u5927\u7684\u6570\u88ab\u5b89\u7f6e\u5728\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4f4d\u7f6e\u4e0a"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u524dn-1\u4e2a\u6570\u8fdb\u884c\u7b2c\u4e8c\u8d9f\u5192\u6ce1\u6392\u5e8f\uff0c\u7ed3\u679c\u4f7f\u6b21\u5927\u7684\u6570\u88ab\u5b89\u7f6e\u5728\u7b2cn-1\u4e2a\u5143\u7d20\u4f4d\u7f6e"),(0,o.kt)("li",{parentName:"ol"},"\u91cd\u590d\u4e0a\u8ff0\u8fc7\u7a0b\uff0c\u5171\u7ecf\u8fc7n-1\u8d9f\u5192\u6ce1\u6392\u5e8f\uff0c\u6392\u5e8f\u7ed3\u675f")),(0,o.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.kt)("h3",{id:"bubble_sortc"},"bubble_sort.c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'//\n// Created by gaosx on 22-9-9.\n//\n\n#include <stdio.h>\n\n// \u5192\u6ce1\u6392\u5e8f\nvoid bubble_sort(int *p, int n) {\n    int i = 0, j = 0;\n    for (i = 0; i < n; i++) { // \u8f6e\u6570\n        for (j = 0; j < n - 1 - i; j++) { // \u6bcf\u8f6e\u4ea4\u6362\u6b21\u6570\n            if (p[j] > p[j+1]) {\n                p[j] ^= p[j+1];\n                p[j+1] ^= p[j];\n                p[j] ^= p[j+1];\n            }\n        }\n    }\n}\n\nvoid output(int *p, int n) {\n    for (int i = 0; i < n; i++) {\n        printf("%d ", p[i]);\n    }\n    printf("\\n");\n}\n\nint main() {\n    int a[5] = {50, 40,30,20,10};\n\n    int n = sizeof(a)/ sizeof(a[0]);\n\n    output(a, n);\n    bubble_sort(a, n);\n    output(a, n);\n\n    return 0;\n}\n')),(0,o.kt)("h3",{id:"\u8f93\u51fa"},"\u8f93\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"50 40 30 20 10 \n10 20 30 40 50\n")),(0,o.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unsigned char str[] = \"decba\"\uff1b \n\u8981\u6c42\u5229\u2f64\u5192\u6ce1\u6392\u5e8f\u628a\u4e0a\u8ff0\u7684\u5b57\u7b26\u4ece\u2f29\u5230\u2f24\u6392\u5e8f,'\\0'\u653e\u5728\u539f\u4f4d\u7f6e\u4e0d\u53c2\u4e0e\u6392\u5e8f\u3002\n")),(0,o.kt)("h3",{id:"bubble_sortc-1"},"bubble_sort.c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'//\n// Created by gaosx on 22-9-9.\n//\n\n#include <stdio.h>\n\nvoid bubble_sort(unsigned char *p, int n) {\n    int i = 0, j = 0;\n    for (i = 0; i < n; i++) { // \u8f6e\u6570\n        for (j = 0; j < n - 1 - i; j++) { // \u6bcf\u8f6e\u4ea4\u6362\u7684\u6b21\u6570\n            if (p[j] > p[j + 1]) {\n                p[j] ^= p[j + 1];\n                p[j + 1] ^= p[j];\n                p[j] ^= p[j + 1];\n            }\n        }\n    }\n}\n\nvoid output(unsigned char *p, int n) {\n    int i = 0;\n    for (i = 0; i < n; i++) {\n        printf("%c ", p[i]);\n    }\n    printf("\\n");\n}\n\nint main() {\n    unsigned char str[] = "decba";\n\n    int n = (sizeof(str) / sizeof(str[0])) - 1;\n\n    output(str, n);\n    bubble_sort(str, n);\n    output(str, n);\n}\n')),(0,o.kt)("h3",{id:"\u8f93\u51fa-1"},"\u8f93\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"d e c b a \na b c d e \n")))}c.isMDXComponent=!0}}]);