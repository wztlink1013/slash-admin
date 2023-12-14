import{b as e,j as s,au as i,aY as a,H as l,bd as c,bb as r,aF as n,W as d,aU as t}from"./.pnpm-05c560be.js";import{a as x,P as m,S as h}from"./index-46220b14.js";function o({task:e}){const{title:o,reporter:p,assignee:v=[],tags:f=[],date:g,priority:u,description:N,attachments:b,comments:w=[]}=e,{colorInfo:y,colorWarning:z,colorSuccess:D}=x();return s.jsxs(s.Fragment,{children:[s.jsxs(j,{children:[s.jsx("div",{className:"item",children:s.jsx(i.Title,{level:4,children:o})}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Reporter"}),s.jsx(a,{shape:"circle",src:p,size:40})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Assignee"}),s.jsx(l,{children:v.map(((e,i)=>s.jsx(a,{shape:"circle",src:e,size:40},i)))})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Tag"}),s.jsx(l,{wrap:!0,children:f.map((e=>s.jsx(m,{color:y,children:e},e)))})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Due Date"}),s.jsx(c,{bordered:!1,value:r(g)})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Priority"}),s.jsx("div",{children:s.jsx(n.Group,{defaultValue:u,children:s.jsxs(l,{children:[s.jsxs(n.Button,{value:"High",children:[s.jsx(h,{icon:"ic_rise",size:20,color:z}),s.jsx("span",{children:"High"})]}),s.jsxs(n.Button,{value:"Medium",children:[s.jsx(h,{icon:"ic_rise",size:20,color:D,className:"rotate-90"}),s.jsx("span",{children:"Medium"})]}),s.jsxs(n.Button,{value:"Low",children:[s.jsx(h,{icon:"ic_rise",size:20,color:y,className:"rotate-180"}),s.jsx("span",{children:"Low"})]})]})})})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Description"}),s.jsx(d.TextArea,{defaultValue:N})]}),s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"label",children:"Attachments"}),s.jsx(l,{wrap:!0,children:b?.map((e=>s.jsx(t,{src:e,width:62,height:62,className:"rounded-lg"},e)))})]})]}),s.jsx("div",{className:"flex flex-col gap-4",style:{padding:"24px 20px 40px"},children:w?.map((({avatar:e,username:l,content:c,time:n})=>s.jsxs("div",{className:"flex gap-4",children:[s.jsx(a,{src:e,size:40,className:"flex-shrink-0"}),s.jsxs("div",{className:"flex flex-grow flex-col flex-wrap gap-1 text-gray",children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx(i.Text,{children:l}),s.jsx(i.Text,{children:r(n).format("DD/MM/YYYY HH:mm")})]}),s.jsx("p",{children:c})]})]},l)))})]})}const j=e.div`
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
`;export{o as default};
