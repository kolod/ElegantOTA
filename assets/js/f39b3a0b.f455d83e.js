"use strict";(self.webpackChunkelegantota_docs=self.webpackChunkelegantota_docs||[]).push([[989],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(b,o(o({ref:t},u),{},{components:r})):a.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={title:"Disable Firmware OTA",sidebar_label:"Disable Firmware OTA (Pro)",sidebar_position:8},o=void 0,l={unversionedId:"disable-firmware-ota",id:"disable-firmware-ota",title:"Disable Firmware OTA",description:"This feature is only available in ElegantOTA Pro.",source:"@site/docs/disable-firmware-ota.md",sourceDirName:".",slug:"/disable-firmware-ota",permalink:"/disable-firmware-ota",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Disable Firmware OTA",sidebar_label:"Disable Firmware OTA (Pro)",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Async Mode",permalink:"/async-mode"},next:{title:"Disable Filesystem OTA (Pro)",permalink:"/disable-filesystem-ota"}},s={},c=[{value:"Disable Firmware OTA:",id:"disable-firmware-ota",level:4},{value:"Enable Firmware OTA:",id:"enable-firmware-ota",level:4},{value:"Get Firmware OTA mode status:",id:"get-firmware-ota-mode-status",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"pro-label"},(0,n.kt)("i",null,(0,n.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is only available in ",(0,n.kt)("a",{target:"_blank",style:{color:"red"},href:"https://elegantota.pro"},"ElegantOTA Pro"),"."))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("img",{src:"/v3/img/ota-modes.png",alt:"Modes",width:"400px"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"ElegantOTA allows you to selective enable or disable OTA modes of your choice for security reasons or when you have a important task running where you don't want it to get interrupted by an OTA update. This will be represented in the portal (ElegantOTA webpage) too."),(0,n.kt)("p",null,"This function should be used very carefully as it blocks firmware update! If by mistake this is left disabled, your device will not be recoverable by an OTA update."),(0,n.kt)("h4",{id:"disable-firmware-ota"},"Disable Firmware OTA:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Pass 'false' to disable Firmware mode\nElegantOTA.setFirmwareMode(false);\n")),(0,n.kt)("h4",{id:"enable-firmware-ota"},"Enable Firmware OTA:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Pass 'true' to enable Firmware mode\nElegantOTA.setFirmwareMode(true);\n")),(0,n.kt)("h4",{id:"get-firmware-ota-mode-status"},"Get Firmware OTA mode status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'// You can use this logic inside a function if neccessary\nif(ElegantOTA.checkFirmwareMode() == true) {\n    Serial.println("Firmware mode is enabled");\n} else {\n    Serial.println("Firmware mode is disabled");\n}\n')))}m.isMDXComponent=!0}}]);