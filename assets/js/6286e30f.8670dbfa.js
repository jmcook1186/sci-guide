"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[365],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const i={sidebar_position:2},a="Performance Engineering  techniques",s={unversionedId:"E/PerformanceEngineeringBased",id:"E/PerformanceEngineeringBased",title:"Performance Engineering  techniques",description:"What is the process of calculating Energy using the Performance Engineering Technique?",source:"@site/docs/E/PerformanceEngineeringBased.md",sourceDirName:"E",slug:"/E/PerformanceEngineeringBased",permalink:"/E/PerformanceEngineeringBased",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/sci-data/tree/web/docs/E/PerformanceEngineeringBased.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API Based",permalink:"/E/APIBased"},next:{title:"Tool based",permalink:"/E/Toolbased"}},c={},l=[{value:"What is the process of calculating Energy using the Performance Engineering Technique?",id:"what-is-the-process-of-calculating-energy-using-the-performance-engineering-technique",level:2},{value:"What is the formula that can be used for the power calculation ?",id:"what-is-the-formula-that-can-be-used-for-the-power-calculation-",level:2},{value:"How do you get the Power consumed value (P_c, P_g, P_r) in the above formula?",id:"how-do-you-get-the-power-consumed-value-p_c-p_g-p_r-in-the-above-formula",level:2},{value:"Considering above, how do you convert utilization to power?",id:"considering-above-how-do-you-convert-utilization-to-power",level:2},{value:"What is Thermal design Power or TDP ?",id:"what-is-thermal-design-power-or-tdp-",level:2},{value:"What is the dataset that can can be used for finding TDP of servers/memory?",id:"what-is-the-dataset-that-can-can-be-used-for-finding-tdp-of-serversmemory",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performance-engineering--techniques"},"Performance Engineering  techniques"),(0,o.kt)("h2",{id:"what-is-the-process-of-calculating-energy-using-the-performance-engineering-technique"},"What is the process of calculating Energy using the Performance Engineering Technique?"),(0,o.kt)("p",null,"The main consumers of power on a server will be the CPU, the GPU, and the memory. Estimating how much each consumes will give you an estimate of how much power your server, or your application on a server, consumes. We consider energy spent to be directly proportional to Power as E= P*t and thus E can be calculated."),(0,o.kt)("h2",{id:"what-is-the-formula-that-can-be-used-for-the-power-calculation-"},"What is the formula that can be used for the power calculation ?"),(0,o.kt)("p",null,"The formula is as follows:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"P[kWh]=(c\u2219P_c+ P_r+g\u2219P_g)/1000")),(0,o.kt)("p",null,"Where c is the number of cores , P_c the power consumption of the CPU, P_g is the power consumption of the GPU ,g is the number of Memory sticks, P_r is the power consumption of the memory."),(0,o.kt)("h2",{id:"how-do-you-get-the-power-consumed-value-p_c-p_g-p_r-in-the-above-formula"},"How do you get the Power consumed value (P_c, P_g, P_r) in the above formula?"),(0,o.kt)("p",null,"Using performance tests, we will calculate CPU utilization, Memory utilization values. However  energy is not a linear function of utilization. An idle computer, even one at zero percent utilization, still draws electricity. This static power draw varies by configuration and by hardware components, but all components have some static power draw. This is called energy proportionality principle"),(0,o.kt)("h2",{id:"considering-above-how-do-you-convert-utilization-to-power"},"Considering above, how do you convert utilization to power?"),(0,o.kt)("p",null,"The conversion is documented in the SCI open data project and is available here - ","[Utilization to power conversion]"," (        ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613"},"https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613"),")"),(0,o.kt)("p",null,"The output is called TDP co-efficient. We need to multiply this TDP co-efficient by the Thermal design power rating on the specific component"),(0,o.kt)("h2",{id:"what-is-thermal-design-power-or-tdp-"},"What is Thermal design Power or TDP ?"),(0,o.kt)("p",null,"TDP is Thermal design power. This number is meant to help with designing what cooling the component needs, and not strictly for estimating energy consumption. But there is a correlation, even though it will be a simplification."),(0,o.kt)("h2",{id:"what-is-the-dataset-that-can-can-be-used-for-finding-tdp-of-serversmemory"},"What is the dataset that can can be used for finding TDP of servers/memory?"),(0,o.kt)("p",null," Hardware manufacturers provide a data sheet for all their components and on which you will find a number called TDP, Thermal Design Power. For example TDP of server used in Azure App server Premium configuration (P2v2 ) -2nd Generation Intel\xae Xeon\xae Platinum 8272CL is 205 Watts -  ","[TDP]","\n(",(0,o.kt)("a",{parentName:"p",href:"https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html"},"https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html"),")"))}p.isMDXComponent=!0}}]);