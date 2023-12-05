import{n as y,b as D,j as e,p as a,cg as z,q as r,a3 as k}from"./index-a27b517f.js";import{d}from"./dayjs.min-b4f73d41.js";import{T as c}from"./index-0b95890b.js";import{A as t}from"./index-d0870a41.js";import{D as A}from"./index-30ac3ecc.js";import{R as l}from"./index-bfad2427.js";import{I}from"./index-750a881d.js";import"./CheckOutlined-d0cdcd38.js";import"./styleChecker-73be246a.js";import"./index-0b295530.js";import"./index-29a2caf0.js";import"./addEventListener-568fcba3.js";function F({task:x}){const{title:o,reporter:m,assignee:h=[],tags:p=[],date:j,priority:f,description:g,attachments:v,comments:u=[]}=x,{colorInfo:n,colorWarning:N,colorSuccess:b}=D();return e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsx("div",{className:"item",children:e.jsx(c.Title,{level:4,children:o})}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Reporter"}),e.jsx(t,{shape:"circle",src:m,size:40})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Assignee"}),e.jsx(a,{children:h.map((s,i)=>e.jsx(t,{shape:"circle",src:s,size:40},i))})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Tag"}),e.jsx(a,{wrap:!0,children:p.map(s=>e.jsx(z,{color:n,children:s},s))})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Due Date"}),e.jsx(A,{bordered:!1,value:d(j)})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Priority"}),e.jsx("div",{children:e.jsx(l.Group,{defaultValue:f,children:e.jsxs(a,{children:[e.jsxs(l.Button,{value:"High",children:[e.jsx(r,{icon:"ic_rise",size:20,color:N}),e.jsx("span",{children:"High"})]}),e.jsxs(l.Button,{value:"Medium",children:[e.jsx(r,{icon:"ic_rise",size:20,color:b,className:"rotate-90"}),e.jsx("span",{children:"Medium"})]}),e.jsxs(l.Button,{value:"Low",children:[e.jsx(r,{icon:"ic_rise",size:20,color:n,className:"rotate-180"}),e.jsx("span",{children:"Low"})]})]})})})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Description"}),e.jsx(k.TextArea,{defaultValue:g})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Attachments"}),e.jsx(a,{wrap:!0,children:v?.map(s=>e.jsx(I,{src:s,width:62,height:62,className:"rounded-lg"},s))})]})]}),e.jsx("div",{className:"flex flex-col gap-4",style:{padding:"24px 20px 40px"},children:u?.map(({avatar:s,username:i,content:T,time:w})=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{src:s,size:40,className:"flex-shrink-0"}),e.jsxs("div",{className:"flex flex-grow flex-col flex-wrap gap-1 text-gray",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(c.Text,{children:i}),e.jsx(c.Text,{children:d(w).format("DD/MM/YYYY HH:mm")})]}),e.jsx("p",{children:T})]})]},i))})]})}const H=y.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 20px 40px;
  .item {
    display: flex;
    align-items: center;
  }
  .label {
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    width: 100px;
    flex-shrink: 0;
    color: rgb(99, 115, 129);
    height: 40px;
    line-height: 40px;
  }
`;export{F as default};
