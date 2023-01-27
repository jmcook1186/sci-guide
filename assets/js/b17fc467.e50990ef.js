"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[210],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,f=d["".concat(u,".").concat(p)]||d[p]||h[p]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const i={sidebar_position:3},o="Energy (E)",s={unversionedId:"E/index",id:"E/index",title:"Energy (E)",description:"What are the different ways to  calculate energy?\u200b",source:"@site/docs/E/index.md",sourceDirName:"E",slug:"/E/",permalink:"/E/",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data-guidance/tree/web/docs/E/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quick Guide",permalink:"/GettingStarted"},next:{title:"API Based",permalink:"/E/APIBased"}},u={},c=[{value:"What are the different ways to  calculate energy?\u200b",id:"what-are-the-different-ways-to--calculate-energy",level:3},{value:"1)  API based techniques ",id:"1--api-based-techniques-",level:4},{value:"2)  Performance Engineering techniques ",id:"2--performance-engineering-techniques-",level:4},{value:"3)  Tool based  ",id:"3--tool-based--",level:4},{value:"4)  Public Sources  ",id:"4--public-sources--",level:4}],l={toc:c};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"energy-e"},"Energy (E)"),(0,a.kt)("h3",{id:"what-are-the-different-ways-to--calculate-energy"},"What are the different ways to  calculate energy?\u200b"),(0,a.kt)("p",null,"Software systems cause emissions through the hardware that they operate on, both through the energy that the physical hardware consumes and the emissions associated with manufacturing the hardware. There are multiple techniques that can be used to calculate the energy values that physical hardware consumes while running the software application. Some of these techniques are listed below:"),(0,a.kt)("h4",{id:"1--api-based-techniques-"},"1) ",(0,a.kt)("a",{parentName:"h4",href:"/E/APIBased"}," API based techniques ")),(0,a.kt)("p",null," This is when you integrate your software with APIs that provide the energy values at run time."),(0,a.kt)("h4",{id:"2--performance-engineering-techniques-"},"2) ",(0,a.kt)("a",{parentName:"h4",href:"/E/PerformanceEngineeringBased"}," Performance Engineering techniques ")),(0,a.kt)("p",null," This is when you measure run time heuristics like CPU utilisation, memory utilisation, etc. and use these to calculate energy."),(0,a.kt)("h4",{id:"3--tool-based--"},"3) ",(0,a.kt)("a",{parentName:"h4",href:"/E/Toolbased"}," Tool based  ")),(0,a.kt)("p",null," This is when you integrate your software with tools running on the desktop or servers that provide energy values."),(0,a.kt)("h4",{id:"4--public-sources--"},"4) ",(0,a.kt)("a",{parentName:"h4",href:"/E/Datasets"}," Public Sources  ")),(0,a.kt)("p",null," This is when you get energy reference values of computing resources from public sources.\nYou cannot use the above approaches when you need to calculate energy associated with network infrastructure. Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://sci-data.greensoftware.foundation/E/NetworkEnergy"},"this link")," to find out how."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please submit any comments you have ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Green-Software-Foundation/sci-data/issues/new?assignees=atg-abhishek%2C+srini1978%2C+Henry-WattTime%2C+navveenb&labels=Guidelines+Feedback&template=guidelines-feedback.md&title=Guidelines+Feedback"},"here"))))}h.isMDXComponent=!0}}]);