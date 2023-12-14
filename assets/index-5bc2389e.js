import{R as H,r as s,B as A,aI as K,aA as W,D as R,a$ as X,b0 as J,aq as Q,ax as T}from"./index-300ab72b.js";import{C as U}from"./index-02d6c12f.js";import{u as D}from"./index-3832e9de.js";const Y=H.createContext(null),L=Y;var Z=globalThis&&globalThis.__rest||function(l,u){var r={};for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&u.indexOf(e)<0&&(r[e]=l[e]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(l);n<e.length;n++)u.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(l,e[n])&&(r[e[n]]=l[e[n]]);return r};const ee=(l,u)=>{var r;const{prefixCls:e,className:n,rootClassName:k,children:p,indeterminate:h=!1,style:E,onMouseEnter:x,onMouseLeave:i,skipGroup:g=!1,disabled:N}=l,o=Z(l,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:y,direction:P,checkbox:d}=s.useContext(A),t=s.useContext(L),{isFormItemInput:$}=s.useContext(K),w=s.useContext(W),C=(r=t?.disabled||N)!==null&&r!==void 0?r:w,f=s.useRef(o.value);s.useEffect(()=>{t?.registerValue(o.value)},[]),s.useEffect(()=>{if(!g)return o.value!==f.current&&(t?.cancelValue(f.current),t?.registerValue(o.value),f.current=o.value),()=>t?.cancelValue(o.value)},[o.value]);const c=y("checkbox",e),[I,O]=D(c),m=Object.assign({},o);t&&!g&&(m.onChange=function(){o.onChange&&o.onChange.apply(o,arguments),t.toggleOption&&t.toggleOption({label:p,value:o.value})},m.name=t.name,m.checked=t.value.includes(o.value));const S=R(`${c}-wrapper`,{[`${c}-rtl`]:P==="rtl",[`${c}-wrapper-checked`]:m.checked,[`${c}-wrapper-disabled`]:C,[`${c}-wrapper-in-form-item`]:$},d?.className,n,k,O),_=R({[`${c}-indeterminate`]:h},X,O),j=h?"mixed":void 0;return I(s.createElement(J,{component:"Checkbox",disabled:C},s.createElement("label",{className:S,style:Object.assign(Object.assign({},d?.style),E),onMouseEnter:x,onMouseLeave:i},s.createElement(U,Object.assign({"aria-checked":j},m,{prefixCls:c,className:_,disabled:C,ref:u})),p!==void 0&&s.createElement("span",null,p))))},te=s.forwardRef(ee),B=te;var ae=globalThis&&globalThis.__rest||function(l,u){var r={};for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&u.indexOf(e)<0&&(r[e]=l[e]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(l);n<e.length;n++)u.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(l,e[n])&&(r[e[n]]=l[e[n]]);return r};const se=(l,u)=>{const{defaultValue:r,children:e,options:n=[],prefixCls:k,className:p,rootClassName:h,style:E,onChange:x}=l,i=ae(l,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:g,direction:N}=s.useContext(A),[o,y]=s.useState(i.value||r||[]),[P,d]=s.useState([]);s.useEffect(()=>{"value"in i&&y(i.value||[])},[i.value]);const t=s.useMemo(()=>n.map(a=>typeof a=="string"||typeof a=="number"?{label:a,value:a}:a),[n]),$=a=>{d(v=>v.filter(b=>b!==a))},w=a=>{d(v=>[].concat(T(v),[a]))},C=a=>{const v=o.indexOf(a.value),b=T(o);v===-1?b.push(a.value):b.splice(v,1),"value"in i||y(b),x?.(b.filter(V=>P.includes(V)).sort((V,z)=>{const F=t.findIndex(G=>G.value===V),q=t.findIndex(G=>G.value===z);return F-q}))},f=g("checkbox",k),c=`${f}-group`,[I,O]=D(f),m=Q(i,["value","disabled"]),S=n.length?t.map(a=>s.createElement(B,{prefixCls:f,key:a.value.toString(),disabled:"disabled"in a?a.disabled:i.disabled,value:a.value,checked:o.includes(a.value),onChange:a.onChange,className:`${c}-item`,style:a.style,title:a.title},a.label)):e,_={toggleOption:C,value:o,disabled:i.disabled,name:i.name,registerValue:w,cancelValue:$},j=R(c,{[`${c}-rtl`]:N==="rtl"},p,h,O);return I(s.createElement("div",Object.assign({className:j,style:E},m,{ref:u}),s.createElement(L.Provider,{value:_},S)))},le=s.forwardRef(se),ne=s.memo(le),M=B;M.Group=ne;M.__ANT_CHECKBOX=!0;const ie=M;export{ie as C};