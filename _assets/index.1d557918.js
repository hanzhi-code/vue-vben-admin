import{a as e,i as t,o as a,j as s,k as i,w as r}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./omit.b6891b40.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import"./DownOutlined.16ed644d.js";import"./index.c8d3fa2a.js";import"./CaretDownFilled.0a95fe44.js";import"./index.a59fa34c.js";import{s as o}from"./index.c7a3deea.js";import"./index.aa029d51.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./animation.580f6c3e.js";import"./index.779102c9.js";import"./useContextMenu.686fb891.js";import{B as d,t as l}from"./data.03285da6.js";var n=e({components:{BasicTree:d,CollapseContainer:o},setup:()=>({treeData:l})});const m={class:"flex p-4"};n.render=function(e,o,d,l,n,p){const c=t("BasicTree"),j=t("CollapseContainer");return a(),s("div",m,[i(j,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:r((()=>[i(c,{treeData:e.treeData},null,8,["treeData"])])),_:1}),i(j,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:r((()=>[i(c,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),i(j,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:r((()=>[i(c,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])};export default n;