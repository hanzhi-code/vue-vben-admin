let a=document.createElement("style");a.innerHTML=".account-center-col[data-v-efaad362]:not(:last-child){padding:0 10px}.account-center-col[data-v-efaad362]:not(:last-child):not(:last-child){border-right:1px dashed #cecece}.account-center-top[data-v-efaad362]{padding:10px;margin:16px 16px 12px;background:#fff;border-radius:3px}.account-center-top__avatar[data-v-efaad362]{text-align:center}.account-center-top__avatar img[data-v-efaad362]{border-radius:50%}.account-center-top__avatar span[data-v-efaad362]{display:block;font-size:20px;font-weight:500}.account-center-top__avatar div[data-v-efaad362]{margin-top:3px;font-size:12px}.account-center-top__detail[data-v-efaad362]{padding-left:20px;margin-top:15px}.account-center-top__team-item[data-v-efaad362]{display:inline-block;padding:4px 24px}.account-center-top__team span[data-v-efaad362]{margin-left:3px}.account-center-bottom[data-v-efaad362]{padding:10px;margin:0 16px 16px;background:#fff;border-radius:3px}",document.head.appendChild(a);import{a as t,I as e,O as s,Q as o,i,o as n,j as c,k as d,U as r,V as l,R as p,p as m,n as f,bw as u}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./index.42b663c7.js";import"./omit.b6891b40.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.483b4322.js";import"./CheckOutlined.443a507c.js";import"./colors.36c97d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import{T as x}from"./index.7d66e263.js";import"./UpOutlined.a4448786.js";import"./LeftOutlined.3ec9da63.js";import"./index.7e0586a9.js";import{T as _}from"./index.ff51f9f3.js";import"./index.d62063f1.js";import"./zh_CN.0242bd16.js";import"./index.b048d687.js";import{s as j}from"./index.c7a3deea.js";import"./index.aa029d51.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./animation.580f6c3e.js";import"./index.779102c9.js";import{h as b}from"./header.817c2c65.js";import{tags as v,teams as g,details as h,achieveList as C}from"./data.40b2efe2.js";import T from"./Application.b55606e0.js";import k from"./Article.e42199c1.js";import y from"./Project.3b978398.js";var $=t({components:{CollapseContainer:j,Icon:e,Tag:_,Tabs:x,TabPane:x.TabPane,Article:k,Application:T,Project:y},setup:()=>({prefixCls:"account-center",headerImg:b,tags:v,teams:g,details:h,achieveList:C})});const I=p("data-v-efaad362");s("data-v-efaad362");const O=d("span",null,"Serati Ma",-1),w=d("div",null,"海纳百川，有容乃大",-1);o();const A=I(((a,t,e,s,o,p)=>{const x=i("a-col"),_=i("Icon"),j=i("a-row"),b=i("Tag"),v=i("CollapseContainer"),g=i("TabPane"),h=i("Tabs");return n(),c("div",{class:a.prefixCls},[d(j,{class:`${a.prefixCls}-top`},{default:I((()=>[d(x,{span:9,class:`${a.prefixCls}-col`},{default:I((()=>[d(j,null,{default:I((()=>[d(x,{span:8},{default:I((()=>[d("div",{class:`${a.prefixCls}-top__avatar`},[d("img",{width:"70",src:a.headerImg},null,8,["src"]),O,w],2)])),_:1}),d(x,{span:16},{default:I((()=>[d("div",{class:`${a.prefixCls}-top__detail`},[(n(!0),c(r,null,l(a.details,((a,t)=>(n(),c("p",{key:t},[d(_,{icon:a.icon},null,8,["icon"]),m(" "+f(a.title),1)])))),128))],2)])),_:1})])),_:1})])),_:1},8,["class"]),d(x,{span:7,class:`${a.prefixCls}-col`},{default:I((()=>[d(v,{title:"标签",canExpan:!1},{default:I((()=>[(n(!0),c(r,null,l(a.tags,((a,t)=>(n(),c(b,{key:t,class:"mb-2"},{default:I((()=>[m(f(a),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"]),d(x,{span:8,class:`${a.prefixCls}-col`},{default:I((()=>[d(v,{class:`${a.prefixCls}-top__team`,title:"团队",canExpan:!1},{default:I((()=>[(n(!0),c(r,null,l(a.teams,((t,e)=>(n(),c("div",{key:e,class:`${a.prefixCls}-top__team-item`},[d(_,{icon:t.icon,color:t.color},null,8,["icon","color"]),d("span",null,f(t.title),1)],2)))),128))])),_:1},8,["class"])])),_:1},8,["class"])])),_:1},8,["class"]),d("div",{class:`${a.prefixCls}-bottom`},[d(h,null,{default:I((()=>[(n(!0),c(r,null,l(a.achieveList,(a=>(n(),c(g,{key:a.key,tab:a.name},{default:I((()=>[(n(),c(u(a.component)))])),_:2},1032,["tab"])))),128))])),_:1})],2)],2)}));$.render=A,$.__scopeId="data-v-efaad362";export default $;