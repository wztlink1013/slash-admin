import{cp as j,ce as h,x as n,j as e,p as u,h as f,a6 as i,a5 as l}from"./index-300ab72b.js";import{C as t}from"./index-45944291.js";import{d as b}from"./upload-avatar-130052b2.js";import"./format-number-9cb8c36d.js";import{R as r,C as s}from"./row-ecab1349.js";import{F as a}from"./index-9b8f61ad.js";import"./index-7a2abddd.js";import"./CheckOutlined-58eb4a47.js";import"./styleChecker-82bb5581.js";import"./progress-f88a63df.js";function P(){const{notification:c}=j.useApp(),{avatar:o,username:d,email:m}=h(),p={name:d,email:m,phone:n.phone.number(),address:n.location.county(),city:n.location.city(),code:n.location.zipCode(),about:n.lorem.paragraphs()},x=()=>{c.success({message:"Update success!",duration:3})};return e.jsxs(r,{gutter:[16,16],children:[e.jsx(s,{span:24,lg:8,children:e.jsxs(t,{className:"flex-col !px-6 !pb-10 !pt-20",children:[e.jsx(b,{defaultAvatar:o}),e.jsxs(u,{className:"py-6",children:[e.jsx("div",{children:"Public Profile"}),e.jsx(f,{size:"small"})]}),e.jsx(i,{type:"primary",danger:!0,children:"Delete User"})]})}),e.jsx(s,{span:24,lg:16,children:e.jsx(t,{children:e.jsxs(a,{layout:"vertical",initialValues:p,labelCol:{span:8},className:"w-full",children:[e.jsxs(r,{gutter:16,children:[e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Username",name:"name",children:e.jsx(l,{})})}),e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Email",name:"email",children:e.jsx(l,{})})})]}),e.jsxs(r,{gutter:16,children:[e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Phone",name:"phone",children:e.jsx(l,{})})}),e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Address",name:"address",children:e.jsx(l,{})})})]}),e.jsxs(r,{gutter:16,children:[e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"City",name:"city",children:e.jsx(l,{})})}),e.jsx(s,{span:12,children:e.jsx(a.Item,{label:"Code",name:"code",children:e.jsx(l,{})})})]}),e.jsx(a.Item,{label:"About",name:"about",children:e.jsx(l.TextArea,{})}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(i,{type:"primary",onClick:x,children:"Save Changes"})})]})})})]})}export{P as default};