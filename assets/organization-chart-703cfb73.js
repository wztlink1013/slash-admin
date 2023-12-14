import{j as r,b6 as o,C as i,b7 as a,b as e}from"./.pnpm-05c560be.js";import{a as t,c as l,T as n}from"./index-46220b14.js";function d({organizations:a=[]}){const e=t(),{themeMode:d}=l();return r.jsx(o,{lineWidth:"1px",lineColor:d===n.Light?e.colorPrimaryBorder:e.colorPrimary,lineBorderRadius:"24px",label:r.jsx(s,{$textColor:d===n.Light?e.colorPrimaryTextActive:e.colorPrimaryText,$backgroundColor:i(e.colorPrimary).alpha(.08).toString(),$borderColor:i(e.colorPrimaryBorder).alpha(.24).toString(),children:"Root"}),children:a.map((o=>r.jsx(c,{organization:o},o.id)))})}function c({organization:{name:o,children:e}}){const d=t(),{themeMode:x}=l();return r.jsx(a,{label:r.jsx(s,{$textColor:x===n.Light?d.colorPrimaryTextActive:d.colorPrimaryText,$backgroundColor:i(d.colorPrimary).alpha(.08).toString(),$borderColor:i(d.colorPrimaryBorder).alpha(.24).toString(),children:o}),children:e?.map((o=>r.jsx(c,{organization:o},o.id)))})}const s=e.div`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  position: relative;
  z-index: 0;
  padding: 16px;
  border-radius: 12px;
  display: inline-flex;
  text-transform: capitalize;
  color: ${r=>r.$textColor};
  background-color: ${r=>r.$backgroundColor};
  border: 1px solid ${r=>r.$borderColor};
`;export{d as default};
