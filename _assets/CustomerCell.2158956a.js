import{a as e,i as t,o as i,j as s,k as o,w as d,p as r,n}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.5f2ca698.js";import"./index.42b663c7.js";import"./omit.b6891b40.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.483b4322.js";import"./CheckOutlined.443a507c.js";import"./index.51354d44.js";import"./index.24bd1cf1.js";import"./colors.36c97d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import"./index.0316d2b5.js";import"./UpOutlined.a4448786.js";import"./LeftOutlined.3ec9da63.js";import"./DownOutlined.16ed644d.js";import{T as m}from"./index.ff51f9f3.js";import"./index.c8d3fa2a.js";import"./index.d62063f1.js";import"./zh_CN.0242bd16.js";import"./index.0ed8c2eb.js";import"./index.4b77d643.js";import"./CaretDownFilled.0a95fe44.js";import"./CheckOutlined.d40c5cf4.js";import"./CloseOutlined.b1e89784.js";import{s as a,b as p}from"./EditTableHeaderIcon.a84133a3.js";import"./index.45a74137.js";import"./index.aa029d51.js";import"./LeftOutlined.9fba55b2.js";import"./functional.eee1b379.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./useDebounce.6bfe7d92.js";import"./useEventListener.242996ad.js";import"./useBreakpoint.0182c2b6.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./index.177e3769.js";import"./useWindowSizeFn.b69303c2.js";import"./uuid.40269c00.js";import"./download.5de813c4.js";import"./useForm.423dbb98.js";import"./useFullScreen.e8706629.js";import"./index.eb1a3eb6.js";import{u as j}from"./useTable.e46fe14d.js";import{d as l}from"./table.9d6145dd.js";const c=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var u=e({components:{BasicTable:a,TableImg:p,Tag:m},setup(){const[e]=j({title:"自定义列内容",api:l,columns:c});return{registerTable:e}}});const b={class:"p-4"};u.render=function(e,m,a,p,j,l){const c=t("Tag"),u=t("TableImg"),f=t("BasicTable");return i(),s("div",b,[o(f,{onRegister:e.registerTable},{id:d((({record:e})=>[r(" ID: "+n(e.id),1)])),no:d((({record:e})=>[o(c,{color:"green"},{default:d((()=>[r(n(e.no),1)])),_:2},1024)])),img:d((()=>[o(u,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),_:1},8,["onRegister"])])};export default u;