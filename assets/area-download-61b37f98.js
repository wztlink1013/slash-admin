import{r as o,j as a}from"./index-300ab72b.js";import{C as l}from"./index-45944291.js";import{u as i,C as n}from"./useChart-76391e64.js";import{T as m}from"./index-7a2abddd.js";import{S as c}from"./index-828b1f53.js";import"./CheckOutlined-58eb4a47.js";import"./styleChecker-82bb5581.js";import"./useIcons-8923f6e6.js";import"./List-a03ce29b.js";function g(){const[e,t]=o.useState("2023"),r={2022:[{name:"China",data:[10,41,35,51,49,61,69,91,148,35,51]},{name:"America",data:[10,34,13,56,77,88,99,45,13,56,77]}],2023:[{name:"China",data:[51,35,41,10,91,69,62,148,91,35,51]},{name:"America",data:[56,13,34,10,77,99,88,45,13,56,77]}]};return a.jsxs(l,{className:"flex-col",children:[a.jsxs("header",{className:"flex w-full justify-between self-start",children:[a.jsx(m.Title,{level:5,children:"Area Installed"}),a.jsx(c,{size:"small",defaultValue:e,onChange:s=>t(s),options:[{value:2023,label:"2023"},{value:2022,label:"2022"}]})]}),a.jsx("main",{className:"w-full",children:a.jsx(p,{series:r[e]})})]})}function p({series:e}){const t=i({xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","Jut","Aug","Sep","Oct","Nov","Dec"]},tooltip:{}});return a.jsx(n,{type:"area",series:e,options:t,height:300})}export{g as default};