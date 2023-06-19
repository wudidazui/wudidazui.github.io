"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3723],{62327:(e,t,n)=>{n.d(t,{Z:()=>E});var a,i=n(27378),l=n(50353),s=n(33337),r=n(39798),o=n(33099),c=(n(85920),n(94322));function m(e){let{language:t,replace:n,section:a,source:l,metastring:s}=e;const r=function(e,t){void 0===t&&(t={});const{section:n,replace:a}=t;let i;i="object"==typeof e&&"default"in e?e.default:e;if(n){const e=new RegExp(`// <${n}>\\s([\\s\\S]*?)\\s// </${n}>\\s`,"g");i=i.split(e).reduce(((e,t,n)=>n%2==0?e:`${e}\n\n${t}`),"")}if(i=i.replace(/\/\/ <.*?\n/g,""),a)for(const[l,s]of Object.entries(a))i=i.replace(new RegExp(l,"gs"),s);i=i.trim(),i.includes("\n")||(i+="\n");return i}(l,{replace:n,section:a});return i.createElement(c.Z.pre,null,i.createElement(c.Z.code,{children:r,className:`language-${t}`,mdxType:"code",originalType:"code",parentName:"pre",metastring:s}))}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...l}=e;return i.createElement("svg",d({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":n},l),t?i.createElement("title",{id:n},t):null,a||(a=i.createElement("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688Z"})))};var p;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}const f=e=>{let{title:t,titleId:n,...a}=e;return i.createElement("svg",g({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,p||(p=i.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Z"})))};const h={playgroundContainer:"rbac-theme-playground__playgroundContainer",playgroundContent:"rbac-theme-playground__playgroundContent",playgroundIDE:"rbac-theme-playground__playgroundIDE",playgroundIde:"rbac-theme-playground__playgroundIDE",codeBoxActions:"rbac-theme-playground__codeBoxActions",svgIcon:"rbac-theme-playground__svgIcon"};function E(e){let{fileList:t,demoList:n,sourceUrl:a,children:c}=e;const[d,p]=(0,i.useState)(!1),g=()=>p((e=>!e)),{siteConfig:{customFields:E={}}={}}=(0,l.Z)(),{demoSourceUrl:y="",codeSandboxPacakgeConfig:C}=E;return console.log(t,a,c),i.createElement(o.Z,null,(()=>i.createElement("div",{className:h.playgroundContainer},i.createElement("div",{className:h.playgroundContent},c),i.createElement("div",{className:h.codeBoxActions},d&&i.createElement("span",{className:h.svgIcon,onClick:g},i.createElement(u,null)),!d&&i.createElement("span",{className:h.svgIcon,onClick:g},i.createElement(f,null))),d&&n?.length>0&&i.createElement("div",{className:h.playgroundIDE},1===n.length&&i.createElement(m,{language:n[0].fileSuffix,source:n[0].fileContent}),n.length>1&&i.createElement(s.Z,{defaultValue:"0",values:n.map(((e,t)=>{let{fileName:n,fileSuffix:a}=e;return{label:`${n}.${a}`,value:String(t)}}))},n.map(((e,t)=>{let{fileName:n,fileContent:a,fileSuffix:l}=e;const s=`${n}.${l}`;return i.createElement(r.Z,{value:String(t),key:s},i.createElement(m,{language:l,source:a}))})))))))}},99412:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378),i=n(13099);const l={propsTable:"propsTable_NZ7r"};function s(e){const{data:t}=e,n=(0,a.useMemo)((()=>(0,i.ZP)({createElement:a.createElement})),[]);return t?.props?a.createElement("div",{className:l.propsTable},a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{align:"left"},"\u53c2\u6570"),a.createElement("th",{align:"left"},"\u7c7b\u578b"),a.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),a.createElement("tbody",null,Object.keys(t.props||{}).map((e=>{const{required:i,description:s,tsType:r,defaultValue:o}=t.props[e],c="string"==typeof s?n(s).tree:s;return a.createElement(a.Fragment,{key:e},a.createElement("tr",null,a.createElement("td",{className:l.paramsColumn,align:"left",rowSpan:2},a.createElement("b",null,e),!i&&"?"),a.createElement("td",{className:l.typeColumn,align:"left"},r?.raw||r?.name||"-"),a.createElement("td",{className:l.defaultColumn,align:"left"},o?.value||"-")),a.createElement("tr",null,a.createElement("td",{className:l.descColumn,align:"left",colSpan:2},c||"-")))}))))):null}const r=(0,a.memo)(s)},15139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=n(25773),i=n(27378),l=n(35318),s=n(99412),r=n(62327);const o=function(){return i.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.createElement("iframe",{width:600,height:700,src:"https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684218876602%2F&title=CssHeightAnimation&desc=CSS%E5%8A%A8%E7%94%BB%E5%AE%B9%E5%99%A8#/css-height-animation"})," ")},c={},m=void 0,d={unversionedId:"CssHeightAnimation/CssHeightAnimation",id:"CssHeightAnimation/CssHeightAnimation",title:"CssHeightAnimation",description:"\u4f7f\u7528",source:"@site/docs/components/CssHeightAnimation/CssHeightAnimation.mdx",sourceDirName:"CssHeightAnimation",slug:"/CssHeightAnimation/",permalink:"/components/CssHeightAnimation/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"\u9ad8\u5ea6\u52a8\u753b",permalink:"/components/category/\u9ad8\u5ea6\u52a8\u753b"},next:{title:"\u66dd\u5149\u76d1\u542c",permalink:"/components/category/\u66dd\u5149\u76d1\u542c"}},u={},p=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"Props",id:"props",level:2}],g={toc:p},f="wrapper";function h(e){let{components:t,...i}=e;return(0,l.kt)(f,(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,l.kt)(r.Z,{fileList:[{fileName:"index",fileSuffix:"tsx",fileContent:n(44324)}],demoList:[{fileName:"index",fileSuffix:"tsx",fileContent:n(75033)},{fileName:"style",fileSuffix:"less",fileContent:n(96529)}],sourceUrl:"demo/components/CssHeightAnimation/show/index.tsx",mdxType:"Playground"},(0,l.kt)(o,{mdxType:"INDEXJNFQE20QBFC"})),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)(s.Z,{src:"/Users/wangtao/Documents/JR_Workspace/biz-doc/packages/components/src/CssHeightAnimation/index.tsx",showDescriptionOnSummary:!0,data:{description:"",displayName:"CssHeightAnimation",methods:[],props:{height:{required:!0,tsType:{name:"number"},description:"\u5fc5\u4f20\uff0c\u9ad8\u5ea6\uff0c\u53ef\u52a8\u6001\u8bbe\u7f6e\u9ad8\u5ea6\uff0c\u4f1a\u6709\u52a8\u753b\u6548\u679c"},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[] | null",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},{name:"null"}]},description:"\u5fc5\u4f20\uff0c\u81ea\u5b9a\u4e49\u5b50\u5143\u7d20dom"},className:{required:!1,tsType:{name:"string"},description:"\u975e\u5fc5\u4f20\uff0c\u81ea\u5b9a\u4e49\u6837\u5f0f\u540d\u79f0",defaultValue:{value:"\u65e0",computed:!0}}}},mdxType:"PropsTable"}))}h.isMDXComponent=!0},75033:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a='import { Skeleton, CssHeightAnimation } from \'@credit-biz/react\';\nimport { useEffectCustom } from \'@flatbiz/react\';\nimport { useState } from \'react\';\nimport \'./style.less\';\n\nconst DemoCssHeightAnimation = () => {\n  const [isRender1, setIsrender1] = useState(false);\n  const [isRender2, setIsrender2] = useState(false);\n  const [isRender3, setIsrender3] = useState(false);\n\n  useEffectCustom(() => {\n    setTimeout(() => {\n      setIsrender1(true);\n    }, 1000);\n\n    setTimeout(() => {\n      setIsrender2(true);\n    }, 2000);\n\n    setTimeout(() => {\n      setIsrender3(true);\n    }, 3000);\n  }, []);\n\n  return (\n    <div className="demo-css-height-animation">\n      <br />\n\n      <CssHeightAnimation height={isRender2 ? 300 : 0}>\n        <img src="http://dummyimage.com/710x300/F9DF99" alt="" />\n      </CssHeightAnimation>\n\n      <CssHeightAnimation height={isRender1 ? 100 : 0}>\n        <img src="http://dummyimage.com/710x100/249d87" alt="" />\n      </CssHeightAnimation>\n\n      <Skeleton lineCount={2} />\n\n      <CssHeightAnimation height={isRender3 ? 200 : 0}>\n        <img src="http://dummyimage.com/710x200/F9DF99" alt="" />\n      </CssHeightAnimation>\n\n      <Skeleton lineCount={5} />\n    </div>\n  );\n};\n\nexport default DemoCssHeightAnimation;\n'},96529:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=".demo-css-height-animation {\n  img {\n    width: 100%;\n  }\n\n  .css-height-animation {\n    margin-bottom: 10px;\n  }\n}"},44324:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a="import React from 'react';\n\nconst Default = function () {\n  return (\n    <div style={{display:'flex','alignItems':\"center\",'justifyContent':'center'}}><iframe width={600} height={700} src='https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684218876602%2F&title=CssHeightAnimation&desc=CSS%E5%8A%A8%E7%94%BB%E5%AE%B9%E5%99%A8#/css-height-animation'></iframe> </div>\n  );\n};\n\nexport default Default;\n"}}]);