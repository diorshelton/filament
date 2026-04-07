import{j as i}from"./jsx-runtime-Z5uAzocK.js";import{r as o,o as ee}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";function C(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function re(...e){return n=>{let a=!1;const t=e.map(r=>{const s=C(r,n);return!a&&typeof s=="function"&&(a=!0),s});if(a)return()=>{for(let r=0;r<t.length;r++){const s=t[r];typeof s=="function"?s():C(e[r],null)}}}}var ne=Symbol.for("react.lazy"),j=ee[" use ".trim().toString()];function te(e){return typeof e=="object"&&e!==null&&"then"in e}function U(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===ne&&"_payload"in e&&te(e._payload)}function ae(e){const n=oe(e),a=o.forwardRef((t,r)=>{let{children:s,...d}=t;U(s)&&typeof j=="function"&&(s=j(s._payload));const l=o.Children.toArray(s),u=l.find(le);if(u){const p=u.props.children,X=l.map(B=>B===u?o.Children.count(p)>1?o.Children.only(null):o.isValidElement(p)?p.props.children:null:B);return i.jsx(n,{...d,ref:r,children:o.isValidElement(p)?o.cloneElement(p,void 0,X):null})}return i.jsx(n,{...d,ref:r,children:s})});return a.displayName=`${e}.Slot`,a}var se=ae("Slot");function oe(e){const n=o.forwardRef((a,t)=>{let{children:r,...s}=a;if(U(r)&&typeof j=="function"&&(r=j(r._payload)),o.isValidElement(r)){const d=de(r),l=ce(s,r.props);return r.type!==o.Fragment&&(l.ref=t?re(t,d):d),o.cloneElement(r,l)}return o.Children.count(r)>1?o.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var ie=Symbol("radix.slottable");function le(e){return o.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ie}function ce(e,n){const a={...n};for(const t in n){const r=e[t],s=n[t];/^on[A-Z]/.test(t)?r&&s?a[t]=(...l)=>{const u=s(...l);return r(...l),u}:r&&(a[t]=r):t==="style"?a[t]={...r,...s}:t==="className"&&(a[t]=[r,s].filter(Boolean).join(" "))}return{...e,...a}}function de(e){var t,r;let n=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,a=n&&"isReactWarning"in n&&n.isReactWarning;return a?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,a=n&&"isReactWarning"in n&&n.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}function c({variant:e="primary",size:n="md",asChild:a=!1,className:t,children:r,...s}){const d=a?se:"button",l=["btn",`btn--${e}`,`btn--${n}`,t].filter(Boolean).join(" ");return i.jsx(d,{className:l,...s,children:r})}c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger" | "info" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"info"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["ButtonHTMLAttributes"]};const fe={title:"Filament/Button",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","info","ghost"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},m={args:{children:"Publish tokens",variant:"primary",size:"md",disabled:!1,asChild:!1}},f={args:{children:"Publish tokens",variant:"secondary",size:"md"}},h={args:{children:"Publish tokens",variant:"danger",size:"md"}},g={args:{children:"Publish tokens",variant:"info",size:"md"}},y={args:{children:"Publish tokens",variant:"ghost",size:"md"}},b={render:()=>i.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[i.jsx(c,{variant:"primary",children:"Primary"}),i.jsx(c,{variant:"secondary",children:"Secondary"}),i.jsx(c,{variant:"danger",children:"Danger"}),i.jsx(c,{variant:"info",children:"Info"}),i.jsx(c,{variant:"ghost",children:"Ghost"})]})},v={args:{children:"Disabled",variant:"primary",size:"md",disabled:!0}},x={render:()=>i.jsx(c,{variant:"primary",size:"md",asChild:!0,children:i.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"View on GitHub"})})},S={render:()=>i.jsx(c,{variant:"ghost",size:"sm",asChild:!0,children:i.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"GitHub"})})};var P,z,k;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "primary",
    size: "md",
    disabled: false,
    asChild: false
  }
}`,...(k=(z=m.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var _,E,A;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "secondary",
    size: "md"
  }
}`,...(A=(E=f.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var V,D,R;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "danger",
    size: "md"
  }
}`,...(R=(D=h.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var G,I,L;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "info",
    size: "md"
  }
}`,...(L=(I=g.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var T,w,$;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "ghost",
    size: "md"
  }
}`,...($=(w=y.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var H,W,N;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
}`,...(N=(W=b.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var O,q,F;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    variant: "primary",
    size: "md",
    disabled: true
  }
}`,...(F=(q=v.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var Y,Z,M;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Button variant="primary" size="md" asChild>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </Button>
}`,...(M=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Button variant="ghost" size="sm" asChild>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </Button>
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const he=["Primary","Secondary","Danger","Info","Ghost","AllVariants","Disabled","AsLink","AsLinkGhost"];export{b as AllVariants,x as AsLink,S as AsLinkGhost,h as Danger,v as Disabled,y as Ghost,g as Info,m as Primary,f as Secondary,he as __namedExportsOrder,fe as default};
