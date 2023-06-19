"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3108],{5318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(5773),a=(r(7378),r(5318));const i={sidebar_position:1},l=void 0,o={unversionedId:"type/isPlainObject",id:"type/isPlainObject",title:"isPlainObject",description:"",source:"@site/docs/utils/type/isPlainObject.mdx",sourceDirName:"type",slug:"/type/isPlainObject",permalink:"/website/build/index.html/utils/type/isPlainObject",draft:!1,editUrl:"https://github.com/samonxian/react-doc-starter/tree/master/webiste/docs/utils/type/isPlainObject.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"componentsSidebar",previous:{title:"isNumber",permalink:"/website/build/index.html/utils/type/isNumber"},next:{title:"\u5b57\u7b26\u4e32\u5de5\u5177",permalink:"/website/build/index.html/utils/category/\u5b57\u7b26\u4e32\u5de5\u5177"}},c={},p=[{value:"\u4f7f\u7528\u4f8b\u5b50",id:"\u4f7f\u7528\u4f8b\u5b50",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5bf9\u8c61\u662f\u5426\u662f\u7eaf\u5bf9\u8c61"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u4f8b\u5b50"},"\u4f7f\u7528\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"isPlainObject({ a: 2 }) // true\nisPlainObject(null) // false\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"obj?"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u68c0\u6d4b\u7684\u76ee\u6807"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("p",null," true or false"))}m.isMDXComponent=!0}}]);