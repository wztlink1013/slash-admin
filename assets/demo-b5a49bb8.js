import{r as h,j as d,d7 as m,d8 as y,d9 as f}from"./index-300ab72b.js";const p=(e,t=0)=>Array.from({length:e},(a,n)=>n).map(a=>({id:`item-${a+t}-${new Date().getTime()}`,content:`item ${a+t}`})),j=(e,t,a)=>{const n=Array.from(e),[r]=n.splice(t,1);return n.splice(a,0,r),n},I=(e,t,a,n)=>{const r=Array.from(e),o=Array.from(t),[c]=r.splice(a.index,1);o.splice(n.index,0,c);const s={};return s[a.droppableId]=r,s[n.droppableId]=o,s},u=8,C=(e,t)=>({userSelect:"none",padding:u*2,margin:`0 0 ${u}px 0`,background:e?"lightgreen":"grey",...t}),D=e=>({background:e?"lightblue":"lightgrey",padding:u,width:250});function S(){const[e,t]=h.useState([p(10),p(5,10)]),a=n=>{const{source:r,destination:o}=n;if(!o)return;const c=+r.droppableId,s=+o.droppableId;if(c===s){const i=j(e[c],r.index,o.index),l=[...e];l[c]=i,t(l)}else{const i=I(e[c],e[s],r,o),l=[...e];l[c]=i[c],l[s]=i[s],t(l.filter(g=>g.length))}};return d.jsxs("div",{children:[d.jsx("button",{type:"button",onClick:()=>{t([...e,[]])},children:"Add new group"}),d.jsx("button",{type:"button",onClick:()=>{t([...e,p(1)])},children:"Add new item"}),d.jsx("div",{style:{display:"flex"},children:d.jsx(m,{onDragEnd:()=>a,children:e.map((n,r)=>d.jsx(y,{droppableId:`${r}`,children:(o,c)=>d.jsxs("div",{ref:o.innerRef,style:D(c.isDraggingOver),...o.droppableProps,children:[n.map((s,i)=>d.jsx(f,{draggableId:s.id,index:i,children:(l,g)=>d.jsx("div",{ref:l.innerRef,...l.draggableProps,...l.dragHandleProps,style:C(g.isDragging,l.draggableProps.style),children:d.jsxs("div",{style:{display:"flex",justifyContent:"space-around"},children:[s.content,d.jsx("button",{type:"button",onClick:()=>{const x=[...e];x[r].splice(i,1),t(x.filter(b=>b.length))},children:"delete"})]})})},s.id)),o.placeholder]})},r))})})]})}export{S as default};