import{r as w,p as u,j as l,q as g}from"./index-8d0cbd5a.js";import{W as t,M as N,C as E,T as G,c as f}from"./style-74cba690.js";import{H as W}from"./index-f2613503.js";import"./forwardPropGuard-cc2dedbb.js";const F=()=>{const[e,h]=w.useState([]),i=u(),p=async()=>{const n=await g();h(n)},T=e.filter(n=>n.id===(i==null?void 0:i.id));return w.useEffect(()=>{p()},[]),l.jsx(t,{children:l.jsxs(N,{children:[l.jsx(W,{}),i!=null&&i.id?T.length>0&&T.map(({date:n,text:d,image:x,likes:j,tweetId:m,creator:s})=>l.jsx(f,{tweetId:m,creatorId:s==null?void 0:s.id,name:s==null?void 0:s.name,lastName:s==null?void 0:s.lastName,email:s==null?void 0:s.email,photo:s==null?void 0:s.photo,date:n,text:d,image:x,likes:j,setTweets:h,handleGetTweets:p},m)):l.jsxs(l.Fragment,{children:[l.jsx(E,{setTweets:h}),e.length>0&&l.jsx(G,{children:"Tweets"}),e.length>0&&e.map(({date:n,text:d,image:x,likes:j,tweetId:m,creator:s})=>l.jsx(f,{tweetId:m,creatorId:s==null?void 0:s.id,name:s==null?void 0:s.name,lastName:s==null?void 0:s.lastName,email:s==null?void 0:s.email,photo:s==null?void 0:s.photo,date:n,text:d,image:x,likes:j,setTweets:h,handleGetTweets:p},m))]})]})})};export{F as Feed};
