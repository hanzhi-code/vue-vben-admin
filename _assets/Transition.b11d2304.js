let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(e);import{a as t,i as a,o,j as i,k as s,w as n}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.483b4322.js";import{A as r}from"./index.24bd1cf1.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import"./index.7d66e263.js";import"./UpOutlined.a4448786.js";import"./LeftOutlined.3ec9da63.js";import"./index.7e0586a9.js";import{b as m,S as d}from"./index.c7a3deea.js";import"./index.aa029d51.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./animation.580f6c3e.js";import"./index.779102c9.js";import p from"./TargetContent.9f1a5217.js";var c=t({components:{LazyContainer:m,TargetContent:p,Skeleton:d,Alert:r},setup:()=>({})});const l={class:"p-4 lazy-base-demo"},u={class:"lazy-base-demo-wrap"},f=s("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};c.render=function(e,t,r,m,d,p){const c=a("Alert"),x=a("TargetContent"),b=a("LazyContainer");return o(),i("div",l,[s(c,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),s("div",u,[f,s("div",j,[s(b,{transitionName:"custom"},{default:n((()=>[s(x)])),_:1})])])])};export default c;