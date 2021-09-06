"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[1690],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),s=r,k=d["".concat(m,".").concat(s)]||d[s]||c[s]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3859:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"CameraFlyTo"},m="CameraFlyTo",p={unversionedId:"components/CameraFlyTo",id:"components/CameraFlyTo",isDocsHomePage:!1,title:"CameraFlyTo",description:"CameraFlyTo is a kind of operation of the camera.",source:"@site/docs/components/CameraFlyTo.mdx",sourceDirName:"components",slug:"/components/CameraFlyTo",permalink:"/components/CameraFlyTo",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/CameraFlyTo.mdx",tags:[],version:"current",frontMatter:{title:"CameraFlyTo"},sidebar:"docs",previous:{title:"CameraFlyHome",permalink:"/components/CameraFlyHome"},next:{title:"CameraFlyToBoundingSphere",permalink:"/components/CameraFlyToBoundingSphere"}},u=[{value:"Availability",id:"availability",children:[]},{value:"Properties",id:"properties",children:[]}],c={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cameraflyto"},"CameraFlyTo"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CameraFlyTo")," is a kind of operation of the camera."),(0,l.kt)("p",null,"When it is mounted, ",(0,l.kt)("inlineCode",{parentName:"p"},"camera.flyTo(options)")," will be execute."),(0,l.kt)("p",null,"If any property is changed, the current camera flight will be canceled and a new one is executed."),(0,l.kt)("p",null,"See also: ",(0,l.kt)("a",{parentName:"p",href:"https://cesium.com/docs/cesiumjs-ref-doc/Camera.html?classFilter=camer#flyTo"},"Camera#flyTo")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Example"),": ",(0,l.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/cameraflyto--basic%22"},"CameraFlyTo"))),(0,l.kt)("h2",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Inside ",(0,l.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,l.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," components."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destination"),(0,l.kt)("td",{parentName:"tr",align:null},"Cartesian3 ","|"," Rectangle"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orientation"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endTransform"),(0,l.kt)("td",{parentName:"tr",align:null},"Matrix4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maximumHeight"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pitchAdjustHeight"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flyOverLongitude"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flyOverLongitudeWeight"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"convert"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"easingFunction"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onComplete"),(0,l.kt)("td",{parentName:"tr",align:null},"FlightCompleteCallback"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onCancel"),(0,l.kt)("td",{parentName:"tr",align:null},"FlightCancelledCallback"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cancelFlightOnUnmount"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, cancel camera flight if this component is unmounted. Default value is false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"once"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, camera flight will be executed only once time.")))))}d.isMDXComponent=!0}}]);