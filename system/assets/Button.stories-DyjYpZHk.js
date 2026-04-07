import{j as i}from"./jsx-runtime-Z5uAzocK.js";import{r as s,o as ee}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";function k(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function re(...e){return n=>{let a=!1;const t=e.map(r=>{const o=k(r,n);return!a&&typeof o=="function"&&(a=!0),o});if(a)return()=>{for(let r=0;r<t.length;r++){const o=t[r];typeof o=="function"?o():k(e[r],null)}}}}var ne=Symbol.for("react.lazy"),C=ee[" use ".trim().toString()];function te(e){return typeof e=="object"&&e!==null&&"then"in e}function U(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===ne&&"_payload"in e&&te(e._payload)}function ae(e){const n=se(e),a=s.forwardRef((t,r)=>{let{children:o,...d}=t;U(o)&&typeof C=="function"&&(o=C(o._payload));const l=s.Children.toArray(o),u=l.find(le);if(u){const p=u.props.children,X=l.map(S=>S===u?s.Children.count(p)>1?s.Children.only(null):s.isValidElement(p)?p.props.children:null:S);return i.jsx(n,{...d,ref:r,children:s.isValidElement(p)?s.cloneElement(p,void 0,X):null})}return i.jsx(n,{...d,ref:r,children:o})});return a.displayName=`${e}.Slot`,a}var oe=ae("Slot");function se(e){const n=s.forwardRef((a,t)=>{let{children:r,...o}=a;if(U(r)&&typeof C=="function"&&(r=C(r._payload)),s.isValidElement(r)){const d=de(r),l=ce(o,r.props);return r.type!==s.Fragment&&(l.ref=t?re(t,d):d),s.cloneElement(r,l)}return s.Children.count(r)>1?s.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var ie=Symbol("radix.slottable");function le(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ie}function ce(e,n){const a={...n};for(const t in n){const r=e[t],o=n[t];/^on[A-Z]/.test(t)?r&&o?a[t]=(...l)=>{const u=o(...l);return r(...l),u}:r&&(a[t]=r):t==="style"?a[t]={...r,...o}:t==="className"&&(a[t]=[r,o].filter(Boolean).join(" "))}return{...e,...a}}function de(e){var t,r;let n=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,a=n&&"isReactWarning"in n&&n.isReactWarning;return a?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,a=n&&"isReactWarning"in n&&n.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}function c({variant:e="primary",size:n="md",asChild:a=!1,className:t,children:r,...o}){const d=a?oe:"button",l=["btn",`btn--${e}`,`btn--${n}`,t].filter(Boolean).join(" ");return i.jsx(d,{className:l,...o,children:r})}c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger" | "info" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"info"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["ButtonHTMLAttributes"]};const fe={title:"Filament/Button",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","info","ghost"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},asChild:{control:!1,description:"Renders the button as a child element, transferring all props onto it. See AsLink  stories for usage."}}},m={args:{children:"Publish tokens",variant:"primary",size:"md",disabled:!1,asChild:!1}},f={args:{children:"Publish tokens",variant:"secondary",size:"md"}},h={args:{children:"Publish tokens",variant:"danger",size:"md"}},g={args:{children:"Publish tokens",variant:"info",size:"md"}},y={args:{children:"Publish tokens",variant:"ghost",size:"md"}},b={render:()=>i.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[i.jsx(c,{variant:"primary",children:"Primary"}),i.jsx(c,{variant:"secondary",children:"Secondary"}),i.jsx(c,{variant:"danger",children:"Danger"}),i.jsx(c,{variant:"info",children:"Info"}),i.jsx(c,{variant:"ghost",children:"Ghost"})]}),parameters:{docs:{source:{code:`
<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="info">Info</Button>
    <Button variant="ghost">Ghost</Button>
</div>
`}}}},v={args:{children:"Disabled",variant:"primary",size:"md",disabled:!0}},B={argTypes:{asChild:{control:"boolean"}},render:()=>i.jsx(c,{variant:"primary",size:"md",asChild:!0,children:i.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"View on GitHub"})}),parameters:{docs:{source:{code:`
<Button variant="primary" size="md" asChild>
    <a href="https://github.com" target="_blank" rel="noreferrer">
        View on GitHub
    </a>
</Button>
`.trim()}}}},x={argTypes:{asChild:{control:"boolean"}},render:()=>i.jsx(c,{variant:"ghost",size:"sm",asChild:!0,children:i.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",children:"GitHub"})}),parameters:{docs:{source:{code:`
<Button variant="ghost" size="sm" asChild>
 <a href="https://github.com" target="_blank" rel="noreferrer">
 GitHub
 </a>
</Button>`.trim()}}}};var z,P,_;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "primary",
    size: "md",
    disabled: false,
    asChild: false
  }
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var j,E,G;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "secondary",
    size: "md"
  }
}`,...(G=(E=f.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var V,A,T;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "danger",
    size: "md"
  }
}`,...(T=(A=h.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var w,D,I;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "info",
    size: "md"
  }
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var R,H,L;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: "Publish tokens",
    variant: "ghost",
    size: "md"
  }
}`,...(L=(H=y.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,$,N;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="info">Info</Button>
    <Button variant="ghost">Ghost</Button>
</div>
\`
      }
    }
  }
}`,...(N=($=b.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var O,q,F;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    variant: "primary",
    size: "md",
    disabled: true
  }
}`,...(F=(q=v.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var Y,Z,M;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  argTypes: {
    asChild: {
      control: "boolean"
    }
  },
  render: () => <Button variant="primary" size="md" asChild>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </Button>,
  parameters: {
    docs: {
      source: {
        code: \`
<Button variant="primary" size="md" asChild>
    <a href="https://github.com" target="_blank" rel="noreferrer">
        View on GitHub
    </a>
</Button>
\`.trim()
      }
    }
  }
}`,...(M=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  argTypes: {
    asChild: {
      control: "boolean"
    }
  },
  render: () => <Button variant="ghost" size="sm" asChild>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </Button>,
  parameters: {
    docs: {
      source: {
        code: \`
<Button variant="ghost" size="sm" asChild>
 <a href="https://github.com" target="_blank" rel="noreferrer">
 GitHub
 </a>
</Button>\`.trim()
      }
    }
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const he=["Primary","Secondary","Danger","Info","Ghost","AllVariants","Disabled","AsLink","AsLinkGhost"];export{b as AllVariants,B as AsLink,x as AsLinkGhost,h as Danger,v as Disabled,y as Ghost,g as Info,m as Primary,f as Secondary,he as __namedExportsOrder,fe as default};
