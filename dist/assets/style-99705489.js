import{_ as G,X as dt,s as B,n as yt}from"./index-78889b3f.js";var oe=e=>e.type==="checkbox",te=e=>e instanceof Date,E=e=>e==null;const Ye=e=>typeof e=="object";var D=e=>!E(e)&&!Array.isArray(e)&&Ye(e)&&!te(e),ht=e=>D(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,gt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vt=(e,i)=>e.has(gt(i)),xt=e=>{const i=e.constructor&&e.constructor.prototype;return D(i)&&i.hasOwnProperty("isPrototypeOf")},$e=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function j(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!($e&&(e instanceof Blob||e instanceof FileList))&&(s||D(e)))if(i=s?[]:{},!s&&!xt(e))i=e;else for(const r in e)e.hasOwnProperty(r)&&(i[r]=j(e[r]));else return e;return i}var ue=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>e===void 0,d=(e,i,s)=>{if(!i||!D(e))return s;const r=ue(i.split(/[,[\].]+?/)).reduce((o,a)=>E(o)?o:o[a],e);return F(r)||r===e?F(e[i])?s:e[i]:r};const We={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},R={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};G.createContext(null);var bt=(e,i,s,r=!0)=>{const o={defaultValues:i._defaultValues};for(const a in e)Object.defineProperty(o,a,{get:()=>{const f=a;return i._proxyFormState[f]!==R.all&&(i._proxyFormState[f]=!r||R.all),s&&(s[f]=!0),e[f]}});return o},T=e=>D(e)&&!Object.keys(e).length,_t=(e,i,s,r)=>{s(e);const{name:o,...a}=e;return T(a)||Object.keys(a).length>=Object.keys(i).length||Object.keys(a).find(f=>i[f]===(!r||R.all))},Ae=e=>Array.isArray(e)?e:[e];function wt(e){const i=G.useRef(e);i.current=e,G.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var N=e=>typeof e=="string",Vt=(e,i,s,r,o)=>N(e)?(r&&i.watch.add(e),d(s,e,o)):Array.isArray(e)?e.map(a=>(r&&i.watch.add(a),d(s,a))):(r&&(i.watchAll=!0),s),Ee=e=>/^\w*$/.test(e),Ze=e=>ue(e.replace(/["|']|\]/g,"").split(/\.|\[/));function V(e,i,s){let r=-1;const o=Ee(i)?[i]:Ze(i),a=o.length,f=a-1;for(;++r<a;){const w=o[r];let _=s;if(r!==f){const C=e[w];_=D(C)||Array.isArray(C)?C:isNaN(+o[r+1])?{}:[]}e[w]=_,e=e[w]}return e}var pt=(e,i,s,r,o)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:o||!0}}:{};const Se=(e,i,s)=>{for(const r of s||Object.keys(e)){const o=d(e,r);if(o){const{_f:a,...f}=o;if(a&&i(a.name)){if(a.ref.focus){a.ref.focus();break}else if(a.refs&&a.refs[0].focus){a.refs[0].focus();break}}else D(f)&&Se(f,i)}}};var qe=e=>({isOnSubmit:!e||e===R.onSubmit,isOnBlur:e===R.onBlur,isOnChange:e===R.onChange,isOnAll:e===R.all,isOnTouch:e===R.onTouched}),ze=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),At=(e,i,s)=>{const r=ue(d(e,s));return V(r,"root",i[s]),V(e,s,r),e},re=e=>typeof e=="boolean",Ie=e=>e.type==="file",K=e=>typeof e=="function",de=e=>{if(!$e)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},fe=e=>N(e),Ce=e=>e.type==="radio",ye=e=>e instanceof RegExp;const He={value:!1,isValid:!1},je={value:!0,isValid:!0};var et=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?je:{value:e[0].value,isValid:!0}:je:He}return He};const Ge={isValid:!1,value:null};var tt=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,Ge):Ge;function Ke(e,i,s="validate"){if(fe(e)||Array.isArray(e)&&e.every(fe)||re(e)&&!e)return{type:s,message:fe(e)?e:"",ref:i}}var ee=e=>D(e)&&!ye(e)?e:{value:e,message:""},Qe=async(e,i,s,r,o)=>{const{ref:a,refs:f,required:w,maxLength:_,minLength:C,min:Y,max:k,pattern:x,validate:H,name:P,valueAsNumber:ve,mount:ce,disabled:xe}=e._f,g=d(i,P);if(!ce||xe)return{};const L=f?f[0]:a,W=b=>{r&&L.reportValidity&&(L.setCustomValidity(re(b)?"":b||""),L.reportValidity())},S={},se=Ce(a),ie=oe(a),be=se||ie,U=(ve||Ie(a))&&F(a.value)&&F(g)||de(a)&&a.value===""||g===""||Array.isArray(g)&&!g.length,Q=pt.bind(null,P,s,S),q=(b,v,A,I=z.maxLength,O=z.minLength)=>{const M=b?v:A;S[P]={type:b?I:O,message:M,ref:a,...Q(b?I:O,M)}};if(o?!Array.isArray(g)||!g.length:w&&(!be&&(U||E(g))||re(g)&&!g||ie&&!et(f).isValid||se&&!tt(f).isValid)){const{value:b,message:v}=fe(w)?{value:!!w,message:w}:ee(w);if(b&&(S[P]={type:z.required,message:v,ref:L,...Q(z.required,v)},!s))return W(v),S}if(!U&&(!E(Y)||!E(k))){let b,v;const A=ee(k),I=ee(Y);if(!E(g)&&!isNaN(g)){const O=a.valueAsNumber||g&&+g;E(A.value)||(b=O>A.value),E(I.value)||(v=O<I.value)}else{const O=a.valueAsDate||new Date(g),M=le=>new Date(new Date().toDateString()+" "+le),X=a.type=="time",ne=a.type=="week";N(A.value)&&g&&(b=X?M(g)>M(A.value):ne?g>A.value:O>new Date(A.value)),N(I.value)&&g&&(v=X?M(g)<M(I.value):ne?g<I.value:O<new Date(I.value))}if((b||v)&&(q(!!b,A.message,I.message,z.max,z.min),!s))return W(S[P].message),S}if((_||C)&&!U&&(N(g)||o&&Array.isArray(g))){const b=ee(_),v=ee(C),A=!E(b.value)&&g.length>+b.value,I=!E(v.value)&&g.length<+v.value;if((A||I)&&(q(A,b.message,v.message),!s))return W(S[P].message),S}if(x&&!U&&N(g)){const{value:b,message:v}=ee(x);if(ye(b)&&!g.match(b)&&(S[P]={type:z.pattern,message:v,ref:a,...Q(z.pattern,v)},!s))return W(v),S}if(H){if(K(H)){const b=await H(g,i),v=Ke(b,L);if(v&&(S[P]={...v,...Q(z.validate,v.message)},!s))return W(v.message),S}else if(D(H)){let b={};for(const v in H){if(!T(b)&&!s)break;const A=Ke(await H[v](g,i),L,v);A&&(b={...A,...Q(v,A.message)},W(A.message),s&&(S[P]=b))}if(!T(b)&&(S[P]={ref:L,...b},!s))return S}}return W(!0),S};function mt(e,i){const s=i.slice(0,-1).length;let r=0;for(;r<s;)e=F(e)?r++:e[i[r++]];return e}function Ft(e){for(const i in e)if(e.hasOwnProperty(i)&&!F(e[i]))return!1;return!0}function $(e,i){const s=Array.isArray(i)?i:Ee(i)?[i]:Ze(i),r=s.length===1?e:mt(e,s),o=s.length-1,a=s[o];return r&&delete r[a],o!==0&&(D(r)&&T(r)||Array.isArray(r)&&Ft(r))&&$(e,s.slice(0,-1)),e}function me(){let e=[];return{get observers(){return e},next:o=>{for(const a of e)a.next&&a.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(a=>a!==o)}}),unsubscribe:()=>{e=[]}}}var he=e=>E(e)||!Ye(e);function J(e,i){if(he(e)||he(i))return e===i;if(te(e)&&te(i))return e.getTime()===i.getTime();const s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(const o of s){const a=e[o];if(!r.includes(o))return!1;if(o!=="ref"){const f=i[o];if(te(a)&&te(f)||D(a)&&D(f)||Array.isArray(a)&&Array.isArray(f)?!J(a,f):a!==f)return!1}}return!0}var rt=e=>e.type==="select-multiple",kt=e=>Ce(e)||oe(e),Fe=e=>de(e)&&e.isConnected,st=e=>{for(const i in e)if(K(e[i]))return!0;return!1};function ge(e,i={}){const s=Array.isArray(e);if(D(e)||s)for(const r in e)Array.isArray(e[r])||D(e[r])&&!st(e[r])?(i[r]=Array.isArray(e[r])?[]:{},ge(e[r],i[r])):E(e[r])||(i[r]=!0);return i}function it(e,i,s){const r=Array.isArray(e);if(D(e)||r)for(const o in e)Array.isArray(e[o])||D(e[o])&&!st(e[o])?F(i)||he(s[o])?s[o]=Array.isArray(e[o])?ge(e[o],[]):{...ge(e[o])}:it(e[o],E(i)?{}:i[o],s[o]):s[o]=!J(e[o],i[o]);return s}var ke=(e,i)=>it(e,i,ge(i)),nt=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:r})=>F(e)?e:i?e===""?NaN:e&&+e:s&&N(e)?new Date(e):r?r(e):e;function De(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Ie(i)?i.files:Ce(i)?tt(e.refs).value:rt(i)?[...i.selectedOptions].map(({value:s})=>s):oe(i)?et(e.refs).value:nt(F(i.value)?e.ref.value:i.value,e)}var Dt=(e,i,s,r)=>{const o={};for(const a of e){const f=d(i,a);f&&V(o,a,f._f)}return{criteriaMode:s,names:[...e],fields:o,shouldUseNativeValidation:r}},ae=e=>F(e)?e:ye(e)?e.source:D(e)?ye(e.value)?e.value.source:e.value:e,St=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xe(e,i,s){const r=d(e,s);if(r||Ee(s))return{error:r,name:s};const o=s.split(".");for(;o.length;){const a=o.join("."),f=d(i,a),w=d(e,a);if(f&&!Array.isArray(f)&&s!==a)return{name:s};if(w&&w.type)return{name:a,error:w};o.pop()}return{name:s}}var $t=(e,i,s,r,o)=>o.isOnAll?!1:!s&&o.isOnTouch?!(i||e):(s?r.isOnBlur:o.isOnBlur)?!e:(s?r.isOnChange:o.isOnChange)?e:!0,Et=(e,i)=>!ue(d(e,i)).length&&$(e,i);const It={mode:R.onSubmit,reValidateMode:R.onChange,shouldFocusError:!0};function Ct(e={},i){let s={...It,...e},r={submitCount:0,isDirty:!1,isLoading:K(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},a=D(s.defaultValues)||D(s.values)?j(s.defaultValues||s.values)||{}:{},f=s.shouldUnregister?{}:j(a),w={action:!1,mount:!1,watch:!1},_={mount:new Set,unMount:new Set,array:new Set,watch:new Set},C,Y=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:me(),array:me(),state:me()},H=e.resetOptions&&e.resetOptions.keepDirtyValues,P=qe(s.mode),ve=qe(s.reValidateMode),ce=s.criteriaMode===R.all,xe=t=>n=>{clearTimeout(Y),Y=setTimeout(t,n)},g=async t=>{if(k.isValid||t){const n=s.resolver?T((await U()).errors):await q(o,!0);n!==r.isValid&&x.state.next({isValid:n})}},L=t=>k.isValidating&&x.state.next({isValidating:t}),W=(t,n=[],l,y,c=!0,u=!0)=>{if(y&&l){if(w.action=!0,u&&Array.isArray(d(o,t))){const h=l(d(o,t),y.argA,y.argB);c&&V(o,t,h)}if(u&&Array.isArray(d(r.errors,t))){const h=l(d(r.errors,t),y.argA,y.argB);c&&V(r.errors,t,h),Et(r.errors,t)}if(k.touchedFields&&u&&Array.isArray(d(r.touchedFields,t))){const h=l(d(r.touchedFields,t),y.argA,y.argB);c&&V(r.touchedFields,t,h)}k.dirtyFields&&(r.dirtyFields=ke(a,f)),x.state.next({name:t,isDirty:v(t,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else V(f,t,n)},S=(t,n)=>{V(r.errors,t,n),x.state.next({errors:r.errors})},se=(t,n,l,y)=>{const c=d(o,t);if(c){const u=d(f,t,F(l)?d(a,t):l);F(u)||y&&y.defaultChecked||n?V(f,t,n?u:De(c._f)):O(t,u),w.mount&&g()}},ie=(t,n,l,y,c)=>{let u=!1,h=!1;const p={name:t};if(!l||y){k.isDirty&&(h=r.isDirty,r.isDirty=p.isDirty=v(),u=h!==p.isDirty);const m=J(d(a,t),n);h=d(r.dirtyFields,t),m?$(r.dirtyFields,t):V(r.dirtyFields,t,!0),p.dirtyFields=r.dirtyFields,u=u||k.dirtyFields&&h!==!m}if(l){const m=d(r.touchedFields,t);m||(V(r.touchedFields,t,l),p.touchedFields=r.touchedFields,u=u||k.touchedFields&&m!==l)}return u&&c&&x.state.next(p),u?p:{}},be=(t,n,l,y)=>{const c=d(r.errors,t),u=k.isValid&&re(n)&&r.isValid!==n;if(e.delayError&&l?(C=xe(()=>S(t,l)),C(e.delayError)):(clearTimeout(Y),C=null,l?V(r.errors,t,l):$(r.errors,t)),(l?!J(c,l):c)||!T(y)||u){const h={...y,...u&&re(n)?{isValid:n}:{},errors:r.errors,name:t};r={...r,...h},x.state.next(h)}L(!1)},U=async t=>s.resolver(f,s.context,Dt(t||_.mount,o,s.criteriaMode,s.shouldUseNativeValidation)),Q=async t=>{const{errors:n}=await U();if(t)for(const l of t){const y=d(n,l);y?V(r.errors,l,y):$(r.errors,l)}else r.errors=n;return n},q=async(t,n,l={valid:!0})=>{for(const y in t){const c=t[y];if(c){const{_f:u,...h}=c;if(u){const p=_.array.has(u.name),m=await Qe(c,f,ce,s.shouldUseNativeValidation&&!n,p);if(m[u.name]&&(l.valid=!1,n))break;!n&&(d(m,u.name)?p?At(r.errors,m,u.name):V(r.errors,u.name,m[u.name]):$(r.errors,u.name))}h&&await q(h,n,l)}}return l.valid},b=()=>{for(const t of _.unMount){const n=d(o,t);n&&(n._f.refs?n._f.refs.every(l=>!Fe(l)):!Fe(n._f.ref))&&_e(t)}_.unMount=new Set},v=(t,n)=>(t&&n&&V(f,t,n),!J(Pe(),a)),A=(t,n,l)=>Vt(t,_,{...w.mount?f:F(n)?a:N(t)?{[t]:n}:n},l,n),I=t=>ue(d(w.mount?f:a,t,e.shouldUnregister?d(a,t,[]):[])),O=(t,n,l={})=>{const y=d(o,t);let c=n;if(y){const u=y._f;u&&(!u.disabled&&V(f,t,nt(n,u)),c=de(u.ref)&&E(n)?"":n,rt(u.ref)?[...u.ref.options].forEach(h=>h.selected=c.includes(h.value)):u.refs?oe(u.ref)?u.refs.length>1?u.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(p=>p===h.value):c===h.value)):u.refs[0]&&(u.refs[0].checked=!!c):u.refs.forEach(h=>h.checked=h.value===c):Ie(u.ref)?u.ref.value="":(u.ref.value=c,u.ref.type||x.values.next({name:t,values:{...f}})))}(l.shouldDirty||l.shouldTouch)&&ie(t,c,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&le(t)},M=(t,n,l)=>{for(const y in n){const c=n[y],u=`${t}.${y}`,h=d(o,u);(_.array.has(t)||!he(c)||h&&!h._f)&&!te(c)?M(u,c,l):O(u,c,l)}},X=(t,n,l={})=>{const y=d(o,t),c=_.array.has(t),u=j(n);V(f,t,u),c?(x.array.next({name:t,values:{...f}}),(k.isDirty||k.dirtyFields)&&l.shouldDirty&&x.state.next({name:t,dirtyFields:ke(a,f),isDirty:v(t,u)})):y&&!y._f&&!E(u)?M(t,u,l):O(t,u,l),ze(t,_)&&x.state.next({...r}),x.values.next({name:t,values:{...f}}),!w.mount&&i()},ne=async t=>{const n=t.target;let l=n.name,y=!0;const c=d(o,l),u=()=>n.type?De(c._f):ht(t);if(c){let h,p;const m=u(),Z=t.type===We.BLUR||t.type===We.FOCUS_OUT,ut=!St(c._f)&&!s.resolver&&!d(r.errors,l)&&!c._f.deps||$t(Z,d(r.touchedFields,l),r.isSubmitted,ve,P),Ve=ze(l,_,Z);V(f,l,m),Z?(c._f.onBlur&&c._f.onBlur(t),C&&C(0)):c._f.onChange&&c._f.onChange(t);const pe=ie(l,m,Z,!1),ct=!T(pe)||Ve;if(!Z&&x.values.next({name:l,type:t.type,values:{...f}}),ut)return k.isValid&&g(),ct&&x.state.next({name:l,...Ve?{}:pe});if(!Z&&Ve&&x.state.next({...r}),L(!0),s.resolver){const{errors:Ne}=await U([l]),ft=Xe(r.errors,o,l),Be=Xe(Ne,o,ft.name||l);h=Be.error,l=Be.name,p=T(Ne)}else h=(await Qe(c,f,ce,s.shouldUseNativeValidation))[l],y=isNaN(m)||m===d(f,l,m),y&&(h?p=!1:k.isValid&&(p=await q(o,!0)));y&&(c._f.deps&&le(c._f.deps),be(l,p,h,pe))}},le=async(t,n={})=>{let l,y;const c=Ae(t);if(L(!0),s.resolver){const u=await Q(F(t)?t:c);l=T(u),y=t?!c.some(h=>d(u,h)):l}else t?(y=(await Promise.all(c.map(async u=>{const h=d(o,u);return await q(h&&h._f?{[u]:h}:h)}))).every(Boolean),!(!y&&!r.isValid)&&g()):y=l=await q(o);return x.state.next({...!N(t)||k.isValid&&l!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:l}:{},errors:r.errors,isValidating:!1}),n.shouldFocus&&!y&&Se(o,u=>u&&d(r.errors,u),t?c:_.mount),y},Pe=t=>{const n={...a,...w.mount?f:{}};return F(t)?n:N(t)?d(n,t):t.map(l=>d(n,l))},Oe=(t,n)=>({invalid:!!d((n||r).errors,t),isDirty:!!d((n||r).dirtyFields,t),isTouched:!!d((n||r).touchedFields,t),error:d((n||r).errors,t)}),lt=t=>{t&&Ae(t).forEach(n=>$(r.errors,n)),x.state.next({errors:t?r.errors:{}})},Te=(t,n,l)=>{const y=(d(o,t,{_f:{}})._f||{}).ref;V(r.errors,t,{...n,ref:y}),x.state.next({name:t,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},at=(t,n)=>K(t)?x.values.subscribe({next:l=>t(A(void 0,n),l)}):A(t,n,!0),_e=(t,n={})=>{for(const l of t?Ae(t):_.mount)_.mount.delete(l),_.array.delete(l),n.keepValue||($(o,l),$(f,l)),!n.keepError&&$(r.errors,l),!n.keepDirty&&$(r.dirtyFields,l),!n.keepTouched&&$(r.touchedFields,l),!s.shouldUnregister&&!n.keepDefaultValue&&$(a,l);x.values.next({values:{...f}}),x.state.next({...r,...n.keepDirty?{isDirty:v()}:{}}),!n.keepIsValid&&g()},we=(t,n={})=>{let l=d(o,t);const y=re(n.disabled);return V(o,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...n}}),_.mount.add(t),F(n.value)||V(f,t,n.value),l?y&&V(f,t,n.disabled?void 0:d(f,t,De(l._f))):se(t,!0,n.value),{...y?{disabled:n.disabled}:{},...s.progressive?{required:!!n.required,min:ae(n.min),max:ae(n.max),minLength:ae(n.minLength),maxLength:ae(n.maxLength),pattern:ae(n.pattern)}:{},name:t,onChange:ne,onBlur:ne,ref:c=>{if(c){we(t,n),l=d(o,t);const u=F(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=kt(u),p=l._f.refs||[];if(h?p.find(m=>m===u):u===l._f.ref)return;V(o,t,{_f:{...l._f,...h?{refs:[...p.filter(Fe),u,...Array.isArray(d(a,t))?[{}]:[]],ref:{type:u.type,name:t}}:{ref:u}}}),se(t,!1,void 0,u)}else l=d(o,t,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||n.shouldUnregister)&&!(vt(_.array,t)&&w.action)&&_.unMount.add(t)}}},Le=()=>s.shouldFocusError&&Se(o,t=>t&&d(r.errors,t),_.mount),Re=(t,n)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let y=j(f);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:u}=await U();r.errors=c,y=u}else await q(o);$(r.errors,"root"),T(r.errors)?(x.state.next({errors:{}}),await t(y,l)):(n&&await n({...r.errors},l),Le(),setTimeout(Le)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:T(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ot=(t,n={})=>{d(o,t)&&(F(n.defaultValue)?X(t,d(a,t)):(X(t,n.defaultValue),V(a,t,n.defaultValue)),n.keepTouched||$(r.touchedFields,t),n.keepDirty||($(r.dirtyFields,t),r.isDirty=n.defaultValue?v(t,d(a,t)):v()),n.keepError||($(r.errors,t),k.isValid&&g()),x.state.next({...r}))},Ue=(t,n={})=>{const l=t||a,y=j(l),c=t&&!T(t)?y:a;if(n.keepDefaultValues||(a=l),!n.keepValues){if(n.keepDirtyValues||H)for(const u of _.mount)d(r.dirtyFields,u)?V(c,u,d(f,u)):X(u,d(c,u));else{if($e&&F(t))for(const u of _.mount){const h=d(o,u);if(h&&h._f){const p=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(de(p)){const m=p.closest("form");if(m){m.reset();break}}}}o={}}f=e.shouldUnregister?n.keepDefaultValues?j(a):{}:j(c),x.array.next({values:{...c}}),x.values.next({values:{...c}})}_={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!w.mount&&i(),w.mount=!k.isValid||!!n.keepIsValid,w.watch=!!e.shouldUnregister,x.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!J(t,a)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirtyValues?r.dirtyFields:n.keepDefaultValues&&t?ke(a,t):{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Me=(t,n)=>Ue(K(t)?t(f):t,n);return{control:{register:we,unregister:_e,getFieldState:Oe,handleSubmit:Re,setError:Te,_executeSchema:U,_getWatch:A,_getDirty:v,_updateValid:g,_removeUnmounted:b,_updateFieldArray:W,_getFieldArray:I,_reset:Ue,_resetDefaultValues:()=>K(s.defaultValues)&&s.defaultValues().then(t=>{Me(t,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:x,_proxyFormState:k,get _fields(){return o},get _formValues(){return f},get _state(){return w},set _state(t){w=t},get _defaultValues(){return a},get _names(){return _},set _names(t){_=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:le,register:we,handleSubmit:Re,watch:at,setValue:X,getValues:Pe,reset:Me,resetField:ot,clearErrors:lt,unregister:_e,setError:Te,setFocus:(t,n={})=>{const l=d(o,t),y=l&&l._f;if(y){const c=y.refs?y.refs[0]:y.ref;c.focus&&(c.focus(),n.shouldSelect&&c.select())}},getFieldState:Oe}}function Ut(e={}){const i=G.useRef(),s=G.useRef(),[r,o]=G.useState({isDirty:!1,isValidating:!1,isLoading:K(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:K(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Ct(e,()=>o(f=>({...f}))),formState:r});const a=i.current.control;return a._options=e,wt({subject:a._subjects.state,next:f=>{_t(f,a._proxyFormState,a._updateFormState,!0)&&o({...a._formState})}}),G.useEffect(()=>{e.values&&!J(e.values,s.current)?(a._reset(e.values,a._options.resetOptions),s.current=e.values):a._resetDefaultValues()},[e.values,a]),G.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),i.current.formState=bt(r,a),i.current}const Je=dt`
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.02)
  }`,Mt=B.div`
  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: calc(
    ${({theme:e})=>e.valueInVh.vh100} + ${({theme:e})=>e.valueInPx.px40}
  );
  overflow: auto;
`,Nt=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.fontColor};

  width: ${({theme:e})=>e.valueInPercent.pr100};
  height: ${({theme:e})=>e.valueInPercent.pr100};
`,Bt=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-width: ${({theme:e})=>e.valueInPercent.pr50};
  padding: ${({theme:e})=>e.valueInPx.px20} ${({theme:e})=>e.valueInPx.px30};
  margin: ${({theme:e})=>e.valueInPx.px40} ${({theme:e})=>e.valueInPx.px0};

  background: ${({theme:e})=>e.colors.formBackground};
  border-radius: ${({theme:e})=>e.valueInPx.px10};
  box-shadow:
    1px 1px 2px ${({theme:e})=>e.colors.boxShadow},
    -1px -1px 2px ${({theme:e})=>e.colors.boxShadow};

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    max-width: ${({theme:e})=>e.valueInPercent.pr80};
  }
`,Wt=B.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.valueInPx.px15};

  margin-bottom: ${({theme:e})=>e.valueInPx.px20};
`,qt=B.h3`
  padding: ${({theme:e})=>e.valueInPx.px15} ${({theme:e})=>e.valueInPx.px0};
  font-size: ${({theme:e})=>e.fontSizes.xxxl};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  line-height: ${({theme:e})=>e.valueInPx.px20};
  color: ${({theme:e})=>e.colors.fontColor};
`,zt=B.div`
  margin-bottom: ${({theme:e})=>e.indentation.i10};

  font-size: ${({theme:e})=>e.fontSizes.m};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  line-height: ${({theme:e})=>e.valueInPx.px25};
  color: ${({theme:e})=>e.colors.fontColor};

  opacity: 0.5;
`,Ht=B.div`
  cursor: pointer;

  font-size: ${({theme:e})=>e.fontSizes.l};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  line-height: ${({theme:e})=>e.valueInPx.px25};
  color: ${({theme:e})=>e.colors.fontColor};
  text-decoration-line: underline;

  &:hover {
    transform: scale(1.05);
  }
`,jt=B.img`
  width: ${({theme:e})=>e.valueInPx.px30};
  height: ${({theme:e})=>e.valueInPx.px30};
`,Pt=yt`
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
    -webkit-animation: ${Je} 200ms ease-out;
    animation: ${Je} 200ms ease-out;
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
`,Gt=B.select`
  width: ${({theme:e})=>e.valueInPercent.pr50};
  ${Pt}
`,Kt=B.option`
  cursor: pointer;
  background: ${({theme:e})=>e.usedColors.white};
  color: ${({theme:e})=>e.usedColors.black};
`;export{Mt as C,Wt as F,Gt as G,Bt as I,Ht as L,Kt as O,qt as T,Nt as W,jt as a,zt as b,pt as c,d as g,V as s,Ut as u};
