import{v as T,w as C,x as j,y as N,F as I,z as K,A as q,C as Q,D as X,E as Y,G as Z,s as a,r as $,c as S,f as ee,g as te,u as ne,j as i,m as _,H as ie,B as ae,M as E,e as oe,I as se,J as re,k as le,K as ce,N as de,l as ue,O as me,Q as pe,T as F,R as ge,S as xe,P as he}from"./index-78889b3f.js";import{f as fe}from"./forwardPropGuard-cc2dedbb.js";const $e="/assets/image-blue-479bac3c.svg";let k;const we=new Uint8Array(16);function ve(){if(!k&&(k=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!k))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return k(we)}const c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function Ie(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}let O,U,B=0,W=0;function ye(e,t,l){let n=t&&l||0;const o=t||new Array(16);e=e||{};let u=e.node||O,r=e.clockseq!==void 0?e.clockseq:U;if(u==null||r==null){const s=e.random||(e.rng||ve)();u==null&&(u=O=[s[0]|1,s[1],s[2],s[3],s[4],s[5]]),r==null&&(r=U=(s[6]<<8|s[7])&16383)}let m=e.msecs!==void 0?e.msecs:Date.now(),d=e.nsecs!==void 0?e.nsecs:W+1;const g=m-B+(d-W)/1e4;if(g<0&&e.clockseq===void 0&&(r=r+1&16383),(g<0||m>B)&&e.nsecs===void 0&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");B=m,W=d,U=r,m+=122192928e5;const p=((m&268435455)*1e4+d)%4294967296;o[n++]=p>>>24&255,o[n++]=p>>>16&255,o[n++]=p>>>8&255,o[n++]=p&255;const x=m/4294967296*1e4&268435455;o[n++]=x>>>8&255,o[n++]=x&255,o[n++]=x>>>24&15|16,o[n++]=x>>>16&255,o[n++]=r>>>8|128,o[n++]=r&255;for(let s=0;s<6;++s)o[n+s]=u[s];return t||Ie(o)}const be=async e=>{const{collection:t,newDoc:l,id:n}=e,o=T(C,t,n);await j(o,l)},Pe=async e=>{const t=N.currentUser;t&&e&&await K(t,e)},st=async({gender:e,name:t,password:l,lastName:n,telegram:o})=>{const u=N.currentUser,{uid:r}=u,m={gender:e,name:t,lastName:n,telegram:o};await j(T(C,I.Users,r),m),l&&await Pe(l)},ke=async e=>{const{collection:t,file:l,id:n}=e,o=q(Q,n),u=X(o,l);u.on("state_changed",()=>{Y(u.snapshot.ref).then(async r=>{await be({collection:t,id:n,newDoc:{image:r}})})})},je=async e=>{const{email:t,id:l,image:n,name:o,photo:u,tweetValue:r,lastName:m}=e,d={tweetId:ye(),creator:{name:o,lastName:m,email:t,id:l,photo:u},text:r,date:Date.now(),image:"",likes:[]};if(n){await ke({collection:I.Tweets,id:d.tweetId,file:n});const g=URL.createObjectURL(n);d.image=g}return await Z({collection:I.Tweets,id:d.tweetId,document:d}),d},Se=a.div`
  margin: ${({theme:e})=>e.indentation.i0} auto;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  padding: ${({theme:e})=>e.indentation.i25} ${({theme:e})=>e.indentation.i15}
    ${({theme:e})=>e.indentation.i10};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({theme:e})=>e.colors.formBackground};
  border-bottom: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};

  color: ${({theme:e})=>e.colors.fontColor};

  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }
`,Te=a.div`
  width: ${({theme:e})=>e.valueInPercent.pr20};
  background-color: transparent;
`,Ce=a.form`
  position: relative;
  margin: ${({theme:e})=>e.indentation.i0} auto;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: transparent;
`,ze=a.div`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  padding-left: ${({theme:e})=>e.indentation.i25};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`,De=a.img`
  width: ${({theme:e})=>e.valueInPx.px70};
  height: ${({theme:e})=>e.valueInPx.px70};
  align-self: flex-start;
  background-color: transparent;
  border-radius: ${({theme:e})=>e.valueInPx.px10};

  &:hover {
    transform: scale(1.2);
  }
`,Re=a.img`
  width: ${({theme:e})=>e.valueInPx.px20};
  height: ${({theme:e})=>e.valueInPx.px20};
  align-self: flex-start;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }
`,Le=a.textarea`
  margin-top: ${({theme:e})=>e.indentation.i15};
  margin-bottom: ${({theme:e})=>e.indentation.i15};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr80};
  color: ${({theme:e})=>e.colors.fontColor};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeight.medium};
  background-color: transparent;
  resize: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({theme:e})=>e.usedColors.grayOpacity};
    opacity: 0.8;
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,Ue=a.div`
  margin-bottom: ${({theme:e})=>e.indentation.i15};
  background-color: transparent;
`,Be=a.input``,We=a.label`
  background-color: transparent;
  justify-content: start;
  cursor: pointer;
`,Ee=a.img`
  margin-bottom: ${({theme:e})=>e.indentation.i15};
  width: ${({theme:e})=>e.valueInPercent.pr20};
  height: fit-content;
  border-radius: ${({theme:e})=>e.valueInPx.px15};
`,rt=$.memo(({setTweets:e})=>{const{id:t,email:l,name:n,photo:o,lastName:u}=S(ee),r=S(te),m=ne(),[d,g]=$.useState(""),[p,x]=$.useState(),[s,z]=$.useState(""),[y,b]=$.useState(!1),D=async h=>{h.preventDefault();const f=await je({email:l,id:t,image:p,name:n,lastName:u,photo:o,tweetValue:d});e(v=>[f,...v]),g(""),x(void 0),r===E.CreateTweet&&m(oe(E.Closed))},P=h=>{g(h.target.value)},w=async h=>{const{files:f}=h.target;if(f){b(!0);const v=se(),R=q(v,"some-child");re(R,f[0]).then(()=>{b(!1)}),x(f[0]),z(URL.createObjectURL(f[0]))}};return $.useEffect(()=>()=>{s&&URL.revokeObjectURL(s)},[s]),i.jsxs(Se,{"data-cy":"createTweetBlock",children:[i.jsx(De,{src:o||_,alt:"Photo"}),i.jsxs(Ce,{onSubmit:D,children:[i.jsxs(ze,{children:[i.jsx(Le,{"data-cy":"textAreaTweet",placeholder:"What`s happening",value:d,onChange:P}),y&&i.jsx(ie,{}),!y&&p&&i.jsx(Ee,{src:s,alt:"Image preload"}),i.jsx(Ue,{children:i.jsxs(We,{htmlFor:"file",children:[i.jsx(Be,{type:"file",id:"file",hidden:!0,accept:"image/*",onChange:w}),i.jsx(Re,{src:$e,alt:"Image"})]})})]}),i.jsx(Te,{"data-cy":"createInPage",children:i.jsx(ae,{title:"Tweet",isValid:!0})})]})]})}),Fe="/assets/delete-33c226e3.svg",Oe="/assets/edit-f8680005.svg",Ve="/assets/edit-white-a40149e3.svg",Ae="/assets/like-e15b81b5.svg",Me="/assets/like-fill-2df3feb1.svg",Ne="/assets/like-white-55690a36.svg",qe=async(e,t)=>{const l=await le("tweetId",e),n=T(C,I.Tweets,e);l[0].likes.includes(t)?await j(n,{likes:ce(t)}):await j(n,{likes:de(t)})},_e=e=>{const t=((Date.now()/1e3-e/1e3)/60).toFixed(0),l=((Date.now()/1e3-e/1e3)/3600).toFixed(0);let n;return Number(t)>60?n=`· ${l}h`:n=`· ${t}min`,n},He=a.header`
  position: relative;
  margin: ${({theme:e})=>e.indentation.i0} auto;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: fit-content;
  padding: ${({theme:e})=>e.indentation.i5} ${({theme:e})=>e.indentation.i15};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({theme:e})=>e.colors.mainBackground};
  border-bottom: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    padding: ${({theme:e})=>e.indentation.i15};
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }
`,Ge=a.div`
  position: relative;
  margin: ${({theme:e})=>e.indentation.i0} auto;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({theme:e})=>e.colors.tweetBackground};
  border-radius: ${({theme:e})=>e.valueInPx.px10};
`,Je=a.div`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  padding: ${({theme:e})=>e.indentation.i10};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Ke=a.div`
  position: absolute;
  top: ${({theme:e})=>e.valueInPx.px15};
  right: ${({theme:e})=>e.valueInPx.px5};
  width: ${({theme:e})=>e.valueInPercent.pr10};
  height: ${({theme:e})=>e.valueInPercent.pr80};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.usedColors.twitterColor};
  color: ${({theme:e})=>e.usedColors.grayOpacity};
  border-radius: ${({theme:e})=>e.valueInPx.px10};

  z-index: 100;
`,Qe=a.img`
  width: ${({theme:e})=>e.valueInPx.px60};
  height: ${({theme:e})=>e.valueInPx.px50};
  align-self: flex-start;
  background-color: transparent;
  border-radius: ${({theme:e})=>e.valueInPx.px10};
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`,V=a.img`
  width: ${({theme:e})=>e.valueInPx.px20};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  align-self: flex-start;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`,A=a.div`
  position: relative;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,Xe=a.div`
  position: relative;
  width: ${({theme:e})=>e.valueInPercent.pr80};
  height: fit-content;
  flex-direction: column;
  align-items: flex-start;
`,Ye=a.img`
  position: absolute;
  right: ${({theme:e})=>e.valueInPx.px5};
  width: ${({theme:e})=>e.valueInPx.px20};
  height: ${({theme:e})=>e.valueInPx.px15};
  align-self: flex-start;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }
`,Ze=a.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme:e})=>e.indentation.i5};
  margin-right: ${({theme:e})=>e.indentation.i5};
  font-size: ${({theme:e})=>e.fontSizes.l};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.fontColor};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,M=a.p`
  margin-right: ${({theme:e})=>e.indentation.i5};
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  color: ${({theme:e})=>e.usedColors.twitterColor};

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl}px;
  }
`,et=a.p`
  margin: ${({theme:e})=>e.indentation.i15} ${({theme:e})=>e.indentation.i0};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: fit-content;
  background: transparent;
  color: ${({theme:e})=>e.colors.fontColor};
  word-break: break-word;
  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeight.normal};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    margin-bottom: ${({theme:e})=>e.indentation.i5};
  }

  @media (min-width: ${({theme:e})=>e.dimensions.bigScreen}px) {
    font-size: ${({theme:e})=>e.fontSizes.xxl};
  }
`,tt=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({theme:e})=>e.valueInPercent.pr100};
`,nt=a.img`
  width: ${({theme:e})=>e.valueInPercent.pr30};
  object-fit: contain;
  border-radius: ${({theme:e})=>e.valueInPx.px10};
`,it=a("p").withConfig({shouldForwardProp:fe(["isLiked"])})`
  margin-left: ${({theme:e})=>e.indentation.i5};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  color: ${({theme:e,isLiked:t})=>t?e.usedColors.red:e.colors.fontColor};
`,lt=$.memo(e=>{const{creatorId:t,name:l,email:n,date:o,text:u,likes:r,image:m,photo:d,lastName:g,tweetId:p,setTweets:x,handleGetTweets:s}=e,[z,y]=$.useState(!1),{pathname:b}=ue(),D=ge(b,he.FEED),P=S(me),w=S(pe),h=r.includes(w),f=` · ${new Date(o).toDateString().slice(4,11)}`,v=_e(o),R=async()=>{await qe(p,w),s()},H=()=>{y(L=>!L)},G=async()=>{await xe(T(C,I.Tweets,p)),x(L=>L.filter(J=>J.tweetId!==p))};return i.jsxs(He,{"data-cy":"tweetItemBlock",children:[i.jsx(Qe,{src:d||_,alt:"Photo"}),i.jsx(Ge,{"data-cy":"tweetItem",children:i.jsxs(Je,{"data-cy":"tweetContent",children:[i.jsxs(A,{children:[i.jsxs(Xe,{children:[i.jsxs(Ze,{children:[l," ",g,i.jsx(M,{children:D?v:f})]}),i.jsx(M,{children:n})]}),t===w&&i.jsxs(i.Fragment,{children:[i.jsx(Ye,{"data-cy":"editIconTweet",src:P===F.Dark?Ve:Oe,alt:"Edit",onClick:H}),z&&i.jsx(Ke,{children:i.jsx(V,{"data-cy":"deleteIcon",src:Fe,alt:"Delete Tweet",onClick:G})})]})]}),i.jsx(et,{"data-cy":"tweetItemText",children:u}),m&&i.jsx(tt,{children:i.jsx(nt,{src:m})}),i.jsxs(A,{children:[i.jsx(V,{src:h?Me:P===F.Dark&&Ne||Ae,alt:"Like","data-cy":"likeIcon",onClick:R}),i.jsx(it,{isLiked:h,children:r.length})]})]})})]})}),ct=a.div`
  margin: ${({theme:e})=>e.indentation.i0} auto;
  width: ${({theme:e})=>e.valueInPercent.pr100};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: ${({theme:e})=>e.valueInVh.vh100};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    width: ${({theme:e})=>e.valueInPercent.pr100};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    width: ${({theme:e})=>e.valueInPercent.pr100};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,dt=a.div`
  margin: ${({theme:e})=>e.indentation.i0} auto;
  margin-bottom: ${({theme:e})=>e.indentation.i20};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({theme:e})=>e.valueInPx.px10};
  background-color: ${({theme:e})=>e.colors.mainBackground};
  border-left: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};
  border-right: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    padding: ${({theme:e})=>e.valueInPx.px15};
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    padding: ${({theme:e})=>e.valueInPx.px15};
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }
`,ut=a.div`
  height: ${({theme:e})=>e.valueInPercent.pr30};
  width: ${({theme:e})=>e.valueInPercent.pr100};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    padding: ${({theme:e})=>e.indentation.i15};
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }

  @media (max-width: ${({theme:e})=>e.dimensions.tablet}px) {
    padding: ${({theme:e})=>e.indentation.i15};
    width: ${({theme:e})=>e.valueInPercent.pr100};
  }
`,mt=a.img`
  height: ${({theme:e})=>e.valueInPercent.pr100};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  background-size: contain;
`,pt=a.p`
  height: ${({theme:e})=>e.valueInPercent.pr100};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  padding: ${({theme:e})=>e.indentation.i5};
  padding-left: ${({theme:e})=>e.indentation.i50};
  font-size: ${({theme:e})=>e.fontSizes.xl};
  font-weight: ${({theme:e})=>e.fontWeight.medium};
  color: ${({theme:e})=>e.colors.fontColor};
  border-bottom: ${({theme:e})=>e.valueInPx.px1} solid
    ${({theme:e})=>e.usedColors.grayOpacity};
`;export{ut as B,rt as C,dt as M,pt as T,ct as W,be as a,mt as b,lt as c,st as u};
