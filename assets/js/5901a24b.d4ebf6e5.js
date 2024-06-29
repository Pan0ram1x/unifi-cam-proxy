"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[558],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||a;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8645:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:1},p="RTSP",u={unversionedId:"configuration/rtsp",id:"configuration/rtsp",title:"RTSP",description:"Most generic cameras are supported via the RTSP integration.",source:"@site/docs/configuration/rtsp.md",sourceDirName:"configuration",slug:"/configuration/rtsp",permalink:"/configuration/rtsp",editUrl:"https://github.com/Pan0ram1x/unifi-cam-proxy/tree/main/docs/docs/configuration/rtsp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/"},next:{title:"Frigate",permalink:"/configuration/frigate"}},s=[{value:"Hardware Acceleration",id:"hardware-acceleration",children:[],level:2}],l={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rtsp"},"RTSP"),(0,a.kt)("p",null,"Most generic cameras are supported via the RTSP integration.\nDepending on your camera, you might need specific flags to make live-streaming smoother.\nCheck for your specific camera model in the docs before trying this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"unifi-cam-proxy -H {NVR IP} -i {Camera IP} -c /client.pem -t {Adoption token} \\\n  rtsp \\\n  -s {rtsp stream}\n")),(0,a.kt)("h2",{id:"hardware-acceleration"},"Hardware Acceleration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sg"},"unifi-cam-proxy -H {NVR IP} -i {Camera IP} -c /client.pem -t {Adoption token} \\\n  rtsp \\\n  -s {rtsp stream} \\\n  --ffmpeg-args='-hwaccel vaapi -hwaccel_device /dev/dri/renderD128 -hwaccel_output_format yuv420p'\n")))}f.isMDXComponent=!0}}]);