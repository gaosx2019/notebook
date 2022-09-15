"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[5661],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>m});var i=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var d=i.createContext({}),o=function(n){var e=i.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=o(n.components);return i.createElement(d.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,d=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),c=o(t),m=a,_=c["".concat(d,".").concat(m)]||c[m]||u[m]||r;return t?i.createElement(_,l(l({ref:e},p),{},{components:t})):i.createElement(_,l({ref:e},p))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,l=new Array(r);l[0]=c;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s.mdxType="string"==typeof n?n:a,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1197:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:4},l="1-4 \u5b66\u751f\u7ba1\u7406\u7cfb\u7edf\u4e4b\u63d2\u5165\u5b66\u751f",s={unversionedId:"imooc-embedded-engineer/step02/week08/student-management-system/chapter01/insert-student",id:"imooc-embedded-engineer/step02/week08/student-management-system/chapter01/insert-student",title:"1-4 \u5b66\u751f\u7ba1\u7406\u7cfb\u7edf\u4e4b\u63d2\u5165\u5b66\u751f",description:"\u4e00\u3001\u529f\u80fd\u8bf4\u660e",source:"@site/docs/imooc-embedded-engineer/step02/week08/student-management-system/chapter01/insert-student.md",sourceDirName:"imooc-embedded-engineer/step02/week08/student-management-system/chapter01",slug:"/imooc-embedded-engineer/step02/week08/student-management-system/chapter01/insert-student",permalink:"/notebook/docs/imooc-embedded-engineer/step02/week08/student-management-system/chapter01/insert-student",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"1-3 \u5b66\u751f\u7ba1\u7406\u7cfb\u7edf\u4e4b\u6574\u4f53\u6846\u67b6\u8bbe\u8ba1",permalink:"/notebook/docs/imooc-embedded-engineer/step02/week08/student-management-system/chapter01/framework-design"},next:{title:"1-5 \u5b66\u751f\u7ba1\u7406\u7cfb\u7edf\u4e4b\u8f93\u51fa\u5b66\u751f",permalink:"/notebook/docs/imooc-embedded-engineer/step02/week08/student-management-system/chapter01/display-student"}},d={},o=[{value:"\u4e00\u3001\u529f\u80fd\u8bf4\u660e",id:"\u4e00\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"linklist.h",id:"linklisth",level:3},{value:"linklist.c",id:"linklistc",level:3},{value:"student_manager.h",id:"student_managerh",level:3},{value:"student_manager.c",id:"student_managerc",level:3},{value:"main.c",id:"mainc",level:3},{value:"\u8f93\u51fa\uff1a",id:"\u8f93\u51fa",level:3}],p={toc:o};function u(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-4-\u5b66\u751f\u7ba1\u7406\u7cfb\u7edf\u4e4b\u63d2\u5165\u5b66\u751f"},"1-4 \u5b66\u751f\u7ba1\u7406\u7cfb\u7edf\u4e4b\u63d2\u5165\u5b66\u751f"),(0,a.kt)("h2",{id:"\u4e00\u529f\u80fd\u8bf4\u660e"},"\u4e00\u3001\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e4b\u524d\u4ee3\u7801\u6846\u67b6\u7684\u57fa\u7840\u4e0a\uff0c\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"student_manager.c"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"insert_student(head)"),"\u51fd\u6570\u7684\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u5177\u4f53\u529f\u80fd\uff1a\u7528\u6237\u4ece\u952e\u76d8\u8f93\u5165\u5b66\u751f\u7684\u4fe1\u606f","[\u5b66\u53f7 \u59d3\u540d \u6027\u522b \u5e74\u9f84 \u5206\u6570]",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"\u4f5c\u4e3a\u57fa\u51c6\uff0c\u5224\u65ad\u5b66\u751f\u662f\u5426\u5b58\u5728\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"\uff1a\u5b66\u751f\u552f\u4e00\u4e0d\u53ef\u91cd\u590d\u7684\u5b66\u53f7"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u662f\u4e0d\u5b58\u5728\uff0c\u63d2\u5165\u5b66\u751f\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},'\u82e5\u662f\u5b58\u5728\uff0c\u8f93\u51fa"\u5df2\u7ecf\u5b58\u5728id=xx\u53f7\u5b66\u751f\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01"')))),(0,a.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("h3",{id:"linklisth"},"linklist.h"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"//\n// Created by gaosx on 22-8-31.\n//\n\n#ifndef EMBEDDED_LINKLIST_H\n#define EMBEDDED_LINKLIST_H\n\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// \u5b66\u751f\u4fe1\u606f\u7ed3\u6784\u4f53\ntypedef struct student {\n    int id; // \u5b66\u53f7\n    char name[20]; // \u59d3\u540d\n    char sex[20]; // \u6027\u522b\n    int age; // \u5e74\u7eaa\n    double score; // \u5206\u6570\n} s_t;\n\ntypedef s_t datatype_t;\n\ntypedef struct node {\n    datatype_t data; // \u6570\u636e\u57df\uff1a\u4fdd\u5b58\u6709\u6548\u6570\u636e\n    struct node *next; // \u6307\u9488\u57df\uff1a\u4fdd\u5b58\u4e0b\u4e00\u4e2a\u7ed3\u70b9\u7684\u5730\u5740\n} linklist_t;\n\nextern linklist_t *create_empty_linklist();\n\nextern void insert_tail_linklist(linklist_t *head, datatype_t data);\n\nextern int is_empty_linklist(linklist_t *head);\n\nextern int delete_data_linklist(linklist_t *head, int id);\n\nextern void clean_up_linklist(linklist_t **head);\n\n#endif //EMBEDDED_LINKLIST_H\n")),(0,a.kt)("h3",{id:"linklistc"},"linklist.c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'//\n// Created by gaosx on 22-8-31.\n//\n#include "linklist.h"\n\n// \u521b\u5efa\u7a7a\u7684\u94fe\u8868---\u4e3a\u5934\u7ed3\u70b9\u5728\u5806\u533a\u5206\u914d\u7a7a\u95f4\nlinklist_t *create_empty_linklist() {\n    linklist_t *head = NULL;\n\n    // 1.1 \u5206\u914d\u5806\u533a\u7a7a\u95f4\n    head = (linklist_t *) malloc(sizeof(linklist_t));\n    if (NULL == head) {\n        printf("malloc failed!\\n");\n        return NULL;\n    }\n\n    memset(head, 0, sizeof(linklist_t));\n    // head->next = NULL;\n    // head->data = 0;\n    return head;\n}\n\n// \u5c3e\u63d2\u6cd5\n// \u7279\u70b9\uff1a\u63d2\u5165\u7684\u987a\u5e8f\u548c\u8f93\u51fa\u7684\u987a\u5e8f\u662f\u76f8\u540c\u7684\nvoid insert_tail_linklist(linklist_t *head, datatype_t data) {\n    // 3.1 \u4e3a\u7ed3\u70b9\u5728\u5806\u533a\u7533\u8bf7\u7a7a\u95f4\n    linklist_t *temp = (linklist_t *) malloc(sizeof(linklist_t));\n    if (NULL == temp) {\n        printf("malloc failed!\\n");\n    }\n\n    // 3.2 \u63d2\u5165\u6570\u636e\n    temp->data = data;\n\n    // 3.3 \u627e\u5230\u5c3e\u7ed3\u70b9\n    linklist_t *tail = head;\n    while (tail->next != NULL) {\n        tail = tail->next;\n    }\n\n    // 3.4 \u8fde\u63a5\u7ed3\u70b9\n    temp->next = tail->next;\n    tail->next = temp;\n}\n\nint is_empty_linklist(linklist_t *head) {\n    return head->next == NULL;\n}\n\nint delete_data_linklist(linklist_t *head, int id) {\n    linklist_t *p = NULL;\n    linklist_t *q = NULL;\n\n    int flag = 0;\n\n    if (is_empty_linklist(head)) {\n        return -1;\n    }\n\n    p = head;\n\n    // \u6ca1\u6709\u904d\u5386\u5230\u94fe\u8868\u5c3e\u90e8\n    while (p->next != NULL) {\n        if (p->next->data.id == id) {\n            // \u4fdd\u5b58\u8981\u5220\u9664\u8282\u70b9\u7684\u5730\u5740\n            q = p->next;\n            p->next = q->next;\n            free(q);\n            q = NULL;\n\n            flag = 1;\n        } else {\n            p = p->next;\n        }\n    }\n\n    if (flag == 0) {\n        return -2;\n    }\n    return 0;\n}\n\n// \u5220\u9664\u94fe\u8868\u4e2d\u6240\u6709\u7684\u7ed3\u70b9\nvoid clean_up_linklist(linklist_t **head) {\n    linklist_t *p = *head;\n    linklist_t *q = NULL;\n    while (p != NULL) {\n        q = p->next;\n        free(p);\n        p = NULL;\n        p = q;\n    }\n    *head = NULL;\n}\n')),(0,a.kt)("h3",{id:"student_managerh"},"student_manager.h"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'//\n// Created by gaosx on 22-9-15.\n//\n#ifndef EMBEDDED_STUDENT_MANAGER_H\n#define EMBEDDED_STUDENT_MANAGER_H\n\n#include <stdbool.h>\n#include <string.h>\n#include <stdio.h>\n#include "linklist.h"\n\nenum option_id {\n    ADD_STUDENT = 1, // \u6dfb\u52a0\u5b66\u751f\n    FIND_STUDENT, // \u5bfb\u627e\u5b66\u751f\n    PRINT_STUDENT, // \u8f93\u51fa\u5b66\u751f\n    MODIFY_STUDENT, // \u4fee\u6539\u5b66\u751f\n    DELETE_STUDENT, // \u5220\u9664\u5b66\u751f\n    EXIT_SYSTEM, // \u9000\u51fa\u7cfb\u7edf\n};\n\nextern bool login_status;\nextern void login();\n\nextern void insert_student(linklist_t *head);\nextern void find_student(linklist_t *head);\nextern void display_student(linklist_t *head);\nextern void update_student(linklist_t *head);\nextern void delete_student(linklist_t *head);\n\n#endif //EMBEDDED_STUDENT_MANAGER_H\n')),(0,a.kt)("h3",{id:"student_managerc"},"student_manager.c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'//\n// Created by gaosx on 22-9-15.\n//\n#include "student_manager.h"\n\nbool login_status = false;\n\nvoid login() {\n    char username[30] = {0};\n    char password[30] = {0};\n\n    printf("============\u767b\u5f55============\\n");\n\n    printf("\u8d26\u6237\uff1a");\n    // scanf("%s", username);\n    fgets(username, sizeof(username), stdin);\n    username[strlen(username) - 1] = \'\\0\';\n\n    printf("\u5bc6\u7801\uff1a");\n    // scanf("%s", password);\n    fgets(password, sizeof(password), stdin);\n    password[strlen(password) - 1] = \'\\0\';\n\n    if (strcmp(username, "root") == 0 && strcmp(password, "root") == 0) {\n        login_status = true;\n        printf("\u767b\u5f55\u6210\u529f\\n");\n    } else {\n        login_status = false;\n        printf("\u5bc6\u7801\u9519\u8bef\\n");\n    }\n\n    // \u6269\u5c55\uff1a\u540e\u671f\u5b66\u4e60\u4e86\u6587\u4ef6\u64cd\u4f5c\u540e\n    // \u53ef\u4ee5\u521b\u5efa\u4e00\u4e2auser.csv\u6587\u4ef6\uff0c\u628a\u8d26\u6237\u548c\u5bc6\u7801\u5b58\u653e\u5230csv\u6587\u4ef6\u4e2d\uff0c\u7528\u6237\u8f93\u5165\u540e\uff0c\u4e0ecsv\u6587\u4ef6\u4e2d\u7684\u8d26\u6237\u548c\u5bc6\u7801\u8fdb\u884c\u6bd4\u5bf9\n    // \u60c5\u51b51\uff1a\u5bc6\u7801\u6b63\u786e\uff0c\u8fdb\u5165\u5230\u4e0b\u4e00\u4e2a\u9875\u9762\n    // \u60c5\u51b52\uff1a\u5bc6\u7801\u9519\u8bef\uff0c\u65b0\u7528\u6237\u2014\u2014\u63d0\u793a\u6ce8\u518c\n    //               \u8001\u7528\u6237\u2014\u2014\u91cd\u65b0\u8f93\u5165\n    // fgets()\n    // strtok()\n    // fopen()/fread()/fwrite()\n    // open()/read()/write()\n}\n\nvoid insert_student(linklist_t *head) {\n    s_t st = {0};\n    bool is_id_exist = false;\n    linklist_t *p = NULL;\n\n    // 1. \u8bf7\u8f93\u5165\u5b66\u751f\u7684\u4fe1\u606f\n    printf("------------------------------------\\n");\n    printf("\u8bf7\u8f93\u5165\u5b66\u751f\u7684\u4fe1\u606f\u3010\u5b66\u53f7 \u59d3\u540d \u6027\u522b \u5e74\u9f84 \u5206\u6570\u3011\uff1a");\n    scanf("%d%s%s%d%lf", &(st.id), st.name, st.sex, &(st.age), &(st.score));\n\n    while(getchar() != \'\\n\'); // \u6e05\u9664\u7f13\u51b2\u533a\n\n    // 2. \u904d\u5386\u94fe\u8868\uff0c\u4ee5id\u4e3a\u57fa\u51c6\uff0c\u5224\u65ad\u5b66\u751f\u662f\u5426\u5b58\u5728\n    p = head;\n    while (p->next != NULL) {\n        if (p->next->data.id == st.id) {\n            is_id_exist = true;\n            printf("\u5df2\u7ecf\u5b58\u5728id=%d\u53f7\u5b66\u751f\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01", st.id);\n            break;\n        }\n        p = p->next;\n    }\n    if (!is_id_exist) {\n        insert_tail_linklist(head, st);\n        printf("\u63d2\u5165\u6210\u529f\\n");\n    }\n}\n')),(0,a.kt)("h3",{id:"mainc"},"main.c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'//\n// Created by gaosx on 22-9-15.\n//\n#include "student_manager.h"\n\nint main() {\n    int num = -1;\n    // 1. \u767b\u5f55\n    while (!login_status) {\n        login();\n    }\n\n    // 2. \u521b\u5efa\u7a7a\u94fe\u8868\n    linklist_t *head = create_empty_linklist();\n\n    // 3. \u4e3b\u83dc\u5355\n    printf("  |----------------|  \\n");\n    printf("  |   \u5b66\u751f\u7ba1\u7406\u7cfb\u7edf   |  \\n");\n    printf("  |----------------|  \\n");\n    printf("  |   1. \u589e\u52a0\u5b66\u751f   |  \\n");\n    printf("  |   2. \u67e5\u627e\u5b66\u751f   |  \\n");\n    printf("  |   3. \u8f93\u51fa\u5b66\u751f   |  \\n");\n    printf("  |   4. \u4fee\u6539\u5b66\u751f   |  \\n");\n    printf("  |   5. \u5220\u9664\u5b66\u751f   |  \\n");\n    printf("  |   6. \u9000\u51fa\u7cfb\u7edf   |  \\n");\n    printf("  |----------------|  \\n");\n\n    printf("\u8bf7\u9009\u62e9\uff1a");\n    scanf("%d", &num);\n\n    switch (num) {\n        case ADD_STUDENT:\n            insert_student(head);\n            break;\n        case FIND_STUDENT:\n            // find_student(head);\n            break;\n        case PRINT_STUDENT:\n            // display_student(head);\n            break;\n        case MODIFY_STUDENT:\n            // update_student(head);\n            break;\n        case DELETE_STUDENT:\n            // delete_student(head);\n            break;\n        case EXIT_SYSTEM:\n            exit(EXIT_SUCCESS); // \u7ed3\u675f\u5f53\u524d\u8fdb\u7a0b\n        default:\n            break;\n    }\n\n    clean_up_linklist(&head);\n    return 0;\n}\n')),(0,a.kt)("h3",{id:"\u8f93\u51fa"},"\u8f93\u51fa\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"============\u767b\u5f55============\n\u8d26\u6237\uff1aroot\n\u5bc6\u7801\uff1aroot\n\u767b\u5f55\u6210\u529f\n  |----------------|  \n  |   \u5b66\u751f\u7ba1\u7406\u7cfb\u7edf   |  \n  |----------------|  \n  |   1. \u589e\u52a0\u5b66\u751f   |  \n  |   2. \u67e5\u627e\u5b66\u751f   |  \n  |   3. \u8f93\u51fa\u5b66\u751f   |  \n  |   4. \u4fee\u6539\u5b66\u751f   |  \n  |   5. \u5220\u9664\u5b66\u751f   |  \n  |   6. \u9000\u51fa\u7cfb\u7edf   |  \n  |----------------|  \n\u8bf7\u9009\u62e9\uff1a1\n------------------------------------\n\u8bf7\u8f93\u5165\u5b66\u751f\u7684\u4fe1\u606f\u3010\u5b66\u53f7 \u59d3\u540d \u6027\u522b \u5e74\u9f84 \u5206\u6570\u3011\uff1a1 \u5f20\u4e09 \u7537 18 99\n\u63d2\u5165\u6210\u529f\n")))}u.isMDXComponent=!0}}]);