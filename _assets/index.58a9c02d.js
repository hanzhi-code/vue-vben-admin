import{a as e,r as l,i as r,o as s,j as t,k as o,w as n,p as i,n as c}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import{s as a}from"./index.c7a3deea.js";import"./index.aa029d51.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./animation.580f6c3e.js";import"./index.779102c9.js";import{u}from"./useFullScreen.e8706629.js";var m=e({components:{CollapseContainer:a},setup(){const e=l(null),{enterFullscreen:r,toggleFullscreen:s,isFullscreenRef:t,exitFullscreen:o}=u(),{toggleFullscreen:n}=u(e);return{enterFullscreen:r,toggleDom:n,toggleFullscreen:s,isFullscreenRef:t,exitFullscreen:o,domRef:e}}});const d={class:"p-4"},p=i(" Enter Window Full Screen "),f=i(" Toggle Window Full Screen "),F=i(" Exit Window Full Screen "),g=i(" Enter Dom Full Screen "),j={ref:"domRef",class:"w-1/2 h-64 flex justify-center rounded-md items-center bg-white mx-auto mt-10"},x=i(" Exit Dom Full Screen ");m.render=function(e,l,a,u,m,C){const k=r("a-button"),w=r("CollapseContainer");return s(),t("div",d,[o(w,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Window Full Screen"},{default:n((()=>[o(k,{type:"primary",onClick:e.enterFullscreen,class:"mr-2"},{default:n((()=>[p])),_:1},8,["onClick"]),o(k,{color:"success",onClick:e.toggleFullscreen,class:"mr-2"},{default:n((()=>[f])),_:1},8,["onClick"]),o(k,{color:"error",onClick:e.exitFullscreen,class:"mr-2"},{default:n((()=>[F])),_:1},8,["onClick"]),i(" Current State: "+c(e.isFullscreenRef),1)])),_:1}),o(w,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Dom Full Screen"},{default:n((()=>[o(k,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:n((()=>[g])),_:1},8,["onClick"])])),_:1}),o("div",j,[o(k,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:n((()=>[x])),_:1},8,["onClick"])],512)])};export default m;