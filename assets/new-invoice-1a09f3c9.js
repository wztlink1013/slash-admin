import{j as e,y as o,a3 as c,p as d,cd as n,I as l}from"./index-300ab72b.js";import{T as p}from"./Table-c3d2cd32.js";import{C as m}from"./index-45944291.js";import{T as y}from"./index-7a2abddd.js";import"./styleChecker-82bb5581.js";import"./addEventListener-628f0fa6.js";import"./List-a03ce29b.js";import"./useIcons-8923f6e6.js";import"./CheckOutlined-58eb4a47.js";import"./Pagination-d24aefe3.js";import"./index-828b1f53.js";import"./index-5bc2389e.js";import"./index-02d6c12f.js";import"./index-3832e9de.js";import"./index-7917213b.js";import"./index-5fe19193.js";import"./iconUtil-990f0693.js";import"./extendsObject-1e0cd48d.js";function b(){const a=[{title:"InvoiceId",dataIndex:"id",key:"id",render:t=>e.jsx("span",{children:t})},{title:"Category",dataIndex:"category",key:"category"},{title:"Price",dataIndex:"price",key:"price",render:t=>e.jsx("span",{children:t})},{title:"Status",key:"status",dataIndex:"status",render:t=>{const r=t;let i="success";return r==="Progress"&&(i="gold"),r==="Out of Date"&&(i="red"),e.jsx(c,{color:i,children:r})}},{title:"Action",key:"action",render:()=>e.jsx(d,{size:"middle",children:e.jsx(n,{children:e.jsx(l,{icon:"fontisto:more-v-a"})})})}],s=[{key:"1",id:"INV-1990",category:"Android",price:"$83.74",status:"Paid"},{key:"2",id:"INV-1991",category:"Mac",price:"$97.14",status:"Out of Date"},{key:"3",id:"INV-1992",category:"Windows",price:"$68.71",status:"Progress"},{key:"4",id:"INV-1993",category:"Android",price:"$85.21",status:"Paid"},{key:"5",id:"INV-1994",category:"Mac",price:"$53.17",status:"Paid"}];return e.jsxs(m,{className:"flex-col",children:[e.jsx("header",{className:"self-start",children:e.jsx(y.Title,{level:5,children:"New Invoice"})}),e.jsx("main",{className:"w-full",children:e.jsx(o,{children:e.jsx(p,{columns:a,dataSource:s})})})]})}export{b as default};