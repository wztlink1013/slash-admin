import{b as e,j as r,aA as o,aB as t,aC as n,aD as i,r as a,au as s,a1 as p}from"./.pnpm-05c560be.js";import{T as d,a as c,c as h}from"./index-46220b14.js";import"./highlight-2ca506c6.js";const l=(e,r)=>{const o=`fontSizeHeading${e}`,t=`lineHeightHeading${e}`;return{margin:0,color:r.colorTextHeading,fontWeight:800,fontSize:r[o],lineHeight:r[t]}},m=e.div`
  display: grid;
  // Text
  h1 {
    ${e=>l(1,e.$token)};
  }
  h2 {
    ${e=>l(2,e.$token)};
  }
  h3 {
    ${e=>l(3,e.$token)};
  }
  h4 {
    ${e=>l(4,e.$token)};
  }
  h5 {
    ${e=>l(5,e.$token)};
  }
  a {
    color: ${e=>e.$token.colorPrimary};
  }
  img {
    border-radius: 4px;
  }
  br {
    display: grid;
    content: '';
    margin-top: 0.75em;
  }

  // Divider
  hr {
    margin: 0;
    border-width: 1;
    border-style: solid;
  }

  // List
  ul,
  ol {
    margin: 0;
    li {
      line-height: 2;
      display: flex;
      align-items: center;
    }
  }

  // Blockquote
  blockquote {
    line-height: 1.5;
    font-size: 1.5em;
    margin: 40px auto;
    position: relative;
    padding: 24px 24px 24px 64px;
    border-radius: 16px;
    background-color: #f4f6f8;
    color: #637381;
    p,
    span {
      margin-bottom: 0;
      font-size: inherit;
      font-family: inherit;
    }
    &::before {
      left: 16px;
      top: -8px;
      display: block;
      font-size: 3em;
      position: absolute;
      content: '“';
    }
  }

  // Code Block
  pre,
  pre > code {
    font-size: 16px;
    overflow-x: auto;
    white-space: pre;
    border-radius: 8px;
  }
  code {
    font-size: 14px;
    border-radius: 4px;
    white-space: pre;
    padding: 0px;
    background-color: ${e=>e.$thememode===d.Light?"#161c24":"#919eab29"};
  }

  // Table
  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #919eab33;
    th,
    td {
      padding: 8px;
      border: 1px solid #919eab33;
    }
    tbody tr:nth-of-type(odd) {
      background-color: ${e=>e.$thememode===d.Light?"#f4f6f8":"#919eab1f "};
    }
  }

  // Checkbox
  input {
    margin-right: 10px;
    &[type='checkbox'] {
      position: relative;
      cursor: pointer;
      &::before {
        content: '';
        top: -2px;
        left: -2px;
        width: 17px;
        height: 17px;
        border-radius: 3px;
        position: absolute;
        background-color: #f4f6f8;
      }
      &:checked {
        &::before {
          background-color: ${e=>e.$token.colorPrimary};
        }
        &::after {
          content: '';
          top: 1px;
          left: 5px;
          width: 4px;
          height: 9px;
          position: absolute;
          transform: rotate(45deg);
          border: solid white;
          border-width: 0 2px 2px 0;
        }
      }
    }
  }
`;function g({children:e}){const a=c(),{themeMode:s}=h();return r.jsx(m,{$token:a,$thememode:s,children:r.jsx(o,{rehypePlugins:[t,n],remarkPlugins:[[i,{singleTilde:!1}]],children:e})})}function b(){const[e]=a.useState("\n# h1\n\n<br/>\n\n## h2\n\n<br/>\n\n**Paragraph** Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n\n<br/>\n\n[Link (https://www.google.com/)](https://www.google.com/)\n\n<br/>\n\n###### Lists\n\n<br/>\n\n- [x] Write the press release\n- [ ] Update the website\n- [ ] Contact the media\n\n<br/>\n\n---\n\n<br/>\n\n###### A table:\n\n<br/>\n\n| Syntax      | Description | Test Text     |\n| :---        |    :----:   |          ---: |\n| Header      | Title       | Here's this   |\n| Paragraph   | Text        | And more      |\n\n<br/>\n\n```tsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport ReactMarkdown from 'react-markdown';\nimport rehypeHighlight from 'rehype-highlight';\n\nReactDOM.render(\n  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,\n  document.querySelector('#content')\n);\n```\n\n<br/>\n\n![cover](https://res.cloudinary.com/trinhmai/image/upload/v1660897321/_minimal_mock/_Cover/cover_19.jpg)\n\n> A block quote with ~~strikethrough~~ and a URL: [https://reactjs.org](https://reactjs.org).\n\n"),{colorPrimary:o}=c();return r.jsxs(r.Fragment,{children:[r.jsx(s.Link,{href:"https://github.com/remarkjs/react-markdown",style:{color:o},className:"mb-4 block",children:"https://github.com/remarkjs/react-markdown"}),r.jsx(p,{title:"Mardown content",children:r.jsx(g,{children:e})})]})}export{b as default};
