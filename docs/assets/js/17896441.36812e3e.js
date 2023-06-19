"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7918],{1271:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(5773),l=a(7378),r=a(8944),s=a(5161),o=a(8862),i=a(5484),c=a(1884),d=a(8948),m=a(9213);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbsContainer:"breadcrumbsContainer_T5ub",breadcrumbHomeIcon:"breadcrumbHomeIcon_GlTw"};function p(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(c.Z,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function v(e){let{children:t,active:a,index:s,addMicrodata:o}=e;return l.createElement("li",(0,n.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function g(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(c.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},l.createElement(u,{className:b.breadcrumbHomeIcon})))}function h(){const e=(0,s.s1)(),t=(0,o.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(i.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(g,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(p,{href:t.href,isLast:n},t.label))})))):null}},249:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var n=a(7378),l=a(8944),r=a(1123),s=a(8357),o=a(5484),i=a(8274),c=a(4506),d=a(5069),m=a(9213);function u(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function b(e){let{lastUpdatedBy:t}=e;return n.createElement(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function p(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:o.k.common.lastUpdated},n.createElement(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(u,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(b,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var v=a(1364),g=a(8349);const h={lastUpdated:"lastUpdated_EIRz"};function E(e){return n.createElement("div",{className:(0,l.Z)(o.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(g.Z,e)))}function f(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(o.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(v.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",h.lastUpdated)},(a||r)&&n.createElement(p,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function L(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:i,lastUpdatedBy:c,tags:d}=a,m=d.length>0,u=!!(r||s||c);return m||u?n.createElement("footer",{className:(0,l.Z)(o.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(E,{tags:d}),u&&n.createElement(f,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:c,formattedLastUpdatedAt:i})):null}var Z=a(7061),N=a(376),C=a(6033),_=a(5773);const k={tocCollapsibleButton:"tocCollapsibleButton_iI2p",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_cHjC"};function T(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,_.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",k.tocCollapsibleButton,!t&&k.tocCollapsibleButtonExpanded,a.className)}),n.createElement(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const x={tocCollapsible:"tocCollapsible_wXna",tocCollapsibleContent:"tocCollapsibleContent_vea0",tocCollapsibleExpanded:"tocCollapsibleExpanded_BbRn"};function H(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:o,toggleCollapsed:i}=(0,N.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(x.tocCollapsible,!o&&x.tocCollapsibleExpanded,a)},n.createElement(T,{collapsed:o,onClick:i}),n.createElement(N.z,{lazy:!0,className:x.tocCollapsibleContent,collapsed:o},n.createElement(C.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var y=a(1999),U=a(1271),w=a(450);const A={docItemContainer:"docItemContainer_f4nO",docItemCol:"docItemCol_TsoR",tocMobile:"tocMobile_y4A9"};function I(e){const{content:t}=e,{metadata:a,frontMatter:l,assets:s}=t,{keywords:o}=l,{description:i,title:c}=a,d=s.image??l.image;return n.createElement(r.d,{title:c,description:i,keywords:o,image:d})}function B(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:m,hide_table_of_contents:u,toc_min_heading_level:b,toc_max_heading_level:p}=r,{title:v}=a,g=!m&&void 0===t.contentTitle,h=(0,s.i)(),E=!u&&t.toc&&t.toc.length>0,f=E&&("desktop"===h||"ssr"===h);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!u&&A.docItemCol)},n.createElement(c.Z,null),n.createElement("div",{className:A.docItemContainer},n.createElement("article",null,n.createElement(U.Z,null),n.createElement(d.Z,null),E&&n.createElement(H,{toc:t.toc,minHeadingLevel:b,maxHeadingLevel:p,className:(0,l.Z)(o.k.docs.docTocMobile,A.tocMobile)}),n.createElement("div",{className:(0,l.Z)(o.k.docs.docMarkdown,"markdown")},g&&n.createElement("header",null,n.createElement(y.Z,{as:"h1"},v)),n.createElement(w.Z,null,n.createElement(t,null))),n.createElement(L,e)),n.createElement(i.Z,{previous:a.previous,next:a.next}))),f&&n.createElement("div",{className:"col col--3"},n.createElement(Z.Z,{toc:t.toc,minHeadingLevel:b,maxHeadingLevel:p,className:o.k.docs.docTocDesktop})))}function M(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return n.createElement(r.FG,{className:t},n.createElement(I,e),n.createElement(B,e))}},8274:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(5773),l=a(7378),r=a(9213),s=a(4582);function o(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(s.Z,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(s.Z,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},5069:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7378),l=a(8944),r=a(9213),s=a(5611),o=a(5484);function i(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4506:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7378),l=a(8944),r=a(353),s=a(1884),o=a(9213),i=a(2935),c=a(4453),d=a(5484),m=a(5611);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,r.Z)(),{pluginId:o}=(0,i.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,c.J)(o),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,i.Jo)(o),g=u??(h=v).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.Z)(t,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:v.label,to:g.path,onClick:()=>m(v.name)})))}function g(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},1364:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7378),l=a(9213),r=a(5484),s=a(5773),o=a(8944);const i={iconEdit:"iconEdit_VEMf"};function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(i.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},450:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7378),l=a(5318),r=a(4322);function s(e){let{children:t}=e;return n.createElement(l.Zo,{components:r.Z},t)}},4582:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7378),l=a(8944),r=a(1884);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},7061:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(5773),l=a(7378),r=a(8944),s=a(6033);const o={tableOfContents:"tableOfContents_XG6w",docItemContainer:"docItemContainer_Tr6w"},i="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function d(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(o.tableOfContents,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:i,linkActiveClassName:c})))}},6033:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(5773),l=a(7378),r=a(624);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function c(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>i(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),i=c(o,{anchorTopOffset:a.current}),d=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const b=l.memo(u);function p(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...p}=e;const v=(0,r.L)(),g=d??v.tableOfContents.minHeadingLevel,h=u??v.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>o({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:g,maxHeadingLevel:h});return m((0,l.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:h}}),[i,c,g,h])),l.createElement(b,(0,n.Z)({toc:E,className:a,linkClassName:i},p))}},1478:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7378),l=a(8944),r=a(1884);const s={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};function o(e){let{permalink:t,label:a,count:o}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s.tag,o?s.tagWithCount:s.tagRegular)},a,o&&n.createElement("span",null,o))}},8349:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7378),l=a(8944),r=a(9213),s=a(1478);const o={tags:"tags_Ow0B",tag:"tag_DFxh"};function i(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o.tag},n.createElement(s.Z,{label:t,permalink:a}))}))))}}}]);