"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9896],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=m(t),u=r,c=k["".concat(l,".").concat(u)]||k[u]||d[u]||p;return t?a.createElement(c,i(i({ref:n},s),{},{components:t})):a.createElement(c,i({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=k;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<p;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const p={sidebar_position:4},i="\u5c0f\u7a0b\u5e8f\u5bbf\u4e3b\u73af\u5883",o={unversionedId:"mini-program-development/start/hosting-environment",id:"mini-program-development/start/hosting-environment",title:"\u5c0f\u7a0b\u5e8f\u5bbf\u4e3b\u73af\u5883",description:"\u6211\u4eec\u79f0\u5fae\u4fe1\u5ba2\u6237\u7aef\u7ed9\u5c0f\u7a0b\u5e8f\u6240\u63d0\u4f9b\u7684\u73af\u5883\u4e3a\u5bbf\u4e3b\u73af\u5883\u3002\u5c0f\u7a0b\u5e8f\u501f\u52a9\u5bbf\u4e3b\u73af\u5883\u63d0\u4f9b\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u5b8c\u6210\u8bb8\u591a\u666e\u901a\u7f51\u9875\u65e0\u6cd5\u5b8c\u6210\u7684\u529f\u80fd\u3002",source:"@site/docs/mini-program-development/start/hosting-environment.md",sourceDirName:"mini-program-development/start",slug:"/mini-program-development/start/hosting-environment",permalink:"/notebook/docs/mini-program-development/start/hosting-environment",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u6784\u6210",permalink:"/notebook/docs/mini-program-development/start/code-composition"},next:{title:"\u5c0f\u7a0b\u5e8f\u534f\u540c\u5de5\u4f5c\u548c\u53d1\u5e03",permalink:"/notebook/docs/mini-program-development/start/collaboration-and-release"}},l={},m=[{value:"\u6e32\u67d3\u5c42\u548c\u903b\u8f91\u5c42",id:"\u6e32\u67d3\u5c42\u548c\u903b\u8f91\u5c42",level:2},{value:"\u7a0b\u5e8f\u4e0e\u9875\u9762",id:"\u7a0b\u5e8f\u4e0e\u9875\u9762",level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"API",id:"api",level:2}],s={toc:m};function d(e){let{components:n,...p}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5c0f\u7a0b\u5e8f\u5bbf\u4e3b\u73af\u5883"},"\u5c0f\u7a0b\u5e8f\u5bbf\u4e3b\u73af\u5883"),(0,r.kt)("p",null,"\u6211\u4eec\u79f0\u5fae\u4fe1\u5ba2\u6237\u7aef\u7ed9\u5c0f\u7a0b\u5e8f\u6240\u63d0\u4f9b\u7684\u73af\u5883\u4e3a\u5bbf\u4e3b\u73af\u5883\u3002\u5c0f\u7a0b\u5e8f\u501f\u52a9\u5bbf\u4e3b\u73af\u5883\u63d0\u4f9b\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u5b8c\u6210\u8bb8\u591a\u666e\u901a\u7f51\u9875\u65e0\u6cd5\u5b8c\u6210\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u4e0a\u4e00\u7ae0\u4e2d\u6211\u4eec\u628a\u5c0f\u7a0b\u5e8f\u6d89\u53ca\u5230\u7684\u6587\u4ef6\u7c7b\u578b\u9610\u8ff0\u4e86\u4e00\u904d\uff0c\u6211\u4eec\u7ed3\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"QuickStart")," \u8fd9\u4e2a\u9879\u76ee\u6765\u8bb2\u4e00\u4e0b\u8fd9\u4e9b\u6587\u4ef6\u662f\u600e\u4e48\u914d\u5408\u5de5\u4f5c\u7684\u3002"),(0,r.kt)("h2",{id:"\u6e32\u67d3\u5c42\u548c\u903b\u8f91\u5c42"},"\u6e32\u67d3\u5c42\u548c\u903b\u8f91\u5c42"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u6765\u7b80\u5355\u4e86\u89e3\u4e0b\u5c0f\u7a0b\u5e8f\u7684\u8fd0\u884c\u73af\u5883\u3002\u5c0f\u7a0b\u5e8f\u7684\u8fd0\u884c\u73af\u5883\u5206\u6210\u6e32\u67d3\u5c42\u548c\u903b\u8f91\u5c42\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"WXML")," \u6a21\u677f\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"WXSS")," \u6837\u5f0f\u5de5\u4f5c\u5728\u6e32\u67d3\u5c42\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"JS")," \u811a\u672c\u5de5\u4f5c\u5728\u903b\u8f91\u5c42\u3002"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u7684\u6e32\u67d3\u5c42\u548c\u903b\u8f91\u5c42\u5206\u522b\u75312\u4e2a\u7ebf\u7a0b\u7ba1\u7406\uff1a\u6e32\u67d3\u5c42\u7684\u754c\u9762\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"WebView")," \u8fdb\u884c\u6e32\u67d3\uff1b\u903b\u8f91\u5c42\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"JsCore")," \u7ebf\u7a0b\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"JS")," \u811a\u672c\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u5b58\u5728\u591a\u4e2a\u754c\u9762\uff0c\u6240\u4ee5\u6e32\u67d3\u5c42\u5b58\u5728\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"WebView")," \u7ebf\u7a0b\uff0c\u8fd9\u4e24\u4e2a\u7ebf\u7a0b\u7684\u901a\u4fe1\u4f1a\u7ecf\u7531\u5fae\u4fe1\u5ba2\u6237\u7aef\uff08\u4e0b\u6587\u4e2d\u4e5f\u4f1a\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Native")," \u6765\u4ee3\u6307\u5fae\u4fe1\u5ba2\u6237\u7aef\uff09\u505a\u4e2d\u8f6c\uff0c\u903b\u8f91\u5c42\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\u4e5f\u7ecf\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"Native")," \u8f6c\u53d1\uff0c\u5c0f\u7a0b\u5e8f\u7684\u901a\u4fe1\u6a21\u578b\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"communication-model.png",src:t(1670).Z,width:"2356",height:"1746"})),(0,r.kt)("p",null,"\u6709\u5173\u6e32\u67d3\u5c42\u548c\u903b\u8f91\u5c42\u7684\u8be6\u7ec6\u6587\u6863\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/MINA.html"},"\u5c0f\u7a0b\u5e8f\u6846\u67b6")," \u3002"),(0,r.kt)("h2",{id:"\u7a0b\u5e8f\u4e0e\u9875\u9762"},"\u7a0b\u5e8f\u4e0e\u9875\u9762"),(0,r.kt)("p",null,"\u5fae\u4fe1\u5ba2\u6237\u7aef\u5728\u6253\u5f00\u5c0f\u7a0b\u5e8f\u4e4b\u524d\uff0c\u4f1a\u628a\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u7684\u4ee3\u7801\u5305\u4e0b\u8f7d\u5230\u672c\u5730\u3002"),(0,r.kt)("p",null,"\u7d27\u63a5\u7740\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.json")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," \u5b57\u6bb5\u5c31\u53ef\u4ee5\u77e5\u9053\u4f60\u5f53\u524d\u5c0f\u7a0b\u5e8f\u7684\u6240\u6709\u9875\u9762\u8def\u5f84:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pages":[\n    "pages/index/index",\n    "pages/logs/logs"\n  ]\n}\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u8bf4\u660e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"QuickStart")," \u9879\u76ee\u5b9a\u4e49\u4e86\u4e24\u4e2a\u9875\u9762\uff0c\u5206\u522b\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/index/index")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/logs/logs"),"\u3002\u800c\u5199\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," \u5b57\u6bb5\u7684\u7b2c\u4e00\u4e2a\u9875\u9762\u5c31\u662f\u8fd9\u4e2a\u5c0f\u7a0b\u5e8f\u7684\u9996\u9875\uff08\u6253\u5f00\u5c0f\u7a0b\u5e8f\u770b\u5230\u7684\u7b2c\u4e00\u4e2a\u9875\u9762\uff09\u3002"),(0,r.kt)("p",null,"\u4e8e\u662f\u5fae\u4fe1\u5ba2\u6237\u7aef\u5c31\u628a\u9996\u9875\u7684\u4ee3\u7801\u88c5\u8f7d\u8fdb\u6765\uff0c\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u5e95\u5c42\u7684\u4e00\u4e9b\u673a\u5236\uff0c\u5c31\u53ef\u4ee5\u6e32\u67d3\u51fa\u8fd9\u4e2a\u9996\u9875\u3002"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u542f\u52a8\u4e4b\u540e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," \u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," \u5b9e\u4f8b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," \u56de\u8c03\u4f1a\u88ab\u6267\u884c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"App({\n  onLaunch: function () {\n    // \u5c0f\u7a0b\u5e8f\u542f\u52a8\u4e4b\u540e \u89e6\u53d1\n  }\n})\n")),(0,r.kt)("p",null,"\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u53ea\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," \u5b9e\u4f8b\uff0c\u662f\u5168\u90e8\u9875\u9762\u5171\u4eab\u7684\uff0c\u66f4\u591a\u7684\u4e8b\u4ef6\u56de\u8c03\u53c2\u8003\u6587\u6863 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html"},"\u6ce8\u518c\u7a0b\u5e8f App")," \u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u7b80\u5355\u770b\u770b\u5c0f\u7a0b\u5e8f\u7684\u4e00\u4e2a\u9875\u9762\u662f\u600e\u4e48\u5199\u7684\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u89c2\u5bdf\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/logs/logs")," \u4e0b\u5176\u5b9e\u662f\u5305\u62ec\u4e864\u79cd\u6587\u4ef6\u7684\uff0c\u5fae\u4fe1\u5ba2\u6237\u7aef\u4f1a\u5148\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"logs.json")," \u914d\u7f6e\u751f\u6210\u4e00\u4e2a\u754c\u9762\uff0c\u9876\u90e8\u7684\u989c\u8272\u548c\u6587\u5b57\u4f60\u90fd\u53ef\u4ee5\u5728\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," \u6587\u4ef6\u91cc\u8fb9\u5b9a\u4e49\u597d\u3002\u7d27\u63a5\u7740\u5ba2\u6237\u7aef\u5c31\u4f1a\u88c5\u8f7d\u8fd9\u4e2a\u9875\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WXML")," \u7ed3\u6784\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"WXSS")," \u6837\u5f0f\u3002\u6700\u540e\u5ba2\u6237\u7aef\u4f1a\u88c5\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"logs.js"),"\uff0c\u4f60\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"logs.js")," \u7684\u5927\u4f53\u5185\u5bb9\u5c31\u662f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Page({\n  data: { // \u53c2\u4e0e\u9875\u9762\u6e32\u67d3\u7684\u6570\u636e\n    logs: []\n  },\n  onLoad: function () {\n    // \u9875\u9762\u6e32\u67d3\u540e \u6267\u884c\n  }\n})\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Page")," \u662f\u4e00\u4e2a\u9875\u9762\u6784\u9020\u5668\uff0c\u8fd9\u4e2a\u6784\u9020\u5668\u5c31\u751f\u6210\u4e86\u4e00\u4e2a\u9875\u9762\u3002\u5728\u751f\u6210\u9875\u9762\u7684\u65f6\u5019\uff0c\u5c0f\u7a0b\u5e8f\u6846\u67b6\u4f1a\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u6570\u636e\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"index.wxml")," \u4e00\u8d77\u6e32\u67d3\u51fa\u6700\u7ec8\u7684\u7ed3\u6784\uff0c\u4e8e\u662f\u5c31\u5f97\u5230\u4e86\u4f60\u770b\u5230\u7684\u5c0f\u7a0b\u5e8f\u7684\u6837\u5b50\u3002"),(0,r.kt)("p",null,"\u5728\u6e32\u67d3\u5b8c\u754c\u9762\u4e4b\u540e\uff0c\u9875\u9762\u5b9e\u4f8b\u5c31\u4f1a\u6536\u5230\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"onLoad")," \u7684\u56de\u8c03\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e2a\u56de\u8c03\u5904\u7406\u4f60\u7684\u903b\u8f91\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," \u6784\u9020\u5668\u66f4\u591a\u8be6\u7ec6\u7684\u6587\u6863\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html"},"\u6ce8\u518c\u9875\u9762 Page")," \u3002"),(0,r.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u57fa\u7840\u7ec4\u4ef6\u7ed9\u5f00\u53d1\u8005\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u50cf\u642d\u79ef\u6728\u4e00\u6837\uff0c\u7ec4\u5408\u5404\u79cd\u7ec4\u4ef6\u62fc\u5408\u6210\u81ea\u5df1\u7684\u5c0f\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u5c31\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"HTML")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," \u7b49\u6807\u7b7e\u4e00\u6837\uff0c\u5728\u5c0f\u7a0b\u5e8f\u91cc\u8fb9\uff0c\u4f60\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"WXML")," \u5199\u4e0a\u5bf9\u5e94\u7684\u7ec4\u4ef6\u6807\u7b7e\u540d\u5b57\u5c31\u53ef\u4ee5\u628a\u8be5\u7ec4\u4ef6\u663e\u793a\u5728\u754c\u9762\u4e0a\uff0c\u4f8b\u5982\uff0c\u4f60\u9700\u8981\u5728\u754c\u9762\u4e0a\u663e\u793a\u5730\u56fe\uff0c\u4f60\u53ea\u9700\u8981\u8fd9\u6837\u5199\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<map></map>\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5c5e\u6027\u4f20\u9012\u503c\u7ed9\u7ec4\u4ef6\uff0c\u8ba9\u7ec4\u4ef6\u53ef\u4ee5\u4ee5\u4e0d\u540c\u7684\u72b6\u6001\u53bb\u5c55\u73b0\uff0c\u4f8b\u5982\uff0c\u6211\u4eec\u5e0c\u671b\u5730\u56fe\u4e00\u5f00\u59cb\u7684\u4e2d\u5fc3\u7684\u7ecf\u7eac\u5ea6\u662f\u5e7f\u5dde\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u58f0\u660e\u5730\u56fe\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"longitude"),"\uff08\u4e2d\u5fc3\u7ecf\u5ea6\uff09 \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"latitude"),"\uff08\u4e2d\u5fc3\u7eac\u5ea6\uff09\u4e24\u4e2a\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map longitude="\u5e7f\u5dde\u7ecf\u5ea6" latitude="\u5e7f\u5dde\u7eac\u5ea6"></map>\n')),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7684\u5185\u90e8\u884c\u4e3a\u4e5f\u4f1a\u901a\u8fc7\u4e8b\u4ef6\u7684\u5f62\u5f0f\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u611f\u77e5\uff0c\u4f8b\u5982\u7528\u6237\u70b9\u51fb\u4e86\u5730\u56fe\u4e0a\u7684\u67d0\u4e2a\u6807\u8bb0\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," \u7f16\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"markertap")," \u51fd\u6570\u6765\u5904\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<map bindmarkertap="markertap" longitude="\u5e7f\u5dde\u7ecf\u5ea6" latitude="\u5e7f\u5dde\u7eac\u5ea6"></map>\n')),(0,r.kt)("p",null,"\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," \u6765\u63a7\u5236\u7ec4\u4ef6\u7684\u5916\u5c42\u6837\u5f0f\uff0c\u4ee5\u4fbf\u9002\u5e94\u4f60\u7684\u754c\u9762\u5bbd\u5ea6\u9ad8\u5ea6\u7b49\u7b49\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u7684\u7ec4\u4ef6\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/"},"\u5c0f\u7a0b\u5e8f\u7684\u7ec4\u4ef6"),"\u3002"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u8c03\u8d77\u5fae\u4fe1\u63d0\u4f9b\u7684\u80fd\u529b\uff0c\u4f8b\u5982\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3001\u5fae\u4fe1\u652f\u4ed8\u7b49\u7b49\uff0c\u5c0f\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u5f88\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u7ed9\u5f00\u53d1\u8005\u53bb\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u8981\u83b7\u53d6\u7528\u6237\u7684\u5730\u7406\u4f4d\u7f6e\u65f6\uff0c\u53ea\u9700\u8981\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"wx.getLocation({\n  type: 'wgs84',\n  success: (res) => {\n    var latitude = res.latitude // \u7eac\u5ea6\n    var longitude = res.longitude // \u7ecf\u5ea6\n  }\n})\n")),(0,r.kt)("p",null,"\u8c03\u7528\u5fae\u4fe1\u626b\u4e00\u626b\u80fd\u529b\uff0c\u53ea\u9700\u8981\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"wx.scanCode({\n  success: (res) => {\n    console.log(res)\n  }\n})\n")),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u591a\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u7684\u56de\u8c03\u90fd\u662f\u5f02\u6b65\uff0c\u4f60\u9700\u8981\u5904\u7406\u597d\u4ee3\u7801\u903b\u8f91\u7684\u5f02\u6b65\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u80fd\u529b\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/api.html"},"\u5c0f\u7a0b\u5e8f\u7684API"),"\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u7ae0\u8282\u4f60\u5df2\u7ecf\u5927\u6982\u4e86\u89e3\u4e86\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u7684\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5\uff0c\u5f53\u4f60\u5f00\u53d1\u5b8c\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u4e4b\u540e\uff0c\u4f60\u5c31\u9700\u8981\u53d1\u5e03\u4f60\u7684\u5c0f\u7a0b\u5e8f\u3002\u5728\u4e0b\u4e2a\u7ae0\u8282\uff0c\u4f60\u4f1a\u77e5\u9053\u53d1\u5e03\u524d\u9700\u8981\u505a\u4ec0\u4e48\u51c6\u5907\u3002"))}d.isMDXComponent=!0},1670:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/communication-model-d425132e2b31e11fb6c3cad0821940a3.png"}}]);