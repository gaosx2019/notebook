"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3927],{3905:(e,l,n)=>{n.d(l,{Zo:()=>d,kt:()=>h});var t=n(7294);function i(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function r(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){i(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function o(e,l){if(null==e)return{};var n,t,i=function(e,l){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(i[n]=e[n]);return i}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),p=function(e){var l=t.useContext(u),n=l;return e&&(n="function"==typeof e?e(l):a(a({},l),e)),n},d=function(e){var l=p(e.components);return t.createElement(u.Provider,{value:l},e.children)},s={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},c=t.forwardRef((function(e,l){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(u,".").concat(h)]||c[h]||s[h]||r;return n?t.createElement(m,a(a({ref:l},d),{},{components:n})):t.createElement(m,a({ref:l},d))}));function h(e,l){var n=arguments,i=l&&l.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var o={};for(var u in l)hasOwnProperty.call(l,u)&&(o[u]=l[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},540:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(7462),i=(n(7294),n(3905));const r={sidebar_position:6},a="shell\u6570\u7ec4",o={unversionedId:"embedded-development/basic/linux-shell-and-makefile/shell-scripting/shell-array",id:"embedded-development/basic/linux-shell-and-makefile/shell-scripting/shell-array",title:"shell\u6570\u7ec4",description:"shell\u6570\u7ec4\u6982\u8ff0",source:"@site/docs/embedded-development/basic/linux-shell-and-makefile/shell-scripting/shell-array.md",sourceDirName:"embedded-development/basic/linux-shell-and-makefile/shell-scripting",slug:"/embedded-development/basic/linux-shell-and-makefile/shell-scripting/shell-array",permalink:"/notebook/docs/embedded-development/basic/linux-shell-and-makefile/shell-scripting/shell-array",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"shell\u4e2d\u7684\u5faa\u73af\u8bed\u53e5",permalink:"/notebook/docs/embedded-development/basic/linux-shell-and-makefile/shell-scripting/loop-statement-in-shell"},next:{title:"shell\u4e2d\u7684\u51fd\u6570",permalink:"/notebook/docs/embedded-development/basic/linux-shell-and-makefile/shell-scripting/functions-in-shell"}},u={},p=[{value:"shell\u6570\u7ec4\u6982\u8ff0",id:"shell\u6570\u7ec4\u6982\u8ff0",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u4f7f\u7528\u6570\u7ec4\u7684\u4f18\u52bf",id:"\u4f7f\u7528\u6570\u7ec4\u7684\u4f18\u52bf",level:3},{value:"shell\u6570\u7ec4\u4f7f\u7528\u65b9\u6cd5",id:"shell\u6570\u7ec4\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u6570\u7ec4\u7684\u5b9a\u4e49",id:"\u6570\u7ec4\u7684\u5b9a\u4e49",level:3},{value:"\u76f4\u63a5\u5b9a\u4e49",id:"\u76f4\u63a5\u5b9a\u4e49",level:4},{value:"\u5355\u5143\u7d20\u5b9a\u4e49",id:"\u5355\u5143\u7d20\u5b9a\u4e49",level:4},{value:"\u5143\u7d20\u7684\u83b7\u53d6",id:"\u5143\u7d20\u7684\u83b7\u53d6",level:3},{value:"\u83b7\u53d6\u5355\u4e2a\u5143\u7d20",id:"\u83b7\u53d6\u5355\u4e2a\u5143\u7d20",level:4},{value:"\u83b7\u53d6\u5168\u90e8\u5143\u7d20",id:"\u83b7\u53d6\u5168\u90e8\u5143\u7d20",level:4},{value:"\u83b7\u53d6\u6570\u7ec4\u957f\u5ea6",id:"\u83b7\u53d6\u6570\u7ec4\u957f\u5ea6",level:4},{value:"\u83b7\u53d6\u6574\u4e2a\u6570\u7ec4\u957f\u5ea6",id:"\u83b7\u53d6\u6574\u4e2a\u6570\u7ec4\u957f\u5ea6",level:5},{value:"\u83b7\u53d6\u5355\u4e2a\u5143\u7d20\u7684\u957f\u5ea6",id:"\u83b7\u53d6\u5355\u4e2a\u5143\u7d20\u7684\u957f\u5ea6",level:5},{value:"\u64cd\u4f5c\u6570\u7ec4",id:"\u64cd\u4f5c\u6570\u7ec4",level:3},{value:"\u589e\u52a0",id:"\u589e\u52a0",level:4},{value:"\u5220\u9664",id:"\u5220\u9664",level:4},{value:"\u5173\u8054\u6570\u7ec4",id:"\u5173\u8054\u6570\u7ec4",level:3},{value:"\u793a\u4f8b\u6f14\u7ec3",id:"\u793a\u4f8b\u6f14\u7ec3",level:2}],d={toc:p};function s(e){let{components:l,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shell\u6570\u7ec4"},"shell\u6570\u7ec4"),(0,i.kt)("h2",{id:"shell\u6570\u7ec4\u6982\u8ff0"},"shell\u6570\u7ec4\u6982\u8ff0"),(0,i.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"\u6839\u636e\u6211\u4eec\u5b66\u4e60C\u8bed\u8a00\u7684\u7ecf\u9a8c\uff0c\u6570\u7ec4\u5c31\u662f\u4e00\u7cfb\u5217\u6570\u636e\u7684\u96c6\u5408\uff0c\u8fd9\u4e2a\u6570\u636e\u5c31\u662f\u6211\u4eec\u4e4b\u524d\u5b66\u4e60\u7684\u5b58\u50a8\u5355\u4e2a\u5143\u7d20\u7684\u6700\u5c0f\u5355\u5143\u53d8\u91cf\uff0c\u4e5f\u5c31\u662f\u8bf4\u5c06\u4e00\u7cfb\u5217\u7684\u5143\u7d20\u6574\u5408\u5230\u4e00\u4e2a\u96c6\u5408\u5185\uff0c\u8fd9\u4e2a\u96c6\u5408\u7684\u540d\u79f0\u5c31\u53eb\u6570\u7ec4\u3002\u5f53\u7136\u4e0e\u5176\u4ed6\u8bed\u8a00\u4e00\u6837\uff0c\u6570\u7ec4\u5177\u5907\u51e0\u4e2a\u6761\u4ef6\uff0c\u5728shell\u4e2d\u6570\u7ec4\u4ec5\u652f\u6301\u4e00\u7ef4\u6570\u7ec4\uff0c\u6570\u7ec4\u5143\u7d20\u7684\u4e0b\u6807\u4ece0\u5f00\u59cb\uff0c\u6570\u7ec4\u5143\u7d20\u6ca1\u6709\u6700\u5927\u9650\u5236\u7b49\u3002"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u6570\u7ec4\u7684\u4f18\u52bf"},"\u4f7f\u7528\u6570\u7ec4\u7684\u4f18\u52bf"),(0,i.kt)("p",null,"\u5728\u6211\u4eec\u4e4b\u524d\u5b66\u4e60C\u8bed\u8a00\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5927\u5bb6\u5e94\u8be5\u6709\u6240\u4f53\u4f1a\uff0c\u5f53\u6211\u4eec\u64cd\u4f5c\u6279\u91cf\u6570\u636e\u7684\u65f6\u5019\uff0c\u4e00\u4e2a\u4e00\u4e2a\u53d8\u91cf\u64cd\u4f5c\u975e\u5e38\u4e0d\u4fbf\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u6570\u7ec4\u96c6\u5408\uff0c\u5bf9\u6574\u4e2a\u6570\u7ec4\u96c6\u5408\u8fdb\u884c\u904d\u5386\u6216\u5176\u4ed6\u64cd\u4f5c\uff0c\u6700\u7ec8\u5b9e\u73b0\u6279\u91cf\u7684\u6548\u679c\uff0c\u6570\u7ec4\u4f7f\u5f97\u6211\u4eec\u7684\u811a\u672c\u66f4\u5177\u6269\u5c55\u6027\u3002"),(0,i.kt)("h2",{id:"shell\u6570\u7ec4\u4f7f\u7528\u65b9\u6cd5"},"shell\u6570\u7ec4\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h3",{id:"\u6570\u7ec4\u7684\u5b9a\u4e49"},"\u6570\u7ec4\u7684\u5b9a\u4e49"),(0,i.kt)("p",null,"\u6570\u7ec4\u7684\u5b9a\u4e49\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u53ef\u5206\u4e3a\u76f4\u63a5\u5b9a\u4e49\u548c\u5355\u5143\u7d20\u5b9a\u4e49\u3002"),(0,i.kt)("h4",{id:"\u76f4\u63a5\u5b9a\u4e49"},"\u76f4\u63a5\u5b9a\u4e49"),(0,i.kt)("p",null,"\u6570\u7ec4\u7c7b\u4f3c\u4e8e\u53d8\u91cf\u5b9a\u4e49\uff0c\u53ea\u4e0d\u8fc7\u5c06\u91cc\u9762\u7684\u503c\u7528\u5c0f\u62ec\u53f7\u62ec\u8d77\u6765\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5143\u7d20\u4f7f\u7528\u7a7a\u683c\u5206\u9694\u3002shell\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u7c7b\u578b\u53ef\u4ee5\u4e0d\u4e00\u6837\uff0c\u4f8b\u5982\u5176\u4e2d\u53ef\u4ee5\u5305\u542b\u6570\u5b57\u4e0e\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'SHELL_ARRAY=(1 2 3 "hello shell")\n')),(0,i.kt)("p",null,"\u8bf4\u660e\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"SHELL_ARRAY"),"\u4e3a\u6570\u7ec4\u540d"),(0,i.kt)("p",null,'1\uff0c2\uff0c3\u4e3a\u4fdd\u5b58\u7684\u6570\u5b57\uff0c"hello shell"\u4e3a\u4fdd\u5b58\u7684\u5b57\u7b26\u4e32'),(0,i.kt)("h4",{id:"\u5355\u5143\u7d20\u5b9a\u4e49"},"\u5355\u5143\u7d20\u5b9a\u4e49"),(0,i.kt)("p",null,"shell\u4e2d\u6570\u7ec4\u4e0b\u6807\u4ece0\u5f00\u59cb\uff0c\u5229\u7528\u5355\u4e2a\u5143\u7d20\u6765\u5b9a\u4e49\u6570\u7ec4\u3002\u64cd\u4f5c\u548cC\u8bed\u8a00\u7c7b\u4f3c\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[linux@linux]# SHELL_ARRAY[0]=1\n[linux@linux]# SHELL_ARRAY[1]=2\n[linux@linux]# SHELL_ARRAY[2]=3\n[linux@linux]# SHELL_ARRAY[3]="hello Shell"\n')),(0,i.kt)("h3",{id:"\u5143\u7d20\u7684\u83b7\u53d6"},"\u5143\u7d20\u7684\u83b7\u53d6"),(0,i.kt)("h4",{id:"\u83b7\u53d6\u5355\u4e2a\u5143\u7d20"},"\u83b7\u53d6\u5355\u4e2a\u5143\u7d20"),(0,i.kt)("p",null,"\u4e0e\u53d8\u91cf\u7684\u5f15\u7528\u4e00\u6837\uff0c\u6570\u7ec4\u53ef\u4ee5\u83b7\u53d6\u5355\u4e2a\u4f4d\u7f6e\u7684\u5143\u7d20\uff0c\u5229\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"${SHELL_ARRAY[num]}"),"\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\u7528\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[linux@linux]# echo ${SHELL_ARRAY[0]}                        // \u83b7\u53d6AEG1\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\n1\n[linux@linux]# echo ${SHELL_ARRAY[3]}                        // \u83b7\u53d6AEG1\u6570\u7ec4\u4e2d\u7b2c\u56db\u4e2a\u5143\u7d20\nhello Shell\n")),(0,i.kt)("h4",{id:"\u83b7\u53d6\u5168\u90e8\u5143\u7d20"},"\u83b7\u53d6\u5168\u90e8\u5143\u7d20"),(0,i.kt)("p",null,"\u83b7\u53d6\u6570\u7ec4\u5168\u90e8\u5143\u7d20\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"${SHELL_ARRAY[*]}")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"${SHELL_ARRAY[@]}"),"\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\u7528\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[linux@linux]# echo ${SHELL_ARRAY[@]}\n1 2 3 hello Shell\n\n[linux@linux]# echo ${SHELL_ARRAY[*]}\n1 2 3 hello Shell\n")),(0,i.kt)("h4",{id:"\u83b7\u53d6\u6570\u7ec4\u957f\u5ea6"},"\u83b7\u53d6\u6570\u7ec4\u957f\u5ea6"),(0,i.kt)("h5",{id:"\u83b7\u53d6\u6574\u4e2a\u6570\u7ec4\u957f\u5ea6"},"\u83b7\u53d6\u6574\u4e2a\u6570\u7ec4\u957f\u5ea6"),(0,i.kt)("p",null,"\u6570\u7ec4\u957f\u5ea6\u53ca\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u4e2a\u6570\uff0c\u53ef\u4ee5\u5229\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"${#SHELL_ARRAY[*]}"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"${#SHELL_ARRAY[@]}"),"\uff0c\u6211\u4eec\u53d1\u73b0\u5176\u5b9e\u5c31\u662f\u5728\u83b7\u53d6\u6570\u7ec4\u5168\u90e8\u5143\u7d20\u524d\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"\u6765\u83b7\u53d6\u6570\u7ec4\u4e2a\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[linux@linux]# echo ${#SHELL_ARRAY[*]}\n4\n\n[linux@linux]# echo ${#SHELL_ARRAY[@]}\n4\n")),(0,i.kt)("h5",{id:"\u83b7\u53d6\u5355\u4e2a\u5143\u7d20\u7684\u957f\u5ea6"},"\u83b7\u53d6\u5355\u4e2a\u5143\u7d20\u7684\u957f\u5ea6"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6570\u7ec4\u4e2d\u7684\u5355\u4e2a\u5143\u7d20\u6211\u4eec\u4e5f\u53ef\u4ee5\u8fdb\u884c\u957f\u5ea6\u7684\u83b7\u53d6\uff0c\u53ef\u4ee5\u5229\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"${#SHELL_ARRAY[num]}"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[linux@linux]# echo ${SHELL_ARRAY[@]} \n100 2 3 hello Shell \n\n[linux@linux]# echo ${SHELL_ARRAY[3]}   // \u83b7\u53d6\u7b2c\u56db\u4e2a\u5143\u7d20\u5185\u5bb9\u4e3a\uff1ahello Shell\nhello Shell\n\n[linux@linux]# echo ${#SHELL_ARRAY[3]}  // \u83b7\u53d6\u56db\u4e2a\u5143\u7d20\u957f\u5ea6\u4e3a11\n11\n")),(0,i.kt)("h3",{id:"\u64cd\u4f5c\u6570\u7ec4"},"\u64cd\u4f5c\u6570\u7ec4"),(0,i.kt)("h4",{id:"\u589e\u52a0"},"\u589e\u52a0"),(0,i.kt)("p",null,"\u5bf9\u6570\u7ec4\u5143\u7d20\u7684\u589e\u52a0\uff0c\u76f4\u63a5\u5bf9\u5355\u4e2a\u4f4d\u7f6e\u5143\u7d20\u589e\u52a0\u5373\u53ef\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[linux@linux]# SHELL_ARRAY[4]=10\n[linux@linux]# echo ${SHELL_ARRAY[@]}\n100 2 3 hello Shell 10\n[linux@linux]# echo ${#SHELL_ARRAY[@]}\n5\n")),(0,i.kt)("h4",{id:"\u5220\u9664"},"\u5220\u9664"),(0,i.kt)("p",null,"\u5220\u9664\u6570\u7ec4\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"unset"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"unset SHELL_ARRAY[num]"),"\u53ef\u4ee5\u5220\u9664\u5bf9\u5e94\u4e0b\u6807\u7684\u6570\u7ec4\u5143\u7d20\uff0c\u5982\u679c\u4e0d\u5e26\u4e0b\u6807\u5219\u5220\u9664\u6570\u7ec4\u7684\u5168\u90e8\u5143\u7d20\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[linux@linux]# echo ${SHELL_ARRAY[@]} \n100 3 hello Shell 10\n[linux@linux]# unset SHELL_ARRAY[0]     // \u5220\u9664\u4e0b\u6807\u4e3a0\u7684\u5143\u7d20\n[linux@linux]# echo ${SHELL_ARRAY[@]}\n3 hello Shell 10\n[linux@linux]# unset SHELL_ARRAY        // \u5220\u9664\u6574\u4e2a\u6570\u7ec4\u5143\u7d20\n[linux@linux]# echo ${SHELL_ARRAY[@]}\n")),(0,i.kt)("h3",{id:"\u5173\u8054\u6570\u7ec4"},"\u5173\u8054\u6570\u7ec4"),(0,i.kt)("p",null,"\u4e0a\u8ff0\u6559\u5927\u5bb6\u4f7f\u7528\u7684\u90fd\u662f\u6211\u4eec\u7684\u666e\u901a\u6570\u7ec4\uff0cshell\u4e2d\u8fd8\u63d0\u4f9b\u4e86\u4e00\u79cd\u5173\u8054\u6027\u6570\u7ec4\uff0c\u5728\u4f7f\u7528\u5173\u8054\u6570\u7ec4\u524d\uff0c\u5fc5\u987b\u5148\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"declare -A"),"\u58f0\u660e\u5b83\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[linux@linux]# declare -A ARGFILE                                                        // \u5b9a\u4e49\u7ba1\u7406\u6570\u7ec4\n[linux@linux]# ARGFILE=([name1]=Shell [name2]=linux [name3]=arg) // \u5173\u8054\u6570\u7ec4\u5143\u7d20\u8d4b\u503c\n[linux@linux]# echo ${ARGFILE[@]}                                                        // \u67e5\u770b\u6240\u6709\u5143\u7d20\narg linux Shell                         // \u8f93\u51fa\u987a\u5e8f\u548c\u5b9a\u4e49\u7684\u987a\u5e8f\u65e0\u5173\n\n[linux@linux]# echo ${#ARGFILE[@]} \n3\n\n[linux@linux]# echo ${ARGFILE[name1]}    // \u67e5\u770b\u7d22\u5f15\u4e3aname1\u7684\u5143\u7d20\u503c\nShell\n\n[linux@linux]# echo ${!ARGFILE[@]}    // \u67e5\u770b\u6240\u6709\u7684key\u503c\nname3 name2 name1\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u6f14\u7ec3"},"\u793a\u4f8b\u6f14\u7ec3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#! /bin/bash\n\narray=(1 2 3 4 5)\ni=0\nfor var in ${array[@]}\ndo\n        echo "array[$i] = $var"\n        i=`expr $i + 1`\ndone\n\n\ndeclare -A ARGLIST\n\nARGLIST[key1]=1\nARGLIST[key2]=2\nARGLIST[key3]="shell"\n\n\nfor item in ${!ARGLIST[@]}\ndo\n        echo "${item} ---\x3e ${ARGLIST[$item]}"\ndone\n')))}s.isMDXComponent=!0}}]);