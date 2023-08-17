import{X as Y,s as a,n as N,r as p,j as t,u as B,P as E,B as M,Y as U,b as z}from"./index-78889b3f.js";import{m as y}from"./dataForSelectors-86e14a25.js";import{u as T,F as O,I as c}from"./useFormHandler-81e1a731.js";import{F as W}from"./style-99705489.js";import"./forwardPropGuard-cc2dedbb.js";const H=1,L=0,_=16,q=(e,o)=>{const l=new Date(e,o+H,L).getDate();return Array.from({length:l},(m,n)=>n+1)},G=()=>Array.from({length:new Date().getFullYear()-1980},(e,o)=>`${new Date().getFullYear()-o-_}`),$=Y`
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.02)
  }`;a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.fontColor};

  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
`;a.h3`
  padding: ${({theme:e})=>e.valueInPx.px15} ${({theme:e})=>e.valueInPx.px0};
  font-size: ${({theme:e})=>e.fontSizes.xxxl};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  line-height: ${({theme:e})=>e.valueInPx.px20};
  color: ${({theme:e})=>e.colors.fontColor};
`;const R=a.div`
  margin-bottom: ${({theme:e})=>e.valueInPx.px10};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPx.px30};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,X=a.div`
  display: flex;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: ${({theme:e})=>e.valueInPx.px10};
`,w=N`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme:e})=>e.valueInPx.px30};
  background: transparent;
  border: 1px solid ${({theme:e})=>e.usedColors.gray};
  border-radius: ${({theme:e})=>e.valueInPx.px5};
  color: ${({theme:e})=>e.colors.fontColor};
  font-size: ${({theme:e})=>e.fontSizes.sm};

  &:hover {
    -webkit-animation: ${$} 200ms ease-out;
    animation: ${$} 200ms ease-out;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: ${({theme:e})=>e.valueInPx.px2};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({theme:e})=>e.usedColors.white};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>e.usedColors.gray};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme:e})=>e.usedColors.gray};
  }
`,J=a.select`
  width: ${({theme:e})=>e.valueInPercent.pr50};
  ${w}
`,v=a.select`
  width: ${({theme:e})=>e.valueInPercent.pr20};
  ${w}
`,h=a.option`
  cursor: pointer;
  background: ${({theme:e})=>e.usedColors.white};
  color: ${({theme:e})=>e.usedColors.black};
`,K=p.memo(({register:e,handleSetMonth:o,year:l,month:m,handleSetYear:n})=>t.jsxs(X,{children:["Date of birth:",t.jsxs(R,{children:[t.jsx(J,{...e("month"),onChange:o,children:y.map(r=>t.jsx(h,{value:r,children:r},r))}),t.jsx(v,{...e("day"),children:q(l,m).map(r=>t.jsx(h,{value:r,children:r},r))}),t.jsx(v,{...e("year"),onChange:n,children:G().map(r=>t.jsx(h,{value:r,children:r},r))})]})]})),oe=()=>{const[e,o]=p.useState(0),[l,m]=p.useState(0),n=B(),r=i=>{const d=y.indexOf(i.target.value);o(d)},I=i=>{m(Number(i.target.value))},{errorEmail:u,errorName:x,errorPassword:g,errorNumber:b,errorConfirmPwd:f,handleSubmit:P,isValid:j,register:s}=T("email","password","confirmPwd","name","phone","day","month","year"),k=async({email:i,password:d,name:S,phone:C,day:F,month:D,year:A})=>{try{n(U({email:i,password:d,name:S,phone:C,day:F,month:D,year:A}))}catch(V){n(z({isVisible:!0,message:u||x||g||b||f||V.message}))}};return t.jsx(O,{linkTitle:"Login In",linkPath:E.LOGIN,title:"Create an account",questionText:"Already have an account?",children:t.jsxs(W,{onSubmit:P(k),"data-cy":"formSignUpItem",children:[t.jsx(c,{type:"name",label:"Name:",nameForValidate:"name",placeholder:"Ivan Ivanov",register:s,error:x}),t.jsx(c,{type:"email",label:"Email:",nameForValidate:"email",placeholder:"example@gmail.com",register:s,error:u}),t.jsx(c,{type:"phone",label:"Phone number:",nameForValidate:"phone",placeholder:"+375 (44) 111-22-33",register:s,error:b}),t.jsx(c,{type:"password",label:"Password:",nameForValidate:"password",placeholder:"example12",register:s,error:g}),t.jsx(c,{type:"password",label:"Confirm password:",nameForValidate:"confirmPwd",placeholder:"********",register:s,error:f}),t.jsx(K,{register:s,handleSetMonth:r,handleSetYear:I,year:l,month:e}),t.jsx(M,{isValid:j,type:"submit",title:"Create account"})]})})};export{oe as SignUp};
