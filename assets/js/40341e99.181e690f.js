"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[774],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(4137));const o={sidebar_position:2},s="Datasets",i={unversionedId:"E/Datasets",id:"E/Datasets",title:"Datasets",description:"What public sources and references are available for energy estimates for computing resources\u200b?",source:"@site/docs/E/Datasets.md",sourceDirName:"E",slug:"/E/Datasets",permalink:"/E/Datasets",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data-guidance/tree/web/docs/E/Datasets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API Based",permalink:"/E/APIBased"},next:{title:"Network Infrastructure Energy Calculation",permalink:"/E/NetworkEnergy"}},c={},l=[{value:"What public sources and references are available for energy estimates for computing resources\u200b?",id:"what-public-sources-and-references-are-available-for-energy-estimates-for-computing-resources",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datasets"},"Datasets"),(0,a.kt)("h3",{id:"what-public-sources-and-references-are-available-for-energy-estimates-for-computing-resources"},"What public sources and references are available for energy estimates for computing resources\u200b?"),(0,a.kt)("p",null,"Here are some sources and references you can use for estimating the energy of computing resources:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.etsy.com/codeascraft/cloud-jewels-estimating-kwh-in-the-cloud/"},"Cloud Jewels coefficients"),"\nThe following coefficients are provided by Cloud Jewels for how many watt-hours (Wh) it takes to run a virtual server and to store a terabyte of data on HDD (hard disk drive) or SSD (solid-state drive) disks in a cloud computing environment:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2.10 Wh per vCPUh for Server"),(0,a.kt)("li",{parentName:"ul"},"0.89 Wh/TBh for HDD storage "),(0,a.kt)("li",{parentName:"ul"},"1.52 Wh/TBh for SSD storage ")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.spec.org/power_ssj2008/results/power_ssj2008.html"},"Avg Watts - Active Idle time for servers"))))}p.isMDXComponent=!0}}]);