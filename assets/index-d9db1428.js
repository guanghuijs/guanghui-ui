import{d as g,o as y,c as k,m as z,e as l,x as F,_ as v,z as B,r as b,l as N,q as x,v as S,u as a,j as T,w as t,n as q,h as E,T as V,a as o,y as I,F as Y,b as w}from"./index-0d1ede7e.js";/* empty css                                                              */import"./mock-22270600.js";const $={name:"HButton"},A=g({...$,props:{type:{}},setup(d){return(s,i)=>(y(),k("div",{class:F(["btn",s.type])},[z(s.$slots,"default",{},()=>[l("按钮")],!0)],2))}}),r=v(A,[["__scopeId","data-v-06e2e6bb"]]),H=g({__name:"index",props:{message:{default:"消息通知"},wait:{default:2e3},bgColor:{},type:{default:"primary"},position:{default:"top"}},setup(d){B(f=>({c9dc0e94:p.value,"3b43a6ca":C.value}));const s=d,i=b(),u=b(!1);N(()=>{u.value=!0,s.wait!==-1&&(i.value=setTimeout(()=>{u.value=!1},s.wait))});const C=x(()=>s.bgColor?s.bgColor:s.type==="primary"?"var(--theme)":s.type==="success"?"#07C160":s.type==="warning"?"#FF976A":s.type==="danger"?"#EE0A24":"var(--theme)"),p=x(()=>s.position==="top"?"translateY(-1rem)":"translateY(1rem)");return S(()=>{clearTimeout(a(i))}),(f,e)=>(y(),T(V,null,{default:t(()=>[u.value?(y(),k("div",{key:0,class:F(["notify-main",f.position])},q(f.message),3)):E("",!0)]),_:1}))}}),j=v(H,[["__scopeId","data-v-d07ffb12"]]),m=d=>{var u;console.log(111),(u=document.querySelector("#notify-cont"))==null||u.remove();const s=document.createElement("div");s.id="notify-cont";const i=o(j,d);I(i,s),document.querySelector("#app").appendChild(s)},D=()=>{var d;(d=document.querySelector("#notify-cont"))==null||d.remove()},M=g({__name:"index",setup(d){const s=()=>{m({message:"通知"})},i=(f,e)=>{m({message:"通知",type:e})},u=(f,e)=>{m({message:"通知",bgColor:e})},C=(f,e)=>{m({message:"通知",position:e})},p=(f,e)=>{m({message:"通知",wait:e})};return(f,e)=>{const _=w("h-card"),c=w("h-space");return y(),k(Y,null,[o(_,{title:"基础用法"},{default:t(()=>[o(a(r),{onClick:s},{default:t(()=>[l("按钮")]),_:1})]),_:1}),o(_,{title:"使用类型预设"},{default:t(()=>[o(c,{size:10},{default:t(()=>[o(a(r),{onClick:i},{default:t(()=>[l("主要通知")]),_:1}),o(a(r),{onClick:e[0]||(e[0]=n=>i(n,"success"))},{default:t(()=>[l("成功通知")]),_:1}),o(a(r),{onClick:e[1]||(e[1]=n=>i(n,"warning"))},{default:t(()=>[l("警告通知")]),_:1}),o(a(r),{onClick:e[2]||(e[2]=n=>i(n,"danger"))},{default:t(()=>[l("错误通知")]),_:1})]),_:1})]),_:1}),o(_,{title:"自定义背景"},{default:t(()=>[o(c,{size:10},{default:t(()=>[o(a(r),{onClick:e[3]||(e[3]=n=>u(n,"red"))},{default:t(()=>[l("红色")]),_:1}),o(a(r),{onClick:e[4]||(e[4]=n=>u(n,"blue"))},{default:t(()=>[l("蓝色")]),_:1}),o(a(r),{onClick:e[5]||(e[5]=n=>u(n,"gold"))},{default:t(()=>[l("金黄色")]),_:1})]),_:1})]),_:1}),o(_,{title:"自定义位置"},{default:t(()=>[o(c,{size:10},{default:t(()=>[o(a(r),{onClick:e[6]||(e[6]=n=>C(n,"top"))},{default:t(()=>[l("顶部弹出")]),_:1}),o(a(r),{onClick:e[7]||(e[7]=n=>C(n,"bottom"))},{default:t(()=>[l("底部弹出")]),_:1})]),_:1})]),_:1}),o(_,{title:"自定消失时间"},{default:t(()=>[o(c,{size:10},{default:t(()=>[o(a(r),{onClick:e[8]||(e[8]=n=>p(n,500))},{default:t(()=>[l("0.5s")]),_:1}),o(a(r),{onClick:e[9]||(e[9]=n=>p(n,1e3))},{default:t(()=>[l("1s")]),_:1}),o(a(r),{onClick:e[10]||(e[10]=n=>p(n,-1))},{default:t(()=>[l("不消失")]),_:1})]),_:1})]),_:1}),o(_,{title:"配合隐藏钩子函数一起使用"},{default:t(()=>[o(c,{size:10},{default:t(()=>[o(a(r),{onClick:e[11]||(e[11]=n=>p(n,-1))},{default:t(()=>[l("不消失")]),_:1}),o(a(r),{onClick:a(D)},{default:t(()=>[l("消失")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}}});const K=v(M,[["__scopeId","data-v-5d2e49c9"]]);export{K as default};
