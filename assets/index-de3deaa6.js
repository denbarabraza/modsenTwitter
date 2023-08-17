import{s as n,r as u,u as M,c as U,g as V,M as g,d as R,j as t,e as G,f as D,m as O,B as Y,b as W,i as Z,k as A,F as H,L as q,l as J,o as K}from"./index-78889b3f.js";import{u as Q,a as X,W as _,M as ee,B as te,b as ne,C as F,T as oe,c as se}from"./style-c1064c2d.js";import{H as ie}from"./index-f37c9552.js";import{u as ae,G as re,O as le}from"./style-99705489.js";import{g as de}from"./dataForSelectors-86e14a25.js";import"./forwardPropGuard-cc2dedbb.js";const ce="/assets/profile-banner-22e6b994.png",xe=n.div`
  position: fixed;
  top: ${({theme:e})=>e.valueInPx.px0};
  left: ${({theme:e})=>e.valueInPx.px0};
  right: ${({theme:e})=>e.valueInPx.px0};
  bottom: ${({theme:e})=>e.valueInPx.px0};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({open:e})=>e?1:0};
  background-color: ${({theme:e})=>e.colors.modalContentBackground};
  transition: 0.4s;
  z-index: 300;
  overflow-y: auto;

  transform: ${({open:e})=>e?"":"scale(0.5)"};
`,me=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.valueInVw.vw50};
  max-height: ${({theme:e})=>e.valueInVh.vh90};
  margin: ${({theme:e})=>e.indentation.i20};
  color: ${({theme:e})=>e.colors.fontColor};
  background-color: ${({theme:e})=>e.colors.modalItemBackground};
  border-radius: ${({theme:e})=>e.valueInPx.px10};
  overflow-y: auto;

  transition: 0.4s all;

  transform: ${({open:e})=>e?"":"scale(1)"};
  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    width: ${({theme:e})=>e.valueInVw.vw90};
    max-height: ${({theme:e})=>e.valueInVh.vh75};
  }
`,L=u.memo(({children:e})=>{const h=M(),r=U(V),l=r!==g.Closed,s=()=>{h(G(g.Closed))};return u.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[r]),R.createPortal(t.jsx(xe,{open:l,onClick:s,children:t.jsx(me,{open:l,onClick:i=>i.stopPropagation(),children:e})}),document.body)}),pe={namePattern:/^[A-Za-z]+$/i},ue={nameError:"Invalid username.",surnameError:"Invalid surname.",passwordError:"At least 6 characters"},he=n.div`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  margin: ${({theme:e})=>e.indentation.i0} auto;
  max-height: ${({theme:e})=>e.valueInPercent.pr80};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    height: ${({theme:e})=>e.valueInPercent.pr80};
  }
`,fe=n.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme:e})=>e.valueInPx.px15};
  margin-bottom: ${({theme:e})=>e.valueInPx.px20};
  width: ${({theme:e})=>e.valueInPercent.pr50};
`,T=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({theme:e})=>e.valueInPx.px5};
  width: ${({theme:e})=>e.valueInPercent.pr100};
`,ge=n.h3`
  padding: ${({theme:e})=>e.valueInPx.px15} ${({theme:e})=>e.valueInPx.px0};
  font-size: ${({theme:e})=>e.fontSizes.xxxl};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  line-height: ${({theme:e})=>e.valueInPx.px20};
  color: ${({theme:e})=>e.colors.fontColor};
`,$e=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({theme:e})=>e.valueInPx.px10};
  width: ${({theme:e})=>e.valueInPercent.pr100};
`,C=n.p`
  font-size: ${({theme:e})=>e.fontSizes.l};
  font-weight: ${({theme:e})=>e.fontWeight.medium};
  line-height: ${({theme:e})=>e.valueInPx.px10};
  color: ${({theme:e})=>e.usedColors.twitterColor};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.l}px;
  }
`,k=n.input`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  max-width: ${({theme:e})=>e.valueInPx.px400};
  height: ${({theme:e})=>e.valueInPx.px40};

  font-size: ${({theme:e})=>e.fontSizes.l};
  font-weight: ${({theme:e})=>e.fontWeight.medium};
  line-height: ${({theme:e})=>e.valueInPx.px25};
  color: ${({theme:e})=>e.colors.fontColor};
  word-break: break-word;

  background: transparent;
  border: none;

  border-bottom: 1px solid ${({theme:e})=>e.usedColors.grayOpacity};

  &:hover {
    border-bottom: 1px solid ${({theme:e})=>e.usedColors.gray};
    outline: none;
  }

  &:focus {
    border-bottom: 1px solid ${({theme:e})=>e.usedColors.twitterColor};
    outline: none;
  }
`,N=n.div`
  margin-bottom: ${({theme:e})=>e.indentation.i10};
  font-size: ${({theme:e})=>e.fontSizes.m};
  color: ${({theme:e})=>e.usedColors.red};
  align-self: flex-start;
`,ve=n.div``,we=n.img`
  width: ${({theme:e})=>e.valueInPx.px150};
  height: ${({theme:e})=>e.valueInPx.px150};
`,Ie=u.memo(({handleGetUserTweets:e})=>{const[,h]=u.useState(0),r=M(),l=a=>{h(Number(a.target.value))},{name:s,lastName:i,telegram:c,gender:$,id:f}=U(D),{namePattern:v}=pe,{nameError:b,surnameError:x,passwordError:P}=ue,{register:m,handleSubmit:y,formState:{errors:p}}=ae({mode:"onTouched"}),w=async({gender:a,name:d,password:z,surname:S,telegram:I})=>{try{let j=I;I.includes("@")||(j=`@${I}`),await Q({gender:a||$,name:d||s,password:z,lastName:S||i,telegram:j||c}),z&&r(W({isVisible:!0,message:"You need to re-signin to update password"})),r(Z({gender:a||$,name:d||s,lastName:S||i,telegram:I||c}));const o=await A("creator.id",f);await Promise.all(o.map(B=>X({collection:H.Tweets,id:B.tweetId,newDoc:{...B,creator:{...B.creator,name:d||s,lastName:S||i}}}))),e(),r(G(g.Closed))}catch{r(W({isVisible:!0,message:"The user`s data has not been updated..."}))}};return t.jsxs(he,{children:[t.jsx(ge,{children:"Edit User Data"}),t.jsx(ve,{children:t.jsx(we,{src:O})}),t.jsxs(fe,{onSubmit:y(w),"data-cy":"formEditProfile",children:[t.jsxs(T,{children:[t.jsx(C,{children:"Name:"}),t.jsx(k,{"data-cy":"nameField",placeholder:s,type:"text",...m("name",{minLength:3,pattern:v})}),p.name&&t.jsx(N,{children:b})]}),t.jsxs(T,{children:[t.jsx(C,{children:"Surname:"}),t.jsx(k,{"data-cy":"nameField",placeholder:i,type:"text",...m("surname",{minLength:3,pattern:v})}),p.surname&&t.jsx(N,{children:x})]}),t.jsxs(T,{children:[t.jsx(C,{children:"Create new password: "}),t.jsx(k,{placeholder:"example12",type:"text",...m("password",{minLength:6})}),p.password&&t.jsx(N,{children:P})]}),t.jsxs(T,{children:[t.jsx(C,{children:"Telegram:"}),t.jsx(k,{"data-cy":"telegramField",placeholder:c,type:"text",...m("telegram")})]}),t.jsxs($e,{children:[t.jsx(C,{children:"Gender"}),t.jsx(re,{...m("gender"),onChange:l,children:de.map(a=>t.jsx(le,{value:a,children:a},a))})]}),t.jsx(Y,{isValid:!0,type:"submit",title:"Save"})]})]})}),je="/assets/editProfile-6655b3c4.svg",be=n.div`
  position: relative;
  margin: ${({theme:e})=>e.indentation.i0} auto;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: fit-content;
  padding: ${({theme:e})=>e.indentation.i25} ${({theme:e})=>e.indentation.i15}
    ${({theme:e})=>e.indentation.i0};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({theme:e})=>e.colors.mainBackground};
  border-bottom: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};
`,Pe=n.div`
  position: relative;
  margin: ${({theme:e})=>e.indentation.i0} auto;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  padding-top: ${({theme:e})=>e.indentation.i20};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({theme:e})=>e.colors.mainBackground};

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    padding-top: ${({theme:e})=>e.indentation.i10};
  }
`,ye=n.img`
  position: absolute;
  top: -${({theme:e})=>e.valueInPercent.pr60};
  left: -${({theme:e})=>e.valueInPx.px1};
  width: ${({theme:e})=>e.valueInPx.px100};
  height: ${({theme:e})=>e.valueInPx.px100};
  align-self: flex-start;
  background-color: transparent;
  border: ${({theme:e})=>e.valueInPx.px1} solid transparent;
  border-radius: ${({theme:e})=>e.valueInPx.px5};

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    top: -${({theme:e})=>e.valueInPercent.pr80};
  }
`,Se=n.p`
  font-size: ${({theme:e})=>e.fontSizes.xxl};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,E=n.p`
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,Ce=n.p`
  display: flex;
  gap: ${({theme:e})=>e.valueInPx.px10};
  width: ${({theme:e})=>e.valueInPx.px60};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  font-size: ${({theme:e})=>e.fontSizes.m};
  color: ${({theme:e})=>e.usedColors.fontColor};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
    height: fit-content;
  }
`,ze=n(q)`
  margin-left: ${({theme:e})=>e.valueInPercent.pr2};
  font-size: ${({theme:e})=>e.fontSizes.m};
  color: ${({theme:e})=>e.colors.fontColor};
  opacity: 0.8;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
    height: fit-content;
  }
`,Te=n.div`
  margin-bottom: ${({theme:e})=>e.indentation.i30};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  padding-top: ${({theme:e})=>e.indentation.i10};
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.valueInPx.px10};
  background-color: transparent;

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,ke=n.img`
  width: ${({theme:e})=>e.valueInPx.px20};
  height: ${({theme:e})=>e.valueInPx.px20};

  &:hover {
    transform: scale(1.2);
  }
`,Ee=n.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme:e})=>e.valueInPx.px10};
`,Ue={buttonText:"Edit profile",followingText:"Following",followersText:"Followers",followingCount:11,followersCount:43},Be=u.memo(({photo:e,name:h,email:r,gender:l,telegram:s,id:i})=>{const c=M(),{followersText:$,followingText:f,followersCount:v,followingCount:b}=Ue,{id:x,name:P,lastName:m,email:y,gender:p,telegram:w}=U(D),a=()=>{c(G(g.EditProfile))};return t.jsx(be,{"data-cy":"userInfoBlock",children:t.jsxs(Pe,{"data-cy":"userInfo",children:[t.jsx(ye,{src:e,alt:"Twitter Logo"}),t.jsxs(Ee,{"data-cy":"nameBlock",children:[t.jsx(Se,{"data-cy":"nameItem",children:i===x?`${P} ${m}`:h}),i===x&&t.jsx(ke,{"data-cy":"editIcon",src:je,alt:"edit profile",onClick:a})]}),t.jsx(E,{children:i===x?y:r}),t.jsxs(Ce,{children:[p&&t.jsx(E,{children:i===x?p:l}),(w!=="@telegram"||s!=="@telegram")&&t.jsx(ze,{to:"#",children:i===x?w:s})]}),t.jsxs(Te,{children:[t.jsxs(E,{children:[t.jsx("b",{children:b})," ",f]}),t.jsxs(E,{children:[t.jsx("b",{children:v})," ",$]})]})]})})}),Ve=()=>{const e=U(V),[h,r]=u.useState({}),[l,s]=u.useState([]),{pathname:i}=J(),c=i.split("/")[2],$=async()=>{const d=await K(H.Users,c);d&&r(d)},f=async()=>{const d=await A("creator.id",c);s(d)};u.useEffect(()=>{$(),f()},[c]);const{photo:v,email:b,gender:x,name:P,phone:m,telegram:y,id:p,lastName:w,dateOfBirth:a}=h;return t.jsxs(_,{"data-cy":"profileItem",children:[t.jsxs(ee,{children:[t.jsx(ie,{tweetsCount:l.length}),t.jsx(te,{children:t.jsx(ne,{src:ce,alt:"profile banner"})}),t.jsx(Be,{photo:v||O,email:b,gender:x,name:P,phone:m,telegram:y,id:p,lastName:w,dateOfBirth:a}),e!==g.CreateTweet&&t.jsx(F,{setTweets:s}),l.length>0&&t.jsx(oe,{children:"Tweets"}),l.length>0&&l.map(({date:d,text:z,image:S,likes:I,tweetId:j,creator:o})=>t.jsx(se,{tweetId:j,creatorId:o==null?void 0:o.id,name:o==null?void 0:o.name,lastName:o==null?void 0:o.lastName,email:o==null?void 0:o.email,photo:o==null?void 0:o.photo,date:d,text:z,image:S,likes:I,setTweets:s,handleGetTweets:f},j))]}),e===g.EditProfile&&t.jsx(L,{children:t.jsx(Ie,{handleGetUserTweets:f})}),e===g.CreateTweet&&t.jsx(L,{children:t.jsx(F,{setTweets:s})})]})};export{Ve as Profile};
