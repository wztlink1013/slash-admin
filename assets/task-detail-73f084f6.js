import{n as e,b as s,j as i,p as l,a3 as a,q as r,a5 as c}from"./index-bcedefc3.js";import{d as n}from"./dayjs.min-2f541945.js";import{T as d}from"./index-7a586451.js";import{A as t}from"./index-bb029e4a.js";import{D as x}from"./index-d29f23fe.js";import{R as m}from"./index-606f6071.js";import{I as o}from"./index-2de50180.js";import"./CheckOutlined-e33d79d3.js";import"./styleChecker-c8f87e84.js";import"./index-a36c3dfe.js";import"./index-5f03047c.js";import"./addEventListener-674fc20a.js";function j({task:e}){const{title:j,reporter:p,assignee:f=[],tags:v=[],date:g,priority:u,description:N,attachments:b,comments:w=[]}=e,{colorInfo:y,colorWarning:z,colorSuccess:D}=s();return i.jsxs(i.Fragment,{children:[i.jsxs(h,{children:[i.jsx("div",{className:"item",children:i.jsx(d.Title,{level:4,children:j})}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Reporter"}),i.jsx(t,{shape:"circle",src:p,size:40})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Assignee"}),i.jsx(l,{children:f.map(((e,s)=>i.jsx(t,{shape:"circle",src:e,size:40},s)))})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Tag"}),i.jsx(l,{wrap:!0,children:v.map((e=>i.jsx(a,{color:y,children:e},e)))})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Due Date"}),i.jsx(x,{bordered:!1,value:n(g)})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Priority"}),i.jsx("div",{children:i.jsx(m.Group,{defaultValue:u,children:i.jsxs(l,{children:[i.jsxs(m.Button,{value:"High",children:[i.jsx(r,{icon:"ic_rise",size:20,color:z}),i.jsx("span",{children:"High"})]}),i.jsxs(m.Button,{value:"Medium",children:[i.jsx(r,{icon:"ic_rise",size:20,color:D,className:"rotate-90"}),i.jsx("span",{children:"Medium"})]}),i.jsxs(m.Button,{value:"Low",children:[i.jsx(r,{icon:"ic_rise",size:20,color:y,className:"rotate-180"}),i.jsx("span",{children:"Low"})]})]})})})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Description"}),i.jsx(c.TextArea,{defaultValue:N})]}),i.jsxs("div",{className:"item",children:[i.jsx("div",{className:"label",children:"Attachments"}),i.jsx(l,{wrap:!0,children:b?.map((e=>i.jsx(o,{src:e,width:62,height:62,className:"rounded-lg"},e)))})]})]}),i.jsx("div",{className:"flex flex-col gap-4",style:{padding:"24px 20px 40px"},children:w?.map((({avatar:e,username:s,content:l,time:a})=>i.jsxs("div",{className:"flex gap-4",children:[i.jsx(t,{src:e,size:40,className:"flex-shrink-0"}),i.jsxs("div",{className:"flex flex-grow flex-col flex-wrap gap-1 text-gray",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx(d.Text,{children:s}),i.jsx(d.Text,{children:n(a).format("DD/MM/YYYY HH:mm")})]}),i.jsx("p",{children:l})]})]},s)))})]})}const h=e.div`
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
`;export{j as default};
