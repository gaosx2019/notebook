"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9651],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return t?a.createElement(f,d(d({ref:n},p),{},{components:t})):a.createElement(f,d({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,d=new Array(l);d[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var c=2;c<l;c++)d[c]=t[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:1},d="Linux\u547d\u4ee4\u8fdb\u9636",o={unversionedId:"embedded-development/basic/linux-shell-and-makefile/awk-and-sed-commands/linux-command-advanced",id:"embedded-development/basic/linux-shell-and-makefile/awk-and-sed-commands/linux-command-advanced",title:"Linux\u547d\u4ee4\u8fdb\u9636",description:"grep\uff1a\u4ece\u6587\u4ef6\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32",source:"@site/docs/embedded-development/basic/linux-shell-and-makefile/awk-and-sed-commands/linux-command-advanced.md",sourceDirName:"embedded-development/basic/linux-shell-and-makefile/awk-and-sed-commands",slug:"/embedded-development/basic/linux-shell-and-makefile/awk-and-sed-commands/linux-command-advanced",permalink:"/notebook/docs/embedded-development/basic/linux-shell-and-makefile/awk-and-sed-commands/linux-command-advanced",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"awk\u548csed\u547d\u4ee4",permalink:"/notebook/docs/category/awk\u548csed\u547d\u4ee4"},next:{title:"Linux\u5e38\u7528\u7279\u6b8a\u5b57\u7b26",permalink:"/notebook/docs/embedded-development/basic/linux-shell-and-makefile/awk-and-sed-commands/linux-common-special-characters"}},i={},c=[{value:"grep\uff1a\u4ece\u6587\u4ef6\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32",id:"grep\u4ece\u6587\u4ef6\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32",level:2},{value:"find\uff1a\u5728\u6307\u5b9a\u8def\u5f84\u4e0b\u641c\u7d22\u6587\u4ef6",id:"find\u5728\u6307\u5b9a\u8def\u5f84\u4e0b\u641c\u7d22\u6587\u4ef6",level:2},{value:"\u7ba1\u9053\u8fde\u63a5\u7b26|",id:"\u7ba1\u9053\u8fde\u63a5\u7b26",level:2},{value:"head\uff1a\u663e\u793a\u6587\u4ef6\u5f00\u5934\u7684\u5185\u5bb9",id:"head\u663e\u793a\u6587\u4ef6\u5f00\u5934\u7684\u5185\u5bb9",level:2},{value:"tail\uff1a\u663e\u793a\u6587\u4ef6\u5c3e\u90e8\u6307\u5b9a\u7684\u884c\u6570",id:"tail\u663e\u793a\u6587\u4ef6\u5c3e\u90e8\u6307\u5b9a\u7684\u884c\u6570",level:2},{value:"cut\uff1a\u5b57\u7b26\u4e32\u88c1\u526a\u51fd\u6570",id:"cut\u5b57\u7b26\u4e32\u88c1\u526a\u51fd\u6570",level:2},{value:"wc\uff1a\u7edf\u8ba1\u67d0\u4e2a\u6587\u4ef6\u7684\u884c\u6570/\u5355\u8bcd\u4e2a\u6570/\u5b57\u8282\u6570",id:"wc\u7edf\u8ba1\u67d0\u4e2a\u6587\u4ef6\u7684\u884c\u6570\u5355\u8bcd\u4e2a\u6570\u5b57\u8282\u6570",level:2}],p={toc:c};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux\u547d\u4ee4\u8fdb\u9636"},"Linux\u547d\u4ee4\u8fdb\u9636"),(0,r.kt)("h2",{id:"grep\u4ece\u6587\u4ef6\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32"},"grep\uff1a\u4ece\u6587\u4ef6\u4e2d\u641c\u7d22\u5b57\u7b26\u4e32"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'grep "\u5b57\u7b26\u4e32" \u6587\u4ef6\n\n\u53c2\u6570:\n-n   \u663e\u793a\u884c\u53f7\n-R   \u9012\u5f52\u53ca\u5b50\u76ee\u5f55\n\n\u4f8b\u5982\uff1a\ngrep "hello" log.c       // \u5728log.c\u6587\u4ef6\u4e2d\u641c\u7d22"hello"\u5b57\u7b26\u4e32\ngrep "main" * -nR         // \u5728\u5f53\u524d\u76ee\u5f55\u53ca\u5b50\u76ee\u5f55\u6240\u6709\u6587\u4ef6\u4e2d\u641c\u7d22main\n')),(0,r.kt)("h2",{id:"find\u5728\u6307\u5b9a\u8def\u5f84\u4e0b\u641c\u7d22\u6587\u4ef6"},"find\uff1a\u5728\u6307\u5b9a\u8def\u5f84\u4e0b\u641c\u7d22\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"find \u8def\u5f84 -name \u6587\u4ef6\u540d\n\n\u4f8b\u5982:\nfind /home/linux -name hello.c    // \u5728/home/linux\u76ee\u5f55\u4e0b\u641c\u7d22hello.c\n")),(0,r.kt)("h2",{id:"\u7ba1\u9053\u8fde\u63a5\u7b26"},"\u7ba1\u9053\u8fde\u63a5\u7b26|"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u7ba1\u9053\u5c31\u662f\u5c06\u4e00\u4e2a\u547d\u4ee4\u7684\u8f93\u51fa\u5f53\u4f5c\u53e6\u4e00\u4e2a\u547d\u4ee4\u7684\u8f93\u5165\uff0c\u901a\u8fc7|\u8fde\u63a5\u591a\u4e2a\u547d\u4ee4\u3002"),(0,r.kt)("p",null,"\uff08\u7406\u89e3\uff1a\u540e\u4e00\u4e2a\u547d\u4ee4\u7684\u64cd\u4f5c\uff0c\u662f\u5728\u524d\u4e00\u4e2a\u547d\u4ee4\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u7684\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat /etc/passwd | grep -n "linux"\n\nls /usr/include | grep "stdio.h"\n')),(0,r.kt)("h2",{id:"head\u663e\u793a\u6587\u4ef6\u5f00\u5934\u7684\u5185\u5bb9"},"head\uff1a\u663e\u793a\u6587\u4ef6\u5f00\u5934\u7684\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"head -\u884c\u6570 \u6587\u4ef6\n\n\u4f8b\u5982\uff1a\n\nhead -10 /etc/passwd   // \u663e\u793a/etc/passwd\u6587\u4ef6\u5f00\u5934\u524d10\u884c\n")),(0,r.kt)("h2",{id:"tail\u663e\u793a\u6587\u4ef6\u5c3e\u90e8\u6307\u5b9a\u7684\u884c\u6570"},"tail\uff1a\u663e\u793a\u6587\u4ef6\u5c3e\u90e8\u6307\u5b9a\u7684\u884c\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tail -\u884c\u6570 \u6587\u4ef6\n\n\u4f8b\u5982\uff1a\n\ntail -1 /etc/passwd   // \u663e\u793a/etc/passwd\u6587\u4ef6\u6700\u540e\u4e00\u884c\u7684\u4fe1\u606f\n")),(0,r.kt)("h2",{id:"cut\u5b57\u7b26\u4e32\u88c1\u526a\u51fd\u6570"},"cut\uff1a\u5b57\u7b26\u4e32\u88c1\u526a\u51fd\u6570"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u4e00\u822c\u4e0e\u7ba1\u9053\u8054\u5408\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cut -d "\u5206\u5272\u5b57\u7b26" -f \u5b57\u6bb5\n\u53c2\u6570:\n-d    \u6307\u5b9a\u6211\u4eec\u7684\u5206\u5272\u5b57\u7b26\n-f    \u6307\u5b9a\u6211\u4eec\u663e\u793a\u7684\u533a\u57df\n\n\u793a\u4f8b\u4ee3\u7801\uff1a\ntail -1 /etc/passwd | cut -d ":" -f 1,3,4\n\ngrep "linux" /etc/passwd | cut -d ":" -f 1,3\n')),(0,r.kt)("h2",{id:"wc\u7edf\u8ba1\u67d0\u4e2a\u6587\u4ef6\u7684\u884c\u6570\u5355\u8bcd\u4e2a\u6570\u5b57\u8282\u6570"},"wc\uff1a\u7edf\u8ba1\u67d0\u4e2a\u6587\u4ef6\u7684\u884c\u6570/\u5355\u8bcd\u4e2a\u6570/\u5b57\u8282\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-l \u663e\u793a\u4e00\u4e2a\u6587\u4ef6\u7684\u884c\u6570\n\n-w \u663e\u793a\u4e00\u4e2a\u6587\u4ef6\u7684\u5355\u8bcd\u4e2a\u6570\n\n-c \u663e\u793a\u4e00\u4e2a\u6587\u4ef6\u7684\u5b57\u8282\u6570\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"log.txt\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a\n{\n    123\n    abc\n    789 ABCD\n}\n\nwc -l  log.txt\nwc -w  log.txt\nwc -c  log.txt\n")))}s.isMDXComponent=!0}}]);