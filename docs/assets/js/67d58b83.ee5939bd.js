"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2631],{62327:(n,e,t)=>{t.d(e,{Z:()=>k});var i,a=t(27378),r=t(50353),p=t(33337),o=t(39798),l=t(33099),c=(t(85920),t(94322));function m(n){let{language:e,replace:t,section:i,source:r,metastring:p}=n;const o=function(n,e){void 0===e&&(e={});const{section:t,replace:i}=e;let a;a="object"==typeof n&&"default"in n?n.default:n;if(t){const n=new RegExp(`// <${t}>\\s([\\s\\S]*?)\\s// </${t}>\\s`,"g");a=a.split(n).reduce(((n,e,t)=>t%2==0?n:`${n}\n\n${e}`),"")}if(a=a.replace(/\/\/ <.*?\n/g,""),i)for(const[r,p]of Object.entries(i))a=a.replace(new RegExp(r,"gs"),p);a=a.trim(),a.includes("\n")||(a+="\n");return a}(r,{replace:t,section:i});return a.createElement(c.Z.pre,null,a.createElement(c.Z.code,{children:o,className:`language-${e}`,mdxType:"code",originalType:"code",parentName:"pre",metastring:p}))}function u(){return u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},u.apply(this,arguments)}const s=n=>{let{title:e,titleId:t,...r}=n;return a.createElement("svg",u({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,i||(i=a.createElement("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688Z"})))};var d;function b(){return b=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},b.apply(this,arguments)}const y=n=>{let{title:e,titleId:t,...i}=n;return a.createElement("svg",b({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":t},i),e?a.createElement("title",{id:t},e):null,d||(d=a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Z"})))};const g={playgroundContainer:"rbac-theme-playground__playgroundContainer",playgroundContent:"rbac-theme-playground__playgroundContent",playgroundIDE:"rbac-theme-playground__playgroundIDE",playgroundIde:"rbac-theme-playground__playgroundIDE",codeBoxActions:"rbac-theme-playground__codeBoxActions",svgIcon:"rbac-theme-playground__svgIcon"};function k(n){let{fileList:e,demoList:t,sourceUrl:i,children:c}=n;const[u,d]=(0,a.useState)(!1),b=()=>d((n=>!n)),{siteConfig:{customFields:k={}}={}}=(0,r.Z)(),{demoSourceUrl:f="",codeSandboxPacakgeConfig:h}=k;return console.log(e,i,c),a.createElement(l.Z,null,(()=>a.createElement("div",{className:g.playgroundContainer},a.createElement("div",{className:g.playgroundContent},c),a.createElement("div",{className:g.codeBoxActions},u&&a.createElement("span",{className:g.svgIcon,onClick:b},a.createElement(s,null)),!u&&a.createElement("span",{className:g.svgIcon,onClick:b},a.createElement(y,null))),u&&t?.length>0&&a.createElement("div",{className:g.playgroundIDE},1===t.length&&a.createElement(m,{language:t[0].fileSuffix,source:t[0].fileContent}),t.length>1&&a.createElement(p.Z,{defaultValue:"0",values:t.map(((n,e)=>{let{fileName:t,fileSuffix:i}=n;return{label:`${t}.${i}`,value:String(e)}}))},t.map(((n,e)=>{let{fileName:t,fileContent:i,fileSuffix:r}=n;const p=`${t}.${r}`;return a.createElement(o.Z,{value:String(e),key:p},a.createElement(m,{language:r,source:i}))})))))))}},99412:(n,e,t)=>{t.d(e,{Z:()=>o});var i=t(27378),a=t(13099);const r={propsTable:"propsTable_NZ7r"};function p(n){const{data:e}=n,t=(0,i.useMemo)((()=>(0,a.ZP)({createElement:i.createElement})),[]);return e?.props?i.createElement("div",{className:r.propsTable},i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",{align:"left"},"\u53c2\u6570"),i.createElement("th",{align:"left"},"\u7c7b\u578b"),i.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),i.createElement("tbody",null,Object.keys(e.props||{}).map((n=>{const{required:a,description:p,tsType:o,defaultValue:l}=e.props[n],c="string"==typeof p?t(p).tree:p;return i.createElement(i.Fragment,{key:n},i.createElement("tr",null,i.createElement("td",{className:r.paramsColumn,align:"left",rowSpan:2},i.createElement("b",null,n),!a&&"?"),i.createElement("td",{className:r.typeColumn,align:"left"},o?.raw||o?.name||"-"),i.createElement("td",{className:r.defaultColumn,align:"left"},l?.value||"-")),i.createElement("tr",null,i.createElement("td",{className:r.descColumn,align:"left",colSpan:2},c||"-")))}))))):null}const o=(0,i.memo)(p)},2913:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var i=t(25773),a=t(27378),r=t(35318),p=t(99412),o=t(62327);const l=function(){return a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},a.createElement("iframe",{width:600,height:700,src:"https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684310245896%2F&title=PopupSupportBank&desc=%E9%93%B6%E8%A1%8C%E5%8D%A1%E6%94%AF%E6%8C%81%E5%BC%B9%E7%AA%97#/popup-support-bank"})," ")},c={},m=void 0,u={unversionedId:"PopupSupportBank/PopupSupportBank",id:"PopupSupportBank/PopupSupportBank",title:"PopupSupportBank",description:"\u4f7f\u7528",source:"@site/docs/components/PopupSupportBank/PopupSupportBank.mdx",sourceDirName:"PopupSupportBank",slug:"/PopupSupportBank/",permalink:"/components/PopupSupportBank/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"\u94f6\u884c\u5361\u652f\u6301\u5f39\u7a97",permalink:"/components/category/\u94f6\u884c\u5361\u652f\u6301\u5f39\u7a97"},next:{title:"PDF\u6587\u4ef6\u9884\u89c8",permalink:"/components/category/pdf\u6587\u4ef6\u9884\u89c8"}},s={},d=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"Props",id:"props",level:2}],b={toc:d},y="wrapper";function g(n){let{components:e,...a}=n;return(0,r.kt)(y,(0,i.Z)({},b,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,r.kt)(o.Z,{fileList:[{fileName:"index",fileSuffix:"tsx",fileContent:t(94125)}],demoList:[{fileName:"index",fileSuffix:"tsx",fileContent:t(24933)},{fileName:"service",fileSuffix:"ts",fileContent:t(97084)}],sourceUrl:"demo/components/PopupSupportBank/show/index.tsx",mdxType:"Playground"},(0,r.kt)(l,{mdxType:"INDEXVRLFNJ5TFYH"})),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(p.Z,{src:"/Users/wangtao/Documents/JR_Workspace/biz-doc/packages/components/src/PopupSupportBank/index.tsx",showDescriptionOnSummary:!0,data:{description:"",displayName:"PopupSupportBank",methods:[],props:{open:{required:!0,tsType:{name:"signature",type:"function",raw:"(props?: {\n  options,\n  renderItem,\n  hasCancel,\n  height,\n  fixedCancel,\n  isGroup,\n  className\n}) => void",signature:{arguments:[{name:"props",type:{name:"signature",type:"object",raw:"{\n  options,\n  renderItem,\n  hasCancel,\n  height,\n  fixedCancel,\n  isGroup,\n  className\n}",signature:{properties:[{key:"options",value:{name:"unknown",required:!0}},{key:"renderItem",value:{name:"unknown",required:!0}},{key:"hasCancel",value:{name:"unknown",required:!0}},{key:"height",value:{name:"unknown",required:!0}},{key:"fixedCancel",value:{name:"unknown",required:!0}},{key:"isGroup",value:{name:"unknown",required:!0}},{key:"className",value:{name:"unknown",required:!0}}]}}}],return:{name:"void"}}},description:"\u6253\u5f00\u652f\u6301\u94f6\u884c\u5361\u5f39\u6846"},options:{required:!1,tsType:{name:"Array",elements:[{name:"ISupportBankItem"}],raw:"ISupportBankItem[]"},description:"\u5fc5\u4f20\uff0c \u652f\u6301\u94f6\u884c\u5361\u5217\u8868\uff0c\u5177\u4f53\u53ef\u901a\u8fc7 import type { ISupportBankItem } from '@credit-biz/types'; \u67e5\u770b",defaultValue:{value:"\u65e0",computed:!0}},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item, index, groupIndex?) => string | JSX.Element",signature:{arguments:[{name:"item"},{name:"index"},{name:"groupIndex"}],return:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]}}},description:"\u975e\u5fc5\u4f20\uff0c\u81ea\u5b9a\u4e49\u6e32\u67d3\u94f6\u884c\u5217\u8868\u7684\u6bcf\u4e00\u9879",defaultValue:{value:"(item: ISupportBankOption, index, groupIndex?) => (\n  <div\n    style={{ backgroundImage: `url(${item.icon || ''})` }}\n    key={`popup_support_bank_item_${String(groupIndex || 0)}_${String(\n      index\n    )}`}\n  >\n    <strong>{item.title}</strong>\n    <p>{item.subTitle}</p>\n  </div>\n)",computed:!1}},hasCancel:{required:!1,tsType:{name:"boolean"},description:"\u975e\u5fc5\u4f20\uff0c\u662f\u5426\u663e\u793a\u5173\u95ed\u5f39\u6846\u6309\u94ae",defaultValue:{value:"true",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"\u975e\u5fc5\u4f20\uff0c\u9ad8\u5ea6",defaultValue:{value:"parseFloat(dpiPX2px(getElemHeight())) - closeHeight * 2",computed:!1}},fixedCancel:{required:!1,tsType:{name:"boolean"},description:"\u975e\u5fc5\u4f20\uff0c\u5173\u95ed\u5f39\u6846\u6309\u94ae\u662f\u5426fixed\u5728\u5e95\u90e8",defaultValue:{value:"true",computed:!1}},isGroup:{required:!1,tsType:{name:"boolean"},description:"\u975e\u5fc5\u4f20\uff0c\u662f\u5426\u8fdb\u884c\u5206\u7ec4\uff0c\u9ed8\u8ba4\u662ftrue",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"boolean"},description:"\u975e \u5fc5\u4f20\uff0cclassName\u6837\u5f0f\u540d",defaultValue:{value:"''",computed:!1}},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"\u5173\u95ed\u652f\u6301\u94f6\u884c\u5361\u5f39\u6846"}}},mdxType:"PropsTable"}))}g.isMDXComponent=!0},24933:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});const i="import { FixedDom, PopupSupportBank } from '@credit-biz/react';\nimport type { ISupportBankItem } from '@credit-biz/types';\nimport { Button } from '@flatbiz/react';\nimport { useState } from 'react';\nimport { supportBanks } from './service';\n\nconst DemoPopupSupportBank = () => {\n  const [mySupportBanks] = useState<ISupportBankItem[]>(supportBanks);\n\n  // \u4ece\u63a5\u53e3\u4e2d\u83b7\u53d6\u6570\u636e\n  // useEffectCustomAsync(async () => {\n  //   const res = await commonUniontermService.getSupportBanks();\n  //   setMySupportBanks(res);\n  // }, []);\n\n  return (\n    <>\n      <ul className=\"demo-tips\">\n        <li>\n          <span>1\u3001</span>\n          <p>\u9700\u8981\u8bf7\u6c42\u63a5\u53e3\u83b7\u53d6\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u8f6c\u6362\u6210\u62fc\u97f3\u9996\u5b57\u6bcd\u5206\u7ec4</p>\n        </li>\n        <li>\n          <span>2\u3001</span>\n          <p>\n            \u8bf7\u4f7f\u7528@credit-biz/servics\u4e2d\u7684 commonUniontermService.getSupportBanks\n            \u6765\u83b7\u53d6\u6570\u636e\n          </p>\n        </li>\n      </ul>\n\n      <FixedDom.Wrap height={98} paddings={[30, 30, 30, 30]}>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            PopupSupportBank.open({\n              options: mySupportBanks,\n              isGroup: true,\n            });\n          }}\n        >\n          Open\n        </Button>\n      </FixedDom.Wrap>\n    </>\n  );\n};\n\nexport default DemoPopupSupportBank;\n"},97084:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});const i="import { getBankIcon } from '@credit-biz/utils';\nimport { numberPrecision, price } from '@dimjs/utils';\n\nconst pinyin = require('js-pinyin');\n\nexport const supportBanks = [\n  {\n    bankCode: 'HSBC',\n    bankName: '\u6c47\u4e30\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 500,\n    dailyTxnLimit: 500,\n    monthLimitAmt: 500,\n    pinYin: 'H',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/abc.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'BCCB',\n    bankName: '\u5317\u4eac\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 500000,\n    dailyTxnLimit: 500000,\n    monthLimitAmt: 500000,\n    pinYin: 'B',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/bccb.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'BCOM',\n    bankName: '\u4ea4\u901a\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 5000,\n    dailyTxnLimit: 100000,\n    monthLimitAmt: 5000000,\n    pinYin: 'J',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/bcom.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'BOC',\n    bankName: '\u4e2d\u56fd\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 500000,\n    dailyTxnLimit: 500000,\n    monthLimitAmt: 500000,\n    pinYin: 'Z',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/boc.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'CCB',\n    bankName: '\u4e2d\u56fd\u5efa\u8bbe\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 2000000,\n    dailyTxnLimit: 10000000,\n    monthLimitAmt: 50000000,\n    pinYin: 'J',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/ccb.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'CEB',\n    bankName: '\u5149\u5927\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 5000000,\n    dailyTxnLimit: 5000000,\n    monthLimitAmt: 5000000,\n    pinYin: 'G',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/ceb.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'CIB',\n    bankName: '\u5174\u4e1a\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 5000000,\n    dailyTxnLimit: 5000000,\n    monthLimitAmt: 5000000,\n    pinYin: 'X',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/cib.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'CITIC',\n    bankName: '\u4e2d\u4fe1\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 5000000,\n    dailyTxnLimit: 5000000,\n    monthLimitAmt: 5000000,\n    pinYin: 'Z',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/citic.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'CMBC',\n    bankName: '\u6c11\u751f\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 5000000,\n    dailyTxnLimit: 5000000,\n    monthLimitAmt: 5000000,\n    pinYin: 'M',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/cmbc.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'CMB',\n    bankName: '\u62db\u5546\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 50000000,\n    dailyTxnLimit: 50000000,\n    monthLimitAmt: 50000000,\n    pinYin: 'Z',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/cmb.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'GDB',\n    bankName: '\u5e7f\u53d1\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 5000000,\n    dailyTxnLimit: 5000000,\n    monthLimitAmt: 5000000,\n    pinYin: 'G',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/gdb.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'HXB',\n    bankName: '\u534e\u590f\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 2000000,\n    dailyTxnLimit: 5000000,\n    monthLimitAmt: 5000000,\n    pinYin: 'H',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/hxb.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'ICBC',\n    bankName: '\u5de5\u5546\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 500000,\n    dailyTxnLimit: 500000,\n    monthLimitAmt: 500000,\n    pinYin: 'G',\n    icon: 'https://css.40017.cn/jinrong/files/i/finance/hybrid/bank/ICBC.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'POST',\n    bankName: '\u90ae\u653f\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 5000000,\n    dailyTxnLimit: 5000000,\n    monthLimitAmt: 5000000,\n    pinYin: 'Y',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/post.png',\n    busType: 'ZF',\n  },\n  {\n    bankCode: 'SPDB',\n    bankName: '\u6d66\u53d1\u94f6\u884c',\n    cardType: 'D',\n    perTxnLimit: 10000000,\n    dailyTxnLimit: 25000000,\n    monthLimitAmt: 100000000,\n    pinYin: 'P',\n    icon: 'http://tcw-public.b0.upaiyun.com/bank/spdb.png',\n    busType: 'ZF',\n  },\n];\n\nsupportBanks.forEach((item) => {\n  item['bankPinYin'] = pinyin.getFullChars(item.bankName);\n\n  const { bankCode = '', perTxnLimit = 0, dailyTxnLimit = 0 } = item;\n  const singleLimit = price(numberPrecision.divide(perTxnLimit, 10000), {\n    precision: perTxnLimit % 10000 === 0 ? 0 : 2,\n    symbol: '',\n  }).format();\n  const dailyLimit = price(numberPrecision.divide(dailyTxnLimit, 10000), {\n    precision: dailyTxnLimit % 10000 === 0 ? 0 : 2,\n    symbol: '',\n  }).format();\n  item.icon = getBankIcon(String(bankCode).toLocaleLowerCase());\n  item[\n    'subTitle'\n  ] = `\u5355\u7b14\u9650\u989d\uff1a${singleLimit}\u4e07\u5143 , \u5355\u65e5\u9650\u989d\uff1a${dailyLimit}\u4e07\u5143`;\n  item['group'] = (item['bankPinYin'] || '').substring(0, 1).toUpperCase();\n  item['title'] = item['bankName'];\n});\n"},94125:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});const i="import React from 'react';\n\nconst Default = function () {\n  return (\n    <div style={{display:'flex','alignItems':\"center\",'justifyContent':'center'}}><iframe width={600} height={700} src='https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684310245896%2F&title=PopupSupportBank&desc=%E9%93%B6%E8%A1%8C%E5%8D%A1%E6%94%AF%E6%8C%81%E5%BC%B9%E7%AA%97#/popup-support-bank'></iframe> </div>\n  );\n};\n\nexport default Default;\n"}}]);