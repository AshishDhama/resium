"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[1492],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),c=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,l(l({ref:e},s),{},{components:r})):n.createElement(h,l({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2782:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],p={title:"PathGraphics"},o="PathGraphics",c={unversionedId:"components/PathGraphics",id:"components/PathGraphics",isDocsHomePage:!1,title:"PathGraphics",description:"PathGraphics is a path visualization for the entity.",source:"@site/docs/components/PathGraphics.mdx",sourceDirName:"components",slug:"/components/PathGraphics",permalink:"/components/PathGraphics",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/PathGraphics.mdx",version:"current",frontMatter:{title:"PathGraphics"},sidebar:"docs",previous:{title:"ParticleSystem",permalink:"/components/ParticleSystem"},next:{title:"PlaneGraphics",permalink:"/components/PlaneGraphics"}},s=[{value:"Availability",id:"availability",children:[]},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[]},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[]},{value:"Cesium events",id:"cesium-events",children:[]},{value:"Other properties",id:"other-properties",children:[]}]}],u={toc:s};function m(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pathgraphics"},"PathGraphics"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PathGraphics")," is a path visualization for the entity."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,i.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html"},"PathGraphics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Example"),": ",(0,i.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/pathgraphics--basic%22"},"PathGraphics"))),(0,i.kt)("h2",{id:"availability"},"Availability"),(0,i.kt)("p",null,"PathGraphics can be mounted only inside",(0,i.kt)("a",{parentName:"p",href:"/components/Entity"},"Entity")," components,\nand can not be mounted more than once for each entity."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"distanceDisplayCondition"),(0,i.kt)("td",{parentName:"tr",align:null},"DistanceDisplayCondition ","|"," Property"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"show"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean ","|"," Property"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"width"),(0,i.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"material"),(0,i.kt)("td",{parentName:"tr",align:null},"Color ","|"," MaterialProperty"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"leadTime"),(0,i.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"trailTime"),(0,i.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resolution"),(0,i.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onDefinitionChange"),(0,i.kt)("td",{parentName:"tr",align:null},"() =",">"," void"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"other-properties"},"Other properties"),(0,i.kt)("p",null,"N/A"))}m.isMDXComponent=!0}}]);