"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7808],{62327:(e,t,n)=>{n.d(t,{Z:()=>f});var r,a=n(27378),i=n(50353),s=n(33337),c=n(39798),l=n(33099),o=(n(85920),n(94322));function d(e){let{language:t,replace:n,section:r,source:i,metastring:s}=e;const c=function(e,t){void 0===t&&(t={});const{section:n,replace:r}=t;let a;a="object"==typeof e&&"default"in e?e.default:e;if(n){const e=new RegExp(`// <${n}>\\s([\\s\\S]*?)\\s// </${n}>\\s`,"g");a=a.split(e).reduce(((e,t,n)=>n%2==0?e:`${e}\n\n${t}`),"")}if(a=a.replace(/\/\/ <.*?\n/g,""),r)for(const[i,s]of Object.entries(r))a=a.replace(new RegExp(i,"gs"),s);a=a.trim(),a.includes("\n")||(a+="\n");return a}(i,{replace:n,section:r});return a.createElement(o.Z.pre,null,a.createElement(o.Z.code,{children:c,className:`language-${t}`,mdxType:"code",originalType:"code",parentName:"pre",metastring:s}))}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...i}=e;return a.createElement("svg",m({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":n},i),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688Z"})))};var p;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}const y=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",v({viewBox:"0 0 1024 1024",fill:"currentColor","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,p||(p=a.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798ZM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79L119.947 511.39Z"})))};const g={playgroundContainer:"rbac-theme-playground__playgroundContainer",playgroundContent:"rbac-theme-playground__playgroundContent",playgroundIDE:"rbac-theme-playground__playgroundIDE",playgroundIde:"rbac-theme-playground__playgroundIDE",codeBoxActions:"rbac-theme-playground__codeBoxActions",svgIcon:"rbac-theme-playground__svgIcon"};function f(e){let{fileList:t,demoList:n,sourceUrl:r,children:o}=e;const[m,p]=(0,a.useState)(!1),v=()=>p((e=>!e)),{siteConfig:{customFields:f={}}={}}=(0,i.Z)(),{demoSourceUrl:b="",codeSandboxPacakgeConfig:S}=f;return console.log(t,r,o),a.createElement(l.Z,null,(()=>a.createElement("div",{className:g.playgroundContainer},a.createElement("div",{className:g.playgroundContent},o),a.createElement("div",{className:g.codeBoxActions},m&&a.createElement("span",{className:g.svgIcon,onClick:v},a.createElement(u,null)),!m&&a.createElement("span",{className:g.svgIcon,onClick:v},a.createElement(y,null))),m&&n?.length>0&&a.createElement("div",{className:g.playgroundIDE},1===n.length&&a.createElement(d,{language:n[0].fileSuffix,source:n[0].fileContent}),n.length>1&&a.createElement(s.Z,{defaultValue:"0",values:n.map(((e,t)=>{let{fileName:n,fileSuffix:r}=e;return{label:`${n}.${r}`,value:String(t)}}))},n.map(((e,t)=>{let{fileName:n,fileContent:r,fileSuffix:i}=e;const s=`${n}.${i}`;return a.createElement(c.Z,{value:String(t),key:s},a.createElement(d,{language:i,source:r}))})))))))}},99412:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(27378),a=n(13099);const i={propsTable:"propsTable_NZ7r"};function s(e){const{data:t}=e,n=(0,r.useMemo)((()=>(0,a.ZP)({createElement:r.createElement})),[]);return t?.props?r.createElement("div",{className:i.propsTable},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{align:"left"},"\u53c2\u6570"),r.createElement("th",{align:"left"},"\u7c7b\u578b"),r.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),r.createElement("tbody",null,Object.keys(t.props||{}).map((e=>{const{required:a,description:s,tsType:c,defaultValue:l}=t.props[e],o="string"==typeof s?n(s).tree:s;return r.createElement(r.Fragment,{key:e},r.createElement("tr",null,r.createElement("td",{className:i.paramsColumn,align:"left",rowSpan:2},r.createElement("b",null,e),!a&&"?"),r.createElement("td",{className:i.typeColumn,align:"left"},c?.raw||c?.name||"-"),r.createElement("td",{className:i.defaultColumn,align:"left"},l?.value||"-")),r.createElement("tr",null,r.createElement("td",{className:i.descColumn,align:"left",colSpan:2},o||"-")))}))))):null}const c=(0,r.memo)(s)},4089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var r=n(25773),a=n(27378),i=n(35318),s=n(99412),c=n(62327);const l=function(){return a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},a.createElement("iframe",{width:600,height:700,src:"https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684289192738%2F&title=PopupAddressSelecter&desc=%E5%9C%B0%E5%9D%80%E9%80%89%E6%8B%A9%E5%99%A8#/popup-address-selecter"})," ")},o={},d=void 0,m={unversionedId:"PopupAddressSelecter/PopupAddressSelecter",id:"PopupAddressSelecter/PopupAddressSelecter",title:"PopupAddressSelecter",description:"\u4f7f\u7528",source:"@site/docs/components/PopupAddressSelecter/PopupAddressSelecter.mdx",sourceDirName:"PopupAddressSelecter",slug:"/PopupAddressSelecter/",permalink:"/components/PopupAddressSelecter/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"\u5730\u5740\u9009\u62e9\u5668",permalink:"/components/category/\u5730\u5740\u9009\u62e9\u5668"},next:{title:"\u9519\u8bef\u63d0\u793a\u5f39\u7a97",permalink:"/components/category/\u9519\u8bef\u63d0\u793a\u5f39\u7a97"}},u={},p=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"Props",id:"props",level:2}],v={toc:p},y="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,i.kt)(c.Z,{fileList:[{fileName:"index",fileSuffix:"tsx",fileContent:n(10576)}],demoList:[{fileName:"index",fileSuffix:"tsx",fileContent:n(34021)},{fileName:"china-division-service",fileSuffix:"ts",fileContent:n(67679)}],sourceUrl:"demo/components/PopupAddressSelecter/show/index.tsx",mdxType:"Playground"},(0,i.kt)(l,{mdxType:"INDEXHJ9YKAEBZLF"})),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)(s.Z,{src:"/Users/wangtao/Documents/JR_Workspace/biz-doc/packages/components/src/PopupAddressSelecter/index.tsx",showDescriptionOnSummary:!0,data:{description:"",displayName:"PopupAddressSelecter",methods:[],props:{open:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: {\n\ttitle?: string;\n\tonSelected: (address: {\n\t\tprovince: TabSelectItem;\n\t\tcity: TabSelectItem;\n\t\tdistrict: TabSelectItem;\n\t\tstreet: TabSelectItem;\n\t}) => void;\n\tgetDataSourceItem: (\n\t\tcode: any,\n\t\tselectedItem: any,\n\t\tnextTabLevel: any\n\t) => Promise<TabSelectItem[]>;\n\tforceRender?: boolean;\n\tvalue?: string[];\n}) => void",signature:{arguments:[{name:"props",type:{name:"signature",type:"object",raw:"{\n\ttitle?: string;\n\tonSelected: (address: {\n\t\tprovince: TabSelectItem;\n\t\tcity: TabSelectItem;\n\t\tdistrict: TabSelectItem;\n\t\tstreet: TabSelectItem;\n\t}) => void;\n\tgetDataSourceItem: (\n\t\tcode: any,\n\t\tselectedItem: any,\n\t\tnextTabLevel: any\n\t) => Promise<TabSelectItem[]>;\n\tforceRender?: boolean;\n\tvalue?: string[];\n}",signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"onSelected",value:{name:"signature",type:"function",raw:"(address: {\n\tprovince: TabSelectItem;\n\tcity: TabSelectItem;\n\tdistrict: TabSelectItem;\n\tstreet: TabSelectItem;\n}) => void",signature:{arguments:[{name:"address",type:{name:"signature",type:"object",raw:"{\n\tprovince: TabSelectItem;\n\tcity: TabSelectItem;\n\tdistrict: TabSelectItem;\n\tstreet: TabSelectItem;\n}",signature:{properties:[{key:"province",value:{name:"TabSelectItem",required:!0}},{key:"city",value:{name:"TabSelectItem",required:!0}},{key:"district",value:{name:"TabSelectItem",required:!0}},{key:"street",value:{name:"TabSelectItem",required:!0}}]}}}],return:{name:"void"}},required:!0}},{key:"getDataSourceItem",value:{name:"signature",type:"function",raw:"(\n\tcode: any,\n\tselectedItem: any,\n\tnextTabLevel: any\n) => Promise<TabSelectItem[]>",signature:{arguments:[{name:"code",type:{name:"any"}},{name:"selectedItem",type:{name:"any"}},{name:"nextTabLevel",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"TabSelectItem"}],raw:"TabSelectItem[]"}],raw:"Promise<TabSelectItem[]>"}},required:!0}},{key:"forceRender",value:{name:"boolean",required:!1}},{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}}],return:{name:"void"}}},description:"\u6253\u5f00\u5f39\u6846"},title:{required:!1,tsType:{name:"string"},description:"\u975e\u5fc5\u4f20\uff0c\u6807\u9898",defaultValue:{value:"'\u9009\u62e9\u5730\u533a'",computed:!1}},onSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"(address: {\n  province: TabSelectItem;\n  city: TabSelectItem;\n  district: TabSelectItem;\n  street: TabSelectItem;\n}) => void",signature:{arguments:[{name:"address",type:{name:"signature",type:"object",raw:"{\n  province: TabSelectItem;\n  city: TabSelectItem;\n  district: TabSelectItem;\n  street: TabSelectItem;\n}",signature:{properties:[{key:"province",value:{name:"TabSelectItem",required:!0}},{key:"city",value:{name:"TabSelectItem",required:!0}},{key:"district",value:{name:"TabSelectItem",required:!0}},{key:"street",value:{name:"TabSelectItem",required:!0}}]}}}],return:{name:"void"}}},description:"\u5fc5\u4f20\uff0conSelected\u8868\u793a\u7528\u6237\u9009\u62e9\u884c\u4e3a\uff0c\u9009\u4e2d\u540e\u7684\u56de\u8c03\u3002"},getDataSourceItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(\n\tcode: any,\n\tselectedItem: any,\n\tnextTabLevel: any\n) => Promise<TabSelectItem[]>",signature:{arguments:[{name:"code",type:{name:"any"}},{name:"selectedItem",type:{name:"any"}},{name:"nextTabLevel",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"TabSelectItem"}],raw:"TabSelectItem[]"}],raw:"Promise<TabSelectItem[]>"}}},description:"\u5fc5\u4f20\u4f20\u5165\u7684\u6240\u6709\u7684\u7701\u5e02\u533a\u5217\u8868"},forceRender:{required:!1,tsType:{name:"boolean"},description:"\u975e\u5fc5\u4f20\uff0cforceRender\u4e3atrue\u662f\u70b9\u51fb\u5173\u95eddom\u76f4\u63a5\u4e0d\u4f1a\u5c55\u793a",defaultValue:{value:"\u65e0",computed:!0}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"\u975e\u5fc5\u4f20\uff0c\u9009\u4e2d\u7684\u7701\u5e02\u533a",defaultValue:{value:"\u65e0",computed:!0}},levelNumber:{required:!1,tsType:{name:"number"},description:"\u975e\u5fc5\u4f20\uff0c\u7701\u5e02\u533a\u7684\u5c42\u7ea7\uff0c\u9ed8\u8ba4\u662f\u4e09\u7ea7\u3002",defaultValue:{value:"3",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"\u975e\u5fc5\u4f20\uff0c\u662f\u5426\u5177\u6709loading\u6548\u679c",defaultValue:{value:"\u65e0",computed:!0}},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"\u5173\u95ed\u5f39\u6846"}}},mdxType:"PropsTable"}))}g.isMDXComponent=!0},67679:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r="/* eslint-disable @typescript-eslint/no-var-requires */\nimport { logger } from '@dimjs/logger';\nimport type { TabSelectItem } from '@flatbiz/react';\nconst areas = require('china-division/dist/areas.json');\nconst cities = require('china-division/dist/cities.json');\nconst provinces = require('china-division/dist/provinces.json');\nconst streets = require('china-division/dist/streets.json');\n\nclass ChinaDivisionService {\n  // \u83b7\u53d6\u6240\u6709\u7684\u7701\u4efd\n  queryProvinceList(): TabSelectItem[] {\n    return provinces.map((province) => ({\n      label: province.name,\n      value: String(province.code),\n    }));\n  }\n\n  // \u6839\u636e\u7701\u4efd\uff0c\u83b7\u53d6\u6240\u6709\u7684\u57ce\u5e02\n  queryCityList(provinceCode: string): TabSelectItem[] {\n    const cList =\n      cities.filter((c) => String(c.provinceCode) === provinceCode) || [];\n    return cList.map((city) => ({\n      label: city.name,\n      value: String(city.code),\n    }));\n  }\n\n  // \u6839\u636e\u57ce\u5e02\uff0c\u83b7\u53d6\u6240\u6709\u7684\u5730\u533a\n  queryAreaList(cityCode: string): TabSelectItem[] {\n    const aList =\n      areas.filter((area) => String(area.cityCode) === cityCode) || [];\n    return aList.map((area) => ({\n      label: area.name,\n      value: String(area.code),\n    }));\n  }\n\n  // \u6839\u636e\u5730\u533a\uff0c\u83b7\u53d6\u6240\u6709\u7684\u8857\u9053\n  queryStreetList(areaCode: string): TabSelectItem[] {\n    const sList = streets.filter((s) => String(s.areaCode) === areaCode) || [];\n    return sList.map((street) => ({\n      label: street.name,\n      value: String(street.code),\n    }));\n  }\n\n  // \u6839\u636e\u5730\u5740\u540d\u79f0\uff0c\u67e5\u8be2\u5730\u5740code\n  queryAddressByName(names: string[]) {\n    const provinceName = names[0] || '';\n    const cityName = names[1] || '';\n    const areaName = names[2] || '';\n    const streetName = names[3] || '';\n\n    let province = { label: '', value: '' };\n    let city = { label: '', value: '' };\n    let area = { label: '', value: '' };\n    let street = { label: '', value: '' };\n\n    if (provinceName) {\n      const p = provinces.find((_) => _.name === provinceName) || {};\n      province = {\n        label: p.name,\n        value: p.code,\n      };\n    }\n\n    if (cityName) {\n      const f = (_) => _.provinceCode === province.value && _.name === cityName;\n      const c = cities.find(f) || {};\n      city = {\n        label: c.name,\n        value: c.code,\n      };\n    }\n\n    if (areaName) {\n      const f = (_) => _.cityCode === city.value && _.name === areaName;\n      const a = areas.find(f) || {};\n      area = {\n        label: a.name,\n        value: a.code,\n      };\n    }\n\n    if (streetName) {\n      const f = (_) => _.areaCode === area.value && _.name === streetName;\n      const s = streets.find(f) || {};\n      street = {\n        label: s.name,\n        value: s.code,\n      };\n    }\n\n    return { province, city, area, street };\n  }\n\n  // \u83b7\u53d6\u5730\u5740\u6570\u636e\n  getDataSourceItem = (\n    code,\n    _selectedItem,\n    nextTabLevel\n  ): Promise<TabSelectItem[]> => {\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        const tabIndex = nextTabLevel - 1;\n        switch (tabIndex) {\n          case 0:\n            logger.info('queryProvinceList', 'chinaDivisionService');\n            resolve(chinaDivisionService.queryProvinceList());\n            break;\n          case 1:\n            logger.info('queryCityList', 'chinaDivisionService');\n            resolve(chinaDivisionService.queryCityList(code));\n            break;\n          case 2:\n            logger.info('queryAreaList', 'chinaDivisionService');\n            resolve(chinaDivisionService.queryAreaList(code));\n            break;\n          case 3:\n            logger.info('queryStreetList', 'chinaDivisionService');\n            resolve(chinaDivisionService.queryStreetList(code));\n            break;\n          default:\n            resolve([]);\n            break;\n        }\n      }, 500); // FIXME: \u6a21\u62df\u63a5\u53e3\u5ef6\u8fdf\n    });\n  };\n}\n\nexport const chinaDivisionService = new ChinaDivisionService();\n"},34021:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r="import type { IPopupAddressSelecter } from '@credit-biz/react';\nimport { FixedDom, PopupAddressSelecter } from '@credit-biz/react';\nimport type { PlainObject } from '@dimjs/utils';\nimport { Button } from '@flatbiz/react';\nimport { useEffect, useState } from 'react';\nimport {  StringBlock } from '../../shared/compts';\nimport { chinaDivisionService } from './china-division-service';\n\nconst DemoPopupAddressSelecter = () => {\n  const [addressCodes, setAddressCodes] = useState<string[]>([]);\n  const [content, setContent] = useState<PlainObject>({});\n\n  /**\n   * \u4e2a\u91d1\u5386\u53f2\u9057\u7559\u95ee\u9898\uff1a\n   * \u670d\u52a1\u7aef\u53ea\u5b58\u50a8\u4e86\u4e2d\u6587\u540d\u79f0\uff0c\u6ca1\u6709\u5b58\u50a8\u7701\u5e02\u533aID\uff0c\u6240\u4ee5\u7ec4\u4ef6\u76ee\u524d\u53ea\u652f\u6301\u4e2d\u6587\u540d\u79f0\u5339\u914d\n   */\n  useEffect(() => {\n    const addressCodes = chinaDivisionService.queryAddressByName([\n      '\u4e0a\u6d77\u5e02',\n      '\u5e02\u8f96\u533a',\n      '\u6d66\u4e1c\u65b0\u533a',\n      '\u6d0b\u6cfe\u8857\u9053',\n    ]);\n    setAddressCodes([\n      addressCodes.province.value,\n      addressCodes.city.value,\n      addressCodes.area.value,\n      addressCodes.street.value,\n    ]);\n  }, []);\n\n  // \u53ef\u8ffd\u52a0\u81ea\u5b9a\u4e49\u7684\u8fc7\u6ee4\u51fd\u6570\n  // const myCustomProvinceFilter = (provinceList: TabSelectItem[]) => {\n  //   return provinceList;\n  // };\n\n  const onSelected: IPopupAddressSelecter['onSelected'] = ({\n    province,\n    city,\n    district,\n    street,\n  }) => {\n    setAddressCodes([\n      String(province.value),\n      String(city.value),\n      String(district.value),\n      String(street.value),\n    ]);\n\n    setContent({ province, city, district, street });\n  };\n\n  return (\n    <>\n      <ul className=\"demo-tips\">\n        <li>\n          <span>1\u3001</span>\n          <p>\u7701\u5e02\u533a\u6570\u636e\u7531 china-division \u6a21\u5757\u63d0\u4f9b</p>\n        </li>\n      </ul>\n      {content ? <StringBlock title=\"\u62a5\u6587\">{content}</StringBlock> : null}\n      <br />\n\n      <FixedDom.Wrap height={98} paddings={[30, 30, 30, 30]}>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            PopupAddressSelecter.open({\n              title: '\u8bf7\u9009\u62e9\u5bb6\u5ead\u5730\u5740\u533a\u57df',\n              value: addressCodes,\n              getDataSourceItem: chinaDivisionService.getDataSourceItem,\n              onSelected,\n            });\n          }}\n        >\n          Open\n        </Button>\n      </FixedDom.Wrap>\n    </>\n  );\n};\n\nexport default DemoPopupAddressSelecter;\n"},10576:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r="import React from 'react';\n\nconst Default = function () {\n  return (\n    <div style={{display:'flex','alignItems':\"center\",'justifyContent':'center'}}><iframe width={600} height={700} src='https://jr-uat.ly.com/webapps/credit-biz-demo/react/index-dev.html?env=uat&t=1684289192738%2F&title=PopupAddressSelecter&desc=%E5%9C%B0%E5%9D%80%E9%80%89%E6%8B%A9%E5%99%A8#/popup-address-selecter'></iframe> </div>\n  );\n};\n\nexport default Default;\n"}}]);