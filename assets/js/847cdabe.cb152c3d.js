"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3375],{3905:(n,t,e)=>{e.d(t,{Zo:()=>l,kt:()=>d});var a=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function p(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},c=Object.keys(n);for(a=0;a<c.length;a++)e=c[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)e=c[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var o=a.createContext({}),s=function(n){var t=a.useContext(o),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},l=function(n){var t=s(n.components);return a.createElement(o.Provider,{value:t},n.children)},_={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,c=n.originalType,o=n.parentName,l=p(n,["components","mdxType","originalType","parentName"]),k=s(e),d=r,u=k["".concat(o,".").concat(d)]||k[d]||_[d]||c;return e?a.createElement(u,i(i({ref:t},l),{},{components:e})):a.createElement(u,i({ref:t},l))}));function d(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var c=e.length,i=new Array(c);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=n,p.mdxType="string"==typeof n?n:r,i[1]=p;for(var s=2;s<c;s++)i[s]=e[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},3398:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>_,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var a=e(7462),r=(e(7294),e(3905));const c={sidebar_position:5},i="1-6 \u8868\u8fbe\u5f0f\u6c42\u503c\u5347\u7ea7\u7248",p={unversionedId:"imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-6",id:"imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-6",title:"1-6 \u8868\u8fbe\u5f0f\u6c42\u503c\u5347\u7ea7\u7248",description:"\u5728\u4e0a\u4e00\u4e2a\u9898\u76ee\u7684\u57fa\u7840\u4e0a\uff0c\u52a0\u4e0a\u62ec\u53f7\u7684\u64cd\u4f5c\u3002\u5927\u5bb6\u601d\u8003\u4e00\u4e0b\u3002",source:"@site/docs/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-6.md",sourceDirName:"imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01",slug:"/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-6",permalink:"/docs/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-6",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"1-5 \u8868\u8fbe\u5f0f\u6c42\u503c\u7b80\u5355\u7248",permalink:"/docs/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-5"},next:{title:"1-7 \u7ec3\u4e60\u5408\u96c6",permalink:"/docs/imooc-embedded-engineer/step02/week07/time_space_complexity/chapter01/1-7"}},o={},s=[],l={toc:s};function _(n){let{components:t,...c}=n;return(0,r.kt)("wrapper",(0,a.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-6-\u8868\u8fbe\u5f0f\u6c42\u503c\u5347\u7ea7\u7248"},"1-6 \u8868\u8fbe\u5f0f\u6c42\u503c\u5347\u7ea7\u7248"),(0,r.kt)("p",null,"\u5728\u4e0a\u4e00\u4e2a\u9898\u76ee\u7684\u57fa\u7840\u4e0a\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u4e0a\u62ec\u53f7\u7684\u64cd\u4f5c\u3002"),"\u5927\u5bb6\u601d\u8003\u4e00\u4e0b\u3002"),(0,r.kt)("p",null,"\u6808\u5728\u8868\u8fbe\u5f0f\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u7684\u5e94\u7528 \uff1a\u5efa\u7acb\u64cd\u4f5c\u6570\u6808\u548c\u8fd0\u7b97\u7b26\u6808\u3002\u8fd0\u7b97\u7b26\u6709\u4f18\u5148\u7ea7\u3002\u89c4\u5219\uff1a"),(0,r.kt)("p",null,"\u81ea\u5de6\u81f3\u53f3\u626b\u63cf\u8868\u8fbe\u5f0f\uff0c\u51e1\u662f\u9047\u5230\u64cd\u4f5c\u6570\u4e00\u5f8b\u8fdb\u64cd\u4f5c\u6570\u6808\u3002"),(0,r.kt)("p",null,"\u5f53\u9047\u5230\u8fd0\u7b97\u7b26\u65f6\uff0c\u5982\u679c\u5b83\u7684\u4f18\u5148\u7ea7\u6bd4\u8fd0\u7b97\u7b26\u6808\u6808\u9876\u5143\u7d20\u7684\u4f18\u5148\u7ea7\u9ad8\u5c31\u8fdb\u6808\u3002\u53cd\u4e4b\uff0c\u53d6\u51fa\u6808\u9876\u8fd0\u7b97\u7b26\u548c\u64cd\u4f5c\u6570\u6808\u6808\u9876\u7684\u8fde\u7eed\u4e24\u4e2a\u64cd\u4f5c\u6570\u8fdb\u884c\u8fd0\u7b97\uff0c\u5e76\u5c06\u7ed3\u679c\u5b58\u5165\u64cd\u4f5c\u6570\u6808\uff0c\u7136\u540e\u7ee7\u7eed\u6bd4\u8f83\u8be5\u8fd0\u7b97\u7b26\u4e0e\u6808\u9876\u8fd0\u7b97\u7b26\u7684\u4f18\u5148\u7ea7\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5de6\u62ec\u53f7\u4e00\u5f8b\u8fdb\u8fd0\u7b97\u7b26\u6808\uff0c\u53f3\u62ec\u53f7\u4e00\u5f8b\u4e0d\u8fdb\u8fd0\u7b97\u7b26\u6808\uff0c\u53d6\u51fa\u8fd0\u7b97\u7b26\u6808\u9876\u8fd0\u7b97\u7b26\u548c\u64cd\u4f5c\u6570\u6808\u9876\u7684\u4e24\u4e2a\u64cd\u4f5c\u6570\u8fdb\u884c\u8fd0\u7b97\uff0c\u5e76\u5c06\u7ed3\u679c\u538b\u5165\u64cd\u4f5c\u6570\u6808\uff0c\u76f4\u5230\u53d6\u51fa\u5de6\u62ec\u53f7\u4e3a\u6b62\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1-6-01.png",src:e(8484).Z,width:"1153",height:"645"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"link_stack.c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'//\n// Created by gaosx on 22-9-2.\n//\n#include "link_stack.h"\n\n// 1. \u521b\u5efa\u7a7a\u7684\u94fe\u5f0f\u6808\u2014\u2014\u4e3a\u6808\u5934\u5728\u5806\u533a\u5206\u914d\u7a7a\u95f4\nlink_stack_t *create_empty_link_stack() {\n    link_stack_t *s = NULL;\n    s = (link_stack_t *) malloc(sizeof(link_stack_t));\n    if (NULL == s) {\n        printf("malloc failed!\\n");\n        return NULL;\n    }\n    memset(s, 0, sizeof(link_stack_t));\n    return s;\n}\n\n// 2. \u5224\u65ad\u6808\u662f\u5426\u4e3a\u7a7a\nint is_empty_link_stack(link_stack_t *s) {\n    return s->top == NULL;\n}\n\n// 3. \u5165\u6808\nvoid push_link_stack(link_stack_t *s, data_t data) {\n    link_list_t *temp = NULL;\n    temp = (link_list_t *) malloc(sizeof(link_stack_t));\n    if (NULL == temp) {\n        printf("malloc failed!\\n");\n        return;\n    }\n    temp->data = data;\n\n    // \u63d2\u5165\u6570\u636e\uff0c\u7c7b\u4f3c\u4e8e\u94fe\u8868\u7684\u5934\u63d2\u6cd5\n    temp->next = s->top;\n    s->top = temp;\n\n    // \u66f4\u65b0n\u7684\u503c\n    s->n++;\n}\n\n// 4. \u51fa\u6808\ndata_t pop_link_stack(link_stack_t *s) {\n    link_list_t *temp = NULL;\n    data_t data;\n\n    // 1. \u4fdd\u5b58\u8981\u5220\u9664\u7ed3\u70b9\u7684\u5730\u5740\n    temp = s->top;\n\n    // 2. \u53d6\u51fa\u6570\u636e\n    data = temp->data;\n\n    // 3. \u66f4\u65b0\u6307\u9488\u4fe1\u606f\n    s->top = temp->next;\n\n    // 4. \u91ca\u653etemp\u7ed3\u70b9\n    free(temp);\n    temp = NULL;\n\n    // 5. \u66f4\u65b0n\u7684\u503c\n    s->n--;\n\n    return data;\n}\n\n// 5. \u8f93\u51fa\u6808\u9876\u5143\u7d20\u7684\u503c\ndata_t get_top_data(link_stack_t *s) {\n    return s->top->data;\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"link_stack.h")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"//\n// Created by gaosx on 22-9-2.\n//\n\n#ifndef EMBEDDED_LINK_STACK_H\n#define EMBEDDED_LINK_STACK_H\n\n#include <stdlib.h>\n#include <string.h>\n#include <stdio.h>\n\n// \u7ed3\u70b9\u7c7b\u578b\u7684\u8bbe\u8ba1\ntypedef int data_t;\n\ntypedef struct node {\n    data_t data;\n    struct node *next;\n} link_list_t;\n\n// \u6808\u5934\u7c7b\u578b\u7684\u8bbe\u8ba1\ntypedef struct {\n    link_list_t *top; // \u6808\u9876\u6307\u9488\n    int n;// \u8bb0\u5f55\u5f53\u524d\u6808\u4e2d\u5143\u7d20\u7684\u4e2a\u6570\n} link_stack_t;\n\nextern link_stack_t *create_empty_link_stack();\n\nextern int is_empty_link_stack(link_stack_t *s);\n\nextern void push_link_stack(link_stack_t *s, data_t data);\n\nextern data_t pop_link_stack(link_stack_t *s);\n\nextern data_t get_top_data(link_stack_t *s);\n\n#endif //EMBEDDED_LINK_STACK_H\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"main.c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"//\n// Created by gaosx on 22-9-10.\n//\n\n#include \"link_stack.h\"\n\n// \u83b7\u5f97\u4f18\u5148\u7ea7\u51fd\u6570\nint get_level(char operator) {\n    switch (operator) {\n        case '+':\n        case '-':\n            return 1;\n        case '*':\n        case '/':\n            return 2;\n        case '(':\n            return 0;\n        default:\n            printf(\"Invalid operator : %c.\", operator);\n            return -1;\n    }\n}\n\n// \u8ba1\u7b97+\u3001-\u3001*\u3001/\u51fd\u6570\n// \u53c2\u6570\u8bf4\u660e\uff1a\n// operand_stack \u8fd0\u7b97\u6570\n// operator_stack \u8fd0\u7b97\u7b26\nint compute(link_stack_t *operand_stack, link_stack_t *operator_stack) {\n    int data, data1, data2;\n    char c = 0;\n    c = (char) pop_link_stack(operator_stack); // \u8fd0\u7b97\u7b26\u51fa\u6808\n    if (c == '(') {\n        return -1;\n    }\n\n    data2 = pop_link_stack(operand_stack); // \u8fd0\u7b97\u65702\u51fa\u6808\n    data1 = pop_link_stack(operand_stack); // \u8fd0\u7b97\u65701\u51fa\u6808\n\n\n    switch (c) {\n        case '+':\n            data = data1 + data2;\n            break;\n        case '-':\n            data = data1 - data2;\n            break;\n        case '*':\n            data = data1 * data2;\n            break;\n        case '/':\n            data = data1 / data2;\n            break;\n        default:\n            break;\n    }\n\n\n    push_link_stack(operand_stack, data); // \u628a\u6700\u540e\u83b7\u5f97\u7684\u8fd0\u7b97\u6570\u5165\u6808\n    return 0;\n}\n\n// \u5904\u7406\u8fd0\u7b97\u7b26\n// \u53c2\u6570\u8bf4\u660e\uff1a\n// operand_stack \u8fd0\u7b97\u6570\n// operator_stack \u8fd0\u7b97\u7b26\nvoid deal_with(link_stack_t *operand_stack, link_stack_t *operator_stack, const char *p) {\n    // \u5982\u679c\u5b83\u7684\u4f18\u5148\u7ea7\u6bd4\u8fd0\u7b97\u7b26\u6808\u6808\u9876\u5143\u7d20\u7684\u4f18\u5148\u7ea7\u9ad8\u6216\u8005\u7a7a\u6808\u5c31\u8fdb\u8fd0\u7b97\u7b26\u6808\n    // \u5de6\u62ec\u53f7\u4e00\u5f8b\u8fdb\u8fd0\u7b97\u7b26\u6808\n    if (is_empty_link_stack(operator_stack) || *p == '(' || (\n            *p != '\\0' &&\n            *p != ')' &&\n            get_level(*p) > get_level((char) get_top_data(operator_stack))\n    )\n            ) {\n        push_link_stack(operator_stack, *p);\n    } else {\n        // \u8ba1\u7b97\n        int r = compute(operand_stack, operator_stack);\n        if (r == -1) {\n            return;\n        }\n        // \u7ee7\u7eed\u6bd4\u8f83\u8be5\u8fd0\u7b97\u7b26\u4e0e\u6808\u9876\u8fd0\u7b97\u7b26\u7684\u4f18\u5148\u7ea7\n        deal_with(operand_stack, operator_stack, p);\n    }\n}\n\nint main() {\n    char buf[1024];\n    char *p = buf;\n    int data = 0;\n    int count = 0;\n    int i = 0;\n    int j = 0;\n    int m = 1;\n\n    printf(\"\u8bf7\u8f93\u5165\u8fd0\u7b97\u8868\u8fbe\u5f0f\uff1a\\n\");\n    scanf(\"%s\", buf);\n\n    link_stack_t *operand_stack = create_empty_link_stack();// \u8fd0\u7b97\u6570\u6808\n    link_stack_t *operator_stack = create_empty_link_stack(); // \u8fd0\u7b97\u7b26\u6808\n\n    while (1) {\n        // \u64cd\u4f5c\u6570\u4e00\u5f8b\u8fdb\u64cd\u4f5c\u6570\u6808\n        if (*p >= '0' && *p <= '9') {\n            // \u82e5\u662f\u8fde\u7eed\u7684\u8fd0\u7b97\u6570,\u5408\u5e76\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u6570data\n            data = 0;\n            count = 0;\n            char *q = p;\n            while (*q >= '0' && *q <= '9') {\n                count++;\n                q++;\n            }\n            for (i = count - 1; i >= 0; i--) {\n                m = 1;\n                for (j = 0; j < count - 1 - i; j++) {\n                    m *= 10;\n                }\n                data += m * (int)(p[i] - 48);\n            }\n            if (count) {\n                p = q - 1;\n            }\n            push_link_stack(operand_stack, data);\n        }\n        // \u9047\u5230\u8fd0\u7b97\u7b26\u65f6\n        if (*p == '+' || *p == '-' || *p == '*' || *p == '/' || *p == '(' || *p == ')') {\n            // \u5904\u7406\u8fd0\u7b97\u7b26\n            deal_with(operand_stack, operator_stack, p);\n        }\n        // \u9047\u5230\\0\u65f6\n        if (*p == '\\0') {\n            // \u5904\u7406\u8fd0\u7b97\u7b26\n            deal_with(operand_stack, operator_stack, p);\n            break;\n        }\n        p++;\n    }\n\n    printf(\"\u8fd0\u7b97\u7ed3\u679c\u4e3a\uff1a%d\", pop_link_stack(operand_stack));\n    return 0;\n}\n")),(0,r.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8bf7\u8f93\u5165\u8fd0\u7b97\u8868\u8fbe\u5f0f\uff1a\n(4+8)*2-3\n\u8fd0\u7b97\u7ed3\u679c\u4e3a\uff1a21\n")))}_.isMDXComponent=!0},8484:(n,t,e)=>{e.d(t,{Z:()=>a});const a=e.p+"assets/images/1-6-01-75760bdcfc35e859b5e6f43a3907239e.png"}}]);