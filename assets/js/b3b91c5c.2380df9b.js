"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1516],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),b=a,m=s["".concat(c,".").concat(b)]||s[b]||u[b]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:6},o="\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362",l={unversionedId:"embedded-development/basic/linux-c/data-type-in-c-language/cast",id:"embedded-development/basic/linux-c/data-type-in-c-language/cast",title:"\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362",description:"\u542b\u4e49",source:"@site/docs/embedded-development/basic/linux-c/data-type-in-c-language/cast.md",sourceDirName:"embedded-development/basic/linux-c/data-type-in-c-language",slug:"/embedded-development/basic/linux-c/data-type-in-c-language/cast",permalink:"/notebook/docs/embedded-development/basic/linux-c/data-type-in-c-language/cast",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5728\u5185\u5b58\u7684\u5b58\u50a8",permalink:"/notebook/docs/embedded-development/basic/linux-c/data-type-in-c-language/storage-of-data-in-memory"},next:{title:"C\u8bed\u8a00\u4e2d\u7684\u8fd0\u7b97\u7b26",permalink:"/notebook/docs/category/c\u8bed\u8a00\u4e2d\u7684\u8fd0\u7b97\u7b26"}},c={},d=[{value:"\u542b\u4e49",id:"\u542b\u4e49",level:2},{value:"\u663e\u793a\u7684\u5f3a\u8f6c",id:"\u663e\u793a\u7684\u5f3a\u8f6c",level:2},{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u8fd0\u884c\u7ed3\u679c\uff1a",id:"\u8fd0\u884c\u7ed3\u679c",level:3},{value:"\u9690\u5f0f\u7684\u5f3a\u8f6c",id:"\u9690\u5f0f\u7684\u5f3a\u8f6c",level:2},{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801-1",level:3},{value:"\u8fd0\u884c\u7ed3\u679c:",id:"\u8fd0\u884c\u7ed3\u679c-1",level:3}],p={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362"},"\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362"),(0,a.kt)("h2",{id:"\u542b\u4e49"},"\u542b\u4e49"),(0,a.kt)("p",null,"\u5f3a\u8f6c\u7c7b\u578b: \u91c7\u7528\u67d0\u79cd\u65b9\u5f0f\u5c06\u67d0\u79cd\u6570\u636e\u7c7b\u578b\u5f3a\u5236\u8f6c\u6362\u4e3a\u6211\u4eec\u9700\u8981\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1a\u5f3a\u8f6c\u53ea\u662f\u4e34\u65f6\u5f3a\u8f6c\uff0c\u672c\u8eab\u7684\u6570\u636e\u7c7b\u578b\u6ca1\u6709\u6539\u53d8\u3002"),(0,a.kt)("h2",{id:"\u663e\u793a\u7684\u5f3a\u8f6c"},"\u663e\u793a\u7684\u5f3a\u8f6c"),(0,a.kt)("p",null,"\u683c\u5f0f: (\u9700\u8981\u5f3a\u5236\u7684\u6570\u7c7b\u578b)\u53d8\u91cf\u540d"),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nint main()\n{\n        int a = 0;\n        float b = 3.1415926;\n\n        //1.\u628ab\u7684\u7c7b\u578b\u4e34\u65f6\u5f3a\u8f6c\u4e3aint\u7c7b\u578b,\u4fdd\u5b58\u5230a\u4e2d\n        //  \u663e\u793a\u7684\u5f3a\u8f6c\n        a = (int)b;\n\n        printf("a = %d\\n",a);\n\n\n        return 0;\n}\n')),(0,a.kt)("h3",{id:"\u8fd0\u884c\u7ed3\u679c"},"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a = 3\n")),(0,a.kt)("h2",{id:"\u9690\u5f0f\u7684\u5f3a\u8f6c"},"\u9690\u5f0f\u7684\u5f3a\u8f6c"),(0,a.kt)("p",null,"\u82e5\u662f\u7528\u6237\u4f7f\u7528\u8fd0\u7b97\u7b26\u4e24\u8fb9\u7684\u7c7b\u578b\u4e0d\u5339\u914d\uff0c\u5e76\u4e14\u7528\u6237\u6ca1\u6709\u663e\u793a\u7684\u6307\u5b9a\u5339\u914d\u90a3\u79cd\u7c7b\u578b\u3002\u7cfb\u7edf\u4f1a\u9ed8\u8ba4\u89e6\u53d1\u9690\u5f0f\u7684\u5f3a\u8f6c\uff0c\u5f3a\u8f6c\u89c4\u5219\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"double  \u2190\u2190\u2190\u2190\u2190\u2190float                                \u9ad8\n \u2191\n \u2191\n long\n \u2191\n \u2191\nunsigned \n \u2191\n \u2191\nint \u2190\u2190\u2190\u2190\u2190\u2190 char,short                              \u4f4e\n")),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n//if(\u6761\u4ef6)\n//{\n//    \u8bed\u53e51;\n//}else{\n//    \u8bed\u53e52;\n//}\n//\u529f\u80fd:\u6761\u4ef6\u4e3a\u771f,\u6267\u884c\u8bed\u53e51,\u5426\u5219\u6267\u884c\u8bed\u53e52\n\nint main()\n{\n        int a = -20;            //    \u539f\u7801:1000 0000 0000 0000 0000 0000 0001 0100\n                                //    \u53cd\u7801:1111 1111 1111 1111 1111 1111 1110 1011  \n                                //    \u8865\u7801:1111 1111 1111 1111 1111 1111 1110 1100 \n        unsigned int b = 6;     //+   \u8865\u7801:0000 0000 0000 0000 0000 0000 0000 0110\n                                //         1111 1111 1111 1111 1111 1111 1111 0010 \n\n\n        if((a + b) > 0)\n        {\n                printf("a + b > 0\\n");        \n        }else{\n                printf("a + b <= 0\\n");        \n        }\n\n        //%u\u8f93\u51fa\u65e0\u7b26\u53f7\u6574\u5f62\u7684\u6570\u636e\n        printf("result = %u\\n",a + b); //4294967282\n\n        return 0;\n}\n')),(0,a.kt)("h3",{id:"\u8fd0\u884c\u7ed3\u679c-1"},"\u8fd0\u884c\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a + b > 0\nresult = 4294967282\n")))}u.isMDXComponent=!0}}]);