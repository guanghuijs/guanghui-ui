import{d as f,r as p,l as k,v as w,u as d,o as i,j as g,w as c,c as m,g as _,x as h,h as V,n as z,T as U,_ as C,a as t,y as $,z as B,A as I,F as y,f as S,b as T}from"./index-0d1ede7e.js";/* empty css                                                              */import{H as x}from"./icon-94dbae62.js";import"./mock-22270600.js";const N={key:0,class:"toast-out"},b={class:"toast-main"},H=f({__name:"index",props:{message:{type:String,default:"轻提示"},icon:String,wait:{type:Number,default:2e3}},setup(s){const o=s,l=p(),u=p(!1);return k(()=>{u.value=!0,o.wait!==-1&&(l.value=setTimeout(()=>{u.value=!1},o.wait))}),w(()=>{clearTimeout(d(l))}),(a,e)=>(i(),g(U,null,{default:c(()=>[u.value?(i(),m("div",N,[_("div",b,[s.icon?(i(),m("i",{key:0,class:h(`iconfont icon-${s.icon}`)},null,2)):V("",!0),_("p",null,z(s.message),1)])])):V("",!0)]),_:1}))}}),M=C(H,[["__scopeId","data-v-651ea9e1"]]),q=s=>{var u;(u=document.querySelector("#toast-cont"))==null||u.remove();const o=document.createElement("div");o.id="toast-cont";const l=t(M,s);$(l,o),document.querySelector("#app").appendChild(o)},E={class:"container"},F={name:"HRate"},R=f({...F,props:{modelValue:{},size:{default:"0.4rem"},voidIcon:{default:"icon-star_1_act"},icon:{default:"icon-star_1_act"},voidColor:{default:"#aaa"},color:{default:"var(--theme)"},count:{default:5},cancelMode:{type:Boolean,default:!1}},emits:["change","update:modelValue"],setup(s,{emit:o}){B(e=>({"98825e54":e.size}));const l=o,u=s;I(()=>u.modelValue,e=>{l("update:modelValue",e)});const a=e=>{e!==u.modelValue?(l("update:modelValue",e),l("change",e)):u.cancelMode&&(l("update:modelValue",e-1),l("change",e-1))};return(e,n)=>(i(),m("div",E,[(i(!0),m(y,null,S(e.count,v=>(i(),g(d(x),{name:v<=e.modelValue?e.icon:e.voidIcon,color:v<=e.modelValue?e.color:e.voidColor,size:e.size,onClick:j=>a(v),key:v},null,8,["name","color","size","onClick"]))),128))]))}});const r=C(R,[["__scopeId","data-v-9c35496d"]]),J=f({__name:"index",setup(s){const o=p(1),l=()=>{q({message:`评分为${d(o)}`})};return(u,a)=>{const e=T("h-card");return i(),m(y,null,[t(e,{title:`简单使用(${o.value})`},{default:c(()=>[t(d(r),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n)},null,8,["modelValue"])]),_:1},8,["title"]),t(e,{title:"自定义评分大小"},{default:c(()=>[t(d(r),{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=n=>o.value=n),count:10},null,8,["modelValue"])]),_:1}),t(e,{title:"自定义图标"},{default:c(()=>[t(d(r),{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=n=>o.value=n),"void-icon":"icon-flower_1",icon:"icon-flower_1_act"},null,8,["modelValue"])]),_:1}),t(e,{title:"自定义图标大小"},{default:c(()=>[t(d(r),{modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=n=>o.value=n),"void-icon":"icon-love",icon:"icon-love_act",size:"0.8rem"},null,8,["modelValue"])]),_:1}),t(e,{title:"监听change事件"},{default:c(()=>[t(d(r),{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=n=>o.value=n),"void-icon":"icon-love",icon:"icon-love_act",onChange:l},null,8,["modelValue"])]),_:1}),t(e,{title:"可取消模式"},{default:c(()=>[t(d(r),{modelValue:o.value,"onUpdate:modelValue":a[5]||(a[5]=n=>o.value=n),"void-icon":"icon-love",icon:"icon-love_act",onChange:l,"cancel-mode":!0},null,8,["modelValue"])]),_:1})],64)}}});export{J as default};
