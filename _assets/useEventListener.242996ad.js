import{r as e,bn as n,aq as t,f as o}from"./index.dc2474c5.js";import{u as s}from"./useDebounce.6bfe7d92.js";function a({el:a=window,name:i,listener:r,options:m,autoRemove:u=!0,isDebounce:v=!0,wait:c=80}){let d=()=>{};const f=e(!1);if(a){const l=e(a),[b]=v?s(r,c):n(r,c),p=c?b:r,w=e=>{f.value=!0,e.removeEventListener(i,p,m)},E=e=>e.addEventListener(i,p,m),j=t(l,((e,n,t)=>{e&&(!o(f)&&E(e),t((()=>{u&&w(e)})))}),{immediate:!0});d=()=>{w(l.value),j()}}return{removeEvent:d}}export{a as u};