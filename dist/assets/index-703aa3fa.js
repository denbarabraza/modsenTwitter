import{s as t,n as h,L as a,u as p,j as n,t as $,P as r,h as g,a as u,b as f}from"./index-8d0cbd5a.js";const w="/assets/back-twitter-791860c2.png",v="/assets/google-a1176fbd.svg",I=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${({theme:e})=>e.indentation.i0} auto;
  width: ${({theme:e})=>e.valueInVw.vw100};
  height: ${({theme:e})=>e.valueInPercent.pr100};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${({theme:e})=>e.indentation.i0};
  }
`,b=t.div`
  display: flex;
  align-items: flex-start;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: calc(
    ${({theme:e})=>e.valueInVh.vh100} - ${({theme:e})=>e.valueInPx.px50}
  );

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    height: fit-content;
  }

  @media (max-width: ${({theme:e})=>e.dimensions.laptop}px) {
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }
`,P=t.img`
  height: ${({theme:e})=>e.valueInPercent.pr100};
  width: ${({theme:e})=>e.valueInPercent.pr60};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    display: none;
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    display: none;
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    width: ${({theme:e})=>e.valueInPercent.pr80};
  }
`,j=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: ${({theme:e})=>e.valueInPercent.pr2} auto;
  width: ${({theme:e})=>e.valueInPercent.pr40};
  padding-left: ${({theme:e})=>e.indentation.i40};

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    width: ${({theme:e})=>e.valueInPercent.pr300};
    align-items: center;
    padding-left: ${({theme:e})=>e.indentation.i0};
    padding: ${({theme:e})=>e.indentation.i10};
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    margin: ${({theme:e})=>e.indentation.i150} auto;
  }
`,y=t.button`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  border: none;
  background: transparent;
  cursor: pointer;

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    width: ${({theme:e})=>e.valueInPx.px60};
    height: ${({theme:e})=>e.valueInPx.px60};
  }
`,S=t.img`
  width: ${({theme:e})=>e.valueInPx.px60};
  height: ${({theme:e})=>e.valueInPx.px60};

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    width: ${({theme:e})=>e.valueInPx.px100};
    height: ${({theme:e})=>e.valueInPx.px100};
  }
`,z=t.h1`
  margin-top: ${({theme:e})=>e.indentation.i25};
  margin-bottom: ${({theme:e})=>e.indentation.i25};
  font-size: ${({theme:e})=>e.fontSizes.x60};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (min-width: ${({theme:e})=>e.dimensions.tablet}px) {
    font-size: ${({theme:e})=>e.fontSizes.x36};
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    margin-top: ${({theme:e})=>e.indentation.i40};
  }
`,T=t.h2`
  margin-bottom: ${({theme:e})=>e.indentation.i40};
  font-size: ${({theme:e})=>e.fontSizes.xxxl};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (min-width: ${({theme:e})=>e.dimensions.tablet}px) {
    font-size: ${({theme:e})=>e.fontSizes.xl};
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.x36};
  }
`,c=h`
  width: ${({theme:e})=>e.valueInPx.px300};
  height: ${({theme:e})=>e.valueInPx.px40};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-bottom: ${({theme:e})=>e.indentation.i15};
  border: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};
  border-radius: ${({theme:e})=>e.valueInPx.px40};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  font-size: ${({theme:e})=>e.fontSizes.l};
  color: ${({theme:e})=>e.colors.fontColor};

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }

  @media (min-width: ${({theme:e})=>e.dimensions.tablet}px) {
    width: ${({theme:e})=>e.valueInPercent.pr80};
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    width: ${({theme:e})=>e.valueInPercent.pr60};
    height: ${({theme:e})=>e.valueInPx.px60};
    font-size: ${({theme:e})=>e.fontSizes.m};
  }
`,C=t.button`
  ${c}
`,k=t(a)`
  ${c}
`,L=t.div`
  margin: ${({theme:e})=>e.indentation.i0} auto;
  height: ${({theme:e})=>e.valueInPercent.pr100};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,B=t.img`
  width: ${({theme:e})=>e.valueInPx.px20};
  height: ${({theme:e})=>e.valueInPx.px20};
  margin-right: ${({theme:e})=>e.indentation.i15};

  &:hover {
    transform: scale(1.1);
  }
`,l=t.p`
  width: ${({theme:e})=>e.valueInPercent.pr60};
  margin-bottom: ${({theme:e})=>e.indentation.i25};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  font-size: ${({theme:e})=>e.fontSizes.m};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    width: ${({theme:e})=>e.valueInPercent.pr80};
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    width: ${({theme:e})=>e.valueInPercent.pr100};
    text-align: center;
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,s=t(a)`
  margin-bottom: ${({theme:e})=>e.indentation.i25};
  font-size: ${({theme:e})=>e.fontSizes.m};
  color: ${({theme:e})=>e.usedColors.twitterColor};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,W=t.footer`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  min-height: ${({theme:e})=>e.valueInPx.px60};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    height: ${({theme:e})=>e.valueInPx.px150};
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }
`,G=t.ul`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  margin: ${({theme:e})=>e.indentation.i0} ${({theme:e})=>e.indentation.i50};
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.valueInPx.px10};
  align-items: center;
  justify-content: space-around;
  height: ${({theme:e})=>e.valueInPx.px60};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    margin: ${({theme:e})=>e.valueInPx.px25};
  }
`,d=t.li`
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,U=t(a)`
  text-decoration: none;
  color: ${({theme:e})=>e.usedColors.twitterColor};

  &:hover {
    text-decoration: underline;
    color: ${({theme:e})=>e.usedColors.twitterColor};
    cursor: pointer;
  }
`,{title:N,subTitle:A,signUpGoogleText:O,signUpEmailText:V,termsText:E,termsOne:F,termsTwo:H,termsThree:q,question:D,loginText:M,navLinks:i,copyrightText:R}=g,J=()=>{const e=p(),m=async()=>{try{e(u())}catch(o){e(f({isVisible:!0,message:o.message}))}};return n.jsxs(I,{"data-cy":"homePage",children:[n.jsxs(b,{children:[n.jsx(P,{src:w,alt:"Twitter Banner"}),n.jsxs(j,{children:[n.jsx(y,{children:n.jsx(S,{src:$,alt:"Twitter Logo"})}),n.jsx(z,{children:N}),n.jsx(T,{children:A}),n.jsx(C,{type:"button",onClick:m,"data-cy":"googleSignIn",children:n.jsxs(L,{children:[n.jsx(B,{src:v,alt:"Google Logo"}),O]})}),n.jsx(k,{type:"button",to:r.SIGN_UP,"data-cy":"signUpLink",children:V}),n.jsxs(l,{children:[E,n.jsx(s,{to:i[2].to,children:i[2].name}),F,n.jsx(s,{to:i[3].to,children:i[3].name}),H,n.jsx(s,{to:i[4].to,children:i[4].name}),q]}),n.jsxs(l,{children:[D,n.jsx(s,{to:r.LOGIN,"data-cy":"logInLink",children:M})]})]})]}),n.jsx(W,{children:n.jsxs(G,{children:[i.map(({name:o,to:x})=>n.jsx(d,{children:n.jsx(U,{to:x,children:o})},o)),n.jsx(d,{children:R})]})})]})};export{J as Home};
