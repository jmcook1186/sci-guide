"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[63],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4904:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const o={sidebar_position:1},i="Getting Started",s={unversionedId:"GettingStarted",id:"GettingStarted",title:"Getting Started",description:"This Open Data project provides details on various approaches on how to get the data sources from various data providers and public sources required for SCI calculation. The Open Data projects also provdies the methdology and the calculation guidelines for emobodied emissions.",source:"@site/docs/GettingStarted.md",sourceDirName:".",slug:"/GettingStarted",permalink:"/GettingStarted",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data/tree/web/docs/GettingStarted.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tool based",permalink:"/E/Toolbased"},next:{title:"Energy Carbon Intensity",permalink:"/I/"}},l={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"This Open Data project provides details on various approaches on how to get the data sources from various data providers and public sources required for SCI calculation. The Open Data projects also provdies the methdology and the calculation guidelines for emobodied emissions."),(0,n.kt)("p",null,"Please note the data provided by the data providers are approximation based and the intent is to help calculate the SCI score. Once the SCI score is calculated, you can apply reduction principles across releases, to reduce the SCI score and the carbon emissions and improve energy efficiency for your software application."),(0,n.kt)("h1",{id:"quick-guide"},"Quick Guide"),(0,n.kt)("p",null,"The quick guide shows how to use the SCI Open Data to get Energy (E) and Embodied (M) emissions,\nCarbon Intensity (I) for the software application as per the SCI specification."),(0,n.kt)("p",null,"Let's take a simple example. Assume you want to calculate the SCI score for a software application running on Google Cloud VM. The VM configuration is e2-standard-4 (4 CPU, 16GB RAM) and running in us-east region.The software application scales by API and average monthly request is 10k.  "),(0,n.kt)("p",null,"So now lets calculate the following -"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Energy -  For Energy, we would first look at the approach listed in main page for ",(0,n.kt)("a",{parentName:"li",href:"E"}," E "),".\nWe select ",(0,n.kt)("a",{parentName:"li",href:"/E/APIBased"}," API based techniques ")," and use one of the API vendors, ","[Climatiq]"," (",(0,n.kt)("a",{parentName:"li",href:"https://www.climatiq.io/docs#cpu"},"https://www.climatiq.io/docs#cpu"),") which calculates C02e emissions directly based on CPU utilization data, VPCU and location details. We get CPU utilization data from cloud metrics. The API uses publicly available\navereage data for carbon itensity for a given electricity grid based on the locationa and\na mix of local energy sources.")),(0,n.kt)("p",null,"By Calling the API, we get the C02e of the VCPU as 1,329 gC02e"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Embodied emission -  For Energy, we would first look at the approach listed on the main page for ",(0,n.kt)("a",{parentName:"p",href:"M"}," M "),".\nWe select  ",(0,n.kt)("a",{parentName:"p",href:"/M/EmbodiedDatabase"}," Lookup Embodied Database ")," and lookup embodied emission of the server type e2-standard-4. We get embodied carbon as 1230.3 kgCO\u2082eq")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For Expected Lifespan (EL),  Time Reserved (TR), Resource Reserved (RR) , Total Resources (TR), we refer the main page of ",(0,n.kt)("a",{parentName:"p",href:"/M/MSubCalculations"},"Embodied Calculations")," for general guidelines to calculate the above values.\nFrom the above ",(0,n.kt)("a",{parentName:"p",href:"/M/MSubCalculations"},"Embodied Calculations")," page, we infer the following years"))),(0,n.kt)("p",null,"EL as 4 years (Average span for bare metal server)"),(0,n.kt)("p",null,"TR as 1 Month (Time when the VM server was running for our application)"),(0,n.kt)("p",null,"RR as 4 (Number of CPUs for our VM server, which is e2-standard-4 (4 CPU, 16GB RAM))"),(0,n.kt)("p",null,"TR as 32 (total resources available in a bare metal server running e2-standard-4 instances.)"),(0,n.kt)("p",null,"For TR we do a lookup for e2-standard-4 machine in the Google Documentation ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/general-purpose-machines#e2-standard"},"https://cloud.google.com/compute/docs/general-purpose-machines#e2-standard")," and see the maximum vCPU that is supported is 32 vCPU through the e2-standard-32 machine."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"For R, we already have 10k API request/month")),(0,n.kt)("p",null,"SCI Equation =  ((E*I) + M) per R"),(0,n.kt)("p",null,"For M, the equation  = TE ",(0,n.kt)("em",{parentName:"p"}," (TR/EL) ")," (RR/TR)"),(0,n.kt)("p",null,"TE = Total Embodied Emissions, meaning the sum of LCA emissions for all hardware components, which we calculated in Step 2."),(0,n.kt)("p",null,"SCI Score ="))}d.isMDXComponent=!0}}]);