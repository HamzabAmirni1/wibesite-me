import{u as e,c as t,j as a,m as s}from"./animations-BUB5bkvz.js";import{r as n}from"./vendor-CFnQa7c3.js";const r=({children:r,className:i})=>{const o=n.useRef(null),[l,c]=n.useState(0),[p,d]=n.useState(0),u=e(0),x=e(0),[m,v]=n.useState(!1),g=t`
    radial-gradient(
      600px circle at ${u}px ${x}px,
      rgba(255, 255, 255, 0.08),
      transparent 80%
    )
  `,f=t`
    radial-gradient(
      300px circle at ${u}px ${x}px,
      rgba(99, 102, 241, 0.2),
      transparent 80%
    )
  `;return a.jsxs(s.div,{ref:o,onMouseMove:e=>{const t=o.current;if(!t)return;const a=t.getBoundingClientRect(),s=a.width,n=a.height,r=e.clientX-a.left,i=e.clientY-a.top;u.set(r),x.set(i);const l=r/s-.5;c(5*-(i/n-.5)),d(5*l)},onMouseEnter:()=>{v(!0)},onMouseLeave:()=>{v(!1),c(0),d(0)},animate:{rotateX:l,rotateY:p,y:m?-4:0},transition:{type:"spring",stiffness:200,damping:25},style:{transformStyle:"preserve-3d",perspective:1e3},className:`relative rounded-2xl overflow-hidden transition-all duration-300 ${m?"shadow-[0_20px_50px_rgba(99,102,241,0.15)]":"shadow-[0_8px_30px_rgb(0,0,0,0.02)]"} ${i}`,children:[a.jsx(s.div,{className:"absolute inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-300",style:{background:f}}),a.jsx("div",{className:"relative z-10 w-full h-full",children:r}),a.jsx(s.div,{className:"absolute inset-0 z-20 pointer-events-none transition-opacity duration-300",style:{background:g,opacity:m?1:0}})]})};export{r as C};
