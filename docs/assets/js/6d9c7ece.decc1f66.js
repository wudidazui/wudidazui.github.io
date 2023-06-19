"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9642],{62327:(e,n,t)=>{t.d(n,{Z:()=>y});var a,r=t(27378),l=t(50353),o=t(33337),s=t(39798),i=t(33099),u=(t(85920),t(94322));function m(e){let{language:n,replace:t,section:a,source:l,metastring:o}=e;const s=function(e,n){void 0===n&&(n={});const{section:t,replace:a}=n;let r;r="object"==typeof e&&"default"in e?e.default:e;if(t){const e=new RegExp(`// <${t}>\\s([\\s\\S]*?)\\s// </${t}>\\s`,"g");r=r.split(e).reduce(((e,n,t)=>t%2==0?e:`${e}\n\n${n}`),"")}if(r=r.replace(/\/\/ <.*?\n/g,""),a)for(const[l,o]of Object.entries(a))r=r.replace(new RegExp(l,"gs"),o);r=r.trim(),r.includes("\n")||(r+="\n");return r}(l,{replace:t,section:a});return r.createElement(u.Z.pre,null,r.createElement(u.Z.code,{children:s,className:`language-${n}`,mdxType:"code",originalType:"code",parentName:"pre",metastring:o}))}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p.apply(this,arguments)}const c=e=>{let{title:n,titleId:t,...l}=e;return r.createElement("svg",p({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":t},l),n?r.createElement("title",{id:t},n):null,a||(a=r.createElement("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688Z"})))};var d;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)}const g=e=>{let{title:n,titleId:t,...a}=e;return r.createElement("svg",v({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":t},a),n?r.createElement("title",{id:t},n):null,d||(d=r.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Z"})))};const f={playgroundContainer:"rbac-theme-playground__playgroundContainer",playgroundContent:"rbac-theme-playground__playgroundContent",playgroundIDE:"rbac-theme-playground__playgroundIDE",playgroundIde:"rbac-theme-playground__playgroundIDE",codeBoxActions:"rbac-theme-playground__codeBoxActions",svgIcon:"rbac-theme-playground__svgIcon"};function y(e){let{fileList:n,demoList:t,sourceUrl:a,children:u}=e;const[p,d]=(0,r.useState)(!1),v=()=>d((e=>!e)),{siteConfig:{customFields:y={}}={}}=(0,l.Z)(),{demoSourceUrl:b="",codeSandboxPacakgeConfig:E}=y;return console.log(n,a,u),r.createElement(i.Z,null,(()=>r.createElement("div",{className:f.playgroundContainer},r.createElement("div",{className:f.playgroundContent},u),r.createElement("div",{className:f.codeBoxActions},p&&r.createElement("span",{className:f.svgIcon,onClick:v},r.createElement(c,null)),!p&&r.createElement("span",{className:f.svgIcon,onClick:v},r.createElement(g,null))),p&&t?.length>0&&r.createElement("div",{className:f.playgroundIDE},1===t.length&&r.createElement(m,{language:t[0].fileSuffix,source:t[0].fileContent}),t.length>1&&r.createElement(o.Z,{defaultValue:"0",values:t.map(((e,n)=>{let{fileName:t,fileSuffix:a}=e;return{label:`${t}.${a}`,value:String(n)}}))},t.map(((e,n)=>{let{fileName:t,fileContent:a,fileSuffix:l}=e;const o=`${t}.${l}`;return r.createElement(s.Z,{value:String(n),key:o},r.createElement(m,{language:l,source:a}))})))))))}},99412:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(27378),r=t(13099);const l={propsTable:"propsTable_NZ7r"};function o(e){const{data:n}=e,t=(0,a.useMemo)((()=>(0,r.ZP)({createElement:a.createElement})),[]);return n?.props?a.createElement("div",{className:l.propsTable},a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{align:"left"},"\u53c2\u6570"),a.createElement("th",{align:"left"},"\u7c7b\u578b"),a.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),a.createElement("tbody",null,Object.keys(n.props||{}).map((e=>{const{required:r,description:o,tsType:s,defaultValue:i}=n.props[e],u="string"==typeof o?t(o).tree:o;return a.createElement(a.Fragment,{key:e},a.createElement("tr",null,a.createElement("td",{className:l.paramsColumn,align:"left",rowSpan:2},a.createElement("b",null,e),!r&&"?"),a.createElement("td",{className:l.typeColumn,align:"left"},s?.raw||s?.name||"-"),a.createElement("td",{className:l.defaultColumn,align:"left"},i?.value||"-")),a.createElement("tr",null,a.createElement("td",{className:l.descColumn,align:"left",colSpan:2},u||"-")))}))))):null}const s=(0,a.memo)(o)},51143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var a=t(25773),r=t(27378),l=t(35318),o=t(99412),s=t(62327);const i=function(){return r.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.createElement("iframe",{width:600,height:700,src:"https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684218876602%2F&title=Input&desc=%E8%BE%93%E5%85%A5%E6%A1%86%EF%BC%9A%E6%96%87%E6%9C%AC#/input"})," ")},u={sidebar_position:1},m=void 0,p={unversionedId:"Input/Input",id:"Input/Input",title:"Input",description:"\u4f7f\u7528",source:"@site/docs/components/Input/Input.mdx",sourceDirName:"Input",slug:"/Input/",permalink:"/components/Input/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"componentsSidebar",previous:{title:"\u8f93\u5165\u6846",permalink:"/components/category/\u8f93\u5165\u6846"},next:{title:"InputBox",permalink:"/components/Input/InputBox"}},c={},d=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"Props",id:"props",level:2}],v={toc:d},g="wrapper";function f(e){let{components:n,...r}=e;return(0,l.kt)(g,(0,a.Z)({},v,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,l.kt)(s.Z,{fileList:[{fileName:"index",fileSuffix:"tsx",fileContent:t(34229)}],demoList:[{fileName:"index",fileSuffix:"tsx",fileContent:t(29112)},{fileName:"models",fileSuffix:"ts",fileContent:t(64059)},{fileName:"style",fileSuffix:"less",fileContent:t(63710)}],sourceUrl:"demo/components/Input/show/index.tsx",mdxType:"Playground"},(0,l.kt)(i,{mdxType:"INDEXCQDRP0ZDW3"})),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)(o.Z,{src:"/Users/wangtao/Documents/JR_Workspace/biz-doc/packages/components/src/Input/index.tsx",showDescriptionOnSummary:!0,data:{description:"",displayName:"Input",methods:[],props:{value:{required:!0,tsType:{name:"string"},description:"\u5fc5\u4f20\uff0c\u8f93\u5165\u6846\u5185\u5bb9,\uff0c\u8bf7\u67e5\u770b\u539f\u539f\u751finput value\u5c5e\u6027"},name:{required:!0,tsType:{name:"string"},description:"\u5fc5\u4f20\uff0cname\u5c5e\u6027\uff0c\u8bf7\u67e5\u770b\u539f\u539f\u751finput name\u5c5e\u6027"},type:{required:!1,tsType:{name:"union",raw:"'text' | 'textarea' | 'tel' | 'password' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'textarea'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"}]},description:"\u975e\u5fc5\u4f20\uff0c\u8f93\u5165\u6846\u7c7b\u578b\uff0c\u8bf7\u67e5\u770b\u539f\u539f\u751finput type\u5c5e\u6027",defaultValue:{value:"\u65e0",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"\u975e\u5fc5\u4f20\uff0c\u662f\u5426\u7981\u7528\u72b6\u6001\uff0c\u9ed8\u8ba4\u4e3a false",defaultValue:{value:"\u65e0",computed:!0}},readonly:{required:!1,tsType:{name:"boolean"},description:"\u975e\u5fc5\u4f20\uff0c\u662f\u5426\u53ea\u8bfb\u72b6\u6001\uff0c\u9ed8\u8ba4\u4e3a false",defaultValue:{value:"\u65e0",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"\u975e\u5fc5\u4f20\uff0c\u81ea\u5b9a\u4e49\u6837\u5f0f\u540d\u79f0",defaultValue:{value:"\u65e0",computed:!0}},label:{required:!1,tsType:{name:"string"},description:"\u975e\u5fc5\u4f20\uff0c\u6587\u672c\u6846\u6807\u8bc6",defaultValue:{value:"\u65e0",computed:!0}},placeholder:{required:!1,tsType:{name:"string"},description:"\u975e\u5fc5\u4f20\uff0c\u6587\u672c\u6846\u9ed8\u8ba4\u5c55\u793a\u6587\u6848",defaultValue:{value:"\u65e0",computed:!0}},maxLength:{required:!1,tsType:{name:"number"},description:"\u975e\u5fc5\u4f20\uff0c\u6700\u5927\u957f\u5ea6",defaultValue:{value:"\u65e0",computed:!0}},onInput:{required:!1,tsType:{name:"signature",type:"function",raw:"(propName: string, value: string, event?: object) => void",signature:{arguments:[{name:"propName",type:{name:"string"}},{name:"value",type:{name:"string"}},{name:"event",type:{name:"object"}}],return:{name:"void"}}},description:"\u975e\u5fc5\u4f20\uff0c\u5728\u7528\u6237\u8fdb\u884c\u8f93\u5165\uff0c\u5143\u7d20\u503c\u53d1\u751f\u6539\u53d8\u65f6\u7acb\u5373\u89e6\u53d1",defaultValue:{value:"\u65e0",computed:!0}},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(propName: string, value: string, event?: object) => void",signature:{arguments:[{name:"propName",type:{name:"string"}},{name:"value",type:{name:"string"}},{name:"event",type:{name:"object"}}],return:{name:"void"}}},description:"\u975e\u5fc5\u4f20\uff0c\u6587\u672c\u6846\u5931\u53bb\u7126\u70b9(onblur)\u65f6\u624d\u4f1a\u89e6\u53d1",defaultValue:{value:"\u65e0",computed:!0}},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(propName: string, value: string, event?: object) => void",signature:{arguments:[{name:"propName",type:{name:"string"}},{name:"value",type:{name:"string"}},{name:"event",type:{name:"object"}}],return:{name:"void"}}},description:"\u975e\u5fc5\u4f20\uff0c\u6587\u672c\u6846\u83b7\u53d6\u7126\u70b9\u65f6\u4f1a\u89e6\u53d1",defaultValue:{value:"\u65e0",computed:!0}},onHelp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"\u975e\u5fc5\u4f20\uff0c\u8f93\u5165\u6846\u540e\u9762\u5e2e\u52a9icon\u7684\u56de\u8c03",defaultValue:{value:"\u65e0",computed:!0}},onCompositionStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.CompositionEvent<TInputElement>) => void",signature:{arguments:[{name:"event",type:{name:"ReactCompositionEvent",raw:"React.CompositionEvent<TInputElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]}}],return:{name:"void"}}},description:"\u975e\u5fc5\u4f20\uff0c\u6587\u672c\u6846 \u7ec4\u5408\u6587\u5b57\u8f93\u5165\u7684\u65f6\u5019onCompositionStart\u89e6\u53d1\uff0c\u4f8b\u5982\u4e2d\u6587\u4e4b\u7c7b\u7684",defaultValue:{value:"\u65e0",computed:!0}},onCompositionEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.CompositionEvent<TInputElement>) => void",signature:{arguments:[{name:"event",type:{name:"ReactCompositionEvent",raw:"React.CompositionEvent<TInputElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]}}],return:{name:"void"}}},description:"\u975e\u5fc5\u4f20\uff0c\u5f53\u6587\u672c\u6bb5\u843d\u7684\u7ec4\u6210\u5b8c\u6210\u6216\u53d6\u6d88\u65f6,  onCompositionEnd\u4e8b\u4ef6\u5c06\u88ab\u89e6\u53d1\uff0c\u4f8b\u5982\u4e2d\u6587\u8f93\u5165\u5b8c\u6210\u65f6",defaultValue:{value:"\u65e0",computed:!0}},errorMsg:{required:!1,tsType:{name:"string"},description:"\u975e\u5fc5\u4f20\uff0c\u63d0\u793aerror\u4fe1\u606f",defaultValue:{value:"\u65e0",computed:!0}},rows:{required:!1,tsType:{name:"number"},description:"\u975e\u5fc5\u4f20\uff0c\u5f53input\u4e3atextarea\u65f6\u8f93\u5165\u6846\u7684\u53ef\u8f93\u5165\u7684\u884c\u6570\uff0c\u9ed8\u8ba4\u4e3a3",defaultValue:{value:"3",computed:!1}},children:{required:!1,tsType:{name:"JSX.Element"},description:"\u975e\u5fc5\u4f20\uff0c\u81ea\u5b9a\u4e49dom\u5b50\u5143\u7d20",defaultValue:{value:"\u65e0",computed:!0}},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'top'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'top'"}]},description:"\u975e\u5fc5\u4f20\uff0clabel\u7684\u4f4d\u7f6e",defaultValue:{value:"'left'",computed:!1}},autoComplete:{required:!1,tsType:{name:"union",raw:"'on' | 'off' | 'one-time-code'",elements:[{name:"literal",value:"'on'"},{name:"literal",value:"'off'"},{name:"literal",value:"'one-time-code'"}]},description:"\u975e\u5fc5\u4f20\uff0c\u6587\u672c\u6846\u5931\u53bb\u7126\u70b9(onblur)\u65f6\u624d\u4f1a\u89e6\u53d1",defaultValue:{value:"\u65e0",computed:!0}},height:{required:!1,tsType:{name:"number"},description:"\u975e\u5fc5\u4f20\uff0c\u6587\u672c\u6846\u7684\u9ad8\u5ea6",defaultValue:{value:"\u65e0",computed:!0}}}},mdxType:"PropsTable"}))}f.isMDXComponent=!0},29112:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a='import { FixedDom, Input } from \'@credit-biz/react\';\nimport { Button, dialogToast } from \'@flatbiz/react\';\nimport { useState } from \'react\';\nimport { models } from \'./models\';\nimport \'./style.less\';\n\nconst DemoInput = () => {\n  const [state, actions] = models.useStore(\'MainModal\');\n\n  const [values, setValues] = useState<{\n    invoiceNumber: string;\n    refundDes: string;\n    invoiceNumber2: string;\n    refundDes2: string;\n    invoiceNumber3: string;\n    refundDes3: string;\n  }>({\n    invoiceNumber: \'\',\n    refundDes: \'\',\n    invoiceNumber2: \'\',\n    refundDes2: \'\',\n    invoiceNumber3: \'\',\n    refundDes3: \'\',\n  });\n  const [errorMsg, setErrorMsg] = useState(\'\');\n  return (\n    <div style={{ background: \'#f9f9f9\' }}>\n      <ul className="demo-tips">\n        <li>\n          <span>1\u3001</span>\n          <p>\u7b80\u6d01\u7248\u7684 Input \u7ec4\u4ef6\uff0c\u63a8\u8350\u4f7f\u7528 @flatbiz/react - Form.Input</p>\n        </li>\n      </ul>\n\n      <div className="box-wrap">\n        <div className="box">\n          <input\n            type="text"\n            value={values.invoiceNumber}\n            onChange={(e) => {\n              console.log(\'a\', e.currentTarget.value.length);\n              setValues({ invoiceNumber: e.currentTarget.value });\n              // void actions.onInputUsername(e.currentTarget.value);\n            }}\n          />\n          <input\n            type="text"\n            value={state.username}\n            onChange={(e) => {\n              console.log(\'xxxx\', e.currentTarget.value);\n              void actions.onInputUsername(e.currentTarget.value);\n            }}\n          />\n\n          {/* FIXME: \u4e2d\u6587\u8f93\u5165\u7f3a\u9677\uff0c\u5f53\u503c\u4f7f\u7528\u6a21\u578b\u5b58\u50a8\u65f6\uff0c\u5b58\u50a8\u5b8c\u83b7\u53d6\u5230\u7684\u503c\u5b9e\u9645\u88ab\u6539\u53d8\uff0c\u5bfc\u81f4\u53ea\u80fd\u8f93\u5165\u4e2d\u6587\u62fc\u97f3\u9996\u5b57\u6bcd */}\n          <Input\n            label="\u59d3\u540d"\n            labelPosition="top"\n            value={state.username}\n            name="name"\n            type="text"\n            placeholder="\u8bf7\u8f93\u5165\u59d3\u540d"\n            maxLength={18}\n            onChange={(_propName, val) => {\n              void actions.onInputUsername(val);\n            }}\n          />\n\n          <Input\n            type="text"\n            label="\u793e\u4f1a\u7edf\u4e00\u4fe1\u7528\u4ee3\u7801"\n            labelPosition="top"\n            name="invoiceNumber3"\n            value={values.invoiceNumber3}\n            placeholder="\u8bf7\u8f93\u5165\u793e\u4f1a\u7edf\u4e00\u4fe1\u7528\u4ee3\u7801"\n            onInput={(propsName, value) => {\n              setValues({ ...values, [propsName]: value });\n            }}\n            errorMsg={errorMsg}\n            onHelp={() => {\n              dialogToast({ message: \'\u63d0\u793a\u6d88\u606fbalabala...\', status: \'warn\' });\n            }}\n          />\n\n          <Input\n            type="textarea"\n            label="\u63cf\u8ff0"\n            labelPosition="top"\n            name="refundDes3"\n            value={values.refundDes3}\n            placeholder="\u8865\u5145\u63cf\u8ff0"\n            maxLength={100}\n            onInput={(propsName, value) => {\n              setValues({ ...values, [propsName]: value });\n            }}\n            errorMsg={errorMsg}\n            onHelp={() => {\n              dialogToast({ message: \'\u63d0\u793a\u6d88\u606fbalabala...\', status: \'warn\' });\n            }}\n          />\n        </div>\n\n        <div className="box">\n          <Input\n            type="text"\n            label="\u793e\u4f1a\u7edf\u4e00\u4fe1\u7528\u4ee3\u7801"\n            name="invoiceNumber2"\n            value={values.invoiceNumber2}\n            placeholder="\u8bf7\u8f93\u5165\u793e\u4f1a\u7edf\u4e00\u4fe1\u7528\u4ee3\u7801"\n            onInput={(propsName, value) => {\n              setValues({ ...values, [propsName]: value });\n            }}\n            errorMsg={errorMsg}\n          />\n\n          <Input\n            type="textarea"\n            label="\u63cf\u8ff0"\n            name="refundDes2"\n            value={values.refundDes2}\n            placeholder="\u8865\u5145\u63cf\u8ff0"\n            maxLength={100}\n            onInput={(propsName, value) => {\n              setValues({ ...values, [propsName]: value });\n            }}\n            errorMsg={errorMsg}\n          />\n        </div>\n\n        <div className="box">\n          <Input\n            type="text"\n            name="invoiceNumber"\n            value={values.invoiceNumber}\n            placeholder="\u8bf7\u8f93\u5165\u793e\u4f1a\u7edf\u4e00\u4fe1\u7528\u4ee3\u7801"\n            onInput={(propsName, value) => {\n              setValues({ ...values, [propsName]: value });\n            }}\n            errorMsg={errorMsg}\n          />\n\n          <Input\n            type="textarea"\n            name="refundDes"\n            value={values.refundDes}\n            placeholder="\u8865\u5145\u63cf\u8ff0"\n            maxLength={100}\n            onInput={(propsName, value) => {\n              setValues({ ...values, [propsName]: value });\n            }}\n            errorMsg={errorMsg}\n          />\n        </div>\n      </div>\n\n      <FixedDom.Wrap height={98} paddings={[30, 30, 30, 30]}>\n        <Button\n          type="primary"\n          onClick={() => {\n            setErrorMsg(errorMsg ? \'\' : \'\u54ce\u5440\uff0c\u8f93\u5165\u4e0d\u6b63\u786e\');\n          }}\n        >\n          Set / Clear Error\n        </Button>\n      </FixedDom.Wrap>\n    </div>\n  );\n};\n\nexport default DemoInput;\n'},64059:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a="import type { ModelType } from '@dimjs/model';\nimport { Model } from '@dimjs/model-react';\n\nexport interface IDoSomethingParam {\n  key1: string;\n  key2?: string;\n}\n\nexport interface ActionsParamsType {\n  onInputUsername: string;\n}\n\nexport interface IState {\n  username: string;\n}\n\nconst MainModal: ModelType<IState, ActionsParamsType> = {\n  actions: {\n    onInputUsername: (username: string) => {\n      return (state) => {\n        state.username = username;\n      };\n    },\n  },\n  state: {\n    username: '',\n  },\n};\n\nexport const models = Model({\n  MainModal,\n});\n"},63710:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a=".box-wrap {\n  .box {\n    padding: 0 0.3rem 0.3rem;\n    background: #fff;\n    margin-bottom: 30px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n}"},34229:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});const a="import React from 'react';\n\nconst Default = function () {\n  return (\n    <div style={{display:'flex','alignItems':\"center\",'justifyContent':'center'}}><iframe width={600} height={700} src='https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684218876602%2F&title=Input&desc=%E8%BE%93%E5%85%A5%E6%A1%86%EF%BC%9A%E6%96%87%E6%9C%AC#/input'></iframe> </div>\n  );\n};\n\nexport default Default;\n"}}]);