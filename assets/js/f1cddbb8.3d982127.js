"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[9880],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=a,c=s["".concat(m,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(c,i(i({ref:e},u),{},{components:n})):r.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4492:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Polyline"},m="Polyline",p={unversionedId:"components/Polyline",id:"components/Polyline",isDocsHomePage:!1,title:"Polyline",description:"Polyline is a polyline primitive in the PolylineCollection.",source:"@site/docs/components/Polyline.mdx",sourceDirName:"components",slug:"/components/Polyline",permalink:"/components/Polyline",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/Polyline.mdx",tags:[],version:"current",frontMatter:{title:"Polyline"},sidebar:"docs",previous:{title:"PolygonGraphics",permalink:"/components/PolygonGraphics"},next:{title:"PolylineCollection",permalink:"/components/PolylineCollection"}},u=[{value:"Availability",id:"availability",children:[]},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[]},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[]},{value:"Cesium events",id:"cesium-events",children:[]},{value:"Other properties",id:"other-properties",children:[]}]}],d={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"polyline"},"Polyline"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Polyline")," is a polyline primitive in the ",(0,l.kt)("inlineCode",{parentName:"p"},"PolylineCollection"),"."),(0,l.kt)("p",null,"Primitive is a low layer API for geographical visualization.\n",(0,l.kt)("a",{parentName:"p",href:"/components/entity"},"Entity")," is more recommended unless performance issues."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,l.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/Polyline.html"},"Polyline")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Example"),": ",(0,l.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/polyline--basic%22"},"Polyline"))),(0,l.kt)("h2",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Only inside ",(0,l.kt)("a",{parentName:"p",href:"/components/PolylineCollection"},"PolylineCollection")," component.\nA polyline object will be attached to the parent PolylineCollection."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distanceDisplayCondition"),(0,l.kt)("td",{parentName:"tr",align:null},"DistanceDisplayCondition"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"show"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"material"),(0,l.kt)("td",{parentName:"tr",align:null},"Material"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"positions"),(0,l.kt)("td",{parentName:"tr",align:null},"Cartesian3[]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loop"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,l.kt)("p",null,"N/A"),(0,l.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,l.kt)("p",null,"N/A"),(0,l.kt)("h3",{id:"other-properties"},"Other properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDoubleClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseDown"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseUp"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMiddleClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMiddleDown"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMiddleUp"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseMove"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPinchEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPinchMove"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onPinchStart"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRightClick"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRightDown"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRightUp"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseEnter"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMouseLeave"),(0,l.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);