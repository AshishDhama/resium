"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[5829],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return s}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=u(r),s=a,y=c["".concat(p,".").concat(s)]||c[s]||d[s]||l;return r?n.createElement(y,i(i({ref:e},m),{},{components:r})):n.createElement(y,i({ref:e},m))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6343:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={title:"CylinderGraphics"},p="CylinderGraphics",u={unversionedId:"components/CylinderGraphics",id:"components/CylinderGraphics",isDocsHomePage:!1,title:"CylinderGraphics",description:"CylinderGraphics is a cylinder visualization for the entity.",source:"@site/docs/components/CylinderGraphics.mdx",sourceDirName:"components",slug:"/components/CylinderGraphics",permalink:"/components/CylinderGraphics",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/CylinderGraphics.mdx",version:"current",frontMatter:{title:"CylinderGraphics"},sidebar:"docs",previous:{title:"CustomDataSource",permalink:"/components/CustomDataSource"},next:{title:"CzmlDataSource",permalink:"/components/CzmlDataSource"}},m=[{value:"Availability",id:"availability",children:[]},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[]},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[]},{value:"Cesium events",id:"cesium-events",children:[]},{value:"Other properties",id:"other-properties",children:[]}]}],d={toc:m};function c(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cylindergraphics"},"CylinderGraphics"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CylinderGraphics")," is a cylinder visualization for the entity."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,l.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html"},"CylinderGraphics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Example"),": ",(0,l.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/cylindergraphics--basic%22"},"CylinderGraphics"))),(0,l.kt)("h2",{id:"availability"},"Availability"),(0,l.kt)("p",null,"CylinderGraphics can be mounted only inside",(0,l.kt)("a",{parentName:"p",href:"/components/Entity"},"Entity")," components,\nand can not be mounted more than once for each entity."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distanceDisplayCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"DistanceDisplayCondition ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"heightReference"),(0,l.kt)("td",{parentName:"tr",align:null},"HeightReference ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"show"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"material"),(0,l.kt)("td",{parentName:"tr",align:null},"Color ","|"," MaterialProperty"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outline"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outlineColor"),(0,l.kt)("td",{parentName:"tr",align:null},"Color ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outlineWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shadows"),(0,l.kt)("td",{parentName:"tr",align:null},"Property ","|"," ShadowMode"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topRadius"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bottomRadius"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numberOfVerticalLines"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"slices"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," Property"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shadowMode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,l.kt)("p",null,"N/A"),(0,l.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,l.kt)("p",null,"N/A"),(0,l.kt)("h3",{id:"other-properties"},"Other properties"),(0,l.kt)("p",null,"N/A"))}c.isMDXComponent=!0}}]);