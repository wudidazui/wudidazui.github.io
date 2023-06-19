"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3061],{62327:(e,n,t)=>{t.d(n,{Z:()=>x});var r,a=t(27378),o=t(50353),l=t(33337),i=t(39798),s=t(33099),c=(t(85920),t(94322));function u(e){let{language:n,replace:t,section:r,source:o,metastring:l}=e;const i=function(e,n){void 0===n&&(n={});const{section:t,replace:r}=n;let a;a="object"==typeof e&&"default"in e?e.default:e;if(t){const e=new RegExp(`// <${t}>\\s([\\s\\S]*?)\\s// </${t}>\\s`,"g");a=a.split(e).reduce(((e,n,t)=>t%2==0?e:`${e}\n\n${n}`),"")}if(a=a.replace(/\/\/ <.*?\n/g,""),r)for(const[o,l]of Object.entries(r))a=a.replace(new RegExp(o,"gs"),l);a=a.trim(),a.includes("\n")||(a+="\n");return a}(o,{replace:t,section:r});return a.createElement(c.Z.pre,null,a.createElement(c.Z.code,{children:i,className:`language-${n}`,mdxType:"code",originalType:"code",parentName:"pre",metastring:l}))}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}const p=e=>{let{title:n,titleId:t,...o}=e;return a.createElement("svg",d({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":t},o),n?a.createElement("title",{id:t},n):null,r||(r=a.createElement("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688Z"})))};var m;function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}const E=e=>{let{title:n,titleId:t,...r}=e;return a.createElement("svg",f({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":t},r),n?a.createElement("title",{id:t},n):null,m||(m=a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Z"})))};const g={playgroundContainer:"rbac-theme-playground__playgroundContainer",playgroundContent:"rbac-theme-playground__playgroundContent",playgroundIDE:"rbac-theme-playground__playgroundIDE",playgroundIde:"rbac-theme-playground__playgroundIDE",codeBoxActions:"rbac-theme-playground__codeBoxActions",svgIcon:"rbac-theme-playground__svgIcon"};function x(e){let{fileList:n,demoList:t,sourceUrl:r,children:c}=e;const[d,m]=(0,a.useState)(!1),f=()=>m((e=>!e)),{siteConfig:{customFields:x={}}={}}=(0,o.Z)(),{demoSourceUrl:v="",codeSandboxPacakgeConfig:y}=x;return console.log(n,r,c),a.createElement(s.Z,null,(()=>a.createElement("div",{className:g.playgroundContainer},a.createElement("div",{className:g.playgroundContent},c),a.createElement("div",{className:g.codeBoxActions},d&&a.createElement("span",{className:g.svgIcon,onClick:f},a.createElement(p,null)),!d&&a.createElement("span",{className:g.svgIcon,onClick:f},a.createElement(E,null))),d&&t?.length>0&&a.createElement("div",{className:g.playgroundIDE},1===t.length&&a.createElement(u,{language:t[0].fileSuffix,source:t[0].fileContent}),t.length>1&&a.createElement(l.Z,{defaultValue:"0",values:t.map(((e,n)=>{let{fileName:t,fileSuffix:r}=e;return{label:`${t}.${r}`,value:String(n)}}))},t.map(((e,n)=>{let{fileName:t,fileContent:r,fileSuffix:o}=e;const l=`${t}.${o}`;return a.createElement(i.Z,{value:String(n),key:l},a.createElement(u,{language:o,source:r}))})))))))}},99412:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(27378),a=t(13099);const o={propsTable:"propsTable_NZ7r"};function l(e){const{data:n}=e,t=(0,r.useMemo)((()=>(0,a.ZP)({createElement:r.createElement})),[]);return n?.props?r.createElement("div",{className:o.propsTable},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{align:"left"},"\u53c2\u6570"),r.createElement("th",{align:"left"},"\u7c7b\u578b"),r.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),r.createElement("tbody",null,Object.keys(n.props||{}).map((e=>{const{required:a,description:l,tsType:i,defaultValue:s}=n.props[e],c="string"==typeof l?t(l).tree:l;return r.createElement(r.Fragment,{key:e},r.createElement("tr",null,r.createElement("td",{className:o.paramsColumn,align:"left",rowSpan:2},r.createElement("b",null,e),!a&&"?"),r.createElement("td",{className:o.typeColumn,align:"left"},i?.raw||i?.name||"-"),r.createElement("td",{className:o.defaultColumn,align:"left"},s?.value||"-")),r.createElement("tr",null,r.createElement("td",{className:o.descColumn,align:"left",colSpan:2},c||"-")))}))))):null}const i=(0,r.memo)(l)},17813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=t(25773),a=t(27378),o=t(35318),l=t(99412),i=t(62327);const s=function(){return a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},a.createElement("iframe",{width:600,height:700,src:"https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684218876602%2F&title=Exposure&desc=%E6%9B%9D%E5%85%89%E7%9B%91%E5%90%AC&media=vConsole#/exposure"})," ")},c={},u=void 0,d={unversionedId:"Exposure/Exposure",id:"Exposure/Exposure",title:"Exposure",description:"\u4f7f\u7528",source:"@site/docs/components/Exposure/Exposure.mdx",sourceDirName:"Exposure",slug:"/Exposure/",permalink:"/components/Exposure/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"\u66dd\u5149\u76d1\u542c",permalink:"/components/category/\u66dd\u5149\u76d1\u542c"},next:{title:"\u5e95\u90e8\u5bb9\u5668",permalink:"/components/category/\u5e95\u90e8\u5bb9\u5668"}},p={},m=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"Props",id:"props",level:2}],f={toc:m},E="wrapper";function g(e){let{components:n,...a}=e;return(0,o.kt)(E,(0,r.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,o.kt)(i.Z,{fileList:[{fileName:"index",fileSuffix:"tsx",fileContent:t(57634)}],demoList:[{fileName:"index",fileSuffix:"tsx",fileContent:t(97059)},{fileName:"style",fileSuffix:"less",fileContent:t(56222)}],sourceUrl:"demo/components/Exposure/show/index.tsx",mdxType:"Playground"},(0,o.kt)(s,{mdxType:"INDEXHVCJA5G6QU4"})),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)(l.Z,{src:"/Users/wangtao/Documents/JR_Workspace/biz-doc/packages/components/src/Exposure/index.tsx",showDescriptionOnSummary:!0,data:{description:"",displayName:"Exposure",methods:[],props:{id:{required:!0,tsType:{name:"string"},description:"\u5fc5\u4f20\uff0c\u8bbe\u7f6e\u66dd\u5149\u76d1\u542c\u7684id\u5c5e\u6027"},children:{required:!1,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"\u975e\u5fc5\u4f20\uff0c\u81ea\u5b9a\u4e49\u5b50\u5143\u7d20\u7684dom",defaultValue:{value:"\u65e0",computed:!0}},delay:{required:!1,tsType:{name:"number"},description:"\u975e\u5fc5\u4f20\uff0c\u56de\u8c03\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u9ed8\u8ba4500\u6beb\u79d2\u3002",defaultValue:{value:"500",computed:!1}},onShow:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void | (() => Promise<void>)",signature:{arguments:[{name:"id",type:{name:"string"}}],return:{name:"union",raw:"void | (() => Promise<void>)",elements:[{name:"void"},{name:"unknown"}]}}},description:"\u975e\u5fc5\u4f20\uff0c\u66dd\u5149\u65f6\u7684\u56de\u8c03\u51fd\u6570\uff0cid\u4e3a\u7ec4\u4ef6\u4f20\u5165\u7684id\u3002",defaultValue:{value:"\u65e0",computed:!0}},onHide:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void | (() => Promise<void>)",signature:{arguments:[{name:"id",type:{name:"string"}}],return:{name:"union",raw:"void | (() => Promise<void>)",elements:[{name:"void"},{name:"unknown"}]}}},description:"\u975e\u5fc5\u4f20\uff0c\u9690\u85cf\uff08\u4e0d\u518d\u66dd\u5149\uff09\u65f6\u7684\u56de\u8c03\u51fd\u6570\uff0cid\u4e3a\u7ec4\u4ef6\u4f20\u5165\u7684id\u3002",defaultValue:{value:"\u65e0",computed:!0}},area:{required:!1,tsType:{name:"union",raw:"'part' | 'whole'",elements:[{name:"literal",value:"'part'"},{name:"literal",value:"'whole'"}]},description:"\u975e\u5fc5\u4f20\uff0c\u662f\u5426\u662f\u6574\u4e2a\u533a\u57df\u66dd\u5149\uff0c'part'\u8868\u793a\u90e8\u5206\u533a\u57df\u66dd\u5149\u5c31\u53ef\u89e6\u53d1\u56de\u8c03\u51fd\u6570\uff0c'whole'\u8868\u793a\u6574\u4e2a\u533a\u57df\u66dd\u5149\u5c31\u53ef\u89e6\u53d1\u56de\u8c03\u51fd\u6570\uff0c\u9ed8\u8ba4\u662f 'whole'\u3002",defaultValue:{value:"'whole'",computed:!1}},debug:{required:!1,tsType:{name:"boolean"},description:"\u975e\u5fc5\u4f20\uff0c\u662f\u5426\u8fdb\u5165debug\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u662ffalse",defaultValue:{value:"\u65e0",computed:!0}},type:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"\u975e\u5fc5\u4f20\uff0cdebug\u6a21\u5f0f\u4f1a\u5c55\u793a\u7ed9\u9700\u8981\u66dd\u5149\u7684\u5143\u7d20\u589e\u52a0\u4e00\u6761\u7ea2\u7ebf\uff0c\u65b9\u4fbf\u8c03\u8bd5 'vertical'\u8868\u793a\u6c34\u5e73\u7ea2\u7ebf\uff0c'horizontal'\u8868\u793a\u5782\u76f4\u7ea2\u7ebf\uff0c\u9ed8\u8ba4\u662f'vertical'",defaultValue:{value:"'vertical'",computed:!1}}}},mdxType:"PropsTable"}))}g.isMDXComponent=!0},97059:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r="import { subscription } from '@credit-biz/mp';\nimport { Exposure, ExposureEvents } from '@credit-biz/react';\nimport { NativeScroll } from '@flatbiz/react';\nimport { useEffect, useState } from 'react';\nimport './style.less';\n\nconst DemoExposure = () => {\n  const [items1] = useState([{}, {}, {}, {}]);\n  // const [items2] = useState([{}, {}]);\n  const [items3] = useState([{}, {}, {}]);\n\n  useEffect(() => {\n    subscription({\n      onLoad: onPageExposure, // \u9875\u9762\u521d\u6b21\u52a0\u8f7d\u65f6\u89e6\u53d1\n      onShow: () => {\n        // APP\u4e2d\u9875\u9762\u540e\u9000\u3001\u524d\u540e\u53f0\u5207\u6362\u65f6\u89e6\u53d1\n        onPageExposure();\n\n        // \u66dd\u5149\u5143\u7d20\u88ab\u8bb0\u5f55\u5728 window[ExposureEvents] \u4e2d\uff0c\u8fd9\u91cc\u518d\u6b21\u89e6\u53d1\u66dd\u5149\u5143\u7d20\u7684 onShow \u4e8b\u4ef6\n        Object.keys(window[ExposureEvents]).map((id) => {\n          window[ExposureEvents][id](id);\n        });\n      },\n    });\n  }, []);\n\n  const onPageExposure = () => {\n    console.warn('\u9875\u9762\u66dd\u5149', 'pageshow');\n  };\n\n  const onLayoutExposure = (id?: string) => {\n    console.warn('\u6a21\u677f\u66dd\u5149', id);\n  };\n\n  const onElementExposure = (id?: string) => {\n    console.warn('\u5143\u7d20\u66dd\u5149', id);\n  };\n\n  // const onElementHide = (id?: string) => {\n  //   console.warn('\u5143\u7d20\u79fb\u9664\u53ef\u89c6\u533a\u57df', id);\n  // };\n\n  return (\n    <div className=\"demo-exposure\">\n      {/* \u9ed8\u8ba4 area=\"whole\" \u5143\u7d20100%\u53ef\u89c1\u65f6\u89e6\u53d1 onShow */}\n      <h4>@flatbiz/react: NativeScroll</h4>\n      <NativeScroll height={500}>\n        <ul>\n          {items1.map((_, index) => (\n            <Exposure\n              key={index}\n              id={`A-${index}`}\n              onShow={(id) => onElementExposure(id)}\n            >\n              <li>A - {index}</li>\n            </Exposure>\n          ))}\n        </ul>\n      </NativeScroll>\n\n      <br />\n\n      {/* Swiper \u4e0d\u652f\u6301 loop \u6a21\u5f0f\uff0c\u590d\u5236\u7684 slider \u65e0\u6cd5\u89e6\u53d1\u7ed1\u5b9a\u7684\u4e8b\u4ef6 */}\n      {/* <h4>@credit-biz/react: Swiper</h4> */}\n      {/* <Swiper\n        options={{\n          height: 250,\n          spaceBetween: 20,\n          loop: false,\n        }}\n      >\n        {items2.map((_, index) => (\n          <div className=\"swiper-slide\" key={index}>\n            <Exposure\n              key={index}\n              id={`B-${index}`}\n              type=\"horizontal\"\n              onShow={(id) => onElementExposure(id)}\n            >\n              <li>B - {index}</li>\n            </Exposure>\n          </div>\n        ))}\n      </Swiper> */}\n\n      <br />\n\n      {/* area=\"part\" \u6a21\u677f\u9876\u90e8\u5c40\u90e8\u53ef\u89c1\u65f6\u89e6\u53d1 onShow */}\n      <Exposure\n        id=\"NativeScroll-0\"\n        area=\"part\"\n        onShow={(id) => onLayoutExposure(id)}\n      >\n        <h4>NativeScroll</h4>\n        <ul>\n          {items3.map((_, index) => (\n            <Exposure\n              key={index}\n              id={`C-${index}`}\n              onShow={(id) => onElementExposure(id)}\n            >\n              <li>C - {index}</li>\n            </Exposure>\n          ))}\n        </ul>\n      </Exposure>\n    </div>\n  );\n};\n\nexport default DemoExposure;\n"},56222:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=".demo-exposure {\n  .v-exposure {\n    margin-bottom: 20px;\n  }\n\n  li {\n    width: 100%;\n    display: block;\n    height: 250px;\n    line-height: 250px;\n    text-align: center;\n    font-size: 36px;\n    background: #f9df99;\n  }\n\n  .v-native-scroll {\n    li {\n      background: #ffbaba;\n    }\n  }\n\n  [v-swiper] {\n    li {\n      background: #99e0f9;\n    }\n  }\n}"},57634:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r="import React from 'react';\n\nconst Default = function () {\n  return (\n    <div style={{display:'flex','alignItems':\"center\",'justifyContent':'center'}}><iframe width={600} height={700} src='https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684218876602%2F&title=Exposure&desc=%E6%9B%9D%E5%85%89%E7%9B%91%E5%90%AC&media=vConsole#/exposure'></iframe> </div>\n  );\n};\n\nexport default Default;\n"}}]);