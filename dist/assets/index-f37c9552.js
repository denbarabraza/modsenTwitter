import{s as o,r as a,j as n,$,c as p,O as m,u as v,T as s,a0 as f,f as P,Z as I,l as b,R as w,P as x}from"./index-78889b3f.js";const k="/assets/arrow-back-b4de9eeb.svg",j=o.button`
  @media (min-width: ${({theme:e})=>e.dimensions.tablet}px) {
    display: none;
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    display: flex;
    width: ${({theme:e})=>e.valueInPx.px40};
    margin-left: 20px;
    flex-direction: column;
    justify-content: center;
    grid-area: 1 / 2 / 2 / 3;
    grid-gap: ${({theme:e})=>e.valueInPx.px5};
    align-items: flex-end;
    width: ${({theme:e})=>e.valueInPercent.pr10};
    height: ${({theme:e})=>e.valueInPercent.pr50};
    padding: ${({theme:e})=>e.indentation.i0};
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  div {
    position: relative;
    z-index: 200;
    width: ${({theme:e})=>e.valueInPx.px30};
    height: ${({theme:e})=>e.valueInPx.px3};
    border-radius: ${({theme:e})=>e.valueInPx.px5};
    transition: all 0.3s linear;
    transform-origin: ${({theme:e})=>e.valueInPx.px1};
    background-color: ${({theme:e,open:t})=>t?e.usedColors.twitterColor:e.usedColors.white};

    &:first-child {
      transform: ${({open:e})=>e?"rotate(45deg)":"rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({open:e})=>e?"0":"1"};
      transform: ${({open:e})=>e?"translateX(20px)":"translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({open:e})=>e?"rotate(-45deg)":"rotate(0)"};
    }
  }
`,y=a.memo(({open:e,setOpen:t})=>{const i=()=>{t(!e)};return n.jsxs(j,{open:e,onClick:i,children:[n.jsx("div",{}),n.jsx("div",{}),n.jsx("div",{})]})}),S=o.div`
  top: ${({theme:e})=>e.valueInPx.px0};
  left: ${({theme:e})=>e.valueInPx.px0};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  position: absolute;
  background-color: ${({theme:e})=>e.colors.burgerMenuBackground};
  z-index: 4;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({theme:e})=>e.valueInPx.px10};
  color: ${e=>e.theme.colors.fontColor};

  transition: transform 0.3s ease-in-out;
  transform: ${({open:e})=>e?"translateX(0)":"translateX(-100%)"};
  overflow: ${({open:e})=>e?"hidden":""};
  visibility: ${({open:e})=>e?"visible":"hidden"};
`,C=o.a`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
`,T=(e,t)=>{a.useEffect(()=>{const i=r=>{e.current&&r.target&&e.current.contains(r.target)||t()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[e,t])},z=()=>{const[e,t]=a.useState(!1),i=a.useRef(null),r=()=>t(!1);return T(i,()=>t(!1)),n.jsxs("div",{ref:i,children:[n.jsx(S,{open:e,children:n.jsx(C,{onClick:()=>r(),children:n.jsx($,{})})}),n.jsx(y,{open:e,setOpen:t})]})},E=o.div`
  margin: ${({theme:e})=>e.indentation.i20} ${e=>e.theme.indentation.i0};
`,B=o.label`
  display: flex;
  align-items: center;
  user-select: none;
`,d=o.input`
  opacity: ${({theme:e})=>e.valueInPx.px0};
  width: ${({theme:e})=>e.valueInPx.px0};
  height: ${({theme:e})=>e.valueInPx.px0};
`,H=o.span`
  width: ${({theme:e})=>e.valueInPx.px50};
  height: ${({theme:e})=>e.valueInPx.px30};
  border-radius: ${({theme:e})=>e.valueInPx.px20};
  background-color: ${({theme:e})=>e.colors.toggleBackground};
  border: 1px solid ${({theme:e})=>e.colors.toggleBorder};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: ${({theme:e})=>e.valueInPx.px20};
    height: ${({theme:e})=>e.valueInPx.px20};
    border-radius: ${({theme:e})=>e.valueInPercent.pr50};
    background-color: ${({theme:e})=>e.colors.toggleCircle};
    top: ${({theme:e})=>e.valueInPx.px5};
    left: ${({theme:e})=>e.valueInPx.px2};
    transition: transform 0.2s ease-in-out;
  }

  ${d}:checked + & {
    background-color: ${({theme:e})=>e.colors.toggleBackgroundChecked};
  }

  ${d}:checked + &::before {
    transform: translateX(${({theme:e})=>e.valueInPx.px25});
  }
`,L=a.memo(({open:e})=>{const t=p(m),i=v(),r=a.useCallback(()=>{const l=t===s.Light?s.Dark:s.Light;i(f(l))},[i,t]);return n.jsx(E,{open:e||!1,children:n.jsxs(B,{children:[n.jsx(d,{type:"checkbox",checked:t!==s.Light,onChange:r}),n.jsx(H,{"data-cy":"themeToggleSlider"})]})})}),M=o.header`
  padding: 0 ${({theme:e})=>e.indentation.i20};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPx.px50};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.headBackground};
  border-radius: ${({theme:e})=>e.valueInPx.px10};
  border-bottom: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.colors.headBackground};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    height: ${({theme:e})=>e.valueInPx.px100};
  }
`,N=o.img`
  width: ${({theme:e})=>e.valueInPx.px30};
  height: ${({theme:e})=>e.valueInPx.px30};
  margin-right: ${({theme:e})=>e.valueInPx.px25};

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    width: ${({theme:e})=>e.valueInPx.px30};
    height: ${({theme:e})=>e.valueInPx.px30};
  }
`,O=o.div`
  display: flex;
  justify-content: space-between;
  gap: ${({theme:e})=>e.valueInPx.px10};
  align-items: center;
  max-width: ${({theme:e})=>e.valueInPercent.pr80};
`,X=o.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,A=o.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`,u=o.p`
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  color: ${({theme:e})=>e.usedColors.white};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.x36};
  }
`,D=o.p`
  margin-top: ${({theme:e})=>e.valueInPx.px2};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  color: ${({theme:e})=>e.usedColors.white};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,F=a.memo(({tweetsCount:e})=>{const{name:t,id:i,lastName:r}=p(P),l=I(),{pathname:h}=b(),c=w(h,x.FEED),g=()=>{l(c?`/profile/${i}`:x.FEED)};return n.jsxs(M,{"data-cy":"headerItem",children:[c?n.jsxs(A,{children:[n.jsx(N,{src:k,alt:"Go back Profile",onClick:g}),n.jsx(u,{children:"Go back Profile"})]}):n.jsxs(O,{children:[n.jsx(z,{}),n.jsxs(X,{children:[n.jsx(u,{children:`${t} ${r}`}),!c&&n.jsxs(D,{children:[e," Tweets"]})]})]}),n.jsx(L,{})]})});export{F as H};
