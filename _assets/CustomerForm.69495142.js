import{a as e,az as s,bH as i,h as o,i as t,o as r,j as n,k as d,w as a}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./index.42b663c7.js";import"./omit.b6891b40.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.483b4322.js";import"./CheckOutlined.443a507c.js";import{s as p}from"./index.51354d44.js";import"./index.24bd1cf1.js";import"./colors.36c97d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import"./index.0316d2b5.js";import"./UpOutlined.a4448786.js";import"./DownOutlined.16ed644d.js";import"./index.ff51f9f3.js";import"./index.0ed8c2eb.js";import"./index.4b77d643.js";import{s as l}from"./index.c7a3deea.js";import"./CloseOutlined.b1e89784.js";import"./index.45a74137.js";import"./index.aa029d51.js";import"./LeftOutlined.9fba55b2.js";import"./functional.eee1b379.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./useDebounce.6bfe7d92.js";import"./useEventListener.242996ad.js";import"./useBreakpoint.0182c2b6.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./animation.580f6c3e.js";import"./index.779102c9.js";import"./index.177e3769.js";import"./useWindowSizeFn.b69303c2.js";import"./uuid.40269c00.js";import"./download.5de813c4.js";import{u as m}from"./useForm.423dbb98.js";const u=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var c=e({components:{BasicForm:p,CollapseContainer:l},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:s,schemas:u,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const j={class:"m-4"};c.render=function(e,s,i,o,p,l){const m=t("a-input"),u=t("BasicForm"),c=t("CollapseContainer");return r(),n("div",j,[d(c,{title:"自定义表单"},{default:a((()=>[d(u,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:a((({model:e,field:s})=>[d(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default c;