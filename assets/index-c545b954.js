import{b as l,j as o,az as t,r as e,au as r,a1 as s}from"./.pnpm-05c560be.js";import"./highlight-2ca506c6.js";import{a as q,c as a}from"./index-56568590.js";const i=(l,o)=>{const t=`fontSizeHeading${l}`,e=`lineHeightHeading${l}`;return{margin:0,color:o.colorTextHeading,fontWeight:800,fontSize:o[t],lineHeight:o[e]}},n=l.div`
  h1 {
    ${l=>i(1,l.$token)};
  }
  h2 {
    ${l=>i(2,l.$token)};
  }
  h3 {
    ${l=>i(3,l.$token)};
  }
  h4 {
    ${l=>i(4,l.$token)};
  }
  h5 {
    ${l=>i(5,l.$token)};
  }
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  border: 1px solid rgba(119, 145, 170, 0.2);
  & .ql-container.ql-snow {
    border: none;
    line-height: 1.6;
    font-weight: 400;
    font-size: 0.875rem;
  }
  & .ql-editor {
    min-height: 160px;
    max-height: 640px;
    background-color: rgba(145, 158, 171, 0.08);
    &.ql-blank::before {
      font-style: normal;
      color: rgb(145, 158, 171);
    }
    & pre.ql-syntax {
      border-radius: 8px;
      line-height: 1.57143;
      font-size: 0.875rem;
      font-family: 'Public Sans', sans-serif;
      font-weight: 400;
      padding: 16px;
      border-radius: 8px;
      background-color: rgb(22, 28, 36);
    }
  }
`,c=l.div`
  & .ql-snow.ql-toolbar button:hover .ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: ${l=>l.$token.colorPrimary};
  }
  & .ql-snow.ql-toolbar button:hover,
  .ql-snow .ql-toolbar button:hover,
  .ql-snow.ql-toolbar button:focus,
  .ql-snow .ql-toolbar button:focus,
  .ql-snow.ql-toolbar button.ql-active,
  .ql-snow .ql-toolbar button.ql-active,
  .ql-snow.ql-toolbar .ql-picker-label:hover,
  .ql-snow .ql-toolbar .ql-picker-label:hover,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  .ql-snow.ql-toolbar .ql-picker-item:hover,
  .ql-snow .ql-toolbar .ql-picker-item:hover,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: ${l=>l.$token.colorPrimary};
  }

  & .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke,
  .ql-snow.ql-toolbar button:focus .ql-stroke,
  .ql-snow .ql-toolbar button:focus .ql-stroke,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: ${l=>l.$token.colorPrimary};
  }

  & .ql-stroke {
    stroke: ${l=>l.$token.colorTextBase};
  }
  & .ql-fill,
  .ql-stroke.ql-fill {
    fill: ${l=>l.$token.colorTextBase};
  }

  & .ql-toolbar.ql-snow {
    border: none;
    border-bottom: 1px solid rgba(119, 145, 170, 0.2);
    // Button
    & button {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }
    & button svg,
    span svg {
      width: 20px;
      height: 20px;
    }
    & .ql-picker-label {
      border-radius: 4px;
      border-color: transparent !important;
      background-color: ${l=>l.$token.colorBgContainerDisabled};
      color: ${l=>l.$token.colorTextBase};
    }
    & .ql-picker-options {
      margin-top: 4px;
      border: none;
      max-height: 200px;
      overflow: auto;
      border-radius: 8px;
      color: ${l=>l.$token.colorTextBase};
      background-color: ${l=>l.$token.colorBgContainer};
    }
  }
`,b=["Heading 1","Heading 2","Heading 3","Heading 4","Heading 5","Heading 6"],u=["align","background","blockquote","bold","bullet","code","code-block","color","direction","font","formula","header","image","indent","italic","link","list","script","size","strike","table","underline","video"];function m({id:l,isSimple:t,...e}){const r=q(),{themeMode:s}=a();return o.jsx(c,{$token:r,$thememode:s,...e,children:o.jsxs("div",{id:l,children:[o.jsx("div",{className:"ql-formats",children:o.jsxs("select",{className:"ql-header",defaultValue:"",children:[b.map(((l,t)=>o.jsx("option",{value:t+1,children:l},l))),o.jsx("option",{value:"",children:"Normal"})]})}),o.jsxs("div",{className:"ql-formats",children:[o.jsx("button",{type:"button",className:"ql-bold"}),o.jsx("button",{type:"button",className:"ql-italic"}),o.jsx("button",{type:"button",className:"ql-underline"}),o.jsx("button",{type:"button",className:"ql-strike"})]}),!t&&o.jsxs("div",{className:"ql-formats",children:[o.jsx("select",{className:"ql-color"}),o.jsx("select",{className:"ql-background"})]}),o.jsxs("div",{className:"ql-formats",children:[o.jsx("button",{type:"button",className:"ql-list",value:"ordered"}),o.jsx("button",{type:"button",className:"ql-list",value:"bullet"}),!t&&o.jsx("button",{type:"button",className:"ql-indent",value:"-1"}),!t&&o.jsx("button",{type:"button",className:"ql-indent",value:"+1"})]}),!t&&o.jsxs("div",{className:"ql-formats",children:[o.jsx("button",{type:"button",className:"ql-script",value:"super"}),o.jsx("button",{type:"button",className:"ql-script",value:"sub"})]}),!t&&o.jsxs("div",{className:"ql-formats",children:[o.jsx("button",{type:"button",className:"ql-code-block"}),o.jsx("button",{type:"button",className:"ql-blockquote"})]}),o.jsxs("div",{className:"ql-formats",children:[o.jsx("button",{type:"button",className:"ql-direction",value:"rtl"}),o.jsx("select",{className:"ql-align"})]}),o.jsxs("div",{className:"ql-formats",children:[o.jsx("button",{type:"button",className:"ql-link"}),o.jsx("button",{type:"button",className:"ql-image"}),o.jsx("button",{type:"button",className:"ql-video"})]}),o.jsxs("div",{className:"ql-formats",children:[!t&&o.jsx("button",{type:"button",className:"ql-formula"}),o.jsx("button",{type:"button",className:"ql-clean"})]})]})})}function d({id:l="slash-quill",sample:e=!1,...r}){const s=q(),{themeMode:i}=a(),c={toolbar:{container:`#${l}`},history:{delay:500,maxStack:100,userOnly:!0},syntax:!0,clipboard:{matchVisual:!1}};return o.jsxs(n,{$token:s,$thememode:i,children:[o.jsx(m,{id:l,isSimple:e}),o.jsx(t,{modules:c,formats:u,...r,placeholder:"Write something awesome..."})]})}function k(){const[l,t]=e.useState(""),[a,i]=e.useState(""),{colorPrimary:n}=q();return o.jsxs(o.Fragment,{children:[o.jsx(r.Link,{href:"https://github.com/zenoamaro/react-quill",style:{color:n},className:"mb-4 block",children:"https://github.com/zenoamaro/react-quill"}),o.jsx(s,{title:"Editor Simple",children:o.jsx(d,{id:"sample-editor",sample:!0,value:l,onChange:t})}),o.jsx("div",{className:"h-10"}),o.jsx(s,{title:"Editor Full",children:o.jsx(d,{id:"full-editor",value:a,onChange:i})})]})}export{k as default};
