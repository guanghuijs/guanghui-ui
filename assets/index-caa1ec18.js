import{m as v}from"./mock-22270600.js";import{d,r as p,c as m,a as t,w as u,F as i,b as r,o as f,g as _,u as b,e as k}from"./index-4a9eefc9.js";import"@ghui/components";const z=d({__name:"index",setup(x){const l=p(40);return(g,e)=>{const o=r("h-progress-bar"),s=r("h-button"),n=r("h-card");return f(),m(i,null,[t(n,{title:"设置进度"},{default:u(()=>[t(o,{value:l.value,"onUpdate:value":e[0]||(e[0]=a=>l.value=a)},null,8,["value"]),_("div",null,[t(s,{onClick:e[1]||(e[1]=a=>l.value=b(v.mock)({"m|1-100":0}).m)},{default:u(()=>e[6]||(e[6]=[k("随机进度")])),_:1})])]),_:1}),t(n,{title:"大小、颜色、宽度设置"},{default:u(()=>[t(o,{value:l.value,"onUpdate:value":e[2]||(e[2]=a=>l.value=a),color:"red",size:70},null,8,["value"]),t(o,{value:l.value,"onUpdate:value":e[3]||(e[3]=a=>l.value=a),"bg-color":"black",color:"red",size:100},null,8,["value"]),t(o,{value:l.value,"onUpdate:value":e[4]||(e[4]=a=>l.value=a),width:20,size:150},null,8,["value"])]),_:1}),t(n,{title:"普通进度条"},{default:u(()=>[t(o,{value:l.value,"onUpdate:value":e[5]||(e[5]=a=>l.value=a),line:!0},null,8,["value"])]),_:1})],64)}}});export{z as default};
